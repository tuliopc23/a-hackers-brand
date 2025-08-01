<script lang="ts">
	import { GlowText, Card, Button } from '$lib/components';
	import { theme, themeConfig } from '$lib/stores/theme.js';
	import { springPop } from '$lib/motion';

	let currentTheme = $state($theme);
	let config = $state($themeConfig);

	theme.subscribe((value) => {
		currentTheme = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	const bubbleTeaColors = ['pink', 'purple', 'blue', 'cyan', 'green', 'yellow', 'orange', 'red'] as const;
	const terminalColors = ['matrix', 'cyan'] as const;

	let selectedColor = $state('pink');
	let selectedIntensity = $state<'normal' | 'intense'>('normal');
	let pulseEnabled = $state(false);
	let animateEnabled = $state(true);
</script>

<svelte:head>
	<title>GlowText - A Hacker's Brand Design System</title>
	<meta
		name="description"
		content="GlowText component with CSS text-shadow effects for both terminal and Bubble Tea themes. Perfect for status indicators and emphasis."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
	<!-- Hero Section -->
	<div class="container mx-auto px-6 py-16">
		<div class="text-center mb-16" in:springPop={{ duration: 500 }}>
			<h1
				class="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6"
			>
				GlowText Component
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
				Typography with neon/glow effects using CSS text-shadow. Perfect for status indicators, headings, and creating
				visual emphasis in both terminal and Bubble Tea themes.
			</p>
		</div>

		<!-- Live Demo -->
		<div class="flex justify-center mb-12">
			<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-8 text-center">
				<div class="text-4xl mb-4">
					<GlowText
						variant={currentTheme}
						color={selectedColor}
						intensity={selectedIntensity}
						pulse={pulseEnabled}
						animate={animateEnabled}
					>
						{config.displayName} Glow
					</GlowText>
				</div>
				<div class="text-sm text-gray-400 font-mono">
					Current Theme: {config.displayName}
				</div>
			</Card>
		</div>
	</div>

	<!-- Interactive Controls -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Interactive Demo</h2>

		<Card variant="glass" class="p-8 mb-8">
			<h3 class="text-2xl font-semibold text-white mb-6">Customize Glow Effects</h3>

			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<!-- Color Selection -->
				<div>
					<h4 class="text-lg font-semibold text-cyan-400 mb-3">Color</h4>
					<div class="space-y-2">
						{#if currentTheme === 'bubbleTea'}
							{#each bubbleTeaColors as color}
								<Button
									variant={selectedColor === color ? 'bubbleTea' : 'outline'}
									size="sm"
									onclick={() => (selectedColor = color)}
									class="w-full"
								>
									{color}
								</Button>
							{/each}
						{:else}
							{#each terminalColors as color}
								<Button
									variant={selectedColor === color ? 'terminal' : 'outline'}
									size="sm"
									onclick={() => (selectedColor = color)}
									class="w-full"
								>
									{color}
								</Button>
							{/each}
						{/if}
					</div>
				</div>

				<!-- Intensity -->
				<div>
					<h4 class="text-lg font-semibold text-cyan-400 mb-3">Intensity</h4>
					<div class="space-y-2">
						<Button
							variant={selectedIntensity === 'normal'
								? currentTheme === 'terminal'
									? 'terminal'
									: 'bubbleTea'
								: 'outline'}
							size="sm"
							onclick={() => (selectedIntensity = 'normal')}
							class="w-full"
						>
							Normal
						</Button>
						<Button
							variant={selectedIntensity === 'intense'
								? currentTheme === 'terminal'
									? 'terminal'
									: 'bubbleTea'
								: 'outline'}
							size="sm"
							onclick={() => (selectedIntensity = 'intense')}
							class="w-full"
						>
							Intense
						</Button>
					</div>
				</div>

				<!-- Animation Options -->
				<div>
					<h4 class="text-lg font-semibold text-cyan-400 mb-3">Animations</h4>
					<div class="space-y-2">
						<Button
							variant={pulseEnabled ? (currentTheme === 'terminal' ? 'terminal' : 'bubbleTea') : 'outline'}
							size="sm"
							onclick={() => (pulseEnabled = !pulseEnabled)}
							class="w-full"
						>
							Pulse: {pulseEnabled ? 'On' : 'Off'}
						</Button>
						<Button
							variant={animateEnabled ? (currentTheme === 'terminal' ? 'terminal' : 'bubbleTea') : 'outline'}
							size="sm"
							onclick={() => (animateEnabled = !animateEnabled)}
							class="w-full"
						>
							Hover: {animateEnabled ? 'On' : 'Off'}
						</Button>
					</div>
				</div>

				<!-- Preview -->
				<div>
					<h4 class="text-lg font-semibold text-cyan-400 mb-3">Preview</h4>
					<div class="bg-black/30 rounded-lg p-4 text-center">
						<GlowText
							variant={currentTheme}
							color={selectedColor}
							intensity={selectedIntensity}
							pulse={pulseEnabled}
							animate={animateEnabled}
							text="Sample Text"
						/>
					</div>
				</div>
			</div>
		</Card>
	</div>

	<!-- Examples Gallery -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Examples Gallery</h2>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Bubble Tea Examples -->
			<Card variant="bubbleTea" class="p-8">
				<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Bubble Tea Effects</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<GlowText color="pink" intensity="normal">Status: Ready</GlowText>
						<code class="text-xs text-gray-400">color="pink"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText color="purple" intensity="intense">Processing...</GlowText>
						<code class="text-xs text-gray-400">intensity="intense"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText color="green" intensity="normal">Success!</GlowText>
						<code class="text-xs text-gray-400">color="green"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText color="orange" pulse>Warning</GlowText>
						<code class="text-xs text-gray-400">pulse=true</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText color="red" intensity="intense">Error!</GlowText>
						<code class="text-xs text-gray-400">color="red"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText color="cyan">Info: Connected</GlowText>
						<code class="text-xs text-gray-400">color="cyan"</code>
					</div>
				</div>
			</Card>

			<!-- Terminal Examples -->
			<Card variant="terminal" class="p-8">
				<h3 class="text-2xl font-bold text-terminal-green mb-6">Terminal Effects</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<GlowText variant="terminal" color="matrix">System Online</GlowText>
						<code class="text-xs text-gray-400">variant="terminal"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText variant="terminal" color="matrix" intensity="intense">MATRIX_ACTIVE</GlowText>
						<code class="text-xs text-gray-400">intensity="intense"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText variant="terminal" color="cyan">Data Transfer</GlowText>
						<code class="text-xs text-gray-400">color="cyan"</code>
					</div>
					<div class="flex items-center justify-between">
						<GlowText variant="terminal" color="matrix" pulse>Scanning...</GlowText>
						<code class="text-xs text-gray-400">pulse=true</code>
					</div>
				</div>
			</Card>
		</div>
	</div>

	<!-- Usage Examples -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Usage Examples</h2>

		<div class="grid md:grid-cols-2 gap-8">
			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-white mb-4">Basic Usage</h3>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto border border-gray-700"><code
						class="text-green-400">
{`<script>
  import { GlowText } from 'a-hackers-brand';
</script>

<!-- Simple text prop usage -->
<GlowText color="pink" text="Glowing Pink" />

<!-- With children snippet -->
<GlowText color="purple" intensity="intense">
  Intense Purple Glow
</GlowText>

<!-- Terminal variant -->
<GlowText variant="terminal" color="matrix">
  Matrix Green
</GlowText>`}</code
					></pre>
			</Card>

			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-white mb-4">Advanced Usage</h3>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto border border-gray-700"><code
						class="text-green-400">
{`<!-- Animated status indicator -->
<GlowText 
  color="green" 
  pulse={isConnected}
  intensity="intense"
>
  {isConnected ? 'Connected' : 'Disconnected'}
</GlowText>

<!-- Error message -->
<GlowText 
  color="red" 
  intensity="intense"
  animate={false}
  class="text-lg font-bold"
>
  {errorMessage}
</GlowText>`}</code
					></pre>
			</Card>
		</div>
	</div>

	<!-- Props Documentation -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-4xl font-bold text-center text-white mb-12">Component Props</h2>

		<Card variant="glass" class="overflow-hidden">
			<div class="p-6">
				<table class="w-full">
					<thead>
						<tr class="border-b border-gray-700">
							<th class="text-left py-3 px-4 text-cyan-400">Prop</th>
							<th class="text-left py-3 px-4 text-cyan-400">Type</th>
							<th class="text-left py-3 px-4 text-cyan-400">Default</th>
							<th class="text-left py-3 px-4 text-cyan-400">Description</th>
						</tr>
					</thead>
					<tbody class="text-gray-300">
						<tr class="border-b border-gray-700/50">
							<td class="py-3 px-4 font-mono text-green-400">variant</td>
							<td class="py-3 px-4">'terminal' | 'bubbleTea'</td>
							<td class="py-3 px-4">'bubbleTea'</td>
							<td class="py-3 px-4">Theme variant to apply</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="py-3 px-4 font-mono text-green-400">color</td>
							<td class="py-3 px-4"
								>'pink' | 'purple' | 'blue' | 'cyan' | 'green' | 'yellow' | 'orange' | 'red' | 'matrix'</td
							>
							<td class="py-3 px-4">'pink'</td>
							<td class="py-3 px-4">Glow color</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="py-3 px-4 font-mono text-green-400">intensity</td>
							<td class="py-3 px-4">'normal' | 'intense'</td>
							<td class="py-3 px-4">'normal'</td>
							<td class="py-3 px-4">Glow intensity level</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="py-3 px-4 font-mono text-green-400">pulse</td>
							<td class="py-3 px-4">boolean</td>
							<td class="py-3 px-4">false</td>
							<td class="py-3 px-4">Enable pulsing animation</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="py-3 px-4 font-mono text-green-400">animate</td>
							<td class="py-3 px-4">boolean</td>
							<td class="py-3 px-4">true</td>
							<td class="py-3 px-4">Enable hover animations</td>
						</tr>
						<tr class="border-b border-gray-700/50">
							<td class="py-3 px-4 font-mono text-green-400">text</td>
							<td class="py-3 px-4">string?</td>
							<td class="py-3 px-4">undefined</td>
							<td class="py-3 px-4">Simple text content</td>
						</tr>
						<tr>
							<td class="py-3 px-4 font-mono text-green-400">children</td>
							<td class="py-3 px-4">Snippet?</td>
							<td class="py-3 px-4">undefined</td>
							<td class="py-3 px-4">Rich content using snippets</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Card>
	</div>

	<!-- Theme Showcase -->
	<div class="container mx-auto px-6 py-16">
		<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-8">
			<h3 class="text-2xl font-bold text-center text-white mb-8">
				Live Theme Demo - {config.displayName}
			</h3>

			<div class="text-center space-y-6">
				<div class="text-5xl">
					<GlowText
						variant={currentTheme}
						color={currentTheme === 'terminal' ? 'matrix' : 'pink'}
						intensity="intense"
						pulse
					>
						{config.displayName}
					</GlowText>
				</div>

				<div class="text-xl">
					<GlowText variant={currentTheme} color={currentTheme === 'terminal' ? 'cyan' : 'purple'} intensity="normal">
						Design System Glow Effects
					</GlowText>
				</div>

				<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} onclick={() => theme.toggle()}>
					Switch to {currentTheme === 'terminal' ? 'Bubble Tea' : 'Terminal'} Theme
				</Button>
			</div>
		</Card>
	</div>
</div>
