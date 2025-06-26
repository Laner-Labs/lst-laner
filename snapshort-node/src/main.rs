//! Snapshot Node - LST Laner
//! 
//! This service creates periodic snapshots of user positions and epoch data
//! for the LST (Liquid Staking Token) trading platform. It integrates with:
//! - Solana blockchain for epoch and balance data
//! - Privy for user authentication and wallet management  
//! - Sanctum API for LST pricing information
//! - PostgreSQL for data persistence

use anyhow::Result;
use sqlx::PgPool;
use std::env;
use tracing::{info, error, warn};
use solana_client::nonblocking::rpc_client::RpcClient;
use solana_sdk::commitment_config::CommitmentConfig;
use chrono::Utc;
use uuid::Uuid;
use serde::{Deserialize, Serialize};
use reqwest::Client;
use std::collections::HashMap;
use bigdecimal::BigDecimal;
use bigdecimal::ToPrimitive;
use solana_sdk::pubkey::Pubkey;
use std::str::FromStr;
use base64;
use base64::Engine;
use solana_client::rpc_request::TokenAccountsFilter;
use solana_account_decoder::UiAccountData;

// Constants for minimum balances (in lamports)
const MIN_SOL_BALANCE: u64 = 10_000; // 0.00001 SOL
const MIN_LST_BALANCE: u64 = 1_000; // 0.000001 LST (assuming 9 decimals)

// LST token mint addresses
const LST_TOKENS: &[(&str, &str)] = &[
    ("JitoSOL", "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn"),
    ("mSOL", "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),
    ("bSOL", "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1"),
    ("INF", "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm"),
    ("JupSOL", "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v"),
    ("bpSOL", "BPSoLzmLQn47EP5aa7jmFngRL8KC3TWAeAwXwZD8ip3P"),
    ("bonkSOL", "BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs"),
];

#[derive(Debug, Deserialize)]
struct PrivyUser {
    id: String,
    created_at: i64,
    linked_accounts: Vec<LinkedAccount>,
    has_accepted_terms: bool,
    is_guest: bool,
}

#[derive(Debug, Deserialize)]
struct LinkedAccount {
    #[serde(rename = "type")]
    account_type: String,
    address: Option<String>,
    wallet_client: Option<String>,
}

#[derive(Debug, Deserialize)]
struct PrivyResponse {
    data: Vec<PrivyUser>,
    next_cursor: Option<String>,
}

#[derive(Debug, Deserialize)]
struct SanctumSolValues {
    solValues: HashMap<String, String>,
    errs: HashMap<String, String>,
}

#[derive(Debug, Serialize)]
struct TokenBalance {
    mint: String,
    amount: u64,
    decimals: u8,
}

#[derive(Debug)]
struct UserPosition {
    user_id: String,
    wallet_address: String,
    current_position: Option<String>,
    sol_value: BigDecimal,
}

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt::init();
    
    info!("Starting snapshot-node...");
    
    dotenv::dotenv().ok();
    
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    
    let solana_rpc_url = env::var("SOLANA_RPC_URL")
        .unwrap_or_else(|_| {
            warn!("SOLANA_RPC_URL not set, using devnet as fallback");
            "https://api.devnet.solana.com".to_string()
        });
    
    info!("Using Solana RPC: {}", solana_rpc_url);
    
    let pool = PgPool::connect(&database_url).await?;
    info!("Connected to database");
    
    let row: (i32,) = sqlx::query_as("SELECT 1").fetch_one(&pool).await?;
    info!("Database connection test successful: {}", row.0);
    
    let solana_client = RpcClient::new_with_commitment(
        solana_rpc_url,
        CommitmentConfig::confirmed(),
    );
    
    create_epoch_snapshot(&pool, &solana_client).await?;
    create_user_snapshots(&pool, &solana_client).await?;
    decide_lst_strategy(&pool).await?;
    
    info!("Snapshot-node completed successfully");
    Ok(())
}

