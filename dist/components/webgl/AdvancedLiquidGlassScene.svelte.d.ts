interface Props {
    width?: number;
    height?: number;
    autoRotate?: boolean;
    enableBloom?: boolean;
    enableParticles?: boolean;
    enablePhysics?: boolean;
    quality?: 'low' | 'medium' | 'high' | 'ultra';
    theme?: 'cyberpunk' | 'neural' | 'quantum' | 'liquid';
    interactive?: boolean;
    class?: string;
}
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const AdvancedLiquidGlassScene: $$__sveltets_2_IsomorphicComponent<Props, {
    ready: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type AdvancedLiquidGlassScene = InstanceType<typeof AdvancedLiquidGlassScene>;
export default AdvancedLiquidGlassScene;
//# sourceMappingURL=AdvancedLiquidGlassScene.svelte.d.ts.map