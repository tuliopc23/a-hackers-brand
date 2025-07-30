import containerQueries from '@tailwindcss/container-queries';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	theme: {
		screens: {
			xs: '475px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			// Container queries
			'@xs': { 'container-query': '20rem' },
			'@sm': { 'container-query': '24rem' },
			'@md': { 'container-query': '28rem' },
			'@lg': { 'container-query': '32rem' },
			'@xl': { 'container-query': '36rem' },
			'@2xl': { 'container-query': '42rem' },
			// Custom breakpoints for design system
			mobile: '390px',
			tablet: '768px',
			desktop: '1024px',
			wide: '1440px',
			ultrawide: '1920px'
		},
		extend: {
			colors: {
				// Brand colors
				brand: {
					primary: '#007AFF',
					secondary: '#5856D6',
					accent: '#FF3B30',
					neutral: '#8E8E93'
				},
				// Terminal colors for CLI-inspired components
				terminal: {
					bg: '#1D1D1F',
					fg: '#F5F5F7',
					green: '#30D158',
					blue: '#007AFF',
					yellow: '#FFD60A',
					red: '#FF453A',
					purple: '#BF5AF2',
					cyan: '#5AC8FA',
					output: '#007AFF'
				},
				// Apple-inspired liquid glass colors
				glass: {
					// Light mode glass
					light: {
						primary: 'rgba(255, 255, 255, 0.7)',
						secondary: 'rgba(255, 255, 255, 0.5)',
						tertiary: 'rgba(255, 255, 255, 0.3)',
						border: 'rgba(255, 255, 255, 0.2)',
						accent: 'rgba(0, 122, 255, 0.15)'
					},
					// Dark mode glass
					dark: {
						primary: 'rgba(0, 0, 0, 0.8)',
						secondary: 'rgba(0, 0, 0, 0.6)',
						tertiary: 'rgba(0, 0, 0, 0.4)',
						border: 'rgba(255, 255, 255, 0.1)',
						accent: 'rgba(0, 122, 255, 0.2)'
					},
					// Terminal-glass fusion
					terminal: {
						primary: 'rgba(29, 29, 31, 0.9)',
						secondary: 'rgba(29, 29, 31, 0.7)',
						accent: 'rgba(48, 209, 88, 0.15)',
						border: 'rgba(48, 209, 88, 0.3)',
						glow: 'rgba(48, 209, 88, 0.5)'
					}
				},
				// Liquid gradients
				liquid: {
					primary: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
					secondary: 'linear-gradient(135deg, #30D158 0%, #5AC8FA 100%)',
					accent: 'linear-gradient(135deg, #FF3B30 0%, #BF5AF2 100%)',
					terminal: 'linear-gradient(135deg, #1D1D1F 0%, #2D2D2F 100%)',
					glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
				}
			},
			fontFamily: {
				sans: ['PP Supply Sans', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				mono: ['PP Supply Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace']
			},
			spacing: {
				18: '4.5rem',
				88: '22rem',
				128: '32rem'
			},
			borderRadius: {
				brand: '12px',
				'brand-lg': '16px',
				'brand-xl': '20px',
				'brand-2xl': '24px',
				// Liquid glass border radius
				liquid: '24px',
				'liquid-sm': '16px',
				'liquid-lg': '32px',
				'liquid-xl': '40px',
				'liquid-2xl': '48px',
				'liquid-full': '9999px'
			},
			// Backdrop filters for glass morphism
			backdropBlur: {
				glass: '8px',
				'glass-sm': '4px',
				'glass-lg': '16px',
				'glass-xl': '24px',
				'glass-2xl': '40px',
				terminal: '12px'
			},
			// Box shadows for depth and glass effects
			boxShadow: {
				// Glass shadows
				glass: '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'glass-lg':
					'0 16px 64px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.1)',
				'glass-xl':
					'0 24px 96px rgba(0, 0, 0, 0.2), 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 2px 0 rgba(255, 255, 255, 0.1)',
				// Terminal glass shadows
				'terminal-glass':
					'0 8px 32px rgba(48, 209, 88, 0.1), 0 4px 16px rgba(48, 209, 88, 0.05), inset 0 1px 0 rgba(48, 209, 88, 0.2)',
				'terminal-glow':
					'0 0 20px rgba(48, 209, 88, 0.3), 0 0 40px rgba(48, 209, 88, 0.1), inset 0 0 20px rgba(48, 209, 88, 0.05)',
				'terminal-glow-lg':
					'0 0 40px rgba(48, 209, 88, 0.5), 0 0 80px rgba(48, 209, 88, 0.2), inset 0 0 40px rgba(48, 209, 88, 0.1)',
				// Liquid morphism shadows
				liquid: '0 8px 32px rgba(0, 122, 255, 0.1), 0 4px 16px rgba(0, 122, 255, 0.05)',
				'liquid-lg': '0 16px 64px rgba(0, 122, 255, 0.15), 0 8px 32px rgba(0, 122, 255, 0.1)',
				'liquid-glow': '0 0 32px rgba(0, 122, 255, 0.3), 0 0 64px rgba(0, 122, 255, 0.1)'
			},
			animation: {
				// Base animations
				'fade-in': 'fadeIn 0.5s ease-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'brand-float': 'brandFloat 3s ease-in-out infinite',
				shimmer: 'shimmer 3s ease-in-out infinite',
				// Liquid glass animations
				'liquid-glow': 'liquidGlow 4s ease-in-out infinite',
				'liquid-flow': 'liquid-flow 3s ease-in-out infinite',
				'liquid-morph': 'liquid-morph 8s ease-in-out infinite',
				'liquid-breathe': 'liquid-breathe 4s ease-in-out infinite',
				'liquid-shimmer': 'liquid-shimmer 3s ease-in-out infinite',
				'liquid-ripple': 'liquid-ripple 0.6s ease-out',
				'liquid-jelly': 'liquid-jelly-bounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'liquid-wave': 'liquid-wave 2s ease-in-out infinite',
				'liquid-float': 'liquid-float 6s ease-in-out infinite',
				'liquid-distort': 'liquid-distort 4s ease-in-out infinite',
				'liquid-pulse': 'liquid-pulse 2s ease-in-out infinite',
				// Terminal CLI animations
				'terminal-glow': 'terminal-glow-pulse 3s ease-in-out infinite',
				'terminal-type': 'terminal-type 2s steps(40, end)',
				'terminal-cursor': 'terminal-cursor 1s ease-in-out infinite alternate',
				'terminal-scan': 'terminal-scan 0.1s linear infinite',
				'terminal-flicker': 'terminal-flicker 0.15s ease-in-out infinite alternate',
				'terminal-boot': 'terminal-boot 3s ease-out',
				'terminal-matrix': 'terminal-matrix 20s linear infinite',
				// Combined liquid-terminal effects
				'liquid-terminal': 'liquid-terminal 5s ease-in-out infinite',
				'glass-terminal': 'glass-terminal 3s ease-in-out infinite',
				'cyber-glow': 'cyber-glow 2s ease-in-out infinite alternate'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				brandFloat: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				liquidGlow: {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 212, 170, 0.3), 0 0 40px rgba(0, 212, 170, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(0, 212, 170, 0.4), 0 0 60px rgba(0, 212, 170, 0.2)'
					}
				},
				// Liquid Glass Animations
				'liquid-morph': {
					'0%, 100%': {
						borderRadius: '2rem',
						transform: 'scale(1) rotate(0deg)'
					},
					'25%': {
						borderRadius: '2.5rem 1.5rem 2rem 3rem',
						transform: 'scale(1.02) rotate(0.5deg)'
					},
					'50%': {
						borderRadius: '1.5rem 3rem 2.5rem 1.8rem',
						transform: 'scale(1.01) rotate(-0.3deg)'
					},
					'75%': {
						borderRadius: '3rem 2rem 1.5rem 2.5rem',
						transform: 'scale(1.03) rotate(0.2deg)'
					}
				},
				'liquid-breathe': {
					'0%, 100%': {
						filter: 'blur(0px) saturate(1) brightness(1)',
						backdropFilter: 'blur(8px) saturate(180%)'
					},
					'50%': {
						filter: 'blur(0.5px) saturate(1.1) brightness(1.05)',
						backdropFilter: 'blur(12px) saturate(200%)'
					}
				},
				'liquid-shimmer': {
					'0%': {
						backgroundPosition: '-200% center',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						backgroundPosition: '200% center',
						opacity: '0'
					}
				},
				'liquid-ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				},
				'liquid-jelly-bounce': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'terminal-glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 212, 170, 0.3), inset 0 0 20px rgba(0, 212, 170, 0.05)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 212, 170, 0.5), inset 0 0 30px rgba(0, 212, 170, 0.1)'
					}
				},
				// Additional liquid glass keyframes
				'liquid-wave': {
					'0%, 100%': {
						transform: 'scale(1) rotate(0deg)',
						borderRadius: '2rem',
						filter: 'hue-rotate(0deg)'
					},
					'33%': {
						transform: 'scale(1.02) rotate(1deg)',
						borderRadius: '2.5rem 1.5rem',
						filter: 'hue-rotate(60deg)'
					},
					'66%': {
						transform: 'scale(0.98) rotate(-1deg)',
						borderRadius: '1.5rem 2.5rem',
						filter: 'hue-rotate(-60deg)'
					}
				},
				'liquid-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						boxShadow: '0 8px 32px rgba(0, 122, 255, 0.1)'
					},
					'25%': {
						transform: 'translateY(-8px) rotate(1deg)',
						boxShadow: '0 16px 48px rgba(0, 122, 255, 0.15)'
					},
					'50%': {
						transform: 'translateY(-12px) rotate(0deg)',
						boxShadow: '0 20px 64px rgba(0, 122, 255, 0.2)'
					},
					'75%': {
						transform: 'translateY(-8px) rotate(-1deg)',
						boxShadow: '0 16px 48px rgba(0, 122, 255, 0.15)'
					}
				},
				'liquid-distort': {
					'0%, 100%': {
						filter: 'blur(0px) brightness(1) contrast(1)',
						backdropFilter: 'blur(8px) saturate(180%)'
					},
					'25%': {
						filter: 'blur(0.5px) brightness(1.05) contrast(1.1)',
						backdropFilter: 'blur(10px) saturate(200%)'
					},
					'50%': {
						filter: 'blur(1px) brightness(1.1) contrast(1.2)',
						backdropFilter: 'blur(12px) saturate(220%)'
					},
					'75%': {
						filter: 'blur(0.5px) brightness(1.05) contrast(1.1)',
						backdropFilter: 'blur(10px) saturate(200%)'
					}
				},
				'liquid-pulse': {
					'0%, 100%': {
						filter: 'brightness(1) saturate(1)',
						boxShadow: '0 0 20px rgba(0, 122, 255, 0.2)'
					},
					'50%': {
						filter: 'brightness(1.1) saturate(1.2)',
						boxShadow: '0 0 40px rgba(0, 122, 255, 0.4)'
					}
				},
				// Terminal CLI keyframes
				'terminal-type': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'terminal-cursor': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'terminal-scan': {
					'0%': {
						background: 'linear-gradient(90deg, transparent, rgba(48, 209, 88, 0.1), transparent)',
						transform: 'translateX(-100%)'
					},
					'100%': {
						background: 'linear-gradient(90deg, transparent, rgba(48, 209, 88, 0.1), transparent)',
						transform: 'translateX(100%)'
					}
				},
				'terminal-flicker': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0.95' }
				},
				'terminal-boot': {
					'0%': {
						opacity: '0',
						filter: 'blur(2px)',
						transform: 'scale(0.95)'
					},
					'50%': {
						opacity: '0.5',
						filter: 'blur(1px)',
						transform: 'scale(0.98)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0px)',
						transform: 'scale(1)'
					}
				},
				'terminal-matrix': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				// Combined liquid-terminal keyframes
				'liquid-terminal': {
					'0%, 100%': {
						backdropFilter: 'blur(8px) saturate(180%)',
						boxShadow: '0 0 20px rgba(48, 209, 88, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
						borderRadius: '1.5rem'
					},
					'50%': {
						backdropFilter: 'blur(12px) saturate(200%)',
						boxShadow: '0 0 40px rgba(48, 209, 88, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.15)',
						borderRadius: '2rem'
					}
				},
				'glass-terminal': {
					'0%, 100%': {
						filter: 'brightness(1) contrast(1)',
						backgroundColor: 'rgba(29, 29, 31, 0.8)'
					},
					'50%': {
						filter: 'brightness(1.1) contrast(1.1)',
						backgroundColor: 'rgba(29, 29, 31, 0.9)'
					}
				},
				'cyber-glow': {
					'0%': {
						filter: 'hue-rotate(0deg) brightness(1)',
						boxShadow: '0 0 20px rgba(0, 122, 255, 0.5)'
					},
					'100%': {
						filter: 'hue-rotate(360deg) brightness(1.2)',
						boxShadow: '0 0 40px rgba(0, 122, 255, 0.8)'
					}
				}
			}
		}
	},
	plugins: [containerQueries, aspectRatio],
	// Bun-specific optimizations
	future: {
		hoverOnlyWhenSupported: true,
		respectDefaultRingColorOpacity: true
	}
};