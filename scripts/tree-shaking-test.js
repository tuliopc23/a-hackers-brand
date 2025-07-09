#!/usr/bin/env node

/**
 * A Hacker's Brand - Tree Shaking Verification
 * Tests that unused exports are properly eliminated during bundling
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// ANSI Colors
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m'
};

// Test scenarios for tree-shaking
const testScenarios = [
	{
		name: 'Single Component Import',
		code: `import { Button } from 'a-hackers-brand';`,
		expectedIncludes: ['Button'],
		expectedExcludes: ['Modal', 'Input', 'Card', 'Tabs']
	},
	{
		name: 'Multiple Component Import',
		code: `import { Button, Input, Card } from 'a-hackers-brand';`,
		expectedIncludes: ['Button', 'Input', 'Card'],
		expectedExcludes: ['Modal', 'Tabs', 'Toast', 'Alert']
	},
	{
		name: 'Motion System Only',
		code: `import { liquidBlur, glassFade } from 'a-hackers-brand/motion';`,
		expectedIncludes: ['liquidBlur', 'glassFade'],
		expectedExcludes: ['Button', 'Card', 'springPop', 'magneticHover']
	},
	{
		name: 'Tokens Only',
		code: `import { colors, spacing } from 'a-hackers-brand/tokens';`,
		expectedIncludes: ['colors', 'spacing'],
		expectedExcludes: ['Button', 'liquidBlur', 'components']
	},
	{
		name: 'WebGL Components',
		code: `import { LiquidSphere, ParticleSystem } from 'a-hackers-brand/components/webgl';`,
		expectedIncludes: ['LiquidSphere', 'ParticleSystem'],
		expectedExcludes: ['Button', 'Input', 'three', 'threlte']
	}
];

async function createTestBundle(scenario) {
	const testDir = path.join(__dirname, '..', 'tree-shaking-tests');
	const testFile = path.join(testDir, `test-${scenario.name.toLowerCase().replace(/\s+/g, '-')}.js`);

	// Create test directory
	fs.mkdirSync(testDir, { recursive: true });

	// Create test file
	const testContent = `
${scenario.code}

// Minimal usage to prevent dead code elimination
console.log('Tree shaking test for: ${scenario.name}');
`;

	fs.writeFileSync(testFile, testContent);

	return testFile;
}

async function bundleWithVite(testFile, outputName) {
	const configContent = `
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: '${testFile}',
      name: 'TreeShakingTest',
      fileName: 'test'
    },
    outDir: 'tree-shaking-tests/dist/${outputName}',
    minify: false,
    rollupOptions: {
      external: ['three', '@threlte/core', '@threlte/extras'],
      output: {
        globals: {
          'three': 'THREE'
        }
      }
    }
  }
});
`;

	const configFile = path.join(__dirname, '..', 'tree-shaking-tests', `vite.config.${outputName}.js`);
	fs.writeFileSync(configFile, configContent);

	try {
		const { stdout, stderr } = await execAsync(`npx vite build --config ${configFile}`, {
			cwd: path.join(__dirname, '..')
		});

		if (stderr && !stderr.includes('warnings')) {
			console.error(`${colors.yellow}Build warnings:${colors.reset}`, stderr);
		}

		return path.join(__dirname, '..', 'tree-shaking-tests', 'dist', outputName, 'test.js');
	} catch (error) {
		console.error(`${colors.red}Build failed:${colors.reset}`, error.message);
		return null;
	}
}

function analyzeBundleContent(bundlePath, scenario) {
	if (!fs.existsSync(bundlePath)) {
		return { success: false, error: 'Bundle file not found' };
	}

	const bundleContent = fs.readFileSync(bundlePath, 'utf8');
	const results = {
		success: true,
		includes: [],
		excludes: [],
		unexpectedIncludes: [],
		missingExpected: [],
		bundleSize: bundleContent.length
	};

	// Check expected includes
	for (const expected of scenario.expectedIncludes) {
		if (bundleContent.includes(expected)) {
			results.includes.push(expected);
		} else {
			results.missingExpected.push(expected);
			results.success = false;
		}
	}

	// Check expected excludes
	for (const excluded of scenario.expectedExcludes) {
		if (bundleContent.includes(excluded)) {
			results.unexpectedIncludes.push(excluded);
			results.success = false;
		} else {
			results.excludes.push(excluded);
		}
	}

	return results;
}

function displayResults(scenario, results) {
	console.log(`\n${colors.bright}${colors.cyan}📦 ${scenario.name}${colors.reset}`);
	console.log('─'.repeat(60));

	if (results.success) {
		console.log(`${colors.green}✅ Tree-shaking working correctly${colors.reset}`);
	} else {
		console.log(`${colors.red}❌ Tree-shaking issues detected${colors.reset}`);
	}

	console.log(`${colors.blue}Bundle size:${colors.reset} ${(results.bundleSize / 1024).toFixed(2)} KB`);

	if (results.includes.length > 0) {
		console.log(`${colors.green}✓ Included:${colors.reset} ${results.includes.join(', ')}`);
	}

	if (results.excludes.length > 0) {
		console.log(`${colors.green}✓ Excluded:${colors.reset} ${results.excludes.join(', ')}`);
	}

	if (results.missingExpected.length > 0) {
		console.log(`${colors.red}✗ Missing expected:${colors.reset} ${results.missingExpected.join(', ')}`);
	}

	if (results.unexpectedIncludes.length > 0) {
		console.log(`${colors.red}✗ Unexpected includes:${colors.reset} ${results.unexpectedIncludes.join(', ')}`);
	}
}

function generateReport(allResults) {
	const report = {
		timestamp: new Date().toISOString(),
		summary: {
			total: allResults.length,
			passed: allResults.filter((r) => r.results.success).length,
			failed: allResults.filter((r) => r.results.success === false).length
		},
		results: allResults.map((r) => ({
			scenario: r.scenario.name,
			success: r.results.success,
			bundleSize: r.results.bundleSize,
			issues: [
				...r.results.missingExpected.map((item) => ({ type: 'missing', item })),
				...r.results.unexpectedIncludes.map((item) => ({ type: 'unexpected', item }))
			]
		}))
	};

	const reportsDir = path.join(__dirname, '..', 'reports');
	fs.mkdirSync(reportsDir, { recursive: true });

	const reportPath = path.join(reportsDir, 'tree-shaking-report.json');
	fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

	console.log(`\n${colors.bright}📄 Report saved:${colors.reset} ${reportPath}`);

	return report;
}

async function runTreeShakingTests() {
	console.log(`${colors.bright}${colors.magenta}🌳 A Hacker's Brand Tree-Shaking Verification${colors.reset}\n`);

	// Check if package is built
	const distPath = path.join(__dirname, '..', 'dist');
	if (!fs.existsSync(distPath)) {
		console.error(`${colors.red}❌ Package not built. Run 'npm run build:package' first${colors.reset}`);
		process.exit(1);
	}

	const allResults = [];

	for (const scenario of testScenarios) {
		console.log(`${colors.cyan}🧪 Testing: ${scenario.name}${colors.reset}`);

		try {
			// Create test file
			const testFile = await createTestBundle(scenario);

			// Bundle with Vite
			const bundlePath = await bundleWithVite(testFile, scenario.name.toLowerCase().replace(/\s+/g, '-'));

			if (bundlePath) {
				// Analyze bundle
				const results = analyzeBundleContent(bundlePath, scenario);

				// Display results
				displayResults(scenario, results);

				allResults.push({ scenario, results });
			} else {
				console.log(`${colors.red}❌ Failed to create bundle for ${scenario.name}${colors.reset}`);
				allResults.push({
					scenario,
					results: { success: false, error: 'Bundle creation failed' }
				});
			}
		} catch (error) {
			console.error(`${colors.red}❌ Error testing ${scenario.name}:${colors.reset}`, error.message);
			allResults.push({
				scenario,
				results: { success: false, error: error.message }
			});
		}
	}

	// Generate final report
	const report = generateReport(allResults);

	// Summary
	console.log(`\n${colors.bright}📊 Tree-Shaking Summary${colors.reset}`);
	console.log('─'.repeat(40));
	console.log(`${colors.green}✅ Passed:${colors.reset} ${report.summary.passed}/${report.summary.total}`);
	console.log(`${colors.red}❌ Failed:${colors.reset} ${report.summary.failed}/${report.summary.total}`);

	// Cleanup test files
	const testDir = path.join(__dirname, '..', 'tree-shaking-tests');
	if (fs.existsSync(testDir)) {
		fs.rmSync(testDir, { recursive: true, force: true });
	}

	if (report.summary.failed > 0) {
		console.log(`\n${colors.red}⚠️  Tree-shaking optimization needs improvement${colors.reset}`);
		process.exit(1);
	} else {
		console.log(`\n${colors.green}🎉 Tree-shaking is working perfectly!${colors.reset}`);
	}
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
	runTreeShakingTests().catch((error) => {
		console.error(`${colors.red}Error:${colors.reset}`, error);
		process.exit(1);
	});
}

export { runTreeShakingTests };
