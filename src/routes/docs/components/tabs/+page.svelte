<script lang="ts">
	import { onMount } from 'svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import ComponentPlayground from '$lib/docs/ComponentPlayground.svelte';
	import PropsTable from '$lib/docs/PropsTable.svelte';
	import EventsTable from '$lib/docs/EventsTable.svelte';
	import { glassFade } from '$lib/motion';

	let mounted = false;
	let activeExample = 'basic';

	onMount(() => {
		mounted = true;
	});

	// Component metadata
	const componentMeta = {
		description: 'Tabbed interface component with smooth transitions and keyboard navigation.',
		category: 'Navigation',
		complexity: 'Medium',
		since: '0.1.0'
	};

	// Code examples (auto-synced with source)
	const examples = {
		basic: '<Tabs>\n  Content\n</Tabs>',
		variants:
			"<Tabs variant='default'>\n  Default\n</Tabs>\n<Tabs variant='glass'>\n  Glass\n</Tabs>\n<Tabs variant='terminal'>\n  Terminal\n</Tabs>",
		advanced:
			"<Tabs\n\ttabs={undefined}\n\tactiveTab={''}\n\tvariant={'default'}\n\tsize={'md'}\n>\n\tAdvanced Usage\n</Tabs>"
	};

	// Props table data (extracted from .d.ts)
	const propsData = [
		{
			name: 'tabs',
			type: 'Tab[]',
			optional: false,
			default: 'undefined',
			description: 'tabs property'
		},
		{
			name: 'activeTab',
			type: 'string',
			optional: true,
			default: "''",
			description: 'activeTab property'
		},
		{
			name: 'variant',
			type: "'default' | 'glass' | 'terminal'",
			optional: true,
			default: "'default'",
			description: 'Visual style variant of the component'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			optional: true,
			default: "'md'",
			description: 'Size variant of the component'
		},
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			optional: true,
			default: 'undefined',
			description: 'orientation property'
		},
		{
			name: 'blur',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			optional: true,
			default: 'undefined',
			description: 'blur property'
		},
		{
			name: 'animate',
			type: 'boolean',
			optional: true,
			default: 'true',
			description: 'Enable entry animations'
		},
		{
			name: 'reduceMotion',
			type: 'boolean',
			optional: true,
			default: 'false',
			description: 'reduceMotion property'
		},
		{
			name: 'aria-label',
			type: 'string',
			optional: true,
			default: "''",
			description: 'aria-label property'
		},
		{
			name: 'class',
			type: 'string',
			optional: true,
			default: "''",
			description: 'Additional CSS classes'
		},
		{
			name: 'children',
			type: 'any',
			optional: true,
			default: 'undefined',
			description: 'Component children/content'
		},
		{
			name: 'onTabChange',
			type: '(tabId: string) => void',
			optional: true,
			default: "''",
			description: 'onTabChange property'
		}
	];

	// Events table data
	const eventsData = [
		{
			name: 'click',
			type: 'MouseEvent',
			description: 'Fired when component is clicked'
		},
		{
			name: 'focus',
			type: 'FocusEvent',
			description: 'Fired when component receives focus'
		},
		{
			name: 'blur',
			type: 'FocusEvent',
			description: 'Fired when component loses focus'
		}
	];

	// Playground props configuration
	const playgroundProps = {
		tabs: {
			type: 'string',
			default: undefined,
			options: null
		},
		activeTab: {
			type: 'string',
			default: '',
			options: null
		},
		variant: {
			type: 'string',
			default: 'default',
			options: ['default', 'glass', 'terminal']
		},
		size: {
			type: 'string',
			default: 'md',
			options: ['sm', 'md', 'lg']
		},
		orientation: {
			type: 'string',
			default: undefined,
			options: ['horizontal', 'vertical']
		},
		blur: {
			type: 'string',
			default: undefined,
			options: ['sm', 'md', 'lg', 'xl']
		},
		animate: {
			type: 'boolean',
			default: true,
			options: null
		},
		reduceMotion: {
			type: 'boolean',
			default: false,
			options: null
		},
		'aria-label': {
			type: 'string',
			default: '',
			options: null
		},
		class: {
			type: 'string',
			default: '',
			options: null
		},
		children: {
			type: 'string',
			default: undefined,
			options: null
		},
		onTabChange: {
			type: 'string',
			default: '',
			options: null
		}
	};

	const exampleTabs = Object.keys(examples).map((key) => ({
		id: key,
		label: key.charAt(0).toUpperCase() + key.slice(1),
		code: examples[key]
	}));
</script>

<svelte:head>
	<title>Tabs Component - A Hacker's Brand</title>
	<meta name="description" content="Tabbed interface component with smooth transitions and keyboard navigation." />
</svelte:head>

