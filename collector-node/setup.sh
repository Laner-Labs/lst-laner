#!/bin/bash

# Setup script for the Data Collector Node

echo "🚀 Setting up Sanctum Data Collector Node..."

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    echo "❌ Rust is not installed. Please install Rust first:"
    echo "   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    exit 1
fi

# Check if sqlx-cli is installed and add to PATH if needed
if ! command -v sqlx &> /dev/null; then
    echo "📦 Installing sqlx-cli..."
    cargo install sqlx-cli --no-default-features --features postgres
    
    # Add cargo bin to PATH if not already there
    if [[ ":$PATH:" != *":$HOME/.cargo/bin:"* ]]; then
        export PATH="$HOME/.cargo/bin:$PATH"
        echo "📝 Added $HOME/.cargo/bin to PATH for this session"
    fi
fi

# Verify sqlx is now available
if ! command -v sqlx &> /dev/null; then
    echo "❌ sqlx-cli installation failed or not in PATH"
    echo "   Please add $HOME/.cargo/bin to your PATH permanently:"
    echo "   echo 'export PATH=\"\$HOME/.cargo/bin:\$PATH\"' >> ~/.bashrc"
    echo "   source ~/.bashrc"
    exit 1
fi

echo "✅ sqlx-cli is available"

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.example .env
    echo "⚠️  Please edit .env file with your actual values before continuing"
    echo "   Required: DATABASE_URL (Supabase connection string)"
    echo "   Optional: SANCTUM_API_BASE_URL (defaults to https://extra-api.sanctum.so)"
    read -p "Press Enter after you've updated the .env file..."
fi

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL is not set. Please update your .env file"
    exit 1
fi

echo "🗄️  Setting up database..."

# Test database connection first
# echo "🔍 Testing database connection..."
# if sqlx database create 2>/dev/null; then
#     echo "✅ Database connection successful"
# else
#     echo "⚠️  Database might already exist or connection failed, continuing..."
# fi

# Run migrations
# echo "📊 Running database migrations..."
# if sqlx migrate run; then
#     echo "✅ Database setup completed successfully!"
# else
#     echo "❌ Database setup failed. Please check your DATABASE_URL and try again"
#     echo "   Current DATABASE_URL: ${DATABASE_URL:0:20}..."
#     exit 1
# fi

echo "🔨 Building the project..."
if cargo build; then
    echo "✅ Build completed successfully!"
else
    echo "❌ Build failed. Please check the error messages above"
    exit 1
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Test the application locally: cargo run"
echo "2. Set up GitHub Actions secrets (DATABASE_URL)"
echo "3. Push to GitHub to start the automated workflow"
echo ""
echo "The application will collect data from Sanctum API every 30 minutes via GitHub Actions"
echo "Data collected: APY (inception & latest), holders, and TVL for all LST tokens" 