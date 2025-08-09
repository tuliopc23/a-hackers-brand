import { AlertCircle as _n, Info as vi, XCircle as ui, CheckCircle2 as fi, X as va, Minus as Zn, Check as Xa, ChevronDown as Xr, TrendingDown as bi, TrendingUp as gi, Activity as yn, ChevronLeft as ua, ChevronRight as Nr, ChevronsLeft as mi, ChevronsRight as hi, Search as Qn, Filter as pi, ChevronUp as kn, Pause as xi, Play as wi } from "lucide-svelte";
import { onMount as yt, createEventDispatcher as zt } from "svelte";
import { T as Lt } from "@threlte/core";
import { OrbitControls as _i, HTML as yi } from "@threlte/extras";
const ki = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ki);
const ka = 1, Ca = 2, Jn = 4, Ci = 8, Si = 16, Ei = 1, Ti = 4, Mi = 8, Ai = 16, zi = 1, Ii = 2, Pi = 4, Li = 1, Di = 2, Tt = Symbol(), ji = Symbol("filename"), Ri = "http://www.w3.org/1999/xhtml", Ni = "http://www.w3.org/2000/svg", qi = "@attach", $n = typeof window < "u", Cn = globalThis.process?.env?.NODE_ENV, Xe = Cn && !Cn.toLowerCase().startsWith("prod");
var Sa = Array.isArray, Oi = Array.prototype.indexOf, eo = Array.from, pr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, to = Object.getOwnPropertyDescriptors, Bi = Object.prototype, Fi = Array.prototype, rn = Object.getPrototypeOf;
function Hi(r) {
  return typeof r == "function";
}
const qt = () => {
};
function Vi(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function Gi() {
  var r, e, a = new Promise((n, l) => {
    r = n, e = l;
  });
  return { promise: a, resolve: r, reject: e };
}
function Kr(r, e) {
  if (Array.isArray(r))
    return r;
  if (!(Symbol.iterator in r))
    return Array.from(r);
  const a = [];
  for (const n of r)
    if (a.push(n), a.length === e) break;
  return a;
}
const Bt = 2, an = 4, nn = 8, Hr = 16, fr = 32, Vr = 64, ro = 128, Vt = 256, fa = 512, Pt = 1024, Ut = 2048, br = 4096, Qt = 8192, Ar = 16384, Ea = 32768, zr = 65536, ba = 1 << 17, Ui = 1 << 18, on = 1 << 19, ao = 1 << 20, ga = 1 << 21, Ta = 1 << 22, kr = 1 << 23, sr = Symbol("$state"), Yi = Symbol("legacy props"), Wi = Symbol(""), no = Symbol("proxy path"), ln = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Xi() {
  if (Xe) {
    const r = new Error("await_outside_boundary\nCannot await outside a `<svelte:boundary>` with a `pending` snippet\nhttps://svelte.dev/e/await_outside_boundary");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ki() {
  if (Xe) {
    const r = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Sn() {
  if (Xe) {
    const r = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Zi() {
  if (Xe) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Qi(r) {
  if (Xe) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ji() {
  if (Xe) {
    const r = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $i(r) {
  if (Xe) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function el() {
  if (Xe) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function tl() {
  if (Xe) {
    const r = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
function rl(r) {
  if (Xe) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function al(r) {
  if (Xe) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function nl(r) {
  if (Xe) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function ol() {
  if (Xe) {
    const r = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function il() {
  if (Xe) {
    const r = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ll() {
  if (Xe) {
    const r = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var oo = "font-weight: bold", io = "font-weight: normal";
function sl(r) {
  Xe ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${r}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, oo, io) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function dl() {
  Xe ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", oo, io) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let cl = !1;
function lo(r) {
  return r === this.v;
}
function sn(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function so(r) {
  return !sn(r, this.v);
}
let vl = !1;
function co(r) {
  let e = Error();
  const a = e.stack;
  if (!a) return null;
  const n = a.split(`
`), l = [`
`];
  for (let d = 0; d < n.length; d++) {
    const c = n[d];
    if (c !== "Error") {
      if (c.includes("validate_each_keys"))
        return null;
      c.includes("svelte/src/internal") || l.push(c);
    }
  }
  return l.length === 1 ? null : (pr(e, "stack", {
    value: l.join(`
`)
  }), pr(e, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${r}Error`
  }), /** @type {Error & { stack: string }} */
  e);
}
function mr(r, e) {
  return r.label = e, vo(r.v, e), r;
}
function vo(r, e) {
  return r?.[no]?.(e), r;
}
let Gt = null;
function ma(r) {
  Gt = r;
}
let ha = null;
function En(r) {
  ha = r;
}
let ta = null;
function Tn(r) {
  ta = r;
}
function Ke(r, e = !1, a) {
  Gt = {
    p: Gt,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  }, Xe && (Gt.function = a, ta = a);
}
function Ze(r) {
  var e = (
    /** @type {ComponentContext} */
    Gt
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      Co(n);
  }
  return r !== void 0 && (e.x = r), Gt = e.p, Xe && (ta = Gt?.function ?? null), r ?? /** @type {T} */
  {};
}
function uo() {
  return !0;
}
const Ka = /* @__PURE__ */ new WeakMap();
function ul(r) {
  var e = st;
  if (e === null)
    return ft.f |= kr, r;
  if (Xe && r instanceof Error && !Ka.has(r) && Ka.set(r, fl(r, e)), (e.f & Ea) === 0) {
    if ((e.f & ro) === 0)
      throw !e.parent && r instanceof Error && fo(r), r;
    e.b.error(r);
  } else
    dn(r, e);
}
function dn(r, e) {
  for (; e !== null; ) {
    if ((e.f & ro) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw r instanceof Error && fo(r), r;
}
function fl(r, e) {
  const a = Wr(r, "message");
  if (!(a && !a.configurable)) {
    for (var n = "	", l = `
${n}in ${e.fn?.name || "<unknown>"}`, d = e.ctx; d !== null; )
      l += `
${n}in ${d.function?.[ji].split("/").pop()}`, d = d.p;
    return {
      message: r.message + `
${l}
`,
      stack: r.stack?.split(`
`).filter((c) => !c.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function fo(r) {
  const e = Ka.get(r);
  e && (pr(r, "message", {
    value: e.message
  }), pr(r, "stack", {
    value: e.stack
  }));
}
let pa = [];
function bl() {
  var r = pa;
  pa = [], Vi(r);
}
function ra(r) {
  pa.length === 0 && queueMicrotask(bl), pa.push(r);
}
function gl() {
  for (var r = (
    /** @type {Effect} */
    st.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && Xi(), r;
}
let Cr = null;
function bo(r) {
  Cr = r;
}
const ml = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ma(r) {
  var e = Bt | Ut, a = ft !== null && (ft.f & Bt) !== 0 ? (
    /** @type {Derived} */
    ft
  ) : null;
  return st === null || a !== null && (a.f & Vt) !== 0 ? e |= Vt : st.f |= on, {
    ctx: Gt,
    deps: null,
    effects: null,
    equals: lo,
    f: e,
    fn: r,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Tt
    ),
    wv: 0,
    parent: a ?? st,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function hl(r, e) {
  let a = (
    /** @type {Effect | null} */
    st
  );
  a === null && Ki();
  var n = (
    /** @type {Boundary} */
    a.b
  ), l = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), d = Jr(
    /** @type {V} */
    Tt
  ), c = null, g = !ft;
  return Ll(() => {
    Xe && (Cr = st);
    try {
      var w = r();
    } catch (A) {
      w = Promise.reject(A);
    }
    Xe && (Cr = null);
    var N = () => w;
    l = c?.then(N, N) ?? Promise.resolve(w), c = l;
    var h = (
      /** @type {Batch} */
      _t
    ), P = n.pending;
    g && (n.update_pending_count(1), P || h.increment());
    const L = (A, k = void 0) => {
      c = null, Cr = null, P || h.activate(), k ? k !== ln && (d.f |= kr, $r(d, k)) : ((d.f & kr) !== 0 && (d.f ^= kr), $r(d, A)), g && (n.update_pending_count(-1), P || h.decrement()), po();
    };
    if (l.then(L, (A) => L(null, A || "unknown")), h)
      return () => {
        queueMicrotask(() => h.neuter());
      };
  }), Xe && (d.f |= Ta), new Promise((w) => {
    function N(h) {
      function P() {
        h === l ? w(d) : N(l);
      }
      h.then(P, P);
    }
    N(l);
  });
}
// @__NO_SIDE_EFFECTS__
function Ee(r) {
  const e = /* @__PURE__ */ Ma(r);
  return Io(e), e;
}
// @__NO_SIDE_EFFECTS__
function go(r) {
  const e = /* @__PURE__ */ Ma(r);
  return e.equals = so, e;
}
function Za(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1)
      Yt(
        /** @type {Effect} */
        e[a]
      );
  }
}
let Ba = [];
function pl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & Bt) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function cn(r) {
  var e, a = st;
  if (dr(pl(r)), Xe) {
    let n = Fr;
    zn(/* @__PURE__ */ new Set());
    try {
      Ba.includes(r) && Zi(), Ba.push(r), Za(r), e = Ja(r);
    } finally {
      dr(a), zn(n), Ba.pop();
    }
  } else
    try {
      Za(r), e = Ja(r);
    } finally {
      dr(a);
    }
  return e;
}
function mo(r) {
  var e = cn(r);
  if (r.equals(e) || (r.v = e, r.wv = Lo()), !Lr)
    if (Br !== null)
      Br.set(r, r.v);
    else {
      var a = (hr || (r.f & Vt) !== 0) && r.deps !== null ? br : Pt;
      jt(r, a);
    }
}
function ho(r, e, a) {
  const n = Ma;
  if (e.length === 0) {
    a(r.map(n));
    return;
  }
  var l = _t, d = (
    /** @type {Effect} */
    st
  ), c = xl(), g = gl();
  Promise.all(e.map((w) => /* @__PURE__ */ hl(w))).then((w) => {
    l?.activate(), c();
    try {
      a([...r.map(n), ...w]);
    } catch (N) {
      (d.f & Ar) === 0 && dn(N, d);
    }
    l?.deactivate(), po();
  }).catch((w) => {
    g.error(w);
  });
}
function xl() {
  var r = st, e = ft, a = Gt;
  return function() {
    dr(r), ar(e), ma(a), Xe && bo(null);
  };
}
function po() {
  dr(null), ar(null), ma(null), Xe && bo(null);
}
const Gr = /* @__PURE__ */ new Set();
let _t = null, ca = null, Br = null, Mn = /* @__PURE__ */ new Set(), xa = [];
function xo() {
  const r = (
    /** @type {() => void} */
    xa.shift()
  );
  xa.length > 0 && queueMicrotask(xo), r();
}
let Zr = [], vn = null, Qa = !1;
class Qr {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #d = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #c = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #r = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #a = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #t = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #v = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #u = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    Zr = [], ca = null;
    var a = null;
    if (Gr.size > 1) {
      a = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map();
      for (const [d, c] of this.current)
        a.set(d, { v: d.v, wv: d.wv }), d.v = c;
      for (const d of Gr)
        if (d !== this)
          for (const [c, g] of d.#n)
            a.has(c) || (a.set(c, { v: c.v, wv: c.wv }), c.v = g);
    }
    for (const d of e)
      this.#b(d);
    if (this.#r.length === 0 && this.#e === 0) {
      this.#f();
      var n = this.#a, l = this.#t;
      this.#a = [], this.#t = [], this.#l = [], ca = _t, _t = null, An(n), An(l), _t === null ? _t = this : Gr.delete(this), this.#d?.resolve();
    } else
      this.#s(this.#a), this.#s(this.#t), this.#s(this.#l);
    if (a) {
      for (const [d, { v: c, wv: g }] of a)
        d.wv <= g && (d.v = c);
      Br = null;
    }
    for (const d of this.#r)
      Or(d);
    for (const d of this.#i)
      Or(d);
    this.#r = [], this.#i = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #b(e) {
    e.f ^= Pt;
    for (var a = e.first; a !== null; ) {
      var n = a.f, l = (n & (fr | Vr)) !== 0, d = l && (n & Pt) !== 0, c = d || (n & Qt) !== 0 || this.skipped_effects.has(a);
      if (!c && a.fn !== null) {
        if (l)
          a.f ^= Pt;
        else if ((n & Pt) === 0)
          if ((n & an) !== 0)
            this.#t.push(a);
          else if ((n & Ta) !== 0) {
            var g = a.b?.pending ? this.#i : this.#r;
            g.push(a);
          } else aa(a) && ((a.f & Hr) !== 0 && this.#l.push(a), Or(a));
        var w = a.first;
        if (w !== null) {
          a = w;
          continue;
        }
      }
      var N = a.parent;
      for (a = a.next; a === null && N !== null; )
        a = N.next, N = N.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const a of e)
      ((a.f & Ut) !== 0 ? this.#v : this.#u).push(a), jt(a, Pt);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, a) {
    this.#n.has(e) || this.#n.set(e, a), this.current.set(e, e.v);
  }
  activate() {
    _t = this;
  }
  deactivate() {
    _t = null, ca = null;
    for (const e of Mn)
      if (Mn.delete(e), e(), _t !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Zr.length > 0 ? wl() : this.#f(), _t === this && (this.#e === 0 && Gr.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #f() {
    if (!this.#c)
      for (const e of this.#o)
        e();
    this.#o.clear();
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    if (this.#e -= 1, this.#e === 0) {
      for (const e of this.#v)
        jt(e, Ut), Tr(e);
      for (const e of this.#u)
        jt(e, br), Tr(e);
      this.#a = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#o.add(e);
  }
  settled() {
    return (this.#d ??= Gi()).promise;
  }
  static ensure() {
    if (_t === null) {
      const e = _t = new Qr();
      Gr.add(_t), Qr.enqueue(() => {
        _t === e && e.flush();
      });
    }
    return _t;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    xa.length === 0 && queueMicrotask(xo), xa.unshift(e);
  }
}
function wl() {
  var r = qr;
  Qa = !0;
  try {
    var e = 0;
    for (Pn(!0); Zr.length > 0; ) {
      var a = Qr.ensure();
      if (e++ > 1e3) {
        if (Xe) {
          var n = /* @__PURE__ */ new Map();
          for (const d of a.current.keys())
            for (const [c, g] of d.updated ?? []) {
              var l = n.get(c);
              l || (l = { error: g.error, count: 0 }, n.set(c, l)), l.count += g.count;
            }
          for (const d of n.values())
            console.error(d.error);
        }
        _l();
      }
      a.process(Zr), Sr.clear();
    }
  } finally {
    Qa = !1, Pn(r), vn = null;
  }
}
function _l() {
  try {
    el();
  } catch (r) {
    Xe && pr(r, "stack", { value: "" }), dn(r, vn);
  }
}
function An(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if ((n.f & (Ar | Qt)) === 0 && aa(n)) {
        var l = _t ? _t.current.size : 0;
        if (Or(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? Mo(n) : n.fn = null), _t !== null && _t.current.size > l && (n.f & ao) !== 0)
          break;
      }
    }
    for (; a < e; )
      Tr(r[a++]);
  }
}
function Tr(r) {
  for (var e = vn = r; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (Qa && e === st && (a & Hr) !== 0)
      return;
    if ((a & (Vr | fr)) !== 0) {
      if ((a & Pt) === 0) return;
      e.f ^= Pt;
    }
  }
  Zr.push(e);
}
let Fr = /* @__PURE__ */ new Set();
const Sr = /* @__PURE__ */ new Map();
function zn(r) {
  Fr = r;
}
let un = !1;
function yl() {
  un = !0;
}
function Jr(r, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: lo,
    rv: 0,
    wv: 0
  };
  return a;
}
// @__NO_SIDE_EFFECTS__
function Se(r, e) {
  const a = Jr(r);
  return Io(a), a;
}
// @__NO_SIDE_EFFECTS__
function wo(r, e = !1, a = !0) {
  const n = Jr(r);
  return e || (n.equals = so), n;
}
function Y(r, e, a = !1) {
  ft !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Kt || (ft.f & ba) !== 0) && uo() && (ft.f & (Bt | Hr | Ta | ba)) !== 0 && !cr?.includes(r) && ll();
  let n = a ? lt(e) : e;
  return Xe && vo(
    n,
    /** @type {string} */
    r.label
  ), $r(r, n);
}
function $r(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    Lr ? Sr.set(r, e) : Sr.set(r, a), r.v = e;
    var n = Qr.ensure();
    if (n.capture(r, a), Xe) {
      if (st !== null) {
        const l = co("UpdatedAt");
        if (l !== null) {
          r.updated ??= /* @__PURE__ */ new Map();
          let d = r.updated.get(l.stack);
          d || (d = { error: l, count: 0 }, r.updated.set(l.stack, d)), d.count++;
        }
      }
      st !== null && (r.set_during_effect = !0);
    }
    (r.f & Bt) !== 0 && ((r.f & Ut) !== 0 && cn(
      /** @type {Derived} */
      r
    ), jt(r, (r.f & Vt) === 0 ? Pt : br)), r.wv = Lo(), yo(r, Ut), st !== null && (st.f & Pt) !== 0 && (st.f & (fr | Vr)) === 0 && (Ht === null ? jl([r]) : Ht.push(r)), Xe && Fr.size > 0 && !un && _o();
  }
  return e;
}
function _o() {
  un = !1;
  const r = Array.from(Fr);
  for (const e of r)
    (e.f & Pt) !== 0 && jt(e, br), aa(e) && Or(e);
  Fr.clear();
}
function Aa(r, e = 1) {
  var a = t(r), n = e === 1 ? a++ : a--;
  return Y(r, a), n;
}
function Fa(r) {
  Y(r, r.v + 1);
}
function yo(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = a.length, l = 0; l < n; l++) {
      var d = a[l], c = d.f;
      if (Xe && (c & ba) !== 0) {
        Fr.add(d);
        continue;
      }
      var g = (c & Ut) === 0;
      g && jt(d, e), (c & Bt) !== 0 ? yo(
        /** @type {Derived} */
        d,
        br
      ) : g && Tr(
        /** @type {Effect} */
        d
      );
    }
}
const kl = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function lt(r) {
  if (typeof r != "object" || r === null || sr in r)
    return r;
  const e = rn(r);
  if (e !== Bi && e !== Fi)
    return r;
  var a = /* @__PURE__ */ new Map(), n = Sa(r), l = /* @__PURE__ */ Se(0), d = Er, c = (N) => {
    if (Er === d)
      return N();
    var h = ft, P = Er;
    ar(null), Dn(d);
    var L = N();
    return ar(h), Dn(P), L;
  };
  n && (a.set("length", /* @__PURE__ */ Se(
    /** @type {any[]} */
    r.length
  )), Xe && (r = /** @type {any} */
  El(
    /** @type {any[]} */
    r
  )));
  var g = "";
  function w(N) {
    g = N, mr(l, `${g} version`);
    for (const [h, P] of a)
      mr(P, _r(g, h));
  }
  return new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(N, h, P) {
        (!("value" in P) || P.configurable === !1 || P.enumerable === !1 || P.writable === !1) && ol();
        var L = a.get(h);
        return L === void 0 ? L = c(() => {
          var A = /* @__PURE__ */ Se(P.value);
          return a.set(h, A), Xe && typeof h == "string" && mr(A, _r(g, h)), A;
        }) : Y(L, P.value, !0), !0;
      },
      deleteProperty(N, h) {
        var P = a.get(h);
        if (P === void 0) {
          if (h in N) {
            const L = c(() => /* @__PURE__ */ Se(Tt));
            a.set(h, L), Fa(l), Xe && mr(L, _r(g, h));
          }
        } else
          Y(P, Tt), Fa(l);
        return !0;
      },
      get(N, h, P) {
        if (h === sr)
          return r;
        if (Xe && h === no)
          return w;
        var L = a.get(h), A = h in N;
        if (L === void 0 && (!A || Wr(N, h)?.writable) && (L = c(() => {
          var f = lt(A ? N[h] : Tt), B = /* @__PURE__ */ Se(f);
          return Xe && mr(B, _r(g, h)), B;
        }), a.set(h, L)), L !== void 0) {
          var k = t(L);
          return k === Tt ? void 0 : k;
        }
        return Reflect.get(N, h, P);
      },
      getOwnPropertyDescriptor(N, h) {
        var P = Reflect.getOwnPropertyDescriptor(N, h);
        if (P && "value" in P) {
          var L = a.get(h);
          L && (P.value = t(L));
        } else if (P === void 0) {
          var A = a.get(h), k = A?.v;
          if (A !== void 0 && k !== Tt)
            return {
              enumerable: !0,
              configurable: !0,
              value: k,
              writable: !0
            };
        }
        return P;
      },
      has(N, h) {
        if (h === sr)
          return !0;
        var P = a.get(h), L = P !== void 0 && P.v !== Tt || Reflect.has(N, h);
        if (P !== void 0 || st !== null && (!L || Wr(N, h)?.writable)) {
          P === void 0 && (P = c(() => {
            var k = L ? lt(N[h]) : Tt, f = /* @__PURE__ */ Se(k);
            return Xe && mr(f, _r(g, h)), f;
          }), a.set(h, P));
          var A = t(P);
          if (A === Tt)
            return !1;
        }
        return L;
      },
      set(N, h, P, L) {
        var A = a.get(h), k = h in N;
        if (n && h === "length")
          for (var f = P; f < /** @type {Source<number>} */
          A.v; f += 1) {
            var B = a.get(f + "");
            B !== void 0 ? Y(B, Tt) : f in N && (B = c(() => /* @__PURE__ */ Se(Tt)), a.set(f + "", B), Xe && mr(B, _r(g, f)));
          }
        if (A === void 0)
          (!k || Wr(N, h)?.writable) && (A = c(() => /* @__PURE__ */ Se(void 0)), Y(A, lt(P)), a.set(h, A), Xe && mr(A, _r(g, h)));
        else {
          k = A.v !== Tt;
          var $ = c(() => lt(P));
          Y(A, $);
        }
        var y = Reflect.getOwnPropertyDescriptor(N, h);
        if (y?.set && y.set.call(L, P), !k) {
          if (n && typeof h == "string") {
            var T = (
              /** @type {Source<number>} */
              a.get("length")
            ), F = Number(h);
            Number.isInteger(F) && F >= T.v && Y(T, F + 1);
          }
          Fa(l);
        }
        return !0;
      },
      ownKeys(N) {
        t(l);
        var h = Reflect.ownKeys(N).filter((A) => {
          var k = a.get(A);
          return k === void 0 || k.v !== Tt;
        });
        for (var [P, L] of a)
          L.v !== Tt && !(P in N) && h.push(P);
        return h;
      },
      setPrototypeOf() {
        il();
      }
    }
  );
}
function _r(r, e) {
  return typeof e == "symbol" ? `${r}[Symbol(${e.description ?? ""})]` : kl.test(e) ? `${r}.${e}` : /^\d+$/.test(e) ? `${r}[${e}]` : `${r}['${e}']`;
}
function In(r) {
  try {
    if (r !== null && typeof r == "object" && sr in r)
      return r[sr];
  } catch {
  }
  return r;
}
function Cl(r, e) {
  return Object.is(In(r), In(e));
}
const Sl = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function El(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var l = Reflect.get(e, a, n);
      return Sl.has(
        /** @type {string} */
        a
      ) ? function(...d) {
        yl();
        var c = l.apply(this, d);
        return _o(), c;
      } : l;
    }
  });
}
var ko, Tl, Ml, Al;
function Ir(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function rr(r) {
  return Ml.call(r);
}
// @__NO_SIDE_EFFECTS__
function za(r) {
  return Al.call(r);
}
function i(r, e) {
  return /* @__PURE__ */ rr(r);
}
function ke(r, e) {
  {
    var a = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ rr(
        /** @type {Node} */
        r
      )
    );
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ za(a) : a;
  }
}
function u(r, e = 1, a = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ za(n);
  return n;
}
function zl(r) {
  r.textContent = "";
}
function fn() {
  return !1;
}
function Il(r) {
  st === null && ft === null && $i(r), ft !== null && (ft.f & Vt) !== 0 && st === null && Ji(), Lr && Qi(r);
}
function Pl(r, e) {
  var a = e.last;
  a === null ? e.last = e.first = r : (a.next = r, r.prev = a, e.last = r);
}
function xr(r, e, a, n = !0) {
  var l = st;
  if (Xe)
    for (; l !== null && (l.f & ba) !== 0; )
      l = l.parent;
  l !== null && (l.f & Qt) !== 0 && (r |= Qt);
  var d = {
    ctx: Gt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | Ut,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: l,
    b: l && l.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (Xe && (d.component_function = ta), a)
    try {
      Or(d), d.f |= Ea;
    } catch (w) {
      throw Yt(d), w;
    }
  else e !== null && Tr(d);
  var c = a && d.deps === null && d.first === null && d.nodes_start === null && d.teardown === null && (d.f & on) === 0;
  if (!c && n && (l !== null && Pl(d, l), ft !== null && (ft.f & Bt) !== 0 && (r & Vr) === 0)) {
    var g = (
      /** @type {Derived} */
      ft
    );
    (g.effects ??= []).push(d);
  }
  return d;
}
function bn(r) {
  const e = xr(nn, null, !1);
  return jt(e, Pt), e.teardown = r, e;
}
function xt(r) {
  Il("$effect"), Xe && pr(r, "name", {
    value: "$effect"
  });
  var e = (
    /** @type {Effect} */
    st.f
  ), a = !ft && (e & fr) !== 0 && (e & Ea) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Gt
    );
    (n.e ??= []).push(r);
  } else
    return Co(r);
}
function Co(r) {
  return xr(an | ao, r, !1);
}
function gr(r) {
  return xr(an, r, !1);
}
function Ll(r) {
  return xr(Ta | on, r, !0);
}
function Ia(r, e = 0) {
  return xr(nn | e, r, !0);
}
function M(r, e = [], a = []) {
  ho(e, a, (n) => {
    xr(nn, () => r(...n.map(t)), !0);
  });
}
function Pr(r, e = 0) {
  var a = xr(Hr | e, r, !0);
  return Xe && (a.dev_stack = ha), a;
}
function vr(r, e = !0) {
  return xr(fr, r, !0, e);
}
function So(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = Lr, n = ft;
    Ln(!0), ar(null);
    try {
      e.call(null);
    } finally {
      Ln(a), ar(n);
    }
  }
}
function Eo(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    a.ac?.abort(ln);
    var n = a.next;
    (a.f & Vr) !== 0 ? a.parent = null : Yt(a, e), a = n;
  }
}
function Dl(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    (e.f & fr) === 0 && Yt(e), e = a;
  }
}
function Yt(r, e = !0) {
  var a = !1;
  (e || (r.f & Ui) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (To(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), a = !0), Eo(r, e && !a), wa(r, 0), jt(r, Ar);
  var n = r.transitions;
  if (n !== null)
    for (const d of n)
      d.stop();
  So(r);
  var l = r.parent;
  l !== null && l.first !== null && Mo(r), Xe && (r.component_function = null), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function To(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ za(r)
    );
    r.remove(), r = a;
  }
}
function Mo(r) {
  var e = r.parent, a = r.prev, n = r.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = a));
}
function Pa(r, e) {
  var a = [];
  gn(r, a, !0), Ao(a, () => {
    Yt(r), e && e();
  });
}
function Ao(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var l of r)
      l.out(n);
  } else
    e();
}
function gn(r, e, a) {
  if ((r.f & Qt) === 0) {
    if (r.f ^= Qt, r.transitions !== null)
      for (const c of r.transitions)
        (c.is_global || a) && e.push(c);
    for (var n = r.first; n !== null; ) {
      var l = n.next, d = (n.f & zr) !== 0 || (n.f & fr) !== 0;
      gn(n, e, d ? a : !1), n = l;
    }
  }
}
function La(r) {
  zo(r, !0);
}
function zo(r, e) {
  if ((r.f & Qt) !== 0) {
    r.f ^= Qt, (r.f & Pt) === 0 && (jt(r, Ut), Tr(r));
    for (var a = r.first; a !== null; ) {
      var n = a.next, l = (a.f & zr) !== 0 || (a.f & fr) !== 0;
      zo(a, l ? e : !1), a = n;
    }
    if (r.transitions !== null)
      for (const d of r.transitions)
        (d.is_global || e) && d.in();
  }
}
let qr = !1;
function Pn(r) {
  qr = r;
}
let Lr = !1;
function Ln(r) {
  Lr = r;
}
let ft = null, Kt = !1;
function ar(r) {
  ft = r;
}
let st = null;
function dr(r) {
  st = r;
}
let cr = null;
function Io(r) {
  ft !== null && (cr === null ? cr = [r] : cr.push(r));
}
let Dt = null, Nt = 0, Ht = null;
function jl(r) {
  Ht = r;
}
let Po = 1, ea = 0, Er = ea;
function Dn(r) {
  Er = r;
}
let hr = !1;
function Lo() {
  return ++Po;
}
function aa(r) {
  var e = r.f;
  if ((e & Ut) !== 0)
    return !0;
  if ((e & br) !== 0) {
    var a = r.deps, n = (e & Vt) !== 0;
    if (a !== null) {
      var l, d, c = (e & fa) !== 0, g = n && st !== null && !hr, w = a.length;
      if ((c || g) && (st === null || (st.f & Ar) === 0)) {
        var N = (
          /** @type {Derived} */
          r
        ), h = N.parent;
        for (l = 0; l < w; l++)
          d = a[l], (c || !d?.reactions?.includes(N)) && (d.reactions ??= []).push(N);
        c && (N.f ^= fa), g && h !== null && (h.f & Vt) === 0 && (N.f ^= Vt);
      }
      for (l = 0; l < w; l++)
        if (d = a[l], aa(
          /** @type {Derived} */
          d
        ) && mo(
          /** @type {Derived} */
          d
        ), d.wv > r.wv)
          return !0;
    }
    (!n || st !== null && !hr) && jt(r, Pt);
  }
  return !1;
}
function Do(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !cr?.includes(r))
    for (var l = 0; l < n.length; l++) {
      var d = n[l];
      (d.f & Bt) !== 0 ? Do(
        /** @type {Derived} */
        d,
        e,
        !1
      ) : e === d && (a ? jt(d, Ut) : (d.f & Pt) !== 0 && jt(d, br), Tr(
        /** @type {Effect} */
        d
      ));
    }
}
function Ja(r) {
  var e = Dt, a = Nt, n = Ht, l = ft, d = hr, c = cr, g = Gt, w = Kt, N = Er, h = r.f;
  Dt = /** @type {null | Value[]} */
  null, Nt = 0, Ht = null, hr = (h & Vt) !== 0 && (Kt || !qr || ft === null), ft = (h & (fr | Vr)) === 0 ? r : null, cr = null, ma(r.ctx), Kt = !1, Er = ++ea, r.ac !== null && (r.ac.abort(ln), r.ac = null);
  try {
    r.f |= ga;
    var P = (
      /** @type {Function} */
      (0, r.fn)()
    ), L = r.deps;
    if (Dt !== null) {
      var A;
      if (wa(r, Nt), L !== null && Nt > 0)
        for (L.length = Nt + Dt.length, A = 0; A < Dt.length; A++)
          L[Nt + A] = Dt[A];
      else
        r.deps = L = Dt;
      if (!hr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (h & Bt) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (A = Nt; A < L.length; A++)
          (L[A].reactions ??= []).push(r);
    } else L !== null && Nt < L.length && (wa(r, Nt), L.length = Nt);
    if (uo() && Ht !== null && !Kt && L !== null && (r.f & (Bt | br | Ut)) === 0)
      for (A = 0; A < /** @type {Source[]} */
      Ht.length; A++)
        Do(
          Ht[A],
          /** @type {Effect} */
          r
        );
    return l !== null && l !== r && (ea++, Ht !== null && (n === null ? n = Ht : n.push(.../** @type {Source[]} */
    Ht))), (r.f & kr) !== 0 && (r.f ^= kr), P;
  } catch (k) {
    return ul(k);
  } finally {
    r.f ^= ga, Dt = e, Nt = a, Ht = n, ft = l, hr = d, cr = c, ma(g), Kt = w, Er = N;
  }
}
function Rl(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Oi.call(a, r);
    if (n !== -1) {
      var l = a.length - 1;
      l === 0 ? a = e.reactions = null : (a[n] = a[l], a.pop());
    }
  }
  a === null && (e.f & Bt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Dt === null || !Dt.includes(e)) && (jt(e, br), (e.f & (Vt | fa)) === 0 && (e.f ^= fa), Za(
    /** @type {Derived} **/
    e
  ), wa(
    /** @type {Derived} **/
    e,
    0
  ));
}
function wa(r, e) {
  var a = r.deps;
  if (a !== null)
    for (var n = e; n < a.length; n++)
      Rl(r, a[n]);
}
function Or(r) {
  var e = r.f;
  if ((e & Ar) === 0) {
    jt(r, Pt);
    var a = st, n = qr;
    if (st = r, qr = !0, Xe) {
      var l = ta;
      Tn(r.component_function);
      var d = (
        /** @type {any} */
        ha
      );
      En(r.dev_stack ?? ha);
    }
    try {
      (e & Hr) !== 0 ? Dl(r) : Eo(r), So(r);
      var c = Ja(r);
      r.teardown = typeof c == "function" ? c : null, r.wv = Po;
      var g;
      Xe && vl && (r.f & Ut) !== 0 && r.deps;
    } finally {
      qr = n, st = a, Xe && (Tn(l), En(d));
    }
  }
}
function t(r) {
  var e = r.f, a = (e & Bt) !== 0;
  if (ft !== null && !Kt) {
    var n = st !== null && (st.f & Ar) !== 0;
    if (!n && !cr?.includes(r)) {
      var l = ft.deps;
      if ((ft.f & ga) !== 0)
        r.rv < ea && (r.rv = ea, Dt === null && l !== null && l[Nt] === r ? Nt++ : Dt === null ? Dt = [r] : (!hr || !Dt.includes(r)) && Dt.push(r));
      else {
        (ft.deps ??= []).push(r);
        var d = r.reactions;
        d === null ? r.reactions = [ft] : d.includes(ft) || d.push(ft);
      }
    }
  } else if (a && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var c = (
      /** @type {Derived} */
      r
    ), g = c.parent;
    g !== null && (g.f & Vt) === 0 && (c.f ^= Vt);
  }
  if (Xe) {
    if (Cr) {
      var w = (Cr.f & ga) !== 0, N = Cr.deps?.includes(r);
      if (!w && !Kt && !N) {
        sl(
          /** @type {string} */
          r.label
        );
        var h = co("TracedAt");
        h && console.warn(h);
      }
    }
    ml.delete(r);
  }
  if (Lr) {
    if (Sr.has(r))
      return Sr.get(r);
    if (a) {
      c = /** @type {Derived} */
      r;
      var P = c.v;
      return ((c.f & Pt) === 0 && c.reactions !== null || jo(c)) && (P = cn(c)), Sr.set(c, P), P;
    }
  } else if (a) {
    if (c = /** @type {Derived} */
    r, Br?.has(c))
      return Br.get(c);
    aa(c) && mo(c);
  }
  if ((r.f & kr) !== 0)
    throw r.v;
  return r.v;
}
function jo(r) {
  if (r.v === Tt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Sr.has(e) || (e.f & Bt) !== 0 && jo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Dr(r) {
  var e = Kt;
  try {
    return Kt = !0, r();
  } finally {
    Kt = e;
  }
}
const Nl = -7169;
function jt(r, e) {
  r.f = r.f & Nl | e;
}
function ql(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (sr in r)
      $a(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const a = r[e];
        typeof a == "object" && a && sr in a && $a(a);
      }
  }
}
function $a(r, e = /* @__PURE__ */ new Set()) {
  if (typeof r == "object" && r !== null && // We don't want to traverse DOM elements
  !(r instanceof EventTarget) && !e.has(r)) {
    e.add(r), r instanceof Date && r.getTime();
    for (let n in r)
      try {
        $a(r[n], e);
      } catch {
      }
    const a = rn(r);
    if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
      const n = to(a);
      for (let l in n) {
        const d = n[l].get;
        if (d)
          try {
            d.call(r);
          } catch {
          }
      }
    }
  }
}
function Ol(r, e) {
  if (e) {
    const a = document.body;
    r.autofocus = !0, ra(() => {
      document.activeElement === a && r.focus();
    });
  }
}
let jn = !1;
function Bl() {
  jn || (jn = !0, document.addEventListener(
    "reset",
    (r) => {
      Promise.resolve().then(() => {
        if (!r.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            r.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Da(r) {
  var e = ft, a = st;
  ar(null), dr(null);
  try {
    return r();
  } finally {
    ar(e), dr(a);
  }
}
function Ro(r, e, a, n = a) {
  r.addEventListener(e, () => Da(a));
  const l = r.__on_r;
  l ? r.__on_r = () => {
    l(), n(!0);
  } : r.__on_r = () => n(!0), Bl();
}
const Fl = /* @__PURE__ */ new Set(), Hl = /* @__PURE__ */ new Set();
function No(r, e, a, n = {}) {
  function l(d) {
    if (n.capture || Vl.call(e, d), !d.cancelBubble)
      return Da(() => a?.call(this, d));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? ra(() => {
    e.addEventListener(r, l, n);
  }) : e.addEventListener(r, l, n), l;
}
function Ot(r, e, a, n, l) {
  var d = { capture: n, passive: l }, c = No(r, e, a, d);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && bn(() => {
    e.removeEventListener(r, c, d);
  });
}
function ut(r) {
  for (var e = 0; e < r.length; e++)
    Fl.add(r[e]);
  for (var a of Hl)
    a(r);
}
let Rn = null;
function Vl(r) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, l = r.composedPath?.() || [], d = (
    /** @type {null | Element} */
    l[0] || r.target
  );
  Rn = r;
  var c = 0, g = Rn === r && r.__root;
  if (g) {
    var w = l.indexOf(g);
    if (w !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var N = l.indexOf(e);
    if (N === -1)
      return;
    w <= N && (c = w);
  }
  if (d = /** @type {Element} */
  l[c] || r.target, d !== e) {
    pr(r, "currentTarget", {
      configurable: !0,
      get() {
        return d || a;
      }
    });
    var h = ft, P = st;
    ar(null), dr(null);
    try {
      for (var L, A = []; d !== null; ) {
        var k = d.assignedSlot || d.parentNode || /** @type {any} */
        d.host || null;
        try {
          var f = d["__" + n];
          if (f != null && (!/** @type {any} */
          d.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === d))
            if (Sa(f)) {
              var [B, ...$] = f;
              B.apply(d, [r, ...$]);
            } else
              f.call(d, r);
        } catch (y) {
          L ? A.push(y) : L = y;
        }
        if (r.cancelBubble || k === e || k === null)
          break;
        d = k;
      }
      if (L) {
        for (let y of A)
          queueMicrotask(() => {
            throw y;
          });
        throw L;
      }
    } finally {
      r.__root = e, delete r.currentTarget, ar(h), dr(P);
    }
  }
}
function mn(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function Mr(r, e) {
  var a = (
    /** @type {Effect} */
    st
  );
  a.nodes_start === null && (a.nodes_start = r, a.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function v(r, e) {
  var a = (e & Li) !== 0, n = (e & Di) !== 0, l, d = !r.startsWith("<!>");
  return () => {
    l === void 0 && (l = mn(d ? r : "<!>" + r), a || (l = /** @type {Node} */
    /* @__PURE__ */ rr(l)));
    var c = (
      /** @type {TemplateNode} */
      n || Tl ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (a) {
      var g = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rr(c)
      ), w = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Mr(g, w);
    } else
      Mr(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function Gl(r, e, a = "svg") {
  var n = !r.startsWith("<!>"), l = `<${a}>${n ? r : "<!>" + r}</${a}>`, d;
  return () => {
    if (!d) {
      var c = (
        /** @type {DocumentFragment} */
        mn(l)
      ), g = (
        /** @type {Element} */
        /* @__PURE__ */ rr(c)
      );
      d = /** @type {Element} */
      /* @__PURE__ */ rr(g);
    }
    var w = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    return Mr(w, w), w;
  };
}
// @__NO_SIDE_EFFECTS__
function nr(r, e) {
  return /* @__PURE__ */ Gl(r, e, "svg");
}
function St(r = "") {
  {
    var e = Ir(r + "");
    return Mr(e, e), e;
  }
}
function Ae() {
  var r = document.createDocumentFragment(), e = document.createComment(""), a = Ir();
  return r.append(e, a), Mr(e, a), r;
}
function o(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function Ul(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Yl = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Wl(r) {
  return Yl.includes(r);
}
const Xl = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Kl(r) {
  return r = r.toLowerCase(), Xl[r] ?? r;
}
let qo = !0;
function Nn(r) {
  qo = r;
}
function re(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && (r.__t = a, r.nodeValue = a + "");
}
function it(r, e, ...a) {
  var n = r, l = qt, d;
  Pr(() => {
    l !== (l = e()) && (d && (Yt(d), d = null), Xe && l == null && tl(), d = vr(() => (
      /** @type {SnippetFn} */
      l(n, ...a)
    )));
  }, zr);
}
if (Xe) {
  let r = function(e) {
    if (!(e in globalThis)) {
      let a;
      Object.defineProperty(globalThis, e, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (a !== void 0)
            return a;
          nl(e);
        },
        set: (n) => {
          a = n;
        }
      });
    }
  };
  r("$state"), r("$effect"), r("$derived"), r("$inspect"), r("$props"), r("$bindable");
}
var qn = /* @__PURE__ */ new Map();
function Zl(r, e) {
  var a = qn.get(r);
  a || (a = /* @__PURE__ */ new Set(), qn.set(r, a)), a.add(e);
}
function b(r, e, a = !1) {
  var n = r, l = null, d = null, c = Tt, g = a ? zr : 0, w = !1;
  const N = (A, k = !0) => {
    w = !0, L(k, A);
  };
  var h = null;
  function P() {
    h !== null && (h.lastChild.remove(), n.before(h), h = null);
    var A = c ? l : d, k = c ? d : l;
    A && La(A), k && Pa(k, () => {
      c ? d = null : l = null;
    });
  }
  const L = (A, k) => {
    if (c !== (c = A)) {
      var f = fn(), B = n;
      if (f && (h = document.createDocumentFragment(), h.append(B = Ir())), c ? l ??= k && vr(() => k(B)) : d ??= k && vr(() => k(B)), f) {
        var $ = (
          /** @type {Batch} */
          _t
        ), y = c ? l : d, T = c ? d : l;
        y && $.skipped_effects.delete(y), T && $.skipped_effects.add(T), $.add_callback(P);
      } else
        P();
    }
  };
  Pr(() => {
    w = !1, e(N), w || L(null, null);
  }, g);
}
function At(r, e) {
  return e;
}
function Ql(r, e, a) {
  for (var n = r.items, l = [], d = e.length, c = 0; c < d; c++)
    gn(e[c].e, l, !0);
  var g = d > 0 && l.length === 0 && a !== null;
  if (g) {
    var w = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    zl(w), w.append(
      /** @type {Element} */
      a
    ), n.clear(), er(r, e[0].prev, e[d - 1].next);
  }
  Ao(l, () => {
    for (var N = 0; N < d; N++) {
      var h = e[N];
      g || (n.delete(h.k), er(r, h.prev, h.next)), Yt(h.e, !g);
    }
  });
}
function Ye(r, e, a, n, l, d = null) {
  var c = r, g = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, w = (e & Jn) !== 0;
  if (w) {
    var N = (
      /** @type {Element} */
      r
    );
    c = N.appendChild(Ir());
  }
  var h = null, P = !1, L = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ go(() => {
    var $ = a();
    return Sa($) ? $ : $ == null ? [] : eo($);
  }), k, f;
  function B() {
    Jl(
      f,
      k,
      g,
      L,
      c,
      l,
      e,
      n,
      a
    ), d !== null && (k.length === 0 ? h ? La(h) : h = vr(() => d(c)) : h !== null && Pa(h, () => {
      h = null;
    }));
  }
  Pr(() => {
    f ??= /** @type {Effect} */
    st, k = t(A);
    var $ = k.length;
    if (!(P && $ === 0)) {
      P = $ === 0;
      var y, T, F, H;
      if (fn()) {
        var j = /* @__PURE__ */ new Set(), q = (
          /** @type {Batch} */
          _t
        );
        for (T = 0; T < $; T += 1) {
          F = k[T], H = n(F, T);
          var O = g.items.get(H) ?? L.get(H);
          O ? (e & (ka | Ca)) !== 0 && Oo(O, F, T, e) : (y = Bo(
            null,
            g,
            null,
            null,
            F,
            H,
            T,
            l,
            e,
            a,
            !0
          ), L.set(H, y)), j.add(H);
        }
        for (const [I, G] of g.items)
          j.has(I) || q.skipped_effects.add(G.e);
        q.add_callback(B);
      } else
        B();
      t(A);
    }
  });
}
function Jl(r, e, a, n, l, d, c, g, w) {
  var N = (c & Ci) !== 0, h = (c & (ka | Ca)) !== 0, P = e.length, L = a.items, A = a.first, k = A, f, B = null, $, y = [], T = [], F, H, j, q;
  if (N)
    for (q = 0; q < P; q += 1)
      F = e[q], H = g(F, q), j = L.get(H), j !== void 0 && (j.a?.measure(), ($ ??= /* @__PURE__ */ new Set()).add(j));
  for (q = 0; q < P; q += 1) {
    if (F = e[q], H = g(F, q), j = L.get(H), j === void 0) {
      var O = n.get(H);
      if (O !== void 0) {
        n.delete(H), L.set(H, O);
        var I = B ? B.next : k;
        er(a, B, O), er(a, O, I), Ha(O, I, l), B = O;
      } else {
        var G = k ? (
          /** @type {TemplateNode} */
          k.e.nodes_start
        ) : l;
        B = Bo(
          G,
          a,
          B,
          B === null ? a.first : B.next,
          F,
          H,
          q,
          d,
          c,
          w
        );
      }
      L.set(H, B), y = [], T = [], k = B.next;
      continue;
    }
    if (h && Oo(j, F, q, c), (j.e.f & Qt) !== 0 && (La(j.e), N && (j.a?.unfix(), ($ ??= /* @__PURE__ */ new Set()).delete(j))), j !== k) {
      if (f !== void 0 && f.has(j)) {
        if (y.length < T.length) {
          var U = T[0], R;
          B = U.prev;
          var C = y[0], _ = y[y.length - 1];
          for (R = 0; R < y.length; R += 1)
            Ha(y[R], U, l);
          for (R = 0; R < T.length; R += 1)
            f.delete(T[R]);
          er(a, C.prev, _.next), er(a, B, C), er(a, _, U), k = U, B = _, q -= 1, y = [], T = [];
        } else
          f.delete(j), Ha(j, k, l), er(a, j.prev, j.next), er(a, j, B === null ? a.first : B.next), er(a, B, j), B = j;
        continue;
      }
      for (y = [], T = []; k !== null && k.k !== H; )
        (k.e.f & Qt) === 0 && (f ??= /* @__PURE__ */ new Set()).add(k), T.push(k), k = k.next;
      if (k === null)
        continue;
      j = k;
    }
    y.push(j), B = j, k = j.next;
  }
  if (k !== null || f !== void 0) {
    for (var x = f === void 0 ? [] : eo(f); k !== null; )
      (k.e.f & Qt) === 0 && x.push(k), k = k.next;
    var S = x.length;
    if (S > 0) {
      var W = (c & Jn) !== 0 && P === 0 ? l : null;
      if (N) {
        for (q = 0; q < S; q += 1)
          x[q].a?.measure();
        for (q = 0; q < S; q += 1)
          x[q].a?.fix();
      }
      Ql(a, x, W);
    }
  }
  N && ra(() => {
    if ($ !== void 0)
      for (j of $)
        j.a?.apply();
  }), r.first = a.first && a.first.e, r.last = B && B.e;
  for (var X of n.values())
    Yt(X.e);
  n.clear();
}
function Oo(r, e, a, n) {
  (n & ka) !== 0 && $r(r.v, e), (n & Ca) !== 0 ? $r(
    /** @type {Value<number>} */
    r.i,
    a
  ) : r.i = a;
}
function Bo(r, e, a, n, l, d, c, g, w, N, h) {
  var P = (w & ka) !== 0, L = (w & Si) === 0, A = P ? L ? /* @__PURE__ */ wo(l, !1, !1) : Jr(l) : l, k = (w & Ca) === 0 ? c : Jr(c);
  Xe && P && (A.trace = () => {
    var $ = typeof k == "number" ? c : k.v;
    N()[$];
  });
  var f = {
    i: k,
    v: A,
    k: d,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: n
  };
  try {
    if (r === null) {
      var B = document.createDocumentFragment();
      B.append(r = Ir());
    }
    return f.e = vr(() => g(
      /** @type {Node} */
      r,
      A,
      k,
      N
    ), cl), f.e.prev = a && a.e, f.e.next = n && n.e, a === null ? h || (e.first = f) : (a.next = f, a.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
  } finally {
  }
}
function Ha(r, e, a) {
  for (var n = r.next ? (
    /** @type {TemplateNode} */
    r.next.e.nodes_start
  ) : a, l = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, d = (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ); d !== null && d !== n; ) {
    var c = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ za(d)
    );
    l.before(d), d = c;
  }
}
function er(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function na(r, e, a = !1, n = !1, l = !1) {
  var d = r, c = "";
  M(() => {
    var g = (
      /** @type {Effect} */
      st
    );
    if (c !== (c = e() ?? "") && (g.nodes_start !== null && (To(
      g.nodes_start,
      /** @type {TemplateNode} */
      g.nodes_end
    ), g.nodes_start = g.nodes_end = null), c !== "")) {
      var w = c + "";
      a ? w = `<svg>${w}</svg>` : n && (w = `<math>${w}</math>`);
      var N = mn(w);
      if ((a || n) && (N = /** @type {Element} */
      /* @__PURE__ */ rr(N)), Mr(
        /** @type {TemplateNode} */
        /* @__PURE__ */ rr(N),
        /** @type {TemplateNode} */
        N.lastChild
      ), a || n)
        for (; /* @__PURE__ */ rr(N); )
          d.before(
            /** @type {Node} */
            /* @__PURE__ */ rr(N)
          );
      else
        d.before(N);
    }
  });
}
function Et(r, e, a) {
  var n = r, l, d, c = null, g = null;
  function w() {
    d && (Pa(d), d = null), c && (c.lastChild.remove(), n.before(c), c = null), d = g, g = null;
  }
  Pr(() => {
    if (l !== (l = e())) {
      var N = fn();
      if (l) {
        var h = n;
        N && (c = document.createDocumentFragment(), c.append(h = Ir())), g = vr(() => a(h, l));
      }
      N ? _t.add_callback(w) : w();
    }
  }, zr);
}
function $l(r, e, a, n, l, d) {
  var c, g, w = null, N = (
    /** @type {TemplateNode} */
    r
  ), h;
  Pr(() => {
    const P = e() || null;
    var L = P === "svg" ? Ni : null;
    P !== c && (h && (P === null ? Pa(h, () => {
      h = null, g = null;
    }) : P === g ? La(h) : (Yt(h), Nn(!1))), P && P !== g && (h = vr(() => {
      if (w = L ? document.createElementNS(L, P) : document.createElement(P), Mr(w, w), n) {
        var A = (
          /** @type {TemplateNode} */
          w.appendChild(Ir())
        );
        n(w, A);
      }
      st.nodes_end = w, N.before(w);
    })), c = P, c && (g = c), Nn(!0));
  }, zr);
}
function Je(r, e) {
  gr(() => {
    var a = r.getRootNode(), n = (
      /** @type {ShadowRoot} */
      a.host ? (
        /** @type {ShadowRoot} */
        a
      ) : (
        /** @type {Document} */
        a.head ?? /** @type {Document} */
        a.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + e.hash)) {
      const l = document.createElement("style");
      l.id = e.hash, l.textContent = e.code, n.appendChild(l), Xe && Zl(e.hash, l);
    }
  });
}
function qe(r, e, a) {
  gr(() => {
    var n = Dr(() => e(r, a?.()) || {});
    if (a && n?.update) {
      var l = !1, d = (
        /** @type {any} */
        {}
      );
      Ia(() => {
        var c = a();
        ql(c), l && sn(d, c) && (d = c, n.update(c));
      }), l = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function es(r, e) {
  var a = void 0, n;
  Pr(() => {
    a !== (a = e()) && (n && (Yt(n), n = null), a && (n = vr(() => {
      gr(() => (
        /** @type {(node: Element) => void} */
        a(r)
      ));
    })));
  });
}
function Fo(r) {
  var e, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var l = r.length;
    for (e = 0; e < l; e++) r[e] && (a = Fo(r[e])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function ts() {
  for (var r, e, a = 0, n = "", l = arguments.length; a < l; a++) (r = arguments[a]) && (e = Fo(r)) && (n && (n += " "), n += e);
  return n;
}
function Q(r) {
  return typeof r == "object" ? ts(r) : r ?? "";
}
const On = [...` 	
\r\f \v\uFEFF`];
function rs(r, e, a) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var l in a)
      if (a[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var d = l.length, c = 0; (c = n.indexOf(l, c)) >= 0; ) {
          var g = c + d;
          (c === 0 || On.includes(n[c - 1])) && (g === n.length || On.includes(n[g])) ? n = (c === 0 ? "" : n.substring(0, c)) + n.substring(g + 1) : c = g;
        }
  }
  return n === "" ? null : n;
}
function Bn(r, e = !1) {
  var a = e ? " !important;" : ";", n = "";
  for (var l in r) {
    var d = r[l];
    d != null && d !== "" && (n += " " + l + ": " + d + a);
  }
  return n;
}
function Va(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function as(r, e) {
  if (e) {
    var a = "", n, l;
    if (Array.isArray(e) ? (n = e[0], l = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var d = !1, c = 0, g = !1, w = [];
      n && w.push(...Object.keys(n).map(Va)), l && w.push(...Object.keys(l).map(Va));
      var N = 0, h = -1;
      const f = r.length;
      for (var P = 0; P < f; P++) {
        var L = r[P];
        if (g ? L === "/" && r[P - 1] === "*" && (g = !1) : d ? d === L && (d = !1) : L === "/" && r[P + 1] === "*" ? g = !0 : L === '"' || L === "'" ? d = L : L === "(" ? c++ : L === ")" && c--, !g && d === !1 && c === 0) {
          if (L === ":" && h === -1)
            h = P;
          else if (L === ";" || P === f - 1) {
            if (h !== -1) {
              var A = Va(r.substring(N, h).trim());
              if (!w.includes(A)) {
                L !== ";" && P++;
                var k = r.substring(N, P).trim();
                a += " " + k + ";";
              }
            }
            N = P + 1, h = -1;
          }
        }
      }
    }
    return n && (a += Bn(n)), l && (a += Bn(l, !0)), a = a.trim(), a === "" ? null : a;
  }
  return r == null ? null : String(r);
}
function D(r, e, a, n, l, d) {
  var c = r.__className;
  if (c !== a || c === void 0) {
    var g = rs(a, n, d);
    g == null ? r.removeAttribute("class") : e ? r.className = g : r.setAttribute("class", g), r.__className = a;
  } else if (d && l !== d)
    for (var w in d) {
      var N = !!d[w];
      (l == null || N !== !!l[w]) && r.classList.toggle(w, N);
    }
  return d;
}
function Ga(r, e = {}, a, n) {
  for (var l in a) {
    var d = a[l];
    e[l] !== d && (a[l] == null ? r.style.removeProperty(l) : r.style.setProperty(l, d, n));
  }
}
function pt(r, e, a, n) {
  var l = r.__style;
  if (l !== e) {
    var d = as(e, n);
    d == null ? r.removeAttribute("style") : r.style.cssText = d, r.__style = e;
  } else n && (Array.isArray(n) ? (Ga(r, a?.[0], n[0]), Ga(r, a?.[1], n[1], "important")) : Ga(r, a, n));
  return n;
}
function _a(r, e, a = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!Sa(e))
      return dl();
    for (var n of r.options)
      n.selected = e.includes(Fn(n));
    return;
  }
  for (n of r.options) {
    var l = Fn(n);
    if (Cl(l, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Ho(r) {
  var e = new MutationObserver(() => {
    _a(r, r.__value);
  });
  e.observe(r, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), bn(() => {
    e.disconnect();
  });
}
function Fn(r) {
  return "__value" in r ? r.__value : r.value;
}
const Ur = Symbol("class"), yr = Symbol("style"), Vo = Symbol("is custom element"), Go = Symbol("is html");
function Uo(r, e) {
  var a = ja(r);
  a.value === (a.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  r.value === e && (e !== 0 || r.nodeName !== "PROGRESS") || (r.value = e ?? "");
}
function Zt(r, e) {
  var a = ja(r);
  a.checked !== (a.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (r.checked = e);
}
function ns(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function Ce(r, e, a, n) {
  var l = ja(r);
  l[e] !== (l[e] = a) && (e === "loading" && (r[Wi] = a), a == null ? r.removeAttribute(e) : typeof a != "string" && Yo(r).includes(e) ? r[e] = a : r.setAttribute(e, a));
}
function os(r, e, a, n, l = !1) {
  var d = ja(r), c = d[Vo], g = !d[Go], w = e || {}, N = r.tagName === "OPTION";
  for (var h in e)
    h in a || (a[h] = null);
  a.class ? a.class = Q(a.class) : (n || a[Ur]) && (a.class = null), a[yr] && (a.style ??= null);
  var P = Yo(r);
  for (const y in a) {
    let T = a[y];
    if (N && y === "value" && T == null) {
      r.value = r.__value = "", w[y] = T;
      continue;
    }
    if (y === "class") {
      var L = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      D(r, L, T, n, e?.[Ur], a[Ur]), w[y] = T, w[Ur] = a[Ur];
      continue;
    }
    if (y === "style") {
      pt(r, T, e?.[yr], a[yr]), w[y] = T, w[yr] = a[yr];
      continue;
    }
    var A = w[y];
    if (!(T === A && !(T === void 0 && r.hasAttribute(y)))) {
      w[y] = T;
      var k = y[0] + y[1];
      if (k !== "$$")
        if (k === "on") {
          const F = {}, H = "$$" + y;
          let j = y.slice(2);
          var f = Wl(j);
          if (Ul(j) && (j = j.slice(0, -7), F.capture = !0), !f && A) {
            if (T != null) continue;
            r.removeEventListener(j, w[H], F), w[H] = null;
          }
          if (T != null)
            if (f)
              r[`__${j}`] = T, ut([j]);
            else {
              let q = function(O) {
                w[y].call(this, O);
              };
              w[H] = No(j, r, q, F);
            }
          else f && (r[`__${j}`] = void 0);
        } else if (y === "style")
          Ce(r, y, T);
        else if (y === "autofocus")
          Ol(
            /** @type {HTMLElement} */
            r,
            !!T
          );
        else if (!c && (y === "__value" || y === "value" && T != null))
          r.value = r.__value = T;
        else if (y === "selected" && N)
          ns(
            /** @type {HTMLOptionElement} */
            r,
            T
          );
        else {
          var B = y;
          g || (B = Kl(B));
          var $ = B === "defaultValue" || B === "defaultChecked";
          if (T == null && !c && !$)
            if (d[y] = null, B === "value" || B === "checked") {
              let F = (
                /** @type {HTMLInputElement} */
                r
              );
              const H = e === void 0;
              if (B === "value") {
                let j = F.defaultValue;
                F.removeAttribute(B), F.defaultValue = j, F.value = F.__value = H ? j : null;
              } else {
                let j = F.defaultChecked;
                F.removeAttribute(B), F.defaultChecked = j, F.checked = H ? j : !1;
              }
            } else
              r.removeAttribute(y);
          else $ || P.includes(B) && (c || typeof T != "string") ? (r[B] = T, B in d && (d[B] = Tt)) : typeof T != "function" && Ce(r, B, T);
        }
    }
  }
  return w;
}
function Qe(r, e, a = [], n = [], l, d = !1) {
  ho(a, n, (c) => {
    var g = void 0, w = {}, N = r.nodeName === "SELECT", h = !1;
    if (Pr(() => {
      var L = e(...c.map(t)), A = os(r, g, L, l, d);
      h && N && "value" in L && _a(
        /** @type {HTMLSelectElement} */
        r,
        L.value
      );
      for (let f of Object.getOwnPropertySymbols(w))
        L[f] || Yt(w[f]);
      for (let f of Object.getOwnPropertySymbols(L)) {
        var k = L[f];
        f.description === qi && (!g || k !== g[f]) && (w[f] && Yt(w[f]), w[f] = vr(() => es(r, () => k))), A[f] = k;
      }
      g = A;
    }), N) {
      var P = (
        /** @type {HTMLSelectElement} */
        r
      );
      gr(() => {
        _a(
          P,
          /** @type {Record<string | symbol, any>} */
          g.value,
          !0
        ), Ho(P);
      });
    }
    h = !0;
  });
}
function ja(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [Vo]: r.nodeName.includes("-"),
      [Go]: r.namespaceURI === Ri
    }
  );
}
var Hn = /* @__PURE__ */ new Map();
function Yo(r) {
  var e = Hn.get(r.nodeName);
  if (e) return e;
  Hn.set(r.nodeName, e = []);
  for (var a, n = r, l = Element.prototype; l !== n; ) {
    a = to(n);
    for (var d in a)
      a[d].set && e.push(d);
    n = rn(n);
  }
  return e;
}
const is = $n ? () => performance.now() : () => Date.now(), lr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => ($n ? requestAnimationFrame : qt)(r)
  ),
  now: () => is(),
  tasks: /* @__PURE__ */ new Set()
};
function Wo() {
  const r = lr.now();
  lr.tasks.forEach((e) => {
    e.c(r) || (lr.tasks.delete(e), e.f());
  }), lr.tasks.size !== 0 && lr.tick(Wo);
}
function ls(r) {
  let e;
  return lr.tasks.size === 0 && lr.tick(Wo), {
    promise: new Promise((a) => {
      lr.tasks.add(e = { c: r, f: a });
    }),
    abort() {
      lr.tasks.delete(e);
    }
  };
}
function la(r, e) {
  Da(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function ss(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function Vn(r) {
  const e = {}, a = r.split(";");
  for (const n of a) {
    const [l, d] = n.split(":");
    if (!l || d === void 0) break;
    const c = ss(l.trim());
    e[c] = d.trim();
  }
  return e;
}
const ds = (r) => r;
function nt(r, e, a, n) {
  var l = (r & zi) !== 0, d = (r & Ii) !== 0, c = l && d, g = (r & Pi) !== 0, w = c ? "both" : l ? "in" : "out", N, h = e.inert, P = e.style.overflow, L, A;
  function k() {
    return Da(() => N ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: w
    }));
  }
  var f = {
    is_global: g,
    in() {
      if (e.inert = h, !l) {
        A?.abort(), A?.reset?.();
        return;
      }
      d || L?.abort(), la(e, "introstart"), L = en(e, k(), A, 1, () => {
        la(e, "introend"), L?.abort(), L = N = void 0, e.style.overflow = P;
      });
    },
    out(T) {
      if (!d) {
        T?.(), N = void 0;
        return;
      }
      e.inert = !0, la(e, "outrostart"), A = en(e, k(), L, 0, () => {
        la(e, "outroend"), T?.();
      });
    },
    stop: () => {
      L?.abort(), A?.abort();
    }
  }, B = (
    /** @type {Effect} */
    st
  );
  if ((B.transitions ??= []).push(f), l && qo) {
    var $ = g;
    if (!$) {
      for (var y = (
        /** @type {Effect | null} */
        B.parent
      ); y && (y.f & zr) !== 0; )
        for (; (y = y.parent) && (y.f & Hr) === 0; )
          ;
      $ = !y || (y.f & Ea) !== 0;
    }
    $ && gr(() => {
      Dr(() => f.in());
    });
  }
}
function en(r, e, a, n, l) {
  var d = n === 1;
  if (Hi(e)) {
    var c, g = !1;
    return ra(() => {
      if (!g) {
        var B = e({ direction: d ? "in" : "out" });
        c = en(r, B, a, n, l);
      }
    }), {
      abort: () => {
        g = !0, c?.abort();
      },
      deactivate: () => c.deactivate(),
      reset: () => c.reset(),
      t: () => c.t()
    };
  }
  if (a?.deactivate(), !e?.duration)
    return l(), {
      abort: qt,
      deactivate: qt,
      reset: qt,
      t: () => n
    };
  const { delay: w = 0, css: N, tick: h, easing: P = ds } = e;
  var L = [];
  if (d && a === void 0 && (h && h(0, 1), N)) {
    var A = Vn(N(0, 1));
    L.push(A, A);
  }
  var k = () => 1 - n, f = r.animate(L, { duration: w, fill: "forwards" });
  return f.onfinish = () => {
    f.cancel();
    var B = a?.t() ?? 1 - n;
    a?.abort();
    var $ = n - B, y = (
      /** @type {number} */
      e.duration * Math.abs($)
    ), T = [];
    if (y > 0) {
      var F = !1;
      if (N)
        for (var H = Math.ceil(y / 16.666666666666668), j = 0; j <= H; j += 1) {
          var q = B + $ * P(j / H), O = Vn(N(q, 1 - q));
          T.push(O), F ||= O.overflow === "hidden";
        }
      F && (r.style.overflow = "hidden"), k = () => {
        var I = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          f.currentTime
        );
        return B + $ * P(I / y);
      }, h && ls(() => {
        if (f.playState !== "running") return !1;
        var I = k();
        return h(I, 1 - I), !0;
      });
    }
    f = r.animate(T, { duration: y, fill: "forwards" }), f.onfinish = () => {
      k = () => n, h?.(n, 1 - n), l();
    };
  }, {
    abort: () => {
      f && (f.cancel(), f.effect = null, f.onfinish = qt);
    },
    deactivate: () => {
      l = qt;
    },
    reset: () => {
      n === 0 && h?.(1, 0);
    },
    t: () => k()
  };
}
function or(r, e, a = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Ro(r, "input", (l) => {
    Xe && r.type === "checkbox" && Sn();
    var d = l ? r.defaultValue : r.value;
    if (d = Ua(r) ? Ya(d) : d, a(d), _t !== null && n.add(_t), d !== (d = e())) {
      var c = r.selectionStart, g = r.selectionEnd;
      r.value = d ?? "", g !== null && (r.selectionStart = c, r.selectionEnd = Math.min(g, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Dr(e) == null && r.value && (a(Ua(r) ? Ya(r.value) : r.value), _t !== null && n.add(_t)), Ia(() => {
    Xe && r.type === "checkbox" && Sn();
    var l = e();
    if (r === document.activeElement) {
      var d = (
        /** @type {Batch} */
        ca ?? _t
      );
      if (n.has(d))
        return;
    }
    Ua(r) && l === Ya(r.value) || r.type === "date" && !l && !r.value || l !== r.value && (r.value = l ?? "");
  });
}
function cs(r, e, a = e) {
  Ro(r, "change", (n) => {
    var l = n ? r.defaultChecked : r.checked;
    a(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Dr(e) == null && a(r.checked), Ia(() => {
    var n = e();
    r.checked = !!n;
  });
}
function Ua(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function Ya(r) {
  return r === "" ? null : +r;
}
function Gn(r, e) {
  return r === e || r?.[sr] === e;
}
function at(r = {}, e, a, n) {
  return gr(() => {
    var l, d;
    return Ia(() => {
      l = d, d = [], Dr(() => {
        r !== a(...d) && (e(r, ...d), l && Gn(a(...l), r) && e(null, ...l));
      });
    }), () => {
      ra(() => {
        d && Gn(a(...d), r) && e(null, ...d);
      });
    };
  }), r;
}
function Xo(r, e, a) {
  if (r == null)
    return e(void 0), qt;
  const n = Dr(
    () => r.subscribe(
      e,
      // @ts-expect-error
      a
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const jr = [];
function hn(r, e = qt) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function l(g) {
    if (sn(r, g) && (r = g, a)) {
      const w = !jr.length;
      for (const N of n)
        N[1](), jr.push(N, r);
      if (w) {
        for (let N = 0; N < jr.length; N += 2)
          jr[N][0](jr[N + 1]);
        jr.length = 0;
      }
    }
  }
  function d(g) {
    l(g(
      /** @type {T} */
      r
    ));
  }
  function c(g, w = qt) {
    const N = [g, w];
    return n.add(N), n.size === 1 && (a = e(l, d) || qt), g(
      /** @type {T} */
      r
    ), () => {
      n.delete(N), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: l, update: d, subscribe: c };
}
function Ko(r) {
  let e;
  return Xo(r, (a) => e = a)(), e;
}
let sa = !1, tn = Symbol();
function Zo(r, e, a) {
  const n = a[e] ??= {
    store: null,
    source: /* @__PURE__ */ wo(void 0),
    unsubscribe: qt
  };
  if (Xe && (n.source.label = e), n.store !== r && !(tn in a))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = qt;
    else {
      var l = !0;
      n.unsubscribe = Xo(r, (d) => {
        l ? n.source.v = d : Y(n.source, d);
      }), l = !1;
    }
  return r && tn in a ? Ko(r) : t(n.source);
}
function Qo() {
  const r = {};
  function e() {
    bn(() => {
      for (var a in r)
        r[a].unsubscribe();
      pr(r, tn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [r, e];
}
function vs(r) {
  var e = sa;
  try {
    return sa = !1, [r(), sa];
  } finally {
    sa = e;
  }
}
const us = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return Xe && al(`${r.name}.${String(e)}`), !1;
  },
  getOwnPropertyDescriptor(r, e) {
    if (!r.exclude.includes(e) && e in r.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: r.props[e]
      };
  },
  has(r, e) {
    return r.exclude.includes(e) ? !1 : e in r.props;
  },
  ownKeys(r) {
    return Reflect.ownKeys(r.props).filter((e) => !r.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function ct(r, e, a) {
  return new Proxy(
    Xe ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] } : { props: r, exclude: e },
    us
  );
}
function s(r, e, a, n) {
  var l = (a & Mi) !== 0, d = (a & Ai) !== 0, c = (
    /** @type {V} */
    n
  ), g = !0, w = () => (g && (g = !1, c = d ? Dr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), c), N;
  if (l) {
    var h = sr in r || Yi in r;
    N = Wr(r, e)?.set ?? (h && e in r ? (y) => r[e] = y : void 0);
  }
  var P, L = !1;
  l ? [P, L] = vs(() => (
    /** @type {V} */
    r[e]
  )) : P = /** @type {V} */
  r[e], P === void 0 && n !== void 0 && (P = w(), N && (rl(e), N(P)));
  var A;
  if (A = () => {
    var y = (
      /** @type {V} */
      r[e]
    );
    return y === void 0 ? w() : (g = !0, y);
  }, (a & Ti) === 0)
    return A;
  if (N) {
    var k = r.$$legacy;
    return function(y, T) {
      return arguments.length > 0 ? ((!T || k || L) && N(T ? A() : y), y) : A();
    };
  }
  var f = !1, B = ((a & Ei) !== 0 ? Ma : go)(() => (f = !1, A()));
  Xe && (B.label = e), l && t(B);
  var $ = (
    /** @type {Effect} */
    st
  );
  return function(y, T) {
    if (arguments.length > 0) {
      const F = T ? t(B) : l ? lt(y) : y;
      return Y(B, F), f = !0, c !== void 0 && (c = F), y;
    }
    return Lr && f || ($.f & Ar) !== 0 ? B.v : t(B);
  };
}
function V(...r) {
  return r.filter(Boolean).join(" ");
}
const bt = (r, e) => {
  let a = { enabled: !0, strength: 0.1, scale: 1.02, ...e };
  function n(d) {
    if (!a.enabled) return;
    const c = r.getBoundingClientRect(), g = (d.clientX - c.left) / c.width - 0.5, w = (d.clientY - c.top) / c.height - 0.5;
    r.style.transform = `translate(${g * (a.strength ?? 0.1) * 20}px, ${w * (a.strength ?? 0.1) * 20}px) scale(${a.scale ?? 1.02})`;
  }
  function l() {
    r.style.transform = "";
  }
  return r.addEventListener("mousemove", n), r.addEventListener("mouseleave", l), {
    update(d) {
      a = { ...a, ...d };
    },
    destroy() {
      r.removeEventListener("mousemove", n), r.removeEventListener("mouseleave", l);
    }
  };
}, It = (r, e) => {
  let a = { enabled: !0, intensity: 0.05, speed: 200, ...e };
  function n() {
    a.enabled && (r.style.transition = `transform ${a.duration ?? 200}ms ease`, r.style.transform = `scale(${a.scale ?? 1.02})`, a.borderRadius && (r.style.borderRadius = a.borderRadius));
  }
  function l() {
    r.style.transform = "";
  }
  return r.addEventListener("mouseenter", n), r.addEventListener("mouseleave", l), {
    update(d) {
      a = { ...a, ...d };
    },
    destroy() {
      r.removeEventListener("mouseenter", n), r.removeEventListener("mouseleave", l);
    }
  };
}, kt = (r, e) => {
  let a = { duration: 200, ...e };
  const n = () => {
    const l = a.blur === "xl" ? 16 : a.blur === "lg" ? 12 : a.blur === "md" ? 8 : a.blur === "sm" ? 4 : a.amount ?? 0, d = a.opacity === "strong" ? 0.3 : a.opacity === "medium" ? 0.2 : a.opacity === "light" ? 0.1 : 0.15;
    r.style.transition = `filter ${a.duration}ms ease, transform ${a.duration}ms ease, background-color ${a.duration}ms ease`, r.style.filter = `blur(${l}px)`, r.style.transform = a.scale ? `scale(${a.scale})` : r.style.transform, r.style.backgroundColor = `rgba(255,255,255,${d})`;
  };
  return n(), {
    update(l) {
      a = { ...a, ...l }, n();
    },
    destroy() {
      r.style.filter = "", r.style.backgroundColor = "";
    }
  };
};
function Wt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, scale: l = 0.98 } = e;
  return {
    duration: a,
    delay: n,
    css: (d) => `transform: scale(${l + (1 - l) * d});`
  };
}
function gt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, direction: l = "up", distance: d = 10, opacity: c = "light" } = e, g = l === "up" ? d : l === "down" ? -d : 0, w = c === "strong" ? 1 : c === "medium" ? 0.9 : c === "subtle" ? 0.8 : 0.7;
  return {
    duration: a,
    delay: n,
    css: (N) => `transform: translateY(${(1 - N) * g}px); opacity: ${N * w};`
  };
}
const Rt = (r, e) => {
  let a = 0, n = { enabled: !0, intensity: 0.02, speed: 3e3, ...e };
  const l = (d) => {
    if (!n.enabled) {
      a = requestAnimationFrame(l);
      return;
    }
    const c = 1 + Math.sin(d / (n.speed ?? 3e3) * Math.PI * 2) * (n.intensity ?? 0.02);
    r.style.transform = `scale(${c})`, a = requestAnimationFrame(l);
  };
  return a = requestAnimationFrame(l), {
    update(d) {
      n = { ...n, ...d };
    },
    destroy() {
      cancelAnimationFrame(a), r.style.transform = "";
    }
  };
}, ya = It, fs = /* @__PURE__ */ new Map();
function Jt(r, e) {
  if (typeof window < "u" && process.env.NODE_ENV === "development") {
    const a = {
      name: r,
      size: e,
      timestamp: Date.now()
    };
    fs.set(r, a), console.log(`📦 Bundle: ${r} (${e})`);
  }
}
var bs = (r, e, a) => e(t(a).id), gs = (r, e, a) => e(r, t(a).id), ms = /* @__PURE__ */ v('<p class="svelte-1neysev">No content available</p>'), hs = /* @__PURE__ */ v('<div role="region"><!></div>'), ps = /* @__PURE__ */ v('<div><button type="button"><span class="text-left svelte-1neysev"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-1neysev"></path></svg></button> <!></div>'), xs = /* @__PURE__ */ v("<div></div>");
const ws = {
  hash: "svelte-1neysev",
  code: `button[aria-expanded].svelte-1neysev {will-change:transform;}svg.svelte-1neysev {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-1neysev {transition:none;
			animation: none;will-change:auto;}
	}`
};
function Q1(r, e) {
  Ke(e, !0), Je(r, ws);
  const a = s(e, "items", 19, () => []), n = s(e, "multiple", 3, !1), l = s(e, "collapsible", 3, !0), d = s(e, "variant", 3, "glass"), c = s(e, "size", 3, "md"), g = s(e, "blur", 3, "md"), w = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), h = s(e, "defaultOpen", 19, () => []), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "multiple",
    "collapsible",
    "variant",
    "size",
    "blur",
    "animate",
    "reduceMotion",
    "defaultOpen",
    "class",
    "children",
    "onValueChange"
  ]);
  let A = /* @__PURE__ */ Se(lt(new Set(h())));
  const k = `accordion-${Math.random().toString(36).substr(2, 9)}`, f = {
    sm: {
      header: "px-3 py-2 text-sm",
      content: "px-3 pb-2 text-sm",
      icon: "w-4 h-4"
    },
    md: {
      header: "px-4 py-3 text-sm",
      content: "px-4 pb-3 text-sm",
      icon: "w-5 h-5"
    },
    lg: {
      header: "px-6 py-4 text-base",
      content: "px-6 pb-4 text-base",
      icon: "w-6 h-6"
    }
  }, B = {
    default: {
      container: "bg-white/5 border border-white/10",
      header: "text-white hover:bg-white/5",
      content: "text-white/80"
    },
    glass: {
      container: "glass-subtle border border-white/20",
      header: "text-white hover:glass-medium",
      content: "text-white/80"
    },
    terminal: {
      container: "bg-terminal-green/10 border border-terminal-green/30",
      header: "text-terminal-green hover:bg-terminal-green/20",
      content: "text-terminal-green/80"
    }
  }, $ = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };
  function y(G) {
    if (a().find((C) => C.id === G)?.disabled) return;
    const R = t(A).has(G);
    n() ? R ? (l() || t(A).size > 1) && t(A).delete(G) : t(A).add(G) : R && l() ? t(A).clear() : (t(A).clear(), t(A).add(G)), Y(A, new Set(t(A)), !0), e.onValueChange?.(Array.from(t(A)));
  }
  function T(G, U) {
    if (!a().find((C) => C.id === U)?.disabled)
      switch (G.key) {
        case "Enter":
        case " ":
          G.preventDefault(), y(U);
          break;
        case "ArrowDown":
          G.preventDefault(), F(U);
          break;
        case "ArrowUp":
          G.preventDefault(), H(U);
          break;
        case "Home":
          G.preventDefault(), j();
          break;
        case "End":
          G.preventDefault(), q();
          break;
      }
  }
  function F(G) {
    const U = a().filter((x) => !x.disabled), C = (U.findIndex((x) => x.id === G) + 1) % U.length, _ = U[C];
    O(_.id);
  }
  function H(G) {
    const U = a().filter((x) => !x.disabled), R = U.findIndex((x) => x.id === G), C = R === 0 ? U.length - 1 : R - 1, _ = U[C];
    O(_.id);
  }
  function j() {
    const G = a().find((U) => !U.disabled);
    G && O(G.id);
  }
  function q() {
    const G = a().filter((R) => !R.disabled), U = G[G.length - 1];
    U && O(U.id);
  }
  function O(G) {
    document.querySelector(`[data-accordion-header="${G}"]`)?.focus();
  }
  xt(() => {
    Jt("Accordion", "medium");
  });
  var I = xs();
  Qe(I, (G) => ({ class: G, ...L }), [() => V("w-full space-y-2", P())], void 0, "svelte-1neysev"), Ye(I, 23, a, (G, U) => G.id ?? U, (G, U, R) => {
    const C = /* @__PURE__ */ Ee(() => t(A).has(t(U).id)), _ = /* @__PURE__ */ Ee(() => t(R) === 0), x = /* @__PURE__ */ Ee(() => t(R) === a().length - 1), S = /* @__PURE__ */ Ee(() => `${k}-header-${t(U).id}`), W = /* @__PURE__ */ Ee(() => `${k}-content-${t(U).id}`);
    var X = ps(), E = i(X);
    E.__click = [bs, y, U], E.__keydown = [gs, T, U];
    var m = i(E), p = i(m), oe = u(m, 2);
    qe(E, (be, te) => kt?.(be, te), () => w() && !N() && t(C) ? { blur: g(), opacity: "subtle" } : void 0);
    var ce = u(E, 2);
    {
      var ve = (be) => {
        var te = hs(), K = i(te);
        {
          var ae = (ee) => {
            var J = Ae(), Z = ke(J);
            it(Z, () => t(U).content), o(ee, J);
          }, z = (ee) => {
            var J = Ae(), Z = ke(J);
            {
              var ie = (de) => {
                var ge = Ae(), se = ke(ge);
                it(se, () => e.children, () => t(U)), o(de, ge);
              }, ne = (de) => {
                var ge = ms();
                o(de, ge);
              };
              b(
                Z,
                (de) => {
                  e.children ? de(ie) : de(ne, !1);
                },
                !0
              );
            }
            o(ee, J);
          };
          b(K, (ee) => {
            t(U).content ? ee(ae) : ee(z, !1);
          });
        }
        M(
          (ee) => {
            Ce(te, "id", t(W)), Ce(te, "aria-labelledby", t(S)), D(te, 1, ee, "svelte-1neysev");
          },
          [
            () => Q(V("border-t border-white/10 transition-all duration-200", f[c()].content, B[d()].content))
          ]
        ), nt(1, te, () => gt, () => ({
          direction: "down",
          distance: 10,
          duration: w() && !N() ? 200 : 0
        })), nt(2, te, () => gt, () => ({
          direction: "up",
          distance: 10,
          duration: w() && !N() ? 150 : 0
        })), o(be, te);
      };
      b(ce, (be) => {
        t(C) && be(ve);
      });
    }
    M(
      (be, te, K) => {
        D(X, 1, be, "svelte-1neysev"), Ce(E, "id", t(S)), D(E, 1, te, "svelte-1neysev"), Ce(E, "aria-expanded", t(C)), Ce(E, "aria-controls", t(W)), Ce(E, "aria-disabled", t(U).disabled), Ce(E, "data-accordion-header", t(U).id), E.disabled = t(U).disabled, re(p, t(U).title), D(oe, 0, K, "svelte-1neysev");
      },
      [
        () => Q(V("overflow-hidden transition-all duration-200", B[d()].container, d() === "glass" && $[g()], t(_) && "rounded-t-brand-lg", t(x) && "rounded-b-brand-lg", !t(_) && !t(x) && t(R) > 0 && "rounded-none border-t-0")),
        () => Q(V("w-full flex items-center justify-between transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium cursor-pointer", f[c()].header, B[d()].header, t(U).disabled && "opacity-50 cursor-not-allowed")),
        () => Q(V("transition-transform duration-200 flex-shrink-0 ml-2", f[c()].icon, t(C) && "rotate-180"))
      ]
    ), o(G, X);
  }), o(r, I), Ze();
}
ut(["click", "keydown"]);
const _s = (r, e, a) => {
  Y(e, !1), a.onclose?.();
};
var ys = /* @__PURE__ */ v("<div><!></div>"), ks = /* @__PURE__ */ v("<h3> </h3>"), Cs = /* @__PURE__ */ v("<p> </p>"), Ss = /* @__PURE__ */ v('<button aria-label="Close alert"><!></button>'), Es = /* @__PURE__ */ v('<div><div class="flex items-start gap-3 svelte-yqts08"><!> <div class="flex-1 min-w-0 svelte-yqts08"><!> <!></div> <!></div></div>');
const Ts = {
  hash: "svelte-yqts08",
  code: `
	/* Terminal cursor animation for terminal variant */
	@keyframes svelte-yqts08-terminal-blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}.terminal-cursor {
		animation: svelte-yqts08-terminal-blink 1s infinite;}`
};
function J1(r, e) {
  Ke(e, !0), Je(r, Ts);
  const a = s(e, "variant", 3, "info"), n = s(e, "closable", 3, !1), l = s(e, "animated", 3, !0), d = s(e, "glow", 3, !0), c = s(e, "jelly", 3, !0), g = s(e, "icon", 3, !0), w = s(e, "position", 3, "static"), N = s(e, "placement", 3, "top-right"), h = s(e, "class", 3, ""), P = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "title",
    "description",
    "closable",
    "animated",
    "glow",
    "jelly",
    "icon",
    "position",
    "placement",
    "class",
    "onclose"
  ]);
  let L = /* @__PURE__ */ Se(!0);
  const A = {
    success: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400/40",
      text: "text-green-300",
      icon: fi,
      glow: "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
    },
    error: {
      bg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      icon: ui,
      glow: "shadow-[0_0_30px_rgba(248,113,113,0.5)]"
    },
    warning: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      icon: _n,
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.5)]"
    },
    info: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/40",
      text: "text-blue-300",
      icon: vi,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    terminal: {
      bg: "bg-gray-900/90",
      border: "border-green-400/40",
      text: "text-green-400",
      icon: _n,
      glow: "shadow-[0_0_20px_rgba(74,222,128,0.6)]"
    }
  }, k = {
    top: "top-4 left-1/2 -translate-x-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  }, f = A[a()], B = f.icon;
  var $ = Ae(), y = ke($);
  {
    var T = (F) => {
      var H = Es();
      Qe(
        H,
        (S) => ({ class: S, ...P }),
        [
          () => V("backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300", f.bg, f.border, d() && f.glow, w() === "fixed" && "fixed z-50", w() === "fixed" && k[N()], l() && "transform-gpu will-change-transform", h())
        ],
        void 0,
        "svelte-yqts08"
      );
      var j = i(H), q = i(j);
      {
        var O = (S) => {
          var W = ys(), X = i(W);
          B(X, { size: 20 }), M((E) => D(W, 1, E, "svelte-yqts08"), [
            () => Q(V("flex-shrink-0 mt-0.5", f.text, l() && "animate-pulse"))
          ]), o(S, W);
        };
        b(q, (S) => {
          g() && S(O);
        });
      }
      var I = u(q, 2), G = i(I);
      {
        var U = (S) => {
          var W = ks(), X = i(W);
          M(
            (E) => {
              D(W, 1, E, "svelte-yqts08"), re(X, e.title);
            },
            [
              () => Q(V("font-semibold text-base", f.text))
            ]
          ), o(S, W);
        };
        b(G, (S) => {
          e.title && S(U);
        });
      }
      var R = u(G, 2);
      {
        var C = (S) => {
          var W = Cs(), X = i(W);
          M(
            (E) => {
              D(W, 1, E, "svelte-yqts08"), re(X, e.description);
            },
            [
              () => Q(V("text-sm mt-1 opacity-80", f.text))
            ]
          ), o(S, W);
        };
        b(R, (S) => {
          e.description && S(C);
        });
      }
      var _ = u(I, 2);
      {
        var x = (S) => {
          var W = Ss();
          W.__click = [_s, L, e];
          var X = i(W);
          va(X, { size: 16 }), M((E) => D(W, 1, E, "svelte-yqts08"), [
            () => Q(V("flex-shrink-0 p-1 rounded-lg transition-all duration-200", "hover:bg-white/10 hover:scale-110", f.text, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]), o(S, W);
        };
        b(_, (S) => {
          n() && S(x);
        });
      }
      qe(H, (S, W) => jellyHover?.(S, W), () => ({
        enabled: c(),
        scale: 1.02,
        duration: 200,
        borderRadius: "16px"
      })), nt(3, H, () => gt, () => ({ duration: l() ? 300 : 0 })), o(F, H);
    };
    b(y, (F) => {
      t(L) && F(T);
    });
  }
  o(r, $), Ze();
}
ut(["click"]);
var Ms = /* @__PURE__ */ v("<button><!></button>"), As = /* @__PURE__ */ v("<span><!></span>"), zs = /* @__PURE__ */ v("<button><!></button>"), Is = /* @__PURE__ */ v("<span><!></span>");
const Ps = {
  hash: "svelte-17ytdye",
  code: `button.svelte-17ytdye {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {button.svelte-17ytdye,
		span.svelte-17ytdye {transition:none;
			animation: none;}
	}`
};
function $1(r, e) {
  Ke(e, !0), Je(r, Ps);
  const a = s(e, "variant", 3, "default"), n = s(e, "size", 3, "md"), l = s(e, "glass", 3, !0), d = s(e, "blur", 3, "md"), c = s(e, "interactive", 3, !1), g = s(e, "animate", 3, !0), w = s(e, "reduceMotion", 3, !1), N = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "glass",
    "blur",
    "interactive",
    "animate",
    "reduceMotion",
    "class",
    "children"
  ]), P = {
    default: "bg-white/10 text-white border-white/20",
    primary: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    secondary: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    accent: "bg-red-500/20 text-red-300 border-red-400/30",
    success: "bg-green-500/20 text-green-300 border-green-400/30",
    warning: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
    error: "bg-red-600/20 text-red-300 border-red-500/30"
  }, L = {
    sm: "px-2 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
    lg: "px-4 py-2 text-base font-medium"
  }, A = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, k = "inline-flex items-center justify-center rounded-full border transition-all duration-200", f = l() ? `glass-subtle ${A[d()]}` : "", B = c() ? "cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent" : "", $ = V(k, P[a()], L[n()], f, B, N());
  function y(q) {
    c() && (q.key === "Enter" || q.key === " ") && (q.preventDefault(), q.currentTarget?.dispatchEvent(new CustomEvent("click", { bubbles: !0 })));
  }
  xt(() => {
    Jt("Badge", "small");
  });
  var T = Ae(), F = ke(T);
  {
    var H = (q) => {
      var O = Ae(), I = ke(O);
      {
        var G = (R) => {
          var C = Ms();
          Qe(
            C,
            () => ({
              class: $,
              type: "button",
              "aria-label": h["aria-label"] || `${a()} badge`,
              onkeydown: y,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var _ = i(C);
          {
            var x = (S) => {
              var W = Ae(), X = ke(W);
              it(X, () => e.children), o(S, W);
            };
            b(_, (S) => {
              e.children && S(x);
            });
          }
          qe(C, (S, W) => kt?.(S, W), () => ({ blur: d(), opacity: "subtle" })), o(R, C);
        }, U = (R) => {
          var C = As();
          Qe(
            C,
            () => ({
              class: $,
              role: "status",
              "aria-label": h["aria-label"] || `${a()} badge`,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var _ = i(C);
          {
            var x = (S) => {
              var W = Ae(), X = ke(W);
              it(X, () => e.children), o(S, W);
            };
            b(_, (S) => {
              e.children && S(x);
            });
          }
          nt(1, C, () => gt, () => ({ direction: "up", distance: 10 })), o(R, C);
        };
        b(I, (R) => {
          c() ? R(G) : R(U, !1);
        });
      }
      o(q, O);
    }, j = (q) => {
      var O = Ae(), I = ke(O);
      {
        var G = (R) => {
          var C = zs();
          Qe(
            C,
            () => ({
              class: $,
              type: "button",
              "aria-label": h["aria-label"] || `${a()} badge`,
              onkeydown: y,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var _ = i(C);
          {
            var x = (S) => {
              var W = Ae(), X = ke(W);
              it(X, () => e.children), o(S, W);
            };
            b(_, (S) => {
              e.children && S(x);
            });
          }
          o(R, C);
        }, U = (R) => {
          var C = Is();
          Qe(
            C,
            () => ({
              class: $,
              role: "status",
              "aria-label": h["aria-label"] || `${a()} badge`,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var _ = i(C);
          {
            var x = (S) => {
              var W = Ae(), X = ke(W);
              it(X, () => e.children), o(S, W);
            };
            b(_, (S) => {
              e.children && S(x);
            });
          }
          o(R, C);
        };
        b(
          I,
          (R) => {
            c() ? R(G) : R(U, !1);
          },
          !0
        );
      }
      o(q, O);
    };
    b(F, (q) => {
      g() && !w() ? q(H) : q(j, !1);
    });
  }
  o(r, T), Ze();
}
const Pe = {
  // Core Hacker Terminal Colors
  terminal: {
    green: "#00ff41",
    // Classic Matrix green
    cyan: "#00ffff",
    // Electric cyan
    blue: "#0080ff",
    // Neon blue
    purple: "#8a2be2",
    // Deep purple
    matrix: "#00ff88",
    // Matrix accent green
    neon: "#ff1493",
    // Hot pink neon
    amber: "#ffbf00",
    // Retro amber
    lime: "#32cd32",
    // Lime green
    magenta: "#ff00ff",
    // Electric magenta
    orange: "#ff4500"
    // Cyber orange
  },
  // Bubble Tea TUI Color Palette - Modern Terminal UI (WCAG AA Compliant)
  bubbleTea: {
    // Primary gradient colors - WCAG AA compliant against dark backgrounds
    pink: "#ff85b3",
    // WCAG AA compliant (improved from #ff6b9d)
    purple: "#d666ff",
    // WCAG AA compliant (improved from #c44af2)
    blue: "#66c3ff",
    // WCAG AA compliant (improved from #4fa8ff)
    cyan: "#4dd8da",
    // Modern cyan (already compliant)
    green: "#6bcf7f",
    // Fresh green (already compliant)
    yellow: "#ffd23a",
    // Warm yellow (already compliant)
    orange: "#ff8c42",
    // Coral orange (already compliant)
    red: "#ff8585",
    // WCAG AA compliant (improved from #ff6b6b)
    // Gradient combinations for modern TUI - WCAG AA compliant
    primary: "#ff85b3",
    // Pink primary (WCAG AA)
    secondary: "#d666ff",
    // Purple secondary (WCAG AA)
    accent: "#66c3ff",
    // Blue accent (WCAG AA)
    // Status colors
    success: "#6bcf7f",
    warning: "#ffd23a",
    error: "#ff8585",
    // WCAG AA compliant
    info: "#4dd8da",
    // Background variations
    background: "#1a1a2e",
    surface: "#16213e",
    panel: "#0f1419",
    // High contrast variants (WCAG AAA) for accessibility
    hcPink: "#ff99c7",
    // High contrast mode
    hcPurple: "#e099ff",
    // High contrast mode
    hcBlue: "#80d4ff",
    // High contrast mode
    hcCyan: "#66e6ea",
    // High contrast mode
    hcGreen: "#80dd99",
    // High contrast mode
    hcYellow: "#ffe066",
    // High contrast mode
    hcOrange: "#ffad66",
    // High contrast mode
    hcRed: "#ff9999",
    // High contrast mode
    // Legacy glow variants (now used for high contrast)
    glowPink: "#ff99c7",
    // High contrast variant
    glowPurple: "#e099ff",
    // High contrast variant
    glowBlue: "#80d4ff",
    // High contrast variant
    glowCyan: "#66e6ea",
    // High contrast variant
    glowGreen: "#80dd99",
    // High contrast variant
    glowYellow: "#ffe066",
    // High contrast variant
    glowOrange: "#ffad66",
    // High contrast variant
    glowRed: "#ff9999"
    // High contrast variant
  },
  // Retro Futuristic Gradients
  gradients: {
    cyberpunk: "linear-gradient(135deg, #ff1493 0%, #8a2be2 50%, #00ffff 100%)",
    matrix: "linear-gradient(180deg, #00ff41 0%, #008f11 100%)",
    neon: "linear-gradient(90deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)",
    synthwave: "linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)",
    terminal: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)",
    hologram: "linear-gradient(45deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 50%, rgba(255,255,0,0.1) 100%)"
  },
  // Bubble Tea TUI Gradients - Modern and Colorful (WCAG AA Compliant)
  bubbleTeaGradients: {
    primary: "linear-gradient(135deg, #ff85b3 0%, #d666ff 100%)",
    // Pink to purple (WCAG AA)
    secondary: "linear-gradient(135deg, #66c3ff 0%, #4dd8da 100%)",
    // Blue to cyan (WCAG AA)
    accent: "linear-gradient(135deg, #6bcf7f 0%, #ffd23a 100%)",
    // Green to yellow
    warm: "linear-gradient(135deg, #ff8c42 0%, #ff85b3 100%)",
    // Orange to pink (WCAG AA)
    cool: "linear-gradient(135deg, #4dd8da 0%, #d666ff 100%)",
    // Cyan to purple (WCAG AA)
    rainbow: "linear-gradient(135deg, #ff85b3 0%, #d666ff 25%, #66c3ff 50%, #4dd8da 75%, #6bcf7f 100%)",
    // WCAG AA
    sunset: "linear-gradient(135deg, #ffd23a 0%, #ff8c42 50%, #ff85b3 100%)",
    // WCAG AA
    ocean: "linear-gradient(135deg, #4dd8da 0%, #66c3ff 50%, #d666ff 100%)",
    // WCAG AA
    forest: "linear-gradient(135deg, #6bcf7f 0%, #4dd8da 50%, #66c3ff 100%)",
    // WCAG AA
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)"
  },
  // Glass Morphism System
  glass: {
    primary: "rgba(0, 255, 65, 0.15)",
    secondary: "rgba(0, 255, 255, 0.12)",
    accent: "rgba(255, 255, 255, 0.08)",
    background: "rgba(0, 0, 0, 0.4)",
    border: "rgba(0, 255, 65, 0.3)",
    glow: "rgba(0, 255, 65, 0.5)",
    shadow: "rgba(0, 255, 65, 0.2)"
  },
  // Semantic Colors with Hacker Aesthetic
  semantic: {
    success: "#00ff41",
    warning: "#ffbf00",
    error: "#ff073a",
    info: "#00ffff",
    neutral: "#808080"
  },
  // Background System
  backgrounds: {
    primary: "#0a0a0f",
    secondary: "#1a1a2e",
    tertiary: "#16213e",
    surface: "#1e1e1e",
    panel: "rgba(255, 255, 255, 0.05)",
    overlay: "rgba(0, 0, 0, 0.8)"
  },
  // Text Colors
  text: {
    primary: "#ffffff",
    secondary: "#cccccc",
    muted: "#888888",
    inverse: "#000000",
    terminal: "#00ff41",
    neon: "#00ffff",
    accent: "#ff1493"
  }
}, Ls = {
  fontFamily: {
    // Professional monospace fonts for terminal/code environments
    mono: [
      "IBM Plex Mono",
      "JetBrains Mono",
      "SF Mono",
      "PP Supply Mono",
      "Consolas",
      "Monaco",
      "Cascadia Code",
      "Fira Code",
      "monospace"
    ],
    // Modern sans-serif fonts for UI elements
    sans: [
      "PP Supply Sans",
      "SF Pro Display",
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "sans-serif"
    ],
    // Display fonts for headings and special text
    display: [
      "SF Pro Display",
      "PP Supply Sans",
      "Inter",
      "system-ui",
      "sans-serif"
    ]
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem"
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75"
  }
}, Ds = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem"
}, js = {
  blur: {
    sm: "blur(4px)",
    md: "blur(8px)",
    lg: "blur(12px)",
    xl: "blur(16px)"
  },
  backdrop: {
    light: "rgba(255, 255, 255, 0.1)",
    medium: "rgba(255, 255, 255, 0.15)",
    heavy: "rgba(255, 255, 255, 0.25)"
  },
  border: {
    subtle: "1px solid rgba(255, 255, 255, 0.1)",
    medium: "1px solid rgba(255, 255, 255, 0.2)",
    strong: "2px solid rgba(255, 255, 255, 0.3)"
  }
}, Rs = {
  glass: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)"
  },
  glow: {
    // Terminal theme glows
    terminal: "0 0 20px rgba(0, 212, 170, 0.5)",
    cyan: "0 0 20px rgba(0, 170, 255, 0.5)",
    purple: "0 0 20px rgba(136, 68, 255, 0.5)",
    danger: "0 0 20px rgba(255, 68, 68, 0.5)",
    // Bubble Tea theme glows (using WCAG AA colors)
    bubbleTeaPink: "0 0 20px rgba(255, 133, 179, 0.6)",
    // Updated for AA compliance
    bubbleTeaPurple: "0 0 20px rgba(214, 102, 255, 0.6)",
    // Updated for AA compliance
    bubbleTeaBlue: "0 0 20px rgba(102, 195, 255, 0.6)",
    // Updated for AA compliance
    bubbleTeaCyan: "0 0 20px rgba(102, 230, 234, 0.6)",
    bubbleTeaGreen: "0 0 20px rgba(133, 217, 155, 0.6)",
    bubbleTeaYellow: "0 0 20px rgba(255, 229, 102, 0.6)",
    bubbleTeaOrange: "0 0 20px rgba(255, 173, 102, 0.6)",
    bubbleTeaRed: "0 0 20px rgba(255, 133, 133, 0.6)",
    // Updated for AA compliance
    // Enhanced glow effects for special cases (WCAG AA compliant)
    bubbleTeaIntense: {
      pink: "0 0 30px rgba(255, 133, 179, 0.8), 0 0 60px rgba(255, 133, 179, 0.4)",
      // AA compliant
      purple: "0 0 30px rgba(214, 102, 255, 0.8), 0 0 60px rgba(214, 102, 255, 0.4)",
      // AA compliant
      blue: "0 0 30px rgba(102, 195, 255, 0.8), 0 0 60px rgba(102, 195, 255, 0.4)",
      // AA compliant
      cyan: "0 0 30px rgba(102, 230, 234, 0.8), 0 0 60px rgba(102, 230, 234, 0.4)",
      green: "0 0 30px rgba(133, 217, 155, 0.8), 0 0 60px rgba(133, 217, 155, 0.4)",
      orange: "0 0 30px rgba(255, 173, 102, 0.8), 0 0 60px rgba(255, 173, 102, 0.4)"
    }
  }
}, Ns = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "750ms"
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    bouncy: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  }
}, Ra = {
  // Base radius scale (used as foundation)
  base: {
    none: "0",
    xs: "0.125rem",
    // 2px
    sm: "0.375rem",
    // 6px  
    md: "0.5rem",
    // 8px
    lg: "0.75rem",
    // 12px
    xl: "1rem",
    // 16px
    "2xl": "1.5rem",
    // 24px
    "3xl": "2rem",
    // 32px
    "4xl": "2.5rem",
    // 40px
    full: "9999px"
  },
  // Theme-specific radius scales
  themes: {
    // Terminal theme (sharper, more angular)
    terminal: {
      none: "0",
      xs: "0.125rem",
      // 2px
      sm: "0.25rem",
      // 4px
      md: "0.375rem",
      // 6px
      lg: "0.5rem",
      // 8px
      xl: "0.75rem",
      // 12px
      "2xl": "1rem",
      // 16px
      "3xl": "1.25rem",
      // 20px
      "4xl": "1.5rem",
      // 24px
      full: "9999px"
    },
    // Bubble Tea theme (more rounded, modern)
    bubbleTea: {
      none: "0",
      xs: "0.25rem",
      // 4px
      sm: "0.5rem",
      // 8px
      md: "0.75rem",
      // 12px
      lg: "1rem",
      // 16px
      xl: "1.5rem",
      // 24px
      "2xl": "2rem",
      // 32px
      "3xl": "2.5rem",
      // 40px
      "4xl": "3rem",
      // 48px
      full: "9999px"
    }
  },
  // Semantic component radius (automatically themed)
  semantic: {
    // Component-specific radius names
    button: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)"
    },
    card: {
      sm: "var(--radius-lg)",
      md: "var(--radius-xl)",
      lg: "var(--radius-2xl)",
      xl: "var(--radius-3xl)"
    },
    modal: {
      sm: "var(--radius-xl)",
      md: "var(--radius-2xl)",
      lg: "var(--radius-3xl)",
      xl: "var(--radius-4xl)"
    },
    input: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)"
    },
    avatar: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
      full: "var(--radius-full)"
    },
    badge: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      pill: "var(--radius-full)"
    }
  }
}, qs = {
  sm: {
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    height: "2rem"
  },
  md: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    height: "2.5rem"
  },
  lg: {
    padding: "1rem 2rem",
    fontSize: "1.125rem",
    height: "3rem"
  },
  xl: {
    padding: "1.25rem 2.5rem",
    fontSize: "1.25rem",
    height: "3.5rem"
  }
}, Os = {
  behind: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, Bs = {
  colors: {
    primary: Pe.terminal.green,
    secondary: Pe.terminal.cyan,
    accent: Pe.terminal.blue,
    success: Pe.semantic.success,
    warning: Pe.semantic.warning,
    error: Pe.semantic.error,
    info: Pe.semantic.info
  },
  gradients: Pe.gradients,
  borderRadius: Ra.themes.terminal
}, Fs = {
  colors: {
    primary: Pe.bubbleTea.primary,
    // WCAG AA compliant #ff85b3
    secondary: Pe.bubbleTea.secondary,
    // WCAG AA compliant #d666ff
    accent: Pe.bubbleTea.accent,
    // WCAG AA compliant #66c3ff
    success: Pe.bubbleTea.success,
    warning: Pe.bubbleTea.warning,
    error: Pe.bubbleTea.error,
    // WCAG AA compliant #ff8585
    info: Pe.bubbleTea.info
  },
  gradients: Pe.bubbleTeaGradients,
  borderRadius: Ra.themes.bubbleTea
}, ep = {
  colors: Pe,
  typography: Ls,
  spacing: Ds,
  effects: js,
  shadows: Rs,
  animations: Ns,
  sizes: qs,
  borderRadius: Ra,
  zIndex: Os,
  themes: {
    terminal: Bs,
    bubbleTea: Fs
  }
}, Mt = typeof window < "u";
function Jo(r) {
  if (!Mt) return null;
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}
function Yr(r, e) {
  if (Mt)
    try {
      localStorage.setItem(r, e);
    } catch (a) {
      console.warn(`Failed to save ${r} to localStorage:`, a);
    }
}
function $o(r) {
  if (Mt)
    try {
      localStorage.removeItem(r);
    } catch (e) {
      console.warn(`Failed to remove ${r} from localStorage:`, e);
    }
}
const da = {
  bubbleTea: {
    // Core colors - enhanced for better contrast
    primary: "#ff85b3",
    // Lighter pink for better contrast (was #ff6b9d)
    secondary: "#d666ff",
    // Lighter purple for better contrast (was #c44af2)
    accent: "#66c3ff",
    // Lighter blue for better contrast (was #4fa8ff)
    background: "#1a1a2e",
    // Dark blue-gray background
    surface: "#16213e",
    // Darker surface
    text: "#ffffff",
    // White text
    // Semantic colors
    success: "#6bcf7f",
    // Green
    warning: "#ffd23a",
    // Yellow
    error: "#ff8585",
    // Light red for better contrast
    info: "#4dd8da"
    // Cyan
  },
  terminal: {
    primary: "#00ff41",
    // Terminal green
    secondary: "#00ffff",
    // Cyan
    accent: "#66b3ff",
    // Lighter blue for better contrast
    background: "#0a0a0f",
    // Very dark background
    surface: "#1a1a2e",
    // Dark surface
    text: "#ffffff",
    // White text
    success: "#00ff88",
    // Bright green
    warning: "#ffcc00",
    // Yellow
    error: "#ff6666",
    // Light red
    info: "#00ffff"
    // Cyan
  }
}, Rr = {
  terminal: {
    name: "terminal",
    displayName: "Terminal",
    description: "Hacker aesthetic with green matrix colors and sharp edges",
    colors: da.terminal,
    highContrastColors: {
      ...da.terminal,
      // Enhanced for high contrast mode
      primary: "#33ff66",
      // Brighter green
      secondary: "#33ffff",
      // Brighter cyan
      accent: "#80ccff",
      // Even lighter blue
      success: "#40ff99",
      // Brighter green
      warning: "#ffdd33",
      // Brighter yellow
      error: "#ff8080",
      // Brighter red
      info: "#40ffff"
      // Brighter cyan
    }
  },
  bubbleTea: {
    name: "bubbleTea",
    displayName: "Bubble Tea",
    description: "Modern TUI with colorful gradients and rounded corners",
    colors: da.bubbleTea,
    highContrastColors: {
      ...da.bubbleTea,
      // Enhanced for high contrast mode
      primary: "#ff99c7",
      // Even lighter pink
      secondary: "#e099ff",
      // Even lighter purple
      accent: "#80d4ff",
      // Even lighter blue
      success: "#80dd99",
      // Brighter green
      warning: "#ffe066",
      // Brighter yellow
      error: "#ff9999",
      // Brighter red
      info: "#66e6ea"
      // Brighter cyan
    }
  }
};
function Hs() {
  const r = () => {
    if (!Mt) return "terminal";
    const w = Jo("ahb-theme");
    return w === "terminal" || w === "bubbleTea" || w === "auto" ? w : "auto";
  }, e = (w) => w === "auto" ? ti() : w, a = r();
  let n = a;
  const { subscribe: l, set: d, update: c } = hn(e(a), (w) => {
    let N = null;
    const h = (P) => {
      if (Mt) {
        const L = document.documentElement.classList;
        L.remove("theme-terminal", "theme-bubble-tea");
        const A = `theme-${P === "bubbleTea" ? "bubble-tea" : P}`;
        L.add(A);
        const k = Wa(P);
        Object.entries(k).forEach(([f, B]) => {
          document.documentElement.style.setProperty(f, B);
        });
      }
      w(P);
    };
    return h(e(a)), a === "auto" && Mt && (N = Yn((P) => {
      n === "auto" && h(P);
    })), () => {
      N && N();
    };
  }), g = {
    subscribe: l,
    getUserTheme: () => n,
    set: (w) => {
      n = w;
      const N = e(w);
      if (Mt) {
        Yr("ahb-theme", w), document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${N === "bubbleTea" ? "bubble-tea" : N}`);
        const h = Wa(N);
        if (Object.entries(h).forEach(([P, L]) => {
          document.documentElement.style.setProperty(P, L);
        }), w === "auto") {
          const P = Yn((L) => {
            if (n === "auto") {
              document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${L === "bubbleTea" ? "bubble-tea" : L}`);
              const A = Wa(L);
              Object.entries(A).forEach(([k, f]) => {
                document.documentElement.style.setProperty(k, f);
              }), d(L);
            }
          });
          g._systemWatcherCleanup = P;
        } else
          g._systemWatcherCleanup && (g._systemWatcherCleanup(), g._systemWatcherCleanup = null);
      }
      d(N);
    },
    toggle: () => {
      const w = ["terminal", "bubbleTea", "auto"], N = w.indexOf(n), h = w[(N + 1) % w.length];
      g.set(h);
    },
    setTerminal: () => g.set("terminal"),
    setBubbleTea: () => g.set("bubbleTea"),
    setAuto: () => g.set("auto"),
    reset: () => {
      Mt && $o("ahb-theme"), g.set("auto");
    }
  };
  return g;
}
const ur = Hs();
function Vs() {
  const e = (() => {
    if (!Mt) return "normal";
    const c = Jo("ahb-contrast-mode");
    return c === "normal" || c === "high" ? c : Mt && window.matchMedia?.("(prefers-contrast: high)").matches ? "high" : "normal";
  })(), { subscribe: a, set: n, update: l } = hn(e), d = (c) => {
    Mt && (document.documentElement.classList.remove("contrast-normal", "contrast-high"), document.documentElement.classList.add(`contrast-${c}`));
  };
  return d(e), {
    subscribe: a,
    set: (c) => {
      Mt && (Yr("ahb-contrast-mode", c), d(c)), n(c);
    },
    toggle: () => {
      l((c) => {
        const g = c === "normal" ? "high" : "normal";
        return Mt && (Yr("ahb-contrast-mode", g), d(g)), g;
      });
    },
    setNormal: () => {
      const c = "normal";
      Mt && (Yr("ahb-contrast-mode", c), d(c)), n(c);
    },
    setHigh: () => {
      const c = "high";
      Mt && (Yr("ahb-contrast-mode", c), d(c)), n(c);
    },
    reset: () => {
      const c = "normal";
      Mt && ($o("ahb-contrast-mode"), d(c)), n(c);
    }
  };
}
const Gs = Vs(), ei = {
  subscribe: (r) => {
    let e = "terminal", a = "normal";
    const n = ur.subscribe((c) => {
      e = c, d();
    }), l = Gs.subscribe((c) => {
      a = c, d();
    });
    function d() {
      const c = Rr[e], g = a === "high" ? c.highContrastColors : c.colors, w = ur.getUserTheme();
      r({
        ...c,
        currentColors: g,
        userTheme: w,
        resolvedTheme: e
      });
    }
    return d(), () => {
      n(), l();
    };
  }
};
function Wa(r, e = "normal") {
  const a = Rr[r], n = e === "high" ? a.highContrastColors : a.colors, l = Ra.themes[r], d = {};
  return l && Object.entries(l).forEach(([c, g]) => {
    d[`--radius-${c}`] = g;
  }), {
    "--theme-primary": n.primary,
    "--theme-secondary": n.secondary,
    "--theme-accent": n.accent,
    "--theme-background": n.background,
    "--theme-surface": n.surface,
    "--theme-text": n.text,
    "--theme-success": n.success,
    "--theme-warning": n.warning,
    "--theme-error": n.error,
    "--theme-info": n.info,
    ...d
  };
}
function Un(r) {
  return r === "auto";
}
function Us(r, e) {
  return r === "auto" ? {
    displayName: `Auto (${Rr[e].displayName})`,
    description: `Automatically follows system preference. Currently: ${Rr[e].displayName}`,
    isAuto: !0
  } : {
    displayName: Rr[r].displayName,
    description: Rr[r].description,
    isAuto: !1
  };
}
function ti() {
  if (!Mt || !window.matchMedia)
    return "terminal";
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = window.matchMedia("(prefers-color-scheme: light)");
  return r.matches ? "terminal" : e.matches ? "bubbleTea" : "terminal";
}
function Yn(r) {
  if (!Mt || !window.matchMedia)
    return () => {
    };
  const e = window.matchMedia("(prefers-color-scheme: dark)"), a = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
    const l = ti();
    r(l);
  };
  return e.addEventListener ? (e.addEventListener("change", n), a.addEventListener("change", n), () => {
    e.removeEventListener("change", n), a.removeEventListener("change", n);
  }) : e.addListener ? (e.addListener(n), a.addListener(n), () => {
    e.removeListener?.(n), a.removeListener?.(n);
  }) : () => {
  };
}
function Na() {
  return Ko(ei).resolvedTheme;
}
function Ys(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Na()) {
    case "terminal":
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
    case "bubbleTea":
      return "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono";
    default:
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
  }
}
function Ws(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Na()) {
    case "terminal":
      return "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20";
    case "bubbleTea":
      return "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono";
    default:
      return "glass-subtle border border-white/20 shadow-lg hover:shadow-xl";
  }
}
function ri(r, e) {
  return r !== "auto" && r !== "theme" ? "" : Na() === "bubbleTea" ? e && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[e] || "rounded-bubble-tea" : "";
}
function ai() {
  switch (Na()) {
    case "terminal":
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    case "bubbleTea":
      return "focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    default:
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  }
}
var Xs = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Ks = /* @__PURE__ */ v("<button><!> <!></button>"), Zs = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Qs = /* @__PURE__ */ v("<button><!> <!></button>");
const Js = {
  hash: "svelte-16dveyh",
  code: `button.svelte-16dveyh {will-change:transform, border-radius, filter;position:relative;overflow:hidden;
		/* Apple-style rounded corners with smooth transitions */transition:all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);}

	/* Enhanced glass shimmer effect */button.svelte-16dveyh.glass-shimmer::before {content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(0, 255, 255, 0.2), transparent);transition:left 600ms cubic-bezier(0.34, 1.56, 0.64, 1);pointer-events:none;z-index:1;}button.svelte-16dveyh.glass-shimmer:hover::before {left:100%;}

	/* Terminal glow effect */button.svelte-16dveyh.shadow-terminal-green\\/20 {box-shadow:0 0 20px rgba(48, 209, 88, 0.2);}button.svelte-16dveyh.shadow-terminal-green\\/20:hover {box-shadow:0 0 30px rgba(48, 209, 88, 0.4);}

	/* Liquid variant breathing animation */button.svelte-16dveyh[class*='liquid'] {
		animation: svelte-16dveyh-liquid-breathe 4s ease-in-out infinite;}

	@keyframes svelte-16dveyh-liquid-breathe {
		0%,
		100% {
			filter: blur(0px) saturate(1);
			border-radius: inherit;
		}
		50% {
			filter: blur(0.5px) saturate(1.1);
			border-radius: calc(var(--radius) * 1.2);
		}
	}

	/* Dynamic focus states with Apple-style glow */button.svelte-16dveyh:focus-visible {outline:none;box-shadow:0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3),
			0 4px 12px rgba(0, 0, 0, 0.2);transform:translateY(-1px);}

	/* Terminal variant special effects */button.svelte-16dveyh[class*='terminal'] {text-shadow:0 0 5px currentColor;font-family:'PP Supply Mono', monospace;}button.svelte-16dveyh[class*='terminal']:hover {text-shadow:0 0 10px currentColor;box-shadow:0 0 20px rgba(48, 209, 88, 0.3),
			inset 0 0 20px rgba(48, 209, 88, 0.1);}`
};
function tr(r, e) {
  Ke(e, !0), Je(r, Js);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "loading", 3, !1), d = s(e, "icon", 3, !1), c = s(e, "animate", 3, !0), g = s(e, "jelly", 3, !0), w = s(e, "liquid", 3, !1), N = s(e, "class", 3, ""), h = s(e, "disabled", 3, !1), P = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "loading",
    "icon",
    "animate",
    "jelly",
    "liquid",
    "class",
    "children",
    "disabled",
    "aria-label",
    "aria-describedby"
  ]), L = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Ys(a()) : A[a()] || A.default), A = {
    default: "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    secondary: "bg-gradient-to-r from-terminal-purple to-terminal-pink hover:from-terminal-purple/90 hover:to-terminal-pink/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    outline: "border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/80 backdrop-blur-sm",
    ghost: "hover:bg-terminal-green/10 text-terminal-green hover:text-terminal-green/90 backdrop-blur-sm",
    glass: "glass-medium glass-shimmer hover:glass-heavy text-white border border-white/20 shadow-2xl",
    "glass-dark": "glass-heavy border-terminal-green/30 hover:border-terminal-green/60 text-terminal-green shadow-2xl backdrop-blur-xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/5 hover:border-terminal-green/80 shadow-lg hover:shadow-terminal-green/20",
    liquid: "bg-gradient-to-br from-terminal-cyan/20 via-terminal-blue/20 to-terminal-purple/20 border border-white/30 text-white backdrop-blur-lg hover:from-terminal-cyan/30 hover:via-terminal-blue/30 hover:to-terminal-purple/30",
    bubbleTea: "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono"
  }, k = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl"
  }, f = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ri(a(), n()) : a() === "bubbleTea" && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[n()] || ""), B = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ai() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"), $ = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none will-change-transform", y = d() ? "aspect-square !p-0" : "", T = /* @__PURE__ */ Ee(() => () => V($, t(L)(), k[n()], t(f)(), t(B)(), y, l() && "cursor-wait", N()));
  var F = Ae(), H = ke(F);
  {
    var j = (O) => {
      var I = Ks();
      Qe(
        I,
        (_) => ({
          class: _,
          disabled: h(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...P
        }),
        [() => t(T)()],
        void 0,
        "svelte-16dveyh"
      );
      var G = i(I);
      {
        var U = (_) => {
          var x = Xs();
          o(_, x);
        };
        b(G, (_) => {
          l() && _(U);
        });
      }
      var R = u(G, 2);
      {
        var C = (_) => {
          var x = Ae(), S = ke(x);
          it(S, () => e.children), o(_, x);
        };
        b(R, (_) => {
          e.children && _(C);
        });
      }
      qe(I, (_, x) => It?.(_, x), () => ({
        enabled: !h() && !l() && g(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), qe(I, (_, x) => ya?.(_, x), () => ({ enabled: !h() && !l() && w() })), qe(I, (_, x) => bt?.(_, x), () => ({
        enabled: !h() && !l() && !g() && !w(),
        strength: 0.15,
        scale: 1.02
      })), nt(1, I, () => Wt, () => ({
        duration: 200,
        bounce: a().includes("glass") || a() === "liquid"
      })), o(O, I);
    }, q = (O) => {
      var I = Qs();
      Qe(
        I,
        (_) => ({
          class: _,
          disabled: h(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...P
        }),
        [() => t(T)()],
        void 0,
        "svelte-16dveyh"
      );
      var G = i(I);
      {
        var U = (_) => {
          var x = Zs();
          o(_, x);
        };
        b(G, (_) => {
          l() && _(U);
        });
      }
      var R = u(G, 2);
      {
        var C = (_) => {
          var x = Ae(), S = ke(x);
          it(S, () => e.children), o(_, x);
        };
        b(R, (_) => {
          e.children && _(C);
        });
      }
      qe(I, (_, x) => It?.(_, x), () => ({
        enabled: !h() && !l() && g(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : a() === "bubbleTea" ? 1.06 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), qe(I, (_, x) => ya?.(_, x), () => ({ enabled: !h() && !l() && w() })), qe(I, (_, x) => bt?.(_, x), () => ({
        enabled: !h() && !l() && !g() && !w(),
        strength: 0.15,
        scale: 1.02
      })), o(O, I);
    };
    b(H, (O) => {
      c() ? O(j) : O(q, !1);
    });
  }
  o(r, F), Ze();
}
var $s = /* @__PURE__ */ v("<div><!></div>"), ed = /* @__PURE__ */ v("<div><!></div>"), td = /* @__PURE__ */ v("<div><!></div>"), rd = /* @__PURE__ */ v("<div><!></div>");
const ad = {
  hash: "svelte-j9s7zz",
  code: `div.svelte-j9s7zz {will-change:transform, border-radius, filter, box-shadow;
		/* Apple-style rounded corners with smooth transitions */transition:all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);}

	/* Interactive cards get enhanced hover states */div[role='button'].svelte-j9s7zz:hover {transform:translateY(-2px);}

	/* Terminal variant glow effects */div.svelte-j9s7zz[class*='terminal'] {position:relative;}div.svelte-j9s7zz[class*='terminal']:hover {box-shadow:0 0 30px rgba(48, 209, 88, 0.2),
			0 8px 32px rgba(0, 0, 0, 0.3);}

	/* Liquid variant breathing animation */div.svelte-j9s7zz[class*='liquid'] {
		animation: svelte-j9s7zz-card-liquid-breathe 5s ease-in-out infinite;}

	@keyframes svelte-j9s7zz-card-liquid-breathe {
		0%,
		100% {
			filter: blur(0px) saturate(1) brightness(1);
		}
		50% {
			filter: blur(0.3px) saturate(1.05) brightness(1.02);
		}
	}

	/* Jelly variant subtle pulse */div.svelte-j9s7zz[class*='jelly'] {
		animation: svelte-j9s7zz-card-jelly-pulse 3s ease-in-out infinite;}

	@keyframes svelte-j9s7zz-card-jelly-pulse {
		0%,
		100% {
			box-shadow: var(--shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
		}
		50% {
			box-shadow: var(--shadow, 0 6px 8px -1px rgba(0, 0, 0, 0.15));
		}
	}

	/* Enhanced focus states */div[role='button'].svelte-j9s7zz:focus-visible {outline:none;box-shadow:0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3),
			0 8px 25px rgba(0, 0, 0, 0.2);transform:translateY(-3px);}

	/* Glass morphism enhancements */div.svelte-j9s7zz.glass-medium,
	div.svelte-j9s7zz.glass-heavy {backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);}div.svelte-j9s7zz.glass-subtle {backdrop-filter:blur(8px) saturate(150%);-webkit-backdrop-filter:blur(8px) saturate(150%);}`
};
function tp(r, e) {
  Ke(e, !0), Je(r, ad);
  const a = s(e, "variant", 3, "auto"), n = s(e, "blur", 3, "md"), l = s(e, "interactive", 3, !1), d = s(e, "animate", 3, !0), c = s(e, "jelly", 3, !0), g = s(e, "liquid", 3, !1), w = s(e, "breathing", 3, !1), N = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "blur",
    "interactive",
    "animate",
    "jelly",
    "liquid",
    "breathing",
    "class",
    "children"
  ]), P = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Ws(a()) : L[a()] || L.default), L = {
    default: "glass-subtle border border-white/20 shadow-lg hover:shadow-xl",
    glass: "glass-medium border border-white/30 shadow-xl hover:shadow-2xl",
    "glass-subtle": "glass-subtle border border-white/10 shadow-md hover:shadow-lg",
    "glass-heavy": "glass-heavy border border-white/40 shadow-2xl hover:shadow-3xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20",
    liquid: "glass-medium border border-terminal-cyan/30 shadow-2xl shadow-terminal-cyan/10 hover:border-terminal-cyan/50 backdrop-blur-xl",
    jelly: "glass-subtle border border-terminal-purple/20 shadow-lg hover:shadow-xl hover:border-terminal-purple/40",
    bubbleTea: "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono"
  }, A = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, k = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ri(a()) || "rounded-2xl" : a() === "bubbleTea" ? "rounded-bubble-tea-lg" : "rounded-2xl"), f = /* @__PURE__ */ Ee(() => () => l() ? a() === "auto" || a() === "theme" ? ai() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" : ""), B = "p-6 transition-all duration-300 will-change-transform", $ = l() ? "cursor-pointer" : "", y = /* @__PURE__ */ Ee(() => () => V(B, t(P)(), t(k)(), typeof a() == "string" && a().includes("glass") && A[n()], $, t(f)(), N()));
  var T = Ae(), F = ke(T);
  {
    var H = (q) => {
      var O = Ae(), I = ke(O);
      {
        var G = (R) => {
          var C = $s(), _ = (W) => {
            (W.key === "Enter" || W.key === " ") && (W.preventDefault(), W.currentTarget.click());
          };
          Qe(
            C,
            (W) => ({
              class: W,
              role: "button",
              tabindex: "0",
              onkeydown: _,
              ...h
            }),
            [() => t(y)()],
            void 0,
            "svelte-j9s7zz"
          );
          var x = i(C);
          {
            var S = (W) => {
              var X = Ae(), E = ke(X);
              it(E, () => e.children), o(W, X);
            };
            b(x, (W) => {
              e.children && W(S);
            });
          }
          qe(C, (W, X) => It?.(W, X), () => ({
            enabled: c(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : a() === "bubbleTea" ? 1.04 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), qe(C, (W, X) => ya?.(W, X), () => ({ enabled: g(), liquidIntensity: 1, morphStrength: 0.3 })), qe(C, (W, X) => Rt?.(W, X), () => ({ enabled: w(), intensity: 0.015, speed: 3500 })), qe(C, (W, X) => bt?.(W, X), () => ({ enabled: !c() && !g(), strength: 0.2, scale: 1.02 })), nt(1, C, () => kt, () => ({ blur: n(), opacity: "medium" })), o(R, C);
        }, U = (R) => {
          var C = ed();
          Qe(C, (S) => ({ class: S, ...h }), [() => t(y)()], void 0, "svelte-j9s7zz");
          var _ = i(C);
          {
            var x = (S) => {
              var W = Ae(), X = ke(W);
              it(X, () => e.children), o(S, W);
            };
            b(_, (S) => {
              e.children && S(x);
            });
          }
          qe(C, (S, W) => It?.(S, W), () => ({
            enabled: c() && l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "var(--radius-xl)",
            responsiveness: "subtle"
          })), qe(C, (S, W) => Rt?.(S, W), () => ({ enabled: w(), intensity: 0.01, speed: 4e3 })), nt(1, C, () => kt, () => ({ blur: n(), opacity: "subtle" })), o(R, C);
        };
        b(I, (R) => {
          l() ? R(G) : R(U, !1);
        });
      }
      o(q, O);
    }, j = (q) => {
      var O = Ae(), I = ke(O);
      {
        var G = (R) => {
          var C = td(), _ = (W) => {
            (W.key === "Enter" || W.key === " ") && (W.preventDefault(), W.currentTarget.click());
          };
          Qe(
            C,
            (W) => ({
              class: W,
              role: "button",
              tabindex: "0",
              onkeydown: _,
              ...h
            }),
            [() => t(y)()],
            void 0,
            "svelte-j9s7zz"
          );
          var x = i(C);
          {
            var S = (W) => {
              var X = Ae(), E = ke(X);
              it(E, () => e.children), o(W, X);
            };
            b(x, (W) => {
              e.children && W(S);
            });
          }
          qe(C, (W, X) => It?.(W, X), () => ({
            enabled: c(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), qe(C, (W, X) => ya?.(W, X), () => ({ enabled: g(), liquidIntensity: 1, morphStrength: 0.3 })), qe(C, (W, X) => Rt?.(W, X), () => ({ enabled: w(), intensity: 0.015, speed: 3500 })), qe(C, (W, X) => bt?.(W, X), () => ({ enabled: !c() && !g(), strength: 0.2, scale: 1.02 })), o(R, C);
        }, U = (R) => {
          var C = rd();
          Qe(C, (S) => ({ class: S, ...h }), [() => t(y)()], void 0, "svelte-j9s7zz");
          var _ = i(C);
          {
            var x = (S) => {
              var W = Ae(), X = ke(W);
              it(X, () => e.children), o(S, W);
            };
            b(_, (S) => {
              e.children && S(x);
            });
          }
          qe(C, (S, W) => Rt?.(S, W), () => ({ enabled: w(), intensity: 0.01, speed: 4e3 })), o(R, C);
        };
        b(
          I,
          (R) => {
            l() ? R(G) : R(U, !1);
          },
          !0
        );
      }
      o(q, O);
    };
    b(F, (q) => {
      d() ? q(H) : q(j, !1);
    });
  }
  o(r, T), Ze();
}
var nd = /* @__PURE__ */ v('<span class="text-red-400 ml-1 svelte-cfvntl">*</span>'), od = /* @__PURE__ */ v("<label> <!></label>"), id = /* @__PURE__ */ v("<p> </p>"), ld = /* @__PURE__ */ v('<p class="text-xs text-red-400 mt-1 svelte-cfvntl" role="alert"> </p>'), sd = /* @__PURE__ */ v('<div class="flex-1 min-w-0 svelte-cfvntl"><!> <!> <!></div>'), dd = /* @__PURE__ */ v('<div class="flex items-start gap-3 svelte-cfvntl"><div><input/> <div class="absolute inset-0 flex items-center justify-center svelte-cfvntl"><!></div></div> <!></div>');
const cd = {
  hash: "svelte-cfvntl",
  code: `.glass-subtle.svelte-cfvntl {background:rgba(255, 255, 255, 0.05);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.glass-medium.svelte-cfvntl {background:rgba(255, 255, 255, 0.1);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);}

	/* Hover effects */.glass-subtle.svelte-cfvntl:hover {background:rgba(255, 255, 255, 0.08);box-shadow:0 8px 32px rgba(0, 0, 0, 0.1);}.glass-medium.svelte-cfvntl:hover {background:rgba(255, 255, 255, 0.15);box-shadow:0 8px 32px rgba(0, 0, 0, 0.15);}

	/* Focus styles */input.svelte-cfvntl:focus-visible + div:where(.svelte-cfvntl) {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

	/* Checkbox container animation */div.svelte-cfvntl:has(input:where(.svelte-cfvntl)) {will-change:transform;}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {.svelte-cfvntl {transition:none !important;
			animation: none !important;}
	}`
};
function rp(r, e) {
  Ke(e, !0), Je(r, cd);
  let a = s(e, "checked", 7, !1), n = s(e, "indeterminate", 7, !1), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), c = s(e, "variant", 3, "glass"), g = s(e, "blur", 3, "md"), w = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), h = s(e, "required", 3, !1), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "checked",
    "indeterminate",
    "disabled",
    "size",
    "variant",
    "blur",
    "animate",
    "reduceMotion",
    "label",
    "aria-label",
    "description",
    "error",
    "required",
    "class",
    "onCheckedChange"
  ]), A;
  const k = `checkbox-${Math.random().toString(36).substr(2, 9)}`, f = e.description ? `${k}-description` : void 0, B = e.error ? `${k}-error` : void 0;
  xt(() => {
    A && (A.indeterminate = n());
  });
  const $ = {
    sm: { container: "w-4 h-4", icon: "w-3 h-3", text: "text-sm" },
    md: { container: "w-5 h-5", icon: "w-4 h-4", text: "text-base" },
    lg: { container: "w-6 h-6", icon: "w-5 h-5", text: "text-lg" }
  }, y = {
    default: {
      container: "bg-white/10 border border-white/20",
      containerChecked: "bg-blue-500/30 border-blue-400/40",
      containerIndeterminate: "bg-blue-500/25 border-blue-400/35",
      icon: "text-white",
      iconChecked: "text-white",
      iconIndeterminate: "text-white"
    },
    glass: {
      container: "glass-subtle border border-white/20",
      containerChecked: "glass-medium border-blue-400/40 bg-blue-500/20",
      containerIndeterminate: "glass-medium border-blue-400/35 bg-blue-500/15",
      icon: "text-white/80",
      iconChecked: "text-white",
      iconIndeterminate: "text-white/90"
    },
    terminal: {
      container: "bg-terminal-green/20 border border-terminal-green/40",
      containerChecked: "bg-terminal-green/40 border-terminal-green/60",
      containerIndeterminate: "bg-terminal-green/30 border-terminal-green/50",
      icon: "text-terminal-green",
      iconChecked: "text-terminal-green",
      iconIndeterminate: "text-terminal-green"
    }
  }, T = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, F = V(
    "relative inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
    $[d()].container,
    n() ? y[c()].containerIndeterminate : a() ? y[c()].containerChecked : y[c()].container,
    c() === "glass" && T[g()],
    l() && "opacity-50 cursor-not-allowed",
    !l() && "cursor-pointer hover:scale-105",
    e.error && "border-red-400/60 bg-red-500/10",
    P()
  ), H = V("transition-all duration-200", $[d()].icon, n() ? y[c()].iconIndeterminate : a() ? y[c()].iconChecked : y[c()].icon), j = V("font-medium text-white cursor-pointer select-none", $[d()].text, l() && "opacity-50", e.error && "text-red-300"), q = V("text-xs text-white/70 mt-1", l() && "opacity-50", e.error && "text-red-300/70");
  function O(E) {
    if (l()) return;
    const p = E.target.checked;
    a(p), n(!1), e.onCheckedChange?.(p);
  }
  function I(E) {
    l() || E.key === "Enter" && (E.preventDefault(), A.click());
  }
  xt(() => {
    Jt("Checkbox", "small");
  });
  var G = dd(), U = i(G), R = i(U);
  Qe(
    R,
    (E) => ({
      type: "checkbox",
      id: k,
      disabled: l(),
      required: h(),
      class: "sr-only",
      "aria-label": e["aria-label"] || e.label,
      "aria-describedby": E,
      "aria-invalid": !!e.error,
      onchange: O,
      onkeydown: I,
      ...L
    }),
    [
      () => [f, B].filter(Boolean).join(" ") || void 0
    ],
    void 0,
    "svelte-cfvntl"
  ), at(R, (E) => A = E, () => A), gr(() => cs(R, a)), qe(R, (E, m) => Wt?.(E, m), () => w() && !N() ? { scale: 0.9, duration: 150 } : void 0);
  var C = u(R, 2), _ = i(C);
  {
    var x = (E) => {
      Zn(E, {
        get class() {
          return H;
        },
        strokeWidth: 2.5
      });
    }, S = (E) => {
      var m = Ae(), p = ke(m);
      {
        var oe = (ce) => {
          Xa(ce, {
            get class() {
              return H;
            },
            strokeWidth: 2.5
          });
        };
        b(
          p,
          (ce) => {
            a() && ce(oe);
          },
          !0
        );
      }
      o(E, m);
    };
    b(_, (E) => {
      n() ? E(x) : E(S, !1);
    });
  }
  var W = u(U, 2);
  {
    var X = (E) => {
      var m = sd(), p = i(m);
      {
        var oe = (K) => {
          var ae = od(), z = i(ae), ee = u(z);
          {
            var J = (Z) => {
              var ie = nd();
              o(Z, ie);
            };
            b(ee, (Z) => {
              h() && Z(J);
            });
          }
          M(() => {
            Ce(ae, "for", k), D(ae, 1, Q(j), "svelte-cfvntl"), re(z, `${e.label ?? ""} `);
          }), o(K, ae);
        };
        b(p, (K) => {
          e.label && K(oe);
        });
      }
      var ce = u(p, 2);
      {
        var ve = (K) => {
          var ae = id(), z = i(ae);
          M(() => {
            Ce(ae, "id", f), D(ae, 1, Q(q), "svelte-cfvntl"), re(z, e.description);
          }), o(K, ae);
        };
        b(ce, (K) => {
          e.description && K(ve);
        });
      }
      var be = u(ce, 2);
      {
        var te = (K) => {
          var ae = ld(), z = i(ae);
          M(() => {
            Ce(ae, "id", B), re(z, e.error);
          }), o(K, ae);
        };
        b(be, (K) => {
          e.error && K(te);
        });
      }
      o(E, m);
    };
    b(W, (E) => {
      (e.label || e.description || e.error) && E(X);
    });
  }
  M(() => D(U, 1, Q(F), "svelte-cfvntl")), o(r, G), Ze();
}
const vd = (r, e, a) => {
  Y(e, !t(e)), t(e) && requestAnimationFrame(a);
};
var ud = /* @__PURE__ */ v('<div class="h-px bg-white/10 my-1"></div>'), fd = (
  // Former _markUsed helper removed (cleanup: unnecessary artificial usage)
  // Reactive no-op effect to ensure analyzer sees runtime updates to menuPosition
  (r, e, a) => e(t(a))
), bd = /* @__PURE__ */ v('<button><!> <span class="flex-1 text-left"> </span></button>'), gd = /* @__PURE__ */ v('<div><div class="py-1"></div></div>'), md = /* @__PURE__ */ v('<div><button aria-haspopup="true"><span> </span> <!></button> <!></div>');
function ap(r, e) {
  Ke(e, !0);
  const a = s(e, "trigger", 3, "Select"), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "position", 3, "bottom"), c = s(e, "animated", 3, !0), g = s(e, "glow", 3, !1);
  s(e, "jelly", 3, !0);
  const w = s(e, "class", 3, ""), N = s(e, "triggerClass", 3, ""), h = s(e, "menuClass", 3, ""), P = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "trigger",
    "value",
    "variant",
    "size",
    "position",
    "animated",
    "glow",
    "jelly",
    "class",
    "triggerClass",
    "menuClass",
    "onSelect"
  ]);
  let L = /* @__PURE__ */ Se(!1), A = /* @__PURE__ */ Se(void 0), k = /* @__PURE__ */ Se(void 0), f = /* @__PURE__ */ Se(lt({ x: 0, y: 0 }));
  const B = {
    glass: {
      trigger: "bg-white/10 border-white/20 hover:bg-white/20 text-white",
      menu: "bg-black/80 border-white/20",
      item: "hover:bg-white/10 text-white/90",
      active: "bg-white/20",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    },
    terminal: {
      trigger: "bg-gray-900/90 border-green-400/40 hover:border-green-400 text-green-400",
      menu: "bg-gray-900/95 border-green-400/40",
      item: "hover:bg-green-400/10 text-green-400",
      active: "bg-green-400/20",
      glow: "shadow-[0_0_15px_rgba(74,222,128,0.6)]"
    },
    liquid: {
      trigger: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/30 hover:from-blue-500/30 hover:to-purple-500/30 text-white",
      menu: "bg-gradient-to-br from-blue-900/90 to-purple-900/90 border-white/30",
      item: "hover:bg-white/10 text-white",
      active: "bg-white/20",
      glow: "shadow-[0_0_25px_rgba(139,92,246,0.5)]"
    },
    neon: {
      trigger: "bg-black border-pink-500/50 hover:border-pink-500 text-pink-400",
      menu: "bg-black/95 border-pink-500/50",
      item: "hover:bg-pink-500/20 text-pink-300",
      active: "bg-pink-500/30",
      glow: "shadow-[0_0_20px_rgba(236,72,153,0.7)]"
    }
  }, $ = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg"
  }, y = () => {
    if (!t(A) || !t(k)) return;
    const x = t(A).getBoundingClientRect(), S = t(k).getBoundingClientRect(), W = window.innerWidth, X = window.innerHeight;
    let E = 0, m = 0;
    switch (d()) {
      case "bottom":
        E = 0, m = x.height + 4;
        break;
      case "top":
        E = 0, m = -S.height - 4;
        break;
      case "left":
        E = -S.width - 4, m = 0;
        break;
      case "right":
        E = x.width + 4, m = 0;
        break;
    }
    const p = x.left + E, oe = x.top + m + x.height;
    p + S.width > W && (E = W - p - S.width - 8), oe + S.height > X && (m = -S.height - 4), Y(f, { x: E, y: m }, !0);
  }, T = (x) => {
    x.disabled || x.divider || (e.onSelect?.(x.value), Y(L, !1));
  }, F = (x) => {
    t(A) && !t(A).contains(x.target) && Y(L, !1);
  }, H = (x) => {
    x.key === "Escape" && Y(L, !1);
  };
  yt(() => (document.addEventListener("click", F), document.addEventListener("keydown", H), () => {
    document.removeEventListener("click", F), document.removeEventListener("keydown", H);
  }));
  const j = B[n()], q = e.items.find((x) => x.value === e.value);
  xt(() => {
    t(f);
  });
  var O = md();
  Qe(O, (x) => ({ class: x, ...P }), [() => V("relative inline-block", w())]);
  var I = i(O);
  I.__click = [vd, L, y];
  var G = i(I), U = i(G), R = u(G, 2);
  {
    let x = /* @__PURE__ */ Ee(() => V("transition-transform duration-200", t(L) && "rotate-180"));
    Xr(R, {
      size: 16,
      get class() {
        return t(x);
      }
    });
  }
  qe(I, (x, S) => bt?.(x, S), () => ({ enabled: !0, strength: 0.1 }));
  var C = u(I, 2);
  {
    var _ = (x) => {
      var S = gd(), W = i(S);
      Ye(W, 21, () => e.items, (X) => X.value, (X, E) => {
        var m = Ae(), p = ke(m);
        {
          var oe = (ve) => {
            var be = ud();
            o(ve, be);
          }, ce = (ve) => {
            var be = bd();
            be.__click = [fd, T, E];
            var te = i(be);
            {
              var K = (ee) => {
                var J = Ae(), Z = ke(J);
                Et(Z, () => t(E).icon, (ie, ne) => {
                  ne(ie, { size: 16 });
                }), o(ee, J);
              };
              b(te, (ee) => {
                t(E).icon && ee(K);
              });
            }
            var ae = u(te, 2), z = i(ae);
            M(
              (ee) => {
                be.disabled = t(E).disabled, D(be, 1, ee), re(z, t(E).label);
              },
              [
                () => Q(V("flex items-center gap-3 w-full px-4 py-2 transition-all duration-200", j.item, t(E).value === e.value && j.active, t(E).disabled && "opacity-50 cursor-not-allowed", !t(E).disabled && "cursor-pointer"))
              ]
            ), o(ve, be);
          };
          b(p, (ve) => {
            t(E).divider ? ve(oe) : ve(ce, !1);
          });
        }
        o(X, m);
      }), at(S, (X) => Y(k, X), () => t(k)), M(
        (X) => {
          D(S, 1, X), pt(S, `left: ${t(f).x}px; top: ${t(f).y}px;`);
        },
        [
          () => Q(V("absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden", j.menu, g() && j.glow, c() && "transform-gpu will-change-transform", h()))
        ]
      ), nt(3, S, () => gt, () => ({ duration: c() ? 200 : 0 })), o(x, S);
    };
    b(C, (x) => {
      t(L) && x(_);
    });
  }
  at(O, (x) => Y(A, x), () => t(A)), M(
    (x) => {
      D(I, 1, x), Ce(I, "aria-expanded", t(L)), re(U, q?.label || a());
    },
    [
      () => Q(V("flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200", $[l()], j.trigger, g() && t(L) && j.glow, "focus:outline-none focus:ring-2 focus:ring-white/20", N()))
    ]
  ), o(r, O), Ze();
}
ut(["click"]);
var hd = /* @__PURE__ */ v('<label class="block text-sm font-medium text-white/80 mb-2"> </label>'), pd = /* @__PURE__ */ v('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), xd = /* @__PURE__ */ v('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), wd = /* @__PURE__ */ v("<input/>"), _d = /* @__PURE__ */ v("<input/>"), yd = /* @__PURE__ */ v("<input/>"), kd = /* @__PURE__ */ v('<p class="mt-1 text-sm text-red-400" role="alert"> </p>'), Cd = /* @__PURE__ */ v('<div class="relative"><!> <div class="relative"><!> <!></div> <!></div>');
const Sd = {
  hash: "svelte-177vx52",
  code: `input.svelte-177vx52:focus {box-shadow:0 0 0 3px rgba(0, 122, 255, 0.1);transition:box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);}input.svelte-177vx52.glass:focus {-webkit-backdrop-filter:blur(16px) saturate(200%);backdrop-filter:blur(16px) saturate(200%);transition:-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
			-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);}input.svelte-177vx52.terminal {caret-color:var(--terminal-green);}

	/* Liquid input effects */input.svelte-177vx52:focus {transform:translateY(-1px);}input.svelte-177vx52.backdrop-blur-md:focus {-webkit-backdrop-filter:blur(12px) saturate(150%);backdrop-filter:blur(12px) saturate(150%);background:linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));}

	/* Enhanced hover states */input.svelte-177vx52:hover:not(:focus) {border-color:rgba(255, 255, 255, 0.3);background:linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));}

	/* Jelly physics simulation */input.svelte-177vx52.jelly-hover:hover {transform:scale(1.01) translateY(-1px);transition:transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);}

	/* Magnetic attraction visual feedback */input.svelte-177vx52.magnetic:hover {box-shadow:0 4px 20px rgba(139, 92, 246, 0.15);}`
};
function Ed(r, e) {
  Ke(e, !0), Je(r, Sd);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "label", 3, ""), d = s(e, "error", 3, ""), c = s(e, "icon", 3, null), g = s(e, "animate", 3, !0), w = s(e, "liquid", 3, !1), N = s(e, "magnetic", 3, !1), h = s(e, "jelly", 3, !1), P = s(e, "glow", 3, !1), L = s(e, "class", 3, ""), A = s(e, "id", 3, ""), k = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "label",
    "error",
    "icon",
    "animate",
    "liquid",
    "magnetic",
    "jelly",
    "glow",
    "class",
    "id",
    "aria-label",
    "children"
  ]), f = {
    default: "bg-white/5 border border-white/20 focus:border-brand-primary",
    glass: "glass border-white/30 focus:border-terminal-green/50 focus:shadow-lg",
    terminal: "bg-terminal-bg border border-terminal-green/20 focus:border-terminal-green text-terminal-fg font-mono",
    liquid: "bg-gradient-to-r from-white/5 to-white/10 border border-white/20 focus:border-brand-primary focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15"
  }, B = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, $ = "w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300", y = d() ? "border-red-500 focus:border-red-500" : "", T = c() || e.children?.icon ? "pl-10" : "", F = P() ? "focus:shadow-lg focus:shadow-brand-primary/20" : "", H = w() ? "backdrop-blur-md" : "", j = V($, f[a()], B[n()], y, T, F, H, L()), q = A() || `input-${Math.random().toString(36).substr(2, 9)}`, O = d() ? `${q}-error` : void 0;
  var I = Cd(), G = i(I);
  {
    var U = (p) => {
      var oe = hd(), ce = i(oe);
      M(() => {
        Ce(oe, "for", q), re(ce, l());
      }), o(p, oe);
    };
    b(G, (p) => {
      l() && p(U);
    });
  }
  var R = u(G, 2), C = i(R);
  {
    var _ = (p) => {
      var oe = pd(), ce = i(oe);
      it(ce, c), o(p, oe);
    }, x = (p) => {
      var oe = Ae(), ce = ke(oe);
      {
        var ve = (be) => {
          var te = xd(), K = i(te);
          it(K, () => e.children.icon), o(be, te);
        };
        b(
          ce,
          (be) => {
            e.children?.icon && be(ve);
          },
          !0
        );
      }
      o(p, oe);
    };
    b(C, (p) => {
      c() ? p(_) : p(x, !1);
    });
  }
  var S = u(C, 2);
  {
    var W = (p) => {
      var oe = wd();
      Qe(oe, (ce) => ({ id: A(), class: ce, ...k }), [j], void 0, "svelte-177vx52"), qe(oe, (ce, ve) => bt?.(ce, ve), () => N() ? { strength: 0.1, distance: 50 } : void 0), qe(oe, (ce, ve) => It?.(ce, ve), () => h() ? { intensity: 0.05, speed: 200 } : void 0), nt(1, oe, () => kt, () => ({ duration: 300, blur: "sm", scale: 0.98 })), o(p, oe);
    }, X = (p) => {
      var oe = Ae(), ce = ke(oe);
      {
        var ve = (te) => {
          var K = _d();
          Qe(
            K,
            (ae) => ({
              id: q,
              class: ae,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": O,
              ...k
            }),
            [j],
            void 0,
            "svelte-177vx52"
          ), qe(K, (ae, z) => bt?.(ae, z), () => N() ? { strength: 0.1, distance: 50 } : void 0), qe(K, (ae, z) => It?.(ae, z), () => h() ? { intensity: 0.05, speed: 200 } : void 0), nt(1, K, () => gt, () => ({
            duration: 200,
            direction: "up",
            distance: 5,
            opacity: "light"
          })), o(te, K);
        }, be = (te) => {
          var K = yd();
          Qe(
            K,
            (ae) => ({
              id: q,
              class: ae,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": O,
              ...k
            }),
            [j],
            void 0,
            "svelte-177vx52"
          ), qe(K, (ae, z) => bt?.(ae, z), () => N() ? { strength: 0.1, distance: 50 } : void 0), qe(K, (ae, z) => It?.(ae, z), () => h() ? { intensity: 0.05, speed: 200 } : void 0), o(te, K);
        };
        b(
          ce,
          (te) => {
            g() ? te(ve) : te(be, !1);
          },
          !0
        );
      }
      o(p, oe);
    };
    b(S, (p) => {
      g() && w() ? p(W) : p(X, !1);
    });
  }
  var E = u(R, 2);
  {
    var m = (p) => {
      var oe = kd(), ce = i(oe);
      M(() => {
        Ce(oe, "id", O), re(ce, d());
      }), o(p, oe);
    };
    b(E, (p) => {
      d() && p(m);
    });
  }
  o(r, I), Ze();
}
var Td = /* @__PURE__ */ v("<div> </div>"), Md = /* @__PURE__ */ v('<div class="flex items-center justify-between svelte-17v0sh2"><div class="flex-1 svelte-17v0sh2"><div> </div> <div> </div></div> <div class="flex flex-col items-end gap-1 svelte-17v0sh2"><!> <!></div></div>'), Ad = /* @__PURE__ */ v("<span> </span>"), zd = /* @__PURE__ */ v("<span> </span>"), Id = /* @__PURE__ */ v('<div class="flex items-center gap-2 svelte-17v0sh2"><!> <!> <!></div>'), Pd = /* @__PURE__ */ v("<div> </div>"), Ld = /* @__PURE__ */ v('<div class="space-y-2 svelte-17v0sh2"><div class="flex items-center justify-between svelte-17v0sh2"><div> </div> <!></div> <div> </div> <!> <!></div>'), Dd = /* @__PURE__ */ v('<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg svelte-17v0sh2"><div class="flex items-center gap-2 svelte-17v0sh2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-17v0sh2"></div> <span class="text-sm opacity-70 svelte-17v0sh2">Loading...</span></div></div>'), jd = /* @__PURE__ */ v('<div class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none svelte-17v0sh2"></div>'), Rd = /* @__PURE__ */ v("<!> <!> <!>", 1);
const Nd = {
  hash: "svelte-17v0sh2",
  code: `
	/* Ensure smooth hover transitions */[role='button'].svelte-17v0sh2 {will-change:transform;}

	/* Loading skeleton animation */
	@keyframes svelte-17v0sh2-skeleton {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}.loading.svelte-17v0sh2 {
		animation: svelte-17v0sh2-skeleton 1.5s ease-in-out infinite;}`
};
function np(r, e) {
  Ke(e, !0), Je(r, Nd);
  let a = s(e, "size", 3, "md"), n = s(e, "variant", 3, "glass"), l = s(e, "layout", 3, "vertical"), d = s(e, "showTrend", 3, !0), c = s(e, "showChange", 3, !0), g = s(e, "showIcon", 3, !1), w = s(e, "animated", 3, !0), N = s(e, "loading", 3, !1), h = s(e, "clickable", 3, !1), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "metric",
    "size",
    "variant",
    "layout",
    "showTrend",
    "showChange",
    "showIcon",
    "animated",
    "loading",
    "clickable",
    "class"
  ]);
  const A = {
    sm: {
      container: "p-4",
      value: "text-2xl",
      label: "text-sm",
      change: "text-xs",
      icon: "w-5 h-5"
    },
    md: {
      container: "p-6",
      value: "text-3xl",
      label: "text-base",
      change: "text-sm",
      icon: "w-6 h-6"
    },
    lg: {
      container: "p-8",
      value: "text-4xl",
      label: "text-lg",
      change: "text-base",
      icon: "w-8 h-8"
    }
  }, k = {
    glass: {
      container: "bg-white/10 border-white/20 backdrop-blur-md text-white",
      value: "text-white font-bold",
      label: "text-white/80",
      changePositive: "text-green-400",
      changeNegative: "text-red-400",
      changeNeutral: "text-white/60",
      icon: "text-white/70"
    },
    terminal: {
      container: "bg-terminal-bg/80 border-terminal-green/40 text-terminal-green",
      value: "text-terminal-green font-bold",
      label: "text-terminal-green/80",
      changePositive: "text-terminal-green",
      changeNegative: "text-red-400",
      changeNeutral: "text-terminal-green/60",
      icon: "text-terminal-green/70"
    },
    liquid: {
      container: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/20 backdrop-blur-md text-white",
      value: "text-white font-bold",
      label: "text-white/80",
      changePositive: "text-green-400",
      changeNegative: "text-red-400",
      changeNeutral: "text-white/60",
      icon: "text-white/70"
    }
  }, f = A[a()], B = k[n()], $ = /* @__PURE__ */ Ee(() => () => {
    if (N()) return "---";
    const O = e.metric.value, I = e.metric.format || "number", G = e.metric.unit || "";
    switch (I) {
      case "currency":
        return `$${Number(O).toLocaleString()}${G}`;
      case "percentage":
        return `${O}%`;
      default:
        return `${Number(O).toLocaleString()}${G}`;
    }
  }), y = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.change || N()) return null;
    const O = e.metric.change, I = O > 0, G = O < 0;
    return {
      value: `${I ? "+" : ""}${O}%`,
      type: I ? "positive" : G ? "negative" : "neutral"
    };
  }), T = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.trend || N()) return null;
    switch (e.metric.trend) {
      case "up":
        return gi;
      case "down":
        return bi;
      default:
        return Zn;
    }
  }), F = /* @__PURE__ */ Ee(() => () => {
    if (!t(y)) return B.changeNeutral;
    switch (t(y).type) {
      case "positive":
        return B.changePositive;
      case "negative":
        return B.changeNegative;
      default:
        return B.changeNeutral;
    }
  });
  function H() {
    if (h()) {
      const O = new CustomEvent("click", { detail: e.metric });
      e.onclick?.(O);
    }
  }
  var j = Ae(), q = ke(j);
  $l(q, () => h() ? "button" : "div", !1, (O, I) => {
    qe(O, (X, E) => kt?.(X, E), () => ({ intensity: "medium" })), Qe(
      O,
      (X) => ({
        class: X,
        onclick: H,
        role: h() ? "button" : void 0,
        tabindex: h() ? 0 : void 0,
        ...L
      }),
      [
        () => V("relative rounded-lg border transition-all duration-200", f.container, B.container, h() && "cursor-pointer hover:scale-105 hover:shadow-lg", w() && "transform-gpu", P())
      ],
      void 0,
      "svelte-17v0sh2"
    );
    var G = Rd(), U = ke(G);
    {
      var R = (X) => {
        var E = Md(), m = i(E), p = i(m), oe = i(p), ce = u(p, 2), ve = i(ce), be = u(m, 2), te = i(be);
        {
          var K = (J) => {
            const Z = /* @__PURE__ */ Ee(() => t(T));
            var ie = Ae(), ne = ke(ie);
            {
              let de = /* @__PURE__ */ Ee(() => V(f.icon, t(F)));
              Et(ne, () => t(Z), (ge, se) => {
                se(ge, {
                  get class() {
                    return t(de);
                  },
                  strokeWidth: 2
                });
              });
            }
            o(J, ie);
          }, ae = (J) => {
            var Z = Ae(), ie = ke(Z);
            {
              var ne = (de) => {
                {
                  let ge = /* @__PURE__ */ Ee(() => V(f.icon, B.icon));
                  yn(de, {
                    get class() {
                      return t(ge);
                    }
                  });
                }
              };
              b(
                ie,
                (de) => {
                  g() && e.metric.icon && de(ne);
                },
                !0
              );
            }
            o(J, Z);
          };
          b(te, (J) => {
            g() && d() && t(T) ? J(K) : J(ae, !1);
          });
        }
        var z = u(te, 2);
        {
          var ee = (J) => {
            var Z = Td(), ie = i(Z);
            M(
              (ne) => {
                D(Z, 1, ne, "svelte-17v0sh2"), re(ie, t(y).value);
              },
              [
                () => Q(V("font-medium", f.change, t(F)))
              ]
            ), o(J, Z);
          };
          b(z, (J) => {
            c() && t(y) && J(ee);
          });
        }
        M(
          (J, Z) => {
            D(p, 1, J, "svelte-17v0sh2"), re(oe, e.metric.label), D(ce, 1, Z, "svelte-17v0sh2"), re(ve, t($));
          },
          [
            () => Q(V("font-medium", f.label, B.label)),
            () => Q(V("font-bold tracking-tight", f.value, B.value))
          ]
        ), o(X, E);
      }, C = (X) => {
        var E = Ld(), m = i(E), p = i(m), oe = i(p), ce = u(p, 2);
        {
          var ve = (J) => {
            {
              let Z = /* @__PURE__ */ Ee(() => V(f.icon, B.icon));
              yn(J, {
                get class() {
                  return t(Z);
                }
              });
            }
          };
          b(ce, (J) => {
            g() && e.metric.icon && J(ve);
          });
        }
        var be = u(m, 2), te = i(be), K = u(be, 2);
        {
          var ae = (J) => {
            var Z = Id(), ie = i(Z);
            {
              var ne = (le) => {
                const fe = /* @__PURE__ */ Ee(() => t(T));
                var pe = Ae(), Te = ke(pe);
                {
                  let Ne = /* @__PURE__ */ Ee(() => V("w-4 h-4", t(F)));
                  Et(Te, () => t(fe), (He, Be) => {
                    Be(He, {
                      get class() {
                        return t(Ne);
                      },
                      strokeWidth: 2
                    });
                  });
                }
                o(le, pe);
              };
              b(ie, (le) => {
                d() && t(T) && le(ne);
              });
            }
            var de = u(ie, 2);
            {
              var ge = (le) => {
                var fe = Ad(), pe = i(fe);
                M(
                  (Te) => {
                    D(fe, 1, Te, "svelte-17v0sh2"), re(pe, t(y).value);
                  },
                  [
                    () => Q(V("font-medium", f.change, t(F)))
                  ]
                ), o(le, fe);
              };
              b(de, (le) => {
                c() && t(y) && le(ge);
              });
            }
            var se = u(de, 2);
            {
              var ue = (le) => {
                var fe = zd(), pe = i(fe);
                M(
                  (Te) => {
                    D(fe, 1, Te, "svelte-17v0sh2"), re(pe, `from ${e.metric.previousValue ?? ""}`);
                  },
                  [
                    () => Q(V("opacity-60", f.change, B.label))
                  ]
                ), o(le, fe);
              };
              b(se, (le) => {
                e.metric.previousValue && le(ue);
              });
            }
            o(J, Z);
          };
          b(K, (J) => {
            (d() && t(T) || c() && t(y)) && J(ae);
          });
        }
        var z = u(K, 2);
        {
          var ee = (J) => {
            var Z = Pd(), ie = i(Z);
            M(
              (ne) => {
                D(Z, 1, ne, "svelte-17v0sh2"), re(ie, e.metric.description);
              },
              [
                () => Q(V("opacity-70 leading-relaxed", f.change, B.label))
              ]
            ), o(J, Z);
          };
          b(z, (J) => {
            e.metric.description && J(ee);
          });
        }
        M(
          (J, Z) => {
            D(p, 1, J, "svelte-17v0sh2"), re(oe, e.metric.label), D(be, 1, Z, "svelte-17v0sh2"), re(te, t($));
          },
          [
            () => Q(V("font-medium", f.label, B.label)),
            () => Q(V("font-bold tracking-tight", f.value, B.value))
          ]
        ), o(X, E);
      };
      b(U, (X) => {
        l() === "horizontal" ? X(R) : X(C, !1);
      });
    }
    var _ = u(U, 2);
    {
      var x = (X) => {
        var E = Dd();
        o(X, E);
      };
      b(_, (X) => {
        N() && X(x);
      });
    }
    var S = u(_, 2);
    {
      var W = (X) => {
        var E = jd();
        o(X, E);
      };
      b(S, (X) => {
        h() && X(W);
      });
    }
    o(I, G);
  }), o(r, j), Ze();
}
function qd(r, e, a) {
  e() && r.target === r.currentTarget && a();
}
var Od = (
  // Store previously focused element
  // Focus first focusable element in modal
  // Prevent body scroll
  // Add escape listener
  // Restore body scroll
  // Remove escape listener
  // Restore focus
  // Track bundle size
  (r, e) => r.key === "Escape" && e()
), Bd = /* @__PURE__ */ v('<div role="dialog" aria-modal="true" tabindex="0"><div><!></div></div>');
const Fd = {
  hash: "svelte-6n99c3",
  code: `div[role='dialog'].svelte-6n99c3 {-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}

	@media (prefers-reduced-motion: reduce) {div.svelte-6n99c3 {transition:none;
			animation: none;}
	}`
};
function op(r, e) {
  Ke(e, !0), Je(r, Fd);
  const a = s(e, "open", 3, !1), n = s(e, "size", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "blur", 3, "xl"), c = s(e, "closeOnOutsideClick", 3, !0), g = s(e, "closeOnEscape", 3, !0), w = s(e, "animate", 3, !0), N = s(e, "jelly", 3, !0), h = s(e, "glow", 3, !1), P = s(e, "breathing", 3, !1), L = s(e, "reduceMotion", 3, !1), A = s(e, "class", 3, ""), k = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "open",
    "size",
    "variant",
    "blur",
    "closeOnOutsideClick",
    "closeOnEscape",
    "animate",
    "jelly",
    "glow",
    "breathing",
    "reduceMotion",
    "aria-labelledby",
    "aria-describedby",
    "class",
    "children",
    "onClose"
  ]);
  let f = /* @__PURE__ */ Se(void 0), B = null;
  const $ = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4"
  }, y = {
    glass: {
      bg: "bg-white/10 border-white/20",
      overlay: "bg-black/30",
      glow: "shadow-[0_0_60px_rgba(255,255,255,0.2)]"
    },
    terminal: {
      bg: "bg-gray-900/95 border-green-400/30",
      overlay: "bg-black/70",
      glow: "shadow-[0_0_40px_rgba(74,222,128,0.4)]"
    },
    liquid: {
      bg: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/30",
      overlay: "bg-gradient-to-br from-black/40 via-blue-900/20 to-black/40",
      glow: "shadow-[0_0_80px_rgba(139,92,246,0.4)]"
    },
    neon: {
      bg: "bg-black/90 border-pink-500/40",
      overlay: "bg-black/60",
      glow: "shadow-[0_0_50px_rgba(236,72,153,0.6)]"
    },
    bubbleTea: {
      bg: "bg-gradient-to-br from-bubble-tea-pink/15 to-bubble-tea-purple/15 border-bubble-tea-purple/30",
      overlay: "bg-gradient-to-br from-black/40 via-bubble-tea-purple/10 to-black/40",
      glow: "shadow-[0_0_60px_rgba(255,107,157,0.4)]"
    }
  }, T = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, F = y[l()], H = V("fixed inset-0 z-50 flex items-center justify-center p-4", F.overlay, T[d()]), q = V("relative w-full p-6 backdrop-blur-xl border transition-all duration-300", "transform-gpu will-change-transform", "modal-radius-lg", $[n()], F.bg, h() && F.glow, A());
  function O(_) {
    _.key === "Escape" && g() && (_.preventDefault(), I()), _.key === "Tab" && G(_);
  }
  function I() {
    e.onClose && e.onClose();
  }
  function G(_) {
    if (!t(f)) return;
    const x = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), S = x[0], W = x[x.length - 1];
    _.shiftKey ? document.activeElement === S && (W.focus(), _.preventDefault()) : document.activeElement === W && (S.focus(), _.preventDefault());
  }
  xt(() => (a() ? (B = document.activeElement, setTimeout(
    () => {
      if (t(f)) {
        const x = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])')[0];
        x && x.focus();
      }
    },
    100
  ), document.body.style.overflow = "hidden", document.addEventListener("keydown", O)) : (document.body.style.overflow = "", document.removeEventListener("keydown", O), B && B instanceof HTMLElement && B.focus()), () => {
    document.body.style.overflow = "", document.removeEventListener("keydown", O);
  })), xt(() => {
    Jt("Modal", "medium");
  });
  var U = Ae(), R = ke(U);
  {
    var C = (_) => {
      var x = Bd();
      x.__click = [qd, c, I], x.__keydown = [Od, I];
      var S = i(x);
      Qe(S, () => ({ class: q, ...k }), void 0, void 0, "svelte-6n99c3");
      var W = i(S);
      {
        var X = (E) => {
          var m = Ae(), p = ke(m);
          it(p, () => e.children), o(E, m);
        };
        b(W, (E) => {
          e.children && E(X);
        });
      }
      at(S, (E) => Y(f, E), () => t(f)), qe(S, (E, m) => It?.(E, m), () => ({
        enabled: N() && w() && !L(),
        scale: 1.001,
        duration: 300,
        borderRadius: "var(--radius-xl)"
      })), qe(S, (E, m) => Rt?.(E, m), () => ({
        enabled: P() && w() && !L(),
        intensity: 0.01,
        speed: 4e3
      })), M(() => {
        D(x, 1, Q(H), "svelte-6n99c3"), Ce(x, "aria-labelledby", e["aria-labelledby"]), Ce(x, "aria-describedby", e["aria-describedby"]);
      }), nt(1, S, () => Wt, () => ({
        scale: 0.8,
        duration: w() && !L() ? 400 : 0,
        delay: 100
      })), nt(2, S, () => Wt, () => ({
        scale: 0.95,
        duration: w() && !L() ? 200 : 0
      })), nt(1, x, () => gt, () => ({
        direction: "center",
        duration: w() && !L() ? 200 : 0
      })), nt(2, x, () => gt, () => ({
        direction: "center",
        duration: w() && !L() ? 150 : 0
      })), o(_, x);
    };
    b(R, (_) => {
      a() && _(C);
    });
  }
  o(r, U), Ze();
}
ut(["click", "keydown"]);
function Hd(r, e, a, n) {
  const l = r.target;
  Y(e, l.value, !0), a("search", t(e)), Y(
    n,
    -1
    // Reset focus when searching
  );
}
var Vd = (
  // Remove last selected item if search is empty
  // Update internal state when value prop changes
  // Click outside to close
  (r, e, a) => e(t(a).value, r)
), Gd = /* @__PURE__ */ v('<div><span class="truncate max-w-32"> </span> <button><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'), Ud = /* @__PURE__ */ v('<input role="searchbox" aria-label="Search options" aria-controls="multiselect-listbox"/>'), Yd = /* @__PURE__ */ v("<span> </span>"), Wd = /* @__PURE__ */ v("<div> </div>"), Xd = (r, e, a) => e(t(a)), Kd = (r, e, a) => r.key === "Enter" && e(t(a)), Zd = /* @__PURE__ */ v('<div class="text-xs opacity-70 mt-0.5"> </div>'), Qd = /* @__PURE__ */ nr('<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), Jd = /* @__PURE__ */ v('<div role="option" tabindex="0"><div class="flex items-center justify-between"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div></div>'), $d = /* @__PURE__ */ v("<div> </div>"), ec = /* @__PURE__ */ v('<div id="multiselect-listbox" role="listbox" aria-multiselectable="true" aria-label="Available options"><!> <!></div>'), tc = /* @__PURE__ */ v('<div><div class="flex flex-wrap gap-1.5 items-center"><!> <!></div> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <!> <div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only"> <!></div></div>');
const rc = {
  hash: "svelte-39ftoh",
  code: `
	/* Scrollbar styling for dropdown */.overflow-auto.svelte-39ftoh::-webkit-scrollbar {width:8px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-track {background:rgba(255, 255, 255, 0.05);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Terminal-specific glow effects */.terminal .multi-select:focus-within {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}`
};
function ip(r, e) {
  Ke(e, !0), Je(r, rc);
  const a = s(e, "options", 19, () => []), n = s(e, "value", 19, () => []), l = s(e, "placeholder", 3, "Select items..."), d = s(e, "variant", 3, "default"), c = s(e, "size", 3, "md"), g = s(e, "disabled", 3, !1), w = s(e, "error", 3, !1), N = s(e, "searchable", 3, !0), h = s(e, "chipVariant", 19, d), P = s(e, "closeOnSelect", 3, !1), L = s(e, "class", 3, ""), A = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "options",
    "value",
    "placeholder",
    "variant",
    "size",
    "disabled",
    "error",
    "searchable",
    "maxSelections",
    "chipVariant",
    "closeOnSelect",
    "class"
  ]), k = zt();
  let f, B = /* @__PURE__ */ Se(void 0), $ = /* @__PURE__ */ Se(void 0), y = /* @__PURE__ */ Se(!1), T = /* @__PURE__ */ Se(""), F = /* @__PURE__ */ Se(lt([...n()])), H = /* @__PURE__ */ Se(-1);
  const j = {
    default: {
      container: "bg-gray-900/50 border-gray-700 focus-within:border-blue-500",
      dropdown: "bg-gray-900/95 border-gray-700",
      option: "text-gray-300 hover:bg-gray-800 hover:text-white",
      selectedOption: "bg-blue-600 text-white",
      searchInput: "bg-transparent text-white placeholder-gray-400",
      chip: "bg-gray-700 text-gray-200 hover:bg-gray-600",
      chipClose: "text-gray-400 hover:text-white"
    },
    glass: {
      container: "bg-white/5 border-white/10 focus-within:border-white/20 backdrop-blur-md",
      dropdown: "bg-white/10 border-white/20 backdrop-blur-lg",
      option: "text-white/70 hover:bg-white/10 hover:text-white",
      selectedOption: "bg-white/20 text-white",
      searchInput: "bg-transparent text-white placeholder-white/50",
      chip: "bg-white/10 text-white hover:bg-white/15 backdrop-blur-sm",
      chipClose: "text-white/70 hover:text-white"
    },
    terminal: {
      container: `bg-black/80 border-${Pe.terminal.green} focus-within:border-${Pe.terminal.matrix}`,
      dropdown: `bg-black/95 border-${Pe.terminal.green}`,
      option: `text-${Pe.terminal.green}/70 hover:bg-${Pe.terminal.green}/10 hover:text-${Pe.terminal.green}`,
      selectedOption: `bg-${Pe.terminal.green} text-black`,
      searchInput: `bg-transparent text-${Pe.terminal.green} placeholder-${Pe.terminal.green}/50`,
      chip: `bg-${Pe.terminal.green}/20 text-${Pe.terminal.green} hover:bg-${Pe.terminal.green}/30 border border-${Pe.terminal.green}/30`,
      chipClose: `text-${Pe.terminal.green}/70 hover:text-${Pe.terminal.green}`
    }
  }, q = {
    sm: {
      container: "min-h-8 px-2 py-1",
      chip: "px-2 py-0.5 text-xs",
      option: "px-3 py-1.5 text-sm",
      input: "text-sm"
    },
    md: {
      container: "min-h-10 px-3 py-2",
      chip: "px-2.5 py-1 text-sm",
      option: "px-4 py-2 text-sm",
      input: "text-sm"
    },
    lg: {
      container: "min-h-12 px-4 py-3",
      chip: "px-3 py-1.5 text-base",
      option: "px-4 py-2.5 text-base",
      input: "text-base"
    }
  }, O = /* @__PURE__ */ Ee(() => j[d()]), I = /* @__PURE__ */ Ee(() => j[h()]), G = /* @__PURE__ */ Ee(() => q[c()]), U = /* @__PURE__ */ Ee(() => () => t(T) ? a().filter((ge) => ge.label.toLowerCase().includes(t(T).toLowerCase()) || ge.value.toLowerCase().includes(t(T).toLowerCase()) || ge.description?.toLowerCase().includes(t(T).toLowerCase())) : a()), R = /* @__PURE__ */ Ee(() => () => t(U).filter((ge) => !t(F).includes(ge.value))), C = /* @__PURE__ */ Ee(() => () => t(F).map((ge) => a().find((se) => se.value === ge)).filter(Boolean)), _ = /* @__PURE__ */ Ee(() => () => e.maxSelections ? t(F).length >= e.maxSelections : !1);
  function x() {
    g() || t(y) || (Y(y, !0), k("open"), setTimeout(
      () => {
        N() && t(B) && t(B).focus();
      },
      0
    ));
  }
  function S(ge) {
    ge.disabled || t(_) && !t(F).includes(ge.value) || (t(F).includes(ge.value) ? X(ge.value) : W(ge.value), P() && !t(F).includes(ge.value) && (Y(y, !1), k("close")));
  }
  function W(ge) {
    t(_) || (Y(F, [...t(F), ge], !0), k("add", ge), k("change", t(F)), Y(T, ""), k("search", t(T)));
  }
  function X(ge) {
    Y(F, t(F).filter((se) => se !== ge), !0), k("remove", ge), k("change", t(F));
  }
  function E(ge, se) {
    se.stopPropagation(), X(ge);
  }
  function m(ge) {
    switch (ge.key) {
      case "Escape":
        Y(y, !1), k("close");
        break;
      case "ArrowDown":
        ge.preventDefault(), t(y) ? Y(H, Math.min(t(H) + 1, t(R).length - 1), !0) : (Y(y, !0), k("open"));
        break;
      case "ArrowUp":
        ge.preventDefault(), Y(H, Math.max(t(H) - 1, -1), !0);
        break;
      case "Enter":
        ge.preventDefault(), t(H) >= 0 && t(R)[t(H)] && S(t(R)[t(H)]);
        break;
      case "Backspace":
        t(T) === "" && t(F).length > 0 && X(t(F)[t(F).length - 1]);
        break;
    }
  }
  xt(() => {
    Y(F, [...n()], !0);
  }), yt(() => {
    function ge(se) {
      t(y) && f && !f.contains(se.target) && (Y(y, !1), k("close"));
    }
    return document.addEventListener("click", ge), () => document.removeEventListener("click", ge);
  });
  const p = /* @__PURE__ */ Ee(() => V("relative w-full min-h-10 rounded-lg border transition-all duration-200", "cursor-text font-mono", t(O).container, t(G).container, w() && "border-red-500 focus-within:border-red-500", g() && "opacity-50 cursor-not-allowed", t(y) && "ring-2 ring-opacity-50", L()));
  var oe = tc();
  Qe(
    oe,
    () => ({
      class: t(p),
      onclick: x,
      onkeydown: m,
      role: "combobox",
      "aria-expanded": t(y),
      "aria-haspopup": "listbox",
      "aria-controls": "multiselect-listbox",
      "aria-label": l(),
      "aria-describedby": "multiselect-status",
      tabindex: g() ? -1 : 0,
      ...A
    }),
    void 0,
    void 0,
    "svelte-39ftoh"
  );
  var ce = i(oe), ve = i(ce);
  Ye(ve, 17, () => t(C), (ge) => ge.value, (ge, se) => {
    var ue = Gd(), le = i(ue), fe = i(le), pe = u(le, 2);
    pe.__click = [Vd, E, se], qe(ue, (Te, Ne) => bt?.(Te, Ne), () => ({ strength: 0.15 })), M(() => {
      D(
        ue,
        1,
        `inline-flex items-center gap-1.5 rounded-md ${t(I).chip ?? ""} ${t(G).chip ?? ""} 
				       font-mono transition-all duration-200`,
        "svelte-39ftoh"
      ), re(fe, t(se).label), D(
        pe,
        1,
        `flex-shrink-0 rounded-full ${t(I).chipClose ?? ""} hover:bg-black/20
					       transition-colors p-0.5`,
        "svelte-39ftoh"
      ), Ce(pe, "aria-label", `Remove ${t(se).label ?? ""}`);
    }), nt(1, ue, () => Wt, () => ({ duration: 200, bounce: !0 })), o(ge, ue);
  });
  var be = u(ve, 2);
  {
    var te = (ge) => {
      var se = Ud();
      se.__input = [Hd, T, k, H], se.__keydown = m, at(se, (ue) => Y(B, ue), () => t(B)), M(() => {
        Ce(se, "placeholder", t(F).length === 0 ? l() : ""), D(se, 1, `flex-1 min-w-32 outline-none ${t(O).searchInput ?? ""} ${t(G).input ?? ""}`, "svelte-39ftoh"), se.disabled = g() || t(_);
      }), or(se, () => t(T), (ue) => Y(T, ue)), o(ge, se);
    }, K = (ge) => {
      var se = Ae(), ue = ke(se);
      {
        var le = (fe) => {
          var pe = Yd(), Te = i(pe);
          M(() => {
            D(pe, 1, `text-gray-400 ${t(G).input ?? ""}`, "svelte-39ftoh"), re(Te, l());
          }), o(fe, pe);
        };
        b(
          ue,
          (fe) => {
            t(F).length === 0 && fe(le);
          },
          !0
        );
      }
      o(ge, se);
    };
    b(be, (ge) => {
      N() ? ge(te) : ge(K, !1);
    });
  }
  var ae = u(ce, 2), z = i(ae), ee = u(ae, 2);
  {
    var J = (ge) => {
      var se = ec(), ue = i(se);
      {
        var le = (Ne) => {
          var He = Wd(), Be = i(He);
          M(() => {
            D(He, 1, `px-4 py-3 text-center ${t(O).option ?? ""} font-mono`, "svelte-39ftoh"), re(Be, t(T) ? "No results found" : "No more options available");
          }), o(Ne, He);
        }, fe = (Ne) => {
          var He = Ae(), Be = ke(He);
          Ye(Be, 19, () => t(R), (_e) => _e.value, (_e, xe, Ie) => {
            const Re = /* @__PURE__ */ Ee(() => t(Ie) === t(H)), me = /* @__PURE__ */ Ee(() => t(F).includes(t(xe).value));
            var we = Jd();
            we.__click = [Xd, S, xe], we.__keydown = [Kd, S, xe];
            var Me = i(we), Le = i(Me), ye = i(Le), he = i(ye), ze = u(ye, 2);
            {
              var De = (Ue) => {
                var tt = Zd(), et = i(tt);
                M(() => re(et, t(xe).description)), o(Ue, tt);
              };
              b(ze, (Ue) => {
                t(xe).description && Ue(De);
              });
            }
            var Oe = u(Le, 2);
            {
              var Ge = (Ue) => {
                var tt = Qd();
                o(Ue, tt);
              };
              b(Oe, (Ue) => {
                t(me) && Ue(Ge);
              });
            }
            qe(we, (Ue, tt) => bt?.(Ue, tt), () => ({ enabled: !t(xe).disabled, strength: 0.1 })), M(() => {
              D(
                we,
                1,
                `cursor-pointer transition-all duration-150 ${t(G).option ?? ""}
						       ${(t(Re) ? t(O).selectedOption : t(O).option) ?? ""}
						       ${t(xe).disabled ? "opacity-50 cursor-not-allowed" : ""}
						       font-mono border-b border-white/5 last:border-b-0`,
                "svelte-39ftoh"
              ), Ce(we, "aria-selected", t(me)), re(he, t(xe).label);
            }), o(_e, we);
          }), o(Ne, He);
        };
        b(ue, (Ne) => {
          t(R).length === 0 ? Ne(le) : Ne(fe, !1);
        });
      }
      var pe = u(ue, 2);
      {
        var Te = (Ne) => {
          var He = $d(), Be = i(He);
          M(() => {
            D(He, 1, `px-4 py-2 text-center text-xs ${t(O).option ?? ""} bg-yellow-500/10 border-t`, "svelte-39ftoh"), re(Be, `Maximum ${e.maxSelections ?? ""} selections reached`);
          }), o(Ne, He);
        };
        b(pe, (Ne) => {
          t(_) && Ne(Te);
        });
      }
      at(se, (Ne) => Y($, Ne), () => t($)), qe(se, (Ne, He) => kt?.(Ne, He), () => ({ blur: "lg", opacity: "medium" })), M(() => D(
        se,
        1,
        `absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl ${t(O).dropdown ?? ""}`,
        "svelte-39ftoh"
      )), nt(1, se, () => gt, () => ({ direction: "up", duration: 200 })), o(ge, se);
    };
    b(ee, (ge) => {
      t(y) && ge(J);
    });
  }
  var Z = u(ee, 2), ie = i(Z), ne = u(ie);
  {
    var de = (ge) => {
      var se = St();
      M(() => re(se, `out of maximum ${e.maxSelections ?? ""}`)), o(ge, se);
    };
    b(ne, (ge) => {
      e.maxSelections && ge(de);
    });
  }
  at(oe, (ge) => f = ge, () => f), qe(oe, (ge, se) => kt?.(ge, se), () => ({ blur: "sm", opacity: "light" })), qe(oe, (ge, se) => bt?.(ge, se), () => ({ enabled: !g(), strength: 0.1 })), M(() => {
    D(
      z,
      0,
      `w-4 h-4 transition-transform duration-200 ${t(y) ? "rotate-180" : ""} 
			       ${t(O).option ?? ""}`,
      "svelte-39ftoh"
    ), re(ie, `${t(F).length ?? ""} items selected `);
  }), o(r, oe), Ze();
}
ut(["click", "input", "keydown"]);
var ac = (r, e) => e(1), nc = /* @__PURE__ */ v('<button aria-label="Go to first page"><!></button>'), oc = (r, e, a) => e(a() - 1), ic = /* @__PURE__ */ v("<span>...</span>"), lc = (r, e, a) => e(t(a)), sc = /* @__PURE__ */ v("<button> </button>"), dc = (r, e, a) => e(a() + 1), cc = (r, e, a) => e(a.totalPages), vc = /* @__PURE__ */ v('<button aria-label="Go to last page"><!></button>'), uc = /* @__PURE__ */ v('<nav><!> <button aria-label="Go to previous page"><!></button> <!> <button aria-label="Go to next page"><!></button> <!></nav>');
function lp(r, e) {
  Ke(e, !0);
  let a = s(e, "currentPage", 15, 1), n = s(e, "siblingCount", 3, 1), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md");
  s(e, "animated", 3, !0);
  let c = s(e, "glow", 3, !1), g = s(e, "jelly", 3, !0), w = s(e, "showFirstLast", 3, !0), N = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "currentPage",
    "totalPages",
    "siblingCount",
    "variant",
    "size",
    "animated",
    "glow",
    "jelly",
    "showFirstLast",
    "class",
    "onchange"
  ]);
  const P = {
    glass: {
      container: "bg-white/5 border-white/10",
      button: "bg-white/10 border-white/20 hover:bg-white/20 text-white",
      active: "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-400/50 text-white",
      disabled: "opacity-50 cursor-not-allowed",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.5)]"
    },
    terminal: {
      container: "bg-gray-900/90 border-green-400/30",
      button: "bg-black/50 border-green-400/40 hover:bg-green-400/10 text-green-400",
      active: "bg-green-400/20 border-green-400 text-green-400",
      disabled: "opacity-50 cursor-not-allowed text-green-400/50",
      glow: "shadow-[0_0_15px_rgba(74,222,128,0.6)]"
    },
    liquid: {
      container: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/20",
      button: "bg-white/10 border-white/30 hover:bg-white/20 text-white",
      active: "bg-gradient-to-br from-blue-400 to-purple-500 border-blue-400/50 text-white",
      disabled: "opacity-50 cursor-not-allowed",
      glow: "shadow-[0_0_25px_rgba(139,92,246,0.5)]"
    },
    neon: {
      container: "bg-black border-pink-500/40",
      button: "bg-black border-pink-500/50 hover:bg-pink-500/10 text-pink-300",
      active: "bg-pink-500/30 border-pink-500 text-white",
      disabled: "opacity-50 cursor-not-allowed text-pink-300/50",
      glow: "shadow-[0_0_20px_rgba(236,72,153,0.7)]"
    }
  }, L = {
    sm: { button: "h-8 min-w-8 px-2 text-xs", icon: 14, gap: "gap-1" },
    md: { button: "h-10 min-w-10 px-3 text-sm", icon: 16, gap: "gap-2" },
    lg: {
      button: "h-12 min-w-12 px-4 text-base",
      icon: 20,
      gap: "gap-3"
    }
  }, A = () => {
    if (n() * 2 + 5 >= e.totalPages)
      return Array.from({ length: e.totalPages }, (W, X) => X + 1);
    const C = Math.max(a() - n(), 1), _ = Math.min(a() + n(), e.totalPages), x = C > 2, S = _ < e.totalPages - 1;
    if (!x && S) {
      const W = 3 + 2 * n();
      return [...Array.from({ length: W }, (E, m) => m + 1), "...", e.totalPages];
    }
    if (x && !S) {
      const W = 3 + 2 * n();
      return [1, "...", ...Array.from({ length: W }, (E, m) => e.totalPages - W + m + 1)];
    }
    return x && S ? [1, "...", ...Array.from({ length: _ - C + 1 }, (X, E) => C + E), "...", e.totalPages] : [];
  }, k = (R) => {
    R < 1 || R > e.totalPages || R === a() || (a(R), e.onchange?.(R));
  }, f = P[l()], B = L[d()], $ = /* @__PURE__ */ Ee(A);
  var y = uc();
  Qe(y, (R) => ({ class: R, "aria-label": "Pagination", ...h }), [
    () => V("inline-flex items-center backdrop-blur-xl border rounded-2xl p-2", B.gap, f.container, N())
  ]);
  var T = i(y);
  {
    var F = (R) => {
      var C = nc();
      C.__click = [ac, k];
      var _ = i(C);
      mi(_, {
        get size() {
          return B.icon;
        }
      }), qe(C, (x, S) => jellyHover?.(x, S), () => ({
        enabled: g() && a() !== 1,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), M(
        (x) => {
          C.disabled = a() === 1, D(C, 1, x);
        },
        [
          () => Q(V("flex items-center justify-center rounded-lg border transition-all duration-200", B.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(R, C);
    };
    b(T, (R) => {
      w() && R(F);
    });
  }
  var H = u(T, 2);
  H.__click = [oc, k, a];
  var j = i(H);
  ua(j, {
    get size() {
      return B.icon;
    }
  }), qe(H, (R, C) => jellyHover?.(R, C), () => ({
    enabled: g() && a() !== 1,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var q = u(H, 2);
  Ye(q, 17, () => t($), At, (R, C) => {
    var _ = Ae(), x = ke(_);
    {
      var S = (X) => {
        var E = ic();
        M((m) => D(E, 1, m), [
          () => Q(V("flex items-center justify-center", B.button, "opacity-50"))
        ]), o(X, E);
      }, W = (X) => {
        var E = sc();
        E.__click = [lc, k, C];
        var m = i(E);
        qe(E, (p, oe) => jellyHover?.(p, oe), () => ({
          enabled: g() && t(C) !== a(),
          scale: 1.05,
          duration: 200,
          borderRadius: "8px"
        })), M(
          (p) => {
            D(E, 1, p), Ce(E, "aria-label", `Go to page ${t(C)}`), Ce(E, "aria-current", t(C) === a() ? "page" : void 0), re(m, t(C));
          },
          [
            () => Q(V("flex items-center justify-center rounded-lg border transition-all duration-200 font-medium", B.button, t(C) === a() ? f.active : f.button, t(C) === a() && c() && f.glow, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]
        ), o(X, E);
      };
      b(x, (X) => {
        t(C) === "..." ? X(S) : X(W, !1);
      });
    }
    o(R, _);
  });
  var O = u(q, 2);
  O.__click = [dc, k, a];
  var I = i(O);
  Nr(I, {
    get size() {
      return B.icon;
    }
  }), qe(O, (R, C) => jellyHover?.(R, C), () => ({
    enabled: g() && a() !== e.totalPages,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var G = u(O, 2);
  {
    var U = (R) => {
      var C = vc();
      C.__click = [cc, k, e];
      var _ = i(C);
      hi(_, {
        get size() {
          return B.icon;
        }
      }), qe(C, (x, S) => jellyHover?.(x, S), () => ({
        enabled: g() && a() !== e.totalPages,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), M(
        (x) => {
          C.disabled = a() === e.totalPages, D(C, 1, x);
        },
        [
          () => Q(V("flex items-center justify-center rounded-lg border transition-all duration-200", B.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(R, C);
    };
    b(G, (R) => {
      w() && R(U);
    });
  }
  M(
    (R, C) => {
      H.disabled = a() === 1, D(H, 1, R), O.disabled = a() === e.totalPages, D(O, 1, C);
    },
    [
      () => Q(V("flex items-center justify-center rounded-lg border transition-all duration-200", B.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20")),
      () => Q(V("flex items-center justify-center rounded-lg border transition-all duration-200", B.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
    ]
  ), o(r, y), Ze();
}
ut(["click"]);
var fc = /* @__PURE__ */ v("<span><!></span>"), bc = /* @__PURE__ */ v('<div class="flex justify-between items-center svelte-b8e192"><label class="text-sm font-medium text-white svelte-b8e192"> </label> <!></div>'), gc = /* @__PURE__ */ v('<div role="progressbar" aria-valuemin="0"><div></div></div>'), mc = /* @__PURE__ */ v("<div><!></div>"), hc = /* @__PURE__ */ v('<div role="progressbar" aria-valuemin="0"><svg class="transform -rotate-90 svelte-b8e192"><circle stroke="currentColor" fill="transparent" class="text-white/10 svelte-b8e192"></circle><circle stroke="currentColor" fill="transparent" stroke-linecap="round"></circle></svg> <!></div>'), pc = /* @__PURE__ */ v("<div><!> <!></div>");
const xc = {
  hash: "svelte-b8e192",
  code: `
	@keyframes svelte-b8e192-progress-indeterminate {
		0% {
			transform: translateX(-100%);
		}
		50% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(400%);
		}
	}div[role='progressbar'].svelte-b8e192 {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-b8e192 {transition:none;
			animation: none;will-change:auto;}.animate-spin.svelte-b8e192 {
			animation: none;}.animate-pulse.svelte-b8e192 {
			animation: none;}
	}`
};
function sp(r, e) {
  Ke(e, !0), Je(r, xc);
  const a = s(e, "value", 3, 0), n = s(e, "max", 3, 100), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "type", 3, "linear"), g = s(e, "blur", 3, "md"), w = s(e, "showValue", 3, !1), N = s(e, "showPercentage", 3, !1), h = s(e, "indeterminate", 3, !1), P = s(e, "animate", 3, !0), L = s(e, "reduceMotion", 3, !1), A = s(e, "class", 3, ""), k = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "value",
    "max",
    "size",
    "variant",
    "type",
    "blur",
    "showValue",
    "showPercentage",
    "indeterminate",
    "animate",
    "reduceMotion",
    "label",
    "class"
  ]), f = `progress-${Math.random().toString(36).substr(2, 9)}`, B = /* @__PURE__ */ Ee(() => h() ? 0 : Math.min(100, Math.max(0, a() / n() * 100))), $ = {
    sm: { linear: "h-1", circular: "w-8 h-8", text: "text-xs" },
    md: { linear: "h-2", circular: "w-12 h-12", text: "text-sm" },
    lg: { linear: "h-3", circular: "w-16 h-16", text: "text-base" }
  }, y = {
    default: { track: "bg-white/10", fill: "bg-blue-500" },
    glass: {
      track: "glass-subtle",
      fill: "bg-blue-500/80 backdrop-blur-sm"
    },
    terminal: { track: "bg-terminal-green/20", fill: "bg-terminal-green" }
  }, T = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, F = V("relative overflow-hidden rounded-full", $[l()][c()], y[d()].track, d() === "glass" && T[g()]), H = V("h-full transition-all duration-500 ease-out rounded-full", y[d()].fill, h() && "animate-pulse"), j = c() === "circular" ? parseInt($[l()].circular.split(" ")[0].slice(2)) * 4 : 0, q = Math.max(2, j / 8), O = (j - q) / 2, I = 2 * Math.PI * O, G = I, U = /* @__PURE__ */ Ee(() => I - t(B) / 100 * I);
  xt(() => {
    Jt("Progress", "small");
  });
  var R = pc();
  Qe(R, () => ({ class: "w-full space-y-2", ...k }), void 0, void 0, "svelte-b8e192");
  var C = i(R);
  {
    var _ = (X) => {
      var E = bc(), m = i(E), p = i(m), oe = u(m, 2);
      {
        var ce = (ve) => {
          var be = fc(), te = i(be);
          {
            var K = (z) => {
              var ee = St();
              M((J) => re(ee, `${J ?? ""}%`), [() => t(B).toFixed(0)]), o(z, ee);
            }, ae = (z) => {
              var ee = Ae(), J = ke(ee);
              {
                var Z = (ie) => {
                  var ne = St();
                  M(() => re(ne, `${a() ?? ""}/${n() ?? ""}`)), o(ie, ne);
                };
                b(
                  J,
                  (ie) => {
                    w() && ie(Z);
                  },
                  !0
                );
              }
              o(z, ee);
            };
            b(te, (z) => {
              N() ? z(K) : z(ae, !1);
            });
          }
          M((z) => D(be, 1, z, "svelte-b8e192"), [
            () => Q(V("font-medium text-white/80", $[l()].text))
          ]), o(ve, be);
        };
        b(oe, (ve) => {
          (w() || N()) && ve(ce);
        });
      }
      M(() => {
        Ce(m, "id", `progress-label-${f}`), Ce(m, "for", `progress-${f}`), re(p, e.label);
      }), o(X, E);
    };
    b(C, (X) => {
      e.label && X(_);
    });
  }
  var x = u(C, 2);
  {
    var S = (X) => {
      var E = gc(), m = i(E);
      let p;
      qe(m, (oe, ce) => kt?.(oe, ce), () => P() && !L() ? { blur: g(), opacity: "subtle" } : void 0), M(
        (oe, ce) => {
          Ce(E, "id", `progress-${f}`), D(E, 1, oe, "svelte-b8e192"), Ce(E, "aria-valuemax", n()), Ce(E, "aria-valuenow", h() ? void 0 : a()), Ce(E, "aria-label", e.label ? void 0 : "Progress"), Ce(E, "aria-labelledby", e.label ? `progress-label-${f}` : void 0), D(m, 1, Q(H), "svelte-b8e192"), p = pt(m, "", p, ce);
        },
        [
          () => Q(V(F, A())),
          () => ({
            width: h() ? "30%" : `${t(B)}%`,
            animation: h() && !L() ? "progress-indeterminate 2s ease-in-out infinite" : void 0
          })
        ]
      ), o(X, E);
    }, W = (X) => {
      var E = hc(), m = i(E), p = i(m), oe = u(p);
      let ce;
      var ve = u(m, 2);
      {
        var be = (te) => {
          var K = mc(), ae = i(K);
          {
            var z = (J) => {
              var Z = St();
              M((ie) => re(Z, `${ie ?? ""}%`), [() => t(B).toFixed(0)]), o(J, Z);
            }, ee = (J) => {
              var Z = Ae(), ie = ke(Z);
              {
                var ne = (de) => {
                  var ge = St();
                  M(() => re(ge, a())), o(de, ge);
                };
                b(
                  ie,
                  (de) => {
                    w() && de(ne);
                  },
                  !0
                );
              }
              o(J, Z);
            };
            b(ae, (J) => {
              N() ? J(z) : J(ee, !1);
            });
          }
          M((J) => D(K, 1, J, "svelte-b8e192"), [
            () => Q(V("absolute inset-0 flex items-center justify-center font-medium text-white", $[l()].text))
          ]), o(te, K);
        };
        b(ve, (te) => {
          (w() || N()) && te(be);
        });
      }
      M(
        (te, K) => {
          D(E, 1, te, "svelte-b8e192"), Ce(E, "aria-valuemax", n()), Ce(E, "aria-valuenow", h() ? void 0 : a()), Ce(E, "aria-label", e.label || "Progress"), Ce(m, "width", j), Ce(m, "height", j), Ce(p, "cx", j / 2), Ce(p, "cy", j / 2), Ce(p, "r", O), Ce(p, "stroke-width", q), Ce(oe, "cx", j / 2), Ce(oe, "cy", j / 2), Ce(oe, "r", O), Ce(oe, "stroke-width", q), Ce(oe, "stroke-dasharray", G), Ce(oe, "stroke-dashoffset", h() ? G * 0.75 : t(U)), ce = D(oe, 0, "text-blue-500 transition-all duration-500 ease-out svelte-b8e192", null, ce, K);
        },
        [
          () => Q(V("relative inline-flex items-center justify-center", $[l()].circular, A())),
          () => ({ "animate-spin": h() && !L() })
        ]
      ), o(X, E);
    };
    b(x, (X) => {
      c() === "linear" ? X(S) : X(W, !1);
    });
  }
  o(r, R), Ze();
}
var wc = (r, e, a) => !t(e).disabled && a(t(e).value), _c = /* @__PURE__ */ v("<div></div>"), yc = /* @__PURE__ */ v("<span> </span>"), kc = /* @__PURE__ */ v('<label><input type="radio" class="sr-only svelte-mbuql4"/> <div><!></div> <div class="flex flex-col svelte-mbuql4"><span> </span> <!></div></label>'), Cc = /* @__PURE__ */ v('<p class="text-red-400 text-sm mt-2 animate-pulse svelte-mbuql4"> </p>'), Sc = /* @__PURE__ */ v("<div><!> <!></div>");
const Ec = {
  hash: "svelte-mbuql4",
  code: `
	/* Radio button glow animation */
	@keyframes svelte-mbuql4-radio-glow {
		0%,
		100% {
			box-shadow: 0 0 20px currentColor;
		}
		50% {
			box-shadow:
				0 0 30px currentColor,
				0 0 40px currentColor;
		}
	}`
};
function dp(r, e) {
  Ke(e, !0), Je(r, Ec);
  let a = s(e, "value", 15), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "orientation", 3, "vertical"), c = s(e, "animated", 3, !0), g = s(e, "glow", 3, !1), w = s(e, "jelly", 3, !0), N = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "options",
    "value",
    "name",
    "variant",
    "size",
    "orientation",
    "animated",
    "glow",
    "jelly",
    "error",
    "class",
    "onchange"
  ]);
  const P = (F) => {
    a(F), e.onchange?.(F);
  }, L = {
    glass: {
      container: "bg-white/5 border-white/10",
      radio: "border-white/20 bg-white/5",
      checked: "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-400/50",
      label: "text-white/90",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.5)]"
    },
    terminal: {
      container: "bg-gray-900/90 border-green-400/30",
      radio: "border-green-400/40 bg-black/50",
      checked: "bg-green-400 border-green-400",
      label: "text-green-400",
      glow: "shadow-[0_0_15px_rgba(74,222,128,0.6)]"
    },
    liquid: {
      container: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/20",
      radio: "border-white/30 bg-white/10",
      checked: "bg-gradient-to-br from-blue-400 to-purple-500 border-blue-400/50",
      label: "text-white",
      glow: "shadow-[0_0_25px_rgba(139,92,246,0.5)]"
    },
    neon: {
      container: "bg-black border-pink-500/40",
      radio: "border-pink-500/50 bg-black",
      checked: "bg-pink-500 border-pink-500",
      label: "text-pink-300",
      glow: "shadow-[0_0_20px_rgba(236,72,153,0.7)]"
    }
  }, A = {
    sm: {
      radio: "w-4 h-4",
      dot: "w-2 h-2",
      label: "text-sm",
      gap: "gap-2"
    },
    md: {
      radio: "w-5 h-5",
      dot: "w-2.5 h-2.5",
      label: "text-base",
      gap: "gap-3"
    },
    lg: {
      radio: "w-6 h-6",
      dot: "w-3 h-3",
      label: "text-lg",
      gap: "gap-4"
    }
  }, k = L[n()], f = A[l()];
  var B = Sc();
  Qe(
    B,
    (F) => ({ class: F, ...h }),
    [
      () => V("relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300", k.container, d() === "horizontal" ? "inline-flex flex-row gap-6" : "flex flex-col gap-3", e.error && "border-red-500/50", N())
    ],
    void 0,
    "svelte-mbuql4"
  );
  var $ = i(B);
  Ye($, 17, () => e.options, At, (F, H) => {
    var j = kc(), q = i(j);
    q.__change = [wc, H, P];
    var O = u(q, 2), I = i(O);
    {
      var G = (S) => {
        var W = _c();
        M((X) => D(W, 1, X, "svelte-mbuql4"), [
          () => Q(V("rounded-full bg-white transition-all duration-300", f.dot, c() && "animate-pulse"))
        ]), o(S, W);
      };
      b(I, (S) => {
        a() === t(H).value && S(G);
      });
    }
    qe(O, (S, W) => Rt?.(S, W), () => ({
      enabled: c() && a() === t(H).value,
      intensity: 0.05,
      speed: 2e3
    }));
    var U = u(O, 2), R = i(U), C = i(R), _ = u(R, 2);
    {
      var x = (S) => {
        var W = yc(), X = i(W);
        M(
          (E) => {
            D(W, 1, E, "svelte-mbuql4"), re(X, t(H).description);
          },
          [
            () => Q(V("text-xs opacity-60 mt-0.5", k.label))
          ]
        ), o(S, W);
      };
      b(_, (S) => {
        t(H).description && S(x);
      });
    }
    qe(j, (S, W) => jellyHover?.(S, W), () => ({
      enabled: w() && !t(H).disabled,
      scale: 1.02,
      duration: 200,
      borderRadius: "16px"
    })), M(
      (S, W, X) => {
        D(j, 1, S, "svelte-mbuql4"), Ce(q, "name", e.name), Uo(q, t(H).value), Zt(q, a() === t(H).value), q.disabled = t(H).disabled, D(O, 1, W, "svelte-mbuql4"), D(R, 1, X, "svelte-mbuql4"), re(C, t(H).label);
      },
      [
        () => Q(V("relative flex items-center cursor-pointer group", f.gap, t(H).disabled && "opacity-50 cursor-not-allowed")),
        () => Q(V("relative rounded-full border-2 transition-all duration-300 flex items-center justify-center", f.radio, k.radio, a() === t(H).value && k.checked, a() === t(H).value && g() && k.glow, c() && "transform-gpu will-change-transform", !t(H).disabled && "group-hover:scale-110")),
        () => Q(V("font-medium transition-colors duration-200", f.label, k.label, !t(H).disabled && "group-hover:text-white"))
      ]
    ), o(F, j);
  });
  var y = u($, 2);
  {
    var T = (F) => {
      var H = Cc(), j = i(H);
      M(() => re(j, e.error)), o(F, H);
    };
    b(y, (F) => {
      e.error && F(T);
    });
  }
  o(r, B), Ze();
}
ut(["change"]);
var Tc = /* @__PURE__ */ v('<label class="block text-sm font-medium text-white/80 mb-2 svelte-gc8g7h"> </label>'), Mc = (r, e, a) => e(t(a)), Ac = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, zc = /* @__PURE__ */ v('<li role="option" tabindex="-1"> </li>'), Ic = /* @__PURE__ */ v('<ul role="listbox"></ul>'), Pc = /* @__PURE__ */ v('<!> <div><span class="truncate svelte-gc8g7h"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-gc8g7h"></path></svg></div> <!>', 1);
const Lc = {
  hash: "svelte-gc8g7h",
  code: `div[role="combobox"].svelte-gc8g7h {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-gc8g7h {transition:none;
            animation: none;}
    }`
};
function cp(r, e) {
  Ke(e, !0), Je(r, Lc);
  let a = s(e, "options", 19, () => []), n = s(e, "value", 7, ""), l = s(e, "placeholder", 3, "Select an option..."), d = s(e, "disabled", 3, !1), c = s(e, "size", 3, "md"), g = s(e, "variant", 3, "glass"), w = s(e, "blur", 3, "md"), N = s(e, "animate", 3, !0), h = s(e, "liquid", 3, !1), P = s(e, "magnetic", 3, !1), L = s(e, "jelly", 3, !1), A = s(e, "glow", 3, !1), k = s(e, "reduceMotion", 3, !1), f = s(e, "label", 3, ""), B = s(e, "class", 3, ""), $ = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "options",
    "value",
    "placeholder",
    "disabled",
    "size",
    "variant",
    "blur",
    "animate",
    "liquid",
    "magnetic",
    "jelly",
    "glow",
    "reduceMotion",
    "label",
    "aria-label",
    "class",
    "onValueChange"
  ]), y = /* @__PURE__ */ Se(!1), T = /* @__PURE__ */ Se(void 0), F = /* @__PURE__ */ Se(void 0), H = /* @__PURE__ */ Se(-1);
  const j = `select-${Math.random().toString(36).substr(2, 9)}`, q = f() ? `${j}-label` : void 0, O = `${j}-listbox`, I = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
  }, G = {
    default: "bg-white/5 border border-white/10 text-white",
    glass: "glass-subtle border border-white/20 text-white",
    terminal: "terminal text-green-300",
    liquid: "bg-gradient-to-r from-white/5 to-white/15 border border-white/20 text-white backdrop-blur-md"
  }, U = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, R = /* @__PURE__ */ Ee(() => a().find((Z) => Z.value === n())), C = V("relative flex items-center justify-between rounded-brand-md cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "transition-all duration-200", I[c()], G[g()], g() === "glass" && U[w()], h() && "backdrop-blur-md hover:backdrop-blur-lg", A() && "focus:shadow-lg focus:shadow-brand-primary/20", L() && !d() && "hover:scale-105 active:scale-95", d() && "opacity-50 cursor-not-allowed", B()), _ = V("absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg", "max-h-60 overflow-auto", G[g()], g() === "glass" && `${U[w()]} border border-white/20`);
  function x(Z) {
    if (!d())
      switch (Z.key) {
        case "Enter":
        case " ":
          Z.preventDefault(), t(y) && t(H) >= 0 ? m(a()[t(H)]) : W();
          break;
        case "Escape":
          t(y) && (Z.preventDefault(), E());
          break;
        case "ArrowDown":
          Z.preventDefault(), t(y) ? S(1) : X();
          break;
        case "ArrowUp":
          Z.preventDefault(), t(y) ? S(-1) : X();
          break;
        case "Home":
          t(y) && (Z.preventDefault(), Y(H, 0));
          break;
        case "End":
          t(y) && (Z.preventDefault(), Y(H, a().length - 1));
          break;
      }
  }
  function S(Z) {
    const ie = a().filter((de) => !de.disabled);
    if (ie.length === 0) return;
    let ne = t(H) + Z;
    ne < 0 ? ne = ie.length - 1 : ne >= ie.length && (ne = 0), Y(H, a().findIndex((de) => de === ie[ne]), !0);
  }
  function W() {
    d() || (Y(y, !t(y)), t(y) && Y(
      H,
      n() ? a().findIndex((Z) => Z.value === n()) : -1,
      !0
    ));
  }
  function X() {
    d() || (Y(y, !0), Y(
      H,
      n() ? a().findIndex((Z) => Z.value === n()) : -1,
      !0
    ));
  }
  function E() {
    Y(y, !1), Y(H, -1);
  }
  function m(Z) {
    Z.disabled || (n(Z.value), e.onValueChange?.(Z.value), E());
  }
  function p(Z) {
    t(T) && !t(T).contains(Z.target) && E();
  }
  xt(() => {
    if (t(y))
      return document.addEventListener("click", p), () => document.removeEventListener("click", p);
  }), xt(() => {
    Jt("Select");
  });
  var oe = Pc(), ce = ke(oe);
  {
    var ve = (Z) => {
      var ie = Tc(), ne = i(ie);
      M(() => {
        Ce(ie, "id", q), Ce(ie, "for", j), re(ne, f());
      }), o(Z, ie);
    };
    b(ce, (Z) => {
      f() && Z(ve);
    });
  }
  var be = u(ce, 2);
  Qe(
    be,
    () => ({
      id: j,
      class: C,
      role: "combobox",
      "aria-expanded": t(y),
      "aria-haspopup": "listbox",
      "aria-labelledby": q || e["aria-label"],
      "aria-activedescendant": t(H) > -1 ? `${j}-option-${t(H)}` : void 0,
      tabindex: d() ? -1 : 0,
      onkeydown: x,
      onclick: W,
      ...$
    }),
    void 0,
    void 0,
    "svelte-gc8g7h"
  );
  var te = i(be), K = i(te), ae = u(te, 2);
  let z;
  at(be, (Z) => Y(T, Z), () => t(T)), qe(be, (Z, ie) => bt?.(Z, ie), () => (P() || L()) && !d() && !k() ? {
    strength: P() ? 0.1 : 0.08,
    distance: P() ? 40 : 20
  } : void 0);
  var ee = u(be, 2);
  {
    var J = (Z) => {
      var ie = Ic();
      Ye(ie, 23, a, (ne) => ne.value, (ne, de, ge) => {
        var se = zc();
        se.__click = [Mc, m, de], se.__keydown = [Ac, m, de];
        var ue = i(se);
        M(
          (le) => {
            Ce(se, "id", `${j}-option-${t(ge)}`), D(se, 1, le, "svelte-gc8g7h"), Ce(se, "aria-selected", n() === t(de).value), Ce(se, "aria-disabled", t(de).disabled), re(ue, t(de).label);
          },
          [
            () => Q(V("px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10", t(H) === t(ge) && "bg-white/20", t(de).disabled && "opacity-50 cursor-not-allowed"))
          ]
        ), Ot("mouseenter", se, () => !t(de).disabled && Y(H, t(ge), !0)), o(ne, se);
      }), at(ie, (ne) => Y(F, ne), () => t(F)), M(() => {
        D(ie, 1, Q(_), "svelte-gc8g7h"), Ce(ie, "id", O), Ce(ie, "aria-labelledby", q || e["aria-label"]);
      }), nt(1, ie, () => gt, () => ({
        direction: "down",
        distance: 10,
        duration: N() && !k() ? 150 : 0
      })), nt(2, ie, () => gt, () => ({
        direction: "up",
        distance: 10,
        duration: N() && !k() ? 100 : 0
      })), o(Z, ie);
    };
    b(ee, (Z) => {
      t(y) && Z(J);
    });
  }
  M(
    (Z) => {
      re(K, t(R)?.label || l()), z = D(ae, 0, "w-4 h-4 ml-2 transition-transform duration-200 svelte-gc8g7h", null, z, Z);
    },
    [() => ({ "rotate-180": t(y) })]
  ), o(r, oe), Ze();
}
ut(["click", "keydown"]);
function Dc(r, e, a, n, l, d, c) {
  if (!e())
    switch (r.key) {
      case "Enter":
        r.preventDefault(), t(a) && t(n) >= 0 && l()[t(n)] ? d(l()[t(n)]) : t(a) || c();
        break;
      case "Escape":
        t(a) && (Y(a, !1), r.stopPropagation());
        break;
      case "ArrowDown":
        r.preventDefault(), t(a) ? Y(n, Math.min(t(n) + 1, l().length - 1), !0) : c();
        break;
      case "ArrowUp":
        r.preventDefault(), t(a) && Y(n, Math.max(t(n) - 1, -1), !0);
        break;
      case "Tab":
        t(a) && Y(a, !1);
        break;
    }
}
var jc = (
  // Reset highlighted index when options change
  // Reset highlight when filtered set changes
  (r, e, a) => {
    r.stopPropagation(), e(t(a).value);
  }
), Rc = /* @__PURE__ */ v('<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md"> <button class="hover:text-red-300"><!></button></span>'), Nc = /* @__PURE__ */ v('<span class="text-xs opacity-70"> </span>'), qc = /* @__PURE__ */ v('<div class="flex flex-wrap gap-1"><!> <!></div>'), Oc = /* @__PURE__ */ v("<span> </span>"), Bc = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>'), Fc = (r, e) => {
  r.stopPropagation(), e();
}, Hc = /* @__PURE__ */ v('<button class="p-1 hover:bg-white/10 rounded transition-colors"><!></button>'), Vc = /* @__PURE__ */ v('<div class="p-2 border-b border-white/10"><div class="relative"><!> <input placeholder="Search options..." autocomplete="off"/></div></div>'), Gc = /* @__PURE__ */ v("<div> </div>"), Uc = /* @__PURE__ */ v('<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5"> </div>'), Yc = (r, e, a) => e(t(a)), Wc = (r, e, a) => r.key === "Enter" && e(t(a)), Xc = /* @__PURE__ */ v('<div class="text-xs opacity-60 mt-0.5"> </div>'), Kc = /* @__PURE__ */ v("<div><!></div>"), Zc = /* @__PURE__ */ v('<div role="option"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div>'), Qc = /* @__PURE__ */ v("<!> <!>", 1), Jc = /* @__PURE__ */ v('<div><!> <div class="overflow-y-auto max-h-48 svelte-s2atad" role="listbox"><!></div></div>'), $c = /* @__PURE__ */ v('<p class="text-red-400 text-sm mt-1" role="alert"> </p>'), ev = /* @__PURE__ */ v('<div><div role="combobox" aria-haspopup="listbox"><div class="flex-1 truncate"><!></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!></div>');
const tv = {
  hash: "svelte-s2atad",
  code: `
    /* Custom scrollbar for dropdown */.overflow-y-auto.svelte-s2atad {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-s2atad::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-s2atad::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-s2atad::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-s2atad::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}`
};
function vp(r, e) {
  Ke(e, !0), Je(r, tv);
  let a = s(e, "value", 15), n = s(e, "placeholder", 3, "Select an option..."), l = s(e, "multiple", 3, !1), d = s(e, "searchable", 3, !1), c = s(e, "clearable", 3, !1), g = s(e, "disabled", 3, !1), w = s(e, "loading", 3, !1), N = s(e, "size", 3, "md"), h = s(e, "variant", 3, "glass");
  s(e, "createOption", 3, !1), s(e, "virtualScroll", 3, !1);
  let P = s(e, "closeOnSelect", 3, !0), L = s(e, "class", 3, ""), A = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "options",
    "value",
    "placeholder",
    "multiple",
    "searchable",
    "clearable",
    "disabled",
    "loading",
    "error",
    "size",
    "variant",
    "maxSelections",
    "groupBy",
    "createOption",
    "virtualScroll",
    "closeOnSelect",
    "class"
  ]);
  const k = zt();
  let f = /* @__PURE__ */ Se(!1), B = /* @__PURE__ */ Se(""), $ = /* @__PURE__ */ Se(null), y = /* @__PURE__ */ Se(null), T = /* @__PURE__ */ Se(null), F = /* @__PURE__ */ Se(-1);
  const H = `select-${Math.random().toString(36).substr(2, 9)}`, j = /* @__PURE__ */ Ee(() => () => a() ? Array.isArray(a()) ? a() : [a()] : []);
  function q() {
    return t(j)();
  }
  const O = /* @__PURE__ */ Ee(() => () => {
    if (!t(B).trim()) return e.options;
    const ue = t(B).toLowerCase();
    return e.options.filter((le) => le.label.toLowerCase().includes(ue) || le.description?.toLowerCase().includes(ue));
  });
  function I() {
    return t(O)();
  }
  const G = /* @__PURE__ */ Ee(() => () => {
    if (!e.groupBy) return { "": t(O)() };
    const ue = {};
    return I().forEach((le) => {
      const fe = le.group || "";
      ue[fe] || (ue[fe] = []), ue[fe].push(le);
    }), ue;
  });
  function U() {
    return t(G)();
  }
  const R = /* @__PURE__ */ Ee(() => () => q().length ? l() ? q().length === 1 ? e.options.find((fe) => fe.value === q()[0])?.label || "" : `${q().length} selected` : e.options.find((le) => le.value === q()[0])?.label || "" : n());
  function C() {
    return t(R)();
  }
  const _ = {
    sm: {
      trigger: "h-8 px-3 text-sm",
      dropdown: "text-sm",
      option: "px-3 py-1.5"
    },
    md: {
      trigger: "h-10 px-4 text-base",
      dropdown: "text-base",
      option: "px-4 py-2"
    },
    lg: {
      trigger: "h-12 px-5 text-lg",
      dropdown: "text-lg",
      option: "px-5 py-2.5"
    }
  }, x = {
    glass: {
      trigger: "bg-white/10 border-white/20 text-white backdrop-blur-md",
      dropdown: "bg-black/20 border-white/10 backdrop-blur-xl",
      option: "text-white/90 hover:bg-white/10",
      optionSelected: "bg-blue-500/30 text-white",
      search: "bg-white/5 border-white/10 text-white placeholder-white/50"
    },
    terminal: {
      trigger: "bg-terminal-bg border-terminal-green/40 text-terminal-green",
      dropdown: "bg-black/90 border-terminal-green/30",
      option: "text-terminal-green hover:bg-terminal-green/20",
      optionSelected: "bg-terminal-green/40 text-terminal-green",
      search: "bg-black/50 border-terminal-green/30 text-terminal-green placeholder-terminal-green/50"
    },
    liquid: {
      trigger: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white",
      dropdown: "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10",
      option: "text-white hover:bg-white/10",
      optionSelected: "bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white",
      search: "bg-white/5 border-white/10 text-white placeholder-white/50"
    }
  }, S = _[N()], W = x[h()];
  function X() {
    g() || (Y(f, !t(f)), t(f) && d() && setTimeout(() => t(T)?.focus(), 0));
  }
  function E(ue) {
    if (!ue.disabled) {
      if (l()) {
        const le = q();
        if (le.includes(ue.value))
          a(le.filter((pe) => pe !== ue.value));
        else {
          if (e.maxSelections && le.length >= e.maxSelections) return;
          a([...le, ue.value]);
        }
      } else
        a(ue.value), P() && Y(f, !1);
      k("change", { value: a(), option: ue });
    }
  }
  function m() {
    a(l() ? [] : void 0), k("clear");
  }
  function p(ue) {
    if (!l()) return;
    const le = q();
    a(le.filter((fe) => fe !== ue));
  }
  function oe(ue) {
    t($) && !t($).contains(ue.target) && Y(f, !1);
  }
  yt(() => (document.addEventListener("click", oe), () => document.removeEventListener("click", oe))), xt(() => {
    I() && Y(F, -1);
  });
  var ce = ev();
  Qe(ce, (ue) => ({ class: ue, ...A }), [() => V("relative w-full", L())], void 0, "svelte-s2atad");
  var ve = i(ce);
  ve.__click = X, ve.__keydown = [
    Dc,
    g,
    f,
    F,
    I,
    E,
    X
  ];
  var be = i(ve), te = i(be);
  {
    var K = (ue) => {
      var le = qc(), fe = i(le);
      Ye(fe, 16, () => q().slice(0, 2), (Ne) => Ne, (Ne, He) => {
        const Be = /* @__PURE__ */ Ee(() => e.options.find((Re) => Re.value === He));
        var _e = Ae(), xe = ke(_e);
        {
          var Ie = (Re) => {
            var me = Rc(), we = i(me), Me = u(we);
            Me.__click = [jc, p, Be];
            var Le = i(Me);
            va(Le, { size: 12 }), M(() => re(we, `${t(Be).label ?? ""} `)), o(Re, me);
          };
          b(xe, (Re) => {
            t(Be) && Re(Ie);
          });
        }
        o(Ne, _e);
      });
      var pe = u(fe, 2);
      {
        var Te = (Ne) => {
          var He = Nc(), Be = i(He);
          M((_e) => re(Be, `+${_e ?? ""} more`), [() => q().length - 2]), o(Ne, He);
        };
        b(pe, (Ne) => {
          q().length > 2 && Ne(Te);
        });
      }
      o(ue, le);
    }, ae = (ue) => {
      var le = Oc(), fe = i(le);
      M(
        (pe, Te) => {
          D(le, 1, pe, "svelte-s2atad"), re(fe, Te);
        },
        [
          () => Q(V(!t(j).length && "opacity-60")),
          C
        ]
      ), o(ue, le);
    };
    b(te, (ue) => {
      l() && q().length > 1 ? ue(K) : ue(ae, !1);
    });
  }
  var z = u(be, 2), ee = i(z);
  {
    var J = (ue) => {
      var le = Bc();
      o(ue, le);
    }, Z = (ue) => {
      var le = Ae(), fe = ke(le);
      {
        var pe = (Te) => {
          var Ne = Hc();
          Ne.__click = [Fc, m];
          var He = i(Ne);
          va(He, { size: 16 }), o(Te, Ne);
        };
        b(
          fe,
          (Te) => {
            c() && q().length > 0 && Te(pe);
          },
          !0
        );
      }
      o(ue, le);
    };
    b(ee, (ue) => {
      w() ? ue(J) : ue(Z, !1);
    });
  }
  var ie = u(ee, 2);
  {
    let ue = /* @__PURE__ */ Ee(() => V("transition-transform duration-200", t(f) && "rotate-180"));
    Xr(ie, {
      size: 16,
      get class() {
        return t(ue);
      }
    });
  }
  var ne = u(ve, 2);
  {
    var de = (ue) => {
      var le = Jc(), fe = i(le);
      {
        var pe = (_e) => {
          var xe = Vc(), Ie = i(xe), Re = i(Ie);
          Qn(Re, {
            size: 16,
            class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
          });
          var me = u(Re, 2);
          at(me, (we) => Y(T, we), () => t(T)), M((we) => D(me, 1, we, "svelte-s2atad"), [
            () => Q(V("w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50", W.search))
          ]), or(me, () => t(B), (we) => Y(B, we)), o(_e, xe);
        };
        b(fe, (_e) => {
          d() && _e(pe);
        });
      }
      var Te = u(fe, 2), Ne = i(Te);
      {
        var He = (_e) => {
          var xe = Gc(), Ie = i(xe);
          M(
            (Re) => {
              D(xe, 1, Re, "svelte-s2atad"), re(Ie, t(B) ? "No options found" : "No options available");
            },
            [
              () => Q(V("text-center py-4 opacity-60", S.option))
            ]
          ), o(_e, xe);
        }, Be = (_e) => {
          var xe = Ae(), Ie = ke(xe);
          Ye(Ie, 17, () => Object.entries(U()), ([Re, me]) => Re, (Re, me) => {
            var we = /* @__PURE__ */ Ee(() => Kr(t(me), 2));
            let Me = () => t(we)[0], Le = () => t(we)[1];
            var ye = Qc(), he = ke(ye);
            {
              var ze = (Oe) => {
                var Ge = Uc(), Ue = i(Ge);
                M(() => re(Ue, Me())), o(Oe, Ge);
              };
              b(he, (Oe) => {
                Me() && Object.keys(t(G)).length > 1 && Oe(ze);
              });
            }
            var De = u(he, 2);
            Ye(De, 19, Le, (Oe) => Oe.value, (Oe, Ge) => {
              const Ue = /* @__PURE__ */ Ee(() => q().includes(t(Ge).value)), tt = /* @__PURE__ */ Ee(() => I().indexOf(t(Ge)) === t(F));
              var et = Zc();
              et.__click = [Yc, E, Ge], et.__keydown = [Wc, E, Ge];
              var rt = i(et), $e = i(rt), Ve = i($e), je = u($e, 2);
              {
                var Fe = (mt) => {
                  var vt = Xc(), dt = i(vt);
                  M(() => re(dt, t(Ge).description)), o(mt, vt);
                };
                b(je, (mt) => {
                  t(Ge).description && mt(Fe);
                });
              }
              var We = u(rt, 2);
              {
                var ot = (mt) => {
                  var vt = Kc(), dt = i(vt);
                  {
                    var ht = (Ct) => {
                      Xa(Ct, { size: 12, class: "text-white" });
                    };
                    b(dt, (Ct) => {
                      t(Ue) && Ct(ht);
                    });
                  }
                  M((Ct) => D(vt, 1, Ct, "svelte-s2atad"), [
                    () => Q(V("w-4 h-4 border rounded flex items-center justify-center", t(Ue) ? "bg-blue-500 border-blue-500" : "border-white/20"))
                  ]), o(mt, vt);
                }, wt = (mt) => {
                  var vt = Ae(), dt = ke(vt);
                  {
                    var ht = (Ct) => {
                      Xa(Ct, { size: 16, class: "text-blue-400" });
                    };
                    b(
                      dt,
                      (Ct) => {
                        t(Ue) && Ct(ht);
                      },
                      !0
                    );
                  }
                  o(mt, vt);
                };
                b(We, (mt) => {
                  l() ? mt(ot) : mt(wt, !1);
                });
              }
              M(
                (mt) => {
                  D(et, 1, mt, "svelte-s2atad"), Ce(et, "aria-selected", t(Ue)), Ce(et, "tabindex", t(Ge).disabled ? -1 : 0), re(Ve, t(Ge).label);
                },
                [
                  () => Q(V(
                    "flex items-center justify-between cursor-pointer transition-colors",
                    S.option,
                    t(Ge).disabled ? "opacity-50 cursor-not-allowed" : W.option,
                    t(Ue) && W.optionSelected,
                    t(tt) && "bg-white/5"
                  ))
                ]
              ), o(Oe, et);
            }), o(Re, ye);
          }), o(_e, xe);
        };
        b(Ne, (_e) => {
          I().length === 0 ? _e(He) : _e(Be, !1);
        });
      }
      at(le, (_e) => Y(y, _e), () => t(y)), qe(le, (_e, xe) => kt?.(_e, xe), () => ({ intensity: "medium" })), M(
        (_e) => {
          D(le, 1, _e, "svelte-s2atad"), Ce(Te, "id", `${H}-listbox`);
        },
        [
          () => Q(V("absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden", W.dropdown, S.dropdown))
        ]
      ), o(ue, le);
    };
    b(ne, (ue) => {
      t(f) && ue(de);
    });
  }
  var ge = u(ne, 2);
  {
    var se = (ue) => {
      var le = $c(), fe = i(le);
      M(() => re(fe, e.error)), o(ue, le);
    };
    b(ge, (ue) => {
      e.error && ue(se);
    });
  }
  at(ce, (ue) => Y($, ue), () => t($)), M(
    (ue) => {
      D(ve, 1, ue, "svelte-s2atad"), Ce(ve, "tabindex", g() ? -1 : 0), Ce(ve, "aria-expanded", t(f)), Ce(ve, "aria-controls", `${H}-listbox`), Ce(ve, "aria-labelledby", H);
    },
    [
      () => Q(V("relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer", S.trigger, W.trigger, g() && "opacity-50 cursor-not-allowed", e.error && "border-red-500/50", t(f) && "ring-2 ring-blue-400/50"))
    ]
  ), o(r, ce), Ze();
}
ut(["click", "keydown"]);
var rv = /* @__PURE__ */ v("<div></div>"), av = /* @__PURE__ */ v("<div><!></div>"), nv = /* @__PURE__ */ v("<div></div>"), ov = /* @__PURE__ */ v("<div></div>"), iv = /* @__PURE__ */ v("<div><!></div>");
const lv = {
  hash: "svelte-1jcbe1x",
  code: `
	@keyframes svelte-1jcbe1x-shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}.animate-shimmer {
		animation: svelte-1jcbe1x-shimmer linear infinite;}`
};
function up(r, e) {
  Ke(e, !0), Je(r, lv);
  const a = s(e, "variant", 3, "glass"), n = s(e, "type", 3, "text"), l = s(e, "lines", 3, 3), d = s(e, "animated", 3, !0), c = s(e, "glow", 3, !1), g = s(e, "speed", 3, "normal"), w = s(e, "class", 3, ""), N = s(e, "rounded", 3, !0), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "type",
    "lines",
    "animated",
    "glow",
    "speed",
    "class",
    "width",
    "height",
    "rounded"
  ]), P = {
    glass: {
      bg: "bg-gradient-to-r from-white/5 via-white/10 to-white/5",
      shimmer: "from-transparent via-white/20 to-transparent",
      border: "border-white/10",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.2)]"
    },
    terminal: {
      bg: "bg-gradient-to-r from-green-400/10 via-green-400/20 to-green-400/10",
      shimmer: "from-transparent via-green-400/30 to-transparent",
      border: "border-green-400/20",
      glow: "shadow-[0_0_15px_rgba(74,222,128,0.4)]"
    },
    liquid: {
      bg: "bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-blue-500/10",
      shimmer: "from-transparent via-white/30 to-transparent",
      border: "border-white/20",
      glow: "shadow-[0_0_25px_rgba(139,92,246,0.3)]"
    },
    neon: {
      bg: "bg-gradient-to-r from-pink-500/10 via-pink-500/20 to-pink-500/10",
      shimmer: "from-transparent via-pink-500/40 to-transparent",
      border: "border-pink-500/30",
      glow: "shadow-[0_0_20px_rgba(236,72,153,0.5)]"
    }
  }, L = {
    slow: "duration-[3s]",
    normal: "duration-[2s]",
    fast: "duration-[1s]"
  }, A = {
    text: { width: "w-full", height: "h-4", spacing: "space-y-3" },
    avatar: { width: "w-12", height: "h-12", rounded: "rounded-full" },
    card: { width: "w-full", height: "h-48", rounded: "rounded-2xl" },
    button: { width: "w-24", height: "h-10", rounded: "rounded-xl" },
    image: { width: "w-full", height: "h-64", rounded: "rounded-2xl" },
    paragraph: { width: "w-full", height: "h-3", spacing: "space-y-2" }
  }, k = P[a()], f = A[n()], B = L[g()], $ = /* @__PURE__ */ Ee(() => n() === "text" || n() === "paragraph" ? Array.from({ length: l() }, (j, q) => q === l() - 1 ? "60%" : `${85 + Math.floor(Math.random() * 15)}%`) : []);
  var y = Ae(), T = ke(y);
  {
    var F = (j) => {
      var q = nv();
      Qe(q, (O) => ({ class: O, ...h }), [() => V(f.spacing, w())], void 0, "svelte-1jcbe1x"), Ye(q, 21, () => t($), At, (O, I, G) => {
        var U = av(), R = i(U);
        {
          var C = (_) => {
            var x = rv();
            M((S) => D(x, 1, S, "svelte-1jcbe1x"), [
              () => Q(V("absolute inset-0 bg-gradient-to-r", k.shimmer, B, "animate-shimmer"))
            ]), o(_, x);
          };
          b(R, (_) => {
            d() && _(C);
          });
        }
        qe(U, (_, x) => Rt?.(_, x), () => ({
          enabled: d() && a() === "liquid",
          intensity: 0.02,
          speed: 3e3
        })), M(
          (_) => {
            D(U, 1, _, "svelte-1jcbe1x"), pt(U, `width: ${(e.width || t(I)) ?? ""}`);
          },
          [
            () => Q(V("relative overflow-hidden backdrop-blur-xl border", f.height, k.bg, k.border, c() && k.glow, N() && "rounded-lg", d() && "transform-gpu will-change-transform"))
          ]
        ), nt(3, U, () => gt, () => ({ duration: 200, delay: G * 50 })), o(O, U);
      }), o(j, q);
    }, H = (j) => {
      var q = iv();
      Qe(
        q,
        (G, U) => ({ class: G, ...h, [yr]: U }),
        [
          () => V("relative overflow-hidden backdrop-blur-xl border", f.width, f.height, k.bg, k.border, f.rounded || N() && "rounded-lg", c() && k.glow, d() && "transform-gpu will-change-transform", w()),
          () => ({ width: e.width, height: e.height })
        ],
        void 0,
        "svelte-1jcbe1x"
      );
      var O = i(q);
      {
        var I = (G) => {
          var U = ov();
          M((R) => D(U, 1, R, "svelte-1jcbe1x"), [
            () => Q(V("absolute inset-0 bg-gradient-to-r", k.shimmer, B, "animate-shimmer"))
          ]), o(G, U);
        };
        b(O, (G) => {
          d() && G(I);
        });
      }
      qe(q, (G, U) => Rt?.(G, U), () => ({
        enabled: d() && a() === "liquid",
        intensity: 0.03,
        speed: 3e3
      })), nt(3, q, () => gt, () => ({ duration: 200 })), o(j, q);
    };
    b(T, (j) => {
      n() === "text" || n() === "paragraph" ? j(F) : j(H, !1);
    });
  }
  o(r, y), Ze();
}
function sv(r, e, a, n) {
  if (e()) return;
  Y(a, !0), n(r);
  const l = (c) => n(c), d = () => {
    Y(a, !1), document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", d);
  };
  document.addEventListener("mousemove", l), document.addEventListener("mouseup", d);
}
var dv = /* @__PURE__ */ v('<span class="ml-2 text-white/70 svelte-wpw1ph"> </span>'), cv = /* @__PURE__ */ v("<label> <!></label>"), vv = /* @__PURE__ */ v('<div class="absolute top-1/2 w-1 h-1 bg-white/50 rounded-full -translate-y-1/2 -translate-x-1/2 svelte-wpw1ph"></div>'), uv = /* @__PURE__ */ v('<div class="flex justify-center mt-2 svelte-wpw1ph"><span> </span></div>'), fv = /* @__PURE__ */ v('<div class="w-full space-y-2 svelte-wpw1ph"><!> <div><div role="slider"><div></div> <div></div> <!></div> <!></div></div>');
const bv = {
  hash: "svelte-wpw1ph",
  code: `div[role='slider'].svelte-wpw1ph {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-wpw1ph {transition:none;
			animation: none;will-change:auto;}
	}`
};
function fp(r, e) {
  Ke(e, !0), Je(r, bv);
  let a = s(e, "value", 7, 50), n = s(e, "min", 3, 0), l = s(e, "max", 3, 100), d = s(e, "step", 3, 1), c = s(e, "disabled", 3, !1), g = s(e, "size", 3, "md"), w = s(e, "variant", 3, "glass"), N = s(e, "blur", 3, "md"), h = s(e, "showValue", 3, !1), P = s(e, "showMarks", 3, !1), L = s(e, "marks", 19, () => []), A = s(e, "animate", 3, !0), k = s(e, "reduceMotion", 3, !1);
  s(e, "class", 3, "");
  let f = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "value",
    "min",
    "max",
    "step",
    "disabled",
    "size",
    "variant",
    "blur",
    "showValue",
    "showMarks",
    "marks",
    "animate",
    "reduceMotion",
    "label",
    "class",
    "onValueChange"
  ]), B = /* @__PURE__ */ Se(void 0), $ = /* @__PURE__ */ Se(void 0), y = /* @__PURE__ */ Se(!1), T = /* @__PURE__ */ Se(!1);
  const F = `slider-${Math.random().toString(36).substr(2, 9)}`, H = {
    sm: { track: "h-1", thumb: "w-4 h-4", value: "text-xs" },
    md: { track: "h-1.5", thumb: "w-5 h-5", value: "text-sm" },
    lg: { track: "h-2", thumb: "w-6 h-6", value: "text-base" }
  }, j = {
    default: {
      track: "bg-white/10",
      fill: "bg-blue-500",
      thumb: "bg-white border-2 border-blue-500 shadow-lg"
    },
    glass: {
      track: "glass-subtle",
      fill: "bg-blue-500/80 backdrop-blur-sm",
      thumb: "bg-white/90 border-2 border-blue-500/60 backdrop-blur-sm shadow-lg"
    },
    terminal: {
      track: "bg-terminal-green/20",
      fill: "bg-terminal-green",
      thumb: "bg-terminal-green border-2 border-terminal-green shadow-lg"
    }
  }, q = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, O = /* @__PURE__ */ Ee(() => (a() - n()) / (l() - n()) * 100), I = V("relative w-full rounded-full cursor-pointer", H[g()].track, j[w()].track, w() === "glass" && q[N()], c() && "opacity-50 cursor-not-allowed"), G = V("absolute top-0 left-0 h-full rounded-full transition-all duration-200", j[w()].fill), U = /* @__PURE__ */ Ee(() => V("absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2", "hover:scale-110 active:scale-95", H[g()].thumb, j[w()].thumb, c() && "cursor-not-allowed hover:scale-100 active:scale-100", t(y) && "scale-110", t(T) && "ring-2 ring-blue-400/50"));
  function R(z) {
    if (c()) return;
    let ee = a();
    const J = d() || 1, Z = (l() - n()) / 10;
    switch (z.key) {
      case "ArrowRight":
      case "ArrowUp":
        z.preventDefault(), ee = Math.min(l(), a() + J);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        z.preventDefault(), ee = Math.max(n(), a() - J);
        break;
      case "PageUp":
        z.preventDefault(), ee = Math.min(l(), a() + Z);
        break;
      case "PageDown":
        z.preventDefault(), ee = Math.max(n(), a() - Z);
        break;
      case "Home":
        z.preventDefault(), ee = n();
        break;
      case "End":
        z.preventDefault(), ee = l();
        break;
    }
    ee !== a() && (a(ee), e.onValueChange?.(ee));
  }
  function C(z) {
    if (!t($) || c()) return;
    const ee = t($).getBoundingClientRect(), J = z.clientX - ee.left, Z = Math.max(0, Math.min(100, J / ee.width * 100)), ie = n() + Z / 100 * (l() - n()), ne = d() ? Math.round(ie / d()) * d() : ie, de = Math.max(n(), Math.min(l(), ne));
    de !== a() && (a(de), e.onValueChange?.(de));
  }
  function _() {
    Y(T, !0);
  }
  function x() {
    Y(T, !1);
  }
  xt(() => {
    Jt("Slider", "medium");
  });
  var S = fv(), W = i(S);
  {
    var X = (z) => {
      var ee = cv();
      let J;
      var Z = i(ee), ie = u(Z);
      {
        var ne = (de) => {
          var ge = dv(), se = i(ge);
          M(() => re(se, `(${a() ?? ""})`)), o(de, ge);
        };
        b(ie, (de) => {
          h() && de(ne);
        });
      }
      M(
        (de) => {
          Ce(ee, "id", `slider-label-${F}`), Ce(ee, "for", F), J = D(ee, 1, "block text-sm font-medium text-white svelte-wpw1ph", null, J, de), re(Z, `${e.label ?? ""} `);
        },
        [() => ({ "opacity-50": c() })]
      ), o(z, ee);
    };
    b(W, (z) => {
      e.label && z(X);
    });
  }
  var E = u(W, 2);
  Qe(E, () => ({ class: "relative w-full py-2", ...f }), void 0, void 0, "svelte-wpw1ph");
  var m = i(E);
  m.__mousedown = [sv, c, y, C], m.__keydown = R;
  var p = i(m);
  let oe;
  var ce = u(p, 2);
  let ve;
  qe(ce, (z, ee) => Wt?.(z, ee), () => A() && !k() && t(y) ? { scale: 1.1, duration: 100 } : void 0);
  var be = u(ce, 2);
  {
    var te = (z) => {
      var ee = Ae(), J = ke(ee);
      Ye(J, 17, L, At, (Z, ie) => {
        const ne = /* @__PURE__ */ Ee(() => (t(ie) - n()) / (l() - n()) * 100);
        var de = vv();
        let ge;
        M((se) => ge = pt(de, "", ge, se), [() => ({ left: `${t(ne) ?? ""}%` })]), o(Z, de);
      }), o(z, ee);
    };
    b(be, (z) => {
      P() && L().length > 0 && z(te);
    });
  }
  at(m, (z) => Y($, z), () => t($));
  var K = u(m, 2);
  {
    var ae = (z) => {
      var ee = uv(), J = i(ee), Z = i(J);
      M(
        (ie) => {
          D(J, 1, ie, "svelte-wpw1ph"), re(Z, a());
        },
        [
          () => Q(V("font-medium text-white/80", H[g()].value))
        ]
      ), o(z, ee);
    };
    b(K, (z) => {
      h() && z(ae);
    });
  }
  at(E, (z) => Y(B, z), () => t(B)), M(
    (z, ee) => {
      Ce(m, "id", F), D(m, 1, Q(I), "svelte-wpw1ph"), Ce(m, "aria-valuemin", n()), Ce(m, "aria-valuemax", l()), Ce(m, "aria-valuenow", a()), Ce(m, "aria-labelledby", e.label ? `slider-label-${F}` : void 0), Ce(m, "aria-label", e.label ? void 0 : "Slider"), Ce(m, "tabindex", c() ? -1 : 0), D(p, 1, Q(G), "svelte-wpw1ph"), oe = pt(p, "", oe, z), D(ce, 1, Q(t(U)), "svelte-wpw1ph"), ve = pt(ce, "", ve, ee);
    },
    [
      () => ({ width: `${t(O) ?? ""}%` }),
      () => ({
        left: `${t(O) ?? ""}%`,
        transform: "translateX(-50%) translateY(-50%)"
      })
    ]
  ), Ot("focus", m, _), Ot("blur", m, x), o(r, S), Ze();
}
ut(["mousedown", "keydown"]);
var gv = /* @__PURE__ */ v("<label> </label>"), mv = /* @__PURE__ */ v("<p> </p>"), hv = /* @__PURE__ */ v('<div class="flex flex-col"><!> <!></div>'), pv = /* @__PURE__ */ v('<div class="flex items-center gap-3"><button><span></span></button> <!></div>');
const xv = {
  hash: "svelte-ne1gt8",
  code: `button[role='switch'].svelte-ne1gt8 {will-change:transform;}button[role='switch'].svelte-ne1gt8 span:where(.svelte-ne1gt8) {will-change:transform;}

	/* Liquid switch effects */button[role='switch'].svelte-ne1gt8:hover span:where(.svelte-ne1gt8) {box-shadow:0 4px 12px rgba(255, 255, 255, 0.2);}button[role='switch'][aria-checked='true'].svelte-ne1gt8 span:where(.svelte-ne1gt8) {transform:translateX(100%) scale(1.05);}

	/* Enhanced liquid variant styling */button.svelte-ne1gt8.backdrop-blur-md:hover {-webkit-backdrop-filter:blur(16px) saturate(150%);backdrop-filter:blur(16px) saturate(150%);}

	/* Jelly physics */button.svelte-ne1gt8.jelly-hover:active span:where(.svelte-ne1gt8) {transform:scale(0.9);transition:transform 100ms cubic-bezier(0.34, 1.56, 0.64, 1);}

	/* Magnetic attraction */button.svelte-ne1gt8.magnetic:hover {transform:translateY(-1px);box-shadow:0 6px 20px rgba(59, 130, 246, 0.25);}

	/* Glow effect */button[aria-checked='true'].svelte-ne1gt8.shadow-lg {
		animation: svelte-ne1gt8-glow-pulse 2s ease-in-out infinite alternate;}

	@keyframes svelte-ne1gt8-glow-pulse {
		from {
			box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
		}
		to {
			box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
		}
	}

	@media (prefers-reduced-motion: reduce) {button.svelte-ne1gt8,
		span.svelte-ne1gt8 {transition:none;
			animation: none;will-change:auto;}
	}`
};
function bp(r, e) {
  Ke(e, !0), Je(r, xv);
  let a = s(e, "checked", 7, !1), n = s(e, "disabled", 3, !1), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "blur", 3, "md"), g = s(e, "animate", 3, !0), w = s(e, "liquid", 3, !1), N = s(e, "magnetic", 3, !1), h = s(e, "jelly", 3, !1), P = s(e, "glow", 3, !1), L = s(e, "reduceMotion", 3, !1), A = s(e, "class", 3, ""), k = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "checked",
    "disabled",
    "size",
    "variant",
    "blur",
    "animate",
    "liquid",
    "magnetic",
    "jelly",
    "glow",
    "reduceMotion",
    "label",
    "aria-label",
    "description",
    "class",
    "onCheckedChange"
  ]), f = /* @__PURE__ */ Se(void 0);
  const B = `switch-${Math.random().toString(36).substr(2, 9)}`, $ = e.label ? `${B}-label` : void 0, y = e.description ? `${B}-description` : void 0, T = {
    sm: {
      track: "w-8 h-4",
      thumb: "w-3 h-3",
      translate: "translate-x-4"
    },
    md: {
      track: "w-11 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-5"
    },
    lg: {
      track: "w-14 h-8",
      thumb: "w-6 h-6",
      translate: "translate-x-6"
    }
  }, F = {
    default: {
      track: "bg-white/10 border border-white/20",
      trackChecked: "bg-blue-500/30 border-blue-400/40",
      thumb: "bg-white shadow-lg"
    },
    glass: {
      track: "glass-subtle border border-white/20",
      trackChecked: "glass-medium border-blue-400/40 bg-blue-500/20",
      thumb: "bg-white/90 backdrop-blur-sm shadow-lg"
    },
    terminal: {
      track: "bg-terminal-green/20 border border-terminal-green/40",
      trackChecked: "bg-terminal-green/40 border-terminal-green/60",
      thumb: "bg-terminal-green shadow-lg"
    },
    liquid: {
      track: "bg-gradient-to-r from-white/5 to-white/15 border border-white/20 backdrop-blur-md",
      trackChecked: "bg-gradient-to-r from-blue-500/20 to-purple-500/30 border-blue-400/40",
      thumb: "bg-gradient-to-br from-white to-white/80 shadow-xl"
    }
  }, H = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = V(
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
    T[l()].track,
    a() ? F[d()].trackChecked : F[d()].track,
    d() === "glass" && H[c()],
    w() && "backdrop-blur-md",
    P() && a() && "shadow-lg shadow-blue-400/30",
    n() && "opacity-50 cursor-not-allowed",
    !n() && "cursor-pointer hover:scale-105",
    h() && !n() && "hover:scale-110 active:scale-95",
    A()
  ), q = V("inline-block rounded-full transition-all duration-200 ease-in-out transform", T[l()].thumb, F[d()].thumb, a() ? T[l()].translate : "translate-x-0.5", !L() && "will-change-transform");
  function O() {
    if (n()) return;
    const x = !a();
    a(x), e.onCheckedChange?.(x);
  }
  function I(x) {
    n() || (x.key === "Enter" || x.key === " ") && (x.preventDefault(), O());
  }
  xt(() => {
    Jt("Switch", "small");
  });
  var G = pv(), U = i(G);
  Qe(
    U,
    () => ({
      id: B,
      type: "button",
      role: "switch",
      "aria-checked": a(),
      "aria-labelledby": $,
      "aria-describedby": y,
      "aria-label": e["aria-label"],
      class: j,
      disabled: n(),
      onclick: O,
      onkeydown: I,
      ...k
    }),
    void 0,
    void 0,
    "svelte-ne1gt8"
  );
  var R = i(U);
  at(U, (x) => Y(f, x), () => t(f)), qe(U, (x, S) => Wt?.(x, S), () => g() && !L() ? { scale: 0.95, duration: 100 } : void 0), qe(U, (x, S) => bt?.(x, S), () => N() && !n() && !L() ? { strength: 0.15, distance: 30 } : void 0), qe(U, (x, S) => bt?.(x, S), () => h() && !n() && !L() ? { strength: 0.1 } : void 0);
  var C = u(U, 2);
  {
    var _ = (x) => {
      var S = hv(), W = i(S);
      {
        var X = (p) => {
          var oe = gv();
          let ce;
          var ve = i(oe);
          M(
            (be) => {
              Ce(oe, "id", $), Ce(oe, "for", B), ce = D(oe, 1, "text-sm font-medium text-white cursor-pointer", null, ce, be), re(ve, e.label);
            },
            [() => ({ "opacity-50": n() })]
          ), o(p, oe);
        };
        b(W, (p) => {
          e.label && p(X);
        });
      }
      var E = u(W, 2);
      {
        var m = (p) => {
          var oe = mv();
          let ce;
          var ve = i(oe);
          M(
            (be) => {
              Ce(oe, "id", y), ce = D(oe, 1, "text-xs text-white/70", null, ce, be), re(ve, e.description);
            },
            [() => ({ "opacity-50": n() })]
          ), o(p, oe);
        };
        b(E, (p) => {
          e.description && p(m);
        });
      }
      o(x, S);
    };
    b(C, (x) => {
      (e.label || e.description) && x(_);
    });
  }
  M(() => D(R, 1, Q(q), "svelte-ne1gt8")), o(r, G), Ze();
}
var wv = (r, e, a) => e(t(a)), _v = (r, e, a) => e(r, t(a)), yv = /* @__PURE__ */ v('<button role="tab"> </button>'), kv = /* @__PURE__ */ v('<div class="svelte-pa3tfx"><!></div>'), Cv = /* @__PURE__ */ v('<div class="svelte-pa3tfx"><!></div>'), Sv = /* @__PURE__ */ v('<div><div role="tablist"></div> <div role="tabpanel" tabindex="0"><!></div></div>');
const Ev = {
  hash: "svelte-pa3tfx",
  code: `button[role="tab"].svelte-pa3tfx {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-pa3tfx {transition:none;
            animation: none;will-change:auto;}
    }`
};
function gp(r, e) {
  Ke(e, !0), Je(r, Ev);
  let a = s(e, "tabs", 19, () => []), n = s(e, "activeTab", 23, () => a()[0]?.id || ""), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), c = s(e, "orientation", 3, "horizontal"), g = s(e, "blur", 3, "md"), w = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), h = s(e, "class", 3, ""), P = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "tabs",
    "activeTab",
    "variant",
    "size",
    "orientation",
    "blur",
    "animate",
    "reduceMotion",
    "aria-label",
    "class",
    "panel",
    "onTabChange"
  ]), L;
  const A = `tabs-${Math.random().toString(36).substr(2, 9)}`, k = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }, f = {
    default: {
      list: "bg-white/5 border border-white/10",
      tab: "text-white/70 hover:text-white/90",
      activeTab: "text-white bg-white/10"
    },
    glass: {
      list: "glass-subtle border border-white/20",
      tab: "text-white/70 hover:text-white/90 hover:glass-subtle",
      activeTab: "text-white glass-medium"
    },
    terminal: {
      list: "bg-terminal-green/10 border border-terminal-green/30",
      tab: "text-terminal-green/70 hover:text-terminal-green/90",
      activeTab: "text-terminal-green bg-terminal-green/20"
    },
    bubbleTea: {
      list: "bg-gradient-to-r from-bubble-tea-pink/5 to-bubble-tea-purple/5 border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm",
      tab: "text-bubble-tea-purple/70 hover:text-bubble-tea-purple/90 hover:bg-bubble-tea-purple/10 rounded-bubble-tea-sm",
      activeTab: "text-white bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple rounded-bubble-tea-sm shadow-lg"
    }
  }, B = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, $ = c() === "horizontal", T = V("flex p-1", "tab-radius-md", $ ? "flex-row" : "flex-col min-w-max", f[l()].list, (l() === "glass" || l() === "bubbleTea") && B[g()]), H = V("relative flex-1 transition-all duration-200", "tab-radius-sm", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium whitespace-nowrap cursor-pointer", k[d()], f[l()].tab), j = V(H, f[l()].activeTab), q = V("mt-4 focus:outline-none", $ ? "" : "ml-4");
  function O(E) {
    E.disabled || (n(E.id), e.onTabChange?.(E.id));
  }
  function I(E, m) {
    if (m.disabled) return;
    const p = a().filter((ce) => !ce.disabled), oe = p.findIndex((ce) => ce.id === n());
    switch (E.key) {
      case "Enter":
      case " ":
        E.preventDefault(), O(m);
        break;
      case "ArrowRight":
      case "ArrowDown":
        if ($ ? E.key === "ArrowRight" : E.key === "ArrowDown") {
          E.preventDefault();
          const ce = (oe + 1) % p.length, ve = p[ce];
          O(ve), G(ve.id);
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        if ($ ? E.key === "ArrowLeft" : E.key === "ArrowUp") {
          E.preventDefault();
          const ce = oe === 0 ? p.length - 1 : oe - 1, ve = p[ce];
          O(ve), G(ve.id);
        }
        break;
      case "Home":
        {
          E.preventDefault();
          const ce = p[0];
          O(ce), G(ce.id);
        }
        break;
      case "End":
        {
          E.preventDefault();
          const ce = p[p.length - 1];
          O(ce), G(ce.id);
        }
        break;
    }
  }
  function G(E) {
    L?.querySelector(`[data-tab-id="${E}"]`)?.focus();
  }
  const U = /* @__PURE__ */ Ee(() => a().find((E) => E.id === n())), R = /* @__PURE__ */ Ee(() => e.panel ? e.panel(n()) : null);
  xt(() => {
    Jt("Tabs");
  });
  var C = Sv();
  Qe(C, (E) => ({ class: E, ...P }), [() => V("w-full", $ ? "" : "flex", h())], void 0, "svelte-pa3tfx");
  var _ = i(C);
  Ye(_, 23, a, (E) => E.id, (E, m) => {
    var p = yv();
    let oe;
    p.__click = [wv, O, m], p.__keydown = [_v, I, m];
    var ce = i(p);
    qe(p, (ve, be) => kt?.(ve, be), () => w() && !N() && t(m).id === n() ? { blur: g(), opacity: "medium" } : void 0), M(
      (ve) => {
        Ce(p, "id", `${A}-tab-${t(m).id}`), oe = D(p, 1, Q(t(m).id === n() ? j : H), "svelte-pa3tfx", oe, ve), Ce(p, "tabindex", t(m).id === n() ? 0 : -1), Ce(p, "aria-selected", t(m).id === n()), Ce(p, "aria-controls", `${A}-tabpanel-${t(m).id}`), Ce(p, "aria-disabled", t(m).disabled), Ce(p, "data-tab-id", t(m).id), p.disabled = t(m).disabled, re(ce, t(m).label);
      },
      [
        () => ({
          "opacity-50": t(m).disabled,
          "cursor-not-allowed": t(m).disabled
        })
      ]
    ), o(E, p);
  }), at(_, (E) => L = E, () => L);
  var x = u(_, 2), S = i(x);
  {
    var W = (E) => {
      var m = kv(), p = i(m);
      it(p, () => t(U).content), nt(1, m, () => gt, () => ({
        direction: "up",
        distance: 10,
        duration: w() && !N() ? 200 : 0
      })), nt(2, m, () => gt, () => ({
        direction: "down",
        distance: 10,
        duration: w() && !N() ? 150 : 0
      })), o(E, m);
    }, X = (E) => {
      var m = Ae(), p = ke(m);
      {
        var oe = (ce) => {
          var ve = Cv(), be = i(ve);
          it(be, () => t(R)), nt(1, ve, () => gt, () => ({
            direction: "up",
            distance: 10,
            duration: w() && !N() ? 200 : 0
          })), nt(2, ve, () => gt, () => ({
            direction: "down",
            distance: 10,
            duration: w() && !N() ? 150 : 0
          })), o(ce, ve);
        };
        b(
          p,
          (ce) => {
            t(R) && ce(oe);
          },
          !0
        );
      }
      o(E, m);
    };
    b(S, (E) => {
      t(U)?.content ? E(W) : E(X, !1);
    });
  }
  M(() => {
    D(_, 1, Q(T), "svelte-pa3tfx"), Ce(_, "aria-orientation", c()), Ce(_, "aria-label", e["aria-label"]), D(x, 1, Q(q), "svelte-pa3tfx"), Ce(x, "id", `${A}-tabpanel-${n()}`), Ce(x, "aria-labelledby", `${A}-tab-${n()}`);
  }), o(r, C), Ze();
}
ut(["click", "keydown"]);
var Tv = /* @__PURE__ */ v("<textarea></textarea>");
const Mv = {
  hash: "svelte-16ael9g",
  code: `textarea.svelte-16ael9g {field-sizing:content;font-family:inherit;line-height:1.5;}textarea.svelte-16ael9g:focus {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {textarea.svelte-16ael9g {transition:none;
			animation: none;}
	}`
};
function mp(r, e) {
  Ke(e, !0), Je(r, Mv);
  let a = s(e, "value", 7, ""), n = s(e, "placeholder", 3, ""), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), c = s(e, "variant", 3, "glass"), g = s(e, "blur", 3, "md"), w = s(e, "rows", 3, 4), N = s(e, "resize", 3, "vertical"), h = s(e, "autoResize", 3, !1), P = s(e, "maxHeight", 3, 300), L = s(e, "minHeight", 3, 80), A = s(e, "animate", 3, !0), k = s(e, "reduceMotion", 3, !1), f = s(e, "class", 3, ""), B = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "value",
    "placeholder",
    "disabled",
    "size",
    "variant",
    "blur",
    "rows",
    "cols",
    "resize",
    "autoResize",
    "maxHeight",
    "minHeight",
    "animate",
    "reduceMotion",
    "class",
    "onValueChange"
  ]), $ = /* @__PURE__ */ Se(void 0), y = /* @__PURE__ */ Se(!1);
  const T = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base"
  }, F = {
    default: "bg-white/5 border border-white/10 text-white placeholder-white/50",
    glass: "glass-subtle border border-white/20 text-white placeholder-white/40",
    terminal: "terminal text-green-300 placeholder-green-300/50"
  }, H = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y"
  }, q = /* @__PURE__ */ Ee(() => V("w-full rounded-brand-md transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50", "placeholder:transition-colors placeholder:duration-200", T[d()], F[c()], c() === "glass" && H[g()], j[N()], l() && "opacity-50 cursor-not-allowed", t(y) && c() === "glass" && "glass-medium", f()));
  function O(_) {
    const x = _.target;
    a(x.value), e.onValueChange?.(x.value), h() && R();
  }
  function I() {
    Y(y, !0);
  }
  function G() {
    Y(y, !1);
  }
  function U(_) {
    (_.ctrlKey || _.metaKey) && _.key === "a" || (_.ctrlKey || _.metaKey) && _.key === "z" || (_.ctrlKey || _.metaKey) && _.key === "y" || (_.key, _.key === "Escape" && t($).blur());
  }
  function R() {
    if (!t($) || !h()) return;
    t($).style.height = "auto";
    const _ = t($).scrollHeight, x = Math.min(Math.max(_, L()), P());
    t($).style.height = `${x}px`;
  }
  xt(() => {
    h() && t($) && R();
  }), xt(() => {
    Jt("Textarea", "medium");
  });
  var C = Tv();
  Qe(
    C,
    (_) => ({
      class: t(q),
      placeholder: n(),
      disabled: l(),
      rows: w(),
      cols: e.cols,
      "aria-label": B["aria-label"] || n(),
      oninput: O,
      onfocus: I,
      onblur: G,
      onkeydown: U,
      ...B,
      [yr]: _
    }),
    [
      () => ({
        "min-height": h() ? `${L()}px` : void 0,
        "max-height": h() ? `${P()}px` : void 0
      })
    ],
    void 0,
    "svelte-16ael9g"
  ), at(C, (_) => Y($, _), () => t($)), gr(() => or(C, a)), qe(C, (_, x) => kt?.(_, x), () => A() && !k() && t(y) ? { blur: g(), opacity: "medium" } : void 0), o(r, C), Ze();
}
var Av = (r) => ur.set(r.currentTarget.value), zv = /* @__PURE__ */ v('<div class="space-y-2 svelte-1erodky"><label for="theme-select" class="block text-sm font-medium text-text svelte-1erodky">Theme Preference</label> <select id="theme-select"><option class="svelte-1erodky">Auto (Follow System)</option><option class="svelte-1erodky">Terminal (Dark)</option><option class="svelte-1erodky">Bubble Tea (Light)</option></select></div>'), Iv = () => ur.setAuto(), Pv = () => ur.setTerminal(), Lv = () => ur.setBubbleTea(), Dv = /* @__PURE__ */ v('<div class="flex rounded-lg overflow-hidden border border-border/30 svelte-1erodky"><button>Auto</button> <button>Terminal</button> <button>Bubble Tea</button></div>'), jv = () => ur.setAuto(), Rv = () => ur.setTerminal(), Nv = () => ur.setBubbleTea(), qv = /* @__PURE__ */ v('<div class="flex flex-wrap gap-2 svelte-1erodky"><button>🔄 Auto</button> <button>💻 Terminal</button> <button>🧋 Bubble Tea</button></div>'), Ov = /* @__PURE__ */ v('<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20 svelte-1erodky"><h4 class="font-medium text-text mb-1 svelte-1erodky"> </h4> <p class="text-sm text-text/70 svelte-1erodky"> </p></div>'), Bv = /* @__PURE__ */ v('<span class="svelte-1erodky"> </span>'), Fv = /* @__PURE__ */ v('<span class="svelte-1erodky"> </span>'), Hv = /* @__PURE__ */ v('<div class="mt-2 flex items-center gap-2 text-xs text-text/60 svelte-1erodky"><div></div> <!></div>'), Vv = /* @__PURE__ */ v("<div><!> <!> <!></div>");
const Gv = {
  hash: "svelte-1erodky",
  code: `
	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {.theme-selector.svelte-1erodky :where(.svelte-1erodky) {transition-duration:0.01ms !important;}
	}`
};
function hp(r, e) {
  Ke(e, !0), Je(r, Gv);
  const [a, n] = Qo(), l = () => Zo(ei, "$themeConfig", a), d = s(e, "variant", 3, "pills"), c = s(e, "showDescription", 3, !0), g = s(e, "showSystemStatus", 3, !0), w = s(e, "size", 3, "md"), N = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "showDescription",
    "showSystemStatus",
    "size",
    "class"
  ]), P = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-3"
  }, L = (j, q) => {
    const O = j === q;
    return d() === "pills" ? V(
      "px-3 py-2 rounded-lg font-medium transition-all duration-200",
      "border border-transparent cursor-pointer",
      O ? "bg-primary text-white border-primary shadow-lg" : "bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30",
      P[w()]
    ) : d() === "toggle" ? V(
      "flex-1 px-3 py-2 font-medium transition-all duration-200",
      "border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg",
      O ? "bg-primary text-white shadow-inner" : "bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text",
      P[w()]
    ) : "";
  }, A = /* @__PURE__ */ Ee(() => l() ? Us(l().userTheme, l().resolvedTheme) : null);
  var k = Vv();
  Qe(k, (j) => ({ class: j, ...h }), [() => V("theme-selector", N())], void 0, "svelte-1erodky");
  var f = i(k);
  {
    var B = (j) => {
      var q = zv(), O = u(i(q), 2);
      O.__change = [Av];
      var I = i(O);
      I.value = I.__value = "auto";
      var G = u(I);
      G.value = G.__value = "terminal";
      var U = u(G);
      U.value = U.__value = "bubbleTea";
      var R;
      Ho(O), M(
        (C) => {
          D(O, 1, C, "svelte-1erodky"), R !== (R = l()?.userTheme || "auto") && (O.value = (O.__value = l()?.userTheme || "auto") ?? "", _a(O, l()?.userTheme || "auto"));
        },
        [
          () => Q(V("w-full border border-border/30 rounded-lg bg-surface text-text", "focus:ring-2 focus:ring-primary focus:border-primary", P[w()]))
        ]
      ), o(j, q);
    }, $ = (j) => {
      var q = Ae(), O = ke(q);
      {
        var I = (U) => {
          var R = Dv(), C = i(R);
          C.__click = [Iv];
          var _ = u(C, 2);
          _.__click = [Pv];
          var x = u(_, 2);
          x.__click = [Lv], M(
            (S, W, X) => {
              D(C, 1, S, "svelte-1erodky"), D(_, 1, W, "svelte-1erodky"), D(x, 1, X, "svelte-1erodky");
            },
            [
              () => Q(L(l()?.userTheme || "auto", "auto")),
              () => Q(L(l()?.userTheme || "auto", "terminal")),
              () => Q(L(l()?.userTheme || "auto", "bubbleTea"))
            ]
          ), o(U, R);
        }, G = (U) => {
          var R = Ae(), C = ke(R);
          {
            var _ = (x) => {
              var S = qv(), W = i(S);
              W.__click = [jv];
              var X = u(W, 2);
              X.__click = [Rv];
              var E = u(X, 2);
              E.__click = [Nv], M(
                (m, p, oe) => {
                  D(W, 1, m, "svelte-1erodky"), D(X, 1, p, "svelte-1erodky"), D(E, 1, oe, "svelte-1erodky");
                },
                [
                  () => Q(L(l()?.userTheme || "auto", "auto")),
                  () => Q(L(l()?.userTheme || "auto", "terminal")),
                  () => Q(L(l()?.userTheme || "auto", "bubbleTea"))
                ]
              ), o(x, S);
            };
            b(
              C,
              (x) => {
                d() === "pills" && x(_);
              },
              !0
            );
          }
          o(U, R);
        };
        b(
          O,
          (U) => {
            d() === "toggle" ? U(I) : U(G, !1);
          },
          !0
        );
      }
      o(j, q);
    };
    b(f, (j) => {
      d() === "dropdown" ? j(B) : j($, !1);
    });
  }
  var y = u(f, 2);
  {
    var T = (j) => {
      var q = Ov(), O = i(q), I = i(O), G = u(O, 2), U = i(G);
      M(() => {
        re(I, t(A).displayName), re(U, t(A).description);
      }), o(j, q);
    };
    b(y, (j) => {
      c() && t(A) && j(T);
    });
  }
  var F = u(y, 2);
  {
    var H = (j) => {
      var q = Hv(), O = i(q), I = u(O, 2);
      {
        var G = (R) => {
          var C = Bv(), _ = i(C);
          M(() => re(_, `Following system: ${l().resolvedTheme ?? ""}`)), o(R, C);
        }, U = (R) => {
          var C = Fv(), _ = i(C);
          M(() => re(_, `Manual override: ${l().userTheme ?? ""}`)), o(R, C);
        };
        b(I, (R) => {
          Un(l().userTheme) ? R(G) : R(U, !1);
        });
      }
      M((R) => D(O, 1, R, "svelte-1erodky"), [
        () => Q(V("w-2 h-2 rounded-full", Un(l().userTheme) ? "bg-green-400" : "bg-orange-400"))
      ]), o(j, q);
    };
    b(F, (j) => {
      g() && l() && j(H);
    });
  }
  o(r, k), Ze(), n();
}
ut(["change", "click"]);
function Uv(r, e, a) {
  e.action?.onClick(), a();
}
var Yv = /* @__PURE__ */ v('<h4 class="font-semibold text-sm text-white mb-1 svelte-4z22bx"> </h4>'), Wv = /* @__PURE__ */ v('<p class="text-sm text-white/80 svelte-4z22bx"> </p>'), Xv = /* @__PURE__ */ v('<div class="text-sm text-white/80 svelte-4z22bx"><!></div>'), Kv = /* @__PURE__ */ v('<button class="mt-2 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:underline transition-colors duration-150 svelte-4z22bx"> </button>'), Zv = /* @__PURE__ */ v('<button class="flex-shrink-0 text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all duration-150 svelte-4z22bx" aria-label="Close notification"><svg class="w-5 h-5 svelte-4z22bx" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class="svelte-4z22bx"></path></svg></button>'), Qv = /* @__PURE__ */ v('<div><div class="flex-shrink-0 text-lg svelte-4z22bx" aria-hidden="true"> </div> <div class="flex-1 min-w-0 svelte-4z22bx"><!> <!> <!></div> <!></div>');
const Jv = {
  hash: "svelte-4z22bx",
  code: `div[role='alert'].svelte-4z22bx {will-change:transform, opacity;}

	@media (prefers-reduced-motion: reduce) {.svelte-4z22bx {transition:none;
			animation: none;will-change:auto;}
	}`
};
function pp(r, e) {
  Ke(e, !0), Je(r, Jv);
  let a = s(e, "open", 7, !1), n = s(e, "type", 3, "info"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "top-right"), c = s(e, "blur", 3, "md"), g = s(e, "duration", 3, 5e3), w = s(e, "closable", 3, !0), N = s(e, "animate", 3, !0), h = s(e, "reduceMotion", 3, !1), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "open",
    "type",
    "variant",
    "position",
    "blur",
    "duration",
    "closable",
    "animate",
    "reduceMotion",
    "title",
    "description",
    "action",
    "class",
    "children",
    "onOpenChange"
  ]), A = /* @__PURE__ */ Se(void 0), k = null;
  const f = {
    info: {
      icon: "ℹ️",
      colors: "border-blue-400/40 bg-blue-500/10 text-blue-200"
    },
    success: {
      icon: "✅",
      colors: "border-green-400/40 bg-green-500/10 text-green-200"
    },
    warning: {
      icon: "⚠️",
      colors: "border-yellow-400/40 bg-yellow-500/10 text-yellow-200"
    },
    error: {
      icon: "❌",
      colors: "border-red-400/40 bg-red-500/10 text-red-200"
    }
  }, B = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4"
  }, $ = {
    default: "bg-white/5 border border-white/10",
    glass: "glass-subtle border",
    terminal: "terminal"
  }, y = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, T = V("fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg", "flex items-start gap-3 transition-all duration-300", B[d()], $[l()], l() === "glass" && y[c()], f[n()].colors, P());
  function F() {
    a(!1), e.onOpenChange?.(!1), k && (clearTimeout(k), k = null);
  }
  function H(I) {
    I.key === "Escape" && w() && (I.preventDefault(), F());
  }
  xt(() => (a() && g() !== null && g() > 0 && (k = setTimeout(
    () => {
      F();
    },
    g()
  )), () => {
    k && (clearTimeout(k), k = null);
  })), xt(() => {
    if (a())
      return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }), xt(() => {
    Jt("Toast", "small");
  });
  var j = Ae(), q = ke(j);
  {
    var O = (I) => {
      var G = Qv();
      Qe(
        G,
        () => ({
          class: T,
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true",
          tabindex: "-1",
          ...L
        }),
        void 0,
        void 0,
        "svelte-4z22bx"
      );
      var U = i(G), R = i(U), C = u(U, 2), _ = i(C);
      {
        var x = (ce) => {
          var ve = Yv(), be = i(ve);
          M(() => re(be, e.title)), o(ce, ve);
        };
        b(_, (ce) => {
          e.title && ce(x);
        });
      }
      var S = u(_, 2);
      {
        var W = (ce) => {
          var ve = Wv(), be = i(ve);
          M(() => re(be, e.description)), o(ce, ve);
        }, X = (ce) => {
          var ve = Ae(), be = ke(ve);
          {
            var te = (K) => {
              var ae = Xv(), z = i(ae);
              it(z, () => e.children), o(K, ae);
            };
            b(
              be,
              (K) => {
                e.children && K(te);
              },
              !0
            );
          }
          o(ce, ve);
        };
        b(S, (ce) => {
          e.description ? ce(W) : ce(X, !1);
        });
      }
      var E = u(S, 2);
      {
        var m = (ce) => {
          var ve = Kv();
          ve.__click = [Uv, e, F];
          var be = i(ve);
          qe(ve, (te, K) => Wt?.(te, K), () => N() && !h() ? { scale: 0.98, duration: 100 } : void 0), M(() => re(be, e.action.label)), o(ce, ve);
        };
        b(E, (ce) => {
          e.action && ce(m);
        });
      }
      var p = u(C, 2);
      {
        var oe = (ce) => {
          var ve = Zv();
          ve.__click = F, qe(ve, (be, te) => Wt?.(be, te), () => N() && !h() ? { scale: 0.9, duration: 100 } : void 0), o(ce, ve);
        };
        b(p, (ce) => {
          w() && ce(oe);
        });
      }
      at(G, (ce) => Y(A, ce), () => t(A)), M(() => re(R, f[n()].icon)), nt(1, G, () => gt, () => ({
        direction: d().includes("top") ? "down" : "up",
        distance: 20,
        duration: N() && !h() ? 300 : 0
      })), nt(2, G, () => gt, () => ({
        direction: d().includes("top") ? "up" : "down",
        distance: 20,
        duration: N() && !h() ? 200 : 0
      })), o(I, G);
    };
    b(q, (I) => {
      a() && I(O);
    });
  }
  o(r, j), Ze();
}
ut(["click"]);
var $v = /* @__PURE__ */ v("<div></div>"), eu = /* @__PURE__ */ v('<div role="tooltip"> <!></div>'), tu = /* @__PURE__ */ v("<div><!> <!></div>");
function xp(r, e) {
  Ke(e, !0);
  const a = s(e, "position", 3, "top"), n = s(e, "variant", 3, "glass"), l = s(e, "delay", 3, 500), d = s(e, "offset", 3, 8), c = s(e, "arrow", 3, !0), g = s(e, "animated", 3, !0), w = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "text",
    "position",
    "variant",
    "delay",
    "offset",
    "arrow",
    "animated",
    "class",
    "children"
  ]);
  let h = /* @__PURE__ */ Se(!1), P = /* @__PURE__ */ Se(void 0), L = /* @__PURE__ */ Se(void 0), A = /* @__PURE__ */ Se(lt({ x: 0, y: 0 })), k = /* @__PURE__ */ Se(lt(a())), f;
  const B = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
    terminal: "bg-gray-900/95 border border-green-400/40 text-green-400",
    liquid: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white",
    dark: "bg-gray-900/95 border border-white/10 text-white"
  }, $ = () => {
    if (!t(P) || !t(L)) return;
    const U = t(L).getBoundingClientRect(), R = t(P).getBoundingClientRect(), C = window.innerWidth, _ = window.innerHeight;
    let x = 0, S = 0, W = a();
    switch (a()) {
      case "top":
        x = U.left + U.width / 2 - R.width / 2, S = U.top - R.height - d();
        break;
      case "bottom":
        x = U.left + U.width / 2 - R.width / 2, S = U.bottom + d();
        break;
      case "left":
        x = U.left - R.width - d(), S = U.top + U.height / 2 - R.height / 2;
        break;
      case "right":
        x = U.right + d(), S = U.top + U.height / 2 - R.height / 2;
        break;
    }
    a() === "top" && S < 0 ? (S = U.bottom + d(), W = "bottom") : a() === "bottom" && S + R.height > _ ? (S = U.top - R.height - d(), W = "top") : a() === "left" && x < 0 ? (x = U.right + d(), W = "right") : a() === "right" && x + R.width > C && (x = U.left - R.width - d(), W = "left"), x = Math.max(8, Math.min(x, C - R.width - 8)), S = Math.max(8, Math.min(S, _ - R.height - 8)), Y(A, { x, y: S }, !0), Y(k, W, !0);
  }, y = () => {
    f = setTimeout(
      () => {
        Y(h, !0), requestAnimationFrame($);
      },
      l()
    );
  }, T = () => {
    clearTimeout(f), Y(h, !1);
  };
  yt(() => () => {
    clearTimeout(f);
  });
  const F = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
    bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full",
    right: "left-0 top-1/2 -translate-y-1/2 -translate-x-full"
  }, H = {
    top: "border-l-transparent border-r-transparent border-b-transparent",
    bottom: "border-l-transparent border-r-transparent border-t-transparent",
    left: "border-t-transparent border-b-transparent border-r-transparent",
    right: "border-t-transparent border-b-transparent border-l-transparent"
  };
  var j = tu();
  Qe(j, () => ({
    class: "relative inline-block",
    onmouseenter: y,
    onmouseleave: T,
    onfocus: y,
    onblur: T,
    role: "tooltip",
    ...N
  }));
  var q = i(j);
  {
    var O = (U) => {
      var R = Ae(), C = ke(R);
      it(C, () => e.children), o(U, R);
    };
    b(q, (U) => {
      e.children && U(O);
    });
  }
  var I = u(q, 2);
  {
    var G = (U) => {
      var R = eu(), C = i(R), _ = u(C);
      {
        var x = (S) => {
          var W = $v();
          M((X) => D(W, 1, X), [
            () => Q(V("absolute w-0 h-0 border-4", F[t(k)], H[t(k)], n() === "glass" && "border-white/10", n() === "terminal" && "border-green-400/40", n() === "liquid" && "border-white/30", n() === "dark" && "border-white/10"))
          ]), o(S, W);
        };
        b(_, (S) => {
          c() && S(x);
        });
      }
      at(R, (S) => Y(P, S), () => t(P)), M(
        (S) => {
          D(R, 1, S), pt(R, `left: ${t(A).x ?? ""}px; top: ${t(A).y ?? ""}px;`), re(C, `${e.text ?? ""} `);
        },
        [
          () => Q(V("fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl", B[n()], g() && "transition-all duration-200", w()))
        ]
      ), nt(3, R, () => gt, () => ({ duration: 200 })), o(U, R);
    };
    b(I, (U) => {
      t(h) && U(G);
    });
  }
  at(j, (U) => Y(L, U), () => t(L)), o(r, j), Ze();
}
function ru(r, e) {
  e(/* @__PURE__ */ new Date());
}
var au = (
  // Initialize from value prop
  // Click outside to close
  // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
  (r, e) => e(-1)
), nu = (r, e) => e(1), ou = /* @__PURE__ */ v('<div role="columnheader"> </div>'), iu = (r, e, a) => e(t(a)), lu = /* @__PURE__ */ v('<button role="gridcell"> </button>'), su = /* @__PURE__ */ v('<div class="p-2"></div>'), du = /* @__PURE__ */ v(`<div><button aria-label="Select today's date"> </button></div>`), cu = /* @__PURE__ */ v('<div id="date-picker-calendar" role="application" aria-label="Calendar date picker"><div class="flex items-center justify-between mb-4"><button aria-label="Previous month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 aria-live="polite"> </h3> <button aria-label="Next month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2" role="row"></div> <div class="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar dates"></div> <!></div>'), vu = /* @__PURE__ */ v('<div class="relative"><input/> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <!> <div aria-live="polite" aria-atomic="true" class="sr-only"><!></div></div>');
const uu = {
  hash: "svelte-zemggf",
  code: `
    /* Additional terminal-specific glow effects */.terminal .date-picker-input:focus {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 10px var(--terminal-green-glow);}.terminal .selected-day {text-shadow:0 0 5px currentColor;}`
};
function wp(r, e) {
  Ke(e, !0), Je(r, uu);
  const a = s(e, "value", 3, null), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "error", 3, !1), c = s(e, "disabled", 3, !1), g = s(e, "placeholder", 3, "Select date..."), w = s(e, "format", 3, "MM/dd/yyyy"), N = s(e, "closeOnSelect", 3, !0), h = s(e, "showToday", 3, !0), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "value",
    "variant",
    "size",
    "error",
    "disabled",
    "placeholder",
    "format",
    "minDate",
    "maxDate",
    "closeOnSelect",
    "showToday",
    "class"
  ]), A = zt();
  let k, f = /* @__PURE__ */ Se(null), B = /* @__PURE__ */ Se(!1), $ = /* @__PURE__ */ Se("");
  lt(/* @__PURE__ */ new Date());
  let y = /* @__PURE__ */ Se(null), T = /* @__PURE__ */ Se(null), F = /* @__PURE__ */ Se(lt((/* @__PURE__ */ new Date()).getFullYear())), H = /* @__PURE__ */ Se(lt((/* @__PURE__ */ new Date()).getMonth()));
  const j = {
    default: {
      input: "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white",
      calendar: "bg-gray-900/95 border-gray-700",
      header: "text-gray-200",
      dayButton: "text-gray-300 hover:bg-gray-800 hover:text-white",
      selectedDay: "bg-blue-600 text-white hover:bg-blue-700",
      todayDay: "bg-gray-700 text-blue-400"
    },
    glass: {
      input: "bg-white/5 border-white/10 focus:border-white/20 text-white backdrop-blur-md",
      calendar: "bg-white/10 border-white/20 backdrop-blur-lg",
      header: "text-white",
      dayButton: "text-white/70 hover:bg-white/10 hover:text-white",
      selectedDay: "bg-white/20 text-white hover:bg-white/25",
      todayDay: "bg-white/10 text-white border border-white/30"
    },
    terminal: {
      input: `bg-black/80 border-${Pe.terminal.green} focus:border-${Pe.terminal.matrix} text-${Pe.terminal.green}`,
      calendar: `bg-black/95 border-${Pe.terminal.green}`,
      header: `text-${Pe.terminal.green}`,
      dayButton: `text-${Pe.terminal.green}/70 hover:bg-${Pe.terminal.green}/10 hover:text-${Pe.terminal.green}`,
      selectedDay: `bg-${Pe.terminal.green} text-black hover:bg-${Pe.terminal.matrix}`,
      todayDay: `bg-${Pe.terminal.green}/20 text-${Pe.terminal.matrix}`
    }
  }, q = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-4 text-base"
  }, O = /* @__PURE__ */ Ee(() => j[n()]), I = /* @__PURE__ */ Ee(() => q[l()]);
  function G(ne) {
    if (!ne) return "";
    const de = ne.getDate().toString().padStart(2, "0"), ge = (ne.getMonth() + 1).toString().padStart(2, "0"), se = ne.getFullYear();
    switch (w()) {
      case "dd/MM/yyyy":
        return `${de}/${ge}/${se}`;
      case "yyyy-MM-dd":
        return `${se}-${ge}-${de}`;
      default:
        return `${ge}/${de}/${se}`;
    }
  }
  function U(ne) {
    if (!ne) return null;
    const de = ne.split(/[/-]/);
    if (de.length !== 3) return null;
    let ge, se, ue;
    switch (w()) {
      case "dd/MM/yyyy":
        [ge, se, ue] = de.map(Number);
        break;
      case "yyyy-MM-dd":
        [ue, se, ge] = de.map(Number);
        break;
      default:
        [se, ge, ue] = de.map(Number);
    }
    const le = new Date(ue, se - 1, ge);
    return se < 1 || se > 12 || ge < 1 || ge > 31 || le.getFullYear() !== ue || le.getMonth() !== se - 1 || le.getDate() !== ge ? null : R(le) ? le : null;
  }
  function R(ne) {
    return !(!(ne instanceof Date) || Number.isNaN(ne.getTime()) || e.minDate && ne < e.minDate || e.maxDate && ne > e.maxDate);
  }
  function C() {
    const ne = new Date(t(F), t(H), 1), de = new Date(ne);
    de.setDate(de.getDate() - ne.getDay());
    const ge = [], se = new Date(de);
    for (let ue = 0; ue < 42; ue++)
      se.getMonth() === t(H) ? ge.push(new Date(se)) : ge.push(null), se.setDate(se.getDate() + 1);
    return ge;
  }
  const _ = /* @__PURE__ */ Ee(C);
  function x(ne) {
    const de = /* @__PURE__ */ new Date();
    return ne.toDateString() === de.toDateString();
  }
  function S(ne, de) {
    return !ne || !de ? !1 : ne.toDateString() === de.toDateString();
  }
  function W() {
    c() || (Y(B, !t(B)), t(B) ? A("open") : A("close"));
  }
  function X(ne) {
    const de = ne.target;
    Y($, de.value, !0);
    const ge = U(t($));
    ge && (Y(y, ge, !0), Y(F, ge.getFullYear(), !0), Y(H, ge.getMonth(), !0), A("change", ge));
  }
  function E(ne) {
    R(ne) && (Y(y, ne, !0), Y($, G(ne), !0), A("change", ne), N() && (Y(B, !1), A("close")));
  }
  function m(ne) {
    const de = t(H) + ne;
    de < 0 ? (Y(H, 11), Y(F, t(F) - 1)) : de > 11 ? (Y(H, 0), Y(F, t(F) + 1)) : Y(H, de);
  }
  function p(ne) {
    if (t(B))
      switch (ne.key) {
        case "Escape":
          Y(B, !1), A("close");
          break;
        case "ArrowLeft":
          if (ne.preventDefault(), t(T)) {
            const de = new Date(t(T));
            de.setDate(de.getDate() - 1), Y(T, de, !0);
          }
          break;
        case "ArrowRight":
          if (ne.preventDefault(), t(T)) {
            const de = new Date(t(T));
            de.setDate(de.getDate() + 1), Y(T, de, !0);
          }
          break;
        case "ArrowUp":
          if (ne.preventDefault(), t(T)) {
            const de = new Date(t(T));
            de.setDate(de.getDate() - 7), Y(T, de, !0);
          }
          break;
        case "ArrowDown":
          if (ne.preventDefault(), t(T)) {
            const de = new Date(t(T));
            de.setDate(de.getDate() + 7), Y(T, de, !0);
          }
          break;
        case "Enter":
          ne.preventDefault(), t(T) && E(t(T));
          break;
      }
  }
  xt(() => {
    if (a()) {
      const ne = a() instanceof Date ? a() : U(a().toString());
      ne && (Y(y, ne, !0), Y($, G(ne), !0), Y(F, ne.getFullYear(), !0), Y(H, ne.getMonth(), !0));
    }
  }), yt(() => {
    function ne(de) {
      t(B) && t(f) && !t(f).contains(de.target) && k && !k.contains(de.target) && (Y(B, !1), A("close"));
    }
    return document.addEventListener("click", ne), () => document.removeEventListener("click", ne);
  });
  const oe = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], ce = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ve = /* @__PURE__ */ Ee(() => V("relative w-full rounded-lg border transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-opacity-50", "font-mono", t(O).input, t(I), d() && "border-red-500 focus:border-red-500", c() && "opacity-50 cursor-not-allowed", P()));
  var be = vu(), te = i(be);
  Qe(te, () => ({
    onclick: (
      // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
      W
    ),
    oninput: X,
    onkeydown: p,
    placeholder: g(),
    disabled: c(),
    readonly: !c(),
    class: t(ve),
    role: "combobox",
    "aria-haspopup": "grid",
    "aria-expanded": t(B),
    "aria-controls": "date-picker-calendar",
    "aria-label": g(),
    "aria-describedby": d() ? "date-picker-error" : void 0,
    ...L
  })), at(te, (ne) => k = ne, () => k), gr(() => or(te, () => t($), (ne) => Y($, ne))), qe(te, (ne, de) => kt?.(ne, de), () => ({ blur: "sm", opacity: "light" })), qe(te, (ne, de) => bt?.(ne, de), () => ({ enabled: !c(), strength: 0.1 }));
  var K = u(te, 2), ae = i(K), z = u(K, 2);
  {
    var ee = (ne) => {
      var de = cu(), ge = i(de), se = i(ge);
      se.__click = [au, m], qe(se, (Be, _e) => bt?.(Be, _e), () => ({ strength: 0.2 }));
      var ue = u(se, 2), le = i(ue), fe = u(ue, 2);
      fe.__click = [nu, m], qe(fe, (Be, _e) => bt?.(Be, _e), () => ({ strength: 0.2 }));
      var pe = u(ge, 2);
      Ye(pe, 20, () => ce, (Be) => Be, (Be, _e) => {
        var xe = ou(), Ie = i(xe);
        M(() => {
          D(xe, 1, `p-2 text-center text-xs font-semibold ${t(O).header ?? ""} font-mono`), re(Ie, _e);
        }), o(Be, xe);
      });
      var Te = u(pe, 2);
      Ye(Te, 23, () => t(_), (Be, _e) => Be ? Be.toDateString() : "blank-" + _e, (Be, _e) => {
        var xe = Ae(), Ie = ke(xe);
        {
          var Re = (we) => {
            const Me = /* @__PURE__ */ Ee(() => S(t(_e), t(y))), Le = /* @__PURE__ */ Ee(() => x(t(_e))), ye = /* @__PURE__ */ Ee(() => R(t(_e)));
            var he = lu();
            he.__click = [iu, E, _e];
            var ze = i(he);
            qe(he, (De, Oe) => bt?.(De, Oe), () => ({ enabled: t(ye), strength: 0.15 })), M(
              (De, Oe, Ge) => {
                he.disabled = !t(ye), D(he, 1, `p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       ${(t(Me) ? t(O).selectedDay : t(Le) ? t(O).todayDay : t(O).dayButton) ?? ""}
							       ${t(ye) ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`), Ce(he, "aria-label", De), Ce(he, "aria-selected", t(Me)), Ce(he, "aria-disabled", !t(ye)), Ce(he, "aria-current", t(Le) ? "date" : void 0), Ce(he, "tabindex", Oe), re(ze, Ge);
              },
              [
                () => G(t(_e)),
                () => t(Me) || S(t(_e), t(T)) ? 0 : -1,
                () => t(_e).getDate()
              ]
            ), o(we, he);
          }, me = (we) => {
            var Me = su();
            o(we, Me);
          };
          b(Ie, (we) => {
            t(_e) ? we(Re) : we(me, !1);
          });
        }
        o(Be, xe);
      });
      var Ne = u(Te, 2);
      {
        var He = (Be) => {
          var _e = du(), xe = i(_e);
          xe.__click = [ru, E];
          var Ie = i(xe);
          qe(xe, (Re, me) => bt?.(Re, me), () => ({ strength: 0.1 })), M(
            (Re) => {
              D(_e, 1, `mt-4 pt-4 border-t ${t(O).calendar ?? ""}`), D(xe, 1, `w-full py-2 px-4 rounded-md ${t(O).dayButton ?? ""} transition-colors font-mono text-sm`), re(Ie, `Today: ${Re ?? ""}`);
            },
            [() => G(/* @__PURE__ */ new Date())]
          ), o(Be, _e);
        };
        b(Ne, (Be) => {
          h() && Be(He);
        });
      }
      at(de, (Be) => Y(f, Be), () => t(f)), qe(de, (Be, _e) => kt?.(Be, _e), () => ({ blur: "lg", opacity: "medium" })), M(() => {
        D(de, 1, `absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 ${t(O).calendar ?? ""}`), D(se, 1, `p-2 rounded-md ${t(O).dayButton ?? ""} transition-colors`), D(ue, 1, `text-lg font-semibold ${t(O).header ?? ""} font-mono`), re(le, `${oe[t(H)] ?? ""}
                    ${t(F) ?? ""}`), D(fe, 1, `p-2 rounded-md ${t(O).dayButton ?? ""} transition-colors`);
      }), nt(1, de, () => gt, () => ({ direction: "up", duration: 200 })), o(ne, de);
    };
    b(z, (ne) => {
      t(B) && ne(ee);
    });
  }
  var J = u(z, 2), Z = i(J);
  {
    var ie = (ne) => {
      var de = St();
      M((ge) => re(de, `Selected date: ${ge ?? ""}`), [() => G(t(y))]), o(ne, de);
    };
    b(Z, (ne) => {
      t(y) && ne(ie);
    });
  }
  M(() => D(ae, 0, `w-5 h-5 ${t(O).header ?? ""}`)), o(r, be), Ze();
}
ut(["click"]);
var fu = (r, e) => (r.key === "Enter" || r.key === " ") && e(), bu = /* @__PURE__ */ v('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-lg font-medium">Drop files here</p></div>'), gu = /* @__PURE__ */ v('<p class="text-xs text-gray-500 mt-1"> </p>'), mu = /* @__PURE__ */ v(`<button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium">Select Files</button>`), hu = /* @__PURE__ */ v('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <div class="mb-2"><p class="text-lg font-medium"> </p> <p class="text-sm text-gray-400 mt-1"> </p> <!></div> <!></div>'), pu = /* @__PURE__ */ v('<img class="w-12 h-12 object-cover rounded border"/>'), xu = /* @__PURE__ */ v('<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>'), wu = /* @__PURE__ */ nr('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), _u = (r, e, a) => e(t(a).id), yu = /* @__PURE__ */ v('<button class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" title="Retry upload">Retry</button> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>', 1), ku = /* @__PURE__ */ v('<div class="w-5 h-5"><svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Cu = (r, e, a) => e(t(a).id), Su = /* @__PURE__ */ v('<p class="text-xs text-red-400 mt-1"> </p>'), Eu = /* @__PURE__ */ v('<div class="mt-2"><div class="w-full bg-gray-700 rounded-full h-2"><div></div></div> <p class="text-xs text-gray-400 mt-1"> </p></div>'), Tu = /* @__PURE__ */ v('<div><div class="flex items-start gap-3"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-sm font-medium truncate pr-2"> </h4> <div class="flex items-center gap-2"><!> <button aria-label="Remove file"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-1"><p class="text-xs text-gray-400"> </p> <!></div> <!></div></div></div>'), Mu = /* @__PURE__ */ v('<div class="mt-4 space-y-3"></div>'), Au = /* @__PURE__ */ v('<input type="file" class="hidden"/> <div role="button" aria-label="Upload files"><!></div> <!>', 1);
const zu = {
  hash: "svelte-yfigio",
  code: `
	/* Terminal-specific glow effects */.terminal .file-upload:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function _p(r, e) {
  Ke(e, !0), Je(r, zu);
  const a = s(e, "multiple", 3, !1), n = s(e, "accept", 3, "*/*"), l = s(
    e,
    "maxSize",
    3,
    10 * 1024 * 1024
    // 10MB default
  ), d = s(e, "maxFiles", 19, () => a() ? 5 : 1), c = s(e, "variant", 3, "default"), g = s(e, "disabled", 3, !1), w = s(e, "showPreview", 3, !0), N = s(e, "autoUpload", 3, !1), h = s(e, "class", 3, ""), P = zt();
  let L, A, k = /* @__PURE__ */ Se(!1), f = /* @__PURE__ */ Se(lt([]));
  const B = {
    default: {
      dropZone: "bg-gray-900/50 border-gray-700 hover:border-gray-600",
      dropZoneActive: "bg-blue-500/10 border-blue-500",
      fileItem: "bg-gray-800 border-gray-700",
      progressBar: "bg-blue-600",
      successIcon: "text-green-400",
      errorIcon: "text-red-400",
      removeButton: "text-gray-400 hover:text-white"
    },
    glass: {
      dropZone: "bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-md",
      dropZoneActive: "bg-white/10 border-white/30",
      fileItem: "bg-white/10 border-white/20 backdrop-blur-sm",
      progressBar: "bg-white/40",
      successIcon: "text-green-400",
      errorIcon: "text-red-400",
      removeButton: "text-white/70 hover:text-white"
    },
    terminal: {
      dropZone: `bg-black/80 border-${Pe.terminal.green} hover:border-${Pe.terminal.matrix}`,
      dropZoneActive: `bg-${Pe.terminal.green}/10 border-${Pe.terminal.matrix}`,
      fileItem: `bg-black/60 border-${Pe.terminal.green}/30`,
      progressBar: `bg-${Pe.terminal.green}`,
      successIcon: `text-${Pe.terminal.green}`,
      errorIcon: "text-red-400",
      removeButton: `text-${Pe.terminal.green}/70 hover:text-${Pe.terminal.green}`
    }
  }, $ = /* @__PURE__ */ Ee(() => B[c()]);
  function y() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  function T(te) {
    if (te === 0) return "0 Bytes";
    const K = 1024, ae = ["Bytes", "KB", "MB", "GB"], z = Math.floor(Math.log(te) / Math.log(K));
    return parseFloat((te / Math.pow(K, z)).toFixed(2)) + " " + ae[z];
  }
  function F(te) {
    return te.type.startsWith("image/");
  }
  function H(te) {
    if (te.size > l())
      return `File size exceeds ${T(l())}`;
    if (n() !== "*/*") {
      const K = n().split(",").map((ee) => ee.trim()), ae = "." + te.name.split(".").pop()?.toLowerCase();
      if (!K.some((ee) => ee === te.type || ee === ae || ee.endsWith("/*") && te.type.startsWith(ee.slice(0, -1))))
        return `File type not accepted. Accepted types: ${n()}`;
    }
    return null;
  }
  async function j(te) {
    if (!(!F(te) || !w()))
      return new Promise((K) => {
        const ae = new FileReader();
        ae.onload = (z) => K(z.target?.result), ae.onerror = () => K(void 0), ae.readAsDataURL(te);
      });
  }
  async function q(te) {
    if (g()) return;
    const K = Array.from(te), ae = d() - t(f).length, z = K.slice(0, ae), ee = [];
    for (const J of z) {
      const Z = H(J), ie = await j(J), ne = {
        ...J,
        id: y(),
        preview: ie,
        status: Z ? "error" : "pending",
        error: Z,
        progress: 0
      };
      ee.push(ne);
    }
    Y(f, [...t(f), ...ee], !0), P("filesAdded", ee), N() && e.uploadUrl && ee.forEach((J) => {
      J.status === "pending" && O(J);
    });
  }
  async function O(te) {
    if (!e.uploadUrl) return;
    const K = t(f).findIndex((z) => z.id === te.id);
    if (K === -1) return;
    t(f)[K] = { ...te, status: "uploading", progress: 0 }, P("uploadStart", t(f)[K]);
    const ae = new FormData();
    ae.append("file", te);
    try {
      const z = new XMLHttpRequest();
      z.upload.onprogress = (ee) => {
        if (ee.lengthComputable) {
          const J = Math.round(ee.loaded / ee.total * 100);
          t(f)[K] = { ...t(f)[K], progress: J }, P("uploadProgress", { file: t(f)[K], progress: J });
        }
      }, z.onload = () => {
        if (z.status >= 200 && z.status < 300)
          t(f)[K] = { ...t(f)[K], status: "success", progress: 100 }, P("uploadSuccess", { file: t(f)[K], response: z.response });
        else
          throw new Error(`Upload failed: ${z.statusText}`);
        t(f).every((ee) => ee.status === "success" || ee.status === "error") && P("allUploadsComplete", t(f));
      }, z.onerror = () => {
        const ee = "Upload failed: Network error";
        t(f)[K] = { ...t(f)[K], status: "error", error: ee }, P("uploadError", { file: t(f)[K], error: ee });
      }, z.open("POST", e.uploadUrl), z.send(ae);
    } catch (z) {
      const ee = z instanceof Error ? z.message : "Upload failed";
      t(f)[K] = {
        ...t(f)[K],
        status: "error",
        error: ee
      }, P("uploadError", { file: t(f)[K], error: ee });
    }
  }
  function I(te) {
    const K = t(f).findIndex((z) => z.id === te);
    if (K === -1) return;
    const ae = t(f)[K];
    Y(f, t(f).filter((z) => z.id !== te), !0), P("fileRemoved", ae);
  }
  function G(te) {
    const K = t(f).find((ae) => ae.id === te);
    K && e.uploadUrl && O(K);
  }
  function U(te) {
    const K = te.target;
    K.files && q(K.files), K.value = "";
  }
  function R(te) {
    te.preventDefault(), g() || Y(k, !0);
  }
  function C(te) {
    te.preventDefault(), A?.contains(te.relatedTarget) || Y(k, !1);
  }
  function _(te) {
    if (te.preventDefault(), Y(k, !1), g()) return;
    const K = te.dataTransfer?.files;
    K && q(K);
  }
  function x() {
    !g() && L && L.click();
  }
  const S = /* @__PURE__ */ Ee(() => t(f).length < d()), W = /* @__PURE__ */ Ee(() => V(
    "relative w-full rounded-lg border-2 border-dashed transition-all duration-300",
    "flex flex-col items-center justify-center p-8 min-h-32",
    "cursor-pointer font-mono",
    t(k) ? t($).dropZoneActive : t($).dropZone,
    g() && "opacity-50 cursor-not-allowed",
    h()
  ));
  var X = Au(), E = ke(X);
  E.__change = U, at(E, (te) => L = te, () => L);
  var m = u(E, 2);
  m.__click = x, m.__keydown = [fu, x];
  var p = i(m);
  {
    var oe = (te) => {
      var K = bu();
      nt(1, K, () => Wt, () => ({ duration: 200 })), o(te, K);
    }, ce = (te) => {
      var K = hu(), ae = u(i(K), 2), z = i(ae), ee = i(z), J = u(z, 2), Z = i(J), ie = u(J, 2);
      {
        var ne = (se) => {
          var ue = gu(), le = i(ue);
          M(() => re(le, `${t(f).length ?? ""} of ${d() ?? ""} files selected`)), o(se, ue);
        };
        b(ie, (se) => {
          a() && se(ne);
        });
      }
      var de = u(ae, 2);
      {
        var ge = (se) => {
          var ue = mu();
          qe(ue, (le, fe) => bt?.(le, fe), () => ({ strength: 0.15 })), o(se, ue);
        };
        b(de, (se) => {
          t(S) && se(ge);
        });
      }
      M(
        (se) => {
          re(ee, t(S) ? "Choose files or drag and drop" : "Maximum files reached"), re(Z, `${(n() === "*/*" ? "Any file type" : n()) ?? ""} • Max ${se ?? ""} per file`);
        },
        [() => T(l())]
      ), o(te, K);
    };
    b(p, (te) => {
      t(k) ? te(oe) : te(ce, !1);
    });
  }
  at(m, (te) => A = te, () => A), qe(m, (te, K) => kt?.(te, K), () => ({ blur: "md", opacity: "light" })), qe(m, (te, K) => bt?.(te, K), () => ({
    enabled: !g() && t(S),
    strength: 0.1
  }));
  var ve = u(m, 2);
  {
    var be = (te) => {
      var K = Mu();
      Ye(K, 21, () => t(f), (ae) => ae.id, (ae, z) => {
        var ee = Tu(), J = i(ee), Z = i(J), ie = i(Z);
        {
          var ne = (Me) => {
            var Le = pu();
            M(() => {
              Ce(Le, "src", t(z).preview), Ce(Le, "alt", t(z).name);
            }), o(Me, Le);
          }, de = (Me) => {
            var Le = xu();
            o(Me, Le);
          };
          b(ie, (Me) => {
            t(z).preview ? Me(ne) : Me(de, !1);
          });
        }
        var ge = u(Z, 2), se = i(ge), ue = i(se), le = i(ue), fe = u(ue, 2), pe = i(fe);
        {
          var Te = (Me) => {
            var Le = wu();
            M(() => D(Le, 0, `w-5 h-5 ${t($).successIcon ?? ""}`)), o(Me, Le);
          }, Ne = (Me) => {
            var Le = Ae(), ye = ke(Le);
            {
              var he = (De) => {
                var Oe = yu(), Ge = ke(Oe);
                Ge.__click = [_u, G, z];
                var Ue = u(Ge, 2);
                M(() => D(Ue, 0, `w-5 h-5 ${t($).errorIcon ?? ""}`)), o(De, Oe);
              }, ze = (De) => {
                var Oe = Ae(), Ge = ke(Oe);
                {
                  var Ue = (tt) => {
                    var et = ku();
                    o(tt, et);
                  };
                  b(
                    Ge,
                    (tt) => {
                      t(z).status === "uploading" && tt(Ue);
                    },
                    !0
                  );
                }
                o(De, Oe);
              };
              b(
                ye,
                (De) => {
                  t(z).status === "error" ? De(he) : De(ze, !1);
                },
                !0
              );
            }
            o(Me, Le);
          };
          b(pe, (Me) => {
            t(z).status === "success" ? Me(Te) : Me(Ne, !1);
          });
        }
        var He = u(pe, 2);
        He.__click = [Cu, I, z];
        var Be = u(se, 2), _e = i(Be), xe = i(_e), Ie = u(_e, 2);
        {
          var Re = (Me) => {
            var Le = Su(), ye = i(Le);
            M(() => re(ye, t(z).error)), o(Me, Le);
          };
          b(Ie, (Me) => {
            t(z).error && Me(Re);
          });
        }
        var me = u(Be, 2);
        {
          var we = (Me) => {
            var Le = Eu(), ye = i(Le), he = i(ye), ze = u(ye, 2), De = i(ze);
            M(() => {
              D(he, 1, `h-2 rounded-full ${t($).progressBar ?? ""} transition-all duration-300`), pt(he, `width: ${t(z).progress ?? ""}%`), re(De, `${t(z).progress ?? ""}% uploaded`);
            }), o(Me, Le);
          };
          b(me, (Me) => {
            t(z).status === "uploading" && t(z).progress !== void 0 && Me(we);
          });
        }
        qe(ee, (Me, Le) => kt?.(Me, Le), () => ({ blur: "sm", opacity: "subtle" })), M(
          (Me) => {
            D(ee, 1, `p-4 rounded-lg border ${t($).fileItem ?? ""} transition-all duration-200`), re(le, t(z).name), D(He, 1, `p-1 rounded ${t($).removeButton ?? ""} hover:bg-red-500/20 transition-colors`), re(xe, Me);
          },
          [() => T(t(z).size)]
        ), nt(1, ee, () => Wt, () => ({ duration: 300, bounce: !0 })), o(ae, ee);
      }), o(te, K);
    };
    b(ve, (te) => {
      t(f).length > 0 && te(be);
    });
  }
  M(() => {
    Ce(E, "accept", n()), E.multiple = a(), E.disabled = g(), D(m, 1, Q(t(W))), Ce(m, "tabindex", g() ? -1 : 0);
  }), Ot("dragover", m, R), Ot("dragleave", m, C), Ot("drop", m, _), o(r, X), Ze();
}
ut(["change", "click", "keydown"]);
const Ft = {
  required: (r = "This field is required") => ({
    test: (e) => e != null && e !== "",
    message: r
  }),
  minLength: (r, e) => ({
    test: (a) => !a || a.length >= r,
    message: e || `Must be at least ${r} characters`
  }),
  maxLength: (r, e) => ({
    test: (a) => !a || a.length <= r,
    message: e || `Must be no more than ${r} characters`
  }),
  email: (r = "Must be a valid email address") => ({
    test: (e) => !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
    message: r
  }),
  url: (r = "Must be a valid URL") => ({
    test: (e) => !e || /^https?:\/\/.+\..+/.test(e),
    message: r
  }),
  pattern: (r, e) => ({
    test: (a) => !a || r.test(a),
    message: e
  }),
  numeric: (r = "Must be a number") => ({
    test: (e) => !e || !isNaN(Number(e)),
    message: r
  }),
  integer: (r = "Must be a whole number") => ({
    test: (e) => !e || Number.isInteger(Number(e)) && !isNaN(Number(e)),
    message: r
  }),
  min: (r, e) => ({
    test: (a) => !a || Number(a) >= r,
    message: e || `Must be at least ${r}`
  }),
  max: (r, e) => ({
    test: (a) => !a || Number(a) <= r,
    message: e || `Must be no more than ${r}`
  }),
  range: (r, e, a) => ({
    test: (n) => !n || Number(n) >= r && Number(n) <= e,
    message: a || `Must be between ${r} and ${e}`
  }),
  strongPassword: (r = "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character") => ({
    test: (e) => !e || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e),
    message: r
  }),
  confirmPassword: (r, e = "Passwords do not match") => ({
    test: (a) => !a || a === r,
    message: e
  }),
  phoneNumber: (r = "Must be a valid phone number") => ({
    // Allow optional leading '+', then digits. Strip spaces, dashes, and parentheses before testing.
    test: (e) => !e || /^\+?[1-9]\d{0,15}$/.test(e.replace(/[\s-()]/g, "")),
    message: r
  }),
  date: (r = "Must be a valid date") => ({
    test: (e) => !e || !isNaN(Date.parse(e)),
    message: r
  }),
  futureDate: (r = "Date must be in the future") => ({
    test: (e) => !e || new Date(e) > /* @__PURE__ */ new Date(),
    message: r
  }),
  pastDate: (r = "Date must be in the past") => ({
    test: (e) => !e || new Date(e) < /* @__PURE__ */ new Date(),
    message: r
  }),
  custom: (r, e) => ({
    test: r,
    message: e
  })
};
function ni(r, e) {
  const a = [];
  if (e.trim && typeof r == "string" && (r = r.trim()), e.required && (r == null || r === ""))
    return a.push("This field is required"), { isValid: !1, errors: a };
  for (const n of e.rules)
    n.test(r) || a.push(n.message);
  return {
    isValid: a.length === 0,
    errors: a
  };
}
function Iu(r, e) {
  const a = {};
  for (const [n, l] of Object.entries(e)) {
    const d = r[n];
    a[n] = ni(d, l);
  }
  return a;
}
function Pu(r) {
  return Object.values(r).every((e) => e.isValid);
}
function Lu(r) {
  const e = {};
  for (const [a, n] of Object.entries(r))
    n.isValid || (e[a] = n.errors);
  return e;
}
function yp(r) {
  let e = $state({}), a = $state({}), n = $state({});
  return {
    get data() {
      return e;
    },
    get errors() {
      return a;
    },
    get touched() {
      return n;
    },
    get isValid() {
      return Object.keys(a).length === 0;
    },
    setValue(l, d) {
      e[l] = d, this.validateField(l);
    },
    setTouched(l, d = !0) {
      n[l] = d;
    },
    validateField(l) {
      if (r[l]) {
        const d = ni(e[l], r[l]);
        d.isValid ? delete a[l] : a[l] = d.errors;
      }
    },
    validateAll() {
      const l = Iu(e, r);
      return a = Lu(l), Pu(l);
    },
    reset() {
      e = {}, a = {}, n = {};
    },
    setData(l) {
      e = { ...l };
    }
  };
}
function kp(r, e = 300) {
  let a;
  return function(...n) {
    clearTimeout(a), a = setTimeout(() => r.apply(this, n), e);
  };
}
const Cp = {
  login: {
    email: {
      rules: [Ft.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Ft.minLength(6)],
      required: !0
    }
  },
  registration: {
    name: {
      rules: [Ft.minLength(2), Ft.maxLength(50)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Ft.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Ft.strongPassword()],
      required: !0
    },
    confirmPassword: {
      rules: [],
      // Will be set dynamically
      required: !0
    }
  },
  contact: {
    name: {
      rules: [Ft.minLength(2), Ft.maxLength(100)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Ft.email()],
      required: !0,
      trim: !0
    },
    phone: {
      rules: [Ft.phoneNumber()],
      required: !1,
      trim: !0
    },
    message: {
      rules: [Ft.minLength(10), Ft.maxLength(1e3)],
      required: !0,
      trim: !0
    }
  }
};
function Du(r, e) {
  e("homeClick");
}
var ju = /* @__PURE__ */ v('<span class="mr-1 text-base"> </span>'), Ru = /* @__PURE__ */ v('<li aria-hidden="true"> </li>'), Nu = /* @__PURE__ */ v('<li><button aria-label="Go to home"><!> </button></li> <!>', 1), qu = /* @__PURE__ */ v('<span aria-hidden="true"> </span>'), Ou = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), Bu = /* @__PURE__ */ v('<span aria-current="page"><!> </span>'), Fu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), Hu = /* @__PURE__ */ v("<a><!> </a>"), Vu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), Gu = /* @__PURE__ */ v("<button><!> </button>"), Uu = /* @__PURE__ */ v('<li aria-hidden="true"> </li>'), Yu = /* @__PURE__ */ v('<li class="flex items-center"><!></li> <!>', 1), Wu = /* @__PURE__ */ v('<nav aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><!> <!></ol></nav>');
const Xu = {
  hash: "svelte-1ozmnrq",
  code: `
	/* Terminal glow effects */.terminal .breadcrumb-item:hover {text-shadow:0 0 5px var(--terminal-green);}`
};
function Sp(r, e) {
  Ke(e, !0), Je(r, Xu);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "separator", 3, "chevron"), d = s(e, "showHome", 3, !0), c = s(e, "homeIcon", 3, "🏠"), g = s(e, "homeLabel", 3, "Home"), w = s(e, "maxItems", 3, 5), N = s(e, "class", 3, ""), h = zt(), P = {
    default: {
      container: "text-gray-400",
      item: "text-gray-400 hover:text-white",
      activeItem: "text-white",
      separator: "text-gray-600",
      home: "text-gray-400 hover:text-white"
    },
    glass: {
      container: "text-white/60",
      item: "text-white/60 hover:text-white",
      activeItem: "text-white",
      separator: "text-white/40",
      home: "text-white/60 hover:text-white"
    },
    terminal: {
      container: `text-${Pe.terminal.green}/60`,
      item: `text-${Pe.terminal.green}/60 hover:text-${Pe.terminal.green}`,
      activeItem: `text-${Pe.terminal.green}`,
      separator: `text-${Pe.terminal.green}/40`,
      home: `text-${Pe.terminal.green}/60 hover:text-${Pe.terminal.green}`
    }
  }, L = { slash: "/", chevron: "›", arrow: "→", dot: "•" }, A = /* @__PURE__ */ Ee(() => P[n()]), k = /* @__PURE__ */ Ee(() => () => {
    if (a().length <= w())
      return a();
    const j = a()[0], q = a().slice(-(w() - 2));
    return [
      j,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...q
    ];
  });
  function f(j, q) {
    j.disabled || j.id === "ellipsis" || h("navigate", { item: j, index: q });
  }
  const B = /* @__PURE__ */ Ee(() => V("flex items-center space-x-2 text-sm font-mono", t(A).container, N()));
  var $ = Wu(), y = i($), T = i(y);
  {
    var F = (j) => {
      var q = Nu(), O = ke(q), I = i(O);
      I.__click = [Du, h];
      var G = i(I);
      {
        var U = (x) => {
          var S = ju(), W = i(S);
          M(() => re(W, c())), o(x, S);
        };
        b(G, (x) => {
          c() && x(U);
        });
      }
      var R = u(G);
      qe(I, (x, S) => bt?.(x, S), () => ({ strength: 0.1 }));
      var C = u(O, 2);
      {
        var _ = (x) => {
          var S = Ru(), W = i(S);
          M(() => {
            D(S, 1, Q(t(A).separator)), re(W, L[l()]);
          }), o(x, S);
        };
        b(C, (x) => {
          t(k).length > 0 && x(_);
        });
      }
      M(() => {
        D(I, 1, `flex items-center ${t(A).home ?? ""} hover:underline transition-colors`), re(R, ` ${g() ?? ""}`);
      }), o(j, q);
    };
    b(T, (j) => {
      d() && j(F);
    });
  }
  var H = u(T, 2);
  Ye(H, 19, () => t(k), (j) => j.id, (j, q, O) => {
    var I = Yu(), G = ke(I), U = i(G);
    {
      var R = (S) => {
        var W = qu(), X = i(W);
        M(() => {
          D(W, 1, `px-2 ${t(A).separator ?? ""}`), re(X, t(q).label);
        }), o(S, W);
      }, C = (S) => {
        var W = Ae(), X = ke(W);
        {
          var E = (p) => {
            var oe = Bu(), ce = i(oe);
            {
              var ve = (te) => {
                var K = Ou(), ae = i(K);
                M(() => re(ae, t(q).icon)), o(te, K);
              };
              b(ce, (te) => {
                t(q).icon && te(ve);
              });
            }
            var be = u(ce);
            M(() => {
              D(oe, 1, `flex items-center ${t(A).activeItem ?? ""} font-medium`), re(be, ` ${t(q).label ?? ""}`);
            }), o(p, oe);
          }, m = (p) => {
            var oe = Ae(), ce = ke(oe);
            {
              var ve = (te) => {
                var K = Hu();
                K.__click = (J) => {
                  t(q).disabled ? J.preventDefault() : f(t(q), t(O));
                };
                var ae = i(K);
                {
                  var z = (J) => {
                    var Z = Fu(), ie = i(Z);
                    M(() => re(ie, t(q).icon)), o(J, Z);
                  };
                  b(ae, (J) => {
                    t(q).icon && J(z);
                  });
                }
                var ee = u(ae);
                qe(K, (J, Z) => bt?.(J, Z), () => ({ enabled: !t(q).disabled, strength: 0.1 })), M(() => {
                  Ce(K, "href", t(q).href), D(K, 1, `flex items-center ${t(A).item ?? ""} hover:underline transition-colors
							       ${t(q).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), re(ee, ` ${t(q).label ?? ""}`);
                }), o(te, K);
              }, be = (te) => {
                var K = Gu();
                K.__click = () => f(t(q), t(O));
                var ae = i(K);
                {
                  var z = (J) => {
                    var Z = Vu(), ie = i(Z);
                    M(() => re(ie, t(q).icon)), o(J, Z);
                  };
                  b(ae, (J) => {
                    t(q).icon && J(z);
                  });
                }
                var ee = u(ae);
                qe(K, (J, Z) => bt?.(J, Z), () => ({ enabled: !t(q).disabled, strength: 0.1 })), M(() => {
                  K.disabled = t(q).disabled, D(K, 1, `flex items-center ${t(A).item ?? ""} hover:underline transition-colors
							       ${t(q).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), re(ee, ` ${t(q).label ?? ""}`);
                }), o(te, K);
              };
              b(ce, (te) => {
                t(q).href ? te(ve) : te(be, !1);
              });
            }
            o(p, oe);
          };
          b(
            X,
            (p) => {
              t(O) === t(k).length - 1 ? p(E) : p(m, !1);
            },
            !0
          );
        }
        o(S, W);
      };
      b(U, (S) => {
        t(q).id === "ellipsis" ? S(R) : S(C, !1);
      });
    }
    var _ = u(G, 2);
    {
      var x = (S) => {
        var W = Uu(), X = i(W);
        M(() => {
          D(W, 1, Q(t(A).separator)), re(X, L[l()]);
        }), o(S, W);
      };
      b(_, (S) => {
        t(O) < t(k).length - 1 && t(q).id !== "ellipsis" && S(x);
      });
    }
    o(j, I);
  }), M(() => D($, 1, Q(t(B)))), o(r, $), Ze();
}
ut(["click"]);
function Ku(r, e, a, n, l, d, c, g) {
  if (!t(e)) {
    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), a());
    return;
  }
  switch (r.key) {
    case "Escape":
      r.preventDefault(), n();
      break;
    case "ArrowDown":
      r.preventDefault(), Y(l, Math.min(t(l) + 1, t(d).length - 1), !0);
      break;
    case "ArrowUp":
      r.preventDefault(), Y(l, Math.max(t(l) - 1, 0), !0);
      break;
    case "Enter":
      r.preventDefault(), t(l) >= 0 && t(d)()[t(l)] && c(t(d)()[t(l)]);
      break;
    case "ArrowRight":
      t(l) >= 0 && t(d)()[t(l)]?.children?.length && Y(g, t(d)()[t(l)].id, !0);
      break;
    case "ArrowLeft":
      t(g) && Y(g, null);
      break;
  }
}
var Zu = /* @__PURE__ */ v("<div><span>Menu</span> <!></div>"), Qu = /* @__PURE__ */ v("<hr/>"), Ju = (r, e, a) => e(t(a)), $u = (r, e, a) => r.key === "Enter" && e(t(a)), e0 = /* @__PURE__ */ v('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), t0 = /* @__PURE__ */ v("<span> </span>"), r0 = /* @__PURE__ */ v("<span> </span>"), a0 = /* @__PURE__ */ v("<hr/>"), n0 = (r, e, a) => e(t(a)), o0 = (r, e, a) => r.key === "Enter" && e(t(a)), i0 = /* @__PURE__ */ v('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), l0 = /* @__PURE__ */ v("<span> </span>"), s0 = /* @__PURE__ */ v("<span> </span>"), d0 = /* @__PURE__ */ v('<div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <!></div>'), c0 = /* @__PURE__ */ v('<div role="menu"><div class="py-1"></div></div>'), v0 = /* @__PURE__ */ v('<div class="relative"><div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <div class="flex items-center gap-2 ml-3"><!> <!></div></div> <!></div>'), u0 = /* @__PURE__ */ v('<div role="menu"><div class="py-1"></div></div>'), f0 = /* @__PURE__ */ v('<div><div class="cursor-pointer" tabindex="0" role="button" aria-haspopup="menu"><!></div> <!></div>');
const b0 = {
  hash: "svelte-i7uadz",
  code: `
	/* Ensure submenus don't get clipped */.relative {z-index:auto;}

	/* Custom focus styles */[role='menuitem'].svelte-i7uadz:focus {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:-2px;}

	/* Smooth transitions for submenus */div[role='menu'].svelte-i7uadz {
		animation: svelte-i7uadz-menuFadeIn 0.15s ease-out;}

	@keyframes svelte-i7uadz-menuFadeIn {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(-10px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}`
};
function Ep(r, e) {
  Ke(e, !0), Je(r, b0);
  let a = s(e, "openMode", 3, "click"), n = s(e, "placement", 3, "bottom-start"), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), c = s(e, "closeOnClick", 3, !0), g = s(e, "showIcons", 3, !0), w = s(e, "showKeyboards", 3, !0), N = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "openMode",
    "placement",
    "variant",
    "size",
    "closeOnClick",
    "showIcons",
    "showKeyboards",
    "class",
    "children"
  ]);
  const P = zt();
  let L = /* @__PURE__ */ Se(!1), A, k, f = /* @__PURE__ */ Se(null), B = /* @__PURE__ */ Se(-1);
  const $ = `menu-${Math.random().toString(36).substr(2, 9)}`, y = {
    sm: {
      item: "px-3 py-1.5 text-sm",
      icon: "w-4 h-4",
      badge: "text-xs px-1.5 py-0.5",
      keyboard: "text-xs"
    },
    md: {
      item: "px-4 py-2 text-base",
      icon: "w-5 h-5",
      badge: "text-xs px-2 py-1",
      keyboard: "text-sm"
    },
    lg: {
      item: "px-5 py-2.5 text-lg",
      icon: "w-6 h-6",
      badge: "text-sm px-2.5 py-1",
      keyboard: "text-base"
    }
  }, T = {
    glass: {
      menu: "bg-black/20 border-white/10 backdrop-blur-xl text-white",
      item: "hover:bg-white/10 text-white/90",
      itemActive: "bg-white/15 text-white",
      itemDisabled: "text-white/40 cursor-not-allowed",
      separator: "border-white/10",
      badge: "bg-blue-500/30 text-white",
      keyboard: "text-white/60"
    },
    terminal: {
      menu: "bg-black/90 border-terminal-green/30 text-terminal-green",
      item: "hover:bg-terminal-green/20 text-terminal-green",
      itemActive: "bg-terminal-green/30 text-terminal-green",
      itemDisabled: "text-terminal-green/40 cursor-not-allowed",
      separator: "border-terminal-green/20",
      badge: "bg-terminal-green/30 text-terminal-green",
      keyboard: "text-terminal-green/60"
    },
    liquid: {
      menu: "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10 backdrop-blur-xl text-white",
      item: "hover:bg-white/10 text-white",
      itemActive: "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white",
      itemDisabled: "text-white/40 cursor-not-allowed",
      separator: "border-white/10",
      badge: "bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white",
      keyboard: "text-white/60"
    }
  }, F = y[d()], H = T[l()], j = /* @__PURE__ */ Ee(() => () => {
    const p = [];
    function oe(ce) {
      for (const ve of ce)
        ve.separator || p.push(ve), ve.children && oe(ve.children);
    }
    return oe(e.items), p;
  });
  function q() {
    Y(L, !t(L)), t(L) && (Y(B, -1), Y(f, null)), P("toggle", { isOpen: t(L) });
  }
  function O() {
    Y(L, !1), Y(f, null), Y(B, -1), P("close");
  }
  function I(p) {
    p.disabled || (p.children?.length ? Y(f, t(f) === p.id ? null : p.id, !0) : (p.onclick && p.onclick(), P("select", { item: p }), c() && O()));
  }
  function G(p) {
    a() === "hover" && p.children?.length && Y(f, p.id, !0);
  }
  function U() {
    a() === "hover" && Y(f, null);
  }
  function R(p) {
    A && !A.contains(p.target) && O();
  }
  yt(() => (document.addEventListener("click", R), () => document.removeEventListener("click", R)));
  function C() {
    return {
      "bottom-start": "top-full left-0 mt-1",
      "bottom-end": "top-full right-0 mt-1",
      "top-start": "bottom-full left-0 mb-1",
      "top-end": "bottom-full right-0 mb-1",
      "right-start": "left-full top-0 ml-1",
      "left-start": "right-full top-0 mr-1"
    }[n()];
  }
  var _ = f0();
  Qe(_, (p) => ({ class: p, ...h }), [() => V("relative inline-block", N())], void 0, "svelte-i7uadz");
  var x = i(_);
  x.__click = function(...p) {
    (a() === "click" ? q : void 0)?.apply(this, p);
  }, x.__keydown = [
    Ku,
    L,
    q,
    O,
    B,
    j,
    I,
    f
  ];
  var S = i(x);
  {
    var W = (p) => {
      var oe = Ae(), ce = ke(oe);
      it(ce, () => e.children.trigger), o(p, oe);
    }, X = (p) => {
      var oe = Zu(), ce = u(i(oe), 2);
      {
        let ve = /* @__PURE__ */ Ee(() => V("transition-transform duration-200", t(L) && "rotate-180"));
        Xr(ce, {
          size: 16,
          get class() {
            return t(ve);
          }
        });
      }
      M((ve) => D(oe, 1, ve), [
        () => Q(V("flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200", H.item, t(L) && H.itemActive))
      ]), o(p, oe);
    };
    b(S, (p) => {
      e.children?.trigger ? p(W) : p(X, !1);
    });
  }
  at(x, (p) => k = p, () => k);
  var E = u(x, 2);
  {
    var m = (p) => {
      var oe = u0(), ce = i(oe);
      Ye(ce, 23, () => e.items, (ve) => ve.id, (ve, be) => {
        var te = Ae(), K = ke(te);
        {
          var ae = (ee) => {
            var J = Qu();
            M((Z) => D(J, 1, Z), [() => Q(V("my-1 border-t", H.separator))]), o(ee, J);
          }, z = (ee) => {
            var J = v0(), Z = i(J);
            Z.__click = [Ju, I, be], Z.__keydown = [$u, I, be];
            var ie = i(Z), ne = i(ie);
            {
              var de = (xe) => {
                var Ie = e0();
                M((Re) => D(Ie, 1, Re), [() => Q(V("flex-shrink-0", F.icon))]), o(xe, Ie);
              };
              b(ne, (xe) => {
                g() && t(be).icon && xe(de);
              });
            }
            var ge = u(ne, 2), se = i(ge), ue = u(ge, 2);
            {
              var le = (xe) => {
                var Ie = t0(), Re = i(Ie);
                M(
                  (me) => {
                    D(Ie, 1, me), re(Re, t(be).badge);
                  },
                  [
                    () => Q(V("inline-flex items-center rounded-full font-medium", F.badge, H.badge))
                  ]
                ), o(xe, Ie);
              };
              b(ue, (xe) => {
                t(be).badge && xe(le);
              });
            }
            var fe = u(ie, 2), pe = i(fe);
            {
              var Te = (xe) => {
                var Ie = r0(), Re = i(Ie);
                M(
                  (me) => {
                    D(Ie, 1, me), re(Re, t(be).keyboard);
                  },
                  [
                    () => Q(V("opacity-60 font-mono", F.keyboard, H.keyboard))
                  ]
                ), o(xe, Ie);
              };
              b(pe, (xe) => {
                w() && t(be).keyboard && xe(Te);
              });
            }
            var Ne = u(pe, 2);
            {
              var He = (xe) => {
                Nr(xe, { size: 16, class: "opacity-60" });
              };
              b(Ne, (xe) => {
                t(be).children?.length && xe(He);
              });
            }
            var Be = u(Z, 2);
            {
              var _e = (xe) => {
                var Ie = c0(), Re = i(Ie);
                Ye(Re, 21, () => t(be).children, (me) => me.id, (me, we) => {
                  var Me = Ae(), Le = ke(Me);
                  {
                    var ye = (ze) => {
                      var De = a0();
                      M((Oe) => D(De, 1, Oe), [() => Q(V("my-1 border-t", H.separator))]), o(ze, De);
                    }, he = (ze) => {
                      var De = d0();
                      De.__click = [n0, I, we], De.__keydown = [o0, I, we];
                      var Oe = i(De), Ge = i(Oe);
                      {
                        var Ue = (Fe) => {
                          var We = i0();
                          M((ot) => D(We, 1, ot), [() => Q(V("flex-shrink-0", F.icon))]), o(Fe, We);
                        };
                        b(Ge, (Fe) => {
                          g() && t(we).icon && Fe(Ue);
                        });
                      }
                      var tt = u(Ge, 2), et = i(tt), rt = u(tt, 2);
                      {
                        var $e = (Fe) => {
                          var We = l0(), ot = i(We);
                          M(
                            (wt) => {
                              D(We, 1, wt), re(ot, t(we).badge);
                            },
                            [
                              () => Q(V("inline-flex items-center rounded-full font-medium", F.badge, H.badge))
                            ]
                          ), o(Fe, We);
                        };
                        b(rt, (Fe) => {
                          t(we).badge && Fe($e);
                        });
                      }
                      var Ve = u(Oe, 2);
                      {
                        var je = (Fe) => {
                          var We = s0(), ot = i(We);
                          M(
                            (wt) => {
                              D(We, 1, wt), re(ot, t(we).keyboard);
                            },
                            [
                              () => Q(V("opacity-60 font-mono ml-3", F.keyboard, H.keyboard))
                            ]
                          ), o(Fe, We);
                        };
                        b(Ve, (Fe) => {
                          w() && t(we).keyboard && Fe(je);
                        });
                      }
                      M(
                        (Fe) => {
                          D(De, 1, Fe, "svelte-i7uadz"), Ce(De, "aria-disabled", t(we).disabled), Ce(De, "tabindex", t(we).disabled ? -1 : 0), re(et, t(we).label);
                        },
                        [
                          () => Q(V("flex items-center justify-between cursor-pointer transition-all duration-150", F.item, t(we).disabled ? H.itemDisabled : H.item))
                        ]
                      ), o(ze, De);
                    };
                    b(Le, (ze) => {
                      t(we).separator ? ze(ye) : ze(he, !1);
                    });
                  }
                  o(me, Me);
                }), qe(Ie, (me, we) => kt?.(me, we), () => ({ intensity: "medium" })), M((me) => D(Ie, 1, me, "svelte-i7uadz"), [
                  () => Q(V("absolute z-10 min-w-[180px] rounded-lg border shadow-lg", "left-full top-0 ml-1", H.menu))
                ]), o(xe, Ie);
              };
              b(Be, (xe) => {
                t(be).children?.length && t(f) === t(be).id && xe(_e);
              });
            }
            M(
              (xe) => {
                D(Z, 1, xe, "svelte-i7uadz"), Ce(Z, "aria-disabled", t(be).disabled), Ce(Z, "tabindex", t(be).disabled ? -1 : 0), re(se, t(be).label);
              },
              [
                () => Q(V("flex items-center justify-between cursor-pointer transition-all duration-150", F.item, t(be).disabled ? H.itemDisabled : H.item, t(B) === t(j)().indexOf(t(be)) && !t(be).disabled && H.itemActive, t(f) === t(be).id && H.itemActive))
              ]
            ), Ot("mouseenter", Z, () => G(t(be))), Ot("mouseleave", Z, U), o(ee, J);
          };
          b(K, (ee) => {
            t(be).separator ? ee(ae) : ee(z, !1);
          });
        }
        o(ve, te);
      }), qe(oe, (ve, be) => kt?.(ve, be), () => ({ intensity: "medium" })), M(
        (ve) => {
          Ce(oe, "id", $), D(oe, 1, ve, "svelte-i7uadz");
        },
        [
          () => Q(V("absolute z-50 min-w-[200px] rounded-lg border shadow-lg", C(), H.menu))
        ]
      ), o(p, oe);
    };
    b(E, (p) => {
      t(L) && p(m);
    });
  }
  at(_, (p) => A = p, () => A), M(() => {
    Ce(x, "aria-expanded", t(L)), Ce(x, "aria-controls", $);
  }), Ot("mouseenter", x, function(...p) {
    (a() === "hover" ? q : void 0)?.apply(this, p);
  }), Ot("mouseleave", x, function(...p) {
    (a() === "hover" ? () => setTimeout(O, 150) : void 0)?.apply(this, p);
  }), o(r, _), Ze();
}
ut(["click", "keydown"]);
function g0(r, e, a) {
  e("brandClick"), Y(a, !1);
}
function m0(r, e, a) {
  Y(e, !t(e)), a("mobileToggle", t(e));
}
var h0 = /* @__PURE__ */ v('<img alt="Logo" class="h-8 w-auto"/>'), p0 = /* @__PURE__ */ v(`<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"> </div>`), x0 = /* @__PURE__ */ v('<span class="text-xl font-bold tracking-tight"> </span>'), w0 = /* @__PURE__ */ v('<div class="flex items-center"><button><!> <!></button></div>'), _0 = (
  // Handle scroll for backdrop effects
  // Click outside to close dropdowns
  (r, e, a) => e(t(a))
), y0 = (r, e, a) => e(r, t(a)), k0 = /* @__PURE__ */ v('<span class="mr-2 text-lg"> </span>'), C0 = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), S0 = (r, e, a) => e(t(a), r), E0 = /* @__PURE__ */ v('<span class="mr-2"> </span>'), T0 = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), M0 = /* @__PURE__ */ v('<a role="menuitem"><!> <!></a>'), A0 = /* @__PURE__ */ v('<div role="menu"></div>'), z0 = /* @__PURE__ */ v('<button aria-haspopup="true"><!> <!> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!>', 1), I0 = (r, e, a) => e(t(a), r), P0 = (r, e, a) => e(r, t(a)), L0 = /* @__PURE__ */ v('<span class="mr-2 text-lg"> </span>'), D0 = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), j0 = /* @__PURE__ */ nr('<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), R0 = /* @__PURE__ */ v("<a><!> <!> <!></a>"), N0 = /* @__PURE__ */ v('<div class="relative"><!></div>'), q0 = /* @__PURE__ */ nr('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), O0 = /* @__PURE__ */ nr('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'), B0 = (r, e, a) => e(t(a)), F0 = /* @__PURE__ */ v('<span class="mr-3 text-lg"> </span>'), H0 = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), V0 = (r, e, a) => e(t(a), r), G0 = /* @__PURE__ */ v('<span class="mr-3"> </span>'), U0 = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), Y0 = /* @__PURE__ */ v("<a><!> <!></a>"), W0 = /* @__PURE__ */ v('<div class="pl-6 mt-2 space-y-1"></div>'), X0 = /* @__PURE__ */ v('<div><button><span class="flex items-center"><!> <!></span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), K0 = (r, e, a) => e(t(a), r), Z0 = /* @__PURE__ */ v('<span class="mr-3 text-lg"> </span>'), Q0 = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), J0 = /* @__PURE__ */ nr('<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), $0 = /* @__PURE__ */ v("<a><!> <!> <!></a>"), ef = /* @__PURE__ */ v('<div><div class="px-2 pt-2 pb-3 space-y-1"></div></div>'), tf = /* @__PURE__ */ v('<nav aria-label="Main navigation"><div><!> <div class="hidden md:flex items-center space-x-1"></div> <div class="md:hidden"><button aria-label="Toggle mobile menu"><!></button></div></div> <!></nav>');
const rf = {
  hash: "svelte-14x41x6",
  code: `
	/* Terminal glow effects */.terminal .navbar-brand:hover {text-shadow:0 0 10px var(--terminal-green);}.terminal .nav-item:hover {box-shadow:0 0 5px var(--terminal-green-glow);}`
};
function Tp(r, e) {
  Ke(e, !0), Je(r, rf);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "glass"), l = s(e, "position", 3, "static"), d = s(e, "backdrop", 3, !0), c = s(e, "logoText", 3, "TULIO"), g = s(e, "showBrand", 3, !0), w = s(e, "compact", 3, !1), N = s(e, "transparent", 3, !1), h = s(e, "activeItem", 3, ""), P = s(e, "class", 3, ""), L = zt();
  let A, k = /* @__PURE__ */ Se(!1), f = /* @__PURE__ */ Se(lt(/* @__PURE__ */ new Set())), B = /* @__PURE__ */ Se(!1);
  const $ = {
    default: {
      nav: "bg-gray-900/95 border-gray-700",
      item: "text-gray-300 hover:text-white hover:bg-gray-800",
      activeItem: "text-white bg-gray-700",
      dropdown: "bg-gray-900 border-gray-700",
      brand: "text-white",
      mobileButton: "text-gray-300 hover:text-white"
    },
    glass: {
      nav: "bg-white/10 border-white/20 backdrop-blur-xl",
      item: "text-white/80 hover:text-white hover:bg-white/10",
      activeItem: "text-white bg-white/20",
      dropdown: "bg-white/15 border-white/25 backdrop-blur-xl",
      brand: "text-white",
      mobileButton: "text-white/80 hover:text-white"
    },
    terminal: {
      nav: `bg-black/90 border-${Pe.terminal.green}`,
      item: `text-${Pe.terminal.green}/80 hover:text-${Pe.terminal.green} hover:bg-${Pe.terminal.green}/10`,
      activeItem: `text-black bg-${Pe.terminal.green}`,
      dropdown: `bg-black/95 border-${Pe.terminal.green}`,
      brand: `text-${Pe.terminal.green}`,
      mobileButton: `text-${Pe.terminal.green}/80 hover:text-${Pe.terminal.green}`
    }
  }, y = /* @__PURE__ */ Ee(() => $[n()]);
  function T(m, p) {
    if (!m.disabled) {
      if (m.children) {
        const oe = new Set(t(f));
        oe.has(m.id) ? oe.delete(m.id) : oe.add(m.id), Y(f, oe, !0);
        return;
      }
      if (Y(k, !1), L("navigate", { item: m, href: m.href }), m.external && m.href) {
        window.open(m.href, "_blank", "noopener,noreferrer"), p?.preventDefault();
        return;
      }
    }
  }
  function F() {
    Y(f, /* @__PURE__ */ new Set(), !0);
  }
  function H(m, p) {
    m.key === "Enter" || m.key === " " ? (m.preventDefault(), T(p)) : m.key === "Escape" && F();
  }
  yt(() => {
    function m() {
      Y(B, window.scrollY > 10);
    }
    if (l() === "fixed" || l() === "sticky")
      return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m);
  }), yt(() => {
    function m(p) {
      A && !A.contains(p.target) && F();
    }
    return document.addEventListener("click", m), () => document.removeEventListener("click", m);
  });
  const j = /* @__PURE__ */ Ee(() => V("w-full border-b transition-all duration-300", "font-mono", t(y).nav, l() === "fixed" && "fixed top-0 left-0 z-50", l() === "sticky" && "sticky top-0 z-40", d() && "backdrop-blur-xl", N() && !t(B) && "bg-transparent border-transparent", w() ? "py-2" : "py-4", P())), q = /* @__PURE__ */ Ee(() => V("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "flex items-center justify-between", w() ? "h-12" : "h-16"));
  var O = tf(), I = i(O), G = i(I);
  {
    var U = (m) => {
      var p = w0(), oe = i(p);
      oe.__click = [g0, L, k];
      var ce = i(oe);
      {
        var ve = (ae) => {
          var z = h0();
          M(() => Ce(z, "src", e.logo)), o(ae, z);
        }, be = (ae) => {
          var z = p0(), ee = i(z);
          M((J) => re(ee, J), [() => c().charAt(0)]), o(ae, z);
        };
        b(ce, (ae) => {
          e.logo ? ae(ve) : ae(be, !1);
        });
      }
      var te = u(ce, 2);
      {
        var K = (ae) => {
          var z = x0(), ee = i(z);
          M(() => re(ee, c())), o(ae, z);
        };
        b(te, (ae) => {
          c() && ae(K);
        });
      }
      qe(oe, (ae, z) => bt?.(ae, z), () => ({ strength: 0.1 })), M(() => D(oe, 1, `flex items-center space-x-3 ${t(y).brand ?? ""} hover:opacity-80 transition-opacity`)), o(m, p);
    };
    b(G, (m) => {
      g() && m(U);
    });
  }
  var R = u(G, 2);
  Ye(R, 21, a, (m) => m.id, (m, p) => {
    var oe = N0(), ce = i(oe);
    {
      var ve = (te) => {
        var K = z0(), ae = ke(K);
        ae.__click = [_0, T, p], ae.__keydown = [y0, H, p];
        var z = i(ae);
        {
          var ee = (se) => {
            var ue = k0(), le = i(ue);
            M(() => re(le, t(p).icon)), o(se, ue);
          };
          b(z, (se) => {
            t(p).icon && se(ee);
          });
        }
        var J = u(z), Z = u(J);
        {
          var ie = (se) => {
            var ue = C0(), le = i(ue);
            M(() => re(le, t(p).badge)), o(se, ue);
          };
          b(Z, (se) => {
            t(p).badge && se(ie);
          });
        }
        var ne = u(Z, 2);
        qe(ae, (se, ue) => bt?.(se, ue), () => ({ enabled: !t(p).disabled, strength: 0.1 }));
        var de = u(ae, 2);
        {
          var ge = (se) => {
            var ue = A0();
            Ye(ue, 21, () => t(p).children, (le) => le.id, (le, fe) => {
              var pe = M0();
              pe.__click = [S0, T, fe];
              var Te = i(pe);
              {
                var Ne = (xe) => {
                  var Ie = E0(), Re = i(Ie);
                  M(() => re(Re, t(fe).icon)), o(xe, Ie);
                };
                b(Te, (xe) => {
                  t(fe).icon && xe(Ne);
                });
              }
              var He = u(Te), Be = u(He);
              {
                var _e = (xe) => {
                  var Ie = T0(), Re = i(Ie);
                  M(() => re(Re, t(fe).badge)), o(xe, Ie);
                };
                b(Be, (xe) => {
                  t(fe).badge && xe(_e);
                });
              }
              qe(pe, (xe, Ie) => bt?.(xe, Ie), () => ({ enabled: !t(fe).disabled, strength: 0.1 })), M(() => {
                Ce(pe, "href", t(fe).href), D(pe, 1, `block px-4 py-2 text-sm ${t(y).item ?? ""} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       ${t(fe).disabled ? "opacity-50 cursor-not-allowed" : ""}`), re(He, ` ${t(fe).label ?? ""} `);
              }), o(le, pe);
            }), qe(ue, (le, fe) => kt?.(le, fe), () => ({ blur: "xl", opacity: "strong" })), M(() => D(ue, 1, `absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       ${t(y).dropdown ?? ""}`)), nt(1, ue, () => gt, () => ({ direction: "up", duration: 200 })), o(se, ue);
          };
          b(de, (se) => {
            t(f).has(t(p).id) && se(ge);
          });
        }
        M(
          (se, ue) => {
            D(ae, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(p).id === h() ? t(y).activeItem : t(y).item) ?? ""}
							       ${t(p).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ae.disabled = t(p).disabled, Ce(ae, "aria-expanded", se), re(J, ` ${t(p).label ?? ""} `), D(ne, 0, `ml-1 w-4 h-4 transition-transform duration-200
								       ${ue ?? ""}`);
          },
          [
            () => t(f).has(t(p).id),
            () => t(f).has(t(p).id) ? "rotate-180" : ""
          ]
        ), o(te, K);
      }, be = (te) => {
        var K = R0();
        K.__click = [I0, T, p], K.__keydown = [P0, H, p];
        var ae = i(K);
        {
          var z = (de) => {
            var ge = L0(), se = i(ge);
            M(() => re(se, t(p).icon)), o(de, ge);
          };
          b(ae, (de) => {
            t(p).icon && de(z);
          });
        }
        var ee = u(ae), J = u(ee);
        {
          var Z = (de) => {
            var ge = D0(), se = i(ge);
            M(() => re(se, t(p).badge)), o(de, ge);
          };
          b(J, (de) => {
            t(p).badge && de(Z);
          });
        }
        var ie = u(J, 2);
        {
          var ne = (de) => {
            var ge = j0();
            o(de, ge);
          };
          b(ie, (de) => {
            t(p).external && de(ne);
          });
        }
        qe(K, (de, ge) => bt?.(de, ge), () => ({ enabled: !t(p).disabled, strength: 0.1 })), M(() => {
          Ce(K, "href", t(p).href), D(K, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(p).id === h() ? t(y).activeItem : t(y).item) ?? ""}
							       ${t(p).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), Ce(K, "aria-current", t(p).id === h() ? "page" : void 0), re(ee, ` ${t(p).label ?? ""} `);
        }), o(te, K);
      };
      b(ce, (te) => {
        t(p).children ? te(ve) : te(be, !1);
      });
    }
    o(m, oe);
  });
  var C = u(R, 2), _ = i(C);
  _.__click = [m0, k, L];
  var x = i(_);
  {
    var S = (m) => {
      var p = q0();
      o(m, p);
    }, W = (m) => {
      var p = O0();
      o(m, p);
    };
    b(x, (m) => {
      t(k) ? m(S) : m(W, !1);
    });
  }
  qe(_, (m, p) => bt?.(m, p), () => ({ strength: 0.15 }));
  var X = u(I, 2);
  {
    var E = (m) => {
      var p = ef(), oe = i(p);
      Ye(oe, 21, a, (ce) => ce.id, (ce, ve) => {
        var be = Ae(), te = ke(be);
        {
          var K = (z) => {
            var ee = X0(), J = i(ee);
            J.__click = [B0, T, ve];
            var Z = i(J), ie = i(Z);
            {
              var ne = (pe) => {
                var Te = F0(), Ne = i(Te);
                M(() => re(Ne, t(ve).icon)), o(pe, Te);
              };
              b(ie, (pe) => {
                t(ve).icon && pe(ne);
              });
            }
            var de = u(ie), ge = u(de);
            {
              var se = (pe) => {
                var Te = H0(), Ne = i(Te);
                M(() => re(Ne, t(ve).badge)), o(pe, Te);
              };
              b(ge, (pe) => {
                t(ve).badge && pe(se);
              });
            }
            var ue = u(Z, 2), le = u(J, 2);
            {
              var fe = (pe) => {
                var Te = W0();
                Ye(Te, 21, () => t(ve).children, (Ne) => Ne.id, (Ne, He) => {
                  var Be = Y0();
                  Be.__click = [V0, T, He];
                  var _e = i(Be);
                  {
                    var xe = (we) => {
                      var Me = G0(), Le = i(Me);
                      M(() => re(Le, t(He).icon)), o(we, Me);
                    };
                    b(_e, (we) => {
                      t(He).icon && we(xe);
                    });
                  }
                  var Ie = u(_e), Re = u(Ie);
                  {
                    var me = (we) => {
                      var Me = U0(), Le = i(Me);
                      M(() => re(Le, t(He).badge)), o(we, Me);
                    };
                    b(Re, (we) => {
                      t(He).badge && we(me);
                    });
                  }
                  M(() => {
                    Ce(Be, "href", t(He).href), D(Be, 1, `flex items-center px-3 py-2 rounded-md text-sm
											       ${t(y).item ?? ""} hover:bg-white/10 transition-colors
											       ${t(He).disabled ? "opacity-50 cursor-not-allowed" : ""}`), re(Ie, ` ${t(He).label ?? ""} `);
                  }), o(Ne, Be);
                }), nt(1, Te, () => gt, () => ({ direction: "down", duration: 150 })), o(pe, Te);
              };
              b(le, (pe) => {
                t(f).has(t(ve).id) && pe(fe);
              });
            }
            M(
              (pe, Te) => {
                D(J, 1, `w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       ${(t(ve).id === h() ? t(y).activeItem : t(y).item) ?? ""}
								       ${t(ve).disabled ? "opacity-50 cursor-not-allowed" : ""}`), J.disabled = t(ve).disabled, Ce(J, "aria-expanded", pe), re(de, ` ${t(ve).label ?? ""} `), D(ue, 0, `w-5 h-5 transition-transform duration-200
									       ${Te ?? ""}`);
              },
              [
                () => t(f).has(t(ve).id),
                () => t(f).has(t(ve).id) ? "rotate-180" : ""
              ]
            ), o(z, ee);
          }, ae = (z) => {
            var ee = $0();
            ee.__click = [K0, T, ve];
            var J = i(ee);
            {
              var Z = (ue) => {
                var le = Z0(), fe = i(le);
                M(() => re(fe, t(ve).icon)), o(ue, le);
              };
              b(J, (ue) => {
                t(ve).icon && ue(Z);
              });
            }
            var ie = u(J), ne = u(ie);
            {
              var de = (ue) => {
                var le = Q0(), fe = i(le);
                M(() => re(fe, t(ve).badge)), o(ue, le);
              };
              b(ne, (ue) => {
                t(ve).badge && ue(de);
              });
            }
            var ge = u(ne, 2);
            {
              var se = (ue) => {
                var le = J0();
                o(ue, le);
              };
              b(ge, (ue) => {
                t(ve).external && ue(se);
              });
            }
            M(() => {
              Ce(ee, "href", t(ve).href), D(ee, 1, `flex items-center px-3 py-2 rounded-md text-base font-medium
							       ${(t(ve).id === h() ? t(y).activeItem : t(y).item) ?? ""}
							       ${t(ve).disabled ? "opacity-50 cursor-not-allowed" : ""}`), Ce(ee, "aria-current", t(ve).id === h() ? "page" : void 0), re(ie, ` ${t(ve).label ?? ""} `);
            }), o(z, ee);
          };
          b(te, (z) => {
            t(ve).children ? z(K) : z(ae, !1);
          });
        }
        o(ce, be);
      }), M(() => D(p, 1, `md:hidden border-t ${t(y).nav ?? ""}`)), nt(1, p, () => gt, () => ({ direction: "down", duration: 200 })), o(m, p);
    };
    b(X, (m) => {
      t(k) && m(E);
    });
  }
  at(O, (m) => A = m, () => A), qe(O, (m, p) => kt?.(m, p), () => d() ? { blur: "xl", opacity: "medium" } : void 0), M(() => {
    D(O, 1, Q(t(j))), D(I, 1, Q(t(q))), D(_, 1, `p-2 rounded-md ${t(y).mobileButton ?? ""} hover:bg-white/10 transition-colors`), Ce(_, "aria-expanded", t(k));
  }), o(r, O), Ze();
}
ut(["click", "keydown"]);
function oa(r) {
  if (typeof window > "u" || typeof document > "u") return "";
  const e = document.createElement("template");
  e.innerHTML = String(r);
  const a = (n) => {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const l = n, d = l.tagName.toLowerCase();
      if (d === "script" || d === "style") {
        l.remove();
        return;
      }
      for (const c of Array.from(l.attributes)) {
        const g = c.name.toLowerCase(), w = c.value;
        if (g.startsWith("on")) {
          l.removeAttribute(c.name);
          continue;
        }
        if ((g === "href" || g === "src") && /^\s*javascript:/i.test(w)) {
          l.removeAttribute(c.name);
          continue;
        }
      }
    }
    for (const l of Array.from(n.childNodes)) a(l);
  };
  return a(e.content), e.innerHTML;
}
var af = /* @__PURE__ */ v('<div class="relative"><!> <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">🔍</button></div>'), nf = /* @__PURE__ */ v('<span class="text-sm text-gray-400"> </span>'), of = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><!> <!></div> <div class="flex items-center gap-2"><!></div></div>'), lf = (r, e) => {
  const a = r.target;
  e(a.checked);
}, sf = /* @__PURE__ */ v('<th><input type="checkbox" class="rounded bg-transparent border-current"/></th>'), df = (r, e, a) => t(e).sortable && a(t(e)), cf = /* @__PURE__ */ v('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), vf = /* @__PURE__ */ v('<th><div class="flex items-center gap-2"><span> </span> <!></div></th>'), uf = /* @__PURE__ */ v("<th>Actions</th>"), ff = /* @__PURE__ */ v('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), bf = /* @__PURE__ */ v('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), gf = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, mf = (r) => r.stopPropagation(), hf = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded bg-transparent border-current"/></td>'), pf = (r, e, a, n, l) => e() && t(a).editable && n(t(l), t(a)), xf = (r, e, a) => {
  r.key === "Enter" && e(), r.key === "Escape" && a();
}, wf = /* @__PURE__ */ v('<input class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"/>'), _f = /* @__PURE__ */ v("<td><!></td>"), yf = /* @__PURE__ */ v('<span class="mr-1"> </span>'), kf = /* @__PURE__ */ v("<!> ", 1), Cf = /* @__PURE__ */ v('<td><div class="flex items-center gap-1"></div></td>'), Sf = /* @__PURE__ */ v("<tr><!><!><!></tr>"), Ef = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><span class="text-sm text-gray-400"> </span></div> <div class="flex items-center gap-2"><!> <!> <!></div></div>'), Tf = /* @__PURE__ */ v('<div><!> <div class="overflow-auto"><table class="w-full"><thead><tr><!><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Mf = {
  hash: "svelte-23n5dg",
  code: `
	/* Terminal glow effects */.terminal .data-grid:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function Mp(r, e) {
  Ke(e, !0), Je(r, Mf);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), c = s(e, "loading", 3, !1);
  s(e, "virtualScrolling", 3, !1), s(e, "rowHeight", 3, 60);
  const g = s(e, "maxHeight", 3, "600px"), w = s(e, "sortBy", 3, ""), N = s(e, "sortOrder", 3, "asc"), h = s(e, "filters", 19, () => []), P = s(e, "searchable", 3, !0), L = s(e, "searchPlaceholder", 3, "Search..."), A = s(e, "selectable", 3, !1), k = s(e, "multiSelect", 3, !1), f = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), B = s(e, "editable", 3, !1), $ = s(e, "pagination", 3, !0), y = s(e, "pageSize", 3, 10), T = s(e, "currentPage", 3, 1), F = s(e, "stickyHeader", 3, !0);
  s(e, "resizableColumns", 3, !1), s(e, "reorderableColumns", 3, !1);
  const H = s(e, "exportable", 3, !1), j = s(e, "actions", 19, () => []), q = s(e, "emptyMessage", 3, "No data available"), O = s(e, "class", 3, ""), I = zt();
  let G = /* @__PURE__ */ Se("");
  const U = lt(h());
  let R = /* @__PURE__ */ Se(lt(w())), C = /* @__PURE__ */ Se(lt(N())), _ = /* @__PURE__ */ Se(lt(f())), x = /* @__PURE__ */ Se(null), S = /* @__PURE__ */ Se("");
  const W = {
    default: {
      container: "bg-gray-900 border-gray-700",
      header: "bg-gray-800 border-gray-700",
      headerCell: "text-gray-300 border-gray-700",
      row: "border-gray-700 text-white",
      rowHover: "hover:bg-gray-800",
      rowSelected: "bg-blue-600/20",
      cell: "text-gray-100 border-gray-700",
      toolbar: "bg-gray-800 border-gray-700",
      pagination: "bg-gray-800 border-gray-700"
    },
    glass: {
      container: "bg-white/5 backdrop-blur-xl border-white/20",
      header: "bg-white/10 border-white/20",
      headerCell: "text-white/90 border-white/20",
      row: "border-white/10 text-white",
      rowHover: "hover:bg-white/5",
      rowSelected: "bg-white/10",
      cell: "text-white/90 border-white/10",
      toolbar: "bg-white/10 border-white/20",
      pagination: "bg-white/10 border-white/20"
    },
    terminal: {
      container: `bg-black/90 border-${Pe.terminal.green}`,
      header: `bg-${Pe.terminal.green}/10 border-${Pe.terminal.green}`,
      headerCell: `text-${Pe.terminal.green} border-${Pe.terminal.green}/30`,
      row: `border-${Pe.terminal.green}/20 text-${Pe.terminal.green}`,
      rowHover: `hover:bg-${Pe.terminal.green}/5`,
      rowSelected: `bg-${Pe.terminal.green}/10`,
      cell: `text-${Pe.terminal.green}/90 border-${Pe.terminal.green}/20`,
      toolbar: `bg-${Pe.terminal.green}/5 border-${Pe.terminal.green}/30`,
      pagination: `bg-${Pe.terminal.green}/5 border-${Pe.terminal.green}/30`
    }
  }, X = {
    sm: { cell: "px-2 py-1 text-xs", header: "px-2 py-2 text-xs" },
    md: { cell: "px-3 py-2 text-sm", header: "px-3 py-3 text-sm" },
    lg: { cell: "px-4 py-3 text-base", header: "px-4 py-4 text-base" }
  }, E = /* @__PURE__ */ Ee(() => W[l()]), m = /* @__PURE__ */ Ee(() => X[d()]), p = /* @__PURE__ */ Ee(() => () => {
    let ye = n();
    if (t(G).trim()) {
      const he = t(G).toLowerCase();
      ye = ye.filter((ze) => a().some((De) => String(ze[De.key] || "").toLowerCase().includes(he)));
    }
    for (const he of U)
      ye = ye.filter((ze) => {
        const De = ze[he.column];
        switch (he.operator) {
          case "equals":
            return De === he.value;
          case "contains":
            return String(De).toLowerCase().includes(String(he.value).toLowerCase());
          case "startsWith":
            return String(De).toLowerCase().startsWith(String(he.value).toLowerCase());
          case "endsWith":
            return String(De).toLowerCase().endsWith(String(he.value).toLowerCase());
          case "gt":
            return Number(De) > Number(he.value);
          case "lt":
            return Number(De) < Number(he.value);
          case "gte":
            return Number(De) >= Number(he.value);
          case "lte":
            return Number(De) <= Number(he.value);
          default:
            return !0;
        }
      });
    return t(R) && a().find((ze) => ze.key === t(R))?.sortable && ye.sort((ze, De) => {
      const Oe = ze[t(R)], Ge = De[t(R)];
      if (Oe === Ge) return 0;
      const Ue = t(C) === "asc";
      return Oe < Ge ? Ue ? -1 : 1 : Ue ? 1 : -1;
    }), ye;
  }), oe = /* @__PURE__ */ Ee(() => Math.ceil((e.totalRows ?? t(p).length) / y())), ce = /* @__PURE__ */ Ee(() => () => {
    if (!$()) return t(p);
    const ye = (T() - 1) * y();
    return t(p).slice(ye, ye + y());
  }), ve = /* @__PURE__ */ Ee(() => () => {
    const ye = [], he = Math.min(5, t(oe)), ze = Math.max(1, Math.min(t(oe) - (he - 1), T() - Math.floor(he / 2)));
    for (let De = 0; De < he; De++) ye.push(ze + De);
    return ye;
  });
  function be(ye) {
    ye.sortable && (t(R) === ye.key ? Y(C, t(C) === "asc" ? "desc" : "asc", !0) : (Y(R, ye.key, !0), Y(C, "asc")), I("sort", { column: ye.key, order: t(C) }));
  }
  function te() {
    I("search", { query: t(G) });
  }
  function K(ye, he) {
    I("rowClick", { row: ye, index: he });
  }
  function ae(ye, he) {
    k() ? he ? t(_).add(ye.id) : t(_).delete(ye.id) : Y(_, he ? /* @__PURE__ */ new Set([ye.id]) : /* @__PURE__ */ new Set(), !0), Y(_, new Set(t(_)), !0), I("rowSelect", { row: ye, selected: he });
  }
  function z(ye) {
    ye ? Y(_, new Set(t(ce).map((he) => he.id)), !0) : Y(_, /* @__PURE__ */ new Set(), !0), I("selectAll", { selected: ye });
  }
  function ee(ye, he) {
    !B() || !he.editable || (Y(x, { rowId: ye.id, column: he.key }, !0), Y(S, String(ye[he.key] || ""), !0));
  }
  function J() {
    if (!t(x)) return;
    const ye = t(ce).find((Oe) => Oe.id === t(x).rowId);
    if (!ye) return;
    const he = a().find((Oe) => Oe.key === t(x).column);
    if (!he) return;
    const ze = ye[he.key];
    let De = t(S);
    switch (he.type) {
      case "number":
        De = Number(De);
        break;
      case "boolean":
        De = De === "true";
        break;
      case "date":
        De = new Date(De);
        break;
    }
    if (he.validation) {
      const Oe = he.validation(De);
      if (Oe) {
        alert(Oe);
        return;
      }
    }
    I("cellEdit", { row: ye, column: he.key, oldValue: ze, newValue: De }), Y(x, null), Y(S, "");
  }
  function Z() {
    Y(x, null), Y(S, "");
  }
  function ie(ye, he, ze) {
    if (ye.render)
      return ye.render(he, ze, ye);
    if (ye.formatter)
      return ye.formatter(he, ze);
    switch (ye.type) {
      case "boolean":
        return he ? "✓" : "✗";
      case "date":
        return he instanceof Date ? he.toLocaleDateString() : String(he || "");
      case "number":
        return typeof he == "number" ? he.toLocaleString() : String(he || "");
      default:
        return String(he || "");
    }
  }
  const ne = /* @__PURE__ */ Ee(() => t(ce).length > 0 && t(ce).every((ye) => t(_).has(ye.id))), de = /* @__PURE__ */ Ee(() => V("rounded-lg border overflow-hidden font-mono", t(E).container, O()));
  var ge = Tf(), se = i(ge);
  {
    var ue = (ye) => {
      var he = of(), ze = i(he), De = i(ze);
      {
        var Oe = ($e) => {
          var Ve = af(), je = i(Ve);
          Ed(je, {
            get placeholder() {
              return L();
            },
            size: "sm",
            get variant() {
              return l();
            },
            class: "w-64",
            onkeydown: (We) => {
              We.key === "Enter" && te();
            },
            get value() {
              return t(G);
            },
            set value(We) {
              Y(G, We, !0);
            }
          });
          var Fe = u(je, 2);
          Fe.__click = te, o($e, Ve);
        };
        b(De, ($e) => {
          P() && $e(Oe);
        });
      }
      var Ge = u(De, 2);
      {
        var Ue = ($e) => {
          var Ve = nf(), je = i(Ve);
          M(() => re(je, `${t(_).size ?? ""} selected`)), o($e, Ve);
        };
        b(Ge, ($e) => {
          t(_).size > 0 && $e(Ue);
        });
      }
      var tt = u(ze, 2), et = i(tt);
      {
        var rt = ($e) => {
          tr($e, {
            size: "sm",
            get variant() {
              return l();
            },
            onclick: () => I("export", { format: "csv" }),
            children: (Ve, je) => {
              var Fe = St("📥 Export");
              o(Ve, Fe);
            },
            $$slots: { default: !0 }
          });
        };
        b(et, ($e) => {
          H() && $e(rt);
        });
      }
      M(($e) => D(he, 1, $e), [
        () => Q(V("px-4 py-3 border-b flex items-center justify-between", t(E).toolbar))
      ]), o(ye, he);
    };
    b(se, (ye) => {
      (P() || H() || j().length > 0) && ye(ue);
    });
  }
  var le = u(se, 2), fe = i(le), pe = i(fe), Te = i(pe), Ne = i(Te);
  {
    var He = (ye) => {
      var he = sf(), ze = i(he);
      ze.__change = [lf, z], M(
        (De) => {
          D(he, 1, De), Zt(ze, t(ne));
        },
        [
          () => Q(V(t(m).header, t(E).headerCell, "w-12"))
        ]
      ), o(ye, he);
    };
    b(Ne, (ye) => {
      A() && ye(He);
    });
  }
  var Be = u(Ne);
  Ye(Be, 17, a, (ye) => ye.key, (ye, he) => {
    var ze = vf();
    ze.__click = [df, he, be];
    var De = i(ze), Oe = i(De), Ge = i(Oe), Ue = u(Oe, 2);
    {
      var tt = (et) => {
        var rt = cf(), $e = i(rt), Ve = u($e, 2);
        M(
          (je, Fe) => {
            D($e, 0, je), D(Ve, 0, Fe);
          },
          [
            () => Q(V("w-3 h-3 transition-colors", t(R) === t(he).key && t(C) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => Q(V("w-3 h-3 -mt-1 transition-colors", t(R) === t(he).key && t(C) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(et, rt);
      };
      b(Ue, (et) => {
        t(he).sortable && et(tt);
      });
    }
    qe(ze, (et, rt) => bt?.(et, rt), () => ({ enabled: t(he).sortable, strength: 0.05 })), M(
      (et) => {
        D(ze, 1, et), pt(ze, t(he).width ? `width: ${t(he).width}` : void 0), re(Ge, t(he).label);
      },
      [
        () => Q(V(t(m).header, t(E).headerCell, "font-semibold text-left", t(he).align && `text-${t(he).align}`, t(he).sortable && "cursor-pointer select-none"))
      ]
    ), o(ye, ze);
  });
  var _e = u(Be);
  {
    var xe = (ye) => {
      var he = uf();
      M((ze) => D(he, 1, ze), [
        () => Q(V(t(m).header, t(E).headerCell, "w-32"))
      ]), o(ye, he);
    };
    b(_e, (ye) => {
      j().length > 0 && ye(xe);
    });
  }
  var Ie = u(pe), Re = i(Ie);
  {
    var me = (ye) => {
      var he = ff(), ze = i(he);
      M(
        (De) => {
          Ce(ze, "colspan", a().length + (A() ? 1 : 0) + (j().length > 0 ? 1 : 0)), D(ze, 1, De);
        },
        [
          () => Q(V(t(m).cell, t(E).cell, "text-center"))
        ]
      ), o(ye, he);
    }, we = (ye) => {
      var he = Ae(), ze = ke(he);
      {
        var De = (Ge) => {
          var Ue = bf(), tt = i(Ue), et = i(tt), rt = u(i(et), 2), $e = i(rt);
          M(
            (Ve) => {
              Ce(tt, "colspan", a().length + (A() ? 1 : 0) + (j().length > 0 ? 1 : 0)), D(tt, 1, Ve), re($e, q());
            },
            [
              () => Q(V(t(m).cell, t(E).cell, "text-center text-gray-400"))
            ]
          ), o(Ge, Ue);
        }, Oe = (Ge) => {
          var Ue = Ae(), tt = ke(Ue);
          Ye(tt, 19, () => t(ce), (et) => et.id, (et, rt, $e) => {
            const Ve = /* @__PURE__ */ Ee(() => t(_).has(t(rt).id));
            var je = Sf();
            je.__click = () => K(t(rt), t($e));
            var Fe = i(je);
            {
              var We = (vt) => {
                var dt = hf(), ht = i(dt);
                ht.__change = [gf, ae, rt], ht.__click = [mf], M(
                  (Ct) => {
                    D(dt, 1, Ct), Zt(ht, t(Ve));
                  },
                  [
                    () => Q(V(t(m).cell, t(E).cell))
                  ]
                ), o(vt, dt);
              };
              b(Fe, (vt) => {
                A() && vt(We);
              });
            }
            var ot = u(Fe);
            Ye(ot, 17, a, (vt) => vt.key, (vt, dt) => {
              var ht = _f();
              ht.__dblclick = [pf, B, dt, ee, rt];
              var Ct = i(ht);
              {
                var Xt = ($t) => {
                  var ir = wf();
                  ir.__keydown = [xf, J, Z], Ot("blur", ir, J), or(ir, () => t(S), (wr) => Y(S, wr)), o($t, ir);
                }, ia = ($t) => {
                  var ir = Ae(), wr = ke(ir);
                  na(wr, () => oa(ie(t(dt), t(rt)[t(dt).key], t(rt)))), o($t, ir);
                };
                b(Ct, ($t) => {
                  t(x)?.rowId === t(rt).id && t(x)?.column === t(dt).key ? $t(Xt) : $t(ia, !1);
                });
              }
              M(($t) => D(ht, 1, $t), [
                () => Q(V(t(m).cell, t(E).cell, t(dt).align && `text-${t(dt).align}`))
              ]), o(vt, ht);
            });
            var wt = u(ot);
            {
              var mt = (vt) => {
                var dt = Cf(), ht = i(dt);
                Ye(ht, 21, j, At, (Ct, Xt) => {
                  var ia = Ae(), $t = ke(ia);
                  {
                    var ir = (wr) => {
                      {
                        let li = /* @__PURE__ */ Ee(() => t(Xt).variant || "secondary");
                        tr(wr, {
                          size: "sm",
                          get variant() {
                            return t(li);
                          },
                          onclick: (qa) => {
                            qa.stopPropagation(), I("actionClick", { row: t(rt), action: t(Xt).action });
                          },
                          children: (qa, U1) => {
                            var pn = kf(), xn = ke(pn);
                            {
                              var si = (Oa) => {
                                var wn = yf(), ci = i(wn);
                                M(() => re(ci, t(Xt).icon)), o(Oa, wn);
                              };
                              b(xn, (Oa) => {
                                t(Xt).icon && Oa(si);
                              });
                            }
                            var di = u(xn);
                            M(() => re(di, ` ${t(Xt).label ?? ""}`)), o(qa, pn);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    };
                    b($t, (wr) => {
                      (!t(Xt).show || t(Xt).show(t(rt))) && wr(ir);
                    });
                  }
                  o(Ct, ia);
                }), M((Ct) => D(dt, 1, Ct), [
                  () => Q(V(t(m).cell, t(E).cell))
                ]), o(vt, dt);
              };
              b(wt, (vt) => {
                j().length > 0 && vt(mt);
              });
            }
            M((vt) => D(je, 1, vt), [
              () => Q(V(t(E).row, t(E).rowHover, t(Ve) && t(E).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), nt(1, je, () => gt, () => ({ direction: "up", duration: 100, delay: t($e) * 20 })), o(et, je);
          }), o(Ge, Ue);
        };
        b(
          ze,
          (Ge) => {
            t(ce).length === 0 ? Ge(De) : Ge(Oe, !1);
          },
          !0
        );
      }
      o(ye, he);
    };
    b(Re, (ye) => {
      c() ? ye(me) : ye(we, !1);
    });
  }
  qe(le, (ye, he) => kt?.(ye, he), () => ({ blur: "sm", opacity: "subtle" }));
  var Me = u(le, 2);
  {
    var Le = (ye) => {
      var he = Ef(), ze = i(he), De = i(ze), Oe = i(De), Ge = u(ze, 2), Ue = i(Ge);
      {
        let rt = /* @__PURE__ */ Ee(() => T() === 1);
        tr(Ue, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(rt);
          },
          onclick: () => I("pageChange", { page: T() - 1 }),
          children: ($e, Ve) => {
            var je = St("Previous");
            o($e, je);
          },
          $$slots: { default: !0 }
        });
      }
      var tt = u(Ue, 2);
      Ye(tt, 18, () => t(ve), (rt) => rt, (rt, $e) => {
        {
          let Ve = /* @__PURE__ */ Ee(() => $e === T() ? "primary" : "secondary");
          tr(rt, {
            size: "sm",
            get variant() {
              return t(Ve);
            },
            onclick: () => I("pageChange", { page: $e }),
            children: (je, Fe) => {
              var We = St();
              M(() => re(We, $e)), o(je, We);
            },
            $$slots: { default: !0 }
          });
        }
      });
      var et = u(tt, 2);
      {
        let rt = /* @__PURE__ */ Ee(() => T() === t(oe));
        tr(et, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(rt);
          },
          onclick: () => I("pageChange", { page: T() + 1 }),
          children: ($e, Ve) => {
            var je = St("Next");
            o($e, je);
          },
          $$slots: { default: !0 }
        });
      }
      M(
        (rt, $e) => {
          D(he, 1, rt), re(Oe, `Showing ${(T() - 1) * y() + 1} to ${$e ?? ""} of ${e.totalRows ?? t(p).length ?? ""} entries`);
        },
        [
          () => Q(V("px-4 py-3 border-t flex items-center justify-between", t(E).pagination)),
          () => Math.min(T() * y(), e.totalRows ?? t(p).length)
        ]
      ), o(ye, he);
    };
    b(Me, (ye) => {
      $() && t(oe) > 1 && ye(Le);
    });
  }
  M(
    (ye) => {
      D(ge, 1, Q(t(de))), pt(le, g() ? `max-height: ${g()}` : void 0), D(pe, 1, ye);
    },
    [
      () => Q(V(t(E).header, F() && "sticky top-0 z-10"))
    ]
  ), o(r, ge), Ze();
}
ut(["click", "change", "dblclick", "keydown"]);
function Af(r, e, a, n, l) {
  if (t(e))
    a(a().filter((d) => !t(n).some((c) => c.id === d)));
  else {
    const d = t(n).map((c) => c.id);
    a([.../* @__PURE__ */ new Set([...a(), ...d])]);
  }
  l("selectionChange", { selectedRows: a() });
}
function zf(r, e, a, n, l) {
  e({}), Y(a, ""), n(1), l("filter", { filterConfig: {} });
}
var If = (r, e) => Y(e, !t(e)), Pf = /* @__PURE__ */ v('<button class="text-sm text-blue-400 hover:text-blue-300 transition-colors">Clear Filters</button>'), Lf = /* @__PURE__ */ v('<div class="text-sm opacity-70"> </div>'), Df = (r, e, a) => e(t(a).key, r.currentTarget.value), jf = /* @__PURE__ */ v('<div><label class="block text-xs font-medium mb-1 opacity-70"> </label> <input/></div>'), Rf = /* @__PURE__ */ v('<div><div class="grid gap-4"></div></div>'), Nf = /* @__PURE__ */ v('<th><input type="checkbox" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"/></th>'), qf = (r, e, a) => t(e).sortable && a(t(e).key), Of = /* @__PURE__ */ v('<div class="w-3.5 h-3.5 opacity-30"><!> <!></div>'), Bf = /* @__PURE__ */ v('<th><div class="flex items-center gap-2"><span class="font-semibold"> </span> <!></div></th>'), Ff = /* @__PURE__ */ v('<tr><td class="text-center py-8"><div class="inline-flex items-center gap-2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Loading...</div></td></tr>'), Hf = /* @__PURE__ */ v('<tr><td class="text-center py-8 opacity-60"> </td></tr>'), Vf = (r, e, a) => e(t(a).id), Gf = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"/></td>'), Uf = /* @__PURE__ */ v("<td><!></td>"), Yf = /* @__PURE__ */ v("<tr><!><!></tr>"), Wf = (r, e) => e(Math.max(1, e() - 1)), Xf = (r, e, a) => e(Math.min(t(a), e() + 1)), Kf = /* @__PURE__ */ v('<div><div class="text-sm opacity-70"> </div> <div class="flex items-center gap-2"><button>Previous</button> <span class="px-3 py-1 text-sm"> </span> <button>Next</button></div></div>'), Zf = /* @__PURE__ */ v('<div><div><div class="flex items-center gap-4"><div class="relative"><!> <input placeholder="Search..."/></div> <button title="Toggle Filters"><!></button> <!></div> <!></div> <!> <div><table><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Qf = {
  hash: "svelte-1tqav43",
  code: `
	/* Custom scrollbar for table */.overflow-x-auto.svelte-1tqav43,
	.overflow-y-auto.svelte-1tqav43 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-x-auto.svelte-1tqav43::-webkit-scrollbar,
	.overflow-y-auto.svelte-1tqav43::-webkit-scrollbar {height:6px;width:6px;}.overflow-x-auto.svelte-1tqav43::-webkit-scrollbar-track,
	.overflow-y-auto.svelte-1tqav43::-webkit-scrollbar-track {background:transparent;}.overflow-x-auto.svelte-1tqav43::-webkit-scrollbar-thumb,
	.overflow-y-auto.svelte-1tqav43::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-x-auto.svelte-1tqav43::-webkit-scrollbar-thumb:hover,
	.overflow-y-auto.svelte-1tqav43::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Table responsiveness */
	@media (max-width: 768px) {table.svelte-1tqav43 {font-size:0.875rem;}
	}`
};
function Ap(r, e) {
  Ke(e, !0), Je(r, Qf);
  let a = s(e, "sortConfig", 15), n = s(e, "filterConfig", 15), l = s(e, "loading", 3, !1), d = s(e, "selectable", 3, !1), c = s(e, "selectedRows", 31, () => lt([])), g = s(e, "striped", 3, !1), w = s(e, "bordered", 3, !0), N = s(e, "hover", 3, !0), h = s(e, "size", 3, "md"), P = s(e, "variant", 3, "glass"), L = s(e, "stickyHeader", 3, !1);
  s(e, "virtualScroll", 3, !1);
  let A = s(e, "pageSize", 3, 10), k = s(e, "currentPage", 15, 1), f = s(e, "showPagination", 3, !1), B = s(e, "emptyMessage", 3, "No data available"), $ = s(e, "class", 3, ""), y = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "columns",
    "data",
    "sortConfig",
    "filterConfig",
    "loading",
    "selectable",
    "selectedRows",
    "striped",
    "bordered",
    "hover",
    "size",
    "variant",
    "stickyHeader",
    "virtualScroll",
    "pageSize",
    "currentPage",
    "totalRows",
    "showPagination",
    "emptyMessage",
    "class"
  ]);
  const T = zt();
  let F = /* @__PURE__ */ Se(""), H = /* @__PURE__ */ Se(!1), j;
  const q = {
    sm: { table: "text-sm", cell: "px-3 py-2", header: "px-3 py-2.5" },
    md: { table: "text-base", cell: "px-4 py-3", header: "px-4 py-3" },
    lg: { table: "text-lg", cell: "px-6 py-4", header: "px-6 py-4" }
  }, O = {
    glass: {
      table: "bg-black/10 border-white/10 backdrop-blur-md",
      header: "bg-white/5 border-white/10 text-white",
      headerCell: "text-white/90 border-white/10",
      row: "border-white/5 text-white/90",
      rowHover: "hover:bg-white/5",
      rowSelected: "bg-blue-500/20",
      cell: "border-white/5"
    },
    terminal: {
      table: "bg-black/80 border-terminal-green/30",
      header: "bg-terminal-green/10 border-terminal-green/30 text-terminal-green",
      headerCell: "text-terminal-green border-terminal-green/20",
      row: "border-terminal-green/20 text-terminal-green",
      rowHover: "hover:bg-terminal-green/10",
      rowSelected: "bg-terminal-green/30",
      cell: "border-terminal-green/10"
    },
    liquid: {
      table: "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-white/10 backdrop-blur-md",
      header: "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10 text-white",
      headerCell: "text-white border-white/10",
      row: "border-white/5 text-white",
      rowHover: "hover:bg-white/5",
      rowSelected: "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
      cell: "border-white/5"
    }
  }, I = q[h()], G = O[P()], U = /* @__PURE__ */ Ee(() => () => {
    let me = [...e.data];
    if (t(F).trim()) {
      const we = t(F).toLowerCase();
      me = me.filter((Me) => e.columns.some((Le) => String(Me[Le.key]).toLowerCase().includes(we)));
    }
    return n() && (me = me.filter((we) => Object.entries(n()).every(([Me, Le]) => {
      if (!Le) return !0;
      const ye = String(we[Me]).toLowerCase(), he = String(Le).toLowerCase();
      return ye.includes(he);
    }))), me;
  }), R = /* @__PURE__ */ Ee(() => () => {
    if (!a()) return t(U);
    const { key: me, direction: we } = a();
    return [...t(U)].sort((Me, Le) => {
      const ye = Me[me], he = Le[me];
      let ze = 0;
      return ye < he && (ze = -1), ye > he && (ze = 1), we === "desc" ? -ze : ze;
    });
  }), C = /* @__PURE__ */ Ee(() => () => {
    if (!f()) return t(R);
    const me = (k() - 1) * A(), we = me + A();
    return t(R).slice(me, we);
  }), _ = /* @__PURE__ */ Ee(() => () => f() ? Math.ceil((e.totalRows || t(R).length) / A()) : 1), x = /* @__PURE__ */ Ee(() => () => !d() || t(C).length === 0 ? !1 : t(C).every((me) => c().includes(me.id))), S = /* @__PURE__ */ Ee(() => () => {
    if (!d() || t(C).length === 0) return !1;
    const me = t(C).filter((we) => c().includes(we.id)).length;
    return me > 0 && me < t(C).length;
  });
  function W(me) {
    e.columns.find((Me) => Me.key === me)?.sortable && (a()?.key === me ? a({
      key: me,
      direction: a().direction === "asc" ? "desc" : "asc"
    }) : a({ key: me, direction: "asc" }), T("sort", { sortConfig: a() }));
  }
  function X(me) {
    c().includes(me) ? c(c().filter((we) => we !== me)) : c([...c(), me]), T("selectionChange", { selectedRows: c() });
  }
  function E(me, we) {
    n() || n({}), we.trim() ? n(n()[me] = we, !0) : delete n()[me], k(1), T("filter", { filterConfig: n() });
  }
  function m(me) {
    return !a() || a().key !== me ? null : a().direction === "asc" ? kn : Xr;
  }
  function p(me) {
    switch (me) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  }
  function oe(me, we) {
    const Me = me[we.key];
    return we.render ? we.render(Me, me) : Me;
  }
  var ce = Zf();
  Qe(ce, (me) => ({ class: me, ...y }), [() => V("w-full", $())], void 0, "svelte-1tqav43");
  var ve = i(ce), be = i(ve), te = i(be), K = i(te);
  Qn(K, {
    size: 16,
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
  });
  var ae = u(K, 2), z = u(te, 2);
  z.__click = [If, H];
  var ee = i(z);
  pi(ee, { size: 16 });
  var J = u(z, 2);
  {
    var Z = (me) => {
      var we = Pf();
      we.__click = [
        zf,
        n,
        F,
        k,
        T
      ], o(me, we);
    };
    b(J, (me) => {
      (Object.keys(n() || {}).length > 0 || t(F)) && me(Z);
    });
  }
  var ie = u(be, 2);
  {
    var ne = (me) => {
      var we = Lf(), Me = i(we);
      M(() => re(Me, `${c().length ?? ""} of ${(e.totalRows || t(R).length) ?? ""} selected`)), o(me, we);
    };
    b(ie, (me) => {
      d() && c().length > 0 && me(ne);
    });
  }
  var de = u(ve, 2);
  {
    var ge = (me) => {
      var we = Rf(), Me = i(we);
      Ye(Me, 21, () => e.columns.filter((Le) => Le.filterable), (Le) => Le.key, (Le, ye) => {
        var he = jf(), ze = i(he), De = i(ze), Oe = u(ze, 2);
        Oe.__input = [Df, E, ye], M(
          (Ge, Ue) => {
            Ce(ze, "for", `filter-${t(ye).key}`), re(De, t(ye).label), Ce(Oe, "id", `filter-${t(ye).key}`), Uo(Oe, n()?.[t(ye).key] || ""), Ce(Oe, "placeholder", Ge), D(Oe, 1, Ue, "svelte-1tqav43");
          },
          [
            () => `Filter by ${t(ye).label.toLowerCase()}...`,
            () => Q(V("w-full px-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400/50"))
          ]
        ), o(Le, he);
      }), M(
        (Le, ye) => {
          D(we, 1, Le, "svelte-1tqav43"), pt(Me, `grid-template-columns: repeat(${ye ?? ""}, 1fr);`);
        },
        [
          () => Q(V("p-4 border-b bg-white/5", G.header)),
          () => e.columns.filter((Le) => Le.filterable).length
        ]
      ), o(me, we);
    };
    b(de, (me) => {
      t(H) && me(ge);
    });
  }
  var se = u(de, 2), ue = i(se), le = i(ue), fe = i(le), pe = i(fe);
  {
    var Te = (me) => {
      var we = Nf(), Me = i(we);
      Me.__change = [
        Af,
        x,
        c,
        C,
        T
      ], M(
        (Le) => {
          D(we, 1, Le, "svelte-1tqav43"), Zt(Me, t(x)), Me.indeterminate = t(S);
        },
        [
          () => Q(V("w-8", I.header, G.headerCell, w() && "border-r"))
        ]
      ), o(me, we);
    };
    b(pe, (me) => {
      d() && me(Te);
    });
  }
  var Ne = u(pe);
  Ye(Ne, 17, () => e.columns, (me) => me.key, (me, we) => {
    var Me = Bf();
    Me.__click = [qf, we, W];
    var Le = i(Me), ye = i(Le), he = i(ye), ze = u(ye, 2);
    {
      var De = (Oe) => {
        const Ge = /* @__PURE__ */ Ee(() => m(t(we).key));
        var Ue = Ae(), tt = ke(Ue);
        {
          var et = ($e) => {
            var Ve = Ae(), je = ke(Ve);
            Et(je, () => t(Ge), (Fe, We) => {
              We(Fe, { size: 14 });
            }), o($e, Ve);
          }, rt = ($e) => {
            var Ve = Of(), je = i(Ve);
            kn(je, { size: 14, class: "absolute" });
            var Fe = u(je, 2);
            Xr(Fe, { size: 14, class: "absolute" }), o($e, Ve);
          };
          b(tt, ($e) => {
            t(Ge) ? $e(et) : $e(rt, !1);
          });
        }
        o(Oe, Ue);
      };
      b(ze, (Oe) => {
        t(we).sortable && Oe(De);
      });
    }
    M(
      (Oe) => {
        D(Me, 1, Oe, "svelte-1tqav43"), pt(Me, t(we).width ? `width: ${t(we).width}` : void 0), re(he, t(we).label);
      },
      [
        () => Q(V(I.header, G.headerCell, p(t(we).align), t(we).sortable && "cursor-pointer hover:bg-white/5", w() && "border-r last:border-r-0", t(we).headerClass))
      ]
    ), o(me, Me);
  });
  var He = u(le), Be = i(He);
  {
    var _e = (me) => {
      var we = Ff(), Me = i(we);
      M(() => Ce(Me, "colspan", e.columns.length + (d() ? 1 : 0))), o(me, we);
    }, xe = (me) => {
      var we = Ae(), Me = ke(we);
      {
        var Le = (he) => {
          var ze = Hf(), De = i(ze), Oe = i(De);
          M(() => {
            Ce(De, "colspan", e.columns.length + (d() ? 1 : 0)), re(Oe, B());
          }), o(he, ze);
        }, ye = (he) => {
          var ze = Ae(), De = ke(ze);
          Ye(De, 19, () => t(C), (Oe) => Oe.id, (Oe, Ge, Ue) => {
            var tt = Yf(), et = i(tt);
            {
              var rt = (Ve) => {
                var je = Gf(), Fe = i(je);
                Fe.__change = [Vf, X, Ge], M(
                  (We, ot) => {
                    D(je, 1, We, "svelte-1tqav43"), Zt(Fe, ot);
                  },
                  [
                    () => Q(V(I.cell, G.cell, w() && "border-r")),
                    () => c().includes(t(Ge).id)
                  ]
                ), o(Ve, je);
              };
              b(et, (Ve) => {
                d() && Ve(rt);
              });
            }
            var $e = u(et);
            Ye($e, 17, () => e.columns, (Ve) => Ve.key, (Ve, je) => {
              var Fe = Uf(), We = i(Fe);
              na(We, () => oa(oe(t(Ge), t(je)))), M((ot) => D(Fe, 1, ot, "svelte-1tqav43"), [
                () => Q(V(I.cell, G.cell, p(t(je).align), w() && "border-r last:border-r-0", t(je).cellClass))
              ]), o(Ve, Fe);
            }), M((Ve) => D(tt, 1, Ve, "svelte-1tqav43"), [
              () => Q(V(G.row, w() && "border-b last:border-b-0", N() && G.rowHover, g() && t(Ue) % 2 === 1 && "bg-white/5", c().includes(t(Ge).id) && G.rowSelected, "transition-colors duration-150"))
            ]), o(Oe, tt);
          }), o(he, ze);
        };
        b(
          Me,
          (he) => {
            t(C).length === 0 ? he(Le) : he(ye, !1);
          },
          !0
        );
      }
      o(me, we);
    };
    b(Be, (me) => {
      l() ? me(_e) : me(xe, !1);
    });
  }
  var Ie = u(se, 2);
  {
    var Re = (me) => {
      var we = Kf(), Me = i(we), Le = i(Me), ye = u(Me, 2), he = i(ye);
      he.__click = [Wf, k];
      var ze = u(he, 2), De = i(ze), Oe = u(ze, 2);
      Oe.__click = [Xf, k, _], M(
        (Ge, Ue, tt, et) => {
          D(we, 1, Ge, "svelte-1tqav43"), re(Le, `Showing ${(k() - 1) * A() + 1} to ${Ue ?? ""}
				of ${(e.totalRows || t(R).length) ?? ""} results`), he.disabled = k() === 1, D(he, 1, tt, "svelte-1tqav43"), re(De, `Page ${k() ?? ""} of ${t(_) ?? ""}`), Oe.disabled = k() === t(_), D(Oe, 1, et, "svelte-1tqav43");
        },
        [
          () => Q(V("flex items-center justify-between p-4 border-t rounded-b-lg", G.header)),
          () => Math.min(k() * A(), e.totalRows || t(R).length),
          () => Q(V("px-3 py-1 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", "disabled:opacity-50 disabled:cursor-not-allowed")),
          () => Q(V("px-3 py-1 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", "disabled:opacity-50 disabled:cursor-not-allowed"))
        ]
      ), o(me, we);
    };
    b(Ie, (me) => {
      f() && t(_) > 1 && me(Re);
    });
  }
  at(ce, (me) => j = me, () => j), M(
    (me, we, Me, Le, ye, he, ze) => {
      D(ve, 1, me, "svelte-1tqav43"), D(ae, 1, we, "svelte-1tqav43"), D(z, 1, Me, "svelte-1tqav43"), D(se, 1, Le, "svelte-1tqav43"), D(ue, 1, ye, "svelte-1tqav43"), D(le, 1, he, "svelte-1tqav43"), D(He, 1, ze, "svelte-1tqav43");
    },
    [
      () => Q(V("flex items-center justify-between p-4 border-b rounded-t-lg", G.header)),
      () => Q(V("pl-9 pr-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400/50")),
      () => Q(V("p-2 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", t(H) && "bg-blue-500/20 border-blue-400/40")),
      () => Q(V("overflow-x-auto", L() && "max-h-96 overflow-y-auto")),
      () => Q(V("w-full", I.table)),
      () => Q(V(G.header, L() && "sticky top-0 z-10")),
      () => Q(V(G.table))
    ]
  ), or(ae, () => t(F), (me) => Y(F, me)), o(r, ce), Ze();
}
ut(["click", "input", "change"]);
var Jf = (r, e) => {
  const a = r.target;
  e(a.checked);
}, $f = /* @__PURE__ */ v('<div><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" aria-label="Select all items" class="rounded bg-transparent border-current"/> <span class="text-sm font-medium"> </span></label></div>'), eb = /* @__PURE__ */ v('<div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div>'), tb = /* @__PURE__ */ v('<div class="space-y-3"><div class="flex items-start gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div> <div></div></div></div></div>'), rb = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div></div>'), ab = /* @__PURE__ */ v("<div><!></div>"), nb = /* @__PURE__ */ v('<div><div class="text-4xl mb-3"> </div> <p class="text-lg font-medium"> </p></div>'), ob = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, ib = (r) => r.stopPropagation(), lb = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current"/>'), sb = /* @__PURE__ */ v("<img/>"), db = /* @__PURE__ */ v('<div><span class="text-2xl"> </span></div>'), cb = /* @__PURE__ */ v("<span> </span>"), vb = /* @__PURE__ */ v("<p> </p>"), ub = (r, e, a, n) => e(t(a), t(n).action, r), fb = /* @__PURE__ */ v('<span class="mr-1"> </span>'), bb = /* @__PURE__ */ v("<button><!> </button>"), gb = /* @__PURE__ */ v('<div class="flex items-center gap-2"></div>'), mb = /* @__PURE__ */ v('<div class="flex items-center gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!></div>'), hb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, pb = (r) => r.stopPropagation(), xb = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), wb = /* @__PURE__ */ v("<img/>"), _b = /* @__PURE__ */ v('<div><span class="text-2xl"> </span></div>'), yb = /* @__PURE__ */ v("<span> </span>"), kb = /* @__PURE__ */ v("<p> </p>"), Cb = /* @__PURE__ */ v("<p> </p>"), Sb = /* @__PURE__ */ v("<span> </span>"), Eb = /* @__PURE__ */ v('<div class="flex flex-wrap gap-3 mt-2"></div>'), Tb = (r, e, a, n) => e(t(a), t(n).action, r), Mb = /* @__PURE__ */ v('<span class="mr-1"> </span>'), Ab = /* @__PURE__ */ v("<button><!> </button>"), zb = /* @__PURE__ */ v('<div class="flex flex-col gap-2"></div>'), Ib = /* @__PURE__ */ v('<div class="space-y-3"><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h3> </h3> <!></div> <!> <!> <!></div> <!></div></div>'), Pb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Lb = (r) => r.stopPropagation(), Db = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), jb = /* @__PURE__ */ v("<img/>"), Rb = /* @__PURE__ */ v('<div><span class="text-3xl"> </span></div>'), Nb = /* @__PURE__ */ v("<span> </span>"), qb = (r, e, a, n) => e(t(a), t(n).action, r), Ob = /* @__PURE__ */ v('<span class="mr-1"> </span>'), Bb = /* @__PURE__ */ v("<button><!> </button>"), Fb = /* @__PURE__ */ v('<div class="flex items-center gap-2"></div>'), Hb = /* @__PURE__ */ v("<p> </p>"), Vb = /* @__PURE__ */ v("<p> </p>"), Gb = /* @__PURE__ */ v("<span> </span>"), Ub = /* @__PURE__ */ v('<div class="flex flex-wrap gap-3"></div>'), Yb = /* @__PURE__ */ v('<div><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!> <!> <!></div></div></div>'), Wb = /* @__PURE__ */ v("<div><!></div>"), Xb = /* @__PURE__ */ v('<div role="list" aria-label="Item list"><!> <div class="divide-y divide-gray-600"><!></div></div>');
const Kb = {
  hash: "svelte-9ixerq",
  code: `
    /* Terminal glow effects */.terminal .list-item:hover {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 15px var(--terminal-green-glow);}`
};
function zp(r, e) {
  Ke(e, !0), Je(r, Kb);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "layout", 3, "simple"), c = s(e, "selectable", 3, !1), g = s(e, "multiSelect", 3, !1), w = s(e, "selectedItems", 19, () => /* @__PURE__ */ new Set()), N = s(e, "loading", 3, !1), h = s(e, "loadingCount", 3, 3), P = s(e, "emptyMessage", 3, "No items found"), L = s(e, "emptyIcon", 3, "📋");
  s(e, "dividers", 3, !0);
  const A = s(e, "hover", 3, !0);
  s(e, "animated", 3, !0);
  const k = s(e, "class", 3, ""), f = zt();
  let B = /* @__PURE__ */ Se(lt(w()));
  const $ = {
    default: {
      container: "bg-gray-900",
      item: "bg-gray-800 border-gray-700 text-white",
      itemHover: "hover:bg-gray-700",
      itemSelected: "bg-blue-600/20 border-blue-500",
      title: "text-white",
      subtitle: "text-gray-300",
      description: "text-gray-400",
      metadata: "text-gray-500",
      badge: "bg-blue-600 text-white",
      skeleton: "bg-gray-700"
    },
    glass: {
      container: "bg-white/5 backdrop-blur-md",
      item: "bg-white/10 border-white/20 text-white backdrop-blur-sm",
      itemHover: "hover:bg-white/15",
      itemSelected: "bg-white/20 border-white/40",
      title: "text-white",
      subtitle: "text-white/80",
      description: "text-white/60",
      metadata: "text-white/50",
      badge: "bg-white/30 text-white",
      skeleton: "bg-white/10"
    },
    terminal: {
      container: "bg-black/90",
      item: `bg-black/60 border-${Pe.terminal.green}/30 text-${Pe.terminal.green}`,
      itemHover: `hover:bg-${Pe.terminal.green}/5`,
      itemSelected: `bg-${Pe.terminal.green}/10 border-${Pe.terminal.green}`,
      title: `text-${Pe.terminal.green}`,
      subtitle: `text-${Pe.terminal.green}/80`,
      description: `text-${Pe.terminal.green}/60`,
      metadata: `text-${Pe.terminal.green}/50`,
      badge: `bg-${Pe.terminal.green} text-black`,
      skeleton: `bg-${Pe.terminal.green}/10`
    }
  }, y = {
    sm: {
      container: "text-sm",
      item: "p-3",
      avatar: "w-8 h-8",
      icon: "w-5 h-5",
      badge: "px-2 py-0.5 text-xs"
    },
    md: {
      container: "text-base",
      item: "p-4",
      avatar: "w-10 h-10",
      icon: "w-6 h-6",
      badge: "px-2.5 py-1 text-sm"
    },
    lg: {
      container: "text-lg",
      item: "p-6",
      avatar: "w-12 h-12",
      icon: "w-8 h-8",
      badge: "px-3 py-1.5 text-base"
    }
  }, T = /* @__PURE__ */ Ee(() => $[n()]), F = /* @__PURE__ */ Ee(() => y[l()]);
  function H(m, p) {
    m.disabled || (c() && j(m, !t(B).has(m.id)), f("itemClick", { item: m, index: p }));
  }
  function j(m, p) {
    m.disabled || (g() ? p ? t(B).add(m.id) : t(B).delete(m.id) : p ? Y(B, /* @__PURE__ */ new Set([m.id]), !0) : Y(B, /* @__PURE__ */ new Set(), !0), Y(B, new Set(t(B)), !0), f("itemSelect", { item: m, selected: p }));
  }
  function q(m, p, oe) {
    oe.stopPropagation(), f("actionClick", { item: m, action: p });
  }
  function O(m) {
    m ? Y(B, new Set(a().filter((p) => !p.disabled).map((p) => p.id)), !0) : Y(B, /* @__PURE__ */ new Set(), !0), f("selectAll", { selected: m });
  }
  const I = /* @__PURE__ */ Ee(() => a().length > 0 && a().filter((m) => !m.disabled).every((m) => t(B).has(m.id))), G = /* @__PURE__ */ Ee(() => V("rounded-lg overflow-hidden font-mono", t(T).container, t(F).container, k()));
  function U(m = "secondary") {
    const p = "px-2 py-1 rounded text-xs font-medium transition-colors";
    switch (m) {
      case "primary":
        return `${p} bg-blue-600 text-white hover:bg-blue-700`;
      case "danger":
        return `${p} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${p} bg-gray-600 text-white hover:bg-gray-700`;
    }
  }
  const R = /* @__PURE__ */ Ee(() => Array.from({ length: h() }, (m, p) => ({ id: `skeleton-${p}` })));
  var C = Xb(), _ = i(C);
  {
    var x = (m) => {
      var p = $f(), oe = i(p), ce = i(oe);
      ce.__change = [Jf, O];
      var ve = u(ce, 2), be = i(ve);
      M(
        (te) => {
          D(p, 1, `px-4 py-3 border-b ${t(T).item ?? ""} border-gray-600`), Zt(ce, t(I)), re(be, `${t(B).size ?? ""} of ${te ?? ""} selected`);
        },
        [() => a().filter((te) => !te.disabled).length]
      ), o(m, p);
    };
    b(_, (m) => {
      c() && g() && a().length > 0 && m(x);
    });
  }
  var S = u(_, 2), W = i(S);
  {
    var X = (m) => {
      var p = Ae(), oe = ke(p);
      Ye(oe, 19, () => t(R), (ce) => ce.id, (ce, ve) => {
        var be = ab(), te = i(be);
        {
          var K = (z) => {
            var ee = eb(), J = i(ee), Z = u(J, 2), ie = i(Z), ne = u(ie, 2);
            M(
              (de, ge, se) => {
                D(J, 1, de), D(ie, 1, ge), D(ne, 1, se);
              },
              [
                () => Q(V("rounded-full", t(F).avatar, t(T).skeleton)),
                () => Q(V("h-4 rounded", t(T).skeleton, "w-3/4")),
                () => Q(V("h-3 rounded", t(T).skeleton, "w-1/2"))
              ]
            ), o(z, ee);
          }, ae = (z) => {
            var ee = Ae(), J = ke(ee);
            {
              var Z = (ne) => {
                var de = tb(), ge = i(de), se = i(ge), ue = u(se, 2), le = i(ue), fe = u(le, 2), pe = u(fe, 2);
                M(
                  (Te, Ne, He, Be) => {
                    D(se, 1, Te), D(le, 1, Ne), D(fe, 1, He), D(pe, 1, Be);
                  },
                  [
                    () => Q(V("rounded-full", t(F).avatar, t(T).skeleton)),
                    () => Q(V("h-4 rounded", t(T).skeleton, "w-2/3")),
                    () => Q(V("h-3 rounded", t(T).skeleton, "w-1/2")),
                    () => Q(V("h-3 rounded", t(T).skeleton, "w-full"))
                  ]
                ), o(ne, de);
              }, ie = (ne) => {
                var de = rb(), ge = i(de), se = i(ge), ue = u(se, 2), le = i(ue), fe = u(le, 2);
                M(
                  (pe, Te, Ne) => {
                    D(de, 1, `border rounded-lg p-4 space-y-3 ${t(T).skeleton ?? ""}`), D(se, 1, pe), D(le, 1, Te), D(fe, 1, Ne);
                  },
                  [
                    () => Q(V("rounded-full", t(F).avatar, t(T).skeleton)),
                    () => Q(V("h-4 rounded", t(T).skeleton, "w-3/4")),
                    () => Q(V("h-3 rounded", t(T).skeleton, "w-1/2"))
                  ]
                ), o(ne, de);
              };
              b(
                J,
                (ne) => {
                  d() === "detailed" ? ne(Z) : ne(ie, !1);
                },
                !0
              );
            }
            o(z, ee);
          };
          b(te, (z) => {
            d() === "simple" ? z(K) : z(ae, !1);
          });
        }
        M((z) => D(be, 1, z), [
          () => Q(V(t(F).item, t(T).item, "animate-pulse"))
        ]), o(ce, be);
      }), o(m, p);
    }, E = (m) => {
      var p = Ae(), oe = ke(p);
      {
        var ce = (be) => {
          var te = nb(), K = i(te), ae = i(K), z = u(K, 2), ee = i(z);
          M(() => {
            D(te, 1, `py-12 text-center ${t(T).description ?? ""}`), re(ae, L()), re(ee, P());
          }), o(be, te);
        }, ve = (be) => {
          var te = Ae(), K = ke(te);
          Ye(K, 19, a, (ae) => ae.id, (ae, z, ee) => {
            const J = /* @__PURE__ */ Ee(() => t(B).has(t(z).id));
            var Z = Wb(), ie = () => H(t(z), t(ee)), ne = (ue) => (ue.key === "Enter" || ue.key === " ") && H(t(z), t(ee));
            Qe(
              Z,
              (ue) => ({
                class: ue,
                onclick: ie,
                onkeydown: ne,
                role: c() ? "option" : "listitem",
                ...c() && !t(z).disabled ? { tabindex: 0 } : {},
                "aria-selected": c() ? t(J) : void 0,
                "aria-label": t(z).title,
                "aria-describedby": t(z).description ? `item-${t(z).id}-description` : void 0
              }),
              [
                () => V(t(F).item, t(T).item, A() && !t(z).disabled && t(T).itemHover, t(J) && t(T).itemSelected, t(z).disabled && "opacity-50", !t(z).disabled && "cursor-pointer", "transition-all duration-200")
              ]
            );
            var de = i(Z);
            {
              var ge = (ue) => {
                var le = mb(), fe = i(le);
                {
                  var pe = (he) => {
                    var ze = lb();
                    ze.__change = [ob, j, z], ze.__click = [ib], M(() => {
                      Zt(ze, t(J)), ze.disabled = t(z).disabled;
                    }), o(he, ze);
                  };
                  b(fe, (he) => {
                    c() && he(pe);
                  });
                }
                var Te = u(fe, 2);
                {
                  var Ne = (he) => {
                    var ze = sb();
                    M(
                      (De) => {
                        Ce(ze, "src", t(z).avatar), Ce(ze, "alt", t(z).title), D(ze, 1, De);
                      },
                      [
                        () => Q(V("rounded-full object-cover", t(F).avatar))
                      ]
                    ), o(he, ze);
                  }, He = (he) => {
                    var ze = Ae(), De = ke(ze);
                    {
                      var Oe = (Ge) => {
                        var Ue = db(), tt = i(Ue), et = i(tt);
                        M(
                          (rt) => {
                            D(Ue, 1, rt), re(et, t(z).icon);
                          },
                          [
                            () => Q(V("flex items-center justify-center", t(F).icon))
                          ]
                        ), o(Ge, Ue);
                      };
                      b(
                        De,
                        (Ge) => {
                          t(z).icon && Ge(Oe);
                        },
                        !0
                      );
                    }
                    o(he, ze);
                  };
                  b(Te, (he) => {
                    t(z).avatar ? he(Ne) : he(He, !1);
                  });
                }
                var Be = u(Te, 2), _e = i(Be), xe = i(_e), Ie = i(xe), Re = u(xe, 2);
                {
                  var me = (he) => {
                    var ze = cb(), De = i(ze);
                    M(
                      (Oe) => {
                        D(ze, 1, Oe), re(De, t(z).badge);
                      },
                      [
                        () => Q(V("rounded-full font-medium", t(F).badge, t(T).badge))
                      ]
                    ), o(he, ze);
                  };
                  b(Re, (he) => {
                    t(z).badge && he(me);
                  });
                }
                var we = u(_e, 2);
                {
                  var Me = (he) => {
                    var ze = vb(), De = i(ze);
                    M(
                      (Oe) => {
                        D(ze, 1, Oe), re(De, t(z).subtitle);
                      },
                      [
                        () => Q(V("text-sm truncate", t(T).subtitle))
                      ]
                    ), o(he, ze);
                  };
                  b(we, (he) => {
                    t(z).subtitle && he(Me);
                  });
                }
                var Le = u(Be, 2);
                {
                  var ye = (he) => {
                    var ze = gb();
                    Ye(ze, 21, () => t(z).actions, (De) => De.action, (De, Oe) => {
                      var Ge = bb();
                      Ge.__click = [ub, q, z, Oe];
                      var Ue = i(Ge);
                      {
                        var tt = (rt) => {
                          var $e = fb(), Ve = i($e);
                          M(() => re(Ve, t(Oe).icon)), o(rt, $e);
                        };
                        b(Ue, (rt) => {
                          t(Oe).icon && rt(tt);
                        });
                      }
                      var et = u(Ue);
                      M(
                        (rt) => {
                          D(Ge, 1, rt), re(et, ` ${t(Oe).label ?? ""}`);
                        },
                        [() => Q(U(t(Oe).variant))]
                      ), o(De, Ge);
                    }), o(he, ze);
                  };
                  b(Le, (he) => {
                    t(z).actions && t(z).actions.length > 0 && he(ye);
                  });
                }
                M(
                  (he) => {
                    D(xe, 1, he), re(Ie, t(z).title);
                  },
                  [
                    () => Q(V("font-medium truncate", t(T).title))
                  ]
                ), o(ue, le);
              }, se = (ue) => {
                var le = Ae(), fe = ke(le);
                {
                  var pe = (Ne) => {
                    var He = Ib(), Be = i(He), _e = i(Be);
                    {
                      var xe = (Ve) => {
                        var je = xb();
                        je.__change = [hb, j, z], je.__click = [pb], M(() => {
                          Zt(je, t(J)), je.disabled = t(z).disabled;
                        }), o(Ve, je);
                      };
                      b(_e, (Ve) => {
                        c() && Ve(xe);
                      });
                    }
                    var Ie = u(_e, 2);
                    {
                      var Re = (Ve) => {
                        var je = wb();
                        M(
                          (Fe) => {
                            Ce(je, "src", t(z).avatar), Ce(je, "alt", t(z).title), D(je, 1, Fe);
                          },
                          [
                            () => Q(V("rounded-full object-cover", t(F).avatar))
                          ]
                        ), o(Ve, je);
                      }, me = (Ve) => {
                        var je = Ae(), Fe = ke(je);
                        {
                          var We = (ot) => {
                            var wt = _b(), mt = i(wt), vt = i(mt);
                            M(
                              (dt) => {
                                D(wt, 1, dt), re(vt, t(z).icon);
                              },
                              [
                                () => Q(V("flex items-center justify-center", t(F).icon))
                              ]
                            ), o(ot, wt);
                          };
                          b(
                            Fe,
                            (ot) => {
                              t(z).icon && ot(We);
                            },
                            !0
                          );
                        }
                        o(Ve, je);
                      };
                      b(Ie, (Ve) => {
                        t(z).avatar ? Ve(Re) : Ve(me, !1);
                      });
                    }
                    var we = u(Ie, 2), Me = i(we), Le = i(Me), ye = i(Le), he = u(Le, 2);
                    {
                      var ze = (Ve) => {
                        var je = yb(), Fe = i(je);
                        M(
                          (We) => {
                            D(je, 1, We), re(Fe, t(z).badge);
                          },
                          [
                            () => Q(V("rounded-full font-medium", t(F).badge, t(T).badge))
                          ]
                        ), o(Ve, je);
                      };
                      b(he, (Ve) => {
                        t(z).badge && Ve(ze);
                      });
                    }
                    var De = u(Me, 2);
                    {
                      var Oe = (Ve) => {
                        var je = kb(), Fe = i(je);
                        M(
                          (We) => {
                            D(je, 1, We), re(Fe, t(z).subtitle);
                          },
                          [
                            () => Q(V("text-sm mb-2", t(T).subtitle))
                          ]
                        ), o(Ve, je);
                      };
                      b(De, (Ve) => {
                        t(z).subtitle && Ve(Oe);
                      });
                    }
                    var Ge = u(De, 2);
                    {
                      var Ue = (Ve) => {
                        var je = Cb(), Fe = i(je);
                        M(
                          (We) => {
                            D(je, 1, We), re(Fe, t(z).description);
                          },
                          [
                            () => Q(V("text-sm leading-relaxed", t(T).description))
                          ]
                        ), o(Ve, je);
                      };
                      b(Ge, (Ve) => {
                        t(z).description && Ve(Ue);
                      });
                    }
                    var tt = u(Ge, 2);
                    {
                      var et = (Ve) => {
                        var je = Eb();
                        Ye(je, 21, () => Object.entries(t(z).metadata), At, (Fe, We) => {
                          var ot = /* @__PURE__ */ Ee(() => Kr(t(We), 2));
                          let wt = () => t(ot)[0], mt = () => t(ot)[1];
                          var vt = Sb(), dt = i(vt);
                          M(
                            (ht) => {
                              D(vt, 1, ht), re(dt, `${wt() ?? ""}: ${mt() ?? ""}`);
                            },
                            [() => Q(V("text-xs", t(T).metadata))]
                          ), o(Fe, vt);
                        }), o(Ve, je);
                      };
                      b(tt, (Ve) => {
                        t(z).metadata && Ve(et);
                      });
                    }
                    var rt = u(we, 2);
                    {
                      var $e = (Ve) => {
                        var je = zb();
                        Ye(je, 21, () => t(z).actions, (Fe) => Fe.action, (Fe, We) => {
                          var ot = Ab();
                          ot.__click = [Tb, q, z, We];
                          var wt = i(ot);
                          {
                            var mt = (dt) => {
                              var ht = Mb(), Ct = i(ht);
                              M(() => re(Ct, t(We).icon)), o(dt, ht);
                            };
                            b(wt, (dt) => {
                              t(We).icon && dt(mt);
                            });
                          }
                          var vt = u(wt);
                          M(
                            (dt) => {
                              D(ot, 1, dt), re(vt, ` ${t(We).label ?? ""}`);
                            },
                            [() => Q(U(t(We).variant))]
                          ), o(Fe, ot);
                        }), o(Ve, je);
                      };
                      b(rt, (Ve) => {
                        t(z).actions && t(z).actions.length > 0 && Ve($e);
                      });
                    }
                    M(
                      (Ve) => {
                        D(Le, 1, Ve), re(ye, t(z).title);
                      },
                      [
                        () => Q(V("font-semibold", t(T).title))
                      ]
                    ), o(Ne, He);
                  }, Te = (Ne) => {
                    var He = Yb(), Be = i(He), _e = i(Be);
                    {
                      var xe = (je) => {
                        var Fe = Db();
                        Fe.__change = [Pb, j, z], Fe.__click = [Lb], M(() => {
                          Zt(Fe, t(J)), Fe.disabled = t(z).disabled;
                        }), o(je, Fe);
                      };
                      b(_e, (je) => {
                        c() && je(xe);
                      });
                    }
                    var Ie = u(_e, 2);
                    {
                      var Re = (je) => {
                        var Fe = jb();
                        M(
                          (We) => {
                            Ce(Fe, "src", t(z).avatar), Ce(Fe, "alt", t(z).title), D(Fe, 1, We);
                          },
                          [
                            () => Q(V("rounded-full object-cover", t(F).avatar))
                          ]
                        ), o(je, Fe);
                      }, me = (je) => {
                        var Fe = Ae(), We = ke(Fe);
                        {
                          var ot = (wt) => {
                            var mt = Rb(), vt = i(mt), dt = i(vt);
                            M(
                              (ht) => {
                                D(mt, 1, ht), re(dt, t(z).icon);
                              },
                              [
                                () => Q(V("flex items-center justify-center", t(F).icon))
                              ]
                            ), o(wt, mt);
                          };
                          b(
                            We,
                            (wt) => {
                              t(z).icon && wt(ot);
                            },
                            !0
                          );
                        }
                        o(je, Fe);
                      };
                      b(Ie, (je) => {
                        t(z).avatar ? je(Re) : je(me, !1);
                      });
                    }
                    var we = u(Ie, 2), Me = i(we), Le = i(Me), ye = i(Le), he = i(ye), ze = u(ye, 2);
                    {
                      var De = (je) => {
                        var Fe = Nb(), We = i(Fe);
                        M(
                          (ot) => {
                            D(Fe, 1, ot), re(We, t(z).badge);
                          },
                          [
                            () => Q(V("rounded-full font-medium", t(F).badge, t(T).badge))
                          ]
                        ), o(je, Fe);
                      };
                      b(ze, (je) => {
                        t(z).badge && je(De);
                      });
                    }
                    var Oe = u(Le, 2);
                    {
                      var Ge = (je) => {
                        var Fe = Fb();
                        Ye(Fe, 21, () => t(z).actions, (We) => We.action, (We, ot) => {
                          var wt = Bb();
                          wt.__click = [qb, q, z, ot];
                          var mt = i(wt);
                          {
                            var vt = (ht) => {
                              var Ct = Ob(), Xt = i(Ct);
                              M(() => re(Xt, t(ot).icon)), o(ht, Ct);
                            };
                            b(mt, (ht) => {
                              t(ot).icon && ht(vt);
                            });
                          }
                          var dt = u(mt);
                          M(
                            (ht) => {
                              D(wt, 1, ht), re(dt, ` ${t(ot).label ?? ""}`);
                            },
                            [() => Q(U(t(ot).variant))]
                          ), o(We, wt);
                        }), o(je, Fe);
                      };
                      b(Oe, (je) => {
                        t(z).actions && t(z).actions.length > 0 && je(Ge);
                      });
                    }
                    var Ue = u(Me, 2);
                    {
                      var tt = (je) => {
                        var Fe = Hb(), We = i(Fe);
                        M(
                          (ot) => {
                            D(Fe, 1, ot), re(We, t(z).subtitle);
                          },
                          [
                            () => Q(V("text-sm mb-2", t(T).subtitle))
                          ]
                        ), o(je, Fe);
                      };
                      b(Ue, (je) => {
                        t(z).subtitle && je(tt);
                      });
                    }
                    var et = u(Ue, 2);
                    {
                      var rt = (je) => {
                        var Fe = Vb(), We = i(Fe);
                        M(
                          (ot) => {
                            D(Fe, 1, ot), re(We, t(z).description);
                          },
                          [
                            () => Q(V("text-sm leading-relaxed mb-3", t(T).description))
                          ]
                        ), o(je, Fe);
                      };
                      b(et, (je) => {
                        t(z).description && je(rt);
                      });
                    }
                    var $e = u(et, 2);
                    {
                      var Ve = (je) => {
                        var Fe = Ub();
                        Ye(Fe, 21, () => Object.entries(t(z).metadata), At, (We, ot) => {
                          var wt = /* @__PURE__ */ Ee(() => Kr(t(ot), 2));
                          let mt = () => t(wt)[0], vt = () => t(wt)[1];
                          var dt = Gb(), ht = i(dt);
                          M(
                            (Ct) => {
                              D(dt, 1, Ct), re(ht, `${mt() ?? ""}: ${vt() ?? ""}`);
                            },
                            [
                              () => Q(V("text-xs px-2 py-1 rounded-full", t(T).skeleton, t(T).metadata))
                            ]
                          ), o(We, dt);
                        }), o(je, Fe);
                      };
                      b($e, (je) => {
                        t(z).metadata && je(Ve);
                      });
                    }
                    M(
                      (je) => {
                        D(He, 1, `border rounded-lg p-4 ${t(T).item ?? ""}`), D(ye, 1, je), re(he, t(z).title);
                      },
                      [
                        () => Q(V("font-semibold", t(T).title))
                      ]
                    ), o(Ne, He);
                  };
                  b(
                    fe,
                    (Ne) => {
                      d() === "detailed" ? Ne(pe) : Ne(Te, !1);
                    },
                    !0
                  );
                }
                o(ue, le);
              };
              b(de, (ue) => {
                d() === "simple" ? ue(ge) : ue(se, !1);
              });
            }
            o(ae, Z);
          }), o(be, te);
        };
        b(
          oe,
          (be) => {
            a().length === 0 ? be(ce) : be(ve, !1);
          },
          !0
        );
      }
      o(m, p);
    };
    b(W, (m) => {
      N() ? m(X) : m(E, !1);
    });
  }
  M(() => D(C, 1, Q(t(G)))), o(r, C), Ze();
}
ut(["change", "click"]);
var Zb = (r, e) => {
  const a = r.target;
  e(a.checked);
}, Qb = /* @__PURE__ */ v('<th scope="col"><input type="checkbox" aria-label="Select all rows" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></th>'), Jb = (r, e, a) => t(e).sortable && a(t(e)), $b = /* @__PURE__ */ v('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), eg = /* @__PURE__ */ v('<th scope="col"><div class="flex items-center gap-2"><span> </span> <!></div></th>'), tg = /* @__PURE__ */ v('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), rg = /* @__PURE__ */ v('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), ag = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, ng = (r) => r.stopPropagation(), og = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></td>'), ig = /* @__PURE__ */ v("<td><!></td>"), lg = /* @__PURE__ */ v("<tr><!><!></tr>"), sg = /* @__PURE__ */ v('<div><table><caption class="sr-only"> </caption><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div>');
const dg = {
  hash: "svelte-a6pjeb",
  code: `
	/* Terminal glow effects */.terminal .table-row:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}

	/* Custom checkbox styling for dark themes */input[type='checkbox'].svelte-a6pjeb:indeterminate {background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 8h8v1H4z'/%3e%3c/svg%3e");}`
};
function Ip(r, e) {
  Ke(e, !0), Je(r, dg);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), c = s(e, "striped", 3, !1), g = s(e, "hover", 3, !0), w = s(e, "bordered", 3, !1), N = s(e, "loading", 3, !1), h = s(e, "sortBy", 3, ""), P = s(e, "sortOrder", 3, "asc"), L = s(e, "selectable", 3, !1), A = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), k = s(e, "stickyHeader", 3, !1), f = s(e, "emptyMessage", 3, "No data available"), B = s(e, "class", 3, ""), $ = zt();
  let y = /* @__PURE__ */ Se(lt(h())), T = /* @__PURE__ */ Se(lt(P())), F = /* @__PURE__ */ Se(lt(A()));
  const H = {
    default: {
      table: "bg-gray-900 text-white",
      header: "bg-gray-800 border-gray-700",
      headerCell: "text-gray-300 border-gray-700",
      row: "border-gray-700",
      rowHover: "hover:bg-gray-800",
      rowSelected: "bg-blue-600/20",
      cell: "text-gray-100 border-gray-700",
      loading: "bg-gray-800/50"
    },
    glass: {
      table: "bg-white/5 backdrop-blur-md text-white",
      header: "bg-white/10 border-white/20",
      headerCell: "text-white/90 border-white/20",
      row: "border-white/10",
      rowHover: "hover:bg-white/5",
      rowSelected: "bg-white/10",
      cell: "text-white/90 border-white/10",
      loading: "bg-white/5"
    },
    terminal: {
      table: `bg-black/90 text-${Pe.terminal.green}`,
      header: `bg-${Pe.terminal.green}/10 border-${Pe.terminal.green}`,
      headerCell: `text-${Pe.terminal.green} border-${Pe.terminal.green}/30`,
      row: `border-${Pe.terminal.green}/20`,
      rowHover: `hover:bg-${Pe.terminal.green}/5`,
      rowSelected: `bg-${Pe.terminal.green}/10`,
      cell: `text-${Pe.terminal.green}/90 border-${Pe.terminal.green}/20`,
      loading: `bg-${Pe.terminal.green}/5`
    }
  }, j = {
    sm: { cell: "px-3 py-2 text-sm", header: "px-3 py-2 text-xs" },
    md: { cell: "px-4 py-3 text-sm", header: "px-4 py-3 text-sm" },
    lg: { cell: "px-6 py-4 text-base", header: "px-6 py-4 text-base" }
  }, q = /* @__PURE__ */ Ee(() => H[l()]), O = /* @__PURE__ */ Ee(() => j[d()]), I = /* @__PURE__ */ Ee(() => () => !t(y) || !a().find((ie) => ie.key === t(y))?.sortable ? n() : [...n()].sort((ie, ne) => {
    const de = ie[t(y)], ge = ne[t(y)];
    if (de === ge) return 0;
    const se = t(T) === "asc";
    return de < ge ? se ? -1 : 1 : se ? 1 : -1;
  }));
  function G(Z) {
    Z.sortable && (t(y) === Z.key ? Y(T, t(T) === "asc" ? "desc" : "asc", !0) : (Y(y, Z.key, !0), Y(T, "asc")), $("sort", { column: Z.key, order: t(T) }));
  }
  function U(Z, ie) {
    $("rowClick", { row: Z, index: ie });
  }
  function R(Z, ie) {
    const ne = Z.id ?? index;
    ie ? t(F).add(ne) : t(F).delete(ne), Y(F, new Set(t(F)), !0), $("rowSelect", { row: Z, selected: ie });
  }
  function C(Z) {
    Z ? Y(F, new Set(n().map((ie, ne) => ie.id ?? ne)), !0) : Y(F, /* @__PURE__ */ new Set(), !0), $("selectAll", { selected: Z });
  }
  function _(Z, ie, ne) {
    return Z.render ? Z.render(ie, ne) : Z.formatter ? Z.formatter(ie) : String(ie ?? "");
  }
  const x = /* @__PURE__ */ Ee(() => n().length > 0 && n().every((Z, ie) => t(F).has(Z.id ?? ie))), S = /* @__PURE__ */ Ee(() => t(F).size > 0 && !t(x)), W = /* @__PURE__ */ Ee(() => V("w-full font-mono rounded-lg overflow-hidden border", t(q).table, t(q).row, w() && "border-2", B())), X = /* @__PURE__ */ Ee(() => V("overflow-auto", e.maxHeight && `max-h-[${e.maxHeight}]`, k() && "relative"));
  var E = sg(), m = i(E), p = i(m), oe = i(p), ce = u(p), ve = i(ce), be = i(ve);
  {
    var te = (Z) => {
      var ie = Qb(), ne = i(ie);
      ne.__change = [Zb, C], M(
        (de) => {
          D(ie, 1, de), Zt(ne, t(x)), ne.indeterminate = t(S);
        },
        [
          () => Q(V(t(O).header, t(q).headerCell, "w-12"))
        ]
      ), o(Z, ie);
    };
    b(be, (Z) => {
      L() && Z(te);
    });
  }
  var K = u(be);
  Ye(K, 17, a, (Z) => Z.key, (Z, ie) => {
    var ne = eg();
    ne.__click = [Jb, ie, G];
    var de = i(ne), ge = i(de), se = i(ge), ue = u(ge, 2);
    {
      var le = (fe) => {
        var pe = $b(), Te = i(pe), Ne = u(Te, 2);
        M(
          (He, Be) => {
            D(Te, 0, He), D(Ne, 0, Be);
          },
          [
            () => Q(V("w-3 h-3 transition-colors", t(y) === t(ie).key && t(T) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => Q(V("w-3 h-3 -mt-1 transition-colors", t(y) === t(ie).key && t(T) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(fe, pe);
      };
      b(ue, (fe) => {
        t(ie).sortable && fe(le);
      });
    }
    qe(ne, (fe, pe) => bt?.(fe, pe), () => ({ enabled: t(ie).sortable, strength: 0.05 })), M(
      (fe) => {
        D(ne, 1, fe), pt(ne, t(ie).width ? `width: ${t(ie).width}` : void 0), Ce(ne, "aria-sort", t(y) === t(ie).key ? t(T) === "asc" ? "ascending" : "descending" : "none"), re(se, t(ie).label);
      },
      [
        () => Q(V(t(O).header, t(q).headerCell, "font-semibold uppercase tracking-wider", `text-${t(ie).align || "left"}`, t(ie).sortable && "cursor-pointer select-none", w() && "border-r last:border-r-0"))
      ]
    ), o(Z, ne);
  });
  var ae = u(ce), z = i(ae);
  {
    var ee = (Z) => {
      var ie = tg(), ne = i(ie);
      M(
        (de) => {
          Ce(ne, "colspan", a().length + (L() ? 1 : 0)), D(ne, 1, de);
        },
        [
          () => Q(V(t(O).cell, t(q).loading, "text-center"))
        ]
      ), o(Z, ie);
    }, J = (Z) => {
      var ie = Ae(), ne = ke(ie);
      {
        var de = (se) => {
          var ue = rg(), le = i(ue), fe = i(le), pe = u(i(fe), 2), Te = i(pe);
          M(
            (Ne) => {
              Ce(le, "colspan", a().length + (L() ? 1 : 0)), D(le, 1, Ne), re(Te, f());
            },
            [
              () => Q(V(t(O).cell, t(q).cell, "text-center text-gray-400"))
            ]
          ), o(se, ue);
        }, ge = (se) => {
          var ue = Ae(), le = ke(ue);
          Ye(le, 19, () => t(I), (fe, pe) => fe.id ?? pe, (fe, pe, Te) => {
            const Ne = /* @__PURE__ */ Ee(() => t(pe).id ?? t(Te)), He = /* @__PURE__ */ Ee(() => t(F).has(t(Ne)));
            var Be = lg();
            Be.__click = () => U(t(pe), t(Te));
            var _e = i(Be);
            {
              var xe = (Re) => {
                var me = og(), we = i(me);
                we.__change = [ag, R, pe], we.__click = [ng], M(
                  (Me) => {
                    D(me, 1, Me), Zt(we, t(He));
                  },
                  [
                    () => Q(V(t(O).cell, t(q).cell, w() && "border-r"))
                  ]
                ), o(Re, me);
              };
              b(_e, (Re) => {
                L() && Re(xe);
              });
            }
            var Ie = u(_e);
            Ye(Ie, 17, a, (Re) => Re.key, (Re, me) => {
              var we = ig(), Me = i(we);
              na(Me, () => oa(_(t(me), t(pe)[t(me).key], t(pe)))), M((Le) => D(we, 1, Le), [
                () => Q(V(t(O).cell, t(q).cell, `text-${t(me).align || "left"}`, w() && "border-r last:border-r-0"))
              ]), o(Re, we);
            }), M((Re) => D(Be, 1, Re), [
              () => Q(V(t(q).row, g() && t(q).rowHover, c() && t(Te) % 2 === 1 && "bg-black/20", t(He) && t(q).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), nt(1, Be, () => gt, () => ({ direction: "up", duration: 100, delay: t(Te) * 20 })), o(fe, Be);
          }), o(se, ue);
        };
        b(
          ne,
          (se) => {
            t(I).length === 0 ? se(de) : se(ge, !1);
          },
          !0
        );
      }
      o(Z, ie);
    };
    b(z, (Z) => {
      N() ? Z(ee) : Z(J, !1);
    });
  }
  M(
    (Z) => {
      D(E, 1, Q(t(X))), D(m, 1, Q(t(W))), re(oe, `Data table with ${n().length ?? ""} rows and ${a().length ?? ""} columns`), D(ce, 1, Z);
    },
    [
      () => Q(V(t(q).header, k() && "sticky top-0 z-10"))
    ]
  ), o(r, E), Ze();
}
ut(["change", "click"]);
const cg = (r, e, a) => {
  r.key === "Enter" ? e(t(a)) : r.key === "ArrowUp" && r.preventDefault();
};
var vg = /* @__PURE__ */ v('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-30 svelte-1c5nvru"></canvas>'), ug = /* @__PURE__ */ v('<span class="glitch svelte-1c5nvru"> </span>'), fg = /* @__PURE__ */ v('<div class="mb-4 svelte-1c5nvru"><div class="flex items-start gap-2 mb-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <span class="text-white svelte-1c5nvru"> </span> <span class="text-xs text-current/40 ml-auto svelte-1c5nvru"> </span></div> <div class="text-current/90 mb-2 whitespace-pre-wrap font-mono svelte-1c5nvru"> </div></div>'), bg = /* @__PURE__ */ v('<div class="mt-4 svelte-1c5nvru"><!></div>'), gg = /* @__PURE__ */ v(`<div><!> <div class="relative z-10 flex items-center justify-between p-4 border-b border-current/20 bg-black/50 svelte-1c5nvru"><div class="flex items-center gap-3 svelte-1c5nvru"><div class="flex gap-2 svelte-1c5nvru"><div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors svelte-1c5nvru"></div></div> <h3 class="text-sm font-mono font-semibold svelte-1c5nvru"><!></h3></div> <div class="flex items-center gap-2 text-xs font-mono svelte-1c5nvru"><span class="px-2 py-1 bg-current/10 rounded svelte-1c5nvru">SECURE</span> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse svelte-1c5nvru"></span></div></div> <div class="relative z-10 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed terminal-scroll svelte-1c5nvru" style="scrollbar-width: thin;"><div class="mb-4 text-current/80 svelte-1c5nvru"><pre class="whitespace-pre-wrap svelte-1c5nvru">╔══════════════════════════════════════════════════════════════╗
║ LIQUID GLASS TERMINAL v2.0 - SECURITY LEVEL: ALPHA-7        ║
║ SYSTEM STATUS: ONLINE │ ENCRYPTION: AES-256 │ UPTIME: 99.9% ║
╚══════════════════════════════════════════════════════════════╝

Connection established. Type 'help' for available commands.</pre></div> <!> <div class="flex items-start gap-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <input class="flex-1 bg-transparent border-none outline-none text-white font-mono svelte-1c5nvru" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-current animate-pulse svelte-1c5nvru"></span></div> <!></div></div>`);
const mg = {
  hash: "svelte-1c5nvru",
  code: `
	/* Glitch Effect */.glitch.svelte-1c5nvru {position:relative;color:white;font-size:inherit;font-weight:inherit;
		animation: svelte-1c5nvru-glitch-skew 1s ease-in-out infinite alternate-reverse;}.glitch.svelte-1c5nvru::before,
	.glitch.svelte-1c5nvru::after {content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;}.glitch.svelte-1c5nvru::before {
		animation: svelte-1c5nvru-glitch-anim 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;color:#ff0000;z-index:-1;}.glitch.svelte-1c5nvru::after {
		animation: svelte-1c5nvru-glitch-anim2 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;color:#00ffff;z-index:-2;}

	@keyframes svelte-1c5nvru-glitch-anim {
		0% {
			clip-path: inset(40% 0 61% 0);
		}
		20% {
			clip-path: inset(92% 0 1% 0);
		}
		40% {
			clip-path: inset(43% 0 1% 0);
		}
		60% {
			clip-path: inset(25% 0 58% 0);
		}
		80% {
			clip-path: inset(54% 0 7% 0);
		}
		100% {
			clip-path: inset(58% 0 43% 0);
		}
	}

	@keyframes svelte-1c5nvru-glitch-anim2 {
		0% {
			clip-path: inset(25% 0 58% 0);
		}
		20% {
			clip-path: inset(54% 0 7% 0);
		}
		40% {
			clip-path: inset(58% 0 43% 0);
		}
		60% {
			clip-path: inset(40% 0 61% 0);
		}
		80% {
			clip-path: inset(92% 0 1% 0);
		}
		100% {
			clip-path: inset(43% 0 1% 0);
		}
	}

	@keyframes svelte-1c5nvru-glitch-skew {
		0% {
			transform: skew(0deg);
		}
		10% {
			transform: skew(-2deg);
		}
		20% {
			transform: skew(2deg);
		}
		30% {
			transform: skew(-1deg);
		}
		40% {
			transform: skew(1deg);
		}
		50% {
			transform: skew(0deg);
		}
		60% {
			transform: skew(-1deg);
		}
		70% {
			transform: skew(2deg);
		}
		80% {
			transform: skew(-2deg);
		}
		90% {
			transform: skew(1deg);
		}
		100% {
			transform: skew(0deg);
		}
	}

	/* Terminal Effects */.terminal-scanlines.svelte-1c5nvru::before {content:'';position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:1000;background:linear-gradient(transparent 98%, rgba(0, 255, 136, 0.08) 100%);background-size:100% 4px;
		animation: svelte-1c5nvru-scanlines 0.1s linear infinite;}

	@keyframes svelte-1c5nvru-scanlines {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(4px);
		}
	}.terminal-flicker.svelte-1c5nvru {
		animation: svelte-1c5nvru-flicker 0.15s infinite linear;}

	@keyframes svelte-1c5nvru-flicker {
		0% {
			opacity: 1;
		}
		98% {
			opacity: 1;
		}
		99% {
			opacity: 0.98;
		}
		100% {
			opacity: 1;
		}
	}.terminal-glitch.svelte-1c5nvru {
		animation: svelte-1c5nvru-terminal-shake 0.1s ease-in-out infinite alternate;}

	@keyframes svelte-1c5nvru-terminal-shake {
		0% {
			transform: translateX(0px);
		}
		25% {
			transform: translateX(-2px);
		}
		50% {
			transform: translateX(2px);
		}
		75% {
			transform: translateX(-1px);
		}
		100% {
			transform: translateX(1px);
		}
	}

	/* Custom Scrollbar */.terminal-scroll.svelte-1c5nvru::-webkit-scrollbar {width:8px;}.terminal-scroll.svelte-1c5nvru::-webkit-scrollbar-track {background:rgba(0, 0, 0, 0.3);}.terminal-scroll.svelte-1c5nvru::-webkit-scrollbar-thumb {background:rgba(0, 255, 136, 0.5);border-radius:4px;}.terminal-scroll.svelte-1c5nvru::-webkit-scrollbar-thumb:hover {background:rgba(0, 255, 136, 0.7);}`
};
function Pp(r, e) {
  Ke(e, !0), Je(r, mg);
  const a = s(e, "title", 3, "◉ LIQUID_GLASS_TERMINAL_v2.0"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({
    help: `╔═══════════════════════════════════════════════════════════════╗
║  AVAILABLE COMMANDS                                           ║
╠═══════════════════════════════════════════════════════════════╣
║  whoami     │ Display system architect identity             ║
║  skills     │ Show technology matrix                        ║
║  projects   │ List active projects                          ║
║  contact    │ Communication protocols                       ║
║  matrix     │ Initialize matrix rain effect                 ║
║  glitch     │ Toggle terminal glitch effects                ║
║  scan       │ Activate system scanner                       ║
║  clear      │ Clear terminal buffer                         ║
╚═══════════════════════════════════════════════════════════════╝`,
    whoami: `┌─[SYSTEM_ARCHITECT@liquid-terminal]─[~/dev/brand-system]
└─$ echo $USER_PROFILE

█▀▀ █▀▀ █▀█ █▀▄ █▀▀   █▀▄ █▀▀ █ █ █▀▀ █   █▀█ █▀█ █▀▀ █▀█
█▄▄ █▄█ █▄█ █▄▀ █▄▄   █▄▀ █▄▄ ▀▄▀ █▄▄ █▄▄ █▄█ █▀▀ █▄▄ █▀▄

│ ROLE: Full Stack Developer & Design System Architect
│ SPEC: Liquid Glass Terminal Fusion Systems
│ STATUS: [████████████████████████████████] ONLINE
│ CLEARANCE: ALPHA-7`,
    skills: `╔══════════════════════════════════════════════════════════════╗
║                    TECHNOLOGY MATRIX                         ║
╠══════════════════════════════════════════════════════════════╣
║ FRONTEND    ■■■■■■■■■■ 100%  │ Svelte, TypeScript, WebGL     ║
║ BACKEND     ■■■■■■■■■□  90%  │ Node.js, Rust, WebAssembly    ║
║ 3D/GRAPHICS ■■■■■■■■■■ 100%  │ Three.js, Threlte, Shaders    ║
║ DESIGN SYS  ■■■■■■■■■■ 100%  │ Liquid Glass, Glassmorphism   ║
║ TERMINAL    ■■■■■■■■■■ 100%  │ CLI, Zsh, PowerShell          ║
║ HACKING     ■■■■■■■■□□  80%  │ Pentesting, OSINT, CTF        ║
╚══════════════════════════════════════════════════════════════╝`,
    projects: `┌─ ACTIVE PROJECTS ─────────────────────────────────────────┐
│                                                           │
│ ▸ LIQUIDIFY             │ React → Svelte UI Library     │
│ ▸ GLASS_TERMINAL        │ Advanced Terminal Interface    │
│ ▸ NEURAL_VIZ            │ AI Visualization Engine       │
│ ▸ BRAND_SYSTEM          │ Corporate Identity Matrix      │
│ ▸ PORTFOLIO_v3          │ Personal Hacker Portfolio      │
│                                                           │
└───────────────────────────────────────────────────────────┘`,
    contact: `╔══════════════════════════════════════════════════════════════╗
║                  COMMUNICATION PROTOCOLS                    ║
╠══════════════════════════════════════════════════════════════╣
║ EMAIL    │ tulio@tuliocunha.dev                             ║
║ GITHUB   │ https://github.com/tuliopc23                     ║
║ LINKEDIN │ https://linkedin.com/in/tulio-cunha              ║
║ DISCORD  │ tuliopc23#1337                                   ║
║ TELEGRAM │ @tuliopc23                                       ║
╚══════════════════════════════════════════════════════════════╝`,
    matrix: `INITIALIZING MATRIX RAIN PROTOCOL...
[████████████████████████████████] 100%
MATRIX EFFECT: ACTIVE
CODE RAIN: STREAMING
REALITY.EXE HAS STOPPED WORKING`,
    glitch: `G̴L̵I̴T̵C̶H̸ ̷E̵F̸F̵E̸C̷T̸ ̵T̶O̴G̸G̵L̸E̷D̵
█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█
S̷Y̸S̴T̵E̷M̶ ̸I̴N̵S̵T̸A̷B̸I̵L̴I̷T̸Y̵ ̶D̷E̸T̴E̸C̵T̷E̶D̸
█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█`,
    scan: `┌─ SYSTEM SCANNER ACTIVE ─┐
│ Scanning ports...       │
│ [###               ] 15%│
│ Found: 3 open services  │
│ SSH (22) - OPEN         │
│ HTTP (80) - OPEN        │
│ HTTPS (443) - OPEN      │
└─────────────────────────┘`,
    clear: ""
  })), d = s(e, "autoPlay", 3, !1), c = s(e, "theme", 3, "hacker");
  s(e, "enableGlitch", 3, !0);
  const g = s(e, "enableMatrixRain", 3, !1), w = s(e, "enableScanlines", 3, !0), N = s(e, "enableFlicker", 3, !1);
  zt();
  let h = /* @__PURE__ */ Se(void 0), P = /* @__PURE__ */ Se(void 0), L = /* @__PURE__ */ Se(""), A = /* @__PURE__ */ Se(lt([])), k = /* @__PURE__ */ Se(!1), f = /* @__PURE__ */ Se(lt(g()));
  const B = lt(w()), $ = lt(N()), y = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  let T = [], F;
  const H = (K) => {
    const ae = K.trim().toLowerCase();
    let z = "";
    if (ae === "clear") {
      Y(A, [], !0), Y(L, "");
      return;
    } else ae === "matrix" ? (Y(f, !t(f)), t(f) ? q() : O(), z = l()[ae] || "MATRIX RAIN DEACTIVATED") : ae === "glitch" ? (j(), z = l()[ae] || "GLITCH EFFECT ACTIVATED") : z = l()[ae] || `zsh: command not found: ${K}

Try 'help' for available commands.`;
    Y(
      A,
      [
        ...t(A),
        { command: ae, output: z, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), Y(L, ""), setTimeout(
      () => {
        t(h) && t(h).scrollTo({ top: t(h).scrollHeight, behavior: "smooth" });
      },
      50
    );
  }, j = () => {
    Y(k, !0), setTimeout(
      () => {
        Y(k, !1);
      },
      1e3
    );
  }, q = () => {
    if (!t(P)) return;
    const K = t(P).getContext("2d"), ae = 14, z = Math.floor(t(P).width / ae);
    T = Array(z).fill(0);
    const ee = () => {
      K.fillStyle = "rgba(0, 0, 0, 0.05)", K.fillRect(0, 0, t(P).width, t(P).height), K.fillStyle = "#00ff88", K.font = `${ae}px 'PP Supply Mono', monospace`;
      for (let Z = 0; Z < T.length; Z++) {
        const ie = y[Math.floor(Math.random() * y.length)];
        K.fillText(ie, Z * ae, T[Z] * ae), T[Z] * ae > t(P).height && Math.random() > 0.975 && (T[Z] = 0), T[Z]++;
      }
    }, J = () => {
      ee(), F = requestAnimationFrame(J);
    };
    J();
  }, O = () => {
    F && cancelAnimationFrame(F);
  }, I = () => {
    t(P) && t(h) && (t(P).width = t(h).offsetWidth, t(P).height = t(h).offsetHeight);
  };
  yt(() => (I(), t(f) && q(), d() && setTimeout(
    () => {
      H("whoami");
    },
    1e3
  ), () => {
    O();
  }));
  const G = {
    matrix: "bg-black text-green-400 border-green-500/30",
    cyberpunk: "bg-purple-900/20 text-cyan-400 border-cyan-500/30",
    hacker: "bg-black text-terminal-green border-terminal-green/30",
    terminal: "bg-terminal-bg text-terminal-fg border-white/20"
  };
  var U = gg();
  Ot("resize", ko, I);
  var R = i(U);
  {
    var C = (K) => {
      var ae = vg();
      at(ae, (z) => Y(P, z), () => t(P)), o(K, ae);
    };
    b(R, (K) => {
      t(f) && K(C);
    });
  }
  var _ = u(R, 2), x = i(_), S = u(i(x), 2), W = i(S);
  {
    var X = (K) => {
      var ae = ug(), z = i(ae);
      M(() => {
        Ce(ae, "data-text", a()), re(z, a());
      }), o(K, ae);
    }, E = (K) => {
      var ae = St();
      M(() => re(ae, a())), o(K, ae);
    };
    b(W, (K) => {
      t(k) ? K(X) : K(E, !1);
    });
  }
  var m = u(_, 2), p = u(i(m), 2);
  Ye(p, 19, () => t(A), (K, ae) => K.timestamp?.getTime?.() ?? ae, (K, ae) => {
    var z = fg(), ee = i(z), J = i(ee);
    J.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
    var Z = u(J, 2), ie = i(Z), ne = u(Z, 2), de = i(ne), ge = u(ee, 2), se = i(ge);
    M(
      (ue) => {
        re(ie, t(ae).command), re(de, ue), re(se, t(ae).output);
      },
      [() => t(ae).timestamp.toLocaleTimeString()]
    ), o(K, z);
  });
  var oe = u(p, 2), ce = i(oe);
  ce.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
  var ve = u(ce, 2);
  ve.__keydown = [cg, H, L];
  var be = u(oe, 2);
  {
    var te = (K) => {
      var ae = bg(), z = i(ae);
      it(z, () => e.children), o(K, ae);
    };
    b(be, (K) => {
      e.children && K(te);
    });
  }
  at(m, (K) => Y(h, K), () => t(h)), M((K) => D(U, 1, K, "svelte-1c5nvru"), [
    () => Q(V("relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300", "border shadow-2xl shadow-black/25 transform-gpu will-change-transform", G[c()], B && "terminal-scanlines", $ && "terminal-flicker", t(k) && "terminal-glitch", n()))
  ]), or(ve, () => t(L), (K) => Y(L, K)), o(r, U), Ze();
}
ut(["keydown"]);
const hg = (r) => r;
function pg(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Wn(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function oi(r, { delay: e = 0, duration: a = 400, easing: n = hg } = {}) {
  const l = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (d) => `opacity: ${d * l}`
  };
}
function ii(r, { delay: e = 0, duration: a = 400, easing: n = pg, x: l = 0, y: d = 0, opacity: c = 0 } = {}) {
  const g = getComputedStyle(r), w = +g.opacity, N = g.transform === "none" ? "" : g.transform, h = w * (1 - c), [P, L] = Wn(l), [A, k] = Wn(d);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (f, B) => `
			transform: ${N} translate(${(1 - f) * P}${L}, ${(1 - f) * A}${k});
			opacity: ${w - h * B}`
  };
}
var xg = /* @__PURE__ */ v('<div class="flex gap-1"><div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div></div>'), wg = /* @__PURE__ */ v('<div><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> <span class="text-sm font-mono">Analyzing patterns...</span></div>'), _g = (r, e, a) => e(t(a)), yg = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, kg = /* @__PURE__ */ v("<span> </span>"), Cg = /* @__PURE__ */ v('<div class="flex items-center gap-2"><span> </span> <div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div></div></div></div>'), Sg = /* @__PURE__ */ v("<code> </code>"), Eg = /* @__PURE__ */ v('<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 svelte-4oclra"><div>Examples:</div> <div class="flex flex-wrap gap-1"></div></div>'), Tg = /* @__PURE__ */ v('<div role="button" tabindex="0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><!> <span> </span></div> <!></div> <p> </p> <div> </div> <!></div>'), Mg = /* @__PURE__ */ v('<div class="space-y-2"></div>'), Ag = /* @__PURE__ */ v('<div><div class="text-2xl mb-2">🤔</div> <p class="text-sm"> </p> <p class="text-xs mt-1">Try a different search term</p></div>'), zg = /* @__PURE__ */ v('<div><div class="flex items-center justify-between"><span>Use ↑↓ to navigate, Enter to select</span> <span>AI-powered suggestions</span></div></div>'), Ig = /* @__PURE__ */ v('<div><div><div class="flex items-center gap-2"><span class="text-sm font-bold">🤖 AI SUGGESTIONS</span> <!></div> <span> </span></div> <!> <!> <!> <!></div>');
const Pg = {
  hash: "svelte-4oclra",
  code: `
	/* Smooth animations */.group.svelte-4oclra:hover .group-hover\\:opacity-100:where(.svelte-4oclra) {opacity:1;}`
};
function Lp(r, e) {
  Ke(e, !0), Je(r, Pg);
  const [a, n] = Qo(), l = () => Zo(k, "$aiSuggestions", a), d = s(e, "query", 3, ""), c = s(e, "suggestions", 19, () => []), g = s(e, "maxSuggestions", 3, 6), w = s(e, "showConfidence", 3, !0), N = s(e, "showCategories", 3, !0), h = s(e, "theme", 3, "terminal"), P = s(e, "aiMode", 3, !0), L = s(e, "class", 3, ""), A = zt(), k = hn([]);
  let f = /* @__PURE__ */ Se(-1), B = /* @__PURE__ */ Se(!1);
  const $ = [
    {
      id: "ls",
      command: "ls",
      description: "List directory contents with detailed information",
      category: "file",
      confidence: 0.95,
      usage: "ls [options] [directory]",
      parameters: ["-l", "-a", "-h", "-t", "-r"],
      examples: ["ls -la", "ls -lh /home", "ls -lt"]
    },
    {
      id: "grep",
      command: "grep",
      description: "Search text patterns in files",
      category: "file",
      confidence: 0.92,
      usage: "grep [options] pattern [file...]",
      parameters: ["-r", "-i", "-n", "-v", "-E"],
      examples: ['grep -r "function" .', 'grep -n "error" log.txt']
    },
    {
      id: "git-status",
      command: "git status",
      description: "Show working tree status and staged changes",
      category: "development",
      confidence: 0.98,
      usage: "git status [options]",
      parameters: ["-s", "--porcelain", "--branch"],
      examples: ["git status", "git status -s"]
    },
    {
      id: "npm-install",
      command: "npm install",
      description: "Install dependencies from package.json",
      category: "development",
      confidence: 0.94,
      usage: "npm install [package] [options]",
      parameters: ["--save", "--save-dev", "--global", "--force"],
      examples: ["npm install", "npm install lodash --save"]
    },
    {
      id: "curl",
      command: "curl",
      description: "Transfer data from or to network servers",
      category: "network",
      confidence: 0.89,
      usage: "curl [options] [URL...]",
      parameters: ["-X", "-H", "-d", "-o", "-L"],
      examples: [
        "curl -X GET https://api.example.com",
        'curl -H "Content-Type: application/json"'
      ]
    },
    {
      id: "docker-ps",
      command: "docker ps",
      description: "List running Docker containers",
      category: "system",
      confidence: 0.93,
      usage: "docker ps [options]",
      parameters: ["-a", "--format", "--filter"],
      examples: ["docker ps", "docker ps -a"]
    },
    {
      id: "tail",
      command: "tail",
      description: "Display last lines of files in real-time",
      category: "file",
      confidence: 0.91,
      usage: "tail [options] [file...]",
      parameters: ["-f", "-n", "-c"],
      examples: ["tail -f /var/log/syslog", "tail -n 50 error.log"]
    },
    {
      id: "htop",
      command: "htop",
      description: "Interactive process viewer and system monitor",
      category: "process",
      confidence: 0.87,
      usage: "htop [options]",
      parameters: ["-d", "-u", "--sort-key"],
      examples: ["htop", "htop -d 5"]
    }
  ], T = {
    terminal: {
      bg: "bg-terminal-bg/95 border-terminal-green/30",
      text: "text-terminal-green",
      accent: "text-terminal-cyan",
      muted: "text-terminal-green/60",
      selected: "bg-terminal-green/20",
      category: "text-terminal-blue"
    },
    cyberpunk: {
      bg: "bg-purple-950/95 border-pink-500/30",
      text: "text-pink-300",
      accent: "text-cyan-300",
      muted: "text-pink-300/60",
      selected: "bg-pink-500/20",
      category: "text-purple-300"
    },
    neural: {
      bg: "bg-slate-900/95 border-blue-400/30",
      text: "text-blue-300",
      accent: "text-purple-300",
      muted: "text-blue-300/60",
      selected: "bg-blue-500/20",
      category: "text-indigo-300"
    }
  }[h()], F = {
    system: { icon: "⚙️", color: "text-blue-400" },
    development: { icon: "💻", color: "text-green-400" },
    network: { icon: "🌐", color: "text-purple-400" },
    file: { icon: "📁", color: "text-yellow-400" },
    process: { icon: "⚡", color: "text-orange-400" },
    ai: { icon: "🤖", color: "text-cyan-400" }
  }, H = async (_) => {
    Y(B, !0), await new Promise((S) => setTimeout(S, 800 + Math.random() * 400));
    const x = $.filter((S) => S.command.toLowerCase().includes(_.toLowerCase()) || S.description.toLowerCase().includes(_.toLowerCase()) || S.category.toLowerCase().includes(_.toLowerCase())).map((S) => ({
      ...S,
      confidence: Math.min(0.98, S.confidence + Math.random() * 0.1)
    })).sort((S, W) => W.confidence - S.confidence).slice(0, g());
    return Y(B, !1), x;
  }, j = async (_) => {
    if (!_.trim()) {
      k.set([]);
      return;
    }
    if (P()) {
      const x = await H(_);
      k.set(x);
    } else {
      const x = c().slice(0, g());
      k.set(x);
    }
  }, q = (_) => {
    const x = l();
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), Y(f, Math.min(t(f) + 1, x.length - 1), !0);
        break;
      case "ArrowUp":
        _.preventDefault(), Y(f, Math.max(t(f) - 1, -1), !0);
        break;
      case "Enter":
        _.preventDefault(), t(f) >= 0 && x[t(f)] && O(x[t(f)]);
        break;
      case "Escape":
        Y(f, -1), k.set([]);
        break;
    }
  }, O = (_) => {
    A("select", { command: _, timestamp: /* @__PURE__ */ new Date() }), Y(f, -1);
  }, I = (_) => _ >= 0.9 ? "text-green-400" : _ >= 0.7 ? "text-yellow-400" : _ >= 0.5 ? "text-orange-400" : "text-red-400", G = (_) => _ >= 0.9 ? "HIGH" : _ >= 0.7 ? "MED" : "LOW";
  xt(() => {
    j(d());
  }), yt(() => (window.addEventListener("keydown", q), () => {
    window.removeEventListener("keydown", q);
  }));
  var U = Ae(), R = ke(U);
  {
    var C = (_) => {
      var x = Ig(), S = i(x), W = i(S), X = u(i(W), 2);
      {
        var E = (ee) => {
          var J = xg();
          o(ee, J);
        };
        b(X, (ee) => {
          t(B) && ee(E);
        });
      }
      var m = u(W, 2), p = i(m), oe = u(S, 2);
      {
        var ce = (ee) => {
          var J = wg();
          M((Z) => D(J, 1, Z, "svelte-4oclra"), [
            () => Q(V("flex items-center gap-3 p-3 rounded-lg bg-black/20", T.muted))
          ]), o(ee, J);
        };
        b(oe, (ee) => {
          t(B) && ee(ce);
        });
      }
      var ve = u(oe, 2);
      {
        var be = (ee) => {
          var J = Mg();
          Ye(J, 7, l, (Z) => Z.command, (Z, ie, ne) => {
            var de = Tg();
            de.__click = [_g, O, ie], de.__keydown = [yg, O, ie];
            var ge = i(de), se = i(ge), ue = i(se);
            {
              var le = (me) => {
                var we = kg(), Me = i(we);
                M(() => {
                  D(we, 1, Q(F[t(ie).category].color), "svelte-4oclra"), re(Me, F[t(ie).category].icon);
                }), o(me, we);
              };
              b(ue, (me) => {
                N() && me(le);
              });
            }
            var fe = u(ue, 2), pe = i(fe), Te = u(se, 2);
            {
              var Ne = (me) => {
                var we = Cg(), Me = i(we), Le = i(Me), ye = u(Me, 2), he = i(ye);
                M(
                  (ze, De, Oe) => {
                    D(Me, 1, ze, "svelte-4oclra"), re(Le, De), D(he, 1, Oe, "svelte-4oclra"), pt(he, `width: ${t(ie).confidence * 100}%`);
                  },
                  [
                    () => Q(V("text-xs font-bold", I(t(ie).confidence))),
                    () => G(t(ie).confidence),
                    () => Q(V("h-full rounded-full transition-all duration-300", I(t(ie).confidence).replace("text-", "bg-")))
                  ]
                ), o(me, we);
              };
              b(Te, (me) => {
                w() && me(Ne);
              });
            }
            var He = u(ge, 2), Be = i(He), _e = u(He, 2), xe = i(_e), Ie = u(_e, 2);
            {
              var Re = (me) => {
                var we = Eg(), Me = i(we), Le = u(Me, 2);
                Ye(Le, 20, () => t(ie).examples, (ye) => ye, (ye, he) => {
                  var ze = Sg(), De = i(ze);
                  M(
                    (Oe) => {
                      D(ze, 1, Oe, "svelte-4oclra"), re(De, he);
                    },
                    [
                      () => Q(V("text-xs px-2 py-1 rounded bg-black/40", T.muted))
                    ]
                  ), o(ye, ze);
                }), M((ye) => D(Me, 1, ye, "svelte-4oclra"), [
                  () => Q(V("text-xs font-bold mb-1", T.text))
                ]), o(me, we);
              };
              b(Ie, (me) => {
                t(ie).examples && t(ie).examples.length > 0 && me(Re);
              });
            }
            M(
              (me, we, Me, Le) => {
                D(de, 1, me, "svelte-4oclra"), Ce(de, "aria-label", `Execute command: ${t(ie).command}`), D(fe, 1, we, "svelte-4oclra"), re(pe, t(ie).command), D(He, 1, Me, "svelte-4oclra"), re(Be, t(ie).description), D(_e, 1, Le, "svelte-4oclra"), re(xe, t(ie).usage);
              },
              [
                () => Q(V("p-3 rounded-lg cursor-pointer transition-all duration-200", "hover:scale-[1.02] transform-gpu border border-transparent", t(ne) === t(f) ? T.selected : "hover:bg-white/5", "group")),
                () => Q(V("font-mono font-bold", T.text)),
                () => Q(V("text-sm mb-2", T.muted)),
                () => Q(V("text-xs font-mono p-2 rounded bg-black/30", T.accent))
              ]
            ), nt(3, de, () => oi, () => ({ duration: 150, delay: t(ne) * 50 })), o(Z, de);
          }), o(ee, J);
        };
        b(ve, (ee) => {
          !t(B) && l().length > 0 && ee(be);
        });
      }
      var te = u(ve, 2);
      {
        var K = (ee) => {
          var J = Ag(), Z = u(i(J), 2), ie = i(Z);
          M(
            (ne) => {
              D(J, 1, ne, "svelte-4oclra"), re(ie, `No suggestions found for "${d() ?? ""}"`);
            },
            [() => Q(V("text-center py-8", T.muted))]
          ), o(ee, J);
        };
        b(te, (ee) => {
          !t(B) && d().trim() && l().length === 0 && ee(K);
        });
      }
      var ae = u(te, 2);
      {
        var z = (ee) => {
          var J = zg();
          M((Z) => D(J, 1, Z, "svelte-4oclra"), [
            () => Q(V("mt-3 pt-2 border-t border-current/20 text-xs", T.muted))
          ]), o(ee, J);
        };
        b(ae, (ee) => {
          !t(B) && l().length > 0 && ee(z);
        });
      }
      M(
        (ee, J, Z) => {
          D(x, 1, ee, "svelte-4oclra"), D(S, 1, J, "svelte-4oclra"), D(m, 1, Z, "svelte-4oclra"), re(p, `${l().length ?? ""} matches`);
        },
        [
          () => Q(V("relative mt-2 p-4 rounded-lg border backdrop-blur-md", "shadow-2xl transform-gpu", T.bg, L())),
          () => Q(V("flex items-center justify-between mb-3 pb-2 border-b border-current/20", T.text)),
          () => Q(V("text-xs", T.muted))
        ]
      ), nt(3, x, () => ii, () => ({ y: 10, duration: 200 })), o(_, x);
    };
    b(R, (_) => {
      d().trim() && (l().length > 0 || t(B)) && _(C);
    });
  }
  o(r, U), Ze(), n();
}
ut(["click", "keydown"]);
var Lg = /* @__PURE__ */ v("<span><!></span>");
const Dg = {
  hash: "svelte-ithyll",
  code: `.glitching.svelte-ithyll {
		animation: svelte-ithyll-glitch-skew 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;}.glitching.svelte-ithyll::before,
	.glitching.svelte-ithyll::after {content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;}.glitching.svelte-ithyll::before {
		animation: svelte-ithyll-glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;color:var(--glitch-color-1);z-index:-1;clip-path:polygon(0 2%, 100% 2%, 100% 5%, 0 5%);}.glitching.svelte-ithyll::after {
		animation: svelte-ithyll-glitch-anim2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;color:var(--glitch-color-2);z-index:-2;clip-path:polygon(0 78%, 100% 78%, 100% 100%, 0 100%);}

	@keyframes svelte-ithyll-glitch-anim {
		0% {
			clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		2% {
			clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		4% {
			clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		6% {
			clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		8% {
			clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		10% {
			clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		12% {
			clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		14% {
			clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		16% {
			clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		18% {
			clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		20% {
			clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		21.9% {
			opacity: 1;
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		22% {
			opacity: 0;
			transform: translate(0);
		}
		100% {
			opacity: 0;
			transform: translate(0);
		}
	}

	@keyframes svelte-ithyll-glitch-anim2 {
		0% {
			clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		3% {
			clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		5% {
			clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		7% {
			clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		9% {
			clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		11% {
			clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		13% {
			clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		15% {
			clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		17% {
			clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		19% {
			clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		20% {
			clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		21.9% {
			opacity: 1;
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		22% {
			opacity: 0;
			transform: translate(0);
		}
		100% {
			opacity: 0;
			transform: translate(0);
		}
	}

	@keyframes svelte-ithyll-glitch-skew {
		0% {
			transform: skew(0deg);
			filter: hue-rotate(0deg);
		}
		10% {
			transform: skew(-2deg);
			filter: hue-rotate(90deg);
		}
		20% {
			transform: skew(2deg);
			filter: hue-rotate(180deg);
		}
		30% {
			transform: skew(-1deg);
			filter: hue-rotate(270deg);
		}
		40% {
			transform: skew(1deg);
			filter: hue-rotate(360deg);
		}
		50% {
			transform: skew(0deg);
			filter: hue-rotate(45deg);
		}
		60% {
			transform: skew(-1deg);
			filter: hue-rotate(135deg);
		}
		70% {
			transform: skew(2deg);
			filter: hue-rotate(225deg);
		}
		80% {
			transform: skew(-2deg);
			filter: hue-rotate(315deg);
		}
		90% {
			transform: skew(1deg);
			filter: hue-rotate(405deg);
		}
		100% {
			transform: skew(0deg);
			filter: hue-rotate(0deg);
		}
	}

	@keyframes svelte-ithyll-glitch-color {
		0%,
		100% {
			color: currentColor;
		}
		20% {
			color: var(--glitch-color-1);
		}
		40% {
			color: var(--glitch-color-2);
		}
		60% {
			color: var(--glitch-color-3);
		}
		80% {
			color: var(--glitch-color-1);
		}
	}`
};
function jg(r, e) {
  Ke(e, !0), Je(r, Dg);
  const a = s(e, "class", 3, ""), n = s(e, "intensity", 3, "medium"), l = s(e, "continuous", 3, !1), d = s(e, "trigger", 3, !1);
  s(e, "speed", 3, 0.1);
  const c = s(e, "colors", 19, () => ["#ff0000", "#00ffff", "#ff00ff"]);
  let g, w = /* @__PURE__ */ Se(!1), N;
  const P = {
    low: { duration: 200, frequency: 3e3, distortion: 2, layers: 2 },
    medium: { duration: 400, frequency: 2e3, distortion: 4, layers: 3 },
    high: { duration: 600, frequency: 1e3, distortion: 8, layers: 4 },
    extreme: { duration: 1e3, frequency: 500, distortion: 16, layers: 6 }
  }()[n()], L = () => {
    t(w) || (Y(w, !0), g && (g.style.animation = `
				glitch-skew ${P.duration}ms ease-in-out,
				glitch-color ${P.duration}ms linear
			`), setTimeout(
      () => {
        Y(w, !1), g && (g.style.animation = "");
      },
      P.duration
    ));
  }, A = () => {
    l() && (N = setInterval(
      () => {
        Math.random() < 0.3 && L();
      },
      P.frequency
    ));
  }, k = () => {
    N && clearInterval(N);
  };
  xt(() => {
    d() && L();
  }), yt(() => (l() && A(), () => {
    k();
  }));
  const f = "!@#$%^&*()_+-=[]{}|;:,.<>?~`", B = (H, j) => H.split("").map((q) => Math.random() < j / 100 ? f[Math.floor(Math.random() * f().length)] : q).join("");
  var $ = Lg(), y = i($);
  {
    var T = (H) => {
      var j = St();
      M((q) => re(j, q), [() => B(e.text, 20)]), o(H, j);
    }, F = (H) => {
      var j = St();
      M(() => re(j, e.text)), o(H, j);
    };
    b(y, (H) => {
      t(w) && n() === "extreme" ? H(T) : H(F, !1);
    });
  }
  at($, (H) => g = H, () => g), M(
    (H, j, q, O) => {
      D($, 1, H, "svelte-ithyll"), Ce($, "data-text", e.text), pt($, `
		--glitch-color-1: ${j ?? ""};
		--glitch-color-2: ${q ?? ""};
		--glitch-color-3: ${O ?? ""};
		--glitch-distortion: ${P.distortion ?? ""}px;
	`);
    },
    [
      () => Q(V("relative inline-block font-mono", t(w) && "glitching", a())),
      () => c()()[0] || "#ff0000",
      () => c()()[1] || "#00ffff",
      () => c()()[2] || "#ff00ff"
    ]
  ), o(r, $), Ze();
}
var Rg = /* @__PURE__ */ v('<div class="w-2 h-2 rounded-full bg-current animate-ping svelte-11w1x2x"></div>'), Ng = /* @__PURE__ */ v("<span> </span>"), qg = /* @__PURE__ */ v("<span> </span>"), Og = /* @__PURE__ */ v("<span> </span>"), Bg = (r, e) => {
  r.stopPropagation(), e();
}, Fg = /* @__PURE__ */ v('<button title="Copy command">📋</button>'), Hg = /* @__PURE__ */ v("<div> </div>"), Vg = /* @__PURE__ */ v("<div> </div>"), Gg = /* @__PURE__ */ v('<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse svelte-11w1x2x"></div>'), Ug = /* @__PURE__ */ v('<div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse svelte-11w1x2x"></div>'), Yg = /* @__PURE__ */ v('<div><div class="absolute top-2 right-2 flex items-center gap-2 svelte-11w1x2x"><div><!></div> <!></div> <div class="flex items-start gap-2 mb-2 font-mono svelte-11w1x2x"><!> <div class="flex-1 svelte-11w1x2x"><!></div> <!></div> <!> <!> <!> <!></div>');
const Wg = {
  hash: "svelte-11w1x2x",
  code: `
	/* Terminal-like glow effect */.group.svelte-11w1x2x:hover .group-hover\\:opacity-100:where(.svelte-11w1x2x) {opacity:1;}

	/* Processing bar animation */
	@keyframes svelte-11w1x2x-processing {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}

	/* Glitch border effect */.glitch-border.svelte-11w1x2x {
		animation: svelte-11w1x2x-glitch-border 0.3s ease-in-out;}

	@keyframes svelte-11w1x2x-glitch-border {
		0%,
		100% {
			border-color: currentColor;
		}
		25% {
			border-color: #ff0080;
		}
		50% {
			border-color: #00ffff;
		}
		75% {
			border-color: #ffff00;
		}
	}`
};
function Dp(r, e) {
  Ke(e, !0), Je(r, Wg);
  let a = s(e, "output", 3, ""), n = s(e, "status", 7, "idle"), l = s(e, "showPrompt", 3, !0), d = s(e, "showTimestamp", 3, !0), c = s(e, "interactive", 3, !1), g = s(e, "theme", 3, "terminal"), w = s(e, "enableGlitch", 3, !1), N = s(e, "enableSound", 3, !1), h = s(e, "class", 3, "");
  const P = zt();
  let L, A = /* @__PURE__ */ Se(!1), k = /* @__PURE__ */ Se(!1), f = /* @__PURE__ */ Se(0), B = 0;
  const y = {
    terminal: {
      bg: "bg-terminal-bg border-terminal-green/30",
      prompt: "text-terminal-green",
      command: "text-white",
      output: "text-terminal-blue",
      accent: "text-terminal-cyan",
      glow: "shadow-terminal-green/20"
    },
    cyberpunk: {
      bg: "bg-purple-950/80 border-pink-500/30",
      prompt: "text-pink-400",
      command: "text-white",
      output: "text-cyan-300",
      accent: "text-yellow-300",
      glow: "shadow-pink-500/20"
    },
    matrix: {
      bg: "bg-black border-green-500/30",
      prompt: "text-green-400",
      command: "text-green-300",
      output: "text-green-200",
      accent: "text-green-100",
      glow: "shadow-green-500/20"
    },
    neural: {
      bg: "bg-slate-900/80 border-blue-400/30",
      prompt: "text-blue-400",
      command: "text-white",
      output: "text-blue-200",
      accent: "text-purple-300",
      glow: "shadow-blue-500/20"
    }
  }[g()], F = {
    idle: {
      icon: "○",
      color: "text-gray-400",
      bgColor: "bg-gray-500/20",
      borderColor: "border-gray-500/30"
    },
    running: {
      icon: "●",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30"
    },
    success: {
      icon: "✓",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    error: {
      icon: "✗",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30"
    },
    warning: {
      icon: "⚠",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30"
    }
  }[n()], j = {
    terminal: "$ ",
    cyberpunk: ">>> ",
    matrix: "> ",
    neural: "◈ "
  }[g()], q = (le) => {
    if (!N()) return;
    const fe = new (window.AudioContext || window.webkitAudioContext)(), pe = fe.createOscillator(), Te = fe.createGain();
    switch (pe.connect(Te), Te.connect(fe.destination), le) {
      case "execute":
        pe.frequency.setValueAtTime(800, fe.currentTime), pe.frequency.exponentialRampToValueAtTime(400, fe.currentTime + 0.1);
        break;
      case "success":
        pe.frequency.setValueAtTime(523.25, fe.currentTime), pe.frequency.setValueAtTime(659.25, fe.currentTime + 0.1);
        break;
      case "error":
        pe.frequency.setValueAtTime(220, fe.currentTime), pe.frequency.exponentialRampToValueAtTime(110, fe.currentTime + 0.2);
        break;
    }
    Te.gain.setValueAtTime(0.1, fe.currentTime), Te.gain.exponentialRampToValueAtTime(0.01, fe.currentTime + 0.2), pe.start(fe.currentTime), pe.stop(fe.currentTime + 0.2);
  }, O = () => {
    !c() || n() === "running" || (B = performance.now(), n("running"), Y(f, 0), w() && (Y(k, !0), setTimeout(
      () => {
        Y(k, !1);
      },
      300
    )), q("execute"), P("execute", {
      command: e.command,
      timestamp: /* @__PURE__ */ new Date(),
      theme: g()
    }));
  };
  xt(() => {
    if (n() === "running") {
      const le = setInterval(
        () => {
          Y(f, performance.now() - B);
        },
        10
      );
      return () => clearInterval(le);
    } else n() === "success" ? q("success") : n() === "error" && q("error");
  });
  const I = async () => {
    try {
      await navigator.clipboard.writeText(e.command), P("copy", { command: e.command });
    } catch (le) {
      console.error("Failed to copy command:", le);
    }
  }, G = (le) => le < 1e3 ? `${Math.round(le)}ms` : `${(le / 1e3).toFixed(2)}s`;
  yt(() => {
    c() && (L.style.cursor = "pointer");
  });
  var U = Yg(), R = () => Y(A, !0), C = () => Y(A, !1), _ = (le) => {
    c() && (le.key === "Enter" || le.key === " ") && (le.preventDefault(), O());
  };
  Qe(
    U,
    (le) => ({
      class: le,
      ...c() ? {
        role: "button",
        tabindex: 0,
        "aria-label": `Execute command: ${e.command}`
      } : { role: "article" },
      onmouseenter: R,
      onmouseleave: C,
      onclick: O,
      onkeydown: _
    }),
    [
      () => V("relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300", "hover:scale-[1.02] hover:shadow-lg transform-gpu", y.bg, y.glow, F.borderColor, c() && "cursor-pointer hover:brightness-110", h())
    ],
    void 0,
    "svelte-11w1x2x"
  );
  var x = i(U), S = i(x), W = i(S);
  {
    var X = (le) => {
      var fe = Rg();
      o(le, fe);
    }, E = (le) => {
      var fe = St();
      M(() => re(fe, F.icon)), o(le, fe);
    };
    b(W, (le) => {
      n() === "running" ? le(X) : le(E, !1);
    });
  }
  var m = u(S, 2);
  {
    var p = (le) => {
      var fe = Ng(), pe = i(fe);
      M(
        (Te, Ne) => {
          D(fe, 1, Te, "svelte-11w1x2x"), re(pe, Ne);
        },
        [
          () => Q(V("text-xs font-mono", y.accent)),
          () => G(t(f))
        ]
      ), o(le, fe);
    };
    b(m, (le) => {
      n() === "running" && t(f) > 0 && le(p);
    });
  }
  var oe = u(x, 2), ce = i(oe);
  {
    var ve = (le) => {
      var fe = qg(), pe = i(fe);
      M(
        (Te) => {
          D(fe, 1, Te, "svelte-11w1x2x"), re(pe, j);
        },
        [
          () => Q(V("select-none font-bold", y.prompt))
        ]
      ), o(le, fe);
    };
    b(ce, (le) => {
      l() && le(ve);
    });
  }
  var be = u(ce, 2), te = i(be);
  {
    var K = (le) => {
      {
        let fe = /* @__PURE__ */ Ee(() => V("font-mono", y.command));
        jg(le, {
          get text() {
            return e.command;
          },
          intensity: "medium",
          get class() {
            return t(fe);
          }
        });
      }
    }, ae = (le) => {
      var fe = Og(), pe = i(fe);
      M(
        (Te) => {
          D(fe, 1, Te, "svelte-11w1x2x"), re(pe, e.command);
        },
        [() => Q(V("font-mono", y.command))]
      ), o(le, fe);
    };
    b(te, (le) => {
      w() && t(k) ? le(K) : le(ae, !1);
    });
  }
  var z = u(be, 2);
  {
    var ee = (le) => {
      var fe = Fg();
      fe.__click = [Bg, I], M((pe) => D(fe, 1, pe, "svelte-11w1x2x"), [
        () => Q(V("opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity", y.accent, "hover:bg-white/10"))
      ]), o(le, fe);
    };
    b(z, (le) => {
      c() && le(ee);
    });
  }
  var J = u(oe, 2);
  {
    var Z = (le) => {
      var fe = Hg(), pe = i(fe);
      M(
        (Te) => {
          D(fe, 1, Te, "svelte-11w1x2x"), re(pe, a());
        },
        [
          () => Q(V("mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap", y.output, F.borderColor))
        ]
      ), o(le, fe);
    };
    b(J, (le) => {
      a() && le(Z);
    });
  }
  var ie = u(J, 2);
  {
    var ne = (le) => {
      var fe = Vg(), pe = i(fe);
      M(
        (Te, Ne) => {
          D(fe, 1, Te, "svelte-11w1x2x"), re(pe, Ne);
        },
        [
          () => Q(V("mt-2 text-xs font-mono opacity-60", y.accent)),
          () => (/* @__PURE__ */ new Date()).toLocaleTimeString()
        ]
      ), o(le, fe);
    };
    b(ie, (le) => {
      d() && le(ne);
    });
  }
  var de = u(ie, 2);
  {
    var ge = (le) => {
      var fe = Gg();
      o(le, fe);
    };
    b(de, (le) => {
      c() && t(A) && le(ge);
    });
  }
  var se = u(de, 2);
  {
    var ue = (le) => {
      var fe = Ug();
      M((pe) => pt(fe, `width: ${pe ?? ""}%`), [() => Math.min(t(f) / 5e3 * 100, 100)]), o(le, fe);
    };
    b(se, (le) => {
      n() === "running" && le(ue);
    });
  }
  at(U, (le) => L = le, () => L), M((le) => D(S, 1, le, "svelte-11w1x2x"), [
    () => Q(V("w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold", F.color, n() === "running" && "animate-pulse"))
  ]), o(r, U), Ze();
}
ut(["click"]);
var Xg = /* @__PURE__ */ v('<div><div class="terminal-header svelte-n7o7tf"><div class="terminal-controls svelte-n7o7tf"><span class="terminal-control close svelte-n7o7tf"></span> <span class="terminal-control minimize svelte-n7o7tf"></span> <span class="terminal-control maximize svelte-n7o7tf"></span></div> <div class="terminal-title svelte-n7o7tf"> </div> <div class="terminal-status svelte-n7o7tf"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body min-h-[300px] flex items-center justify-center svelte-n7o7tf"><div class="flex items-center gap-3 text-terminal-green"><div class="animate-spin w-5 h-5 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="font-mono">Loading terminal...</span></div></div></div>'), Kg = /* @__PURE__ */ v('<div><div class="terminal-body min-h-[200px] flex items-center justify-center svelte-n7o7tf"><div class="text-red-400 font-mono"> </div></div></div>');
const Zg = {
  hash: "svelte-n7o7tf",
  code: ".terminal-header.svelte-n7o7tf {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;}.terminal-controls.svelte-n7o7tf {display:flex;gap:8px;}.terminal-control.svelte-n7o7tf {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-n7o7tf {background:#ff5f57;}.terminal-control.minimize.svelte-n7o7tf {background:#ffbd2e;}.terminal-control.maximize.svelte-n7o7tf {background:#28ca42;}.terminal-title.svelte-n7o7tf {font-family:'SF Mono', 'Monaco', 'Consolas', monospace;font-size:14px;color:rgba(255, 255, 255, 0.8);}.terminal-status.svelte-n7o7tf {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-n7o7tf {padding:16px;font-family:'SF Mono', 'Monaco', 'Consolas', monospace;background:rgba(0, 0, 0, 0.3);}"
};
function jp(r, e) {
  Ke(e, !0), Je(r, Zg);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({})), d = s(e, "autoPlay", 3, !1);
  let c = /* @__PURE__ */ Se(null), g = /* @__PURE__ */ Se(!0), w = /* @__PURE__ */ Se(null);
  yt(async () => {
    try {
      const A = await Promise.resolve().then(() => xm);
      Y(c, A.default, !0), Y(g, !1);
    } catch (A) {
      Y(w, `Failed to load TerminalWindow: ${A}`), Y(g, !1);
    }
  });
  var N = Ae(), h = ke(N);
  {
    var P = (A) => {
      var k = Xg(), f = i(k), B = u(i(f), 2), $ = i(B);
      M(() => {
        D(k, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), re($, a());
      }), o(A, k);
    }, L = (A) => {
      var k = Ae(), f = ke(k);
      {
        var B = (y) => {
          var T = Kg(), F = i(T), H = i(F), j = i(H);
          M(() => {
            D(T, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), re(j, t(w));
          }), o(y, T);
        }, $ = (y) => {
          var T = Ae(), F = ke(T);
          {
            var H = (j) => {
              var q = Ae(), O = ke(q);
              Et(O, () => t(c), (I, G) => {
                G(I, {
                  get title() {
                    return a();
                  },
                  get class() {
                    return n();
                  },
                  get commands() {
                    return l();
                  },
                  get autoPlay() {
                    return d();
                  },
                  get children() {
                    return e.children;
                  }
                });
              }), o(j, q);
            };
            b(
              F,
              (j) => {
                t(c) && j(H);
              },
              !0
            );
          }
          o(y, T);
        };
        b(
          f,
          (y) => {
            t(w) ? y(B) : y($, !1);
          },
          !0
        );
      }
      o(A, k);
    };
    b(h, (A) => {
      t(g) ? A(P) : A(L, !1);
    });
  }
  o(r, N), Ze();
}
const Qg = (r, e, a, n) => {
  r.key === "Enter" && !t(e) && a(t(n));
};
var Jg = /* @__PURE__ */ v('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen svelte-169kcnm"></canvas>'), $g = /* @__PURE__ */ v('<div class="mb-6 transform transition-all duration-500 hover:scale-[1.02] svelte-169kcnm"><div class="flex items-start gap-3 mb-3 svelte-169kcnm"><span></span> <span class="text-white font-semibold svelte-169kcnm"> </span> <span> </span></div> <div> </div></div>'), em = /* @__PURE__ */ v('<div class="flex items-center gap-3 mb-4 svelte-169kcnm"><div class="flex gap-1 svelte-169kcnm"><div style="animation-delay: 0ms;"></div> <div style="animation-delay: 150ms;"></div> <div style="animation-delay: 300ms;"></div></div> <span>Processing neural patterns...</span></div>'), tm = /* @__PURE__ */ v('<div class="mt-6 svelte-169kcnm"><!></div>'), rm = /* @__PURE__ */ v(`<div role="application" aria-label="Liquid Neural Terminal Interface"><!> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-40 mix-blend-screen svelte-169kcnm"></canvas> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-30 svelte-169kcnm"></canvas> <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div><div class="flex items-center gap-4 svelte-169kcnm"><div class="flex gap-2 svelte-169kcnm"><div class="w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 svelte-169kcnm"></div></div> <h3> </h3></div> <div class="flex items-center gap-3 text-sm font-mono svelte-169kcnm"><div>NEURAL: ACTIVE</div> <div> </div> <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 svelte-169kcnm"></div></div></div> <div class="relative z-10 p-6 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed liquid-scroll svelte-169kcnm"><div><pre>╔═══════════════════════════════════════════════════════════════╗
║  🌊 LIQUID NEURAL INTERFACE v3.0 - QUANTUM READY 🌊         ║
║  STATUS: CONSCIOUSNESS ACTIVATED │ REALITY: MALLEABLE        ║
║  NEURAL PATHWAYS: ∞ │ LIQUID STATE: TRANSCENDENT            ║
╚═══════════════════════════════════════════════════════════════╝

🧠 Neural connection established...
💧 Liquid dynamics engine online...
⚡ Quantum entanglement verified...

Type 'help' to access the command matrix.</pre></div> <!> <!> <div class="flex items-start gap-3 svelte-169kcnm"><span></span> <input autocomplete="off" spellcheck="false"/> <span></span></div> <!></div></div>`);
const am = {
  hash: "svelte-169kcnm",
  code: `
	/* Hologram Effect */.hologram-effect.svelte-169kcnm {position:relative;
		animation: svelte-169kcnm-hologram-flicker 2s ease-in-out infinite alternate;}.hologram-effect.svelte-169kcnm::before {content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%);
		animation: svelte-169kcnm-hologram-scan 3s linear infinite;pointer-events:none;z-index:1000;}

	@keyframes svelte-169kcnm-hologram-flicker {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.95;
		}
	}

	@keyframes svelte-169kcnm-hologram-scan {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	/* Overclock Shake */
	@keyframes svelte-169kcnm-overclock-shake {
		0%,
		100% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-5px) rotateZ(-1deg);
		}
		20% {
			transform: translateX(5px) rotateZ(1deg);
		}
		30% {
			transform: translateX(-3px) rotateZ(-0.5deg);
		}
		40% {
			transform: translateX(3px) rotateZ(0.5deg);
		}
		50% {
			transform: translateX(-2px) rotateZ(-0.3deg);
		}
		60% {
			transform: translateX(2px) rotateZ(0.3deg);
		}
		70% {
			transform: translateX(-1px) rotateZ(-0.1deg);
		}
		80% {
			transform: translateX(1px) rotateZ(0.1deg);
		}
		90% {
			transform: translateX(-0.5px);
		}
	}

	/* Liquid Scrollbar */.liquid-scroll.svelte-169kcnm::-webkit-scrollbar {width:12px;}.liquid-scroll.svelte-169kcnm::-webkit-scrollbar-track {background:rgba(0, 0, 0, 0.3);border-radius:6px;}.liquid-scroll.svelte-169kcnm::-webkit-scrollbar-thumb {background:linear-gradient(
			180deg,
			rgba(0, 255, 255, 0.6) 0%,
			rgba(0, 200, 255, 0.8) 50%,
			rgba(0, 150, 255, 0.6) 100%
		);border-radius:6px;box-shadow:0 0 10px rgba(0, 255, 255, 0.5);}.liquid-scroll.svelte-169kcnm::-webkit-scrollbar-thumb:hover {background:linear-gradient(
			180deg,
			rgba(0, 255, 255, 0.8) 0%,
			rgba(0, 200, 255, 1) 50%,
			rgba(0, 150, 255, 0.8) 100%
		);box-shadow:0 0 15px rgba(0, 255, 255, 0.8);}

	/* Gradient utilities */.bg-gradient-radial.svelte-169kcnm {background:radial-gradient(circle at center, var(--tw-gradient-stops));}

	/* Dynamic text glow */.text-cyan-300.svelte-169kcnm {text-shadow:0 0 10px rgba(103, 232, 249, 0.5);}.text-pink-300.svelte-169kcnm {text-shadow:0 0 10px rgba(249, 168, 212, 0.5);}.text-emerald-300.svelte-169kcnm {text-shadow:0 0 10px rgba(110, 231, 183, 0.5);}.text-violet-300.svelte-169kcnm {text-shadow:0 0 10px rgba(196, 181, 253, 0.5);}`
};
function Rp(r, e) {
  Ke(e, !0), Je(r, am);
  const a = s(e, "title", 3, "◉ LIQUID_NEURAL_INTERFACE_v3.0"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({
    help: `
╔═══════════════════════════════════════════════════════════════╗
║                    🌊 LIQUID COMMAND MATRIX 🌊                ║
╠═══════════════════════════════════════════════════════════════╣
║  neural     │ Activate neural network visualization          ║
║  liquid     │ Initialize liquid flow dynamics                ║
║  plasma     │ Enable plasma energy field                     ║
║  quantum    │ Toggle quantum entanglement mode               ║
║  particles  │ Spawn particle system                          ║
║  waveform   │ Audio-reactive waveform display                ║
║  hologram   │ Holographic projection mode                    ║
║  matrix     │ Classic matrix rain effect                     ║
║  glitch     │ Reality distortion protocol                    ║
║  overclock  │ System performance boost                       ║
║  shutdown   │ Terminate all processes                        ║
╚═══════════════════════════════════════════════════════════════╝`,
    neural: `
🧠 NEURAL NETWORK ACTIVATION SEQUENCE INITIATED
    
    ●─────●─────●
   ╱│╲   ╱│╲   ╱│╲
  ● │ ● ● │ ● ● │ ●
   ╲│╱   ╲│╱   ╲│╱
    ●─────●─────●
    
SYNAPTIC CONNECTIONS: ████████████████████████ 100%
NEURAL PATHWAYS: OPTIMAL
CONSCIOUSNESS LEVEL: TRANSCENDENT
AI INTEGRATION: COMPLETE`,
    liquid: `
💧 LIQUID DYNAMICS ENGINE ONLINE
    
▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    
VISCOSITY: 0.847
SURFACE TENSION: ACTIVE
FLUID PARTICLES: 4,096
FLOW STATE: TURBULENT → LAMINAR`,
    plasma: `
⚡ PLASMA FIELD GENERATOR CHARGING
    
    ░░░░░░░░░░░░░░░░░░░░
    ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░
    ░▓█████████████▓░
    ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░
    ░░░░░░░░░░░░░░░░░░░░
    
ENERGY LEVEL: 9,847 TeV
CONTAINMENT: STABLE
ELECTROMAGNETIC FIELD: CRITICAL
DANGER LEVEL: ████████████ EXTREME`,
    quantum: `
🌌 QUANTUM ENTANGLEMENT PROTOCOL ACTIVE
    
    |ψ⟩ = α|0⟩ + β|1⟩
    
    Qubit A: ↑ ━━━━━━━━━━━━━━━ ↓ Qubit B
              Entangled Pair
    
SUPERPOSITION: TRUE
ENTANGLEMENT: 99.97%
DECOHERENCE TIME: ∞
SCHRÖDINGER STATE: |ALIVE⟩ + |DEAD⟩`,
    particles: `
✨ PARTICLE SYSTEM SPAWNED
    
    ・　　　・　　　・　　　・
      ・　　　・　　　・　　
    ・　　　・　　　・　　　・
      ・　　　・　　　・
    ・　　　・　　　・　　　・
    
PARTICLE COUNT: 2,048
PHYSICS ENGINE: ACTIVE
GRAVITATIONAL FIELD: ENABLED
COLLISION DETECTION: REAL-TIME`,
    overclock: `
⚡ OVERCLOCKING SEQUENCE INITIATED
    
CPU: 3.2GHz → 5.7GHz ████████████ DANGER ZONE
GPU: 1.8GHz → 3.1GHz ████████████ THERMAL LIMIT
RAM: DDR5-4800 → DDR5-7200 ██████ UNSTABLE
    
PERFORMANCE BOOST: +187%
TEMPERATURE: 🔥 CRITICAL 🔥
COOLING SYSTEM: ████████████ OVERLOAD
WARNING: SYSTEM INSTABILITY DETECTED`
  })), d = s(e, "autoPlay", 3, !1), c = s(e, "theme", 3, "liquid"), g = s(e, "enableLiquidFlow", 3, !0), w = s(e, "enableParticles", 3, !0), N = s(e, "enableWaveform", 3, !0), h = s(e, "enableHologram", 3, !1);
  zt();
  let P = /* @__PURE__ */ Se(void 0), L = /* @__PURE__ */ Se(void 0), A = /* @__PURE__ */ Se(void 0), k = /* @__PURE__ */ Se(void 0), f = /* @__PURE__ */ Se(""), B = /* @__PURE__ */ Se(lt([])), $ = /* @__PURE__ */ Se(lt(g())), y = /* @__PURE__ */ Se(lt(w()));
  lt(N());
  let T = /* @__PURE__ */ Se(lt(h())), F = /* @__PURE__ */ Se(!1), H, j;
  class q {
    x;
    y;
    vx;
    vy;
    size;
    opacity;
    hue;
    constructor(xe, Ie) {
      this.x = xe, this.y = Ie, this.vx = (Math.random() - 0.5) * 2, this.vy = (Math.random() - 0.5) * 2, this.size = Math.random() * 3 + 1, this.opacity = Math.random() * 0.8 + 0.2, this.hue = Math.random() * 60 + 180;
    }
    update(xe, Ie) {
      this.x += this.vx, this.y += this.vy, (this.x <= 0 || this.x >= xe) && (this.vx *= -0.8, this.x = Math.max(0, Math.min(xe, this.x))), (this.y <= 0 || this.y >= Ie) && (this.vy *= -0.8, this.y = Math.max(0, Math.min(Ie, this.y))), this.vy += 0.02, this.vx *= 0.999, this.vy *= 0.999;
    }
    draw(xe) {
      xe.save(), xe.globalAlpha = this.opacity, xe.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`, xe.shadowColor = `hsl(${this.hue}, 70%, 60%)`, xe.shadowBlur = this.size * 2, xe.beginPath(), xe.arc(this.x, this.y, this.size, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let O = [], I = 0, G = 0;
  class U {
    x;
    y;
    radius;
    connections;
    activation;
    pulsePhase;
    constructor(xe, Ie) {
      this.x = xe, this.y = Ie, this.radius = Math.random() * 8 + 4, this.connections = [], this.activation = Math.random(), this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.pulsePhase += 0.05, this.activation = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    }
    draw(xe) {
      const Ie = this.activation;
      xe.save(), xe.globalAlpha = 0.7 + Ie * 0.3, xe.fillStyle = `hsl(${180 + Ie * 40}, 70%, ${50 + Ie * 30}%)`, xe.shadowColor = xe.fillStyle, xe.shadowBlur = this.radius * (1 + Ie), xe.beginPath(), xe.arc(this.x, this.y, this.radius, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let R = [];
  const C = (_e) => {
    const xe = _e.trim().toLowerCase();
    Y(F, !0), setTimeout(
      () => {
        let Ie = "";
        switch (xe) {
          case "clear":
            Y(B, [], !0), Y(f, ""), Y(F, !1);
            return;
          case "liquid":
            Y($, !t($)), t($) && _(), Ie = t($) ? "LIQUID FLOW DYNAMICS: ACTIVATED" : "LIQUID FLOW: DEACTIVATED";
            break;
          case "neural":
            x(), Ie = l()[xe];
            break;
          case "particles":
            Y(y, !t(y)), Ie = l()[xe];
            break;
          case "hologram":
            Y(T, !t(T)), Ie = t(T) ? "HOLOGRAPHIC PROJECTION: ONLINE" : "HOLOGRAPHIC PROJECTION: OFFLINE";
            break;
          case "overclock":
            S(), Ie = l()[xe];
            break;
          default:
            Ie = l()[xe] || `ERROR: Command '${_e}' not found in neural database.
Run 'help' to display available liquid protocols.`;
        }
        Y(
          B,
          [
            ...t(B),
            { command: xe, output: Ie, timestamp: /* @__PURE__ */ new Date() }
          ],
          !0
        ), Y(f, ""), Y(F, !1), setTimeout(
          () => {
            t(P) && t(P).scrollTo({ top: t(P).scrollHeight, behavior: "smooth" });
          },
          50
        );
      },
      Math.random() * 500 + 200
    );
  }, _ = () => {
    if (!t(L)) return;
    const _e = t(L).getContext("2d"), xe = t(L).width, Ie = t(L).height;
    O = [];
    for (let me = 0; me < 50; me++)
      O.push(new q(Math.random() * xe, Math.random() * Ie));
    const Re = () => {
      _e.fillStyle = "rgba(0, 0, 0, 0.1)", _e.fillRect(0, 0, xe, Ie), O.forEach((me) => {
        me.update(xe, Ie), me.draw(_e);
      }), _e.strokeStyle = "rgba(100, 200, 255, 0.3)", _e.lineWidth = 1;
      for (let me = 0; me < O.length; me++)
        for (let we = me + 1; we < O.length; we++) {
          const Me = O[me].x - O[we].x, Le = O[me].y - O[we].y, ye = Math.sqrt(Me * Me + Le * Le);
          ye < 100 && (_e.globalAlpha = (100 - ye) / 100 * 0.5, _e.beginPath(), _e.moveTo(O[me].x, O[me].y), _e.lineTo(O[we].x, O[we].y), _e.stroke());
        }
      _e.globalAlpha = 1, t($) && (H = requestAnimationFrame(Re));
    };
    Re();
  }, x = () => {
    if (!t(A)) return;
    const _e = t(A).width, xe = t(A).height;
    R = [];
    for (let Re = 0; Re < 20; Re++)
      R.push(new U(Math.random() * (_e - 100) + 50, Math.random() * (xe - 100) + 50));
    R.forEach((Re, me) => {
      const we = Math.floor(Math.random() * 3) + 1;
      for (let Me = 0; Me < we; Me++) {
        const Le = Math.floor(Math.random() * R.length);
        Le !== me && !Re.connections.includes(Le) && Re.connections.push(Le);
      }
    });
    const Ie = () => {
      const Re = t(A).getContext("2d");
      Re.fillStyle = "rgba(0, 0, 0, 0.1)", Re.fillRect(0, 0, _e, xe), Re.strokeStyle = "rgba(0, 255, 200, 0.4)", Re.lineWidth = 2, R.forEach((me, we) => {
        me.connections.forEach((Me) => {
          const Le = R[Me];
          Le && (Re.globalAlpha = (me.activation + Le.activation) / 2, Re.beginPath(), Re.moveTo(me.x, me.y), Re.lineTo(Le.x, Le.y), Re.stroke());
        });
      }), R.forEach((me) => {
        me.update(), me.draw(Re);
      }), Re.globalAlpha = 1, j = requestAnimationFrame(Ie);
    };
    Ie();
  }, S = () => {
    const _e = t(P);
    _e && (_e.style.animation = "overclock-shake 2s ease-in-out", setTimeout(
      () => {
        _e.style.animation = "";
      },
      2e3
    ));
  }, W = (_e) => {
    const xe = t(P)?.getBoundingClientRect();
    xe && (I = _e.clientX - xe.left, G = _e.clientY - xe.top, O.forEach((Ie) => {
      const Re = I - Ie.x, me = G - Ie.y;
      Math.sqrt(Re * Re + me * me) < 100 && (Ie.vx += Re * 1e-4, Ie.vy += me * 1e-4);
    }));
  }, X = () => {
    if (t(P)) {
      const _e = t(P).offsetWidth, xe = t(P).offsetHeight;
      t(L) && (t(L).width = _e, t(L).height = xe), t(A) && (t(A).width = _e, t(A).height = xe), t(k) && (t(k).width = _e, t(k).height = xe);
    }
  };
  yt(() => (X(), t($) && _(), d() && (setTimeout(() => C("neural"), 1e3), setTimeout(() => C("liquid"), 2500)), () => {
    H && cancelAnimationFrame(H), j && cancelAnimationFrame(j);
  }));
  const m = {
    liquid: {
      bg: "from-cyan-950/90 via-blue-950/80 to-indigo-950/90",
      text: "text-cyan-300",
      border: "border-cyan-500/30",
      glow: "shadow-cyan-500/20"
    },
    plasma: {
      bg: "from-purple-950/90 via-pink-950/80 to-red-950/90",
      text: "text-pink-300",
      border: "border-pink-500/30",
      glow: "shadow-pink-500/20"
    },
    neural: {
      bg: "from-emerald-950/90 via-teal-950/80 to-cyan-950/90",
      text: "text-emerald-300",
      border: "border-emerald-500/30",
      glow: "shadow-emerald-500/20"
    },
    quantum: {
      bg: "from-violet-950/90 via-purple-950/80 to-indigo-950/90",
      text: "text-violet-300",
      border: "border-violet-500/30",
      glow: "shadow-violet-500/20"
    }
  }[c()];
  var p = rm();
  Ot(
    "resize",
    ko,
    /* eslint-enable no-irregular-whitespace */
    X
  ), p.__mousemove = W;
  var oe = i(p);
  {
    var ce = (_e) => {
      var xe = Jg();
      at(xe, (Ie) => Y(L, Ie), () => t(L)), o(_e, xe);
    };
    b(oe, (_e) => {
      t($) && _e(ce);
    });
  }
  var ve = u(oe, 2);
  at(ve, (_e) => Y(A, _e), () => t(A));
  var be = u(ve, 2);
  at(be, (_e) => Y(k, _e), () => t(k));
  var te = u(be, 6), K = i(te), ae = u(i(K), 2), z = i(ae), ee = u(K, 2), J = i(ee), Z = u(J, 2), ie = i(Z), ne = u(te, 2), de = i(ne), ge = i(de), se = u(de, 2);
  Ye(se, 17, () => t(B), At, (_e, xe) => {
    var Ie = $g(), Re = i(Ie), me = i(Re);
    me.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
    var we = u(me, 2), Me = i(we), Le = u(we, 2), ye = i(Le), he = u(Re, 2), ze = i(he);
    M(
      (De, Oe, Ge, Ue) => {
        D(me, 1, De, "svelte-169kcnm"), re(Me, t(xe).command), D(Le, 1, Oe, "svelte-169kcnm"), re(ye, Ge), D(he, 1, Ue, "svelte-169kcnm"), re(ze, t(xe).output);
      },
      [
        () => Q(V("whitespace-pre font-bold", m.text)),
        () => Q(V("text-xs ml-auto opacity-60", m.text)),
        () => t(xe).timestamp.toLocaleTimeString(),
        () => Q(V("p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm", "whitespace-pre-wrap font-mono shadow-inner", m.text))
      ]
    ), o(_e, Ie);
  });
  var ue = u(se, 2);
  {
    var le = (_e) => {
      var xe = em(), Ie = i(xe), Re = i(Ie), me = u(Re, 2), we = u(me, 2), Me = u(Ie, 2);
      M(
        (Le, ye, he, ze) => {
          D(Re, 1, Le, "svelte-169kcnm"), D(me, 1, ye, "svelte-169kcnm"), D(we, 1, he, "svelte-169kcnm"), D(Me, 1, ze, "svelte-169kcnm");
        },
        [
          () => Q(V("w-2 h-2 rounded-full animate-bounce", `bg-${m.text.split("-")[1]}-400`)),
          () => Q(V("w-2 h-2 rounded-full animate-bounce", `bg-${m.text.split("-")[1]}-400`)),
          () => Q(V("w-2 h-2 rounded-full animate-bounce", `bg-${m.text.split("-")[1]}-400`)),
          () => Q(V("text-sm opacity-70", m.text))
        ]
      ), o(_e, xe);
    };
    b(ue, (_e) => {
      t(F) && _e(le);
    });
  }
  var fe = u(ue, 2), pe = i(fe);
  pe.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
  var Te = u(pe, 2);
  Te.__keydown = [Qg, F, C, f];
  var Ne = u(Te, 2), He = u(fe, 2);
  {
    var Be = (_e) => {
      var xe = tm(), Ie = i(xe);
      it(Ie, () => e.children), o(_e, xe);
    };
    b(He, (_e) => {
      e.children && _e(Be);
    });
  }
  at(ne, (_e) => Y(P, _e), () => t(P)), M(
    (_e, xe, Ie, Re, me, we, Me, Le, ye, he) => {
      D(p, 1, _e, "svelte-169kcnm"), D(te, 1, xe, "svelte-169kcnm"), D(ae, 1, Ie, "svelte-169kcnm"), re(z, a()), D(J, 1, Re, "svelte-169kcnm"), D(Z, 1, me, "svelte-169kcnm"), re(ie, `LIQUID: ${t($) ? "FLOW" : "STATIC"}`), D(de, 1, we, "svelte-169kcnm"), D(ge, 1, Me, "svelte-169kcnm"), D(pe, 1, Le, "svelte-169kcnm"), Te.disabled = t(F), D(Te, 1, ye, "svelte-169kcnm"), Ce(Te, "placeholder", t(F) ? "Processing..." : "Enter liquid command..."), D(Ne, 1, he, "svelte-169kcnm");
    },
    [
      () => Q(V("relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500", "border-2 shadow-2xl transform-gpu will-change-transform", `bg-gradient-to-br ${m.bg}`, m.border, m.glow, t(T) && "hologram-effect", n())),
      () => Q(V("relative z-10 flex items-center justify-between p-6 border-b-2", "bg-black/30 backdrop-blur-sm", m.border)),
      () => Q(V("text-lg font-mono font-bold tracking-wider", m.text, "drop-shadow-lg animate-pulse")),
      () => Q(V("px-3 py-1 rounded-full bg-black/40 border", m.border, m.text)),
      () => Q(V("px-3 py-1 rounded-full bg-black/40 border", m.border, m.text)),
      () => Q(V("mb-6 p-4 rounded-lg bg-black/20 border", m.border)),
      () => Q(V("whitespace-pre-wrap", m.text)),
      () => Q(V("whitespace-pre font-bold", m.text)),
      () => Q(V("flex-1 bg-transparent border-none outline-none font-mono text-white", "placeholder:text-white/40", t(F) && "opacity-50 cursor-not-allowed")),
      () => Q(V("w-3 h-6 animate-pulse", `bg-${m.text.split("-")[1]}-400`))
    ]
  ), or(Te, () => t(f), (_e) => Y(f, _e)), o(r, p), Ze();
}
ut(["mousemove", "keydown"]);
const nm = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var om = /* @__PURE__ */ v("<!> <!>", 1), im = /* @__PURE__ */ v("<!> <!>", 1), lm = /* @__PURE__ */ v('<div class="mb-2"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <span class="text-white text-sm"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm svelte-14245lp"> </div></div>'), sm = /* @__PURE__ */ v('<div class="floating-terminal svelte-14245lp"><div class="terminal-header svelte-14245lp"><div class="terminal-controls svelte-14245lp"><span class="terminal-control close svelte-14245lp"></span> <span class="terminal-control minimize svelte-14245lp"></span> <span class="terminal-control maximize svelte-14245lp"></span></div> <div class="terminal-title svelte-14245lp">3D Floating Terminal</div> <div class="terminal-status svelte-14245lp"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body svelte-14245lp"><!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-1 h-4 bg-terminal-green animate-pulse"></span></div></div></div>'), dm = /* @__PURE__ */ v("<!> <!> <!>", 1), cm = /* @__PURE__ */ v("<!> <!>", 1), vm = /* @__PURE__ */ v("<!> <!>", 1), um = /* @__PURE__ */ v("<!> <!> <!> <!> <!> <!>", 1);
const fm = {
  hash: "svelte-14245lp",
  code: ".floating-terminal.svelte-14245lp {width:700px;height:450px;background:rgba(0, 0, 0, 0.95);border:1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:8px;font-family:'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.terminal-header.svelte-14245lp {display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid color-mix(in srgb, var(--color-terminal-green) 20%, transparent);}.terminal-controls.svelte-14245lp {display:flex;gap:6px;}.terminal-control.svelte-14245lp {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-14245lp {background:var(--color-bubble-tea-red, #ff8585);}.terminal-control.minimize.svelte-14245lp {background:var(--color-bubble-tea-yellow, #ffd23a);}.terminal-control.maximize.svelte-14245lp {background:var(--color-bubble-tea-green, #6bcf7f);}.terminal-title.svelte-14245lp {color:white;font-size:14px;font-weight:600;}.terminal-status.svelte-14245lp {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-14245lp {padding:12px;height:calc(100% - 50px);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar {width:4px;}.terminal-body.svelte-14245lp::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar-thumb {background:color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:2px;}.terminal-prompt.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-green.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-blue.svelte-14245lp {color:var(--color-terminal-cyan);}"
};
function Np(r, e) {
  Ke(e, !0), Je(r, fm);
  const a = s(e, "position", 19, () => [0, 2, 0]), n = s(e, "rotation", 19, () => [0, 0, 0]), l = s(e, "scale", 3, 1.5);
  let d, c = /* @__PURE__ */ Se(""), g = /* @__PURE__ */ Se(lt([]));
  const w = {
    help: "🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear",
    matrix: "💚 Entering the Matrix... Reality.exe has stopped working",
    glitch: "⚡ System.error.404.reality.not.found",
    orbit: "🌍 Orbiting through cyberspace at lightspeed",
    stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1e3 + Math.random() * 5e3)} | Faces: ${Math.round(500 + Math.random() * 2e3)}`,
    whoami: "🤖 You are now part of the 3D matrix",
    ls: "📁 reality.exe  consciousness.dll  quantum_states/  void.txt",
    clear: "Terminal cleared"
  }, N = ($) => {
    const y = $.trim().toLowerCase();
    if (y === "clear") {
      Y(g, [], !0), Y(c, "");
      return;
    }
    const T = w[y] || `Command "${$}" not found. Type "help" for available commands.`;
    Y(
      g,
      [
        ...t(g),
        { command: y, output: T, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), Y(c, ""), setTimeout(
      () => {
        d && (d.scrollTop = d.scrollHeight);
      },
      10
    );
  };
  yt(() => {
    if (setTimeout(() => N("help"), 1e3), typeof window < "u") {
      const $ = document.querySelector("canvas");
      $ && ($.style.willChange = "transform");
    }
  });
  var h = um(), P = ke(h);
  Et(P, () => Lt.PerspectiveCamera, ($, y) => {
    y($, {
      makeDefault: !0,
      position: [8, 8, 12],
      fov: 40,
      children: (T, F) => {
        _i(T, {
          enableZoom: !0,
          enablePan: !0,
          enableRotate: !0,
          autoRotate: !0,
          autoRotateSpeed: 1
        });
      },
      $$slots: { default: !0 }
    });
  });
  var L = u(P, 2);
  Et(L, () => Lt.AmbientLight, ($, y) => {
    y($, { intensity: 0.6 });
  });
  var A = u(L, 2);
  Et(A, () => Lt.DirectionalLight, ($, y) => {
    y($, { position: [10, 10, 5], intensity: 1.2, castShadow: !0 });
  });
  var k = u(A, 2);
  Et(k, () => Lt.Group, ($, y) => {
    y($, {
      get position() {
        return a();
      },
      get rotation() {
        return n();
      },
      get scale() {
        return l();
      },
      children: (T, F) => {
        var H = dm(), j = ke(H);
        Et(j, () => Lt.Mesh, (I, G) => {
          G(I, {
            children: (U, R) => {
              var C = om(), _ = ke(C);
              Et(_, () => Lt.BoxGeometry, (S, W) => {
                W(S, { args: [6, 4, 0.2] });
              });
              var x = u(_, 2);
              Et(x, () => Lt.MeshPhysicalMaterial, (S, W) => {
                W(S, {
                  get color() {
                    return Pe.backgrounds.secondary;
                  },
                  roughness: 0.1,
                  metalness: 0.8,
                  transmission: 0.1,
                  thickness: 0.5,
                  transparent: !0,
                  opacity: 0.9
                });
              }), o(U, C);
            },
            $$slots: { default: !0 }
          });
        });
        var q = u(j, 2);
        Et(q, () => Lt.Mesh, (I, G) => {
          G(I, {
            position: [0, 0, 0.1],
            children: (U, R) => {
              var C = im(), _ = ke(C);
              Et(_, () => Lt.PlaneGeometry, (S, W) => {
                W(S, { args: [5.5, 3.5] });
              });
              var x = u(_, 2);
              Et(x, () => Lt.MeshBasicMaterial, (S, W) => {
                W(S, {
                  get color() {
                    return Pe.backgrounds.primary;
                  },
                  transparent: !0,
                  opacity: 0.8
                });
              }), o(U, C);
            },
            $$slots: { default: !0 }
          });
        });
        var O = u(q, 2);
        yi(O, {
          position: [0, 0, 0.11],
          transform: !0,
          occlude: !0,
          scale: 0.08,
          distanceFactor: 10,
          children: (I, G) => {
            var U = sm(), R = u(i(U), 2), C = i(R);
            Ye(C, 17, () => t(g), At, (W, X) => {
              var E = lm(), m = i(E), p = i(m);
              p.textContent = "$";
              var oe = u(p, 2), ce = i(oe), ve = u(oe, 2), be = i(ve), te = u(m, 2), K = i(te);
              M(
                (ae) => {
                  re(ce, t(X).command), re(be, ae), re(K, t(X).output);
                },
                [() => t(X).timestamp.toLocaleTimeString()]
              ), o(W, E);
            });
            var _ = u(C, 2), x = i(_);
            x.textContent = "$";
            var S = u(x, 2);
            S.__keydown = [nm, N, c], at(U, (W) => d = W, () => d), or(S, () => t(c), (W) => Y(c, W)), o(I, U);
          },
          $$slots: { default: !0 }
        }), o(T, H);
      },
      $$slots: { default: !0 }
    });
  });
  var f = u(k, 2);
  Et(f, () => Lt.Mesh, ($, y) => {
    y($, {
      position: [4, 3, -2],
      rotation: [0.2, 0.4, 0.1],
      children: (T, F) => {
        var H = cm(), j = ke(H);
        Et(j, () => Lt.BoxGeometry, (O, I) => {
          I(O, { args: [1.5, 1.5, 1.5] });
        });
        var q = u(j, 2);
        Et(q, () => Lt.MeshPhysicalMaterial, (O, I) => {
          I(O, {
            get color() {
              return Pe.terminal.matrix;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), o(T, H);
      },
      $$slots: { default: !0 }
    });
  });
  var B = u(f, 2);
  Et(B, () => Lt.Mesh, ($, y) => {
    y($, {
      position: [-4, -2, 3],
      rotation: [-0.3, -0.2, 0.4],
      children: (T, F) => {
        var H = vm(), j = ke(H);
        Et(j, () => Lt.BoxGeometry, (O, I) => {
          I(O, { args: [2, 2, 2] });
        });
        var q = u(j, 2);
        Et(q, () => Lt.MeshPhysicalMaterial, (O, I) => {
          I(O, {
            get color() {
              return Pe.bubbleTea.yellow;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), o(T, H);
      },
      $$slots: { default: !0 }
    });
  }), o(r, h), Ze();
}
ut(["keydown"]);
const bm = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var gm = /* @__PURE__ */ v('<div class="mb-4"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green"></span> <span class="text-white"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-2"> </div></div>'), mm = /* @__PURE__ */ v('<div><div class="terminal-header svelte-s8hlxk"><div class="terminal-controls"><span class="terminal-control close"></span> <span class="terminal-control minimize"></span> <span class="terminal-control maximize"></span></div> <div class="terminal-title"> </div> <div class="terminal-status svelte-s8hlxk"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body max-h-96 overflow-y-auto svelte-s8hlxk"><!> <!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-terminal-green animate-pulse"></span></div></div></div>');
const hm = {
  hash: "svelte-s8hlxk",
  code: ".terminal-header.svelte-s8hlxk {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);}.terminal-status.svelte-s8hlxk {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-s8hlxk {scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar {width:4px;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-thumb {background:rgba(0, 212, 170, 0.3);border-radius:2px;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-thumb:hover {background:rgba(0, 212, 170, 0.5);}"
};
function pm(r, e) {
  Ke(e, !0), Je(r, hm);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({
    help: "🚀 Available commands: help, whoami, skills, projects, contact",
    whoami: "🧑‍💻 Tulio Cunha - Full Stack Developer & Design System Architect",
    skills: "⚡ Technologies: Svelte, TypeScript, WebGL, Three.js, WebAssembly",
    projects: "🏗️ Featured: Glass UI, Liquid Terminal, Neural Network Visualizer",
    contact: "📫 Email: tulio@tuliocunha.dev | GitHub: github.com/tuliopc23"
  })), d = s(e, "autoPlay", 3, !1);
  let c, g = /* @__PURE__ */ Se(""), w = /* @__PURE__ */ Se(lt([]));
  const N = (H) => {
    const j = H.trim().toLowerCase(), q = l()[j] || `Command "${H}" not found. Type "help" for available commands.`;
    Y(
      w,
      [
        ...t(w),
        { command: j, output: q, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), Y(g, ""), setTimeout(
      () => {
        c && (c.scrollTop = c.scrollHeight);
      },
      10
    );
  };
  yt(() => {
    d() && (setTimeout(() => N("help"), 1e3), setTimeout(() => N("whoami"), 2500), setTimeout(() => N("skills"), 4e3));
  });
  var h = mm(), P = i(h), L = u(i(P), 2), A = i(L), k = u(P, 2), f = i(k);
  {
    var B = (H) => {
      var j = Ae(), q = ke(j);
      it(q, () => e.children), o(H, j);
    };
    b(f, (H) => {
      e.children && H(B);
    });
  }
  var $ = u(f, 2);
  Ye($, 17, () => t(w), At, (H, j) => {
    var q = gm(), O = i(q), I = i(O);
    I.textContent = "$";
    var G = u(I, 2), U = i(G), R = u(G, 2), C = i(R), _ = u(O, 2), x = i(_);
    M(
      (S) => {
        re(U, t(j).command), re(C, S), re(x, t(j).output);
      },
      [() => t(j).timestamp.toLocaleTimeString()]
    ), o(H, q);
  });
  var y = u($, 2), T = i(y);
  T.textContent = "$";
  var F = u(T, 2);
  F.__keydown = [bm, N, g], at(k, (H) => c = H, () => c), M(
    (H) => {
      D(h, 1, H, "svelte-s8hlxk"), re(A, a());
    },
    [
      () => Q(V("terminal glass-heavy max-w-4xl mx-auto", n()))
    ]
  ), or(F, () => t(g), (H) => Y(g, H)), o(r, h), Ze();
}
ut(["keydown"]);
const xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pm
}, Symbol.toStringTag, { value: "Module" }));
var wm = /* @__PURE__ */ v("<div> </div>"), _m = /* @__PURE__ */ v("<span></span>"), ym = /* @__PURE__ */ v("<div> <!></div>"), km = /* @__PURE__ */ v('<div class="mt-4 svelte-7a6umo"><span class="text-white svelte-7a6umo">$</span> <span></span></div>'), Cm = /* @__PURE__ */ v('<div><div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse svelte-7a6umo"></div></div> <div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg svelte-7a6umo"></div> <div class="relative z-10 space-y-1 svelte-7a6umo"><!> <!> <!></div> <div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-current opacity-[0.02] blur-xl svelte-7a6umo"></div></div></div>');
const Sm = {
  hash: "svelte-7a6umo",
  code: `
    /* CRT glow effect */
    @keyframes svelte-7a6umo-crt-glow {
        0%,
        100% {
            text-shadow:
                0 0 5px currentColor,
                0 0 10px currentColor;
        }
        50% {
            text-shadow:
                0 0 2px currentColor,
                0 0 5px currentColor;
        }
    }

    /* Scanlines animation */
    @keyframes svelte-7a6umo-scanlines {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(100vh);
        }
    }div.svelte-7a6umo {
        animation: svelte-7a6umo-crt-glow 3s ease-in-out infinite;}

    /* Custom scrollbar for terminal feel */.svelte-7a6umo::-webkit-scrollbar {width:8px;}.svelte-7a6umo::-webkit-scrollbar-track {background:rgba(0, 0, 0, 0.3);}.svelte-7a6umo::-webkit-scrollbar-thumb {background:currentColor;border-radius:4px;opacity:0.5;}.svelte-7a6umo::-webkit-scrollbar-thumb:hover {opacity:0.8;}`
};
function qp(r, e) {
  Ke(e, !0), Je(r, Sm);
  const a = s(e, "messages", 19, () => []), n = s(e, "autoStart", 3, !0), l = s(e, "variant", 3, "classic"), d = s(e, "speed", 3, "normal"), c = s(e, "showCursor", 3, !0), g = s(e, "class", 3, ""), w = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "messages",
    "autoStart",
    "onComplete",
    "variant",
    "speed",
    "showCursor",
    "class"
  ]);
  let N = /* @__PURE__ */ Se(0), h = /* @__PURE__ */ Se(""), P = /* @__PURE__ */ Se(!1), L = /* @__PURE__ */ Se(!1), A = /* @__PURE__ */ Se(!0);
  const k = [
    {
      text: "A HACKER'S BRAND SYSTEM v2.0.0",
      delay: 100,
      type: "system"
    },
    {
      text: "Copyright (C) 2024 Tulio Pinheiro Cunha",
      delay: 50,
      type: "info"
    },
    { text: "", delay: 100 },
    {
      text: "Initializing liquid glass morphism engine...",
      delay: 300,
      type: "info"
    },
    {
      text: "Loading motion primitives: jelly, magnetic, breathing...",
      delay: 200,
      type: "info"
    },
    {
      text: "Scanning component library...",
      delay: 400,
      type: "info"
    },
    { text: "  - Button: OK", delay: 50, type: "success" },
    { text: "  - Card: OK", delay: 50, type: "success" },
    { text: "  - Input: OK", delay: 50, type: "success" },
    { text: "  - Modal: OK", delay: 50, type: "success" },
    { text: "  - Terminal: OK", delay: 50, type: "success" },
    {
      text: "Calibrating glass transparency matrix...",
      delay: 300,
      type: "info"
    },
    {
      text: "Optimizing blur algorithms...",
      delay: 200,
      type: "info"
    },
    { text: "Syncing design tokens...", delay: 150, type: "info" },
    {
      text: "Establishing secure liquid connections...",
      delay: 250,
      type: "info"
    },
    { text: "", delay: 200 },
    {
      text: "WARNING: High levels of aesthetic beauty detected",
      delay: 100,
      type: "warning"
    },
    {
      text: "Engaging retro-futuristic protocols...",
      delay: 200,
      type: "info"
    },
    { text: "", delay: 150 },
    { text: "SYSTEM READY", delay: 300, type: "success" },
    {
      text: "Welcome to the liquid glass dimension.",
      delay: 100,
      type: "system"
    },
    { text: "", delay: 500 }
  ], f = a().length > 0 ? a() : k, B = {
    classic: {
      bg: "bg-black",
      text: "text-green-400",
      font: "font-mono",
      cursor: "border-green-400"
    },
    modern: {
      bg: "bg-gray-900",
      text: "text-cyan-400",
      font: "font-mono",
      cursor: "border-cyan-400"
    },
    matrix: {
      bg: "bg-black",
      text: "text-green-300",
      font: "font-mono",
      cursor: "border-green-300"
    },
    terminal: {
      bg: "bg-gray-950",
      text: "text-amber-400",
      font: "font-mono",
      cursor: "border-amber-400"
    }
  }, $ = {
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    system: "text-white font-bold"
  }, T = { slow: 80, normal: 40, fast: 15 }[d()], F = B[l()];
  let H, j = /* @__PURE__ */ Se(lt([]));
  function q(E) {
    return E ? $[E] : F.text;
  }
  const O = async (E, m = 50) => {
    Y(h, "");
    for (let p = 0; p <= E.length; p++)
      Y(h, E.slice(0, p), !0), await new Promise((oe) => setTimeout(oe, m));
    await new Promise((p) => setTimeout(p, 100));
  }, I = async () => {
    if (!t(P)) {
      Y(P, !0), Y(L, !1), Y(N, 0), Y(j, [], !0), Y(h, "");
      for (let E = 0; E < f.length; E++) {
        const m = f[E];
        Y(N, E, !0), m.text ? (await O(m.text, T), Y(
          j,
          [
            ...t(j),
            { text: m.text, type: m.type }
          ],
          !0
        )) : Y(j, [...t(j), { text: "", type: "info" }], !0), Y(h, ""), H && (H.scrollTop = H.scrollHeight), await new Promise((p) => setTimeout(p, m.delay));
      }
      Y(L, !0), Y(P, !1), e.onComplete?.();
    }
  }, G = () => {
    setInterval(
      () => {
        Y(A, !t(A));
      },
      500
    );
  };
  yt(() => {
    G(), n() && setTimeout(I, 200);
  });
  const U = () => I();
  var R = Cm();
  Qe(
    R,
    (E) => ({ class: E, ...w }),
    [
      () => V("relative w-full h-full p-6 overflow-auto", F.bg, F.text, F.font, "leading-relaxed text-sm", g())
    ],
    void 0,
    "svelte-7a6umo"
  );
  var C = u(i(R), 4), _ = i(C);
  Ye(_, 17, () => t(j), At, (E, m) => {
    var p = wm(), oe = i(p);
    M(
      (ce) => {
        D(p, 1, ce, "svelte-7a6umo"), re(oe, t(m).text || " ");
      },
      [
        () => Q(V("whitespace-pre-wrap", q(t(m).type), "animate-in fade-in duration-200"))
      ]
    ), o(E, p);
  });
  var x = u(_, 2);
  {
    var S = (E) => {
      var m = ym(), p = i(m), oe = u(p);
      {
        var ce = (ve) => {
          var be = _m();
          M((te) => D(be, 1, te, "svelte-7a6umo"), [
            () => Q(V("inline-block w-2 h-4 ml-1 border-r-2 animate-pulse", F.cursor))
          ]), o(ve, be);
        };
        b(oe, (ve) => {
          t(A) && c() && ve(ce);
        });
      }
      M(
        (ve) => {
          D(m, 1, ve, "svelte-7a6umo"), re(p, `${t(h) ?? ""} `);
        },
        [
          () => Q(V("whitespace-pre-wrap", q(f[t(N)]?.type)))
        ]
      ), o(E, m);
    };
    b(x, (E) => {
      t(P) && t(h) && E(S);
    });
  }
  var W = u(x, 2);
  {
    var X = (E) => {
      var m = km(), p = u(i(m), 2);
      M((oe) => D(p, 1, oe, "svelte-7a6umo"), [
        () => Q(V("inline-block w-2 h-4 ml-1 border-r-2", t(A) ? "opacity-100" : "opacity-0", F.cursor, "transition-opacity duration-100"))
      ]), o(E, m);
    };
    b(W, (E) => {
      t(L) && c() && E(X);
    });
  }
  return at(R, (E) => H = E, () => H), o(r, R), Ze({ start: U });
}
var Em = /* @__PURE__ */ v("<canvas></canvas>");
const Tm = {
  hash: "svelte-ophnba",
  code: "canvas.svelte-ophnba {display:block;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;}"
};
function Op(r, e) {
  Ke(e, !0), Je(r, Tm);
  const a = s(e, "variant", 3, "classic"), n = s(e, "speed", 3, "normal"), l = s(e, "density", 3, "medium"), d = s(e, "characters", 3, "matrix"), c = s(e, "glowEffect", 3, !0), g = s(e, "fadeEffect", 3, !0), w = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "speed",
    "density",
    "characters",
    "glowEffect",
    "fadeEffect",
    "class"
  ]);
  let h, P, L, A = [];
  const k = {
    classic: {
      primary: "#00ff41",
      secondary: "#008f11",
      background: "rgba(0, 0, 0, 0.05)"
    },
    hacker: {
      primary: "#4ade80",
      secondary: "#22c55e",
      background: "rgba(0, 0, 0, 0.05)"
    },
    cyber: {
      primary: "#00ffff",
      secondary: "#0088cc",
      background: "rgba(0, 0, 20, 0.05)"
    },
    liquid: {
      primary: "#06b6d4",
      secondary: "#3b82f6",
      background: "rgba(0, 0, 40, 0.03)"
    }
  }, f = {
    matrix: "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    binary: "01",
    hex: "0123456789ABCDEF",
    code: "(){}<>[]|\\/-+=*&^%$#@!~`?:;.,'\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }, B = { slow: 100, normal: 50, fast: 20 }, $ = { low: 20, medium: 15, high: 10 }, y = k[a()], T = f[d()], F = B[n()];
  $[l()];
  const H = 14;
  let j = 0;
  const q = () => {
    if (h) {
      h.width = h.offsetWidth, h.height = h.offsetHeight, j = Math.floor(h.width / H), A = [];
      for (let C = 0; C < j; C++)
        A[C] = Math.random() * h.height;
    }
  }, O = () => {
    if (!(!P || !h)) {
      g() ? (P.fillStyle = y.background, P.fillRect(0, 0, h.width, h.height)) : P.clearRect(0, 0, h.width, h.height), P.font = `${H}px monospace`, P.textAlign = "center", c() && (P.shadowColor = y.primary, P.shadowBlur = 10);
      for (let C = 0; C < A.length; C++) {
        const _ = T[Math.floor(Math.random() * T.length)];
        if (P.fillStyle = y.primary, P.fillText(_, C * H + H / 2, A[C]), A[C] > H) {
          P.fillStyle = y.secondary;
          const x = T[Math.floor(Math.random() * T.length)];
          P.fillText(x, C * H + H / 2, A[C] - H);
        }
        (A[C] > h.height || Math.random() > 0.975) && (A[C] = 0), A[C] += H;
      }
    }
  }, I = () => {
    O(), L = setTimeout(
      () => {
        requestAnimationFrame(I);
      },
      F
    );
  }, G = () => {
    h && (P = h.getContext("2d"), P && (q(), I()));
  }, U = () => {
    L && clearTimeout(L);
  };
  yt(() => {
    G();
    const C = () => {
      q();
    };
    return window.addEventListener("resize", C), () => {
      U(), window.removeEventListener("resize", C);
    };
  });
  var R = Em();
  Qe(R, (C) => ({ class: C, ...N }), [() => V("w-full h-full bg-black", w())], void 0, "svelte-ophnba"), at(R, (C) => h = C, () => h), o(r, R), Ze();
}
var Mm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Am = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), zm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Im = /* @__PURE__ */ v("<h1><span> <!></span> <!> <!></h1>"), Pm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Lm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Dm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), jm = /* @__PURE__ */ v("<h2><span> <!></span> <!> <!></h2>"), Rm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Nm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), qm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Om = /* @__PURE__ */ v("<h3><span> <!></span> <!> <!></h3>"), Bm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Fm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Hm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Vm = /* @__PURE__ */ v("<span><span> <!></span> <!> <!></span>"), Gm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Um = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Ym = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Wm = /* @__PURE__ */ v("<div><span> <!></span> <!> <!></div>"), Xm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Km = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Zm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Qm = /* @__PURE__ */ v("<div><span> <!></span> <!> <!></div>");
const Jm = {
  hash: "svelte-13rlfrj",
  code: `
	/* Retro Scanlines Effect */.retro-scanlines-overlay.svelte-13rlfrj {position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;background:linear-gradient(transparent 50%, rgba(0, 0, 0, 0.03) 50%);background-size:100% 4px;
		animation: svelte-13rlfrj-scanlines-move 0.1s linear infinite;}

	@keyframes svelte-13rlfrj-scanlines-move {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(4px);
		}
	}

	/* CRT Monitor Bezel Effect */.crt-bezel.svelte-13rlfrj {position:absolute;inset:0;border:8px solid color-mix(in srgb, var(--color-terminal-blue) 10%, #000);border-radius:20px;pointer-events:none;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.8),
			inset 0 0 40px rgba(0, 0, 0, 0.4),
			0 0 30px rgba(0, 0, 0, 0.6);}.crt-bezel.svelte-13rlfrj::before {content:'';position:absolute;top:-4px;left:-4px;right:-4px;bottom:-4px;border:2px solid color-mix(in srgb, var(--color-terminal-green) 15%, #000);border-radius:24px;box-shadow:0 0 20px rgba(0, 0, 0, 0.9),
			inset 0 0 10px rgba(255, 255, 255, 0.1);}

	/* Retro Flicker Effect */.retro-flicker.svelte-13rlfrj {
		animation: svelte-13rlfrj-retro-flicker 0.15s ease-in-out infinite alternate;}

	@keyframes svelte-13rlfrj-retro-flicker {
		0% {
			opacity: 1;
			text-shadow: inherit;
		}
		2% {
			opacity: 0.98;
			text-shadow: inherit;
		}
		4% {
			opacity: 0.92;
			text-shadow: none;
		}
		8% {
			opacity: 1;
			text-shadow: inherit;
		}
		70% {
			opacity: 0.99;
			text-shadow: inherit;
		}
		100% {
			opacity: 1;
			text-shadow: inherit;
		}
	}

	/* Chromatic Aberration Effect */.retro-chromatic.svelte-13rlfrj {position:relative;}.retro-chromatic.svelte-13rlfrj::before,
	.retro-chromatic.svelte-13rlfrj::after {content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;}.retro-chromatic.svelte-13rlfrj::before {color:var(--color-bubble-tea-red, #ff8585);transform:translateX(-2px);opacity:0.8;mix-blend-mode:screen;}.retro-chromatic.svelte-13rlfrj::after {color:var(--color-terminal-cyan);transform:translateX(2px);opacity:0.8;mix-blend-mode:screen;}

	/* Vintage Macintosh styling */.bg-gray-200 {background:linear-gradient(135deg, color-mix(in srgb, #fff 90%, var(--color-terminal-blue) 10%) 0%, color-mix(in srgb, #d0d0d0 90%, var(--color-terminal-blue) 10%) 100%);box-shadow:inset 2px 2px 4px rgba(255, 255, 255, 0.8),
			inset -2px -2px 4px rgba(0, 0, 0, 0.2);}

	/* Enhanced glow effects for different variants */.drop-shadow-\\[0_0_8px_rgba\\(74\\,222\\,128\\,0\\.8\\)\\] {filter:drop-shadow(0 0 8px rgba(74, 222, 128, 0.8)) drop-shadow(0 0 16px rgba(74, 222, 128, 0.4));}.drop-shadow-\\[0_0_20px_rgba\\(134\\,239\\,172\\,1\\)\\] {filter:drop-shadow(0 0 20px rgba(134, 239, 172, 1)) drop-shadow(0 0 40px rgba(134, 239, 172, 0.5));
		animation: svelte-13rlfrj-phosphor-pulse 2s ease-in-out infinite alternate;}

	@keyframes svelte-13rlfrj-phosphor-pulse {
		0% {
			filter: drop-shadow(0 0 20px rgba(134, 239, 172, 1)) drop-shadow(0 0 40px rgba(134, 239, 172, 0.5));
		}
		100% {
			filter: drop-shadow(0 0 25px rgba(134, 239, 172, 1)) drop-shadow(0 0 50px rgba(134, 239, 172, 0.7));
		}
	}

	/* Matrix variant rain effect */.text-green-500 {position:relative;
		animation: svelte-13rlfrj-matrix-glow 3s ease-in-out infinite alternate;}

	@keyframes svelte-13rlfrj-matrix-glow {
		0% {
			text-shadow:
                0 0 5px var(--color-terminal-green),
                0 0 10px var(--color-terminal-green),
                0 0 20px var(--color-terminal-green);
		}
		100% {
			text-shadow:
                0 0 10px var(--color-terminal-green),
                0 0 20px var(--color-terminal-green),
                0 0 40px var(--color-terminal-green);
		}
	}

	/* Cyberpunk neon effects */.text-cyan-400 {
		animation: svelte-13rlfrj-cyberpunk-flicker 4s ease-in-out infinite;}

	@keyframes svelte-13rlfrj-cyberpunk-flicker {
		0%,
		100% {
			text-shadow:
                0 0 5px var(--color-terminal-cyan),
                0 0 10px var(--color-terminal-cyan),
                0 0 20px var(--color-terminal-cyan),
                0 0 40px var(--color-terminal-cyan);
		}
		50% {
			text-shadow:
                0 0 2px var(--color-terminal-cyan),
                0 0 5px var(--color-terminal-cyan),
                0 0 10px var(--color-terminal-cyan),
                0 0 20px var(--color-terminal-cyan);
		}
	}

	/* Vaporwave aesthetics */.text-pink-300 {
		animation: svelte-13rlfrj-vaporwave-shift 6s ease-in-out infinite;}

	@keyframes svelte-13rlfrj-vaporwave-shift {
		0%,
		100% {
			text-shadow:
                0 0 10px var(--color-bubble-tea-glow-pink),
                0 0 20px var(--color-bubble-tea-glow-pink),
                0 0 30px var(--color-bubble-tea-glow-pink);
			filter: hue-rotate(0deg);
		}
		33% {
			text-shadow:
                0 0 10px var(--color-bubble-tea-purple),
                0 0 20px var(--color-bubble-tea-purple),
                0 0 30px var(--color-bubble-tea-purple);
			filter: hue-rotate(60deg);
		}
		66% {
			text-shadow:
                0 0 10px var(--color-bubble-tea-green),
                0 0 20px var(--color-bubble-tea-green),
                0 0 30px var(--color-bubble-tea-green);
			filter: hue-rotate(120deg);
		}
	}

	/* Responsive design for retro effects */
	@media (max-width: 640px) {.retro-scanlines-overlay.svelte-13rlfrj {background-size:100% 2px;}.crt-bezel.svelte-13rlfrj {border-width:4px;border-radius:12px;}.retro-chromatic.svelte-13rlfrj::before,
		.retro-chromatic.svelte-13rlfrj::after {transform:translateX(-1px);}.retro-chromatic.svelte-13rlfrj::after {transform:translateX(1px);}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {.retro-scanlines-overlay.svelte-13rlfrj {background:linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%);}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {.retro-flicker.svelte-13rlfrj,
		.retro-scanlines-overlay.svelte-13rlfrj,
		.text-green-500,
		.text-cyan-400,
		.text-pink-300 {
			animation: none;}
	}`
};
function Bp(r, e) {
  Ke(e, !0), Je(r, Jm);
  const a = s(e, "variant", 3, "macintosh"), n = s(e, "size", 3, "md"), l = s(e, "animated", 3, !0), d = s(e, "typewriter", 3, !1), c = s(e, "scanlines", 3, !0), g = s(e, "glow", 3, !0), w = s(e, "flicker", 3, !1), N = s(e, "chromatic", 3, !1), h = s(e, "breathing", 3, !1), P = s(e, "class", 3, ""), L = s(e, "element", 3, "p"), A = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "text",
    "variant",
    "size",
    "animated",
    "typewriter",
    "scanlines",
    "glow",
    "flicker",
    "chromatic",
    "breathing",
    "class",
    "element"
  ]);
  let k = /* @__PURE__ */ Se(""), f = /* @__PURE__ */ Se(!0), B = /* @__PURE__ */ Se(0);
  const $ = {
    macintosh: {
      color: "text-black",
      bg: "bg-gray-200",
      font: "font-mono",
      shadow: "drop-shadow-none",
      filter: "contrast(1.25) brightness(1.1)",
      border: "border-2 border-black rounded-lg"
    },
    dos: {
      color: "text-green-400",
      bg: "bg-black",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]",
      filter: "contrast(1.5)",
      border: "border border-green-400/30"
    },
    amiga: {
      color: "text-orange-400",
      bg: "bg-gradient-to-b from-blue-900 to-blue-800",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_12px_rgba(251,146,60,0.9)]",
      filter: "contrast(1.4) saturate(1.5)",
      border: "border border-orange-400/40"
    },
    commodore: {
      color: "text-blue-300",
      bg: "bg-blue-950",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]",
      filter: "contrast(1.3)",
      border: "border border-blue-300/30"
    },
    atari: {
      color: "text-yellow-300",
      bg: "bg-gradient-to-b from-red-900 to-orange-900",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]",
      filter: "contrast(1.6) saturate(1.2)",
      border: "border border-yellow-300/40"
    },
    crt: {
      color: "text-green-300",
      bg: "bg-black",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_20px_rgba(134,239,172,1)]",
      filter: "contrast(2) brightness(1.2)",
      border: "border border-green-300/50 rounded-xl"
    },
    phosphor: {
      color: "text-green-400",
      bg: "bg-gray-900",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_25px_rgba(74,222,128,1)]",
      filter: "contrast(1.8) brightness(1.3)",
      border: "border-2 border-green-400/60"
    },
    matrix: {
      color: "text-green-500",
      bg: "bg-black",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_30px_rgba(34,197,94,1)]",
      filter: "contrast(2) brightness(1.4) hue-rotate(15deg)",
      border: "border border-green-500/70"
    },
    cyberpunk: {
      color: "text-cyan-400",
      bg: "bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]",
      filter: "contrast(1.5) saturate(2) hue-rotate(15deg)",
      border: "border border-cyan-400/50 rounded-2xl"
    },
    vaporwave: {
      color: "text-pink-300",
      bg: "bg-gradient-to-br from-purple-800 via-pink-700 to-cyan-600",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_25px_rgba(249,168,212,0.9)]",
      filter: "contrast(1.2) saturate(1.8) hue-rotate(330deg)",
      border: "border border-pink-300/60 rounded-3xl"
    },
    neon: {
      color: "text-cyan-400",
      bg: "bg-black",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]",
      filter: "contrast(1.4) saturate(1.8)",
      border: "border border-cyan-400/50"
    },
    hologram: {
      color: "text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text",
      bg: "bg-black",
      font: "font-mono",
      shadow: "drop-shadow-none",
      filter: "contrast(1.2) saturate(1.5)",
      border: "border border-purple-400/40"
    },
    glitch: {
      color: "text-red-400",
      bg: "bg-black",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]",
      filter: "contrast(1.6)",
      border: "border border-red-400/50"
    },
    terminal: {
      color: "text-green-400",
      bg: "bg-gray-900",
      font: "font-mono",
      shadow: "drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]",
      filter: "contrast(1.3)",
      border: "border border-green-400/40"
    }
  }, y = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl"
  }, T = $[a()];
  yt(() => {
    if (d()) {
      const G = setInterval(
        () => {
          t(B) < e.text.length ? (Y(k, e.text.slice(0, t(B) + 1), !0), Aa(B)) : clearInterval(G);
        },
        50 + Math.random() * 100
      ), U = setInterval(
        () => {
          Y(f, !t(f));
        },
        500
      );
      return () => {
        clearInterval(G), clearInterval(U);
      };
    } else
      Y(k, e.text, !0);
  });
  const F = V("relative inline-block transition-all duration-300", T.font, T.color, y[n()], g() && T.shadow, l() && "transform-gpu will-change-transform", c() && "retro-scanlines", w() && "retro-flicker", N() && "retro-chromatic", P()), H = V("relative inline-block p-4 overflow-hidden", T.bg, T.border, l() && "transition-all duration-500");
  var j = Ae(), q = ke(j);
  {
    var O = (G) => {
      var U = Im();
      Qe(U, () => ({ class: H, ...A }), void 0, void 0, "svelte-13rlfrj");
      var R = i(U), C = i(R), _ = u(C);
      {
        var x = (m) => {
          var p = Mm();
          o(m, p);
        };
        b(_, (m) => {
          d() && t(f) && m(x);
        });
      }
      var S = u(R, 2);
      {
        var W = (m) => {
          var p = Am();
          o(m, p);
        };
        b(S, (m) => {
          c() && m(W);
        });
      }
      var X = u(S, 2);
      {
        var E = (m) => {
          var p = zm();
          o(m, p);
        };
        b(X, (m) => {
          a() === "crt" && m(E);
        });
      }
      qe(U, (m, p) => It?.(m, p), () => ({
        enabled: l(),
        duration: 300,
        scale: 1.02,
        borderRadius: "12px"
      })), qe(U, (m, p) => Rt?.(m, p), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), M(() => {
        D(R, 1, Q(F), "svelte-13rlfrj"), pt(R, `filter: ${T.filter ?? ""}`), re(C, `${(d() ? t(k) : e.text) ?? ""} `);
      }), o(G, U);
    }, I = (G) => {
      var U = Ae(), R = ke(U);
      {
        var C = (x) => {
          var S = jm();
          Qe(S, () => ({ class: H, ...A }), void 0, void 0, "svelte-13rlfrj");
          var W = i(S), X = i(W), E = u(X);
          {
            var m = (be) => {
              var te = Pm();
              o(be, te);
            };
            b(E, (be) => {
              d() && t(f) && be(m);
            });
          }
          var p = u(W, 2);
          {
            var oe = (be) => {
              var te = Lm();
              o(be, te);
            };
            b(p, (be) => {
              c() && be(oe);
            });
          }
          var ce = u(p, 2);
          {
            var ve = (be) => {
              var te = Dm();
              o(be, te);
            };
            b(ce, (be) => {
              a() === "crt" && be(ve);
            });
          }
          qe(S, (be, te) => It?.(be, te), () => ({
            enabled: l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "12px"
          })), qe(S, (be, te) => Rt?.(be, te), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), M(() => {
            D(W, 1, Q(F), "svelte-13rlfrj"), pt(W, `filter: ${T.filter ?? ""}`), re(X, `${(d() ? t(k) : e.text) ?? ""} `);
          }), o(x, S);
        }, _ = (x) => {
          var S = Ae(), W = ke(S);
          {
            var X = (m) => {
              var p = Om();
              Qe(p, () => ({ class: H, ...A }), void 0, void 0, "svelte-13rlfrj");
              var oe = i(p), ce = i(oe), ve = u(ce);
              {
                var be = (ee) => {
                  var J = Rm();
                  o(ee, J);
                };
                b(ve, (ee) => {
                  d() && t(f) && ee(be);
                });
              }
              var te = u(oe, 2);
              {
                var K = (ee) => {
                  var J = Nm();
                  o(ee, J);
                };
                b(te, (ee) => {
                  c() && ee(K);
                });
              }
              var ae = u(te, 2);
              {
                var z = (ee) => {
                  var J = qm();
                  o(ee, J);
                };
                b(ae, (ee) => {
                  a() === "crt" && ee(z);
                });
              }
              qe(p, (ee, J) => It?.(ee, J), () => ({
                enabled: l(),
                duration: 300,
                scale: 1.02,
                borderRadius: "12px"
              })), qe(p, (ee, J) => Rt?.(ee, J), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), M(() => {
                D(oe, 1, Q(F), "svelte-13rlfrj"), pt(oe, `filter: ${T.filter ?? ""}`), re(ce, `${(d() ? t(k) : e.text) ?? ""} `);
              }), o(m, p);
            }, E = (m) => {
              var p = Ae(), oe = ke(p);
              {
                var ce = (be) => {
                  var te = Vm();
                  Qe(te, () => ({ class: H, ...A }), void 0, void 0, "svelte-13rlfrj");
                  var K = i(te), ae = i(K), z = u(ae);
                  {
                    var ee = (de) => {
                      var ge = Bm();
                      o(de, ge);
                    };
                    b(z, (de) => {
                      d() && t(f) && de(ee);
                    });
                  }
                  var J = u(K, 2);
                  {
                    var Z = (de) => {
                      var ge = Fm();
                      o(de, ge);
                    };
                    b(J, (de) => {
                      c() && de(Z);
                    });
                  }
                  var ie = u(J, 2);
                  {
                    var ne = (de) => {
                      var ge = Hm();
                      o(de, ge);
                    };
                    b(ie, (de) => {
                      a() === "crt" && de(ne);
                    });
                  }
                  qe(te, (de, ge) => It?.(de, ge), () => ({
                    enabled: l(),
                    duration: 300,
                    scale: 1.02,
                    borderRadius: "12px"
                  })), qe(te, (de, ge) => Rt?.(de, ge), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), M(() => {
                    D(K, 1, Q(F), "svelte-13rlfrj"), pt(K, `filter: ${T.filter ?? ""}`), re(ae, `${(d() ? t(k) : e.text) ?? ""} `);
                  }), o(be, te);
                }, ve = (be) => {
                  var te = Ae(), K = ke(te);
                  {
                    var ae = (ee) => {
                      var J = Wm();
                      Qe(J, () => ({ class: H, ...A }), void 0, void 0, "svelte-13rlfrj");
                      var Z = i(J), ie = i(Z), ne = u(ie);
                      {
                        var de = (fe) => {
                          var pe = Gm();
                          o(fe, pe);
                        };
                        b(ne, (fe) => {
                          d() && t(f) && fe(de);
                        });
                      }
                      var ge = u(Z, 2);
                      {
                        var se = (fe) => {
                          var pe = Um();
                          o(fe, pe);
                        };
                        b(ge, (fe) => {
                          c() && fe(se);
                        });
                      }
                      var ue = u(ge, 2);
                      {
                        var le = (fe) => {
                          var pe = Ym();
                          o(fe, pe);
                        };
                        b(ue, (fe) => {
                          a() === "crt" && fe(le);
                        });
                      }
                      qe(J, (fe, pe) => It?.(fe, pe), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), qe(J, (fe, pe) => Rt?.(fe, pe), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), M(() => {
                        D(Z, 1, Q(F), "svelte-13rlfrj"), pt(Z, `filter: ${T.filter ?? ""}`), re(ie, `${(d() ? t(k) : e.text) ?? ""} `);
                      }), o(ee, J);
                    }, z = (ee) => {
                      var J = Qm();
                      Qe(J, () => ({ class: H, ...A }), void 0, void 0, "svelte-13rlfrj");
                      var Z = i(J), ie = i(Z), ne = u(ie);
                      {
                        var de = (fe) => {
                          var pe = Xm();
                          o(fe, pe);
                        };
                        b(ne, (fe) => {
                          d() && t(f) && fe(de);
                        });
                      }
                      var ge = u(Z, 2);
                      {
                        var se = (fe) => {
                          var pe = Km();
                          o(fe, pe);
                        };
                        b(ge, (fe) => {
                          c() && fe(se);
                        });
                      }
                      var ue = u(ge, 2);
                      {
                        var le = (fe) => {
                          var pe = Zm();
                          o(fe, pe);
                        };
                        b(ue, (fe) => {
                          a() === "crt" && fe(le);
                        });
                      }
                      qe(J, (fe, pe) => It?.(fe, pe), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), qe(J, (fe, pe) => Rt?.(fe, pe), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), M(() => {
                        D(Z, 1, Q(F), "svelte-13rlfrj"), pt(Z, `filter: ${T.filter ?? ""}`), re(ie, `${(d() ? t(k) : e.text) ?? ""} `);
                      }), o(ee, J);
                    };
                    b(
                      K,
                      (ee) => {
                        L() === "div" ? ee(ae) : ee(z, !1);
                      },
                      !0
                    );
                  }
                  o(be, te);
                };
                b(
                  oe,
                  (be) => {
                    L() === "span" ? be(ce) : be(ve, !1);
                  },
                  !0
                );
              }
              o(m, p);
            };
            b(
              W,
              (m) => {
                L() === "h3" ? m(X) : m(E, !1);
              },
              !0
            );
          }
          o(x, S);
        };
        b(
          R,
          (x) => {
            L() === "h2" ? x(C) : x(_, !1);
          },
          !0
        );
      }
      o(G, U);
    };
    b(q, (G) => {
      L() === "h1" ? G(O) : G(I, !1);
    });
  }
  o(r, j), Ze();
}
var $m = /* @__PURE__ */ v('<span class="bitmap-char svelte-1cfjpo6"><!></span>'), eh = /* @__PURE__ */ v('<span class="cursor svelte-1cfjpo6">█</span>'), th = /* @__PURE__ */ v(" <!>", 1), rh = /* @__PURE__ */ v("<span><!></span>");
const ah = {
  hash: "svelte-1cfjpo6",
  code: `.retro-text.svelte-1cfjpo6 {font-family:var(--retro-font-family);font-weight:var(--retro-font-weight);letter-spacing:var(--retro-letter-spacing);line-height:var(--retro-line-height);font-size:var(--retro-font-size);color:var(--retro-color);text-transform:var(--retro-text-transform);font-variant-ligatures:none;font-feature-settings:normal;-webkit-font-smoothing:none;-moz-osx-font-smoothing:auto;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;}

	/* Glow effect */.retro-text.svelte-1cfjpo6 {text-shadow:0 0 5px var(--retro-shadow-color),
			0 0 10px var(--retro-shadow-color),
			0 0 15px var(--retro-shadow-color);}

	/* Scanlines overlay */.retro-text.scanlines.svelte-1cfjpo6::before {content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%);background-size:100% 2px;pointer-events:none;z-index:1;}

	/* Flicker animation */
	@keyframes svelte-1cfjpo6-flicker {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
		75% {
			opacity: 0.9;
		}
	}.animate-flicker.svelte-1cfjpo6 {
		animation: svelte-1cfjpo6-flicker 0.15s infinite linear;}

	/* Typewriter cursor */.cursor.svelte-1cfjpo6 {
		animation: svelte-1cfjpo6-blink 1s infinite;}

	@keyframes svelte-1cfjpo6-blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	/* Bitmap character styling */.bitmap-char.svelte-1cfjpo6 {display:inline-block;font-size:0.5em;line-height:0.8;vertical-align:top;white-space:pre;font-family:monospace;}

	/* Vintage CRT effects */.retro-text.svelte-1cfjpo6 {
		/* Slight chromatic aberration */filter:drop-shadow(1px 0 0 rgba(255, 0, 0, 0.1)) drop-shadow(-1px 0 0 rgba(0, 255, 255, 0.1));}

	/* Variant-specific enhancements */.retro-text[data-variant='commodore'] {background:linear-gradient(90deg, var(--retro-color) 0%, var(--retro-color) 100%);-webkit-background-clip:text;background-clip:text;}.retro-text[data-variant='apple2'] {text-shadow:1px 1px 0 rgba(0, 0, 0, 0.5),
			0 0 10px var(--retro-shadow-color);}.retro-text[data-variant='atari'] {border:1px solid var(--retro-color);padding:0.25em 0.5em;background:rgba(0, 0, 0, 0.8);box-shadow:inset 0 0 10px var(--retro-shadow-color);}

	/* High contrast mode adjustments */
	@media (prefers-contrast: high) {.retro-text.svelte-1cfjpo6 {text-shadow:none;filter:none;}
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {.animate-flicker.svelte-1cfjpo6,
		.cursor.svelte-1cfjpo6 {
			animation: none;}
	}

	/* Dark mode adjustments */
	@media (prefers-color-scheme: dark) {.retro-text.scanlines.svelte-1cfjpo6::before {background:linear-gradient(transparent 50%, rgba(255, 255, 255, 0.05) 50%);}
	}`
};
function Fp(r, e) {
  Ke(e, !0), Je(r, ah);
  const a = s(e, "text", 3, ""), n = s(e, "variant", 3, "bitmap"), l = s(e, "size", 3, "md"), d = s(e, "color", 3, "green");
  s(e, "glow", 3, !0);
  const c = s(e, "scanlines", 3, !1), g = s(e, "flicker", 3, !1), w = s(e, "animate", 3, !1), N = s(e, "typewriter", 3, !1), h = s(e, "speed", 3, 50), P = s(e, "class", 3, "");
  let L = /* @__PURE__ */ Se(""), A = /* @__PURE__ */ Se(0), k;
  const f = {
    bitmap: {
      fontFamily: "monospace",
      fontWeight: "400",
      letterSpacing: "0.1em",
      lineHeight: "1.2"
    },
    terminal: {
      fontFamily: '"Courier New", "Monaco", "Menlo", monospace',
      fontWeight: "700",
      letterSpacing: "0.05em",
      lineHeight: "1.1"
    },
    vintage: {
      fontFamily: '"SF Mono", "Monaco", "Inconsolata", monospace',
      fontWeight: "600",
      letterSpacing: "0.08em",
      lineHeight: "1.15"
    },
    commodore: {
      fontFamily: "monospace",
      fontWeight: "800",
      letterSpacing: "0.12em",
      lineHeight: "1.0",
      textTransform: "uppercase"
    },
    apple2: {
      fontFamily: '"Courier New", monospace',
      fontWeight: "500",
      letterSpacing: "0.15em",
      lineHeight: "1.1",
      textTransform: "uppercase"
    },
    atari: {
      fontFamily: "monospace",
      fontWeight: "600",
      letterSpacing: "0.2em",
      lineHeight: "1.0",
      textTransform: "uppercase"
    }
  }, B = {
    green: {
      color: "var(--color-terminal-green)",
      shadowColor: "#00ff0080"
    },
    amber: {
      color: "var(--color-bubble-tea-yellow)",
      shadowColor: "#ffb00080"
    },
    blue: {
      color: "var(--color-terminal-blue)",
      shadowColor: "#0080ff80"
    },
    white: { color: "#ffffff", shadowColor: "#ffffff40" },
    red: {
      color: "var(--color-bubble-tea-red)",
      shadowColor: "#ff004080"
    },
    cyan: {
      color: "var(--color-terminal-cyan)",
      shadowColor: "#00ffff80"
    },
    magenta: {
      color: "var(--color-terminal-pink)",
      shadowColor: "#ff00ff80"
    }
  }, $ = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem"
  }, y = V("retro-text inline-block relative", { "animate-flicker": g(), scanlines: c() }, P());
  function T() {
    if (!N() || !a()) return;
    Y(L, ""), Y(A, 0);
    const I = setInterval(
      () => {
        t(A) < a().length ? (Y(L, t(L) + a()[t(A)]), Aa(A)) : clearInterval(I);
      },
      h()
    );
  }
  xt(() => {
    N() ? T() : Y(L, a());
  }), xt(() => {
    if (k) {
      const I = f[n()], G = B[d()];
      k.style.setProperty("--retro-font-family", I.fontFamily), k.style.setProperty("--retro-font-weight", I.fontWeight), k.style.setProperty("--retro-letter-spacing", I.letterSpacing), k.style.setProperty("--retro-line-height", I.lineHeight), k.style.setProperty("--retro-font-size", $[l()]), k.style.setProperty("--retro-color", G.color), k.style.setProperty("--retro-shadow-color", G.shadowColor), k.style.setProperty("--retro-text-transform", I.textTransform || "none");
    }
  });
  function F(I) {
    return (n() === "commodore" || n() === "atari") && {
      " ": "&nbsp;",
      A: "█▀█<br>█▀█<br>█&nbsp;█",
      E: "███<br>██&nbsp;<br>███",
      I: "███<br>&nbsp;█&nbsp;<br>███",
      O: "███<br>█&nbsp;█<br>███",
      U: "█&nbsp;█<br>█&nbsp;█<br>███"
    }[I.toUpperCase()] || I;
  }
  yt(() => {
    w() && k && (k.style.opacity = "0", setTimeout(
      () => {
        k.style.transition = "opacity 0.5s ease-in-out", k.style.opacity = "1";
      },
      100
    ));
  });
  var H = rh(), j = i(H);
  {
    var q = (I) => {
      var G = Ae(), U = ke(G);
      it(U, () => e.children), o(I, G);
    }, O = (I) => {
      var G = Ae(), U = ke(G);
      {
        var R = (_) => {
          var x = Ae(), S = ke(x);
          Ye(S, 17, () => t(L).split(""), At, (W, X) => {
            var E = $m(), m = i(E);
            na(m, () => oa(F(t(X)))), M(() => Ce(E, "data-char", t(X))), o(W, E);
          }), o(_, x);
        }, C = (_) => {
          var x = th(), S = ke(x), W = u(S);
          {
            var X = (E) => {
              var m = eh();
              o(E, m);
            };
            b(W, (E) => {
              N() && t(A) < a().length && E(X);
            });
          }
          M(() => re(S, `${t(L) ?? ""} `)), o(_, x);
        };
        b(
          U,
          (_) => {
            n() === "commodore" || n() === "atari" ? _(R) : _(C, !1);
          },
          !0
        );
      }
      o(I, G);
    };
    b(j, (I) => {
      e.children ? I(q) : I(O, !1);
    });
  }
  at(H, (I) => k = I, () => k), M(() => {
    D(H, 1, Q(y), "svelte-1cfjpo6"), Ce(H, "aria-label", a());
  }), o(r, H), Ze();
}
var nh = /* @__PURE__ */ v("<div> </div>"), oh = /* @__PURE__ */ v('<div class="flex items-center svelte-nrft94"><span class="animate-pulse svelte-nrft94">_</span></div>'), ih = /* @__PURE__ */ v('<div class="mt-4 space-y-1 svelte-nrft94"><div>System initialization complete.</div> <div class="flex items-center svelte-nrft94"><span>user@hackers-brand:~$</span> <span class="animate-pulse ml-1 svelte-nrft94">_</span></div></div>'), lh = /* @__PURE__ */ v('<div class="absolute bottom-6 left-6 right-6 svelte-nrft94"><div class="flex items-center space-x-2 text-xs svelte-nrft94"><span>Loading:</span> <div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden svelte-nrft94"><div></div></div> <span> </span></div></div>'), sh = /* @__PURE__ */ v('<div><div class="absolute inset-0 opacity-10 pointer-events-none svelte-nrft94"><div class="w-full h-full svelte-nrft94" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"></div></div> <div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none svelte-nrft94"></div> <div class="relative z-10 space-y-1 svelte-nrft94"><!> <!> <!></div> <!> <div class="absolute inset-0 pointer-events-none svelte-nrft94"><div class="w-full h-full opacity-[0.02] blur-2xl svelte-nrft94" style="background-color: currentColor;"></div></div></div>');
const dh = {
  hash: "svelte-nrft94",
  code: `
	/* CRT text glow */div.svelte-nrft94 {text-shadow:0 0 10px currentColor;}

	/* Vintage monitor flicker */
	@keyframes svelte-nrft94-flicker {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.98;
		}
	}.animate-flicker.svelte-nrft94 {
		animation: svelte-nrft94-flicker 0.15s infinite linear;}`
};
function Hp(r, e) {
  Ke(e, !0), Je(r, dh);
  const a = s(e, "autoStart", 3, !0), n = s(e, "variant", 3, "retro"), l = s(e, "showBIOS", 3, !0), d = s(e, "fastBoot", 3, !1), c = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "autoStart",
    "onComplete",
    "variant",
    "showBIOS",
    "fastBoot",
    "class"
  ]);
  let w = /* @__PURE__ */ Se(0), N = /* @__PURE__ */ Se(!1), h = /* @__PURE__ */ Se(!1), P = /* @__PURE__ */ Se(0);
  const A = {
    retro: {
      bg: "bg-black",
      text: "text-amber-400",
      accent: "text-amber-300",
      success: "text-green-400",
      error: "text-red-400"
    },
    modern: {
      bg: "bg-gray-900",
      text: "text-cyan-400",
      accent: "text-cyan-300",
      success: "text-green-400",
      error: "text-red-400"
    },
    hacker: {
      bg: "bg-black",
      text: "text-green-400",
      accent: "text-green-300",
      success: "text-lime-400",
      error: "text-red-500"
    },
    matrix: {
      bg: "bg-black",
      text: "text-green-300",
      accent: "text-green-200",
      success: "text-green-400",
      error: "text-red-400"
    }
  }[n()], k = [
    "LIQUID GLASS BIOS v4.2.0",
    "Copyright (C) 2024 A Hacker's Brand Systems",
    "",
    "Detecting hardware...",
    "CPU: Quantum Glass Processor @ 3.14 THz",
    "RAM: 16GB Liquid Crystal Memory",
    "GPU: Neural Glass Rendering Unit",
    "Storage: 1TB SSD Crystalline Matrix",
    "",
    "Running POST diagnostics...",
    "Memory test: PASS",
    "Glass integrity: PASS",
    "Liquid dynamics: PASS",
    "Motion engine: PASS",
    "",
    "Loading bootloader..."
  ], f = [
    "GRUB Liquid Glass v2.0",
    "Loading A Hacker's Brand OS...",
    "",
    "[    0.000000] Initializing liquid kernel",
    "[    0.012421] Glass morphism drivers loaded",
    "[    0.024563] Jelly physics engine started",
    "[    0.035621] Motion primitives initialized",
    "[    0.048392] Terminal subsystem ready",
    "[    0.052881] Liquid blur filters active",
    "[    0.067432] Component registry loaded",
    "[    0.078234] Theme engine initialized",
    "[    0.089455] Animation pipeline ready",
    "[    0.095621] Design tokens synchronized",
    "[    0.103892] UI framework mounted",
    "[    0.112433] Glass surface calibrated",
    "[    0.125643] User interface ready",
    "[    0.134521] Welcome to A Hacker's Brand"
  ], B = l() ? [...k, "", ...f] : f, $ = d() ? 50 : 150, y = async () => {
    if (!t(N)) {
      Y(N, !0), Y(h, !1), Y(w, 0), Y(P, 0);
      for (let C = 0; C < B.length; C++) {
        Y(w, C, !0), Y(P, C / B.length * 100);
        let _ = $;
        B[C].includes("PASS") || B[C].includes("OK") ? _ = d() ? 30 : 100 : B[C].includes("[") && (_ = d() ? 20 : 80), await new Promise((x) => setTimeout(x, _));
      }
      Y(h, !0), Y(N, !1), Y(P, 100), e.onComplete?.();
    }
  };
  yt(() => {
    a() && setTimeout(y, 300);
  });
  const T = (C) => C.includes("PASS") || C.includes("OK") || C.includes("ready") ? A.success : C.includes("FAIL") || C.includes("ERROR") ? A.error : C.includes("Copyright") || C.includes("BIOS") || C.includes("GRUB") ? A.accent : A.text;
  var F = sh();
  Qe(
    F,
    (C) => ({ class: C, ...g }),
    [
      () => V("relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden", A.bg, A.text, c())
    ],
    void 0,
    "svelte-nrft94"
  );
  var H = u(i(F), 4), j = i(H);
  Ye(j, 17, () => B.slice(0, t(w) + 1), At, (C, _, x) => {
    var S = nh(), W = i(S);
    M(
      (X) => {
        D(S, 1, X, "svelte-nrft94"), re(W, t(_) || " ");
      },
      [
        () => Q(V("whitespace-pre-wrap transition-all duration-200", T(t(_)), x === t(w) && t(N) ? "animate-pulse" : ""))
      ]
    ), o(C, S);
  });
  var q = u(j, 2);
  {
    var O = (C) => {
      var _ = oh();
      o(C, _);
    };
    b(q, (C) => {
      t(N) && C(O);
    });
  }
  var I = u(q, 2);
  {
    var G = (C) => {
      var _ = ih(), x = i(_), S = u(x, 2), W = i(S);
      M(() => {
        D(x, 1, Q(A.success), "svelte-nrft94"), D(W, 1, Q(A.accent), "svelte-nrft94");
      }), o(C, _);
    };
    b(I, (C) => {
      t(h) && C(G);
    });
  }
  var U = u(H, 2);
  {
    var R = (C) => {
      var _ = lh(), x = i(_), S = i(x), W = u(S, 2), X = i(W), E = u(W, 2), m = i(E);
      M(
        (p, oe) => {
          D(S, 1, Q(A.accent), "svelte-nrft94"), D(X, 1, p, "svelte-nrft94"), pt(X, `width: ${t(P) ?? ""}%; background-color: currentColor;`), D(E, 1, Q(A.text), "svelte-nrft94"), re(m, `${oe ?? ""}%`);
        },
        [
          () => Q(V("h-full transition-all duration-300 rounded-full", A.success)),
          () => Math.round(t(P))
        ]
      ), o(C, _);
    };
    b(U, (C) => {
      t(N) && !d() && C(R);
    });
  }
  o(r, F), Ze();
}
var ch = /* @__PURE__ */ v('<div class="flex items-center justify-center p-8 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 svelte-1884ls5"></div> <span class="text-white/70 svelte-1884ls5">Loading...</span></div></div>'), vh = /* @__PURE__ */ v('<div class="text-sm text-red-400/70 svelte-1884ls5"> </div>'), uh = /* @__PURE__ */ v('<div role="alert" aria-live="assertive"><div class="space-y-4 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="flex-shrink-0 svelte-1884ls5"><svg class="w-6 h-6 text-red-500 svelte-1884ls5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="svelte-1884ls5"></path></svg></div> <div class="svelte-1884ls5"><h3 class="text-lg font-semibold text-red-600 svelte-1884ls5"> </h3> <p class="text-sm text-red-500/80 svelte-1884ls5"> </p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1884ls5"><!> <!></div> <div class="text-xs text-red-400/50 svelte-1884ls5"><!></div></div></div>');
const fh = {
  hash: "svelte-1884ls5",
  code: `
	/* Loading spinner animation */
	@keyframes svelte-1884ls5-spin {
		to {
			transform: rotate(360deg);
		}
	}.animate-spin.svelte-1884ls5 {
		animation: svelte-1884ls5-spin 1s linear infinite;}

	/* Pulse animation for loading states */
	@keyframes svelte-1884ls5-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}.animate-pulse.svelte-1884ls5 {
		animation: svelte-1884ls5-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;}

	/* Error state animation */div[role='alert'].svelte-1884ls5 {
		animation: svelte-1884ls5-slideInUp 0.3s ease-out;}

	@keyframes svelte-1884ls5-slideInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}`
};
function Vp(r, e) {
  Ke(e, !0), Je(r, fh);
  const a = s(e, "variant", 3, "glass"), n = s(e, "animate", 3, !0), l = s(
    e,
    "timeout",
    3,
    1e4
    // 10 seconds
  ), d = s(e, "maxRetries", 3, 3), c = s(e, "class", 3, "");
  let g = /* @__PURE__ */ Se("idle"), w = /* @__PURE__ */ Se(null), N = /* @__PURE__ */ Se(null), h = /* @__PURE__ */ Se(0), P = null;
  async function L(O) {
    if (O) {
      Y(g, "loading"), Y(w, null), Y(N, null), l() > 0 && (P = setTimeout(
        () => {
          t(g) === "loading" && (Y(g, "timeout"), Y(w, new Error(`Operation timed out after ${l()}ms`), !0), e.onError?.(t(w)));
        },
        l()
      ));
      try {
        Y(N, await O, !0), Y(g, "success");
      } catch (I) {
        Y(w, I instanceof Error ? I : new Error(String(I)), !0), Y(g, "error"), e.onError?.(t(w));
      } finally {
        P && (clearTimeout(P), P = null);
      }
    }
  }
  async function A() {
    if (!(t(h) >= d()))
      if (Aa(h), e.onRetry) {
        const O = e.onRetry();
        await L(O);
      } else e.promise && await L(e.promise);
  }
  function k() {
    Y(g, "idle"), Y(w, null), Y(N, null), Y(h, 0), P && (clearTimeout(P), P = null);
  }
  xt(() => {
    e.promise && L(e.promise);
  }), yt(() => () => {
    P && clearTimeout(P);
  });
  const B = V("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[a()], c());
  function $(O) {
    switch (O) {
      case "timeout":
        return "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
      case "network":
        return "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0";
      default:
        return "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    }
  }
  function y(O) {
    return O.message.includes("timeout") ? "timeout" : O.message.includes("fetch") || O.message.includes("network") ? "network" : "general";
  }
  function T(O) {
    switch (y(O)) {
      case "timeout":
        return "The operation took too long to complete";
      case "network":
        return "Network connection failed";
      default:
        return O.message || "An unexpected error occurred";
    }
  }
  var F = Ae(), H = ke(F);
  {
    var j = (O) => {
      var I = Ae(), G = ke(I);
      {
        var U = (C) => {
          var _ = Ae(), x = ke(_);
          it(x, () => e.loading), o(C, _);
        }, R = (C) => {
          var _ = ch();
          nt(1, _, () => gt, () => n() ? { duration: 200 } : void 0), o(C, _);
        };
        b(G, (C) => {
          e.loading ? C(U) : C(R, !1);
        });
      }
      o(O, I);
    }, q = (O) => {
      var I = Ae(), G = ke(I);
      {
        var U = (C) => {
          var _ = Ae(), x = ke(_);
          {
            var S = (X) => {
              var E = Ae(), m = ke(E);
              it(m, () => e.fallback, () => ({
                error: t(w),
                retry: A,
                reset: k,
                retryCount: t(h),
                maxRetries: d(),
                state: t(g)
              })), o(X, E);
            }, W = (X) => {
              var E = uh(), m = i(E), p = i(m), oe = i(p), ce = i(oe), ve = i(ce), be = u(oe, 2), te = i(be), K = i(te), ae = u(te, 2), z = i(ae), ee = u(p, 2);
              b(ee, (pe) => {
                t(w);
              });
              var J = u(ee, 2);
              {
                var Z = (pe) => {
                  var Te = vh(), Ne = i(Te);
                  M(() => re(Ne, `Retry attempt ${t(h) ?? ""} of ${d() ?? ""}`)), o(pe, Te);
                };
                b(J, (pe) => {
                  t(h) > 0 && pe(Z);
                });
              }
              var ie = u(J, 2), ne = i(ie);
              {
                var de = (pe) => {
                  tr(pe, {
                    variant: "glass",
                    size: "sm",
                    onclick: A,
                    class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                    children: (Te, Ne) => {
                      var He = St();
                      M(() => re(He, t(g) === "timeout" ? "Try Again" : "Retry")), o(Te, He);
                    },
                    $$slots: { default: !0 }
                  });
                };
                b(ne, (pe) => {
                  t(h) < d() && (e.onRetry || e.promise) && pe(de);
                });
              }
              var ge = u(ne, 2);
              tr(ge, {
                variant: "glass",
                size: "sm",
                onclick: k,
                class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
                children: (pe, Te) => {
                  var Ne = St("Reset");
                  o(pe, Ne);
                },
                $$slots: { default: !0 }
              });
              var se = u(ie, 2), ue = i(se);
              {
                var le = (pe) => {
                  var Te = St();
                  M(() => re(Te, `The operation exceeded the ${l() / 1e3}s timeout limit.`)), o(pe, Te);
                }, fe = (pe) => {
                  var Te = Ae(), Ne = ke(Te);
                  {
                    var He = (_e) => {
                      var xe = St("Check your internet connection and try again.");
                      o(_e, xe);
                    }, Be = (_e) => {
                      var xe = St("If the problem persists, please contact support.");
                      o(_e, xe);
                    };
                    b(
                      Ne,
                      (_e) => {
                        y(t(w)) === "network" ? _e(He) : _e(Be, !1);
                      },
                      !0
                    );
                  }
                  o(pe, Te);
                };
                b(ue, (pe) => {
                  t(g) === "timeout" ? pe(le) : pe(fe, !1);
                });
              }
              M(
                (pe, Te) => {
                  D(E, 1, Q(B), "svelte-1884ls5"), Ce(ve, "d", pe), re(K, t(g) === "timeout" ? "Operation Timeout" : "Request Failed"), re(z, Te);
                },
                [
                  () => $(y(t(w))),
                  () => t(w) ? T(t(w)) : "An error occurred while processing your request"
                ]
              ), nt(1, E, () => gt, () => n() ? { duration: 300 } : void 0), o(X, E);
            };
            b(x, (X) => {
              e.fallback ? X(S) : X(W, !1);
            });
          }
          o(C, _);
        }, R = (C) => {
          var _ = Ae(), x = ke(_);
          {
            var S = (X) => {
              var E = Ae(), m = ke(E);
              {
                var p = (oe) => {
                  var ce = Ae(), ve = ke(ce);
                  it(ve, () => e.children, () => ({ result: t(N) })), o(oe, ce);
                };
                b(m, (oe) => {
                  e.children && oe(p);
                });
              }
              o(X, E);
            }, W = (X) => {
              var E = Ae(), m = ke(E);
              {
                var p = (oe) => {
                  var ce = Ae(), ve = ke(ce);
                  it(ve, () => e.children), o(oe, ce);
                };
                b(m, (oe) => {
                  e.children && oe(p);
                });
              }
              o(X, E);
            };
            b(
              x,
              (X) => {
                t(g) === "success" ? X(S) : X(W, !1);
              },
              !0
            );
          }
          o(C, _);
        };
        b(
          G,
          (C) => {
            t(g) === "error" || t(g) === "timeout" ? C(U) : C(R, !1);
          },
          !0
        );
      }
      o(O, I);
    };
    b(H, (O) => {
      t(g) === "loading" ? O(j) : O(q, !1);
    });
  }
  o(r, F), Ze();
}
var bh = /* @__PURE__ */ v('<details class="mt-3 svelte-1q83gw3"><summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400 svelte-1q83gw3">Stack Trace</summary> <pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40 svelte-1q83gw3"> </pre></details>'), gh = /* @__PURE__ */ v('<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 svelte-1q83gw3"><p class="font-mono text-sm text-red-400 svelte-1q83gw3"> </p> <!></div>'), mh = /* @__PURE__ */ v('<div class="text-sm text-red-400/70 svelte-1q83gw3"> </div>'), hh = /* @__PURE__ */ v('<div class="space-y-4 svelte-1q83gw3"><div class="flex items-center gap-3 svelte-1q83gw3"><div class="flex-shrink-0 svelte-1q83gw3"><svg class="w-6 h-6 text-red-500 svelte-1q83gw3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1q83gw3"></path></svg></div> <div class="svelte-1q83gw3"><h3 class="text-lg font-semibold text-red-600 svelte-1q83gw3">Something went wrong</h3> <p class="text-sm text-red-500/80 svelte-1q83gw3">A component error occurred and was caught by the error boundary</p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1q83gw3"><!> <!> <!></div> <!></div>'), ph = /* @__PURE__ */ v('<div role="alert" aria-live="assertive"><!></div>');
const xh = {
  hash: "svelte-1q83gw3",
  code: `.error-boundary-fallback {
		/* Global styles for error boundary fallbacks */min-height:100px;display:flex;align-items:center;justify-content:center;}

	/* Animation for error states */div[role='alert'].svelte-1q83gw3 {
		animation: svelte-1q83gw3-shake 0.5s ease-in-out;}

	@keyframes svelte-1q83gw3-shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px);
		}
		75% {
			transform: translateX(5px);
		}
	}

	/* Dark mode improvements */
	@media (prefers-color-scheme: dark) {.error-boundary-minimal {background-color:rgba(127, 29, 29, 0.1);border-color:rgba(239, 68, 68, 0.3);color:rgb(252, 165, 165);}
	}`
};
function Gp(r, e) {
  Ke(e, !0), Je(r, xh);
  const a = s(e, "showDetails", 3, !1), n = s(e, "variant", 3, "glass"), l = s(e, "animate", 3, !0), d = s(e, "retryable", 3, !0), c = s(e, "class", 3, "");
  let g = /* @__PURE__ */ Se(!1), w = /* @__PURE__ */ Se(null), N = /* @__PURE__ */ Se(null), h = /* @__PURE__ */ Se(0), P = /* @__PURE__ */ Se(!1);
  const L = 3;
  function A(I, G) {
    Y(g, !0), Y(w, I, !0), Y(N, G, !0), e.onError?.(I, G), console.error("Component Error Boundary caught an error:", I), G && console.error("Error info:", G);
  }
  function k() {
    t(h) < L && (Y(g, !1), Y(w, null), Y(N, null), Aa(h));
  }
  function f() {
    Y(g, !1), Y(w, null), Y(N, null), Y(h, 0), Y(P, !1);
  }
  const $ = V("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[n()], c());
  yt(() => {
    const I = (U) => {
      A(new Error(`Unhandled promise rejection: ${U.reason}`)), U.preventDefault();
    }, G = (U) => {
      A(new Error(U.message), {
        filename: U.filename,
        lineno: U.lineno,
        colno: U.colno
      });
    };
    return window.addEventListener("unhandledrejection", I), window.addEventListener("error", G), () => {
      window.removeEventListener("unhandledrejection", I), window.removeEventListener("error", G);
    };
  });
  function y(I) {
    return `${I.name}: ${I.message}`;
  }
  function T(I) {
    return I.stack || "No stack trace available";
  }
  function F() {
    return t(h) === 0 ? "" : t(h) >= L ? `Maximum retry attempts reached (${L})` : `Retry attempt ${t(h)} of ${L}`;
  }
  var H = Ae(), j = ke(H);
  {
    var q = (I) => {
      var G = ph(), U = i(G);
      {
        var R = (_) => {
          var x = Ae(), S = ke(x);
          it(S, () => e.fallback, () => ({
            error: t(w),
            retry: k,
            reset: f,
            retryCount: t(h),
            maxRetries: L
          })), o(_, x);
        }, C = (_) => {
          var x = hh(), S = u(i(x), 2);
          {
            var W = (K) => {
              var ae = gh(), z = i(ae), ee = i(z), J = u(z, 2);
              {
                var Z = (ie) => {
                  var ne = bh(), de = u(i(ne), 2), ge = i(de);
                  M((se) => re(ge, se), [() => T(t(w))]), o(ie, ne);
                };
                b(J, (ie) => {
                  a() && t(P) && ie(Z);
                });
              }
              M((ie) => re(ee, ie), [() => y(t(w))]), o(K, ae);
            };
            b(S, (K) => {
              t(w) && K(W);
            });
          }
          var X = u(S, 2);
          {
            var E = (K) => {
              var ae = mh(), z = i(ae);
              M((ee) => re(z, ee), [F]), o(K, ae);
            };
            b(X, (K) => {
              t(h) > 0 && K(E);
            });
          }
          var m = u(X, 2), p = i(m);
          {
            var oe = (K) => {
              tr(K, {
                variant: "glass",
                size: "sm",
                onclick: k,
                class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                children: (ae, z) => {
                  var ee = St("Try Again");
                  o(ae, ee);
                },
                $$slots: { default: !0 }
              });
            };
            b(p, (K) => {
              d() && t(h) < L && K(oe);
            });
          }
          var ce = u(p, 2);
          tr(ce, {
            variant: "glass",
            size: "sm",
            onclick: f,
            class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
            children: (K, ae) => {
              var z = St("Reset");
              o(K, z);
            },
            $$slots: { default: !0 }
          });
          var ve = u(ce, 2);
          {
            var be = (K) => {
              tr(K, {
                variant: "glass",
                size: "sm",
                onclick: () => Y(P, !t(P)),
                class: "bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30",
                children: (ae, z) => {
                  var ee = St();
                  M(() => re(ee, `${t(P) ? "Hide" : "Show"} Details`)), o(ae, ee);
                },
                $$slots: { default: !0 }
              });
            };
            b(ve, (K) => {
              a() && K(be);
            });
          }
          var te = u(m, 2);
          b(te, (K) => {
          }), o(_, x);
        };
        b(U, (_) => {
          e.fallback ? _(R) : _(C, !1);
        });
      }
      M(() => D(G, 1, Q($), "svelte-1q83gw3")), nt(1, G, () => kt, () => l() ? { duration: 300, blur: "sm" } : void 0), o(I, G);
    }, O = (I) => {
      var G = Ae(), U = ke(G);
      {
        var R = (C) => {
          var _ = Ae(), x = ke(_);
          it(x, () => e.children), o(C, _);
        };
        b(U, (C) => {
          e.children && C(R);
        });
      }
      o(I, G);
    };
    b(j, (I) => {
      t(g) ? I(q) : I(O, !1);
    });
  }
  o(r, H), Ze();
}
function wh(r, e, a) {
  Y(e, !0), a.onDismiss?.();
}
var _h = /* @__PURE__ */ v('<li class="text-sm text-red-500"> </li>'), yh = /* @__PURE__ */ v('<li class="flex items-start gap-2 svelte-12vbusp"><div class="flex-shrink-0 mt-1"><svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div> <div class="min-w-0"><span class="text-sm font-medium text-red-600"> </span> <ul class="mt-1 space-y-1"></ul></div></li>'), kh = /* @__PURE__ */ v('<button class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors svelte-12vbusp" aria-label="Dismiss errors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), Ch = /* @__PURE__ */ v('<div role="alert" aria-live="polite"><div class="flex items-start gap-3"><div class="flex-shrink-0 mt-0.5"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-semibold text-red-600 mb-2"> </h3> <ul class="space-y-2 svelte-12vbusp"></ul></div> <!></div></div>'), Sh = /* @__PURE__ */ v('<p class="text-sm text-red-500 flex items-center gap-1 svelte-12vbusp"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> </p>'), Eh = /* @__PURE__ */ v('<div class="mt-1"></div>'), Th = /* @__PURE__ */ v("<!> <!> <!>", 1);
const Mh = {
  hash: "svelte-12vbusp",
  code: `
	/* Focus ring for dismiss button */button.svelte-12vbusp:focus {outline:2px solid rgba(239, 68, 68, 0.3);outline-offset:2px;}

	/* Error animation */div[role='alert'].svelte-12vbusp {
		animation: svelte-12vbusp-slideDown 0.3s ease-out;}

	@keyframes svelte-12vbusp-slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Individual field error animations */p.text-red-500.svelte-12vbusp {
		animation: svelte-12vbusp-fadeInScale 0.2s ease-out;}

	@keyframes svelte-12vbusp-fadeInScale {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Responsive improvements */
	@media (max-width: 640px) {.space-y-2.svelte-12vbusp > :where(.svelte-12vbusp) + :where(.svelte-12vbusp) {margin-top:0.75rem;}
	}`
};
function Up(r, e) {
  Ke(e, !0), Je(r, Mh);
  const a = s(e, "errors", 19, () => []), n = s(e, "showSummary", 3, !0), l = s(e, "variant", 3, "glass"), d = s(e, "animate", 3, !0), c = s(e, "dismissible", 3, !1), g = s(e, "class", 3, "");
  let w = /* @__PURE__ */ Se(!1);
  const N = /* @__PURE__ */ Ee(() => a().length > 0 && !t(w)), h = /* @__PURE__ */ Ee(() => a().reduce(
    (j, q) => (j[q.field] || (j[q.field] = []), j[q.field].push(q), j),
    {}
  )), L = V("rounded-brand p-4 mb-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[l()], g());
  function A(j) {
    return j.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^\w/, (q) => q.toUpperCase()).trim();
  }
  function k(j) {
    switch (j) {
      case "required":
        return "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 14.5c-.77.833.192 2.5 1.732 2.5z";
      case "invalid":
        return "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";
      case "length":
        return "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z";
      default:
        return "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    }
  }
  var f = Th(), B = ke(f);
  {
    var $ = (j) => {
      var q = Ch(), O = i(q), I = u(i(O), 2), G = i(I), U = i(G), R = u(G, 2);
      Ye(R, 21, () => Object.entries(t(h)), At, (x, S) => {
        var W = /* @__PURE__ */ Ee(() => Kr(t(S), 2));
        let X = () => t(W)[0], E = () => t(W)[1];
        var m = yh(), p = i(m), oe = i(p), ce = i(oe), ve = u(p, 2), be = i(ve), te = i(be), K = u(be, 2);
        Ye(
          K,
          23,
          E,
          (ae, z) => ae.code ? `${X()}-${ae.code}-${z}` : `${X()}-${z}`,
          (ae, z) => {
            var ee = _h(), J = i(ee);
            M(() => re(J, t(z).message)), o(ae, ee);
          }
        ), M(
          (ae, z) => {
            Ce(ce, "d", ae), re(te, `${z ?? ""}:`);
          },
          [
            () => k(E()[0]?.code),
            () => A(X())
          ]
        ), o(x, m);
      });
      var C = u(I, 2);
      {
        var _ = (x) => {
          var S = kh();
          S.__click = [wh, w, e], o(x, S);
        };
        b(C, (x) => {
          c() && x(_);
        });
      }
      M(() => {
        D(q, 1, Q(L), "svelte-12vbusp"), re(U, `Please correct the following ${a().length === 1 ? "error" : "errors"}:`);
      }), nt(1, q, () => gt, () => d() ? { duration: 300, direction: "down" } : void 0), o(j, q);
    };
    b(B, (j) => {
      t(N) && n() && j($);
    });
  }
  var y = u(B, 2);
  {
    var T = (j) => {
      var q = Ae(), O = ke(q);
      it(O, () => e.children, () => ({ errors: t(h), hasErrors: t(N) })), o(j, q);
    };
    b(y, (j) => {
      e.children && j(T);
    });
  }
  var F = u(y, 2);
  {
    var H = (j) => {
      var q = Ae(), O = ke(q);
      Ye(O, 17, () => Object.entries(t(h)), At, (I, G) => {
        var U = /* @__PURE__ */ Ee(() => Kr(t(G), 2));
        let R = () => t(U)[0], C = () => t(U)[1];
        var _ = Eh();
        Ye(_, 21, C, At, (x, S) => {
          var W = Sh(), X = i(W), E = i(X), m = u(X);
          M(
            (p) => {
              Ce(E, "d", p), re(m, ` ${t(S).message ?? ""}`);
            },
            [() => k(t(S).code)]
          ), nt(1, W, () => gt, () => d() ? { duration: 200, direction: "up", distance: 5 } : void 0), o(x, W);
        }), M(() => Ce(_, "id", `${R() ?? ""}-errors`)), o(I, _);
      }), o(j, q);
    };
    b(F, (j) => {
      t(N) && !n() && j(H);
    });
  }
  o(r, f), Ze();
}
ut(["click"]);
const Xn = async (r, e, a) => {
  try {
    await navigator.clipboard.writeText(e()), Y(a, !0), setTimeout(() => Y(a, !1), 2e3);
  } catch (n) {
    console.error("Failed to copy:", n);
  }
};
var Ah = /* @__PURE__ */ nr('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), zh = /* @__PURE__ */ nr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), Ih = /* @__PURE__ */ v('<button class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"><!></button>'), Ph = /* @__PURE__ */ v('<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg"><div class="text-sm font-medium text-white/80"> </div> <!></div>'), Lh = /* @__PURE__ */ nr('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Dh = /* @__PURE__ */ nr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), jh = /* @__PURE__ */ v('<button class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"><!></button>'), Rh = /* @__PURE__ */ v(`<div class="relative group"><!> <div><!> <pre class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed svelte-au3hj8"><code>
                
                <!>
            </code>
            </pre></div></div>`);
const Nh = {
  hash: "svelte-au3hj8",
  code: `pre.svelte-au3hj8 {margin:0;-moz-tab-size:2;-o-tab-size:2;tab-size:2;}code.svelte-au3hj8 {font-family:'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;}

	/* Line numbers (optional) */pre.line-numbers {counter-reset:line;}pre.line-numbers code {counter-increment:line;}pre.line-numbers code::before {content:counter(line);display:inline-block;width:3em;padding-right:1em;margin-right:1em;color:rgba(255, 255, 255, 0.3);border-right:1px solid rgba(255, 255, 255, 0.1);text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;}`
};
function Yp(r, e) {
  Ke(e, !0), Je(r, Nh);
  let a = s(e, "code", 3, ""), n = s(e, "language", 3, "svelte"), l = s(e, "showCopy", 3, !0), d = s(e, "title", 3, ""), c = /* @__PURE__ */ Se(!1), g = /* @__PURE__ */ Se(void 0);
  const w = (I, G) => {
    if (!I) return "";
    switch (G) {
      case "svelte":
      case "html":
        return h(I);
      case "css":
        return P(I);
      case "javascript":
      case "js":
        return L(I);
      case "typescript":
      case "ts":
        return A(I);
      case "bash":
      case "shell":
        return k(I);
      default:
        return N(I);
    }
  }, N = (I) => I.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), h = (I) => I.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>').replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>').replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=').replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>'), P = (I) => I.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:').replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;').replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), L = (I) => I.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-green-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>').replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>').replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), A = (I) => L(I).replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>'), k = (I) => I.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ').replace(/^>\s*/gm, '<span class="text-blue-400">></span> ').replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>').replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>'), f = /* @__PURE__ */ Ee(() => () => w(a(), n()));
  yt(() => {
    t(g) && a().split(`
`).length > 1 && (t(g).style.counterReset = "line");
  });
  var B = Rh(), $ = i(B);
  {
    var y = (I) => {
      var G = Ph(), U = i(G), R = i(U), C = u(U, 2);
      {
        var _ = (x) => {
          var S = Ih();
          S.__click = [Xn, a, c];
          var W = i(S);
          {
            var X = (m) => {
              var p = Ah();
              o(m, p);
            }, E = (m) => {
              var p = zh();
              o(m, p);
            };
            b(W, (m) => {
              t(c) ? m(X) : m(E, !1);
            });
          }
          M(() => Ce(S, "title", t(c) ? "Copied!" : "Copy code")), o(x, S);
        };
        b(C, (x) => {
          l() && x(_);
        });
      }
      M(() => re(R, d())), o(I, G);
    };
    b($, (I) => {
      d() && I(y);
    });
  }
  var T = u($, 2), F = i(T);
  {
    var H = (I) => {
      var G = jh();
      G.__click = [Xn, a, c];
      var U = i(G);
      {
        var R = (_) => {
          var x = Lh();
          o(_, x);
        }, C = (_) => {
          var x = Dh();
          o(_, x);
        };
        b(U, (_) => {
          t(c) ? _(R) : _(C, !1);
        });
      }
      M(() => Ce(G, "title", t(c) ? "Copied!" : "Copy code")), o(I, G);
    };
    b(F, (I) => {
      l() && !d() && I(H);
    });
  }
  var j = u(F, 2), q = i(j), O = u(i(q));
  na(O, () => oa(t(f))), at(j, (I) => Y(g, I), () => t(g)), M(() => {
    D(T, 1, `relative bg-black/30 ${d() ? "rounded-b-lg" : "rounded-lg"} border border-white/10 overflow-hidden`), D(q, 1, `language-${n() ?? ""}`, "svelte-au3hj8");
  }), o(r, B), Ze();
}
ut(["click"]);
function qh(r, e, a) {
  e(!e()), a("toggle", { collapsed: e() });
}
var Oh = (
  // Handle expansion of items with children
  // Set active item
  // Execute custom click handler
  // Close sidebar on mobile when item is selected
  (r, e) => (r.key === "Enter" || r.key === " ") && e()
), Bh = /* @__PURE__ */ v('<div role="button" aria-label="Close sidebar overlay" tabindex="0"></div>'), Fh = /* @__PURE__ */ v('<h2 class="text-lg font-semibold truncate">Menu</h2>'), Hh = /* @__PURE__ */ v("<button><!></button>"), Vh = /* @__PURE__ */ v('<div class="flex items-center justify-between p-4 border-b border-white/10"><!> <!></div>'), Gh = (r, e, a) => e(a()), Uh = /* @__PURE__ */ v('<div class="w-5 h-5 flex-shrink-0"><div class="w-full h-full bg-current opacity-70 rounded"></div></div>'), Yh = /* @__PURE__ */ v('<span class="inline-block w-4 h-4 rotate-90 border-r-2 border-b-2 border-current" style="transform: rotate(45deg);"></span>'), Wh = /* @__PURE__ */ v('<div class="w-5 h-5 flex-shrink-0"><!></div>'), Xh = /* @__PURE__ */ v("<span> </span>"), Kh = /* @__PURE__ */ v('<span class="flex-1 truncate"> </span> <!>', 1), Zh = /* @__PURE__ */ v("<li><button><!> <!></button></li>"), Qh = /* @__PURE__ */ v('<div class="p-4 border-t border-white/10"><!></div>'), Jh = /* @__PURE__ */ v('<!> <aside><!> <nav class="flex-1 overflow-y-auto p-2 svelte-tk90u0"><ul class="space-y-1"></ul></nav> <!></aside>', 1);
const $h = {
  hash: "svelte-tk90u0",
  code: `
	/* Custom scrollbar for navigation */nav.svelte-tk90u0 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}nav.svelte-tk90u0::-webkit-scrollbar {width:6px;}nav.svelte-tk90u0::-webkit-scrollbar-track {background:transparent;}nav.svelte-tk90u0::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}nav.svelte-tk90u0::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Smooth transitions */aside.svelte-tk90u0 {will-change:width, transform;}

	/* Focus styles */button.svelte-tk90u0:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}`
};
function Wp(r, e) {
  Ke(e, !0), Je(r, $h);
  let a = s(e, "items", 19, () => []), n = s(e, "width", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "left"), c = s(e, "collapsible", 3, !0), g = s(e, "collapsed", 15, !1), w = s(e, "overlay", 3, !1), N = s(e, "persistent", 3, !0), h = s(e, "showToggle", 3, !0), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "width",
    "variant",
    "position",
    "collapsible",
    "collapsed",
    "overlay",
    "persistent",
    "showToggle",
    "class",
    "children"
  ]);
  const A = zt();
  let k = /* @__PURE__ */ Se(null), f = /* @__PURE__ */ Se(lt(/* @__PURE__ */ new Set()));
  const B = {
    sm: g() ? "w-16" : "w-48",
    md: g() ? "w-16" : "w-64",
    lg: g() ? "w-16" : "w-72",
    xl: g() ? "w-16" : "w-80"
  }, y = {
    glass: {
      sidebar: "bg-black/20 border-white/10 backdrop-blur-xl text-white",
      item: "text-white/90 hover:bg-white/10 hover:text-white",
      itemActive: "bg-white/15 text-white border-l-2 border-blue-400",
      itemDisabled: "text-white/40 cursor-not-allowed",
      toggle: "bg-white/10 border-white/20 text-white hover:bg-white/15",
      badge: "bg-blue-500/30 text-white",
      overlay: "bg-black/50"
    },
    terminal: {
      sidebar: "bg-black/90 border-terminal-green/30 text-terminal-green",
      item: "text-terminal-green hover:bg-terminal-green/20",
      itemActive: "bg-terminal-green/30 text-terminal-green border-l-2 border-terminal-green",
      itemDisabled: "text-terminal-green/40 cursor-not-allowed",
      toggle: "bg-terminal-green/20 border-terminal-green/40 text-terminal-green hover:bg-terminal-green/30",
      badge: "bg-terminal-green/30 text-terminal-green",
      overlay: "bg-black/70"
    },
    liquid: {
      sidebar: "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10 backdrop-blur-xl text-white",
      item: "text-white hover:bg-white/10",
      itemActive: "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-l-2 border-blue-400",
      itemDisabled: "text-white/40 cursor-not-allowed",
      toggle: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30",
      badge: "bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white",
      overlay: "bg-black/50"
    }
  }[l()];
  function T(X) {
    X.disabled || (X.children?.length && (t(f).has(X.id) ? t(f).delete(X.id) : t(f).add(X.id), Y(f, new Set(t(f)), !0)), Y(k, X.id, !0), X.onclick && X.onclick(), A("select", { item: X }), w() && !N() && g(!0));
  }
  function F() {
    w() && !N() && (g(!0), A("close"));
  }
  function H(X, E = 0) {
    const m = t(f).has(X.id), p = t(k) === X.id || X.active, oe = X.children?.length;
    return {
      item: X,
      level: E,
      isExpanded: m,
      isActive: p,
      hasChildren: oe,
      paddingLeft: `${E * 1 + 1}rem`
    };
  }
  function j(X, E = 0) {
    const m = [];
    for (const p of X) {
      const oe = H(p, E);
      m.push(oe), oe.hasChildren && oe.isExpanded && !g() && m.push(...j(p.children, E + 1));
    }
    return m;
  }
  const q = /* @__PURE__ */ Ee(() => () => j(a()));
  var O = Jh(), I = ke(O);
  {
    var G = (X) => {
      var E = Bh();
      E.__click = F, E.__keydown = [Oh, F], M((m) => D(E, 1, m), [
        () => Q(V("fixed inset-0 z-40", y.overlay))
      ]), o(X, E);
    };
    b(I, (X) => {
      w() && !g() && X(G);
    });
  }
  var U = u(I, 2);
  Qe(
    U,
    (X) => ({ class: X, ...L }),
    [
      () => V("flex flex-col h-full border-r transition-all duration-300 ease-in-out", B[n()], y.sidebar, d() === "right" && "border-r-0 border-l", w() && "fixed top-0 z-50", w() && d() === "left" && "left-0", w() && d() === "right" && "right-0", w() && g() && "-translate-x-full", w() && d() === "right" && g() && "translate-x-full", P())
    ],
    void 0,
    "svelte-tk90u0"
  );
  var R = i(U);
  {
    var C = (X) => {
      var E = Vh(), m = i(E);
      {
        var p = (ve) => {
          var be = Ae(), te = ke(be);
          {
            var K = (z) => {
              var ee = Ae(), J = ke(ee);
              it(J, () => e.children.header), o(z, ee);
            }, ae = (z) => {
              var ee = Fh();
              o(z, ee);
            };
            b(te, (z) => {
              e.children?.header ? z(K) : z(ae, !1);
            });
          }
          o(ve, be);
        };
        b(m, (ve) => {
          g() || ve(p);
        });
      }
      var oe = u(m, 2);
      {
        var ce = (ve) => {
          var be = Hh();
          be.__click = [qh, g, A];
          var te = i(be);
          {
            var K = (z) => {
              var ee = Ae(), J = ke(ee);
              {
                var Z = (ne) => {
                  Nr(ne, { size: 16 });
                }, ie = (ne) => {
                  ua(ne, { size: 16 });
                };
                b(J, (ne) => {
                  d() === "left" ? ne(Z) : ne(ie, !1);
                });
              }
              o(z, ee);
            }, ae = (z) => {
              var ee = Ae(), J = ke(ee);
              {
                var Z = (ne) => {
                  ua(ne, { size: 16 });
                }, ie = (ne) => {
                  Nr(ne, { size: 16 });
                };
                b(
                  J,
                  (ne) => {
                    d() === "left" ? ne(Z) : ne(ie, !1);
                  },
                  !0
                );
              }
              o(z, ee);
            };
            b(te, (z) => {
              g() ? z(K) : z(ae, !1);
            });
          }
          M(
            (z) => {
              D(be, 1, z, "svelte-tk90u0"), Ce(be, "title", g() ? "Expand sidebar" : "Collapse sidebar");
            },
            [
              () => Q(V("p-2 rounded-lg border transition-colors", y.toggle, g() && "mx-auto"))
            ]
          ), o(ve, be);
        };
        b(oe, (ve) => {
          c() && ve(ce);
        });
      }
      o(X, E);
    };
    b(R, (X) => {
      h() && X(C);
    });
  }
  var _ = u(R, 2), x = i(_);
  Ye(x, 21, () => t(q), At, (X, E) => {
    let m = () => t(E).item, p = () => t(E).level, oe = () => t(E).isExpanded, ce = () => t(E).isActive, ve = () => t(E).hasChildren, be = () => t(E).paddingLeft;
    var te = Zh(), K = i(te);
    K.__click = [Gh, T, m];
    var ae = i(K);
    {
      var z = (ie) => {
        var ne = Uh();
        o(ie, ne);
      }, ee = (ie) => {
        var ne = Ae(), de = ke(ne);
        {
          var ge = (se) => {
            var ue = Wh(), le = i(ue);
            {
              var fe = (Te) => {
                var Ne = Yh();
                o(Te, Ne);
              }, pe = (Te) => {
                Nr(Te, { size: 16 });
              };
              b(le, (Te) => {
                oe() ? Te(fe) : Te(pe, !1);
              });
            }
            o(se, ue);
          };
          b(
            de,
            (se) => {
              ve() && se(ge);
            },
            !0
          );
        }
        o(ie, ne);
      };
      b(ae, (ie) => {
        m().icon ? ie(z) : ie(ee, !1);
      });
    }
    var J = u(ae, 2);
    {
      var Z = (ie) => {
        var ne = Kh(), de = ke(ne), ge = i(de), se = u(de, 2);
        {
          var ue = (le) => {
            var fe = Xh(), pe = i(fe);
            M(
              (Te) => {
                D(fe, 1, Te), re(pe, m().badge);
              },
              [
                () => Q(V("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", y.badge))
              ]
            ), o(le, fe);
          };
          b(se, (le) => {
            m().badge && le(ue);
          });
        }
        M(() => re(ge, m().label)), o(ie, ne);
      };
      b(J, (ie) => {
        g() || ie(Z);
      });
    }
    M(
      (ie) => {
        D(K, 1, ie, "svelte-tk90u0"), pt(K, !g() && p() > 0 ? `padding-left: ${be()}` : void 0), K.disabled = m().disabled, Ce(K, "title", g() ? m().label : void 0);
      },
      [
        () => Q(V("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150", y.item, ce() && y.itemActive, m().disabled && y.itemDisabled, g() && "justify-center px-2"))
      ]
    ), o(X, te);
  });
  var S = u(_, 2);
  {
    var W = (X) => {
      var E = Qh(), m = i(E);
      it(m, () => e.children.footer, () => ({ collapsed: g() })), o(X, E);
    };
    b(S, (X) => {
      e.children?.footer && X(W);
    });
  }
  qe(U, (X, E) => kt?.(X, E), () => ({ intensity: "medium" })), o(r, O), Ze();
}
ut(["click", "keydown"]);
function e1(r, e, a, n, l, d, c) {
  if (!e()) return;
  const g = r.touches[0];
  Y(a, g.clientX, !0), Y(n, g.clientY, !0), Y(l, !0), t(d) && c();
}
function t1(r, e, a) {
  !e() || !t(a) || r.preventDefault();
}
function r1(r, e, a, n, l, d, c, g, w) {
  if (!e() || !t(a)) return;
  const N = r.changedTouches[0], h = N.clientX - t(n), P = N.clientY - t(l);
  Math.abs(h) > Math.abs(P) && Math.abs(h) > 50 && (h > 0 ? d() : c()), Y(a, !1), t(g) && w();
}
var a1 = /* @__PURE__ */ v('<img class="w-full h-full object-cover svelte-wt9314" loading="lazy"/>'), n1 = /* @__PURE__ */ v('<h3 class="text-lg font-semibold text-white mb-1 svelte-wt9314"> </h3>'), o1 = /* @__PURE__ */ v('<p class="text-sm text-white/80 svelte-wt9314"> </p>'), i1 = /* @__PURE__ */ v('<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 svelte-wt9314"><!> <!></div>'), l1 = /* @__PURE__ */ v("<!> <!>", 1), s1 = /* @__PURE__ */ v('<div class="w-full h-full flex flex-col svelte-wt9314"><!></div>'), d1 = /* @__PURE__ */ v('<div class="flex-shrink-0 h-full relative svelte-wt9314"><!></div>'), c1 = /* @__PURE__ */ v("<div><div></div></div>"), v1 = /* @__PURE__ */ v("<button><!></button>"), u1 = /* @__PURE__ */ v('<button title="Previous slide" aria-label="Previous slide"><!></button> <button title="Next slide" aria-label="Next slide"><!></button> <!>', 1), f1 = /* @__PURE__ */ v("<button></button>"), b1 = /* @__PURE__ */ v('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 svelte-wt9314"></div>'), g1 = /* @__PURE__ */ v('<div><div class="relative w-full h-full overflow-hidden svelte-wt9314"><div></div></div> <!> <!> <!></div>');
const m1 = {
  hash: "svelte-wt9314",
  code: `
    /* Smooth drag feedback */.dragging.svelte-wt9314 {cursor:grabbing;-webkit-user-select:none;-moz-user-select:none;user-select:none;}

    /* Focus styles */button.svelte-wt9314:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

    /* Carousel focus styles */[role="region"].svelte-wt9314:focus {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

    /* Prevent text selection during touch */.touch-enabled.svelte-wt9314 {user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}

    /* Animation performance */
    @media (prefers-reduced-motion: reduce) {.svelte-wt9314 {transition:none !important;
            animation: none !important;}
    }`
};
function Xp(r, e) {
  Ke(e, !0), Je(r, m1);
  let a = s(e, "currentIndex", 15, 0), n = s(e, "autoPlay", 3, !1), l = s(e, "autoPlayInterval", 3, 5e3), d = s(e, "showControls", 3, !0), c = s(e, "showDots", 3, !0), g = s(e, "showProgress", 3, !1), w = s(e, "loop", 3, !0), N = s(e, "variant", 3, "glass"), h = s(e, "size", 3, "md"), P = s(e, "aspectRatio", 3, "16:9");
  s(e, "transition", 3, "slide");
  let L = s(e, "itemsPerView", 3, 1), A = s(e, "gap", 3, "md"), k = s(e, "touchEnabled", 3, !0), f = s(e, "class", 3, ""), B = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "items",
    "currentIndex",
    "autoPlay",
    "autoPlayInterval",
    "showControls",
    "showDots",
    "showProgress",
    "loop",
    "variant",
    "size",
    "aspectRatio",
    "transition",
    "itemsPerView",
    "gap",
    "touchEnabled",
    "class",
    "children"
  ]);
  const $ = zt();
  let y, T, F = /* @__PURE__ */ Se(lt(n())), H = null, j = /* @__PURE__ */ Se(0), q = /* @__PURE__ */ Se(0), O = /* @__PURE__ */ Se(!1);
  const I = {
    sm: {
      container: "text-sm",
      controls: "w-8 h-8 p-1",
      dots: "w-2 h-2",
      gap: { sm: "gap-1", md: "gap-2", lg: "gap-3" }
    },
    md: {
      container: "text-base",
      controls: "w-10 h-10 p-2",
      dots: "w-3 h-3",
      gap: { sm: "gap-2", md: "gap-4", lg: "gap-6" }
    },
    lg: {
      container: "text-lg",
      controls: "w-12 h-12 p-3",
      dots: "w-4 h-4",
      gap: { sm: "gap-3", md: "gap-6", lg: "gap-8" }
    }
  }, G = {
    glass: {
      container: "bg-black/10 border-white/10 backdrop-blur-md",
      controls: "bg-white/10 border-white/20 text-white hover:bg-white/20",
      dots: "bg-white/30 hover:bg-white/50",
      dotsActive: "bg-white",
      progress: "bg-white/20",
      progressFill: "bg-white"
    },
    terminal: {
      container: "bg-black/80 border-terminal-green/30",
      controls: "bg-terminal-green/20 border-terminal-green/40 text-terminal-green hover:bg-terminal-green/30",
      dots: "bg-terminal-green/40 hover:bg-terminal-green/60",
      dotsActive: "bg-terminal-green",
      progress: "bg-terminal-green/20",
      progressFill: "bg-terminal-green"
    },
    liquid: {
      container: "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-white/10 backdrop-blur-md",
      controls: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30",
      dots: "bg-white/30 hover:bg-white/50",
      dotsActive: "bg-gradient-to-r from-blue-400 to-purple-400",
      progress: "bg-white/20",
      progressFill: "bg-gradient-to-r from-blue-400 to-purple-400"
    }
  }, U = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]"
  }, R = I[h()], C = G[N()], _ = /* @__PURE__ */ Ee(() => () => e.items.length), x = /* @__PURE__ */ Ee(() => () => Math.max(0, t(_)() - L())), S = /* @__PURE__ */ Ee(() => () => w() || a() > 0), W = /* @__PURE__ */ Ee(() => () => w() || a() < t(x)()), X = /* @__PURE__ */ Ee(() => () => `-${a() * 100 / L()}%`), E = /* @__PURE__ */ Ee(() => () => t(_)() <= 1 ? 100 : (a() + 1) / t(_)() * 100), m = /* @__PURE__ */ Ee(() => () => t(_)() ? 100 / t(_)() : 0);
  function p(se) {
    se < 0 ? a(w() ? t(x)() : 0) : se > t(x)() ? a(w() ? 0 : t(x)()) : a(se), $("change", { index: a(), item: e.items[a()] });
  }
  function oe() {
    t(S)() && p(a() - 1);
  }
  function ce() {
    t(W)() && p(a() + 1);
  }
  function ve() {
    Y(F, !t(F)), t(F) ? be() : te(), $("autoplay", { isPlaying: t(F) });
  }
  function be() {
    !t(F) || t(_)() <= 1 || (te(), H = window.setInterval(
      () => {
        if (a() >= t(x)() && !w()) {
          te();
          return;
        }
        ce();
      },
      l()
    ));
  }
  function te() {
    H && (clearInterval(H), H = null);
  }
  function K(se) {
    switch (se.key) {
      case "ArrowLeft":
        se.preventDefault(), oe();
        break;
      case "ArrowRight":
        se.preventDefault(), ce();
        break;
      case " ":
        se.preventDefault(), ve();
        break;
      case "Home":
        se.preventDefault(), p(0);
        break;
      case "End":
        se.preventDefault(), p(t(x)());
        break;
    }
  }
  yt(() => (t(F) && be(), () => {
    te();
  })), xt(() => {
    t(F) ? be() : te();
  });
  var ae = g1();
  Qe(
    ae,
    (se) => ({
      class: se,
      onkeydown: K,
      role: "region",
      "aria-label": "Carousel",
      "aria-live": "polite",
      ...B
    }),
    [
      () => V("relative rounded-lg border overflow-hidden", U[P()], C.container, R.container, f())
    ],
    void 0,
    "svelte-wt9314"
  );
  var z = i(ae);
  z.__touchstart = [
    e1,
    k,
    j,
    q,
    O,
    F,
    te
  ], z.__touchmove = [t1, k, O], z.__touchend = [
    r1,
    k,
    O,
    j,
    q,
    oe,
    ce,
    F,
    be
  ];
  var ee = i(z);
  Ye(ee, 23, () => e.items, (se) => se.id, (se, ue, le) => {
    var fe = d1(), pe = i(fe);
    {
      var Te = (Ne) => {
        var He = s1(), Be = i(He);
        {
          var _e = (Ie) => {
            const Re = /* @__PURE__ */ Ee(() => e.children.item({ item: t(ue), index: t(le) }));
            var me = Ae(), we = ke(me);
            it(we, () => t(Re)), o(Ie, me);
          }, xe = (Ie) => {
            var Re = l1(), me = ke(Re);
            {
              var we = (ye) => {
                var he = a1();
                M(() => {
                  Ce(he, "src", t(ue).image), Ce(he, "alt", t(ue).title || `Slide ${t(le) + 1}`);
                }), o(ye, he);
              };
              b(me, (ye) => {
                t(ue).image && ye(we);
              });
            }
            var Me = u(me, 2);
            {
              var Le = (ye) => {
                var he = i1(), ze = i(he);
                {
                  var De = (Ue) => {
                    var tt = n1(), et = i(tt);
                    M(() => re(et, t(ue).title)), o(Ue, tt);
                  };
                  b(ze, (Ue) => {
                    t(ue).title && Ue(De);
                  });
                }
                var Oe = u(ze, 2);
                {
                  var Ge = (Ue) => {
                    var tt = o1(), et = i(tt);
                    M(() => re(et, t(ue).description)), o(Ue, tt);
                  };
                  b(Oe, (Ue) => {
                    t(ue).description && Ue(Ge);
                  });
                }
                o(ye, he);
              };
              b(Me, (ye) => {
                (t(ue).title || t(ue).description) && ye(Le);
              });
            }
            o(Ie, Re);
          };
          b(Be, (Ie) => {
            e.children?.item ? Ie(_e) : Ie(xe, !1);
          });
        }
        o(Ne, He);
      };
      b(pe, (Ne) => {
        Ne(Te, !1);
      });
    }
    M((Ne) => pt(fe, Ne), [() => `width: ${t(m)()}%`]), o(se, fe);
  }), at(z, (se) => T = se, () => T);
  var J = u(z, 2);
  {
    var Z = (se) => {
      var ue = c1(), le = i(ue);
      M(
        (fe, pe, Te) => {
          D(ue, 1, fe, "svelte-wt9314"), D(le, 1, pe, "svelte-wt9314"), pt(le, Te);
        },
        [
          () => Q(V("absolute bottom-0 left-0 right-0 h-1", C.progress)),
          () => Q(V("h-full transition-all duration-300", C.progressFill)),
          () => `width: ${t(E)()}%`
        ]
      ), o(se, ue);
    };
    b(J, (se) => {
      g() && se(Z);
    });
  }
  var ie = u(J, 2);
  {
    var ne = (se) => {
      var ue = u1(), le = ke(ue);
      le.__click = oe;
      var fe = i(le);
      ua(fe, { size: 16 });
      var pe = u(le, 2);
      pe.__click = ce;
      var Te = i(pe);
      Nr(Te, { size: 16 });
      var Ne = u(pe, 2);
      {
        var He = (Be) => {
          var _e = v1();
          _e.__click = ve;
          var xe = i(_e);
          {
            var Ie = (me) => {
              xi(me, { size: 16 });
            }, Re = (me) => {
              wi(me, { size: 16 });
            };
            b(xe, (me) => {
              t(F) ? me(Ie) : me(Re, !1);
            });
          }
          M(
            (me) => {
              D(_e, 1, me, "svelte-wt9314"), Ce(_e, "title", t(F) ? "Pause autoplay" : "Start autoplay"), Ce(_e, "aria-label", t(F) ? "Pause autoplay" : "Start autoplay");
            },
            [
              () => Q(V("absolute top-2 right-2 rounded-full border transition-all duration-200", R.controls, C.controls))
            ]
          ), o(Be, _e);
        };
        b(Ne, (Be) => {
          n() && Be(He);
        });
      }
      M(
        (Be, _e, xe, Ie) => {
          le.disabled = Be, D(le, 1, _e, "svelte-wt9314"), pe.disabled = xe, D(pe, 1, Ie, "svelte-wt9314");
        },
        [
          () => !t(S)(),
          () => Q(V("absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", R.controls, C.controls, !t(S)() && "opacity-50 cursor-not-allowed")),
          () => !t(W)(),
          () => Q(V("absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", R.controls, C.controls, !t(W)() && "opacity-50 cursor-not-allowed"))
        ]
      ), o(se, ue);
    };
    b(ie, (se) => {
      d() && t(_)() > 1 && se(ne);
    });
  }
  var de = u(ie, 2);
  {
    var ge = (se) => {
      var ue = b1();
      Ye(ue, 23, () => e.items, (le) => le.id, (le, fe, pe) => {
        var Te = f1();
        Te.__click = () => p(t(pe)), M(
          (Ne) => {
            D(Te, 1, Ne, "svelte-wt9314"), Ce(Te, "title", `Go to slide ${t(pe) + 1}`), Ce(Te, "aria-label", `Go to slide ${t(pe) + 1}`);
          },
          [
            () => Q(V("rounded-full transition-all duration-200", R.dots, t(pe) === a() ? C.dotsActive : C.dots))
          ]
        ), o(le, Te);
      }), o(se, ue);
    };
    b(de, (se) => {
      c() && t(_)() > 1 && se(ge);
    });
  }
  at(ae, (se) => y = se, () => y), qe(ae, (se, ue) => kt?.(se, ue), () => ({ intensity: "medium" })), M(
    (se, ue) => {
      D(ee, 1, se, "svelte-wt9314"), pt(ee, ue);
    },
    [
      () => Q(V("flex h-full transition-transform duration-300 ease-in-out", R.gap[A()])),
      () => `transform: translateX(${t(X)()}); width: ${t(_)() * 100 / L()}%`
    ]
  ), o(r, ae), Ze();
}
ut(["touchstart", "touchmove", "touchend", "click"]);
function h1(r, e, a) {
  e() && a();
}
var p1 = /* @__PURE__ */ v('<div role="presentation"></div>'), x1 = /* @__PURE__ */ v('<h2 id="drawer-title" class="text-lg font-semibold svelte-vtlnqj">Drawer</h2>'), w1 = /* @__PURE__ */ v('<button title="Close drawer" aria-label="Close drawer"><!></button>'), _1 = /* @__PURE__ */ v('<div class="p-4 border-t border-white/10 flex-shrink-0 svelte-vtlnqj"><!></div>'), y1 = /* @__PURE__ */ v('<!> <div><div class="flex flex-col h-full focus:outline-none svelte-vtlnqj" tabindex="-1"><div class="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 svelte-vtlnqj"><div class="flex-1 svelte-vtlnqj"><!></div> <!></div> <div class="flex-1 overflow-y-auto p-4 svelte-vtlnqj"><!></div> <!></div></div>', 1);
const k1 = {
  hash: "svelte-vtlnqj",
  code: `
    /* Custom scrollbar for content */.overflow-y-auto.svelte-vtlnqj {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-vtlnqj::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-vtlnqj::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-vtlnqj::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-vtlnqj::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

    /* Ensure drawer content is properly contained */[role="dialog"].svelte-vtlnqj {will-change:transform;}

    /* Focus styles */button.svelte-vtlnqj:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

    /* Animation performance */
    @media (prefers-reduced-motion: reduce) {.svelte-vtlnqj {transition:none !important;
            animation: none !important;}
    }`
};
function Kp(r, e) {
  Ke(e, !0), Je(r, k1);
  let a = s(e, "open", 15, !1), n = s(e, "position", 3, "right"), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "overlay", 3, !0), g = s(e, "closeOnOutsideClick", 3, !0), w = s(e, "closeOnEscape", 3, !0), N = s(e, "showCloseButton", 3, !0), h = s(e, "persistent", 3, !1), P = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "open",
    "position",
    "size",
    "variant",
    "overlay",
    "closeOnOutsideClick",
    "closeOnEscape",
    "showCloseButton",
    "persistent",
    "class",
    "children"
  ]);
  const A = zt();
  let k = /* @__PURE__ */ Se(null), f = /* @__PURE__ */ Se(null);
  const B = {
    sm: { left: "w-64", right: "w-64", top: "h-48", bottom: "h-48" },
    md: { left: "w-80", right: "w-80", top: "h-64", bottom: "h-64" },
    lg: { left: "w-96", right: "w-96", top: "h-80", bottom: "h-80" },
    xl: {
      left: "w-[32rem]",
      right: "w-[32rem]",
      top: "h-96",
      bottom: "h-96"
    },
    full: {
      left: "w-full",
      right: "w-full",
      top: "h-full",
      bottom: "h-full"
    }
  }, y = {
    glass: {
      drawer: "bg-black/20 border-white/10 backdrop-blur-xl text-white",
      overlay: "bg-black/50",
      closeButton: "bg-white/10 border-white/20 text-white hover:bg-white/15"
    },
    terminal: {
      drawer: "bg-black/90 border-terminal-green/30 text-terminal-green",
      overlay: "bg-black/70",
      closeButton: "bg-terminal-green/20 border-terminal-green/40 text-terminal-green hover:bg-terminal-green/30"
    },
    liquid: {
      drawer: "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10 backdrop-blur-xl text-white",
      overlay: "bg-black/50",
      closeButton: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30"
    }
  }[d()], T = B[l()][n()], F = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "top-0 left-0 w-full border-b",
    bottom: "bottom-0 left-0 w-full border-t"
  }, H = () => {
    const R = { duration: 300 };
    switch (n()) {
      case "left":
        return { ...R, x: -400 };
      case "right":
        return { ...R, x: 400 };
      case "top":
        return { ...R, y: -400 };
      case "bottom":
        return { ...R, y: 400 };
      default:
        return { ...R, x: 400 };
    }
  };
  function j() {
    h() || (a(!1), A("close"));
  }
  function q(R) {
    R.key === "Escape" && w() && a() && j();
  }
  function O(R) {
    g() && a() && t(f) && !t(f).contains(R.target) && j();
  }
  yt(() => (w() && document.addEventListener("keydown", q), g() && document.addEventListener("click", O), () => {
    document.removeEventListener("keydown", q), document.removeEventListener("click", O);
  })), xt(() => {
    if (a() && t(f)) {
      const R = t(f).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      R.length > 0 ? R[0].focus() : t(f).focus();
    }
  });
  var I = Ae(), G = ke(I);
  {
    var U = (R) => {
      var C = y1(), _ = ke(C);
      {
        var x = (J) => {
          var Z = p1();
          Z.__click = [h1, g, j], M((ie) => D(Z, 1, ie, "svelte-vtlnqj"), [
            () => Q(V("fixed inset-0 z-40", y.overlay))
          ]), nt(3, Z, () => oi, () => ({ duration: 200 })), o(J, Z);
        };
        b(_, (J) => {
          c() && J(x);
        });
      }
      var S = u(_, 2);
      Qe(
        S,
        (J) => ({
          class: J,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          ...L
        }),
        [
          () => V("fixed z-50 flex flex-col", F[n()], T, y.drawer, P())
        ],
        void 0,
        "svelte-vtlnqj"
      );
      var W = i(S), X = i(W), E = i(X), m = i(E);
      {
        var p = (J) => {
          const Z = /* @__PURE__ */ Ee(() => e.children.header());
          var ie = Ae(), ne = ke(ie);
          it(ne, () => t(Z)), o(J, ie);
        }, oe = (J) => {
          var Z = x1();
          o(J, Z);
        };
        b(m, (J) => {
          typeof e.children == "object" && e.children && "header" in e.children && e.children.header ? J(p) : J(oe, !1);
        });
      }
      var ce = u(E, 2);
      {
        var ve = (J) => {
          var Z = w1();
          Z.__click = j;
          var ie = i(Z);
          va(ie, { size: 16 }), M((ne) => D(Z, 1, ne, "svelte-vtlnqj"), [
            () => Q(V("p-2 rounded-lg border transition-colors ml-4", y.closeButton))
          ]), o(J, Z);
        };
        b(ce, (J) => {
          N() && !h() && J(ve);
        });
      }
      var be = u(X, 2), te = i(be);
      {
        var K = (J) => {
          const Z = /* @__PURE__ */ Ee(() => e.children({ open: a(), close: j }));
          var ie = Ae(), ne = ke(ie);
          it(ne, () => t(Z)), o(J, ie);
        }, ae = (J) => {
          var Z = Ae(), ie = ke(Z);
          {
            var ne = (de) => {
              const ge = /* @__PURE__ */ Ee(() => e.children.body({ open: a(), close: j }));
              var se = Ae(), ue = ke(se);
              it(ue, () => t(ge)), o(de, se);
            };
            b(
              ie,
              (de) => {
                typeof e.children == "object" && e.children && "body" in e.children && e.children.body && de(ne);
              },
              !0
            );
          }
          o(J, Z);
        };
        b(te, (J) => {
          typeof e.children == "function" ? J(K) : J(ae, !1);
        });
      }
      var z = u(be, 2);
      {
        var ee = (J) => {
          const Z = /* @__PURE__ */ Ee(() => e.children.footer({ open: a(), close: j }));
          var ie = _1(), ne = i(ie);
          it(ne, () => t(Z)), o(J, ie);
        };
        b(z, (J) => {
          typeof e.children == "object" && e.children && "footer" in e.children && e.children.footer && J(ee);
        });
      }
      at(W, (J) => Y(f, J), () => t(f)), at(S, (J) => Y(k, J), () => t(k)), qe(S, (J, Z) => kt?.(J, Z), () => ({ intensity: "medium" })), nt(3, S, () => ii, H), o(R, C);
    };
    b(G, (R) => {
      a() && R(U);
    });
  }
  o(r, I), Ze();
}
ut(["click"]);
var C1 = /* @__PURE__ */ v("<div></div>"), S1 = /* @__PURE__ */ v('<span class="text-white/80 text-xs font-mono svelte-11p3y6q"> </span>'), E1 = /* @__PURE__ */ v('<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-2"><span class="text-white text-xs font-medium mb-1 svelte-11p3y6q"> </span> <!></div>'), T1 = /* @__PURE__ */ v('<span class="font-mono text-sm text-white/60 svelte-11p3y6q"> </span>'), M1 = /* @__PURE__ */ v('<p class="text-sm text-white/60 mt-1"> </p>'), A1 = /* @__PURE__ */ v('<div class="flex-1"><div class="flex items-center justify-between"><span class="font-medium text-white svelte-11p3y6q"> </span> <!></div> <!></div>'), z1 = /* @__PURE__ */ v('<div class="absolute inset-0 bg-green-500/20 flex items-center justify-center"><span class="text-green-400 text-xs font-medium svelte-11p3y6q">Copied!</span></div>'), I1 = /* @__PURE__ */ v("<button><!> <!> <!></button>");
const P1 = {
  hash: "svelte-11p3y6q",
  code: `
    /* Ensure color swatches have proper contrast for accessibility */.group.svelte-11p3y6q:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

    /* Color transition animations */.group.svelte-11p3y6q {will-change:transform, box-shadow;}

    /* Responsive typography adjustments */
    @media (max-width: 640px) {.group.svelte-11p3y6q span:where(.svelte-11p3y6q) {font-size:0.75rem;}
    }`
};
function Kn(r, e) {
  Ke(e, !0), Je(r, P1);
  const a = s(e, "class", 3, ""), n = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "color",
    "layout",
    "interactive",
    "showHex",
    "animate",
    "copiedColor",
    "colorIndex",
    "isTerminal",
    "onColorClick",
    "class"
  ]), l = () => V(
    "group relative overflow-hidden transition-all duration-300",
    e.layout === "grid" ? "aspect-square rounded-lg" : "flex items-center gap-3 p-3 rounded-lg",
    e.interactive && "cursor-pointer hover:scale-105",
    e.isTerminal ? "border border-terminal-green/20" : "border border-bubble-tea-purple/20",
    a()
  ), d = () => e.layout === "grid" ? `background-color: ${e.color.hex}` : `background-color: ${e.color.hex}; width: 2rem; height: 2rem; border-radius: 0.375rem`, c = () => {
    e.onColorClick(e.color);
  }, g = ($) => {
    ($.key === "Enter" || $.key === " ") && ($.preventDefault(), e.onColorClick(e.color));
  }, w = e.animate ? {
    jellyHover: {
      enabled: e.interactive,
      duration: 200,
      scale: 1.05,
      borderRadius: "8px"
    },
    springPop: { duration: 150, delay: e.colorIndex * 20 }
  } : {};
  var N = I1();
  Qe(
    N,
    ($, y) => ({
      type: "button",
      class: $,
      style: y,
      onclick: c,
      onkeydown: g,
      "aria-label": `Copy ${e.color.name} color ${e.color.hex}`,
      ...n
    }),
    [
      l,
      () => e.layout === "grid" ? d() : ""
    ],
    void 0,
    "svelte-11p3y6q"
  );
  var h = i(N);
  {
    var P = ($) => {
      var y = C1();
      M((T) => pt(y, T), [d]), o($, y);
    };
    b(h, ($) => {
      e.layout === "list" && $(P);
    });
  }
  var L = u(h, 2);
  {
    var A = ($) => {
      var y = E1(), T = i(y), F = i(T), H = u(T, 2);
      {
        var j = (q) => {
          var O = S1(), I = i(O);
          M(() => re(I, e.color.hex)), o(q, O);
        };
        b(H, (q) => {
          e.showHex && q(j);
        });
      }
      M(() => re(F, e.color.name)), o($, y);
    }, k = ($) => {
      var y = A1(), T = i(y), F = i(T), H = i(F), j = u(F, 2);
      {
        var q = (G) => {
          var U = T1(), R = i(U);
          M(() => re(R, e.color.hex)), o(G, U);
        };
        b(j, (G) => {
          e.showHex && G(q);
        });
      }
      var O = u(T, 2);
      {
        var I = (G) => {
          var U = M1(), R = i(U);
          M(() => re(R, e.color.description)), o(G, U);
        };
        b(O, (G) => {
          e.color.description && G(I);
        });
      }
      M(() => re(H, e.color.name)), o($, y);
    };
    b(L, ($) => {
      e.layout === "grid" ? $(A) : $(k, !1);
    });
  }
  var f = u(L, 2);
  {
    var B = ($) => {
      var y = z1();
      o($, y);
    };
    b(f, ($) => {
      e.copiedColor === e.color.hex && $(B);
    });
  }
  qe(N, ($, y) => It?.($, y), () => e.animate ? w.jellyHover : void 0), nt(1, N, () => Wt, () => e.animate ? w.springPop : void 0), o(r, N), Ze();
}
var L1 = /* @__PURE__ */ v('<div class="mb-6"><!></div>'), D1 = /* @__PURE__ */ v('<div class="space-y-3"><h3 class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"> </h3> <div></div></div>'), j1 = /* @__PURE__ */ v("<div></div>"), R1 = /* @__PURE__ */ v("<div><!> <!></div>");
function Zp(r, e) {
  Ke(e, !0);
  const a = s(e, "theme", 3, "both"), n = s(e, "layout", 3, "grid"), l = s(e, "interactive", 3, !0), d = s(e, "showHex", 3, !0), c = s(e, "showCategories", 3, !0), g = s(e, "animate", 3, !0), w = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "theme",
    "layout",
    "interactive",
    "showHex",
    "showCategories",
    "animate",
    "onColorSelect",
    "class",
    "children"
  ]), h = [
    { name: "Terminal Green", hex: "#00ff41", category: "Primary" },
    { name: "Electric Cyan", hex: "#00ffff", category: "Primary" },
    { name: "Neon Blue", hex: "#0080ff", category: "Primary" },
    { name: "Deep Purple", hex: "#8a2be2", category: "Primary" },
    { name: "Matrix Green", hex: "#00ff88", category: "Accent" },
    { name: "Hot Pink", hex: "#ff1493", category: "Accent" },
    { name: "Retro Amber", hex: "#ffbf00", category: "Accent" },
    { name: "Lime Green", hex: "#32cd32", category: "Accent" },
    { name: "Electric Magenta", hex: "#ff00ff", category: "Accent" },
    { name: "Cyber Orange", hex: "#ff4500", category: "Accent" }
  ], P = [
    {
      name: "Soft Pink",
      hex: "#ff6b9d",
      category: "Primary",
      description: "Primary brand color"
    },
    {
      name: "Vibrant Purple",
      hex: "#c44af2",
      category: "Primary",
      description: "Secondary brand color"
    },
    {
      name: "Bright Blue",
      hex: "#4fa8ff",
      category: "Primary",
      description: "Accent color"
    },
    {
      name: "Modern Cyan",
      hex: "#4dd8da",
      category: "Primary",
      description: "Info color"
    },
    {
      name: "Fresh Green",
      hex: "#6bcf7f",
      category: "Status",
      description: "Success state"
    },
    {
      name: "Warm Yellow",
      hex: "#ffd23a",
      category: "Status",
      description: "Warning state"
    },
    {
      name: "Coral Orange",
      hex: "#ff8c42",
      category: "Status",
      description: "Caution state"
    },
    {
      name: "Soft Red",
      hex: "#ff6b6b",
      category: "Status",
      description: "Error state"
    },
    {
      name: "Background Dark",
      hex: "#1a1a2e",
      category: "Background"
    },
    { name: "Surface", hex: "#16213e", category: "Background" },
    { name: "Panel", hex: "#0f1419", category: "Background" },
    // Glow variants
    {
      name: "Glow Pink",
      hex: "#ff85b3",
      category: "Glow Effects",
      description: "Enhanced pink for glow effects"
    },
    {
      name: "Glow Purple",
      hex: "#d666ff",
      category: "Glow Effects",
      description: "Enhanced purple for glow effects"
    },
    {
      name: "Glow Blue",
      hex: "#66c3ff",
      category: "Glow Effects",
      description: "Enhanced blue for glow effects"
    },
    {
      name: "Glow Cyan",
      hex: "#66e6ea",
      category: "Glow Effects",
      description: "Enhanced cyan for glow effects"
    },
    {
      name: "Glow Green",
      hex: "#85d99b",
      category: "Glow Effects",
      description: "Enhanced green for glow effects"
    },
    {
      name: "Glow Orange",
      hex: "#ffad66",
      category: "Glow Effects",
      description: "Enhanced orange for glow effects"
    }
  ], A = (() => {
    switch (a()) {
      case "terminal":
        return h;
      case "bubbleTea":
        return P;
      case "both":
      default:
        return [...h, ...P];
    }
  })(), k = [...new Set(A.map((I) => I.category))];
  let f = /* @__PURE__ */ Se(null);
  const B = async (I) => {
    if (l())
      try {
        await navigator.clipboard.writeText(I), Y(f, I, !0), setTimeout(
          () => {
            Y(f, null);
          },
          2e3
        );
      } catch (G) {
        console.error("Failed to copy color to clipboard:", G);
      }
  }, $ = (I) => {
    B(I.hex), e.onColorSelect?.(I);
  }, y = () => n() === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "flex flex-col gap-2";
  var T = R1();
  Qe(T, () => ({
    class: (
      // Cleanup: removed former __markUsed scaffold and no-op $effect (unnecessary analyzer suppression)
      `space-y-6 ${w()}`
    ),
    ...N
  }));
  var F = i(T);
  {
    var H = (I) => {
      var G = L1(), U = i(G);
      it(U, () => e.children), o(I, G);
    };
    b(F, (I) => {
      e.children && I(H);
    });
  }
  var j = u(F, 2);
  {
    var q = (I) => {
      var G = Ae(), U = ke(G);
      Ye(U, 16, () => k, (R) => R, (R, C) => {
        var _ = D1(), x = i(_), S = i(x), W = u(x, 2);
        Ye(W, 21, () => A.filter((X) => X.category === C), (X) => X.hex, (X, E) => {
          {
            let m = /* @__PURE__ */ Ee(() => A.indexOf(t(E))), p = /* @__PURE__ */ Ee(() => h.includes(t(E)));
            Kn(X, {
              get color() {
                return t(E);
              },
              get layout() {
                return n();
              },
              get interactive() {
                return l();
              },
              get showHex() {
                return d();
              },
              get animate() {
                return g();
              },
              get copiedColor() {
                return t(f);
              },
              get colorIndex() {
                return t(m);
              },
              get isTerminal() {
                return t(p);
              },
              onColorClick: $
            });
          }
        }), M(
          (X) => {
            re(S, C), D(W, 1, X);
          },
          [() => Q(y())]
        ), o(R, _);
      }), o(I, G);
    }, O = (I) => {
      var G = j1();
      Ye(G, 21, () => A, (U) => U.hex, (U, R) => {
        {
          let C = /* @__PURE__ */ Ee(() => A.indexOf(t(R))), _ = /* @__PURE__ */ Ee(() => h.includes(t(R)));
          Kn(U, {
            get color() {
              return t(R);
            },
            get layout() {
              return n();
            },
            get interactive() {
              return l();
            },
            get showHex() {
              return d();
            },
            get animate() {
              return g();
            },
            get copiedColor() {
              return t(f);
            },
            get colorIndex() {
              return t(C);
            },
            get isTerminal() {
              return t(_);
            },
            onColorClick: $
          });
        }
      }), M((U) => D(G, 1, U), [() => Q(y())]), o(I, G);
    };
    b(j, (I) => {
      c() ? I(q) : I(O, !1);
    });
  }
  o(r, T), Ze();
}
var N1 = /* @__PURE__ */ v("<span><!></span>");
const q1 = {
  hash: "svelte-1s7z1ns",
  code: `
	/* Terminal Theme Glow Effects using CSS text-shadow */.glow-terminal-matrix {text-shadow:0 0 5px rgba(0, 255, 65, 0.8),
			0 0 10px rgba(0, 255, 65, 0.6),
			0 0 15px rgba(0, 255, 65, 0.4);}.glow-terminal-matrix-intense {text-shadow:0 0 5px rgba(0, 255, 65, 1),
			0 0 10px rgba(0, 255, 65, 0.8),
			0 0 20px rgba(0, 255, 65, 0.6),
			0 0 30px rgba(0, 255, 65, 0.4),
			0 0 40px rgba(0, 255, 65, 0.2);}.glow-terminal-cyan {text-shadow:0 0 5px rgba(0, 255, 255, 0.8),
			0 0 10px rgba(0, 255, 255, 0.6),
			0 0 15px rgba(0, 255, 255, 0.4);}.glow-terminal-cyan-intense {text-shadow:0 0 5px rgba(0, 255, 255, 1),
			0 0 10px rgba(0, 255, 255, 0.8),
			0 0 20px rgba(0, 255, 255, 0.6),
			0 0 30px rgba(0, 255, 255, 0.4),
			0 0 40px rgba(0, 255, 255, 0.2);}

	/* Bubble Tea Theme Glow Effects using CSS text-shadow */.glow-bubble-tea-pink {text-shadow:0 0 5px rgba(255, 133, 179, 0.8),
			0 0 10px rgba(255, 133, 179, 0.6),
			0 0 15px rgba(255, 133, 179, 0.4);}.glow-bubble-tea-pink-intense {text-shadow:0 0 5px rgba(255, 133, 179, 1),
			0 0 10px rgba(255, 133, 179, 0.8),
			0 0 20px rgba(255, 133, 179, 0.6),
			0 0 30px rgba(255, 133, 179, 0.4),
			0 0 40px rgba(255, 133, 179, 0.2);}.glow-bubble-tea-purple {text-shadow:0 0 5px rgba(214, 102, 255, 0.8),
			0 0 10px rgba(214, 102, 255, 0.6),
			0 0 15px rgba(214, 102, 255, 0.4);}.glow-bubble-tea-purple-intense {text-shadow:0 0 5px rgba(214, 102, 255, 1),
			0 0 10px rgba(214, 102, 255, 0.8),
			0 0 20px rgba(214, 102, 255, 0.6),
			0 0 30px rgba(214, 102, 255, 0.4),
			0 0 40px rgba(214, 102, 255, 0.2);}.glow-bubble-tea-blue {text-shadow:0 0 5px rgba(102, 195, 255, 0.8),
			0 0 10px rgba(102, 195, 255, 0.6),
			0 0 15px rgba(102, 195, 255, 0.4);}.glow-bubble-tea-blue-intense {text-shadow:0 0 5px rgba(102, 195, 255, 1),
			0 0 10px rgba(102, 195, 255, 0.8),
			0 0 20px rgba(102, 195, 255, 0.6),
			0 0 30px rgba(102, 195, 255, 0.4),
			0 0 40px rgba(102, 195, 255, 0.2);}.glow-bubble-tea-cyan {text-shadow:0 0 5px rgba(102, 230, 234, 0.8),
			0 0 10px rgba(102, 230, 234, 0.6),
			0 0 15px rgba(102, 230, 234, 0.4);}.glow-bubble-tea-cyan-intense {text-shadow:0 0 5px rgba(102, 230, 234, 1),
			0 0 10px rgba(102, 230, 234, 0.8),
			0 0 20px rgba(102, 230, 234, 0.6),
			0 0 30px rgba(102, 230, 234, 0.4),
			0 0 40px rgba(102, 230, 234, 0.2);}.glow-bubble-tea-green {text-shadow:0 0 5px rgba(133, 217, 155, 0.8),
			0 0 10px rgba(133, 217, 155, 0.6),
			0 0 15px rgba(133, 217, 155, 0.4);}.glow-bubble-tea-green-intense {text-shadow:0 0 5px rgba(133, 217, 155, 1),
			0 0 10px rgba(133, 217, 155, 0.8),
			0 0 20px rgba(133, 217, 155, 0.6),
			0 0 30px rgba(133, 217, 155, 0.4),
			0 0 40px rgba(133, 217, 155, 0.2);}.glow-bubble-tea-yellow {text-shadow:0 0 5px rgba(255, 229, 102, 0.8),
			0 0 10px rgba(255, 229, 102, 0.6),
			0 0 15px rgba(255, 229, 102, 0.4);}.glow-bubble-tea-yellow-intense {text-shadow:0 0 5px rgba(255, 229, 102, 1),
			0 0 10px rgba(255, 229, 102, 0.8),
			0 0 20px rgba(255, 229, 102, 0.6),
			0 0 30px rgba(255, 229, 102, 0.4),
			0 0 40px rgba(255, 229, 102, 0.2);}.glow-bubble-tea-orange {text-shadow:0 0 5px rgba(255, 173, 102, 0.8),
			0 0 10px rgba(255, 173, 102, 0.6),
			0 0 15px rgba(255, 173, 102, 0.4);}.glow-bubble-tea-orange-intense {text-shadow:0 0 5px rgba(255, 173, 102, 1),
			0 0 10px rgba(255, 173, 102, 0.8),
			0 0 20px rgba(255, 173, 102, 0.6),
			0 0 30px rgba(255, 173, 102, 0.4),
			0 0 40px rgba(255, 173, 102, 0.2);}.glow-bubble-tea-red {text-shadow:0 0 5px rgba(255, 133, 133, 0.8),
			0 0 10px rgba(255, 133, 133, 0.6),
			0 0 15px rgba(255, 133, 133, 0.4);}.glow-bubble-tea-red-intense {text-shadow:0 0 5px rgba(255, 133, 133, 1),
			0 0 10px rgba(255, 133, 133, 0.8),
			0 0 20px rgba(255, 133, 133, 0.6),
			0 0 30px rgba(255, 133, 133, 0.4),
			0 0 40px rgba(255, 133, 133, 0.2);}

	/* Hover effects */span.svelte-1s7z1ns:hover {filter:brightness(1.1);transform:scale(1.02);}

	/* Pulse animation for special effects */span.svelte-1s7z1ns.animate-pulse {
		animation: svelte-1s7z1ns-glow-pulse 2s ease-in-out infinite;}

	@keyframes svelte-1s7z1ns-glow-pulse {
		0%,
		100% {
			opacity: 1;
			filter: brightness(1);
		}
		50% {
			opacity: 0.8;
			filter: brightness(1.4);
		}
	}

	/* Smooth transitions for animations */span.svelte-1s7z1ns {transition:transform 0.2s ease-out,
			filter 0.2s ease-out;}`
};
function Qp(r, e) {
  Ke(e, !0), Je(r, q1);
  const a = s(e, "variant", 3, "bubbleTea"), n = s(e, "color", 3, "pink"), l = s(e, "intensity", 3, "normal"), d = s(e, "animate", 3, !0), c = s(e, "pulse", 3, !1), g = s(e, "class", 3, ""), w = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "color",
    "intensity",
    "animate",
    "pulse",
    "class",
    "children",
    "text"
  ]), h = V((() => {
    const f = "font-mono transition-all duration-300";
    if (a() === "terminal")
      switch (n()) {
        case "matrix":
          return V(f, "text-terminal-green", l() === "intense" ? "glow-terminal-matrix-intense" : "glow-terminal-matrix");
        case "cyan":
          return V(f, "text-terminal-cyan", l() === "intense" ? "glow-terminal-cyan-intense" : "glow-terminal-cyan");
        default:
          return V(f, "text-terminal-green", "glow-terminal-matrix");
      }
    const B = {
      pink: l() === "intense" ? "text-bubble-tea-glow-pink glow-bubble-tea-pink-intense" : "text-bubble-tea-glow-pink glow-bubble-tea-pink",
      purple: l() === "intense" ? "text-bubble-tea-glow-purple glow-bubble-tea-purple-intense" : "text-bubble-tea-glow-purple glow-bubble-tea-purple",
      blue: l() === "intense" ? "text-bubble-tea-glow-blue glow-bubble-tea-blue-intense" : "text-bubble-tea-glow-blue glow-bubble-tea-blue",
      cyan: l() === "intense" ? "text-bubble-tea-glow-cyan glow-bubble-tea-cyan-intense" : "text-bubble-tea-glow-cyan glow-bubble-tea-cyan",
      green: l() === "intense" ? "text-bubble-tea-glow-green glow-bubble-tea-green-intense" : "text-bubble-tea-glow-green glow-bubble-tea-green",
      yellow: l() === "intense" ? "text-bubble-tea-glow-yellow glow-bubble-tea-yellow-intense" : "text-bubble-tea-glow-yellow glow-bubble-tea-yellow",
      orange: l() === "intense" ? "text-bubble-tea-glow-orange glow-bubble-tea-orange-intense" : "text-bubble-tea-glow-orange glow-bubble-tea-orange",
      red: l() === "intense" ? "text-bubble-tea-glow-red glow-bubble-tea-red-intense" : "text-bubble-tea-glow-red glow-bubble-tea-red"
    };
    return n() === "matrix" ? V(f, B.pink) : V(f, B[n()]);
  })(), d() && "hover:scale-105", c() && "animate-pulse", g());
  var P = N1();
  Qe(P, () => ({ class: h, ...w }), void 0, void 0, "svelte-1s7z1ns");
  var L = i(P);
  {
    var A = (f) => {
      var B = Ae(), $ = ke(B);
      it($, () => e.children), o(f, B);
    }, k = (f) => {
      var B = Ae(), $ = ke(B);
      {
        var y = (T) => {
          var F = St();
          M(() => re(F, e.text)), o(T, F);
        };
        b(
          $,
          (T) => {
            e.text && T(y);
          },
          !0
        );
      }
      o(f, B);
    };
    b(L, (f) => {
      e.children ? f(A) : f(k, !1);
    });
  }
  o(r, P), Ze();
}
var O1 = /* @__PURE__ */ v("<span>•</span> <span> </span>", 1), B1 = /* @__PURE__ */ v('<div class="flex items-center gap-1 svelte-chof7v"><span> </span> <span> </span></div>'), F1 = /* @__PURE__ */ v("<div></div>"), H1 = /* @__PURE__ */ v("<div><!></div>"), V1 = /* @__PURE__ */ v('<div><div class="flex items-center gap-4 svelte-chof7v"><div class="flex items-center gap-2 svelte-chof7v"><span> </span> <!></div> <!></div> <div class="flex items-center gap-4 svelte-chof7v"><div class="hidden md:flex items-center gap-2 svelte-chof7v"><span> </span> <span>•</span> <span> </span></div> <div class="md:hidden svelte-chof7v"><span> </span></div> <!></div></div>');
const G1 = {
  hash: "svelte-chof7v",
  code: `
	/* Component-scoped bubble tea animation */.status-bar-bubble-tea {
		animation: svelte-chof7v-bubble-tea-pulse 3s ease-in-out infinite;}

	@keyframes svelte-chof7v-bubble-tea-pulse {
		0%,
		100% {
			filter: brightness(1) saturate(1);
		}
		50% {
			filter: brightness(1.05) saturate(1.1);
		}
	}

	/* CSS custom property for layout coordination */:root {--status-bar-height: 2.5rem; /* Default fallback */}`
};
function Jp(r, e) {
  Ke(e, !0), Je(r, G1);
  const a = s(e, "status", 3, "Ready"), n = s(e, "encoding", 3, "UTF-8"), l = s(e, "position", 3, "1:1"), d = s(e, "lineNumber", 3, 1), c = s(e, "columnNumber", 3, 1), g = s(e, "fileType", 3, "TypeScript"), w = s(e, "variant", 3, "bubbleTea"), N = s(e, "size", 3, "md"), h = s(e, "indicators", 19, () => []), P = s(e, "class", 3, ""), L = s(e, "autoLayout", 3, !0), A = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "status",
    "encoding",
    "position",
    "lineNumber",
    "columnNumber",
    "fileType",
    "variant",
    "size",
    "indicators",
    "class",
    "children",
    "autoLayout"
  ]);
  let k;
  yt(() => {
    if (L() && k) {
      const te = () => {
        const ae = k.offsetHeight;
        document.documentElement.style.setProperty("--status-bar-height", `${ae}px`);
      };
      te();
      const K = new ResizeObserver(te);
      return K.observe(k), () => {
        K.disconnect(), document.documentElement.style.removeProperty("--status-bar-height");
      };
    }
  });
  const f = {
    terminal: {
      background: "bg-terminal-bg border-terminal-green/30",
      text: "text-terminal-green",
      accent: "text-terminal-cyan",
      separator: "border-terminal-green/20"
    },
    bubbleTea: {
      background: "bg-gradient-to-r from-bubble-tea-pink/10 to-bubble-tea-purple/10 border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow",
      text: "text-bubble-tea-glow-purple font-mono",
      accent: "text-bubble-tea-glow-pink font-mono",
      separator: "border-bubble-tea-purple/20"
    },
    glass: {
      background: "glass-subtle border-white/20",
      text: "text-white/90",
      accent: "text-white/70",
      separator: "border-white/10"
    }
  }, B = { sm: "px-3 py-1 text-xs", md: "px-4 py-2 text-sm" }, $ = (te) => {
    switch (te) {
      case "error":
        return w() === "bubbleTea" ? "text-bubble-tea-red" : "text-red-400";
      case "warning":
        return w() === "bubbleTea" ? "text-bubble-tea-yellow" : "text-yellow-400";
      case "success":
        return w() === "bubbleTea" ? "text-bubble-tea-green" : "text-green-400";
      default:
        return f[w()].text;
    }
  }, y = f[w()], T = V("fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm", w() === "bubbleTea" ? "rounded-t-bubble-tea" : "rounded-t-lg", w() === "bubbleTea" ? "status-bar-bubble-tea" : "", y.background, B[N()]), F = V(T, P());
  var H = V1();
  Qe(
    H,
    () => ({
      class: F,
      role: "status",
      "aria-live": "polite",
      ...A
    }),
    void 0,
    void 0,
    "svelte-chof7v"
  );
  var j = i(H), q = i(j), O = i(q), I = i(O), G = u(O, 2);
  {
    var U = (te) => {
      var K = O1(), ae = ke(K), z = u(ae, 2), ee = i(z);
      M(
        (J, Z) => {
          D(ae, 1, J, "svelte-chof7v"), D(z, 1, Z, "svelte-chof7v"), re(ee, g());
        },
        [
          () => Q(V("text-xs", y.accent)),
          () => Q(V("text-xs", y.accent))
        ]
      ), o(te, K);
    };
    b(G, (te) => {
      g() && te(U);
    });
  }
  var R = u(q, 2);
  {
    var C = (te) => {
      var K = F1();
      Ye(K, 21, h, At, (ae, z) => {
        var ee = B1(), J = i(ee), Z = i(J), ie = u(J, 2), ne = i(ie);
        M(
          (de, ge) => {
            D(J, 1, de, "svelte-chof7v"), re(Z, `${t(z).label ?? ""}:`), D(ie, 1, ge, "svelte-chof7v"), re(ne, t(z).value);
          },
          [
            () => Q(V("text-xs font-medium", $(t(z).type))),
            () => Q(V("text-xs", y.text))
          ]
        ), o(ae, ee);
      }), M((ae) => D(K, 1, ae, "svelte-chof7v"), [
        () => Q(V("hidden sm:flex items-center gap-3 border-l pl-4", y.separator))
      ]), o(te, K);
    };
    b(R, (te) => {
      h().length > 0 && te(C);
    });
  }
  var _ = u(j, 2), x = i(_), S = i(x), W = i(S), X = u(S, 2), E = u(X, 2), m = i(E), p = u(x, 2), oe = i(p), ce = i(oe), ve = u(p, 2);
  {
    var be = (te) => {
      var K = H1(), ae = i(K);
      it(ae, () => e.children), M((z) => D(K, 1, z, "svelte-chof7v"), [() => Q(V("border-l pl-4", y.separator))]), o(te, K);
    };
    b(ve, (te) => {
      e.children && te(be);
    });
  }
  at(H, (te) => k = te, () => k), M(
    (te, K, ae, z, ee) => {
      D(O, 1, te, "svelte-chof7v"), re(I, a()), D(S, 1, K, "svelte-chof7v"), re(W, `Line ${d() ?? ""}, Col ${c() ?? ""}`), D(X, 1, ae, "svelte-chof7v"), D(E, 1, z, "svelte-chof7v"), re(m, n()), D(oe, 1, ee, "svelte-chof7v"), re(ce, l());
    },
    [
      () => Q(V("font-medium", y.text)),
      () => Q(V("text-xs", y.accent)),
      () => Q(V("text-xs", y.accent)),
      () => Q(V("text-xs", y.accent)),
      () => Q(V("text-xs", y.accent))
    ]
  ), o(r, H), Ze();
}
export {
  Lp as AICommandSuggestions,
  Q1 as Accordion,
  Pp as AdvancedTerminal,
  J1 as Alert,
  Vp as AsyncErrorBoundary,
  $1 as Badge,
  qp as BootSequence,
  Sp as Breadcrumb,
  tr as Button,
  tp as Card,
  Xp as Carousel,
  rp as Checkbox,
  Yp as CodeHighlight,
  Zp as ColorPalette,
  Dp as CommandBlock,
  Mp as DataGrid,
  Ap as DataTable,
  wp as DatePicker,
  Kp as Drawer,
  ap as Dropdown,
  Gp as ErrorBoundary,
  _p as FileUpload,
  Up as FormErrorBoundary,
  Qp as GlowText,
  Ed as Input,
  jp as LazyTerminalWindow,
  Rp as LiquidTerminal,
  zp as List,
  Op as MatrixRain,
  Ep as Menu,
  np as MetricsCard,
  op as Modal,
  ip as MultiSelect,
  Tp as Navbar,
  lp as Pagination,
  sp as Progress,
  dp as Radio,
  Bp as RetroFuturisticText,
  Fp as RetroText,
  cp as Select,
  vp as SelectAdvanced,
  Wp as Sidebar,
  up as Skeleton,
  fp as Slider,
  Jp as StatusBar,
  bp as Switch,
  Ip as Table,
  gp as Tabs,
  Np as TerminalOrbit,
  Hp as TerminalStartup,
  pm as TerminalWindow,
  mp as Textarea,
  hp as ThemeSelector,
  pp as Toast,
  xp as Tooltip,
  Ns as animations,
  Ra as borderRadius,
  Pe as brandColors,
  Rt as breathing,
  Fs as bubbleTeaTheme,
  V as cn,
  Cp as commonSchemas,
  qs as componentSizes,
  yp as createValidationStore,
  kp as debounceValidation,
  Lu as getFormErrors,
  js as glassEffects,
  gt as glassFade,
  Pu as isFormValid,
  It as jellyHover,
  kt as liquidBlur,
  ya as liquidResponsive,
  bt as magneticHover,
  Rs as shadows,
  Ds as spacing,
  Wt as springPop,
  Bs as terminalTheme,
  ep as tokens,
  Ls as typography,
  ni as validateField,
  Iu as validateForm,
  Ft as validationRules,
  Os as zIndex
};
