import { test, expect } from '@playwright/test';

test.describe('Core Components Visual Regression', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to the component showcase page
		await page.goto('/components');
		// Wait for animations and liquid glass effects to settle
		await page.waitForTimeout(1500);
	});

	test('Button components all variants', async ({ page }) => {
		// Navigate to button showcase if it exists, otherwise test on components page
		const buttonSection = page.locator('[data-component="button"], .button-showcase');

		if ((await buttonSection.count()) > 0) {
			await buttonSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(buttonSection).toHaveScreenshot('button-variants.png');
		}

		// Test individual button states
		const buttons = page.locator('button').filter({ hasText: /^(Primary|Secondary|Glass|Terminal)/ });
		if ((await buttons.count()) > 0) {
			// Test hover state
			await buttons.first().hover();
			await page.waitForTimeout(300);
			await expect(buttons.first()).toHaveScreenshot('button-hover-state.png');

			// Test focus state
			await buttons.first().focus();
			await page.waitForTimeout(300);
			await expect(buttons.first()).toHaveScreenshot('button-focus-state.png');
		}
	});

	test('Input components with glass effects', async ({ page }) => {
		const inputSection = page.locator('[data-component="input"], .input-showcase');

		if ((await inputSection.count()) > 0) {
			await inputSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(inputSection).toHaveScreenshot('input-variants.png');
		}

		// Test input focus states for glass morphism
		const inputs = page.locator('input[type="text"], input[type="email"]');
		if ((await inputs.count()) > 0) {
			await inputs.first().focus();
			await page.waitForTimeout(500); // Wait for glass transition
			await expect(inputs.first()).toHaveScreenshot('input-focus-glass.png');

			// Test with content
			await inputs.first().fill('Sample input text');
			await page.waitForTimeout(300);
			await expect(inputs.first()).toHaveScreenshot('input-with-content.png');
		}
	});

	test('Modal overlay and backdrop blur', async ({ page }) => {
		// Look for modal trigger button
		const modalTrigger = page.locator('button').filter({ hasText: /modal|dialog|open/i });

		if ((await modalTrigger.count()) > 0) {
			await modalTrigger.first().click();
			await page.waitForTimeout(800); // Wait for modal animation

			// Test modal overlay with backdrop blur
			const modal = page.locator('[role="dialog"], .modal');
			if ((await modal.count()) > 0) {
				await expect(page).toHaveScreenshot('modal-overlay-blur.png');
				await expect(modal).toHaveScreenshot('modal-glass-content.png');
			}
		}
	});

	test('Card components with liquid glass effects', async ({ page }) => {
		const cardSection = page.locator('[data-component="card"], .card-showcase');

		if ((await cardSection.count()) > 0) {
			await cardSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(cardSection).toHaveScreenshot('card-variants.png');
		}

		// Test interactive card hover effects
		const cards = page.locator('.card, [data-interactive="true"]');
		if ((await cards.count()) > 0) {
			await cards.first().hover();
			await page.waitForTimeout(600); // Wait for magnetic hover animation
			await expect(cards.first()).toHaveScreenshot('card-hover-magnetic.png');
		}
	});

	test('Badge components with glass morphism', async ({ page }) => {
		const badgeSection = page.locator('[data-component="badge"], .badge-showcase');

		if ((await badgeSection.count()) > 0) {
			await badgeSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(badgeSection).toHaveScreenshot('badge-variants.png');
		}

		// Test badge glow effects
		const glowBadges = page.locator('.badge').filter({ hasText: /success|error|warning/i });
		if ((await glowBadges.count()) > 0) {
			await expect(glowBadges.first()).toHaveScreenshot('badge-glow-effect.png');
		}
	});

	test('Switch components with liquid animations', async ({ page }) => {
		const switchSection = page.locator('[data-component="switch"], .switch-showcase');

		if ((await switchSection.count()) > 0) {
			await switchSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(switchSection).toHaveScreenshot('switch-variants.png');
		}

		// Test switch toggle animation
		const switches = page.locator('button[role="switch"]');
		if ((await switches.count()) > 0) {
			// Test unchecked state
			await expect(switches.first()).toHaveScreenshot('switch-unchecked.png');

			// Click and test checked state
			await switches.first().click();
			await page.waitForTimeout(400); // Wait for toggle animation
			await expect(switches.first()).toHaveScreenshot('switch-checked.png');
		}
	});

	test('Tabs navigation with glass effects', async ({ page }) => {
		const tabsSection = page.locator('[data-component="tabs"], .tabs-showcase');

		if ((await tabsSection.count()) > 0) {
			await tabsSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(tabsSection).toHaveScreenshot('tabs-variants.png');
		}

		// Test tab switching animations
		const tabs = page.locator('[role="tab"]');
		if ((await tabs.count()) > 1) {
			// Test second tab activation
			await tabs.nth(1).click();
			await page.waitForTimeout(600); // Wait for content transition
			await expect(tabsSection).toHaveScreenshot('tabs-switched-content.png');
		}
	});

	test('Dropdown menu positioning and blur', async ({ page }) => {
		const dropdownTrigger = page.locator('button').filter({ hasText: /dropdown|menu|select/i });

		if ((await dropdownTrigger.count()) > 0) {
			await dropdownTrigger.first().click();
			await page.waitForTimeout(500); // Wait for dropdown animation

			const dropdown = page.locator('[role="menu"], .dropdown-menu');
			if ((await dropdown.count()) > 0) {
				await expect(dropdown).toHaveScreenshot('dropdown-menu-glass.png');
			}
		}
	});

	test('Alert notifications with variants', async ({ page }) => {
		const alertSection = page.locator('[data-component="alert"], .alert-showcase');

		if ((await alertSection.count()) > 0) {
			await alertSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(alertSection).toHaveScreenshot('alert-variants.png');
		}

		// Test alert close animation if closable
		const closeButton = page.locator('[aria-label="Close alert"], .alert-close');
		if ((await closeButton.count()) > 0) {
			await closeButton.first().click();
			await page.waitForTimeout(400); // Wait for close animation
			await expect(page.locator('.alert-container')).toHaveScreenshot('alert-after-close.png');
		}
	});

	test('Skeleton loading animations', async ({ page }) => {
		const skeletonSection = page.locator('[data-component="skeleton"], .skeleton-showcase');

		if ((await skeletonSection.count()) > 0) {
			await skeletonSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(1000); // Wait for shimmer animation
			await expect(skeletonSection).toHaveScreenshot('skeleton-shimmer-animation.png');
		}
	});
});

