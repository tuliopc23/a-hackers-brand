<script lang="ts">
	import { onMount } from 'svelte';
	import { ProjectCard, TechStack, ContactForm, Avatar, Stats } from '$lib/components/index.js';
	import { breathing } from '$lib/motion/index.js';

	// Sample data for the components
	const projects = [
		{
			title: 'A Hacker\'s Brand',
			description: 'Professional liquid glass terminal fusion design system with 40+ components',
			tech: ['Svelte 5', 'TypeScript', 'Tailwind CSS', 'Vite', 'Threlte'],
			status: 'active' as const,
			githubUrl: 'https://github.com/tuliopc23/a-hackers-brand',
			liveUrl: 'https://hackers-brand.dev',
			featured: true
		},
		{
			title: 'Terminal Portfolio',
			description: 'Interactive CLI-style portfolio showcasing development skills',
			tech: ['React', 'Next.js', 'Framer Motion', 'Vercel'],
			status: 'completed' as const,
			githubUrl: 'https://github.com/tuliopc23/terminal-portfolio',
			liveUrl: 'https://terminal.tuliopc.dev'
		},
		{
			title: 'Liquid Glass UI',
			description: 'Experimental UI library with liquid glass morphism effects',
			tech: ['Vue 3', 'TypeScript', 'GSAP', 'WebGL'],
			status: 'in-progress' as const,
			githubUrl: 'https://github.com/tuliopc23/liquid-glass-ui'
		}
	];

	const technologies = [
		{ name: 'TypeScript', category: 'languages' as const, proficiency: 95, icon: '🔷', color: 'blue' as const, yearsExperience: 4 },
		{ name: 'JavaScript', category: 'languages' as const, proficiency: 98, icon: '🟨', color: 'yellow' as const, yearsExperience: 6 },
		{ name: 'Python', category: 'languages' as const, proficiency: 85, icon: '🐍', color: 'green' as const, yearsExperience: 3 },
		{ name: 'Svelte', category: 'frontend' as const, proficiency: 92, icon: '🧡', color: 'red' as const, yearsExperience: 2 },
		{ name: 'React', category: 'frontend' as const, proficiency: 90, icon: '⚛️', color: 'cyan' as const, yearsExperience: 4 },
		{ name: 'Vue.js', category: 'frontend' as const, proficiency: 80, icon: '💚', color: 'green' as const, yearsExperience: 2 },
		{ name: 'Node.js', category: 'backend' as const, proficiency: 88, icon: '🟢', color: 'green' as const, yearsExperience: 4 },
		{ name: 'PostgreSQL', category: 'database' as const, proficiency: 82, icon: '🐘', color: 'blue' as const, yearsExperience: 3 },
		{ name: 'Docker', category: 'devops' as const, proficiency: 85, icon: '🐳', color: 'cyan' as const, yearsExperience: 3 },
		{ name: 'AWS', category: 'devops' as const, proficiency: 75, icon: '☁️', color: 'yellow' as const, yearsExperience: 2 },
		{ name: 'Git', category: 'tools' as const, proficiency: 95, icon: '📚', color: 'red' as const, yearsExperience: 6 },
		{ name: 'VS Code', category: 'tools' as const, proficiency: 98, icon: '💙', color: 'blue' as const, yearsExperience: 5 }
	];

	const stats = [
		{ label: 'Projects Completed', value: 47, icon: '🚀', color: 'green' as const, trend: 'up' as const, description: 'Personal & client projects' },
		{ label: 'GitHub Commits', value: 2847, icon: '📝', color: 'cyan' as const, trend: 'up' as const, description: 'This year' },
		{ label: 'Code Quality', value: 94, unit: '%', icon: '✨', color: 'yellow' as const, trend: 'stable' as const, description: 'Average test coverage' },
		{ label: 'Client Satisfaction', value: 98, unit: '%', icon: '⭐', color: 'purple' as const, trend: 'up' as const, description: 'Based on feedback' },
		{ label: 'Response Time', value: '< 2h', icon: '⚡', color: 'blue' as const, description: 'Average email response' },
		{ label: 'Uptime', value: '99.9%', icon: '🔄', color: 'green' as const, description: 'Service availability' }
	];

	async function handleContactSubmit(data: any) {
		// Simulate form submission
		console.log('Contact form submitted:', data);
		
		// In a real app, you'd send this to your backend
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		// Could throw an error to test error handling
		// throw new Error('Network error');
	}

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>CLI Portfolio Showcase - A Hacker's Brand</title>
	<meta name="description" content="Interactive CLI-style portfolio components with terminal aesthetics" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
	<!-- Hero Section -->
	<section class="relative overflow-hidden py-20">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
		
		<div class="container mx-auto px-6 relative z-10">
			<div class="text-center mb-16">
				<h1 
					class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
					use:breathing={{ scale: [1, 1.02], duration: 3000 }}
				>
					CLI Portfolio
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto font-mono">
					Interactive terminal-style components for showcasing your development skills with authentic CLI aesthetics
				</p>
			</div>

			<!-- Avatar Section -->
			<div class="flex justify-center mb-16">
				<div class="w-full max-w-md">
					<Avatar 
						name="Tulio Cunha"
						title="Full Stack Developer"
						status="online"
						size="xl"
						animated={mounted}
						interactive={true}
						showTerminal={true}
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8 font-mono">
				<span class="text-cyan-400">$</span> ls -la projects/
			</h2>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{#each projects as project}
					<ProjectCard 
						title={project.title}
						description={project.description}
						tech={project.tech}
						status={project.status}
						githubUrl={project.githubUrl}
						liveUrl={project.liveUrl}
						featured={project.featured}
						animated={mounted}
						interactive={true}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8 font-mono">
				<span class="text-cyan-400">$</span> cat tech-stack.json
			</h2>
			
			<TechStack 
				technologies={technologies}
				title="Tech Stack"
				animated={mounted}
				interactive={true}
				showProficiency={true}
				showCategories={true}
			/>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8 font-mono">
				<span class="text-cyan-400">$</span> htop
			</h2>
			
			<Stats 
				{stats}
				title="Performance Metrics"
				animated={mounted}
				interactive={true}
				realTime={false}
			/>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8 font-mono">
				<span class="text-cyan-400">$</span> ./contact.sh
			</h2>
			
			<div class="max-w-2xl mx-auto">
				<ContactForm 
					title="Contact Terminal"
					animated={mounted}
					interactive={true}
					onSubmit={handleContactSubmit}
				/>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="py-12 border-t border-white/10">
		<div class="container mx-auto px-6">
			<div class="text-center">
				<p class="text-white/60 font-mono text-sm">
					<span class="text-cyan-400">$</span> echo "Built with A Hacker's Brand Design System"
				</p>
				<p class="text-white/40 font-mono text-xs mt-2">
					© 2024 Tulio Cunha. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
	/* Custom animations for the showcase */
	@keyframes matrix-rain {
		0% { transform: translateY(-100vh); opacity: 0; }
		10% { opacity: 1; }
		90% { opacity: 1; }
		100% { transform: translateY(100vh); opacity: 0; }
	}

	/* Terminal-style selection */
	::selection {
		background: rgba(6, 182, 212, 0.3);
		color: white;
	}

	/* Scrollbar styling */
	:global(html) {
		scrollbar-width: thin;
		scrollbar-color: rgba(6, 182, 212, 0.5) rgba(0, 0, 0, 0.1);
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: rgba(0, 0, 0, 0.1);
	}

	:global(::-webkit-scrollbar-thumb) {
		background: rgba(6, 182, 212, 0.5);
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: rgba(6, 182, 212, 0.7);
	}
</style>
