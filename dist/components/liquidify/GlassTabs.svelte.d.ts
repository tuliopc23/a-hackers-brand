import type { Snippet } from 'svelte';
interface TabItem {
    id: string;
    label: string;
    content: Snippet;
    disabled?: boolean;
}
interface Props {
    tabs: TabItem[];
    defaultTab?: string;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    tabListClassName?: string;
    tabButtonClassName?: string;
    activeTabButtonClassName?: string;
    inactiveTabButtonClassName?: string;
    tabPanelClassName?: string;
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
declare const GlassTabs: $$__sveltets_2_IsomorphicComponent<Props, {
    tabChange: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type GlassTabs = InstanceType<typeof GlassTabs>;
export default GlassTabs;
