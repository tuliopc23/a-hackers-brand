import type { HTMLAttributes } from 'svelte/elements';
export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
    render?: (value: any, row: any) => string;
    headerClass?: string;
    cellClass?: string;
}
export interface TableRow {
    id: string | number;
    [key: string]: any;
}
export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}
export interface FilterConfig {
    [key: string]: any;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
    columns: TableColumn[];
    data: TableRow[];
    sortConfig?: SortConfig;
    filterConfig?: FilterConfig;
    loading?: boolean;
    selectable?: boolean;
    selectedRows?: (string | number)[];
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'glass' | 'terminal' | 'liquid';
    stickyHeader?: boolean;
    virtualScroll?: boolean;
    pageSize?: number;
    currentPage?: number;
    totalRows?: number;
    showPagination?: boolean;
    emptyMessage?: string;
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
declare const DataTable: $$__sveltets_2_IsomorphicComponent<Props, {
    sort: CustomEvent<any>;
    selectionChange: CustomEvent<any>;
    filter: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "currentPage" | "selectedRows" | "sortConfig" | "filterConfig">;
type DataTable = InstanceType<typeof DataTable>;
export default DataTable;
//# sourceMappingURL=DataTable.svelte.d.ts.map