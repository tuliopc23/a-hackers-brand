export interface Vector2D {
    x: number;
    y: number;
}
export interface MagneticConfig {
    strength?: number;
    radius?: number;
    ease?: string;
    duration?: number;
}
export declare function createMagneticHover(config?: MagneticConfig): {
    transform: import("svelte/store").Writable<string>;
    bind: (node: HTMLElement) => {
        destroy(): void;
    };
    handleMouseMove: (e: MouseEvent) => void;
    handleMouseLeave: () => void;
};
export declare function magneticHover(node: HTMLElement, config?: MagneticConfig): {
    destroy(): void;
    update(newConfig: MagneticConfig): void;
};
