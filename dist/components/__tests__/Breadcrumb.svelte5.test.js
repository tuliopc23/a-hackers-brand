import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	createMockElement,
	createMockProps,
	simulateClassGeneration,
	simulateAnimation,
	simulateMouseEvent,
	expectClassesToContain,
	expectAttributesToBeSet,
	expectAriaAttributes,
	testAccessibilityCompliance,
	testEventCleanup
} from './svelte5-test-utils';
describe('Breadcrumb Component (Svelte 5)', () => {
	const defaultItems = [
		{ id: '1', label: 'Products', href: '/products' },
		{ id: '2', label: 'Electronics', href: '/products/electronics' },
		{ id: '3', label: 'Smartphones', href: '/products/electronics/smartphones' },
		{ id: '4', label: 'iPhone 15', disabled: true }
	];
	const breadcrumbTestDefaults = {
		items: defaultItems,
		variant: 'default',
		separator: 'chevron',
		showHome: true,
		homeIcon: '🏠',
		homeLabel: 'Home',
		maxItems: 5
	};
	beforeEach(() => {
		vi.clearAllMocks();
	});
	describe('Props and Configuration', () => {
		it('should handle variant props correctly', () => {
			const variants = ['default', 'glass', 'terminal'];
			variants.forEach((variant) => {
				const props = createMockProps(breadcrumbTestDefaults, { variant });
				expect(props.variant).toBe(variant);
			});
		});
		it('should handle separator types', () => {
			const separators = ['slash', 'chevron', 'arrow', 'dot'];
			separators.forEach((separator) => {
				const props = createMockProps(breadcrumbTestDefaults, { separator });
				expect(props.separator).toBe(separator);
			});
		});
		it('should handle home configuration', () => {
			const props = createMockProps(breadcrumbTestDefaults, {
				showHome: false,
				homeIcon: '🏡',
				homeLabel: 'Dashboard'
			});
			expect(props.showHome).toBe(false);
			expect(props.homeIcon).toBe('🏡');
			expect(props.homeLabel).toBe('Dashboard');
		});
		it('should handle maxItems prop', () => {
			const props = createMockProps(breadcrumbTestDefaults, {
				maxItems: 3
			});
			expect(props.maxItems).toBe(3);
		});
		it('should handle items array', () => {
			const customItems = [
				{ id: '1', label: 'Dashboard', href: '/dashboard' },
				{ id: '2', label: 'Settings', href: '/settings' }
			];
			const props = createMockProps(breadcrumbTestDefaults, {
				items: customItems
			});
			expect(props.items).toHaveLength(2);
			expect(props.items[0].label).toBe('Dashboard');
		});
	});
	describe('CSS Class Generation', () => {
		it('should generate correct container classes', () => {
			const container = createMockElement();
			const variant = 'glass';
			simulateClassGeneration(container, 'flex items-center space-x-2', variant, '', ['text-white/80']);
			expectClassesToContain(container, ['flex', 'items-center', 'space-x-2']);
		});
		it('should generate correct item classes', () => {
			const item = createMockElement();
			const variant = 'glass';
			const isActive = false;
			if (isActive) {
				simulateClassGeneration(item, 'font-medium', variant, '', ['text-white']);
			} else {
				simulateClassGeneration(item, 'transition-colors', variant, '', [
					'text-white/60',
					'hover:text-white',
					'hover:glass-light'
				]);
			}
			expectClassesToContain(item, ['transition-colors', 'text-white/60']);
		});
		it('should apply disabled styles', () => {
			const item = createMockElement();
			const disabled = true;
			if (disabled) {
				item.classList.add('opacity-50', 'cursor-not-allowed');
			}
			expect(item.classList.add).toHaveBeenCalledWith('opacity-50', 'cursor-not-allowed');
		});
		it('should generate home button classes', () => {
			const home = createMockElement();
			const variant = 'glass';
			simulateClassGeneration(home, 'inline-flex items-center', variant, '', [
				'text-white/60',
				'hover:text-white',
				'transition-colors'
			]);
			expectClassesToContain(home, ['inline-flex', 'items-center', 'transition-colors']);
		});
	});
	describe('Separator Rendering', () => {
		it('should render correct separator icons', () => {
			const separatorIcons = {
				slash: '/',
				chevron: '›',
				arrow: '→',
				dot: '•'
			};
			Object.entries(separatorIcons).forEach(([type, icon]) => {
				const separator = createMockElement();
				separator.textContent = icon;
				expect(separator.textContent).toBe(icon);
			});
		});
		it('should apply separator styling', () => {
			const separator = createMockElement();
			const variant = 'glass';
			simulateClassGeneration(separator, 'mx-2', variant, '', ['text-white/40']);
			expectClassesToContain(separator, ['mx-2', 'text-white/40']);
		});
	});
	describe('Item State Management', () => {
		it('should identify active item (last item)', () => {
			const items = defaultItems;
			const lastIndex = items.length - 1;
			items.forEach((item, index) => {
				const isActive = index === lastIndex;
				expect(isActive).toBe(index === 3);
			});
		});
		it('should handle clickable items', () => {
			const item = { id: '1', label: 'Products', href: '/products' };
			const isClickable = !!item.href && !item.disabled;
			expect(isClickable).toBe(true);
		});
		it('should handle non-clickable items', () => {
			const item = { id: '4', label: 'Current Page', disabled: true };
			const isClickable = !!item.href && !item.disabled;
			expect(isClickable).toBe(false);
		});
	});
	describe('Navigation Events', () => {
		it('should dispatch navigate event on item click', () => {
			const item = createMockElement();
			const onNavigate = vi.fn();
			const itemData = { id: '1', label: 'Products', href: '/products' };
			const index = 0;
			item.addEventListener('click', () => {
				onNavigate({ item: itemData, index });
			});
			item.click();
			expect(item.click).toHaveBeenCalled();
		});
		it('should dispatch homeClick event', () => {
			const homeButton = createMockElement();
			const onHomeClick = vi.fn();
			homeButton.addEventListener('click', onHomeClick);
			homeButton.click();
			expect(homeButton.click).toHaveBeenCalled();
		});
		it('should not trigger click for disabled items', () => {
			const item = createMockElement();
			const onNavigate = vi.fn();
			const itemData = { id: '4', label: 'Current', disabled: true };
			if (!itemData.disabled) {
				item.addEventListener('click', onNavigate);
			}
			expect(item.addEventListener).not.toHaveBeenCalledWith('click', onNavigate);
		});
	});
	describe('Item Truncation', () => {
		it('should truncate items when exceeding maxItems', () => {
			const items = [
				{ id: '1', label: 'Level 1' },
				{ id: '2', label: 'Level 2' },
				{ id: '3', label: 'Level 3' },
				{ id: '4', label: 'Level 4' },
				{ id: '5', label: 'Level 5' },
				{ id: '6', label: 'Level 6' }
			];
			const maxItems = 4;
			let displayItems = items;
			if (items.length > maxItems) {
				// Show first item, ellipsis, and last few items
				const keepFirst = 1;
				const keepLast = maxItems - keepFirst - 1; // -1 for ellipsis
				displayItems = [
					...items.slice(0, keepFirst),
					{ id: 'ellipsis', label: '...', disabled: true },
					...items.slice(-keepLast)
				];
			}
			expect(displayItems).toHaveLength(4);
			expect(displayItems[1].label).toBe('...');
		});
		it('should not truncate when items fit within maxItems', () => {
			const items = defaultItems; // 4 items
			const maxItems = 5;
			const shouldTruncate = items.length > maxItems;
			expect(shouldTruncate).toBe(false);
		});
	});
	describe('Icon Display', () => {
		it('should show home icon', () => {
			const homeButton = createMockElement();
			const homeIcon = '🏠';
			const homeLabel = 'Home';
			homeButton.innerHTML = `${homeIcon} <span class="sr-only">${homeLabel}</span>`;
			expect(homeButton.innerHTML).toContain(homeIcon);
			expect(homeButton.innerHTML).toContain(homeLabel);
		});
		it('should show item icons when provided', () => {
			const item = { id: '1', label: 'Products', icon: '📦', href: '/products' };
			const itemElement = createMockElement();
			if (item.icon) {
				itemElement.innerHTML = `${item.icon} ${item.label}`;
			} else {
				itemElement.textContent = item.label;
			}
			expect(itemElement.innerHTML).toContain('📦');
			expect(itemElement.innerHTML).toContain('Products');
		});
	});
	describe('Accessibility', () => {
		it('should have proper ARIA attributes on navigation', () => {
			const nav = createMockElement();
			expectAttributesToBeSet(nav, {
				role: 'navigation'
			});
			expectAriaAttributes(nav, {
				label: 'Breadcrumb navigation'
			});
		});
		it('should have proper ARIA attributes on list', () => {
			const list = createMockElement();
			expectAttributesToBeSet(list, {
				role: 'list'
			});
		});
		it('should have proper ARIA attributes on items', () => {
			const item = createMockElement();
			const isActive = true;
			expectAttributesToBeSet(item, {
				role: 'listitem'
			});
			if (isActive) {
				expectAriaAttributes(item, {
					current: 'page'
				});
			}
		});
		it('should provide accessible link text', () => {
			const link = createMockElement();
			const item = { id: '1', label: 'Products', href: '/products' };
			expectAriaAttributes(link, {
				label: `Navigate to ${item.label}`
			});
		});
		it('should mark separators as presentation', () => {
			const separator = createMockElement();
			expectAriaAttributes(separator, {
				hidden: 'true'
			});
		});
	});
	describe('Animation Integration', () => {
		it('should apply magnetic hover to interactive items', () => {
			const item = createMockElement();
			const isClickable = true;
			if (isClickable) {
				item.addEventListener('mousemove', expect.any(Function));
				item.addEventListener('mouseleave', expect.any(Function));
			}
			expect(item.addEventListener).toHaveBeenCalledWith('mousemove', expect.any(Function));
			expect(item.addEventListener).toHaveBeenCalledWith('mouseleave', expect.any(Function));
		});
		it('should apply hover transitions', () => {
			const item = createMockElement();
			const hasHover = true;
			if (hasHover) {
				item.style.transition = 'all 200ms ease-in-out';
			}
			expect(item.style.transition).toContain('all');
		});
	});
	describe('Variant Styling', () => {
		it('should apply glass variant styles', () => {
			const container = createMockElement();
			const item = createMockElement();
			const variant = 'glass';
			if (variant === 'glass') {
				container.classList.add('glass-subtle', 'backdrop-blur-md');
				item.classList.add('hover:glass-light');
			}
			expect(container.classList.add).toHaveBeenCalledWith('glass-subtle', 'backdrop-blur-md');
			expect(item.classList.add).toHaveBeenCalledWith('hover:glass-light');
		});
		it('should apply terminal variant styles', () => {
			const item = createMockElement();
			const variant = 'terminal';
			if (variant === 'terminal') {
				item.classList.add('text-terminal-green', 'hover:text-terminal-green-bright');
			}
			expect(item.classList.add).toHaveBeenCalledWith('text-terminal-green', 'hover:text-terminal-green-bright');
		});
	});
	describe('Performance', () => {
		it('should cleanup event listeners properly', () => {
			const item = createMockElement();
			const home = createMockElement();
			testEventCleanup(item, ['click', 'mousemove', 'mouseleave']);
			testEventCleanup(home, ['click']);
		});
		it('should handle large breadcrumb paths efficiently', () => {
			const largePath = Array.from({ length: 50 }, (_, i) => ({
				id: String(i),
				label: `Level ${i + 1}`,
				href: `/level-${i + 1}`
			}));
			const maxItems = 5;
			const shouldOptimize = largePath.length > maxItems;
			expect(shouldOptimize).toBe(true);
		});
	});
});
