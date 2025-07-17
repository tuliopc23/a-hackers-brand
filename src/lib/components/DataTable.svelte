<script lang="ts">
	import { cn } from '$lib/utils';
	import Pagination from './Pagination.svelte';

	interface Column {
		key: string;
		title: string;
		sortable?: boolean;
		width?: string;
		align?: 'left' | 'center' | 'right';
		render?: (value: any, row: any) => any;
	}

	interface Props {
		data?: any[];
		columns?: Column[];
		loading?: boolean;
		sortBy?: string;
		sortOrder?: 'asc' | 'desc';
		pagination?: boolean;
		currentPage?: number;
		itemsPerPage?: number;
		totalItems?: number;
		class?: string;
		variant?: 'default' | 'glass' | 'terminal';
		striped?: boolean;
		hover?: boolean;
		bordered?: boolean;
		onSort?: (key: string, order: 'asc' | 'desc') => void;
		onPageChange?: (page: number) => void;
		onRowClick?: (row: any, index: number) => void;
	}

	const {
		data = [],
		columns = [],
		loading = false,
		sortBy = '',
		sortOrder = 'asc',
		pagination = false,
		currentPage = 1,
		itemsPerPage = 10,
		totalItems = 0,
		class: className = '',
		variant = 'default',
		striped = false,
		hover = true,
		bordered = true,
		onSort,
		onPageChange,
		onRowClick
	}: Props = $props();

	const handleSort = (column: Column) => {
		if (!column.sortable) return;

		const newOrder = sortBy === column.key && sortOrder === 'asc' ? 'desc' : 'asc';
		onSort?.(column.key, newOrder);
	};

	const handleRowClick = (row: any, index: number) => {
		onRowClick?.(row, index);
	};

	const getSortIcon = (column: Column) => {
		if (!column.sortable) return '';
		if (sortBy !== column.key) return '↕';
		return sortOrder === 'asc' ? '↑' : '↓';
	};

	const baseTableClasses = 'w-full border-collapse';
	const variantClasses = {
		default: 'bg-white',
		glass: 'backdrop-blur-md bg-white/10 border border-white/20 rounded-lg overflow-hidden',
		terminal: 'bg-black/90 border border-terminal-green/30 rounded font-mono text-terminal-green'
	};

	const headerClasses = {
		default: 'bg-neutral-50 text-neutral-900',
		glass: 'bg-white/5 text-white',
		terminal: 'bg-terminal-green/10 text-terminal-green border-b border-terminal-green/30'
	};

	const rowClasses = {
		default: 'text-neutral-900',
		glass: 'text-white border-b border-white/10',
		terminal: 'text-terminal-green border-b border-terminal-green/20'
	};

	const totalPages = $derived(pagination ? Math.ceil((totalItems || data.length) / itemsPerPage) : 1);
	const paginatedData = $derived(
		pagination && !totalItems ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : data
	);
</script>

<div class={cn('data-table-container', className)}>
	{#if loading}
		<div class="flex items-center justify-center h-64">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
			<span class="ml-2">Loading...</span>
		</div>
	{:else}
		<div class={cn('overflow-x-auto', variantClasses[variant])}>
			<table class={cn(baseTableClasses, bordered && 'border')}>
				<thead>
					<tr class={headerClasses[variant]}>
						{#each columns as column (column.key)}
							<th
								class={cn(
									'px-4 py-3 text-left font-semibold',
									column.align === 'center' && 'text-center',
									column.align === 'right' && 'text-right',
									column.sortable && 'cursor-pointer hover:bg-opacity-80 select-none'
								)}
								style={column.width ? `width: ${column.width}` : undefined}
								onclick={() => handleSort(column)}
								role={column.sortable ? 'button' : undefined}
								tabindex={column.sortable ? 0 : undefined}
								onkeydown={(e) => {
									if (column.sortable && (e.key === 'Enter' || e.key === ' ')) {
										e.preventDefault();
										handleSort(column);
									}
								}}
							>
								<div class="flex items-center gap-2">
									{column.title}
									{#if column.sortable}
										<span class="text-xs opacity-60">
											{getSortIcon(column)}
										</span>
									{/if}
								</div>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each paginatedData as row, index (row.id || index)}
						<tr
							class={cn(
								rowClasses[variant],
								striped && index % 2 === 1 && 'bg-opacity-50',
								hover && 'hover:bg-opacity-75 transition-colors',
								onRowClick && 'cursor-pointer'
							)}
							onclick={() => handleRowClick(row, index)}
							role={onRowClick ? 'button' : undefined}
							tabindex={onRowClick ? 0 : undefined}
						>
							{#each columns as column (column.key)}
								<td
									class={cn(
										'px-4 py-3',
										column.align === 'center' && 'text-center',
										column.align === 'right' && 'text-right'
									)}
								>
									{#if column.render}
										{@html column.render(row[column.key], row)}
									{:else}
										{row[column.key] ?? '—'}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}

					{#if paginatedData.length === 0}
						<tr>
							<td colspan={columns.length} class="px-4 py-8 text-center text-neutral-500"> No data available </td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>

		{#if pagination && totalPages > 1}
			<div class="mt-4">
				<Pagination
					{currentPage}
					{totalPages}
					totalItems={totalItems || data.length}
					{itemsPerPage}
					{variant}
					onPageChange={onPageChange || (() => {})}
				/>
			</div>
		{/if}
	{/if}
</div>

<style>
	.data-table-container {
		--table-border-color: rgba(0, 0, 0, 0.1);
	}

	:global(.data-table-container.glass) {
		--table-border-color: rgba(255, 255, 255, 0.2);
	}

	:global(.data-table-container.terminal) {
		--table-border-color: rgba(0, 255, 65, 0.3);
	}

	table {
		border-color: var(--table-border-color);
	}

	th,
	td {
		border-color: var(--table-border-color);
	}
</style>
