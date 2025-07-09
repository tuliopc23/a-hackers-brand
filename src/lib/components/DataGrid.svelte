<script context="module" lang="ts">
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
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { brandColors } from '$lib/tokens';
	import { glassFade, magneticHover, liquidBlur } from '$lib/motion';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import type { GridColumn, GridRow, GridFilter } from './DataGrid.svelte';

	interface Props {
		columns: GridColumn[];
		data: GridRow[];
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		loading?: boolean;
		virtualScrolling?: boolean;
		rowHeight?: number;
		maxHeight?: string;
		sortBy?: string;
		sortOrder?: 'asc' | 'desc';
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
			variant?: 'primary' | 'secondary' | 'danger';
			show?: (row: GridRow) => boolean;
		}>;
		emptyMessage?: string;
		class?: string;
	}

	const {
		columns = [],
		data = [],
		variant = 'default',
		size = 'md',
		loading = false,
		virtualScrolling = false,
		rowHeight = 60,
		maxHeight = '600px',
		sortBy = '',
		sortOrder = 'asc',
		filters = [],
		searchable = true,
		searchPlaceholder = 'Search...',
		selectable = false,
		multiSelect = false,
		selectedRows = new Set(),
		editable = false,
		pagination = true,
		pageSize = 10,
		currentPage = 1,
		totalRows,
		stickyHeader = true,
		resizableColumns = false,
		reorderableColumns = false,
		exportable = false,
		actions = [],
		emptyMessage = 'No data available',
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		sort: { column: string; order: 'asc' | 'desc' };
		filter: { filters: GridFilter[] };
		search: { query: string };
		rowClick: { row: GridRow; index: number };
		rowSelect: { row: GridRow; selected: boolean };
		selectAll: { selected: boolean };
		cellEdit: { row: GridRow; column: string; oldValue: any; newValue: any };
		actionClick: { row: GridRow; action: string };
		pageChange: { page: number };
		pageSizeChange: { pageSize: number };
		export: { format: string };
	}>();

	let searchQuery = $state('');
	const currentFilters = $state<GridFilter[]>(filters);
	let currentSortBy = $state(sortBy);
	let currentSortOrder = $state(sortOrder);
	let currentSelectedRows = $state(selectedRows);
	let editingCell = $state<{ rowId: string | number; column: string } | null>(null);
	let editingValue = $state('');

	const variants = {
		default: {
			container: 'bg-gray-900 border-gray-700',
			header: 'bg-gray-800 border-gray-700',
			headerCell: 'text-gray-300 border-gray-700',
			row: 'border-gray-700 text-white',
			rowHover: 'hover:bg-gray-800',
			rowSelected: 'bg-blue-600/20',
			cell: 'text-gray-100 border-gray-700',
			toolbar: 'bg-gray-800 border-gray-700',
			pagination: 'bg-gray-800 border-gray-700'
		},
		glass: {
			container: 'bg-white/5 backdrop-blur-xl border-white/20',
			header: 'bg-white/10 border-white/20',
			headerCell: 'text-white/90 border-white/20',
			row: 'border-white/10 text-white',
			rowHover: 'hover:bg-white/5',
			rowSelected: 'bg-white/10',
			cell: 'text-white/90 border-white/10',
			toolbar: 'bg-white/10 border-white/20',
			pagination: 'bg-white/10 border-white/20'
		},
		terminal: {
			container: `bg-black/90 border-${brandColors.terminal.green}`,
			header: `bg-${brandColors.terminal.green}/10 border-${brandColors.terminal.green}`,
			headerCell: `text-${brandColors.terminal.green} border-${brandColors.terminal.green}/30`,
			row: `border-${brandColors.terminal.green}/20 text-${brandColors.terminal.green}`,
			rowHover: `hover:bg-${brandColors.terminal.green}/5`,
			rowSelected: `bg-${brandColors.terminal.green}/10`,
			cell: `text-${brandColors.terminal.green}/90 border-${brandColors.terminal.green}/20`,
			toolbar: `bg-${brandColors.terminal.green}/5 border-${brandColors.terminal.green}/30`,
			pagination: `bg-${brandColors.terminal.green}/5 border-${brandColors.terminal.green}/30`
		}
	};

	const sizes = {
		sm: { cell: 'px-2 py-1 text-xs', header: 'px-2 py-2 text-xs' },
		md: { cell: 'px-3 py-2 text-sm', header: 'px-3 py-3 text-sm' },
		lg: { cell: 'px-4 py-3 text-base', header: 'px-4 py-4 text-base' }
	};

	const currentVariant = $derived(variants[variant]);
	const currentSize = $derived(sizes[size]);

	// Computed filtered and sorted data
	const filteredData = $derived(() => {
		let result = data;

		// Apply search
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter((row) =>
				columns.some((col) => {
					const value = String(row[col.key] || '').toLowerCase();
					return value.includes(query);
				})
			);
		}

		// Apply filters
		for (const filter of currentFilters) {
			result = result.filter((row) => {
				const value = row[filter.column];
				switch (filter.operator) {
					case 'equals':
						return value === filter.value;
					case 'contains':
						return String(value).toLowerCase().includes(String(filter.value).toLowerCase());
					case 'startsWith':
						return String(value).toLowerCase().startsWith(String(filter.value).toLowerCase());
					case 'endsWith':
						return String(value).toLowerCase().endsWith(String(filter.value).toLowerCase());
					case 'gt':
						return Number(value) > Number(filter.value);
					case 'lt':
						return Number(value) < Number(filter.value);
					case 'gte':
						return Number(value) >= Number(filter.value);
					case 'lte':
						return Number(value) <= Number(filter.value);
					default:
						return true;
				}
			});
		}

		// Apply sorting
		if (currentSortBy) {
			const column = columns.find((col) => col.key === currentSortBy);
			if (column?.sortable) {
				result.sort((a, b) => {
					const aVal = a[currentSortBy];
					const bVal = b[currentSortBy];
					if (aVal === bVal) return 0;
					const isAsc = currentSortOrder === 'asc';
					if (aVal < bVal) return isAsc ? -1 : 1;
					return isAsc ? 1 : -1;
				});
			}
		}

		return result;
	});

	// Pagination
	const totalPages = $derived(Math.ceil((totalRows ?? filteredData.length) / pageSize));
	const paginatedData = $derived(() => {
		if (!pagination) return filteredData;
		const start = (currentPage - 1) * pageSize;
		return filteredData.slice(start, start + pageSize);
	});

	function handleSort(column: GridColumn) {
		if (!column.sortable) return;

		if (currentSortBy === column.key) {
			currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			currentSortBy = column.key;
			currentSortOrder = 'asc';
		}

		dispatch('sort', { column: column.key, order: currentSortOrder });
	}

	function handleSearch() {
		dispatch('search', { query: searchQuery });
	}

	function handleRowClick(row: GridRow, index: number) {
		dispatch('rowClick', { row, index });
	}

	function handleRowSelect(row: GridRow, selected: boolean) {
		if (multiSelect) {
			if (selected) {
				currentSelectedRows.add(row.id);
			} else {
				currentSelectedRows.delete(row.id);
			}
		} else {
			currentSelectedRows = selected ? new Set([row.id]) : new Set();
		}
		currentSelectedRows = new Set(currentSelectedRows);
		dispatch('rowSelect', { row, selected });
	}

	function handleSelectAll(selected: boolean) {
		if (selected) {
			currentSelectedRows = new Set(paginatedData.map((row) => row.id));
		} else {
			currentSelectedRows = new Set();
		}
		dispatch('selectAll', { selected });
	}

	function startEdit(row: GridRow, column: GridColumn) {
		if (!editable || !column.editable) return;
		editingCell = { rowId: row.id, column: column.key };
		editingValue = String(row[column.key] || '');
	}

	function saveEdit() {
		if (!editingCell) return;

		const row = paginatedData.find((r) => r.id === editingCell!.rowId);
		if (!row) return;

		const column = columns.find((c) => c.key === editingCell!.column);
		if (!column) return;

		const oldValue = row[column.key];
		let newValue: any = editingValue;

		// Type conversion
		switch (column.type) {
			case 'number':
				newValue = Number(newValue);
				break;
			case 'boolean':
				newValue = newValue === 'true';
				break;
			case 'date':
				newValue = new Date(newValue);
				break;
		}

		// Validation
		if (column.validation) {
			const error = column.validation(newValue);
			if (error) {
				alert(error); // In real app, use proper error handling
				return;
			}
		}

		dispatch('cellEdit', { row, column: column.key, oldValue, newValue });
		editingCell = null;
		editingValue = '';
	}

	function cancelEdit() {
		editingCell = null;
		editingValue = '';
	}

	function formatCellValue(column: GridColumn, value: any, row: GridRow): string {
		if (column.render) {
			return column.render(value, row, column);
		}
		if (column.formatter) {
			return column.formatter(value, row);
		}

		switch (column.type) {
			case 'boolean':
				return value ? '✓' : '✗';
			case 'date':
				return value instanceof Date ? value.toLocaleDateString() : String(value || '');
			case 'number':
				return typeof value === 'number' ? value.toLocaleString() : String(value || '');
			default:
				return String(value || '');
		}
	}

	const isAllSelected = $derived(
		paginatedData.length > 0 && paginatedData.every((row) => currentSelectedRows.has(row.id))
	);

	const containerClasses = $derived(
		cn('rounded-lg border overflow-hidden font-mono', currentVariant.container, className)
	);
