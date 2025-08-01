<script lang="ts">
	import { Button, Badge, Alert, Tabs } from '$lib/components';
	import CodeBlock from '$lib/docs/CodeBlock.svelte';
	
	const installCommands = {
		bun: 'bun add a-hackers-brand',
		npm: 'npm install a-hackers-brand',
		pnpm: 'pnpm add a-hackers-brand',
		yarn: 'yarn add a-hackers-brand'
	};
	
	const importExample = `import { Button, GlassCard, TerminalWindow } from 'a-hackers-brand';
import 'a-hackers-brand/styles';`;
	
	const usageExample = `<script>
  import { Button, GlassCard, TerminalWindow } from 'a-hackers-brand';
  import 'a-hackers-brand/styles';
  
  let count = $state(0);
</script>

<TerminalWindow title="counter.exe">
  <GlassCard class="p-6">
    <h2 class="text-2xl font-bold mb-4">Counter: {count}</h2>
    <div class="flex gap-2">
      <Button variant="terminal" onclick={() => count++}>
        Increment
      </Button>
      <Button variant="glass" onclick={() => count = 0}>
        Reset
      </Button>
    </div>
  </GlassCard>
</TerminalWindow>`;
	
	const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/a-hackers-brand/**/*.{js,svelte}'
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    }
  },
  plugins: []
}`;
	
	let selectedPackageManager = $state('bun');
</script>

<svelte:head>
	<title>Getting Started - A Hacker's Brand</title>
	<meta name="description" content="Learn how to install and use A Hacker's Brand design system in your Svelte projects" />
</svelte:head>

<article class="prose prose-invert max-w-none">
	<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
		Getting Started
	</h1>
	
	<p class="text-xl text-gray-400 mb-8">
		Get up and running with A Hacker's Brand in less than 5 minutes.
	</p>
	
	<Alert variant="info" class="mb-8">
		<strong>Prerequisites:</strong> This guide assumes you have a SvelteKit project set up with TypeScript and Tailwind CSS.
		If you need help setting up a new project, check out the <a href="https://kit.svelte.dev/docs/creating-a-project" class="text-green-400 hover:underline">SvelteKit documentation</a>.
	</Alert>
	
	<!-- Installation -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Installation</h2>
		
		<p class="text-gray-300 mb-4">
			Install A Hacker's Brand using your preferred package manager:
		</p>
		
		<div class="space-y-4">
			<div class="flex gap-2 flex-wrap">
				{#each Object.keys(installCommands) as pm}
					<Button
						variant={selectedPackageManager === pm ? 'terminal' : 'ghost'}
						size="sm"
						onclick={() => selectedPackageManager = pm}
					>
						{pm}
					</Button>
				{/each}
			</div>
			
			<CodeBlock code={installCommands[selectedPackageManager]} language="bash" showLineNumbers={false} />
		</div>
		
		<div class="mt-6">
			<h3 class="text-lg font-semibold mb-2">Peer Dependencies</h3>
			<p class="text-gray-400 mb-2">
				Make sure you have the following peer dependencies installed:
			</p>
			<ul class="list-disc list-inside text-gray-400 space-y-1">
				<li>Svelte 5.0+</li>
				<li>SvelteKit 2.0+</li>
				<li>Three.js 0.170+ (for 3D components)</li>
				<li>@threlte/core 8.0+ (for 3D components)</li>
			</ul>
		</div>
	</section>
	
	<!-- Basic Usage -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Basic Usage</h2>
		
		<h3 class="text-lg font-semibold mb-2">1. Import Components and Styles</h3>
		<p class="text-gray-400 mb-4">
			Import the components you need along with the base styles:
		</p>
		<CodeBlock code={importExample} language="javascript" />
		
		<h3 class="text-lg font-semibold mb-2 mt-6">2. Use Components</h3>
		<p class="text-gray-400 mb-4">
			Start using the components in your Svelte files:
		</p>
		<CodeBlock code={usageExample} language="svelte" />
	</section>
	
	<!-- Configuration -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Configuration</h2>
		
		<h3 class="text-lg font-semibold mb-2">Tailwind CSS Setup</h3>
		<p class="text-gray-400 mb-4">
			Add A Hacker's Brand to your Tailwind CSS content configuration to ensure all styles are included:
		</p>
		<CodeBlock code={tailwindConfig} language="javascript" />
		
		<h3 class="text-lg font-semibold mb-2 mt-6">TypeScript Support</h3>
		<p class="text-gray-400 mb-4">
			A Hacker's Brand is written in TypeScript and provides full type definitions out of the box.
			Your IDE should automatically pick up the types for autocomplete and type checking.
		</p>
	</section>
	
	<!-- Features -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">What's Included</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<h3 class="text-lg font-semibold mb-2">🎨 50+ Components</h3>
				<p class="text-gray-400">
					From basic buttons to complex 3D scenes, everything you need to build modern interfaces.
				</p>
			</div>
			
			<div>
				<h3 class="text-lg font-semibold mb-2">🎭 Unique Aesthetics</h3>
				<p class="text-gray-400">
					Liquid glass morphism meets terminal/CLI aesthetics for a one-of-a-kind look.
				</p>
			</div>
			
			<div>
				<h3 class="text-lg font-semibold mb-2">⚡ Performance First</h3>
				<p class="text-gray-400">
					Tree-shakeable, optimized bundle sizes, and lazy-loading support for 3D components.
				</p>
			</div>
			
			<div>
				<h3 class="text-lg font-semibold mb-2">♿ Accessible by Default</h3>
				<p class="text-gray-400">
					WCAG 2.1 AA compliant components with full keyboard navigation support.
				</p>
			</div>
		</div>
	</section>
	
	<!-- Next Steps -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Next Steps</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<a href="/docs/components" class="block p-4 border border-green-500/20 rounded-lg hover:border-green-400/50 transition-colors">
				<h3 class="font-semibold mb-2">Browse Components →</h3>
				<p class="text-sm text-gray-400">
					Explore our full component library with live examples.
				</p>
			</a>
			
			<a href="/docs/design" class="block p-4 border border-green-500/20 rounded-lg hover:border-green-400/50 transition-colors">
				<h3 class="font-semibold mb-2">Design Guidelines →</h3>
				<p class="text-sm text-gray-400">
					Learn about our design principles and visual language.
				</p>
			</a>
			
			<a href="/playground" class="block p-4 border border-green-500/20 rounded-lg hover:border-green-400/50 transition-colors">
				<h3 class="font-semibold mb-2">Try Playground →</h3>
				<p class="text-sm text-gray-400">
					Experiment with components in our interactive playground.
				</p>
			</a>
		</div>
	</section>
	
	<!-- Support -->
	<section>
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Need Help?</h2>
		
		<div class="space-y-2 text-gray-400">
			<p>
				• Check out our <a href="/docs/components" class="text-green-400 hover:underline">component documentation</a>
			</p>
			<p>
				• Join our <a href="https://discord.gg/hackersbrand" class="text-green-400 hover:underline">Discord community</a>
			</p>
			<p>
				• Report issues on <a href="https://github.com/tuliopc23/a-hackers-brand/issues" class="text-green-400 hover:underline">GitHub</a>
			</p>
		</div>
	</section>
</article>