/// Creates epoch snapshot from current Solana blockchain state
async fn create_epoch_snapshot(pool: &PgPool, solana_client: &RpcClient) -> Result<()> {
    info!("Creating epoch snapshot...");
    
    let epoch_info = match solana_client.get_epoch_info().await {
        Ok(info) => {
            info!("Successfully fetched epoch info: epoch={}, slot={}, block_height={}", 
                  info.epoch, info.absolute_slot, info.block_height);
            info
        },
        Err(e) => {
            error!("Failed to fetch epoch info from Solana: {}", e);
            return Err(anyhow::anyhow!("Failed to fetch epoch info: {}", e));
        }
    };
    
    let existing_snapshot = sqlx::query(
        "SELECT id FROM epoch_snapshots WHERE epoch = $1"
    )
    .bind(epoch_info.epoch as i32)
    .fetch_optional(pool)
    .await?;
    
    if existing_snapshot.is_some() {
        warn!("Epoch snapshot for epoch {} already exists, skipping creation", epoch_info.epoch);
        return Ok(());
    }
    
    let snapshot_id = Uuid::new_v4();
    let now = Utc::now();
    
    sqlx::query(
        r#"
        INSERT INTO epoch_snapshots (id, epoch, snapshot_time)
        VALUES ($1, $2, $3)
        "#
    )
    .bind(snapshot_id)
    .bind(epoch_info.epoch as i32)
    .bind(now)
    .execute(pool)
    .await?;
    
    info!("Successfully created epoch snapshot: id={}, epoch={}, time={}", 
          snapshot_id, epoch_info.epoch, now);
    
    info!("Epoch details - Slot: {}, Block Height: {}, Slots in Epoch: {:?}, Transaction Count: {:?}", 
          epoch_info.absolute_slot, epoch_info.block_height, 
          epoch_info.slots_in_epoch, epoch_info.transaction_count);
    
    Ok(())
}

/// Creates user position snapshots for all Privy users
async fn create_user_snapshots(pool: &PgPool, solana_client: &RpcClient) -> Result<()> {
    info!("Creating user snapshots...");
    
    let latest_epoch_snapshot = sqlx::query_as::<_, (Uuid, i32)>(
        "SELECT id, epoch FROM epoch_snapshots ORDER BY epoch DESC LIMIT 1"
    )
    .fetch_optional(pool)
    .await?;
    
    let (epoch_snapshot_id, epoch) = match latest_epoch_snapshot {
        Some(snapshot) => {
            info!("Found latest epoch snapshot: id={}, epoch={}", snapshot.0, snapshot.1);
            snapshot
        },
        None => {
            error!("No epoch snapshot found. Cannot create user snapshots without an epoch snapshot.");
            return Err(anyhow::anyhow!("No epoch snapshot found"));
        }
    };
    
    let existing_snapshots: (i64,) = sqlx::query_as(
        "SELECT COUNT(*) FROM user_snapshots WHERE epoch_snapshot_id = $1"
    )
    .bind(epoch_snapshot_id)
    .fetch_one(pool)
    .await?;
    
    if existing_snapshots.0 > 0 {
        warn!("User snapshots for epoch {} already exist, skipping creation", epoch);
        return Ok(());
    }
    
    let sol_values = get_lst_sol_values().await?;
    info!("Retrieved LST SOL values: {:?}", sol_values);
    
    let users = get_all_privy_users().await?;
    info!("Retrieved {} users from Privy", users.len());
    
    let mut processed_count = 0;
    let mut error_count = 0;
    
    for user in users {
        match process_user(&user, &sol_values, solana_client, pool, &epoch_snapshot_id).await {
            Ok(_) => {
                processed_count += 1;
                if processed_count % 10 == 0 {
                    info!("Processed {} users successfully", processed_count);
                }
            },
            Err(e) => {
                error_count += 1;
                error!("Failed to process user {}: {}", user.id, e);
            }
        }
    }
    
    info!("User snapshot creation completed: {} processed, {} errors", processed_count, error_count);
    Ok(())
}

/// Fetches LST SOL values from Sanctum API with retry mechanism
async fn get_lst_sol_values() -> Result<HashMap<String, u64>> {
    let client = Client::new();
    let url = "https://extra-api.sanctum.so/v1/sol-value/current";
    
    let mut params = Vec::new();
    for (_, mint_address) in LST_TOKENS {
        params.push(format!("lst={}", mint_address));
    }
    let query_string = params.join("&");
    let full_url = format!("{}?{}", url, query_string);
    
    let operation = || async {
        let response = client
            .get(&full_url)
            .timeout(std::time::Duration::from_secs(30))
            .send()
            .await.map_err(|e| backoff::Error::transient(anyhow::anyhow!(e)))?;
        
        if !response.status().is_success() {
            return Err(backoff::Error::permanent(anyhow::anyhow!("API request failed with status: {}", response.status())));
        }
        
        let sol_values: SanctumSolValues = response.json().await.map_err(|e| backoff::Error::transient(anyhow::anyhow!(e)))?;
        
        if !sol_values.errs.is_empty() {
            warn!("Some LST tokens had errors: {:?}", sol_values.errs);
        }
        
        let mut result = HashMap::new();
        for (mint, value_str) in sol_values.solValues {
            match value_str.parse::<u64>() {
                Ok(value) => result.insert(mint, value),
                Err(_) => {
                    warn!("Failed to parse SOL value for {}: {}", mint, value_str);
                    None
                }
            };
        }
        
        Ok(result)
    };
    
    let retry_policy = backoff::ExponentialBackoff::default();
    backoff::future::retry(retry_policy, operation).await
        .map_err(|e| anyhow::anyhow!("Failed to fetch LST SOL values: {:?}", e))
}

