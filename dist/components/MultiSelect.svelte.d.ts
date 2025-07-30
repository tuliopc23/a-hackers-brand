import type { HTMLAttributes } from 'svelte/elements';
interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    description?: string;
}
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
    options: Option[];
    value?: string[];
    placeholder?: string;
    variant?: 'default' | 'glass' | 'terminal';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    error?: boolean;
    searchable?: boolean;
    maxSelections?: number;
    chipVariant?: 'default' | 'glass' | 'terminal';
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
declare const MultiSelect: $$__sveltets_2_IsomorphicComponent<Props, {
    change: CustomEvent<string[]>;
    add: CustomEvent<string>;
    remove: CustomEvent<string>;
    open: CustomEvent<void>;
    close: CustomEvent<void>;
    search: CustomEvent<string>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type MultiSelect = InstanceType<typeof MultiSelect>;
export default MultiSelect;
//# sourceMappingURL=MultiSelect.svelte.d.ts.map