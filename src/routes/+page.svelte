<script lang="ts">
	import { Button, GlassCard, TerminalWindow, Badge, RetroText, Card, Switch } from '$lib/components';
	import { theme, themeConfig, contrastMode } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let typedText = $state('');
	const fullText = 'Where liquid glass meets terminal aesthetics and modern TUI design';
	let showFeatures = $state(false);
	let currentTheme = $state($theme);
	let currentContrast = $state($contrastMode);
	let config = $state($themeConfig);

	theme.subscribe((value) => {
		currentTheme = value;
	});

	contrastMode.subscribe((value) => {
		currentContrast = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	onMount(() => {
		// Typewriter effect
		let i = 0;
		const typeInterval = setInterval(() => {
			if (i < fullText.length) {
				typedText += fullText[i];
				i++;
			} else {
				clearInterval(typeInterval);
				setTimeout(() => {
					showFeatures = true;
				}, 500);
			}
		}, 50);

		return () => clearInterval(typeInterval);
	});

	const features = [
		{
			icon: '🎨',
			title: 'Dual Theme System',
			description:
				'Seamlessly switch between hacker terminal aesthetics and modern Bubble Tea TUI design with full component support',
			highlight: true
		},
		{
			icon: '⚡',
			title: 'Blazing Fast',
			description: 'Built with Svelte 5 and optimized with Bun for maximum performance'
		},
		{
			icon: '🔧',
			title: 'Developer First',
			description: 'TypeScript support, tree-shaking, and comprehensive documentation'
		},
		{
			icon: '♿',
			title: 'Accessible',
			description: 'WCAG 2.1 AA compliant components with keyboard navigation'
		},
		{
			icon: '🎭',
			title: '50+ Components',
			description: 'Everything from buttons to 3D scenes, all production-ready'
		},
		{
			icon: '🚀',
			title: 'Modern Stack',
			description: 'SvelteKit, TypeScript, Tailwind CSS, Three.js, and more'
		}
	];

	const codeExample = `import { Button, GlassCard, TerminalWindow } from 'a-hackers-brand';

<TerminalWindow title="app.exe">
  <GlassCard>
    <h2>Welcome to the Matrix</h2>
    <Button variant="terminal" onClick={enterTheMatrix}>
      Enter
    </Button>
  </GlassCard>
</TerminalWindow>`;
</script>

<svelte:head>
	<title>A Hacker's Brand - Design System</title>
	<meta
		name="description"
		content="A cutting-edge design system combining Apple's liquid glass aesthetics with terminal/CLI hacker aesthetics. Built with Svelte, TypeScript, and Three.js."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
		<div class="mb-8">
			<RetroText size="xl">A HACKER'S BRAND</RetroText>
		</div>

		<h1
			class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r {currentTheme === 'terminal'
				? 'from-green-400 via-cyan-400 to-green-400'
				: 'from-pink-400 via-purple-400 to-cyan-400'} bg-clip-text text-transparent"
		>
			Design System
		</h1>

		<p class="text-xl md:text-2xl text-gray-400 font-mono mb-12 h-8">
			{typedText}<span class="terminal-cursor"></span>
		</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<a href="/docs/getting-started">
				<Button variant="terminal" size="lg">Get Started →</Button>
			</a>
			<a href="/docs/components">
				<Button variant="glass" size="lg">Browse Components</Button>
			</a>
		</div>

		<!-- Theme & Accessibility Controls -->
		<div class="mt-8 flex flex-col items-center gap-4">
			<!-- Theme Toggle -->
			<div class="glass-subtle p-4 rounded-xl border border-white/20 backdrop-blur-md">
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2 text-sm">
						<span class="font-mono text-green-400">Terminal</span>
					</div>
					<Switch
						checked={currentTheme === 'bubbleTea'}
						variant={currentTheme === 'terminal' ? 'terminal' : 'glass'}
						size="lg"
						onCheckedChange={(checked) => {
							if (checked) {
								theme.setBubbleTea();
							} else {
								theme.setTerminal();
							}
						}}
						glow={true}
						label="Theme Toggle"
						aria-label="Switch between Terminal and Bubble Tea themes"
					/>
					<div class="flex items-center gap-2 text-sm">
						<span class="font-mono {currentTheme === 'bubbleTea' ? 'text-pink-400' : 'text-gray-500'}">Bubble Tea</span>
					</div>
				</div>
				<div class="text-center mt-2 text-xs text-gray-400">
					{config.description}
				</div>
			</div>

			<!-- High Contrast Toggle -->
			<div class="glass-subtle p-3 rounded-xl border border-white/20 backdrop-blur-md">
				<div class="flex items-center gap-3">
					<span class="text-xs font-mono text-gray-400">Normal</span>
					<Switch
						checked={currentContrast === 'high'}
						variant="glass"
						size="sm"
						onCheckedChange={(checked) => {
							if (checked) {
								contrastMode.setHigh();
							} else {
								contrastMode.setNormal();
							}
						}}
						label="High Contrast Toggle"
						aria-label="Switch to high contrast mode for better accessibility"
					/>
					<span class="text-xs font-mono text-gray-400">High Contrast</span>
					<Badge variant="secondary" class="text-xs">
						WCAG {currentContrast === 'high' ? 'AAA' : 'AA'}
					</Badge>
				</div>
			</div>
		</div>

		<div class="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
			<div class="flex items-center space-x-2">
				<Badge variant="success">v0.2.0</Badge>
			</div>
			<div class="flex items-center space-x-2">
				<span class="font-mono">npm i a-hackers-brand</span>
			</div>
		</div>
	</div>

	<!-- Animated background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-1/4 left-1/4 w-96 h-96 {currentTheme === 'terminal'
				? 'bg-green-500/10'
				: 'bg-pink-500/10'} rounded-full blur-3xl animate-pulse"
		></div>
		<div
			class="absolute bottom-1/4 right-1/4 w-96 h-96 {currentTheme === 'terminal'
				? 'bg-cyan-500/10'
				: 'bg-purple-500/10'} rounded-full blur-3xl animate-pulse delay-1000"
		></div>
		{#if currentTheme === 'bubbleTea'}
			<div
				class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"
			></div>
		{/if}
	</div>
</section>

<!-- Features Grid -->
<section class="py-24 px-6 relative">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Everything you need to build
				<span class={currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'}> extraordinary</span> interfaces
			</h2>
			<p class="text-gray-400 text-lg max-w-2xl mx-auto">
				A comprehensive design system that bridges the gap between modern glass morphism and retro terminal aesthetics
			</p>
			<div class="mt-6 flex justify-center gap-4">
				<div class="px-4 py-2 rounded-full glass-subtle border border-white/20">
					<span class="text-sm text-green-400 font-mono">Terminal Theme</span>
				</div>
				<div class="px-4 py-2 rounded-full glass-subtle border border-white/20">
					<span class="text-sm text-pink-400 font-mono">Bubble Tea Theme</span>
				</div>
			</div>
		</div>

		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			class:opacity-0={!showFeatures}
			class:opacity-100={showFeatures}
			style="transition: opacity 1s ease-in-out"
		>
			{#each features as feature, i}
				<GlassCard
					class="p-6 hover:scale-105 transition-transform duration-300 {feature.highlight
						? 'md:col-span-2 lg:col-span-3 relative'
						: ''}"
				>
					{#if feature.highlight}
						<!-- Special highlighting for theme feature -->
						<div
							class="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"
						></div>
						<div class="relative">
							<div class="flex items-center justify-center gap-6 mb-4">
								<div class="text-5xl">{feature.icon}</div>
								<div class="text-2xl">↔️</div>
								<div class="flex gap-2">
									<div class="w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
									<div class="w-8 h-8 bg-pink-400 rounded-full animate-pulse delay-500"></div>
								</div>
							</div>
							<h3
								class="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
							>
								{feature.title}
							</h3>
							<p class="text-gray-300 text-center text-lg">{feature.description}</p>
							<div class="mt-4 flex justify-center">
								<Badge variant={currentTheme === 'terminal' ? 'success' : 'default'}>
									Try switching themes above! ↑
								</Badge>
							</div>
						</div>
					{:else}
						<div class="text-4xl mb-4">{feature.icon}</div>
						<h3 class="text-xl font-semibold mb-2 {currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'}">
							{feature.title}
						</h3>
						<p class="text-gray-400">{feature.description}</p>
					{/if}
				</GlassCard>
			{/each}
		</div>
	</div>
</section>

<!-- Code Example -->
<section class="py-24 px-6 bg-black/50">
	<div class="max-w-5xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Write less. Ship <span class={currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'}>faster</span>.
			</h2>
			<p class="text-gray-400 text-lg">Get started with just a few lines of code</p>
		</div>

		<TerminalWindow title="App.svelte">
			<pre class="text-sm"><code>{codeExample}</code></pre>
		</TerminalWindow>

		<div class="mt-8 text-center">
			<a href="/playground">
				<Button variant="glass">Try in Playground →</Button>
			</a>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-24 px-6">
	<div class="max-w-7xl mx-auto">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-4xl font-bold {currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'} font-mono">
					50+
				</div>
				<div class="text-gray-400 mt-2">Components</div>
			</div>
			<div>
				<div class="text-4xl font-bold {currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'} font-mono">
					2
				</div>
				<div class="text-gray-400 mt-2">Themes</div>
			</div>
			<div>
				<div class="text-4xl font-bold {currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'} font-mono">
					100%
				</div>
				<div class="text-gray-400 mt-2">TypeScript</div>
			</div>
			<div>
				<div class="text-4xl font-bold {currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'} font-mono">
					&lt;150kb
				</div>
				<div class="text-gray-400 mt-2">Bundle Size</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section
	class="py-24 px-6 bg-gradient-to-b from-transparent to-{currentTheme === 'terminal' ? 'green-950/20' : 'pink-950/20'}"
>
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-3xl md:text-4xl font-bold mb-6">
			Ready to build something <span class={currentTheme === 'terminal' ? 'text-green-400' : 'text-pink-400'}
				>amazing</span
			>?
		</h2>
		<p class="text-gray-400 text-lg mb-8">Join developers building the future with A Hacker's Brand</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/docs/getting-started">
				<Button variant={currentTheme === 'terminal' ? 'terminal' : 'glass'} size="lg">Get Started</Button>
			</a>
			<a href="https://github.com/tuliopc23/a-hackers-brand" target="_blank" rel="noopener noreferrer">
				<Button variant="ghost" size="lg">View on GitHub</Button>
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.animate-fade-in-up) {
		animation: fadeInUp 0.6s ease-out forwards;
	}
</style>
