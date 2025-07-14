<script lang="ts">
	import { onMount } from 'svelte';
	import { Card, Button, CodeHighlight } from '$lib/components/index.js';
	import { breathing } from '$lib/motion/index.js';

	let mounted = $state(false);

	const componentCategories = {
		'Core Components': [
			'Button', 'Card', 'Input', 'Badge', 'Modal', 'Textarea', 'Switch', 
			'Checkbox', 'Slider', 'Toast', 'Progress', 'Tabs', 'Accordion', 
			'Radio', 'Tooltip', 'Alert', 'Dropdown', 'Pagination', 'Skeleton', 'Select'
		],
		'Portfolio Components': [
			'ProjectCard', 'TechStack', 'ContactForm', 'Avatar', 'Stats'
		],
		'Terminal Components': [
			'TerminalWindow', 'AdvancedTerminal', 'LiquidTerminal', 'CommandBlock', 
			'AICommandSuggestions', 'BootSequence', 'TerminalStartup', 'MatrixRain', 
			'RetroText', 'RetroFuturisticText'
		],
		'Liquid Glass Components': [
			'LiquidGlass', 'LiquidGlassAdvanced', 'LiquidGlassShowcase', 'AppleLiquidShowcase'
		],
		'3D/WebGL Components': [
			'ThrelteCanvas', 'LazyThrelteCanvas', 'GlassScene'
		],
		'Performance Components': [
			'PerformanceDashboard', 'PerfOverlay', 'PerformanceMonitor'
		],
		'Error Boundaries': [
			'ErrorBoundary', 'AsyncErrorBoundary', 'FormErrorBoundary'
		],
		'Layout Components': [
			'Sidebar', 'Drawer', 'Carousel'
		],
		'Utility Components': [
			'CodeHighlight'
		]
	};

	const installationCode = `# Install the package
npm install a-hackers-brand

# Or with yarn
yarn add a-hackers-brand

# Or with pnpm
pnpm add a-hackers-brand`;

	const basicUsageCode = `<script>
  import { Button, Card, Input } from 'a-hackers-brand';
</script>

<Card variant="glass">
  <h2>Welcome to A Hacker's Brand</h2>
  <Input placeholder="Enter your name..." />
  <Button variant="liquid">Get Started</Button>
</Card>`;

	const typescriptCode = `import type { ButtonProps, CardProps } from 'a-hackers-brand';

interface FormData {
  email: string;
  password: string;
}

const buttonProps: Partial<ButtonProps> = {
  variant: 'liquid',
  size: 'lg',
  animated: true
};`;

	const motionSystemCode = `import { 
  magneticHover, 
  springPop, 
  glassFade, 
  liquidBlur,
  jellyHover,
  breathing 
} from 'a-hackers-brand';

// Use in your components
<div use:magneticHover={{ strength: 0.5, radius: 100 }}>
  Magnetic hover effect
</div>

<button use:springPop={{ scale: 0.95, duration: 200 }}>
  Spring animation
</button>`;

	const designTokensCode = `import { 
  brandColors, 
  brandSpacing, 
  brandTypography, 
  brandShadows 
} from 'a-hackers-brand';

// Use design tokens
const primaryColor = brandColors.primary.cyan;
const spacing = brandSpacing.lg;
const typography = brandTypography.heading.xl;`;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>API Documentation - A Hacker's Brand</title>
	<meta name="description" content="Complete API documentation for A Hacker's Brand design system" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
	<!-- Hero Section -->
	<section class="relative overflow-hidden py-20">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
		
		<div class="container mx-auto px-6 relative z-10">
			<div class="text-center mb-16">
				<h1 
					class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
					use:breathing={{ scale: [1, 1.02], duration: 3000 }}
				>
					API Documentation
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto">
					Complete reference for A Hacker's Brand design system components, utilities, and motion system
				</p>
			</div>
		</div>
	</section>

	<!-- Quick Start -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Quick Start</h2>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<Card variant="glass" class="p-6">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">Installation</h3>
					<CodeHighlight code={installationCode} language="bash" />
				</Card>

				<Card variant="glass" class="p-6">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">Basic Usage</h3>
					<CodeHighlight code={basicUsageCode} language="svelte" />
				</Card>
			</div>
		</div>
	</section>

	<!-- Component Categories -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Component Categories</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each Object.entries(componentCategories) as [category, components]}
					<Card variant="glass" class="p-6">
						<h3 class="text-lg font-bold text-cyan-400 mb-4">{category}</h3>
						<div class="space-y-2">
							{#each components as component}
								<div class="flex items-center justify-between">
									<span class="text-white/80 font-mono text-sm">{component}</span>
									<Button 
										size="sm" 
										variant="ghost" 
										href="/docs/components/{component.toLowerCase()}"
									>
										Docs
									</Button>
								</div>
							{/each}
						</div>
						<div class="mt-4 text-xs text-white/60">
							{components.length} components
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- TypeScript Support -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">TypeScript Support</h2>
			
			<Card variant="glass" class="p-6">
				<p class="text-white/80 mb-6">
					A Hacker's Brand is built with TypeScript and provides comprehensive type definitions for all components and utilities.
				</p>
				<CodeHighlight code={typescriptCode} language="typescript" />
			</Card>
		</div>
	</section>

	<!-- Motion System -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Motion System</h2>
			
			<Card variant="glass" class="p-6">
				<p class="text-white/80 mb-6">
					Rich motion system with magnetic hover, spring animations, liquid effects, and more.
				</p>
				<CodeHighlight code={motionSystemCode} language="svelte" />
			</Card>
		</div>
	</section>

	<!-- Design Tokens -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Design Tokens</h2>
			
			<Card variant="glass" class="p-6">
				<p class="text-white/80 mb-6">
					Consistent design tokens for colors, spacing, typography, and shadows.
				</p>
				<CodeHighlight code={designTokensCode} language="javascript" />
			</Card>
		</div>
	</section>

	<!-- Features Grid -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Key Features</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">🎨</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Liquid Glass Design</h3>
					<p class="text-white/80 text-sm">Beautiful glass morphism effects with backdrop blur and liquid animations</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">💻</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Terminal Aesthetics</h3>
					<p class="text-white/80 text-sm">CLI-inspired components perfect for developer portfolios</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">⚡</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">High Performance</h3>
					<p class="text-white/80 text-sm">Optimized for speed with lazy loading and tree-shaking</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">♿</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Accessible</h3>
					<p class="text-white/80 text-sm">WCAG 2.1 AA compliant with full keyboard navigation</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">🔧</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">TypeScript First</h3>
					<p class="text-white/80 text-sm">Built with TypeScript for excellent developer experience</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">🎭</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Rich Animations</h3>
					<p class="text-white/80 text-sm">Magnetic hover, spring physics, and liquid effects</p>
				</Card>
			</div>
		</div>
	</section>

	<!-- Getting Help -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Getting Help</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card variant="glass" class="p-6">
					<h3 class="text-lg font-bold text-cyan-400 mb-4">Documentation</h3>
					<p class="text-white/80 mb-4">
						Comprehensive guides and examples for every component.
					</p>
					<Button variant="liquid" href="/docs/components">
						Browse Components
					</Button>
				</Card>

				<Card variant="glass" class="p-6">
					<h3 class="text-lg font-bold text-cyan-400 mb-4">Examples</h3>
					<p class="text-white/80 mb-4">
						Live examples and interactive playground to test components.
					</p>
					<Button variant="liquid" href="/showcase">
						View Showcase
					</Button>
				</Card>
			</div>
		</div>
	</section>
</div>
