interface Props {
    class?: string;
    width?: number;
    height?: number;
    scene?: 'glass' | 'terminal' | 'default';
    enable3D?: boolean;
    quality?: 'low' | 'medium' | 'high';
    autoRotate?: boolean;
}
declare const LazyThrelteCanvas: import("svelte").Component<Props, {}, "">;
type LazyThrelteCanvas = ReturnType<typeof LazyThrelteCanvas>;
export default LazyThrelteCanvas;
