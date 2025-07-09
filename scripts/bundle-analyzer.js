#!/usr/bin/env node

/**
 * A Hacker's Brand - Bundle Size Analyzer
 * Analyzes bundle size, tracks changes, and enforces size limits
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import { gzipSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// Configuration
const config = {
	distPath: path.join(__dirname, '..', 'dist'),
	reportsPath: path.join(__dirname, '..', 'reports'),
	historyPath: path.join(__dirname, '..', 'reports', 'bundle-history.json'),
	configPath: path.join(__dirname, '..', 'bundlesize.config.js')
};

// ANSI Colors
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m'
};

// Helper functions
function formatSize(bytes) {
	if (bytes === 0) return '0 B';
	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

function parseSize(sizeString) {
	const match = sizeString.match(/^(\d+(?:\.\d+)?)\s*(B|KB|MB|GB)$/i);
	if (!match) throw new Error(`Invalid size format: ${sizeString}`);

	const value = parseFloat(match[1]);
	const unit = match[2].toUpperCase();

	const multipliers = { B: 1, KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 };
	return value * multipliers[unit];
}

function getFileSize(filePath, compression = 'none') {
	if (!fs.existsSync(filePath)) return 0;

	const content = fs.readFileSync(filePath);

	switch (compression) {
		case 'gzip':
			return gzipSync(content).length;
		case 'brotli':
			// Note: Node.js built-in brotli compression would require additional setup
			// For now, estimate brotli as ~80% of gzip size
			return Math.floor(gzipSync(content).length * 0.8);
		default:
			return content.length;
	}
}

function loadBundleConfig() {
	try {
		const configContent = fs.readFileSync(config.configPath, 'utf8');
		// Simple config parsing (assuming ES module export default)
		const configMatch = configContent.match(/export\s+default\s+(\{[\s\S]*\});/);
		if (!configMatch) throw new Error('Cannot parse config file');

		// Use eval for simplicity (in production, use a proper parser)
		const configString = configMatch[1];
		return eval(`(${configString})`);
	} catch (error) {
		console.error(`${colors.red}Error loading config:${colors.reset}`, error.message);
		return null;
	}
}

function loadBundleHistory() {
	try {
		if (!fs.existsSync(config.historyPath)) return [];
		return JSON.parse(fs.readFileSync(config.historyPath, 'utf8'));
	} catch (error) {
		console.warn(`${colors.yellow}Warning: Could not load bundle history${colors.reset}`);
		return [];
	}
}

function saveBundleHistory(history) {
	try {
		fs.mkdirSync(config.reportsPath, { recursive: true });
		fs.writeFileSync(config.historyPath, JSON.stringify(history, null, 2));
	} catch (error) {
		console.error(`${colors.red}Error saving bundle history:${colors.reset}`, error.message);
	}
}

function analyzeBundle(bundleConfig) {
	const results = [];
	const timestamp = new Date().toISOString();

	console.log(`${colors.bright}${colors.cyan}🔍 Analyzing bundle sizes...${colors.reset}\n`);

	for (const fileConfig of bundleConfig.files) {
		const filePath = path.resolve(fileConfig.path);
		const size = getFileSize(filePath, fileConfig.compression);
		const maxSize = parseSize(fileConfig.maxSize);

		const result = {
			name: fileConfig.name,
			path: fileConfig.path,
			size,
			maxSize,
			compression: fileConfig.compression,
			sizeFormatted: formatSize(size),
			maxSizeFormatted: fileConfig.maxSize,
			percentage: maxSize > 0 ? ((size / maxSize) * 100).toFixed(1) : 0,
			status: size <= maxSize ? 'pass' : 'fail',
			timestamp,
			exists: fs.existsSync(filePath)
		};

		results.push(result);
	}

	return results;
}

function displayResults(results) {
	console.log(`${colors.bright}Bundle Size Analysis Results${colors.reset}`);
	console.log('─'.repeat(100));

	// Table header
	console.log(
		`${colors.bright}${'Bundle Name'.padEnd(30)} ${'Size'.padEnd(12)} ${'Max Size'.padEnd(12)} ${'Usage'.padEnd(10)} ${'Status'.padEnd(8)}${colors.reset}`
	);
	console.log('─'.repeat(100));

	let totalFailed = 0;
	let totalWarning = 0;

	for (const result of results) {
		if (!result.exists) {
			console.log(
				`${colors.yellow}${result.name.padEnd(30)} ${'NOT FOUND'.padEnd(12)} ${result.maxSizeFormatted.padEnd(12)} ${'N/A'.padEnd(10)} ${'SKIP'.padEnd(8)}${colors.reset}`
			);
			continue;
		}

		const statusColor = result.status === 'pass' ? colors.green : colors.red;
		const usageColor = result.percentage > 90 ? colors.red : result.percentage > 75 ? colors.yellow : colors.green;

		console.log(
			`${result.name.padEnd(30)} ${result.sizeFormatted.padEnd(12)} ${result.maxSizeFormatted.padEnd(12)} ${usageColor}${result.percentage}%${colors.reset}${''.padEnd(10 - result.percentage.toString().length - 1)} ${statusColor}${result.status.toUpperCase()}${colors.reset}`
		);

		if (result.status === 'fail') totalFailed++;
		if (result.percentage > 75) totalWarning++;
	}

	console.log('─'.repeat(100));

	// Summary
	const passCount = results.filter((r) => r.status === 'pass' && r.exists).length;
	const failCount = results.filter((r) => r.status === 'fail').length;
	const skipCount = results.filter((r) => !r.exists).length;

	console.log(`${colors.bright}Summary:${colors.reset}`);
	console.log(`  ${colors.green}✓ ${passCount} passed${colors.reset}`);
	if (failCount > 0) console.log(`  ${colors.red}✗ ${failCount} failed${colors.reset}`);
	if (skipCount > 0) console.log(`  ${colors.yellow}⚠ ${skipCount} skipped${colors.reset}`);

	return { passCount, failCount, skipCount, totalFailed, totalWarning };
}

function generateReport(results, bundleConfig) {
	const report = {
		timestamp: new Date().toISOString(),
		summary: {
			total: results.length,
			passed: results.filter((r) => r.status === 'pass' && r.exists).length,
			failed: results.filter((r) => r.status === 'fail').length,
			skipped: results.filter((r) => !r.exists).length
		},
		results,
		config: bundleConfig
	};

	// Save JSON report
	const reportPath = path.join(config.reportsPath, 'bundle-size-report.json');
	fs.mkdirSync(config.reportsPath, { recursive: true });
	fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

	// Generate markdown report
	const markdownReport = generateMarkdownReport(report);
	const markdownPath = path.join(config.reportsPath, 'bundle-size-report.md');
	fs.writeFileSync(markdownPath, markdownReport);

	console.log(`\n${colors.bright}Reports generated:${colors.reset}`);
	console.log(`  📄 JSON: ${reportPath}`);
	console.log(`  📝 Markdown: ${markdownPath}`);

	return report;
}

function generateMarkdownReport(report) {
	const { timestamp, summary, results } = report;

	let markdown = `# Bundle Size Report\n\n`;
	markdown += `**Generated:** ${new Date(timestamp).toLocaleString()}\n\n`;

	// Summary
	markdown += `## Summary\n\n`;
	markdown += `| Status | Count |\n`;
	markdown += `|--------|-------|\n`;
	markdown += `| ✅ Passed | ${summary.passed} |\n`;
	markdown += `| ❌ Failed | ${summary.failed} |\n`;
	markdown += `| ⚠️ Skipped | ${summary.skipped} |\n\n`;

	// Results table
	markdown += `## Bundle Analysis\n\n`;
	markdown += `| Bundle | Size | Max Size | Usage | Status |\n`;
	markdown += `|--------|------|----------|-------|--------|\n`;

	for (const result of results) {
		if (!result.exists) {
			markdown += `| ${result.name} | - | ${result.maxSizeFormatted} | - | ⚠️ Not Found |\n`;
			continue;
		}

		const statusEmoji = result.status === 'pass' ? '✅' : '❌';
		const usageEmoji = result.percentage > 90 ? '🔴' : result.percentage > 75 ? '🟡' : '🟢';

		markdown += `| ${result.name} | ${result.sizeFormatted} | ${result.maxSizeFormatted} | ${usageEmoji} ${result.percentage}% | ${statusEmoji} ${result.status.toUpperCase()} |\n`;
	}

	markdown += `\n---\n\n`;
	markdown += `*This report was generated automatically by the A Hacker's Brand bundle analyzer.*\n`;

	return markdown;
}

function updateBundleHistory(results) {
	const history = loadBundleHistory();
	const entry = {
		timestamp: new Date().toISOString(),
		results: results.map((r) => ({
			name: r.name,
			size: r.size,
			percentage: r.percentage,
			status: r.status
		}))
	};

	history.push(entry);

	// Keep only last 50 entries
	if (history.length > 50) {
		history.splice(0, history.length - 50);
	}

	saveBundleHistory(history);
}

async function main() {
	console.log(`${colors.bright}${colors.magenta}🚀 A Hacker's Brand Bundle Size Analyzer${colors.reset}\n`);

	// Load configuration
	const bundleConfig = loadBundleConfig();
	if (!bundleConfig) {
		console.error(`${colors.red}Failed to load bundle configuration${colors.reset}`);
		process.exit(1);
	}

	// Check if dist directory exists
	if (!fs.existsSync(config.distPath)) {
		console.error(`${colors.red}Build directory not found: ${config.distPath}${colors.reset}`);
		console.log(`${colors.yellow}Run 'npm run build' first${colors.reset}`);
		process.exit(1);
	}

	// Analyze bundles
	const results = analyzeBundle(bundleConfig);

	// Display results
	const { failCount } = displayResults(results);

	// Generate reports
	const report = generateReport(results, bundleConfig);

	// Update history
	updateBundleHistory(results);

	// Exit with error if any bundles exceed limits
	if (failCount > 0 && bundleConfig.ci?.failOnExceed) {
		console.log(`\n${colors.red}❌ Bundle size limits exceeded. Build failed.${colors.reset}`);
		process.exit(1);
	}

	console.log(`\n${colors.green}✅ Bundle size analysis complete${colors.reset}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
	main().catch((error) => {
		console.error(`${colors.red}Error:${colors.reset}`, error);
		process.exit(1);
	});
}

export { analyzeBundle, formatSize, parseSize, getFileSize };
