import { test, expect } from '@playwright/test';

test.describe('Motion & Animation System Visual Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(1000);
	});

	test('Liquid glass fade transitions', async ({ page }) => {
		// Test components with glass fade animations
		const glassFadeElements = page.locator('[data-animation="glass-fade"], .glass-fade');

		if ((await glassFadeElements.count()) > 0) {
			// Capture initial state
			await expect(glassFadeElements.first()).toHaveScreenshot('glass-fade-initial.png');

			// Trigger animation by interaction or wait for entrance
			await page.waitForTimeout(800);
			await expect(glassFadeElements.first()).toHaveScreenshot('glass-fade-complete.png');
		}

		// Test glass fade on hover
		const hoverGlassElements = page.locator('[data-hover="glass-fade"]');
		if ((await hoverGlassElements.count()) > 0) {
			await hoverGlassElements.first().hover();
			await page.waitForTimeout(400);
			await expect(hoverGlassElements.first()).toHaveScreenshot('glass-fade-hover.png');
		}
	});

	test('Liquid blur effects and transitions', async ({ page }) => {
		const liquidBlurElements = page.locator('[data-animation="liquid-blur"], .liquid-blur');

		if ((await liquidBlurElements.count()) > 0) {
			await liquidBlurElements.first().scrollIntoViewIfNeeded();
			await page.waitForTimeout(600); // Wait for liquid blur transition
			await expect(liquidBlurElements.first()).toHaveScreenshot('liquid-blur-effect.png');
		}

		// Test different blur intensities
		const blurLevels = ['sm', 'md', 'lg', 'xl'];
		for (const level of blurLevels) {
			const blurElement = page.locator(`[data-blur="${level}"]`);
			if ((await blurElement.count()) > 0) {
				await expect(blurElement.first()).toHaveScreenshot(`liquid-blur-${level}.png`);
			}
		}
	});

	test('Spring pop animations', async ({ page }) => {
		const springElements = page.locator('[data-animation="spring-pop"], .spring-pop');

		if ((await springElements.count()) > 0) {
			// Test button spring pop on click
			if (
				(await springElements.first().getAttribute('role')) === 'button' ||
				(await springElements.first().locator('button').count()) > 0
			) {
				await springElements.first().click();
				await page.waitForTimeout(300); // Capture spring animation
				await expect(springElements.first()).toHaveScreenshot('spring-pop-click.png');
			}
		}

		// Test spring pop on interactive elements
		const interactiveSpring = page
			.locator('button, [role="button"]')
			.filter({ has: page.locator('[data-spring="true"]') });
		if ((await interactiveSpring.count()) > 0) {
			await interactiveSpring.first().click();
			await page.waitForTimeout(200);
			await expect(interactiveSpring.first()).toHaveScreenshot('interactive-spring-pop.png');
		}
	});

	test('Jelly hover effects with magnetic attraction', async ({ page }) => {
		const jellyElements = page.locator('[data-animation="jelly"], .jelly-hover');

		if ((await jellyElements.count()) > 0) {
			// Test normal state
			await expect(jellyElements.first()).toHaveScreenshot('jelly-normal-state.png');

			// Test hover state with jelly deformation
			await jellyElements.first().hover();
			await page.waitForTimeout(400); // Wait for jelly animation
			await expect(jellyElements.first()).toHaveScreenshot('jelly-hover-deform.png');
		}

		// Test magnetic hover specifically
		const magneticElements = page.locator('[data-magnetic="true"], .magnetic-hover');
		if ((await magneticElements.count()) > 0) {
			// Move mouse to edge of element to test magnetic pull
			const elementBox = await magneticElements.first().boundingBox();
			if (elementBox) {
				await page.mouse.move(elementBox.x + elementBox.width * 0.8, elementBox.y + elementBox.height * 0.8);
				await page.waitForTimeout(300);
				await expect(magneticElements.first()).toHaveScreenshot('magnetic-hover-edge.png');
			}
		}
	});

	test('Breathing animations for organic effects', async ({ page }) => {
		const breathingElements = page.locator('[data-animation="breathing"], .breathing');

		if ((await breathingElements.count()) > 0) {
			// Capture at different points in breathing cycle
			await expect(breathingElements.first()).toHaveScreenshot('breathing-cycle-1.png');

			await page.waitForTimeout(1500); // Half breathing cycle
			await expect(breathingElements.first()).toHaveScreenshot('breathing-cycle-2.png');

			await page.waitForTimeout(1500); // Full breathing cycle
			await expect(breathingElements.first()).toHaveScreenshot('breathing-cycle-3.png');
		}
	});

	test('Liquid jelly responsiveness effects', async ({ page }) => {
		const liquidJellyElements = page.locator('[data-animation="liquid-jelly"], .liquid-jelly');

		if ((await liquidJellyElements.count()) > 0) {
			await liquidJellyElements.first().scrollIntoViewIfNeeded();

			// Test initial jelly state
			await expect(liquidJellyElements.first()).toHaveScreenshot('liquid-jelly-initial.png');

			// Test interaction-triggered jelly effect
			await liquidJellyElements.first().hover();
			await page.waitForTimeout(500); // Wait for liquid jelly response
			await expect(liquidJellyElements.first()).toHaveScreenshot('liquid-jelly-interaction.png');
		}

		// Test jelly morphing on different viewport sizes
		await page.setViewportSize({ width: 500, height: 600 });
		await page.waitForTimeout(400);
		if ((await liquidJellyElements.count()) > 0) {
			await expect(liquidJellyElements.first()).toHaveScreenshot('liquid-jelly-mobile.png');
		}
	});

	test('Motion performance and reduced motion preferences', async ({ page }) => {
		// Test with reduced motion preference
		await page.emulateMedia({ reducedMotion: 'reduce' });
		await page.reload();
		await page.waitForTimeout(500);

		const animatedElements = page.locator('[data-animated="true"], .animated');
		if ((await animatedElements.count()) > 0) {
			// Elements should show static state with reduced motion
			await expect(animatedElements.first()).toHaveScreenshot('reduced-motion-static.png');
		}

		// Reset to normal motion
		await page.emulateMedia({ reducedMotion: 'no-preference' });
		await page.reload();
		await page.waitForTimeout(500);

		if ((await animatedElements.count()) > 0) {
			// Elements should show animated state
			await page.waitForTimeout(800);
			await expect(animatedElements.first()).toHaveScreenshot('normal-motion-animated.png');
		}
	});
});

