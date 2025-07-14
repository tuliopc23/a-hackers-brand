#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔄 Starting Svelte 5 Migration fixes...');

// Find all .svelte files
function findSvelteFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...findSvelteFiles(fullPath));
    } else if (item.endsWith('.svelte')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix individual file
function fixSvelteFile(filePath) {
  console.log(`🔧 Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Pattern 1: Replace 'let {' with 'const {' for props destructuring
  const propsPattern = /let\s*\{\s*([^}]+)\s*\}:\s*Props\s*=\s*\$props\(\)/g;
  if (propsPattern.test(content)) {
    content = content.replace(propsPattern, 'const {\n$1\n}: Props = $props()');
    modified = true;
    console.log(`  ✅ Fixed props destructuring`);
  }
  
  // Pattern 2: Fix `let` declarations that should be `const` for non-reassigned variables
  const lines = content.split('\n');
  const newLines = [];
  let inScript = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track if we're in a script tag
    if (line.includes('<script')) {
      inScript = true;
    } else if (line.includes('</script>')) {
      inScript = false;
    }
    
    if (inScript) {
      // Check for let declarations in destructuring from $props()
      if (line.trim().startsWith('let ') && line.includes('=') && !line.includes('$state') && !line.includes('$derived')) {
        // Check if this is a destructuring assignment from props
        const nextLines = lines.slice(i, i + 10).join('\n');
        if (nextLines.includes('}: Props = $props()')) {
          // This is part of props destructuring, should be const
          const fixed = line.replace(/^\s*let\s+/, line.match(/^\s*/)[0] + 'const ');
          newLines.push(fixed);
          modified = true;
          continue;
        }
      }
    }
    
    newLines.push(line);
  }
  
  if (modified) {
    content = newLines.join('\n');
  }
  
  // Pattern 3: Fix case declarations 
  content = content.replace(/case\s+'([^']+)':\s*\n\s*const\s+/g, (match, caseValue) => {
    return `case '${caseValue}': {\n\t\t\t\tconst `;
  });
  
  // Pattern 4: Add closing braces for case blocks
  content = content.replace(/case\s+'([^']+)':\s*\{[^}]*?break;/g, (match) => {
    if (!match.includes('}')) {
      return match.replace('break;', 'break;\n\t\t\t}');
    }
    return match;
  });
  
  // Pattern 5: Fix children snippets usage
  content = content.replace(/\{#if\s+children\s*\}\s*\{@render\s+children\(\)\}/g, '{#if children}{@render children()}{/if}');
  
  // Pattern 6: Convert reactive statements to $derived
  content = content.replace(/\$:\s*([^=]+)\s*=\s*([^;]+);/g, 'const $1 = $derived($2);');
  
  // Pattern 7: Convert reactive declarations to $state
  content = content.replace(/\$:\s*\{([^}]+)\}/g, '$effect(() => {\n$1\n});');
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Fixed ${filePath}`);
  } else {
    console.log(`  ⏭️  No changes needed for ${filePath}`);
  }
}

// Process all files
const srcDir = './src';
const svelteFiles = findSvelteFiles(srcDir);

console.log(`📁 Found ${svelteFiles.length} Svelte files`);

svelteFiles.forEach(fixSvelteFile);

console.log('✅ Svelte 5 migration fixes completed!');
