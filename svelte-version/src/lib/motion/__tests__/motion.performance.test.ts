import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { tick } from 'svelte';
import { liquidBlur, glassFade, springPop, magneticHover } from '../index.js';

// Performance test utilities
const PERFORMANCE_THRESHOLD_MS = 16; // 60fps = 16.67ms per frame

function measureTime(fn: () => void): number {
	const start = performance.now();
	fn();
	return performance.now() - start;
}

function createTestElement(): HTMLElement {
	const element = document.createElement('div');
	element.style.cssText = `
		width: 100px;
		height: 100px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		opacity: 1;
		transform: scale(1);
	`;
	document.body.appendChild(element);
	return element;
}

describe('Motion System Performance Tests', () => {
	let testElement: HTMLElement;

	beforeEach(() => {
		testElement = createTestElement();
	});

	afterEach(() => {
		if (testElement && testElement.parentNode) {
			testElement.parentNode.removeChild(testElement);
		}
	});

	describe('liquidBlur performance', () => {
		it('should execute liquidBlur transition within performance threshold', () => {
			const executionTime = measureTime(() => {
				const transition = liquidBlur(testElement, {
					duration: 300,
					blur: 'md',
					opacity: 'medium'
				});

				// Simulate transition progress
				for (let t = 0; t <= 1; t += 0.1) {
					transition.css(t);
				}
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle multiple blur levels efficiently', () => {
			const blurLevels = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

			const totalTime = measureTime(() => {
				blurLevels.forEach((blur) => {
					const transition = liquidBlur(testElement, { blur });
					transition.css(0.5);
				});
			});

			expect(totalTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 2);
		});
	});

	describe('glassFade performance', () => {
		it('should execute glassFade transition within performance threshold', () => {
			const executionTime = measureTime(() => {
				const transition = glassFade(testElement, {
					duration: 300,
					direction: 'up',
					distance: 20
				});

				// Simulate transition progress
				for (let t = 0; t <= 1; t += 0.1) {
					transition.css(t);
				}
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle all directions efficiently', () => {
			const directions = ['up', 'down', 'left', 'right'] as const;

			const totalTime = measureTime(() => {
				directions.forEach((direction) => {
					const transition = glassFade(testElement, { direction });
					transition.css(0.5);
				});
			});

			expect(totalTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});
	});

	describe('springPop performance', () => {
		it('should execute springPop transition within performance threshold', () => {
			const executionTime = measureTime(() => {
				const transition = springPop(testElement, {
					duration: 300,
					scale: 1.1,
					bounce: true
				});

				// Simulate transition progress
				for (let t = 0; t <= 1; t += 0.1) {
					transition.css(t);
				}
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle bounce calculations efficiently', () => {
			const executionTime = measureTime(() => {
				const transition = springPop(testElement, {
					bounce: true,
					scale: 1.2,
					rotation: 360
				});

				// Test multiple progress points including bounce points
				for (let t = 0; t <= 1; t += 0.05) {
					transition.css(t);
				}
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 1.5);
		});
	});

	describe('magneticHover performance', () => {
		it('should initialize magnetic hover within performance threshold', () => {
			const executionTime = measureTime(() => {
				const action = magneticHover(testElement, {
					strength: 0.3,
					scale: 1.02,
					magnetRadius: 100
				});

				// Clean up
				action.destroy();
			});

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS);
		});

		it('should handle mouse move calculations efficiently', () => {
			const action = magneticHover(testElement, {
				strength: 0.3,
				magnetRadius: 100
			});

			const executionTime = measureTime(() => {
				// Simulate rapid mouse movements
				for (let i = 0; i < 100; i++) {
					const event = new MouseEvent('mousemove', {
						clientX: Math.random() * 500,
						clientY: Math.random() * 500
					});

					// Trigger hover state first
					testElement.dispatchEvent(new MouseEvent('mouseenter'));
					document.dispatchEvent(event);
				}
			});

			action.destroy();
			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 3);
		});
	});

	describe('Batch operations performance', () => {
		it('should handle multiple simultaneous transitions efficiently', () => {
			const elements = Array.from({ length: 10 }, () => createTestElement());

			const executionTime = measureTime(() => {
				elements.forEach((element, index) => {
					const transition = liquidBlur(element, {
						duration: 300,
						stagger: index * 50
					});

					transition.css(0.5);
				});
			});

			// Clean up
			elements.forEach((el) => el.remove());

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 2);
		});

		it('should handle mixed transition types efficiently', () => {
			const elements = Array.from({ length: 6 }, () => createTestElement());

			const executionTime = measureTime(() => {
				liquidBlur(elements[0]).css(0.5);
				glassFade(elements[1]).css(0.5);
				springPop(elements[2]).css(0.5);
				liquidBlur(elements[3], { blur: 'lg' }).css(0.5);
				glassFade(elements[4], { direction: 'left' }).css(0.5);
				springPop(elements[5], { bounce: true }).css(0.5);
			});

			// Clean up
			elements.forEach((el) => el.remove());

			expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD_MS * 2);
		});
	});

	describe('Memory usage', () => {
		it('should not cause memory leaks with repeated transitions', () => {
			const initialMemory = (performance as any).memory?.usedJSHeapSize || 0;

			// Create and destroy many transitions
			for (let i = 0; i < 1000; i++) {
				const element = createTestElement();
				const transition = liquidBlur(element);
				transition.css(Math.random());
				element.remove();
			}

			// Force garbage collection if available
			if ((globalThis as any).gc) {
				(globalThis as any).gc();
			}

			const finalMemory = (performance as any).memory?.usedJSHeapSize || 0;
			const memoryIncrease = finalMemory - initialMemory;

			// Memory increase should be reasonable (less than 5MB)
			expect(memoryIncrease).toBeLessThan(5 * 1024 * 1024);
		});
	});
});
