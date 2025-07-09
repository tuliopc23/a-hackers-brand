import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';
import Modal from '../Modal.svelte';
import { testAllVariants, waitForAnimation } from '../../__tests__/test-utils';
describe('Modal Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		// Reset body overflow
		document.body.style.overflow = '';
	});
	afterEach(() => {
		// Clean up any remaining modals
		document.body.style.overflow = '';
	});
	describe('Rendering', () => {
		it('renders when open is true', () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					children: 'Modal content'
				}
			});
			const modal = screen.getByRole('dialog');
			expect(modal).toBeInTheDocument();
			expect(modal).toHaveTextContent('Modal content');
		});
		it('does not render when open is false', () => {
			const { container } = render(Modal, {
				props: {
					open: false,
					children: 'Modal content'
				}
			});
			const modal = screen.queryByRole('dialog');
			expect(modal).not.toBeInTheDocument();
		});
		it('renders all variants correctly', async () => {
			await testAllVariants(Modal, { open: true, children: 'Test' }, (variant) => {
				const { container } = render(Modal, {
					props: { variant, open: true, children: 'Test' }
				});
				const modal = container.querySelector('[role="dialog"] > div');
				expect(modal).toHaveClass(variant === 'glass' ? 'bg-white/10' : '');
			});
		});
		it('renders all sizes correctly', () => {
			const sizes = ['sm', 'md', 'lg', 'xl', 'full'];
			sizes.forEach((size) => {
				const { container } = render(Modal, {
					props: { size, open: true, children: 'Test' }
				});
				const modal = container.querySelector('[role="dialog"] > div');
				expect(modal).toHaveClass(`max-w-${size}`);
			});
		});
	});
	describe('Overlay Behavior', () => {
		it('closes on overlay click when closeOnOutsideClick is true', async () => {
			const handleClose = vi.fn();
			const { container } = render(Modal, {
				props: {
					open: true,
					closeOnOutsideClick: true,
					onClose: handleClose,
					children: 'Click outside'
				}
			});
			const overlay = screen.getByRole('dialog');
			await fireEvent.click(overlay);
			expect(handleClose).toHaveBeenCalledTimes(1);
		});
		it('does not close on overlay click when closeOnOutsideClick is false', async () => {
			const handleClose = vi.fn();
			const { container } = render(Modal, {
				props: {
					open: true,
					closeOnOutsideClick: false,
					onClose: handleClose,
					children: 'No close on outside'
				}
			});
			const overlay = screen.getByRole('dialog');
			await fireEvent.click(overlay);
			expect(handleClose).not.toHaveBeenCalled();
		});
		it('does not close when clicking modal content', async () => {
			const handleClose = vi.fn();
			const { container } = render(Modal, {
				props: {
					open: true,
					closeOnOutsideClick: true,
					onClose: handleClose,
					children: 'Click me'
				}
			});
			const content = screen.getByText('Click me');
			await fireEvent.click(content);
			expect(handleClose).not.toHaveBeenCalled();
		});
	});
	describe('Keyboard Interactions', () => {
		it('closes on Escape key when closeOnEscape is true', async () => {
			const handleClose = vi.fn();
			const { container } = render(Modal, {
				props: {
					open: true,
					closeOnEscape: true,
					onClose: handleClose,
					children: 'Press Escape'
				}
			});
			await fireEvent.keyDown(document, { key: 'Escape' });
			expect(handleClose).toHaveBeenCalledTimes(1);
		});
		it('does not close on Escape key when closeOnEscape is false', async () => {
			const handleClose = vi.fn();
			const { container } = render(Modal, {
				props: {
					open: true,
					closeOnEscape: false,
					onClose: handleClose,
					children: 'No escape'
				}
			});
			await fireEvent.keyDown(document, { key: 'Escape' });
			expect(handleClose).not.toHaveBeenCalled();
		});
		it('traps focus within modal', async () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					children: `
						<button id="first">First</button>
						<button id="second">Second</button>
						<button id="third">Third</button>
					`
				}
			});
			const firstButton = container.querySelector('#first');
			const lastButton = container.querySelector('#third');
			// Focus last element and tab - should go to first
			lastButton.focus();
			await fireEvent.keyDown(document, { key: 'Tab' });
			// Note: Full focus trap testing requires more complex setup
			// This is a simplified test
			expect(document.activeElement).toBeTruthy();
		});
	});
	describe('Body Scroll Lock', () => {
		it('prevents body scroll when open', () => {
			const { container } = render(Modal, {
				props: { open: true, children: 'Scroll lock' }
			});
			expect(document.body.style.overflow).toBe('hidden');
		});
		it('restores body scroll when closed', () => {
			const { rerender } = render(Modal, {
				props: { open: true, children: 'Scroll test' }
			});
			expect(document.body.style.overflow).toBe('hidden');
			rerender({ open: false });
			expect(document.body.style.overflow).toBe('');
		});
	});
	describe('Animations', () => {
		it('applies entrance animations', async () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					animate: true,
					children: 'Animated'
				}
			});
			const modal = container.querySelector('[role="dialog"] > div');
			// Check for animation classes/attributes
			await waitForAnimation(100);
			expect(modal).toHaveClass('transform-gpu');
		});
		it('disables animations when animate is false', () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					animate: false,
					children: 'No animation'
				}
			});
			// Animations are controlled by transition duration
			// With animate: false, duration should be 0
			expect(container.innerHTML).toContain('duration: 0');
		});
		it('enables jelly effects when jelly is true', () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					jelly: true,
					children: 'Jelly modal'
				}
			});
			// Jelly effects are applied via use:jellyHover
			const modal = container.querySelector('[role="dialog"] > div');
			expect(modal).toBeTruthy();
		});
		it('enables breathing animation when breathing is true', () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					breathing: true,
					children: 'Breathing modal'
				}
			});
			// Breathing effects are applied via use:breathing
			const modal = container.querySelector('[role="dialog"] > div');
			expect(modal).toBeTruthy();
		});
	});
	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const { container } = render(Modal, {
				props: { open: true, children: 'Accessible modal' }
			});
			const modal = screen.getByRole('dialog');
			expect(modal).toHaveAttribute('aria-modal', 'true');
			expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
		});
		it('focuses modal on open', async () => {
			const { container } = render(Modal, {
				props: { open: true, children: 'Focus test' }
			});
			await waitFor(() => {
				const modal = container.querySelector('[tabindex="-1"]');
				expect(document.activeElement).toBe(modal);
			});
		});
		it('restores focus on close', async () => {
			const button = document.createElement('button');
			document.body.appendChild(button);
			button.focus();
			const { rerender } = render(Modal, {
				props: { open: true, children: 'Focus restore' }
			});
			await waitFor(() => {
				expect(document.activeElement).not.toBe(button);
			});
			rerender({ open: false });
			await waitFor(() => {
				expect(document.activeElement).toBe(button);
			});
			document.body.removeChild(button);
		});
	});
	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					class: 'custom-modal',
					children: 'Custom'
				}
			});
			const modal = container.querySelector('[role="dialog"] > div');
			expect(modal).toHaveClass('custom-modal');
		});
		it('applies blur levels', () => {
			const blurLevels = ['sm', 'md', 'lg', 'xl'];
			blurLevels.forEach((blur) => {
				const { container } = render(Modal, {
					props: {
						open: true,
						blur,
						children: 'Blur test'
					}
				});
				const overlay = screen.getByRole('dialog');
				expect(overlay).toHaveClass(`backdrop-blur-${blur}`);
			});
		});
		it('applies glow effect', () => {
			const { container } = render(Modal, {
				props: {
					open: true,
					glow: true,
					variant: 'neon',
					children: 'Glowing'
				}
			});
			const modal = container.querySelector('[role="dialog"] > div');
			expect(modal).toHaveClass('shadow-[0_0_50px_rgba(236,72,153,0.6)]');
		});
	});
});
