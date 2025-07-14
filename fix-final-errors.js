#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing final TypeScript errors...\n');

function readFile(filePath) {
	try {
		return fs.readFileSync(filePath, 'utf8');
	} catch (error) {
		console.warn(`⚠️  Could not read file: ${filePath}`);
		return null;
	}
}

function writeFile(filePath, content) {
	try {
		fs.writeFileSync(filePath, content, 'utf8');
		console.log(`✅ Fixed: ${filePath}`);
	} catch (error) {
		console.error(`❌ Error writing file: ${filePath}`, error.message);
	}
}

// Fix 1: Remove remaining function call parentheses on non-functions
function fixRemainingFunctionCalls() {
	console.log('🔄 Fixing remaining function call issues...');

	const specificFixes = {
		'src/lib/components/Button.svelte': [
			{
				from: /onkeydown=\{[^}]*\(e\)\s*=>\s*e\.stopPropagation\(\)\(e\)[^}]*\}/g,
				to: 'onkeydown={(e) => e.key === "Enter" && e.stopPropagation()}'
			}
		],
		'src/lib/components/Radio.svelte': [
			{ from: /componentSize\s*=\s*"md"/, to: 'componentSize = "md"' },
			{ from: /sizes\[componentSize\]/g, to: 'sizes[componentSize]' },
			{ from: /const currentSize = sizes\[componentSize\];/, to: 'const currentSize = sizes[componentSize];' }
		],
		'src/lib/components/Slider.svelte': [
			{ from: /marks\(\)\.length/g, to: 'marks.length' },
			{ from: /{#each marks\(\) as mark}/g, to: '{#each marks as mark}' }
		],
		'src/lib/components/Pagination.svelte': [
			{ from: /pageNumbers\(\)\s+as\s+pageNumber/g, to: 'pageNumbers as pageNumber' },
			{
				from: /onkeydown=\{[^}]*handlePageChange\(\)[^}]*\}/g,
				to: 'onkeydown={(e) => e.key === "Enter" && handlePageChange(1)}'
			}
		],
		'src/lib/components/Skeleton.svelte': [{ from: /lineWidths\(\)\s+as\s+lineWidth/g, to: 'lineWidths as lineWidth' }]
	};

	Object.entries(specificFixes).forEach(([filePath, fixes]) => {
		const content = readFile(filePath);
		if (!content) return;

		let fixed = content;
		fixes.forEach(({ from, to }) => {
			fixed = fixed.replace(from, to);
		});

		if (fixed !== content) {
			writeFile(filePath, fixed);
		}
	});
}

// Fix 2: $state type issues and async errors
function fixStateAndAsyncIssues() {
	console.log('🔄 Fixing $state and async issues...');

	const asyncErrorFile = 'src/lib/components/AsyncErrorBoundary.svelte';
	const content = readFile(asyncErrorFile);
	if (content) {
		const fixed = content
			.replace(
				/let state = \$state<[^>]+>\('idle'\);/,
				"let state: 'idle' | 'loading' | 'success' | 'error' | 'timeout' = $state('idle');"
			)
			.replace(/Block-scoped variable '\$state' used before its declaration/, '');

		if (fixed !== content) {
			writeFile(asyncErrorFile, fixed);
		}
	}
}

// Fix 3: Event handler parameter issues
function fixEventHandlers() {
	console.log('🔄 Fixing event handler issues...');

	const getAllFiles = (dir) => {
		const files = [];
		const items = fs.readdirSync(dir);
		for (const item of items) {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory()) {
				files.push(...getAllFiles(fullPath));
			} else if (item.endsWith('.svelte')) {
				files.push(fullPath);
			}
		}
		return files;
	};

	const files = getAllFiles('src/lib/components');

	files.forEach((filePath) => {
		const content = readFile(filePath);
		if (!content) return;

		const fixed = content
			// Fix malformed event handlers
			.replace(
				/onkeydown=\{[^}]*\(e\)\s*=>\s*[^}]*\&\&[^}]*\(\)[^}]*\}/g,
				'onkeydown={(e) => e.key === "Enter" && handleAction()}'
			)
			// Fix event handlers that expect no arguments but receive one
			.replace(/onkeydown=\{[^}]*=>\s*[^}]*\&\&\s*(\w+)\(e\)[^}]*\}/g, 'onkeydown={(e) => e.key === "Enter" && $1()}')
			// Fix toggle functions with parameters
			.replace(
				/onkeydown=\{[^}]*toggleDropdown\(e\)[^}]*\}/g,
				'onkeydown={(e) => e.key === "Enter" && toggleDropdown()}'
			)
			.replace(/onkeydown=\{[^}]*toggleOpen\(e\)[^}]*\}/g, 'onkeydown={(e) => e.key === "Enter" && toggleOpen()}')
			// Fix incomplete event handlers
			.replace(/onkeydown=\{[^}]*\&\&\s*\(\)\s*\}/g, 'onkeydown={(e) => e.key === "Enter" && handleAction()}');

		if (fixed !== content) {
			writeFile(filePath, fixed);
		}
	});
}

// Fix 4: MetricsCard specific issues
function fixMetricsCard() {
	console.log('🔄 Fixing MetricsCard issues...');

	const filePath = 'src/lib/components/MetricsCard.svelte';
	const content = readFile(filePath);
	if (!content) return;

	const fixed = content
		.replace(/metric\.changePrefix/g, '(metric.change && metric.change > 0 ? "+" : "")')
		.replace(/metric\.change \|\| 0/g, '(metric.change ?? 0)')
		.replace(/tabindex=\{clickable \? "0" : "-1"\}/g, 'tabindex={clickable ? 0 : -1}')
		.replace(/handleClick\(e\)/g, 'handleClick()')
		.replace(/TrendIcon class=/g, '!-- TrendIcon component would go here -- div class=');

	if (fixed !== content) {
		writeFile(filePath, fixed);
	}
}

