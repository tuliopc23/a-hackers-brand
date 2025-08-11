/// <reference types="vite/client" />
// Auto-import all Svelte components (excluding *.story.svelte) for dynamic embedding in docs.
// Modes:
// 1) Data attribute: <div data-ahb-component="Button" data-ahb-props='{"variant":"terminal"}'></div>
// 2) Custom element after registration: <ahb-button variant="terminal"></ahb-button>
//    (attributes parsed as primitive/JSON props)

// Dynamic glob (code-splitting) - returns loader functions for each component.
const moduleLoaders = import.meta.glob('$lib/components/**/*.svelte');

// Registry caches loaded constructors after first use.
const components: Record<string, any> = {};
// Map component name -> module path for lookup.
const nameToPath: Record<string, string> = {};
for (const path in moduleLoaders) {
    if (/\.story\.svelte$/i.test(path)) continue;
    const match = path.match(/([^/]+)\.svelte$/);
    if (!match) continue;
    const name = match[1];
    if (!nameToPath[name]) nameToPath[name] = path; // first wins
}

interface MountedEl extends HTMLElement {
    __ahbInstance?: any;
    __ahbSlotNodes?: Node[];
    __ahbOriginalArrays?: Record<string, any[]>;
}

// --- Slot wrapper dynamic import for true default-slot projection ---
let SlotWrapperCtor: any;
async function getSlotWrapper() {
    if (SlotWrapperCtor) return SlotWrapperCtor;
    try {
        const mod = await import('./SlotWrapper.svelte');
        SlotWrapperCtor = mod.default;
    } catch (e) {
        console.warn('[ahb-embed] failed to load SlotWrapper', e);
    }
    return SlotWrapperCtor;
}

function parseProps(el: HTMLElement): Record<string, any> {
    const raw = el.getAttribute('data-ahb-props');
    if (!raw) return {};
    try { return JSON.parse(raw); } catch { return {}; }
}

async function loadComponent(name: string): Promise<any | undefined> {
    if (components[name]) return components[name];
    const path = nameToPath[name];
    if (!path) return undefined;
    try {
        const mod: any = await (moduleLoaders as Record<string, () => Promise<any>>)[path]();
        const ctor = mod?.default;
        if (ctor) components[name] = ctor;
        return ctor;
    } catch (e) {
        console.warn('[ahb-embed] failed to load', name, e);
        return undefined;
    }
}

function truncateLargeArrays(props: Record<string, any>, el: MountedEl) {
    const truncate = el.getAttribute('data-ahb-no-truncate') !== 'true';
    if (!truncate) return props;
    const pageSizeAttr = el.getAttribute('data-ahb-page-size');
    const pageSize = pageSizeAttr ? Number(pageSizeAttr) : 150;
    const keys = ['rows', 'data'];
    for (const k of keys) {
        const arr = props[k];
        if (Array.isArray(arr) && arr.length > pageSize) {
            el.__ahbOriginalArrays = el.__ahbOriginalArrays || {};
            el.__ahbOriginalArrays[k] = arr;
            props[k] = arr.slice(0, pageSize);
            el.setAttribute('data-ahb-truncated', `${k}:${pageSize}`);
        }
    }
    return props;
}

async function expandFullData(el: MountedEl) {
    if (!el.__ahbOriginalArrays || !el.__ahbInstance) return;
    const name = el.getAttribute('data-ahb-component');
    if (!name) return;
    const Component = components[name];
    if (!Component) return; // should already be loaded
    const props = parseProps(el);
    Object.assign(props, el.__ahbOriginalArrays); // restore
    // Destroy and remount (simplest reliable approach)
    try { (el.__ahbInstance as any).$destroy?.(); } catch { /* ignore */ }
    el.innerHTML = '';
    const slotHTML = el.__ahbSlotNodes && el.__ahbSlotNodes.length
        ? el.__ahbSlotNodes.map(n => (n as HTMLElement).outerHTML ?? n.textContent ?? '').join('')
        : '';
    if (slotHTML && SlotWrapperCtor) {
        el.__ahbInstance = new SlotWrapperCtor({ target: el, props: { component: Component, props, slotHTML } });
    } else {
        el.__ahbInstance = new Component({ target: el, props });
    }
    el.removeAttribute('data-ahb-truncated');
}

