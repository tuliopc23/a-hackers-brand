import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Switch from '../Switch.svelte';
import { testAllVariants, testAllSizes, waitForAnimation } from '../../__tests__/test-utils';

describe('Switch Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Switch);
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toBeInTheDocument();
			expect(switchElement).toHaveAttribute('aria-checked', 'false');
			expect(switchElement).toHaveAttribute('aria-label', 'Toggle switch');
		});

		it('renders with custom label', () => {
			const { container } = render(Switch, {
				props: { label: 'Enable notifications' }
			});
			
			const label = screen.getByText('Enable notifications');
			expect(label).toBeInTheDocument();
			expect(label).toHaveClass('text-sm', 'font-medium', 'cursor-pointer');
		});

		it('renders with description', () => {
			const { container } = render(Switch, {
				props: { 
					label: 'Dark mode',
					description: 'Enable dark theme for better viewing'
				}
			});
			
			const description = screen.getByText('Enable dark theme for better viewing');
			expect(description).toBeInTheDocument();
			expect(description).toHaveClass('text-xs', 'text-white/70');
			expect(description).toHaveAttribute('id', 'switch-description');
		});

		it('renders all variants correctly', () => {
			const variants = ['default', 'glass', 'terminal'];
			
			variants.forEach(variant => {
				const { container } = render(Switch, {
					props: { variant }
				});
				
				const switchElement = container.querySelector('button[role="switch"]');
				
				if (variant === 'default') {
					expect(switchElement).toHaveClass('bg-white/10', 'border-white/20');
				} else if (variant === 'glass') {
					expect(switchElement).toHaveClass('glass-subtle');
				} else if (variant === 'terminal') {
					expect(switchElement).toHaveClass('bg-terminal-green/20');
				}
			});
		});

		it('renders all sizes correctly', () => {
			const sizes = ['sm', 'md', 'lg'];
			
			sizes.forEach(size => {
				const { container } = render(Switch, {
					props: { size }
				});
				
				const switchElement = container.querySelector('button[role="switch"]');
				const thumb = container.querySelector('span');
				
				expect(switchElement).toHaveClass(
					size === 'sm' ? 'w-8 h-4' :
					size === 'md' ? 'w-11 h-6' :
					'w-14 h-8'
				);
				
				expect(thumb).toHaveClass(
					size === 'sm' ? 'w-3 h-3' :
					size === 'md' ? 'w-5 h-5' :
					'w-6 h-6'
				);
			});
		});
	});

	describe('State Management', () => {
		it('renders unchecked state by default', () => {
			const { container } = render(Switch);
			
			const switchElement = container.querySelector('button[role="switch"]');
			const thumb = container.querySelector('span');
			
			expect(switchElement).toHaveAttribute('aria-checked', 'false');
			expect(thumb).toHaveClass('translate-x-0.5');
		});

		it('renders checked state when checked prop is true', () => {
			const { container } = render(Switch, {
				props: { checked: true }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			const thumb = container.querySelector('span');
			
			expect(switchElement).toHaveAttribute('aria-checked', 'true');
			expect(thumb).toHaveClass('translate-x-5'); // default md size translation
		});

		it('updates checked state on click', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { onCheckedChange: handleCheckedChange }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			expect(switchElement).toHaveAttribute('aria-checked', 'false');
			
			await fireEvent.click(switchElement!);
			
			expect(handleCheckedChange).toHaveBeenCalledWith(true);
			expect(switchElement).toHaveAttribute('aria-checked', 'true');
		});

		it('toggles between checked and unchecked states', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { onCheckedChange: handleCheckedChange }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			// First click - check
			await fireEvent.click(switchElement!);
			expect(handleCheckedChange).toHaveBeenLastCalledWith(true);
			expect(switchElement).toHaveAttribute('aria-checked', 'true');
			
			// Second click - uncheck
			await fireEvent.click(switchElement!);
			expect(handleCheckedChange).toHaveBeenLastCalledWith(false);
			expect(switchElement).toHaveAttribute('aria-checked', 'false');
		});
	});

	describe('Disabled State', () => {
		it('renders disabled state correctly', () => {
			const { container } = render(Switch, {
				props: { 
					disabled: true,
					label: 'Disabled switch'
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			const label = screen.getByText('Disabled switch');
			
			expect(switchElement).toBeDisabled();
			expect(switchElement).toHaveClass('opacity-50', 'cursor-not-allowed');
			expect(label).toHaveClass('opacity-50');
		});

		it('does not respond to clicks when disabled', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { 
					disabled: true,
					onCheckedChange: handleCheckedChange
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			await fireEvent.click(switchElement!);
			
			expect(handleCheckedChange).not.toHaveBeenCalled();
			expect(switchElement).toHaveAttribute('aria-checked', 'false');
		});

		it('does not respond to keyboard events when disabled', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { 
					disabled: true,
					onCheckedChange: handleCheckedChange
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			await fireEvent.keyDown(switchElement!, { key: 'Enter' });
			await fireEvent.keyDown(switchElement!, { key: ' ' });
			
			expect(handleCheckedChange).not.toHaveBeenCalled();
		});

		it('makes description appear disabled', () => {
			const { container } = render(Switch, {
				props: { 
					disabled: true,
					description: 'Disabled description'
				}
			});
			
			const description = screen.getByText('Disabled description');
			expect(description).toHaveClass('opacity-50');
		});
	});

	describe('Keyboard Interactions', () => {
		it('toggles on Enter key', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { onCheckedChange: handleCheckedChange }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			await fireEvent.keyDown(switchElement!, { key: 'Enter' });
			
			expect(handleCheckedChange).toHaveBeenCalledWith(true);
		});

		it('toggles on Space key', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { onCheckedChange: handleCheckedChange }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			await fireEvent.keyDown(switchElement!, { key: ' ' });
			
			expect(handleCheckedChange).toHaveBeenCalledWith(true);
		});

		it('ignores other keys', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { onCheckedChange: handleCheckedChange }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			await fireEvent.keyDown(switchElement!, { key: 'Tab' });
			await fireEvent.keyDown(switchElement!, { key: 'Escape' });
			await fireEvent.keyDown(switchElement!, { key: 'a' });
			
			expect(handleCheckedChange).not.toHaveBeenCalled();
		});

		it('prevents default behavior for handled keys', async () => {
			const { container } = render(Switch);
			
			const switchElement = container.querySelector('button[role="switch"]');
			const preventDefault = vi.fn();
			
			await fireEvent.keyDown(switchElement!, { 
				key: 'Enter',
				preventDefault
			});
			
			expect(preventDefault).toHaveBeenCalled();
		});
	});

	describe('Label Interactions', () => {
		it('toggles switch when label is clicked', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { 
					label: 'Clickable label',
					onCheckedChange: handleCheckedChange
				}
			});
			
			const label = screen.getByText('Clickable label');
			
			await fireEvent.click(label);
			
			expect(handleCheckedChange).toHaveBeenCalledWith(true);
		});

		it('does not toggle when label is clicked on disabled switch', async () => {
			const handleCheckedChange = vi.fn();
			const { container } = render(Switch, {
				props: { 
					label: 'Disabled label',
					disabled: true,
					onCheckedChange: handleCheckedChange
				}
			});
			
			const label = screen.getByText('Disabled label');
			
			await fireEvent.click(label);
			
			expect(handleCheckedChange).not.toHaveBeenCalled();
		});
	});

	describe('Visual Effects', () => {
		it('applies different styles for checked state', () => {
			const { container } = render(Switch, {
				props: { 
					checked: true,
					variant: 'glass'
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toHaveClass('glass-medium', 'border-blue-400/40', 'bg-blue-500/20');
		});

		it('applies hover effects when not disabled', () => {
			const { container } = render(Switch);
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toHaveClass('cursor-pointer', 'hover:scale-105');
		});

		it('applies blur levels for glass variant', () => {
			const blurLevels = ['sm', 'md', 'lg', 'xl'];
			
			blurLevels.forEach(blur => {
				const { container } = render(Switch, {
					props: { 
						variant: 'glass',
						blur
					}
				});
				
				const switchElement = container.querySelector('button[role="switch"]');
				expect(switchElement).toHaveClass(`backdrop-blur-${blur}`);
			});
		});

		it('does not apply blur for non-glass variants', () => {
			const { container } = render(Switch, {
				props: { 
					variant: 'default',
					blur: 'xl'
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).not.toHaveClass('backdrop-blur-xl');
		});
	});

	describe('Animations', () => {
		it('applies spring animation when animate is true', async () => {
			const { container } = render(Switch, {
				props: { animate: true }
			});
			
			// springPop transition should be applied
			await waitForAnimation(100);
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toBeInTheDocument();
		});

		it('does not apply animations when animate is false', () => {
			const { container } = render(Switch, {
				props: { animate: false }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toBeInTheDocument();
			// No spring animation should be applied
		});

		it('respects reduced motion preference', () => {
			const { container } = render(Switch, {
				props: { 
					animate: true,
					reduceMotion: true
				}
			});
			
			const thumb = container.querySelector('span');
			expect(thumb).not.toHaveClass('will-change-transform');
		});

		it('applies transform optimizations when motion is enabled', () => {
			const { container } = render(Switch, {
				props: { reduceMotion: false }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			const thumb = container.querySelector('span');
			
			expect(switchElement).toHaveStyle({ willChange: 'transform' });
			expect(thumb).toHaveClass('will-change-transform');
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const { container } = render(Switch, {
				props: { 
					label: 'Accessible switch',
					description: 'Switch description'
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			expect(switchElement).toHaveAttribute('role', 'switch');
			expect(switchElement).toHaveAttribute('aria-checked', 'false');
			expect(switchElement).toHaveAttribute('aria-describedby', 'switch-description');
			expect(switchElement).toHaveAttribute('aria-label', 'Accessible switch');
		});

		it('uses custom aria-label when provided', () => {
			const { container } = render(Switch, {
				props: { 'aria-label': 'Custom switch label' }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toHaveAttribute('aria-label', 'Custom switch label');
		});

		it('falls back to default aria-label when no label provided', () => {
			const { container } = render(Switch);
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toHaveAttribute('aria-label', 'Toggle switch');
		});

		it('associates label with switch correctly', () => {
			const { container } = render(Switch, {
				props: { 
					label: 'Associated label',
					id: 'test-switch'
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			const label = screen.getByText('Associated label');
			
			expect(switchElement).toHaveAttribute('id', 'test-switch');
			expect(label).toHaveAttribute('for', 'test-switch');
		});

		it('has proper focus management', () => {
			const { container } = render(Switch);
			
			const switchElement = container.querySelector('button[role="switch"]') as HTMLElement;
			switchElement.focus();
			
			expect(document.activeElement).toBe(switchElement);
			expect(switchElement).toHaveClass('focus:outline-none', 'focus:ring-2');
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Switch, {
				props: { class: 'custom-switch-class' }
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toHaveClass('custom-switch-class');
		});

		it('passes through additional HTML attributes', () => {
			const { container } = render(Switch, {
				props: { 
					'data-testid': 'custom-switch',
					title: 'Custom title'
				}
			});
			
			const switchElement = container.querySelector('[data-testid="custom-switch"]');
			expect(switchElement).toBeInTheDocument();
			expect(switchElement).toHaveAttribute('title', 'Custom title');
		});

		it('handles custom event handlers', async () => {
			const handleMouseEnter = vi.fn();
			const handleFocus = vi.fn();
			
			const { container } = render(Switch, {
				props: { 
					onmouseenter: handleMouseEnter,
					onfocus: handleFocus
				}
			});
			
			const switchElement = container.querySelector('button[role="switch"]');
			
			await fireEvent.mouseEnter(switchElement!);
			expect(handleMouseEnter).toHaveBeenCalledTimes(1);
			
			await fireEvent.focus(switchElement!);
			expect(handleFocus).toHaveBeenCalledTimes(1);
		});
	});

	describe('Edge Cases', () => {
		it('handles all variant and size combinations', () => {
			const variants = ['default', 'glass', 'terminal'];
			const sizes = ['sm', 'md', 'lg'];
			
			variants.forEach(variant => {
				sizes.forEach(size => {
					const { container } = render(Switch, {
						props: { variant, size }
					});
					
					const switchElement = container.querySelector('button[role="switch"]');
					expect(switchElement).toBeInTheDocument();
				});
			});
		});

		it('handles checked state with different thumb translations per size', () => {
			const sizes = [
				{ size: 'sm', translate: 'translate-x-4' },
				{ size: 'md', translate: 'translate-x-5' },
				{ size: 'lg', translate: 'translate-x-6' }
			];
			
			sizes.forEach(({ size, translate }) => {
				const { container } = render(Switch, {
					props: { 
						size,
						checked: true
					}
				});
				
				const thumb = container.querySelector('span');
				expect(thumb).toHaveClass(translate);
			});
		});

		it('handles label without description', () => {
			const { container } = render(Switch, {
				props: { label: 'Only label' }
			});
			
			expect(screen.getByText('Only label')).toBeInTheDocument();
			expect(screen.queryByText('switch-description')).not.toBeInTheDocument();
		});

		it('handles description without label', () => {
			const { container } = render(Switch, {
				props: { description: 'Only description' }
			});
			
			expect(screen.getByText('Only description')).toBeInTheDocument();
			const switchElement = container.querySelector('button[role="switch"]');
			expect(switchElement).toHaveAttribute('aria-describedby', 'switch-description');
		});
	});
});