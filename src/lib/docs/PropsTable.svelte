<script lang="ts">
	import { cn } from '$lib/utils';
	import Badge from '$lib/components/Badge.svelte';
	import Card from '$lib/components/Card.svelte';

	interface PropDefinition {
		name: string;
		type: string;
		default?: string;
		required?: boolean;
		description: string;
		since?: string;
		deprecated?: boolean;
		examples?: string[];
	}

	interface Props {
		props: PropDefinition[];
		title?: string;
		class?: string;
		searchable?: boolean;
		groupBy?: 'required' | 'type' | 'none';
	}

	const { props, title = 'Props', class: className = '', searchable = true, groupBy = 'none' }: Props = $props();

	let searchQuery = $state('');

	const filteredProps = $derived(() => {
		if (!searchQuery.trim()) return props;

		const query = searchQuery.toLowerCase();
		return props.filter(
			(prop) =>
				prop.name.toLowerCase().includes(query) ||
				prop.type.toLowerCase().includes(query) ||
				prop.description.toLowerCase().includes(query)
		);
	});

	const groupedProps = $derived(() => {
		if (groupBy === 'none') return { All: filteredProps };

		if (groupBy === 'required') {
			return {
				Required: filteredProps.filter((p) => p.required),
				Optional: filteredProps.filter((p) => !p.required)
			};
		}

		if (groupBy === 'type') {
			const groups: Record<string, PropDefinition[]> = {};
			filteredProps.forEach((prop) => {
				const baseType = prop.type.split(' |')[0].split('<')[0];
				if (!groups[baseType]) groups[baseType] = [];
				groups[baseType].push(prop);
			});
			return groups;
		}

		return { All: filteredProps };
	});

	const getTypeColor = (type: string) => {
		if (type.includes('string')) return 'primary';
		if (type.includes('number')) return 'success';
		if (type.includes('boolean')) return 'warning';
		if (type.includes('function') || type.includes('=>')) return 'secondary';
		if (type.includes('object') || type.includes('{')) return 'accent';
		return 'default';
	};

	const formatType = (type: string) => {
		// Simplify complex types for display
		return type
			.replace(/\s*\|\s*/g, ' | ')
			.replace(/Array<(.+)>/g, '$1[]')
			.replace(/Record<string,\s*(.+)>/g, '{ [key: string]: $1 }');
	};
</script>

<Card variant="glass" class={cn('overflow-hidden', className)}>
	<div class="p-6 space-y-6">
		<!-- Header -->
		<div class="space-y-4">
			<h3 class="text-xl font-semibold text-white">{title}</h3>

			{#if searchable && props.length > 5}
				<input
					type="text"
					placeholder="Search props..."
					bind:value={searchQuery}
					class="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none"
				/>
			{/if}
		</div>

		<!-- Props Tables -->
		{#each Object.entries(groupedProps) as [groupName, groupProps]}
			{#if groupBy !== 'none' && Object.keys(groupedProps).length > 1}
				<h4 class="text-lg font-medium text-white mt-8 mb-4">{groupName}</h4>
			{/if}

			{#if groupProps.length > 0}
				<div class="overflow-x-auto">
					<table class="w-full border-collapse">
						<thead>
							<tr class="border-b border-neutral-700">
								<th class="text-left p-3 text-sm font-medium text-neutral-300">Name</th>
								<th class="text-left p-3 text-sm font-medium text-neutral-300">Type</th>
								<th class="text-left p-3 text-sm font-medium text-neutral-300">Default</th>
								<th class="text-left p-3 text-sm font-medium text-neutral-300">Description</th>
							</tr>
						</thead>
						<tbody>
							{#each groupProps as prop}
								<tr class="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
									<td class="p-3">
										<div class="flex items-center gap-2">
											<code class="text-primary-400 font-mono text-sm">{prop.name}</code>
											{#if prop.required}
												<Badge variant="error" size="sm">required</Badge>
											{/if}
											{#if prop.deprecated}
												<Badge variant="warning" size="sm">deprecated</Badge>
											{/if}
										</div>
									</td>
									<td class="p-3">
										<Badge variant={getTypeColor(prop.type)} size="sm" class="font-mono">
											{formatType(prop.type)}
										</Badge>
									</td>
									<td class="p-3">
										{#if prop.default !== undefined}
											<code class="text-neutral-400 text-sm">{prop.default}</code>
										{:else}
											<span class="text-neutral-500 text-sm">—</span>
										{/if}
									</td>
									<td class="p-3">
										<div class="space-y-2">
											<p class="text-neutral-300 text-sm">{prop.description}</p>
											{#if prop.examples && prop.examples.length > 0}
												<details class="text-xs">
													<summary class="text-neutral-400 cursor-pointer">Examples</summary>
													<div class="mt-2 space-y-1">
														{#each prop.examples as example}
															<code class="block text-primary-400 bg-neutral-900 px-2 py-1 rounded">
																{example}
															</code>
														{/each}
													</div>
												</details>
											{/if}
											{#if prop.since}
												<p class="text-xs text-neutral-500">Since v{prop.since}</p>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{:else}
				<div class="text-center py-8 text-neutral-500">
					No props found matching "{searchQuery}"
				</div>
			{/if}
		{/each}

		{#if props.length === 0}
			<div class="text-center py-8 text-neutral-500">No props defined for this component.</div>
		{/if}
	</div>
</Card>
