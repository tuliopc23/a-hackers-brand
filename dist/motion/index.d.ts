/**
 * Tulio Brand System - Motion Library
 * Native Svelte 5 animation system replacing Framer Motion
 */
export * from './tokens.js';
export * from './liquidBlur.js';
export * from './glassFade.js';
export * from './springPop.js';
export * from './magneticHover.js';
export * from './jellyMotion.js';
export { liquidBlur as liquid } from './liquidBlur.js';
export { glassFade as fade } from './glassFade.js';
export { springPop as pop } from './springPop.js';
export { jelly, liquidJelly, jellyHover, liquidResponsive, breathing } from './jellyMotion.js';
export declare const presets: {
	readonly fastLiquid: (node: Element) => {
		duration: number;
		easing: (t: number) => number;
		css: (t: number) => string;
	};
	readonly slowLiquid: (node: Element) => {
		duration: number;
		easing: (t: number) => number;
		css: (t: number) => string;
	};
	readonly fadeUp: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly fadeDown: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly fadeLeft: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly fadeRight: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly quickPop: (node: Element) => {
		duration: number;
		easing: (t: number) => number;
		css: (t: number) => string;
	};
	readonly bouncyPop: (node: Element) => {
		duration: number;
		easing: (t: number) => number;
		css: (t: number) => string;
	};
	readonly cardHover: (node: Element) => {
		duration: number;
		easing: (t: number) => number;
		css: (t: number) => string;
	};
	readonly buttonPress: (node: Element) => {
		duration: number;
		easing: (t: number) => number;
		css: (t: number) => string;
	};
	readonly inputFocus: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly jellyHover: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly liquidButton: (node: Element) => import('svelte/transition').TransitionConfig;
	readonly terminalWindow: (node: Element) => import('svelte/transition').TransitionConfig;
};
