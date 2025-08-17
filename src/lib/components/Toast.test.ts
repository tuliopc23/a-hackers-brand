import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Toast from './Toast.svelte';

// Mock timer functions
vi.useFakeTimers();

describe('Toast', () => {
  beforeEach(() => {
    vi.clearAllTimers();
  });

  // Basic rendering tests
  it('renders correctly with default props', () => {
    const { container } = render(Toast, {
      props: {
        open: true,
        title: 'Toast Title',
        children: () => 'Toast message'
      }
    });
    
    expect(screen.getByText('Toast Title')).toBeInTheDocument();
    expect(screen.getByText('Toast message')).toBeInTheDocument();
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const { container } = render(Toast, {
      props: {
        open: false,
        title: 'Hidden Toast',
        children: () => 'Hidden message'
      }
    });
    
    expect(screen.queryByText('Hidden Toast')).not.toBeInTheDocument();
    expect(container.querySelector('[role="status"]')).not.toBeInTheDocument();
  });

  // Variant tests
  it('applies the correct variant styles', () => {
    const { container: defaultToast } = render(Toast, {
      props: {
        open: true,
        variant: 'default',
        title: 'Default Toast',
        children: () => 'Default message'
      }
    });
    
    const { container: successToast } = render(Toast, {
      props: {
        open: true,
        variant: 'success',
        title: 'Success Toast',
        children: () => 'Success message'
      }
    });
    
    const { container: errorToast } = render(Toast, {
      props: {
        open: true,
        variant: 'error',
        title: 'Error Toast',
        children: () => 'Error message'
      }
    });
    
    // Check for variant-specific classes
    expect(defaultToast.querySelector('[role="status"]')).toHaveClass('bg-white/10');
    expect(successToast.querySelector('[role="status"]')).toHaveClass('bg-green-500/20');
    expect(errorToast.querySelector('[role="status"]')).toHaveClass('bg-red-500/20');
  });

  // Position tests
  it('applies the correct position classes', () => {
    const { container: topRightToast } = render(Toast, {
      props: {
        open: true,
        position: 'top-right',
        title: 'Top Right Toast',
        children: () => 'Position message'
      }
    });
    
    const { container: bottomLeftToast } = render(Toast, {
      props: {
        open: true,
        position: 'bottom-left',
        title: 'Bottom Left Toast',
        children: () => 'Position message'
      }
    });
    
    expect(topRightToast.querySelector('[role="status"]')).toHaveClass('top-0');
    expect(topRightToast.querySelector('[role="status"]')).toHaveClass('right-0');
    
    expect(bottomLeftToast.querySelector('[role="status"]')).toHaveClass('bottom-0');
    expect(bottomLeftToast.querySelector('[role="status"]')).toHaveClass('left-0');
  });

  // Duration and auto-close tests
  it('auto-closes after the specified duration', async () => {
    const handleClose = vi.fn();
    
    render(Toast, {
      props: {
        open: true,
        duration: 3000,
        onClose: handleClose,
        title: 'Auto-close Toast',
        children: () => 'This will auto-close'
      }
    });
    
    // Initially the close handler should not be called
    expect(handleClose).not.toHaveBeenCalled();
    
    // Advance timers by 3000ms (duration)
    vi.advanceTimersByTime(3000);
    
    // The close handler should now be called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not auto-close when duration is 0', async () => {
    const handleClose = vi.fn();
    
    render(Toast, {
      props: {
        open: true,
        duration: 0,
        onClose: handleClose,
        title: 'Persistent Toast',
        children: () => 'This will not auto-close'
      }
    });
    
    // Advance timers by a long time
    vi.advanceTimersByTime(10000);
    
    // The close handler should not be called
    expect(handleClose).not.toHaveBeenCalled();
  });

  // Close button tests
  it('shows close button when showClose is true', () => {
    const { container } = render(Toast, {
      props: {
        open: true,
        showClose: true,
        title: 'Closable Toast',
        children: () => 'Has close button'
      }
    });
    
    const closeButton = container.querySelector('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    
    const { container } = render(Toast, {
      props: {
        open: true,
        showClose: true,
        onClose: handleClose,
        title: 'Click Close Toast',
        children: () => 'Click to close'
      }
    });
    
    const closeButton = container.querySelector('button');
    await fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // Icon tests
  it('shows custom icon when provided', () => {
    const { container } = render(Toast, {
      props: {
        open: true,
        title: 'Icon Toast',
        children: () => 'Has custom icon',
        icon: () => '<svg data-testid="custom-icon"></svg>'
      }
    });
    
    const iconContainer = container.querySelector('.mr-3');
    expect(iconContainer).toBeInTheDocument();
  });

  // Animation tests
  it('applies animation classes when animate is true', () => {
    const { container } = render(Toast, {
      props: {
        open: true,
        animate: true,
        title: 'Animated Toast',
        children: () => 'This has animations'
      }
    });
    
    // Animation classes should be applied
    const toast = container.querySelector('[role="status"]');
    expect(toast).toHaveClass('transition-all');
    expect(toast).toHaveClass('duration-300');
  });

  // Accessibility tests
  it('has correct accessibility roles and attributes', () => {
    const { container } = render(Toast, {
      props: {
        open: true,
        title: 'Accessible Toast',
        children: () => 'Accessible message',
        variant: 'error'
      }
    });
    
    const toast = container.querySelector('[role="status"]');
    expect(toast).toBeInTheDocument();
    
    // Error toasts should have alert role for more urgency
    expect(toast).toHaveAttribute('role', 'alert');
  });

  it('respects reduceMotion preference', () => {
    const { container } = render(Toast, {
      props: {
        open: true,
        reduceMotion: true,
        title: 'Reduced Motion Toast',
        children: () => 'No animations'
      }
    });
    
    // Animation duration should be 0
    const toast = container.querySelector('[role="status"]');
    expect(toast).toHaveClass('duration-0');
  });

  // Theme-aware styling tests
  it('applies theme-aware styles for auto variant', () => {
    const { container: terminalToast } = render(Toast, {
      props: {
        open: true,
        variant: 'terminal',
        title: 'Terminal Toast',
        children: () => 'Terminal style message'
      }
    });
    
    const { container: glassToast } = render(Toast, {
      props: {
        open: true,
        variant: 'glass',
        title: 'Glass Toast',
        children: () => 'Glass style message'
      }
    });
    
    expect(terminalToast.querySelector('[role="status"]')).toHaveClass('border-terminal-green');
    expect(glassToast.querySelector('[role="status"]')).toHaveClass('backdrop-blur-md');
  });
});