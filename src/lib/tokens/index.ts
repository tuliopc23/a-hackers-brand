// A Hacker's Brand - Design Tokens
// Advanced Hacker Color Palette - Retro Futuristic + Bubble Tea TUI
export const brandColors = {
	// Core Hacker Terminal Colors
	terminal: {
		green: '#00ff41', // Classic Matrix green
		cyan: '#00ffff', // Electric cyan
		blue: '#0080ff', // Neon blue
		purple: '#8a2be2', // Deep purple
		matrix: '#00ff88', // Matrix accent green
		neon: '#ff1493', // Hot pink neon
		amber: '#ffbf00', // Retro amber
		lime: '#32cd32', // Lime green
		magenta: '#ff00ff', // Electric magenta
		orange: '#ff4500' // Cyber orange
	},
	// Bubble Tea TUI Color Palette - Modern Terminal UI (WCAG AA Compliant)
	bubbleTea: {
		// Primary gradient colors - WCAG AA compliant against dark backgrounds
		pink: '#ff85b3', // WCAG AA compliant (improved from #ff6b9d)
		purple: '#d666ff', // WCAG AA compliant (improved from #c44af2)
		blue: '#66c3ff', // WCAG AA compliant (improved from #4fa8ff)
		cyan: '#4dd8da', // Modern cyan (already compliant)
		green: '#6bcf7f', // Fresh green (already compliant)
		yellow: '#ffd23a', // Warm yellow (already compliant)
		orange: '#ff8c42', // Coral orange (already compliant)
		red: '#ff8585', // WCAG AA compliant (improved from #ff6b6b)
		// Gradient combinations for modern TUI - WCAG AA compliant
		primary: '#ff85b3', // Pink primary (WCAG AA)
		secondary: '#d666ff', // Purple secondary (WCAG AA)
		accent: '#66c3ff', // Blue accent (WCAG AA)
		// Status colors
		success: '#6bcf7f',
		warning: '#ffd23a',
		error: '#ff8585', // WCAG AA compliant
		info: '#4dd8da',
		// Background variations
		background: '#1a1a2e',
		surface: '#16213e',
		panel: '#0f1419',
		// High contrast variants (WCAG AAA) for accessibility
		hcPink: '#ff99c7', // High contrast mode
		hcPurple: '#e099ff', // High contrast mode
		hcBlue: '#80d4ff', // High contrast mode
		hcCyan: '#66e6ea', // High contrast mode
		hcGreen: '#80dd99', // High contrast mode
		hcYellow: '#ffe066', // High contrast mode
		hcOrange: '#ffad66', // High contrast mode
		hcRed: '#ff9999', // High contrast mode
		// Legacy glow variants (now used for high contrast)
		glowPink: '#ff99c7', // High contrast variant
		glowPurple: '#e099ff', // High contrast variant
		glowBlue: '#80d4ff', // High contrast variant
		glowCyan: '#66e6ea', // High contrast variant
		glowGreen: '#80dd99', // High contrast variant
		glowYellow: '#ffe066', // High contrast variant
		glowOrange: '#ffad66', // High contrast variant
		glowRed: '#ff9999' // High contrast variant
	},
	// Retro Futuristic Gradients
	gradients: {
		cyberpunk: 'linear-gradient(135deg, #ff1493 0%, #8a2be2 50%, #00ffff 100%)',
		matrix: 'linear-gradient(180deg, #00ff41 0%, #008f11 100%)',
		neon: 'linear-gradient(90deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
		synthwave: 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)',
		terminal: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
		hologram: 'linear-gradient(45deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 50%, rgba(255,255,0,0.1) 100%)'
	},
	// Bubble Tea TUI Gradients - Modern and Colorful (WCAG AA Compliant)
	bubbleTeaGradients: {
		primary: 'linear-gradient(135deg, #ff85b3 0%, #d666ff 100%)', // Pink to purple (WCAG AA)
		secondary: 'linear-gradient(135deg, #66c3ff 0%, #4dd8da 100%)', // Blue to cyan (WCAG AA)
		accent: 'linear-gradient(135deg, #6bcf7f 0%, #ffd23a 100%)', // Green to yellow
		warm: 'linear-gradient(135deg, #ff8c42 0%, #ff85b3 100%)', // Orange to pink (WCAG AA)
		cool: 'linear-gradient(135deg, #4dd8da 0%, #d666ff 100%)', // Cyan to purple (WCAG AA)
		rainbow: 'linear-gradient(135deg, #ff85b3 0%, #d666ff 25%, #66c3ff 50%, #4dd8da 75%, #6bcf7f 100%)', // WCAG AA
		sunset: 'linear-gradient(135deg, #ffd23a 0%, #ff8c42 50%, #ff85b3 100%)', // WCAG AA
		ocean: 'linear-gradient(135deg, #4dd8da 0%, #66c3ff 50%, #d666ff 100%)', // WCAG AA
		forest: 'linear-gradient(135deg, #6bcf7f 0%, #4dd8da 50%, #66c3ff 100%)', // WCAG AA
		background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'
	},
	// Glass Morphism System
	glass: {
		primary: 'rgba(0, 255, 65, 0.15)',
		secondary: 'rgba(0, 255, 255, 0.12)',
		accent: 'rgba(255, 255, 255, 0.08)',
		background: 'rgba(0, 0, 0, 0.4)',
		border: 'rgba(0, 255, 65, 0.3)',
		glow: 'rgba(0, 255, 65, 0.5)',
		shadow: 'rgba(0, 255, 65, 0.2)'
	},
	// Semantic Colors with Hacker Aesthetic
	semantic: {
		success: '#00ff41',
		warning: '#ffbf00',
		error: '#ff073a',
		info: '#00ffff',
		neutral: '#808080'
	},
	// Background System
	backgrounds: {
		primary: '#0a0a0f',
		secondary: '#1a1a2e',
		tertiary: '#16213e',
		surface: '#1e1e1e',
		panel: 'rgba(255, 255, 255, 0.05)',
		overlay: 'rgba(0, 0, 0, 0.8)'
	},
	// Text Colors
	text: {
		primary: '#ffffff',
		secondary: '#cccccc',
		muted: '#888888',
		inverse: '#000000',
		terminal: '#00ff41',
		neon: '#00ffff',
		accent: '#ff1493'
	}
};

