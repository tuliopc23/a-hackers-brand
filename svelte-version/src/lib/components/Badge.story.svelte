<script context="module">
	export const title = 'Components/Badge';
</script>

<script>
	import { Story, Variant } from '@histoire/plugin-svelte';
	import Badge from './Badge.svelte';
</script>

<Story>
	<Variant title="Variants">
		<div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
			<div class="flex flex-wrap gap-4">
				<Badge variant="default">
					{#snippet children()}Default{/snippet}
				</Badge>
				<Badge variant="primary">
					{#snippet children()}Primary{/snippet}
				</Badge>
				<Badge variant="secondary">
					{#snippet children()}Secondary{/snippet}
				</Badge>
				<Badge variant="accent">
					{#snippet children()}Accent{/snippet}
				</Badge>
				<Badge variant="success">
					{#snippet children()}Success{/snippet}
				</Badge>
				<Badge variant="warning">
					{#snippet children()}Warning{/snippet}
				</Badge>
				<Badge variant="error">
					{#snippet children()}Error{/snippet}
				</Badge>
			</div>
		</div>
	</Variant>

	<Variant title="Sizes">
		<div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
			<div class="flex items-center gap-4">
				<Badge size="sm" variant="primary">
					{#snippet children()}Small{/snippet}
				</Badge>
				<Badge size="md" variant="primary">
					{#snippet children()}Medium{/snippet}
				</Badge>
				<Badge size="lg" variant="primary">
					{#snippet children()}Large{/snippet}
				</Badge>
			</div>
		</div>
	</Variant>

	<Variant title="Glass Effects">
		<div class="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-lg">
			<div class="space-y-4">
				<div class="flex gap-4">
					<Badge glass={true} blur="sm" variant="primary">
						{#snippet children()}Small Blur{/snippet}
					</Badge>
					<Badge glass={true} blur="md" variant="secondary">
						{#snippet children()}Medium Blur{/snippet}
					</Badge>
					<Badge glass={true} blur="lg" variant="accent">
						{#snippet children()}Large Blur{/snippet}
					</Badge>
					<Badge glass={true} blur="xl" variant="success">
						{#snippet children()}Extra Large Blur{/snippet}
					</Badge>
				</div>

				<div class="flex gap-4">
					<Badge glass={false} variant="primary">
						{#snippet children()}No Glass{/snippet}
					</Badge>
					<Badge glass={true} variant="primary">
						{#snippet children()}With Glass{/snippet}
					</Badge>
				</div>
			</div>
		</div>
	</Variant>

	<Variant title="Interactive">
		<div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
			<div class="space-y-4">
				<div class="flex gap-4">
					<Badge interactive={true} variant="primary">
						{#snippet children()}Clickable Badge{/snippet}
					</Badge>
					<Badge interactive={true} variant="success">
						{#snippet children()}Interactive Success{/snippet}
					</Badge>
					<Badge interactive={false} variant="warning">
						{#snippet children()}Non-interactive{/snippet}
					</Badge>
				</div>
			</div>
		</div>
	</Variant>

	<Variant title="Animation States">
		<div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg">
			<div class="space-y-4">
				<div>
					<h4 class="text-white mb-2">With Animation</h4>
					<div class="flex gap-4">
						<Badge animate={true} variant="primary">
							{#snippet children()}Animated{/snippet}
						</Badge>
						<Badge animate={true} interactive={true} variant="secondary">
							{#snippet children()}Interactive + Animated{/snippet}
						</Badge>
					</div>
				</div>

				<div>
					<h4 class="text-white mb-2">Without Animation</h4>
					<div class="flex gap-4">
						<Badge animate={false} variant="primary">
							{#snippet children()}No Animation{/snippet}
						</Badge>
						<Badge reduceMotion={true} variant="secondary">
							{#snippet children()}Reduced Motion{/snippet}
						</Badge>
					</div>
				</div>
			</div>
		</div>
	</Variant>

	<Variant title="Usage Examples">
		<div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg space-y-6">
			<div>
				<h4 class="text-white mb-3">Status Indicators</h4>
				<div class="flex gap-2">
					<Badge variant="success" size="sm">
						{#snippet children()}Online{/snippet}
					</Badge>
					<Badge variant="warning" size="sm">
						{#snippet children()}Away{/snippet}
					</Badge>
					<Badge variant="error" size="sm">
						{#snippet children()}Offline{/snippet}
					</Badge>
				</div>
			</div>

			<div>
				<h4 class="text-white mb-3">Notification Counts</h4>
				<div class="flex gap-4">
					<div class="relative">
						<button class="bg-gray-700 text-white px-4 py-2 rounded-lg"> Messages </button>
						<Badge variant="error" size="sm" class="absolute -top-2 -right-2">
							{#snippet children()}5{/snippet}
						</Badge>
					</div>

					<div class="relative">
						<button class="bg-gray-700 text-white px-4 py-2 rounded-lg"> Notifications </button>
						<Badge variant="primary" size="sm" class="absolute -top-2 -right-2">
							{#snippet children()}12{/snippet}
						</Badge>
					</div>
				</div>
			</div>

			<div>
				<h4 class="text-white mb-3">Category Tags</h4>
				<div class="flex flex-wrap gap-2">
					<Badge variant="primary" interactive={true}>
						{#snippet children()}React{/snippet}
					</Badge>
					<Badge variant="secondary" interactive={true}>
						{#snippet children()}Svelte{/snippet}
					</Badge>
					<Badge variant="accent" interactive={true}>
						{#snippet children()}TypeScript{/snippet}
					</Badge>
					<Badge variant="success" interactive={true}>
						{#snippet children()}Performance{/snippet}
					</Badge>
				</div>
			</div>
		</div>
	</Variant>
</Story>
