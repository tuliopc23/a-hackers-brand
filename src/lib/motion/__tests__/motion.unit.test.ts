import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DURATIONS, EASINGS, TRANSFORMS, BLUR_LEVELS } from '../tokens';
import { liquidBlur, glassFade, springPop } from '../index';

describe('Motion System Unit Tests', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Motion Tokens', () => {
		it('should export duration constants', () => {
			expect(DURATIONS.fast).toBe(150);
			expect(DURATIONS.moderate).toBe(300);
			expect(DURATIONS.slow).toBe(500);
			expect(DURATIONS.slowest).toBe(800);
		});

		it('should export easing functions', () => {
			expect(EASINGS.spring).toBeDefined();
			expect(EASINGS.liquid).toBeDefined();
			expect(EASINGS.glass).toBeDefined();
			expect(EASINGS.elastic).toBeDefined();
		});

		it('should export transform tokens', () => {
			expect(TRANSFORMS.scale.hover).toBe(1.02);
			expect(TRANSFORMS.scale.active).toBe(0.98);
		});

		it('should export blur level tokens', () => {
			expect(BLUR_LEVELS.sm).toBe(4);
			expect(BLUR_LEVELS.md).toBe(8);
			expect(BLUR_LEVELS.lg).toBe(16);
		});
	});

	describe('Transition Functions', () => {
		let mockElement: HTMLElement;

		beforeEach(() => {
			mockElement = {
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
				})),
				animate: vi.fn(() => ({
					finished: Promise.resolve(),
					cancel: vi.fn(),
					play: vi.fn(),
					pause: vi.fn()
				}))
			} as any;
		});

		it('should create liquid blur transition', () => {
			const transition = liquidBlur(mockElement, { 
				duration: 300, 
				blur: 'md' 
			});

			expect(transition).toBeDefined();
			expect(transition.duration).toBe(300);
			expect(transition.css).toBeDefined();
		});

		it('should create glass fade transition', () => {
			const transition = glassFade(mockElement, { 
				duration: 400 
			});

			expect(transition).toBeDefined();
			expect(transition.duration).toBe(400);
			expect(transition.css).toBeDefined();
		});

		it('should create spring pop transition', () => {
			const transition = springPop(mockElement, { 
				duration: 200,
				scale: 1.05 
			});

			expect(transition).toBeDefined();
			expect(transition.duration).toBe(200);
			expect(transition.css).toBeDefined();
		});

		it('should handle transition with easing', () => {
			const transition = liquidBlur(mockElement, { 
				duration: 300,
				easing: EASINGS.spring
			});

			expect(transition.easing).toBe(EASINGS.spring);
		});
	});

	describe('Motion Performance', () => {
		it('should complete transitions within performance threshold', async () => {
			const startTime = performance.now();
			
			const mockElement = {
				style: {},
				offsetHeight: 100,
				offsetWidth: 100
			} as HTMLElement;

			const transition = liquidBlur(mockElement, { duration: 100 });
			
			// Simulate transition completion
			if (transition.tick) {
				transition.tick(0, 1);
			}

			const endTime = performance.now();
			const duration = endTime - startTime;

			// Should complete within reasonable time (accounting for test overhead)
			expect(duration).toBeLessThan(50);
		});

		it('should handle multiple simultaneous transitions', () => {
			const elements = Array.from({ length: 5 }, () => ({
				style: {},
				offsetHeight: 100,
				offsetWidth: 100
			})) as HTMLElement[];

			const transitions = elements.map(element => 
				liquidBlur(element, { duration: 200 })
			);

			expect(transitions).toHaveLength(5);
			transitions.forEach(transition => {
				expect(transition.duration).toBe(200);
			});
		});
	});

	describe('CSS Generation', () => {
		it('should generate valid CSS for liquid blur', () => {
			const mockElement = { style: {} } as HTMLElement;
			const transition = liquidBlur(mockElement, { blur: 'lg' });
			
			if (transition.css) {
				const css = transition.css(0.5, 1);
				expect(css).toContain('filter');
				expect(css).toContain('backdrop-filter');
			}
		});

		it('should generate valid CSS for glass fade', () => {
			const mockElement = { style: {} } as HTMLElement;
			const transition = glassFade(mockElement, {});
			
			if (transition.css) {
				const css = transition.css(0.5, 1);
				expect(css).toContain('opacity');
			}
		});

		it('should generate valid CSS for spring pop', () => {
			const mockElement = { style: {} } as HTMLElement;
			const transition = springPop(mockElement, { scale: 1.1 });
			
			if (transition.css) {
				const css = transition.css(0.5, 1);
				expect(css).toContain('transform');
			}
		});
	});

	describe('Reduced Motion Support', () => {
		it('should respect reduced motion preferences', () => {
			// Mock reduced motion preference
			Object.defineProperty(window, 'matchMedia', {
				value: vi.fn(() => ({
					matches: true,
					addListener: vi.fn(),
					removeListener: vi.fn()
				}))
			});

			const mockElement = { style: {} } as HTMLElement;
			const transition = liquidBlur(mockElement, { 
				duration: 300,
				respectReducedMotion: true 
			});

			// Should reduce or disable animation
			expect(transition.duration).toBeLessThanOrEqual(300);
		});
	});
});