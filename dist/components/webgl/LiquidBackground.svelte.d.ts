interface Props {
    intensity?: number;
    speed?: number;
    colors?: string[];
    interactive?: boolean;
    pattern?: 'waves' | 'ripples' | 'distortion' | 'plasma';
    quality?: 'low' | 'medium' | 'high';
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
declare const LiquidBackground: $$__sveltets_2_IsomorphicComponent<Props, {
    ready: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type LiquidBackground = InstanceType<typeof LiquidBackground>;
export default LiquidBackground;
