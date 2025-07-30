import type { Snippet } from 'svelte';
interface Props {
    variant?: 'default' | 'elevated' | 'outlined' | 'pressed';
    hover?: boolean;
    bordered?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    class?: string;
    children?: Snippet;
}
declare const GlassCard: import("svelte").Component<Props, {}, "">;
type GlassCard = ReturnType<typeof GlassCard>;
export default GlassCard;
//# sourceMappingURL=GlassCard.svelte.d.ts.map