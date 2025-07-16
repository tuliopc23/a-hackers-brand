<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Button from '$lib/components/Button.svelte';
	import { spacing } from '$lib/tokens';

	// Spacing scale examples
	const spacingScale = [
		{ name: 'xs', value: '4px', rem: '0.25rem', token: 'spacing[1]', use: 'Border radii, icon spacing' },
		{ name: 'sm', value: '8px', rem: '0.5rem', token: 'spacing[2]', use: 'Small gaps, button padding' },
		{ name: 'md', value: '16px', rem: '1rem', token: 'spacing[4]', use: 'Standard component padding' },
		{ name: 'lg', value: '24px', rem: '1.5rem', token: 'spacing[6]', use: 'Card padding, section gaps' },
		{ name: 'xl', value: '32px', rem: '2rem', token: 'spacing[8]', use: 'Large component spacing' },
		{ name: '2xl', value: '48px', rem: '3rem', token: 'spacing[12]', use: 'Section separation' },
		{ name: '3xl', value: '64px', rem: '4rem', token: 'spacing[16]', use: 'Major page sections' },
		{ name: '4xl', value: '96px', rem: '6rem', token: 'spacing[24]', use: 'Hero sections, page headers' }
	];

	// Layout grid examples
	const gridExamples = [
		{ columns: 1, description: 'Single column layout for mobile and content-focused pages' },
		{ columns: 2, description: 'Two column layout for tablets and sidebar content' },
		{ columns: 3, description: 'Three column layout for card grids and feature sections' },
		{ columns: 4, description: 'Four column layout for desktop dashboards and galleries' },
		{ columns: 6, description: 'Six column layout for complex desktop layouts' },
		{ columns: 12, description: 'Twelve column layout for maximum flexibility' }
	];

	// Responsive breakpoints
	const breakpoints = [
		{ name: 'Mobile', size: '0px', max: '639px', container: '100%', description: 'Single column, stacked layout' },
		{ name: 'Tablet', size: '640px', max: '1023px', container: '640px', description: 'Two column, condensed spacing' },
		{
			name: 'Desktop',
			size: '1024px',
			max: '1279px',
			container: '1024px',
			description: 'Multi-column, standard spacing'
		},
		{ name: 'Wide', size: '1280px', max: '1535px', container: '1280px', description: 'Wide layouts, generous spacing' },
		{ name: 'Ultra Wide', size: '1536px', max: '∞', container: '1536px', description: 'Maximum width, optimal reading' }
	];

	// Component spacing patterns
	const componentPatterns = [
		{
			component: 'Button',
			internal: '12px 24px',
			external: '8px',
			description: 'Compact padding with minimal external spacing'
		},
		{
			component: 'Card',
			internal: '24px',
			external: '16px',
			description: 'Generous internal padding with standard gap'
		},
		{
			component: 'Modal',
			internal: '32px',
			external: '48px',
			description: 'Spacious padding with large external margins'
		},
		{
			component: 'Navigation',
			internal: '16px 24px',
			external: '0px',
			description: 'Balanced padding with no external spacing'
		}
	];
</script>

