<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import ComponentPlayground from '$lib/components/ComponentPlayground.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import { glassFade } from '$lib/motion';

	let mounted = false;
	let activeExample = 'variants';

	onMount(() => {
		mounted = true;
	});

	// Code examples
	const examples = {
		basic: `<Button>Click me</Button>`,
		variants: `<!-- Variant Examples -->
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
		sizes: `<!-- Size Examples -->
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
		states: `<!-- State Examples -->
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button glass={true}>Glass Effect</Button>`,
		advanced: `<!-- Advanced Usage -->
<Button 
	variant="primary" 
	size="lg"
	glass={true}
	animate={true}
	on:click={handleClick}
>
	Deploy to Production
</Button>`
	};

	const propsTable = [
		{
			prop: 'variant',
			type: "'primary' | 'secondary' | 'ghost' | 'danger'",
			default: "'primary'",
			description: 'Visual style variant of the button'
		},
		{
			prop: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			description: 'Size of the button'
		},
		{
			prop: 'glass',
			type: 'boolean',
			default: 'true',
			description: 'Enable liquid glass morphism effects'
		},
		{
			prop: 'disabled',
			type: 'boolean',
			default: 'false',
			description: 'Disable button interactions'
		},
		{
			prop: 'loading',
			type: 'boolean',
			default: 'false',
			description: 'Show loading spinner'
		},
		{
			prop: 'animate',
			type: 'boolean',
			default: 'true',
			description: 'Enable entry animations'
		},
		{
			prop: 'href',
			type: 'string',
			default: 'undefined',
			description: 'Render as link when provided'
		},
		{
			prop: 'class',
			type: 'string',
			default: "''",
			description: 'Additional CSS classes'
		}
	];

	const eventsTable = [
		{
			event: 'click',
			type: 'MouseEvent',
			description: 'Fired when button is clicked'
		},
		{
			event: 'keydown',
			type: 'KeyboardEvent',
			description: 'Fired on keyboard interaction'
		},
		{
			event: 'focus',
			type: 'FocusEvent',
			description: 'Fired when button receives focus'
		},
		{
			event: 'blur',
			type: 'FocusEvent',
			description: 'Fired when button loses focus'
		}
	];
</script>

<svelte:head>
	<title>Button Component - Tulio Brand System</title>
	<meta name="description" content="Interactive button component with liquid glass morphism and magnetic hover effects" />
</svelte:head>

