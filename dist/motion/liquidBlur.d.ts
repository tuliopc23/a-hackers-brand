import { BLUR_LEVELS, OPACITY_LEVELS } from './tokens.js';
export interface LiquidBlurOptions {
    duration?: number;
    easing?: string;
    blur?: keyof typeof BLUR_LEVELS;
    opacity?: keyof typeof OPACITY_LEVELS;
    scale?: number;
}
/**
 * Liquid blur transition with smooth backdrop-filter animation
 * Mimics liquid glass morphing effect
 */
export declare function liquidBlur(node: Element, { duration, easing, blur, opacity, scale }?: LiquidBlurOptions): {
    duration: number;
    easing: string;
    css: (t: number) => string;
};
/**
 * Reverse liquid blur transition for out animations
 */
export declare function liquidBlurOut(node: Element, options?: LiquidBlurOptions): {
    css: (t: number) => string;
    duration: number;
    easing: string;
};
