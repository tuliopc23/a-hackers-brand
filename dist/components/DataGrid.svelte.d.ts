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
declare const DataGrid: $$__sveltets_2_IsomorphicComponent<{
    columns: GridColumn[];
    data: GridRow[];
    variant?: "default" | "glass" | "terminal";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
    virtualScrolling?: boolean;
    rowHeight?: number;
    maxHeight?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    filters?: GridFilter[];
    searchable?: boolean;
    searchPlaceholder?: string;
    selectable?: boolean;
    multiSelect?: boolean;
    selectedRows?: Set<string | number>;
    editable?: boolean;
    pagination?: boolean;
    pageSize?: number;
    currentPage?: number;
    totalRows?: number;
    stickyHeader?: boolean;
    resizableColumns?: boolean;
    reorderableColumns?: boolean;
    exportable?: boolean;
    actions?: Array<{
        label: string;
        icon?: string;
        action: string;
        variant?: "primary" | "secondary" | "danger";
        show?: (row: GridRow) => boolean;
    }>;
    emptyMessage?: string;
    class?: string;
}, {
    sort: CustomEvent<{
        column: string;
        order: "asc" | "desc";
    }>;
    filter: CustomEvent<{
        filters: GridFilter[];
    }>;
    search: CustomEvent<{
        query: string;
    }>;
    rowClick: CustomEvent<{
        row: GridRow;
        index: number;
    }>;
    rowSelect: CustomEvent<{
        row: GridRow;
        selected: boolean;
    }>;
    selectAll: CustomEvent<{
        selected: boolean;
    }>;
    cellEdit: CustomEvent<{
        row: GridRow;
        column: string;
        oldValue: any;
        newValue: any;
    }>;
    actionClick: CustomEvent<{
        row: GridRow;
        action: string;
    }>;
    pageChange: CustomEvent<{
        page: number;
    }>;
    pageSizeChange: CustomEvent<{
        pageSize: number;
    }>;
    export: CustomEvent<{
        format: string;
    }>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type DataGrid = InstanceType<typeof DataGrid>;
export default DataGrid;
