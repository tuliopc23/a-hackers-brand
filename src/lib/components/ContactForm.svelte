<script lang="ts">
	import { onMount } from 'svelte';
	import { springPop, jellyHover } from '$lib/motion/index.js';
	import { cn } from '$lib/utils/index.js';

	interface FormData {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	interface Props {
		title?: string;
		animated?: boolean;
		interactive?: boolean;
		onSubmit?: (data: FormData) => Promise<void> | void;
		class?: string;
	}

	const {
		title = 'Contact Terminal',
		animated = true,
		interactive = true,
		onSubmit,
		class: className = ''
	}: Props = $props();

	let formData = $state<FormData>({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let terminalOutput = $state<string[]>([
		'Welcome to Contact Terminal v1.0.0',
		'Type "help" for available commands',
		''
	]);
	
	let currentCommand = $state('');
	let isExecuting = $state(false);
	let showCursor = $state(true);
	let currentStep = $state<keyof FormData | 'complete' | null>(null);
	let isSubmitting = $state(false);

	const fieldPrompts = {
		name: 'Enter your name:',
		email: 'Enter your email address:',
		subject: 'Enter message subject:',
		message: 'Enter your message (type "EOF" on new line to finish):'
	};

	const commands = {
		'help': () => `Available commands:
  contact     - Start contact form wizard
  status      - Show current form status
  clear       - Clear terminal
  whoami      - Show user info
  pwd         - Show current directory
  ls          - List available actions`,
		
		'contact': () => {
			currentStep = 'name';
			return 'Starting contact form wizard...\n' + fieldPrompts.name;
		},
		
		'status': () => {
			const filled = Object.entries(formData).filter(([_, value]) => value.trim() !== '').length;
			const total = Object.keys(formData).length;
			return `Form completion: ${filled}/${total} fields\n${JSON.stringify(formData, null, 2)}`;
		},
		
		'whoami': () => 'visitor@hackers-brand.dev',
		'pwd': () => '/contact',
		'ls': () => 'contact.sh  send-message.sh  validate.sh',
		'clear': () => {
			terminalOutput = ['Terminal cleared.', ''];
			return '';
		}
	};

	async function executeCommand(command: string) {
		if (isExecuting) return;
		
		isExecuting = true;
		
		// Add command to output
		terminalOutput = [...terminalOutput, `$ ${command}`];
		
		// Handle form input
		if (currentStep && currentStep !== 'complete') {
			await handleFormInput(command);
		} else {
			// Handle regular commands
			const output = commands[command as keyof typeof commands]?.() || `command not found: ${command}`;
			if (output) {
				terminalOutput = [...terminalOutput, output, ''];
			}
		}
		
		currentCommand = '';
		isExecuting = false;
	}

	async function handleFormInput(input: string) {
		if (!currentStep || currentStep === 'complete') return;

		if (currentStep === 'message' && input === 'EOF') {
			// Finish message input
			currentStep = 'complete';
			terminalOutput = [...terminalOutput, 'Message completed.', '', 'Form ready for submission. Type "send" to submit or "edit" to modify.', ''];
			return;
		}

		// Update form data
		if (currentStep === 'message') {
			formData.message += (formData.message ? '\n' : '') + input;
			terminalOutput = [...terminalOutput, `> ${input}`];
		} else {
			formData[currentStep] = input;
			terminalOutput = [...terminalOutput, `Set ${currentStep}: ${input}`, ''];
		}

		// Move to next step
		const steps: (keyof FormData)[] = ['name', 'email', 'subject', 'message'];
		const currentIndex = steps.indexOf(currentStep);
		
		if (currentIndex < steps.length - 1) {
			const nextStep = steps[currentIndex + 1];
			currentStep = nextStep;
			terminalOutput = [...terminalOutput, fieldPrompts[nextStep]];
		} else if (currentStep !== 'message') {
			currentStep = 'complete';
			terminalOutput = [...terminalOutput, 'Form completed! Type "send" to submit or "edit" to modify.', ''];
		}
	}

	async function handleSubmit() {
		if (isSubmitting) return;
		
		isSubmitting = true;
		terminalOutput = [...terminalOutput, '$ send', 'Sending message...', ''];
		
		try {
			await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
			
			if (onSubmit) {
				await onSubmit(formData);
			}
			
			terminalOutput = [...terminalOutput, 
				'✓ Message sent successfully!',
				'Thank you for reaching out. I\'ll get back to you soon.',
				'',
				'Type "contact" to send another message.',
				''
			];
			
			// Reset form
			formData = { name: '', email: '', subject: '', message: '' };
			currentStep = null;
			
		} catch (error) {
			terminalOutput = [...terminalOutput, 
				'✗ Failed to send message. Please try again.',
				'Error: ' + (error instanceof Error ? error.message : 'Unknown error'),
				''
			];
		} finally {
			isSubmitting = false;
		}
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			
			if (currentStep === 'complete' && currentCommand === 'send') {
				handleSubmit();
			} else {
				executeCommand(currentCommand);
			}
		}
	}

	function getFormProgress() {
		const filled = Object.entries(formData).filter(([_, value]) => value.trim() !== '').length;
		const total = Object.keys(formData).length;
		return Math.round((filled / total) * 100);
	}

	onMount(() => {
		// Cursor blinking
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		return () => clearInterval(cursorInterval);
	});
</script>

<div class={cn(
	'rounded-lg border border-white/10 bg-black/90 backdrop-blur-sm overflow-hidden',
	className
)}>
	<!-- Terminal Header -->
	<div class="flex items-center justify-between border-b border-white/10 bg-gray-900/50 px-4 py-2">
		<div class="flex items-center gap-2">
			<div class="flex gap-1">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
			</div>
			<span class="text-xs text-white/60 font-mono">
				{title.toLowerCase().replace(/\s+/g, '-')} — zsh
			</span>
		</div>
		<div class="flex items-center gap-2">
			{#if currentStep && currentStep !== 'complete'}
				<div class="text-xs text-cyan-400 font-mono">
					Form: {getFormProgress()}%
				</div>
			{/if}
			<div class="text-xs text-green-400 font-mono">
				● ONLINE
			</div>
		</div>
	</div>

	<div class="p-4">
		<!-- Terminal Output -->
		<div class="bg-black/50 rounded border border-white/20 p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto">
			<div class="space-y-1">
				{#each terminalOutput as line}
					<div class={cn(
						line.startsWith('$') ? 'text-cyan-400' : 'text-white/80',
						line.startsWith('✓') ? 'text-green-400' : '',
						line.startsWith('✗') ? 'text-red-400' : '',
						line.startsWith('>') ? 'text-yellow-400' : '',
						'whitespace-pre-wrap'
					)}>
						{line}
					</div>
				{/each}
			</div>
			
			<!-- Current Command Line -->
			<div class="flex items-center text-cyan-400 mt-2">
				<span>$ </span>
				<input
					bind:value={currentCommand}
					onkeypress={handleKeyPress}
					class="bg-transparent text-white outline-none flex-1"
					placeholder={currentStep && currentStep !== 'complete' ? 'Enter value...' : 'Type command...'}
					disabled={isExecuting || isSubmitting}
				/>
				{#if showCursor}
					<span class="bg-white w-2 h-5 ml-1 animate-pulse">│</span>
				{/if}
			</div>
		</div>

		<!-- Quick Commands -->
		<div class="flex flex-wrap gap-2 mt-4">
			{#if currentStep === 'complete'}
				<button
					class="px-3 py-2 text-sm font-mono bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 rounded transition-colors"
					onclick={handleSubmit}
					disabled={isSubmitting}
					use:springPop={{ scale: 0.95, duration: 150 }}
				>
					{isSubmitting ? 'Sending...' : 'send'}
				</button>
				<button
					class="px-3 py-2 text-sm font-mono bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-500/30 rounded transition-colors"
					onclick={() => {
						currentStep = 'name';
						terminalOutput = [...terminalOutput, '$ edit', 'Editing form...', fieldPrompts.name];
					}}
				>
					edit
				</button>
			{:else if !currentStep}
				<button
					class="px-3 py-2 text-sm font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 rounded transition-colors"
					onclick={() => executeCommand('contact')}
					use:springPop={{ scale: 0.95, duration: 150 }}
				>
					contact
				</button>
				<button
					class="px-3 py-2 text-sm font-mono bg-white/10 hover:bg-white/20 text-white/60 hover:text-white border border-white/20 rounded transition-colors"
					onclick={() => executeCommand('help')}
				>
					help
				</button>
				<button
					class="px-3 py-2 text-sm font-mono bg-white/10 hover:bg-white/20 text-white/60 hover:text-white border border-white/20 rounded transition-colors"
					onclick={() => executeCommand('status')}
				>
					status
				</button>
			{/if}
			
			<button
				class="px-3 py-2 text-sm font-mono bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded transition-colors"
				onclick={() => executeCommand('clear')}
			>
				clear
			</button>
		</div>

		<!-- Form Preview (when completed) -->
		{#if currentStep === 'complete'}
			<div class="mt-4 p-3 bg-white/5 border border-white/10 rounded">
				<div class="text-xs text-white/60 font-mono mb-2">Form Preview:</div>
				<div class="space-y-2 text-sm">
					<div><span class="text-cyan-400">Name:</span> {formData.name}</div>
					<div><span class="text-cyan-400">Email:</span> {formData.email}</div>
					<div><span class="text-cyan-400">Subject:</span> {formData.subject}</div>
					<div><span class="text-cyan-400">Message:</span></div>
					<div class="pl-4 text-white/80 whitespace-pre-wrap">{formData.message}</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Custom scrollbar for terminal output */
	:global(.max-h-\[400px\]::-webkit-scrollbar) {
		width: 4px;
	}
	
	:global(.max-h-\[400px\]::-webkit-scrollbar-track) {
		background: rgba(255, 255, 255, 0.1);
	}
	
	:global(.max-h-\[400px\]::-webkit-scrollbar-thumb) {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	}
</style>
