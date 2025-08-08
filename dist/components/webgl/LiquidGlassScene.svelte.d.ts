interface Props {
    variant?: 'sphere' | 'plane' | 'particles' | 'combined';
    animated?: boolean;
    interactive?: boolean;
    glowIntensity?: number;
    liquidSpeed?: number;
    colorPrimary?: string;
    colorSecondary?: string;
    environmentPreset?: 'city' | 'forest' | 'night' | 'studio';
    class?: string;
}
declare const LiquidGlassScene: import("svelte").Component<Props, {}, "">;
type LiquidGlassScene = ReturnType<typeof LiquidGlassScene>;
export default LiquidGlassScene;
//# sourceMappingURL=LiquidGlassScene.svelte.d.ts.map