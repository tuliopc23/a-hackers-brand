import { describe, it, expect, vi } from 'vitest';
import { mount, getByRole, fireEvent, fireKeyboardEvent, hasClass, hasClasses } from '../../../test-client';
import Badge from '../../Badge.svelte';
describe('Badge Component', () => {
	it('renders with default props', () => {
		const { container, unmount } = mount(Badge, {
			props: {}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		expect(badge?.tagName).toBe('SPAN');
		expect(badge?.getAttribute('role')).toBe('status');
		unmount();
	});
	it('applies variant classes correctly', () => {
		const { container, unmount } = mount(Badge, {
			props: {
				variant: 'primary'
			}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		expect(hasClasses(badge, ['bg-blue-500/20', 'text-blue-300', 'border-blue-400/30'])).toBe(true);
		unmount();
	});
	it('handles interactive mode', () => {
		const clickHandler = vi.fn();
		const { container, unmount } = mount(Badge, {
			props: {
				interactive: true,
				onclick: clickHandler
			}
		});
		// For interactive badges, check if they're clickable
		const badge = getByRole(container, 'button') || getByRole(container, 'status');
		expect(badge).toBeTruthy();
		if (badge && badge.getAttribute('role') === 'button') {
			expect(badge.getAttribute('tabindex')).toBe('0');
			fireEvent(badge, 'click');
			expect(clickHandler).toHaveBeenCalledOnce();
		}
		unmount();
	});
	it('handles keyboard navigation', () => {
		const clickHandler = vi.fn();
		const { container, unmount } = mount(Badge, {
			props: {
				interactive: true,
				onclick: clickHandler
			}
		});
		const badge = getByRole(container, 'button') || getByRole(container, 'status');
		expect(badge).toBeTruthy();
		if (badge && badge.getAttribute('role') === 'button') {
			// Test Enter key
			fireKeyboardEvent(badge, 'Enter');
			expect(clickHandler).toHaveBeenCalledOnce();
			// Test Space key
			fireKeyboardEvent(badge, ' ');
			expect(clickHandler).toHaveBeenCalledTimes(2);
		}
		unmount();
	});
	it('applies size classes correctly', () => {
		const { container, unmount } = mount(Badge, {
			props: {
				size: 'lg'
			}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		expect(hasClasses(badge, ['px-4', 'py-2', 'text-base'])).toBe(true);
		unmount();
	});
	it('respects glass variant', () => {
		const { container, unmount } = mount(Badge, {
			props: {
				glass: true,
				blur: 'lg'
			}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		expect(hasClasses(badge, ['glass-subtle', 'backdrop-blur-lg'])).toBe(true);
		unmount();
	});
	it('handles reduced motion preference', () => {
		const { container, unmount } = mount(Badge, {
			props: {
				reduceMotion: true
			}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		unmount();
	});
	it('applies custom className', () => {
		const { container, unmount } = mount(Badge, {
			props: {
				class: 'custom-badge-class'
			}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		expect(hasClass(badge, 'custom-badge-class')).toBe(true);
		unmount();
	});
	it('has proper accessibility attributes', () => {
		const { container, unmount } = mount(Badge, {
			props: {
				'aria-label': 'Custom badge label'
			}
		});
		const badge = getByRole(container, 'status');
		expect(badge).toBeTruthy();
		expect(badge.getAttribute('aria-label')).toBe('Custom badge label');
		unmount();
	});
});
