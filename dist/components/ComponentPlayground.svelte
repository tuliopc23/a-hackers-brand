<script lang="ts">
	import { onMount } from 'svelte';
	import { glassFade } from '../motion';
	import CodeBlock from './CodeBlock.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Badge from './Badge.svelte';
	import Switch from './Switch.svelte';
	import Modal from './Modal.svelte';

	export let selectedComponent = 'Button';

	let mounted = false;
	let componentProps: Record<string, any> = {};
	let showPreview = true;

	onMount(() => {
		mounted = true;
		resetProps();
	});

	// Component configurations
	const componentConfigs = {
		Button: {
			component: Button,
			defaultProps: {
				variant: 'primary',
				size: 'md',
				glass: true,
				disabled: false,
				animate: true
			},
			propTypes: {
				variant: { type: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
				size: { type: 'select', options: ['sm', 'md', 'lg'] },
				glass: { type: 'boolean' },
				disabled: { type: 'boolean' },
				animate: { type: 'boolean' }
			},
			children: 'Click Me'
		},
		Input: {
			component: Input,
			defaultProps: {
				variant: 'default',
				size: 'md',
				placeholder: 'Enter text...',
				label: 'Label',
				disabled: false,
				animate: true
			},
			propTypes: {
				variant: { type: 'select', options: ['default', 'glass', 'terminal'] },
				size: { type: 'select', options: ['sm', 'md', 'lg'] },
				placeholder: { type: 'text' },
				label: { type: 'text' },
				disabled: { type: 'boolean' },
				animate: { type: 'boolean' }
			}
		},
		Badge: {
			component: Badge,
			defaultProps: {
				variant: 'default',
				size: 'md',
				glass: true,
				interactive: false,
				animate: true
			},
			propTypes: {
				variant: { type: 'select', options: ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error'] },
				size: { type: 'select', options: ['sm', 'md', 'lg'] },
				glass: { type: 'boolean' },
				interactive: { type: 'boolean' },
				animate: { type: 'boolean' }
			},
			children: 'Badge'
		},
		Switch: {
			component: Switch,
			defaultProps: {
				label: 'Enable feature',
				description: 'Toggle this feature on or off',
				disabled: false,
				animate: true
			},
			propTypes: {
				label: { type: 'text' },
				description: { type: 'text' },
				disabled: { type: 'boolean' },
				animate: { type: 'boolean' }
			}
		}
	};

	// Reset props to defaults when component changes
	function resetProps() {
		const config = componentConfigs[selectedComponent];
		if (config) {
			componentProps = { ...config.defaultProps };
		}
	}

	// Generate code snippet
	function generateCode(): string {
		const config = componentConfigs[selectedComponent];
		if (!config) return '';

		const props = Object.entries(componentProps)
			.filter(([key, value]) => value !== config.defaultProps[key])
			.map(([key, value]) => {
				if (typeof value === 'string') {
					return `${key}="${value}"`;
				} else if (typeof value === 'boolean') {
					return value ? key : `${key}={false}`;
				}
				return `${key}={${JSON.stringify(value)}}`;
			})
			.join('\n\t');

		const openTag = props 
			? `<${selectedComponent}\n\t${props}\n>`
			: `<${selectedComponent}>`;

		if (config.children) {
			return `${openTag}\n\t${config.children}\n</${selectedComponent}>`;
		} else {
			return props 
				? `<${selectedComponent}\n\t${props}\n/>`
				: `<${selectedComponent} />`;
		}
	}

	// Copy code to clipboard
	async function copyCode() {
		try {
			await navigator.clipboard.writeText(generateCode());
			// Could add toast notification here
		} catch (err) {
			console.error('Failed to copy code:', err);
		}
	}

	// Watch for component changes
	$: if (selectedComponent && mounted) {
		resetProps();
	}

	$: currentConfig = componentConfigs[selectedComponent];
</script>

<div class="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
	<!-- Header -->
	<div class="border-b border-white/10 p-6">
		<div class="flex items-center justify-between">
			<h3 class="text-xl font-semibold text-white">Component Playground</h3>
			<div class="flex items-center space-x-2">
				<button 
					class="px-3 py-1 text-sm rounded-lg transition-colors {showPreview ? 'bg-blue-500/20 text-blue-300' : 'text-white/60 hover:text-white'}"
					on:click={() => showPreview = true}
				>
					Preview
				</button>
				<button 
					class="px-3 py-1 text-sm rounded-lg transition-colors {!showPreview ? 'bg-blue-500/20 text-blue-300' : 'text-white/60 hover:text-white'}"
					on:click={() => showPreview = false}
				>
					Code
				</button>
			</div>
		</div>
	</div>

	<div class="grid lg:grid-cols-3">
		<!-- Props Panel -->
		<div class="border-r border-white/10 p-6 space-y-4">
			<h4 class="text-lg font-medium text-white/90 mb-4">Properties</h4>
			
			{#if currentConfig}
				{#each Object.entries(currentConfig.propTypes) as [propName, propConfig]}
					<div class="space-y-2">
						<label class="block text-sm font-medium text-white/70" for={propName}>
							{propName}
						</label>
						
						{#if propConfig.type === 'select'}
							<select 
								id={propName}
								class="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white text-sm focus:border-blue-400 focus:outline-none"
								bind:value={componentProps[propName]}
							>
								{#each propConfig.options as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
						{:else if propConfig.type === 'boolean'}
							<div class="flex items-center">
								<input 
									id={propName}
									type="checkbox" 
									class="w-4 h-4 bg-slate-800 border border-white/20 rounded focus:ring-blue-400"
									bind:checked={componentProps[propName]}
								/>
								<span class="ml-2 text-sm text-white/70">
									{componentProps[propName] ? 'Enabled' : 'Disabled'}
								</span>
							</div>
						{:else if propConfig.type === 'text'}
							<input 
								id={propName}
								type="text" 
								class="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white text-sm focus:border-blue-400 focus:outline-none"
								bind:value={componentProps[propName]}
							/>
						{:else if propConfig.type === 'number'}
							<input 
								id={propName}
								type="number" 
								class="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white text-sm focus:border-blue-400 focus:outline-none"
								bind:value={componentProps[propName]}
							/>
						{/if}
					</div>
				{/each}

				<button 
					class="w-full mt-6 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
					on:click={resetProps}
				>
					Reset to Defaults
				</button>
			{/if}
		</div>

		<!-- Preview/Code Panel -->
		<div class="lg:col-span-2 p-6">
			{#if showPreview}
				<!-- Preview -->
				<div class="space-y-4">
					<h4 class="text-lg font-medium text-white/90">Preview</h4>
					<div class="min-h-[200px] flex items-center justify-center bg-slate-800/50 rounded-lg border border-white/10 p-8">
						{#if currentConfig}
							{#if selectedComponent === 'Button'}
								<svelte:component this={currentConfig.component} {...componentProps}>
									{currentConfig.children}
								</svelte:component>
							{:else if selectedComponent === 'Badge'}
								<svelte:component this={currentConfig.component} {...componentProps}>
									{currentConfig.children}
								</svelte:component>
							{:else if selectedComponent === 'Input'}
								<div class="w-full max-w-sm">
									<svelte:component this={currentConfig.component} {...componentProps} />
								</div>
							{:else if selectedComponent === 'Switch'}
								<svelte:component this={currentConfig.component} {...componentProps} />
							{/if}
						{/if}
					</div>
				</div>
			{:else}
				<!-- Code -->
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<h4 class="text-lg font-medium text-white/90">Generated Code</h4>
						<button 
							class="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-sm rounded-lg transition-colors"
							on:click={copyCode}
						>
							Copy
						</button>
					</div>
					<CodeBlock 
						language="svelte" 
						code={generateCode()}
						showCopy={false}
					/>
				</div>
			{/if}
		</div>
	</div>
</div>