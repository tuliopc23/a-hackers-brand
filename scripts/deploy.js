#!/usr/bin/env bun
import { spawn } from 'bun';
import { argv } from 'process';

const args = argv.slice(2);
const isDryRun = args.includes('--dry-run');
const skipTests = args.includes('--skip-tests');

async function runCommand(cmd, args = []) {
	console.log(`\n🚀 Running: ${cmd} ${args.join(' ')}`);

	if (isDryRun) {
		console.log('  [DRY RUN] Command would be executed');
		return;
	}

	const proc = spawn([cmd, ...args], {
		stdout: 'inherit',
		stderr: 'inherit',
		stdin: 'inherit'
	});

	const exitCode = await proc.exited;
	if (exitCode !== 0) {
		throw new Error(`Command failed with exit code ${exitCode}`);
	}
}

async function deploy() {
	try {
		console.log('🚀 Starting deployment process...\n');

		// Step 1: Run tests (unless skipped)
		if (!skipTests) {
			console.log('📋 Running tests...');
			await runCommand('bun', ['run', 'test:run']);
			await runCommand('bun', ['run', 'lint']);
			await runCommand('bun', ['run', 'check']);
		} else {
			console.log('⚠️  Skipping tests (--skip-tests flag)');
		}

		// Step 2: Build the package
		console.log('\n📦 Building package...');
		await runCommand('bun', ['run', 'build:package']);

		// Step 3: Build for production
		console.log('\n🏗️  Building for production...');
		await runCommand('bun', ['run', 'build']);

		// Step 4: Run size checks
		console.log('\n📊 Checking bundle size...');
		await runCommand('bun', ['run', 'size']);

		if (!isDryRun) {
			console.log('\n✅ Deployment preparation complete!');
			console.log('📌 Next steps:');
			console.log('  1. Review the changes');
			console.log('  2. Commit and push to your repository');
			console.log('  3. Your CI/CD pipeline will handle the rest');
		} else {
			console.log('\n✅ Dry run complete! No changes were made.');
		}
	} catch (error) {
		console.error('\n❌ Deployment failed:', error.message);
		process.exit(1);
	}
}

// Run deployment
await deploy();
