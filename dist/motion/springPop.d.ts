/**
 * Spring pop transition with elastic bounce effect
 * Creates playful spring-loaded animations
 */
export function springPop(node: any, { duration, easing, scale, rotation, bounce, stagger }?: {
    duration?: any;
    easing?: any;
    scale?: number | undefined;
    rotation?: number | undefined;
    bounce?: boolean | undefined;
    stagger?: number | undefined;
}): {
    duration: any;
    easing: any;
    css: (t: any) => string;
};
/**
 * Spring pop out transition
 */
export function springPopOut(node: any, options?: {}): {
    css: (t: any) => string;
    duration: any;
    easing: any;
};
/**
 * Staggered spring pop for multiple elements
 */
export function createStaggeredSpringPop(baseDelay?: number): (node: any, options?: {}) => {
    duration: any;
    easing: any;
    css: (t: any) => string;
};
/**
 * Chain spring pop animations for sequential reveals
 */
export function chainSpringPop(nodes: any, options?: {}, chainDelay?: number): any;
/**
 * Spring pop action for use with use: directive
 * Provides interactive spring animations on user interactions
 */
export function springPopAction(node: any, { enabled, trigger, duration, easing, scale, rotation, bounce, stagger, delay }?: {
    enabled?: boolean | undefined;
    trigger?: string | undefined;
    duration?: any;
    easing?: any;
    scale?: number | undefined;
    rotation?: number | undefined;
    bounce?: boolean | undefined;
    stagger?: number | undefined;
    delay?: number | undefined;
}): {
    destroy(): void;
    update?: undefined;
} | {
    update(newOptions: any): void;
    destroy(): void;
};
