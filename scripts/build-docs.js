#!/usr/bin/env bun
import { readdir, readFile, writeFile, mkdir, stat } from 'fs/promises';
import { join, relative, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function buildDocs() {
	try {
		console.log('📚 Building integrated documentation...\n');
		
		const docsSourceDir = join(rootDir, 'src', 'routes', 'docs');
		const docsOutputDir = join(rootDir, 'dist', 'docs');
		
		// Ensure output directory exists
		await mkdir(docsOutputDir, { recursive: true });
		
		// Process all documentation files
		const files = await walkDir(docsSourceDir);
		const docFiles = files.filter(file => 
			file.endsWith('.svelte') || 
			file.endsWith('.md') || 
			file.endsWith('.svx')
		);
		
		console.log(`Found ${docFiles.length} documentation files`);
		
		// Generate documentation index
		const index = {
			generated: new Date().toISOString(),
			files: [],
			categories: new Set(),
			totalFiles: docFiles.length
		};
		
		for (const file of docFiles) {
			const relativePath = relative(docsSourceDir, file);
			const content = await readFile(file, 'utf-8');
			const metadata = extractMetadata(content, file);
			
			index.files.push({
				path: relativePath,
				...metadata
			});
			
			if (metadata.category) {
				index.categories.add(metadata.category);
			}
		}
		
		// Convert Set to Array for JSON
		index.categories = Array.from(index.categories);
		
		// Write documentation index
		await writeFile(
			join(docsOutputDir, 'index.json'), 
			JSON.stringify(index, null, 2)
		);
		
		console.log('\n✅ Documentation build complete!');
		console.log(`📁 Output: ${relative(rootDir, docsOutputDir)}`);
		console.log(`📊 Stats: ${index.totalFiles} files, ${index.categories.length} categories`);
		
	} catch (error) {
		console.error('❌ Documentation build failed:', error);
		process.exit(1);
	}
}

async function walkDir(dir) {
	const files = [];
	const entries = await readdir(dir, { withFileTypes: true });
	
	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...await walkDir(fullPath));
		} else {
			files.push(fullPath);
		}
	}
	
	return files;
}

function extractMetadata(content, filepath) {
	const metadata = {
		title: basename(filepath).replace(/\.(svelte|md|svx)$/, ''),
		category: null,
		description: null,
		keywords: []
	};
	
	// Extract frontmatter from markdown
	const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
	if (frontmatterMatch) {
		const frontmatter = frontmatterMatch[1];
		const titleMatch = frontmatter.match(/title:\s*["']?(.+?)["']?$/m);
		const categoryMatch = frontmatter.match(/category:\s*["']?(.+?)["']?$/m);
		const descriptionMatch = frontmatter.match(/description:\s*["']?(.+?)["']?$/m);
		const keywordsMatch = frontmatter.match(/keywords:\s*\[(.+?)\]/);
		
		if (titleMatch) metadata.title = titleMatch[1];
		if (categoryMatch) metadata.category = categoryMatch[1];
		if (descriptionMatch) metadata.description = descriptionMatch[1];
		if (keywordsMatch) {
			metadata.keywords = keywordsMatch[1]
				.split(',')
				.map(k => k.trim().replace(/["']/g, ''));
		}
	}
	
	// Extract from Svelte components
	if (filepath.endsWith('.svelte')) {
		const metaMatch = content.match(/const\s+componentMeta\s*=\s*{([^}]+)}/);
		if (metaMatch) {
			const metaContent = metaMatch[1];
			const categoryMatch = metaContent.match(/category:\s*["'](.+?)["']/);
			const descriptionMatch = metaContent.match(/description:\s*["'](.+?)["']/);
			
			if (categoryMatch) metadata.category = categoryMatch[1];
			if (descriptionMatch) metadata.description = descriptionMatch[1];
		}
	}
	
	return metadata;
}

// Import dirname for Bun
import { dirname } from 'path';

// Run the build
await buildDocs();