import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import Button from './Button.svelte';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(Button, {
      children: () => 'Click me'
    });
    
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
    expect(screen.getByRole('button')).toHaveClass('inline-flex');
  });

  it('renders with custom class', () => {
    render(Button, {
      props: { class: 'custom-class' },
      children: () => 'Custom Button'
    });
    
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('applies the correct variant styles', () => {
    const variants = ['terminal', 'glass', 'liquid'] as const;
    
    variants.forEach(variant => {
      const { unmount } = render(Button, {
        props: { variant },
        children: () => `${variant} Button`
      });
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass(variant);
      
      unmount();
    });
  });

  it('applies the correct size classes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    
    sizes.forEach(size => {
      const { unmount } = render(Button, {
        props: { size },
        children: () => `${size} Button`
      });
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass(size);
      
      unmount();
    });
  });

  it('shows loading state correctly', () => {
    render(Button, {
      props: { loading: true },
      children: () => 'Loading Button'
    });
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('loading');
    expect(button).toBeDisabled();
  });

  it('handles disabled state', () => {
    render(Button, {
      props: { disabled: true },
      children: () => 'Disabled Button'
    });
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  it('handles clicks correctly', async () => {
    const handleClick = vi.fn();
    
    render(Button, {
      props: { onclick: handleClick },
      children: () => 'Clickable Button'
    });
    
    const button = screen.getByRole('button');
    await fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', async () => {
    const handleClick = vi.fn();
    
    render(Button, {
      props: { 
        disabled: true,
        onclick: handleClick 
      },
      children: () => 'Disabled Button'
    });
    
    const button = screen.getByRole('button');
    await fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('has correct accessibility attributes', () => {
    render(Button, {
      props: { 
        'aria-label': 'Custom label',
        type: 'submit'
      },
      children: () => 'Submit Button'
    });
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
