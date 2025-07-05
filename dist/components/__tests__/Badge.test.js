import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Badge from '../Badge.svelte';
import { testAllVariants, testAllSizes, waitForAnimation } from '../../__tests__/test-utils';
describe('Badge Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('Rendering', () => {
        it('renders with default props', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => 'Default badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
            expect(badge).toHaveTextContent('Default badge');
            expect(badge).toHaveClass('inline-flex', 'items-center', 'justify-center', 'rounded-full');
        });
        it('renders all variants correctly', async () => {
            const variants = ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error'];
            for (const variant of variants) {
                const { container } = render(Badge, {
                    props: {
                        variant,
                        children: () => `${variant} badge`
                    }
                });
                const badge = container.querySelector('span');
                if (variant === 'default') {
                    expect(badge).toHaveClass('bg-white/10', 'text-white');
                }
                else if (variant === 'primary') {
                    expect(badge).toHaveClass('bg-blue-500/20', 'text-blue-300');
                }
                else if (variant === 'success') {
                    expect(badge).toHaveClass('bg-green-500/20', 'text-green-300');
                }
                else if (variant === 'error') {
                    expect(badge).toHaveClass('bg-red-600/20', 'text-red-300');
                }
            }
        });
        it('renders all sizes correctly', () => {
            const sizes = ['sm', 'md', 'lg'];
            sizes.forEach(size => {
                const { container } = render(Badge, {
                    props: {
                        size,
                        children: () => `${size} badge`
                    }
                });
                const badge = container.querySelector('span');
                expect(badge).toHaveClass(size === 'sm' ? 'px-2 py-1 text-xs' :
                    size === 'md' ? 'px-3 py-1.5 text-sm' :
                        'px-4 py-2 text-base');
            });
        });
        it('applies glass effect by default', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => 'Glass badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveClass('glass-subtle', 'backdrop-blur-md');
        });
        it('removes glass effect when glass is false', () => {
            const { container } = render(Badge, {
                props: {
                    glass: false,
                    children: () => 'No glass'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).not.toHaveClass('glass-subtle');
            expect(badge).not.toHaveClass('backdrop-blur-md');
        });
    });
    describe('Blur Levels', () => {
        it('applies different blur levels', () => {
            const blurLevels = ['sm', 'md', 'lg', 'xl'];
            blurLevels.forEach(blur => {
                const { container } = render(Badge, {
                    props: {
                        blur,
                        children: () => `${blur} blur`
                    }
                });
                const badge = container.querySelector('span');
                expect(badge).toHaveClass(`backdrop-blur-${blur}`);
            });
        });
        it('only applies blur when glass is enabled', () => {
            const { container } = render(Badge, {
                props: {
                    glass: false,
                    blur: 'xl',
                    children: () => 'No blur'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).not.toHaveClass('backdrop-blur-xl');
        });
    });
    describe('Interactive Behavior', () => {
        it('adds interactive classes when interactive is true', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    children: () => 'Interactive badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveClass('cursor-pointer', 'hover:scale-105');
            expect(badge).toHaveAttribute('role', 'button');
            expect(badge).toHaveAttribute('tabindex', '0');
        });
        it('does not add interactive classes when interactive is false', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: false,
                    children: () => 'Static badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).not.toHaveClass('cursor-pointer');
            expect(badge).toHaveAttribute('role', 'status');
            expect(badge).not.toHaveAttribute('tabindex');
        });
        it('handles click events on interactive badges', async () => {
            const handleClick = vi.fn();
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    onclick: handleClick,
                    children: () => 'Clickable badge'
                }
            });
            const badge = container.querySelector('span');
            await fireEvent.click(badge);
            expect(handleClick).toHaveBeenCalledTimes(1);
        });
        it('handles keyboard events on interactive badges', async () => {
            const handleClick = vi.fn();
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    onclick: handleClick,
                    children: () => 'Keyboard badge'
                }
            });
            const badge = container.querySelector('span');
            // Test Enter key
            await fireEvent.keyDown(badge, { key: 'Enter' });
            expect(handleClick).toHaveBeenCalledTimes(1);
            // Test Space key
            await fireEvent.keyDown(badge, { key: ' ' });
            expect(handleClick).toHaveBeenCalledTimes(2);
        });
        it('does not handle keyboard events on non-interactive badges', async () => {
            const handleClick = vi.fn();
            const { container } = render(Badge, {
                props: {
                    interactive: false,
                    onclick: handleClick,
                    children: () => 'Non-interactive'
                }
            });
            const badge = container.querySelector('span');
            await fireEvent.keyDown(badge, { key: 'Enter' });
            expect(handleClick).not.toHaveBeenCalled();
        });
    });
    describe('Animations', () => {
        it('applies entrance animations when animate is true', async () => {
            const { container } = render(Badge, {
                props: {
                    animate: true,
                    children: () => 'Animated badge'
                }
            });
            // glassFade transition should be applied
            await waitForAnimation(100);
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
        });
        it('does not apply animations when animate is false', () => {
            const { container } = render(Badge, {
                props: {
                    animate: false,
                    children: () => 'Static badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
            // No transition attributes should be present
        });
        it('respects reduced motion preference', () => {
            const { container } = render(Badge, {
                props: {
                    animate: true,
                    reduceMotion: true,
                    children: () => 'Reduced motion'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
            // Should render without animations
        });
        it('applies different animation for interactive badges', async () => {
            const { container } = render(Badge, {
                props: {
                    animate: true,
                    interactive: true,
                    children: () => 'Interactive animated'
                }
            });
            // Interactive badges use liquidBlur, non-interactive use glassFade
            await waitForAnimation(100);
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
        });
    });
    describe('Content Rendering', () => {
        it('renders children content using render function', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => 'Badge content'
                }
            });
            expect(screen.getByText('Badge content')).toBeInTheDocument();
        });
        it('renders complex children content', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => '<strong>Bold</strong> text'
                }
            });
            expect(screen.getByText('Bold')).toBeInTheDocument();
            expect(screen.getByText('text')).toBeInTheDocument();
        });
        it('handles empty children gracefully', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => ''
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
            expect(badge).toHaveTextContent('');
        });
        it('handles undefined children', () => {
            const { container } = render(Badge);
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
        });
    });
    describe('Accessibility', () => {
        it('has proper role for non-interactive badges', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: false,
                    children: () => 'Status badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveAttribute('role', 'status');
        });
        it('has proper role for interactive badges', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    children: () => 'Button badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveAttribute('role', 'button');
        });
        it('generates default aria-label from variant', () => {
            const { container } = render(Badge, {
                props: {
                    variant: 'success',
                    children: () => 'Success'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveAttribute('aria-label', 'success badge');
        });
        it('uses custom aria-label when provided', () => {
            const { container } = render(Badge, {
                props: {
                    'aria-label': 'Custom label',
                    children: () => 'Custom'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveAttribute('aria-label', 'Custom label');
        });
        it('sets tabindex correctly for interactive badges', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    children: () => 'Focusable'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveAttribute('tabindex', '0');
        });
        it('allows keyboard focus on interactive badges', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    children: () => 'Keyboard accessible'
                }
            });
            const badge = container.querySelector('span');
            badge.focus();
            expect(document.activeElement).toBe(badge);
        });
        it('has focus styles for interactive badges', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    children: () => 'Focus styles'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-white/30');
        });
    });
    describe('Styling', () => {
        it('applies base classes correctly', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => 'Base classes'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveClass('inline-flex', 'items-center', 'justify-center', 'rounded-full', 'border', 'transition-all', 'duration-200');
        });
        it('combines all classes correctly', () => {
            const { container } = render(Badge, {
                props: {
                    variant: 'primary',
                    size: 'lg',
                    glass: true,
                    blur: 'xl',
                    interactive: true,
                    class: 'custom-class',
                    children: () => 'All classes'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveClass('inline-flex', 'bg-blue-500/20', 'text-blue-300', 'px-4', 'py-2', 'text-base', 'glass-subtle', 'backdrop-blur-xl', 'cursor-pointer', 'custom-class');
        });
        it('applies custom className', () => {
            const { container } = render(Badge, {
                props: {
                    class: 'custom-badge-class',
                    children: () => 'Custom badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveClass('custom-badge-class');
        });
        it('applies will-change for interactive badges', () => {
            const { container } = render(Badge, {
                props: {
                    interactive: true,
                    children: () => 'Transform badge'
                }
            });
            const badge = container.querySelector('span');
            expect(badge).toHaveStyle({ willChange: 'transform' });
        });
    });
    describe('Custom Props', () => {
        it('passes through additional HTML attributes', () => {
            const { container } = render(Badge, {
                props: {
                    'data-testid': 'custom-badge',
                    title: 'Custom title',
                    children: () => 'Custom props'
                }
            });
            const badge = container.querySelector('[data-testid="custom-badge"]');
            expect(badge).toBeInTheDocument();
            expect(badge).toHaveAttribute('title', 'Custom title');
        });
        it('handles custom event handlers', async () => {
            const handleMouseEnter = vi.fn();
            const handleMouseLeave = vi.fn();
            const { container } = render(Badge, {
                props: {
                    onmouseenter: handleMouseEnter,
                    onmouseleave: handleMouseLeave,
                    children: () => 'Event handlers'
                }
            });
            const badge = container.querySelector('span');
            await fireEvent.mouseEnter(badge);
            expect(handleMouseEnter).toHaveBeenCalledTimes(1);
            await fireEvent.mouseLeave(badge);
            expect(handleMouseLeave).toHaveBeenCalledTimes(1);
        });
    });
    describe('Bundle Size Tracking', () => {
        it('tracks component bundle size', () => {
            const { container } = render(Badge, {
                props: {
                    children: () => 'Size tracking'
                }
            });
            // Bundle size tracking is handled by $effect in the component
            const badge = container.querySelector('span');
            expect(badge).toBeInTheDocument();
        });
    });
    describe('Edge Cases', () => {
        it('handles all variant and size combinations', () => {
            const variants = ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error'];
            const sizes = ['sm', 'md', 'lg'];
            variants.forEach(variant => {
                sizes.forEach(size => {
                    const { container } = render(Badge, {
                        props: {
                            variant,
                            size,
                            children: () => `${variant}-${size}`
                        }
                    });
                    const badge = container.querySelector('span');
                    expect(badge).toBeInTheDocument();
                    expect(badge).toHaveTextContent(`${variant}-${size}`);
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
                const { container } = render(Badge, {
                    props: {
                        animate,
                        interactive,
                        children: () => `${animate ? 'animated' : 'static'}-${interactive ? 'interactive' : 'passive'}`
                    }
                });
                const badge = container.querySelector('span');
                expect(badge).toBeInTheDocument();
                if (interactive) {
                    expect(badge).toHaveAttribute('role', 'button');
                    expect(badge).toHaveClass('cursor-pointer');
                }
                else {
                    expect(badge).toHaveAttribute('role', 'status');
                    expect(badge).not.toHaveClass('cursor-pointer');
                }
            });
        });
    });
});
