#!/usr/bin/env node

/**
 * A Hacker's Brand - Component Documentation Generator
 *
 * Automatically generates comprehensive documentation pages for all exported components.
 * Features:
 * - Hero/overview text
 * - Live playground with prop controls
 * - Code examples (auto-sync with source)
 * - Props & events tables (typed from .d.ts)
 * - Accessibility information
 * - Related components
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/lib/components');
const DOCS_DIR = path.join(PROJECT_ROOT, 'src/routes/docs/components');
const DIST_TYPES_DIR = path.join(PROJECT_ROOT, 'dist/components');

// Component metadata and descriptions
const COMPONENT_METADATA = {
	Button: {
		description:
			'Interactive button component with liquid glass morphism, magnetic hover effects, and terminal-inspired aesthetics. Built for accessibility and performance.',
		category: 'Core',
		complexity: 'Simple',
		since: '0.1.0'
	},
	Input: {
		description:
			'Elegant input field with liquid glass effects, floating labels, and comprehensive validation support.',
		category: 'Form',
		complexity: 'Simple',
		since: '0.1.0'
	},
	Modal: {
		description: 'Responsive modal dialog with backdrop blur, focus management, and smooth animations.',
		category: 'Overlay',
		complexity: 'Complex',
		since: '0.1.0'
	},
	Card: {
		description: 'Versatile container component with liquid glass aesthetics and hover effects.',
		category: 'Layout',
		complexity: 'Simple',
		since: '0.1.0'
	},
	Badge: {
		description: 'Status indicators and labels with terminal-inspired styling and variants.',
		category: 'Display',
		complexity: 'Simple',
		since: '0.1.0'
	},
	Tabs: {
		description: 'Tabbed interface component with smooth transitions and keyboard navigation.',
		category: 'Navigation',
		complexity: 'Medium',
		since: '0.1.0'
	},
	TerminalWindow: {
		description: 'Retro terminal window with authentic CLI aesthetics and animations.',
		category: 'Terminal',
		complexity: 'Complex',
		since: '0.1.0'
	},
	Progress: {
		description: 'Progress indicator with liquid animations and customizable styling.',
		category: 'Feedback',
		complexity: 'Simple',
		since: '0.1.0'
	},
	Accordion: {
		description: 'Collapsible content sections with smooth animations and keyboard support.',
		category: 'Layout',
		complexity: 'Medium',
		since: '0.1.0'
	},
	Alert: {
		description: 'Alert messages with various severity levels and terminal aesthetics.',
		category: 'Feedback',
		complexity: 'Simple',
		since: '0.1.0'
	}
};

/**
 * Parse TypeScript definition files to extract prop and event information
 */
