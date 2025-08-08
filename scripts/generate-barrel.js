#!/usr/bin/env node

/**
 * Automated Barrel Generator for A Hacker's Brand Components
 * 
 * This script automatically scans the components directory and generates
 * organized exports with proper categorization and comments.
 */

import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, basename, extname, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPONENTS_DIR = join(__dirname, '..', 'src', 'lib', 'components');
const INDEX_FILE = join(COMPONENTS_DIR, 'index.ts');

// Component categorization based on naming patterns and directories
const CATEGORIES = {
    'Core Glass Components': {
        patterns: [
            'Button', 'Card', 'Input', 'Badge', 'Modal', 'Textarea', 'Switch',
            'Checkbox', 'Slider', 'Toast', 'Progress', 'Tabs', 'Accordion',
            'Radio', 'Tooltip', 'Alert', 'Dropdown', 'Pagination', 'Skeleton', 'Select'
        ],
        priority: 1
    },
    'Advanced Form Components': {
        patterns: ['DatePicker', 'MultiSelect', 'FileUpload', 'SelectAdvanced'],
        priority: 2
    },
    'Form Validation': {
        patterns: ['FormValidation'],
        priority: 3
    },
    'Navigation Components': {
        patterns: ['Navbar', 'Breadcrumb', 'Menu'],
        priority: 4
    },
    'Data Display Components': {
        patterns: ['Table', 'List', 'DataGrid', 'DataTable', 'MetricsCard'],
        priority: 5
    },
    'Terminal Components': {
        patterns: [
            'TerminalWindow', 'TerminalOrbit', 'LazyTerminalWindow',
            'AdvancedTerminal', 'LiquidTerminal', 'CommandBlock', 'AICommandSuggestions'
        ],
        priority: 6
    },
    'Retro Computer Components': {
        patterns: [
            'BootSequence', 'TerminalStartup', 'MatrixRain', 'RetroText',
            'RetroFuturisticText'
        ],
        priority: 7
    },
    '3D/WebGL Components': {
        patterns: ['ThrelteCanvas', 'LazyThrelteCanvas', 'GlassScene'],
        priority: 8
    },
    'Performance Components': {
        patterns: ['PerformanceDashboard', 'PerfOverlay', 'PerformanceMonitor'],
        priority: 9
    },
    'Error Boundaries': {
        patterns: ['ErrorBoundary', 'AsyncErrorBoundary', 'FormErrorBoundary'],
        priority: 10
    },
    'Utility Components': {
        patterns: ['CodeHighlight'],
        priority: 11
    },
    'Layout Components': {
        patterns: ['Sidebar'],
        priority: 12
    },
    'Interactive Components': {
        patterns: ['Drawer', 'Carousel'],
        priority: 13
    },
    'Theme Components': {
        patterns: ['StatusBar', 'ColorPalette', 'GlowText', 'AccessibilityReport', 'ThemeSelector'],
        priority: 14
    }
};

// Directories that have their own index files and should be exported as modules
const MODULE_DIRECTORIES = [
    'responsive',
    'liquidify',
    'webgl',
    'effects'
];

/**
 * Recursively scan directory for components
 */
async function scanDirectory(dir) {
    const items = [];
    try {
        const entries = await readdir(dir);

        for (const entry of entries) {
            const fullPath = join(dir, entry);
            const stats = await stat(fullPath);

            if (stats.isDirectory()) {
                // Handle special module directories
                if (MODULE_DIRECTORIES.includes(entry)) {
                    const indexPath = join(fullPath, 'index.js');
                    try {
                        await stat(indexPath);
                        items.push({
                            type: 'module',
                            name: entry,
                            path: `./${entry}/index.js`,
                            relativePath: relative(COMPONENTS_DIR, fullPath)
                        });
                    } catch {
                        console.warn(`Warning: Module directory ${entry} missing index.js`);
                    }
                } else {
                    // Recursively scan subdirectories for components
                    const subItems = await scanDirectory(fullPath);
                    items.push(...subItems);
                }
            } else if (stats.isFile()) {
                const ext = extname(entry);
                const name = basename(entry, ext);

                // Skip the index file itself
                if (entry === 'index.ts' || entry === 'index.js') {
                    continue;
                }

                // Include Svelte components and JS/TS utility files
                if (ext === '.svelte' || (ext === '.js' && name !== 'index') || (ext === '.ts' && name !== 'index')) {
                    const relativePath = relative(COMPONENTS_DIR, fullPath);
                    items.push({
                        type: ext === '.svelte' ? 'component' : 'utility',
                        name: name,
                        path: `./${relativePath}`,
                        relativePath: relativePath,
                        directory: dirname(relativePath) === '.' ? null : dirname(relativePath)
                    });
                }
            }
        }
    } catch (error) {
        console.error(`Error scanning directory ${dir}:`, error);
    }

    return items;
}

/**
 * Categorize components based on patterns and naming
 */
