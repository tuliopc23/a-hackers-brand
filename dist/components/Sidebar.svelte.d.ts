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
declare const Sidebar: $$__sveltets_2_IsomorphicComponent<
	$$__sveltets_2_PropsWithChildren<
		HTMLAttributes<HTMLDivElement> & {
			items?: SidebarItem[];
			width?: 'sm' | 'md' | 'lg' | 'xl';
			variant?: 'glass' | 'terminal' | 'liquid';
			position?: 'left' | 'right';
			collapsible?: boolean;
			collapsed?: boolean;
			overlay?: boolean;
			persistent?: boolean;
			showToggle?: boolean;
			class?: string;
		},
		{
			header: {};
			footer: {
				collapsed: boolean;
			};
		}
	>,
	{
		toggle: CustomEvent<any>;
		select: CustomEvent<any>;
		close: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{
		header: {};
		footer: {
			collapsed: boolean;
		};
	},
	{},
	'collapsed'
>;
type Sidebar = InstanceType<typeof Sidebar>;
export default Sidebar;
