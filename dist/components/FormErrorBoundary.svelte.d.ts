interface ValidationError {
    field: string;
    message: string;
    code?: string;
}
interface Props {
    errors?: ValidationError[];
    showSummary?: boolean;
    variant?: 'glass' | 'terminal' | 'minimal';
    animate?: boolean;
    dismissible?: boolean;
    onDismiss?: () => void;
    class?: string;
    children?: any;
}
declare const FormErrorBoundary: import("svelte").Component<Props, {}, "">;
type FormErrorBoundary = ReturnType<typeof FormErrorBoundary>;
export default FormErrorBoundary;
//# sourceMappingURL=FormErrorBoundary.svelte.d.ts.map