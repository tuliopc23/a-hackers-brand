<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { glassFade, magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	import { Search } from 'lucide-svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import searchIndexData from '$lib/search/search-index.json';

	// Lazy load WebGL components for performance
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));

	let mounted = false;
	let sidebarOpen = false;
	let searchModalOpen = $state(false);

	// Transform search index data for SearchModal
	const searchData = searchIndexData.documents.map((doc) => ({
		id: doc.id,
		title: doc.title === '+page' ? doc.headings[0]?.text || doc.url.split('/').pop() || doc.id : doc.title,
		content: doc.content,
		path: doc.url,
		type: doc.category || doc.type || 'component',
		keywords: doc.keywords || [],
		score: 0
	}));

	onMount(() => {
		mounted = true;

		// Apply magnetic hover to navigation elements
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach((el) => magneticHover(el));

		// Global keyboard listener for search shortcut (Cmd/Ctrl + K)
		const handleGlobalKeydown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				openSearch();
			}
		};

		document.addEventListener('keydown', handleGlobalKeydown);

		return () => {
			document.removeEventListener('keydown', handleGlobalKeydown);
		};
	});

	// Documentation navigation structure
	const navigation = [
		{
			title: 'Getting Started',
			items: [
				{ title: 'Overview', href: '/docs', exact: true },
				{ title: 'Installation', href: '/docs/installation' },
				{ title: 'Quick Start', href: '/docs/quick-start' },
				{ title: 'Playground', href: '/docs/playground' }
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
				{ title: 'Iconography', href: '/docs/iconography' },
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

	// Search modal controls
	function openSearch() {
		searchModalOpen = true;
	}

	function closeSearch() {
		searchModalOpen = false;
	}

	function handleSearchSelect(result: any) {
		// Navigate to the selected documentation page
		window.location.href = result.path;
		closeSearch();
	}

	// Toggle mobile sidebar
	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	// Close sidebar when route changes
	$effect(() => {
		if ($page.url.pathname) {
			sidebarOpen = false;
		}
	});
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

				<!-- Center: Search Button with glass morphism -->
				<div class="flex-1 max-w-md mx-8 hidden md:block">
					<button
						type="button"
						onclick={openSearch}
						class="
							w-full flex items-center gap-3 px-4 py-2.5 rounded-xl
							bg-white/5 backdrop-blur-xl border border-white/10
							hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10
							transition-all duration-300 ease-out
							group cursor-pointer
						"
						data-magnetic
						use:magneticHover={{ enabled: true, strength: 0.1, scale: 1.02 }}
						aria-label="Search documentation (Cmd+K)"
					>
						<Search class="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
						<span class="text-white/50 group-hover:text-white/80 text-sm font-mono flex-1 text-left transition-colors">
							Search documentation...
						</span>
						<div class="flex items-center gap-1">
							<kbd class="px-1.5 py-0.5 text-xs text-white/40 bg-white/10 border border-white/20 rounded font-mono">
								⌘K
							</kbd>
						</div>
					</button>
				</div>

				<!-- Right: Mobile Search + Documentation Label -->
				<div class="flex items-center gap-3">
					<!-- Mobile Search Button -->
					<button
						type="button"
						onclick={openSearch}
						class="
							md:hidden p-2 rounded-lg
							bg-white/5 backdrop-blur-xl border border-white/10
							hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10
							transition-all duration-300
						"
						data-magnetic
						use:magneticHover={{ enabled: true, strength: 0.1, scale: 1.05 }}
						aria-label="Search documentation"
					>
						<Search class="w-5 h-5 text-white/70" />
					</button>

					<div class="text-sm text-white/70 hidden sm:block">Documentation</div>
				</div>
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
		<aside
			class="
			fixed lg:sticky top-0 left-0 h-screen w-80
			bg-slate-900/95 backdrop-blur-xl border-r border-white/10
			transform transition-transform duration-300 z-50
			{sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
		"
		>
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
											: 'text-white/70 hover:text-white hover:bg-white/10'}
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

	<!-- Search Modal -->
	<SearchModal
		bind:isOpen={searchModalOpen}
		title="Search Documentation"
		placeholder="Search components, guides, and examples..."
		{searchData}
		maxResults={10}
		showType={true}
		showIcons={true}
		onClose={closeSearch}
		onSelect={handleSearchSelect}
	/>
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

	:global(.docs-content ul li + li) {
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
