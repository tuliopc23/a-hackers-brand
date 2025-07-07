<script>
	import { onMount } from 'svelte';
	import { GlassButton, GlassCard, GlassInput, GlassModal, GlassTabs } from '$lib/components/liquidify';
	import { TerminalWindow, Badge, Button, Card, Input, Progress, Slider, Switch, Tabs, Textarea, Toast } from '$lib/components';
	import { AdvancedLiquidGlassScene, LiquidBackground, LiquidGlassShader, LiquidParticleSystem } from '$lib/components/webgl';
	import { GlitchText, MatrixRain } from '$lib/components/effects';
	import CodeHighlight from '$lib/components/CodeHighlight.svelte';
		import { magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	
	// Lazy load heavy WebGL components
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));
	const LazyAdvancedLiquidGlassScene = lazy(() => import('$lib/components/webgl/AdvancedLiquidGlassScene.svelte'));
	
	let mounted = false;
	let showModal = false;
	let showToast = false;
	let selectedTab = 'liquidify';
	let inputValue = '';
	let sliderValue = 50;
	let switchValue = false;
	let progressValue = 0;
	let selectValue = 'option1';
	
	// Component categories
	const componentCategories = {
		liquidify: {
			title: 'Liquidify Components',
			description: 'Core liquid glass components with advanced physics and interactions',
			components: [
				{ name: 'GlassButton', description: 'Magnetic buttons with glass morphism effects' },
				{ name: 'GlassCard', description: 'Layered glass cards with depth and blur' },
				{ name: 'GlassInput', description: 'Floating glass input fields with ripple effects' },
				{ name: 'GlassModal', description: 'Modal dialogs with backdrop blur and glass overlay' },
				{ name: 'GlassTabs', description: 'Tab navigation with smooth glass transitions' }
			]
		},
		terminal: {
			title: 'Terminal Components',
			description: 'Authentic terminal interfaces with genuine CLI aesthetics',
			components: [
				{ name: 'TerminalWindow', description: 'Full terminal window with authentic styling' },
				{ name: 'CommandBlock', description: 'Terminal command display with syntax highlighting' },
				{ name: 'AdvancedTerminal', description: 'Interactive terminal with command execution' },
				{ name: 'LiquidTerminal', description: 'Terminal with liquid glass effects' }
			]
		},
		webgl: {
			title: 'WebGL Effects',
			description: 'Hardware-accelerated 3D effects and animations',
			components: [
				{ name: 'LiquidBackground', description: 'Animated liquid glass background' },
				{ name: 'AdvancedLiquidGlassScene', description: 'Complex 3D glass scene with particles' },
				{ name: 'LiquidGlassShader', description: 'Custom shader-based glass effects' },
				{ name: 'LiquidParticleSystem', description: 'Interactive particle system with physics' }
			]
		},
		effects: {
			title: 'Special Effects',
			description: 'Eye-catching animations and visual effects',
			components: [
				{ name: 'GlitchText', description: 'Terminal-style text glitch animations' },
				{ name: 'MatrixRain', description: 'Matrix-style falling code animation' }
			]
		},
		base: {
			title: 'Base Components',
			description: 'Foundation UI components with liquid glass styling',
			components: [
				{ name: 'Button', description: 'Standard button with liquid glass theme' },
				{ name: 'Card', description: 'Base card component with glass effects' },
				{ name: 'Input', description: 'Form input with glass styling' },
				{ name: 'Badge', description: 'Status and label badges' },
				{ name: 'Progress', description: 'Progress indicators with glass styling' },
				{ name: 'Select', description: 'Dropdown select with glass effects' },
				{ name: 'Slider', description: 'Range slider with magnetic interactions' },
				{ name: 'Switch', description: 'Toggle switch with smooth animations' },
				{ name: 'Tabs', description: 'Tab navigation component' },
				{ name: 'Textarea', description: 'Multi-line text input with glass effects' },
				{ name: 'Toast', description: 'Notification toasts with glass backdrop' }
			]
		}
	};
	
	onMount(() => {
		mounted = true;
		
		// Apply magnetic hover effects
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach(el => magneticHover(el));
		
		// Animate progress bar
		const progressInterval = setInterval(() => {
			progressValue = (progressValue + 10) % 100;
		}, 1000);
		
		return () => clearInterval(progressInterval);
	});
	
	// Copy code snippet
	const copyCode = async (code) => {
		try {
			await navigator.clipboard.writeText(code);
			showToast = true;
			setTimeout(() => showToast = false, 3000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
	
	// Code examples
	const codeExamples = {
		GlassButton: `<GlassButton variant="primary" size="md" magnetic ripple>Deploy to Production</GlassButton>`,
		GlassCard: `<GlassCard intensity="medium" class="p-6"><h3>Terminal Output</h3><pre>$ npm run build</pre></GlassCard>`,
		GlassInput: `<GlassInput placeholder="Enter command..." bind:value={inputValue} ripple />`,
		GlassModal: `<GlassModal bind:show={showModal}><h2>Confirm Deployment</h2><p>Are you sure you want to deploy?</p></GlassModal>`,
		GlassTabs: `<GlassTabs bind:selected={selectedTab}><tab id="code">Code</tab><tab id="preview">Preview</tab></GlassTabs>`,
		TerminalWindow: `<TerminalWindow title="zsh"><div class="font-mono"><span class="text-green-400">$</span> npm run dev</div></TerminalWindow>`
	};
</script>

<svelte:head>
	<title>Components - Liquid Glass Terminal Fusion</title>
	<meta name="description" content="Interactive showcase of all liquid glass components with live demos and code examples." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="absolute inset-0 opacity-20">
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
				<div class="text-sm text-white/70">Components</div>
			</div>
		</div>
	</nav>
	
	<!-- Header -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
					Component Library
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					Interactive showcase of all liquid glass components with live demos, code examples, and usage guidelines.
				</p>
			</div>
			
			<!-- Category Navigation -->
			<div class="flex flex-wrap justify-center gap-4 mb-12">
				{#each Object.entries(componentCategories) as [key, category]}
					<button 
						class="px-6 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 {selectedTab === key ? 'bg-blue-500/20 border-blue-500/30' : ''}"
						class:active={selectedTab === key}
						onclick={() => selectedTab = key}
						data-magnetic
					>
						{category.title}
					</button>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- Component Showcase -->
	<section class="relative z-10 py-8 px-6">
		<div class="max-w-7xl mx-auto">
			{#each Object.entries(componentCategories) as [key, category]}
				{#if selectedTab === key}
					<div class="animate-in fade-in duration-300">
						<div class="text-center mb-12">
							<h2 class="text-3xl font-bold mb-4">{category.title}</h2>
							<p class="text-lg text-white/70 max-w-2xl mx-auto">
								{category.description}
							</p>
						</div>
						
						<div class="space-y-12">
							{#each category.components as component}
								<GlassCard intensity="light" class="p-8">
									<div class="grid lg:grid-cols-2 gap-8">
										<!-- Component Info -->
										<div class="space-y-6">
											<div>
												<h3 class="text-2xl font-bold mb-2">{component.name}</h3>
												<p class="text-white/70 leading-relaxed">
													{component.description}
												</p>
											</div>
											
											<!-- Code Example -->
											{#if codeExamples[component.name]}
												<div class="space-y-3">
													<h4 class="text-lg font-semibold">Code Example</h4>
													<CodeHighlight 
														code={codeExamples[component.name]} 
														language="svelte" 
														title={`${component.name} Usage`}
													/>
												</div>
											{/if}
										</div>
										
										<!-- Live Demo -->
										<div class="space-y-6">
											<h4 class="text-lg font-semibold">Live Demo</h4>
											<div class="p-6 bg-black/20 rounded-lg border border-white/10">
												{#if component.name === 'GlassButton'}
													<div class="space-y-4">
														<GlassButton variant="primary" size="md" magnetic ripple data-magnetic>
															Deploy to Production
														</GlassButton>
														<div class="flex gap-2">
															<GlassButton variant="secondary" size="sm">Secondary</GlassButton>
															<GlassButton variant="ghost" size="sm">Ghost</GlassButton>
															<GlassButton variant="danger" size="sm">Danger</GlassButton>
														</div>
													</div>
												{:else if component.name === 'GlassCard'}
													<GlassCard intensity="medium" class="p-4">
														<h5 class="font-semibold mb-2">Terminal Output</h5>
														<div class="font-mono text-sm text-green-400">
															$ npm run build<br>
															✓ Build completed in 1.2s
														</div>
													</GlassCard>
												{:else if component.name === 'GlassInput'}
													<GlassInput 
														placeholder="Enter command..." 
														bind:value={inputValue}
														ripple
													/>
												{:else if component.name === 'GlassModal'}
													<div class="space-y-4">
														<GlassButton variant="primary" onclick={() => showModal = true}>
															Open Modal
														</GlassButton>
														<GlassModal bind:show={showModal}>
															<h3 class="text-xl font-bold mb-4">Confirm Deployment</h3>
															<p class="text-white/80 mb-6">Are you sure you want to deploy to production?</p>
															<div class="flex gap-3">
																<GlassButton variant="primary" onclick={() => showModal = false}>
																	Deploy
																</GlassButton>
																<GlassButton variant="ghost" onclick={() => showModal = false}>
																	Cancel
																</GlassButton>
															</div>
														</GlassModal>
													</div>
												{:else if component.name === 'GlassTabs'}
													<GlassTabs bind:selected={selectedTab}>
														<tab id="code">Code</tab>
														<tab id="preview">Preview</tab>
														<tab id="docs">Docs</tab>
													</GlassTabs>
												{:else if component.name === 'TerminalWindow'}
													<TerminalWindow title="zsh">
														<div class="font-mono text-sm space-y-1">
															<div class="flex items-center space-x-2">
																<span class="text-green-400">$</span>
																<span class="text-white">npm run dev</span>
															</div>
															<div class="text-blue-400">
																> Ready in 2.3s
															</div>
															<div class="text-green-400">
																✓ Local server running
															</div>
														</div>
													</TerminalWindow>
												{:else if component.name === 'Badge'}
													<div class="flex flex-wrap gap-2">
														<Badge variant="primary">Primary</Badge>
														<Badge variant="secondary">Secondary</Badge>
														<Badge variant="success">Success</Badge>
														<Badge variant="warning">Warning</Badge>
														<Badge variant="danger">Danger</Badge>
													</div>
												{:else if component.name === 'Progress'}
													<div class="space-y-4">
														<Progress value={progressValue} max={100} />
														<Progress value={75} max={100} color="green" />
														<Progress value={30} max={100} color="red" />
													</div>
												{:else if component.name === 'Select'}
													<Select 
														bind:value={selectValue}
														options={[
															{ value: 'option1', label: 'Option 1' },
															{ value: 'option2', label: 'Option 2' },
															{ value: 'option3', label: 'Option 3' }
														]}
													/>
												{:else if component.name === 'Slider'}
													<div class="space-y-2">
														<Slider bind:value={sliderValue} min={0} max={100} />
														<div class="text-sm text-white/70">Value: {sliderValue}</div>
													</div>
												{:else if component.name === 'Switch'}
													<div class="flex items-center space-x-3">
														<Switch bind:checked={switchValue} />
														<span class="text-sm">Enable notifications</span>
													</div>
												{:else if component.name === 'GlitchText'}
													<GlitchText text="SYSTEM OVERRIDE" />
												{:else if component.name === 'MatrixRain'}
													<div class="h-32 bg-black/50 rounded-lg overflow-hidden relative">
														<MatrixRain />
													</div>
												{:else if component.name === 'Toast'}
													<div class="space-y-4">
														<GlassButton variant="primary" onclick={() => showToast = true}>
															Show Toast
														</GlassButton>
														{#if showToast}
															<Toast 
																type="success" 
																message="Code copied to clipboard!"
																onclose={() => showToast = false}
															/>
														{/if}
													</div>
												{:else}
													<div class="text-white/50 text-center py-8">
														<div class="text-4xl mb-2">🚧</div>
														<div>Demo coming soon</div>
													</div>
												{/if}
											</div>
										</div>
									</div>
								</GlassCard>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</section>
	
	<!-- WebGL Showcase -->
	{#if selectedTab === 'webgl'}
		<section class="relative z-10 py-16 px-6">
			<div class="max-w-7xl mx-auto">
				<GlassCard intensity="medium" class="p-8">
					<h3 class="text-2xl font-bold mb-6 text-center">Advanced WebGL Scene</h3>
					<div class="h-96 rounded-lg overflow-hidden bg-black/30 border border-white/10">
						{#if mounted && LazyAdvancedLiquidGlassScene.component}
							<svelte:component this={LazyAdvancedLiquidGlassScene.component} />
						{:else}
							<div class="flex items-center justify-center h-full">
								<div class="text-center">
									<div class="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
									<div class="text-white/70">Loading WebGL scene...</div>
								</div>
							</div>
						{/if}
					</div>
				</GlassCard>
			</div>
		</section>
	{/if}
	
	<!-- Footer -->
	<footer class="relative z-10 py-8 px-6 mt-16 backdrop-blur-sm bg-white/5 border-t border-white/10">
		<div class="max-w-7xl mx-auto text-center">
			<p class="text-white/70">
				Component library built with liquid glass design principles
			</p>
		</div>
	</footer>
</div>

<style>
	:global([data-magnetic]) {
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	
	:global([data-magnetic]:hover) {
		transform: translateY(-2px) scale(1.02);
	}
	
	.animate-in {
		animation: fadeIn 0.3s ease-out;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>