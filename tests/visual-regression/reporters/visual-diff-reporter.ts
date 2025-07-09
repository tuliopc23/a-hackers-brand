/**
 * A Hacker's Brand - Visual Diff Reporter
 * Custom Playwright reporter for visual regression testing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class VisualDiffReporter {
	constructor(options = {}) {
		this.outputDir = options.outputDir || 'test-results/visual-regression';
		this.results = {
			summary: {
				total: 0,
				passed: 0,
				failed: 0,
				skipped: 0,
				visualDiffs: 0
			},
			tests: [],
			diffs: []
		};
	}

	onBegin(config, suite) {
		console.log(`🎨 Starting visual regression tests with ${suite.allTests().length} tests`);
		this.startTime = Date.now();
	}

	onTestBegin(test, result) {
		console.log(`📸 Running: ${test.title}`);
	}

	onTestEnd(test, result) {
		this.results.summary.total++;

		const testResult = {
			title: test.title,
			file: test.location.file,
			line: test.location.line,
			status: result.status,
			duration: result.duration,
			errors: result.errors.map((error) => ({
				message: error.message,
				stack: error.stack
			})),
			attachments: result.attachments.map((attachment) => ({
				name: attachment.name,
				path: attachment.path,
				contentType: attachment.contentType
			}))
		};

		// Check for visual diffs
		const visualDiffAttachments = result.attachments.filter(
			(attachment) =>
				attachment.name.includes('diff') || attachment.name.includes('expected') || attachment.name.includes('actual')
		);

		if (visualDiffAttachments.length > 0) {
			this.results.summary.visualDiffs++;
			this.results.diffs.push({
				test: test.title,
				attachments: visualDiffAttachments
			});
		}

		switch (result.status) {
			case 'passed':
				this.results.summary.passed++;
				console.log(`  ✅ ${test.title}`);
				break;
			case 'failed':
				this.results.summary.failed++;
				console.log(`  ❌ ${test.title}`);
				if (result.errors.length > 0) {
					console.log(`     Error: ${result.errors[0].message}`);
				}
				break;
			case 'skipped':
				this.results.summary.skipped++;
				console.log(`  ⏭️  ${test.title}`);
				break;
		}

		this.results.tests.push(testResult);
	}

	onEnd(result) {
		const duration = Date.now() - this.startTime;
		const { summary } = this.results;

		console.log('\n📊 Visual Regression Test Results');
		console.log('─'.repeat(50));
		console.log(`Total: ${summary.total}`);
		console.log(`✅ Passed: ${summary.passed}`);
		console.log(`❌ Failed: ${summary.failed}`);
		console.log(`⏭️  Skipped: ${summary.skipped}`);
		console.log(`🎨 Visual Diffs: ${summary.visualDiffs}`);
		console.log(`⏱️  Duration: ${(duration / 1000).toFixed(2)}s`);

		// Generate detailed report
		this.generateDetailedReport();
		this.generateDiffSummary();
		this.generateMarkdownReport();

		if (summary.failed > 0) {
			console.log('\n🚨 Visual regression tests failed!');
			console.log('Check the visual diff report for details.');
		} else {
			console.log('\n🎉 All visual regression tests passed!');
		}
	}

	generateDetailedReport() {
		const report = {
			...this.results,
			timestamp: new Date().toISOString(),
			duration: Date.now() - this.startTime,
			environment: {
				nodeVersion: process.version,
				platform: process.platform,
				arch: process.arch
			}
		};

		const reportPath = path.join(this.outputDir, 'visual-diff-report.json');
		fs.mkdirSync(path.dirname(reportPath), { recursive: true });
		fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

		console.log(`📄 Detailed report: ${reportPath}`);
	}

	generateDiffSummary() {
		if (this.results.diffs.length === 0) return;

		const diffSummary = {
			totalDiffs: this.results.diffs.length,
			diffs: this.results.diffs.map((diff) => ({
				test: diff.test,
				diffCount: diff.attachments.length,
				attachments: diff.attachments.map((att) => ({
					name: att.name,
					path: path.relative(process.cwd(), att.path)
				}))
			}))
		};

		const diffPath = path.join(this.outputDir, 'visual-diffs.json');
		fs.writeFileSync(diffPath, JSON.stringify(diffSummary, null, 2));

		console.log(`🎨 Visual diffs: ${diffPath}`);
	}

	generateMarkdownReport() {
		const { summary } = this.results;

		let markdown = `# Visual Regression Test Report\n\n`;
		markdown += `**Generated:** ${new Date().toLocaleString()}\n\n`;

		// Summary table
		markdown += `## Summary\n\n`;
		markdown += `| Metric | Count |\n`;
		markdown += `|--------|-------|\n`;
		markdown += `| Total Tests | ${summary.total} |\n`;
		markdown += `| ✅ Passed | ${summary.passed} |\n`;
		markdown += `| ❌ Failed | ${summary.failed} |\n`;
		markdown += `| ⏭️ Skipped | ${summary.skipped} |\n`;
		markdown += `| 🎨 Visual Diffs | ${summary.visualDiffs} |\n\n`;

		// Failed tests
		if (summary.failed > 0) {
			markdown += `## Failed Tests\n\n`;
			const failedTests = this.results.tests.filter((test) => test.status === 'failed');

			for (const test of failedTests) {
				markdown += `### ${test.title}\n\n`;
				markdown += `**File:** \`${test.file}\`\n`;
				markdown += `**Duration:** ${test.duration}ms\n\n`;

				if (test.errors.length > 0) {
					markdown += `**Error:**\n\`\`\`\n${test.errors[0].message}\n\`\`\`\n\n`;
				}

				// Include visual diff images if available
				const diffAttachments = test.attachments.filter(
					(att) => att.name.includes('diff') || att.name.includes('expected') || att.name.includes('actual')
				);

				if (diffAttachments.length > 0) {
					markdown += `**Visual Differences:**\n\n`;
					for (const attachment of diffAttachments) {
						const relativePath = path.relative(this.outputDir, attachment.path);
						markdown += `![${attachment.name}](${relativePath})\n\n`;
					}
				}
			}
		}

		// Visual diffs
		if (this.results.diffs.length > 0) {
			markdown += `## Visual Differences\n\n`;

			for (const diff of this.results.diffs) {
				markdown += `### ${diff.test}\n\n`;

				for (const attachment of diff.attachments) {
					const relativePath = path.relative(this.outputDir, attachment.path);
					markdown += `![${attachment.name}](${relativePath})\n\n`;
				}
			}
		}

		// Test coverage
		markdown += `## Test Coverage\n\n`;
		markdown += `This report covers visual regression testing for:\n\n`;
		markdown += `- Component variations and states\n`;
		markdown += `- Animation and motion effects\n`;
		markdown += `- Responsive layouts across breakpoints\n`;
		markdown += `- Theme consistency (light/dark modes)\n`;
		markdown += `- Cross-browser compatibility\n`;
		markdown += `- Accessibility features\n`;
		markdown += `- Performance under load\n\n`;

		markdown += `---\n\n`;
		markdown += `*Generated by A Hacker's Brand Visual Regression Testing Suite*\n`;

		const markdownPath = path.join(this.outputDir, 'visual-regression-report.md');
		fs.writeFileSync(markdownPath, markdown);

		console.log(`📝 Markdown report: ${markdownPath}`);
	}
}

// Export for Playwright
export default VisualDiffReporter;
