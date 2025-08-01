<script lang="ts">
	import { theme, themeConfig, themeConfigs } from '$lib/stores/theme.js';
	import { Button, Card, ColorPalette, StatusBar } from '$lib/components';
	import { springPop, glassFade } from '$lib/motion';

	let currentTheme = $state($theme);
	let config = $state($themeConfig);

	theme.subscribe((value) => {
		currentTheme = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	const toggleTheme = () => {
		theme.toggle();
	};

	const setTerminal = () => {
		theme.setTerminal();
	};

	const setBubbleTea = () => {
		theme.setBubbleTea();
	};
</script>

<svelte:head>
	<title>Themes - A Hacker's Brand Design System</title>
	<meta
		name="description"
		content="Explore terminal and Bubble Tea themes in A Hacker's Brand design system. Switch between hacker aesthetics and modern TUI design."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
	<!-- Hero Section -->
	<div class="relative overflow-hidden">
		<div class="container mx-auto px-6 py-16">
			<div class="text-center mb-12" in:springPop={{ duration: 400 }}>
				<h1
					class="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6"
				>
					Dual Theme System
				</h1>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
					Switch between terminal hacker aesthetics and modern Bubble Tea TUI design. Experience two distinct visual
					languages in one cohesive design system.
				</p>
			</div>

			<!-- Theme Toggle Controls -->
			<div class="flex justify-center mb-16" in:glassFade={{ duration: 500, delay: 200 }}>
				<div class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
					<div class="flex items-center gap-4 mb-4">
						<span class="text-white/70 text-sm font-medium">Current Theme:</span>
						<span class="text-white font-semibold">{config.displayName}</span>
					</div>
					<div class="flex gap-3">
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'outline'} onclick={setTerminal} size="md">
							Terminal
						</Button>
						<Button variant={currentTheme === 'bubbleTea' ? 'bubbleTea' : 'outline'} onclick={setBubbleTea} size="md">
							Bubble Tea
						</Button>
						<Button variant="ghost" onclick={toggleTheme} size="md">Toggle</Button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Theme Comparison -->
	<div class="container mx-auto px-6 py-16">
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Terminal Theme -->
			<Card variant="terminal" class="p-8" in:springPop={{ duration: 400, delay: 300 }}>
				<div class="text-center mb-6">
					<h2 class="text-2xl font-bold text-terminal-green mb-2">Terminal Theme</h2>
					<p class="text-terminal-green/70 text-sm">
						{themeConfigs.terminal.description}
					</p>
				</div>

				<div class="space-y-4">
					<Button variant="terminal" size="md">Terminal Button</Button>
					<div class="bg-terminal-bg border border-terminal-green/30 rounded-lg p-4">
						<div class="font-mono text-terminal-green text-sm">
							<div>$ whoami</div>
							<div class="text-terminal-cyan">hacker@system</div>
							<div>$ ls -la</div>
							<div class="text-white/70">total 42</div>
							<div class="text-terminal-green">drwxr-xr-x 2 user user 4096 Dec 1 12:00 projects</div>
						</div>
					</div>
					<div class="grid grid-cols-3 gap-2">
						<div class="h-8 bg-terminal-green/20 border border-terminal-green/30 rounded"></div>
						<div class="h-8 bg-terminal-cyan/20 border border-terminal-cyan/30 rounded"></div>
						<div class="h-8 bg-terminal-blue/20 border border-terminal-blue/30 rounded"></div>
					</div>
				</div>
			</Card>

			<!-- Bubble Tea Theme -->
			<Card variant="bubbleTea" class="p-8" in:springPop={{ duration: 400, delay: 400 }}>
				<div class="text-center mb-6">
					<h2 class="text-2xl font-bold text-bubble-tea-purple mb-2">Bubble Tea Theme</h2>
					<p class="text-bubble-tea-purple/70 text-sm">
						{themeConfigs.bubbleTea.description}
					</p>
				</div>

				<div class="space-y-4">
					<Button variant="bubbleTea" size="md">Bubble Tea Button</Button>
					<div
						class="bg-gradient-to-r from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 rounded-bubble-tea p-4"
					>
						<div class="text-bubble-tea-purple text-sm">
							<div class="flex items-center gap-2 mb-2">
								<div class="w-3 h-3 bg-bubble-tea-green rounded-full"></div>
								<span>Connected to server</span>
							</div>
							<div class="flex items-center gap-2 mb-2">
								<div class="w-3 h-3 bg-bubble-tea-blue rounded-full"></div>
								<span>Processing request...</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-3 h-3 bg-bubble-tea-pink rounded-full"></div>
								<span>Operation complete</span>
							</div>
						</div>
					</div>
					<div class="grid grid-cols-3 gap-2">
						<div
							class="h-8 bg-gradient-to-r from-bubble-tea-pink/20 to-bubble-tea-purple/20 border border-bubble-tea-pink/30 rounded-bubble-tea"
						></div>
						<div
							class="h-8 bg-gradient-to-r from-bubble-tea-blue/20 to-bubble-tea-cyan/20 border border-bubble-tea-blue/30 rounded-bubble-tea"
						></div>
						<div
							class="h-8 bg-gradient-to-r from-bubble-tea-green/20 to-bubble-tea-yellow/20 border border-bubble-tea-green/30 rounded-bubble-tea"
						></div>
					</div>
				</div>
			</Card>
		</div>
	</div>

	<!-- Interactive Demo -->
	<div class="container mx-auto px-6 py-16">
		<Card variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} class="p-8">
			<h3 class="text-2xl font-bold text-center mb-8 text-white">Interactive Theme Demo</h3>

			<div class="grid md:grid-cols-2 gap-8">
				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Components</h4>
					<div class="space-y-3">
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} size="sm">Small Button</Button>
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} size="md">Medium Button</Button>
						<Button variant={currentTheme === 'terminal' ? 'terminal' : 'bubbleTea'} size="lg">Large Button</Button>
					</div>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold text-white/90">Color Palette Preview</h4>
					<ColorPalette theme={currentTheme} layout="grid" showCategories={false} interactive={false} />
				</div>
			</div>
		</Card>
	</div>

	<!-- Implementation Guide -->
	<div class="container mx-auto px-6 py-16">
		<div class="text-center mb-12">
			<h3 class="text-3xl font-bold text-white mb-4">Implementation</h3>
			<p class="text-gray-300 max-w-2xl mx-auto">Learn how to implement theme switching in your applications</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<Card variant="glass" class="p-6">
				<h4 class="text-xl font-semibold text-white mb-4">Basic Usage</h4>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto"><code class="text-green-400"
						>{`import { theme } from '$lib/stores/theme.js';

// Toggle between themes
theme.toggle();

// Set specific theme
theme.setTerminal();
theme.setBubbleTea();

// Listen to theme changes
theme.subscribe(currentTheme => {
  console.log('Theme changed:', currentTheme);
});`}</code
					></pre>
			</Card>

			<Card variant="glass" class="p-6">
				<h4 class="text-xl font-semibold text-white mb-4">Component Usage</h4>
				<pre class="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto"><code class="text-green-400"
						>{`<Button variant="bubbleTea">
  Bubble Tea Button
</Button>

<Card variant="terminal">
  Terminal styled card
</Card>

<Modal variant="bubbleTea">
  Modern TUI modal
</Modal>`}</code
					></pre>
			</Card>
		</div>
	</div>

	<!-- Status Bar Demo -->
	<StatusBar
		variant={currentTheme}
		status="Theme Demo Active"
		encoding="UTF-8"
		lineNumber={42}
		columnNumber={13}
		fileType="Svelte"
		indicators={[
			{ label: 'Theme', value: config.displayName, type: 'normal' },
			{ label: 'Status', value: 'Active', type: 'success' }
		]}
	/>
</div>
