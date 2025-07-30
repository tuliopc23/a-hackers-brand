interface Props {
    fallback?: any;
    onError?: (error: Error, errorInfo?: any) => void;
    showDetails?: boolean;
    variant?: 'glass' | 'terminal' | 'minimal';
    animate?: boolean;
    retryable?: boolean;
    class?: string;
    children?: any;
}
declare const ErrorBoundary: import("svelte").Component<Props, {}, "">;
type ErrorBoundary = ReturnType<typeof ErrorBoundary>;
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.svelte.d.ts.map