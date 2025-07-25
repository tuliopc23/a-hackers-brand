<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { brandColors } from '$lib/tokens';
	import { glassFade, magneticHover } from '$lib/motion';

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

	const {
		columns = [],
		data = [],
		variant = 'default',
		size = 'md',
		striped = false,
		hover = true,
		bordered = false,
		loading = false,
		sortBy = '',
		sortOrder = 'asc',
		selectable = false,
		selectedRows = new Set(),
		stickyHeader = false,
		maxHeight,
		emptyMessage = 'No data available',
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		sort: { column: string; order: 'asc' | 'desc' };
		rowClick: { row: TableRow; index: number };
		rowSelect: { row: TableRow; selected: boolean };
		selectAll: { selected: boolean };
	}>();

	let currentSortBy = $state(sortBy);
	let currentSortOrder = $state(sortOrder);
	let currentSelectedRows = $state(selectedRows);

	const variants = {
		default: {
			table: 'bg-gray-900 text-white',
			header: 'bg-gray-800 border-gray-700',
			headerCell: 'text-gray-300 border-gray-700',
			row: 'border-gray-700',
			rowHover: 'hover:bg-gray-800',
			rowSelected: 'bg-blue-600/20',
			cell: 'text-gray-100 border-gray-700',
			loading: 'bg-gray-800/50'
		},
		glass: {
			table: 'bg-white/5 backdrop-blur-md text-white',
			header: 'bg-white/10 border-white/20',
			headerCell: 'text-white/90 border-white/20',
			row: 'border-white/10',
			rowHover: 'hover:bg-white/5',
			rowSelected: 'bg-white/10',
			cell: 'text-white/90 border-white/10',
			loading: 'bg-white/5'
		},
		terminal: {
			table: `bg-black/90 text-${brandColors.terminal.green}`,
			header: `bg-${brandColors.terminal.green}/10 border-${brandColors.terminal.green}`,
			headerCell: `text-${brandColors.terminal.green} border-${brandColors.terminal.green}/30`,
			row: `border-${brandColors.terminal.green}/20`,
			rowHover: `hover:bg-${brandColors.terminal.green}/5`,
			rowSelected: `bg-${brandColors.terminal.green}/10`,
			cell: `text-${brandColors.terminal.green}/90 border-${brandColors.terminal.green}/20`,
			loading: `bg-${brandColors.terminal.green}/5`
		}
	};

	const sizes = {
		sm: {
			cell: 'px-3 py-2 text-sm',
			header: 'px-3 py-2 text-xs'
		},
		md: {
			cell: 'px-4 py-3 text-sm',
			header: 'px-4 py-3 text-sm'
		},
		lg: {
			cell: 'px-6 py-4 text-base',
			header: 'px-6 py-4 text-base'
		}
	};

	const currentVariant = $derived(variants()[variant]);
	const currentSize = $derived(sizes()[size]);

	const sortedData = $derived(() => {
		const sorted = [...data];
		if (currentSortBy && currentSortOrder) {
			sorted.sort((a, b) => {
				const aVal = a[currentSortBy] || '';
				const bVal = b[currentSortBy] || '';
				if (currentSortOrder === 'asc') {
					return aVal > bVal ? 1 : -1;
				} else {
					return aVal < bVal ? 1 : -1;
				}
			});
		}
		return sorted;
	});

	function handleSort(column: TableColumn) {
		if (!column.sortable) return;

		if (currentSortBy === column.key) {
			currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			currentSortBy = column.key;
			currentSortOrder = 'asc';
		}

		dispatch('sort', { column: column.key, order: currentSortOrder });
	}

	function handleRowClick(row: TableRow, index: number) {
		dispatch('rowClick', { row, index });
	}

	function handleRowSelect(row: TableRow, selected: boolean) {
		const rowId = row.id ?? index;
		if (selected) {
			currentSelectedRows.add(rowId);
		} else {
			currentSelectedRows.delete(rowId);
		}
		currentSelectedRows = new Set(currentSelectedRows);
		dispatch('rowSelect', { row, selected });
	}

	function handleSelectAll(selected: boolean) {
		if (selected) {
			currentSelectedRows = new Set(data().map((row, index) => row.id ?? index));
		} else {
			currentSelectedRows = new Set();
		}
		dispatch('selectAll', { selected });
	}

	function formatCellValue(column: TableColumn, value: any, row: TableRow): string {
		if (column.render) {
			return column.render(value, row);
		}
		if (column.formatter) {
			return column.formatter(value);
		}
		return String(value ?? '');
	}

	const isAllSelected = $derived(
		data().length > 0 && data().every((row, index) => currentSelectedRows.has(row.id ?? index))
	);

	const isIndeterminate = $derived(currentSelectedRows.size > 0 && !isAllSelected);

	const tableClasses = $derived(
		cn(
			'w-full font-mono rounded-lg overflow-hidden border',
			currentVariant.table,
			currentVariant.row,
			bordered && 'border-2',
			className
		)
	);

	const containerClasses = $derived(
		cn('overflow-auto', maxHeight && `max-h-[${maxHeight}]`, stickyHeader && 'relative')
	);
