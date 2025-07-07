import type { HTMLButtonAttributes } from 'svelte/elements';
interface Props extends HTMLButtonAttributes {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-dark' | 'terminal' | 'liquid';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    icon?: boolean;
    animate?: boolean;
    jelly?: boolean;
    liquid?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    class?: string;
    children?: any;
}
declare const Button: import("svelte").Component<Props, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
