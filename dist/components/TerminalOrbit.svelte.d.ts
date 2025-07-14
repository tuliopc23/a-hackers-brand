interface Props {
	position?: [number, number, number];
	rotation?: [number, number, number];
	scale?: number;
	quality?: 'low' | 'medium' | 'high';
	interactive?: boolean;
}
declare const TerminalOrbit: import('svelte').Component<Props, {}, ''>;
type TerminalOrbit = ReturnType<typeof TerminalOrbit>;
export default TerminalOrbit;
