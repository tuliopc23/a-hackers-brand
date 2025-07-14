<script lang="ts">
	interface Event {
		name: string;
		type: string;
		description: string;
	}

	interface EventsTableProps {
		events: Event[];
	}

	const { events }: EventsTableProps = $props();
</script>

<div class="overflow-x-auto">
	<table class="w-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
		<thead>
			<tr class="border-b border-white/10">
				<th class="text-left p-4 font-medium text-white/90">Event</th>
				<th class="text-left p-4 font-medium text-white/90">Type</th>
				<th class="text-left p-4 font-medium text-white/90">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each events as event (event.id || event)}
				<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
					<td class="p-4 font-mono text-terminal-blue">{event.name}</td>
					<td class="p-4 font-mono text-sm text-terminal-purple">{event.type}</td>
					<td class="p-4 text-white/80">{event.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
