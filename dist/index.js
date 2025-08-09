import { AlertCircle as xn, Info as di, XCircle as ci, CheckCircle2 as vi, X as da, Minus as Xn, Check as Ya, ChevronDown as Kr, TrendingDown as ui, TrendingUp as fi, Activity as wn, ChevronLeft as ca, ChevronRight as Or, ChevronsLeft as bi, ChevronsRight as gi, Search as Kn, Filter as mi, ChevronUp as _n, Pause as hi, Play as pi } from "lucide-svelte";
import { onMount as kt, createEventDispatcher as zt } from "svelte";
import { T as Lt } from "@threlte/core";
import { OrbitControls as xi, HTML as wi } from "@threlte/extras";
const _i = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(_i);
const _a = 1, ya = 2, Zn = 4, yi = 8, ki = 16, Ci = 1, Si = 4, Ei = 8, Ti = 16, Mi = 1, Ai = 2, zi = 4, Ii = 1, Pi = 2, Mt = Symbol(), Li = Symbol("filename"), ji = "http://www.w3.org/1999/xhtml", Di = "http://www.w3.org/2000/svg", Ri = "@attach", Qn = typeof window < "u", yn = globalThis.process?.env?.NODE_ENV, We = yn && !yn.toLowerCase().startsWith("prod");
var ka = Array.isArray, Ni = Array.prototype.indexOf, Jn = Array.from, pr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, $n = Object.getOwnPropertyDescriptors, Oi = Object.prototype, qi = Array.prototype, en = Object.getPrototypeOf;
function Bi(r) {
  return typeof r == "function";
}
const qt = () => {
};
function Fi(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function Hi() {
  var r, e, a = new Promise((n, l) => {
    r = n, e = l;
  });
  return { promise: a, resolve: r, reject: e };
}
function Zr(r, e) {
  if (Array.isArray(r))
    return r;
  if (!(Symbol.iterator in r))
    return Array.from(r);
  const a = [];
  for (const n of r)
    if (a.push(n), a.length === e) break;
  return a;
}
const Ft = 2, tn = 4, rn = 8, Vr = 16, fr = 32, Gr = 64, eo = 128, Ut = 256, va = 512, Pt = 1024, Wt = 2048, br = 4096, Jt = 8192, zr = 16384, Ca = 32768, Ir = 65536, ua = 1 << 17, Vi = 1 << 18, an = 1 << 19, to = 1 << 20, fa = 1 << 21, Sa = 1 << 22, Cr = 1 << 23, sr = Symbol("$state"), Gi = Symbol("legacy props"), Ui = Symbol(""), ro = Symbol("proxy path"), nn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Yi() {
  if (We) {
    const r = new Error("await_outside_boundary\nCannot await outside a `<svelte:boundary>` with a `pending` snippet\nhttps://svelte.dev/e/await_outside_boundary");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Wi() {
  if (We) {
    const r = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function kn() {
  if (We) {
    const r = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Xi() {
  if (We) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Ki(r) {
  if (We) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Zi() {
  if (We) {
    const r = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qi(r) {
  if (We) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ji() {
  if (We) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $i() {
  if (We) {
    const r = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
function el(r) {
  if (We) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tl(r) {
  if (We) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function rl(r) {
  if (We) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function al() {
  if (We) {
    const r = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nl() {
  if (We) {
    const r = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ol() {
  if (We) {
    const r = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var ao = "font-weight: bold", no = "font-weight: normal";
function il(r) {
  We ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${r}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, ao, no) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function ll() {
  We ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", ao, no) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let sl = !1;
function oo(r) {
  return r === this.v;
}
function on(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function io(r) {
  return !on(r, this.v);
}
let dl = !1;
function lo(r) {
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
  return r.label = e, so(r.v, e), r;
}
function so(r, e) {
  return r?.[ro]?.(e), r;
}
let Yt = null;
function ba(r) {
  Yt = r;
}
let ga = null;
function Cn(r) {
  ga = r;
}
let ra = null;
function Sn(r) {
  ra = r;
}
function Ke(r, e = !1, a) {
  Yt = {
    p: Yt,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  }, We && (Yt.function = a, ra = a);
}
function Ze(r) {
  var e = (
    /** @type {ComponentContext} */
    Yt
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      yo(n);
  }
  return Yt = e.p, We && (ra = Yt?.function ?? null), /** @type {T} */
  {};
}
function co() {
  return !0;
}
const Wa = /* @__PURE__ */ new WeakMap();
function cl(r) {
  var e = dt;
  if (e === null)
    return gt.f |= Cr, r;
  if (We && r instanceof Error && !Wa.has(r) && Wa.set(r, vl(r, e)), (e.f & Ca) === 0) {
    if ((e.f & eo) === 0)
      throw !e.parent && r instanceof Error && vo(r), r;
    e.b.error(r);
  } else
    ln(r, e);
}
function ln(r, e) {
  for (; e !== null; ) {
    if ((e.f & eo) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw r instanceof Error && vo(r), r;
}
function vl(r, e) {
  const a = Xr(r, "message");
  if (!(a && !a.configurable)) {
    for (var n = "	", l = `
${n}in ${e.fn?.name || "<unknown>"}`, d = e.ctx; d !== null; )
      l += `
${n}in ${d.function?.[Li].split("/").pop()}`, d = d.p;
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
function vo(r) {
  const e = Wa.get(r);
  e && (pr(r, "message", {
    value: e.message
  }), pr(r, "stack", {
    value: e.stack
  }));
}
let ma = [];
function ul() {
  var r = ma;
  ma = [], Fi(r);
}
function aa(r) {
  ma.length === 0 && queueMicrotask(ul), ma.push(r);
}
function fl() {
  for (var r = (
    /** @type {Effect} */
    dt.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && Yi(), r;
}
let Sr = null;
function uo(r) {
  Sr = r;
}
const bl = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ea(r) {
  var e = Ft | Wt, a = gt !== null && (gt.f & Ft) !== 0 ? (
    /** @type {Derived} */
    gt
  ) : null;
  return dt === null || a !== null && (a.f & Ut) !== 0 ? e |= Ut : dt.f |= an, {
    ctx: Yt,
    deps: null,
    effects: null,
    equals: oo,
    f: e,
    fn: r,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Mt
    ),
    wv: 0,
    parent: a ?? dt,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function gl(r, e) {
  let a = (
    /** @type {Effect | null} */
    dt
  );
  a === null && Wi();
  var n = (
    /** @type {Boundary} */
    a.b
  ), l = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), d = $r(
    /** @type {V} */
    Mt
  ), c = null, g = !gt;
  return Il(() => {
    We && (Sr = dt);
    try {
      var _ = r();
    } catch (T) {
      _ = Promise.reject(T);
    }
    We && (Sr = null);
    var N = () => _;
    l = c?.then(N, N) ?? Promise.resolve(_), c = l;
    var m = (
      /** @type {Batch} */
      yt
    ), P = n.pending;
    g && (n.update_pending_count(1), P || m.increment());
    const R = (T, y = void 0) => {
      c = null, Sr = null, P || m.activate(), y ? y !== nn && (d.f |= Cr, ea(d, y)) : ((d.f & Cr) !== 0 && (d.f ^= Cr), ea(d, T)), g && (n.update_pending_count(-1), P || m.decrement()), mo();
    };
    if (l.then(R, (T) => R(null, T || "unknown")), m)
      return () => {
        queueMicrotask(() => m.neuter());
      };
  }), We && (d.f |= Sa), new Promise((_) => {
    function N(m) {
      function P() {
        m === l ? _(d) : N(l);
      }
      m.then(P, P);
    }
    N(l);
  });
}
// @__NO_SIDE_EFFECTS__
function Ee(r) {
  const e = /* @__PURE__ */ Ea(r);
  return Ao(e), e;
}
// @__NO_SIDE_EFFECTS__
function fo(r) {
  const e = /* @__PURE__ */ Ea(r);
  return e.equals = io, e;
}
function Xa(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1)
      Xt(
        /** @type {Effect} */
        e[a]
      );
  }
}
let Oa = [];
function ml(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & Ft) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function sn(r) {
  var e, a = dt;
  if (dr(ml(r)), We) {
    let n = Hr;
    Mn(/* @__PURE__ */ new Set());
    try {
      Oa.includes(r) && Xi(), Oa.push(r), Xa(r), e = Za(r);
    } finally {
      dr(a), Mn(n), Oa.pop();
    }
  } else
    try {
      Xa(r), e = Za(r);
    } finally {
      dr(a);
    }
  return e;
}
function bo(r) {
  var e = sn(r);
  if (r.equals(e) || (r.v = e, r.wv = Io()), !jr)
    if (Fr !== null)
      Fr.set(r, r.v);
    else {
      var a = (hr || (r.f & Ut) !== 0) && r.deps !== null ? br : Pt;
      Dt(r, a);
    }
}
function go(r, e, a) {
  const n = Ea;
  if (e.length === 0) {
    a(r.map(n));
    return;
  }
  var l = yt, d = (
    /** @type {Effect} */
    dt
  ), c = hl(), g = fl();
  Promise.all(e.map((_) => /* @__PURE__ */ gl(_))).then((_) => {
    l?.activate(), c();
    try {
      a([...r.map(n), ..._]);
    } catch (N) {
      (d.f & zr) === 0 && ln(N, d);
    }
    l?.deactivate(), mo();
  }).catch((_) => {
    g.error(_);
  });
}
function hl() {
  var r = dt, e = gt, a = Yt;
  return function() {
    dr(r), ar(e), ba(a), We && uo(null);
  };
}
function mo() {
  dr(null), ar(null), ba(null), We && uo(null);
}
const Ur = /* @__PURE__ */ new Set();
let yt = null, sa = null, Fr = null, En = /* @__PURE__ */ new Set(), ha = [];
function ho() {
  const r = (
    /** @type {() => void} */
    ha.shift()
  );
  ha.length > 0 && queueMicrotask(ho), r();
}
let Qr = [], dn = null, Ka = !1;
class Jr {
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
    Qr = [], sa = null;
    var a = null;
    if (Ur.size > 1) {
      a = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map();
      for (const [d, c] of this.current)
        a.set(d, { v: d.v, wv: d.wv }), d.v = c;
      for (const d of Ur)
        if (d !== this)
          for (const [c, g] of d.#n)
            a.has(c) || (a.set(c, { v: c.v, wv: c.wv }), c.v = g);
    }
    for (const d of e)
      this.#b(d);
    if (this.#r.length === 0 && this.#e === 0) {
      this.#f();
      var n = this.#a, l = this.#t;
      this.#a = [], this.#t = [], this.#l = [], sa = yt, yt = null, Tn(n), Tn(l), yt === null ? yt = this : Ur.delete(this), this.#d?.resolve();
    } else
      this.#s(this.#a), this.#s(this.#t), this.#s(this.#l);
    if (a) {
      for (const [d, { v: c, wv: g }] of a)
        d.wv <= g && (d.v = c);
      Fr = null;
    }
    for (const d of this.#r)
      Br(d);
    for (const d of this.#i)
      Br(d);
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
      var n = a.f, l = (n & (fr | Gr)) !== 0, d = l && (n & Pt) !== 0, c = d || (n & Jt) !== 0 || this.skipped_effects.has(a);
      if (!c && a.fn !== null) {
        if (l)
          a.f ^= Pt;
        else if ((n & Pt) === 0)
          if ((n & tn) !== 0)
            this.#t.push(a);
          else if ((n & Sa) !== 0) {
            var g = a.b?.pending ? this.#i : this.#r;
            g.push(a);
          } else na(a) && ((a.f & Vr) !== 0 && this.#l.push(a), Br(a));
        var _ = a.first;
        if (_ !== null) {
          a = _;
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
      ((a.f & Wt) !== 0 ? this.#v : this.#u).push(a), Dt(a, Pt);
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
    yt = this;
  }
  deactivate() {
    yt = null, sa = null;
    for (const e of En)
      if (En.delete(e), e(), yt !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Qr.length > 0 ? pl() : this.#f(), yt === this && (this.#e === 0 && Ur.delete(this), this.deactivate());
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
        Dt(e, Wt), Mr(e);
      for (const e of this.#u)
        Dt(e, br), Mr(e);
      this.#a = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#o.add(e);
  }
  settled() {
    return (this.#d ??= Hi()).promise;
  }
  static ensure() {
    if (yt === null) {
      const e = yt = new Jr();
      Ur.add(yt), Jr.enqueue(() => {
        yt === e && e.flush();
      });
    }
    return yt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ha.length === 0 && queueMicrotask(ho), ha.unshift(e);
  }
}
function pl() {
  var r = qr;
  Ka = !0;
  try {
    var e = 0;
    for (zn(!0); Qr.length > 0; ) {
      var a = Jr.ensure();
      if (e++ > 1e3) {
        if (We) {
          var n = /* @__PURE__ */ new Map();
          for (const d of a.current.keys())
            for (const [c, g] of d.updated ?? []) {
              var l = n.get(c);
              l || (l = { error: g.error, count: 0 }, n.set(c, l)), l.count += g.count;
            }
          for (const d of n.values())
            console.error(d.error);
        }
        xl();
      }
      a.process(Qr), Er.clear();
    }
  } finally {
    Ka = !1, zn(r), dn = null;
  }
}
function xl() {
  try {
    Ji();
  } catch (r) {
    We && pr(r, "stack", { value: "" }), ln(r, dn);
  }
}
function Tn(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if ((n.f & (zr | Jt)) === 0 && na(n)) {
        var l = yt ? yt.current.size : 0;
        if (Br(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? Eo(n) : n.fn = null), yt !== null && yt.current.size > l && (n.f & to) !== 0)
          break;
      }
    }
    for (; a < e; )
      Mr(r[a++]);
  }
}
function Mr(r) {
  for (var e = dn = r; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (Ka && e === dt && (a & Vr) !== 0)
      return;
    if ((a & (Gr | fr)) !== 0) {
      if ((a & Pt) === 0) return;
      e.f ^= Pt;
    }
  }
  Qr.push(e);
}
let Hr = /* @__PURE__ */ new Set();
const Er = /* @__PURE__ */ new Map();
function Mn(r) {
  Hr = r;
}
let cn = !1;
function wl() {
  cn = !0;
}
function $r(r, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: oo,
    rv: 0,
    wv: 0
  };
  return a;
}
// @__NO_SIDE_EFFECTS__
function ke(r, e) {
  const a = $r(r);
  return Ao(a), a;
}
// @__NO_SIDE_EFFECTS__
function po(r, e = !1, a = !0) {
  const n = $r(r);
  return e || (n.equals = io), n;
}
function X(r, e, a = !1) {
  gt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zt || (gt.f & ua) !== 0) && co() && (gt.f & (Ft | Vr | Sa | ua)) !== 0 && !cr?.includes(r) && ol();
  let n = a ? lt(e) : e;
  return We && so(
    n,
    /** @type {string} */
    r.label
  ), ea(r, n);
}
function ea(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    jr ? Er.set(r, e) : Er.set(r, a), r.v = e;
    var n = Jr.ensure();
    if (n.capture(r, a), We) {
      if (dt !== null) {
        const l = lo("UpdatedAt");
        if (l !== null) {
          r.updated ??= /* @__PURE__ */ new Map();
          let d = r.updated.get(l.stack);
          d || (d = { error: l, count: 0 }, r.updated.set(l.stack, d)), d.count++;
        }
      }
      dt !== null && (r.set_during_effect = !0);
    }
    (r.f & Ft) !== 0 && ((r.f & Wt) !== 0 && sn(
      /** @type {Derived} */
      r
    ), Dt(r, (r.f & Ut) === 0 ? Pt : br)), r.wv = Io(), wo(r, Wt), dt !== null && (dt.f & Pt) !== 0 && (dt.f & (fr | Gr)) === 0 && (Gt === null ? Ll([r]) : Gt.push(r)), We && Hr.size > 0 && !cn && xo();
  }
  return e;
}
function xo() {
  cn = !1;
  const r = Array.from(Hr);
  for (const e of r)
    (e.f & Pt) !== 0 && Dt(e, br), na(e) && Br(e);
  Hr.clear();
}
function Ta(r, e = 1) {
  var a = t(r), n = e === 1 ? a++ : a--;
  return X(r, a), n;
}
function qa(r) {
  X(r, r.v + 1);
}
function wo(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = a.length, l = 0; l < n; l++) {
      var d = a[l], c = d.f;
      if (We && (c & ua) !== 0) {
        Hr.add(d);
        continue;
      }
      var g = (c & Wt) === 0;
      g && Dt(d, e), (c & Ft) !== 0 ? wo(
        /** @type {Derived} */
        d,
        br
      ) : g && Mr(
        /** @type {Effect} */
        d
      );
    }
}
const _l = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function lt(r) {
  if (typeof r != "object" || r === null || sr in r)
    return r;
  const e = en(r);
  if (e !== Oi && e !== qi)
    return r;
  var a = /* @__PURE__ */ new Map(), n = ka(r), l = /* @__PURE__ */ ke(0), d = Tr, c = (N) => {
    if (Tr === d)
      return N();
    var m = gt, P = Tr;
    ar(null), Pn(d);
    var R = N();
    return ar(m), Pn(P), R;
  };
  n && (a.set("length", /* @__PURE__ */ ke(
    /** @type {any[]} */
    r.length
  )), We && (r = /** @type {any} */
  Cl(
    /** @type {any[]} */
    r
  )));
  var g = "";
  function _(N) {
    g = N, mr(l, `${g} version`);
    for (const [m, P] of a)
      mr(P, yr(g, m));
  }
  return new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(N, m, P) {
        (!("value" in P) || P.configurable === !1 || P.enumerable === !1 || P.writable === !1) && al();
        var R = a.get(m);
        return R === void 0 ? R = c(() => {
          var T = /* @__PURE__ */ ke(P.value);
          return a.set(m, T), We && typeof m == "string" && mr(T, yr(g, m)), T;
        }) : X(R, P.value, !0), !0;
      },
      deleteProperty(N, m) {
        var P = a.get(m);
        if (P === void 0) {
          if (m in N) {
            const R = c(() => /* @__PURE__ */ ke(Mt));
            a.set(m, R), qa(l), We && mr(R, yr(g, m));
          }
        } else
          X(P, Mt), qa(l);
        return !0;
      },
      get(N, m, P) {
        if (m === sr)
          return r;
        if (We && m === ro)
          return _;
        var R = a.get(m), T = m in N;
        if (R === void 0 && (!T || Xr(N, m)?.writable) && (R = c(() => {
          var f = lt(T ? N[m] : Mt), G = /* @__PURE__ */ ke(f);
          return We && mr(G, yr(g, m)), G;
        }), a.set(m, R)), R !== void 0) {
          var y = t(R);
          return y === Mt ? void 0 : y;
        }
        return Reflect.get(N, m, P);
      },
      getOwnPropertyDescriptor(N, m) {
        var P = Reflect.getOwnPropertyDescriptor(N, m);
        if (P && "value" in P) {
          var R = a.get(m);
          R && (P.value = t(R));
        } else if (P === void 0) {
          var T = a.get(m), y = T?.v;
          if (T !== void 0 && y !== Mt)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return P;
      },
      has(N, m) {
        if (m === sr)
          return !0;
        var P = a.get(m), R = P !== void 0 && P.v !== Mt || Reflect.has(N, m);
        if (P !== void 0 || dt !== null && (!R || Xr(N, m)?.writable)) {
          P === void 0 && (P = c(() => {
            var y = R ? lt(N[m]) : Mt, f = /* @__PURE__ */ ke(y);
            return We && mr(f, yr(g, m)), f;
          }), a.set(m, P));
          var T = t(P);
          if (T === Mt)
            return !1;
        }
        return R;
      },
      set(N, m, P, R) {
        var T = a.get(m), y = m in N;
        if (n && m === "length")
          for (var f = P; f < /** @type {Source<number>} */
          T.v; f += 1) {
            var G = a.get(f + "");
            G !== void 0 ? X(G, Mt) : f in N && (G = c(() => /* @__PURE__ */ ke(Mt)), a.set(f + "", G), We && mr(G, yr(g, f)));
          }
        if (T === void 0)
          (!y || Xr(N, m)?.writable) && (T = c(() => /* @__PURE__ */ ke(void 0)), X(T, lt(P)), a.set(m, T), We && mr(T, yr(g, m)));
        else {
          y = T.v !== Mt;
          var Q = c(() => lt(P));
          X(T, Q);
        }
        var x = Reflect.getOwnPropertyDescriptor(N, m);
        if (x?.set && x.set.call(R, P), !y) {
          if (n && typeof m == "string") {
            var B = (
              /** @type {Source<number>} */
              a.get("length")
            ), j = Number(m);
            Number.isInteger(j) && j >= B.v && X(B, j + 1);
          }
          qa(l);
        }
        return !0;
      },
      ownKeys(N) {
        t(l);
        var m = Reflect.ownKeys(N).filter((T) => {
          var y = a.get(T);
          return y === void 0 || y.v !== Mt;
        });
        for (var [P, R] of a)
          R.v !== Mt && !(P in N) && m.push(P);
        return m;
      },
      setPrototypeOf() {
        nl();
      }
    }
  );
}
function yr(r, e) {
  return typeof e == "symbol" ? `${r}[Symbol(${e.description ?? ""})]` : _l.test(e) ? `${r}.${e}` : /^\d+$/.test(e) ? `${r}[${e}]` : `${r}['${e}']`;
}
function An(r) {
  try {
    if (r !== null && typeof r == "object" && sr in r)
      return r[sr];
  } catch {
  }
  return r;
}
function yl(r, e) {
  return Object.is(An(r), An(e));
}
const kl = /* @__PURE__ */ new Set([
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
function Cl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var l = Reflect.get(e, a, n);
      return kl.has(
        /** @type {string} */
        a
      ) ? function(...d) {
        wl();
        var c = l.apply(this, d);
        return xo(), c;
      } : l;
    }
  });
}
var _o, Sl, El, Tl;
function Pr(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function rr(r) {
  return El.call(r);
}
// @__NO_SIDE_EFFECTS__
function Ma(r) {
  return Tl.call(r);
}
function i(r, e) {
  return /* @__PURE__ */ rr(r);
}
function _e(r, e) {
  {
    var a = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ rr(
        /** @type {Node} */
        r
      )
    );
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ Ma(a) : a;
  }
}
function u(r, e = 1, a = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ma(n);
  return n;
}
function Ml(r) {
  r.textContent = "";
}
function vn() {
  return !1;
}
function Al(r) {
  dt === null && gt === null && Qi(r), gt !== null && (gt.f & Ut) !== 0 && dt === null && Zi(), jr && Ki(r);
}
function zl(r, e) {
  var a = e.last;
  a === null ? e.last = e.first = r : (a.next = r, r.prev = a, e.last = r);
}
function wr(r, e, a, n = !0) {
  var l = dt;
  if (We)
    for (; l !== null && (l.f & ua) !== 0; )
      l = l.parent;
  l !== null && (l.f & Jt) !== 0 && (r |= Jt);
  var d = {
    ctx: Yt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | Wt,
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
  if (We && (d.component_function = ra), a)
    try {
      Br(d), d.f |= Ca;
    } catch (_) {
      throw Xt(d), _;
    }
  else e !== null && Mr(d);
  var c = a && d.deps === null && d.first === null && d.nodes_start === null && d.teardown === null && (d.f & an) === 0;
  if (!c && n && (l !== null && zl(d, l), gt !== null && (gt.f & Ft) !== 0 && (r & Gr) === 0)) {
    var g = (
      /** @type {Derived} */
      gt
    );
    (g.effects ??= []).push(d);
  }
  return d;
}
function un(r) {
  const e = wr(rn, null, !1);
  return Dt(e, Pt), e.teardown = r, e;
}
function wt(r) {
  Al("$effect"), We && pr(r, "name", {
    value: "$effect"
  });
  var e = (
    /** @type {Effect} */
    dt.f
  ), a = !gt && (e & fr) !== 0 && (e & Ca) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Yt
    );
    (n.e ??= []).push(r);
  } else
    return yo(r);
}
function yo(r) {
  return wr(tn | to, r, !1);
}
function gr(r) {
  return wr(tn, r, !1);
}
function Il(r) {
  return wr(Sa | an, r, !0);
}
function Aa(r, e = 0) {
  return wr(rn | e, r, !0);
}
function E(r, e = [], a = []) {
  go(e, a, (n) => {
    wr(rn, () => r(...n.map(t)), !0);
  });
}
function Lr(r, e = 0) {
  var a = wr(Vr | e, r, !0);
  return We && (a.dev_stack = ga), a;
}
function vr(r, e = !0) {
  return wr(fr, r, !0, e);
}
function ko(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = jr, n = gt;
    In(!0), ar(null);
    try {
      e.call(null);
    } finally {
      In(a), ar(n);
    }
  }
}
function Co(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    a.ac?.abort(nn);
    var n = a.next;
    (a.f & Gr) !== 0 ? a.parent = null : Xt(a, e), a = n;
  }
}
function Pl(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    (e.f & fr) === 0 && Xt(e), e = a;
  }
}
function Xt(r, e = !0) {
  var a = !1;
  (e || (r.f & Vi) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (So(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), a = !0), Co(r, e && !a), pa(r, 0), Dt(r, zr);
  var n = r.transitions;
  if (n !== null)
    for (const d of n)
      d.stop();
  ko(r);
  var l = r.parent;
  l !== null && l.first !== null && Eo(r), We && (r.component_function = null), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function So(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(r)
    );
    r.remove(), r = a;
  }
}
function Eo(r) {
  var e = r.parent, a = r.prev, n = r.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = a));
}
function za(r, e) {
  var a = [];
  fn(r, a, !0), To(a, () => {
    Xt(r), e && e();
  });
}
function To(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var l of r)
      l.out(n);
  } else
    e();
}
function fn(r, e, a) {
  if ((r.f & Jt) === 0) {
    if (r.f ^= Jt, r.transitions !== null)
      for (const c of r.transitions)
        (c.is_global || a) && e.push(c);
    for (var n = r.first; n !== null; ) {
      var l = n.next, d = (n.f & Ir) !== 0 || (n.f & fr) !== 0;
      fn(n, e, d ? a : !1), n = l;
    }
  }
}
function Ia(r) {
  Mo(r, !0);
}
function Mo(r, e) {
  if ((r.f & Jt) !== 0) {
    r.f ^= Jt, (r.f & Pt) === 0 && (Dt(r, Wt), Mr(r));
    for (var a = r.first; a !== null; ) {
      var n = a.next, l = (a.f & Ir) !== 0 || (a.f & fr) !== 0;
      Mo(a, l ? e : !1), a = n;
    }
    if (r.transitions !== null)
      for (const d of r.transitions)
        (d.is_global || e) && d.in();
  }
}
let qr = !1;
function zn(r) {
  qr = r;
}
let jr = !1;
function In(r) {
  jr = r;
}
let gt = null, Zt = !1;
function ar(r) {
  gt = r;
}
let dt = null;
function dr(r) {
  dt = r;
}
let cr = null;
function Ao(r) {
  gt !== null && (cr === null ? cr = [r] : cr.push(r));
}
let jt = null, Ot = 0, Gt = null;
function Ll(r) {
  Gt = r;
}
let zo = 1, ta = 0, Tr = ta;
function Pn(r) {
  Tr = r;
}
let hr = !1;
function Io() {
  return ++zo;
}
function na(r) {
  var e = r.f;
  if ((e & Wt) !== 0)
    return !0;
  if ((e & br) !== 0) {
    var a = r.deps, n = (e & Ut) !== 0;
    if (a !== null) {
      var l, d, c = (e & va) !== 0, g = n && dt !== null && !hr, _ = a.length;
      if ((c || g) && (dt === null || (dt.f & zr) === 0)) {
        var N = (
          /** @type {Derived} */
          r
        ), m = N.parent;
        for (l = 0; l < _; l++)
          d = a[l], (c || !d?.reactions?.includes(N)) && (d.reactions ??= []).push(N);
        c && (N.f ^= va), g && m !== null && (m.f & Ut) === 0 && (N.f ^= Ut);
      }
      for (l = 0; l < _; l++)
        if (d = a[l], na(
          /** @type {Derived} */
          d
        ) && bo(
          /** @type {Derived} */
          d
        ), d.wv > r.wv)
          return !0;
    }
    (!n || dt !== null && !hr) && Dt(r, Pt);
  }
  return !1;
}
function Po(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !cr?.includes(r))
    for (var l = 0; l < n.length; l++) {
      var d = n[l];
      (d.f & Ft) !== 0 ? Po(
        /** @type {Derived} */
        d,
        e,
        !1
      ) : e === d && (a ? Dt(d, Wt) : (d.f & Pt) !== 0 && Dt(d, br), Mr(
        /** @type {Effect} */
        d
      ));
    }
}
function Za(r) {
  var e = jt, a = Ot, n = Gt, l = gt, d = hr, c = cr, g = Yt, _ = Zt, N = Tr, m = r.f;
  jt = /** @type {null | Value[]} */
  null, Ot = 0, Gt = null, hr = (m & Ut) !== 0 && (Zt || !qr || gt === null), gt = (m & (fr | Gr)) === 0 ? r : null, cr = null, ba(r.ctx), Zt = !1, Tr = ++ta, r.ac !== null && (r.ac.abort(nn), r.ac = null);
  try {
    r.f |= fa;
    var P = (
      /** @type {Function} */
      (0, r.fn)()
    ), R = r.deps;
    if (jt !== null) {
      var T;
      if (pa(r, Ot), R !== null && Ot > 0)
        for (R.length = Ot + jt.length, T = 0; T < jt.length; T++)
          R[Ot + T] = jt[T];
      else
        r.deps = R = jt;
      if (!hr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (m & Ft) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (T = Ot; T < R.length; T++)
          (R[T].reactions ??= []).push(r);
    } else R !== null && Ot < R.length && (pa(r, Ot), R.length = Ot);
    if (co() && Gt !== null && !Zt && R !== null && (r.f & (Ft | br | Wt)) === 0)
      for (T = 0; T < /** @type {Source[]} */
      Gt.length; T++)
        Po(
          Gt[T],
          /** @type {Effect} */
          r
        );
    return l !== null && l !== r && (ta++, Gt !== null && (n === null ? n = Gt : n.push(.../** @type {Source[]} */
    Gt))), (r.f & Cr) !== 0 && (r.f ^= Cr), P;
  } catch (y) {
    return cl(y);
  } finally {
    r.f ^= fa, jt = e, Ot = a, Gt = n, gt = l, hr = d, cr = c, ba(g), Zt = _, Tr = N;
  }
}
function jl(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Ni.call(a, r);
    if (n !== -1) {
      var l = a.length - 1;
      l === 0 ? a = e.reactions = null : (a[n] = a[l], a.pop());
    }
  }
  a === null && (e.f & Ft) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (jt === null || !jt.includes(e)) && (Dt(e, br), (e.f & (Ut | va)) === 0 && (e.f ^= va), Xa(
    /** @type {Derived} **/
    e
  ), pa(
    /** @type {Derived} **/
    e,
    0
  ));
}
function pa(r, e) {
  var a = r.deps;
  if (a !== null)
    for (var n = e; n < a.length; n++)
      jl(r, a[n]);
}
function Br(r) {
  var e = r.f;
  if ((e & zr) === 0) {
    Dt(r, Pt);
    var a = dt, n = qr;
    if (dt = r, qr = !0, We) {
      var l = ra;
      Sn(r.component_function);
      var d = (
        /** @type {any} */
        ga
      );
      Cn(r.dev_stack ?? ga);
    }
    try {
      (e & Vr) !== 0 ? Pl(r) : Co(r), ko(r);
      var c = Za(r);
      r.teardown = typeof c == "function" ? c : null, r.wv = zo;
      var g;
      We && dl && (r.f & Wt) !== 0 && r.deps;
    } finally {
      qr = n, dt = a, We && (Sn(l), Cn(d));
    }
  }
}
function t(r) {
  var e = r.f, a = (e & Ft) !== 0;
  if (gt !== null && !Zt) {
    var n = dt !== null && (dt.f & zr) !== 0;
    if (!n && !cr?.includes(r)) {
      var l = gt.deps;
      if ((gt.f & fa) !== 0)
        r.rv < ta && (r.rv = ta, jt === null && l !== null && l[Ot] === r ? Ot++ : jt === null ? jt = [r] : (!hr || !jt.includes(r)) && jt.push(r));
      else {
        (gt.deps ??= []).push(r);
        var d = r.reactions;
        d === null ? r.reactions = [gt] : d.includes(gt) || d.push(gt);
      }
    }
  } else if (a && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var c = (
      /** @type {Derived} */
      r
    ), g = c.parent;
    g !== null && (g.f & Ut) === 0 && (c.f ^= Ut);
  }
  if (We) {
    if (Sr) {
      var _ = (Sr.f & fa) !== 0, N = Sr.deps?.includes(r);
      if (!_ && !Zt && !N) {
        il(
          /** @type {string} */
          r.label
        );
        var m = lo("TracedAt");
        m && console.warn(m);
      }
    }
    bl.delete(r);
  }
  if (jr) {
    if (Er.has(r))
      return Er.get(r);
    if (a) {
      c = /** @type {Derived} */
      r;
      var P = c.v;
      return ((c.f & Pt) === 0 && c.reactions !== null || Lo(c)) && (P = sn(c)), Er.set(c, P), P;
    }
  } else if (a) {
    if (c = /** @type {Derived} */
    r, Fr?.has(c))
      return Fr.get(c);
    na(c) && bo(c);
  }
  if ((r.f & Cr) !== 0)
    throw r.v;
  return r.v;
}
function Lo(r) {
  if (r.v === Mt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Er.has(e) || (e.f & Ft) !== 0 && Lo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Dr(r) {
  var e = Zt;
  try {
    return Zt = !0, r();
  } finally {
    Zt = e;
  }
}
const Dl = -7169;
function Dt(r, e) {
  r.f = r.f & Dl | e;
}
function Rl(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (sr in r)
      Qa(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const a = r[e];
        typeof a == "object" && a && sr in a && Qa(a);
      }
  }
}
function Qa(r, e = /* @__PURE__ */ new Set()) {
  if (typeof r == "object" && r !== null && // We don't want to traverse DOM elements
  !(r instanceof EventTarget) && !e.has(r)) {
    e.add(r), r instanceof Date && r.getTime();
    for (let n in r)
      try {
        Qa(r[n], e);
      } catch {
      }
    const a = en(r);
    if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
      const n = $n(a);
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
function Nl(r, e) {
  if (e) {
    const a = document.body;
    r.autofocus = !0, aa(() => {
      document.activeElement === a && r.focus();
    });
  }
}
let Ln = !1;
function Ol() {
  Ln || (Ln = !0, document.addEventListener(
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
function Pa(r) {
  var e = gt, a = dt;
  ar(null), dr(null);
  try {
    return r();
  } finally {
    ar(e), dr(a);
  }
}
function jo(r, e, a, n = a) {
  r.addEventListener(e, () => Pa(a));
  const l = r.__on_r;
  l ? r.__on_r = () => {
    l(), n(!0);
  } : r.__on_r = () => n(!0), Ol();
}
const ql = /* @__PURE__ */ new Set(), Bl = /* @__PURE__ */ new Set();
function Do(r, e, a, n = {}) {
  function l(d) {
    if (n.capture || Fl.call(e, d), !d.cancelBubble)
      return Pa(() => a?.call(this, d));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? aa(() => {
    e.addEventListener(r, l, n);
  }) : e.addEventListener(r, l, n), l;
}
function Bt(r, e, a, n, l) {
  var d = { capture: n, passive: l }, c = Do(r, e, a, d);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && un(() => {
    e.removeEventListener(r, c, d);
  });
}
function bt(r) {
  for (var e = 0; e < r.length; e++)
    ql.add(r[e]);
  for (var a of Bl)
    a(r);
}
let jn = null;
function Fl(r) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, l = r.composedPath?.() || [], d = (
    /** @type {null | Element} */
    l[0] || r.target
  );
  jn = r;
  var c = 0, g = jn === r && r.__root;
  if (g) {
    var _ = l.indexOf(g);
    if (_ !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var N = l.indexOf(e);
    if (N === -1)
      return;
    _ <= N && (c = _);
  }
  if (d = /** @type {Element} */
  l[c] || r.target, d !== e) {
    pr(r, "currentTarget", {
      configurable: !0,
      get() {
        return d || a;
      }
    });
    var m = gt, P = dt;
    ar(null), dr(null);
    try {
      for (var R, T = []; d !== null; ) {
        var y = d.assignedSlot || d.parentNode || /** @type {any} */
        d.host || null;
        try {
          var f = d["__" + n];
          if (f != null && (!/** @type {any} */
          d.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === d))
            if (ka(f)) {
              var [G, ...Q] = f;
              G.apply(d, [r, ...Q]);
            } else
              f.call(d, r);
        } catch (x) {
          R ? T.push(x) : R = x;
        }
        if (r.cancelBubble || y === e || y === null)
          break;
        d = y;
      }
      if (R) {
        for (let x of T)
          queueMicrotask(() => {
            throw x;
          });
        throw R;
      }
    } finally {
      r.__root = e, delete r.currentTarget, ar(m), dr(P);
    }
  }
}
function bn(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function Ar(r, e) {
  var a = (
    /** @type {Effect} */
    dt
  );
  a.nodes_start === null && (a.nodes_start = r, a.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function v(r, e) {
  var a = (e & Ii) !== 0, n = (e & Pi) !== 0, l, d = !r.startsWith("<!>");
  return () => {
    l === void 0 && (l = bn(d ? r : "<!>" + r), a || (l = /** @type {Node} */
    /* @__PURE__ */ rr(l)));
    var c = (
      /** @type {TemplateNode} */
      n || Sl ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (a) {
      var g = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rr(c)
      ), _ = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Ar(g, _);
    } else
      Ar(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function Hl(r, e, a = "svg") {
  var n = !r.startsWith("<!>"), l = `<${a}>${n ? r : "<!>" + r}</${a}>`, d;
  return () => {
    if (!d) {
      var c = (
        /** @type {DocumentFragment} */
        bn(l)
      ), g = (
        /** @type {Element} */
        /* @__PURE__ */ rr(c)
      );
      d = /** @type {Element} */
      /* @__PURE__ */ rr(g);
    }
    var _ = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    return Ar(_, _), _;
  };
}
// @__NO_SIDE_EFFECTS__
function nr(r, e) {
  return /* @__PURE__ */ Hl(r, e, "svg");
}
function Et(r = "") {
  {
    var e = Pr(r + "");
    return Ar(e, e), e;
  }
}
function Ae() {
  var r = document.createDocumentFragment(), e = document.createComment(""), a = Pr();
  return r.append(e, a), Ar(e, a), r;
}
function o(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function Vl(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Gl = [
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
function Ul(r) {
  return Gl.includes(r);
}
const Yl = {
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
function Wl(r) {
  return r = r.toLowerCase(), Yl[r] ?? r;
}
let Ro = !0;
function Dn(r) {
  Ro = r;
}
function ie(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && (r.__t = a, r.nodeValue = a + "");
}
function st(r, e, ...a) {
  var n = r, l = qt, d;
  Lr(() => {
    l !== (l = e()) && (d && (Xt(d), d = null), We && l == null && $i(), d = vr(() => (
      /** @type {SnippetFn} */
      l(n, ...a)
    )));
  }, Ir);
}
if (We) {
  let r = function(e) {
    if (!(e in globalThis)) {
      let a;
      Object.defineProperty(globalThis, e, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (a !== void 0)
            return a;
          rl(e);
        },
        set: (n) => {
          a = n;
        }
      });
    }
  };
  r("$state"), r("$effect"), r("$derived"), r("$inspect"), r("$props"), r("$bindable");
}
var Rn = /* @__PURE__ */ new Map();
function Xl(r, e) {
  var a = Rn.get(r);
  a || (a = /* @__PURE__ */ new Set(), Rn.set(r, a)), a.add(e);
}
function b(r, e, a = !1) {
  var n = r, l = null, d = null, c = Mt, g = a ? Ir : 0, _ = !1;
  const N = (T, y = !0) => {
    _ = !0, R(y, T);
  };
  var m = null;
  function P() {
    m !== null && (m.lastChild.remove(), n.before(m), m = null);
    var T = c ? l : d, y = c ? d : l;
    T && Ia(T), y && za(y, () => {
      c ? d = null : l = null;
    });
  }
  const R = (T, y) => {
    if (c !== (c = T)) {
      var f = vn(), G = n;
      if (f && (m = document.createDocumentFragment(), m.append(G = Pr())), c ? l ??= y && vr(() => y(G)) : d ??= y && vr(() => y(G)), f) {
        var Q = (
          /** @type {Batch} */
          yt
        ), x = c ? l : d, B = c ? d : l;
        x && Q.skipped_effects.delete(x), B && Q.skipped_effects.add(B), Q.add_callback(P);
      } else
        P();
    }
  };
  Lr(() => {
    _ = !1, e(N), _ || R(null, null);
  }, g);
}
function ut(r, e) {
  return e;
}
function Kl(r, e, a) {
  for (var n = r.items, l = [], d = e.length, c = 0; c < d; c++)
    fn(e[c].e, l, !0);
  var g = d > 0 && l.length === 0 && a !== null;
  if (g) {
    var _ = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    Ml(_), _.append(
      /** @type {Element} */
      a
    ), n.clear(), er(r, e[0].prev, e[d - 1].next);
  }
  To(l, () => {
    for (var N = 0; N < d; N++) {
      var m = e[N];
      g || (n.delete(m.k), er(r, m.prev, m.next)), Xt(m.e, !g);
    }
  });
}
function Ye(r, e, a, n, l, d = null) {
  var c = r, g = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, _ = (e & Zn) !== 0;
  if (_) {
    var N = (
      /** @type {Element} */
      r
    );
    c = N.appendChild(Pr());
  }
  var m = null, P = !1, R = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ fo(() => {
    var Q = a();
    return ka(Q) ? Q : Q == null ? [] : Jn(Q);
  }), y, f;
  function G() {
    Zl(
      f,
      y,
      g,
      R,
      c,
      l,
      e,
      n,
      a
    ), d !== null && (y.length === 0 ? m ? Ia(m) : m = vr(() => d(c)) : m !== null && za(m, () => {
      m = null;
    }));
  }
  Lr(() => {
    f ??= /** @type {Effect} */
    dt, y = t(T);
    var Q = y.length;
    if (!(P && Q === 0)) {
      P = Q === 0;
      var x, B, j, O;
      if (vn()) {
        var I = /* @__PURE__ */ new Set(), F = (
          /** @type {Batch} */
          yt
        );
        for (B = 0; B < Q; B += 1) {
          j = y[B], O = n(j, B);
          var H = g.items.get(O) ?? R.get(O);
          H ? (e & (_a | ya)) !== 0 && No(H, j, B, e) : (x = Oo(
            null,
            g,
            null,
            null,
            j,
            O,
            B,
            l,
            e,
            a,
            !0
          ), R.set(O, x)), I.add(O);
        }
        for (const [A, U] of g.items)
          I.has(A) || F.skipped_effects.add(U.e);
        F.add_callback(G);
      } else
        G();
      t(T);
    }
  });
}
function Zl(r, e, a, n, l, d, c, g, _) {
  var N = (c & yi) !== 0, m = (c & (_a | ya)) !== 0, P = e.length, R = a.items, T = a.first, y = T, f, G = null, Q, x = [], B = [], j, O, I, F;
  if (N)
    for (F = 0; F < P; F += 1)
      j = e[F], O = g(j, F), I = R.get(O), I !== void 0 && (I.a?.measure(), (Q ??= /* @__PURE__ */ new Set()).add(I));
  for (F = 0; F < P; F += 1) {
    if (j = e[F], O = g(j, F), I = R.get(O), I === void 0) {
      var H = n.get(O);
      if (H !== void 0) {
        n.delete(O), R.set(O, H);
        var A = G ? G.next : y;
        er(a, G, H), er(a, H, A), Ba(H, A, l), G = H;
      } else {
        var U = y ? (
          /** @type {TemplateNode} */
          y.e.nodes_start
        ) : l;
        G = Oo(
          U,
          a,
          G,
          G === null ? a.first : G.next,
          j,
          O,
          F,
          d,
          c,
          _
        );
      }
      R.set(O, G), x = [], B = [], y = G.next;
      continue;
    }
    if (m && No(I, j, F, c), (I.e.f & Jt) !== 0 && (Ia(I.e), N && (I.a?.unfix(), (Q ??= /* @__PURE__ */ new Set()).delete(I))), I !== y) {
      if (f !== void 0 && f.has(I)) {
        if (x.length < B.length) {
          var K = B[0], D;
          G = K.prev;
          var C = x[0], k = x[x.length - 1];
          for (D = 0; D < x.length; D += 1)
            Ba(x[D], K, l);
          for (D = 0; D < B.length; D += 1)
            f.delete(B[D]);
          er(a, C.prev, k.next), er(a, G, C), er(a, k, K), y = K, G = k, F -= 1, x = [], B = [];
        } else
          f.delete(I), Ba(I, y, l), er(a, I.prev, I.next), er(a, I, G === null ? a.first : G.next), er(a, G, I), G = I;
        continue;
      }
      for (x = [], B = []; y !== null && y.k !== O; )
        (y.e.f & Jt) === 0 && (f ??= /* @__PURE__ */ new Set()).add(y), B.push(y), y = y.next;
      if (y === null)
        continue;
      I = y;
    }
    x.push(I), G = I, y = I.next;
  }
  if (y !== null || f !== void 0) {
    for (var M = f === void 0 ? [] : Jn(f); y !== null; )
      (y.e.f & Jt) === 0 && M.push(y), y = y.next;
    var w = M.length;
    if (w > 0) {
      var q = (c & Zn) !== 0 && P === 0 ? l : null;
      if (N) {
        for (F = 0; F < w; F += 1)
          M[F].a?.measure();
        for (F = 0; F < w; F += 1)
          M[F].a?.fix();
      }
      Kl(a, M, q);
    }
  }
  N && aa(() => {
    if (Q !== void 0)
      for (I of Q)
        I.a?.apply();
  }), r.first = a.first && a.first.e, r.last = G && G.e;
  for (var Y of n.values())
    Xt(Y.e);
  n.clear();
}
function No(r, e, a, n) {
  (n & _a) !== 0 && ea(r.v, e), (n & ya) !== 0 ? ea(
    /** @type {Value<number>} */
    r.i,
    a
  ) : r.i = a;
}
function Oo(r, e, a, n, l, d, c, g, _, N, m) {
  var P = (_ & _a) !== 0, R = (_ & ki) === 0, T = P ? R ? /* @__PURE__ */ po(l, !1, !1) : $r(l) : l, y = (_ & ya) === 0 ? c : $r(c);
  We && P && (T.trace = () => {
    var Q = typeof y == "number" ? c : y.v;
    N()[Q];
  });
  var f = {
    i: y,
    v: T,
    k: d,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: n
  };
  try {
    if (r === null) {
      var G = document.createDocumentFragment();
      G.append(r = Pr());
    }
    return f.e = vr(() => g(
      /** @type {Node} */
      r,
      T,
      y,
      N
    ), sl), f.e.prev = a && a.e, f.e.next = n && n.e, a === null ? m || (e.first = f) : (a.next = f, a.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
  } finally {
  }
}
function Ba(r, e, a) {
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
      /* @__PURE__ */ Ma(d)
    );
    l.before(d), d = c;
  }
}
function er(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function xr(r, e, a = !1, n = !1, l = !1) {
  var d = r, c = "";
  E(() => {
    var g = (
      /** @type {Effect} */
      dt
    );
    if (c !== (c = e() ?? "") && (g.nodes_start !== null && (So(
      g.nodes_start,
      /** @type {TemplateNode} */
      g.nodes_end
    ), g.nodes_start = g.nodes_end = null), c !== "")) {
      var _ = c + "";
      a ? _ = `<svg>${_}</svg>` : n && (_ = `<math>${_}</math>`);
      var N = bn(_);
      if ((a || n) && (N = /** @type {Element} */
      /* @__PURE__ */ rr(N)), Ar(
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
function Tt(r, e, a) {
  var n = r, l, d, c = null, g = null;
  function _() {
    d && (za(d), d = null), c && (c.lastChild.remove(), n.before(c), c = null), d = g, g = null;
  }
  Lr(() => {
    if (l !== (l = e())) {
      var N = vn();
      if (l) {
        var m = n;
        N && (c = document.createDocumentFragment(), c.append(m = Pr())), g = vr(() => a(m, l));
      }
      N ? yt.add_callback(_) : _();
    }
  }, Ir);
}
function Ql(r, e, a, n, l, d) {
  var c, g, _ = null, N = (
    /** @type {TemplateNode} */
    r
  ), m;
  Lr(() => {
    const P = e() || null;
    var R = P === "svg" ? Di : null;
    P !== c && (m && (P === null ? za(m, () => {
      m = null, g = null;
    }) : P === g ? Ia(m) : (Xt(m), Dn(!1))), P && P !== g && (m = vr(() => {
      if (_ = R ? document.createElementNS(R, P) : document.createElement(P), Ar(_, _), n) {
        var T = (
          /** @type {TemplateNode} */
          _.appendChild(Pr())
        );
        n(_, T);
      }
      dt.nodes_end = _, N.before(_);
    })), c = P, c && (g = c), Dn(!0));
  }, Ir);
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
      l.id = e.hash, l.textContent = e.code, n.appendChild(l), We && Xl(e.hash, l);
    }
  });
}
function De(r, e, a) {
  gr(() => {
    var n = Dr(() => e(r, a?.()) || {});
    if (a && n?.update) {
      var l = !1, d = (
        /** @type {any} */
        {}
      );
      Aa(() => {
        var c = a();
        Rl(c), l && on(d, c) && (d = c, n.update(c));
      }), l = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function Jl(r, e) {
  var a = void 0, n;
  Lr(() => {
    a !== (a = e()) && (n && (Xt(n), n = null), a && (n = vr(() => {
      gr(() => (
        /** @type {(node: Element) => void} */
        a(r)
      ));
    })));
  });
}
function qo(r) {
  var e, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var l = r.length;
    for (e = 0; e < l; e++) r[e] && (a = qo(r[e])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function $l() {
  for (var r, e, a = 0, n = "", l = arguments.length; a < l; a++) (r = arguments[a]) && (e = qo(r)) && (n && (n += " "), n += e);
  return n;
}
function $(r) {
  return typeof r == "object" ? $l(r) : r ?? "";
}
const Nn = [...` 	
\r\f \v\uFEFF`];
function es(r, e, a) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var l in a)
      if (a[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var d = l.length, c = 0; (c = n.indexOf(l, c)) >= 0; ) {
          var g = c + d;
          (c === 0 || Nn.includes(n[c - 1])) && (g === n.length || Nn.includes(n[g])) ? n = (c === 0 ? "" : n.substring(0, c)) + n.substring(g + 1) : c = g;
        }
  }
  return n === "" ? null : n;
}
function On(r, e = !1) {
  var a = e ? " !important;" : ";", n = "";
  for (var l in r) {
    var d = r[l];
    d != null && d !== "" && (n += " " + l + ": " + d + a);
  }
  return n;
}
function Fa(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function ts(r, e) {
  if (e) {
    var a = "", n, l;
    if (Array.isArray(e) ? (n = e[0], l = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var d = !1, c = 0, g = !1, _ = [];
      n && _.push(...Object.keys(n).map(Fa)), l && _.push(...Object.keys(l).map(Fa));
      var N = 0, m = -1;
      const f = r.length;
      for (var P = 0; P < f; P++) {
        var R = r[P];
        if (g ? R === "/" && r[P - 1] === "*" && (g = !1) : d ? d === R && (d = !1) : R === "/" && r[P + 1] === "*" ? g = !0 : R === '"' || R === "'" ? d = R : R === "(" ? c++ : R === ")" && c--, !g && d === !1 && c === 0) {
          if (R === ":" && m === -1)
            m = P;
          else if (R === ";" || P === f - 1) {
            if (m !== -1) {
              var T = Fa(r.substring(N, m).trim());
              if (!_.includes(T)) {
                R !== ";" && P++;
                var y = r.substring(N, P).trim();
                a += " " + y + ";";
              }
            }
            N = P + 1, m = -1;
          }
        }
      }
    }
    return n && (a += On(n)), l && (a += On(l, !0)), a = a.trim(), a === "" ? null : a;
  }
  return r == null ? null : String(r);
}
function L(r, e, a, n, l, d) {
  var c = r.__className;
  if (c !== a || c === void 0) {
    var g = es(a, n, d);
    g == null ? r.removeAttribute("class") : e ? r.className = g : r.setAttribute("class", g), r.__className = a;
  } else if (d && l !== d)
    for (var _ in d) {
      var N = !!d[_];
      (l == null || N !== !!l[_]) && r.classList.toggle(_, N);
    }
  return d;
}
function Ha(r, e = {}, a, n) {
  for (var l in a) {
    var d = a[l];
    e[l] !== d && (a[l] == null ? r.style.removeProperty(l) : r.style.setProperty(l, d, n));
  }
}
function pt(r, e, a, n) {
  var l = r.__style;
  if (l !== e) {
    var d = ts(e, n);
    d == null ? r.removeAttribute("style") : r.style.cssText = d, r.__style = e;
  } else n && (Array.isArray(n) ? (Ha(r, a?.[0], n[0]), Ha(r, a?.[1], n[1], "important")) : Ha(r, a, n));
  return n;
}
function xa(r, e, a = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!ka(e))
      return ll();
    for (var n of r.options)
      n.selected = e.includes(qn(n));
    return;
  }
  for (n of r.options) {
    var l = qn(n);
    if (yl(l, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Bo(r) {
  var e = new MutationObserver(() => {
    xa(r, r.__value);
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
  }), un(() => {
    e.disconnect();
  });
}
function qn(r) {
  return "__value" in r ? r.__value : r.value;
}
const Yr = Symbol("class"), kr = Symbol("style"), Fo = Symbol("is custom element"), Ho = Symbol("is html");
function Vo(r, e) {
  var a = La(r);
  a.value === (a.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  r.value === e && (e !== 0 || r.nodeName !== "PROGRESS") || (r.value = e ?? "");
}
function Qt(r, e) {
  var a = La(r);
  a.checked !== (a.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (r.checked = e);
}
function rs(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function ye(r, e, a, n) {
  var l = La(r);
  l[e] !== (l[e] = a) && (e === "loading" && (r[Ui] = a), a == null ? r.removeAttribute(e) : typeof a != "string" && Go(r).includes(e) ? r[e] = a : r.setAttribute(e, a));
}
function as(r, e, a, n, l = !1) {
  var d = La(r), c = d[Fo], g = !d[Ho], _ = e || {}, N = r.tagName === "OPTION";
  for (var m in e)
    m in a || (a[m] = null);
  a.class ? a.class = $(a.class) : (n || a[Yr]) && (a.class = null), a[kr] && (a.style ??= null);
  var P = Go(r);
  for (const x in a) {
    let B = a[x];
    if (N && x === "value" && B == null) {
      r.value = r.__value = "", _[x] = B;
      continue;
    }
    if (x === "class") {
      var R = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      L(r, R, B, n, e?.[Yr], a[Yr]), _[x] = B, _[Yr] = a[Yr];
      continue;
    }
    if (x === "style") {
      pt(r, B, e?.[kr], a[kr]), _[x] = B, _[kr] = a[kr];
      continue;
    }
    var T = _[x];
    if (!(B === T && !(B === void 0 && r.hasAttribute(x)))) {
      _[x] = B;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const j = {}, O = "$$" + x;
          let I = x.slice(2);
          var f = Ul(I);
          if (Vl(I) && (I = I.slice(0, -7), j.capture = !0), !f && T) {
            if (B != null) continue;
            r.removeEventListener(I, _[O], j), _[O] = null;
          }
          if (B != null)
            if (f)
              r[`__${I}`] = B, bt([I]);
            else {
              let F = function(H) {
                _[x].call(this, H);
              };
              _[O] = Do(I, r, F, j);
            }
          else f && (r[`__${I}`] = void 0);
        } else if (x === "style")
          ye(r, x, B);
        else if (x === "autofocus")
          Nl(
            /** @type {HTMLElement} */
            r,
            !!B
          );
        else if (!c && (x === "__value" || x === "value" && B != null))
          r.value = r.__value = B;
        else if (x === "selected" && N)
          rs(
            /** @type {HTMLOptionElement} */
            r,
            B
          );
        else {
          var G = x;
          g || (G = Wl(G));
          var Q = G === "defaultValue" || G === "defaultChecked";
          if (B == null && !c && !Q)
            if (d[x] = null, G === "value" || G === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                r
              );
              const O = e === void 0;
              if (G === "value") {
                let I = j.defaultValue;
                j.removeAttribute(G), j.defaultValue = I, j.value = j.__value = O ? I : null;
              } else {
                let I = j.defaultChecked;
                j.removeAttribute(G), j.defaultChecked = I, j.checked = O ? I : !1;
              }
            } else
              r.removeAttribute(x);
          else Q || P.includes(G) && (c || typeof B != "string") ? (r[G] = B, G in d && (d[G] = Mt)) : typeof B != "function" && ye(r, G, B);
        }
    }
  }
  return _;
}
function Qe(r, e, a = [], n = [], l, d = !1) {
  go(a, n, (c) => {
    var g = void 0, _ = {}, N = r.nodeName === "SELECT", m = !1;
    if (Lr(() => {
      var R = e(...c.map(t)), T = as(r, g, R, l, d);
      m && N && "value" in R && xa(
        /** @type {HTMLSelectElement} */
        r,
        R.value
      );
      for (let f of Object.getOwnPropertySymbols(_))
        R[f] || Xt(_[f]);
      for (let f of Object.getOwnPropertySymbols(R)) {
        var y = R[f];
        f.description === Ri && (!g || y !== g[f]) && (_[f] && Xt(_[f]), _[f] = vr(() => Jl(r, () => y))), T[f] = y;
      }
      g = T;
    }), N) {
      var P = (
        /** @type {HTMLSelectElement} */
        r
      );
      gr(() => {
        xa(
          P,
          /** @type {Record<string | symbol, any>} */
          g.value,
          !0
        ), Bo(P);
      });
    }
    m = !0;
  });
}
function La(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [Fo]: r.nodeName.includes("-"),
      [Ho]: r.namespaceURI === ji
    }
  );
}
var Bn = /* @__PURE__ */ new Map();
function Go(r) {
  var e = Bn.get(r.nodeName);
  if (e) return e;
  Bn.set(r.nodeName, e = []);
  for (var a, n = r, l = Element.prototype; l !== n; ) {
    a = $n(n);
    for (var d in a)
      a[d].set && e.push(d);
    n = en(n);
  }
  return e;
}
const ns = Qn ? () => performance.now() : () => Date.now(), lr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => (Qn ? requestAnimationFrame : qt)(r)
  ),
  now: () => ns(),
  tasks: /* @__PURE__ */ new Set()
};
function Uo() {
  const r = lr.now();
  lr.tasks.forEach((e) => {
    e.c(r) || (lr.tasks.delete(e), e.f());
  }), lr.tasks.size !== 0 && lr.tick(Uo);
}
function os(r) {
  let e;
  return lr.tasks.size === 0 && lr.tick(Uo), {
    promise: new Promise((a) => {
      lr.tasks.add(e = { c: r, f: a });
    }),
    abort() {
      lr.tasks.delete(e);
    }
  };
}
function oa(r, e) {
  Pa(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function is(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function Fn(r) {
  const e = {}, a = r.split(";");
  for (const n of a) {
    const [l, d] = n.split(":");
    if (!l || d === void 0) break;
    const c = is(l.trim());
    e[c] = d.trim();
  }
  return e;
}
const ls = (r) => r;
function rt(r, e, a, n) {
  var l = (r & Mi) !== 0, d = (r & Ai) !== 0, c = l && d, g = (r & zi) !== 0, _ = c ? "both" : l ? "in" : "out", N, m = e.inert, P = e.style.overflow, R, T;
  function y() {
    return Pa(() => N ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: _
    }));
  }
  var f = {
    is_global: g,
    in() {
      if (e.inert = m, !l) {
        T?.abort(), T?.reset?.();
        return;
      }
      d || R?.abort(), oa(e, "introstart"), R = Ja(e, y(), T, 1, () => {
        oa(e, "introend"), R?.abort(), R = N = void 0, e.style.overflow = P;
      });
    },
    out(B) {
      if (!d) {
        B?.(), N = void 0;
        return;
      }
      e.inert = !0, oa(e, "outrostart"), T = Ja(e, y(), R, 0, () => {
        oa(e, "outroend"), B?.();
      });
    },
    stop: () => {
      R?.abort(), T?.abort();
    }
  }, G = (
    /** @type {Effect} */
    dt
  );
  if ((G.transitions ??= []).push(f), l && Ro) {
    var Q = g;
    if (!Q) {
      for (var x = (
        /** @type {Effect | null} */
        G.parent
      ); x && (x.f & Ir) !== 0; )
        for (; (x = x.parent) && (x.f & Vr) === 0; )
          ;
      Q = !x || (x.f & Ca) !== 0;
    }
    Q && gr(() => {
      Dr(() => f.in());
    });
  }
}
function Ja(r, e, a, n, l) {
  var d = n === 1;
  if (Bi(e)) {
    var c, g = !1;
    return aa(() => {
      if (!g) {
        var G = e({ direction: d ? "in" : "out" });
        c = Ja(r, G, a, n, l);
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
  const { delay: _ = 0, css: N, tick: m, easing: P = ls } = e;
  var R = [];
  if (d && a === void 0 && (m && m(0, 1), N)) {
    var T = Fn(N(0, 1));
    R.push(T, T);
  }
  var y = () => 1 - n, f = r.animate(R, { duration: _, fill: "forwards" });
  return f.onfinish = () => {
    f.cancel();
    var G = a?.t() ?? 1 - n;
    a?.abort();
    var Q = n - G, x = (
      /** @type {number} */
      e.duration * Math.abs(Q)
    ), B = [];
    if (x > 0) {
      var j = !1;
      if (N)
        for (var O = Math.ceil(x / 16.666666666666668), I = 0; I <= O; I += 1) {
          var F = G + Q * P(I / O), H = Fn(N(F, 1 - F));
          B.push(H), j ||= H.overflow === "hidden";
        }
      j && (r.style.overflow = "hidden"), y = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          f.currentTime
        );
        return G + Q * P(A / x);
      }, m && os(() => {
        if (f.playState !== "running") return !1;
        var A = y();
        return m(A, 1 - A), !0;
      });
    }
    f = r.animate(B, { duration: x, fill: "forwards" }), f.onfinish = () => {
      y = () => n, m?.(n, 1 - n), l();
    };
  }, {
    abort: () => {
      f && (f.cancel(), f.effect = null, f.onfinish = qt);
    },
    deactivate: () => {
      l = qt;
    },
    reset: () => {
      n === 0 && m?.(1, 0);
    },
    t: () => y()
  };
}
function or(r, e, a = e) {
  var n = /* @__PURE__ */ new WeakSet();
  jo(r, "input", (l) => {
    We && r.type === "checkbox" && kn();
    var d = l ? r.defaultValue : r.value;
    if (d = Va(r) ? Ga(d) : d, a(d), yt !== null && n.add(yt), d !== (d = e())) {
      var c = r.selectionStart, g = r.selectionEnd;
      r.value = d ?? "", g !== null && (r.selectionStart = c, r.selectionEnd = Math.min(g, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Dr(e) == null && r.value && (a(Va(r) ? Ga(r.value) : r.value), yt !== null && n.add(yt)), Aa(() => {
    We && r.type === "checkbox" && kn();
    var l = e();
    if (r === document.activeElement) {
      var d = (
        /** @type {Batch} */
        sa ?? yt
      );
      if (n.has(d))
        return;
    }
    Va(r) && l === Ga(r.value) || r.type === "date" && !l && !r.value || l !== r.value && (r.value = l ?? "");
  });
}
function ss(r, e, a = e) {
  jo(r, "change", (n) => {
    var l = n ? r.defaultChecked : r.checked;
    a(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Dr(e) == null && a(r.checked), Aa(() => {
    var n = e();
    r.checked = !!n;
  });
}
function Va(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function Ga(r) {
  return r === "" ? null : +r;
}
function Hn(r, e) {
  return r === e || r?.[sr] === e;
}
function at(r = {}, e, a, n) {
  return gr(() => {
    var l, d;
    return Aa(() => {
      l = d, d = [], Dr(() => {
        r !== a(...d) && (e(r, ...d), l && Hn(a(...l), r) && e(null, ...l));
      });
    }), () => {
      aa(() => {
        d && Hn(a(...d), r) && e(null, ...d);
      });
    };
  }), r;
}
function Yo(r, e, a) {
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
const Rr = [];
function gn(r, e = qt) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function l(g) {
    if (on(r, g) && (r = g, a)) {
      const _ = !Rr.length;
      for (const N of n)
        N[1](), Rr.push(N, r);
      if (_) {
        for (let N = 0; N < Rr.length; N += 2)
          Rr[N][0](Rr[N + 1]);
        Rr.length = 0;
      }
    }
  }
  function d(g) {
    l(g(
      /** @type {T} */
      r
    ));
  }
  function c(g, _ = qt) {
    const N = [g, _];
    return n.add(N), n.size === 1 && (a = e(l, d) || qt), g(
      /** @type {T} */
      r
    ), () => {
      n.delete(N), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: l, update: d, subscribe: c };
}
function Wo(r) {
  let e;
  return Yo(r, (a) => e = a)(), e;
}
let ia = !1, $a = Symbol();
function Xo(r, e, a) {
  const n = a[e] ??= {
    store: null,
    source: /* @__PURE__ */ po(void 0),
    unsubscribe: qt
  };
  if (We && (n.source.label = e), n.store !== r && !($a in a))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = qt;
    else {
      var l = !0;
      n.unsubscribe = Yo(r, (d) => {
        l ? n.source.v = d : X(n.source, d);
      }), l = !1;
    }
  return r && $a in a ? Wo(r) : t(n.source);
}
function Ko() {
  const r = {};
  function e() {
    un(() => {
      for (var a in r)
        r[a].unsubscribe();
      pr(r, $a, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [r, e];
}
function ds(r) {
  var e = ia;
  try {
    return ia = !1, [r(), ia];
  } finally {
    ia = e;
  }
}
const cs = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return We && tl(`${r.name}.${String(e)}`), !1;
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
function vt(r, e, a) {
  return new Proxy(
    We ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] } : { props: r, exclude: e },
    cs
  );
}
function s(r, e, a, n) {
  var l = (a & Ei) !== 0, d = (a & Ti) !== 0, c = (
    /** @type {V} */
    n
  ), g = !0, _ = () => (g && (g = !1, c = d ? Dr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), c), N;
  if (l) {
    var m = sr in r || Gi in r;
    N = Xr(r, e)?.set ?? (m && e in r ? (x) => r[e] = x : void 0);
  }
  var P, R = !1;
  l ? [P, R] = ds(() => (
    /** @type {V} */
    r[e]
  )) : P = /** @type {V} */
  r[e], P === void 0 && n !== void 0 && (P = _(), N && (el(e), N(P)));
  var T;
  if (T = () => {
    var x = (
      /** @type {V} */
      r[e]
    );
    return x === void 0 ? _() : (g = !0, x);
  }, (a & Si) === 0)
    return T;
  if (N) {
    var y = r.$$legacy;
    return function(x, B) {
      return arguments.length > 0 ? ((!B || y || R) && N(B ? T() : x), x) : T();
    };
  }
  var f = !1, G = ((a & Ci) !== 0 ? Ea : fo)(() => (f = !1, T()));
  We && (G.label = e), l && t(G);
  var Q = (
    /** @type {Effect} */
    dt
  );
  return function(x, B) {
    if (arguments.length > 0) {
      const j = B ? t(G) : l ? lt(x) : x;
      return X(G, j), f = !0, c !== void 0 && (c = j), x;
    }
    return jr && f || (Q.f & zr) !== 0 ? G.v : t(G);
  };
}
function V(...r) {
  return r.filter(Boolean).join(" ");
}
const ft = (r, e) => {
  let a = { enabled: !0, strength: 0.1, scale: 1.02, ...e };
  function n(d) {
    if (!a.enabled) return;
    const c = r.getBoundingClientRect(), g = (d.clientX - c.left) / c.width - 0.5, _ = (d.clientY - c.top) / c.height - 0.5;
    r.style.transform = `translate(${g * (a.strength ?? 0.1) * 20}px, ${_ * (a.strength ?? 0.1) * 20}px) scale(${a.scale ?? 1.02})`;
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
}, Ct = (r, e) => {
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
function Kt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, scale: l = 0.98 } = e;
  return {
    duration: a,
    delay: n,
    css: (d) => `transform: scale(${l + (1 - l) * d});`
  };
}
function mt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, direction: l = "up", distance: d = 10, opacity: c = "light" } = e, g = l === "up" ? d : l === "down" ? -d : 0, _ = c === "strong" ? 1 : c === "medium" ? 0.9 : c === "subtle" ? 0.8 : 0.7;
  return {
    duration: a,
    delay: n,
    css: (N) => `transform: translateY(${(1 - N) * g}px); opacity: ${N * _};`
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
}, wa = It, vs = /* @__PURE__ */ new Map();
function $t(r, e) {
  if (typeof window < "u" && process.env.NODE_ENV === "development") {
    const a = {
      name: r,
      size: e,
      timestamp: Date.now()
    };
    vs.set(r, a), console.log(`📦 Bundle: ${r} (${e})`);
  }
}
var us = (r, e, a) => e(t(a).id), fs = (r, e, a) => e(r, t(a).id), bs = /* @__PURE__ */ v('<p class="svelte-1neysev">No content available</p>'), gs = /* @__PURE__ */ v('<div role="region"><!></div>'), ms = /* @__PURE__ */ v('<div><button type="button"><span class="text-left svelte-1neysev"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-1neysev"></path></svg></button> <!></div>'), hs = /* @__PURE__ */ v("<div></div>");
const ps = {
  hash: "svelte-1neysev",
  code: `button[aria-expanded].svelte-1neysev {will-change:transform;}svg.svelte-1neysev {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-1neysev {transition:none;
			animation: none;will-change:auto;}
	}`
};
function K1(r, e) {
  Ke(e, !0), Je(r, ps);
  const a = s(e, "items", 19, () => []), n = s(e, "multiple", 3, !1), l = s(e, "collapsible", 3, !0), d = s(e, "variant", 3, "glass"), c = s(e, "size", 3, "md"), g = s(e, "blur", 3, "md"), _ = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), m = s(e, "defaultOpen", 19, () => []), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  let T = /* @__PURE__ */ ke(lt(new Set(m())));
  const y = `accordion-${Math.random().toString(36).substr(2, 9)}`, f = {
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
  }, G = {
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
  }, Q = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };
  function x(U) {
    if (a().find((C) => C.id === U)?.disabled) return;
    const D = t(T).has(U);
    n() ? D ? (l() || t(T).size > 1) && t(T).delete(U) : t(T).add(U) : D && l() ? t(T).clear() : (t(T).clear(), t(T).add(U)), X(T, new Set(t(T)), !0), e.onValueChange?.(Array.from(t(T)));
  }
  function B(U, K) {
    if (!a().find((C) => C.id === K)?.disabled)
      switch (U.key) {
        case "Enter":
        case " ":
          U.preventDefault(), x(K);
          break;
        case "ArrowDown":
          U.preventDefault(), j(K);
          break;
        case "ArrowUp":
          U.preventDefault(), O(K);
          break;
        case "Home":
          U.preventDefault(), I();
          break;
        case "End":
          U.preventDefault(), F();
          break;
      }
  }
  function j(U) {
    const K = a().filter((M) => !M.disabled), C = (K.findIndex((M) => M.id === U) + 1) % K.length, k = K[C];
    H(k.id);
  }
  function O(U) {
    const K = a().filter((M) => !M.disabled), D = K.findIndex((M) => M.id === U), C = D === 0 ? K.length - 1 : D - 1, k = K[C];
    H(k.id);
  }
  function I() {
    const U = a().find((K) => !K.disabled);
    U && H(U.id);
  }
  function F() {
    const U = a().filter((D) => !D.disabled), K = U[U.length - 1];
    K && H(K.id);
  }
  function H(U) {
    document.querySelector(`[data-accordion-header="${U}"]`)?.focus();
  }
  wt(() => {
    $t("Accordion", "medium");
  });
  var A = hs();
  Qe(A, (U) => ({ class: U, ...R }), [() => V("w-full space-y-2", P())], void 0, "svelte-1neysev"), Ye(A, 21, a, ut, (U, K, D) => {
    const C = /* @__PURE__ */ Ee(() => t(T).has(t(K).id)), k = /* @__PURE__ */ Ee(() => D === 0), M = /* @__PURE__ */ Ee(() => D === a().length - 1), w = /* @__PURE__ */ Ee(() => `${y}-header-${t(K).id}`), q = /* @__PURE__ */ Ee(() => `${y}-content-${t(K).id}`);
    var Y = ms(), z = i(Y);
    z.__click = [us, x, K], z.__keydown = [fs, B, K];
    var p = i(z), h = i(p), oe = u(p, 2);
    De(z, (ve, ae) => Ct?.(ve, ae), () => _() && !N() && t(C) ? { blur: g(), opacity: "subtle" } : void 0);
    var ue = u(z, 2);
    {
      var fe = (ve) => {
        var ae = gs(), W = i(ae);
        {
          var le = (S) => {
            var te = Ae(), J = _e(te);
            st(J, () => t(K).content), o(S, te);
          }, re = (S) => {
            var te = Ae(), J = _e(te);
            {
              var Z = (se) => {
                var ne = Ae(), de = _e(ne);
                st(de, () => e.children, () => t(K)), o(se, ne);
              }, ee = (se) => {
                var ne = bs();
                o(se, ne);
              };
              b(
                J,
                (se) => {
                  e.children ? se(Z) : se(ee, !1);
                },
                !0
              );
            }
            o(S, te);
          };
          b(W, (S) => {
            t(K).content ? S(le) : S(re, !1);
          });
        }
        E(
          (S) => {
            ye(ae, "id", t(q)), ye(ae, "aria-labelledby", t(w)), L(ae, 1, S, "svelte-1neysev");
          },
          [
            () => $(V("border-t border-white/10 transition-all duration-200", f[c()].content, G[d()].content))
          ]
        ), rt(1, ae, () => mt, () => ({
          direction: "down",
          distance: 10,
          duration: _() && !N() ? 200 : 0
        })), rt(2, ae, () => mt, () => ({
          direction: "up",
          distance: 10,
          duration: _() && !N() ? 150 : 0
        })), o(ve, ae);
      };
      b(ue, (ve) => {
        t(C) && ve(fe);
      });
    }
    E(
      (ve, ae, W) => {
        L(Y, 1, ve, "svelte-1neysev"), ye(z, "id", t(w)), L(z, 1, ae, "svelte-1neysev"), ye(z, "aria-expanded", t(C)), ye(z, "aria-controls", t(q)), ye(z, "aria-disabled", t(K).disabled), ye(z, "data-accordion-header", t(K).id), z.disabled = t(K).disabled, ie(h, t(K).title), L(oe, 0, W, "svelte-1neysev");
      },
      [
        () => $(V("overflow-hidden transition-all duration-200", G[d()].container, d() === "glass" && Q[g()], t(k) && "rounded-t-brand-lg", t(M) && "rounded-b-brand-lg", !t(k) && !t(M) && D > 0 && "rounded-none border-t-0")),
        () => $(V("w-full flex items-center justify-between transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium cursor-pointer", f[c()].header, G[d()].header, t(K).disabled && "opacity-50 cursor-not-allowed")),
        () => $(V("transition-transform duration-200 flex-shrink-0 ml-2", f[c()].icon, t(C) && "rotate-180"))
      ]
    ), o(U, Y);
  }), o(r, A), Ze();
}
bt(["click", "keydown"]);
const xs = (r, e, a) => {
  X(e, !1), a.onclose?.();
};
var ws = /* @__PURE__ */ v("<div><!></div>"), _s = /* @__PURE__ */ v("<h3> </h3>"), ys = /* @__PURE__ */ v("<p> </p>"), ks = /* @__PURE__ */ v('<button aria-label="Close alert"><!></button>'), Cs = /* @__PURE__ */ v('<div><div class="flex items-start gap-3 svelte-yqts08"><!> <div class="flex-1 min-w-0 svelte-yqts08"><!> <!></div> <!></div></div>');
const Ss = {
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
function Z1(r, e) {
  Ke(e, !0), Je(r, Ss);
  const a = s(e, "variant", 3, "info"), n = s(e, "closable", 3, !1), l = s(e, "animated", 3, !0), d = s(e, "glow", 3, !0), c = s(e, "jelly", 3, !0), g = s(e, "icon", 3, !0), _ = s(e, "position", 3, "static"), N = s(e, "placement", 3, "top-right"), m = s(e, "class", 3, ""), P = /* @__PURE__ */ vt(e, [
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
  let R = /* @__PURE__ */ ke(!0);
  const T = {
    success: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400/40",
      text: "text-green-300",
      icon: vi,
      glow: "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
    },
    error: {
      bg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      icon: ci,
      glow: "shadow-[0_0_30px_rgba(248,113,113,0.5)]"
    },
    warning: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      icon: xn,
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.5)]"
    },
    info: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/40",
      text: "text-blue-300",
      icon: di,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    terminal: {
      bg: "bg-gray-900/90",
      border: "border-green-400/40",
      text: "text-green-400",
      icon: xn,
      glow: "shadow-[0_0_20px_rgba(74,222,128,0.6)]"
    }
  }, y = {
    top: "top-4 left-1/2 -translate-x-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  }, f = T[a()], G = f.icon;
  var Q = Ae(), x = _e(Q);
  {
    var B = (j) => {
      var O = Cs();
      Qe(
        O,
        (w) => ({ class: w, ...P }),
        [
          () => V("backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300", f.bg, f.border, d() && f.glow, _() === "fixed" && "fixed z-50", _() === "fixed" && y[N()], l() && "transform-gpu will-change-transform", m())
        ],
        void 0,
        "svelte-yqts08"
      );
      var I = i(O), F = i(I);
      {
        var H = (w) => {
          var q = ws(), Y = i(q);
          G(Y, { size: 20 }), E((z) => L(q, 1, z, "svelte-yqts08"), [
            () => $(V("flex-shrink-0 mt-0.5", f.text, l() && "animate-pulse"))
          ]), o(w, q);
        };
        b(F, (w) => {
          g() && w(H);
        });
      }
      var A = u(F, 2), U = i(A);
      {
        var K = (w) => {
          var q = _s(), Y = i(q);
          E(
            (z) => {
              L(q, 1, z, "svelte-yqts08"), ie(Y, e.title);
            },
            [
              () => $(V("font-semibold text-base", f.text))
            ]
          ), o(w, q);
        };
        b(U, (w) => {
          e.title && w(K);
        });
      }
      var D = u(U, 2);
      {
        var C = (w) => {
          var q = ys(), Y = i(q);
          E(
            (z) => {
              L(q, 1, z, "svelte-yqts08"), ie(Y, e.description);
            },
            [
              () => $(V("text-sm mt-1 opacity-80", f.text))
            ]
          ), o(w, q);
        };
        b(D, (w) => {
          e.description && w(C);
        });
      }
      var k = u(A, 2);
      {
        var M = (w) => {
          var q = ks();
          q.__click = [xs, R, e];
          var Y = i(q);
          da(Y, { size: 16 }), E((z) => L(q, 1, z, "svelte-yqts08"), [
            () => $(V("flex-shrink-0 p-1 rounded-lg transition-all duration-200", "hover:bg-white/10 hover:scale-110", f.text, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]), o(w, q);
        };
        b(k, (w) => {
          n() && w(M);
        });
      }
      De(O, (w, q) => jellyHover?.(w, q), () => ({
        enabled: c(),
        scale: 1.02,
        duration: 200,
        borderRadius: "16px"
      })), rt(3, O, () => mt, () => ({ duration: l() ? 300 : 0 })), o(j, O);
    };
    b(x, (j) => {
      t(R) && j(B);
    });
  }
  o(r, Q), Ze();
}
bt(["click"]);
var Es = /* @__PURE__ */ v("<button><!></button>"), Ts = /* @__PURE__ */ v("<span><!></span>"), Ms = /* @__PURE__ */ v("<button><!></button>"), As = /* @__PURE__ */ v("<span><!></span>");
const zs = {
  hash: "svelte-17ytdye",
  code: `button.svelte-17ytdye {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {button.svelte-17ytdye,
		span.svelte-17ytdye {transition:none;
			animation: none;}
	}`
};
function Q1(r, e) {
  Ke(e, !0), Je(r, zs);
  const a = s(e, "variant", 3, "default"), n = s(e, "size", 3, "md"), l = s(e, "glass", 3, !0), d = s(e, "blur", 3, "md"), c = s(e, "interactive", 3, !1), g = s(e, "animate", 3, !0), _ = s(e, "reduceMotion", 3, !1), N = s(e, "class", 3, ""), m = /* @__PURE__ */ vt(e, [
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
  }, R = {
    sm: "px-2 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
    lg: "px-4 py-2 text-base font-medium"
  }, T = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, y = "inline-flex items-center justify-center rounded-full border transition-all duration-200", f = l() ? `glass-subtle ${T[d()]}` : "", G = c() ? "cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent" : "", Q = V(y, P[a()], R[n()], f, G, N());
  function x(F) {
    c() && (F.key === "Enter" || F.key === " ") && (F.preventDefault(), F.currentTarget?.dispatchEvent(new CustomEvent("click", { bubbles: !0 })));
  }
  wt(() => {
    $t("Badge", "small");
  });
  var B = Ae(), j = _e(B);
  {
    var O = (F) => {
      var H = Ae(), A = _e(H);
      {
        var U = (D) => {
          var C = Es();
          Qe(
            C,
            () => ({
              class: Q,
              type: "button",
              "aria-label": m["aria-label"] || `${a()} badge`,
              onkeydown: x,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = i(C);
          {
            var M = (w) => {
              var q = Ae(), Y = _e(q);
              st(Y, () => e.children), o(w, q);
            };
            b(k, (w) => {
              e.children && w(M);
            });
          }
          De(C, (w, q) => Ct?.(w, q), () => ({ blur: d(), opacity: "subtle" })), o(D, C);
        }, K = (D) => {
          var C = Ts();
          Qe(
            C,
            () => ({
              class: Q,
              role: "status",
              "aria-label": m["aria-label"] || `${a()} badge`,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = i(C);
          {
            var M = (w) => {
              var q = Ae(), Y = _e(q);
              st(Y, () => e.children), o(w, q);
            };
            b(k, (w) => {
              e.children && w(M);
            });
          }
          rt(1, C, () => mt, () => ({ direction: "up", distance: 10 })), o(D, C);
        };
        b(A, (D) => {
          c() ? D(U) : D(K, !1);
        });
      }
      o(F, H);
    }, I = (F) => {
      var H = Ae(), A = _e(H);
      {
        var U = (D) => {
          var C = Ms();
          Qe(
            C,
            () => ({
              class: Q,
              type: "button",
              "aria-label": m["aria-label"] || `${a()} badge`,
              onkeydown: x,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = i(C);
          {
            var M = (w) => {
              var q = Ae(), Y = _e(q);
              st(Y, () => e.children), o(w, q);
            };
            b(k, (w) => {
              e.children && w(M);
            });
          }
          o(D, C);
        }, K = (D) => {
          var C = As();
          Qe(
            C,
            () => ({
              class: Q,
              role: "status",
              "aria-label": m["aria-label"] || `${a()} badge`,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = i(C);
          {
            var M = (w) => {
              var q = Ae(), Y = _e(q);
              st(Y, () => e.children), o(w, q);
            };
            b(k, (w) => {
              e.children && w(M);
            });
          }
          o(D, C);
        };
        b(
          A,
          (D) => {
            c() ? D(U) : D(K, !1);
          },
          !0
        );
      }
      o(F, H);
    };
    b(j, (F) => {
      g() && !_() ? F(O) : F(I, !1);
    });
  }
  o(r, B), Ze();
}
const Le = {
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
}, Is = {
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
}, Ps = {
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
}, Ls = {
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
}, js = {
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
}, Ds = {
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
}, ja = {
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
}, Rs = {
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
}, Ns = {
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
}, Os = {
  colors: {
    primary: Le.terminal.green,
    secondary: Le.terminal.cyan,
    accent: Le.terminal.blue,
    success: Le.semantic.success,
    warning: Le.semantic.warning,
    error: Le.semantic.error,
    info: Le.semantic.info
  },
  gradients: Le.gradients,
  borderRadius: ja.themes.terminal
}, qs = {
  colors: {
    primary: Le.bubbleTea.primary,
    // WCAG AA compliant #ff85b3
    secondary: Le.bubbleTea.secondary,
    // WCAG AA compliant #d666ff
    accent: Le.bubbleTea.accent,
    // WCAG AA compliant #66c3ff
    success: Le.bubbleTea.success,
    warning: Le.bubbleTea.warning,
    error: Le.bubbleTea.error,
    // WCAG AA compliant #ff8585
    info: Le.bubbleTea.info
  },
  gradients: Le.bubbleTeaGradients,
  borderRadius: ja.themes.bubbleTea
}, J1 = {
  colors: Le,
  typography: Is,
  spacing: Ps,
  effects: Ls,
  shadows: js,
  animations: Ds,
  sizes: Rs,
  borderRadius: ja,
  zIndex: Ns,
  themes: {
    terminal: Os,
    bubbleTea: qs
  }
}, At = typeof window < "u";
function Zo(r) {
  if (!At) return null;
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}
function Wr(r, e) {
  if (At)
    try {
      localStorage.setItem(r, e);
    } catch (a) {
      console.warn(`Failed to save ${r} to localStorage:`, a);
    }
}
function Qo(r) {
  if (At)
    try {
      localStorage.removeItem(r);
    } catch (e) {
      console.warn(`Failed to remove ${r} from localStorage:`, e);
    }
}
const la = {
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
}, Nr = {
  terminal: {
    name: "terminal",
    displayName: "Terminal",
    description: "Hacker aesthetic with green matrix colors and sharp edges",
    colors: la.terminal,
    highContrastColors: {
      ...la.terminal,
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
    colors: la.bubbleTea,
    highContrastColors: {
      ...la.bubbleTea,
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
function Bs() {
  const r = () => {
    if (!At) return "terminal";
    const _ = Zo("ahb-theme");
    return _ === "terminal" || _ === "bubbleTea" || _ === "auto" ? _ : "auto";
  }, e = (_) => _ === "auto" ? $o() : _, a = r();
  let n = a;
  const { subscribe: l, set: d, update: c } = gn(e(a), (_) => {
    let N = null;
    const m = (P) => {
      if (At) {
        const R = document.documentElement.classList;
        R.remove("theme-terminal", "theme-bubble-tea");
        const T = `theme-${P === "bubbleTea" ? "bubble-tea" : P}`;
        R.add(T);
        const y = Ua(P);
        Object.entries(y).forEach(([f, G]) => {
          document.documentElement.style.setProperty(f, G);
        });
      }
      _(P);
    };
    return m(e(a)), a === "auto" && At && (N = Gn((P) => {
      n === "auto" && m(P);
    })), () => {
      N && N();
    };
  }), g = {
    subscribe: l,
    getUserTheme: () => n,
    set: (_) => {
      n = _;
      const N = e(_);
      if (At) {
        Wr("ahb-theme", _), document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${N === "bubbleTea" ? "bubble-tea" : N}`);
        const m = Ua(N);
        if (Object.entries(m).forEach(([P, R]) => {
          document.documentElement.style.setProperty(P, R);
        }), _ === "auto") {
          const P = Gn((R) => {
            if (n === "auto") {
              document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${R === "bubbleTea" ? "bubble-tea" : R}`);
              const T = Ua(R);
              Object.entries(T).forEach(([y, f]) => {
                document.documentElement.style.setProperty(y, f);
              }), d(R);
            }
          });
          g._systemWatcherCleanup = P;
        } else
          g._systemWatcherCleanup && (g._systemWatcherCleanup(), g._systemWatcherCleanup = null);
      }
      d(N);
    },
    toggle: () => {
      const _ = ["terminal", "bubbleTea", "auto"], N = _.indexOf(n), m = _[(N + 1) % _.length];
      g.set(m);
    },
    setTerminal: () => g.set("terminal"),
    setBubbleTea: () => g.set("bubbleTea"),
    setAuto: () => g.set("auto"),
    reset: () => {
      At && Qo("ahb-theme"), g.set("auto");
    }
  };
  return g;
}
const ur = Bs();
function Fs() {
  const e = (() => {
    if (!At) return "normal";
    const c = Zo("ahb-contrast-mode");
    return c === "normal" || c === "high" ? c : At && window.matchMedia?.("(prefers-contrast: high)").matches ? "high" : "normal";
  })(), { subscribe: a, set: n, update: l } = gn(e), d = (c) => {
    At && (document.documentElement.classList.remove("contrast-normal", "contrast-high"), document.documentElement.classList.add(`contrast-${c}`));
  };
  return d(e), {
    subscribe: a,
    set: (c) => {
      At && (Wr("ahb-contrast-mode", c), d(c)), n(c);
    },
    toggle: () => {
      l((c) => {
        const g = c === "normal" ? "high" : "normal";
        return At && (Wr("ahb-contrast-mode", g), d(g)), g;
      });
    },
    setNormal: () => {
      const c = "normal";
      At && (Wr("ahb-contrast-mode", c), d(c)), n(c);
    },
    setHigh: () => {
      const c = "high";
      At && (Wr("ahb-contrast-mode", c), d(c)), n(c);
    },
    reset: () => {
      const c = "normal";
      At && (Qo("ahb-contrast-mode"), d(c)), n(c);
    }
  };
}
const Hs = Fs(), Jo = {
  subscribe: (r) => {
    let e = "terminal", a = "normal";
    const n = ur.subscribe((c) => {
      e = c, d();
    }), l = Hs.subscribe((c) => {
      a = c, d();
    });
    function d() {
      const c = Nr[e], g = a === "high" ? c.highContrastColors : c.colors, _ = ur.getUserTheme();
      r({
        ...c,
        currentColors: g,
        userTheme: _,
        resolvedTheme: e
      });
    }
    return d(), () => {
      n(), l();
    };
  }
};
function Ua(r, e = "normal") {
  const a = Nr[r], n = e === "high" ? a.highContrastColors : a.colors, l = ja.themes[r], d = {};
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
function Vn(r) {
  return r === "auto";
}
function Vs(r, e) {
  return r === "auto" ? {
    displayName: `Auto (${Nr[e].displayName})`,
    description: `Automatically follows system preference. Currently: ${Nr[e].displayName}`,
    isAuto: !0
  } : {
    displayName: Nr[r].displayName,
    description: Nr[r].description,
    isAuto: !1
  };
}
function $o() {
  if (!At || !window.matchMedia)
    return "terminal";
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = window.matchMedia("(prefers-color-scheme: light)");
  return r.matches ? "terminal" : e.matches ? "bubbleTea" : "terminal";
}
function Gn(r) {
  if (!At || !window.matchMedia)
    return () => {
    };
  const e = window.matchMedia("(prefers-color-scheme: dark)"), a = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
    const l = $o();
    r(l);
  };
  return e.addEventListener ? (e.addEventListener("change", n), a.addEventListener("change", n), () => {
    e.removeEventListener("change", n), a.removeEventListener("change", n);
  }) : e.addListener ? (e.addListener(n), a.addListener(n), () => {
    e.removeListener?.(n), a.removeListener?.(n);
  }) : () => {
  };
}
function Da() {
  return Wo(Jo).resolvedTheme;
}
function Gs(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Da()) {
    case "terminal":
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
    case "bubbleTea":
      return "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono";
    default:
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
  }
}
function Us(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Da()) {
    case "terminal":
      return "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20";
    case "bubbleTea":
      return "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono";
    default:
      return "glass-subtle border border-white/20 shadow-lg hover:shadow-xl";
  }
}
function ei(r, e) {
  return r !== "auto" && r !== "theme" ? "" : Da() === "bubbleTea" ? e && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[e] || "rounded-bubble-tea" : "";
}
function ti() {
  switch (Da()) {
    case "terminal":
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    case "bubbleTea":
      return "focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    default:
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  }
}
var Ys = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Ws = /* @__PURE__ */ v("<button><!> <!></button>"), Xs = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Ks = /* @__PURE__ */ v("<button><!> <!></button>");
const Zs = {
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
  Ke(e, !0), Je(r, Zs);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "loading", 3, !1), d = s(e, "icon", 3, !1), c = s(e, "animate", 3, !0), g = s(e, "jelly", 3, !0), _ = s(e, "liquid", 3, !1), N = s(e, "class", 3, ""), m = s(e, "disabled", 3, !1), P = /* @__PURE__ */ vt(e, [
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
  ]), R = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Gs(a()) : T[a()] || T.default), T = {
    default: "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    secondary: "bg-gradient-to-r from-terminal-purple to-terminal-pink hover:from-terminal-purple/90 hover:to-terminal-pink/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    outline: "border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/80 backdrop-blur-sm",
    ghost: "hover:bg-terminal-green/10 text-terminal-green hover:text-terminal-green/90 backdrop-blur-sm",
    glass: "glass-medium glass-shimmer hover:glass-heavy text-white border border-white/20 shadow-2xl",
    "glass-dark": "glass-heavy border-terminal-green/30 hover:border-terminal-green/60 text-terminal-green shadow-2xl backdrop-blur-xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/5 hover:border-terminal-green/80 shadow-lg hover:shadow-terminal-green/20",
    liquid: "bg-gradient-to-br from-terminal-cyan/20 via-terminal-blue/20 to-terminal-purple/20 border border-white/30 text-white backdrop-blur-lg hover:from-terminal-cyan/30 hover:via-terminal-blue/30 hover:to-terminal-purple/30",
    bubbleTea: "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono"
  }, y = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl"
  }, f = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ei(a(), n()) : a() === "bubbleTea" && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[n()] || ""), G = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ti() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"), Q = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none will-change-transform", x = d() ? "aspect-square !p-0" : "", B = /* @__PURE__ */ Ee(() => () => V(Q, t(R)(), y[n()], t(f)(), t(G)(), x, l() && "cursor-wait", N()));
  var j = Ae(), O = _e(j);
  {
    var I = (H) => {
      var A = Ws();
      Qe(
        A,
        (k) => ({
          class: k,
          disabled: m(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...P
        }),
        [() => t(B)()],
        void 0,
        "svelte-16dveyh"
      );
      var U = i(A);
      {
        var K = (k) => {
          var M = Ys();
          o(k, M);
        };
        b(U, (k) => {
          l() && k(K);
        });
      }
      var D = u(U, 2);
      {
        var C = (k) => {
          var M = Ae(), w = _e(M);
          st(w, () => e.children), o(k, M);
        };
        b(D, (k) => {
          e.children && k(C);
        });
      }
      De(A, (k, M) => It?.(k, M), () => ({
        enabled: !m() && !l() && g(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), De(A, (k, M) => wa?.(k, M), () => ({ enabled: !m() && !l() && _() })), De(A, (k, M) => ft?.(k, M), () => ({
        enabled: !m() && !l() && !g() && !_(),
        strength: 0.15,
        scale: 1.02
      })), rt(1, A, () => Kt, () => ({
        duration: 200,
        bounce: a().includes("glass") || a() === "liquid"
      })), o(H, A);
    }, F = (H) => {
      var A = Ks();
      Qe(
        A,
        (k) => ({
          class: k,
          disabled: m(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...P
        }),
        [() => t(B)()],
        void 0,
        "svelte-16dveyh"
      );
      var U = i(A);
      {
        var K = (k) => {
          var M = Xs();
          o(k, M);
        };
        b(U, (k) => {
          l() && k(K);
        });
      }
      var D = u(U, 2);
      {
        var C = (k) => {
          var M = Ae(), w = _e(M);
          st(w, () => e.children), o(k, M);
        };
        b(D, (k) => {
          e.children && k(C);
        });
      }
      De(A, (k, M) => It?.(k, M), () => ({
        enabled: !m() && !l() && g(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : a() === "bubbleTea" ? 1.06 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), De(A, (k, M) => wa?.(k, M), () => ({ enabled: !m() && !l() && _() })), De(A, (k, M) => ft?.(k, M), () => ({
        enabled: !m() && !l() && !g() && !_(),
        strength: 0.15,
        scale: 1.02
      })), o(H, A);
    };
    b(O, (H) => {
      c() ? H(I) : H(F, !1);
    });
  }
  o(r, j), Ze();
}
var Qs = /* @__PURE__ */ v("<div><!></div>"), Js = /* @__PURE__ */ v("<div><!></div>"), $s = /* @__PURE__ */ v("<div><!></div>"), ed = /* @__PURE__ */ v("<div><!></div>");
const td = {
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
function $1(r, e) {
  Ke(e, !0), Je(r, td);
  const a = s(e, "variant", 3, "auto"), n = s(e, "blur", 3, "md"), l = s(e, "interactive", 3, !1), d = s(e, "animate", 3, !0), c = s(e, "jelly", 3, !0), g = s(e, "liquid", 3, !1), _ = s(e, "breathing", 3, !1), N = s(e, "class", 3, ""), m = /* @__PURE__ */ vt(e, [
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
  ]), P = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Us(a()) : R[a()] || R.default), R = {
    default: "glass-subtle border border-white/20 shadow-lg hover:shadow-xl",
    glass: "glass-medium border border-white/30 shadow-xl hover:shadow-2xl",
    "glass-subtle": "glass-subtle border border-white/10 shadow-md hover:shadow-lg",
    "glass-heavy": "glass-heavy border border-white/40 shadow-2xl hover:shadow-3xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20",
    liquid: "glass-medium border border-terminal-cyan/30 shadow-2xl shadow-terminal-cyan/10 hover:border-terminal-cyan/50 backdrop-blur-xl",
    jelly: "glass-subtle border border-terminal-purple/20 shadow-lg hover:shadow-xl hover:border-terminal-purple/40",
    bubbleTea: "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono"
  }, T = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, y = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ei(a()) || "rounded-2xl" : a() === "bubbleTea" ? "rounded-bubble-tea-lg" : "rounded-2xl"), f = /* @__PURE__ */ Ee(() => () => l() ? a() === "auto" || a() === "theme" ? ti() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" : ""), G = "p-6 transition-all duration-300 will-change-transform", Q = l() ? "cursor-pointer" : "", x = /* @__PURE__ */ Ee(() => () => V(G, t(P)(), t(y)(), typeof a() == "string" && a().includes("glass") && T[n()], Q, t(f)(), N()));
  var B = Ae(), j = _e(B);
  {
    var O = (F) => {
      var H = Ae(), A = _e(H);
      {
        var U = (D) => {
          var C = Qs(), k = (q) => {
            (q.key === "Enter" || q.key === " ") && (q.preventDefault(), q.currentTarget.click());
          };
          Qe(
            C,
            (q) => ({
              class: q,
              role: "button",
              tabindex: "0",
              onkeydown: k,
              ...m
            }),
            [() => t(x)()],
            void 0,
            "svelte-j9s7zz"
          );
          var M = i(C);
          {
            var w = (q) => {
              var Y = Ae(), z = _e(Y);
              st(z, () => e.children), o(q, Y);
            };
            b(M, (q) => {
              e.children && q(w);
            });
          }
          De(C, (q, Y) => It?.(q, Y), () => ({
            enabled: c(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : a() === "bubbleTea" ? 1.04 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), De(C, (q, Y) => wa?.(q, Y), () => ({ enabled: g(), liquidIntensity: 1, morphStrength: 0.3 })), De(C, (q, Y) => Rt?.(q, Y), () => ({ enabled: _(), intensity: 0.015, speed: 3500 })), De(C, (q, Y) => ft?.(q, Y), () => ({ enabled: !c() && !g(), strength: 0.2, scale: 1.02 })), rt(1, C, () => Ct, () => ({ blur: n(), opacity: "medium" })), o(D, C);
        }, K = (D) => {
          var C = Js();
          Qe(C, (w) => ({ class: w, ...m }), [() => t(x)()], void 0, "svelte-j9s7zz");
          var k = i(C);
          {
            var M = (w) => {
              var q = Ae(), Y = _e(q);
              st(Y, () => e.children), o(w, q);
            };
            b(k, (w) => {
              e.children && w(M);
            });
          }
          De(C, (w, q) => It?.(w, q), () => ({
            enabled: c() && l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "var(--radius-xl)",
            responsiveness: "subtle"
          })), De(C, (w, q) => Rt?.(w, q), () => ({ enabled: _(), intensity: 0.01, speed: 4e3 })), rt(1, C, () => Ct, () => ({ blur: n(), opacity: "subtle" })), o(D, C);
        };
        b(A, (D) => {
          l() ? D(U) : D(K, !1);
        });
      }
      o(F, H);
    }, I = (F) => {
      var H = Ae(), A = _e(H);
      {
        var U = (D) => {
          var C = $s(), k = (q) => {
            (q.key === "Enter" || q.key === " ") && (q.preventDefault(), q.currentTarget.click());
          };
          Qe(
            C,
            (q) => ({
              class: q,
              role: "button",
              tabindex: "0",
              onkeydown: k,
              ...m
            }),
            [() => t(x)()],
            void 0,
            "svelte-j9s7zz"
          );
          var M = i(C);
          {
            var w = (q) => {
              var Y = Ae(), z = _e(Y);
              st(z, () => e.children), o(q, Y);
            };
            b(M, (q) => {
              e.children && q(w);
            });
          }
          De(C, (q, Y) => It?.(q, Y), () => ({
            enabled: c(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), De(C, (q, Y) => wa?.(q, Y), () => ({ enabled: g(), liquidIntensity: 1, morphStrength: 0.3 })), De(C, (q, Y) => Rt?.(q, Y), () => ({ enabled: _(), intensity: 0.015, speed: 3500 })), De(C, (q, Y) => ft?.(q, Y), () => ({ enabled: !c() && !g(), strength: 0.2, scale: 1.02 })), o(D, C);
        }, K = (D) => {
          var C = ed();
          Qe(C, (w) => ({ class: w, ...m }), [() => t(x)()], void 0, "svelte-j9s7zz");
          var k = i(C);
          {
            var M = (w) => {
              var q = Ae(), Y = _e(q);
              st(Y, () => e.children), o(w, q);
            };
            b(k, (w) => {
              e.children && w(M);
            });
          }
          De(C, (w, q) => Rt?.(w, q), () => ({ enabled: _(), intensity: 0.01, speed: 4e3 })), o(D, C);
        };
        b(
          A,
          (D) => {
            l() ? D(U) : D(K, !1);
          },
          !0
        );
      }
      o(F, H);
    };
    b(j, (F) => {
      d() ? F(O) : F(I, !1);
    });
  }
  o(r, B), Ze();
}
var rd = /* @__PURE__ */ v('<span class="text-red-400 ml-1 svelte-cfvntl">*</span>'), ad = /* @__PURE__ */ v("<label> <!></label>"), nd = /* @__PURE__ */ v("<p> </p>"), od = /* @__PURE__ */ v('<p class="text-xs text-red-400 mt-1 svelte-cfvntl" role="alert"> </p>'), id = /* @__PURE__ */ v('<div class="flex-1 min-w-0 svelte-cfvntl"><!> <!> <!></div>'), ld = /* @__PURE__ */ v('<div class="flex items-start gap-3 svelte-cfvntl"><div><input/> <div class="absolute inset-0 flex items-center justify-center svelte-cfvntl"><!></div></div> <!></div>');
const sd = {
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
function ep(r, e) {
  Ke(e, !0), Je(r, sd);
  let a = s(e, "checked", 7, !1), n = s(e, "indeterminate", 7, !1), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), c = s(e, "variant", 3, "glass"), g = s(e, "blur", 3, "md"), _ = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), m = s(e, "required", 3, !1), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  ]), T;
  const y = `checkbox-${Math.random().toString(36).substr(2, 9)}`, f = e.description ? `${y}-description` : void 0, G = e.error ? `${y}-error` : void 0;
  wt(() => {
    T && (T.indeterminate = n());
  });
  const Q = {
    sm: { container: "w-4 h-4", icon: "w-3 h-3", text: "text-sm" },
    md: { container: "w-5 h-5", icon: "w-4 h-4", text: "text-base" },
    lg: { container: "w-6 h-6", icon: "w-5 h-5", text: "text-lg" }
  }, x = {
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
  }, B = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = V(
    "relative inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
    Q[d()].container,
    n() ? x[c()].containerIndeterminate : a() ? x[c()].containerChecked : x[c()].container,
    c() === "glass" && B[g()],
    l() && "opacity-50 cursor-not-allowed",
    !l() && "cursor-pointer hover:scale-105",
    e.error && "border-red-400/60 bg-red-500/10",
    P()
  ), O = V("transition-all duration-200", Q[d()].icon, n() ? x[c()].iconIndeterminate : a() ? x[c()].iconChecked : x[c()].icon), I = V("font-medium text-white cursor-pointer select-none", Q[d()].text, l() && "opacity-50", e.error && "text-red-300"), F = V("text-xs text-white/70 mt-1", l() && "opacity-50", e.error && "text-red-300/70");
  function H(z) {
    if (l()) return;
    const h = z.target.checked;
    a(h), n(!1), e.onCheckedChange?.(h);
  }
  function A(z) {
    l() || z.key === "Enter" && (z.preventDefault(), T.click());
  }
  wt(() => {
    $t("Checkbox", "small");
  });
  var U = ld(), K = i(U), D = i(K);
  Qe(
    D,
    (z) => ({
      type: "checkbox",
      id: y,
      disabled: l(),
      required: m(),
      class: "sr-only",
      "aria-label": e["aria-label"] || e.label,
      "aria-describedby": z,
      "aria-invalid": !!e.error,
      onchange: H,
      onkeydown: A,
      ...R
    }),
    [
      () => [f, G].filter(Boolean).join(" ") || void 0
    ],
    void 0,
    "svelte-cfvntl"
  ), at(D, (z) => T = z, () => T), gr(() => ss(D, a)), De(D, (z, p) => Kt?.(z, p), () => _() && !N() ? { scale: 0.9, duration: 150 } : void 0);
  var C = u(D, 2), k = i(C);
  {
    var M = (z) => {
      Xn(z, {
        get class() {
          return O;
        },
        strokeWidth: 2.5
      });
    }, w = (z) => {
      var p = Ae(), h = _e(p);
      {
        var oe = (ue) => {
          Ya(ue, {
            get class() {
              return O;
            },
            strokeWidth: 2.5
          });
        };
        b(
          h,
          (ue) => {
            a() && ue(oe);
          },
          !0
        );
      }
      o(z, p);
    };
    b(k, (z) => {
      n() ? z(M) : z(w, !1);
    });
  }
  var q = u(K, 2);
  {
    var Y = (z) => {
      var p = id(), h = i(p);
      {
        var oe = (W) => {
          var le = ad(), re = i(le), S = u(re);
          {
            var te = (J) => {
              var Z = rd();
              o(J, Z);
            };
            b(S, (J) => {
              m() && J(te);
            });
          }
          E(() => {
            ye(le, "for", y), L(le, 1, $(I), "svelte-cfvntl"), ie(re, `${e.label ?? ""} `);
          }), o(W, le);
        };
        b(h, (W) => {
          e.label && W(oe);
        });
      }
      var ue = u(h, 2);
      {
        var fe = (W) => {
          var le = nd(), re = i(le);
          E(() => {
            ye(le, "id", f), L(le, 1, $(F), "svelte-cfvntl"), ie(re, e.description);
          }), o(W, le);
        };
        b(ue, (W) => {
          e.description && W(fe);
        });
      }
      var ve = u(ue, 2);
      {
        var ae = (W) => {
          var le = od(), re = i(le);
          E(() => {
            ye(le, "id", G), ie(re, e.error);
          }), o(W, le);
        };
        b(ve, (W) => {
          e.error && W(ae);
        });
      }
      o(z, p);
    };
    b(q, (z) => {
      (e.label || e.description || e.error) && z(Y);
    });
  }
  E(() => L(K, 1, $(j), "svelte-cfvntl")), o(r, U), Ze();
}
const dd = (r, e, a) => {
  X(e, !t(e)), t(e) && requestAnimationFrame(a);
};
var cd = /* @__PURE__ */ v('<div class="h-px bg-white/10 my-1"></div>'), vd = (r, e, a) => e(t(a)), ud = /* @__PURE__ */ v('<button><!> <span class="flex-1 text-left"> </span></button>'), fd = /* @__PURE__ */ v('<div><div class="py-1"></div></div>'), bd = /* @__PURE__ */ v('<div><button aria-haspopup="true"><span> </span> <!></button> <!></div>');
function tp(r, e) {
  Ke(e, !0);
  const a = s(e, "trigger", 3, "Select"), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "position", 3, "bottom"), c = s(e, "animated", 3, !0), g = s(e, "glow", 3, !1), _ = s(e, "jelly", 3, !0), N = s(e, "class", 3, ""), m = s(e, "triggerClass", 3, ""), P = s(e, "menuClass", 3, ""), R = /* @__PURE__ */ vt(e, [
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
    "onselect"
  ]);
  let T = /* @__PURE__ */ ke(!1), y = /* @__PURE__ */ ke(void 0), f = /* @__PURE__ */ ke(void 0), G = /* @__PURE__ */ ke(lt({ x: 0, y: 0 }));
  const Q = {
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
  }, x = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg"
  }, B = () => {
    if (!t(y) || !t(f)) return;
    const w = t(y).getBoundingClientRect(), q = t(f).getBoundingClientRect(), Y = window.innerWidth, z = window.innerHeight;
    let p = 0, h = 0;
    switch (d()) {
      case "bottom":
        p = 0, h = w.height + 4;
        break;
      case "top":
        p = 0, h = -q.height - 4;
        break;
      case "left":
        p = -q.width - 4, h = 0;
        break;
      case "right":
        p = w.width + 4, h = 0;
        break;
    }
    const oe = w.left + p, ue = w.top + h + w.height;
    oe + q.width > Y && (p = Y - oe - q.width - 8), ue + q.height > z && (h = -q.height - 4), X(G, { x: p, y: h }, !0);
  }, j = (w) => {
    w.disabled || w.divider || (e.onselect?.(w.value), X(T, !1));
  }, O = (w) => {
    t(y) && !t(y).contains(w.target) && X(T, !1);
  }, I = (w) => {
    w.key === "Escape" && X(T, !1);
  };
  kt(() => (document.addEventListener("click", O), document.addEventListener("keydown", I), () => {
    document.removeEventListener("click", O), document.removeEventListener("keydown", I);
  }));
  const F = Q[n()], H = e.items.find((w) => w.value === e.value);
  var A = bd();
  Qe(A, (w) => ({ class: w, ...R }), [() => V("relative inline-block", N())]);
  var U = i(A);
  U.__click = [dd, T, B];
  var K = i(U), D = i(K), C = u(K, 2);
  {
    let w = /* @__PURE__ */ Ee(() => V("transition-transform duration-200", t(T) && "rotate-180"));
    Kr(C, {
      size: 16,
      get class() {
        return t(w);
      }
    });
  }
  De(U, (w, q) => jellyHover?.(w, q), () => ({
    enabled: _(),
    scale: 1.02,
    duration: 200,
    borderRadius: "12px"
  }));
  var k = u(U, 2);
  {
    var M = (w) => {
      var q = fd(), Y = i(q);
      Ye(Y, 21, () => e.items, ut, (z, p) => {
        var h = Ae(), oe = _e(h);
        {
          var ue = (ve) => {
            var ae = cd();
            o(ve, ae);
          }, fe = (ve) => {
            var ae = ud();
            ae.__click = [vd, j, p];
            var W = i(ae);
            {
              var le = (te) => {
                var J = Ae(), Z = _e(J);
                Tt(Z, () => t(p).icon, (ee, se) => {
                  se(ee, { size: 16 });
                }), o(te, J);
              };
              b(W, (te) => {
                t(p).icon && te(le);
              });
            }
            var re = u(W, 2), S = i(re);
            E(
              (te) => {
                ae.disabled = t(p).disabled, L(ae, 1, te), ie(S, t(p).label);
              },
              [
                () => $(V("flex items-center gap-3 w-full px-4 py-2 transition-all duration-200", F.item, t(p).value === e.value && F.active, t(p).disabled && "opacity-50 cursor-not-allowed", !t(p).disabled && "cursor-pointer"))
              ]
            ), o(ve, ae);
          };
          b(oe, (ve) => {
            t(p).divider ? ve(ue) : ve(fe, !1);
          });
        }
        o(z, h);
      }), at(q, (z) => X(f, z), () => t(f)), E(
        (z) => {
          L(q, 1, z), pt(q, `left: ${t(G).x ?? ""}px; top: ${t(G).y ?? ""}px;`);
        },
        [
          () => $(V("absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden", F.menu, g() && F.glow, c() && "transform-gpu will-change-transform", P()))
        ]
      ), rt(3, q, () => mt, () => ({ duration: c() ? 200 : 0 })), o(w, q);
    };
    b(k, (w) => {
      t(T) && w(M);
    });
  }
  at(A, (w) => X(y, w), () => t(y)), E(
    (w) => {
      L(U, 1, w), ye(U, "aria-expanded", t(T)), ie(D, H?.label || a());
    },
    [
      () => $(V("flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200", x[l()], F.trigger, g() && t(T) && F.glow, "focus:outline-none focus:ring-2 focus:ring-white/20", m()))
    ]
  ), o(r, A), Ze();
}
bt(["click"]);
var gd = /* @__PURE__ */ v('<label class="block text-sm font-medium text-white/80 mb-2"> </label>'), md = /* @__PURE__ */ v('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), hd = /* @__PURE__ */ v('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), pd = /* @__PURE__ */ v("<input/>"), xd = /* @__PURE__ */ v("<input/>"), wd = /* @__PURE__ */ v("<input/>"), _d = /* @__PURE__ */ v('<p class="mt-1 text-sm text-red-400" role="alert"> </p>'), yd = /* @__PURE__ */ v('<div class="relative"><!> <div class="relative"><!> <!></div> <!></div>');
const kd = {
  hash: "svelte-177vx52",
  code: `input.svelte-177vx52:focus {box-shadow:0 0 0 3px rgba(0, 122, 255, 0.1);transition:box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);}input.svelte-177vx52.glass:focus {-webkit-backdrop-filter:blur(16px) saturate(200%);backdrop-filter:blur(16px) saturate(200%);transition:-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
			-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);}input.svelte-177vx52.terminal {caret-color:var(--terminal-green);}

	/* Liquid input effects */input.svelte-177vx52:focus {transform:translateY(-1px);}input.svelte-177vx52.backdrop-blur-md:focus {-webkit-backdrop-filter:blur(12px) saturate(150%);backdrop-filter:blur(12px) saturate(150%);background:linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));}

	/* Enhanced hover states */input.svelte-177vx52:hover:not(:focus) {border-color:rgba(255, 255, 255, 0.3);background:linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));}

	/* Jelly physics simulation */input.svelte-177vx52.jelly-hover:hover {transform:scale(1.01) translateY(-1px);transition:transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);}

	/* Magnetic attraction visual feedback */input.svelte-177vx52.magnetic:hover {box-shadow:0 4px 20px rgba(139, 92, 246, 0.15);}`
};
function Cd(r, e) {
  Ke(e, !0), Je(r, kd);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "label", 3, ""), d = s(e, "error", 3, ""), c = s(e, "icon", 3, null), g = s(e, "animate", 3, !0), _ = s(e, "liquid", 3, !1), N = s(e, "magnetic", 3, !1), m = s(e, "jelly", 3, !1), P = s(e, "glow", 3, !1), R = s(e, "class", 3, ""), T = s(e, "id", 3, ""), y = /* @__PURE__ */ vt(e, [
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
  }, G = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, Q = "w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300", x = d() ? "border-red-500 focus:border-red-500" : "", B = c() || e.children?.icon ? "pl-10" : "", j = P() ? "focus:shadow-lg focus:shadow-brand-primary/20" : "", O = _() ? "backdrop-blur-md" : "", I = V(Q, f[a()], G[n()], x, B, j, O, R()), F = T() || `input-${Math.random().toString(36).substr(2, 9)}`, H = d() ? `${F}-error` : void 0;
  var A = yd(), U = i(A);
  {
    var K = (h) => {
      var oe = gd(), ue = i(oe);
      E(() => {
        ye(oe, "for", F), ie(ue, l());
      }), o(h, oe);
    };
    b(U, (h) => {
      l() && h(K);
    });
  }
  var D = u(U, 2), C = i(D);
  {
    var k = (h) => {
      var oe = md(), ue = i(oe);
      st(ue, c), o(h, oe);
    }, M = (h) => {
      var oe = Ae(), ue = _e(oe);
      {
        var fe = (ve) => {
          var ae = hd(), W = i(ae);
          st(W, () => e.children.icon), o(ve, ae);
        };
        b(
          ue,
          (ve) => {
            e.children?.icon && ve(fe);
          },
          !0
        );
      }
      o(h, oe);
    };
    b(C, (h) => {
      c() ? h(k) : h(M, !1);
    });
  }
  var w = u(C, 2);
  {
    var q = (h) => {
      var oe = pd();
      Qe(oe, (ue) => ({ id: T(), class: ue, ...y }), [I], void 0, "svelte-177vx52"), De(oe, (ue, fe) => ft?.(ue, fe), () => N() ? { strength: 0.1, distance: 50 } : void 0), De(oe, (ue, fe) => It?.(ue, fe), () => m() ? { intensity: 0.05, speed: 200 } : void 0), rt(1, oe, () => Ct, () => ({ duration: 300, blur: "sm", scale: 0.98 })), o(h, oe);
    }, Y = (h) => {
      var oe = Ae(), ue = _e(oe);
      {
        var fe = (ae) => {
          var W = xd();
          Qe(
            W,
            (le) => ({
              id: F,
              class: le,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": H,
              ...y
            }),
            [I],
            void 0,
            "svelte-177vx52"
          ), De(W, (le, re) => ft?.(le, re), () => N() ? { strength: 0.1, distance: 50 } : void 0), De(W, (le, re) => It?.(le, re), () => m() ? { intensity: 0.05, speed: 200 } : void 0), rt(1, W, () => mt, () => ({
            duration: 200,
            direction: "up",
            distance: 5,
            opacity: "light"
          })), o(ae, W);
        }, ve = (ae) => {
          var W = wd();
          Qe(
            W,
            (le) => ({
              id: F,
              class: le,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": H,
              ...y
            }),
            [I],
            void 0,
            "svelte-177vx52"
          ), De(W, (le, re) => ft?.(le, re), () => N() ? { strength: 0.1, distance: 50 } : void 0), De(W, (le, re) => It?.(le, re), () => m() ? { intensity: 0.05, speed: 200 } : void 0), o(ae, W);
        };
        b(
          ue,
          (ae) => {
            g() ? ae(fe) : ae(ve, !1);
          },
          !0
        );
      }
      o(h, oe);
    };
    b(w, (h) => {
      g() && _() ? h(q) : h(Y, !1);
    });
  }
  var z = u(D, 2);
  {
    var p = (h) => {
      var oe = _d(), ue = i(oe);
      E(() => {
        ye(oe, "id", H), ie(ue, d());
      }), o(h, oe);
    };
    b(z, (h) => {
      d() && h(p);
    });
  }
  o(r, A), Ze();
}
var Sd = /* @__PURE__ */ v("<div> </div>"), Ed = /* @__PURE__ */ v('<div class="flex items-center justify-between svelte-17v0sh2"><div class="flex-1 svelte-17v0sh2"><div> </div> <div> </div></div> <div class="flex flex-col items-end gap-1 svelte-17v0sh2"><!> <!></div></div>'), Td = /* @__PURE__ */ v("<span> </span>"), Md = /* @__PURE__ */ v("<span> </span>"), Ad = /* @__PURE__ */ v('<div class="flex items-center gap-2 svelte-17v0sh2"><!> <!> <!></div>'), zd = /* @__PURE__ */ v("<div> </div>"), Id = /* @__PURE__ */ v('<div class="space-y-2 svelte-17v0sh2"><div class="flex items-center justify-between svelte-17v0sh2"><div> </div> <!></div> <div> </div> <!> <!></div>'), Pd = /* @__PURE__ */ v('<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg svelte-17v0sh2"><div class="flex items-center gap-2 svelte-17v0sh2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-17v0sh2"></div> <span class="text-sm opacity-70 svelte-17v0sh2">Loading...</span></div></div>'), Ld = /* @__PURE__ */ v('<div class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none svelte-17v0sh2"></div>'), jd = /* @__PURE__ */ v("<!> <!> <!>", 1);
const Dd = {
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
function rp(r, e) {
  Ke(e, !0), Je(r, Dd);
  let a = s(e, "size", 3, "md"), n = s(e, "variant", 3, "glass"), l = s(e, "layout", 3, "vertical"), d = s(e, "showTrend", 3, !0), c = s(e, "showChange", 3, !0), g = s(e, "showIcon", 3, !1), _ = s(e, "animated", 3, !0), N = s(e, "loading", 3, !1), m = s(e, "clickable", 3, !1), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  const T = {
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
  }, y = {
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
  }, f = T[a()], G = y[n()], Q = /* @__PURE__ */ Ee(() => () => {
    if (N()) return "---";
    const H = e.metric.value, A = e.metric.format || "number", U = e.metric.unit || "";
    switch (A) {
      case "currency":
        return `$${Number(H).toLocaleString()}${U}`;
      case "percentage":
        return `${H}%`;
      default:
        return `${Number(H).toLocaleString()}${U}`;
    }
  }), x = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.change || N()) return null;
    const H = e.metric.change, A = H > 0, U = H < 0;
    return {
      value: `${A ? "+" : ""}${H}%`,
      type: A ? "positive" : U ? "negative" : "neutral"
    };
  }), B = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.trend || N()) return null;
    switch (e.metric.trend) {
      case "up":
        return fi;
      case "down":
        return ui;
      default:
        return Xn;
    }
  }), j = /* @__PURE__ */ Ee(() => () => {
    if (!t(x)) return G.changeNeutral;
    switch (t(x).type) {
      case "positive":
        return G.changePositive;
      case "negative":
        return G.changeNegative;
      default:
        return G.changeNeutral;
    }
  });
  function O() {
    if (m()) {
      const H = new CustomEvent("click", { detail: e.metric });
      e.onclick?.(H);
    }
  }
  var I = Ae(), F = _e(I);
  Ql(F, () => m() ? "button" : "div", !1, (H, A) => {
    De(H, (Y, z) => Ct?.(Y, z), () => ({ intensity: "medium" })), Qe(
      H,
      (Y) => ({
        class: Y,
        onclick: O,
        role: m() ? "button" : void 0,
        tabindex: m() ? 0 : void 0,
        ...R
      }),
      [
        () => V("relative rounded-lg border transition-all duration-200", f.container, G.container, m() && "cursor-pointer hover:scale-105 hover:shadow-lg", _() && "transform-gpu", P())
      ],
      void 0,
      "svelte-17v0sh2"
    );
    var U = jd(), K = _e(U);
    {
      var D = (Y) => {
        var z = Ed(), p = i(z), h = i(p), oe = i(h), ue = u(h, 2), fe = i(ue), ve = u(p, 2), ae = i(ve);
        {
          var W = (te) => {
            const J = /* @__PURE__ */ Ee(() => t(B));
            var Z = Ae(), ee = _e(Z);
            {
              let se = /* @__PURE__ */ Ee(() => V(f.icon, t(j)));
              Tt(ee, () => t(J), (ne, de) => {
                de(ne, {
                  get class() {
                    return t(se);
                  },
                  strokeWidth: 2
                });
              });
            }
            o(te, Z);
          }, le = (te) => {
            var J = Ae(), Z = _e(J);
            {
              var ee = (se) => {
                {
                  let ne = /* @__PURE__ */ Ee(() => V(f.icon, G.icon));
                  wn(se, {
                    get class() {
                      return t(ne);
                    }
                  });
                }
              };
              b(
                Z,
                (se) => {
                  g() && e.metric.icon && se(ee);
                },
                !0
              );
            }
            o(te, J);
          };
          b(ae, (te) => {
            g() && d() && t(B) ? te(W) : te(le, !1);
          });
        }
        var re = u(ae, 2);
        {
          var S = (te) => {
            var J = Sd(), Z = i(J);
            E(
              (ee) => {
                L(J, 1, ee, "svelte-17v0sh2"), ie(Z, t(x).value);
              },
              [
                () => $(V("font-medium", f.change, t(j)))
              ]
            ), o(te, J);
          };
          b(re, (te) => {
            c() && t(x) && te(S);
          });
        }
        E(
          (te, J) => {
            L(h, 1, te, "svelte-17v0sh2"), ie(oe, e.metric.label), L(ue, 1, J, "svelte-17v0sh2"), ie(fe, t(Q));
          },
          [
            () => $(V("font-medium", f.label, G.label)),
            () => $(V("font-bold tracking-tight", f.value, G.value))
          ]
        ), o(Y, z);
      }, C = (Y) => {
        var z = Id(), p = i(z), h = i(p), oe = i(h), ue = u(h, 2);
        {
          var fe = (te) => {
            {
              let J = /* @__PURE__ */ Ee(() => V(f.icon, G.icon));
              wn(te, {
                get class() {
                  return t(J);
                }
              });
            }
          };
          b(ue, (te) => {
            g() && e.metric.icon && te(fe);
          });
        }
        var ve = u(p, 2), ae = i(ve), W = u(ve, 2);
        {
          var le = (te) => {
            var J = Ad(), Z = i(J);
            {
              var ee = (be) => {
                const ce = /* @__PURE__ */ Ee(() => t(B));
                var he = Ae(), Se = _e(he);
                {
                  let Be = /* @__PURE__ */ Ee(() => V("w-4 h-4", t(j)));
                  Tt(Se, () => t(ce), (Re, Ne) => {
                    Ne(Re, {
                      get class() {
                        return t(Be);
                      },
                      strokeWidth: 2
                    });
                  });
                }
                o(be, he);
              };
              b(Z, (be) => {
                d() && t(B) && be(ee);
              });
            }
            var se = u(Z, 2);
            {
              var ne = (be) => {
                var ce = Td(), he = i(ce);
                E(
                  (Se) => {
                    L(ce, 1, Se, "svelte-17v0sh2"), ie(he, t(x).value);
                  },
                  [
                    () => $(V("font-medium", f.change, t(j)))
                  ]
                ), o(be, ce);
              };
              b(se, (be) => {
                c() && t(x) && be(ne);
              });
            }
            var de = u(se, 2);
            {
              var Ce = (be) => {
                var ce = Md(), he = i(ce);
                E(
                  (Se) => {
                    L(ce, 1, Se, "svelte-17v0sh2"), ie(he, `from ${e.metric.previousValue ?? ""}`);
                  },
                  [
                    () => $(V("opacity-60", f.change, G.label))
                  ]
                ), o(be, ce);
              };
              b(de, (be) => {
                e.metric.previousValue && be(Ce);
              });
            }
            o(te, J);
          };
          b(W, (te) => {
            (d() && t(B) || c() && t(x)) && te(le);
          });
        }
        var re = u(W, 2);
        {
          var S = (te) => {
            var J = zd(), Z = i(J);
            E(
              (ee) => {
                L(J, 1, ee, "svelte-17v0sh2"), ie(Z, e.metric.description);
              },
              [
                () => $(V("opacity-70 leading-relaxed", f.change, G.label))
              ]
            ), o(te, J);
          };
          b(re, (te) => {
            e.metric.description && te(S);
          });
        }
        E(
          (te, J) => {
            L(h, 1, te, "svelte-17v0sh2"), ie(oe, e.metric.label), L(ve, 1, J, "svelte-17v0sh2"), ie(ae, t(Q));
          },
          [
            () => $(V("font-medium", f.label, G.label)),
            () => $(V("font-bold tracking-tight", f.value, G.value))
          ]
        ), o(Y, z);
      };
      b(K, (Y) => {
        l() === "horizontal" ? Y(D) : Y(C, !1);
      });
    }
    var k = u(K, 2);
    {
      var M = (Y) => {
        var z = Pd();
        o(Y, z);
      };
      b(k, (Y) => {
        N() && Y(M);
      });
    }
    var w = u(k, 2);
    {
      var q = (Y) => {
        var z = Ld();
        o(Y, z);
      };
      b(w, (Y) => {
        m() && Y(q);
      });
    }
    o(A, U);
  }), o(r, I), Ze();
}
function Rd(r, e, a) {
  e() && r.target === r.currentTarget && a();
}
var Nd = (
  // Store previously focused element
  // Focus first focusable element in modal
  // Prevent body scroll
  // Add escape listener
  // Restore body scroll
  // Remove escape listener
  // Restore focus
  // Track bundle size
  (r, e) => r.key === "Escape" && e()
), Od = /* @__PURE__ */ v('<div role="dialog" aria-modal="true" tabindex="0"><div><!></div></div>');
const qd = {
  hash: "svelte-6n99c3",
  code: `div[role='dialog'].svelte-6n99c3 {-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}

	@media (prefers-reduced-motion: reduce) {div.svelte-6n99c3 {transition:none;
			animation: none;}
	}`
};
function ap(r, e) {
  Ke(e, !0), Je(r, qd);
  const a = s(e, "open", 3, !1), n = s(e, "size", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "blur", 3, "xl"), c = s(e, "closeOnOutsideClick", 3, !0), g = s(e, "closeOnEscape", 3, !0), _ = s(e, "animate", 3, !0), N = s(e, "jelly", 3, !0), m = s(e, "glow", 3, !1), P = s(e, "breathing", 3, !1), R = s(e, "reduceMotion", 3, !1), T = s(e, "class", 3, ""), y = /* @__PURE__ */ vt(e, [
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
  let f = /* @__PURE__ */ ke(void 0), G = null;
  const Q = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4"
  }, x = {
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
  }, B = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = x[l()], O = V("fixed inset-0 z-50 flex items-center justify-center p-4", j.overlay, B[d()]), F = V("relative w-full p-6 backdrop-blur-xl border transition-all duration-300", "transform-gpu will-change-transform", "modal-radius-lg", Q[n()], j.bg, m() && j.glow, T());
  function H(k) {
    k.key === "Escape" && g() && (k.preventDefault(), A()), k.key === "Tab" && U(k);
  }
  function A() {
    e.onClose && e.onClose();
  }
  function U(k) {
    if (!t(f)) return;
    const M = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), w = M[0], q = M[M.length - 1];
    k.shiftKey ? document.activeElement === w && (q.focus(), k.preventDefault()) : document.activeElement === q && (w.focus(), k.preventDefault());
  }
  wt(() => (a() ? (G = document.activeElement, setTimeout(
    () => {
      if (t(f)) {
        const M = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])')[0];
        M && M.focus();
      }
    },
    100
  ), document.body.style.overflow = "hidden", document.addEventListener("keydown", H)) : (document.body.style.overflow = "", document.removeEventListener("keydown", H), G && G instanceof HTMLElement && G.focus()), () => {
    document.body.style.overflow = "", document.removeEventListener("keydown", H);
  })), wt(() => {
    $t("Modal", "medium");
  });
  var K = Ae(), D = _e(K);
  {
    var C = (k) => {
      var M = Od();
      M.__click = [Rd, c, A], M.__keydown = [Nd, A];
      var w = i(M);
      Qe(w, () => ({ class: F, ...y }), void 0, void 0, "svelte-6n99c3");
      var q = i(w);
      {
        var Y = (z) => {
          var p = Ae(), h = _e(p);
          st(h, () => e.children), o(z, p);
        };
        b(q, (z) => {
          e.children && z(Y);
        });
      }
      at(w, (z) => X(f, z), () => t(f)), De(w, (z, p) => It?.(z, p), () => ({
        enabled: N() && _() && !R(),
        scale: 1.001,
        duration: 300,
        borderRadius: "var(--radius-xl)"
      })), De(w, (z, p) => Rt?.(z, p), () => ({
        enabled: P() && _() && !R(),
        intensity: 0.01,
        speed: 4e3
      })), E(() => {
        L(M, 1, $(O), "svelte-6n99c3"), ye(M, "aria-labelledby", e["aria-labelledby"]), ye(M, "aria-describedby", e["aria-describedby"]);
      }), rt(1, w, () => Kt, () => ({
        scale: 0.8,
        duration: _() && !R() ? 400 : 0,
        delay: 100
      })), rt(2, w, () => Kt, () => ({
        scale: 0.95,
        duration: _() && !R() ? 200 : 0
      })), rt(1, M, () => mt, () => ({
        direction: "center",
        duration: _() && !R() ? 200 : 0
      })), rt(2, M, () => mt, () => ({
        direction: "center",
        duration: _() && !R() ? 150 : 0
      })), o(k, M);
    };
    b(D, (k) => {
      a() && k(C);
    });
  }
  o(r, K), Ze();
}
bt(["click", "keydown"]);
function Bd(r, e, a, n) {
  const l = r.target;
  X(e, l.value, !0), a("search", t(e)), X(
    n,
    -1
    // Reset focus when searching
  );
}
var Fd = (
  // Remove last selected item if search is empty
  // Update internal state when value prop changes
  // Click outside to close
  (r, e, a) => e(t(a).value, r)
), Hd = /* @__PURE__ */ v('<div><span class="truncate max-w-32"> </span> <button><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'), Vd = /* @__PURE__ */ v('<input role="searchbox" aria-label="Search options" aria-controls="multiselect-listbox"/>'), Gd = /* @__PURE__ */ v("<span> </span>"), Ud = /* @__PURE__ */ v("<div> </div>"), Yd = (r, e, a) => e(t(a)), Wd = (r, e, a) => r.key === "Enter" && e(t(a)), Xd = /* @__PURE__ */ v('<div class="text-xs opacity-70 mt-0.5"> </div>'), Kd = /* @__PURE__ */ nr('<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), Zd = /* @__PURE__ */ v('<div role="option" tabindex="0"><div class="flex items-center justify-between"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div></div>'), Qd = /* @__PURE__ */ v("<div> </div>"), Jd = /* @__PURE__ */ v('<div id="multiselect-listbox" role="listbox" aria-multiselectable="true" aria-label="Available options"><!> <!></div>'), $d = /* @__PURE__ */ v('<div><div class="flex flex-wrap gap-1.5 items-center"><!> <!></div> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <!> <div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only"> <!></div></div>');
const ec = {
  hash: "svelte-39ftoh",
  code: `
	/* Scrollbar styling for dropdown */.overflow-auto.svelte-39ftoh::-webkit-scrollbar {width:8px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-track {background:rgba(255, 255, 255, 0.05);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Terminal-specific glow effects */.terminal .multi-select:focus-within {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}`
};
function np(r, e) {
  Ke(e, !0), Je(r, ec);
  const a = s(e, "options", 19, () => []), n = s(e, "value", 19, () => []), l = s(e, "placeholder", 3, "Select items..."), d = s(e, "variant", 3, "default"), c = s(e, "size", 3, "md"), g = s(e, "disabled", 3, !1), _ = s(e, "error", 3, !1), N = s(e, "searchable", 3, !0), m = s(e, "chipVariant", 19, d), P = s(e, "closeOnSelect", 3, !1), R = s(e, "class", 3, ""), T = /* @__PURE__ */ vt(e, [
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
  ]), y = zt();
  let f, G = /* @__PURE__ */ ke(void 0), Q = /* @__PURE__ */ ke(void 0), x = /* @__PURE__ */ ke(!1), B = /* @__PURE__ */ ke(""), j = /* @__PURE__ */ ke(lt([...n()])), O = /* @__PURE__ */ ke(-1);
  const I = {
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
      container: `bg-black/80 border-${Le.terminal.green} focus-within:border-${Le.terminal.matrix}`,
      dropdown: `bg-black/95 border-${Le.terminal.green}`,
      option: `text-${Le.terminal.green}/70 hover:bg-${Le.terminal.green}/10 hover:text-${Le.terminal.green}`,
      selectedOption: `bg-${Le.terminal.green} text-black`,
      searchInput: `bg-transparent text-${Le.terminal.green} placeholder-${Le.terminal.green}/50`,
      chip: `bg-${Le.terminal.green}/20 text-${Le.terminal.green} hover:bg-${Le.terminal.green}/30 border border-${Le.terminal.green}/30`,
      chipClose: `text-${Le.terminal.green}/70 hover:text-${Le.terminal.green}`
    }
  }, F = {
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
  }, H = /* @__PURE__ */ Ee(() => I[d()]), A = /* @__PURE__ */ Ee(() => I[m()]), U = /* @__PURE__ */ Ee(() => F[c()]), K = /* @__PURE__ */ Ee(() => () => t(B) ? a().filter((ne) => ne.label.toLowerCase().includes(t(B).toLowerCase()) || ne.value.toLowerCase().includes(t(B).toLowerCase()) || ne.description?.toLowerCase().includes(t(B).toLowerCase())) : a()), D = /* @__PURE__ */ Ee(() => () => t(K).filter((ne) => !t(j).includes(ne.value))), C = /* @__PURE__ */ Ee(() => () => t(j).map((ne) => a().find((de) => de.value === ne)).filter(Boolean)), k = /* @__PURE__ */ Ee(() => () => e.maxSelections ? t(j).length >= e.maxSelections : !1);
  function M() {
    g() || t(x) || (X(x, !0), y("open"), setTimeout(
      () => {
        N() && t(G) && t(G).focus();
      },
      0
    ));
  }
  function w(ne) {
    ne.disabled || t(k) && !t(j).includes(ne.value) || (t(j).includes(ne.value) ? Y(ne.value) : q(ne.value), P() && !t(j).includes(ne.value) && (X(x, !1), y("close")));
  }
  function q(ne) {
    t(k) || (X(j, [...t(j), ne], !0), y("add", ne), y("change", t(j)), X(B, ""), y("search", t(B)));
  }
  function Y(ne) {
    X(j, t(j).filter((de) => de !== ne), !0), y("remove", ne), y("change", t(j));
  }
  function z(ne, de) {
    de.stopPropagation(), Y(ne);
  }
  function p(ne) {
    switch (ne.key) {
      case "Escape":
        X(x, !1), y("close");
        break;
      case "ArrowDown":
        ne.preventDefault(), t(x) ? X(O, Math.min(t(O) + 1, t(D).length - 1), !0) : (X(x, !0), y("open"));
        break;
      case "ArrowUp":
        ne.preventDefault(), X(O, Math.max(t(O) - 1, -1), !0);
        break;
      case "Enter":
        ne.preventDefault(), t(O) >= 0 && t(D)[t(O)] && w(t(D)[t(O)]);
        break;
      case "Backspace":
        t(B) === "" && t(j).length > 0 && Y(t(j)[t(j).length - 1]);
        break;
    }
  }
  wt(() => {
    X(j, [...n()], !0);
  }), kt(() => {
    function ne(de) {
      t(x) && f && !f.contains(de.target) && (X(x, !1), y("close"));
    }
    return document.addEventListener("click", ne), () => document.removeEventListener("click", ne);
  });
  const h = /* @__PURE__ */ Ee(() => V("relative w-full min-h-10 rounded-lg border transition-all duration-200", "cursor-text font-mono", t(H).container, t(U).container, _() && "border-red-500 focus-within:border-red-500", g() && "opacity-50 cursor-not-allowed", t(x) && "ring-2 ring-opacity-50", R()));
  var oe = $d();
  Qe(
    oe,
    () => ({
      class: t(h),
      onclick: M,
      onkeydown: p,
      role: "combobox",
      "aria-expanded": t(x),
      "aria-haspopup": "listbox",
      "aria-controls": "multiselect-listbox",
      "aria-label": l(),
      "aria-describedby": "multiselect-status",
      tabindex: g() ? -1 : 0,
      ...T
    }),
    void 0,
    void 0,
    "svelte-39ftoh"
  );
  var ue = i(oe), fe = i(ue);
  Ye(fe, 17, () => t(C), (ne) => ne.value, (ne, de) => {
    var Ce = Hd(), be = i(Ce), ce = i(be), he = u(be, 2);
    he.__click = [Fd, z, de], De(Ce, (Se, Be) => ft?.(Se, Be), () => ({ strength: 0.15 })), E(() => {
      L(
        Ce,
        1,
        `inline-flex items-center gap-1.5 rounded-md ${t(A).chip ?? ""} ${t(U).chip ?? ""} 
				       font-mono transition-all duration-200`,
        "svelte-39ftoh"
      ), ie(ce, t(de).label), L(
        he,
        1,
        `flex-shrink-0 rounded-full ${t(A).chipClose ?? ""} hover:bg-black/20
					       transition-colors p-0.5`,
        "svelte-39ftoh"
      ), ye(he, "aria-label", `Remove ${t(de).label ?? ""}`);
    }), rt(1, Ce, () => Kt, () => ({ duration: 200, bounce: !0 })), o(ne, Ce);
  });
  var ve = u(fe, 2);
  {
    var ae = (ne) => {
      var de = Vd();
      de.__input = [Bd, B, y, O], de.__keydown = p, at(de, (Ce) => X(G, Ce), () => t(G)), E(() => {
        ye(de, "placeholder", t(j).length === 0 ? l() : ""), L(de, 1, `flex-1 min-w-32 outline-none ${t(H).searchInput ?? ""} ${t(U).input ?? ""}`, "svelte-39ftoh"), de.disabled = g() || t(k);
      }), or(de, () => t(B), (Ce) => X(B, Ce)), o(ne, de);
    }, W = (ne) => {
      var de = Ae(), Ce = _e(de);
      {
        var be = (ce) => {
          var he = Gd(), Se = i(he);
          E(() => {
            L(he, 1, `text-gray-400 ${t(U).input ?? ""}`, "svelte-39ftoh"), ie(Se, l());
          }), o(ce, he);
        };
        b(
          Ce,
          (ce) => {
            t(j).length === 0 && ce(be);
          },
          !0
        );
      }
      o(ne, de);
    };
    b(ve, (ne) => {
      N() ? ne(ae) : ne(W, !1);
    });
  }
  var le = u(ue, 2), re = i(le), S = u(le, 2);
  {
    var te = (ne) => {
      var de = Jd(), Ce = i(de);
      {
        var be = (Be) => {
          var Re = Ud(), Ne = i(Re);
          E(() => {
            L(Re, 1, `px-4 py-3 text-center ${t(H).option ?? ""} font-mono`, "svelte-39ftoh"), ie(Ne, t(B) ? "No results found" : "No more options available");
          }), o(Be, Re);
        }, ce = (Be) => {
          var Re = Ae(), Ne = _e(Re);
          Ye(Ne, 19, () => t(D), (Me) => Me.value, (Me, xe, Pe) => {
            const Oe = /* @__PURE__ */ Ee(() => t(Pe) === t(O)), me = /* @__PURE__ */ Ee(() => t(j).includes(t(xe).value));
            var we = Zd();
            we.__click = [Yd, w, xe], we.__keydown = [Wd, w, xe];
            var ze = i(we), ge = i(ze), pe = i(ge), je = i(pe), Te = u(pe, 2);
            {
              var qe = (Ge) => {
                var Xe = Xd(), $e = i(Xe);
                E(() => ie($e, t(xe).description)), o(Ge, Xe);
              };
              b(Te, (Ge) => {
                t(xe).description && Ge(qe);
              });
            }
            var Fe = u(ge, 2);
            {
              var Ve = (Ge) => {
                var Xe = Kd();
                o(Ge, Xe);
              };
              b(Fe, (Ge) => {
                t(me) && Ge(Ve);
              });
            }
            De(we, (Ge, Xe) => ft?.(Ge, Xe), () => ({ enabled: !t(xe).disabled, strength: 0.1 })), E(() => {
              L(
                we,
                1,
                `cursor-pointer transition-all duration-150 ${t(U).option ?? ""}
						       ${(t(Oe) ? t(H).selectedOption : t(H).option) ?? ""}
						       ${t(xe).disabled ? "opacity-50 cursor-not-allowed" : ""}
						       font-mono border-b border-white/5 last:border-b-0`,
                "svelte-39ftoh"
              ), ye(we, "aria-selected", t(me)), ie(je, t(xe).label);
            }), o(Me, we);
          }), o(Be, Re);
        };
        b(Ce, (Be) => {
          t(D).length === 0 ? Be(be) : Be(ce, !1);
        });
      }
      var he = u(Ce, 2);
      {
        var Se = (Be) => {
          var Re = Qd(), Ne = i(Re);
          E(() => {
            L(Re, 1, `px-4 py-2 text-center text-xs ${t(H).option ?? ""} bg-yellow-500/10 border-t`, "svelte-39ftoh"), ie(Ne, `Maximum ${e.maxSelections ?? ""} selections reached`);
          }), o(Be, Re);
        };
        b(he, (Be) => {
          t(k) && Be(Se);
        });
      }
      at(de, (Be) => X(Q, Be), () => t(Q)), De(de, (Be, Re) => Ct?.(Be, Re), () => ({ blur: "lg", opacity: "medium" })), E(() => L(
        de,
        1,
        `absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl ${t(H).dropdown ?? ""}`,
        "svelte-39ftoh"
      )), rt(1, de, () => mt, () => ({ direction: "up", duration: 200 })), o(ne, de);
    };
    b(S, (ne) => {
      t(x) && ne(te);
    });
  }
  var J = u(S, 2), Z = i(J), ee = u(Z);
  {
    var se = (ne) => {
      var de = Et();
      E(() => ie(de, `out of maximum ${e.maxSelections ?? ""}`)), o(ne, de);
    };
    b(ee, (ne) => {
      e.maxSelections && ne(se);
    });
  }
  at(oe, (ne) => f = ne, () => f), De(oe, (ne, de) => Ct?.(ne, de), () => ({ blur: "sm", opacity: "light" })), De(oe, (ne, de) => ft?.(ne, de), () => ({ enabled: !g(), strength: 0.1 })), E(() => {
    L(
      re,
      0,
      `w-4 h-4 transition-transform duration-200 ${t(x) ? "rotate-180" : ""} 
			       ${t(H).option ?? ""}`,
      "svelte-39ftoh"
    ), ie(Z, `${t(j).length ?? ""} items selected `);
  }), o(r, oe), Ze();
}
bt(["click", "input", "keydown"]);
var tc = (r, e) => e(1), rc = /* @__PURE__ */ v('<button aria-label="Go to first page"><!></button>'), ac = (r, e, a) => e(a() - 1), nc = /* @__PURE__ */ v("<span>...</span>"), oc = (r, e, a) => e(t(a)), ic = /* @__PURE__ */ v("<button> </button>"), lc = (r, e, a) => e(a() + 1), sc = (r, e, a) => e(a.totalPages), dc = /* @__PURE__ */ v('<button aria-label="Go to last page"><!></button>'), cc = /* @__PURE__ */ v('<nav><!> <button aria-label="Go to previous page"><!></button> <!> <button aria-label="Go to next page"><!></button> <!></nav>');
function op(r, e) {
  Ke(e, !0);
  let a = s(e, "currentPage", 15, 1), n = s(e, "siblingCount", 3, 1), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md");
  s(e, "animated", 3, !0);
  let c = s(e, "glow", 3, !1), g = s(e, "jelly", 3, !0), _ = s(e, "showFirstLast", 3, !0), N = s(e, "class", 3, ""), m = /* @__PURE__ */ vt(e, [
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
  }, R = {
    sm: { button: "h-8 min-w-8 px-2 text-xs", icon: 14, gap: "gap-1" },
    md: { button: "h-10 min-w-10 px-3 text-sm", icon: 16, gap: "gap-2" },
    lg: {
      button: "h-12 min-w-12 px-4 text-base",
      icon: 20,
      gap: "gap-3"
    }
  }, T = () => {
    if (n() * 2 + 5 >= e.totalPages)
      return Array.from({ length: e.totalPages }, (q, Y) => Y + 1);
    const C = Math.max(a() - n(), 1), k = Math.min(a() + n(), e.totalPages), M = C > 2, w = k < e.totalPages - 1;
    if (!M && w) {
      const q = 3 + 2 * n();
      return [...Array.from({ length: q }, (z, p) => p + 1), "...", e.totalPages];
    }
    if (M && !w) {
      const q = 3 + 2 * n();
      return [1, "...", ...Array.from({ length: q }, (z, p) => e.totalPages - q + p + 1)];
    }
    return M && w ? [1, "...", ...Array.from({ length: k - C + 1 }, (Y, z) => C + z), "...", e.totalPages] : [];
  }, y = (D) => {
    D < 1 || D > e.totalPages || D === a() || (a(D), e.onchange?.(D));
  }, f = P[l()], G = R[d()], Q = /* @__PURE__ */ Ee(T);
  var x = cc();
  Qe(x, (D) => ({ class: D, "aria-label": "Pagination", ...m }), [
    () => V("inline-flex items-center backdrop-blur-xl border rounded-2xl p-2", G.gap, f.container, N())
  ]);
  var B = i(x);
  {
    var j = (D) => {
      var C = rc();
      C.__click = [tc, y];
      var k = i(C);
      bi(k, {
        get size() {
          return G.icon;
        }
      }), De(C, (M, w) => jellyHover?.(M, w), () => ({
        enabled: g() && a() !== 1,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), E(
        (M) => {
          C.disabled = a() === 1, L(C, 1, M);
        },
        [
          () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(D, C);
    };
    b(B, (D) => {
      _() && D(j);
    });
  }
  var O = u(B, 2);
  O.__click = [ac, y, a];
  var I = i(O);
  ca(I, {
    get size() {
      return G.icon;
    }
  }), De(O, (D, C) => jellyHover?.(D, C), () => ({
    enabled: g() && a() !== 1,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var F = u(O, 2);
  Ye(F, 17, () => t(Q), ut, (D, C) => {
    var k = Ae(), M = _e(k);
    {
      var w = (Y) => {
        var z = nc();
        E((p) => L(z, 1, p), [
          () => $(V("flex items-center justify-center", G.button, "opacity-50"))
        ]), o(Y, z);
      }, q = (Y) => {
        var z = ic();
        z.__click = [oc, y, C];
        var p = i(z);
        De(z, (h, oe) => jellyHover?.(h, oe), () => ({
          enabled: g() && t(C) !== a(),
          scale: 1.05,
          duration: 200,
          borderRadius: "8px"
        })), E(
          (h) => {
            L(z, 1, h), ye(z, "aria-label", `Go to page ${t(C)}`), ye(z, "aria-current", t(C) === a() ? "page" : void 0), ie(p, t(C));
          },
          [
            () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200 font-medium", G.button, t(C) === a() ? f.active : f.button, t(C) === a() && c() && f.glow, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]
        ), o(Y, z);
      };
      b(M, (Y) => {
        t(C) === "..." ? Y(w) : Y(q, !1);
      });
    }
    o(D, k);
  });
  var H = u(F, 2);
  H.__click = [lc, y, a];
  var A = i(H);
  Or(A, {
    get size() {
      return G.icon;
    }
  }), De(H, (D, C) => jellyHover?.(D, C), () => ({
    enabled: g() && a() !== e.totalPages,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var U = u(H, 2);
  {
    var K = (D) => {
      var C = dc();
      C.__click = [sc, y, e];
      var k = i(C);
      gi(k, {
        get size() {
          return G.icon;
        }
      }), De(C, (M, w) => jellyHover?.(M, w), () => ({
        enabled: g() && a() !== e.totalPages,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), E(
        (M) => {
          C.disabled = a() === e.totalPages, L(C, 1, M);
        },
        [
          () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(D, C);
    };
    b(U, (D) => {
      _() && D(K);
    });
  }
  E(
    (D, C) => {
      O.disabled = a() === 1, L(O, 1, D), H.disabled = a() === e.totalPages, L(H, 1, C);
    },
    [
      () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20")),
      () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
    ]
  ), o(r, x), Ze();
}
bt(["click"]);
var vc = /* @__PURE__ */ v("<span><!></span>"), uc = /* @__PURE__ */ v('<div class="flex justify-between items-center svelte-b8e192"><label class="text-sm font-medium text-white svelte-b8e192"> </label> <!></div>'), fc = /* @__PURE__ */ v('<div role="progressbar" aria-valuemin="0"><div></div></div>'), bc = /* @__PURE__ */ v("<div><!></div>"), gc = /* @__PURE__ */ v('<div role="progressbar" aria-valuemin="0"><svg class="transform -rotate-90 svelte-b8e192"><circle stroke="currentColor" fill="transparent" class="text-white/10 svelte-b8e192"></circle><circle stroke="currentColor" fill="transparent" stroke-linecap="round"></circle></svg> <!></div>'), mc = /* @__PURE__ */ v("<div><!> <!></div>");
const hc = {
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
function ip(r, e) {
  Ke(e, !0), Je(r, hc);
  const a = s(e, "value", 3, 0), n = s(e, "max", 3, 100), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "type", 3, "linear"), g = s(e, "blur", 3, "md"), _ = s(e, "showValue", 3, !1), N = s(e, "showPercentage", 3, !1), m = s(e, "indeterminate", 3, !1), P = s(e, "animate", 3, !0), R = s(e, "reduceMotion", 3, !1), T = s(e, "class", 3, ""), y = /* @__PURE__ */ vt(e, [
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
  ]), f = `progress-${Math.random().toString(36).substr(2, 9)}`, G = /* @__PURE__ */ Ee(() => m() ? 0 : Math.min(100, Math.max(0, a() / n() * 100))), Q = {
    sm: { linear: "h-1", circular: "w-8 h-8", text: "text-xs" },
    md: { linear: "h-2", circular: "w-12 h-12", text: "text-sm" },
    lg: { linear: "h-3", circular: "w-16 h-16", text: "text-base" }
  }, x = {
    default: { track: "bg-white/10", fill: "bg-blue-500" },
    glass: {
      track: "glass-subtle",
      fill: "bg-blue-500/80 backdrop-blur-sm"
    },
    terminal: { track: "bg-terminal-green/20", fill: "bg-terminal-green" }
  }, B = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = V("relative overflow-hidden rounded-full", Q[l()][c()], x[d()].track, d() === "glass" && B[g()]), O = V("h-full transition-all duration-500 ease-out rounded-full", x[d()].fill, m() && "animate-pulse"), I = c() === "circular" ? parseInt(Q[l()].circular.split(" ")[0].slice(2)) * 4 : 0, F = Math.max(2, I / 8), H = (I - F) / 2, A = 2 * Math.PI * H, U = A, K = /* @__PURE__ */ Ee(() => A - t(G) / 100 * A);
  wt(() => {
    $t("Progress", "small");
  });
  var D = mc();
  Qe(D, () => ({ class: "w-full space-y-2", ...y }), void 0, void 0, "svelte-b8e192");
  var C = i(D);
  {
    var k = (Y) => {
      var z = uc(), p = i(z), h = i(p), oe = u(p, 2);
      {
        var ue = (fe) => {
          var ve = vc(), ae = i(ve);
          {
            var W = (re) => {
              var S = Et();
              E((te) => ie(S, `${te ?? ""}%`), [() => t(G).toFixed(0)]), o(re, S);
            }, le = (re) => {
              var S = Ae(), te = _e(S);
              {
                var J = (Z) => {
                  var ee = Et();
                  E(() => ie(ee, `${a() ?? ""}/${n() ?? ""}`)), o(Z, ee);
                };
                b(
                  te,
                  (Z) => {
                    _() && Z(J);
                  },
                  !0
                );
              }
              o(re, S);
            };
            b(ae, (re) => {
              N() ? re(W) : re(le, !1);
            });
          }
          E((re) => L(ve, 1, re, "svelte-b8e192"), [
            () => $(V("font-medium text-white/80", Q[l()].text))
          ]), o(fe, ve);
        };
        b(oe, (fe) => {
          (_() || N()) && fe(ue);
        });
      }
      E(() => {
        ye(p, "id", `progress-label-${f}`), ye(p, "for", `progress-${f}`), ie(h, e.label);
      }), o(Y, z);
    };
    b(C, (Y) => {
      e.label && Y(k);
    });
  }
  var M = u(C, 2);
  {
    var w = (Y) => {
      var z = fc(), p = i(z);
      let h;
      De(p, (oe, ue) => Ct?.(oe, ue), () => P() && !R() ? { blur: g(), opacity: "subtle" } : void 0), E(
        (oe, ue) => {
          ye(z, "id", `progress-${f}`), L(z, 1, oe, "svelte-b8e192"), ye(z, "aria-valuemax", n()), ye(z, "aria-valuenow", m() ? void 0 : a()), ye(z, "aria-label", e.label ? void 0 : "Progress"), ye(z, "aria-labelledby", e.label ? `progress-label-${f}` : void 0), L(p, 1, $(O), "svelte-b8e192"), h = pt(p, "", h, ue);
        },
        [
          () => $(V(j, T())),
          () => ({
            width: m() ? "30%" : `${t(G)}%`,
            animation: m() && !R() ? "progress-indeterminate 2s ease-in-out infinite" : void 0
          })
        ]
      ), o(Y, z);
    }, q = (Y) => {
      var z = gc(), p = i(z), h = i(p), oe = u(h);
      let ue;
      var fe = u(p, 2);
      {
        var ve = (ae) => {
          var W = bc(), le = i(W);
          {
            var re = (te) => {
              var J = Et();
              E((Z) => ie(J, `${Z ?? ""}%`), [() => t(G).toFixed(0)]), o(te, J);
            }, S = (te) => {
              var J = Ae(), Z = _e(J);
              {
                var ee = (se) => {
                  var ne = Et();
                  E(() => ie(ne, a())), o(se, ne);
                };
                b(
                  Z,
                  (se) => {
                    _() && se(ee);
                  },
                  !0
                );
              }
              o(te, J);
            };
            b(le, (te) => {
              N() ? te(re) : te(S, !1);
            });
          }
          E((te) => L(W, 1, te, "svelte-b8e192"), [
            () => $(V("absolute inset-0 flex items-center justify-center font-medium text-white", Q[l()].text))
          ]), o(ae, W);
        };
        b(fe, (ae) => {
          (_() || N()) && ae(ve);
        });
      }
      E(
        (ae, W) => {
          L(z, 1, ae, "svelte-b8e192"), ye(z, "aria-valuemax", n()), ye(z, "aria-valuenow", m() ? void 0 : a()), ye(z, "aria-label", e.label || "Progress"), ye(p, "width", I), ye(p, "height", I), ye(h, "cx", I / 2), ye(h, "cy", I / 2), ye(h, "r", H), ye(h, "stroke-width", F), ye(oe, "cx", I / 2), ye(oe, "cy", I / 2), ye(oe, "r", H), ye(oe, "stroke-width", F), ye(oe, "stroke-dasharray", U), ye(oe, "stroke-dashoffset", m() ? U * 0.75 : t(K)), ue = L(oe, 0, "text-blue-500 transition-all duration-500 ease-out svelte-b8e192", null, ue, W);
        },
        [
          () => $(V("relative inline-flex items-center justify-center", Q[l()].circular, T())),
          () => ({ "animate-spin": m() && !R() })
        ]
      ), o(Y, z);
    };
    b(M, (Y) => {
      c() === "linear" ? Y(w) : Y(q, !1);
    });
  }
  o(r, D), Ze();
}
var pc = (r, e, a) => !t(e).disabled && a(t(e).value), xc = /* @__PURE__ */ v("<div></div>"), wc = /* @__PURE__ */ v("<span> </span>"), _c = /* @__PURE__ */ v('<label><input type="radio" class="sr-only svelte-mbuql4"/> <div><!></div> <div class="flex flex-col svelte-mbuql4"><span> </span> <!></div></label>'), yc = /* @__PURE__ */ v('<p class="text-red-400 text-sm mt-2 animate-pulse svelte-mbuql4"> </p>'), kc = /* @__PURE__ */ v("<div><!> <!></div>");
const Cc = {
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
function lp(r, e) {
  Ke(e, !0), Je(r, Cc);
  let a = s(e, "value", 15), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "orientation", 3, "vertical"), c = s(e, "animated", 3, !0), g = s(e, "glow", 3, !1), _ = s(e, "jelly", 3, !0), N = s(e, "class", 3, ""), m = /* @__PURE__ */ vt(e, [
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
  const P = (j) => {
    a(j), e.onchange?.(j);
  }, R = {
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
  }, T = {
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
  }, y = R[n()], f = T[l()];
  var G = kc();
  Qe(
    G,
    (j) => ({ class: j, ...m }),
    [
      () => V("relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300", y.container, d() === "horizontal" ? "inline-flex flex-row gap-6" : "flex flex-col gap-3", e.error && "border-red-500/50", N())
    ],
    void 0,
    "svelte-mbuql4"
  );
  var Q = i(G);
  Ye(Q, 17, () => e.options, ut, (j, O) => {
    var I = _c(), F = i(I);
    F.__change = [pc, O, P];
    var H = u(F, 2), A = i(H);
    {
      var U = (w) => {
        var q = xc();
        E((Y) => L(q, 1, Y, "svelte-mbuql4"), [
          () => $(V("rounded-full bg-white transition-all duration-300", f.dot, c() && "animate-pulse"))
        ]), o(w, q);
      };
      b(A, (w) => {
        a() === t(O).value && w(U);
      });
    }
    De(H, (w, q) => Rt?.(w, q), () => ({
      enabled: c() && a() === t(O).value,
      intensity: 0.05,
      speed: 2e3
    }));
    var K = u(H, 2), D = i(K), C = i(D), k = u(D, 2);
    {
      var M = (w) => {
        var q = wc(), Y = i(q);
        E(
          (z) => {
            L(q, 1, z, "svelte-mbuql4"), ie(Y, t(O).description);
          },
          [
            () => $(V("text-xs opacity-60 mt-0.5", y.label))
          ]
        ), o(w, q);
      };
      b(k, (w) => {
        t(O).description && w(M);
      });
    }
    De(I, (w, q) => jellyHover?.(w, q), () => ({
      enabled: _() && !t(O).disabled,
      scale: 1.02,
      duration: 200,
      borderRadius: "16px"
    })), E(
      (w, q, Y) => {
        L(I, 1, w, "svelte-mbuql4"), ye(F, "name", e.name), Vo(F, t(O).value), Qt(F, a() === t(O).value), F.disabled = t(O).disabled, L(H, 1, q, "svelte-mbuql4"), L(D, 1, Y, "svelte-mbuql4"), ie(C, t(O).label);
      },
      [
        () => $(V("relative flex items-center cursor-pointer group", f.gap, t(O).disabled && "opacity-50 cursor-not-allowed")),
        () => $(V("relative rounded-full border-2 transition-all duration-300 flex items-center justify-center", f.radio, y.radio, a() === t(O).value && y.checked, a() === t(O).value && g() && y.glow, c() && "transform-gpu will-change-transform", !t(O).disabled && "group-hover:scale-110")),
        () => $(V("font-medium transition-colors duration-200", f.label, y.label, !t(O).disabled && "group-hover:text-white"))
      ]
    ), o(j, I);
  });
  var x = u(Q, 2);
  {
    var B = (j) => {
      var O = yc(), I = i(O);
      E(() => ie(I, e.error)), o(j, O);
    };
    b(x, (j) => {
      e.error && j(B);
    });
  }
  o(r, G), Ze();
}
bt(["change"]);
var Sc = /* @__PURE__ */ v('<label class="block text-sm font-medium text-white/80 mb-2 svelte-c6qw7v"> </label>'), Ec = (r, e, a) => e(t(a)), Tc = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, Mc = /* @__PURE__ */ v('<li role="option" tabindex="-1"> </li>'), Ac = /* @__PURE__ */ v('<ul role="listbox"></ul>'), zc = /* @__PURE__ */ v('<!> <div><span class="truncate svelte-c6qw7v"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-c6qw7v"></path></svg></div> <!>', 1);
const Ic = {
  hash: "svelte-c6qw7v",
  code: `div[role='combobox'].svelte-c6qw7v {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-c6qw7v {transition:none;
			animation: none;}
	}`
};
function sp(r, e) {
  Ke(e, !0), Je(r, Ic);
  let a = s(e, "options", 19, () => []), n = s(e, "value", 7, ""), l = s(e, "placeholder", 3, "Select an option..."), d = s(e, "disabled", 3, !1), c = s(e, "size", 3, "md"), g = s(e, "variant", 3, "glass"), _ = s(e, "blur", 3, "md"), N = s(e, "animate", 3, !0), m = s(e, "liquid", 3, !1), P = s(e, "magnetic", 3, !1), R = s(e, "jelly", 3, !1), T = s(e, "glow", 3, !1), y = s(e, "reduceMotion", 3, !1), f = s(e, "label", 3, ""), G = s(e, "class", 3, ""), Q = /* @__PURE__ */ vt(e, [
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
  ]), x = /* @__PURE__ */ ke(!1), B = /* @__PURE__ */ ke(void 0), j = /* @__PURE__ */ ke(void 0), O = /* @__PURE__ */ ke(-1);
  const I = `select-${Math.random().toString(36).substr(2, 9)}`, F = f() ? `${I}-label` : void 0, H = `${I}-listbox`, A = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
  }, U = {
    default: "bg-white/5 border border-white/10 text-white",
    glass: "glass-subtle border border-white/20 text-white",
    terminal: "terminal text-green-300",
    liquid: "bg-gradient-to-r from-white/5 to-white/15 border border-white/20 text-white backdrop-blur-md"
  }, K = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, D = /* @__PURE__ */ Ee(() => a().find((J) => J.value === n())), C = V("relative flex items-center justify-between rounded-brand-md cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "transition-all duration-200", A[c()], U[g()], g() === "glass" && K[_()], m() && "backdrop-blur-md hover:backdrop-blur-lg", T() && "focus:shadow-lg focus:shadow-brand-primary/20", R() && !d() && "hover:scale-105 active:scale-95", d() && "opacity-50 cursor-not-allowed", G()), k = V("absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg", "max-h-60 overflow-auto", U[g()], g() === "glass" && `${K[_()]} border border-white/20`);
  function M(J) {
    if (!d())
      switch (J.key) {
        case "Enter":
        case " ":
          J.preventDefault(), t(x) && t(O) >= 0 ? p(a()[t(O)]) : q();
          break;
        case "Escape":
          t(x) && (J.preventDefault(), z());
          break;
        case "ArrowDown":
          J.preventDefault(), t(x) ? w(1) : Y();
          break;
        case "ArrowUp":
          J.preventDefault(), t(x) ? w(-1) : Y();
          break;
        case "Home":
          t(x) && (J.preventDefault(), X(O, 0));
          break;
        case "End":
          t(x) && (J.preventDefault(), X(O, a().length - 1));
          break;
      }
  }
  function w(J) {
    const Z = a().filter((se) => !se.disabled);
    if (Z.length === 0) return;
    let ee = t(O) + J;
    ee < 0 ? ee = Z.length - 1 : ee >= Z.length && (ee = 0), X(O, a().findIndex((se) => se === Z[ee]), !0);
  }
  function q() {
    d() || (X(x, !t(x)), t(x) && X(
      O,
      n() ? a().findIndex((J) => J.value === n()) : -1,
      !0
    ));
  }
  function Y() {
    d() || (X(x, !0), X(
      O,
      n() ? a().findIndex((J) => J.value === n()) : -1,
      !0
    ));
  }
  function z() {
    X(x, !1), X(O, -1);
  }
  function p(J) {
    J.disabled || (n(J.value), e.onValueChange?.(J.value), z());
  }
  function h(J) {
    t(B) && !t(B).contains(J.target) && z();
  }
  wt(() => {
    if (t(x))
      return document.addEventListener("click", h), () => document.removeEventListener("click", h);
  }), wt(() => {
    $t("Select", "medium");
  });
  var oe = zc(), ue = _e(oe);
  {
    var fe = (J) => {
      var Z = Sc(), ee = i(Z);
      E(() => {
        ye(Z, "id", F), ye(Z, "for", I), ie(ee, f());
      }), o(J, Z);
    };
    b(ue, (J) => {
      f() && J(fe);
    });
  }
  var ve = u(ue, 2);
  Qe(
    ve,
    () => ({
      id: I,
      class: C,
      role: "combobox",
      "aria-expanded": t(x),
      "aria-haspopup": "listbox",
      "aria-labelledby": F || e["aria-label"],
      "aria-activedescendant": t(O) > -1 ? `${I}-option-${t(O)}` : void 0,
      tabindex: d() ? -1 : 0,
      onkeydown: M,
      onclick: q,
      ...Q
    }),
    void 0,
    void 0,
    "svelte-c6qw7v"
  );
  var ae = i(ve), W = i(ae), le = u(ae, 2);
  let re;
  at(ve, (J) => X(B, J), () => t(B)), De(ve, (J, Z) => ft?.(J, Z), () => P() && !d() && !y() ? { strength: 0.1, distance: 40 } : void 0), De(ve, (J, Z) => ft?.(J, Z), () => R() && !d() && !y() ? { strength: 0.08 } : void 0);
  var S = u(ve, 2);
  {
    var te = (J) => {
      var Z = Ac();
      Ye(Z, 21, a, ut, (ee, se, ne) => {
        var de = Mc();
        de.__click = [Ec, p, se], de.__keydown = [Tc, p, se];
        var Ce = i(de);
        E(
          (be) => {
            ye(de, "id", `${I}-option-${ne}`), L(de, 1, be, "svelte-c6qw7v"), ye(de, "aria-selected", n() === t(se).value), ye(de, "aria-disabled", t(se).disabled), ie(Ce, t(se).label);
          },
          [
            () => $(V("px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10", t(O) === ne && "bg-white/20", t(se).disabled && "opacity-50 cursor-not-allowed"))
          ]
        ), Bt("mouseenter", de, () => !t(se).disabled && X(O, ne, !0)), o(ee, de);
      }), at(Z, (ee) => X(j, ee), () => t(j)), E(() => {
        L(Z, 1, $(k), "svelte-c6qw7v"), ye(Z, "id", H), ye(Z, "aria-labelledby", F || e["aria-label"]);
      }), rt(1, Z, () => mt, () => ({
        direction: "down",
        distance: 10,
        duration: N() && !y() ? 150 : 0
      })), rt(2, Z, () => mt, () => ({
        direction: "up",
        distance: 10,
        duration: N() && !y() ? 100 : 0
      })), o(J, Z);
    };
    b(S, (J) => {
      t(x) && J(te);
    });
  }
  E(
    (J) => {
      ie(W, t(D)?.label || l()), re = L(le, 0, "w-4 h-4 ml-2 transition-transform duration-200 svelte-c6qw7v", null, re, J);
    },
    [() => ({ "rotate-180": t(x) })]
  ), o(r, oe), Ze();
}
bt(["click", "keydown"]);
function Pc(r, e, a, n, l, d, c) {
  if (!e())
    switch (r.key) {
      case "Enter":
        r.preventDefault(), t(a) && t(n) >= 0 && t(l)[t(n)] ? d(t(l)[t(n)]) : t(a) || c();
        break;
      case "Escape":
        t(a) && (X(a, !1), r.stopPropagation());
        break;
      case "ArrowDown":
        r.preventDefault(), t(a) ? X(n, Math.min(t(n) + 1, t(l).length - 1), !0) : c();
        break;
      case "ArrowUp":
        r.preventDefault(), t(a) && X(n, Math.max(t(n) - 1, -1), !0);
        break;
      case "Tab":
        t(a) && X(a, !1);
        break;
    }
}
var Lc = (
  // Reset highlighted index when options change
  (r, e, a) => {
    r.stopPropagation(), e(t(a).value);
  }
), jc = /* @__PURE__ */ v('<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md"> <button class="hover:text-red-300"><!></button></span>'), Dc = /* @__PURE__ */ v('<span class="text-xs opacity-70"> </span>'), Rc = /* @__PURE__ */ v('<div class="flex flex-wrap gap-1"><!> <!></div>'), Nc = /* @__PURE__ */ v("<span> </span>"), Oc = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>'), qc = (r, e) => {
  r.stopPropagation(), e();
}, Bc = /* @__PURE__ */ v('<button class="p-1 hover:bg-white/10 rounded transition-colors"><!></button>'), Fc = /* @__PURE__ */ v('<div class="p-2 border-b border-white/10"><div class="relative"><!> <input placeholder="Search options..." autocomplete="off"/></div></div>'), Hc = /* @__PURE__ */ v("<div> </div>"), Vc = /* @__PURE__ */ v('<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5"> </div>'), Gc = (r, e, a) => e(t(a)), Uc = (r, e, a) => r.key === "Enter" && e(t(a)), Yc = /* @__PURE__ */ v('<div class="text-xs opacity-60 mt-0.5"> </div>'), Wc = /* @__PURE__ */ v("<div><!></div>"), Xc = /* @__PURE__ */ v('<div role="option"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div>'), Kc = /* @__PURE__ */ v("<!> <!>", 1), Zc = /* @__PURE__ */ v('<div><!> <div class="overflow-y-auto max-h-48 svelte-8h6s2s" role="listbox"><!></div></div>'), Qc = /* @__PURE__ */ v('<p class="text-red-400 text-sm mt-1" role="alert"> </p>'), Jc = /* @__PURE__ */ v('<div><div role="combobox" aria-haspopup="listbox"><div class="flex-1 truncate"><!></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!></div>');
const $c = {
  hash: "svelte-8h6s2s",
  code: `
	/* Custom scrollbar for dropdown */.overflow-y-auto.svelte-8h6s2s {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-8h6s2s::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-8h6s2s::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-8h6s2s::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-8h6s2s::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}`
};
function dp(r, e) {
  Ke(e, !0), Je(r, $c);
  let a = s(e, "value", 15), n = s(e, "placeholder", 3, "Select an option..."), l = s(e, "multiple", 3, !1), d = s(e, "searchable", 3, !1), c = s(e, "clearable", 3, !1), g = s(e, "disabled", 3, !1), _ = s(e, "loading", 3, !1), N = s(e, "size", 3, "md"), m = s(e, "variant", 3, "glass");
  s(e, "createOption", 3, !1), s(e, "virtualScroll", 3, !1);
  let P = s(e, "closeOnSelect", 3, !0), R = s(e, "class", 3, ""), T = /* @__PURE__ */ vt(e, [
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
  const y = zt();
  let f = /* @__PURE__ */ ke(!1), G = /* @__PURE__ */ ke(""), Q, x = /* @__PURE__ */ ke(void 0), B = /* @__PURE__ */ ke(void 0), j = /* @__PURE__ */ ke(-1);
  const O = `select-${Math.random().toString(36).substr(2, 9)}`, I = /* @__PURE__ */ Ee(() => () => a() ? Array.isArray(a()) ? a() : [a()] : []), F = /* @__PURE__ */ Ee(() => () => {
    if (!t(G).trim()) return e.options;
    const ee = t(G).toLowerCase();
    return e.options.filter((se) => se.label.toLowerCase().includes(ee) || se.description?.toLowerCase().includes(ee));
  }), H = /* @__PURE__ */ Ee(() => () => {
    if (!e.groupBy) return { "": t(F) };
    const ee = {};
    return t(F).forEach((se) => {
      const ne = se.group || "";
      ee[ne] || (ee[ne] = []), ee[ne].push(se);
    }), ee;
  }), A = /* @__PURE__ */ Ee(() => () => t(I).length ? l() ? t(I).length === 1 ? e.options.find((ne) => ne.value === t(I)[0])?.label || "" : `${t(I).length} selected` : e.options.find((se) => se.value === t(I)[0])?.label || "" : n()), U = {
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
  }, K = {
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
  }, D = U[N()], C = K[m()];
  function k() {
    g() || (X(f, !t(f)), t(f) && d() && setTimeout(() => t(B)?.focus(), 0));
  }
  function M(ee) {
    if (!ee.disabled) {
      if (l()) {
        const se = t(I);
        if (se.includes(ee.value))
          a(se.filter((de) => de !== ee.value));
        else {
          if (e.maxSelections && se.length >= e.maxSelections) return;
          a([...se, ee.value]);
        }
      } else
        a(ee.value), P() && X(f, !1);
      y("change", { value: a(), option: ee });
    }
  }
  function w() {
    a(l() ? [] : void 0), y("clear");
  }
  function q(ee) {
    if (!l()) return;
    const se = t(I);
    a(se.filter((ne) => ne !== ee));
  }
  function Y(ee) {
    Q && !Q.contains(ee.target) && X(f, !1);
  }
  kt(() => (document.addEventListener("click", Y), () => document.removeEventListener("click", Y))), wt(() => {
    t(F) && X(j, -1);
  });
  var z = Jc();
  Qe(z, (ee) => ({ class: ee, ...T }), [() => V("relative w-full", R())], void 0, "svelte-8h6s2s");
  var p = i(z);
  p.__click = k, p.__keydown = [
    Pc,
    g,
    f,
    j,
    F,
    M,
    k
  ];
  var h = i(p), oe = i(h);
  {
    var ue = (ee) => {
      var se = Rc(), ne = i(se);
      Ye(ne, 17, () => t(I).slice(0, 2), ut, (be, ce) => {
        const he = /* @__PURE__ */ Ee(() => e.options.find((Ne) => Ne.value === t(ce)));
        var Se = Ae(), Be = _e(Se);
        {
          var Re = (Ne) => {
            var Me = jc(), xe = i(Me), Pe = u(xe);
            Pe.__click = [Lc, q, he];
            var Oe = i(Pe);
            da(Oe, { size: 12 }), E(() => ie(xe, `${t(he).label ?? ""} `)), o(Ne, Me);
          };
          b(Be, (Ne) => {
            t(he) && Ne(Re);
          });
        }
        o(be, Se);
      });
      var de = u(ne, 2);
      {
        var Ce = (be) => {
          var ce = Dc(), he = i(ce);
          E(() => ie(he, `+${t(I).length - 2} more`)), o(be, ce);
        };
        b(de, (be) => {
          t(I).length > 2 && be(Ce);
        });
      }
      o(ee, se);
    }, fe = (ee) => {
      var se = Nc(), ne = i(se);
      E(
        (de) => {
          L(se, 1, de, "svelte-8h6s2s"), ie(ne, t(A));
        },
        [
          () => $(V(!t(I).length && "opacity-60"))
        ]
      ), o(ee, se);
    };
    b(oe, (ee) => {
      l() && t(I).length > 1 ? ee(ue) : ee(fe, !1);
    });
  }
  var ve = u(h, 2), ae = i(ve);
  {
    var W = (ee) => {
      var se = Oc();
      o(ee, se);
    }, le = (ee) => {
      var se = Ae(), ne = _e(se);
      {
        var de = (Ce) => {
          var be = Bc();
          be.__click = [qc, w];
          var ce = i(be);
          da(ce, { size: 16 }), o(Ce, be);
        };
        b(
          ne,
          (Ce) => {
            c() && t(I).length > 0 && Ce(de);
          },
          !0
        );
      }
      o(ee, se);
    };
    b(ae, (ee) => {
      _() ? ee(W) : ee(le, !1);
    });
  }
  var re = u(ae, 2);
  {
    let ee = /* @__PURE__ */ Ee(() => V("transition-transform duration-200", t(f) && "rotate-180"));
    Kr(re, {
      size: 16,
      get class() {
        return t(ee);
      }
    });
  }
  var S = u(p, 2);
  {
    var te = (ee) => {
      var se = Zc(), ne = i(se);
      {
        var de = (Se) => {
          var Be = Fc(), Re = i(Be), Ne = i(Re);
          Kn(Ne, {
            size: 16,
            class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
          });
          var Me = u(Ne, 2);
          at(Me, (xe) => X(B, xe), () => t(B)), E((xe) => L(Me, 1, xe, "svelte-8h6s2s"), [
            () => $(V("w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50", C.search))
          ]), or(Me, () => t(G), (xe) => X(G, xe)), o(Se, Be);
        };
        b(ne, (Se) => {
          d() && Se(de);
        });
      }
      var Ce = u(ne, 2), be = i(Ce);
      {
        var ce = (Se) => {
          var Be = Hc(), Re = i(Be);
          E(
            (Ne) => {
              L(Be, 1, Ne, "svelte-8h6s2s"), ie(Re, t(G) ? "No options found" : "No options available");
            },
            [
              () => $(V("text-center py-4 opacity-60", D.option))
            ]
          ), o(Se, Be);
        }, he = (Se) => {
          var Be = Ae(), Re = _e(Be);
          Ye(Re, 17, () => Object.entries(t(H)), ut, (Ne, Me) => {
            var xe = /* @__PURE__ */ Ee(() => Zr(t(Me), 2));
            let Pe = () => t(xe)[0], Oe = () => t(xe)[1];
            var me = Kc(), we = _e(me);
            {
              var ze = (pe) => {
                var je = Vc(), Te = i(je);
                E(() => ie(Te, Pe())), o(pe, je);
              };
              b(we, (pe) => {
                Pe() && Object.keys(t(H)).length > 1 && pe(ze);
              });
            }
            var ge = u(we, 2);
            Ye(ge, 17, Oe, ut, (pe, je) => {
              const Te = /* @__PURE__ */ Ee(() => t(I).includes(t(je).value)), qe = /* @__PURE__ */ Ee(() => t(F).indexOf(t(je)) === t(j));
              var Fe = Xc();
              Fe.__click = [Gc, M, je], Fe.__keydown = [Uc, M, je];
              var Ve = i(Fe), Ge = i(Ve), Xe = i(Ge), $e = u(Ge, 2);
              {
                var et = (Ie) => {
                  var He = Yc(), tt = i(He);
                  E(() => ie(tt, t(je).description)), o(Ie, He);
                };
                b($e, (Ie) => {
                  t(je).description && Ie(et);
                });
              }
              var nt = u(Ve, 2);
              {
                var ot = (Ie) => {
                  var He = Wc(), tt = i(He);
                  {
                    var ct = (it) => {
                      Ya(it, { size: 12, class: "text-white" });
                    };
                    b(tt, (it) => {
                      t(Te) && it(ct);
                    });
                  }
                  E((it) => L(He, 1, it, "svelte-8h6s2s"), [
                    () => $(V("w-4 h-4 border rounded flex items-center justify-center", t(Te) ? "bg-blue-500 border-blue-500" : "border-white/20"))
                  ]), o(Ie, He);
                }, Ue = (Ie) => {
                  var He = Ae(), tt = _e(He);
                  {
                    var ct = (it) => {
                      Ya(it, { size: 16, class: "text-blue-400" });
                    };
                    b(
                      tt,
                      (it) => {
                        t(Te) && it(ct);
                      },
                      !0
                    );
                  }
                  o(Ie, He);
                };
                b(nt, (Ie) => {
                  l() ? Ie(ot) : Ie(Ue, !1);
                });
              }
              E(
                (Ie) => {
                  L(Fe, 1, Ie, "svelte-8h6s2s"), ye(Fe, "aria-selected", t(Te)), ye(Fe, "tabindex", t(je).disabled ? -1 : 0), ie(Xe, t(je).label);
                },
                [
                  () => $(V(
                    "flex items-center justify-between cursor-pointer transition-colors",
                    D.option,
                    t(je).disabled ? "opacity-50 cursor-not-allowed" : C.option,
                    t(Te) && C.optionSelected,
                    t(qe) && "bg-white/5"
                  ))
                ]
              ), o(pe, Fe);
            }), o(Ne, me);
          }), o(Se, Be);
        };
        b(be, (Se) => {
          t(F).length === 0 ? Se(ce) : Se(he, !1);
        });
      }
      at(se, (Se) => X(x, Se), () => t(x)), De(se, (Se, Be) => Ct?.(Se, Be), () => ({ intensity: "medium" })), E(
        (Se) => {
          L(se, 1, Se, "svelte-8h6s2s"), ye(Ce, "id", `${O}-listbox`);
        },
        [
          () => $(V("absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden", C.dropdown, D.dropdown))
        ]
      ), o(ee, se);
    };
    b(S, (ee) => {
      t(f) && ee(te);
    });
  }
  var J = u(S, 2);
  {
    var Z = (ee) => {
      var se = Qc(), ne = i(se);
      E(() => ie(ne, e.error)), o(ee, se);
    };
    b(J, (ee) => {
      e.error && ee(Z);
    });
  }
  at(z, (ee) => Q = ee, () => Q), E(
    (ee) => {
      L(p, 1, ee, "svelte-8h6s2s"), ye(p, "tabindex", g() ? -1 : 0), ye(p, "aria-expanded", t(f)), ye(p, "aria-controls", `${O}-listbox`), ye(p, "aria-labelledby", O);
    },
    [
      () => $(V("relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer", D.trigger, C.trigger, g() && "opacity-50 cursor-not-allowed", e.error && "border-red-500/50", t(f) && "ring-2 ring-blue-400/50"))
    ]
  ), o(r, z), Ze();
}
bt(["click", "keydown"]);
var ev = /* @__PURE__ */ v("<div></div>"), tv = /* @__PURE__ */ v("<div><!></div>"), rv = /* @__PURE__ */ v("<div></div>"), av = /* @__PURE__ */ v("<div></div>"), nv = /* @__PURE__ */ v("<div><!></div>");
const ov = {
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
function cp(r, e) {
  Ke(e, !0), Je(r, ov);
  const a = s(e, "variant", 3, "glass"), n = s(e, "type", 3, "text"), l = s(e, "lines", 3, 3), d = s(e, "animated", 3, !0), c = s(e, "glow", 3, !1), g = s(e, "speed", 3, "normal"), _ = s(e, "class", 3, ""), N = s(e, "rounded", 3, !0), m = /* @__PURE__ */ vt(e, [
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
  }, R = {
    slow: "duration-[3s]",
    normal: "duration-[2s]",
    fast: "duration-[1s]"
  }, T = {
    text: { width: "w-full", height: "h-4", spacing: "space-y-3" },
    avatar: { width: "w-12", height: "h-12", rounded: "rounded-full" },
    card: { width: "w-full", height: "h-48", rounded: "rounded-2xl" },
    button: { width: "w-24", height: "h-10", rounded: "rounded-xl" },
    image: { width: "w-full", height: "h-64", rounded: "rounded-2xl" },
    paragraph: { width: "w-full", height: "h-3", spacing: "space-y-2" }
  }, y = P[a()], f = T[n()], G = R[g()], Q = /* @__PURE__ */ Ee(() => n() === "text" || n() === "paragraph" ? Array.from({ length: l() }, (I, F) => F === l() - 1 ? "60%" : `${85 + Math.floor(Math.random() * 15)}%`) : []);
  var x = Ae(), B = _e(x);
  {
    var j = (I) => {
      var F = rv();
      Qe(F, (H) => ({ class: H, ...m }), [() => V(f.spacing, _())], void 0, "svelte-1jcbe1x"), Ye(F, 21, () => t(Q), ut, (H, A, U) => {
        var K = tv(), D = i(K);
        {
          var C = (k) => {
            var M = ev();
            E((w) => L(M, 1, w, "svelte-1jcbe1x"), [
              () => $(V("absolute inset-0 bg-gradient-to-r", y.shimmer, G, "animate-shimmer"))
            ]), o(k, M);
          };
          b(D, (k) => {
            d() && k(C);
          });
        }
        De(K, (k, M) => Rt?.(k, M), () => ({
          enabled: d() && a() === "liquid",
          intensity: 0.02,
          speed: 3e3
        })), E(
          (k) => {
            L(K, 1, k, "svelte-1jcbe1x"), pt(K, `width: ${(e.width || t(A)) ?? ""}`);
          },
          [
            () => $(V("relative overflow-hidden backdrop-blur-xl border", f.height, y.bg, y.border, c() && y.glow, N() && "rounded-lg", d() && "transform-gpu will-change-transform"))
          ]
        ), rt(3, K, () => mt, () => ({ duration: 200, delay: U * 50 })), o(H, K);
      }), o(I, F);
    }, O = (I) => {
      var F = nv();
      Qe(
        F,
        (U, K) => ({ class: U, ...m, [kr]: K }),
        [
          () => V("relative overflow-hidden backdrop-blur-xl border", f.width, f.height, y.bg, y.border, f.rounded || N() && "rounded-lg", c() && y.glow, d() && "transform-gpu will-change-transform", _()),
          () => ({ width: e.width, height: e.height })
        ],
        void 0,
        "svelte-1jcbe1x"
      );
      var H = i(F);
      {
        var A = (U) => {
          var K = av();
          E((D) => L(K, 1, D, "svelte-1jcbe1x"), [
            () => $(V("absolute inset-0 bg-gradient-to-r", y.shimmer, G, "animate-shimmer"))
          ]), o(U, K);
        };
        b(H, (U) => {
          d() && U(A);
        });
      }
      De(F, (U, K) => Rt?.(U, K), () => ({
        enabled: d() && a() === "liquid",
        intensity: 0.03,
        speed: 3e3
      })), rt(3, F, () => mt, () => ({ duration: 200 })), o(I, F);
    };
    b(B, (I) => {
      n() === "text" || n() === "paragraph" ? I(j) : I(O, !1);
    });
  }
  o(r, x), Ze();
}
function iv(r, e, a, n) {
  if (e()) return;
  X(a, !0), n(r);
  const l = (c) => n(c), d = () => {
    X(a, !1), document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", d);
  };
  document.addEventListener("mousemove", l), document.addEventListener("mouseup", d);
}
var lv = /* @__PURE__ */ v('<span class="ml-2 text-white/70 svelte-wpw1ph"> </span>'), sv = /* @__PURE__ */ v("<label> <!></label>"), dv = /* @__PURE__ */ v('<div class="absolute top-1/2 w-1 h-1 bg-white/50 rounded-full -translate-y-1/2 -translate-x-1/2 svelte-wpw1ph"></div>'), cv = /* @__PURE__ */ v('<div class="flex justify-center mt-2 svelte-wpw1ph"><span> </span></div>'), vv = /* @__PURE__ */ v('<div class="w-full space-y-2 svelte-wpw1ph"><!> <div><div role="slider"><div></div> <div></div> <!></div> <!></div></div>');
const uv = {
  hash: "svelte-wpw1ph",
  code: `div[role='slider'].svelte-wpw1ph {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-wpw1ph {transition:none;
			animation: none;will-change:auto;}
	}`
};
function vp(r, e) {
  Ke(e, !0), Je(r, uv);
  let a = s(e, "value", 7, 50), n = s(e, "min", 3, 0), l = s(e, "max", 3, 100), d = s(e, "step", 3, 1), c = s(e, "disabled", 3, !1), g = s(e, "size", 3, "md"), _ = s(e, "variant", 3, "glass"), N = s(e, "blur", 3, "md"), m = s(e, "showValue", 3, !1), P = s(e, "showMarks", 3, !1), R = s(e, "marks", 19, () => []), T = s(e, "animate", 3, !0), y = s(e, "reduceMotion", 3, !1);
  s(e, "class", 3, "");
  let f = /* @__PURE__ */ vt(e, [
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
  ]), G = /* @__PURE__ */ ke(void 0), Q = /* @__PURE__ */ ke(void 0), x = /* @__PURE__ */ ke(!1), B = /* @__PURE__ */ ke(!1);
  const j = `slider-${Math.random().toString(36).substr(2, 9)}`, O = {
    sm: { track: "h-1", thumb: "w-4 h-4", value: "text-xs" },
    md: { track: "h-1.5", thumb: "w-5 h-5", value: "text-sm" },
    lg: { track: "h-2", thumb: "w-6 h-6", value: "text-base" }
  }, I = {
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
  }, F = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, H = /* @__PURE__ */ Ee(() => (a() - n()) / (l() - n()) * 100), A = V("relative w-full rounded-full cursor-pointer", O[g()].track, I[_()].track, _() === "glass" && F[N()], c() && "opacity-50 cursor-not-allowed"), U = V("absolute top-0 left-0 h-full rounded-full transition-all duration-200", I[_()].fill), K = /* @__PURE__ */ Ee(() => V("absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2", "hover:scale-110 active:scale-95", O[g()].thumb, I[_()].thumb, c() && "cursor-not-allowed hover:scale-100 active:scale-100", t(x) && "scale-110", t(B) && "ring-2 ring-blue-400/50"));
  function D(re) {
    if (c()) return;
    let S = a();
    const te = d() || 1, J = (l() - n()) / 10;
    switch (re.key) {
      case "ArrowRight":
      case "ArrowUp":
        re.preventDefault(), S = Math.min(l(), a() + te);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        re.preventDefault(), S = Math.max(n(), a() - te);
        break;
      case "PageUp":
        re.preventDefault(), S = Math.min(l(), a() + J);
        break;
      case "PageDown":
        re.preventDefault(), S = Math.max(n(), a() - J);
        break;
      case "Home":
        re.preventDefault(), S = n();
        break;
      case "End":
        re.preventDefault(), S = l();
        break;
    }
    S !== a() && (a(S), e.onValueChange?.(S));
  }
  function C(re) {
    if (!t(Q) || c()) return;
    const S = t(Q).getBoundingClientRect(), te = re.clientX - S.left, J = Math.max(0, Math.min(100, te / S.width * 100)), Z = n() + J / 100 * (l() - n()), ee = d() ? Math.round(Z / d()) * d() : Z, se = Math.max(n(), Math.min(l(), ee));
    se !== a() && (a(se), e.onValueChange?.(se));
  }
  function k() {
    X(B, !0);
  }
  function M() {
    X(B, !1);
  }
  wt(() => {
    $t("Slider", "medium");
  });
  var w = vv(), q = i(w);
  {
    var Y = (re) => {
      var S = sv();
      let te;
      var J = i(S), Z = u(J);
      {
        var ee = (se) => {
          var ne = lv(), de = i(ne);
          E(() => ie(de, `(${a() ?? ""})`)), o(se, ne);
        };
        b(Z, (se) => {
          m() && se(ee);
        });
      }
      E(
        (se) => {
          ye(S, "id", `slider-label-${j}`), ye(S, "for", j), te = L(S, 1, "block text-sm font-medium text-white svelte-wpw1ph", null, te, se), ie(J, `${e.label ?? ""} `);
        },
        [() => ({ "opacity-50": c() })]
      ), o(re, S);
    };
    b(q, (re) => {
      e.label && re(Y);
    });
  }
  var z = u(q, 2);
  Qe(z, () => ({ class: "relative w-full py-2", ...f }), void 0, void 0, "svelte-wpw1ph");
  var p = i(z);
  p.__mousedown = [iv, c, x, C], p.__keydown = D;
  var h = i(p);
  let oe;
  var ue = u(h, 2);
  let fe;
  De(ue, (re, S) => Kt?.(re, S), () => T() && !y() && t(x) ? { scale: 1.1, duration: 100 } : void 0);
  var ve = u(ue, 2);
  {
    var ae = (re) => {
      var S = Ae(), te = _e(S);
      Ye(te, 17, R, ut, (J, Z) => {
        const ee = /* @__PURE__ */ Ee(() => (t(Z) - n()) / (l() - n()) * 100);
        var se = dv();
        let ne;
        E((de) => ne = pt(se, "", ne, de), [() => ({ left: `${t(ee) ?? ""}%` })]), o(J, se);
      }), o(re, S);
    };
    b(ve, (re) => {
      P() && R().length > 0 && re(ae);
    });
  }
  at(p, (re) => X(Q, re), () => t(Q));
  var W = u(p, 2);
  {
    var le = (re) => {
      var S = cv(), te = i(S), J = i(te);
      E(
        (Z) => {
          L(te, 1, Z, "svelte-wpw1ph"), ie(J, a());
        },
        [
          () => $(V("font-medium text-white/80", O[g()].value))
        ]
      ), o(re, S);
    };
    b(W, (re) => {
      m() && re(le);
    });
  }
  at(z, (re) => X(G, re), () => t(G)), E(
    (re, S) => {
      ye(p, "id", j), L(p, 1, $(A), "svelte-wpw1ph"), ye(p, "aria-valuemin", n()), ye(p, "aria-valuemax", l()), ye(p, "aria-valuenow", a()), ye(p, "aria-labelledby", e.label ? `slider-label-${j}` : void 0), ye(p, "aria-label", e.label ? void 0 : "Slider"), ye(p, "tabindex", c() ? -1 : 0), L(h, 1, $(U), "svelte-wpw1ph"), oe = pt(h, "", oe, re), L(ue, 1, $(t(K)), "svelte-wpw1ph"), fe = pt(ue, "", fe, S);
    },
    [
      () => ({ width: `${t(H) ?? ""}%` }),
      () => ({
        left: `${t(H) ?? ""}%`,
        transform: "translateX(-50%) translateY(-50%)"
      })
    ]
  ), Bt("focus", p, k), Bt("blur", p, M), o(r, w), Ze();
}
bt(["mousedown", "keydown"]);
var fv = /* @__PURE__ */ v("<label> </label>"), bv = /* @__PURE__ */ v("<p> </p>"), gv = /* @__PURE__ */ v('<div class="flex flex-col"><!> <!></div>'), mv = /* @__PURE__ */ v('<div class="flex items-center gap-3"><button><span></span></button> <!></div>');
const hv = {
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
function up(r, e) {
  Ke(e, !0), Je(r, hv);
  let a = s(e, "checked", 7, !1), n = s(e, "disabled", 3, !1), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "blur", 3, "md"), g = s(e, "animate", 3, !0), _ = s(e, "liquid", 3, !1), N = s(e, "magnetic", 3, !1), m = s(e, "jelly", 3, !1), P = s(e, "glow", 3, !1), R = s(e, "reduceMotion", 3, !1), T = s(e, "class", 3, ""), y = /* @__PURE__ */ vt(e, [
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
  ]), f = /* @__PURE__ */ ke(void 0);
  const G = `switch-${Math.random().toString(36).substr(2, 9)}`, Q = e.label ? `${G}-label` : void 0, x = e.description ? `${G}-description` : void 0, B = {
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
  }, j = {
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
  }, O = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, I = V(
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
    B[l()].track,
    a() ? j[d()].trackChecked : j[d()].track,
    d() === "glass" && O[c()],
    _() && "backdrop-blur-md",
    P() && a() && "shadow-lg shadow-blue-400/30",
    n() && "opacity-50 cursor-not-allowed",
    !n() && "cursor-pointer hover:scale-105",
    m() && !n() && "hover:scale-110 active:scale-95",
    T()
  ), F = V("inline-block rounded-full transition-all duration-200 ease-in-out transform", B[l()].thumb, j[d()].thumb, a() ? B[l()].translate : "translate-x-0.5", !R() && "will-change-transform");
  function H() {
    if (n()) return;
    const M = !a();
    a(M), e.onCheckedChange?.(M);
  }
  function A(M) {
    n() || (M.key === "Enter" || M.key === " ") && (M.preventDefault(), H());
  }
  wt(() => {
    $t("Switch", "small");
  });
  var U = mv(), K = i(U);
  Qe(
    K,
    () => ({
      id: G,
      type: "button",
      role: "switch",
      "aria-checked": a(),
      "aria-labelledby": Q,
      "aria-describedby": x,
      "aria-label": e["aria-label"],
      class: I,
      disabled: n(),
      onclick: H,
      onkeydown: A,
      ...y
    }),
    void 0,
    void 0,
    "svelte-ne1gt8"
  );
  var D = i(K);
  at(K, (M) => X(f, M), () => t(f)), De(K, (M, w) => Kt?.(M, w), () => g() && !R() ? { scale: 0.95, duration: 100 } : void 0), De(K, (M, w) => ft?.(M, w), () => N() && !n() && !R() ? { strength: 0.15, distance: 30 } : void 0), De(K, (M, w) => ft?.(M, w), () => m() && !n() && !R() ? { strength: 0.1 } : void 0);
  var C = u(K, 2);
  {
    var k = (M) => {
      var w = gv(), q = i(w);
      {
        var Y = (h) => {
          var oe = fv();
          let ue;
          var fe = i(oe);
          E(
            (ve) => {
              ye(oe, "id", Q), ye(oe, "for", G), ue = L(oe, 1, "text-sm font-medium text-white cursor-pointer", null, ue, ve), ie(fe, e.label);
            },
            [() => ({ "opacity-50": n() })]
          ), o(h, oe);
        };
        b(q, (h) => {
          e.label && h(Y);
        });
      }
      var z = u(q, 2);
      {
        var p = (h) => {
          var oe = bv();
          let ue;
          var fe = i(oe);
          E(
            (ve) => {
              ye(oe, "id", x), ue = L(oe, 1, "text-xs text-white/70", null, ue, ve), ie(fe, e.description);
            },
            [() => ({ "opacity-50": n() })]
          ), o(h, oe);
        };
        b(z, (h) => {
          e.description && h(p);
        });
      }
      o(M, w);
    };
    b(C, (M) => {
      (e.label || e.description) && M(k);
    });
  }
  E(() => L(D, 1, $(F), "svelte-ne1gt8")), o(r, U), Ze();
}
var pv = (r, e, a) => e(t(a)), xv = (r, e, a) => e(r, t(a)), wv = /* @__PURE__ */ v('<button role="tab"> </button>'), _v = /* @__PURE__ */ v('<div class="svelte-7ddono"><!></div>'), yv = /* @__PURE__ */ v('<div class="svelte-7ddono"><!></div>'), kv = /* @__PURE__ */ v('<div><div role="tablist"></div> <div role="tabpanel" tabindex="0"><!></div></div>');
const Cv = {
  hash: "svelte-7ddono",
  code: `button[role='tab'].svelte-7ddono {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-7ddono {transition:none;
			animation: none;will-change:auto;}
	}`
};
function fp(r, e) {
  Ke(e, !0), Je(r, Cv);
  let a = s(e, "tabs", 19, () => []), n = s(e, "activeTab", 23, () => a()[0]?.id || ""), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), c = s(e, "orientation", 3, "horizontal"), g = s(e, "blur", 3, "md"), _ = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), m = s(e, "class", 3, ""), P = /* @__PURE__ */ vt(e, [
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
    "children",
    "onTabChange"
  ]), R, T = /* @__PURE__ */ ke(lt(a().findIndex((z) => z.id === n())));
  const y = `tabs-${Math.random().toString(36).substr(2, 9)}`, f = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }, G = {
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
  }, Q = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, x = c() === "horizontal", j = V("flex p-1", "tab-radius-md", x ? "flex-row" : "flex-col min-w-max", G[l()].list, (l() === "glass" || l() === "bubbleTea") && Q[g()]), I = V("relative flex-1 transition-all duration-200", "tab-radius-sm", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium whitespace-nowrap cursor-pointer", f[d()], G[l()].tab), F = V(I, G[l()].activeTab), H = V("mt-4 focus:outline-none", x ? "" : "ml-4");
  function A(z) {
    z.disabled || (n(z.id), X(T, a().findIndex((p) => p.id === z.id), !0), e.onTabChange?.(z.id));
  }
  function U(z, p) {
    if (p.disabled) return;
    const h = a().filter((ue) => !ue.disabled), oe = h.findIndex((ue) => ue.id === n());
    switch (z.key) {
      case "Enter":
      case " ":
        z.preventDefault(), A(p);
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (x ? z.key === "ArrowRight" : z.key === "ArrowDown") {
          z.preventDefault();
          const ve = (oe + 1) % h.length, ae = h[ve];
          A(ae), K(ae.id);
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        if (x ? z.key === "ArrowLeft" : z.key === "ArrowUp") {
          z.preventDefault();
          const ve = oe === 0 ? h.length - 1 : oe - 1, ae = h[ve];
          A(ae), K(ae.id);
        }
        break;
      case "Home":
        z.preventDefault();
        const ue = h[0];
        A(ue), K(ue.id);
        break;
      case "End":
        z.preventDefault();
        const fe = h[h.length - 1];
        A(fe), K(fe.id);
        break;
    }
  }
  function K(z) {
    R?.querySelector(`[data-tab-id="${z}"]`)?.focus();
  }
  const D = /* @__PURE__ */ Ee(() => a().find((z) => z.id === n()));
  wt(() => {
    $t("Tabs", "medium");
  });
  var C = kv();
  Qe(C, (z) => ({ class: z, ...P }), [() => V("w-full", x ? "" : "flex", m())], void 0, "svelte-7ddono");
  var k = i(C);
  Ye(k, 21, a, ut, (z, p) => {
    var h = wv();
    let oe;
    h.__click = [pv, A, p], h.__keydown = [xv, U, p];
    var ue = i(h);
    De(h, (fe, ve) => Ct?.(fe, ve), () => _() && !N() && t(p).id === n() ? { blur: g(), opacity: "medium" } : void 0), E(
      (fe) => {
        ye(h, "id", `${y}-tab-${t(p).id}`), oe = L(h, 1, $(t(p).id === n() ? F : I), "svelte-7ddono", oe, fe), ye(h, "tabindex", t(p).id === n() ? 0 : -1), ye(h, "aria-selected", t(p).id === n()), ye(h, "aria-controls", `${y}-tabpanel-${t(p).id}`), ye(h, "aria-disabled", t(p).disabled), ye(h, "data-tab-id", t(p).id), h.disabled = t(p).disabled, ie(ue, t(p).label);
      },
      [
        () => ({
          "opacity-50": t(p).disabled,
          "cursor-not-allowed": t(p).disabled
        })
      ]
    ), o(z, h);
  }), at(k, (z) => R = z, () => R);
  var M = u(k, 2), w = i(M);
  {
    var q = (z) => {
      var p = _v(), h = i(p);
      st(h, () => t(D).content), rt(1, p, () => mt, () => ({
        direction: "up",
        distance: 10,
        duration: _() && !N() ? 200 : 0
      })), rt(2, p, () => mt, () => ({
        direction: "down",
        distance: 10,
        duration: _() && !N() ? 150 : 0
      })), o(z, p);
    }, Y = (z) => {
      var p = Ae(), h = _e(p);
      {
        var oe = (ue) => {
          var fe = yv(), ve = i(fe);
          st(ve, () => e.children, n), rt(1, fe, () => mt, () => ({
            direction: "up",
            distance: 10,
            duration: _() && !N() ? 200 : 0
          })), rt(2, fe, () => mt, () => ({
            direction: "down",
            distance: 10,
            duration: _() && !N() ? 150 : 0
          })), o(ue, fe);
        };
        b(
          h,
          (ue) => {
            e.children && ue(oe);
          },
          !0
        );
      }
      o(z, p);
    };
    b(w, (z) => {
      t(D)?.content ? z(q) : z(Y, !1);
    });
  }
  E(() => {
    L(k, 1, $(j), "svelte-7ddono"), ye(k, "aria-orientation", c()), ye(k, "aria-label", e["aria-label"]), L(M, 1, $(H), "svelte-7ddono"), ye(M, "id", `${y}-tabpanel-${n()}`), ye(M, "aria-labelledby", `${y}-tab-${n()}`);
  }), o(r, C), Ze();
}
bt(["click", "keydown"]);
var Sv = /* @__PURE__ */ v("<textarea></textarea>");
const Ev = {
  hash: "svelte-16ael9g",
  code: `textarea.svelte-16ael9g {field-sizing:content;font-family:inherit;line-height:1.5;}textarea.svelte-16ael9g:focus {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {textarea.svelte-16ael9g {transition:none;
			animation: none;}
	}`
};
function bp(r, e) {
  Ke(e, !0), Je(r, Ev);
  let a = s(e, "value", 7, ""), n = s(e, "placeholder", 3, ""), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), c = s(e, "variant", 3, "glass"), g = s(e, "blur", 3, "md"), _ = s(e, "rows", 3, 4), N = s(e, "resize", 3, "vertical"), m = s(e, "autoResize", 3, !1), P = s(e, "maxHeight", 3, 300), R = s(e, "minHeight", 3, 80), T = s(e, "animate", 3, !0), y = s(e, "reduceMotion", 3, !1), f = s(e, "class", 3, ""), G = /* @__PURE__ */ vt(e, [
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
  ]), Q = /* @__PURE__ */ ke(void 0), x = /* @__PURE__ */ ke(!1);
  const B = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base"
  }, j = {
    default: "bg-white/5 border border-white/10 text-white placeholder-white/50",
    glass: "glass-subtle border border-white/20 text-white placeholder-white/40",
    terminal: "terminal text-green-300 placeholder-green-300/50"
  }, O = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, I = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y"
  }, F = /* @__PURE__ */ Ee(() => V("w-full rounded-brand-md transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50", "placeholder:transition-colors placeholder:duration-200", B[d()], j[c()], c() === "glass" && O[g()], I[N()], l() && "opacity-50 cursor-not-allowed", t(x) && c() === "glass" && "glass-medium", f()));
  function H(k) {
    const M = k.target;
    a(M.value), e.onValueChange?.(M.value), m() && D();
  }
  function A() {
    X(x, !0);
  }
  function U() {
    X(x, !1);
  }
  function K(k) {
    (k.ctrlKey || k.metaKey) && k.key === "a" || (k.ctrlKey || k.metaKey) && k.key === "z" || (k.ctrlKey || k.metaKey) && k.key === "y" || (k.key, k.key === "Escape" && t(Q).blur());
  }
  function D() {
    if (!t(Q) || !m()) return;
    t(Q).style.height = "auto";
    const k = t(Q).scrollHeight, M = Math.min(Math.max(k, R()), P());
    t(Q).style.height = `${M}px`;
  }
  wt(() => {
    m() && t(Q) && D();
  }), wt(() => {
    $t("Textarea", "medium");
  });
  var C = Sv();
  Qe(
    C,
    (k) => ({
      class: t(F),
      placeholder: n(),
      disabled: l(),
      rows: _(),
      cols: e.cols,
      "aria-label": G["aria-label"] || n(),
      oninput: H,
      onfocus: A,
      onblur: U,
      onkeydown: K,
      ...G,
      [kr]: k
    }),
    [
      () => ({
        "min-height": m() ? `${R()}px` : void 0,
        "max-height": m() ? `${P()}px` : void 0
      })
    ],
    void 0,
    "svelte-16ael9g"
  ), at(C, (k) => X(Q, k), () => t(Q)), gr(() => or(C, a)), De(C, (k, M) => Ct?.(k, M), () => T() && !y() && t(x) ? { blur: g(), opacity: "medium" } : void 0), o(r, C), Ze();
}
var Tv = (r) => ur.set(r.currentTarget.value), Mv = /* @__PURE__ */ v('<div class="space-y-2 svelte-1erodky"><label for="theme-select" class="block text-sm font-medium text-text svelte-1erodky">Theme Preference</label> <select id="theme-select"><option class="svelte-1erodky">Auto (Follow System)</option><option class="svelte-1erodky">Terminal (Dark)</option><option class="svelte-1erodky">Bubble Tea (Light)</option></select></div>'), Av = () => ur.setAuto(), zv = () => ur.setTerminal(), Iv = () => ur.setBubbleTea(), Pv = /* @__PURE__ */ v('<div class="flex rounded-lg overflow-hidden border border-border/30 svelte-1erodky"><button>Auto</button> <button>Terminal</button> <button>Bubble Tea</button></div>'), Lv = () => ur.setAuto(), jv = () => ur.setTerminal(), Dv = () => ur.setBubbleTea(), Rv = /* @__PURE__ */ v('<div class="flex flex-wrap gap-2 svelte-1erodky"><button>🔄 Auto</button> <button>💻 Terminal</button> <button>🧋 Bubble Tea</button></div>'), Nv = /* @__PURE__ */ v('<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20 svelte-1erodky"><h4 class="font-medium text-text mb-1 svelte-1erodky"> </h4> <p class="text-sm text-text/70 svelte-1erodky"> </p></div>'), Ov = /* @__PURE__ */ v('<span class="svelte-1erodky"> </span>'), qv = /* @__PURE__ */ v('<span class="svelte-1erodky"> </span>'), Bv = /* @__PURE__ */ v('<div class="mt-2 flex items-center gap-2 text-xs text-text/60 svelte-1erodky"><div></div> <!></div>'), Fv = /* @__PURE__ */ v("<div><!> <!> <!></div>");
const Hv = {
  hash: "svelte-1erodky",
  code: `
	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {.theme-selector.svelte-1erodky :where(.svelte-1erodky) {transition-duration:0.01ms !important;}
	}`
};
function gp(r, e) {
  Ke(e, !0), Je(r, Hv);
  const [a, n] = Ko(), l = () => Xo(Jo, "$themeConfig", a), d = s(e, "variant", 3, "pills"), c = s(e, "showDescription", 3, !0), g = s(e, "showSystemStatus", 3, !0), _ = s(e, "size", 3, "md"), N = s(e, "class", 3, ""), m = /* @__PURE__ */ vt(e, [
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
  }, R = (I, F) => {
    const H = I === F;
    return d() === "pills" ? V(
      "px-3 py-2 rounded-lg font-medium transition-all duration-200",
      "border border-transparent cursor-pointer",
      H ? "bg-primary text-white border-primary shadow-lg" : "bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30",
      P[_()]
    ) : d() === "toggle" ? V(
      "flex-1 px-3 py-2 font-medium transition-all duration-200",
      "border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg",
      H ? "bg-primary text-white shadow-inner" : "bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text",
      P[_()]
    ) : "";
  }, T = /* @__PURE__ */ Ee(() => l() ? Vs(l().userTheme, l().resolvedTheme) : null);
  var y = Fv();
  Qe(y, (I) => ({ class: I, ...m }), [() => V("theme-selector", N())], void 0, "svelte-1erodky");
  var f = i(y);
  {
    var G = (I) => {
      var F = Mv(), H = u(i(F), 2);
      H.__change = [Tv];
      var A = i(H);
      A.value = A.__value = "auto";
      var U = u(A);
      U.value = U.__value = "terminal";
      var K = u(U);
      K.value = K.__value = "bubbleTea";
      var D;
      Bo(H), E(
        (C) => {
          L(H, 1, C, "svelte-1erodky"), D !== (D = l()?.userTheme || "auto") && (H.value = (H.__value = l()?.userTheme || "auto") ?? "", xa(H, l()?.userTheme || "auto"));
        },
        [
          () => $(V("w-full border border-border/30 rounded-lg bg-surface text-text", "focus:ring-2 focus:ring-primary focus:border-primary", P[_()]))
        ]
      ), o(I, F);
    }, Q = (I) => {
      var F = Ae(), H = _e(F);
      {
        var A = (K) => {
          var D = Pv(), C = i(D);
          C.__click = [Av];
          var k = u(C, 2);
          k.__click = [zv];
          var M = u(k, 2);
          M.__click = [Iv], E(
            (w, q, Y) => {
              L(C, 1, w, "svelte-1erodky"), L(k, 1, q, "svelte-1erodky"), L(M, 1, Y, "svelte-1erodky");
            },
            [
              () => $(R(l()?.userTheme || "auto", "auto")),
              () => $(R(l()?.userTheme || "auto", "terminal")),
              () => $(R(l()?.userTheme || "auto", "bubbleTea"))
            ]
          ), o(K, D);
        }, U = (K) => {
          var D = Ae(), C = _e(D);
          {
            var k = (M) => {
              var w = Rv(), q = i(w);
              q.__click = [Lv];
              var Y = u(q, 2);
              Y.__click = [jv];
              var z = u(Y, 2);
              z.__click = [Dv], E(
                (p, h, oe) => {
                  L(q, 1, p, "svelte-1erodky"), L(Y, 1, h, "svelte-1erodky"), L(z, 1, oe, "svelte-1erodky");
                },
                [
                  () => $(R(l()?.userTheme || "auto", "auto")),
                  () => $(R(l()?.userTheme || "auto", "terminal")),
                  () => $(R(l()?.userTheme || "auto", "bubbleTea"))
                ]
              ), o(M, w);
            };
            b(
              C,
              (M) => {
                d() === "pills" && M(k);
              },
              !0
            );
          }
          o(K, D);
        };
        b(
          H,
          (K) => {
            d() === "toggle" ? K(A) : K(U, !1);
          },
          !0
        );
      }
      o(I, F);
    };
    b(f, (I) => {
      d() === "dropdown" ? I(G) : I(Q, !1);
    });
  }
  var x = u(f, 2);
  {
    var B = (I) => {
      var F = Nv(), H = i(F), A = i(H), U = u(H, 2), K = i(U);
      E(() => {
        ie(A, t(T).displayName), ie(K, t(T).description);
      }), o(I, F);
    };
    b(x, (I) => {
      c() && t(T) && I(B);
    });
  }
  var j = u(x, 2);
  {
    var O = (I) => {
      var F = Bv(), H = i(F), A = u(H, 2);
      {
        var U = (D) => {
          var C = Ov(), k = i(C);
          E(() => ie(k, `Following system: ${l().resolvedTheme ?? ""}`)), o(D, C);
        }, K = (D) => {
          var C = qv(), k = i(C);
          E(() => ie(k, `Manual override: ${l().userTheme ?? ""}`)), o(D, C);
        };
        b(A, (D) => {
          Vn(l().userTheme) ? D(U) : D(K, !1);
        });
      }
      E((D) => L(H, 1, D, "svelte-1erodky"), [
        () => $(V("w-2 h-2 rounded-full", Vn(l().userTheme) ? "bg-green-400" : "bg-orange-400"))
      ]), o(I, F);
    };
    b(j, (I) => {
      g() && l() && I(O);
    });
  }
  o(r, y), Ze(), n();
}
bt(["change", "click"]);
function Vv(r, e, a) {
  e.action?.onClick(), a();
}
var Gv = /* @__PURE__ */ v('<h4 class="font-semibold text-sm text-white mb-1 svelte-4z22bx"> </h4>'), Uv = /* @__PURE__ */ v('<p class="text-sm text-white/80 svelte-4z22bx"> </p>'), Yv = /* @__PURE__ */ v('<div class="text-sm text-white/80 svelte-4z22bx"><!></div>'), Wv = /* @__PURE__ */ v('<button class="mt-2 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:underline transition-colors duration-150 svelte-4z22bx"> </button>'), Xv = /* @__PURE__ */ v('<button class="flex-shrink-0 text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all duration-150 svelte-4z22bx" aria-label="Close notification"><svg class="w-5 h-5 svelte-4z22bx" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class="svelte-4z22bx"></path></svg></button>'), Kv = /* @__PURE__ */ v('<div><div class="flex-shrink-0 text-lg svelte-4z22bx" aria-hidden="true"> </div> <div class="flex-1 min-w-0 svelte-4z22bx"><!> <!> <!></div> <!></div>');
const Zv = {
  hash: "svelte-4z22bx",
  code: `div[role='alert'].svelte-4z22bx {will-change:transform, opacity;}

	@media (prefers-reduced-motion: reduce) {.svelte-4z22bx {transition:none;
			animation: none;will-change:auto;}
	}`
};
function mp(r, e) {
  Ke(e, !0), Je(r, Zv);
  let a = s(e, "open", 7, !1), n = s(e, "type", 3, "info"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "top-right"), c = s(e, "blur", 3, "md"), g = s(e, "duration", 3, 5e3), _ = s(e, "closable", 3, !0), N = s(e, "animate", 3, !0), m = s(e, "reduceMotion", 3, !1), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  ]), T = /* @__PURE__ */ ke(void 0), y = null;
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
  }, G = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4"
  }, Q = {
    default: "bg-white/5 border border-white/10",
    glass: "glass-subtle border",
    terminal: "terminal"
  }, x = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = V("fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg", "flex items-start gap-3 transition-all duration-300", G[d()], Q[l()], l() === "glass" && x[c()], f[n()].colors, P());
  function j() {
    a(!1), e.onOpenChange?.(!1), y && (clearTimeout(y), y = null);
  }
  function O(A) {
    A.key === "Escape" && _() && (A.preventDefault(), j());
  }
  wt(() => (a() && g() !== null && g() > 0 && (y = setTimeout(
    () => {
      j();
    },
    g()
  )), () => {
    y && (clearTimeout(y), y = null);
  })), wt(() => {
    if (a())
      return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }), wt(() => {
    $t("Toast", "small");
  });
  var I = Ae(), F = _e(I);
  {
    var H = (A) => {
      var U = Kv();
      Qe(
        U,
        () => ({
          class: B,
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true",
          tabindex: "-1",
          ...R
        }),
        void 0,
        void 0,
        "svelte-4z22bx"
      );
      var K = i(U), D = i(K), C = u(K, 2), k = i(C);
      {
        var M = (ue) => {
          var fe = Gv(), ve = i(fe);
          E(() => ie(ve, e.title)), o(ue, fe);
        };
        b(k, (ue) => {
          e.title && ue(M);
        });
      }
      var w = u(k, 2);
      {
        var q = (ue) => {
          var fe = Uv(), ve = i(fe);
          E(() => ie(ve, e.description)), o(ue, fe);
        }, Y = (ue) => {
          var fe = Ae(), ve = _e(fe);
          {
            var ae = (W) => {
              var le = Yv(), re = i(le);
              st(re, () => e.children), o(W, le);
            };
            b(
              ve,
              (W) => {
                e.children && W(ae);
              },
              !0
            );
          }
          o(ue, fe);
        };
        b(w, (ue) => {
          e.description ? ue(q) : ue(Y, !1);
        });
      }
      var z = u(w, 2);
      {
        var p = (ue) => {
          var fe = Wv();
          fe.__click = [Vv, e, j];
          var ve = i(fe);
          De(fe, (ae, W) => Kt?.(ae, W), () => N() && !m() ? { scale: 0.98, duration: 100 } : void 0), E(() => ie(ve, e.action.label)), o(ue, fe);
        };
        b(z, (ue) => {
          e.action && ue(p);
        });
      }
      var h = u(C, 2);
      {
        var oe = (ue) => {
          var fe = Xv();
          fe.__click = j, De(fe, (ve, ae) => Kt?.(ve, ae), () => N() && !m() ? { scale: 0.9, duration: 100 } : void 0), o(ue, fe);
        };
        b(h, (ue) => {
          _() && ue(oe);
        });
      }
      at(U, (ue) => X(T, ue), () => t(T)), E(() => ie(D, f[n()].icon)), rt(1, U, () => mt, () => ({
        direction: d().includes("top") ? "down" : "up",
        distance: 20,
        duration: N() && !m() ? 300 : 0
      })), rt(2, U, () => mt, () => ({
        direction: d().includes("top") ? "up" : "down",
        distance: 20,
        duration: N() && !m() ? 200 : 0
      })), o(A, U);
    };
    b(F, (A) => {
      a() && A(H);
    });
  }
  o(r, I), Ze();
}
bt(["click"]);
var Qv = /* @__PURE__ */ v("<div></div>"), Jv = /* @__PURE__ */ v('<div role="tooltip"> <!></div>'), $v = /* @__PURE__ */ v("<div><!> <!></div>");
function hp(r, e) {
  Ke(e, !0);
  const a = s(e, "position", 3, "top"), n = s(e, "variant", 3, "glass"), l = s(e, "delay", 3, 500), d = s(e, "offset", 3, 8), c = s(e, "arrow", 3, !0), g = s(e, "animated", 3, !0), _ = s(e, "class", 3, ""), N = /* @__PURE__ */ vt(e, [
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
  let m = /* @__PURE__ */ ke(!1), P = /* @__PURE__ */ ke(void 0), R = /* @__PURE__ */ ke(void 0), T = /* @__PURE__ */ ke(lt({ x: 0, y: 0 })), y = /* @__PURE__ */ ke(lt(a())), f;
  const G = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
    terminal: "bg-gray-900/95 border border-green-400/40 text-green-400",
    liquid: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white",
    dark: "bg-gray-900/95 border border-white/10 text-white"
  }, Q = () => {
    if (!t(P) || !t(R)) return;
    const K = t(R).getBoundingClientRect(), D = t(P).getBoundingClientRect(), C = window.innerWidth, k = window.innerHeight;
    let M = 0, w = 0, q = a();
    switch (a()) {
      case "top":
        M = K.left + K.width / 2 - D.width / 2, w = K.top - D.height - d();
        break;
      case "bottom":
        M = K.left + K.width / 2 - D.width / 2, w = K.bottom + d();
        break;
      case "left":
        M = K.left - D.width - d(), w = K.top + K.height / 2 - D.height / 2;
        break;
      case "right":
        M = K.right + d(), w = K.top + K.height / 2 - D.height / 2;
        break;
    }
    a() === "top" && w < 0 ? (w = K.bottom + d(), q = "bottom") : a() === "bottom" && w + D.height > k ? (w = K.top - D.height - d(), q = "top") : a() === "left" && M < 0 ? (M = K.right + d(), q = "right") : a() === "right" && M + D.width > C && (M = K.left - D.width - d(), q = "left"), M = Math.max(8, Math.min(M, C - D.width - 8)), w = Math.max(8, Math.min(w, k - D.height - 8)), X(T, { x: M, y: w }, !0), X(y, q, !0);
  }, x = () => {
    f = setTimeout(
      () => {
        X(m, !0), requestAnimationFrame(Q);
      },
      l()
    );
  }, B = () => {
    clearTimeout(f), X(m, !1);
  };
  kt(() => () => {
    clearTimeout(f);
  });
  const j = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
    bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full",
    right: "left-0 top-1/2 -translate-y-1/2 -translate-x-full"
  }, O = {
    top: "border-l-transparent border-r-transparent border-b-transparent",
    bottom: "border-l-transparent border-r-transparent border-t-transparent",
    left: "border-t-transparent border-b-transparent border-r-transparent",
    right: "border-t-transparent border-b-transparent border-l-transparent"
  };
  var I = $v();
  Qe(I, () => ({
    class: "relative inline-block",
    onmouseenter: x,
    onmouseleave: B,
    onfocus: x,
    onblur: B,
    role: "tooltip",
    ...N
  }));
  var F = i(I);
  {
    var H = (K) => {
      var D = Ae(), C = _e(D);
      st(C, () => e.children), o(K, D);
    };
    b(F, (K) => {
      e.children && K(H);
    });
  }
  var A = u(F, 2);
  {
    var U = (K) => {
      var D = Jv(), C = i(D), k = u(C);
      {
        var M = (w) => {
          var q = Qv();
          E((Y) => L(q, 1, Y), [
            () => $(V("absolute w-0 h-0 border-4", j[t(y)], O[t(y)], n() === "glass" && "border-white/10", n() === "terminal" && "border-green-400/40", n() === "liquid" && "border-white/30", n() === "dark" && "border-white/10"))
          ]), o(w, q);
        };
        b(k, (w) => {
          c() && w(M);
        });
      }
      at(D, (w) => X(P, w), () => t(P)), E(
        (w) => {
          L(D, 1, w), pt(D, `left: ${t(T).x ?? ""}px; top: ${t(T).y ?? ""}px;`), ie(C, `${e.text ?? ""} `);
        },
        [
          () => $(V("fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl", G[n()], g() && "transition-all duration-200", _()))
        ]
      ), rt(3, D, () => mt, () => ({ duration: 200 })), o(K, D);
    };
    b(A, (K) => {
      t(m) && K(U);
    });
  }
  at(I, (K) => X(R, K), () => t(R)), o(r, I), Ze();
}
function eu(r, e) {
  e(/* @__PURE__ */ new Date());
}
var tu = (
  // Initialize from value prop
  // Click outside to close
  (r, e) => e(-1)
), ru = (r, e) => e(1), au = /* @__PURE__ */ v('<div role="columnheader"> </div>'), nu = (r, e, a) => e(t(a)), ou = /* @__PURE__ */ v('<button role="gridcell"> </button>'), iu = /* @__PURE__ */ v('<div class="p-2"></div>'), lu = /* @__PURE__ */ v(`<div><button aria-label="Select today's date"> </button></div>`), su = /* @__PURE__ */ v('<div id="date-picker-calendar" role="application" aria-label="Calendar date picker"><div class="flex items-center justify-between mb-4"><button aria-label="Previous month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 aria-live="polite"> </h3> <button aria-label="Next month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2" role="row"></div> <div class="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar dates"></div> <!></div>'), du = /* @__PURE__ */ v('<div class="relative"><input/> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <!> <div aria-live="polite" aria-atomic="true" class="sr-only"><!></div></div>');
const cu = {
  hash: "svelte-dib3i6",
  code: `
	/* Additional terminal-specific glow effects */.terminal .date-picker-input:focus {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}.terminal .selected-day {text-shadow:0 0 5px currentColor;}`
};
function pp(r, e) {
  Ke(e, !0), Je(r, cu);
  const a = s(e, "value", 3, null), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "error", 3, !1), c = s(e, "disabled", 3, !1), g = s(e, "placeholder", 3, "Select date..."), _ = s(e, "format", 3, "MM/dd/yyyy"), N = s(e, "closeOnSelect", 3, !0), m = s(e, "showToday", 3, !0), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  ]), T = zt();
  let y, f = /* @__PURE__ */ ke(void 0), G = /* @__PURE__ */ ke(!1), Q = /* @__PURE__ */ ke("");
  lt(/* @__PURE__ */ new Date());
  let x = /* @__PURE__ */ ke(null), B = /* @__PURE__ */ ke(null), j = /* @__PURE__ */ ke(lt((/* @__PURE__ */ new Date()).getFullYear())), O = /* @__PURE__ */ ke(lt((/* @__PURE__ */ new Date()).getMonth()));
  const I = {
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
      input: `bg-black/80 border-${Le.terminal.green} focus:border-${Le.terminal.matrix} text-${Le.terminal.green}`,
      calendar: `bg-black/95 border-${Le.terminal.green}`,
      header: `text-${Le.terminal.green}`,
      dayButton: `text-${Le.terminal.green}/70 hover:bg-${Le.terminal.green}/10 hover:text-${Le.terminal.green}`,
      selectedDay: `bg-${Le.terminal.green} text-black hover:bg-${Le.terminal.matrix}`,
      todayDay: `bg-${Le.terminal.green}/20 text-${Le.terminal.matrix}`
    }
  }, F = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-4 text-base"
  }, H = /* @__PURE__ */ Ee(() => I[n()]), A = /* @__PURE__ */ Ee(() => F[l()]);
  function U(Z) {
    if (!Z) return "";
    const ee = Z.getDate().toString().padStart(2, "0"), se = (Z.getMonth() + 1).toString().padStart(2, "0"), ne = Z.getFullYear();
    switch (_()) {
      case "dd/MM/yyyy":
        return `${ee}/${se}/${ne}`;
      case "yyyy-MM-dd":
        return `${ne}-${se}-${ee}`;
      default:
        return `${se}/${ee}/${ne}`;
    }
  }
  function K(Z) {
    if (!Z) return null;
    const ee = Z.split(/[/-]/);
    if (ee.length !== 3) return null;
    let se, ne, de;
    switch (_()) {
      case "dd/MM/yyyy":
        [se, ne, de] = ee.map(Number);
        break;
      case "yyyy-MM-dd":
        [de, ne, se] = ee.map(Number);
        break;
      default:
        [ne, se, de] = ee.map(Number);
    }
    const Ce = new Date(de, ne - 1, se);
    return D(Ce) ? Ce : null;
  }
  function D(Z) {
    return !(!(Z instanceof Date) || isNaN(Z.getTime()) || e.minDate && Z < e.minDate || e.maxDate && Z > e.maxDate);
  }
  function C() {
    const Z = new Date(t(j), t(O), 1);
    new Date(t(j), t(O) + 1, 0);
    const ee = new Date(Z);
    ee.setDate(ee.getDate() - Z.getDay());
    const se = [], ne = new Date(ee);
    for (let de = 0; de < 42; de++)
      ne.getMonth() === t(O) ? se.push(new Date(ne)) : se.push(null), ne.setDate(ne.getDate() + 1);
    return se;
  }
  function k(Z) {
    const ee = /* @__PURE__ */ new Date();
    return Z.toDateString() === ee.toDateString();
  }
  function M(Z, ee) {
    return !Z || !ee ? !1 : Z.toDateString() === ee.toDateString();
  }
  function w() {
    c() || (X(G, !t(G)), t(G) ? T("open") : T("close"));
  }
  function q(Z) {
    const ee = Z.target;
    X(Q, ee.value, !0);
    const se = K(t(Q));
    se && (X(x, se, !0), X(j, se.getFullYear(), !0), X(O, se.getMonth(), !0), T("change", se));
  }
  function Y(Z) {
    D(Z) && (X(x, Z, !0), X(Q, U(Z), !0), T("change", Z), N() && (X(G, !1), T("close")));
  }
  function z(Z) {
    const ee = t(O) + Z;
    ee < 0 ? (X(O, 11), X(j, t(j) - 1)) : ee > 11 ? (X(O, 0), X(j, t(j) + 1)) : X(O, ee);
  }
  function p(Z) {
    if (t(G))
      switch (Z.key) {
        case "Escape":
          X(G, !1), T("close");
          break;
        case "ArrowLeft":
          if (Z.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() - 1), X(B, ee, !0);
          }
          break;
        case "ArrowRight":
          if (Z.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() + 1), X(B, ee, !0);
          }
          break;
        case "ArrowUp":
          if (Z.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() - 7), X(B, ee, !0);
          }
          break;
        case "ArrowDown":
          if (Z.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() + 7), X(B, ee, !0);
          }
          break;
        case "Enter":
          Z.preventDefault(), t(B) && Y(t(B));
          break;
      }
  }
  wt(() => {
    if (a()) {
      const Z = a() instanceof Date ? a() : K(a().toString());
      Z && (X(x, Z, !0), X(Q, U(Z), !0), X(j, Z.getFullYear(), !0), X(O, Z.getMonth(), !0));
    }
  }), kt(() => {
    function Z(ee) {
      t(G) && t(f) && !t(f).contains(ee.target) && y && !y.contains(ee.target) && (X(G, !1), T("close"));
    }
    return document.addEventListener("click", Z), () => document.removeEventListener("click", Z);
  });
  const h = [
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
  ], oe = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ue = /* @__PURE__ */ Ee(() => V("relative w-full rounded-lg border transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-opacity-50", "font-mono", t(H).input, t(A), d() && "border-red-500 focus:border-red-500", c() && "opacity-50 cursor-not-allowed", P()));
  var fe = du(), ve = i(fe);
  Qe(ve, () => ({
    onclick: w,
    oninput: q,
    onkeydown: p,
    placeholder: g(),
    disabled: c(),
    readonly: !c(),
    class: t(ue),
    role: "combobox",
    "aria-haspopup": "grid",
    "aria-expanded": t(G),
    "aria-controls": "date-picker-calendar",
    "aria-label": g(),
    "aria-describedby": d() ? "date-picker-error" : void 0,
    ...R
  })), at(ve, (Z) => y = Z, () => y), gr(() => or(ve, () => t(Q), (Z) => X(Q, Z))), De(ve, (Z, ee) => Ct?.(Z, ee), () => ({ blur: "sm", opacity: "light" })), De(ve, (Z, ee) => ft?.(Z, ee), () => ({ enabled: !c(), strength: 0.1 }));
  var ae = u(ve, 2), W = i(ae), le = u(ae, 2);
  {
    var re = (Z) => {
      var ee = su(), se = i(ee), ne = i(se);
      ne.__click = [tu, z], De(ne, (Re, Ne) => ft?.(Re, Ne), () => ({ strength: 0.2 }));
      var de = u(ne, 2), Ce = i(de), be = u(de, 2);
      be.__click = [ru, z], De(be, (Re, Ne) => ft?.(Re, Ne), () => ({ strength: 0.2 }));
      var ce = u(se, 2);
      Ye(ce, 21, () => oe, ut, (Re, Ne) => {
        var Me = au(), xe = i(Me);
        E(() => {
          L(Me, 1, `p-2 text-center text-xs font-semibold ${t(H).header ?? ""} font-mono`), ie(xe, t(Ne));
        }), o(Re, Me);
      });
      var he = u(ce, 2);
      Ye(he, 21, C, ut, (Re, Ne) => {
        var Me = Ae(), xe = _e(Me);
        {
          var Pe = (me) => {
            const we = /* @__PURE__ */ Ee(() => M(t(Ne), t(x))), ze = /* @__PURE__ */ Ee(() => k(t(Ne))), ge = /* @__PURE__ */ Ee(() => D(t(Ne)));
            var pe = ou();
            pe.__click = [nu, Y, Ne];
            var je = i(pe);
            De(pe, (Te, qe) => ft?.(Te, qe), () => ({ enabled: t(ge), strength: 0.15 })), E(
              (Te, qe, Fe) => {
                pe.disabled = !t(ge), L(pe, 1, `p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       ${(t(we) ? t(H).selectedDay : t(ze) ? t(H).todayDay : t(H).dayButton) ?? ""}
							       ${t(ge) ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`), ye(pe, "aria-label", Te), ye(pe, "aria-selected", t(we)), ye(pe, "aria-disabled", !t(ge)), ye(pe, "aria-current", t(ze) ? "date" : void 0), ye(pe, "tabindex", qe), ie(je, Fe);
              },
              [
                () => U(t(Ne)),
                () => t(we) || M(t(Ne), t(B)) ? 0 : -1,
                () => t(Ne).getDate()
              ]
            ), o(me, pe);
          }, Oe = (me) => {
            var we = iu();
            o(me, we);
          };
          b(xe, (me) => {
            t(Ne) ? me(Pe) : me(Oe, !1);
          });
        }
        o(Re, Me);
      });
      var Se = u(he, 2);
      {
        var Be = (Re) => {
          var Ne = lu(), Me = i(Ne);
          Me.__click = [eu, Y];
          var xe = i(Me);
          De(Me, (Pe, Oe) => ft?.(Pe, Oe), () => ({ strength: 0.1 })), E(
            (Pe) => {
              L(Ne, 1, `mt-4 pt-4 border-t ${t(H).calendar ?? ""}`), L(Me, 1, `w-full py-2 px-4 rounded-md ${t(H).dayButton ?? ""} transition-colors font-mono text-sm`), ie(xe, `Today: ${Pe ?? ""}`);
            },
            [() => U(/* @__PURE__ */ new Date())]
          ), o(Re, Ne);
        };
        b(Se, (Re) => {
          m() && Re(Be);
        });
      }
      at(ee, (Re) => X(f, Re), () => t(f)), De(ee, (Re, Ne) => Ct?.(Re, Ne), () => ({ blur: "lg", opacity: "medium" })), E(() => {
        L(ee, 1, `absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 ${t(H).calendar ?? ""}`), L(ne, 1, `p-2 rounded-md ${t(H).dayButton ?? ""} transition-colors`), L(de, 1, `text-lg font-semibold ${t(H).header ?? ""} font-mono`), ie(Ce, `${h[t(O)] ?? ""}
					${t(j) ?? ""}`), L(be, 1, `p-2 rounded-md ${t(H).dayButton ?? ""} transition-colors`);
      }), rt(1, ee, () => mt, () => ({ direction: "up", duration: 200 })), o(Z, ee);
    };
    b(le, (Z) => {
      t(G) && Z(re);
    });
  }
  var S = u(le, 2), te = i(S);
  {
    var J = (Z) => {
      var ee = Et();
      E((se) => ie(ee, `Selected date: ${se ?? ""}`), [() => U(t(x))]), o(Z, ee);
    };
    b(te, (Z) => {
      t(x) && Z(J);
    });
  }
  E(() => L(W, 0, `w-5 h-5 ${t(H).header ?? ""}`)), o(r, fe), Ze();
}
bt(["click"]);
var vu = (r, e) => (r.key === "Enter" || r.key === " ") && e(), uu = /* @__PURE__ */ v('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-lg font-medium">Drop files here</p></div>'), fu = /* @__PURE__ */ v('<p class="text-xs text-gray-500 mt-1"> </p>'), bu = /* @__PURE__ */ v(`<button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium">Select Files</button>`), gu = /* @__PURE__ */ v('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <div class="mb-2"><p class="text-lg font-medium"> </p> <p class="text-sm text-gray-400 mt-1"> </p> <!></div> <!></div>'), mu = /* @__PURE__ */ v('<img class="w-12 h-12 object-cover rounded border"/>'), hu = /* @__PURE__ */ v('<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>'), pu = /* @__PURE__ */ nr('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), xu = (r, e, a) => e(t(a).id), wu = /* @__PURE__ */ v('<button class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" title="Retry upload">Retry</button> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>', 1), _u = /* @__PURE__ */ v('<div class="w-5 h-5"><svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), yu = (r, e, a) => e(t(a).id), ku = /* @__PURE__ */ v('<p class="text-xs text-red-400 mt-1"> </p>'), Cu = /* @__PURE__ */ v('<div class="mt-2"><div class="w-full bg-gray-700 rounded-full h-2"><div></div></div> <p class="text-xs text-gray-400 mt-1"> </p></div>'), Su = /* @__PURE__ */ v('<div><div class="flex items-start gap-3"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-sm font-medium truncate pr-2"> </h4> <div class="flex items-center gap-2"><!> <button aria-label="Remove file"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-1"><p class="text-xs text-gray-400"> </p> <!></div> <!></div></div></div>'), Eu = /* @__PURE__ */ v('<div class="mt-4 space-y-3"></div>'), Tu = /* @__PURE__ */ v('<input type="file" class="hidden"/> <div role="button" aria-label="Upload files"><!></div> <!>', 1);
const Mu = {
  hash: "svelte-yfigio",
  code: `
	/* Terminal-specific glow effects */.terminal .file-upload:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function xp(r, e) {
  Ke(e, !0), Je(r, Mu);
  const a = s(e, "multiple", 3, !1), n = s(e, "accept", 3, "*/*"), l = s(
    e,
    "maxSize",
    3,
    10 * 1024 * 1024
    // 10MB default
  ), d = s(e, "maxFiles", 19, () => a() ? 5 : 1), c = s(e, "variant", 3, "default"), g = s(e, "disabled", 3, !1), _ = s(e, "showPreview", 3, !0), N = s(e, "autoUpload", 3, !1), m = s(e, "class", 3, ""), P = zt();
  let R, T, y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(lt([]));
  const G = {
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
      dropZone: `bg-black/80 border-${Le.terminal.green} hover:border-${Le.terminal.matrix}`,
      dropZoneActive: `bg-${Le.terminal.green}/10 border-${Le.terminal.matrix}`,
      fileItem: `bg-black/60 border-${Le.terminal.green}/30`,
      progressBar: `bg-${Le.terminal.green}`,
      successIcon: `text-${Le.terminal.green}`,
      errorIcon: "text-red-400",
      removeButton: `text-${Le.terminal.green}/70 hover:text-${Le.terminal.green}`
    }
  }, Q = /* @__PURE__ */ Ee(() => G[c()]);
  function x() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  function B(ae) {
    if (ae === 0) return "0 Bytes";
    const W = 1024, le = ["Bytes", "KB", "MB", "GB"], re = Math.floor(Math.log(ae) / Math.log(W));
    return parseFloat((ae / Math.pow(W, re)).toFixed(2)) + " " + le[re];
  }
  function j(ae) {
    return ae.type.startsWith("image/");
  }
  function O(ae) {
    if (ae.size > l())
      return `File size exceeds ${B(l())}`;
    if (n() !== "*/*") {
      const W = n().split(",").map((S) => S.trim()), le = "." + ae.name.split(".").pop()?.toLowerCase();
      if (!W.some((S) => S === ae.type || S === le || S.endsWith("/*") && ae.type.startsWith(S.slice(0, -1))))
        return `File type not accepted. Accepted types: ${n()}`;
    }
    return null;
  }
  async function I(ae) {
    if (!(!j(ae) || !_()))
      return new Promise((W) => {
        const le = new FileReader();
        le.onload = (re) => W(re.target?.result), le.onerror = () => W(void 0), le.readAsDataURL(ae);
      });
  }
  async function F(ae) {
    if (g()) return;
    const W = Array.from(ae), le = d() - t(f).length, re = W.slice(0, le), S = [];
    for (const te of re) {
      const J = O(te), Z = await I(te), ee = {
        ...te,
        id: x(),
        preview: Z,
        status: J ? "error" : "pending",
        error: J,
        progress: 0
      };
      S.push(ee);
    }
    X(f, [...t(f), ...S], !0), P("filesAdded", S), N() && e.uploadUrl && S.forEach((te) => {
      te.status === "pending" && H(te);
    });
  }
  async function H(ae) {
    if (!e.uploadUrl) return;
    const W = t(f).findIndex((re) => re.id === ae.id);
    if (W === -1) return;
    t(f)[W] = { ...ae, status: "uploading", progress: 0 }, P("uploadStart", t(f)[W]);
    const le = new FormData();
    le.append("file", ae);
    try {
      const re = new XMLHttpRequest();
      re.upload.onprogress = (S) => {
        if (S.lengthComputable) {
          const te = Math.round(S.loaded / S.total * 100);
          t(f)[W] = { ...t(f)[W], progress: te }, P("uploadProgress", { file: t(f)[W], progress: te });
        }
      }, re.onload = () => {
        if (re.status >= 200 && re.status < 300)
          t(f)[W] = { ...t(f)[W], status: "success", progress: 100 }, P("uploadSuccess", { file: t(f)[W], response: re.response });
        else
          throw new Error(`Upload failed: ${re.statusText}`);
        t(f).every((S) => S.status === "success" || S.status === "error") && P("allUploadsComplete", t(f));
      }, re.onerror = () => {
        const S = "Upload failed: Network error";
        t(f)[W] = { ...t(f)[W], status: "error", error: S }, P("uploadError", { file: t(f)[W], error: S });
      }, re.open("POST", e.uploadUrl), re.send(le);
    } catch (re) {
      const S = re instanceof Error ? re.message : "Upload failed";
      t(f)[W] = {
        ...t(f)[W],
        status: "error",
        error: S
      }, P("uploadError", { file: t(f)[W], error: S });
    }
  }
  function A(ae) {
    const W = t(f).findIndex((re) => re.id === ae);
    if (W === -1) return;
    const le = t(f)[W];
    X(f, t(f).filter((re) => re.id !== ae), !0), P("fileRemoved", le);
  }
  function U(ae) {
    const W = t(f).find((le) => le.id === ae);
    W && e.uploadUrl && H(W);
  }
  function K(ae) {
    const W = ae.target;
    W.files && F(W.files), W.value = "";
  }
  function D(ae) {
    ae.preventDefault(), g() || X(y, !0);
  }
  function C(ae) {
    ae.preventDefault(), T?.contains(ae.relatedTarget) || X(y, !1);
  }
  function k(ae) {
    if (ae.preventDefault(), X(y, !1), g()) return;
    const W = ae.dataTransfer?.files;
    W && F(W);
  }
  function M() {
    !g() && R && R.click();
  }
  const w = /* @__PURE__ */ Ee(() => t(f).length < d()), q = /* @__PURE__ */ Ee(() => V(
    "relative w-full rounded-lg border-2 border-dashed transition-all duration-300",
    "flex flex-col items-center justify-center p-8 min-h-32",
    "cursor-pointer font-mono",
    t(y) ? t(Q).dropZoneActive : t(Q).dropZone,
    g() && "opacity-50 cursor-not-allowed",
    m()
  ));
  var Y = Tu(), z = _e(Y);
  z.__change = K, at(z, (ae) => R = ae, () => R);
  var p = u(z, 2);
  p.__click = M, p.__keydown = [vu, M];
  var h = i(p);
  {
    var oe = (ae) => {
      var W = uu();
      rt(1, W, () => Kt, () => ({ duration: 200 })), o(ae, W);
    }, ue = (ae) => {
      var W = gu(), le = u(i(W), 2), re = i(le), S = i(re), te = u(re, 2), J = i(te), Z = u(te, 2);
      {
        var ee = (de) => {
          var Ce = fu(), be = i(Ce);
          E(() => ie(be, `${t(f).length ?? ""} of ${d() ?? ""} files selected`)), o(de, Ce);
        };
        b(Z, (de) => {
          a() && de(ee);
        });
      }
      var se = u(le, 2);
      {
        var ne = (de) => {
          var Ce = bu();
          De(Ce, (be, ce) => ft?.(be, ce), () => ({ strength: 0.15 })), o(de, Ce);
        };
        b(se, (de) => {
          t(w) && de(ne);
        });
      }
      E(
        (de) => {
          ie(S, t(w) ? "Choose files or drag and drop" : "Maximum files reached"), ie(J, `${(n() === "*/*" ? "Any file type" : n()) ?? ""} • Max ${de ?? ""} per file`);
        },
        [() => B(l())]
      ), o(ae, W);
    };
    b(h, (ae) => {
      t(y) ? ae(oe) : ae(ue, !1);
    });
  }
  at(p, (ae) => T = ae, () => T), De(p, (ae, W) => Ct?.(ae, W), () => ({ blur: "md", opacity: "light" })), De(p, (ae, W) => ft?.(ae, W), () => ({
    enabled: !g() && t(w),
    strength: 0.1
  }));
  var fe = u(p, 2);
  {
    var ve = (ae) => {
      var W = Eu();
      Ye(W, 21, () => t(f), (le) => le.id, (le, re) => {
        var S = Su(), te = i(S), J = i(te), Z = i(J);
        {
          var ee = (ze) => {
            var ge = mu();
            E(() => {
              ye(ge, "src", t(re).preview), ye(ge, "alt", t(re).name);
            }), o(ze, ge);
          }, se = (ze) => {
            var ge = hu();
            o(ze, ge);
          };
          b(Z, (ze) => {
            t(re).preview ? ze(ee) : ze(se, !1);
          });
        }
        var ne = u(J, 2), de = i(ne), Ce = i(de), be = i(Ce), ce = u(Ce, 2), he = i(ce);
        {
          var Se = (ze) => {
            var ge = pu();
            E(() => L(ge, 0, `w-5 h-5 ${t(Q).successIcon ?? ""}`)), o(ze, ge);
          }, Be = (ze) => {
            var ge = Ae(), pe = _e(ge);
            {
              var je = (qe) => {
                var Fe = wu(), Ve = _e(Fe);
                Ve.__click = [xu, U, re];
                var Ge = u(Ve, 2);
                E(() => L(Ge, 0, `w-5 h-5 ${t(Q).errorIcon ?? ""}`)), o(qe, Fe);
              }, Te = (qe) => {
                var Fe = Ae(), Ve = _e(Fe);
                {
                  var Ge = (Xe) => {
                    var $e = _u();
                    o(Xe, $e);
                  };
                  b(
                    Ve,
                    (Xe) => {
                      t(re).status === "uploading" && Xe(Ge);
                    },
                    !0
                  );
                }
                o(qe, Fe);
              };
              b(
                pe,
                (qe) => {
                  t(re).status === "error" ? qe(je) : qe(Te, !1);
                },
                !0
              );
            }
            o(ze, ge);
          };
          b(he, (ze) => {
            t(re).status === "success" ? ze(Se) : ze(Be, !1);
          });
        }
        var Re = u(he, 2);
        Re.__click = [yu, A, re];
        var Ne = u(de, 2), Me = i(Ne), xe = i(Me), Pe = u(Me, 2);
        {
          var Oe = (ze) => {
            var ge = ku(), pe = i(ge);
            E(() => ie(pe, t(re).error)), o(ze, ge);
          };
          b(Pe, (ze) => {
            t(re).error && ze(Oe);
          });
        }
        var me = u(Ne, 2);
        {
          var we = (ze) => {
            var ge = Cu(), pe = i(ge), je = i(pe), Te = u(pe, 2), qe = i(Te);
            E(() => {
              L(je, 1, `h-2 rounded-full ${t(Q).progressBar ?? ""} transition-all duration-300`), pt(je, `width: ${t(re).progress ?? ""}%`), ie(qe, `${t(re).progress ?? ""}% uploaded`);
            }), o(ze, ge);
          };
          b(me, (ze) => {
            t(re).status === "uploading" && t(re).progress !== void 0 && ze(we);
          });
        }
        De(S, (ze, ge) => Ct?.(ze, ge), () => ({ blur: "sm", opacity: "subtle" })), E(
          (ze) => {
            L(S, 1, `p-4 rounded-lg border ${t(Q).fileItem ?? ""} transition-all duration-200`), ie(be, t(re).name), L(Re, 1, `p-1 rounded ${t(Q).removeButton ?? ""} hover:bg-red-500/20 transition-colors`), ie(xe, ze);
          },
          [() => B(t(re).size)]
        ), rt(1, S, () => Kt, () => ({ duration: 300, bounce: !0 })), o(le, S);
      }), o(ae, W);
    };
    b(fe, (ae) => {
      t(f).length > 0 && ae(ve);
    });
  }
  E(() => {
    ye(z, "accept", n()), z.multiple = a(), z.disabled = g(), L(p, 1, $(t(q))), ye(p, "tabindex", g() ? -1 : 0);
  }), Bt("dragover", p, D), Bt("dragleave", p, C), Bt("drop", p, k), o(r, Y), Ze();
}
bt(["change", "click", "keydown"]);
const Vt = {
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
    test: (e) => !e || /^[\+]?[1-9][\d]{0,15}$/.test(e.replace(/[\s\-\(\)]/g, "")),
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
function ri(r, e) {
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
function Au(r, e) {
  const a = {};
  for (const [n, l] of Object.entries(e)) {
    const d = r[n];
    a[n] = ri(d, l);
  }
  return a;
}
function zu(r) {
  return Object.values(r).every((e) => e.isValid);
}
function Iu(r) {
  const e = {};
  for (const [a, n] of Object.entries(r))
    n.isValid || (e[a] = n.errors);
  return e;
}
function wp(r) {
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
        const d = ri(e[l], r[l]);
        d.isValid ? delete a[l] : a[l] = d.errors;
      }
    },
    validateAll() {
      const l = Au(e, r);
      return a = Iu(l), zu(l);
    },
    reset() {
      e = {}, a = {}, n = {};
    },
    setData(l) {
      e = { ...l };
    }
  };
}
function _p(r, e = 300) {
  let a;
  return function(...n) {
    clearTimeout(a), a = setTimeout(() => r.apply(this, n), e);
  };
}
const yp = {
  login: {
    email: {
      rules: [Vt.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Vt.minLength(6)],
      required: !0
    }
  },
  registration: {
    name: {
      rules: [Vt.minLength(2), Vt.maxLength(50)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Vt.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Vt.strongPassword()],
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
      rules: [Vt.minLength(2), Vt.maxLength(100)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Vt.email()],
      required: !0,
      trim: !0
    },
    phone: {
      rules: [Vt.phoneNumber()],
      required: !1,
      trim: !0
    },
    message: {
      rules: [Vt.minLength(10), Vt.maxLength(1e3)],
      required: !0,
      trim: !0
    }
  }
};
function Pu(r, e) {
  e("homeClick");
}
var Lu = /* @__PURE__ */ v('<span class="mr-1 text-base"> </span>'), ju = /* @__PURE__ */ v('<li aria-hidden="true"> </li>'), Du = /* @__PURE__ */ v('<li><button aria-label="Go to home"><!> </button></li> <!>', 1), Ru = /* @__PURE__ */ v('<span aria-hidden="true"> </span>'), Nu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), Ou = /* @__PURE__ */ v('<span aria-current="page"><!> </span>'), qu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), Bu = /* @__PURE__ */ v("<a><!> </a>"), Fu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), Hu = /* @__PURE__ */ v("<button><!> </button>"), Vu = /* @__PURE__ */ v('<li aria-hidden="true"> </li>'), Gu = /* @__PURE__ */ v('<li class="flex items-center"><!></li> <!>', 1), Uu = /* @__PURE__ */ v('<nav aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><!> <!></ol></nav>');
const Yu = {
  hash: "svelte-1ozmnrq",
  code: `
	/* Terminal glow effects */.terminal .breadcrumb-item:hover {text-shadow:0 0 5px var(--terminal-green);}`
};
function kp(r, e) {
  Ke(e, !0), Je(r, Yu);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "separator", 3, "chevron"), d = s(e, "showHome", 3, !0), c = s(e, "homeIcon", 3, "🏠"), g = s(e, "homeLabel", 3, "Home"), _ = s(e, "maxItems", 3, 5), N = s(e, "class", 3, ""), m = zt(), P = {
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
      container: `text-${Le.terminal.green}/60`,
      item: `text-${Le.terminal.green}/60 hover:text-${Le.terminal.green}`,
      activeItem: `text-${Le.terminal.green}`,
      separator: `text-${Le.terminal.green}/40`,
      home: `text-${Le.terminal.green}/60 hover:text-${Le.terminal.green}`
    }
  }, R = { slash: "/", chevron: "›", arrow: "→", dot: "•" }, T = /* @__PURE__ */ Ee(() => P[n()]), y = /* @__PURE__ */ Ee(() => () => {
    if (a().length <= _())
      return a();
    const I = a()[0], F = a().slice(-(_() - 2));
    return [
      I,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...F
    ];
  });
  function f(I, F) {
    I.disabled || I.id === "ellipsis" || m("navigate", { item: I, index: F });
  }
  const G = /* @__PURE__ */ Ee(() => V("flex items-center space-x-2 text-sm font-mono", t(T).container, N()));
  var Q = Uu(), x = i(Q), B = i(x);
  {
    var j = (I) => {
      var F = Du(), H = _e(F), A = i(H);
      A.__click = [Pu, m];
      var U = i(A);
      {
        var K = (M) => {
          var w = Lu(), q = i(w);
          E(() => ie(q, c())), o(M, w);
        };
        b(U, (M) => {
          c() && M(K);
        });
      }
      var D = u(U);
      De(A, (M, w) => ft?.(M, w), () => ({ strength: 0.1 }));
      var C = u(H, 2);
      {
        var k = (M) => {
          var w = ju(), q = i(w);
          E(() => {
            L(w, 1, $(t(T).separator)), ie(q, R[l()]);
          }), o(M, w);
        };
        b(C, (M) => {
          t(y).length > 0 && M(k);
        });
      }
      E(() => {
        L(A, 1, `flex items-center ${t(T).home ?? ""} hover:underline transition-colors`), ie(D, ` ${g() ?? ""}`);
      }), o(I, F);
    };
    b(B, (I) => {
      d() && I(j);
    });
  }
  var O = u(B, 2);
  Ye(O, 19, () => t(y), (I) => I.id, (I, F, H) => {
    var A = Gu(), U = _e(A), K = i(U);
    {
      var D = (w) => {
        var q = Ru(), Y = i(q);
        E(() => {
          L(q, 1, `px-2 ${t(T).separator ?? ""}`), ie(Y, t(F).label);
        }), o(w, q);
      }, C = (w) => {
        var q = Ae(), Y = _e(q);
        {
          var z = (h) => {
            var oe = Ou(), ue = i(oe);
            {
              var fe = (ae) => {
                var W = Nu(), le = i(W);
                E(() => ie(le, t(F).icon)), o(ae, W);
              };
              b(ue, (ae) => {
                t(F).icon && ae(fe);
              });
            }
            var ve = u(ue);
            E(() => {
              L(oe, 1, `flex items-center ${t(T).activeItem ?? ""} font-medium`), ie(ve, ` ${t(F).label ?? ""}`);
            }), o(h, oe);
          }, p = (h) => {
            var oe = Ae(), ue = _e(oe);
            {
              var fe = (ae) => {
                var W = Bu();
                W.__click = (te) => {
                  t(F).disabled ? te.preventDefault() : f(t(F), t(H));
                };
                var le = i(W);
                {
                  var re = (te) => {
                    var J = qu(), Z = i(J);
                    E(() => ie(Z, t(F).icon)), o(te, J);
                  };
                  b(le, (te) => {
                    t(F).icon && te(re);
                  });
                }
                var S = u(le);
                De(W, (te, J) => ft?.(te, J), () => ({ enabled: !t(F).disabled, strength: 0.1 })), E(() => {
                  ye(W, "href", t(F).href), L(W, 1, `flex items-center ${t(T).item ?? ""} hover:underline transition-colors
							       ${t(F).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ie(S, ` ${t(F).label ?? ""}`);
                }), o(ae, W);
              }, ve = (ae) => {
                var W = Hu();
                W.__click = () => f(t(F), t(H));
                var le = i(W);
                {
                  var re = (te) => {
                    var J = Fu(), Z = i(J);
                    E(() => ie(Z, t(F).icon)), o(te, J);
                  };
                  b(le, (te) => {
                    t(F).icon && te(re);
                  });
                }
                var S = u(le);
                De(W, (te, J) => ft?.(te, J), () => ({ enabled: !t(F).disabled, strength: 0.1 })), E(() => {
                  W.disabled = t(F).disabled, L(W, 1, `flex items-center ${t(T).item ?? ""} hover:underline transition-colors
							       ${t(F).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ie(S, ` ${t(F).label ?? ""}`);
                }), o(ae, W);
              };
              b(ue, (ae) => {
                t(F).href ? ae(fe) : ae(ve, !1);
              });
            }
            o(h, oe);
          };
          b(
            Y,
            (h) => {
              t(H) === t(y).length - 1 ? h(z) : h(p, !1);
            },
            !0
          );
        }
        o(w, q);
      };
      b(K, (w) => {
        t(F).id === "ellipsis" ? w(D) : w(C, !1);
      });
    }
    var k = u(U, 2);
    {
      var M = (w) => {
        var q = Vu(), Y = i(q);
        E(() => {
          L(q, 1, $(t(T).separator)), ie(Y, R[l()]);
        }), o(w, q);
      };
      b(k, (w) => {
        t(H) < t(y).length - 1 && t(F).id !== "ellipsis" && w(M);
      });
    }
    o(I, A);
  }), E(() => L(Q, 1, $(t(G)))), o(r, Q), Ze();
}
bt(["click"]);
function Wu(r, e, a, n, l, d, c, g) {
  if (!t(e)) {
    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), a());
    return;
  }
  switch (r.key) {
    case "Escape":
      r.preventDefault(), n();
      break;
    case "ArrowDown":
      r.preventDefault(), X(l, Math.min(t(l) + 1, t(d).length - 1), !0);
      break;
    case "ArrowUp":
      r.preventDefault(), X(l, Math.max(t(l) - 1, 0), !0);
      break;
    case "Enter":
      r.preventDefault(), t(l) >= 0 && t(d)()[t(l)] && c(t(d)()[t(l)]);
      break;
    case "ArrowRight":
      t(l) >= 0 && t(d)()[t(l)]?.children?.length && X(g, t(d)()[t(l)].id, !0);
      break;
    case "ArrowLeft":
      t(g) && X(g, null);
      break;
  }
}
var Xu = /* @__PURE__ */ v("<div><span>Menu</span> <!></div>"), Ku = /* @__PURE__ */ v("<hr/>"), Zu = (r, e, a) => e(t(a)), Qu = (r, e, a) => r.key === "Enter" && e(t(a)), Ju = /* @__PURE__ */ v('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), $u = /* @__PURE__ */ v("<span> </span>"), e0 = /* @__PURE__ */ v("<span> </span>"), t0 = /* @__PURE__ */ v("<hr/>"), r0 = (r, e, a) => e(t(a)), a0 = (r, e, a) => r.key === "Enter" && e(t(a)), n0 = /* @__PURE__ */ v('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), o0 = /* @__PURE__ */ v("<span> </span>"), i0 = /* @__PURE__ */ v("<span> </span>"), l0 = /* @__PURE__ */ v('<div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <!></div>'), s0 = /* @__PURE__ */ v('<div role="menu"><div class="py-1"></div></div>'), d0 = /* @__PURE__ */ v('<div class="relative"><div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <div class="flex items-center gap-2 ml-3"><!> <!></div></div> <!></div>'), c0 = /* @__PURE__ */ v('<div role="menu"><div class="py-1"></div></div>'), v0 = /* @__PURE__ */ v('<div><div class="cursor-pointer" tabindex="0" role="button" aria-haspopup="menu"><!></div> <!></div>');
const u0 = {
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
function Cp(r, e) {
  Ke(e, !0), Je(r, u0);
  let a = s(e, "openMode", 3, "click"), n = s(e, "placement", 3, "bottom-start"), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), c = s(e, "closeOnClick", 3, !0), g = s(e, "showIcons", 3, !0), _ = s(e, "showKeyboards", 3, !0), N = s(e, "class", 3, ""), m = /* @__PURE__ */ vt(e, [
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
  let R = /* @__PURE__ */ ke(!1), T, y, f = /* @__PURE__ */ ke(null), G = /* @__PURE__ */ ke(-1);
  const Q = `menu-${Math.random().toString(36).substr(2, 9)}`, x = {
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
  }, B = {
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
  }, j = x[d()], O = B[l()], I = /* @__PURE__ */ Ee(() => () => {
    const h = [];
    function oe(ue) {
      for (const fe of ue)
        fe.separator || h.push(fe), fe.children && oe(fe.children);
    }
    return oe(e.items), h;
  });
  function F() {
    X(R, !t(R)), t(R) && (X(G, -1), X(f, null)), P("toggle", { isOpen: t(R) });
  }
  function H() {
    X(R, !1), X(f, null), X(G, -1), P("close");
  }
  function A(h) {
    h.disabled || (h.children?.length ? X(f, t(f) === h.id ? null : h.id, !0) : (h.onclick && h.onclick(), P("select", { item: h }), c() && H()));
  }
  function U(h) {
    a() === "hover" && h.children?.length && X(f, h.id, !0);
  }
  function K() {
    a() === "hover" && X(f, null);
  }
  function D(h) {
    T && !T.contains(h.target) && H();
  }
  kt(() => (document.addEventListener("click", D), () => document.removeEventListener("click", D)));
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
  var k = v0();
  Qe(k, (h) => ({ class: h, ...m }), [() => V("relative inline-block", N())], void 0, "svelte-i7uadz");
  var M = i(k);
  M.__click = function(...h) {
    (a() === "click" ? F : void 0)?.apply(this, h);
  }, M.__keydown = [
    Wu,
    R,
    F,
    H,
    G,
    I,
    A,
    f
  ];
  var w = i(M);
  {
    var q = (h) => {
      var oe = Ae(), ue = _e(oe);
      st(ue, () => e.children.trigger), o(h, oe);
    }, Y = (h) => {
      var oe = Xu(), ue = u(i(oe), 2);
      {
        let fe = /* @__PURE__ */ Ee(() => V("transition-transform duration-200", t(R) && "rotate-180"));
        Kr(ue, {
          size: 16,
          get class() {
            return t(fe);
          }
        });
      }
      E((fe) => L(oe, 1, fe), [
        () => $(V("flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200", O.item, t(R) && O.itemActive))
      ]), o(h, oe);
    };
    b(w, (h) => {
      e.children?.trigger ? h(q) : h(Y, !1);
    });
  }
  at(M, (h) => y = h, () => y);
  var z = u(M, 2);
  {
    var p = (h) => {
      var oe = c0(), ue = i(oe);
      Ye(ue, 23, () => e.items, (fe) => fe.id, (fe, ve) => {
        var ae = Ae(), W = _e(ae);
        {
          var le = (S) => {
            var te = Ku();
            E((J) => L(te, 1, J), [() => $(V("my-1 border-t", O.separator))]), o(S, te);
          }, re = (S) => {
            var te = d0(), J = i(te);
            J.__click = [Zu, A, ve], J.__keydown = [Qu, A, ve];
            var Z = i(J), ee = i(Z);
            {
              var se = (xe) => {
                var Pe = Ju();
                E((Oe) => L(Pe, 1, Oe), [() => $(V("flex-shrink-0", j.icon))]), o(xe, Pe);
              };
              b(ee, (xe) => {
                g() && t(ve).icon && xe(se);
              });
            }
            var ne = u(ee, 2), de = i(ne), Ce = u(ne, 2);
            {
              var be = (xe) => {
                var Pe = $u(), Oe = i(Pe);
                E(
                  (me) => {
                    L(Pe, 1, me), ie(Oe, t(ve).badge);
                  },
                  [
                    () => $(V("inline-flex items-center rounded-full font-medium", j.badge, O.badge))
                  ]
                ), o(xe, Pe);
              };
              b(Ce, (xe) => {
                t(ve).badge && xe(be);
              });
            }
            var ce = u(Z, 2), he = i(ce);
            {
              var Se = (xe) => {
                var Pe = e0(), Oe = i(Pe);
                E(
                  (me) => {
                    L(Pe, 1, me), ie(Oe, t(ve).keyboard);
                  },
                  [
                    () => $(V("opacity-60 font-mono", j.keyboard, O.keyboard))
                  ]
                ), o(xe, Pe);
              };
              b(he, (xe) => {
                _() && t(ve).keyboard && xe(Se);
              });
            }
            var Be = u(he, 2);
            {
              var Re = (xe) => {
                Or(xe, { size: 16, class: "opacity-60" });
              };
              b(Be, (xe) => {
                t(ve).children?.length && xe(Re);
              });
            }
            var Ne = u(J, 2);
            {
              var Me = (xe) => {
                var Pe = s0(), Oe = i(Pe);
                Ye(Oe, 21, () => t(ve).children, (me) => me.id, (me, we) => {
                  var ze = Ae(), ge = _e(ze);
                  {
                    var pe = (Te) => {
                      var qe = t0();
                      E((Fe) => L(qe, 1, Fe), [() => $(V("my-1 border-t", O.separator))]), o(Te, qe);
                    }, je = (Te) => {
                      var qe = l0();
                      qe.__click = [r0, A, we], qe.__keydown = [a0, A, we];
                      var Fe = i(qe), Ve = i(Fe);
                      {
                        var Ge = (Ie) => {
                          var He = n0();
                          E((tt) => L(He, 1, tt), [() => $(V("flex-shrink-0", j.icon))]), o(Ie, He);
                        };
                        b(Ve, (Ie) => {
                          g() && t(we).icon && Ie(Ge);
                        });
                      }
                      var Xe = u(Ve, 2), $e = i(Xe), et = u(Xe, 2);
                      {
                        var nt = (Ie) => {
                          var He = o0(), tt = i(He);
                          E(
                            (ct) => {
                              L(He, 1, ct), ie(tt, t(we).badge);
                            },
                            [
                              () => $(V("inline-flex items-center rounded-full font-medium", j.badge, O.badge))
                            ]
                          ), o(Ie, He);
                        };
                        b(et, (Ie) => {
                          t(we).badge && Ie(nt);
                        });
                      }
                      var ot = u(Fe, 2);
                      {
                        var Ue = (Ie) => {
                          var He = i0(), tt = i(He);
                          E(
                            (ct) => {
                              L(He, 1, ct), ie(tt, t(we).keyboard);
                            },
                            [
                              () => $(V("opacity-60 font-mono ml-3", j.keyboard, O.keyboard))
                            ]
                          ), o(Ie, He);
                        };
                        b(ot, (Ie) => {
                          _() && t(we).keyboard && Ie(Ue);
                        });
                      }
                      E(
                        (Ie) => {
                          L(qe, 1, Ie, "svelte-i7uadz"), ye(qe, "aria-disabled", t(we).disabled), ye(qe, "tabindex", t(we).disabled ? -1 : 0), ie($e, t(we).label);
                        },
                        [
                          () => $(V("flex items-center justify-between cursor-pointer transition-all duration-150", j.item, t(we).disabled ? O.itemDisabled : O.item))
                        ]
                      ), o(Te, qe);
                    };
                    b(ge, (Te) => {
                      t(we).separator ? Te(pe) : Te(je, !1);
                    });
                  }
                  o(me, ze);
                }), De(Pe, (me, we) => Ct?.(me, we), () => ({ intensity: "medium" })), E((me) => L(Pe, 1, me, "svelte-i7uadz"), [
                  () => $(V("absolute z-10 min-w-[180px] rounded-lg border shadow-lg", "left-full top-0 ml-1", O.menu))
                ]), o(xe, Pe);
              };
              b(Ne, (xe) => {
                t(ve).children?.length && t(f) === t(ve).id && xe(Me);
              });
            }
            E(
              (xe) => {
                L(J, 1, xe, "svelte-i7uadz"), ye(J, "aria-disabled", t(ve).disabled), ye(J, "tabindex", t(ve).disabled ? -1 : 0), ie(de, t(ve).label);
              },
              [
                () => $(V("flex items-center justify-between cursor-pointer transition-all duration-150", j.item, t(ve).disabled ? O.itemDisabled : O.item, t(G) === t(I)().indexOf(t(ve)) && !t(ve).disabled && O.itemActive, t(f) === t(ve).id && O.itemActive))
              ]
            ), Bt("mouseenter", J, () => U(t(ve))), Bt("mouseleave", J, K), o(S, te);
          };
          b(W, (S) => {
            t(ve).separator ? S(le) : S(re, !1);
          });
        }
        o(fe, ae);
      }), De(oe, (fe, ve) => Ct?.(fe, ve), () => ({ intensity: "medium" })), E(
        (fe) => {
          ye(oe, "id", Q), L(oe, 1, fe, "svelte-i7uadz");
        },
        [
          () => $(V("absolute z-50 min-w-[200px] rounded-lg border shadow-lg", C(), O.menu))
        ]
      ), o(h, oe);
    };
    b(z, (h) => {
      t(R) && h(p);
    });
  }
  at(k, (h) => T = h, () => T), E(() => {
    ye(M, "aria-expanded", t(R)), ye(M, "aria-controls", Q);
  }), Bt("mouseenter", M, function(...h) {
    (a() === "hover" ? F : void 0)?.apply(this, h);
  }), Bt("mouseleave", M, function(...h) {
    (a() === "hover" ? () => setTimeout(H, 150) : void 0)?.apply(this, h);
  }), o(r, k), Ze();
}
bt(["click", "keydown"]);
function f0(r, e, a) {
  e("brandClick"), X(a, !1);
}
function b0(r, e, a) {
  X(e, !t(e)), a("mobileToggle", t(e));
}
var g0 = /* @__PURE__ */ v('<img alt="Logo" class="h-8 w-auto"/>'), m0 = /* @__PURE__ */ v(`<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"> </div>`), h0 = /* @__PURE__ */ v('<span class="text-xl font-bold tracking-tight"> </span>'), p0 = /* @__PURE__ */ v('<div class="flex items-center"><button><!> <!></button></div>'), x0 = (
  // Handle scroll for backdrop effects
  // Click outside to close dropdowns
  (r, e, a) => e(t(a))
), w0 = (r, e, a) => e(r, t(a)), _0 = /* @__PURE__ */ v('<span class="mr-2 text-lg"> </span>'), y0 = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), k0 = (r, e, a) => e(t(a), r), C0 = /* @__PURE__ */ v('<span class="mr-2"> </span>'), S0 = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), E0 = /* @__PURE__ */ v('<a role="menuitem"><!> <!></a>'), T0 = /* @__PURE__ */ v('<div role="menu"></div>'), M0 = /* @__PURE__ */ v('<button aria-haspopup="true"><!> <!> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!>', 1), A0 = (r, e, a) => e(t(a), r), z0 = (r, e, a) => e(r, t(a)), I0 = /* @__PURE__ */ v('<span class="mr-2 text-lg"> </span>'), P0 = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), L0 = /* @__PURE__ */ nr('<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), j0 = /* @__PURE__ */ v("<a><!> <!> <!></a>"), D0 = /* @__PURE__ */ v('<div class="relative"><!></div>'), R0 = /* @__PURE__ */ nr('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), N0 = /* @__PURE__ */ nr('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'), O0 = (r, e, a) => e(t(a)), q0 = /* @__PURE__ */ v('<span class="mr-3 text-lg"> </span>'), B0 = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), F0 = (r, e, a) => e(t(a), r), H0 = /* @__PURE__ */ v('<span class="mr-3"> </span>'), V0 = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), G0 = /* @__PURE__ */ v("<a><!> <!></a>"), U0 = /* @__PURE__ */ v('<div class="pl-6 mt-2 space-y-1"></div>'), Y0 = /* @__PURE__ */ v('<div><button><span class="flex items-center"><!> <!></span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), W0 = (r, e, a) => e(t(a), r), X0 = /* @__PURE__ */ v('<span class="mr-3 text-lg"> </span>'), K0 = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), Z0 = /* @__PURE__ */ nr('<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), Q0 = /* @__PURE__ */ v("<a><!> <!> <!></a>"), J0 = /* @__PURE__ */ v('<div><div class="px-2 pt-2 pb-3 space-y-1"></div></div>'), $0 = /* @__PURE__ */ v('<nav aria-label="Main navigation"><div><!> <div class="hidden md:flex items-center space-x-1"></div> <div class="md:hidden"><button aria-label="Toggle mobile menu"><!></button></div></div> <!></nav>');
const ef = {
  hash: "svelte-14x41x6",
  code: `
	/* Terminal glow effects */.terminal .navbar-brand:hover {text-shadow:0 0 10px var(--terminal-green);}.terminal .nav-item:hover {box-shadow:0 0 5px var(--terminal-green-glow);}`
};
function Sp(r, e) {
  Ke(e, !0), Je(r, ef);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "glass"), l = s(e, "position", 3, "static"), d = s(e, "backdrop", 3, !0), c = s(e, "logoText", 3, "TULIO"), g = s(e, "showBrand", 3, !0), _ = s(e, "compact", 3, !1), N = s(e, "transparent", 3, !1), m = s(e, "activeItem", 3, ""), P = s(e, "class", 3, ""), R = zt();
  let T, y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(lt(/* @__PURE__ */ new Set())), G = /* @__PURE__ */ ke(!1);
  const Q = {
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
      nav: `bg-black/90 border-${Le.terminal.green}`,
      item: `text-${Le.terminal.green}/80 hover:text-${Le.terminal.green} hover:bg-${Le.terminal.green}/10`,
      activeItem: `text-black bg-${Le.terminal.green}`,
      dropdown: `bg-black/95 border-${Le.terminal.green}`,
      brand: `text-${Le.terminal.green}`,
      mobileButton: `text-${Le.terminal.green}/80 hover:text-${Le.terminal.green}`
    }
  }, x = /* @__PURE__ */ Ee(() => Q[n()]);
  function B(p, h) {
    if (!p.disabled) {
      if (p.children) {
        const oe = new Set(t(f));
        oe.has(p.id) ? oe.delete(p.id) : oe.add(p.id), X(f, oe, !0);
        return;
      }
      if (X(y, !1), R("navigate", { item: p, href: p.href }), p.external && p.href) {
        window.open(p.href, "_blank", "noopener,noreferrer"), h?.preventDefault();
        return;
      }
    }
  }
  function j() {
    X(f, /* @__PURE__ */ new Set(), !0);
  }
  function O(p, h) {
    p.key === "Enter" || p.key === " " ? (p.preventDefault(), B(h)) : p.key === "Escape" && j();
  }
  kt(() => {
    function p() {
      X(G, window.scrollY > 10);
    }
    if (l() === "fixed" || l() === "sticky")
      return window.addEventListener("scroll", p), () => window.removeEventListener("scroll", p);
  }), kt(() => {
    function p(h) {
      T && !T.contains(h.target) && j();
    }
    return document.addEventListener("click", p), () => document.removeEventListener("click", p);
  });
  const I = /* @__PURE__ */ Ee(() => V("w-full border-b transition-all duration-300", "font-mono", t(x).nav, l() === "fixed" && "fixed top-0 left-0 z-50", l() === "sticky" && "sticky top-0 z-40", d() && "backdrop-blur-xl", N() && !t(G) && "bg-transparent border-transparent", _() ? "py-2" : "py-4", P())), F = /* @__PURE__ */ Ee(() => V("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "flex items-center justify-between", _() ? "h-12" : "h-16"));
  var H = $0(), A = i(H), U = i(A);
  {
    var K = (p) => {
      var h = p0(), oe = i(h);
      oe.__click = [f0, R, y];
      var ue = i(oe);
      {
        var fe = (le) => {
          var re = g0();
          E(() => ye(re, "src", e.logo)), o(le, re);
        }, ve = (le) => {
          var re = m0(), S = i(re);
          E((te) => ie(S, te), [() => c().charAt(0)]), o(le, re);
        };
        b(ue, (le) => {
          e.logo ? le(fe) : le(ve, !1);
        });
      }
      var ae = u(ue, 2);
      {
        var W = (le) => {
          var re = h0(), S = i(re);
          E(() => ie(S, c())), o(le, re);
        };
        b(ae, (le) => {
          c() && le(W);
        });
      }
      De(oe, (le, re) => ft?.(le, re), () => ({ strength: 0.1 })), E(() => L(oe, 1, `flex items-center space-x-3 ${t(x).brand ?? ""} hover:opacity-80 transition-opacity`)), o(p, h);
    };
    b(U, (p) => {
      g() && p(K);
    });
  }
  var D = u(U, 2);
  Ye(D, 21, a, (p) => p.id, (p, h) => {
    var oe = D0(), ue = i(oe);
    {
      var fe = (ae) => {
        var W = M0(), le = _e(W);
        le.__click = [x0, B, h], le.__keydown = [w0, O, h];
        var re = i(le);
        {
          var S = (de) => {
            var Ce = _0(), be = i(Ce);
            E(() => ie(be, t(h).icon)), o(de, Ce);
          };
          b(re, (de) => {
            t(h).icon && de(S);
          });
        }
        var te = u(re), J = u(te);
        {
          var Z = (de) => {
            var Ce = y0(), be = i(Ce);
            E(() => ie(be, t(h).badge)), o(de, Ce);
          };
          b(J, (de) => {
            t(h).badge && de(Z);
          });
        }
        var ee = u(J, 2);
        De(le, (de, Ce) => ft?.(de, Ce), () => ({ enabled: !t(h).disabled, strength: 0.1 }));
        var se = u(le, 2);
        {
          var ne = (de) => {
            var Ce = T0();
            Ye(Ce, 21, () => t(h).children, (be) => be.id, (be, ce) => {
              var he = E0();
              he.__click = [k0, B, ce];
              var Se = i(he);
              {
                var Be = (xe) => {
                  var Pe = C0(), Oe = i(Pe);
                  E(() => ie(Oe, t(ce).icon)), o(xe, Pe);
                };
                b(Se, (xe) => {
                  t(ce).icon && xe(Be);
                });
              }
              var Re = u(Se), Ne = u(Re);
              {
                var Me = (xe) => {
                  var Pe = S0(), Oe = i(Pe);
                  E(() => ie(Oe, t(ce).badge)), o(xe, Pe);
                };
                b(Ne, (xe) => {
                  t(ce).badge && xe(Me);
                });
              }
              De(he, (xe, Pe) => ft?.(xe, Pe), () => ({ enabled: !t(ce).disabled, strength: 0.1 })), E(() => {
                ye(he, "href", t(ce).href), L(he, 1, `block px-4 py-2 text-sm ${t(x).item ?? ""} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       ${t(ce).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ie(Re, ` ${t(ce).label ?? ""} `);
              }), o(be, he);
            }), De(Ce, (be, ce) => Ct?.(be, ce), () => ({ blur: "xl", opacity: "strong" })), E(() => L(Ce, 1, `absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       ${t(x).dropdown ?? ""}`)), rt(1, Ce, () => mt, () => ({ direction: "up", duration: 200 })), o(de, Ce);
          };
          b(se, (de) => {
            t(f).has(t(h).id) && de(ne);
          });
        }
        E(
          (de, Ce) => {
            L(le, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(h).id === m() ? t(x).activeItem : t(x).item) ?? ""}
							       ${t(h).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), le.disabled = t(h).disabled, ye(le, "aria-expanded", de), ie(te, ` ${t(h).label ?? ""} `), L(ee, 0, `ml-1 w-4 h-4 transition-transform duration-200
								       ${Ce ?? ""}`);
          },
          [
            () => t(f).has(t(h).id),
            () => t(f).has(t(h).id) ? "rotate-180" : ""
          ]
        ), o(ae, W);
      }, ve = (ae) => {
        var W = j0();
        W.__click = [A0, B, h], W.__keydown = [z0, O, h];
        var le = i(W);
        {
          var re = (se) => {
            var ne = I0(), de = i(ne);
            E(() => ie(de, t(h).icon)), o(se, ne);
          };
          b(le, (se) => {
            t(h).icon && se(re);
          });
        }
        var S = u(le), te = u(S);
        {
          var J = (se) => {
            var ne = P0(), de = i(ne);
            E(() => ie(de, t(h).badge)), o(se, ne);
          };
          b(te, (se) => {
            t(h).badge && se(J);
          });
        }
        var Z = u(te, 2);
        {
          var ee = (se) => {
            var ne = L0();
            o(se, ne);
          };
          b(Z, (se) => {
            t(h).external && se(ee);
          });
        }
        De(W, (se, ne) => ft?.(se, ne), () => ({ enabled: !t(h).disabled, strength: 0.1 })), E(() => {
          ye(W, "href", t(h).href), L(W, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(h).id === m() ? t(x).activeItem : t(x).item) ?? ""}
							       ${t(h).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ye(W, "aria-current", t(h).id === m() ? "page" : void 0), ie(S, ` ${t(h).label ?? ""} `);
        }), o(ae, W);
      };
      b(ue, (ae) => {
        t(h).children ? ae(fe) : ae(ve, !1);
      });
    }
    o(p, oe);
  });
  var C = u(D, 2), k = i(C);
  k.__click = [b0, y, R];
  var M = i(k);
  {
    var w = (p) => {
      var h = R0();
      o(p, h);
    }, q = (p) => {
      var h = N0();
      o(p, h);
    };
    b(M, (p) => {
      t(y) ? p(w) : p(q, !1);
    });
  }
  De(k, (p, h) => ft?.(p, h), () => ({ strength: 0.15 }));
  var Y = u(A, 2);
  {
    var z = (p) => {
      var h = J0(), oe = i(h);
      Ye(oe, 21, a, (ue) => ue.id, (ue, fe) => {
        var ve = Ae(), ae = _e(ve);
        {
          var W = (re) => {
            var S = Y0(), te = i(S);
            te.__click = [O0, B, fe];
            var J = i(te), Z = i(J);
            {
              var ee = (he) => {
                var Se = q0(), Be = i(Se);
                E(() => ie(Be, t(fe).icon)), o(he, Se);
              };
              b(Z, (he) => {
                t(fe).icon && he(ee);
              });
            }
            var se = u(Z), ne = u(se);
            {
              var de = (he) => {
                var Se = B0(), Be = i(Se);
                E(() => ie(Be, t(fe).badge)), o(he, Se);
              };
              b(ne, (he) => {
                t(fe).badge && he(de);
              });
            }
            var Ce = u(J, 2), be = u(te, 2);
            {
              var ce = (he) => {
                var Se = U0();
                Ye(Se, 21, () => t(fe).children, (Be) => Be.id, (Be, Re) => {
                  var Ne = G0();
                  Ne.__click = [F0, B, Re];
                  var Me = i(Ne);
                  {
                    var xe = (we) => {
                      var ze = H0(), ge = i(ze);
                      E(() => ie(ge, t(Re).icon)), o(we, ze);
                    };
                    b(Me, (we) => {
                      t(Re).icon && we(xe);
                    });
                  }
                  var Pe = u(Me), Oe = u(Pe);
                  {
                    var me = (we) => {
                      var ze = V0(), ge = i(ze);
                      E(() => ie(ge, t(Re).badge)), o(we, ze);
                    };
                    b(Oe, (we) => {
                      t(Re).badge && we(me);
                    });
                  }
                  E(() => {
                    ye(Ne, "href", t(Re).href), L(Ne, 1, `flex items-center px-3 py-2 rounded-md text-sm
											       ${t(x).item ?? ""} hover:bg-white/10 transition-colors
											       ${t(Re).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ie(Pe, ` ${t(Re).label ?? ""} `);
                  }), o(Be, Ne);
                }), rt(1, Se, () => mt, () => ({ direction: "down", duration: 150 })), o(he, Se);
              };
              b(be, (he) => {
                t(f).has(t(fe).id) && he(ce);
              });
            }
            E(
              (he, Se) => {
                L(te, 1, `w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       ${(t(fe).id === m() ? t(x).activeItem : t(x).item) ?? ""}
								       ${t(fe).disabled ? "opacity-50 cursor-not-allowed" : ""}`), te.disabled = t(fe).disabled, ye(te, "aria-expanded", he), ie(se, ` ${t(fe).label ?? ""} `), L(Ce, 0, `w-5 h-5 transition-transform duration-200
									       ${Se ?? ""}`);
              },
              [
                () => t(f).has(t(fe).id),
                () => t(f).has(t(fe).id) ? "rotate-180" : ""
              ]
            ), o(re, S);
          }, le = (re) => {
            var S = Q0();
            S.__click = [W0, B, fe];
            var te = i(S);
            {
              var J = (Ce) => {
                var be = X0(), ce = i(be);
                E(() => ie(ce, t(fe).icon)), o(Ce, be);
              };
              b(te, (Ce) => {
                t(fe).icon && Ce(J);
              });
            }
            var Z = u(te), ee = u(Z);
            {
              var se = (Ce) => {
                var be = K0(), ce = i(be);
                E(() => ie(ce, t(fe).badge)), o(Ce, be);
              };
              b(ee, (Ce) => {
                t(fe).badge && Ce(se);
              });
            }
            var ne = u(ee, 2);
            {
              var de = (Ce) => {
                var be = Z0();
                o(Ce, be);
              };
              b(ne, (Ce) => {
                t(fe).external && Ce(de);
              });
            }
            E(() => {
              ye(S, "href", t(fe).href), L(S, 1, `flex items-center px-3 py-2 rounded-md text-base font-medium
							       ${(t(fe).id === m() ? t(x).activeItem : t(x).item) ?? ""}
							       ${t(fe).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ye(S, "aria-current", t(fe).id === m() ? "page" : void 0), ie(Z, ` ${t(fe).label ?? ""} `);
            }), o(re, S);
          };
          b(ae, (re) => {
            t(fe).children ? re(W) : re(le, !1);
          });
        }
        o(ue, ve);
      }), E(() => L(h, 1, `md:hidden border-t ${t(x).nav ?? ""}`)), rt(1, h, () => mt, () => ({ direction: "down", duration: 200 })), o(p, h);
    };
    b(Y, (p) => {
      t(y) && p(z);
    });
  }
  at(H, (p) => T = p, () => T), De(H, (p, h) => Ct?.(p, h), () => d() ? { blur: "xl", opacity: "medium" } : void 0), E(() => {
    L(H, 1, $(t(I))), L(A, 1, $(t(F))), L(k, 1, `p-2 rounded-md ${t(x).mobileButton ?? ""} hover:bg-white/10 transition-colors`), ye(k, "aria-expanded", t(y));
  }), o(r, H), Ze();
}
bt(["click", "keydown"]);
var tf = /* @__PURE__ */ v('<div class="relative"><!> <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">🔍</button></div>'), rf = /* @__PURE__ */ v('<span class="text-sm text-gray-400"> </span>'), af = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><!> <!></div> <div class="flex items-center gap-2"><!></div></div>'), nf = (r, e) => {
  const a = r.target;
  e(a.checked);
}, of = /* @__PURE__ */ v('<th><input type="checkbox" class="rounded bg-transparent border-current"/></th>'), lf = (r, e, a) => t(e).sortable && a(t(e)), sf = /* @__PURE__ */ v('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), df = /* @__PURE__ */ v('<th><div class="flex items-center gap-2"><span> </span> <!></div></th>'), cf = /* @__PURE__ */ v("<th>Actions</th>"), vf = /* @__PURE__ */ v('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), uf = /* @__PURE__ */ v('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), ff = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, bf = (r) => r.stopPropagation(), gf = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded bg-transparent border-current"/></td>'), mf = (r, e, a, n, l) => e() && t(a).editable && n(t(l), t(a)), hf = (r, e, a) => {
  r.key === "Enter" && e(), r.key === "Escape" && a();
}, pf = /* @__PURE__ */ v('<input class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"/>'), xf = /* @__PURE__ */ v("<td><!></td>"), wf = /* @__PURE__ */ v('<span class="mr-1"> </span>'), _f = /* @__PURE__ */ v("<!> ", 1), yf = /* @__PURE__ */ v('<td><div class="flex items-center gap-1"></div></td>'), kf = /* @__PURE__ */ v("<tr><!><!><!></tr>"), Cf = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><span class="text-sm text-gray-400"> </span></div> <div class="flex items-center gap-2"><!> <!> <!></div></div>'), Sf = /* @__PURE__ */ v('<div><!> <div class="overflow-auto"><table class="w-full"><thead><tr><!><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Ef = {
  hash: "svelte-23n5dg",
  code: `
	/* Terminal glow effects */.terminal .data-grid:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function Ep(r, e) {
  Ke(e, !0), Je(r, Ef);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), c = s(e, "loading", 3, !1);
  s(e, "virtualScrolling", 3, !1), s(e, "rowHeight", 3, 60);
  const g = s(e, "maxHeight", 3, "600px"), _ = s(e, "sortBy", 3, ""), N = s(e, "sortOrder", 3, "asc"), m = s(e, "filters", 19, () => []), P = s(e, "searchable", 3, !0), R = s(e, "searchPlaceholder", 3, "Search..."), T = s(e, "selectable", 3, !1), y = s(e, "multiSelect", 3, !1), f = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), G = s(e, "editable", 3, !1), Q = s(e, "pagination", 3, !0), x = s(e, "pageSize", 3, 10), B = s(e, "currentPage", 3, 1), j = s(e, "stickyHeader", 3, !0);
  s(e, "resizableColumns", 3, !1), s(e, "reorderableColumns", 3, !1);
  const O = s(e, "exportable", 3, !1), I = s(e, "actions", 19, () => []), F = s(e, "emptyMessage", 3, "No data available"), H = s(e, "class", 3, ""), A = zt();
  let U = /* @__PURE__ */ ke("");
  const K = lt(m());
  let D = /* @__PURE__ */ ke(lt(_())), C = /* @__PURE__ */ ke(lt(N())), k = /* @__PURE__ */ ke(lt(f())), M = /* @__PURE__ */ ke(null), w = /* @__PURE__ */ ke("");
  const q = {
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
      container: `bg-black/90 border-${Le.terminal.green}`,
      header: `bg-${Le.terminal.green}/10 border-${Le.terminal.green}`,
      headerCell: `text-${Le.terminal.green} border-${Le.terminal.green}/30`,
      row: `border-${Le.terminal.green}/20 text-${Le.terminal.green}`,
      rowHover: `hover:bg-${Le.terminal.green}/5`,
      rowSelected: `bg-${Le.terminal.green}/10`,
      cell: `text-${Le.terminal.green}/90 border-${Le.terminal.green}/20`,
      toolbar: `bg-${Le.terminal.green}/5 border-${Le.terminal.green}/30`,
      pagination: `bg-${Le.terminal.green}/5 border-${Le.terminal.green}/30`
    }
  }, Y = {
    sm: { cell: "px-2 py-1 text-xs", header: "px-2 py-2 text-xs" },
    md: { cell: "px-3 py-2 text-sm", header: "px-3 py-3 text-sm" },
    lg: { cell: "px-4 py-3 text-base", header: "px-4 py-4 text-base" }
  }, z = /* @__PURE__ */ Ee(() => q[l()]), p = /* @__PURE__ */ Ee(() => Y[d()]), h = /* @__PURE__ */ Ee(() => () => {
    let ge = n();
    if (t(U).trim()) {
      const pe = t(U).toLowerCase();
      ge = ge.filter((je) => a().some((Te) => String(je[Te.key] || "").toLowerCase().includes(pe)));
    }
    for (const pe of K)
      ge = ge.filter((je) => {
        const Te = je[pe.column];
        switch (pe.operator) {
          case "equals":
            return Te === pe.value;
          case "contains":
            return String(Te).toLowerCase().includes(String(pe.value).toLowerCase());
          case "startsWith":
            return String(Te).toLowerCase().startsWith(String(pe.value).toLowerCase());
          case "endsWith":
            return String(Te).toLowerCase().endsWith(String(pe.value).toLowerCase());
          case "gt":
            return Number(Te) > Number(pe.value);
          case "lt":
            return Number(Te) < Number(pe.value);
          case "gte":
            return Number(Te) >= Number(pe.value);
          case "lte":
            return Number(Te) <= Number(pe.value);
          default:
            return !0;
        }
      });
    return t(D) && a().find((je) => je.key === t(D))?.sortable && ge.sort((je, Te) => {
      const qe = je[t(D)], Fe = Te[t(D)];
      if (qe === Fe) return 0;
      const Ve = t(C) === "asc";
      return qe < Fe ? Ve ? -1 : 1 : Ve ? 1 : -1;
    }), ge;
  }), oe = /* @__PURE__ */ Ee(() => Math.ceil((e.totalRows ?? t(h).length) / x())), ue = /* @__PURE__ */ Ee(() => () => {
    if (!Q()) return t(h);
    const ge = (B() - 1) * x();
    return t(h).slice(ge, ge + x());
  });
  function fe(ge) {
    ge.sortable && (t(D) === ge.key ? X(C, t(C) === "asc" ? "desc" : "asc", !0) : (X(D, ge.key, !0), X(C, "asc")), A("sort", { column: ge.key, order: t(C) }));
  }
  function ve() {
    A("search", { query: t(U) });
  }
  function ae(ge, pe) {
    A("rowClick", { row: ge, index: pe });
  }
  function W(ge, pe) {
    y() ? pe ? t(k).add(ge.id) : t(k).delete(ge.id) : X(k, pe ? /* @__PURE__ */ new Set([ge.id]) : /* @__PURE__ */ new Set(), !0), X(k, new Set(t(k)), !0), A("rowSelect", { row: ge, selected: pe });
  }
  function le(ge) {
    ge ? X(k, new Set(t(ue).map((pe) => pe.id)), !0) : X(k, /* @__PURE__ */ new Set(), !0), A("selectAll", { selected: ge });
  }
  function re(ge, pe) {
    !G() || !pe.editable || (X(M, { rowId: ge.id, column: pe.key }, !0), X(w, String(ge[pe.key] || ""), !0));
  }
  function S() {
    if (!t(M)) return;
    const ge = t(ue).find((qe) => qe.id === t(M).rowId);
    if (!ge) return;
    const pe = a().find((qe) => qe.key === t(M).column);
    if (!pe) return;
    const je = ge[pe.key];
    let Te = t(w);
    switch (pe.type) {
      case "number":
        Te = Number(Te);
        break;
      case "boolean":
        Te = Te === "true";
        break;
      case "date":
        Te = new Date(Te);
        break;
    }
    if (pe.validation) {
      const qe = pe.validation(Te);
      if (qe) {
        alert(qe);
        return;
      }
    }
    A("cellEdit", { row: ge, column: pe.key, oldValue: je, newValue: Te }), X(M, null), X(w, "");
  }
  function te() {
    X(M, null), X(w, "");
  }
  function J(ge, pe, je) {
    if (ge.render)
      return ge.render(pe, je, ge);
    if (ge.formatter)
      return ge.formatter(pe, je);
    switch (ge.type) {
      case "boolean":
        return pe ? "✓" : "✗";
      case "date":
        return pe instanceof Date ? pe.toLocaleDateString() : String(pe || "");
      case "number":
        return typeof pe == "number" ? pe.toLocaleString() : String(pe || "");
      default:
        return String(pe || "");
    }
  }
  const Z = /* @__PURE__ */ Ee(() => t(ue).length > 0 && t(ue).every((ge) => t(k).has(ge.id))), ee = /* @__PURE__ */ Ee(() => V("rounded-lg border overflow-hidden font-mono", t(z).container, H()));
  var se = Sf(), ne = i(se);
  {
    var de = (ge) => {
      var pe = af(), je = i(pe), Te = i(je);
      {
        var qe = (et) => {
          var nt = tf(), ot = i(nt);
          Cd(ot, {
            get placeholder() {
              return R();
            },
            size: "sm",
            get variant() {
              return l();
            },
            class: "w-64",
            onkeydown: (Ie) => {
              Ie.key === "Enter" && ve();
            },
            get value() {
              return t(U);
            },
            set value(Ie) {
              X(U, Ie, !0);
            }
          });
          var Ue = u(ot, 2);
          Ue.__click = ve, o(et, nt);
        };
        b(Te, (et) => {
          P() && et(qe);
        });
      }
      var Fe = u(Te, 2);
      {
        var Ve = (et) => {
          var nt = rf(), ot = i(nt);
          E(() => ie(ot, `${t(k).size ?? ""} selected`)), o(et, nt);
        };
        b(Fe, (et) => {
          t(k).size > 0 && et(Ve);
        });
      }
      var Ge = u(je, 2), Xe = i(Ge);
      {
        var $e = (et) => {
          tr(et, {
            size: "sm",
            get variant() {
              return l();
            },
            onclick: () => A("export", { format: "csv" }),
            children: (nt, ot) => {
              var Ue = Et("📥 Export");
              o(nt, Ue);
            },
            $$slots: { default: !0 }
          });
        };
        b(Xe, (et) => {
          O() && et($e);
        });
      }
      E((et) => L(pe, 1, et), [
        () => $(V("px-4 py-3 border-b flex items-center justify-between", t(z).toolbar))
      ]), o(ge, pe);
    };
    b(ne, (ge) => {
      (P() || O() || I().length > 0) && ge(de);
    });
  }
  var Ce = u(ne, 2), be = i(Ce), ce = i(be), he = i(ce), Se = i(he);
  {
    var Be = (ge) => {
      var pe = of(), je = i(pe);
      je.__change = [nf, le], E(
        (Te) => {
          L(pe, 1, Te), Qt(je, t(Z));
        },
        [
          () => $(V(t(p).header, t(z).headerCell, "w-12"))
        ]
      ), o(ge, pe);
    };
    b(Se, (ge) => {
      T() && ge(Be);
    });
  }
  var Re = u(Se);
  Ye(Re, 17, a, (ge) => ge.key, (ge, pe) => {
    var je = df();
    je.__click = [lf, pe, fe];
    var Te = i(je), qe = i(Te), Fe = i(qe), Ve = u(qe, 2);
    {
      var Ge = (Xe) => {
        var $e = sf(), et = i($e), nt = u(et, 2);
        E(
          (ot, Ue) => {
            L(et, 0, ot), L(nt, 0, Ue);
          },
          [
            () => $(V("w-3 h-3 transition-colors", t(D) === t(pe).key && t(C) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => $(V("w-3 h-3 -mt-1 transition-colors", t(D) === t(pe).key && t(C) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(Xe, $e);
      };
      b(Ve, (Xe) => {
        t(pe).sortable && Xe(Ge);
      });
    }
    De(je, (Xe, $e) => ft?.(Xe, $e), () => ({ enabled: t(pe).sortable, strength: 0.05 })), E(
      (Xe) => {
        L(je, 1, Xe), pt(je, t(pe).width ? `width: ${t(pe).width}` : void 0), ie(Fe, t(pe).label);
      },
      [
        () => $(V(t(p).header, t(z).headerCell, "font-semibold text-left", t(pe).align && `text-${t(pe).align}`, t(pe).sortable && "cursor-pointer select-none"))
      ]
    ), o(ge, je);
  });
  var Ne = u(Re);
  {
    var Me = (ge) => {
      var pe = cf();
      E((je) => L(pe, 1, je), [
        () => $(V(t(p).header, t(z).headerCell, "w-32"))
      ]), o(ge, pe);
    };
    b(Ne, (ge) => {
      I().length > 0 && ge(Me);
    });
  }
  var xe = u(ce), Pe = i(xe);
  {
    var Oe = (ge) => {
      var pe = vf(), je = i(pe);
      E(
        (Te) => {
          ye(je, "colspan", a().length + (T() ? 1 : 0) + (I().length > 0 ? 1 : 0)), L(je, 1, Te);
        },
        [
          () => $(V(t(p).cell, t(z).cell, "text-center"))
        ]
      ), o(ge, pe);
    }, me = (ge) => {
      var pe = Ae(), je = _e(pe);
      {
        var Te = (Fe) => {
          var Ve = uf(), Ge = i(Ve), Xe = i(Ge), $e = u(i(Xe), 2), et = i($e);
          E(
            (nt) => {
              ye(Ge, "colspan", a().length + (T() ? 1 : 0) + (I().length > 0 ? 1 : 0)), L(Ge, 1, nt), ie(et, F());
            },
            [
              () => $(V(t(p).cell, t(z).cell, "text-center text-gray-400"))
            ]
          ), o(Fe, Ve);
        }, qe = (Fe) => {
          var Ve = Ae(), Ge = _e(Ve);
          Ye(Ge, 19, () => t(ue), (Xe) => Xe.id, (Xe, $e, et) => {
            const nt = /* @__PURE__ */ Ee(() => t(k).has(t($e).id));
            var ot = kf();
            ot.__click = () => ae(t($e), t(et));
            var Ue = i(ot);
            {
              var Ie = (it) => {
                var ht = gf(), St = i(ht);
                St.__change = [ff, W, $e], St.__click = [bf], E(
                  (_t) => {
                    L(ht, 1, _t), Qt(St, t(nt));
                  },
                  [
                    () => $(V(t(p).cell, t(z).cell))
                  ]
                ), o(it, ht);
              };
              b(Ue, (it) => {
                T() && it(Ie);
              });
            }
            var He = u(Ue);
            Ye(He, 17, a, (it) => it.key, (it, ht) => {
              var St = xf();
              St.__dblclick = [mf, G, ht, re, $e];
              var _t = i(St);
              {
                var xt = (Ht) => {
                  var ir = pf();
                  ir.__keydown = [hf, S, te], Bt("blur", ir, S), or(ir, () => t(w), (_r) => X(w, _r)), o(Ht, ir);
                }, Nt = (Ht) => {
                  var ir = Ae(), _r = _e(ir);
                  xr(_r, () => J(t(ht), t($e)[t(ht).key], t($e))), o(Ht, ir);
                };
                b(_t, (Ht) => {
                  t(M)?.rowId === t($e).id && t(M)?.column === t(ht).key ? Ht(xt) : Ht(Nt, !1);
                });
              }
              E((Ht) => L(St, 1, Ht), [
                () => $(V(t(p).cell, t(z).cell, t(ht).align && `text-${t(ht).align}`))
              ]), o(it, St);
            });
            var tt = u(He);
            {
              var ct = (it) => {
                var ht = yf(), St = i(ht);
                Ye(St, 21, I, ut, (_t, xt) => {
                  var Nt = Ae(), Ht = _e(Nt);
                  {
                    var ir = (_r) => {
                      {
                        let oi = /* @__PURE__ */ Ee(() => t(xt).variant || "secondary");
                        tr(_r, {
                          size: "sm",
                          get variant() {
                            return t(oi);
                          },
                          onclick: (Ra) => {
                            Ra.stopPropagation(), A("actionClick", { row: t($e), action: t(xt).action });
                          },
                          children: (Ra, V1) => {
                            var mn = _f(), hn = _e(mn);
                            {
                              var ii = (Na) => {
                                var pn = wf(), si = i(pn);
                                E(() => ie(si, t(xt).icon)), o(Na, pn);
                              };
                              b(hn, (Na) => {
                                t(xt).icon && Na(ii);
                              });
                            }
                            var li = u(hn);
                            E(() => ie(li, ` ${t(xt).label ?? ""}`)), o(Ra, mn);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    };
                    b(Ht, (_r) => {
                      (!t(xt).show || t(xt).show(t($e))) && _r(ir);
                    });
                  }
                  o(_t, Nt);
                }), E((_t) => L(ht, 1, _t), [
                  () => $(V(t(p).cell, t(z).cell))
                ]), o(it, ht);
              };
              b(tt, (it) => {
                I().length > 0 && it(ct);
              });
            }
            E((it) => L(ot, 1, it), [
              () => $(V(t(z).row, t(z).rowHover, t(nt) && t(z).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), rt(1, ot, () => mt, () => ({ direction: "up", duration: 100, delay: t(et) * 20 })), o(Xe, ot);
          }), o(Fe, Ve);
        };
        b(
          je,
          (Fe) => {
            t(ue).length === 0 ? Fe(Te) : Fe(qe, !1);
          },
          !0
        );
      }
      o(ge, pe);
    };
    b(Pe, (ge) => {
      c() ? ge(Oe) : ge(me, !1);
    });
  }
  De(Ce, (ge, pe) => Ct?.(ge, pe), () => ({ blur: "sm", opacity: "subtle" }));
  var we = u(Ce, 2);
  {
    var ze = (ge) => {
      var pe = Cf(), je = i(pe), Te = i(je), qe = i(Te), Fe = u(je, 2), Ve = i(Fe);
      {
        let $e = /* @__PURE__ */ Ee(() => B() === 1);
        tr(Ve, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t($e);
          },
          onclick: () => A("pageChange", { page: B() - 1 }),
          children: (et, nt) => {
            var ot = Et("Previous");
            o(et, ot);
          },
          $$slots: { default: !0 }
        });
      }
      var Ge = u(Ve, 2);
      Ye(
        Ge,
        17,
        () => Array.from({ length: Math.min(5, t(oe)) }, ($e, et) => Math.max(1, Math.min(t(oe) - 4, B() - 2)) + et),
        ut,
        ($e, et) => {
          {
            let nt = /* @__PURE__ */ Ee(() => t(et) === B() ? "primary" : "secondary");
            tr($e, {
              size: "sm",
              get variant() {
                return t(nt);
              },
              onclick: () => A("pageChange", { page: t(et) }),
              children: (ot, Ue) => {
                var Ie = Et();
                E(() => ie(Ie, t(et))), o(ot, Ie);
              },
              $$slots: { default: !0 }
            });
          }
        }
      );
      var Xe = u(Ge, 2);
      {
        let $e = /* @__PURE__ */ Ee(() => B() === t(oe));
        tr(Xe, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t($e);
          },
          onclick: () => A("pageChange", { page: B() + 1 }),
          children: (et, nt) => {
            var ot = Et("Next");
            o(et, ot);
          },
          $$slots: { default: !0 }
        });
      }
      E(
        ($e, et) => {
          L(pe, 1, $e), ie(qe, `Showing ${(B() - 1) * x() + 1} to ${et ?? ""} of ${e.totalRows ?? t(h).length ?? ""} entries`);
        },
        [
          () => $(V("px-4 py-3 border-t flex items-center justify-between", t(z).pagination)),
          () => Math.min(B() * x(), e.totalRows ?? t(h).length)
        ]
      ), o(ge, pe);
    };
    b(we, (ge) => {
      Q() && t(oe) > 1 && ge(ze);
    });
  }
  E(
    (ge) => {
      L(se, 1, $(t(ee))), pt(Ce, g() ? `max-height: ${g()}` : void 0), L(ce, 1, ge);
    },
    [
      () => $(V(t(z).header, j() && "sticky top-0 z-10"))
    ]
  ), o(r, se), Ze();
}
bt(["click", "change", "dblclick", "keydown"]);
function Tf(r, e, a, n, l) {
  if (t(e))
    a(a().filter((d) => !t(n).some((c) => c.id === d)));
  else {
    const d = t(n).map((c) => c.id);
    a([.../* @__PURE__ */ new Set([...a(), ...d])]);
  }
  l("selectionChange", { selectedRows: a() });
}
function Mf(r, e, a, n, l) {
  e({}), X(a, ""), n(1), l("filter", { filterConfig: {} });
}
var Af = (r, e) => X(e, !t(e)), zf = /* @__PURE__ */ v('<button class="text-sm text-blue-400 hover:text-blue-300 transition-colors">Clear Filters</button>'), If = /* @__PURE__ */ v('<div class="text-sm opacity-70"> </div>'), Pf = (r, e, a) => e(t(a).key, r.currentTarget.value), Lf = /* @__PURE__ */ v('<div><label class="block text-xs font-medium mb-1 opacity-70"> </label> <input/></div>'), jf = /* @__PURE__ */ v('<div><div class="grid gap-4"></div></div>'), Df = /* @__PURE__ */ v('<th><input type="checkbox" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"/></th>'), Rf = (r, e, a) => t(e).sortable && a(t(e).key), Nf = /* @__PURE__ */ v('<div class="w-3.5 h-3.5 opacity-30"><!> <!></div>'), Of = /* @__PURE__ */ v('<th><div class="flex items-center gap-2"><span class="font-semibold"> </span> <!></div></th>'), qf = /* @__PURE__ */ v('<tr><td class="text-center py-8"><div class="inline-flex items-center gap-2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Loading...</div></td></tr>'), Bf = /* @__PURE__ */ v('<tr><td class="text-center py-8 opacity-60"> </td></tr>'), Ff = (r, e, a) => e(t(a).id), Hf = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"/></td>'), Vf = /* @__PURE__ */ v("<td><!></td>"), Gf = /* @__PURE__ */ v("<tr><!><!></tr>"), Uf = (r, e) => e(Math.max(1, e() - 1)), Yf = (r, e, a) => e(Math.min(t(a), e() + 1)), Wf = /* @__PURE__ */ v('<div><div class="text-sm opacity-70"> </div> <div class="flex items-center gap-2"><button>Previous</button> <span class="px-3 py-1 text-sm"> </span> <button>Next</button></div></div>'), Xf = /* @__PURE__ */ v('<div><div><div class="flex items-center gap-4"><div class="relative"><!> <input placeholder="Search..."/></div> <button title="Toggle Filters"><!></button> <!></div> <!></div> <!> <div><table><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Kf = {
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
function Tp(r, e) {
  Ke(e, !0), Je(r, Kf);
  let a = s(e, "sortConfig", 15), n = s(e, "filterConfig", 15), l = s(e, "loading", 3, !1), d = s(e, "selectable", 3, !1), c = s(e, "selectedRows", 31, () => lt([])), g = s(e, "striped", 3, !1), _ = s(e, "bordered", 3, !0), N = s(e, "hover", 3, !0), m = s(e, "size", 3, "md"), P = s(e, "variant", 3, "glass"), R = s(e, "stickyHeader", 3, !1);
  s(e, "virtualScroll", 3, !1);
  let T = s(e, "pageSize", 3, 10), y = s(e, "currentPage", 15, 1), f = s(e, "showPagination", 3, !1), G = s(e, "emptyMessage", 3, "No data available"), Q = s(e, "class", 3, ""), x = /* @__PURE__ */ vt(e, [
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
  const B = zt();
  let j = /* @__PURE__ */ ke(""), O = /* @__PURE__ */ ke(!1), I;
  const F = {
    sm: { table: "text-sm", cell: "px-3 py-2", header: "px-3 py-2.5" },
    md: { table: "text-base", cell: "px-4 py-3", header: "px-4 py-3" },
    lg: { table: "text-lg", cell: "px-6 py-4", header: "px-6 py-4" }
  }, H = {
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
  }, A = F[m()], U = H[P()], K = /* @__PURE__ */ Ee(() => () => {
    let me = [...e.data];
    if (t(j).trim()) {
      const we = t(j).toLowerCase();
      me = me.filter((ze) => e.columns.some((ge) => String(ze[ge.key]).toLowerCase().includes(we)));
    }
    return n() && (me = me.filter((we) => Object.entries(n()).every(([ze, ge]) => {
      if (!ge) return !0;
      const pe = String(we[ze]).toLowerCase(), je = String(ge).toLowerCase();
      return pe.includes(je);
    }))), me;
  }), D = /* @__PURE__ */ Ee(() => () => {
    if (!a()) return t(K);
    const { key: me, direction: we } = a();
    return [...t(K)].sort((ze, ge) => {
      const pe = ze[me], je = ge[me];
      let Te = 0;
      return pe < je && (Te = -1), pe > je && (Te = 1), we === "desc" ? -Te : Te;
    });
  }), C = /* @__PURE__ */ Ee(() => () => {
    if (!f()) return t(D);
    const me = (y() - 1) * T(), we = me + T();
    return t(D).slice(me, we);
  }), k = /* @__PURE__ */ Ee(() => () => f() ? Math.ceil((e.totalRows || t(D).length) / T()) : 1), M = /* @__PURE__ */ Ee(() => () => !d() || t(C).length === 0 ? !1 : t(C).every((me) => c().includes(me.id))), w = /* @__PURE__ */ Ee(() => () => {
    if (!d() || t(C).length === 0) return !1;
    const me = t(C).filter((we) => c().includes(we.id)).length;
    return me > 0 && me < t(C).length;
  });
  function q(me) {
    e.columns.find((ze) => ze.key === me)?.sortable && (a()?.key === me ? a({
      key: me,
      direction: a().direction === "asc" ? "desc" : "asc"
    }) : a({ key: me, direction: "asc" }), B("sort", { sortConfig: a() }));
  }
  function Y(me) {
    c().includes(me) ? c(c().filter((we) => we !== me)) : c([...c(), me]), B("selectionChange", { selectedRows: c() });
  }
  function z(me, we) {
    n() || n({}), we.trim() ? n(n()[me] = we, !0) : delete n()[me], y(1), B("filter", { filterConfig: n() });
  }
  function p(me) {
    return !a() || a().key !== me ? null : a().direction === "asc" ? _n : Kr;
  }
  function h(me) {
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
    const ze = me[we.key];
    return we.render ? we.render(ze, me) : ze;
  }
  var ue = Xf();
  Qe(ue, (me) => ({ class: me, ...x }), [() => V("w-full", Q())], void 0, "svelte-1tqav43");
  var fe = i(ue), ve = i(fe), ae = i(ve), W = i(ae);
  Kn(W, {
    size: 16,
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
  });
  var le = u(W, 2), re = u(ae, 2);
  re.__click = [Af, O];
  var S = i(re);
  mi(S, { size: 16 });
  var te = u(re, 2);
  {
    var J = (me) => {
      var we = zf();
      we.__click = [
        Mf,
        n,
        j,
        y,
        B
      ], o(me, we);
    };
    b(te, (me) => {
      (Object.keys(n() || {}).length > 0 || t(j)) && me(J);
    });
  }
  var Z = u(ve, 2);
  {
    var ee = (me) => {
      var we = If(), ze = i(we);
      E(() => ie(ze, `${c().length ?? ""} of ${(e.totalRows || t(D).length) ?? ""} selected`)), o(me, we);
    };
    b(Z, (me) => {
      d() && c().length > 0 && me(ee);
    });
  }
  var se = u(fe, 2);
  {
    var ne = (me) => {
      var we = jf(), ze = i(we);
      Ye(ze, 21, () => e.columns.filter((ge) => ge.filterable), ut, (ge, pe) => {
        var je = Lf(), Te = i(je), qe = i(Te), Fe = u(Te, 2);
        Fe.__input = [Pf, z, pe], E(
          (Ve, Ge) => {
            ye(Te, "for", `filter-${t(pe).key}`), ie(qe, t(pe).label), ye(Fe, "id", `filter-${t(pe).key}`), Vo(Fe, n()?.[t(pe).key] || ""), ye(Fe, "placeholder", Ve), L(Fe, 1, Ge, "svelte-1tqav43");
          },
          [
            () => `Filter by ${t(pe).label.toLowerCase()}...`,
            () => $(V("w-full px-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400/50"))
          ]
        ), o(ge, je);
      }), E(
        (ge, pe) => {
          L(we, 1, ge, "svelte-1tqav43"), pt(ze, `grid-template-columns: repeat(${pe ?? ""}, 1fr);`);
        },
        [
          () => $(V("p-4 border-b bg-white/5", U.header)),
          () => e.columns.filter((ge) => ge.filterable).length
        ]
      ), o(me, we);
    };
    b(se, (me) => {
      t(O) && me(ne);
    });
  }
  var de = u(se, 2), Ce = i(de), be = i(Ce), ce = i(be), he = i(ce);
  {
    var Se = (me) => {
      var we = Df(), ze = i(we);
      ze.__change = [
        Tf,
        M,
        c,
        C,
        B
      ], E(
        (ge) => {
          L(we, 1, ge, "svelte-1tqav43"), Qt(ze, t(M)), ze.indeterminate = t(w);
        },
        [
          () => $(V("w-8", A.header, U.headerCell, _() && "border-r"))
        ]
      ), o(me, we);
    };
    b(he, (me) => {
      d() && me(Se);
    });
  }
  var Be = u(he);
  Ye(Be, 17, () => e.columns, ut, (me, we) => {
    var ze = Of();
    ze.__click = [Rf, we, q];
    var ge = i(ze), pe = i(ge), je = i(pe), Te = u(pe, 2);
    {
      var qe = (Fe) => {
        const Ve = /* @__PURE__ */ Ee(() => p(t(we).key));
        var Ge = Ae(), Xe = _e(Ge);
        {
          var $e = (nt) => {
            var ot = Ae(), Ue = _e(ot);
            Tt(Ue, () => t(Ve), (Ie, He) => {
              He(Ie, { size: 14 });
            }), o(nt, ot);
          }, et = (nt) => {
            var ot = Nf(), Ue = i(ot);
            _n(Ue, { size: 14, class: "absolute" });
            var Ie = u(Ue, 2);
            Kr(Ie, { size: 14, class: "absolute" }), o(nt, ot);
          };
          b(Xe, (nt) => {
            t(Ve) ? nt($e) : nt(et, !1);
          });
        }
        o(Fe, Ge);
      };
      b(Te, (Fe) => {
        t(we).sortable && Fe(qe);
      });
    }
    E(
      (Fe) => {
        L(ze, 1, Fe, "svelte-1tqav43"), pt(ze, t(we).width ? `width: ${t(we).width}` : void 0), ie(je, t(we).label);
      },
      [
        () => $(V(A.header, U.headerCell, h(t(we).align), t(we).sortable && "cursor-pointer hover:bg-white/5", _() && "border-r last:border-r-0", t(we).headerClass))
      ]
    ), o(me, ze);
  });
  var Re = u(be), Ne = i(Re);
  {
    var Me = (me) => {
      var we = qf(), ze = i(we);
      E(() => ye(ze, "colspan", e.columns.length + (d() ? 1 : 0))), o(me, we);
    }, xe = (me) => {
      var we = Ae(), ze = _e(we);
      {
        var ge = (je) => {
          var Te = Bf(), qe = i(Te), Fe = i(qe);
          E(() => {
            ye(qe, "colspan", e.columns.length + (d() ? 1 : 0)), ie(Fe, G());
          }), o(je, Te);
        }, pe = (je) => {
          var Te = Ae(), qe = _e(Te);
          Ye(qe, 19, () => t(C), (Fe) => Fe.id, (Fe, Ve, Ge) => {
            var Xe = Gf(), $e = i(Xe);
            {
              var et = (ot) => {
                var Ue = Hf(), Ie = i(Ue);
                Ie.__change = [Ff, Y, Ve], E(
                  (He, tt) => {
                    L(Ue, 1, He, "svelte-1tqav43"), Qt(Ie, tt);
                  },
                  [
                    () => $(V(A.cell, U.cell, _() && "border-r")),
                    () => c().includes(t(Ve).id)
                  ]
                ), o(ot, Ue);
              };
              b($e, (ot) => {
                d() && ot(et);
              });
            }
            var nt = u($e);
            Ye(nt, 17, () => e.columns, ut, (ot, Ue) => {
              var Ie = Vf(), He = i(Ie);
              xr(He, () => oe(t(Ve), t(Ue))), E((tt) => L(Ie, 1, tt, "svelte-1tqav43"), [
                () => $(V(A.cell, U.cell, h(t(Ue).align), _() && "border-r last:border-r-0", t(Ue).cellClass))
              ]), o(ot, Ie);
            }), E((ot) => L(Xe, 1, ot, "svelte-1tqav43"), [
              () => $(V(U.row, _() && "border-b last:border-b-0", N() && U.rowHover, g() && t(Ge) % 2 === 1 && "bg-white/5", c().includes(t(Ve).id) && U.rowSelected, "transition-colors duration-150"))
            ]), o(Fe, Xe);
          }), o(je, Te);
        };
        b(
          ze,
          (je) => {
            t(C).length === 0 ? je(ge) : je(pe, !1);
          },
          !0
        );
      }
      o(me, we);
    };
    b(Ne, (me) => {
      l() ? me(Me) : me(xe, !1);
    });
  }
  var Pe = u(de, 2);
  {
    var Oe = (me) => {
      var we = Wf(), ze = i(we), ge = i(ze), pe = u(ze, 2), je = i(pe);
      je.__click = [Uf, y];
      var Te = u(je, 2), qe = i(Te), Fe = u(Te, 2);
      Fe.__click = [Yf, y, k], E(
        (Ve, Ge, Xe, $e) => {
          L(we, 1, Ve, "svelte-1tqav43"), ie(ge, `Showing ${(y() - 1) * T() + 1} to ${Ge ?? ""}
				of ${(e.totalRows || t(D).length) ?? ""} results`), je.disabled = y() === 1, L(je, 1, Xe, "svelte-1tqav43"), ie(qe, `Page ${y() ?? ""} of ${t(k) ?? ""}`), Fe.disabled = y() === t(k), L(Fe, 1, $e, "svelte-1tqav43");
        },
        [
          () => $(V("flex items-center justify-between p-4 border-t rounded-b-lg", U.header)),
          () => Math.min(y() * T(), e.totalRows || t(D).length),
          () => $(V("px-3 py-1 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", "disabled:opacity-50 disabled:cursor-not-allowed")),
          () => $(V("px-3 py-1 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", "disabled:opacity-50 disabled:cursor-not-allowed"))
        ]
      ), o(me, we);
    };
    b(Pe, (me) => {
      f() && t(k) > 1 && me(Oe);
    });
  }
  at(ue, (me) => I = me, () => I), E(
    (me, we, ze, ge, pe, je, Te) => {
      L(fe, 1, me, "svelte-1tqav43"), L(le, 1, we, "svelte-1tqav43"), L(re, 1, ze, "svelte-1tqav43"), L(de, 1, ge, "svelte-1tqav43"), L(Ce, 1, pe, "svelte-1tqav43"), L(be, 1, je, "svelte-1tqav43"), L(Re, 1, Te, "svelte-1tqav43");
    },
    [
      () => $(V("flex items-center justify-between p-4 border-b rounded-t-lg", U.header)),
      () => $(V("pl-9 pr-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400/50")),
      () => $(V("p-2 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", t(O) && "bg-blue-500/20 border-blue-400/40")),
      () => $(V("overflow-x-auto", R() && "max-h-96 overflow-y-auto")),
      () => $(V("w-full", A.table)),
      () => $(V(U.header, R() && "sticky top-0 z-10")),
      () => $(V(U.table))
    ]
  ), or(le, () => t(j), (me) => X(j, me)), o(r, ue), Ze();
}
bt(["click", "input", "change"]);
var Zf = (r, e) => {
  const a = r.target;
  e(a.checked);
}, Qf = /* @__PURE__ */ v('<div><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" aria-label="Select all items" class="rounded bg-transparent border-current"/> <span class="text-sm font-medium"> </span></label></div>'), Jf = /* @__PURE__ */ v('<div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div>'), $f = /* @__PURE__ */ v('<div class="space-y-3"><div class="flex items-start gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div> <div></div></div></div></div>'), eb = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div></div>'), tb = /* @__PURE__ */ v("<div><!></div>"), rb = /* @__PURE__ */ v('<div><div class="text-4xl mb-3"> </div> <p class="text-lg font-medium"> </p></div>'), ab = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, nb = (r) => r.stopPropagation(), ob = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current"/>'), ib = /* @__PURE__ */ v("<img/>"), lb = /* @__PURE__ */ v('<div><span class="text-2xl"> </span></div>'), sb = /* @__PURE__ */ v("<span> </span>"), db = /* @__PURE__ */ v("<p> </p>"), cb = (r, e, a, n) => e(t(a), t(n).action, r), vb = /* @__PURE__ */ v('<span class="mr-1"> </span>'), ub = /* @__PURE__ */ v("<button><!> </button>"), fb = /* @__PURE__ */ v('<div class="flex items-center gap-2"></div>'), bb = /* @__PURE__ */ v('<div class="flex items-center gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!></div>'), gb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, mb = (r) => r.stopPropagation(), hb = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), pb = /* @__PURE__ */ v("<img/>"), xb = /* @__PURE__ */ v('<div><span class="text-2xl"> </span></div>'), wb = /* @__PURE__ */ v("<span> </span>"), _b = /* @__PURE__ */ v("<p> </p>"), yb = /* @__PURE__ */ v("<p> </p>"), kb = /* @__PURE__ */ v("<span> </span>"), Cb = /* @__PURE__ */ v('<div class="flex flex-wrap gap-3 mt-2"></div>'), Sb = (r, e, a, n) => e(t(a), t(n).action, r), Eb = /* @__PURE__ */ v('<span class="mr-1"> </span>'), Tb = /* @__PURE__ */ v("<button><!> </button>"), Mb = /* @__PURE__ */ v('<div class="flex flex-col gap-2"></div>'), Ab = /* @__PURE__ */ v('<div class="space-y-3"><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h3> </h3> <!></div> <!> <!> <!></div> <!></div></div>'), zb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Ib = (r) => r.stopPropagation(), Pb = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), Lb = /* @__PURE__ */ v("<img/>"), jb = /* @__PURE__ */ v('<div><span class="text-3xl"> </span></div>'), Db = /* @__PURE__ */ v("<span> </span>"), Rb = (r, e, a, n) => e(t(a), t(n).action, r), Nb = /* @__PURE__ */ v('<span class="mr-1"> </span>'), Ob = /* @__PURE__ */ v("<button><!> </button>"), qb = /* @__PURE__ */ v('<div class="flex items-center gap-2"></div>'), Bb = /* @__PURE__ */ v("<p> </p>"), Fb = /* @__PURE__ */ v("<p> </p>"), Hb = /* @__PURE__ */ v("<span> </span>"), Vb = /* @__PURE__ */ v('<div class="flex flex-wrap gap-3"></div>'), Gb = /* @__PURE__ */ v('<div><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!> <!> <!></div></div></div>'), Ub = /* @__PURE__ */ v("<div><!></div>"), Yb = /* @__PURE__ */ v('<div role="list" aria-label="Item list"><!> <div class="divide-y divide-gray-600"><!></div></div>');
const Wb = {
  hash: "svelte-1r856r1",
  code: `
	/* Terminal glow effects */.terminal .list-item:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 15px var(--terminal-green-glow);}`
};
function Mp(r, e) {
  Ke(e, !0), Je(r, Wb);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "layout", 3, "simple"), c = s(e, "selectable", 3, !1), g = s(e, "multiSelect", 3, !1), _ = s(e, "selectedItems", 19, () => /* @__PURE__ */ new Set()), N = s(e, "loading", 3, !1), m = s(e, "loadingCount", 3, 3), P = s(e, "emptyMessage", 3, "No items found"), R = s(e, "emptyIcon", 3, "📋");
  s(e, "dividers", 3, !0);
  const T = s(e, "hover", 3, !0), y = s(e, "animated", 3, !0), f = s(e, "class", 3, ""), G = zt();
  let Q = /* @__PURE__ */ ke(lt(_()));
  const x = {
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
      item: `bg-black/60 border-${Le.terminal.green}/30 text-${Le.terminal.green}`,
      itemHover: `hover:bg-${Le.terminal.green}/5`,
      itemSelected: `bg-${Le.terminal.green}/10 border-${Le.terminal.green}`,
      title: `text-${Le.terminal.green}`,
      subtitle: `text-${Le.terminal.green}/80`,
      description: `text-${Le.terminal.green}/60`,
      metadata: `text-${Le.terminal.green}/50`,
      badge: `bg-${Le.terminal.green} text-black`,
      skeleton: `bg-${Le.terminal.green}/10`
    }
  }, B = {
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
  }, j = /* @__PURE__ */ Ee(() => x[n()]), O = /* @__PURE__ */ Ee(() => B[l()]);
  function I(h, oe) {
    h.disabled || (c() && F(h, !t(Q).has(h.id)), G("itemClick", { item: h, index: oe }));
  }
  function F(h, oe) {
    h.disabled || (g() ? oe ? t(Q).add(h.id) : t(Q).delete(h.id) : oe ? X(Q, /* @__PURE__ */ new Set([h.id]), !0) : X(Q, /* @__PURE__ */ new Set(), !0), X(Q, new Set(t(Q)), !0), G("itemSelect", { item: h, selected: oe }));
  }
  function H(h, oe, ue) {
    ue.stopPropagation(), G("actionClick", { item: h, action: oe });
  }
  function A(h) {
    h ? X(Q, new Set(a().filter((oe) => !oe.disabled).map((oe) => oe.id)), !0) : X(Q, /* @__PURE__ */ new Set(), !0), G("selectAll", { selected: h });
  }
  const U = /* @__PURE__ */ Ee(() => a().length > 0 && a().filter((h) => !h.disabled).every((h) => t(Q).has(h.id))), K = /* @__PURE__ */ Ee(() => V("rounded-lg overflow-hidden font-mono", t(j).container, t(O).container, f()));
  function D(h = "secondary") {
    const oe = "px-2 py-1 rounded text-xs font-medium transition-colors";
    switch (h) {
      case "primary":
        return `${oe} bg-blue-600 text-white hover:bg-blue-700`;
      case "danger":
        return `${oe} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${oe} bg-gray-600 text-white hover:bg-gray-700`;
    }
  }
  const C = /* @__PURE__ */ Ee(() => Array.from({ length: m() }, (h, oe) => ({ id: `skeleton-${oe}` })));
  var k = Yb(), M = i(k);
  {
    var w = (h) => {
      var oe = Qf(), ue = i(oe), fe = i(ue);
      fe.__change = [Zf, A];
      var ve = u(fe, 2), ae = i(ve);
      E(
        (W) => {
          L(oe, 1, `px-4 py-3 border-b ${t(j).item ?? ""} border-gray-600`), Qt(fe, t(U)), ie(ae, `${t(Q).size ?? ""} of ${W ?? ""} selected`);
        },
        [() => a().filter((W) => !W.disabled).length]
      ), o(h, oe);
    };
    b(M, (h) => {
      c() && g() && a().length > 0 && h(w);
    });
  }
  var q = u(M, 2), Y = i(q);
  {
    var z = (h) => {
      var oe = Ae(), ue = _e(oe);
      Ye(ue, 19, () => t(C), (fe) => fe.id, (fe, ve, ae) => {
        var W = tb(), le = i(W);
        {
          var re = (te) => {
            var J = Jf(), Z = i(J), ee = u(Z, 2), se = i(ee), ne = u(se, 2);
            E(
              (de, Ce, be) => {
                L(Z, 1, de), L(se, 1, Ce), L(ne, 1, be);
              },
              [
                () => $(V("rounded-full", t(O).avatar, t(j).skeleton)),
                () => $(V("h-4 rounded", t(j).skeleton, "w-3/4")),
                () => $(V("h-3 rounded", t(j).skeleton, "w-1/2"))
              ]
            ), o(te, J);
          }, S = (te) => {
            var J = Ae(), Z = _e(J);
            {
              var ee = (ne) => {
                var de = $f(), Ce = i(de), be = i(Ce), ce = u(be, 2), he = i(ce), Se = u(he, 2), Be = u(Se, 2);
                E(
                  (Re, Ne, Me, xe) => {
                    L(be, 1, Re), L(he, 1, Ne), L(Se, 1, Me), L(Be, 1, xe);
                  },
                  [
                    () => $(V("rounded-full", t(O).avatar, t(j).skeleton)),
                    () => $(V("h-4 rounded", t(j).skeleton, "w-2/3")),
                    () => $(V("h-3 rounded", t(j).skeleton, "w-1/2")),
                    () => $(V("h-3 rounded", t(j).skeleton, "w-full"))
                  ]
                ), o(ne, de);
              }, se = (ne) => {
                var de = eb(), Ce = i(de), be = i(Ce), ce = u(be, 2), he = i(ce), Se = u(he, 2);
                E(
                  (Be, Re, Ne) => {
                    L(de, 1, `border rounded-lg p-4 space-y-3 ${t(j).skeleton ?? ""}`), L(be, 1, Be), L(he, 1, Re), L(Se, 1, Ne);
                  },
                  [
                    () => $(V("rounded-full", t(O).avatar, t(j).skeleton)),
                    () => $(V("h-4 rounded", t(j).skeleton, "w-3/4")),
                    () => $(V("h-3 rounded", t(j).skeleton, "w-1/2"))
                  ]
                ), o(ne, de);
              };
              b(
                Z,
                (ne) => {
                  d() === "detailed" ? ne(ee) : ne(se, !1);
                },
                !0
              );
            }
            o(te, J);
          };
          b(le, (te) => {
            d() === "simple" ? te(re) : te(S, !1);
          });
        }
        E((te) => L(W, 1, te), [
          () => $(V(t(O).item, t(j).item, "animate-pulse"))
        ]), rt(1, W, () => mt, () => ({ direction: "up", duration: 200, delay: t(ae) * 50 })), o(fe, W);
      }), o(h, oe);
    }, p = (h) => {
      var oe = Ae(), ue = _e(oe);
      {
        var fe = (ae) => {
          var W = rb(), le = i(W), re = i(le), S = u(le, 2), te = i(S);
          E(() => {
            L(W, 1, `py-12 text-center ${t(j).description ?? ""}`), ie(re, R()), ie(te, P());
          }), o(ae, W);
        }, ve = (ae) => {
          var W = Ae(), le = _e(W);
          Ye(le, 19, a, (re) => re.id, (re, S, te) => {
            const J = /* @__PURE__ */ Ee(() => t(Q).has(t(S).id));
            var Z = Ub(), ee = () => I(t(S), t(te)), se = (be) => (be.key === "Enter" || be.key === " ") && I(t(S), t(te));
            Qe(
              Z,
              (be) => ({
                class: be,
                onclick: ee,
                onkeydown: se,
                role: c() ? "option" : "listitem",
                ...c() && !t(S).disabled ? { tabindex: 0 } : {},
                "aria-selected": c() ? t(J) : void 0,
                "aria-label": t(S).title,
                "aria-describedby": t(S).description ? `item-${t(S).id}-description` : void 0
              }),
              [
                () => V(t(O).item, t(j).item, T() && !t(S).disabled && t(j).itemHover, t(J) && t(j).itemSelected, t(S).disabled && "opacity-50", !t(S).disabled && "cursor-pointer", "transition-all duration-200")
              ]
            );
            var ne = i(Z);
            {
              var de = (be) => {
                var ce = bb(), he = i(ce);
                {
                  var Se = (Te) => {
                    var qe = ob();
                    qe.__change = [ab, F, S], qe.__click = [nb], E(() => {
                      Qt(qe, t(J)), qe.disabled = t(S).disabled;
                    }), o(Te, qe);
                  };
                  b(he, (Te) => {
                    c() && Te(Se);
                  });
                }
                var Be = u(he, 2);
                {
                  var Re = (Te) => {
                    var qe = ib();
                    E(
                      (Fe) => {
                        ye(qe, "src", t(S).avatar), ye(qe, "alt", t(S).title), L(qe, 1, Fe);
                      },
                      [
                        () => $(V("rounded-full object-cover", t(O).avatar))
                      ]
                    ), o(Te, qe);
                  }, Ne = (Te) => {
                    var qe = Ae(), Fe = _e(qe);
                    {
                      var Ve = (Ge) => {
                        var Xe = lb(), $e = i(Xe), et = i($e);
                        E(
                          (nt) => {
                            L(Xe, 1, nt), ie(et, t(S).icon);
                          },
                          [
                            () => $(V("flex items-center justify-center", t(O).icon))
                          ]
                        ), o(Ge, Xe);
                      };
                      b(
                        Fe,
                        (Ge) => {
                          t(S).icon && Ge(Ve);
                        },
                        !0
                      );
                    }
                    o(Te, qe);
                  };
                  b(Be, (Te) => {
                    t(S).avatar ? Te(Re) : Te(Ne, !1);
                  });
                }
                var Me = u(Be, 2), xe = i(Me), Pe = i(xe), Oe = i(Pe), me = u(Pe, 2);
                {
                  var we = (Te) => {
                    var qe = sb(), Fe = i(qe);
                    E(
                      (Ve) => {
                        L(qe, 1, Ve), ie(Fe, t(S).badge);
                      },
                      [
                        () => $(V("rounded-full font-medium", t(O).badge, t(j).badge))
                      ]
                    ), o(Te, qe);
                  };
                  b(me, (Te) => {
                    t(S).badge && Te(we);
                  });
                }
                var ze = u(xe, 2);
                {
                  var ge = (Te) => {
                    var qe = db(), Fe = i(qe);
                    E(
                      (Ve) => {
                        L(qe, 1, Ve), ie(Fe, t(S).subtitle);
                      },
                      [
                        () => $(V("text-sm truncate", t(j).subtitle))
                      ]
                    ), o(Te, qe);
                  };
                  b(ze, (Te) => {
                    t(S).subtitle && Te(ge);
                  });
                }
                var pe = u(Me, 2);
                {
                  var je = (Te) => {
                    var qe = fb();
                    Ye(qe, 21, () => t(S).actions, (Fe) => Fe.action, (Fe, Ve) => {
                      var Ge = ub();
                      Ge.__click = [cb, H, S, Ve];
                      var Xe = i(Ge);
                      {
                        var $e = (nt) => {
                          var ot = vb(), Ue = i(ot);
                          E(() => ie(Ue, t(Ve).icon)), o(nt, ot);
                        };
                        b(Xe, (nt) => {
                          t(Ve).icon && nt($e);
                        });
                      }
                      var et = u(Xe);
                      De(Ge, (nt, ot) => ft?.(nt, ot), () => ({ strength: 0.1 })), E(
                        (nt) => {
                          L(Ge, 1, nt), ie(et, ` ${t(Ve).label ?? ""}`);
                        },
                        [() => $(D(t(Ve).variant))]
                      ), o(Fe, Ge);
                    }), o(Te, qe);
                  };
                  b(pe, (Te) => {
                    t(S).actions && t(S).actions.length > 0 && Te(je);
                  });
                }
                E(
                  (Te) => {
                    L(Pe, 1, Te), ie(Oe, t(S).title);
                  },
                  [
                    () => $(V("font-medium truncate", t(j).title))
                  ]
                ), o(be, ce);
              }, Ce = (be) => {
                var ce = Ae(), he = _e(ce);
                {
                  var Se = (Re) => {
                    var Ne = Ab(), Me = i(Ne), xe = i(Me);
                    {
                      var Pe = (Ue) => {
                        var Ie = hb();
                        Ie.__change = [gb, F, S], Ie.__click = [mb], E(() => {
                          Qt(Ie, t(J)), Ie.disabled = t(S).disabled;
                        }), o(Ue, Ie);
                      };
                      b(xe, (Ue) => {
                        c() && Ue(Pe);
                      });
                    }
                    var Oe = u(xe, 2);
                    {
                      var me = (Ue) => {
                        var Ie = pb();
                        E(
                          (He) => {
                            ye(Ie, "src", t(S).avatar), ye(Ie, "alt", t(S).title), L(Ie, 1, He);
                          },
                          [
                            () => $(V("rounded-full object-cover", t(O).avatar))
                          ]
                        ), o(Ue, Ie);
                      }, we = (Ue) => {
                        var Ie = Ae(), He = _e(Ie);
                        {
                          var tt = (ct) => {
                            var it = xb(), ht = i(it), St = i(ht);
                            E(
                              (_t) => {
                                L(it, 1, _t), ie(St, t(S).icon);
                              },
                              [
                                () => $(V("flex items-center justify-center", t(O).icon))
                              ]
                            ), o(ct, it);
                          };
                          b(
                            He,
                            (ct) => {
                              t(S).icon && ct(tt);
                            },
                            !0
                          );
                        }
                        o(Ue, Ie);
                      };
                      b(Oe, (Ue) => {
                        t(S).avatar ? Ue(me) : Ue(we, !1);
                      });
                    }
                    var ze = u(Oe, 2), ge = i(ze), pe = i(ge), je = i(pe), Te = u(pe, 2);
                    {
                      var qe = (Ue) => {
                        var Ie = wb(), He = i(Ie);
                        E(
                          (tt) => {
                            L(Ie, 1, tt), ie(He, t(S).badge);
                          },
                          [
                            () => $(V("rounded-full font-medium", t(O).badge, t(j).badge))
                          ]
                        ), o(Ue, Ie);
                      };
                      b(Te, (Ue) => {
                        t(S).badge && Ue(qe);
                      });
                    }
                    var Fe = u(ge, 2);
                    {
                      var Ve = (Ue) => {
                        var Ie = _b(), He = i(Ie);
                        E(
                          (tt) => {
                            L(Ie, 1, tt), ie(He, t(S).subtitle);
                          },
                          [
                            () => $(V("text-sm mb-2", t(j).subtitle))
                          ]
                        ), o(Ue, Ie);
                      };
                      b(Fe, (Ue) => {
                        t(S).subtitle && Ue(Ve);
                      });
                    }
                    var Ge = u(Fe, 2);
                    {
                      var Xe = (Ue) => {
                        var Ie = yb(), He = i(Ie);
                        E(
                          (tt) => {
                            L(Ie, 1, tt), ie(He, t(S).description);
                          },
                          [
                            () => $(V("text-sm leading-relaxed", t(j).description))
                          ]
                        ), o(Ue, Ie);
                      };
                      b(Ge, (Ue) => {
                        t(S).description && Ue(Xe);
                      });
                    }
                    var $e = u(Ge, 2);
                    {
                      var et = (Ue) => {
                        var Ie = Cb();
                        Ye(Ie, 21, () => Object.entries(t(S).metadata), ut, (He, tt) => {
                          var ct = /* @__PURE__ */ Ee(() => Zr(t(tt), 2));
                          let it = () => t(ct)[0], ht = () => t(ct)[1];
                          var St = kb(), _t = i(St);
                          E(
                            (xt) => {
                              L(St, 1, xt), ie(_t, `${it() ?? ""}: ${ht() ?? ""}`);
                            },
                            [() => $(V("text-xs", t(j).metadata))]
                          ), o(He, St);
                        }), o(Ue, Ie);
                      };
                      b($e, (Ue) => {
                        t(S).metadata && Ue(et);
                      });
                    }
                    var nt = u(ze, 2);
                    {
                      var ot = (Ue) => {
                        var Ie = Mb();
                        Ye(Ie, 21, () => t(S).actions, (He) => He.action, (He, tt) => {
                          var ct = Tb();
                          ct.__click = [Sb, H, S, tt];
                          var it = i(ct);
                          {
                            var ht = (_t) => {
                              var xt = Eb(), Nt = i(xt);
                              E(() => ie(Nt, t(tt).icon)), o(_t, xt);
                            };
                            b(it, (_t) => {
                              t(tt).icon && _t(ht);
                            });
                          }
                          var St = u(it);
                          De(ct, (_t, xt) => ft?.(_t, xt), () => ({ strength: 0.1 })), E(
                            (_t) => {
                              L(ct, 1, _t), ie(St, ` ${t(tt).label ?? ""}`);
                            },
                            [() => $(D(t(tt).variant))]
                          ), o(He, ct);
                        }), o(Ue, Ie);
                      };
                      b(nt, (Ue) => {
                        t(S).actions && t(S).actions.length > 0 && Ue(ot);
                      });
                    }
                    E(
                      (Ue) => {
                        L(pe, 1, Ue), ie(je, t(S).title);
                      },
                      [
                        () => $(V("font-semibold", t(j).title))
                      ]
                    ), o(Re, Ne);
                  }, Be = (Re) => {
                    var Ne = Gb(), Me = i(Ne), xe = i(Me);
                    {
                      var Pe = (Ie) => {
                        var He = Pb();
                        He.__change = [zb, F, S], He.__click = [Ib], E(() => {
                          Qt(He, t(J)), He.disabled = t(S).disabled;
                        }), o(Ie, He);
                      };
                      b(xe, (Ie) => {
                        c() && Ie(Pe);
                      });
                    }
                    var Oe = u(xe, 2);
                    {
                      var me = (Ie) => {
                        var He = Lb();
                        E(
                          (tt) => {
                            ye(He, "src", t(S).avatar), ye(He, "alt", t(S).title), L(He, 1, tt);
                          },
                          [
                            () => $(V("rounded-full object-cover", t(O).avatar))
                          ]
                        ), o(Ie, He);
                      }, we = (Ie) => {
                        var He = Ae(), tt = _e(He);
                        {
                          var ct = (it) => {
                            var ht = jb(), St = i(ht), _t = i(St);
                            E(
                              (xt) => {
                                L(ht, 1, xt), ie(_t, t(S).icon);
                              },
                              [
                                () => $(V("flex items-center justify-center", t(O).icon))
                              ]
                            ), o(it, ht);
                          };
                          b(
                            tt,
                            (it) => {
                              t(S).icon && it(ct);
                            },
                            !0
                          );
                        }
                        o(Ie, He);
                      };
                      b(Oe, (Ie) => {
                        t(S).avatar ? Ie(me) : Ie(we, !1);
                      });
                    }
                    var ze = u(Oe, 2), ge = i(ze), pe = i(ge), je = i(pe), Te = i(je), qe = u(je, 2);
                    {
                      var Fe = (Ie) => {
                        var He = Db(), tt = i(He);
                        E(
                          (ct) => {
                            L(He, 1, ct), ie(tt, t(S).badge);
                          },
                          [
                            () => $(V("rounded-full font-medium", t(O).badge, t(j).badge))
                          ]
                        ), o(Ie, He);
                      };
                      b(qe, (Ie) => {
                        t(S).badge && Ie(Fe);
                      });
                    }
                    var Ve = u(pe, 2);
                    {
                      var Ge = (Ie) => {
                        var He = qb();
                        Ye(He, 21, () => t(S).actions, (tt) => tt.action, (tt, ct) => {
                          var it = Ob();
                          it.__click = [Rb, H, S, ct];
                          var ht = i(it);
                          {
                            var St = (xt) => {
                              var Nt = Nb(), Ht = i(Nt);
                              E(() => ie(Ht, t(ct).icon)), o(xt, Nt);
                            };
                            b(ht, (xt) => {
                              t(ct).icon && xt(St);
                            });
                          }
                          var _t = u(ht);
                          De(it, (xt, Nt) => ft?.(xt, Nt), () => ({ strength: 0.1 })), E(
                            (xt) => {
                              L(it, 1, xt), ie(_t, ` ${t(ct).label ?? ""}`);
                            },
                            [() => $(D(t(ct).variant))]
                          ), o(tt, it);
                        }), o(Ie, He);
                      };
                      b(Ve, (Ie) => {
                        t(S).actions && t(S).actions.length > 0 && Ie(Ge);
                      });
                    }
                    var Xe = u(ge, 2);
                    {
                      var $e = (Ie) => {
                        var He = Bb(), tt = i(He);
                        E(
                          (ct) => {
                            L(He, 1, ct), ie(tt, t(S).subtitle);
                          },
                          [
                            () => $(V("text-sm mb-2", t(j).subtitle))
                          ]
                        ), o(Ie, He);
                      };
                      b(Xe, (Ie) => {
                        t(S).subtitle && Ie($e);
                      });
                    }
                    var et = u(Xe, 2);
                    {
                      var nt = (Ie) => {
                        var He = Fb(), tt = i(He);
                        E(
                          (ct) => {
                            L(He, 1, ct), ie(tt, t(S).description);
                          },
                          [
                            () => $(V("text-sm leading-relaxed mb-3", t(j).description))
                          ]
                        ), o(Ie, He);
                      };
                      b(et, (Ie) => {
                        t(S).description && Ie(nt);
                      });
                    }
                    var ot = u(et, 2);
                    {
                      var Ue = (Ie) => {
                        var He = Vb();
                        Ye(He, 21, () => Object.entries(t(S).metadata), ut, (tt, ct) => {
                          var it = /* @__PURE__ */ Ee(() => Zr(t(ct), 2));
                          let ht = () => t(it)[0], St = () => t(it)[1];
                          var _t = Hb(), xt = i(_t);
                          E(
                            (Nt) => {
                              L(_t, 1, Nt), ie(xt, `${ht() ?? ""}: ${St() ?? ""}`);
                            },
                            [
                              () => $(V("text-xs px-2 py-1 rounded-full", t(j).skeleton, t(j).metadata))
                            ]
                          ), o(tt, _t);
                        }), o(Ie, He);
                      };
                      b(ot, (Ie) => {
                        t(S).metadata && Ie(Ue);
                      });
                    }
                    E(
                      (Ie) => {
                        L(Ne, 1, `border rounded-lg p-4 ${t(j).item ?? ""}`), L(je, 1, Ie), ie(Te, t(S).title);
                      },
                      [
                        () => $(V("font-semibold", t(j).title))
                      ]
                    ), o(Re, Ne);
                  };
                  b(
                    he,
                    (Re) => {
                      d() === "detailed" ? Re(Se) : Re(Be, !1);
                    },
                    !0
                  );
                }
                o(be, ce);
              };
              b(ne, (be) => {
                d() === "simple" ? be(de) : be(Ce, !1);
              });
            }
            De(Z, (be, ce) => ft?.(be, ce), () => ({ enabled: !t(S).disabled && T(), strength: 0.05 })), rt(1, Z, () => mt, () => y() ? { direction: "up", duration: 200, delay: t(te) * 30 } : void 0), o(re, Z);
          }), o(ae, W);
        };
        b(
          ue,
          (ae) => {
            a().length === 0 ? ae(fe) : ae(ve, !1);
          },
          !0
        );
      }
      o(h, oe);
    };
    b(Y, (h) => {
      N() ? h(z) : h(p, !1);
    });
  }
  E(() => L(k, 1, $(t(K)))), o(r, k), Ze();
}
bt(["change", "click"]);
var Xb = (r, e) => {
  const a = r.target;
  e(a.checked);
}, Kb = /* @__PURE__ */ v('<th scope="col"><input type="checkbox" aria-label="Select all rows" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></th>'), Zb = (r, e, a) => t(e).sortable && a(t(e)), Qb = /* @__PURE__ */ v('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), Jb = /* @__PURE__ */ v('<th scope="col"><div class="flex items-center gap-2"><span> </span> <!></div></th>'), $b = /* @__PURE__ */ v('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), eg = /* @__PURE__ */ v('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), tg = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, rg = (r) => r.stopPropagation(), ag = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></td>'), ng = /* @__PURE__ */ v("<td><!></td>"), og = /* @__PURE__ */ v("<tr><!><!></tr>"), ig = /* @__PURE__ */ v('<div><table><caption class="sr-only"> </caption><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div>');
const lg = {
  hash: "svelte-a6pjeb",
  code: `
	/* Terminal glow effects */.terminal .table-row:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}

	/* Custom checkbox styling for dark themes */input[type='checkbox'].svelte-a6pjeb:indeterminate {background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 8h8v1H4z'/%3e%3c/svg%3e");}`
};
function Ap(r, e) {
  Ke(e, !0), Je(r, lg);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), c = s(e, "striped", 3, !1), g = s(e, "hover", 3, !0), _ = s(e, "bordered", 3, !1), N = s(e, "loading", 3, !1), m = s(e, "sortBy", 3, ""), P = s(e, "sortOrder", 3, "asc"), R = s(e, "selectable", 3, !1), T = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), y = s(e, "stickyHeader", 3, !1), f = s(e, "emptyMessage", 3, "No data available"), G = s(e, "class", 3, ""), Q = zt();
  let x = /* @__PURE__ */ ke(lt(m())), B = /* @__PURE__ */ ke(lt(P())), j = /* @__PURE__ */ ke(lt(T()));
  const O = {
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
      table: `bg-black/90 text-${Le.terminal.green}`,
      header: `bg-${Le.terminal.green}/10 border-${Le.terminal.green}`,
      headerCell: `text-${Le.terminal.green} border-${Le.terminal.green}/30`,
      row: `border-${Le.terminal.green}/20`,
      rowHover: `hover:bg-${Le.terminal.green}/5`,
      rowSelected: `bg-${Le.terminal.green}/10`,
      cell: `text-${Le.terminal.green}/90 border-${Le.terminal.green}/20`,
      loading: `bg-${Le.terminal.green}/5`
    }
  }, I = {
    sm: { cell: "px-3 py-2 text-sm", header: "px-3 py-2 text-xs" },
    md: { cell: "px-4 py-3 text-sm", header: "px-4 py-3 text-sm" },
    lg: { cell: "px-6 py-4 text-base", header: "px-6 py-4 text-base" }
  }, F = /* @__PURE__ */ Ee(() => O[l()]), H = /* @__PURE__ */ Ee(() => I[d()]), A = /* @__PURE__ */ Ee(() => () => !t(x) || !a().find((Z) => Z.key === t(x))?.sortable ? n() : [...n()].sort((Z, ee) => {
    const se = Z[t(x)], ne = ee[t(x)];
    if (se === ne) return 0;
    const de = t(B) === "asc";
    return se < ne ? de ? -1 : 1 : de ? 1 : -1;
  }));
  function U(J) {
    J.sortable && (t(x) === J.key ? X(B, t(B) === "asc" ? "desc" : "asc", !0) : (X(x, J.key, !0), X(B, "asc")), Q("sort", { column: J.key, order: t(B) }));
  }
  function K(J, Z) {
    Q("rowClick", { row: J, index: Z });
  }
  function D(J, Z) {
    const ee = J.id ?? index;
    Z ? t(j).add(ee) : t(j).delete(ee), X(j, new Set(t(j)), !0), Q("rowSelect", { row: J, selected: Z });
  }
  function C(J) {
    J ? X(j, new Set(n().map((Z, ee) => Z.id ?? ee)), !0) : X(j, /* @__PURE__ */ new Set(), !0), Q("selectAll", { selected: J });
  }
  function k(J, Z, ee) {
    return J.render ? J.render(Z, ee) : J.formatter ? J.formatter(Z) : String(Z ?? "");
  }
  const M = /* @__PURE__ */ Ee(() => n().length > 0 && n().every((J, Z) => t(j).has(J.id ?? Z))), w = /* @__PURE__ */ Ee(() => t(j).size > 0 && !t(M)), q = /* @__PURE__ */ Ee(() => V("w-full font-mono rounded-lg overflow-hidden border", t(F).table, t(F).row, _() && "border-2", G())), Y = /* @__PURE__ */ Ee(() => V("overflow-auto", e.maxHeight && `max-h-[${e.maxHeight}]`, y() && "relative"));
  var z = ig(), p = i(z), h = i(p), oe = i(h), ue = u(h), fe = i(ue), ve = i(fe);
  {
    var ae = (J) => {
      var Z = Kb(), ee = i(Z);
      ee.__change = [Xb, C], E(
        (se) => {
          L(Z, 1, se), Qt(ee, t(M)), ee.indeterminate = t(w);
        },
        [
          () => $(V(t(H).header, t(F).headerCell, "w-12"))
        ]
      ), o(J, Z);
    };
    b(ve, (J) => {
      R() && J(ae);
    });
  }
  var W = u(ve);
  Ye(W, 17, a, (J) => J.key, (J, Z) => {
    var ee = Jb();
    ee.__click = [Zb, Z, U];
    var se = i(ee), ne = i(se), de = i(ne), Ce = u(ne, 2);
    {
      var be = (ce) => {
        var he = Qb(), Se = i(he), Be = u(Se, 2);
        E(
          (Re, Ne) => {
            L(Se, 0, Re), L(Be, 0, Ne);
          },
          [
            () => $(V("w-3 h-3 transition-colors", t(x) === t(Z).key && t(B) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => $(V("w-3 h-3 -mt-1 transition-colors", t(x) === t(Z).key && t(B) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(ce, he);
      };
      b(Ce, (ce) => {
        t(Z).sortable && ce(be);
      });
    }
    De(ee, (ce, he) => ft?.(ce, he), () => ({ enabled: t(Z).sortable, strength: 0.05 })), E(
      (ce) => {
        L(ee, 1, ce), pt(ee, t(Z).width ? `width: ${t(Z).width}` : void 0), ye(ee, "aria-sort", t(x) === t(Z).key ? t(B) === "asc" ? "ascending" : "descending" : "none"), ie(de, t(Z).label);
      },
      [
        () => $(V(t(H).header, t(F).headerCell, "font-semibold uppercase tracking-wider", `text-${t(Z).align || "left"}`, t(Z).sortable && "cursor-pointer select-none", _() && "border-r last:border-r-0"))
      ]
    ), o(J, ee);
  });
  var le = u(ue), re = i(le);
  {
    var S = (J) => {
      var Z = $b(), ee = i(Z);
      E(
        (se) => {
          ye(ee, "colspan", a().length + (R() ? 1 : 0)), L(ee, 1, se);
        },
        [
          () => $(V(t(H).cell, t(F).loading, "text-center"))
        ]
      ), o(J, Z);
    }, te = (J) => {
      var Z = Ae(), ee = _e(Z);
      {
        var se = (de) => {
          var Ce = eg(), be = i(Ce), ce = i(be), he = u(i(ce), 2), Se = i(he);
          E(
            (Be) => {
              ye(be, "colspan", a().length + (R() ? 1 : 0)), L(be, 1, Be), ie(Se, f());
            },
            [
              () => $(V(t(H).cell, t(F).cell, "text-center text-gray-400"))
            ]
          ), o(de, Ce);
        }, ne = (de) => {
          var Ce = Ae(), be = _e(Ce);
          Ye(be, 19, () => t(A), (ce, he) => ce.id ?? he, (ce, he, Se) => {
            const Be = /* @__PURE__ */ Ee(() => t(he).id ?? t(Se)), Re = /* @__PURE__ */ Ee(() => t(j).has(t(Be)));
            var Ne = og();
            Ne.__click = () => K(t(he), t(Se));
            var Me = i(Ne);
            {
              var xe = (Oe) => {
                var me = ag(), we = i(me);
                we.__change = [tg, D, he], we.__click = [rg], E(
                  (ze) => {
                    L(me, 1, ze), Qt(we, t(Re));
                  },
                  [
                    () => $(V(t(H).cell, t(F).cell, _() && "border-r"))
                  ]
                ), o(Oe, me);
              };
              b(Me, (Oe) => {
                R() && Oe(xe);
              });
            }
            var Pe = u(Me);
            Ye(Pe, 17, a, (Oe) => Oe.key, (Oe, me) => {
              var we = ng(), ze = i(we);
              xr(ze, () => k(t(me), t(he)[t(me).key], t(he))), E((ge) => L(we, 1, ge), [
                () => $(V(t(H).cell, t(F).cell, `text-${t(me).align || "left"}`, _() && "border-r last:border-r-0"))
              ]), o(Oe, we);
            }), E((Oe) => L(Ne, 1, Oe), [
              () => $(V(t(F).row, g() && t(F).rowHover, c() && t(Se) % 2 === 1 && "bg-black/20", t(Re) && t(F).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), rt(1, Ne, () => mt, () => ({ direction: "up", duration: 100, delay: t(Se) * 20 })), o(ce, Ne);
          }), o(de, Ce);
        };
        b(
          ee,
          (de) => {
            t(A).length === 0 ? de(se) : de(ne, !1);
          },
          !0
        );
      }
      o(J, Z);
    };
    b(re, (J) => {
      N() ? J(S) : J(te, !1);
    });
  }
  E(
    (J) => {
      L(z, 1, $(t(Y))), L(p, 1, $(t(q))), ie(oe, `Data table with ${n().length ?? ""} rows and ${a().length ?? ""} columns`), L(ue, 1, J);
    },
    [
      () => $(V(t(F).header, y() && "sticky top-0 z-10"))
    ]
  ), o(r, z), Ze();
}
bt(["change", "click"]);
const sg = (r, e, a) => {
  r.key === "Enter" ? e(t(a)) : r.key === "ArrowUp" && r.preventDefault();
};
var dg = /* @__PURE__ */ v('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-30 svelte-1c5nvru"></canvas>'), cg = /* @__PURE__ */ v('<span class="glitch svelte-1c5nvru"> </span>'), vg = /* @__PURE__ */ v('<div class="mb-4 svelte-1c5nvru"><div class="flex items-start gap-2 mb-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <span class="text-white svelte-1c5nvru"> </span> <span class="text-xs text-current/40 ml-auto svelte-1c5nvru"> </span></div> <div class="text-current/90 mb-2 whitespace-pre-wrap font-mono svelte-1c5nvru"> </div></div>'), ug = /* @__PURE__ */ v('<div class="mt-4 svelte-1c5nvru"><!></div>'), fg = /* @__PURE__ */ v(`<div><!> <div class="relative z-10 flex items-center justify-between p-4 border-b border-current/20 bg-black/50 svelte-1c5nvru"><div class="flex items-center gap-3 svelte-1c5nvru"><div class="flex gap-2 svelte-1c5nvru"><div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors svelte-1c5nvru"></div></div> <h3 class="text-sm font-mono font-semibold svelte-1c5nvru"><!></h3></div> <div class="flex items-center gap-2 text-xs font-mono svelte-1c5nvru"><span class="px-2 py-1 bg-current/10 rounded svelte-1c5nvru">SECURE</span> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse svelte-1c5nvru"></span></div></div> <div class="relative z-10 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed terminal-scroll svelte-1c5nvru" style="scrollbar-width: thin;"><div class="mb-4 text-current/80 svelte-1c5nvru"><pre class="whitespace-pre-wrap svelte-1c5nvru">╔══════════════════════════════════════════════════════════════╗
║ LIQUID GLASS TERMINAL v2.0 - SECURITY LEVEL: ALPHA-7        ║
║ SYSTEM STATUS: ONLINE │ ENCRYPTION: AES-256 │ UPTIME: 99.9% ║
╚══════════════════════════════════════════════════════════════╝

Connection established. Type 'help' for available commands.</pre></div> <!> <div class="flex items-start gap-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <input class="flex-1 bg-transparent border-none outline-none text-white font-mono svelte-1c5nvru" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-current animate-pulse svelte-1c5nvru"></span></div> <!></div></div>`);
const bg = {
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
function zp(r, e) {
  Ke(e, !0), Je(r, bg);
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
  const g = s(e, "enableMatrixRain", 3, !1), _ = s(e, "enableScanlines", 3, !0), N = s(e, "enableFlicker", 3, !1);
  zt();
  let m = /* @__PURE__ */ ke(void 0), P = /* @__PURE__ */ ke(void 0), R = /* @__PURE__ */ ke(""), T = /* @__PURE__ */ ke(lt([])), y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(lt(g()));
  const G = lt(_()), Q = lt(N()), x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  let B = [], j;
  const O = (W) => {
    const le = W.trim().toLowerCase();
    let re = "";
    if (le === "clear") {
      X(T, [], !0), X(R, "");
      return;
    } else le === "matrix" ? (X(f, !t(f)), t(f) ? F() : H(), re = l()[le] || "MATRIX RAIN DEACTIVATED") : le === "glitch" ? (I(), re = l()[le] || "GLITCH EFFECT ACTIVATED") : re = l()[le] || `zsh: command not found: ${W}

Try 'help' for available commands.`;
    X(
      T,
      [
        ...t(T),
        { command: le, output: re, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), X(R, ""), setTimeout(
      () => {
        t(m) && t(m).scrollTo({ top: t(m).scrollHeight, behavior: "smooth" });
      },
      50
    );
  }, I = () => {
    X(y, !0), setTimeout(
      () => {
        X(y, !1);
      },
      1e3
    );
  }, F = () => {
    if (!t(P)) return;
    const W = t(P).getContext("2d"), le = 14, re = Math.floor(t(P).width / le);
    B = Array(re).fill(0);
    const S = () => {
      W.fillStyle = "rgba(0, 0, 0, 0.05)", W.fillRect(0, 0, t(P).width, t(P).height), W.fillStyle = "#00ff88", W.font = `${le}px 'PP Supply Mono', monospace`;
      for (let J = 0; J < B.length; J++) {
        const Z = x[Math.floor(Math.random() * x.length)];
        W.fillText(Z, J * le, B[J] * le), B[J] * le > t(P).height && Math.random() > 0.975 && (B[J] = 0), B[J]++;
      }
    }, te = () => {
      S(), j = requestAnimationFrame(te);
    };
    te();
  }, H = () => {
    j && cancelAnimationFrame(j);
  }, A = () => {
    t(P) && t(m) && (t(P).width = t(m).offsetWidth, t(P).height = t(m).offsetHeight);
  };
  kt(() => (A(), t(f) && F(), d() && setTimeout(
    () => {
      O("whoami");
    },
    1e3
  ), () => {
    H();
  }));
  const U = {
    matrix: "bg-black text-green-400 border-green-500/30",
    cyberpunk: "bg-purple-900/20 text-cyan-400 border-cyan-500/30",
    hacker: "bg-black text-terminal-green border-terminal-green/30",
    terminal: "bg-terminal-bg text-terminal-fg border-white/20"
  };
  var K = fg();
  Bt("resize", _o, A);
  var D = i(K);
  {
    var C = (W) => {
      var le = dg();
      at(le, (re) => X(P, re), () => t(P)), o(W, le);
    };
    b(D, (W) => {
      t(f) && W(C);
    });
  }
  var k = u(D, 2), M = i(k), w = u(i(M), 2), q = i(w);
  {
    var Y = (W) => {
      var le = cg(), re = i(le);
      E(() => {
        ye(le, "data-text", a()), ie(re, a());
      }), o(W, le);
    }, z = (W) => {
      var le = Et();
      E(() => ie(le, a())), o(W, le);
    };
    b(q, (W) => {
      t(y) ? W(Y) : W(z, !1);
    });
  }
  var p = u(k, 2), h = u(i(p), 2);
  Ye(h, 17, () => t(T), ut, (W, le) => {
    var re = vg(), S = i(re), te = i(S);
    te.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
    var J = u(te, 2), Z = i(J), ee = u(J, 2), se = i(ee), ne = u(S, 2), de = i(ne);
    E(
      (Ce) => {
        ie(Z, t(le).command), ie(se, Ce), ie(de, t(le).output);
      },
      [() => t(le).timestamp.toLocaleTimeString()]
    ), o(W, re);
  });
  var oe = u(h, 2), ue = i(oe);
  ue.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
  var fe = u(ue, 2);
  fe.__keydown = [sg, O, R];
  var ve = u(oe, 2);
  {
    var ae = (W) => {
      var le = ug(), re = i(le);
      st(re, () => e.children), o(W, le);
    };
    b(ve, (W) => {
      e.children && W(ae);
    });
  }
  at(p, (W) => X(m, W), () => t(m)), E((W) => L(K, 1, W, "svelte-1c5nvru"), [
    () => $(V("relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300", "border shadow-2xl shadow-black/25 transform-gpu will-change-transform", U[c()], G && "terminal-scanlines", Q && "terminal-flicker", t(y) && "terminal-glitch", n()))
  ]), or(fe, () => t(R), (W) => X(R, W)), o(r, K), Ze();
}
bt(["keydown"]);
const gg = (r) => r;
function mg(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Un(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function ai(r, { delay: e = 0, duration: a = 400, easing: n = gg } = {}) {
  const l = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (d) => `opacity: ${d * l}`
  };
}
function ni(r, { delay: e = 0, duration: a = 400, easing: n = mg, x: l = 0, y: d = 0, opacity: c = 0 } = {}) {
  const g = getComputedStyle(r), _ = +g.opacity, N = g.transform === "none" ? "" : g.transform, m = _ * (1 - c), [P, R] = Un(l), [T, y] = Un(d);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (f, G) => `
			transform: ${N} translate(${(1 - f) * P}${R}, ${(1 - f) * T}${y});
			opacity: ${_ - m * G}`
  };
}
var hg = /* @__PURE__ */ v('<div class="flex gap-1"><div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div></div>'), pg = /* @__PURE__ */ v('<div><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> <span class="text-sm font-mono">Analyzing patterns...</span></div>'), xg = (r, e, a) => e(t(a)), wg = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, _g = /* @__PURE__ */ v("<span> </span>"), yg = /* @__PURE__ */ v('<div class="flex items-center gap-2"><span> </span> <div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div></div></div></div>'), kg = /* @__PURE__ */ v("<code> </code>"), Cg = /* @__PURE__ */ v('<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 svelte-4oclra"><div>Examples:</div> <div class="flex flex-wrap gap-1"></div></div>'), Sg = /* @__PURE__ */ v('<div role="button" tabindex="0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><!> <span> </span></div> <!></div> <p> </p> <div> </div> <!></div>'), Eg = /* @__PURE__ */ v('<div class="space-y-2"></div>'), Tg = /* @__PURE__ */ v('<div><div class="text-2xl mb-2">🤔</div> <p class="text-sm"> </p> <p class="text-xs mt-1">Try a different search term</p></div>'), Mg = /* @__PURE__ */ v('<div><div class="flex items-center justify-between"><span>Use ↑↓ to navigate, Enter to select</span> <span>AI-powered suggestions</span></div></div>'), Ag = /* @__PURE__ */ v('<div><div><div class="flex items-center gap-2"><span class="text-sm font-bold">🤖 AI SUGGESTIONS</span> <!></div> <span> </span></div> <!> <!> <!> <!></div>');
const zg = {
  hash: "svelte-4oclra",
  code: `
	/* Smooth animations */.group.svelte-4oclra:hover .group-hover\\:opacity-100:where(.svelte-4oclra) {opacity:1;}`
};
function Ip(r, e) {
  Ke(e, !0), Je(r, zg);
  const [a, n] = Ko(), l = () => Xo(y, "$aiSuggestions", a), d = s(e, "query", 3, ""), c = s(e, "suggestions", 19, () => []), g = s(e, "maxSuggestions", 3, 6), _ = s(e, "showConfidence", 3, !0), N = s(e, "showCategories", 3, !0), m = s(e, "theme", 3, "terminal"), P = s(e, "aiMode", 3, !0), R = s(e, "class", 3, ""), T = zt(), y = gn([]);
  let f = /* @__PURE__ */ ke(-1), G = /* @__PURE__ */ ke(!1);
  const Q = [
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
  ], B = {
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
  }[m()], j = {
    system: { icon: "⚙️", color: "text-blue-400" },
    development: { icon: "💻", color: "text-green-400" },
    network: { icon: "🌐", color: "text-purple-400" },
    file: { icon: "📁", color: "text-yellow-400" },
    process: { icon: "⚡", color: "text-orange-400" },
    ai: { icon: "🤖", color: "text-cyan-400" }
  }, O = async (k) => {
    X(G, !0), await new Promise((w) => setTimeout(w, 800 + Math.random() * 400));
    const M = Q.filter((w) => w.command.toLowerCase().includes(k.toLowerCase()) || w.description.toLowerCase().includes(k.toLowerCase()) || w.category.toLowerCase().includes(k.toLowerCase())).map((w) => ({
      ...w,
      confidence: Math.min(0.98, w.confidence + Math.random() * 0.1)
    })).sort((w, q) => q.confidence - w.confidence).slice(0, g());
    return X(G, !1), M;
  }, I = async (k) => {
    if (!k.trim()) {
      y.set([]);
      return;
    }
    if (P()) {
      const M = await O(k);
      y.set(M);
    } else {
      const M = c().slice(0, g());
      y.set(M);
    }
  }, F = (k) => {
    const M = l();
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), X(f, Math.min(t(f) + 1, M.length - 1), !0);
        break;
      case "ArrowUp":
        k.preventDefault(), X(f, Math.max(t(f) - 1, -1), !0);
        break;
      case "Enter":
        k.preventDefault(), t(f) >= 0 && M[t(f)] && H(M[t(f)]);
        break;
      case "Escape":
        X(f, -1), y.set([]);
        break;
    }
  }, H = (k) => {
    T("select", { command: k, timestamp: /* @__PURE__ */ new Date() }), X(f, -1);
  }, A = (k) => k >= 0.9 ? "text-green-400" : k >= 0.7 ? "text-yellow-400" : k >= 0.5 ? "text-orange-400" : "text-red-400", U = (k) => k >= 0.9 ? "HIGH" : k >= 0.7 ? "MED" : "LOW";
  wt(() => {
    I(d());
  }), kt(() => (window.addEventListener("keydown", F), () => {
    window.removeEventListener("keydown", F);
  }));
  var K = Ae(), D = _e(K);
  {
    var C = (k) => {
      var M = Ag(), w = i(M), q = i(w), Y = u(i(q), 2);
      {
        var z = (S) => {
          var te = hg();
          o(S, te);
        };
        b(Y, (S) => {
          t(G) && S(z);
        });
      }
      var p = u(q, 2), h = i(p), oe = u(w, 2);
      {
        var ue = (S) => {
          var te = pg();
          E((J) => L(te, 1, J, "svelte-4oclra"), [
            () => $(V("flex items-center gap-3 p-3 rounded-lg bg-black/20", B.muted))
          ]), o(S, te);
        };
        b(oe, (S) => {
          t(G) && S(ue);
        });
      }
      var fe = u(oe, 2);
      {
        var ve = (S) => {
          var te = Eg();
          Ye(te, 7, l, (J) => J.command, (J, Z, ee) => {
            var se = Sg();
            se.__click = [xg, H, Z], se.__keydown = [wg, H, Z];
            var ne = i(se), de = i(ne), Ce = i(de);
            {
              var be = (me) => {
                var we = _g(), ze = i(we);
                E(() => {
                  L(we, 1, $(j[t(Z).category].color), "svelte-4oclra"), ie(ze, j[t(Z).category].icon);
                }), o(me, we);
              };
              b(Ce, (me) => {
                N() && me(be);
              });
            }
            var ce = u(Ce, 2), he = i(ce), Se = u(de, 2);
            {
              var Be = (me) => {
                var we = yg(), ze = i(we), ge = i(ze), pe = u(ze, 2), je = i(pe);
                E(
                  (Te, qe, Fe) => {
                    L(ze, 1, Te, "svelte-4oclra"), ie(ge, qe), L(je, 1, Fe, "svelte-4oclra"), pt(je, `width: ${t(Z).confidence * 100}%`);
                  },
                  [
                    () => $(V("text-xs font-bold", A(t(Z).confidence))),
                    () => U(t(Z).confidence),
                    () => $(V("h-full rounded-full transition-all duration-300", A(t(Z).confidence).replace("text-", "bg-")))
                  ]
                ), o(me, we);
              };
              b(Se, (me) => {
                _() && me(Be);
              });
            }
            var Re = u(ne, 2), Ne = i(Re), Me = u(Re, 2), xe = i(Me), Pe = u(Me, 2);
            {
              var Oe = (me) => {
                var we = Cg(), ze = i(we), ge = u(ze, 2);
                Ye(ge, 20, () => t(Z).examples, (pe) => pe, (pe, je) => {
                  var Te = kg(), qe = i(Te);
                  E(
                    (Fe) => {
                      L(Te, 1, Fe, "svelte-4oclra"), ie(qe, je);
                    },
                    [
                      () => $(V("text-xs px-2 py-1 rounded bg-black/40", B.muted))
                    ]
                  ), o(pe, Te);
                }), E((pe) => L(ze, 1, pe, "svelte-4oclra"), [
                  () => $(V("text-xs font-bold mb-1", B.text))
                ]), o(me, we);
              };
              b(Pe, (me) => {
                t(Z).examples && t(Z).examples.length > 0 && me(Oe);
              });
            }
            E(
              (me, we, ze, ge) => {
                L(se, 1, me, "svelte-4oclra"), ye(se, "aria-label", `Execute command: ${t(Z).command}`), L(ce, 1, we, "svelte-4oclra"), ie(he, t(Z).command), L(Re, 1, ze, "svelte-4oclra"), ie(Ne, t(Z).description), L(Me, 1, ge, "svelte-4oclra"), ie(xe, t(Z).usage);
              },
              [
                () => $(V("p-3 rounded-lg cursor-pointer transition-all duration-200", "hover:scale-[1.02] transform-gpu border border-transparent", t(ee) === t(f) ? B.selected : "hover:bg-white/5", "group")),
                () => $(V("font-mono font-bold", B.text)),
                () => $(V("text-sm mb-2", B.muted)),
                () => $(V("text-xs font-mono p-2 rounded bg-black/30", B.accent))
              ]
            ), rt(3, se, () => ai, () => ({ duration: 150, delay: t(ee) * 50 })), o(J, se);
          }), o(S, te);
        };
        b(fe, (S) => {
          !t(G) && l().length > 0 && S(ve);
        });
      }
      var ae = u(fe, 2);
      {
        var W = (S) => {
          var te = Tg(), J = u(i(te), 2), Z = i(J);
          E(
            (ee) => {
              L(te, 1, ee, "svelte-4oclra"), ie(Z, `No suggestions found for "${d() ?? ""}"`);
            },
            [() => $(V("text-center py-8", B.muted))]
          ), o(S, te);
        };
        b(ae, (S) => {
          !t(G) && d().trim() && l().length === 0 && S(W);
        });
      }
      var le = u(ae, 2);
      {
        var re = (S) => {
          var te = Mg();
          E((J) => L(te, 1, J, "svelte-4oclra"), [
            () => $(V("mt-3 pt-2 border-t border-current/20 text-xs", B.muted))
          ]), o(S, te);
        };
        b(le, (S) => {
          !t(G) && l().length > 0 && S(re);
        });
      }
      E(
        (S, te, J) => {
          L(M, 1, S, "svelte-4oclra"), L(w, 1, te, "svelte-4oclra"), L(p, 1, J, "svelte-4oclra"), ie(h, `${l().length ?? ""} matches`);
        },
        [
          () => $(V("relative mt-2 p-4 rounded-lg border backdrop-blur-md", "shadow-2xl transform-gpu", B.bg, R())),
          () => $(V("flex items-center justify-between mb-3 pb-2 border-b border-current/20", B.text)),
          () => $(V("text-xs", B.muted))
        ]
      ), rt(3, M, () => ni, () => ({ y: 10, duration: 200 })), o(k, M);
    };
    b(D, (k) => {
      d().trim() && (l().length > 0 || t(G)) && k(C);
    });
  }
  o(r, K), Ze(), n();
}
bt(["click", "keydown"]);
var Ig = /* @__PURE__ */ v("<span><!></span>");
const Pg = {
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
function Lg(r, e) {
  Ke(e, !0), Je(r, Pg);
  const a = s(e, "class", 3, ""), n = s(e, "intensity", 3, "medium"), l = s(e, "continuous", 3, !1), d = s(e, "trigger", 3, !1);
  s(e, "speed", 3, 0.1);
  const c = s(e, "colors", 19, () => ["#ff0000", "#00ffff", "#ff00ff"]);
  let g, _ = /* @__PURE__ */ ke(!1), N;
  const P = {
    low: { duration: 200, frequency: 3e3, distortion: 2, layers: 2 },
    medium: { duration: 400, frequency: 2e3, distortion: 4, layers: 3 },
    high: { duration: 600, frequency: 1e3, distortion: 8, layers: 4 },
    extreme: { duration: 1e3, frequency: 500, distortion: 16, layers: 6 }
  }()[n()], R = () => {
    t(_) || (X(_, !0), g && (g.style.animation = `
				glitch-skew ${P.duration}ms ease-in-out,
				glitch-color ${P.duration}ms linear
			`), setTimeout(
      () => {
        X(_, !1), g && (g.style.animation = "");
      },
      P.duration
    ));
  }, T = () => {
    l() && (N = setInterval(
      () => {
        Math.random() < 0.3 && R();
      },
      P.frequency
    ));
  }, y = () => {
    N && clearInterval(N);
  };
  wt(() => {
    d() && R();
  }), kt(() => (l() && T(), () => {
    y();
  }));
  const f = "!@#$%^&*()_+-=[]{}|;:,.<>?~`", G = (O, I) => O.split("").map((F) => Math.random() < I / 100 ? f[Math.floor(Math.random() * f().length)] : F).join("");
  var Q = Ig(), x = i(Q);
  {
    var B = (O) => {
      var I = Et();
      E((F) => ie(I, F), [() => G(e.text, 20)]), o(O, I);
    }, j = (O) => {
      var I = Et();
      E(() => ie(I, e.text)), o(O, I);
    };
    b(x, (O) => {
      t(_) && n() === "extreme" ? O(B) : O(j, !1);
    });
  }
  at(Q, (O) => g = O, () => g), E(
    (O, I, F, H) => {
      L(Q, 1, O, "svelte-ithyll"), ye(Q, "data-text", e.text), pt(Q, `
		--glitch-color-1: ${I ?? ""};
		--glitch-color-2: ${F ?? ""};
		--glitch-color-3: ${H ?? ""};
		--glitch-distortion: ${P.distortion ?? ""}px;
	`);
    },
    [
      () => $(V("relative inline-block font-mono", t(_) && "glitching", a())),
      () => c()()[0] || "#ff0000",
      () => c()()[1] || "#00ffff",
      () => c()()[2] || "#ff00ff"
    ]
  ), o(r, Q), Ze();
}
var jg = /* @__PURE__ */ v('<div class="w-2 h-2 rounded-full bg-current animate-ping svelte-11w1x2x"></div>'), Dg = /* @__PURE__ */ v("<span> </span>"), Rg = /* @__PURE__ */ v("<span> </span>"), Ng = /* @__PURE__ */ v("<span> </span>"), Og = (r, e) => {
  r.stopPropagation(), e();
}, qg = /* @__PURE__ */ v('<button title="Copy command">📋</button>'), Bg = /* @__PURE__ */ v("<div> </div>"), Fg = /* @__PURE__ */ v("<div> </div>"), Hg = /* @__PURE__ */ v('<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse svelte-11w1x2x"></div>'), Vg = /* @__PURE__ */ v('<div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse svelte-11w1x2x"></div>'), Gg = /* @__PURE__ */ v('<div><div class="absolute top-2 right-2 flex items-center gap-2 svelte-11w1x2x"><div><!></div> <!></div> <div class="flex items-start gap-2 mb-2 font-mono svelte-11w1x2x"><!> <div class="flex-1 svelte-11w1x2x"><!></div> <!></div> <!> <!> <!> <!></div>');
const Ug = {
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
function Pp(r, e) {
  Ke(e, !0), Je(r, Ug);
  let a = s(e, "output", 3, ""), n = s(e, "status", 7, "idle"), l = s(e, "showPrompt", 3, !0), d = s(e, "showTimestamp", 3, !0), c = s(e, "interactive", 3, !1), g = s(e, "theme", 3, "terminal"), _ = s(e, "enableGlitch", 3, !1), N = s(e, "enableSound", 3, !1), m = s(e, "class", 3, "");
  const P = zt();
  let R, T = /* @__PURE__ */ ke(!1), y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(0), G = 0;
  const x = {
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
  }[g()], j = {
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
  }[n()], I = {
    terminal: "$ ",
    cyberpunk: ">>> ",
    matrix: "> ",
    neural: "◈ "
  }[g()], F = (be) => {
    if (!N()) return;
    const ce = new (window.AudioContext || window.webkitAudioContext)(), he = ce.createOscillator(), Se = ce.createGain();
    switch (he.connect(Se), Se.connect(ce.destination), be) {
      case "execute":
        he.frequency.setValueAtTime(800, ce.currentTime), he.frequency.exponentialRampToValueAtTime(400, ce.currentTime + 0.1);
        break;
      case "success":
        he.frequency.setValueAtTime(523.25, ce.currentTime), he.frequency.setValueAtTime(659.25, ce.currentTime + 0.1);
        break;
      case "error":
        he.frequency.setValueAtTime(220, ce.currentTime), he.frequency.exponentialRampToValueAtTime(110, ce.currentTime + 0.2);
        break;
    }
    Se.gain.setValueAtTime(0.1, ce.currentTime), Se.gain.exponentialRampToValueAtTime(0.01, ce.currentTime + 0.2), he.start(ce.currentTime), he.stop(ce.currentTime + 0.2);
  }, H = () => {
    !c() || n() === "running" || (G = performance.now(), n("running"), X(f, 0), _() && (X(y, !0), setTimeout(
      () => {
        X(y, !1);
      },
      300
    )), F("execute"), P("execute", {
      command: e.command,
      timestamp: /* @__PURE__ */ new Date(),
      theme: g()
    }));
  };
  wt(() => {
    if (n() === "running") {
      const be = setInterval(
        () => {
          X(f, performance.now() - G);
        },
        10
      );
      return () => clearInterval(be);
    } else n() === "success" ? F("success") : n() === "error" && F("error");
  });
  const A = async () => {
    try {
      await navigator.clipboard.writeText(e.command), P("copy", { command: e.command });
    } catch (be) {
      console.error("Failed to copy command:", be);
    }
  }, U = (be) => be < 1e3 ? `${Math.round(be)}ms` : `${(be / 1e3).toFixed(2)}s`;
  kt(() => {
    c() && (R.style.cursor = "pointer");
  });
  var K = Gg(), D = () => X(T, !0), C = () => X(T, !1), k = (be) => {
    c() && (be.key === "Enter" || be.key === " ") && (be.preventDefault(), H());
  };
  Qe(
    K,
    (be) => ({
      class: be,
      ...c() ? {
        role: "button",
        tabindex: 0,
        "aria-label": `Execute command: ${e.command}`
      } : { role: "article" },
      onmouseenter: D,
      onmouseleave: C,
      onclick: H,
      onkeydown: k
    }),
    [
      () => V("relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300", "hover:scale-[1.02] hover:shadow-lg transform-gpu", x.bg, x.glow, j.borderColor, c() && "cursor-pointer hover:brightness-110", m())
    ],
    void 0,
    "svelte-11w1x2x"
  );
  var M = i(K), w = i(M), q = i(w);
  {
    var Y = (be) => {
      var ce = jg();
      o(be, ce);
    }, z = (be) => {
      var ce = Et();
      E(() => ie(ce, j.icon)), o(be, ce);
    };
    b(q, (be) => {
      n() === "running" ? be(Y) : be(z, !1);
    });
  }
  var p = u(w, 2);
  {
    var h = (be) => {
      var ce = Dg(), he = i(ce);
      E(
        (Se, Be) => {
          L(ce, 1, Se, "svelte-11w1x2x"), ie(he, Be);
        },
        [
          () => $(V("text-xs font-mono", x.accent)),
          () => U(t(f))
        ]
      ), o(be, ce);
    };
    b(p, (be) => {
      n() === "running" && t(f) > 0 && be(h);
    });
  }
  var oe = u(M, 2), ue = i(oe);
  {
    var fe = (be) => {
      var ce = Rg(), he = i(ce);
      E(
        (Se) => {
          L(ce, 1, Se, "svelte-11w1x2x"), ie(he, I);
        },
        [
          () => $(V("select-none font-bold", x.prompt))
        ]
      ), o(be, ce);
    };
    b(ue, (be) => {
      l() && be(fe);
    });
  }
  var ve = u(ue, 2), ae = i(ve);
  {
    var W = (be) => {
      {
        let ce = /* @__PURE__ */ Ee(() => V("font-mono", x.command));
        Lg(be, {
          get text() {
            return e.command;
          },
          intensity: "medium",
          get class() {
            return t(ce);
          }
        });
      }
    }, le = (be) => {
      var ce = Ng(), he = i(ce);
      E(
        (Se) => {
          L(ce, 1, Se, "svelte-11w1x2x"), ie(he, e.command);
        },
        [() => $(V("font-mono", x.command))]
      ), o(be, ce);
    };
    b(ae, (be) => {
      _() && t(y) ? be(W) : be(le, !1);
    });
  }
  var re = u(ve, 2);
  {
    var S = (be) => {
      var ce = qg();
      ce.__click = [Og, A], E((he) => L(ce, 1, he, "svelte-11w1x2x"), [
        () => $(V("opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity", x.accent, "hover:bg-white/10"))
      ]), o(be, ce);
    };
    b(re, (be) => {
      c() && be(S);
    });
  }
  var te = u(oe, 2);
  {
    var J = (be) => {
      var ce = Bg(), he = i(ce);
      E(
        (Se) => {
          L(ce, 1, Se, "svelte-11w1x2x"), ie(he, a());
        },
        [
          () => $(V("mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap", x.output, j.borderColor))
        ]
      ), o(be, ce);
    };
    b(te, (be) => {
      a() && be(J);
    });
  }
  var Z = u(te, 2);
  {
    var ee = (be) => {
      var ce = Fg(), he = i(ce);
      E(
        (Se, Be) => {
          L(ce, 1, Se, "svelte-11w1x2x"), ie(he, Be);
        },
        [
          () => $(V("mt-2 text-xs font-mono opacity-60", x.accent)),
          () => (/* @__PURE__ */ new Date()).toLocaleTimeString()
        ]
      ), o(be, ce);
    };
    b(Z, (be) => {
      d() && be(ee);
    });
  }
  var se = u(Z, 2);
  {
    var ne = (be) => {
      var ce = Hg();
      o(be, ce);
    };
    b(se, (be) => {
      c() && t(T) && be(ne);
    });
  }
  var de = u(se, 2);
  {
    var Ce = (be) => {
      var ce = Vg();
      E((he) => pt(ce, `width: ${he ?? ""}%`), [() => Math.min(t(f) / 5e3 * 100, 100)]), o(be, ce);
    };
    b(de, (be) => {
      n() === "running" && be(Ce);
    });
  }
  at(K, (be) => R = be, () => R), E((be) => L(w, 1, be, "svelte-11w1x2x"), [
    () => $(V("w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold", j.color, n() === "running" && "animate-pulse"))
  ]), o(r, K), Ze();
}
bt(["click"]);
var Yg = /* @__PURE__ */ v('<div><div class="terminal-header svelte-n7o7tf"><div class="terminal-controls svelte-n7o7tf"><span class="terminal-control close svelte-n7o7tf"></span> <span class="terminal-control minimize svelte-n7o7tf"></span> <span class="terminal-control maximize svelte-n7o7tf"></span></div> <div class="terminal-title svelte-n7o7tf"> </div> <div class="terminal-status svelte-n7o7tf"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body min-h-[300px] flex items-center justify-center svelte-n7o7tf"><div class="flex items-center gap-3 text-terminal-green"><div class="animate-spin w-5 h-5 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="font-mono">Loading terminal...</span></div></div></div>'), Wg = /* @__PURE__ */ v('<div><div class="terminal-body min-h-[200px] flex items-center justify-center svelte-n7o7tf"><div class="text-red-400 font-mono"> </div></div></div>');
const Xg = {
  hash: "svelte-n7o7tf",
  code: ".terminal-header.svelte-n7o7tf {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;}.terminal-controls.svelte-n7o7tf {display:flex;gap:8px;}.terminal-control.svelte-n7o7tf {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-n7o7tf {background:#ff5f57;}.terminal-control.minimize.svelte-n7o7tf {background:#ffbd2e;}.terminal-control.maximize.svelte-n7o7tf {background:#28ca42;}.terminal-title.svelte-n7o7tf {font-family:'SF Mono', 'Monaco', 'Consolas', monospace;font-size:14px;color:rgba(255, 255, 255, 0.8);}.terminal-status.svelte-n7o7tf {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-n7o7tf {padding:16px;font-family:'SF Mono', 'Monaco', 'Consolas', monospace;background:rgba(0, 0, 0, 0.3);}"
};
function Lp(r, e) {
  Ke(e, !0), Je(r, Xg);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({})), d = s(e, "autoPlay", 3, !1);
  let c = /* @__PURE__ */ ke(null), g = /* @__PURE__ */ ke(!0), _ = /* @__PURE__ */ ke(null);
  kt(async () => {
    try {
      const T = await Promise.resolve().then(() => hm);
      X(c, T.default, !0), X(g, !1);
    } catch (T) {
      X(_, `Failed to load TerminalWindow: ${T}`), X(g, !1);
    }
  });
  var N = Ae(), m = _e(N);
  {
    var P = (T) => {
      var y = Yg(), f = i(y), G = u(i(f), 2), Q = i(G);
      E(() => {
        L(y, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), ie(Q, a());
      }), o(T, y);
    }, R = (T) => {
      var y = Ae(), f = _e(y);
      {
        var G = (x) => {
          var B = Wg(), j = i(B), O = i(j), I = i(O);
          E(() => {
            L(B, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), ie(I, t(_));
          }), o(x, B);
        }, Q = (x) => {
          var B = Ae(), j = _e(B);
          {
            var O = (I) => {
              var F = Ae(), H = _e(F);
              Tt(H, () => t(c), (A, U) => {
                U(A, {
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
              }), o(I, F);
            };
            b(
              j,
              (I) => {
                t(c) && I(O);
              },
              !0
            );
          }
          o(x, B);
        };
        b(
          f,
          (x) => {
            t(_) ? x(G) : x(Q, !1);
          },
          !0
        );
      }
      o(T, y);
    };
    b(m, (T) => {
      t(g) ? T(P) : T(R, !1);
    });
  }
  o(r, N), Ze();
}
const Kg = (r, e, a, n) => {
  r.key === "Enter" && !t(e) && a(t(n));
};
var Zg = /* @__PURE__ */ v('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen svelte-169kcnm"></canvas>'), Qg = /* @__PURE__ */ v('<div class="mb-6 transform transition-all duration-500 hover:scale-[1.02] svelte-169kcnm"><div class="flex items-start gap-3 mb-3 svelte-169kcnm"><span></span> <span class="text-white font-semibold svelte-169kcnm"> </span> <span> </span></div> <div> </div></div>'), Jg = /* @__PURE__ */ v('<div class="flex items-center gap-3 mb-4 svelte-169kcnm"><div class="flex gap-1 svelte-169kcnm"><div style="animation-delay: 0ms;"></div> <div style="animation-delay: 150ms;"></div> <div style="animation-delay: 300ms;"></div></div> <span>Processing neural patterns...</span></div>'), $g = /* @__PURE__ */ v('<div class="mt-6 svelte-169kcnm"><!></div>'), em = /* @__PURE__ */ v(`<div role="application" aria-label="Liquid Neural Terminal Interface"><!> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-40 mix-blend-screen svelte-169kcnm"></canvas> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-30 svelte-169kcnm"></canvas> <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div><div class="flex items-center gap-4 svelte-169kcnm"><div class="flex gap-2 svelte-169kcnm"><div class="w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 svelte-169kcnm"></div></div> <h3> </h3></div> <div class="flex items-center gap-3 text-sm font-mono svelte-169kcnm"><div>NEURAL: ACTIVE</div> <div> </div> <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 svelte-169kcnm"></div></div></div> <div class="relative z-10 p-6 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed liquid-scroll svelte-169kcnm"><div><pre>╔═══════════════════════════════════════════════════════════════╗
║  🌊 LIQUID NEURAL INTERFACE v3.0 - QUANTUM READY 🌊         ║
║  STATUS: CONSCIOUSNESS ACTIVATED │ REALITY: MALLEABLE        ║
║  NEURAL PATHWAYS: ∞ │ LIQUID STATE: TRANSCENDENT            ║
╚═══════════════════════════════════════════════════════════════╝

🧠 Neural connection established...
💧 Liquid dynamics engine online...
⚡ Quantum entanglement verified...

Type 'help' to access the command matrix.</pre></div> <!> <!> <div class="flex items-start gap-3 svelte-169kcnm"><span></span> <input autocomplete="off" spellcheck="false"/> <span></span></div> <!></div></div>`);
const tm = {
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
function jp(r, e) {
  Ke(e, !0), Je(r, tm);
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
  })), d = s(e, "autoPlay", 3, !1), c = s(e, "theme", 3, "liquid"), g = s(e, "enableLiquidFlow", 3, !0), _ = s(e, "enableParticles", 3, !0), N = s(e, "enableWaveform", 3, !0), m = s(e, "enableHologram", 3, !1);
  zt();
  let P = /* @__PURE__ */ ke(void 0), R = /* @__PURE__ */ ke(void 0), T = /* @__PURE__ */ ke(void 0), y = /* @__PURE__ */ ke(void 0), f = /* @__PURE__ */ ke(""), G = /* @__PURE__ */ ke(lt([])), Q = /* @__PURE__ */ ke(lt(g())), x = /* @__PURE__ */ ke(lt(_()));
  lt(N());
  let B = /* @__PURE__ */ ke(lt(m())), j = /* @__PURE__ */ ke(!1), O, I;
  class F {
    x;
    y;
    vx;
    vy;
    size;
    opacity;
    hue;
    constructor(xe, Pe) {
      this.x = xe, this.y = Pe, this.vx = (Math.random() - 0.5) * 2, this.vy = (Math.random() - 0.5) * 2, this.size = Math.random() * 3 + 1, this.opacity = Math.random() * 0.8 + 0.2, this.hue = Math.random() * 60 + 180;
    }
    update(xe, Pe) {
      this.x += this.vx, this.y += this.vy, (this.x <= 0 || this.x >= xe) && (this.vx *= -0.8, this.x = Math.max(0, Math.min(xe, this.x))), (this.y <= 0 || this.y >= Pe) && (this.vy *= -0.8, this.y = Math.max(0, Math.min(Pe, this.y))), this.vy += 0.02, this.vx *= 0.999, this.vy *= 0.999;
    }
    draw(xe) {
      xe.save(), xe.globalAlpha = this.opacity, xe.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`, xe.shadowColor = `hsl(${this.hue}, 70%, 60%)`, xe.shadowBlur = this.size * 2, xe.beginPath(), xe.arc(this.x, this.y, this.size, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let H = [], A = 0, U = 0;
  class K {
    x;
    y;
    radius;
    connections;
    activation;
    pulsePhase;
    constructor(xe, Pe) {
      this.x = xe, this.y = Pe, this.radius = Math.random() * 8 + 4, this.connections = [], this.activation = Math.random(), this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.pulsePhase += 0.05, this.activation = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    }
    draw(xe) {
      const Pe = this.activation;
      xe.save(), xe.globalAlpha = 0.7 + Pe * 0.3, xe.fillStyle = `hsl(${180 + Pe * 40}, 70%, ${50 + Pe * 30}%)`, xe.shadowColor = xe.fillStyle, xe.shadowBlur = this.radius * (1 + Pe), xe.beginPath(), xe.arc(this.x, this.y, this.radius, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let D = [];
  const C = (Me) => {
    const xe = Me.trim().toLowerCase();
    X(j, !0), setTimeout(
      () => {
        let Pe = "";
        switch (xe) {
          case "clear":
            X(G, [], !0), X(f, ""), X(j, !1);
            return;
          case "liquid":
            X(Q, !t(Q)), t(Q) && k(), Pe = t(Q) ? "LIQUID FLOW DYNAMICS: ACTIVATED" : "LIQUID FLOW: DEACTIVATED";
            break;
          case "neural":
            M(), Pe = l()[xe];
            break;
          case "particles":
            X(x, !t(x)), Pe = l()[xe];
            break;
          case "hologram":
            X(B, !t(B)), Pe = t(B) ? "HOLOGRAPHIC PROJECTION: ONLINE" : "HOLOGRAPHIC PROJECTION: OFFLINE";
            break;
          case "overclock":
            w(), Pe = l()[xe];
            break;
          default:
            Pe = l()[xe] || `ERROR: Command '${Me}' not found in neural database.
Run 'help' to display available liquid protocols.`;
        }
        X(
          G,
          [
            ...t(G),
            { command: xe, output: Pe, timestamp: /* @__PURE__ */ new Date() }
          ],
          !0
        ), X(f, ""), X(j, !1), setTimeout(
          () => {
            t(P) && t(P).scrollTo({ top: t(P).scrollHeight, behavior: "smooth" });
          },
          50
        );
      },
      Math.random() * 500 + 200
    );
  }, k = () => {
    if (!t(R)) return;
    const Me = t(R).getContext("2d"), xe = t(R).width, Pe = t(R).height;
    H = [];
    for (let me = 0; me < 50; me++)
      H.push(new F(Math.random() * xe, Math.random() * Pe));
    const Oe = () => {
      Me.fillStyle = "rgba(0, 0, 0, 0.1)", Me.fillRect(0, 0, xe, Pe), H.forEach((me) => {
        me.update(xe, Pe), me.draw(Me);
      }), Me.strokeStyle = "rgba(100, 200, 255, 0.3)", Me.lineWidth = 1;
      for (let me = 0; me < H.length; me++)
        for (let we = me + 1; we < H.length; we++) {
          const ze = H[me].x - H[we].x, ge = H[me].y - H[we].y, pe = Math.sqrt(ze * ze + ge * ge);
          pe < 100 && (Me.globalAlpha = (100 - pe) / 100 * 0.5, Me.beginPath(), Me.moveTo(H[me].x, H[me].y), Me.lineTo(H[we].x, H[we].y), Me.stroke());
        }
      Me.globalAlpha = 1, t(Q) && (O = requestAnimationFrame(Oe));
    };
    Oe();
  }, M = () => {
    if (!t(T)) return;
    const Me = t(T).width, xe = t(T).height;
    D = [];
    for (let Oe = 0; Oe < 20; Oe++)
      D.push(new K(Math.random() * (Me - 100) + 50, Math.random() * (xe - 100) + 50));
    D.forEach((Oe, me) => {
      const we = Math.floor(Math.random() * 3) + 1;
      for (let ze = 0; ze < we; ze++) {
        const ge = Math.floor(Math.random() * D.length);
        ge !== me && !Oe.connections.includes(ge) && Oe.connections.push(ge);
      }
    });
    const Pe = () => {
      const Oe = t(T).getContext("2d");
      Oe.fillStyle = "rgba(0, 0, 0, 0.1)", Oe.fillRect(0, 0, Me, xe), Oe.strokeStyle = "rgba(0, 255, 200, 0.4)", Oe.lineWidth = 2, D.forEach((me, we) => {
        me.connections.forEach((ze) => {
          const ge = D[ze];
          ge && (Oe.globalAlpha = (me.activation + ge.activation) / 2, Oe.beginPath(), Oe.moveTo(me.x, me.y), Oe.lineTo(ge.x, ge.y), Oe.stroke());
        });
      }), D.forEach((me) => {
        me.update(), me.draw(Oe);
      }), Oe.globalAlpha = 1, I = requestAnimationFrame(Pe);
    };
    Pe();
  }, w = () => {
    const Me = t(P);
    Me && (Me.style.animation = "overclock-shake 2s ease-in-out", setTimeout(
      () => {
        Me.style.animation = "";
      },
      2e3
    ));
  }, q = (Me) => {
    const xe = t(P)?.getBoundingClientRect();
    xe && (A = Me.clientX - xe.left, U = Me.clientY - xe.top, H.forEach((Pe) => {
      const Oe = A - Pe.x, me = U - Pe.y;
      Math.sqrt(Oe * Oe + me * me) < 100 && (Pe.vx += Oe * 1e-4, Pe.vy += me * 1e-4);
    }));
  }, Y = () => {
    if (t(P)) {
      const Me = t(P).offsetWidth, xe = t(P).offsetHeight;
      t(R) && (t(R).width = Me, t(R).height = xe), t(T) && (t(T).width = Me, t(T).height = xe), t(y) && (t(y).width = Me, t(y).height = xe);
    }
  };
  kt(() => (Y(), t(Q) && k(), d() && (setTimeout(() => C("neural"), 1e3), setTimeout(() => C("liquid"), 2500)), () => {
    O && cancelAnimationFrame(O), I && cancelAnimationFrame(I);
  }));
  const p = {
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
  var h = em();
  Bt("resize", _o, Y), h.__mousemove = q;
  var oe = i(h);
  {
    var ue = (Me) => {
      var xe = Zg();
      at(xe, (Pe) => X(R, Pe), () => t(R)), o(Me, xe);
    };
    b(oe, (Me) => {
      t(Q) && Me(ue);
    });
  }
  var fe = u(oe, 2);
  at(fe, (Me) => X(T, Me), () => t(T));
  var ve = u(fe, 2);
  at(ve, (Me) => X(y, Me), () => t(y));
  var ae = u(ve, 6), W = i(ae), le = u(i(W), 2), re = i(le), S = u(W, 2), te = i(S), J = u(te, 2), Z = i(J), ee = u(ae, 2), se = i(ee), ne = i(se), de = u(se, 2);
  Ye(de, 17, () => t(G), ut, (Me, xe) => {
    var Pe = Qg(), Oe = i(Pe), me = i(Oe);
    me.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
    var we = u(me, 2), ze = i(we), ge = u(we, 2), pe = i(ge), je = u(Oe, 2), Te = i(je);
    E(
      (qe, Fe, Ve, Ge) => {
        L(me, 1, qe, "svelte-169kcnm"), ie(ze, t(xe).command), L(ge, 1, Fe, "svelte-169kcnm"), ie(pe, Ve), L(je, 1, Ge, "svelte-169kcnm"), ie(Te, t(xe).output);
      },
      [
        () => $(V("whitespace-pre font-bold", p.text)),
        () => $(V("text-xs ml-auto opacity-60", p.text)),
        () => t(xe).timestamp.toLocaleTimeString(),
        () => $(V("p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm", "whitespace-pre-wrap font-mono shadow-inner", p.text))
      ]
    ), o(Me, Pe);
  });
  var Ce = u(de, 2);
  {
    var be = (Me) => {
      var xe = Jg(), Pe = i(xe), Oe = i(Pe), me = u(Oe, 2), we = u(me, 2), ze = u(Pe, 2);
      E(
        (ge, pe, je, Te) => {
          L(Oe, 1, ge, "svelte-169kcnm"), L(me, 1, pe, "svelte-169kcnm"), L(we, 1, je, "svelte-169kcnm"), L(ze, 1, Te, "svelte-169kcnm");
        },
        [
          () => $(V("w-2 h-2 rounded-full animate-bounce", `bg-${p.text.split("-")[1]}-400`)),
          () => $(V("w-2 h-2 rounded-full animate-bounce", `bg-${p.text.split("-")[1]}-400`)),
          () => $(V("w-2 h-2 rounded-full animate-bounce", `bg-${p.text.split("-")[1]}-400`)),
          () => $(V("text-sm opacity-70", p.text))
        ]
      ), o(Me, xe);
    };
    b(Ce, (Me) => {
      t(j) && Me(be);
    });
  }
  var ce = u(Ce, 2), he = i(ce);
  he.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
  var Se = u(he, 2);
  Se.__keydown = [Kg, j, C, f];
  var Be = u(Se, 2), Re = u(ce, 2);
  {
    var Ne = (Me) => {
      var xe = $g(), Pe = i(xe);
      st(Pe, () => e.children), o(Me, xe);
    };
    b(Re, (Me) => {
      e.children && Me(Ne);
    });
  }
  at(ee, (Me) => X(P, Me), () => t(P)), E(
    (Me, xe, Pe, Oe, me, we, ze, ge, pe, je) => {
      L(h, 1, Me, "svelte-169kcnm"), L(ae, 1, xe, "svelte-169kcnm"), L(le, 1, Pe, "svelte-169kcnm"), ie(re, a()), L(te, 1, Oe, "svelte-169kcnm"), L(J, 1, me, "svelte-169kcnm"), ie(Z, `LIQUID: ${t(Q) ? "FLOW" : "STATIC"}`), L(se, 1, we, "svelte-169kcnm"), L(ne, 1, ze, "svelte-169kcnm"), L(he, 1, ge, "svelte-169kcnm"), Se.disabled = t(j), L(Se, 1, pe, "svelte-169kcnm"), ye(Se, "placeholder", t(j) ? "Processing..." : "Enter liquid command..."), L(Be, 1, je, "svelte-169kcnm");
    },
    [
      () => $(V("relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500", "border-2 shadow-2xl transform-gpu will-change-transform", `bg-gradient-to-br ${p.bg}`, p.border, p.glow, t(B) && "hologram-effect", n())),
      () => $(V("relative z-10 flex items-center justify-between p-6 border-b-2", "bg-black/30 backdrop-blur-sm", p.border)),
      () => $(V("text-lg font-mono font-bold tracking-wider", p.text, "drop-shadow-lg animate-pulse")),
      () => $(V("px-3 py-1 rounded-full bg-black/40 border", p.border, p.text)),
      () => $(V("px-3 py-1 rounded-full bg-black/40 border", p.border, p.text)),
      () => $(V("mb-6 p-4 rounded-lg bg-black/20 border", p.border)),
      () => $(V("whitespace-pre-wrap", p.text)),
      () => $(V("whitespace-pre font-bold", p.text)),
      () => $(V("flex-1 bg-transparent border-none outline-none font-mono text-white", "placeholder:text-white/40", t(j) && "opacity-50 cursor-not-allowed")),
      () => $(V("w-3 h-6 animate-pulse", `bg-${p.text.split("-")[1]}-400`))
    ]
  ), or(Se, () => t(f), (Me) => X(f, Me)), o(r, h), Ze();
}
bt(["mousemove", "keydown"]);
const rm = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var am = /* @__PURE__ */ v("<!> <!>", 1), nm = /* @__PURE__ */ v("<!> <!>", 1), om = /* @__PURE__ */ v('<div class="mb-2"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <span class="text-white text-sm"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm svelte-14245lp"> </div></div>'), im = /* @__PURE__ */ v('<div class="floating-terminal svelte-14245lp"><div class="terminal-header svelte-14245lp"><div class="terminal-controls svelte-14245lp"><span class="terminal-control close svelte-14245lp"></span> <span class="terminal-control minimize svelte-14245lp"></span> <span class="terminal-control maximize svelte-14245lp"></span></div> <div class="terminal-title svelte-14245lp">3D Floating Terminal</div> <div class="terminal-status svelte-14245lp"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body svelte-14245lp"><!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-1 h-4 bg-terminal-green animate-pulse"></span></div></div></div>'), lm = /* @__PURE__ */ v("<!> <!> <!>", 1), sm = /* @__PURE__ */ v("<!> <!>", 1), dm = /* @__PURE__ */ v("<!> <!>", 1), cm = /* @__PURE__ */ v("<!> <!> <!> <!> <!> <!>", 1);
const vm = {
  hash: "svelte-14245lp",
  code: ".floating-terminal.svelte-14245lp {width:700px;height:450px;background:rgba(0, 0, 0, 0.95);border:1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:8px;font-family:'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.terminal-header.svelte-14245lp {display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid color-mix(in srgb, var(--color-terminal-green) 20%, transparent);}.terminal-controls.svelte-14245lp {display:flex;gap:6px;}.terminal-control.svelte-14245lp {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-14245lp {background:var(--color-bubble-tea-red, #ff8585);}.terminal-control.minimize.svelte-14245lp {background:var(--color-bubble-tea-yellow, #ffd23a);}.terminal-control.maximize.svelte-14245lp {background:var(--color-bubble-tea-green, #6bcf7f);}.terminal-title.svelte-14245lp {color:white;font-size:14px;font-weight:600;}.terminal-status.svelte-14245lp {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-14245lp {padding:12px;height:calc(100% - 50px);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar {width:4px;}.terminal-body.svelte-14245lp::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar-thumb {background:color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:2px;}.terminal-prompt.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-green.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-blue.svelte-14245lp {color:var(--color-terminal-cyan);}"
};
function Dp(r, e) {
  Ke(e, !0), Je(r, vm);
  const a = s(e, "position", 19, () => [0, 2, 0]), n = s(e, "rotation", 19, () => [0, 0, 0]), l = s(e, "scale", 3, 1.5);
  let d, c = /* @__PURE__ */ ke(""), g = /* @__PURE__ */ ke(lt([]));
  const _ = {
    help: "🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear",
    matrix: "💚 Entering the Matrix... Reality.exe has stopped working",
    glitch: "⚡ System.error.404.reality.not.found",
    orbit: "🌍 Orbiting through cyberspace at lightspeed",
    stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1e3 + Math.random() * 5e3)} | Faces: ${Math.round(500 + Math.random() * 2e3)}`,
    whoami: "🤖 You are now part of the 3D matrix",
    ls: "📁 reality.exe  consciousness.dll  quantum_states/  void.txt",
    clear: "Terminal cleared"
  }, N = (Q) => {
    const x = Q.trim().toLowerCase();
    if (x === "clear") {
      X(g, [], !0), X(c, "");
      return;
    }
    const B = _[x] || `Command "${Q}" not found. Type "help" for available commands.`;
    X(
      g,
      [
        ...t(g),
        { command: x, output: B, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), X(c, ""), setTimeout(
      () => {
        d && (d.scrollTop = d.scrollHeight);
      },
      10
    );
  };
  kt(() => {
    if (setTimeout(() => N("help"), 1e3), typeof window < "u") {
      const Q = document.querySelector("canvas");
      Q && (Q.style.willChange = "transform");
    }
  });
  var m = cm(), P = _e(m);
  Tt(P, () => Lt.PerspectiveCamera, (Q, x) => {
    x(Q, {
      makeDefault: !0,
      position: [8, 8, 12],
      fov: 40,
      children: (B, j) => {
        xi(B, {
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
  var R = u(P, 2);
  Tt(R, () => Lt.AmbientLight, (Q, x) => {
    x(Q, { intensity: 0.6 });
  });
  var T = u(R, 2);
  Tt(T, () => Lt.DirectionalLight, (Q, x) => {
    x(Q, { position: [10, 10, 5], intensity: 1.2, castShadow: !0 });
  });
  var y = u(T, 2);
  Tt(y, () => Lt.Group, (Q, x) => {
    x(Q, {
      get position() {
        return a();
      },
      get rotation() {
        return n();
      },
      get scale() {
        return l();
      },
      children: (B, j) => {
        var O = lm(), I = _e(O);
        Tt(I, () => Lt.Mesh, (A, U) => {
          U(A, {
            children: (K, D) => {
              var C = am(), k = _e(C);
              Tt(k, () => Lt.BoxGeometry, (w, q) => {
                q(w, { args: [6, 4, 0.2] });
              });
              var M = u(k, 2);
              Tt(M, () => Lt.MeshPhysicalMaterial, (w, q) => {
                q(w, {
                  get color() {
                    return Le.backgrounds.secondary;
                  },
                  roughness: 0.1,
                  metalness: 0.8,
                  transmission: 0.1,
                  thickness: 0.5,
                  transparent: !0,
                  opacity: 0.9
                });
              }), o(K, C);
            },
            $$slots: { default: !0 }
          });
        });
        var F = u(I, 2);
        Tt(F, () => Lt.Mesh, (A, U) => {
          U(A, {
            position: [0, 0, 0.1],
            children: (K, D) => {
              var C = nm(), k = _e(C);
              Tt(k, () => Lt.PlaneGeometry, (w, q) => {
                q(w, { args: [5.5, 3.5] });
              });
              var M = u(k, 2);
              Tt(M, () => Lt.MeshBasicMaterial, (w, q) => {
                q(w, {
                  get color() {
                    return Le.backgrounds.primary;
                  },
                  transparent: !0,
                  opacity: 0.8
                });
              }), o(K, C);
            },
            $$slots: { default: !0 }
          });
        });
        var H = u(F, 2);
        wi(H, {
          position: [0, 0, 0.11],
          transform: !0,
          occlude: !0,
          scale: 0.08,
          distanceFactor: 10,
          children: (A, U) => {
            var K = im(), D = u(i(K), 2), C = i(D);
            Ye(C, 17, () => t(g), ut, (q, Y) => {
              var z = om(), p = i(z), h = i(p);
              h.textContent = "$";
              var oe = u(h, 2), ue = i(oe), fe = u(oe, 2), ve = i(fe), ae = u(p, 2), W = i(ae);
              E(
                (le) => {
                  ie(ue, t(Y).command), ie(ve, le), ie(W, t(Y).output);
                },
                [() => t(Y).timestamp.toLocaleTimeString()]
              ), o(q, z);
            });
            var k = u(C, 2), M = i(k);
            M.textContent = "$";
            var w = u(M, 2);
            w.__keydown = [rm, N, c], at(K, (q) => d = q, () => d), or(w, () => t(c), (q) => X(c, q)), o(A, K);
          },
          $$slots: { default: !0 }
        }), o(B, O);
      },
      $$slots: { default: !0 }
    });
  });
  var f = u(y, 2);
  Tt(f, () => Lt.Mesh, (Q, x) => {
    x(Q, {
      position: [4, 3, -2],
      rotation: [0.2, 0.4, 0.1],
      children: (B, j) => {
        var O = sm(), I = _e(O);
        Tt(I, () => Lt.BoxGeometry, (H, A) => {
          A(H, { args: [1.5, 1.5, 1.5] });
        });
        var F = u(I, 2);
        Tt(F, () => Lt.MeshPhysicalMaterial, (H, A) => {
          A(H, {
            get color() {
              return Le.terminal.matrix;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), o(B, O);
      },
      $$slots: { default: !0 }
    });
  });
  var G = u(f, 2);
  Tt(G, () => Lt.Mesh, (Q, x) => {
    x(Q, {
      position: [-4, -2, 3],
      rotation: [-0.3, -0.2, 0.4],
      children: (B, j) => {
        var O = dm(), I = _e(O);
        Tt(I, () => Lt.BoxGeometry, (H, A) => {
          A(H, { args: [2, 2, 2] });
        });
        var F = u(I, 2);
        Tt(F, () => Lt.MeshPhysicalMaterial, (H, A) => {
          A(H, {
            get color() {
              return Le.bubbleTea.yellow;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), o(B, O);
      },
      $$slots: { default: !0 }
    });
  }), o(r, m), Ze();
}
bt(["keydown"]);
const um = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var fm = /* @__PURE__ */ v('<div class="mb-4"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green"></span> <span class="text-white"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-2"> </div></div>'), bm = /* @__PURE__ */ v('<div><div class="terminal-header svelte-s8hlxk"><div class="terminal-controls"><span class="terminal-control close"></span> <span class="terminal-control minimize"></span> <span class="terminal-control maximize"></span></div> <div class="terminal-title"> </div> <div class="terminal-status svelte-s8hlxk"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body max-h-96 overflow-y-auto svelte-s8hlxk"><!> <!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-terminal-green animate-pulse"></span></div></div></div>');
const gm = {
  hash: "svelte-s8hlxk",
  code: ".terminal-header.svelte-s8hlxk {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);}.terminal-status.svelte-s8hlxk {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-s8hlxk {scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar {width:4px;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-thumb {background:rgba(0, 212, 170, 0.3);border-radius:2px;}.terminal-body.svelte-s8hlxk::-webkit-scrollbar-thumb:hover {background:rgba(0, 212, 170, 0.5);}"
};
function mm(r, e) {
  Ke(e, !0), Je(r, gm);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({
    help: "🚀 Available commands: help, whoami, skills, projects, contact",
    whoami: "🧑‍💻 Tulio Cunha - Full Stack Developer & Design System Architect",
    skills: "⚡ Technologies: Svelte, TypeScript, WebGL, Three.js, WebAssembly",
    projects: "🏗️ Featured: Glass UI, Liquid Terminal, Neural Network Visualizer",
    contact: "📫 Email: tulio@tuliocunha.dev | GitHub: github.com/tuliopc23"
  })), d = s(e, "autoPlay", 3, !1);
  let c, g = /* @__PURE__ */ ke(""), _ = /* @__PURE__ */ ke(lt([]));
  const N = (O) => {
    const I = O.trim().toLowerCase(), F = l()[I] || `Command "${O}" not found. Type "help" for available commands.`;
    X(
      _,
      [
        ...t(_),
        { command: I, output: F, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), X(g, ""), setTimeout(
      () => {
        c && (c.scrollTop = c.scrollHeight);
      },
      10
    );
  };
  kt(() => {
    d() && (setTimeout(() => N("help"), 1e3), setTimeout(() => N("whoami"), 2500), setTimeout(() => N("skills"), 4e3));
  });
  var m = bm(), P = i(m), R = u(i(P), 2), T = i(R), y = u(P, 2), f = i(y);
  {
    var G = (O) => {
      var I = Ae(), F = _e(I);
      st(F, () => e.children), o(O, I);
    };
    b(f, (O) => {
      e.children && O(G);
    });
  }
  var Q = u(f, 2);
  Ye(Q, 17, () => t(_), ut, (O, I) => {
    var F = fm(), H = i(F), A = i(H);
    A.textContent = "$";
    var U = u(A, 2), K = i(U), D = u(U, 2), C = i(D), k = u(H, 2), M = i(k);
    E(
      (w) => {
        ie(K, t(I).command), ie(C, w), ie(M, t(I).output);
      },
      [() => t(I).timestamp.toLocaleTimeString()]
    ), o(O, F);
  });
  var x = u(Q, 2), B = i(x);
  B.textContent = "$";
  var j = u(B, 2);
  j.__keydown = [um, N, g], at(y, (O) => c = O, () => c), E(
    (O) => {
      L(m, 1, O, "svelte-s8hlxk"), ie(T, a());
    },
    [
      () => $(V("terminal glass-heavy max-w-4xl mx-auto", n()))
    ]
  ), or(j, () => t(g), (O) => X(g, O)), o(r, m), Ze();
}
bt(["keydown"]);
const hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mm
}, Symbol.toStringTag, { value: "Module" }));
var pm = /* @__PURE__ */ v("<div> </div>"), xm = /* @__PURE__ */ v("<span></span>"), wm = /* @__PURE__ */ v("<div> <!></div>"), _m = /* @__PURE__ */ v('<div class="mt-4 svelte-mxdatp"><span class="text-white svelte-mxdatp">$</span> <span></span></div>'), ym = /* @__PURE__ */ v('<div><div class="absolute inset-0 pointer-events-none svelte-mxdatp"><div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse svelte-mxdatp"></div></div> <div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg svelte-mxdatp"></div> <div class="relative z-10 space-y-1 svelte-mxdatp"><!> <!> <!></div> <div class="absolute inset-0 pointer-events-none svelte-mxdatp"><div class="w-full h-full bg-current opacity-[0.02] blur-xl svelte-mxdatp"></div></div></div>');
const km = {
  hash: "svelte-mxdatp",
  code: `
	/* CRT glow effect */
	@keyframes svelte-mxdatp-crt-glow {
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
	@keyframes svelte-mxdatp-scanlines {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100vh);
		}
	}div.svelte-mxdatp {
		animation: svelte-mxdatp-crt-glow 3s ease-in-out infinite;}

	/* Custom scrollbar for terminal feel */.svelte-mxdatp::-webkit-scrollbar {width:8px;}.svelte-mxdatp::-webkit-scrollbar-track {background:rgba(0, 0, 0, 0.3);}.svelte-mxdatp::-webkit-scrollbar-thumb {background:currentColor;border-radius:4px;opacity:0.5;}.svelte-mxdatp::-webkit-scrollbar-thumb:hover {opacity:0.8;}`
};
function Rp(r, e) {
  Ke(e, !0), Je(r, km);
  const a = s(e, "messages", 19, () => []), n = s(e, "autoStart", 3, !0), l = s(e, "variant", 3, "classic"), d = s(e, "speed", 3, "normal"), c = s(e, "showCursor", 3, !0), g = s(e, "class", 3, ""), _ = /* @__PURE__ */ vt(e, [
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
  let N = /* @__PURE__ */ ke(0), m = /* @__PURE__ */ ke(""), P = /* @__PURE__ */ ke(!1), R = /* @__PURE__ */ ke(!1), T = /* @__PURE__ */ ke(!0);
  const y = [
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
  ], f = a().length > 0 ? a() : y, G = {
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
  }, Q = {
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    system: "text-white font-bold"
  }, B = { slow: 80, normal: 40, fast: 15 }[d()], j = G[l()];
  let O, I = /* @__PURE__ */ ke(lt([]));
  const F = async (q, Y = 50) => {
    X(m, "");
    for (let z = 0; z <= q.length; z++)
      X(m, q.slice(0, z), !0), await new Promise((p) => setTimeout(p, Y));
    await new Promise((z) => setTimeout(z, 100));
  }, H = async () => {
    if (!t(P)) {
      X(P, !0), X(R, !1), X(N, 0), X(I, [], !0), X(m, "");
      for (let q = 0; q < f.length; q++) {
        const Y = f[q];
        X(N, q, !0), Y.text ? (await F(Y.text, B), X(
          I,
          [
            ...t(I),
            { text: Y.text, type: Y.type }
          ],
          !0
        )) : X(I, [...t(I), { text: "", type: "info" }], !0), X(m, ""), O && (O.scrollTop = O.scrollHeight), await new Promise((z) => setTimeout(z, Y.delay));
      }
      X(R, !0), X(P, !1), e.onComplete?.();
    }
  }, A = () => {
    setInterval(
      () => {
        X(T, !t(T));
      },
      500
    );
  };
  kt(() => {
    A(), n() && setTimeout(H, 200);
  });
  var U = ym();
  Qe(
    U,
    (q) => ({ class: q, ..._ }),
    [
      () => V("relative w-full h-full p-6 overflow-auto", j.bg, j.text, j.font, "leading-relaxed text-sm", g())
    ],
    void 0,
    "svelte-mxdatp"
  );
  var K = u(i(U), 4), D = i(K);
  Ye(D, 17, () => t(I), ut, (q, Y) => {
    var z = pm(), p = i(z);
    E(
      (h) => {
        L(z, 1, h, "svelte-mxdatp"), ie(p, t(Y).text || " ");
      },
      [
        () => $(V(
          "whitespace-pre-wrap",
          t(Y).type && Q[t(Y).type] ? Q[t(Y).type] : j.text,
          "animate-in fade-in duration-200"
        ))
      ]
    ), o(q, z);
  });
  var C = u(D, 2);
  {
    var k = (q) => {
      var Y = wm(), z = i(Y), p = u(z);
      {
        var h = (oe) => {
          var ue = xm();
          E((fe) => L(ue, 1, fe, "svelte-mxdatp"), [
            () => $(V("inline-block w-2 h-4 ml-1 border-r-2 animate-pulse", j.cursor))
          ]), o(oe, ue);
        };
        b(p, (oe) => {
          t(T) && c() && oe(h);
        });
      }
      E(
        (oe) => {
          L(Y, 1, oe, "svelte-mxdatp"), ie(z, `${t(m) ?? ""} `);
        },
        [
          () => $(V("whitespace-pre-wrap", f[t(N)]?.type && Q[f[t(N)].type] ? Q[f[t(N)].type] : j.text))
        ]
      ), o(q, Y);
    };
    b(C, (q) => {
      t(P) && t(m) && q(k);
    });
  }
  var M = u(C, 2);
  {
    var w = (q) => {
      var Y = _m(), z = u(i(Y), 2);
      E((p) => L(z, 1, p, "svelte-mxdatp"), [
        () => $(V("inline-block w-2 h-4 ml-1 border-r-2", t(T) ? "opacity-100" : "opacity-0", j.cursor, "transition-opacity duration-100"))
      ]), o(q, Y);
    };
    b(M, (q) => {
      t(R) && c() && q(w);
    });
  }
  at(U, (q) => O = q, () => O), o(r, U), Ze();
}
var Cm = /* @__PURE__ */ v("<canvas></canvas>");
const Sm = {
  hash: "svelte-ophnba",
  code: "canvas.svelte-ophnba {display:block;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;}"
};
function Np(r, e) {
  Ke(e, !0), Je(r, Sm);
  const a = s(e, "variant", 3, "classic"), n = s(e, "speed", 3, "normal"), l = s(e, "density", 3, "medium"), d = s(e, "characters", 3, "matrix"), c = s(e, "glowEffect", 3, !0), g = s(e, "fadeEffect", 3, !0), _ = s(e, "class", 3, ""), N = /* @__PURE__ */ vt(e, [
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
  let m, P, R, T = [];
  const y = {
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
  }, G = { slow: 100, normal: 50, fast: 20 }, Q = { low: 20, medium: 15, high: 10 }, x = y[a()], B = f[d()], j = G[n()];
  Q[l()];
  const O = 14;
  let I = 0;
  const F = () => {
    if (m) {
      m.width = m.offsetWidth, m.height = m.offsetHeight, I = Math.floor(m.width / O), T = [];
      for (let C = 0; C < I; C++)
        T[C] = Math.random() * m.height;
    }
  }, H = () => {
    if (!(!P || !m)) {
      g() ? (P.fillStyle = x.background, P.fillRect(0, 0, m.width, m.height)) : P.clearRect(0, 0, m.width, m.height), P.font = `${O}px monospace`, P.textAlign = "center", c() && (P.shadowColor = x.primary, P.shadowBlur = 10);
      for (let C = 0; C < T.length; C++) {
        const k = B[Math.floor(Math.random() * B.length)];
        if (P.fillStyle = x.primary, P.fillText(k, C * O + O / 2, T[C]), T[C] > O) {
          P.fillStyle = x.secondary;
          const M = B[Math.floor(Math.random() * B.length)];
          P.fillText(M, C * O + O / 2, T[C] - O);
        }
        (T[C] > m.height || Math.random() > 0.975) && (T[C] = 0), T[C] += O;
      }
    }
  }, A = () => {
    H(), R = setTimeout(
      () => {
        requestAnimationFrame(A);
      },
      j
    );
  }, U = () => {
    m && (P = m.getContext("2d"), P && (F(), A()));
  }, K = () => {
    R && clearTimeout(R);
  };
  kt(() => {
    U();
    const C = () => {
      F();
    };
    return window.addEventListener("resize", C), () => {
      K(), window.removeEventListener("resize", C);
    };
  });
  var D = Cm();
  Qe(D, (C) => ({ class: C, ...N }), [() => V("w-full h-full bg-black", _())], void 0, "svelte-ophnba"), at(D, (C) => m = C, () => m), o(r, D), Ze();
}
var Em = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Tm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Mm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Am = /* @__PURE__ */ v("<h1><span> <!></span> <!> <!></h1>"), zm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Im = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Pm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Lm = /* @__PURE__ */ v("<h2><span> <!></span> <!> <!></h2>"), jm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Dm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Rm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Nm = /* @__PURE__ */ v("<h3><span> <!></span> <!> <!></h3>"), Om = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), qm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Bm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Fm = /* @__PURE__ */ v("<span><span> <!></span> <!> <!></span>"), Hm = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Vm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Gm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Um = /* @__PURE__ */ v("<div><span> <!></span> <!> <!></div>"), Ym = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Wm = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Xm = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Km = /* @__PURE__ */ v("<div><span> <!></span> <!> <!></div>");
const Zm = {
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
function Op(r, e) {
  Ke(e, !0), Je(r, Zm);
  const a = s(e, "variant", 3, "macintosh"), n = s(e, "size", 3, "md"), l = s(e, "animated", 3, !0), d = s(e, "typewriter", 3, !1), c = s(e, "scanlines", 3, !0), g = s(e, "glow", 3, !0), _ = s(e, "flicker", 3, !1), N = s(e, "chromatic", 3, !1), m = s(e, "breathing", 3, !1), P = s(e, "class", 3, ""), R = s(e, "element", 3, "p"), T = /* @__PURE__ */ vt(e, [
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
  let y = /* @__PURE__ */ ke(""), f = /* @__PURE__ */ ke(!0), G = /* @__PURE__ */ ke(0);
  const Q = {
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
  }, x = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl"
  }, B = Q[a()];
  kt(() => {
    if (d()) {
      const U = setInterval(
        () => {
          t(G) < e.text.length ? (X(y, e.text.slice(0, t(G) + 1), !0), Ta(G)) : clearInterval(U);
        },
        50 + Math.random() * 100
      ), K = setInterval(
        () => {
          X(f, !t(f));
        },
        500
      );
      return () => {
        clearInterval(U), clearInterval(K);
      };
    } else
      X(y, e.text, !0);
  });
  const j = V("relative inline-block transition-all duration-300", B.font, B.color, x[n()], g() && B.shadow, l() && "transform-gpu will-change-transform", c() && "retro-scanlines", _() && "retro-flicker", N() && "retro-chromatic", P()), O = V("relative inline-block p-4 overflow-hidden", B.bg, B.border, l() && "transition-all duration-500");
  var I = Ae(), F = _e(I);
  {
    var H = (U) => {
      var K = Am();
      Qe(K, () => ({ class: O, ...T }), void 0, void 0, "svelte-13rlfrj");
      var D = i(K), C = i(D), k = u(C);
      {
        var M = (p) => {
          var h = Em();
          o(p, h);
        };
        b(k, (p) => {
          d() && t(f) && p(M);
        });
      }
      var w = u(D, 2);
      {
        var q = (p) => {
          var h = Tm();
          o(p, h);
        };
        b(w, (p) => {
          c() && p(q);
        });
      }
      var Y = u(w, 2);
      {
        var z = (p) => {
          var h = Mm();
          o(p, h);
        };
        b(Y, (p) => {
          a() === "crt" && p(z);
        });
      }
      De(K, (p, h) => It?.(p, h), () => ({
        enabled: l(),
        duration: 300,
        scale: 1.02,
        borderRadius: "12px"
      })), De(K, (p, h) => Rt?.(p, h), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), E(() => {
        L(D, 1, $(j), "svelte-13rlfrj"), pt(D, `filter: ${B.filter ?? ""}`), ie(C, `${(d() ? t(y) : e.text) ?? ""} `);
      }), o(U, K);
    }, A = (U) => {
      var K = Ae(), D = _e(K);
      {
        var C = (M) => {
          var w = Lm();
          Qe(w, () => ({ class: O, ...T }), void 0, void 0, "svelte-13rlfrj");
          var q = i(w), Y = i(q), z = u(Y);
          {
            var p = (ve) => {
              var ae = zm();
              o(ve, ae);
            };
            b(z, (ve) => {
              d() && t(f) && ve(p);
            });
          }
          var h = u(q, 2);
          {
            var oe = (ve) => {
              var ae = Im();
              o(ve, ae);
            };
            b(h, (ve) => {
              c() && ve(oe);
            });
          }
          var ue = u(h, 2);
          {
            var fe = (ve) => {
              var ae = Pm();
              o(ve, ae);
            };
            b(ue, (ve) => {
              a() === "crt" && ve(fe);
            });
          }
          De(w, (ve, ae) => It?.(ve, ae), () => ({
            enabled: l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "12px"
          })), De(w, (ve, ae) => Rt?.(ve, ae), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), E(() => {
            L(q, 1, $(j), "svelte-13rlfrj"), pt(q, `filter: ${B.filter ?? ""}`), ie(Y, `${(d() ? t(y) : e.text) ?? ""} `);
          }), o(M, w);
        }, k = (M) => {
          var w = Ae(), q = _e(w);
          {
            var Y = (p) => {
              var h = Nm();
              Qe(h, () => ({ class: O, ...T }), void 0, void 0, "svelte-13rlfrj");
              var oe = i(h), ue = i(oe), fe = u(ue);
              {
                var ve = (S) => {
                  var te = jm();
                  o(S, te);
                };
                b(fe, (S) => {
                  d() && t(f) && S(ve);
                });
              }
              var ae = u(oe, 2);
              {
                var W = (S) => {
                  var te = Dm();
                  o(S, te);
                };
                b(ae, (S) => {
                  c() && S(W);
                });
              }
              var le = u(ae, 2);
              {
                var re = (S) => {
                  var te = Rm();
                  o(S, te);
                };
                b(le, (S) => {
                  a() === "crt" && S(re);
                });
              }
              De(h, (S, te) => It?.(S, te), () => ({
                enabled: l(),
                duration: 300,
                scale: 1.02,
                borderRadius: "12px"
              })), De(h, (S, te) => Rt?.(S, te), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), E(() => {
                L(oe, 1, $(j), "svelte-13rlfrj"), pt(oe, `filter: ${B.filter ?? ""}`), ie(ue, `${(d() ? t(y) : e.text) ?? ""} `);
              }), o(p, h);
            }, z = (p) => {
              var h = Ae(), oe = _e(h);
              {
                var ue = (ve) => {
                  var ae = Fm();
                  Qe(ae, () => ({ class: O, ...T }), void 0, void 0, "svelte-13rlfrj");
                  var W = i(ae), le = i(W), re = u(le);
                  {
                    var S = (se) => {
                      var ne = Om();
                      o(se, ne);
                    };
                    b(re, (se) => {
                      d() && t(f) && se(S);
                    });
                  }
                  var te = u(W, 2);
                  {
                    var J = (se) => {
                      var ne = qm();
                      o(se, ne);
                    };
                    b(te, (se) => {
                      c() && se(J);
                    });
                  }
                  var Z = u(te, 2);
                  {
                    var ee = (se) => {
                      var ne = Bm();
                      o(se, ne);
                    };
                    b(Z, (se) => {
                      a() === "crt" && se(ee);
                    });
                  }
                  De(ae, (se, ne) => It?.(se, ne), () => ({
                    enabled: l(),
                    duration: 300,
                    scale: 1.02,
                    borderRadius: "12px"
                  })), De(ae, (se, ne) => Rt?.(se, ne), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), E(() => {
                    L(W, 1, $(j), "svelte-13rlfrj"), pt(W, `filter: ${B.filter ?? ""}`), ie(le, `${(d() ? t(y) : e.text) ?? ""} `);
                  }), o(ve, ae);
                }, fe = (ve) => {
                  var ae = Ae(), W = _e(ae);
                  {
                    var le = (S) => {
                      var te = Um();
                      Qe(te, () => ({ class: O, ...T }), void 0, void 0, "svelte-13rlfrj");
                      var J = i(te), Z = i(J), ee = u(Z);
                      {
                        var se = (ce) => {
                          var he = Hm();
                          o(ce, he);
                        };
                        b(ee, (ce) => {
                          d() && t(f) && ce(se);
                        });
                      }
                      var ne = u(J, 2);
                      {
                        var de = (ce) => {
                          var he = Vm();
                          o(ce, he);
                        };
                        b(ne, (ce) => {
                          c() && ce(de);
                        });
                      }
                      var Ce = u(ne, 2);
                      {
                        var be = (ce) => {
                          var he = Gm();
                          o(ce, he);
                        };
                        b(Ce, (ce) => {
                          a() === "crt" && ce(be);
                        });
                      }
                      De(te, (ce, he) => It?.(ce, he), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), De(te, (ce, he) => Rt?.(ce, he), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), E(() => {
                        L(J, 1, $(j), "svelte-13rlfrj"), pt(J, `filter: ${B.filter ?? ""}`), ie(Z, `${(d() ? t(y) : e.text) ?? ""} `);
                      }), o(S, te);
                    }, re = (S) => {
                      var te = Km();
                      Qe(te, () => ({ class: O, ...T }), void 0, void 0, "svelte-13rlfrj");
                      var J = i(te), Z = i(J), ee = u(Z);
                      {
                        var se = (ce) => {
                          var he = Ym();
                          o(ce, he);
                        };
                        b(ee, (ce) => {
                          d() && t(f) && ce(se);
                        });
                      }
                      var ne = u(J, 2);
                      {
                        var de = (ce) => {
                          var he = Wm();
                          o(ce, he);
                        };
                        b(ne, (ce) => {
                          c() && ce(de);
                        });
                      }
                      var Ce = u(ne, 2);
                      {
                        var be = (ce) => {
                          var he = Xm();
                          o(ce, he);
                        };
                        b(Ce, (ce) => {
                          a() === "crt" && ce(be);
                        });
                      }
                      De(te, (ce, he) => It?.(ce, he), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), De(te, (ce, he) => Rt?.(ce, he), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), E(() => {
                        L(J, 1, $(j), "svelte-13rlfrj"), pt(J, `filter: ${B.filter ?? ""}`), ie(Z, `${(d() ? t(y) : e.text) ?? ""} `);
                      }), o(S, te);
                    };
                    b(
                      W,
                      (S) => {
                        R() === "div" ? S(le) : S(re, !1);
                      },
                      !0
                    );
                  }
                  o(ve, ae);
                };
                b(
                  oe,
                  (ve) => {
                    R() === "span" ? ve(ue) : ve(fe, !1);
                  },
                  !0
                );
              }
              o(p, h);
            };
            b(
              q,
              (p) => {
                R() === "h3" ? p(Y) : p(z, !1);
              },
              !0
            );
          }
          o(M, w);
        };
        b(
          D,
          (M) => {
            R() === "h2" ? M(C) : M(k, !1);
          },
          !0
        );
      }
      o(U, K);
    };
    b(F, (U) => {
      R() === "h1" ? U(H) : U(A, !1);
    });
  }
  o(r, I), Ze();
}
var Qm = /* @__PURE__ */ v('<span class="bitmap-char svelte-1cfjpo6"><!></span>'), Jm = /* @__PURE__ */ v('<span class="cursor svelte-1cfjpo6">█</span>'), $m = /* @__PURE__ */ v(" <!>", 1), eh = /* @__PURE__ */ v("<span><!></span>");
const th = {
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
function qp(r, e) {
  Ke(e, !0), Je(r, th);
  const a = s(e, "text", 3, ""), n = s(e, "variant", 3, "bitmap"), l = s(e, "size", 3, "md"), d = s(e, "color", 3, "green");
  s(e, "glow", 3, !0);
  const c = s(e, "scanlines", 3, !1), g = s(e, "flicker", 3, !1), _ = s(e, "animate", 3, !1), N = s(e, "typewriter", 3, !1), m = s(e, "speed", 3, 50), P = s(e, "class", 3, "");
  let R = /* @__PURE__ */ ke(""), T = /* @__PURE__ */ ke(0), y;
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
  }, G = {
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
  }, Q = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem"
  }, x = V("retro-text inline-block relative", { "animate-flicker": g(), scanlines: c() }, P());
  function B() {
    if (!N() || !a()) return;
    X(R, ""), X(T, 0);
    const A = setInterval(
      () => {
        t(T) < a().length ? (X(R, t(R) + a()[t(T)]), Ta(T)) : clearInterval(A);
      },
      m()
    );
  }
  wt(() => {
    N() ? B() : X(R, a());
  }), wt(() => {
    if (y) {
      const A = f[n()], U = G[d()];
      y.style.setProperty("--retro-font-family", A.fontFamily), y.style.setProperty("--retro-font-weight", A.fontWeight), y.style.setProperty("--retro-letter-spacing", A.letterSpacing), y.style.setProperty("--retro-line-height", A.lineHeight), y.style.setProperty("--retro-font-size", Q[l()]), y.style.setProperty("--retro-color", U.color), y.style.setProperty("--retro-shadow-color", U.shadowColor), y.style.setProperty("--retro-text-transform", A.textTransform || "none");
    }
  });
  function j(A) {
    return (n() === "commodore" || n() === "atari") && {
      " ": "&nbsp;",
      A: "█▀█<br>█▀█<br>█&nbsp;█",
      E: "███<br>██&nbsp;<br>███",
      I: "███<br>&nbsp;█&nbsp;<br>███",
      O: "███<br>█&nbsp;█<br>███",
      U: "█&nbsp;█<br>█&nbsp;█<br>███"
    }[A.toUpperCase()] || A;
  }
  kt(() => {
    _() && y && (y.style.opacity = "0", setTimeout(
      () => {
        y.style.transition = "opacity 0.5s ease-in-out", y.style.opacity = "1";
      },
      100
    ));
  });
  var O = eh(), I = i(O);
  {
    var F = (A) => {
      var U = Ae(), K = _e(U);
      st(K, () => e.children), o(A, U);
    }, H = (A) => {
      var U = Ae(), K = _e(U);
      {
        var D = (k) => {
          var M = Ae(), w = _e(M);
          Ye(w, 17, () => t(R).split(""), ut, (q, Y) => {
            var z = Qm(), p = i(z);
            xr(p, () => j(t(Y))), E(() => ye(z, "data-char", t(Y))), o(q, z);
          }), o(k, M);
        }, C = (k) => {
          var M = $m(), w = _e(M), q = u(w);
          {
            var Y = (z) => {
              var p = Jm();
              o(z, p);
            };
            b(q, (z) => {
              N() && t(T) < a().length && z(Y);
            });
          }
          E(() => ie(w, `${t(R) ?? ""} `)), o(k, M);
        };
        b(
          K,
          (k) => {
            n() === "commodore" || n() === "atari" ? k(D) : k(C, !1);
          },
          !0
        );
      }
      o(A, U);
    };
    b(I, (A) => {
      e.children ? A(F) : A(H, !1);
    });
  }
  at(O, (A) => y = A, () => y), E(() => {
    L(O, 1, $(x), "svelte-1cfjpo6"), ye(O, "aria-label", a());
  }), o(r, O), Ze();
}
var rh = /* @__PURE__ */ v("<div> </div>"), ah = /* @__PURE__ */ v('<div class="flex items-center svelte-nrft94"><span class="animate-pulse svelte-nrft94">_</span></div>'), nh = /* @__PURE__ */ v('<div class="mt-4 space-y-1 svelte-nrft94"><div>System initialization complete.</div> <div class="flex items-center svelte-nrft94"><span>user@hackers-brand:~$</span> <span class="animate-pulse ml-1 svelte-nrft94">_</span></div></div>'), oh = /* @__PURE__ */ v('<div class="absolute bottom-6 left-6 right-6 svelte-nrft94"><div class="flex items-center space-x-2 text-xs svelte-nrft94"><span>Loading:</span> <div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden svelte-nrft94"><div></div></div> <span> </span></div></div>'), ih = /* @__PURE__ */ v('<div><div class="absolute inset-0 opacity-10 pointer-events-none svelte-nrft94"><div class="w-full h-full svelte-nrft94" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"></div></div> <div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none svelte-nrft94"></div> <div class="relative z-10 space-y-1 svelte-nrft94"><!> <!> <!></div> <!> <div class="absolute inset-0 pointer-events-none svelte-nrft94"><div class="w-full h-full opacity-[0.02] blur-2xl svelte-nrft94" style="background-color: currentColor;"></div></div></div>');
const lh = {
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
function Bp(r, e) {
  Ke(e, !0), Je(r, lh);
  const a = s(e, "autoStart", 3, !0), n = s(e, "variant", 3, "retro"), l = s(e, "showBIOS", 3, !0), d = s(e, "fastBoot", 3, !1), c = s(e, "class", 3, ""), g = /* @__PURE__ */ vt(e, [
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
  let _ = /* @__PURE__ */ ke(0), N = /* @__PURE__ */ ke(!1), m = /* @__PURE__ */ ke(!1), P = /* @__PURE__ */ ke(0);
  const T = {
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
  }[n()], y = [
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
  ], G = l() ? [...y, "", ...f] : f, Q = d() ? 50 : 150, x = async () => {
    if (!t(N)) {
      X(N, !0), X(m, !1), X(_, 0), X(P, 0);
      for (let C = 0; C < G.length; C++) {
        X(_, C, !0), X(P, C / G.length * 100);
        let k = Q;
        G[C].includes("PASS") || G[C].includes("OK") ? k = d() ? 30 : 100 : G[C].includes("[") && (k = d() ? 20 : 80), await new Promise((M) => setTimeout(M, k));
      }
      X(m, !0), X(N, !1), X(P, 100), e.onComplete?.();
    }
  };
  kt(() => {
    a() && setTimeout(x, 300);
  });
  const B = (C) => C.includes("PASS") || C.includes("OK") || C.includes("ready") ? T.success : C.includes("FAIL") || C.includes("ERROR") ? T.error : C.includes("Copyright") || C.includes("BIOS") || C.includes("GRUB") ? T.accent : T.text;
  var j = ih();
  Qe(
    j,
    (C) => ({ class: C, ...g }),
    [
      () => V("relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden", T.bg, T.text, c())
    ],
    void 0,
    "svelte-nrft94"
  );
  var O = u(i(j), 4), I = i(O);
  Ye(I, 17, () => G.slice(0, t(_) + 1), ut, (C, k, M) => {
    var w = rh(), q = i(w);
    E(
      (Y) => {
        L(w, 1, Y, "svelte-nrft94"), ie(q, t(k) || " ");
      },
      [
        () => $(V("whitespace-pre-wrap transition-all duration-200", B(t(k)), M === t(_) && t(N) ? "animate-pulse" : ""))
      ]
    ), o(C, w);
  });
  var F = u(I, 2);
  {
    var H = (C) => {
      var k = ah();
      o(C, k);
    };
    b(F, (C) => {
      t(N) && C(H);
    });
  }
  var A = u(F, 2);
  {
    var U = (C) => {
      var k = nh(), M = i(k), w = u(M, 2), q = i(w);
      E(() => {
        L(M, 1, $(T.success), "svelte-nrft94"), L(q, 1, $(T.accent), "svelte-nrft94");
      }), o(C, k);
    };
    b(A, (C) => {
      t(m) && C(U);
    });
  }
  var K = u(O, 2);
  {
    var D = (C) => {
      var k = oh(), M = i(k), w = i(M), q = u(w, 2), Y = i(q), z = u(q, 2), p = i(z);
      E(
        (h, oe) => {
          L(w, 1, $(T.accent), "svelte-nrft94"), L(Y, 1, h, "svelte-nrft94"), pt(Y, `width: ${t(P) ?? ""}%; background-color: currentColor;`), L(z, 1, $(T.text), "svelte-nrft94"), ie(p, `${oe ?? ""}%`);
        },
        [
          () => $(V("h-full transition-all duration-300 rounded-full", T.success)),
          () => Math.round(t(P))
        ]
      ), o(C, k);
    };
    b(K, (C) => {
      t(N) && !d() && C(D);
    });
  }
  o(r, j), Ze();
}
var sh = /* @__PURE__ */ v('<div class="flex items-center justify-center p-8 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 svelte-1884ls5"></div> <span class="text-white/70 svelte-1884ls5">Loading...</span></div></div>'), dh = /* @__PURE__ */ v('<div class="text-sm text-red-400/70 svelte-1884ls5"> </div>'), ch = /* @__PURE__ */ v('<div role="alert" aria-live="assertive"><div class="space-y-4 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="flex-shrink-0 svelte-1884ls5"><svg class="w-6 h-6 text-red-500 svelte-1884ls5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg></div> <div class="svelte-1884ls5"><h3 class="text-lg font-semibold text-red-600 svelte-1884ls5"> </h3> <p class="text-sm text-red-500/80 svelte-1884ls5"> </p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1884ls5"><!> <!></div> <div class="text-xs text-red-400/50 svelte-1884ls5"><!></div></div></div>');
const vh = {
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
function Fp(r, e) {
  Ke(e, !0), Je(r, vh);
  const a = s(e, "variant", 3, "glass"), n = s(e, "animate", 3, !0), l = s(
    e,
    "timeout",
    3,
    1e4
    // 10 seconds
  ), d = s(e, "maxRetries", 3, 3), c = s(e, "class", 3, "");
  let g = /* @__PURE__ */ ke("idle"), _ = /* @__PURE__ */ ke(null), N = /* @__PURE__ */ ke(null), m = /* @__PURE__ */ ke(0), P = null;
  async function R(H) {
    if (H) {
      X(g, "loading"), X(_, null), X(N, null), l() > 0 && (P = setTimeout(
        () => {
          t(g) === "loading" && (X(g, "timeout"), X(_, new Error(`Operation timed out after ${l()}ms`), !0), e.onError?.(t(_)));
        },
        l()
      ));
      try {
        X(N, await H, !0), X(g, "success");
      } catch (A) {
        X(_, A instanceof Error ? A : new Error(String(A)), !0), X(g, "error"), e.onError?.(t(_));
      } finally {
        P && (clearTimeout(P), P = null);
      }
    }
  }
  async function T() {
    if (!(t(m) >= d()))
      if (Ta(m), e.onRetry) {
        const H = e.onRetry();
        await R(H);
      } else e.promise && await R(e.promise);
  }
  function y() {
    X(g, "idle"), X(_, null), X(N, null), X(m, 0), P && (clearTimeout(P), P = null);
  }
  wt(() => {
    e.promise && R(e.promise);
  }), kt(() => () => {
    P && clearTimeout(P);
  });
  const G = V("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[a()], c());
  function Q(H) {
    switch (H) {
      case "timeout":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
      case "network":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
    }
  }
  function x(H) {
    return H.message.includes("timeout") ? "timeout" : H.message.includes("fetch") || H.message.includes("network") ? "network" : "general";
  }
  function B(H) {
    switch (x(H)) {
      case "timeout":
        return "The operation took too long to complete";
      case "network":
        return "Network connection failed";
      default:
        return H.message || "An unexpected error occurred";
    }
  }
  var j = Ae(), O = _e(j);
  {
    var I = (H) => {
      var A = Ae(), U = _e(A);
      {
        var K = (C) => {
          var k = Ae(), M = _e(k);
          st(M, () => e.loading), o(C, k);
        }, D = (C) => {
          var k = sh();
          rt(1, k, () => mt, () => n() ? { duration: 200 } : void 0), o(C, k);
        };
        b(U, (C) => {
          e.loading ? C(K) : C(D, !1);
        });
      }
      o(H, A);
    }, F = (H) => {
      var A = Ae(), U = _e(A);
      {
        var K = (C) => {
          var k = Ae(), M = _e(k);
          {
            var w = (Y) => {
              var z = Ae(), p = _e(z);
              st(p, () => e.fallback, () => ({
                error: t(_),
                retry: T,
                reset: y,
                retryCount: t(m),
                maxRetries: d(),
                state: t(g)
              })), o(Y, z);
            }, q = (Y) => {
              var z = ch(), p = i(z), h = i(p), oe = i(h), ue = i(oe), fe = i(ue);
              xr(fe, () => Q(x(t(_))), !0);
              var ve = u(oe, 2), ae = i(ve), W = i(ae), le = u(ae, 2), re = i(le), S = u(h, 2);
              b(S, (he) => {
                t(_);
              });
              var te = u(S, 2);
              {
                var J = (he) => {
                  var Se = dh(), Be = i(Se);
                  E(() => ie(Be, `Retry attempt ${t(m) ?? ""} of ${d() ?? ""}`)), o(he, Se);
                };
                b(te, (he) => {
                  t(m) > 0 && he(J);
                });
              }
              var Z = u(te, 2), ee = i(Z);
              {
                var se = (he) => {
                  tr(he, {
                    variant: "glass",
                    size: "sm",
                    onclick: T,
                    class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                    children: (Se, Be) => {
                      var Re = Et();
                      E(() => ie(Re, t(g) === "timeout" ? "Try Again" : "Retry")), o(Se, Re);
                    },
                    $$slots: { default: !0 }
                  });
                };
                b(ee, (he) => {
                  t(m) < d() && (e.onRetry || e.promise) && he(se);
                });
              }
              var ne = u(ee, 2);
              tr(ne, {
                variant: "glass",
                size: "sm",
                onclick: y,
                class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
                children: (he, Se) => {
                  var Be = Et("Reset");
                  o(he, Be);
                },
                $$slots: { default: !0 }
              });
              var de = u(Z, 2), Ce = i(de);
              {
                var be = (he) => {
                  var Se = Et();
                  E(() => ie(Se, `The operation exceeded the ${l() / 1e3}s timeout limit.`)), o(he, Se);
                }, ce = (he) => {
                  var Se = Ae(), Be = _e(Se);
                  {
                    var Re = (Me) => {
                      var xe = Et("Check your internet connection and try again.");
                      o(Me, xe);
                    }, Ne = (Me) => {
                      var xe = Et("If the problem persists, please contact support.");
                      o(Me, xe);
                    };
                    b(
                      Be,
                      (Me) => {
                        x(t(_)) === "network" ? Me(Re) : Me(Ne, !1);
                      },
                      !0
                    );
                  }
                  o(he, Se);
                };
                b(Ce, (he) => {
                  t(g) === "timeout" ? he(be) : he(ce, !1);
                });
              }
              E(
                (he) => {
                  L(z, 1, $(G), "svelte-1884ls5"), ie(W, t(g) === "timeout" ? "Operation Timeout" : "Request Failed"), ie(re, he);
                },
                [
                  () => t(_) ? B(t(_)) : "An error occurred while processing your request"
                ]
              ), rt(1, z, () => mt, () => n() ? { duration: 300 } : void 0), o(Y, z);
            };
            b(M, (Y) => {
              e.fallback ? Y(w) : Y(q, !1);
            });
          }
          o(C, k);
        }, D = (C) => {
          var k = Ae(), M = _e(k);
          {
            var w = (Y) => {
              var z = Ae(), p = _e(z);
              {
                var h = (oe) => {
                  var ue = Ae(), fe = _e(ue);
                  st(fe, () => e.children, () => ({ result: t(N) })), o(oe, ue);
                };
                b(p, (oe) => {
                  e.children && oe(h);
                });
              }
              o(Y, z);
            }, q = (Y) => {
              var z = Ae(), p = _e(z);
              {
                var h = (oe) => {
                  var ue = Ae(), fe = _e(ue);
                  st(fe, () => e.children), o(oe, ue);
                };
                b(p, (oe) => {
                  e.children && oe(h);
                });
              }
              o(Y, z);
            };
            b(
              M,
              (Y) => {
                t(g) === "success" ? Y(w) : Y(q, !1);
              },
              !0
            );
          }
          o(C, k);
        };
        b(
          U,
          (C) => {
            t(g) === "error" || t(g) === "timeout" ? C(K) : C(D, !1);
          },
          !0
        );
      }
      o(H, A);
    };
    b(O, (H) => {
      t(g) === "loading" ? H(I) : H(F, !1);
    });
  }
  o(r, j), Ze();
}
var uh = /* @__PURE__ */ v('<details class="mt-3 svelte-1q83gw3"><summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400 svelte-1q83gw3">Stack Trace</summary> <pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40 svelte-1q83gw3"> </pre></details>'), fh = /* @__PURE__ */ v('<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 svelte-1q83gw3"><p class="font-mono text-sm text-red-400 svelte-1q83gw3"> </p> <!></div>'), bh = /* @__PURE__ */ v('<div class="text-sm text-red-400/70 svelte-1q83gw3"> </div>'), gh = /* @__PURE__ */ v('<div class="space-y-4 svelte-1q83gw3"><div class="flex items-center gap-3 svelte-1q83gw3"><div class="flex-shrink-0 svelte-1q83gw3"><svg class="w-6 h-6 text-red-500 svelte-1q83gw3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1q83gw3"></path></svg></div> <div class="svelte-1q83gw3"><h3 class="text-lg font-semibold text-red-600 svelte-1q83gw3">Something went wrong</h3> <p class="text-sm text-red-500/80 svelte-1q83gw3">A component error occurred and was caught by the error boundary</p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1q83gw3"><!> <!> <!></div> <!></div>'), mh = /* @__PURE__ */ v('<div role="alert" aria-live="assertive"><!></div>');
const hh = {
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
function Hp(r, e) {
  Ke(e, !0), Je(r, hh);
  const a = s(e, "showDetails", 3, !1), n = s(e, "variant", 3, "glass"), l = s(e, "animate", 3, !0), d = s(e, "retryable", 3, !0), c = s(e, "class", 3, "");
  let g = /* @__PURE__ */ ke(!1), _ = /* @__PURE__ */ ke(null), N = /* @__PURE__ */ ke(null), m = /* @__PURE__ */ ke(0), P = /* @__PURE__ */ ke(!1);
  const R = 3;
  function T(A, U) {
    X(g, !0), X(_, A, !0), X(N, U, !0), e.onError?.(A, U), console.error("Component Error Boundary caught an error:", A), U && console.error("Error info:", U);
  }
  function y() {
    t(m) < R && (X(g, !1), X(_, null), X(N, null), Ta(m));
  }
  function f() {
    X(g, !1), X(_, null), X(N, null), X(m, 0), X(P, !1);
  }
  const Q = V("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[n()], c());
  kt(() => {
    const A = (K) => {
      T(new Error(`Unhandled promise rejection: ${K.reason}`)), K.preventDefault();
    }, U = (K) => {
      T(new Error(K.message), {
        filename: K.filename,
        lineno: K.lineno,
        colno: K.colno
      });
    };
    return window.addEventListener("unhandledrejection", A), window.addEventListener("error", U), () => {
      window.removeEventListener("unhandledrejection", A), window.removeEventListener("error", U);
    };
  });
  function x(A) {
    return `${A.name}: ${A.message}`;
  }
  function B(A) {
    return A.stack || "No stack trace available";
  }
  function j() {
    return t(m) === 0 ? "" : t(m) >= R ? `Maximum retry attempts reached (${R})` : `Retry attempt ${t(m)} of ${R}`;
  }
  var O = Ae(), I = _e(O);
  {
    var F = (A) => {
      var U = mh(), K = i(U);
      {
        var D = (k) => {
          var M = Ae(), w = _e(M);
          st(w, () => e.fallback, () => ({
            error: t(_),
            retry: y,
            reset: f,
            retryCount: t(m),
            maxRetries: R
          })), o(k, M);
        }, C = (k) => {
          var M = gh(), w = u(i(M), 2);
          {
            var q = (W) => {
              var le = fh(), re = i(le), S = i(re), te = u(re, 2);
              {
                var J = (Z) => {
                  var ee = uh(), se = u(i(ee), 2), ne = i(se);
                  E((de) => ie(ne, de), [() => B(t(_))]), o(Z, ee);
                };
                b(te, (Z) => {
                  a() && t(P) && Z(J);
                });
              }
              E((Z) => ie(S, Z), [() => x(t(_))]), o(W, le);
            };
            b(w, (W) => {
              t(_) && W(q);
            });
          }
          var Y = u(w, 2);
          {
            var z = (W) => {
              var le = bh(), re = i(le);
              E((S) => ie(re, S), [j]), o(W, le);
            };
            b(Y, (W) => {
              t(m) > 0 && W(z);
            });
          }
          var p = u(Y, 2), h = i(p);
          {
            var oe = (W) => {
              tr(W, {
                variant: "glass",
                size: "sm",
                onclick: y,
                class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                children: (le, re) => {
                  var S = Et("Try Again");
                  o(le, S);
                },
                $$slots: { default: !0 }
              });
            };
            b(h, (W) => {
              d() && t(m) < R && W(oe);
            });
          }
          var ue = u(h, 2);
          tr(ue, {
            variant: "glass",
            size: "sm",
            onclick: f,
            class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
            children: (W, le) => {
              var re = Et("Reset");
              o(W, re);
            },
            $$slots: { default: !0 }
          });
          var fe = u(ue, 2);
          {
            var ve = (W) => {
              tr(W, {
                variant: "glass",
                size: "sm",
                onclick: () => X(P, !t(P)),
                class: "bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30",
                children: (le, re) => {
                  var S = Et();
                  E(() => ie(S, `${t(P) ? "Hide" : "Show"} Details`)), o(le, S);
                },
                $$slots: { default: !0 }
              });
            };
            b(fe, (W) => {
              a() && W(ve);
            });
          }
          var ae = u(p, 2);
          b(ae, (W) => {
          }), o(k, M);
        };
        b(K, (k) => {
          e.fallback ? k(D) : k(C, !1);
        });
      }
      E(() => L(U, 1, $(Q), "svelte-1q83gw3")), rt(1, U, () => Ct, () => l() ? { duration: 300, blur: "sm" } : void 0), o(A, U);
    }, H = (A) => {
      var U = Ae(), K = _e(U);
      {
        var D = (C) => {
          var k = Ae(), M = _e(k);
          st(M, () => e.children), o(C, k);
        };
        b(K, (C) => {
          e.children && C(D);
        });
      }
      o(A, U);
    };
    b(I, (A) => {
      t(g) ? A(F) : A(H, !1);
    });
  }
  o(r, O), Ze();
}
function ph(r, e, a) {
  X(e, !0), a.onDismiss?.();
}
var xh = /* @__PURE__ */ v('<li class="text-sm text-red-500"> </li>'), wh = /* @__PURE__ */ v('<li class="flex items-start gap-2 svelte-12vbusp"><div class="flex-shrink-0 mt-1"><svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg></div> <div class="min-w-0"><span class="text-sm font-medium text-red-600"> </span> <ul class="mt-1 space-y-1"></ul></div></li>'), _h = /* @__PURE__ */ v('<button class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors svelte-12vbusp" aria-label="Dismiss errors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), yh = /* @__PURE__ */ v('<div role="alert" aria-live="polite"><div class="flex items-start gap-3"><div class="flex-shrink-0 mt-0.5"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-semibold text-red-600 mb-2"> </h3> <ul class="space-y-2 svelte-12vbusp"></ul></div> <!></div></div>'), kh = /* @__PURE__ */ v('<p class="text-sm text-red-500 flex items-center gap-1 svelte-12vbusp"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg> </p>'), Ch = /* @__PURE__ */ v('<div class="mt-1"></div>'), Sh = /* @__PURE__ */ v("<!> <!> <!>", 1);
const Eh = {
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
function Vp(r, e) {
  Ke(e, !0), Je(r, Eh);
  const a = s(e, "errors", 19, () => []), n = s(e, "showSummary", 3, !0), l = s(e, "variant", 3, "glass"), d = s(e, "animate", 3, !0), c = s(e, "dismissible", 3, !1), g = s(e, "class", 3, "");
  let _ = /* @__PURE__ */ ke(!1);
  const N = /* @__PURE__ */ Ee(() => a().length > 0 && !t(_)), m = /* @__PURE__ */ Ee(() => a().reduce(
    (I, F) => (I[F.field] || (I[F.field] = []), I[F.field].push(F), I),
    {}
  )), R = V("rounded-brand p-4 mb-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[l()], g());
  function T(I) {
    return I.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^\w/, (F) => F.toUpperCase()).trim();
  }
  function y(I) {
    switch (I) {
      case "required":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 14.5c-.77.833.192 2.5 1.732 2.5z"></path>';
      case "invalid":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
      case "length":
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
    }
  }
  var f = Sh(), G = _e(f);
  {
    var Q = (I) => {
      var F = yh(), H = i(F), A = u(i(H), 2), U = i(A), K = i(U), D = u(U, 2);
      Ye(D, 21, () => Object.entries(t(m)), ut, (M, w) => {
        var q = /* @__PURE__ */ Ee(() => Zr(t(w), 2));
        let Y = () => t(q)[0], z = () => t(q)[1];
        var p = wh(), h = i(p), oe = i(h), ue = i(oe);
        xr(ue, () => y(z()[0]?.code), !0);
        var fe = u(h, 2), ve = i(fe), ae = i(ve), W = u(ve, 2);
        Ye(W, 21, z, ut, (le, re) => {
          var S = xh(), te = i(S);
          E(() => ie(te, t(re).message)), o(le, S);
        }), E((le) => ie(ae, `${le ?? ""}:`), [() => T(Y())]), o(M, p);
      });
      var C = u(A, 2);
      {
        var k = (M) => {
          var w = _h();
          w.__click = [ph, _, e], o(M, w);
        };
        b(C, (M) => {
          c() && M(k);
        });
      }
      E(() => {
        L(F, 1, $(R), "svelte-12vbusp"), ie(K, `Please correct the following ${a().length === 1 ? "error" : "errors"}:`);
      }), rt(1, F, () => mt, () => d() ? { duration: 300, direction: "down" } : void 0), o(I, F);
    };
    b(G, (I) => {
      t(N) && n() && I(Q);
    });
  }
  var x = u(G, 2);
  {
    var B = (I) => {
      var F = Ae(), H = _e(F);
      st(H, () => e.children, () => ({ errors: t(m), hasErrors: t(N) })), o(I, F);
    };
    b(x, (I) => {
      e.children && I(B);
    });
  }
  var j = u(x, 2);
  {
    var O = (I) => {
      var F = Ae(), H = _e(F);
      Ye(H, 17, () => Object.entries(t(m)), ut, (A, U) => {
        var K = /* @__PURE__ */ Ee(() => Zr(t(U), 2));
        let D = () => t(K)[0], C = () => t(K)[1];
        var k = Ch();
        Ye(k, 21, C, ut, (M, w) => {
          var q = kh(), Y = i(q), z = i(Y);
          xr(z, () => y(t(w).code), !0);
          var p = u(Y);
          E(() => ie(p, ` ${t(w).message ?? ""}`)), rt(1, q, () => mt, () => d() ? { duration: 200, direction: "up", distance: 5 } : void 0), o(M, q);
        }), E(() => ye(k, "id", `${D() ?? ""}-errors`)), o(A, k);
      }), o(I, F);
    };
    b(j, (I) => {
      t(N) && !n() && I(O);
    });
  }
  o(r, f), Ze();
}
bt(["click"]);
const Yn = async (r, e, a) => {
  try {
    await navigator.clipboard.writeText(e()), X(a, !0), setTimeout(() => X(a, !1), 2e3);
  } catch (n) {
    console.error("Failed to copy:", n);
  }
};
var Th = /* @__PURE__ */ nr('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Mh = /* @__PURE__ */ nr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), Ah = /* @__PURE__ */ v('<button class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"><!></button>'), zh = /* @__PURE__ */ v('<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg"><div class="text-sm font-medium text-white/80"> </div> <!></div>'), Ih = /* @__PURE__ */ nr('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Ph = /* @__PURE__ */ nr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), Lh = /* @__PURE__ */ v('<button class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"><!></button>'), jh = /* @__PURE__ */ v('<div class="relative group"><!> <div><!> <pre class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed svelte-au3hj8"><code><!></code></pre></div></div>');
const Dh = {
  hash: "svelte-au3hj8",
  code: `pre.svelte-au3hj8 {margin:0;-moz-tab-size:2;-o-tab-size:2;tab-size:2;}code.svelte-au3hj8 {font-family:'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;}

	/* Line numbers (optional) */pre.line-numbers {counter-reset:line;}pre.line-numbers code {counter-increment:line;}pre.line-numbers code::before {content:counter(line);display:inline-block;width:3em;padding-right:1em;margin-right:1em;color:rgba(255, 255, 255, 0.3);border-right:1px solid rgba(255, 255, 255, 0.1);text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;}`
};
function Gp(r, e) {
  Ke(e, !0), Je(r, Dh);
  let a = s(e, "code", 3, ""), n = s(e, "language", 3, "svelte"), l = s(e, "showCopy", 3, !0), d = s(e, "title", 3, ""), c = /* @__PURE__ */ ke(!1), g = /* @__PURE__ */ ke(void 0);
  const _ = (A, U) => {
    if (!A) return "";
    switch (U) {
      case "svelte":
      case "html":
        return m(A);
      case "css":
        return P(A);
      case "javascript":
      case "js":
        return R(A);
      case "typescript":
      case "ts":
        return T(A);
      case "bash":
      case "shell":
        return y(A);
      default:
        return N(A);
    }
  }, N = (A) => A.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), m = (A) => A.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>').replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>').replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=').replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>'), P = (A) => A.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:').replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;').replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), R = (A) => A.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-green-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>').replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>').replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), T = (A) => R(A).replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>'), y = (A) => A.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ').replace(/^>\s*/gm, '<span class="text-blue-400">></span> ').replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>').replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>'), f = /* @__PURE__ */ Ee(() => () => _(a(), n()));
  kt(() => {
    t(g) && a().split(`
`).length > 1 && (t(g).style.counterReset = "line");
  });
  var G = jh(), Q = i(G);
  {
    var x = (A) => {
      var U = zh(), K = i(U), D = i(K), C = u(K, 2);
      {
        var k = (M) => {
          var w = Ah();
          w.__click = [Yn, a, c];
          var q = i(w);
          {
            var Y = (p) => {
              var h = Th();
              o(p, h);
            }, z = (p) => {
              var h = Mh();
              o(p, h);
            };
            b(q, (p) => {
              t(c) ? p(Y) : p(z, !1);
            });
          }
          E(() => ye(w, "title", t(c) ? "Copied!" : "Copy code")), o(M, w);
        };
        b(C, (M) => {
          l() && M(k);
        });
      }
      E(() => ie(D, d())), o(A, U);
    };
    b(Q, (A) => {
      d() && A(x);
    });
  }
  var B = u(Q, 2), j = i(B);
  {
    var O = (A) => {
      var U = Lh();
      U.__click = [Yn, a, c];
      var K = i(U);
      {
        var D = (k) => {
          var M = Ih();
          o(k, M);
        }, C = (k) => {
          var M = Ph();
          o(k, M);
        };
        b(K, (k) => {
          t(c) ? k(D) : k(C, !1);
        });
      }
      E(() => ye(U, "title", t(c) ? "Copied!" : "Copy code")), o(A, U);
    };
    b(j, (A) => {
      l() && !d() && A(O);
    });
  }
  var I = u(j, 2), F = i(I), H = i(F);
  xr(H, () => t(f)), at(I, (A) => X(g, A), () => t(g)), E(() => {
    L(B, 1, `relative bg-black/30 ${d() ? "rounded-b-lg" : "rounded-lg"} border border-white/10 overflow-hidden`), L(F, 1, `language-${n() ?? ""}`, "svelte-au3hj8");
  }), o(r, G), Ze();
}
bt(["click"]);
function Rh(r, e, a) {
  e(!e()), a("toggle", { collapsed: e() });
}
var Nh = (
  // Handle expansion of items with children
  // Set active item
  // Execute custom click handler
  // Close sidebar on mobile when item is selected
  (r, e) => (r.key === "Enter" || r.key === " ") && e()
), Oh = /* @__PURE__ */ v('<div role="button" aria-label="Close sidebar overlay" tabindex="0"></div>'), qh = /* @__PURE__ */ v('<h2 class="text-lg font-semibold truncate">Menu</h2>'), Bh = /* @__PURE__ */ v("<button><!></button>"), Fh = /* @__PURE__ */ v('<div class="flex items-center justify-between p-4 border-b border-white/10"><!> <!></div>'), Hh = (r, e, a) => e(a()), Vh = /* @__PURE__ */ v('<div class="w-5 h-5 flex-shrink-0"><div class="w-full h-full bg-current opacity-70 rounded"></div></div>'), Gh = /* @__PURE__ */ v('<span class="inline-block w-4 h-4 rotate-90 border-r-2 border-b-2 border-current" style="transform: rotate(45deg);"></span>'), Uh = /* @__PURE__ */ v('<div class="w-5 h-5 flex-shrink-0"><!></div>'), Yh = /* @__PURE__ */ v("<span> </span>"), Wh = /* @__PURE__ */ v('<span class="flex-1 truncate"> </span> <!>', 1), Xh = /* @__PURE__ */ v("<li><button><!> <!></button></li>"), Kh = /* @__PURE__ */ v('<div class="p-4 border-t border-white/10"><!></div>'), Zh = /* @__PURE__ */ v('<!> <aside><!> <nav class="flex-1 overflow-y-auto p-2 svelte-tk90u0"><ul class="space-y-1"></ul></nav> <!></aside>', 1);
const Qh = {
  hash: "svelte-tk90u0",
  code: `
	/* Custom scrollbar for navigation */nav.svelte-tk90u0 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}nav.svelte-tk90u0::-webkit-scrollbar {width:6px;}nav.svelte-tk90u0::-webkit-scrollbar-track {background:transparent;}nav.svelte-tk90u0::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}nav.svelte-tk90u0::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Smooth transitions */aside.svelte-tk90u0 {will-change:width, transform;}

	/* Focus styles */button.svelte-tk90u0:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}`
};
function Up(r, e) {
  Ke(e, !0), Je(r, Qh);
  let a = s(e, "items", 19, () => []), n = s(e, "width", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "left"), c = s(e, "collapsible", 3, !0), g = s(e, "collapsed", 15, !1), _ = s(e, "overlay", 3, !1), N = s(e, "persistent", 3, !0), m = s(e, "showToggle", 3, !0), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  const T = zt();
  let y = /* @__PURE__ */ ke(null), f = /* @__PURE__ */ ke(lt(/* @__PURE__ */ new Set()));
  const G = {
    sm: g() ? "w-16" : "w-48",
    md: g() ? "w-16" : "w-64",
    lg: g() ? "w-16" : "w-72",
    xl: g() ? "w-16" : "w-80"
  }, x = {
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
  function B(Y) {
    Y.disabled || (Y.children?.length && (t(f).has(Y.id) ? t(f).delete(Y.id) : t(f).add(Y.id), X(f, new Set(t(f)), !0)), X(y, Y.id, !0), Y.onclick && Y.onclick(), T("select", { item: Y }), _() && !N() && g(!0));
  }
  function j() {
    _() && !N() && (g(!0), T("close"));
  }
  function O(Y, z = 0) {
    const p = t(f).has(Y.id), h = t(y) === Y.id || Y.active, oe = Y.children?.length;
    return {
      item: Y,
      level: z,
      isExpanded: p,
      isActive: h,
      hasChildren: oe,
      paddingLeft: `${z * 1 + 1}rem`
    };
  }
  function I(Y, z = 0) {
    const p = [];
    for (const h of Y) {
      const oe = O(h, z);
      p.push(oe), oe.hasChildren && oe.isExpanded && !g() && p.push(...I(h.children, z + 1));
    }
    return p;
  }
  const F = /* @__PURE__ */ Ee(() => () => I(a()));
  var H = Zh(), A = _e(H);
  {
    var U = (Y) => {
      var z = Oh();
      z.__click = j, z.__keydown = [Nh, j], E((p) => L(z, 1, p), [
        () => $(V("fixed inset-0 z-40", x.overlay))
      ]), o(Y, z);
    };
    b(A, (Y) => {
      _() && !g() && Y(U);
    });
  }
  var K = u(A, 2);
  Qe(
    K,
    (Y) => ({ class: Y, ...R }),
    [
      () => V("flex flex-col h-full border-r transition-all duration-300 ease-in-out", G[n()], x.sidebar, d() === "right" && "border-r-0 border-l", _() && "fixed top-0 z-50", _() && d() === "left" && "left-0", _() && d() === "right" && "right-0", _() && g() && "-translate-x-full", _() && d() === "right" && g() && "translate-x-full", P())
    ],
    void 0,
    "svelte-tk90u0"
  );
  var D = i(K);
  {
    var C = (Y) => {
      var z = Fh(), p = i(z);
      {
        var h = (fe) => {
          var ve = Ae(), ae = _e(ve);
          {
            var W = (re) => {
              var S = Ae(), te = _e(S);
              st(te, () => e.children.header), o(re, S);
            }, le = (re) => {
              var S = qh();
              o(re, S);
            };
            b(ae, (re) => {
              e.children?.header ? re(W) : re(le, !1);
            });
          }
          o(fe, ve);
        };
        b(p, (fe) => {
          g() || fe(h);
        });
      }
      var oe = u(p, 2);
      {
        var ue = (fe) => {
          var ve = Bh();
          ve.__click = [Rh, g, T];
          var ae = i(ve);
          {
            var W = (re) => {
              var S = Ae(), te = _e(S);
              {
                var J = (ee) => {
                  Or(ee, { size: 16 });
                }, Z = (ee) => {
                  ca(ee, { size: 16 });
                };
                b(te, (ee) => {
                  d() === "left" ? ee(J) : ee(Z, !1);
                });
              }
              o(re, S);
            }, le = (re) => {
              var S = Ae(), te = _e(S);
              {
                var J = (ee) => {
                  ca(ee, { size: 16 });
                }, Z = (ee) => {
                  Or(ee, { size: 16 });
                };
                b(
                  te,
                  (ee) => {
                    d() === "left" ? ee(J) : ee(Z, !1);
                  },
                  !0
                );
              }
              o(re, S);
            };
            b(ae, (re) => {
              g() ? re(W) : re(le, !1);
            });
          }
          E(
            (re) => {
              L(ve, 1, re, "svelte-tk90u0"), ye(ve, "title", g() ? "Expand sidebar" : "Collapse sidebar");
            },
            [
              () => $(V("p-2 rounded-lg border transition-colors", x.toggle, g() && "mx-auto"))
            ]
          ), o(fe, ve);
        };
        b(oe, (fe) => {
          c() && fe(ue);
        });
      }
      o(Y, z);
    };
    b(D, (Y) => {
      m() && Y(C);
    });
  }
  var k = u(D, 2), M = i(k);
  Ye(M, 21, () => t(F), ut, (Y, z) => {
    let p = () => t(z).item, h = () => t(z).level, oe = () => t(z).isExpanded, ue = () => t(z).isActive, fe = () => t(z).hasChildren, ve = () => t(z).paddingLeft;
    var ae = Xh(), W = i(ae);
    W.__click = [Hh, B, p];
    var le = i(W);
    {
      var re = (Z) => {
        var ee = Vh();
        o(Z, ee);
      }, S = (Z) => {
        var ee = Ae(), se = _e(ee);
        {
          var ne = (de) => {
            var Ce = Uh(), be = i(Ce);
            {
              var ce = (Se) => {
                var Be = Gh();
                o(Se, Be);
              }, he = (Se) => {
                Or(Se, { size: 16 });
              };
              b(be, (Se) => {
                oe() ? Se(ce) : Se(he, !1);
              });
            }
            o(de, Ce);
          };
          b(
            se,
            (de) => {
              fe() && de(ne);
            },
            !0
          );
        }
        o(Z, ee);
      };
      b(le, (Z) => {
        p().icon ? Z(re) : Z(S, !1);
      });
    }
    var te = u(le, 2);
    {
      var J = (Z) => {
        var ee = Wh(), se = _e(ee), ne = i(se), de = u(se, 2);
        {
          var Ce = (be) => {
            var ce = Yh(), he = i(ce);
            E(
              (Se) => {
                L(ce, 1, Se), ie(he, p().badge);
              },
              [
                () => $(V("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", x.badge))
              ]
            ), o(be, ce);
          };
          b(de, (be) => {
            p().badge && be(Ce);
          });
        }
        E(() => ie(ne, p().label)), o(Z, ee);
      };
      b(te, (Z) => {
        g() || Z(J);
      });
    }
    E(
      (Z) => {
        L(W, 1, Z, "svelte-tk90u0"), pt(W, !g() && h() > 0 ? `padding-left: ${ve()}` : void 0), W.disabled = p().disabled, ye(W, "title", g() ? p().label : void 0);
      },
      [
        () => $(V("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150", x.item, ue() && x.itemActive, p().disabled && x.itemDisabled, g() && "justify-center px-2"))
      ]
    ), o(Y, ae);
  });
  var w = u(k, 2);
  {
    var q = (Y) => {
      var z = Kh(), p = i(z);
      st(p, () => e.children.footer, () => ({ collapsed: g() })), o(Y, z);
    };
    b(w, (Y) => {
      e.children?.footer && Y(q);
    });
  }
  De(K, (Y, z) => Ct?.(Y, z), () => ({ intensity: "medium" })), o(r, H), Ze();
}
bt(["click", "keydown"]);
function Jh(r, e, a, n, l, d, c) {
  if (!e()) return;
  const g = r.touches[0];
  X(a, g.clientX, !0), X(n, g.clientY, !0), X(l, !0), t(d) && c();
}
function $h(r, e, a) {
  !e() || !t(a) || r.preventDefault();
}
function e1(r, e, a, n, l, d, c, g, _) {
  if (!e() || !t(a)) return;
  const N = r.changedTouches[0], m = N.clientX - t(n), P = N.clientY - t(l);
  Math.abs(m) > Math.abs(P) && Math.abs(m) > 50 && (m > 0 ? d() : c()), X(a, !1), t(g) && _();
}
var t1 = /* @__PURE__ */ v('<img class="w-full h-full object-cover svelte-1gc8xej" loading="lazy"/>'), r1 = /* @__PURE__ */ v('<h3 class="text-lg font-semibold text-white mb-1 svelte-1gc8xej"> </h3>'), a1 = /* @__PURE__ */ v('<p class="text-sm text-white/80 svelte-1gc8xej"> </p>'), n1 = /* @__PURE__ */ v('<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 svelte-1gc8xej"><!> <!></div>'), o1 = /* @__PURE__ */ v("<!> <!>", 1), i1 = /* @__PURE__ */ v('<div class="w-full h-full flex flex-col svelte-1gc8xej"><!></div>'), l1 = /* @__PURE__ */ v('<div class="flex-shrink-0 h-full relative svelte-1gc8xej"><!></div>'), s1 = /* @__PURE__ */ v("<div><div></div></div>"), d1 = /* @__PURE__ */ v("<button><!></button>"), c1 = /* @__PURE__ */ v('<button title="Previous slide" aria-label="Previous slide"><!></button> <button title="Next slide" aria-label="Next slide"><!></button> <!>', 1), v1 = /* @__PURE__ */ v("<button></button>"), u1 = /* @__PURE__ */ v('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 svelte-1gc8xej"></div>'), f1 = /* @__PURE__ */ v('<div><div class="relative w-full h-full overflow-hidden svelte-1gc8xej"><div></div></div> <!> <!> <!></div>');
const b1 = {
  hash: "svelte-1gc8xej",
  code: `
	/* Smooth drag feedback */.dragging.svelte-1gc8xej {cursor:grabbing;-webkit-user-select:none;-moz-user-select:none;user-select:none;}

	/* Focus styles */button.svelte-1gc8xej:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

	/* Carousel focus styles */[role='region'].svelte-1gc8xej:focus {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

	/* Prevent text selection during touch */.touch-enabled.svelte-1gc8xej {user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}

	/* Animation performance */
	@media (prefers-reduced-motion: reduce) {.svelte-1gc8xej {transition:none !important;
			animation: none !important;}
	}`
};
function Yp(r, e) {
  Ke(e, !0), Je(r, b1);
  let a = s(e, "currentIndex", 15, 0), n = s(e, "autoPlay", 3, !1), l = s(e, "autoPlayInterval", 3, 5e3), d = s(e, "showControls", 3, !0), c = s(e, "showDots", 3, !0), g = s(e, "showProgress", 3, !1), _ = s(e, "loop", 3, !0), N = s(e, "variant", 3, "glass"), m = s(e, "size", 3, "md"), P = s(e, "aspectRatio", 3, "16:9");
  s(e, "transition", 3, "slide");
  let R = s(e, "itemsPerView", 3, 1), T = s(e, "gap", 3, "md"), y = s(e, "touchEnabled", 3, !0), f = s(e, "class", 3, ""), G = /* @__PURE__ */ vt(e, [
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
  const Q = zt();
  let x, B, j = /* @__PURE__ */ ke(lt(n())), O = null, I = /* @__PURE__ */ ke(0), F = /* @__PURE__ */ ke(0), H = /* @__PURE__ */ ke(!1);
  const A = {
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
  }, U = {
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
  }, K = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]"
  }, D = A[m()], C = U[N()], k = /* @__PURE__ */ Ee(() => () => e.items.length), M = /* @__PURE__ */ Ee(() => () => Math.max(0, t(k)() - R())), w = /* @__PURE__ */ Ee(() => () => _() || a() > 0), q = /* @__PURE__ */ Ee(() => () => _() || a() < t(M)()), Y = /* @__PURE__ */ Ee(() => () => `-${a() * 100 / R()}%`), z = /* @__PURE__ */ Ee(() => () => t(k)() <= 1 ? 100 : (a() + 1) / t(k)() * 100);
  function p(ne) {
    ne < 0 ? a(_() ? t(M)() : 0) : ne > t(M)() ? a(_() ? 0 : t(M)()) : a(ne), Q("change", { index: a(), item: e.items[a()] });
  }
  function h() {
    t(w) && p(a() - 1);
  }
  function oe() {
    t(q) && p(a() + 1);
  }
  function ue() {
    X(j, !t(j)), t(j) ? fe() : ve(), Q("autoplay", { isPlaying: t(j) });
  }
  function fe() {
    !t(j) || t(k)() <= 1 || (ve(), O = setInterval(
      () => {
        if (a() >= t(M)() && !_()) {
          ve();
          return;
        }
        oe();
      },
      l()
    ));
  }
  function ve() {
    O && (clearInterval(O), O = null);
  }
  function ae(ne) {
    switch (ne.key) {
      case "ArrowLeft":
        ne.preventDefault(), h();
        break;
      case "ArrowRight":
        ne.preventDefault(), oe();
        break;
      case " ":
        ne.preventDefault(), ue();
        break;
      case "Home":
        ne.preventDefault(), p(0);
        break;
      case "End":
        ne.preventDefault(), p(t(M));
        break;
    }
  }
  kt(() => (t(j) && fe(), () => {
    ve();
  })), wt(() => {
    t(j) ? fe() : ve();
  });
  var W = f1();
  Qe(
    W,
    (ne) => ({
      class: ne,
      onkeydown: ae,
      role: "region",
      "aria-label": "Carousel",
      "aria-live": "polite",
      ...G
    }),
    [
      () => V("relative rounded-lg border overflow-hidden", K[P()], C.container, D.container, f())
    ],
    void 0,
    "svelte-1gc8xej"
  );
  var le = i(W);
  le.__touchstart = [
    Jh,
    y,
    I,
    F,
    H,
    j,
    ve
  ], le.__touchmove = [$h, y, H], le.__touchend = [
    e1,
    y,
    H,
    I,
    F,
    h,
    oe,
    j,
    fe
  ];
  var re = i(le);
  Ye(re, 23, () => e.items, (ne) => ne.id, (ne, de, Ce) => {
    var be = l1(), ce = i(be);
    {
      var he = (Se) => {
        var Be = i1(), Re = i(Be);
        {
          var Ne = (xe) => {
            var Pe = Ae(), Oe = _e(Pe);
            st(Oe, () => e.children.item, () => ({ item: t(de), index: t(Ce) })), o(xe, Pe);
          }, Me = (xe) => {
            var Pe = o1(), Oe = _e(Pe);
            {
              var me = (ge) => {
                var pe = t1();
                E(() => {
                  ye(pe, "src", t(de).image), ye(pe, "alt", t(de).title || `Slide ${t(Ce) + 1}`);
                }), o(ge, pe);
              };
              b(Oe, (ge) => {
                t(de).image && ge(me);
              });
            }
            var we = u(Oe, 2);
            {
              var ze = (ge) => {
                var pe = n1(), je = i(pe);
                {
                  var Te = (Ve) => {
                    var Ge = r1(), Xe = i(Ge);
                    E(() => ie(Xe, t(de).title)), o(Ve, Ge);
                  };
                  b(je, (Ve) => {
                    t(de).title && Ve(Te);
                  });
                }
                var qe = u(je, 2);
                {
                  var Fe = (Ve) => {
                    var Ge = a1(), Xe = i(Ge);
                    E(() => ie(Xe, t(de).description)), o(Ve, Ge);
                  };
                  b(qe, (Ve) => {
                    t(de).description && Ve(Fe);
                  });
                }
                o(ge, pe);
              };
              b(we, (ge) => {
                (t(de).title || t(de).description) && ge(ze);
              });
            }
            o(xe, Pe);
          };
          b(Re, (xe) => {
            e.children?.item ? xe(Ne) : xe(Me, !1);
          });
        }
        o(Se, Be);
      };
      b(ce, (Se) => {
        Se(he, !1);
      });
    }
    E((Se) => pt(be, Se), [() => `width: ${100 / t(k)()}%`]), o(ne, be);
  }), at(le, (ne) => B = ne, () => B);
  var S = u(le, 2);
  {
    var te = (ne) => {
      var de = s1(), Ce = i(de);
      E(
        (be, ce) => {
          L(de, 1, be, "svelte-1gc8xej"), L(Ce, 1, ce, "svelte-1gc8xej"), pt(Ce, `width: ${t(z)}%`);
        },
        [
          () => $(V("absolute bottom-0 left-0 right-0 h-1", C.progress)),
          () => $(V("h-full transition-all duration-300", C.progressFill))
        ]
      ), o(ne, de);
    };
    b(S, (ne) => {
      g() && ne(te);
    });
  }
  var J = u(S, 2);
  {
    var Z = (ne) => {
      var de = c1(), Ce = _e(de);
      Ce.__click = h;
      var be = i(Ce);
      ca(be, { size: 16 });
      var ce = u(Ce, 2);
      ce.__click = oe;
      var he = i(ce);
      Or(he, { size: 16 });
      var Se = u(ce, 2);
      {
        var Be = (Re) => {
          var Ne = d1();
          Ne.__click = ue;
          var Me = i(Ne);
          {
            var xe = (Oe) => {
              hi(Oe, { size: 16 });
            }, Pe = (Oe) => {
              pi(Oe, { size: 16 });
            };
            b(Me, (Oe) => {
              t(j) ? Oe(xe) : Oe(Pe, !1);
            });
          }
          E(
            (Oe) => {
              L(Ne, 1, Oe, "svelte-1gc8xej"), ye(Ne, "title", t(j) ? "Pause autoplay" : "Start autoplay"), ye(Ne, "aria-label", t(j) ? "Pause autoplay" : "Start autoplay");
            },
            [
              () => $(V("absolute top-2 right-2 rounded-full border transition-all duration-200", D.controls, C.controls))
            ]
          ), o(Re, Ne);
        };
        b(Se, (Re) => {
          n() && Re(Be);
        });
      }
      E(
        (Re, Ne) => {
          Ce.disabled = !t(w), L(Ce, 1, Re, "svelte-1gc8xej"), ce.disabled = !t(q), L(ce, 1, Ne, "svelte-1gc8xej");
        },
        [
          () => $(V("absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", D.controls, C.controls, !t(w) && "opacity-50 cursor-not-allowed")),
          () => $(V("absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", D.controls, C.controls, !t(q) && "opacity-50 cursor-not-allowed"))
        ]
      ), o(ne, de);
    };
    b(J, (ne) => {
      d() && t(k)() > 1 && ne(Z);
    });
  }
  var ee = u(J, 2);
  {
    var se = (ne) => {
      var de = u1();
      Ye(de, 21, () => e.items, ut, (Ce, be, ce) => {
        var he = v1();
        he.__click = () => p(ce), ye(he, "title", `Go to slide ${ce + 1}`), ye(he, "aria-label", `Go to slide ${ce + 1}`), E((Se) => L(he, 1, Se, "svelte-1gc8xej"), [
          () => $(V("rounded-full transition-all duration-200", D.dots, ce === a() ? C.dotsActive : C.dots))
        ]), o(Ce, he);
      }), o(ne, de);
    };
    b(ee, (ne) => {
      c() && t(k)() > 1 && ne(se);
    });
  }
  at(W, (ne) => x = ne, () => x), De(W, (ne, de) => Ct?.(ne, de), () => ({ intensity: "medium" })), E(
    (ne, de) => {
      L(re, 1, ne, "svelte-1gc8xej"), pt(re, de);
    },
    [
      () => $(V("flex h-full transition-transform duration-300 ease-in-out", D.gap[T()])),
      () => `transform: translateX(${t(Y)()}); width: ${t(k)() * 100 / R()}%`
    ]
  ), o(r, W), Ze();
}
bt(["touchstart", "touchmove", "touchend", "click"]);
function g1(r, e, a) {
  e() && a();
}
var m1 = /* @__PURE__ */ v('<div role="presentation"></div>'), h1 = /* @__PURE__ */ v('<h2 id="drawer-title" class="text-lg font-semibold svelte-10b9i23">Drawer</h2>'), p1 = /* @__PURE__ */ v('<button title="Close drawer" aria-label="Close drawer"><!></button>'), x1 = /* @__PURE__ */ v('<div class="p-4 border-t border-white/10 flex-shrink-0 svelte-10b9i23"><!></div>'), w1 = /* @__PURE__ */ v('<!> <div><div class="flex flex-col h-full focus:outline-none svelte-10b9i23" tabindex="-1"><div class="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 svelte-10b9i23"><div class="flex-1 svelte-10b9i23"><!></div> <!></div> <div class="flex-1 overflow-y-auto p-4 svelte-10b9i23"><!></div> <!></div></div>', 1);
const _1 = {
  hash: "svelte-10b9i23",
  code: `
	/* Custom scrollbar for content */.overflow-y-auto.svelte-10b9i23 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-10b9i23::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-10b9i23::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-10b9i23::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-10b9i23::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Ensure drawer content is properly contained */[role='dialog'].svelte-10b9i23 {will-change:transform;}

	/* Focus styles */button.svelte-10b9i23:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

	/* Animation performance */
	@media (prefers-reduced-motion: reduce) {.svelte-10b9i23 {transition:none !important;
			animation: none !important;}
	}`
};
function Wp(r, e) {
  Ke(e, !0), Je(r, _1);
  let a = s(e, "open", 15, !1), n = s(e, "position", 3, "right"), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "overlay", 3, !0), g = s(e, "closeOnOutsideClick", 3, !0), _ = s(e, "closeOnEscape", 3, !0), N = s(e, "showCloseButton", 3, !0), m = s(e, "persistent", 3, !1), P = s(e, "class", 3, ""), R = /* @__PURE__ */ vt(e, [
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
  const T = zt();
  let y, f;
  const G = {
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
  }, x = {
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
  }[d()], B = G[l()][n()], j = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "top-0 left-0 w-full border-b",
    bottom: "bottom-0 left-0 w-full border-t"
  }, O = () => {
    const D = { duration: 300 };
    switch (n()) {
      case "left":
        return { ...D, x: -400 };
      case "right":
        return { ...D, x: 400 };
      case "top":
        return { ...D, y: -400 };
      case "bottom":
        return { ...D, y: 400 };
      default:
        return { ...D, x: 400 };
    }
  };
  function I() {
    m() || (a(!1), T("close"));
  }
  function F(D) {
    D.key === "Escape" && _() && a() && I();
  }
  function H(D) {
    g() && a() && f && !f.contains(D.target) && I();
  }
  kt(() => (_() && document.addEventListener("keydown", F), g() && document.addEventListener("click", H), () => {
    document.removeEventListener("keydown", F), document.removeEventListener("click", H);
  })), wt(() => {
    if (a() && f) {
      const D = f.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      D.length > 0 ? D[0].focus() : f.focus();
    }
  });
  var A = Ae(), U = _e(A);
  {
    var K = (D) => {
      var C = w1(), k = _e(C);
      {
        var M = (S) => {
          var te = m1();
          te.__click = [g1, g, I], E((J) => L(te, 1, J, "svelte-10b9i23"), [
            () => $(V("fixed inset-0 z-40", x.overlay))
          ]), rt(3, te, () => ai, () => ({ duration: 200 })), o(S, te);
        };
        b(k, (S) => {
          c() && S(M);
        });
      }
      var w = u(k, 2);
      Qe(
        w,
        (S) => ({
          class: S,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          ...R
        }),
        [
          () => V("fixed z-50 flex flex-col", j[n()], B, x.drawer, P())
        ],
        void 0,
        "svelte-10b9i23"
      );
      var q = i(w), Y = i(q), z = i(Y), p = i(z);
      {
        var h = (S) => {
          var te = Ae(), J = _e(te);
          st(J, () => e.children.header), o(S, te);
        }, oe = (S) => {
          var te = h1();
          o(S, te);
        };
        b(p, (S) => {
          e.children?.header ? S(h) : S(oe, !1);
        });
      }
      var ue = u(z, 2);
      {
        var fe = (S) => {
          var te = p1();
          te.__click = I;
          var J = i(te);
          da(J, { size: 16 }), E((Z) => L(te, 1, Z, "svelte-10b9i23"), [
            () => $(V("p-2 rounded-lg border transition-colors ml-4", x.closeButton))
          ]), o(S, te);
        };
        b(ue, (S) => {
          N() && !m() && S(fe);
        });
      }
      var ve = u(Y, 2), ae = i(ve);
      {
        var W = (S) => {
          var te = Ae(), J = _e(te);
          st(J, () => e.children, () => ({ open: a(), close: I })), o(S, te);
        };
        b(ae, (S) => {
          e.children && S(W);
        });
      }
      var le = u(ve, 2);
      {
        var re = (S) => {
          var te = x1(), J = i(te);
          st(J, () => e.children.footer, () => ({ open: a(), close: I })), o(S, te);
        };
        b(le, (S) => {
          e.children?.footer && S(re);
        });
      }
      at(q, (S) => f = S, () => f), at(w, (S) => y = S, () => y), De(w, (S, te) => Ct?.(S, te), () => ({ intensity: "medium" })), rt(3, w, () => ni, O), o(D, C);
    };
    b(U, (D) => {
      a() && D(K);
    });
  }
  o(r, A), Ze();
}
bt(["click"]);
var y1 = /* @__PURE__ */ v("<div></div>"), k1 = /* @__PURE__ */ v('<span class="text-white/80 text-xs font-mono svelte-1sn23fc"> </span>'), C1 = /* @__PURE__ */ v('<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-2"><span class="text-white text-xs font-medium mb-1 svelte-1sn23fc"> </span> <!></div>'), S1 = /* @__PURE__ */ v('<span class="font-mono text-sm text-white/60 svelte-1sn23fc"> </span>'), E1 = /* @__PURE__ */ v('<p class="text-sm text-white/60 mt-1"> </p>'), T1 = /* @__PURE__ */ v('<div class="flex-1"><div class="flex items-center justify-between"><span class="font-medium text-white svelte-1sn23fc"> </span> <!></div> <!></div>'), M1 = /* @__PURE__ */ v('<div class="absolute inset-0 bg-green-500/20 flex items-center justify-center"><span class="text-green-400 text-xs font-medium svelte-1sn23fc">Copied!</span></div>'), A1 = /* @__PURE__ */ v("<div><!> <!> <!></div>");
const z1 = {
  hash: "svelte-1sn23fc",
  code: `
	/* Ensure color swatches have proper contrast for accessibility */.group.svelte-1sn23fc:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

	/* Color transition animations */.group.svelte-1sn23fc {will-change:transform, box-shadow;}

	/* Responsive typography adjustments */
	@media (max-width: 640px) {.group.svelte-1sn23fc span:where(.svelte-1sn23fc) {font-size:0.75rem;}
	}`
};
function Wn(r, e) {
  Ke(e, !0), Je(r, z1);
  const a = s(e, "class", 3, ""), n = /* @__PURE__ */ vt(e, [
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
  }, g = (Q) => {
    (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), e.onColorClick(e.color));
  }, _ = e.animate ? {
    jellyHover: {
      enabled: e.interactive,
      duration: 200,
      scale: 1.05,
      borderRadius: "8px"
    },
    springPop: { duration: 150, delay: e.colorIndex * 20 }
  } : {};
  var N = A1();
  Qe(
    N,
    (Q, x) => ({
      class: Q,
      style: x,
      onclick: c,
      onkeydown: g,
      role: e.interactive ? "button" : void 0,
      tabindex: e.interactive ? 0 : -1,
      "aria-label": `Copy ${e.color.name} color ${e.color.hex}`,
      ...n
    }),
    [
      l,
      () => e.layout === "grid" ? d() : ""
    ],
    void 0,
    "svelte-1sn23fc"
  );
  var m = i(N);
  {
    var P = (Q) => {
      var x = y1();
      E((B) => pt(x, B), [d]), o(Q, x);
    };
    b(m, (Q) => {
      e.layout === "list" && Q(P);
    });
  }
  var R = u(m, 2);
  {
    var T = (Q) => {
      var x = C1(), B = i(x), j = i(B), O = u(B, 2);
      {
        var I = (F) => {
          var H = k1(), A = i(H);
          E(() => ie(A, e.color.hex)), o(F, H);
        };
        b(O, (F) => {
          e.showHex && F(I);
        });
      }
      E(() => ie(j, e.color.name)), o(Q, x);
    }, y = (Q) => {
      var x = T1(), B = i(x), j = i(B), O = i(j), I = u(j, 2);
      {
        var F = (U) => {
          var K = S1(), D = i(K);
          E(() => ie(D, e.color.hex)), o(U, K);
        };
        b(I, (U) => {
          e.showHex && U(F);
        });
      }
      var H = u(B, 2);
      {
        var A = (U) => {
          var K = E1(), D = i(K);
          E(() => ie(D, e.color.description)), o(U, K);
        };
        b(H, (U) => {
          e.color.description && U(A);
        });
      }
      E(() => ie(O, e.color.name)), o(Q, x);
    };
    b(R, (Q) => {
      e.layout === "grid" ? Q(T) : Q(y, !1);
    });
  }
  var f = u(R, 2);
  {
    var G = (Q) => {
      var x = M1();
      o(Q, x);
    };
    b(f, (Q) => {
      e.copiedColor === e.color.hex && Q(G);
    });
  }
  De(N, (Q, x) => It?.(Q, x), () => e.animate ? _.jellyHover : void 0), rt(1, N, () => Kt, () => e.animate ? _.springPop : void 0), o(r, N), Ze();
}
var I1 = /* @__PURE__ */ v('<div class="mb-6"><!></div>'), P1 = /* @__PURE__ */ v('<div class="space-y-3"><h3 class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"> </h3> <div></div></div>'), L1 = /* @__PURE__ */ v("<div></div>"), j1 = /* @__PURE__ */ v("<div><!> <!></div>");
function Xp(r, e) {
  Ke(e, !0);
  const a = s(e, "theme", 3, "both"), n = s(e, "layout", 3, "grid"), l = s(e, "interactive", 3, !0), d = s(e, "showHex", 3, !0), c = s(e, "showCategories", 3, !0), g = s(e, "animate", 3, !0), _ = s(e, "class", 3, ""), N = /* @__PURE__ */ vt(e, [
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
  ]), m = [
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
  ], T = (() => {
    switch (a()) {
      case "terminal":
        return m;
      case "bubbleTea":
        return P;
      case "both":
      default:
        return [...m, ...P];
    }
  })(), y = [...new Set(T.map((A) => A.category))];
  let f = /* @__PURE__ */ ke(null);
  const G = async (A) => {
    if (l())
      try {
        await navigator.clipboard.writeText(A), X(f, A, !0), setTimeout(
          () => {
            X(f, null);
          },
          2e3
        );
      } catch (U) {
        console.error("Failed to copy color to clipboard:", U);
      }
  }, Q = (A) => {
    G(A.hex), e.onColorSelect?.(A);
  }, x = () => n() === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "flex flex-col gap-2";
  var B = j1();
  Qe(B, (A) => ({ class: A, ...N }), [() => V("space-y-6", _())]);
  var j = i(B);
  {
    var O = (A) => {
      var U = I1(), K = i(U);
      st(K, () => e.children), o(A, U);
    };
    b(j, (A) => {
      e.children && A(O);
    });
  }
  var I = u(j, 2);
  {
    var F = (A) => {
      var U = Ae(), K = _e(U);
      Ye(K, 17, () => y, ut, (D, C) => {
        var k = P1(), M = i(k), w = i(M), q = u(M, 2);
        Ye(q, 21, () => T.filter((Y) => Y.category === t(C)), ut, (Y, z) => {
          {
            let p = /* @__PURE__ */ Ee(() => T.indexOf(t(z))), h = /* @__PURE__ */ Ee(() => m.includes(t(z)));
            Wn(Y, {
              get color() {
                return t(z);
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
                return t(p);
              },
              get isTerminal() {
                return t(h);
              },
              onColorClick: Q
            });
          }
        }), E(
          (Y) => {
            ie(w, t(C)), L(q, 1, Y);
          },
          [() => $(x())]
        ), o(D, k);
      }), o(A, U);
    }, H = (A) => {
      var U = L1();
      Ye(U, 21, () => T, ut, (K, D) => {
        {
          let C = /* @__PURE__ */ Ee(() => T.indexOf(t(D))), k = /* @__PURE__ */ Ee(() => m.includes(t(D)));
          Wn(K, {
            get color() {
              return t(D);
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
              return t(k);
            },
            onColorClick: Q
          });
        }
      }), E((K) => L(U, 1, K), [() => $(x())]), o(A, U);
    };
    b(I, (A) => {
      c() ? A(F) : A(H, !1);
    });
  }
  o(r, B), Ze();
}
var D1 = /* @__PURE__ */ v("<span><!></span>");
const R1 = {
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
function Kp(r, e) {
  Ke(e, !0), Je(r, R1);
  const a = s(e, "variant", 3, "bubbleTea"), n = s(e, "color", 3, "pink"), l = s(e, "intensity", 3, "normal"), d = s(e, "animate", 3, !0), c = s(e, "pulse", 3, !1), g = s(e, "class", 3, ""), _ = /* @__PURE__ */ vt(e, [
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
  ]), m = V((() => {
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
    const G = {
      pink: l() === "intense" ? "text-bubble-tea-glow-pink glow-bubble-tea-pink-intense" : "text-bubble-tea-glow-pink glow-bubble-tea-pink",
      purple: l() === "intense" ? "text-bubble-tea-glow-purple glow-bubble-tea-purple-intense" : "text-bubble-tea-glow-purple glow-bubble-tea-purple",
      blue: l() === "intense" ? "text-bubble-tea-glow-blue glow-bubble-tea-blue-intense" : "text-bubble-tea-glow-blue glow-bubble-tea-blue",
      cyan: l() === "intense" ? "text-bubble-tea-glow-cyan glow-bubble-tea-cyan-intense" : "text-bubble-tea-glow-cyan glow-bubble-tea-cyan",
      green: l() === "intense" ? "text-bubble-tea-glow-green glow-bubble-tea-green-intense" : "text-bubble-tea-glow-green glow-bubble-tea-green",
      yellow: l() === "intense" ? "text-bubble-tea-glow-yellow glow-bubble-tea-yellow-intense" : "text-bubble-tea-glow-yellow glow-bubble-tea-yellow",
      orange: l() === "intense" ? "text-bubble-tea-glow-orange glow-bubble-tea-orange-intense" : "text-bubble-tea-glow-orange glow-bubble-tea-orange",
      red: l() === "intense" ? "text-bubble-tea-glow-red glow-bubble-tea-red-intense" : "text-bubble-tea-glow-red glow-bubble-tea-red"
    };
    return n() === "matrix" ? V(f, G.pink) : V(f, G[n()]);
  })(), d() && "hover:scale-105", c() && "animate-pulse", g());
  var P = D1();
  Qe(P, () => ({ class: m, ..._ }), void 0, void 0, "svelte-1s7z1ns");
  var R = i(P);
  {
    var T = (f) => {
      var G = Ae(), Q = _e(G);
      st(Q, () => e.children), o(f, G);
    }, y = (f) => {
      var G = Ae(), Q = _e(G);
      {
        var x = (B) => {
          var j = Et();
          E(() => ie(j, e.text)), o(B, j);
        };
        b(
          Q,
          (B) => {
            e.text && B(x);
          },
          !0
        );
      }
      o(f, G);
    };
    b(R, (f) => {
      e.children ? f(T) : f(y, !1);
    });
  }
  o(r, P), Ze();
}
var N1 = /* @__PURE__ */ v("<span>•</span> <span> </span>", 1), O1 = /* @__PURE__ */ v('<div class="flex items-center gap-1 svelte-chof7v"><span> </span> <span> </span></div>'), q1 = /* @__PURE__ */ v("<div></div>"), B1 = /* @__PURE__ */ v("<div><!></div>"), F1 = /* @__PURE__ */ v('<div><div class="flex items-center gap-4 svelte-chof7v"><div class="flex items-center gap-2 svelte-chof7v"><span> </span> <!></div> <!></div> <div class="flex items-center gap-4 svelte-chof7v"><div class="hidden md:flex items-center gap-2 svelte-chof7v"><span> </span> <span>•</span> <span> </span></div> <div class="md:hidden svelte-chof7v"><span> </span></div> <!></div></div>');
const H1 = {
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
function Zp(r, e) {
  Ke(e, !0), Je(r, H1);
  const a = s(e, "status", 3, "Ready"), n = s(e, "encoding", 3, "UTF-8"), l = s(e, "position", 3, "1:1"), d = s(e, "lineNumber", 3, 1), c = s(e, "columnNumber", 3, 1), g = s(e, "fileType", 3, "TypeScript"), _ = s(e, "variant", 3, "bubbleTea"), N = s(e, "size", 3, "md"), m = s(e, "indicators", 19, () => []), P = s(e, "class", 3, ""), R = s(e, "autoLayout", 3, !0), T = /* @__PURE__ */ vt(e, [
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
  let y;
  kt(() => {
    if (R() && y) {
      const ae = () => {
        const le = y.offsetHeight;
        document.documentElement.style.setProperty("--status-bar-height", `${le}px`);
      };
      ae();
      const W = new ResizeObserver(ae);
      return W.observe(y), () => {
        W.disconnect(), document.documentElement.style.removeProperty("--status-bar-height");
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
  }, G = { sm: "px-3 py-1 text-xs", md: "px-4 py-2 text-sm" }, Q = (ae) => {
    switch (ae) {
      case "error":
        return _() === "bubbleTea" ? "text-bubble-tea-red" : "text-red-400";
      case "warning":
        return _() === "bubbleTea" ? "text-bubble-tea-yellow" : "text-yellow-400";
      case "success":
        return _() === "bubbleTea" ? "text-bubble-tea-green" : "text-green-400";
      default:
        return f[_()].text;
    }
  }, x = f[_()], B = V("fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm", _() === "bubbleTea" ? "rounded-t-bubble-tea" : "rounded-t-lg", _() === "bubbleTea" ? "status-bar-bubble-tea" : "", x.background, G[N()]), j = V(B, P());
  var O = F1();
  Qe(
    O,
    () => ({
      class: j,
      role: "status",
      "aria-live": "polite",
      ...T
    }),
    void 0,
    void 0,
    "svelte-chof7v"
  );
  var I = i(O), F = i(I), H = i(F), A = i(H), U = u(H, 2);
  {
    var K = (ae) => {
      var W = N1(), le = _e(W), re = u(le, 2), S = i(re);
      E(
        (te, J) => {
          L(le, 1, te, "svelte-chof7v"), L(re, 1, J, "svelte-chof7v"), ie(S, g());
        },
        [
          () => $(V("text-xs", x.accent)),
          () => $(V("text-xs", x.accent))
        ]
      ), o(ae, W);
    };
    b(U, (ae) => {
      g() && ae(K);
    });
  }
  var D = u(F, 2);
  {
    var C = (ae) => {
      var W = q1();
      Ye(W, 21, m, ut, (le, re) => {
        var S = O1(), te = i(S), J = i(te), Z = u(te, 2), ee = i(Z);
        E(
          (se, ne) => {
            L(te, 1, se, "svelte-chof7v"), ie(J, `${t(re).label ?? ""}:`), L(Z, 1, ne, "svelte-chof7v"), ie(ee, t(re).value);
          },
          [
            () => $(V("text-xs font-medium", Q(t(re).type))),
            () => $(V("text-xs", x.text))
          ]
        ), o(le, S);
      }), E((le) => L(W, 1, le, "svelte-chof7v"), [
        () => $(V("hidden sm:flex items-center gap-3 border-l pl-4", x.separator))
      ]), o(ae, W);
    };
    b(D, (ae) => {
      m().length > 0 && ae(C);
    });
  }
  var k = u(I, 2), M = i(k), w = i(M), q = i(w), Y = u(w, 2), z = u(Y, 2), p = i(z), h = u(M, 2), oe = i(h), ue = i(oe), fe = u(h, 2);
  {
    var ve = (ae) => {
      var W = B1(), le = i(W);
      st(le, () => e.children), E((re) => L(W, 1, re, "svelte-chof7v"), [() => $(V("border-l pl-4", x.separator))]), o(ae, W);
    };
    b(fe, (ae) => {
      e.children && ae(ve);
    });
  }
  at(O, (ae) => y = ae, () => y), E(
    (ae, W, le, re, S) => {
      L(H, 1, ae, "svelte-chof7v"), ie(A, a()), L(w, 1, W, "svelte-chof7v"), ie(q, `Line ${d() ?? ""}, Col ${c() ?? ""}`), L(Y, 1, le, "svelte-chof7v"), L(z, 1, re, "svelte-chof7v"), ie(p, n()), L(oe, 1, S, "svelte-chof7v"), ie(ue, l());
    },
    [
      () => $(V("font-medium", x.text)),
      () => $(V("text-xs", x.accent)),
      () => $(V("text-xs", x.accent)),
      () => $(V("text-xs", x.accent)),
      () => $(V("text-xs", x.accent))
    ]
  ), o(r, O), Ze();
}
export {
  Ip as AICommandSuggestions,
  K1 as Accordion,
  zp as AdvancedTerminal,
  Z1 as Alert,
  Fp as AsyncErrorBoundary,
  Q1 as Badge,
  Rp as BootSequence,
  kp as Breadcrumb,
  tr as Button,
  $1 as Card,
  Yp as Carousel,
  ep as Checkbox,
  Gp as CodeHighlight,
  Xp as ColorPalette,
  Pp as CommandBlock,
  Ep as DataGrid,
  Tp as DataTable,
  pp as DatePicker,
  Wp as Drawer,
  tp as Dropdown,
  Hp as ErrorBoundary,
  xp as FileUpload,
  Vp as FormErrorBoundary,
  Kp as GlowText,
  Cd as Input,
  Lp as LazyTerminalWindow,
  jp as LiquidTerminal,
  Mp as List,
  Np as MatrixRain,
  Cp as Menu,
  rp as MetricsCard,
  ap as Modal,
  np as MultiSelect,
  Sp as Navbar,
  op as Pagination,
  ip as Progress,
  lp as Radio,
  Op as RetroFuturisticText,
  qp as RetroText,
  sp as Select,
  dp as SelectAdvanced,
  Up as Sidebar,
  cp as Skeleton,
  vp as Slider,
  Zp as StatusBar,
  up as Switch,
  Ap as Table,
  fp as Tabs,
  Dp as TerminalOrbit,
  Bp as TerminalStartup,
  mm as TerminalWindow,
  bp as Textarea,
  gp as ThemeSelector,
  mp as Toast,
  hp as Tooltip,
  Ds as animations,
  ja as borderRadius,
  Le as brandColors,
  Rt as breathing,
  qs as bubbleTeaTheme,
  V as cn,
  yp as commonSchemas,
  Rs as componentSizes,
  wp as createValidationStore,
  _p as debounceValidation,
  Iu as getFormErrors,
  Ls as glassEffects,
  mt as glassFade,
  zu as isFormValid,
  It as jellyHover,
  Ct as liquidBlur,
  wa as liquidResponsive,
  ft as magneticHover,
  js as shadows,
  Ps as spacing,
  Kt as springPop,
  Os as terminalTheme,
  J1 as tokens,
  Is as typography,
  ri as validateField,
  Au as validateForm,
  Vt as validationRules,
  Ns as zIndex
};
