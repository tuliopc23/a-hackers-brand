<script lang="ts">
    import { cn } from "../utils.js";
    import { liquidBlur } from "../motion";
    import { createEventDispatcher, onMount } from "svelte";
    import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-svelte";
    import type { HTMLAttributes } from "svelte/elements";

    export interface CarouselItem {
        id: string;
        content?: string;
        image?: string;
        title?: string;
        description?: string;
        href?: string;
    }

    interface CarouselRenderers {
        item?: (ctx: {
            item: CarouselItem;
            index: number;
        }) => import("svelte").Snippet;
    }

    interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
        items: CarouselItem[];
        currentIndex?: number;
        autoPlay?: boolean;
        autoPlayInterval?: number;
        showControls?: boolean;
        showDots?: boolean;
        showProgress?: boolean;
        loop?: boolean;
        variant?: "glass" | "terminal" | "liquid";
        size?: "sm" | "md" | "lg";
        aspectRatio?: "16:9" | "4:3" | "1:1" | "21:9";
        transition?: "slide" | "fade" | "scale";
        itemsPerView?: number;
        gap?: "sm" | "md" | "lg";
        touchEnabled?: boolean;
        class?: string;
        children?: CarouselRenderers;
    }

    let {
        items,
        currentIndex = $bindable(0),
        autoPlay = false,
        autoPlayInterval = 5000,
        showControls = true,
        showDots = true,
        showProgress = false,
        loop = true,
        variant = "glass",
        size = "md",
        aspectRatio = "16:9",
        transition = "slide",
        itemsPerView = 1,
        gap = "md",
        touchEnabled = true,
        class: className = "",
        children,
        ...restProps
    }: Props = $props();

    const dispatch = createEventDispatcher();

    let carouselElement: HTMLDivElement;
    let containerElement: HTMLDivElement;
    let isPlaying = $state(autoPlay);
    // Use ReturnType to satisfy Node/Bun + browser typings
    let intervalId: number | null = null;
    let touchStartX = $state(0);
    let touchStartY = $state(0);
    let isDragging = $state(false);

    const sizes = {
        sm: {
            container: "text-sm",
            controls: "w-8 h-8 p-1",
            dots: "w-2 h-2",
            gap: { sm: "gap-1", md: "gap-2", lg: "gap-3" },
        },
        md: {
            container: "text-base",
            controls: "w-10 h-10 p-2",
            dots: "w-3 h-3",
            gap: { sm: "gap-2", md: "gap-4", lg: "gap-6" },
        },
        lg: {
            container: "text-lg",
            controls: "w-12 h-12 p-3",
            dots: "w-4 h-4",
            gap: { sm: "gap-3", md: "gap-6", lg: "gap-8" },
        },
    };

    const variants = {
        glass: {
            container: "bg-black/10 border-white/10 backdrop-blur-md",
            controls:
                "bg-white/10 border-white/20 text-white hover:bg-white/20",
            dots: "bg-white/30 hover:bg-white/50",
            dotsActive: "bg-white",
            progress: "bg-white/20",
            progressFill: "bg-white",
        },
        terminal: {
            container: "bg-black/80 border-terminal-green/30",
            controls:
                "bg-terminal-green/20 border-terminal-green/40 text-terminal-green hover:bg-terminal-green/30",
            dots: "bg-terminal-green/40 hover:bg-terminal-green/60",
            dotsActive: "bg-terminal-green",
            progress: "bg-terminal-green/20",
            progressFill: "bg-terminal-green",
        },
        liquid: {
            container:
                "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-white/10 backdrop-blur-md",
            controls:
                "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30",
            dots: "bg-white/30 hover:bg-white/50",
            dotsActive: "bg-gradient-to-r from-blue-400 to-purple-400",
            progress: "bg-white/20",
            progressFill: "bg-gradient-to-r from-blue-400 to-purple-400",
        },
    };

    const aspectRatios = {
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "21:9": "aspect-[21/9]",
    };

    const currentSize = sizes[size];
    const currentVariant = variants[variant];
    // Removed legacy __markUsed scaffolding (no longer needed; template usage is sufficient)

    // Computed properties
    const totalItems = $derived((): number => items.length);
    const maxIndex = $derived((): number =>
        Math.max(0, totalItems() - itemsPerView),
    );
    const canPrevious = $derived((): boolean => loop || currentIndex > 0);
    const canNext = $derived((): boolean => loop || currentIndex < maxIndex());

    const translateX = $derived(() => {
        const percentage = (currentIndex * 100) / itemsPerView;
        return `-${percentage}%`;
    });

    const progress = $derived(() => {
        if (totalItems() <= 1) return 100;
        return ((currentIndex + 1) / totalItems()) * 100;
    });

    // Width of each individual item (avoid repeating totalItems() in template)
    const itemWidth = $derived((): number =>
        totalItems() ? 100 / totalItems() : 0,
    );

    function goToSlide(index: number) {
        if (index < 0) {
            currentIndex = loop ? maxIndex() : 0;
        } else if (index > maxIndex()) {
            currentIndex = loop ? 0 : maxIndex();
        } else {
            currentIndex = index;
        }

        dispatch("change", { index: currentIndex, item: items[currentIndex] });
    }

    function previous() {
        if (canPrevious()) {
            goToSlide(currentIndex - 1);
        }
    }

    function next() {
        if (canNext()) {
            goToSlide(currentIndex + 1);
        }
    }

    function toggleAutoPlay() {
        isPlaying = !isPlaying;

        if (isPlaying) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }

        dispatch("autoplay", { isPlaying });
    }

    function startAutoPlay() {
        if (!isPlaying || totalItems() <= 1) return;

        stopAutoPlay();
        intervalId = window.setInterval(() => {
            if (currentIndex >= maxIndex() && !loop) {
                stopAutoPlay();
                return;
            }
            next();
        }, autoPlayInterval);
    }

    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Touch handlers
    function handleTouchStart(event: TouchEvent) {
        if (!touchEnabled) return;

        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        isDragging = true;

        // Pause autoplay during touch
        if (isPlaying) {
            stopAutoPlay();
        }
    }

    function handleTouchMove(event: TouchEvent) {
        if (!touchEnabled || !isDragging) return;

        // Prevent default scrolling
        event.preventDefault();
    }

    function handleTouchEnd(event: TouchEvent) {
        if (!touchEnabled || !isDragging) return;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        // Only handle horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                previous();
            } else {
                next();
            }
        }

        isDragging = false;

        // Resume autoplay
        if (isPlaying) {
            startAutoPlay();
        }
    }

    // Keyboard navigation
    function handleKeydown(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowLeft":
                event.preventDefault();
                previous();
                break;
            case "ArrowRight":
                event.preventDefault();
                next();
                break;
            case " ":
                event.preventDefault();
                toggleAutoPlay();
                break;
            case "Home":
                event.preventDefault();
                goToSlide(0);
                break;
            case "End":
                event.preventDefault();
                goToSlide(maxIndex());
                break;
        }
    }

    // Lifecycle
    onMount(() => {
        if (isPlaying) {
            startAutoPlay();
        }

        return () => {
            stopAutoPlay();
        };
    });

    // Watch autoPlay changes
    $effect(() => {
        if (isPlaying) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
    });
    // Mark template-used symbols via type-only tuple so no runtime read-before-assign.
    // This keeps analyzers from flagging them as unused without triggering definite assignment errors.
    type _TemplateRefs = [
        typeof carouselElement,
        typeof containerElement,
        typeof showControls,
        typeof showDots,
        typeof showProgress,
        typeof aspectRatio,
        typeof transition,
        typeof gap,
        typeof className,
        typeof children,
        typeof restProps,
        typeof aspectRatios,
        typeof currentSize,
        typeof currentVariant,
        typeof translateX,
        typeof progress,
        typeof itemWidth,
        typeof handleTouchStart,
        typeof handleTouchMove,
        typeof handleTouchEnd,
        typeof handleKeydown,
    ];
    void 0;
