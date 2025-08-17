import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Modal from './Modal.svelte';
import { themeConfig } from '../stores/theme';

describe('Modal', () => {
  // Basic rendering tests
  it('renders correctly when open', () => {
    const { container } = render(Modal, {
      props: {
        open: true,
        title: 'Test Modal',
        children: () => '<p>Modal Content</p>'
      }
    });
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(container.querySelector('[role="dialog"]')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const { container } = render(Modal, {
      props: {
        open: false,
        title: 'Hidden Modal',
        children: () => '<p>Hidden Content</p>'
      }
    });
    
    expect(container.querySelector('[role="dialog"]')).not.toBeInTheDocument();
    expect(screen.queryByText('Hidden Modal')).not.toBeInTheDocument();
  });

  // Variant tests
  it('applies the correct variant styles', () => {
    const { container: terminalModal } = render(Modal, {
      props: {
        open: true,
        variant: 'terminal',
        title: 'Terminal Modal',
        children: () => '<p>Terminal Style</p>'
      }
    });
    
    const { container: glassModal } = render(Modal, {
      props: {
        open: true,
        variant: 'glass',
        title: 'Glass Modal',
        children: () => '<p>Glass Style</p>'
      }
    });
    
    // Terminal variant should have terminal-specific styles
    expect(terminalModal.querySelector('[role="dialog"]')).toHaveClass('border-terminal-green');
    
    // Glass variant should have glass-specific styles
    expect(glassModal.querySelector('[role="dialog"]')).toHaveClass('glass-medium');
  });

  // Close button test
  it('shows close button when specified', () => {
    const { container } = render(Modal, {
      props: {
        open: true,
        showClose: true,
        title: 'Closable Modal',
        children: () => '<p>Closable Content</p>'
      }
    });
    
    const closeButton = container.querySelector('button[aria-label="Close"]');
    expect(closeButton).toBeInTheDocument();
  });

  // Size tests
  it('applies the correct size classes', () => {
    const { container: smallModal } = render(Modal, {
      props: {
        open: true,
        size: 'sm',
        title: 'Small Modal',
        children: () => '<p>Small Content</p>'
      }
    });
    
    const { container: largeModal } = render(Modal, {
      props: {
        open: true,
        size: 'lg',
        title: 'Large Modal',
        children: () => '<p>Large Content</p>'
      }
    });
    
    // Check for size-specific classes
    const smallDialog = smallModal.querySelector('[role="dialog"]');
    const largeDialog = largeModal.querySelector('[role="dialog"]');
    
    expect(smallDialog).toHaveClass('max-w-sm');
    expect(largeDialog).toHaveClass('max-w-3xl');
  });

  // Overlay click test
  it('closes on overlay click when closeOnOverlayClick is true', async () => {
    const handleClose = vi.fn();
    
    const { container } = render(Modal, {
      props: {
        open: true,
        title: 'Overlay Close Modal',
        closeOnOverlayClick: true,
        onClose: handleClose,
        children: () => '<p>Click outside to close</p>'
      }
    });
    
    // Find the overlay (backdrop) element and click it
    const overlay = container.querySelector('.fixed.inset-0.bg-black.bg-opacity-50');
    await fireEvent.click(overlay);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // Escape key test
  it('closes on Escape key when closeOnEsc is true', async () => {
    const handleClose = vi.fn();
    
    render(Modal, {
      props: {
        open: true,
        title: 'Escape Close Modal',
        closeOnEsc: true,
        onClose: handleClose,
        children: () => '<p>Press Escape to close</p>'
      }
    });
    
    // Simulate pressing the Escape key
    await fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  // Close button click test
  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    
    const { container } = render(Modal, {
      props: {
        open: true,
        showClose: true,
        title: 'Close Button Modal',
        onClose: handleClose,
        children: () => '<p>Click X to close</p>'
      }
    });
    
    const closeButton = container.querySelector('button[aria-label="Close"]');
    await fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  
  // Theme-aware variant test
  it('respects current theme for auto variant', () => {
    // Set a known theme first
    themeConfig.set({ theme: 'terminal', systemTheme: 'terminal' });
    
    const { container, rerender } = render(Modal, {
      props: {
        open: true,
        variant: 'auto',
        title: 'Theme-aware Modal',
        children: () => '<p>Theme-aware Content</p>'
      }
    });
    
    // Should have terminal styles initially
    expect(container.querySelector('[role="dialog"]')).toHaveClass('border-terminal-green');
    
    // Change theme and check if styles update
    themeConfig.set({ theme: 'bubbleTea', systemTheme: 'bubbleTea' });
    
    rerender({
      open: true,
      variant: 'auto',
      title: 'Theme-aware Modal',
      children: () => '<p>Theme-aware Content</p>'
    });
    
    // Should have bubble tea styles now
    expect(container.querySelector('[role="dialog"]')).toHaveClass('bubble-tea');
    
    // Reset theme for other tests
    themeConfig.set({ theme: 'terminal', systemTheme: 'terminal' });
  });
});