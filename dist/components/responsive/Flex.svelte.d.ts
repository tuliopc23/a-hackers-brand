import { type FlexVariantProps } from '../../utils/responsive';
interface Props extends FlexVariantProps {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
}
declare const Flex: import("svelte").Component<Props, {}, "">;
type Flex = ReturnType<typeof Flex>;
export default Flex;
