import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    variant?: 'default' | 'glass' | 'terminal';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
    animate?: boolean;
    reduceMotion?: boolean;
    class?: string;
    children?: any;
    onClose?: () => void;
}
declare const Modal: import("svelte").Component<Props, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
