export default DocsNav;
type DocsNav = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Record<string, never>>): void;
};
declare const DocsNav: import("svelte").Component<Record<string, never>, {}, "">;
