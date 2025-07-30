/**
 * Magnetic hover effect that follows cursor movement
 * Creates smooth attraction-based interactions
 */
export function magneticHover(node: any, { duration, easing, strength, scale, magnetRadius, enabled }?: {
    duration?: number | undefined;
    easing?: string | undefined;
    strength?: number | undefined;
    scale?: number | undefined;
    magnetRadius?: number | undefined;
    enabled?: boolean | undefined;
}): {
    update(newOptions: any): void;
    destroy(): void;
};
//# sourceMappingURL=magneticHover.d.ts.map