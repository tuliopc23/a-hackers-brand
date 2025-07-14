<script lang="ts">
	import Badge from '../components/Badge.svelte';
	import Card from '../components/Card.svelte';

	let selectedVariant = $state('default');
	let selectedSize = $state('md');
	let selectedBlur = $state('md');
	let isGlass = $state(true);
	let isInteractive = $state(false);
	let isAnimated = $state(true);
	let reduceMotion = $state(false);

	const variants = ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error'];
	const sizes = ['sm', 'md', 'lg'];
	const blurLevels = ['sm', 'md', 'lg', 'xl'];
</script>

<div class="w-full max-w-4xl mx-auto p-6 space-y-8">
	<div class="text-center space-y-2">
		<h1 class="text-3xl font-bold text-white">Badge Component Playground</h1>
		<p class="text-white/70">Experiment with different badge configurations</p>
	</div>

	<!-- Controls -->
	<Card variant="glass" class="p-6">
		<h2 class="text-xl font-semibold text-white mb-4">Controls</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<!-- Variant -->
			<div class="space-y-2">
				<label class="block text-sm font-medium text-white">Variant</label>
				<select
					bind:value={selectedVariant}
					class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
				>
					{#each variants as variant (variant.id || variant)}
						<option value={variant}>{variant}</option>
					{/each}
				</select>
			</div>

			<!-- Size -->
			<div class="space-y-2">
				<label class="block text-sm font-medium text-white">Size</label>
				<select
					bind:value={selectedSize}
					class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
				>
					{#each sizes as size (size.id || size)}
						<option value={size}>{size}</option>
					{/each}
				</select>
			</div>

			<!-- Blur -->
			<div class="space-y-2">
				<label class="block text-sm font-medium text-white">Blur Level</label>
				<select
					bind:value={selectedBlur}
					class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
				>
					{#each blurLevels as blur (blur.id || blur)}
						<option value={blur}>{blur}</option>
					{/each}
				</select>
			</div>

			<!-- Options -->
			<div class="space-y-3">
				<label class="block text-sm font-medium text-white">Options</label>
				<div class="space-y-2">
					<label class="flex items-center gap-2 text-white">
						<input type="checkbox" bind:checked={isGlass} class="rounded" />
						Glass Effect
					</label>
					<label class="flex items-center gap-2 text-white">
						<input type="checkbox" bind:checked={isInteractive} class="rounded" />
						Interactive
					</label>
					<label class="flex items-center gap-2 text-white">
						<input type="checkbox" bind:checked={isAnimated} class="rounded" />
						Animated
					</label>
					<label class="flex items-center gap-2 text-white">
						<input type="checkbox" bind:checked={reduceMotion} class="rounded" />
						Reduce Motion
					</label>
				</div>
			</div>
		</div>
	</Card>

	<!-- Preview -->
	<Card variant="glass" class="p-8">
		<h2 class="text-xl font-semibold text-white mb-6 text-center">Preview</h2>

		<div class="flex justify-center items-center min-h-32">
			<Badge
				variant={selectedVariant}
				size={selectedSize}
				glass={isGlass}
				blur={selectedBlur}
				interactive={isInteractive}
				animate={isAnimated}
				{reduceMotion}
				onclick={isInteractive ? () => alert('Badge clicked!') : undefined}
			>
				{selectedVariant} badge
			</Badge>
		</div>
	</Card>

	<!-- Variants Showcase -->
	<Card variant="glass" class="p-6">
		<h2 class="text-xl font-semibold text-white mb-4">All Variants</h2>

		<div class="flex flex-wrap gap-3 justify-center">
			{#each variants as variant (variant.id || variant)}
				<Badge {variant} glass={isGlass} size={selectedSize}>
					{variant}
				</Badge>
			{/each}
		</div>
	</Card>

	<!-- Sizes Showcase -->
	<Card variant="glass" class="p-6">
		<h2 class="text-xl font-semibold text-white mb-4">All Sizes</h2>

		<div class="flex flex-wrap gap-3 justify-center items-center">
			{#each sizes as size (size.id || size)}
				<Badge variant={selectedVariant} {size} glass={isGlass}>
					{size} size
				</Badge>
			{/each}
		</div>
	</Card>

	<!-- Interactive Examples -->
	<Card variant="glass" class="p-6">
		<h2 class="text-xl font-semibold text-white mb-4">Interactive Examples</h2>

		<div class="space-y-4">
			<div class="text-center">
				<p class="text-white/70 mb-3">Click or use keyboard (Enter/Space) to interact:</p>
				<div class="flex flex-wrap gap-3 justify-center">
					<Badge variant="primary" interactive onclick={() => alert('Primary action!')}>Click me</Badge>
					<Badge variant="success" interactive onclick={() => alert('Success!')}>Success action</Badge>
					<Badge variant="warning" interactive onclick={() => alert('Warning!')}>Warning action</Badge>
				</div>
			</div>
		</div>
	</Card>

	<!-- Code Example -->
	<Card variant="glass" class="p-6">
		<h2 class="text-xl font-semibold text-white mb-4">Code Example</h2>

		<pre class="bg-black/30 p-4 rounded-md text-sm text-green-300 overflow-x-auto"><code
				>{`<Badge
  variant="${selectedVariant}"
  size="${selectedSize}"
  glass={${isGlass}}
  blur="${selectedBlur}"
  interactive={${isInteractive}}
  animate={${isAnimated}}
  reduceMotion={${reduceMotion}}
  ${isInteractive ? 'onclick={() => alert("Badge clicked!")}' : ''}
>
  ${selectedVariant} badge
</Badge>`}</code
			></pre>
	</Card>
</div>

<style>
	select option {
		background-color: #1a1a2e;
		color: white;
	}
</style>
