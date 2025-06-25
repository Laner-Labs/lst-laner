-- Add migration script here

-- Create tables for snapshot system

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table for users
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table for deposits
CREATE TABLE IF NOT EXISTS deposits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount_sol NUMERIC NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('ccip', 'native')),
    source_chain TEXT NOT NULL,
    tx_hash TEXT NOT NULL,
    deposited_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table for withdrawals
CREATE TABLE IF NOT EXISTS withdrawals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount_sol NUMERIC NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('native', 'ccip')),
    destination_chain TEXT NOT NULL,
    tx_hash TEXT,
    withdrawn_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table for epoch snapshots
CREATE TABLE IF NOT EXISTS epoch_snapshots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    epoch INTEGER NOT NULL UNIQUE,
    snapshot_time TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table for user snapshots
CREATE TABLE IF NOT EXISTS user_snapshots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    epoch_snapshot_id UUID NOT NULL REFERENCES epoch_snapshots(id) ON DELETE CASCADE,
    current_position TEXT NOT NULL,
    sol_value NUMERIC NOT NULL,
    UNIQUE(user_id, epoch_snapshot_id)
);

-- Table for LST strategy
CREATE TABLE IF NOT EXISTS lst_strategy (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    epoch_snapshot_id UUID NOT NULL REFERENCES epoch_snapshots(id) ON DELETE CASCADE,
    chosen_lst TEXT NOT NULL,
    decided_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(epoch_snapshot_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_deposits_user_id ON deposits(user_id);
CREATE INDEX IF NOT EXISTS idx_deposits_deposited_at ON deposits(deposited_at);
CREATE INDEX IF NOT EXISTS idx_deposits_type ON deposits(type);
CREATE INDEX IF NOT EXISTS idx_deposits_source_chain ON deposits(source_chain);

CREATE INDEX IF NOT EXISTS idx_withdrawals_user_id ON withdrawals(user_id);
CREATE INDEX IF NOT EXISTS idx_withdrawals_withdrawn_at ON withdrawals(withdrawn_at);
CREATE INDEX IF NOT EXISTS idx_withdrawals_type ON withdrawals(type);
CREATE INDEX IF NOT EXISTS idx_withdrawals_destination_chain ON withdrawals(destination_chain);

CREATE INDEX IF NOT EXISTS idx_epoch_snapshots_epoch ON epoch_snapshots(epoch);
CREATE INDEX IF NOT EXISTS idx_epoch_snapshots_snapshot_time ON epoch_snapshots(snapshot_time);

CREATE INDEX IF NOT EXISTS idx_user_snapshots_user_id ON user_snapshots(user_id);
CREATE INDEX IF NOT EXISTS idx_user_snapshots_epoch_snapshot_id ON user_snapshots(epoch_snapshot_id);

CREATE INDEX IF NOT EXISTS idx_lst_strategy_epoch_snapshot_id ON lst_strategy(epoch_snapshot_id);
CREATE INDEX IF NOT EXISTS idx_lst_strategy_chosen_lst ON lst_strategy(chosen_lst);
