import { forwardRef, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { useLiquidGlass, useContentAwareGlass } from "../../lib/animations/use-liquid-glass";
import { useMagneticHover } from "../../lib/physics/glass-physics";

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  image?: string;
  badge?: string;
}

export interface GlassFeatureShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  features: FeatureItem[];
  layout?: "grid" | "masonry" | "carousel" | "stacked";
  columns?: 1 | 2 | 3 | 4;
  variant?: "default" | "minimal" | "cards" | "floating";
  enableMagnetic?: boolean;
  enableParallax?: boolean;
}

const GlassFeatureShowcase = forwardRef<HTMLDivElement, GlassFeatureShowcaseProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      features,
      layout = "grid",
      columns = 3,
      variant = "default",
      enableMagnetic = false,
      enableParallax = true,
      children,
      ...props
    },
    ref
  ) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const { specularHighlights } = useLiquidGlass();
    const contentAnalysis = useContentAwareGlass(contentRef);

    const gridClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          staggerChildren: 0.1
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    };

    const FeatureCard = ({ feature, index }: { feature: FeatureItem; index: number }) => {
      const { elementRef: magneticRef, transform } = useMagneticHover(0.15, 100);

      return (
        <motion.div
          ref={enableMagnetic ? magneticRef as any : undefined}
          variants={itemVariants}
          className={cn(
            "group relative",
            variant === "cards" && "liquid-glass liquid-glass-interactive liquid-glass-depth-2 p-6 rounded-2xl",
            variant === "floating" && "liquid-glass liquid-glass-interactive liquid-glass-depth-3 p-8 rounded-3xl liquid-glass-glow",
            variant === "minimal" && "p-6",
            variant === "default" && "liquid-glass liquid-glass-interactive p-6 rounded-xl",
            specularHighlights && "liquid-glass-specular liquid-glass-shimmer",
            enableMagnetic && "liquid-glass-magnetic"
          )}
          style={{
            transform: enableMagnetic ? transform : undefined
          }}
          whileHover={variant === "floating" ? { y: -8, scale: 1.02 } : { y: -4 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Feature Image */}
          {feature.image && (
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="relative w-full h-48">
                <Image
                  src={feature.image || ''}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3} // Load first 3 images with priority
                />
              </div>
              {feature.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 liquid-glass liquid-glass-specular rounded-full text-xs font-medium text-[var(--text-primary)] z-10">
                  {feature.badge}
                </div>
              )}
            </div>
          )}

          {/* Icon */}
          <div className={cn(
            "flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
            variant === "floating" ? "w-16 h-16" : "w-12 h-12",
            "liquid-glass liquid-glass-specular rounded-2xl"
          )}>
            {feature.icon}
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className={cn(
              "font-semibold text-[var(--text-primary)] transition-colors duration-300",
              variant === "floating" ? "text-xl" : "text-lg"
            )}>
              {feature.title}
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed">
              {feature.description}
            </p>

            {feature.link && (
              <div className="pt-2">
                {feature.link.href ? (
                  <a
                    href={feature.link.href}
                    className="inline-flex items-center text-sm font-medium text-[var(--glass-primary)] hover:text-[var(--glass-primary-hover)] transition-colors duration-200"
                  >
                    {feature.link.label}
                    <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <button
                    onClick={feature.link.onClick}
                    className="inline-flex items-center text-sm font-medium text-[var(--glass-primary)] hover:text-[var(--glass-primary-hover)] transition-colors duration-200"
                  >
                    {feature.link.label}
                    <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-[var(--glass-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      );
    };

    // Create a callback ref that handles both the contentRef and forwarded ref
    const setRefs = useCallback((node: HTMLDivElement | null) => {
      // Set the contentRef for internal use
      if (contentRef) {
        (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }

      // Handle the forwarded ref
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    }, [ref]);

    return (
      <div
        ref={setRefs}
        className={cn(
          "relative py-16 px-6 md:py-24 md:px-8",
          className
        )}
        {...props}
      >
        {/* Background Elements */}
        {enableParallax && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
                filter: "blur(20px)"
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          {(title || subtitle || description) && (
            <motion.div
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {subtitle && (
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 mb-4 rounded-full liquid-glass liquid-glass-specular text-sm font-medium text-[var(--text-secondary)]"
                >
                  {subtitle}
                </motion.div>
              )}

              {title && (
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6"
                >
                  {title}
                </motion.h2>
              )}

              {description && (
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
                >
                  {description}
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Features Grid */}
          <motion.div
            className={cn(
              "grid gap-8",
              layout === "grid" && gridClasses[columns],
              layout === "masonry" && "columns-1 md:columns-2 lg:columns-3 space-y-8",
              layout === "stacked" && "space-y-8"
            )}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>

          {/* Additional Content */}
          {children && (
            <motion.div
              className="mt-16"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/3 left-8 w-2 h-2 liquid-glass rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-12 w-3 h-3 liquid-glass rounded-full"
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    );
  }
);

GlassFeatureShowcase.displayName = "GlassFeatureShowcase";

export { GlassFeatureShowcase };
