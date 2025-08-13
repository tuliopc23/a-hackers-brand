#!/usr/bin/env bun
// Component inventory script for A Hacker's Brand
import { readdirSync, statSync, existsSync, readFileSync } from 'fs';
import { join, basename, extname } from 'path';
import { writeFileSync, mkdirSync } from 'fs';

const libRoot = 'src/lib/components';
const docsRoot = 'docs/components'; // Mintlify root
const outputDir = '.cache';
const outputFile = join(outputDir, 'inventory.json');

interface ComponentInfo {
  name: string;
  path: string;
  isWebGL: boolean;
  hasStory: boolean;
  hasTest: boolean;
  hasMintDocs: boolean;
  isExported: boolean;
  category: string;
}

function scanDirectory(dirPath: string): string[] {
  const files: string[] = [];
  
  function scan(currentPath: string) {
    const entries = readdirSync(currentPath);
    
    for (const entry of entries) {
      const fullPath = join(currentPath, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (entry.endsWith('.svelte')) {
        files.push(fullPath);
      }
    }
  }
  
  if (existsSync(dirPath)) {
    scan(dirPath);
  }
  
  return files;
}

function categorizeComponent(name: string, path: string): string {
  const lowerName = name.toLowerCase();
  const pathLower = path.toLowerCase();
  
  // Category mapping based on name and path
  if (pathLower.includes('webgl') || lowerName.includes('threlte') || lowerName.includes('canvas')) {
    return 'WebGL/3D';
  }
  
  if (lowerName.includes('terminal') || lowerName.includes('matrix') || lowerName.includes('retro') || lowerName.includes('boot')) {
    return 'Terminal';
  }
  
  if (lowerName.includes('error') || lowerName.includes('boundary') || lowerName.includes('async')) {
    return 'Error Handling';
  }
  
  if (['button', 'input', 'select', 'checkbox', 'radio', 'textarea', 'switch', 'slider', 'datepicker', 'fileupload'].some(type => lowerName.includes(type))) {
    return 'Form Controls';
  }
  
  if (['modal', 'drawer', 'dropdown', 'tooltip', 'toast', 'alert'].some(type => lowerName.includes(type))) {
    return 'Overlays & Feedback';
  }
  
  if (['card', 'badge', 'progress', 'skeleton', 'statusbar', 'colorpalette', 'glowtext'].some(type => lowerName.includes(type))) {
    return 'Display';
  }
  
  if (['navbar', 'breadcrumb', 'menu', 'sidebar', 'tabs'].some(type => lowerName.includes(type))) {
    return 'Navigation';
  }
  
  if (['table', 'datagrid', 'datatable', 'list', 'pagination', 'carousel'].some(type => lowerName.includes(type))) {
    return 'Data Display';
  }
  
  if (lowerName.includes('theme') || lowerName.includes('accessibility')) {
    return 'System';
  }
  
  return 'Other';
}

function checkExported(componentName: string): boolean {
  const indexPath = join(libRoot, 'index.ts');
  if (!existsSync(indexPath)) {
    return false;
  }
  
  const content = readFileSync(indexPath, 'utf-8');
  return content.includes(`default as ${componentName}`) || content.includes(`export { ${componentName} }`);
}

function main() {
  console.log('📊 Scanning A Hacker\'s Brand component library...\n');
  
  // Ensure output directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  
  // Get all Svelte component files
  const componentFiles = scanDirectory(libRoot);
  
  const inventory: ComponentInfo[] = [];
  
  for (const filePath of componentFiles) {
    const fileName = basename(filePath);
    const name = basename(fileName, '.svelte');
    
    // Skip story files
    if (name.endsWith('.story') || name.includes('.story')) {
      continue;
    }
    
    const info: ComponentInfo = {
      name,
      path: filePath,
      isWebGL: filePath.includes('/webgl/') || filePath.includes('Threlte') || filePath.includes('Canvas'),
      hasStory: existsSync(filePath.replace('.svelte', '.story.svelte')),
      hasTest: existsSync(filePath.replace('.svelte', '.test.ts')) || existsSync(filePath.replace('.svelte', '.spec.ts')),
      hasMintDocs: existsSync(join(docsRoot, `${name.toLowerCase()}.mdx`)),
      isExported: checkExported(name),
      category: categorizeComponent(name, filePath)
    };
    
    inventory.push(info);
  }
  
  // Sort by category, then by name
  inventory.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });
  
  // Generate summary stats
  const stats = {
    totalComponents: inventory.length,
    exported: inventory.filter(c => c.isExported).length,
    hasStory: inventory.filter(c => c.hasStory).length,
    hasTest: inventory.filter(c => c.hasTest).length,
    hasDocs: inventory.filter(c => c.hasMintDocs).length,
    webglComponents: inventory.filter(c => c.isWebGL).length,
    categories: Object.fromEntries(
      Array.from(new Set(inventory.map(c => c.category)))
        .map(cat => [cat, inventory.filter(c => c.category === cat).length])
    )
  };
  
  const report = {
    generatedAt: new Date().toISOString(),
    stats,
    components: inventory
  };
  
  // Write to JSON file
  writeFileSync(outputFile, JSON.stringify(report, null, 2));
  
  // Console output
  console.log('📈 Component Library Stats:');
  console.log(`  Total Components: ${stats.totalComponents}`);
  console.log(`  Exported: ${stats.exported} (${Math.round(stats.exported/stats.totalComponents*100)}%)`);
  console.log(`  Has Story: ${stats.hasStory} (${Math.round(stats.hasStory/stats.totalComponents*100)}%)`);
  console.log(`  Has Tests: ${stats.hasTest} (${Math.round(stats.hasTest/stats.totalComponents*100)}%)`);
  console.log(`  Has Docs: ${stats.hasDocs} (${Math.round(stats.hasDocs/stats.totalComponents*100)}%)`);
  console.log(`  WebGL Components: ${stats.webglComponents}\n`);
  
  console.log('📂 Components by Category:');
  for (const [category, count] of Object.entries(stats.categories)) {
    console.log(`  ${category}: ${count}`);
  }
  
  console.log('\n❌ Missing Documentation:');
  const missingDocs = inventory.filter(c => c.isExported && !c.hasMintDocs);
  for (const component of missingDocs) {
    console.log(`  - ${component.name} (${component.category})`);
  }
  
  console.log('\n❌ Missing Tests:');
  const missingTests = inventory.filter(c => c.isExported && !c.hasTest);
  for (const component of missingTests) {
    console.log(`  - ${component.name} (${component.category})`);
  }
  
  console.log('\n✅ Well-Documented Components:');
  const wellDocumented = inventory.filter(c => c.isExported && c.hasMintDocs && c.hasStory);
  for (const component of wellDocumented) {
    console.log(`  - ${component.name} (${component.category})`);
  }
  
  console.log(`\n📄 Full inventory saved to: ${outputFile}`);
}

main();
