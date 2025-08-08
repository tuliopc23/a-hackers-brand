#!/usr/bin/env bun
import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function extractCSS() {
	try {
		const distDir = join(rootDir, 'dist');
		const stylesDir = join(distDir, 'styles');

		// Ensure styles directory exists
		await mkdir(stylesDir, { recursive: true });

		// Read all CSS files from dist
		const files = await readdir(distDir, { recursive: true });
		const cssFiles = files.filter((file) => file.endsWith('.css'));

		let combinedCSS = '';

		for (const cssFile of cssFiles) {
			const content = await readFile(join(distDir, cssFile), 'utf-8');
			combinedCSS += `/* Source: ${cssFile} */\n${content}\n\n`;
		}

		// Write combined CSS
		await writeFile(join(stylesDir, 'index.css'), combinedCSS);

		console.log('✅ CSS extraction complete');
		console.log(`📦 Combined ${cssFiles.length} CSS files into dist/styles/index.css`);
	} catch (error) {
		console.error('❌ Error extracting CSS:', error);
		process.exit(1);
	}
}

// Run the extraction
await extractCSS();
