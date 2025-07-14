/**
 * Svelte 5 Effect Helpers for Motion System
 * Provides reactive motion effects using Svelte 5's new effect system
 */

import { untrack } from 'svelte';
import { DURATIONS, EASINGS, BLUR_LEVELS, OPACITY_LEVELS } from './tokens';

export interface MotionEffectOptions {
	duration?: number;
	easing?: (t: number) => number;
	delay?: number;
	enabled?: boolean;
	onStart?: () => void;
	onComplete?: () => void;
	onUpdate?: (progress: number) => void;
}

export interface LiquidMotionOptions extends MotionEffectOptions {
	blur?: keyof typeof BLUR_LEVELS;
	opacity?: keyof typeof OPACITY_LEVELS;
	scale?: number;
	intensity?: keyof typeof OPACITY_LEVELS;
}

export interface SpringEffectOptions extends MotionEffectOptions {
	scale?: number;
	rotation?: number;
	bounce?: boolean;
	stiffness?: number;
	damping?: number;
}

export interface GlassEffectOptions extends MotionEffectOptions {
	direction?: 'up' | 'down' | 'left' | 'right';
	distance?: number;
	opacity?: keyof typeof OPACITY_LEVELS;
	blur?: keyof typeof BLUR_LEVELS;
}

/**
 * Creates a motion effect that can be used in Svelte 5 components
 * Provides automatic cleanup and reactive updates
 */
export function createMotionEffect(
	element: HTMLElement | null,
	options: MotionEffectOptions = {}
) {
	let animationId: number | null = null;
	let startTime: number | null = null;
	let isActive = false;

	const {
		duration = DURATIONS.moderate,
		easing = EASINGS.glass,
		delay = 0,
		enabled = true,
		onStart,
		onComplete,
		onUpdate
	} = options;

	function animate(timestamp: number) {
		if (!element || !enabled) return;

		if (startTime === null) {
			startTime = timestamp;
			onStart?.();
		}

		const elapsed = timestamp - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const easedProgress = easing(progress);

		onUpdate?.(easedProgress);

		if (progress < 1) {
			animationId = requestAnimationFrame(animate);
		} else {
			isActive = false;
			onComplete?.();
		}
	}

	function start() {
		if (!element || !enabled || isActive) return;

		isActive = true;
		startTime = null;

		if (delay > 0) {
			setTimeout(() => {
				if (isActive) {
					animationId = requestAnimationFrame(animate);
				}
			}, delay);
		} else {
			animationId = requestAnimationFrame(animate);
		}
	}

	function stop() {
		if (animationId) {
			cancelAnimationFrame(animationId);
			animationId = null;
		}
		isActive = false;
		startTime = null;
	}

	function cleanup() {
		stop();
	}

	return {
		start,
		stop,
		cleanup,
		get isActive() {
			return isActive;
		}
	};
}

/**
 * Creates a liquid glass motion effect using Svelte 5 effects
 * Automatically applies liquid blur and scaling animations
 */
export function createLiquidMotionEffect(
	element: HTMLElement | null,
	options: LiquidMotionOptions = {}
) {
	const {
		blur = 'md',
		opacity = 'medium',
		scale = 1.02,
		intensity = 'medium',
		...motionOptions
	} = options;

	const initialStyle = element ? {
		backdropFilter: element.style.backdropFilter,
		background: element.style.background,
		transform: element.style.transform,
		boxShadow: element.style.boxShadow
	} : null;

	const motionEffect = createMotionEffect(element, {
		...motionOptions,
		onUpdate: (progress: number) => {
			if (!element) return;

			const blurValue = BLUR_LEVELS[blur] * progress;
			const opacityValue = OPACITY_LEVELS[intensity] * progress;
			const scaleValue = 1 + (scale - 1) * progress;

			element.style.backdropFilter = `blur(${blurValue}px) saturate(${100 + progress * 80}%)`;
			element.style.background = `rgba(255, 255, 255, ${opacityValue})`;
			element.style.transform = `scale(${scaleValue})`;
			element.style.boxShadow = `
				0 ${4 + progress * 8}px ${16 + progress * 16}px rgba(0, 0, 0, ${0.1 + progress * 0.1}),
				0 0 ${20 * progress}px rgba(255, 255, 255, ${0.2 * progress})
			`;

			motionOptions.onUpdate?.(progress);
		},
		onComplete: () => {
			// Reset styles on completion
			if (element && initialStyle) {
				element.style.backdropFilter = initialStyle.backdropFilter;
				element.style.background = initialStyle.background;
				element.style.transform = initialStyle.transform;
				element.style.boxShadow = initialStyle.boxShadow;
			}
			motionOptions.onComplete?.();
		}
	});

	return motionEffect;
}

