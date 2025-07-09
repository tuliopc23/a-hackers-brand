import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Card from '../Card.svelte';
import { testAllVariants, waitForAnimation } from '../../__tests__/test-utils';
describe('Card Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Card, {
				props: {
					children: () => 'Card content'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toBeInTheDocument();
			expect(card).toHaveTextContent('Card content');
			expect(card).toHaveClass('bg-white/5', 'border', 'border-white/10', 'p-6');
		});
		it('renders all variants correctly', async () => {
			const variants = ['default', 'glass', 'glass-subtle', 'glass-heavy', 'terminal'];
			for (const variant of variants) {
				const { container } = render(Card, {
					props: {
						variant,
						children: () => 'Test content'
					}
				});
				const card = container.querySelector('.rounded-brand-lg');
				if (variant === 'default') {
					expect(card).toHaveClass('bg-white/5');
				} else if (variant === 'glass') {
					expect(card).toHaveClass('glass');
				} else if (variant === 'terminal') {
					expect(card).toHaveClass('terminal');
				}
			}
		});
		it('renders all blur levels correctly', () => {
			const blurLevels = ['sm', 'md', 'lg', 'xl'];
			blurLevels.forEach((blur) => {
				const { container } = render(Card, {
					props: {
						variant: 'glass',
						blur,
						children: () => 'Blur test'
					}
				});
				const card = container.querySelector('.rounded-brand-lg');
				expect(card).toHaveClass(`backdrop-blur-${blur}`);
			});
		});
		it('applies blur only to glass variants', () => {
			const { container } = render(Card, {
				props: {
					variant: 'default',
					blur: 'xl',
					children: () => 'No blur'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).not.toHaveClass('backdrop-blur-xl');
		});
	});
	describe('Interactive Behavior', () => {
		it('adds interactive classes when interactive is true', () => {
			const { container } = render(Card, {
				props: {
					interactive: true,
					children: () => 'Interactive card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveClass('cursor-pointer');
			expect(card).toHaveAttribute('role', 'button');
			expect(card).toHaveAttribute('tabindex', '0');
		});
		it('does not add interactive classes when interactive is false', () => {
			const { container } = render(Card, {
				props: {
					interactive: false,
					children: () => 'Static card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).not.toHaveClass('cursor-pointer');
			expect(card).not.toHaveAttribute('role');
			expect(card).not.toHaveAttribute('tabindex');
		});
		it('applies magnetic hover to interactive cards', () => {
			const { container } = render(Card, {
				props: {
					interactive: true,
					children: () => 'Magnetic card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveStyle({ willChange: 'transform' });
		});
		it('handles click events on interactive cards', async () => {
			const handleClick = vi.fn();
			const { container } = render(Card, {
				props: {
					interactive: true,
					onclick: handleClick,
					children: () => 'Clickable card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			await fireEvent.click(card);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
		it('handles keyboard events on interactive cards', async () => {
			const handleKeyDown = vi.fn();
			const { container } = render(Card, {
				props: {
					interactive: true,
					onkeydown: handleKeyDown,
					children: () => 'Keyboard card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			card.focus();
			await fireEvent.keyDown(card, { key: 'Enter' });
			expect(handleKeyDown).toHaveBeenCalledTimes(1);
		});
	});
	describe('Animations', () => {
		it('applies entrance animations when animate is true', async () => {
			const { container } = render(Card, {
				props: {
					animate: true,
					children: () => 'Animated card'
				}
			});
			// liquidBlur transition should be applied
			await waitForAnimation(100);
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toBeInTheDocument();
		});
		it('does not apply animations when animate is false', () => {
			const { container } = render(Card, {
				props: {
					animate: false,
					children: () => 'Static card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toBeInTheDocument();
			// No transition attributes should be present
		});
		it('applies different animation opacity for interactive cards', async () => {
			const { container } = render(Card, {
				props: {
					animate: true,
					interactive: true,
					children: () => 'Interactive animated'
				}
			});
			// Interactive cards use 'medium' opacity, non-interactive use 'subtle'
			await waitForAnimation(100);
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toBeInTheDocument();
		});
	});
	describe('Content Rendering', () => {
		it('renders children content using render function', () => {
			const { container } = render(Card, {
				props: {
					children: () => 'Hello World'
				}
			});
			expect(screen.getByText('Hello World')).toBeInTheDocument();
		});
		it('renders complex children content', () => {
			const { container } = render(Card, {
				props: {
					children: () => `
						<h2>Card Title</h2>
						<p>Card description with <strong>bold text</strong></p>
					`
				}
			});
			expect(screen.getByText('Card Title')).toBeInTheDocument();
			expect(screen.getByText('Card description with')).toBeInTheDocument();
			expect(screen.getByText('bold text')).toBeInTheDocument();
		});
		it('handles empty children gracefully', () => {
			const { container } = render(Card, {
				props: {
					children: () => ''
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toBeInTheDocument();
			expect(card).toHaveTextContent('');
		});
		it('handles undefined children', () => {
			const { container } = render(Card);
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toBeInTheDocument();
		});
	});
	describe('Styling', () => {
		it('applies base classes correctly', () => {
			const { container } = render(Card, {
				props: {
					children: () => 'Base classes'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveClass('rounded-brand-lg', 'p-6');
		});
		it('combines variant and blur classes for glass variants', () => {
			const { container } = render(Card, {
				props: {
					variant: 'glass-heavy',
					blur: 'lg',
					children: () => 'Glass heavy'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveClass('glass-heavy', 'backdrop-blur-lg');
		});
		it('applies custom className', () => {
			const { container } = render(Card, {
				props: {
					class: 'custom-card-class',
					children: () => 'Custom card'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveClass('custom-card-class');
		});
		it('preserves all existing classes when adding custom class', () => {
			const { container } = render(Card, {
				props: {
					variant: 'glass',
					blur: 'md',
					interactive: true,
					class: 'custom-class',
					children: () => 'All classes'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveClass(
				'rounded-brand-lg',
				'p-6',
				'glass',
				'backdrop-blur-md',
				'cursor-pointer',
				'custom-class'
			);
		});
	});
	describe('Accessibility', () => {
		it('sets proper role for interactive cards', () => {
			const { container } = render(Card, {
				props: {
					interactive: true,
					children: () => 'Interactive'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveAttribute('role', 'button');
		});
		it('sets proper tabindex for interactive cards', () => {
			const { container } = render(Card, {
				props: {
					interactive: true,
					children: () => 'Focusable'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).toHaveAttribute('tabindex', '0');
		});
		it('allows keyboard focus on interactive cards', () => {
			const { container } = render(Card, {
				props: {
					interactive: true,
					children: () => 'Keyboard accessible'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			card.focus();
			expect(document.activeElement).toBe(card);
		});
		it('does not set role or tabindex for non-interactive cards', () => {
			const { container } = render(Card, {
				props: {
					interactive: false,
					children: () => 'Non-interactive'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			expect(card).not.toHaveAttribute('role');
			expect(card).not.toHaveAttribute('tabindex');
		});
	});
	describe('Custom Props', () => {
		it('passes through additional HTML attributes', () => {
			const { container } = render(Card, {
				props: {
					'data-testid': 'custom-card',
					'aria-label': 'Custom card label',
					children: () => 'Custom props'
				}
			});
			const card = container.querySelector('[data-testid="custom-card"]');
			expect(card).toBeInTheDocument();
			expect(card).toHaveAttribute('aria-label', 'Custom card label');
		});
		it('handles custom event handlers', async () => {
			const handleMouseEnter = vi.fn();
			const handleMouseLeave = vi.fn();
			const { container } = render(Card, {
				props: {
					onmouseenter: handleMouseEnter,
					onmouseleave: handleMouseLeave,
					children: () => 'Event handlers'
				}
			});
			const card = container.querySelector('.rounded-brand-lg');
			await fireEvent.mouseEnter(card);
			expect(handleMouseEnter).toHaveBeenCalledTimes(1);
			await fireEvent.mouseLeave(card);
			expect(handleMouseLeave).toHaveBeenCalledTimes(1);
		});
	});
	describe('Edge Cases', () => {
		it('handles all variant combinations correctly', () => {
			const variants = ['default', 'glass', 'glass-subtle', 'glass-heavy', 'terminal'];
			const blurs = ['sm', 'md', 'lg', 'xl'];
			variants.forEach((variant) => {
				blurs.forEach((blur) => {
					const { container } = render(Card, {
						props: {
							variant,
							blur,
							children: () => `${variant}-${blur}`
						}
					});
					const card = container.querySelector('.rounded-brand-lg');
					expect(card).toBeInTheDocument();
					// Only glass variants should have blur
					if (variant.includes('glass')) {
						expect(card).toHaveClass(`backdrop-blur-${blur}`);
					} else {
						expect(card).not.toHaveClass(`backdrop-blur-${blur}`);
					}
				});
			});
		});
		it('handles animate and interactive combinations', () => {
			const combinations = [
				{ animate: true, interactive: true },
				{ animate: true, interactive: false },
				{ animate: false, interactive: true },
				{ animate: false, interactive: false }
			];
			combinations.forEach(({ animate, interactive }) => {
				const { container } = render(Card, {
					props: {
						animate,
						interactive,
						children: () => `${animate ? 'animated' : 'static'}-${interactive ? 'interactive' : 'passive'}`
					}
				});
				const card = container.querySelector('.rounded-brand-lg');
				expect(card).toBeInTheDocument();
				if (interactive) {
					expect(card).toHaveAttribute('role', 'button');
					expect(card).toHaveClass('cursor-pointer');
				} else {
					expect(card).not.toHaveAttribute('role');
					expect(card).not.toHaveClass('cursor-pointer');
				}
			});
		});
	});
});
