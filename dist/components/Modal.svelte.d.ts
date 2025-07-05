import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    animate?: boolean;
    jelly?: boolean;
    glow?: boolean;
    breathing?: boolean;
    reduceMotion?: boolean;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    class?: string;
    children?: any;
    onClose?: () => void;
}
declare const Modal: import("svelte").Component<Props, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
