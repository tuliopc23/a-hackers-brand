import { test, expect } from '@playwright/test';

test.describe('Component Visual Regression Tests', () => {
	test('homepage components render correctly', async ({ page }) => {
		await page.goto('/');

		// Wait for any animations or dynamic content to settle
		await page.waitForTimeout(1000);

		// Take a full page screenshot
		await expect(page).toHaveScreenshot('homepage-full.png');
	});

	test('mobile homepage components render correctly', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });
		await page.goto('/');

		// Wait for any animations or dynamic content to settle
		await page.waitForTimeout(1000);

		// Take a full page screenshot
		await expect(page).toHaveScreenshot('homepage-mobile.png');
	});

	test('components page renders correctly', async ({ page }) => {
		await page.goto('/components');

		// Wait for any animations or dynamic content to settle
		await page.waitForTimeout(1000);

		// Take a full page screenshot
		await expect(page).toHaveScreenshot('components-page.png');
	});

	test('individual component snapshots', async ({ page }) => {
		await page.goto('/');

		// Test individual components if they have specific selectors
		const components = [
			{ selector: '[data-testid="hero"]', name: 'hero-component' },
			{ selector: '[data-testid="navigation"]', name: 'navigation-component' },
			{ selector: '[data-testid="footer"]', name: 'footer-component' }
		];

		for (const component of components) {
			const element = page.locator(component.selector);
			if ((await element.count()) > 0) {
				await expect(element).toHaveScreenshot(`${component.name}.png`);
			}
		}
	});
});
