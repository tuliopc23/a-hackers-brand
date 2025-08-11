const p = /* @__PURE__ */ Object.assign({}), u = {}, h = {};
for (const t in p) {
  if (/\.story\.svelte$/i.test(t)) continue;
  const e = t.match(/([^/]+)\.svelte$/);
  if (!e) continue;
  const a = e[1];
  h[a] || (h[a] = t);
}
let d;
async function _() {
  if (d) return d;
  try {
    d = (await import("./SlotWrapper-BqtXdFLP.js")).default;
  } catch (t) {
    console.warn("[ahb-embed] failed to load SlotWrapper", t);
  }
  return d;
}
function A(t) {
  const e = t.getAttribute("data-ahb-props");
  if (!e) return {};
  try {
    return JSON.parse(e);
  } catch {
    return {};
  }
}
async function y(t) {
  if (u[t]) return u[t];
  const e = h[t];
  if (e)
    try {
      const n = (await p[e]())?.default;
      return n && (u[t] = n), n;
    } catch (a) {
      console.warn("[ahb-embed] failed to load", t, a);
      return;
    }
}
function w(t, e) {
  if (!(e.getAttribute("data-ahb-no-truncate") !== "true")) return t;
  const n = e.getAttribute("data-ahb-page-size"), r = n ? Number(n) : 150, o = ["rows", "data"];
  for (const s of o) {
    const c = t[s];
    Array.isArray(c) && c.length > r && (e.__ahbOriginalArrays = e.__ahbOriginalArrays || {}, e.__ahbOriginalArrays[s] = c, t[s] = c.slice(0, r), e.setAttribute("data-ahb-truncated", `${s}:${r}`));
  }
  return t;
}
async function C(t) {
  if (!t.__ahbOriginalArrays || !t.__ahbInstance) return;
  const e = t.getAttribute("data-ahb-component");
  if (!e) return;
  const a = u[e];
  if (!a) return;
  const n = A(t);
  Object.assign(n, t.__ahbOriginalArrays);
  try {
    t.__ahbInstance.$destroy?.();
  } catch {
  }
  t.innerHTML = "";
  const r = t.__ahbSlotNodes && t.__ahbSlotNodes.length ? t.__ahbSlotNodes.map((o) => o.outerHTML ?? o.textContent ?? "").join("") : "";
  r && d ? t.__ahbInstance = new d({ target: t, props: { component: a, props: n, slotHTML: r } }) : t.__ahbInstance = new a({ target: t, props: n }), t.removeAttribute("data-ahb-truncated");
}
function E(t) {
  if (!t.getAttribute("data-ahb-truncated") || t.querySelector(".ahb-trunc-note")) return;
  const e = document.createElement("div");
  e.className = "ahb-trunc-note";
  const a = t.getAttribute("data-ahb-truncated");
  e.textContent = `Showing truncated ${a}. Click to expand.`, e.addEventListener("click", () => C(t)), t.appendChild(e);
}
async function f(t) {
  if (t.__ahbInstance || t.getAttribute("data-ahb-skip") === "true") return;
  const e = t.getAttribute("data-ahb-component");
  if (!e) return;
  !t.__ahbSlotNodes && t.childNodes.length && (t.__ahbSlotNodes = Array.from(t.childNodes));
  const a = await y(e);
  if (!a) {
    t.setAttribute("data-ahb-missing", "true"), t.querySelector(".ahb-missing-msg") || (t.innerHTML = `<div class="ahb-missing-msg">Component "${e}" not found. Check export name.</div>`);
    return;
  }
  let n = A(t);
  n = w(n, t);
  const r = t.__ahbSlotNodes && t.__ahbSlotNodes.length ? t.__ahbSlotNodes.map((o) => o.outerHTML ?? o.textContent ?? "").join("") : "";
  if (t.innerHTML = "", r) {
    const o = await _();
    if (o)
      t.__ahbInstance = new o({ target: t, props: { component: a, props: n, slotHTML: r } });
    else {
      t.__ahbInstance = new a({ target: t, props: n });
      const s = document.createElement("div");
      s.className = "ahb-slot-content", s.innerHTML = r, t.appendChild(s);
    }
  } else
    t.__ahbInstance = new a({ target: t, props: n });
  E(t);
}
function l(t = document) {
  t.querySelectorAll("[data-ahb-component]").forEach((e) => f(e));
}
typeof window < "u" && (window.__ahbEmbedLoaded || (window.__ahbEmbedLoaded = !0, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => l()) : l(), new MutationObserver((e) => {
  for (const a of e)
    for (const n of Array.from(a.addedNodes))
      n instanceof HTMLElement && (n.matches("[data-ahb-component]") && f(n), n.querySelectorAll?.("[data-ahb-component]").forEach((r) => f(r)));
}).observe(document.body, { childList: !0, subtree: !0 }), L(), T()));
function S(t) {
  return "ahb-" + t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}
