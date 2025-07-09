import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Tabs from '../Tabs.svelte';
import { waitForAnimation } from '../../__tests__/test-utils';
describe('Tabs Component', () => {
	const mockTabs = [
		{ id: 'tab1', label: 'Tab 1', content: () => 'Content 1' },
		{ id: 'tab2', label: 'Tab 2', content: () => 'Content 2' },
		{ id: 'tab3', label: 'Tab 3', content: () => 'Content 3', disabled: true },
		{ id: 'tab4', label: 'Tab 4', content: () => 'Content 4' }
	];
	beforeEach(() => {
		vi.clearAllMocks();
	});
	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const tabList = container.querySelector('[role="tablist"]');
			const tabs = container.querySelectorAll('[role="tab"]');
			const tabPanel = container.querySelector('[role="tabpanel"]');
			expect(tabList).toBeInTheDocument();
			expect(tabs).toHaveLength(4);
			expect(tabPanel).toBeInTheDocument();
		});
		it('renders all tab labels', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			expect(screen.getByText('Tab 1')).toBeInTheDocument();
			expect(screen.getByText('Tab 2')).toBeInTheDocument();
			expect(screen.getByText('Tab 3')).toBeInTheDocument();
			expect(screen.getByText('Tab 4')).toBeInTheDocument();
		});
		it('renders first tab as active by default', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const firstTab = screen.getByText('Tab 1');
			expect(firstTab).toHaveAttribute('aria-selected', 'true');
			expect(firstTab).toHaveAttribute('tabindex', '0');
			expect(screen.getByText('Content 1')).toBeInTheDocument();
		});
		it('renders specified active tab', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab2'
				}
			});
			const secondTab = screen.getByText('Tab 2');
			expect(secondTab).toHaveAttribute('aria-selected', 'true');
			expect(screen.getByText('Content 2')).toBeInTheDocument();
		});
		it('renders all variants correctly', () => {
			const variants = ['default', 'glass', 'terminal'];
			variants.forEach((variant) => {
				const { container } = render(Tabs, {
					props: {
						tabs: mockTabs,
						variant
					}
				});
				const tabList = container.querySelector('[role="tablist"]');
				if (variant === 'default') {
					expect(tabList).toHaveClass('bg-white/5', 'border-white/10');
				} else if (variant === 'glass') {
					expect(tabList).toHaveClass('glass-subtle', 'border-white/20');
				} else if (variant === 'terminal') {
					expect(tabList).toHaveClass('bg-terminal-green/10');
				}
			});
		});
		it('renders all sizes correctly', () => {
			const sizes = ['sm', 'md', 'lg'];
			sizes.forEach((size) => {
				const { container } = render(Tabs, {
					props: {
						tabs: mockTabs,
						size
					}
				});
				const firstTab = container.querySelector('[role="tab"]');
				expect(firstTab).toHaveClass(
					size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'md' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
				);
			});
		});
	});
	describe('Orientation', () => {
		it('renders horizontal orientation by default', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const tabList = container.querySelector('[role="tablist"]');
			expect(tabList).toHaveAttribute('aria-orientation', 'horizontal');
			expect(tabList).toHaveClass('flex-row');
		});
		it('renders vertical orientation correctly', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					orientation: 'vertical'
				}
			});
			const tabList = container.querySelector('[role="tablist"]');
			const wrapper = container.querySelector('.w-full');
			expect(tabList).toHaveAttribute('aria-orientation', 'vertical');
			expect(tabList).toHaveClass('flex-col', 'min-w-max');
			expect(wrapper).toHaveClass('flex');
		});
	});
	describe('Tab Selection', () => {
		it('switches tabs on click', async () => {
			const handleTabChange = vi.fn();
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					onTabChange: handleTabChange
				}
			});
			const secondTab = screen.getByText('Tab 2');
			await fireEvent.click(secondTab);
			expect(handleTabChange).toHaveBeenCalledWith('tab2');
			expect(secondTab).toHaveAttribute('aria-selected', 'true');
			expect(screen.getByText('Content 2')).toBeInTheDocument();
		});
		it('updates tabindex correctly when switching tabs', async () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const firstTab = screen.getByText('Tab 1');
			const secondTab = screen.getByText('Tab 2');
			expect(firstTab).toHaveAttribute('tabindex', '0');
			expect(secondTab).toHaveAttribute('tabindex', '-1');
			await fireEvent.click(secondTab);
			expect(firstTab).toHaveAttribute('tabindex', '-1');
			expect(secondTab).toHaveAttribute('tabindex', '0');
		});
		it('does not switch to disabled tabs', async () => {
			const handleTabChange = vi.fn();
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					onTabChange: handleTabChange
				}
			});
			const disabledTab = screen.getByText('Tab 3');
			await fireEvent.click(disabledTab);
			expect(handleTabChange).not.toHaveBeenCalled();
			expect(disabledTab).toHaveAttribute('aria-selected', 'false');
		});
	});
	describe('Disabled State', () => {
		it('renders disabled tabs correctly', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const disabledTab = screen.getByText('Tab 3');
			expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
			expect(disabledTab).toBeDisabled();
			expect(disabledTab).toHaveClass('opacity-50', 'cursor-not-allowed');
		});
		it('skips disabled tabs in keyboard navigation', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab2'
				}
			});
			const secondTab = screen.getByText('Tab 2');
			secondTab.focus();
			// Arrow right should skip disabled tab3 and go to tab4
			await fireEvent.keyDown(secondTab, { key: 'ArrowRight' });
			expect(screen.getByText('Tab 4')).toHaveAttribute('aria-selected', 'true');
			expect(screen.getByText('Content 4')).toBeInTheDocument();
		});
	});
	describe('Keyboard Navigation', () => {
		it('activates tab on Enter key', async () => {
			const handleTabChange = vi.fn();
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					onTabChange: handleTabChange
				}
			});
			const secondTab = screen.getByText('Tab 2');
			await fireEvent.keyDown(secondTab, { key: 'Enter' });
			expect(handleTabChange).toHaveBeenCalledWith('tab2');
		});
		it('activates tab on Space key', async () => {
			const handleTabChange = vi.fn();
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					onTabChange: handleTabChange
				}
			});
			const secondTab = screen.getByText('Tab 2');
			await fireEvent.keyDown(secondTab, { key: ' ' });
			expect(handleTabChange).toHaveBeenCalledWith('tab2');
		});
		it('navigates with arrow keys in horizontal mode', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab1'
				}
			});
			const firstTab = screen.getByText('Tab 1');
			firstTab.focus();
			// Arrow right should go to next tab
			await fireEvent.keyDown(firstTab, { key: 'ArrowRight' });
			expect(screen.getByText('Tab 2')).toHaveAttribute('aria-selected', 'true');
			// Arrow left should go to previous tab (wrapping around)
			const secondTab = screen.getByText('Tab 2');
			await fireEvent.keyDown(secondTab, { key: 'ArrowLeft' });
			expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
		});
		it('navigates with arrow keys in vertical mode', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					orientation: 'vertical',
					activeTab: 'tab1'
				}
			});
			const firstTab = screen.getByText('Tab 1');
			firstTab.focus();
			// Arrow down should go to next tab
			await fireEvent.keyDown(firstTab, { key: 'ArrowDown' });
			expect(screen.getByText('Tab 2')).toHaveAttribute('aria-selected', 'true');
			// Arrow up should go to previous tab
			const secondTab = screen.getByText('Tab 2');
			await fireEvent.keyDown(secondTab, { key: 'ArrowUp' });
			expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
		});
		it('navigates to first tab with Home key', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab4'
				}
			});
			const fourthTab = screen.getByText('Tab 4');
			fourthTab.focus();
			await fireEvent.keyDown(fourthTab, { key: 'Home' });
			expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
		});
		it('navigates to last tab with End key', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab1'
				}
			});
			const firstTab = screen.getByText('Tab 1');
			firstTab.focus();
			await fireEvent.keyDown(firstTab, { key: 'End' });
			expect(screen.getByText('Tab 4')).toHaveAttribute('aria-selected', 'true');
		});
		it('prevents default behavior for handled keys', async () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const firstTab = screen.getByText('Tab 1');
			const preventDefault = vi.fn();
			await fireEvent.keyDown(firstTab, {
				key: 'ArrowRight',
				preventDefault
			});
			expect(preventDefault).toHaveBeenCalled();
		});
		it('ignores disabled tabs in keyboard navigation', async () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const disabledTab = screen.getByText('Tab 3');
			await fireEvent.keyDown(disabledTab, { key: 'Enter' });
			// Tab should not be activated
			expect(disabledTab).toHaveAttribute('aria-selected', 'false');
		});
	});
	describe('Content Rendering', () => {
		it('renders tab content from content property', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab2'
				}
			});
			expect(screen.getByText('Content 2')).toBeInTheDocument();
		});
		it('renders content via children render function', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: [
						{ id: 'tab1', label: 'Tab 1' },
						{ id: 'tab2', label: 'Tab 2' }
					],
					children: (activeTab) => `Dynamic content for ${activeTab}`
				}
			});
			expect(screen.getByText('Dynamic content for tab1')).toBeInTheDocument();
		});
		it('prefers tab content over children render function', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: [
						{ id: 'tab1', label: 'Tab 1', content: () => 'Tab content' },
						{ id: 'tab2', label: 'Tab 2' }
					],
					children: (activeTab) => `Children content for ${activeTab}`
				}
			});
			expect(screen.getByText('Tab content')).toBeInTheDocument();
			expect(screen.queryByText('Children content for tab1')).not.toBeInTheDocument();
		});
	});
	describe('Visual Effects', () => {
		it('applies blur levels for glass variant', () => {
			const blurLevels = ['sm', 'md', 'lg', 'xl'];
			blurLevels.forEach((blur) => {
				const { container } = render(Tabs, {
					props: {
						tabs: mockTabs,
						variant: 'glass',
						blur
					}
				});
				const tabList = container.querySelector('[role="tablist"]');
				expect(tabList).toHaveClass(`backdrop-blur-${blur}`);
			});
		});
		it('does not apply blur for non-glass variants', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					variant: 'default',
					blur: 'xl'
				}
			});
			const tabList = container.querySelector('[role="tablist"]');
			expect(tabList).not.toHaveClass('backdrop-blur-xl');
		});
		it('applies active tab styling correctly', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					variant: 'glass',
					activeTab: 'tab2'
				}
			});
			const activeTab = screen.getByText('Tab 2');
			const inactiveTab = screen.getByText('Tab 1');
			expect(activeTab).toHaveClass('glass-medium');
			expect(inactiveTab).toHaveClass('text-white/70');
		});
	});
	describe('Animations', () => {
		it('applies entrance animations when animate is true', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					animate: true
				}
			});
			// glassFade transition should be applied to content
			await waitForAnimation(100);
			const content = screen.getByText('Content 1');
			expect(content).toBeInTheDocument();
		});
		it('does not apply animations when animate is false', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					animate: false
				}
			});
			// Duration should be 0 when animate is false
			const content = screen.getByText('Content 1');
			expect(content).toBeInTheDocument();
		});
		it('respects reduced motion preference', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					animate: true,
					reduceMotion: true
				}
			});
			// Should render without animations
			const content = screen.getByText('Content 1');
			expect(content).toBeInTheDocument();
		});
		it('applies liquidBlur to active tab when animated', async () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					animate: true
				}
			});
			// liquidBlur should be applied to active tab
			await waitForAnimation(100);
			const activeTab = screen.getByText('Tab 1');
			expect(activeTab).toBeInTheDocument();
		});
	});
	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const tabList = container.querySelector('[role="tablist"]');
			const tabs = container.querySelectorAll('[role="tab"]');
			const tabPanel = container.querySelector('[role="tabpanel"]');
			expect(tabList).toHaveAttribute('aria-orientation', 'horizontal');
			tabs.forEach((tab) => {
				expect(tab).toHaveAttribute('aria-controls');
				expect(tab).toHaveAttribute('aria-selected');
			});
			expect(tabPanel).toHaveAttribute('aria-labelledby');
			expect(tabPanel).toHaveAttribute('tabindex', '0');
		});
		it('manages focus correctly', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const activeTab = screen.getByText('Tab 1');
			const inactiveTab = screen.getByText('Tab 2');
			expect(activeTab).toHaveAttribute('tabindex', '0');
			expect(inactiveTab).toHaveAttribute('tabindex', '-1');
		});
		it('associates tabs with panels correctly', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'tab2'
				}
			});
			const activeTab = screen.getByText('Tab 2');
			const tabPanel = container.querySelector('[role="tabpanel"]');
			expect(activeTab).toHaveAttribute('aria-controls', 'tabpanel-tab2');
			expect(tabPanel).toHaveAttribute('id', 'tabpanel-tab2');
		});
		it('handles disabled tabs accessibility', () => {
			const { container } = render(Tabs, {
				props: { tabs: mockTabs }
			});
			const disabledTab = screen.getByText('Tab 3');
			expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
			expect(disabledTab).toBeDisabled();
		});
	});
	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					class: 'custom-tabs-class'
				}
			});
			const wrapper = container.querySelector('.w-full');
			expect(wrapper).toHaveClass('custom-tabs-class');
		});
		it('passes through additional HTML attributes', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					'data-testid': 'custom-tabs'
				}
			});
			const wrapper = container.querySelector('[data-testid="custom-tabs"]');
			expect(wrapper).toBeInTheDocument();
		});
	});
	describe('Edge Cases', () => {
		it('handles empty tabs array', () => {
			const { container } = render(Tabs, {
				props: { tabs: [] }
			});
			const tabList = container.querySelector('[role="tablist"]');
			const tabs = container.querySelectorAll('[role="tab"]');
			expect(tabList).toBeInTheDocument();
			expect(tabs).toHaveLength(0);
		});
		it('handles single tab', () => {
			const singleTab = [{ id: 'only', label: 'Only Tab', content: () => 'Only Content' }];
			const { container } = render(Tabs, {
				props: { tabs: singleTab }
			});
			const tab = screen.getByText('Only Tab');
			expect(tab).toHaveAttribute('aria-selected', 'true');
			expect(screen.getByText('Only Content')).toBeInTheDocument();
		});
		it('handles all disabled tabs', () => {
			const disabledTabs = mockTabs.map((tab) => ({ ...tab, disabled: true }));
			const { container } = render(Tabs, {
				props: { tabs: disabledTabs }
			});
			const tabs = container.querySelectorAll('[role="tab"]');
			tabs.forEach((tab) => {
				expect(tab).toBeDisabled();
			});
		});
		it('handles invalid activeTab prop', () => {
			const { container } = render(Tabs, {
				props: {
					tabs: mockTabs,
					activeTab: 'nonexistent'
				}
			});
			// Should fall back to first tab
			const firstTab = screen.getByText('Tab 1');
			expect(firstTab).toHaveAttribute('aria-selected', 'true');
		});
	});
});
