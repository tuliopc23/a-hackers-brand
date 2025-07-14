<script lang="ts">
	import { ProjectCard, Card, CodeHighlight } from '$lib/components/index.js';
	import { breathing } from '$lib/motion/index.js';

	// Example data
	const exampleProject = {
		title: 'A Hacker\'s Brand',
		description: 'Professional liquid glass terminal fusion design system with 40+ components',
		tech: ['Svelte 5', 'TypeScript', 'Tailwind CSS', 'Vite', 'Threlte'],
		status: 'active' as const,
		githubUrl: 'https://github.com/tuliopc23/a-hackers-brand',
		liveUrl: 'https://hackers-brand.dev',
		featured: true
	};

	const basicUsage = `<script>
  import { ProjectCard } from 'a-hackers-brand';
</script>

<ProjectCard 
  title="My Awesome Project"
  description="A revolutionary web application"
  tech={['React', 'TypeScript', 'Node.js']}
  status="completed"
  githubUrl="https://github.com/user/project"
  liveUrl="https://project.com"
/>`;

	const advancedUsage = `<ProjectCard 
  title="Featured Project"
  description="This project showcases advanced features"
  tech={['Svelte', 'WebGL', 'Three.js', 'TypeScript']}
  status="active"
  githubUrl="https://github.com/user/featured-project"
  liveUrl="https://featured-project.com"
  imageUrl="/project-screenshot.png"
  featured={true}
  animated={true}
  interactive={true}
  class="custom-styling"
/>`;

	const propsData = [
		{ name: 'title', type: 'string', required: true, description: 'Project title' },
		{ name: 'description', type: 'string', required: true, description: 'Project description' },
		{ name: 'tech', type: 'string[]', required: true, description: 'Array of technologies used' },
		{ name: 'status', type: "'active' | 'completed' | 'archived' | 'in-progress'", required: true, description: 'Project status' },
		{ name: 'githubUrl', type: 'string', required: false, description: 'GitHub repository URL' },
		{ name: 'liveUrl', type: 'string', required: false, description: 'Live demo URL' },
		{ name: 'imageUrl', type: 'string', required: false, description: 'Project screenshot URL' },
		{ name: 'featured', type: 'boolean', required: false, description: 'Whether project is featured' },
		{ name: 'animated', type: 'boolean', required: false, description: 'Enable animations' },
		{ name: 'interactive', type: 'boolean', required: false, description: 'Enable interactive terminal' },
		{ name: 'class', type: 'string', required: false, description: 'Additional CSS classes' }
	];
</script>

<svelte:head>
	<title>ProjectCard - A Hacker's Brand</title>
	<meta name="description" content="CLI-style project showcase component with interactive terminal" />
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
					ProjectCard
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto">
					CLI-style project showcase component with interactive terminal, perfect for developer portfolios
				</p>
			</div>
		</div>
	</section>

	<!-- Live Example -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Live Example</h2>
			
			<div class="max-w-md mx-auto">
				<ProjectCard 
					title={exampleProject.title}
					description={exampleProject.description}
					tech={exampleProject.tech}
					status={exampleProject.status}
					githubUrl={exampleProject.githubUrl}
					liveUrl={exampleProject.liveUrl}
					featured={exampleProject.featured}
					animated={true}
					interactive={true}
				/>
			</div>
		</div>
	</section>

	<!-- Usage Examples -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Usage Examples</h2>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<Card variant="glass" class="p-6">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">Basic Usage</h3>
					<CodeHighlight code={basicUsage} language="svelte" />
				</Card>

				<Card variant="glass" class="p-6">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">Advanced Usage</h3>
					<CodeHighlight code={advancedUsage} language="svelte" />
				</Card>
			</div>
		</div>
	</section>

	<!-- Props Documentation -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Props</h2>
			
			<Card variant="glass" class="overflow-hidden">
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-white/5">
							<tr>
								<th class="text-left p-4 text-cyan-400 font-mono">Name</th>
								<th class="text-left p-4 text-cyan-400 font-mono">Type</th>
								<th class="text-left p-4 text-cyan-400 font-mono">Required</th>
								<th class="text-left p-4 text-cyan-400 font-mono">Description</th>
							</tr>
						</thead>
						<tbody>
							{#each propsData as prop}
								<tr class="border-t border-white/10">
									<td class="p-4 text-white font-mono text-sm">{prop.name}</td>
									<td class="p-4 text-purple-400 font-mono text-sm">{prop.type}</td>
									<td class="p-4 text-center">
										{#if prop.required}
											<span class="text-red-400">✓</span>
										{:else}
											<span class="text-gray-400">-</span>
										{/if}
									</td>
									<td class="p-4 text-white/80 text-sm">{prop.description}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</Card>
		</div>
	</section>

	<!-- Features -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Features</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">💻</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Interactive Terminal</h3>
					<p class="text-white/80 text-sm">Built-in terminal with project-specific commands</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">🎨</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Status Indicators</h3>
					<p class="text-white/80 text-sm">Visual status with colors and icons</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">⚡</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Magnetic Hover</h3>
					<p class="text-white/80 text-sm">Smooth magnetic hover effects</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">🔗</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Quick Actions</h3>
					<p class="text-white/80 text-sm">Direct links to GitHub and live demos</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">🏷️</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Tech Stack Display</h3>
					<p class="text-white/80 text-sm">Beautiful tech stack visualization</p>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<div class="text-4xl mb-4">♿</div>
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Accessible</h3>
					<p class="text-white/80 text-sm">Full keyboard navigation support</p>
				</Card>
			</div>
		</div>
	</section>

	<!-- Related Components -->
	<section class="py-16">
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold text-white mb-8">Related Components</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card variant="glass" class="p-6 text-center">
					<h3 class="text-lg font-bold text-cyan-400 mb-2">TechStack</h3>
					<p class="text-white/80 text-sm mb-4">Display technologies with proficiency levels</p>
					<a href="/docs/components/techstack" class="text-cyan-400 hover:text-cyan-300 font-mono text-sm">
						View Docs →
					</a>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Avatar</h3>
					<p class="text-white/80 text-sm mb-4">Personal profile with CLI aesthetics</p>
					<a href="/docs/components/avatar" class="text-cyan-400 hover:text-cyan-300 font-mono text-sm">
						View Docs →
					</a>
				</Card>

				<Card variant="glass" class="p-6 text-center">
					<h3 class="text-lg font-bold text-cyan-400 mb-2">Stats</h3>
					<p class="text-white/80 text-sm mb-4">Performance metrics and statistics</p>
					<a href="/docs/components/stats" class="text-cyan-400 hover:text-cyan-300 font-mono text-sm">
						View Docs →
					</a>
				</Card>
			</div>
		</div>
	</section>
</div>
