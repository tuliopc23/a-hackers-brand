<script lang="ts">
	interface EventDefinition {
		name: string;
		type: string;
		description: string;
	}
	
	interface Props {
		events: EventDefinition[];
		class?: string;
	}
	
	let { events = [], class: className = '' }: Props = $props();
	
	function formatEventType(type: string): string {
		// Clean up common event type patterns
		if (type.includes('CustomEvent')) {
			return type.replace(/CustomEvent<(.+)>/, 'CustomEvent<$1>');
		}
		return type;
	}
</script>

<div class="overflow-x-auto {className}">
	<table class="w-full">
		<thead>
			<tr class="border-b border-green-500/20">
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Event
				</th>
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Type
				</th>
				<th class="text-left py-3 px-4 text-green-400 font-mono text-sm uppercase tracking-wider">
					Description
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-800">
			{#each events as event}
				<tr class="hover:bg-green-500/5 transition-colors">
					<td class="py-3 px-4">
						<code class="text-sm font-mono text-white">
							on:{event.name}
						</code>
					</td>
					<td class="py-3 px-4">
						<code class="text-sm font-mono text-purple-400">
							{formatEventType(event.type)}
						</code>
					</td>
					<td class="py-3 px-4">
						<p class="text-sm text-gray-300">
							{event.description}
						</p>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	
	{#if events.length === 0}
		<div class="text-center py-8 text-gray-500">
			No events defined for this component.
		</div>
	{/if}
</div>