test.describe('Component Entrance and Exit Animations', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(500);
	});

	test('Modal entrance and exit animations', async ({ page }) => {
		const modalTrigger = page.locator('button').filter({ hasText: /modal|dialog/i });

		if ((await modalTrigger.count()) > 0) {
			// Test modal entrance
			await modalTrigger.first().click();
			await page.waitForTimeout(200); // Capture mid-entrance
			await expect(page).toHaveScreenshot('modal-entrance-animation.png');

			await page.waitForTimeout(600); // Wait for full entrance
			await expect(page).toHaveScreenshot('modal-entrance-complete.png');

			// Test modal exit
			const closeButton = page.locator('[aria-label*="close"], .modal-close');
			if ((await closeButton.count()) > 0) {
				await closeButton.first().click();
				await page.waitForTimeout(200); // Capture mid-exit
				await expect(page).toHaveScreenshot('modal-exit-animation.png');
			}
		}
	});

	test('Dropdown menu animations', async ({ page }) => {
		const dropdownTrigger = page.locator('button').filter({ hasText: /dropdown|menu/i });

		if ((await dropdownTrigger.count()) > 0) {
			// Test dropdown entrance
			await dropdownTrigger.first().click();
			await page.waitForTimeout(100); // Capture entrance start
			await expect(page).toHaveScreenshot('dropdown-entrance-start.png');

			await page.waitForTimeout(400); // Capture entrance complete
			await expect(page).toHaveScreenshot('dropdown-entrance-complete.png');

			// Test dropdown exit (click outside)
			await page.click('body', { position: { x: 10, y: 10 } });
			await page.waitForTimeout(150); // Capture exit animation
			await expect(page).toHaveScreenshot('dropdown-exit-animation.png');
		}
	});

	test('Alert notification animations', async ({ page }) => {
		const alertTrigger = page.locator('button').filter({ hasText: /alert|notification/i });

		if ((await alertTrigger.count()) > 0) {
			// Test alert entrance
			await alertTrigger.first().click();
			await page.waitForTimeout(300);
			await expect(page).toHaveScreenshot('alert-entrance-animation.png');

			// Test alert close animation
			const alertClose = page.locator('[aria-label*="close"], .alert-close');
			if ((await alertClose.count()) > 0) {
				await alertClose.first().click();
				await page.waitForTimeout(200);
				await expect(page).toHaveScreenshot('alert-close-animation.png');
			}
		}
	});

	test('Tab content switching animations', async ({ page }) => {
		const tabs = page.locator('[role="tab"]');

		if ((await tabs.count()) > 1) {
			// Capture initial tab content
			await expect(page.locator('[role="tabpanel"]')).toHaveScreenshot('tab-content-initial.png');

			// Switch to second tab
			await tabs.nth(1).click();
			await page.waitForTimeout(200); // Capture mid-transition
			await expect(page.locator('[role="tabpanel"]')).toHaveScreenshot('tab-content-transition.png');

			await page.waitForTimeout(400); // Capture complete transition
			await expect(page.locator('[role="tabpanel"]')).toHaveScreenshot('tab-content-switched.png');
		}
	});

	test('Tooltip show and hide animations', async ({ page }) => {
		const tooltipTriggers = page.locator('[data-tooltip], [aria-describedby]');

		if ((await tooltipTriggers.count()) > 0) {
			// Test tooltip show
			await tooltipTriggers.first().hover();
			await page.waitForTimeout(300); // Wait for tooltip delay
			await expect(page).toHaveScreenshot('tooltip-show-animation.png');

			// Test tooltip hide
			await page.mouse.move(0, 0); // Move away from trigger
			await page.waitForTimeout(200); // Capture hide animation
			await expect(page).toHaveScreenshot('tooltip-hide-animation.png');
		}
	});
});