<article class="docs-content">
	<h1>Spacing & Layout</h1>

	<p class="lead">
		Our spacing system is built on an 8-point grid that ensures consistent, harmonious layouts across all interfaces
		while maintaining the liquid glass aesthetic.
	</p>

	<!-- Spacing Philosophy -->
	<section>
		<h2>Spacing Philosophy</h2>

		<div class="glass-subtle p-8 rounded-2xl mb-8">
			<p class="text-lg mb-6">
				The Tulio spacing system creates rhythm and hierarchy through careful use of whitespace. Every measurement is
				based on multiples of 8px, creating a mathematical harmony that feels both technical and organic.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="text-center">
					<div
						class="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-terminal-green/20 to-terminal-cyan/20 border border-terminal-green/30 flex items-center justify-center"
					>
						<span class="text-2xl">8</span>
					</div>
					<h3 class="font-semibold mb-2">8-Point Grid</h3>
					<p class="text-sm text-white/70">Mathematical foundation for all spacing</p>
				</div>
				<div class="text-center">
					<div class="w-20 h-20 mx-auto mb-4 rounded-xl glass-medium backdrop-blur-xl flex items-center justify-center">
						<span class="text-2xl">≈</span>
					</div>
					<h3 class="font-semibold mb-2">Proportional</h3>
					<p class="text-sm text-white/70">Consistent ratios across all components</p>
				</div>
				<div class="text-center">
					<div
						class="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-terminal-purple/20 to-terminal-pink/20 border border-terminal-purple/30 flex items-center justify-center"
					>
						<span class="text-2xl">⚡</span>
					</div>
					<h3 class="font-semibold mb-2">Responsive</h3>
					<p class="text-sm text-white/70">Adapts fluidly across all screen sizes</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Spacing Scale -->
	<section class="mt-16">
		<h2>Spacing Scale</h2>
		<p class="text-white/70 mb-8">
			Our spacing scale provides a comprehensive range of sizes for all layout needs, from micro-spacing to major page
			sections.
		</p>

		<div class="space-y-4">
			{#each spacingScale as space (space.id || space)}
				<div class="glass-subtle p-6 rounded-xl hover:glass-medium transition-all">
					<div class="flex items-center gap-6">
						<div class="flex items-center min-w-0 flex-1">
							<div class="w-20 font-mono text-terminal-cyan text-sm">{space.name}</div>
							<div
								class="h-8 bg-terminal-green/30 rounded-md mr-6 border border-terminal-green/50"
								style:width="{space.value}"
							></div>
							<div class="text-sm">
								<div class="font-mono text-white">{space.value} / {space.rem}</div>
								<div class="text-white/60 text-xs">{space.use}</div>
							</div>
						</div>
						<code class="text-xs text-terminal-cyan font-mono">{space.token}</code>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Layout Grid -->
	<section class="mt-16">
		<h2>Layout Grid System</h2>
		<p class="text-white/70 mb-8">
			Our responsive grid system adapts from single-column mobile layouts to complex multi-column desktop interfaces
			while maintaining visual harmony.
		</p>

		<div class="glass-subtle p-8 rounded-xl mb-8">
			<h3 class="mb-6">Grid Columns</h3>
			<div class="space-y-6">
				{#each gridExamples as grid (grid.id || grid)}
					<div class="border border-white/10 rounded-lg p-4">
						<div class="flex items-center justify-between mb-3">
							<h4 class="font-semibold">{grid.columns} Column{grid.columns > 1 ? 's' : ''}</h4>
							<code class="text-xs text-terminal-cyan">grid-cols-{grid.columns}</code>
						</div>
						<div class="grid grid-cols-{grid.columns} gap-2 mb-3">
							{#each Array(grid.columns) as _, i (i)}
								<div
									class="h-12 glass-subtle rounded border border-terminal-green/20 flex items-center justify-center text-xs"
								>
									{i + 1}
								</div>
							{/each}
						</div>
						<p class="text-sm text-white/70">{grid.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Responsive Breakpoints -->
	<section class="mt-16">
		<h2>Responsive Breakpoints</h2>
		<p class="text-white/70 mb-8">
			Our breakpoint system ensures optimal layouts across all device sizes, from mobile phones to ultra-wide monitors.
		</p>

		<div class="space-y-4">
			{#each breakpoints as bp (bp.id || bp)}
				<div class="glass-subtle p-6 rounded-xl">
					<div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
						<div>
							<h3 class="font-semibold text-lg">{bp.name}</h3>
							<p class="text-sm text-white/60">{bp.description}</p>
						</div>
						<div class="text-center">
							<p class="text-sm text-terminal-cyan">Min Width</p>
							<p class="font-mono text-lg">{bp.size}</p>
						</div>
						<div class="text-center">
							<p class="text-sm text-terminal-green">Max Width</p>
							<p class="font-mono text-lg">{bp.max}</p>
						</div>
						<div class="text-center">
							<p class="text-sm text-terminal-purple">Container</p>
							<p class="font-mono text-lg">{bp.container}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="glass-subtle p-6 rounded-xl mt-6">
			<h3 class="mb-4">Breakpoint Usage</h3>
			<CodeBlock
				code={`/* Responsive utility classes */
@media (min-width: 640px) { /* sm: */ }
@media (min-width: 768px) { /* md: */ }
@media (min-width: 1024px) { /* lg: */ }
@media (min-width: 1280px) { /* xl: */ }
@media (min-width: 1536px) { /* 2xl: */ }

/* Tailwind responsive prefixes */
<div class="p-4 md:p-6 lg:p-8 xl:p-12">
  Responsive padding
</div>`}
				language="css"
			/>
		</div>
	</section>

	<!-- Component Spacing -->
	<section class="mt-16">
		<h2>Component Spacing Patterns</h2>
		<p class="text-white/70 mb-8">
			Standard spacing patterns for common components ensure consistency across the design system.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each componentPatterns as pattern (pattern.id || pattern)}
				<div class="glass-subtle p-6 rounded-xl">
					<h3 class="text-terminal-cyan mb-3">{pattern.component}</h3>
					<div class="space-y-2 mb-4">
						<div class="flex justify-between">
							<span class="text-sm text-white/70">Internal Padding:</span>
							<code class="text-sm font-mono">{pattern.internal}</code>
						</div>
						<div class="flex justify-between">
							<span class="text-sm text-white/70">External Margin:</span>
							<code class="text-sm font-mono">{pattern.external}</code>
						</div>
					</div>
					<p class="text-sm text-white/60">{pattern.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Layout Principles -->
	<section class="mt-16">
		<h2>Layout Principles</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="glass-subtle p-8 rounded-xl">
				<h3 class="text-terminal-green mb-6">Do's ✓</h3>
				<ul class="space-y-3 text-sm">
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Use consistent spacing ratios throughout your layout</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Maintain the 8-point grid system for all measurements</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Test layouts across all breakpoints</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Use whitespace to create visual hierarchy</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Group related elements with consistent spacing</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-green mr-2 mt-0.5">✓</span>
						<span>Follow responsive-first design principles</span>
					</li>
				</ul>
			</div>

			<div class="glass-subtle p-8 rounded-xl">
				<h3 class="text-terminal-pink mb-6">Don'ts ✗</h3>
				<ul class="space-y-3 text-sm">
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Use arbitrary spacing values outside the scale</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Create inconsistent gaps between similar elements</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Forget to test mobile layouts thoroughly</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Overcrowd interfaces with insufficient spacing</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Use fixed pixel values instead of responsive units</span>
					</li>
					<li class="flex items-start">
						<span class="text-terminal-pink mr-2 mt-0.5">✗</span>
						<span>Break the grid system for one-off solutions</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Container Layouts -->
	<section class="mt-16">
		<h2>Container Layouts</h2>

		<div class="space-y-6">
			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Standard Containers</h3>
				<CodeBlock
					code={`/* Full width container */
.container-full {
  width: 100%;
  padding: 0 1rem;
}

/* Centered container with max width */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Narrow container for content */
.container-narrow {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem;
}`}
					language="css"
				/>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Responsive Container Example</h3>
				<CodeBlock
					code={`<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="glass-subtle p-6 rounded-xl">Card 1</div>
    <div class="glass-subtle p-6 rounded-xl">Card 2</div>
    <div class="glass-subtle p-6 rounded-xl">Card 3</div>
  </div>
</div>`}
					language="html"
				/>
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
					code={`import { spacing } from 'tulio-brand-system/tokens';

// Spacing values
const cardPadding = spacing[6]; // 24px
const sectionGap = spacing[12]; // 48px
const componentMargin = spacing[4]; // 16px

// In CSS-in-JS
const styles = {
  padding: spacing[6],
  marginBottom: spacing[8],
  gap: spacing[4]
};`}
					language="javascript"
				/>
			</div>

			<div class="glass-subtle p-6 rounded-xl">
				<h3 class="mb-4">Tailwind Classes</h3>
				<CodeBlock
					code={`<!-- Spacing utilities -->
<div class="p-6 m-4 space-y-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    Content with responsive spacing
  </div>
</div>

<!-- Container with responsive padding -->
<div class="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
  Responsive container content
</div>

<!-- Section with consistent vertical rhythm -->
<section class="py-16 space-y-12">
  <h2 class="mb-8">Section Title</h2>
  <div class="space-y-6">
    Multiple content blocks with consistent spacing
  </div>
</section>`}
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
