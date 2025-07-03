import type { HTMLButtonAttributes } from 'svelte/elements';
interface Props extends HTMLButtonAttributes {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-dark';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    icon?: boolean;
    animate?: boolean;
    class?: string;
    children?: any;
}
declare const Button: import("svelte").Component<Props, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
