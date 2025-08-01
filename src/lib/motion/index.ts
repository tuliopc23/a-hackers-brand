/**
 * A Hacker's Brand - Motion Library
 * Native Svelte 5 animation system
 */

// Export tokens
export * from './tokens.js';

// Export transitions
export * from './liquidBlur.js';
export { liquidBlurTransition } from './liquidBlur.js';
export * from './glassFade.js';
export * from './springPop.js';

// Export actions
export * from './magneticHover.js';
export * from './jellyMotion.js';
export { springPopAction } from './springPop.js';

// Convenience re-exports with common configurations
export { liquidBlur as liquid } from './liquidBlur.js';
export { glassFade as fade } from './glassFade.js';
export { springPop as pop } from './springPop.js';

// Export from jellyMotion
export {
	jelly,
	liquidJelly,
	jellyHover,
	liquidResponsive,
	breathing,
	breathing as breathingMotion
} from './jellyMotion.js';
