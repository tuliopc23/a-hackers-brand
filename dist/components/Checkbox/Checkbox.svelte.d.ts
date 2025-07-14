import type { HTMLAttributes } from 'svelte/elements';
interface Props extends Omit<HTMLAttributes<HTMLInputElement>, 'checked' | 'size'> {
	checked?: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'default' | 'glass' | 'terminal';
	blur?: 'sm' | 'md' | 'lg' | 'xl';
	animate?: boolean;
	reduceMotion?: boolean;
	label?: string;
	'aria-label'?: string;
	description?: string;
	error?: string;
	required?: boolean;
	class?: string;
	onCheckedChange?: (checked: boolean | 'indeterminate') => void;
}
declare const Checkbox: import('svelte').Component<Props, {}, ''>;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
