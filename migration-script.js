#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Event syntax mappings from legacy to new
const eventMappings = {
    'on:click': 'onclick',
    'on:submit': 'onsubmit',
    'on:change': 'onchange',
    'on:input': 'oninput',
    'on:focus': 'onfocus',
    'on:blur': 'onblur',
    'on:keydown': 'onkeydown',
    'on:keyup': 'onkeyup',
    'on:mouseenter': 'onmouseenter',
    'on:mouseleave': 'onmouseleave',
    'on:load': 'onload',
    'on:resize': 'onresize',
    'on:scroll': 'onscroll',
    'on:dblclick': 'ondblclick',
    'on:contextmenu': 'oncontextmenu',
    'on:mousedown': 'onmousedown',
    'on:mouseup': 'onmouseup',
    'on:mouseover': 'onmouseover',
    'on:mouseout': 'onmouseout',
    'on:wheel': 'onwheel',
    'on:touchstart': 'ontouchstart',
    'on:touchend': 'ontouchend',
    'on:touchmove': 'ontouchmove',
    'on:pointerdown': 'onpointerdown',
    'on:pointerup': 'onpointerup',
    'on:pointermove': 'onpointermove',
    'on:select': 'onselect',
    'on:dragstart': 'ondragstart',
    'on:drag': 'ondrag',
    'on:dragend': 'ondragend',
    'on:drop': 'ondrop',
    'on:dragover': 'ondragover',
    'on:dragenter': 'ondragenter',
    'on:dragleave': 'ondragleave'
};

// Function to migrate event syntax in a file
function migrateEventSyntax(content) {
    let updated = content;
    
    for (const [oldSyntax, newSyntax] of Object.entries(eventMappings)) {
        // Replace event handlers like on:click={handler} with onclick={handler}
        const regex = new RegExp(`\\b${oldSyntax.replace(':', '\\:')}=`, 'g');
        updated = updated.replace(regex, `${newSyntax}=`);
    }
    
    return updated;
}

// Function to migrate reactive statements
function migrateReactiveStatements(content) {
    let updated = content;
    
    // Replace $: with $effect for side effects
    // Pattern: $: { ... } or $: someFunction()
    const sideEffectPattern = /\$:\s*(\{[^}]*\}|\w+\([^)]*\))/g;
    updated = updated.replace(sideEffectPattern, (match, body) => {
        if (body.startsWith('{') && body.endsWith('}')) {
            // Block statement - convert to $effect
            return `$effect(() => ${body});`;
        } else {
            // Function call - convert to $effect
            return `$effect(() => { ${body}; });`;
        }
    });
    
    // Replace simple reactive assignments like $: derivedValue = ...
    const derivedPattern = /\$:\s*(\w+)\s*=\s*([^;]+);?/g;
    updated = updated.replace(derivedPattern, (match, varName, expression) => {
        return `const ${varName} = $derived(() => ${expression});`;
    });
    
    return updated;
}

// Function to process a single file
function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Apply migrations
        content = migrateEventSyntax(content);
        content = migrateReactiveStatements(content);
        
        // Only write back if content changed
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Migrated: ${filePath}`);
            return true;
        }
        
        return false;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to recursively find .svelte files
function findSvelteFiles(dir) {
    const svelteFiles = [];
    
    function traverse(currentDir) {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Skip node_modules, .git, and dist directories
                if (!['node_modules', '.git', 'dist', '.svelte-kit'].includes(item)) {
                    traverse(fullPath);
                }
            } else if (item.endsWith('.svelte')) {
                svelteFiles.push(fullPath);
            }
        }
    }
    
    traverse(dir);
    return svelteFiles;
}

// Main migration function
function main() {
    console.log('🚀 Starting Svelte 5 migration...');
    
    const srcDir = path.join(__dirname, 'src');
    const svelteFiles = findSvelteFiles(srcDir);
    
    console.log(`📁 Found ${svelteFiles.length} .svelte files`);
    
    let migratedCount = 0;
    
    for (const file of svelteFiles) {
        if (processFile(file)) {
            migratedCount++;
        }
    }
    
    console.log(`\n🎉 Migration completed!`);
    console.log(`📊 Files processed: ${svelteFiles.length}`);
    console.log(`🔄 Files migrated: ${migratedCount}`);
    console.log(`✨ Files unchanged: ${svelteFiles.length - migratedCount}`);
    
    if (migratedCount > 0) {
        console.log('\n⚠️  Please review the changes and test your components!');
        console.log('💡 Some reactive patterns may need manual adjustment.');
    }
}

// Run the migration
main();
