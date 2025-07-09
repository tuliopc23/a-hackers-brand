import { describe, it, expect } from 'vitest';
import { liquidBlur, glassFade, springPop } from '../index.js';
import { DURATIONS, EASINGS } from '../tokens.js';
describe('Motion System Basic Tests', () => {
	// Create a mock element for testing
	function createTestElement() {
		const element = document.createElement('div');
		element.style.cssText = `
			width: 100px;
			height: 100px;
			opacity: 1;
			transform: scale(1);
			backdrop-filter: blur(8px);
		`;
		return element;
	}
	describe('Motion tokens', () => {
		it('should export duration constants', () => {
			expect(DURATIONS.instant).toBe(0);
			expect(DURATIONS.fast).toBe(150);
			expect(DURATIONS.moderate).toBe(300);
			expect(DURATIONS.slow).toBe(500);
			expect(DURATIONS.slowest).toBe(800);
		});
		it('should export easing functions', () => {
			expect(EASINGS.glass).toBe('cubic-bezier(0.25, 0.46, 0.45, 0.94)');
			expect(EASINGS.liquid).toBe('cubic-bezier(0.23, 1, 0.32, 1)');
			expect(EASINGS.spring).toBe('cubic-bezier(0.68, -0.55, 0.265, 1.55)');
			expect(EASINGS.terminal).toBe('cubic-bezier(0.4, 0, 0.2, 1)');
		});
	});
	describe('liquidBlur transition', () => {
		it('should create a transition object with css function', () => {
			const element = createTestElement();
			const transition = liquidBlur(element);
			expect(transition).toHaveProperty('duration');
			expect(transition).toHaveProperty('easing');
			expect(transition).toHaveProperty('css');
			expect(typeof transition.css).toBe('function');
		});
		it('should generate CSS for different progress values', () => {
			const element = createTestElement();
			const transition = liquidBlur(element);
			const css0 = transition.css(0);
			const css50 = transition.css(0.5);
			const css100 = transition.css(1);
			expect(typeof css0).toBe('string');
			expect(typeof css50).toBe('string');
			expect(typeof css100).toBe('string');
			// Basic smoke test - CSS should contain expected properties
			expect(css50).toContain('backdrop-filter');
			expect(css50).toContain('opacity');
			expect(css50).toContain('transform');
		});
	});
	describe('glassFade transition', () => {
		it('should create a transition object with css function', () => {
			const element = createTestElement();
			const transition = glassFade(element);
			expect(transition).toHaveProperty('duration');
			expect(transition).toHaveProperty('easing');
			expect(transition).toHaveProperty('css');
			expect(typeof transition.css).toBe('function');
		});
		it('should handle different directions', () => {
			const element = createTestElement();
			const directions = ['up', 'down', 'left', 'right'];
			directions.forEach((direction) => {
				const transition = glassFade(element, { direction });
				const css = transition.css(0.5);
				expect(typeof css).toBe('string');
				expect(css).toContain('transform');
				expect(css).toContain('opacity');
			});
		});
	});
	describe('springPop transition', () => {
		it('should create a transition object with css function', () => {
			const element = createTestElement();
			const transition = springPop(element);
			expect(transition).toHaveProperty('duration');
			expect(transition).toHaveProperty('easing');
			expect(transition).toHaveProperty('css');
			expect(typeof transition.css).toBe('function');
		});
		it('should handle bounce animations', () => {
			const element = createTestElement();
			const transition = springPop(element, { bounce: true });
			const css = transition.css(0.5);
			expect(typeof css).toBe('string');
			expect(css).toContain('transform');
			expect(css).toContain('opacity');
		});
	});
	describe('Performance verification', () => {
		it('should execute transitions quickly', () => {
			const element = createTestElement();
			const start = performance.now();
			// Execute multiple transitions
			liquidBlur(element).css(0.5);
			glassFade(element).css(0.5);
			springPop(element).css(0.5);
			const duration = performance.now() - start;
			// Should complete in under 5ms for basic operations
			expect(duration).toBeLessThan(5);
		});
	});
});
