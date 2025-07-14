<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cn } from '../utils.js';
	import { brandColors } from '../tokens';
	import { glassFade, liquidBlur, magneticHover, springPop } from '../motion';

	interface FileWithPreview extends File {
		id: string;
		preview?: string;
		progress?: number;
		status: 'pending' | 'uploading' | 'success' | 'error';
		error?: string;
	}

	interface Props {
		multiple?: boolean;
		accept?: string;
		maxSize?: number; // in bytes
		maxFiles?: number;
		variant?: 'default' | 'glass' | 'terminal';
		disabled?: boolean;
		showPreview?: boolean;
		uploadUrl?: string;
		autoUpload?: boolean;
		class?: string;
	}

	const {
		multiple = false,
		accept = '*/*',
		maxSize = 10 * 1024 * 1024, // 10MB default
		maxFiles = multiple ? 5 : 1,
		variant = 'default',
		disabled = false,
		showPreview = true,
		uploadUrl,
		autoUpload = false,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		filesAdded: FileWithPreview[];
		fileRemoved: FileWithPreview;
		uploadStart: FileWithPreview;
		uploadProgress: { file: FileWithPreview; progress: number };
		uploadSuccess: { file: FileWithPreview; response?: any };
		uploadError: { file: FileWithPreview; error: string };
		allUploadsComplete: FileWithPreview[];
	}>();

	let fileInputRef: HTMLInputElement;
	let dropZoneRef: HTMLDivElement;
	let isDragOver = $state(false);
	let files = $state<FileWithPreview[]>([]);

	const variants = {
		default: {
			dropZone: 'bg-gray-900/50 border-gray-700 hover:border-gray-600',
			dropZoneActive: 'bg-blue-500/10 border-blue-500',
			fileItem: 'bg-gray-800 border-gray-700',
			progressBar: 'bg-blue-600',
			successIcon: 'text-green-400',
			errorIcon: 'text-red-400',
			removeButton: 'text-gray-400 hover:text-white'
		},
		glass: {
			dropZone: 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-md',
			dropZoneActive: 'bg-white/10 border-white/30',
			fileItem: 'bg-white/10 border-white/20 backdrop-blur-sm',
			progressBar: 'bg-white/40',
			successIcon: 'text-green-400',
			errorIcon: 'text-red-400',
			removeButton: 'text-white/70 hover:text-white'
		},
		terminal: {
			dropZone: `bg-black/80 border-${brandColors.terminal.green} hover:border-${brandColors.terminal.matrix}`,
			dropZoneActive: `bg-${brandColors.terminal.green}/10 border-${brandColors.terminal.matrix}`,
			fileItem: `bg-black/60 border-${brandColors.terminal.green}/30`,
			progressBar: `bg-${brandColors.terminal.green}`,
			successIcon: `text-${brandColors.terminal.green}`,
			errorIcon: 'text-red-400',
			removeButton: `text-${brandColors.terminal.green}/70 hover:text-${brandColors.terminal.green}`
		}
	};

	const currentVariant = $derived(variants()[variant]);

	function generateFileId(): string {
		return Math.random().toString(36).substring(2) + Date.now().toString(36);
	}

	function formatFileSize(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes()[i];
	}

	function isImageFile(file: File): boolean {
		return file.type.startsWith('image/');
	}

	function validateFile(file: File): string | null {
		if (file.size > maxSize) {
			return `File size exceeds ${formatFileSize(maxSize)}`;
		}

		if (accept !== '*/*') {
			const acceptedTypes = accept.split(',').map((type) => type.trim());
			const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
			const isAccepted = acceptedTypes().some(
				(type) =>
					type === file.type ||
					type === fileExtension ||
					(type.endsWith('/*') && file.type.startsWith(type().slice(0, -1)))
			);

			if (!isAccepted) {
				return `File type not accepted. Accepted types: ${accept}`;
			}
		}

		return null;
	}

	async function createPreview(file: File): Promise<string | undefined> {
		if (!isImageFile(file) || !showPreview) return undefined;

		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = (e) => resolve(e.target?.result as string);
			reader.onerror = () => resolve(undefined);
			reader.readAsDataURL(file);
		});
	}

	async function processFiles(fileList: FileList | File[]) {
		if (disabled) return;

		const fileArray = Array.from(fileList);
		const remainingSlots = maxFiles - files().length;
		const filesToProcess = fileArray().slice(0, remainingSlots);

		const newFiles: FileWithPreview[] = [];

		for (const file of filesToProcess) {
			const error = validateFile(file);
			const preview = await createPreview(file);

			const fileWithPreview: FileWithPreview = {
				...file,
				id: generateFileId(),
				preview,
				status: error ? 'error' : 'pending',
				error,
				progress: 0
			};

			newFiles.push(fileWithPreview);
		}

		files = [...files, ...newFiles];
		dispatch('filesAdded', newFiles);

		if (autoUpload && uploadUrl) {
			newFiles().forEach((file) => {
				if (file.status === 'pending') {
					uploadFile(file);
				}
			});
		}
	}

	async function uploadFile(file: FileWithPreview) {
		if (!uploadUrl) return;

		const fileIndex = files.findIndex((f) => f.id === file.id);
		if (fileIndex === -1) return;

		// Update file status
		files()[fileIndex] = { ...file, status: 'uploading', progress: 0 };
		dispatch('uploadStart', files()[fileIndex]);

		const formData = new FormData();
		formData.append('file', file);

		try {
			const xhr = new XMLHttpRequest();

			// Track upload progress
			xhr.upload.onprogress = (event) => {
				if (event().lengthComputable) {
					const progress = Math.round((event.loaded / event.total) * 100);
					files()[fileIndex] = { ...files()[fileIndex], progress };
					dispatch('uploadProgress', { file: files()[fileIndex], progress });
				}
			};

			// Handle completion
			xhr.onload = () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					files()[fileIndex] = {
						...files()[fileIndex],
						status: 'success',
						progress: 100
					};
					dispatch('uploadSuccess', {
						file: files()[fileIndex],
						response: xhr.response
					});
				} else {
					throw new Error(`Upload failed: ${xhr.statusText}`);
				}

				// Check if all uploads are complete
				if (files().every((f) => f.status === 'success' || f.status === 'error')) {
					dispatch('allUploadsComplete', files);
				}
			};

			xhr.onerror = () => {
				const error = 'Upload failed: Network error';
				files()[fileIndex] = {
					...files()[fileIndex],
					status: 'error',
					error
				};
				dispatch('uploadError', { file: files()[fileIndex], error });
			};

			xhr.open('POST', uploadUrl);
			xhr.send(formData);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Upload failed';
			files()[fileIndex] = {
				...files()[fileIndex],
				status: 'error',
				error: errorMessage
			};
			dispatch('uploadError', { file: files()[fileIndex], error: errorMessage });
		}
	}

	function removeFile(fileId: string) {
		const fileIndex = files.findIndex((f) => f.id === fileId);
		if (fileIndex === -1) return;

		const removedFile = files()[fileIndex];
		files = files().filter((f) => f.id !== fileId);
		dispatch('fileRemoved', removedFile);
	}

	function retryUpload(fileId: string) {
		const file = files().find((f) => f.id === fileId);
		if (file && uploadUrl) {
			uploadFile(file);
		}
	}

	function handleFileInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files) {
			processFiles(target.files);
		}
		// Reset input to allow selecting the same file again
		target.value = '';
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		if (!disabled) {
			isDragOver = true;
		}
	}

	function handleDragLeave(event: DragEvent) {
		event.preventDefault();
		if (!dropZoneRef?.contains(event.relatedTarget as Node)) {
			isDragOver = false;
		}
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		isDragOver = false;

		if (disabled) return;

		const files = event.dataTransfer?.files;
		if (files) {
			processFiles(files);
		}
	}

	function triggerFileSelect() {
		if (!disabled && fileInputRef) {
			fileInputRef.click();
		}
	}

	const canAddMoreFiles = $derived(files().length < maxFiles);

	const combinedClasses = $derived(
		cn(
			'relative w-full rounded-lg border-2 border-dashed transition-all duration-300',
			'flex flex-col items-center justify-center p-8 min-h-32',
			'cursor-pointer font-mono',
			isDragOver ? currentVariant.dropZoneActive : currentVariant.dropZone,
			disabled && 'opacity-50 cursor-not-allowed',
			className
		)
	);
