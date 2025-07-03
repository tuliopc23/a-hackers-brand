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
    variant?: 'default' | 'glass' | 'terminal';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    animate?: boolean;
    reduceMotion?: boolean;
    class?: string;
    onValueChange?: (value: string) => void;
}
declare const Select: import("svelte").Component<Props, {}, "">;
type Select = ReturnType<typeof Select>;
export default Select;
