<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Button from '$lib/components/Button.svelte';
	import { typography } from '$lib/tokens';

	const { fontFamily: fontFamilies, fontSize: fontSizes, lineHeight: lineHeights } = typography;
	const fontWeights = { normal: '400', medium: '500', semibold: '600', bold: '700' };

	// Font combinations
	const fontCombinations = [
		{
			title: 'Hero Section',
			heading: { font: 'PP Supply Sans', size: '4xl', weight: '700' },
			body: { font: 'PP Supply Sans', size: 'lg', weight: '400' }
		},
		{
			title: 'Terminal Interface',
			heading: { font: 'PP Supply Mono', size: '2xl', weight: '500' },
			body: { font: 'PP Supply Mono', size: 'base', weight: '400' }
		},
		{
			title: 'Documentation',
			heading: { font: 'PP Supply Sans', size: '3xl', weight: '600' },
			body: { font: 'PP Supply Sans', size: 'base', weight: '400' }
		}
	];

	// Sample text for demonstrations
	const pangram = 'The quick brown fox jumps over the lazy dog';
	const terminalText = '$ npm install tulio-brand-system --save';
	const paragraph =
		'Our design system combines the elegance of liquid glass with the power of terminal aesthetics, creating interfaces that are both beautiful and functional.';
</script>

