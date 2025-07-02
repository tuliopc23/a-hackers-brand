// Liquid flow animation with CSS keyframes and JS fallback

export interface LiquidFlowOptions {
	intensity?: number; // 0.1 to 2.0 - controls amplitude of the flow
	viscosity?: number; // 0.1 to 2.0 - controls speed/fluidity
	duration?: number; // Duration in seconds
	direction?: 'horizontal' | 'vertical' | 'both';
	autoplay?: boolean;
}

// Generate CSS keyframes dynamically based on options
export function generateLiquidFlowKeyframes(options: LiquidFlowOptions = {}): string {
	const { intensity = 1, viscosity = 1, direction = 'both' } = options;

	// Scale intensity (controls amplitude)
	const amplitudeX = direction === 'vertical' ? 0 : intensity * 10;
	const amplitudeY = direction === 'horizontal' ? 0 : intensity * 8;

	// Create organic, flowing motion keyframes
	const keyframes = `
    @keyframes liquid-flow {
      0% {
        transform: translate3d(0px, 0px, 0) rotate(0deg) scale(1);
        border-radius: 50% 40% 60% 30%;
      }
      12.5% {
        transform: translate3d(${amplitudeX * 0.3}px, ${amplitudeY * -0.2}px, 0) rotate(2deg) scale(1.02);
        border-radius: 40% 60% 30% 50%;
      }
      25% {
        transform: translate3d(${amplitudeX * 0.7}px, ${amplitudeY * 0.1}px, 0) rotate(3deg) scale(1.05);
        border-radius: 60% 30% 50% 40%;
      }
      37.5% {
        transform: translate3d(${amplitudeX * 0.9}px, ${amplitudeY * 0.4}px, 0) rotate(1deg) scale(1.03);
        border-radius: 30% 50% 40% 60%;
      }
      50% {
        transform: translate3d(${amplitudeX * 0.5}px, ${amplitudeY * 0.6}px, 0) rotate(-1deg) scale(1);
        border-radius: 50% 40% 60% 30%;
      }
      62.5% {
        transform: translate3d(${amplitudeX * -0.2}px, ${amplitudeY * 0.4}px, 0) rotate(-2deg) scale(0.98);
        border-radius: 40% 60% 30% 50%;
      }
      75% {
        transform: translate3d(${amplitudeX * -0.6}px, ${amplitudeY * 0.1}px, 0) rotate(-3deg) scale(0.95);
        border-radius: 60% 30% 50% 40%;
      }
      87.5% {
        transform: translate3d(${amplitudeX * -0.4}px, ${amplitudeY * -0.3}px, 0) rotate(-1deg) scale(0.97);
        border-radius: 30% 50% 40% 60%;
      }
      100% {
        transform: translate3d(0px, 0px, 0) rotate(0deg) scale(1);
        border-radius: 50% 40% 60% 30%;
      }
    }
  `;

	return keyframes;
}

// JavaScript fallback animation
export class LiquidFlowAnimation {
	private element: HTMLElement;
	private options: Required<LiquidFlowOptions>;
	private animationId: number | null = null;
	private startTime: number = 0;
	private isRunning: boolean = false;

	constructor(element: HTMLElement, options: LiquidFlowOptions = {}) {
		this.element = element;
		this.options = {
			intensity: options.intensity ?? 1,
			viscosity: options.viscosity ?? 1,
			duration: options.duration ?? 3,
			direction: options.direction ?? 'both',
			autoplay: options.autoplay ?? true
		};

		if (this.options.autoplay) {
			this.start();
		}
	}

