interface BreadcrumbItem {
	id: string;
	label: string;
	href?: string;
	icon?: string;
	disabled?: boolean;
}
interface Props {
	items: BreadcrumbItem[];
	variant?: 'default' | 'glass' | 'terminal';
	separator?: 'slash' | 'chevron' | 'arrow' | 'dot';
	showHome?: boolean;
	homeIcon?: string;
	homeLabel?: string;
	maxItems?: number;
	class?: string;
}
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
declare const Breadcrumb: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		navigate: CustomEvent<{
			item: BreadcrumbItem;
			index: number;
		}>;
		homeClick: CustomEvent<void>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{},
	{},
	''
>;
type Breadcrumb = InstanceType<typeof Breadcrumb>;
export default Breadcrumb;
