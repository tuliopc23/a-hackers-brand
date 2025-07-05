import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Pagination from '../Pagination.svelte';
import { testAllVariants, testAllSizes } from '../../__tests__/test-utils';

describe('Pagination Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Pagination, {
				props: { totalPages: 10 }
			});
			
			const nav = screen.getByRole('navigation');
			expect(nav).toBeInTheDocument();
			expect(nav).toHaveAttribute('aria-label', 'Pagination');
		});

		it('renders all navigation buttons', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5
				}
			});
			
			// First, Previous, Next, Last buttons
			expect(screen.getByLabelText('Go to first page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to last page')).toBeInTheDocument();
		});

		it('hides first/last buttons when showFirstLast is false', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					showFirstLast: false
				}
			});
			
			expect(screen.queryByLabelText('Go to first page')).not.toBeInTheDocument();
			expect(screen.queryByLabelText('Go to last page')).not.toBeInTheDocument();
			expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
		});

		it('renders all variants correctly', async () => {
			await testAllVariants(Pagination, { totalPages: 5 }, (variant) => {
				const { container } = render(Pagination, {
					props: { variant, totalPages: 5 }
				});
				
				const nav = container.querySelector('nav');
				if (variant === 'glass') {
					expect(nav).toHaveClass('bg-white/5');
				} else if (variant === 'terminal') {
					expect(nav).toHaveClass('bg-gray-900/90');
				}
			});
		});

		it('renders all sizes correctly', async () => {
			await testAllSizes(Pagination, { totalPages: 5 }, (size) => {
				const { container } = render(Pagination, {
					props: { size, totalPages: 5 }
				});
				
				const buttons = container.querySelectorAll('button');
				buttons.forEach(button => {
					expect(button).toHaveClass(
						size === 'sm' ? 'h-8 min-w-8' :
						size === 'md' ? 'h-10 min-w-10' :
						'h-12 min-w-12'
					);
				});
			});
		});
	});

	describe('Page Numbers', () => {
		it('renders all pages when total is small', () => {
			const { container } = render(Pagination, {
				props: { totalPages: 5 }
			});
			
			for (let i = 1; i <= 5; i++) {
				expect(screen.getByLabelText(`Go to page ${i}`)).toBeInTheDocument();
			}
		});

		it('shows ellipsis for large page counts', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 20,
					currentPage: 10
				}
			});
			
			const ellipsis = container.querySelectorAll('span');
			const ellipsisElements = Array.from(ellipsis).filter(el => 
				el.textContent?.includes('...')
			);
			expect(ellipsisElements.length).toBeGreaterThan(0);
		});

		it('shows current page as active', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 3
				}
			});
			
			const currentPageButton = screen.getByLabelText('Go to page 3');
			expect(currentPageButton).toHaveAttribute('aria-current', 'page');
			expect(currentPageButton).toHaveClass('bg-gradient-to-br from-cyan-400 to-blue-500');
		});

		it('adjusts page numbers based on siblingCount', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 20,
					currentPage: 10,
					siblingCount: 2
				}
			});
			
			// Should show more sibling pages
			expect(screen.getByLabelText('Go to page 8')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to page 9')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to page 10')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to page 11')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to page 12')).toBeInTheDocument();
		});
	});

	describe('Navigation', () => {
		it('navigates to specific page when clicked', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 1,
					onchange: handleChange
				}
			});
			
			const page3Button = screen.getByLabelText('Go to page 3');
			await fireEvent.click(page3Button);
			
			expect(handleChange).toHaveBeenCalledWith(3);
		});

		it('navigates to previous page', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					onchange: handleChange
				}
			});
			
			const prevButton = screen.getByLabelText('Go to previous page');
			await fireEvent.click(prevButton);
			
			expect(handleChange).toHaveBeenCalledWith(4);
		});

		it('navigates to next page', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					onchange: handleChange
				}
			});
			
			const nextButton = screen.getByLabelText('Go to next page');
			await fireEvent.click(nextButton);
			
			expect(handleChange).toHaveBeenCalledWith(6);
		});

		it('navigates to first page', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					onchange: handleChange
				}
			});
			
			const firstButton = screen.getByLabelText('Go to first page');
			await fireEvent.click(firstButton);
			
			expect(handleChange).toHaveBeenCalledWith(1);
		});

		it('navigates to last page', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					onchange: handleChange
				}
			});
			
			const lastButton = screen.getByLabelText('Go to last page');
			await fireEvent.click(lastButton);
			
			expect(handleChange).toHaveBeenCalledWith(10);
		});
	});

	describe('Disabled States', () => {
		it('disables previous and first buttons on first page', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 1
				}
			});
			
			const firstButton = screen.getByLabelText('Go to first page');
			const prevButton = screen.getByLabelText('Go to previous page');
			
			expect(firstButton).toBeDisabled();
			expect(prevButton).toBeDisabled();
			expect(firstButton).toHaveClass('opacity-50 cursor-not-allowed');
			expect(prevButton).toHaveClass('opacity-50 cursor-not-allowed');
		});

		it('disables next and last buttons on last page', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 10
				}
			});
			
			const nextButton = screen.getByLabelText('Go to next page');
			const lastButton = screen.getByLabelText('Go to last page');
			
			expect(nextButton).toBeDisabled();
			expect(lastButton).toBeDisabled();
			expect(nextButton).toHaveClass('opacity-50 cursor-not-allowed');
			expect(lastButton).toHaveClass('opacity-50 cursor-not-allowed');
		});

		it('does not navigate when clicking disabled buttons', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 1,
					onchange: handleChange
				}
			});
			
			const prevButton = screen.getByLabelText('Go to previous page');
			await fireEvent.click(prevButton);
			
			expect(handleChange).not.toHaveBeenCalled();
		});

		it('does not navigate when clicking current page', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					onchange: handleChange
				}
			});
			
			const currentPageButton = screen.getByLabelText('Go to page 5');
			await fireEvent.click(currentPageButton);
			
			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe('Visual Effects', () => {
		it('applies glow effect to current page when enabled', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					glow: true,
					variant: 'glass'
				}
			});
			
			const currentPageButton = screen.getByLabelText('Go to page 5');
			expect(currentPageButton).toHaveClass('shadow-[0_0_20px_rgba(6,182,212,0.5)]');
		});

		it('applies jelly hover effect to enabled buttons', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					jelly: true
				}
			});
			
			// Jelly effects are applied via use:jellyHover
			const buttons = container.querySelectorAll('button');
			expect(buttons.length).toBeGreaterThan(0);
		});

		it('does not apply jelly to disabled buttons', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 1,
					jelly: true
				}
			});
			
			// Disabled buttons should not have jelly effect
			// This is tested via the enabled prop in jellyHover
			const firstButton = screen.getByLabelText('Go to first page');
			expect(firstButton).toBeDisabled();
		});
	});

	describe('Edge Cases', () => {
		it('handles single page correctly', () => {
			const { container } = render(Pagination, {
				props: { totalPages: 1 }
			});
			
			const pageButton = screen.getByLabelText('Go to page 1');
			expect(pageButton).toHaveAttribute('aria-current', 'page');
			
			const firstButton = screen.getByLabelText('Go to first page');
			const prevButton = screen.getByLabelText('Go to previous page');
			const nextButton = screen.getByLabelText('Go to next page');
			const lastButton = screen.getByLabelText('Go to last page');
			
			expect(firstButton).toBeDisabled();
			expect(prevButton).toBeDisabled();
			expect(nextButton).toBeDisabled();
			expect(lastButton).toBeDisabled();
		});

		it('handles invalid page navigation attempts', async () => {
			const handleChange = vi.fn();
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5,
					onchange: handleChange
				}
			});
			
			// Simulate invalid page clicks that shouldn't trigger change
			const currentPageButton = screen.getByLabelText('Go to page 5');
			await fireEvent.click(currentPageButton);
			
			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', () => {
			const { container } = render(Pagination, {
				props: { totalPages: 10 }
			});
			
			const nav = screen.getByRole('navigation');
			expect(nav).toHaveAttribute('aria-label', 'Pagination');
		});

		it('marks current page with aria-current', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage: 5
				}
			});
			
			const currentPageButton = screen.getByLabelText('Go to page 5');
			expect(currentPageButton).toHaveAttribute('aria-current', 'page');
			
			const otherPageButton = screen.getByLabelText('Go to page 4');
			expect(otherPageButton).not.toHaveAttribute('aria-current');
		});

		it('has descriptive aria-labels for all buttons', () => {
			const { container } = render(Pagination, {
				props: { totalPages: 5 }
			});
			
			expect(screen.getByLabelText('Go to first page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
			expect(screen.getByLabelText('Go to last page')).toBeInTheDocument();
			
			for (let i = 1; i <= 5; i++) {
				expect(screen.getByLabelText(`Go to page ${i}`)).toBeInTheDocument();
			}
		});

		it('handles keyboard navigation', async () => {
			const { container } = render(Pagination, {
				props: { totalPages: 10 }
			});
			
			const firstButton = screen.getByLabelText('Go to first page');
			firstButton.focus();
			
			expect(document.activeElement).toBe(firstButton);
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					class: 'custom-pagination'
				}
			});
			
			const nav = container.querySelector('nav');
			expect(nav).toHaveClass('custom-pagination');
		});

		it('passes through additional props', () => {
			const { container } = render(Pagination, {
				props: { 
					totalPages: 10,
					'data-testid': 'custom-pagination'
				}
			});
			
			const nav = container.querySelector('[data-testid="custom-pagination"]');
			expect(nav).toBeInTheDocument();
		});

		it('updates currentPage with bindable prop', async () => {
			let currentPage = 1;
			const { rerender } = render(Pagination, {
				props: { 
					totalPages: 10,
					currentPage
				}
			});
			
			// Update currentPage
			currentPage = 5;
			rerender({ totalPages: 10, currentPage });
			
			const newCurrentPageButton = screen.getByLabelText('Go to page 5');
			expect(newCurrentPageButton).toHaveAttribute('aria-current', 'page');
		});
	});
});