interface ListItem {
	id: string | number;
	title: string;
	subtitle?: string;
	description?: string;
	icon?: string;
	avatar?: string;
	badge?: string | number;
	actions?: Array<{
		label: string;
		icon?: string;
		action: string;
		variant?: 'primary' | 'secondary' | 'danger';
	}>;
	metadata?: Record<string, any>;
	disabled?: boolean;
}
interface Props {
	items: ListItem[];
	variant?: 'default' | 'glass' | 'terminal';
	size?: 'sm' | 'md' | 'lg';
	layout?: 'simple' | 'detailed' | 'card';
	selectable?: boolean;
	multiSelect?: boolean;
	selectedItems?: Set<string | number>;
	loading?: boolean;
	loadingCount?: number;
	emptyMessage?: string;
	emptyIcon?: string;
	dividers?: boolean;
	hover?: boolean;
	animated?: boolean;
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
declare const List: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		itemClick: CustomEvent<{
			item: ListItem;
			index: number;
		}>;
		itemSelect: CustomEvent<{
			item: ListItem;
			selected: boolean;
		}>;
		actionClick: CustomEvent<{
			item: ListItem;
			action: string;
		}>;
		selectAll: CustomEvent<{
			selected: boolean;
		}>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{},
	{},
	''
>;
type List = InstanceType<typeof List>;
export default List;
