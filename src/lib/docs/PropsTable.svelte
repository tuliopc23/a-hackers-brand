<script lang="ts">
	import { Badge } from '$lib/components';
	
	interface PropDefinition {
		name: string;
		type: string;
		defaultValue?: string;
		required?: boolean;
		description: string;
	}
	
	interface Props {
		props: PropDefinition[];
		class?: string;
	}
	
	let { props = [], class: className = '' }: Props = $props();
	
	function formatType(type: string): string {
		// Format complex types for better readability
		if (type.includes('|')) {
			return type.split('|').map(t => t.trim()).join(' | ');
		}
		return type;
	}
	
	function getTypeColor(type: string): string {
		if (type.includes('boolean')) return 'text-cyan-400';
		if (type.includes('string')) return 'text-green-400';
		if (type.includes('number')) return 'text-yellow-400';
		if (type.includes('function')) return 'text-purple-400';
		if (type.includes('object') || type.includes('array')) return 'text-blue-400';
		return 'text-gray-400';
	}
</script>

<div class="overflow-x-auto {className}">
	<table class="w-full">
		<thead>
			<tr class="border-b border-green-500/20">
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Prop
				</th>
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Type
				</th>
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Default
				</th>
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Description
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-800">
			{#each props as prop}
				<tr class="hover:bg-green-500/5 transition-colors">
					<td class="py-3 px-4">
						<div class="flex items-center space-x-2">
							<code class="text-sm font-mono text-white">
								{prop.name}
							</code>
							{#if prop.required}
								<Badge variant="error" size="xs">Required</Badge>
							{/if}
						</div>
					</td>
					<td class="py-3 px-4">
						<code class="text-sm font-mono {getTypeColor(prop.type)}">
							{formatType(prop.type)}
						</code>
					</td>
					<td class="py-3 px-4">
						{#if prop.defaultValue}
							<code class="text-sm font-mono text-gray-400">
								{prop.defaultValue}
							</code>
						{:else}
							<span class="text-gray-600 text-sm">—</span>
						{/if}
					</td>
					<td class="py-3 px-4">
						<p class="text-sm text-gray-300">
							{prop.description}
						</p>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	
	{#if props.length === 0}
		<div class="text-center py-8 text-gray-500">
			No props defined for this component.
		</div>
	{/if}
</div>