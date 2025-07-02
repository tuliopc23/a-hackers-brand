module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:5173'],
			startServerCommand: 'pnpm dev',
			startServerReadyPattern: 'Local:.*:5173',
			startServerReadyTimeout: 30000,
			numberOfRuns: 3,
			settings: {
				chromeFlags: '--no-sandbox --headless',
				preset: 'desktop',
				// Collect more metrics
				onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
				skipAudits: ['uses-http2'] // Skip HTTP/2 audit for local dev
			}
		},
		assert: {
			// Performance budgets
			assertions: {
				// Core Web Vitals
				'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
				'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
				'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
				'total-blocking-time': ['warn', { maxNumericValue: 300 }],
				'speed-index': ['warn', { maxNumericValue: 3400 }],

				// Overall scores
				'categories:performance': ['warn', { minScore: 0.9 }],
				'categories:accessibility': ['warn', { minScore: 0.9 }],
				'categories:best-practices': ['warn', { minScore: 0.9 }],
				'categories:seo': ['warn', { minScore: 0.9 }],

				// Resource budgets
				'resource-summary:script:size': ['warn', { maxNumericValue: 200000 }], // 200KB
				'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 50000 }], // 50KB
				'resource-summary:image:size': ['warn', { maxNumericValue: 100000 }], // 100KB
				'resource-summary:total:size': ['warn', { maxNumericValue: 500000 }], // 500KB

				// Network requests
				'resource-summary:total:count': ['warn', { maxNumericValue: 50 }],
				'unused-javascript': ['warn', { maxNumericValue: 50000 }], // 50KB
				'unused-css-rules': ['warn', { maxNumericValue: 10000 }], // 10KB

				// Progressive Web App
				'installable-manifest': 'off', // Skip PWA requirements for now
				'splash-screen': 'off',
				'themed-omnibox': 'off',

				// Modern web features
				'uses-text-compression': 'error',
				'uses-responsive-images': 'warn',
				'efficient-animated-content': 'warn',
				'modern-image-formats': 'warn'
			}
		},
		upload: {
			target: 'temporary-public-storage'
			// Uncomment and configure for permanent storage
			// target: 'lhci',
			// serverBaseUrl: 'http://localhost:9001',
			// token: 'your-lhci-server-token'
		},
		server: {
			// Uncomment to run local LHCI server
			// port: 9001,
			// storage: {
			//   storageMethod: 'sql',
			//   sqlDialect: 'sqlite',
			//   sqlDatabasePath: './lhci.db'
			// }
		}
	}
};
