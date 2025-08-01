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
import { jelly, liquidJelly, jellyHover } from './jellyMotion';
import { DURATIONS, EASINGS } from './tokens';
// Preset configurations for common use cases
export const presets = {
	// Quick presets
	fastLiquid: (node) => liquidBlur(node, { duration: DURATIONS.fast }),
	slowLiquid: (node) => liquidBlur(node, { duration: DURATIONS.slow }),
	fadeUp: (node) => glassFade(node, { direction: 'up' }),
	fadeDown: (node) => glassFade(node, { direction: 'down' }),
	fadeLeft: (node) => glassFade(node, { direction: 'left' }),
	fadeRight: (node) => glassFade(node, { direction: 'right' }),
	quickPop: (node) => springPop(node, { duration: DURATIONS.fast }),
	bouncyPop: (node) => springPop(node, { easing: EASINGS.elastic, bounce: true }),
	// Component-specific presets
	cardHover: (node) =>
		liquidBlur(node, {
			duration: DURATIONS.moderate,
			easing: EASINGS.glass,
			blur: 'lg',
			scale: 1.02
		}),
	buttonPress: (node) =>
		springPop(node, {
			duration: DURATIONS.fast,
			scale: 0.98,
			bounce: false
		}),
	inputFocus: (node) =>
		glassFade(node, {
			duration: DURATIONS.fast,
			opacity: 'light',
			direction: 'up',
			distance: 5
		}),
	// Jelly presets
	jellyHover: (node) =>
		jelly(node, {
			duration: DURATIONS.fast,
			scale: 1.05,
			borderRadius: '16px',
			responsiveness: 'medium'
		}),
	liquidButton: (node) =>
		liquidJelly(node, {
			duration: DURATIONS.moderate,
			scale: 1.08,
			borderRadius: '20px',
			liquidIntensity: 1.2,
			morphStrength: 0.4,
			flowDirection: 'center'
		}),
	terminalWindow: (node) =>
		liquidJelly(node, {
			duration: DURATIONS.slow,
			scale: 1.02,
			borderRadius: '12px',
			liquidIntensity: 0.8,
			morphStrength: 0.2,
			flowDirection: 'up'
		})
};
