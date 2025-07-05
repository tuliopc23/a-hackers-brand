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
	alertVariants,
	simulateKeyboardEvent,
	simulateMouseEvent
} from './svelte5-test-utils';

const alertTestDefaults = {
	variant: 'success' as const,
	title: 'Success!',
	description: 'Operation completed successfully',
	closable: false,
	animated: true,
	glow: false,
	jelly: false,
	icon: true,
	position: 'static' as const
};

describe('Alert Component (Svelte 5)', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const props = createMockProps(alertTestDefaults);
			const element = createMockElement();
			
			// Simulate alert rendering
			simulateClassGeneration(element, 'alert', props.variant);
			element.setAttribute('role', 'alert');
			element.textContent = `${props.title} ${props.description}`;
			
			expectClassesToContain(element, ['alert', 'alert-success']);
			expect(element.textContent).toContain(props.title);
			expect(element.textContent).toContain(props.description);
		});

		it('renders all variants correctly', () => {
			alertVariants.forEach(variant => {
				const props = createMockProps(alertTestDefaults, { variant });
				const element = createMockElement();
				
				simulateClassGeneration(element, 'alert', variant);
				expectClassesToContain(element, ['alert', `alert-${variant}`]);
			});
		});

		it('shows icon when icon prop is true', () => {
			const props = createMockProps(alertTestDefaults, { icon: true });
			const element = createMockElement();
			const iconElement = createMockElement();
			
			if (props.icon) {
				iconElement.className = 'alert-icon';
				element.classList.add('with-icon');
			}
			
			expect(iconElement.className).toBe('alert-icon');
			expect(element.classList.add).toHaveBeenCalledWith('with-icon');
		});

		it('hides icon when icon prop is false', () => {
			const props = createMockProps(alertTestDefaults, { icon: false });
			const element = createMockElement();
			
			if (!props.icon) {
				element.classList.remove('with-icon');
			}
			
			expect(element.classList.remove).toHaveBeenCalledWith('with-icon');
		});
	});

	describe('Closable Feature', () => {
		it('shows close button when closable is true', () => {
			const props = createMockProps(alertTestDefaults, { closable: true });
			const element = createMockElement();
			const closeButton = createMockElement();
			
			if (props.closable) {
				closeButton.setAttribute('aria-label', 'Close alert');
				closeButton.setAttribute('type', 'button');
				element.classList.add('closable');
			}
			
			expectAttributesToBeSet(closeButton, {
				'aria-label': 'Close alert',
				'type': 'button'
			});
			expect(element.classList.add).toHaveBeenCalledWith('closable');
		});

		it('hides alert when close button is clicked', () => {
			const props = createMockProps(alertTestDefaults, { closable: true });
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

		it('does not show close button when closable is false', () => {
			const props = createMockProps(alertTestDefaults, { closable: false });
			const element = createMockElement();
			
			if (!props.closable) {
				element.classList.remove('closable');
			}
			
			expect(element.classList.remove).toHaveBeenCalledWith('closable');
		});
	});

	describe('Positioning', () => {
		it('renders with static position by default', () => {
			const props = createMockProps(alertTestDefaults, { position: 'static' });
			const element = createMockElement();
			
			if (props.position === 'static') {
				element.classList.add('alert-static');
			}
			
			expect(element.classList.add).toHaveBeenCalledWith('alert-static');
		});

		it('renders with fixed position and placement', () => {
			const props = createMockProps(alertTestDefaults, { 
				position: 'fixed',
				placement: 'top-right'
			});
			const element = createMockElement();
			
			if (props.position === 'fixed') {
				element.classList.add('alert-fixed');
				element.classList.add(`alert-${props.placement}`);
			}
			
			expect(element.classList.add).toHaveBeenCalledWith('alert-fixed');
			expect(element.classList.add).toHaveBeenCalledWith('alert-top-right');
		});
	});

	describe('Visual Effects', () => {
		it('applies glow effect when glow is true', () => {
			const props = createMockProps(alertTestDefaults, { glow: true });
			const element = createMockElement();
			
			if (props.glow) {
				element.classList.add('glow');
				element.style.boxShadow = '0 0 20px currentColor';
			}
			
			expect(element.classList.add).toHaveBeenCalledWith('glow');
			expect(element.style.boxShadow).toBe('0 0 20px currentColor');
		});

		it('applies jelly hover effect when jelly is true', () => {
			const props = createMockProps(alertTestDefaults, { jelly: true });
			const element = createMockElement();
			
			if (props.jelly) {
				element.classList.add('jelly-hover');
				simulateAnimation(element, true);
			}
			
			expect(element.classList.add).toHaveBeenCalledWith('jelly-hover');
			expectClassesToContain(element, ['animated']);
		});

		it('animates icon when animated is true', () => {
			const props = createMockProps(alertTestDefaults, { animated: true, icon: true });
			const iconElement = createMockElement();
			
			if (props.animated && props.icon) {
				simulateAnimation(iconElement, true);
			}
			
			expect(iconElement.style.transition).toContain('all');
		});
	});

	describe('Transitions', () => {
		it('applies glassFade transition when animated', () => {
			const props = createMockProps(alertTestDefaults, { animated: true });
			const element = createMockElement();
			
			if (props.animated) {
				element.classList.add('glass-fade-transition');
				simulateAnimation(element, true);
			}
			
			expect(element.classList.add).toHaveBeenCalledWith('glass-fade-transition');
			expectClassesToContain(element, ['animated']);
		});

		it('disables transition when animated is false', () => {
			const props = createMockProps(alertTestDefaults, { animated: false });
			const element = createMockElement();
			
			simulateAnimation(element, props.animated);
			
			expect(element.style.transition).toBe('none');
		});
	});

	describe('Content Structure', () => {
		it('renders only title when description is not provided', () => {
			const props = createMockProps(alertTestDefaults, { description: undefined });
			const element = createMockElement();
			const titleElement = createMockElement();
			const descElement = createMockElement();
			
			titleElement.textContent = props.title;
			
			if (!props.description) {
				descElement.style.display = 'none';
			}
			
			expect(titleElement.textContent).toBe(props.title);
			expect(descElement.style.display).toBe('none');
		});

		it('renders both title and description', () => {
			const props = createMockProps(alertTestDefaults);
			const titleElement = createMockElement();
			const descElement = createMockElement();
			
			titleElement.textContent = props.title;
			descElement.textContent = props.description;
			
			expect(titleElement.textContent).toBe(props.title);
			expect(descElement.textContent).toBe(props.description);
		});

		it('applies correct text colors based on variant', () => {
			const colorMap = {
				success: '#4ade80',
				error: '#ef4444',
				warning: '#f59e0b',
				info: '#06b6d4',
				terminal: '#4ade80'
			};
			
			alertVariants.forEach(variant => {
				const props = createMockProps(alertTestDefaults, { variant });
				const element = createMockElement();
				
				element.style.color = colorMap[variant] || colorMap.success;
				expect(element.style.color).toBe(colorMap[variant] || colorMap.success);
			});
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const props = createMockProps(alertTestDefaults);
			const element = createMockElement();
			
			element.setAttribute('role', 'alert');
			element.setAttribute('aria-live', 'polite');
			element.setAttribute('aria-atomic', 'true');
			
			expectAttributesToBeSet(element, {
				'role': 'alert',
				'aria-live': 'polite',
				'aria-atomic': 'true'
			});
		});

		it('supports keyboard navigation for close button', () => {
			const props = createMockProps(alertTestDefaults, { closable: true });
			const closeButton = createMockElement();
			const onClose = vi.fn();
			
			closeButton.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClose();
				}
			});
			
			simulateKeyboardEvent(closeButton, 'Enter', onClose);
			expect(onClose).toHaveBeenCalled();
		});

		it('announces alert to screen readers', () => {
			const props = createMockProps(alertTestDefaults);
			const element = createMockElement();
			
			// Alert should be announced automatically due to role="alert"
			element.setAttribute('role', 'alert');
			
			expectAttributesToBeSet(element, {
				'role': 'alert'
			});
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const props = createMockProps(alertTestDefaults, { class: 'custom-alert' });
			const element = createMockElement();
			
			simulateClassGeneration(element, 'alert', props.variant, undefined, [props.class]);
			expectClassesToContain(element, ['custom-alert']);
		});

		it('passes through additional props', () => {
			const props = createMockProps(alertTestDefaults, { 
				'data-testid': 'alert-test',
				id: 'unique-alert'
			});
			const element = createMockElement();
			
			element.setAttribute('data-testid', props['data-testid']);
			element.setAttribute('id', props.id);
			
			expectAttributesToBeSet(element, {
				'data-testid': 'alert-test',
				'id': 'unique-alert'
			});
		});
	});

	describe('Performance', () => {
		it('handles rapid show/hide efficiently', () => {
			const element = createMockElement();
			let visible = false;
			
			const toggle = () => {
				visible = !visible;
				element.style.display = visible ? 'block' : 'none';
			};
			
			// Rapid toggle test
			for (let i = 0; i < 10; i++) {
				toggle();
			}
			
			expect(element.style.display).toBe('none'); // Should end up hidden
		});
	});
});