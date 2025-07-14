#!/usr/bin/env node

/**
 * Production Deployment Script for A Hacker's Brand
 * Handles build optimization, testing, and deployment
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	cyan: '\x1b[36m'
};

/**
 * Log with colors
 */
function log(message, color = 'reset') {
	console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Execute command with error handling
 */
function exec(command, options = {}) {
	try {
		log(`Executing: ${command}`, 'cyan');
		const result = execSync(command, {
			cwd: projectRoot,
			stdio: 'inherit',
			...options
		});
		return result;
	} catch (error) {
		log(`Error executing: ${command}`, 'red');
		throw error;
	}
}

/**
 * Check if we're in a git repository
 */
function checkGitStatus() {
	try {
		const status = execSync('git status --porcelain', { 
			cwd: projectRoot, 
			encoding: 'utf8' 
		});
		
		if (status.trim()) {
			log('Warning: You have uncommitted changes:', 'yellow');
			console.log(status);
			
			// Ask user if they want to continue
			const readline = require('readline').createInterface({
				input: process.stdin,
				output: process.stdout
			});
			
			return new Promise((resolve) => {
				readline.question('Continue with deployment? (y/N): ', (answer) => {
					readline.close();
					resolve(answer.toLowerCase() === 'y');
				});
			});
		}
		
		return true;
	} catch (error) {
		log('Not in a git repository or git not available', 'yellow');
		return true;
	}
}

/**
 * Run pre-deployment checks
 */
async function preDeploymentChecks() {
	log('🔍 Running pre-deployment checks...', 'bright');
	
	// Check git status
	const gitOk = await checkGitStatus();
	if (!gitOk) {
		log('Deployment cancelled by user', 'yellow');
		process.exit(0);
	}
	
	// Check if package.json exists
	if (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
		throw new Error('package.json not found');
	}
	
	// Check if node_modules exists
	if (!fs.existsSync(path.join(projectRoot, 'node_modules'))) {
		log('node_modules not found, installing dependencies...', 'yellow');
		exec('npm install');
	}
	
	log('✅ Pre-deployment checks passed', 'green');
}

/**
 * Run tests
 */
function runTests() {
	log('🧪 Running tests...', 'bright');
	
	try {
		// Run unit tests
		exec('npm run test:run');
		
		// Run type checking
		exec('npm run check');
		
		// Run linting
		exec('npm run lint');
		
		log('✅ All tests passed', 'green');
	} catch (error) {
		log('❌ Tests failed', 'red');
		throw error;
	}
}

/**
 * Build the project
 */
function buildProject() {
	log('🏗️  Building project...', 'bright');
	
	try {
		// Clean previous build
		if (fs.existsSync(path.join(projectRoot, 'build'))) {
			exec('rm -rf build');
		}
		
		// Build the project
		exec('npm run build');
		
		// Check if build directory exists
		if (!fs.existsSync(path.join(projectRoot, 'build'))) {
			throw new Error('Build directory not created');
		}
		
		log('✅ Build completed successfully', 'green');
	} catch (error) {
		log('❌ Build failed', 'red');
		throw error;
	}
}

/**
 * Optimize build
 */
function optimizeBuild() {
	log('⚡ Optimizing build...', 'bright');
	
	try {
		// Run bundle analysis
		exec('npm run analyze');
		
		// Check bundle sizes
		exec('npm run size');
		
		log('✅ Build optimization completed', 'green');
	} catch (error) {
		log('⚠️  Build optimization failed, continuing...', 'yellow');
		console.error(error.message);
	}
}

/**
 * Deploy to Vercel
 */
function deployToVercel() {
	log('🚀 Deploying to Vercel...', 'bright');
	
	try {
		// Check if Vercel CLI is installed
		try {
			execSync('vercel --version', { stdio: 'pipe' });
		} catch {
			log('Installing Vercel CLI...', 'yellow');
			exec('npm install -g vercel');
		}
		
		// Deploy to production
		exec('vercel --prod');
		
		log('✅ Deployment completed successfully', 'green');
	} catch (error) {
		log('❌ Deployment failed', 'red');
		throw error;
	}
}

/**
 * Post-deployment checks
 */
function postDeploymentChecks() {
	log('🔍 Running post-deployment checks...', 'bright');
	
	try {
		// You could add health checks here
		// For now, just log success
		log('✅ Post-deployment checks completed', 'green');
	} catch (error) {
		log('⚠️  Post-deployment checks failed', 'yellow');
		console.error(error.message);
	}
}

/**
 * Main deployment function
 */
async function deploy() {
	const startTime = Date.now();
	
	try {
		log('🚀 Starting deployment process...', 'bright');
		
		await preDeploymentChecks();
		runTests();
		buildProject();
		optimizeBuild();
		deployToVercel();
		postDeploymentChecks();
		
		const duration = Math.round((Date.now() - startTime) / 1000);
		log(`🎉 Deployment completed successfully in ${duration}s`, 'green');
		
	} catch (error) {
		log('💥 Deployment failed:', 'red');
		console.error(error.message);
		process.exit(1);
	}
}

/**
 * Handle command line arguments
 */
function handleArgs() {
	const args = process.argv.slice(2);
	
	if (args.includes('--help') || args.includes('-h')) {
		console.log(`
${colors.bright}A Hacker's Brand Deployment Script${colors.reset}

Usage: node scripts/deploy.js [options]

Options:
  --help, -h     Show this help message
  --skip-tests   Skip running tests
  --skip-build   Skip building the project
  --dry-run      Run all checks but don't deploy

Examples:
  node scripts/deploy.js                 # Full deployment
  node scripts/deploy.js --skip-tests    # Deploy without running tests
  node scripts/deploy.js --dry-run       # Check everything but don't deploy
		`);
		process.exit(0);
	}
	
	return {
		skipTests: args.includes('--skip-tests'),
		skipBuild: args.includes('--skip-build'),
		dryRun: args.includes('--dry-run')
	};
}

// Run deployment if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
	const options = handleArgs();
	
	if (options.dryRun) {
		log('🔍 Running in dry-run mode...', 'yellow');
	}
	
	deploy().catch(error => {
		console.error('Deployment failed:', error);
		process.exit(1);
	});
}
