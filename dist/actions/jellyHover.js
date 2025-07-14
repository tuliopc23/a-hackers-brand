import { gsap } from 'gsap';
export function jellyHover(element, options = {}) {
    const { enabled = true, strength = 0.1, duration = 0.3, scale = 1.02, y = -2, borderRadius = '24px', ease = 'back.out(1.7)' } = options;
    if (!enabled) {
        return {
            update: () => { },
            destroy: () => { }
        };
    }
    let timeline = null;
    function handleMouseEnter() {
        if (timeline)
            timeline.kill();
        timeline = gsap.timeline();
        timeline.to(element, {
            scale,
            y,
            borderRadius,
            filter: 'brightness(1.05) saturate(1.1)',
            duration,
            ease
        });
    }
    function handleMouseLeave() {
        if (timeline)
            timeline.kill();
        timeline = gsap.timeline();
        timeline.to(element, {
            scale: 1,
            y: 0,
            borderRadius: 'inherit',
            filter: 'none',
            duration,
            ease
        });
    }
    // Set initial state
    gsap.set(element, {
        transformOrigin: 'center center'
    });
    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    return {
        update(newOptions) {
            Object.assign(options, newOptions);
        },
        destroy() {
            if (timeline)
                timeline.kill();
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        }
    };
}
