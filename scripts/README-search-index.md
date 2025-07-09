# Search Index Build Script

## Overview

The `build-search-index.js` script generates a searchable JSON index of all documentation files in the `/src/routes/docs` directory. It supports both markdown files (`.md`, `.svx`) and Svelte component files (`.svelte`) used for documentation.

## Features

- **Frontmatter Extraction**: Extracts metadata from markdown files including title, description, keywords, category, and tags
- **Svelte Component Processing**: Parses Svelte documentation components to extract metadata from `componentMeta` objects and `svelte:head` sections
- **Heading Extraction**: Automatically extracts headings (H1-H6) and generates anchor links
- **Content Processing**: Cleans and processes content for search indexing, removing markup while preserving searchable text
- **Dual Output**: Generates index files in both `/static` (for public access) and `/src/lib/search` (for development use)

## Usage

### Manual Build

```bash
npm run build:search-index
```

### Automatic Build

The search index is automatically built as part of the main build process:

```bash
npm run build
```

## Output Files

- `/static/search-index.json` - Public search index accessible via HTTP
- `/src/lib/search/search-index.json` - Development copy for import in Svelte components

## Index Structure

```json
{
  "documents": [
    {
      "id": "docs-components-button",
      "title": "Button Component",
      "description": "Interactive button component with liquid glass effects...",
      "url": "/docs/components/button",
      "keywords": ["component", "ui", "button"],
      "category": "Core",
      "tags": ["form", "interactive"],
      "headings": [
        {
          "level": 1,
          "text": "Button",
          "anchor": "button"
        }
      ],
      "content": "Cleaned text content for search...",
      "type": "component",
      "lastModified": "2024-07-08T03:13:36.379Z"
    }
  ],
  "categories": ["Core", "Layout", "Navigation", ...],
  "tags": ["component", "ui", "form", ...],
  "lastUpdated": "2024-07-08T03:13:36.379Z",
  "version": "1.0.0",
  "stats": {
    "totalDocuments": 74,
    "totalCategories": 9,
    "totalTags": 15
  }
}
```

## Supported File Types

### Markdown Files (`.md`, `.svx`)

```markdown
---
title: Page Title
description: Page description for search
keywords: [keyword1, keyword2]
category: Documentation
tags: [tag1, tag2]
---

# Heading 1

Content here...
```

### Svelte Components (`.svelte`)

```svelte
<script>
	const componentMeta = {
		description: 'Component description',
		category: 'Core',
		complexity: 'Simple',
		since: '0.1.0'
	};
</script>

<svelte:head>
	<title>Page Title - A Hacker's Brand</title>
	<meta name="description" content="Page description" />
</svelte:head>

<h1>Component Name</h1>
```

## Integration with Search

The generated search index can be used with FlexSearch or other search libraries:

```javascript
import searchIndex from '$lib/search/search-index.json';
import FlexSearch from 'flexsearch';

// Create search index
const index = new FlexSearch.Index();

// Add documents to search
searchIndex.documents.forEach((doc) => {
	index.add(doc.id, doc.title + ' ' + doc.description + ' ' + doc.content);
});

// Search
const results = index.search('button');
```

## Development

The script is written in ES modules and uses only Node.js built-in modules for maximum compatibility. It automatically handles:

- Directory traversal
- File type detection
- Metadata extraction
- Content cleaning
- Index generation
- Error handling

## Troubleshooting

- Ensure the `/src/routes/docs` directory exists
- Check that documentation files have proper frontmatter (for markdown) or metadata objects (for Svelte)
- Verify write permissions for output directories
- Run with `node scripts/build-search-index.js` for detailed error messages
