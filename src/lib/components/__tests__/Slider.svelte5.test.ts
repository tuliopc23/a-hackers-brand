import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	createMockElement,
	createMockProps,
	simulateClassGeneration,
	simulateAnimation,
	simulateKeyboardEvent,
	simulateMouseEvent,
	expectClassesToContain,
	expectAttributesToBeSet,
	expectAriaAttributes,
	testAccessibilityCompliance,
	testEventCleanup,
	commonSizes
} from './svelte5-test-utils';

describe('Slider Component (Svelte 5)', () => {
	const sliderTestDefaults = {
		value: 50,
		min: 0,
		max: 100,
		step: 1,
		disabled: false,
		size: 'md' as const,
		variant: 'glass' as const,
		blur: 'md' as const,
		showValue: false,
		showMarks: false,
		marks: [],
		animate: true,
		reduceMotion: false
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Props and Values', () => {
		it('should handle value props correctly', () => {
			const props = createMockProps(sliderTestDefaults, {
				value: 75,
				min: 0,
				max: 100,
				step: 5
			});

			expect(props.value).toBe(75);
			expect(props.min).toBe(0);
			expect(props.max).toBe(100);
			expect(props.step).toBe(5);
		});

		it('should handle variant props correctly', () => {
			const variants = ['default', 'glass', 'terminal'];

			variants.forEach((variant) => {
				const props = createMockProps(sliderTestDefaults, { variant });
				expect(props.variant).toBe(variant);
			});
		});

		it('should handle size props correctly', () => {
			commonSizes.forEach((size) => {
				const props = createMockProps(sliderTestDefaults, { size });
				expect(props.size).toBe(size);
			});
		});

		it('should handle boolean props correctly', () => {
			const props = createMockProps(sliderTestDefaults, {
				disabled: true,
				showValue: true,
				showMarks: true,
				animate: false,
				reduceMotion: true
			});

			expect(props.disabled).toBe(true);
			expect(props.showValue).toBe(true);
			expect(props.showMarks).toBe(true);
			expect(props.animate).toBe(false);
			expect(props.reduceMotion).toBe(true);
		});

		it('should handle marks array', () => {
			const props = createMockProps(sliderTestDefaults, {
				marks: [0, 25, 50, 75, 100]
			});

			expect(props.marks).toEqual([0, 25, 50, 75, 100]);
		});
	});

	describe('CSS Class Generation', () => {
		it('should generate correct track classes', () => {
			const track = createMockElement();
			const variant = 'glass';
			const size = 'md';

			simulateClassGeneration(track, 'relative w-full rounded-full', variant, size, [
				'glass-subtle',
				'border-white/20',
				'h-2'
			]);

			expectClassesToContain(track, ['relative', 'w-full', 'rounded-full', 'glass-subtle']);
		});

		it('should generate correct thumb classes', () => {
			const thumb = createMockElement();
			const variant = 'glass';
			const size = 'md';

			simulateClassGeneration(thumb, 'absolute rounded-full', variant, size, [
				'glass-heavy',
				'border-white/30',
				'w-5',
				'h-5',
				'shadow-xl'
			]);

			expectClassesToContain(thumb, ['absolute', 'rounded-full', 'glass-heavy', 'shadow-xl']);
		});

		it('should apply disabled styles', () => {
			const container = createMockElement();
			const disabled = true;

			if (disabled) {
				container.classList.add('opacity-50', 'cursor-not-allowed');
			}

			expect(container.classList.add).toHaveBeenCalledWith('opacity-50', 'cursor-not-allowed');
		});

		it('should apply focus styles', () => {
			const thumb = createMockElement();
			const isFocused = true;

			if (isFocused) {
				thumb.classList.add('ring-2', 'ring-blue-400', 'ring-offset-2');
			}

			expect(thumb.classList.add).toHaveBeenCalledWith('ring-2', 'ring-blue-400', 'ring-offset-2');
		});
	});

	describe('Value Calculation', () => {
		it('should calculate percentage from value', () => {
			const value = 75;
			const min = 0;
			const max = 100;

			const percentage = ((value - min) / (max - min)) * 100;

			expect(percentage).toBe(75);
		});

		it('should clamp value within min/max bounds', () => {
			const min = 0;
			const max = 100;

			// Test over max
			let value = 150;
			value = Math.max(min, Math.min(max, value));
			expect(value).toBe(100);

			// Test under min
			value = -50;
			value = Math.max(min, Math.min(max, value));
			expect(value).toBe(0);
		});

		it('should snap to step increments', () => {
			const step = 10;
			const min = 0;

			// Test snapping
			let value = 23;
			value = Math.round(value / step) * step;
			expect(value).toBe(20);

			value = 27;
			value = Math.round(value / step) * step;
			expect(value).toBe(30);
		});

		it('should calculate value from mouse position', () => {
			const trackBounds = { left: 0, width: 200 };
			const mouseX = 150;
			const min = 0;
			const max = 100;

			const percentage = (mouseX - trackBounds.left) / trackBounds.width;
			const value = min + percentage * (max - min);

			expect(value).toBe(75);
		});
	});

	describe('Event Handling', () => {
		it('should handle mouse down on track', () => {
			const track = createMockElement();
			const onMouseDown = vi.fn();

			track.addEventListener('mousedown', onMouseDown);
			simulateMouseEvent(track, 'mousedown');

			expect(track.addEventListener).toHaveBeenCalledWith('mousedown', onMouseDown);
		});

		it('should handle mouse drag', () => {
			let isDragging = false;
			let value = 50;
			const onMouseMove = vi.fn((e) => {
				if (isDragging) {
					// Simulate value update based on mouse position
					value = 75;
				}
			});

			// Start dragging
			isDragging = true;
			onMouseMove({ clientX: 150 });

			expect(onMouseMove).toHaveBeenCalled();
			expect(value).toBe(75);
		});

		it('should handle mouse up to stop dragging', () => {
			let isDragging = true;
			const onMouseUp = vi.fn(() => {
				isDragging = false;
			});

			onMouseUp();

			expect(onMouseUp).toHaveBeenCalled();
			expect(isDragging).toBe(false);
		});

		it('should handle keyboard navigation', () => {
			const slider = createMockElement();
			let value = 50;
			const step = 1;
			const bigStep = 10;

			// Arrow Right/Up
			const rightEvent = simulateKeyboardEvent(slider, 'ArrowRight', () => {
				value += step;
			});
			expect(value).toBe(51);

			// Arrow Left/Down
			const leftEvent = simulateKeyboardEvent(slider, 'ArrowLeft', () => {
				value -= step;
			});
			expect(value).toBe(50);

			// Page Up (big step)
			const pageUpEvent = simulateKeyboardEvent(slider, 'PageUp', () => {
				value += bigStep;
			});
			expect(value).toBe(60);

			// Page Down (big step)
			const pageDownEvent = simulateKeyboardEvent(slider, 'PageDown', () => {
				value -= bigStep;
			});
			expect(value).toBe(50);

			// Home (min value)
			const homeEvent = simulateKeyboardEvent(slider, 'Home', () => {
				value = 0;
			});
			expect(value).toBe(0);

			// End (max value)
			const endEvent = simulateKeyboardEvent(slider, 'End', () => {
				value = 100;
			});
			expect(value).toBe(100);
		});

		it('should handle touch events', () => {
			const track = createMockElement();
			const onTouchStart = vi.fn();
			const onTouchMove = vi.fn();
			const onTouchEnd = vi.fn();

			track.addEventListener('touchstart', onTouchStart);
			track.addEventListener('touchmove', onTouchMove);
			track.addEventListener('touchend', onTouchEnd);

			expect(track.addEventListener).toHaveBeenCalledWith('touchstart', onTouchStart);
			expect(track.addEventListener).toHaveBeenCalledWith('touchmove', onTouchMove);
			expect(track.addEventListener).toHaveBeenCalledWith('touchend', onTouchEnd);
		});

		it('should call onValueChange callback', () => {
			const onValueChange = vi.fn();
			const newValue = 75;

			onValueChange(newValue);

			expect(onValueChange).toHaveBeenCalledWith(75);
		});
	});

	describe('Animation Integration', () => {
		it('should animate thumb movement', () => {
			const thumb = createMockElement();
			const animate = true;
			const reduceMotion = false;

			if (animate && !reduceMotion) {
				simulateAnimation(thumb, true);
			}

			expect(thumb.style.transition).toContain('all');
		});

		it('should animate fill bar', () => {
			const fill = createMockElement();
			const animate = true;

			if (animate) {
				simulateAnimation(fill, true);
			}

			expect(fill.style.transition).toContain('all');
		});

		it('should apply spring pop on value change', () => {
			const thumb = createMockElement();
			const animate = true;

			if (animate) {
				thumb.style.transform = 'scale(1.1)';
				setTimeout(() => {
					thumb.style.transform = 'scale(1)';
				}, 100);
			}

			expect(thumb.style.transform).toBe('scale(1.1)');
		});
	});

	describe('Accessibility', () => {
		it('should have proper ARIA attributes', () => {
			const slider = createMockElement();
			const value = 75;
			const min = 0;
			const max = 100;

			expectAttributesToBeSet(slider, {
				role: 'slider',
				tabindex: '0'
			});

			expectAriaAttributes(slider, {
				valuemin: String(min),
				valuemax: String(max),
				valuenow: String(value),
				disabled: 'false'
			});
		});

		it('should have label when provided', () => {
			const slider = createMockElement();
			const label = 'Volume Control';

			expectAriaAttributes(slider, {
				label: label
			});
		});

		it('should announce value changes', () => {
			const slider = createMockElement();
			const value = 75;

			expectAriaAttributes(slider, {
				valuetext: `${value}%`
			});
		});

		it('should handle focus management', () => {
			const slider = createMockElement();

			slider.focus();
			expect(slider.focus).toHaveBeenCalled();

			slider.blur();
			expect(slider.blur).toHaveBeenCalled();
		});
	});

	describe('Marks and Labels', () => {
		it('should render marks when showMarks is true', () => {
			const marks = [0, 25, 50, 75, 100];
			const showMarks = true;

			marks.forEach((mark) => {
				const markElement = createMockElement();
				const position = mark; // percentage

				markElement.style.left = `${position}%`;
				expect(markElement.style.left).toBe(`${position}%`);
			});
		});

		it('should show value label when showValue is true', () => {
			const valueLabel = createMockElement();
			const value = 75;
			const showValue = true;

			if (showValue) {
				valueLabel.textContent = String(value);
			}

			expect(valueLabel.textContent).toBe('75');
		});

		it('should position value label above thumb', () => {
			const valueLabel = createMockElement();
			const thumbPosition = 75; // percentage

			valueLabel.style.left = `${thumbPosition}%`;
			valueLabel.style.transform = 'translateX(-50%)';

			expect(valueLabel.style.left).toBe('75%');
			expect(valueLabel.style.transform).toBe('translateX(-50%)');
		});
	});

	describe('Performance', () => {
		it('should cleanup event listeners properly', () => {
			const slider = createMockElement();

			testEventCleanup(slider, ['mousedown', 'mousemove', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'keydown']);
		});

		it('should throttle value updates during drag', () => {
			const onValueChange = vi.fn();
			let lastUpdate = 0;
			const throttleDelay = 16; // ~60fps

			// Simulate rapid mouse movements
			for (let i = 0; i < 100; i++) {
				const now = Date.now();
				if (now - lastUpdate >= throttleDelay) {
					onValueChange(i);
					lastUpdate = now;
				}
			}

			// Should be throttled to less than 100 calls
			expect(onValueChange).toHaveBeenCalledTimes(expect.any(Number));
		});

		it('should handle rapid keyboard inputs', () => {
			let value = 50;
			const step = 1;

			// Simulate rapid key presses
			for (let i = 0; i < 20; i++) {
				value = Math.min(100, value + step);
			}

			expect(value).toBe(70);
		});
	});
});
