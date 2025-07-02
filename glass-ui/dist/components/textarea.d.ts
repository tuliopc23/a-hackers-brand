import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const textareaVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "glass" | "glass-dark" | "filled" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea, textareaVariants };
