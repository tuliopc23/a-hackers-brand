import type { Snippet } from 'svelte';
interface Props {
    variant?: 'default' | 'search' | 'password' | 'email';
    leftIcon?: Snippet;
    rightIcon?: Snippet;
    clearable?: boolean;
    error?: boolean;
    helperText?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    class?: string;
    type?: string;
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
declare const GlassInput: $$__sveltets_2_IsomorphicComponent<Props, {
    input: CustomEvent<any>;
    focus: CustomEvent<any>;
    blur: CustomEvent<any>;
    clear: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type GlassInput = InstanceType<typeof GlassInput>;
export default GlassInput;
//# sourceMappingURL=GlassInput.svelte.d.ts.map