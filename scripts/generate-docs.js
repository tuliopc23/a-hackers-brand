#!/usr/bin/env bun
import { readdir, readFile, writeFile, mkdir, stat } from 'fs/promises';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { argv } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const isWatchMode = argv.includes('--watch');

async function generateDocs() {
	try {
		console.log('📚 Generating component documentation...\n');
		
		const componentsDir = join(rootDir, 'src', 'lib', 'components');
		const docsDir = join(rootDir, 'src', 'routes', 'docs', 'components');
		
		// Get all component directories
		const entries = await readdir(componentsDir, { withFileTypes: true });
		const componentDirs = entries
			.filter(entry => entry.isDirectory())
			.map(entry => entry.name);
		
		console.log(`Found ${componentDirs.length} components to document`);
		
		for (const componentName of componentDirs) {
			const componentFile = join(componentsDir, componentName, `${componentName}.svelte`);
			
			try {
				await stat(componentFile);
				await generateComponentDoc(componentName, componentFile, docsDir);
			} catch (error) {
				console.warn(`⚠️  Skipping ${componentName}: Component file not found`);
			}
		}
		
		console.log('\n✅ Documentation generation complete!');
		
		if (isWatchMode) {
			console.log('\n👀 Watching for changes...');
			// In Bun, we can use the built-in file watcher
			const watcher = Bun.file(componentsDir).watch();
			for await (const event of watcher) {
				console.log(`\n🔄 Detected change: ${event.path}`);
				await generateDocs();
			}
		}
		
	} catch (error) {
		console.error('❌ Documentation generation failed:', error);
		process.exit(1);
	}
}

async function generateComponentDoc(componentName, componentFile, docsDir) {
	const docDir = join(docsDir, componentName.toLowerCase());
	await mkdir(docDir, { recursive: true });
	
	// Read component source
	const componentSource = await readFile(componentFile, 'utf-8');
	
	// Extract props from TypeScript interface
	const props = extractProps(componentSource);
	const events = extractEvents(componentSource);
	
	// Generate documentation page
	const docContent = `<script lang="ts">
	import { ${componentName} } from '$lib/components';
	import ComponentPlayground from '$lib/docs/ComponentPlayground.svelte';
	import PropsTable from '$lib/docs/PropsTable.svelte';
	import EventsTable from '$lib/docs/EventsTable.svelte';
	
	const componentMeta = {
		name: '${componentName}',
		description: 'A ${componentName} component for the A Hacker\'s Brand design system.',
		category: 'Core',
		complexity: 'Simple',
		since: '0.1.0'
	};
	
	const props = ${JSON.stringify(props, null, '\t\t')};
	
	const events = ${JSON.stringify(events, null, '\t\t')};
	
	const examples = [
		{
			title: 'Default',
			code: \`<${componentName} />\`
		}
	];
</script>

<svelte:head>
	<title>{componentMeta.name} - A Hacker's Brand</title>
	<meta name="description" content={componentMeta.description} />
</svelte:head>

<div class="docs-container">
	<header class="docs-header">
		<h1>{componentMeta.name}</h1>
		<p class="description">{componentMeta.description}</p>
		<div class="badges">
			<span class="badge category">{componentMeta.category}</span>
			<span class="badge complexity">{componentMeta.complexity}</span>
			<span class="badge version">Since v{componentMeta.since}</span>
		</div>
	</header>
	
	<section class="docs-section">
		<h2>Interactive Playground</h2>
		<ComponentPlayground component={${componentName}} {props} />
	</section>
	
	<section class="docs-section">
		<h2>Examples</h2>
		{#each examples as example}
			<div class="example">
				<h3>{example.title}</h3>
				<pre><code>{example.code}</code></pre>
			</div>
		{/each}
	</section>
	
	<section class="docs-section">
		<h2>API Reference</h2>
		<h3>Props</h3>
		<PropsTable {props} />
		
		{#if events.length > 0}
			<h3>Events</h3>
			<EventsTable {events} />
		{/if}
	</section>
</div>

<style>
	.docs-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	.docs-header {
		margin-bottom: 3rem;
	}
	
	h1 {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
	.description {
		font-size: 1.25rem;
		color: #666;
		margin-bottom: 1rem;
	}
	
	.badges {
		display: flex;
		gap: 0.5rem;
	}
	
	.badge {
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
	}
	
	.badge.category {
		background: #e0e7ff;
		color: #4338ca;
	}
	
	.badge.complexity {
		background: #d1fae5;
		color: #047857;
	}
	
	.badge.version {
		background: #fee2e2;
		color: #b91c1c;
	}
	
	.docs-section {
		margin-bottom: 3rem;
	}
	
	h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
	}
	
	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	
	.example {
		margin-bottom: 2rem;
	}
	
	pre {
		background: #1a1a1a;
		color: #fff;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
	}
	
	code {
		font-family: 'Fira Code', monospace;
	}
</style>`;
	
	await writeFile(join(docDir, '+page.svelte'), docContent);
	console.log(`  ✓ Generated docs for ${componentName}`);
}

function extractProps(source) {
	const props = [];
	
	// Extract TypeScript interface props
	const interfaceMatch = source.match(/interface\s+Props[^{]*{([^}]+)}/);
	if (interfaceMatch) {
		const propsContent = interfaceMatch[1];
		const propMatches = propsContent.matchAll(/\/\*\*([\s\S]*?)\*\/\s*(\w+)\s*\??\s*:\s*([^;]+);/g);
		
		for (const match of propMatches) {
			const description = match[1].trim().replace(/\s*\*\s*/g, ' ');
			const name = match[2];
			const type = match[3].trim();
			const required = !match[0].includes('?');
			
			props.push({
				name,
				type,
				required,
				description,
				default: 'undefined'
			});
		}
	}
	
	return props;
}

function extractEvents(source) {
	const events = [];
	
	// Extract event dispatchers
	const dispatchMatches = source.matchAll(/dispatch\(['"](\w+)['"][^)]*\)/g);
	for (const match of dispatchMatches) {
		const eventName = match[1];
		if (!events.some(e => e.name === eventName)) {
			events.push({
				name: eventName,
				type: 'CustomEvent',
				description: `${eventName} event`
			});
		}
	}
	
	return events;
}

// Run generation
await generateDocs();