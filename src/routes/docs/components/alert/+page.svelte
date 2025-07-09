<script lang="ts">
	import { onMount } from 'svelte';
	import Alert from '$lib/components/Alert.svelte';
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
		description: 'Alert messages with various severity levels and terminal aesthetics.',
		category: 'Feedback',
		complexity: 'Simple',
		since: '0.1.0'
	};

	// Code examples (auto-synced with source)
	const examples = {
		basic: '<Alert>\n  Content\n</Alert>',
		variants:
			"<Alert variant='success'>\n  Success\n</Alert>\n<Alert variant='error'>\n  Error\n</Alert>\n<Alert variant='warning'>\n  Warning\n</Alert>\n<Alert variant='info'>\n  Info\n</Alert>\n<Alert variant='terminal'>\n  Terminal\n</Alert>",
		advanced:
			"<Alert\n\tvariant={'default'}\n\ttitle={''}\n\tdescription={''}\n\tclosable={true}\n>\n\tAdvanced Usage\n</Alert>"
	};

	// Props table data (extracted from .d.ts)
	const propsData = [
		{
			name: 'variant',
			type: "'success' | 'error' | 'warning' | 'info' | 'terminal'",
			optional: true,
			default: "'default'",
			description: 'Visual style variant of the component'
		},
		{
			name: 'title',
			type: 'string',
			optional: true,
			default: "''",
			description: 'title property'
		},
		{
			name: 'description',
			type: 'string',
			optional: true,
			default: "''",
			description: 'description property'
		},
		{
			name: 'closable',
			type: 'boolean',
			optional: true,
			default: 'true',
			description: 'Allow closing the component'
		},
		{
			name: 'animated',
			type: 'boolean',
			optional: true,
			default: 'false',
			description: 'animated property'
		},
		{
			name: 'glow',
			type: 'boolean',
			optional: true,
			default: 'false',
			description: 'glow property'
		},
		{
			name: 'jelly',
			type: 'boolean',
			optional: true,
			default: 'false',
			description: 'jelly property'
		},
		{
			name: 'icon',
			type: 'boolean',
			optional: true,
			default: 'false',
			description: 'icon property'
		},
		{
			name: 'position',
			type: "'static' | 'fixed'",
			optional: true,
			default: 'undefined',
			description: 'position property'
		},
		{
			name: 'placement',
			type: "'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
			optional: true,
			default: 'undefined',
			description: 'placement property'
		},
		{
			name: 'class',
			type: 'string',
			optional: true,
			default: "''",
			description: 'Additional CSS classes'
		},
		{
			name: 'onclose',
			type: '() => void',
			optional: true,
			default: 'undefined',
			description: 'onclose property'
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
		variant: {
			type: 'string',
			default: 'default',
			options: ['success', 'error', 'warning', 'info', 'terminal']
		},
		title: {
			type: 'string',
			default: '',
			options: null
		},
		description: {
			type: 'string',
			default: '',
			options: null
		},
		closable: {
			type: 'boolean',
			default: true,
			options: null
		},
		animated: {
			type: 'boolean',
			default: false,
			options: null
		},
		glow: {
			type: 'boolean',
			default: false,
			options: null
		},
		jelly: {
			type: 'boolean',
			default: false,
			options: null
		},
		icon: {
			type: 'boolean',
			default: false,
			options: null
		},
		position: {
			type: 'string',
			default: undefined,
			options: ['static', 'fixed']
		},
		placement: {
			type: 'string',
			default: undefined,
			options: ['top', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left']
		},
		class: {
			type: 'string',
			default: '',
			options: null
		},
		onclose: {
			type: 'string',
			default: undefined,
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
	<title>Alert Component - A Hacker's Brand</title>
	<meta name="description" content="Alert messages with various severity levels and terminal aesthetics." />
</svelte:head>

<div class="docs-content">
	<!-- Hero Section -->
	<section class="mb-12">
		<div class="flex items-start justify-between mb-6">
			<div>
				<h1 class="text-4xl lg:text-5xl font-bold mb-4">Alert</h1>
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
				<Alert>Preview</Alert>
				<Alert variant="secondary">Secondary</Alert>
				<Alert variant="ghost">Ghost</Alert>
			</div>
		</div>
	</section>

	<!-- Interactive Playground -->
	<section class="mb-16">
		<h2 class="text-2xl lg:text-3xl font-bold mb-6">Interactive Playground</h2>
		<p class="text-white/70 mb-8">Experiment with different props and see the changes in real-time.</p>
		<ComponentPlayground component={Alert} props={playgroundProps} componentName="Alert" />
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
									<Alert>Example</Alert>
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