// Typography Scale
export const typography = {
	fontFamily: {
		// Professional monospace fonts for terminal/code environments
		mono: [
			'IBM Plex Mono',
			'JetBrains Mono',
			'SF Mono',
			'PP Supply Mono',
			'Consolas',
			'Monaco',
			'Cascadia Code',
			'Fira Code',
			'monospace'
		],
		// Modern sans-serif fonts for UI elements
		sans: [
			'PP Supply Sans',
			'SF Pro Display',
			'Inter',
			'system-ui',
			'-apple-system',
			'BlinkMacSystemFont',
			'sans-serif'
		],
		// Display fonts for headings and special text
		display: [
			'SF Pro Display',
			'PP Supply Sans',
			'Inter',
			'system-ui',
			'sans-serif'
		]
	},
	fontSize: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem'
	},
	lineHeight: {
		tight: '1.25',
		normal: '1.5',
		relaxed: '1.75'
	}
};

// Spacing Scale
export const spacing = {
	0: '0',
	1: '0.25rem',
	2: '0.5rem',
	3: '0.75rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	8: '2rem',
	10: '2.5rem',
	12: '3rem',
	16: '4rem',
	20: '5rem',
	24: '6rem'
};

// Glass Effects
export const glassEffects = {
	blur: {
		sm: 'blur(4px)',
		md: 'blur(8px)',
		lg: 'blur(12px)',
		xl: 'blur(16px)'
	},
	backdrop: {
		light: 'rgba(255, 255, 255, 0.1)',
		medium: 'rgba(255, 255, 255, 0.15)',
		heavy: 'rgba(255, 255, 255, 0.25)'
	},
	border: {
		subtle: '1px solid rgba(255, 255, 255, 0.1)',
		medium: '1px solid rgba(255, 255, 255, 0.2)',
		strong: '2px solid rgba(255, 255, 255, 0.3)'
	}
};

