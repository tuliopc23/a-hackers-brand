#!/usr/bin/env node

/**
 * Test Coverage Analysis Script
 * Analyzes test coverage and identifies gaps for 90%+ coverage goal
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
 * Run test coverage and analyze results
 */
async function analyzeCoverage() {
	console.log(`${colors.bright}${colors.cyan}📊 Test Coverage Analysis${colors.reset}\n`);

	try {
		// Run tests with coverage
		console.log(`${colors.yellow}Running tests with coverage...${colors.reset}`);
		execSync('npm run test:coverage', { 
			cwd: projectRoot,
			stdio: 'inherit'
		});

		// Read coverage report
		const coverageFile = path.join(projectRoot, 'coverage', 'coverage-summary.json');
		
		if (!fs.existsSync(coverageFile)) {
			throw new Error('Coverage report not found. Make sure tests ran successfully.');
		}

		const coverage = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));
		
		// Analyze coverage data
		const analysis = analyzeCoverageData(coverage);
		
		// Display results
		displayCoverageResults(analysis);
		
		// Generate recommendations
		generateRecommendations(analysis);
		
		// Check if we meet 90% threshold
		const meetsThreshold = checkCoverageThreshold(analysis, 90);
		
		if (!meetsThreshold) {
			console.log(`\n${colors.red}❌ Coverage below 90% threshold${colors.reset}`);
			process.exit(1);
		} else {
			console.log(`\n${colors.green}✅ Coverage meets 90% threshold${colors.reset}`);
		}

	} catch (error) {
		console.error(`${colors.red}Coverage analysis failed:${colors.reset}`, error.message);
		process.exit(1);
	}
}

/**
 * Analyze coverage data
 */
function analyzeCoverageData(coverage) {
	const total = coverage.total;
	const files = Object.entries(coverage)
		.filter(([key]) => key !== 'total')
		.map(([file, data]) => ({
			file,
			...data
		}));

	// Find files with low coverage
	const lowCoverageFiles = files.filter(file => 
		file.lines.pct < 90 || 
		file.functions.pct < 90 || 
		file.statements.pct < 90
	);

	// Find untested files
	const untestedFiles = files.filter(file => 
		file.lines.pct === 0
	);

	// Calculate component coverage
	const componentFiles = files.filter(file => 
		file.file.includes('/components/') && 
		file.file.endsWith('.svelte')
	);

	const utilityFiles = files.filter(file => 
		file.file.includes('/utils/') ||
		file.file.includes('/motion/')
	);

	return {
		total,
		files,
		lowCoverageFiles,
		untestedFiles,
		componentFiles,
		utilityFiles,
		stats: {
			totalFiles: files.length,
			componentCount: componentFiles.length,
			utilityCount: utilityFiles.length,
			lowCoverageCount: lowCoverageFiles.length,
			untestedCount: untestedFiles.length
		}
	};
}

/**
 * Display coverage results
 */
function displayCoverageResults(analysis) {
	const { total, stats } = analysis;

	console.log(`\n${colors.bright}📈 Coverage Summary${colors.reset}`);
	console.log(`Lines:      ${formatCoverage(total.lines.pct)}%`);
	console.log(`Functions:  ${formatCoverage(total.functions.pct)}%`);
	console.log(`Statements: ${formatCoverage(total.statements.pct)}%`);
	console.log(`Branches:   ${formatCoverage(total.branches.pct)}%`);

	console.log(`\n${colors.bright}📁 File Statistics${colors.reset}`);
	console.log(`Total Files:        ${stats.totalFiles}`);
	console.log(`Components:         ${stats.componentCount}`);
	console.log(`Utilities:          ${stats.utilityCount}`);
	console.log(`Low Coverage:       ${stats.lowCoverageCount}`);
	console.log(`Untested:           ${stats.untestedCount}`);

	// Show low coverage files
	if (analysis.lowCoverageFiles.length > 0) {
		console.log(`\n${colors.yellow}⚠️  Files with Low Coverage (<90%)${colors.reset}`);
		analysis.lowCoverageFiles.forEach(file => {
			const fileName = path.basename(file.file);
			console.log(`  ${fileName}: ${formatCoverage(file.lines.pct)}% lines, ${formatCoverage(file.functions.pct)}% functions`);
		});
	}

	// Show untested files
	if (analysis.untestedFiles.length > 0) {
		console.log(`\n${colors.red}❌ Untested Files${colors.reset}`);
		analysis.untestedFiles.forEach(file => {
			console.log(`  ${path.basename(file.file)}`);
		});
	}
}

