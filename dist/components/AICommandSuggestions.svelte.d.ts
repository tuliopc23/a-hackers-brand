interface CommandSuggestion {
    id: string;
    command: string;
    description: string;
    category: 'system' | 'development' | 'network' | 'file' | 'process' | 'ai';
    confidence: number;
    usage: string;
    parameters?: string[];
    examples?: string[];
}
interface Props {
    query: string;
    suggestions?: CommandSuggestion[];
    maxSuggestions?: number;
    showConfidence?: boolean;
    showCategories?: boolean;
    theme?: 'terminal' | 'cyberpunk' | 'neural';
    aiMode?: boolean;
    class?: string;
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
declare const AiCommandSuggestions: $$__sveltets_2_IsomorphicComponent<Props, {
    select: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type AiCommandSuggestions = InstanceType<typeof AiCommandSuggestions>;
export default AiCommandSuggestions;
//# sourceMappingURL=AICommandSuggestions.svelte.d.ts.map