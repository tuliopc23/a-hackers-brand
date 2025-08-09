/**
 * Glass fade transition with directional slide
 * Creates elegant glass panel sliding effects
 */
export function glassFade(node: any, { duration, easing, opacity, direction, distance }?: {
    duration?: any;
    easing?: ((t: any) => any) | undefined;
    opacity?: string | undefined;
    direction?: string | undefined;
    distance?: number | undefined;
}): {
    duration: any;
    easing: (t: any) => any;
    css: (t: any) => string;
};
/**
 * Glass fade out transition
 */
export function glassFadeOut(node: any, options?: {}): {
    css: (t: any) => string;
    duration: any;
    easing: (t: any) => any;
};