<div class="docs-content">
	<!-- Header -->
	<div class="mb-12">
		<h1>Button</h1>
		<p class="text-xl lg:text-2xl text-white/70 mb-8">
			Interactive button component with liquid glass morphism, magnetic hover effects, 
			and terminal-inspired aesthetics. Built for accessibility and performance.
		</p>

		<!-- Quick Example -->
		<div class="flex flex-wrap gap-4 p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="danger">Danger</Button>
		</div>
	</div>

	<!-- Interactive Playground -->
	<section class="mb-16">
		<h2>Interactive Playground</h2>
		<p class="mb-8">
			Experiment with different props and see the changes in real-time.
		</p>
		<ComponentPlayground selectedComponent="Button" />
	</section>

	<!-- Examples -->
	<section class="mb-16">
		<h2>Examples</h2>
		
		<!-- Example Navigation -->
		<div class="flex flex-wrap gap-2 mb-8">
			{#each Object.keys(examples) as exampleKey}
				<button 
					class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {activeExample === exampleKey 
						? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
						: 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
					}"
					on:click={() => activeExample = exampleKey}
				>
					{exampleKey.charAt(0).toUpperCase() + exampleKey.slice(1)}
				</button>
			{/each}
		</div>

		<!-- Example Content -->
		{#if activeExample === 'variants'}
			<div class="space-y-8" in:glassFade>
				<div>
					<h3>Button Variants</h3>
					<p class="text-white/70 mb-6">Different visual styles for various use cases.</p>
					
					<div class="grid md:grid-cols-2 gap-8">
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Preview</h4>
							<div class="flex flex-wrap gap-4 p-6 bg-slate-800/50 rounded-lg">
								<Button variant="primary">Primary</Button>
								<Button variant="secondary">Secondary</Button>
								<Button variant="ghost">Ghost</Button>
								<Button variant="danger">Danger</Button>
							</div>
						</div>
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Code</h4>
							<CodeBlock language="svelte" code={examples.variants} />
						</div>
					</div>
				</div>
			</div>
		{:else if activeExample === 'sizes'}
			<div class="space-y-8" in:glassFade>
				<div>
					<h3>Button Sizes</h3>
					<p class="text-white/70 mb-6">Three sizes to fit different interface contexts.</p>
					
					<div class="grid md:grid-cols-2 gap-8">
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Preview</h4>
							<div class="flex items-center gap-4 p-6 bg-slate-800/50 rounded-lg">
								<Button size="sm">Small</Button>
								<Button size="md">Medium</Button>
								<Button size="lg">Large</Button>
							</div>
						</div>
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Code</h4>
							<CodeBlock language="svelte" code={examples.sizes} />
						</div>
					</div>
				</div>
			</div>
		{:else if activeExample === 'states'}
			<div class="space-y-8" in:glassFade>
				<div>
					<h3>Button States</h3>
					<p class="text-white/70 mb-6">Different states and special effects.</p>
					
					<div class="grid md:grid-cols-2 gap-8">
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Preview</h4>
							<div class="flex flex-wrap gap-4 p-6 bg-slate-800/50 rounded-lg">
								<Button disabled>Disabled</Button>
								<Button loading>Loading</Button>
								<Button glass={true}>Glass Effect</Button>
							</div>
						</div>
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Code</h4>
							<CodeBlock language="svelte" code={examples.states} />
						</div>
					</div>
				</div>
			</div>
		{:else if activeExample === 'advanced'}
			<div class="space-y-8" in:glassFade>
				<div>
					<h3>Advanced Usage</h3>
					<p class="text-white/70 mb-6">Complex button with all features enabled.</p>
					
					<div class="grid md:grid-cols-2 gap-8">
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Preview</h4>
							<div class="flex justify-center p-6 bg-slate-800/50 rounded-lg">
								<Button 
									variant="primary" 
									size="lg"
									glass={true}
									animate={true}
								>
									Deploy to Production
								</Button>
							</div>
						</div>
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Code</h4>
							<CodeBlock language="svelte" code={examples.advanced} />
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="space-y-8" in:glassFade>
				<div>
					<h3>Basic Usage</h3>
					<p class="text-white/70 mb-6">Simple button with default styling.</p>
					
					<div class="grid md:grid-cols-2 gap-8">
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Preview</h4>
							<div class="flex justify-center p-6 bg-slate-800/50 rounded-lg">
								<Button>Click me</Button>
							</div>
						</div>
						<div class="space-y-4">
							<h4 class="text-lg font-medium">Code</h4>
							<CodeBlock language="svelte" code={examples.basic} />
						</div>
					</div>
				</div>
			</div>
		{/if}
	</section>

	<!-- API Reference -->
	<section class="mb-16">
		<h2>API Reference</h2>
		
		<!-- Props -->
		<div class="mb-12">
			<h3>Props</h3>
			<div class="overflow-x-auto">
				<table class="w-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
					<thead>
						<tr class="border-b border-white/10">
							<th class="text-left p-4 font-medium text-white/90">Prop</th>
							<th class="text-left p-4 font-medium text-white/90">Type</th>
							<th class="text-left p-4 font-medium text-white/90">Default</th>
							<th class="text-left p-4 font-medium text-white/90">Description</th>
						</tr>
					</thead>
					<tbody>
						{#each propsTable as row}
							<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
								<td class="p-4 font-mono text-blue-300">{row.prop}</td>
								<td class="p-4 font-mono text-sm text-purple-300">{row.type}</td>
								<td class="p-4 font-mono text-sm text-green-300">{row.default}</td>
								<td class="p-4 text-white/80">{row.description}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<!-- Events -->
		<div class="mb-12">
			<h3>Events</h3>
			<div class="overflow-x-auto">
				<table class="w-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
					<thead>
						<tr class="border-b border-white/10">
							<th class="text-left p-4 font-medium text-white/90">Event</th>
							<th class="text-left p-4 font-medium text-white/90">Type</th>
							<th class="text-left p-4 font-medium text-white/90">Description</th>
						</tr>
					</thead>
					<tbody>
						{#each eventsTable as row}
							<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
								<td class="p-4 font-mono text-blue-300">{row.event}</td>
								<td class="p-4 font-mono text-sm text-purple-300">{row.type}</td>
								<td class="p-4 text-white/80">{row.description}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Accessibility -->
	<section class="mb-16">
		<h2>Accessibility</h2>
		<div class="space-y-6">
			<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
				<h3 class="text-lg font-medium mb-4">Built-in Features</h3>
				<ul class="space-y-2 text-white/80">
					<li class="flex items-start space-x-2">
						<span class="text-green-400 mt-1">•</span>
						<span>Keyboard navigation support (Enter and Space keys)</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-green-400 mt-1">•</span>
						<span>Focus management with visible focus indicators</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-green-400 mt-1">•</span>
						<span>Screen reader compatible with proper ARIA attributes</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-green-400 mt-1">•</span>
						<span>Disabled state properly communicated to assistive technologies</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-green-400 mt-1">•</span>
						<span>Loading state with aria-busy and aria-label support</span>
					</li>
				</ul>
			</div>
			
			<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
				<h3 class="text-lg font-medium mb-4">Best Practices</h3>
				<ul class="space-y-2 text-white/80">
					<li class="flex items-start space-x-2">
						<span class="text-blue-400 mt-1">•</span>
						<span>Always provide meaningful button text or aria-label</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-blue-400 mt-1">•</span>
						<span>Use appropriate variant (danger for destructive actions)</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-blue-400 mt-1">•</span>
						<span>Consider loading states for async operations</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-blue-400 mt-1">•</span>
						<span>Ensure sufficient color contrast in custom themes</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Related Components -->
	<section>
		<h2>Related Components</h2>
		<div class="grid md:grid-cols-3 gap-6">
			<a 
				href="/docs/components/input" 
				class="block p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-slate-900/70 hover:scale-105 transition-all duration-300"
			>
				<h3 class="text-lg font-medium mb-2">Input</h3>
				<p class="text-white/70 text-sm">Form input component with glass effects</p>
			</a>
			<a 
				href="/docs/components/modal" 
				class="block p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-slate-900/70 hover:scale-105 transition-all duration-300"
			>
				<h3 class="text-lg font-medium mb-2">Modal</h3>
				<p class="text-white/70 text-sm">Dialog component for forms and confirmations</p>
			</a>
			<a 
				href="/docs/components/badge" 
				class="block p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-slate-900/70 hover:scale-105 transition-all duration-300"
			>
				<h3 class="text-lg font-medium mb-2">Badge</h3>
				<p class="text-white/70 text-sm">Status indicators and labels</p>
			</a>
		</div>
	</section>
</div>