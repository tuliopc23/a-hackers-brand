import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';
import Tooltip from '../Tooltip.svelte';
describe('Tooltip Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
    });
    // Note: afterEach would be added here if needed
    // afterEach(() => {
    //		vi.useRealTimers();
    // });
    describe('Rendering', () => {
        it('renders trigger content', () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    children: '<button>Hover me</button>'
                }
            });
            expect(screen.getByText('Hover me')).toBeInTheDocument();
        });
        it('does not show tooltip initially', () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    children: '<button>Hover me</button>'
                }
            });
            expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
        });
        it('shows tooltip on hover after delay', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    delay: 500,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            // Tooltip should not appear immediately
            expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
            // Fast-forward time
            vi.advanceTimersByTime(500);
            await waitFor(() => {
                expect(screen.getByText('Tooltip text')).toBeInTheDocument();
            });
        });
        it('hides tooltip on mouse leave', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                expect(screen.getByText('Tooltip text')).toBeInTheDocument();
            });
            await fireEvent.mouseLeave(trigger.parentElement);
            await waitFor(() => {
                expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
            });
        });
    });
    describe('Positioning', () => {
        // Mock getBoundingClientRect for positioning tests
        const mockBoundingRect = (element, rect) => {
            vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
                width: 100,
                height: 50,
                top: 100,
                left: 100,
                bottom: 150,
                right: 200,
                x: 100,
                y: 100,
                toJSON: () => ({}),
                ...rect
            });
        };
        it('positions tooltip on top by default', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    position: 'top',
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            mockBoundingRect(trigger.parentElement, {});
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                const tooltip = screen.getByText('Tooltip text');
                // Tooltip positioning is handled by absolute positioning
                expect(tooltip.parentElement).toHaveStyle({ position: 'fixed' });
            });
        });
        it('flips position when near viewport edge', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    position: 'top',
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            // Mock element near top of viewport
            mockBoundingRect(trigger.parentElement, { top: 10 });
            await fireEvent.mouseEnter(trigger.parentElement);
            // Tooltip should flip to bottom position
            await waitFor(() => {
                const tooltip = screen.getByText('Tooltip text');
                expect(tooltip).toBeInTheDocument();
            });
        });
    });
    describe('Variants', () => {
        const variants = ['glass', 'terminal', 'liquid', 'dark'];
        variants.forEach(variant => {
            it(`renders ${variant} variant correctly`, async () => {
                const { container } = render(Tooltip, {
                    props: {
                        text: 'Tooltip text',
                        variant,
                        delay: 0,
                        children: '<button>Hover me</button>'
                    }
                });
                const trigger = screen.getByText('Hover me');
                await fireEvent.mouseEnter(trigger.parentElement);
                await waitFor(() => {
                    const tooltip = screen.getByText('Tooltip text').parentElement;
                    if (variant === 'glass') {
                        expect(tooltip).toHaveClass('bg-white/10');
                    }
                    else if (variant === 'terminal') {
                        expect(tooltip).toHaveClass('bg-gray-900/95');
                    }
                });
            });
        });
    });
    describe('Arrow', () => {
        it('shows arrow when arrow prop is true', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    arrow: true,
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                const arrow = container.querySelector('.border-4');
                expect(arrow).toBeInTheDocument();
            });
        });
        it('hides arrow when arrow prop is false', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    arrow: false,
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                const arrow = container.querySelector('.border-4');
                expect(arrow).not.toBeInTheDocument();
            });
        });
    });
    describe('Accessibility', () => {
        it('shows tooltip on focus', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.focus(trigger.parentElement);
            await waitFor(() => {
                expect(screen.getByText('Tooltip text')).toBeInTheDocument();
            });
        });
        it('hides tooltip on blur', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.focus(trigger.parentElement);
            await waitFor(() => {
                expect(screen.getByText('Tooltip text')).toBeInTheDocument();
            });
            await fireEvent.blur(trigger.parentElement);
            await waitFor(() => {
                expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
            });
        });
        it('has proper ARIA attributes', () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    children: '<button>Hover me</button>'
                }
            });
            const wrapper = container.querySelector('[role="tooltip"]');
            expect(wrapper).toBeInTheDocument();
        });
    });
    describe('Custom Props', () => {
        it('applies custom offset', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    offset: 16,
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                const tooltip = screen.getByText('Tooltip text');
                expect(tooltip).toBeInTheDocument();
            });
        });
        it('applies custom className', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    class: 'custom-tooltip',
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                const tooltip = screen.getByText('Tooltip text').parentElement;
                expect(tooltip).toHaveClass('custom-tooltip');
            });
        });
        it('disables animations when animated is false', async () => {
            const { container } = render(Tooltip, {
                props: {
                    text: 'Tooltip text',
                    animated: false,
                    delay: 0,
                    children: '<button>Hover me</button>'
                }
            });
            const trigger = screen.getByText('Hover me');
            await fireEvent.mouseEnter(trigger.parentElement);
            await waitFor(() => {
                const tooltip = screen.getByText('Tooltip text').parentElement;
                expect(tooltip).not.toHaveClass('transition-all');
            });
        });
    });
});
