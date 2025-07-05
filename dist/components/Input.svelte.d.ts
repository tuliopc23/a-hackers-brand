import type { HTMLInputAttributes } from 'svelte/elements';
<<<<<<< Updated upstream
interface Props extends HTMLInputAttributes {
    variant?: 'default' | 'glass' | 'terminal' | 'liquid';
=======
interface Props extends Omit<HTMLInputAttributes, 'size'> {
    variant?: 'default' | 'glass' | 'terminal';
>>>>>>> Stashed changes
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
    icon?: any;
    children?: any;
    animate?: boolean;
<<<<<<< Updated upstream
    liquid?: boolean;
    magnetic?: boolean;
    jelly?: boolean;
    glow?: boolean;
=======
    'aria-label'?: string;
>>>>>>> Stashed changes
    class?: string;
}
declare const Input: import("svelte").Component<Props, {}, "">;
type Input = ReturnType<typeof Input>;
export default Input;
