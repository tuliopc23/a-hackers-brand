export interface GridColumn {
	key: string;
	label: string;
	type?: 'text' | 'number' | 'date' | 'boolean' | 'custom';
	sortable?: boolean;
	filterable?: boolean;
	width?: string;
	minWidth?: string;
	align?: 'left' | 'center' | 'right';
	formatter?: (value: any, row: any) => string;
	render?: (value: any, row: any, column: GridColumn) => string;
	editable?: boolean;
	validation?: (value: any) => string | null;
}

export interface GridRow {
	[key: string]: any;
	id: string | number;
}

export interface GridFilter {
	column: string;
	value: any;
	operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte';
}
