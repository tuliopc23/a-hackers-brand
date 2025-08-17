import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Input from './Input.svelte';

describe('Input', () => {
  // Basic rendering tests
  it('renders correctly with default props', () => {
    const { container } = render(Input, {
      props: {
        placeholder: 'Enter text'
      }
    });
    
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveClass('w-full');
    expect(container.querySelector('input')).toHaveClass('rounded-brand');
  });

  it('renders with custom class', () => {
    const { container } = render(Input, {
      props: {
        class: 'test-class',
        placeholder: 'Custom input'
      }
    });
    
    expect(container.querySelector('input')).toHaveClass('test-class');
    expect(screen.getByPlaceholderText('Custom input')).toBeInTheDocument();
  });

  // Variant tests
  it('applies the correct variant styles', () => {
    const { container: terminalInput } = render(Input, {
      props: {
        variant: 'terminal',
        placeholder: 'Terminal input'
      }
    });
    
    const { container: glassInput } = render(Input, {
      props: {
        variant: 'glass',
        placeholder: 'Glass input'
      }
    });
    
    expect(terminalInput.querySelector('input')).toHaveClass('bg-terminal-bg');
    expect(terminalInput.querySelector('input')).toHaveClass('border-terminal-green/20');
    expect(terminalInput.querySelector('input')).toHaveClass('font-mono');
    
    expect(glassInput.querySelector('input')).toHaveClass('glass');
  });

  // Size tests
  it('applies the correct size classes', () => {
    const { container: smallInput } = render(Input, {
      props: {
        size: 'sm',
        placeholder: 'Small input'
      }
    });
    
    const { container: largeInput } = render(Input, {
      props: {
        size: 'lg',
        placeholder: 'Large input'
      }
    });
    
    expect(smallInput.querySelector('input')).toHaveClass('px-3');
    expect(smallInput.querySelector('input')).toHaveClass('text-sm');
    
    expect(largeInput.querySelector('input')).toHaveClass('px-5');
    expect(largeInput.querySelector('input')).toHaveClass('text-lg');
  });

  // Label test
  it('renders label when provided', () => {
    const { container } = render(Input, {
      props: {
        label: 'Username',
        placeholder: 'Enter username'
      }
    });
    
    expect(screen.getByText('Username')).toBeInTheDocument();
    const label = container.querySelector('label');
    expect(label).toBeInTheDocument();
    
    // Check if label is connected to input via id
    const input = container.querySelector('input');
    expect(label).toHaveAttribute('for', input.id);
  });

  // Error message test
  it('displays error message when provided', () => {
    const { container } = render(Input, {
      props: {
        error: 'This field is required',
        placeholder: 'Invalid input'
      }
    });
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByText('This field is required')).toHaveAttribute('role', 'alert');
    
    // Input should have aria-invalid attribute
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    
    // Input should have error styles
    expect(input).toHaveClass('border-red-500');
  });

  // Icon test with children prop
  it('renders with icon when provided via children', () => {
    const { container } = render(Input, {
      props: {
        placeholder: 'Search',
        children: {
          icon: () => '<svg data-testid="search-icon"></svg>'
        }
      }
    });
    
    // Check if icon container exists
    const iconContainer = container.querySelector('.absolute.left-3');
    expect(iconContainer).toBeInTheDocument();
    
    // Input should have padding left for the icon
    const input = container.querySelector('input');
    expect(input).toHaveClass('pl-10');
  });

  // User interaction tests
  it('handles value changes correctly', async () => {
    const { container } = render(Input, {
      props: {
        placeholder: 'Interactive input'
      }
    });
    
    const input = container.querySelector('input');
    await fireEvent.input(input, { target: { value: 'Hello World' } });
    
    expect(input).toHaveValue('Hello World');
  });

  it('calls event handlers correctly', async () => {
    const handleChange = vi.fn();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    const { container } = render(Input, {
      props: {
        placeholder: 'Event test',
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur
      }
    });
    
    const input = container.querySelector('input');
    
    // Test change event
    await fireEvent.input(input, { target: { value: 'New value' } });
    expect(handleChange).toHaveBeenCalled();
    
    // Test focus event
    await fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    
    // Test blur event
    await fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  // Accessibility tests
  it('has correct accessibility attributes', () => {
    const { container } = render(Input, {
      props: {
        'aria-label': 'Search box',
        placeholder: 'Search'
      }
    });
    
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('aria-label', 'Search box');
  });

  it('connects error message to input with aria-describedby', () => {
    const { container } = render(Input, {
      props: {
        error: 'Invalid format',
        placeholder: 'Error input'
      }
    });
    
    const input = container.querySelector('input');
    const errorId = input.getAttribute('aria-describedby');
    const errorMessage = container.querySelector(`#${errorId}`);
    
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Invalid format');
  });

  // Special feature tests
  it('applies glow effect when enabled', () => {
    const { container } = render(Input, {
      props: {
        glow: true,
        placeholder: 'Glowing input'
      }
    });
    
    const input = container.querySelector('input');
    expect(input).toHaveClass('focus:shadow-lg');
    expect(input).toHaveClass('focus:shadow-brand-primary/20');
  });

  it('applies liquid styles when enabled', () => {
    const { container } = render(Input, {
      props: {
        liquid: true,
        placeholder: 'Liquid input'
      }
    });
    
    const input = container.querySelector('input');
    expect(input).toHaveClass('backdrop-blur-md');
  });
});