/**
 * Creates a spring motion effect with elastic bounce
 * Perfect for interactive elements and hover states
 */
export function createSpringMotionEffect(
	element: HTMLElement | null,
	options: SpringEffectOptions = {}
) {
	const {
		scale = 1.05,
		rotation = 0,
		bounce = true,
		stiffness = 200,
		damping = 20,
		...motionOptions
	} = options;

	const initialTransform = element?.style.transform || '';

	const motionEffect = createMotionEffect(element, {
		...motionOptions,
		easing: bounce ? EASINGS.elastic : EASINGS.spring,
		onUpdate: (progress: number) => {
			if (!element) return;

			let currentScale = 1 + (scale - 1) * progress;
			let currentRotation = rotation * progress;

			// Apply bounce effect if enabled
			if (bounce && progress > 0.5) {
				const bounceProgress = (progress - 0.5) * 2;
				const bounceEffect = Math.sin(bounceProgress * Math.PI * 2) * 0.1;
				currentScale += bounceEffect;
				currentRotation += bounceEffect * 5;
			}

			element.style.transform = `scale(${currentScale}) rotate(${currentRotation}deg)`;
			element.style.transformOrigin = 'center center';

			motionOptions.onUpdate?.(progress);
		},
		onComplete: () => {
			if (element) {
				element.style.transform = initialTransform;
			}
			motionOptions.onComplete?.();
		}
	});

	return motionEffect;
}

/**
 * Creates a glass fade effect with directional movement
 * Ideal for entrance and exit animations
 */
export function createGlassFadeEffect(
	element: HTMLElement | null,
	options: GlassEffectOptions = {}
) {
	const {
		direction = 'up',
		distance = 20,
		opacity = 'medium',
		blur = 'sm',
		...motionOptions
	} = options;

	const initialStyle = element ? {
		opacity: element.style.opacity,
		transform: element.style.transform,
		filter: element.style.filter
	} : null;

	// Calculate direction vectors
	const directionMap = {
		up: { x: 0, y: -distance },
		down: { x: 0, y: distance },
		left: { x: -distance, y: 0 },
		right: { x: distance, y: 0 }
	};

	const { x, y } = directionMap[direction];

	const motionEffect = createMotionEffect(element, {
		...motionOptions,
		easing: EASINGS.glass,
		onUpdate: (progress: number) => {
			if (!element) return;

			const currentOpacity = OPACITY_LEVELS[opacity] + (1 - OPACITY_LEVELS[opacity]) * progress;
			const currentX = x * (1 - progress);
			const currentY = y * (1 - progress);
			const currentBlur = BLUR_LEVELS[blur] * (1 - progress);

			element.style.opacity = currentOpacity.toString();
			element.style.transform = `translate(${currentX}px, ${currentY}px)`;
			element.style.filter = `blur(${currentBlur}px)`;

			motionOptions.onUpdate?.(progress);
		},
		onComplete: () => {
			if (element && initialStyle) {
				element.style.opacity = initialStyle.opacity;
				element.style.transform = initialStyle.transform;
				element.style.filter = initialStyle.filter;
			}
			motionOptions.onComplete?.();
		}
	});

	return motionEffect;
}

/**
 * Creates a magnetic hover effect that follows mouse movement
 * Perfect for interactive buttons and cards
 */
export function createMagneticEffect(
	element: HTMLElement | null,
	options: MotionEffectOptions & { 
		strength?: number;
		radius?: number;
		returnSpeed?: number;
	} = {}
) {
	const {
		strength = 0.3,
		radius = 100,
		returnSpeed = 0.1,
		...motionOptions
	} = options;

	let mouseX = 0;
	let mouseY = 0;
	let centerX = 0;
	let centerY = 0;
	let currentX = 0;
	let currentY = 0;
	let isHovering = false;

	function updatePosition() {
		if (!element) return;

		const rect = element.getBoundingClientRect();
		centerX = rect.left + rect.width / 2;
		centerY = rect.top + rect.height / 2;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!element) return;

		mouseX = event.clientX;
		mouseY = event.clientY;

		const deltaX = mouseX - centerX;
		const deltaY = mouseY - centerY;
		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

		if (distance < radius) {
			isHovering = true;
			const targetX = deltaX * strength;
			const targetY = deltaY * strength;
			
			// Smooth interpolation
			currentX += (targetX - currentX) * 0.1;
			currentY += (targetY - currentY) * 0.1;
		} else {
			isHovering = false;
		}
	}

	function handleMouseLeave() {
		isHovering = false;
	}

	function animate() {
		if (!element) return;

		if (!isHovering) {
			// Return to center
			currentX *= (1 - returnSpeed);
			currentY *= (1 - returnSpeed);
		}

		element.style.transform = `translate(${currentX}px, ${currentY}px)`;
		requestAnimationFrame(animate);
	}

	function start() {
		if (!element || !motionOptions.enabled) return;

		updatePosition();
		document.addEventListener('mousemove', handleMouseMove);
		element.addEventListener('mouseleave', handleMouseLeave);
		animate();
	}

	function stop() {
		document.removeEventListener('mousemove', handleMouseMove);
		element?.removeEventListener('mouseleave', handleMouseLeave);
		
		if (element) {
			element.style.transform = '';
		}
	}

	return {
		start,
		stop,
		cleanup: stop,
		get isActive() {
			return isHovering;
		}
	};
}

