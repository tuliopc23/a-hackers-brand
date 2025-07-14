#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

console.log('🔧 Fixing remaining Svelte syntax issues...');

const projectRoot = process.cwd();

// Find all .svelte files
function findSvelteFiles(dir) {
	const files = [];
	const items = readdirSync(dir);

	for (const item of items) {
		const fullPath = join(dir, item);
		const stat = statSync(fullPath);

		if (stat.isDirectory()) {
			if (!item.startsWith('.') && item !== 'node_modules') {
				files.push(...findSvelteFiles(fullPath));
			}
		} else if (item.endsWith('.svelte')) {
			files.push(fullPath);
		}
	}

	return files;
}

// Fix patterns in content
function fixRemainingIssues(content) {
	let fixed = content;
	const changes = [];

	// 1. Fix malformed each block keys - remove extra closing bracket
	const malformedEachKeyPattern = /\{#each\s+([^}]+)\s+as\s+([^}]+)\s+\(([^)]+)\]\)\}/g;
	if (malformedEachKeyPattern.test(fixed)) {
		fixed = fixed.replace(malformedEachKeyPattern, (match, array, iterator, key) => {
			const fixedKey = key.replace(/\]$/, '');
			changes.push(`Fixed malformed each block key: ${match}`);
			return `{#each ${array} as ${iterator} (${fixedKey})}`;
		});
	}

	// 2. Fix event handlers that end with (e)} instead of }
	const malformedEventHandlerEndPattern = /onkeydown=\{[^}]+\(e\)\s*\}/g;
	fixed = fixed.replace(malformedEventHandlerEndPattern, (match) => {
		if (match.includes('() =>') && match.endsWith('(e)}')) {
			const fixed = match.replace(/\(e\)\}$/, '}');
			changes.push(`Fixed malformed event handler ending: ${match}`);
			return fixed;
		}
		return match;
	});

	// 3. Fix onclick handlers that don't have proper closing
	const malformedOnclickPattern = /onclick=\{[^}]+\} onkeydown=\{[^}]+\s+\}/g;
	if (malformedOnclickPattern.test(fixed)) {
		fixed = fixed.replace(malformedOnclickPattern, (match) => {
			changes.push(`Fixed malformed onclick pattern: ${match}`);
			return match.replace(/\s+\}$/, '}');
		});
	}

	// 4. Fix attribute duplication patterns
	const duplicateAriaExpandedPattern = /aria-expanded="false"\s+aria-expanded=\{[^}]+\}/g;
	if (duplicateAriaExpandedPattern.test(fixed)) {
		fixed = fixed.replace(duplicateAriaExpandedPattern, (match) => {
			const dynamicValue = match.match(/aria-expanded=\{[^}]+\}/)[0];
			changes.push(`Fixed duplicate aria-expanded: ${match}`);
			return dynamicValue;
		});
	}

	// 5. Fix object property syntax errors
	const malformedObjectPropertyPattern = /(\w+)\.(\w+):\s*true/g;
	if (malformedObjectPropertyPattern.test(fixed)) {
		fixed = fixed.replace(malformedObjectPropertyPattern, (match, obj, prop) => {
			changes.push(`Fixed malformed object property: ${match}`);
			return `${prop}: true`;
		});
	}

	// 6. Fix incomplete event handlers and syntax errors
	const incompleteEventPattern = /\} onkeydown=\{[^}]*\{$/gm;
	if (incompleteEventPattern.test(fixed)) {
		fixed = fixed.replace(incompleteEventPattern, (match) => {
			changes.push(`Fixed incomplete event handler: ${match}`);
			return match.replace(/\{$/, '');
		});
	}

	// 7. Fix broken function calls in templates
	const brokenFunctionCallPattern = /\(\)\s*\=\>\s*(\w+)\(([^)]*)\)\s*\(e\)/g;
	if (brokenFunctionCallPattern.test(fixed)) {
		fixed = fixed.replace(brokenFunctionCallPattern, (match, funcName, params) => {
			changes.push(`Fixed broken function call: ${match}`);
			return `() => ${funcName}(${params})`;
		});
	}

	// 8. Fix malformed conditional attributes
	const malformedConditionalPattern = /\s*\}\s*onkeydown=\{[^}]+\s*$/gm;
	if (malformedConditionalPattern.test(fixed)) {
		fixed = fixed.replace(malformedConditionalPattern, (match) => {
			changes.push(`Fixed malformed conditional: ${match}`);
			return match.replace(/\s*\}\s*onkeydown=\{[^}]+\s*$/, '}');
		});
	}

	// 9. Fix syntax like "} onkeydown={(e) => e.key === "Enter" && (e) => {"
	const malformedSyntaxPattern = /\}\s+onkeydown=\{[^}]*\{$/gm;
	if (malformedSyntaxPattern.test(fixed)) {
		fixed = fixed.replace(malformedSyntaxPattern, (match) => {
			changes.push(`Fixed malformed syntax pattern: ${match}`);
			return '}';
		});
	}

	// 10. Fix unclosed element tags or malformed closing
	const malformedClosingPattern = /<\/div>\s*$/gm;
	lines = fixed.split('\n');
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (line.trim() === '</div>' && i > 0) {
			const prevLine = lines[i - 1];
			if (prevLine.includes('{/if}') && !prevLine.includes('<div')) {
				lines.splice(i, 1);
				changes.push(`Removed orphaned closing div at line ${i + 1}`);
				i--;
			}
		}
	}
	fixed = lines.join('\n');

	return { fixed, changes };
}

// Process all Svelte files
const svelteFiles = findSvelteFiles(projectRoot);
let totalChanges = 0;
let filesProcessed = 0;

console.log(`Found ${svelteFiles.length} Svelte files to process...`);

for (const filePath of svelteFiles) {
	try {
		const content = readFileSync(filePath, 'utf-8');
		const { fixed, changes } = fixRemainingIssues(content);

		if (changes.length > 0) {
			writeFileSync(filePath, fixed);
			console.log(`✅ Fixed ${changes.length} issues in ${filePath.replace(projectRoot, '.')}`);
			for (const change of changes) {
				console.log(`   - ${change}`);
			}
			totalChanges += changes.length;
		}
		filesProcessed++;
	} catch (error) {
		console.error(`❌ Error processing ${filePath}:`, error.message);
	}
}

console.log(`\n🎉 Processing complete!`);
console.log(`📊 Files processed: ${filesProcessed}`);
console.log(`🔧 Total fixes applied: ${totalChanges}`);

if (totalChanges > 0) {
	console.log('\n🚨 Run the following commands to verify the fixes:');
	console.log('   npm run format');
	console.log('   npm run lint:fix');
	console.log('   npm run check');
}
