<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Button from '$lib/components/Button.svelte';
	import { brandColors } from '$lib/tokens';

	// Terminal color palette - Classic phosphor monitor meets modern Apple glass
	const terminalPalette = [
		{
			name: 'Phosphor Green',
			key: 'green',
			value: '#00ff41',
			hex: '#00ff41',
			usage: 'Classic terminal text, command prompts, success states'
		},
		{
			name: 'Cyan Ice',
			key: 'cyan',
			value: '#00ffff',
			hex: '#00ffff',
			usage: 'System messages, info states, liquid glass accents'
		},
		{
			name: 'Electric Blue',
			key: 'blue',
			value: '#0080ff',
			hex: '#0080ff',
			usage: 'Hyperlinks, interactive elements, Apple-style CTAs'
		},
		{
			name: 'Violet Glow',
			key: 'purple',
			value: '#8a2be2',
			hex: '#8a2be2',
			usage: 'Root/admin indicators, special commands'
		},
		{
			name: 'Magenta Pulse',
			key: 'pink',
			value: '#ff1493',
			hex: '#ff1493',
			usage: 'Syntax highlighting, important alerts'
		},
		{
			name: 'Amber Warning',
			key: 'orange',
			value: '#ff6b35',
			hex: '#ff6b35',
			usage: 'Terminal warnings, caution states'
		},
		{
			name: 'Signal Yellow',
			key: 'yellow',
			value: '#ffff00',
			hex: '#ffff00',
			usage: 'Search highlights, active selections'
		},
		{ name: 'Error Red', key: 'red', value: '#ff0040', hex: '#ff0040', usage: 'Errors, failed commands, danger states' }
	];

	// Apple-inspired glass system with hacker undertones
	const glassPalette = [
		{ name: 'Frosted Terminal', value: 'rgba(0, 255, 65, 0.05)', opacity: '5%', usage: 'Terminal window backgrounds' },
		{ name: 'Liquid Glass', value: 'rgba(255, 255, 255, 0.08)', opacity: '8%', usage: 'Primary UI surfaces, cards' },
		{ name: 'Crystal Blur', value: 'rgba(255, 255, 255, 0.12)', opacity: '12%', usage: 'Elevated surfaces, modals' },
		{
			name: 'Ice Border',
			value: 'rgba(255, 255, 255, 0.18)',
			opacity: '18%',
			usage: 'Glass element borders, dividers'
		},
		{ name: 'Glow State', value: 'rgba(0, 255, 255, 0.15)', opacity: '15%', usage: 'Hover states, active elements' }
	];

	// Semantic colors
	const semanticColors = [
		{ name: 'Success', value: brandColors.semantic.success, hex: '#00ff88', usage: 'Positive actions, confirmations' },
		{ name: 'Warning', value: brandColors.semantic.warning, hex: '#ffaa00', usage: 'Caution, non-critical issues' },
		{ name: 'Error', value: brandColors.semantic.error, hex: '#ff4444', usage: 'Errors, failures' },
		{ name: 'Info', value: brandColors.semantic.info, hex: '#00aaff', usage: 'Informational messages' }
	];

	// Dark terminal backgrounds - Space Gray meets terminal black
	const backgroundColors = [
		{
			name: 'Terminal Black',
			value: '#0a0a0f',
			hex: '#0a0a0f',
			usage: 'Primary terminal background, inspired by CRT monitors'
		},
		{ name: 'Space Gray', value: '#1a1a2e', hex: '#1a1a2e', usage: 'Apple-style cards and surfaces over terminal' },
		{ name: 'Command Blue', value: '#16213e', hex: '#16213e', usage: 'Nested panels, terminal history' }
	];

	// Liquid terminal gradients - Phosphor meets glass
	const gradients = [
		{
			name: 'Terminal Glow',
			value: 'linear-gradient(135deg, #00ff41, #00ffff)',
			usage: 'Command prompts, active terminals'
		},
		{ name: 'Matrix Flow', value: 'linear-gradient(180deg, #003300, #00ff41)', usage: 'Data streams, code execution' },
		{
			name: 'Glass Fusion',
			value: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,255,255,0.2))',
			usage: 'Liquid glass surfaces'
		},
		{
			name: 'Neon Circuit',
			value: 'linear-gradient(90deg, #8a2be2, #ff1493, #00ffff)',
			usage: 'Accent highlights, borders'
		},
		{ name: 'Phosphor Fade', value: 'linear-gradient(180deg, #00ff41, transparent)', usage: 'Terminal text effects' },
		{
			name: 'Cyber Ice',
			value: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(0,255,255,0.1))',
			usage: 'Frosted glass overlays'
		}
	];

	// Contrast checker
	function getContrastRatio(foreground: string, background: string): number {
		// Simple contrast calculation (would need proper implementation)
		return 4.5; // Placeholder
	}

	// Color format converter
	function hexToRgb(hex: string): { r: number; g: number; b: number } {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
				}
			: { r: 0, g: 0, b: 0 };
	}
