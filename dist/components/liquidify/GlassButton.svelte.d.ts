import type { Snippet } from 'svelte';
interface Props {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    disabled?: boolean;
    leftIcon?: Snippet;
    rightIcon?: Snippet;
    class?: string;
    children?: Snippet;
    onclick?: () => void;
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
declare const GlassButton: $$__sveltets_2_IsomorphicComponent<Props, {
    click: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type GlassButton = InstanceType<typeof GlassButton>;
export default GlassButton;
