/**
 * Tulio Brand System - Motion Library
 * Native Svelte 5 animation system replacing Framer Motion
 */

// Export tokens
export * from './tokens.js';

// Export transitions
export * from './liquidBlur.js';
export * from './glassFade.js';
export * from './springPop.js';

// Export actions
export * from './magneticHover.js';

// Convenience re-exports with common configurations
export { liquidBlur as liquid } from './liquidBlur.js';
export { glassFade as fade } from './glassFade.js';
export { springPop as pop } from './springPop.js';
export { magneticHover as magnetic } from './magneticHover.js';

// Common animation presets
import { liquidBlur } from './liquidBlur.js';
import { glassFade } from './glassFade.js';
import { springPop } from './springPop.js';
import { DURATIONS, EASINGS } from './tokens.js';

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
		})
} as const;
