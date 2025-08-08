import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    glass?: boolean;
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    interactive?: boolean;
    animate?: boolean;
    reduceMotion?: boolean;
    class?: string;
    children?: any;
}
declare const Badge: import("svelte").Component<Props, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
//# sourceMappingURL=Badge.svelte.d.ts.map