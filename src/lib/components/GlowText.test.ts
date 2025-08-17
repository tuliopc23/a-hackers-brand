import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import GlowText from './GlowText.svelte';
import { themeConfig } from '../stores/theme';

describe('GlowText', () => {
  // Basic rendering tests
  it('renders correctly with default props', () => {
    const { container } = render(GlowText, {
      props: {
        children: () => 'Glowing Text'
      }
    });
    
    expect(screen.getByText('Glowing Text')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('glow-text');
  });

  it('renders with custom class', () => {
    const { container } = render(GlowText, {
      props: {
        class: 'custom-class',
        children: () => 'Custom Glow'
      }
    });
    
    expect(container.firstChild).toHaveClass('custom-class');
    expect(screen.getByText('Custom Glow')).toBeInTheDocument();
  });

  // Color tests
  it('applies the correct color classes', () => {
    const { container: pinkText } = render(GlowText, {
      props: {
        color: 'pink',
        children: () => 'Pink Glow'
      }
    });
    
    const { container: greenText } = render(GlowText, {
      props: {
        color: 'matrix',
        children: () => 'Matrix Green'
      }
    });
    
    expect(pinkText.firstChild).toHaveClass('glow-pink');
    expect(greenText.firstChild).toHaveClass('glow-matrix');
  });

  // Intensity tests
  it('applies the correct intensity classes', () => {
    const { container: subtleGlow } = render(GlowText, {
      props: {
        intensity: 'subtle',
        children: () => 'Subtle Glow'
      }
    });
    
    const { container: intenseGlow } = render(GlowText, {
      props: {
        intensity: 'intense',
        children: () => 'Intense Glow'
      }
    });
    
    expect(subtleGlow.firstChild).toHaveClass('glow-subtle');
    expect(intenseGlow.firstChild).toHaveClass('glow-intense');
  });

  // Variant tests
  it('applies variant-specific styles', () => {
    const { container: terminalGlow } = render(GlowText, {
      props: {
        variant: 'terminal',
        children: () => 'Terminal Glow'
      }
    });
    
    const { container: glassGlow } = render(GlowText, {
      props: {
        variant: 'glass',
        children: () => 'Glass Glow'
      }
    });
    
    // Terminal variant should have more tech-focused styles
    expect(terminalGlow.firstChild).toHaveClass('font-mono');
    
    // Glass variant should have softer styles
    expect(glassGlow.firstChild).toHaveClass('glow-glass');
  });

  // Pulse animation test
  it('applies pulse animation when specified', () => {
    const { container } = render(GlowText, {
      props: {
        pulse: true,
        children: () => 'Pulsing Text'
      }
    });
    
    expect(container.firstChild).toHaveClass('animate-pulse-glow');
  });

  // Element type test
  it('renders with the correct HTML element', () => {
    const { container: defaultElement } = render(GlowText, {
      props: {
        children: () => 'Default Span'
      }
    });
    
    const { container: h1Element } = render(GlowText, {
      props: {
        as: 'h1',
        children: () => 'Heading'
      }
    });
    
    const { container: pElement } = render(GlowText, {
      props: {
        as: 'p',
        children: () => 'Paragraph'
      }
    });
    
    expect(defaultElement.firstChild.nodeName).toBe('SPAN');
    expect(h1Element.firstChild.nodeName).toBe('H1');
    expect(pElement.firstChild.nodeName).toBe('P');
  });

  // Responsive handling test
  it('applies responsive classes when specified', () => {
    const { container } = render(GlowText, {
      props: {
        responsive: true,
        children: () => 'Responsive Text'
      }
    });
    
    expect(container.firstChild).toHaveClass('text-responsive');
  });

  // Font weight test
  it('applies correct font weight', () => {
    const { container: boldText } = render(GlowText, {
      props: {
        weight: 'bold',
        children: () => 'Bold Text'
      }
    });
    
    const { container: normalText } = render(GlowText, {
      props: {
        weight: 'normal',
        children: () => 'Normal Text'
      }
    });
    
    expect(boldText.firstChild).toHaveClass('font-bold');
    expect(normalText.firstChild).toHaveClass('font-normal');
  });

  // Theme-aware tests
  it('respects current theme for auto variant', () => {
    // Set a known theme first
    themeConfig.set({ theme: 'terminal', systemTheme: 'terminal' });
    
    const { container, rerender } = render(GlowText, {
      props: {
        variant: 'auto',
        children: () => 'Theme-aware Text'
      }
    });
    
    // Should have terminal styles initially
    expect(container.firstChild).toHaveClass('font-mono');
    
    // Change theme and check if styles update
    themeConfig.set({ theme: 'bubbleTea', systemTheme: 'bubbleTea' });
    
    rerender({
      variant: 'auto',
      children: () => 'Theme-aware Text'
    });
    
    // Should have bubble tea styles now
    expect(container.firstChild).toHaveClass('glow-glass');
    
    // Reset theme for other tests
    themeConfig.set({ theme: 'terminal', systemTheme: 'terminal' });
  });
});