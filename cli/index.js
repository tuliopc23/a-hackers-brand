#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes for terminal output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	dim: '\x1b[2m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
	bgRed: '\x1b[41m',
	bgGreen: '\x1b[42m',
	bgBlue: '\x1b[44m'
};

// ASCII art banner
const banner = `
${colors.cyan}${colors.bright}
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    ▐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▌
    ▐░█▀▀▀▀▀█░█░░░░░█▀▀▀▀▀█░▄▀▀▀▀▀▄░█░░░░▄▀▀▀▀▀▄░█▀▀▀▌
    ▐░▌     ▐░▌░░░░░▌     ▐░▌       ▐░▌░░░▌       ▐░▌   ▌
    ▐░█▄▄▄▄▄█░▌░░░░░▌ ▄▄▄▄█░▌ ▄▄▄▄▄█░▌░░░▌ ▄▄▄▄▄█░█▄▄▄▌
    ▐░░░░░░░░░▌░░░░░▌▐░░░░░░▌▐░░░░░░░▌░░░▌▐░░░░░░░░░░░▌
    ▐░█▀▀▀▀▀█░▌░░░░░▌ ▀▀▀▀█░▌ ▀▀▀▀▀█░▌░░░▌ ▀▀▀▀▀█░█▀▀▀▌
    ▐░▌     ▐░▌░░░░░▌     ▐░▌       ▐░▌░░░▌       ▐░▌   ▌
    ▐░▌     ▐░█▄▄▄▄▄█▄▄▄▄▄█░█▄▄▄▄▄▄▄█░█▄▄▄█▄▄▄▄▄▄▄█░▌   ▌
    ▐░▌     ▐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▌   ▌
     ▀       ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀    ▀
${colors.reset}
${colors.magenta}${colors.bright}    🚀 A Hacker's Brand - Liquid Glass Terminal Design System${colors.reset}
${colors.dim}         Create stunning SvelteKit apps with retro-futuristic UI${colors.reset}
`;

// Spinner animation
class Spinner {
	constructor(text = 'Loading...') {
		this.text = text;
		this.frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
		this.current = 0;
		this.interval = null;
	}

	start() {
		this.interval = setInterval(() => {
			process.stdout.write(`\r${colors.cyan}${this.frames[this.current]}${colors.reset} ${this.text}`);
			this.current = (this.current + 1) % this.frames.length;
		}, 80);
	}

	stop(symbol = '✅', message = 'Done') {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
		process.stdout.write(`\r${colors.green}${symbol}${colors.reset} ${message}\n`);
	}

	fail(message = 'Failed') {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
		process.stdout.write(`\r${colors.red}❌${colors.reset} ${message}\n`);
	}
}

// Utility functions
function log(message, color = 'white') {
	console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
	console.error(`${colors.red}❌ ${message}${colors.reset}`);
}

function success(message) {
	console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function info(message) {
	console.log(`${colors.blue}ℹ️  ${message}${colors.reset}`);
}

function warn(message) {
	console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
}

// Command line argument parsing
function parseArgs() {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		return { help: true };
	}

	const [projectName, ...flags] = args;

	if (projectName === '--help' || projectName === '-h') {
		return { help: true };
	}

	return {
		projectName,
		flags: flags.reduce((acc, flag) => {
			if (flag.startsWith('--template=')) {
				acc.template = flag.split('=')[1];
			} else if (flag === '--typescript') {
				acc.typescript = true;
			} else if (flag === '--demo') {
				acc.demo = true;
			} else if (flag === '--verbose') {
				acc.verbose = true;
			} else if (flag === '--skip-install') {
				acc.skipInstall = true;
			}
			return acc;
		}, {})
	};
}

// User prompts
async function prompt(question, defaultValue = '') {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise((resolve) => {
		const defaultText = defaultValue ? ` ${colors.dim}(${defaultValue})${colors.reset}` : '';
		rl.question(`${colors.cyan}?${colors.reset} ${question}${defaultText}: `, (answer) => {
			rl.close();
			resolve(answer.trim() || defaultValue);
		});
	});
}

async function confirm(question, defaultValue = true) {
	const defaultText = defaultValue ? 'Y/n' : 'y/N';
	const answer = await prompt(`${question} ${colors.dim}(${defaultText})${colors.reset}`);

	if (!answer) return defaultValue;
	return answer.toLowerCase().startsWith('y');
}

async function select(question, choices) {
	console.log(`\n${colors.cyan}?${colors.reset} ${question}`);
	choices.forEach((choice, index) => {
		console.log(
			`  ${colors.dim}${index + 1}.${colors.reset} ${choice.name} ${colors.dim}- ${choice.description}${colors.reset}`
		);
	});

	const answer = await prompt('Choose an option', '1');
	const index = parseInt(answer) - 1;

	if (index >= 0 && index < choices.length) {
		return choices[index];
	}

	return choices[0];
}

