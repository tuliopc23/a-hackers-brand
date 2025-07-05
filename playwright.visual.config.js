import { defineConfig, devices } from '@playwright/test';

/**
 * A Hacker's Brand - Visual Regression Testing Configuration
 * Comprehensive visual testing setup for design system consistency
 */

export default defineConfig({
  // Test directory
  testDir: './tests/visual-regression',
  
  // Test files pattern
  testMatch: '**/*.visual.{test,spec}.{js,ts}',
  
  // Global test timeout
  timeout: 60000,
  expect: {
    // Visual comparison timeout
    timeout: 10000,
    // Screenshot comparison threshold
    threshold: 0.2,
    // Animation handling
    toHaveScreenshot: {
      threshold: 0.2,
      animations: 'disabled',
      caret: 'hide'
    },
    toMatchSnapshot: {
      threshold: 0.2
    }
  },
  
  // Test execution
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  
  // Reporter configuration
  reporter: [
    ['html', { 
      outputFolder: 'test-results/visual-regression',
      open: 'never'
    }],
    ['json', { 
      outputFile: 'test-results/visual-regression/results.json' 
    }],
    ['junit', { 
      outputFile: 'test-results/visual-regression/junit.xml' 
    }],
    // Custom visual diff reporter
    ['./tests/visual-regression/reporters/visual-diff-reporter.js']
  ],
  
  // Global setup and teardown
  globalSetup: './tests/visual-regression/setup/global-setup.js',
  globalTeardown: './tests/visual-regression/setup/global-teardown.js',
  
  // Test configuration
  use: {
    // Base URL for testing
    baseURL: 'http://localhost:5173',
    
    // Screenshot settings
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    
    // Browser settings
    ignoreHTTPSErrors: true,
    colorScheme: 'dark',
    
    // Animation and motion settings
    reducedMotion: 'reduce',
    
    // Font settings for consistency
    fontFamily: 'system-ui, -apple-system, sans-serif',
    
    // Custom action timeout
    actionTimeout: 15000,
    navigationTimeout: 30000
  },
  
  // Browser projects for cross-browser testing
  projects: [
    // Desktop browsers
    {
      name: 'chromium-desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 }
      }
    },
    {
      name: 'firefox-desktop',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1440, height: 900 }
      }
    },
    {
      name: 'webkit-desktop',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 900 }
      }
    },
    
    // Mobile browsers
    {
      name: 'mobile-chrome',
      use: { 
        ...devices['Pixel 7'],
        isMobile: true
      }
    },
    {
      name: 'mobile-safari',
      use: { 
        ...devices['iPhone 14'],
        isMobile: true
      }
    },
    
    // Tablet browsers
    {
      name: 'tablet-chrome',
      use: { 
        ...devices['Galaxy Tab S4'],
        isMobile: true
      }
    },
    {
      name: 'tablet-safari',
      use: { 
        ...devices['iPad Pro'],
        isMobile: true
      }
    },
    
    // High DPI testing
    {
      name: 'high-dpi',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 2
      }
    },
    
    // Accessibility testing
    {
      name: 'accessibility',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        reducedMotion: 'reduce',
        forcedColors: 'active',
        colorScheme: 'light'
      }
    },
    
    // Performance testing
    {
      name: 'performance',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        launchOptions: {
          args: [
            '--disable-web-security',
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--force-device-scale-factor=1'
          ]
        }
      }
    }
  ],
  
  // Web server for testing
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  },
  
  // Output directories
  outputDir: 'test-results/visual-regression/artifacts',
  
  // Custom metadata
  metadata: {
    'design-system': 'A Hacker\'s Brand',
    'test-type': 'visual-regression',
    'version': process.env.npm_package_version || '0.0.0',
    'environment': process.env.NODE_ENV || 'test'
  }
});