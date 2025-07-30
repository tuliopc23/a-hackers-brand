/**
 * Jelly transition - creates a bouncy, elastic entrance/exit
 */
export function jelly(node: any, config?: {}): {
    duration: number;
    easing: any;
    css: (t: any, u: any) => string;
};
/**
 * Liquid jelly transition - more fluid, organic motion
 */
export function liquidJelly(node: any, config?: {}): {
    duration: any;
    easing: any;
    css: (t: any, u: any) => string;
};
/**
 * Jelly hover action - adds dynamic jelly effects on hover
 */
export function jellyHover(node: any, config?: {}): {
    destroy(): void;
};
/**
 * Liquid responsiveness action - makes elements respond like liquid to interactions
 */
export function liquidResponsive(node: any, config?: {}): {
    destroy(): void;
};
/**
 * Breathing animation - subtle liquid breathing effect
 */
export function breathing(node: any, config?: {}): {
    destroy(): void;
};
//# sourceMappingURL=jellyMotion.d.ts.map