// Shadow System
export const shadows = {
	glass: {
		sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)'
	},
	glow: {
		// Terminal theme glows
		terminal: '0 0 20px rgba(0, 212, 170, 0.5)',
		cyan: '0 0 20px rgba(0, 170, 255, 0.5)',
		purple: '0 0 20px rgba(136, 68, 255, 0.5)',
		danger: '0 0 20px rgba(255, 68, 68, 0.5)',
		// Bubble Tea theme glows (using WCAG AA colors)
		bubbleTeaPink: '0 0 20px rgba(255, 133, 179, 0.6)', // Updated for AA compliance
		bubbleTeaPurple: '0 0 20px rgba(214, 102, 255, 0.6)', // Updated for AA compliance
		bubbleTeaBlue: '0 0 20px rgba(102, 195, 255, 0.6)', // Updated for AA compliance
		bubbleTeaCyan: '0 0 20px rgba(102, 230, 234, 0.6)',
		bubbleTeaGreen: '0 0 20px rgba(133, 217, 155, 0.6)',
		bubbleTeaYellow: '0 0 20px rgba(255, 229, 102, 0.6)',
		bubbleTeaOrange: '0 0 20px rgba(255, 173, 102, 0.6)',
		bubbleTeaRed: '0 0 20px rgba(255, 133, 133, 0.6)', // Updated for AA compliance
		// Enhanced glow effects for special cases (WCAG AA compliant)
		bubbleTeaIntense: {
			pink: '0 0 30px rgba(255, 133, 179, 0.8), 0 0 60px rgba(255, 133, 179, 0.4)', // AA compliant
			purple: '0 0 30px rgba(214, 102, 255, 0.8), 0 0 60px rgba(214, 102, 255, 0.4)', // AA compliant
			blue: '0 0 30px rgba(102, 195, 255, 0.8), 0 0 60px rgba(102, 195, 255, 0.4)', // AA compliant
			cyan: '0 0 30px rgba(102, 230, 234, 0.8), 0 0 60px rgba(102, 230, 234, 0.4)',
			green: '0 0 30px rgba(133, 217, 155, 0.8), 0 0 60px rgba(133, 217, 155, 0.4)',
			orange: '0 0 30px rgba(255, 173, 102, 0.8), 0 0 60px rgba(255, 173, 102, 0.4)'
		}
	}
};

// Animation Timings
export const animations = {
	duration: {
		fast: '150ms',
		normal: '300ms',
		slow: '500ms',
		slower: '750ms'
	},
	easing: {
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
		bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
	}
};

