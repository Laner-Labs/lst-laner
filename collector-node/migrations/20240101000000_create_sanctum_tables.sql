-- Create tables for Sanctum API data collection

-- Table for LST (Liquid Staking Token) information
CREATE TABLE IF NOT EXISTS lst_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symbol VARCHAR(50) NOT NULL UNIQUE,
    mint_address VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table for APY data (both inception and latest)
CREATE TABLE IF NOT EXISTS lst_apy_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lst_symbol VARCHAR(50) NOT NULL,
    apy_type VARCHAR(20) NOT NULL CHECK (apy_type IN ('inception', 'latest')),
    apy_value DECIMAL(10, 6) NOT NULL,
    epoch_number BIGINT,
    collected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(lst_symbol, apy_type, epoch_number)
);

-- Table for holder data
CREATE TABLE IF NOT EXISTS lst_holder_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lst_symbol VARCHAR(50) NOT NULL,
    total_holders BIGINT NOT NULL,
    total_supply DECIMAL(20, 9) NOT NULL,
    circulating_supply DECIMAL(20, 9),
    collected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(lst_symbol, collected_at)
);

-- Table for TVL data
CREATE TABLE IF NOT EXISTS lst_tvl_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lst_symbol VARCHAR(50) NOT NULL,
    tvl_value DECIMAL(20, 2) NOT NULL,
    tvl_currency VARCHAR(10) DEFAULT 'USD',
    collected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(lst_symbol, collected_at)
);

-- Table for API request logs
CREATE TABLE IF NOT EXISTS api_request_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    endpoint VARCHAR(255) NOT NULL,
    lst_symbol VARCHAR(50),
    request_status VARCHAR(20) NOT NULL CHECK (request_status IN ('success', 'failed', 'retry')),
    response_time_ms INTEGER,
    error_message TEXT,
    retry_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_lst_apy_data_symbol_type ON lst_apy_data(lst_symbol, apy_type);
CREATE INDEX IF NOT EXISTS idx_lst_apy_data_collected_at ON lst_apy_data(collected_at);
CREATE INDEX IF NOT EXISTS idx_lst_holder_data_symbol ON lst_holder_data(lst_symbol);
CREATE INDEX IF NOT EXISTS idx_lst_holder_data_collected_at ON lst_holder_data(collected_at);
CREATE INDEX IF NOT EXISTS idx_lst_tvl_data_symbol ON lst_tvl_data(lst_symbol);
CREATE INDEX IF NOT EXISTS idx_lst_tvl_data_collected_at ON lst_tvl_data(collected_at);
CREATE INDEX IF NOT EXISTS idx_api_request_logs_created_at ON api_request_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_api_request_logs_status ON api_request_logs(request_status);

-- Insert initial LST tokens data
INSERT INTO lst_tokens (symbol, mint_address, name) VALUES
    ('JitoSOL', 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn', 'Jito Staked SOL'),
    ('mSOL', 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So', 'Marinade Staked SOL'),
    ('bSOL', 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1', 'BlazeStake Staked SOL'),
    ('INF', '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm', 'Infinity Staked SOL'),
    ('JupSOL', 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v', 'Jupiter Staked SOL'),
    ('bpSOL', 'BPSoLzmLQn47EP5aa7jmFngRL8KC3TWAeAwXwZD8ip3P', 'BlazePool Staked SOL'),
    ('bonkSOL', 'BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs', 'Bonk Staked SOL')
ON CONFLICT (symbol) DO NOTHING; 