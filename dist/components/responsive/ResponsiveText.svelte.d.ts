import { type TextVariantProps } from '../../utils/responsive';
interface Props extends TextVariantProps {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
    text?: string;
}
declare const ResponsiveText: import("svelte").Component<Props, {}, "">;
type ResponsiveText = ReturnType<typeof ResponsiveText>;
export default ResponsiveText;
//# sourceMappingURL=ResponsiveText.svelte.d.ts.map