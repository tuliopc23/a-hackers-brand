import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Select from './Select.svelte';

describe('Select', () => {
  const mockOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'disabled', label: 'Disabled Option', disabled: true }
  ];

  // Basic rendering tests
  it('renders correctly with default props', () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    expect(container.querySelector('[role="combobox"]')).toBeInTheDocument();
    expect(screen.getByText('Select an option...')).toBeInTheDocument();
  });

  it('renders with custom class', () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions,
        class: 'test-class'
      }
    });
    
    expect(container.querySelector('[role="combobox"]')).toHaveClass('test-class');
  });

  // Placeholder and label tests
  it('displays custom placeholder when no value is selected', () => {
    render(Select, {
      props: {
        options: mockOptions,
        placeholder: 'Choose a fruit'
      }
    });
    
    expect(screen.getByText('Choose a fruit')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(Select, {
      props: {
        options: mockOptions,
        label: 'Fruit Selection'
      }
    });
    
    expect(screen.getByText('Fruit Selection')).toBeInTheDocument();
    expect(screen.getByText('Fruit Selection').tagName).toBe('LABEL');
  });

  // Variant tests
  it('applies the correct variant styles', () => {
    const { container: terminalSelect } = render(Select, {
      props: {
        options: mockOptions,
        variant: 'terminal'
      }
    });
    
    const { container: glassSelect } = render(Select, {
      props: {
        options: mockOptions,
        variant: 'glass',
        blur: 'lg'
      }
    });
    
    expect(terminalSelect.querySelector('[role="combobox"]')).toHaveClass('terminal');
    expect(terminalSelect.querySelector('[role="combobox"]')).toHaveClass('text-green-300');
    
    expect(glassSelect.querySelector('[role="combobox"]')).toHaveClass('glass-subtle');
    expect(glassSelect.querySelector('[role="combobox"]')).toHaveClass('backdrop-blur-lg');
  });

  // Size tests
  it('applies the correct size classes', () => {
    const { container: smallSelect } = render(Select, {
      props: {
        options: mockOptions,
        size: 'sm'
      }
    });
    
    const { container: largeSelect } = render(Select, {
      props: {
        options: mockOptions,
        size: 'lg'
      }
    });
    
    expect(smallSelect.querySelector('[role="combobox"]')).toHaveClass('h-8');
    expect(smallSelect.querySelector('[role="combobox"]')).toHaveClass('text-sm');
    
    expect(largeSelect.querySelector('[role="combobox"]')).toHaveClass('h-12');
    expect(largeSelect.querySelector('[role="combobox"]')).toHaveClass('text-base');
  });

  // State tests
  it('shows disabled state correctly', () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions,
        disabled: true
      }
    });
    
    expect(container.querySelector('[role="combobox"]')).toHaveClass('opacity-50');
    expect(container.querySelector('[role="combobox"]')).toHaveClass('cursor-not-allowed');
    expect(container.querySelector('[role="combobox"]')).toHaveAttribute('tabindex', '-1');
  });

  // Selection tests
  it('displays the selected option when value is provided', () => {
    render(Select, {
      props: {
        options: mockOptions,
        value: 'banana'
      }
    });
    
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  // Dropdown interaction tests
  it('opens the dropdown when clicked', async () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Dropdown should not exist initially
    expect(container.querySelector('[role="listbox"]')).not.toBeInTheDocument();
    
    // Click to open dropdown
    await fireEvent.click(select);
    
    // Dropdown should now exist
    expect(container.querySelector('[role="listbox"]')).toBeInTheDocument();
    
    // Options should be displayed
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('closes the dropdown when an option is selected', async () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Open dropdown
    await fireEvent.click(select);
    
    // Select an option
    await fireEvent.click(screen.getByText('Cherry'));
    
    // Dropdown should be closed
    expect(container.querySelector('[role="listbox"]')).not.toBeInTheDocument();
    
    // Selected option should be displayed
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('does not allow selection of disabled options', async () => {
    const handleChange = vi.fn();
    
    const { container } = render(Select, {
      props: {
        options: mockOptions,
        onValueChange: handleChange
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Open dropdown
    await fireEvent.click(select);
    
    // Try to select disabled option
    await fireEvent.click(screen.getByText('Disabled Option'));
    
    // Change handler should not be called
    expect(handleChange).not.toHaveBeenCalled();
  });

  // Keyboard navigation tests
  it('supports keyboard navigation with arrow keys', async () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Focus the select
    select.focus();
    
    // Open dropdown with arrow down
    await fireEvent.keyDown(select, { key: 'ArrowDown' });
    
    // Dropdown should be open
    expect(container.querySelector('[role="listbox"]')).toBeInTheDocument();
    
    // Navigate down
    await fireEvent.keyDown(select, { key: 'ArrowDown' });
    
    // First option should be highlighted
    const firstOption = container.querySelector('[role="option"]');
    expect(firstOption).toHaveClass('bg-white/20');
    
    // Navigate down again
    await fireEvent.keyDown(select, { key: 'ArrowDown' });
    
    // Select with Enter
    await fireEvent.keyDown(select, { key: 'Enter' });
    
    // Dropdown should be closed
    expect(container.querySelector('[role="listbox"]')).not.toBeInTheDocument();
  });

  it('supports Escape key to close dropdown', async () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Open dropdown
    await fireEvent.click(select);
    
    // Dropdown should be open
    expect(container.querySelector('[role="listbox"]')).toBeInTheDocument();
    
    // Press Escape
    await fireEvent.keyDown(select, { key: 'Escape' });
    
    // Dropdown should be closed
    expect(container.querySelector('[role="listbox"]')).not.toBeInTheDocument();
  });

  it('supports Home and End keys for navigation', async () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Open dropdown
    await fireEvent.click(select);
    
    // Press End key to go to last option
    await fireEvent.keyDown(select, { key: 'End' });
    
    // Last option should be highlighted (skipping disabled option)
    const options = container.querySelectorAll('[role="option"]');
    expect(options[options.length - 2]).toHaveClass('bg-white/20');
    
    // Press Home key to go to first option
    await fireEvent.keyDown(select, { key: 'Home' });
    
    // First option should be highlighted
    expect(options[0]).toHaveClass('bg-white/20');
  });

  // Value change callback tests
  it('calls onValueChange when an option is selected', async () => {
    const handleChange = vi.fn();
    
    const { container } = render(Select, {
      props: {
        options: mockOptions,
        onValueChange: handleChange
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Open dropdown
    await fireEvent.click(select);
    
    // Select an option
    await fireEvent.click(screen.getByText('Cherry'));
    
    // Change handler should be called with the selected value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('cherry');
  });

  // Accessibility tests
  it('has proper ARIA attributes', () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions,
        label: 'Fruit Selection',
        'aria-label': 'Select a fruit'
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    expect(select).toHaveAttribute('role', 'combobox');
    expect(select).toHaveAttribute('aria-expanded', 'false');
    expect(select).toHaveAttribute('aria-haspopup', 'listbox');
    expect(select).toHaveAttribute('aria-labelledby'); // Should point to the label
  });

  it('updates ARIA attributes when dropdown opens', async () => {
    const { container } = render(Select, {
      props: {
        options: mockOptions
      }
    });
    
    const select = container.querySelector('[role="combobox"]');
    
    // Initial state
    expect(select).toHaveAttribute('aria-expanded', 'false');
    
    // Open dropdown
    await fireEvent.click(select);
    
    // Updated state
    expect(select).toHaveAttribute('aria-expanded', 'true');
    
    // Listbox should have proper role
    const listbox = container.querySelector('[role="listbox"]');
    expect(listbox).toBeInTheDocument();
    
    // Options should have proper roles and aria-selected
    const options = container.querySelectorAll('[role="option"]');
    expect(options.length).toBe(mockOptions.length);
    expect(options[0]).toHaveAttribute('aria-selected', 'false');
    
    // Disabled option should have aria-disabled
    expect(options[3]).toHaveAttribute('aria-disabled', 'true');
  });
});