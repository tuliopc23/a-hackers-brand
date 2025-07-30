interface Props {
    command: string;
    output?: string;
    status?: 'idle' | 'running' | 'success' | 'error' | 'warning';
    showPrompt?: boolean;
    showTimestamp?: boolean;
    interactive?: boolean;
    theme?: 'terminal' | 'cyberpunk' | 'matrix' | 'neural';
    enableGlitch?: boolean;
    enableSound?: boolean;
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
declare const CommandBlock: $$__sveltets_2_IsomorphicComponent<Props, {
    execute: CustomEvent<any>;
    copy: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type CommandBlock = InstanceType<typeof CommandBlock>;
export default CommandBlock;
//# sourceMappingURL=CommandBlock.svelte.d.ts.map