/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	theme: {
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
				// Glass UI integration
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				}
			},
			fontFamily: {
				sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace']
			},
			fontSize: {
				'display-large': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
				'heading-2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'heading-3': ['1.5rem', { lineHeight: '1.4' }],
				'body-large': ['1.125rem', { lineHeight: '1.6' }],
				body: ['1rem', { lineHeight: '1.6' }],
				'body-small': ['0.875rem', { lineHeight: '1.5' }],
				caption: ['0.75rem', { lineHeight: '1.4' }]
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
				'brand-2xl': '24px'
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'brand-float': 'brandFloat 3s ease-in-out infinite',
				shimmer: 'shimmer 3s ease-in-out infinite',
				'liquid-glow': 'liquidGlow 4s ease-in-out infinite',
				'liquid-flow': 'liquid-flow 3s ease-in-out infinite'
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
				}
			}
		}
	},
	plugins: []
};
