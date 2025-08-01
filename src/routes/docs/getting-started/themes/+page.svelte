<script lang="ts">
	import { theme, themeConfig } from '$lib/stores/theme.js';
	import { Button, Card, ColorPalette } from '$lib/components';
	import { springPop, glassFade } from '$lib/motion';

	let currentTheme = $state($theme);
	let config = $state($themeConfig);

	theme.subscribe((value) => {
		currentTheme = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	const quickStartSteps = [
		{
			title: 'Install the Package',
			code: 'npm install a-hackers-brand',
			description: 'Get started by installing the design system package'
		},
		{
			title: 'Import Theme Store',
			code: `import { theme } from 'a-hackers-brand/stores/theme';`,
			description: 'Import the theme management utilities'
		},
		{
			title: 'Set Your Theme',
			code: `// Set Terminal theme
theme.setTerminal();

// Set Bubble Tea theme  
theme.setBubbleTea();

// Toggle between themes
theme.toggle();`,
			description: 'Choose your preferred theme or allow users to switch'
		},
		{
			title: 'Use Themed Components',
			code: `<Button variant="terminal">Terminal Button</Button>
<Button variant="bubbleTea">Bubble Tea Button</Button>

<Card variant="terminal">Hacker aesthetic</Card>
<Card variant="bubbleTea">Modern TUI</Card>`,
			description: 'Apply theme variants to components'
		}
	];

	const migrationGuide = [
		{
			title: 'From v0.2.0 to v0.3.0',
			description: 'New theme system with Bubble Tea support',
			changes: [
				'Added theme store for centralized theme management',
				'New bubbleTea variant for all major components',
				'Enhanced color palette with gradient support',
				'Rounded corner utilities for modern aesthetics'
			]
		}
	];
</script>

<svelte:head>
	<title>Getting Started with Themes - A Hacker's Brand Design System</title>
	<meta
		name="description"
		content="Learn how to implement theme switching between terminal and Bubble Tea aesthetics in A Hacker's Brand design system."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
	<!-- Hero Section -->
	<div class="container mx-auto px-6 py-16">
		<div class="text-center mb-16" in:springPop={{ duration: 500 }}>
			<h1
				class="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6"
			>
				Getting Started with Themes
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
				Learn how to implement theme switching and migrate existing projects to support both terminal hacker aesthetics
				and modern Bubble Tea TUI design.
			</p>
		</div>

		<!-- Current Theme Display -->
		<div class="flex justify-center mb-12" in:glassFade={{ duration: 400, delay: 200 }}>
			<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-6 text-center">
				<h3 class="text-lg font-semibold mb-2">Currently Using</h3>
				<div class="text-2xl font-bold mb-4">{config.displayName} Theme</div>
				<p class="text-sm opacity-80 mb-4">{config.description}</p>
				<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} onclick={() => theme.toggle()}>
					Switch to {currentTheme === 'terminal' ? 'Bubble Tea' : 'Terminal'}
				</Button>
			</Card>
		</div>
	</div>

	<!-- Quick Start Guide -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-3xl font-bold text-center text-white mb-12">Quick Start Guide</h2>

		<div class="space-y-8">
			{#each quickStartSteps as step, index}
				<Card variant="glass" class="p-8" in:springPop={{ duration: 400, delay: index * 100 }}>
					<div class="flex items-start gap-6">
						<div
							class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-lg"
						>
							{index + 1}
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-white mb-3">{step.title}</h3>
							<p class="text-gray-300 mb-4">{step.description}</p>
							<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto border border-gray-700"><code
									class="text-green-400">{step.code}</code
								></pre>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>

	<!-- Theme Comparison -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-3xl font-bold text-center text-white mb-12">Theme Comparison</h2>

		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Terminal Theme -->
			<div class="space-y-6">
				<Card variant="terminal" class="p-8">
					<h3 class="text-2xl font-bold text-terminal-green mb-4">Terminal Theme</h3>
					<p class="text-terminal-green/80 mb-6">
						Classic hacker aesthetic with matrix-inspired colors and sharp, precise design elements.
					</p>

					<div class="space-y-4">
						<h4 class="text-lg font-semibold text-terminal-cyan">Key Features</h4>
						<ul class="space-y-2 text-terminal-green/80">
							<li>• Matrix green (#00ff41) primary color</li>
							<li>• Sharp corners and precise edges</li>
							<li>• Monospace font preference</li>
							<li>• High contrast for readability</li>
							<li>• CLI-inspired interactions</li>
						</ul>

						<div class="pt-4">
							<Button variant="terminal" size="md">Terminal Button</Button>
						</div>
					</div>
				</Card>

				<Card variant="terminal" class="p-6">
					<h4 class="text-lg font-semibold text-terminal-green mb-4">When to Use</h4>
					<ul class="space-y-2 text-terminal-green/80">
						<li>• Developer tools and IDEs</li>
						<li>• Command-line applications</li>
						<li>• Technical documentation</li>
						<li>• Cybersecurity interfaces</li>
						<li>• Retro computing themes</li>
					</ul>
				</Card>
			</div>

			<!-- Bubble Tea Theme -->
			<div class="space-y-6">
				<Card variant="bubbleTea" class="p-8">
					<h3 class="text-2xl font-bold text-bubble-tea-purple mb-4">Bubble Tea Theme</h3>
					<p class="text-bubble-tea-purple/80 mb-6">
						Modern TUI aesthetics with colorful gradients, rounded corners, and contemporary design patterns.
					</p>

					<div class="space-y-4">
						<h4 class="text-lg font-semibold text-bubble-tea-pink">Key Features</h4>
						<ul class="space-y-2 text-bubble-tea-purple/80">
							<li>• Colorful gradient combinations</li>
							<li>• Rounded corners and soft edges</li>
							<li>• Modern typography choices</li>
							<li>• Approachable color palette</li>
							<li>• Contemporary TUI patterns</li>
						</ul>

						<div class="pt-4">
							<Button variant="bubbleTea" size="md">Bubble Tea Button</Button>
						</div>
					</div>
				</Card>

				<Card variant="bubbleTea" class="p-6">
					<h4 class="text-lg font-semibold text-bubble-tea-purple mb-4">When to Use</h4>
					<ul class="space-y-2 text-bubble-tea-purple/80">
						<li>• Modern terminal applications</li>
						<li>• User-friendly CLI tools</li>
						<li>• Creative development tools</li>
						<li>• Educational interfaces</li>
						<li>• Contemporary web terminals</li>
					</ul>
				</Card>
			</div>
		</div>
	</div>

	<!-- Implementation Examples -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-3xl font-bold text-center text-white mb-12">Implementation Examples</h2>

		<div class="grid md:grid-cols-2 gap-8">
			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-white mb-4">React Integration</h3>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto"><code class="text-green-400"
						>{`import { useTheme } from 'a-hackers-brand/react';

function MyComponent() {
  const { theme, setTheme, toggle } = useTheme();
  
  return (
    <div className={\`theme-\${theme}\`}>
      <Button 
        variant={theme === 'terminal' ? 'terminal' : 'bubbleTea'}
        onClick={toggle}
      >
        Switch Theme
      </Button>
    </div>
  );
}`}</code
					></pre>
			</Card>

			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-white mb-4">Vue Integration</h3>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto"><code class="text-green-400"
						>{`import { useTheme } from 'a-hackers-brand/vue';

export default {
  setup() {
    const { theme, setTheme, toggle } = useTheme();
    
    return {
      theme,
      setTheme,
      toggle,
      buttonVariant: computed(() => 
        theme.value === 'terminal' ? 'terminal' : 'bubbleTea'
      )
    };
  }
}`}</code
					></pre>
			</Card>
		</div>
	</div>

	<!-- Migration Guide -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-3xl font-bold text-center text-white mb-12">Migration Guide</h2>

		{#each migrationGuide as migration}
			<Card variant="glass" class="p-8 mb-8">
				<h3 class="text-2xl font-semibold text-white mb-4">{migration.title}</h3>
				<p class="text-gray-300 mb-6">{migration.description}</p>

				<h4 class="text-lg font-semibold text-cyan-400 mb-4">What's New</h4>
				<ul class="space-y-2 text-gray-300">
					{#each migration.changes as change}
						<li class="flex items-start gap-2">
							<span class="text-green-400 mt-1">✓</span>
							{change}
						</li>
					{/each}
				</ul>
			</Card>
		{/each}
	</div>

	<!-- Best Practices -->
	<div class="container mx-auto px-6 py-16">
		<h2 class="text-3xl font-bold text-center text-white mb-12">Best Practices</h2>

		<div class="grid md:grid-cols-2 gap-8">
			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-green-400 mb-4">✅ Recommended</h3>
				<ul class="space-y-3 text-gray-300">
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Provide theme switching in user preferences
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Persist theme choice in localStorage
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Test both themes for accessibility
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Use semantic theme variants consistently
					</li>
					<li class="flex items-start gap-2">
						<span class="text-green-400 mt-1">•</span>
						Consider user context when choosing default
					</li>
				</ul>
			</Card>

			<Card variant="glass" class="p-6">
				<h3 class="text-xl font-semibold text-red-400 mb-4">❌ Avoid</h3>
				<ul class="space-y-3 text-gray-300">
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Mixing theme variants within components
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Forcing users into a single theme
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Ignoring color contrast requirements
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Overusing colorful gradients in Bubble Tea
					</li>
					<li class="flex items-start gap-2">
						<span class="text-red-400 mt-1">•</span>
						Inconsistent border radius usage
					</li>
				</ul>
			</Card>
		</div>
	</div>

	<!-- Interactive Demo -->
	<div class="container mx-auto px-6 py-16">
		<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-8">
			<h3 class="text-2xl font-bold text-center text-white mb-8">
				Try It Now - {config.displayName} Theme
			</h3>

			<div class="grid md:grid-cols-3 gap-8">
				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Buttons</h4>
					<div class="space-y-2">
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} size="sm">Small</Button>
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} size="md">Medium</Button>
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} size="lg">Large</Button>
					</div>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Theme Controls</h4>
					<div class="space-y-2">
						<Button variant="outline" size="sm" onclick={() => theme.setTerminal()}>Set Terminal</Button>
						<Button variant="outline" size="sm" onclick={() => theme.setBubbleTea()}>Set Bubble Tea</Button>
						<Button variant="ghost" size="sm" onclick={() => theme.toggle()}>Toggle Theme</Button>
					</div>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Color Preview</h4>
					<ColorPalette
						theme={currentTheme}
						layout="grid"
						showCategories={false}
						interactive={false}
						class="max-h-48 overflow-hidden"
					/>
				</div>
			</div>
		</Card>
	</div>
</div>
