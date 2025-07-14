<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (trigger to trigger_1) making the component unusable -->
<script module lang="ts">
	export interface MenuItem {
		id: string;
		label: string;
		href?: string;
		onclick?: () => void;
		disabled?: boolean;
		icon?: string;
		badge?: string;
		separator?: boolean;
		children?: MenuItem[];
		keyboard?: string;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, springPop } from '$lib/motion';
	import { brandColors } from '$lib/tokens';
	import { createEventDispatcher, onMount } from 'svelte';
	import { ChevronRight, ChevronDown } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { MenuItem as MenuMenuItem } from './Menu.svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		items: MenuItem[];
		trigger?: 'click' | 'hover';
		placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'right-start' | 'left-start';
		variant?: 'glass' | 'terminal' | 'liquid';
		size?: 'sm' | 'md' | 'lg';
		closeOnClick?: boolean;
		showIcons?: boolean;
		showKeyboards?: boolean;
		class?: string;
	}

	const {
items,
		trigger = 'click',
		placement = 'bottom-start',
		variant = 'glass',
		size = 'md',
		closeOnClick = true,
		showIcons = true,
		showKeyboards = true,
		class: className = '',
		...restProps
	
}: Props = $props();

	const dispatch = createEventDispatcher();

	let isOpen = $state(false);
	let menuElement: HTMLDivElement;
	let triggerElement: HTMLDivElement;
	let activeSubmenuId = $state<string | null>(null);
	let highlightedIndex = $state(-1);

	const uniqueId = `menu-${Math.random().toString(36).substr(2, 9)}`;

	const sizes = {
		sm: {
			item: 'px-3 py-1.5 text-sm',
			icon: 'w-4 h-4',
			badge: 'text-xs px-1.5 py-0.5',
			keyboard: 'text-xs'
		},
		md: {
			item: 'px-4 py-2 text-base',
			icon: 'w-5 h-5',
			badge: 'text-xs px-2 py-1',
			keyboard: 'text-sm'
		},
		lg: {
			item: 'px-5 py-2.5 text-lg',
			icon: 'w-6 h-6',
			badge: 'text-sm px-2.5 py-1',
			keyboard: 'text-base'
		}
	};

	const variants = {
		glass: {
			menu: 'bg-black/20 border-white/10 backdrop-blur-xl text-white',
			item: 'hover:bg-white/10 text-white/90',
			itemActive: 'bg-white/15 text-white',
			itemDisabled: 'text-white/40 cursor-not-allowed',
			separator: 'border-white/10',
			badge: 'bg-blue-500/30 text-white',
			keyboard: 'text-white/60'
		},
		terminal: {
			menu: 'bg-black/90 border-terminal-green/30 text-terminal-green',
			item: 'hover:bg-terminal-green/20 text-terminal-green',
			itemActive: 'bg-terminal-green/30 text-terminal-green',
			itemDisabled: 'text-terminal-green/40 cursor-not-allowed',
			separator: 'border-terminal-green/20',
			badge: 'bg-terminal-green/30 text-terminal-green',
			keyboard: 'text-terminal-green/60'
		},
		liquid: {
			menu: 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10 backdrop-blur-xl text-white',
			item: 'hover:bg-white/10 text-white',
			itemActive: 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white',
			itemDisabled: 'text-white/40 cursor-not-allowed',
			separator: 'border-white/10',
			badge: 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white',
			keyboard: 'text-white/60'
		}
	};

	const currentSize = sizes()[size];
	const currentVariant = variants()[variant];

	// Get all menu items flattened for keyboard navigation
	const flatItems = $derived(() => {
		const flat: MenuItem[] = [];

		function flatten(items: MenuItem[]) {
			for (const item of items) {
				if (!item.separator) {
					flat.push(item);
				}
				if (item.children) {
					flatten(item.children);
				}
			}
		}

		flatten(items);
		return flat;
	});

	function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			highlightedIndex = -1;
			activeSubmenuId = null;
		}
		dispatch('toggle', { isOpen });
	}

	function closeMenu() {
		isOpen = false;
		activeSubmenuId = null;
		highlightedIndex = -1;
		dispatch('close');
	}

	function handleItemClick(item: MenuItem) {
		if (item.disabled) return;

		if (item.children?.length) {
			activeSubmenuId = activeSubmenuId === item.id ? null : item.id;
		} else {
			if (item.onclick) {
				item.onclick();
			}

			dispatch('select', { item });

			if (closeOnClick) {
				closeMenu();
			}
		}
	}

	function handleMouseEnter(item: MenuItem) {
		if (trigger === 'hover' && item.children?.length) {
			activeSubmenuId = item.id;
		}
	}

	function handleMouseLeave() {
		if (trigger === 'hover') {
			activeSubmenuId = null;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				toggleMenu();
			}
			return;
		}

		switch (event.key) {
			case 'Escape':
				event.preventDefault();
				closeMenu();
				break;
			case 'ArrowDown':
				event.preventDefault();
				highlightedIndex = Math.min(highlightedIndex + 1, flatItems().length - 1);
				break;
			case 'ArrowUp':
				event.preventDefault();
				highlightedIndex = Math.max(highlightedIndex - 1, 0);
				break;
			case 'Enter':
				event.preventDefault();
				if (highlightedIndex >= 0 && flatItems()[highlightedIndex]) {
					handleItemClick(flatItems()[highlightedIndex]);
				}
				break;
			case 'ArrowRight':
				if (highlightedIndex >= 0 && flatItems()[highlightedIndex]?.children?.length) {
					activeSubmenuId = flatItems()[highlightedIndex].id;
				}
				break;
			case 'ArrowLeft':
				if (activeSubmenuId) {
					activeSubmenuId = null;
				}
				break;
		}
	}

	function handleClickOutside(event: Event) {
		if (menuElement && !menuElement.contains(event.target as Node)) {
			closeMenu();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	function getPlacementClasses() {
		const placements = {
			'bottom-start': 'top-full left-0 mt-1',
			'bottom-end': 'top-full right-0 mt-1',
			'top-start': 'bottom-full left-0 mb-1',
			'top-end': 'bottom-full right-0 mb-1',
			'right-start': 'left-full top-0 ml-1',
			'left-start': 'right-full top-0 mr-1'
		};
		return placements()[placement];
	}
</script>

<div bind:this={menuElement} class={cn('relative inline-block', className)} {...restProps}>
	<!-- Trigger -->
	<div
		bind:this={triggerElement}
		class="cursor-pointer"
		onclick={trigger === 'click' ? toggleMenu : undefined}
		onmouseenter={trigger === 'hover' ? toggleMenu : undefined}
		onmouseleave={trigger === 'hover' ? () => setTimeout(closeMenu, 150) : undefined}
		onkeydown={handleKeydown}
		tabindex="0"
		role="button"
		aria-expanded={isOpen}
		aria-haspopup="menu"
		aria-controls={uniqueId}
	>
		{@render trigger?.()}
		<div
			class={cn(
				'flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200',
				currentVariant.item,
				isOpen && currentVariant.itemActive
			)}
		>
			<span>Menu</span>
			<ChevronDown size={16} class={cn('transition-transform duration-200', isOpen && 'rotate-180')} />
		</div>
	</div>

	<!-- Menu -->
	{#if isOpen}
		<div
			id={uniqueId}
			class={cn('absolute z-50 min-w-[200px] rounded-lg border shadow-lg', getPlacementClasses(), currentVariant.menu)}
			role="menu"
			use:liquidBlur={{ intensity: 'medium' }}
		>
			<div class="py-1">
				{#each items() as item, index (item.id)}
					{#if item.separator}
						<hr class={cn('my-1 border-t', currentVariant.separator)} />
					{:else}
						<div class="relative">
							<!-- Menu Item -->
							<div
								class={cn(
									'flex items-center justify-between cursor-pointer transition-all duration-150',
									currentSize.item,
									item.disabled ? currentVariant.itemDisabled : currentVariant.item,
									highlightedIndex === flatItems().indexOf(item) && !item.disabled && currentVariant.itemActive,
									activeSubmenuId === item.id && currentVariant.itemActive
								)}
								onclick={() => handleItemClick(item)}
								onkeydown={(e) => e.key === 'Enter' && handleItemClick(item)}
								onmouseenter={() => handleMouseEnter(item)}
								onmouseleave={handleMouseLeave}
								role="menuitem"
								aria-disabled={item.disabled}
								tabindex={item.disabled ? -1 : 0}
							>
								<div class="flex items-center gap-3 flex-1">
									{#if showIcons && item.icon}
										<div class={cn('flex-shrink-0', currentSize.icon)}>
											<!-- Icon placeholder - you can use your icon system here -->
											<div class="w-full h-full bg-current opacity-60 rounded"></div>
										</div>
									{/if}

									<span class="flex-1 truncate">{item.label}</span>

									{#if item.badge}
										<span
											class={cn(
												'inline-flex items-center rounded-full font-medium',
												currentSize.badge,
												currentVariant.badge
											)}
										>
											{item.badge}
										</span>
									{/if}
								</div>

								<div class="flex items-center gap-2 ml-3">
									{#if showKeyboards && item.keyboard}
										<span class={cn('opacity-60 font-mono', currentSize.keyboard, currentVariant.keyboard)}>
											{item.keyboard}
										</span>
									{/if}

									{#if item.children?.length}
										<ChevronRight size={16} class="opacity-60" />
									{/if}
								</div>
							</div>

							<!-- Submenu -->
							{#if item.children?.length && activeSubmenuId === item.id}
								<div
									class={cn(
										'absolute z-10 min-w-[180px] rounded-lg border shadow-lg',
										'left-full top-0 ml-1',
										currentVariant.menu
									)}
									role="menu"
									use:liquidBlur={{ intensity: 'medium' }}
								>
									<div class="py-1">
										{#each item.children as childItem (childItem.id)}
											{#if childItem.separator}
												<hr class={cn('my-1 border-t', currentVariant.separator)} />
											{:else}
												<div
													class={cn(
														'flex items-center justify-between cursor-pointer transition-all duration-150',
														currentSize.item,
														childItem.disabled ? currentVariant.itemDisabled : currentVariant.item
													)}
													onclick={() => handleItemClick(childItem)}
													onkeydown={(e) => e.key === 'Enter' && handleItemClick(childItem)}
													role="menuitem"
													aria-disabled={childItem.disabled}
													tabindex={childItem.disabled ? -1 : 0}
												>
													<div class="flex items-center gap-3 flex-1">
														{#if showIcons && childItem.icon}
															<div class={cn('flex-shrink-0', currentSize.icon)}>
																<div class="w-full h-full bg-current opacity-60 rounded"></div>
															</div>
														{/if}

														<span class="flex-1 truncate">{childItem.label}</span>

														{#if childItem.badge}
															<span
																class={cn(
																	'inline-flex items-center rounded-full font-medium',
																	currentSize.badge,
																	currentVariant.badge
																)}
															>
																{childItem.badge}
															</span>
														{/if}
													</div>

													{#if showKeyboards && childItem.keyboard}
														<span
															class={cn('opacity-60 font-mono ml-3', currentSize.keyboard, currentVariant.keyboard)}
														>
															{childItem.keyboard}
														</span>
													{/if}
												</div>
											{/if}
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Ensure submenus don't get clipped */
	:global(.relative) {
		z-index: auto;
	}

	/* Custom focus styles */
	[role='menuitem']:focus {
		outline: 2px solid rgba(59, 130, 246, 0.5);
		outline-offset: -2px;
	}

	/* Smooth transitions for submenus */
	div[role='menu'] {
		animation: menuFadeIn 0.15s ease-out;
	}

	@keyframes menuFadeIn {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(-10px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
</style>
