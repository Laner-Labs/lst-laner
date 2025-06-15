#!/bin/bash

# Quick fix for PATH issue with cargo binaries

echo "🔧 Fixing PATH for cargo binaries..."

# Add cargo bin to PATH permanently
if [[ ":$PATH:" != *":$HOME/.cargo/bin:"* ]]; then
    echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
    echo "✅ Added $HOME/.cargo/bin to ~/.bashrc"
    
    # Also add to current session
    export PATH="$HOME/.cargo/bin:$PATH"
    echo "✅ Added to current session"
else
    echo "✅ PATH already contains $HOME/.cargo/bin"
fi

echo ""
echo "To apply changes to current session, run:"
echo "source ~/.bashrc"
echo ""
echo "Or restart your terminal." 