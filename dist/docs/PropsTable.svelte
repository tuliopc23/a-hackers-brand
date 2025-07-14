<script lang="ts">
	interface Prop {
		name: string;
		type: string;
		optional: boolean;
		default: string;
		description: string;
	}

	interface PropsTableProps {
		props: Prop[];
	}

	const { props }: PropsTableProps = $props();
</script>

<div class="overflow-x-auto">
	<table class="w-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
		<thead>
			<tr class="border-b border-white/10">
				<th class="text-left p-4 font-medium text-white/90">Prop</th>
				<th class="text-left p-4 font-medium text-white/90">Type</th>
				<th class="text-left p-4 font-medium text-white/90">Default</th>
				<th class="text-left p-4 font-medium text-white/90">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each props as prop (prop.id || prop)}
				<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
					<td class="p-4 font-mono text-terminal-blue">
						{prop.name}
						{#if prop.optional}
							<span class="text-white/40 text-xs ml-1">?</span>
						{/if}
					</td>
					<td class="p-4 font-mono text-sm text-terminal-purple">{prop.type}</td>
					<td class="p-4 font-mono text-sm text-terminal-green">{prop.default}</td>
					<td class="p-4 text-white/80">{prop.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
