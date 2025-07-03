import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'glass-subtle' | 'glass-heavy' | 'terminal';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    interactive?: boolean;
    animate?: boolean;
    class?: string;
    children?: any;
}
declare const Card: import("svelte").Component<Props, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
