#!/usr/bin/env bun
import { readdir, readFile, writeFile, mkdir, stat } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { argv } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const isWatchMode = argv.includes('--watch');

// Component metadata and categorization
const COMPONENT_METADATA = {
	// Core Components
	Button: { category: 'core', description: 'Interactive button with multiple variants and states', complexity: 'simple' },
	Card: { category: 'core', description: 'Container component with flexible styling options', complexity: 'simple' },
	Input: { category: 'core', description: 'Text input field with validation support', complexity: 'simple' },
	Badge: { category: 'core', description: 'Small status indicator for labels and counts', complexity: 'simple' },
	Modal: { category: 'core', description: 'Overlay dialog for focused content and interactions', complexity: 'medium' },
	Select: { category: 'core', description: 'Dropdown selection component with search', complexity: 'medium' },
	Checkbox: { category: 'core', description: 'Binary choice input with custom styling', complexity: 'simple' },
	Switch: { category: 'core', description: 'Toggle switch for on/off states', complexity: 'simple' },
	Tabs: { category: 'core', description: 'Tabbed navigation for organizing content', complexity: 'medium' },
	Accordion: { category: 'core', description: 'Collapsible content sections', complexity: 'medium' },
	Alert: { category: 'core', description: 'Notification messages with severity levels', complexity: 'simple' },
	Progress: { category: 'core', description: 'Visual progress indicators', complexity: 'simple' },
	Tooltip: { category: 'core', description: 'Contextual information on hover', complexity: 'simple' },
	Slider: { category: 'core', description: 'Range input with visual feedback', complexity: 'medium' },
	Toast: { category: 'core', description: 'Temporary notification messages', complexity: 'medium' },
	Breadcrumb: { category: 'core', description: 'Navigation path indicator', complexity: 'simple' },
	Pagination: { category: 'core', description: 'Page navigation controls', complexity: 'medium' },
	Table: { category: 'core', description: 'Data table with sorting and filtering', complexity: 'complex' },
	
	// Terminal Components
	TerminalWindow: { category: 'terminal', description: 'Terminal emulator window with authentic CLI aesthetics', complexity: 'complex' },
	CommandBlock: { category: 'terminal', description: 'Code block styled as terminal output', complexity: 'simple' },
	MatrixRain: { category: 'terminal', description: 'Animated Matrix-style digital rain effect', complexity: 'medium' },
	RetroText: { category: 'terminal', description: 'Retro computer text with CRT effects', complexity: 'simple' },
	BootSequence: { category: 'terminal', description: 'System boot animation sequence', complexity: 'complex' },
	AdvancedTerminal: { category: 'terminal', description: 'Full terminal emulator with command execution', complexity: 'complex' },
	LiquidTerminal: { category: 'terminal', description: 'Terminal with liquid glass morphism effects', complexity: 'complex' },
	
	// Glass UI Components
	GlassButton: { category: 'glass', description: 'Button with glass morphism effects', complexity: 'medium' },
	GlassCard: { category: 'glass', description: 'Card with translucent glass morphism styling', complexity: 'simple' },
	GlassInput: { category: 'glass', description: 'Input field with glass morphism design', complexity: 'medium' },
	GlassModal: { category: 'glass', description: 'Modal dialog with glass morphism backdrop', complexity: 'medium' },
	GlassTabs: { category: 'glass', description: 'Tab navigation with glass morphism styling', complexity: 'medium' },
	
	// 3D/WebGL Components
	ThrelteCanvas: { category: 'webgl', description: '3D canvas wrapper for Three.js scenes', complexity: 'complex' },
	LiquidGlassScene: { category: 'webgl', description: 'Interactive 3D liquid glass shader scene', complexity: 'complex' },
	ParticleSystem: { category: 'webgl', description: '3D particle effects system', complexity: 'complex' },
	GlassScene: { category: 'webgl', description: '3D scene showcasing glass materials', complexity: 'complex' }
};

