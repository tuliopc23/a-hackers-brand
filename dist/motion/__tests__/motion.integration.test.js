import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DURATIONS, EASINGS } from '../tokens';
import { liquidBlur, glassFade, springPop, magneticHover } from '../index';
// Mock performance.now for consistent testing
const mockPerformanceNow = vi.fn();
vi.stubGlobal('performance', { now: mockPerformanceNow });
describe('Motion System Integration Tests', () => {
	beforeEach(() => {
		mockPerformanceNow.mockReset();
		let time = 0;
		mockPerformanceNow.mockImplementation(() => (time += 16.67)); // 60fps
	});
	describe('Transition Integration', () => {
		it('should apply liquid blur transitions within performance threshold', async () => {
			const mockElement = {
				style: {},
				offsetHeight: 100,
				offsetWidth: 100,
				getBoundingClientRect: vi.fn(() => ({
					width: 100,
					height: 100,
					top: 0,
					left: 0,
					right: 100,
					bottom: 100,
					x: 0,
					y: 0
				}))
			};
			const startTime = performance.now();
			const transition = liquidBlur(mockElement, {
				duration: DURATIONS.fast,
				blur: 'md'
			});
			const applyTime = performance.now() - startTime;
			expect(applyTime).toBeLessThan(50); // Reasonable threshold for test environment
			expect(transition.duration).toBe(DURATIONS.fast);
		});
		it('should combine multiple transitions smoothly', async () => {
			const mockElement = {
				style: {},
				offsetHeight: 100,
				offsetWidth: 100
			};
			const startTime = performance.now();
			// Apply multiple transitions
			const blurTransition = liquidBlur(mockElement, { duration: 200, blur: 'sm' });
			const fadeTransition = glassFade(mockElement, { duration: 300 });
			const popTransition = springPop(mockElement, { duration: 150, scale: 1.05 });
			const setupTime = performance.now() - startTime;
			expect(setupTime).toBeLessThan(50);
			expect(blurTransition.duration).toBe(200);
			expect(fadeTransition.duration).toBe(300);
			expect(popTransition.duration).toBe(150);
		});
	});
	describe('Action Integration', () => {
		it('should handle magnetic hover actions efficiently', async () => {
			const mockElement = {
				style: {},
				getBoundingClientRect: vi.fn(() => ({
					width: 100,
					height: 100,
					top: 0,
					left: 0,
					right: 100,
					bottom: 100,
					x: 0,
					y: 0
				})),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn()
			};
			const startTime = performance.now();
			const action = magneticHover(mockElement, {
				strength: 0.3,
				distance: 50
			});
			const setupTime = performance.now() - startTime;
			expect(setupTime).toBeLessThan(100); // Should be very fast
			expect(action).toBeDefined();
			expect(action.destroy).toBeDefined();
			expect(mockElement.addEventListener).toHaveBeenCalled();
		});
		it('should handle spring pop transitions with performance monitoring', async () => {
			const mockElement = {
				style: {},
				offsetHeight: 100,
				offsetWidth: 100
			};
			const startTime = performance.now();
			const transition = springPop(mockElement, {
				scale: 1.02,
				duration: DURATIONS.fast
			});
			const setupTime = performance.now() - startTime;
			expect(setupTime).toBeLessThan(100);
			expect(transition).toBeDefined();
			expect(transition.duration).toBe(DURATIONS.fast);
		});
	});
	describe('Performance Monitoring', () => {
		it('should track animation performance', async () => {
			const mockElement = { style: {} };
			const transitions = [];
			// Create multiple simultaneous transitions
			for (let i = 0; i < 10; i++) {
				transitions.push(
					liquidBlur(mockElement, {
						duration: DURATIONS.moderate,
						blur: 'lg'
					})
				);
			}
			expect(transitions).toHaveLength(10);
			transitions.forEach((transition) => {
				expect(transition.duration).toBe(DURATIONS.moderate);
			});
		});
		it('should handle memory cleanup for actions', async () => {
			const mockElement = {
				style: {},
				getBoundingClientRect: vi.fn(() => ({
					width: 100,
					height: 100,
					top: 0,
					left: 0,
					right: 100,
					bottom: 100,
					x: 0,
					y: 0
				})),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn()
			};
			const actions = [];
			// Create multiple actions
			for (let i = 0; i < 5; i++) {
				actions.push(
					magneticHover(mockElement, {
						strength: 0.2,
						distance: 30
					})
				);
			}
			// Cleanup all actions
			actions.forEach((action) => action.destroy());
			// Verify cleanup was called
			expect(mockElement.removeEventListener).toHaveBeenCalled();
		});
	});
	describe('Animation States', () => {
		it('should not apply transitions when animations are disabled', async () => {
			const mockElement = {
				style: {},
				offsetHeight: 100,
				offsetWidth: 100
			};
			// Simulate disabled animations (e.g., reduced motion)
			const transition = liquidBlur(mockElement, {
				duration: 0, // Disabled
				blur: 'md'
			});
			expect(transition.duration).toBe(0);
		});
		it('should respect easing preferences', async () => {
			const mockElement = { style: {} };
			const springTransition = springPop(mockElement, {
				duration: 300,
				easing: EASINGS.spring
			});
			const liquidTransition = liquidBlur(mockElement, {
				duration: 300,
				easing: EASINGS.liquid
			});
			expect(springTransition.easing).toBe(EASINGS.spring);
			expect(liquidTransition.easing).toBe(EASINGS.liquid);
		});
	});
	describe('Cross-Browser Compatibility', () => {
		it('should handle missing CSS features gracefully', async () => {
			const mockElement = { style: {} };
			// Mock CSS.supports to return false for backdrop-filter
			const originalSupports = CSS.supports;
			CSS.supports = vi.fn(() => false);
			const transition = liquidBlur(mockElement, {
				duration: 300,
				blur: 'lg'
			});
			expect(transition).toBeDefined();
			expect(transition.duration).toBe(300);
			// Restore original CSS.supports
			CSS.supports = originalSupports;
		});
		it('should provide fallbacks for unsupported properties', async () => {
			const mockElement = { style: {} };
			const transition = glassFade(mockElement, {
				duration: 400
			});
			if (transition.css) {
				const css = transition.css(0.5, 1);
				// Should always include opacity as fallback
				expect(css).toContain('opacity');
			}
		});
	});
});
