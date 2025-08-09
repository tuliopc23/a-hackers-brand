/**
 * Liquid blur transition with smooth backdrop-filter animation
 * Mimics liquid glass morphing effect
 */
export function liquidBlurTransition(node: any, { duration, easing, blur, opacity, scale }?: {
    duration?: any;
    easing?: any;
    blur?: string | undefined;
    opacity?: string | undefined;
    scale?: number | undefined;
}): {
    duration: any;
    easing: any;
    css: (t: any) => string;
};
/**
 * Liquid blur action for use with use: directive
 * Applies persistent liquid blur effect
 */
export function liquidBlur(node: any, { duration, easing, blur, opacity, scale, intensity }?: {
    duration?: any;
    easing?: any;
    blur?: string | undefined;
    opacity?: string | undefined;
    scale?: number | undefined;
    intensity?: string | undefined;
}): {
    update(newOptions: any): void;
    destroy(): void;
};
/**
 * Reverse liquid blur transition for out animations
 */
export function liquidBlurOut(node: any, options?: {}): {
    css: (t: any) => string;
    duration: any;
    easing: any;
};