/**
 * Creates a staggered animation effect for multiple elements
 * Perfect for list items and sequential reveals
 */
export function createStaggeredEffect(
	elements: HTMLElement[],
	effectFactory: (element: HTMLElement, index: number) => ReturnType<typeof createMotionEffect>,
	staggerDelay: number = 100
) {
	const effects = elements.map((element, index) => {
		const effect = effectFactory(element, index);
		return {
			effect,
			delay: index * staggerDelay
		};
	});

	function start() {
		effects.forEach(({ effect, delay }) => {
			setTimeout(() => {
				effect.start();
			}, delay);
		});
	}

	function stop() {
		effects.forEach(({ effect }) => {
			effect.stop();
		});
	}

	function cleanup() {
		effects.forEach(({ effect }) => {
			effect.cleanup();
		});
	}

	return {
		start,
		stop,
		cleanup,
		get isActive() {
			return effects.some(({ effect }) => effect.isActive);
		}
	};
}

/**
 * Creates a performance-optimized motion effect that respects user preferences
 * Automatically handles reduced motion preferences and performance throttling
 */
export function createAccessibleMotionEffect(
	element: HTMLElement | null,
	options: MotionEffectOptions = {}
) {
	// Check for reduced motion preference
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	
	// Adjust options based on user preferences
	const adjustedOptions: MotionEffectOptions = {
		...options,
		duration: prefersReducedMotion ? 0 : (options.duration ?? DURATIONS.moderate),
		enabled: prefersReducedMotion ? false : (options.enabled ?? true)
	};

	return createMotionEffect(element, adjustedOptions);
}

/**
 * Utility function to create motion effects inside Svelte 5 components
 * Automatically handles cleanup and reactivity
 */
export function useMotionEffect(
	getElement: () => HTMLElement | null,
	effectCreator: (element: HTMLElement | null) => ReturnType<typeof createMotionEffect>
) {
	let currentEffect: ReturnType<typeof createMotionEffect> | null = null;

	// Create effect that runs when dependencies change
	$effect(() => {
		// Clean up previous effect
		if (currentEffect) {
			currentEffect.cleanup();
		}

		// Get current element
		const element = untrack(getElement);
		
		// Create new effect
		if (element) {
			currentEffect = effectCreator(element);
		}

		// Cleanup on unmount
		return () => {
			if (currentEffect) {
				currentEffect.cleanup();
			}
		};
	});

	return {
		start: () => currentEffect?.start(),
		stop: () => currentEffect?.stop(),
		get isActive() {
			return currentEffect?.isActive ?? false;
		}
	};
}

/**
 * Creates a composable motion effect that can be chained with other effects
 * Useful for complex animations that combine multiple motion types
 */
export function createComposableMotionEffect(
	element: HTMLElement | null,
	effects: Array<(element: HTMLElement | null) => ReturnType<typeof createMotionEffect>>
) {
	const activeEffects = effects.map(effectCreator => effectCreator(element));

	function start() {
		activeEffects.forEach(effect => effect.start());
	}

	function stop() {
		activeEffects.forEach(effect => effect.stop());
	}

	function cleanup() {
		activeEffects.forEach(effect => effect.cleanup());
	}

	return {
		start,
		stop,
		cleanup,
		get isActive() {
			return activeEffects.some(effect => effect.isActive);
		}
	};
}

// Export convenience functions for common motion patterns
export const motionEffects = {
	liquid: createLiquidMotionEffect,
	spring: createSpringMotionEffect,
	glass: createGlassFadeEffect,
	magnetic: createMagneticEffect,
	staggered: createStaggeredEffect,
	accessible: createAccessibleMotionEffect
};

// Export for use in components
export default motionEffects;
