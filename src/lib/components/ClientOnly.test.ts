import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ClientOnly from './ClientOnly.svelte';

// Mock for testing purposes
const TestComponent = vi.fn().mockImplementation(() => ({
  component: {
    $$render: () => '<div data-testid="client-component">Client Component</div>'
  }
}));

describe('ClientOnly', () => {
  it('renders loading skeleton when not mounted', () => {
    const { container } = render(ClientOnly, {
      props: {
        children: () => '<div>This should not render</div>'
      }
    });
    
    // Should render loading skeleton
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
    expect(screen.getByText('Loading client-side content...')).toBeInTheDocument();
  });

  it('renders fallback when provided and not mounted', () => {
    const { container } = render(ClientOnly, {
      props: {
        fallback: () => '<div data-testid="fallback">Loading...</div>',
        children: () => '<div>This should not render</div>'
      }
    });
    
    // Should render fallback instead of skeleton
    expect(container.querySelector('.animate-pulse')).not.toBeInTheDocument();
    expect(container.querySelector('[data-testid="fallback"]')).toBeInTheDocument();
  });

  it('applies custom class to the wrapper', () => {
    const { container } = render(ClientOnly, {
      props: {
        class: 'custom-class',
        children: () => '<div>This should not render</div>'
      }
    });
    
    // Custom class should be applied to skeleton
    expect(container.querySelector('.animate-pulse')).toHaveClass('custom-class');
  });

  it('applies custom style to the wrapper', () => {
    const { container } = render(ClientOnly, {
      props: {
        style: 'min-height: 200px;',
        children: () => '<div>This should not render</div>'
      }
    });
    
    // Custom style should be applied to skeleton
    expect(container.querySelector('.animate-pulse')).toHaveAttribute('style', 'min-height: 200px;');
  });

  // Note: Testing the mounted state would require more complex setup with
  // component lifecycle simulation, which is beyond the scope of this test.
  // In a real-world scenario, you'd likely use a test helper to trigger onMount.
});