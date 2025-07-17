<script lang="ts">
	import { cn } from '$lib/utils';
	import Badge from '$lib/components/Badge.svelte';
	import Card from '$lib/components/Card.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	interface EventDefinition {
		name: string;
		payload?: string;
		description: string;
		since?: string;
		deprecated?: boolean;
		example?: string;
		bubbles?: boolean;
		cancelable?: boolean;
	}

	interface Props {
		events: EventDefinition[];
		title?: string;
		class?: string;
		searchable?: boolean;
		showExamples?: boolean;
	}

	const { events, title = 'Events', class: className = '', searchable = true, showExamples = true }: Props = $props();

	let searchQuery = $state('');
	let expandedExamples = $state<Set<string>>(new Set());

	const filteredEvents = $derived(() => {
		if (!searchQuery.trim()) return events;

		const query = searchQuery.toLowerCase();
		return events.filter(
			(event) =>
				event.name.toLowerCase().includes(query) ||
				event.description.toLowerCase().includes(query) ||
				(event.payload && event.payload.toLowerCase().includes(query))
		);
	});

	const toggleExample = (eventName: string) => {
		if (expandedExamples.has(eventName)) {
			expandedExamples.delete(eventName);
		} else {
			expandedExamples.add(eventName);
		}
		expandedExamples = new Set(expandedExamples);
	};

	const getEventBadgeVariant = (event: EventDefinition) => {
		if (event.deprecated) return 'warning';
		if (event.bubbles) return 'primary';
		return 'default';
	};

	const formatPayload = (payload?: string) => {
		if (!payload) return 'void';
		return payload.replace(/\s*\|\s*/g, ' | ').replace(/Array<(.+)>/g, '$1[]');
	};
</script>

<Card variant="glass" class={cn('overflow-hidden', className)}>
	<div class="p-6 space-y-6">
		<!-- Header -->
		<div class="space-y-4">
			<h3 class="text-xl font-semibold text-white">{title}</h3>

			{#if searchable && events.length > 3}
				<input
					type="text"
					placeholder="Search events..."
					bind:value={searchQuery}
					class="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none"
				/>
			{/if}
		</div>

		<!-- Events Table -->
		{#if filteredEvents.length > 0}
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<thead>
						<tr class="border-b border-neutral-700">
							<th class="text-left p-3 text-sm font-medium text-neutral-300">Event</th>
							<th class="text-left p-3 text-sm font-medium text-neutral-300">Payload</th>
							<th class="text-left p-3 text-sm font-medium text-neutral-300">Description</th>
							{#if showExamples}
								<th class="text-left p-3 text-sm font-medium text-neutral-300">Example</th>
							{/if}
						</tr>
					</thead>
					<tbody>
						{#each filteredEvents as event}
							<tr class="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
								<td class="p-3">
									<div class="space-y-2">
										<div class="flex items-center gap-2">
											<code class="text-primary-400 font-mono text-sm">on:{event.name}</code>
											{#if event.deprecated}
												<Badge variant="warning" size="sm">deprecated</Badge>
											{/if}
											{#if event.bubbles}
												<Badge variant="primary" size="sm">bubbles</Badge>
											{/if}
											{#if event.cancelable}
												<Badge variant="secondary" size="sm">cancelable</Badge>
											{/if}
										</div>
										{#if event.since}
											<p class="text-xs text-neutral-500">Since v{event.since}</p>
										{/if}
									</div>
								</td>
								<td class="p-3">
									<Badge variant="accent" size="sm" class="font-mono">
										{formatPayload(event.payload)}
									</Badge>
								</td>
								<td class="p-3">
									<p class="text-neutral-300 text-sm">{event.description}</p>
								</td>
								{#if showExamples}
									<td class="p-3">
										{#if event.example}
											<button
												type="button"
												onclick={() => toggleExample(event.name)}
												class="text-primary-400 hover:text-primary-300 text-sm transition-colors"
											>
												{expandedExamples.has(event.name) ? 'Hide' : 'Show'} Example
											</button>
										{:else}
											<span class="text-neutral-500 text-sm">—</span>
										{/if}
									</td>
								{/if}
							</tr>
							{#if showExamples && event.example && expandedExamples.has(event.name)}
								<tr class="border-b border-neutral-800">
									<td colspan="4" class="p-3 pt-0">
										<div class="mt-2">
											<CodeBlock language="svelte" code={event.example} showLineNumbers={false} class="text-xs" />
										</div>
									</td>
								</tr>
							{/if}
						{/each}
					</tbody>
				</table>
			</div>
		{:else if searchQuery}
			<div class="text-center py-8 text-neutral-500">
				No events found matching "{searchQuery}"
			</div>
		{:else}
			<div class="text-center py-8 text-neutral-500">No events defined for this component.</div>
		{/if}

		<!-- Usage Note -->
		{#if events.length > 0}
			<div class="mt-6 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
				<h4 class="text-sm font-medium text-neutral-300 mb-2">Usage</h4>
				<p class="text-sm text-neutral-400">
					Events can be listened to using the <code class="text-primary-400">on:eventname</code> syntax. The event handler
					receives an event object with the payload data.
				</p>
				<CodeBlock
					language="svelte"
					code={`<Component on:${events[0]?.name || 'event'}={(e) => console.log(e.detail)} />`}
					showLineNumbers={false}
					class="mt-2 text-xs"
				/>
			</div>
		{/if}
	</div>
</Card>
