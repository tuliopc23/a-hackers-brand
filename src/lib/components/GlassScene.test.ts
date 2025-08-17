import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import GlassScene from './GlassScene.svelte';

// Mock ThrelteCanvas to avoid WebGL issues in tests
vi.mock('./ThrelteCanvas.svelte', () => ({
  default: vi.fn().mockImplementation(() => ({
    component: {
      $$render: () => '<div data-testid="mocked-threlte-canvas">Mocked ThrelteCanvas</div>'
    }
  }))
}));

describe('GlassScene', () => {
  it('renders with default props', () => {
    const { container } = render(GlassScene, {
      props: {}
    });
    
    // Should render a div with correct class
    expect(container.querySelector('.glass-scene-container')).toBeInTheDocument();
    
    // Should use ClientOnly internally (check structure)
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('relative');
  });

  it('applies custom class', () => {
    const { container } = render(GlassScene, {
      props: {
        class: 'custom-class'
      }
    });
    
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('passes intensity props correctly', () => {
    const { container } = render(GlassScene, {
      props: {
        intensity: 2.5,
        distortion: 1.5,
        speed: 0.5
      }
    });
    
    // These props are passed to internal components,
    // but we can't easily verify in this unit test.
    // Full component tests would require integration testing
    // with actual WebGL context
    
    // Verify container renders at minimum
    expect(container.querySelector('.glass-scene-container')).toBeInTheDocument();
  });

  it('applies performance mode settings', () => {
    const { container } = render(GlassScene, {
      props: {
        performanceMode: 'high',
        quality: 'low'
      }
    });
    
    // These settings affect internal ThrelteCanvas configuration
    // We're primarily testing that the component renders without errors
    expect(container.querySelector('.glass-scene-container')).toBeInTheDocument();
  });

  it('handles fullscreen prop', () => {
    const { container } = render(GlassScene, {
      props: {
        fullscreen: true
      }
    });
    
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('absolute');
    expect(wrapper).toHaveClass('inset-0');
  });

  // Note: Interaction testing with actual ThrelteCanvas would require
  // a more complex setup with jsdom-canvas and WebGL mocking
});