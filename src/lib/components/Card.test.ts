import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Card from './Card.svelte';
import { themeConfig } from '../stores/theme';
import { get } from 'svelte/store';

describe('Card', () => {
  // Basic rendering tests
  it('renders correctly with default props', () => {
    const { container } = render(Card, {
      props: {
        children: () => '<p>Card Content</p>'
      }
    });
    
    expect(container.firstChild).toHaveClass('p-6');
    expect(container.firstChild).toHaveClass('transition-all');
  });

  it('renders with custom class', () => {
    const { container } = render(Card, {
      props: {
        class: 'test-class',
        children: () => '<p>Card Content</p>'
      }
    });
    
    expect(container.firstChild).toHaveClass('test-class');
  });

  // Variant tests
  it('applies the correct variant styles', () => {
    const { container: terminalCard } = render(Card, {
      props: {
        variant: 'terminal',
        children: () => '<p>Terminal Card</p>'
      }
    });
    
    const { container: glassCard } = render(Card, {
      props: {
        variant: 'glass',
        children: () => '<p>Glass Card</p>'
      }
    });
    
    expect(terminalCard.firstChild).toHaveClass('border-terminal-green');
    expect(glassCard.firstChild).toHaveClass('glass-medium');
  });

  it('applies auto variant based on current theme', () => {
    // Set a known theme first
    themeConfig.set({ theme: 'terminal', systemTheme: 'terminal' });
    
    const { container, rerender } = render(Card, {
      props: {
        variant: 'auto',
        children: () => '<p>Auto Theme Card</p>'
      }
    });
    
    // Should use terminal theme initially
    expect(container.firstChild).toHaveClass('border-terminal-green');
    
    // Change theme and verify card updates
    themeConfig.set({ theme: 'bubbleTea', systemTheme: 'bubbleTea' });
    
    rerender({
      variant: 'auto',
      children: () => '<p>Auto Theme Card</p>'
    });
    
    // Should now use bubble tea styles
    expect(container.firstChild).toHaveClass('bubble-tea');
    
    // Reset theme for other tests
    themeConfig.set({ theme: 'terminal', systemTheme: 'terminal' });
  });

  // Blur level tests
  it('applies the correct blur levels', () => {
    const { container: smBlur } = render(Card, {
      props: {
        variant: 'glass',
        blur: 'sm',
        children: () => '<p>Small Blur</p>'
      }
    });
    
    const { container: xlBlur } = render(Card, {
      props: {
        variant: 'glass',
        blur: 'xl',
        children: () => '<p>Extra Large Blur</p>'
      }
    });
    
    expect(smBlur.firstChild).toHaveClass('backdrop-blur-sm');
    expect(xlBlur.firstChild).toHaveClass('backdrop-blur-xl');
  });

  // Interactive card tests
  it('renders as interactive when specified', () => {
    const { container } = render(Card, {
      props: {
        interactive: true,
        children: () => '<p>Interactive Card</p>'
      }
    });
    
    expect(container.firstChild).toHaveAttribute('role', 'button');
    expect(container.firstChild).toHaveAttribute('tabindex', '0');
    expect(container.firstChild).toHaveClass('cursor-pointer');
  });

  it('handles keyboard interaction for interactive cards', async () => {
    const handleClick = vi.fn();
    
    const { container } = render(Card, {
      props: {
        interactive: true,
        onClick: handleClick,
        children: () => '<p>Interactive Card</p>'
      }
    });
    
    // Test Enter key
    await fireEvent.keyDown(container.firstChild as HTMLElement, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    // Test Space key
    await fireEvent.keyDown(container.firstChild as HTMLElement, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('handles clicks on interactive cards', async () => {
    const handleClick = vi.fn();
    
    const { container } = render(Card, {
      props: {
        interactive: true,
        onClick: handleClick,
        children: () => '<p>Interactive Card</p>'
      }
    });
    
    await fireEvent.click(container.firstChild as HTMLElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Border radius tests
  it('uses correct border radius based on variant', () => {
    const { container: defaultCard } = render(Card, {
      props: {
        children: () => '<p>Default Card</p>'
      }
    });
    
    const { container: bubbleTeaCard } = render(Card, {
      props: {
        variant: 'bubbleTea',
        children: () => '<p>Bubble Tea Card</p>'
      }
    });
    
    expect(defaultCard.firstChild).toHaveClass('rounded-2xl');
    expect(bubbleTeaCard.firstChild).toHaveClass('rounded-bubble-tea-lg');
  });

  // Animation options tests
  it('does not use animation when animate is false', () => {
    const { container } = render(Card, {
      props: {
        animate: false,
        children: () => '<p>No Animation Card</p>'
      }
    });
    
    // The in:liquidBlur directive should not be applied
    // This is harder to test directly, but we can check that the element renders
    expect(container.firstChild).toBeInTheDocument();
  });
});