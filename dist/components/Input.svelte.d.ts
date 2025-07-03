import type { HTMLInputAttributes } from 'svelte/elements';
interface Props extends HTMLInputAttributes {
    variant?: 'default' | 'glass' | 'terminal';
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
    icon?: any;
    children?: any;
    animate?: boolean;
    class?: string;
}
declare const Input: import("svelte").Component<Props, {}, "">;
type Input = ReturnType<typeof Input>;
export default Input;
