interface Props {
    particleCount?: number;
    size?: number;
    speed?: number;
    color?: string;
    opacity?: number;
    flowPattern?: 'orbital' | 'turbulent' | 'wave' | 'spiral';
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
declare const LiquidParticleSystem: $$__sveltets_2_IsomorphicComponent<Props, {
    ready: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type LiquidParticleSystem = InstanceType<typeof LiquidParticleSystem>;
export default LiquidParticleSystem;
//# sourceMappingURL=LiquidParticleSystem.svelte.d.ts.map