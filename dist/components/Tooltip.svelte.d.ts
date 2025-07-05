import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    variant?: 'glass' | 'terminal' | 'liquid' | 'dark';
    delay?: number;
    offset?: number;
    arrow?: boolean;
    animated?: boolean;
    class?: string;
    children?: any;
}
declare const Tooltip: import("svelte").Component<Props, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
