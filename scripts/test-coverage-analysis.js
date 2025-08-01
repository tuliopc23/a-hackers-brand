#!/usr/bin/env bun
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function analyzeCoverage() {
	try {
		console.log('📊 Analyzing test coverage...\n');

		const coveragePath = join(rootDir, 'coverage', 'coverage-summary.json');
		const coverageData = JSON.parse(await readFile(coveragePath, 'utf-8'));

		const total = coverageData.total;
		const thresholds = {
			statements: 90,
			branches: 85,
			functions: 90,
			lines: 90
		};

		console.log('📈 Coverage Summary:');
		console.log('==================');

		let allPassing = true;

		for (const [metric, data] of Object.entries(total)) {
			if (metric === 'linesCovered' || metric === 'linesTotal') continue;

			const percentage = data.pct;
			const threshold = thresholds[metric] || 90;
			const status = percentage >= threshold ? '✅' : '❌';
			const color = percentage >= threshold ? '\x1b[32m' : '\x1b[31m';

			console.log(
				`${status} ${metric.padEnd(12)}: ${color}${percentage.toFixed(2)}%\x1b[0m (threshold: ${threshold}%)`
			);

			if (percentage < threshold) {
				allPassing = false;
			}
		}

		console.log('\n📁 File Coverage:');
		console.log('================');

		const files = Object.entries(coverageData)
			.filter(([key]) => key !== 'total')
			.sort((a, b) => a[1].lines.pct - b[1].lines.pct)
			.slice(0, 10);

		console.log('\n🔻 Lowest coverage files:');
		for (const [file, data] of files) {
			const shortPath = file.replace(rootDir, '').replace(/^\//, '');
			const pct = data.lines.pct;
			const color = pct >= 90 ? '\x1b[32m' : pct >= 80 ? '\x1b[33m' : '\x1b[31m';
			console.log(`  ${color}${pct.toFixed(1).padStart(5)}%\x1b[0m - ${shortPath}`);
		}

		// Generate recommendations
		console.log('\n💡 Recommendations:');
		console.log('==================');

		if (!allPassing) {
			console.log('❗ Coverage thresholds not met. Consider:');
			console.log('  - Writing additional unit tests for uncovered code');
			console.log('  - Reviewing complex functions that lack tests');
			console.log('  - Adding integration tests for critical paths');
		} else {
			console.log('✅ All coverage thresholds met! Great job!');
			console.log('  - Consider raising thresholds to maintain quality');
			console.log('  - Focus on testing edge cases and error scenarios');
		}

		// Check for untested files
		const untested = files.filter(([_, data]) => data.lines.pct === 0);
		if (untested.length > 0) {
			console.log(`\n⚠️  ${untested.length} files have no test coverage!`);
		}

		process.exit(allPassing ? 0 : 1);
	} catch (error) {
		console.error('❌ Error analyzing coverage:', error);
		console.log('\n💡 Make sure to run tests with coverage first:');
		console.log('   bun run test:coverage');
		process.exit(1);
	}
}

// Run analysis
await analyzeCoverage();