// Unified Border Radius System
export const borderRadius = {
	// Base radius scale (used as foundation)
	base: {
		none: '0',
		xs: '0.125rem',  // 2px
		sm: '0.375rem',  // 6px  
		md: '0.5rem',    // 8px
		lg: '0.75rem',   // 12px
		xl: '1rem',      // 16px
		'2xl': '1.5rem', // 24px
		'3xl': '2rem',   // 32px
		'4xl': '2.5rem', // 40px
		full: '9999px'
	},

	// Theme-specific radius scales
	themes: {
		// Terminal theme (sharper, more angular)
		terminal: {
			none: '0',
			xs: '0.125rem',  // 2px
			sm: '0.25rem',   // 4px
			md: '0.375rem',  // 6px
			lg: '0.5rem',    // 8px
			xl: '0.75rem',   // 12px
			'2xl': '1rem',   // 16px
			'3xl': '1.25rem',// 20px
			'4xl': '1.5rem', // 24px
			full: '9999px'
		},
		// Bubble Tea theme (more rounded, modern)
		bubbleTea: {
			none: '0',
			xs: '0.25rem',   // 4px
			sm: '0.5rem',    // 8px
			md: '0.75rem',   // 12px
			lg: '1rem',      // 16px
			xl: '1.5rem',    // 24px
			'2xl': '2rem',   // 32px
			'3xl': '2.5rem', // 40px
			'4xl': '3rem',   // 48px
			full: '9999px'
		}
	},

	// Semantic component radius (automatically themed)
	semantic: {
		// Component-specific radius names
		button: {
			sm: 'var(--radius-sm)',
			md: 'var(--radius-md)',
			lg: 'var(--radius-lg)',
			xl: 'var(--radius-xl)'
		},
		card: {
			sm: 'var(--radius-lg)',
			md: 'var(--radius-xl)',
			lg: 'var(--radius-2xl)',
			xl: 'var(--radius-3xl)'
		},
		modal: {
			sm: 'var(--radius-xl)',
			md: 'var(--radius-2xl)',
			lg: 'var(--radius-3xl)',
			xl: 'var(--radius-4xl)'
		},
		input: {
			sm: 'var(--radius-sm)',
			md: 'var(--radius-md)',
			lg: 'var(--radius-lg)',
			xl: 'var(--radius-xl)'
		},
		avatar: {
			sm: 'var(--radius-sm)',
			md: 'var(--radius-md)',
			lg: 'var(--radius-lg)',
			xl: 'var(--radius-xl)',
			full: 'var(--radius-full)'
		},
		badge: {
			sm: 'var(--radius-sm)',
			md: 'var(--radius-md)',
			lg: 'var(--radius-lg)',
			pill: 'var(--radius-full)'
		}
	}
};

// Component Sizes
export const componentSizes = {
	sm: {
		padding: '0.5rem 1rem',
		fontSize: '0.875rem',
		height: '2rem'
	},
	md: {
		padding: '0.75rem 1.5rem',
		fontSize: '1rem',
		height: '2.5rem'
	},
	lg: {
		padding: '1rem 2rem',
		fontSize: '1.125rem',
		height: '3rem'
	},
	xl: {
		padding: '1.25rem 2.5rem',
		fontSize: '1.25rem',
		height: '3.5rem'
	}
};

// Z-Index Scale
export const zIndex = {
	behind: -1,
	auto: 'auto',
	base: 0,
	docked: 10,
	dropdown: 1000,
	sticky: 1100,
	banner: 1200,
	overlay: 1300,
	modal: 1400,
	popover: 1500,
	skipLink: 1600,
	toast: 1700,
	tooltip: 1800
};

// Theme Objects
export const terminalTheme = {
	colors: {
		primary: brandColors.terminal.green,
		secondary: brandColors.terminal.cyan,
		accent: brandColors.terminal.blue,
		success: brandColors.semantic.success,
		warning: brandColors.semantic.warning,
		error: brandColors.semantic.error,
		info: brandColors.semantic.info
	},
	gradients: brandColors.gradients,
	borderRadius: borderRadius.themes.terminal
};

export const bubbleTeaTheme = {
	colors: {
		primary: brandColors.bubbleTea.primary, // WCAG AA compliant #ff85b3
		secondary: brandColors.bubbleTea.secondary, // WCAG AA compliant #d666ff
		accent: brandColors.bubbleTea.accent, // WCAG AA compliant #66c3ff
		success: brandColors.bubbleTea.success,
		warning: brandColors.bubbleTea.warning,
		error: brandColors.bubbleTea.error, // WCAG AA compliant #ff8585
		info: brandColors.bubbleTea.info
	},
	gradients: brandColors.bubbleTeaGradients,
	borderRadius: borderRadius.themes.bubbleTea
};

// Export combined tokens
export const tokens = {
	colors: brandColors,
	typography,
	spacing,
	effects: glassEffects,
	shadows,
	animations,
	sizes: componentSizes,
	borderRadius,
	zIndex,
	themes: {
		terminal: terminalTheme,
		bubbleTea: bubbleTeaTheme
	}
};

export default tokens;
