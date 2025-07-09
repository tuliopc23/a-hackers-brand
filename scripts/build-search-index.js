#!/usr/bin/env node

/**
 * Build Search Index Script
 *
 * This script generates a search index for documentation files at build time.
 * It scans all documentation files in /src/routes/docs, extracts frontmatter metadata,
 * parses content to extract headings, and generates a JSON search index file.
 *
 * Supports both markdown (.md, .svx) and Svelte component (.svelte) documentation files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOCS_DIR = path.join(__dirname, '../src/routes/docs');
const OUTPUT_PATH = path.join(__dirname, '../static/search-index.json');
const SEARCH_INDEX_PATH = path.join(__dirname, '../src/lib/search/search-index.json');

/**
 * Recursively find files with specific extensions
 */
function findFiles(dir, extensions = ['.md', '.svx', '.svelte']) {
	const files = [];

	function traverse(currentDir) {
		try {
			const entries = fs.readdirSync(currentDir, { withFileTypes: true });

			for (const entry of entries) {
				const fullPath = path.join(currentDir, entry.name);

				if (entry.isDirectory()) {
					// Skip node_modules and .git directories
					if (entry.name !== 'node_modules' && entry.name !== '.git') {
						traverse(fullPath);
					}
				} else if (entry.isFile()) {
					const ext = path.extname(entry.name);
					if (extensions.includes(ext)) {
						files.push(fullPath);
					}
				}
			}
		} catch (error) {
			console.warn(`Warning: Could not read directory ${currentDir}:`, error.message);
		}
	}

	if (fs.existsSync(dir)) {
		traverse(dir);
	}

	return files;
}

/**
 * Extract frontmatter from markdown content
 */
function extractFrontmatter(content) {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
	const match = content.match(frontmatterRegex);

	if (!match) {
		return { frontmatter: {}, content: content };
	}

	const frontmatterText = match[1];
	const remainingContent = content.slice(match[0].length);

	// Simple YAML-like parser for frontmatter
	const frontmatter = {};
	frontmatterText.split('\n').forEach((line) => {
		const colonIndex = line.indexOf(':');
		if (colonIndex > 0) {
			const key = line.slice(0, colonIndex).trim();
			let value = line.slice(colonIndex + 1).trim();

			// Remove quotes if present
			if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
				value = value.slice(1, -1);
			}

			// Handle arrays (simple comma-separated values)
			if (value.includes(',') && (value.startsWith('[') || key === 'keywords' || key === 'tags')) {
				value = value
					.replace(/[\[\]]/g, '')
					.split(',')
					.map((v) => v.trim().replace(/['"]/g, ''));
			}

			frontmatter[key] = value;
		}
	});

	return { frontmatter, content: remainingContent };
}

/**
 * Extract component metadata from Svelte files
 */
function extractSvelteMetadata(content) {
	const metadata = {
		title: '',
		description: '',
		keywords: [],
		category: '',
		complexity: '',
		since: ''
	};

	// Extract title from svelte:head
	const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/);
	if (titleMatch) {
		metadata.title = titleMatch[1].replace(" - A Hacker's Brand", '').trim();
	}

	// Extract description from meta tag
	const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
	if (descMatch) {
		metadata.description = descMatch[1];
	}

	// Extract component metadata object
	const componentMetaMatch = content.match(/const componentMeta\s*=\s*\{([^}]+)\}/s);
	if (componentMetaMatch) {
		const metaContent = componentMetaMatch[1];

		// Extract description from componentMeta
		const descriptionMatch = metaContent.match(/"description":\s*"([^"]+)"/);
		if (descriptionMatch && !metadata.description) {
			metadata.description = descriptionMatch[1];
		}

		// Extract category
		const categoryMatch = metaContent.match(/"category":\s*"([^"]+)"/);
		if (categoryMatch) {
			metadata.category = categoryMatch[1];
		}

		// Extract complexity
		const complexityMatch = metaContent.match(/"complexity":\s*"([^"]+)"/);
		if (complexityMatch) {
			metadata.complexity = complexityMatch[1];
		}

		// Extract version
		const sinceMatch = metaContent.match(/"since":\s*"([^"]+)"/);
		if (sinceMatch) {
			metadata.since = sinceMatch[1];
		}
	}

	// Generate keywords from file path and metadata
	metadata.keywords = [
		metadata.category?.toLowerCase(),
		metadata.complexity?.toLowerCase(),
		'component',
		'ui',
		'svelte'
	].filter(Boolean);

	return metadata;
}

