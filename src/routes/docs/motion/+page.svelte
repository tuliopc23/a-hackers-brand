<script>
	import { onMount } from 'svelte';
	import { GlassCard, GlassButton } from '$lib/components/liquidify';
	import {
		liquidBlur,
		glassFade,
		springPop,
		magneticHover,
		jelly,
		liquidJelly,
		presets,
		DURATIONS,
		EASINGS
	} from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	// Lazy load WebGL background
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));

	let mounted = $state(false);
	let selectedMotion = $state('presets');
	let demoTrigger = $state(0);
	let playingDemo = $state(null);

	// Motion categories
	const motionCategories = {
		presets: {
			title: 'Motion Presets',
			description: 'Pre-configured motion patterns for common use cases',
			icon: '⚡'
		},
		transitions: {
			title: 'Transitions',
			description: 'Core transition effects: liquid blur, glass fade, spring pop',
			icon: '🌊'
		},
		interactions: {
			title: 'Interactions',
			description: 'User interaction animations: magnetic hover, jelly motion',
			icon: '🎯'
		},
		easing: {
			title: 'Easing Functions',
			description: 'Animation timing functions and duration scales',
			icon: '📈'
		},
		responsive: {
			title: 'Responsive Motion',
			description: 'Motion that adapts to user preferences and device capabilities',
			icon: '📱'
		}
	};

	// Motion presets with examples
	const motionPresets = [
		{
			name: 'fastLiquid',
			title: 'Fast Liquid',
			description: 'Quick liquid blur effect for micro-interactions',
			duration: '150ms',
			useCase: 'Button hover states, small UI elements',
			demo: 'liquidBlur(node, { duration: 150 })'
		},
		{
			name: 'cardHover',
			title: 'Card Hover',
			description: 'Liquid glass effect for card components',
			duration: '300ms',
			useCase: 'Cards, panels, elevated surfaces',
			demo: 'liquidBlur(node, { duration: 300, blur: "lg", scale: 1.02 })'
		},
		{
			name: 'buttonPress',
			title: 'Button Press',
			description: 'Spring-based press animation',
			duration: '150ms',
			useCase: 'Click feedback on buttons and interactive elements',
			demo: 'springPop(node, { duration: 150, scale: 0.98 })'
		},
		{
			name: 'jellyHover',
			title: 'Jelly Hover',
			description: 'Elastic jelly-like hover effect',
			duration: '250ms',
			useCase: 'Playful interactions, creative elements',
			demo: 'jelly(node, { scale: 1.05, borderRadius: "16px" })'
		},
		{
			name: 'liquidButton',
			title: 'Liquid Button',
			description: 'Advanced liquid morphing for primary CTAs',
			duration: '400ms',
			useCase: 'Primary buttons, hero CTAs, important actions',
			demo: 'liquidJelly(node, { liquidIntensity: 1.2, morphStrength: 0.4 })'
		},
		{
			name: 'terminalWindow',
			title: 'Terminal Window',
			description: 'Subtle liquid effect for terminal interfaces',
			duration: '500ms',
			useCase: 'Terminal windows, code blocks, technical content',
			demo: 'liquidJelly(node, { liquidIntensity: 0.8, flowDirection: "up" })'
		}
	];

	// Easing functions with visual curves
	const easingFunctions = [
		{
			name: 'glass',
			value: 'cubic-bezier(0.4, 0, 0.2, 1)',
			description: 'Smooth glass-like transitions',
			usage: 'Standard UI transitions, glass effects'
		},
		{
			name: 'liquid',
			value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			description: 'Fluid liquid motion curves',
			usage: 'Liquid animations, flowing effects'
		},
		{
			name: 'elastic',
			value: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			description: 'Bouncy elastic motion',
			usage: 'Playful interactions, spring effects'
		},
		{
			name: 'magnetic',
			value: 'cubic-bezier(0.2, 0, 0, 1.2)',
			description: 'Magnetic attraction curves',
			usage: 'Hover effects, magnetic interactions'
		},
		{
			name: 'terminal',
			value: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
			description: 'Sharp terminal-inspired timing',
			usage: 'Command line interfaces, technical content'
		}
	];

	// Duration scale
	const durationScale = [
		{
			name: 'instant',
			value: '50ms',
			description: 'Immediate feedback',
			usage: 'Micro-feedback, state changes'
		},
		{
			name: 'fast',
			value: '150ms',
			description: 'Quick interactions',
			usage: 'Hover states, clicks, toggles'
		},
		{
			name: 'moderate',
			value: '250ms',
			description: 'Standard transitions',
			usage: 'Most UI transitions, cards, panels'
		},
		{
			name: 'smooth',
			value: '350ms',
			description: 'Smooth flowing motion',
			usage: 'Complex animations, liquid effects'
		},
		{
			name: 'slow',
			value: '500ms',
			description: 'Deliberate motion',
			usage: 'Page transitions, complex state changes'
		}
	];

	onMount(() => {
		mounted = true;

		// Apply magnetic hover to demo buttons
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach((el) => magneticHover(el));
	});

	// Trigger demo animation
	const triggerDemo = (presetName) => {
		playingDemo = presetName;
		demoTrigger = demoTrigger + 1;

		// Reset after animation
		setTimeout(() => {
			playingDemo = null;
		}, 1000);
	};

	// Copy code to clipboard
	const copyCode = async (code) => {
		try {
			await navigator.clipboard.writeText(code);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

<svelte:head>
	<title>Motion System - Liquid Glass Terminal Fusion</title>
	<meta
		name="description"
		content="Comprehensive motion and animation system with interactive demos, easing functions, and responsive motion patterns."
	/>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
>
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="absolute inset-0 opacity-15">
			<LazyLiquidBackground.component />
		</div>
	{/if}

	<!-- Navigation -->
	<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-xl font-bold text-white">A Hacker's Brand</h1>
				</div>
				<div class="text-sm text-white/70">Motion System</div>
			</div>
		</div>
	</nav>

	<!-- Header -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1
					class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
				>
					Motion System
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					Fluid, responsive animations that bring the liquid glass terminal fusion aesthetic to life.
				</p>
			</div>

			<!-- Category Navigation -->
			<div class="flex flex-wrap justify-center gap-4 mb-12">
				{#each Object.entries(motionCategories) as [key, category]}
					<button
						class="px-6 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 {selectedMotion ===
						key
							? 'bg-blue-500/20 border-blue-500/30'
							: ''}"
						on:click={() => (selectedMotion = key)}
						data-magnetic
					>
						<span class="text-lg">{category.icon}</span>
						<span>{category.title}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Motion Content -->
	<section class="relative z-10 py-8 px-6">
		<div class="max-w-7xl mx-auto">
			{#each Object.entries(motionCategories) as [key, category]}
				{#if selectedMotion === key}
					<div class="animate-in fade-in duration-300">
						<div class="text-center mb-12">
							<h2 class="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
								<span class="text-2xl">{category.icon}</span>
								<span>{category.title}</span>
							</h2>
							<p class="text-lg text-white/70 max-w-2xl mx-auto">
								{category.description}
							</p>
						</div>

						<!-- Motion Presets -->
						{#if selectedMotion === 'presets'}
							<div class="space-y-8">
								{#each motionPresets as preset (preset.id || preset)}
									<GlassCard intensity="light" class="p-8">
										<div class="grid md:grid-cols-3 gap-8 items-center">
											<div>
												<h3 class="text-xl font-bold mb-2">{preset.title}</h3>
												<p class="text-white/80 mb-4">{preset.description}</p>
												<div class="space-y-2 text-sm">
													<div class="flex justify-between">
														<span class="text-white/70">Duration:</span>
														<span class="font-mono text-terminal-cyan">{preset.duration}</span>
													</div>
													<div class="text-white/60">{preset.useCase}</div>
												</div>
											</div>

											<div class="text-center">
												<div class="relative">
													<!-- Demo Element -->
													<div
														class="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg border border-white/20 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
														class:animate-pulse={playingDemo === preset.name}
														onclick={() => triggerDemo(preset.name)}
														use:presets[preset.name]
													>
														<span class="text-2xl">⚡</span>
													</div>
													<button
														class="mt-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
														onclick={() => triggerDemo(preset.name)}
													>
														Play Demo
													</button>
												</div>
											</div>

											<div>
												<h4 class="text-sm font-semibold text-terminal-green mb-2">Implementation</h4>
												<div class="bg-black/20 rounded-lg p-4 font-mono text-xs text-white/80 overflow-x-auto">
													<pre>{preset.demo}</pre>
												</div>
												<button
													class="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
													on:click={() => copyCode(preset.demo)}
												>
													Copy Code
												</button>
											</div>
										</div>
									</GlassCard>
								{/each}
							</div>
						{:else if selectedMotion === 'transitions'}
							<div class="space-y-12">
								<!-- Liquid Blur -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Liquid Blur Transitions</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<p class="text-white/80 mb-6">
												Smooth liquid-inspired blur effects that create depth and fluidity.
											</p>
											<div class="space-y-4">
												<div class="flex items-center justify-center space-x-4">
													<div
														class="w-20 h-20 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-lg cursor-pointer"
														use:liquidBlur={{ duration: 300, blur: 'sm' }}
													></div>
													<div
														class="w-20 h-20 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-lg cursor-pointer"
														use:liquidBlur={{ duration: 300, blur: 'lg' }}
													></div>
													<div
														class="w-20 h-20 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-lg cursor-pointer"
														use:liquidBlur={{ duration: 300, blur: 'xl' }}
													></div>
												</div>
												<div class="text-center text-sm text-white/60">Hover to see different blur intensities</div>
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Usage Examples</h4>
											<CodeBlock
												code={`// Basic liquid blur
use:liquidBlur

// Custom configuration
use:liquidBlur={{ 
  duration: 300, 
  blur: 'lg', 
  scale: 1.02 
}}

// With easing
use:liquidBlur={{ 
  easing: 'liquid',
  opacity: 'medium'
}}`}
												language="javascript"
											/>
										</div>
									</div>
								</GlassCard>

								<!-- Glass Fade -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Glass Fade Transitions</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<p class="text-white/80 mb-6">Elegant entrance and exit animations with directional movement.</p>
											<div class="grid grid-cols-2 gap-4">
												{#each ['up', 'down', 'left', 'right'] as direction}
													<div
														class="h-16 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer border border-white/20"
														use:glassFade={{ direction, duration: 400 }}
													>
														<span class="text-sm">Fade {direction}</span>
													</div>
												{/each}
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Directional Options</h4>
											<CodeBlock
												code={`// Directional fades
use:glassFade={{ direction: 'up' }}
use:glassFade={{ direction: 'down' }}
use:glassFade={{ direction: 'left' }}
use:glassFade={{ direction: 'right' }}

// Custom distance and opacity
use:glassFade={{ 
  direction: 'up',
  distance: 20,
  opacity: 'light'
}}`}
												language="javascript"
											/>
										</div>
									</div>
								</GlassCard>

								<!-- Spring Pop -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Spring Pop Transitions</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<p class="text-white/80 mb-6">Elastic spring-based animations for interactive feedback.</p>
											<div class="flex items-center justify-center space-x-4">
												<button
													class="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg"
													use:springPop={{ scale: 0.95, bounce: true }}
												>
													Bouncy Press
												</button>
												<button
													class="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg"
													use:springPop={{ scale: 1.1, duration: 200 }}
												>
													Scale Up
												</button>
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Spring Configurations</h4>
											<CodeBlock
												code={`// Button press effect
use:springPop={{ scale: 0.95, bounce: false }}

// Scale up with bounce
use:springPop={{ 
  scale: 1.1, 
  bounce: true,
  duration: 200
}}

// Custom spring curve
use:springPop={{ 
  easing: 'elastic',
  scale: 0.98
}}`}
												language="javascript"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedMotion === 'interactions'}
							<div class="space-y-12">
								<!-- Magnetic Hover -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Magnetic Hover</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<p class="text-white/80 mb-6">
												Elements subtly follow cursor movement creating magnetic attraction.
											</p>
											<div class="grid grid-cols-3 gap-4">
												{#each Array(6) as _, i (i)}
													<div
														class="h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg cursor-pointer border border-white/10 flex items-center justify-center"
														data-magnetic
													>
														<span class="text-sm">{i + 1}</span>
													</div>
												{/each}
											</div>
											<div class="text-center text-sm text-white/60 mt-4">
												Hover over elements to see magnetic effect
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Implementation</h4>
											<CodeBlock
												code={`// Simple magnetic hover
data-magnetic

// Programmatic usage
use:magneticHover

// Custom configuration
use:magneticHover={{ 
  strength: 0.5,
  damping: 0.8,
  triggerDistance: 50
}}`}
												language="javascript"
											/>
										</div>
									</div>
								</GlassCard>

								<!-- Jelly Motion -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Jelly Motion</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<p class="text-white/80 mb-6">Elastic jelly-like deformations for playful interactions.</p>
											<div class="space-y-4">
												<div class="flex justify-center space-x-4">
													<div
														class="w-24 h-24 bg-gradient-to-br from-pink-500/30 to-red-500/30 rounded-2xl cursor-pointer flex items-center justify-center"
														use:jelly={{ scale: 1.1, borderRadius: '24px' }}
													>
														<span>🍮</span>
													</div>
													<div
														class="w-24 h-24 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl cursor-pointer flex items-center justify-center"
														use:liquidJelly={{ liquidIntensity: 1.5, morphStrength: 0.6 }}
													>
														<span>🌊</span>
													</div>
												</div>
												<div class="text-center text-sm text-white/60">Hover for jelly effects</div>
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Jelly Variants</h4>
											<CodeBlock
												code={`// Basic jelly
use:jelly={{ scale: 1.1 }}

// Liquid jelly with morphing
use:liquidJelly={{ 
  liquidIntensity: 1.2,
  morphStrength: 0.4,
  flowDirection: 'center'
}}

// Responsive jelly
use:jellyHover={{
  scale: 1.05,
  borderRadius: '16px',
  responsiveness: 'high'
}}`}
												language="javascript"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedMotion === 'easing'}
							<div class="space-y-12">
								<!-- Easing Functions -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Easing Functions</h3>
									<div class="grid gap-6">
										{#each easingFunctions as easing (easing.id || easing)}
											<div class="border border-white/10 rounded-lg p-6">
												<div class="grid md:grid-cols-3 gap-6 items-center">
													<div>
														<h4 class="text-lg font-semibold mb-2 capitalize">{easing.name}</h4>
														<p class="text-white/80 text-sm mb-2">{easing.description}</p>
														<p class="text-white/60 text-xs">{easing.usage}</p>
													</div>
													<div>
														<!-- Visual curve representation -->
														<div class="h-16 bg-black/20 rounded-lg relative overflow-hidden">
															<div
																class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded"
																style="animation: curve-{easing.name} 2s {easing.value} infinite;"
															></div>
														</div>
														<div class="text-center text-xs text-white/60 mt-2">Animation Preview</div>
													</div>
													<div>
														<div class="bg-black/20 rounded-lg p-3 font-mono text-xs">
															<div class="text-white/60 mb-1">CSS:</div>
															<div class="text-terminal-cyan">{easing.value}</div>
														</div>
														<button
															class="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
               on:click={() => copyCode(easing.value)}
														>
															Copy Value
														</button>
													</div>
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>

								<!-- Duration Scale -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Duration Scale</h3>
									<div class="space-y-4">
										{#each durationScale as duration (duration.id || duration)}
											<div class="border border-white/10 rounded-lg p-4">
												<div class="grid md:grid-cols-4 gap-4 items-center">
													<div>
														<h4 class="font-semibold capitalize">{duration.name}</h4>
														<p class="text-white/60 text-sm">{duration.description}</p>
													</div>
													<div class="font-mono text-terminal-cyan text-center">{duration.value}</div>
													<div class="text-white/70 text-sm">{duration.usage}</div>
													<div class="text-center">
														<div
															class="w-8 h-8 bg-blue-500 rounded-full mx-auto cursor-pointer"
															style="animation: pulse-{duration.name} {duration.value} ease-in-out infinite;"
               on:click={() => {}}
														></div>
													</div>
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedMotion === 'responsive'}
							<div class="space-y-12">
								<!-- Reduced Motion -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Reduced Motion Support</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<p class="text-white/80 mb-6">
												Automatically respects user's motion preferences for accessibility.
											</p>
											<div class="space-y-4">
												<div class="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
													<h4 class="font-semibold text-green-400 mb-2">✓ Automatic Detection</h4>
													<p class="text-white/80 text-sm">
														All motion components automatically detect and respect <code
															class="bg-black/20 px-2 py-1 rounded">prefers-reduced-motion</code
														>
													</p>
												</div>
												<div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
													<h4 class="font-semibold text-blue-400 mb-2">⚡ Graceful Degradation</h4>
													<p class="text-white/80 text-sm">
														Animations fade to instant or minimal transitions when reduced motion is preferred
													</p>
												</div>
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Implementation</h4>
											<CodeBlock
												code={`/* CSS Implementation */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* JavaScript Detection */
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Motion components automatically handle this`}
												language="css"
											/>
										</div>
									</div>
								</GlassCard>

								<!-- Performance Optimization -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Performance Optimization</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="font-semibold mb-4">Smart Defaults</h4>
											<ul class="space-y-2 text-white/80">
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Hardware acceleration when beneficial</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Automatic cleanup on unmount</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Optimized for 60fps on modern devices</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Progressive enhancement approach</span>
												</li>
											</ul>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Best Practices</h4>
											<CodeBlock
												code={`// Prefer transform over position changes
transform: translateX(10px) scale(1.1);

// Use will-change sparingly
will-change: transform, opacity;

// Clean up after animations
onAnimationEnd: () => {
  element.style.willChange = 'auto';
}`}
												language="css"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Footer -->
	<footer class="relative z-10 py-8 px-6 mt-16 backdrop-blur-sm bg-white/5 border-t border-white/10">
		<div class="max-w-7xl mx-auto text-center">
			<p class="text-white/70">Motion that enhances the liquid glass terminal fusion experience</p>
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

	/* Easing curve animations */
	@keyframes curve-glass {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(100%);
		}
	}

	@keyframes curve-liquid {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(100%);
		}
	}

	@keyframes curve-elastic {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(100%);
		}
	}

	@keyframes curve-magnetic {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(100%);
		}
	}

	@keyframes curve-terminal {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(100%);
		}
	}

	/* Duration pulse animations */
	@keyframes pulse-instant {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}

	@keyframes pulse-fast {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}

	@keyframes pulse-moderate {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}

	@keyframes pulse-smooth {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}

	@keyframes pulse-slow {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.8;
		}
	}
</style>
