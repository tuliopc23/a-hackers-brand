import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    variant?: 'glass' | 'terminal' | 'liquid';
    overlay?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    persistent?: boolean;
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
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const Drawer: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<Props, {
    header: {};
    title: {};
    default: {
        open: boolean;
        close: () => void;
    };
    footer: {
        open: boolean;
        close: () => void;
    };
}>, {
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    title: {};
    default: {
        open: boolean;
        close: () => void;
    };
    footer: {
        open: boolean;
        close: () => void;
    };
}, {}, "open">;
type Drawer = InstanceType<typeof Drawer>;
export default Drawer;
//# sourceMappingURL=Drawer.svelte.d.ts.map