import { type Breakpoint } from '../../utils/responsive';
interface Props {
    when?: Breakpoint;
    above?: Breakpoint;
    below?: Breakpoint;
    only?: Breakpoint;
    class?: string;
}
declare const Show: import("svelte").Component<Props, {}, "">;
type Show = ReturnType<typeof Show>;
export default Show;
