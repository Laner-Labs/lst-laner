/*!
 * Sanctum LST Data Collector
 * 
 * A high-performance data collection service for Liquid Staking Token (LST) metrics
 * from the Sanctum protocol. Collects APY, holder count, and TVL data for configured
 * LST tokens and persists them to a PostgreSQL database.
 * 
 * Features:
 * - Concurrent data fetching with exponential backoff retry logic
 * - Comprehensive error handling and logging
 * - Database transaction management with conflict resolution
 * - Rate limiting to respect API constraints
 * 
 * Environment Variables:
 * - DATABASE_URL: PostgreSQL connection string
 */

use anyhow::Result;
use backoff::ExponentialBackoffBuilder;
use chrono::Utc;
use bigdecimal::BigDecimal;
use futures::future::join_all;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use sqlx::{postgres::PgPoolOptions, PgPool};
use std::{env, str::FromStr, time::Duration, sync::{Arc, atomic::{AtomicU32, Ordering}}, collections::HashMap};
use tracing::{error, info};
use serde_json::Value;

/// API response structure for APY data from Sanctum's endpoints
#[derive(Debug, Serialize, Deserialize)]
struct ApyApiResponse {
    apys: HashMap<String, f64>,
    errs: HashMap<String, Value>,
}

/// Holder information metadata from the API
#[derive(Debug, Serialize, Deserialize)]
struct HolderInfo {
    count: String,
    timestamp: String,
}

/// API response structure for holder data
#[derive(Debug, Serialize, Deserialize)]
struct HoldersApiResponse {
    holders: HashMap<String, HolderInfo>,
    errs: HashMap<String, Value>,
}

/// API response structure for TVL data
#[derive(Debug, Serialize, Deserialize)]
struct TvlApiResponse {
    tvls: HashMap<String, String>,
    errs: HashMap<String, Value>,
}

/// Database record for APY data
#[derive(Debug)]
struct ApyRecord {
    lst_symbol: String,
    apy_type: String,
    apy_value: BigDecimal,
}

/// Database record for holder information
#[derive(Debug)]
struct HolderRecord {
    lst_symbol: String,
    total_holders: i64,
    total_supply: BigDecimal,
}

/// Database record for TVL data
#[derive(Debug)]
struct TvlRecord {
    lst_symbol: String,
    tvl_value: BigDecimal,
}

/// Database record for API request logging
#[derive(Debug)]
struct ApiLogRecord {
    endpoint: String,
    lst_symbol: Option<String>,
    request_status: String,
    response_time_ms: Option<i32>,
    error_message: Option<String>,
    retry_count: i32,
}