function addTruncationNotice(el: MountedEl) {
    if (!el.getAttribute('data-ahb-truncated')) return;
    if (el.querySelector('.ahb-trunc-note')) return;
    const note = document.createElement('div');
    note.className = 'ahb-trunc-note';
    const info = el.getAttribute('data-ahb-truncated');
    note.textContent = `Showing truncated ${info}. Click to expand.`;
    note.addEventListener('click', () => expandFullData(el));
    el.appendChild(note);
}

async function mountElement(el: MountedEl) {
    if (el.__ahbInstance) return;
    if (el.getAttribute('data-ahb-skip') === 'true') return;
    const name = el.getAttribute('data-ahb-component');
    if (!name) return;

    // Preserve potential inline HTML as pseudo slot content.
    if (!el.__ahbSlotNodes && el.childNodes.length) {
        el.__ahbSlotNodes = Array.from(el.childNodes);
    }

    const Component = await loadComponent(name);
    if (!Component) {
        el.setAttribute('data-ahb-missing', 'true');
        if (!el.querySelector('.ahb-missing-msg')) {
            el.innerHTML = `<div class="ahb-missing-msg">Component "${name}" not found. Check export name.</div>`;
        }
        return;
    }
    let props = parseProps(el);
    props = truncateLargeArrays(props, el);
    const slotHTML = el.__ahbSlotNodes && el.__ahbSlotNodes.length
        ? el.__ahbSlotNodes.map(n => (n as HTMLElement).outerHTML ?? n.textContent ?? '').join('')
        : '';
    el.innerHTML = '';
    if (slotHTML) {
        const Wrapper = await getSlotWrapper();
        if (Wrapper) {
            el.__ahbInstance = new Wrapper({ target: el, props: { component: Component, props, slotHTML } });
        } else {
            // Fallback: mount component then append slot content (approximation)
            el.__ahbInstance = new Component({ target: el, props });
            const slotWrap = document.createElement('div');
            slotWrap.className = 'ahb-slot-content';
            slotWrap.innerHTML = slotHTML;
            el.appendChild(slotWrap);
        }
    } else {
        el.__ahbInstance = new Component({ target: el, props });
    }
    addTruncationNotice(el);
}

function scan(root: ParentNode = document) {
    root.querySelectorAll('[data-ahb-component]').forEach(el => mountElement(el as MountedEl));
}

if (typeof window !== 'undefined') {
    if (!(window as any).__ahbEmbedLoaded) {
        (window as any).__ahbEmbedLoaded = true;
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => scan());
        } else {
            scan();
        }
        const mo = new MutationObserver(muts => {
            for (const m of muts) {
                for (const node of Array.from(m.addedNodes)) {
                    if (node instanceof HTMLElement) {
                        if (node.matches('[data-ahb-component]')) mountElement(node as MountedEl);
                        node.querySelectorAll?.('[data-ahb-component]').forEach(el => mountElement(el as MountedEl));
                    }
                }
            }
        });
        mo.observe(document.body, { childList: true, subtree: true });
        registerCustomElements();
        injectThemeToggle();
    }
}

export { };

// ---------- Custom Elements ----------
function toTag(name: string) {
    return 'ahb-' + name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .toLowerCase();
}

function parseAttr(val: string): any {
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (val === 'null') return null;
    if (val === 'undefined') return undefined;
    if (!isNaN(Number(val)) && val.trim() !== '') return Number(val);
    if ((val.startsWith('{') && val.endsWith('}')) || (val.startsWith('[') && val.endsWith(']'))) {
        try { return JSON.parse(val); } catch { /* ignore */ }
    }
    return val;
}

