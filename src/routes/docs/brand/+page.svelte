<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import { 
		colors, 
		fontFamilies, 
		fontSizes, 
		spacing,
		animations,
		shadows
	} from '$lib/tokens';
	
	// Color examples for the palette
	const terminalColors = [
		{ name: 'Matrix Green', value: colors.terminal.green, hex: '#00ff41' },
		{ name: 'Electric Cyan', value: colors.terminal.cyan, hex: '#00ffff' },
		{ name: 'Neon Blue', value: colors.terminal.blue, hex: '#0080ff' },
		{ name: 'Deep Purple', value: colors.terminal.purple, hex: '#8a2be2' },
		{ name: 'Hot Pink', value: colors.terminal.pink, hex: '#ff1493' },
		{ name: 'Neon Orange', value: colors.terminal.orange, hex: '#ff6b35' }
	];

	const glassColors = [
		{ name: 'Primary Glass', value: 'rgba(255, 255, 255, 0.1)', opacity: '10%' },
		{ name: 'Secondary Glass', value: 'rgba(255, 255, 255, 0.05)', opacity: '5%' },
		{ name: 'Accent Glass', value: 'rgba(59, 130, 246, 0.15)', opacity: '15%' }
	];

	const spacingScale = [
		{ name: 'xs', value: spacing[1], rem: '0.25rem', px: '4px' },
		{ name: 'sm', value: spacing[2], rem: '0.5rem', px: '8px' },
		{ name: 'md', value: spacing[4], rem: '1rem', px: '16px' },
		{ name: 'lg', value: spacing[6], rem: '1.5rem', px: '24px' },
		{ name: 'xl', value: spacing[8], rem: '2rem', px: '32px' },
		{ name: '2xl', value: spacing[12], rem: '3rem', px: '48px' },
		{ name: '3xl', value: spacing[16], rem: '4rem', px: '64px' }
	];
</script>