// Template definitions
const templates = {
	minimal: {
		name: 'Minimal SvelteKit App',
		description: "Basic SvelteKit setup with A Hacker's Brand components",
		files: {
			'package.json': (projectName) =>
				JSON.stringify(
					{
						name: projectName,
						version: '0.0.1',
						private: true,
						scripts: {
							dev: 'vite dev',
							build: 'vite build',
							preview: 'vite preview',
							check: 'svelte-kit sync && svelte-check --tsconfig ./tsconfig.json',
							'check:watch': 'svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch'
						},
						devDependencies: {
							'@sveltejs/adapter-auto': '^3.0.0',
							'@sveltejs/kit': '^2.0.0',
							'@sveltejs/vite-plugin-svelte': '^4.0.0',
							svelte: '^5.0.0',
							'svelte-check': '^4.0.0',
							typescript: '^5.0.0',
							vite: '^6.0.0',
							tailwindcss: '^4.0.0',
							autoprefixer: '^10.4.0'
						},
						dependencies: {
							'a-hackers-brand': '^0.2.0'
						},
						type: 'module'
					},
					null,
					2
				),

			'vite.config.js': `import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()]
});`,

			'svelte.config.js': `import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;`,

			'tailwind.config.js': `import hackersConfig from 'a-hackers-brand/tailwind';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  presets: [hackersConfig]
};`,

			'src/app.html': `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover" class="dark">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>`,

			'src/app.css': `@import 'tailwindcss';
@import 'a-hackers-brand/styles';

:root {
  font-family: 'PP Supply Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #f5f5f7;
  min-height: 100vh;
}`,

			'src/routes/+layout.svelte': `<script>
  import '../app.css';
</script>

<main class="min-h-screen">
  <slot />
</main>`,

			'src/routes/+page.svelte': `<script>
  import { Button, Card } from 'a-hackers-brand';
</script>

<div class="container mx-auto px-6 py-12">
  <div class="text-center mb-12">
    <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
      Welcome to A Hacker's Brand
    </h1>
    <p class="text-xl text-white/70 max-w-2xl mx-auto">
      A liquid glass terminal fusion design system built for the modern web
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <Card variant="glass" class="p-6">
      <h3 class="text-xl font-semibold mb-3">Liquid Glass UI</h3>
      <p class="text-white/70 mb-4">Beautiful glass morphism components with liquid interactions</p>
      <Button variant="glass">Learn More</Button>
    </Card>

    <Card variant="terminal" class="p-6">
      <h3 class="text-xl font-semibold mb-3">Terminal Heritage</h3>
      <p class="text-white/70 mb-4">CLI-inspired components with retro-futuristic aesthetics</p>
      <Button variant="terminal">Explore</Button>
    </Card>

    <Card variant="liquid" class="p-6">
      <h3 class="text-xl font-semibold mb-3">Motion System</h3>
      <p class="text-white/70 mb-4">Advanced animations with spring physics and liquid effects</p>
      <Button variant="liquid">Try It</Button>
    </Card>
  </div>
</div>`,

			'tsconfig.json': JSON.stringify(
				{
					extends: './.svelte-kit/tsconfig.json',
					compilerOptions: {
						allowJs: true,
						checkJs: true,
						esModuleInterop: true,
						forceConsistentCasingInFileNames: true,
						resolveJsonModule: true,
						skipLibCheck: true,
						sourceMap: true,
						strict: true,
						moduleResolution: 'bundler'
					}
				},
				null,
				2
			)
		}
	},

	dashboard: {
		name: 'Dashboard Template',
		description: 'Complete dashboard with navigation, data displays, and forms',
		files: {
			// Inherits from minimal + additional dashboard files
			'src/lib/components/Dashboard.svelte': `<script>
  import { Card, Button, Input, Switch, Badge } from 'a-hackers-brand';
  
  let stats = [
    { label: 'Total Users', value: '12,345', change: '+12%', trend: 'up' },
    { label: 'Revenue', value: '$45,678', change: '+8%', trend: 'up' },
    { label: 'Conversion', value: '3.24%', change: '-2%', trend: 'down' },
    { label: 'Uptime', value: '99.9%', change: '0%', trend: 'stable' }
  ];
</script>

<div class="p-6 space-y-6">
  <header class="flex justify-between items-center">
    <div>
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <p class="text-white/70">Welcome back, hacker</p>
    </div>
    <Button variant="glass">
      + New Project
    </Button>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each stats as stat}
      <Card variant="glass" class="p-4">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-white/70">{stat.label}</p>
            <p class="text-2xl font-bold">{stat.value}</p>
          </div>
          <Badge variant={stat.trend === 'up' ? 'success' : stat.trend === 'down' ? 'error' : 'default'}>
            {stat.change}
          </Badge>
        </div>
      </Card>
    {/each}
  </div>
</div>`
		}
	},

	portfolio: {
		name: 'Portfolio Template',
		description: 'Stunning portfolio site with 3D effects and animations',
		files: {
			// Inherits from minimal + portfolio-specific files
			'src/lib/components/Hero.svelte': `<script>
  import { Button } from 'a-hackers-brand';
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <div class="text-center z-10">
    <h1 class="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
      HACKER
    </h1>
    <p class="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
      Crafting digital experiences with liquid glass aesthetics and terminal precision
    </p>
    <div class="flex gap-4 justify-center">
      <Button variant="glass" size="lg">View Work</Button>
      <Button variant="terminal" size="lg">Contact</Button>
    </div>
  </div>
  
  <!-- Animated background grid -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
    {#if mounted}
      <div class="grid-pattern animate-pulse"></div>
    {/if}
  </div>
</section>

<style>
  .grid-pattern {
    background-image: 
      linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    width: 100%;
    height: 100%;
  }
</style>`
		}
	}
};