/**
 * Extract headings from content (both markdown and HTML)
 */
function extractHeadings(content, isMarkdown = true) {
	const headings = [];

	if (isMarkdown) {
		// Extract markdown headings
		const markdownHeadingRegex = /^(#{1,6})\s+(.+)$/gm;
		let match;
		while ((match = markdownHeadingRegex.exec(content)) !== null) {
			headings.push({
				level: match[1].length,
				text: match[2].trim(),
				anchor: match[2]
					.toLowerCase()
					.replace(/[^\w\s-]/g, '')
					.replace(/\s+/g, '-')
			});
		}
	} else {
		// Extract HTML headings
		const htmlHeadingRegex = /<h([1-6])[^>]*>([^<]+)<\/h[1-6]>/gi;
		let match;
		while ((match = htmlHeadingRegex.exec(content)) !== null) {
			const text = match[2].replace(/{[^}]*}/g, '').trim(); // Remove Svelte expressions
			if (text) {
				headings.push({
					level: parseInt(match[1]),
					text: text,
					anchor: text
						.toLowerCase()
						.replace(/[^\w\s-]/g, '')
						.replace(/\s+/g, '-')
				});
			}
		}
	}

	return headings;
}

/**
 * Extract text content for search indexing
 */
function extractTextContent(content, isMarkdown = true) {
	if (isMarkdown) {
		// Remove markdown syntax and extract plain text
		return content
			.replace(/^---[\s\S]*?---/m, '') // Remove frontmatter
			.replace(/#+\s+/g, '') // Remove heading markers
			.replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
			.replace(/\*([^*]+)\*/g, '$1') // Remove italic
			.replace(/`([^`]+)`/g, '$1') // Remove inline code
			.replace(/```[\s\S]*?```/g, '') // Remove code blocks
			.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
			.replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
			.replace(/\n+/g, ' ') // Replace newlines with spaces
			.trim();
	} else {
		// Extract text from Svelte component (simplified)
		return content
			.replace(/<script[\s\S]*?<\/script>/gi, '') // Remove script tags
			.replace(/<style[\s\S]*?<\/style>/gi, '') // Remove style tags
			.replace(/<svelte:head[\s\S]*?<\/svelte:head>/gi, '') // Remove svelte:head
			.replace(/<[^>]+>/g, ' ') // Remove HTML tags
			.replace(/\{[^}]*\}/g, ' ') // Remove Svelte expressions
			.replace(/\s+/g, ' ') // Normalize whitespace
			.trim();
	}
}

/**
 * Generate URL slug from file path
 */
function generateSlug(filePath, docsDir) {
	const relativePath = path.relative(docsDir, filePath);
	const pathParts = relativePath.split(path.sep);

	// Remove file extension and +page
	const lastPart = pathParts[pathParts.length - 1]
		.replace(/\+page\.svelte$/, '')
		.replace(/\.md$/, '')
		.replace(/\.svx$/, '');

	if (lastPart === '') {
		pathParts.pop();
	} else {
		pathParts[pathParts.length - 1] = lastPart;
	}

	return '/docs/' + pathParts.join('/');
}

/**
 * Process a single documentation file
 */
function processFile(filePath, docsDir) {
	const content = fs.readFileSync(filePath, 'utf-8');
	const ext = path.extname(filePath);
	const isMarkdown = ext === '.md' || ext === '.svx';
	const isSvelte = ext === '.svelte';

	if (!isMarkdown && !isSvelte) {
		return null;
	}

	let metadata = {};
	let textContent = '';
	let headings = [];

	if (isMarkdown) {
		const { frontmatter, content: bodyContent } = extractFrontmatter(content);
		metadata = {
			title: frontmatter.title || '',
			description: frontmatter.description || '',
			keywords: Array.isArray(frontmatter.keywords)
				? frontmatter.keywords
				: frontmatter.keywords
					? [frontmatter.keywords]
					: [],
			category: frontmatter.category || '',
			tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : []
		};
		textContent = extractTextContent(bodyContent, true);
		headings = extractHeadings(bodyContent, true);
	} else if (isSvelte) {
		metadata = extractSvelteMetadata(content);
		textContent = extractTextContent(content, false);
		headings = extractHeadings(content, false);
	}

	const slug = generateSlug(filePath, docsDir);

	return {
		id: slug.replace(/\//g, '-').replace(/^-/, ''),
		title: metadata.title || path.basename(filePath, ext),
		description: metadata.description || '',
		url: slug,
		keywords: metadata.keywords || [],
		category: metadata.category || '',
		tags: metadata.tags || [],
		headings: headings,
		content: textContent,
		type: isMarkdown ? 'markdown' : 'component',
		lastModified: fs.statSync(filePath).mtime.toISOString()
	};
}

/**
 * Build the search index
 */
function buildSearchIndex() {
	console.log('🔍 Building search index...');

	// Ensure docs directory exists
	if (!fs.existsSync(DOCS_DIR)) {
		console.warn(`⚠️  Docs directory does not exist: ${DOCS_DIR}`);
		console.log('📝 Creating empty search index...');

		const emptyIndex = {
			documents: [],
			categories: [],
			tags: [],
			lastUpdated: new Date().toISOString(),
			version: '1.0.0'
		};

		// Ensure output directories exist
		const outputDir = path.dirname(OUTPUT_PATH);
		const searchIndexDir = path.dirname(SEARCH_INDEX_PATH);

		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}
		if (!fs.existsSync(searchIndexDir)) {
			fs.mkdirSync(searchIndexDir, { recursive: true });
		}

		fs.writeFileSync(OUTPUT_PATH, JSON.stringify(emptyIndex, null, 2));
		fs.writeFileSync(SEARCH_INDEX_PATH, JSON.stringify(emptyIndex, null, 2));

		console.log('✅ Empty search index created successfully');
		return;
	}

	// Find all documentation files
	const files = findFiles(DOCS_DIR, ['.md', '.svx', '.svelte']);

	console.log(`📁 Found ${files.length} documentation files`);

	// Process each file
	const documents = [];
	const categories = new Set();
	const tags = new Set();

	for (const file of files) {
		try {
			const doc = processFile(file, DOCS_DIR);
			if (doc) {
				documents.push(doc);
				if (doc.category) categories.add(doc.category);
				doc.tags.forEach((tag) => tags.add(tag));
				doc.keywords.forEach((keyword) => tags.add(keyword));
			}
		} catch (error) {
			console.error(`❌ Error processing file ${file}:`, error.message);
		}
	}

	// Create search index
	const searchIndex = {
		documents: documents.sort((a, b) => a.title.localeCompare(b.title)),
		categories: Array.from(categories).sort(),
		tags: Array.from(tags).sort(),
		lastUpdated: new Date().toISOString(),
		version: '1.0.0',
		stats: {
			totalDocuments: documents.length,
			totalCategories: categories.size,
			totalTags: tags.size
		}
	};

	// Ensure output directories exist
	const outputDir = path.dirname(OUTPUT_PATH);
	const searchIndexDir = path.dirname(SEARCH_INDEX_PATH);

	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	if (!fs.existsSync(searchIndexDir)) {
		fs.mkdirSync(searchIndexDir, { recursive: true });
	}

	// Write search index files
	const indexJson = JSON.stringify(searchIndex, null, 2);

	// Write to static directory for public access
	fs.writeFileSync(OUTPUT_PATH, indexJson);

	// Write to lib directory for development use
	fs.writeFileSync(SEARCH_INDEX_PATH, indexJson);

	console.log('✅ Search index built successfully');
	console.log(`📊 Stats:`);
	console.log(`   - Documents: ${searchIndex.stats.totalDocuments}`);
	console.log(`   - Categories: ${searchIndex.stats.totalCategories}`);
	console.log(`   - Tags: ${searchIndex.stats.totalTags}`);
	console.log(`📝 Output files:`);
	console.log(`   - ${OUTPUT_PATH}`);
	console.log(`   - ${SEARCH_INDEX_PATH}`);
}

/**
 * Main execution
 */
if (import.meta.url === `file://${process.argv[1]}`) {
	try {
		buildSearchIndex();
	} catch (error) {
		console.error('❌ Failed to build search index:', error);
		process.exit(1);
	}
}

export { buildSearchIndex };
