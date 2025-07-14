#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

console.log('🔧 Fixing Svelte syntax issues and deprecated patterns...');

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
function fixSvelteContent(content) {
	let fixed = content;
	const changes = [];

	// 1. Fix malformed event handler syntax like: onkeydown={(e) => e.key === "Enter" && (e) => someFunction()(e)}
	const malformedEventHandlerPattern =
		/onkeydown=\{\(e\)\s*=>\s*e\.key\s*===\s*["']Enter["']\s*&&\s*\(e\)\s*=>\s*([^}]+)\(\)\(e\)\}/g;
	if (malformedEventHandlerPattern.test(fixed)) {
		fixed = fixed.replace(malformedEventHandlerPattern, (match, functionCall) => {
			changes.push(`Fixed malformed event handler: ${match}`);
			return `onkeydown={(e) => e.key === "Enter" && ${functionCall}()}`;
		});
	}

	// 2. Fix another malformed pattern: onkeydown={(e) => e.key === "Enter" && () => functionCall()(e)}
	const malformedPattern2 =
		/onkeydown=\{\(e\)\s*=>\s*e\.key\s*===\s*["']Enter["']\s*&&\s*\(\)\s*=>\s*([^}]+)\(\)\(e\)\}/g;
	if (malformedPattern2.test(fixed)) {
		fixed = fixed.replace(malformedPattern2, (match, functionCall) => {
			changes.push(`Fixed malformed pattern 2: ${match}`);
			return `onkeydown={(e) => e.key === "Enter" && ${functionCall}()}`;
		});
	}

	// 3. Remove duplicate onkeydown attributes
	const duplicateOnkeydownPattern = /(onkeydown=\{[^}]+\})\s+(onkeydown=\{[^}]+\})/g;
	if (duplicateOnkeydownPattern.test(fixed)) {
		fixed = fixed.replace(duplicateOnkeydownPattern, (match, first, second) => {
			changes.push(`Removed duplicate onkeydown attribute: ${second}`);
			return first;
		});
	}

	// 4. Fix aria-controls duplicates: aria-controls="dropdown" aria-expanded="false" aria-controls="dropdown"
	const duplicateAriaControlsPattern = /(aria-controls="[^"]+")([^>]*)\1/g;
	if (duplicateAriaControlsPattern.test(fixed)) {
		fixed = fixed.replace(duplicateAriaControlsPattern, (match, ariaControls, middle) => {
			changes.push(`Removed duplicate aria-controls attribute`);
			return ariaControls + middle;
		});
	}

	// 5. Fix malformed prop binding like {true} {true} -> animate={true} jelly={true}
	const malformedPropPattern = /\s+\{true\}\s+\{true\}/g;
	if (malformedPropPattern.test(fixed)) {
		fixed = fixed.replace(malformedPropPattern, ' animate={true} jelly={true}');
		changes.push('Fixed malformed prop bindings {true} {true}');
	}

	// 6. Fix malformed function calls in event handlers: () => function(param)(e)
	const malformedFunctionCallPattern = /\(\)\s*=>\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\(([^)]*)\)\(e\)/g;
	if (malformedFunctionCallPattern.test(fixed)) {
		fixed = fixed.replace(malformedFunctionCallPattern, (match, funcName, param) => {
			changes.push(`Fixed malformed function call: ${match}`);
			return `() => ${funcName}(${param})`;
		});
	}

	// 7. Fix event handler patterns with && that have malformed syntax
	const malformedAndPattern =
		/e\.key\s*===\s*["']Enter["']\s*&&\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\?\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*undefined\(e\)/g;
	if (malformedAndPattern.test(fixed)) {
		fixed = fixed.replace(malformedAndPattern, (match, condition, action) => {
			changes.push(`Fixed malformed && pattern: ${match}`);
			return `e.key === "Enter" && ${condition} ? ${action}() : undefined`;
		});
	}

	// 8. Fix each blocks missing keys - add a simple key if missing
	const eachBlockPattern = /\{#each\s+([^\s]+)\s+as\s+([^\s}]+)(?:\s*,\s*([^\s}]+))?\}/g;
	fixed = fixed.replace(eachBlockPattern, (match, array, item, index) => {
		if (!match.includes('(') || !match.includes('key')) {
			const keyPart = index ? ` (${index})` : ` (${item}.id || ${item})`;
			changes.push(`Added missing key to each block: ${match}`);
			return match.replace('}', keyPart + '}');
		}
		return match;
	});

	// 9. Fix @ts-ignore to @ts-expect-error for Svelte 5
	const tsIgnorePattern = /@ts-ignore/g;
	if (tsIgnorePattern.test(fixed)) {
		fixed = fixed.replace(tsIgnorePattern, '@ts-expect-error');
		changes.push('Updated @ts-ignore to @ts-expect-error');
	}

	// 10. Fix missing onclick handlers - ensure they don't have malformed syntax
	const onclickPattern = /onclick=\{[^}]*\}\s+onkeydown=\{[^}]*\}\s+onkeydown=\{[^}]*\}/g;
	if (onclickPattern.test(fixed)) {
		fixed = fixed.replace(onclickPattern, (match) => {
			const parts = match.split(' ');
			const onclick = parts.find((p) => p.startsWith('onclick='));
			const onkeydown = parts.find((p) => p.startsWith('onkeydown='));
			changes.push(`Fixed duplicate onclick/onkeydown: ${match}`);
			return `${onclick} ${onkeydown}`;
		});
	}

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
		const { fixed, changes } = fixSvelteContent(content);

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
	console.log('   npm run lint:fix');
	console.log('   npm run format');
	console.log('   npm run check');
}
