import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Badge from '../../Badge.svelte';
describe('Badge Component', () => {
    it('renders with default props', () => {
        render(Badge, {
            props: {
                children: () => 'Test Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveTextContent('Test Badge');
    });
    it('applies variant classes correctly', () => {
        render(Badge, {
            props: {
                variant: 'primary',
                children: () => 'Primary Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toHaveClass('bg-blue-500/20', 'text-blue-300', 'border-blue-400/30');
    });
    it('handles interactive mode', () => {
        const clickHandler = vi.fn();
        render(Badge, {
            props: {
                interactive: true,
                onclick: clickHandler,
                children: () => 'Interactive Badge'
            }
        });
        const badge = screen.getByRole('button');
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveAttribute('tabindex', '0');
        fireEvent.click(badge);
        expect(clickHandler).toHaveBeenCalledOnce();
    });
    it('handles keyboard navigation', () => {
        const clickHandler = vi.fn();
        render(Badge, {
            props: {
                interactive: true,
                onclick: clickHandler,
                children: () => 'Keyboard Badge'
            }
        });
        const badge = screen.getByRole('button');
        // Test Enter key
        fireEvent.keyDown(badge, { key: 'Enter' });
        expect(clickHandler).toHaveBeenCalledOnce();
        // Test Space key
        fireEvent.keyDown(badge, { key: ' ' });
        expect(clickHandler).toHaveBeenCalledTimes(2);
    });
    it('applies size classes correctly', () => {
        render(Badge, {
            props: {
                size: 'lg',
                children: () => 'Large Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toHaveClass('px-4', 'py-2', 'text-base');
    });
    it('respects glass variant', () => {
        render(Badge, {
            props: {
                glass: true,
                blur: 'lg',
                children: () => 'Glass Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toHaveClass('glass-subtle', 'backdrop-blur-lg');
    });
    it('handles reduced motion preference', () => {
        render(Badge, {
            props: {
                reduceMotion: true,
                children: () => 'No Motion Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toBeInTheDocument();
    });
    it('applies custom className', () => {
        render(Badge, {
            props: {
                class: 'custom-badge-class',
                children: () => 'Custom Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toHaveClass('custom-badge-class');
    });
    it('has proper accessibility attributes', () => {
        render(Badge, {
            props: {
                'aria-label': 'Custom badge label',
                children: () => 'Accessible Badge'
            }
        });
        const badge = screen.getByRole('status');
        expect(badge).toHaveAttribute('aria-label', 'Custom badge label');
    });
});
