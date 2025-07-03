export interface MagneticHoverOptions {
    duration?: number;
    easing?: string;
    strength?: number;
    scale?: number;
    magnetRadius?: number;
    enabled?: boolean;
}
/**
 * Magnetic hover effect that follows cursor movement
 * Creates smooth attraction-based interactions
 */
export declare function magneticHover(node: HTMLElement, { duration, easing, strength, scale, magnetRadius, enabled }?: MagneticHoverOptions): {
    update(newOptions: MagneticHoverOptions): void;
    destroy(): void;
};
