import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const inputVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "glass" | "glass-dark" | "filled" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
