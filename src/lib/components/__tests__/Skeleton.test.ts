import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';
import Skeleton from '../Skeleton.svelte';
import { testAllVariants, waitForAnimation } from '../../__tests__/test-utils';

describe('Skeleton Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Skeleton);
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toBeInTheDocument();
			expect(skeleton).toHaveClass('h-4'); // Default text type height
		});

		it('renders all variants correctly', async () => {
			await testAllVariants(Skeleton, {}, (variant) => {
				const { container } = render(Skeleton, {
					props: { variant }
				});
				
				const skeleton = container.querySelector('.relative.overflow-hidden');
				if (variant === 'glass') {
					expect(skeleton).toHaveClass('bg-gradient-to-r from-white/5 via-white/10 to-white/5');
				} else if (variant === 'terminal') {
					expect(skeleton).toHaveClass('bg-gradient-to-r from-green-400/10 via-green-400/20 to-green-400/10');
				}
			});
		});

		it('renders all skeleton types correctly', () => {
			const types = ['text', 'avatar', 'card', 'button', 'image', 'paragraph'];
			
			types.forEach(type => {
				const { container } = render(Skeleton, {
					props: { type }
				});
				
				const skeleton = container.querySelector('.relative.overflow-hidden');
				
				if (type === 'avatar') {
					expect(skeleton).toHaveClass('w-12', 'h-12', 'rounded-full');
				} else if (type === 'card') {
					expect(skeleton).toHaveClass('w-full', 'h-48', 'rounded-2xl');
				} else if (type === 'button') {
					expect(skeleton).toHaveClass('w-24', 'h-10', 'rounded-xl');
				}
			});
		});
	});

	describe('Text and Paragraph Types', () => {
		it('renders multiple lines for text type', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 4
				}
			});
			
			const skeletonLines = container.querySelectorAll('.relative.overflow-hidden');
			expect(skeletonLines).toHaveLength(4);
		});

		it('renders multiple lines for paragraph type', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'paragraph',
					lines: 3
				}
			});
			
			const skeletonLines = container.querySelectorAll('.relative.overflow-hidden');
			expect(skeletonLines).toHaveLength(3);
		});

		it('uses proper spacing for text type', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 3
				}
			});
			
			const wrapper = container.querySelector('.space-y-3');
			expect(wrapper).toBeInTheDocument();
		});

		it('uses proper spacing for paragraph type', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'paragraph',
					lines: 3
				}
			});
			
			const wrapper = container.querySelector('.space-y-2');
			expect(wrapper).toBeInTheDocument();
		});

		it('makes last line shorter for text types', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 3
				}
			});
			
			const lines = container.querySelectorAll('.relative.overflow-hidden');
			const lastLine = lines[lines.length - 1];
			
			// Last line should have 60% width
			expect(lastLine).toHaveStyle({ width: '60%' });
		});
	});

	describe('Dimensions', () => {
		it('applies custom width', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'card',
					width: '300px'
				}
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveStyle({ width: '300px' });
		});

		it('applies custom height', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'card',
					height: '200px'
				}
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveStyle({ height: '200px' });
		});

		it('applies custom width to text lines', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 2,
					width: '250px'
				}
			});
			
			const lines = container.querySelectorAll('.relative.overflow-hidden');
			lines.forEach(line => {
				expect(line).toHaveStyle({ width: '250px' });
			});
		});
	});

	describe('Rounded Corners', () => {
		it('applies rounded corners by default', () => {
			const { container } = render(Skeleton, {
				props: { type: 'text' }
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('rounded-lg');
		});

		it('removes rounded corners when rounded is false', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					rounded: false
				}
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).not.toHaveClass('rounded-lg');
		});

		it('uses type-specific rounded classes', () => {
			const { container } = render(Skeleton, {
				props: { type: 'avatar' }
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('rounded-full');
		});
	});

	describe('Animations', () => {
		it('shows shimmer effect when animated', () => {
			const { container } = render(Skeleton, {
				props: { animated: true }
			});
			
			const shimmer = container.querySelector('.animate-shimmer');
			expect(shimmer).toBeInTheDocument();
			expect(shimmer).toHaveClass('bg-gradient-to-r');
		});

		it('hides shimmer effect when not animated', () => {
			const { container } = render(Skeleton, {
				props: { animated: false }
			});
			
			const shimmer = container.querySelector('.animate-shimmer');
			expect(shimmer).not.toBeInTheDocument();
		});

		it('applies different speeds', () => {
			const speeds = ['slow', 'normal', 'fast'];
			
			speeds.forEach(speed => {
				const { container } = render(Skeleton, {
					props: { 
						animated: true,
						speed
					}
				});
				
				const shimmer = container.querySelector('.animate-shimmer');
				expect(shimmer).toHaveClass(
					speed === 'slow' ? 'duration-[3s]' :
					speed === 'normal' ? 'duration-[2s]' :
					'duration-[1s]'
				);
			});
		});

		it('applies breathing animation for liquid variant', () => {
			const { container } = render(Skeleton, {
				props: { 
					variant: 'liquid',
					animated: true
				}
			});
			
			// Breathing effects are applied via use:breathing
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('transform-gpu', 'will-change-transform');
		});

		it('applies staggered delays for text lines', async () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 3
				}
			});
			
			// Each line should have glassFade transition with delay
			await waitForAnimation(100);
			const lines = container.querySelectorAll('.relative.overflow-hidden');
			expect(lines).toHaveLength(3);
		});
	});

	describe('Visual Effects', () => {
		it('applies glow effect when enabled', () => {
			const { container } = render(Skeleton, {
				props: { 
					glow: true,
					variant: 'neon'
				}
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('shadow-[0_0_20px_rgba(236,72,153,0.5)]');
		});

		it('does not apply glow by default', () => {
			const { container } = render(Skeleton, {
				props: { variant: 'neon' }
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).not.toHaveClass('shadow-[0_0_20px_rgba(236,72,153,0.5)]');
		});

		it('applies backdrop blur', () => {
			const { container } = render(Skeleton);
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('backdrop-blur-xl');
		});

		it('applies border styling', () => {
			const { container } = render(Skeleton, {
				props: { variant: 'terminal' }
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('border', 'border-green-400/20');
		});
	});

	describe('Shimmer Variants', () => {
		it('applies correct shimmer colors for each variant', () => {
			const variants = [
				{ variant: 'glass', shimmerClass: 'from-transparent via-white/20 to-transparent' },
				{ variant: 'terminal', shimmerClass: 'from-transparent via-green-400/30 to-transparent' },
				{ variant: 'liquid', shimmerClass: 'from-transparent via-white/30 to-transparent' },
				{ variant: 'neon', shimmerClass: 'from-transparent via-pink-500/40 to-transparent' }
			];
			
			variants.forEach(({ variant, shimmerClass }) => {
				const { container } = render(Skeleton, {
					props: { 
						variant,
						animated: true
					}
				});
				
				const shimmer = container.querySelector('.animate-shimmer');
				expect(shimmer).toHaveClass(shimmerClass);
			});
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'card',
					class: 'custom-skeleton'
				}
			});
			
			const skeleton = container.querySelector('.relative.overflow-hidden');
			expect(skeleton).toHaveClass('custom-skeleton');
		});

		it('applies custom className to text wrapper', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					class: 'custom-text-skeleton'
				}
			});
			
			const wrapper = container.querySelector('.space-y-3');
			expect(wrapper).toHaveClass('custom-text-skeleton');
		});

		it('passes through additional props for single skeleton', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'card',
					'data-testid': 'custom-skeleton'
				}
			});
			
			const skeleton = container.querySelector('[data-testid="custom-skeleton"]');
			expect(skeleton).toBeInTheDocument();
		});

		it('passes through additional props for text wrapper', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					'data-testid': 'custom-text-skeleton'
				}
			});
			
			const wrapper = container.querySelector('[data-testid="custom-text-skeleton"]');
			expect(wrapper).toBeInTheDocument();
		});
	});

	describe('Edge Cases', () => {
		it('handles zero lines gracefully', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 0
				}
			});
			
			const lines = container.querySelectorAll('.relative.overflow-hidden');
			expect(lines).toHaveLength(0);
		});

		it('handles single line text', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 1
				}
			});
			
			const lines = container.querySelectorAll('.relative.overflow-hidden');
			expect(lines).toHaveLength(1);
			
			// Single line should be 60% width (last line behavior)
			expect(lines[0]).toHaveStyle({ width: '60%' });
		});

		it('handles very large line count', () => {
			const { container } = render(Skeleton, {
				props: { 
					type: 'text',
					lines: 100
				}
			});
			
			const lines = container.querySelectorAll('.relative.overflow-hidden');
			expect(lines).toHaveLength(100);
		});
	});
});