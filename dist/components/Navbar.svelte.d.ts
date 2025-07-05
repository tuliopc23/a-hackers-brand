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
declare const Navbar: $$__sveltets_2_IsomorphicComponent<{
    items: NavItem[];
    variant?: "default" | "glass" | "terminal";
    position?: "static" | "fixed" | "sticky";
    backdrop?: boolean;
    logo?: string;
    logoText?: string;
    showBrand?: boolean;
    compact?: boolean;
    transparent?: boolean;
    activeItem?: string;
    class?: string;
}, {
    navigate: CustomEvent<{
        item: NavItem;
        href?: string;
    }>;
    brandClick: CustomEvent<void>;
    mobileToggle: CustomEvent<boolean>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Navbar = InstanceType<typeof Navbar>;
export default Navbar;
