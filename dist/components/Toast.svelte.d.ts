import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
    variant?: 'default' | 'glass' | 'terminal';
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    duration?: number | null;
    closable?: boolean;
    animate?: boolean;
    reduceMotion?: boolean;
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    class?: string;
    children?: any;
    onOpenChange?: (open: boolean) => void;
}
declare const Toast: import("svelte").Component<Props, {}, "">;
type Toast = ReturnType<typeof Toast>;
export default Toast;
//# sourceMappingURL=Toast.svelte.d.ts.map