// Project creation functions
async function createProject(projectName, options = {}) {
	const { template = 'minimal', typescript = true, demo = false, verbose = false } = options;

	if (existsSync(projectName)) {
		error(`Directory "${projectName}" already exists!`);
		process.exit(1);
	}

	const spinner = new Spinner(`Creating project "${projectName}"...`);
	spinner.start();

	try {
		// Create project directory
		mkdirSync(projectName, { recursive: true });

		// Get template
		const templateConfig = templates[template];
		if (!templateConfig) {
			throw new Error(`Template "${template}" not found`);
		}

		// Create files
		for (const [filePath, content] of Object.entries(templateConfig.files)) {
			const fullPath = join(projectName, filePath);
			const dir = dirname(fullPath);

			if (!existsSync(dir)) {
				mkdirSync(dir, { recursive: true });
			}

			const fileContent = typeof content === 'function' ? content(projectName) : content;
			writeFileSync(fullPath, fileContent);
		}

		// Add demo components if requested
		if (demo) {
			await addDemoComponents(projectName);
		}

		spinner.stop('🎉', `Project "${projectName}" created successfully!`);

		// Post-creation instructions
		console.log('\n' + '='.repeat(60));
		success("Your A Hacker's Brand project is ready! 🚀");
		console.log('='.repeat(60));

		info('Next steps:');
		console.log(`  ${colors.dim}cd ${projectName}${colors.reset}`);

		if (!options.skipInstall) {
			console.log(`  ${colors.dim}npm install${colors.reset}`);
		}

		console.log(`  ${colors.dim}npm run dev${colors.reset}`);
		console.log('');

		info('Available templates:');
		Object.entries(templates).forEach(([key, config]) => {
			console.log(`  ${colors.cyan}${key}${colors.reset} - ${config.description}`);
		});

		console.log('');
		info('Learn more:');
		console.log('  📖 Documentation: https://github.com/your-org/a-hackers-brand');
		console.log('  💬 Discord: https://discord.gg/hackers-brand');
		console.log('  🐛 Issues: https://github.com/your-org/a-hackers-brand/issues');
	} catch (err) {
		spinner.fail(`Failed to create project: ${err.message}`);
		process.exit(1);
	}
}

async function addDemoComponents(projectName) {
	const demoComponents = {
		'src/lib/components/AnimatedBackground.svelte': `<script>
  import { onMount } from 'svelte';
  
  let canvas;
  let ctx;
  let particles = [];
  
  onMount(() => {
    ctx = canvas.getContext('2d');
    initParticles();
    animate();
  });
  
  function initParticles() {
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: Math.random()
      });
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.01;
      
      if (particle.life <= 0) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.life = 1;
      }
      
      ctx.globalAlpha = particle.life;
      ctx.fillStyle = '#00d4aa';
      ctx.fillRect(particle.x, particle.y, 2, 2);
    });
    
    requestAnimationFrame(animate);
  }
</script>

<canvas 
  bind:this={canvas}
  width="800" 
  height="600"
  class="absolute inset-0 w-full h-full opacity-30"
></canvas>`,

		'src/lib/components/TerminalWindow.svelte': `<script>
  import { onMount } from 'svelte';
  
  export let commands = [
    '> initializing A Hacker\\'s Brand system...',
    '> loading liquid glass components...',
    '> establishing terminal connection...',
    '> system ready. welcome, hacker.'
  ];
  
  let displayedCommands = [];
  let currentIndex = 0;
  
  onMount(() => {
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        displayedCommands = [...displayedCommands, commands[currentIndex]];
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  });
</script>

<div class="bg-black/80 rounded-lg border border-green-500/30 p-4 font-mono text-sm">
  <div class="flex items-center gap-2 mb-4 border-b border-green-500/20 pb-2">
    <div class="w-3 h-3 rounded-full bg-red-500"></div>
    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="w-3 h-3 rounded-full bg-green-500"></div>
    <span class="text-green-400 ml-2">terminal@hackers-brand</span>
  </div>
  
  {#each displayedCommands as command}
    <div class="text-green-400 mb-1">
      {command}
      <span class="animate-pulse">|</span>
    </div>
  {/each}
</div>`
	};

	for (const [filePath, content] of Object.entries(demoComponents)) {
		const fullPath = join(projectName, filePath);
		const dir = dirname(fullPath);

		if (!existsSync(dir)) {
			mkdirSync(dir, { recursive: true });
		}

		writeFileSync(fullPath, content);
	}
}

