import type { Snippet } from 'svelte';
import type { InstancedMesh } from 'three';
declare const Api: import("svelte").Component<{
    instancedMesh: InstancedMesh;
    id: string;
    limit: number;
    range: number;
    update: boolean;
    children?: Snippet;
}, {}, "">;
export default Api;
