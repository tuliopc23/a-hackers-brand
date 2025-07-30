import type { HTMLTextareaAttributes } from 'svelte/elements';
interface Props extends HTMLTextareaAttributes {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'glass' | 'terminal';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    rows?: number;
    cols?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    autoResize?: boolean;
    maxHeight?: number;
    minHeight?: number;
    animate?: boolean;
    reduceMotion?: boolean;
    class?: string;
    onValueChange?: (value: string) => void;
}
declare const Textarea: import("svelte").Component<Props, {}, "">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
//# sourceMappingURL=Textarea.svelte.d.ts.map