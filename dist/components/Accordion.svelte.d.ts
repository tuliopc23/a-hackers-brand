import type { HTMLAttributes } from 'svelte/elements';
interface AccordionItem {
    id: string;
    title: string;
    content?: any;
    disabled?: boolean;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
    items: AccordionItem[];
    multiple?: boolean;
    collapsible?: boolean;
    variant?: 'default' | 'glass' | 'terminal';
    size?: 'sm' | 'md' | 'lg';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    animate?: boolean;
    reduceMotion?: boolean;
    defaultOpen?: string[];
    class?: string;
    children?: any;
    onValueChange?: (openItems: string[]) => void;
}
declare const Accordion: import("svelte").Component<Props, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
