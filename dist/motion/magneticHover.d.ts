/**
 * Magnetic hover effect that follows cursor movement
 * Creates smooth attraction-based interactions
 */
export function magneticHover(node: any, { duration, easing, strength, scale, magnetRadius, enabled }?: {
    duration?: any;
    easing?: any;
    strength?: number | undefined;
    scale?: any;
    magnetRadius?: number | undefined;
    enabled?: boolean | undefined;
}): {
    update(newOptions: any): void;
    destroy(): void;
};
