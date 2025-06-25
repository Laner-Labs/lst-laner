use anyhow::Result;
use solana_client::nonblocking::rpc_client::RpcClient;
use solana_sdk::commitment_config::CommitmentConfig;
use tracing::info;

#[tokio::main]
async fn main() -> Result<()> {
    // Initialize logging
    tracing_subscriber::fmt::init();
    
    info!("Testing Solana epoch info fetching...");
    
    // Use devnet for testing
    let client = RpcClient::new_with_commitment(
        String::from("https://api.devnet.solana.com"),
        CommitmentConfig::confirmed(),
    );

    let epoch_info = client.get_epoch_info().await?;

    info!("Epoch info: {:#?}", epoch_info);
    
    // Test with mainnet-beta as well
    info!("Testing with mainnet-beta...");
    let mainnet_client = RpcClient::new_with_commitment(
        String::from("https://api.mainnet-beta.solana.com"),
        CommitmentConfig::confirmed(),
    );

    let mainnet_epoch_info = mainnet_client.get_epoch_info().await?;
    info!("Mainnet epoch info: {:#?}", mainnet_epoch_info);

    Ok(())
} 