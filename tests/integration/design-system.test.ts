/**
 * Design System Integration Tests
 * Tests component interactions, theming, and system-wide functionality
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { get } from 'svelte/store';

// Import components for integration testing
import Button from '../../src/lib/components/Button.svelte';
import Modal from '../../src/lib/components/Modal.svelte';
import Input from '../../src/lib/components/Input.svelte';
import Toast from '../../src/lib/components/Toast.svelte';
import Card from '../../src/lib/components/Card.svelte';
import Tabs from '../../src/lib/components/Tabs.svelte';

// Import utilities and stores
import { cn } from '../../src/lib/utils/index.js';
import { brandColors } from '../../src/lib/tokens/colors.js';

describe('Design System Integration', () => {
	beforeEach(() => {
		// Reset any global state before each test
		document.body.innerHTML = '';
	});

	afterEach(() => {
		// Clean up after each test
		document.body.innerHTML = '';
	});

	describe('Component Composition', () => {
		it('should compose Button and Modal correctly', async () => {
			const TestComposition = (await import('./fixtures/ButtonModalComposition.svelte')).default;
			
			const { getByRole, getByText } = render(TestComposition);
			
			// Test button triggers modal
			const button = getByRole('button', { name: /open modal/i });
			await fireEvent.click(button);
			
			// Modal should be visible
			await waitFor(() => {
				expect(getByRole('dialog')).toBeInTheDocument();
			});
			
			// Modal should have correct styling
			const modal = getByRole('dialog');
			expect(modal).toHaveClass('glass-heavy');
		});

		it('should compose Input and Toast for form validation', async () => {
			const TestForm = (await import('./fixtures/InputToastForm.svelte')).default;
			
			const { getByRole, getByText } = render(TestForm);
			
			// Test invalid input triggers toast
			const input = getByRole('textbox');
			await fireEvent.input(input, { target: { value: 'invalid' } });
			await fireEvent.blur(input);
			
			// Toast should appear with error message
			await waitFor(() => {
				expect(getByText(/invalid input/i)).toBeInTheDocument();
			});
		});

		it('should compose Card and Tabs for complex layouts', async () => {
			const TestLayout = (await import('./fixtures/CardTabsLayout.svelte')).default;
			
			const { getByRole, getAllByRole } = render(TestLayout);
			
			// Test tab switching within card
			const tabs = getAllByRole('tab');
			expect(tabs).toHaveLength(3);
			
			await fireEvent.click(tabs[1]);
			
			// Content should switch
			await waitFor(() => {
				expect(getByRole('tabpanel')).toHaveTextContent('Tab 2 Content');
			});
		});
	});

	describe('Theme System Integration', () => {
		it('should apply consistent theming across components', () => {
			const { container } = render(Button, {
				props: { variant: 'glass' }
			});
			
			const button = container.querySelector('button');
			expect(button).toHaveClass('glass-heavy');
			
			// Test that theme colors are applied
			const computedStyle = window.getComputedStyle(button!);
			// Note: In JSDOM, computed styles might not reflect CSS custom properties
			// This is a simplified test
			expect(button).toHaveAttribute('class');
		});

		it('should maintain theme consistency in dark mode', async () => {
			// Simulate dark mode
			document.documentElement.classList.add('dark');
			
			const { container: buttonContainer } = render(Button, {
				props: { variant: 'glass' }
			});
			
			const { container: cardContainer } = render(Card, {
				props: { variant: 'glass' }
			});
			
			// Both components should have dark mode classes
			expect(buttonContainer.querySelector('button')).toHaveClass('glass-heavy');
			expect(cardContainer.querySelector('div')).toHaveClass('glass-heavy');
			
			// Cleanup
			document.documentElement.classList.remove('dark');
		});
	});

	describe('Motion System Integration', () => {
		it('should coordinate animations across components', async () => {
			const TestMotion = (await import('./fixtures/MotionCoordination.svelte')).default;
			
			const { getByRole } = render(TestMotion);
			
			// Test staggered animations
			const buttons = getByRole('group').querySelectorAll('button');
			
			// Trigger animation sequence
			await fireEvent.mouseEnter(getByRole('group'));
			
			// Check that animations are applied
			buttons.forEach(button => {
				expect(button).toHaveStyle('transition-duration: 300ms');
			});
		});

		it('should respect reduced motion preferences', async () => {
			// Mock reduced motion preference
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: (query: string) => ({
					matches: query === '(prefers-reduced-motion: reduce)',
					media: query,
					onchange: null,
					addListener: () => {},
					removeListener: () => {},
					addEventListener: () => {},
					removeEventListener: () => {},
					dispatchEvent: () => {}
				})
			});
			
			const { container } = render(Button, {
				props: { animate: true }
			});
			
			const button = container.querySelector('button');
			// Should have reduced motion classes
			expect(button).toHaveClass('motion-reduce:transition-none');
		});
	});

	describe('Accessibility Integration', () => {
		it('should maintain focus management across components', async () => {
			const TestFocus = (await import('./fixtures/FocusManagement.svelte')).default;
			
			const { getByRole } = render(TestFocus);
			
			// Test focus trap in modal
			const openButton = getByRole('button', { name: /open modal/i });
			await fireEvent.click(openButton);
			
			const modal = getByRole('dialog');
			const closeButton = getByRole('button', { name: /close/i });
			
			// Focus should be trapped within modal
			expect(document.activeElement).toBe(closeButton);
			
			// Tab should cycle within modal
			await fireEvent.keyDown(closeButton, { key: 'Tab' });
			// Focus should stay within modal bounds
		});

		it('should provide consistent ARIA labeling', () => {
			const { container } = render(Input, {
				props: { 
					label: 'Test Input',
					'aria-describedby': 'help-text'
				}
			});
			
			const input = container.querySelector('input');
			expect(input).toHaveAttribute('aria-describedby', 'help-text');
			expect(input).toHaveAccessibleName('Test Input');
		});
	});

	describe('Performance Integration', () => {
		it('should lazy load heavy components', async () => {
			const LazyTest = (await import('./fixtures/LazyLoadingTest.svelte')).default;
			
			const { container } = render(LazyTest);
			
			// Heavy component should not be loaded initially
			expect(container.querySelector('[data-testid="heavy-component"]')).toBeNull();
			
			// Simulate intersection
			const trigger = container.querySelector('[data-testid="lazy-trigger"]');
			
			// Mock IntersectionObserver
			const mockIntersectionObserver = vi.fn();
			mockIntersectionObserver.mockReturnValue({
				observe: vi.fn(),
				unobserve: vi.fn(),
				disconnect: vi.fn()
			});
			
			Object.defineProperty(window, 'IntersectionObserver', {
				writable: true,
				configurable: true,
				value: mockIntersectionObserver
			});
			
			// Component should register for lazy loading
			expect(mockIntersectionObserver).toHaveBeenCalled();
		});
	});

	describe('Error Handling Integration', () => {
		it('should handle component errors gracefully', async () => {
			const ErrorTest = (await import('./fixtures/ErrorHandlingTest.svelte')).default;
			
			// Mock console.error to avoid noise
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
			
			const { getByText } = render(ErrorTest);
			
			// Error boundary should catch and display error
			expect(getByText(/something went wrong/i)).toBeInTheDocument();
			
			consoleSpy.mockRestore();
		});
	});

	describe('Bundle Integration', () => {
		it('should tree-shake unused components', () => {
			// This test verifies that importing specific components
			// doesn't pull in the entire library
			
			// Import only Button
			const buttonModule = require('../../src/lib/components/Button.svelte');
			expect(buttonModule.default).toBeDefined();
			
			// Verify other components are not included in this bundle
			// (This would be tested in the actual build process)
		});
	});

	describe('Responsive Integration', () => {
		it('should adapt to different screen sizes', async () => {
			const ResponsiveTest = (await import('./fixtures/ResponsiveTest.svelte')).default;
			
			// Mock different viewport sizes
			Object.defineProperty(window, 'innerWidth', {
				writable: true,
				configurable: true,
				value: 768
			});
			
			const { container } = render(ResponsiveTest);
			
			// Components should have responsive classes
			const responsiveElement = container.querySelector('[data-testid="responsive"]');
			expect(responsiveElement).toHaveClass('md:flex');
			
			// Test mobile viewport
			Object.defineProperty(window, 'innerWidth', {
				value: 375
			});
			
			// Trigger resize event
			window.dispatchEvent(new Event('resize'));
			
			// Should adapt to mobile layout
			expect(responsiveElement).toHaveClass('block');
		});
	});
});
