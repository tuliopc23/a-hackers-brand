#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔄 Starting major Svelte 5 issue fixes...');

// List of problematic files to fix
const filesToFix = [
  'src/lib/components/Carousel.svelte',
  'src/lib/components/Checkbox/Checkbox.svelte',
  'src/lib/components/CommandBlock.svelte',
  'src/lib/components/DataTable.svelte',
  'src/lib/components/Drawer.svelte',
  'src/lib/components/Pagination.svelte',
  'src/lib/components/Radio.svelte',
  'src/lib/components/Select.svelte',
  'src/lib/components/Slider.svelte',
  'src/lib/components/Switch.svelte',
  'src/lib/components/Textarea.svelte',
  'src/lib/components/Toast.svelte',
  'src/lib/components/Sidebar.svelte',
  'src/lib/components/liquidify/GlassInput.svelte'
];

// Variables that need to be $state
const stateVars = {
  'currentIndex': 0,
  'checked': 'false',
  'indeterminate': 'false',
  'status': "'idle'",
  'sortConfig': '{ key: null, direction: "asc" }',
  'selectedRows': 'new Set()',
  'filterConfig': '{}',
  'currentPage': '1',
  'open': 'false',
  'value': "''",
  'collapsed': 'false'
};

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  File not found: ${filePath}`);
    return;
  }

  console.log(`🔧 Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix each state variable
  for (const [varName, defaultValue] of Object.entries(stateVars)) {
    // Pattern: const varName = defaultValue;
    const constPattern = new RegExp(`^(\\s*)const\\s+${varName}\\s*=\\s*([^;]+);?$`, 'gm');
    const matches = content.match(constPattern);
    
    if (matches) {
      for (const match of matches) {
        const replacement = match.replace(/const\s+/, 'let ').replace(/=\s*([^;]+);?$/, '= $state($1);');
        content = content.replace(match, replacement);
        modified = true;
        console.log(`  ✅ Fixed ${varName} to use $state`);
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Fixed ${filePath}`);
  } else {
    console.log(`  ⏭️  No changes needed for ${filePath}`);
  }
}

// Process all files
console.log(`📁 Processing ${filesToFix.length} files`);

filesToFix.forEach(fixFile);

console.log('✅ Major Svelte 5 issue fixes completed!');
