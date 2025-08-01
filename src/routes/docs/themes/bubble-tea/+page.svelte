<script lang="ts">
	import { ColorPalette, Button, Card, Tabs, Modal, StatusBar, GlowText } from '$lib/components';
	import { theme } from '$lib/stores/theme.js';
	import { springPop, glassFade } from '$lib/motion';

	let showModal = $state(false);
	let activeTab = $state('overview');

	const tabs = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'colors', label: 'Colors' },
		{ id: 'components', label: 'Components' },
		{ id: 'usage', label: 'Usage' }
	];

	// Ensure we're in Bubble Tea theme for this page
	theme.setBubbleTea();

	const gradientExamples = [
		{ name: 'Primary', gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44af2 100%)' },
		{ name: 'Secondary', gradient: 'linear-gradient(135deg, #4fa8ff 0%, #4dd8da 100%)' },
		{ name: 'Accent', gradient: 'linear-gradient(135deg, #6bcf7f 0%, #ffd23a 100%)' },
		{
			name: 'Rainbow',
			gradient: 'linear-gradient(135deg, #ff6b9d 0%, #c44af2 25%, #4fa8ff 50%, #4dd8da 75%, #6bcf7f 100%)'
		},
		{ name: 'Sunset', gradient: 'linear-gradient(135deg, #ffd23a 0%, #ff8c42 50%, #ff6b9d 100%)' },
		{ name: 'Ocean', gradient: 'linear-gradient(135deg, #4dd8da 0%, #4fa8ff 50%, #c44af2 100%)' }
	];
</script>