	private animate = (currentTime: number) => {
		if (!this.startTime) this.startTime = currentTime;

		const elapsed = (currentTime - this.startTime) / 1000;
		const progress = (elapsed / this.options.duration) % 1;

		// Apply viscosity to control speed
		const adjustedProgress = this.easeInOutSine(progress) / this.options.viscosity;

		// Calculate position based on organic wave functions
		const t = adjustedProgress * Math.PI * 2;

		let translateX = 0;
		let translateY = 0;

		if (this.options.direction !== 'vertical') {
			translateX = Math.sin(t) * this.options.intensity * 10 + Math.sin(t * 1.3) * this.options.intensity * 3;
		}

		if (this.options.direction !== 'horizontal') {
			translateY = Math.cos(t * 0.8) * this.options.intensity * 8 + Math.cos(t * 1.7) * this.options.intensity * 2;
		}

		// Organic rotation and scale
		const rotation = Math.sin(t * 0.5) * 3;
		const scale = 1 + Math.sin(t * 1.2) * 0.05;

		// Apply transform
		this.element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation}deg) scale(${scale})`;

		// Organic border-radius morphing
		const br1 = 50 + Math.sin(t) * 10;
		const br2 = 40 + Math.cos(t * 1.3) * 20;
		const br3 = 60 + Math.sin(t * 0.7) * 10;
		const br4 = 30 + Math.cos(t * 1.1) * 20;

		this.element.style.borderRadius = `${br1}% ${br2}% ${br3}% ${br4}%`;

		if (this.isRunning) {
			this.animationId = requestAnimationFrame(this.animate);
		}
	};

	private easeInOutSine(t: number): number {
		return -(Math.cos(Math.PI * t) - 1) / 2;
	}

	public start(): void {
		if (this.isRunning) return;

		this.isRunning = true;
		this.startTime = 0;
		this.animationId = requestAnimationFrame(this.animate);
	}

	public stop(): void {
		this.isRunning = false;
		if (this.animationId) {
			cancelAnimationFrame(this.animationId);
			this.animationId = null;
		}
	}

	public updateOptions(newOptions: Partial<LiquidFlowOptions>): void {
		Object.assign(this.options, newOptions);
	}

	public destroy(): void {
		this.stop();
		this.element.style.transform = '';
		this.element.style.borderRadius = '';
	}
}

// CSS Animation helper
export function applyLiquidFlowCSS(element: HTMLElement, options: LiquidFlowOptions = {}): void {
	const { intensity = 1, viscosity = 1, duration = 3 } = options;

	// Generate and inject keyframes
	const keyframes = generateLiquidFlowKeyframes(options);
	const styleId = 'liquid-flow-keyframes';

	// Remove existing style if present
	const existingStyle = document.getElementById(styleId);
	if (existingStyle) {
		existingStyle.remove();
	}

	// Add new keyframes
	const style = document.createElement('style');
	style.id = styleId;
	style.textContent = keyframes;
	document.head.appendChild(style);

	// Apply animation with adjusted duration based on viscosity
	const adjustedDuration = duration * viscosity;
	element.style.animation = `liquid-flow ${adjustedDuration}s ease-in-out infinite`;
}

// Svelte action for liquid flow
export function liquidFlow(node: HTMLElement, options: LiquidFlowOptions = {}) {
	let animation: LiquidFlowAnimation | null = null;

	// Check if CSS animations are supported and preferred
	const preferCSS = (CSS.supports('animation', 'test') && !options.intensity) || options.intensity === 1;

	if (preferCSS) {
		// Use CSS animation
		applyLiquidFlowCSS(node, options);
	} else {
		// Use JavaScript fallback
		animation = new LiquidFlowAnimation(node, options);
	}

	return {
		update(newOptions: LiquidFlowOptions) {
			if (preferCSS) {
				applyLiquidFlowCSS(node, newOptions);
			} else if (animation) {
				animation.updateOptions(newOptions);
			}
		},
		destroy() {
			if (animation) {
				animation.destroy();
			} else {
				node.style.animation = '';
				// Remove keyframes style
				const styleElement = document.getElementById('liquid-flow-keyframes');
				if (styleElement) {
					styleElement.remove();
				}
			}
		}
	};
}

// Utility function to create liquid flow CSS class
export function createLiquidFlowClass(options: LiquidFlowOptions = {}): string {
	const keyframes = generateLiquidFlowKeyframes(options);
	const duration = (options.duration ?? 3) * (options.viscosity ?? 1);

	return `
    ${keyframes}
    
    .liquid-flow {
      animation: liquid-flow ${duration}s ease-in-out infinite;
      transform-origin: center center;
    }
  `;
}
