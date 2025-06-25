-- Add privy_id column to users table for Privy integration

-- Add privy_id column
ALTER TABLE users ADD COLUMN IF NOT EXISTS privy_id TEXT UNIQUE;

-- Create index for privy_id lookups
CREATE INDEX IF NOT EXISTS idx_users_privy_id ON users(privy_id); 