import type { HTMLAttributes } from 'svelte/elements';
interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
    options: Option[];
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'glass' | 'terminal' | 'liquid';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    animate?: boolean;
    liquid?: boolean;
    magnetic?: boolean;
    jelly?: boolean;
    glow?: boolean;
    reduceMotion?: boolean;
    label?: string;
    'aria-label'?: string;
    class?: string;
    onValueChange?: (value: string) => void;
}
declare const Select: import("svelte").Component<Props, {}, "">;
type Select = ReturnType<typeof Select>;
export default Select;
//# sourceMappingURL=Select.svelte.d.ts.map