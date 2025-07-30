import type { HTMLAttributes } from 'svelte/elements';
interface DropdownItem {
    label: string;
    value: string;
    icon?: any;
    disabled?: boolean;
    divider?: boolean;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
    items: DropdownItem[];
    trigger?: string;
    value?: string;
    variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
    size?: 'sm' | 'md' | 'lg';
    position?: 'bottom' | 'top' | 'left' | 'right';
    animated?: boolean;
    glow?: boolean;
    jelly?: boolean;
    class?: string;
    triggerClass?: string;
    menuClass?: string;
    onselect?: (value: string) => void;
}
declare const Dropdown: import("svelte").Component<Props, {}, "">;
type Dropdown = ReturnType<typeof Dropdown>;
export default Dropdown;
//# sourceMappingURL=Dropdown.svelte.d.ts.map