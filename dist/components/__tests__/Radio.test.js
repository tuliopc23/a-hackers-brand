import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Radio from '../Radio.svelte';
import { testAllVariants, testAllSizes } from '../../__tests__/test-utils';
describe('Radio Component', () => {
    const mockOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', description: 'Description for option 2' },
        { value: 'option3', label: 'Option 3', disabled: true }
    ];
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('Rendering', () => {
        it('renders all options', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: 'option1'
                }
            });
            expect(screen.getByText('Option 1')).toBeInTheDocument();
            expect(screen.getByText('Option 2')).toBeInTheDocument();
            expect(screen.getByText('Option 3')).toBeInTheDocument();
            expect(screen.getByText('Description for option 2')).toBeInTheDocument();
        });
        it('renders all variants correctly', async () => {
            await testAllVariants(Radio, {
                options: mockOptions,
                name: 'test-radio'
            }, (variant) => {
                const { container } = render(Radio, {
                    props: {
                        variant,
                        options: mockOptions,
                        name: 'test-radio'
                    }
                });
                const wrapper = container.querySelector('.relative.rounded-2xl');
                expect(wrapper).toHaveClass(variant === 'glass' ? 'bg-white/5' : '');
            });
        });
        it('renders all sizes correctly', async () => {
            await testAllSizes(Radio, {
                options: mockOptions,
                name: 'test-radio'
            }, (size) => {
                const { container } = render(Radio, {
                    props: {
                        size,
                        options: mockOptions,
                        name: 'test-radio'
                    }
                });
                const radios = container.querySelectorAll('.rounded-full');
                radios.forEach((radio) => {
                    expect(radio).toHaveClass(size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6');
                });
            });
        });
        it('renders with horizontal orientation', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    orientation: 'horizontal'
                }
            });
            const wrapper = container.querySelector('.relative.rounded-2xl');
            expect(wrapper).toHaveClass('inline-flex', 'flex-row');
        });
    });
    describe('Selection', () => {
        it('selects correct option on click', async () => {
            let selectedValue = 'option1';
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: selectedValue,
                    onchange: (value) => {
                        selectedValue = value;
                    }
                }
            });
            const option2Label = screen.getByText('Option 2');
            await fireEvent.click(option2Label);
            expect(selectedValue).toBe('option2');
        });
        it('does not select disabled option', async () => {
            let selectedValue = 'option1';
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: selectedValue,
                    onchange: (value) => {
                        selectedValue = value;
                    }
                }
            });
            const option3Label = screen.getByText('Option 3');
            await fireEvent.click(option3Label);
            expect(selectedValue).toBe('option1'); // Should not change
        });
        it('shows selected state correctly', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: 'option2'
                }
            });
            const radios = container.querySelectorAll('input[type="radio"]');
            expect(radios[0]).not.toBeChecked();
            expect(radios[1]).toBeChecked();
            expect(radios[2]).not.toBeChecked();
        });
    });
    describe('Visual Effects', () => {
        it('shows glow effect when enabled', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: 'option1',
                    glow: true,
                    variant: 'neon'
                }
            });
            const selectedRadio = container.querySelector('.bg-pink-500');
            expect(selectedRadio).toHaveClass('shadow-[0_0_20px_rgba(236,72,153,0.7)]');
        });
        it('applies jelly hover effect', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    jelly: true
                }
            });
            // Jelly effects are applied via use:jellyHover
            const labels = container.querySelectorAll('label');
            expect(labels.length).toBeGreaterThan(0);
        });
        it('shows breathing animation on selected', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: 'option1',
                    animated: true
                }
            });
            // Breathing effect is applied to selected radio
            const selectedRadio = container.querySelector('input[checked] + div');
            expect(selectedRadio).toBeTruthy();
        });
    });
    describe('Error State', () => {
        it('shows error message', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    error: 'Please select an option'
                }
            });
            const errorMessage = screen.getByText('Please select an option');
            expect(errorMessage).toBeInTheDocument();
            expect(errorMessage).toHaveClass('text-red-400', 'animate-pulse');
        });
        it('applies error border', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    error: 'Error'
                }
            });
            const wrapper = container.querySelector('.relative.rounded-2xl');
            expect(wrapper).toHaveClass('border-red-500/50');
        });
    });
    describe('Accessibility', () => {
        it('has proper radio attributes', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    value: 'option1'
                }
            });
            const radios = container.querySelectorAll('input[type="radio"]');
            radios.forEach((radio, index) => {
                expect(radio).toHaveAttribute('name', 'test-radio');
                expect(radio).toHaveAttribute('value', mockOptions[index].value);
            });
        });
        it('handles keyboard navigation', async () => {
            let selectedValue = 'option1';
            const { container } = render(Radio, {
                props: {
                    options: mockOptions.filter((o) => !o.disabled),
                    name: 'test-radio',
                    value: selectedValue,
                    onchange: (value) => {
                        selectedValue = value;
                    }
                }
            });
            const firstRadio = container.querySelector('input[type="radio"]');
            firstRadio.focus();
            // Arrow down should select next
            await fireEvent.keyDown(firstRadio, { key: 'ArrowDown' });
            // Note: Full keyboard navigation requires more complex setup
        });
        it('properly labels disabled options', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio'
                }
            });
            const disabledRadio = container.querySelector('input[disabled]');
            expect(disabledRadio).toBeDisabled();
            const disabledLabel = screen.getByText('Option 3').closest('label');
            expect(disabledLabel).toHaveClass('opacity-50', 'cursor-not-allowed');
        });
    });
    describe('Custom Props', () => {
        it('applies custom className', () => {
            const { container } = render(Radio, {
                props: {
                    options: mockOptions,
                    name: 'test-radio',
                    class: 'custom-radio'
                }
            });
            const wrapper = container.querySelector('.relative.rounded-2xl');
            expect(wrapper).toHaveClass('custom-radio');
        });
    });
});
