#!/usr/bin/env bun
import { build } from 'esbuild';
import { readFile, writeFile, rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const testCases = [
	{
		name: 'Single component import',
		code: `import { Button } from 'a-hackers-brand/components';`
	},
	{
		name: 'Multiple component imports',
		code: `import { Button, Badge, Card } from 'a-hackers-brand/components';`
	},
	{
		name: 'Full library import',
		code: `import * as AHB from 'a-hackers-brand';`
	},
	{
		name: 'Token imports',
		code: `import { colors, spacing } from 'a-hackers-brand/tokens';`
	}
];

async function testTreeShaking() {
	console.log('🌳 Testing tree-shaking effectiveness...\n');
	
	const results = [];
	
	for (const testCase of testCases) {
		console.log(`📦 Testing: ${testCase.name}`);
		
		const testFile = join(rootDir, 'tree-shake-test.js');
		await writeFile(testFile, testCase.code);
		
		try {
			const result = await build({
				entryPoints: [testFile],
				bundle: true,
				minify: true,
				format: 'esm',
				write: false,
				external: ['svelte', 'svelte/*'],
				platform: 'browser',
				target: 'esnext',
				treeShaking: true,
				metafile: true
			});
			
			const output = result.outputFiles[0].text;
			const size = output.length;
			const gzipSize = gzipSync(output).length;
			
			results.push({
				name: testCase.name,
				size,
				gzipSize,
				output: output.substring(0, 200) + '...'
			});
			
			console.log(`  ✓ Bundle size: ${formatSize(size)} (${formatSize(gzipSize)} gzipped)`);
			
		} catch (error) {
			console.error(`  ✗ Error: ${error.message}`);
			results.push({
				name: testCase.name,
				error: error.message
			});
		}
		
		// Clean up
		await rm(testFile, { force: true });
	}
	
	// Analyze results
	console.log('\n📊 Tree-shaking Analysis:');
	console.log('========================\n');
	
	const singleImportSize = results[0]?.gzipSize || 0;
	const multiImportSize = results[1]?.gzipSize || 0;
	const fullImportSize = results[2]?.gzipSize || 0;
	
	if (singleImportSize && fullImportSize) {
		const efficiency = ((fullImportSize - singleImportSize) / fullImportSize * 100).toFixed(1);
		console.log(`🎯 Tree-shaking efficiency: ${efficiency}%`);
		console.log(`   Single component: ${formatSize(singleImportSize)} gzipped`);
		console.log(`   Full library:     ${formatSize(fullImportSize)} gzipped`);
		console.log(`   Savings:          ${formatSize(fullImportSize - singleImportSize)}`);
	}
	
	// Check if tree-shaking is working
	if (multiImportSize && singleImportSize) {
		const overhead = multiImportSize - singleImportSize;
		console.log(`\n📈 Multi-import overhead: ${formatSize(overhead)} per additional component`);
	}
	
	// Recommendations
	console.log('\n💡 Recommendations:');
	if (fullImportSize > singleImportSize * 10) {
		console.log('✅ Tree-shaking is working effectively!');
		console.log('   - Users importing specific components will have smaller bundles');
		console.log('   - Consider documenting recommended import patterns');
	} else {
		console.log('⚠️  Tree-shaking could be improved:');
		console.log('   - Check for side effects in component files');
		console.log('   - Ensure proper ESM exports');
		console.log('   - Review bundler configuration');
	}
	
	// Save detailed report
	const reportPath = join(rootDir, 'reports', 'tree-shaking-analysis.json');
	await writeFile(reportPath, JSON.stringify({
		timestamp: new Date().toISOString(),
		results,
		analysis: {
			efficiency: ((fullImportSize - singleImportSize) / fullImportSize * 100).toFixed(1) + '%',
			singleComponentSize: formatSize(singleImportSize),
			fullLibrarySize: formatSize(fullImportSize)
		}
	}, null, 2));
	
	console.log(`\n📄 Detailed report saved to: reports/tree-shaking-analysis.json`);
}

function formatSize(bytes) {
	if (bytes < 1024) return `${bytes}B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

// Run the test
await testTreeShaking();