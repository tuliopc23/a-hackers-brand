<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, springPop } from '../motion';
	import { brandColors } from '../tokens';
	import { createEventDispatcher } from 'svelte';
import { ChevronUp, ChevronDown, Search, Filter } from 'lucide-svelte';
import { sanitizeHTML } from '../utils/sanitize';
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

	let {
		columns,
		data,
		sortConfig = $bindable(),
		filterConfig = $bindable(),
		loading = false,
		selectable = false,
		selectedRows = $bindable([]),
		striped = false,
		bordered = true,
		hover = true,
		size = 'md',
		variant = 'glass',
		stickyHeader = false,
		virtualScroll = false,
		pageSize = 10,
		currentPage = $bindable(1),
		totalRows,
		showPagination = false,
		emptyMessage = 'No data available',
		class: className = '',
		...restProps
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let searchQuery = $state('');
	let showFilters = $state(false);
	let tableElement: HTMLDivElement;

	const sizes = {
		sm: {
			table: 'text-sm',
			cell: 'px-3 py-2',
			header: 'px-3 py-2.5'
		},
		md: {
			table: 'text-base',
			cell: 'px-4 py-3',
			header: 'px-4 py-3'
		},
		lg: {
			table: 'text-lg',
			cell: 'px-6 py-4',
			header: 'px-6 py-4'
		}
	};

	const variants = {
		glass: {
			table: 'bg-black/10 border-white/10 backdrop-blur-md',
			header: 'bg-white/5 border-white/10 text-white',
			headerCell: 'text-white/90 border-white/10',
			row: 'border-white/5 text-white/90',
			rowHover: 'hover:bg-white/5',
			rowSelected: 'bg-blue-500/20',
			cell: 'border-white/5'
		},
		terminal: {
			table: 'bg-black/80 border-terminal-green/30',
			header: 'bg-terminal-green/10 border-terminal-green/30 text-terminal-green',
			headerCell: 'text-terminal-green border-terminal-green/20',
			row: 'border-terminal-green/20 text-terminal-green',
			rowHover: 'hover:bg-terminal-green/10',
			rowSelected: 'bg-terminal-green/30',
			cell: 'border-terminal-green/10'
		},
		liquid: {
			table: 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-white/10 backdrop-blur-md',
			header: 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10 text-white',
			headerCell: 'text-white border-white/10',
			row: 'border-white/5 text-white',
			rowHover: 'hover:bg-white/5',
			rowSelected: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20',
			cell: 'border-white/5'
		}
	};

	const currentSize = sizes[size];
	const currentVariant = variants[variant];

	// Computed properties
	const filteredData = $derived(() => {
		let filtered = [...data];

		// Apply global search
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter((row) => columns.some((col) => String(row[col.key]).toLowerCase().includes(query)));
		}

		// Apply column filters
		if (filterConfig) {
			filtered = filtered.filter((row) => {
				return Object.entries(filterConfig).every(([key, value]) => {
					if (!value) return true;
					const cellValue = String(row[key]).toLowerCase();
					const filterValue = String(value).toLowerCase();
					return cellValue.includes(filterValue);
				});
			});
		}

		return filtered;
	});

	const sortedData = $derived(() => {
		if (!sortConfig) return filteredData;

		const { key, direction } = sortConfig;

		return [...filteredData].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];

			let comparison = 0;

			if (aVal < bVal) comparison = -1;
			if (aVal > bVal) comparison = 1;

			return direction === 'desc' ? -comparison : comparison;
		});
	});

	const paginatedData = $derived(() => {
		if (!showPagination) return sortedData;

		const start = (currentPage - 1) * pageSize;
		const end = start + pageSize;
		return sortedData.slice(start, end);
	});

	const totalPages = $derived(() => {
		if (!showPagination) return 1;
		return Math.ceil((totalRows || sortedData.length) / pageSize);
	});

	const isAllSelected = $derived(() => {
		if (!selectable || paginatedData.length === 0) return false;
		return paginatedData.every((row) => selectedRows.includes(row.id));
	});

	const isIndeterminate = $derived(() => {
		if (!selectable || paginatedData.length === 0) return false;
		const selectedCount = paginatedData.filter((row) => selectedRows.includes(row.id)).length;
		return selectedCount > 0 && selectedCount < paginatedData.length;
	});

	function handleSort(columnKey: string) {
		const column = columns.find((col) => col.key === columnKey);
		if (!column?.sortable) return;

		if (sortConfig?.key === columnKey) {
			sortConfig = {
				key: columnKey,
				direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'
			};
		} else {
			sortConfig = { key: columnKey, direction: 'asc' };
		}

		dispatch('sort', { sortConfig });
	}

	function handleSelectAll() {
		if (isAllSelected) {
			selectedRows = selectedRows.filter((id) => !paginatedData.some((row) => row.id === id));
		} else {
			const newSelections = paginatedData.map((row) => row.id);
			selectedRows = [...new Set([...selectedRows, ...newSelections])];
		}
		dispatch('selectionChange', { selectedRows });
	}

	function handleSelectRow(rowId: string | number) {
		if (selectedRows.includes(rowId)) {
			selectedRows = selectedRows.filter((id) => id !== rowId);
		} else {
			selectedRows = [...selectedRows, rowId];
		}
		dispatch('selectionChange', { selectedRows });
	}

	function handleFilterChange(columnKey: string, value: string) {
		if (!filterConfig) filterConfig = {};

		if (value.trim()) {
			filterConfig[columnKey] = value;
		} else {
			delete filterConfig[columnKey];
		}

		// Reset to first page when filtering
		currentPage = 1;

		dispatch('filter', { filterConfig });
	}

	function clearFilters() {
		filterConfig = {};
		searchQuery = '';
		currentPage = 1;
		dispatch('filter', { filterConfig: {} });
	}

	function getSortIcon(columnKey: string) {
		if (!sortConfig || sortConfig.key !== columnKey) return null;
		return sortConfig.direction === 'asc' ? ChevronUp : ChevronDown;
	}

	function getColumnAlignment(align?: string) {
		switch (align) {
			case 'center':
				return 'text-center';
			case 'right':
				return 'text-right';
			default:
				return 'text-left';
		}
	}

	function getCellValue(row: TableRow, column: TableColumn) {
		const value = row[column.key];
		return column.render ? column.render(value, row) : value;
	}
