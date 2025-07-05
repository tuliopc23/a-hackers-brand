import { test, expect } from '@playwright/test';

test.describe('Terminal & Retro Components Visual Regression', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to terminal showcase or components page
		await page.goto('/components');
		await page.waitForTimeout(1500); // Wait for retro animations to settle
	});

	test('Terminal window with CRT effects', async ({ page }) => {
		const terminalSection = page.locator('[data-component="terminal"], .terminal-showcase');
		
		if (await terminalSection.count() > 0) {
			await terminalSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(1000); // Wait for CRT scanlines
			await expect(terminalSection).toHaveScreenshot('terminal-window-crt.png');
		}

		// Test individual terminal windows
		const terminals = page.locator('.terminal-window, [data-terminal="true"]');
		if (await terminals.count() > 0) {
			// Test terminal with content
			await expect(terminals.first()).toHaveScreenshot('terminal-with-content.png');
			
			// Test terminal typing animation if active
			await page.waitForTimeout(2000); // Wait for typing animation
			await expect(terminals.first()).toHaveScreenshot('terminal-typing-animation.png');
		}
	});

	test('Retro text rendering effects', async ({ page }) => {
		const retroTextSection = page.locator('[data-component="retro-text"], .retro-text-showcase');
		
		if (await retroTextSection.count() > 0) {
			await retroTextSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(800);
			await expect(retroTextSection).toHaveScreenshot('retro-text-effects.png');
		}

		// Test different retro text variants
		const retroTexts = page.locator('.retro-text, [data-retro="true"]');
		if (await retroTexts.count() > 0) {
			for (let i = 0; i < Math.min(3, await retroTexts.count()); i++) {
				await expect(retroTexts.nth(i)).toHaveScreenshot(`retro-text-variant-${i + 1}.png`);
			}
		}
	});

	test('Vintage Mac screen effects', async ({ page }) => {
		const macScreenSection = page.locator('[data-component="vintage-mac"], .mac-screen-showcase');
		
		if (await macScreenSection.count() > 0) {
			await macScreenSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(1200); // Wait for vintage effects
			await expect(macScreenSection).toHaveScreenshot('vintage-mac-screen.png');
		}

		// Test Mac screen with different content
		const macScreens = page.locator('.vintage-mac-screen, [data-vintage="mac"]');
		if (await macScreens.count() > 0) {
			await expect(macScreens.first()).toHaveScreenshot('mac-screen-detailed.png');
		}
	});

	test('Boot sequence animations', async ({ page }) => {
		const bootSection = page.locator('[data-component="boot-sequence"], .boot-showcase');
		
		if (await bootSection.count() > 0) {
			await bootSection.scrollIntoViewIfNeeded();
			
			// Capture different stages of boot sequence
			await page.waitForTimeout(500);
			await expect(bootSection).toHaveScreenshot('boot-sequence-start.png');
			
			await page.waitForTimeout(2000);
			await expect(bootSection).toHaveScreenshot('boot-sequence-middle.png');
			
			await page.waitForTimeout(3000);
			await expect(bootSection).toHaveScreenshot('boot-sequence-complete.png');
		}
	});

	test('Matrix rain effect', async ({ page }) => {
		const matrixSection = page.locator('[data-component="matrix"], .matrix-showcase');
		
		if (await matrixSection.count() > 0) {
			await matrixSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(2000); // Wait for matrix animation
			await expect(matrixSection).toHaveScreenshot('matrix-rain-effect.png');
		}

		// Test matrix with different speeds/densities
		const matrixElements = page.locator('.matrix-rain, [data-effect="matrix"]');
		if (await matrixElements.count() > 0) {
			await page.waitForTimeout(1500); // Capture mid-animation
			await expect(matrixElements.first()).toHaveScreenshot('matrix-rain-mid-flow.png');
		}
	});

	test('Terminal startup sequence', async ({ page }) => {
		const startupSection = page.locator('[data-component="terminal-startup"], .startup-showcase');
		
		if (await startupSection.count() > 0) {
			await startupSection.scrollIntoViewIfNeeded();
			
			// Capture startup sequence stages
			await page.waitForTimeout(800);
			await expect(startupSection).toHaveScreenshot('terminal-startup-init.png');
			
			await page.waitForTimeout(2500);
			await expect(startupSection).toHaveScreenshot('terminal-startup-progress.png');
			
			await page.waitForTimeout(4000);
			await expect(startupSection).toHaveScreenshot('terminal-startup-complete.png');
		}
	});

	test('Advanced liquid terminal', async ({ page }) => {
		const liquidTerminalSection = page.locator('[data-component="liquid-terminal"], .liquid-terminal-showcase');
		
		if (await liquidTerminalSection.count() > 0) {
			await liquidTerminalSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(1000); // Wait for liquid effects
			await expect(liquidTerminalSection).toHaveScreenshot('liquid-terminal-effects.png');
		}

		// Test liquid terminal interactions
		const liquidTerminals = page.locator('.liquid-terminal, [data-liquid="terminal"]');
		if (await liquidTerminals.count() > 0) {
			// Test hover effects
			await liquidTerminals.first().hover();
			await page.waitForTimeout(600); // Wait for liquid hover animation
			await expect(liquidTerminals.first()).toHaveScreenshot('liquid-terminal-hover.png');
		}
	});

	test('Command block components', async ({ page }) => {
		const commandSection = page.locator('[data-component="command-block"], .command-showcase');
		
		if (await commandSection.count() > 0) {
			await commandSection.scrollIntoViewIfNeeded();
			await page.waitForTimeout(500);
			await expect(commandSection).toHaveScreenshot('command-blocks.png');
		}

		// Test command execution animation
		const commandBlocks = page.locator('.command-block, [data-command="true"]');
		if (await commandBlocks.count() > 0) {
			// Test typing/execution effect
			await page.waitForTimeout(1500);
			await expect(commandBlocks.first()).toHaveScreenshot('command-block-execution.png');
		}
	});
});

