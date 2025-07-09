// A Hacker's Brand - Bundle Size Configuration
// Monitors and enforces bundle size limits for the design system

export default {
	files: [
		{
			path: './dist/index.js',
			maxSize: '100kb',
			compression: 'gzip',
			name: 'Core Design System Bundle'
		},
		{
			path: './dist/components/index.js',
			maxSize: '80kb',
			compression: 'gzip',
			name: 'Components Bundle'
		},
		{
			path: './dist/motion/index.js',
			maxSize: '15kb',
			compression: 'gzip',
			name: 'Motion System Bundle'
		},
		{
			path: './dist/tokens/index.js',
			maxSize: '5kb',
			compression: 'gzip',
			name: 'Design Tokens Bundle'
		},
		{
			path: './dist/utils/index.js',
			maxSize: '10kb',
			compression: 'gzip',
			name: 'Utils Bundle'
		},
		{
			path: './dist/components/webgl/index.js',
			maxSize: '50kb',
			compression: 'gzip',
			name: 'WebGL Components Bundle'
		},
		{
			path: './dist/components/liquidify/index.js',
			maxSize: '30kb',
			compression: 'gzip',
			name: 'Liquidify Components Bundle'
		}
	],
	// CI/CD integration
	ci: {
		// Fail CI if bundle size exceeds limits
		failOnExceed: true,
		// Show detailed analysis
		showAnalysis: true,
		// Compare with previous build
		compareWithPrevious: true,
		// Track bundle size history
		trackHistory: true
	},
	// Analysis options
	analysis: {
		// Show top imports by size
		showTopImports: 10,
		// Show unused exports
		showUnusedExports: true,
		// Show duplicate dependencies
		showDuplicateDependencies: true,
		// Analyze tree-shaking effectiveness
		analyzeTreeShaking: true
	},
	// Optimization suggestions
	optimization: {
		// Suggest lazy loading for large components
		suggestLazyLoading: true,
		// Suggest code splitting opportunities
		suggestCodeSplitting: true,
		// Suggest dependency optimizations
		suggestDependencyOptimizations: true
	},
	// Reporting
	reporting: {
		// Output format: 'table', 'json', 'markdown'
		format: 'table',
		// Save report to file
		saveReport: true,
		// Report file path
		reportPath: './reports/bundle-size-report.json',
		// Generate markdown report for PRs
		generateMarkdownReport: true,
		markdownReportPath: './reports/bundle-size-report.md'
	}
};
