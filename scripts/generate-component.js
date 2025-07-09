#!/usr/bin/env node

/**
 * A Hacker's Brand - Component Generator CLI
 * Scaffolds new components with all necessary files and boilerplate
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI Colors
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m'
};

// Component templates
const templates = {
	basic: 'Basic component with standard props',
	form: 'Form component with validation and states',
	terminal: 'Terminal-themed component with CLI aesthetics',
	glass: 'Glass morphism component with liquid effects',
	animation: 'Component with motion and animation features',
	webgl: 'WebGL/3D component using Threlte',
	responsive: 'Responsive component with breakpoint handling'
};

// Component categories
const categories = {
	core: 'src/lib/components',
	forms: 'src/lib/components/forms',
	terminal: 'src/lib/components/terminal',
	liquidify: 'src/lib/components/liquidify',
	webgl: 'src/lib/components/webgl',
	responsive: 'src/lib/components/responsive',
	effects: 'src/lib/components/effects'
};

// CLI interface
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const question = promisify(rl.question).bind(rl);

async function askQuestion(prompt, validator) {
	while (true) {
		const answer = await question(prompt);
		if (!validator || validator(answer)) {
			return answer;
		}
		console.log(`${colors.red}Invalid input. Please try again.${colors.reset}`);
	}
}

function toPascalCase(str) {
	return str
		.replace(/[^a-zA-Z0-9]/g, ' ')
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join('');
}

function toCamelCase(str) {
	const pascal = toPascalCase(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toKebabCase(str) {
	return str
		.replace(/[^a-zA-Z0-9]/g, '-')
		.toLowerCase()
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

// Template generators
function generateSvelteComponent(componentName, template, options = {}) {
	const pascalName = toPascalCase(componentName);

	const baseTemplate = `<script lang="ts">
	import { cn } from '$lib/utils.js';${template === 'animation' ? "\n\timport { glassFade, liquidBlur } from '$lib/motion';" : ''}${template === 'webgl' ? "\n\timport { Canvas } from '@threlte/core';" : ''}

	interface Props {
		variant?: 'glass' | 'terminal' | 'minimal';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		class?: string;
		children?: any;${template === 'form' ? '\n\t\tvalue?: any;\n\t\tonChange?: (value: any) => void;\n\t\terror?: string;' : ''}${template === 'animation' ? '\n\t\tanimate?: boolean;\n\t\tduration?: number;' : ''}${template === 'responsive' ? "\n\t\tbreakpoint?: 'mobile' | 'tablet' | 'desktop';" : ''}
	}

	const {
		variant = 'glass',
		size = 'md',
		disabled = false,
		class: className = '',
		children${template === 'form' ? ',\n\t\tvalue,\n\t\tonChange,\n\t\terror' : ''}${template === 'animation' ? ',\n\t\tanimate = false,\n\t\tduration = 300' : ''}${template === 'responsive' ? ",\n\t\tbreakpoint = 'desktop'" : ''}
	}: Props = $props();

	// Component state${template === 'form' ? "\n\tlet inputValue = $state(value || '');" : ''}

	// Styling
	const variants = {
		glass: 'glass border border-white/20 bg-white/10',
		terminal: 'bg-terminal-bg border border-green-500 text-terminal-fg font-mono',
		minimal: 'bg-gray-100 border border-gray-300'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};${template === 'responsive' ? "\n\n\tconst breakpoints = {\n\t\tmobile: 'max-w-sm',\n\t\ttablet: 'max-w-md',\n\t\tdesktop: 'max-w-lg'\n\t};" : ''}

	const componentClasses = cn(
		'${pascalName.toLowerCase()} rounded-brand transition-all duration-200',
		variants[variant],
		sizes[size],${template === 'responsive' ? '\n\t\tbreakpoints[breakpoint],' : ''}
		{
			'opacity-50 cursor-not-allowed': disabled${template === 'form' ? ",\n\t\t\t'border-red-500': error" : ''}
		},
		className
	);${template === 'form' ? '\n\n\t// Form handling\n\tfunction handleInput(event: Event) {\n\t\tconst target = event.target as HTMLInputElement;\n\t\tinputValue = target.value;\n\t\tonChange?.(inputValue);\n\t}' : ''}
</script>

${generateSvelteTemplate(template, pascalName)}

<style>
	.${pascalName.toLowerCase()} {
		/* Custom component styles */
	}${template === 'terminal' ? '\n\n\t.${pascalName.toLowerCase()}.terminal {\n\t\ttext-shadow: 0 0 10px currentColor;\n\t}' : ''}${template === 'glass' ? '\n\n\t.${pascalName.toLowerCase()}.glass {\n\t\tbackdrop-filter: blur(12px);\n\t\t-webkit-backdrop-filter: blur(12px);\n\t}' : ''}${template === 'animation' ? '\n\n\t.${pascalName.toLowerCase()} {\n\t\ttransition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\t}\n\n\t.${pascalName.toLowerCase()}:hover {\n\t\ttransform: translateY(-2px);\n\t}' : ''}

	/* Responsive styles */
	@media (max-width: 768px) {
		.${pascalName.toLowerCase()} {
			/* Mobile styles */
		}
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.${pascalName.toLowerCase()} {
			transition: none;
		}
	}

	@media (prefers-contrast: high) {
		.${pascalName.toLowerCase()} {
			border-width: 2px;
		}
	}
