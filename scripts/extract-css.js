#!/usr/bin/env node

/**
 * A Hacker's Brand - CSS Extraction for Standalone Builds
 * Extracts all CSS styles into standalone files for framework-agnostic usage
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// ANSI Colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// CSS extraction configuration
const config = {
  srcPath: path.join(__dirname, '..', 'src'),
  distPath: path.join(__dirname, '..', 'dist', 'css'),
  tempPath: path.join(__dirname, '..', 'temp-css-extract'),
  
  bundles: [
    {
      name: 'core',
      description: 'Core design system styles',
      includes: [
        'tokens/**/*.css',
        'motion/**/*.css',
        'base.css',
        'reset.css'
      ]
    },
    {
      name: 'components',
      description: 'All component styles',
      includes: [
        'components/**/*.css',
        '!components/webgl/**/*.css',
        '!components/liquidify/**/*.css'
      ]
    },
    {
      name: 'webgl',
      description: 'WebGL and 3D component styles',
      includes: [
        'components/webgl/**/*.css'
      ]
    },
    {
      name: 'liquidify',
      description: 'Advanced glass morphism styles',
      includes: [
        'components/liquidify/**/*.css'
      ]
    },
    {
      name: 'complete',
      description: 'Complete design system (all styles)',
      includes: [
        '**/*.css'
      ]
    }
  ]
};

function extractCSSFromSvelte(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const styleMatches = content.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
  
  if (!styleMatches) return '';
  
  return styleMatches
    .map(match => {
      // Extract content between <style> tags
      const cssContent = match.replace(/<style[^>]*>|<\/style>/g, '');
      
      // Clean up Svelte-specific syntax
      return cssContent
        .replace(/:global\((.*?)\)/g, '$1') // Remove :global() wrapper
        .replace(/&/g, '') // Remove Svelte & selector
        .trim();
    })
    .filter(css => css.length > 0)
    .join('\n\n');
}

function extractTailwindClasses(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract class attributes from Svelte files
  const classMatches = content.match(/class=["']([^"']*?)["']/g);
  if (!classMatches) return [];
  
  const classes = [];
  classMatches.forEach(match => {
    const classContent = match.replace(/class=["']|["']/g, '');
    const classList = classContent.split(/\s+/).filter(cls => cls.length > 0);
    classes.push(...classList);
  });
  
  return [...new Set(classes)]; // Remove duplicates
}

async function generateTailwindCSS(classes) {
  const tempConfigPath = path.join(config.tempPath, 'tailwind.temp.config.js');
  const tempInputPath = path.join(config.tempPath, 'input.temp.css');
  const tempOutputPath = path.join(config.tempPath, 'output.temp.css');
  
  // Create temp directory
  fs.mkdirSync(config.tempPath, { recursive: true });
  
  // Create temporary Tailwind config
  const tailwindConfig = `
export default {
  content: [],
  safelist: [
    ${classes.map(cls => `'${cls}'`).join(',\n    ')}
  ],
  theme: {
    extend: {
      colors: {
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-black': 'rgba(0, 0, 0, 0.1)',
        'terminal-green': '#00ff00',
        'terminal-amber': '#ffb000',
        'neon-blue': '#00d4ff',
        'neon-purple': '#8b5cf6',
        'liquid-primary': '#3b82f6',
        'liquid-secondary': '#8b5cf6',
      },
      borderRadius: {
        'brand': '12px',
        'liquid': '16px',
      },
      backdropBlur: {
        'xs': '2px',
        'brand': '12px',
      },
      animation: {
        'liquid-float': 'liquidFloat 6s ease-in-out infinite',
        'terminal-cursor': 'terminalCursor 1s infinite',
        'glass-shimmer': 'glassShimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
`;
  
  fs.writeFileSync(tempConfigPath, tailwindConfig);
  
  // Create temporary input CSS
  const inputCSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;

/* A Hacker's Brand - Custom CSS Variables */
:root {
  --glass-opacity: 0.1;
  --terminal-glow: #00ff00;
  --liquid-blur: 12px;
  --brand-radius: 12px;
}

/* Liquid Glass Base Classes */
.glass {
  background: rgba(255, 255, 255, var(--glass-opacity));
  backdrop-filter: blur(var(--liquid-blur));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--brand-radius);
}

.glass-dark {
  background: rgba(0, 0, 0, var(--glass-opacity));
  backdrop-filter: blur(var(--liquid-blur));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--brand-radius);
}

/* Terminal Aesthetics */
.terminal-glow {
  text-shadow: 0 0 10px var(--terminal-glow);
  color: var(--terminal-glow);
}

.terminal-scanlines {
  position: relative;
}

.terminal-scanlines::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    transparent 50%, 
    rgba(0, 255, 0, 0.03) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
}

/* Liquid Animations */
@keyframes liquidFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(1deg); }
  66% { transform: translateY(5px) rotate(-1deg); }
}

