<script lang="ts">
	import { cn } from '../utils.js';
	import { magneticHover } from '../motion';
	import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		currentPage?: number;
		totalPages: number;
		siblingCount?: number;
		variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
		size?: 'sm' | 'md' | 'lg';
		animated?: boolean;
		glow?: boolean;
		jelly?: boolean;
		showFirstLast?: boolean;
		class?: string;
		onchange?: (page: number) => void;
	}

	let {
		currentPage = $bindable(1),
		totalPages,
		siblingCount = 1,
		variant = 'glass',
		size = 'md',
		animated = true,
		glow = false,
		jelly = true,
		showFirstLast = true,
		class: className = '',
		onchange,
		...restProps
	}: Props = $props();

	const variants = {
		glass: {
			container: 'bg-white/5 border-white/10',
			button: 'bg-white/10 border-white/20 hover:bg-white/20 text-white',
			active: 'bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-400/50 text-white',
			disabled: 'opacity-50 cursor-not-allowed',
			glow: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]'
		},
		terminal: {
			container: 'bg-gray-900/90 border-green-400/30',
			button: 'bg-black/50 border-green-400/40 hover:bg-green-400/10 text-green-400',
			active: 'bg-green-400/20 border-green-400 text-green-400',
			disabled: 'opacity-50 cursor-not-allowed text-green-400/50',
			glow: 'shadow-[0_0_15px_rgba(74,222,128,0.6)]'
		},
		liquid: {
			container: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/20',
			button: 'bg-white/10 border-white/30 hover:bg-white/20 text-white',
			active: 'bg-gradient-to-br from-blue-400 to-purple-500 border-blue-400/50 text-white',
			disabled: 'opacity-50 cursor-not-allowed',
			glow: 'shadow-[0_0_25px_rgba(139,92,246,0.5)]'
		},
		neon: {
			container: 'bg-black border-pink-500/40',
			button: 'bg-black border-pink-500/50 hover:bg-pink-500/10 text-pink-300',
			active: 'bg-pink-500/30 border-pink-500 text-white',
			disabled: 'opacity-50 cursor-not-allowed text-pink-300/50',
			glow: 'shadow-[0_0_20px_rgba(236,72,153,0.7)]'
		}
	};

	const sizes = {
		sm: {
			button: 'h-8 min-w-8 px-2 text-xs',
			icon: 14,
			gap: 'gap-1'
		},
		md: {
			button: 'h-10 min-w-10 px-3 text-sm',
			icon: 16,
			gap: 'gap-2'
		},
		lg: {
			button: 'h-12 min-w-12 px-4 text-base',
			icon: 20,
			gap: 'gap-3'
		}
	};

	// Generate page numbers array
	const getPageNumbers = (): (number | string)[] => {
		const totalNumbers = siblingCount * 2 + 5;
		if (totalNumbers >= totalPages) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
			return [...leftRange, '...', totalPages];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
			return [1, '...', ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = Array.from(
				{ length: rightSiblingIndex - leftSiblingIndex + 1 },
				(_, i) => leftSiblingIndex + i
			);
			return [1, '...', ...middleRange, '...', totalPages];
		}

		return [];
	};

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages || page === currentPage) return;
		currentPage = page;
		onchange?.(page);
	};

	const currentVariant = variants[variant];
	const currentSize = sizes[size];
	const pageNumbers = $derived(getPageNumbers());
</script>

<nav
	class={cn(
		'inline-flex items-center backdrop-blur-xl border rounded-2xl p-2',
		currentSize.gap,
		currentVariant.container,
		className
	)}
	aria-label="Pagination"
	{...restProps}
>
	{#if showFirstLast}
		<button
			onclick={() => handlePageChange(1)}
			disabled={currentPage === 1}
			class={cn(
				'flex items-center justify-center rounded-lg border transition-all duration-200',
				currentSize.button,
				currentVariant.button,
				currentPage === 1 && currentVariant.disabled,
				'focus:outline-none focus:ring-2 focus:ring-white/20'
			)}
			use:jellyHover={{
				enabled: jelly && currentPage !== 1,
				scale: 1.05,
				duration: 200,
				borderRadius: '8px'
			}}
			aria-label="Go to first page"
		>
			<ChevronsLeft size={currentSize.icon} />
		</button>
	{/if}

	<button
		onclick={() => handlePageChange(currentPage - 1)}
		disabled={currentPage === 1}
		class={cn(
			'flex items-center justify-center rounded-lg border transition-all duration-200',
			currentSize.button,
			currentVariant.button,
			currentPage === 1 && currentVariant.disabled,
			'focus:outline-none focus:ring-2 focus:ring-white/20'
		)}
		use:jellyHover={{
			enabled: jelly && currentPage !== 1,
			scale: 1.05,
			duration: 200,
			borderRadius: '8px'
		}}
		aria-label="Go to previous page"
	>
		<ChevronLeft size={currentSize.icon} />
	</button>

	{#each pageNumbers as pageNumber}
		{#if pageNumber === '...'}
			<span class={cn('flex items-center justify-center', currentSize.button, 'opacity-50')}> ... </span>
		{:else}
			<button
				onclick={() => handlePageChange(pageNumber)}
				class={cn(
					'flex items-center justify-center rounded-lg border transition-all duration-200 font-medium',
					currentSize.button,
					pageNumber === currentPage ? currentVariant.active : currentVariant.button,
					pageNumber === currentPage && glow && currentVariant.glow,
					'focus:outline-none focus:ring-2 focus:ring-white/20'
				)}
				use:jellyHover={{
					enabled: jelly && pageNumber !== currentPage,
					scale: 1.05,
					duration: 200,
					borderRadius: '8px'
				}}
				aria-label={`Go to page ${pageNumber}`}
				aria-current={pageNumber === currentPage ? 'page' : undefined}
			>
				{pageNumber}
			</button>
		{/if}
	{/each}

	<button
		onclick={() => handlePageChange(currentPage + 1)}
		disabled={currentPage === totalPages}
		class={cn(
			'flex items-center justify-center rounded-lg border transition-all duration-200',
			currentSize.button,
			currentVariant.button,
			currentPage === totalPages && currentVariant.disabled,
			'focus:outline-none focus:ring-2 focus:ring-white/20'
		)}
		use:jellyHover={{
			enabled: jelly && currentPage !== totalPages,
			scale: 1.05,
			duration: 200,
			borderRadius: '8px'
		}}
		aria-label="Go to next page"
	>
		<ChevronRight size={currentSize.icon} />
	</button>

	{#if showFirstLast}
		<button
			onclick={() => handlePageChange(totalPages)}
			disabled={currentPage === totalPages}
			class={cn(
				'flex items-center justify-center rounded-lg border transition-all duration-200',
				currentSize.button,
				currentVariant.button,
				currentPage === totalPages && currentVariant.disabled,
				'focus:outline-none focus:ring-2 focus:ring-white/20'
			)}
			use:jellyHover={{
				enabled: jelly && currentPage !== totalPages,
				scale: 1.05,
				duration: 200,
				borderRadius: '8px'
			}}
			aria-label="Go to last page"
		>
			<ChevronsRight size={currentSize.icon} />
		</button>
	{/if}
</nav>
