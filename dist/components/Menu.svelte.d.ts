import type { HTMLAttributes } from 'svelte/elements';
interface $$__sveltets_2_IsomorphicComponent<
	Props extends Record<string, any> = any,
	Events extends Record<string, any> = any,
	Slots extends Record<string, any> = any,
	Exports = {},
	Bindings = string
> {
	new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<
		Props,
		Events,
		Slots
	> & {
		$$bindings?: Bindings;
	} & Exports;
	(
		internal: unknown,
		props: Props & {
			$$events?: Events;
			$$slots?: Slots;
		}
	): Exports & {
		$set?: any;
		$on?: any;
	};
	z_$$bindings?: Bindings;
}
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props &
	(Slots extends {
		default: any;
	}
		? Props extends Record<string, never>
			? any
			: {
					children?: any;
				}
		: {});
declare const Menu: $$__sveltets_2_IsomorphicComponent<
	$$__sveltets_2_PropsWithChildren<
		HTMLAttributes<HTMLDivElement> & {
			items: MenuItem[];
			trigger?: 'click' | 'hover';
			placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'right-start' | 'left-start';
			variant?: 'glass' | 'terminal' | 'liquid';
			size?: 'sm' | 'md' | 'lg';
			closeOnClick?: boolean;
			showIcons?: boolean;
			showKeyboards?: boolean;
			class?: string;
		},
		{
			trigger: {};
		}
	>,
	{
		toggle: CustomEvent<any>;
		close: CustomEvent<any>;
		select: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{
		trigger: {};
	},
	{},
	''
>;
type Menu = InstanceType<typeof Menu>;
export default Menu;
