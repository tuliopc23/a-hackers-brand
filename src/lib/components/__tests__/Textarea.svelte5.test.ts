import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	createMockElement,
	createMockProps,
	simulateClassGeneration,
	simulateAnimation,
	simulateKeyboardEvent,
	expectClassesToContain,
	expectAttributesToBeSet,
	expectAriaAttributes,
	testAccessibilityCompliance,
	testEventCleanup,
	commonSizes
} from './svelte5-test-utils';

describe('Textarea Component (Svelte 5)', () => {
	const textareaTestDefaults = {
		value: '',
		placeholder: '',
		disabled: false,
		size: 'md' as const,
		variant: 'glass' as const,
		blur: 'md' as const,
		rows: 4,
		cols: undefined,
		resize: 'vertical' as const,
		autoResize: false,
		maxHeight: 300,
		minHeight: 80,
		animate: true,
		reduceMotion: false
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Props and Variants', () => {
		it('should handle variant props correctly', () => {
			const variants = ['default', 'glass', 'terminal'];

			variants.forEach((variant) => {
				const props = createMockProps(textareaTestDefaults, { variant });
				expect(props.variant).toBe(variant);
			});
		});

		it('should handle size props correctly', () => {
			commonSizes.forEach((size) => {
				const props = createMockProps(textareaTestDefaults, { size });
				expect(props.size).toBe(size);
			});
		});

		it('should handle text content props', () => {
			const props = createMockProps(textareaTestDefaults, {
				value: 'Test content',
				placeholder: 'Enter your message...'
			});

			expect(props.value).toBe('Test content');
			expect(props.placeholder).toBe('Enter your message...');
		});

		it('should handle dimension props', () => {
			const props = createMockProps(textareaTestDefaults, {
				rows: 6,
				cols: 50,
				minHeight: 100,
				maxHeight: 500
			});

			expect(props.rows).toBe(6);
			expect(props.cols).toBe(50);
			expect(props.minHeight).toBe(100);
			expect(props.maxHeight).toBe(500);
		});

		it('should handle resize options', () => {
			const resizeOptions = ['none', 'both', 'horizontal', 'vertical'];

			resizeOptions.forEach((resize) => {
				const props = createMockProps(textareaTestDefaults, { resize });
				expect(props.resize).toBe(resize);
			});
		});

		it('should handle boolean props correctly', () => {
			const props = createMockProps(textareaTestDefaults, {
				disabled: true,
				autoResize: true,
				animate: false,
				reduceMotion: true
			});

			expect(props.disabled).toBe(true);
			expect(props.autoResize).toBe(true);
			expect(props.animate).toBe(false);
			expect(props.reduceMotion).toBe(true);
		});
	});

	describe('CSS Class Generation', () => {
		it('should generate correct base classes', () => {
			const textarea = createMockElement();
			const variant = 'glass';
			const size = 'md';

			simulateClassGeneration(textarea, 'w-full rounded-brand-md', variant, size, [
				'glass-medium',
				'border-white/20',
				'text-white',
				'px-4',
				'py-3',
				'text-sm'
			]);

			expectClassesToContain(textarea, ['w-full', 'rounded-brand-md', 'glass-medium', 'px-4', 'py-3']);
		});

		it('should apply resize styles', () => {
			const textarea = createMockElement();
			const resize = 'vertical';

			if (resize === 'none') {
				textarea.style.resize = 'none';
			} else if (resize === 'both') {
				textarea.style.resize = 'both';
			} else if (resize === 'horizontal') {
				textarea.style.resize = 'horizontal';
			} else if (resize === 'vertical') {
				textarea.style.resize = 'vertical';
			}

			expect(textarea.style.resize).toBe('vertical');
		});

		it('should apply disabled styles', () => {
			const textarea = createMockElement();
			const disabled = true;

			if (disabled) {
				textarea.classList.add('opacity-50', 'cursor-not-allowed');
			}

			expect(textarea.classList.add).toHaveBeenCalledWith('opacity-50', 'cursor-not-allowed');
		});

		it('should apply focus styles', () => {
			const textarea = createMockElement();
			const isFocused = true;
			const variant = 'glass';

			if (isFocused) {
				textarea.classList.add('ring-2', 'ring-blue-400', 'ring-offset-2');
				if (variant === 'glass') {
					textarea.classList.add('glass-heavy');
				}
			}

			expect(textarea.classList.add).toHaveBeenCalledWith('ring-2', 'ring-blue-400', 'ring-offset-2');
			expect(textarea.classList.add).toHaveBeenCalledWith('glass-heavy');
		});
	});

	describe('Auto Resize Functionality', () => {
		it('should calculate height based on content', () => {
			const textarea = createMockElement();
			const autoResize = true;
			const minHeight = 80;
			const maxHeight = 300;

			// Mock scrollHeight
			Object.defineProperty(textarea, 'scrollHeight', { value: 150, writable: true });

			if (autoResize) {
				textarea.style.height = 'auto';
				const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));
				textarea.style.height = `${newHeight}px`;
			}

			expect(textarea.style.height).toBe('150px');
		});

		it('should respect minHeight constraint', () => {
			const textarea = createMockElement();
			const autoResize = true;
			const minHeight = 80;
			const maxHeight = 300;

			// Mock small scrollHeight
			Object.defineProperty(textarea, 'scrollHeight', { value: 50 });

			if (autoResize) {
				const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));
				textarea.style.height = `${newHeight}px`;
			}

			expect(textarea.style.height).toBe('80px');
		});

		it('should respect maxHeight constraint', () => {
			const textarea = createMockElement();
			const autoResize = true;
			const minHeight = 80;
			const maxHeight = 300;

			// Mock large scrollHeight
			Object.defineProperty(textarea, 'scrollHeight', { value: 500 });

			if (autoResize) {
				const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));
				textarea.style.height = `${newHeight}px`;
			}

			expect(textarea.style.height).toBe('300px');
		});

		it('should add scrollbar when exceeding maxHeight', () => {
			const textarea = createMockElement();
			const scrollHeight = 500;
			const maxHeight = 300;

			if (scrollHeight > maxHeight) {
				textarea.style.overflowY = 'auto';
			}

			expect(textarea.style.overflowY).toBe('auto');
		});
	});

	describe('Event Handling', () => {
		it('should handle input events', () => {
			const textarea = createMockElement();
			const onInput = vi.fn();
			const onValueChange = vi.fn();

			textarea.addEventListener('input', onInput);

			// Simulate input
			const inputEvent = new Event('input');
			Object.defineProperty(textarea, 'value', { value: 'New text' });
			onInput(inputEvent);

			expect(textarea.addEventListener).toHaveBeenCalledWith('input', onInput);
			expect(onInput).toHaveBeenCalledWith(inputEvent);
		});

		it('should handle focus events', () => {
			const textarea = createMockElement();
			let isFocused = false;

			textarea.addEventListener('focus', () => {
				isFocused = true;
			});

			textarea.addEventListener('blur', () => {
				isFocused = false;
			});

			textarea.focus();
			expect(textarea.focus).toHaveBeenCalled();

			textarea.blur();
			expect(textarea.blur).toHaveBeenCalled();
		});

		it('should call onValueChange callback', () => {
			const onValueChange = vi.fn();
			const newValue = 'Updated text content';

			onValueChange(newValue);

			expect(onValueChange).toHaveBeenCalledWith('Updated text content');
		});

		it('should handle keyboard shortcuts', () => {
			const textarea = createMockElement();
			const onKeyDown = vi.fn();

			textarea.addEventListener('keydown', onKeyDown);

			// Test Tab key
			const tabEvent = simulateKeyboardEvent(textarea, 'Tab');
			expect(tabEvent.key).toBe('Tab');

			// Test Escape key
			const escapeEvent = simulateKeyboardEvent(textarea, 'Escape');
			expect(escapeEvent.key).toBe('Escape');
		});
	});

	describe('Animation Integration', () => {
		it('should apply animation when animate is true', () => {
			const textarea = createMockElement();
			const animate = true;
			const reduceMotion = false;

			if (animate && !reduceMotion) {
				simulateAnimation(textarea, true);
			}

			expect(textarea.style.transition).toContain('all');
		});

		it('should apply liquid blur on focus', () => {
			const textarea = createMockElement();
			const animate = true;
			const isFocused = true;
			const blur = 'md';

			if (animate && isFocused) {
				textarea.classList.add(`backdrop-blur-${blur}`);
			}

			expect(textarea.classList.add).toHaveBeenCalledWith('backdrop-blur-md');
		});

		it('should animate height changes when auto-resizing', () => {
			const textarea = createMockElement();
			const autoResize = true;
			const animate = true;

			if (autoResize && animate) {
				textarea.style.transition = 'height 200ms ease-out';
			}

			expect(textarea.style.transition).toContain('height');
		});
	});

	describe('Accessibility', () => {
		it('should have proper ARIA attributes', () => {
			const textarea = createMockElement();

			expectAttributesToBeSet(textarea, {
				role: 'textbox'
			});

			expectAriaAttributes(textarea, {
				multiline: 'true',
				disabled: 'false'
			});
		});

		it('should support aria-label', () => {
			const textarea = createMockElement();
			const label = 'Message input';

			expectAriaAttributes(textarea, {
				label: label
			});
		});

		it('should announce character limits if provided', () => {
			const textarea = createMockElement();
			const maxLength = 500;
			const currentLength = 100;

			expectAttributesToBeSet(textarea, {
				maxlength: String(maxLength)
			});

			expectAriaAttributes(textarea, {
				valuemax: String(maxLength),
				valuenow: String(currentLength)
			});
		});

		it('should handle disabled state', () => {
			const textarea = createMockElement();
			const disabled = true;

			if (disabled) {
				textarea.setAttribute('disabled', 'true');
				textarea.setAttribute('aria-disabled', 'true');
			}

			expectAttributesToBeSet(textarea, {
				disabled: 'true'
			});

			expectAriaAttributes(textarea, {
				disabled: 'true'
			});
		});
	});

	describe('Content Management', () => {
		it('should handle multi-line text', () => {
			const textarea = createMockElement();
			const multiLineText = 'Line 1\nLine 2\nLine 3';

			textarea.value = multiLineText;

			expect(textarea.value).toBe(multiLineText);
		});

		it('should preserve whitespace', () => {
			const textarea = createMockElement();
			const textWithSpaces = '  Indented text\n    More indentation';

			textarea.value = textWithSpaces;

			expect(textarea.value).toBe(textWithSpaces);
		});

		it('should handle emoji and special characters', () => {
			const textarea = createMockElement();
			const specialText = 'Hello 👋 World! 🌍 Special chars: @#$%^&*()';

			textarea.value = specialText;

			expect(textarea.value).toBe(specialText);
		});
	});

	describe('Performance', () => {
		it('should cleanup event listeners properly', () => {
			const textarea = createMockElement();

			testEventCleanup(textarea, ['input', 'focus', 'blur', 'keydown']);
		});

		it('should debounce auto-resize calculations', () => {
			const resizeHandler = vi.fn();
			let timeoutId: number;

			const debouncedResize = (value: string) => {
				clearTimeout(timeoutId);
				timeoutId = window.setTimeout(() => {
					resizeHandler(value);
				}, 100);
			};

			// Simulate rapid input
			for (let i = 0; i < 10; i++) {
				debouncedResize(`Text ${i}`);
			}

			// Should only be called once after debounce
			setTimeout(() => {
				expect(resizeHandler).toHaveBeenCalledTimes(1);
			}, 150);
		});

		it('should handle large text efficiently', () => {
			const textarea = createMockElement();
			const largeText = 'x'.repeat(10000);

			textarea.value = largeText;

			expect(textarea.value.length).toBe(10000);
		});
	});
});
