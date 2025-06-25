use anyhow::Result;
use sqlx::PgPool;
use std::env;
use tracing::{info, error, warn};
use solana_client::nonblocking::rpc_client::RpcClient;
use solana_sdk::commitment_config::CommitmentConfig;
use chrono::Utc;
use uuid::Uuid;

#[tokio::main]
async fn main() -> Result<()> {
    // Initialize logging
    tracing_subscriber::fmt::init();
    
    info!("Starting snapshot-node...");
    
    // Load environment variables
    dotenv::dotenv().ok();
    
    // Get database URL from environment
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    
    // Get Solana RPC URL from environment (with fallback to devnet)
    let solana_rpc_url = env::var("SOLANA_RPC_URL")
        .unwrap_or_else(|_| {
            warn!("SOLANA_RPC_URL not set, using devnet as fallback");
            "https://api.devnet.solana.com".to_string()
        });
    
    info!("Using Solana RPC: {}", solana_rpc_url);
    
    // Create database connection pool
    let pool = PgPool::connect(&database_url).await?;
    info!("Connected to database");
    
    // Test database connection
    let row: (i32,) = sqlx::query_as("SELECT 1").fetch_one(&pool).await?;
    info!("Database connection test successful: {}", row.0);
    
    // Create Solana RPC client
    let solana_client = RpcClient::new_with_commitment(
        solana_rpc_url,
        CommitmentConfig::confirmed(),
    );
    
    // Execute core snapshot functions
    create_epoch_snapshot(&pool, &solana_client).await?;
    create_user_snapshots(&pool).await?;
    decide_lst_strategy(&pool).await?;
    
    info!("Snapshot-node completed successfully");
    Ok(())
}

/// Creates a new epoch snapshot by fetching current epoch info from Solana
/// 
/// Fetches the current epoch information from the Solana blockchain and
/// stores it in the database. Handles duplicate epoch snapshots gracefully
/// by checking if the epoch already exists before inserting.
async fn create_epoch_snapshot(pool: &PgPool, solana_client: &RpcClient) -> Result<()> {
    info!("Creating epoch snapshot...");
    
    // Fetch current epoch info from Solana
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
    
    // Check if epoch snapshot already exists
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
    
    // Insert new epoch snapshot
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
    
    // Log additional epoch details for debugging
    info!("Epoch details - Slot: {}, Block Height: {}, Slots in Epoch: {:?}, Transaction Count: {:?}", 
          epoch_info.absolute_slot, epoch_info.block_height, 
          epoch_info.slots_in_epoch, epoch_info.transaction_count);
    
    Ok(())
}

/// Creates user snapshots for the current epoch
async fn create_user_snapshots(pool: &PgPool) -> Result<()> {
    info!("Creating user snapshots...");
    // TODO: Implement user snapshot creation logic
    // - Get all users
    // - Calculate current positions
    // - Insert into user_snapshots table
    Ok(())
}

/// Decides and records LST strategy for the current epoch
async fn decide_lst_strategy(pool: &PgPool) -> Result<()> {
    info!("Deciding LST strategy...");
    
    // Get the most recent epoch snapshot
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
    
    // Check if LST strategy already exists for this epoch
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
    
    // For now, choose "INF" as the LST
    // TODO: Add actual logic to call API and determine optimal LST
    let chosen_lst = "INF";
    let now = Utc::now();
    
    // Insert the LST strategy
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