function registerCustomElements() {
    // Define on-demand custom element that lazy-loads its component.
    for (const name in nameToPath) {
        const tag = toTag(name);
        if (customElements.get(tag)) continue;
        class AHBEl extends HTMLElement {
            private instance: any;
            async connectedCallback() {
                if (this.instance) return;
                const ctor = await loadComponent(name);
                if (!ctor) {
                    this.setAttribute('data-ahb-missing', 'true');
                    this.textContent = `Missing component: ${name}`;
                    return;
                }
                let props: Record<string, any> = {};
                for (const attr of Array.from(this.attributes)) {
                    if (attr.name === 'class' || attr.name === 'style') continue;
                    props[attr.name] = parseAttr(attr.value);
                }
                const slotHTML = this.innerHTML; // preserve any inner markup
                this.innerHTML = '';
                // Truncation for custom elements
                const truncate = this.getAttribute('data-ahb-no-truncate') !== 'true';
                const pageSizeAttr = this.getAttribute('data-ahb-page-size');
                const pageSize = pageSizeAttr ? Number(pageSizeAttr) : 150;
                if (truncate) {
                    for (const k of ['rows', 'data']) {
                        if (Array.isArray((props as any)[k]) && (props as any)[k].length > pageSize) {
                            (props as any)[k] = (props as any)[k].slice(0, pageSize);
                            this.setAttribute('data-ahb-truncated', k + ':' + pageSize);
                        }
                    }
                }
                if (slotHTML.trim()) {
                    const Wrapper = await getSlotWrapper();
                    if (Wrapper) {
                        this.instance = new Wrapper({ target: this, props: { component: ctor, props, slotHTML } });
                    } else {
                        this.instance = new ctor({ target: this, props });
                        const wrap = document.createElement('div');
                        wrap.className = 'ahb-slot-content';
                        wrap.innerHTML = slotHTML;
                        this.appendChild(wrap);
                    }
                } else {
                    this.instance = new ctor({ target: this, props });
                }
                if (this.getAttribute('data-ahb-truncated')) {
                    const note = document.createElement('div');
                    note.className = 'ahb-trunc-note';
                    note.textContent = `Showing truncated ${this.getAttribute('data-ahb-truncated')}.`;
                    this.appendChild(note);
                }
            }
            disconnectedCallback() {
                this.instance?.$destroy?.();
                this.instance = undefined;
            }
        }
        customElements.define(tag, AHBEl);
    }
}

// Inject a simple theme toggle control for docs previews (terminal <-> bubbleTea)
function injectThemeToggle() {
    if (document.getElementById('ahb-theme-toggle')) return;
    // Restore persisted theme if available
    try {
        const stored = localStorage.getItem('ahb-theme');
        if (stored) {
            document.documentElement.setAttribute('data-theme', stored);
        }
    } catch { /* ignore */ }
    const btn = document.createElement('button');
    btn.id = 'ahb-theme-toggle';
    btn.type = 'button';
    btn.className = 'ahb-theme-toggle';
    btn.textContent = 'Theme: ' + (document.documentElement.getAttribute('data-theme') || 'terminal') + ' (click to toggle)';
    btn.addEventListener('click', () => {
        const root = document.documentElement;
        const current = root.getAttribute('data-theme') || 'terminal';
        const next = current === 'terminal' ? 'bubbleTea' : 'terminal';
        root.setAttribute('data-theme', next);
        btn.textContent = `Theme: ${next} (click to toggle)`;
        window.dispatchEvent(new CustomEvent('ahb-theme-change', { detail: { theme: next } }));
        try { localStorage.setItem('ahb-theme', next); } catch { /* ignore */ }
    });
    btn.textContent = `Theme: ${document.documentElement.getAttribute('data-theme') || 'terminal'} (click to toggle)`;
    document.body.appendChild(btn);
}
