export interface BootSequenceAPI {
    start: () => void;
}
import type { HTMLAttributes } from 'svelte/elements';
interface BootMessage {
    text: string;
    delay: number;
    type?: 'info' | 'success' | 'warning' | 'error' | 'system';
    progress?: boolean;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
    messages?: BootMessage[];
    autoStart?: boolean;
    onComplete?: () => void;
    variant?: 'classic' | 'modern' | 'matrix' | 'terminal';
    speed?: 'slow' | 'normal' | 'fast';
    showCursor?: boolean;
    class?: string;
}
declare const BootSequence: import("svelte").Component<Props, {}, "">;
type BootSequence = ReturnType<typeof BootSequence>;
export default BootSequence;
