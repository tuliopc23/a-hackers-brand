/**
 * A Hacker's Brand - Visual Regression Global Setup
 * Prepares environment for consistent visual testing
 */

import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function globalSetup(config) {
  console.log('🔧 Setting up visual regression testing environment...');
  
  // Create output directories
  const outputDirs = [
    'test-results/visual-regression',
    'test-results/visual-regression/artifacts',
    'test-results/visual-regression/screenshots',
    'test-results/visual-regression/diffs'
  ];
  
  for (const dir of outputDirs) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Launch browser for setup
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    // Wait for dev server to be ready
    console.log('⏳ Waiting for development server...');
    await page.goto(config.webServer?.url || 'http://localhost:5173', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    // Preload fonts and assets
    console.log('🔤 Preloading fonts and critical assets...');
    await page.evaluate(() => {
      // Preload system fonts
      const fonts = [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'monospace'
      ];
      
      fonts.forEach(font => {
        const span = document.createElement('span');
        span.style.fontFamily = font;
        span.style.fontSize = '1px';
        span.style.opacity = '0';
        span.style.position = 'absolute';
        span.textContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        document.body.appendChild(span);
        
        // Force render
        span.offsetHeight;
        
        // Clean up
        setTimeout(() => document.body.removeChild(span), 100);
      });
    });
    
    // Warm up component library
    console.log('🎨 Warming up component library...');
    const componentPages = [
      '/components/button',
      '/components/input',
      '/components/card',
      '/components/modal'
    ];
    
    for (const componentPage of componentPages) {
      try {
        await page.goto(`${config.webServer?.url || 'http://localhost:5173'}${componentPage}`, {
          waitUntil: 'networkidle',
          timeout: 30000
        });
        await page.waitForTimeout(1000); // Let animations settle
      } catch (error) {
        console.warn(`⚠️  Could not warm up ${componentPage}: ${error.message}`);
      }
    }
    
    // Set up performance monitoring
    console.log('📊 Setting up performance monitoring...');
    await page.evaluate(() => {
      // Mark setup completion
      window.__visualRegressionSetupComplete = true;
      
      // Setup performance observers
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'paint' || entry.entryType === 'navigation') {
              console.log(`Performance: ${entry.name} - ${entry.startTime}ms`);
            }
          });
        });
        
        observer.observe({ entryTypes: ['paint', 'navigation'] });
      }
    });
    
    // Generate baseline screenshots for critical components
    console.log('📸 Generating baseline screenshots...');
    const criticalComponents = [
      { name: 'button', selector: '[data-component="button"]' },
      { name: 'input', selector: '[data-component="input"]' },
      { name: 'card', selector: '[data-component="card"]' }
    ];
    
    for (const component of criticalComponents) {
      try {
        await page.goto(`${config.webServer?.url || 'http://localhost:5173'}/components/${component.name}`);
        await page.waitForSelector(component.selector, { timeout: 10000 });
        
        const element = page.locator(component.selector).first();
        await element.screenshot({
          path: `test-results/visual-regression/baselines/${component.name}-baseline.png`,
          animations: 'disabled'
        });
      } catch (error) {
        console.warn(`⚠️  Could not generate baseline for ${component.name}: ${error.message}`);
      }
    }
    
    console.log('✅ Visual regression environment setup complete');
    
  } catch (error) {
    console.error('❌ Visual regression setup failed:', error);
    throw error;
  } finally {
    await context.close();
    await browser.close();
  }
  
  // Save setup metadata
  const setupMetadata = {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    environment: process.env.NODE_ENV || 'test',
    baseURL: config.webServer?.url || 'http://localhost:5173'
  };
  
  fs.writeFileSync(
    'test-results/visual-regression/setup-metadata.json',
    JSON.stringify(setupMetadata, null, 2)
  );
}

export default globalSetup;