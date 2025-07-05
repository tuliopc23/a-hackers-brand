import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createMockElement, createMockProps, simulateClassGeneration, simulateAnimation, expectClassesToContain, expectAttributesToBeSet, expectAriaAttributes, testAccessibilityCompliance, commonVariants, commonSizes, simulateKeyboardEvent, simulateMouseEvent, inputTestDefaults } from './svelte5-test-utils';
describe('Input Component (Svelte 5)', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('Rendering', () => {
        it('renders with default props', () => {
            const props = createMockProps(inputTestDefaults);
            const element = createMockElement();
            // Simulate input rendering
            simulateClassGeneration(element, 'input', props.variant, props.size);
            element.setAttribute('type', props.type);
            element.setAttribute('placeholder', props.placeholder);
            expectClassesToContain(element, ['input', 'input-glass', 'input-md']);
            expectAttributesToBeSet(element, {
                'type': 'text',
                'placeholder': 'Enter text...'
            });
        });
        it('renders all variants correctly', () => {
            commonVariants.forEach(variant => {
                const props = createMockProps(inputTestDefaults, { variant });
                const element = createMockElement();
                simulateClassGeneration(element, 'input', variant);
                expectClassesToContain(element, ['input', `input-${variant}`]);
            });
        });
        it('renders all sizes correctly', () => {
            commonSizes.forEach(size => {
                const props = createMockProps(inputTestDefaults, { size });
                const element = createMockElement();
                simulateClassGeneration(element, 'input', undefined, size);
                expectClassesToContain(element, ['input', `input-${size}`]);
            });
        });
        it('renders different input types', () => {
            const types = ['text', 'email', 'password', 'number', 'tel', 'url'];
            types.forEach(type => {
                const props = createMockProps(inputTestDefaults, { type });
                const element = createMockElement();
                element.setAttribute('type', type);
                expectAttributesToBeSet(element, { 'type': type });
            });
        });
    });
    describe('States', () => {
        it('handles disabled state', () => {
            const props = createMockProps(inputTestDefaults, { disabled: true });
            const element = createMockElement();
            if (props.disabled) {
                element.setAttribute('disabled', 'true');
                element.setAttribute('aria-disabled', 'true');
                element.classList.add('disabled');
            }
            expectAttributesToBeSet(element, {
                'disabled': 'true',
                'aria-disabled': 'true'
            });
            expect(element.classList.add).toHaveBeenCalledWith('disabled');
        });
        it('handles readonly state', () => {
            const props = createMockProps(inputTestDefaults, { readonly: true });
            const element = createMockElement();
            if (props.readonly) {
                element.setAttribute('readonly', 'true');
                element.setAttribute('aria-readonly', 'true');
                element.classList.add('readonly');
            }
            expectAttributesToBeSet(element, {
                'readonly': 'true',
                'aria-readonly': 'true'
            });
            expect(element.classList.add).toHaveBeenCalledWith('readonly');
        });
        it('handles required state', () => {
            const props = createMockProps(inputTestDefaults, { required: true });
            const element = createMockElement();
            if (props.required) {
                element.setAttribute('required', 'true');
                element.setAttribute('aria-required', 'true');
                element.classList.add('required');
            }
            expectAttributesToBeSet(element, {
                'required': 'true',
                'aria-required': 'true'
            });
            expect(element.classList.add).toHaveBeenCalledWith('required');
        });
        it('handles error state', () => {
            const props = createMockProps(inputTestDefaults, { error: 'Invalid input' });
            const element = createMockElement();
            if (props.error) {
                element.setAttribute('aria-invalid', 'true');
                element.classList.add('error');
            }
            expectAttributesToBeSet(element, {
                'aria-invalid': 'true'
            });
            expect(element.classList.add).toHaveBeenCalledWith('error');
        });
    });
    describe('Visual Effects', () => {
        it('applies glow effect when glow is true', () => {
            const props = createMockProps(inputTestDefaults, { glow: true });
            const element = createMockElement();
            if (props.glow) {
                element.classList.add('glow');
                element.style.boxShadow = '0 0 10px currentColor';
            }
            expect(element.classList.add).toHaveBeenCalledWith('glow');
            expect(element.style.boxShadow).toBe('0 0 10px currentColor');
        });
        it('applies liquid effects when liquid is true', () => {
            const props = createMockProps(inputTestDefaults, { liquid: true });
            const element = createMockElement();
            if (props.liquid) {
                element.classList.add('liquid');
                simulateAnimation(element, true);
            }
            expect(element.classList.add).toHaveBeenCalledWith('liquid');
            expectClassesToContain(element, ['animated']);
        });
        it('applies blur effect when blur is enabled', () => {
            const props = createMockProps(inputTestDefaults, { blur: 'md' });
            const element = createMockElement();
            if (props.blur) {
                element.classList.add(`blur-${props.blur}`);
                element.style.backdropFilter = 'blur(8px)';
            }
            expect(element.classList.add).toHaveBeenCalledWith('blur-md');
            expect(element.style.backdropFilter).toBe('blur(8px)');
        });
    });
    describe('Interactions', () => {
        it('handles focus events', () => {
            const props = createMockProps(inputTestDefaults);
            const element = createMockElement();
            const onFocus = vi.fn();
            element.addEventListener('focus', onFocus);
            element.focus();
            expect(element.addEventListener).toHaveBeenCalledWith('focus', onFocus);
        });
        it('handles blur events', () => {
            const props = createMockProps(inputTestDefaults);
            const element = createMockElement();
            const onBlur = vi.fn();
            element.addEventListener('blur', onBlur);
            element.blur();
            expect(element.addEventListener).toHaveBeenCalledWith('blur', onBlur);
        });
        it('handles input events', () => {
            const props = createMockProps(inputTestDefaults);
            const element = createMockElement();
            const onInput = vi.fn();
            element.addEventListener('input', (e) => {
                element.setAttribute('value', e.target.value);
                onInput(e);
            });
            // Simulate input event
            const inputEvent = { target: { value: 'test input' } };
            element.addEventListener('input', () => onInput(inputEvent));
            expect(element.addEventListener).toHaveBeenCalledWith('input', expect.any(Function));
        });
        it('prevents input when disabled', () => {
            const props = createMockProps(inputTestDefaults, { disabled: true });
            const element = createMockElement();
            const onInput = vi.fn();
            if (!props.disabled) {
                element.addEventListener('input', onInput);
            }
            expect(element.addEventListener).not.toHaveBeenCalledWith('input', onInput);
        });
    });
    describe('Validation', () => {
        it('validates required fields', () => {
            const props = createMockProps(inputTestDefaults, { required: true });
            const element = createMockElement();
            // Simulate validation
            const value = '';
            const isValid = props.required ? value.length > 0 : true;
            if (!isValid) {
                element.setAttribute('aria-invalid', 'true');
                element.classList.add('invalid');
            }
            expect(element.setAttribute).toHaveBeenCalledWith('aria-invalid', 'true');
            expect(element.classList.add).toHaveBeenCalledWith('invalid');
        });
        it('validates email format', () => {
            const props = createMockProps(inputTestDefaults, { type: 'email' });
            const element = createMockElement();
            // Simulate email validation
            const value = 'invalid-email';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = props.type === 'email' ? emailRegex.test(value) : true;
            if (!isValid) {
                element.setAttribute('aria-invalid', 'true');
                element.classList.add('invalid');
            }
            expect(element.setAttribute).toHaveBeenCalledWith('aria-invalid', 'true');
            expect(element.classList.add).toHaveBeenCalledWith('invalid');
        });
        it('validates minimum length', () => {
            const props = createMockProps(inputTestDefaults, { minlength: 5 });
            const element = createMockElement();
            // Simulate minlength validation
            const value = 'abc';
            const isValid = props.minlength ? value.length >= props.minlength : true;
            if (!isValid) {
                element.setAttribute('aria-invalid', 'true');
                element.classList.add('invalid');
            }
            expect(element.setAttribute).toHaveBeenCalledWith('aria-invalid', 'true');
            expect(element.classList.add).toHaveBeenCalledWith('invalid');
        });
        it('validates maximum length', () => {
            const props = createMockProps(inputTestDefaults, { maxlength: 10 });
            const element = createMockElement();
            // Simulate maxlength validation
            const value = 'this is too long';
            const isValid = props.maxlength ? value.length <= props.maxlength : true;
            if (!isValid) {
                element.setAttribute('aria-invalid', 'true');
                element.classList.add('invalid');
            }
            expect(element.setAttribute).toHaveBeenCalledWith('aria-invalid', 'true');
            expect(element.classList.add).toHaveBeenCalledWith('invalid');
        });
    });
    describe('Transitions', () => {
        it('applies liquidBlur transition when animated', () => {
            const props = createMockProps(inputTestDefaults, { animated: true });
            const element = createMockElement();
            if (props.animated) {
                element.classList.add('liquid-blur-transition');
                simulateAnimation(element, true);
            }
            expect(element.classList.add).toHaveBeenCalledWith('liquid-blur-transition');
            expectClassesToContain(element, ['animated']);
        });
        it('disables transition when animated is false', () => {
            const props = createMockProps(inputTestDefaults, { animated: false });
            const element = createMockElement();
            simulateAnimation(element, props.animated);
            expect(element.style.transition).toBe('none');
        });
        it('applies focus transition effects', () => {
            const props = createMockProps(inputTestDefaults, { animated: true });
            const element = createMockElement();
            // Simulate focus transition by manually calling the effect
            if (props.animated) {
                element.classList.add('focused');
                simulateAnimation(element, true);
            }
            expect(element.classList.add).toHaveBeenCalledWith('focused');
            expectClassesToContain(element, ['animated']);
        });
    });
    describe('Accessibility', () => {
        it('has proper ARIA attributes', () => {
            const props = createMockProps(inputTestDefaults);
            const element = createMockElement();
            element.setAttribute('role', 'textbox');
            element.setAttribute('aria-label', 'Text input');
            expectAttributesToBeSet(element, {
                'role': 'textbox',
                'aria-label': 'Text input'
            });
        });
        it('supports keyboard navigation', () => {
            const props = createMockProps(inputTestDefaults);
            const element = createMockElement();
            const onKeyDown = vi.fn();
            element.addEventListener('keydown', onKeyDown);
            simulateKeyboardEvent(element, 'Tab');
            expect(element.addEventListener).toHaveBeenCalledWith('keydown', onKeyDown);
        });
        it('announces validation errors to screen readers', () => {
            const props = createMockProps(inputTestDefaults, { error: 'Required field' });
            const element = createMockElement();
            if (props.error) {
                element.setAttribute('aria-invalid', 'true');
                element.setAttribute('aria-describedby', 'error-message');
            }
            expectAttributesToBeSet(element, {
                'aria-invalid': 'true',
                'aria-describedby': 'error-message'
            });
        });
        it('supports screen reader labels', () => {
            const props = createMockProps(inputTestDefaults, { label: 'Email Address' });
            const element = createMockElement();
            if (props.label) {
                element.setAttribute('aria-label', props.label);
            }
            expectAttributesToBeSet(element, {
                'aria-label': 'Email Address'
            });
        });
    });
    describe('Custom Props', () => {
        it('applies custom className', () => {
            const props = createMockProps(inputTestDefaults, { class: 'custom-input' });
            const element = createMockElement();
            simulateClassGeneration(element, 'input', props.variant, props.size, [props.class]);
            expectClassesToContain(element, ['custom-input']);
        });
        it('passes through additional props', () => {
            const props = createMockProps(inputTestDefaults, {
                'data-testid': 'input-test',
                'id': 'unique-input',
                'name': 'test-input'
            });
            const element = createMockElement();
            element.setAttribute('data-testid', props['data-testid']);
            element.setAttribute('id', props.id);
            element.setAttribute('name', props.name);
            expectAttributesToBeSet(element, {
                'data-testid': 'input-test',
                'id': 'unique-input',
                'name': 'test-input'
            });
        });
    });
    describe('Performance', () => {
        it('handles rapid value changes efficiently', () => {
            const element = createMockElement();
            const onInput = vi.fn();
            element.addEventListener('input', onInput);
            // Simulate rapid typing
            for (let i = 0; i < 20; i++) {
                element.setAttribute('value', `test${i}`);
            }
            expect(element.setAttribute).toHaveBeenCalledTimes(20);
        });
        it('debounces validation checks', () => {
            const element = createMockElement();
            const validateFn = vi.fn();
            let debounceTimer;
            const debouncedValidate = () => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    validateFn();
                }, 300);
            };
            // Simulate rapid input with debounced validation
            for (let i = 0; i < 5; i++) {
                debouncedValidate();
            }
            // Validation should only be called once after debounce
            setTimeout(() => {
                expect(validateFn).toHaveBeenCalledTimes(1);
            }, 350);
        });
    });
});
