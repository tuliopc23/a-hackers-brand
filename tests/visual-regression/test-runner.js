#!/usr/bin/env node

/**
 * A Hacker's Brand - Visual Regression Test Runner
 * Comprehensive visual testing system for design system components
 */

import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test configuration
const config = {
  baseURL: 'http://localhost:5173',
  components: [
    'Button',
    'Card', 
    'Input',
    'Modal',
    'Badge',
    'Switch',
    'Tabs',
    'Alert',
    'Dropdown',
    'Progress',
    'Skeleton',
    'Toast',
    'Tooltip',
    'Radio',
    'Pagination',
    'Accordion',
    'Select',
    'Slider',
    'Textarea',
    'TerminalWindow',
    'BootSequence',
    'MatrixRain',
    'RetroText'
  ],
  variants: {
    Button: ['glass', 'terminal', 'minimal'],
    Card: ['glass', 'terminal', 'minimal'],
    Input: ['glass', 'terminal', 'minimal'],
    Badge: ['glass', 'terminal', 'minimal'],
    Alert: ['info', 'success', 'warning', 'error'],
    Progress: ['linear', 'circular'],
    RetroText: ['bitmap', 'terminal', 'vintage', 'commodore', 'apple2', 'atari']
  },
  sizes: {
    Button: ['sm', 'md', 'lg'],
    Input: ['sm', 'md', 'lg'],
    Badge: ['sm', 'md', 'lg']
  },
  states: {
    Button: ['default', 'hover', 'active', 'disabled', 'loading'],
    Input: ['default', 'focus', 'error', 'disabled'],
    Switch: ['default', 'checked', 'disabled'],
    Modal: ['default', 'open']
  },
  themes: ['light', 'dark'],
  breakpoints: [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 }
  ]
};

// Generate test matrix
function generateTestMatrix() {
  const tests = [];
  
  for (const component of config.components) {
    const variants = config.variants[component] || ['default'];
    const sizes = config.sizes[component] || ['md'];
    const states = config.states[component] || ['default'];
    
    for (const variant of variants) {
      for (const size of sizes) {
        for (const state of states) {
          for (const theme of config.themes) {
            for (const breakpoint of config.breakpoints) {
              tests.push({
                component,
                variant,
                size,
                state,
                theme,
                breakpoint,
                name: `${component}-${variant}-${size}-${state}-${theme}-${breakpoint.name}`
              });
            }
          }
        }
      }
    }
  }
  
  return tests;
}

// Visual regression test generator
function createVisualTest(testCase) {
  return async ({ page }) => {
    // Set viewport
    await page.setViewportSize({
      width: testCase.breakpoint.width,
      height: testCase.breakpoint.height
    });
    
    // Navigate to component page
    await page.goto(`${config.baseURL}/components/${testCase.component.toLowerCase()}`);
    
    // Set theme
    await page.evaluate((theme) => {
      document.documentElement.setAttribute('data-theme', theme);
    }, testCase.theme);
    
    // Wait for component to load
    await page.waitForSelector(`[data-component="${testCase.component.toLowerCase()}"]`, {
      timeout: 10000
    });
    
    // Find component with specific variant and size
    const componentSelector = [
      `[data-component="${testCase.component.toLowerCase()}"]`,
      testCase.variant !== 'default' ? `[data-variant="${testCase.variant}"]` : '',
      testCase.size !== 'md' ? `[data-size="${testCase.size}"]` : ''
    ].filter(Boolean).join('');
    
    const component = page.locator(componentSelector).first();
    
    // Apply state
    switch (testCase.state) {
      case 'hover':
        await component.hover();
        break;
      case 'focus':
        await component.focus();
        break;
      case 'active':
        await component.click();
        break;
      case 'disabled':
        await component.evaluate(el => el.setAttribute('disabled', 'true'));
        break;
      case 'loading':
        await component.evaluate(el => el.setAttribute('data-loading', 'true'));
        break;
      case 'error':
        await component.evaluate(el => el.setAttribute('data-error', 'true'));
        break;
      case 'checked':
        await component.check();
        break;
      case 'open':
        await component.click();
        await page.waitForSelector('[data-state="open"]');
        break;
    }
    
    // Wait for animations to complete
    await page.waitForTimeout(500);
    
    // Take screenshot
    await expect(component).toHaveScreenshot(`${testCase.name}.png`, {
      animations: 'disabled',
      caret: 'hide'
    });
  };
}

// Animation regression tests
const animationTests = [
  {
    name: 'liquid-blur-transition',
    selector: '[data-animation="liquid-blur"]',
    trigger: 'hover'
  },
  {
    name: 'glass-fade-transition', 
    selector: '[data-animation="glass-fade"]',
    trigger: 'click'
  },
  {
    name: 'spring-pop-animation',
    selector: '[data-animation="spring-pop"]',
    trigger: 'focus'
  },
  {
    name: 'magnetic-hover-effect',
    selector: '[data-animation="magnetic"]',
    trigger: 'hover'
  },
  {
    name: 'jelly-hover-effect',
    selector: '[data-animation="jelly"]',
    trigger: 'hover'
  }
];

// Accessibility visual tests
const accessibilityTests = [
  {
    name: 'high-contrast-mode',
    setup: async (page) => {
      await page.emulateMedia({ forcedColors: 'active' });
    }
  },
  {
    name: 'reduced-motion',
    setup: async (page) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
    }
  },
  {
    name: 'focus-indicators',
    interactions: ['tab', 'enter', 'space', 'arrow']
  }
];

