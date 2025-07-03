<script>
	import { page } from '$app/stores';
	import { GlassButton } from '$lib/components/liquidify';
	
	export let currentSection = '';
	
	// Navigation items
	const navItems = [
		{
			title: 'Overview',
			href: '/docs',
			description: 'System overview and quick start',
			icon: '🏠'
		},
		{
			title: 'Components',
			href: '/docs/components',
			description: 'Interactive component showcase',
			icon: '🧩'
		},
		{
			title: 'Design Tokens',
			href: '/docs/tokens',
			description: 'Colors, typography, and spacing',
			icon: '🎨'
		},
		{
			title: 'Brand Guidelines',
			href: '/docs/guidelines',
			description: 'Usage rules and best practices',
			icon: '📐'
		}
	];
	
	$: currentPath = $page.url.pathname;
</script>

<nav class="relative z-10 p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
	<div class="max-w-7xl mx-auto">
		<!-- Top Bar -->
		<div class="flex items-center justify-between mb-6">
			<div class="flex items-center space-x-4">
				<a href="/docs" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
					<div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-xs font-mono">
						>_
					</div>
					<h1 class="text-xl font-semibold">
						Liquid Glass Terminal Fusion
					</h1>
				</a>
				{#if currentSection}
					<span class="text-white/50">/</span>
					<span class="text-blue-400">{currentSection}</span>
				{/if}
			</div>
			
			<div class="flex items-center space-x-4">
				<GlassButton 
					variant="ghost" 
					size="sm"
					on:click={() => window.open('https://github.com/tulio/liquid-glass-system', '_blank')}
				>
					GitHub
				</GlassButton>
				<GlassButton 
					variant="primary" 
					size="sm"
				>
					Get Started
				</GlassButton>
			</div>
		</div>
		
		<!-- Navigation Links -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each navItems as item}
				<a 
					href={item.href}
					class="group p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 {currentPath === item.href ? 'bg-blue-500/10 border-blue-500/20' : ''}"
				>
					<div class="flex items-center space-x-3 mb-2">
						<span class="text-lg">{item.icon}</span>
						<span class="font-semibold text-sm group-hover:text-blue-400 transition-colors">
							{item.title}
						</span>
					</div>
					<p class="text-xs text-white/60 group-hover:text-white/80 transition-colors">
						{item.description}
					</p>
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	nav a {
		text-decoration: none;
	}
</style>