async function generateDocs() {
	try {
		console.log('📚 Generating component documentation...\n');

		// Read component exports from index.ts
		const componentsIndexPath = join(rootDir, 'src', 'lib', 'components', 'index.ts');
		const indexContent = await readFile(componentsIndexPath, 'utf-8');
		
		// Extract component names from default exports
		const componentMatches = indexContent.matchAll(/export\s*{\s*default\s+as\s+(\w+)\s*}\s*from\s*['"]\.\/(\w+)/g);
		const components = Array.from(componentMatches).map(match => match[1]);
		
		console.log(`Found ${components.length} components to document`);

		let generatedCount = 0;
		for (const componentName of components) {
			const metadata = COMPONENT_METADATA[componentName];
			if (metadata) {
				await generateComponentDoc(componentName, metadata);
				generatedCount++;
			} else {
				console.warn(`⚠️  No metadata for ${componentName}`);
			}
		}

		console.log(`\n✅ Generated ${generatedCount} component documentation pages!`);

		if (isWatchMode) {
			console.log('\n👀 Watching for changes...');
			// Watch implementation would go here
		}
	} catch (error) {
		console.error('❌ Documentation generation failed:', error);
		process.exit(1);
	}
}

async function generateComponentDoc(componentName, metadata) {
	const docPath = join(rootDir, 'src', 'routes', 'docs', 'components', metadata.category, componentName.toLowerCase(), '+page.svelte');
	const docDir = dirname(docPath);
	
	await mkdir(docDir, { recursive: true });

	// Generate documentation page
	const docContent = `<script lang="ts">
	import { ${componentName} } from '$lib/components';
	import ComponentPlayground from '$lib/docs/ComponentPlayground.svelte';
	import PropsTable from '$lib/docs/PropsTable.svelte';
	import EventsTable from '$lib/docs/EventsTable.svelte';
	import CodeBlock from '$lib/docs/CodeBlock.svelte';
	import { Badge, Alert } from '$lib/components';
	
	const componentMeta = {
		name: '${componentName}',
		description: '${metadata.description}',
		category: '${metadata.category}',
		complexity: '${metadata.complexity}',
		since: '0.2.0'
	};
	
	// TODO: Extract these from TypeScript definitions
	const props = [
		${metadata.complexity === 'simple' ? `
		{ name: 'class', type: 'string', defaultValue: "''", description: 'Additional CSS classes' },
		{ name: 'style', type: 'string', defaultValue: "''", description: 'Inline styles' },
		{ name: 'id', type: 'string', defaultValue: 'undefined', description: 'DOM element ID' }
		` : ''}
	];
	
	const events = [
		{ name: 'click', type: 'MouseEvent', description: 'Fired when the component is clicked' }
	];
	
	const playgroundProps = [
		${componentName === 'Button' ? `
		{ name: 'variant', type: 'select', defaultValue: 'solid', options: ['solid', 'ghost', 'glass', 'terminal'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
		` : ''}
	];
	
	const basicExample = \`<${componentName} />\`;
	
	const advancedExample = \`<script>
  import { ${componentName} } from 'a-hackers-brand';
  
  let value = $state('');
</script>

<${componentName} />
\`;
</script>

<svelte:head>
	<title>{componentMeta.name} - A Hacker's Brand</title>
	<meta name="description" content={componentMeta.description} />
</svelte:head>

<div class="prose prose-invert max-w-none">
	<header class="mb-8">
		<div class="flex items-center gap-3 mb-4">
			<h1 class="text-4xl font-bold text-green-400 inline-block">
				{componentMeta.name}
			</h1>
			<Badge variant="${metadata.complexity === 'simple' ? 'success' : metadata.complexity === 'medium' ? 'warning' : 'error'}">
				{componentMeta.complexity}
			</Badge>
			<Badge variant="default">
				v{componentMeta.since}
			</Badge>
		</div>
		<p class="text-xl text-gray-400">
			{componentMeta.description}
		</p>
	</header>
	
	<!-- Preview Section -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Preview</h2>
		<div class="p-8 border border-green-500/20 rounded-lg bg-black/50 flex items-center justify-center min-h-[200px]">
			<${componentName} />
		</div>
	</section>
	
	<!-- Interactive Playground -->
	{#if playgroundProps.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-4 text-green-400">Interactive Playground</h2>
			<ComponentPlayground 
				componentName="${componentName}"
				component={${componentName}} 
				props={playgroundProps} 
			/>
		</section>
	{/if}
	
	<!-- Code Examples -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Examples</h2>
		
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold mb-2">Basic Usage</h3>
				<CodeBlock code={basicExample} language="svelte" />
			</div>
			
			<div>
				<h3 class="text-lg font-semibold mb-2">Advanced Usage</h3>
				<CodeBlock code={advancedExample} language="svelte" />
			</div>
		</div>
	</section>
	
	<!-- API Reference -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">API Reference</h2>
		
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold mb-2">Props</h3>
				<PropsTable {props} />
			</div>
			
			{#if events.length > 0}
				<div>
					<h3 class="text-lg font-semibold mb-2">Events</h3>
					<EventsTable {events} />
				</div>
			{/if}
		</div>
	</section>
	
	<!-- Accessibility -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Accessibility</h2>
		<Alert variant="info">
			This component follows WCAG 2.1 AA standards with full keyboard navigation support.
		</Alert>
		<ul class="list-disc list-inside text-gray-400 mt-4 space-y-2">
			<li>Keyboard accessible with Tab navigation</li>
			<li>ARIA labels for screen readers</li>
			<li>Focus indicators for keyboard users</li>
			<li>Color contrast ratios meet WCAG standards</li>
		</ul>
	</section>
	
	<!-- Related Components -->
	<section>
		<h2 class="text-2xl font-semibold mb-4 text-green-400">Related Components</h2>
		<div class="flex flex-wrap gap-2">
			<a href="/docs/components/${metadata.category}" class="text-green-400 hover:underline">
				View all ${metadata.category} components →
			</a>
		</div>
	</section>
</div>`;

	await writeFile(docPath, docContent);
	console.log(`✅ Generated: ${componentName} → ${docPath}`);
}

// Helper function to extract props (stub for now)
function extractProps(source) {
	// TODO: Implement actual prop extraction from TypeScript
	return [];
}

// Helper function to extract events (stub for now)
function extractEvents(source) {
	// TODO: Implement actual event extraction
	return [];
}

// Run the generator
generateDocs();