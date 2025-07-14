<script module>
	export const title = 'Components/Button';
</script>

<script>
	import { Story, Variant } from '@histoire/plugin-svelte';
	import Button from './Button.svelte';
</script>

<Story>
	<Variant title="Default">
		<Button>
			{#snippet children()}Default Button{/snippet}
		</Button>
	</Variant>

	<Variant title="Secondary">
		<Button variant="secondary">
			{#snippet children()}Secondary Button{/snippet}
		</Button>
	</Variant>

	<Variant title="Outline">
		<Button variant="outline">
			{#snippet children()}Outline Button{/snippet}
		</Button>
	</Variant>

	<Variant title="Ghost">
		<Button variant="ghost">
			{#snippet children()}Ghost Button{/snippet}
		</Button>
	</Variant>

	<Variant title="Glass">
		<div class="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-lg">
			<Button variant="glass">
				{#snippet children()}Glass Button{/snippet}
			</Button>
		</div>
	</Variant>

	<Variant title="Glass Dark">
		<div class="bg-terminal-bg p-8 rounded-lg">
			<Button variant="glass-dark">
				{#snippet children()}Glass Dark Button{/snippet}
			</Button>
		</div>
	</Variant>

	<Variant title="Sizes">
		<div class="flex items-center gap-4">
			<Button size="sm">
				{#snippet children()}Small{/snippet}
			</Button>
			<Button size="md">
				{#snippet children()}Medium{/snippet}
			</Button>
			<Button size="lg">
				{#snippet children()}Large{/snippet}
			</Button>
			<Button size="xl">
				{#snippet children()}Extra Large{/snippet}
			</Button>
		</div>
	</Variant>

	<Variant title="Loading">
		<Button loading>
			{#snippet children()}Loading Button{/snippet}
		</Button>
	</Variant>

	<Variant title="Disabled">
		<Button disabled>
			{#snippet children()}Disabled Button{/snippet}
		</Button>
	</Variant>

	<Variant title="Icon Button">
		<Button icon>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 5v14M5 12h14" />
			</svg>
		</Button>
	</Variant>

	<Variant title="Without Animation">
		<Button animate={false}>
			{#snippet children()}No Animation{/snippet}
		</Button>
	</Variant>
</Story>
