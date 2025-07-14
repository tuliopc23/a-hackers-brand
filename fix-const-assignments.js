#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔄 Starting constant assignment fixes...');

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

// Fix variables that are constants but get reassigned
function fixConstantAssignments(filePath) {
  console.log(`🔧 Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  const lines = content.split('\n');
  const newLines = [];
  
  // Variables that should be $state if they're being reassigned
  const stateVars = [
    'currentIndex', 'checked', 'indeterminate', 'status', 'sortConfig', 
    'selectedRows', 'filterConfig', 'currentPage', 'open', 'value', 
    'collapsed'
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a variable declaration that should be $state
    for (const varName of stateVars) {
      const constPattern = new RegExp(`^\\s*const\\s+${varName}\\s*=`);
      if (constPattern.test(line)) {
        const fixed = line.replace(constPattern, `\tlet ${varName} = $state(`);
        if (fixed !== line) {
          // Add closing parenthesis
          const valueMatch = line.match(/=\s*(.+);?$/);
          if (valueMatch) {
            const value = valueMatch[1].replace(/;$/, '');
            newLines.push(`\tlet ${varName} = $state(${value});`);
            modified = true;
            console.log(`  ✅ Fixed ${varName} to use $state`);
            continue;
          }
        }
      }
    }
    
    newLines.push(line);
  }
  
  if (modified) {
    content = newLines.join('\n');
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

svelteFiles.forEach(fixConstantAssignments);

console.log('✅ Constant assignment fixes completed!');
