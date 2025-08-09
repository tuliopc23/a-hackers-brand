<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import ColorSwatch from "./ColorSwatch.svelte";

    interface ColorSwatchData {
        name: string;
        hex: string;
        category: string;
        description?: string;
    }

    interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
        theme?: "terminal" | "bubbleTea" | "both";
        layout?: "grid" | "list";
        interactive?: boolean;
        showHex?: boolean;
        showCategories?: boolean;
        animate?: boolean;
        onColorSelect?: (color: ColorSwatchData) => void;
        class?: string;
        // Snippet render function (slot-like)
        children?: import("svelte").Snippet;
    }

    const {
        theme = "both",
        layout = "grid",
        interactive = true,
        showHex = true,
        showCategories = true,
        animate = true,
        onColorSelect,
        class: className = "",
        children,
        ...restProps
    }: Props = $props();

    // Terminal theme colors
    const terminalColors: ColorSwatchData[] = [
        { name: "Terminal Green", hex: "#00ff41", category: "Primary" },
        { name: "Electric Cyan", hex: "#00ffff", category: "Primary" },
        { name: "Neon Blue", hex: "#0080ff", category: "Primary" },
        { name: "Deep Purple", hex: "#8a2be2", category: "Primary" },
        { name: "Matrix Green", hex: "#00ff88", category: "Accent" },
        { name: "Hot Pink", hex: "#ff1493", category: "Accent" },
        { name: "Retro Amber", hex: "#ffbf00", category: "Accent" },
        { name: "Lime Green", hex: "#32cd32", category: "Accent" },
        { name: "Electric Magenta", hex: "#ff00ff", category: "Accent" },
        { name: "Cyber Orange", hex: "#ff4500", category: "Accent" },
    ];

    // Bubble Tea theme colors
    const bubbleTeaColors: ColorSwatchData[] = [
        {
            name: "Soft Pink",
            hex: "#ff6b9d",
            category: "Primary",
            description: "Primary brand color",
        },
        {
            name: "Vibrant Purple",
            hex: "#c44af2",
            category: "Primary",
            description: "Secondary brand color",
        },
        {
            name: "Bright Blue",
            hex: "#4fa8ff",
            category: "Primary",
            description: "Accent color",
        },
        {
            name: "Modern Cyan",
            hex: "#4dd8da",
            category: "Primary",
            description: "Info color",
        },
        {
            name: "Fresh Green",
            hex: "#6bcf7f",
            category: "Status",
            description: "Success state",
        },
        {
            name: "Warm Yellow",
            hex: "#ffd23a",
            category: "Status",
            description: "Warning state",
        },
        {
            name: "Coral Orange",
            hex: "#ff8c42",
            category: "Status",
            description: "Caution state",
        },
        {
            name: "Soft Red",
            hex: "#ff6b6b",
            category: "Status",
            description: "Error state",
        },
        { name: "Background Dark", hex: "#1a1a2e", category: "Background" },
        { name: "Surface", hex: "#16213e", category: "Background" },
        { name: "Panel", hex: "#0f1419", category: "Background" },
        // Glow variants
        {
            name: "Glow Pink",
            hex: "#ff85b3",
            category: "Glow Effects",
            description: "Enhanced pink for glow effects",
        },
        {
            name: "Glow Purple",
            hex: "#d666ff",
            category: "Glow Effects",
            description: "Enhanced purple for glow effects",
        },
        {
            name: "Glow Blue",
            hex: "#66c3ff",
            category: "Glow Effects",
            description: "Enhanced blue for glow effects",
        },
        {
            name: "Glow Cyan",
            hex: "#66e6ea",
            category: "Glow Effects",
            description: "Enhanced cyan for glow effects",
        },
        {
            name: "Glow Green",
            hex: "#85d99b",
            category: "Glow Effects",
            description: "Enhanced green for glow effects",
        },
        {
            name: "Glow Orange",
            hex: "#ffad66",
            category: "Glow Effects",
            description: "Enhanced orange for glow effects",
        },
    ];

    const getDisplayColors = () => {
        switch (theme) {
            case "terminal":
                return terminalColors;
            case "bubbleTea":
                return bubbleTeaColors;
            case "both":
            default:
                return [...terminalColors, ...bubbleTeaColors];
        }
    };

    const displayColors = getDisplayColors();
    const categories = [...new Set(displayColors.map((c) => c.category))];

    let copiedColor = $state<string | null>(null);

    const copyToClipboard = async (hex: string) => {
        if (!interactive) return;

        try {
            await navigator.clipboard.writeText(hex);
            copiedColor = hex;
            setTimeout(() => {
                copiedColor = null;
            }, 2000);
        } catch (err) {
            console.error("Failed to copy color to clipboard:", err);
        }
    };

    const handleColorClick = (color: ColorSwatchData) => {
        copyToClipboard(color.hex);
        onColorSelect?.(color);
    };

    const getLayoutClasses = () => {
        if (layout === "grid") {
            return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4";
        }
        return "flex flex-col gap-2";
    };
    // Cleanup: removed former __markUsed scaffold and no-op $effect (unnecessary analyzer suppression)
</script>

<div class={`space-y-6 ${className}`} {...restProps}>
    {#if children}
        <div class="mb-6">
            {@render children()}
        </div>
    {/if}

    {#if showCategories}
        {#each categories as category (category)}
            <div class="space-y-3">
                <h3
                    class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"
                >
                    {category}
                </h3>

                <div class={getLayoutClasses()}>
                    {#each displayColors.filter((c) => c.category === category) as color (color.hex)}
                        <ColorSwatch
                            {color}
                            {layout}
                            {interactive}
                            {showHex}
                            {animate}
                            {copiedColor}
                            colorIndex={displayColors.indexOf(color)}
                            isTerminal={terminalColors.includes(color)}
                            onColorClick={handleColorClick}
                        />
                    {/each}
                </div>
            </div>
        {/each}
    {:else}
        <div class={getLayoutClasses()}>
            {#each displayColors as color (color.hex)}
                <ColorSwatch
                    {color}
                    {layout}
                    {interactive}
                    {showHex}
                    {animate}
                    {copiedColor}
                    colorIndex={displayColors.indexOf(color)}
                    isTerminal={terminalColors.includes(color)}
                    onColorClick={handleColorClick}
                />
            {/each}
        </div>
    {/if}
</div>
