import type { HTMLInputAttributes } from 'svelte/elements';
interface RadioOption {
	value: string;
	label: string;
	disabled?: boolean;
	description?: string;
}
interface Props extends Omit<HTMLInputAttributes, 'type' | 'value'> {
	options: RadioOption[];
	value?: string;
	name: string;
	variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
	size?: 'sm' | 'md' | 'lg';
	orientation?: 'horizontal' | 'vertical';
	animated?: boolean;
	glow?: boolean;
	jelly?: boolean;
	error?: string;
	class?: string;
	onchange?: (value: string) => void;
}
declare const Radio: import('svelte').Component<Props, {}, 'value'>;
type Radio = ReturnType<typeof Radio>;
export default Radio;
