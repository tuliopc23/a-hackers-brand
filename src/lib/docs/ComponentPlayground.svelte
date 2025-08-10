<script lang="ts">
	import { Button, GlassCard, Select, Switch, Input } from '$lib/components';
	import CodeBlock from './CodeBlock.svelte';
	
	interface PropControl {
		name: string;
		type: 'boolean' | 'string' | 'number' | 'select';
		defaultValue: any;
		options?: string[];
		description?: string;
	}
	
	interface Props {
		componentName: string;
		component: any;
		props: PropControl[];
		class?: string;
	}
	
	let { 
		componentName,
		component: Component,
		props: propControls = [],
		class: className = ''
	}: Props = $props();
	
	// Create reactive state for each prop
	let propValues = $state(
		propControls.reduce((acc, prop) => {
			acc[prop.name] = prop.defaultValue;
			return acc;
		}, {} as Record<string, any>)
	);
	
	// Generate code based on current prop values
	const generatedCode = $derived(() => {
		const props = Object.entries(propValues)
			.filter(([_, value]) => value !== undefined && value !== '')
			.map(([key, value]) => {
				if (typeof value === 'boolean') {
					return value ? key : null;
				}
				if (typeof value === 'string') {
					return `${key}="${value}"`;
				}
				if (typeof value === 'number') {
					return `${key}={${value}}`;
				}
				return `${key}={${JSON.stringify(value)}}`;
			})
			.filter(Boolean)
			.join(' ');
		
		return `<${componentName}${props ? ' ' + props : ''} />`;
	});
	
	function resetProps() {
		propValues = propControls.reduce((acc, prop) => {
			acc[prop.name] = prop.defaultValue;
			return acc;
		}, {} as Record<string, any>);
	}
</script>

<div class="space-y-6 {className}">
	<!-- Preview -->
	<div>
		<h3 class="text-lg font-semibold mb-3 text-green-400">Preview</h3>
		<GlassCard class="p-8 flex items-center justify-center min-h-[200px]">
			<Component {...propValues} />
		</GlassCard>
	</div>
	
	<!-- Controls -->
	<div>
		<div class="flex items-center justify-between mb-3">
			<h3 class="text-lg font-semibold text-green-400">Props</h3>
			<Button variant="ghost" size="sm" onclick={resetProps}>
				Reset
			</Button>
		</div>
		<GlassCard class="p-4 space-y-4">
			{#each propControls as control (control.name)}
				<div class="space-y-2">
					<label class="block text-sm font-mono text-gray-300">
						{control.name}
						{#if control.description}
							<span class="text-xs text-gray-500 ml-2 font-sans">
								{control.description}
							</span>
						{/if}
					</label>
					
					{#if control.type === 'boolean'}
						<Switch
							checked={propValues[control.name]}
							onCheckedChange={(checked) => propValues[control.name] = checked}
						/>
					{:else if control.type === 'select' && control.options}
						<Select
							value={propValues[control.name]}
							onValueChange={(value) => propValues[control.name] = value}
						>
							{#each control.options as option (option)}
								<option value={option}>{option}</option>
							{/each}
						</Select>
					{:else if control.type === 'string'}
						<Input
							type="text"
							bind:value={propValues[control.name]}
							placeholder={`Enter ${control.name}...`}
						/>
					{:else if control.type === 'number'}
						<Input
							type="number"
							bind:value={propValues[control.name]}
							placeholder={`Enter ${control.name}...`}
						/>
					{/if}
				</div>
			{/each}
			
			{#if propControls.length === 0}
				<p class="text-gray-500 text-sm">
					No interactive props available for this component.
				</p>
			{/if}
		</GlassCard>
	</div>
	
	<!-- Generated Code -->
	<div>
		<h3 class="text-lg font-semibold mb-3 text-green-400">Code</h3>
		<CodeBlock code={generatedCode()} language="svelte" />
	</div>
</div>