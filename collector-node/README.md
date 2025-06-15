# Sanctum Data Collector Node

A Rust application that fetches Liquid Staking Token (LST) data from the [Sanctum API](https://extra-api.sanctum.so/) and stores it in a PostgreSQL database, designed to run as a cron job via GitHub Actions.

## Features

- Fetches data from [Sanctum API](https://extra-api.sanctum.so/) using `reqwest`
- Collects APY data (both inception and latest), holder information, and TVL data
- Supports 7 major LST tokens: JitoSOL, mSOL, bSOL, INF, JupSOL, bpSOL, bonkSOL
- Implements exponential backoff retry mechanism for failed requests
- Respectful API usage with configurable delays between requests
- Parses JSON responses using `serde`
- Stores data in PostgreSQL using `sqlx` with proper decimal handling
- Comprehensive logging and error tracking
- Runs every 30 minutes via GitHub Actions

## Project Structure

```
collector-node/
├── src/
│   └── main.rs              # Main application logic
├── migrations/
│   └── 
├── Cargo.toml              # Rust dependencies
├── env.example             # Environment variables template
├── setup.sh               # Automated setup script
└── README.md              # This file
```

## Data Collection

The application collects the following data for each LST token:

### APY Data
- **Inception APY**: APY from the beginning of the LST
- **Latest APY**: APY calculated from the past 6 epochs

### Holder Data
- Total number of holders
- Total supply
- Circulating supply (when available)

### TVL Data
- Current Total Value Locked in USD

### Supported LST Tokens
- JitoSOL (J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn)
- mSOL (mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So)
- bSOL (bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1)
- INF (5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm)
- JupSOL (jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v)
- bpSOL (BPSoLzmLQn47EP5aa7jmFngRL8KC3TWAeAwXwZD8ip3P)
- bonkSOL (BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs)

## Setup

### 1. Local Development Setup

1. **Install Rust and sqlx-cli:**
   ```bash
   # Install Rust (if not already installed)
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   
   # Install sqlx-cli
   cargo install sqlx-cli --no-default-features --features postgres
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your actual values
   ```

3. **Set up database migrations:**
   ```bash
   # Create the database (if using sqlx-cli)
   sqlx database create
   
   # Run migrations
   sqlx migrate run
   ```

4. **Build and test locally:**
   ```bash
   cargo build
   cargo run
   ```

### 2. Automated Setup

Run the setup script for automated configuration:
```bash
./setup.sh
```

### 3. Database Setup (Supabase)

1. **Get your Supabase connection string:**
   - Go to your Supabase project dashboard
   - Navigate to Settings > Database
   - Copy the connection string

2. **Set up the database schema:**
   ```bash
   # Set your DATABASE_URL
   export DATABASE_URL="your-supabase-connection-string"
   
   # Run migrations
   sqlx migrate run
   ```

### 4. GitHub Actions Setup

1. **Add secrets to your GitHub repository:**
   - Go to your repository settings
   - Navigate to Secrets and variables > Actions
   - Add the following secret:
     - `DATABASE_URL`: Your Supabase connection string

2. **The workflow will automatically run every 30 minutes**

## Database Schema

The application creates the following tables:

### lst_tokens
Stores information about supported LST tokens:
```sql
CREATE TABLE lst_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symbol VARCHAR(50) NOT NULL UNIQUE,
    mint_address VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### lst_apy_data
Stores APY data for each token:
```sql
CREATE TABLE lst_apy_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lst_symbol VARCHAR(50) NOT NULL,
    apy_type VARCHAR(20) NOT NULL CHECK (apy_type IN ('inception', 'latest')),
    apy_value DECIMAL(10, 6) NOT NULL,
    collected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(lst_symbol, apy_type)
);
```

### lst_holder_data
Stores holder information:
```sql
CREATE TABLE lst_holder_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lst_symbol VARCHAR(50) NOT NULL,
    total_holders BIGINT NOT NULL,
    total_supply DECIMAL(20, 9) NOT NULL,
    collected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(lst_symbol, collected_at)
);
```

### lst_tvl_data
Stores TVL information:
```sql
CREATE TABLE lst_tvl_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lst_symbol VARCHAR(50) NOT NULL,
    tvl_value DECIMAL(20, 2) NOT NULL,
    collected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(lst_symbol, collected_at)
);
```

### api_request_logs
Tracks API request performance and errors:
```sql
CREATE TABLE api_request_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    endpoint VARCHAR(255) NOT NULL,
    lst_symbol VARCHAR(50),
    request_status VARCHAR(20) NOT NULL CHECK (request_status IN ('success', 'failed', 'retry')),
    response_time_ms INTEGER,
    error_message TEXT,
    retry_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## API Endpoints

