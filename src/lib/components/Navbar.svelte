<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { brandColors } from '$lib/tokens';
	import { glassFade, liquidBlur, magneticHover, springPop } from '$lib/motion';
	import Button from './Button.svelte';
	import type { NavItem } from '$lib/types/navbar';

	interface Props {
		items: NavItem[];
		variant?: 'default' | 'glass' | 'terminal';
		position?: 'static' | 'fixed' | 'sticky';
		backdrop?: boolean;
		logo?: string;
		logoText?: string;
		showBrand?: boolean;
		compact?: boolean;
		transparent?: boolean;
		activeItem?: string;
		class?: string;
	}

	const {
		items = [],
		variant = 'glass',
		position = 'static',
		backdrop = true,
		logo,
		logoText = 'TULIO',
		showBrand = true,
		compact = false,
		transparent = false,
		activeItem = '',
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		navigate: { item: NavItem; href?: string };
		brandClick: void;
		mobileToggle: boolean;
	}>();

	let navRef: HTMLElement;
	let mobileMenuOpen = $state(false);
	let openDropdowns = $state<Set<string>>(new Set());
	let isScrolled = $state(false);

	const variants = {
		default: {
			nav: 'bg-gray-900/95 border-gray-700',
			item: 'text-gray-300 hover:text-white hover:bg-gray-800',
			activeItem: 'text-white bg-gray-700',
			dropdown: 'bg-gray-900 border-gray-700',
			brand: 'text-white',
			mobileButton: 'text-gray-300 hover:text-white'
		},
		glass: {
			nav: 'bg-white/10 border-white/20 backdrop-blur-xl',
			item: 'text-white/80 hover:text-white hover:bg-white/10',
			activeItem: 'text-white bg-white/20',
			dropdown: 'bg-white/15 border-white/25 backdrop-blur-xl',
			brand: 'text-white',
			mobileButton: 'text-white/80 hover:text-white'
		},
		terminal: {
			nav: `bg-black/90 border-${brandColors.terminal.green}`,
			item: `text-${brandColors.terminal.green}/80 hover:text-${brandColors.terminal.green} hover:bg-${brandColors.terminal.green}/10`,
			activeItem: `text-black bg-${brandColors.terminal.green}`,
			dropdown: `bg-black/95 border-${brandColors.terminal.green}`,
			brand: `text-${brandColors.terminal.green}`,
			mobileButton: `text-${brandColors.terminal.green}/80 hover:text-${brandColors.terminal.green}`
		}
	};

	const currentVariant = $derived(variants()[variant]);

	function handleItemClick(item: NavItem, event?: Event) {
		if (item.disabled) return;

		if (item.children) {
			// Toggle dropdown
			const newDropdowns = new Set(openDropdowns);
			if (newDropdowns.has(item.id)) {
				newDropdowns.delete(item.id);
			} else {
				newDropdowns.add(item.id);
			}
			openDropdowns = newDropdowns;
			return;
		}

		// Close mobile menu
		mobileMenuOpen = false;

		// Dispatch navigation event
		dispatch('navigate', { item, href: item.href });

		// Handle external links
		if (item.external && item.href) {
			window.open(item.href, '_blank', 'noopener,noreferrer');
			event?.preventDefault();
			return;
		}
	}

	function handleBrandClick() {
		dispatch('brandClick');
		mobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		dispatch('mobileToggle', mobileMenuOpen);
	}

	function closeAllDropdowns() {
		openDropdowns = new Set();
	}

	function handleKeydown(event: KeyboardEvent, item: NavItem) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleItemClick(item);
		} else if (event.key === 'Escape') {
			closeAllDropdowns();
		}
	}

	// Handle scroll for backdrop effects
	onMount(() => {
		function handleScroll() {
			isScrolled = window.scrollY > 10;
		}

		if (position === 'fixed' || position === 'sticky') {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});

	// Click outside to close dropdowns
	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (navRef && !navRef.contains(event.target as Node)) {
				closeAllDropdowns();
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const navClasses = $derived(
		cn(
			'w-full border-b transition-all duration-300',
			'font-mono',
			currentVariant.nav,
			position === 'fixed' && 'fixed top-0 left-0 z-50',
			position === 'sticky' && 'sticky top-0 z-40',
			backdrop && 'backdrop-blur-xl',
			transparent && !isScrolled && 'bg-transparent border-transparent',
			compact ? 'py-2' : 'py-4',
			className
		)
	);

	const containerClasses = $derived(
		cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', 'flex items-center justify-between', compact ? 'h-12' : 'h-16')
	);
</script>

<nav
	bind:this={navRef}
	class={navClasses}
	aria-label="Main navigation"
	use:liquidBlur={backdrop ? { blur: 'xl', opacity: 'medium' } : undefined}
>
	<div class={containerClasses}>
		<!-- Brand/Logo -->
		{#if showBrand}
			<div class="flex items-center">
				<button
					onclick={handleBrandClick} onkeydown={(e) => e.key === "Enter" && handleBrandClick()}
					class="flex items-center space-x-3 {currentVariant.brand} hover:opacity-80 transition-opacity"
					use:magneticHover={{ strength: 0.1 }}
				>
					{#if logo}
						<img src={logo} alt="Logo" class="h-8 w-auto" />
					{:else}
						<div
							class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"
						>
							{logoText.charAt(0)}
						</div>
					{/if}

					{#if logoText}
						<span class="text-xl font-bold tracking-tight">
							{logoText}
						</span>
					{/if}
				</button>
			</div>
		{/if}

		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center space-x-1">
			{#each items() as item (item.id)}
				<div class="relative">
					{#if item.children}
						<!-- Dropdown Menu -->
						<button
							onclick={() => handleItemClick(item)} onkeydown={(e) => e.key === "Enter" && handleItemClick(item)}
							class="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       {item.id === activeItem ? currentVariant.activeItem : currentVariant.item}
							       {item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}"
							disabled={item.disabled}
							aria-haspopup="true"
							aria-expanded={openDropdowns.has(item.id)}
							use:magneticHover={{ enabled: !item.disabled, strength: 0.1 }}
						>
							{#if item.icon}
								<span class="mr-2 text-lg">{item.icon}</span>
							{/if}
							{item.label}
							{#if item.badge}
								<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
									{item.badge}
								</span>
							{/if}
							<svg
								class="ml-1 w-4 h-4 transition-transform duration-200
								       {openDropdowns.has(item.id) ? 'rotate-180' : ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{#if openDropdowns.has(item.id)}
							<div
								class="absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       {currentVariant.dropdown}"
								in:glassFade={{ direction: 'up', duration: 200 }}
								use:liquidBlur={{ blur: 'xl', opacity: 'strong' }}
								role="menu"
							>
								{#each item.children as child (child.id)}
									<a
										href={child.href}
                    onclick={(e) => handleItemClick(child, e)} onkeydown={(e) => e.key === "Enter" && handleItemClick(child, e)}
										class="block px-4 py-2 text-sm {currentVariant.item} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       {child.disabled ? 'opacity-50 cursor-not-allowed' : ''}"
										role="menuitem"
										use:magneticHover={{ enabled: !child.disabled, strength: 0.1 }}
									>
										{#if child.icon}
											<span class="mr-2">{child.icon}</span>
										{/if}
										{child.label}
										{#if child.badge}
											<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
												{child.badge}
											</span>
										{/if}
									</a>
								{/each}
							</div>
						{/if}
					{:else}
						<!-- Regular Navigation Item -->
						<a
							href={item.href}
							onclick={(e) => handleItemClick(item, e)} onkeydown={(e) => e.key === "Enter" && handleItemClick(item, e)}
							class="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       {item.id === activeItem ? currentVariant.activeItem : currentVariant.item}
							       {item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}"
							aria-current={item.id === activeItem ? 'page' : undefined}
							use:magneticHover={{ enabled: !item.disabled, strength: 0.1 }}
						>
							{#if item.icon}
								<span class="mr-2 text-lg">{item.icon}</span>
							{/if}
							{item.label}
							{#if item.badge}
								<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
									{item.badge}
								</span>
							{/if}
							{#if item.external}
								<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							{/if}
						</a>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<div class="md:hidden">
			<button
				onclick={toggleMobileMenu} onkeydown={(e) => e.key === "Enter" && toggleMobileMenu()}
				class="p-2 rounded-md {currentVariant.mobileButton} hover:bg-white/10 transition-colors"
				aria-label="Toggle mobile menu"
				aria-expanded={mobileMenuOpen}
				use:magneticHover={{ strength: 0.15 }}
			>
				{#if mobileMenuOpen}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t {currentVariant.nav}" in:glassFade={{ direction: 'down', duration: 200 }}>
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each items() as item (item.id)}
					{#if item.children}
						<!-- Mobile Dropdown -->
						<div>
							<button
								onclick={() => handleItemClick(item)} onkeydown={(e) => e.key === "Enter" && handleItemClick(item)} 
								class="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       {item.id === activeItem ? currentVariant.activeItem : currentVariant.item}
								       {item.disabled ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={item.disabled}
								aria-expanded={openDropdowns.has(item.id)}
							>
								<span class="flex items-center">
									{#if item.icon}
										<span class="mr-3 text-lg">{item.icon}</span>
									{/if}
									{item.label}
									{#if item.badge}
										<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
											{item.badge}
										</span>
									{/if}
								</span>
								<svg
									class="w-5 h-5 transition-transform duration-200
									       {openDropdowns.has(item.id) ? 'rotate-180' : ''}"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							{#if openDropdowns.has(item.id)}
								<div class="pl-6 mt-2 space-y-1" in:glassFade={{ direction: 'down', duration: 150 }}>
									{#each item.children as child (child.id)}
										<a
											href={child.href}
											onclick={(e) => handleItemClick(child, e)} onkeydown={(e) => e.key === "Enter" && handleItemClick(child, e)}
											class="flex items-center px-3 py-2 rounded-md text-sm
											       {currentVariant.item} hover:bg-white/10 transition-colors
											       {child.disabled ? 'opacity-50 cursor-not-allowed' : ''}"
										>
											{#if child.icon}
												<span class="mr-3">{child.icon}</span>
											{/if}
											{child.label}
											{#if child.badge}
												<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
													{child.badge}
												</span>
											{/if}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{:else}
						<!-- Mobile Regular Item -->
						<a
							href={item.href}
							onclick={(e) => handleItemClick(item, e)} onkeydown={(e) => e.key === "Enter" && handleItemClick(item, e)}
							class="flex items-center px-3 py-2 rounded-md text-base font-medium
							       {item.id === activeItem ? currentVariant.activeItem : currentVariant.item}
							       {item.disabled ? 'opacity-50 cursor-not-allowed' : ''}"
							aria-current={item.id === activeItem ? 'page' : undefined}
						>
							{#if item.icon}
								<span class="mr-3 text-lg">{item.icon}</span>
							{/if}
							{item.label}
							{#if item.badge}
								<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
									{item.badge}
								</span>
							{/if}
							{#if item.external}
								<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							{/if}
						</a>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	/* Terminal glow effects */
	:global(.terminal .navbar-brand:hover) {
		text-shadow: 0 0 10px var(--terminal-green);
	}

	:global(.terminal .nav-item:hover) {
		box-shadow: 0 0 5px var(--terminal-green-glow);
	}
</style>