test.describe('Component States and Interactions', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(1000);
	});

	test('Disabled states across components', async ({ page }) => {
		// Test disabled buttons
		const disabledButtons = page.locator('button[disabled]');
		if ((await disabledButtons.count()) > 0) {
			await expect(disabledButtons.first()).toHaveScreenshot('button-disabled-state.png');
		}

		// Test disabled inputs
		const disabledInputs = page.locator('input[disabled]');
		if ((await disabledInputs.count()) > 0) {
			await expect(disabledInputs.first()).toHaveScreenshot('input-disabled-state.png');
		}

		// Test disabled switches
		const disabledSwitches = page.locator('button[role="switch"][disabled]');
		if ((await disabledSwitches.count()) > 0) {
			await expect(disabledSwitches.first()).toHaveScreenshot('switch-disabled-state.png');
		}
	});

	test('Loading states and animations', async ({ page }) => {
		// Test button loading state
		const loadingButtons = page.locator('button').filter({ hasText: /loading|spinner/i });
		if ((await loadingButtons.count()) > 0) {
			await expect(loadingButtons.first()).toHaveScreenshot('button-loading-state.png');
		}

		// Test skeleton loading
		const skeletons = page.locator('.skeleton, [data-loading="true"]');
		if ((await skeletons.count()) > 0) {
			await page.waitForTimeout(800); // Capture mid-shimmer
			await expect(skeletons.first()).toHaveScreenshot('skeleton-loading-mid-animation.png');
		}
	});

	test('Error and validation states', async ({ page }) => {
		// Test input error states
		const errorInputs = page.locator('input[aria-invalid="true"], .input-error');
		if ((await errorInputs.count()) > 0) {
			await expect(errorInputs.first()).toHaveScreenshot('input-error-state.png');
		}

		// Test error alerts
		const errorAlerts = page.locator('.alert-error, [data-variant="error"]');
		if ((await errorAlerts.count()) > 0) {
			await expect(errorAlerts.first()).toHaveScreenshot('alert-error-variant.png');
		}
	});

	test('Success and positive states', async ({ page }) => {
		// Test success alerts
		const successAlerts = page.locator('.alert-success, [data-variant="success"]');
		if ((await successAlerts.count()) > 0) {
			await expect(successAlerts.first()).toHaveScreenshot('alert-success-variant.png');
		}

		// Test success badges
		const successBadges = page.locator('.badge-success, [data-variant="success"]');
		if ((await successBadges.count()) > 0) {
			await expect(successBadges.first()).toHaveScreenshot('badge-success-variant.png');
		}
	});
});