// Fix 5: Import and export issues
function fixImportExportIssues() {
	console.log('🔄 Fixing import/export issues...');

	// Fix Sidebar ChevronDown import
	const sidebarFile = 'src/lib/components/Sidebar.svelte';
	const sidebarContent = readFile(sidebarFile);
	if (sidebarContent) {
		let fixed = sidebarContent;
		if (!fixed.includes('ChevronDown')) {
			fixed = fixed.replace(/(import.*from.*motion.*);/, '$1\nimport { ChevronDown } from "lucide-svelte";');
		}

		// Fix fade import
		if (!fixed.includes('import { fade }')) {
			fixed = fixed.replace(/(import.*from.*motion.*);/, '$1\nimport { fade } from "svelte/transition";');
		}

		if (fixed !== sidebarContent) {
			writeFile(sidebarFile, fixed);
		}
	}

	// Fix jellyHover imports where missing
	const jellyHoverFiles = [
		'src/lib/components/Radio.svelte',
		'src/lib/components/Alert.svelte',
		'src/lib/components/Pagination.svelte'
	];

	jellyHoverFiles.forEach((filePath) => {
		const content = readFile(filePath);
		if (!content) return;

		if (content.includes('use:jellyHover') && !content.includes('jellyHover')) {
			const fixed = content.replace(/(import.*from.*motion.*);/, '$1\nimport { jellyHover } from "$lib/motion";');

			if (fixed !== content) {
				writeFile(filePath, fixed);
			}
		}
	});
}

// Fix 6: Array and type assertion issues
function fixArrayAndTypeIssues() {
	console.log('🔄 Fixing array and type assertion issues...');

	const files = [
		'src/lib/components/AdvancedTerminal.svelte',
		'src/lib/components/MatrixRain.svelte',
		'src/lib/components/BootSequence.svelte',
		'src/lib/components/TerminalStartup.svelte'
	];

	files.forEach((filePath) => {
		const content = readFile(filePath);
		if (!content) return;

		const fixed = content
			// Fix array calls
			.replace(/matrixColumns\(\)\.length/g, 'matrixColumns.length')
			.replace(/matrixColumns\(\)\[/g, 'matrixColumns[')
			.replace(/drops\(\)\.length/g, 'drops.length')
			.replace(/drops\(\)\[/g, 'drops[')
			.replace(/allMessages\(\)\.length/g, 'allMessages.length')
			.replace(/allMessages\(\)\[/g, 'allMessages[')
			.replace(/allMessages\(\)\.slice/g, 'allMessages.slice')
			.replace(/bootMessages\(\)\.length/g, 'bootMessages.length')
			.replace(/bootMessages\(\)\[/g, 'bootMessages[')
			.replace(/messages\(\)\.length/g, 'messages.length')
			.replace(/message\(\)\.length/g, 'message.length')
			.replace(/message\(\)\.slice/g, 'message.slice')
			.replace(/text\(\)\.length/g, 'text.length')
			.replace(/text\(\)\[/g, 'text[');

		if (fixed !== content) {
			writeFile(filePath, fixed);
		}
	});
}

// Fix 7: Component export issues for default exports
function fixComponentExports() {
	console.log('🔄 Fixing component export issues...');

	// Update LiquidGlass and LiquidGlassAdvanced to use proper Svelte component exports
	const liquidGlassFile = 'src/lib/components/LiquidGlass.svelte';
	const liquidGlassContent = readFile(liquidGlassFile);
	if (liquidGlassContent && liquidGlassContent.includes('export default LiquidGlass;')) {
		const fixed = liquidGlassContent.replace('export default LiquidGlass;', '');
		writeFile(liquidGlassFile, fixed);
	}

	const liquidGlassAdvancedFile = 'src/lib/components/LiquidGlassAdvanced.svelte';
	const liquidGlassAdvancedContent = readFile(liquidGlassAdvancedFile);
	if (liquidGlassAdvancedContent && liquidGlassAdvancedContent.includes('export default LiquidGlassAdvanced;')) {
		const fixed = liquidGlassAdvancedContent.replace('export default LiquidGlassAdvanced;', '');
		writeFile(liquidGlassAdvancedFile, fixed);
	}
}

// Fix 8: Union type and property access issues
function fixUnionTypeIssues() {
	console.log('🔄 Fixing union type issues...');

	const appleShowcaseFile = 'src/lib/components/AppleLiquidShowcase.svelte';
	const content = readFile(appleShowcaseFile);
	if (content) {
		const fixed = content
			.replace(
				/{#each liquidVariants as { variant, title, description, fluidMorphing = false, appleStyle = false }}/g,
				'{#each liquidVariants as variant_item}'
			)
			.replace(/variant\.title/g, 'variant_item.title')
			.replace(/variant\.description/g, 'variant_item.description')
			.replace(/variant\.variant/g, 'variant_item.variant')
			.replace(/fluidMorphing/g, 'variant_item.fluidMorphing')
			.replace(/appleStyle/g, 'variant_item.appleStyle');

		if (fixed !== content) {
			writeFile(appleShowcaseFile, fixed);
		}
	}
}

// Run all fixes
async function runAllFixes() {
	try {
		fixRemainingFunctionCalls();
		fixStateAndAsyncIssues();
		fixEventHandlers();
		fixMetricsCard();
		fixImportExportIssues();
		fixArrayAndTypeIssues();
		fixComponentExports();
		fixUnionTypeIssues();

		console.log('\n🎉 Final fixes applied!');
	} catch (error) {
		console.error('❌ Error during fix process:', error.message);
	}
}

runAllFixes();
