import type { HTMLAttributes } from 'svelte/elements';
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'default' | 'glass' | 'terminal';
	blur?: 'sm' | 'md' | 'lg' | 'xl';
	showValue?: boolean;
	showMarks?: boolean;
	marks?: number[];
	animate?: boolean;
	reduceMotion?: boolean;
	label?: string;
	class?: string;
	onValueChange?: (value: number) => void;
}
declare const Slider: import('svelte').Component<Props, {}, ''>;
type Slider = ReturnType<typeof Slider>;
export default Slider;
