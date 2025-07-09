<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cn } from '../utils.js';
	import { brandColors } from '../tokens';
	import { magneticHover } from '../motion';

	interface BreadcrumbItem {
		id: string;
		label: string;
		href?: string;
		icon?: string;
		disabled?: boolean;
	}

	interface Props {
		items: BreadcrumbItem[];
		variant?: 'default' | 'glass' | 'terminal';
		separator?: 'slash' | 'chevron' | 'arrow' | 'dot';
		showHome?: boolean;
		homeIcon?: string;
		homeLabel?: string;
		maxItems?: number;
		class?: string;
	}

	const {
		items = [],
		variant = 'default',
		separator = 'chevron',
		showHome = true,
		homeIcon = '🏠',
		homeLabel = 'Home',
		maxItems = 5,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		navigate: { item: BreadcrumbItem; index: number };
		homeClick: void;
	}>();

	const variants = {
		default: {
			container: 'text-gray-400',
			item: 'text-gray-400 hover:text-white',
			activeItem: 'text-white',
			separator: 'text-gray-600',
			home: 'text-gray-400 hover:text-white'
		},
		glass: {
			container: 'text-white/60',
			item: 'text-white/60 hover:text-white',
			activeItem: 'text-white',
			separator: 'text-white/40',
			home: 'text-white/60 hover:text-white'
		},
		terminal: {
			container: `text-${brandColors.terminal.green}/60`,
			item: `text-${brandColors.terminal.green}/60 hover:text-${brandColors.terminal.green}`,
			activeItem: `text-${brandColors.terminal.green}`,
			separator: `text-${brandColors.terminal.green}/40`,
			home: `text-${brandColors.terminal.green}/60 hover:text-${brandColors.terminal.green}`
		}
	};

	const separators = {
		slash: '/',
		chevron: '›',
		arrow: '→',
		dot: '•'
	};

	const currentVariant = $derived(variants[variant]);

	// Handle collapsed items if there are too many
	const displayItems = $derived(() => {
		if (items.length <= maxItems) {
			return items;
		}

		// Show first item, ellipsis, and last few items
		const firstItem = items[0];
		const lastItems = items.slice(-(maxItems - 2));

		return [
			firstItem,
			{
				id: 'ellipsis',
				label: '...',
				disabled: true
			} as BreadcrumbItem,
			...lastItems
		];
	});

	function handleItemClick(item: BreadcrumbItem, index: number) {
		if (item.disabled || item.id === 'ellipsis') return;

		dispatch('navigate', { item, index });
	}

	function handleHomeClick() {
		dispatch('homeClick');
	}

	const combinedClasses = $derived(
		cn('flex items-center space-x-2 text-sm font-mono', currentVariant.container, className)
	);
</script>

<nav class={combinedClasses} aria-label="Breadcrumb">
	<ol class="flex items-center space-x-2">
		<!-- Home Link -->
		{#if showHome}
			<li>
				<button
					onclick={handleHomeClick}
					class="flex items-center {currentVariant.home} hover:underline transition-colors"
					aria-label="Go to home"
					use:magneticHover={{ strength: 0.1 }}
				>
					{#if homeIcon}
						<span class="mr-1 text-base">{homeIcon}</span>
					{/if}
					{homeLabel}
				</button>
			</li>

			{#if displayItems.length > 0}
				<li class={currentVariant.separator} aria-hidden="true">
					{separators[separator]}
				</li>
			{/if}
		{/if}

		<!-- Breadcrumb Items -->
		{#each displayItems as item, index (item.id)}
			<li class="flex items-center">
				{#if item.id === 'ellipsis'}
					<span class="px-2 {currentVariant.separator}" aria-hidden="true">
						{item.label}
					</span>
				{:else if index === displayItems.length - 1}
					<!-- Last item (current page) -->
					<span class="flex items-center {currentVariant.activeItem} font-medium" aria-current="page">
						{#if item.icon}
							<span class="mr-2 text-base">{item.icon}</span>
						{/if}
						{item.label}
					</span>
				{:else}
					<!-- Clickable breadcrumb item -->
					{#if item.href}
						<a
							href={item.href}
							onclick={(e) => {
								if (!item.disabled) {
									handleItemClick(item, index);
								} else {
									e.preventDefault();
								}
							}}
							class="flex items-center {currentVariant.item} hover:underline transition-colors
							       {item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}"
							use:magneticHover={{ enabled: !item.disabled, strength: 0.1 }}
						>
							{#if item.icon}
								<span class="mr-2 text-base">{item.icon}</span>
							{/if}
							{item.label}
						</a>
					{:else}
						<button
							onclick={() => handleItemClick(item, index)}
							disabled={item.disabled}
							class="flex items-center {currentVariant.item} hover:underline transition-colors
							       {item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}"
							use:magneticHover={{ enabled: !item.disabled, strength: 0.1 }}
						>
							{#if item.icon}
								<span class="mr-2 text-base">{item.icon}</span>
							{/if}
							{item.label}
						</button>
					{/if}
				{/if}
			</li>

			<!-- Separator -->
			{#if index < displayItems.length - 1 && item.id !== 'ellipsis'}
				<li class={currentVariant.separator} aria-hidden="true">
					{separators[separator]}
				</li>
			{/if}
		{/each}
	</ol>
</nav>

<style>
	/* Terminal glow effects */
	:global(.terminal .breadcrumb-item:hover) {
		text-shadow: 0 0 5px var(--terminal-green);
	}
</style>
