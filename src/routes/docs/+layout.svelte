<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { glassFade, magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';

	// Lazy load WebGL components for performance
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));

	let mounted = false;
	let sidebarOpen = false;

	onMount(() => {
		mounted = true;

		// Apply magnetic hover to navigation elements
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach(el => magneticHover(el));
	});

	// Documentation navigation structure
	const navigation = [
		{
			title: 'Getting Started',
			items: [
				{ title: 'Overview', href: '/docs', exact: true },
				{ title: 'Installation', href: '/docs/installation' },
				{ title: 'Quick Start', href: '/docs/quick-start' }
			]
		},
		{
			title: 'Components',
			items: [
				{ title: 'Overview', href: '/docs/components' },
				{ title: 'Button', href: '/docs/components/button' },
				{ title: 'Input', href: '/docs/components/input' },
				{ title: 'Modal', href: '/docs/components/modal' },
				{ title: 'Card', href: '/docs/components/card' },
				{ title: 'Badge', href: '/docs/components/badge' },
				{ title: 'Switch', href: '/docs/components/switch' },
				{ title: 'Tabs', href: '/docs/components/tabs' },
				{ title: 'Accordion', href: '/docs/components/accordion' },
				{ title: 'Select', href: '/docs/components/select' },
				{ title: 'MultiSelect', href: '/docs/components/multiselect' },
				{ title: 'DatePicker', href: '/docs/components/datepicker' },
				{ title: 'FileUpload', href: '/docs/components/fileupload' }
			]
		},
		{
			title: 'WebGL Components',
			items: [
				{ title: 'Overview', href: '/docs/webgl' },
				{ title: 'Liquid Glass Scene', href: '/docs/webgl/liquid-glass-scene' },
				{ title: 'Particle System', href: '/docs/webgl/particle-system' },
				{ title: 'Liquid Sphere', href: '/docs/webgl/liquid-sphere' },
				{ title: 'Liquid Plane', href: '/docs/webgl/liquid-plane' }
			]
		},
		{
			title: 'Design System',
			items: [
				{ title: 'Design Tokens', href: '/docs/tokens' },
				{ title: 'Typography', href: '/docs/typography' },
				{ title: 'Colors', href: '/docs/colors' },
				{ title: 'Spacing', href: '/docs/spacing' },
				{ title: 'Motion', href: '/docs/motion' }
			]
		},
		{
			title: 'Guidelines',
			items: [
				{ title: 'Brand Guidelines', href: '/docs/guidelines' },
				{ title: 'Usage Patterns', href: '/docs/patterns' },
				{ title: 'Best Practices', href: '/docs/best-practices' },
				{ title: 'Accessibility', href: '/docs/accessibility' }
			]
		}
	];

	// Check if current route matches navigation item
	function isActive(href: string, exact = false): boolean {
		if (exact) {
			return $page.url.pathname === href;
		}
		return $page.url.pathname.startsWith(href);
	}

	// Toggle mobile sidebar
	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	// Close sidebar when route changes
	$: if ($page.url.pathname) {
		sidebarOpen = false;
	}
</script>

<svelte:head>
	<title>Documentation - Tulio Brand System</title>
	<meta name="description" content="Complete documentation for the Liquid Glass Terminal Fusion Design System" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="fixed inset-0 opacity-20 pointer-events-none">
			<svelte:component this={LazyLiquidBackground.component} />
		</div>
	{/if}

	<!-- Top Navigation -->
	<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-xl font-bold text-white">A Hacker's Brand</h1>
				</div>
				<div class="text-sm text-white/70">Documentation</div>
			</div>
		</div>
	</nav>

	<div class="flex relative z-10">
		<!-- Mobile Sidebar Overlay -->
		{#if sidebarOpen}
			<div 
				class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
				onclick={toggleSidebar}
				onkeydown={(e) => {
					if (e.key === 'Escape') {
						e.preventDefault();
						toggleSidebar();
					}
				}}
				role="presentation"
				aria-hidden="true"
			></div>
		{/if}

		<!-- Sidebar -->
		<aside class="
			fixed lg:sticky top-0 left-0 h-screen w-80 
			bg-slate-900/95 backdrop-blur-xl border-r border-white/10 
			transform transition-transform duration-300 z-50
			{sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
		">
			<div class="p-6 border-b border-white/10">
				<div class="flex items-center justify-between">
					<h2 class="text-lg font-semibold text-white">Documentation</h2>
					<button 
						class="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
						onclick={toggleSidebar}
						aria-label="Close sidebar"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<nav class="p-6 overflow-y-auto h-full pb-20">
				{#each navigation as section}
					<div class="mb-8">
						<h3 class="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
							{section.title}
						</h3>
						<ul class="space-y-1">
							{#each section.items as item}
								<li>
									<a 
										href={item.href}
										class="
											block px-3 py-2 rounded-lg text-sm transition-all duration-200
											{isActive(item.href, item.exact) 
												? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400' 
												: 'text-white/70 hover:text-white hover:bg-white/10'
											}
										"
										data-magnetic
									>
										{item.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 lg:ml-0">
			<!-- Mobile Menu Button -->
			<div class="lg:hidden sticky top-0 z-30 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-4">
				<button 
					class="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
					onclick={toggleSidebar}
					aria-label="Open sidebar"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<span class="text-sm font-medium">Menu</span>
				</button>
			</div>

			<!-- Page Content -->
			<div class="min-h-screen">
				<slot />
			</div>
		</main>
	</div>
</div>

<style>
	:global(.docs-content) {
		@apply max-w-4xl mx-auto px-6 py-8;
	}
	
	@media (min-width: 1024px) {
		:global(.docs-content) {
			@apply px-8 py-12;
		}
	}

	:global(.docs-content h1) {
		@apply text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent;
	}

	:global(.docs-content h2) {
		@apply text-2xl lg:text-3xl font-bold mb-4 text-white mt-12 first:mt-0;
	}

	:global(.docs-content h3) {
		@apply text-xl lg:text-2xl font-semibold mb-3 text-white/90 mt-8;
	}

	:global(.docs-content p) {
		@apply text-white/80 leading-relaxed mb-4 text-base lg:text-lg;
	}

	:global(.docs-content ul) {
		@apply list-disc list-inside text-white/80 mb-4;
	}
	
	:global(.docs-content ul) > :not([hidden]) ~ :not([hidden]) {
		margin-top: 0.5rem;
	}

	:global(.docs-content code) {
		@apply bg-slate-800 px-2 py-1 rounded text-sm font-mono text-blue-300;
	}

	:global(.docs-content pre) {
		@apply bg-slate-800 p-4 rounded-lg overflow-x-auto mb-6;
	}

	:global(.docs-content pre code) {
		@apply bg-transparent p-0;
	}

	:global([data-magnetic]) {
		transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	:global([data-magnetic]:hover) {
		transform: translateX(4px);
	}
</style>