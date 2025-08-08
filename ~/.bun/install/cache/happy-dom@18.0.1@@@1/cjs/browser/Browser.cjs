"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserContext_js_1 = __importDefault(require("./BrowserContext.cjs"));
const BrowserSettingsFactory_js_1 = __importDefault(require("./BrowserSettingsFactory.cjs"));
const BrowserExceptionObserver_js_1 = __importDefault(require("./utilities/BrowserExceptionObserver.cjs"));
const PropertySymbol = __importStar(require("../PropertySymbol.cjs"));
const BrowserErrorCaptureEnum_js_1 = __importDefault(require("./enums/BrowserErrorCaptureEnum.cjs"));
/**
 * Browser.
 */
class Browser {
    contexts;
    settings;
    console;
    [PropertySymbol.exceptionObserver] = null;
    /**
     * Constructor.
     *
     * @param [options] Options.
     * @param [options.settings] Browser settings.
     * @param [options.console] Console.
     */
    constructor(options) {
        this.console = options?.console || null;
        this.settings = BrowserSettingsFactory_js_1.default.createSettings(options?.settings);
        if (this.settings.errorCapture === BrowserErrorCaptureEnum_js_1.default.processLevel) {
            this[PropertySymbol.exceptionObserver] = new BrowserExceptionObserver_js_1.default();
        }
        this.contexts = [new BrowserContext_js_1.default(this)];
    }
    /**
     * Returns true if the browser is closed.
     *
     * @returns True if the browser is closed.
     */
    get closed() {
        return this.contexts.length === 0;
    }
    /**
     * Returns the default context.
     *
     * @returns Default context.
     */
    get defaultContext() {
        if (this.contexts.length === 0) {
            throw new Error('No default context. The browser has been closed.');
        }
        return this.contexts[0];
    }
    /**
     * Aborts all ongoing operations and destroys the browser.
     */
    async close() {
        if (this.contexts.length === 0) {
            return;
        }
        const contexts = this.contexts;
        this.contexts = [];
        await Promise.all(contexts.map((context) => context.close()));
    }
    /**
     * Returns a promise that is resolved when all resources has been loaded, fetch has completed, and all async tasks such as timers are complete.
     *
     * @returns Promise.
     */
    async waitUntilComplete() {
        if (this.contexts.length === 0) {
            throw new Error('No default context. The browser has been closed.');
        }
        await Promise.all(this.contexts.map((page) => page.waitUntilComplete()));
    }
    /**
     * Aborts all ongoing operations.
     */
    abort() {
        // Using Promise instead of async/await to prevent microtask
        return new Promise((resolve, reject) => {
            if (!this.contexts.length) {
                resolve();
                return;
            }
            Promise.all(this.contexts.slice().map((context) => context.abort()))
                .then(() => resolve())
                .catch((error) => reject(error));
        });
    }
    /**
     * Creates a new incognito context.
     *
     * @returns Context.
     */
    newIncognitoContext() {
        if (this.contexts.length === 0) {
            throw new Error('No default context. The browser has been closed.');
        }
        const context = new BrowserContext_js_1.default(this);
        this.contexts.push(context);
        return context;
    }
    /**
     * Creates a new page.
     *
     * @returns Page.
     */
    newPage() {
        if (this.contexts.length === 0) {
            throw new Error('No default context. The browser has been closed.');
        }
        return this.contexts[0].newPage();
    }
}
exports.default = Browser;
//# sourceMappingURL=Browser.cjs.map