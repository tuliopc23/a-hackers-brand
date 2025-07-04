interface Props {
    section?: 'overview' | 'colors' | 'typography' | 'components' | 'effects' | 'interactive';
    interactive?: boolean;
    class?: string;
}
declare const BrandStyleguide: import("svelte").Component<Props, {}, "">;
type BrandStyleguide = ReturnType<typeof BrandStyleguide>;
export default BrandStyleguide;
