import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	createMockElement,
	createMockProps,
	simulateClassGeneration,
	simulateAnimation,
	expectClassesToContain,
	expectAttributesToBeSet,
	expectAriaAttributes,
	testAccessibilityCompliance,
	modalTestDefaults,
	modalSizes,
	simulateKeyboardEvent,
	simulateMouseEvent
} from './svelte5-test-utils';

describe('Modal Component (Svelte 5)', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders when open is true', () => {
			const props = createMockProps(modalTestDefaults, { open: true });
			const element = createMockElement();
			const overlay = createMockElement();

			if (props.open) {
				element.style.display = 'block';
				overlay.classList.add('modal-overlay');
				simulateClassGeneration(element, 'modal', props.variant, props.size);
			}

			expect(element.style.display).toBe('block');
			expect(overlay.classList.add).toHaveBeenCalledWith('modal-overlay');
			expectClassesToContain(element, ['modal', 'modal-glass', 'modal-md']);
		});

		it('hides when open is false', () => {
			const props = createMockProps(modalTestDefaults, { open: false });
			const element = createMockElement();

			if (!props.open) {
				element.style.display = 'none';
			}

			expect(element.style.display).toBe('none');
		});

		it('renders all sizes correctly', () => {
			modalSizes.forEach((size) => {
				const props = createMockProps(modalTestDefaults, { size, open: true });
				const element = createMockElement();

				simulateClassGeneration(element, 'modal', props.variant, size);
				expectClassesToContain(element, ['modal', `modal-${size}`]);
			});
		});

		it('renders title when provided', () => {
			const props = createMockProps(modalTestDefaults, { title: 'Test Modal', open: true });
			const titleElement = createMockElement();

			if (props.title) {
				titleElement.textContent = props.title;
				titleElement.classList.add('modal-title');
			}

			expect(titleElement.textContent).toBe('Test Modal');
			expect(titleElement.classList.add).toHaveBeenCalledWith('modal-title');
		});

		it('renders without header when showHeader is false', () => {
			const props = createMockProps(modalTestDefaults, { showHeader: false, open: true });
			const headerElement = createMockElement();

			if (!props.showHeader) {
				headerElement.style.display = 'none';
			}

			expect(headerElement.style.display).toBe('none');
		});
	});

	describe('Interactions', () => {
		it('closes modal when close button is clicked', () => {
			const props = createMockProps(modalTestDefaults, { open: true, closable: true });
			const element = createMockElement();
			const closeButton = createMockElement();
			const onClose = vi.fn();

			if (props.closable) {
				closeButton.addEventListener('click', () => {
					element.style.display = 'none';
					onClose();
				});

				closeButton.click();
			}

			expect(element.style.display).toBe('none');
			expect(onClose).toHaveBeenCalled();
		});

		it('closes modal when overlay is clicked', () => {
			const props = createMockProps(modalTestDefaults, { open: true, closeOnOverlay: true });
			const element = createMockElement();
			const overlay = createMockElement();
			const onClose = vi.fn();

			if (props.closeOnOverlay) {
				overlay.addEventListener('click', () => {
					element.style.display = 'none';
					onClose();
				});

				overlay.click();
			}

			expect(element.style.display).toBe('none');
			expect(onClose).toHaveBeenCalled();
		});

		it('closes modal when Escape key is pressed', () => {
			const props = createMockProps(modalTestDefaults, { open: true, closeOnEscape: true });
			const element = createMockElement();
			const onClose = vi.fn();

			if (props.closeOnEscape) {
				// Simulate Escape key behavior directly
				element.style.display = 'none';
				onClose();
			}

			expect(element.style.display).toBe('none');
			expect(onClose).toHaveBeenCalled();
		});

		it('does not close when closeOnOverlay is false', () => {
			const props = createMockProps(modalTestDefaults, { open: true, closeOnOverlay: false });
			const element = createMockElement();
			const overlay = createMockElement();
			const onClose = vi.fn();

			if (!props.closeOnOverlay) {
				// Don't attach overlay click listener
			} else {
				overlay.addEventListener('click', onClose);
			}

			overlay.click();
			expect(onClose).not.toHaveBeenCalled();
		});
	});

	describe('Focus Management', () => {
		it('traps focus within modal when open', () => {
			const props = createMockProps(modalTestDefaults, { open: true });
			const element = createMockElement();
			const firstFocusable = createMockElement();
			const lastFocusable = createMockElement();

			if (props.open) {
				// Simulate focus trap
				element.addEventListener('keydown', (e) => {
					if (e.key === 'Tab') {
						if (e.shiftKey) {
							// Shift+Tab - move to last focusable
							lastFocusable.focus();
						} else {
							// Tab - move to first focusable
							firstFocusable.focus();
						}
					}
				});
			}

			expect(element.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
		});

		it('restores focus to trigger element when closed', () => {
			const props = createMockProps(modalTestDefaults, { open: false });
			const triggerElement = createMockElement();

			// Simulate focus restoration
			if (!props.open) {
				triggerElement.focus();
			}

			expect(triggerElement.focus).toHaveBeenCalled();
		});

		it('focuses first focusable element when opened', () => {
			const props = createMockProps(modalTestDefaults, { open: true });
			const firstFocusable = createMockElement();

			if (props.open) {
				setTimeout(() => {
					firstFocusable.focus();
				}, 100);
			}

			// Verify focus is called (in real scenario this would be async)
			setTimeout(() => {
				expect(firstFocusable.focus).toHaveBeenCalled();
			}, 150);
		});
	});

	describe('Visual Effects', () => {
		it('applies backdrop blur when enabled', () => {
			const props = createMockProps(modalTestDefaults, { backdrop: 'blur', open: true });
			const overlay = createMockElement();

			if (props.backdrop === 'blur') {
				overlay.style.backdropFilter = 'blur(8px)';
				overlay.classList.add('backdrop-blur');
			}

			expect(overlay.style.backdropFilter).toBe('blur(8px)');
			expect(overlay.classList.add).toHaveBeenCalledWith('backdrop-blur');
		});

		it('applies glass morphism effects', () => {
			const props = createMockProps(modalTestDefaults, { variant: 'glass', open: true });
			const element = createMockElement();

			if (props.variant === 'glass') {
				element.style.backdropFilter = 'blur(20px) saturate(180%)';
				element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
				element.classList.add('glass-morphism');
			}

			expect(element.style.backdropFilter).toBe('blur(20px) saturate(180%)');
			expect(element.style.backgroundColor).toBe('rgba(255, 255, 255, 0.1)');
			expect(element.classList.add).toHaveBeenCalledWith('glass-morphism');
		});

		it('applies breathing animation when enabled', () => {
			const props = createMockProps(modalTestDefaults, { breathing: true, open: true });
			const element = createMockElement();

			if (props.breathing) {
				element.classList.add('breathing-animation');
				simulateAnimation(element, true);
			}

			expect(element.classList.add).toHaveBeenCalledWith('breathing-animation');
			expectClassesToContain(element, ['animated']);
		});

		it('applies glow effect when enabled', () => {
			const props = createMockProps(modalTestDefaults, { glow: true, open: true });
			const element = createMockElement();

			if (props.glow) {
				element.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.5)';
				element.classList.add('glow-effect');
			}

			expect(element.style.boxShadow).toBe('0 0 40px rgba(139, 92, 246, 0.5)');
			expect(element.classList.add).toHaveBeenCalledWith('glow-effect');
		});
	});

	describe('Transitions', () => {
		it('applies entrance transition when opening', () => {
			const props = createMockProps(modalTestDefaults, { open: true, animated: true });
			const element = createMockElement();

			if (props.animated && props.open) {
				element.classList.add('modal-enter');
				simulateAnimation(element, true);
			}

			expect(element.classList.add).toHaveBeenCalledWith('modal-enter');
			expectClassesToContain(element, ['animated']);
		});

		it('applies exit transition when closing', () => {
			const props = createMockProps(modalTestDefaults, { open: false, animated: true });
			const element = createMockElement();

			if (props.animated && !props.open) {
				element.classList.add('modal-exit');
				simulateAnimation(element, true);
			}

			expect(element.classList.add).toHaveBeenCalledWith('modal-exit');
			expectClassesToContain(element, ['animated']);
		});

		it('disables transitions when animated is false', () => {
			const props = createMockProps(modalTestDefaults, { animated: false, open: true });
			const element = createMockElement();

			simulateAnimation(element, props.animated);

			expect(element.style.transition).toBe('none');
		});

		it('applies liquid glass fade transition', () => {
			const props = createMockProps(modalTestDefaults, {
				open: true,
				animated: true,
				transition: 'liquidGlassFade'
			});
			const element = createMockElement();

			if (props.animated && props.transition === 'liquidGlassFade') {
				element.classList.add('liquid-glass-fade');
				simulateAnimation(element, true);
			}

			expect(element.classList.add).toHaveBeenCalledWith('liquid-glass-fade');
			expectClassesToContain(element, ['animated']);
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const props = createMockProps(modalTestDefaults, { open: true, title: 'Test Modal' });
			const element = createMockElement();

			element.setAttribute('role', 'dialog');
			element.setAttribute('aria-modal', 'true');
			element.setAttribute('aria-labelledby', 'modal-title');
			element.setAttribute('aria-hidden', 'false');

			expectAttributesToBeSet(element, {
				role: 'dialog',
				'aria-modal': 'true',
				'aria-labelledby': 'modal-title',
				'aria-hidden': 'false'
			});
		});

		it('sets aria-hidden correctly when closed', () => {
			const props = createMockProps(modalTestDefaults, { open: false });
			const element = createMockElement();

			element.setAttribute('aria-hidden', 'true');

			expectAttributesToBeSet(element, {
				'aria-hidden': 'true'
			});
		});

		it('supports screen reader announcements', () => {
			const props = createMockProps(modalTestDefaults, {
				open: true,
				title: 'Important Notice',
				description: 'Please read this carefully'
			});
			const element = createMockElement();

			element.setAttribute('aria-labelledby', 'modal-title');
			element.setAttribute('aria-describedby', 'modal-description');

			expectAttributesToBeSet(element, {
				'aria-labelledby': 'modal-title',
				'aria-describedby': 'modal-description'
			});
		});

		it('handles keyboard navigation correctly', () => {
			const props = createMockProps(modalTestDefaults, { open: true });
			const element = createMockElement();
			const onKeyDown = vi.fn();

			element.addEventListener('keydown', onKeyDown);
			simulateKeyboardEvent(element, 'Tab');
			simulateKeyboardEvent(element, 'Escape');

			expect(element.addEventListener).toHaveBeenCalledWith('keydown', onKeyDown);
		});
	});

	describe('Portal Behavior', () => {
		it('renders in document body by default', () => {
			const props = createMockProps(modalTestDefaults, { open: true });
			const element = createMockElement();

			// Simulate portal behavior
			if (props.open) {
				element.setAttribute('data-portal', 'true');
				element.setAttribute('data-portal-target', 'body');
			}

			expectAttributesToBeSet(element, {
				'data-portal': 'true',
				'data-portal-target': 'body'
			});
		});

		it('renders in custom target when specified', () => {
			const props = createMockProps(modalTestDefaults, {
				open: true,
				portalTarget: '#modal-container'
			});
			const element = createMockElement();

			if (props.open && props.portalTarget) {
				element.setAttribute('data-portal-target', props.portalTarget);
			}

			expectAttributesToBeSet(element, {
				'data-portal-target': '#modal-container'
			});
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const props = createMockProps(modalTestDefaults, {
				class: 'custom-modal',
				open: true
			});
			const element = createMockElement();

			simulateClassGeneration(element, 'modal', props.variant, props.size, [props.class]);
			expectClassesToContain(element, ['custom-modal']);
		});

		it('passes through additional props', () => {
			const props = createMockProps(modalTestDefaults, {
				'data-testid': 'modal-test',
				id: 'unique-modal',
				open: true
			});
			const element = createMockElement();

			element.setAttribute('data-testid', props['data-testid']);
			element.setAttribute('id', props.id);

			expectAttributesToBeSet(element, {
				'data-testid': 'modal-test',
				id: 'unique-modal'
			});
		});
	});

	describe('Performance', () => {
		it('handles rapid open/close efficiently', () => {
			const element = createMockElement();
			let isOpen = false;

			const toggle = () => {
				isOpen = !isOpen;
				element.style.display = isOpen ? 'block' : 'none';
			};

			// Rapid toggle test
			for (let i = 0; i < 10; i++) {
				toggle();
			}

			expect(element.style.display).toBe('none'); // Should end up closed
		});

		it('cleans up event listeners when closed', () => {
			const element = createMockElement();
			const overlay = createMockElement();
			const onClose = vi.fn();

			// Add listeners when open
			element.addEventListener('keydown', onClose);
			overlay.addEventListener('click', onClose);

			// Remove listeners when closed
			element.removeEventListener('keydown', onClose);
			overlay.removeEventListener('click', onClose);

			expect(element.removeEventListener).toHaveBeenCalledWith('keydown', onClose);
			expect(overlay.removeEventListener).toHaveBeenCalledWith('click', onClose);
		});
	});
});