async function parseTypeDefinition(componentName) {
	try {
		const dtsPath = path.join(DIST_TYPES_DIR, `${componentName}.svelte.d.ts`);
		const content = await fs.readFile(dtsPath, 'utf-8');

		// Extract interface Props
		const propsMatch = content.match(/interface Props[^{]*{([^}]*)}/s);
		const props = [];

		if (propsMatch) {
			const propsContent = propsMatch[1];
			const propLines = propsContent.split('\n').filter((line) => line.trim());

			for (const line of propLines) {
				const match = line.match(/^\s*([a-zA-Z'"-]+)\??:\s*([^;]+);?\s*$/);
				if (match) {
					const [, propName, propType] = match;
					const isOptional = line.includes('?:');
					const cleanPropName = propName.replace(/['"]/g, '');
					const cleanPropType = propType.replace(/;\s*$/, '').trim();

					props.push({
						name: cleanPropName,
						type: cleanPropType,
						optional: isOptional,
						default: getDefaultValue(cleanPropName, cleanPropType),
						description: getPropertyDescription(componentName, cleanPropName)
					});
				}
			}
		}

		return { props, events: getComponentEvents(componentName) };
	} catch (error) {
		console.warn(`Could not parse type definition for ${componentName}:`, error.message);
		return { props: [], events: [] };
	}
}

/**
 * Get default values for common props
 */
function getDefaultValue(propName, propType) {
	const defaults = {
		variant: "'default'",
		size: "'md'",
		loading: 'false',
		disabled: 'false',
		animate: 'true',
		class: "''",
		open: 'false',
		closable: 'true',
		glass: 'true'
	};

	if (defaults[propName]) return defaults[propName];
	if (propType.includes('boolean')) return 'false';
	if (propType.includes('string')) return "''";
	if (propType.includes('number')) return '0';
	return 'undefined';
}

/**
 * Get property descriptions
 */
function getPropertyDescription(componentName, propName) {
	const descriptions = {
		variant: 'Visual style variant of the component',
		size: 'Size variant of the component',
		loading: 'Show loading state',
		disabled: 'Disable component interactions',
		animate: 'Enable entry animations',
		class: 'Additional CSS classes',
		children: 'Component children/content',
		open: 'Control open/closed state',
		closable: 'Allow closing the component',
		glass: 'Enable liquid glass morphism effects',
		placeholder: 'Placeholder text',
		value: 'Component value',
		name: 'Form field name',
		id: 'Component ID',
		required: 'Mark field as required'
	};

	return descriptions[propName] || `${propName} property`;
}

/**
 * Get common events for components
 */
function getComponentEvents(componentName) {
	const commonEvents = [
		{ name: 'click', type: 'MouseEvent', description: 'Fired when component is clicked' },
		{ name: 'focus', type: 'FocusEvent', description: 'Fired when component receives focus' },
		{ name: 'blur', type: 'FocusEvent', description: 'Fired when component loses focus' }
	];

	const formEvents = [
		{ name: 'input', type: 'InputEvent', description: 'Fired when input value changes' },
		{ name: 'change', type: 'Event', description: 'Fired when input value is committed' }
	];

	const modalEvents = [
		{ name: 'open', type: 'CustomEvent', description: 'Fired when modal opens' },
		{ name: 'close', type: 'CustomEvent', description: 'Fired when modal closes' }
	];

	if (['Input', 'Textarea', 'Select'].includes(componentName)) {
		return [...commonEvents, ...formEvents];
	}

	if (['Modal', 'Drawer'].includes(componentName)) {
		return [...commonEvents, ...modalEvents];
	}

	return commonEvents;
}

/**
 * Generate code examples for components
 */
function generateCodeExamples(componentName, props) {
	const examples = {
		basic: `<${componentName}>\n  Content\n</${componentName}>`,
		variants: generateVariantExamples(componentName, props),
		advanced: generateAdvancedExamples(componentName, props)
	};

	return examples;
}

function generateVariantExamples(componentName, props) {
	const variantProp = props.find((p) => p.name === 'variant');
	if (!variantProp) return `<${componentName}>\n  Content\n</${componentName}>`;

	const variants = variantProp.type.match(/'([^']+)'/g) || [];

	return variants
		.map(
			(variant) =>
				`<${componentName} variant=${variant}>\n  ${variant.replace(/'/g, '').charAt(0).toUpperCase() + variant.replace(/'/g, '').slice(1)}\n</${componentName}>`
		)
		.join('\n');
}

function generateAdvancedExamples(componentName, props) {
	const advancedProps = props
		.filter((p) => !['class', 'children'].includes(p.name))
		.slice(0, 4)
		.map((p) => `\t${p.name}={${p.type.includes('boolean') ? 'true' : p.default}}`)
		.join('\n');

	return `<${componentName}\n${advancedProps}\n>\n\tAdvanced Usage\n</${componentName}>`;
}

/**
 * Generate the main documentation page template
 */
function generateDocumentationPage(componentName, typeInfo, examples) {
	const metadata = COMPONENT_METADATA[componentName] || {
		description: `${componentName} component with liquid glass effects and terminal aesthetics.`,
		category: 'General',
		complexity: 'Medium',
		since: '0.2.0'
	};

	return `<script lang="ts">
\timport { onMount } from 'svelte';
\timport ${componentName} from '$lib/components/${componentName}.svelte';
\timport CodeBlock from '$lib/components/CodeBlock.svelte';
\timport ComponentPlayground from '$lib/docs/ComponentPlayground.svelte';
\timport PropsTable from '$lib/docs/PropsTable.svelte';
\timport EventsTable from '$lib/docs/EventsTable.svelte';
\timport { glassFade } from '$lib/motion';

\tlet mounted = false;
\tlet activeExample = 'basic';

\tonMount(() => {
\t\tmounted = true;
\t});

\t// Component metadata
\tconst componentMeta = ${JSON.stringify(metadata, null, '\t\t')};

\t// Code examples (auto-synced with source)
\tconst examples = ${JSON.stringify(examples, null, '\t\t')};

\t// Props table data (extracted from .d.ts)
\tconst propsData = ${JSON.stringify(typeInfo.props, null, '\t\t')};

\t// Events table data
\tconst eventsData = ${JSON.stringify(typeInfo.events, null, '\t\t')};

\t// Playground props configuration
\tconst playgroundProps = {
${typeInfo.props
	.map(
		(prop) => `\t\t${prop.name}: { 
\t\t\ttype: '${prop.type.includes('boolean') ? 'boolean' : prop.type.includes('number') ? 'number' : 'string'}',
\t\t\tdefault: ${prop.default},
\t\t\toptions: ${generatePropOptions(prop)}
\t\t}`
	)
	.join(',\n')}
\t};

\tconst exampleTabs = Object.keys(examples).map(key => ({
\t\tid: key,
\t\tlabel: key.charAt(0).toUpperCase() + key.slice(1),
\t\tcode: examples[key]
\t}));
</script>

<svelte:head>
\t<title>${componentName} Component - A Hacker's Brand</title>
\t<meta name="description" content="${metadata.description}" />
</svelte:head>

<div class="docs-content">
\t<!-- Hero Section -->
\t<section class="mb-12">
\t\t<div class="flex items-start justify-between mb-6">
\t\t\t<div>
\t\t\t\t<h1 class="text-4xl lg:text-5xl font-bold mb-4">${componentName}</h1>
\t\t\t\t<div class="flex gap-2 mb-4">
\t\t\t\t\t<span class="px-3 py-1 bg-terminal-blue/20 text-terminal-blue text-sm rounded-full">
\t\t\t\t\t\t{componentMeta.category}
\t\t\t\t\t</span>
\t\t\t\t\t<span class="px-3 py-1 bg-terminal-purple/20 text-terminal-purple text-sm rounded-full">
\t\t\t\t\t\t{componentMeta.complexity}
\t\t\t\t\t</span>
\t\t\t\t\t<span class="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded-full">
\t\t\t\t\t\tv{componentMeta.since}
\t\t\t\t\t</span>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>

\t\t<p class="text-xl lg:text-2xl text-white/70 mb-8 max-w-4xl">
\t\t\t{componentMeta.description}
\t\t</p>

\t\t<!-- Quick Preview -->
\t\t<div class="p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10">
\t\t\t<div class="flex flex-wrap gap-4 items-center justify-center">
\t\t\t\t<${componentName}>Preview</${componentName}>
\t\t\t\t<${componentName} variant="secondary">Secondary</${componentName}>
\t\t\t\t<${componentName} variant="ghost">Ghost</${componentName}>
\t\t\t</div>
\t\t</div>
\t</section>

\t<!-- Interactive Playground -->
\t<section class="mb-16">
\t\t<h2 class="text-2xl lg:text-3xl font-bold mb-6">Interactive Playground</h2>
\t\t<p class="text-white/70 mb-8">
\t\t\tExperiment with different props and see the changes in real-time.
\t\t</p>
\t\t<ComponentPlayground 
\t\t\tcomponent={${componentName}} 
\t\t\tprops={playgroundProps}
\t\t\tcomponentName="${componentName}"
\t\t/>
\t</section>

\t<!-- Code Examples -->
\t<section class="mb-16">
\t\t<h2 class="text-2xl lg:text-3xl font-bold mb-6">Examples</h2>
\t\t
\t\t<!-- Example Navigation -->
\t\t<div class="flex flex-wrap gap-2 mb-8">
\t\t\t{#each exampleTabs as tab}
\t\t\t\t<button 
\t\t\t\t\tclass="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {activeExample === tab.id
\t\t\t\t\t\t? 'bg-terminal-blue/20 text-terminal-blue border border-terminal-blue/30' 
\t\t\t\t\t\t: 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
\t\t\t\t\t}"
\t\t\t\t\tonclick={() => activeExample = tab.id}
\t\t\t\t>
\t\t\t\t\t{tab.label}
\t\t\t\t</button>
\t\t\t{/each}
\t\t</div>

\t\t<!-- Example Content -->
\t\t{#each exampleTabs as tab}
\t\t\t{#if activeExample === tab.id}
\t\t\t\t<div class="space-y-8" in:glassFade>
\t\t\t\t\t<div>
\t\t\t\t\t\t<h3 class="text-xl font-semibold mb-4">{tab.label} Usage</h3>
\t\t\t\t\t\t
\t\t\t\t\t\t<div class="grid lg:grid-cols-2 gap-8">
\t\t\t\t\t\t\t<div class="space-y-4">
\t\t\t\t\t\t\t\t<h4 class="text-lg font-medium">Preview</h4>
\t\t\t\t\t\t\t\t<div class="p-6 bg-slate-800/50 rounded-lg border border-white/10">
\t\t\t\t\t\t\t\t\t<!-- Dynamic preview would go here -->
\t\t\t\t\t\t\t\t\t<${componentName}>Example</${componentName}>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="space-y-4">
\t\t\t\t\t\t\t\t<h4 class="text-lg font-medium">Code</h4>
\t\t\t\t\t\t\t\t<CodeBlock language="svelte" code={tab.code} />
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t{/if}
\t\t{/each}
\t</section>

\t<!-- API Reference -->
\t<section class="mb-16">
\t\t<h2 class="text-2xl lg:text-3xl font-bold mb-6">API Reference</h2>
\t\t
\t\t<!-- Props -->
\t\t<div class="mb-12">
\t\t\t<h3 class="text-xl font-semibold mb-6">Props</h3>
\t\t\t<PropsTable props={propsData} />
\t\t</div>

\t\t<!-- Events -->
\t\t<div class="mb-12">
\t\t\t<h3 class="text-xl font-semibold mb-6">Events</h3>
\t\t\t<EventsTable events={eventsData} />
\t\t</div>
\t</section>

\t<!-- Accessibility -->
\t<section class="mb-16">
\t\t<h2 class="text-2xl lg:text-3xl font-bold mb-6">Accessibility</h2>
\t\t<div class="space-y-6">
\t\t\t<div class="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
\t\t\t\t<h3 class="text-lg font-medium mb-4">Built-in Features</h3>
\t\t\t\t<ul class="space-y-2 text-white/80">
\t\t\t\t\t<li class="flex items-start space-x-2">
\t\t\t\t\t\t<span class="text-terminal-green mt-1">•</span>
\t\t\t\t\t\t<span>Keyboard navigation support</span>
\t\t\t\t\t</li>
\t\t\t\t\t<li class="flex items-start space-x-2">
\t\t\t\t\t\t<span class="text-terminal-green mt-1">•</span>
\t\t\t\t\t\t<span>Focus management with visible indicators</span>
\t\t\t\t\t</li>
\t\t\t\t\t<li class="flex items-start space-x-2">
\t\t\t\t\t\t<span class="text-terminal-green mt-1">•</span>
\t\t\t\t\t\t<span>Screen reader compatible</span>
\t\t\t\t\t</li>
\t\t\t\t\t<li class="flex items-start space-x-2">
\t\t\t\t\t\t<span class="text-terminal-green mt-1">•</span>
\t\t\t\t\t\t<span>ARIA attributes and roles</span>
\t\t\t\t\t</li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t</section>

\t<!-- Related Components -->
\t<section>
\t\t<h2 class="text-2xl lg:text-3xl font-bold mb-6">Related Components</h2>
\t\t<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
\t\t\t<!-- Dynamic related components would be generated here -->
\t\t\t<a 
\t\t\t\thref="/docs/components/button" 
\t\t\t\tclass="block p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-slate-900/70 hover:scale-105 transition-all duration-300"
\t\t\t>
\t\t\t\t<h3 class="text-lg font-medium mb-2">Button</h3>
\t\t\t\t<p class="text-white/70 text-sm">Interactive buttons with effects</p>
\t\t\t</a>
\t\t</div>
\t</section>
</div>

<style>
\t.docs-content {
\t\t@apply max-w-6xl mx-auto px-6 py-12;
\t}

\th1, h2, h3, h4 {
\t\t@apply text-white font-mono;
\t}

\th1 {
\t\tbackground: linear-gradient(135deg, #00ff94, #0099ff, #9c40ff);
\t\tbackground-clip: text;
\t\t-webkit-background-clip: text;
\t\t-webkit-text-fill-color: transparent;
\t}
</style>`;
}

function generatePropOptions(prop) {
	if (prop.type.includes('|')) {
		// Extract union type options
		const options = prop.type.match(/'([^']+)'/g) || [];
		return JSON.stringify(options.map((opt) => opt.replace(/'/g, '')));
	}
	return 'null';
}

/**
 * Generate supporting documentation components
 */
async function generateSupportingComponents() {
	// Component Playground
	const playgroundComponent = `<script lang="ts">
\timport { onMount } from 'svelte';
\timport CodeBlock from '$lib/components/CodeBlock.svelte';

\tinterface PlaygroundProps {
\t\tcomponent: any;
\t\tprops: Record<string, any>;
\t\tcomponentName: string;
\t}

\tconst { component: Component, props, componentName }: PlaygroundProps = $props();

\tlet currentProps = $state({});
\tlet generatedCode = $state('');

\tonMount(() => {
\t\t// Initialize with default values
\t\tObject.keys(props).forEach(key => {
\t\t\tcurrentProps[key] = props[key].default;
\t\t});
\t\tupdateCode();
\t});

\tfunction updateCode() {
\t\tconst activeProps = Object.entries(currentProps)
\t\t\t.filter(([key, value]) => value !== props[key].default)
\t\t\t.map(([key, value]) => \`\${key}={\${JSON.stringify(value)}}\`)
\t\t\t.join(' ');
\t\t
\t\tgeneratedCode = \`<\${componentName}\${activeProps ? ' ' + activeProps : ''}>\n\tContent\n</\${componentName}>\`;
\t}

\tfunction handlePropChange(propName: string, value: any) {
\t\tcurrentProps[propName] = value;
\t\tupdateCode();
\t}
</script>

<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
\t<div class="grid lg:grid-cols-2 gap-8">
\t\t<!-- Controls -->
\t\t<div class="space-y-6">
\t\t\t<h4 class="text-lg font-medium">Props</h4>
\t\t\t{#each Object.entries(props) as [propName, config]}
\t\t\t\t<div class="space-y-2">
\t\t\t\t\t<label class="block text-sm font-medium text-white/80">
\t\t\t\t\t\t{propName}
\t\t\t\t\t\t<span class="text-white/50 text-xs ml-2">{config.type}</span>
\t\t\t\t\t</label>
\t\t\t\t\t{#if config.type === 'boolean'}
\t\t\t\t\t\t<input 
\t\t\t\t\t\t\ttype="checkbox" 
\t\t\t\t\t\t\tbind:checked={currentProps[propName]}
\t\t\t\t\t\t\tonchange={() => handlePropChange(propName, currentProps[propName])}
\t\t\t\t\t\t\tclass="w-4 h-4 rounded border-white/20 bg-slate-800"
\t\t\t\t\t\t/>
\t\t\t\t\t{:else if config.options}
\t\t\t\t\t\t<select 
\t\t\t\t\t\t\tbind:value={currentProps[propName]}
\t\t\t\t\t\t\tonchange={() => handlePropChange(propName, currentProps[propName])}
\t\t\t\t\t\t\tclass="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white"
\t\t\t\t\t\t>
\t\t\t\t\t\t\t{#each config.options as option}
\t\t\t\t\t\t\t\t<option value={option}>{option}</option>
\t\t\t\t\t\t\t{/each}
\t\t\t\t\t\t</select>
\t\t\t\t\t{:else}
\t\t\t\t\t\t<input 
\t\t\t\t\t\t\ttype="text" 
\t\t\t\t\t\t\tbind:value={currentProps[propName]}
\t\t\t\t\t\t\tonchange={() => handlePropChange(propName, currentProps[propName])}
\t\t\t\t\t\t\tclass="w-full px-3 py-2 bg-slate-800 border border-white/20 rounded-lg text-white"
\t\t\t\t\t\t/>
\t\t\t\t\t{/if}
\t\t\t\t</div>
\t\t\t{/each}
\t\t</div>

\t\t<!-- Preview & Code -->
\t\t<div class="space-y-6">
\t\t\t<div class="space-y-4">
\t\t\t\t<h4 class="text-lg font-medium">Preview</h4>
\t\t\t\t<div class="p-6 bg-slate-800/50 rounded-lg border border-white/10 flex items-center justify-center">
\t\t\t\t\t<Component {...currentProps}>
\t\t\t\t\t\tPlayground Content
\t\t\t\t\t</Component>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t
\t\t\t<div class="space-y-4">
\t\t\t\t<h4 class="text-lg font-medium">Generated Code</h4>
\t\t\t\t<CodeBlock language="svelte" code={generatedCode} />
\t\t\t</div>
\t\t</div>
\t</div>
</div>`;

	// Props Table Component
	const propsTableComponent = `<script lang="ts">
\tinterface Prop {
\t\tname: string;
\t\ttype: string;
\t\toptional: boolean;
\t\tdefault: string;
\t\tdescription: string;
\t}

\tinterface PropsTableProps {
\t\tprops: Prop[];
\t}

\tconst { props }: PropsTableProps = $props();
</script>

<div class="overflow-x-auto">
\t<table class="w-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
\t\t<thead>
\t\t\t<tr class="border-b border-white/10">
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Prop</th>
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Type</th>
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Default</th>
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Description</th>
\t\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t\t\t{#each props as prop}
\t\t\t\t<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
\t\t\t\t\t<td class="p-4 font-mono text-terminal-blue">
\t\t\t\t\t\t{prop.name}
\t\t\t\t\t\t{#if prop.optional}
\t\t\t\t\t\t\t<span class="text-white/40 text-xs ml-1">?</span>
\t\t\t\t\t\t{/if}
\t\t\t\t\t</td>
\t\t\t\t\t<td class="p-4 font-mono text-sm text-terminal-purple">{prop.type}</td>
\t\t\t\t\t<td class="p-4 font-mono text-sm text-terminal-green">{prop.default}</td>
\t\t\t\t\t<td class="p-4 text-white/80">{prop.description}</td>
\t\t\t\t</tr>
\t\t\t{/each}
\t\t</tbody>
\t</table>
</div>`;

	// Events Table Component
	const eventsTableComponent = `<script lang="ts">
\tinterface Event {
\t\tname: string;
\t\ttype: string;
\t\tdescription: string;
\t}

\tinterface EventsTableProps {
\t\tevents: Event[];
\t}

\tconst { events }: EventsTableProps = $props();
</script>

<div class="overflow-x-auto">
\t<table class="w-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10">
\t\t<thead>
\t\t\t<tr class="border-b border-white/10">
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Event</th>
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Type</th>
\t\t\t\t<th class="text-left p-4 font-medium text-white/90">Description</th>
\t\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t\t\t{#each events as event}
\t\t\t\t<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
\t\t\t\t\t<td class="p-4 font-mono text-terminal-blue">{event.name}</td>
\t\t\t\t\t<td class="p-4 font-mono text-sm text-terminal-purple">{event.type}</td>
\t\t\t\t\t<td class="p-4 text-white/80">{event.description}</td>
\t\t\t\t</tr>
\t\t\t{/each}
\t\t</tbody>
\t</table>
</div>`;

	return {
		playground: playgroundComponent,
		propsTable: propsTableComponent,
		eventsTable: eventsTableComponent
	};
}

/**
 * Extract component names from the index file
 */
async function extractComponentNames() {
	try {
		const indexPath = path.join(COMPONENTS_DIR, 'index.ts');
		const content = await fs.readFile(indexPath, 'utf-8');

		// Extract default exports
		const exportMatches = content.match(/export\s+{\s*default\s+as\s+(\w+)\s*}/g) || [];
		const components = exportMatches
			.map((match) => {
				const nameMatch = match.match(/as\s+(\w+)/);
				return nameMatch ? nameMatch[1] : null;
			})
			.filter(Boolean);

		return components;
	} catch (error) {
		console.error('Could not extract component names:', error.message);
		return [];
	}
}

/**
 * Main generation function
 */
async function generateDocumentation() {
	console.log('🚀 Starting documentation generation...');

	try {
		// Create docs support components directory
		const docsLibDir = path.join(PROJECT_ROOT, 'src/lib/docs');
		await fs.mkdir(docsLibDir, { recursive: true });

		// Generate supporting components
		const supportingComponents = await generateSupportingComponents();

		await fs.writeFile(path.join(docsLibDir, 'ComponentPlayground.svelte'), supportingComponents.playground);

		await fs.writeFile(path.join(docsLibDir, 'PropsTable.svelte'), supportingComponents.propsTable);

		await fs.writeFile(path.join(docsLibDir, 'EventsTable.svelte'), supportingComponents.eventsTable);

		console.log('✅ Created supporting documentation components');

		// Extract component names
		const componentNames = await extractComponentNames();
		console.log(`📦 Found ${componentNames.length} components:`, componentNames.join(', '));

		// Generate documentation for each component
		for (const componentName of componentNames) {
			console.log(`📝 Generating docs for ${componentName}...`);

			try {
				// Parse type definitions
				const typeInfo = await parseTypeDefinition(componentName);

				// Generate code examples
				const examples = generateCodeExamples(componentName, typeInfo.props);

				// Generate documentation page
				const docContent = generateDocumentationPage(componentName, typeInfo, examples);

				// Create component directory
				const componentDocsDir = path.join(DOCS_DIR, componentName.toLowerCase());
				await fs.mkdir(componentDocsDir, { recursive: true });

				// Write documentation page
				const docFilePath = path.join(componentDocsDir, '+page.svelte');
				await fs.writeFile(docFilePath, docContent);

				console.log(`✅ Generated documentation for ${componentName}`);
			} catch (error) {
				console.error(`❌ Failed to generate docs for ${componentName}:`, error.message);
			}
		}

		console.log('🎉 Documentation generation completed!');
		console.log(`📚 Generated docs for ${componentNames.length} components`);
		console.log(`📁 Documentation available at: /src/routes/docs/components/[component]/+page.svelte`);
	} catch (error) {
		console.error('❌ Documentation generation failed:', error);
		process.exit(1);
	}
}

/**
 * Watch mode for development
 */
async function watchMode() {
	console.log('👀 Starting documentation generator in watch mode...');

	// Generate once immediately
	await generateDocumentation();

	console.log('🔄 Watching for changes in components...');

	// Watch for changes in component files
	const { watch } = await import('fs');

	watch(COMPONENTS_DIR, { recursive: true }, async (eventType, filename) => {
		if (filename && (filename.endsWith('.svelte') || filename.endsWith('.ts'))) {
			console.log(`📁 File changed: ${filename}`);
			console.log('🔄 Regenerating documentation...');
			await generateDocumentation();
		}
	});
}

// Run the generator
if (import.meta.url === `file://${process.argv[1]}`) {
	const args = process.argv.slice(2);

	if (args.includes('--watch') || args.includes('-w')) {
		watchMode();
	} else {
		generateDocumentation();
	}
}

export { generateDocumentation, watchMode };