// Performance visual tests
const performanceTests = [
  {
    name: 'large-dataset-rendering',
    component: 'Table',
    dataSize: 1000
  },
  {
    name: 'complex-animation-performance',
    component: 'MatrixRain',
    duration: 5000
  },
  {
    name: 'webgl-component-loading',
    component: 'LiquidSphere',
    timeout: 15000
  }
];

// Cross-browser compatibility tests
const browserTests = [
  { name: 'chromium', engine: 'chromium' },
  { name: 'firefox', engine: 'firefox' },
  { name: 'webkit', engine: 'webkit' }
];

// Generate and run tests
const testMatrix = generateTestMatrix();

// Component visual regression tests
for (const testCase of testMatrix) {
  test(`Visual: ${testCase.name}`, createVisualTest(testCase));
}

// Animation regression tests
for (const animTest of animationTests) {
  test(`Animation: ${animTest.name}`, async ({ page }) => {
    await page.goto(`${config.baseURL}/animations`);
    
    const element = page.locator(animTest.selector);
    await element.waitFor();
    
    // Record initial state
    await expect(element).toHaveScreenshot(`${animTest.name}-initial.png`);
    
    // Trigger animation
    switch (animTest.trigger) {
      case 'hover':
        await element.hover();
        break;
      case 'click':
        await element.click();
        break;
      case 'focus':
        await element.focus();
        break;
    }
    
    // Wait for animation to start
    await page.waitForTimeout(100);
    await expect(element).toHaveScreenshot(`${animTest.name}-active.png`);
    
    // Wait for animation to complete
    await page.waitForTimeout(500);
    await expect(element).toHaveScreenshot(`${animTest.name}-complete.png`);
  });
}

// Accessibility visual tests
for (const a11yTest of accessibilityTests) {
  test(`Accessibility: ${a11yTest.name}`, async ({ page }) => {
    if (a11yTest.setup) {
      await a11yTest.setup(page);
    }
    
    await page.goto(`${config.baseURL}/components`);
    
    if (a11yTest.interactions) {
      for (const interaction of a11yTest.interactions) {
        await page.keyboard.press(interaction);
        await page.waitForTimeout(200);
      }
    }
    
    await expect(page).toHaveScreenshot(`a11y-${a11yTest.name}.png`);
  });
}

// Performance visual tests
for (const perfTest of performanceTests) {
  test(`Performance: ${perfTest.name}`, async ({ page }) => {
    await page.goto(`${config.baseURL}/performance/${perfTest.component.toLowerCase()}`);
    
    if (perfTest.dataSize) {
      await page.evaluate((size) => {
        window.testDataSize = size;
      }, perfTest.dataSize);
    }
    
    const timeout = perfTest.timeout || 5000;
    await page.waitForTimeout(timeout);
    
    await expect(page).toHaveScreenshot(`perf-${perfTest.name}.png`);
  });
}

// Cross-browser tests (sample)
for (const browser of browserTests) {
  test(`Browser: ${browser.name} compatibility`, async ({ page }) => {
    await page.goto(`${config.baseURL}/components/button`);
    
    const button = page.locator('[data-component="button"]').first();
    await expect(button).toHaveScreenshot(`browser-${browser.name}-button.png`);
  });
}

// Theme consistency tests
test('Theme consistency across components', async ({ page }) => {
  await page.goto(`${config.baseURL}/themes`);
  
  for (const theme of config.themes) {
    await page.evaluate((t) => {
      document.documentElement.setAttribute('data-theme', t);
    }, theme);
    
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot(`theme-${theme}-consistency.png`);
  }
});

// Responsive layout tests
test('Responsive layout integrity', async ({ page }) => {
  await page.goto(`${config.baseURL}/layouts`);
  
  for (const breakpoint of config.breakpoints) {
    await page.setViewportSize({
      width: breakpoint.width,
      height: breakpoint.height
    });
    
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot(`responsive-${breakpoint.name}.png`);
  }
});

// Component interaction flows
test('Multi-step interaction flows', async ({ page }) => {
  await page.goto(`${config.baseURL}/interactions`);
  
  // Form interaction flow
  await page.fill('[data-testid="form-input"]', 'test input');
  await expect(page).toHaveScreenshot('interaction-form-filled.png');
  
  await page.click('[data-testid="form-submit"]');
  await page.waitForSelector('[data-testid="form-success"]');
  await expect(page).toHaveScreenshot('interaction-form-success.png');
  
  // Modal interaction flow
  await page.click('[data-testid="modal-trigger"]');
  await page.waitForSelector('[data-testid="modal-content"]');
  await expect(page).toHaveScreenshot('interaction-modal-open.png');
});

// Error state visualization
test('Error state consistency', async ({ page }) => {
  await page.goto(`${config.baseURL}/error-states`);
  
  const errorTriggers = [
    'form-validation-error',
    'network-error',
    'component-error',
    'loading-timeout'
  ];
  
  for (const trigger of errorTriggers) {
    await page.click(`[data-testid="${trigger}"]`);
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot(`error-${trigger}.png`);
  }
});

export { config, generateTestMatrix, createVisualTest };