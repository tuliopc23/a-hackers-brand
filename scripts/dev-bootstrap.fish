#!/usr/bin/env fish

# Tulio Brand System - Development Bootstrap Script
# Fish shell compatible script for local development setup

echo "🚀 Setting up Tulio Brand System development environment..."

# Set environment variables for development
set -gx NODE_ENV development
echo "✅ NODE_ENV set to development"

# Navigate to project root
cd (dirname (status --current-filename))/..

# Check if pnpm is available
if not command -v pnpm &> /dev/null
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "   npm install -g pnpm"
    exit 1
end

echo "📦 Installing dependencies with pnpm workspaces..."

# Install dependencies for all workspaces
pnpm install --filter ...

if test $status -eq 0
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
end

echo "🎨 Starting development server..."

# Start the SvelteKit development server
pnpm dev

echo "🎉 Development environment is ready!"
echo "   SvelteKit app: http://localhost:5173"
echo "   Glass UI Storybook: Run 'pnpm glass-ui:dev' in another terminal"
