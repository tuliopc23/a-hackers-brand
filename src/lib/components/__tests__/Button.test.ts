import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Button from '../Button.svelte';
import { testAllVariants, testAllSizes, testAccessibility } from '../../__tests__/test-utils';

describe('Button Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Button, {
				props: { children: 'Click me' }
			});

			const button = screen.getByRole('button');
			expect(button).toBeInTheDocument();
			expect(button).toHaveTextContent('Click me');
			expect(button).toHaveClass('btn-glass');
		});

		it('renders all variants correctly', async () => {
			await testAllVariants(Button, { children: 'Test' }, (variant) => {
				const { container } = render(Button, {
					props: { variant, children: 'Test' }
				});

				const button = screen.getByRole('button');
				expect(button).toHaveClass(`btn-${variant}`);
			});
		});

		it('renders all sizes correctly', async () => {
			await testAllSizes(Button, { children: 'Test' }, (size) => {
				const { container } = render(Button, {
					props: { size, children: 'Test' }
				});

				const button = screen.getByRole('button');
				expect(button).toHaveClass(`btn-${size}`);
			});
		});

		it('renders as a link when href is provided', () => {
			const { container } = render(Button, {
				props: { href: '/test', children: 'Link' }
			});

			const link = container.querySelector('a');
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/test');
		});
	});

	describe('States', () => {
		it('handles disabled state', () => {
			const { container } = render(Button, {
				props: { disabled: true, children: 'Disabled' }
			});

			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
			expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
		});

		it('shows loading state', () => {
			const { container } = render(Button, {
				props: { loading: true, children: 'Loading' }
			});

			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
			expect(container.querySelector('.animate-spin')).toBeInTheDocument();
		});

		it('applies glow effect when enabled', () => {
			const { container } = render(Button, {
				props: { glow: true, variant: 'neon', children: 'Glowing' }
			});

			const button = screen.getByRole('button');
			expect(button).toHaveClass('shadow-neon');
		});
	});

	describe('Interactions', () => {
		it('handles click events', async () => {
			const handleClick = vi.fn();
			const { container } = render(Button, {
				props: { onclick: handleClick, children: 'Click me' }
			});

			const button = screen.getByRole('button');
			await fireEvent.click(button);

			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it('prevents click when disabled', async () => {
			const handleClick = vi.fn();
			const { container } = render(Button, {
				props: {
					onclick: handleClick,
					disabled: true,
					children: 'Disabled'
				}
			});

			const button = screen.getByRole('button');
			await fireEvent.click(button);

			expect(handleClick).not.toHaveBeenCalled();
		});

		it('prevents click when loading', async () => {
			const handleClick = vi.fn();
			const { container } = render(Button, {
				props: {
					onclick: handleClick,
					loading: true,
					children: 'Loading'
				}
			});

			const button = screen.getByRole('button');
			await fireEvent.click(button);

			expect(handleClick).not.toHaveBeenCalled();
		});
	});

	describe('Animations', () => {
		it('disables animations when animate prop is false', () => {
			const { container } = render(Button, {
				props: { animate: false, children: 'No animation' }
			});

			const button = screen.getByRole('button');
			expect(button).not.toHaveClass('transition-all');
		});

		it('enables jelly effects when jelly prop is true', () => {
			const { container } = render(Button, {
				props: { jelly: true, children: 'Jelly' }
			});

			// Jelly effects are applied via use:jellyHover action
			expect(container.querySelector('[data-jelly]')).toBeInTheDocument();
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', async () => {
			const { container } = render(Button, {
				props: { children: 'Accessible' }
			});

			await testAccessibility(container);
		});

		it('supports keyboard navigation', async () => {
			const handleClick = vi.fn();
			const { container } = render(Button, {
				props: { onclick: handleClick, children: 'Keyboard' }
			});

			const button = screen.getByRole('button');

			// Test Enter key
			await fireEvent.keyDown(button, { key: 'Enter' });
			expect(handleClick).toHaveBeenCalledTimes(1);

			// Test Space key
			await fireEvent.keyDown(button, { key: ' ' });
			expect(handleClick).toHaveBeenCalledTimes(2);
		});

		it('announces loading state to screen readers', () => {
			const { container } = render(Button, {
				props: { loading: true, children: 'Loading' }
			});

			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('aria-busy', 'true');
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Button, {
				props: { class: 'custom-class', children: 'Custom' }
			});

			const button = screen.getByRole('button');
			expect(button).toHaveClass('custom-class');
		});

		it('passes through additional props', () => {
			const { container } = render(Button, {
				props: {
					'data-testid': 'custom-button',
					children: 'Test'
				}
			});

			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('data-testid', 'custom-button');
		});
	});
});