The application fetches data from the following Sanctum API endpoints:

- `/v1/apy/inception?lst={symbol}` - Get inception APY
- `/v1/apy/latest?lst={symbol}` - Get latest APY (6-epoch average)
- `/v1/holders?lst={symbol}` - Get holder information
- `/v1/tvl/current?lst={symbol}` - Get current TVL

## Retry Mechanism

The application implements a robust retry mechanism with:
- Exponential backoff strategy
- Maximum 3 retry attempts
- Configurable timeouts (30s request, 10s connect)
- Proper error logging and tracking

## Rate Limiting

To be respectful to the Sanctum API:
- 2-second delay between requests for the same token
- 1-second delay between different data types
- 3-second delay between different tokens
- Total collection time: ~2-3 minutes for all tokens

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string (required)
- `SANCTUM_API_BASE_URL`: Sanctum API base URL (optional, defaults to https://extra-api.sanctum.so)

## Monitoring

The application provides comprehensive logging:
- Info logs for successful operations
- Warning logs for non-critical issues
- Error logs for failures with retry attempts
- API request performance tracking

You can monitor the GitHub Actions runs in the Actions tab of your repository.

## Troubleshooting

### Common Issues

1. **Database connection errors:**
   - Verify your `DATABASE_URL` is correct
   - Ensure your Supabase database is accessible
   - Check if your IP is whitelisted in Supabase

2. **API fetch failures:**
   - Check the Sanctum API status
   - Verify network connectivity
   - Review error logs in the `api_request_logs` table

3. **Migration errors:**
   - Run `sqlx migrate info` to check migration status
   - Use `sqlx migrate revert` to undo migrations if needed

## Development Commands

```bash
# Run locally
cargo run

# Build for production
cargo build --release

# Run tests
cargo test

# Check for issues
cargo check

# Format code
cargo fmt

# Lint code
cargo clippy

# Create new migration
sqlx migrate add migration_name

# Run migrations
sqlx migrate run

# Revert last migration
sqlx migrate revert
```

## Data Analysis

Once data is collected, you can run queries like:

```sql
-- Get latest APY for all tokens
SELECT lst_symbol, apy_value, collected_at 
FROM lst_apy_data 
WHERE apy_type = 'latest' 
ORDER BY collected_at DESC;

-- Compare inception vs latest APY
SELECT 
    a1.lst_symbol,
    a1.apy_value as inception_apy,
    a2.apy_value as latest_apy,
    a1.collected_at
FROM lst_apy_data a1
JOIN lst_apy_data a2 ON a1.lst_symbol = a2.lst_symbol 
    AND a1.collected_at = a2.collected_at
WHERE a1.apy_type = 'inception' AND a2.apy_type = 'latest';

-- Get TVL trends
SELECT lst_symbol, tvl_value, collected_at
FROM lst_tvl_data
ORDER BY lst_symbol, collected_at DESC;
```

#### APY Data (`lst_apy_data`)
- `id`: Primary key (UUID)
- `lst_symbol`: Token symbol (e.g., JitoSOL, mSOL)
- `apy_type`: Type of APY data ('inception' or 'latest')
- `apy_value`: APY value as decimal
- `collected_at`: Timestamp when data was collected
- `created_at`: Record creation timestamp
- `updated_at`: Record last update timestamp 