<article class="docs-content">
	<h1>Typography</h1>

	<p class="lead">
		Typography is the foundation of our design language. The PP Supply font family provides the perfect balance of
		technical precision and visual elegance.
	</p>

	<!-- Font Families -->
	<section>
		<h2>Font Families</h2>

		<div class="grid gap-8">
			<!-- PP Supply Sans -->
			<div class="glass-subtle p-8 rounded-2xl">
				<div class="flex items-start justify-between mb-6">
					<div>
						<h3 class="text-2xl mb-2">PP Supply Sans</h3>
						<p class="text-white/70">Primary typeface for UI and marketing</p>
					</div>
					<Button size="sm" variant="ghost">Download Font</Button>
				</div>

				<div class="space-y-4 mb-6">
					<div class="font-sans text-5xl font-bold">{pangram}</div>
					<div class="font-sans text-3xl font-semibold">{pangram}</div>
					<div class="font-sans text-xl font-medium">{pangram}</div>
					<div class="font-sans text-base font-normal">{pangram}</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="text-sm font-semibold text-terminal-cyan mb-3">Weights Available</h4>
						<div class="space-y-2">
							<div class="flex items-center justify-between">
								<span class="font-sans font-normal">Regular (400)</span>
								<code class="text-xs text-white/60">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-medium">Medium (500)</span>
								<code class="text-xs text-white/60">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-semibold">Semibold (600)</span>
								<code class="text-xs text-white/60">font-semibold</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-sans font-bold">Bold (700)</span>
								<code class="text-xs text-white/60">font-bold</code>
							</div>
						</div>
					</div>

					<div>
						<h4 class="text-sm font-semibold text-terminal-cyan mb-3">Best Used For</h4>
						<ul class="space-y-1 text-sm text-white/70">
							<li>• Headlines and titles</li>
							<li>• Body text</li>
							<li>• UI components</li>
							<li>• Marketing materials</li>
							<li>• Documentation</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- PP Supply Mono -->
			<div class="glass-subtle p-8 rounded-2xl">
				<div class="flex items-start justify-between mb-6">
					<div>
						<h3 class="text-2xl mb-2 font-mono">PP Supply Mono</h3>
						<p class="text-white/70">Monospace for code and terminal interfaces</p>
					</div>
					<Button size="sm" variant="ghost">Download Font</Button>
				</div>

				<div class="space-y-4 mb-6">
					<div class="font-mono text-2xl font-bold">{terminalText}</div>
					<div class="font-mono text-xl font-medium">{terminalText}</div>
					<div class="font-mono text-base font-normal">{terminalText}</div>
					<div class="font-mono text-sm font-normal">{terminalText}</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="text-sm font-semibold text-terminal-green mb-3">Weights Available</h4>
						<div class="space-y-2">
							<div class="flex items-center justify-between">
								<span class="font-mono font-normal">Regular (400)</span>
								<code class="text-xs text-white/60">font-normal</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono font-medium">Medium (500)</span>
								<code class="text-xs text-white/60">font-medium</code>
							</div>
							<div class="flex items-center justify-between">
								<span class="font-mono font-bold">Bold (700)</span>
								<code class="text-xs text-white/60">font-bold</code>
							</div>
						</div>
					</div>

					<div>
						<h4 class="text-sm font-semibold text-terminal-green mb-3">Best Used For</h4>
						<ul class="space-y-1 text-sm text-white/70">
							<li>• Code blocks</li>
							<li>• Terminal interfaces</li>
							<li>• Data displays</li>
							<li>• Technical documentation</li>
							<li>• System messages</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Type Scale -->
	<section class="mt-16">
		<h2>Type Scale</h2>
		<p class="text-white/70 mb-8">
			Our type scale follows a harmonious progression, ensuring clear hierarchy and readability across all screen sizes.
		</p>

		<div class="space-y-4">
			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-5xl font-bold">Display Large</span>
					<code class="text-sm text-terminal-cyan">text-5xl</code>
				</div>
				<p class="text-sm text-white/60">3rem / 48px • Line height: 1</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-4xl font-bold">Display</span>
					<code class="text-sm text-terminal-cyan">text-4xl</code>
				</div>
				<p class="text-sm text-white/60">2.25rem / 36px • Line height: 1.25</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-3xl font-bold">Heading 1</span>
					<code class="text-sm text-terminal-cyan">text-3xl</code>
				</div>
				<p class="text-sm text-white/60">1.875rem / 30px • Line height: 1.25</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-2xl font-semibold">Heading 2</span>
					<code class="text-sm text-terminal-cyan">text-2xl</code>
				</div>
				<p class="text-sm text-white/60">1.5rem / 24px • Line height: 1.5</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-xl font-semibold">Heading 3</span>
					<code class="text-sm text-terminal-cyan">text-xl</code>
				</div>
				<p class="text-sm text-white/60">1.25rem / 20px • Line height: 1.5</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-lg font-medium">Heading 4</span>
					<code class="text-sm text-terminal-cyan">text-lg</code>
				</div>
				<p class="text-sm text-white/60">1.125rem / 18px • Line height: 1.5</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-base">Body</span>
					<code class="text-sm text-terminal-cyan">text-base</code>
				</div>
				<p class="text-sm text-white/60">1rem / 16px • Line height: 1.5</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-sm">Small</span>
					<code class="text-sm text-terminal-cyan">text-sm</code>
				</div>
				<p class="text-sm text-white/60">0.875rem / 14px • Line height: 1.5</p>
			</div>

			<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
				<div class="flex items-baseline justify-between mb-2">
					<span class="text-xs">Extra Small</span>
					<code class="text-sm text-terminal-cyan">text-xs</code>
				</div>
				<p class="text-sm text-white/60">0.75rem / 12px • Line height: 1.5</p>
			</div>
		</div>
	</section>

	<!-- Font Pairing -->
	<section class="mt-16">
		<h2>Font Pairing</h2>
		<p class="text-white/70 mb-8">
			Effective font pairing creates visual interest and hierarchy. Here are recommended combinations for different
			contexts.
		</p>

		<div class="grid gap-6">
			{#each fontCombinations as combo (combo.id || combo)}
				<div class="glass-subtle p-8 rounded-xl">
					<h3 class="text-terminal-purple mb-4">{combo.title}</h3>
					<div class="space-y-4">
						<div>
							<p class="text-xs text-white/60 mb-1">
								{combo.heading.font} • {combo.heading.size} • {combo.heading.weight}
							</p>
							<p class="text-{combo.heading.size} font-{combo.heading.weight}">Beautiful Terminal Interfaces</p>
						</div>
						<div>
							<p class="text-xs text-white/60 mb-1">
								{combo.body.font} • {combo.body.size} • {combo.body.weight}
							</p>
							<p class="text-{combo.body.size} font-{combo.body.weight}">
								{paragraph}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Line Height -->
	<section class="mt-16">
		<h2>Line Height</h2>
		<p class="text-white/70 mb-8">
			Proper line height ensures readability and visual comfort across different text sizes and contexts.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="text-terminal-cyan mb-4">Tight (1.25)</h3>
				<p class="leading-tight text-sm">
					{paragraph}
				</p>
				<code class="text-xs text-white/60 mt-4 block">leading-tight</code>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="text-terminal-green mb-4">Normal (1.5)</h3>
				<p class="leading-normal text-sm">
					{paragraph}
				</p>
				<code class="text-xs text-white/60 mt-4 block">leading-normal</code>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="text-terminal-purple mb-4">Relaxed (1.75)</h3>
				<p class="leading-relaxed text-sm">
					{paragraph}
				</p>
				<code class="text-xs text-white/60 mt-4 block">leading-relaxed</code>
			</div>
		</div>
	</section>

	<!-- Usage Guidelines -->
	<section class="mt-16">
		<h2>Typography Guidelines</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="glass-subtle p-8 rounded-xl">
				<h3 class="text-terminal-green mb-6">Best Practices ✓</h3>
				<ul class="space-y-3 text-sm">
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Use PP Supply Sans for all UI text and headings</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Reserve PP Supply Mono for code, data, and terminal interfaces</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Maintain consistent type scales across similar elements</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Use proper semantic HTML tags (h1-h6, p, etc.)</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Ensure minimum 16px font size for body text</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Test readability on different screen sizes</span>
					</li>
				</ul>
			</div>

			<div class="glass-subtle p-8 rounded-xl">
				<h3 class="text-terminal-pink mb-6">Common Mistakes ✗</h3>
				<ul class="space-y-3 text-sm">
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Mixing too many font sizes in one section</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Using all caps for long passages of text</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Insufficient contrast between text and background</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Line lengths exceeding 75 characters</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Using system fonts as fallbacks without testing</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Ignoring responsive typography needs</span>
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
				<h3 class="mb-4">CSS Variables</h3>
				<CodeBlock
					code={`:root {
  /* Font Families */
  --font-sans: 'PP Supply Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'PP Supply Mono', 'Consolas', 'Monaco', 'Courier New', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
}`}
					language="css"
				/>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Tailwind Classes</h3>
				<CodeBlock
					code={`<!-- Heading -->
<h1 class="text-4xl font-bold leading-tight">
  Welcome to Tulio
</h1>

<!-- Body Text -->
<p class="text-base leading-normal text-white/80">
  Build beautiful terminal-inspired interfaces
</p>

<!-- Code Block -->
<code class="font-mono text-sm text-terminal-green">
  npm install tulio-brand-system
</code>`}
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
