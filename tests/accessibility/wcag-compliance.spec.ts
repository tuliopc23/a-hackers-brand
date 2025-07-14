/**
 * WCAG 2.1 AA Compliance Tests
 * Comprehensive accessibility testing for production readiness
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('WCAG 2.1 AA Compliance', () => {
	test.beforeEach(async ({ page }) => {
		// Set up accessibility testing
		await page.goto('/');
		await page.waitForLoadState('networkidle');
	});

	test.describe('Automated Accessibility Scanning', () => {
		test('should pass axe accessibility tests on homepage', async ({ page }) => {
			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});

		test('should pass axe tests on component pages', async ({ page }) => {
			const componentPages = [
				'/docs/components/button',
				'/docs/components/input',
				'/docs/components/modal',
				'/docs/components/card',
				'/docs/components/tabs'
			];

			for (const pagePath of componentPages) {
				await page.goto(pagePath);
				await page.waitForLoadState('networkidle');

				const accessibilityScanResults = await new AxeBuilder({ page })
					.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
					.analyze();

				expect(accessibilityScanResults.violations).toEqual([]);
			}
		});

		test('should pass axe tests with high contrast mode', async ({ page }) => {
			// Enable high contrast mode
			await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
			
			await page.goto('/');
			await page.waitForLoadState('networkidle');

			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});

	test.describe('Keyboard Navigation', () => {
		test('should support full keyboard navigation', async ({ page }) => {
			await page.goto('/docs/components');

			// Start from the beginning
			await page.keyboard.press('Tab');
			
			// Track focus progression
			const focusableElements = [];
			let previousElement = null;

			for (let i = 0; i < 20; i++) {
				const currentElement = await page.locator(':focus').first();
				const tagName = await currentElement.evaluate(el => el.tagName);
				const role = await currentElement.getAttribute('role');
				
				// Ensure element is focusable
				expect(tagName).toMatch(/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$|role/);
				
				// Ensure focus is visible
				await expect(currentElement).toBeFocused();
				
				focusableElements.push({ tagName, role });
				
				// Move to next element
				await page.keyboard.press('Tab');
				
				// Check if we've cycled back to the beginning
				const newElement = await page.locator(':focus').first();
				if (previousElement && await newElement.isVisible()) {
					const isSameElement = await newElement.evaluate((el, prev) => 
						el === prev, previousElement);
					if (isSameElement) break;
				}
				
				previousElement = currentElement;
			}

			// Should have found multiple focusable elements
			expect(focusableElements.length).toBeGreaterThan(5);
		});

		test('should handle modal focus trapping', async ({ page }) => {
			await page.goto('/docs/components/modal');

			// Open modal
			const openButton = page.locator('[data-testid="open-modal"]').first();
			await openButton.click();

			const modal = page.locator('[role="dialog"]');
			await expect(modal).toBeVisible();

			// Focus should be trapped within modal
			const modalFocusableElements = modal.locator('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
			const count = await modalFocusableElements.count();

			// Tab through all elements in modal
			for (let i = 0; i < count + 2; i++) {
				await page.keyboard.press('Tab');
				const focusedElement = page.locator(':focus');
				
				// Focus should remain within modal
				const isWithinModal = await modal.locator(':focus').count() > 0;
				expect(isWithinModal).toBe(true);
			}
		});

		test('should support arrow key navigation in menus', async ({ page }) => {
			await page.goto('/');

			// Open navigation menu
			const menuButton = page.locator('[data-testid="menu-button"]').first();
			await menuButton.click();

			const menu = page.locator('[role="menu"]');
			await expect(menu).toBeVisible();

			// Use arrow keys to navigate
			await page.keyboard.press('ArrowDown');
			let focusedItem = page.locator('[role="menuitem"]:focus');
			await expect(focusedItem).toBeVisible();

			await page.keyboard.press('ArrowDown');
			focusedItem = page.locator('[role="menuitem"]:focus');
			await expect(focusedItem).toBeVisible();

			// Arrow up should go to previous item
			await page.keyboard.press('ArrowUp');
			focusedItem = page.locator('[role="menuitem"]:focus');
			await expect(focusedItem).toBeVisible();
		});
	});

	test.describe('Screen Reader Support', () => {
		test('should have proper heading structure', async ({ page }) => {
			await page.goto('/');

			// Check heading hierarchy
			const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
			
			let previousLevel = 0;
			for (const heading of headings) {
				const tagName = await heading.evaluate(el => el.tagName);
				const level = parseInt(tagName.charAt(1));
				
				// Heading levels should not skip (e.g., h1 -> h3)
				if (previousLevel > 0) {
					expect(level - previousLevel).toBeLessThanOrEqual(1);
				}
				
				previousLevel = level;
			}

			// Should have exactly one h1
			const h1Count = await page.locator('h1').count();
			expect(h1Count).toBe(1);
		});

		test('should have proper ARIA landmarks', async ({ page }) => {
			await page.goto('/');

			// Check for required landmarks
			await expect(page.locator('[role="main"], main')).toBeVisible();
			await expect(page.locator('[role="navigation"], nav')).toBeVisible();
			
			// Check for optional but recommended landmarks
			const banner = page.locator('[role="banner"], header');
			const contentinfo = page.locator('[role="contentinfo"], footer');
			
			if (await banner.count() > 0) {
				await expect(banner.first()).toBeVisible();
			}
			
			if (await contentinfo.count() > 0) {
				await expect(contentinfo.first()).toBeVisible();
			}
		});

		test('should have descriptive link text', async ({ page }) => {
			await page.goto('/docs/components');

			const links = await page.locator('a').all();
			
			for (const link of links) {
				const text = await link.textContent();
				const ariaLabel = await link.getAttribute('aria-label');
				const ariaLabelledby = await link.getAttribute('aria-labelledby');
				
				// Link should have descriptive text
				const hasDescriptiveText = text && text.trim().length > 0 && 
					!['click here', 'read more', 'more', 'link'].includes(text.toLowerCase().trim());
				
				const hasAriaLabel = ariaLabel && ariaLabel.trim().length > 0;
				const hasAriaLabelledby = ariaLabelledby && ariaLabelledby.trim().length > 0;
				
				expect(hasDescriptiveText || hasAriaLabel || hasAriaLabelledby).toBe(true);
			}
		});

		test('should have proper form labels', async ({ page }) => {
			await page.goto('/docs/components/input');

			const inputs = await page.locator('input, select, textarea').all();
			
			for (const input of inputs) {
				const id = await input.getAttribute('id');
				const ariaLabel = await input.getAttribute('aria-label');
				const ariaLabelledby = await input.getAttribute('aria-labelledby');
				
				// Input should have associated label
				let hasLabel = false;
				
				if (id) {
					const label = page.locator(`label[for="${id}"]`);
					hasLabel = await label.count() > 0;
				}
				
				hasLabel = hasLabel || (ariaLabel && ariaLabel.trim().length > 0);
				hasLabel = hasLabel || (ariaLabelledby && ariaLabelledby.trim().length > 0);
				
				expect(hasLabel).toBe(true);
			}
		});
	});

	test.describe('Color Contrast', () => {
		test('should meet WCAG AA color contrast requirements', async ({ page }) => {
			await page.goto('/');

			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(['wcag2aa'])
				.include(['color-contrast'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});

		test('should maintain contrast in dark mode', async ({ page }) => {
			// Enable dark mode
			await page.emulateMedia({ colorScheme: 'dark' });
			await page.goto('/');

			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(['wcag2aa'])
				.include(['color-contrast'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});

	test.describe('Motion and Animation', () => {
		test('should respect reduced motion preferences', async ({ page }) => {
			// Enable reduced motion
			await page.emulateMedia({ reducedMotion: 'reduce' });
			await page.goto('/');

			// Check that animations are disabled or reduced
			const animatedElements = await page.locator('[class*="animate-"], [class*="transition-"]').all();
			
			for (const element of animatedElements) {
				const classes = await element.getAttribute('class');
				
				// Should have motion-reduce classes
				expect(classes).toMatch(/motion-reduce:(animate-none|transition-none)/);
			}
		});

		test('should not cause seizures with flashing content', async ({ page }) => {
			await page.goto('/showcase');

			// Check for potentially problematic animations
			const accessibilityScanResults = await new AxeBuilder({ page })
				.withRules(['blink', 'marquee'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});

	test.describe('Mobile Accessibility', () => {
		test('should be accessible on mobile devices', async ({ page }) => {
			// Set mobile viewport
			await page.setViewportSize({ width: 375, height: 667 });
			await page.goto('/');

			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});

		test('should have adequate touch targets', async ({ page }) => {
			await page.setViewportSize({ width: 375, height: 667 });
			await page.goto('/');

			// Check touch target sizes (minimum 44x44px)
			const interactiveElements = await page.locator('button, a, input, select, textarea').all();
			
			for (const element of interactiveElements) {
				const box = await element.boundingBox();
				if (box) {
					expect(box.width).toBeGreaterThanOrEqual(44);
					expect(box.height).toBeGreaterThanOrEqual(44);
				}
			}
		});
	});
});
