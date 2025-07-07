import containerQueries from '@tailwindcss/container-queries';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	theme: {
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			// Container queries
			'@xs': { 'container-query': '20rem' },
			'@sm': { 'container-query': '24rem' },
			'@md': { 'container-query': '28rem' },
			'@lg': { 'container-query': '32rem' },
			'@xl': { 'container-query': '36rem' },
			'@2xl': { 'container-query': '42rem' },
			// Custom breakpoints for design system
			'mobile': '390px',
			'tablet': '768px',
			'desktop': '1024px',
			'wide': '1440px',
			'ultrawide': '1920px'
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
	plugins: [
		containerQueries,
		aspectRatio
	]
};
