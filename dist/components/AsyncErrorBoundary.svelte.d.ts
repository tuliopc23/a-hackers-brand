interface Props {
    promise?: Promise<any>;
    fallback?: any;
    loading?: any;
    onError?: (error: Error) => void;
    onRetry?: () => Promise<any>;
    variant?: 'glass' | 'terminal' | 'minimal';
    animate?: boolean;
    timeout?: number;
    maxRetries?: number;
    class?: string;
    children?: any;
}
declare const AsyncErrorBoundary: import("svelte").Component<Props, {}, "">;
type AsyncErrorBoundary = ReturnType<typeof AsyncErrorBoundary>;
export default AsyncErrorBoundary;
//# sourceMappingURL=AsyncErrorBoundary.svelte.d.ts.map