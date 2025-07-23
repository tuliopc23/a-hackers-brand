<script lang="ts">
	import { cn } from '$lib/utils';
	import { glassFade } from '$lib/motion';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

	interface Props {
		title?: string;
		description?: string;
		component?: any;
		props?: Record<string, any>;
		variants?: Record<string, any>;
		code?: string;
		class?: string;
		showCode?: boolean;
		interactive?: boolean;
	}

	const {
		title = 'Component Playground',
		description = 'Interactive component demonstration',
		component,
		props = {},
		variants = {},
		code = '',
		class: className = '',
		showCode = true,
		interactive = true
	}: Props = $props();

	let currentVariant = $state('default');
	let currentProps = $state({ ...props });
	let showCodeView = $state(false);

	const toggleCode = () => {
		showCodeView = !showCodeView;
	};

	const updateProp = (key: string, value: any) => {
		currentProps = { ...currentProps, [key]: value };
	};

	const switchVariant = (variant: string) => {
		currentVariant = variant;
		currentProps = { ...props, ...variants[variant] };
	};

	const generateCode = () => {
		if (code) return code;

		const propsStr = Object.entries(currentProps)
			.map(([key, value]) => {
				if (typeof value === 'string') return `${key}="${value}"`;
				if (typeof value === 'boolean') return value ? key : '';
				return `${key}={${JSON.stringify(value)}}`;
			})
			.filter(Boolean)
			.join(' ');

		return `<${component?.name || 'Component'} ${propsStr} />`;
	};
</script>

<div class={cn('space-y-6', className)}>
	<!-- Header -->
	<div class="space-y-2">
		<h3 class="text-xl font-semibold text-white">{title}</h3>
		{#if description}
			<p class="text-neutral-400">{description}</p>
		{/if}
	</div>

	<!-- Variant Selector -->
	{#if Object.keys(variants).length > 0}
		<div class="flex flex-wrap gap-2">
			<Button
				variant={currentVariant === 'default' ? 'primary' : 'ghost'}
				size="sm"
				onclick={() => switchVariant('default')}
			>
				Default
			</Button>
			{#each Object.keys(variants) as variant}
				<Button
					variant={currentVariant === variant ? 'primary' : 'ghost'}
					size="sm"
					onclick={() => switchVariant(variant)}
				>
					{variant}
				</Button>
			{/each}
		</div>
	{/if}

	<!-- Playground Area -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<!-- Preview -->
		<Card variant="glass" class="p-6">
			<h4 class="text-lg font-medium text-white mb-4">Preview</h4>
			<div class="p-4 rounded-lg bg-neutral-900/50 border border-neutral-700">
				{#if component}
					{@const Component = component}
					<Component {...currentProps} />
				{:else}
					<div class="text-neutral-500 text-center py-8">No component provided</div>
				{/if}
			</div>
		</Card>

		<!-- Controls -->
		{#if interactive}
			<Card variant="glass" class="p-6">
				<h4 class="text-lg font-medium text-white mb-4">Controls</h4>
				<div class="space-y-4">
					{#each Object.entries(currentProps) as [key, value]}
						<div class="space-y-2">
							<label class="text-sm font-medium text-neutral-300">{key}</label>
							{#if typeof value === 'boolean'}
								<label class="flex items-center space-x-2">
									<input
										type="checkbox"
										checked={value}
										onchange={(e) => updateProp(key, e.target.checked)}
										class="rounded border-neutral-600 bg-neutral-800 text-primary-500"
									/>
									<span class="text-sm text-neutral-400">Enable {key}</span>
								</label>
							{:else if typeof value === 'string'}
								<input
									type="text"
									{value}
									oninput={(e) => updateProp(key, e.target.value)}
									class="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-600 text-white"
								/>
							{:else if typeof value === 'number'}
								<input
									type="number"
									{value}
									oninput={(e) => updateProp(key, Number(e.target.value))}
									class="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-600 text-white"
								/>
							{:else}
								<input
									type="text"
									value={JSON.stringify(value)}
									oninput={(e) => {
										try {
											updateProp(key, JSON.parse(e.target.value));
										} catch {
											// Invalid JSON, ignore
										}
									}}
									class="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-600 text-white font-mono text-sm"
								/>
							{/if}
						</div>
					{/each}
				</div>
			</Card>
		{/if}
	</div>

	<!-- Code View -->
	{#if showCode}
		<div class="space-y-4">
			<div class="flex items-center justify-between">
				<h4 class="text-lg font-medium text-white">Code</h4>
				<Button variant="ghost" size="sm" onclick={toggleCode}>
					{showCodeView ? 'Hide' : 'Show'} Code
				</Button>
			</div>

			{#if showCodeView}
				<div transition:glassFade>
					<CodeBlock language="svelte" code={generateCode()} showLineNumbers={false} class="rounded-lg" />
				</div>
			{/if}
		</div>
	{/if}
</div>
