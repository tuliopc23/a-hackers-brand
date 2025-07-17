<script lang="ts">
	import { cn } from '$lib/utils';
	import Button from './Button.svelte';

	interface Props {
		currentPage?: number;
		totalPages?: number;
		totalItems?: number;
		itemsPerPage?: number;
		showFirstLast?: boolean;
		showPrevNext?: boolean;
		maxVisiblePages?: number;
		class?: string;
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		onPageChange?: (page: number) => void;
	}

	const {
		currentPage = 1,
		totalPages = 1,
		totalItems = 0,
		itemsPerPage = 10,
		showFirstLast = true,
		showPrevNext = true,
		maxVisiblePages = 5,
		class: className = '',
		variant = 'default',
		size = 'md',
		onPageChange
	}: Props = $props();

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages && page !== currentPage) {
			onPageChange?.(page);
		}
	};

	const getVisiblePages = () => {
		const pages = [];
		const half = Math.floor(maxVisiblePages / 2);
		let start = Math.max(1, currentPage - half);
		let end = Math.min(totalPages, start + maxVisiblePages - 1);

		if (end - start + 1 < maxVisiblePages) {
			start = Math.max(1, end - maxVisiblePages + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	};

	const visiblePages = $derived(getVisiblePages());
	const hasEllipsisLeft = $derived(visiblePages[0] > 1);
	const hasEllipsisRight = $derived(visiblePages[visiblePages.length - 1] < totalPages);

	const baseClasses = 'flex items-center gap-1';
	const variantClasses = {
		default: 'text-neutral-700',
		glass: 'backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-2',
		terminal: 'font-mono text-terminal-green bg-black/50 border border-terminal-green/30 rounded p-2'
	};
</script>

<nav class={cn(baseClasses, variantClasses[variant], className)} aria-label="Pagination">
	{#if showFirstLast && currentPage > 1}
		<Button
			variant={variant === 'terminal' ? 'terminal' : 'ghost'}
			{size}
			onclick={() => handlePageChange(1)}
			aria-label="Go to first page"
		>
			««
		</Button>
	{/if}

	{#if showPrevNext && currentPage > 1}
		<Button
			variant={variant === 'terminal' ? 'terminal' : 'ghost'}
			{size}
			onclick={() => handlePageChange(currentPage - 1)}
			aria-label="Go to previous page"
		>
			‹
		</Button>
	{/if}

	{#if hasEllipsisLeft}
		<span class="px-3 py-2 text-neutral-500">…</span>
	{/if}

	{#each visiblePages as page (page)}
		<Button
			variant={page === currentPage
				? variant === 'terminal'
					? 'terminal'
					: 'primary'
				: variant === 'terminal'
					? 'terminal'
					: 'ghost'}
			{size}
			onclick={() => handlePageChange(page)}
			aria-label={`Go to page ${page}`}
			aria-current={page === currentPage ? 'page' : undefined}
			class={page === currentPage ? 'font-semibold' : ''}
		>
			{page}
		</Button>
	{/each}

	{#if hasEllipsisRight}
		<span class="px-3 py-2 text-neutral-500">…</span>
	{/if}

	{#if showPrevNext && currentPage < totalPages}
		<Button
			variant={variant === 'terminal' ? 'terminal' : 'ghost'}
			{size}
			onclick={() => handlePageChange(currentPage + 1)}
			aria-label="Go to next page"
		>
			›
		</Button>
	{/if}

	{#if showFirstLast && currentPage < totalPages}
		<Button
			variant={variant === 'terminal' ? 'terminal' : 'ghost'}
			{size}
			onclick={() => handlePageChange(totalPages)}
			aria-label="Go to last page"
		>
			»»
		</Button>
	{/if}
</nav>

{#if totalItems > 0}
	<div class="mt-2 text-sm text-neutral-600">
		Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
		results
	</div>
{/if}
