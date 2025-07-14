import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLElement> {
	currentPage?: number;
	totalPages: number;
	siblingCount?: number;
	variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
	size?: 'sm' | 'md' | 'lg';
	animated?: boolean;
	glow?: boolean;
	jelly?: boolean;
	showFirstLast?: boolean;
	class?: string;
	onchange?: (page: number) => void;
}
declare const Pagination: import('svelte').Component<Props, {}, 'currentPage'>;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
