export interface NavItem {
	id: string;
	label: string;
	href?: string;
	children?: NavItem[];
	icon?: string;
	disabled?: boolean;
	badge?: string | number;
	external?: boolean;
}
