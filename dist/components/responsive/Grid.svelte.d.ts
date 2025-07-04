import { type GridVariantProps } from '../../utils/responsive';
interface Props extends GridVariantProps {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
}
declare const Grid: import("svelte").Component<Props, {}, "">;
type Grid = ReturnType<typeof Grid>;
export default Grid;