test.describe('Terminal Variants and States', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(1000);
	});

	test('Terminal component variants', async ({ page }) => {
		const variants = ['classic', 'modern', 'matrix', 'retro'];
		
		for (const variant of variants) {
			const terminalVariant = page.locator(`[data-variant="${variant}"], .terminal-${variant}`);
			if (await terminalVariant.count() > 0) {
				await terminalVariant.scrollIntoViewIfNeeded();
				await page.waitForTimeout(800);
				await expect(terminalVariant).toHaveScreenshot(`terminal-variant-${variant}.png`);
			}
		}
	});

	test('Terminal with different content types', async ({ page }) => {
		// Test terminal with code
		const codeTerminal = page.locator('[data-content="code"], .terminal-code');
		if (await codeTerminal.count() > 0) {
			await expect(codeTerminal).toHaveScreenshot('terminal-with-code.png');
		}

		// Test terminal with logs
		const logTerminal = page.locator('[data-content="logs"], .terminal-logs');
		if (await logTerminal.count() > 0) {
			await expect(logTerminal).toHaveScreenshot('terminal-with-logs.png');
		}

		// Test terminal with interactive shell
		const shellTerminal = page.locator('[data-content="shell"], .terminal-shell');
		if (await shellTerminal.count() > 0) {
			await expect(shellTerminal).toHaveScreenshot('terminal-interactive-shell.png');
		}
	});

	test('Phosphor glow and CRT effects', async ({ page }) => {
		// Test phosphor glow specifically
		const phosphorElements = page.locator('[data-effect="phosphor"], .phosphor-glow');
		if (await phosphorElements.count() > 0) {
			await expect(phosphorElements.first()).toHaveScreenshot('phosphor-glow-effect.png');
		}

		// Test CRT scanlines
		const crtElements = page.locator('[data-effect="crt"], .crt-scanlines');
		if (await crtElements.count() > 0) {
			await expect(crtElements.first()).toHaveScreenshot('crt-scanlines-effect.png');
		}

		// Test combined CRT + phosphor
		const combinedElements = page.locator('[data-effect="crt-phosphor"], .crt-phosphor');
		if (await combinedElements.count() > 0) {
			await expect(combinedElements.first()).toHaveScreenshot('crt-phosphor-combined.png');
		}
	});

	test('Terminal performance overlay', async ({ page }) => {
		const perfOverlay = page.locator('[data-component="perf-overlay"], .performance-overlay');
		
		if (await perfOverlay.count() > 0) {
			await perfOverlay.scrollIntoViewIfNeeded();
			await page.waitForTimeout(1000); // Wait for performance metrics
			await expect(perfOverlay).toHaveScreenshot('performance-overlay.png');
		}

		// Test performance monitor
		const perfMonitor = page.locator('[data-component="perf-monitor"], .performance-monitor');
		if (await perfMonitor.count() > 0) {
			await page.waitForTimeout(2000); // Wait for metrics to populate
			await expect(perfMonitor).toHaveScreenshot('performance-monitor-metrics.png');
		}
	});
});

test.describe('Terminal Interactions and Animations', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/components');
		await page.waitForTimeout(1000);
	});

	test('Terminal typing animation states', async ({ page }) => {
		const typingTerminals = page.locator('[data-animation="typing"], .terminal-typing');
		
		if (await typingTerminals.count() > 0) {
			// Capture start of typing
			await expect(typingTerminals.first()).toHaveScreenshot('terminal-typing-start.png');
			
			// Capture middle of typing
			await page.waitForTimeout(1500);
			await expect(typingTerminals.first()).toHaveScreenshot('terminal-typing-middle.png');
			
			// Capture end of typing
			await page.waitForTimeout(3000);
			await expect(typingTerminals.first()).toHaveScreenshot('terminal-typing-end.png');
		}
	});

	test('Terminal cursor animations', async ({ page }) => {
		const cursors = page.locator('.terminal-cursor, [data-cursor="true"]');
		
		if (await cursors.count() > 0) {
			// Test blinking cursor
			await expect(cursors.first()).toHaveScreenshot('terminal-cursor-visible.png');
			
			await page.waitForTimeout(600); // Wait for blink cycle
			await expect(cursors.first()).toHaveScreenshot('terminal-cursor-blink.png');
		}
	});

	test('Terminal scroll and content updates', async ({ page }) => {
		const scrollableTerminals = page.locator('[data-scrollable="true"], .terminal-scrollable');
		
		if (await scrollableTerminals.count() > 0) {
			await scrollableTerminals.first().scrollIntoViewIfNeeded();
			
			// Test initial state
			await expect(scrollableTerminals.first()).toHaveScreenshot('terminal-initial-content.png');
			
			// Simulate content addition and scroll
			await page.waitForTimeout(2000);
			await expect(scrollableTerminals.first()).toHaveScreenshot('terminal-updated-content.png');
		}
	});

	test('Terminal window resize effects', async ({ page }) => {
		const resizableTerminals = page.locator('[data-resizable="true"], .terminal-resizable');
		
		if (await resizableTerminals.count() > 0) {
			// Test different viewport sizes to see terminal adaptation
			await page.setViewportSize({ width: 800, height: 600 });
			await page.waitForTimeout(500);
			await expect(resizableTerminals.first()).toHaveScreenshot('terminal-small-viewport.png');
			
			await page.setViewportSize({ width: 1400, height: 900 });
			await page.waitForTimeout(500);
			await expect(resizableTerminals.first()).toHaveScreenshot('terminal-large-viewport.png');
		}
	});
});