</script>

<div class={containerClasses}>
	<!-- Toolbar -->
	{#if searchable || exportable || actions.length > 0}
		<div class={cn('px-4 py-3 border-b flex items-center justify-between', currentVariant.toolbar)}>
			<div class="flex items-center gap-3">
				{#if searchable}
					<div class="relative">
						<Input
							bind:value={searchQuery}
							placeholder={searchPlaceholder}
							size="sm"
							{variant}
							class="w-64"
							onkeydown={(e) => {
								if (e.key === 'Enter') handleSearch();
							}}
						/>
						<button
							onclick={handleSearch}
							class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
						>
							🔍
						</button>
					</div>
				{/if}

				{#if currentSelectedRows.size > 0}
					<span class="text-sm text-gray-400">
						{currentSelectedRows.size} selected
					</span>
				{/if}
			</div>

			<div class="flex items-center gap-2">
				{#if exportable}
					<Button size="sm" {variant} onclick={() => dispatch('export', { format: 'csv' })}>📥 Export</Button>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Table Container -->
	<div
		class="overflow-auto"
		style={maxHeight ? `max-height: ${maxHeight}` : undefined}
		use:liquidBlur={{ blur: 'sm', opacity: 'subtle' }}
	>
		<table class="w-full">
			<!-- Header -->
			<thead class={cn(currentVariant.header, stickyHeader && 'sticky top-0 z-10')}>
				<tr>
					{#if selectable}
						<th class={cn(currentSize.header, currentVariant.headerCell, 'w-12')}>
							<input
								type="checkbox"
								checked={isAllSelected}
								onchange={(e) => {
									const target = e.target as HTMLInputElement;
									handleSelectAll(target.checked);
								}}
								class="rounded bg-transparent border-current"
							/>
						</th>
					{/if}

					{#each columns as column (column.key)}
						<th
							class={cn(
								currentSize.header,
								currentVariant.headerCell,
								'font-semibold text-left',
								column.align && `text-${column.align}`,
								column.sortable && 'cursor-pointer select-none'
							)}
							style={column.width ? `width: ${column.width}` : undefined}
							onclick={() => column.sortable && handleSort(column)}
							use:magneticHover={{ enabled: column.sortable, strength: 0.05 }}
						>
							<div class="flex items-center gap-2">
								<span>{column.label}</span>
								{#if column.sortable}
									<div class="flex flex-col">
										<svg
											class={cn(
												'w-3 h-3 transition-colors',
												currentSortBy === column.key && currentSortOrder === 'asc' ? 'text-blue-400' : 'text-gray-500'
											)}
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											/>
										</svg>
										<svg
											class={cn(
												'w-3 h-3 -mt-1 transition-colors',
												currentSortBy === column.key && currentSortOrder === 'desc' ? 'text-blue-400' : 'text-gray-500'
											)}
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											/>
										</svg>
									</div>
								{/if}
							</div>
						</th>
					{/each}

					{#if actions.length > 0}
						<th class={cn(currentSize.header, currentVariant.headerCell, 'w-32')}> Actions </th>
					{/if}
				</tr>
			</thead>

			<!-- Body -->
			<tbody>
				{#if loading}
					<tr>
						<td
							colspan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
							class={cn(currentSize.cell, currentVariant.cell, 'text-center')}
						>
							<div class="flex items-center justify-center gap-3 py-8">
								<svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								<span>Loading...</span>
							</div>
						</td>
					</tr>
				{:else if paginatedData.length === 0}
					<tr>
						<td
							colspan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
							class={cn(currentSize.cell, currentVariant.cell, 'text-center text-gray-400')}
						>
							<div class="py-8">
								<svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
									/>
								</svg>
								<p>{emptyMessage}</p>
							</div>
						</td>
					</tr>
				{:else}
					{#each paginatedData as row, index (row.id)}
						{@const isSelected = currentSelectedRows.has(row.id)}
						<tr
							class={cn(
								currentVariant.row,
								currentVariant.rowHover,
								isSelected && currentVariant.rowSelected,
								'transition-colors duration-150 cursor-pointer'
							)}
							onclick={() => handleRowClick(row, index)}
							in:glassFade={{ direction: 'up', duration: 100, delay: index * 20 }}
						>
							{#if selectable}
								<td class={cn(currentSize.cell, currentVariant.cell)}>
									<input
										type="checkbox"
										checked={isSelected}
										onchange={(e) => {
											const target = e.target as HTMLInputElement;
											handleRowSelect(row, target.checked);
										}}
										onclick={(e) => e.stopPropagation()}
										class="rounded bg-transparent border-current"
									/>
								</td>
							{/if}

							{#each columns as column (column.key)}
								<td
									class={cn(currentSize.cell, currentVariant.cell, column.align && `text-${column.align}`)}
									ondblclick={() => editable && column.editable && startEdit(row, column)}
								>
									{#if editingCell?.rowId === row.id && editingCell?.column === column.key}
										<input
											bind:value={editingValue}
											class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"
											onkeydown={(e) => {
												if (e.key === 'Enter') saveEdit();
												if (e.key === 'Escape') cancelEdit();
											}}
											onblur={saveEdit}
										/>
									{:else}
										{@html formatCellValue(column, row[column.key], row)}
									{/if}
								</td>
							{/each}

							{#if actions.length > 0}
								<td class={cn(currentSize.cell, currentVariant.cell)}>
									<div class="flex items-center gap-1">
										{#each actions as action}
											{#if !action.show || action.show(row)}
												<Button
													size="sm"
													variant={action.variant || 'secondary'}
													onclick={(e) => {
														e.stopPropagation();
														dispatch('actionClick', { row, action: action.action });
													}}
												>
													{#if action.icon}
														<span class="mr-1">{action.icon}</span>
													{/if}
													{action.label}
												</Button>
											{/if}
										{/each}
									</div>
								</td>
							{/if}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>

	<!-- Pagination -->
	{#if pagination && totalPages > 1}
		<div class={cn('px-4 py-3 border-t flex items-center justify-between', currentVariant.pagination)}>
			<div class="flex items-center gap-3">
				<span class="text-sm text-gray-400">
					Showing {(currentPage - 1) * pageSize + 1} to {Math.min(
						currentPage * pageSize,
						totalRows ?? filteredData.length
					)} of {totalRows ?? filteredData.length} entries
				</span>
			</div>

			<div class="flex items-center gap-2">
				<Button
					size="sm"
					{variant}
					disabled={currentPage === 1}
					onclick={() => dispatch('pageChange', { page: currentPage - 1 })}
				>
					Previous
				</Button>

				{#each Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
					const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
					return page;
				}) as page}
					<Button
						size="sm"
						variant={page === currentPage ? 'primary' : 'secondary'}
						onclick={() => dispatch('pageChange', { page })}
					>
						{page}
					</Button>
				{/each}

				<Button
					size="sm"
					{variant}
					disabled={currentPage === totalPages}
					onclick={() => dispatch('pageChange', { page: currentPage + 1 })}
				>
					Next
				</Button>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Terminal glow effects */
	:global(.terminal .data-grid:hover) {
		box-shadow:
			0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);
	}
</style>
