export const SPRING_PRESETS = {
    noWobble: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 }
};
export class SpringPhysics {
    position = 0;
    velocity;
    tension;
    friction;
    mass;
    precision;
    constructor(config) {
        this.tension = config.tension;
        this.friction = config.friction;
        this.mass = config.mass ?? 1;
        this.velocity = config.velocity ?? 0;
        this.precision = config.precision ?? 0.01;
    }
    update(target, deltaTime) {
        const force = -this.tension * (this.position - target);
        const damping = -this.friction * this.velocity;
        const acceleration = (force + damping) / this.mass;
        this.velocity += acceleration * deltaTime;
        this.position += this.velocity * deltaTime;
        return this.position;
    }
    setPosition(position) {
        this.position = position;
    }
    setVelocity(velocity) {
        this.velocity = velocity;
    }
    isSettled(target) {
        return Math.abs(this.position - target) < this.precision && Math.abs(this.velocity) < this.precision;
    }
}
export class Spring2D {
    springX;
    springY;
    constructor(config) {
        this.springX = new SpringPhysics(config);
        this.springY = new SpringPhysics(config);
    }
    update(target, deltaTime) {
        return {
            x: this.springX.update(target.x, deltaTime),
            y: this.springY.update(target.y, deltaTime)
        };
    }
    setPosition(position) {
        this.springX.setPosition(position.x);
        this.springY.setPosition(position.y);
    }
    setVelocity(velocity) {
        this.springX.setVelocity(velocity.x);
        this.springY.setVelocity(velocity.y);
    }
    isSettled(target) {
        return this.springX.isSettled(target.x) && this.springY.isSettled(target.y);
    }
}
// Svelte action for spring animations
export function springAnimation(node, config = { spring: SPRING_PRESETS.gentle }) {
    const spring = new Spring2D(config.spring);
    let animationId;
    let lastTime = performance.now();
    const animate = (currentTime) => {
        const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
        lastTime = currentTime;
        if (config.target) {
            const position = spring.update(config.target, deltaTime);
            node.style.transform = `translate(${position.x}px, ${position.y}px)`;
            if (!spring.isSettled(config.target)) {
                animationId = requestAnimationFrame(animate);
            }
        }
    };
    return {
        update(newConfig) {
            config = newConfig;
            if (config.target) {
                animationId = requestAnimationFrame(animate);
            }
        },
        destroy() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        }
    };
}
