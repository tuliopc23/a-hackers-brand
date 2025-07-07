<script>
	import { onMount } from 'svelte';
	import { GlassButton, GlassCard } from '$lib/components/liquidify';
	import { TerminalWindow } from '$lib/components';
	import CodeHighlight from '$lib/components/CodeHighlight.svelte';
		import { magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	
	// Lazy load WebGL components for performance
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));
	const LazyThrelteCanvas = lazy(() => import('$lib/components/LazyThrelteCanvas.svelte'));
	
	let heroSection;
	let mounted = false;
	
	onMount(() => {
		mounted = true;
		
		// Apply magnetic hover to interactive elements
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach(el => magneticHover(el));
	});
	
	// Documentation sections
	const docSections = [
		{
			title: 'Components',
			description: 'Interactive showcase of all liquidify components with live demos',
			href: '/docs/components',
			icon: '🧩',
			color: 'from-blue-500/20 to-purple-500/20'
		},
		{
			title: 'Design Tokens',
			description: 'Complete design system tokens, colors, typography, and spacing',
			href: '/docs/tokens',
			icon: '🎨',
			color: 'from-green-500/20 to-teal-500/20'
		},
		{
			title: 'Brand Guidelines',
			description: 'Comprehensive brand guidelines and usage documentation',
			href: '/docs/guidelines',
			icon: '📐',
			color: 'from-purple-500/20 to-pink-500/20'
		}
	];
	
	// Features showcase
	const features = [
		'Liquid Glass Morphism',
		'Terminal Authenticity',
		'Magnetic Interactions',
		'WebGL Effects',
		'Advanced Physics',
		'Responsive Design'
	];
	
	// Copy terminal command
	const copyCommand = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			// Could add a toast notification here
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

<svelte:head>
	<title>Liquid Glass Terminal Fusion - Design System Documentation</title>
	<meta name="description" content="A jaw-dropping fusion of Apple's liquid glass design language with terminal hacker aesthetics. Interactive documentation and component showcase." />
	<meta name="keywords" content="design system, liquid glass, terminal, UI components, Svelte, documentation" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="absolute inset-0 opacity-30">
			<svelte:component this={LazyLiquidBackground.component} />
		</div>
	{/if}
	
	<!-- Navigation -->
	<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-xl font-bold text-white">A Hacker's Brand</h1>
				</div>
				<div class="text-sm text-white/70">Overview</div>
			</div>
		</div>
	</nav>
	
	<!-- Hero Section -->
	<section bind:this={heroSection} class="relative z-10 py-20 px-6">
		<div class="max-w-7xl mx-auto text-center">
			<div class="mb-8">
				<h1 class="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
					Design System
				</h1>
				<p class="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					A jaw-dropping fusion of <strong class="text-white">Apple's liquid glass design language</strong> 
					with <strong class="text-green-400">terminal hacker aesthetics</strong>. 
					Professional, innovative, and magnetic.
				</p>
			</div>
			
			<!-- Features Grid -->
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
				{#each features as feature}
					<div class="p-3 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group">
						<span class="text-sm font-medium group-hover:text-blue-400 transition-colors">
							{feature}
						</span>
					</div>
				{/each}
			</div>
			
			<!-- Terminal Demo -->
			<div class="max-w-4xl mx-auto mb-12">
				<GlassCard intensity="medium" class="p-6">
					<TerminalWindow title="tulio@brand-system">
						<div class="font-mono text-sm space-y-2">
							<div class="flex items-center space-x-2">
								<span class="text-green-400">$</span>
								<span class="text-white">npm install @tulio/liquid-glass-system</span>
								<button 
									class="ml-auto p-1 hover:bg-white/10 rounded transition-colors"
									aria-label="Copy install command to clipboard"
									onclick={() => copyCommand('npm install @tulio/liquid-glass-system')}
									title="Copy command"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
									</svg>
								</button>
							</div>
							<div class="text-green-400">
								<span class="animate-pulse">▓</span> Installing liquid glass components...
							</div>
							<div class="text-blue-400">
								✓ Components installed successfully
							</div>
							<div class="text-purple-400">
								✓ Design tokens configured
							</div>
							<div class="text-green-400">
								✓ Ready to build jaw-dropping interfaces
							</div>
							<div class="flex items-center space-x-2 mt-4">
								<span class="text-green-400">$</span>
								<span class="text-white opacity-50">npm run dev</span>
								<span class="animate-pulse text-white">▓</span>
							</div>
						</div>
					</TerminalWindow>
				</GlassCard>
			</div>
		</div>
	</section>
	
	<!-- Documentation Sections -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-4xl font-bold mb-4">Explore the System</h2>
				<p class="text-xl text-white/70">
					Comprehensive documentation and interactive examples
				</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				{#each docSections as section}
					<a 
						href={section.href}
						class="group block"
						data-magnetic
					>
						<GlassCard intensity="light" class="p-8 h-full hover:intensity-medium transition-all duration-300 group-hover:scale-105">
							<div class="flex items-center justify-center w-16 h-16 bg-gradient-to-r {section.color} rounded-xl mb-6 text-2xl group-hover:scale-110 transition-transform">
								{section.icon}
							</div>
							<h3 class="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
								{section.title}
							</h3>
							<p class="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
								{section.description}
							</p>
							<div class="mt-6 flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
								<span class="text-sm font-medium">Explore</span>
								<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</GlassCard>
					</a>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- Quick Start Section -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-4xl mx-auto">
			<GlassCard intensity="medium" class="p-8">
				<h2 class="text-3xl font-bold mb-6 text-center">Quick Start</h2>
				<div class="space-y-6">
					<div class="border-l-4 border-blue-500 pl-6">
						<h3 class="text-xl font-semibold mb-2">1. Install the package</h3>
						<CodeHighlight 
							code="npm install @tulio/liquid-glass-system" 
							language="bash" 
						/>
					</div>
					
					<div class="border-l-4 border-green-500 pl-6">
						<h3 class="text-xl font-semibold mb-2">2. Import components</h3>
						<CodeHighlight 
							code="import { GlassButton, GlassCard } from '@tulio/liquid-glass-system';" 
							language="javascript" 
						/>
					</div>
					
					<div class="border-l-4 border-purple-500 pl-6">
						<h3 class="text-xl font-semibold mb-2">3. Start building</h3>
						<CodeHighlight 
							code="<GlassButton variant=&quot;primary&quot;>Deploy to Production</GlassButton>" 
							language="svelte" 
						/>
					</div>
				</div>
			</GlassCard>
		</div>
	</section>
	
	<!-- Footer -->
	<footer class="relative z-10 py-8 px-6 mt-16 backdrop-blur-sm bg-white/5 border-t border-white/10">
		<div class="max-w-7xl mx-auto text-center">
			<p class="text-white/70">
				Built with <span class="text-red-400">♥</span> by 
				<a href="https://github.com/tulio" class="text-blue-400 hover:text-blue-300 transition-colors">
					Tulio Pinheiro Cunha
				</a>
			</p>
			<p class="text-white/50 text-sm mt-2">
				Liquid Glass Terminal Fusion Design System v0.2.0
			</p>
		</div>
	</footer>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global([data-magnetic]) {
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	
	:global([data-magnetic]:hover) {
		transform: translateY(-2px) scale(1.02);
	}
</style>
