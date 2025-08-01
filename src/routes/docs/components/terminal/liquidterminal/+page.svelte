<script lang="ts">
	import { LiquidTerminal } from '$lib/components';
	import ComponentPlayground from '$lib/docs/ComponentPlayground.svelte';
	import PropsTable from '$lib/docs/PropsTable.svelte';
	import EventsTable from '$lib/docs/EventsTable.svelte';
	import CodeBlock from '$lib/docs/CodeBlock.svelte';
	import { Badge, Alert } from '$lib/components';
	
	const componentMeta = {
		name: 'LiquidTerminal',
		description: 'Terminal with liquid glass morphism effects',
		category: 'terminal',
		complexity: 'complex',
		since: '0.2.0'
	};
	
	// TODO: Extract these from TypeScript definitions
	const props = [
		
	];
	
	const events = [
		{ name: 'click', type: 'MouseEvent', description: 'Fired when the component is clicked' }
	];
	
	const playgroundProps = [
		
	];
	
	const basicExample = `<LiquidTerminal />`;
	
	const advancedExample = `<script>
  import { LiquidTerminal } from 'a-hackers-brand';
  
  let value = $state('');
</script>

<LiquidTerminal />
`;
</script>

<svelte:head>
	<title>{componentMeta.name} - A Hacker's Brand</title>
	<meta name="description" content={componentMeta.description} />
</svelte:head>

<div class="prose prose-invert max-w-none">
	<header class="mb-8">
		<div class="flex items-center gap-3 mb-4">
			<h1 class="text-4xl font-bold text-green-400 inline-block">
				{componentMeta.name}
			</h1>
			<Badge variant="error">
				{componentMeta.complexity}
			</Badge>
			<Badge variant="default">
				v{componentMeta.since}
			</Badge>
		</div>
		<p class="text-xl text-gray-400">
			{componentMeta.description}
		</p>
	</header>
	
	<!-- Preview Section -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Preview</h2>
		<div class="p-8 border border-green-500/20 rounded-lg bg-black/50 flex items-center justify-center min-h-[200px]">
			<LiquidTerminal />
		</div>
	</section>
	
	<!-- Interactive Playground -->
	{#if playgroundProps.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4 text-green-400">Interactive Playground</h2>
			<ComponentPlayground 
				componentName="LiquidTerminal"
				component={LiquidTerminal} 
				props={playgroundProps} 
			/>
		</section>
	{/if}
	
	<!-- Code Examples -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Examples</h2>
		
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold mb-2">Basic Usage</h3>
				<CodeBlock code={basicExample} language="svelte" />
			</div>
			
			<div>
				<h3 class="text-lg font-semibold mb-2">Advanced Usage</h3>
				<CodeBlock code={advancedExample} language="svelte" />
			</div>
		</div>
	</section>
	
	<!-- API Reference -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">API Reference</h2>
		
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold mb-2">Props</h3>
				<PropsTable {props} />
			</div>
			
			{#if events.length > 0}
				<div>
					<h3 class="text-lg font-semibold mb-2">Events</h3>
					<EventsTable {events} />
				</div>
			{/if}
		</div>
	</section>
	
	<!-- Accessibility -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Accessibility</h2>
		<Alert variant="info">
			This component follows WCAG 2.1 AA standards with full keyboard navigation support.
		</Alert>
		<ul class="list-disc list-inside text-gray-400 mt-4 space-y-2">
			<li>Keyboard accessible with Tab navigation</li>
			<li>ARIA labels for screen readers</li>
			<li>Focus indicators for keyboard users</li>
			<li>Color contrast ratios meet WCAG standards</li>
		</ul>
	</section>
	
	<!-- Related Components -->
	<section>
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Related Components</h2>
		<div class="flex flex-wrap gap-2">
			<a href="/docs/components/terminal" class="text-green-400 hover:underline">
				View all terminal components →
			</a>
		</div>
	</section>
</div>