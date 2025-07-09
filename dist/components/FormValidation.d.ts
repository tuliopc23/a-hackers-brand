export interface ValidationRule {
	test: (value: any) => boolean;
	message: string;
}
export interface ValidationResult {
	isValid: boolean;
	errors: string[];
}
export interface FieldValidation {
	rules: ValidationRule[];
	required?: boolean;
	trim?: boolean;
}
export interface FormValidation {
	[fieldName: string]: FieldValidation;
}
export declare const validationRules: {
	required: (message?: string) => ValidationRule;
	minLength: (min: number, message?: string) => ValidationRule;
	maxLength: (max: number, message?: string) => ValidationRule;
	email: (message?: string) => ValidationRule;
	url: (message?: string) => ValidationRule;
	pattern: (regex: RegExp, message: string) => ValidationRule;
	numeric: (message?: string) => ValidationRule;
	integer: (message?: string) => ValidationRule;
	min: (min: number, message?: string) => ValidationRule;
	max: (max: number, message?: string) => ValidationRule;
	range: (min: number, max: number, message?: string) => ValidationRule;
	strongPassword: (message?: string) => ValidationRule;
	confirmPassword: (passwordField: string, message?: string) => ValidationRule;
	phoneNumber: (message?: string) => ValidationRule;
	date: (message?: string) => ValidationRule;
	futureDate: (message?: string) => ValidationRule;
	pastDate: (message?: string) => ValidationRule;
	custom: (validator: (value: any) => boolean, message: string) => ValidationRule;
};
export declare function validateField(value: any, validation: FieldValidation): ValidationResult;
export declare function validateForm(
	data: Record<string, any>,
	schema: FormValidation
): Record<string, ValidationResult>;
export declare function isFormValid(validationResults: Record<string, ValidationResult>): boolean;
export declare function getFormErrors(validationResults: Record<string, ValidationResult>): Record<string, string[]>;
export declare function createValidationStore(schema: FormValidation): {
	readonly data: Record<string, any>;
	readonly errors: Record<string, string[]>;
	readonly touched: Record<string, boolean>;
	readonly isValid: boolean;
	setValue(field: string, value: any): void;
	setTouched(field: string, isTouched?: boolean): void;
	validateField(field: string): void;
	validateAll(): boolean;
	reset(): void;
	setData(newData: Record<string, any>): void;
};
export declare function debounceValidation(fn: Function, delay?: number): (...args: any[]) => void;
export declare const commonSchemas: {
	login: {
		email: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
		password: {
			rules: ValidationRule[];
			required: boolean;
		};
	};
	registration: {
		name: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
		email: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
		password: {
			rules: ValidationRule[];
			required: boolean;
		};
		confirmPassword: {
			rules: never[];
			required: boolean;
		};
	};
	contact: {
		name: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
		email: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
		phone: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
		message: {
			rules: ValidationRule[];
			required: boolean;
			trim: boolean;
		};
	};
};
declare const _default: {
	validationRules: {
		required: (message?: string) => ValidationRule;
		minLength: (min: number, message?: string) => ValidationRule;
		maxLength: (max: number, message?: string) => ValidationRule;
		email: (message?: string) => ValidationRule;
		url: (message?: string) => ValidationRule;
		pattern: (regex: RegExp, message: string) => ValidationRule;
		numeric: (message?: string) => ValidationRule;
		integer: (message?: string) => ValidationRule;
		min: (min: number, message?: string) => ValidationRule;
		max: (max: number, message?: string) => ValidationRule;
		range: (min: number, max: number, message?: string) => ValidationRule;
		strongPassword: (message?: string) => ValidationRule;
		confirmPassword: (passwordField: string, message?: string) => ValidationRule;
		phoneNumber: (message?: string) => ValidationRule;
		date: (message?: string) => ValidationRule;
		futureDate: (message?: string) => ValidationRule;
		pastDate: (message?: string) => ValidationRule;
		custom: (validator: (value: any) => boolean, message: string) => ValidationRule;
	};
	validateField: typeof validateField;
	validateForm: typeof validateForm;
	isFormValid: typeof isFormValid;
	getFormErrors: typeof getFormErrors;
	createValidationStore: typeof createValidationStore;
	debounceValidation: typeof debounceValidation;
	commonSchemas: {
		login: {
			email: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
			password: {
				rules: ValidationRule[];
				required: boolean;
			};
		};
		registration: {
			name: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
			email: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
			password: {
				rules: ValidationRule[];
				required: boolean;
			};
			confirmPassword: {
				rules: never[];
				required: boolean;
			};
		};
		contact: {
			name: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
			email: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
			phone: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
			message: {
				rules: ValidationRule[];
				required: boolean;
				trim: boolean;
			};
		};
	};
};
export default _default;
