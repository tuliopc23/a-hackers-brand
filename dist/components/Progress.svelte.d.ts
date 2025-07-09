import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
	value?: number;
	max?: number;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'default' | 'glass' | 'terminal';
	type?: 'linear' | 'circular';
	blur?: 'sm' | 'md' | 'lg' | 'xl';
	showValue?: boolean;
	showPercentage?: boolean;
	indeterminate?: boolean;
	animate?: boolean;
	reduceMotion?: boolean;
	label?: string;
	class?: string;
}
declare const Progress: import('svelte').Component<Props, {}, ''>;
type Progress = ReturnType<typeof Progress>;
export default Progress;