/// Fetches all users from Privy API with pagination
async fn get_all_privy_users() -> Result<Vec<PrivyUser>> {
    let privy_app_id = env::var("PRIVY_APP_ID")
        .expect("PRIVY_APP_ID must be set");
    let privy_app_secret = env::var("PRIVY_APP_SECRET")
        .expect("PRIVY_APP_SECRET must be set");
    
    let client = Client::new();
    let mut all_users = Vec::new();
    let mut cursor: Option<String> = None;
    
    let credentials = format!("{}:{}", privy_app_id, privy_app_secret);
    let encoded_credentials = base64::engine::general_purpose::STANDARD.encode(credentials);
    let auth_header = format!("Basic {}", encoded_credentials);
    
    loop {
        let url = if let Some(cursor_val) = &cursor {
            format!("https://auth.privy.io/api/v1/users?cursor={}", cursor_val)
        } else {
            "https://auth.privy.io/api/v1/users".to_string()
        };
        
        let operation = || async {
            let response = client
                .get(&url)
                .header("Authorization", &auth_header)
                .header("privy-app-id", &privy_app_id)
                .timeout(std::time::Duration::from_secs(30))
                .send()
                .await.map_err(|e| backoff::Error::transient(anyhow::anyhow!(e)))?;
            
            if !response.status().is_success() {
                return Err(backoff::Error::permanent(anyhow::anyhow!("Privy API request failed with status: {}", response.status())));
            }
            
            let privy_response: PrivyResponse = response.json().await.map_err(|e| backoff::Error::transient(anyhow::anyhow!(e)))?;
            Ok(privy_response)
        };
        
        let retry_policy = backoff::ExponentialBackoff::default();
        let privy_response = backoff::future::retry(retry_policy, operation).await
            .map_err(|e| anyhow::anyhow!("Failed to fetch Privy users: {:?}", e))?;
        
        all_users.extend(privy_response.data);
        
        if privy_response.next_cursor.is_none() {
            break;
        }
        
        cursor = privy_response.next_cursor;
        info!("Fetched batch of users, total so far: {}", all_users.len());
    }
    
    Ok(all_users)
}

/// Processes a single user to create their snapshot
async fn process_user(
    user: &PrivyUser,
    sol_values: &HashMap<String, u64>,
    solana_client: &RpcClient,
    pool: &PgPool,
    epoch_snapshot_id: &Uuid,
) -> Result<()> {
    let wallet_account = user.linked_accounts.iter()
        .find(|account| {
            account.account_type == "wallet" && 
            account.wallet_client.as_deref() == Some("privy")
        });
    
    let wallet_address = match wallet_account {
        Some(account) => account.address.as_ref()
            .ok_or_else(|| anyhow::anyhow!("Wallet account missing address"))?,
        None => {
            warn!("User {} has no Privy embedded wallet, skipping", user.id);
            return Ok(());
        }
    };
    
    ensure_user_exists(pool, &user.id).await?;
    
    let position = get_wallet_position(wallet_address, sol_values, solana_client).await?;
    
    create_user_snapshot_record(pool, &user.id, epoch_snapshot_id, &position).await?;
    
    Ok(())
}

/// Ensures a user exists in our database, creates if not
async fn ensure_user_exists(pool: &PgPool, privy_user_id: &str) -> Result<()> {
    let existing_user = sqlx::query(
        "SELECT id FROM users WHERE privy_id = $1"
    )
    .bind(privy_user_id)
    .fetch_optional(pool)
    .await?;
    
    if existing_user.is_none() {
        sqlx::query(
            r#"
            INSERT INTO users (id, privy_id, created_at)
            VALUES ($1, $2, $3)
            "#
        )
        .bind(Uuid::new_v4())
        .bind(privy_user_id)
        .bind(Utc::now())
        .execute(pool)
        .await?;
        
        info!("Created new user for Privy ID: {}", privy_user_id);
    }
    
    Ok(())
}

