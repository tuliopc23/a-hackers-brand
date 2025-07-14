<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, springPop } from '../motion';
	import { brandColors } from '../tokens';
	import { createEventDispatcher } from 'svelte';
	import { X, ChevronLeft, ChevronRight, Menu } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface SidebarItem {
		id: string;
		label: string;
		href?: string;
		icon?: string;
		badge?: string;
		children?: SidebarItem[];
		active?: boolean;
		disabled?: boolean;
		onclick?: () => void;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		items?: SidebarItem[];
		width?: 'sm' | 'md' | 'lg' | 'xl';
		variant?: 'glass' | 'terminal' | 'liquid';
		position?: 'left' | 'right';
		collapsible?: boolean;
		collapsed?: boolean;
		overlay?: boolean;
		persistent?: boolean;
		showToggle?: boolean;
		class?: string;
	}

	let {
		items = [],
		width = 'md',
		variant = 'glass',
		position = 'left',
		collapsible = true,
		collapsed = $bindable(false),
		overlay = false,
		persistent = true,
		showToggle = true,
		class: className = '',
		...restProps
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let activeItemId = $state<string | null>(null);
	let expandedItems = $state<Set<string>>(new Set());

	const widths = {
		sm: collapsed ? 'w-16' : 'w-48',
		md: collapsed ? 'w-16' : 'w-64',
		lg: collapsed ? 'w-16' : 'w-72',
		xl: collapsed ? 'w-16' : 'w-80'
	};

	const variants = {
		glass: {
			sidebar: 'bg-black/20 border-white/10 backdrop-blur-xl text-white',
			item: 'text-white/90 hover:bg-white/10 hover:text-white',
			itemActive: 'bg-white/15 text-white border-l-2 border-blue-400',
			itemDisabled: 'text-white/40 cursor-not-allowed',
			toggle: 'bg-white/10 border-white/20 text-white hover:bg-white/15',
			badge: 'bg-blue-500/30 text-white',
			overlay: 'bg-black/50'
		},
		terminal: {
			sidebar: 'bg-black/90 border-terminal-green/30 text-terminal-green',
			item: 'text-terminal-green hover:bg-terminal-green/20',
			itemActive: 'bg-terminal-green/30 text-terminal-green border-l-2 border-terminal-green',
			itemDisabled: 'text-terminal-green/40 cursor-not-allowed',
			toggle: 'bg-terminal-green/20 border-terminal-green/40 text-terminal-green hover:bg-terminal-green/30',
			badge: 'bg-terminal-green/30 text-terminal-green',
			overlay: 'bg-black/70'
		},
		liquid: {
			sidebar: 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10 backdrop-blur-xl text-white',
			item: 'text-white hover:bg-white/10',
			itemActive: 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-l-2 border-blue-400',
			itemDisabled: 'text-white/40 cursor-not-allowed',
			toggle:
				'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30',
			badge: 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white',
			overlay: 'bg-black/50'
		}
	};

	const currentVariant = variants[variant];

	function toggleSidebar() {
		collapsed = !collapsed;
		dispatch('toggle', { collapsed });
	}

	function handleItemClick(item: SidebarItem) {
		if (item.disabled) return;

		// Handle expansion of items with children
		if (item.children?.length) {
			if (expandedItems.has(item.id)) {
				expandedItems.delete(item.id);
			} else {
				expandedItems.add(item.id);
			}
			expandedItems = new Set(expandedItems);
		}

		// Set active item
		activeItemId = item.id;

		// Execute custom click handler
		if (item.onclick) {
			item.onclick();
		}

		dispatch('select', { item });

		// Close sidebar on mobile when item is selected
		if (overlay && !persistent) {
			collapsed = true;
		}
	}

	function closeSidebar() {
		if (overlay && !persistent) {
			collapsed = true;
			dispatch('close');
		}
	}

	function renderItem(item: SidebarItem, level: number = 0) {
		const isExpanded = expandedItems.has(item.id);
		const isActive = activeItemId === item.id || item.active;
		const hasChildren = item.children?.length;

		return {
			item,
			level,
			isExpanded,
			isActive,
			hasChildren,
			paddingLeft: `${level * 1 + 1}rem`
		};
	}

	function getAllItems(items: SidebarItem[], level: number = 0): ReturnType<typeof renderItem>[] {
		const result: ReturnType<typeof renderItem>[] = [];

		for (const item of items) {
			const rendered = renderItem(item, level);
			result.push(rendered);

			if (rendered.hasChildren && rendered.isExpanded && !collapsed) {
				result.push(...getAllItems(item.children!, level + 1));
			}
		}

		return result;
	}

	const renderedItems = $derived(() => getAllItems(items));
</script>

<!-- Overlay for mobile -->
{#if overlay && !collapsed}
	<div class={cn('fixed inset-0 z-40', currentVariant.overlay)} onclick={closeSidebar} transition:fade></div>
{/if}

<!-- Sidebar -->
<aside
	class={cn(
		'flex flex-col h-full border-r transition-all duration-300 ease-in-out',
		widths[width],
		currentVariant.sidebar,
		position === 'right' && 'border-r-0 border-l',
		overlay && 'fixed top-0 z-50',
		overlay && position === 'left' && 'left-0',
		overlay && position === 'right' && 'right-0',
		overlay && collapsed && '-translate-x-full',
		overlay && position === 'right' && collapsed && 'translate-x-full',
		className
	)}
	use:liquidBlur={{ intensity: 'medium' }}
	{...restProps}
>
	<!-- Header with Toggle -->
	{#if showToggle}
		<div class="flex items-center justify-between p-4 border-b border-white/10">
			{#if !collapsed}
				<slot name="header">
					<h2 class="text-lg font-semibold truncate">Menu</h2>
				</slot>
			{/if}

			{#if collapsible}
				<button
					onclick={toggleSidebar}
					class={cn('p-2 rounded-lg border transition-colors', currentVariant.toggle, collapsed && 'mx-auto')}
					title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
				>
					{#if collapsed}
						{#if position === 'left'}
							<ChevronRight size={16} />
						{:else}
							<ChevronLeft size={16} />
						{/if}
					{:else if position === 'left'}
						<ChevronLeft size={16} />
					{:else}
						<ChevronRight size={16} />
					{/if}
				</button>
			{/if}
		</div>
	{/if}

	<!-- Navigation Items -->
	<nav class="flex-1 overflow-y-auto p-2">
		<ul class="space-y-1">
			{#each renderedItems as { item, level, isExpanded, isActive, hasChildren, paddingLeft }}
				<li>
					<button
						class={cn(
							'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150',
							currentVariant.item,
							isActive && currentVariant.itemActive,
							item.disabled && currentVariant.itemDisabled,
							collapsed && 'justify-center px-2'
						)}
						style={!collapsed && level > 0 ? `padding-left: ${paddingLeft}` : undefined}
						onclick={() => handleItemClick(item)}
						disabled={item.disabled}
						title={collapsed ? item.label : undefined}
					>
						<!-- Icon -->
						{#if item.icon}
							<div class="w-5 h-5 flex-shrink-0">
								<!-- Icon placeholder - replace with your icon system -->
								<div class="w-full h-full bg-current opacity-70 rounded"></div>
							</div>
						{:else if hasChildren}
							<div class="w-5 h-5 flex-shrink-0">
								{#if isExpanded}
									<ChevronDown size={16} />
								{:else}
									<ChevronRight size={16} />
								{/if}
							</div>
						{/if}

						<!-- Label -->
						{#if !collapsed}
							<span class="flex-1 truncate">{item.label}</span>

							<!-- Badge -->
							{#if item.badge}
								<span
									class={cn(
										'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
										currentVariant.badge
									)}
								>
									{item.badge}
								</span>
							{/if}
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Footer -->
	{#if $$slots.footer}
		<div class="p-4 border-t border-white/10">
			<slot name="footer" {collapsed}></slot>
		</div>
	{/if}
</aside>

<style>
	/* Custom scrollbar for navigation */
	nav {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
	}

	nav::-webkit-scrollbar {
		width: 6px;
	}

	nav::-webkit-scrollbar-track {
		background: transparent;
	}

	nav::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
	}

	nav::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Smooth transitions */
	aside {
		will-change: width, transform;
	}

	/* Focus styles */
	button:focus-visible {
		outline: 2px solid rgba(59, 130, 246, 0.5);
		outline-offset: 2px;
	}
</style>