</script>

<div
    bind:this={carouselElement}
    class={cn(
        "relative rounded-lg border overflow-hidden",
        aspectRatios[aspectRatio],
        currentVariant.container,
        currentSize.container,
        className,
    )}
    use:liquidBlur={{ intensity: "medium" }}
    onkeydown={handleKeydown}
    role="region"
    aria-label="Carousel"
    aria-live="polite"
    {...restProps}
>
    <!-- Main Container -->
    <div
        bind:this={containerElement}
        class="relative w-full h-full overflow-hidden"
        ontouchstart={handleTouchStart}
        ontouchmove={handleTouchMove}
        ontouchend={handleTouchEnd}
    >
        <!-- Items -->
        <div
            class={cn(
                "flex h-full transition-transform duration-300 ease-in-out",
                currentSize.gap[gap],
            )}
            style={`transform: translateX(${translateX()}); width: ${(totalItems() * 100) / itemsPerView}%`}
        >
            {#each items as item, index (item.id)}
                <div
                    class="flex-shrink-0 h-full relative"
                    style={`width: ${itemWidth()}%`}
                >
                    {#if false}
                        <div></div>
                    {:else}
                        <!-- Default item content -->
                        <div class="w-full h-full flex flex-col">
                            {#if children?.item}
                                {@const __itemSnippet = children.item({
                                    item,
                                    index,
                                })}
                                {@render __itemSnippet()}
                            {:else}
                                {#if item.image}
                                    <img
                                        src={item.image}
                                        alt={item.title || `Slide ${index + 1}`}
                                        class="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                {/if}

                                {#if item.title || item.description}
                                    <div
                                        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
                                    >
                                        {#if item.title}
                                            <h3
                                                class="text-lg font-semibold text-white mb-1"
                                            >
                                                {item.title}
                                            </h3>
                                        {/if}
                                        {#if item.description}
                                            <p class="text-sm text-white/80">
                                                {item.description}
                                            </p>
                                        {/if}
                                    </div>
                                {/if}
                            {/if}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <!-- Progress Bar -->
    {#if showProgress}
        <div
            class={cn(
                "absolute bottom-0 left-0 right-0 h-1",
                currentVariant.progress,
            )}
        >
            <div
                class={cn(
                    "h-full transition-all duration-300",
                    currentVariant.progressFill,
                )}
                style={`width: ${progress()}%`}
            ></div>
        </div>
    {/if}

    <!-- Controls -->
    {#if showControls && totalItems() > 1}
        <!-- Previous Button -->
        <button
            onclick={previous}
            disabled={!canPrevious()}
            class={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200",
                currentSize.controls,
                currentVariant.controls,
                !canPrevious() && "opacity-50 cursor-not-allowed",
            )}
            title="Previous slide"
            aria-label="Previous slide"
        >
            <ChevronLeft size={16} />
        </button>

        <!-- Next Button -->
        <button
            onclick={next}
            disabled={!canNext()}
            class={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200",
                currentSize.controls,
                currentVariant.controls,
                !canNext() && "opacity-50 cursor-not-allowed",
            )}
            title="Next slide"
            aria-label="Next slide"
        >
            <ChevronRight size={16} />
        </button>

        <!-- Play/Pause Button -->
        {#if autoPlay}
            <button
                onclick={toggleAutoPlay}
                class={cn(
                    "absolute top-2 right-2 rounded-full border transition-all duration-200",
                    currentSize.controls,
                    currentVariant.controls,
                )}
                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
                {#if isPlaying}
                    <Pause size={16} />
                {:else}
                    <Play size={16} />
                {/if}
            </button>
        {/if}
    {/if}

    <!-- Dots Navigation -->
    {#if showDots && totalItems() > 1}
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {#each items as item, index (item.id)}
                <button
                    onclick={() => goToSlide(index)}
                    class={cn(
                        "rounded-full transition-all duration-200",
                        currentSize.dots,
                        index === currentIndex
                            ? currentVariant.dotsActive
                            : currentVariant.dots,
                    )}
                    title={`Go to slide ${index + 1}`}
                    aria-label={`Go to slide ${index + 1}`}
                ></button>
            {/each}
        </div>
    {/if}
</div>

<style>
    /* Smooth drag feedback */
    .dragging {
        cursor: grabbing;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    /* Focus styles */
    button:focus-visible {
        outline: 2px solid rgba(59, 130, 246, 0.5);
        outline-offset: 2px;
    }

    /* Carousel focus styles */
    [role="region"]:focus {
        outline: 2px solid rgba(59, 130, 246, 0.5);
        outline-offset: 2px;
    }

    /* Prevent text selection during touch */
    .touch-enabled {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    /* Animation performance */
    @media (prefers-reduced-motion: reduce) {
        * {
            transition: none !important;
            animation: none !important;
        }
    }
</style>