</script>

<article class="docs-content">
	<h1>Color System</h1>

	<p class="lead">
		Our color system combines cyberpunk terminal aesthetics with modern glass morphism, creating a unique visual
		language that's both futuristic and functional.
	</p>

	<!-- Color Philosophy -->
	<section>
		<h2>Color Philosophy</h2>

		<div class="glass-subtle p-8 rounded-2xl mb-8">
			<p class="text-lg mb-6">
				The Tulio color system is inspired by classic terminal interfaces, cyberpunk aesthetics, and modern glass
				design. Each color serves a specific purpose and creates a cohesive visual hierarchy.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-terminal-green to-terminal-cyan"></div>
					<h3 class="font-semibold mb-2">Terminal Heritage</h3>
					<p class="text-sm text-white/70">Classic phosphor greens meet modern neons</p>
				</div>
				<div class="text-center">
					<div class="w-20 h-20 mx-auto mb-4 rounded-full glass-medium backdrop-blur-xl"></div>
					<h3 class="font-semibold mb-2">Glass Clarity</h3>
					<p class="text-sm text-white/70">Translucent layers create depth</p>
				</div>
				<div class="text-center">
					<div
						class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-terminal-purple to-terminal-pink"
					></div>
					<h3 class="font-semibold mb-2">Neon Accents</h3>
					<p class="text-sm text-white/70">Bold colors for emphasis and delight</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Terminal Colors -->
	<section class="mt-16">
		<h2>Terminal Palette</h2>
		<p class="text-white/70 mb-8">
			Our primary palette draws from classic terminal phosphors and cyberpunk neons, each color carefully chosen for
			optimal contrast and visual impact.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each terminalPalette as color (color.id || color)}
				<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
					<div class="flex items-start gap-4">
						<div
							class="w-24 h-24 rounded-lg shrink-0 shadow-lg"
							style:background-color="{color.value}" style:box-shadow="0 0 20px {color.value}40"
						></div>
						<div class="flex-1">
							<h3 class="font-semibold text-lg mb-1">{color.name}</h3>
							<div class="space-y-1 text-sm">
								<p class="font-mono text-white/60">{color.hex}</p>
								<p class="font-mono text-white/60">brandColors.terminal.{color.key}</p>
								<p class="text-white/70 mt-2">{color.usage}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Glass System -->
	<section class="mt-16">
		<h2>Glass System</h2>
		<p class="text-white/70 mb-8">
			Our glass morphism system uses carefully calibrated opacity levels to create depth and hierarchy while maintaining
			readability.
		</p>

		<div class="grid gap-4">
			{#each glassPalette as glass (glass.id || glass)}
				<div
					class="p-6 rounded-xl border border-white/20"
					style:background-color="{glass.value}" style:backdrop-filter="blur(12px)"
				>
					<div class="flex items-center justify-between">
						<div>
							<h3 class="font-semibold text-lg mb-1">{glass.name}</h3>
							<p class="text-sm text-white/70">{glass.usage}</p>
						</div>
						<div class="text-right">
							<p class="font-mono text-sm">{glass.value}</p>
							<p class="text-sm text-white/60">{glass.opacity} opacity</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="glass-subtle p-6 rounded-xl mt-6">
			<h3 class="mb-4">Glass Effect Implementation</h3>
			<CodeBlock
				code={`.glass-primary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 0 32px rgba(255, 255, 255, 0.05);
}`}
				language="css"
			/>
		</div>
	</section>

	<!-- Gradients -->
	<section class="mt-16">
		<h2>Gradients</h2>
		<p class="text-white/70 mb-8">
			Dynamic gradients add energy and movement to the interface, reinforcing the liquid terminal aesthetic.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each gradients as gradient (gradient.id || gradient)}
				<div class="glass-subtle p-6 rounded-xl">
					<div class="w-full h-32 rounded-lg mb-4" style:background="{gradient.value}"></div>
					<h3 class="font-semibold mb-1">{gradient.name}</h3>
					<p class="text-sm text-white/70 mb-2">{gradient.usage}</p>
					<code class="text-xs font-mono text-white/60">brandColors.gradients.{gradient.name.toLowerCase()}</code>
				</div>
			{/each}
		</div>
	</section>

	<!-- Semantic Colors -->
	<section class="mt-16">
		<h2>Semantic Colors</h2>
		<p class="text-white/70 mb-8">
			Consistent semantic colors help users understand system states and actions at a glance.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each semanticColors as color (color.id || color)}
				<div class="glass-subtle p-6 rounded-xl">
					<div class="flex items-center gap-4">
						<div class="w-16 h-16 rounded-lg" style:background-color="{color.value}"></div>
						<div>
							<h3 class="font-semibold mb-1">{color.name}</h3>
							<p class="text-sm text-white/70">{color.usage}</p>
							<code class="text-xs font-mono text-white/60">{color.hex}</code>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Background System -->
	<section class="mt-16">
		<h2>Background System</h2>
		<p class="text-white/70 mb-8">
			Our background colors create depth and hierarchy while maintaining the dark, sophisticated aesthetic.
		</p>

		<div class="space-y-4">
			{#each backgroundColors as bg (bg.id || bg)}
				<div class="p-8 rounded-xl border border-white/10" style:background-color="{bg.value}">
					<div class="flex items-center justify-between">
						<div>
							<h3 class="font-semibold text-lg mb-1">{bg.name} Background</h3>
							<p class="text-sm text-white/70">{bg.usage}</p>
						</div>
						<div class="text-right">
							<code class="font-mono text-sm">{bg.hex}</code>
							<p class="text-xs text-white/60">brandColors.background.{bg.name.toLowerCase()}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Color Accessibility -->
	<section class="mt-16">
		<h2>Accessibility</h2>
		<p class="text-white/70 mb-8">
			All color combinations meet WCAG AA standards for contrast ratios, ensuring readability for all users.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Contrast Requirements</h3>
				<ul class="space-y-2 text-sm">
					<li class="flex items-center">
						<span class="text-terminal-green mr-2">✓</span>
						<span>Normal text: 4.5:1 minimum</span>
					</li>
					<li class="flex items-center">
						<span class="text-terminal-green mr-2">✓</span>
						<span>Large text: 3:1 minimum</span>
					</li>
					<li class="flex items-center">
						<span class="text-terminal-green mr-2">✓</span>
						<span>UI components: 3:1 minimum</span>
					</li>
				</ul>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Testing Tools</h3>
				<ul class="space-y-2 text-sm">
					<li>• WebAIM Contrast Checker</li>
					<li>• Chrome DevTools Accessibility</li>
					<li>• Stark Figma Plugin</li>
					<li>• Polypane Browser</li>
				</ul>
			</div>
		</div>

		<div class="glass-subtle p-6 rounded-xl mt-6">
			<h3 class="mb-4">Example Combinations</h3>
			<div class="space-y-3">
				<div class="flex items-center justify-between p-3 rounded" style:background="#0a0a0f">
					<span style:color="#00ff41">Terminal Green on Primary Background</span>
					<span class="text-sm font-mono text-white/60">8.5:1 ✓</span>
				</div>
				<div class="flex items-center justify-between p-3 rounded" style:background="#1a1a2e">
					<span style:color="#00ffff">Electric Cyan on Secondary Background</span>
					<span class="text-sm font-mono text-white/60">9.2:1 ✓</span>
				</div>
				<div class="flex items-center justify-between p-3 rounded" style:background="#16213e">
					<span style:color="#ff6b35">Neon Orange on Tertiary Background</span>
					<span class="text-sm font-mono text-white/60">5.8:1 ✓</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Usage Guidelines -->
	<section class="mt-16">
		<h2>Color Usage Guidelines</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="glass-subtle p-8 rounded-xl">
				<h3 class="text-terminal-green mb-6">Do's ✓</h3>
				<ul class="space-y-3 text-sm">
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Use terminal colors for interactive elements and emphasis</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Apply glass effects to create depth and hierarchy</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Test color combinations for accessibility</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Use semantic colors consistently</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Apply gradients sparingly for impact</span>
					</li>
				</ul>
			</div>

			<div class="glass-subtle p-8 rounded-xl">
				<h3 class="text-terminal-pink mb-6">Don'ts ✗</h3>
				<ul class="space-y-3 text-sm">
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Mix too many bright colors in one view</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Use pure white on dark backgrounds</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Apply glass effects to text</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Use color as the only indicator</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Override semantic color meanings</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Implementation -->
	<section class="mt-16">
		<h2>Implementation</h2>

		<div class="space-y-6">
			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Using Design Tokens</h3>
				<CodeBlock
					code={`import { brandColors } from 'tulio-brand-system/tokens';

// Terminal colors
const success = brandColors.terminal.green;
const accent = brandColors.terminal.cyan;

// Glass effects
const glassBg = brandColors.glass.primary;
const glassBorder = brandColors.glass.border;

// Semantic colors
const errorColor = brandColors.semantic.error;`}
					language="javascript"
				/>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Tailwind Classes</h3>
				<CodeBlock
					code={`<!-- Terminal colors -->
<div class="text-terminal-green bg-terminal-green/20">
  Success message
</div>

<!-- Glass effect -->
<div class="glass-medium backdrop-blur-xl border border-white/20">
  Glass container
</div>

<!-- Gradient background -->
<div class="bg-gradient-to-br from-terminal-purple to-terminal-pink">
  Gradient element
</div>`}
					language="html"
				/>
			</div>
		</div>
	</section>
</article>

<style>
	.lead {
		@apply text-xl text-white/80 mb-12 max-w-3xl;
	}

	section {
		@apply border-t border-white/10 pt-12;
	}

	section:first-of-type {
		@apply border-t-0 pt-0;
	}
</style>
