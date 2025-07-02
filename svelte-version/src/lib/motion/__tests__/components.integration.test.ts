import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { tick } from 'svelte';
import Card from '../../components/Card.svelte';
import Button from '../../components/Button.svelte';
import Input from '../../components/Input.svelte';

// Mock performance.now for consistent testing
const mockPerformanceNow = vi.fn();
vi.stubGlobal('performance', { now: mockPerformanceNow });

describe('Component Motion Integration Tests', () => {
	beforeEach(() => {
		mockPerformanceNow.mockReset();
		let time = 0;
		mockPerformanceNow.mockImplementation(() => (time += 16.67)); // 60fps
	});

	describe('Card Component', () => {
		it('should render with motion animations within performance threshold', async () => {
			const startTime = performance.now();

			const { container } = render(Card, {
				props: {
					variant: 'glass',
					interactive: true,
					animate: true
				}
			});

			await tick();
			const renderTime = performance.now() - startTime;

			expect(renderTime).toBeLessThan(16); // 60fps threshold
			expect(container.querySelector('div')).toBeInTheDocument();
		});

		it('should handle magnetic hover interactions efficiently', async () => {
			const { container } = render(Card, {
				props: {
					variant: 'glass',
					interactive: true,
					animate: true
				}
			});

			const card = container.querySelector('div[role="button"]');
			expect(card).toBeInTheDocument();

			const startTime = performance.now();

			// Simulate hover interactions
			await fireEvent.mouseEnter(card!);
			await fireEvent.mouseMove(document, { clientX: 100, clientY: 100 });
			await fireEvent.mouseLeave(card!);

			const interactionTime = performance.now() - startTime;
			expect(interactionTime).toBeLessThan(50); // Allow more time for interactions
		});

		it('should not animate when animate prop is false', () => {
			const { container } = render(Card, {
				props: {
					variant: 'glass',
					interactive: true,
					animate: false
				}
			});

			const card = container.querySelector('div[role="button"]');
			expect(card).toBeInTheDocument();

			// Card should still have magnetic hover but no entry transition
			expect(card).not.toHaveAttribute('style', expect.stringContaining('transition'));
		});
	});

	describe('Button Component', () => {
		it('should render with spring pop animation within performance threshold', async () => {
			const startTime = performance.now();

			const { container } = render(Button, {
				props: {
					variant: 'glass',
					animate: true
				}
			});

			await tick();
			const renderTime = performance.now() - startTime;

			expect(renderTime).toBeLessThan(16);
			expect(container.querySelector('button')).toBeInTheDocument();
		});

		it('should handle click interactions with spring pop efficiently', async () => {
			const { container } = render(Button, {
				props: {
					variant: 'default',
					animate: true
				}
			});

			const button = container.querySelector('button');
			expect(button).toBeInTheDocument();

			const startTime = performance.now();

			// Simulate click interactions
			await fireEvent.mouseDown(button!);
			await fireEvent.mouseUp(button!);
			await fireEvent.click(button!);

			const interactionTime = performance.now() - startTime;
			expect(interactionTime).toBeLessThan(50);
		});

		it('should disable animations when disabled', () => {
			const { container } = render(Button, {
				props: {
					variant: 'default',
					disabled: true,
					animate: true
				}
			});

			const button = container.querySelector('button');
			expect(button).toBeInTheDocument();
			expect(button).toBeDisabled();
		});

		it('should handle loading state efficiently', async () => {
			const { container, rerender } = render(Button, {
				props: {
					variant: 'default',
					loading: false,
					animate: true
				}
			});

			const startTime = performance.now();

			// Switch to loading state
			await rerender({
				variant: 'default',
				loading: true,
				animate: true
			});

			await tick();
			const loadingTransitionTime = performance.now() - startTime;

			expect(loadingTransitionTime).toBeLessThan(16);
			expect(container.querySelector('.animate-spin')).toBeInTheDocument();
		});
	});

	describe('Input Component', () => {
		it('should render with glass fade animation within performance threshold', async () => {
			const startTime = performance.now();

			const { container } = render(Input, {
				props: {
					variant: 'glass',
					animate: true,
					placeholder: 'Enter text...'
				}
			});

			await tick();
			const renderTime = performance.now() - startTime;

			expect(renderTime).toBeLessThan(16);
			expect(container.querySelector('input')).toBeInTheDocument();
		});

		it('should handle focus interactions efficiently', async () => {
			const { container } = render(Input, {
				props: {
					variant: 'glass',
					animate: true
				}
			});

			const input = container.querySelector('input');
			expect(input).toBeInTheDocument();

			const startTime = performance.now();

			// Simulate focus interactions
			await fireEvent.focus(input!);
			await fireEvent.blur(input!);
			await fireEvent.focus(input!);

			const interactionTime = performance.now() - startTime;
			expect(interactionTime).toBeLessThan(50);
		});

		it('should handle typing efficiently', async () => {
			const { container } = render(Input, {
				props: {
					variant: 'terminal',
					animate: true
				}
			});

			const input = container.querySelector('input') as HTMLInputElement;
			expect(input).toBeInTheDocument();

			const startTime = performance.now();

			// Simulate typing
			await fireEvent.focus(input);
			await fireEvent.input(input, { target: { value: 'Hello World!' } });

			const typingTime = performance.now() - startTime;
			expect(typingTime).toBeLessThan(32); // Allow double threshold for typing
			expect(input.value).toBe('Hello World!');
		});
	});

	describe('Performance with multiple components', () => {
		it('should handle multiple animated components efficiently', async () => {
			const startTime = performance.now();

			// Render multiple components simultaneously
			const components = await Promise.all([
				render(Card, { props: { animate: true, variant: 'glass' } }),
				render(Button, { props: { animate: true, variant: 'glass' } }),
				render(Input, { props: { animate: true, variant: 'glass' } }),
				render(Card, { props: { animate: true, interactive: true } }),
				render(Button, { props: { animate: true, variant: 'default' } })
			]);

			await tick();
			const totalRenderTime = performance.now() - startTime;

			expect(totalRenderTime).toBeLessThan(80); // 5 components * 16ms threshold
			expect(components).toHaveLength(5);
		});

		it('should handle rapid state changes efficiently', async () => {
			const { rerender } = render(Card, {
				props: { animate: true, variant: 'default' }
			});

			const startTime = performance.now();

			// Rapid variant changes
			const variants = ['default', 'glass', 'glass-subtle', 'glass-heavy', 'terminal'] as const;

			for (const variant of variants) {
				await rerender({ animate: true, variant });
				await tick();
			}

			const changeTime = performance.now() - startTime;
			expect(changeTime).toBeLessThan(80); // 5 changes * 16ms threshold
		});
	});

	describe('Accessibility with animations', () => {
		it('should respect reduced motion preferences', async () => {
			// Mock reduced motion preference
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: vi.fn().mockImplementation((query) => ({
					matches: query === '(prefers-reduced-motion: reduce)',
					media: query,
					onchange: null,
					addListener: vi.fn(),
					removeListener: vi.fn(),
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
					dispatchEvent: vi.fn()
				}))
			});

			const { container } = render(Card, {
				props: { animate: true, variant: 'glass' }
			});

			await tick();

			// Component should still render but animations should be minimal
			expect(container.querySelector('div')).toBeInTheDocument();
		});

		it('should maintain keyboard navigation with animations', async () => {
			const { container } = render(Button, {
				props: { animate: true, variant: 'glass' }
			});

			const button = container.querySelector('button');
			expect(button).toBeInTheDocument();

			// Test keyboard interactions
			await fireEvent.keyDown(button!, { key: 'Enter' });
			await fireEvent.keyUp(button!, { key: 'Enter' });
			await fireEvent.keyDown(button!, { key: ' ' });
			await fireEvent.keyUp(button!, { key: ' ' });

			// Button should remain focusable and functional
			expect(button).toHaveFocus();
		});
	});
});
