#!/bin/bash

# Setup script for snapshot-node
set -e

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "Setting up snapshot-node..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL environment variable is not set"
    echo "Please set it to your PostgreSQL connection string"
    exit 1
fi

# Install sqlx-cli if not already installed
if ! command -v sqlx &> /dev/null; then
    echo "Installing sqlx-cli..."
    cargo install sqlx-cli --no-default-features --features postgres
fi

# Run database migrations
echo "Running database migrations..."
sqlx migrate run

# Generate sqlx-data.json for offline compilation
echo "Generating sqlx-data.json..."
cargo sqlx prepare

# Build the project
echo "Building snapshot-node..."
cargo build --release

echo "Setup completed successfully!"
echo "You can now run the snapshot-node with: cargo run --release" 