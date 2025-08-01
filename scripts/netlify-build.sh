#!/bin/bash
# Netlify Build Script for A Hacker's Brand

echo "🚀 Starting Netlify build process..."

# Install Bun if not present
if ! command -v bun &> /dev/null; then
    echo "📦 Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    export BUN_INSTALL="$HOME/.bun"
    export PATH="$BUN_INSTALL/bin:$PATH"
fi

echo "📍 Bun version: $(bun --version)"

# Install dependencies
echo "📦 Installing dependencies with Bun..."
bun install

# Run type checking
echo "🔍 Running type check..."
bun run check

# Build the package
echo "📦 Building component library..."
bun run build:package

# Build the site
echo "🏗️ Building documentation site..."
bun run build

# Generate component docs
echo "📚 Generating component documentation..."
bun run generate:docs

echo "✅ Build completed successfully!"