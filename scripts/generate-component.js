#!/usr/bin/env bun
import { mkdir, writeFile, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { argv } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const componentName = argv[2];
if (!componentName) {
	console.error('❌ Please provide a component name');
	console.log('Usage: bun run generate:component ComponentName');
	process.exit(1);
}

// Component template
const componentTemplate = `<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		/**
		 * Additional CSS classes
		 */
		class?: string;
	}

	let { class: className, ...restProps }: Props = $props();
</script>

<div class={cn('', className)} {...restProps}>
	<!-- ${componentName} content -->
</div>

<style>
	/* Component styles */
</style>`;

// Test template
const testTemplate = `import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import ${componentName} from './${componentName}.svelte';

describe('${componentName}', () => {
	it('renders correctly', () => {
		render(${componentName});
		// Add your test assertions here
	});
});`;

// Story template
const storyTemplate = `<script lang="ts">
	import ${componentName} from './${componentName}.svelte';
</script>

<div class="story-container">
	<h1>${componentName} Component</h1>
	
	<section>
		<h2>Default</h2>
		<${componentName} />
	</section>
	
	<!-- Add more variants here -->
</div>

<style>
	.story-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	h1 {
		font-size: 2rem;
		font-weight: bold;
	}
	
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}
</style>`;

async function generateComponent() {
	try {
		const componentDir = join(rootDir, 'src', 'lib', 'components', componentName);
		
		// Create component directory
		await mkdir(componentDir, { recursive: true });
		
		// Write component file
		await writeFile(
			join(componentDir, `${componentName}.svelte`),
			componentTemplate
		);
		
		// Write test file
		await writeFile(
			join(componentDir, `${componentName}.test.ts`),
			testTemplate
		);
		
		// Write story file
		await writeFile(
			join(componentDir, `${componentName}.story.svelte`),
			storyTemplate
		);
		
		// Update barrel export
		const indexPath = join(rootDir, 'src', 'lib', 'components', 'index.ts');
		try {
			let indexContent = await readFile(indexPath, 'utf-8');
			
			// Add export if not already present
			if (!indexContent.includes(`${componentName}.svelte`)) {
				indexContent += `\nexport { default as ${componentName} } from './${componentName}/${componentName}.svelte';`;
				await writeFile(indexPath, indexContent);
			}
		} catch (error) {
			// Create index file if it doesn't exist
			await writeFile(
				indexPath,
				`export { default as ${componentName} } from './${componentName}/${componentName}.svelte';`
			);
		}
		
		console.log(`✅ Component "${componentName}" generated successfully!`);
		console.log(`\n📁 Files created:`);
		console.log(`  - src/lib/components/${componentName}/${componentName}.svelte`);
		console.log(`  - src/lib/components/${componentName}/${componentName}.test.ts`);
		console.log(`  - src/lib/components/${componentName}/${componentName}.story.svelte`);
		console.log(`\n🚀 Next steps:`);
		console.log(`  1. Implement your component logic`);
		console.log(`  2. Add tests`);
		console.log(`  3. Create story variants`);
		console.log(`  4. Run tests: bun run test`);
		
	} catch (error) {
		console.error('❌ Error generating component:', error);
		process.exit(1);
	}
}

// Run generation
await generateComponent();