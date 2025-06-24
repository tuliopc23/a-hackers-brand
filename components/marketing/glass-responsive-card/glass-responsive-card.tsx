import React, { forwardRef } from "react";
import { cn, getGlassClass, microInteraction } from "../../../lib/utils";

export interface GlassResponsiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "pressed";
  hover?: boolean;
  bordered?: boolean;
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
  stackOnMobile?: boolean;
}

const GlassResponsiveCard = forwardRef<HTMLDivElement, GlassResponsiveCardProps>(
  ({ 
    className, 
    variant = "default", 
    hover = true, 
    bordered = true,
    padding = "md",
    responsive = true,
    stackOnMobile = false,
    children,
    ...props 
  }, ref) => {
    const variantClasses = {
      default: getGlassClass("default"),
      elevated: getGlassClass("elevated"),
      outlined: "bg-transparent border-2 border-[var(--glass-border)]",
      pressed: cn(getGlassClass("pressed"), "shadow-inner")
    };

    const paddingClasses = responsive ? {
      none: "",
      xs: "p-2 sm:p-3",
      sm: "p-3 sm:p-4", 
      md: "p-4 sm:p-6",
      lg: "p-6 sm:p-8",
      xl: "p-8 sm:p-12"
    } : {
      none: "",
      xs: "p-2",
      sm: "p-3", 
      md: "p-6",
      lg: "p-8",
      xl: "p-12"
    };

    const baseClasses = cn(
      "rounded-xl overflow-hidden",
      variantClasses[variant],
      paddingClasses[padding],
      bordered && variant !== "outlined" && "border border-[var(--glass-border)]",
      hover && "glass-interactive cursor-pointer",
      microInteraction.smooth,
      "will-change-transform",
      // Mobile optimizations
      responsive && [
        "text-sm sm:text-base", // Responsive text sizing
        stackOnMobile && "flex flex-col sm:flex-row sm:items-center"
      ]
    );

    return (
      <div
        ref={ref}
        className={cn(baseClasses, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassResponsiveCard.displayName = "GlassResponsiveCard";

export { GlassResponsiveCard };