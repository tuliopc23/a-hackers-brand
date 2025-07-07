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
export * from './jellyMotion.js';
// Convenience re-exports with common configurations
export { liquidBlur as liquid } from './liquidBlur.js';
export { glassFade as fade } from './glassFade.js';
export { springPop as pop } from './springPop.js';
// Note: magneticHover is exported from liquidify/physics to avoid conflicts
export { jelly, liquidJelly, jellyHover, liquidResponsive, breathing } from './jellyMotion.js';
// Common animation presets
import { liquidBlur } from './liquidBlur.js';
import { glassFade } from './glassFade.js';
import { springPop } from './springPop.js';
import { jelly, liquidJelly, jellyHover } from './jellyMotion.js';
import { DURATIONS, EASINGS } from './tokens.js';
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
    cardHover: (node) => liquidBlur(node, {
        duration: DURATIONS.moderate,
        easing: EASINGS.glass,
        blur: 'lg',
        scale: 1.02
    }),
    buttonPress: (node) => springPop(node, {
        duration: DURATIONS.fast,
        scale: 0.98,
        bounce: false
    }),
    inputFocus: (node) => glassFade(node, {
        duration: DURATIONS.fast,
        opacity: 'light',
        direction: 'up',
        distance: 5
    }),
    // Jelly presets
    jellyHover: (node) => jelly(node, {
        duration: DURATIONS.fast,
        scale: 1.05,
        borderRadius: '16px',
        responsiveness: 'medium'
    }),
    liquidButton: (node) => liquidJelly(node, {
        duration: DURATIONS.moderate,
        scale: 1.08,
        borderRadius: '20px',
        liquidIntensity: 1.2,
        morphStrength: 0.4,
        flowDirection: 'center'
    }),
    terminalWindow: (node) => liquidJelly(node, {
        duration: DURATIONS.slow,
        scale: 1.02,
        borderRadius: '12px',
        liquidIntensity: 0.8,
        morphStrength: 0.2,
        flowDirection: 'up'
    })
};
