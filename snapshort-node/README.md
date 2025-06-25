# Snapshot Node

A Solana-based snapshot service that creates epoch snapshots and manages user positions for the LST Laner protocol.

## Features

- **Epoch Snapshot Creation**: Fetches current epoch information from Solana blockchain
- **Database Integration**: Stores snapshot data in PostgreSQL with proper conflict resolution
- **Robust Error Handling**: Comprehensive logging and error management
- **Environment Configuration**: Flexible RPC endpoint configuration

## Environment Variables

The application requires the following environment variables:

### Required
- `DATABASE_URL`: PostgreSQL connection string
  ```
  DATABASE_URL=postgresql://username:password@host:port/database
  ```

### Optional
- `SOLANA_RPC_URL`: Solana RPC endpoint (defaults to devnet if not set)
  ```
  SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
  ```

## GitHub Workflow Secrets

When running this application in GitHub Actions, environment variables are loaded from GitHub repository secrets:

### How it works:
1. **Local Development**: Environment variables are loaded from `.env` file using `dotenv::dotenv().ok()`
2. **GitHub Actions**: Environment variables are loaded from GitHub secrets automatically
3. **No Code Changes Needed**: The same `env::var()` calls work in both environments

### Setting up GitHub Secrets:
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `SOLANA_RPC_URL`: Your preferred Solana RPC endpoint

### Example GitHub Workflow:
```yaml
name: Run Snapshot Node
on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours

jobs:
  snapshot:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions-rs/toolchain@v1
        with:
          toolchain: stable
      - run: cargo build --release
      - run: cargo run --release
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          SOLANA_RPC_URL: ${{ secrets.SOLANA_RPC_URL }}
```

## Database Schema

The application uses the following tables (created by migrations):

### `epoch_snapshots`
Stores epoch information fetched from Solana:
- `id`: UUID primary key
- `epoch`: Integer epoch number (unique)
- `snapshot_time`: Timestamp when snapshot was created

### `users`
User accounts in the system:
- `id`: UUID primary key
- `created_at`: Account creation timestamp

### `user_snapshots`
User position snapshots for each epoch:
- `id`: UUID primary key
- `user_id`: Reference to users table
- `epoch_snapshot_id`: Reference to epoch_snapshots table
- `current_position`: Current LST position
- `sol_value`: SOL value of position

### `lst_strategy`
LST strategy decisions for each epoch:
- `id`: UUID primary key
- `epoch_snapshot_id`: Reference to epoch_snapshots table
- `chosen_lst`: Selected LST token
- `decided_at`: Decision timestamp

## Usage

### Local Development
1. Set up your `.env` file with required variables
2. Run database migrations:
   ```bash
   sqlx migrate run
   ```
3. Run the application:
   ```bash
   cargo run
   ```

### Testing
Test the Solana RPC connection:
```bash
cargo run --bin test_epoch
```

## Implementation Details

### Epoch Snapshot Logic
The `create_epoch_snapshot` function:

1. **Fetches Epoch Info**: Uses Solana RPC to get current epoch information
2. **Duplicate Prevention**: Checks if epoch already exists before inserting
3. **Database Storage**: Stores epoch data with UUID and timestamp
4. **Comprehensive Logging**: Logs all operations for monitoring

### Error Handling
- **RPC Failures**: Graceful handling of Solana RPC connection issues
- **Database Errors**: Proper error propagation and logging
- **Duplicate Epochs**: Skips creation if epoch already exists

### RPC Configuration
- **Fallback Support**: Uses devnet if no RPC URL is provided
- **Commitment Level**: Uses `confirmed` commitment for reliable data
- **Flexible Endpoints**: Supports any Solana RPC endpoint

## Monitoring

The application provides comprehensive logging:
- Epoch information details
- Database operation results
- Error conditions and retry attempts
- Performance metrics

Log levels can be configured via `RUST_LOG` environment variable:
```bash
RUST_LOG=debug cargo run
```

## Development

### Project Structure
```
snapshort-node/
├── src/
│   └── main.rs          # Main application entry point
├── migrations/           # Database migrations
├── Cargo.toml           # Rust dependencies
├── setup.sh             # Setup script
└── README.md            # This file
```

### Adding New Features
1. Create database migrations if needed
2. Update the main logic in `src/main.rs`
3. Test locally with `cargo run`
4. Commit and push to trigger GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is part of the LST Laner system. 