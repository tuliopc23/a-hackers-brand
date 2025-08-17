import { p as M, a as R, b as d, s as S, c as U, f as q, i as B, e as J, d as a, g as l, h as O, t as j, j as Q, k as i, l as b, m as X, n as x, o as Y, q as Z, r as $, u as v, v as ee, w as ae, x as te, y as se } from "./index-BkMiGLJA.js";
import { onMount as le } from "svelte";
const ie = (o, t, p) => {
  o.key === "Enter" && t(i(p));
};
var ne = q('<div class="mb-4"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green"></span> <span class="text-white"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-2"> </div></div>'), re = q('<div><div class="terminal-header svelte-s8hlxk"><div class="terminal-controls"><span class="terminal-control close"></span> <span class="terminal-control minimize"></span> <span class="terminal-control maximize"></span></div> <div class="terminal-title"> </div> <div class="terminal-status svelte-s8hlxk"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body max-h-96 overflow-y-auto svelte-s8hlxk"><!> <!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-terminal-green animate-pulse"></span></div></div></div>');
const oe = {
  hash: "svelte-s8hlxk",
  code: ".terminal-header.svelte-s8hlxk {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);}.terminal-status.svelte-s8hlxk {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-s8hlxk {scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar {width:4px;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-thumb {background:rgba(0, 212, 170, 0.3);border-radius:2px;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-thumb:hover {background:rgba(0, 212, 170, 0.5);}"
};
function de(o, t) {
  M(t, !0), R(o, oe);
  const p = d(t, "title", 3, "Liquid Terminal"), z = d(t, "class", 3, ""), A = d(t, "commands", 19, () => ({
    help: "🚀 Available commands: help, whoami, skills, projects, contact",
    whoami: "🧑‍💻 Tulio Cunha - Full Stack Developer & Design System Architect",
    skills: "⚡ Technologies: Svelte, TypeScript, WebGL, Three.js, WebAssembly",
    projects: "🏗️ Featured: Glass UI, Liquid Terminal, Neural Network Visualizer",
    contact: "📫 Email: tulio@tuliocunha.dev | GitHub: github.com/tuliopc23"
  })), D = d(t, "autoPlay", 3, !1);
  let r, m = S(""), u = S(U([]));
  const c = (e) => {
    const s = e.trim().toLowerCase(), n = A()[s] || `Command "${e}" not found. Type "help" for available commands.`;
    x(
      u,
      [
        ...i(u),
        { command: s, output: n, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), x(m, ""), setTimeout(
      () => {
        r && (r.scrollTop = r.scrollHeight);
      },
      10
    );
  };
  le(() => {
    D() && (setTimeout(() => c("help"), 1e3), setTimeout(() => c("whoami"), 2500), setTimeout(() => c("skills"), 4e3));
  });
  var h = re(), g = a(h), E = l(a(g), 2), G = a(E), k = l(g, 2), f = a(k);
  {
    var N = (e) => {
      var s = ae(), n = te(s);
      se(n, () => t.children), b(e, s);
    };
    B(f, (e) => {
      t.children && e(N);
    });
  }
  var _ = l(f, 2);
  J(_, 17, () => i(u), (e) => e.timestamp, (e, s) => {
    var n = ne(), T = a(n), C = a(T);
    C.textContent = "$";
    var L = l(C, 2), F = a(L), H = l(L, 2), P = a(H), V = l(T, 2), I = a(V);
    j(
      (K) => {
        v(F, i(s).command), v(P, K), v(I, i(s).output);
      },
      [() => i(s).timestamp.toLocaleTimeString()]
    ), b(e, n);
  });
  var W = l(_, 2), w = a(W);
  w.textContent = "$";
  var y = l(w, 2);
  y.__keydown = [ie, c, m], O(k, (e) => r = e, () => r), j(
    (e) => {
      $(h, 1, e, "svelte-s8hlxk"), v(G, p());
    },
    [
      () => Y(Z("terminal glass-heavy max-w-4xl mx-auto", z()))
    ]
  ), Q(y, () => i(m), (e) => x(m, e)), b(o, h), X();
}
ee(["keydown"]);
export {
  de as default
};