</script>

<div class={cn('w-full', className)} bind:this={tableElement} {...restProps}>
	<!-- Toolbar -->
	<div class={cn('flex items-center justify-between p-4 border-b rounded-t-lg', currentVariant.header)}>
		<div class="flex items-center gap-4">
			<!-- Global Search -->
			<div class="relative">
				<Search size={16} class="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50" />
				<input
					bind:value={searchQuery}
					placeholder="Search..."
					class={cn(
						'pl-9 pr-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors',
						'focus:outline-none focus:ring-2 focus:ring-blue-400/50'
					)}
				/>
			</div>

			<!-- Filter Toggle -->
			<button
				onclick={() => (showFilters = !showFilters)}
				class={cn(
					'p-2 rounded border transition-colors',
					'bg-white/5 border-white/10 text-white hover:bg-white/10',
					showFilters && 'bg-blue-500/20 border-blue-400/40'
				)}
				title="Toggle Filters"
			>
				<Filter size={16} />
			</button>

			{#if Object.keys(filterConfig || {}).length > 0 || searchQuery}
				<button onclick={clearFilters} class="text-sm text-blue-400 hover:text-blue-300 transition-colors">
					Clear Filters
				</button>
			{/if}
		</div>

		<!-- Selection Info -->
		{#if selectable && selectedRows.length > 0}
			<div class="text-sm opacity-70">
				{selectedRows.length} of {totalRows || sortedData.length} selected
			</div>
		{/if}
	</div>

	<!-- Column Filters -->
	{#if showFilters}
		<div class={cn('p-4 border-b bg-white/5', currentVariant.header)}>
			<div
				class="grid gap-4"
				style="grid-template-columns: repeat({columns.filter((col) => col.filterable).length}, 1fr);"
			>
				{#each columns.filter((col) => col.filterable) as column (column.key)}
					<div>
                        <label class="block text-xs font-medium mb-1 opacity-70" for={`filter-${column.key}`}>
                            {column.label}
                        </label>
						<input
                            id={`filter-${column.key}`}
							value={filterConfig?.[column.key] || ''}
							oninput={(e) => handleFilterChange(column.key, e.currentTarget.value)}
							placeholder={`Filter by ${column.label.toLowerCase()}...`}
							class={cn(
								'w-full px-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors',
								'focus:outline-none focus:ring-2 focus:ring-blue-400/50'
							)}
						/>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Table -->
	<div class={cn('overflow-x-auto', stickyHeader && 'max-h-96 overflow-y-auto')}>
		<table class={cn('w-full', currentSize.table)}>
			<!-- Header -->
			<thead class={cn(currentVariant.header, stickyHeader && 'sticky top-0 z-10')}>
				<tr>
					{#if selectable}
						<th class={cn('w-8', currentSize.header, currentVariant.headerCell, bordered && 'border-r')}>
							<input
								type="checkbox"
								checked={isAllSelected}
								indeterminate={isIndeterminate}
								onchange={handleSelectAll}
								class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"
							/>
						</th>
					{/if}

					{#each columns as column (column.key)}
						<th
							class={cn(
								currentSize.header,
								currentVariant.headerCell,
								getColumnAlignment(column.align),
								column.sortable && 'cursor-pointer hover:bg-white/5',
								bordered && 'border-r last:border-r-0',
								column.headerClass
							)}
							style={column.width ? `width: ${column.width}` : undefined}
							onclick={() => column.sortable && handleSort(column.key)}
						>
							<div class="flex items-center gap-2">
								<span class="font-semibold">{column.label}</span>
								{#if column.sortable}
									{@const SortIcon = getSortIcon(column.key)}
									{#if SortIcon}
										<SortIcon size={14} />
									{:else}
										<div class="w-3.5 h-3.5 opacity-30">
											<ChevronUp size={14} class="absolute" />
											<ChevronDown size={14} class="absolute" />
										</div>
									{/if}
								{/if}
							</div>
						</th>
					{/each}
				</tr>
			</thead>

			<!-- Body -->
			<tbody class={cn(currentVariant.table)}>
				{#if loading}
					<tr>
						<td colspan={columns.length + (selectable ? 1 : 0)} class="text-center py-8">
							<div class="inline-flex items-center gap-2">
								<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
								Loading...
							</div>
						</td>
					</tr>
				{:else if paginatedData.length === 0}
					<tr>
						<td colspan={columns.length + (selectable ? 1 : 0)} class="text-center py-8 opacity-60">
							{emptyMessage}
						</td>
					</tr>
				{:else}
					{#each paginatedData as row, index (row.id)}
						<tr
							class={cn(
								currentVariant.row,
								bordered && 'border-b last:border-b-0',
								hover && currentVariant.rowHover,
								striped && index % 2 === 1 && 'bg-white/5',
								selectedRows.includes(row.id) && currentVariant.rowSelected,
								'transition-colors duration-150'
							)}
						>
							{#if selectable}
								<td class={cn(currentSize.cell, currentVariant.cell, bordered && 'border-r')}>
									<input
										type="checkbox"
										checked={selectedRows.includes(row.id)}
										onchange={() => handleSelectRow(row.id)}
										class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"
									/>
								</td>
							{/if}

							{#each columns as column (column.key)}
								<td
									class={cn(
										currentSize.cell,
										currentVariant.cell,
										getColumnAlignment(column.align),
										bordered && 'border-r last:border-r-0',
										column.cellClass
									)}
								>
									<!-- eslint-disable-next-line svelte/no-at-html-tags -- sanitized cell value rendering -->
									{@html sanitizeHTML(getCellValue(row, column))}
								</td>
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>

	<!-- Pagination -->
	{#if showPagination && totalPages > 1}
		<div class={cn('flex items-center justify-between p-4 border-t rounded-b-lg', currentVariant.header)}>
			<div class="text-sm opacity-70">
				Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, totalRows || sortedData.length)}
				of {totalRows || sortedData.length} results
			</div>

			<div class="flex items-center gap-2">
				<button
					onclick={() => (currentPage = Math.max(1, currentPage - 1))}
					disabled={currentPage === 1}
					class={cn(
						'px-3 py-1 rounded border transition-colors',
						'bg-white/5 border-white/10 text-white hover:bg-white/10',
						'disabled:opacity-50 disabled:cursor-not-allowed'
					)}
				>
					Previous
				</button>

				<span class="px-3 py-1 text-sm">
					Page {currentPage} of {totalPages}
				</span>

				<button
					onclick={() => (currentPage = Math.min(totalPages, currentPage + 1))}
					disabled={currentPage === totalPages}
					class={cn(
						'px-3 py-1 rounded border transition-colors',
						'bg-white/5 border-white/10 text-white hover:bg-white/10',
						'disabled:opacity-50 disabled:cursor-not-allowed'
					)}
				>
					Next
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Custom scrollbar for table */
	.overflow-x-auto,
	.overflow-y-auto {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
	}

	.overflow-x-auto::-webkit-scrollbar,
	.overflow-y-auto::-webkit-scrollbar {
		height: 6px;
		width: 6px;
	}

	.overflow-x-auto::-webkit-scrollbar-track,
	.overflow-y-auto::-webkit-scrollbar-track {
		background: transparent;
	}

	.overflow-x-auto::-webkit-scrollbar-thumb,
	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
	}

	.overflow-x-auto::-webkit-scrollbar-thumb:hover,
	.overflow-y-auto::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Table responsiveness */
	@media (max-width: 768px) {
		table {
			font-size: 0.875rem;
		}
	}
</style>
