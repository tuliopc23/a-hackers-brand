import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'glass-subtle' | 'glass-heavy' | 'terminal' | 'liquid' | 'jelly';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    interactive?: boolean;
    animate?: boolean;
    jelly?: boolean;
    liquid?: boolean;
    breathing?: boolean;
    class?: string;
    children?: any;
}
declare const Card: import("svelte").Component<Props, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
//# sourceMappingURL=Card.svelte.d.ts.map