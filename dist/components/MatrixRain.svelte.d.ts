import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLCanvasElement> {
	variant?: 'classic' | 'hacker' | 'cyber' | 'liquid';
	speed?: 'slow' | 'normal' | 'fast';
	density?: 'low' | 'medium' | 'high';
	characters?: 'matrix' | 'binary' | 'hex' | 'code';
	glowEffect?: boolean;
	fadeEffect?: boolean;
	class?: string;
}
declare const MatrixRain: import('svelte').Component<Props, {}, ''>;
type MatrixRain = ReturnType<typeof MatrixRain>;
export default MatrixRain;
