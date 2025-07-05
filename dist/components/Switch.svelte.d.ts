import type { HTMLAttributes } from 'svelte/elements';
interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'value'> {
    checked?: boolean;
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
    description?: string;
    class?: string;
    onCheckedChange?: (checked: boolean) => void;
}
declare const Switch: import("svelte").Component<Props, {}, "">;
type Switch = ReturnType<typeof Switch>;
export default Switch;
