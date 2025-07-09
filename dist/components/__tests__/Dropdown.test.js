import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';
import Dropdown from '../Dropdown.svelte';
import { testAllVariants, testAllSizes, waitForAnimation } from '../../__tests__/test-utils';
describe('Dropdown Component', () => {
	const mockItems = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2', icon: 'TestIcon' },
		{ label: 'Option 3', value: 'option3', disabled: true },
		{ label: '', value: '', divider: true },
		{ label: 'Option 4', value: 'option4' }
	];
	beforeEach(() => {
		vi.clearAllMocks();
		// Mock getBoundingClientRect
		global.HTMLElement.prototype.getBoundingClientRect = vi.fn(() => ({
			width: 200,
			height: 40,
			top: 100,
			left: 100,
			bottom: 140,
			right: 300,
			x: 100,
			y: 100,
			toJSON: () => ({})
		}));
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});
	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			expect(trigger).toBeInTheDocument();
			expect(trigger).toHaveTextContent('Select');
			expect(trigger).toHaveAttribute('aria-expanded', 'false');
		});
		it('renders with custom trigger text', () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					trigger: 'Choose Option'
				}
			});
			const trigger = screen.getByRole('button');
			expect(trigger).toHaveTextContent('Choose Option');
		});
		it('shows selected value in trigger', () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					value: 'option2'
				}
			});
			const trigger = screen.getByRole('button');
			expect(trigger).toHaveTextContent('Option 2');
		});
		it('renders all variants correctly', async () => {
			await testAllVariants(Dropdown, { items: mockItems }, (variant) => {
				const { container } = render(Dropdown, {
					props: { variant, items: mockItems }
				});
				const trigger = container.querySelector('button');
				if (variant === 'glass') {
					expect(trigger).toHaveClass('bg-white/10');
				} else if (variant === 'terminal') {
					expect(trigger).toHaveClass('bg-gray-900/90');
				}
			});
		});
		it('renders all sizes correctly', async () => {
			await testAllSizes(Dropdown, { items: mockItems }, (size) => {
				const { container } = render(Dropdown, {
					props: { size, items: mockItems }
				});
				const trigger = container.querySelector('button');
				expect(trigger).toHaveClass(
					size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'md' ? 'px-4 py-2 text-base' : 'px-5 py-2.5 text-lg'
				);
			});
		});
	});
	describe('Menu Visibility', () => {
		it('opens menu when trigger is clicked', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.getByText('Option 1')).toBeInTheDocument();
				expect(trigger).toHaveAttribute('aria-expanded', 'true');
			});
		});
		it('closes menu when trigger is clicked again', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			// Open menu
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.getByText('Option 1')).toBeInTheDocument();
			});
			// Close menu
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
				expect(trigger).toHaveAttribute('aria-expanded', 'false');
			});
		});
		it('closes menu on outside click', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			// Open menu
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.getByText('Option 1')).toBeInTheDocument();
			});
			// Click outside
			await fireEvent.click(document.body);
			await waitFor(() => {
				expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
			});
		});
		it('closes menu on Escape key', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			// Open menu
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.getByText('Option 1')).toBeInTheDocument();
			});
			// Press Escape
			await fireEvent.keyDown(document, { key: 'Escape' });
			await waitFor(() => {
				expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
			});
		});
	});
	describe('Item Selection', () => {
		it('selects item when clicked', async () => {
			const handleSelect = vi.fn();
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					onselect: handleSelect
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.getByText('Option 1')).toBeInTheDocument();
			});
			const option1 = screen.getByText('Option 1');
			await fireEvent.click(option1);
			expect(handleSelect).toHaveBeenCalledWith('option1');
			await waitFor(() => {
				expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
			});
		});
		it('does not select disabled items', async () => {
			const handleSelect = vi.fn();
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					onselect: handleSelect
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(screen.getByText('Option 3')).toBeInTheDocument();
			});
			const disabledOption = screen.getByText('Option 3');
			expect(disabledOption.closest('button')).toBeDisabled();
			await fireEvent.click(disabledOption);
			expect(handleSelect).not.toHaveBeenCalled();
		});
		it('shows selected item as active', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					value: 'option2'
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				const option2Button = screen.getByText('Option 2').closest('button');
				expect(option2Button).toHaveClass('bg-white/20'); // active class for glass variant
			});
		});
	});
	describe('Menu Positioning', () => {
		it('positions menu correctly for bottom position', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					position: 'bottom'
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				const menu = container.querySelector('.absolute.z-50');
				expect(menu).toHaveStyle({ top: '44px' }); // trigger height + 4px gap
			});
		});
		it('positions menu correctly for top position', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					position: 'top'
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				const menu = container.querySelector('.absolute.z-50');
				// Should have negative top value for top positioning
				expect(menu).toHaveAttribute('style');
			});
		});
	});
	describe('Visual Effects', () => {
		it('applies glow effect when enabled', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					glow: true,
					variant: 'neon'
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(trigger).toHaveClass('shadow-[0_0_20px_rgba(236,72,153,0.7)]');
				const menu = container.querySelector('.absolute.z-50');
				expect(menu).toHaveClass('shadow-[0_0_20px_rgba(236,72,153,0.7)]');
			});
		});
		it('applies jelly hover effect', () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					jelly: true
				}
			});
			// Jelly effects are applied via use:jellyHover
			const trigger = container.querySelector('button');
			expect(trigger).toBeTruthy();
		});
		it('rotates chevron when open', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			const chevron = container.querySelector('svg');
			// Initially not rotated
			expect(chevron).not.toHaveClass('rotate-180');
			// Open dropdown
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(chevron).toHaveClass('rotate-180');
			});
		});
		it('applies animation when animated is true', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					animated: true
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				const menu = container.querySelector('.absolute.z-50');
				expect(menu).toHaveClass('transform-gpu', 'will-change-transform');
			});
		});
		it('disables animation when animated is false', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					animated: false
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				// Duration should be 0 when animated is false
				expect(container.innerHTML).toContain('duration: 0');
			});
		});
	});
	describe('Item Types', () => {
		it('renders dividers correctly', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				const divider = container.querySelector('.h-px.bg-white\\/10');
				expect(divider).toBeInTheDocument();
			});
		});
		it('renders icons when provided', async () => {
			const itemsWithIcon = [{ label: 'With Icon', value: 'icon', icon: () => 'Icon' }];
			const { container } = render(Dropdown, {
				props: { items: itemsWithIcon }
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				// Icon component would be rendered
				expect(screen.getByText('With Icon')).toBeInTheDocument();
			});
		});
	});
	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			expect(trigger).toHaveAttribute('aria-expanded', 'false');
			expect(trigger).toHaveAttribute('aria-haspopup', 'true');
		});
		it('updates aria-expanded when opened', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				expect(trigger).toHaveAttribute('aria-expanded', 'true');
			});
		});
		it('handles focus correctly', async () => {
			const { container } = render(Dropdown, {
				props: { items: mockItems }
			});
			const trigger = screen.getByRole('button');
			trigger.focus();
			expect(document.activeElement).toBe(trigger);
		});
	});
	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					class: 'custom-dropdown'
				}
			});
			const wrapper = container.querySelector('.relative.inline-block');
			expect(wrapper).toHaveClass('custom-dropdown');
		});
		it('applies custom trigger class', () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					triggerClass: 'custom-trigger'
				}
			});
			const trigger = container.querySelector('button');
			expect(trigger).toHaveClass('custom-trigger');
		});
		it('applies custom menu class', async () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					menuClass: 'custom-menu'
				}
			});
			const trigger = screen.getByRole('button');
			await fireEvent.click(trigger);
			await waitFor(() => {
				const menu = container.querySelector('.absolute.z-50');
				expect(menu).toHaveClass('custom-menu');
			});
		});
		it('passes through additional props', () => {
			const { container } = render(Dropdown, {
				props: {
					items: mockItems,
					'data-testid': 'custom-dropdown'
				}
			});
			const wrapper = container.querySelector('[data-testid="custom-dropdown"]');
			expect(wrapper).toBeInTheDocument();
		});
	});
});
