import type { HTMLInputAttributes } from 'svelte/elements';
interface Props extends Omit<HTMLInputAttributes, 'size'> {
    variant?: 'default' | 'glass' | 'terminal' | 'liquid';
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
    icon?: any;
    children?: any;
    animate?: boolean;
    liquid?: boolean;
    magnetic?: boolean;
    jelly?: boolean;
    glow?: boolean;
    'aria-label'?: string;
    class?: string;
}
declare const Input: import("svelte").Component<Props, {}, "">;
type Input = ReturnType<typeof Input>;
export default Input;
