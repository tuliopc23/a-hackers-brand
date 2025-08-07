export function validateField(value: any, validation: any): {
    isValid: boolean;
    errors: any[];
};
export function validateForm(data: any, schema: any): {};
export function isFormValid(validationResults: any): boolean;
export function getFormErrors(validationResults: any): {};
export function createValidationStore(schema: any): {
    readonly data: {};
    readonly errors: {};
    readonly touched: {};
    readonly isValid: boolean;
    setValue(field: any, value: any): void;
    setTouched(field: any, isTouched?: boolean): void;
    validateField(field: any): void;
    validateAll(): boolean;
    reset(): void;
    setData(newData: any): void;
};
export function debounceValidation(fn: any, delay?: number): (...args: any[]) => void;
export namespace validationRules {
    function required(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function minLength(min: any, message: any): {
        test: (value: any) => boolean;
        message: any;
    };
    function maxLength(max: any, message: any): {
        test: (value: any) => boolean;
        message: any;
    };
    function email(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function url(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function pattern(regex: any, message: any): {
        test: (value: any) => any;
        message: any;
    };
    function numeric(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function integer(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function min(min: any, message: any): {
        test: (value: any) => boolean;
        message: any;
    };
    function max(max: any, message: any): {
        test: (value: any) => boolean;
        message: any;
    };
    function range(min: any, max: any, message: any): {
        test: (value: any) => boolean;
        message: any;
    };
    function strongPassword(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function confirmPassword(passwordField: any, message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function phoneNumber(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function date(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function futureDate(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function pastDate(message?: string): {
        test: (value: any) => boolean;
        message: string;
    };
    function custom(validator: any, message: any): {
        test: any;
        message: any;
    };
}
export namespace commonSchemas {
    namespace login {
        export namespace email_1 {
            export let rules: {
                test: (value: any) => boolean;
                message: string;
            }[];
            let required_1: boolean;
            export { required_1 as required };
            export let trim: boolean;
        }
        export { email_1 as email };
        export namespace password {
            let rules_1: {
                test: (value: any) => boolean;
                message: any;
            }[];
            export { rules_1 as rules };
            let required_2: boolean;
            export { required_2 as required };
        }
    }
    namespace registration {
        export namespace name {
            let rules_2: {
                test: (value: any) => boolean;
                message: any;
            }[];
            export { rules_2 as rules };
            let required_3: boolean;
            export { required_3 as required };
            let trim_1: boolean;
            export { trim_1 as trim };
        }
        export namespace email_2 {
            let rules_3: {
                test: (value: any) => boolean;
                message: string;
            }[];
            export { rules_3 as rules };
            let required_4: boolean;
            export { required_4 as required };
            let trim_2: boolean;
            export { trim_2 as trim };
        }
        export { email_2 as email };
        export namespace password_1 {
            let rules_4: {
                test: (value: any) => boolean;
                message: string;
            }[];
            export { rules_4 as rules };
            let required_5: boolean;
            export { required_5 as required };
        }
        export { password_1 as password };
        export namespace confirmPassword_1 {
            let rules_5: never[];
            export { rules_5 as rules };
            let required_6: boolean;
            export { required_6 as required };
        }
        export { confirmPassword_1 as confirmPassword };
    }
    namespace contact {
        export namespace name_1 {
            let rules_6: {
                test: (value: any) => boolean;
                message: any;
            }[];
            export { rules_6 as rules };
            let required_7: boolean;
            export { required_7 as required };
            let trim_3: boolean;
            export { trim_3 as trim };
        }
        export { name_1 as name };
        export namespace email_3 {
            let rules_7: {
                test: (value: any) => boolean;
                message: string;
            }[];
            export { rules_7 as rules };
            let required_8: boolean;
            export { required_8 as required };
            let trim_4: boolean;
            export { trim_4 as trim };
        }
        export { email_3 as email };
        export namespace phone {
            let rules_8: {
                test: (value: any) => boolean;
                message: string;
            }[];
            export { rules_8 as rules };
            let required_9: boolean;
            export { required_9 as required };
            let trim_5: boolean;
            export { trim_5 as trim };
        }
        export namespace message {
            let rules_9: {
                test: (value: any) => boolean;
                message: any;
            }[];
            export { rules_9 as rules };
            let required_10: boolean;
            export { required_10 as required };
            let trim_6: boolean;
            export { trim_6 as trim };
        }
    }
}
declare namespace _default {
    export { validationRules };
    export { validateField };
    export { validateForm };
    export { isFormValid };
    export { getFormErrors };
    export { createValidationStore };
    export { debounceValidation };
    export { commonSchemas };
}
export default _default;
//# sourceMappingURL=FormValidation.d.ts.map