</script>

<!-- Hidden file input -->
<input
	bind:this={fileInputRef}
	type="file"
	{accept}
	{multiple}
	{disabled}
	onchange={handleFileInputChange}
	class="hidden"
/>

<!-- Drop zone -->
<div
	bind:this={dropZoneRef}
	class={combinedClasses}
	onclick={triggerFileSelect} onkeydown={(e) => e.key === "Enter" && triggerFileSelect(e)} 
	ondragover={handleDragOver}
	ondragleave={handleDragLeave}
	ondrop={handleDrop}
	role="button"
	tabindex={disabled ? -1 : 0}
	aria-label="Upload files"
	use:liquidBlur={{ blur: 'md', opacity: 'light' }}
	use:magneticHover={{ enabled: !disabled && canAddMoreFiles, strength: 0.1 }}
>
	{#if isDragOver}
		<div class="text-center" in:springPop={{ duration: 200 }}>
			<svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/>
			</svg>
			<p class="text-lg font-medium">Drop files here</p>
		</div>
	{:else}
		<div class="text-center">
			<svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/>
			</svg>

			<div class="mb-2">
				<p class="text-lg font-medium">
					{canAddMoreFiles ? 'Choose files or drag and drop' : 'Maximum files reached'}
				</p>
				<p class="text-sm text-gray-400 mt-1">
					{accept === '*/*' ? 'Any file type' : accept} • Max {formatFileSize(maxSize)} per file
				</p>
				{#if multiple}
					<p class="text-xs text-gray-500 mt-1">
						{files().length} of {maxFiles} files selected
					</p>
				{/if}
			</div>

			{#if canAddMoreFiles}
				<button
					type="button"
					class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium"
					use:magneticHover={{ strength: 0.15 }}
				>
					Select Files
				</button>
			{/if}
		</div>
	{/if}
</div>

<!-- File list -->
{#if files().length > 0}
	<div class="mt-4 space-y-3">
		{#each files() as file (file.id)}
			<div
				class="p-4 rounded-lg border {currentVariant.fileItem} transition-all duration-200"
				in:springPop={{ duration: 300, bounce: true }}
				use:liquidBlur={{ blur: 'sm', opacity: 'subtle' }}
			>
				<div class="flex items-start gap-3">
					<!-- File preview or icon -->
					<div class="flex-shrink-0">
						{#if file.preview}
							<img src={file.preview} alt={file.name} class="w-12 h-12 object-cover rounded border" />
						{:else}
							<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center">
								<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
						{/if}
					</div>

					<!-- File info -->
					<div class="flex-1 min-w-0">
						<div class="flex items-center justify-between">
							<h4 class="text-sm font-medium truncate pr-2">{file.name}</h4>

							<!-- Status icon and actions -->
							<div class="flex items-center gap-2">
								{#if file.status === 'success'}
									<svg class="w-5 h-5 {currentVariant.successIcon}" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else if file.status === 'error'}
									<button
										onclick={() => retryUpload(file.id)} onkeydown={(e) => e.key === "Enter" && retryUpload(file.id)} 
										class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
										title="Retry upload"
									>
										Retry
									</button>
									<svg class="w-5 h-5 {currentVariant.errorIcon}" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else if file.status === 'uploading'}
									<div class="w-5 h-5">
										<svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24">
											<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path
												class="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
									</div>
								{/if}

								<!-- Remove button -->
								<button
									onclick={() => removeFile(file.id)} onkeydown={(e) => e.key === "Enter" && removeFile(file.id)} 
									class="p-1 rounded {currentVariant.removeButton} hover:bg-red-500/20 transition-colors"
									aria-label="Remove file"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>

						<!-- File size and error -->
						<div class="mt-1">
							<p class="text-xs text-gray-400">{formatFileSize(file.size)}</p>
							{#if file.error}
								<p class="text-xs text-red-400 mt-1">{file.error}</p>
							{/if}
						</div>

						<!-- Progress bar -->
						{#if file.status === 'uploading' && file.progress !== undefined}
							<div class="mt-2">
								<div class="w-full bg-gray-700 rounded-full h-2">
									<div
										class="h-2 rounded-full {currentVariant.progressBar} transition-all duration-300"
										style="width: {file.progress}%"
									></div>
								</div>
								<p class="text-xs text-gray-400 mt-1">{file.progress}% uploaded</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	/* Terminal-specific glow effects */
	:global(.terminal .file-upload:hover) {
		box-shadow:
			0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);
	}
</style>
