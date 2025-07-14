interface TableColumn {
	key: string;
	label: string;
	sortable?: boolean;
	align?: 'left' | 'center' | 'right';
	width?: string;
	formatter?: (value: any) => string;
	render?: (value: any, row: any) => string;
}
interface TableRow {
	[key: string]: any;
	id?: string | number;
}
interface Props {
	columns: TableColumn[];
	data: TableRow[];
	variant?: 'default' | 'glass' | 'terminal';
	size?: 'sm' | 'md' | 'lg';
	striped?: boolean;
	hover?: boolean;
	bordered?: boolean;
	loading?: boolean;
	sortBy?: string;
	sortOrder?: 'asc' | 'desc';
	selectable?: boolean;
	selectedRows?: Set<string | number>;
	stickyHeader?: boolean;
	maxHeight?: string;
	emptyMessage?: string;
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
declare const Table: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		sort: CustomEvent<{
			column: string;
			order: 'asc' | 'desc';
		}>;
		rowClick: CustomEvent<{
			row: TableRow;
			index: number;
		}>;
		rowSelect: CustomEvent<{
			row: TableRow;
			selected: boolean;
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
type Table = InstanceType<typeof Table>;
export default Table;
