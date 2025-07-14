/**
 * End-to-End Tests for A Hacker's Brand Design System
 * Comprehensive E2E testing for production readiness
 */

import { test, expect, type Page } from '@playwright/test';

test.describe('Design System E2E Tests', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to the design system showcase
		await page.goto('/');
		
		// Wait for the page to load completely
		await page.waitForLoadState('networkidle');
		
		// Ensure no console errors
		page.on('console', msg => {
			if (msg.type() === 'error') {
				console.error('Console error:', msg.text());
			}
		});
	});

	test.describe('Component Interactions', () => {
		test('should handle button interactions correctly', async ({ page }) => {
			// Navigate to button showcase
			await page.goto('/docs/components/button');
			
			// Test different button variants
			const glassButton = page.locator('[data-testid="button-glass"]').first();
			await expect(glassButton).toBeVisible();
			
			// Test hover effects
			await glassButton.hover();
			await expect(glassButton).toHaveClass(/hover:/);
			
			// Test click interaction
			await glassButton.click();
			
			// Test keyboard navigation
			await glassButton.press('Tab');
			await expect(glassButton).toBeFocused();
			
			// Test Enter key activation
			await glassButton.press('Enter');
		});

		test('should handle modal interactions', async ({ page }) => {
			await page.goto('/docs/components/modal');
			
			// Open modal
			const openButton = page.locator('[data-testid="open-modal"]').first();
			await openButton.click();
			
			// Modal should be visible
			const modal = page.locator('[role="dialog"]');
			await expect(modal).toBeVisible();
			
			// Test focus trap
			await page.keyboard.press('Tab');
			const focusedElement = page.locator(':focus');
			await expect(focusedElement).toBeVisible();
			
			// Test escape key closes modal
			await page.keyboard.press('Escape');
			await expect(modal).not.toBeVisible();
		});

		test('should handle form interactions', async ({ page }) => {
			await page.goto('/docs/components/input');
			
			// Test input validation
			const input = page.locator('[data-testid="test-input"]').first();
			await input.fill('test@example.com');
			
			// Test form submission
			const submitButton = page.locator('[data-testid="submit-form"]').first();
			await submitButton.click();
			
			// Check for success message
			await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
		});
	});

	test.describe('Responsive Design', () => {
		test('should adapt to mobile viewport', async ({ page }) => {
			// Set mobile viewport
			await page.setViewportSize({ width: 375, height: 667 });
			
			await page.goto('/');
			
			// Check mobile navigation
			const mobileMenu = page.locator('[data-testid="mobile-menu"]');
			await expect(mobileMenu).toBeVisible();
			
			// Test mobile menu interaction
			const menuToggle = page.locator('[data-testid="menu-toggle"]');
			await menuToggle.click();
			
			const navigation = page.locator('[data-testid="navigation"]');
			await expect(navigation).toBeVisible();
		});

		test('should adapt to tablet viewport', async ({ page }) => {
			// Set tablet viewport
			await page.setViewportSize({ width: 768, height: 1024 });
			
			await page.goto('/');
			
			// Check tablet layout
			const container = page.locator('[data-testid="main-container"]');
			await expect(container).toHaveClass(/md:/);
		});

		test('should adapt to desktop viewport', async ({ page }) => {
			// Set desktop viewport
			await page.setViewportSize({ width: 1920, height: 1080 });
			
			await page.goto('/');
			
			// Check desktop layout
			const sidebar = page.locator('[data-testid="sidebar"]');
			await expect(sidebar).toBeVisible();
		});
	});

	test.describe('Accessibility', () => {
		test('should be keyboard navigable', async ({ page }) => {
			await page.goto('/docs/components');
			
			// Test tab navigation
			await page.keyboard.press('Tab');
			let focusedElement = page.locator(':focus');
			await expect(focusedElement).toBeVisible();
			
			// Continue tabbing through interactive elements
			for (let i = 0; i < 5; i++) {
				await page.keyboard.press('Tab');
				focusedElement = page.locator(':focus');
				await expect(focusedElement).toBeVisible();
			}
		});

		test('should have proper ARIA labels', async ({ page }) => {
			await page.goto('/docs/components/button');
			
			// Check ARIA labels
			const buttons = page.locator('button');
			const buttonCount = await buttons.count();
			
			for (let i = 0; i < buttonCount; i++) {
				const button = buttons.nth(i);
				const ariaLabel = await button.getAttribute('aria-label');
				const textContent = await button.textContent();
				
				// Button should have either aria-label or text content
				expect(ariaLabel || textContent).toBeTruthy();
			}
		});

		test('should support screen readers', async ({ page }) => {
			await page.goto('/');
			
			// Check for proper heading structure
			const h1 = page.locator('h1');
			await expect(h1).toBeVisible();
			
			// Check for landmark roles
			const main = page.locator('[role="main"], main');
			await expect(main).toBeVisible();
			
			const navigation = page.locator('[role="navigation"], nav');
			await expect(navigation).toBeVisible();
		});
	});

	test.describe('Performance', () => {
		test('should load quickly', async ({ page }) => {
			const startTime = Date.now();
			
			await page.goto('/');
			await page.waitForLoadState('networkidle');
			
			const loadTime = Date.now() - startTime;
			
			// Should load within 3 seconds
			expect(loadTime).toBeLessThan(3000);
		});

		test('should lazy load heavy components', async ({ page }) => {
			await page.goto('/showcase');
			
			// Check that 3D components are not loaded initially
			const threlteCanvas = page.locator('[data-testid="threlte-canvas"]');
			await expect(threlteCanvas).not.toBeVisible();
			
			// Scroll to trigger lazy loading
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
			
			// Wait for lazy loading
			await page.waitForTimeout(1000);
			
			// 3D component should now be loading or loaded
			await expect(threlteCanvas).toBeVisible();
		});
	});

	test.describe('Theme System', () => {
		test('should switch between themes', async ({ page }) => {
			await page.goto('/');
			
			// Test dark mode toggle
			const themeToggle = page.locator('[data-testid="theme-toggle"]');
			await themeToggle.click();
			
			// Check that dark mode is applied
			const html = page.locator('html');
			await expect(html).toHaveClass(/dark/);
			
			// Test light mode
			await themeToggle.click();
			await expect(html).not.toHaveClass(/dark/);
		});

		test('should maintain theme consistency', async ({ page }) => {
			await page.goto('/');
			
			// Enable dark mode
			const themeToggle = page.locator('[data-testid="theme-toggle"]');
			await themeToggle.click();
			
			// Navigate to different pages
			await page.goto('/docs/components/button');
			
			// Theme should persist
			const html = page.locator('html');
			await expect(html).toHaveClass(/dark/);
		});
	});

	test.describe('Error Handling', () => {
		test('should handle 404 errors gracefully', async ({ page }) => {
			await page.goto('/non-existent-page');
			
			// Should show 404 page
			await expect(page.locator('h1')).toContainText('404');
			
			// Should have navigation back to home
			const homeLink = page.locator('[data-testid="home-link"]');
			await expect(homeLink).toBeVisible();
		});

		test('should handle component errors', async ({ page }) => {
			// Mock a component error
			await page.route('**/api/data', route => {
				route.fulfill({
					status: 500,
					body: 'Internal Server Error'
				});
			});
			
			await page.goto('/docs/components/data-table');
			
			// Error boundary should catch the error
			const errorMessage = page.locator('[data-testid="error-boundary"]');
			await expect(errorMessage).toBeVisible();
		});
	});

	test.describe('Search Functionality', () => {
		test('should search components', async ({ page }) => {
			await page.goto('/');
			
			// Open search
			const searchTrigger = page.locator('[data-testid="search-trigger"]');
			await searchTrigger.click();
			
			// Type search query
			const searchInput = page.locator('[data-testid="search-input"]');
			await searchInput.fill('button');
			
			// Check search results
			const searchResults = page.locator('[data-testid="search-results"]');
			await expect(searchResults).toBeVisible();
			
			// Click on a result
			const firstResult = page.locator('[data-testid="search-result"]').first();
			await firstResult.click();
			
			// Should navigate to the component page
			await expect(page).toHaveURL(/button/);
		});
	});
});
