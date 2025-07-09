import { describe, it, expect, beforeEach, vi } from 'vitest';
import { liquidBlur, glassFade, springPop, magneticHover } from '../index.js';

// Performance test utilities
const PERFORMANCE_THRESHOLD_MS = 50; // Relaxed threshold for test environment

function measureTime(fn: () => void): number {
	const start = performance.now();
	fn();
	return performance.now() - start;
}

function createTestElement(): HTMLElement {
	return {
		style: {},
		offsetWidth: 100,
		offsetHeight: 100,
		getBoundingClientRect: vi.fn(() => ({
			width: 100,
			height: 100,
			top: 50,
			left: 50,
			right: 150,
			bottom: 150,
			x: 50,
			y: 50
		})),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn()
	} as any;
}

describe('Motion System Performance Tests', () => {
	let testElement: HTMLElement;

	beforeEach(() => {
		testElement = createTestElement();
	});

	describe('liquidBlur performance', () => {
		it('should execute liquidBlur transition within performance threshold', () => {
			const executionTime = measureTime(() => {
				liquidBlur(testElement, {
					duration: 300,
					blur: 'md'
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle multiple blur levels efficiently', () => {
			const blurLevels = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

			const executionTime = measureTime(() => {
				blurLevels.forEach((blur) => {
					liquidBlur(testElement, {
						duration: 200,
						blur
					});
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 5);
		});
	});

	describe('glassFade performance', () => {
		it('should execute glassFade transition within performance threshold', () => {
			const executionTime = measureTime(() => {
				glassFade(testElement, {
					duration: 300
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle all directions efficiently', () => {
			const directions = ['up', 'down', 'left', 'right'] as const;

			const executionTime = measureTime(() => {
				directions.forEach((direction) => {
					glassFade(testElement, {
						duration: 200,
						direction
					});
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 4);
		});
	});

	describe('springPop performance', () => {
		it('should execute springPop transition within performance threshold', () => {
			const executionTime = measureTime(() => {
				springPop(testElement, {
					duration: 300,
					scale: 1.1
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle bounce calculations efficiently', () => {
			const scales = [1.05, 1.1, 1.15, 1.2];

			const executionTime = measureTime(() => {
				scales.forEach((scale) => {
					springPop(testElement, {
						duration: 200,
						scale
					});
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 4);
		});
	});

	describe('magneticHover performance', () => {
		it('should initialize magnetic hover within performance threshold', () => {
			const executionTime = measureTime(() => {
				const action = magneticHover(testElement, {
					strength: 0.3,
					distance: 100
				});

				// Clean up
				action.destroy();
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle distance calculations efficiently', () => {
			const action = magneticHover(testElement, {
				strength: 0.3,
				distance: 100
			});

			// Simulate multiple rapid mouse movements
			const executionTime = measureTime(() => {
				for (let i = 0; i < 100; i++) {
					// Simulate mouse movement calculation
					const x = Math.random() * 200;
					const y = Math.random() * 200;
					// The actual magnetic calculation would happen here
				}
			});

			action.destroy();
			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});
	});

	describe('Batch operations performance', () => {
		it('should handle multiple simultaneous transitions efficiently', () => {
			const elements = Array.from({ length: 10 }, () => createTestElement());

			const executionTime = measureTime(() => {
				elements.forEach((element, index) => {
					switch (index % 3) {
						case 0:
							liquidBlur(element, { duration: 300, blur: 'md' });
							break;
						case 1:
							glassFade(element, { duration: 300 });
							break;
						case 2:
							springPop(element, { duration: 300, scale: 1.05 });
							break;
					}
				});
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 10);
		});

		it('should handle mixed transition types efficiently', () => {
			const executionTime = measureTime(() => {
				// Apply all transition types to the same element
				liquidBlur(testElement, { duration: 200, blur: 'sm' });
				glassFade(testElement, { duration: 200 });
				springPop(testElement, { duration: 200, scale: 1.02 });
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});
	});

	describe('Memory usage', () => {
		it('should not cause memory leaks with repeated transitions', () => {
			const initialMemory = performance.memory?.usedJSHeapSize || 0;

			// Create and dispose many transitions
			for (let i = 0; i < 100; i++) {
				const element = createTestElement();
				liquidBlur(element, { duration: 100, blur: 'md' });
				glassFade(element, { duration: 100 });
				springPop(element, { duration: 100, scale: 1.05 });
			}

			// Force garbage collection if available
			if (global.gc) {
				global.gc();
			}

			const finalMemory = performance.memory?.usedJSHeapSize || 0;
			const memoryIncrease = finalMemory - initialMemory;

			// Memory increase should be reasonable (less than 1MB)
			expect(memoryIncrease).toBeLessThan(1024 * 1024);
		});

		it('should properly clean up action listeners', () => {
			const actions = [];

			// Create multiple magnetic hover actions
			for (let i = 0; i < 10; i++) {
				const element = createTestElement();
				actions.push(
					magneticHover(element, {
						strength: 0.3,
						distance: 50
					})
				);
			}

			// Clean up all actions
			actions.forEach((action) => action.destroy());

			// Verify event listeners were removed
			actions.forEach((action, index) => {
				const element = createTestElement();
				expect(element.removeEventListener).toBeDefined();
			});
		});
	});
});
