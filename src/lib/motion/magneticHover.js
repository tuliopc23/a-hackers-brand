import { DURATIONS, EASING_CSS, TRANSFORMS } from './tokens';
/**
 * Magnetic hover effect that follows cursor movement
 * Creates smooth attraction-based interactions
 */
export function magneticHover(node, { duration = DURATIONS.fast, easing = EASING_CSS.spring, strength = 0.3, scale = TRANSFORMS.scale.hover, magnetRadius = 100, enabled = true } = {}) {
    let isHovering = false;
    let animationFrame;
    const getDistance = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    const handleMouseMove = (event) => {
        if (!enabled || !isHovering)
            return;
        const rect = node.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const distance = getDistance(centerX, centerY, mouseX, mouseY);
        if (distance < magnetRadius) {
            const deltaX = (mouseX - centerX) * strength;
            const deltaY = (mouseY - centerY) * strength;
            // Apply magnetic attraction with smooth animation
            node.style.transition = `transform ${duration}ms ${easing}`;
            node.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
        }
    };
    const handleMouseEnter = (event) => {
        if (!enabled)
            return;
        isHovering = true;
        // Initial hover scale effect
        node.style.transition = `transform ${duration}ms ${easing}`;
        node.style.transform = `scale(${scale})`;
        // Add cursor tracking
        document.addEventListener('mousemove', handleMouseMove);
    };
    const handleMouseLeave = () => {
        if (!enabled)
            return;
        isHovering = false;
        // Reset to original position and scale
        node.style.transition = `transform ${duration}ms ${easing}`;
        node.style.transform = 'translate(0px, 0px) scale(1)';
        // Remove cursor tracking
        document.removeEventListener('mousemove', handleMouseMove);
    };
    // Add event listeners
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);
    // Store original cursor and will-change for performance
    const originalCursor = node.style.cursor;
    const originalWillChange = node.style.willChange;
    node.style.cursor = 'pointer';
    node.style.willChange = 'transform';
    return {
        update(newOptions) {
            // Update options
            ({
                duration = DURATIONS.fast,
                easing = EASING_CSS.spring,
                strength = 0.3,
                scale = TRANSFORMS.scale.hover,
                magnetRadius = 100,
                enabled = true
            } = { ...newOptions });
        },
        destroy() {
            // Clean up event listeners
            node.removeEventListener('mouseenter', handleMouseEnter);
            node.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', handleMouseMove);
            // Cancel any pending animation frame
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            // Restore original styles
            node.style.cursor = originalCursor;
            node.style.willChange = originalWillChange;
            node.style.transform = '';
            node.style.transition = '';
        }
    };
}
