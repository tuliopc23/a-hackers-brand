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
declare const CodeBlock: $$__sveltets_2_IsomorphicComponent<{
    language?: string;
    code?: string;
    title?: string;
    showCopy?: boolean;
    showLineNumbers?: boolean;
    maxHeight?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type CodeBlock = InstanceType<typeof CodeBlock>;
export default CodeBlock;
