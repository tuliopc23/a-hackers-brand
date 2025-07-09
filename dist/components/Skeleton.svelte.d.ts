import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
	variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
	type?: 'text' | 'avatar' | 'card' | 'button' | 'image' | 'paragraph';
	lines?: number;
	animated?: boolean;
	glow?: boolean;
	speed?: 'slow' | 'normal' | 'fast';
	class?: string;
	width?: string;
	height?: string;
	rounded?: boolean;
}
declare const Skeleton: import('svelte').Component<Props, {}, ''>;
type Skeleton = ReturnType<typeof Skeleton>;
export default Skeleton;