/**
 * Generate recommendations for improving coverage
 */
function generateRecommendations(analysis) {
	console.log(`\n${colors.bright}💡 Recommendations${colors.reset}`);

	const recommendations = [];

	if (analysis.untestedFiles.length > 0) {
		recommendations.push(`Create tests for ${analysis.untestedFiles.length} untested files`);
	}

	if (analysis.lowCoverageFiles.length > 0) {
		recommendations.push(`Improve coverage for ${analysis.lowCoverageFiles.length} files below 90%`);
	}

	// Component-specific recommendations
	const untestedComponents = analysis.untestedFiles.filter(f => f.file.includes('/components/'));
	if (untestedComponents.length > 0) {
		recommendations.push(`Priority: Test ${untestedComponents.length} untested components`);
	}

	// Utility-specific recommendations
	const untestedUtils = analysis.untestedFiles.filter(f => 
		f.file.includes('/utils/') || f.file.includes('/motion/')
	);
	if (untestedUtils.length > 0) {
		recommendations.push(`Test ${untestedUtils.length} utility functions`);
	}

	if (recommendations.length === 0) {
		console.log(`${colors.green}✅ Coverage is excellent! No major improvements needed.${colors.reset}`);
	} else {
		recommendations.forEach((rec, index) => {
			console.log(`${index + 1}. ${rec}`);
		});
	}
}

/**
 * Check if coverage meets threshold
 */
function checkCoverageThreshold(analysis, threshold) {
	const { total } = analysis;
	return (
		total.lines.pct >= threshold &&
		total.functions.pct >= threshold &&
		total.statements.pct >= threshold &&
		total.branches.pct >= (threshold - 5) // Slightly lower threshold for branches
	);
}

/**
 * Format coverage percentage with colors
 */
function formatCoverage(pct) {
	if (pct >= 90) return `${colors.green}${pct.toFixed(1)}${colors.reset}`;
	if (pct >= 80) return `${colors.yellow}${pct.toFixed(1)}${colors.reset}`;
	return `${colors.red}${pct.toFixed(1)}${colors.reset}`;
}

/**
 * Generate missing test files
 */
function generateMissingTests(analysis) {
	console.log(`\n${colors.bright}🔧 Generating Missing Test Files${colors.reset}`);

	analysis.untestedFiles.forEach(file => {
		if (file.file.includes('/components/') && file.file.endsWith('.svelte')) {
			generateComponentTest(file.file);
		} else if (file.file.includes('/utils/') || file.file.includes('/motion/')) {
			generateUtilityTest(file.file);
		}
	});
}

/**
 * Generate component test template
 */
function generateComponentTest(filePath) {
	const componentName = path.basename(filePath, '.svelte');
	const testPath = filePath.replace('.svelte', '.test.ts');
	
	const testTemplate = `
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import ${componentName} from '../${componentName}.svelte';

describe('${componentName}', () => {
	it('renders correctly', () => {
		const { container } = render(${componentName});
		expect(container).toBeTruthy();
	});

	it('handles props correctly', () => {
		const { container } = render(${componentName}, {
			props: {
				// Add relevant props
			}
		});
		expect(container).toBeTruthy();
	});

	// Add more tests for 90%+ coverage
});
`;

	// Write test file if it doesn't exist
	if (!fs.existsSync(testPath)) {
		fs.writeFileSync(testPath, testTemplate.trim());
		console.log(`Generated: ${path.basename(testPath)}`);
	}
}

/**
 * Generate utility test template
 */
function generateUtilityTest(filePath) {
	const utilName = path.basename(filePath, path.extname(filePath));
	const testPath = filePath.replace(path.extname(filePath), '.test.ts');
	
	const testTemplate = `
import { describe, it, expect } from 'vitest';
import { ${utilName} } from './${utilName}';

describe('${utilName}', () => {
	it('works correctly', () => {
		// Add tests for utility functions
		expect(${utilName}).toBeDefined();
	});

	// Add more tests for 90%+ coverage
});
`;

	// Write test file if it doesn't exist
	if (!fs.existsSync(testPath)) {
		fs.writeFileSync(testPath, testTemplate.trim());
		console.log(`Generated: ${path.basename(testPath)}`);
	}
}

// Run analysis if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
	analyzeCoverage().catch(error => {
		console.error(`${colors.red}Analysis failed:${colors.reset}`, error);
		process.exit(1);
	});
}