</style>`;

	return baseTemplate;
}

function generateSvelteTemplate(template, componentName) {
	switch (template) {
		case 'form':
			return `<div 
	class={componentClasses}
	role="group"
	aria-labelledby="\${componentName}-label"
>
	<label id="\${componentName}-label" for="\${componentName}-input" class="block text-sm font-medium mb-2">
		{#if children}
			{@render children()}
		{:else}
			${componentName}
		{/if}
	</label>
	
	<input
		id="\${componentName}-input"
		type="text"
		value={inputValue}
		oninput={handleInput}
		{disabled}
		aria-invalid={error ? 'true' : 'false'}
		aria-describedby={error ? '\${componentName}-error' : undefined}
		class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
	/>
	
	{#if error}
		<p id="\${componentName}-error" class="mt-1 text-sm text-red-600" role="alert">
			{error}
		</p>
	{/if}
</div>`;

		case 'webgl':
			return `<div class={componentClasses}>
	<Canvas>
		<!-- WebGL content goes here -->
		{#if children}
			{@render children()}
		{:else}
			<mesh>
				<!-- Default 3D content -->
			</mesh>
		{/if}
	</Canvas>
</div>`;

		case 'animation':
			return `<div 
	class={componentClasses}
	in:glassFade={animate ? { duration } : undefined}
	use:liquidBlur={animate ? { intensity: 0.1 } : undefined}
>
	{#if children}
		{@render children()}
	{:else}
		${componentName} Component
	{/if}
</div>`;

		case 'terminal':
			return `<div 
	class={componentClasses}
	role="log"
	aria-live="polite"
>
	<div class="terminal-header">
		<span class="terminal-title">${componentName}</span>
	</div>
	
	<div class="terminal-content">
		{#if children}
			{@render children()}
		{:else}
			<span class="terminal-prompt">$ </span>
			<span class="terminal-cursor">█</span>
		{/if}
	</div>
</div>`;

		default:
			return `<div class={componentClasses}>
	{#if children}
		{@render children()}
	{:else}
		${componentName} Component
	{/if}
</div>`;
	}
}

function generateTypeDefinitions(componentName, template) {
	const pascalName = toPascalCase(componentName);

	return `import type { ComponentType } from 'svelte';

export interface ${pascalName}Props {
	variant?: 'glass' | 'terminal' | 'minimal';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	class?: string;
	children?: any;${template === 'form' ? '\n\tvalue?: any;\n\tonChange?: (value: any) => void;\n\terror?: string;' : ''}${template === 'animation' ? '\n\tanimate?: boolean;\n\tduration?: number;' : ''}${template === 'responsive' ? "\n\tbreakpoint?: 'mobile' | 'tablet' | 'desktop';" : ''}
}

declare const ${pascalName}: ComponentType<${pascalName}Props>;

export default ${pascalName};`;
}

function generateTestFile(componentName, template) {
	const pascalName = toPascalCase(componentName);

	return `import { describe, it, expect, vi } from 'vitest';
import { createMockElement, createMockProps, simulateEvent } from './svelte5-test-utils.js';
import ${pascalName} from '../${pascalName}.svelte';

describe('${pascalName}', () => {
	it('renders with default props', () => {
		const element = createMockElement();
		const props = createMockProps();
		
		// Test component creation
		expect(() => new ${pascalName}({ target: element, props })).not.toThrow();
	});

	it('applies variant classes correctly', () => {
		const element = createMockElement();
		
		const variants = ['glass', 'terminal', 'minimal'] as const;
		
		variants.forEach(variant => {
			const props = createMockProps({ variant });
			const component = new ${pascalName}({ target: element, props });
			
			expect(element.className).toContain(variant);
		});
	});

	it('applies size classes correctly', () => {
		const element = createMockElement();
		
		const sizes = ['sm', 'md', 'lg'] as const;
		
		sizes.forEach(size => {
			const props = createMockProps({ size });
			const component = new ${pascalName}({ target: element, props });
			
			// Verify size is applied
			expect(element.className).toMatch(new RegExp(\`\${size}\`));
		});
	});

	it('handles disabled state', () => {
		const element = createMockElement();
		const props = createMockProps({ disabled: true });
		
		const component = new ${pascalName}({ target: element, props });
		
		expect(element.className).toContain('opacity-50');
		expect(element.className).toContain('cursor-not-allowed');
	});${template === 'form' ? "\n\n\tit('handles form input', () => {\n\t\tconst element = createMockElement();\n\t\tconst onChange = vi.fn();\n\t\tconst props = createMockProps({ onChange });\n\t\t\n\t\tconst component = new " + pascalName + "({ target: element, props });\n\t\t\n\t\t// Simulate input\n\t\tsimulateEvent(element, 'input', { target: { value: 'test' } });\n\t\t\n\t\texpect(onChange).toHaveBeenCalledWith('test');\n\t});\n\n\tit('displays error state', () => {\n\t\tconst element = createMockElement();\n\t\tconst props = createMockProps({ error: 'Invalid input' });\n\t\t\n\t\tconst component = new " + pascalName + "({ target: element, props });\n\t\t\n\t\texpect(element.className).toContain('border-red-500');\n\t});" : ''}

	it('supports custom className', () => {
		const element = createMockElement();
		const customClass = 'custom-test-class';
		const props = createMockProps({ class: customClass });
		
		const component = new ${pascalName}({ target: element, props });
		
		expect(element.className).toContain(customClass);
	});

	it('has proper accessibility attributes', () => {
		const element = createMockElement();
		const props = createMockProps();
		
		const component = new ${pascalName}({ target: element, props });
		
		// Check for basic accessibility
		expect(element.getAttribute).toBeDefined();
		${template === 'form' ? "expect(element.getAttribute('role')).toBe('group');" : ''}
	});${template === 'animation' ? "\n\n\tit('handles animation props', () => {\n\t\tconst element = createMockElement();\n\t\tconst props = createMockProps({ animate: true, duration: 500 });\n\t\t\n\t\tconst component = new " + pascalName + '({ target: element, props });\n\t\t\n\t\t// Animation should be applied\n\t\texpected(element.style.transition).toBeDefined();\n\t});' : ''}
});`;
}

function generateStoryFile(componentName, template) {
	const pascalName = toPascalCase(componentName);

	return `import ${pascalName} from './${pascalName}.svelte';

export default {
	title: 'Components/${pascalName}',
	component: ${pascalName},
	parameters: {
		docs: {
			description: {
				component: '${pascalName} component with ${template} template'
			}
		}
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['glass', 'terminal', 'minimal']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		disabled: {
			control: { type: 'boolean' }
		}${template === 'form' ? ",\n\t\tvalue: {\n\t\t\tcontrol: { type: 'text' }\n\t\t},\n\t\terror: {\n\t\t\tcontrol: { type: 'text' }\n\t\t}" : ''}${template === 'animation' ? ",\n\t\tanimate: {\n\t\t\tcontrol: { type: 'boolean' }\n\t\t},\n\t\tduration: {\n\t\t\tcontrol: { type: 'number' }\n\t\t}" : ''}
	}
};

export const Default = {
	args: {
		variant: 'glass',
		size: 'md',
		disabled: false
	}
};

export const AllVariants = () => ({
	Component: ${pascalName},
	template: \`
		<div class="space-y-4">
			<${pascalName} variant="glass">Glass Variant</${pascalName}>
			<${pascalName} variant="terminal">Terminal Variant</${pascalName}>
			<${pascalName} variant="minimal">Minimal Variant</${pascalName}>
		</div>
	\`
});

export const AllSizes = () => ({
	Component: ${pascalName},
	template: \`
		<div class="space-y-4">
			<${pascalName} size="sm">Small Size</${pascalName}>
			<${pascalName} size="md">Medium Size</${pascalName}>
			<${pascalName} size="lg">Large Size</${pascalName}>
		</div>
	\`
});

export const DisabledState = {
	args: {
		...Default.args,
		disabled: true
	}
};${template === 'form' ? "\n\nexport const WithError = {\n\targs: {\n\t\t...Default.args,\n\t\terror: 'This field is required'\n\t}\n};" : ''}${template === 'animation' ? '\n\nexport const Animated = {\n\targs: {\n\t\t...Default.args,\n\t\tanimate: true,\n\t\tduration: 300\n\t}\n};' : ''}`;
}

async function generateComponent() {
	console.log(`${colors.bright}${colors.magenta}🎨 A Hacker's Brand Component Generator${colors.reset}\n`);

	// Get component name
	const componentName = await askQuestion(
		`${colors.cyan}Component name: ${colors.reset}`,
		(input) => input.trim().length > 0
	);

	const pascalName = toPascalCase(componentName);

	// Get template type
	console.log(`\n${colors.yellow}Available templates:${colors.reset}`);
	Object.entries(templates).forEach(([key, description], index) => {
		console.log(`  ${index + 1}. ${key} - ${description}`);
	});

	const templateChoice = await askQuestion(
		`\n${colors.cyan}Choose template (1-${Object.keys(templates).length}): ${colors.reset}`,
		(input) => {
			const num = parseInt(input);
			return num >= 1 && num <= Object.keys(templates).length;
		}
	);

	const template = Object.keys(templates)[parseInt(templateChoice) - 1];

	// Get category
	console.log(`\n${colors.yellow}Available categories:${colors.reset}`);
	Object.entries(categories).forEach(([key, path], index) => {
		console.log(`  ${index + 1}. ${key} - ${path}`);
	});

	const categoryChoice = await askQuestion(
		`\n${colors.cyan}Choose category (1-${Object.keys(categories).length}): ${colors.reset}`,
		(input) => {
			const num = parseInt(input);
			return num >= 1 && num <= Object.keys(categories).length;
		}
	);

	const categoryKey = Object.keys(categories)[parseInt(categoryChoice) - 1];
	const categoryPath = categories[categoryKey];

	// Get options
	const includeTests = (await askQuestion(`${colors.cyan}Include test file? (y/n): ${colors.reset}`))
		.toLowerCase()
		.startsWith('y');

	const includeStory = (await askQuestion(`${colors.cyan}Include story file? (y/n): ${colors.reset}`))
		.toLowerCase()
		.startsWith('y');

	const includeTypes = (await askQuestion(`${colors.cyan}Include TypeScript definitions? (y/n): ${colors.reset}`))
		.toLowerCase()
		.startsWith('y');

	rl.close();

	// Generate files
	console.log(`\n${colors.blue}Generating ${pascalName} component...${colors.reset}`);

	const basePath = path.join(process.cwd(), categoryPath);
	const componentPath = path.join(basePath, `${pascalName}.svelte`);

	// Create directory if it doesn't exist
	fs.mkdirSync(basePath, { recursive: true });

	// Check if component already exists
	if (fs.existsSync(componentPath)) {
		console.log(`${colors.red}❌ Component ${pascalName} already exists at ${componentPath}${colors.reset}`);
		process.exit(1);
	}

	// Generate component file
	const componentContent = generateSvelteComponent(componentName, template);
	fs.writeFileSync(componentPath, componentContent);
	console.log(`${colors.green}✅ Created: ${componentPath}${colors.reset}`);

	// Generate test file
	if (includeTests) {
		const testPath = path.join(basePath, '__tests__', `${pascalName}.svelte5.test.ts`);
		fs.mkdirSync(path.dirname(testPath), { recursive: true });
		const testContent = generateTestFile(componentName, template);
		fs.writeFileSync(testPath, testContent);
		console.log(`${colors.green}✅ Created: ${testPath}${colors.reset}`);
	}

	// Generate story file
	if (includeStory) {
		const storyPath = path.join(basePath, `${pascalName}.story.svelte`);
		const storyContent = generateStoryFile(componentName, template);
		fs.writeFileSync(storyPath, storyContent);
		console.log(`${colors.green}✅ Created: ${storyPath}${colors.reset}`);
	}

	// Generate TypeScript definitions
	if (includeTypes) {
		const typesPath = path.join(basePath, `${pascalName}.d.ts`);
		const typesContent = generateTypeDefinitions(componentName, template);
		fs.writeFileSync(typesPath, typesContent);
		console.log(`${colors.green}✅ Created: ${typesPath}${colors.reset}`);
	}

	// Update index.ts export
	const indexPath = path.join(basePath, 'index.ts');
	let indexContent = '';

	if (fs.existsSync(indexPath)) {
		indexContent = fs.readFileSync(indexPath, 'utf8');
	}

	const exportLine = `export { default as ${pascalName} } from './${pascalName}.svelte';`;

	if (!indexContent.includes(exportLine)) {
		indexContent += `\n${exportLine}`;
		fs.writeFileSync(indexPath, indexContent);
		console.log(`${colors.green}✅ Updated: ${indexPath}${colors.reset}`);
	}

	// Summary
	console.log(`\n${colors.bright}🎉 Component ${pascalName} generated successfully!${colors.reset}`);
	console.log(`\n${colors.cyan}Next steps:${colors.reset}`);
	console.log(`1. Review the generated component: ${componentPath}`);
	console.log(`2. Customize the component logic and styling`);
	if (includeTests) {
		console.log(`3. Run tests: npm test ${pascalName}`);
	}
	if (includeStory) {
		console.log(`4. View story: npm run docs:dev`);
	}
	console.log(`5. Build the package: npm run build:package`);

	console.log(`\n${colors.yellow}Template used: ${template}${colors.reset}`);
	console.log(`${colors.yellow}Category: ${categoryKey} (${categoryPath})${colors.reset}`);
}

// CLI argument handling
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
	console.log(`
${colors.bright}${colors.magenta}A Hacker's Brand Component Generator${colors.reset}

${colors.cyan}Usage:${colors.reset}
  node scripts/generate-component.js

${colors.cyan}Options:${colors.reset}
  --help, -h     Show this help message

${colors.cyan}Templates:${colors.reset}
${Object.entries(templates)
	.map(([key, desc]) => `  ${key.padEnd(12)} ${desc}`)
	.join('\n')}

${colors.cyan}Categories:${colors.reset}
${Object.entries(categories)
	.map(([key, path]) => `  ${key.padEnd(12)} ${path}`)
	.join('\n')}
`);
	process.exit(0);
}

// Run the generator
generateComponent().catch((error) => {
	console.error(`${colors.red}❌ Error generating component:${colors.reset}`, error);
	process.exit(1);
});