</script>

<div class={containerClasses}>
	<table class={tableClasses}>
		<caption class="sr-only">
			Data table with {data().length} rows and {columns().length} columns
		</caption>
		<!-- Table Header -->
		<thead class={cn(currentVariant.header, stickyHeader && 'sticky top-0 z-10')}>
			<tr>
				{#if selectable}
					<th class={cn(currentSize.header, currentVariant.headerCell, 'w-12')} scope="col">
						<input
							type="checkbox"
							checked={isAllSelected}
							indeterminate={isIndeterminate}
							onchange={(e) => {
								const target = e.target as HTMLInputElement;
								handleSelectAll(target.checked);
							}}
							aria-label="Select all rows"
							class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500"
						/>
					</th>
				{/if}

				{#each columns() as column (column.key)}
					<th
						class={cn(
							currentSize.header,
							currentVariant.headerCell,
							'font-semibold uppercase tracking-wider',
							`text-${column.align || 'left'}`,
							column.sortable && 'cursor-pointer select-none',
							bordered && 'border-r last:border-r-0'
						)}
						style={column.width ? `width: ${column.width}` : undefined}
						onclick={() => column.sortable && handleSort(column)}
						onkeydown={(e) => e.key === 'Enter' && column.sortable && handleSort(column)(e)}
						scope="col"
						aria-sort={currentSortBy === column.key
							? currentSortOrder === 'asc'
								? 'ascending'
								: 'descending'
							: 'none'}
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
			</tr>
		</thead>

		<!-- Table Body -->
		<tbody>
			{#if loading}
				<tr>
					<td
						colspan={columns().length + (selectable ? 1 : 0)}
						class={cn(currentSize.cell, currentVariant.loading, 'text-center')}
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
			{:else if sortedData().length === 0}
				<tr>
					<td
						colspan={columns().length + (selectable ? 1 : 0)}
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
				{#each sortedData() as row, index (row.id ?? index)}
					{@const rowId = row.id ?? index}
					{@const isSelected = currentSelectedRows.has(rowId)}
					<tr
						class={cn(
							currentVariant.row,
							hover && currentVariant.rowHover,
							striped && index % 2 === 1 && 'bg-black/20',
							isSelected && currentVariant.rowSelected,
							'transition-colors duration-150 cursor-pointer'
						)}
						onclick={() => handleRowClick(row, index)}
						onkeydown={(e) => e.key === 'Enter' && handleRowClick(row, index)}
						in:glassFade={{ direction: 'up', duration: 100, delay: index * 20 }}
					>
						{#if selectable}
							<td class={cn(currentSize.cell, currentVariant.cell, bordered && 'border-r')}>
								<input
									type="checkbox"
									checked={isSelected}
									onchange={(e) => {
										const target = e.target as HTMLInputElement;
										handleRowSelect(row, target.checked);
									}}
									onclick={(e) => e.stopPropagation()}
									onkeydown={(e) => e.key === 'Enter' && handleAction()}
									class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500"
								/>
							</td>
						{/if}

						{#each columns() as column (column.key)}
							<td
								class={cn(
									currentSize.cell,
									currentVariant.cell,
									`text-${column.align || 'left'}`,
									bordered && 'border-r last:border-r-0'
								)}
							>
								{@html formatCellValue(column, row[column.key], row)}
							</td>
						{/each}
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>

<style>
	/* Terminal glow effects */
	:global(.terminal .table-row:hover) {
		box-shadow:
			0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);
	}

	/* Custom checkbox styling for dark themes */
	input[type='checkbox']:indeterminate {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 8h8v1H4z'/%3e%3c/svg%3e");
	}
</style>
