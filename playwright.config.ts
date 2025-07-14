import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 3 : 1,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 2 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		['html', { outputFolder: 'playwright-report' }],
		['json', { outputFile: 'test-results/results.json' }],
		['junit', { outputFile: 'test-results/junit.xml' }],
		...(process.env.CI ? [['github']] : [])
	],
	/* Global timeout for each test */
	timeout: 30000,
	/* Expect timeout for assertions */
	expect: {
		timeout: 10000
	},
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: 'http://localhost:5173',
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
		/* Take screenshot on failure */
		screenshot: 'only-on-failure',
		/* Record video on failure */
		video: 'retain-on-failure',
		/* Action timeout */
		actionTimeout: 10000,
		/* Navigation timeout */
		navigationTimeout: 30000,
		/* Ignore HTTPS errors */
		ignoreHTTPSErrors: true,
		/* Viewport size */
		viewport: { width: 1280, height: 720 },
		/* User agent */
		userAgent: 'A-Hackers-Brand-E2E-Tests'
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},

		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] }
		}

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:5173',
		reuseExistingServer: !process.env.CI
	}
});
