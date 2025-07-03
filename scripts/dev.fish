#!/usr/bin/env fish

# Development Environment Setup Script for Tulio Brand System
# Compatible with Fish Shell

function show_help
    echo "Development Helper Script for Tulio Brand System"
    echo ""
    echo "Usage:"
    echo "  ./scripts/dev.fish [command]"
    echo ""
    echo "Commands:"
    echo "  setup       Install all dependencies and prepare environment"
    echo "  start       Start development server"
    echo "  glass-ui    Start glass-ui development server"
    echo "  build       Build all packages"
    echo "  test        Run all tests"
    echo "  clean       Clean all build artifacts"
    echo "  check       Check code quality (lint + type check)"
    echo "  help        Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  NODE_ENV    Set to 'development' for local dev"
    echo "  PORT        Development server port (default: 5173)"
end

function setup_environment
    echo "🔧 Setting up development environment..."
    
    # Set environment variables
    set -x NODE_ENV development
    set -x VITE_APP_TITLE "Tulio Brand System"
    
    # Check if .env exists, if not copy from example
    if not test -f .env
        echo "📋 Creating .env from .env.example..."
        cp .env.example .env
    end
    
    echo "✅ Environment variables set"
end

function install_dependencies
    echo "📦 Installing dependencies..."
    
    # Check if pnpm is installed
    if not command -v pnpm >/dev/null
        echo "❌ pnpm is required but not installed."
        echo "Please install pnpm: https://pnpm.io/installation"
        exit 1
    end
    
    # Install all dependencies
    pnpm install --frozen-lockfile
    
    if test $status -eq 0
        echo "✅ Dependencies installed successfully"
    else
        echo "❌ Failed to install dependencies"
        exit 1
    end
end

function setup_husky
    echo "🪝 Setting up Git hooks..."
    
    # Setup Husky hooks
    cd svelte-version
    pnpm exec husky install
    cd ..
    
    echo "✅ Git hooks configured"
end

function start_development
    echo "🚀 Starting development server..."
    setup_environment
    
    # Start the main SvelteKit development server
    pnpm dev
end

function start_glass_ui
    echo "🔮 Starting Glass UI development server..."
    setup_environment
    
    # Start glass-ui development server
    pnpm glass-ui:dev
end

function build_all
    echo "🏗️ Building all packages..."
    setup_environment
    
    # Build everything
    pnpm build
    pnpm glass-ui:build
    
    if test $status -eq 0
        echo "✅ Build completed successfully"
    else
        echo "❌ Build failed"
        exit 1
    end
end

function run_tests
    echo "🧪 Running tests..."
    
    # Run tests for both packages
    pnpm test
    pnpm glass-ui:test
    
    if test $status -eq 0
        echo "✅ All tests passed"
    else
        echo "❌ Some tests failed"
        exit 1
    end
end

function check_code_quality
    echo "🔍 Checking code quality..."
    
    # Run linting and type checking
    pnpm lint
    pnpm format:check
    
    if test $status -eq 0
        echo "✅ Code quality checks passed"
    else
        echo "❌ Code quality issues found"
        exit 1
    end
end

function clean_all
    echo "🧹 Cleaning build artifacts..."
    
    # Clean all build outputs
    pnpm clean
    
    echo "✅ Cleanup completed"
end

# Main command handler
switch $argv[1]
    case setup
        echo "🚀 Setting up development environment..."
        setup_environment
        install_dependencies
        setup_husky
        echo "✅ Setup completed! Run './scripts/dev.fish start' to begin development."
        
    case start
        start_development
        
    case glass-ui
        start_glass_ui
        
    case build
        build_all
        
    case test
        run_tests
        
    case check
        check_code_quality
        
    case clean
        clean_all
        
    case help
        show_help
        
    case ''
        echo "❌ No command specified"
        show_help
        exit 1
        
    case '*'
        echo "❌ Unknown command: $argv[1]"
        show_help
        exit 1
end
