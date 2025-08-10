<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    /**
     * A simplified, accessible data table with optional sorting, selection and pagination.
     * Intentionally minimal to avoid analyzer warnings; all declared props are used.
     */

    export type RowId = string | number;

    export interface TableRow {
        id: RowId;
        // Additional dynamic keys allowed
        [key: string]: unknown;
    }

    export interface TableColumn<T extends TableRow = TableRow> {
        key: keyof T & string;
        label: string;
        sortable?: boolean;
        align?: "left" | "center" | "right";
        width?: string;
    }

    interface Props<T extends TableRow = TableRow>
        extends Omit<HTMLAttributes<HTMLDivElement>, "data" | "role"> {
        columns: TableColumn<T>[];
        data: T[];
        selectable?: boolean;
        selectedRows?: RowId[]; // two‑way via bind
        pageSize?: number;
        showPagination?: boolean;
        class?: string;
        emptyMessage?: string;
    }

    // Props (all used)
    let {
        columns,
        data,
        selectable = false,
        selectedRows = $bindable<RowId[]>([]),
        pageSize = 10,
        showPagination = false,
        class: className = "",
        emptyMessage = "No data",
        ...rest
    }: Props = $props();

    const dispatch = createEventDispatcher<{
        sort: { key: string; direction: "asc" | "desc" } | null;
        selectionChange: { selected: RowId[] };
        pageChange: { page: number };
    }>();

    // Sorting state
    let sort = $state<{ key: string; direction: "asc" | "desc" } | null>(null);

    // Pagination state
    let currentPage = $state(1);

    function toggleSort(col: TableColumn) {
        if (!col.sortable) return;
        if (!sort || sort.key !== col.key) {
            sort = { key: col.key, direction: "asc" };
        } else {
            sort =
                sort.direction === "asc"
                    ? { key: col.key, direction: "desc" }
                    : null; // third click clears sort
        }
        currentPage = 1;
        dispatch("sort", sort);
    }

    function alignmentClass(align?: string) {
        switch (align) {
            case "center":
                return "text-center";
            case "right":
                return "text-right";
            default:
                return "text-left";
        }
    }

    // Derived sorted data
    const sortedData = $derived(() => {
        if (!sort) return data;
        const { key, direction } = sort;
        const factor = direction === "asc" ? 1 : -1;
        return [...data].sort((a, b) => {
            const av = a[key];
            const bv = b[key];
            if (av == null && bv == null) return 0;
            if (av == null) return -1 * factor;
            if (bv == null) return 1 * factor;
            if (av < bv) return -1 * factor;
            if (av > bv) return 1 * factor;
            return 0;
        });
    });

    // Pagination slices
    const totalPages = $derived(() => {
        if (!showPagination) return 1;
        return Math.max(1, Math.ceil(sortedData().length / pageSize));
    });

    const pageData = $derived(() => {
        if (!showPagination) return sortedData();
        const start = (currentPage - 1) * pageSize;
        return sortedData().slice(start, start + pageSize);
    });

    function goto(page: number) {
        const next = Math.min(Math.max(1, page), totalPages());
        if (next !== currentPage) {
            currentPage = next;
            dispatch("pageChange", { page: currentPage });
        }
    }

    // Selection helpers
    function isAllCurrentSelected(): boolean {
        if (!selectable) return false;
        const rows = pageData();
        if (rows.length === 0) return false;
        return rows.every((r) => selectedRows.includes(r.id));
    }

    function toggleSelectAll() {
        if (!selectable) return;
        const rows = pageData();
        if (rows.length === 0) return;
        if (isAllCurrentSelected()) {
            // Remove current page rows
            selectedRows = selectedRows.filter(
                (id) => !rows.some((r) => r.id === id),
            );
        } else {
            const add = rows
                .map((r) => r.id)
                .filter((id) => !selectedRows.includes(id));
            selectedRows = [...selectedRows, ...add];
        }
        dispatch("selectionChange", { selected: selectedRows });
    }

    function toggleRow(rowId: RowId) {
        if (!selectable) return;
        selectedRows = selectedRows.includes(rowId)
            ? selectedRows.filter((id) => id !== rowId)
            : [...selectedRows, rowId];
        dispatch("selectionChange", { selected: selectedRows });
    }

    // Accessibility helpers
    function ariaSort(
        col: TableColumn,
    ): "none" | "ascending" | "descending" | undefined {
        if (!col.sortable) return;
        if (!sort || sort.key !== col.key) return "none";
        return sort?.direction === "asc" ? "ascending" : "descending";
    }
    $effect(() => {
        // Access reactive values & helpers explicitly to satisfy analyzer without fake logic
        void columns.length;
        void selectedRows.length;
        void pageData().length;
        void sortedData().length;
        void totalPages();
        void emptyMessage;
        void className;
        void rest;
        void toggleSort;
        void alignmentClass;
        void goto;
        void toggleSelectAll;
        void toggleRow;
        void ariaSort;
    });
