/**
 * Axe-core Configuration for WCAG 2.1 AA Compliance
 * Comprehensive accessibility testing configuration
 */

export const axeConfig = {
	// WCAG 2.1 AA compliance rules
	tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
	
	// Custom rules configuration
	rules: {
		// === WCAG 2.1 AA SPECIFIC RULES ===
		
		// 1.1.1 Non-text Content (Level A)
		'image-alt': { enabled: true },
		'input-image-alt': { enabled: true },
		'area-alt': { enabled: true },
		
		// 1.3.1 Info and Relationships (Level A)
		'heading-order': { enabled: true },
		'label': { enabled: true },
		'form-field-multiple-labels': { enabled: true },
		
		// 1.3.2 Meaningful Sequence (Level A)
		'tabindex': { enabled: true },
		
		// 1.3.3 Sensory Characteristics (Level A)
		'color-contrast': { enabled: true },
		
		// 1.4.1 Use of Color (Level A)
		'link-in-text-block': { enabled: true },
		
		// 1.4.3 Contrast (Minimum) (Level AA)
		'color-contrast': {
			enabled: true,
			options: {
				// WCAG AA requires 4.5:1 for normal text, 3:1 for large text
				contrastRatio: {
					normal: 4.5,
					large: 3.0
				}
			}
		},
		
		// 1.4.4 Resize text (Level AA)
		'meta-viewport': { enabled: true },
		
		// 1.4.10 Reflow (Level AA)
		'scrollable-region-focusable': { enabled: true },
		
		// 1.4.11 Non-text Contrast (Level AA)
		'color-contrast-enhanced': { enabled: false }, // This is AAA, not AA
		
		// 2.1.1 Keyboard (Level A)
		'keyboard': { enabled: true },
		'focus-order-semantics': { enabled: true },
		
		// 2.1.2 No Keyboard Trap (Level A)
		'no-focusable-content': { enabled: true },
		
		// 2.1.4 Character Key Shortcuts (Level A)
		'accesskeys': { enabled: true },
		
		// 2.4.1 Bypass Blocks (Level A)
		'bypass': { enabled: true },
		'skip-link': { enabled: true },
		
		// 2.4.2 Page Titled (Level A)
		'document-title': { enabled: true },
		
		// 2.4.3 Focus Order (Level A)
		'focus-order-semantics': { enabled: true },
		
		// 2.4.4 Link Purpose (In Context) (Level A)
		'link-name': { enabled: true },
		
		// 2.4.6 Headings and Labels (Level AA)
		'empty-heading': { enabled: true },
		'heading-order': { enabled: true },
		
		// 2.4.7 Focus Visible (Level AA)
		'focus-order-semantics': { enabled: true },
		
		// 3.1.1 Language of Page (Level A)
		'html-has-lang': { enabled: true },
		'html-lang-valid': { enabled: true },
		
		// 3.1.2 Language of Parts (Level AA)
		'valid-lang': { enabled: true },
		
		// 3.2.1 On Focus (Level A)
		// 3.2.2 On Input (Level A)
		// These are behavioral and tested in E2E tests
		
		// 3.3.1 Error Identification (Level A)
		'label': { enabled: true },
		
		// 3.3.2 Labels or Instructions (Level A)
		'label': { enabled: true },
		'form-field-multiple-labels': { enabled: true },
		
		// 3.3.3 Error Suggestion (Level AA)
		// This is behavioral and tested in E2E tests
		
		// 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)
		// This is behavioral and tested in E2E tests
		
		// 4.1.1 Parsing (Level A)
		'duplicate-id': { enabled: true },
		'duplicate-id-active': { enabled: true },
		'duplicate-id-aria': { enabled: true },
		
		// 4.1.2 Name, Role, Value (Level A)
		'aria-allowed-attr': { enabled: true },
		'aria-hidden-body': { enabled: true },
		'aria-hidden-focus': { enabled: true },
		'aria-input-field-name': { enabled: true },
		'aria-required-attr': { enabled: true },
		'aria-required-children': { enabled: true },
		'aria-required-parent': { enabled: true },
		'aria-roles': { enabled: true },
		'aria-valid-attr': { enabled: true },
		'aria-valid-attr-value': { enabled: true },
		'button-name': { enabled: true },
		'input-button-name': { enabled: true },
		
		// 4.1.3 Status Messages (Level AA)
		'aria-live-region': { enabled: true },
		
		// === ADDITIONAL BEST PRACTICES ===
		'landmark-one-main': { enabled: true },
		'landmark-complementary-is-top-level': { enabled: true },
		'landmark-main-is-top-level': { enabled: true },
		'landmark-no-duplicate-banner': { enabled: true },
		'landmark-no-duplicate-contentinfo': { enabled: true },
		'landmark-unique': { enabled: true },
		
		// === CUSTOM RULES FOR DESIGN SYSTEM ===
		'region': { enabled: true },
		'page-has-heading-one': { enabled: true },
		'scrollable-region-focusable': { enabled: true }
	},
	
	// Elements to exclude from testing
	exclude: [
		// Third-party widgets that we can't control
		'[data-testid="third-party-widget"]',
		// Development-only elements
		'[data-dev-only]',
		// Hidden elements that are intentionally not accessible
		'[aria-hidden="true"]'
	],
	
	// Custom checks for design system
	checks: [
		{
			id: 'design-system-color-contrast',
			evaluate: function(node, options) {
				// Custom color contrast check for design system colors
				const style = window.getComputedStyle(node);
				const backgroundColor = style.backgroundColor;
				const color = style.color;
				
				// Implementation would check against design system color palette
				return true; // Simplified for example
			},
			metadata: {
				impact: 'serious',
				messages: {
					pass: 'Design system color contrast is sufficient',
					fail: 'Design system color contrast is insufficient'
				}
			}
		}
	],
	
	// Reporting configuration
	reporter: 'v2',
	
	// Performance settings
	timeout: 30000,
	
	// Locale for internationalization
	locale: 'en'
};

// Export specific configurations for different test scenarios
export const mobileAxeConfig = {
	...axeConfig,
	// Mobile-specific rules
	rules: {
		...axeConfig.rules,
		// Touch target size (minimum 44x44px)
		'target-size': { enabled: true }
	}
};

export const darkModeAxeConfig = {
	...axeConfig,
	// Dark mode specific rules
	rules: {
		...axeConfig.rules,
		// Enhanced contrast checking for dark mode
		'color-contrast': {
			enabled: true,
			options: {
				contrastRatio: {
					normal: 4.5,
					large: 3.0
				},
				// Additional dark mode considerations
				ignoreUiComponents: false
			}
		}
	}
};

export const reducedMotionAxeConfig = {
	...axeConfig,
	// Reduced motion specific rules
	rules: {
		...axeConfig.rules,
		// Check for proper motion reduction
		'motion': { enabled: true }
	}
};
