module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/components',
        'http://localhost:3000/performance',
        'http://localhost:3000/philosophy',
        'http://localhost:3000/demo'
      ],
      numberOfRuns: 3,
      startServerCommand: 'npm run build && npm start',
      startServerReadyPattern: 'ready',
      startServerReadyTimeout: 30000,
      settings: {
        chromeFlags: '--no-sandbox --headless',
        preset: 'desktop',
        // Custom throttling for realistic conditions
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        }
      }
    },
    assert: {
      assertions: {
        // Core Web Vitals thresholds
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }],
        
        // Performance metrics
        'speed-index': ['warn', { maxNumericValue: 3000 }],
        'interactive': ['warn', { maxNumericValue: 3800 }],
        'first-meaningful-paint': ['warn', { maxNumericValue: 2000 }],
        
        // Progressive Web App
        'service-worker': 'off', // We're not using SW yet
        'installable-manifest': 'off',
        'apple-touch-icon': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
        
        // Accessibility (should be high)
        'color-contrast': ['error', { minScore: 0.9 }],
        'heading-order': ['warn', { minScore: 0.9 }],
        'alt-text': ['warn', { minScore: 0.9 }],
        
        // Best Practices
        'uses-https': 'off', // Dev environment
        'uses-http2': 'off',
        'uses-passive-event-listeners': ['warn', { minScore: 0.9 }],
        'no-document-write': ['warn', { minScore: 1 }],
        'external-anchors-use-rel-noopener': ['warn', { minScore: 1 }],
        
        // SEO
        'document-title': ['error', { minScore: 1 }],
        'meta-description': ['warn', { minScore: 1 }],
        'link-text': ['warn', { minScore: 0.9 }],
        
        // Custom performance budgets
        'resource-summary:document:size': ['warn', { maxNumericValue: 50000 }], // 50KB HTML
        'resource-summary:stylesheet:size': ['warn', { maxNumericValue: 150000 }], // 150KB CSS
        'resource-summary:script:size': ['warn', { maxNumericValue: 300000 }], // 300KB JS
        'resource-summary:image:size': ['warn', { maxNumericValue: 200000 }], // 200KB images
        'resource-summary:total:size': ['warn', { maxNumericValue: 800000 }], // 800KB total
        
        // Bundle size and efficiency
        'unused-css-rules': ['warn', { maxNumericValue: 50000 }],
        'unused-javascript': ['warn', { maxNumericValue: 100000 }],
        'modern-image-formats': ['warn', { minScore: 0.8 }],
        'efficient-animated-content': ['warn', { minScore: 0.8 }],
        
        // Glass UI specific performance
        'dom-size': ['warn', { maxNumericValue: 1500 }], // Reasonable DOM size
        'layout-shift-elements': ['warn', { maxNumericValue: 0 }], // No layout shifts
        'long-tasks': ['warn', { maxNumericValue: 0 }] // No long tasks blocking main thread
      }
    },
    upload: {
      target: 'temporary-public-storage'
    },
    server: {
      port: 9001,
      storage: {
        storageMethod: 'filesystem',
        storagePath: './lighthouse-reports'
      }
    }
  }
};

// Development configuration
if (process.env.NODE_ENV === 'development') {
  module.exports.ci.collect.url = [
    'http://localhost:3000'
  ];
  module.exports.ci.collect.numberOfRuns = 1;
  module.exports.ci.assert.assertions['uses-https'] = 'off';
}