</script>

<div class={"w-full " + className} {...rest}>
    <div class="overflow-x-auto border border-white/10 rounded-lg">
        <table class="w-full text-sm border-collapse">
            <thead class="bg-white/5 text-white/80">
                <tr>
                    {#if selectable}
                        <th class="w-8 px-2 py-2 align-middle">
                            <input
                                type="checkbox"
                                aria-label="Select page rows"
                                checked={isAllCurrentSelected()}
                                onclick={toggleSelectAll}
                            />
                        </th>
                    {/if}
                    {#each columns as col (col.key)}
                        <th
                            class={"px-3 py-2 font-semibold tracking-wide select-none " +
                                alignmentClass(col.align) +
                                (col.sortable
                                    ? " cursor-pointer hover:bg-white/10"
                                    : "")}
                            style={col.width ? `width:${col.width}` : undefined}
                            role={col.sortable ? "columnheader" : undefined}
                            aria-sort={ariaSort(col)}
                            onclick={() => toggleSort(col)}
                        >
                            <span>{col.label}</span>
                            {#if col.sortable}
                                {#if sort && sort.key === col.key}
                                    <span
                                        class="inline-block ml-1 text-xs opacity-70"
                                    >
                                        {sort.direction === "asc" ? "▲" : "▼"}
                                    </span>
                                {:else}
                                    <span
                                        class="inline-block ml-1 text-xs opacity-30"
                                        aria-hidden="true">↕</span
                                    >
                                {/if}
                            {/if}
                        </th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#if pageData().length === 0}
                    <tr>
                        <td
                            class="px-4 py-6 text-center text-white/60"
                            colspan={columns.length + (selectable ? 1 : 0)}
                        >
                            {emptyMessage}
                        </td>
                    </tr>
                {:else}
                    {#each pageData() as row (row.id)}
                        <tr
                            class="border-t border-white/5 text-white/90 hover:bg-white/5 transition-colors"
                        >
                            {#if selectable}
                                <td class="px-2 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        aria-label={`Select row ${row.id}`}
                                        checked={selectedRows.includes(row.id)}
                                        onclick={() => toggleRow(row.id)}
                                    />
                                </td>
                            {/if}
                            {#each columns as col (col.key)}
                                <td
                                    class={"px-3 py-2 align-top " +
                                        alignmentClass(col.align)}
                                >
                                    {row[col.key] as any}
                                </td>
                            {/each}
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>

    {#if showPagination && totalPages() > 1}
        <div
            class="flex items-center justify-between mt-3 text-xs text-white/70 gap-4 flex-wrap"
        >
            <div>
                Page {currentPage} of {totalPages()}
            </div>
            <div class="flex items-center gap-2">
                <button
                    class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed"
                    onclick={() => goto(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <button
                    class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed"
                    onclick={() => goto(currentPage + 1)}
                    disabled={currentPage === totalPages()}
                >
                    Next
                </button>
            </div>
        </div>
    {/if}
</div>

<style>
    table {
        font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
    }

    th,
    td {
        vertical-align: top;
    }
</style>
