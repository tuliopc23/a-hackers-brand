import { OPACITY_LEVELS } from './tokens.js';
import type { TransitionConfig } from 'svelte/transition';
export interface GlassFadeOptions {
    duration?: number;
    easing?: (t: number) => number;
    opacity?: keyof typeof OPACITY_LEVELS;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
}
/**
 * Glass fade transition with directional slide
 * Creates elegant glass panel sliding effects
 */
export declare function glassFade(node: Element, { duration, easing, opacity, direction, distance }?: GlassFadeOptions): TransitionConfig;
/**
 * Glass fade out transition
 */
export declare function glassFadeOut(node: Element, options?: GlassFadeOptions): TransitionConfig;
