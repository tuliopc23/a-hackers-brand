<script lang="ts">
	import { Card, Button, GlowText } from '$lib/components';
	import { theme, themeConfig } from '$lib/stores/theme.js';
	import { springPop } from '$lib/motion';

	let currentTheme = $state($theme);
	let config = $state($themeConfig);

	theme.subscribe((value) => {
		currentTheme = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	const fontStacks = [
		{
			name: 'IBM Plex Mono',
			description: 'Modern, geometric monospace designed by IBM for code and terminal interfaces',
			weights: ['400', '500', '600', '700'],
			features: ['Ligatures', 'Powerline symbols', 'Extended character set'],
			usage: 'Ideal for code editors, terminals, and technical documentation'
		},
		{
			name: 'JetBrains Mono',
			description: 'Developer-focused monospace with enhanced readability for coding',
			weights: ['400', '500', '600', '700', '800'],
			features: ['Programming ligatures', '143 code-specific symbols', 'Optimized for IDEs'],
			usage: 'Perfect for IDEs, code review, and programming environments'
		},
		{
			name: 'SF Mono',
			description: 'Apple\'s system monospace font, refined for modern interfaces',
			weights: ['400', '500', '600', '700'],
			features: ['System integration', 'High DPI optimization', 'Consistent spacing'],
			usage: 'Excellent for macOS/iOS applications and modern terminal UIs'
		},
		{
			name: 'PP Supply Sans',
			description: 'Contemporary sans-serif for brand identity and UI elements',
			weights: ['300', '400', '500', '600', '700', '800'],
			features: ['Modern aesthetics', 'High legibility', 'Brand coherence'],
			usage: 'UI components, headings, and brand elements'
		}
	];

	const typographyScale = [
		{ name: 'Display Large', class: 'text-6xl', size: '3.75rem', lineHeight: '1' },
		{ name: 'Display Medium', class: 'text-5xl', size: '3rem', lineHeight: '1' },
		{ name: 'Display Small', class: 'text-4xl', size: '2.25rem', lineHeight: '1.111' },
		{ name: 'Heading 1', class: 'text-3xl', size: '1.875rem', lineHeight: '1.2' },
		{ name: 'Heading 2', class: 'text-2xl', size: '1.5rem', lineHeight: '1.25' },
		{ name: 'Heading 3', class: 'text-xl', size: '1.25rem', lineHeight: '1.3' },
		{ name: 'Body Large', class: 'text-lg', size: '1.125rem', lineHeight: '1.5' },
		{ name: 'Body Regular', class: 'text-base', size: '1rem', lineHeight: '1.5' },
		{ name: 'Body Small', class: 'text-sm', size: '0.875rem', lineHeight: '1.4' },
		{ name: 'Caption', class: 'text-xs', size: '0.75rem', lineHeight: '1.3' }
	];

	const glowExamples = [
		{ color: 'pink', text: 'Pink Glow Effect' },
		{ color: 'purple', text: 'Purple Glow Effect' },
		{ color: 'blue', text: 'Blue Glow Effect' },
		{ color: 'cyan', text: 'Cyan Glow Effect' },
		{ color: 'green', text: 'Green Glow Effect' },
		{ color: 'orange', text: 'Orange Glow Effect' }
	];
</script>

<svelte:head>
	<title>Typography - A Hacker's Brand Design System</title>
	<meta
		name="description"
		content="Typography system with IBM Plex Mono, JetBrains Mono, SF Mono, and glow effects for terminal and Bubble Tea themes."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
	<!-- Hero Section -->
	<div class="container mx-auto px-6 py-16">
		<div class="text-center mb-16" in:springPop={{ duration: 500 }}>
			<h1
				class="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6"
			>
				Typography System
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
				Professional monospace fonts and glow effects designed for terminal interfaces, code editors, and modern TUI applications.
			</p>
		</div>

		<!-- Current Theme Display -->
		<div class="flex justify-center mb-12">
			<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-6 text-center">
				<div class="text-sm opacity-70 mb-2">Typography Preview</div>
				<div class="text-2xl font-bold font-mono mb-2">{config.displayName} Theme</div>
				<GlowText color="pink" intensity="normal">
					Glow effects available
				</GlowText>
			</Card>
		</div>
	</div>

	<!-- Font Families -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Font Families</h2>
		
		<div class="grid md:grid-cols-2 gap-8">
			{#each fontStacks as font, index}
				<Card variant="glass" class="p-8" in:springPop={{ duration: 400, delay: index * 100 }}>
					<h3 class="text-2xl font-bold text-white mb-4" style="font-family: '{font.name}', monospace;">
						{font.name}
					</h3>
					<p class="text-gray-300 mb-6">{font.description}</p>
					
					<div class="space-y-4">
						<!-- Font Preview -->
						<div class="bg-black/30 rounded-lg p-4 border border-gray-700">
							<div class="text-lg font-mono text-green-400" style="font-family: '{font.name}', monospace;">
								The quick brown fox jumps over the lazy dog
							</div>
							<div class="text-sm text-gray-400 mt-2">
								0123456789 !@#$%^&*()_+-=[]{}|;':\",./<>?
							</div>
						</div>
						
						<!-- Features -->
						<div>
							<h4 class="text-sm font-semibold text-cyan-400 mb-2">Features</h4>
							<ul class="text-sm text-gray-300 space-y-1">
								{#each font.features as feature}
									<li class="flex items-center gap-2">
										<span class="text-green-400">•</span>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
						
						<!-- Usage -->
						<div>
							<h4 class="text-sm font-semibold text-cyan-400 mb-2">Best For</h4>
							<p class="text-sm text-gray-300">{font.usage}</p>
						</div>
						
						<!-- Available Weights -->
						<div>
							<h4 class="text-sm font-semibold text-cyan-400 mb-2">Available Weights</h4>
							<div class="flex gap-2 flex-wrap">
								{#each font.weights as weight}
									<span class="px-2 py-1 text-xs bg-gray-700 rounded text-gray-300">
										{weight}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>

	<!-- Typography Scale -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Typography Scale</h2>
		
		<Card variant="glass" class="p-8">
			<div class="space-y-6">
				{#each typographyScale as scale}
					<div class="flex items-center justify-between border-b border-gray-700 pb-4">
						<div class="flex-1">
							<div class={`${scale.class} text-white font-display`}>
								{scale.name}
							</div>
							<div class="text-sm text-gray-400 mt-1">
								{scale.size} / {scale.lineHeight}
							</div>
						</div>
						<div class="text-sm text-gray-500 font-mono">
							{scale.class}
						</div>
					</div>
				{/each}
			</div>
		</Card>
	</div>

	<!-- Glow Effects -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Glow & Neon Effects</h2>
		
		<div class="grid md:grid-cols-2 gap-8">
			<!-- Bubble Tea Glows -->
			<Card variant="bubbleTea" class="p-8">
				<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Bubble Tea Glows</h3>
				<div class="space-y-4">
					{#each glowExamples as example}
						<div class="flex items-center justify-between">
							<GlowText color={example.color} intensity="normal">
								{example.text}
							</GlowText>
							<code class="text-xs text-gray-400 font-mono">
								color="{example.color}"
							</code>
						</div>
					{/each}
				</div>
				
				<div class="mt-6 pt-6 border-t border-bubble-tea-purple/20">
					<h4 class="text-lg font-semibold text-bubble-tea-pink mb-4">Intensity Levels</h4>
					<div class="space-y-3">
						<div class="flex items-center gap-4">
							<GlowText color="purple" intensity="normal">Normal Intensity</GlowText>
							<code class="text-xs text-gray-400">intensity="normal"</code>
						</div>
						<div class="flex items-center gap-4">
							<GlowText color="purple" intensity="intense">Intense Glow</GlowText>
							<code class="text-xs text-gray-400">intensity="intense"</code>
						</div>
					</div>
				</div>
			</Card>

			<!-- Terminal Glows -->
			<Card variant="terminal" class="p-8">
				<h3 class="text-2xl font-bold text-terminal-green mb-6">Terminal Glows</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<GlowText variant="terminal" color="matrix" intensity="normal">
							Matrix Green Glow
						</GlowText>
						<code class="text-xs text-gray-400 font-mono">
							variant="terminal"
						</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText variant="terminal" color="cyan" intensity="normal">
							Cyan Terminal Glow
						</GlowText>
						<code class="text-xs text-gray-400 font-mono">
							color="cyan"
						</code>
					</div>
				</div>
				
				<div class="mt-6 pt-6 border-t border-terminal-green/20">
					<h4 class="text-lg font-semibold text-terminal-cyan mb-4">Animations</h4>
					<div class="space-y-3">
						<div class="flex items-center gap-4">
							<GlowText variant="terminal" color="matrix" pulse>Pulsing Effect</GlowText>
							<code class="text-xs text-gray-400">pulse=true</code>
						</div>
						<div class="flex items-center gap-4">
							<GlowText variant="terminal" color="matrix" animate>Hover to Scale</GlowText>
							<code class="text-xs text-gray-400">animate=true</code>
						</div>
					</div>
				</div>
			</Card>
		</div>
	</div>

	<!-- Usage Examples -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Usage Examples</h2>
		
		<div class="grid md:grid-cols-2 gap-8">
			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-white mb-4">Component Implementation</h3>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto border border-gray-700"><code class="text-green-400">
{`<script>
  import { GlowText } from 'a-hackers-brand';
</script>

<!-- Bubble Tea glow text -->
<GlowText color="pink" intensity="intense">
  Bubble Tea Title
</GlowText>

<!-- Terminal glow text -->
<GlowText variant="terminal" color="matrix">
  Matrix Terminal
</GlowText>

<!-- Animated glow -->
<GlowText color="purple" pulse animate>
  Animated Glow
</GlowText>`}</code></pre>
			</Card>

			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-white mb-4">CSS Implementation</h3>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto border border-gray-700"><code class="text-green-400">
{`/* Font families */
.mono {
  font-family: 'IBM Plex Mono', 'JetBrains Mono', 
               'SF Mono', monospace;
}

/* Glow effects */
.glow-pink {
  color: #ff85b3;
  text-shadow: 0 0 8px rgba(255, 133, 179, 0.6);
}

.glow-intense {
  text-shadow: 0 0 12px rgba(255, 133, 179, 0.8),
               0 0 24px rgba(255, 133, 179, 0.4);
}`}</code></pre>
			</Card>
		</div>
	</div>

	<!-- Best Practices -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Typography Best Practices</h2>
		
		<div class="grid md:grid-cols-2 gap-8">
			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-green-400 mb-4">✅ Recommended</h3>
				<ul class="space-y-3 text-gray-300">
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Use monospace fonts for code, terminals, and technical content
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Apply glow effects sparingly for emphasis and hierarchy
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Match glow colors to your theme (terminal vs Bubble Tea)
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Use intense glows for critical information or CTAs
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Test readability across different backgrounds
					</li>
				</ul>
			</Card>

			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-red-400 mb-4">❌ Avoid</h3>
				<ul class="space-y-3 text-gray-300">
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Overusing glow effects throughout the interface
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Mixing too many glow colors in one component
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Using glow on body text or long-form content
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Applying intense glows to large text blocks
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Ignoring accessibility for users with visual sensitivities
					</li>
				</ul>
			</Card>
		</div>
	</div>

	<!-- Live Demo -->
	<div class="container mx-auto px-6 py-16">
		<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-8">
			<h3 class="text-2xl font-bold text-center text-white mb-8">
				Live Typography Demo - {config.displayName} Theme
			</h3>
			
			<div class="grid md:grid-cols-2 gap-8">
				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Font Samples</h4>
					<div class="space-y-3 bg-black/30 rounded-lg p-4">
						<div style="font-family: 'IBM Plex Mono', monospace;" class="text-white">
							IBM Plex Mono: const theme = 'bubbleTea';
						</div>
						<div style="font-family: 'JetBrains Mono', monospace;" class="text-white">
							JetBrains Mono: function render() {}
						</div>
						<div style="font-family: 'SF Mono', monospace;" class="text-white">
							SF Mono: export default component;
						</div>
					</div>
				</div>
				
				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Glow Effects</h4>
					<div class="space-y-3">
						{#if currentTheme === 'bubbleTea'}
							<GlowText color="pink">Pink: Status Ready</GlowText>
							<GlowText color="purple">Purple: Processing...</GlowText>
							<GlowText color="green">Green: Success!</GlowText>
						{:else}
							<GlowText variant="terminal" color="matrix">Matrix: System Online</GlowText>
							<GlowText variant="terminal" color="cyan">Cyan: Data Transfer</GlowText>
						{/if}
					</div>
				</div>
			</div>
		</Card>
	</div>
</div>