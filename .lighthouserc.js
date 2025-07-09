module.exports = {
	ci: {
		collect: {
			// Serve the built static files
			staticDistDir: './build',
			// Number of runs to perform
			numberOfRuns: 3,
			// URLs to audit (adjust based on your app structure)
			url: ['http://localhost/']
		},
		assert: {
			// Performance budgets - these will cause the CI to fail if not met
			assertions: {
				'categories:performance': ['error', { minScore: 0.9 }],
				'categories:accessibility': ['error', { minScore: 0.9 }],
				'categories:best-practices': ['error', { minScore: 0.9 }],
				'categories:seo': ['error', { minScore: 0.9 }],
				// Performance metrics budgets
				'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
				'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
				'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
				'total-blocking-time': ['error', { maxNumericValue: 300 }],
				'speed-index': ['error', { maxNumericValue: 3000 }],
				// Resource budgets
				'resource-summary:document:size': ['error', { maxNumericValue: 50000 }],
				'resource-summary:script:size': ['error', { maxNumericValue: 500000 }],
				'resource-summary:stylesheet:size': ['error', { maxNumericValue: 100000 }],
				'resource-summary:image:size': ['error', { maxNumericValue: 1000000 }],
				'resource-summary:total:size': ['error', { maxNumericValue: 2000000 }]
			}
		},
		upload: {
			// Configure target if you want to store results
			target: 'temporary-public-storage'
		}
	}
};
