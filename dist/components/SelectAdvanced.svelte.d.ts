import type { HTMLAttributes } from 'svelte/elements';
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
    description?: string;
    icon?: string;
    group?: string;
}
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
    options: SelectOption[];
    value?: string | number | (string | number)[];
    placeholder?: string;
    multiple?: boolean;
    searchable?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    loading?: boolean;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'glass' | 'terminal' | 'liquid';
    maxSelections?: number;
    groupBy?: string;
    createOption?: boolean;
    virtualScroll?: boolean;
    closeOnSelect?: boolean;
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
declare const SelectAdvanced: $$__sveltets_2_IsomorphicComponent<Props, {
    change: CustomEvent<any>;
    clear: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type SelectAdvanced = InstanceType<typeof SelectAdvanced>;
export default SelectAdvanced;
//# sourceMappingURL=SelectAdvanced.svelte.d.ts.map