#!/usr/bin/env bun
import { spawn } from 'bun';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function runTests() {
	console.log('🧪 Running tests with Bun...\n');
	
	const args = process.argv.slice(2);
	const isWatch = args.includes('--watch') || args.includes('-w');
	const isCoverage = args.includes('--coverage') || args.includes('-c');
	
	// Build test command
	const testCommand = ['bunx', '--bun', 'vitest'];
	
	if (!isWatch) {
		testCommand.push('run');
	}
	
	if (isCoverage) {
		testCommand.push('--coverage');
	}
	
	// Add any additional arguments
	testCommand.push(...args.filter(arg => 
		!['--watch', '-w', '--coverage', '-c'].includes(arg)
	));
	
	// Run tests
	const testProcess = spawn(testCommand, {
		stdout: 'inherit',
		stderr: 'inherit',
		stdin: 'inherit',
		env: {
			...process.env,
			NODE_ENV: 'test',
			// Bun-specific test environment
			BUN_ENV: 'test'
		}
	});
	
	// Handle process termination
	process.on('SIGINT', () => {
		console.log('\n👋 Stopping tests...');
		testProcess.kill();
		process.exit(0);
	});
	
	// Wait for tests to complete
	const exitCode = await testProcess.exited;
	
	if (exitCode === 0) {
		console.log('\n✅ All tests passed!');
		
		// Run coverage analysis if needed
		if (isCoverage && !isWatch) {
			console.log('\n📊 Analyzing coverage...');
			await analyzeCoverage();
		}
	} else {
		console.log(`\n❌ Tests failed with exit code ${exitCode}`);
	}
	
	process.exit(exitCode);
}

async function analyzeCoverage() {
	const analysisProcess = spawn(['bun', join(rootDir, 'scripts/test-coverage-analysis.js')], {
		stdout: 'inherit',
		stderr: 'inherit'
	});
	
	await analysisProcess.exited;
}

// Alternative: Pure Bun test runner (for .test.ts files)
async function bunNativeTests() {
	console.log('🧪 Running native Bun tests...\n');
	
	const testProcess = spawn(['bun', 'test'], {
		stdout: 'inherit',
		stderr: 'inherit',
		stdin: 'inherit'
	});
	
	const exitCode = await testProcess.exited;
	process.exit(exitCode);
}

// Check if we should use native Bun tests
const useNativeBun = process.argv.includes('--native');

if (useNativeBun) {
	await bunNativeTests();
} else {
	await runTests();
}