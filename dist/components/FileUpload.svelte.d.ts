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
	maxSize?: number;
	maxFiles?: number;
	variant?: 'default' | 'glass' | 'terminal';
	disabled?: boolean;
	showPreview?: boolean;
	uploadUrl?: string;
	autoUpload?: boolean;
	class?: string;
}
interface $$__sveltets_2_IsomorphicComponent<
	Props extends Record<string, any> = any,
	Events extends Record<string, any> = any,
	Slots extends Record<string, any> = any,
	Exports = {},
	Bindings = string
> {
	new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<
		Props,
		Events,
		Slots
	> & {
		$$bindings?: Bindings;
	} & Exports;
	(
		internal: unknown,
		props: Props & {
			$$events?: Events;
			$$slots?: Slots;
		}
	): Exports & {
		$set?: any;
		$on?: any;
	};
	z_$$bindings?: Bindings;
}
declare const FileUpload: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		filesAdded: CustomEvent<FileWithPreview[]>;
		fileRemoved: CustomEvent<FileWithPreview>;
		uploadStart: CustomEvent<FileWithPreview>;
		uploadProgress: CustomEvent<{
			file: FileWithPreview;
			progress: number;
		}>;
		uploadSuccess: CustomEvent<{
			file: FileWithPreview;
			response?: any;
		}>;
		uploadError: CustomEvent<{
			file: FileWithPreview;
			error: string;
		}>;
		allUploadsComplete: CustomEvent<FileWithPreview[]>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{},
	{},
	''
>;
type FileUpload = InstanceType<typeof FileUpload>;
export default FileUpload;
