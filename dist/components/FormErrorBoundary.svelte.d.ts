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
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const FormErrorBoundary: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<Props, {
    default: {
        errors: ValidationError[];
        hasErrors: boolean;
    };
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        errors: ValidationError[];
        hasErrors: boolean;
    };
}, {}, "">;
type FormErrorBoundary = InstanceType<typeof FormErrorBoundary>;
export default FormErrorBoundary;
