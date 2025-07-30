export function createMagneticHover(config?: {}): {
    transform: import("svelte/store").Writable<string>;
    bind: (node: any) => {
        destroy(): void;
    };
    handleMouseMove: (e: any) => void;
    handleMouseLeave: () => void;
};
export function magneticHover(node: any, config?: {}): {
    destroy(): void;
    update(newConfig: any): void;
};
//# sourceMappingURL=magnetic-hover.d.ts.map