<div class="docs-content">
	<!-- Hero Section -->
	<section class="mb-12">
		<div class="flex items-start justify-between mb-6">
			<div>
				<h1 class="text-4xl lg:text-5xl font-bold mb-4">Tabs</h1>
				<div class="flex gap-2 mb-4">
					<span class="px-3 py-1 bg-terminal-blue/20 text-terminal-blue text-sm rounded-full">
						{componentMeta.category}
					</span>
					<span class="px-3 py-1 bg-terminal-purple/20 text-terminal-purple text-sm rounded-full">
						{componentMeta.complexity}
					</span>
					<span class="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded-full">
						v{componentMeta.since}
					</span>
				</div>
			</div>
		</div>

		<p class="text-xl lg:text-2xl text-white/70 mb-8 max-w-4xl">
			{componentMeta.description}
		</p>

		<!-- Quick Preview -->
		<div class="p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10">
			<div class="flex flex-wrap gap-4 items-center justify-center">
				<Tabs>Preview</Tabs>
				<Tabs variant="secondary">Secondary</Tabs>
				<Tabs variant="ghost">Ghost</Tabs>
			</div>
		</div>
	</section>

	<!-- Interactive Playground -->
	<section class="mb-16">
		<h2 class="text-2xl lg:text-3xl font-bold mb-6">Interactive Playground</h2>
		<p class="text-white/70 mb-8">Experiment with different props and see the changes in real-time.</p>
		<ComponentPlayground component={Tabs} props={playgroundProps} componentName="Tabs" />
	</section>

	<!-- Code Examples -->
	<section class="mb-16">
		<h2 class="text-2xl lg:text-3xl font-bold mb-6">Examples</h2>

		<!-- Example Navigation -->
		<div class="flex flex-wrap gap-2 mb-8">
			{#each exampleTabs as tab}
				<button
					class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {activeExample === tab.id
						? 'bg-terminal-blue/20 text-terminal-blue border border-terminal-blue/30'
						: 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}"
					onclick={() => (activeExample = tab.id)}
				>
					{tab.label}
				</button>
			{/each}
		</div>

		<!-- Example Content -->
		{#each exampleTabs as tab}
			{#if activeExample === tab.id}
				<div class="space-y-8" in:glassFade>
					<div>
						<h3 class="text-xl font-semibold mb-4">{tab.label} Usage</h3>

						<div class="grid lg:grid-cols-2 gap-8">
							<div class="space-y-4">
								<h4 class="text-lg font-medium">Preview</h4>
								<div class="p-6 bg-slate-800/50 rounded-lg border border-white/10">
									<!-- Dynamic preview would go here -->
									<Tabs>Example</Tabs>
								</div>
							</div>
							<div class="space-y-4">
								<h4 class="text-lg font-medium">Code</h4>
								<CodeBlock language="svelte" code={tab.code} />
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</section>

	<!-- API Reference -->
	<section class="mb-16">
		<h2 class="text-2xl lg:text-3xl font-bold mb-6">API Reference</h2>

		<!-- Props -->
		<div class="mb-12">
			<h3 class="text-xl font-semibold mb-6">Props</h3>
			<PropsTable props={propsData} />
		</div>

		<!-- Events -->
		<div class="mb-12">
			<h3 class="text-xl font-semibold mb-6">Events</h3>
			<EventsTable events={eventsData} />
		</div>
	</section>

	<!-- Accessibility -->
	<section class="mb-16">
		<h2 class="text-2xl lg:text-3xl font-bold mb-6">Accessibility</h2>
		<div class="space-y-6">
			<div class="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
				<h3 class="text-lg font-medium mb-4">Built-in Features</h3>
				<ul class="space-y-2 text-white/80">
					<li class="flex items-start space-x-2">
						<span class="text-terminal-green mt-1">•</span>
						<span>Keyboard navigation support</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-terminal-green mt-1">•</span>
						<span>Focus management with visible indicators</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-terminal-green mt-1">•</span>
						<span>Screen reader compatible</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-terminal-green mt-1">•</span>
						<span>ARIA attributes and roles</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Related Components -->
	<section>
		<h2 class="text-2xl lg:text-3xl font-bold mb-6">Related Components</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Dynamic related components would be generated here -->
			<a
				href="/docs/components/button"
				class="block p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-slate-900/70 hover:scale-105 transition-all duration-300"
			>
				<h3 class="text-lg font-medium mb-2">Button</h3>
				<p class="text-white/70 text-sm">Interactive buttons with effects</p>
			</a>
		</div>
	</section>
</div>

<style>
	.docs-content {
		@apply max-w-6xl mx-auto px-6 py-12;
	}

	h1,
	h2,
	h3,
	h4 {
		@apply text-white font-mono;
	}

	h1 {
		background: linear-gradient(135deg, #00ff94, #0099ff, #9c40ff);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
