export interface ValidationRule {
  test: (value: any) => boolean;
  message: string;
}
export interface FieldValidation {
  rules: ValidationRule[];
  required?: boolean;
  trim?: boolean;
}
export const validationRules: {
  required: (message?: string) => ValidationRule;
  minLength: (min: number, message?: string) => ValidationRule;
  maxLength: (max: number, message?: string) => ValidationRule;
  email: (message?: string) => ValidationRule;
  url: (message?: string) => ValidationRule;
  pattern: (regex: RegExp, message?: string) => ValidationRule;
  numeric: (message?: string) => ValidationRule;
  integer: (message?: string) => ValidationRule;
  min: (min: number, message?: string) => ValidationRule;
  max: (max: number, message?: string) => ValidationRule;
  range: (min: number, max: number, message?: string) => ValidationRule;
  strongPassword: (message?: string) => ValidationRule;
  confirmPassword: (password: string, message?: string) => ValidationRule;
  phoneNumber: (message?: string) => ValidationRule;
  date: (message?: string) => ValidationRule;
  futureDate: (message?: string) => ValidationRule;
  pastDate: (message?: string) => ValidationRule;
  custom: (validator: (v: any) => boolean, message?: string) => ValidationRule;
};
export function validateField(value: any, validation: FieldValidation): { isValid: boolean; errors: string[] };
export function validateForm(data: Record<string, any>, schema: Record<string, FieldValidation>): Record<string, { isValid: boolean; errors: string[] }>;
export function isFormValid(validationResults: Record<string, { isValid: boolean; errors: string[] }>): boolean;
export function getFormErrors(validationResults: Record<string, { isValid: boolean; errors: string[] }>): Record<string, string[]>;
export function createValidationStore(schema: Record<string, FieldValidation>): any;
export function debounceValidation<T extends any[]>(fn: (...args: T) => void, delay?: number): (...args: T) => void;
export const commonSchemas: Record<string, Record<string, FieldValidation>>;
declare const _default: {
  validationRules: typeof validationRules;
  validateField: typeof validateField;
  validateForm: typeof validateForm;
  isFormValid: typeof isFormValid;
  getFormErrors: typeof getFormErrors;
  createValidationStore: typeof createValidationStore;
  debounceValidation: typeof debounceValidation;
  commonSchemas: typeof commonSchemas;
};
export default _default;