/// Configuration for supported LST tokens with their mint addresses
const LST_TOKENS: &[(&str, &str)] = &[
    ("JitoSOL", "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn"),
    ("mSOL", "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),
    ("bSOL", "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1"),
    ("INF", "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm"),
    ("JupSOL", "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v"),
    ("bpSOL", "BPSoLzmLQn47EP5aa7jmFngRL8KC3TWAeAwXwZD8ip3P"),
    ("bonkSOL", "BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs"),
];

const SANCTUM_API_BASE: &str = "https://extra-api.sanctum.so";

/// Creates a configured HTTP client with appropriate timeouts and headers
async fn create_http_client() -> Client {
    reqwest::Client::builder()
        .timeout(Duration::from_secs(30))
        .connect_timeout(Duration::from_secs(10))
        .user_agent("Sanctum-Data-Collector/1.0")
        .build()
        .expect("Failed to create HTTP client")
}

/// Executes HTTP requests with exponential backoff retry logic
/// 
/// Implements a robust retry mechanism with:
/// - Exponential backoff (1s initial, 10s max interval)
/// - 60 second total timeout
/// - Detailed logging of attempts and failures
/// - Automatic JSON deserialization
async fn make_api_request_with_retry<T>(
    client: &Client,
    url: &str,
    _max_retries: u32,
) -> Result<T>
where
    T: for<'de> Deserialize<'de>,
{
    info!("Making API request to: {}", url);
    
    let backoff = ExponentialBackoffBuilder::new()
        .with_initial_interval(Duration::from_secs(1))
        .with_max_interval(Duration::from_secs(10))
        .with_max_elapsed_time(Some(Duration::from_secs(60)))
        .build();

    let attempt_counter = Arc::new(AtomicU32::new(0));
    let attempt_counter_clone = Arc::clone(&attempt_counter);
    
    let operation = || {
        let attempt_counter = Arc::clone(&attempt_counter_clone);
        async move {
            let attempt = attempt_counter.fetch_add(1, Ordering::SeqCst) + 1;
            info!("API request attempt {} for: {}", attempt, url);
            
            let start_time = std::time::Instant::now();
            
            let response = client.get(url).send().await
                .map_err(|e| {
                    error!("Request failed on attempt {}: {}", attempt, e);
                    backoff::Error::transient(anyhow::anyhow!("Request failed: {}", e))
                })?;
            
            let response_time = start_time.elapsed().as_millis() as i32;
            info!("API response received in {}ms for: {}", response_time, url);
            
            if !response.status().is_success() {
                error!("API request failed with status {} on attempt {}: {}", response.status(), attempt, url);
                return Err(backoff::Error::transient(
                    anyhow::anyhow!("API request failed with status: {}", response.status())
                ));
            }
            
            info!("Parsing JSON response for: {}", url);
            let data: T = response.json().await
                .map_err(|e| {
                    error!("JSON parsing failed on attempt {}: {}", attempt, e);
                    backoff::Error::transient(anyhow::anyhow!("JSON parsing failed: {}", e))
                })?;
            
            info!("Successfully parsed response for: {}", url);
            Ok((data, response_time))
        }
    };

    match backoff::future::retry(backoff, operation).await {
        Ok((data, _response_time)) => {
            let final_attempt = attempt_counter.load(Ordering::SeqCst);
            info!("API request completed successfully after {} attempts: {}", final_attempt, url);
            Ok(data)
        }
        Err(e) => {
            let final_attempt = attempt_counter.load(Ordering::SeqCst);
            error!("API request failed after {} attempts for {}: {}", final_attempt, url, e);
            Err(e)
        }
    }
}

/// Extracts human-readable error messages from API response error objects
/// 
/// Handles various error formats returned by the Sanctum API:
/// - Simple string errors
/// - Complex objects with message/code fields
/// - Null values and fallback scenarios
fn extract_error_message(error_value: &Value) -> String {
    match error_value {
        Value::String(s) => s.clone(),
        Value::Object(obj) => {
            if let Some(message) = obj.get("message") {
                match message {
                    Value::String(s) => s.clone(),
                    Value::Null => {
                        if let Some(code) = obj.get("code") {
                            match code {
                                Value::String(s) => s.clone(),
                                _ => "Unknown error".to_string(),
                            }
                        } else {
                            "Unknown error".to_string()
                        }
                    },
                    _ => format!("{:?}", message),
                }
            } else if let Some(code) = obj.get("code") {
                match code {
                    Value::String(s) => s.clone(),
                    _ => "Unknown error".to_string(),
                }
            } else {
                format!("{:?}", obj)
            }
        },
        _ => format!("{:?}", error_value),
    }
}

/// Fetches APY data for a specific LST token and type (inception or latest)
/// 
/// Returns an ApyRecord containing the LST symbol, APY type, and calculated value.
/// Handles API errors gracefully and converts floating-point values to BigDecimal
/// for precise database storage.
async fn fetch_apy_data(
    client: &Client,
    lst_symbol: &str,
    apy_type: &str,
) -> Result<ApyRecord> {
    let endpoint = match apy_type {
        "inception" => "/v1/apy/inception",
        "latest" => "/v1/apy/latest",
        _ => anyhow::bail!("Invalid APY type: {}", apy_type),
    };

    let url = format!("{}{}?lst={}", SANCTUM_API_BASE, endpoint, lst_symbol);
    info!("Starting fetch {} APY data for {} from: {}", apy_type, lst_symbol, url);

    let start_time = std::time::Instant::now();
    let response: ApyApiResponse = make_api_request_with_retry(client, &url, 3).await?;
    let fetch_duration = start_time.elapsed();
    info!("Completed fetch {} APY data for {} in {:?}", apy_type, lst_symbol, fetch_duration);
    
    if let Some(error) = response.errs.get(lst_symbol) {
        anyhow::bail!("API returned error for {}: {}", lst_symbol, extract_error_message(error));
    }
    
    let apy_value = response.apys.get(lst_symbol)
        .ok_or_else(|| anyhow::anyhow!("No APY data found for {}", lst_symbol))?;
    
    let apy_decimal = BigDecimal::from_str(&apy_value.to_string())
        .map_err(|e| anyhow::anyhow!("Failed to convert APY value: {}", e))?;
    
    info!("Successfully created APY record for {} ({}): {}", lst_symbol, apy_type, apy_decimal);
    Ok(ApyRecord {
        lst_symbol: lst_symbol.to_string(),
        apy_type: apy_type.to_string(),
        apy_value: apy_decimal,
    })
}

/// Fetches holder count data for a specific LST token
/// 
/// Note: The current API endpoint provides holder count but not total supply.
/// Total supply is set to 0 as a placeholder until a proper supply endpoint
/// is available.
async fn fetch_holder_data(client: &Client, lst_symbol: &str) -> Result<HolderRecord> {
    let url = format!("{}/v1/holders?lst={}", SANCTUM_API_BASE, lst_symbol);
    info!("Starting fetch holder data for {} from: {}", lst_symbol, url);

    let start_time = std::time::Instant::now();
    let response: HoldersApiResponse = make_api_request_with_retry(client, &url, 3).await?;
    let fetch_duration = start_time.elapsed();
    info!("Completed fetch holder data for {} in {:?}", lst_symbol, fetch_duration);
    
    if let Some(error) = response.errs.get(lst_symbol) {
        anyhow::bail!("API returned error for {}: {}", lst_symbol, extract_error_message(error));
    }
    
    let holder_info = response.holders.get(lst_symbol)
        .ok_or_else(|| anyhow::anyhow!("No holder data found for {}", lst_symbol))?;
    
    let total_holders = holder_info.count.parse::<i64>()
        .map_err(|e| anyhow::anyhow!("Failed to parse holder count: {}", e))?;
    
    let total_supply = BigDecimal::from(0);
    
    info!("Successfully created holder record for {}: {} holders", 
          lst_symbol, total_holders);
    Ok(HolderRecord {
        lst_symbol: lst_symbol.to_string(),
        total_holders,
        total_supply,
    })
}

/// Fetches Total Value Locked (TVL) data for a specific LST token
/// 
/// Converts string-based TVL values to BigDecimal for precise financial calculations
/// and database storage.
async fn fetch_tvl_data(client: &Client, lst_symbol: &str) -> Result<TvlRecord> {
    let url = format!("{}/v1/tvl/current?lst={}", SANCTUM_API_BASE, lst_symbol);
    info!("Starting fetch TVL data for {} from: {}", lst_symbol, url);

    let start_time = std::time::Instant::now();
    let response: TvlApiResponse = make_api_request_with_retry(client, &url, 3).await?;
    let fetch_duration = start_time.elapsed();
    info!("Completed fetch TVL data for {} in {:?}", lst_symbol, fetch_duration);
    
    if let Some(error) = response.errs.get(lst_symbol) {
        anyhow::bail!("API returned error for {}: {}", lst_symbol, extract_error_message(error));
    }
    
    let tvl_str = response.tvls.get(lst_symbol)
        .ok_or_else(|| anyhow::anyhow!("No TVL data found for {}", lst_symbol))?;
    
    let tvl_value = BigDecimal::from_str(tvl_str)
        .map_err(|e| anyhow::anyhow!("Failed to convert TVL value: {}", e))?;
    
    info!("Successfully created TVL record for {}: {}", lst_symbol, tvl_value);
    Ok(TvlRecord {
        lst_symbol: lst_symbol.to_string(),
        tvl_value,
    })
}

/// Persists APY records to the database with conflict resolution
/// 
/// Uses UPSERT logic to handle duplicate entries by updating existing records
/// with new data while preserving the original creation timestamp.
async fn save_apy_data(pool: &PgPool, records: Vec<ApyRecord>) -> Result<()> {
    let record_count = records.len();
    for record in records {
        sqlx::query!(
            r#"
            INSERT INTO lst_apy_data (lst_symbol, apy_type, apy_value, collected_at)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (lst_symbol, apy_type) 
            DO UPDATE SET 
                apy_value = EXCLUDED.apy_value,
                collected_at = EXCLUDED.collected_at,
                updated_at = NOW()
            "#,
            record.lst_symbol,
            record.apy_type,
            record.apy_value,
            Utc::now()
        )
        .execute(pool)
        .await?;
    }
    
    info!("Saved {} APY records", record_count);
    Ok(())
}

/// Persists holder data records to the database with conflict resolution
/// 
/// Handles time-based conflicts by updating records collected at the same time
/// while maintaining historical data for different collection periods.
async fn save_holder_data(pool: &PgPool, records: Vec<HolderRecord>) -> Result<()> {
    let record_count = records.len();
    for record in records {
        sqlx::query!(
            r#"
            INSERT INTO lst_holder_data (lst_symbol, total_holders, total_supply, collected_at)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (lst_symbol, collected_at) 
            DO UPDATE SET 
                total_holders = EXCLUDED.total_holders,
                total_supply = EXCLUDED.total_supply,
                updated_at = NOW()
            "#,
            record.lst_symbol,
            record.total_holders,
            record.total_supply,
            Utc::now()
        )
        .execute(pool)
        .await?;
    }
    
    info!("Saved {} holder records", record_count);
    Ok(())
}

/// Persists TVL data records to the database with conflict resolution
/// 
/// Maintains a time series of TVL data by preventing duplicates for the same
/// LST token and collection timestamp combination.
async fn save_tvl_data(pool: &PgPool, records: Vec<TvlRecord>) -> Result<()> {
    let record_count = records.len();
    for record in records {
        sqlx::query!(
            r#"
            INSERT INTO lst_tvl_data (lst_symbol, tvl_value, collected_at)
            VALUES ($1, $2, $3)
            ON CONFLICT (lst_symbol, collected_at) 
            DO UPDATE SET 
                tvl_value = EXCLUDED.tvl_value,
                updated_at = NOW()
            "#,
            record.lst_symbol,
            record.tvl_value,
            Utc::now()
        )
        .execute(pool)
        .await?;
    }
    
    info!("Saved {} TVL records", record_count);
    Ok(())
}

/// Records API request metadata for monitoring and debugging purposes
/// 
/// Logs successful and failed API requests with timing information,
/// error details, and retry counts for operational visibility.
async fn log_api_request(pool: &PgPool, log_record: ApiLogRecord) -> Result<()> {
    sqlx::query!(
        r#"
        INSERT INTO api_request_logs (endpoint, lst_symbol, request_status, response_time_ms, error_message, retry_count)
        VALUES ($1, $2, $3, $4, $5, $6)
        "#,
        log_record.endpoint,
        log_record.lst_symbol,
        log_record.request_status,
        log_record.response_time_ms,
        log_record.error_message,
        log_record.retry_count
    )
    .execute(pool)
    .await?;
    
    Ok(())
}

/// Orchestrates the complete data collection process for all configured LST tokens
/// 
/// Implements a respectful data collection strategy with:
/// - Configurable delays between requests to avoid rate limiting
/// - Concurrent APY data fetching (inception and latest)
/// - Sequential processing of different data types
/// - Comprehensive error handling with detailed logging
/// - Batch database operations for efficiency
async fn collect_all_data(pool: &PgPool) -> Result<()> {
    let client = create_http_client().await;
    let mut all_apy_data = Vec::new();
    let mut all_holder_data = Vec::new();
    let mut all_tvl_data = Vec::new();

    for (lst_symbol, _mint_address) in LST_TOKENS {
        info!("🚀 Starting data collection for {}", lst_symbol);
        
        info!("⏱️  Initial delay before processing {}", lst_symbol);
        tokio::time::sleep(Duration::from_secs(2)).await;

        info!("📊 Starting APY data collection for {}", lst_symbol);
        let apy_tasks = vec![
            fetch_apy_data(&client, lst_symbol, "inception"),
            fetch_apy_data(&client, lst_symbol, "latest"),
        ];
        
        info!("⏳ Awaiting APY tasks for {}", lst_symbol);
        let apy_results = join_all(apy_tasks).await;
        info!("✅ APY tasks completed for {}", lst_symbol);
        
        for result in apy_results {
            match result {
                Ok(apy_record) => {
                    info!("✅ APY record collected for {}: {} = {}", 
                          lst_symbol, apy_record.apy_type, apy_record.apy_value);
                    all_apy_data.push(apy_record);
                },
                Err(e) => {
                    error!("❌ Failed to fetch APY data for {}: {}", lst_symbol, e);
                    log_api_request(pool, ApiLogRecord {
                        endpoint: format!("{}/v1/apy/*", SANCTUM_API_BASE),
                        lst_symbol: Some(lst_symbol.to_string()),
                        request_status: "failed".to_string(),
                        response_time_ms: None,
                        error_message: Some(e.to_string()),
                        retry_count: 3,
                    }).await?;
                }
            }
        }

        info!("⏱️  Delay before holder data for {}", lst_symbol);
        tokio::time::sleep(Duration::from_secs(1)).await;

        info!("👥 Starting holder data collection for {}", lst_symbol);
        match fetch_holder_data(&client, lst_symbol).await {
            Ok(holder_record) => {
                info!("✅ Holder record collected for {}: {} holders", 
                      lst_symbol, holder_record.total_holders);
                all_holder_data.push(holder_record);
            },
            Err(e) => {
                error!("❌ Failed to fetch holder data for {}: {}", lst_symbol, e);
                log_api_request(pool, ApiLogRecord {
                    endpoint: format!("{}/v1/holders", SANCTUM_API_BASE),
                    lst_symbol: Some(lst_symbol.to_string()),
                    request_status: "failed".to_string(),
                    response_time_ms: None,
                    error_message: Some(e.to_string()),
                    retry_count: 3,
                }).await?;
            }
        }

        info!("⏱️  Delay before TVL data for {}", lst_symbol);
        tokio::time::sleep(Duration::from_secs(1)).await;

        info!("💰 Starting TVL data collection for {}", lst_symbol);
        match fetch_tvl_data(&client, lst_symbol).await {
            Ok(tvl_record) => {
                info!("✅ TVL record collected for {}: {}", 
                      lst_symbol, tvl_record.tvl_value);
                all_tvl_data.push(tvl_record);
            },
            Err(e) => {
                error!("❌ Failed to fetch TVL data for {}: {}", lst_symbol, e);
                log_api_request(pool, ApiLogRecord {
                    endpoint: format!("{}/v1/tvl/current", SANCTUM_API_BASE),
                    lst_symbol: Some(lst_symbol.to_string()),
                    request_status: "failed".to_string(),
                    response_time_ms: None,
                    error_message: Some(e.to_string()),
                    retry_count: 3,
                }).await?;
            }
        }

        info!("⏱️  Final delay after processing {} before next token", lst_symbol);
        tokio::time::sleep(Duration::from_secs(3)).await;
        info!("🎉 Completed data collection for {}", lst_symbol);
    }

    if !all_apy_data.is_empty() {
        save_apy_data(pool, all_apy_data).await?;
    }
    
    if !all_holder_data.is_empty() {
        save_holder_data(pool, all_holder_data).await?;
    }
    
    if !all_tvl_data.is_empty() {
        save_tvl_data(pool, all_tvl_data).await?;
    }

    Ok(())
}

/// Initializes and runs the complete data collection process
/// 
/// Handles environment configuration, database connection setup, logging
/// initialization, and orchestrates the full data collection workflow.
/// Provides comprehensive error handling for production deployment.
async fn run_collector() -> Result<()> {
    dotenv::dotenv().ok();
    
    tracing_subscriber::fmt::init();
    
    info!("Starting Sanctum data collector...");
    
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await?;
    
    info!("Connected to database");
    
    collect_all_data(&pool).await?;
    
    info!("Data collection completed successfully");
    Ok(())
}

/// Application entry point
/// 
/// Provides top-level error handling and ensures proper application exit
/// codes for monitoring and orchestration systems.
#[tokio::main]
async fn main() -> Result<()> {
    if let Err(e) = run_collector().await {
        error!("Error running collector: {}", e);
        std::process::exit(1);
    }
    
    Ok(())
} 