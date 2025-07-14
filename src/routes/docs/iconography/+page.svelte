<script>
	import { onMount } from 'svelte';
	import { GlassCard, GlassButton } from '$lib/components/liquidify';
	import { magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	// Lucide icons for the iconography system
	import {
		Terminal,
		Monitor,
		Code,
		Command,
		Zap,
		Settings,
		GitBranch,
		Database,
		Search,
		Filter,
		Eye,
		EyeOff,
		Lock,
		Unlock,
		Shield,
		Key,
		Play,
		Pause,
		Square,
		SkipForward,
		SkipBack,
		Volume2,
		VolumeX,
		Upload,
		Download,
		Save,
		Trash2,
		Edit3,
		Copy,
		Share,
		ChevronLeft,
		ChevronRight,
		ChevronUp,
		ChevronDown,
		ArrowLeft,
		ArrowRight,
		Plus,
		Minus,
		X,
		Check,
		AlertTriangle,
		Info,
		CheckCircle,
		XCircle,
		Home,
		Folder,
		File,
		FileText,
		Image,
		Video,
		Music,
		Users,
		User,
		Mail,
		Phone,
		Calendar,
		Clock,
		Globe,
		Heart,
		Star,
		Bookmark,
		Flag,
		Tag,
		Hash,
		Wifi,
		WifiOff,
		Battery,
		BatteryLow,
		Signal,
		SignalLow,
		Sun,
		Moon,
		CloudRain,
		CloudSnow
	} from 'lucide-svelte';

	// Lazy load WebGL background
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));

	let mounted = $state(false);
	let selectedCategory = $state('overview');
	let copiedIcon = $state(null);

	// Icon categories with SF Symbols-inspired organization
	const iconCategories = {
		overview: {
			title: 'Overview',
			description: 'Icon system principles and implementation guidelines',
			icon: '⚡'
		},
		communication: {
			title: 'Communication',
			description: 'Icons for messaging, calls, and social interactions',
			icon: '💬'
		},
		navigation: {
			title: 'Navigation',
			description: 'Directional and movement indicators',
			icon: '🧭'
		},
		actions: {
			title: 'Actions',
			description: 'Interactive elements and user actions',
			icon: '⚡'
		},
		media: {
			title: 'Media',
			description: 'Audio, video, and multimedia controls',
			icon: '🎵'
		},
		files: {
			title: 'Files & Data',
			description: 'File management and data representation',
			icon: '📁'
		},
		security: {
			title: 'Security',
			description: 'Authentication, encryption, and privacy',
			icon: '🔒'
		},
		system: {
			title: 'System',
			description: 'Device status, connectivity, and system controls',
			icon: '⚙️'
		},
		terminal: {
			title: 'Terminal & CLI',
			description: 'Command line interface and developer tools',
			icon: '💻'
		},
		indicators: {
			title: 'Indicators',
			description: 'Status indicators, alerts, and notifications',
			icon: '🔔'
		}
	};

	// Icon collections with hacker/CLI theming
	const iconCollections = {
		terminal: [
			{ component: Terminal, name: 'Terminal', usage: 'Terminal windows, CLI interfaces' },
			{ component: Monitor, name: 'Monitor', usage: 'Display, screen, output devices' },
			{ component: Code, name: 'Code', usage: 'Code blocks, programming contexts' },
			{ component: Command, name: 'Command', usage: 'Command prompts, shortcuts' },
			{ component: GitBranch, name: 'GitBranch', usage: 'Version control, branching' },
			{ component: Database, name: 'Database', usage: 'Data storage, servers' }
		],
		communication: [
			{ component: Mail, name: 'Mail', usage: 'Email, messaging systems' },
			{ component: Phone, name: 'Phone', usage: 'Voice calls, contact information' },
			{ component: Users, name: 'Users', usage: 'Groups, teams, collaboration' },
			{ component: User, name: 'User', usage: 'Individual users, profiles' },
			{ component: Share, name: 'Share', usage: 'Sharing content, distribution' },
			{ component: Globe, name: 'Globe', usage: 'Web, internet, global connections' }
		],
		navigation: [
			{ component: ChevronLeft, name: 'ChevronLeft', usage: 'Previous, back navigation' },
			{ component: ChevronRight, name: 'ChevronRight', usage: 'Next, forward navigation' },
			{ component: ChevronUp, name: 'ChevronUp', usage: 'Upward movement, collapse' },
			{ component: ChevronDown, name: 'ChevronDown', usage: 'Downward movement, expand' },
			{ component: ArrowLeft, name: 'ArrowLeft', usage: 'Strong directional cues' },
			{ component: ArrowRight, name: 'ArrowRight', usage: 'Strong directional cues' }
		],
		actions: [
			{ component: Plus, name: 'Plus', usage: 'Add, create, expand functionality' },
			{ component: Minus, name: 'Minus', usage: 'Remove, delete, collapse' },
			{ component: Edit3, name: 'Edit3', usage: 'Modify, update content' },
			{ component: Copy, name: 'Copy', usage: 'Duplicate, clipboard operations' },
			{ component: Save, name: 'Save', usage: 'Persist data, download' },
			{ component: Trash2, name: 'Trash2', usage: 'Delete, remove permanently' }
		],
		media: [
			{ component: Play, name: 'Play', usage: 'Start playback, execute' },
			{ component: Pause, name: 'Pause', usage: 'Pause playback, interrupt' },
			{ component: Square, name: 'Square', usage: 'Stop playback, terminate' },
			{ component: Volume2, name: 'Volume2', usage: 'Audio enabled, sound on' },
			{ component: VolumeX, name: 'VolumeX', usage: 'Audio muted, sound off' },
			{ component: Upload, name: 'Upload', usage: 'Upload files, send data' }
		],
		files: [
			{ component: Folder, name: 'Folder', usage: 'Directories, collections' },
			{ component: File, name: 'File', usage: 'Generic files, documents' },
			{ component: FileText, name: 'FileText', usage: 'Text documents, scripts' },
			{ component: Image, name: 'Image', usage: 'Images, graphics, visual media' },
			{ component: Video, name: 'Video', usage: 'Video files, recordings' },
			{ component: Music, name: 'Music', usage: 'Audio files, music tracks' }
		],
		security: [
			{ component: Lock, name: 'Lock', usage: 'Secured, encrypted, private' },
			{ component: Unlock, name: 'Unlock', usage: 'Accessible, unlocked' },
			{ component: Shield, name: 'Shield', usage: 'Protection, security features' },
			{ component: Key, name: 'Key', usage: 'Authentication, access keys' },
			{ component: Eye, name: 'Eye', usage: 'Visible, show password' },
			{ component: EyeOff, name: 'EyeOff', usage: 'Hidden, hide password' }
		],
		system: [
			{ component: Settings, name: 'Settings', usage: 'Configuration, preferences' },
			{ component: Wifi, name: 'Wifi', usage: 'Network connected' },
			{ component: WifiOff, name: 'WifiOff', usage: 'Network disconnected' },
			{ component: Battery, name: 'Battery', usage: 'Power level, energy' },
			{ component: Signal, name: 'Signal', usage: 'Connection strength' },
			{ component: Sun, name: 'Sun', usage: 'Light theme, day mode' }
		],
		indicators: [
			{ component: Check, name: 'Check', usage: 'Success, completed, valid' },
			{ component: X, name: 'X', usage: 'Close, cancel, invalid' },
			{ component: AlertTriangle, name: 'AlertTriangle', usage: 'Warning, caution' },
			{ component: Info, name: 'Info', usage: 'Information, help' },
			{ component: CheckCircle, name: 'CheckCircle', usage: 'Success state, verified' },
			{ component: XCircle, name: 'XCircle', usage: 'Error state, failed' }
		]
	};

	// Size specifications (inspired by SF Symbols)
	const iconSizes = [
		{ name: 'xs', size: '12px', rem: '0.75rem', usage: 'Dense interfaces, badges' },
		{ name: 'sm', size: '16px', rem: '1rem', usage: 'Standard interface icons' },
		{ name: 'md', size: '20px', rem: '1.25rem', usage: 'Primary interface elements' },
		{ name: 'lg', size: '24px', rem: '1.5rem', usage: 'Headers, emphasized elements' },
		{ name: 'xl', size: '32px', rem: '2rem', usage: 'Hero sections, large displays' },
		{ name: '2xl', size: '48px', rem: '3rem', usage: 'Splash screens, major features' }
	];

	// Design principles inspired by SF Symbols
	const designPrinciples = [
		{
			title: 'Terminal Authenticity',
			description: 'Icons maintain the raw, technical aesthetic of command-line interfaces',
			details: 'Sharp edges, monospace alignment, and technical precision'
		},
		{
			title: 'Glass Morphism',
			description: 'Icons work harmoniously with glass surfaces and blur effects',
			details: 'Optimized contrast ratios and visual weight for layered interfaces'
		},
		{
			title: 'Liquid Responsiveness',
			description: 'Icons adapt fluidly to different contexts and interaction states',
			details: 'Smooth scaling, hover effects, and magnetic interactions'
		},
		{
			title: 'Semantic Clarity',
			description: 'Clear, universally understood symbols with consistent metaphors',
			details: 'Familiar shapes with hacker culture references where appropriate'
		}
	];

	onMount(() => {
		mounted = true;

		// Apply magnetic hover effects
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach((el) => magneticHover(el));
	});

	// Copy icon code to clipboard
	const copyIconCode = async (iconName) => {
		const code = `import { ${iconName} } from 'lucide-svelte';\n\n<${iconName} size={20} class="text-terminal-green" />`;
		try {
			await navigator.clipboard.writeText(code);
			copiedIcon = iconName;
			setTimeout(() => (copiedIcon = null), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

<svelte:head>
	<title>Iconography - A Hacker's Brand Design System</title>
	<meta
		name="description"
		content="Icon system combining SF Symbols principles with CLI aesthetics and liquid glass design"
	/>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
>
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="absolute inset-0 opacity-10">
			<LazyLiquidBackground.component />
		</div>
	{/if}

	<!-- Navigation -->
	<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-xl font-bold text-white">A Hacker's Brand</h1>
				</div>
				<div class="text-sm text-white/70">Iconography</div>
			</div>
		</div>
	</nav>

	<!-- Header -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1
					class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
				>
					Iconography System
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					SF Symbols-inspired icons with CLI aesthetics and liquid glass integration. Every icon tells a story in the
					language of hackers and terminal interfaces.
				</p>
			</div>

			<!-- Category Navigation -->
			<div class="flex flex-wrap justify-center gap-3 mb-12">
				{#each Object.entries(iconCategories) as [key, category]}
					<button
						class="px-4 py-2 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm flex items-center space-x-2 {selectedCategory ===
						key
							? 'bg-blue-500/20 border-blue-500/30'
							: ''}"
						onclick={() => (selectedCategory = key)}
						data-magnetic
					>
						<span>{category.icon}</span>
						<span>{category.title}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Content Sections -->
	<section class="relative z-10 py-8 px-6">
		<div class="max-w-7xl mx-auto">
			{#if selectedCategory === 'overview'}
				<!-- Overview Section -->
				<div class="space-y-12">
					<!-- Design Principles -->
					<GlassCard intensity="light" class="p-8">
						<h2 class="text-3xl font-bold mb-6">Design Principles</h2>
						<div class="grid md:grid-cols-2 gap-8">
							{#each designPrinciples as principle (principle.id || principle)}
								<div class="space-y-3">
									<h3 class="text-xl font-semibold text-terminal-cyan">{principle.title}</h3>
									<p class="text-white/80">{principle.description}</p>
									<p class="text-sm text-white/60">{principle.details}</p>
								</div>
							{/each}
						</div>
					</GlassCard>

					<!-- Size Scale -->
					<GlassCard intensity="light" class="p-8">
						<h2 class="text-3xl font-bold mb-6">Size Scale</h2>
						<p class="text-white/70 mb-8">
							Our icon sizing follows a consistent scale that ensures optimal readability and visual hierarchy across
							all interface elements.
						</p>

						<div class="space-y-4">
							{#each iconSizes as size (size.id || size)}
								<div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-white/10">
									<div class="flex items-center space-x-6">
										<div class="w-16 text-terminal-cyan font-mono text-sm">{size.name}</div>
										<div
											class="flex items-center justify-center bg-terminal-green/20 rounded-lg border border-terminal-green/30"
											style="width: {size.size}; height: {size.size};"
										>
											<Terminal size={parseInt(size.size)} class="text-terminal-green" />
										</div>
										<div class="text-sm">
											<div class="font-mono text-white">{size.size} / {size.rem}</div>
											<div class="text-white/60">{size.usage}</div>
										</div>
									</div>
									<code class="text-xs text-terminal-cyan font-mono">size={parseInt(size.size)}</code>
								</div>
							{/each}
						</div>
					</GlassCard>

					<!-- Implementation Guide -->
					<GlassCard intensity="light" class="p-8">
						<h2 class="text-3xl font-bold mb-6">Implementation</h2>
						<div class="space-y-6">
							<div>
								<h3 class="text-xl font-semibold mb-3 text-terminal-green">Basic Usage</h3>
								<CodeBlock
									code={`import { Terminal, Code, Settings } from 'lucide-svelte';

<Terminal size={20} class="text-terminal-green" />
<Code size={24} class="text-white/80" />
<Settings size={16} class="text-blue-400" />`}
									language="svelte"
								/>
							</div>

							<div>
								<h3 class="text-xl font-semibold mb-3 text-terminal-purple">With Liquid Glass Effects</h3>
								<CodeBlock
									code={`<div class="glass-subtle p-3 rounded-lg">
  <Terminal 
    size={24} 
    class="text-terminal-green drop-shadow-lg" 
    style="filter: drop-shadow(0 0 8px rgba(0,255,65,0.4))"
  />
</div>`}
									language="svelte"
								/>
							</div>

							<div>
								<h3 class="text-xl font-semibold mb-3 text-terminal-cyan">Interactive States</h3>
								<CodeBlock
									code={`<button class="group p-2 hover:bg-white/10 rounded-lg transition-all">
  <Command 
    size={20} 
    class="text-white/70 group-hover:text-terminal-cyan group-hover:scale-110 transition-all" 
  />
</button>`}
									language="svelte"
								/>
							</div>
						</div>
					</GlassCard>
				</div>
			{:else}
				<!-- Icon Category Display -->
				<div class="space-y-8">
					<div class="text-center">
						<h2 class="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
							<span class="text-2xl">{iconCategories[selectedCategory].icon}</span>
							<span>{iconCategories[selectedCategory].title}</span>
						</h2>
						<p class="text-lg text-white/70 max-w-2xl mx-auto">
							{iconCategories[selectedCategory].description}
						</p>
					</div>

					{#if iconCollections[selectedCategory]}
						<GlassCard intensity="light" class="p-8">
							<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
								{#each iconCollections[selectedCategory] as icon (icon.id || icon)}
									<button
										class="group p-4 rounded-xl border border-white/10 hover:border-terminal-green/30 bg-slate-800/20 hover:bg-slate-700/30 transition-all duration-300 text-center"
										onclick={() => copyIconCode(icon.name)}
										data-magnetic
										title="Click to copy code"
									>
										<div class="flex flex-col items-center space-y-3">
											<div class="relative">
												<icon.component
													size={32}
													class="text-white/80 group-hover:text-terminal-green group-hover:scale-110 transition-all duration-300"
												/>
												{#if copiedIcon === icon.name}
													<div
														class="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded"
													>
														Copied!
													</div>
												{/if}
											</div>
											<div class="space-y-1">
												<div class="font-mono text-sm text-white">{icon.name}</div>
												<div class="text-xs text-white/60 leading-tight">{icon.usage}</div>
											</div>
										</div>
									</button>
								{/each}
							</div>
						</GlassCard>
					{/if}
				</div>
			{/if}
		</div>
	</section>
</div>

<style>
	:global(.glass-subtle) {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
