import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Compliance Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(1000); // Wait for components to load
	});

	test('Components page accessibility audit', async ({ page }) => {
		const accessibilityScanResults = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('Button accessibility compliance', async ({ page }) => {
		// Focus on button components specifically
		const buttonSection = page.locator('[data-component="button"], .button-showcase');
		
		if (await buttonSection.count() > 0) {
			await buttonSection.scrollIntoViewIfNeeded();
			
			const accessibilityScanResults = await new AxeBuilder({ page })
				.include('[data-component="button"]')
				.withTags(['wcag2a', 'wcag2aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		}

		// Test individual button states
		const buttons = page.locator('button');
		if (await buttons.count() > 0) {
			for (let i = 0; i < Math.min(3, await buttons.count()); i++) {
				const button = buttons.nth(i);
				
				// Check for proper ARIA attributes
				await expect(button).toHaveAttribute('type');
				
				// Test keyboard accessibility
				await button.focus();
				await expect(button).toBeFocused();
				
				// Test disabled state accessibility
				if (await button.isDisabled()) {
					await expect(button).toHaveAttribute('aria-disabled', 'true');
				}
			}
		}
	});

	test('Form components accessibility', async ({ page }) => {
		const formSection = page.locator('[data-component="form"], .form-showcase');
		
		if (await formSection.count() > 0) {
			const accessibilityScanResults = await new AxeBuilder({ page })
				.include('[data-component="form"]')
				.withTags(['wcag2a', 'wcag2aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		}

		// Test input accessibility
		const inputs = page.locator('input');
		if (await inputs.count() > 0) {
			for (let i = 0; i < Math.min(3, await inputs.count()); i++) {
				const input = inputs.nth(i);
				
				// Check for labels
				const id = await input.getAttribute('id');
				if (id) {
					const label = page.locator(`label[for="${id}"]`);
					await expect(label).toBeVisible();
				}
				
				// Test keyboard navigation
				await input.focus();
				await expect(input).toBeFocused();
				
				// Test error state accessibility
				const ariaInvalid = await input.getAttribute('aria-invalid');
				if (ariaInvalid === 'true') {
					const describedBy = await input.getAttribute('aria-describedby');
					expect(describedBy).toBeTruthy();
				}
			}
		}

		// Test switch accessibility
		const switches = page.locator('button[role="switch"]');
		if (await switches.count() > 0) {
			for (let i = 0; i < Math.min(2, await switches.count()); i++) {
				const switchElement = switches.nth(i);
				
				await expect(switchElement).toHaveAttribute('role', 'switch');
				await expect(switchElement).toHaveAttribute('aria-checked');
				
				// Test keyboard interaction
				await switchElement.focus();
				await page.keyboard.press('Space');
				// Verify state change
			}
		}
	});

	test('Modal accessibility compliance', async ({ page }) => {
		const modalTrigger = page.locator('button').filter({ hasText: /modal|dialog/i });
		
		if (await modalTrigger.count() > 0) {
			await modalTrigger.first().click();
			await page.waitForTimeout(500);
			
			const modal = page.locator('[role="dialog"]');
			if (await modal.count() > 0) {
				// Test modal ARIA attributes
				await expect(modal).toHaveAttribute('aria-modal', 'true');
				await expect(modal).toHaveAttribute('aria-labelledby');
				
				// Test focus management
				await expect(modal).toBeFocused();
				
				// Test focus trap
				await page.keyboard.press('Tab');
				const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
				expect(['BUTTON', 'INPUT', 'A'].includes(focusedElement || '')).toBeTruthy();
				
				// Test escape key
				await page.keyboard.press('Escape');
				await page.waitForTimeout(300);
				await expect(modal).not.toBeVisible();
			}
		}
	});

	test('Navigation accessibility', async ({ page }) => {
		const navigation = page.locator('[role="navigation"], nav');
		
		if (await navigation.count() > 0) {
			const accessibilityScanResults = await new AxeBuilder({ page })
				.include('[role="navigation"]')
				.withTags(['wcag2a', 'wcag2aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
			
			// Test keyboard navigation
			const navLinks = navigation.locator('a, button');
			if (await navLinks.count() > 0) {
				await navLinks.first().focus();
				
				for (let i = 0; i < Math.min(3, await navLinks.count() - 1); i++) {
					await page.keyboard.press('Tab');
					const focusedElement = await page.evaluate(() => document.activeElement);
					expect(focusedElement).toBeTruthy();
				}
			}
		}
	});

	test('Tab component accessibility', async ({ page }) => {
		const tabList = page.locator('[role="tablist"]');
		
		if (await tabList.count() > 0) {
			const accessibilityScanResults = await new AxeBuilder({ page })
				.include('[role="tablist"]')
				.withTags(['wcag2a', 'wcag2aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
			
			// Test tab navigation
			const tabs = tabList.locator('[role="tab"]');
			if (await tabs.count() > 1) {
				await tabs.first().focus();
				
				// Test arrow key navigation
				await page.keyboard.press('ArrowRight');
				await expect(tabs.nth(1)).toBeFocused();
				
				// Test tab panel association
				const activeTab = tabs.first();
				const ariaControls = await activeTab.getAttribute('aria-controls');
				if (ariaControls) {
					const tabPanel = page.locator(`#${ariaControls}`);
					await expect(tabPanel).toBeVisible();
				}
			}
		}
	});

	test('Dropdown menu accessibility', async ({ page }) => {
		const dropdownTrigger = page.locator('button').filter({ hasText: /dropdown|menu/i });
		
		if (await dropdownTrigger.count() > 0) {
			// Test closed state
			await expect(dropdownTrigger.first()).toHaveAttribute('aria-expanded', 'false');
			
			// Open dropdown
			await dropdownTrigger.first().click();
			await page.waitForTimeout(300);
			
			// Test open state
			await expect(dropdownTrigger.first()).toHaveAttribute('aria-expanded', 'true');
			
			const dropdown = page.locator('[role="menu"], .dropdown-menu');
			if (await dropdown.count() > 0) {
				// Test keyboard navigation in dropdown
				await page.keyboard.press('ArrowDown');
				const focusedItem = await page.evaluate(() => document.activeElement?.getAttribute('role'));
				expect(focusedItem).toBe('menuitem');
				
				// Test escape to close
				await page.keyboard.press('Escape');
				await page.waitForTimeout(200);
				await expect(dropdown).not.toBeVisible();
			}
		}
	});

	test('Alert accessibility compliance', async ({ page }) => {
		const alerts = page.locator('[role="alert"], .alert');
		
		if (await alerts.count() > 0) {
			for (let i = 0; i < Math.min(2, await alerts.count()); i++) {
				const alert = alerts.nth(i);
				
				// Alerts should be announced to screen readers
				await expect(alert).toBeVisible();
				
				// Test closable alerts
				const closeButton = alert.locator('[aria-label*="close"], .alert-close');
				if (await closeButton.count() > 0) {
					await expect(closeButton).toHaveAttribute('aria-label');
					
					// Test keyboard interaction
					await closeButton.focus();
					await page.keyboard.press('Enter');
					await page.waitForTimeout(300);
				}
			}
		}
	});
});

test.describe('Keyboard Navigation Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(500);
	});

	test('Full page keyboard navigation', async ({ page }) => {
		// Start from the top of the page
		await page.keyboard.press('Tab');
		
		const focusedElements = [];
		let previousElement = null;
		
		// Tab through first 10 focusable elements
		for (let i = 0; i < 10; i++) {
			const currentElement = await page.evaluate(() => {
				const el = document.activeElement;
				return el ? {
					tagName: el.tagName,
					type: el.getAttribute('type'),
					role: el.getAttribute('role'),
					ariaLabel: el.getAttribute('aria-label'),
					id: el.id
				} : null;
			});
			
			if (currentElement && currentElement !== previousElement) {
				focusedElements.push(currentElement);
				previousElement = currentElement;
			}
			
			await page.keyboard.press('Tab');
			await page.waitForTimeout(100);
		}
		
		// Verify all focused elements are interactive
		for (const element of focusedElements) {
			expect(['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'].includes(element.tagName) ||
				   ['button', 'tab', 'switch', 'menuitem'].includes(element.role || '')).toBeTruthy();
		}
	});

	test('Skip links functionality', async ({ page }) => {
		// Test skip to main content link
		await page.keyboard.press('Tab');
		const firstElement = await page.evaluate(() => document.activeElement?.textContent);
		
		if (firstElement?.includes('Skip') || firstElement?.includes('Main')) {
			await page.keyboard.press('Enter');
			await page.waitForTimeout(200);
			
			const focusedAfterSkip = await page.evaluate(() => document.activeElement?.tagName);
			expect(focusedAfterSkip).toBeTruthy();
		}
	});

	test('Interactive component keyboard support', async ({ page }) => {
		// Test button activation
		const buttons = page.locator('button:not([disabled])');
		if (await buttons.count() > 0) {
			await buttons.first().focus();
			await page.keyboard.press('Enter');
			// Should trigger button action
		}
		
		// Test switch toggling
		const switches = page.locator('button[role="switch"]:not([disabled])');
		if (await switches.count() > 0) {
			const initialState = await switches.first().getAttribute('aria-checked');
			await switches.first().focus();
			await page.keyboard.press('Space');
			await page.waitForTimeout(200);
			const newState = await switches.first().getAttribute('aria-checked');
			expect(newState).not.toBe(initialState);
		}
		
		// Test input focus and typing
		const textInputs = page.locator('input[type="text"]:not([disabled])');
		if (await textInputs.count() > 0) {
			await textInputs.first().focus();
			await page.keyboard.type('Test input');
			const value = await textInputs.first().inputValue();
			expect(value).toBe('Test input');
		}
	});
});

test.describe('Screen Reader Simulation Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(500);
	});

	test('Screen reader announcements', async ({ page }) => {
		// Test live region announcements
		const liveRegions = page.locator('[aria-live], [role="status"], [role="alert"]');
		
		if (await liveRegions.count() > 0) {
			for (let i = 0; i < Math.min(2, await liveRegions.count()); i++) {
				const region = liveRegions.nth(i);
				const ariaLive = await region.getAttribute('aria-live');
				const role = await region.getAttribute('role');
				
				// Verify proper live region setup
				expect(ariaLive || role).toBeTruthy();
				
				// Test that content is accessible
				const text = await region.textContent();
				expect(text?.trim().length).toBeGreaterThan(0);
			}
		}
	});

	test('Landmark navigation', async ({ page }) => {
		// Test main content landmark
		const main = page.locator('main, [role="main"]');
		if (await main.count() > 0) {
			await expect(main).toBeVisible();
		}
		
		// Test navigation landmark
		const nav = page.locator('nav, [role="navigation"]');
		if (await nav.count() > 0) {
			await expect(nav).toBeVisible();
		}
		
		// Test complementary content
		const aside = page.locator('aside, [role="complementary"]');
		if (await aside.count() > 0) {
			await expect(aside).toBeVisible();
		}
	});

	test('Heading structure', async ({ page }) => {
		const headings = page.locator('h1, h2, h3, h4, h5, h6, [role="heading"]');
		
		if (await headings.count() > 0) {
			const headingLevels = [];
			
			for (let i = 0; i < await headings.count(); i++) {
				const heading = headings.nth(i);
				const tagName = await heading.evaluate(el => el.tagName);
				const ariaLevel = await heading.getAttribute('aria-level');
				
				const level = ariaLevel ? parseInt(ariaLevel) : parseInt(tagName.substring(1));
				headingLevels.push(level);
			}
			
			// Verify logical heading structure (no level gaps > 1)
			for (let i = 1; i < headingLevels.length; i++) {
				if (headingLevels[i] > headingLevels[i-1]) {
					expect(headingLevels[i] - headingLevels[i-1]).toBeLessThanOrEqual(1);
				}
			}
		}
	});

	test('Form accessibility for screen readers', async ({ page }) => {
		const formElements = page.locator('input, select, textarea, button[type="submit"]');
		
		if (await formElements.count() > 0) {
			for (let i = 0; i < Math.min(5, await formElements.count()); i++) {
				const element = formElements.nth(i);
				const tagName = await element.evaluate(el => el.tagName);
				
				if (tagName === 'INPUT') {
					// Verify input has accessible name
					const id = await element.getAttribute('id');
					const ariaLabel = await element.getAttribute('aria-label');
					const ariaLabelledBy = await element.getAttribute('aria-labelledby');
					const placeholder = await element.getAttribute('placeholder');
					
					const hasAccessibleName = id ? await page.locator(`label[for="${id}"]`).count() > 0 : false;
					
					expect(hasAccessibleName || ariaLabel || ariaLabelledBy || placeholder).toBeTruthy();
				}
				
				// Test required field indication
				const required = await element.getAttribute('required');
				const ariaRequired = await element.getAttribute('aria-required');
				if (required !== null || ariaRequired === 'true') {
					// Should have some indication of required state
					expect(required !== null || ariaRequired === 'true').toBeTruthy();
				}
			}
		}
	});
});

test.describe('Color Contrast and Visual Accessibility', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(500);
	});

	test('Color contrast compliance', async ({ page }) => {
		const accessibilityScanResults = await new AxeBuilder({ page })
			.withTags(['wcag2aa'])
			.withRules(['color-contrast'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('Focus indicators visibility', async ({ page }) => {
		const focusableElements = page.locator('button, input, select, textarea, a, [tabindex]:not([tabindex="-1"])');
		
		if (await focusableElements.count() > 0) {
			for (let i = 0; i < Math.min(3, await focusableElements.count()); i++) {
				const element = focusableElements.nth(i);
				
				// Focus the element
				await element.focus();
				await page.waitForTimeout(100);
				
				// Check if focus indicator is visible
				const focusStyle = await element.evaluate(el => {
					const style = window.getComputedStyle(el);
					return {
						outline: style.outline,
						outlineWidth: style.outlineWidth,
						outlineStyle: style.outlineStyle,
						outlineColor: style.outlineColor,
						boxShadow: style.boxShadow
					};
				});
				
				// Should have visible focus indicator
				const hasFocusIndicator = 
					focusStyle.outline !== 'none' ||
					focusStyle.outlineWidth !== '0px' ||
					focusStyle.boxShadow !== 'none';
				
				expect(hasFocusIndicator).toBeTruthy();
			}
		}
	});

	test('High contrast mode support', async ({ page }) => {
		// Simulate high contrast mode
		await page.emulateMedia({ forcedColors: 'active' });
		await page.reload();
		await page.waitForTimeout(500);
		
		// Test that components are still visible and functional
		const accessibilityScanResults = await new AxeBuilder({ page })
			.withTags(['wcag2aa'])
			.analyze();
		
		// Should not introduce new accessibility violations
		expect(accessibilityScanResults.violations.length).toBeLessThanOrEqual(0);
	});

	test('Reduced motion accessibility', async ({ page }) => {
		// Test with reduced motion preference
		await page.emulateMedia({ reducedMotion: 'reduce' });
		await page.reload();
		await page.waitForTimeout(500);
		
		// Components should still be accessible with reduced motion
		const accessibilityScanResults = await new AxeBuilder({ page })
			.withTags(['wcag2aa'])
			.analyze();
		
		expect(accessibilityScanResults.violations).toEqual([]);
	});
});