/// Gets the current position and SOL value for a wallet
async fn get_wallet_position(
    wallet_address: &str,
    sol_values: &HashMap<String, u64>,
    solana_client: &RpcClient,
) -> Result<UserPosition> {
    let pubkey = Pubkey::from_str(wallet_address)?;
    
    let sol_balance = solana_client.get_balance(&pubkey).await?;
    
    let token_accounts = solana_client.get_token_accounts_by_owner(
        &pubkey,
        TokenAccountsFilter::ProgramId(Pubkey::from_str(&spl_token::ID.to_string())?)
    ).await?;
    
    let mut max_value = BigDecimal::from(0);
    let mut current_position: Option<String> = None;
    
    if sol_balance >= MIN_SOL_BALANCE {
        let sol_value = BigDecimal::from(sol_balance);
        max_value = sol_value.clone();
        current_position = Some("SOL".to_string());
    }
    
    for (symbol, mint_address) in LST_TOKENS {
        if let Some(token_account) = token_accounts.iter().find(|account| {
            if let UiAccountData::Json(parsed) = &account.account.data {
                if let Some(info) = parsed.parsed.get("info") {
                    if let Some(mint) = info.get("mint") {
                        return mint.as_str() == Some(*mint_address);
                    }
                }
            }
            false
        }) {
            if let UiAccountData::Json(parsed) = &token_account.account.data {
                if let Some(info) = parsed.parsed.get("info") {
                    if let Some(token_amount) = info.get("tokenAmount") {
                        if let Some(amount_str) = token_amount.get("amount").and_then(|v| v.as_str()) {
                            if let Ok(amount) = amount_str.parse::<u64>() {
                                if amount >= MIN_LST_BALANCE {
                                    let sol_value_per_token = sol_values.get(*mint_address).unwrap_or(&0);
                                    let total_sol_value = amount * sol_value_per_token;
                                    
                                    if total_sol_value > max_value.to_u64().unwrap_or(0) {
                                        max_value = BigDecimal::from(total_sol_value);
                                        current_position = Some(symbol.to_string());
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    Ok(UserPosition {
        user_id: wallet_address.to_string(),
        wallet_address: wallet_address.to_string(),
        current_position,
        sol_value: max_value,
    })
}

/// Creates a user snapshot record in the database
async fn create_user_snapshot_record(
    pool: &PgPool,
    privy_user_id: &str,
    epoch_snapshot_id: &Uuid,
    position: &UserPosition,
) -> Result<()> {
    let user_record = sqlx::query_as::<_, (Uuid,)>(
        "SELECT id FROM users WHERE privy_id = $1"
    )
    .bind(privy_user_id)
    .fetch_one(pool)
    .await?;
    
    let user_id = user_record.0;
    
    sqlx::query(
        r#"
        INSERT INTO user_snapshots (id, user_id, epoch_snapshot_id, current_position, sol_value)
        VALUES ($1, $2, $3, $4, $5)
        "#
    )
    .bind(Uuid::new_v4())
    .bind(user_id)
    .bind(epoch_snapshot_id)
    .bind(position.current_position.as_deref().unwrap_or("NONE"))
    .bind(&position.sol_value)
    .execute(pool)
    .await?;
    
    Ok(())
}

/// Determines optimal LST strategy for the current epoch
async fn decide_lst_strategy(pool: &PgPool) -> Result<()> {
    info!("Deciding LST strategy...");
    
    let latest_epoch_snapshot = sqlx::query_as::<_, (Uuid, i32)>(
        "SELECT id, epoch FROM epoch_snapshots ORDER BY epoch DESC LIMIT 1"
    )
    .fetch_optional(pool)
    .await?;
    
    let (epoch_snapshot_id, epoch) = match latest_epoch_snapshot {
        Some(snapshot) => {
            info!("Found latest epoch snapshot: id={}, epoch={}", snapshot.0, snapshot.1);
            snapshot
        },
        None => {
            error!("No epoch snapshot found. Cannot decide LST strategy without an epoch snapshot.");
            return Err(anyhow::anyhow!("No epoch snapshot found"));
        }
    };
    
    let existing_strategy = sqlx::query(
        "SELECT id FROM lst_strategy WHERE epoch_snapshot_id = $1"
    )
    .bind(epoch_snapshot_id)
    .fetch_optional(pool)
    .await?;
    
    if existing_strategy.is_some() {
        warn!("LST strategy for epoch {} already exists, skipping creation", epoch);
        return Ok(());
    }
    
    // TODO: Add actual logic to call API and determine optimal LST
    let chosen_lst = "INF";
    let now = Utc::now();
    
    sqlx::query(
        r#"
        INSERT INTO lst_strategy (epoch_snapshot_id, chosen_lst, decided_at)
        VALUES ($1, $2, $3)
        "#
    )
    .bind(epoch_snapshot_id)
    .bind(chosen_lst)
    .bind(now)
    .execute(pool)
    .await?;
    
    info!("Successfully created LST strategy: epoch={}, chosen_lst={}, decided_at={}", 
          epoch, chosen_lst, now);
    
    Ok(())
} 