<script lang="ts">
	import { Badge, GlassCard, Input } from '$lib/components';
	import { onMount } from 'svelte';
	
	let searchQuery = $state('');
	let selectedCategory = $state('all');
	
	const categories = [
		{ id: 'all', name: 'All Components', count: 50 },
		{ id: 'core', name: 'Core', count: 20 },
		{ id: 'terminal', name: 'Terminal', count: 10 },
		{ id: 'glass', name: 'Glass UI', count: 15 },
		{ id: 'webgl', name: '3D/WebGL', count: 5 }
	];
	
	const components = [
		// Core Components
		{ name: 'Button', category: 'core', description: 'Interactive button with multiple variants', complexity: 'simple' },
		{ name: 'Card', category: 'core', description: 'Container component with glass morphism', complexity: 'simple' },
		{ name: 'Input', category: 'core', description: 'Text input with validation support', complexity: 'simple' },
		{ name: 'Badge', category: 'core', description: 'Small status indicators', complexity: 'simple' },
		{ name: 'Modal', category: 'core', description: 'Dialog overlay component', complexity: 'medium' },
		{ name: 'Select', category: 'core', description: 'Dropdown selection component', complexity: 'medium' },
		{ name: 'Checkbox', category: 'core', description: 'Binary choice input', complexity: 'simple' },
		{ name: 'Switch', category: 'core', description: 'Toggle switch component', complexity: 'simple' },
		{ name: 'Tabs', category: 'core', description: 'Tabbed content navigation', complexity: 'medium' },
		{ name: 'Accordion', category: 'core', description: 'Collapsible content sections', complexity: 'medium' },
		{ name: 'Alert', category: 'core', description: 'Notification messages', complexity: 'simple' },
		{ name: 'Progress', category: 'core', description: 'Progress indicators', complexity: 'simple' },
		{ name: 'Tooltip', category: 'core', description: 'Contextual information on hover', complexity: 'simple' },
		{ name: 'Slider', category: 'core', description: 'Range input component', complexity: 'medium' },
		{ name: 'Toast', category: 'core', description: 'Temporary notifications', complexity: 'medium' },
		
		// Terminal Components
		{ name: 'TerminalWindow', category: 'terminal', description: 'Terminal emulator window', complexity: 'complex' },
		{ name: 'CommandBlock', category: 'terminal', description: 'Code block with terminal styling', complexity: 'simple' },
		{ name: 'MatrixRain', category: 'terminal', description: 'Matrix-style rain effect', complexity: 'medium' },
		{ name: 'RetroText', category: 'terminal', description: 'Retro computer text effects', complexity: 'simple' },
		{ name: 'BootSequence', category: 'terminal', description: 'System boot animation', complexity: 'complex' },
		{ name: 'AdvancedTerminal', category: 'terminal', description: 'Full terminal with command execution', complexity: 'complex' },
		{ name: 'LiquidTerminal', category: 'terminal', description: 'Terminal with liquid glass effects', complexity: 'complex' },
		{ name: 'AICommandSuggestions', category: 'terminal', description: 'AI-powered command suggestions', complexity: 'complex' },
		
		// Glass UI Components
		{ name: 'GlassButton', category: 'glass', description: 'Button with glass morphism effects', complexity: 'medium' },
		{ name: 'GlassCard', category: 'glass', description: 'Card with glass morphism styling', complexity: 'simple' },
		{ name: 'GlassInput', category: 'glass', description: 'Input with glass morphism design', complexity: 'medium' },
		{ name: 'GlassModal', category: 'glass', description: 'Modal with glass morphism backdrop', complexity: 'medium' },
		{ name: 'GlassTabs', category: 'glass', description: 'Tabs with glass morphism styling', complexity: 'medium' },
		
		// 3D/WebGL Components
		{ name: 'ThrelteCanvas', category: 'webgl', description: '3D canvas wrapper for Three.js', complexity: 'complex' },
		{ name: 'LiquidGlassScene', category: 'webgl', description: '3D liquid glass shader scene', complexity: 'complex' },
		{ name: 'ParticleSystem', category: 'webgl', description: '3D particle effects system', complexity: 'complex' },
		{ name: 'LiquidSphere', category: 'webgl', description: 'Interactive liquid sphere', complexity: 'complex' },
		{ name: 'GlassScene', category: 'webgl', description: '3D glass material showcase', complexity: 'complex' }
	];
	
	const filteredComponents = $derived(
		components.filter(component => {
			const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				component.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
			return matchesSearch && matchesCategory;
		})
	);
	
	const groupedComponents = $derived(
		filteredComponents.reduce((acc, component) => {
			if (!acc[component.category]) {
				acc[component.category] = [];
			}
			acc[component.category].push(component);
			return acc;
		}, {} as Record<string, typeof components>)
	);
	
	function getCategoryName(categoryId: string): string {
		const category = categories.find(c => c.id === categoryId);
		return category?.name || categoryId;
	}
	
	function getComplexityColor(complexity: string): string {
		switch (complexity) {
			case 'simple': return 'success';
			case 'medium': return 'warning';
			case 'complex': return 'error';
			default: return 'default';
		}
	}
</script>

<svelte:head>
	<title>Components - A Hacker's Brand</title>
	<meta name="description" content="Browse all components in the A Hacker's Brand design system" />
</svelte:head>

<div class="min-h-screen">
	<!-- Header -->
	<header class="mb-12">
		<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
			Components
		</h1>
		<p class="text-gray-400 text-lg">
			Explore our collection of {components.length} meticulously crafted components
		</p>
	</header>
	
	<!-- Search and Filters -->
	<div class="mb-8 space-y-4">
		<div class="relative">
			<Input
				type="search"
				placeholder="Search components..."
				bind:value={searchQuery}
				class="pl-10"
			/>
			<svg
				class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</div>
		
		<div class="flex flex-wrap gap-2">
			{#each categories as category}
				<button
					class="px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 {selectedCategory === category.id 
						? 'bg-green-400/20 text-green-400 border border-green-400' 
						: 'bg-black/50 text-gray-400 border border-gray-700 hover:border-green-400/50 hover:text-green-400'}"
					onclick={() => selectedCategory = category.id}
				>
					{category.name}
					<span class="ml-2 text-xs opacity-60">({category.count})</span>
				</button>
			{/each}
		</div>
	</div>
	
	<!-- Results count -->
	<div class="mb-6 text-sm text-gray-400">
		Showing {filteredComponents.length} of {components.length} components
	</div>
	
	<!-- Components Grid -->
	{#if filteredComponents.length === 0}
		<div class="text-center py-12">
			<p class="text-gray-400">No components found matching your criteria.</p>
		</div>
	{:else}
		<div class="space-y-12">
			{#each Object.entries(groupedComponents) as [category, categoryComponents]}
				<section>
					<h2 class="text-2xl font-semibold mb-6 text-green-400">
						{getCategoryName(category)}
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{#each categoryComponents as component}
							<a
								href="/docs/components/{component.name.toLowerCase()}"
								class="group"
							>
								<GlassCard class="p-6 h-full transition-all duration-300 hover:scale-105 hover:border-green-400/50">
									<div class="flex items-start justify-between mb-3">
										<h3 class="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
											{component.name}
										</h3>
										<Badge variant={getComplexityColor(component.complexity)} size="sm">
											{component.complexity}
										</Badge>
									</div>
									<p class="text-gray-400 text-sm">
										{component.description}
									</p>
									<div class="mt-4 flex items-center text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
										<span>View docs</span>
										<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</GlassCard>
							</a>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	{/if}
</div>