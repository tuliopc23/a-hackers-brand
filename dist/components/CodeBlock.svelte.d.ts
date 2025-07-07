interface Props {
    language?: string;
    code?: string;
    title?: string;
    showCopy?: boolean;
    showLineNumbers?: boolean;
    maxHeight?: string;
}
declare const CodeBlock: import("svelte").Component<Props, {}, "">;
type CodeBlock = ReturnType<typeof CodeBlock>;
export default CodeBlock;