// Help text
function showHelp() {
	console.log(banner);
	console.log(`
${colors.bright}USAGE${colors.reset}
  ${colors.green}npx create-hackers-brand${colors.reset} ${colors.cyan}<project-name>${colors.reset} ${colors.dim}[options]${colors.reset}

${colors.bright}OPTIONS${colors.reset}
  ${colors.cyan}--template=<name>${colors.reset}    Choose template (minimal, dashboard, portfolio)
  ${colors.cyan}--typescript${colors.reset}         Enable TypeScript (default: true)
  ${colors.cyan}--demo${colors.reset}               Include demo components
  ${colors.cyan}--skip-install${colors.reset}       Skip npm install
  ${colors.cyan}--verbose${colors.reset}            Verbose output
  ${colors.cyan}--help, -h${colors.reset}           Show this help

${colors.bright}EXAMPLES${colors.reset}
  ${colors.dim}# Create a minimal project${colors.reset}
  ${colors.green}npx create-hackers-brand${colors.reset} ${colors.cyan}my-app${colors.reset}

  ${colors.dim}# Create a dashboard with demo components${colors.reset}
  ${colors.green}npx create-hackers-brand${colors.reset} ${colors.cyan}my-dashboard${colors.reset} ${colors.yellow}--template=dashboard --demo${colors.reset}

  ${colors.dim}# Create a portfolio site${colors.reset}
  ${colors.green}npx create-hackers-brand${colors.reset} ${colors.cyan}my-portfolio${colors.reset} ${colors.yellow}--template=portfolio${colors.reset}

${colors.bright}TEMPLATES${colors.reset}
  ${colors.cyan}minimal${colors.reset}     - Basic SvelteKit setup with core components
  ${colors.cyan}dashboard${colors.reset}   - Complete dashboard with data visualization
  ${colors.cyan}portfolio${colors.reset}   - Portfolio site with 3D effects and animations

${colors.dim}For more information, visit: https://github.com/your-org/a-hackers-brand${colors.reset}
`);
}

// Interactive mode
async function interactiveMode() {
	console.log(banner);

	const projectName = await prompt('Project name', 'my-hackers-app');

	if (!projectName) {
		error('Project name is required!');
		process.exit(1);
	}

	const template = await select('Choose a template:', [
		{ name: 'minimal', description: 'Basic SvelteKit setup with core components' },
		{ name: 'dashboard', description: 'Complete dashboard with data visualization' },
		{ name: 'portfolio', description: 'Portfolio site with 3D effects and animations' }
	]);

	const includDemo = await confirm('Include demo components?', false);
	const skipInstall = await confirm('Skip npm install?', false);

	console.log('\n' + '='.repeat(60));
	info('Configuration:');
	console.log(`  ${colors.dim}Project:${colors.reset} ${projectName}`);
	console.log(`  ${colors.dim}Template:${colors.reset} ${template.name}`);
	console.log(`  ${colors.dim}Demo components:${colors.reset} ${includDemo ? 'Yes' : 'No'}`);
	console.log(`  ${colors.dim}Skip install:${colors.reset} ${skipInstall ? 'Yes' : 'No'}`);
	console.log('='.repeat(60) + '\n');

	const proceed = await confirm('Create project?', true);

	if (!proceed) {
		warn('Project creation cancelled.');
		process.exit(0);
	}

	await createProject(projectName, {
		template: template.name,
		demo: includDemo,
		skipInstall
	});
}

// Main execution
async function main() {
	const args = parseArgs();

	if (args.help) {
		showHelp();
		return;
	}

	if (!args.projectName) {
		await interactiveMode();
		return;
	}

	await createProject(args.projectName, args.flags);
}

// Error handling
process.on('uncaughtException', (err) => {
	error(`Unexpected error: ${err.message}`);
	process.exit(1);
});

process.on('unhandledRejection', (err) => {
	error(`Unhandled promise rejection: ${err.message}`);
	process.exit(1);
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
	console.log('\n');
	warn('Operation cancelled by user.');
	process.exit(0);
});

// Run the CLI
main().catch((err) => {
	error(`CLI error: ${err.message}`);
	process.exit(1);
});
