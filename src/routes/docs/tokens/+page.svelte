<script>
	import { onMount } from 'svelte';
	import { GlassCard, GlassButton } from '$lib/components/liquidify';
	import { liquidGlassTokens, componentTokens, glassThemes } from '$lib/components/liquidify/tokens';
	import { magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';

	// Lazy load WebGL background
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));

	let mounted = $state(false);
	let selectedTokenCategory = $state('colors');
	let showToast = $state(false);

	// Token categories for navigation
	const tokenCategories = {
		colors: {
			title: 'Colors',
			description: 'Brand colors, terminal colors, and glass system colors',
			icon: '🎨'
		},
		typography: {
			title: 'Typography',
			description: 'Font families, sizes, weights, and line heights',
			icon: '✍️'
		},
		spacing: {
			title: 'Spacing',
			description: 'Consistent spacing scale based on 4px grid',
			icon: '📏'
		},
		shadows: {
			title: 'Shadows',
			description: 'Glass shadows and focus states',
			icon: '🌫️'
		},
		animation: {
			title: 'Animation',
			description: 'Easing functions and duration scales',
			icon: '⚡'
		},
		blur: {
			title: 'Blur',
			description: 'Backdrop blur levels for glass effects',
			icon: '🔍'
		},
		components: {
			title: 'Components',
			description: 'Component-specific tokens and variants',
			icon: '🧩'
		}
	};

	onMount(() => {
		mounted = true;

		// Apply magnetic hover effects
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach((el) => magneticHover(el));
	});

	// Copy token value to clipboard
	const copyToken = async (token, value) => {
		try {
			await navigator.clipboard.writeText(value);
			showToast = true;
			setTimeout(() => (showToast = false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	// Color contrast calculation
	const getContrastRatio = (color1, color2) => {
		// Simplified contrast ratio calculation
		return '4.5:1'; // This would be calculated properly in a real implementation
	};

	// Format CSS custom property
	const formatCSSVariable = (path, value) => {
		const varName = path.split('.').join('-');
		return `--${varName}: ${value};`;
	};
</script>

<svelte:head>
	<title>Design Tokens - Liquid Glass Terminal Fusion</title>
	<meta
		name="description"
		content="Complete design system tokens including colors, typography, spacing, and component specifications."
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
				<div class="text-sm text-white/70">Design Tokens</div>
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
					Design Tokens
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					The foundational design decisions that drive the entire liquid glass terminal fusion system.
				</p>
			</div>

			<!-- Category Navigation -->
			<div class="flex flex-wrap justify-center gap-4 mb-12">
				{#each Object.entries(tokenCategories) as [key, category]}
					<button
						class="px-6 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 {selectedTokenCategory ===
						key
							? 'bg-blue-500/20 border-blue-500/30'
							: ''}"
						onclick={() => (selectedTokenCategory = key)}
						data-magnetic
					>
						<span class="text-lg">{category.icon}</span>
						<span>{category.title}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Token Showcase -->
	<section class="relative z-10 py-8 px-6">
		<div class="max-w-7xl mx-auto">
			{#each Object.entries(tokenCategories) as [key, category]}
				{#if selectedTokenCategory === key}
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

						<!-- Colors -->
						{#if selectedTokenCategory === 'colors'}
							<div class="space-y-12">
								<!-- Primary Colors -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Primary Colors</h3>
									<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each Object.entries(liquidGlassTokens.colors.primary) as [shade, color] (shade)}
											<button
												class="group cursor-pointer text-left w-full"
												onclick={() => copyToken(`primary-${shade}`, color)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyToken(`primary-${shade}`, color)}
												aria-label={`Copy primary ${shade} color ${color}`}
												tabindex="0"
											>
												<div
													class="h-16 rounded-lg mb-3 border border-white/10 relative overflow-hidden"
													style:background-color="{color}"
												>
													<div
														class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
													>
														<span class="text-xs font-mono bg-black/50 px-2 py-1 rounded">Click to copy</span>
													</div>
												</div>
												<div class="text-sm font-mono text-white/90">primary-{shade}</div>
												<div class="text-xs text-white/60 font-mono">{color}</div>
											</button>
										{/each}
									</div>
								</GlassCard>

								<!-- Terminal Colors -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Terminal Colors</h3>
									<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">											{#each Object.entries(liquidGlassTokens.colors.terminal) as [name, color] (color)}
											<button
												class="group cursor-pointer text-left w-full"
												onclick={() => copyToken(`terminal-${name}`, color)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyToken(`terminal-${name}`, color)}
												aria-label={`Copy terminal ${name} color ${color}`}
												tabindex="0"
											>
												<div
													class="h-16 rounded-lg mb-3 border border-white/10 relative overflow-hidden"
													style:background-color="{color}"
												>
													<div
														class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
													>
														<span class="text-xs font-mono bg-black/50 px-2 py-1 rounded">Click to copy</span>
													</div>
												</div>
												<div class="text-sm font-mono text-white/90">terminal-{name}</div>
												<div class="text-xs text-white/60 font-mono">{color}</div>
											</button>
										{/each}
									</div>
								</GlassCard>

								<!-- Glass Colors -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Glass Colors</h3>
									<div class="space-y-6">
          {#each Object.entries(liquidGlassTokens.colors.glass) as [type, shades] (shades)}
											<div>
												<h4 class="text-lg font-semibold mb-4 capitalize">Glass {type}</h4>
												<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {#each Object.entries(shades) as [level, color] (color)}
														<button
															class="group cursor-pointer text-left w-full"
               onclick={() => copyToken(`glass-${type}-${level}`, color)}
                onkeydown={(e) =>
                                  (e.key === 'Enter' || e.key === ' ') && copyToken(`glass-${type}-${level}`, color)}
															aria-label={`Copy glass ${type} ${level} color ${color}`}
															tabindex="0"
														>
															<div
																class="h-12 rounded-lg mb-2 border border-white/10 relative overflow-hidden backdrop-blur-sm"
																style:background-color="{color}"
															>
																<div
																	class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
																>
																	<span class="text-xs font-mono bg-black/50 px-1 py-0.5 rounded">Copy</span>
																</div>
															</div>
															<div class="text-xs font-mono text-white/90">{level}</div>
															<div class="text-xs text-white/60 font-mono">{color}</div>
														</button>
													{/each}
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedTokenCategory === 'typography'}
							<div class="space-y-12">
								<!-- Font Families -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Font Families</h3>
									<div class="space-y-6">
          {#each Object.entries(liquidGlassTokens.typography.fontFamily) as [name, family] (family)}
											<button
												class="group cursor-pointer border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors text-left w-full"
            onclick={() => copyToken(`font-${name}`, family.join(', '))}
            onkeydown={(e) =>
													(e.key === 'Enter' || e.key === ' ') && copyToken(`font-${name}`, family.join(', '))}
												aria-label={`Copy font ${name}: ${family.join(', ')}`}
												tabindex="0"
											>
												<div class="flex items-center justify-between mb-4">
													<h4 class="text-lg font-semibold capitalize">{name}</h4>
													<span class="text-xs text-white/60">Click to copy</span>
												</div>
												<div class="text-2xl mb-2" style:font-family="{family.join(', ')}">
													The quick brown fox jumps over the lazy dog
												</div>
												<div class="text-xs text-white/60 font-mono">{family.join(', ')}</div>
											</button>
										{/each}
									</div>
								</GlassCard>

								<!-- Font Sizes -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Font Sizes</h3>
									<div class="space-y-4">
										{#each Object.entries(liquidGlassTokens.typography.fontSize) as [size, [fontSize, properties]]}
											<button
												class="group cursor-pointer border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors text-left w-full"
												onclick={() => copyToken(`text-${size}`, fontSize)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyToken(`text-${size}`, fontSize)}
												aria-label={`Copy font size ${size}: ${fontSize}`}
												tabindex="0"
											>
												<div class="flex items-center justify-between">
													<div class="flex items-center space-x-6">
														<div class="text-sm font-mono text-white/70 w-12">{size}</div>
														<div style:font-size="{fontSize}" style:line-height="{properties.lineHeight}">Sample Text</div>
													</div>
													<div class="text-xs text-white/60 font-mono">{fontSize}</div>
												</div>
											</button>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedTokenCategory === 'spacing'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Spacing Scale</h3>
									<div class="space-y-4">
          {#each Object.entries(liquidGlassTokens.spacing) as [scale, value] (value)}
											<button
												class="group cursor-pointer border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors text-left w-full"
            onclick={() => copyToken(`spacing-${scale}`, value)}
            onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyToken(`spacing-${scale}`, value)}
												aria-label={`Copy spacing ${scale}: ${value}`}
												tabindex="0"
											>
												<div class="flex items-center justify-between">
													<div class="flex items-center space-x-6">
														<div class="text-sm font-mono text-white/70 w-8">{scale}</div>
														<div class="bg-blue-500/30 rounded" style:width="{value}" style:height="16px"></div>
														<div class="text-sm text-white/90">{value}</div>
													</div>
													<div class="text-xs text-white/60">Click to copy</div>
												</div>
											</button>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedTokenCategory === 'shadows'}
							<div class="space-y-12">
								<!-- Glass Shadows -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Glass Shadows</h3>
									<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each Object.entries(liquidGlassTokens.shadows.glass) as [level, shadow] (shadow)}
											<button
												class="group cursor-pointer text-left w-full"
            onclick={() => copyToken(`shadow-glass-${level}`, shadow)}
            onkeydown={(e) =>
													(e.key === 'Enter' || e.key === ' ') && copyToken(`shadow-glass-${level}`, shadow)}
												aria-label={`Copy glass shadow ${level}`}
												tabindex="0"
											>
												<div
													class="h-24 bg-white/10 rounded-lg mb-3 backdrop-blur-sm border border-white/10 relative"
													style:box-shadow="{shadow}"
												>
													<div
														class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
													>
														<span class="text-xs font-mono bg-black/50 px-2 py-1 rounded">Click to copy</span>
													</div>
												</div>
												<div class="text-sm font-mono text-white/90">glass-{level}</div>
												<div class="text-xs text-white/60 font-mono truncate">{shadow}</div>
											</button>
										{/each}
									</div>
								</GlassCard>

								<!-- Focus Shadows -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Focus Shadows</h3>
									<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each Object.entries(liquidGlassTokens.shadows.focus) as [level, shadow] (shadow)}
											<button
												class="group cursor-pointer text-left w-full"
            onclick={() => copyToken(`shadow-focus-${level}`, shadow)}
            onkeydown={(e) =>
													(e.key === 'Enter' || e.key === ' ') && copyToken(`shadow-focus-${level}`, shadow)}
												aria-label={`Copy focus shadow ${level}`}
												tabindex="0"
											>
												<div
													class="h-16 bg-white/10 rounded-lg mb-3 backdrop-blur-sm border border-white/10 relative"
													style:box-shadow="{shadow}"
												>
													<div
														class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
													>
														<span class="text-xs font-mono bg-black/50 px-2 py-1 rounded">Click to copy</span>
													</div>
												</div>
												<div class="text-sm font-mono text-white/90">focus-{level}</div>
												<div class="text-xs text-white/60 font-mono truncate">{shadow}</div>
											</button>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedTokenCategory === 'animation'}
							<div class="space-y-12">
								<!-- Duration -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Animation Duration</h3>
									<div class="space-y-4">
          {#each Object.entries(liquidGlassTokens.animation.duration) as [name, duration] (duration)}
											<button
												class="group cursor-pointer border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors text-left w-full"
            onclick={() => copyToken(`duration-${name}`, duration)}
												onkeydown={(e) =>
													(e.key === 'Enter' || e.key === ' ') && copyToken(`duration-${name}`, duration)}
												aria-label={`Copy animation duration ${name}: ${duration}`}
												tabindex="0"
											>
												<div class="flex items-center justify-between">
													<div class="flex items-center space-x-6">
														<div class="text-sm font-mono text-white/70 w-16">{name}</div>
														<div class="w-32 h-4 bg-white/10 rounded overflow-hidden">
															<div
																class="h-full bg-blue-500 rounded animate-pulse"
																style:animation-duration="{duration}"
															></div>
														</div>
														<div class="text-sm text-white/90">{duration}</div>
													</div>
													<div class="text-xs text-white/60">Click to copy</div>
												</div>
											</button>
										{/each}
									</div>
								</GlassCard>

								<!-- Easing -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Easing Functions</h3>
									<div class="space-y-4">
          {#each Object.entries(liquidGlassTokens.animation.easing) as [name, easing] (easing)}
											<button
												class="group cursor-pointer border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors text-left w-full"
            onclick={() => copyToken(`ease-${name}`, easing)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyToken(`ease-${name}`, easing)}
												aria-label={`Copy easing function ${name}: ${easing}`}
												tabindex="0"
											>
												<div class="flex items-center justify-between">
													<div class="flex items-center space-x-6">
														<div class="text-sm font-mono text-white/70 w-16">{name}</div>
														<div class="text-sm text-white/90 font-mono">{easing}</div>
													</div>
													<div class="text-xs text-white/60">Click to copy</div>
												</div>
											</button>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedTokenCategory === 'blur'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Blur Levels</h3>
									<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each Object.entries(liquidGlassTokens.blur) as [level, blur] (blur)}
											<button
												class="group cursor-pointer text-left w-full"
            onclick={() => copyToken(`blur-${level}`, blur)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && copyToken(`blur-${level}`, blur)}
												aria-label={`Copy blur level ${level}: ${blur}`}
												tabindex="0"
											>
												<div
													class="h-24 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg mb-3 relative overflow-hidden"
												>
													<div
														class="absolute inset-0 backdrop-blur-sm border border-white/10 rounded-lg"
														style:backdrop-filter="blur({blur})"
													>
														<div
															class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
														>
															<span class="text-xs font-mono bg-black/50 px-2 py-1 rounded">Click to copy</span>
														</div>
													</div>
												</div>
												<div class="text-sm font-mono text-white/90">{level}</div>
												<div class="text-xs text-white/60 font-mono">{blur}</div>
											</button>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedTokenCategory === 'components'}
							<div class="space-y-12">
        {#each Object.entries(componentTokens) as [componentName, tokens] (tokens)}
									<GlassCard intensity="light" class="p-8">
										<h3 class="text-2xl font-bold mb-6 capitalize">{componentName} Tokens</h3>
										<div class="space-y-6">
           {#each Object.entries(tokens) as [property, values] (values)}
												<div>
													<h4 class="text-lg font-semibold mb-4 capitalize">{property}</h4>
													<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {#each Object.entries(values) as [size, value] (value)}
															<button
																class="group cursor-pointer border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors text-left w-full"
                onclick={() => copyToken(`${componentName}-${property}-${size}`, value)}
																onkeydown={(e) =>
																	(e.key === 'Enter' || e.key === ' ') &&
																	copyToken(`${componentName}-${property}-${size}`, value)}
																aria-label={`Copy ${componentName} ${property} ${size}: ${value}`}
																tabindex="0"
															>
																<div class="flex items-center justify-between">
																	<div class="text-sm font-mono text-white/70">{size}</div>
																	<div class="text-sm text-white/90">{value}</div>
																</div>
															</button>
														{/each}
													</div>
												</div>
											{/each}
										</div>
									</GlassCard>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Toast Notification -->
	{#if showToast}
		<div
			class="fixed top-6 right-6 z-50 backdrop-blur-sm bg-green-500/20 border border-green-500/30 rounded-lg p-4 animate-in fade-in duration-200"
		>
			<div class="flex items-center space-x-2">
				<div class="w-4 h-4 bg-green-500 rounded-full"></div>
				<span class="text-sm font-medium">Token copied to clipboard!</span>
			</div>
		</div>
	{/if}

	<!-- Footer -->
	<footer class="relative z-10 py-8 px-6 mt-16 backdrop-blur-sm bg-white/5 border-t border-white/10">
		<div class="max-w-7xl mx-auto text-center">
			<p class="text-white/70">Design tokens that define the liquid glass terminal fusion aesthetic</p>
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