@keyframes terminalCursor {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes glassShimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Responsive Glass */
@media (max-width: 768px) {
  :root {
    --liquid-blur: 8px;
    --brand-radius: 8px;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .liquid-float,
  .glass-shimmer,
  .terminal-cursor {
    animation: none;
  }
}
`;
  
  fs.writeFileSync(tempInputPath, inputCSS);
  
  try {
    // Generate CSS with Tailwind
    await execAsync(`npx tailwindcss -c ${tempConfigPath} -i ${tempInputPath} -o ${tempOutputPath} --minify`);
    
    if (fs.existsSync(tempOutputPath)) {
      return fs.readFileSync(tempOutputPath, 'utf8');
    }
  } catch (error) {
    console.error(`${colors.red}Tailwind CSS generation failed:${colors.reset}`, error.message);
  }
  
  return '';
}

function findFiles(dir, patterns) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else {
        const relativePath = path.relative(dir, fullPath);
        
        // Check if file matches any pattern
        const matches = patterns.some(pattern => {
          const isExclude = pattern.startsWith('!');
          const cleanPattern = isExclude ? pattern.slice(1) : pattern;
          
          const regex = new RegExp(
            cleanPattern
              .replace(/\*\*/g, '.*')
              .replace(/\*/g, '[^/]*')
              .replace(/\./g, '\\.')
          );
          
          const doesMatch = regex.test(relativePath);
          return isExclude ? !doesMatch : doesMatch;
        });
        
        if (matches) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

async function extractBundleCSS(bundle) {
  console.log(`${colors.cyan}📦 Extracting ${bundle.name} bundle...${colors.reset}`);
  
  let extractedCSS = '';
  let tailwindClasses = [];
  
  // Find all files matching patterns
  const files = findFiles(config.srcPath, bundle.includes);
  
  console.log(`${colors.blue}   Found ${files.length} files${colors.reset}`);
  
  for (const file of files) {
    const ext = path.extname(file);
    
    if (ext === '.svelte') {
      // Extract CSS from Svelte files
      const css = extractCSSFromSvelte(file);
      if (css) {
        extractedCSS += `\n/* ${path.relative(config.srcPath, file)} */\n${css}\n`;
      }
      
      // Extract Tailwind classes
      const classes = extractTailwindClasses(file);
      tailwindClasses.push(...classes);
    } else if (ext === '.css') {
      // Include CSS files directly
      const css = fs.readFileSync(file, 'utf8');
      extractedCSS += `\n/* ${path.relative(config.srcPath, file)} */\n${css}\n`;
    }
  }
  
  // Remove duplicate Tailwind classes
  tailwindClasses = [...new Set(tailwindClasses)];
  
  // Generate Tailwind CSS for used classes
  if (tailwindClasses.length > 0) {
    console.log(`${colors.blue}   Generating Tailwind CSS for ${tailwindClasses.length} classes${colors.reset}`);
    const tailwindCSS = await generateTailwindCSS(tailwindClasses);
    extractedCSS = tailwindCSS + '\n\n' + extractedCSS;
  }
  
  // Create output file
  const outputPath = path.join(config.distPath, `${bundle.name}.css`);
  fs.mkdirSync(config.distPath, { recursive: true });
  
  // Add bundle header
  const header = `/*!
 * A Hacker's Brand - ${bundle.description}
 * Extracted CSS Bundle: ${bundle.name}
 * Generated: ${new Date().toISOString()}
 */\n\n`;
  
  fs.writeFileSync(outputPath, header + extractedCSS);
  
  // Create minified version
  const minifiedPath = path.join(config.distPath, `${bundle.name}.min.css`);
  const minifiedCSS = extractedCSS
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/;\s*}/g, '}') // Remove unnecessary semicolons
    .replace(/\s*{\s*/g, '{') // Clean braces
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .trim();
  
  fs.writeFileSync(minifiedPath, header.replace(/\n\n/g, '\n') + minifiedCSS);
  
  const size = fs.statSync(outputPath).size;
  const minSize = fs.statSync(minifiedPath).size;
  
  console.log(`${colors.green}   ✅ ${bundle.name}.css (${(size / 1024).toFixed(2)} KB)${colors.reset}`);
  console.log(`${colors.green}   ✅ ${bundle.name}.min.css (${(minSize / 1024).toFixed(2)} KB)${colors.reset}`);
  
  return { bundle: bundle.name, size, minSize, classes: tailwindClasses.length };
}

function generateUsageGuide() {
  const usageGuide = `# A Hacker's Brand - Standalone CSS Usage Guide

## Available CSS Bundles

### Core Bundle (\`core.css\`)
Essential design system styles including tokens, motion, and base styles.
\`\`\`html
<link rel="stylesheet" href="node_modules/a-hackers-brand/dist/css/core.css">
\`\`\`

### Components Bundle (\`components.css\`)
All component styles for buttons, forms, navigation, etc.
\`\`\`html
<link rel="stylesheet" href="node_modules/a-hackers-brand/dist/css/components.css">
\`\`\`

### WebGL Bundle (\`webgl.css\`)
3D and WebGL component styles.
\`\`\`html
<link rel="stylesheet" href="node_modules/a-hackers-brand/dist/css/webgl.css">
\`\`\`

### Liquidify Bundle (\`liquidify.css\`)
Advanced glass morphism and liquid effects.
\`\`\`html
<link rel="stylesheet" href="node_modules/a-hackers-brand/dist/css/liquidify.css">
\`\`\`

### Complete Bundle (\`complete.css\`)
All styles in a single file.
\`\`\`html
<link rel="stylesheet" href="node_modules/a-hackers-brand/dist/css/complete.css">
\`\`\`

## Framework-Agnostic Usage

### HTML + CSS
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/a-hackers-brand/dist/css/complete.min.css">
</head>
<body>
  <button class="glass rounded-brand px-4 py-2 text-white hover:bg-white/20">
    Glass Button
  </button>
  
  <div class="terminal-glow font-mono">
    > Terminal Text
  </div>
</body>
</html>
\`\`\`

### React
\`\`\`jsx
import 'a-hackers-brand/dist/css/complete.css';

function App() {
  return (
    <div className="glass p-6 rounded-brand">
      <h1 className="terminal-glow text-2xl">A Hacker's Brand</h1>
    </div>
  );
}
\`\`\`

### Vue
\`\`\`vue
<template>
  <div class="glass p-6 rounded-brand">
    <h1 class="terminal-glow text-2xl">A Hacker's Brand</h1>
  </div>
</template>

<style>
@import 'a-hackers-brand/dist/css/complete.css';
</style>
\`\`\`

### Angular
\`\`\`typescript
// angular.json
"styles": [
  "node_modules/a-hackers-brand/dist/css/complete.css"
]
\`\`\`

## Core CSS Classes

### Glass Morphism
- \`.glass\` - Basic glass effect
- \`.glass-dark\` - Dark glass variant
- \`.rounded-brand\` - Brand border radius
- \`.rounded-liquid\` - Liquid border radius

### Terminal Aesthetics
- \`.terminal-glow\` - Green terminal glow
- \`.terminal-scanlines\` - CRT scanline effect

### Animations
- \`.liquid-float\` - Floating animation
- \`.glass-shimmer\` - Shimmer effect

### Responsive
All styles are responsive and support reduced motion preferences.

## Customization

Override CSS variables to customize the design:

\`\`\`css
:root {
  --glass-opacity: 0.2;
  --terminal-glow: #00ffff;
  --liquid-blur: 16px;
  --brand-radius: 16px;
}
\`\`\`

## Performance Tips

1. Use minified versions in production
2. Load only required bundles
3. Consider using \`core.css\` + specific bundles
4. Bundle sizes are optimized for tree-shaking
`;

  const guidePath = path.join(config.distPath, 'README.md');
  fs.writeFileSync(guidePath, usageGuide);
  
  return guidePath;
}

async function extractAllCSS() {
  console.log(`${colors.bright}${colors.magenta}🎨 A Hacker's Brand CSS Extraction${colors.reset}\n`);
  
  // Clean previous extraction
  if (fs.existsSync(config.distPath)) {
    fs.rmSync(config.distPath, { recursive: true, force: true });
  }
  
  const results = [];
  
  // Extract each bundle
  for (const bundle of config.bundles) {
    const result = await extractBundleCSS(bundle);
    results.push(result);
  }
  
  // Generate usage guide
  const guidePath = generateUsageGuide();
  console.log(`${colors.green}📚 Usage guide: ${guidePath}${colors.reset}`);
  
  // Clean up temp files
  if (fs.existsSync(config.tempPath)) {
    fs.rmSync(config.tempPath, { recursive: true, force: true });
  }
  
  // Summary
  console.log(`\n${colors.bright}📊 CSS Extraction Summary${colors.reset}`);
  console.log('─'.repeat(50));
  
  let totalSize = 0;
  let totalMinSize = 0;
  
  for (const result of results) {
    const sizeKB = (result.size / 1024).toFixed(2);
    const minSizeKB = (result.minSize / 1024).toFixed(2);
    
    console.log(`${colors.cyan}${result.bundle.padEnd(12)}${colors.reset} ${sizeKB.padStart(8)} KB | ${minSizeKB.padStart(8)} KB (min) | ${result.classes} classes`);
    
    totalSize += result.size;
    totalMinSize += result.minSize;
  }
  
  console.log('─'.repeat(50));
  console.log(`${colors.bright}Total${colors.reset}        ${(totalSize / 1024).toFixed(2).padStart(8)} KB | ${(totalMinSize / 1024).toFixed(2).padStart(8)} KB (min)`);
  
  console.log(`\n${colors.green}🎉 CSS extraction complete!${colors.reset}`);
  console.log(`${colors.cyan}📁 Output: ${config.distPath}${colors.reset}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  extractAllCSS().catch(error => {
    console.error(`${colors.red}Error:${colors.reset}`, error);
    process.exit(1);
  });
}

export { extractAllCSS };