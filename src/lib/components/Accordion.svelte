<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, glassFade } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface AccordionItem {
		id: string;
		title: string;
		content?: any;
		disabled?: boolean;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		items: AccordionItem[];
		multiple?: boolean;
		collapsible?: boolean;
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		animate?: boolean;
		reduceMotion?: boolean;
		defaultOpen?: string[];
		class?: string;
		children?: any;
		onValueChange?: (openItems: string[]) => void;
	}

	const {
		items = [],
		multiple = false,
		collapsible = true,
		variant = 'glass',
		size = 'md',
		blur = 'md',
		animate = true,
		reduceMotion = false,
		defaultOpen = [],
		class: className = '',
		children,
		onValueChange,
		...restProps
	}: Props = $props();

	let openItems = $state(new Set(defaultOpen));
	const uniqueId = `accordion-${Math.random().toString(36).substr(2, 9)}`;

	const sizes = {
		sm: {
			header: 'px-3 py-2 text-sm',
			content: 'px-3 pb-2 text-sm',
			icon: 'w-4 h-4'
		},
		md: {
			header: 'px-4 py-3 text-sm',
			content: 'px-4 pb-3 text-sm',
			icon: 'w-5 h-5'
		},
		lg: {
			header: 'px-6 py-4 text-base',
			content: 'px-6 pb-4 text-base',
			icon: 'w-6 h-6'
		}
	};

	const variants = {
		default: {
			container: 'bg-white/5 border border-white/10',
			header: 'text-white hover:bg-white/5',
			content: 'text-white/80'
		},
		glass: {
			container: 'glass-subtle border border-white/20',
			header: 'text-white hover:glass-medium',
			content: 'text-white/80'
		},
		terminal: {
			container: 'bg-terminal-green/10 border border-terminal-green/30',
			header: 'text-terminal-green hover:bg-terminal-green/20',
			content: 'text-terminal-green/80'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	function toggleItem(itemId: string) {
		const item = items.find((i) => i.id === itemId);
		if (item?.disabled) return;

		const isOpen = openItems.has(itemId);

		if (multiple) {
			if (isOpen) {
				if (collapsible || openItems.size > 1) {
					openItems.delete(itemId);
				}
			} else {
				openItems.add(itemId);
			}
		} else {
			if (isOpen && collapsible) {
				openItems.clear();
			} else {
				openItems.clear();
				openItems.add(itemId);
			}
		}

		openItems = new Set(openItems);
		onValueChange?.(Array.from(openItems));
	}

	function handleKeydown(event: KeyboardEvent, itemId: string) {
		const item = items.find((i) => i.id === itemId);
		if (item?.disabled) return;

		switch (event.key) {
			case 'Enter':
			case ' ':
				event.preventDefault();
				toggleItem(itemId);
				break;
			case 'ArrowDown':
				event.preventDefault();
				focusNextItem(itemId);
				break;
			case 'ArrowUp':
				event.preventDefault();
				focusPrevItem(itemId);
				break;
			case 'Home':
				event.preventDefault();
				focusFirstItem();
				break;
			case 'End':
				event.preventDefault();
				focusLastItem();
				break;
		}
	}

	function focusNextItem(currentId: string) {
		const enabledItems = items.filter((item) => !item.disabled);
		const currentIndex = enabledItems.findIndex((item) => item.id === currentId);
		const nextIndex = (currentIndex + 1) % enabledItems.length;
		const nextItem = enabledItems[nextIndex];
		focusItem(nextItem.id);
	}

	function focusPrevItem(currentId: string) {
		const enabledItems = items.filter((item) => !item.disabled);
		const currentIndex = enabledItems.findIndex((item) => item.id === currentId);
		const prevIndex = currentIndex === 0 ? enabledItems.length - 1 : currentIndex - 1;
		const prevItem = enabledItems[prevIndex];
		focusItem(prevItem.id);
	}

	function focusFirstItem() {
		const firstEnabledItem = items.find((item) => !item.disabled);
		if (firstEnabledItem) {
			focusItem(firstEnabledItem.id);
		}
	}

	function focusLastItem() {
		const enabledItems = items.filter((item) => !item.disabled);
		const lastItem = enabledItems[enabledItems.length - 1];
		if (lastItem) {
			focusItem(lastItem.id);
		}
	}

	function focusItem(itemId: string) {
		const element = document.querySelector(`[data-accordion-header="${itemId}"]`) as HTMLElement;
		element?.focus();
	}

	// Track bundle size
	$effect(() => {
		sizeOf('Accordion', 'medium');
	});
</script>

<div class={cn('w-full space-y-2', className)} {...restProps}>
	{#each items as item, index}
		{@const isOpen = openItems.has(item.id)}
		{@const isFirst = index === 0}
		{@const isLast = index === items.length - 1}
		{@const headerId = `${uniqueId}-header-${item.id}`}
		{@const contentId = `${uniqueId}-content-${item.id}`}

		<div
			class={cn(
				'overflow-hidden transition-all duration-200',
				variants[variant].container,
				variant === 'glass' && blurLevels[blur],
				isFirst && 'rounded-t-brand-lg',
				isLast && 'rounded-b-brand-lg',
				!isFirst && !isLast && index > 0 && 'rounded-none border-t-0'
			)}
		>
			<!-- Header -->
			<button
				id={headerId}
				class={cn(
					'w-full flex items-center justify-between transition-all duration-200',
					'focus:outline-none focus:ring-2 focus:ring-blue-400/50',
					'font-medium cursor-pointer',
					sizes[size].header,
					variants[variant].header,
					item.disabled && 'opacity-50 cursor-not-allowed'
				)}
				type="button"
				aria-expanded={isOpen}
				aria-controls={contentId}
				aria-disabled={item.disabled}
				data-accordion-header={item.id}
				disabled={item.disabled}
				use:liquidBlur={animate && !reduceMotion && isOpen ? { blur: blur, opacity: 'subtle' } : undefined}
				onclick={() => toggleItem(item.id)}
				onkeydown={(e) => handleKeydown(e, item.id)}
			>
				<span class="text-left">{item.title}</span>

				<svg
					class={cn('transition-transform duration-200 flex-shrink-0 ml-2', sizes[size].icon, isOpen && 'rotate-180')}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			<!-- Content -->
			{#if isOpen}
				<div
					id={contentId}
					role="region"
					aria-labelledby={headerId}
					class={cn(
						'border-t border-white/10 transition-all duration-200',
						sizes[size].content,
						variants[variant].content
					)}
					in:glassFade={{ direction: 'down', distance: 10, duration: animate && !reduceMotion ? 200 : 0 }}
					out:glassFade={{ direction: 'up', distance: 10, duration: animate && !reduceMotion ? 150 : 0 }}
				>
					{#if item.content}
						{@render item.content()}
					{:else if children}
						{@render children(item)}
					{:else}
						<p>No content available</p>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	button[aria-expanded] {
		will-change: transform;
	}

	svg {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			animation: none;
			will-change: auto;
		}
	}
</style>