test.describe('Responsive Design Visual Tests', () => {
	const viewports = [
		{ name: 'mobile', width: 375, height: 667 },
		{ name: 'tablet', width: 768, height: 1024 },
		{ name: 'desktop', width: 1280, height: 720 },
		{ name: 'large-desktop', width: 1920, height: 1080 }
	];

	viewports.forEach(({ name, width, height }) => {
		test(`Components responsive layout - ${name}`, async ({ page }) => {
			await page.setViewportSize({ width, height });
			await page.goto('/components');
			await page.waitForTimeout(1000);

			// Test overall layout
			await expect(page).toHaveScreenshot(`components-layout-${name}.png`);

			// Test specific component adaptations
			const responsiveComponents = page.locator('[data-responsive="true"], .responsive-component');
			if ((await responsiveComponents.count()) > 0) {
				await expect(responsiveComponents.first()).toHaveScreenshot(`responsive-component-${name}.png`);
			}
		});
	});

	test('Mobile navigation and interactions', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });
		await page.goto('/components');
		await page.waitForTimeout(500);

		// Test mobile menu if it exists
		const mobileMenuTrigger = page.locator('[aria-label*="menu"], .mobile-menu-trigger');
		if ((await mobileMenuTrigger.count()) > 0) {
			await mobileMenuTrigger.click();
			await page.waitForTimeout(600);
			await expect(page).toHaveScreenshot('mobile-menu-open.png');
		}
	});
});

test.describe('Dark Mode and Theme Variations', () => {
	test('Components in dark mode', async ({ page }) => {
		await page.goto('/components');

		// Toggle dark mode if toggle exists
		const darkModeToggle = page.locator('[aria-label*="dark"], .dark-mode-toggle');
		if ((await darkModeToggle.count()) > 0) {
			await darkModeToggle.click();
			await page.waitForTimeout(800); // Wait for theme transition

			await expect(page).toHaveScreenshot('components-dark-mode.png');
		}
	});

	test('Glass morphism effects in different themes', async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(500);

		// Test glass components specifically
		const glassComponents = page.locator('.glass, [data-variant="glass"]');
		if ((await glassComponents.count()) > 0) {
			await expect(glassComponents.first()).toHaveScreenshot('glass-morphism-light-theme.png');
		}

		// Switch to dark mode if available
		const darkModeToggle = page.locator('[aria-label*="dark"], .dark-mode-toggle');
		if ((await darkModeToggle.count()) > 0) {
			await darkModeToggle.click();
			await page.waitForTimeout(800);

			if ((await glassComponents.count()) > 0) {
				await expect(glassComponents.first()).toHaveScreenshot('glass-morphism-dark-theme.png');
			}
		}
	});
});