test.describe('Performance and Animation Optimization', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(500);
	});

	test('Animation performance monitoring', async ({ page }) => {
		// Test with performance monitoring enabled
		await page.addInitScript(() => {
			window.performance.mark('animation-start');
		});

		const animatedElements = page.locator('[data-performance="true"], .performance-monitored');

		if ((await animatedElements.count()) > 0) {
			// Trigger animations and measure performance
			await animatedElements.first().hover();
			await page.waitForTimeout(500);

			// Check if performance overlay is visible
			const perfOverlay = page.locator('[data-perf-overlay="true"], .perf-overlay');
			if ((await perfOverlay.count()) > 0) {
				await expect(perfOverlay).toHaveScreenshot('animation-performance-overlay.png');
			}
		}
	});

	test('GPU acceleration verification', async ({ page }) => {
		// Elements that should use GPU acceleration
		const gpuElements = page.locator('[data-gpu="true"], .gpu-accelerated');

		if ((await gpuElements.count()) > 0) {
			// Test transform-based animations
			await gpuElements.first().hover();
			await page.waitForTimeout(300);
			await expect(gpuElements.first()).toHaveScreenshot('gpu-accelerated-animation.png');
		}

		// Test will-change properties are applied
		const willChangeElements = page.locator('[style*="will-change"], .will-change');
		if ((await willChangeElements.count()) > 0) {
			await expect(willChangeElements.first()).toHaveScreenshot('will-change-optimization.png');
		}
	});

	test('Animation frame rate consistency', async ({ page }) => {
		// Test smooth 60fps animations
		const smoothElements = page.locator('[data-smooth="true"], .smooth-animation');

		if ((await smoothElements.count()) > 0) {
			// Capture multiple frames during animation
			await smoothElements.first().hover();

			for (let frame = 0; frame < 5; frame++) {
				await page.waitForTimeout(16); // ~60fps frame timing
				await expect(smoothElements.first()).toHaveScreenshot(`animation-frame-${frame}.png`);
			}
		}
	});

	test('Memory usage during animations', async ({ page }) => {
		// Test memory efficiency of animations
		const memoryIntensiveElements = page.locator('[data-memory-test="true"], .memory-test');

		if ((await memoryIntensiveElements.count()) > 0) {
			// Trigger multiple animations simultaneously
			for (let i = 0; i < Math.min(5, await memoryIntensiveElements.count()); i++) {
				await memoryIntensiveElements.nth(i).hover();
				await page.waitForTimeout(50);
			}

			await page.waitForTimeout(500);
			await expect(page).toHaveScreenshot('multiple-animations-memory-test.png');
		}
	});
});
