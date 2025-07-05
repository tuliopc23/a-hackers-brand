#!/usr/bin/env node

/**
 * A Hacker's Brand - Bundle Size Watcher
 * Watches for changes and continuously monitors bundle size
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// Configuration
const config = {
  watchPath: path.join(__dirname, '..', 'dist'),
  debounceMs: 1000,
  maxHistoryEntries: 100
};

// ANSI Colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

let watchTimeout;
let isAnalyzing = false;

function debounce(func, wait) {
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(watchTimeout);
      func(...args);
    };
    clearTimeout(watchTimeout);
    watchTimeout = setTimeout(later, wait);
  };
}

async function analyzeBundleSize() {
  if (isAnalyzing) return;
  
  isAnalyzing = true;
  
  try {
    console.log(`${colors.cyan}🔍 Analyzing bundle size changes...${colors.reset}`);
    
    const { stdout, stderr } = await execAsync('npm run bundle:analyze', {
      cwd: path.join(__dirname, '..')
    });
    
    if (stderr) {
      console.error(`${colors.red}Analysis errors:${colors.reset}`, stderr);
    }
    
    console.log(`${colors.green}✅ Bundle analysis complete${colors.reset}`);
    
  } catch (error) {
    console.error(`${colors.red}❌ Bundle analysis failed:${colors.reset}`, error.message);
  } finally {
    isAnalyzing = false;
  }
}

const debouncedAnalysis = debounce(analyzeBundleSize, config.debounceMs);

function startWatcher() {
  console.log(`${colors.bright}${colors.magenta}👁️  A Hacker's Brand Bundle Size Watcher${colors.reset}`);
  console.log(`${colors.yellow}Watching: ${config.watchPath}${colors.reset}`);
  console.log(`${colors.yellow}Debounce: ${config.debounceMs}ms${colors.reset}\n`);
  
  if (!fs.existsSync(config.watchPath)) {
    console.error(`${colors.red}❌ Watch path does not exist: ${config.watchPath}${colors.reset}`);
    console.log(`${colors.yellow}💡 Run 'npm run build:package' first${colors.reset}`);
    process.exit(1);
  }
  
  // Initial analysis
  analyzeBundleSize();
  
  // Watch for changes
  fs.watch(config.watchPath, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
      console.log(`${colors.blue}📁 ${eventType}: ${filename}${colors.reset}`);
      debouncedAnalysis();
    }
  });
  
  console.log(`${colors.green}✅ Watcher started. Press Ctrl+C to stop.${colors.reset}\n`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log(`\n${colors.yellow}👋 Stopping bundle size watcher...${colors.reset}`);
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(`\n${colors.yellow}👋 Stopping bundle size watcher...${colors.reset}`);
  process.exit(0);
});

// Start the watcher
startWatcher();