function categorizeItems(items) {
    const categorized = {};
    const uncategorized = [];

    // Initialize categories
    Object.keys(CATEGORIES).forEach(category => {
        categorized[category] = [];
    });

    items.forEach(item => {
        if (item.type === 'module') {
            return; // Modules are handled separately
        }

        let assigned = false;

        // Try to assign to a category based on patterns
        for (const [categoryName, categoryConfig] of Object.entries(CATEGORIES)) {
            if (categoryConfig.patterns.some(pattern =>
                item.name.includes(pattern) || item.name === pattern
            )) {
                categorized[categoryName].push(item);
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            uncategorized.push(item);
        }
    });

    return { categorized, uncategorized };
}

/**
 * Generate export statement for an item
 */
function generateExport(item) {
    if (item.type === 'component') {
        return `export { default as ${item.name} } from '${item.path}';`;
    } else if (item.type === 'utility' && item.path.endsWith('.js')) {
        return `export * from '${item.path}';`;
    }
    return null;
}

/**
 * Generate the complete barrel file content
 */
async function generateBarrelContent(items) {
    const { categorized, uncategorized } = categorizeItems(items);
    const modules = items.filter(item => item.type === 'module');

    let content = '// A Hacker\'s Brand - Component Exports\n';
    content += '// Auto-generated - Do not edit manually\n\n';

    // Export categorized components
    const sortedCategories = Object.entries(CATEGORIES)
        .sort(([, a], [, b]) => a.priority - b.priority)
        .map(([name]) => name);

    for (const categoryName of sortedCategories) {
        const categoryItems = categorized[categoryName];
        if (categoryItems.length > 0) {
            content += `// ${categoryName}\n`;
            categoryItems
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(item => {
                    const exportStatement = generateExport(item);
                    if (exportStatement) {
                        content += exportStatement + '\n';
                    }
                });
            content += '\n';
        }
    }

    // Export modules (directories with index files)
    if (modules.length > 0) {
        const modulesByCategory = {
            'Responsive Layout Components': modules.filter(m => m.name === 'responsive'),
            'Liquidify Components (Glass UI Library)': modules.filter(m => m.name === 'liquidify'),
            'WebGL/3D Effects': modules.filter(m => m.name === 'webgl'),
            'Visual Effects': modules.filter(m => m.name === 'effects')
        };

        Object.entries(modulesByCategory).forEach(([categoryName, categoryModules]) => {
            if (categoryModules.length > 0) {
                content += `// ${categoryName}\n`;
                categoryModules.forEach(module => {
                    content += `export * from '${module.path}';\n`;
                });
                content += '\n';
            }
        });
    }

    // Export any uncategorized components
    if (uncategorized.length > 0) {
        content += '// Additional Components\n';
        uncategorized
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(item => {
                const exportStatement = generateExport(item);
                if (exportStatement) {
                    content += exportStatement + '\n';
                }
            });
    }

    return content;
}

/**
 * Main function to generate the barrel file
 */
async function generateBarrel() {
    try {
        console.log('🔍 Scanning components directory...');
        const items = await scanDirectory(COMPONENTS_DIR);

        console.log(`📦 Found ${items.length} items to process`);
        console.log(`   - ${items.filter(i => i.type === 'component').length} Svelte components`);
        console.log(`   - ${items.filter(i => i.type === 'utility').length} utility files`);
        console.log(`   - ${items.filter(i => i.type === 'module').length} module directories`);

        console.log('📝 Generating barrel exports...');
        const content = await generateBarrelContent(items);

        // Create backup of existing index file
        try {
            const existingContent = await readFile(INDEX_FILE, 'utf-8');
            const backupPath = INDEX_FILE + '.backup';
            await writeFile(backupPath, existingContent);
            console.log(`💾 Backed up existing index to ${relative(process.cwd(), backupPath)}`);
        } catch (error) {
            console.log('ℹ️  No existing index file found');
        }

        await writeFile(INDEX_FILE, content);
        console.log(`✅ Generated barrel file: ${relative(process.cwd(), INDEX_FILE)}`);

        // Validate the generated file
        const lines = content.split('\n').filter(line => line.trim());
        const exportCount = lines.filter(line => line.startsWith('export')).length;
        console.log(`📊 Generated ${exportCount} export statements`);

    } catch (error) {
        console.error('❌ Error generating barrel file:', error);
        process.exit(1);
    }
}

/**
 * Watch mode functionality
 */
async function watchMode() {
    const { watch } = await import('fs');

    console.log('👀 Watching components directory for changes...');
    console.log('Press Ctrl+C to stop watching');

    const watcher = watch(COMPONENTS_DIR, { recursive: true }, (eventType, filename) => {
        if (filename && (filename.endsWith('.svelte') || filename.endsWith('.js') || filename.endsWith('.ts'))) {
            console.log(`\n🔄 Detected change: ${filename}`);
            generateBarrel();
        }
    });

    // Handle process termination
    process.on('SIGINT', () => {
        console.log('\n👋 Stopping watcher...');
        watcher.close();
        process.exit(0);
    });
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    const args = process.argv.slice(2);
    if (args.includes('--watch')) {
        watchMode();
    } else {
        generateBarrel();
    }
}

export { generateBarrel };