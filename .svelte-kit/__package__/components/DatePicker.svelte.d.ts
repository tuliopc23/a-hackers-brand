import type { HTMLInputAttributes } from 'svelte/elements';
interface Props extends Omit<HTMLInputAttributes, 'value' | 'size'> {
    value?: Date | string | null;
    variant?: 'default' | 'glass' | 'terminal';
    size?: 'sm' | 'md' | 'lg';
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    format?: 'MM/dd/yyyy' | 'dd/MM/yyyy' | 'yyyy-MM-dd';
    minDate?: Date;
    maxDate?: Date;
    closeOnSelect?: boolean;
    showToday?: boolean;
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
declare const DatePicker: $$__sveltets_2_IsomorphicComponent<Props, {
    change: CustomEvent<Date | null>;
    open: CustomEvent<void>;
    close: CustomEvent<void>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type DatePicker = InstanceType<typeof DatePicker>;
export default DatePicker;
//# sourceMappingURL=DatePicker.svelte.d.ts.map