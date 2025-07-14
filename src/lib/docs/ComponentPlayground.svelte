<script lang="ts">
	import { onMount } from 'svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	interface PlaygroundProps {
		component: any;
		props: Record<string, any>;
		componentName: string;
	}

	const { component: Component, props, componentName }: PlaygroundProps = $props();

	const currentProps = $state({});
	let generatedCode = $state('');

	onMount(() => {
		// Initialize with default values
		Object.keys(props).forEach((key) => {
			currentProps[key] = props[key].default;
		});
		updateCode();
	});

	function updateCode() {
		const activeProps = Object.entries(currentProps)
			.filter(([key, value]) => value !== props[key].default)
			.map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
			.join(' ');

		generatedCode = `<${componentName}${activeProps ? ' ' + activeProps : ''}>
	Content
</${componentName}>`;
	}

	function handlePropChange(propName: string, value: any) {
		currentProps[propName] = value;
		updateCode();
	}
</script>

<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
	<div class="grid lg:grid-cols-2 gap-8">
		<!-- Controls -->
		<div class="space-y-6">
			<h4 class="text-lg font-medium">Props</h4>
			{#each Object.entries(props) as [propName, config] (propName)}
				<div class="space-y-2">
					<label class="block text-sm font-medium text-white/80">
						{propName}
						<span class="text-white/50 text-xs ml-2">{config.type}</span>
					</label>
					{#if config.type === 'boolean'}
						<input
							type="checkbox"
							bind:checked={currentProps[propName]}
							onchange={() => handlePropChange(propName, currentProps[propName])}
							class="w-4 h-4 rounded border-white/20 bg-slate-800"
						/>
					{:else if config.options}
						<select
							bind:value={currentProps[propName]}
							onchange={() => handlePropChange(propName, currentProps[propName])}
							class="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white"
						>
							{#each config.options as option (option.id || option)}
								<option value={option}>{option}</option>
							{/each}
						</select>
					{:else}
						<input
							type="text"
							bind:value={currentProps[propName]}
							onchange={() => handlePropChange(propName, currentProps[propName])}
							class="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white"
						/>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Preview & Code -->
		<div class="space-y-6">
			<div class="space-y-4">
				<h4 class="text-lg font-medium">Preview</h4>
				<div class="p-6 bg-slate-800/50 rounded-lg border border-white/10 flex items-center justify-center">
					<Component {...currentProps}>Playground Content</Component>
				</div>
			</div>

			<div class="space-y-4">
				<h4 class="text-lg font-medium">Generated Code</h4>
				<CodeBlock language="svelte" code={generatedCode} />
			</div>
		</div>
	</div>
</div>