<article class="docs-content">
	<h1>Brand Guidelines</h1>
	
	<p class="lead">
		The comprehensive guide to the Tulio Brand System — a liquid glass terminal fusion design language 
		that merges Apple's sophisticated glass aesthetics with hacker terminal culture.
	</p>

	<!-- Brand Story -->
	<section class="mt-16">
		<h2>Brand Identity</h2>
		
		<div class="glass-subtle p-8 rounded-2xl mb-8">
			<h3>Our Philosophy</h3>
			<p>
				The Tulio Brand System represents the intersection of elegance and power. We believe that 
				developer tools should be both beautiful and functional, combining the visual sophistication 
				of modern design with the raw efficiency of terminal interfaces.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<div class="glass-subtle p-6 rounded-xl">
				<h4 class="text-terminal-cyan mb-2">Sophisticated</h4>
				<p class="text-sm text-white/70">
					Clean, refined aesthetics inspired by Apple's design philosophy
				</p>
			</div>
			<div class="glass-subtle p-6 rounded-xl">
				<h4 class="text-terminal-green mb-2">Powerful</h4>
				<p class="text-sm text-white/70">
					Terminal-inspired functionality that developers love
				</p>
			</div>
			<div class="glass-subtle p-6 rounded-xl">
				<h4 class="text-terminal-purple mb-2">Innovative</h4>
				<p class="text-sm text-white/70">
					Cutting-edge WebGL effects and liquid animations
				</p>
			</div>
		</div>
	</section>

	<!-- Typography -->
	<section class="mt-16">
		<h2>Typography</h2>
		
		<div class="mb-8">
			<h3>Font Families</h3>
			<p class="mb-6">
				Our typography system is built on PP Supply, a modern geometric typeface that perfectly 
				balances technical precision with visual elegance.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="glass-subtle p-8 rounded-xl">
					<h4 class="font-mono text-terminal-cyan mb-4">PP Supply Mono</h4>
					<p class="font-mono text-2xl mb-4">The quick brown fox jumps over the lazy dog</p>
					<p class="text-sm text-white/70">
						Used for: Code, terminal interfaces, technical content, data displays
					</p>
					<CodeBlock 
						code={`font-family: 'PP Supply Mono', monospace;`}
						language="css"
					/>
				</div>
				
				<div class="glass-subtle p-8 rounded-xl">
					<h4 class="font-sans text-terminal-purple mb-4">PP Supply Sans</h4>
					<p class="font-sans text-2xl mb-4">The quick brown fox jumps over the lazy dog</p>
					<p class="text-sm text-white/70">
						Used for: Headings, UI elements, marketing content, body text
					</p>
					<CodeBlock 
						code={`font-family: 'PP Supply Sans', sans-serif;`}
						language="css"
					/>
				</div>
			</div>
		</div>

		<div class="mb-8">
			<h3>Type Scale</h3>
			<div class="space-y-4">
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-4xl font-bold mb-2">Heading 1 - 2.25rem (36px)</p>
					<code class="text-sm text-terminal-cyan">text-4xl</code>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-3xl font-bold mb-2">Heading 2 - 1.875rem (30px)</p>
					<code class="text-sm text-terminal-cyan">text-3xl</code>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-2xl font-semibold mb-2">Heading 3 - 1.5rem (24px)</p>
					<code class="text-sm text-terminal-cyan">text-2xl</code>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-xl font-semibold mb-2">Heading 4 - 1.25rem (20px)</p>
					<code class="text-sm text-terminal-cyan">text-xl</code>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-lg mb-2">Body Large - 1.125rem (18px)</p>
					<code class="text-sm text-terminal-cyan">text-lg</code>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-base mb-2">Body Default - 1rem (16px)</p>
					<code class="text-sm text-terminal-cyan">text-base</code>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<p class="text-sm mb-2">Body Small - 0.875rem (14px)</p>
					<code class="text-sm text-terminal-cyan">text-sm</code>
				</div>
			</div>
		</div>

		<div class="mb-8">
			<h3>Typography Rules</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="glass-subtle p-6 rounded-xl">
					<h4 class="text-terminal-green mb-3">Do's ✓</h4>
					<ul class="space-y-2 text-sm">
						<li>• Use PP Supply Sans for all UI text</li>
						<li>• Use PP Supply Mono for code and data</li>
						<li>• Maintain consistent hierarchy</li>
						<li>• Ensure 4.5:1 contrast ratio minimum</li>
						<li>• Use proper line heights (1.5 for body)</li>
					</ul>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<h4 class="text-terminal-pink mb-3">Don'ts ✗</h4>
					<ul class="space-y-2 text-sm">
						<li>• Don't mix font families in headings</li>
						<li>• Don't use less than 14px for body text</li>
						<li>• Don't stretch or compress fonts</li>
						<li>• Don't use all caps for long text</li>
						<li>• Don't override system font settings</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Color System -->
	<section class="mt-16">
		<h2>Color System</h2>
		
		<div class="mb-8">
			<h3>Terminal Colors</h3>
			<p class="mb-6">
				Our primary palette draws inspiration from classic terminal interfaces and cyberpunk aesthetics.
			</p>
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				{#each terminalColors as color}
					<div class="glass-subtle p-4 rounded-xl">
						<div 
							class="w-full h-24 rounded-lg mb-3"
							style="background-color: {color.value}"
						></div>
						<p class="font-semibold text-sm">{color.name}</p>
						<code class="text-xs text-white/60">{color.hex}</code>
					</div>
				{/each}
			</div>
		</div>

		<div class="mb-8">
			<h3>Glass System</h3>
			<p class="mb-6">
				Our glass morphism effects use carefully calibrated opacity levels for depth and hierarchy.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each glassColors as color}
					<div class="glass-subtle p-4 rounded-xl">
						<div 
							class="w-full h-24 rounded-lg mb-3 border border-white/20"
							style="background-color: {color.value}"
						></div>
						<p class="font-semibold text-sm">{color.name}</p>
						<code class="text-xs text-white/60">{color.opacity} opacity</code>
					</div>
				{/each}
			</div>
		</div>

		<div class="mb-8">
			<h3>Color Usage Guidelines</h3>
			<div class="glass-subtle p-8 rounded-xl">
				<h4 class="mb-4">Accessibility</h4>
				<ul class="space-y-3">
					<li class="flex items-start">
						<span class="text-terminal-green mr-2">✓</span>
						<span>Always ensure a minimum contrast ratio of 4.5:1 for normal text</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2">✓</span>
						<span>Use 3:1 contrast ratio for large text (18pt+ or 14pt+ bold)</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2">✓</span>
						<span>Test color combinations with accessibility tools</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2">✓</span>
						<span>Provide alternative visual cues beyond color alone</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Spacing System -->
	<section class="mt-16">
		<h2>Spacing & Layout</h2>
		
		<div class="mb-8">
			<h3>8-Point Grid System</h3>
			<p class="mb-6">
				Our spacing system is based on an 8-point grid, ensuring consistent and harmonious layouts 
				across all interfaces.
			</p>
			
			<div class="space-y-3">
				{#each spacingScale as space}
					<div class="glass-subtle p-4 rounded-xl flex items-center">
						<div class="w-20 font-mono text-terminal-cyan">{space.name}</div>
						<div 
							class="h-8 bg-terminal-green/30 rounded mr-4"
							style="width: {space.px}"
						></div>
						<code class="text-sm text-white/60">{space.rem} / {space.px}</code>
					</div>
				{/each}
			</div>
		</div>

		<div class="mb-8">
			<h3>Layout Principles</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="glass-subtle p-6 rounded-xl">
					<h4 class="mb-3">Component Spacing</h4>
					<ul class="space-y-2 text-sm">
						<li>• Use 16px (md) for component internal padding</li>
						<li>• Use 24px (lg) between related components</li>
						<li>• Use 48px (2xl) between sections</li>
						<li>• Maintain consistent spacing ratios</li>
					</ul>
				</div>
				<div class="glass-subtle p-6 rounded-xl">
					<h4 class="mb-3">Responsive Breakpoints</h4>
					<ul class="space-y-2 text-sm">
						<li>• Mobile: 0-639px</li>
						<li>• Tablet: 640px-1023px</li>
						<li>• Desktop: 1024px-1279px</li>
						<li>• Wide: 1280px+</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Motion Principles -->
	<section class="mt-16">
		<h2>Motion & Animation</h2>
		
		<div class="mb-8">
			<h3>Animation Principles</h3>
			<div class="glass-subtle p-8 rounded-xl mb-6">
				<p class="mb-4">
					Motion in the Tulio Brand System should feel liquid, smooth, and purposeful. Every animation 
					serves to enhance the user experience, not distract from it.
				</p>
				<ul class="space-y-2">
					<li>• <strong>Liquid:</strong> Animations should flow like water</li>
					<li>• <strong>Responsive:</strong> React immediately to user input</li>
					<li>• <strong>Subtle:</strong> Enhance, don't overwhelm</li>
					<li>• <strong>Consistent:</strong> Use standard timing and easing</li>
				</ul>
			</div>
		</div>

		<div class="mb-8">
			<h3>Standard Timings</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div class="glass-subtle p-4 rounded-xl text-center">
					<div class="text-2xl font-mono text-terminal-cyan mb-2">150ms</div>
					<p class="text-sm">Fast</p>
					<p class="text-xs text-white/60">Micro-interactions</p>
				</div>
				<div class="glass-subtle p-4 rounded-xl text-center">
					<div class="text-2xl font-mono text-terminal-green mb-2">300ms</div>
					<p class="text-sm">Normal</p>
					<p class="text-xs text-white/60">Most transitions</p>
				</div>
				<div class="glass-subtle p-4 rounded-xl text-center">
					<div class="text-2xl font-mono text-terminal-purple mb-2">500ms</div>
					<p class="text-sm">Slow</p>
					<p class="text-xs text-white/60">Page transitions</p>
				</div>
				<div class="glass-subtle p-4 rounded-xl text-center">
					<div class="text-2xl font-mono text-terminal-pink mb-2">750ms</div>
					<p class="text-sm">Slower</p>
					<p class="text-xs text-white/60">Complex animations</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Voice & Tone -->
	<section class="mt-16">
		<h2>Voice & Tone</h2>
		
		<div class="glass-subtle p-8 rounded-xl mb-8">
			<h3>Brand Voice</h3>
			<p class="mb-4">
				The Tulio brand speaks with confidence and technical expertise while remaining approachable 
				and human. We're the friend who knows their stuff but never talks down to you.
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<div>
					<h4 class="text-terminal-cyan mb-2">We Are</h4>
					<ul class="text-sm space-y-1">
						<li>• Technical but clear</li>
						<li>• Confident but humble</li>
						<li>• Modern but timeless</li>
						<li>• Helpful but concise</li>
					</ul>
				</div>
				<div>
					<h4 class="text-terminal-purple mb-2">We're Not</h4>
					<ul class="text-sm space-y-1">
						<li>• Jargon-heavy</li>
						<li>• Arrogant</li>
						<li>• Trendy</li>
						<li>• Verbose</li>
					</ul>
				</div>
				<div>
					<h4 class="text-terminal-green mb-2">We Sound Like</h4>
					<ul class="text-sm space-y-1">
						<li>• A skilled mentor</li>
						<li>• A trusted colleague</li>
						<li>• A passionate creator</li>
						<li>• A problem solver</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="glass-subtle p-8 rounded-xl">
			<h3>Writing Examples</h3>
			<div class="space-y-4">
				<div>
					<p class="text-terminal-pink mb-1">❌ Don't say:</p>
					<p class="text-sm italic">"An error has occurred in the system. Please contact the administrator."</p>
				</div>
				<div>
					<p class="text-terminal-green mb-1">✓ Do say:</p>
					<p class="text-sm italic">"Something went wrong. Try refreshing, or let us know if it persists."</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Implementation -->
	<section class="mt-16">
		<h2>Implementation</h2>
		
		<div class="glass-subtle p-8 rounded-xl">
			<h3>Quick Start</h3>
			<p class="mb-4">
				To use the Tulio Brand System in your project:
			</p>
			<CodeBlock 
				code={`npm install tulio-brand-system

// Import in your app
import 'tulio-brand-system/styles.css';
import { Button, Card, GlassModal } from 'tulio-brand-system';

// Use the design tokens
import { colors, spacing, animations } from 'tulio-brand-system/tokens';`}
				language="bash"
			/>
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