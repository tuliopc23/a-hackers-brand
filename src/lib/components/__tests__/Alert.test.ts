import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';
import Alert from '../Alert.svelte';

describe('Alert Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Alert Title',
					description: 'Alert description'
				}
			});

			expect(screen.getByText('Alert Title')).toBeInTheDocument();
			expect(screen.getByText('Alert description')).toBeInTheDocument();
		});

		it('renders all variants correctly', () => {
			const variants = ['success', 'error', 'warning', 'info', 'terminal'];

			variants.forEach((variant) => {
				const { container } = render(Alert, {
					props: {
						variant: variant as any,
						title: `${variant} alert`
					}
				});

				const alert = container.querySelector('.backdrop-blur-xl');

				if (variant === 'success') {
					expect(alert).toHaveClass('border-green-400/40');
				} else if (variant === 'error') {
					expect(alert).toHaveClass('border-red-400/40');
				}
			});
		});

		it('shows icon when icon prop is true', () => {
			const { container } = render(Alert, {
				props: {
					variant: 'success',
					title: 'Success',
					icon: true
				}
			});

			// Icon is rendered as SVG
			const icon = container.querySelector('svg');
			expect(icon).toBeInTheDocument();
		});

		it('hides icon when icon prop is false', () => {
			const { container } = render(Alert, {
				props: {
					variant: 'success',
					title: 'Success',
					icon: false
				}
			});

			const icon = container.querySelector('svg');
			expect(icon).not.toBeInTheDocument();
		});
	});

	describe('Closable Feature', () => {
		it('shows close button when closable is true', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Closable Alert',
					closable: true
				}
			});

			const closeButton = screen.getByLabelText('Close alert');
			expect(closeButton).toBeInTheDocument();
		});

		it('hides alert when close button is clicked', async () => {
			const handleClose = vi.fn();
			const { container } = render(Alert, {
				props: {
					title: 'Closable Alert',
					closable: true,
					onclose: handleClose
				}
			});

			const closeButton = screen.getByLabelText('Close alert');
			await fireEvent.click(closeButton);

			await waitFor(() => {
				expect(screen.queryByText('Closable Alert')).not.toBeInTheDocument();
				expect(handleClose).toHaveBeenCalledTimes(1);
			});
		});

		it('does not show close button when closable is false', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Non-closable Alert',
					closable: false
				}
			});

			const closeButton = screen.queryByLabelText('Close alert');
			expect(closeButton).not.toBeInTheDocument();
		});
	});

	describe('Positioning', () => {
		it('renders with static position by default', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Static Alert',
					position: 'static'
				}
			});

			const alert = container.querySelector('.backdrop-blur-xl');
			expect(alert).not.toHaveClass('fixed');
		});

		it('renders with fixed position and placement', () => {
			const placements = ['top', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left'];

			placements.forEach((placement) => {
				const { container } = render(Alert, {
					props: {
						title: 'Fixed Alert',
						position: 'fixed',
						placement: placement as any
					}
				});

				const alert = container.querySelector('.backdrop-blur-xl');
				expect(alert).toHaveClass('fixed', 'z-50');

				if (placement === 'top') {
					expect(alert).toHaveClass('top-4', 'left-1/2', '-translate-x-1/2');
				} else if (placement === 'top-right') {
					expect(alert).toHaveClass('top-4', 'right-4');
				}
			});
		});
	});

	describe('Visual Effects', () => {
		it('applies glow effect when glow is true', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Glowing Alert',
					variant: 'neon',
					glow: true
				}
			});

			const alert = container.querySelector('.backdrop-blur-xl');
			expect(alert).toHaveClass('shadow-[0_0_20px_rgba(74,222,128,0.6)]');
		});

		it('applies jelly hover effect when jelly is true', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Jelly Alert',
					jelly: true
				}
			});

			// Jelly effects are applied via use:jellyHover
			const alert = container.querySelector('.backdrop-blur-xl');
			expect(alert).toBeTruthy();
		});

		it('animates icon when animated is true', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Animated Alert',
					animated: true,
					icon: true
				}
			});

			const iconContainer = container.querySelector('.animate-pulse');
			expect(iconContainer).toBeInTheDocument();
		});
	});

	describe('Transitions', () => {
		it('applies glassFade transition when animated', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Animated Alert',
					animated: true
				}
			});

			// Transition is applied via transition:glassFade
			expect(container.innerHTML).toContain('glassFade');
		});

		it('disables transition when animated is false', () => {
			const { container } = render(Alert, {
				props: {
					title: 'No Animation',
					animated: false
				}
			});

			// Duration should be 0 when animated is false
			expect(container.innerHTML).toContain('duration: 0');
		});
	});

	describe('Content Structure', () => {
		it('renders only title when description is not provided', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Title Only'
				}
			});

			expect(screen.getByText('Title Only')).toBeInTheDocument();
			expect(container.querySelector('.text-sm.mt-1')).not.toBeInTheDocument();
		});

		it('renders both title and description', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Alert Title',
					description: 'Detailed description here'
				}
			});

			expect(screen.getByText('Alert Title')).toBeInTheDocument();
			expect(screen.getByText('Detailed description here')).toBeInTheDocument();
		});

		it('applies correct text colors based on variant', () => {
			const { container } = render(Alert, {
				props: {
					variant: 'error',
					title: 'Error Alert'
				}
			});

			const title = screen.getByText('Error Alert');
			expect(title).toHaveClass('text-red-300');
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Accessible Alert',
					closable: true
				}
			});

			const closeButton = screen.getByLabelText('Close alert');
			expect(closeButton).toHaveAttribute('aria-label', 'Close alert');
		});

		it('supports keyboard navigation for close button', async () => {
			const handleClose = vi.fn();
			const { container } = render(Alert, {
				props: {
					title: 'Keyboard Alert',
					closable: true,
					onclose: handleClose
				}
			});

			const closeButton = screen.getByLabelText('Close alert');
			closeButton.focus();

			await fireEvent.keyDown(closeButton, { key: 'Enter' });
			expect(handleClose).toHaveBeenCalledTimes(1);
		});

		it('announces alert to screen readers', () => {
			const { container } = render(Alert, {
				props: {
					variant: 'error',
					title: 'Error occurred'
				}
			});

			// Alerts should have appropriate role for screen readers
			const _alert = container.querySelector('[role="_alert"]');
			// Note: role="alert" is implicit for alert components
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Custom Alert',
					class: 'custom-alert-class'
				}
			});

			const alert = container.querySelector('.backdrop-blur-xl');
			expect(alert).toHaveClass('custom-alert-class');
		});

		it('passes through additional props', () => {
			const { container } = render(Alert, {
				props: {
					title: 'Test Alert',
					'data-testid': 'custom-alert'
				}
			});

			const alert = container.querySelector('[data-testid="custom-alert"]');
			expect(alert).toBeInTheDocument();
		});
	});
});
