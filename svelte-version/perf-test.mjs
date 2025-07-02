#!/usr/bin/env node

/**
 * Performance test script using lighthouse
 */

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const URLS = ['http://localhost:5173'];

const runLighthouse = async (url) => {
	console.log(`🚀 Running Lighthouse for ${url}...`);

	try {
		const { stdout, stderr } = await execAsync(
			`npx lighthouse ${url} --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless --no-sandbox"`
		);

		console.log('✅ Lighthouse completed successfully');

		// Read and parse the report
		const fs = await import('fs');
		const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));

		// Extract key metrics
		const scores = {
			performance: Math.round(report.categories.performance.score * 100),
			accessibility: Math.round(report.categories.accessibility.score * 100),
			bestPractices: Math.round(report.categories['best-practices'].score * 100),
			seo: Math.round(report.categories.seo.score * 100)
		};

		const metrics = {
			'First Contentful Paint': report.audits['first-contentful-paint'].displayValue,
			'Largest Contentful Paint': report.audits['largest-contentful-paint'].displayValue,
			'Total Blocking Time': report.audits['total-blocking-time'].displayValue,
			'Cumulative Layout Shift': report.audits['cumulative-layout-shift'].displayValue,
			'Speed Index': report.audits['speed-index'].displayValue
		};

		console.log('\n📊 Performance Scores:');
		Object.entries(scores).forEach(([category, score]) => {
			const emoji = score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴';
			console.log(`${emoji} ${category}: ${score}/100`);
		});

		console.log('\n⏱️ Core Web Vitals:');
		Object.entries(metrics).forEach(([metric, value]) => {
			console.log(`• ${metric}: ${value}`);
		});

		return { scores, metrics };
	} catch (error) {
		console.error('❌ Lighthouse failed:', error.message);
		return null;
	}
};

const main = async () => {
	console.log('🏁 Starting performance tests...\n');

	for (const url of URLS) {
		const result = await runLighthouse(url);
		if (result) {
			console.log('\n' + '='.repeat(50) + '\n');
		}
	}

	console.log('🎉 Performance tests completed!');
};

// Run if this is the main module
if (process.argv[1] === new URL(import.meta.url).pathname) {
	main().catch(console.error);
}
