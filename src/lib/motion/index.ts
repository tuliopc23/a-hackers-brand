/**
 * Tulio Brand System - Motion Library
 * Native Svelte 5 animation system replacing Framer Motion
 */

// Export tokens
export * from './tokens';

// Export effects helpers for Svelte 5
export * from './effects.svelte';

// Export transitions
export * from './liquidBlur';
export { liquidBlurTransition } from './liquidBlur';
export * from './glassFade';
export * from './springPop';

// Export actions
export * from './magneticHover';
export * from './jellyMotion';
export { springPopAction } from './springPop';

// Convenience re-exports with common configurations
export { liquidBlur as liquid } from './liquidBlur';
export { glassFade as fade } from './glassFade';
export { springPop as pop } from './springPop';
// Note: magneticHover is exported from liquidify/physics to avoid conflicts
export {
	jelly,
	liquidJelly,
	jellyHover,
	liquidResponsive,
	breathing,
	breathing as breathingMotion
} from './jellyMotion';

// Common animation presets
import { liquidBlur } from './liquidBlur';
import { glassFade } from './glassFade';
import { springPop } from './springPop';
import { jelly, liquidJelly } from './jellyMotion';
import { DURATIONS, EASINGS } from './tokens';

// Preset configurations for common use cases
export const presets = {
	// Quick presets
	fastLiquid: (node: Element) => liquidBlur(node, { duration: DURATIONS.fast }),
	slowLiquid: (node: Element) => liquidBlur(node, { duration: DURATIONS.slow }),

	fadeUp: (node: Element) => glassFade(node, { direction: 'up' }),
	fadeDown: (node: Element) => glassFade(node, { direction: 'down' }),
	fadeLeft: (node: Element) => glassFade(node, { direction: 'left' }),
	fadeRight: (node: Element) => glassFade(node, { direction: 'right' }),

	quickPop: (node: Element) => springPop(node, { duration: DURATIONS.fast }),
	bouncyPop: (node: Element) => springPop(node, { easing: EASINGS.elastic, bounce: true }),

	// Component-specific presets
	cardHover: (node: Element) =>
		liquidBlur(node, {
			duration: DURATIONS.moderate,
			easing: EASINGS.glass,
			blur: 'lg',
			scale: 1.02
		}),

	buttonPress: (node: Element) =>
		springPop(node, {
			duration: DURATIONS.fast,
			scale: 0.98,
			bounce: false
		}),

	inputFocus: (node: Element) =>
		glassFade(node, {
			duration: DURATIONS.fast,
			opacity: 'light',
			direction: 'up',
			distance: 5
		}),

	// Jelly presets
	jellyHover: (node: Element) =>
		jelly(node, {
			duration: DURATIONS.fast,
			scale: 1.05,
			borderRadius: '16px',
			responsiveness: 'medium'
		}),

	liquidButton: (node: Element) =>
		liquidJelly(node, {
			duration: DURATIONS.moderate,
			scale: 1.08,
			borderRadius: '20px',
			liquidIntensity: 1.2,
			morphStrength: 0.4,
			flowDirection: 'center'
		}),

	terminalWindow: (node: Element) =>
		liquidJelly(node, {
			duration: DURATIONS.slow,
			scale: 1.02,
			borderRadius: '12px',
			liquidIntensity: 0.8,
			morphStrength: 0.2,
			flowDirection: 'up'
		})
} as const;



// === UTILITY FUNCTIONS ===

/**
 * Hook to detect if user prefers reduced motion
 * @returns {boolean} True if reduced motion is preferred
 */
export function useReducedMotion() {
	if (typeof window === 'undefined') {
		return false;
	}

	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	return mediaQuery.matches;
}

/**
 * Creates motion-safe animations that respect user preferences
 * @param animation - Animation configuration
 * @param fallback - Fallback for reduced motion
 * @returns Safe animation configuration
 */
export function motionSafe(animation: any, fallback: any = {}) {
	return useReducedMotion() ? fallback : animation;
}

/**
 * Performance-optimized motion utilities
 */
export const motionUtils = {
	useReducedMotion,
	motionSafe,

	// Create optimized transitions
	createTransition: (duration = 300, easing = 'cubic-bezier(0.4, 0, 0.2, 1)') => ({
		duration,
		easing,
		willChange: 'transform, opacity'
	}),

	// Hardware acceleration hints
	enableHardwareAcceleration: (element: any) => {
		if (element && element.style) {
			element.style.transform = element.style.transform || 'translateZ(0)';
			element.style.willChange = 'transform';
		}
	}
};
