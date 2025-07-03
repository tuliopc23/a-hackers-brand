import { OPACITY_LEVELS } from './tokens.js';
export interface GlassFadeOptions {
    duration?: number;
    easing?: string;
    opacity?: keyof typeof OPACITY_LEVELS;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
}
/**
 * Glass fade transition with directional slide
 * Creates elegant glass panel sliding effects
 */
export declare function glassFade(node: Element, { duration, easing, opacity, direction, distance }?: GlassFadeOptions): {
    duration: number;
    easing: string;
    css: (t: number) => string;
};
/**
 * Glass fade out transition
 */
export declare function glassFadeOut(node: Element, options?: GlassFadeOptions): {
    css: (t: number) => string;
    duration: number;
    easing: string;
};