<svelte:head>
	<title>Bubble Tea Theme - A Hacker's Brand Design System</title>
	<meta
		name="description"
		content="Discover the Bubble Tea theme - modern TUI aesthetics with colorful gradients, rounded corners, and contemporary terminal UI design."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-bubble-tea-background via-bubble-tea-surface to-bubble-tea-panel">
	<!-- Hero Section -->
	<div class="relative overflow-hidden">
		<div
			class="absolute inset-0 bg-gradient-to-br from-bubble-tea-pink/20 via-bubble-tea-purple/20 to-bubble-tea-blue/20"
		></div>
		<div class="relative container mx-auto px-6 py-20">
			<div class="text-center" in:springPop={{ duration: 600 }}>
				<h1
					class="text-6xl font-bold bg-gradient-to-r from-bubble-tea-pink via-bubble-tea-purple to-bubble-tea-blue bg-clip-text text-transparent mb-6"
				>
					Bubble Tea Theme
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
					Modern terminal UI aesthetics inspired by colorful TUI applications. Features vibrant gradients, rounded
					corners, and contemporary design patterns.
				</p>
				<div class="flex justify-center gap-4">
					<Button variant="bubbleTea" size="lg">Get Started</Button>
					<Button variant="outline" size="lg">View Components</Button>
				</div>
			</div>
		</div>
	</div>

	<!-- Navigation Tabs -->
	<div class="container mx-auto px-6 py-8">
		<Tabs {tabs} bind:activeTab variant="bubbleTea" size="md" class="mb-12" />

		<!-- Tab Content -->
		{#if activeTab === 'overview'}
			<div class="space-y-12" in:glassFade={{ duration: 400 }}>
				<!-- Features Grid -->
				<div class="grid md:grid-cols-3 gap-8">
					<Card variant="bubbleTea" class="p-6 text-center">
						<div
							class="w-16 h-16 bg-gradient-to-br from-bubble-tea-pink to-bubble-tea-purple rounded-bubble-tea mx-auto mb-4 flex items-center justify-center"
						>
							<span class="text-2xl">🎨</span>
						</div>
						<h3 class="text-xl font-semibold text-bubble-tea-purple mb-2">Colorful Gradients</h3>
						<p class="text-bubble-tea-purple/70">Beautiful gradient combinations inspired by modern TUI applications</p>
					</Card>

					<Card variant="bubbleTea" class="p-6 text-center">
						<div
							class="w-16 h-16 bg-gradient-to-br from-bubble-tea-blue to-bubble-tea-cyan rounded-bubble-tea mx-auto mb-4 flex items-center justify-center"
						>
							<span class="text-2xl">🔄</span>
						</div>
						<h3 class="text-xl font-semibold text-bubble-tea-purple mb-2">Rounded Corners</h3>
						<p class="text-bubble-tea-purple/70">
							Softer, more approachable design with carefully crafted border radius
						</p>
					</Card>

					<Card variant="bubbleTea" class="p-6 text-center">
						<div
							class="w-16 h-16 bg-gradient-to-br from-bubble-tea-green to-bubble-tea-yellow rounded-bubble-tea mx-auto mb-4 flex items-center justify-center"
						>
							<span class="text-2xl">⚡</span>
						</div>
						<h3 class="text-xl font-semibold text-bubble-tea-purple mb-2">Modern TUI</h3>
						<p class="text-bubble-tea-purple/70">Contemporary terminal interface design patterns and interactions</p>
					</Card>
				</div>

				<!-- Design Philosophy -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Design Philosophy</h3>
					<div class="grid md:grid-cols-2 gap-8">
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">Modern Aesthetics</h4>
							<p class="text-white/80 mb-4">
								The Bubble Tea theme draws inspiration from modern terminal UI libraries like Bubble Tea, Charm's TUI
								framework, and contemporary CLI applications that prioritize user experience and visual appeal.
							</p>
							<p class="text-white/80">
								It represents a evolution from the stark, utilitarian terminal interfaces to more approachable and
								visually engaging command-line experiences.
							</p>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">Color Psychology</h4>
							<p class="text-white/80 mb-4">
								The color palette combines warm and cool tones to create a balanced, energetic feel. Pink and purple
								provide warmth and creativity, while blue and cyan add professionalism and trustworthiness.
							</p>
							<p class="text-white/80">
								Status colors (green, yellow, red) maintain semantic meaning while fitting harmoniously with the overall
								aesthetic.
							</p>
						</div>
					</div>
				</Card>
			</div>
		{:else if activeTab === 'colors'}
			<div class="space-y-12" in:glassFade={{ duration: 400 }}>
				<!-- Color Palette -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Color Palette</h3>
					<ColorPalette theme="bubbleTea" layout="grid" showCategories={true} />
				</Card>

				<!-- Gradient Examples -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Gradient Combinations</h3>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{#each gradientExamples as { name, gradient }}
							<div class="relative group">
								<div
									class="h-24 rounded-bubble-tea border border-bubble-tea-purple/20 mb-3 transition-transform duration-300 group-hover:scale-105"
									style="background: {gradient}"
								></div>
								<h4 class="font-semibold text-bubble-tea-purple">{name}</h4>
								<p class="text-xs text-bubble-tea-purple/60 font-mono">{gradient}</p>
							</div>
						{/each}
					</div>
				</Card>

				<!-- Usage Guidelines -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Usage Guidelines</h3>
					<div class="space-y-6">
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">Primary Colors</h4>
							<p class="text-white/80 mb-4">
								Use pink (#ff6b9d) for primary actions and brand elements. Purple (#c44af2) works well for secondary
								actions and accent elements. Blue (#4fa8ff) is perfect for informational content and links.
							</p>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">Status Colors</h4>
							<p class="text-white/80 mb-4">
								Green (#6bcf7f) for success states, yellow (#ffd23a) for warnings, and red (#ff6b6b) for errors. These
								maintain semantic meaning while harmonizing with the theme.
							</p>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">Accessibility</h4>
							<p class="text-white/80 mb-4">
								All color combinations meet WCAG AA contrast requirements. Consider providing theme switching options
								for users who prefer higher contrast or need reduced visual stimulation.
							</p>
						</div>
					</div>
				</Card>
			</div>
		{:else if activeTab === 'components'}
			<div class="space-y-12" in:glassFade={{ duration: 400 }}>
				<!-- Button Variants -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Buttons</h3>
					<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
						<Button variant="bubbleTea" size="sm">Small</Button>
						<Button variant="bubbleTea" size="md">Medium</Button>
						<Button variant="bubbleTea" size="lg">Large</Button>
						<Button variant="bubbleTea" size="xl">Extra Large</Button>
					</div>
				</Card>

				<!-- Card Variants -->
				<div class="grid md:grid-cols-2 gap-8">
					<Card variant="bubbleTea" class="p-6">
						<h4 class="text-xl font-semibold text-bubble-tea-purple mb-4">Bubble Tea Card</h4>
						<p class="text-white/80 mb-4">
							Cards in the Bubble Tea theme feature rounded corners, gradient backgrounds, and subtle borders that
							create depth without being overwhelming.
						</p>
						<Button variant="bubbleTea" size="sm">Learn More</Button>
					</Card>

					<Card variant="bubbleTea" class="p-6" interactive>
						<h4 class="text-xl font-semibold text-bubble-tea-purple mb-4">Interactive Card</h4>
						<p class="text-white/80 mb-4">
							Interactive cards respond to hover and focus states with smooth animations and enhanced visual feedback.
						</p>
						<div class="flex gap-2">
							<Button variant="bubbleTea" size="sm">Action</Button>
							<Button variant="outline" size="sm">Cancel</Button>
						</div>
					</Card>
				</div>

				<!-- Modal Demo -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Modal</h3>
					<Button variant="bubbleTea" onclick={() => (showModal = true)}>Show Bubble Tea Modal</Button>
				</Card>

				<!-- Status Bar -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Status Bar</h3>
					<p class="text-white/80 mb-4">
						The status bar adapts to the Bubble Tea theme with gradient backgrounds and rounded corners.
					</p>
					<div class="relative bg-bubble-tea-surface rounded-bubble-tea p-4 overflow-hidden">
						<div class="absolute bottom-0 left-0 right-0">
							<StatusBar
								variant="bubbleTea"
								status="Documentation"
								fileType="Svelte"
								lineNumber={156}
								columnNumber={23}
								indicators={[
									{ label: 'Theme', value: 'Bubble Tea', type: 'success' },
									{ label: 'Mode', value: 'Demo', type: 'normal' }
								]}
							/>
						</div>
					</div>
				</Card>
			</div>
		{:else if activeTab === 'usage'}
			<div class="space-y-12" in:glassFade={{ duration: 400 }}>
				<!-- Installation -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Installation & Setup</h3>
					<pre
						class="bg-black/30 rounded-bubble-tea p-6 text-sm overflow-x-auto border border-bubble-tea-purple/20"><code
							class="text-bubble-tea-cyan"
							>{`npm install a-hackers-brand

// Import theme store
import { theme } from 'a-hackers-brand/stores/theme';

// Set Bubble Tea theme
theme.setBubbleTea();`}</code
						></pre>
				</Card>

				<!-- Component Usage -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Component Usage</h3>
					<pre
						class="bg-black/30 rounded-bubble-tea p-6 text-sm overflow-x-auto border border-bubble-tea-purple/20"><code
							class="text-bubble-tea-cyan"
							>{`<script>
  import { Button, Card, Modal, GlowText } from 'a-hackers-brand';
</script>

<!-- Bubble Tea themed components -->
<Button variant="bubbleTea">Click me</Button>

<Card variant="bubbleTea">
  <GlowText color="pink">Glowing Title</GlowText>
  <p>Card content with Bubble Tea styling</p>
</Card>

<Modal variant="bubbleTea" bind:open={showModal}>
  <GlowText color="purple" intensity="intense">
    Modern TUI Modal
  </GlowText>
</Modal>`}</code
						></pre>
				</Card>

				<!-- Customization -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Customization</h3>
					<div class="space-y-6">
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">CSS Custom Properties</h4>
							<pre
								class="bg-black/30 rounded-bubble-tea p-4 text-sm overflow-x-auto border border-bubble-tea-purple/20"><code
									class="text-bubble-tea-cyan"
									>{`:root {
  --bubble-tea-pink: #ff6b9d;
  --bubble-tea-purple: #c44af2;
  --bubble-tea-blue: #4fa8ff;
  --bubble-tea-radius: 16px;
}`}</code
								></pre>
						</div>

						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">Tailwind Configuration</h4>
							<pre
								class="bg-black/30 rounded-bubble-tea p-4 text-sm overflow-x-auto border border-bubble-tea-purple/20"><code
									class="text-bubble-tea-cyan"
									>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bubble-tea': {
          pink: '#ff6b9d',
          purple: '#c44af2',
          blue: '#4fa8ff',
          // ... more colors
        }
      },
      borderRadius: {
        'bubble-tea': '16px',
        'bubble-tea-lg': '24px',
      }
    }
  }
}`}</code
								></pre>
						</div>
					</div>
				</Card>

				<!-- Best Practices -->
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-6">Best Practices</h3>
					<div class="grid md:grid-cols-2 gap-8">
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-pink mb-3">✅ Do</h4>
							<ul class="space-y-2 text-white/80">
								<li>• Use gradients sparingly for maximum impact</li>
								<li>• Maintain consistent border radius throughout</li>
								<li>• Provide theme switching options</li>
								<li>• Test accessibility with color contrast tools</li>
								<li>• Use status colors semantically</li>
							</ul>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-bubble-tea-red mb-3">❌ Don't</h4>
							<ul class="space-y-2 text-white/80">
								<li>• Overuse bright colors for text</li>
								<li>• Mix border radius styles inconsistently</li>
								<li>• Force the theme on users without choice</li>
								<li>• Use low contrast color combinations</li>
								<li>• Apply too many gradients in one view</li>
							</ul>
						</div>
					</div>
				</Card>
			</div>
		{/if}
	</div>

	{#if showModal}
		<Modal variant="bubbleTea" bind:open={showModal} size="md">
			<h2 class="text-2xl font-bold text-bubble-tea-purple mb-4">Bubble Tea Modal</h2>
			<p class="text-white/80 mb-6">
				This modal demonstrates the Bubble Tea theme styling with rounded corners, gradient backgrounds, and modern
				aesthetics.
			</p>
			<div class="flex gap-3 justify-end">
				<Button variant="outline" onclick={() => (showModal = false)}>Cancel</Button>
				<Button variant="bubbleTea" onclick={() => (showModal = false)}>Confirm</Button>
			</div>
		</Modal>
	{/if}
</div>
