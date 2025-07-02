<script lang="ts">
	import { Button, Card, Input, LazyTerminalWindow, LazyThrelteCanvas, PerfOverlay } from '$lib';
	import { Terminal, Zap, Sparkles, Github, Globe, Mail } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { mark, measure, trackComponentLoad } from '$lib/perf.js';
	import { dev } from '$app/environment';
	import { enabled3D, quality, autoRotate } from '$lib/stores/threlte.js';

	let mounted = false;
	let emailValue = '';

	onMount(() => {
		const stopTracking = trackComponentLoad('MainPage');
		mark('page:mount:start');

		mounted = true;

		mark('page:mount:end');
		measure('page:mount:duration', 'page:mount:start', 'page:mount:end');
		stopTracking();
	});

	const handleEmailSubmit = () => {
		if (emailValue) {
			alert(`Thanks for your interest! We'll reach out to ${emailValue} soon.`);
			emailValue = '';
		}
	};
</script>

<svelte:head>
	<title>Tulio Brand System - Liquid Glass Terminal Fusion</title>
	<meta name="description" content="A cutting-edge design system built with SvelteKit and Vite" />
</svelte:head>

<main class="min-h-screen">
	<!-- Animated Background -->
	<div class="fixed inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute -top-40 -right-40 w-80 h-80 bg-terminal-green/10 rounded-full blur-3xl animate-brand-float"
			style="animation-delay: 0s;"
		></div>
		<div
			class="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl animate-brand-float"
			style="animation-delay: 2s;"
		></div>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl animate-brand-float"
			style="animation-delay: 4s;"
		></div>
	</div>

	<!-- Hero Section -->
	<section class="relative z-10 container mx-auto px-6 py-20">
		<div class="text-center mb-16">
			<div class="mb-8 flex justify-center">
				<div class="p-4 rounded-full glass animate-liquid-glow">
					<Terminal class="w-12 h-12 text-terminal-green" />
				</div>
			</div>

			<h1
				class="text-display-large font-bold mb-6 bg-gradient-to-r from-terminal-green via-brand-primary to-terminal-cyan bg-clip-text text-transparent"
			>
				Liquid Glass Terminal Fusion
			</h1>

			<p class="text-body-large text-white/80 max-w-3xl mx-auto mb-8">
				A cutting-edge design system that seamlessly blends liquid glass morphism aesthetics with terminal-inspired
				functionality. Built with <strong>SvelteKit + Vite</strong> for ultimate performance.
			</p>

			<div class="flex flex-wrap gap-4 justify-center">
				<Button variant="glass" size="lg">
					{#snippet children()}
						<Sparkles class="w-5 h-5" />
						Explore Components
					{/snippet}
				</Button>
				<Button variant="outline" size="lg">
					{#snippet children()}
						<Github class="w-5 h-5" />
						View on GitHub
					{/snippet}
				</Button>
			</div>
		</div>

		<!-- Performance Stats -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
			<Card variant="glass" class="text-center">
				{#snippet children()}
					<div class="text-2xl font-bold text-terminal-green mb-2">60% Smaller</div>
					<div class="text-white/60">Bundle Size vs React</div>
				{/snippet}
			</Card>
			<Card variant="glass" class="text-center">
				{#snippet children()}
					<div class="text-2xl font-bold text-brand-primary mb-2">&lt;100ms</div>
					<div class="text-white/60">Hot Module Reload</div>
				{/snippet}
			</Card>
			<Card variant="glass" class="text-center">
				{#snippet children()}
					<div class="text-2xl font-bold text-terminal-cyan mb-2">95+</div>
					<div class="text-white/60">Lighthouse Score</div>
				{/snippet}
			</Card>
		</div>

		<!-- Interactive Terminal Demo -->
		<div class="mb-20">
			<h2 class="text-heading-1 font-bold text-center mb-8 text-white">Interactive Terminal Experience</h2>
			<LazyTerminalWindow title="tulio@brand-system:~" autoPlay={mounted} class="animate-fade-in" />
		</div>

		<!-- 3D Canvas Showcase -->
		<div class="mb-20">
			<h2 class="text-heading-1 font-bold text-center mb-8 text-white">Interactive 3D Experience</h2>
			<p class="text-center text-white/70 mb-12 max-w-2xl mx-auto">
				Experience cutting-edge WebGL rendering with Threlte and Three.js. Toggle between scenes, adjust quality
				settings, and monitor performance in real-time.
			</p>

			<!-- 3D Scene Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
				<!-- Glass Scene -->
				<Card variant="glass" class="p-6">
					{#snippet children()}
						<h3 class="text-heading-3 font-semibold mb-4 text-white flex items-center">
							<Sparkles class="w-6 h-6 mr-2 text-terminal-green" />
							Glass Morphism Scene
						</h3>
						<div class="h-80 mb-4">
							<LazyThrelteCanvas
								class="w-full h-full"
								scene="glass"
								enable3D={$enabled3D}
								quality={$quality}
								autoRotate={$autoRotate}
							/>
						</div>
						<p class="text-white/60 text-sm">
							Advanced glass materials with realistic refraction, transmission, and lighting effects.
						</p>
					{/snippet}
				</Card>

				<!-- Terminal Scene -->
				<Card variant="glass" class="p-6">
					{#snippet children()}
						<h3 class="text-heading-3 font-semibold mb-4 text-white flex items-center">
							<Terminal class="w-6 h-6 mr-2 text-brand-primary" />
							Floating Terminal
						</h3>
						<div class="h-80 mb-4">
							<LazyThrelteCanvas
								class="w-full h-full"
								scene="terminal"
								enable3D={$enabled3D}
								quality={$quality}
								autoRotate={$autoRotate}
							/>
						</div>
						<p class="text-white/60 text-sm">
							Interactive 3D terminal with real command execution and dynamic glass elements.
						</p>
					{/snippet}
				</Card>
			</div>

			<!-- 3D Features Grid -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
				<Card variant="glass-heavy" class="p-6 text-center">
					{#snippet children()}
						<div class="w-12 h-12 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<Zap class="w-6 h-6 text-terminal-green" />
						</div>
						<h4 class="text-lg font-semibold text-white mb-2">Real-time Rendering</h4>
						<p class="text-white/60 text-sm">60fps smooth animations with optimized WebGL shaders</p>
					{/snippet}
				</Card>

				<Card variant="glass-heavy" class="p-6 text-center">
					{#snippet children()}
						<div class="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<Globe class="w-6 h-6 text-brand-primary" />
						</div>
						<h4 class="text-lg font-semibold text-white mb-2">Intersection Observer</h4>
						<p class="text-white/60 text-sm">Lazy loading for optimal performance and bundle size</p>
					{/snippet}
				</Card>

				<Card variant="glass-heavy" class="p-6 text-center">
					{#snippet children()}
						<div class="w-12 h-12 bg-terminal-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<Sparkles class="w-6 h-6 text-terminal-cyan" />
						</div>
						<h4 class="text-lg font-semibold text-white mb-2">Quality Control</h4>
						<p class="text-white/60 text-sm">Adaptive quality settings for different device capabilities</p>
					{/snippet}
				</Card>
			</div>
		</div>

		<!-- Component Showcase -->
		<div class="mb-20">
			<h2 class="text-heading-1 font-bold text-center mb-12 text-white">Glass UI Components</h2>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<!-- Buttons Showcase -->
				<Card variant="glass" class="p-8">
					{#snippet children()}
						<h3 class="text-heading-3 font-semibold mb-6 text-white">
							<Zap class="w-6 h-6 inline mr-2 text-terminal-green" />
							Liquid Glass Buttons
						</h3>
						<div class="space-y-4">
							<div class="flex flex-wrap gap-3">
								<Button variant="glass">
									{#snippet children()}Glass Effect{/snippet}
								</Button>
								<Button variant="glass-dark">
									{#snippet children()}Terminal Style{/snippet}
								</Button>
								<Button variant="outline">
									{#snippet children()}Outlined{/snippet}
								</Button>
							</div>
							<div class="flex flex-wrap gap-3">
								<Button variant="glass" size="sm">
									{#snippet children()}Small{/snippet}
								</Button>
								<Button variant="glass" size="md">
									{#snippet children()}Medium{/snippet}
								</Button>
								<Button variant="glass" size="lg">
									{#snippet children()}Large{/snippet}
								</Button>
							</div>
							<div class="flex gap-3">
								<Button variant="glass" loading>
									{#snippet children()}Loading...{/snippet}
								</Button>
								<Button variant="glass-dark" icon>
									{#snippet children()}
										<Terminal class="w-4 h-4" />
									{/snippet}
								</Button>
							</div>
						</div>
					{/snippet}
				</Card>

				<!-- Inputs Showcase -->
				<Card variant="glass" class="p-8">
					{#snippet children()}
						<h3 class="text-heading-3 font-semibold mb-6 text-white">
							<Sparkles class="w-6 h-6 inline mr-2 text-brand-primary" />
							Intelligent Inputs
						</h3>
						<div class="space-y-4">
							<Input variant="glass" placeholder="Glass morphism input..." label="Glass Input" />
							<Input variant="terminal" placeholder="$ enter command..." label="Terminal Input" />
							<Input variant="glass" placeholder="Search components...">
								{#snippet icon()}
									<Globe class="w-4 h-4" />
								{/snippet}
							</Input>
						</div>
					{/snippet}
				</Card>
			</div>
		</div>

		<!-- Newsletter Signup -->
		<div class="text-center">
			<Card variant="glass-heavy" class="max-w-md mx-auto p-8">
				{#snippet children()}
					<h3 class="text-heading-3 font-semibold mb-4 text-white">Stay Updated</h3>
					<p class="text-white/70 mb-6">Get notified about new components and features</p>
					<div class="space-y-4">
						<Input bind:value={emailValue} variant="glass" placeholder="your@email.com" type="email">
							{#snippet icon()}
								<Mail class="w-4 h-4" />
							{/snippet}
						</Input>
						<Button variant="glass" class="w-full" on:click={handleEmailSubmit} disabled={!emailValue}>
							{#snippet children()}Join the Future{/snippet}
						</Button>
					</div>
				{/snippet}
			</Card>
		</div>
	</section>
</main>

<!-- Performance Overlay -->
<PerfOverlay />

<style>
	:global(body) {
		background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
		background-attachment: fixed;
	}
</style>