function N(t) {
  if (t === "true") return !0;
  if (t === "false") return !1;
  if (t === "null") return null;
  if (t !== "undefined") {
    if (!isNaN(Number(t)) && t.trim() !== "") return Number(t);
    if (t.startsWith("{") && t.endsWith("}") || t.startsWith("[") && t.endsWith("]"))
      try {
        return JSON.parse(t);
      } catch {
      }
    return t;
  }
}
function L() {
  for (const t in h) {
    const e = S(t);
    if (customElements.get(e)) continue;
    class a extends HTMLElement {
      instance;
      async connectedCallback() {
        if (this.instance) return;
        const r = await y(t);
        if (!r) {
          this.setAttribute("data-ahb-missing", "true"), this.textContent = `Missing component: ${t}`;
          return;
        }
        let o = {};
        for (const i of Array.from(this.attributes))
          i.name === "class" || i.name === "style" || (o[i.name] = N(i.value));
        const s = this.innerHTML;
        this.innerHTML = "";
        const c = this.getAttribute("data-ahb-no-truncate") !== "true", g = this.getAttribute("data-ahb-page-size"), m = g ? Number(g) : 150;
        if (c)
          for (const i of ["rows", "data"])
            Array.isArray(o[i]) && o[i].length > m && (o[i] = o[i].slice(0, m), this.setAttribute("data-ahb-truncated", i + ":" + m));
        if (s.trim()) {
          const i = await _();
          if (i)
            this.instance = new i({ target: this, props: { component: r, props: o, slotHTML: s } });
          else {
            this.instance = new r({ target: this, props: o });
            const b = document.createElement("div");
            b.className = "ahb-slot-content", b.innerHTML = s, this.appendChild(b);
          }
        } else
          this.instance = new r({ target: this, props: o });
        if (this.getAttribute("data-ahb-truncated")) {
          const i = document.createElement("div");
          i.className = "ahb-trunc-note", i.textContent = `Showing truncated ${this.getAttribute("data-ahb-truncated")}.`, this.appendChild(i);
        }
      }
      disconnectedCallback() {
        this.instance?.$destroy?.(), this.instance = void 0;
      }
    }
    customElements.define(e, a);
  }
}
function T() {
  if (document.getElementById("ahb-theme-toggle")) return;
  try {
    const e = localStorage.getItem("ahb-theme");
    e && document.documentElement.setAttribute("data-theme", e);
  } catch {
  }
  const t = document.createElement("button");
  t.id = "ahb-theme-toggle", t.type = "button", t.className = "ahb-theme-toggle", t.textContent = "Theme: " + (document.documentElement.getAttribute("data-theme") || "terminal") + " (click to toggle)", t.addEventListener("click", () => {
    const e = document.documentElement, n = (e.getAttribute("data-theme") || "terminal") === "terminal" ? "bubbleTea" : "terminal";
    e.setAttribute("data-theme", n), t.textContent = `Theme: ${n} (click to toggle)`, window.dispatchEvent(new CustomEvent("ahb-theme-change", { detail: { theme: n } }));
    try {
      localStorage.setItem("ahb-theme", n);
    } catch {
    }
  }), t.textContent = `Theme: ${document.documentElement.getAttribute("data-theme") || "terminal"} (click to toggle)`, document.body.appendChild(t);
}
