import { AlertCircle as wn, Info as si, XCircle as di, CheckCircle2 as ci, X as sa, Minus as Xn, Check as Wa, ChevronDown as tn, TrendingDown as vi, TrendingUp as ui, Activity as yn, ChevronLeft as da, ChevronRight as Rr, ChevronsLeft as fi, ChevronsRight as bi, Search as gi, Pause as mi, Play as hi } from "lucide-svelte";
import { onMount as wt, createEventDispatcher as Mt } from "svelte";
import { T as It } from "@threlte/core";
import { OrbitControls as pi, HTML as xi } from "@threlte/extras";
const _i = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(_i);
const _a = 1, wa = 2, Zn = 4, wi = 8, yi = 16, ki = 1, Ci = 4, Ei = 8, Si = 16, Ti = 1, Mi = 2, Ai = 4, zi = 1, Ii = 2, St = Symbol(), Pi = Symbol("filename"), Li = "http://www.w3.org/1999/xhtml", Di = "http://www.w3.org/2000/svg", ji = "@attach", Qn = typeof window < "u", kn = globalThis.process?.env?.NODE_ENV, Ye = kn && !kn.toLowerCase().startsWith("prod");
var ya = Array.isArray, Ri = Array.prototype.indexOf, Jn = Array.from, mr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, $n = Object.getOwnPropertyDescriptors, Ni = Object.prototype, Oi = Array.prototype, rn = Object.getPrototypeOf;
function qi(r) {
  return typeof r == "function";
}
const Nt = () => {
};
function Bi(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function Fi() {
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
const qt = 2, an = 4, nn = 8, Fr = 16, vr = 32, Hr = 64, eo = 128, Ht = 256, ca = 512, zt = 1024, Gt = 2048, ur = 4096, Zt = 8192, Mr = 16384, ka = 32768, Ar = 65536, va = 1 << 17, Hi = 1 << 18, on = 1 << 19, to = 1 << 20, ua = 1 << 21, Ca = 1 << 22, yr = 1 << 23, ir = Symbol("$state"), Vi = Symbol("legacy props"), Gi = Symbol(""), ro = Symbol("proxy path"), ln = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Ui() {
  if (Ye) {
    const r = new Error("await_outside_boundary\nCannot await outside a `<svelte:boundary>` with a `pending` snippet\nhttps://svelte.dev/e/await_outside_boundary");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Yi() {
  if (Ye) {
    const r = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Cn() {
  if (Ye) {
    const r = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Wi() {
  if (Ye) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Ki(r) {
  if (Ye) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xi() {
  if (Ye) {
    const r = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zi(r) {
  if (Ye) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qi() {
  if (Ye) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ji() {
  if (Ye) {
    const r = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
function $i(r) {
  if (Ye) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function el(r) {
  if (Ye) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function tl(r) {
  if (Ye) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function rl() {
  if (Ye) {
    const r = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function al() {
  if (Ye) {
    const r = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function nl() {
  if (Ye) {
    const r = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var ao = "font-weight: bold", no = "font-weight: normal";
function ol(r) {
  Ye ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${r}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, ao, no) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function il() {
  Ye ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", ao, no) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let ll = !1;
function oo(r) {
  return r === this.v;
}
function sn(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function io(r) {
  return !sn(r, this.v);
}
let sl = !1;
function lo(r) {
  let e = Error();
  const a = e.stack;
  if (!a) return null;
  const n = a.split(`
`), l = [`
`];
  for (let d = 0; d < n.length; d++) {
    const v = n[d];
    if (v !== "Error") {
      if (v.includes("validate_each_keys"))
        return null;
      v.includes("svelte/src/internal") || l.push(v);
    }
  }
  return l.length === 1 ? null : (mr(e, "stack", {
    value: l.join(`
`)
  }), mr(e, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${r}Error`
  }), /** @type {Error & { stack: string }} */
  e);
}
function br(r, e) {
  return r.label = e, so(r.v, e), r;
}
function so(r, e) {
  return r?.[ro]?.(e), r;
}
let Vt = null;
function fa(r) {
  Vt = r;
}
let ba = null;
function En(r) {
  ba = r;
}
let ea = null;
function Sn(r) {
  ea = r;
}
function Ke(r, e = !1, a) {
  Vt = {
    p: Vt,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  }, Ye && (Vt.function = a, ea = a);
}
function Xe(r) {
  var e = (
    /** @type {ComponentContext} */
    Vt
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      yo(n);
  }
  return r !== void 0 && (e.x = r), Vt = e.p, Ye && (ea = Vt?.function ?? null), r ?? /** @type {T} */
  {};
}
function co() {
  return !0;
}
const Ka = /* @__PURE__ */ new WeakMap();
function dl(r) {
  var e = it;
  if (e === null)
    return ct.f |= yr, r;
  if (Ye && r instanceof Error && !Ka.has(r) && Ka.set(r, cl(r, e)), (e.f & ka) === 0) {
    if ((e.f & eo) === 0)
      throw !e.parent && r instanceof Error && vo(r), r;
    e.b.error(r);
  } else
    dn(r, e);
}
function dn(r, e) {
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
function cl(r, e) {
  const a = Wr(r, "message");
  if (!(a && !a.configurable)) {
    for (var n = "	", l = `
${n}in ${e.fn?.name || "<unknown>"}`, d = e.ctx; d !== null; )
      l += `
${n}in ${d.function?.[Pi].split("/").pop()}`, d = d.p;
    return {
      message: r.message + `
${l}
`,
      stack: r.stack?.split(`
`).filter((v) => !v.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function vo(r) {
  const e = Ka.get(r);
  e && (mr(r, "message", {
    value: e.message
  }), mr(r, "stack", {
    value: e.stack
  }));
}
let ga = [];
function vl() {
  var r = ga;
  ga = [], Bi(r);
}
function ta(r) {
  ga.length === 0 && queueMicrotask(vl), ga.push(r);
}
function ul() {
  for (var r = (
    /** @type {Effect} */
    it.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && Ui(), r;
}
let kr = null;
function uo(r) {
  kr = r;
}
const fl = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ea(r) {
  var e = qt | Gt, a = ct !== null && (ct.f & qt) !== 0 ? (
    /** @type {Derived} */
    ct
  ) : null;
  return it === null || a !== null && (a.f & Ht) !== 0 ? e |= Ht : it.f |= on, {
    ctx: Vt,
    deps: null,
    effects: null,
    equals: oo,
    f: e,
    fn: r,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      St
    ),
    wv: 0,
    parent: a ?? it,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function bl(r, e) {
  let a = (
    /** @type {Effect | null} */
    it
  );
  a === null && Yi();
  var n = (
    /** @type {Boundary} */
    a.b
  ), l = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), d = Qr(
    /** @type {V} */
    St
  ), v = null, p = !ct;
  return zl(() => {
    Ye && (kr = it);
    try {
      var y = r();
    } catch (z) {
      y = Promise.reject(z);
    }
    Ye && (kr = null);
    var R = () => y;
    l = v?.then(R, R) ?? Promise.resolve(y), v = l;
    var h = (
      /** @type {Batch} */
      xt
    ), I = n.pending;
    p && (n.update_pending_count(1), I || h.increment());
    const L = (z, M = void 0) => {
      v = null, kr = null, I || h.activate(), M ? M !== ln && (d.f |= yr, Jr(d, M)) : ((d.f & yr) !== 0 && (d.f ^= yr), Jr(d, z)), p && (n.update_pending_count(-1), I || h.decrement()), mo();
    };
    if (l.then(L, (z) => L(null, z || "unknown")), h)
      return () => {
        queueMicrotask(() => h.neuter());
      };
  }), Ye && (d.f |= Ca), new Promise((y) => {
    function R(h) {
      function I() {
        h === l ? y(d) : R(l);
      }
      h.then(I, I);
    }
    R(l);
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
      Ut(
        /** @type {Effect} */
        e[a]
      );
  }
}
let qa = [];
function gl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & qt) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function cn(r) {
  var e, a = it;
  if (lr(gl(r)), Ye) {
    let n = Br;
    An(/* @__PURE__ */ new Set());
    try {
      qa.includes(r) && Wi(), qa.push(r), Xa(r), e = Qa(r);
    } finally {
      lr(a), An(n), qa.pop();
    }
  } else
    try {
      Xa(r), e = Qa(r);
    } finally {
      lr(a);
    }
  return e;
}
function bo(r) {
  var e = cn(r);
  if (r.equals(e) || (r.v = e, r.wv = Io()), !Pr)
    if (qr !== null)
      qr.set(r, r.v);
    else {
      var a = (gr || (r.f & Ht) !== 0) && r.deps !== null ? ur : zt;
      Lt(r, a);
    }
}
function go(r, e, a) {
  const n = Ea;
  if (e.length === 0) {
    a(r.map(n));
    return;
  }
  var l = xt, d = (
    /** @type {Effect} */
    it
  ), v = ml(), p = ul();
  Promise.all(e.map((y) => /* @__PURE__ */ bl(y))).then((y) => {
    l?.activate(), v();
    try {
      a([...r.map(n), ...y]);
    } catch (R) {
      (d.f & Mr) === 0 && dn(R, d);
    }
    l?.deactivate(), mo();
  }).catch((y) => {
    p.error(y);
  });
}
function ml() {
  var r = it, e = ct, a = Vt;
  return function() {
    lr(r), rr(e), fa(a), Ye && uo(null);
  };
}
function mo() {
  lr(null), rr(null), fa(null), Ye && uo(null);
}
const Gr = /* @__PURE__ */ new Set();
let xt = null, la = null, qr = null, Tn = /* @__PURE__ */ new Set(), ma = [];
function ho() {
  const r = (
    /** @type {() => void} */
    ma.shift()
  );
  ma.length > 0 && queueMicrotask(ho), r();
}
let Xr = [], vn = null, Za = !1;
class Zr {
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
    Xr = [], la = null;
    var a = null;
    if (Gr.size > 1) {
      a = /* @__PURE__ */ new Map(), qr = /* @__PURE__ */ new Map();
      for (const [d, v] of this.current)
        a.set(d, { v: d.v, wv: d.wv }), d.v = v;
      for (const d of Gr)
        if (d !== this)
          for (const [v, p] of d.#n)
            a.has(v) || (a.set(v, { v: v.v, wv: v.wv }), v.v = p);
    }
    for (const d of e)
      this.#b(d);
    if (this.#r.length === 0 && this.#e === 0) {
      this.#f();
      var n = this.#a, l = this.#t;
      this.#a = [], this.#t = [], this.#l = [], la = xt, xt = null, Mn(n), Mn(l), xt === null ? xt = this : Gr.delete(this), this.#d?.resolve();
    } else
      this.#s(this.#a), this.#s(this.#t), this.#s(this.#l);
    if (a) {
      for (const [d, { v, wv: p }] of a)
        d.wv <= p && (d.v = v);
      qr = null;
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
    e.f ^= zt;
    for (var a = e.first; a !== null; ) {
      var n = a.f, l = (n & (vr | Hr)) !== 0, d = l && (n & zt) !== 0, v = d || (n & Zt) !== 0 || this.skipped_effects.has(a);
      if (!v && a.fn !== null) {
        if (l)
          a.f ^= zt;
        else if ((n & zt) === 0)
          if ((n & an) !== 0)
            this.#t.push(a);
          else if ((n & Ca) !== 0) {
            var p = a.b?.pending ? this.#i : this.#r;
            p.push(a);
          } else ra(a) && ((a.f & Fr) !== 0 && this.#l.push(a), Or(a));
        var y = a.first;
        if (y !== null) {
          a = y;
          continue;
        }
      }
      var R = a.parent;
      for (a = a.next; a === null && R !== null; )
        a = R.next, R = R.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const a of e)
      ((a.f & Gt) !== 0 ? this.#v : this.#u).push(a), Lt(a, zt);
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
    xt = this;
  }
  deactivate() {
    xt = null, la = null;
    for (const e of Tn)
      if (Tn.delete(e), e(), xt !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Xr.length > 0 ? hl() : this.#f(), xt === this && (this.#e === 0 && Gr.delete(this), this.deactivate());
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
        Lt(e, Gt), Sr(e);
      for (const e of this.#u)
        Lt(e, ur), Sr(e);
      this.#a = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#o.add(e);
  }
  settled() {
    return (this.#d ??= Fi()).promise;
  }
  static ensure() {
    if (xt === null) {
      const e = xt = new Zr();
      Gr.add(xt), Zr.enqueue(() => {
        xt === e && e.flush();
      });
    }
    return xt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ma.length === 0 && queueMicrotask(ho), ma.unshift(e);
  }
}
function hl() {
  var r = Nr;
  Za = !0;
  try {
    var e = 0;
    for (In(!0); Xr.length > 0; ) {
      var a = Zr.ensure();
      if (e++ > 1e3) {
        if (Ye) {
          var n = /* @__PURE__ */ new Map();
          for (const d of a.current.keys())
            for (const [v, p] of d.updated ?? []) {
              var l = n.get(v);
              l || (l = { error: p.error, count: 0 }, n.set(v, l)), l.count += p.count;
            }
          for (const d of n.values())
            console.error(d.error);
        }
        pl();
      }
      a.process(Xr), Cr.clear();
    }
  } finally {
    Za = !1, In(r), vn = null;
  }
}
function pl() {
  try {
    Qi();
  } catch (r) {
    Ye && mr(r, "stack", { value: "" }), dn(r, vn);
  }
}
function Mn(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if ((n.f & (Mr | Zt)) === 0 && ra(n)) {
        var l = xt ? xt.current.size : 0;
        if (Or(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? So(n) : n.fn = null), xt !== null && xt.current.size > l && (n.f & to) !== 0)
          break;
      }
    }
    for (; a < e; )
      Sr(r[a++]);
  }
}
function Sr(r) {
  for (var e = vn = r; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (Za && e === it && (a & Fr) !== 0)
      return;
    if ((a & (Hr | vr)) !== 0) {
      if ((a & zt) === 0) return;
      e.f ^= zt;
    }
  }
  Xr.push(e);
}
let Br = /* @__PURE__ */ new Set();
const Cr = /* @__PURE__ */ new Map();
function An(r) {
  Br = r;
}
let un = !1;
function xl() {
  un = !0;
}
function Qr(r, e) {
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
function ye(r, e) {
  const a = Qr(r);
  return Ao(a), a;
}
// @__NO_SIDE_EFFECTS__
function po(r, e = !1, a = !0) {
  const n = Qr(r);
  return e || (n.equals = io), n;
}
function W(r, e, a = !1) {
  ct !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Kt || (ct.f & va) !== 0) && co() && (ct.f & (qt | Fr | Ca | va)) !== 0 && !sr?.includes(r) && nl();
  let n = a ? st(e) : e;
  return Ye && so(
    n,
    /** @type {string} */
    r.label
  ), Jr(r, n);
}
function Jr(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    Pr ? Cr.set(r, e) : Cr.set(r, a), r.v = e;
    var n = Zr.ensure();
    if (n.capture(r, a), Ye) {
      if (it !== null) {
        const l = lo("UpdatedAt");
        if (l !== null) {
          r.updated ??= /* @__PURE__ */ new Map();
          let d = r.updated.get(l.stack);
          d || (d = { error: l, count: 0 }, r.updated.set(l.stack, d)), d.count++;
        }
      }
      it !== null && (r.set_during_effect = !0);
    }
    (r.f & qt) !== 0 && ((r.f & Gt) !== 0 && cn(
      /** @type {Derived} */
      r
    ), Lt(r, (r.f & Ht) === 0 ? zt : ur)), r.wv = Io(), _o(r, Gt), it !== null && (it.f & zt) !== 0 && (it.f & (vr | Hr)) === 0 && (Ft === null ? Pl([r]) : Ft.push(r)), Ye && Br.size > 0 && !un && xo();
  }
  return e;
}
function xo() {
  un = !1;
  const r = Array.from(Br);
  for (const e of r)
    (e.f & zt) !== 0 && Lt(e, ur), ra(e) && Or(e);
  Br.clear();
}
function Sa(r, e = 1) {
  var a = t(r), n = e === 1 ? a++ : a--;
  return W(r, a), n;
}
function Ba(r) {
  W(r, r.v + 1);
}
function _o(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = a.length, l = 0; l < n; l++) {
      var d = a[l], v = d.f;
      if (Ye && (v & va) !== 0) {
        Br.add(d);
        continue;
      }
      var p = (v & Gt) === 0;
      p && Lt(d, e), (v & qt) !== 0 ? _o(
        /** @type {Derived} */
        d,
        ur
      ) : p && Sr(
        /** @type {Effect} */
        d
      );
    }
}
const _l = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function st(r) {
  if (typeof r != "object" || r === null || ir in r)
    return r;
  const e = rn(r);
  if (e !== Ni && e !== Oi)
    return r;
  var a = /* @__PURE__ */ new Map(), n = ya(r), l = /* @__PURE__ */ ye(0), d = Er, v = (R) => {
    if (Er === d)
      return R();
    var h = ct, I = Er;
    rr(null), Ln(d);
    var L = R();
    return rr(h), Ln(I), L;
  };
  n && (a.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    r.length
  )), Ye && (r = /** @type {any} */
  kl(
    /** @type {any[]} */
    r
  )));
  var p = "";
  function y(R) {
    p = R, br(l, `${p} version`);
    for (const [h, I] of a)
      br(I, _r(p, h));
  }
  return new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(R, h, I) {
        (!("value" in I) || I.configurable === !1 || I.enumerable === !1 || I.writable === !1) && rl();
        var L = a.get(h);
        return L === void 0 ? L = v(() => {
          var z = /* @__PURE__ */ ye(I.value);
          return a.set(h, z), Ye && typeof h == "string" && br(z, _r(p, h)), z;
        }) : W(L, I.value, !0), !0;
      },
      deleteProperty(R, h) {
        var I = a.get(h);
        if (I === void 0) {
          if (h in R) {
            const L = v(() => /* @__PURE__ */ ye(St));
            a.set(h, L), Ba(l), Ye && br(L, _r(p, h));
          }
        } else
          W(I, St), Ba(l);
        return !0;
      },
      get(R, h, I) {
        if (h === ir)
          return r;
        if (Ye && h === ro)
          return y;
        var L = a.get(h), z = h in R;
        if (L === void 0 && (!z || Wr(R, h)?.writable) && (L = v(() => {
          var f = st(z ? R[h] : St), q = /* @__PURE__ */ ye(f);
          return Ye && br(q, _r(p, h)), q;
        }), a.set(h, L)), L !== void 0) {
          var M = t(L);
          return M === St ? void 0 : M;
        }
        return Reflect.get(R, h, I);
      },
      getOwnPropertyDescriptor(R, h) {
        var I = Reflect.getOwnPropertyDescriptor(R, h);
        if (I && "value" in I) {
          var L = a.get(h);
          L && (I.value = t(L));
        } else if (I === void 0) {
          var z = a.get(h), M = z?.v;
          if (z !== void 0 && M !== St)
            return {
              enumerable: !0,
              configurable: !0,
              value: M,
              writable: !0
            };
        }
        return I;
      },
      has(R, h) {
        if (h === ir)
          return !0;
        var I = a.get(h), L = I !== void 0 && I.v !== St || Reflect.has(R, h);
        if (I !== void 0 || it !== null && (!L || Wr(R, h)?.writable)) {
          I === void 0 && (I = v(() => {
            var M = L ? st(R[h]) : St, f = /* @__PURE__ */ ye(M);
            return Ye && br(f, _r(p, h)), f;
          }), a.set(h, I));
          var z = t(I);
          if (z === St)
            return !1;
        }
        return L;
      },
      set(R, h, I, L) {
        var z = a.get(h), M = h in R;
        if (n && h === "length")
          for (var f = I; f < /** @type {Source<number>} */
          z.v; f += 1) {
            var q = a.get(f + "");
            q !== void 0 ? W(q, St) : f in R && (q = v(() => /* @__PURE__ */ ye(St)), a.set(f + "", q), Ye && br(q, _r(p, f)));
          }
        if (z === void 0)
          (!M || Wr(R, h)?.writable) && (z = v(() => /* @__PURE__ */ ye(void 0)), W(z, st(I)), a.set(h, z), Ye && br(z, _r(p, h)));
        else {
          M = z.v !== St;
          var ee = v(() => st(I));
          W(z, ee);
        }
        var _ = Reflect.getOwnPropertyDescriptor(R, h);
        if (_?.set && _.set.call(L, I), !M) {
          if (n && typeof h == "string") {
            var E = (
              /** @type {Source<number>} */
              a.get("length")
            ), B = Number(h);
            Number.isInteger(B) && B >= E.v && W(E, B + 1);
          }
          Ba(l);
        }
        return !0;
      },
      ownKeys(R) {
        t(l);
        var h = Reflect.ownKeys(R).filter((z) => {
          var M = a.get(z);
          return M === void 0 || M.v !== St;
        });
        for (var [I, L] of a)
          L.v !== St && !(I in R) && h.push(I);
        return h;
      },
      setPrototypeOf() {
        al();
      }
    }
  );
}
function _r(r, e) {
  return typeof e == "symbol" ? `${r}[Symbol(${e.description ?? ""})]` : _l.test(e) ? `${r}.${e}` : /^\d+$/.test(e) ? `${r}[${e}]` : `${r}['${e}']`;
}
function zn(r) {
  try {
    if (r !== null && typeof r == "object" && ir in r)
      return r[ir];
  } catch {
  }
  return r;
}
function wl(r, e) {
  return Object.is(zn(r), zn(e));
}
const yl = /* @__PURE__ */ new Set([
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
function kl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var l = Reflect.get(e, a, n);
      return yl.has(
        /** @type {string} */
        a
      ) ? function(...d) {
        xl();
        var v = l.apply(this, d);
        return xo(), v;
      } : l;
    }
  });
}
var wo, Cl, El, Sl;
function zr(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function tr(r) {
  return El.call(r);
}
// @__NO_SIDE_EFFECTS__
function Ta(r) {
  return Sl.call(r);
}
function i(r, e) {
  return /* @__PURE__ */ tr(r);
}
function _e(r, e) {
  {
    var a = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ tr(
        /** @type {Node} */
        r
      )
    );
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ Ta(a) : a;
  }
}
function m(r, e = 1, a = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ta(n);
  return n;
}
function Tl(r) {
  r.textContent = "";
}
function fn() {
  return !1;
}
function Ml(r) {
  it === null && ct === null && Zi(r), ct !== null && (ct.f & Ht) !== 0 && it === null && Xi(), Pr && Ki(r);
}
function Al(r, e) {
  var a = e.last;
  a === null ? e.last = e.first = r : (a.next = r, r.prev = a, e.last = r);
}
function hr(r, e, a, n = !0) {
  var l = it;
  if (Ye)
    for (; l !== null && (l.f & va) !== 0; )
      l = l.parent;
  l !== null && (l.f & Zt) !== 0 && (r |= Zt);
  var d = {
    ctx: Vt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | Gt,
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
  if (Ye && (d.component_function = ea), a)
    try {
      Or(d), d.f |= ka;
    } catch (y) {
      throw Ut(d), y;
    }
  else e !== null && Sr(d);
  var v = a && d.deps === null && d.first === null && d.nodes_start === null && d.teardown === null && (d.f & on) === 0;
  if (!v && n && (l !== null && Al(d, l), ct !== null && (ct.f & qt) !== 0 && (r & Hr) === 0)) {
    var p = (
      /** @type {Derived} */
      ct
    );
    (p.effects ??= []).push(d);
  }
  return d;
}
function bn(r) {
  const e = hr(nn, null, !1);
  return Lt(e, zt), e.teardown = r, e;
}
function bt(r) {
  Ml("$effect"), Ye && mr(r, "name", {
    value: "$effect"
  });
  var e = (
    /** @type {Effect} */
    it.f
  ), a = !ct && (e & vr) !== 0 && (e & ka) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Vt
    );
    (n.e ??= []).push(r);
  } else
    return yo(r);
}
function yo(r) {
  return hr(an | to, r, !1);
}
function fr(r) {
  return hr(an, r, !1);
}
function zl(r) {
  return hr(Ca | on, r, !0);
}
function Ma(r, e = 0) {
  return hr(nn | e, r, !0);
}
function A(r, e = [], a = []) {
  go(e, a, (n) => {
    hr(nn, () => r(...n.map(t)), !0);
  });
}
function Ir(r, e = 0) {
  var a = hr(Fr | e, r, !0);
  return Ye && (a.dev_stack = ba), a;
}
function dr(r, e = !0) {
  return hr(vr, r, !0, e);
}
function ko(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = Pr, n = ct;
    Pn(!0), rr(null);
    try {
      e.call(null);
    } finally {
      Pn(a), rr(n);
    }
  }
}
function Co(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    a.ac?.abort(ln);
    var n = a.next;
    (a.f & Hr) !== 0 ? a.parent = null : Ut(a, e), a = n;
  }
}
function Il(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    (e.f & vr) === 0 && Ut(e), e = a;
  }
}
function Ut(r, e = !0) {
  var a = !1;
  (e || (r.f & Hi) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (Eo(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), a = !0), Co(r, e && !a), ha(r, 0), Lt(r, Mr);
  var n = r.transitions;
  if (n !== null)
    for (const d of n)
      d.stop();
  ko(r);
  var l = r.parent;
  l !== null && l.first !== null && So(r), Ye && (r.component_function = null), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function Eo(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(r)
    );
    r.remove(), r = a;
  }
}
function So(r) {
  var e = r.parent, a = r.prev, n = r.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = a));
}
function Aa(r, e) {
  var a = [];
  gn(r, a, !0), To(a, () => {
    Ut(r), e && e();
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
function gn(r, e, a) {
  if ((r.f & Zt) === 0) {
    if (r.f ^= Zt, r.transitions !== null)
      for (const v of r.transitions)
        (v.is_global || a) && e.push(v);
    for (var n = r.first; n !== null; ) {
      var l = n.next, d = (n.f & Ar) !== 0 || (n.f & vr) !== 0;
      gn(n, e, d ? a : !1), n = l;
    }
  }
}
function za(r) {
  Mo(r, !0);
}
function Mo(r, e) {
  if ((r.f & Zt) !== 0) {
    r.f ^= Zt, (r.f & zt) === 0 && (Lt(r, Gt), Sr(r));
    for (var a = r.first; a !== null; ) {
      var n = a.next, l = (a.f & Ar) !== 0 || (a.f & vr) !== 0;
      Mo(a, l ? e : !1), a = n;
    }
    if (r.transitions !== null)
      for (const d of r.transitions)
        (d.is_global || e) && d.in();
  }
}
let Nr = !1;
function In(r) {
  Nr = r;
}
let Pr = !1;
function Pn(r) {
  Pr = r;
}
let ct = null, Kt = !1;
function rr(r) {
  ct = r;
}
let it = null;
function lr(r) {
  it = r;
}
let sr = null;
function Ao(r) {
  ct !== null && (sr === null ? sr = [r] : sr.push(r));
}
let Pt = null, Rt = 0, Ft = null;
function Pl(r) {
  Ft = r;
}
let zo = 1, $r = 0, Er = $r;
function Ln(r) {
  Er = r;
}
let gr = !1;
function Io() {
  return ++zo;
}
function ra(r) {
  var e = r.f;
  if ((e & Gt) !== 0)
    return !0;
  if ((e & ur) !== 0) {
    var a = r.deps, n = (e & Ht) !== 0;
    if (a !== null) {
      var l, d, v = (e & ca) !== 0, p = n && it !== null && !gr, y = a.length;
      if ((v || p) && (it === null || (it.f & Mr) === 0)) {
        var R = (
          /** @type {Derived} */
          r
        ), h = R.parent;
        for (l = 0; l < y; l++)
          d = a[l], (v || !d?.reactions?.includes(R)) && (d.reactions ??= []).push(R);
        v && (R.f ^= ca), p && h !== null && (h.f & Ht) === 0 && (R.f ^= Ht);
      }
      for (l = 0; l < y; l++)
        if (d = a[l], ra(
          /** @type {Derived} */
          d
        ) && bo(
          /** @type {Derived} */
          d
        ), d.wv > r.wv)
          return !0;
    }
    (!n || it !== null && !gr) && Lt(r, zt);
  }
  return !1;
}
function Po(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !sr?.includes(r))
    for (var l = 0; l < n.length; l++) {
      var d = n[l];
      (d.f & qt) !== 0 ? Po(
        /** @type {Derived} */
        d,
        e,
        !1
      ) : e === d && (a ? Lt(d, Gt) : (d.f & zt) !== 0 && Lt(d, ur), Sr(
        /** @type {Effect} */
        d
      ));
    }
}
function Qa(r) {
  var e = Pt, a = Rt, n = Ft, l = ct, d = gr, v = sr, p = Vt, y = Kt, R = Er, h = r.f;
  Pt = /** @type {null | Value[]} */
  null, Rt = 0, Ft = null, gr = (h & Ht) !== 0 && (Kt || !Nr || ct === null), ct = (h & (vr | Hr)) === 0 ? r : null, sr = null, fa(r.ctx), Kt = !1, Er = ++$r, r.ac !== null && (r.ac.abort(ln), r.ac = null);
  try {
    r.f |= ua;
    var I = (
      /** @type {Function} */
      (0, r.fn)()
    ), L = r.deps;
    if (Pt !== null) {
      var z;
      if (ha(r, Rt), L !== null && Rt > 0)
        for (L.length = Rt + Pt.length, z = 0; z < Pt.length; z++)
          L[Rt + z] = Pt[z];
      else
        r.deps = L = Pt;
      if (!gr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (h & qt) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (z = Rt; z < L.length; z++)
          (L[z].reactions ??= []).push(r);
    } else L !== null && Rt < L.length && (ha(r, Rt), L.length = Rt);
    if (co() && Ft !== null && !Kt && L !== null && (r.f & (qt | ur | Gt)) === 0)
      for (z = 0; z < /** @type {Source[]} */
      Ft.length; z++)
        Po(
          Ft[z],
          /** @type {Effect} */
          r
        );
    return l !== null && l !== r && ($r++, Ft !== null && (n === null ? n = Ft : n.push(.../** @type {Source[]} */
    Ft))), (r.f & yr) !== 0 && (r.f ^= yr), I;
  } catch (M) {
    return dl(M);
  } finally {
    r.f ^= ua, Pt = e, Rt = a, Ft = n, ct = l, gr = d, sr = v, fa(p), Kt = y, Er = R;
  }
}
function Ll(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Ri.call(a, r);
    if (n !== -1) {
      var l = a.length - 1;
      l === 0 ? a = e.reactions = null : (a[n] = a[l], a.pop());
    }
  }
  a === null && (e.f & qt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pt === null || !Pt.includes(e)) && (Lt(e, ur), (e.f & (Ht | ca)) === 0 && (e.f ^= ca), Xa(
    /** @type {Derived} **/
    e
  ), ha(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ha(r, e) {
  var a = r.deps;
  if (a !== null)
    for (var n = e; n < a.length; n++)
      Ll(r, a[n]);
}
function Or(r) {
  var e = r.f;
  if ((e & Mr) === 0) {
    Lt(r, zt);
    var a = it, n = Nr;
    if (it = r, Nr = !0, Ye) {
      var l = ea;
      Sn(r.component_function);
      var d = (
        /** @type {any} */
        ba
      );
      En(r.dev_stack ?? ba);
    }
    try {
      (e & Fr) !== 0 ? Il(r) : Co(r), ko(r);
      var v = Qa(r);
      r.teardown = typeof v == "function" ? v : null, r.wv = zo;
      var p;
      Ye && sl && (r.f & Gt) !== 0 && r.deps;
    } finally {
      Nr = n, it = a, Ye && (Sn(l), En(d));
    }
  }
}
function t(r) {
  var e = r.f, a = (e & qt) !== 0;
  if (ct !== null && !Kt) {
    var n = it !== null && (it.f & Mr) !== 0;
    if (!n && !sr?.includes(r)) {
      var l = ct.deps;
      if ((ct.f & ua) !== 0)
        r.rv < $r && (r.rv = $r, Pt === null && l !== null && l[Rt] === r ? Rt++ : Pt === null ? Pt = [r] : (!gr || !Pt.includes(r)) && Pt.push(r));
      else {
        (ct.deps ??= []).push(r);
        var d = r.reactions;
        d === null ? r.reactions = [ct] : d.includes(ct) || d.push(ct);
      }
    }
  } else if (a && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var v = (
      /** @type {Derived} */
      r
    ), p = v.parent;
    p !== null && (p.f & Ht) === 0 && (v.f ^= Ht);
  }
  if (Ye) {
    if (kr) {
      var y = (kr.f & ua) !== 0, R = kr.deps?.includes(r);
      if (!y && !Kt && !R) {
        ol(
          /** @type {string} */
          r.label
        );
        var h = lo("TracedAt");
        h && console.warn(h);
      }
    }
    fl.delete(r);
  }
  if (Pr) {
    if (Cr.has(r))
      return Cr.get(r);
    if (a) {
      v = /** @type {Derived} */
      r;
      var I = v.v;
      return ((v.f & zt) === 0 && v.reactions !== null || Lo(v)) && (I = cn(v)), Cr.set(v, I), I;
    }
  } else if (a) {
    if (v = /** @type {Derived} */
    r, qr?.has(v))
      return qr.get(v);
    ra(v) && bo(v);
  }
  if ((r.f & yr) !== 0)
    throw r.v;
  return r.v;
}
function Lo(r) {
  if (r.v === St) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Cr.has(e) || (e.f & qt) !== 0 && Lo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Lr(r) {
  var e = Kt;
  try {
    return Kt = !0, r();
  } finally {
    Kt = e;
  }
}
const Dl = -7169;
function Lt(r, e) {
  r.f = r.f & Dl | e;
}
function jl(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (ir in r)
      Ja(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const a = r[e];
        typeof a == "object" && a && ir in a && Ja(a);
      }
  }
}
function Ja(r, e = /* @__PURE__ */ new Set()) {
  if (typeof r == "object" && r !== null && // We don't want to traverse DOM elements
  !(r instanceof EventTarget) && !e.has(r)) {
    e.add(r), r instanceof Date && r.getTime();
    for (let n in r)
      try {
        Ja(r[n], e);
      } catch {
      }
    const a = rn(r);
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
function Rl(r, e) {
  if (e) {
    const a = document.body;
    r.autofocus = !0, ta(() => {
      document.activeElement === a && r.focus();
    });
  }
}
let Dn = !1;
function Nl() {
  Dn || (Dn = !0, document.addEventListener(
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
function Ia(r) {
  var e = ct, a = it;
  rr(null), lr(null);
  try {
    return r();
  } finally {
    rr(e), lr(a);
  }
}
function Do(r, e, a, n = a) {
  r.addEventListener(e, () => Ia(a));
  const l = r.__on_r;
  l ? r.__on_r = () => {
    l(), n(!0);
  } : r.__on_r = () => n(!0), Nl();
}
const Ol = /* @__PURE__ */ new Set(), ql = /* @__PURE__ */ new Set();
function jo(r, e, a, n = {}) {
  function l(d) {
    if (n.capture || Bl.call(e, d), !d.cancelBubble)
      return Ia(() => a?.call(this, d));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? ta(() => {
    e.addEventListener(r, l, n);
  }) : e.addEventListener(r, l, n), l;
}
function Ot(r, e, a, n, l) {
  var d = { capture: n, passive: l }, v = jo(r, e, a, d);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && bn(() => {
    e.removeEventListener(r, v, d);
  });
}
function vt(r) {
  for (var e = 0; e < r.length; e++)
    Ol.add(r[e]);
  for (var a of ql)
    a(r);
}
let jn = null;
function Bl(r) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, l = r.composedPath?.() || [], d = (
    /** @type {null | Element} */
    l[0] || r.target
  );
  jn = r;
  var v = 0, p = jn === r && r.__root;
  if (p) {
    var y = l.indexOf(p);
    if (y !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var R = l.indexOf(e);
    if (R === -1)
      return;
    y <= R && (v = y);
  }
  if (d = /** @type {Element} */
  l[v] || r.target, d !== e) {
    mr(r, "currentTarget", {
      configurable: !0,
      get() {
        return d || a;
      }
    });
    var h = ct, I = it;
    rr(null), lr(null);
    try {
      for (var L, z = []; d !== null; ) {
        var M = d.assignedSlot || d.parentNode || /** @type {any} */
        d.host || null;
        try {
          var f = d["__" + n];
          if (f != null && (!/** @type {any} */
          d.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === d))
            if (ya(f)) {
              var [q, ...ee] = f;
              q.apply(d, [r, ...ee]);
            } else
              f.call(d, r);
        } catch (_) {
          L ? z.push(_) : L = _;
        }
        if (r.cancelBubble || M === e || M === null)
          break;
        d = M;
      }
      if (L) {
        for (let _ of z)
          queueMicrotask(() => {
            throw _;
          });
        throw L;
      }
    } finally {
      r.__root = e, delete r.currentTarget, rr(h), lr(I);
    }
  }
}
function mn(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function Tr(r, e) {
  var a = (
    /** @type {Effect} */
    it
  );
  a.nodes_start === null && (a.nodes_start = r, a.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function c(r, e) {
  var a = (e & zi) !== 0, n = (e & Ii) !== 0, l, d = !r.startsWith("<!>");
  return () => {
    l === void 0 && (l = mn(d ? r : "<!>" + r), a || (l = /** @type {Node} */
    /* @__PURE__ */ tr(l)));
    var v = (
      /** @type {TemplateNode} */
      n || Cl ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (a) {
      var p = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tr(v)
      ), y = (
        /** @type {TemplateNode} */
        v.lastChild
      );
      Tr(p, y);
    } else
      Tr(v, v);
    return v;
  };
}
// @__NO_SIDE_EFFECTS__
function Fl(r, e, a = "svg") {
  var n = !r.startsWith("<!>"), l = `<${a}>${n ? r : "<!>" + r}</${a}>`, d;
  return () => {
    if (!d) {
      var v = (
        /** @type {DocumentFragment} */
        mn(l)
      ), p = (
        /** @type {Element} */
        /* @__PURE__ */ tr(v)
      );
      d = /** @type {Element} */
      /* @__PURE__ */ tr(p);
    }
    var y = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    return Tr(y, y), y;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(r, e) {
  return /* @__PURE__ */ Fl(r, e, "svg");
}
function Ct(r = "") {
  {
    var e = zr(r + "");
    return Tr(e, e), e;
  }
}
function Se() {
  var r = document.createDocumentFragment(), e = document.createComment(""), a = zr();
  return r.append(e, a), Tr(e, a), r;
}
function o(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function Hl(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Vl = [
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
function Gl(r) {
  return Vl.includes(r);
}
const Ul = {
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
function Yl(r) {
  return r = r.toLowerCase(), Ul[r] ?? r;
}
let Ro = !0;
function Rn(r) {
  Ro = r;
}
function ie(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && (r.__t = a, r.nodeValue = a + "");
}
function ot(r, e, ...a) {
  var n = r, l = Nt, d;
  Ir(() => {
    l !== (l = e()) && (d && (Ut(d), d = null), Ye && l == null && Ji(), d = dr(() => (
      /** @type {SnippetFn} */
      l(n, ...a)
    )));
  }, Ar);
}
if (Ye) {
  let r = function(e) {
    if (!(e in globalThis)) {
      let a;
      Object.defineProperty(globalThis, e, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (a !== void 0)
            return a;
          tl(e);
        },
        set: (n) => {
          a = n;
        }
      });
    }
  };
  r("$state"), r("$effect"), r("$derived"), r("$inspect"), r("$props"), r("$bindable");
}
var Nn = /* @__PURE__ */ new Map();
function Wl(r, e) {
  var a = Nn.get(r);
  a || (a = /* @__PURE__ */ new Set(), Nn.set(r, a)), a.add(e);
}
function g(r, e, a = !1) {
  var n = r, l = null, d = null, v = St, p = a ? Ar : 0, y = !1;
  const R = (z, M = !0) => {
    y = !0, L(M, z);
  };
  var h = null;
  function I() {
    h !== null && (h.lastChild.remove(), n.before(h), h = null);
    var z = v ? l : d, M = v ? d : l;
    z && za(z), M && Aa(M, () => {
      v ? d = null : l = null;
    });
  }
  const L = (z, M) => {
    if (v !== (v = z)) {
      var f = fn(), q = n;
      if (f && (h = document.createDocumentFragment(), h.append(q = zr())), v ? l ??= M && dr(() => M(q)) : d ??= M && dr(() => M(q)), f) {
        var ee = (
          /** @type {Batch} */
          xt
        ), _ = v ? l : d, E = v ? d : l;
        _ && ee.skipped_effects.delete(_), E && ee.skipped_effects.add(E), ee.add_callback(I);
      } else
        I();
    }
  };
  Ir(() => {
    y = !1, e(R), y || L(null, null);
  }, p);
}
function Vr(r, e) {
  return e;
}
function Kl(r, e, a) {
  for (var n = r.items, l = [], d = e.length, v = 0; v < d; v++)
    gn(e[v].e, l, !0);
  var p = d > 0 && l.length === 0 && a !== null;
  if (p) {
    var y = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    Tl(y), y.append(
      /** @type {Element} */
      a
    ), n.clear(), $t(r, e[0].prev, e[d - 1].next);
  }
  To(l, () => {
    for (var R = 0; R < d; R++) {
      var h = e[R];
      p || (n.delete(h.k), $t(r, h.prev, h.next)), Ut(h.e, !p);
    }
  });
}
function Ge(r, e, a, n, l, d = null) {
  var v = r, p = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, y = (e & Zn) !== 0;
  if (y) {
    var R = (
      /** @type {Element} */
      r
    );
    v = R.appendChild(zr());
  }
  var h = null, I = !1, L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ fo(() => {
    var ee = a();
    return ya(ee) ? ee : ee == null ? [] : Jn(ee);
  }), M, f;
  function q() {
    Xl(
      f,
      M,
      p,
      L,
      v,
      l,
      e,
      n,
      a
    ), d !== null && (M.length === 0 ? h ? za(h) : h = dr(() => d(v)) : h !== null && Aa(h, () => {
      h = null;
    }));
  }
  Ir(() => {
    f ??= /** @type {Effect} */
    it, M = t(z);
    var ee = M.length;
    if (!(I && ee === 0)) {
      I = ee === 0;
      var _, E, B, F;
      if (fn()) {
        var j = /* @__PURE__ */ new Set(), V = (
          /** @type {Batch} */
          xt
        );
        for (E = 0; E < ee; E += 1) {
          B = M[E], F = n(B, E);
          var O = p.items.get(F) ?? L.get(F);
          O ? (e & (_a | wa)) !== 0 && No(O, B, E, e) : (_ = Oo(
            null,
            p,
            null,
            null,
            B,
            F,
            E,
            l,
            e,
            a,
            !0
          ), L.set(F, _)), j.add(F);
        }
        for (const [P, Q] of p.items)
          j.has(P) || V.skipped_effects.add(Q.e);
        V.add_callback(q);
      } else
        q();
      t(z);
    }
  });
}
function Xl(r, e, a, n, l, d, v, p, y) {
  var R = (v & wi) !== 0, h = (v & (_a | wa)) !== 0, I = e.length, L = a.items, z = a.first, M = z, f, q = null, ee, _ = [], E = [], B, F, j, V;
  if (R)
    for (V = 0; V < I; V += 1)
      B = e[V], F = p(B, V), j = L.get(F), j !== void 0 && (j.a?.measure(), (ee ??= /* @__PURE__ */ new Set()).add(j));
  for (V = 0; V < I; V += 1) {
    if (B = e[V], F = p(B, V), j = L.get(F), j === void 0) {
      var O = n.get(F);
      if (O !== void 0) {
        n.delete(F), L.set(F, O);
        var P = q ? q.next : M;
        $t(a, q, O), $t(a, O, P), Fa(O, P, l), q = O;
      } else {
        var Q = M ? (
          /** @type {TemplateNode} */
          M.e.nodes_start
        ) : l;
        q = Oo(
          Q,
          a,
          q,
          q === null ? a.first : q.next,
          B,
          F,
          V,
          d,
          v,
          y
        );
      }
      L.set(F, q), _ = [], E = [], M = q.next;
      continue;
    }
    if (h && No(j, B, V, v), (j.e.f & Zt) !== 0 && (za(j.e), R && (j.a?.unfix(), (ee ??= /* @__PURE__ */ new Set()).delete(j))), j !== M) {
      if (f !== void 0 && f.has(j)) {
        if (_.length < E.length) {
          var G = E[0], D;
          q = G.prev;
          var T = _[0], w = _[_.length - 1];
          for (D = 0; D < _.length; D += 1)
            Fa(_[D], G, l);
          for (D = 0; D < E.length; D += 1)
            f.delete(E[D]);
          $t(a, T.prev, w.next), $t(a, q, T), $t(a, w, G), M = G, q = w, V -= 1, _ = [], E = [];
        } else
          f.delete(j), Fa(j, M, l), $t(a, j.prev, j.next), $t(a, j, q === null ? a.first : q.next), $t(a, q, j), q = j;
        continue;
      }
      for (_ = [], E = []; M !== null && M.k !== F; )
        (M.e.f & Zt) === 0 && (f ??= /* @__PURE__ */ new Set()).add(M), E.push(M), M = M.next;
      if (M === null)
        continue;
      j = M;
    }
    _.push(j), q = j, M = j.next;
  }
  if (M !== null || f !== void 0) {
    for (var x = f === void 0 ? [] : Jn(f); M !== null; )
      (M.e.f & Zt) === 0 && x.push(M), M = M.next;
    var C = x.length;
    if (C > 0) {
      var X = (v & Zn) !== 0 && I === 0 ? l : null;
      if (R) {
        for (V = 0; V < C; V += 1)
          x[V].a?.measure();
        for (V = 0; V < C; V += 1)
          x[V].a?.fix();
      }
      Kl(a, x, X);
    }
  }
  R && ta(() => {
    if (ee !== void 0)
      for (j of ee)
        j.a?.apply();
  }), r.first = a.first && a.first.e, r.last = q && q.e;
  for (var K of n.values())
    Ut(K.e);
  n.clear();
}
function No(r, e, a, n) {
  (n & _a) !== 0 && Jr(r.v, e), (n & wa) !== 0 ? Jr(
    /** @type {Value<number>} */
    r.i,
    a
  ) : r.i = a;
}
function Oo(r, e, a, n, l, d, v, p, y, R, h) {
  var I = (y & _a) !== 0, L = (y & yi) === 0, z = I ? L ? /* @__PURE__ */ po(l, !1, !1) : Qr(l) : l, M = (y & wa) === 0 ? v : Qr(v);
  Ye && I && (z.trace = () => {
    var ee = typeof M == "number" ? v : M.v;
    R()[ee];
  });
  var f = {
    i: M,
    v: z,
    k: d,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: n
  };
  try {
    if (r === null) {
      var q = document.createDocumentFragment();
      q.append(r = zr());
    }
    return f.e = dr(() => p(
      /** @type {Node} */
      r,
      z,
      M,
      R
    ), ll), f.e.prev = a && a.e, f.e.next = n && n.e, a === null ? h || (e.first = f) : (a.next = f, a.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
  } finally {
  }
}
function Fa(r, e, a) {
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
    var v = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(d)
    );
    l.before(d), d = v;
  }
}
function $t(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function Pa(r, e, a = !1, n = !1, l = !1) {
  var d = r, v = "";
  A(() => {
    var p = (
      /** @type {Effect} */
      it
    );
    if (v !== (v = e() ?? "") && (p.nodes_start !== null && (Eo(
      p.nodes_start,
      /** @type {TemplateNode} */
      p.nodes_end
    ), p.nodes_start = p.nodes_end = null), v !== "")) {
      var y = v + "";
      a ? y = `<svg>${y}</svg>` : n && (y = `<math>${y}</math>`);
      var R = mn(y);
      if ((a || n) && (R = /** @type {Element} */
      /* @__PURE__ */ tr(R)), Tr(
        /** @type {TemplateNode} */
        /* @__PURE__ */ tr(R),
        /** @type {TemplateNode} */
        R.lastChild
      ), a || n)
        for (; /* @__PURE__ */ tr(R); )
          d.before(
            /** @type {Node} */
            /* @__PURE__ */ tr(R)
          );
      else
        d.before(R);
    }
  });
}
function Et(r, e, a) {
  var n = r, l, d, v = null, p = null;
  function y() {
    d && (Aa(d), d = null), v && (v.lastChild.remove(), n.before(v), v = null), d = p, p = null;
  }
  Ir(() => {
    if (l !== (l = e())) {
      var R = fn();
      if (l) {
        var h = n;
        R && (v = document.createDocumentFragment(), v.append(h = zr())), p = dr(() => a(h, l));
      }
      R ? xt.add_callback(y) : y();
    }
  }, Ar);
}
function Zl(r, e, a, n, l, d) {
  var v, p, y = null, R = (
    /** @type {TemplateNode} */
    r
  ), h;
  Ir(() => {
    const I = e() || null;
    var L = I === "svg" ? Di : null;
    I !== v && (h && (I === null ? Aa(h, () => {
      h = null, p = null;
    }) : I === p ? za(h) : (Ut(h), Rn(!1))), I && I !== p && (h = dr(() => {
      if (y = L ? document.createElementNS(L, I) : document.createElement(I), Tr(y, y), n) {
        var z = (
          /** @type {TemplateNode} */
          y.appendChild(zr())
        );
        n(y, z);
      }
      it.nodes_end = y, R.before(y);
    })), v = I, v && (p = v), Rn(!0));
  }, Ar);
}
function Qe(r, e) {
  fr(() => {
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
      l.id = e.hash, l.textContent = e.code, n.appendChild(l), Ye && Wl(e.hash, l);
    }
  });
}
function Ie(r, e, a) {
  fr(() => {
    var n = Lr(() => e(r, a?.()) || {});
    if (a && n?.update) {
      var l = !1, d = (
        /** @type {any} */
        {}
      );
      Ma(() => {
        var v = a();
        jl(v), l && sn(d, v) && (d = v, n.update(v));
      }), l = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function Ql(r, e) {
  var a = void 0, n;
  Ir(() => {
    a !== (a = e()) && (n && (Ut(n), n = null), a && (n = dr(() => {
      fr(() => (
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
function Jl() {
  for (var r, e, a = 0, n = "", l = arguments.length; a < l; a++) (r = arguments[a]) && (e = qo(r)) && (n && (n += " "), n += e);
  return n;
}
function ne(r) {
  return typeof r == "object" ? Jl(r) : r ?? "";
}
const On = [...` 	
\r\f \v\uFEFF`];
function $l(r, e, a) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var l in a)
      if (a[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var d = l.length, v = 0; (v = n.indexOf(l, v)) >= 0; ) {
          var p = v + d;
          (v === 0 || On.includes(n[v - 1])) && (p === n.length || On.includes(n[p])) ? n = (v === 0 ? "" : n.substring(0, v)) + n.substring(p + 1) : v = p;
        }
  }
  return n === "" ? null : n;
}
function qn(r, e = !1) {
  var a = e ? " !important;" : ";", n = "";
  for (var l in r) {
    var d = r[l];
    d != null && d !== "" && (n += " " + l + ": " + d + a);
  }
  return n;
}
function Ha(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function es(r, e) {
  if (e) {
    var a = "", n, l;
    if (Array.isArray(e) ? (n = e[0], l = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var d = !1, v = 0, p = !1, y = [];
      n && y.push(...Object.keys(n).map(Ha)), l && y.push(...Object.keys(l).map(Ha));
      var R = 0, h = -1;
      const f = r.length;
      for (var I = 0; I < f; I++) {
        var L = r[I];
        if (p ? L === "/" && r[I - 1] === "*" && (p = !1) : d ? d === L && (d = !1) : L === "/" && r[I + 1] === "*" ? p = !0 : L === '"' || L === "'" ? d = L : L === "(" ? v++ : L === ")" && v--, !p && d === !1 && v === 0) {
          if (L === ":" && h === -1)
            h = I;
          else if (L === ";" || I === f - 1) {
            if (h !== -1) {
              var z = Ha(r.substring(R, h).trim());
              if (!y.includes(z)) {
                L !== ";" && I++;
                var M = r.substring(R, I).trim();
                a += " " + M + ";";
              }
            }
            R = I + 1, h = -1;
          }
        }
      }
    }
    return n && (a += qn(n)), l && (a += qn(l, !0)), a = a.trim(), a === "" ? null : a;
  }
  return r == null ? null : String(r);
}
function N(r, e, a, n, l, d) {
  var v = r.__className;
  if (v !== a || v === void 0) {
    var p = $l(a, n, d);
    p == null ? r.removeAttribute("class") : e ? r.className = p : r.setAttribute("class", p), r.__className = a;
  } else if (d && l !== d)
    for (var y in d) {
      var R = !!d[y];
      (l == null || R !== !!l[y]) && r.classList.toggle(y, R);
    }
  return d;
}
function Va(r, e = {}, a, n) {
  for (var l in a) {
    var d = a[l];
    e[l] !== d && (a[l] == null ? r.style.removeProperty(l) : r.style.setProperty(l, d, n));
  }
}
function ht(r, e, a, n) {
  var l = r.__style;
  if (l !== e) {
    var d = es(e, n);
    d == null ? r.removeAttribute("style") : r.style.cssText = d, r.__style = e;
  } else n && (Array.isArray(n) ? (Va(r, a?.[0], n[0]), Va(r, a?.[1], n[1], "important")) : Va(r, a, n));
  return n;
}
function pa(r, e, a = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!ya(e))
      return il();
    for (var n of r.options)
      n.selected = e.includes(Bn(n));
    return;
  }
  for (n of r.options) {
    var l = Bn(n);
    if (wl(l, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Bo(r) {
  var e = new MutationObserver(() => {
    pa(r, r.__value);
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
function Bn(r) {
  return "__value" in r ? r.__value : r.value;
}
const Ur = Symbol("class"), wr = Symbol("style"), Fo = Symbol("is custom element"), Ho = Symbol("is html");
function ts(r, e) {
  var a = La(r);
  a.value === (a.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  r.value === e && (e !== 0 || r.nodeName !== "PROGRESS") || (r.value = e ?? "");
}
function Xt(r, e) {
  var a = La(r);
  a.checked !== (a.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (r.checked = e);
}
function rs(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function xe(r, e, a, n) {
  var l = La(r);
  l[e] !== (l[e] = a) && (e === "loading" && (r[Gi] = a), a == null ? r.removeAttribute(e) : typeof a != "string" && Vo(r).includes(e) ? r[e] = a : r.setAttribute(e, a));
}
function as(r, e, a, n, l = !1) {
  var d = La(r), v = d[Fo], p = !d[Ho], y = e || {}, R = r.tagName === "OPTION";
  for (var h in e)
    h in a || (a[h] = null);
  a.class ? a.class = ne(a.class) : (n || a[Ur]) && (a.class = null), a[wr] && (a.style ??= null);
  var I = Vo(r);
  for (const _ in a) {
    let E = a[_];
    if (R && _ === "value" && E == null) {
      r.value = r.__value = "", y[_] = E;
      continue;
    }
    if (_ === "class") {
      var L = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      N(r, L, E, n, e?.[Ur], a[Ur]), y[_] = E, y[Ur] = a[Ur];
      continue;
    }
    if (_ === "style") {
      ht(r, E, e?.[wr], a[wr]), y[_] = E, y[wr] = a[wr];
      continue;
    }
    var z = y[_];
    if (!(E === z && !(E === void 0 && r.hasAttribute(_)))) {
      y[_] = E;
      var M = _[0] + _[1];
      if (M !== "$$")
        if (M === "on") {
          const B = {}, F = "$$" + _;
          let j = _.slice(2);
          var f = Gl(j);
          if (Hl(j) && (j = j.slice(0, -7), B.capture = !0), !f && z) {
            if (E != null) continue;
            r.removeEventListener(j, y[F], B), y[F] = null;
          }
          if (E != null)
            if (f)
              r[`__${j}`] = E, vt([j]);
            else {
              let V = function(O) {
                y[_].call(this, O);
              };
              y[F] = jo(j, r, V, B);
            }
          else f && (r[`__${j}`] = void 0);
        } else if (_ === "style")
          xe(r, _, E);
        else if (_ === "autofocus")
          Rl(
            /** @type {HTMLElement} */
            r,
            !!E
          );
        else if (!v && (_ === "__value" || _ === "value" && E != null))
          r.value = r.__value = E;
        else if (_ === "selected" && R)
          rs(
            /** @type {HTMLOptionElement} */
            r,
            E
          );
        else {
          var q = _;
          p || (q = Yl(q));
          var ee = q === "defaultValue" || q === "defaultChecked";
          if (E == null && !v && !ee)
            if (d[_] = null, q === "value" || q === "checked") {
              let B = (
                /** @type {HTMLInputElement} */
                r
              );
              const F = e === void 0;
              if (q === "value") {
                let j = B.defaultValue;
                B.removeAttribute(q), B.defaultValue = j, B.value = B.__value = F ? j : null;
              } else {
                let j = B.defaultChecked;
                B.removeAttribute(q), B.defaultChecked = j, B.checked = F ? j : !1;
              }
            } else
              r.removeAttribute(_);
          else ee || I.includes(q) && (v || typeof E != "string") ? (r[q] = E, q in d && (d[q] = St)) : typeof E != "function" && xe(r, q, E);
        }
    }
  }
  return y;
}
function Ze(r, e, a = [], n = [], l, d = !1) {
  go(a, n, (v) => {
    var p = void 0, y = {}, R = r.nodeName === "SELECT", h = !1;
    if (Ir(() => {
      var L = e(...v.map(t)), z = as(r, p, L, l, d);
      h && R && "value" in L && pa(
        /** @type {HTMLSelectElement} */
        r,
        L.value
      );
      for (let f of Object.getOwnPropertySymbols(y))
        L[f] || Ut(y[f]);
      for (let f of Object.getOwnPropertySymbols(L)) {
        var M = L[f];
        f.description === ji && (!p || M !== p[f]) && (y[f] && Ut(y[f]), y[f] = dr(() => Ql(r, () => M))), z[f] = M;
      }
      p = z;
    }), R) {
      var I = (
        /** @type {HTMLSelectElement} */
        r
      );
      fr(() => {
        pa(
          I,
          /** @type {Record<string | symbol, any>} */
          p.value,
          !0
        ), Bo(I);
      });
    }
    h = !0;
  });
}
function La(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [Fo]: r.nodeName.includes("-"),
      [Ho]: r.namespaceURI === Li
    }
  );
}
var Fn = /* @__PURE__ */ new Map();
function Vo(r) {
  var e = Fn.get(r.nodeName);
  if (e) return e;
  Fn.set(r.nodeName, e = []);
  for (var a, n = r, l = Element.prototype; l !== n; ) {
    a = $n(n);
    for (var d in a)
      a[d].set && e.push(d);
    n = rn(n);
  }
  return e;
}
const ns = Qn ? () => performance.now() : () => Date.now(), or = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => (Qn ? requestAnimationFrame : Nt)(r)
  ),
  now: () => ns(),
  tasks: /* @__PURE__ */ new Set()
};
function Go() {
  const r = or.now();
  or.tasks.forEach((e) => {
    e.c(r) || (or.tasks.delete(e), e.f());
  }), or.tasks.size !== 0 && or.tick(Go);
}
function os(r) {
  let e;
  return or.tasks.size === 0 && or.tick(Go), {
    promise: new Promise((a) => {
      or.tasks.add(e = { c: r, f: a });
    }),
    abort() {
      or.tasks.delete(e);
    }
  };
}
function na(r, e) {
  Ia(() => {
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
function Hn(r) {
  const e = {}, a = r.split(";");
  for (const n of a) {
    const [l, d] = n.split(":");
    if (!l || d === void 0) break;
    const v = is(l.trim());
    e[v] = d.trim();
  }
  return e;
}
const ls = (r) => r;
function $e(r, e, a, n) {
  var l = (r & Ti) !== 0, d = (r & Mi) !== 0, v = l && d, p = (r & Ai) !== 0, y = v ? "both" : l ? "in" : "out", R, h = e.inert, I = e.style.overflow, L, z;
  function M() {
    return Ia(() => R ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: y
    }));
  }
  var f = {
    is_global: p,
    in() {
      if (e.inert = h, !l) {
        z?.abort(), z?.reset?.();
        return;
      }
      d || L?.abort(), na(e, "introstart"), L = $a(e, M(), z, 1, () => {
        na(e, "introend"), L?.abort(), L = R = void 0, e.style.overflow = I;
      });
    },
    out(E) {
      if (!d) {
        E?.(), R = void 0;
        return;
      }
      e.inert = !0, na(e, "outrostart"), z = $a(e, M(), L, 0, () => {
        na(e, "outroend"), E?.();
      });
    },
    stop: () => {
      L?.abort(), z?.abort();
    }
  }, q = (
    /** @type {Effect} */
    it
  );
  if ((q.transitions ??= []).push(f), l && Ro) {
    var ee = p;
    if (!ee) {
      for (var _ = (
        /** @type {Effect | null} */
        q.parent
      ); _ && (_.f & Ar) !== 0; )
        for (; (_ = _.parent) && (_.f & Fr) === 0; )
          ;
      ee = !_ || (_.f & ka) !== 0;
    }
    ee && fr(() => {
      Lr(() => f.in());
    });
  }
}
function $a(r, e, a, n, l) {
  var d = n === 1;
  if (qi(e)) {
    var v, p = !1;
    return ta(() => {
      if (!p) {
        var q = e({ direction: d ? "in" : "out" });
        v = $a(r, q, a, n, l);
      }
    }), {
      abort: () => {
        p = !0, v?.abort();
      },
      deactivate: () => v.deactivate(),
      reset: () => v.reset(),
      t: () => v.t()
    };
  }
  if (a?.deactivate(), !e?.duration)
    return l(), {
      abort: Nt,
      deactivate: Nt,
      reset: Nt,
      t: () => n
    };
  const { delay: y = 0, css: R, tick: h, easing: I = ls } = e;
  var L = [];
  if (d && a === void 0 && (h && h(0, 1), R)) {
    var z = Hn(R(0, 1));
    L.push(z, z);
  }
  var M = () => 1 - n, f = r.animate(L, { duration: y, fill: "forwards" });
  return f.onfinish = () => {
    f.cancel();
    var q = a?.t() ?? 1 - n;
    a?.abort();
    var ee = n - q, _ = (
      /** @type {number} */
      e.duration * Math.abs(ee)
    ), E = [];
    if (_ > 0) {
      var B = !1;
      if (R)
        for (var F = Math.ceil(_ / 16.666666666666668), j = 0; j <= F; j += 1) {
          var V = q + ee * I(j / F), O = Hn(R(V, 1 - V));
          E.push(O), B ||= O.overflow === "hidden";
        }
      B && (r.style.overflow = "hidden"), M = () => {
        var P = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          f.currentTime
        );
        return q + ee * I(P / _);
      }, h && os(() => {
        if (f.playState !== "running") return !1;
        var P = M();
        return h(P, 1 - P), !0;
      });
    }
    f = r.animate(E, { duration: _, fill: "forwards" }), f.onfinish = () => {
      M = () => n, h?.(n, 1 - n), l();
    };
  }, {
    abort: () => {
      f && (f.cancel(), f.effect = null, f.onfinish = Nt);
    },
    deactivate: () => {
      l = Nt;
    },
    reset: () => {
      n === 0 && h?.(1, 0);
    },
    t: () => M()
  };
}
function pr(r, e, a = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Do(r, "input", (l) => {
    Ye && r.type === "checkbox" && Cn();
    var d = l ? r.defaultValue : r.value;
    if (d = Ga(r) ? Ua(d) : d, a(d), xt !== null && n.add(xt), d !== (d = e())) {
      var v = r.selectionStart, p = r.selectionEnd;
      r.value = d ?? "", p !== null && (r.selectionStart = v, r.selectionEnd = Math.min(p, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Lr(e) == null && r.value && (a(Ga(r) ? Ua(r.value) : r.value), xt !== null && n.add(xt)), Ma(() => {
    Ye && r.type === "checkbox" && Cn();
    var l = e();
    if (r === document.activeElement) {
      var d = (
        /** @type {Batch} */
        la ?? xt
      );
      if (n.has(d))
        return;
    }
    Ga(r) && l === Ua(r.value) || r.type === "date" && !l && !r.value || l !== r.value && (r.value = l ?? "");
  });
}
function ss(r, e, a = e) {
  Do(r, "change", (n) => {
    var l = n ? r.defaultChecked : r.checked;
    a(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Lr(e) == null && a(r.checked), Ma(() => {
    var n = e();
    r.checked = !!n;
  });
}
function Ga(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function Ua(r) {
  return r === "" ? null : +r;
}
function Vn(r, e) {
  return r === e || r?.[ir] === e;
}
function tt(r = {}, e, a, n) {
  return fr(() => {
    var l, d;
    return Ma(() => {
      l = d, d = [], Lr(() => {
        r !== a(...d) && (e(r, ...d), l && Vn(a(...l), r) && e(null, ...l));
      });
    }), () => {
      ta(() => {
        d && Vn(a(...d), r) && e(null, ...d);
      });
    };
  }), r;
}
function Uo(r, e, a) {
  if (r == null)
    return e(void 0), Nt;
  const n = Lr(
    () => r.subscribe(
      e,
      // @ts-expect-error
      a
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Dr = [];
function hn(r, e = Nt) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function l(p) {
    if (sn(r, p) && (r = p, a)) {
      const y = !Dr.length;
      for (const R of n)
        R[1](), Dr.push(R, r);
      if (y) {
        for (let R = 0; R < Dr.length; R += 2)
          Dr[R][0](Dr[R + 1]);
        Dr.length = 0;
      }
    }
  }
  function d(p) {
    l(p(
      /** @type {T} */
      r
    ));
  }
  function v(p, y = Nt) {
    const R = [p, y];
    return n.add(R), n.size === 1 && (a = e(l, d) || Nt), p(
      /** @type {T} */
      r
    ), () => {
      n.delete(R), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: l, update: d, subscribe: v };
}
function Yo(r) {
  let e;
  return Uo(r, (a) => e = a)(), e;
}
let oa = !1, en = Symbol();
function Wo(r, e, a) {
  const n = a[e] ??= {
    store: null,
    source: /* @__PURE__ */ po(void 0),
    unsubscribe: Nt
  };
  if (Ye && (n.source.label = e), n.store !== r && !(en in a))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = Nt;
    else {
      var l = !0;
      n.unsubscribe = Uo(r, (d) => {
        l ? n.source.v = d : W(n.source, d);
      }), l = !1;
    }
  return r && en in a ? Yo(r) : t(n.source);
}
function Ko() {
  const r = {};
  function e() {
    bn(() => {
      for (var a in r)
        r[a].unsubscribe();
      mr(r, en, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [r, e];
}
function ds(r) {
  var e = oa;
  try {
    return oa = !1, [r(), oa];
  } finally {
    oa = e;
  }
}
const cs = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return Ye && el(`${r.name}.${String(e)}`), !1;
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
function dt(r, e, a) {
  return new Proxy(
    Ye ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] } : { props: r, exclude: e },
    cs
  );
}
function s(r, e, a, n) {
  var l = (a & Ei) !== 0, d = (a & Si) !== 0, v = (
    /** @type {V} */
    n
  ), p = !0, y = () => (p && (p = !1, v = d ? Lr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), v), R;
  if (l) {
    var h = ir in r || Vi in r;
    R = Wr(r, e)?.set ?? (h && e in r ? (_) => r[e] = _ : void 0);
  }
  var I, L = !1;
  l ? [I, L] = ds(() => (
    /** @type {V} */
    r[e]
  )) : I = /** @type {V} */
  r[e], I === void 0 && n !== void 0 && (I = y(), R && ($i(e), R(I)));
  var z;
  if (z = () => {
    var _ = (
      /** @type {V} */
      r[e]
    );
    return _ === void 0 ? y() : (p = !0, _);
  }, (a & Ci) === 0)
    return z;
  if (R) {
    var M = r.$$legacy;
    return function(_, E) {
      return arguments.length > 0 ? ((!E || M || L) && R(E ? z() : _), _) : z();
    };
  }
  var f = !1, q = ((a & ki) !== 0 ? Ea : fo)(() => (f = !1, z()));
  Ye && (q.label = e), l && t(q);
  var ee = (
    /** @type {Effect} */
    it
  );
  return function(_, E) {
    if (arguments.length > 0) {
      const B = E ? t(q) : l ? st(_) : _;
      return W(q, B), f = !0, v !== void 0 && (v = B), _;
    }
    return Pr && f || (ee.f & Mr) !== 0 ? q.v : t(q);
  };
}
function Z(...r) {
  return r.filter(Boolean).join(" ");
}
const ft = (r, e) => {
  let a = { enabled: !0, strength: 0.1, scale: 1.02, ...e };
  function n(d) {
    if (!a.enabled) return;
    const v = r.getBoundingClientRect(), p = (d.clientX - v.left) / v.width - 0.5, y = (d.clientY - v.top) / v.height - 0.5;
    r.style.transform = `translate(${p * (a.strength ?? 0.1) * 20}px, ${y * (a.strength ?? 0.1) * 20}px) scale(${a.scale ?? 1.02})`;
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
}, At = (r, e) => {
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
function Yt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, scale: l = 0.98 } = e;
  return {
    duration: a,
    delay: n,
    css: (d) => `transform: scale(${l + (1 - l) * d});`
  };
}
function mt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, direction: l = "up", distance: d = 10, opacity: v = "light" } = e, p = l === "up" ? d : l === "down" ? -d : 0, y = v === "strong" ? 1 : v === "medium" ? 0.9 : v === "subtle" ? 0.8 : 0.7;
  return {
    duration: a,
    delay: n,
    css: (R) => `transform: translateY(${(1 - R) * p}px); opacity: ${R * y};`
  };
}
const jt = (r, e) => {
  let a = 0, n = { enabled: !0, intensity: 0.02, speed: 3e3, ...e };
  const l = (d) => {
    if (!n.enabled) {
      a = requestAnimationFrame(l);
      return;
    }
    const v = 1 + Math.sin(d / (n.speed ?? 3e3) * Math.PI * 2) * (n.intensity ?? 0.02);
    r.style.transform = `scale(${v})`, a = requestAnimationFrame(l);
  };
  return a = requestAnimationFrame(l), {
    update(d) {
      n = { ...n, ...d };
    },
    destroy() {
      cancelAnimationFrame(a), r.style.transform = "";
    }
  };
}, xa = At, vs = /* @__PURE__ */ new Map();
function Qt(r, e) {
  if (typeof window < "u" && process.env.NODE_ENV === "development") {
    const a = {
      name: r,
      size: e,
      timestamp: Date.now()
    };
    vs.set(r, a), console.log(`📦 Bundle: ${r} (${e})`);
  }
}
var us = (r, e, a) => e(t(a).id), fs = (r, e, a) => e(r, t(a).id), bs = /* @__PURE__ */ c('<p class="svelte-1neysev">No content available</p>'), gs = /* @__PURE__ */ c('<div role="region"><!></div>'), ms = /* @__PURE__ */ c('<div><button type="button"><span class="text-left svelte-1neysev"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-1neysev"></path></svg></button> <!></div>'), hs = /* @__PURE__ */ c("<div></div>");
const ps = {
  hash: "svelte-1neysev",
  code: `button[aria-expanded].svelte-1neysev {will-change:transform;}svg.svelte-1neysev {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-1neysev {transition:none;
			animation: none;will-change:auto;}
	}`
};
function D1(r, e) {
  Ke(e, !0), Qe(r, ps);
  const a = s(e, "items", 19, () => []), n = s(e, "multiple", 3, !1), l = s(e, "collapsible", 3, !0), d = s(e, "variant", 3, "glass"), v = s(e, "size", 3, "md"), p = s(e, "blur", 3, "md"), y = s(e, "animate", 3, !0), R = s(e, "reduceMotion", 3, !1), h = s(e, "defaultOpen", 19, () => []), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  let z = /* @__PURE__ */ ye(st(new Set(h())));
  const M = `accordion-${Math.random().toString(36).substr(2, 9)}`, f = {
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
  }, q = {
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
  }, ee = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };
  function _(Q) {
    if (a().find((T) => T.id === Q)?.disabled) return;
    const D = t(z).has(Q);
    n() ? D ? (l() || t(z).size > 1) && t(z).delete(Q) : t(z).add(Q) : D && l() ? t(z).clear() : (t(z).clear(), t(z).add(Q)), W(z, new Set(t(z)), !0), e.onValueChange?.(Array.from(t(z)));
  }
  function E(Q, G) {
    if (!a().find((T) => T.id === G)?.disabled)
      switch (Q.key) {
        case "Enter":
        case " ":
          Q.preventDefault(), _(G);
          break;
        case "ArrowDown":
          Q.preventDefault(), B(G);
          break;
        case "ArrowUp":
          Q.preventDefault(), F(G);
          break;
        case "Home":
          Q.preventDefault(), j();
          break;
        case "End":
          Q.preventDefault(), V();
          break;
      }
  }
  function B(Q) {
    const G = a().filter((x) => !x.disabled), T = (G.findIndex((x) => x.id === Q) + 1) % G.length, w = G[T];
    O(w.id);
  }
  function F(Q) {
    const G = a().filter((x) => !x.disabled), D = G.findIndex((x) => x.id === Q), T = D === 0 ? G.length - 1 : D - 1, w = G[T];
    O(w.id);
  }
  function j() {
    const Q = a().find((G) => !G.disabled);
    Q && O(Q.id);
  }
  function V() {
    const Q = a().filter((D) => !D.disabled), G = Q[Q.length - 1];
    G && O(G.id);
  }
  function O(Q) {
    document.querySelector(`[data-accordion-header="${Q}"]`)?.focus();
  }
  bt(() => {
    Qt("Accordion", "medium");
  });
  var P = hs();
  Ze(P, (Q) => ({ class: Q, ...L }), [() => Z("w-full space-y-2", I())], void 0, "svelte-1neysev"), Ge(P, 23, a, (Q, G) => Q.id ?? G, (Q, G, D) => {
    const T = /* @__PURE__ */ Ee(() => t(z).has(t(G).id)), w = /* @__PURE__ */ Ee(() => t(D) === 0), x = /* @__PURE__ */ Ee(() => t(D) === a().length - 1), C = /* @__PURE__ */ Ee(() => `${M}-header-${t(G).id}`), X = /* @__PURE__ */ Ee(() => `${M}-content-${t(G).id}`);
    var K = ms(), k = i(K);
    k.__click = [us, _, G], k.__keydown = [fs, E, G];
    var u = i(k), b = i(u), re = m(u, 2);
    Ie(k, (ve, $) => kt?.(ve, $), () => y() && !R() && t(T) ? { blur: p(), opacity: "subtle" } : void 0);
    var de = m(k, 2);
    {
      var ue = (ve) => {
        var $ = gs(), U = i($);
        {
          var oe = (te) => {
            var J = Se(), Y = _e(J);
            ot(Y, () => t(G).content), o(te, J);
          }, S = (te) => {
            var J = Se(), Y = _e(J);
            {
              var le = (ae) => {
                var ce = Se(), se = _e(ce);
                ot(se, () => e.children, () => t(G)), o(ae, ce);
              }, H = (ae) => {
                var ce = bs();
                o(ae, ce);
              };
              g(
                Y,
                (ae) => {
                  e.children ? ae(le) : ae(H, !1);
                },
                !0
              );
            }
            o(te, J);
          };
          g(U, (te) => {
            t(G).content ? te(oe) : te(S, !1);
          });
        }
        A(
          (te) => {
            xe($, "id", t(X)), xe($, "aria-labelledby", t(C)), N($, 1, te, "svelte-1neysev");
          },
          [
            () => ne(Z("border-t border-white/10 transition-all duration-200", f[v()].content, q[d()].content))
          ]
        ), $e(1, $, () => mt, () => ({
          direction: "down",
          distance: 10,
          duration: y() && !R() ? 200 : 0
        })), $e(2, $, () => mt, () => ({
          direction: "up",
          distance: 10,
          duration: y() && !R() ? 150 : 0
        })), o(ve, $);
      };
      g(de, (ve) => {
        t(T) && ve(ue);
      });
    }
    A(
      (ve, $, U) => {
        N(K, 1, ve, "svelte-1neysev"), xe(k, "id", t(C)), N(k, 1, $, "svelte-1neysev"), xe(k, "aria-expanded", t(T)), xe(k, "aria-controls", t(X)), xe(k, "aria-disabled", t(G).disabled), xe(k, "data-accordion-header", t(G).id), k.disabled = t(G).disabled, ie(b, t(G).title), N(re, 0, U, "svelte-1neysev");
      },
      [
        () => ne(Z("overflow-hidden transition-all duration-200", q[d()].container, d() === "glass" && ee[p()], t(w) && "rounded-t-brand-lg", t(x) && "rounded-b-brand-lg", !t(w) && !t(x) && t(D) > 0 && "rounded-none border-t-0")),
        () => ne(Z("w-full flex items-center justify-between transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium cursor-pointer", f[v()].header, q[d()].header, t(G).disabled && "opacity-50 cursor-not-allowed")),
        () => ne(Z("transition-transform duration-200 flex-shrink-0 ml-2", f[v()].icon, t(T) && "rotate-180"))
      ]
    ), o(Q, K);
  }), o(r, P), Xe();
}
vt(["click", "keydown"]);
const xs = (r, e, a) => {
  W(e, !1), a.onclose?.();
};
var _s = /* @__PURE__ */ c("<div><!></div>"), ws = /* @__PURE__ */ c("<h3> </h3>"), ys = /* @__PURE__ */ c("<p> </p>"), ks = /* @__PURE__ */ c('<button aria-label="Close alert"><!></button>'), Cs = /* @__PURE__ */ c('<div><div class="flex items-start gap-3 svelte-yqts08"><!> <div class="flex-1 min-w-0 svelte-yqts08"><!> <!></div> <!></div></div>');
const Es = {
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
function j1(r, e) {
  Ke(e, !0), Qe(r, Es);
  const a = s(e, "variant", 3, "info"), n = s(e, "closable", 3, !1), l = s(e, "animated", 3, !0), d = s(e, "glow", 3, !0), v = s(e, "jelly", 3, !0), p = s(e, "icon", 3, !0), y = s(e, "position", 3, "static"), R = s(e, "placement", 3, "top-right"), h = s(e, "class", 3, ""), I = /* @__PURE__ */ dt(e, [
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
  let L = /* @__PURE__ */ ye(!0);
  const z = {
    success: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400/40",
      text: "text-green-300",
      icon: ci,
      glow: "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
    },
    error: {
      bg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      icon: di,
      glow: "shadow-[0_0_30px_rgba(248,113,113,0.5)]"
    },
    warning: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      icon: wn,
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.5)]"
    },
    info: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/40",
      text: "text-blue-300",
      icon: si,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    terminal: {
      bg: "bg-gray-900/90",
      border: "border-green-400/40",
      text: "text-green-400",
      icon: wn,
      glow: "shadow-[0_0_20px_rgba(74,222,128,0.6)]"
    }
  }, M = {
    top: "top-4 left-1/2 -translate-x-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  }, f = z[a()], q = f.icon;
  var ee = Se(), _ = _e(ee);
  {
    var E = (B) => {
      var F = Cs();
      Ze(
        F,
        (C) => ({ class: C, ...I }),
        [
          () => Z("backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300", f.bg, f.border, d() && f.glow, y() === "fixed" && "fixed z-50", y() === "fixed" && M[R()], l() && "transform-gpu will-change-transform", h())
        ],
        void 0,
        "svelte-yqts08"
      );
      var j = i(F), V = i(j);
      {
        var O = (C) => {
          var X = _s(), K = i(X);
          q(K, { size: 20 }), A((k) => N(X, 1, k, "svelte-yqts08"), [
            () => ne(Z("flex-shrink-0 mt-0.5", f.text, l() && "animate-pulse"))
          ]), o(C, X);
        };
        g(V, (C) => {
          p() && C(O);
        });
      }
      var P = m(V, 2), Q = i(P);
      {
        var G = (C) => {
          var X = ws(), K = i(X);
          A(
            (k) => {
              N(X, 1, k, "svelte-yqts08"), ie(K, e.title);
            },
            [
              () => ne(Z("font-semibold text-base", f.text))
            ]
          ), o(C, X);
        };
        g(Q, (C) => {
          e.title && C(G);
        });
      }
      var D = m(Q, 2);
      {
        var T = (C) => {
          var X = ys(), K = i(X);
          A(
            (k) => {
              N(X, 1, k, "svelte-yqts08"), ie(K, e.description);
            },
            [
              () => ne(Z("text-sm mt-1 opacity-80", f.text))
            ]
          ), o(C, X);
        };
        g(D, (C) => {
          e.description && C(T);
        });
      }
      var w = m(P, 2);
      {
        var x = (C) => {
          var X = ks();
          X.__click = [xs, L, e];
          var K = i(X);
          sa(K, { size: 16 }), A((k) => N(X, 1, k, "svelte-yqts08"), [
            () => ne(Z("flex-shrink-0 p-1 rounded-lg transition-all duration-200", "hover:bg-white/10 hover:scale-110", f.text, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]), o(C, X);
        };
        g(w, (C) => {
          n() && C(x);
        });
      }
      Ie(F, (C, X) => jellyHover?.(C, X), () => ({
        enabled: v(),
        scale: 1.02,
        duration: 200,
        borderRadius: "16px"
      })), $e(3, F, () => mt, () => ({ duration: l() ? 300 : 0 })), o(B, F);
    };
    g(_, (B) => {
      t(L) && B(E);
    });
  }
  o(r, ee), Xe();
}
vt(["click"]);
var Ss = /* @__PURE__ */ c("<button><!></button>"), Ts = /* @__PURE__ */ c("<span><!></span>"), Ms = /* @__PURE__ */ c("<button><!></button>"), As = /* @__PURE__ */ c("<span><!></span>");
const zs = {
  hash: "svelte-17ytdye",
  code: `button.svelte-17ytdye {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {button.svelte-17ytdye,
		span.svelte-17ytdye {transition:none;
			animation: none;}
	}`
};
function R1(r, e) {
  Ke(e, !0), Qe(r, zs);
  const a = s(e, "variant", 3, "default"), n = s(e, "size", 3, "md"), l = s(e, "glass", 3, !0), d = s(e, "blur", 3, "md"), v = s(e, "interactive", 3, !1), p = s(e, "animate", 3, !0), y = s(e, "reduceMotion", 3, !1), R = s(e, "class", 3, ""), h = /* @__PURE__ */ dt(e, [
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
  ]), I = {
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
  }, z = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, M = "inline-flex items-center justify-center rounded-full border transition-all duration-200", f = l() ? `glass-subtle ${z[d()]}` : "", q = v() ? "cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent" : "", ee = Z(M, I[a()], L[n()], f, q, R());
  function _(V) {
    v() && (V.key === "Enter" || V.key === " ") && (V.preventDefault(), V.currentTarget?.dispatchEvent(new CustomEvent("click", { bubbles: !0 })));
  }
  bt(() => {
    Qt("Badge", "small");
  });
  var E = Se(), B = _e(E);
  {
    var F = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (D) => {
          var T = Ss();
          Ze(
            T,
            () => ({
              class: ee,
              type: "button",
              "aria-label": h["aria-label"] || `${a()} badge`,
              onkeydown: _,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var w = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(w, (C) => {
              e.children && C(x);
            });
          }
          Ie(T, (C, X) => kt?.(C, X), () => ({ blur: d(), opacity: "subtle" })), o(D, T);
        }, G = (D) => {
          var T = Ts();
          Ze(
            T,
            () => ({
              class: ee,
              role: "status",
              "aria-label": h["aria-label"] || `${a()} badge`,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var w = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(w, (C) => {
              e.children && C(x);
            });
          }
          $e(1, T, () => mt, () => ({ direction: "up", distance: 10 })), o(D, T);
        };
        g(P, (D) => {
          v() ? D(Q) : D(G, !1);
        });
      }
      o(V, O);
    }, j = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (D) => {
          var T = Ms();
          Ze(
            T,
            () => ({
              class: ee,
              type: "button",
              "aria-label": h["aria-label"] || `${a()} badge`,
              onkeydown: _,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var w = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(w, (C) => {
              e.children && C(x);
            });
          }
          o(D, T);
        }, G = (D) => {
          var T = As();
          Ze(
            T,
            () => ({
              class: ee,
              role: "status",
              "aria-label": h["aria-label"] || `${a()} badge`,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var w = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(w, (C) => {
              e.children && C(x);
            });
          }
          o(D, T);
        };
        g(
          P,
          (D) => {
            v() ? D(Q) : D(G, !1);
          },
          !0
        );
      }
      o(V, O);
    };
    g(B, (V) => {
      p() && !y() ? V(F) : V(j, !1);
    });
  }
  o(r, E), Xe();
}
const Me = {
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
}, Ds = {
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
}, js = {
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
}, Da = {
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
    primary: Me.terminal.green,
    secondary: Me.terminal.cyan,
    accent: Me.terminal.blue,
    success: Me.semantic.success,
    warning: Me.semantic.warning,
    error: Me.semantic.error,
    info: Me.semantic.info
  },
  gradients: Me.gradients,
  borderRadius: Da.themes.terminal
}, qs = {
  colors: {
    primary: Me.bubbleTea.primary,
    // WCAG AA compliant #ff85b3
    secondary: Me.bubbleTea.secondary,
    // WCAG AA compliant #d666ff
    accent: Me.bubbleTea.accent,
    // WCAG AA compliant #66c3ff
    success: Me.bubbleTea.success,
    warning: Me.bubbleTea.warning,
    error: Me.bubbleTea.error,
    // WCAG AA compliant #ff8585
    info: Me.bubbleTea.info
  },
  gradients: Me.bubbleTeaGradients,
  borderRadius: Da.themes.bubbleTea
}, N1 = {
  colors: Me,
  typography: Is,
  spacing: Ps,
  effects: Ls,
  shadows: Ds,
  animations: js,
  sizes: Rs,
  borderRadius: Da,
  zIndex: Ns,
  themes: {
    terminal: Os,
    bubbleTea: qs
  }
}, Tt = typeof window < "u";
function Xo(r) {
  if (!Tt) return null;
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}
function Yr(r, e) {
  if (Tt)
    try {
      localStorage.setItem(r, e);
    } catch (a) {
      console.warn(`Failed to save ${r} to localStorage:`, a);
    }
}
function Zo(r) {
  if (Tt)
    try {
      localStorage.removeItem(r);
    } catch (e) {
      console.warn(`Failed to remove ${r} from localStorage:`, e);
    }
}
const ia = {
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
}, jr = {
  terminal: {
    name: "terminal",
    displayName: "Terminal",
    description: "Hacker aesthetic with green matrix colors and sharp edges",
    colors: ia.terminal,
    highContrastColors: {
      ...ia.terminal,
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
    colors: ia.bubbleTea,
    highContrastColors: {
      ...ia.bubbleTea,
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
    if (!Tt) return "terminal";
    const y = Xo("ahb-theme");
    return y === "terminal" || y === "bubbleTea" || y === "auto" ? y : "auto";
  }, e = (y) => y === "auto" ? Jo() : y, a = r();
  let n = a;
  const { subscribe: l, set: d, update: v } = hn(e(a), (y) => {
    let R = null;
    const h = (I) => {
      if (Tt) {
        const L = document.documentElement.classList;
        L.remove("theme-terminal", "theme-bubble-tea");
        const z = `theme-${I === "bubbleTea" ? "bubble-tea" : I}`;
        L.add(z);
        const M = Ya(I);
        Object.entries(M).forEach(([f, q]) => {
          document.documentElement.style.setProperty(f, q);
        });
      }
      y(I);
    };
    return h(e(a)), a === "auto" && Tt && (R = Un((I) => {
      n === "auto" && h(I);
    })), () => {
      R && R();
    };
  }), p = {
    subscribe: l,
    getUserTheme: () => n,
    set: (y) => {
      n = y;
      const R = e(y);
      if (Tt) {
        Yr("ahb-theme", y), document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${R === "bubbleTea" ? "bubble-tea" : R}`);
        const h = Ya(R);
        if (Object.entries(h).forEach(([I, L]) => {
          document.documentElement.style.setProperty(I, L);
        }), y === "auto") {
          const I = Un((L) => {
            if (n === "auto") {
              document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${L === "bubbleTea" ? "bubble-tea" : L}`);
              const z = Ya(L);
              Object.entries(z).forEach(([M, f]) => {
                document.documentElement.style.setProperty(M, f);
              }), d(L);
            }
          });
          p._systemWatcherCleanup = I;
        } else
          p._systemWatcherCleanup && (p._systemWatcherCleanup(), p._systemWatcherCleanup = null);
      }
      d(R);
    },
    toggle: () => {
      const y = ["terminal", "bubbleTea", "auto"], R = y.indexOf(n), h = y[(R + 1) % y.length];
      p.set(h);
    },
    setTerminal: () => p.set("terminal"),
    setBubbleTea: () => p.set("bubbleTea"),
    setAuto: () => p.set("auto"),
    reset: () => {
      Tt && Zo("ahb-theme"), p.set("auto");
    }
  };
  return p;
}
const cr = Bs();
function Fs() {
  const e = (() => {
    if (!Tt) return "normal";
    const v = Xo("ahb-contrast-mode");
    return v === "normal" || v === "high" ? v : Tt && window.matchMedia?.("(prefers-contrast: high)").matches ? "high" : "normal";
  })(), { subscribe: a, set: n, update: l } = hn(e), d = (v) => {
    Tt && (document.documentElement.classList.remove("contrast-normal", "contrast-high"), document.documentElement.classList.add(`contrast-${v}`));
  };
  return d(e), {
    subscribe: a,
    set: (v) => {
      Tt && (Yr("ahb-contrast-mode", v), d(v)), n(v);
    },
    toggle: () => {
      l((v) => {
        const p = v === "normal" ? "high" : "normal";
        return Tt && (Yr("ahb-contrast-mode", p), d(p)), p;
      });
    },
    setNormal: () => {
      const v = "normal";
      Tt && (Yr("ahb-contrast-mode", v), d(v)), n(v);
    },
    setHigh: () => {
      const v = "high";
      Tt && (Yr("ahb-contrast-mode", v), d(v)), n(v);
    },
    reset: () => {
      const v = "normal";
      Tt && (Zo("ahb-contrast-mode"), d(v)), n(v);
    }
  };
}
const Hs = Fs(), Qo = {
  subscribe: (r) => {
    let e = "terminal", a = "normal";
    const n = cr.subscribe((v) => {
      e = v, d();
    }), l = Hs.subscribe((v) => {
      a = v, d();
    });
    function d() {
      const v = jr[e], p = a === "high" ? v.highContrastColors : v.colors, y = cr.getUserTheme();
      r({
        ...v,
        currentColors: p,
        userTheme: y,
        resolvedTheme: e
      });
    }
    return d(), () => {
      n(), l();
    };
  }
};
function Ya(r, e = "normal") {
  const a = jr[r], n = e === "high" ? a.highContrastColors : a.colors, l = Da.themes[r], d = {};
  return l && Object.entries(l).forEach(([v, p]) => {
    d[`--radius-${v}`] = p;
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
function Gn(r) {
  return r === "auto";
}
function Vs(r, e) {
  return r === "auto" ? {
    displayName: `Auto (${jr[e].displayName})`,
    description: `Automatically follows system preference. Currently: ${jr[e].displayName}`,
    isAuto: !0
  } : {
    displayName: jr[r].displayName,
    description: jr[r].description,
    isAuto: !1
  };
}
function Jo() {
  if (!Tt || !window.matchMedia)
    return "terminal";
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = window.matchMedia("(prefers-color-scheme: light)");
  return r.matches ? "terminal" : e.matches ? "bubbleTea" : "terminal";
}
function Un(r) {
  if (!Tt || !window.matchMedia)
    return () => {
    };
  const e = window.matchMedia("(prefers-color-scheme: dark)"), a = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
    const l = Jo();
    r(l);
  };
  return e.addEventListener ? (e.addEventListener("change", n), a.addEventListener("change", n), () => {
    e.removeEventListener("change", n), a.removeEventListener("change", n);
  }) : e.addListener ? (e.addListener(n), a.addListener(n), () => {
    e.removeListener?.(n), a.removeListener?.(n);
  }) : () => {
  };
}
function ja() {
  return Yo(Qo).resolvedTheme;
}
function Gs(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (ja()) {
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
  switch (ja()) {
    case "terminal":
      return "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20";
    case "bubbleTea":
      return "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono";
    default:
      return "glass-subtle border border-white/20 shadow-lg hover:shadow-xl";
  }
}
function $o(r, e) {
  return r !== "auto" && r !== "theme" ? "" : ja() === "bubbleTea" ? e && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[e] || "rounded-bubble-tea" : "";
}
function ei() {
  switch (ja()) {
    case "terminal":
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    case "bubbleTea":
      return "focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    default:
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  }
}
var Ys = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Ws = /* @__PURE__ */ c("<button><!> <!></button>"), Ks = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Xs = /* @__PURE__ */ c("<button><!> <!></button>");
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
function er(r, e) {
  Ke(e, !0), Qe(r, Zs);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "loading", 3, !1), d = s(e, "icon", 3, !1), v = s(e, "animate", 3, !0), p = s(e, "jelly", 3, !0), y = s(e, "liquid", 3, !1), R = s(e, "class", 3, ""), h = s(e, "disabled", 3, !1), I = /* @__PURE__ */ dt(e, [
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
  ]), L = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Gs(a()) : z[a()] || z.default), z = {
    default: "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    secondary: "bg-gradient-to-r from-terminal-purple to-terminal-pink hover:from-terminal-purple/90 hover:to-terminal-pink/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    outline: "border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/80 backdrop-blur-sm",
    ghost: "hover:bg-terminal-green/10 text-terminal-green hover:text-terminal-green/90 backdrop-blur-sm",
    glass: "glass-medium glass-shimmer hover:glass-heavy text-white border border-white/20 shadow-2xl",
    "glass-dark": "glass-heavy border-terminal-green/30 hover:border-terminal-green/60 text-terminal-green shadow-2xl backdrop-blur-xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/5 hover:border-terminal-green/80 shadow-lg hover:shadow-terminal-green/20",
    liquid: "bg-gradient-to-br from-terminal-cyan/20 via-terminal-blue/20 to-terminal-purple/20 border border-white/30 text-white backdrop-blur-lg hover:from-terminal-cyan/30 hover:via-terminal-blue/30 hover:to-terminal-purple/30",
    bubbleTea: "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono"
  }, M = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl"
  }, f = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? $o(a(), n()) : a() === "bubbleTea" && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[n()] || ""), q = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? ei() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"), ee = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none will-change-transform", _ = d() ? "aspect-square !p-0" : "", E = /* @__PURE__ */ Ee(() => () => Z(ee, t(L)(), M[n()], t(f)(), t(q)(), _, l() && "cursor-wait", R()));
  var B = Se(), F = _e(B);
  {
    var j = (O) => {
      var P = Ws();
      Ze(
        P,
        (w) => ({
          class: w,
          disabled: h(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...I
        }),
        [() => t(E)()],
        void 0,
        "svelte-16dveyh"
      );
      var Q = i(P);
      {
        var G = (w) => {
          var x = Ys();
          o(w, x);
        };
        g(Q, (w) => {
          l() && w(G);
        });
      }
      var D = m(Q, 2);
      {
        var T = (w) => {
          var x = Se(), C = _e(x);
          ot(C, () => e.children), o(w, x);
        };
        g(D, (w) => {
          e.children && w(T);
        });
      }
      Ie(P, (w, x) => At?.(w, x), () => ({
        enabled: !h() && !l() && p(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Ie(P, (w, x) => xa?.(w, x), () => ({ enabled: !h() && !l() && y() })), Ie(P, (w, x) => ft?.(w, x), () => ({
        enabled: !h() && !l() && !p() && !y(),
        strength: 0.15,
        scale: 1.02
      })), $e(1, P, () => Yt, () => ({
        duration: 200,
        bounce: a().includes("glass") || a() === "liquid"
      })), o(O, P);
    }, V = (O) => {
      var P = Xs();
      Ze(
        P,
        (w) => ({
          class: w,
          disabled: h(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...I
        }),
        [() => t(E)()],
        void 0,
        "svelte-16dveyh"
      );
      var Q = i(P);
      {
        var G = (w) => {
          var x = Ks();
          o(w, x);
        };
        g(Q, (w) => {
          l() && w(G);
        });
      }
      var D = m(Q, 2);
      {
        var T = (w) => {
          var x = Se(), C = _e(x);
          ot(C, () => e.children), o(w, x);
        };
        g(D, (w) => {
          e.children && w(T);
        });
      }
      Ie(P, (w, x) => At?.(w, x), () => ({
        enabled: !h() && !l() && p(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : a() === "bubbleTea" ? 1.06 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Ie(P, (w, x) => xa?.(w, x), () => ({ enabled: !h() && !l() && y() })), Ie(P, (w, x) => ft?.(w, x), () => ({
        enabled: !h() && !l() && !p() && !y(),
        strength: 0.15,
        scale: 1.02
      })), o(O, P);
    };
    g(F, (O) => {
      v() ? O(j) : O(V, !1);
    });
  }
  o(r, B), Xe();
}
var Qs = /* @__PURE__ */ c("<div><!></div>"), Js = /* @__PURE__ */ c("<div><!></div>"), $s = /* @__PURE__ */ c("<div><!></div>"), ed = /* @__PURE__ */ c("<div><!></div>");
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
function O1(r, e) {
  Ke(e, !0), Qe(r, td);
  const a = s(e, "variant", 3, "auto"), n = s(e, "blur", 3, "md"), l = s(e, "interactive", 3, !1), d = s(e, "animate", 3, !0), v = s(e, "jelly", 3, !0), p = s(e, "liquid", 3, !1), y = s(e, "breathing", 3, !1), R = s(e, "class", 3, ""), h = /* @__PURE__ */ dt(e, [
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
  ]), I = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Us(a()) : L[a()] || L.default), L = {
    default: "glass-subtle border border-white/20 shadow-lg hover:shadow-xl",
    glass: "glass-medium border border-white/30 shadow-xl hover:shadow-2xl",
    "glass-subtle": "glass-subtle border border-white/10 shadow-md hover:shadow-lg",
    "glass-heavy": "glass-heavy border border-white/40 shadow-2xl hover:shadow-3xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20",
    liquid: "glass-medium border border-terminal-cyan/30 shadow-2xl shadow-terminal-cyan/10 hover:border-terminal-cyan/50 backdrop-blur-xl",
    jelly: "glass-subtle border border-terminal-purple/20 shadow-lg hover:shadow-xl hover:border-terminal-purple/40",
    bubbleTea: "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono"
  }, z = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, M = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? $o(a()) || "rounded-2xl" : a() === "bubbleTea" ? "rounded-bubble-tea-lg" : "rounded-2xl"), f = /* @__PURE__ */ Ee(() => () => l() ? a() === "auto" || a() === "theme" ? ei() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" : ""), q = "p-6 transition-all duration-300 will-change-transform", ee = l() ? "cursor-pointer" : "", _ = /* @__PURE__ */ Ee(() => () => Z(q, t(I)(), t(M)(), typeof a() == "string" && a().includes("glass") && z[n()], ee, t(f)(), R()));
  var E = Se(), B = _e(E);
  {
    var F = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (D) => {
          var T = Qs(), w = (X) => {
            (X.key === "Enter" || X.key === " ") && (X.preventDefault(), X.currentTarget.click());
          };
          Ze(
            T,
            (X) => ({
              class: X,
              role: "button",
              tabindex: "0",
              onkeydown: w,
              ...h
            }),
            [() => t(_)()],
            void 0,
            "svelte-j9s7zz"
          );
          var x = i(T);
          {
            var C = (X) => {
              var K = Se(), k = _e(K);
              ot(k, () => e.children), o(X, K);
            };
            g(x, (X) => {
              e.children && X(C);
            });
          }
          Ie(T, (X, K) => At?.(X, K), () => ({
            enabled: v(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : a() === "bubbleTea" ? 1.04 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Ie(T, (X, K) => xa?.(X, K), () => ({ enabled: p(), liquidIntensity: 1, morphStrength: 0.3 })), Ie(T, (X, K) => jt?.(X, K), () => ({ enabled: y(), intensity: 0.015, speed: 3500 })), Ie(T, (X, K) => ft?.(X, K), () => ({ enabled: !v() && !p(), strength: 0.2, scale: 1.02 })), $e(1, T, () => kt, () => ({ blur: n(), opacity: "medium" })), o(D, T);
        }, G = (D) => {
          var T = Js();
          Ze(T, (C) => ({ class: C, ...h }), [() => t(_)()], void 0, "svelte-j9s7zz");
          var w = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(w, (C) => {
              e.children && C(x);
            });
          }
          Ie(T, (C, X) => At?.(C, X), () => ({
            enabled: v() && l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "var(--radius-xl)",
            responsiveness: "subtle"
          })), Ie(T, (C, X) => jt?.(C, X), () => ({ enabled: y(), intensity: 0.01, speed: 4e3 })), $e(1, T, () => kt, () => ({ blur: n(), opacity: "subtle" })), o(D, T);
        };
        g(P, (D) => {
          l() ? D(Q) : D(G, !1);
        });
      }
      o(V, O);
    }, j = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (D) => {
          var T = $s(), w = (X) => {
            (X.key === "Enter" || X.key === " ") && (X.preventDefault(), X.currentTarget.click());
          };
          Ze(
            T,
            (X) => ({
              class: X,
              role: "button",
              tabindex: "0",
              onkeydown: w,
              ...h
            }),
            [() => t(_)()],
            void 0,
            "svelte-j9s7zz"
          );
          var x = i(T);
          {
            var C = (X) => {
              var K = Se(), k = _e(K);
              ot(k, () => e.children), o(X, K);
            };
            g(x, (X) => {
              e.children && X(C);
            });
          }
          Ie(T, (X, K) => At?.(X, K), () => ({
            enabled: v(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Ie(T, (X, K) => xa?.(X, K), () => ({ enabled: p(), liquidIntensity: 1, morphStrength: 0.3 })), Ie(T, (X, K) => jt?.(X, K), () => ({ enabled: y(), intensity: 0.015, speed: 3500 })), Ie(T, (X, K) => ft?.(X, K), () => ({ enabled: !v() && !p(), strength: 0.2, scale: 1.02 })), o(D, T);
        }, G = (D) => {
          var T = ed();
          Ze(T, (C) => ({ class: C, ...h }), [() => t(_)()], void 0, "svelte-j9s7zz");
          var w = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(w, (C) => {
              e.children && C(x);
            });
          }
          Ie(T, (C, X) => jt?.(C, X), () => ({ enabled: y(), intensity: 0.01, speed: 4e3 })), o(D, T);
        };
        g(
          P,
          (D) => {
            l() ? D(Q) : D(G, !1);
          },
          !0
        );
      }
      o(V, O);
    };
    g(B, (V) => {
      d() ? V(F) : V(j, !1);
    });
  }
  o(r, E), Xe();
}
var rd = /* @__PURE__ */ c('<span class="text-red-400 ml-1 svelte-cfvntl">*</span>'), ad = /* @__PURE__ */ c("<label> <!></label>"), nd = /* @__PURE__ */ c("<p> </p>"), od = /* @__PURE__ */ c('<p class="text-xs text-red-400 mt-1 svelte-cfvntl" role="alert"> </p>'), id = /* @__PURE__ */ c('<div class="flex-1 min-w-0 svelte-cfvntl"><!> <!> <!></div>'), ld = /* @__PURE__ */ c('<div class="flex items-start gap-3 svelte-cfvntl"><div><input/> <div class="absolute inset-0 flex items-center justify-center svelte-cfvntl"><!></div></div> <!></div>');
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
function q1(r, e) {
  Ke(e, !0), Qe(r, sd);
  let a = s(e, "checked", 7, !1), n = s(e, "indeterminate", 7, !1), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), v = s(e, "variant", 3, "glass"), p = s(e, "blur", 3, "md"), y = s(e, "animate", 3, !0), R = s(e, "reduceMotion", 3, !1), h = s(e, "required", 3, !1), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  ]), z;
  const M = `checkbox-${Math.random().toString(36).substr(2, 9)}`, f = e.description ? `${M}-description` : void 0, q = e.error ? `${M}-error` : void 0;
  bt(() => {
    z && (z.indeterminate = n());
  });
  const ee = {
    sm: { container: "w-4 h-4", icon: "w-3 h-3", text: "text-sm" },
    md: { container: "w-5 h-5", icon: "w-4 h-4", text: "text-base" },
    lg: { container: "w-6 h-6", icon: "w-5 h-5", text: "text-lg" }
  }, _ = {
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
  }, E = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = Z(
    "relative inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
    ee[d()].container,
    n() ? _[v()].containerIndeterminate : a() ? _[v()].containerChecked : _[v()].container,
    v() === "glass" && E[p()],
    l() && "opacity-50 cursor-not-allowed",
    !l() && "cursor-pointer hover:scale-105",
    e.error && "border-red-400/60 bg-red-500/10",
    I()
  ), F = Z("transition-all duration-200", ee[d()].icon, n() ? _[v()].iconIndeterminate : a() ? _[v()].iconChecked : _[v()].icon), j = Z("font-medium text-white cursor-pointer select-none", ee[d()].text, l() && "opacity-50", e.error && "text-red-300"), V = Z("text-xs text-white/70 mt-1", l() && "opacity-50", e.error && "text-red-300/70");
  function O(k) {
    if (l()) return;
    const b = k.target.checked;
    a(b), n(!1), e.onCheckedChange?.(b);
  }
  function P(k) {
    l() || k.key === "Enter" && (k.preventDefault(), z.click());
  }
  bt(() => {
    Qt("Checkbox", "small");
  });
  var Q = ld(), G = i(Q), D = i(G);
  Ze(
    D,
    (k) => ({
      type: "checkbox",
      id: M,
      disabled: l(),
      required: h(),
      class: "sr-only",
      "aria-label": e["aria-label"] || e.label,
      "aria-describedby": k,
      "aria-invalid": !!e.error,
      onchange: O,
      onkeydown: P,
      ...L
    }),
    [
      () => [f, q].filter(Boolean).join(" ") || void 0
    ],
    void 0,
    "svelte-cfvntl"
  ), tt(D, (k) => z = k, () => z), fr(() => ss(D, a)), Ie(D, (k, u) => Yt?.(k, u), () => y() && !R() ? { scale: 0.9, duration: 150 } : void 0);
  var T = m(D, 2), w = i(T);
  {
    var x = (k) => {
      Xn(k, {
        get class() {
          return F;
        },
        strokeWidth: 2.5
      });
    }, C = (k) => {
      var u = Se(), b = _e(u);
      {
        var re = (de) => {
          Wa(de, {
            get class() {
              return F;
            },
            strokeWidth: 2.5
          });
        };
        g(
          b,
          (de) => {
            a() && de(re);
          },
          !0
        );
      }
      o(k, u);
    };
    g(w, (k) => {
      n() ? k(x) : k(C, !1);
    });
  }
  var X = m(G, 2);
  {
    var K = (k) => {
      var u = id(), b = i(u);
      {
        var re = (U) => {
          var oe = ad(), S = i(oe), te = m(S);
          {
            var J = (Y) => {
              var le = rd();
              o(Y, le);
            };
            g(te, (Y) => {
              h() && Y(J);
            });
          }
          A(() => {
            xe(oe, "for", M), N(oe, 1, ne(j), "svelte-cfvntl"), ie(S, `${e.label ?? ""} `);
          }), o(U, oe);
        };
        g(b, (U) => {
          e.label && U(re);
        });
      }
      var de = m(b, 2);
      {
        var ue = (U) => {
          var oe = nd(), S = i(oe);
          A(() => {
            xe(oe, "id", f), N(oe, 1, ne(V), "svelte-cfvntl"), ie(S, e.description);
          }), o(U, oe);
        };
        g(de, (U) => {
          e.description && U(ue);
        });
      }
      var ve = m(de, 2);
      {
        var $ = (U) => {
          var oe = od(), S = i(oe);
          A(() => {
            xe(oe, "id", q), ie(S, e.error);
          }), o(U, oe);
        };
        g(ve, (U) => {
          e.error && U($);
        });
      }
      o(k, u);
    };
    g(X, (k) => {
      (e.label || e.description || e.error) && k(K);
    });
  }
  A(() => N(G, 1, ne(B), "svelte-cfvntl")), o(r, Q), Xe();
}
const dd = (r, e, a) => {
  W(e, !t(e)), t(e) && requestAnimationFrame(a);
};
var cd = /* @__PURE__ */ c('<div class="h-px bg-white/10 my-1"></div>'), vd = (
  // Former _markUsed helper removed (cleanup: unnecessary artificial usage)
  // Reactive no-op effect to ensure analyzer sees runtime updates to menuPosition
  (r, e, a) => e(t(a))
), ud = /* @__PURE__ */ c('<button><!> <span class="flex-1 text-left"> </span></button>'), fd = /* @__PURE__ */ c('<div><div class="py-1"></div></div>'), bd = /* @__PURE__ */ c('<div><button aria-haspopup="true"><span> </span> <!></button> <!></div>');
function B1(r, e) {
  Ke(e, !0);
  const a = s(e, "trigger", 3, "Select"), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "position", 3, "bottom"), v = s(e, "animated", 3, !0), p = s(e, "glow", 3, !1);
  s(e, "jelly", 3, !0);
  const y = s(e, "class", 3, ""), R = s(e, "triggerClass", 3, ""), h = s(e, "menuClass", 3, ""), I = /* @__PURE__ */ dt(e, [
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
  let L = /* @__PURE__ */ ye(!1), z = /* @__PURE__ */ ye(void 0), M = /* @__PURE__ */ ye(void 0), f = /* @__PURE__ */ ye(st({ x: 0, y: 0 }));
  const q = {
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
  }, ee = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg"
  }, _ = () => {
    if (!t(z) || !t(M)) return;
    const x = t(z).getBoundingClientRect(), C = t(M).getBoundingClientRect(), X = window.innerWidth, K = window.innerHeight;
    let k = 0, u = 0;
    switch (d()) {
      case "bottom":
        k = 0, u = x.height + 4;
        break;
      case "top":
        k = 0, u = -C.height - 4;
        break;
      case "left":
        k = -C.width - 4, u = 0;
        break;
      case "right":
        k = x.width + 4, u = 0;
        break;
    }
    const b = x.left + k, re = x.top + u + x.height;
    b + C.width > X && (k = X - b - C.width - 8), re + C.height > K && (u = -C.height - 4), W(f, { x: k, y: u }, !0);
  }, E = (x) => {
    x.disabled || x.divider || (e.onSelect?.(x.value), W(L, !1));
  }, B = (x) => {
    t(z) && !t(z).contains(x.target) && W(L, !1);
  }, F = (x) => {
    x.key === "Escape" && W(L, !1);
  };
  wt(() => (document.addEventListener("click", B), document.addEventListener("keydown", F), () => {
    document.removeEventListener("click", B), document.removeEventListener("keydown", F);
  }));
  const j = q[n()], V = e.items.find((x) => x.value === e.value);
  bt(() => {
    t(f);
  });
  var O = bd();
  Ze(O, (x) => ({ class: x, ...I }), [() => Z("relative inline-block", y())]);
  var P = i(O);
  P.__click = [dd, L, _];
  var Q = i(P), G = i(Q), D = m(Q, 2);
  {
    let x = /* @__PURE__ */ Ee(() => Z("transition-transform duration-200", t(L) && "rotate-180"));
    tn(D, {
      size: 16,
      get class() {
        return t(x);
      }
    });
  }
  Ie(P, (x, C) => ft?.(x, C), () => ({ enabled: !0, strength: 0.1 }));
  var T = m(P, 2);
  {
    var w = (x) => {
      var C = fd(), X = i(C);
      Ge(X, 21, () => e.items, (K) => K.value, (K, k) => {
        var u = Se(), b = _e(u);
        {
          var re = (ue) => {
            var ve = cd();
            o(ue, ve);
          }, de = (ue) => {
            var ve = ud();
            ve.__click = [vd, E, k];
            var $ = i(ve);
            {
              var U = (te) => {
                var J = Se(), Y = _e(J);
                Et(Y, () => t(k).icon, (le, H) => {
                  H(le, { size: 16 });
                }), o(te, J);
              };
              g($, (te) => {
                t(k).icon && te(U);
              });
            }
            var oe = m($, 2), S = i(oe);
            A(
              (te) => {
                ve.disabled = t(k).disabled, N(ve, 1, te), ie(S, t(k).label);
              },
              [
                () => ne(Z("flex items-center gap-3 w-full px-4 py-2 transition-all duration-200", j.item, t(k).value === e.value && j.active, t(k).disabled && "opacity-50 cursor-not-allowed", !t(k).disabled && "cursor-pointer"))
              ]
            ), o(ue, ve);
          };
          g(b, (ue) => {
            t(k).divider ? ue(re) : ue(de, !1);
          });
        }
        o(K, u);
      }), tt(C, (K) => W(M, K), () => t(M)), A(
        (K) => {
          N(C, 1, K), ht(C, `left: ${t(f).x}px; top: ${t(f).y}px;`);
        },
        [
          () => ne(Z("absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden", j.menu, p() && j.glow, v() && "transform-gpu will-change-transform", h()))
        ]
      ), $e(3, C, () => mt, () => ({ duration: v() ? 200 : 0 })), o(x, C);
    };
    g(T, (x) => {
      t(L) && x(w);
    });
  }
  tt(O, (x) => W(z, x), () => t(z)), A(
    (x) => {
      N(P, 1, x), xe(P, "aria-expanded", t(L)), ie(G, V?.label || a());
    },
    [
      () => ne(Z("flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200", ee[l()], j.trigger, p() && t(L) && j.glow, "focus:outline-none focus:ring-2 focus:ring-white/20", R()))
    ]
  ), o(r, O), Xe();
}
vt(["click"]);
var gd = /* @__PURE__ */ c('<label class="block text-sm font-medium text-white/80 mb-2"> </label>'), md = /* @__PURE__ */ c('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), hd = /* @__PURE__ */ c('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), pd = /* @__PURE__ */ c("<input/>"), xd = /* @__PURE__ */ c("<input/>"), _d = /* @__PURE__ */ c("<input/>"), wd = /* @__PURE__ */ c('<p class="mt-1 text-sm text-red-400" role="alert"> </p>'), yd = /* @__PURE__ */ c('<div class="relative"><!> <div class="relative"><!> <!></div> <!></div>');
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
  Ke(e, !0), Qe(r, kd);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "label", 3, ""), d = s(e, "error", 3, ""), v = s(e, "icon", 3, null), p = s(e, "animate", 3, !0), y = s(e, "liquid", 3, !1), R = s(e, "magnetic", 3, !1), h = s(e, "jelly", 3, !1), I = s(e, "glow", 3, !1), L = s(e, "class", 3, ""), z = s(e, "id", 3, ""), M = /* @__PURE__ */ dt(e, [
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
  }, q = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, ee = "w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300", _ = d() ? "border-red-500 focus:border-red-500" : "", E = v() || e.children?.icon ? "pl-10" : "", B = I() ? "focus:shadow-lg focus:shadow-brand-primary/20" : "", F = y() ? "backdrop-blur-md" : "", j = Z(ee, f[a()], q[n()], _, E, B, F, L()), V = z() || `input-${Math.random().toString(36).substr(2, 9)}`, O = d() ? `${V}-error` : void 0;
  var P = yd(), Q = i(P);
  {
    var G = (b) => {
      var re = gd(), de = i(re);
      A(() => {
        xe(re, "for", V), ie(de, l());
      }), o(b, re);
    };
    g(Q, (b) => {
      l() && b(G);
    });
  }
  var D = m(Q, 2), T = i(D);
  {
    var w = (b) => {
      var re = md(), de = i(re);
      ot(de, v), o(b, re);
    }, x = (b) => {
      var re = Se(), de = _e(re);
      {
        var ue = (ve) => {
          var $ = hd(), U = i($);
          ot(U, () => e.children.icon), o(ve, $);
        };
        g(
          de,
          (ve) => {
            e.children?.icon && ve(ue);
          },
          !0
        );
      }
      o(b, re);
    };
    g(T, (b) => {
      v() ? b(w) : b(x, !1);
    });
  }
  var C = m(T, 2);
  {
    var X = (b) => {
      var re = pd();
      Ze(re, (de) => ({ id: z(), class: de, ...M }), [j], void 0, "svelte-177vx52"), Ie(re, (de, ue) => ft?.(de, ue), () => R() ? { strength: 0.1, distance: 50 } : void 0), Ie(re, (de, ue) => At?.(de, ue), () => h() ? { intensity: 0.05, speed: 200 } : void 0), $e(1, re, () => kt, () => ({ duration: 300, blur: "sm", scale: 0.98 })), o(b, re);
    }, K = (b) => {
      var re = Se(), de = _e(re);
      {
        var ue = ($) => {
          var U = xd();
          Ze(
            U,
            (oe) => ({
              id: V,
              class: oe,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": O,
              ...M
            }),
            [j],
            void 0,
            "svelte-177vx52"
          ), Ie(U, (oe, S) => ft?.(oe, S), () => R() ? { strength: 0.1, distance: 50 } : void 0), Ie(U, (oe, S) => At?.(oe, S), () => h() ? { intensity: 0.05, speed: 200 } : void 0), $e(1, U, () => mt, () => ({
            duration: 200,
            direction: "up",
            distance: 5,
            opacity: "light"
          })), o($, U);
        }, ve = ($) => {
          var U = _d();
          Ze(
            U,
            (oe) => ({
              id: V,
              class: oe,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": O,
              ...M
            }),
            [j],
            void 0,
            "svelte-177vx52"
          ), Ie(U, (oe, S) => ft?.(oe, S), () => R() ? { strength: 0.1, distance: 50 } : void 0), Ie(U, (oe, S) => At?.(oe, S), () => h() ? { intensity: 0.05, speed: 200 } : void 0), o($, U);
        };
        g(
          de,
          ($) => {
            p() ? $(ue) : $(ve, !1);
          },
          !0
        );
      }
      o(b, re);
    };
    g(C, (b) => {
      p() && y() ? b(X) : b(K, !1);
    });
  }
  var k = m(D, 2);
  {
    var u = (b) => {
      var re = wd(), de = i(re);
      A(() => {
        xe(re, "id", O), ie(de, d());
      }), o(b, re);
    };
    g(k, (b) => {
      d() && b(u);
    });
  }
  o(r, P), Xe();
}
var Ed = /* @__PURE__ */ c("<div> </div>"), Sd = /* @__PURE__ */ c('<div class="flex items-center justify-between svelte-17v0sh2"><div class="flex-1 svelte-17v0sh2"><div> </div> <div> </div></div> <div class="flex flex-col items-end gap-1 svelte-17v0sh2"><!> <!></div></div>'), Td = /* @__PURE__ */ c("<span> </span>"), Md = /* @__PURE__ */ c("<span> </span>"), Ad = /* @__PURE__ */ c('<div class="flex items-center gap-2 svelte-17v0sh2"><!> <!> <!></div>'), zd = /* @__PURE__ */ c("<div> </div>"), Id = /* @__PURE__ */ c('<div class="space-y-2 svelte-17v0sh2"><div class="flex items-center justify-between svelte-17v0sh2"><div> </div> <!></div> <div> </div> <!> <!></div>'), Pd = /* @__PURE__ */ c('<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg svelte-17v0sh2"><div class="flex items-center gap-2 svelte-17v0sh2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-17v0sh2"></div> <span class="text-sm opacity-70 svelte-17v0sh2">Loading...</span></div></div>'), Ld = /* @__PURE__ */ c('<div class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none svelte-17v0sh2"></div>'), Dd = /* @__PURE__ */ c("<!> <!> <!>", 1);
const jd = {
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
function F1(r, e) {
  Ke(e, !0), Qe(r, jd);
  let a = s(e, "size", 3, "md"), n = s(e, "variant", 3, "glass"), l = s(e, "layout", 3, "vertical"), d = s(e, "showTrend", 3, !0), v = s(e, "showChange", 3, !0), p = s(e, "showIcon", 3, !1), y = s(e, "animated", 3, !0), R = s(e, "loading", 3, !1), h = s(e, "clickable", 3, !1), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  const z = {
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
  }, M = {
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
  }, f = z[a()], q = M[n()], ee = /* @__PURE__ */ Ee(() => () => {
    if (R()) return "---";
    const O = e.metric.value, P = e.metric.format || "number", Q = e.metric.unit || "";
    switch (P) {
      case "currency":
        return `$${Number(O).toLocaleString()}${Q}`;
      case "percentage":
        return `${O}%`;
      default:
        return `${Number(O).toLocaleString()}${Q}`;
    }
  }), _ = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.change || R()) return null;
    const O = e.metric.change, P = O > 0, Q = O < 0;
    return {
      value: `${P ? "+" : ""}${O}%`,
      type: P ? "positive" : Q ? "negative" : "neutral"
    };
  }), E = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.trend || R()) return null;
    switch (e.metric.trend) {
      case "up":
        return ui;
      case "down":
        return vi;
      default:
        return Xn;
    }
  }), B = /* @__PURE__ */ Ee(() => () => {
    if (!t(_)) return q.changeNeutral;
    switch (t(_).type) {
      case "positive":
        return q.changePositive;
      case "negative":
        return q.changeNegative;
      default:
        return q.changeNeutral;
    }
  });
  function F() {
    if (h()) {
      const O = new CustomEvent("click", { detail: e.metric });
      e.onclick?.(O);
    }
  }
  var j = Se(), V = _e(j);
  Zl(V, () => h() ? "button" : "div", !1, (O, P) => {
    Ie(O, (K, k) => kt?.(K, k), () => ({ intensity: "medium" })), Ze(
      O,
      (K) => ({
        class: K,
        onclick: F,
        role: h() ? "button" : void 0,
        tabindex: h() ? 0 : void 0,
        ...L
      }),
      [
        () => Z("relative rounded-lg border transition-all duration-200", f.container, q.container, h() && "cursor-pointer hover:scale-105 hover:shadow-lg", y() && "transform-gpu", I())
      ],
      void 0,
      "svelte-17v0sh2"
    );
    var Q = Dd(), G = _e(Q);
    {
      var D = (K) => {
        var k = Sd(), u = i(k), b = i(u), re = i(b), de = m(b, 2), ue = i(de), ve = m(u, 2), $ = i(ve);
        {
          var U = (J) => {
            const Y = /* @__PURE__ */ Ee(() => t(E));
            var le = Se(), H = _e(le);
            {
              let ae = /* @__PURE__ */ Ee(() => Z(f.icon, t(B)));
              Et(H, () => t(Y), (ce, se) => {
                se(ce, {
                  get class() {
                    return t(ae);
                  },
                  strokeWidth: 2
                });
              });
            }
            o(J, le);
          }, oe = (J) => {
            var Y = Se(), le = _e(Y);
            {
              var H = (ae) => {
                {
                  let ce = /* @__PURE__ */ Ee(() => Z(f.icon, q.icon));
                  yn(ae, {
                    get class() {
                      return t(ce);
                    }
                  });
                }
              };
              g(
                le,
                (ae) => {
                  p() && e.metric.icon && ae(H);
                },
                !0
              );
            }
            o(J, Y);
          };
          g($, (J) => {
            p() && d() && t(E) ? J(U) : J(oe, !1);
          });
        }
        var S = m($, 2);
        {
          var te = (J) => {
            var Y = Ed(), le = i(Y);
            A(
              (H) => {
                N(Y, 1, H, "svelte-17v0sh2"), ie(le, t(_).value);
              },
              [
                () => ne(Z("font-medium", f.change, t(B)))
              ]
            ), o(J, Y);
          };
          g(S, (J) => {
            v() && t(_) && J(te);
          });
        }
        A(
          (J, Y) => {
            N(b, 1, J, "svelte-17v0sh2"), ie(re, e.metric.label), N(de, 1, Y, "svelte-17v0sh2"), ie(ue, t(ee));
          },
          [
            () => ne(Z("font-medium", f.label, q.label)),
            () => ne(Z("font-bold tracking-tight", f.value, q.value))
          ]
        ), o(K, k);
      }, T = (K) => {
        var k = Id(), u = i(k), b = i(u), re = i(b), de = m(b, 2);
        {
          var ue = (J) => {
            {
              let Y = /* @__PURE__ */ Ee(() => Z(f.icon, q.icon));
              yn(J, {
                get class() {
                  return t(Y);
                }
              });
            }
          };
          g(de, (J) => {
            p() && e.metric.icon && J(ue);
          });
        }
        var ve = m(u, 2), $ = i(ve), U = m(ve, 2);
        {
          var oe = (J) => {
            var Y = Ad(), le = i(Y);
            {
              var H = (fe) => {
                const be = /* @__PURE__ */ Ee(() => t(E));
                var ge = Se(), Ce = _e(ge);
                {
                  let Pe = /* @__PURE__ */ Ee(() => Z("w-4 h-4", t(B)));
                  Et(Ce, () => t(be), (Be, je) => {
                    je(Be, {
                      get class() {
                        return t(Pe);
                      },
                      strokeWidth: 2
                    });
                  });
                }
                o(fe, ge);
              };
              g(le, (fe) => {
                d() && t(E) && fe(H);
              });
            }
            var ae = m(le, 2);
            {
              var ce = (fe) => {
                var be = Td(), ge = i(be);
                A(
                  (Ce) => {
                    N(be, 1, Ce, "svelte-17v0sh2"), ie(ge, t(_).value);
                  },
                  [
                    () => ne(Z("font-medium", f.change, t(B)))
                  ]
                ), o(fe, be);
              };
              g(ae, (fe) => {
                v() && t(_) && fe(ce);
              });
            }
            var se = m(ae, 2);
            {
              var he = (fe) => {
                var be = Md(), ge = i(be);
                A(
                  (Ce) => {
                    N(be, 1, Ce, "svelte-17v0sh2"), ie(ge, `from ${e.metric.previousValue ?? ""}`);
                  },
                  [
                    () => ne(Z("opacity-60", f.change, q.label))
                  ]
                ), o(fe, be);
              };
              g(se, (fe) => {
                e.metric.previousValue && fe(he);
              });
            }
            o(J, Y);
          };
          g(U, (J) => {
            (d() && t(E) || v() && t(_)) && J(oe);
          });
        }
        var S = m(U, 2);
        {
          var te = (J) => {
            var Y = zd(), le = i(Y);
            A(
              (H) => {
                N(Y, 1, H, "svelte-17v0sh2"), ie(le, e.metric.description);
              },
              [
                () => ne(Z("opacity-70 leading-relaxed", f.change, q.label))
              ]
            ), o(J, Y);
          };
          g(S, (J) => {
            e.metric.description && J(te);
          });
        }
        A(
          (J, Y) => {
            N(b, 1, J, "svelte-17v0sh2"), ie(re, e.metric.label), N(ve, 1, Y, "svelte-17v0sh2"), ie($, t(ee));
          },
          [
            () => ne(Z("font-medium", f.label, q.label)),
            () => ne(Z("font-bold tracking-tight", f.value, q.value))
          ]
        ), o(K, k);
      };
      g(G, (K) => {
        l() === "horizontal" ? K(D) : K(T, !1);
      });
    }
    var w = m(G, 2);
    {
      var x = (K) => {
        var k = Pd();
        o(K, k);
      };
      g(w, (K) => {
        R() && K(x);
      });
    }
    var C = m(w, 2);
    {
      var X = (K) => {
        var k = Ld();
        o(K, k);
      };
      g(C, (K) => {
        h() && K(X);
      });
    }
    o(P, Q);
  }), o(r, j), Xe();
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
), Od = /* @__PURE__ */ c('<div role="dialog" aria-modal="true" tabindex="0"><div><!></div></div>');
const qd = {
  hash: "svelte-6n99c3",
  code: `div[role='dialog'].svelte-6n99c3 {-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}

	@media (prefers-reduced-motion: reduce) {div.svelte-6n99c3 {transition:none;
			animation: none;}
	}`
};
function H1(r, e) {
  Ke(e, !0), Qe(r, qd);
  const a = s(e, "open", 3, !1), n = s(e, "size", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "blur", 3, "xl"), v = s(e, "closeOnOutsideClick", 3, !0), p = s(e, "closeOnEscape", 3, !0), y = s(e, "animate", 3, !0), R = s(e, "jelly", 3, !0), h = s(e, "glow", 3, !1), I = s(e, "breathing", 3, !1), L = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), M = /* @__PURE__ */ dt(e, [
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
  let f = /* @__PURE__ */ ye(void 0), q = null;
  const ee = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4"
  }, _ = {
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
  }, E = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = _[l()], F = Z("fixed inset-0 z-50 flex items-center justify-center p-4", B.overlay, E[d()]), V = Z("relative w-full p-6 backdrop-blur-xl border transition-all duration-300", "transform-gpu will-change-transform", "modal-radius-lg", ee[n()], B.bg, h() && B.glow, z());
  function O(w) {
    w.key === "Escape" && p() && (w.preventDefault(), P()), w.key === "Tab" && Q(w);
  }
  function P() {
    e.onClose && e.onClose();
  }
  function Q(w) {
    if (!t(f)) return;
    const x = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), C = x[0], X = x[x.length - 1];
    w.shiftKey ? document.activeElement === C && (X.focus(), w.preventDefault()) : document.activeElement === X && (C.focus(), w.preventDefault());
  }
  bt(() => (a() ? (q = document.activeElement, setTimeout(
    () => {
      if (t(f)) {
        const x = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])')[0];
        x && x.focus();
      }
    },
    100
  ), document.body.style.overflow = "hidden", document.addEventListener("keydown", O)) : (document.body.style.overflow = "", document.removeEventListener("keydown", O), q && q instanceof HTMLElement && q.focus()), () => {
    document.body.style.overflow = "", document.removeEventListener("keydown", O);
  })), bt(() => {
    Qt("Modal", "medium");
  });
  var G = Se(), D = _e(G);
  {
    var T = (w) => {
      var x = Od();
      x.__click = [Rd, v, P], x.__keydown = [Nd, P];
      var C = i(x);
      Ze(C, () => ({ class: V, ...M }), void 0, void 0, "svelte-6n99c3");
      var X = i(C);
      {
        var K = (k) => {
          var u = Se(), b = _e(u);
          ot(b, () => e.children), o(k, u);
        };
        g(X, (k) => {
          e.children && k(K);
        });
      }
      tt(C, (k) => W(f, k), () => t(f)), Ie(C, (k, u) => At?.(k, u), () => ({
        enabled: R() && y() && !L(),
        scale: 1.001,
        duration: 300,
        borderRadius: "var(--radius-xl)"
      })), Ie(C, (k, u) => jt?.(k, u), () => ({
        enabled: I() && y() && !L(),
        intensity: 0.01,
        speed: 4e3
      })), A(() => {
        N(x, 1, ne(F), "svelte-6n99c3"), xe(x, "aria-labelledby", e["aria-labelledby"]), xe(x, "aria-describedby", e["aria-describedby"]);
      }), $e(1, C, () => Yt, () => ({
        scale: 0.8,
        duration: y() && !L() ? 400 : 0,
        delay: 100
      })), $e(2, C, () => Yt, () => ({
        scale: 0.95,
        duration: y() && !L() ? 200 : 0
      })), $e(1, x, () => mt, () => ({
        direction: "center",
        duration: y() && !L() ? 200 : 0
      })), $e(2, x, () => mt, () => ({
        direction: "center",
        duration: y() && !L() ? 150 : 0
      })), o(w, x);
    };
    g(D, (w) => {
      a() && w(T);
    });
  }
  o(r, G), Xe();
}
vt(["click", "keydown"]);
function Bd(r, e, a, n) {
  const l = r.target;
  W(e, l.value, !0), a("search", t(e)), W(
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
), Hd = /* @__PURE__ */ c('<div><span class="truncate max-w-32"> </span> <button><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'), Vd = /* @__PURE__ */ c('<input role="searchbox" aria-label="Search options" aria-controls="multiselect-listbox"/>'), Gd = /* @__PURE__ */ c("<span> </span>"), Ud = /* @__PURE__ */ c("<div> </div>"), Yd = (r, e, a) => e(t(a)), Wd = (r, e, a) => r.key === "Enter" && e(t(a)), Kd = /* @__PURE__ */ c('<div class="text-xs opacity-70 mt-0.5"> </div>'), Xd = /* @__PURE__ */ ar('<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), Zd = /* @__PURE__ */ c('<div role="option" tabindex="0"><div class="flex items-center justify-between"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div></div>'), Qd = /* @__PURE__ */ c("<div> </div>"), Jd = /* @__PURE__ */ c('<div id="multiselect-listbox" role="listbox" aria-multiselectable="true" aria-label="Available options"><!> <!></div>'), $d = /* @__PURE__ */ c('<div><div class="flex flex-wrap gap-1.5 items-center"><!> <!></div> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <!> <div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only"> <!></div></div>');
const ec = {
  hash: "svelte-39ftoh",
  code: `
	/* Scrollbar styling for dropdown */.overflow-auto.svelte-39ftoh::-webkit-scrollbar {width:8px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-track {background:rgba(255, 255, 255, 0.05);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Terminal-specific glow effects */.terminal .multi-select:focus-within {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}`
};
function V1(r, e) {
  Ke(e, !0), Qe(r, ec);
  const a = s(e, "options", 19, () => []), n = s(e, "value", 19, () => []), l = s(e, "placeholder", 3, "Select items..."), d = s(e, "variant", 3, "default"), v = s(e, "size", 3, "md"), p = s(e, "disabled", 3, !1), y = s(e, "error", 3, !1), R = s(e, "searchable", 3, !0), h = s(e, "chipVariant", 19, d), I = s(e, "closeOnSelect", 3, !1), L = s(e, "class", 3, ""), z = /* @__PURE__ */ dt(e, [
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
  ]), M = Mt();
  let f, q = /* @__PURE__ */ ye(void 0), ee = /* @__PURE__ */ ye(void 0), _ = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(""), B = /* @__PURE__ */ ye(st([...n()])), F = /* @__PURE__ */ ye(-1);
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
      container: `bg-black/80 border-${Me.terminal.green} focus-within:border-${Me.terminal.matrix}`,
      dropdown: `bg-black/95 border-${Me.terminal.green}`,
      option: `text-${Me.terminal.green}/70 hover:bg-${Me.terminal.green}/10 hover:text-${Me.terminal.green}`,
      selectedOption: `bg-${Me.terminal.green} text-black`,
      searchInput: `bg-transparent text-${Me.terminal.green} placeholder-${Me.terminal.green}/50`,
      chip: `bg-${Me.terminal.green}/20 text-${Me.terminal.green} hover:bg-${Me.terminal.green}/30 border border-${Me.terminal.green}/30`,
      chipClose: `text-${Me.terminal.green}/70 hover:text-${Me.terminal.green}`
    }
  }, V = {
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
  }, O = /* @__PURE__ */ Ee(() => j[d()]), P = /* @__PURE__ */ Ee(() => j[h()]), Q = /* @__PURE__ */ Ee(() => V[v()]), G = /* @__PURE__ */ Ee(() => () => t(E) ? a().filter((ce) => ce.label.toLowerCase().includes(t(E).toLowerCase()) || ce.value.toLowerCase().includes(t(E).toLowerCase()) || ce.description?.toLowerCase().includes(t(E).toLowerCase())) : a()), D = /* @__PURE__ */ Ee(() => () => t(G).filter((ce) => !t(B).includes(ce.value))), T = /* @__PURE__ */ Ee(() => () => t(B).map((ce) => a().find((se) => se.value === ce)).filter(Boolean)), w = /* @__PURE__ */ Ee(() => () => e.maxSelections ? t(B).length >= e.maxSelections : !1);
  function x() {
    p() || t(_) || (W(_, !0), M("open"), setTimeout(
      () => {
        R() && t(q) && t(q).focus();
      },
      0
    ));
  }
  function C(ce) {
    ce.disabled || t(w) && !t(B).includes(ce.value) || (t(B).includes(ce.value) ? K(ce.value) : X(ce.value), I() && !t(B).includes(ce.value) && (W(_, !1), M("close")));
  }
  function X(ce) {
    t(w) || (W(B, [...t(B), ce], !0), M("add", ce), M("change", t(B)), W(E, ""), M("search", t(E)));
  }
  function K(ce) {
    W(B, t(B).filter((se) => se !== ce), !0), M("remove", ce), M("change", t(B));
  }
  function k(ce, se) {
    se.stopPropagation(), K(ce);
  }
  function u(ce) {
    switch (ce.key) {
      case "Escape":
        W(_, !1), M("close");
        break;
      case "ArrowDown":
        ce.preventDefault(), t(_) ? W(F, Math.min(t(F) + 1, t(D).length - 1), !0) : (W(_, !0), M("open"));
        break;
      case "ArrowUp":
        ce.preventDefault(), W(F, Math.max(t(F) - 1, -1), !0);
        break;
      case "Enter":
        ce.preventDefault(), t(F) >= 0 && t(D)[t(F)] && C(t(D)[t(F)]);
        break;
      case "Backspace":
        t(E) === "" && t(B).length > 0 && K(t(B)[t(B).length - 1]);
        break;
    }
  }
  bt(() => {
    W(B, [...n()], !0);
  }), wt(() => {
    function ce(se) {
      t(_) && f && !f.contains(se.target) && (W(_, !1), M("close"));
    }
    return document.addEventListener("click", ce), () => document.removeEventListener("click", ce);
  });
  const b = /* @__PURE__ */ Ee(() => Z("relative w-full min-h-10 rounded-lg border transition-all duration-200", "cursor-text font-mono", t(O).container, t(Q).container, y() && "border-red-500 focus-within:border-red-500", p() && "opacity-50 cursor-not-allowed", t(_) && "ring-2 ring-opacity-50", L()));
  var re = $d();
  Ze(
    re,
    () => ({
      class: t(b),
      onclick: x,
      onkeydown: u,
      role: "combobox",
      "aria-expanded": t(_),
      "aria-haspopup": "listbox",
      "aria-controls": "multiselect-listbox",
      "aria-label": l(),
      "aria-describedby": "multiselect-status",
      tabindex: p() ? -1 : 0,
      ...z
    }),
    void 0,
    void 0,
    "svelte-39ftoh"
  );
  var de = i(re), ue = i(de);
  Ge(ue, 17, () => t(T), (ce) => ce.value, (ce, se) => {
    var he = Hd(), fe = i(he), be = i(fe), ge = m(fe, 2);
    ge.__click = [Fd, k, se], Ie(he, (Ce, Pe) => ft?.(Ce, Pe), () => ({ strength: 0.15 })), A(() => {
      N(
        he,
        1,
        `inline-flex items-center gap-1.5 rounded-md ${t(P).chip ?? ""} ${t(Q).chip ?? ""} 
				       font-mono transition-all duration-200`,
        "svelte-39ftoh"
      ), ie(be, t(se).label), N(
        ge,
        1,
        `flex-shrink-0 rounded-full ${t(P).chipClose ?? ""} hover:bg-black/20
					       transition-colors p-0.5`,
        "svelte-39ftoh"
      ), xe(ge, "aria-label", `Remove ${t(se).label ?? ""}`);
    }), $e(1, he, () => Yt, () => ({ duration: 200, bounce: !0 })), o(ce, he);
  });
  var ve = m(ue, 2);
  {
    var $ = (ce) => {
      var se = Vd();
      se.__input = [Bd, E, M, F], se.__keydown = u, tt(se, (he) => W(q, he), () => t(q)), A(() => {
        xe(se, "placeholder", t(B).length === 0 ? l() : ""), N(se, 1, `flex-1 min-w-32 outline-none ${t(O).searchInput ?? ""} ${t(Q).input ?? ""}`, "svelte-39ftoh"), se.disabled = p() || t(w);
      }), pr(se, () => t(E), (he) => W(E, he)), o(ce, se);
    }, U = (ce) => {
      var se = Se(), he = _e(se);
      {
        var fe = (be) => {
          var ge = Gd(), Ce = i(ge);
          A(() => {
            N(ge, 1, `text-gray-400 ${t(Q).input ?? ""}`, "svelte-39ftoh"), ie(Ce, l());
          }), o(be, ge);
        };
        g(
          he,
          (be) => {
            t(B).length === 0 && be(fe);
          },
          !0
        );
      }
      o(ce, se);
    };
    g(ve, (ce) => {
      R() ? ce($) : ce(U, !1);
    });
  }
  var oe = m(de, 2), S = i(oe), te = m(oe, 2);
  {
    var J = (ce) => {
      var se = Jd(), he = i(se);
      {
        var fe = (Pe) => {
          var Be = Ud(), je = i(Be);
          A(() => {
            N(Be, 1, `px-4 py-3 text-center ${t(O).option ?? ""} font-mono`, "svelte-39ftoh"), ie(je, t(E) ? "No results found" : "No more options available");
          }), o(Pe, Be);
        }, be = (Pe) => {
          var Be = Se(), je = _e(Be);
          Ge(je, 19, () => t(D), (we) => we.value, (we, pe, Te) => {
            const Ne = /* @__PURE__ */ Ee(() => t(Te) === t(F)), Ae = /* @__PURE__ */ Ee(() => t(B).includes(t(pe).value));
            var Le = Zd();
            Le.__click = [Yd, C, pe], Le.__keydown = [Wd, C, pe];
            var qe = i(Le), Fe = i(qe), ke = i(Fe), me = i(ke), ze = m(ke, 2);
            {
              var De = (We) => {
                var at = Kd(), lt = i(at);
                A(() => ie(lt, t(pe).description)), o(We, at);
              };
              g(ze, (We) => {
                t(pe).description && We(De);
              });
            }
            var He = m(Fe, 2);
            {
              var Je = (We) => {
                var at = Xd();
                o(We, at);
              };
              g(He, (We) => {
                t(Ae) && We(Je);
              });
            }
            Ie(Le, (We, at) => ft?.(We, at), () => ({ enabled: !t(pe).disabled, strength: 0.1 })), A(() => {
              N(
                Le,
                1,
                `cursor-pointer transition-all duration-150 ${t(Q).option ?? ""}
						       ${(t(Ne) ? t(O).selectedOption : t(O).option) ?? ""}
						       ${t(pe).disabled ? "opacity-50 cursor-not-allowed" : ""}
						       font-mono border-b border-white/5 last:border-b-0`,
                "svelte-39ftoh"
              ), xe(Le, "aria-selected", t(Ae)), ie(me, t(pe).label);
            }), o(we, Le);
          }), o(Pe, Be);
        };
        g(he, (Pe) => {
          t(D).length === 0 ? Pe(fe) : Pe(be, !1);
        });
      }
      var ge = m(he, 2);
      {
        var Ce = (Pe) => {
          var Be = Qd(), je = i(Be);
          A(() => {
            N(Be, 1, `px-4 py-2 text-center text-xs ${t(O).option ?? ""} bg-yellow-500/10 border-t`, "svelte-39ftoh"), ie(je, `Maximum ${e.maxSelections ?? ""} selections reached`);
          }), o(Pe, Be);
        };
        g(ge, (Pe) => {
          t(w) && Pe(Ce);
        });
      }
      tt(se, (Pe) => W(ee, Pe), () => t(ee)), Ie(se, (Pe, Be) => kt?.(Pe, Be), () => ({ blur: "lg", opacity: "medium" })), A(() => N(
        se,
        1,
        `absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl ${t(O).dropdown ?? ""}`,
        "svelte-39ftoh"
      )), $e(1, se, () => mt, () => ({ direction: "up", duration: 200 })), o(ce, se);
    };
    g(te, (ce) => {
      t(_) && ce(J);
    });
  }
  var Y = m(te, 2), le = i(Y), H = m(le);
  {
    var ae = (ce) => {
      var se = Ct();
      A(() => ie(se, `out of maximum ${e.maxSelections ?? ""}`)), o(ce, se);
    };
    g(H, (ce) => {
      e.maxSelections && ce(ae);
    });
  }
  tt(re, (ce) => f = ce, () => f), Ie(re, (ce, se) => kt?.(ce, se), () => ({ blur: "sm", opacity: "light" })), Ie(re, (ce, se) => ft?.(ce, se), () => ({ enabled: !p(), strength: 0.1 })), A(() => {
    N(
      S,
      0,
      `w-4 h-4 transition-transform duration-200 ${t(_) ? "rotate-180" : ""} 
			       ${t(O).option ?? ""}`,
      "svelte-39ftoh"
    ), ie(le, `${t(B).length ?? ""} items selected `);
  }), o(r, re), Xe();
}
vt(["click", "input", "keydown"]);
var tc = (r, e) => e(1), rc = /* @__PURE__ */ c('<button aria-label="Go to first page"><!></button>'), ac = (r, e, a) => e(a() - 1), nc = /* @__PURE__ */ c("<span>...</span>"), oc = (r, e, a) => e(t(a)), ic = /* @__PURE__ */ c("<button> </button>"), lc = (r, e, a) => e(a() + 1), sc = (r, e, a) => e(a.totalPages), dc = /* @__PURE__ */ c('<button aria-label="Go to last page"><!></button>'), cc = /* @__PURE__ */ c('<nav><!> <button aria-label="Go to previous page"><!></button> <!> <button aria-label="Go to next page"><!></button> <!></nav>');
function G1(r, e) {
  Ke(e, !0);
  let a = s(e, "currentPage", 15, 1), n = s(e, "siblingCount", 3, 1), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md");
  s(e, "animated", 3, !0);
  let v = s(e, "glow", 3, !1), p = s(e, "jelly", 3, !0), y = s(e, "showFirstLast", 3, !0), R = s(e, "class", 3, ""), h = /* @__PURE__ */ dt(e, [
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
  const I = {
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
  }, z = () => {
    if (n() * 2 + 5 >= e.totalPages)
      return Array.from({ length: e.totalPages }, (X, K) => K + 1);
    const T = Math.max(a() - n(), 1), w = Math.min(a() + n(), e.totalPages), x = T > 2, C = w < e.totalPages - 1;
    if (!x && C) {
      const X = 3 + 2 * n();
      return [...Array.from({ length: X }, (k, u) => u + 1), "...", e.totalPages];
    }
    if (x && !C) {
      const X = 3 + 2 * n();
      return [1, "...", ...Array.from({ length: X }, (k, u) => e.totalPages - X + u + 1)];
    }
    return x && C ? [1, "...", ...Array.from({ length: w - T + 1 }, (K, k) => T + k), "...", e.totalPages] : [];
  }, M = (D) => {
    D < 1 || D > e.totalPages || D === a() || (a(D), e.onchange?.(D));
  }, f = I[l()], q = L[d()], ee = /* @__PURE__ */ Ee(z);
  var _ = cc();
  Ze(_, (D) => ({ class: D, "aria-label": "Pagination", ...h }), [
    () => Z("inline-flex items-center backdrop-blur-xl border rounded-2xl p-2", q.gap, f.container, R())
  ]);
  var E = i(_);
  {
    var B = (D) => {
      var T = rc();
      T.__click = [tc, M];
      var w = i(T);
      fi(w, {
        get size() {
          return q.icon;
        }
      }), Ie(T, (x, C) => jellyHover?.(x, C), () => ({
        enabled: p() && a() !== 1,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), A(
        (x) => {
          T.disabled = a() === 1, N(T, 1, x);
        },
        [
          () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(D, T);
    };
    g(E, (D) => {
      y() && D(B);
    });
  }
  var F = m(E, 2);
  F.__click = [ac, M, a];
  var j = i(F);
  da(j, {
    get size() {
      return q.icon;
    }
  }), Ie(F, (D, T) => jellyHover?.(D, T), () => ({
    enabled: p() && a() !== 1,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var V = m(F, 2);
  Ge(V, 17, () => t(ee), Vr, (D, T) => {
    var w = Se(), x = _e(w);
    {
      var C = (K) => {
        var k = nc();
        A((u) => N(k, 1, u), [
          () => ne(Z("flex items-center justify-center", q.button, "opacity-50"))
        ]), o(K, k);
      }, X = (K) => {
        var k = ic();
        k.__click = [oc, M, T];
        var u = i(k);
        Ie(k, (b, re) => jellyHover?.(b, re), () => ({
          enabled: p() && t(T) !== a(),
          scale: 1.05,
          duration: 200,
          borderRadius: "8px"
        })), A(
          (b) => {
            N(k, 1, b), xe(k, "aria-label", `Go to page ${t(T)}`), xe(k, "aria-current", t(T) === a() ? "page" : void 0), ie(u, t(T));
          },
          [
            () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200 font-medium", q.button, t(T) === a() ? f.active : f.button, t(T) === a() && v() && f.glow, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]
        ), o(K, k);
      };
      g(x, (K) => {
        t(T) === "..." ? K(C) : K(X, !1);
      });
    }
    o(D, w);
  });
  var O = m(V, 2);
  O.__click = [lc, M, a];
  var P = i(O);
  Rr(P, {
    get size() {
      return q.icon;
    }
  }), Ie(O, (D, T) => jellyHover?.(D, T), () => ({
    enabled: p() && a() !== e.totalPages,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var Q = m(O, 2);
  {
    var G = (D) => {
      var T = dc();
      T.__click = [sc, M, e];
      var w = i(T);
      bi(w, {
        get size() {
          return q.icon;
        }
      }), Ie(T, (x, C) => jellyHover?.(x, C), () => ({
        enabled: p() && a() !== e.totalPages,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), A(
        (x) => {
          T.disabled = a() === e.totalPages, N(T, 1, x);
        },
        [
          () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(D, T);
    };
    g(Q, (D) => {
      y() && D(G);
    });
  }
  A(
    (D, T) => {
      F.disabled = a() === 1, N(F, 1, D), O.disabled = a() === e.totalPages, N(O, 1, T);
    },
    [
      () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20")),
      () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
    ]
  ), o(r, _), Xe();
}
vt(["click"]);
var vc = /* @__PURE__ */ c("<span><!></span>"), uc = /* @__PURE__ */ c('<div class="flex justify-between items-center svelte-b8e192"><label class="text-sm font-medium text-white svelte-b8e192"> </label> <!></div>'), fc = /* @__PURE__ */ c('<div role="progressbar" aria-valuemin="0"><div></div></div>'), bc = /* @__PURE__ */ c("<div><!></div>"), gc = /* @__PURE__ */ c('<div role="progressbar" aria-valuemin="0"><svg class="transform -rotate-90 svelte-b8e192"><circle stroke="currentColor" fill="transparent" class="text-white/10 svelte-b8e192"></circle><circle stroke="currentColor" fill="transparent" stroke-linecap="round"></circle></svg> <!></div>'), mc = /* @__PURE__ */ c("<div><!> <!></div>");
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
function U1(r, e) {
  Ke(e, !0), Qe(r, hc);
  const a = s(e, "value", 3, 0), n = s(e, "max", 3, 100), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), v = s(e, "type", 3, "linear"), p = s(e, "blur", 3, "md"), y = s(e, "showValue", 3, !1), R = s(e, "showPercentage", 3, !1), h = s(e, "indeterminate", 3, !1), I = s(e, "animate", 3, !0), L = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), M = /* @__PURE__ */ dt(e, [
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
  ]), f = `progress-${Math.random().toString(36).substr(2, 9)}`, q = /* @__PURE__ */ Ee(() => h() ? 0 : Math.min(100, Math.max(0, a() / n() * 100))), ee = {
    sm: { linear: "h-1", circular: "w-8 h-8", text: "text-xs" },
    md: { linear: "h-2", circular: "w-12 h-12", text: "text-sm" },
    lg: { linear: "h-3", circular: "w-16 h-16", text: "text-base" }
  }, _ = {
    default: { track: "bg-white/10", fill: "bg-blue-500" },
    glass: {
      track: "glass-subtle",
      fill: "bg-blue-500/80 backdrop-blur-sm"
    },
    terminal: { track: "bg-terminal-green/20", fill: "bg-terminal-green" }
  }, E = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = Z("relative overflow-hidden rounded-full", ee[l()][v()], _[d()].track, d() === "glass" && E[p()]), F = Z("h-full transition-all duration-500 ease-out rounded-full", _[d()].fill, h() && "animate-pulse"), j = v() === "circular" ? parseInt(ee[l()].circular.split(" ")[0].slice(2)) * 4 : 0, V = Math.max(2, j / 8), O = (j - V) / 2, P = 2 * Math.PI * O, Q = P, G = /* @__PURE__ */ Ee(() => P - t(q) / 100 * P);
  bt(() => {
    Qt("Progress", "small");
  });
  var D = mc();
  Ze(D, () => ({ class: "w-full space-y-2", ...M }), void 0, void 0, "svelte-b8e192");
  var T = i(D);
  {
    var w = (K) => {
      var k = uc(), u = i(k), b = i(u), re = m(u, 2);
      {
        var de = (ue) => {
          var ve = vc(), $ = i(ve);
          {
            var U = (S) => {
              var te = Ct();
              A((J) => ie(te, `${J ?? ""}%`), [() => t(q).toFixed(0)]), o(S, te);
            }, oe = (S) => {
              var te = Se(), J = _e(te);
              {
                var Y = (le) => {
                  var H = Ct();
                  A(() => ie(H, `${a() ?? ""}/${n() ?? ""}`)), o(le, H);
                };
                g(
                  J,
                  (le) => {
                    y() && le(Y);
                  },
                  !0
                );
              }
              o(S, te);
            };
            g($, (S) => {
              R() ? S(U) : S(oe, !1);
            });
          }
          A((S) => N(ve, 1, S, "svelte-b8e192"), [
            () => ne(Z("font-medium text-white/80", ee[l()].text))
          ]), o(ue, ve);
        };
        g(re, (ue) => {
          (y() || R()) && ue(de);
        });
      }
      A(() => {
        xe(u, "id", `progress-label-${f}`), xe(u, "for", `progress-${f}`), ie(b, e.label);
      }), o(K, k);
    };
    g(T, (K) => {
      e.label && K(w);
    });
  }
  var x = m(T, 2);
  {
    var C = (K) => {
      var k = fc(), u = i(k);
      let b;
      Ie(u, (re, de) => kt?.(re, de), () => I() && !L() ? { blur: p(), opacity: "subtle" } : void 0), A(
        (re, de) => {
          xe(k, "id", `progress-${f}`), N(k, 1, re, "svelte-b8e192"), xe(k, "aria-valuemax", n()), xe(k, "aria-valuenow", h() ? void 0 : a()), xe(k, "aria-label", e.label ? void 0 : "Progress"), xe(k, "aria-labelledby", e.label ? `progress-label-${f}` : void 0), N(u, 1, ne(F), "svelte-b8e192"), b = ht(u, "", b, de);
        },
        [
          () => ne(Z(B, z())),
          () => ({
            width: h() ? "30%" : `${t(q)}%`,
            animation: h() && !L() ? "progress-indeterminate 2s ease-in-out infinite" : void 0
          })
        ]
      ), o(K, k);
    }, X = (K) => {
      var k = gc(), u = i(k), b = i(u), re = m(b);
      let de;
      var ue = m(u, 2);
      {
        var ve = ($) => {
          var U = bc(), oe = i(U);
          {
            var S = (J) => {
              var Y = Ct();
              A((le) => ie(Y, `${le ?? ""}%`), [() => t(q).toFixed(0)]), o(J, Y);
            }, te = (J) => {
              var Y = Se(), le = _e(Y);
              {
                var H = (ae) => {
                  var ce = Ct();
                  A(() => ie(ce, a())), o(ae, ce);
                };
                g(
                  le,
                  (ae) => {
                    y() && ae(H);
                  },
                  !0
                );
              }
              o(J, Y);
            };
            g(oe, (J) => {
              R() ? J(S) : J(te, !1);
            });
          }
          A((J) => N(U, 1, J, "svelte-b8e192"), [
            () => ne(Z("absolute inset-0 flex items-center justify-center font-medium text-white", ee[l()].text))
          ]), o($, U);
        };
        g(ue, ($) => {
          (y() || R()) && $(ve);
        });
      }
      A(
        ($, U) => {
          N(k, 1, $, "svelte-b8e192"), xe(k, "aria-valuemax", n()), xe(k, "aria-valuenow", h() ? void 0 : a()), xe(k, "aria-label", e.label || "Progress"), xe(u, "width", j), xe(u, "height", j), xe(b, "cx", j / 2), xe(b, "cy", j / 2), xe(b, "r", O), xe(b, "stroke-width", V), xe(re, "cx", j / 2), xe(re, "cy", j / 2), xe(re, "r", O), xe(re, "stroke-width", V), xe(re, "stroke-dasharray", Q), xe(re, "stroke-dashoffset", h() ? Q * 0.75 : t(G)), de = N(re, 0, "text-blue-500 transition-all duration-500 ease-out svelte-b8e192", null, de, U);
        },
        [
          () => ne(Z("relative inline-flex items-center justify-center", ee[l()].circular, z())),
          () => ({ "animate-spin": h() && !L() })
        ]
      ), o(K, k);
    };
    g(x, (K) => {
      v() === "linear" ? K(C) : K(X, !1);
    });
  }
  o(r, D), Xe();
}
var pc = (r, e, a) => !t(e).disabled && a(t(e).value), xc = /* @__PURE__ */ c("<div></div>"), _c = /* @__PURE__ */ c("<span> </span>"), wc = /* @__PURE__ */ c('<label><input type="radio" class="sr-only svelte-mbuql4"/> <div><!></div> <div class="flex flex-col svelte-mbuql4"><span> </span> <!></div></label>'), yc = /* @__PURE__ */ c('<p class="text-red-400 text-sm mt-2 animate-pulse svelte-mbuql4"> </p>'), kc = /* @__PURE__ */ c("<div><!> <!></div>");
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
function Y1(r, e) {
  Ke(e, !0), Qe(r, Cc);
  let a = s(e, "value", 15), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "orientation", 3, "vertical"), v = s(e, "animated", 3, !0), p = s(e, "glow", 3, !1), y = s(e, "jelly", 3, !0), R = s(e, "class", 3, ""), h = /* @__PURE__ */ dt(e, [
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
  const I = (B) => {
    a(B), e.onchange?.(B);
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
  }, z = {
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
  }, M = L[n()], f = z[l()];
  var q = kc();
  Ze(
    q,
    (B) => ({ class: B, ...h }),
    [
      () => Z("relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300", M.container, d() === "horizontal" ? "inline-flex flex-row gap-6" : "flex flex-col gap-3", e.error && "border-red-500/50", R())
    ],
    void 0,
    "svelte-mbuql4"
  );
  var ee = i(q);
  Ge(ee, 17, () => e.options, (B) => B.value, (B, F) => {
    var j = wc(), V = i(j);
    V.__change = [pc, F, I];
    var O = m(V, 2), P = i(O);
    {
      var Q = (C) => {
        var X = xc();
        A((K) => N(X, 1, K, "svelte-mbuql4"), [
          () => ne(Z("rounded-full bg-white transition-all duration-300", f.dot, v() && "animate-pulse"))
        ]), o(C, X);
      };
      g(P, (C) => {
        a() === t(F).value && C(Q);
      });
    }
    Ie(O, (C, X) => jt?.(C, X), () => ({
      enabled: v() && a() === t(F).value,
      intensity: 0.05,
      speed: 2e3
    }));
    var G = m(O, 2), D = i(G), T = i(D), w = m(D, 2);
    {
      var x = (C) => {
        var X = _c(), K = i(X);
        A(
          (k) => {
            N(X, 1, k, "svelte-mbuql4"), ie(K, t(F).description);
          },
          [
            () => ne(Z("text-xs opacity-60 mt-0.5", M.label))
          ]
        ), o(C, X);
      };
      g(w, (C) => {
        t(F).description && C(x);
      });
    }
    Ie(j, (C, X) => jellyHover?.(C, X), () => ({
      enabled: y() && !t(F).disabled,
      scale: 1.02,
      duration: 200,
      borderRadius: "16px"
    })), A(
      (C, X, K) => {
        N(j, 1, C, "svelte-mbuql4"), xe(V, "name", e.name), ts(V, t(F).value), Xt(V, a() === t(F).value), V.disabled = t(F).disabled, N(O, 1, X, "svelte-mbuql4"), N(D, 1, K, "svelte-mbuql4"), ie(T, t(F).label);
      },
      [
        () => ne(Z("relative flex items-center cursor-pointer group", f.gap, t(F).disabled && "opacity-50 cursor-not-allowed")),
        () => ne(Z("relative rounded-full border-2 transition-all duration-300 flex items-center justify-center", f.radio, M.radio, a() === t(F).value && M.checked, a() === t(F).value && p() && M.glow, v() && "transform-gpu will-change-transform", !t(F).disabled && "group-hover:scale-110")),
        () => ne(Z("font-medium transition-colors duration-200", f.label, M.label, !t(F).disabled && "group-hover:text-white"))
      ]
    ), o(B, j);
  });
  var _ = m(ee, 2);
  {
    var E = (B) => {
      var F = yc(), j = i(F);
      A(() => ie(j, e.error)), o(B, F);
    };
    g(_, (B) => {
      e.error && B(E);
    });
  }
  o(r, q), Xe();
}
vt(["change"]);
var Ec = /* @__PURE__ */ c('<label class="block text-sm font-medium text-white/80 mb-2 svelte-gc8g7h"> </label>'), Sc = (r, e, a) => e(t(a)), Tc = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, Mc = /* @__PURE__ */ c('<li role="option" tabindex="-1"> </li>'), Ac = /* @__PURE__ */ c('<ul role="listbox"></ul>'), zc = /* @__PURE__ */ c('<!> <div><span class="truncate svelte-gc8g7h"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-gc8g7h"></path></svg></div> <!>', 1);
const Ic = {
  hash: "svelte-gc8g7h",
  code: `div[role="combobox"].svelte-gc8g7h {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-gc8g7h {transition:none;
            animation: none;}
    }`
};
function W1(r, e) {
  Ke(e, !0), Qe(r, Ic);
  let a = s(e, "options", 19, () => []), n = s(e, "value", 7, ""), l = s(e, "placeholder", 3, "Select an option..."), d = s(e, "disabled", 3, !1), v = s(e, "size", 3, "md"), p = s(e, "variant", 3, "glass"), y = s(e, "blur", 3, "md"), R = s(e, "animate", 3, !0), h = s(e, "liquid", 3, !1), I = s(e, "magnetic", 3, !1), L = s(e, "jelly", 3, !1), z = s(e, "glow", 3, !1), M = s(e, "reduceMotion", 3, !1), f = s(e, "label", 3, ""), q = s(e, "class", 3, ""), ee = /* @__PURE__ */ dt(e, [
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
  ]), _ = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(void 0), B = /* @__PURE__ */ ye(void 0), F = /* @__PURE__ */ ye(-1);
  const j = `select-${Math.random().toString(36).substr(2, 9)}`, V = f() ? `${j}-label` : void 0, O = `${j}-listbox`, P = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
  }, Q = {
    default: "bg-white/5 border border-white/10 text-white",
    glass: "glass-subtle border border-white/20 text-white",
    terminal: "terminal text-green-300",
    liquid: "bg-gradient-to-r from-white/5 to-white/15 border border-white/20 text-white backdrop-blur-md"
  }, G = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, D = /* @__PURE__ */ Ee(() => a().find((Y) => Y.value === n())), T = Z("relative flex items-center justify-between rounded-brand-md cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "transition-all duration-200", P[v()], Q[p()], p() === "glass" && G[y()], h() && "backdrop-blur-md hover:backdrop-blur-lg", z() && "focus:shadow-lg focus:shadow-brand-primary/20", L() && !d() && "hover:scale-105 active:scale-95", d() && "opacity-50 cursor-not-allowed", q()), w = Z("absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg", "max-h-60 overflow-auto", Q[p()], p() === "glass" && `${G[y()]} border border-white/20`);
  function x(Y) {
    if (!d())
      switch (Y.key) {
        case "Enter":
        case " ":
          Y.preventDefault(), t(_) && t(F) >= 0 ? u(a()[t(F)]) : X();
          break;
        case "Escape":
          t(_) && (Y.preventDefault(), k());
          break;
        case "ArrowDown":
          Y.preventDefault(), t(_) ? C(1) : K();
          break;
        case "ArrowUp":
          Y.preventDefault(), t(_) ? C(-1) : K();
          break;
        case "Home":
          t(_) && (Y.preventDefault(), W(F, 0));
          break;
        case "End":
          t(_) && (Y.preventDefault(), W(F, a().length - 1));
          break;
      }
  }
  function C(Y) {
    const le = a().filter((ae) => !ae.disabled);
    if (le.length === 0) return;
    let H = t(F) + Y;
    H < 0 ? H = le.length - 1 : H >= le.length && (H = 0), W(F, a().findIndex((ae) => ae === le[H]), !0);
  }
  function X() {
    d() || (W(_, !t(_)), t(_) && W(
      F,
      n() ? a().findIndex((Y) => Y.value === n()) : -1,
      !0
    ));
  }
  function K() {
    d() || (W(_, !0), W(
      F,
      n() ? a().findIndex((Y) => Y.value === n()) : -1,
      !0
    ));
  }
  function k() {
    W(_, !1), W(F, -1);
  }
  function u(Y) {
    Y.disabled || (n(Y.value), e.onValueChange?.(Y.value), k());
  }
  function b(Y) {
    t(E) && !t(E).contains(Y.target) && k();
  }
  bt(() => {
    if (t(_))
      return document.addEventListener("click", b), () => document.removeEventListener("click", b);
  }), bt(() => {
    Qt("Select");
  });
  var re = zc(), de = _e(re);
  {
    var ue = (Y) => {
      var le = Ec(), H = i(le);
      A(() => {
        xe(le, "id", V), xe(le, "for", j), ie(H, f());
      }), o(Y, le);
    };
    g(de, (Y) => {
      f() && Y(ue);
    });
  }
  var ve = m(de, 2);
  Ze(
    ve,
    () => ({
      id: j,
      class: T,
      role: "combobox",
      "aria-expanded": t(_),
      "aria-haspopup": "listbox",
      "aria-labelledby": V || e["aria-label"],
      "aria-activedescendant": t(F) > -1 ? `${j}-option-${t(F)}` : void 0,
      tabindex: d() ? -1 : 0,
      onkeydown: x,
      onclick: X,
      ...ee
    }),
    void 0,
    void 0,
    "svelte-gc8g7h"
  );
  var $ = i(ve), U = i($), oe = m($, 2);
  let S;
  tt(ve, (Y) => W(E, Y), () => t(E)), Ie(ve, (Y, le) => ft?.(Y, le), () => (I() || L()) && !d() && !M() ? {
    strength: I() ? 0.1 : 0.08,
    distance: I() ? 40 : 20
  } : void 0);
  var te = m(ve, 2);
  {
    var J = (Y) => {
      var le = Ac();
      Ge(le, 23, a, (H) => H.value, (H, ae, ce) => {
        var se = Mc();
        se.__click = [Sc, u, ae], se.__keydown = [Tc, u, ae];
        var he = i(se);
        A(
          (fe) => {
            xe(se, "id", `${j}-option-${t(ce)}`), N(se, 1, fe, "svelte-gc8g7h"), xe(se, "aria-selected", n() === t(ae).value), xe(se, "aria-disabled", t(ae).disabled), ie(he, t(ae).label);
          },
          [
            () => ne(Z("px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10", t(F) === t(ce) && "bg-white/20", t(ae).disabled && "opacity-50 cursor-not-allowed"))
          ]
        ), Ot("mouseenter", se, () => !t(ae).disabled && W(F, t(ce), !0)), o(H, se);
      }), tt(le, (H) => W(B, H), () => t(B)), A(() => {
        N(le, 1, ne(w), "svelte-gc8g7h"), xe(le, "id", O), xe(le, "aria-labelledby", V || e["aria-label"]);
      }), $e(1, le, () => mt, () => ({
        direction: "down",
        distance: 10,
        duration: R() && !M() ? 150 : 0
      })), $e(2, le, () => mt, () => ({
        direction: "up",
        distance: 10,
        duration: R() && !M() ? 100 : 0
      })), o(Y, le);
    };
    g(te, (Y) => {
      t(_) && Y(J);
    });
  }
  A(
    (Y) => {
      ie(U, t(D)?.label || l()), S = N(oe, 0, "w-4 h-4 ml-2 transition-transform duration-200 svelte-gc8g7h", null, S, Y);
    },
    [() => ({ "rotate-180": t(_) })]
  ), o(r, re), Xe();
}
vt(["click", "keydown"]);
var Pc = (r, e, a) => {
  r.stopPropagation(), e(t(a).value);
}, Lc = /* @__PURE__ */ c('<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md"> <button class="hover:text-red-300"><!></button></span>'), Dc = /* @__PURE__ */ c('<span class="text-xs opacity-70"> </span>'), jc = /* @__PURE__ */ c('<div class="flex flex-wrap gap-1"><!> <!></div>'), Rc = /* @__PURE__ */ c("<span> </span>"), Nc = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>'), Oc = (r, e) => {
  r.stopPropagation(), e();
}, qc = /* @__PURE__ */ c('<button class="p-1 hover:bg-white/10 rounded transition-colors"><!></button>'), Bc = /* @__PURE__ */ c('<div class="p-2 border-b border-white/10"><div class="relative"><!> <input placeholder="Search options..." autocomplete="off"/></div></div>'), Fc = /* @__PURE__ */ c("<div> </div>"), Hc = /* @__PURE__ */ c('<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5"> </div>'), Vc = (r, e, a) => e(t(a)), Gc = (r, e, a) => r.key === "Enter" && e(t(a)), Uc = /* @__PURE__ */ c('<div class="text-xs opacity-60 mt-0.5"> </div>'), Yc = /* @__PURE__ */ c("<div><!></div>"), Wc = /* @__PURE__ */ c('<div role="option"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div>'), Kc = /* @__PURE__ */ c("<!> <!>", 1), Xc = /* @__PURE__ */ c('<div><!> <div class="overflow-y-auto max-h-48 svelte-13k9go" role="listbox"><!></div></div>'), Zc = /* @__PURE__ */ c('<p class="text-red-400 text-sm mt-1" role="alert"> </p>'), Qc = /* @__PURE__ */ c('<div><div role="combobox" aria-haspopup="listbox"><div class="flex-1 truncate"><!></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!></div>');
const Jc = {
  hash: "svelte-13k9go",
  code: ".overflow-y-auto.svelte-13k9go {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}"
};
function K1(r, e) {
  Ke(e, !0), Qe(r, Jc);
  let a = s(e, "value", 15), n = s(e, "placeholder", 3, "Select an option..."), l = s(e, "multiple", 3, !1), d = s(e, "searchable", 3, !1), v = s(e, "clearable", 3, !1), p = s(e, "disabled", 3, !1), y = s(e, "loading", 3, !1), R = s(e, "size", 3, "md"), h = s(e, "variant", 3, "glass"), I = s(e, "closeOnSelect", 3, !0), L = s(e, "class", 3, ""), z = /* @__PURE__ */ dt(e, [
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
    "closeOnSelect",
    "class"
  ]);
  const M = Mt();
  let f = /* @__PURE__ */ ye(!1), q = /* @__PURE__ */ ye(""), ee = /* @__PURE__ */ ye(null), _ = /* @__PURE__ */ ye(null), E = /* @__PURE__ */ ye(
    -1
    // mutated via keyboard handlers
  );
  const B = `select-${Math.random().toString(36).slice(2, 11)}`, F = /* @__PURE__ */ Ee(() => () => a() ? Array.isArray(a()) ? a() : [a()] : []), j = /* @__PURE__ */ Ee(() => () => {
    if (!t(q).trim()) return e.options;
    const H = t(q).toLowerCase();
    return e.options.filter((ae) => ae.label.toLowerCase().includes(H) || ae.description?.toLowerCase().includes(H));
  }), V = /* @__PURE__ */ Ee(() => () => {
    if (!e.groupBy) return { "": t(j)() };
    const H = {};
    return t(j)().forEach((ae) => {
      const ce = ae.group || "";
      H[ce] || (H[ce] = []), H[ce].push(ae);
    }), H;
  }), O = /* @__PURE__ */ Ee(() => () => t(F)().length === 0 ? n() : l() ? t(F)().length === 1 ? e.options.find((H) => H.value === t(F)()[0])?.label || "" : `${t(F)().length} selected` : e.options.find((H) => H.value === t(F)()[0])?.label || ""), P = {
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
  }, Q = {
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
  }, G = P[R()], D = Q[h()];
  bt(() => {
    t(V)(), t(O)(), v(), y(), e.error, L();
  });
  function T() {
    p() || (W(f, !t(f)), t(f) && d() && setTimeout(() => t(_)?.focus(), 0));
  }
  function w(H) {
    if (!H.disabled) {
      if (l()) {
        const ae = t(F)();
        if (ae.includes(H.value))
          a(ae.filter((se) => se !== H.value));
        else {
          if (e.maxSelections && ae.length >= e.maxSelections) return;
          a([...ae, H.value]);
        }
      } else
        a(H.value), I() && W(f, !1);
      M("change", { value: a(), option: H });
    }
  }
  function x() {
    a(l() ? [] : void 0), M("clear");
  }
  function C(H) {
    l() && a(t(F)().filter((ae) => ae !== H));
  }
  function X(H) {
    if (!p())
      switch (H.key) {
        case "Enter": {
          H.preventDefault(), t(f) && t(E) >= 0 && t(j)()[t(E)] ? w(t(j)()[t(E)]) : t(f) || T();
          break;
        }
        case "Escape": {
          t(f) && (W(f, !1), H.stopPropagation());
          break;
        }
        case "ArrowDown": {
          H.preventDefault(), t(f) ? W(E, Math.min(t(E) + 1, t(j)().length - 1), !0) : T();
          break;
        }
        case "ArrowUp": {
          H.preventDefault(), t(f) && W(E, Math.max(t(E) - 1, -1), !0);
          break;
        }
        case "Tab": {
          t(f) && W(f, !1);
          break;
        }
      }
  }
  function K(H) {
    t(ee) && !t(ee).contains(H.target) && W(f, !1);
  }
  wt(() => (document.addEventListener("click", K), () => document.removeEventListener("click", K))), bt(() => {
    t(j)(), W(E, -1);
  });
  var k = Qc();
  Ze(k, (H) => ({ class: H, ...z }), [() => Z("relative w-full", L())], void 0, "svelte-13k9go");
  var u = i(k);
  u.__click = T, u.__keydown = X;
  var b = i(u), re = i(b);
  {
    var de = (H) => {
      var ae = jc(), ce = i(ae);
      Ge(ce, 16, () => t(F)().slice(0, 2), (fe) => fe, (fe, be) => {
        const ge = /* @__PURE__ */ Ee(() => e.options.find((je) => je.value === be));
        var Ce = Se(), Pe = _e(Ce);
        {
          var Be = (je) => {
            var we = Lc(), pe = i(we), Te = m(pe);
            Te.__click = [Pc, C, ge];
            var Ne = i(Te);
            sa(Ne, { size: 12 }), A(() => ie(pe, `${t(ge).label ?? ""} `)), o(je, we);
          };
          g(Pe, (je) => {
            t(ge) && je(Be);
          });
        }
        o(fe, Ce);
      });
      var se = m(ce, 2);
      {
        var he = (fe) => {
          var be = Dc(), ge = i(be);
          A((Ce) => ie(ge, `+${Ce ?? ""} more`), [() => t(F)().length - 2]), o(fe, be);
        };
        g(se, (fe) => {
          t(F)().length > 2 && fe(he);
        });
      }
      o(H, ae);
    }, ue = (H) => {
      var ae = Rc(), ce = i(ae);
      A(
        (se, he) => {
          N(ae, 1, se, "svelte-13k9go"), ie(ce, he);
        },
        [
          () => ne(Z(!t(F)().length && "opacity-60")),
          () => t(O)()
        ]
      ), o(H, ae);
    };
    g(re, (H) => {
      l() && t(F)().length > 1 ? H(de) : H(ue, !1);
    });
  }
  var ve = m(b, 2), $ = i(ve);
  {
    var U = (H) => {
      var ae = Nc();
      o(H, ae);
    }, oe = (H) => {
      var ae = Se(), ce = _e(ae);
      {
        var se = (he) => {
          var fe = qc();
          fe.__click = [Oc, x];
          var be = i(fe);
          sa(be, { size: 16 }), o(he, fe);
        };
        g(
          ce,
          (he) => {
            v() && t(F)().length > 0 && he(se);
          },
          !0
        );
      }
      o(H, ae);
    };
    g($, (H) => {
      y() ? H(U) : H(oe, !1);
    });
  }
  var S = m($, 2);
  {
    let H = /* @__PURE__ */ Ee(() => Z("transition-transform duration-200", t(f) && "rotate-180"));
    tn(S, {
      size: 16,
      get class() {
        return t(H);
      }
    });
  }
  var te = m(u, 2);
  {
    var J = (H) => {
      var ae = Xc(), ce = i(ae);
      {
        var se = (Ce) => {
          var Pe = Bc(), Be = i(Pe), je = i(Be);
          gi(je, {
            size: 16,
            class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
          });
          var we = m(je, 2);
          tt(we, (pe) => W(_, pe), () => t(_)), A((pe) => N(we, 1, pe, "svelte-13k9go"), [
            () => ne(Z("w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50", D.search))
          ]), pr(we, () => t(q), (pe) => W(q, pe)), o(Ce, Pe);
        };
        g(ce, (Ce) => {
          d() && Ce(se);
        });
      }
      var he = m(ce, 2), fe = i(he);
      {
        var be = (Ce) => {
          var Pe = Fc(), Be = i(Pe);
          A(
            (je) => {
              N(Pe, 1, je, "svelte-13k9go"), ie(Be, t(q) ? "No options found" : "No options available");
            },
            [
              () => ne(Z("text-center py-4 opacity-60", G.option))
            ]
          ), o(Ce, Pe);
        }, ge = (Ce) => {
          var Pe = Se(), Be = _e(Pe);
          Ge(Be, 17, () => Object.entries(t(V)()), ([je, we]) => je, (je, we) => {
            var pe = /* @__PURE__ */ Ee(() => Kr(t(we), 2));
            let Te = () => t(pe)[0], Ne = () => t(pe)[1];
            var Ae = Kc(), Le = _e(Ae);
            {
              var qe = (ke) => {
                var me = Hc(), ze = i(me);
                A(() => ie(ze, Te())), o(ke, me);
              };
              g(Le, (ke) => {
                Te() && Object.keys(t(V)()).length > 1 && ke(qe);
              });
            }
            var Fe = m(Le, 2);
            Ge(Fe, 17, Ne, (ke) => ke.value, (ke, me) => {
              const ze = /* @__PURE__ */ Ee(() => t(F)().includes(t(me).value)), De = /* @__PURE__ */ Ee(() => t(j)().indexOf(t(me)) === t(E));
              var He = Wc();
              He.__click = [Vc, w, me], He.__keydown = [Gc, w, me];
              var Je = i(He), We = i(Je), at = i(We), lt = m(We, 2);
              {
                var et = (Oe) => {
                  var Ve = Uc(), rt = i(Ve);
                  A(() => ie(rt, t(me).description)), o(Oe, Ve);
                };
                g(lt, (Oe) => {
                  t(me).description && Oe(et);
                });
              }
              var nt = m(Je, 2);
              {
                var Ue = (Oe) => {
                  var Ve = Yc(), rt = i(Ve);
                  {
                    var gt = (_t) => {
                      Wa(_t, { size: 12, class: "text-white" });
                    };
                    g(rt, (_t) => {
                      t(ze) && _t(gt);
                    });
                  }
                  A((_t) => N(Ve, 1, _t, "svelte-13k9go"), [
                    () => ne(Z("w-4 h-4 border rounded flex items-center justify-center", t(ze) ? "bg-blue-500 border-blue-500" : "border-white/20"))
                  ]), o(Oe, Ve);
                }, Re = (Oe) => {
                  var Ve = Se(), rt = _e(Ve);
                  {
                    var gt = (_t) => {
                      Wa(_t, { size: 16, class: "text-blue-400" });
                    };
                    g(
                      rt,
                      (_t) => {
                        t(ze) && _t(gt);
                      },
                      !0
                    );
                  }
                  o(Oe, Ve);
                };
                g(nt, (Oe) => {
                  l() ? Oe(Ue) : Oe(Re, !1);
                });
              }
              A(
                (Oe) => {
                  N(He, 1, Oe, "svelte-13k9go"), xe(He, "aria-selected", t(ze)), xe(He, "tabindex", t(me).disabled ? -1 : 0), ie(at, t(me).label);
                },
                [
                  () => ne(Z(
                    "flex items-center justify-between cursor-pointer transition-colors",
                    G.option,
                    t(me).disabled ? "opacity-50 cursor-not-allowed" : D.option,
                    t(ze) && D.optionSelected,
                    t(De) && "bg-white/5"
                  ))
                ]
              ), o(ke, He);
            }), o(je, Ae);
          }), o(Ce, Pe);
        };
        g(fe, (Ce) => {
          t(j)().length === 0 ? Ce(be) : Ce(ge, !1);
        });
      }
      A(
        (Ce) => {
          N(ae, 1, Ce, "svelte-13k9go"), xe(he, "id", `${B}-listbox`);
        },
        [
          () => ne(Z("absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden", D.dropdown, G.dropdown))
        ]
      ), o(H, ae);
    };
    g(te, (H) => {
      t(f) && H(J);
    });
  }
  var Y = m(te, 2);
  {
    var le = (H) => {
      var ae = Zc(), ce = i(ae);
      A(() => ie(ce, e.error)), o(H, ae);
    };
    g(Y, (H) => {
      e.error && H(le);
    });
  }
  tt(k, (H) => W(ee, H), () => t(ee)), A(
    (H) => {
      N(u, 1, H, "svelte-13k9go"), xe(u, "tabindex", p() ? -1 : 0), xe(u, "aria-expanded", t(f)), xe(u, "aria-controls", `${B}-listbox`), xe(u, "aria-labelledby", B);
    },
    [
      () => ne(Z("relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer", G.trigger, D.trigger, p() && "opacity-50 cursor-not-allowed", e.error && "border-red-500/50", t(f) && "ring-2 ring-blue-400/50"))
    ]
  ), o(r, k), Xe();
}
vt(["click", "keydown"]);
var $c = /* @__PURE__ */ c("<div></div>"), ev = /* @__PURE__ */ c("<div><!></div>"), tv = /* @__PURE__ */ c("<div></div>"), rv = /* @__PURE__ */ c("<div></div>"), av = /* @__PURE__ */ c("<div><!></div>");
const nv = {
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
function X1(r, e) {
  Ke(e, !0), Qe(r, nv);
  const a = s(e, "variant", 3, "glass"), n = s(e, "type", 3, "text"), l = s(e, "lines", 3, 3), d = s(e, "animated", 3, !0), v = s(e, "glow", 3, !1), p = s(e, "speed", 3, "normal"), y = s(e, "class", 3, ""), R = s(e, "rounded", 3, !0), h = /* @__PURE__ */ dt(e, [
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
  ]), I = {
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
  }, z = {
    text: { width: "w-full", height: "h-4", spacing: "space-y-3" },
    avatar: { width: "w-12", height: "h-12", rounded: "rounded-full" },
    card: { width: "w-full", height: "h-48", rounded: "rounded-2xl" },
    button: { width: "w-24", height: "h-10", rounded: "rounded-xl" },
    image: { width: "w-full", height: "h-64", rounded: "rounded-2xl" },
    paragraph: { width: "w-full", height: "h-3", spacing: "space-y-2" }
  }, M = I[a()], f = z[n()], q = L[p()], ee = /* @__PURE__ */ Ee(() => n() === "text" || n() === "paragraph" ? Array.from({ length: l() }, (j, V) => V === l() - 1 ? "60%" : `${85 + Math.floor(Math.random() * 15)}%`) : []);
  var _ = Se(), E = _e(_);
  {
    var B = (j) => {
      var V = tv();
      Ze(V, (O) => ({ class: O, ...h }), [() => Z(f.spacing, y())], void 0, "svelte-1jcbe1x"), Ge(V, 21, () => t(ee), Vr, (O, P, Q) => {
        var G = ev(), D = i(G);
        {
          var T = (w) => {
            var x = $c();
            A((C) => N(x, 1, C, "svelte-1jcbe1x"), [
              () => ne(Z("absolute inset-0 bg-gradient-to-r", M.shimmer, q, "animate-shimmer"))
            ]), o(w, x);
          };
          g(D, (w) => {
            d() && w(T);
          });
        }
        Ie(G, (w, x) => jt?.(w, x), () => ({
          enabled: d() && a() === "liquid",
          intensity: 0.02,
          speed: 3e3
        })), A(
          (w) => {
            N(G, 1, w, "svelte-1jcbe1x"), ht(G, `width: ${(e.width || t(P)) ?? ""}`);
          },
          [
            () => ne(Z("relative overflow-hidden backdrop-blur-xl border", f.height, M.bg, M.border, v() && M.glow, R() && "rounded-lg", d() && "transform-gpu will-change-transform"))
          ]
        ), $e(3, G, () => mt, () => ({ duration: 200, delay: Q * 50 })), o(O, G);
      }), o(j, V);
    }, F = (j) => {
      var V = av();
      Ze(
        V,
        (Q, G) => ({ class: Q, ...h, [wr]: G }),
        [
          () => Z("relative overflow-hidden backdrop-blur-xl border", f.width, f.height, M.bg, M.border, f.rounded || R() && "rounded-lg", v() && M.glow, d() && "transform-gpu will-change-transform", y()),
          () => ({ width: e.width, height: e.height })
        ],
        void 0,
        "svelte-1jcbe1x"
      );
      var O = i(V);
      {
        var P = (Q) => {
          var G = rv();
          A((D) => N(G, 1, D, "svelte-1jcbe1x"), [
            () => ne(Z("absolute inset-0 bg-gradient-to-r", M.shimmer, q, "animate-shimmer"))
          ]), o(Q, G);
        };
        g(O, (Q) => {
          d() && Q(P);
        });
      }
      Ie(V, (Q, G) => jt?.(Q, G), () => ({
        enabled: d() && a() === "liquid",
        intensity: 0.03,
        speed: 3e3
      })), $e(3, V, () => mt, () => ({ duration: 200 })), o(j, V);
    };
    g(E, (j) => {
      n() === "text" || n() === "paragraph" ? j(B) : j(F, !1);
    });
  }
  o(r, _), Xe();
}
function ov(r, e, a, n) {
  if (e()) return;
  W(a, !0), n(r);
  const l = (v) => n(v), d = () => {
    W(a, !1), document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", d);
  };
  document.addEventListener("mousemove", l), document.addEventListener("mouseup", d);
}
var iv = /* @__PURE__ */ c('<span class="ml-2 text-white/70 svelte-wpw1ph"> </span>'), lv = /* @__PURE__ */ c("<label> <!></label>"), sv = /* @__PURE__ */ c('<div class="absolute top-1/2 w-1 h-1 bg-white/50 rounded-full -translate-y-1/2 -translate-x-1/2 svelte-wpw1ph"></div>'), dv = /* @__PURE__ */ c('<div class="flex justify-center mt-2 svelte-wpw1ph"><span> </span></div>'), cv = /* @__PURE__ */ c('<div class="w-full space-y-2 svelte-wpw1ph"><!> <div><div role="slider"><div></div> <div></div> <!></div> <!></div></div>');
const vv = {
  hash: "svelte-wpw1ph",
  code: `div[role='slider'].svelte-wpw1ph {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-wpw1ph {transition:none;
			animation: none;will-change:auto;}
	}`
};
function Z1(r, e) {
  Ke(e, !0), Qe(r, vv);
  let a = s(e, "value", 7, 50), n = s(e, "min", 3, 0), l = s(e, "max", 3, 100), d = s(e, "step", 3, 1), v = s(e, "disabled", 3, !1), p = s(e, "size", 3, "md"), y = s(e, "variant", 3, "glass"), R = s(e, "blur", 3, "md"), h = s(e, "showValue", 3, !1), I = s(e, "showMarks", 3, !1), L = s(e, "marks", 19, () => []), z = s(e, "animate", 3, !0), M = s(e, "reduceMotion", 3, !1);
  s(e, "class", 3, "");
  let f = /* @__PURE__ */ dt(e, [
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
  ]), q = /* @__PURE__ */ ye(void 0), ee = /* @__PURE__ */ ye(void 0), _ = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(!1);
  const B = `slider-${Math.random().toString(36).substr(2, 9)}`, F = {
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
  }, V = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, O = /* @__PURE__ */ Ee(() => (a() - n()) / (l() - n()) * 100), P = Z("relative w-full rounded-full cursor-pointer", F[p()].track, j[y()].track, y() === "glass" && V[R()], v() && "opacity-50 cursor-not-allowed"), Q = Z("absolute top-0 left-0 h-full rounded-full transition-all duration-200", j[y()].fill), G = /* @__PURE__ */ Ee(() => Z("absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2", "hover:scale-110 active:scale-95", F[p()].thumb, j[y()].thumb, v() && "cursor-not-allowed hover:scale-100 active:scale-100", t(_) && "scale-110", t(E) && "ring-2 ring-blue-400/50"));
  function D(S) {
    if (v()) return;
    let te = a();
    const J = d() || 1, Y = (l() - n()) / 10;
    switch (S.key) {
      case "ArrowRight":
      case "ArrowUp":
        S.preventDefault(), te = Math.min(l(), a() + J);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        S.preventDefault(), te = Math.max(n(), a() - J);
        break;
      case "PageUp":
        S.preventDefault(), te = Math.min(l(), a() + Y);
        break;
      case "PageDown":
        S.preventDefault(), te = Math.max(n(), a() - Y);
        break;
      case "Home":
        S.preventDefault(), te = n();
        break;
      case "End":
        S.preventDefault(), te = l();
        break;
    }
    te !== a() && (a(te), e.onValueChange?.(te));
  }
  function T(S) {
    if (!t(ee) || v()) return;
    const te = t(ee).getBoundingClientRect(), J = S.clientX - te.left, Y = Math.max(0, Math.min(100, J / te.width * 100)), le = n() + Y / 100 * (l() - n()), H = d() ? Math.round(le / d()) * d() : le, ae = Math.max(n(), Math.min(l(), H));
    ae !== a() && (a(ae), e.onValueChange?.(ae));
  }
  function w() {
    W(E, !0);
  }
  function x() {
    W(E, !1);
  }
  bt(() => {
    Qt("Slider", "medium");
  });
  var C = cv(), X = i(C);
  {
    var K = (S) => {
      var te = lv();
      let J;
      var Y = i(te), le = m(Y);
      {
        var H = (ae) => {
          var ce = iv(), se = i(ce);
          A(() => ie(se, `(${a() ?? ""})`)), o(ae, ce);
        };
        g(le, (ae) => {
          h() && ae(H);
        });
      }
      A(
        (ae) => {
          xe(te, "id", `slider-label-${B}`), xe(te, "for", B), J = N(te, 1, "block text-sm font-medium text-white svelte-wpw1ph", null, J, ae), ie(Y, `${e.label ?? ""} `);
        },
        [() => ({ "opacity-50": v() })]
      ), o(S, te);
    };
    g(X, (S) => {
      e.label && S(K);
    });
  }
  var k = m(X, 2);
  Ze(k, () => ({ class: "relative w-full py-2", ...f }), void 0, void 0, "svelte-wpw1ph");
  var u = i(k);
  u.__mousedown = [ov, v, _, T], u.__keydown = D;
  var b = i(u);
  let re;
  var de = m(b, 2);
  let ue;
  Ie(de, (S, te) => Yt?.(S, te), () => z() && !M() && t(_) ? { scale: 1.1, duration: 100 } : void 0);
  var ve = m(de, 2);
  {
    var $ = (S) => {
      var te = Se(), J = _e(te);
      Ge(J, 16, L, (Y) => Y, (Y, le) => {
        const H = /* @__PURE__ */ Ee(() => (le - n()) / (l() - n()) * 100);
        var ae = sv();
        let ce;
        A((se) => ce = ht(ae, "", ce, se), [() => ({ left: `${t(H) ?? ""}%` })]), o(Y, ae);
      }), o(S, te);
    };
    g(ve, (S) => {
      I() && L().length > 0 && S($);
    });
  }
  tt(u, (S) => W(ee, S), () => t(ee));
  var U = m(u, 2);
  {
    var oe = (S) => {
      var te = dv(), J = i(te), Y = i(J);
      A(
        (le) => {
          N(J, 1, le, "svelte-wpw1ph"), ie(Y, a());
        },
        [
          () => ne(Z("font-medium text-white/80", F[p()].value))
        ]
      ), o(S, te);
    };
    g(U, (S) => {
      h() && S(oe);
    });
  }
  tt(k, (S) => W(q, S), () => t(q)), A(
    (S, te) => {
      xe(u, "id", B), N(u, 1, ne(P), "svelte-wpw1ph"), xe(u, "aria-valuemin", n()), xe(u, "aria-valuemax", l()), xe(u, "aria-valuenow", a()), xe(u, "aria-labelledby", e.label ? `slider-label-${B}` : void 0), xe(u, "aria-label", e.label ? void 0 : "Slider"), xe(u, "tabindex", v() ? -1 : 0), N(b, 1, ne(Q), "svelte-wpw1ph"), re = ht(b, "", re, S), N(de, 1, ne(t(G)), "svelte-wpw1ph"), ue = ht(de, "", ue, te);
    },
    [
      () => ({ width: `${t(O) ?? ""}%` }),
      () => ({
        left: `${t(O) ?? ""}%`,
        transform: "translateX(-50%) translateY(-50%)"
      })
    ]
  ), Ot("focus", u, w), Ot("blur", u, x), o(r, C), Xe();
}
vt(["mousedown", "keydown"]);
var uv = /* @__PURE__ */ c("<label> </label>"), fv = /* @__PURE__ */ c("<p> </p>"), bv = /* @__PURE__ */ c('<div class="flex flex-col"><!> <!></div>'), gv = /* @__PURE__ */ c('<div class="flex items-center gap-3"><button><span></span></button> <!></div>');
const mv = {
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
function Q1(r, e) {
  Ke(e, !0), Qe(r, mv);
  let a = s(e, "checked", 7, !1), n = s(e, "disabled", 3, !1), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), v = s(e, "blur", 3, "md"), p = s(e, "animate", 3, !0), y = s(e, "liquid", 3, !1), R = s(e, "magnetic", 3, !1), h = s(e, "jelly", 3, !1), I = s(e, "glow", 3, !1), L = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), M = /* @__PURE__ */ dt(e, [
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
  ]), f = /* @__PURE__ */ ye(void 0);
  const q = `switch-${Math.random().toString(36).substr(2, 9)}`, ee = e.label ? `${q}-label` : void 0, _ = e.description ? `${q}-description` : void 0, E = {
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
  }, B = {
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
  }, F = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = Z(
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
    E[l()].track,
    a() ? B[d()].trackChecked : B[d()].track,
    d() === "glass" && F[v()],
    y() && "backdrop-blur-md",
    I() && a() && "shadow-lg shadow-blue-400/30",
    n() && "opacity-50 cursor-not-allowed",
    !n() && "cursor-pointer hover:scale-105",
    h() && !n() && "hover:scale-110 active:scale-95",
    z()
  ), V = Z("inline-block rounded-full transition-all duration-200 ease-in-out transform", E[l()].thumb, B[d()].thumb, a() ? E[l()].translate : "translate-x-0.5", !L() && "will-change-transform");
  function O() {
    if (n()) return;
    const x = !a();
    a(x), e.onCheckedChange?.(x);
  }
  function P(x) {
    n() || (x.key === "Enter" || x.key === " ") && (x.preventDefault(), O());
  }
  bt(() => {
    Qt("Switch", "small");
  });
  var Q = gv(), G = i(Q);
  Ze(
    G,
    () => ({
      id: q,
      type: "button",
      role: "switch",
      "aria-checked": a(),
      "aria-labelledby": ee,
      "aria-describedby": _,
      "aria-label": e["aria-label"],
      class: j,
      disabled: n(),
      onclick: O,
      onkeydown: P,
      ...M
    }),
    void 0,
    void 0,
    "svelte-ne1gt8"
  );
  var D = i(G);
  tt(G, (x) => W(f, x), () => t(f)), Ie(G, (x, C) => Yt?.(x, C), () => p() && !L() ? { scale: 0.95, duration: 100 } : void 0), Ie(G, (x, C) => ft?.(x, C), () => R() && !n() && !L() ? { strength: 0.15, distance: 30 } : void 0), Ie(G, (x, C) => ft?.(x, C), () => h() && !n() && !L() ? { strength: 0.1 } : void 0);
  var T = m(G, 2);
  {
    var w = (x) => {
      var C = bv(), X = i(C);
      {
        var K = (b) => {
          var re = uv();
          let de;
          var ue = i(re);
          A(
            (ve) => {
              xe(re, "id", ee), xe(re, "for", q), de = N(re, 1, "text-sm font-medium text-white cursor-pointer", null, de, ve), ie(ue, e.label);
            },
            [() => ({ "opacity-50": n() })]
          ), o(b, re);
        };
        g(X, (b) => {
          e.label && b(K);
        });
      }
      var k = m(X, 2);
      {
        var u = (b) => {
          var re = fv();
          let de;
          var ue = i(re);
          A(
            (ve) => {
              xe(re, "id", _), de = N(re, 1, "text-xs text-white/70", null, de, ve), ie(ue, e.description);
            },
            [() => ({ "opacity-50": n() })]
          ), o(b, re);
        };
        g(k, (b) => {
          e.description && b(u);
        });
      }
      o(x, C);
    };
    g(T, (x) => {
      (e.label || e.description) && x(w);
    });
  }
  A(() => N(D, 1, ne(V), "svelte-ne1gt8")), o(r, Q), Xe();
}
var hv = (r, e, a) => e(t(a)), pv = (r, e, a) => e(r, t(a)), xv = /* @__PURE__ */ c('<button role="tab"> </button>'), _v = /* @__PURE__ */ c('<div class="svelte-pa3tfx"><!></div>'), wv = /* @__PURE__ */ c('<div class="svelte-pa3tfx"><!></div>'), yv = /* @__PURE__ */ c('<div><div role="tablist"></div> <div role="tabpanel" tabindex="0"><!></div></div>');
const kv = {
  hash: "svelte-pa3tfx",
  code: `button[role="tab"].svelte-pa3tfx {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-pa3tfx {transition:none;
            animation: none;will-change:auto;}
    }`
};
function J1(r, e) {
  Ke(e, !0), Qe(r, kv);
  let a = s(e, "tabs", 19, () => []), n = s(e, "activeTab", 23, () => a()[0]?.id || ""), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), v = s(e, "orientation", 3, "horizontal"), p = s(e, "blur", 3, "md"), y = s(e, "animate", 3, !0), R = s(e, "reduceMotion", 3, !1), h = s(e, "class", 3, ""), I = /* @__PURE__ */ dt(e, [
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
  const z = `tabs-${Math.random().toString(36).substr(2, 9)}`, M = {
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
  }, q = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, ee = v() === "horizontal", E = Z("flex p-1", "tab-radius-md", ee ? "flex-row" : "flex-col min-w-max", f[l()].list, (l() === "glass" || l() === "bubbleTea") && q[p()]), F = Z("relative flex-1 transition-all duration-200", "tab-radius-sm", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium whitespace-nowrap cursor-pointer", M[d()], f[l()].tab), j = Z(F, f[l()].activeTab), V = Z("mt-4 focus:outline-none", ee ? "" : "ml-4");
  function O(k) {
    k.disabled || (n(k.id), e.onTabChange?.(k.id));
  }
  function P(k, u) {
    if (u.disabled) return;
    const b = a().filter((de) => !de.disabled), re = b.findIndex((de) => de.id === n());
    switch (k.key) {
      case "Enter":
      case " ":
        k.preventDefault(), O(u);
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (ee ? k.key === "ArrowRight" : k.key === "ArrowDown") {
          k.preventDefault();
          const de = (re + 1) % b.length, ue = b[de];
          O(ue), Q(ue.id);
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        if (ee ? k.key === "ArrowLeft" : k.key === "ArrowUp") {
          k.preventDefault();
          const de = re === 0 ? b.length - 1 : re - 1, ue = b[de];
          O(ue), Q(ue.id);
        }
        break;
      case "Home":
        {
          k.preventDefault();
          const de = b[0];
          O(de), Q(de.id);
        }
        break;
      case "End":
        {
          k.preventDefault();
          const de = b[b.length - 1];
          O(de), Q(de.id);
        }
        break;
    }
  }
  function Q(k) {
    L?.querySelector(`[data-tab-id="${k}"]`)?.focus();
  }
  const G = /* @__PURE__ */ Ee(() => a().find((k) => k.id === n())), D = /* @__PURE__ */ Ee(() => e.panel ? e.panel(n()) : null);
  bt(() => {
    Qt("Tabs");
  });
  var T = yv();
  Ze(T, (k) => ({ class: k, ...I }), [() => Z("w-full", ee ? "" : "flex", h())], void 0, "svelte-pa3tfx");
  var w = i(T);
  Ge(w, 23, a, (k) => k.id, (k, u) => {
    var b = xv();
    let re;
    b.__click = [hv, O, u], b.__keydown = [pv, P, u];
    var de = i(b);
    Ie(b, (ue, ve) => kt?.(ue, ve), () => y() && !R() && t(u).id === n() ? { blur: p(), opacity: "medium" } : void 0), A(
      (ue) => {
        xe(b, "id", `${z}-tab-${t(u).id}`), re = N(b, 1, ne(t(u).id === n() ? j : F), "svelte-pa3tfx", re, ue), xe(b, "tabindex", t(u).id === n() ? 0 : -1), xe(b, "aria-selected", t(u).id === n()), xe(b, "aria-controls", `${z}-tabpanel-${t(u).id}`), xe(b, "aria-disabled", t(u).disabled), xe(b, "data-tab-id", t(u).id), b.disabled = t(u).disabled, ie(de, t(u).label);
      },
      [
        () => ({
          "opacity-50": t(u).disabled,
          "cursor-not-allowed": t(u).disabled
        })
      ]
    ), o(k, b);
  }), tt(w, (k) => L = k, () => L);
  var x = m(w, 2), C = i(x);
  {
    var X = (k) => {
      var u = _v(), b = i(u);
      ot(b, () => t(G).content), $e(1, u, () => mt, () => ({
        direction: "up",
        distance: 10,
        duration: y() && !R() ? 200 : 0
      })), $e(2, u, () => mt, () => ({
        direction: "down",
        distance: 10,
        duration: y() && !R() ? 150 : 0
      })), o(k, u);
    }, K = (k) => {
      var u = Se(), b = _e(u);
      {
        var re = (de) => {
          var ue = wv(), ve = i(ue);
          ot(ve, () => t(D)), $e(1, ue, () => mt, () => ({
            direction: "up",
            distance: 10,
            duration: y() && !R() ? 200 : 0
          })), $e(2, ue, () => mt, () => ({
            direction: "down",
            distance: 10,
            duration: y() && !R() ? 150 : 0
          })), o(de, ue);
        };
        g(
          b,
          (de) => {
            t(D) && de(re);
          },
          !0
        );
      }
      o(k, u);
    };
    g(C, (k) => {
      t(G)?.content ? k(X) : k(K, !1);
    });
  }
  A(() => {
    N(w, 1, ne(E), "svelte-pa3tfx"), xe(w, "aria-orientation", v()), xe(w, "aria-label", e["aria-label"]), N(x, 1, ne(V), "svelte-pa3tfx"), xe(x, "id", `${z}-tabpanel-${n()}`), xe(x, "aria-labelledby", `${z}-tab-${n()}`);
  }), o(r, T), Xe();
}
vt(["click", "keydown"]);
var Cv = /* @__PURE__ */ c("<textarea></textarea>");
const Ev = {
  hash: "svelte-16ael9g",
  code: `textarea.svelte-16ael9g {field-sizing:content;font-family:inherit;line-height:1.5;}textarea.svelte-16ael9g:focus {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {textarea.svelte-16ael9g {transition:none;
			animation: none;}
	}`
};
function $1(r, e) {
  Ke(e, !0), Qe(r, Ev);
  let a = s(e, "value", 7, ""), n = s(e, "placeholder", 3, ""), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), v = s(e, "variant", 3, "glass"), p = s(e, "blur", 3, "md"), y = s(e, "rows", 3, 4), R = s(e, "resize", 3, "vertical"), h = s(e, "autoResize", 3, !1), I = s(e, "maxHeight", 3, 300), L = s(e, "minHeight", 3, 80), z = s(e, "animate", 3, !0), M = s(e, "reduceMotion", 3, !1), f = s(e, "class", 3, ""), q = /* @__PURE__ */ dt(e, [
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
  ]), ee = /* @__PURE__ */ ye(void 0), _ = /* @__PURE__ */ ye(!1);
  const E = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base"
  }, B = {
    default: "bg-white/5 border border-white/10 text-white placeholder-white/50",
    glass: "glass-subtle border border-white/20 text-white placeholder-white/40",
    terminal: "terminal text-green-300 placeholder-green-300/50"
  }, F = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, j = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y"
  }, V = /* @__PURE__ */ Ee(() => Z("w-full rounded-brand-md transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50", "placeholder:transition-colors placeholder:duration-200", E[d()], B[v()], v() === "glass" && F[p()], j[R()], l() && "opacity-50 cursor-not-allowed", t(_) && v() === "glass" && "glass-medium", f()));
  function O(w) {
    const x = w.target;
    a(x.value), e.onValueChange?.(x.value), h() && D();
  }
  function P() {
    W(_, !0);
  }
  function Q() {
    W(_, !1);
  }
  function G(w) {
    (w.ctrlKey || w.metaKey) && w.key === "a" || (w.ctrlKey || w.metaKey) && w.key === "z" || (w.ctrlKey || w.metaKey) && w.key === "y" || (w.key, w.key === "Escape" && t(ee).blur());
  }
  function D() {
    if (!t(ee) || !h()) return;
    t(ee).style.height = "auto";
    const w = t(ee).scrollHeight, x = Math.min(Math.max(w, L()), I());
    t(ee).style.height = `${x}px`;
  }
  bt(() => {
    h() && t(ee) && D();
  }), bt(() => {
    Qt("Textarea", "medium");
  });
  var T = Cv();
  Ze(
    T,
    (w) => ({
      class: t(V),
      placeholder: n(),
      disabled: l(),
      rows: y(),
      cols: e.cols,
      "aria-label": q["aria-label"] || n(),
      oninput: O,
      onfocus: P,
      onblur: Q,
      onkeydown: G,
      ...q,
      [wr]: w
    }),
    [
      () => ({
        "min-height": h() ? `${L()}px` : void 0,
        "max-height": h() ? `${I()}px` : void 0
      })
    ],
    void 0,
    "svelte-16ael9g"
  ), tt(T, (w) => W(ee, w), () => t(ee)), fr(() => pr(T, a)), Ie(T, (w, x) => kt?.(w, x), () => z() && !M() && t(_) ? { blur: p(), opacity: "medium" } : void 0), o(r, T), Xe();
}
var Sv = (r) => cr.set(r.currentTarget.value), Tv = /* @__PURE__ */ c('<div class="space-y-2 svelte-1erodky"><label for="theme-select" class="block text-sm font-medium text-text svelte-1erodky">Theme Preference</label> <select id="theme-select"><option class="svelte-1erodky">Auto (Follow System)</option><option class="svelte-1erodky">Terminal (Dark)</option><option class="svelte-1erodky">Bubble Tea (Light)</option></select></div>'), Mv = () => cr.setAuto(), Av = () => cr.setTerminal(), zv = () => cr.setBubbleTea(), Iv = /* @__PURE__ */ c('<div class="flex rounded-lg overflow-hidden border border-border/30 svelte-1erodky"><button>Auto</button> <button>Terminal</button> <button>Bubble Tea</button></div>'), Pv = () => cr.setAuto(), Lv = () => cr.setTerminal(), Dv = () => cr.setBubbleTea(), jv = /* @__PURE__ */ c('<div class="flex flex-wrap gap-2 svelte-1erodky"><button>🔄 Auto</button> <button>💻 Terminal</button> <button>🧋 Bubble Tea</button></div>'), Rv = /* @__PURE__ */ c('<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20 svelte-1erodky"><h4 class="font-medium text-text mb-1 svelte-1erodky"> </h4> <p class="text-sm text-text/70 svelte-1erodky"> </p></div>'), Nv = /* @__PURE__ */ c('<span class="svelte-1erodky"> </span>'), Ov = /* @__PURE__ */ c('<span class="svelte-1erodky"> </span>'), qv = /* @__PURE__ */ c('<div class="mt-2 flex items-center gap-2 text-xs text-text/60 svelte-1erodky"><div></div> <!></div>'), Bv = /* @__PURE__ */ c("<div><!> <!> <!></div>");
const Fv = {
  hash: "svelte-1erodky",
  code: `
	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {.theme-selector.svelte-1erodky :where(.svelte-1erodky) {transition-duration:0.01ms !important;}
	}`
};
function ep(r, e) {
  Ke(e, !0), Qe(r, Fv);
  const [a, n] = Ko(), l = () => Wo(Qo, "$themeConfig", a), d = s(e, "variant", 3, "pills"), v = s(e, "showDescription", 3, !0), p = s(e, "showSystemStatus", 3, !0), y = s(e, "size", 3, "md"), R = s(e, "class", 3, ""), h = /* @__PURE__ */ dt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "showDescription",
    "showSystemStatus",
    "size",
    "class"
  ]), I = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-3"
  }, L = (j, V) => {
    const O = j === V;
    return d() === "pills" ? Z(
      "px-3 py-2 rounded-lg font-medium transition-all duration-200",
      "border border-transparent cursor-pointer",
      O ? "bg-primary text-white border-primary shadow-lg" : "bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30",
      I[y()]
    ) : d() === "toggle" ? Z(
      "flex-1 px-3 py-2 font-medium transition-all duration-200",
      "border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg",
      O ? "bg-primary text-white shadow-inner" : "bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text",
      I[y()]
    ) : "";
  }, z = /* @__PURE__ */ Ee(() => l() ? Vs(l().userTheme, l().resolvedTheme) : null);
  var M = Bv();
  Ze(M, (j) => ({ class: j, ...h }), [() => Z("theme-selector", R())], void 0, "svelte-1erodky");
  var f = i(M);
  {
    var q = (j) => {
      var V = Tv(), O = m(i(V), 2);
      O.__change = [Sv];
      var P = i(O);
      P.value = P.__value = "auto";
      var Q = m(P);
      Q.value = Q.__value = "terminal";
      var G = m(Q);
      G.value = G.__value = "bubbleTea";
      var D;
      Bo(O), A(
        (T) => {
          N(O, 1, T, "svelte-1erodky"), D !== (D = l()?.userTheme || "auto") && (O.value = (O.__value = l()?.userTheme || "auto") ?? "", pa(O, l()?.userTheme || "auto"));
        },
        [
          () => ne(Z("w-full border border-border/30 rounded-lg bg-surface text-text", "focus:ring-2 focus:ring-primary focus:border-primary", I[y()]))
        ]
      ), o(j, V);
    }, ee = (j) => {
      var V = Se(), O = _e(V);
      {
        var P = (G) => {
          var D = Iv(), T = i(D);
          T.__click = [Mv];
          var w = m(T, 2);
          w.__click = [Av];
          var x = m(w, 2);
          x.__click = [zv], A(
            (C, X, K) => {
              N(T, 1, C, "svelte-1erodky"), N(w, 1, X, "svelte-1erodky"), N(x, 1, K, "svelte-1erodky");
            },
            [
              () => ne(L(l()?.userTheme || "auto", "auto")),
              () => ne(L(l()?.userTheme || "auto", "terminal")),
              () => ne(L(l()?.userTheme || "auto", "bubbleTea"))
            ]
          ), o(G, D);
        }, Q = (G) => {
          var D = Se(), T = _e(D);
          {
            var w = (x) => {
              var C = jv(), X = i(C);
              X.__click = [Pv];
              var K = m(X, 2);
              K.__click = [Lv];
              var k = m(K, 2);
              k.__click = [Dv], A(
                (u, b, re) => {
                  N(X, 1, u, "svelte-1erodky"), N(K, 1, b, "svelte-1erodky"), N(k, 1, re, "svelte-1erodky");
                },
                [
                  () => ne(L(l()?.userTheme || "auto", "auto")),
                  () => ne(L(l()?.userTheme || "auto", "terminal")),
                  () => ne(L(l()?.userTheme || "auto", "bubbleTea"))
                ]
              ), o(x, C);
            };
            g(
              T,
              (x) => {
                d() === "pills" && x(w);
              },
              !0
            );
          }
          o(G, D);
        };
        g(
          O,
          (G) => {
            d() === "toggle" ? G(P) : G(Q, !1);
          },
          !0
        );
      }
      o(j, V);
    };
    g(f, (j) => {
      d() === "dropdown" ? j(q) : j(ee, !1);
    });
  }
  var _ = m(f, 2);
  {
    var E = (j) => {
      var V = Rv(), O = i(V), P = i(O), Q = m(O, 2), G = i(Q);
      A(() => {
        ie(P, t(z).displayName), ie(G, t(z).description);
      }), o(j, V);
    };
    g(_, (j) => {
      v() && t(z) && j(E);
    });
  }
  var B = m(_, 2);
  {
    var F = (j) => {
      var V = qv(), O = i(V), P = m(O, 2);
      {
        var Q = (D) => {
          var T = Nv(), w = i(T);
          A(() => ie(w, `Following system: ${l().resolvedTheme ?? ""}`)), o(D, T);
        }, G = (D) => {
          var T = Ov(), w = i(T);
          A(() => ie(w, `Manual override: ${l().userTheme ?? ""}`)), o(D, T);
        };
        g(P, (D) => {
          Gn(l().userTheme) ? D(Q) : D(G, !1);
        });
      }
      A((D) => N(O, 1, D, "svelte-1erodky"), [
        () => ne(Z("w-2 h-2 rounded-full", Gn(l().userTheme) ? "bg-green-400" : "bg-orange-400"))
      ]), o(j, V);
    };
    g(B, (j) => {
      p() && l() && j(F);
    });
  }
  o(r, M), Xe(), n();
}
vt(["change", "click"]);
function Hv(r, e, a) {
  e.action?.onClick(), a();
}
var Vv = /* @__PURE__ */ c('<h4 class="font-semibold text-sm text-white mb-1 svelte-4z22bx"> </h4>'), Gv = /* @__PURE__ */ c('<p class="text-sm text-white/80 svelte-4z22bx"> </p>'), Uv = /* @__PURE__ */ c('<div class="text-sm text-white/80 svelte-4z22bx"><!></div>'), Yv = /* @__PURE__ */ c('<button class="mt-2 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:underline transition-colors duration-150 svelte-4z22bx"> </button>'), Wv = /* @__PURE__ */ c('<button class="flex-shrink-0 text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all duration-150 svelte-4z22bx" aria-label="Close notification"><svg class="w-5 h-5 svelte-4z22bx" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class="svelte-4z22bx"></path></svg></button>'), Kv = /* @__PURE__ */ c('<div><div class="flex-shrink-0 text-lg svelte-4z22bx" aria-hidden="true"> </div> <div class="flex-1 min-w-0 svelte-4z22bx"><!> <!> <!></div> <!></div>');
const Xv = {
  hash: "svelte-4z22bx",
  code: `div[role='alert'].svelte-4z22bx {will-change:transform, opacity;}

	@media (prefers-reduced-motion: reduce) {.svelte-4z22bx {transition:none;
			animation: none;will-change:auto;}
	}`
};
function tp(r, e) {
  Ke(e, !0), Qe(r, Xv);
  let a = s(e, "open", 7, !1), n = s(e, "type", 3, "info"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "top-right"), v = s(e, "blur", 3, "md"), p = s(e, "duration", 3, 5e3), y = s(e, "closable", 3, !0), R = s(e, "animate", 3, !0), h = s(e, "reduceMotion", 3, !1), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  ]), z = /* @__PURE__ */ ye(void 0), M = null;
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
  }, q = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4"
  }, ee = {
    default: "bg-white/5 border border-white/10",
    glass: "glass-subtle border",
    terminal: "terminal"
  }, _ = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, E = Z("fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg", "flex items-start gap-3 transition-all duration-300", q[d()], ee[l()], l() === "glass" && _[v()], f[n()].colors, I());
  function B() {
    a(!1), e.onOpenChange?.(!1), M && (clearTimeout(M), M = null);
  }
  function F(P) {
    P.key === "Escape" && y() && (P.preventDefault(), B());
  }
  bt(() => (a() && p() !== null && p() > 0 && (M = setTimeout(
    () => {
      B();
    },
    p()
  )), () => {
    M && (clearTimeout(M), M = null);
  })), bt(() => {
    if (a())
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }), bt(() => {
    Qt("Toast", "small");
  });
  var j = Se(), V = _e(j);
  {
    var O = (P) => {
      var Q = Kv();
      Ze(
        Q,
        () => ({
          class: E,
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
      var G = i(Q), D = i(G), T = m(G, 2), w = i(T);
      {
        var x = (de) => {
          var ue = Vv(), ve = i(ue);
          A(() => ie(ve, e.title)), o(de, ue);
        };
        g(w, (de) => {
          e.title && de(x);
        });
      }
      var C = m(w, 2);
      {
        var X = (de) => {
          var ue = Gv(), ve = i(ue);
          A(() => ie(ve, e.description)), o(de, ue);
        }, K = (de) => {
          var ue = Se(), ve = _e(ue);
          {
            var $ = (U) => {
              var oe = Uv(), S = i(oe);
              ot(S, () => e.children), o(U, oe);
            };
            g(
              ve,
              (U) => {
                e.children && U($);
              },
              !0
            );
          }
          o(de, ue);
        };
        g(C, (de) => {
          e.description ? de(X) : de(K, !1);
        });
      }
      var k = m(C, 2);
      {
        var u = (de) => {
          var ue = Yv();
          ue.__click = [Hv, e, B];
          var ve = i(ue);
          Ie(ue, ($, U) => Yt?.($, U), () => R() && !h() ? { scale: 0.98, duration: 100 } : void 0), A(() => ie(ve, e.action.label)), o(de, ue);
        };
        g(k, (de) => {
          e.action && de(u);
        });
      }
      var b = m(T, 2);
      {
        var re = (de) => {
          var ue = Wv();
          ue.__click = B, Ie(ue, (ve, $) => Yt?.(ve, $), () => R() && !h() ? { scale: 0.9, duration: 100 } : void 0), o(de, ue);
        };
        g(b, (de) => {
          y() && de(re);
        });
      }
      tt(Q, (de) => W(z, de), () => t(z)), A(() => ie(D, f[n()].icon)), $e(1, Q, () => mt, () => ({
        direction: d().includes("top") ? "down" : "up",
        distance: 20,
        duration: R() && !h() ? 300 : 0
      })), $e(2, Q, () => mt, () => ({
        direction: d().includes("top") ? "up" : "down",
        distance: 20,
        duration: R() && !h() ? 200 : 0
      })), o(P, Q);
    };
    g(V, (P) => {
      a() && P(O);
    });
  }
  o(r, j), Xe();
}
vt(["click"]);
var Zv = /* @__PURE__ */ c("<div></div>"), Qv = /* @__PURE__ */ c('<div role="tooltip"> <!></div>'), Jv = /* @__PURE__ */ c("<div><!> <!></div>");
function rp(r, e) {
  Ke(e, !0);
  const a = s(e, "position", 3, "top"), n = s(e, "variant", 3, "glass"), l = s(e, "delay", 3, 500), d = s(e, "offset", 3, 8), v = s(e, "arrow", 3, !0), p = s(e, "animated", 3, !0), y = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  let h = /* @__PURE__ */ ye(!1), I = /* @__PURE__ */ ye(void 0), L = /* @__PURE__ */ ye(void 0), z = /* @__PURE__ */ ye(st({ x: 0, y: 0 })), M = /* @__PURE__ */ ye(st(a())), f;
  const q = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
    terminal: "bg-gray-900/95 border border-green-400/40 text-green-400",
    liquid: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white",
    dark: "bg-gray-900/95 border border-white/10 text-white"
  }, ee = () => {
    if (!t(I) || !t(L)) return;
    const G = t(L).getBoundingClientRect(), D = t(I).getBoundingClientRect(), T = window.innerWidth, w = window.innerHeight;
    let x = 0, C = 0, X = a();
    switch (a()) {
      case "top":
        x = G.left + G.width / 2 - D.width / 2, C = G.top - D.height - d();
        break;
      case "bottom":
        x = G.left + G.width / 2 - D.width / 2, C = G.bottom + d();
        break;
      case "left":
        x = G.left - D.width - d(), C = G.top + G.height / 2 - D.height / 2;
        break;
      case "right":
        x = G.right + d(), C = G.top + G.height / 2 - D.height / 2;
        break;
    }
    a() === "top" && C < 0 ? (C = G.bottom + d(), X = "bottom") : a() === "bottom" && C + D.height > w ? (C = G.top - D.height - d(), X = "top") : a() === "left" && x < 0 ? (x = G.right + d(), X = "right") : a() === "right" && x + D.width > T && (x = G.left - D.width - d(), X = "left"), x = Math.max(8, Math.min(x, T - D.width - 8)), C = Math.max(8, Math.min(C, w - D.height - 8)), W(z, { x, y: C }, !0), W(M, X, !0);
  }, _ = () => {
    f = setTimeout(
      () => {
        W(h, !0), requestAnimationFrame(ee);
      },
      l()
    );
  }, E = () => {
    clearTimeout(f), W(h, !1);
  };
  wt(() => () => {
    clearTimeout(f);
  });
  const B = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
    bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full",
    right: "left-0 top-1/2 -translate-y-1/2 -translate-x-full"
  }, F = {
    top: "border-l-transparent border-r-transparent border-b-transparent",
    bottom: "border-l-transparent border-r-transparent border-t-transparent",
    left: "border-t-transparent border-b-transparent border-r-transparent",
    right: "border-t-transparent border-b-transparent border-l-transparent"
  };
  var j = Jv();
  Ze(j, () => ({
    class: "relative inline-block",
    onmouseenter: _,
    onmouseleave: E,
    onfocus: _,
    onblur: E,
    role: "tooltip",
    ...R
  }));
  var V = i(j);
  {
    var O = (G) => {
      var D = Se(), T = _e(D);
      ot(T, () => e.children), o(G, D);
    };
    g(V, (G) => {
      e.children && G(O);
    });
  }
  var P = m(V, 2);
  {
    var Q = (G) => {
      var D = Qv(), T = i(D), w = m(T);
      {
        var x = (C) => {
          var X = Zv();
          A((K) => N(X, 1, K), [
            () => ne(Z("absolute w-0 h-0 border-4", B[t(M)], F[t(M)], n() === "glass" && "border-white/10", n() === "terminal" && "border-green-400/40", n() === "liquid" && "border-white/30", n() === "dark" && "border-white/10"))
          ]), o(C, X);
        };
        g(w, (C) => {
          v() && C(x);
        });
      }
      tt(D, (C) => W(I, C), () => t(I)), A(
        (C) => {
          N(D, 1, C), ht(D, `left: ${t(z).x ?? ""}px; top: ${t(z).y ?? ""}px;`), ie(T, `${e.text ?? ""} `);
        },
        [
          () => ne(Z("fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl", q[n()], p() && "transition-all duration-200", y()))
        ]
      ), $e(3, D, () => mt, () => ({ duration: 200 })), o(G, D);
    };
    g(P, (G) => {
      t(h) && G(Q);
    });
  }
  tt(j, (G) => W(L, G), () => t(L)), o(r, j), Xe();
}
function $v(r, e) {
  e(/* @__PURE__ */ new Date());
}
var eu = (
  // Initialize from value prop
  // Click outside to close
  // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
  (r, e) => e(-1)
), tu = (r, e) => e(1), ru = /* @__PURE__ */ c('<div role="columnheader"> </div>'), au = (r, e, a) => e(t(a)), nu = /* @__PURE__ */ c('<button role="gridcell"> </button>'), ou = /* @__PURE__ */ c('<div class="p-2"></div>'), iu = /* @__PURE__ */ c(`<div><button aria-label="Select today's date"> </button></div>`), lu = /* @__PURE__ */ c('<div id="date-picker-calendar" role="application" aria-label="Calendar date picker"><div class="flex items-center justify-between mb-4"><button aria-label="Previous month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 aria-live="polite"> </h3> <button aria-label="Next month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2" role="row"></div> <div class="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar dates"></div> <!></div>'), su = /* @__PURE__ */ c('<div class="relative"><input/> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <!> <div aria-live="polite" aria-atomic="true" class="sr-only"><!></div></div>');
const du = {
  hash: "svelte-zemggf",
  code: `
    /* Additional terminal-specific glow effects */.terminal .date-picker-input:focus {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 10px var(--terminal-green-glow);}.terminal .selected-day {text-shadow:0 0 5px currentColor;}`
};
function ap(r, e) {
  Ke(e, !0), Qe(r, du);
  const a = s(e, "value", 3, null), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "error", 3, !1), v = s(e, "disabled", 3, !1), p = s(e, "placeholder", 3, "Select date..."), y = s(e, "format", 3, "MM/dd/yyyy"), R = s(e, "closeOnSelect", 3, !0), h = s(e, "showToday", 3, !0), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  ]), z = Mt();
  let M, f = /* @__PURE__ */ ye(null), q = /* @__PURE__ */ ye(!1), ee = /* @__PURE__ */ ye("");
  st(/* @__PURE__ */ new Date());
  let _ = /* @__PURE__ */ ye(null), E = /* @__PURE__ */ ye(null), B = /* @__PURE__ */ ye(st((/* @__PURE__ */ new Date()).getFullYear())), F = /* @__PURE__ */ ye(st((/* @__PURE__ */ new Date()).getMonth()));
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
      input: `bg-black/80 border-${Me.terminal.green} focus:border-${Me.terminal.matrix} text-${Me.terminal.green}`,
      calendar: `bg-black/95 border-${Me.terminal.green}`,
      header: `text-${Me.terminal.green}`,
      dayButton: `text-${Me.terminal.green}/70 hover:bg-${Me.terminal.green}/10 hover:text-${Me.terminal.green}`,
      selectedDay: `bg-${Me.terminal.green} text-black hover:bg-${Me.terminal.matrix}`,
      todayDay: `bg-${Me.terminal.green}/20 text-${Me.terminal.matrix}`
    }
  }, V = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-4 text-base"
  }, O = /* @__PURE__ */ Ee(() => j[n()]), P = /* @__PURE__ */ Ee(() => V[l()]);
  function Q(H) {
    if (!H) return "";
    const ae = H.getDate().toString().padStart(2, "0"), ce = (H.getMonth() + 1).toString().padStart(2, "0"), se = H.getFullYear();
    switch (y()) {
      case "dd/MM/yyyy":
        return `${ae}/${ce}/${se}`;
      case "yyyy-MM-dd":
        return `${se}-${ce}-${ae}`;
      default:
        return `${ce}/${ae}/${se}`;
    }
  }
  function G(H) {
    if (!H) return null;
    const ae = H.split(/[/-]/);
    if (ae.length !== 3) return null;
    let ce, se, he;
    switch (y()) {
      case "dd/MM/yyyy":
        [ce, se, he] = ae.map(Number);
        break;
      case "yyyy-MM-dd":
        [he, se, ce] = ae.map(Number);
        break;
      default:
        [se, ce, he] = ae.map(Number);
    }
    const fe = new Date(he, se - 1, ce);
    return se < 1 || se > 12 || ce < 1 || ce > 31 || fe.getFullYear() !== he || fe.getMonth() !== se - 1 || fe.getDate() !== ce ? null : D(fe) ? fe : null;
  }
  function D(H) {
    return !(!(H instanceof Date) || Number.isNaN(H.getTime()) || e.minDate && H < e.minDate || e.maxDate && H > e.maxDate);
  }
  function T() {
    const H = new Date(t(B), t(F), 1), ae = new Date(H);
    ae.setDate(ae.getDate() - H.getDay());
    const ce = [], se = new Date(ae);
    for (let he = 0; he < 42; he++)
      se.getMonth() === t(F) ? ce.push(new Date(se)) : ce.push(null), se.setDate(se.getDate() + 1);
    return ce;
  }
  const w = /* @__PURE__ */ Ee(T);
  function x(H) {
    const ae = /* @__PURE__ */ new Date();
    return H.toDateString() === ae.toDateString();
  }
  function C(H, ae) {
    return !H || !ae ? !1 : H.toDateString() === ae.toDateString();
  }
  function X() {
    v() || (W(q, !t(q)), t(q) ? z("open") : z("close"));
  }
  function K(H) {
    const ae = H.target;
    W(ee, ae.value, !0);
    const ce = G(t(ee));
    ce && (W(_, ce, !0), W(B, ce.getFullYear(), !0), W(F, ce.getMonth(), !0), z("change", ce));
  }
  function k(H) {
    D(H) && (W(_, H, !0), W(ee, Q(H), !0), z("change", H), R() && (W(q, !1), z("close")));
  }
  function u(H) {
    const ae = t(F) + H;
    ae < 0 ? (W(F, 11), W(B, t(B) - 1)) : ae > 11 ? (W(F, 0), W(B, t(B) + 1)) : W(F, ae);
  }
  function b(H) {
    if (t(q))
      switch (H.key) {
        case "Escape":
          W(q, !1), z("close");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), t(E)) {
            const ae = new Date(t(E));
            ae.setDate(ae.getDate() - 1), W(E, ae, !0);
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), t(E)) {
            const ae = new Date(t(E));
            ae.setDate(ae.getDate() + 1), W(E, ae, !0);
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), t(E)) {
            const ae = new Date(t(E));
            ae.setDate(ae.getDate() - 7), W(E, ae, !0);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), t(E)) {
            const ae = new Date(t(E));
            ae.setDate(ae.getDate() + 7), W(E, ae, !0);
          }
          break;
        case "Enter":
          H.preventDefault(), t(E) && k(t(E));
          break;
      }
  }
  bt(() => {
    if (a()) {
      const H = a() instanceof Date ? a() : G(a().toString());
      H && (W(_, H, !0), W(ee, Q(H), !0), W(B, H.getFullYear(), !0), W(F, H.getMonth(), !0));
    }
  }), wt(() => {
    function H(ae) {
      t(q) && t(f) && !t(f).contains(ae.target) && M && !M.contains(ae.target) && (W(q, !1), z("close"));
    }
    return document.addEventListener("click", H), () => document.removeEventListener("click", H);
  });
  const re = [
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
  ], de = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ue = /* @__PURE__ */ Ee(() => Z("relative w-full rounded-lg border transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-opacity-50", "font-mono", t(O).input, t(P), d() && "border-red-500 focus:border-red-500", v() && "opacity-50 cursor-not-allowed", I()));
  var ve = su(), $ = i(ve);
  Ze($, () => ({
    onclick: (
      // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
      X
    ),
    oninput: K,
    onkeydown: b,
    placeholder: p(),
    disabled: v(),
    readonly: !v(),
    class: t(ue),
    role: "combobox",
    "aria-haspopup": "grid",
    "aria-expanded": t(q),
    "aria-controls": "date-picker-calendar",
    "aria-label": p(),
    "aria-describedby": d() ? "date-picker-error" : void 0,
    ...L
  })), tt($, (H) => M = H, () => M), fr(() => pr($, () => t(ee), (H) => W(ee, H))), Ie($, (H, ae) => kt?.(H, ae), () => ({ blur: "sm", opacity: "light" })), Ie($, (H, ae) => ft?.(H, ae), () => ({ enabled: !v(), strength: 0.1 }));
  var U = m($, 2), oe = i(U), S = m(U, 2);
  {
    var te = (H) => {
      var ae = lu(), ce = i(ae), se = i(ce);
      se.__click = [eu, u], Ie(se, (je, we) => ft?.(je, we), () => ({ strength: 0.2 }));
      var he = m(se, 2), fe = i(he), be = m(he, 2);
      be.__click = [tu, u], Ie(be, (je, we) => ft?.(je, we), () => ({ strength: 0.2 }));
      var ge = m(ce, 2);
      Ge(ge, 20, () => de, (je) => je, (je, we) => {
        var pe = ru(), Te = i(pe);
        A(() => {
          N(pe, 1, `p-2 text-center text-xs font-semibold ${t(O).header ?? ""} font-mono`), ie(Te, we);
        }), o(je, pe);
      });
      var Ce = m(ge, 2);
      Ge(Ce, 23, () => t(w), (je, we) => je ? je.toDateString() : "blank-" + we, (je, we) => {
        var pe = Se(), Te = _e(pe);
        {
          var Ne = (Le) => {
            const qe = /* @__PURE__ */ Ee(() => C(t(we), t(_))), Fe = /* @__PURE__ */ Ee(() => x(t(we))), ke = /* @__PURE__ */ Ee(() => D(t(we)));
            var me = nu();
            me.__click = [au, k, we];
            var ze = i(me);
            Ie(me, (De, He) => ft?.(De, He), () => ({ enabled: t(ke), strength: 0.15 })), A(
              (De, He, Je) => {
                me.disabled = !t(ke), N(me, 1, `p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       ${(t(qe) ? t(O).selectedDay : t(Fe) ? t(O).todayDay : t(O).dayButton) ?? ""}
							       ${t(ke) ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`), xe(me, "aria-label", De), xe(me, "aria-selected", t(qe)), xe(me, "aria-disabled", !t(ke)), xe(me, "aria-current", t(Fe) ? "date" : void 0), xe(me, "tabindex", He), ie(ze, Je);
              },
              [
                () => Q(t(we)),
                () => t(qe) || C(t(we), t(E)) ? 0 : -1,
                () => t(we).getDate()
              ]
            ), o(Le, me);
          }, Ae = (Le) => {
            var qe = ou();
            o(Le, qe);
          };
          g(Te, (Le) => {
            t(we) ? Le(Ne) : Le(Ae, !1);
          });
        }
        o(je, pe);
      });
      var Pe = m(Ce, 2);
      {
        var Be = (je) => {
          var we = iu(), pe = i(we);
          pe.__click = [$v, k];
          var Te = i(pe);
          Ie(pe, (Ne, Ae) => ft?.(Ne, Ae), () => ({ strength: 0.1 })), A(
            (Ne) => {
              N(we, 1, `mt-4 pt-4 border-t ${t(O).calendar ?? ""}`), N(pe, 1, `w-full py-2 px-4 rounded-md ${t(O).dayButton ?? ""} transition-colors font-mono text-sm`), ie(Te, `Today: ${Ne ?? ""}`);
            },
            [() => Q(/* @__PURE__ */ new Date())]
          ), o(je, we);
        };
        g(Pe, (je) => {
          h() && je(Be);
        });
      }
      tt(ae, (je) => W(f, je), () => t(f)), Ie(ae, (je, we) => kt?.(je, we), () => ({ blur: "lg", opacity: "medium" })), A(() => {
        N(ae, 1, `absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 ${t(O).calendar ?? ""}`), N(se, 1, `p-2 rounded-md ${t(O).dayButton ?? ""} transition-colors`), N(he, 1, `text-lg font-semibold ${t(O).header ?? ""} font-mono`), ie(fe, `${re[t(F)] ?? ""}
                    ${t(B) ?? ""}`), N(be, 1, `p-2 rounded-md ${t(O).dayButton ?? ""} transition-colors`);
      }), $e(1, ae, () => mt, () => ({ direction: "up", duration: 200 })), o(H, ae);
    };
    g(S, (H) => {
      t(q) && H(te);
    });
  }
  var J = m(S, 2), Y = i(J);
  {
    var le = (H) => {
      var ae = Ct();
      A((ce) => ie(ae, `Selected date: ${ce ?? ""}`), [() => Q(t(_))]), o(H, ae);
    };
    g(Y, (H) => {
      t(_) && H(le);
    });
  }
  A(() => N(oe, 0, `w-5 h-5 ${t(O).header ?? ""}`)), o(r, ve), Xe();
}
vt(["click"]);
var cu = (r, e) => (r.key === "Enter" || r.key === " ") && e(), vu = /* @__PURE__ */ c('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-lg font-medium">Drop files here</p></div>'), uu = /* @__PURE__ */ c('<p class="text-xs text-gray-500 mt-1"> </p>'), fu = /* @__PURE__ */ c(`<button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium">Select Files</button>`), bu = /* @__PURE__ */ c('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <div class="mb-2"><p class="text-lg font-medium"> </p> <p class="text-sm text-gray-400 mt-1"> </p> <!></div> <!></div>'), gu = /* @__PURE__ */ c('<img class="w-12 h-12 object-cover rounded border"/>'), mu = /* @__PURE__ */ c('<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>'), hu = /* @__PURE__ */ ar('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), pu = (r, e, a) => e(t(a).id), xu = /* @__PURE__ */ c('<button class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" title="Retry upload">Retry</button> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>', 1), _u = /* @__PURE__ */ c('<div class="w-5 h-5"><svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), wu = (r, e, a) => e(t(a).id), yu = /* @__PURE__ */ c('<p class="text-xs text-red-400 mt-1"> </p>'), ku = /* @__PURE__ */ c('<div class="mt-2"><div class="w-full bg-gray-700 rounded-full h-2"><div></div></div> <p class="text-xs text-gray-400 mt-1"> </p></div>'), Cu = /* @__PURE__ */ c('<div><div class="flex items-start gap-3"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-sm font-medium truncate pr-2"> </h4> <div class="flex items-center gap-2"><!> <button aria-label="Remove file"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-1"><p class="text-xs text-gray-400"> </p> <!></div> <!></div></div></div>'), Eu = /* @__PURE__ */ c('<div class="mt-4 space-y-3"></div>'), Su = /* @__PURE__ */ c('<input type="file" class="hidden"/> <div role="button" aria-label="Upload files"><!></div> <!>', 1);
const Tu = {
  hash: "svelte-yfigio",
  code: `
	/* Terminal-specific glow effects */.terminal .file-upload:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function np(r, e) {
  Ke(e, !0), Qe(r, Tu);
  const a = s(e, "multiple", 3, !1), n = s(e, "accept", 3, "*/*"), l = s(
    e,
    "maxSize",
    3,
    10 * 1024 * 1024
    // 10MB default
  ), d = s(e, "maxFiles", 19, () => a() ? 5 : 1), v = s(e, "variant", 3, "default"), p = s(e, "disabled", 3, !1), y = s(e, "showPreview", 3, !0), R = s(e, "autoUpload", 3, !1), h = s(e, "class", 3, ""), I = Mt();
  let L, z, M = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(st([]));
  const q = {
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
      dropZone: `bg-black/80 border-${Me.terminal.green} hover:border-${Me.terminal.matrix}`,
      dropZoneActive: `bg-${Me.terminal.green}/10 border-${Me.terminal.matrix}`,
      fileItem: `bg-black/60 border-${Me.terminal.green}/30`,
      progressBar: `bg-${Me.terminal.green}`,
      successIcon: `text-${Me.terminal.green}`,
      errorIcon: "text-red-400",
      removeButton: `text-${Me.terminal.green}/70 hover:text-${Me.terminal.green}`
    }
  }, ee = /* @__PURE__ */ Ee(() => q[v()]);
  function _() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  function E($) {
    if ($ === 0) return "0 Bytes";
    const U = 1024, oe = ["Bytes", "KB", "MB", "GB"], S = Math.floor(Math.log($) / Math.log(U));
    return parseFloat(($ / Math.pow(U, S)).toFixed(2)) + " " + oe[S];
  }
  function B($) {
    return $.type.startsWith("image/");
  }
  function F($) {
    if ($.size > l())
      return `File size exceeds ${E(l())}`;
    if (n() !== "*/*") {
      const U = n().split(",").map((te) => te.trim()), oe = "." + $.name.split(".").pop()?.toLowerCase();
      if (!U.some((te) => te === $.type || te === oe || te.endsWith("/*") && $.type.startsWith(te.slice(0, -1))))
        return `File type not accepted. Accepted types: ${n()}`;
    }
    return null;
  }
  async function j($) {
    if (!(!B($) || !y()))
      return new Promise((U) => {
        const oe = new FileReader();
        oe.onload = (S) => U(S.target?.result), oe.onerror = () => U(void 0), oe.readAsDataURL($);
      });
  }
  async function V($) {
    if (p()) return;
    const U = Array.from($), oe = d() - t(f).length, S = U.slice(0, oe), te = [];
    for (const J of S) {
      const Y = F(J), le = await j(J), H = {
        ...J,
        id: _(),
        preview: le,
        status: Y ? "error" : "pending",
        error: Y,
        progress: 0
      };
      te.push(H);
    }
    W(f, [...t(f), ...te], !0), I("filesAdded", te), R() && e.uploadUrl && te.forEach((J) => {
      J.status === "pending" && O(J);
    });
  }
  async function O($) {
    if (!e.uploadUrl) return;
    const U = t(f).findIndex((S) => S.id === $.id);
    if (U === -1) return;
    t(f)[U] = { ...$, status: "uploading", progress: 0 }, I("uploadStart", t(f)[U]);
    const oe = new FormData();
    oe.append("file", $);
    try {
      const S = new XMLHttpRequest();
      S.upload.onprogress = (te) => {
        if (te.lengthComputable) {
          const J = Math.round(te.loaded / te.total * 100);
          t(f)[U] = { ...t(f)[U], progress: J }, I("uploadProgress", { file: t(f)[U], progress: J });
        }
      }, S.onload = () => {
        if (S.status >= 200 && S.status < 300)
          t(f)[U] = { ...t(f)[U], status: "success", progress: 100 }, I("uploadSuccess", { file: t(f)[U], response: S.response });
        else
          throw new Error(`Upload failed: ${S.statusText}`);
        t(f).every((te) => te.status === "success" || te.status === "error") && I("allUploadsComplete", t(f));
      }, S.onerror = () => {
        const te = "Upload failed: Network error";
        t(f)[U] = { ...t(f)[U], status: "error", error: te }, I("uploadError", { file: t(f)[U], error: te });
      }, S.open("POST", e.uploadUrl), S.send(oe);
    } catch (S) {
      const te = S instanceof Error ? S.message : "Upload failed";
      t(f)[U] = {
        ...t(f)[U],
        status: "error",
        error: te
      }, I("uploadError", { file: t(f)[U], error: te });
    }
  }
  function P($) {
    const U = t(f).findIndex((S) => S.id === $);
    if (U === -1) return;
    const oe = t(f)[U];
    W(f, t(f).filter((S) => S.id !== $), !0), I("fileRemoved", oe);
  }
  function Q($) {
    const U = t(f).find((oe) => oe.id === $);
    U && e.uploadUrl && O(U);
  }
  function G($) {
    const U = $.target;
    U.files && V(U.files), U.value = "";
  }
  function D($) {
    $.preventDefault(), p() || W(M, !0);
  }
  function T($) {
    $.preventDefault(), z?.contains($.relatedTarget) || W(M, !1);
  }
  function w($) {
    if ($.preventDefault(), W(M, !1), p()) return;
    const U = $.dataTransfer?.files;
    U && V(U);
  }
  function x() {
    !p() && L && L.click();
  }
  const C = /* @__PURE__ */ Ee(() => t(f).length < d()), X = /* @__PURE__ */ Ee(() => Z(
    "relative w-full rounded-lg border-2 border-dashed transition-all duration-300",
    "flex flex-col items-center justify-center p-8 min-h-32",
    "cursor-pointer font-mono",
    t(M) ? t(ee).dropZoneActive : t(ee).dropZone,
    p() && "opacity-50 cursor-not-allowed",
    h()
  ));
  var K = Su(), k = _e(K);
  k.__change = G, tt(k, ($) => L = $, () => L);
  var u = m(k, 2);
  u.__click = x, u.__keydown = [cu, x];
  var b = i(u);
  {
    var re = ($) => {
      var U = vu();
      $e(1, U, () => Yt, () => ({ duration: 200 })), o($, U);
    }, de = ($) => {
      var U = bu(), oe = m(i(U), 2), S = i(oe), te = i(S), J = m(S, 2), Y = i(J), le = m(J, 2);
      {
        var H = (se) => {
          var he = uu(), fe = i(he);
          A(() => ie(fe, `${t(f).length ?? ""} of ${d() ?? ""} files selected`)), o(se, he);
        };
        g(le, (se) => {
          a() && se(H);
        });
      }
      var ae = m(oe, 2);
      {
        var ce = (se) => {
          var he = fu();
          Ie(he, (fe, be) => ft?.(fe, be), () => ({ strength: 0.15 })), o(se, he);
        };
        g(ae, (se) => {
          t(C) && se(ce);
        });
      }
      A(
        (se) => {
          ie(te, t(C) ? "Choose files or drag and drop" : "Maximum files reached"), ie(Y, `${(n() === "*/*" ? "Any file type" : n()) ?? ""} • Max ${se ?? ""} per file`);
        },
        [() => E(l())]
      ), o($, U);
    };
    g(b, ($) => {
      t(M) ? $(re) : $(de, !1);
    });
  }
  tt(u, ($) => z = $, () => z), Ie(u, ($, U) => kt?.($, U), () => ({ blur: "md", opacity: "light" })), Ie(u, ($, U) => ft?.($, U), () => ({
    enabled: !p() && t(C),
    strength: 0.1
  }));
  var ue = m(u, 2);
  {
    var ve = ($) => {
      var U = Eu();
      Ge(U, 21, () => t(f), (oe) => oe.id, (oe, S) => {
        var te = Cu(), J = i(te), Y = i(J), le = i(Y);
        {
          var H = (qe) => {
            var Fe = gu();
            A(() => {
              xe(Fe, "src", t(S).preview), xe(Fe, "alt", t(S).name);
            }), o(qe, Fe);
          }, ae = (qe) => {
            var Fe = mu();
            o(qe, Fe);
          };
          g(le, (qe) => {
            t(S).preview ? qe(H) : qe(ae, !1);
          });
        }
        var ce = m(Y, 2), se = i(ce), he = i(se), fe = i(he), be = m(he, 2), ge = i(be);
        {
          var Ce = (qe) => {
            var Fe = hu();
            A(() => N(Fe, 0, `w-5 h-5 ${t(ee).successIcon ?? ""}`)), o(qe, Fe);
          }, Pe = (qe) => {
            var Fe = Se(), ke = _e(Fe);
            {
              var me = (De) => {
                var He = xu(), Je = _e(He);
                Je.__click = [pu, Q, S];
                var We = m(Je, 2);
                A(() => N(We, 0, `w-5 h-5 ${t(ee).errorIcon ?? ""}`)), o(De, He);
              }, ze = (De) => {
                var He = Se(), Je = _e(He);
                {
                  var We = (at) => {
                    var lt = _u();
                    o(at, lt);
                  };
                  g(
                    Je,
                    (at) => {
                      t(S).status === "uploading" && at(We);
                    },
                    !0
                  );
                }
                o(De, He);
              };
              g(
                ke,
                (De) => {
                  t(S).status === "error" ? De(me) : De(ze, !1);
                },
                !0
              );
            }
            o(qe, Fe);
          };
          g(ge, (qe) => {
            t(S).status === "success" ? qe(Ce) : qe(Pe, !1);
          });
        }
        var Be = m(ge, 2);
        Be.__click = [wu, P, S];
        var je = m(se, 2), we = i(je), pe = i(we), Te = m(we, 2);
        {
          var Ne = (qe) => {
            var Fe = yu(), ke = i(Fe);
            A(() => ie(ke, t(S).error)), o(qe, Fe);
          };
          g(Te, (qe) => {
            t(S).error && qe(Ne);
          });
        }
        var Ae = m(je, 2);
        {
          var Le = (qe) => {
            var Fe = ku(), ke = i(Fe), me = i(ke), ze = m(ke, 2), De = i(ze);
            A(() => {
              N(me, 1, `h-2 rounded-full ${t(ee).progressBar ?? ""} transition-all duration-300`), ht(me, `width: ${t(S).progress ?? ""}%`), ie(De, `${t(S).progress ?? ""}% uploaded`);
            }), o(qe, Fe);
          };
          g(Ae, (qe) => {
            t(S).status === "uploading" && t(S).progress !== void 0 && qe(Le);
          });
        }
        Ie(te, (qe, Fe) => kt?.(qe, Fe), () => ({ blur: "sm", opacity: "subtle" })), A(
          (qe) => {
            N(te, 1, `p-4 rounded-lg border ${t(ee).fileItem ?? ""} transition-all duration-200`), ie(fe, t(S).name), N(Be, 1, `p-1 rounded ${t(ee).removeButton ?? ""} hover:bg-red-500/20 transition-colors`), ie(pe, qe);
          },
          [() => E(t(S).size)]
        ), $e(1, te, () => Yt, () => ({ duration: 300, bounce: !0 })), o(oe, te);
      }), o($, U);
    };
    g(ue, ($) => {
      t(f).length > 0 && $(ve);
    });
  }
  A(() => {
    xe(k, "accept", n()), k.multiple = a(), k.disabled = p(), N(u, 1, ne(t(X))), xe(u, "tabindex", p() ? -1 : 0);
  }), Ot("dragover", u, D), Ot("dragleave", u, T), Ot("drop", u, w), o(r, K), Xe();
}
vt(["change", "click", "keydown"]);
const Bt = {
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
function ti(r, e) {
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
function Mu(r, e) {
  const a = {};
  for (const [n, l] of Object.entries(e)) {
    const d = r[n];
    a[n] = ti(d, l);
  }
  return a;
}
function Au(r) {
  return Object.values(r).every((e) => e.isValid);
}
function zu(r) {
  const e = {};
  for (const [a, n] of Object.entries(r))
    n.isValid || (e[a] = n.errors);
  return e;
}
function op(r) {
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
        const d = ti(e[l], r[l]);
        d.isValid ? delete a[l] : a[l] = d.errors;
      }
    },
    validateAll() {
      const l = Mu(e, r);
      return a = zu(l), Au(l);
    },
    reset() {
      e = {}, a = {}, n = {};
    },
    setData(l) {
      e = { ...l };
    }
  };
}
function ip(r, e = 300) {
  let a;
  return function(...n) {
    clearTimeout(a), a = setTimeout(() => r.apply(this, n), e);
  };
}
const lp = {
  login: {
    email: {
      rules: [Bt.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Bt.minLength(6)],
      required: !0
    }
  },
  registration: {
    name: {
      rules: [Bt.minLength(2), Bt.maxLength(50)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Bt.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Bt.strongPassword()],
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
      rules: [Bt.minLength(2), Bt.maxLength(100)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Bt.email()],
      required: !0,
      trim: !0
    },
    phone: {
      rules: [Bt.phoneNumber()],
      required: !1,
      trim: !0
    },
    message: {
      rules: [Bt.minLength(10), Bt.maxLength(1e3)],
      required: !0,
      trim: !0
    }
  }
};
function Iu(r, e) {
  e("homeClick");
}
var Pu = /* @__PURE__ */ c('<span class="mr-1 text-base"> </span>'), Lu = /* @__PURE__ */ c('<li aria-hidden="true"> </li>'), Du = /* @__PURE__ */ c('<li><button aria-label="Go to home"><!> </button></li> <!>', 1), ju = /* @__PURE__ */ c('<span aria-hidden="true"> </span>'), Ru = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), Nu = /* @__PURE__ */ c('<span aria-current="page"><!> </span>'), Ou = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), qu = /* @__PURE__ */ c("<a><!> </a>"), Bu = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), Fu = /* @__PURE__ */ c("<button><!> </button>"), Hu = /* @__PURE__ */ c('<li aria-hidden="true"> </li>'), Vu = /* @__PURE__ */ c('<li class="flex items-center"><!></li> <!>', 1), Gu = /* @__PURE__ */ c('<nav aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><!> <!></ol></nav>');
const Uu = {
  hash: "svelte-1ozmnrq",
  code: `
	/* Terminal glow effects */.terminal .breadcrumb-item:hover {text-shadow:0 0 5px var(--terminal-green);}`
};
function sp(r, e) {
  Ke(e, !0), Qe(r, Uu);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "separator", 3, "chevron"), d = s(e, "showHome", 3, !0), v = s(e, "homeIcon", 3, "🏠"), p = s(e, "homeLabel", 3, "Home"), y = s(e, "maxItems", 3, 5), R = s(e, "class", 3, ""), h = Mt(), I = {
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
      container: `text-${Me.terminal.green}/60`,
      item: `text-${Me.terminal.green}/60 hover:text-${Me.terminal.green}`,
      activeItem: `text-${Me.terminal.green}`,
      separator: `text-${Me.terminal.green}/40`,
      home: `text-${Me.terminal.green}/60 hover:text-${Me.terminal.green}`
    }
  }, L = { slash: "/", chevron: "›", arrow: "→", dot: "•" }, z = /* @__PURE__ */ Ee(() => I[n()]), M = /* @__PURE__ */ Ee(() => () => {
    if (a().length <= y())
      return a();
    const j = a()[0], V = a().slice(-(y() - 2));
    return [
      j,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...V
    ];
  });
  function f(j, V) {
    j.disabled || j.id === "ellipsis" || h("navigate", { item: j, index: V });
  }
  const q = /* @__PURE__ */ Ee(() => Z("flex items-center space-x-2 text-sm font-mono", t(z).container, R()));
  var ee = Gu(), _ = i(ee), E = i(_);
  {
    var B = (j) => {
      var V = Du(), O = _e(V), P = i(O);
      P.__click = [Iu, h];
      var Q = i(P);
      {
        var G = (x) => {
          var C = Pu(), X = i(C);
          A(() => ie(X, v())), o(x, C);
        };
        g(Q, (x) => {
          v() && x(G);
        });
      }
      var D = m(Q);
      Ie(P, (x, C) => ft?.(x, C), () => ({ strength: 0.1 }));
      var T = m(O, 2);
      {
        var w = (x) => {
          var C = Lu(), X = i(C);
          A(() => {
            N(C, 1, ne(t(z).separator)), ie(X, L[l()]);
          }), o(x, C);
        };
        g(T, (x) => {
          t(M).length > 0 && x(w);
        });
      }
      A(() => {
        N(P, 1, `flex items-center ${t(z).home ?? ""} hover:underline transition-colors`), ie(D, ` ${p() ?? ""}`);
      }), o(j, V);
    };
    g(E, (j) => {
      d() && j(B);
    });
  }
  var F = m(E, 2);
  Ge(F, 19, () => t(M), (j) => j.id, (j, V, O) => {
    var P = Vu(), Q = _e(P), G = i(Q);
    {
      var D = (C) => {
        var X = ju(), K = i(X);
        A(() => {
          N(X, 1, `px-2 ${t(z).separator ?? ""}`), ie(K, t(V).label);
        }), o(C, X);
      }, T = (C) => {
        var X = Se(), K = _e(X);
        {
          var k = (b) => {
            var re = Nu(), de = i(re);
            {
              var ue = ($) => {
                var U = Ru(), oe = i(U);
                A(() => ie(oe, t(V).icon)), o($, U);
              };
              g(de, ($) => {
                t(V).icon && $(ue);
              });
            }
            var ve = m(de);
            A(() => {
              N(re, 1, `flex items-center ${t(z).activeItem ?? ""} font-medium`), ie(ve, ` ${t(V).label ?? ""}`);
            }), o(b, re);
          }, u = (b) => {
            var re = Se(), de = _e(re);
            {
              var ue = ($) => {
                var U = qu();
                U.__click = (J) => {
                  t(V).disabled ? J.preventDefault() : f(t(V), t(O));
                };
                var oe = i(U);
                {
                  var S = (J) => {
                    var Y = Ou(), le = i(Y);
                    A(() => ie(le, t(V).icon)), o(J, Y);
                  };
                  g(oe, (J) => {
                    t(V).icon && J(S);
                  });
                }
                var te = m(oe);
                Ie(U, (J, Y) => ft?.(J, Y), () => ({ enabled: !t(V).disabled, strength: 0.1 })), A(() => {
                  xe(U, "href", t(V).href), N(U, 1, `flex items-center ${t(z).item ?? ""} hover:underline transition-colors
							       ${t(V).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ie(te, ` ${t(V).label ?? ""}`);
                }), o($, U);
              }, ve = ($) => {
                var U = Fu();
                U.__click = () => f(t(V), t(O));
                var oe = i(U);
                {
                  var S = (J) => {
                    var Y = Bu(), le = i(Y);
                    A(() => ie(le, t(V).icon)), o(J, Y);
                  };
                  g(oe, (J) => {
                    t(V).icon && J(S);
                  });
                }
                var te = m(oe);
                Ie(U, (J, Y) => ft?.(J, Y), () => ({ enabled: !t(V).disabled, strength: 0.1 })), A(() => {
                  U.disabled = t(V).disabled, N(U, 1, `flex items-center ${t(z).item ?? ""} hover:underline transition-colors
							       ${t(V).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ie(te, ` ${t(V).label ?? ""}`);
                }), o($, U);
              };
              g(de, ($) => {
                t(V).href ? $(ue) : $(ve, !1);
              });
            }
            o(b, re);
          };
          g(
            K,
            (b) => {
              t(O) === t(M).length - 1 ? b(k) : b(u, !1);
            },
            !0
          );
        }
        o(C, X);
      };
      g(G, (C) => {
        t(V).id === "ellipsis" ? C(D) : C(T, !1);
      });
    }
    var w = m(Q, 2);
    {
      var x = (C) => {
        var X = Hu(), K = i(X);
        A(() => {
          N(X, 1, ne(t(z).separator)), ie(K, L[l()]);
        }), o(C, X);
      };
      g(w, (C) => {
        t(O) < t(M).length - 1 && t(V).id !== "ellipsis" && C(x);
      });
    }
    o(j, P);
  }), A(() => N(ee, 1, ne(t(q)))), o(r, ee), Xe();
}
vt(["click"]);
function Yu(r, e, a, n, l, d, v, p) {
  if (!t(e)) {
    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), a());
    return;
  }
  switch (r.key) {
    case "Escape":
      r.preventDefault(), n();
      break;
    case "ArrowDown":
      r.preventDefault(), W(l, Math.min(t(l) + 1, t(d).length - 1), !0);
      break;
    case "ArrowUp":
      r.preventDefault(), W(l, Math.max(t(l) - 1, 0), !0);
      break;
    case "Enter":
      r.preventDefault(), t(l) >= 0 && t(d)()[t(l)] && v(t(d)()[t(l)]);
      break;
    case "ArrowRight":
      t(l) >= 0 && t(d)()[t(l)]?.children?.length && W(p, t(d)()[t(l)].id, !0);
      break;
    case "ArrowLeft":
      t(p) && W(p, null);
      break;
  }
}
var Wu = /* @__PURE__ */ c("<div><span>Menu</span> <!></div>"), Ku = /* @__PURE__ */ c("<hr/>"), Xu = (r, e, a) => e(t(a)), Zu = (r, e, a) => r.key === "Enter" && e(t(a)), Qu = /* @__PURE__ */ c('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), Ju = /* @__PURE__ */ c("<span> </span>"), $u = /* @__PURE__ */ c("<span> </span>"), e0 = /* @__PURE__ */ c("<hr/>"), t0 = (r, e, a) => e(t(a)), r0 = (r, e, a) => r.key === "Enter" && e(t(a)), a0 = /* @__PURE__ */ c('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), n0 = /* @__PURE__ */ c("<span> </span>"), o0 = /* @__PURE__ */ c("<span> </span>"), i0 = /* @__PURE__ */ c('<div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <!></div>'), l0 = /* @__PURE__ */ c('<div role="menu"><div class="py-1"></div></div>'), s0 = /* @__PURE__ */ c('<div class="relative"><div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <div class="flex items-center gap-2 ml-3"><!> <!></div></div> <!></div>'), d0 = /* @__PURE__ */ c('<div role="menu"><div class="py-1"></div></div>'), c0 = /* @__PURE__ */ c('<div><div class="cursor-pointer" tabindex="0" role="button" aria-haspopup="menu"><!></div> <!></div>');
const v0 = {
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
function dp(r, e) {
  Ke(e, !0), Qe(r, v0);
  let a = s(e, "openMode", 3, "click"), n = s(e, "placement", 3, "bottom-start"), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), v = s(e, "closeOnClick", 3, !0), p = s(e, "showIcons", 3, !0), y = s(e, "showKeyboards", 3, !0), R = s(e, "class", 3, ""), h = /* @__PURE__ */ dt(e, [
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
  const I = Mt();
  let L = /* @__PURE__ */ ye(!1), z, M, f = /* @__PURE__ */ ye(null), q = /* @__PURE__ */ ye(-1);
  const ee = `menu-${Math.random().toString(36).substr(2, 9)}`, _ = {
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
  }, E = {
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
  }, B = _[d()], F = E[l()], j = /* @__PURE__ */ Ee(() => () => {
    const b = [];
    function re(de) {
      for (const ue of de)
        ue.separator || b.push(ue), ue.children && re(ue.children);
    }
    return re(e.items), b;
  });
  function V() {
    W(L, !t(L)), t(L) && (W(q, -1), W(f, null)), I("toggle", { isOpen: t(L) });
  }
  function O() {
    W(L, !1), W(f, null), W(q, -1), I("close");
  }
  function P(b) {
    b.disabled || (b.children?.length ? W(f, t(f) === b.id ? null : b.id, !0) : (b.onclick && b.onclick(), I("select", { item: b }), v() && O()));
  }
  function Q(b) {
    a() === "hover" && b.children?.length && W(f, b.id, !0);
  }
  function G() {
    a() === "hover" && W(f, null);
  }
  function D(b) {
    z && !z.contains(b.target) && O();
  }
  wt(() => (document.addEventListener("click", D), () => document.removeEventListener("click", D)));
  function T() {
    return {
      "bottom-start": "top-full left-0 mt-1",
      "bottom-end": "top-full right-0 mt-1",
      "top-start": "bottom-full left-0 mb-1",
      "top-end": "bottom-full right-0 mb-1",
      "right-start": "left-full top-0 ml-1",
      "left-start": "right-full top-0 mr-1"
    }[n()];
  }
  var w = c0();
  Ze(w, (b) => ({ class: b, ...h }), [() => Z("relative inline-block", R())], void 0, "svelte-i7uadz");
  var x = i(w);
  x.__click = function(...b) {
    (a() === "click" ? V : void 0)?.apply(this, b);
  }, x.__keydown = [
    Yu,
    L,
    V,
    O,
    q,
    j,
    P,
    f
  ];
  var C = i(x);
  {
    var X = (b) => {
      var re = Se(), de = _e(re);
      ot(de, () => e.children.trigger), o(b, re);
    }, K = (b) => {
      var re = Wu(), de = m(i(re), 2);
      {
        let ue = /* @__PURE__ */ Ee(() => Z("transition-transform duration-200", t(L) && "rotate-180"));
        tn(de, {
          size: 16,
          get class() {
            return t(ue);
          }
        });
      }
      A((ue) => N(re, 1, ue), [
        () => ne(Z("flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200", F.item, t(L) && F.itemActive))
      ]), o(b, re);
    };
    g(C, (b) => {
      e.children?.trigger ? b(X) : b(K, !1);
    });
  }
  tt(x, (b) => M = b, () => M);
  var k = m(x, 2);
  {
    var u = (b) => {
      var re = d0(), de = i(re);
      Ge(de, 23, () => e.items, (ue) => ue.id, (ue, ve) => {
        var $ = Se(), U = _e($);
        {
          var oe = (te) => {
            var J = Ku();
            A((Y) => N(J, 1, Y), [() => ne(Z("my-1 border-t", F.separator))]), o(te, J);
          }, S = (te) => {
            var J = s0(), Y = i(J);
            Y.__click = [Xu, P, ve], Y.__keydown = [Zu, P, ve];
            var le = i(Y), H = i(le);
            {
              var ae = (pe) => {
                var Te = Qu();
                A((Ne) => N(Te, 1, Ne), [() => ne(Z("flex-shrink-0", B.icon))]), o(pe, Te);
              };
              g(H, (pe) => {
                p() && t(ve).icon && pe(ae);
              });
            }
            var ce = m(H, 2), se = i(ce), he = m(ce, 2);
            {
              var fe = (pe) => {
                var Te = Ju(), Ne = i(Te);
                A(
                  (Ae) => {
                    N(Te, 1, Ae), ie(Ne, t(ve).badge);
                  },
                  [
                    () => ne(Z("inline-flex items-center rounded-full font-medium", B.badge, F.badge))
                  ]
                ), o(pe, Te);
              };
              g(he, (pe) => {
                t(ve).badge && pe(fe);
              });
            }
            var be = m(le, 2), ge = i(be);
            {
              var Ce = (pe) => {
                var Te = $u(), Ne = i(Te);
                A(
                  (Ae) => {
                    N(Te, 1, Ae), ie(Ne, t(ve).keyboard);
                  },
                  [
                    () => ne(Z("opacity-60 font-mono", B.keyboard, F.keyboard))
                  ]
                ), o(pe, Te);
              };
              g(ge, (pe) => {
                y() && t(ve).keyboard && pe(Ce);
              });
            }
            var Pe = m(ge, 2);
            {
              var Be = (pe) => {
                Rr(pe, { size: 16, class: "opacity-60" });
              };
              g(Pe, (pe) => {
                t(ve).children?.length && pe(Be);
              });
            }
            var je = m(Y, 2);
            {
              var we = (pe) => {
                var Te = l0(), Ne = i(Te);
                Ge(Ne, 21, () => t(ve).children, (Ae) => Ae.id, (Ae, Le) => {
                  var qe = Se(), Fe = _e(qe);
                  {
                    var ke = (ze) => {
                      var De = e0();
                      A((He) => N(De, 1, He), [() => ne(Z("my-1 border-t", F.separator))]), o(ze, De);
                    }, me = (ze) => {
                      var De = i0();
                      De.__click = [t0, P, Le], De.__keydown = [r0, P, Le];
                      var He = i(De), Je = i(He);
                      {
                        var We = (Oe) => {
                          var Ve = a0();
                          A((rt) => N(Ve, 1, rt), [() => ne(Z("flex-shrink-0", B.icon))]), o(Oe, Ve);
                        };
                        g(Je, (Oe) => {
                          p() && t(Le).icon && Oe(We);
                        });
                      }
                      var at = m(Je, 2), lt = i(at), et = m(at, 2);
                      {
                        var nt = (Oe) => {
                          var Ve = n0(), rt = i(Ve);
                          A(
                            (gt) => {
                              N(Ve, 1, gt), ie(rt, t(Le).badge);
                            },
                            [
                              () => ne(Z("inline-flex items-center rounded-full font-medium", B.badge, F.badge))
                            ]
                          ), o(Oe, Ve);
                        };
                        g(et, (Oe) => {
                          t(Le).badge && Oe(nt);
                        });
                      }
                      var Ue = m(He, 2);
                      {
                        var Re = (Oe) => {
                          var Ve = o0(), rt = i(Ve);
                          A(
                            (gt) => {
                              N(Ve, 1, gt), ie(rt, t(Le).keyboard);
                            },
                            [
                              () => ne(Z("opacity-60 font-mono ml-3", B.keyboard, F.keyboard))
                            ]
                          ), o(Oe, Ve);
                        };
                        g(Ue, (Oe) => {
                          y() && t(Le).keyboard && Oe(Re);
                        });
                      }
                      A(
                        (Oe) => {
                          N(De, 1, Oe, "svelte-i7uadz"), xe(De, "aria-disabled", t(Le).disabled), xe(De, "tabindex", t(Le).disabled ? -1 : 0), ie(lt, t(Le).label);
                        },
                        [
                          () => ne(Z("flex items-center justify-between cursor-pointer transition-all duration-150", B.item, t(Le).disabled ? F.itemDisabled : F.item))
                        ]
                      ), o(ze, De);
                    };
                    g(Fe, (ze) => {
                      t(Le).separator ? ze(ke) : ze(me, !1);
                    });
                  }
                  o(Ae, qe);
                }), Ie(Te, (Ae, Le) => kt?.(Ae, Le), () => ({ intensity: "medium" })), A((Ae) => N(Te, 1, Ae, "svelte-i7uadz"), [
                  () => ne(Z("absolute z-10 min-w-[180px] rounded-lg border shadow-lg", "left-full top-0 ml-1", F.menu))
                ]), o(pe, Te);
              };
              g(je, (pe) => {
                t(ve).children?.length && t(f) === t(ve).id && pe(we);
              });
            }
            A(
              (pe) => {
                N(Y, 1, pe, "svelte-i7uadz"), xe(Y, "aria-disabled", t(ve).disabled), xe(Y, "tabindex", t(ve).disabled ? -1 : 0), ie(se, t(ve).label);
              },
              [
                () => ne(Z("flex items-center justify-between cursor-pointer transition-all duration-150", B.item, t(ve).disabled ? F.itemDisabled : F.item, t(q) === t(j)().indexOf(t(ve)) && !t(ve).disabled && F.itemActive, t(f) === t(ve).id && F.itemActive))
              ]
            ), Ot("mouseenter", Y, () => Q(t(ve))), Ot("mouseleave", Y, G), o(te, J);
          };
          g(U, (te) => {
            t(ve).separator ? te(oe) : te(S, !1);
          });
        }
        o(ue, $);
      }), Ie(re, (ue, ve) => kt?.(ue, ve), () => ({ intensity: "medium" })), A(
        (ue) => {
          xe(re, "id", ee), N(re, 1, ue, "svelte-i7uadz");
        },
        [
          () => ne(Z("absolute z-50 min-w-[200px] rounded-lg border shadow-lg", T(), F.menu))
        ]
      ), o(b, re);
    };
    g(k, (b) => {
      t(L) && b(u);
    });
  }
  tt(w, (b) => z = b, () => z), A(() => {
    xe(x, "aria-expanded", t(L)), xe(x, "aria-controls", ee);
  }), Ot("mouseenter", x, function(...b) {
    (a() === "hover" ? V : void 0)?.apply(this, b);
  }), Ot("mouseleave", x, function(...b) {
    (a() === "hover" ? () => setTimeout(O, 150) : void 0)?.apply(this, b);
  }), o(r, w), Xe();
}
vt(["click", "keydown"]);
function u0(r, e, a) {
  e("brandClick"), W(a, !1);
}
function f0(r, e, a) {
  W(e, !t(e)), a("mobileToggle", t(e));
}
var b0 = /* @__PURE__ */ c('<img alt="Logo" class="h-8 w-auto"/>'), g0 = /* @__PURE__ */ c(`<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"> </div>`), m0 = /* @__PURE__ */ c('<span class="text-xl font-bold tracking-tight"> </span>'), h0 = /* @__PURE__ */ c('<div class="flex items-center"><button><!> <!></button></div>'), p0 = (
  // Handle scroll for backdrop effects
  // Click outside to close dropdowns
  (r, e, a) => e(t(a))
), x0 = (r, e, a) => e(r, t(a)), _0 = /* @__PURE__ */ c('<span class="mr-2 text-lg"> </span>'), w0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), y0 = (r, e, a) => e(t(a), r), k0 = /* @__PURE__ */ c('<span class="mr-2"> </span>'), C0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), E0 = /* @__PURE__ */ c('<a role="menuitem"><!> <!></a>'), S0 = /* @__PURE__ */ c('<div role="menu"></div>'), T0 = /* @__PURE__ */ c('<button aria-haspopup="true"><!> <!> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!>', 1), M0 = (r, e, a) => e(t(a), r), A0 = (r, e, a) => e(r, t(a)), z0 = /* @__PURE__ */ c('<span class="mr-2 text-lg"> </span>'), I0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), P0 = /* @__PURE__ */ ar('<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), L0 = /* @__PURE__ */ c("<a><!> <!> <!></a>"), D0 = /* @__PURE__ */ c('<div class="relative"><!></div>'), j0 = /* @__PURE__ */ ar('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), R0 = /* @__PURE__ */ ar('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'), N0 = (r, e, a) => e(t(a)), O0 = /* @__PURE__ */ c('<span class="mr-3 text-lg"> </span>'), q0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), B0 = (r, e, a) => e(t(a), r), F0 = /* @__PURE__ */ c('<span class="mr-3"> </span>'), H0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), V0 = /* @__PURE__ */ c("<a><!> <!></a>"), G0 = /* @__PURE__ */ c('<div class="pl-6 mt-2 space-y-1"></div>'), U0 = /* @__PURE__ */ c('<div><button><span class="flex items-center"><!> <!></span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), Y0 = (r, e, a) => e(t(a), r), W0 = /* @__PURE__ */ c('<span class="mr-3 text-lg"> </span>'), K0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), X0 = /* @__PURE__ */ ar('<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), Z0 = /* @__PURE__ */ c("<a><!> <!> <!></a>"), Q0 = /* @__PURE__ */ c('<div><div class="px-2 pt-2 pb-3 space-y-1"></div></div>'), J0 = /* @__PURE__ */ c('<nav aria-label="Main navigation"><div><!> <div class="hidden md:flex items-center space-x-1"></div> <div class="md:hidden"><button aria-label="Toggle mobile menu"><!></button></div></div> <!></nav>');
const $0 = {
  hash: "svelte-14x41x6",
  code: `
	/* Terminal glow effects */.terminal .navbar-brand:hover {text-shadow:0 0 10px var(--terminal-green);}.terminal .nav-item:hover {box-shadow:0 0 5px var(--terminal-green-glow);}`
};
function cp(r, e) {
  Ke(e, !0), Qe(r, $0);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "glass"), l = s(e, "position", 3, "static"), d = s(e, "backdrop", 3, !0), v = s(e, "logoText", 3, "TULIO"), p = s(e, "showBrand", 3, !0), y = s(e, "compact", 3, !1), R = s(e, "transparent", 3, !1), h = s(e, "activeItem", 3, ""), I = s(e, "class", 3, ""), L = Mt();
  let z, M = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(st(/* @__PURE__ */ new Set())), q = /* @__PURE__ */ ye(!1);
  const ee = {
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
      nav: `bg-black/90 border-${Me.terminal.green}`,
      item: `text-${Me.terminal.green}/80 hover:text-${Me.terminal.green} hover:bg-${Me.terminal.green}/10`,
      activeItem: `text-black bg-${Me.terminal.green}`,
      dropdown: `bg-black/95 border-${Me.terminal.green}`,
      brand: `text-${Me.terminal.green}`,
      mobileButton: `text-${Me.terminal.green}/80 hover:text-${Me.terminal.green}`
    }
  }, _ = /* @__PURE__ */ Ee(() => ee[n()]);
  function E(u, b) {
    if (!u.disabled) {
      if (u.children) {
        const re = new Set(t(f));
        re.has(u.id) ? re.delete(u.id) : re.add(u.id), W(f, re, !0);
        return;
      }
      if (W(M, !1), L("navigate", { item: u, href: u.href }), u.external && u.href) {
        window.open(u.href, "_blank", "noopener,noreferrer"), b?.preventDefault();
        return;
      }
    }
  }
  function B() {
    W(f, /* @__PURE__ */ new Set(), !0);
  }
  function F(u, b) {
    u.key === "Enter" || u.key === " " ? (u.preventDefault(), E(b)) : u.key === "Escape" && B();
  }
  wt(() => {
    function u() {
      W(q, window.scrollY > 10);
    }
    if (l() === "fixed" || l() === "sticky")
      return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }), wt(() => {
    function u(b) {
      z && !z.contains(b.target) && B();
    }
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  });
  const j = /* @__PURE__ */ Ee(() => Z("w-full border-b transition-all duration-300", "font-mono", t(_).nav, l() === "fixed" && "fixed top-0 left-0 z-50", l() === "sticky" && "sticky top-0 z-40", d() && "backdrop-blur-xl", R() && !t(q) && "bg-transparent border-transparent", y() ? "py-2" : "py-4", I())), V = /* @__PURE__ */ Ee(() => Z("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "flex items-center justify-between", y() ? "h-12" : "h-16"));
  var O = J0(), P = i(O), Q = i(P);
  {
    var G = (u) => {
      var b = h0(), re = i(b);
      re.__click = [u0, L, M];
      var de = i(re);
      {
        var ue = (oe) => {
          var S = b0();
          A(() => xe(S, "src", e.logo)), o(oe, S);
        }, ve = (oe) => {
          var S = g0(), te = i(S);
          A((J) => ie(te, J), [() => v().charAt(0)]), o(oe, S);
        };
        g(de, (oe) => {
          e.logo ? oe(ue) : oe(ve, !1);
        });
      }
      var $ = m(de, 2);
      {
        var U = (oe) => {
          var S = m0(), te = i(S);
          A(() => ie(te, v())), o(oe, S);
        };
        g($, (oe) => {
          v() && oe(U);
        });
      }
      Ie(re, (oe, S) => ft?.(oe, S), () => ({ strength: 0.1 })), A(() => N(re, 1, `flex items-center space-x-3 ${t(_).brand ?? ""} hover:opacity-80 transition-opacity`)), o(u, b);
    };
    g(Q, (u) => {
      p() && u(G);
    });
  }
  var D = m(Q, 2);
  Ge(D, 21, a, (u) => u.id, (u, b) => {
    var re = D0(), de = i(re);
    {
      var ue = ($) => {
        var U = T0(), oe = _e(U);
        oe.__click = [p0, E, b], oe.__keydown = [x0, F, b];
        var S = i(oe);
        {
          var te = (se) => {
            var he = _0(), fe = i(he);
            A(() => ie(fe, t(b).icon)), o(se, he);
          };
          g(S, (se) => {
            t(b).icon && se(te);
          });
        }
        var J = m(S), Y = m(J);
        {
          var le = (se) => {
            var he = w0(), fe = i(he);
            A(() => ie(fe, t(b).badge)), o(se, he);
          };
          g(Y, (se) => {
            t(b).badge && se(le);
          });
        }
        var H = m(Y, 2);
        Ie(oe, (se, he) => ft?.(se, he), () => ({ enabled: !t(b).disabled, strength: 0.1 }));
        var ae = m(oe, 2);
        {
          var ce = (se) => {
            var he = S0();
            Ge(he, 21, () => t(b).children, (fe) => fe.id, (fe, be) => {
              var ge = E0();
              ge.__click = [y0, E, be];
              var Ce = i(ge);
              {
                var Pe = (pe) => {
                  var Te = k0(), Ne = i(Te);
                  A(() => ie(Ne, t(be).icon)), o(pe, Te);
                };
                g(Ce, (pe) => {
                  t(be).icon && pe(Pe);
                });
              }
              var Be = m(Ce), je = m(Be);
              {
                var we = (pe) => {
                  var Te = C0(), Ne = i(Te);
                  A(() => ie(Ne, t(be).badge)), o(pe, Te);
                };
                g(je, (pe) => {
                  t(be).badge && pe(we);
                });
              }
              Ie(ge, (pe, Te) => ft?.(pe, Te), () => ({ enabled: !t(be).disabled, strength: 0.1 })), A(() => {
                xe(ge, "href", t(be).href), N(ge, 1, `block px-4 py-2 text-sm ${t(_).item ?? ""} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       ${t(be).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ie(Be, ` ${t(be).label ?? ""} `);
              }), o(fe, ge);
            }), Ie(he, (fe, be) => kt?.(fe, be), () => ({ blur: "xl", opacity: "strong" })), A(() => N(he, 1, `absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       ${t(_).dropdown ?? ""}`)), $e(1, he, () => mt, () => ({ direction: "up", duration: 200 })), o(se, he);
          };
          g(ae, (se) => {
            t(f).has(t(b).id) && se(ce);
          });
        }
        A(
          (se, he) => {
            N(oe, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(b).id === h() ? t(_).activeItem : t(_).item) ?? ""}
							       ${t(b).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), oe.disabled = t(b).disabled, xe(oe, "aria-expanded", se), ie(J, ` ${t(b).label ?? ""} `), N(H, 0, `ml-1 w-4 h-4 transition-transform duration-200
								       ${he ?? ""}`);
          },
          [
            () => t(f).has(t(b).id),
            () => t(f).has(t(b).id) ? "rotate-180" : ""
          ]
        ), o($, U);
      }, ve = ($) => {
        var U = L0();
        U.__click = [M0, E, b], U.__keydown = [A0, F, b];
        var oe = i(U);
        {
          var S = (ae) => {
            var ce = z0(), se = i(ce);
            A(() => ie(se, t(b).icon)), o(ae, ce);
          };
          g(oe, (ae) => {
            t(b).icon && ae(S);
          });
        }
        var te = m(oe), J = m(te);
        {
          var Y = (ae) => {
            var ce = I0(), se = i(ce);
            A(() => ie(se, t(b).badge)), o(ae, ce);
          };
          g(J, (ae) => {
            t(b).badge && ae(Y);
          });
        }
        var le = m(J, 2);
        {
          var H = (ae) => {
            var ce = P0();
            o(ae, ce);
          };
          g(le, (ae) => {
            t(b).external && ae(H);
          });
        }
        Ie(U, (ae, ce) => ft?.(ae, ce), () => ({ enabled: !t(b).disabled, strength: 0.1 })), A(() => {
          xe(U, "href", t(b).href), N(U, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(b).id === h() ? t(_).activeItem : t(_).item) ?? ""}
							       ${t(b).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), xe(U, "aria-current", t(b).id === h() ? "page" : void 0), ie(te, ` ${t(b).label ?? ""} `);
        }), o($, U);
      };
      g(de, ($) => {
        t(b).children ? $(ue) : $(ve, !1);
      });
    }
    o(u, re);
  });
  var T = m(D, 2), w = i(T);
  w.__click = [f0, M, L];
  var x = i(w);
  {
    var C = (u) => {
      var b = j0();
      o(u, b);
    }, X = (u) => {
      var b = R0();
      o(u, b);
    };
    g(x, (u) => {
      t(M) ? u(C) : u(X, !1);
    });
  }
  Ie(w, (u, b) => ft?.(u, b), () => ({ strength: 0.15 }));
  var K = m(P, 2);
  {
    var k = (u) => {
      var b = Q0(), re = i(b);
      Ge(re, 21, a, (de) => de.id, (de, ue) => {
        var ve = Se(), $ = _e(ve);
        {
          var U = (S) => {
            var te = U0(), J = i(te);
            J.__click = [N0, E, ue];
            var Y = i(J), le = i(Y);
            {
              var H = (ge) => {
                var Ce = O0(), Pe = i(Ce);
                A(() => ie(Pe, t(ue).icon)), o(ge, Ce);
              };
              g(le, (ge) => {
                t(ue).icon && ge(H);
              });
            }
            var ae = m(le), ce = m(ae);
            {
              var se = (ge) => {
                var Ce = q0(), Pe = i(Ce);
                A(() => ie(Pe, t(ue).badge)), o(ge, Ce);
              };
              g(ce, (ge) => {
                t(ue).badge && ge(se);
              });
            }
            var he = m(Y, 2), fe = m(J, 2);
            {
              var be = (ge) => {
                var Ce = G0();
                Ge(Ce, 21, () => t(ue).children, (Pe) => Pe.id, (Pe, Be) => {
                  var je = V0();
                  je.__click = [B0, E, Be];
                  var we = i(je);
                  {
                    var pe = (Le) => {
                      var qe = F0(), Fe = i(qe);
                      A(() => ie(Fe, t(Be).icon)), o(Le, qe);
                    };
                    g(we, (Le) => {
                      t(Be).icon && Le(pe);
                    });
                  }
                  var Te = m(we), Ne = m(Te);
                  {
                    var Ae = (Le) => {
                      var qe = H0(), Fe = i(qe);
                      A(() => ie(Fe, t(Be).badge)), o(Le, qe);
                    };
                    g(Ne, (Le) => {
                      t(Be).badge && Le(Ae);
                    });
                  }
                  A(() => {
                    xe(je, "href", t(Be).href), N(je, 1, `flex items-center px-3 py-2 rounded-md text-sm
											       ${t(_).item ?? ""} hover:bg-white/10 transition-colors
											       ${t(Be).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ie(Te, ` ${t(Be).label ?? ""} `);
                  }), o(Pe, je);
                }), $e(1, Ce, () => mt, () => ({ direction: "down", duration: 150 })), o(ge, Ce);
              };
              g(fe, (ge) => {
                t(f).has(t(ue).id) && ge(be);
              });
            }
            A(
              (ge, Ce) => {
                N(J, 1, `w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       ${(t(ue).id === h() ? t(_).activeItem : t(_).item) ?? ""}
								       ${t(ue).disabled ? "opacity-50 cursor-not-allowed" : ""}`), J.disabled = t(ue).disabled, xe(J, "aria-expanded", ge), ie(ae, ` ${t(ue).label ?? ""} `), N(he, 0, `w-5 h-5 transition-transform duration-200
									       ${Ce ?? ""}`);
              },
              [
                () => t(f).has(t(ue).id),
                () => t(f).has(t(ue).id) ? "rotate-180" : ""
              ]
            ), o(S, te);
          }, oe = (S) => {
            var te = Z0();
            te.__click = [Y0, E, ue];
            var J = i(te);
            {
              var Y = (he) => {
                var fe = W0(), be = i(fe);
                A(() => ie(be, t(ue).icon)), o(he, fe);
              };
              g(J, (he) => {
                t(ue).icon && he(Y);
              });
            }
            var le = m(J), H = m(le);
            {
              var ae = (he) => {
                var fe = K0(), be = i(fe);
                A(() => ie(be, t(ue).badge)), o(he, fe);
              };
              g(H, (he) => {
                t(ue).badge && he(ae);
              });
            }
            var ce = m(H, 2);
            {
              var se = (he) => {
                var fe = X0();
                o(he, fe);
              };
              g(ce, (he) => {
                t(ue).external && he(se);
              });
            }
            A(() => {
              xe(te, "href", t(ue).href), N(te, 1, `flex items-center px-3 py-2 rounded-md text-base font-medium
							       ${(t(ue).id === h() ? t(_).activeItem : t(_).item) ?? ""}
							       ${t(ue).disabled ? "opacity-50 cursor-not-allowed" : ""}`), xe(te, "aria-current", t(ue).id === h() ? "page" : void 0), ie(le, ` ${t(ue).label ?? ""} `);
            }), o(S, te);
          };
          g($, (S) => {
            t(ue).children ? S(U) : S(oe, !1);
          });
        }
        o(de, ve);
      }), A(() => N(b, 1, `md:hidden border-t ${t(_).nav ?? ""}`)), $e(1, b, () => mt, () => ({ direction: "down", duration: 200 })), o(u, b);
    };
    g(K, (u) => {
      t(M) && u(k);
    });
  }
  tt(O, (u) => z = u, () => z), Ie(O, (u, b) => kt?.(u, b), () => d() ? { blur: "xl", opacity: "medium" } : void 0), A(() => {
    N(O, 1, ne(t(j))), N(P, 1, ne(t(V))), N(w, 1, `p-2 rounded-md ${t(_).mobileButton ?? ""} hover:bg-white/10 transition-colors`), xe(w, "aria-expanded", t(M));
  }), o(r, O), Xe();
}
vt(["click", "keydown"]);
function Ra(r) {
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
      for (const v of Array.from(l.attributes)) {
        const p = v.name.toLowerCase(), y = v.value;
        if (p.startsWith("on")) {
          l.removeAttribute(v.name);
          continue;
        }
        if ((p === "href" || p === "src") && /^\s*javascript:/i.test(y)) {
          l.removeAttribute(v.name);
          continue;
        }
      }
    }
    for (const l of Array.from(n.childNodes)) a(l);
  };
  return a(e.content), e.innerHTML;
}
var ef = /* @__PURE__ */ c('<div class="relative"><!> <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">🔍</button></div>'), tf = /* @__PURE__ */ c('<span class="text-sm text-gray-400"> </span>'), rf = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><!> <!></div> <div class="flex items-center gap-2"><!></div></div>'), af = (r, e) => {
  const a = r.target;
  e(a.checked);
}, nf = /* @__PURE__ */ c('<th><input type="checkbox" class="rounded bg-transparent border-current"/></th>'), of = (r, e, a) => t(e).sortable && a(t(e)), lf = /* @__PURE__ */ c('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), sf = /* @__PURE__ */ c('<th><div class="flex items-center gap-2"><span> </span> <!></div></th>'), df = /* @__PURE__ */ c("<th>Actions</th>"), cf = /* @__PURE__ */ c('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), vf = /* @__PURE__ */ c('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), uf = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, ff = (r) => r.stopPropagation(), bf = /* @__PURE__ */ c('<td><input type="checkbox" class="rounded bg-transparent border-current"/></td>'), gf = (r, e, a, n, l) => e() && t(a).editable && n(t(l), t(a)), mf = (r, e, a) => {
  r.key === "Enter" && e(), r.key === "Escape" && a();
}, hf = /* @__PURE__ */ c('<input class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"/>'), pf = /* @__PURE__ */ c("<td><!></td>"), xf = /* @__PURE__ */ c('<span class="mr-1"> </span>'), _f = /* @__PURE__ */ c("<!> ", 1), wf = /* @__PURE__ */ c('<td><div class="flex items-center gap-1"></div></td>'), yf = /* @__PURE__ */ c("<tr><!><!><!></tr>"), kf = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><span class="text-sm text-gray-400"> </span></div> <div class="flex items-center gap-2"><!> <!> <!></div></div>'), Cf = /* @__PURE__ */ c('<div><!> <div class="overflow-auto"><table class="w-full"><thead><tr><!><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Ef = {
  hash: "svelte-23n5dg",
  code: `
	/* Terminal glow effects */.terminal .data-grid:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function vp(r, e) {
  Ke(e, !0), Qe(r, Ef);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), v = s(e, "loading", 3, !1);
  s(e, "virtualScrolling", 3, !1), s(e, "rowHeight", 3, 60);
  const p = s(e, "maxHeight", 3, "600px"), y = s(e, "sortBy", 3, ""), R = s(e, "sortOrder", 3, "asc"), h = s(e, "filters", 19, () => []), I = s(e, "searchable", 3, !0), L = s(e, "searchPlaceholder", 3, "Search..."), z = s(e, "selectable", 3, !1), M = s(e, "multiSelect", 3, !1), f = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), q = s(e, "editable", 3, !1), ee = s(e, "pagination", 3, !0), _ = s(e, "pageSize", 3, 10), E = s(e, "currentPage", 3, 1), B = s(e, "stickyHeader", 3, !0);
  s(e, "resizableColumns", 3, !1), s(e, "reorderableColumns", 3, !1);
  const F = s(e, "exportable", 3, !1), j = s(e, "actions", 19, () => []), V = s(e, "emptyMessage", 3, "No data available"), O = s(e, "class", 3, ""), P = Mt();
  let Q = /* @__PURE__ */ ye("");
  const G = st(h());
  let D = /* @__PURE__ */ ye(st(y())), T = /* @__PURE__ */ ye(st(R())), w = /* @__PURE__ */ ye(st(f())), x = /* @__PURE__ */ ye(null), C = /* @__PURE__ */ ye("");
  const X = {
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
      container: `bg-black/90 border-${Me.terminal.green}`,
      header: `bg-${Me.terminal.green}/10 border-${Me.terminal.green}`,
      headerCell: `text-${Me.terminal.green} border-${Me.terminal.green}/30`,
      row: `border-${Me.terminal.green}/20 text-${Me.terminal.green}`,
      rowHover: `hover:bg-${Me.terminal.green}/5`,
      rowSelected: `bg-${Me.terminal.green}/10`,
      cell: `text-${Me.terminal.green}/90 border-${Me.terminal.green}/20`,
      toolbar: `bg-${Me.terminal.green}/5 border-${Me.terminal.green}/30`,
      pagination: `bg-${Me.terminal.green}/5 border-${Me.terminal.green}/30`
    }
  }, K = {
    sm: { cell: "px-2 py-1 text-xs", header: "px-2 py-2 text-xs" },
    md: { cell: "px-3 py-2 text-sm", header: "px-3 py-3 text-sm" },
    lg: { cell: "px-4 py-3 text-base", header: "px-4 py-4 text-base" }
  }, k = /* @__PURE__ */ Ee(() => X[l()]), u = /* @__PURE__ */ Ee(() => K[d()]), b = /* @__PURE__ */ Ee(() => () => {
    let ke = n();
    if (t(Q).trim()) {
      const me = t(Q).toLowerCase();
      ke = ke.filter((ze) => a().some((De) => String(ze[De.key] || "").toLowerCase().includes(me)));
    }
    for (const me of G)
      ke = ke.filter((ze) => {
        const De = ze[me.column];
        switch (me.operator) {
          case "equals":
            return De === me.value;
          case "contains":
            return String(De).toLowerCase().includes(String(me.value).toLowerCase());
          case "startsWith":
            return String(De).toLowerCase().startsWith(String(me.value).toLowerCase());
          case "endsWith":
            return String(De).toLowerCase().endsWith(String(me.value).toLowerCase());
          case "gt":
            return Number(De) > Number(me.value);
          case "lt":
            return Number(De) < Number(me.value);
          case "gte":
            return Number(De) >= Number(me.value);
          case "lte":
            return Number(De) <= Number(me.value);
          default:
            return !0;
        }
      });
    return t(D) && a().find((ze) => ze.key === t(D))?.sortable && ke.sort((ze, De) => {
      const He = ze[t(D)], Je = De[t(D)];
      if (He === Je) return 0;
      const We = t(T) === "asc";
      return He < Je ? We ? -1 : 1 : We ? 1 : -1;
    }), ke;
  }), re = /* @__PURE__ */ Ee(() => Math.ceil((e.totalRows ?? t(b).length) / _())), de = /* @__PURE__ */ Ee(() => () => {
    if (!ee()) return t(b);
    const ke = (E() - 1) * _();
    return t(b).slice(ke, ke + _());
  }), ue = /* @__PURE__ */ Ee(() => () => {
    const ke = [], me = Math.min(5, t(re)), ze = Math.max(1, Math.min(t(re) - (me - 1), E() - Math.floor(me / 2)));
    for (let De = 0; De < me; De++) ke.push(ze + De);
    return ke;
  });
  function ve(ke) {
    ke.sortable && (t(D) === ke.key ? W(T, t(T) === "asc" ? "desc" : "asc", !0) : (W(D, ke.key, !0), W(T, "asc")), P("sort", { column: ke.key, order: t(T) }));
  }
  function $() {
    P("search", { query: t(Q) });
  }
  function U(ke, me) {
    P("rowClick", { row: ke, index: me });
  }
  function oe(ke, me) {
    M() ? me ? t(w).add(ke.id) : t(w).delete(ke.id) : W(w, me ? /* @__PURE__ */ new Set([ke.id]) : /* @__PURE__ */ new Set(), !0), W(w, new Set(t(w)), !0), P("rowSelect", { row: ke, selected: me });
  }
  function S(ke) {
    ke ? W(w, new Set(t(de).map((me) => me.id)), !0) : W(w, /* @__PURE__ */ new Set(), !0), P("selectAll", { selected: ke });
  }
  function te(ke, me) {
    !q() || !me.editable || (W(x, { rowId: ke.id, column: me.key }, !0), W(C, String(ke[me.key] || ""), !0));
  }
  function J() {
    if (!t(x)) return;
    const ke = t(de).find((He) => He.id === t(x).rowId);
    if (!ke) return;
    const me = a().find((He) => He.key === t(x).column);
    if (!me) return;
    const ze = ke[me.key];
    let De = t(C);
    switch (me.type) {
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
    if (me.validation) {
      const He = me.validation(De);
      if (He) {
        alert(He);
        return;
      }
    }
    P("cellEdit", { row: ke, column: me.key, oldValue: ze, newValue: De }), W(x, null), W(C, "");
  }
  function Y() {
    W(x, null), W(C, "");
  }
  function le(ke, me, ze) {
    if (ke.render)
      return ke.render(me, ze, ke);
    if (ke.formatter)
      return ke.formatter(me, ze);
    switch (ke.type) {
      case "boolean":
        return me ? "✓" : "✗";
      case "date":
        return me instanceof Date ? me.toLocaleDateString() : String(me || "");
      case "number":
        return typeof me == "number" ? me.toLocaleString() : String(me || "");
      default:
        return String(me || "");
    }
  }
  const H = /* @__PURE__ */ Ee(() => t(de).length > 0 && t(de).every((ke) => t(w).has(ke.id))), ae = /* @__PURE__ */ Ee(() => Z("rounded-lg border overflow-hidden font-mono", t(k).container, O()));
  var ce = Cf(), se = i(ce);
  {
    var he = (ke) => {
      var me = rf(), ze = i(me), De = i(ze);
      {
        var He = (nt) => {
          var Ue = ef(), Re = i(Ue);
          Cd(Re, {
            get placeholder() {
              return L();
            },
            size: "sm",
            get variant() {
              return l();
            },
            class: "w-64",
            onkeydown: (Ve) => {
              Ve.key === "Enter" && $();
            },
            get value() {
              return t(Q);
            },
            set value(Ve) {
              W(Q, Ve, !0);
            }
          });
          var Oe = m(Re, 2);
          Oe.__click = $, o(nt, Ue);
        };
        g(De, (nt) => {
          I() && nt(He);
        });
      }
      var Je = m(De, 2);
      {
        var We = (nt) => {
          var Ue = tf(), Re = i(Ue);
          A(() => ie(Re, `${t(w).size ?? ""} selected`)), o(nt, Ue);
        };
        g(Je, (nt) => {
          t(w).size > 0 && nt(We);
        });
      }
      var at = m(ze, 2), lt = i(at);
      {
        var et = (nt) => {
          er(nt, {
            size: "sm",
            get variant() {
              return l();
            },
            onclick: () => P("export", { format: "csv" }),
            children: (Ue, Re) => {
              var Oe = Ct("📥 Export");
              o(Ue, Oe);
            },
            $$slots: { default: !0 }
          });
        };
        g(lt, (nt) => {
          F() && nt(et);
        });
      }
      A((nt) => N(me, 1, nt), [
        () => ne(Z("px-4 py-3 border-b flex items-center justify-between", t(k).toolbar))
      ]), o(ke, me);
    };
    g(se, (ke) => {
      (I() || F() || j().length > 0) && ke(he);
    });
  }
  var fe = m(se, 2), be = i(fe), ge = i(be), Ce = i(ge), Pe = i(Ce);
  {
    var Be = (ke) => {
      var me = nf(), ze = i(me);
      ze.__change = [af, S], A(
        (De) => {
          N(me, 1, De), Xt(ze, t(H));
        },
        [
          () => ne(Z(t(u).header, t(k).headerCell, "w-12"))
        ]
      ), o(ke, me);
    };
    g(Pe, (ke) => {
      z() && ke(Be);
    });
  }
  var je = m(Pe);
  Ge(je, 17, a, (ke) => ke.key, (ke, me) => {
    var ze = sf();
    ze.__click = [of, me, ve];
    var De = i(ze), He = i(De), Je = i(He), We = m(He, 2);
    {
      var at = (lt) => {
        var et = lf(), nt = i(et), Ue = m(nt, 2);
        A(
          (Re, Oe) => {
            N(nt, 0, Re), N(Ue, 0, Oe);
          },
          [
            () => ne(Z("w-3 h-3 transition-colors", t(D) === t(me).key && t(T) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => ne(Z("w-3 h-3 -mt-1 transition-colors", t(D) === t(me).key && t(T) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(lt, et);
      };
      g(We, (lt) => {
        t(me).sortable && lt(at);
      });
    }
    Ie(ze, (lt, et) => ft?.(lt, et), () => ({ enabled: t(me).sortable, strength: 0.05 })), A(
      (lt) => {
        N(ze, 1, lt), ht(ze, t(me).width ? `width: ${t(me).width}` : void 0), ie(Je, t(me).label);
      },
      [
        () => ne(Z(t(u).header, t(k).headerCell, "font-semibold text-left", t(me).align && `text-${t(me).align}`, t(me).sortable && "cursor-pointer select-none"))
      ]
    ), o(ke, ze);
  });
  var we = m(je);
  {
    var pe = (ke) => {
      var me = df();
      A((ze) => N(me, 1, ze), [
        () => ne(Z(t(u).header, t(k).headerCell, "w-32"))
      ]), o(ke, me);
    };
    g(we, (ke) => {
      j().length > 0 && ke(pe);
    });
  }
  var Te = m(ge), Ne = i(Te);
  {
    var Ae = (ke) => {
      var me = cf(), ze = i(me);
      A(
        (De) => {
          xe(ze, "colspan", a().length + (z() ? 1 : 0) + (j().length > 0 ? 1 : 0)), N(ze, 1, De);
        },
        [
          () => ne(Z(t(u).cell, t(k).cell, "text-center"))
        ]
      ), o(ke, me);
    }, Le = (ke) => {
      var me = Se(), ze = _e(me);
      {
        var De = (Je) => {
          var We = vf(), at = i(We), lt = i(at), et = m(i(lt), 2), nt = i(et);
          A(
            (Ue) => {
              xe(at, "colspan", a().length + (z() ? 1 : 0) + (j().length > 0 ? 1 : 0)), N(at, 1, Ue), ie(nt, V());
            },
            [
              () => ne(Z(t(u).cell, t(k).cell, "text-center text-gray-400"))
            ]
          ), o(Je, We);
        }, He = (Je) => {
          var We = Se(), at = _e(We);
          Ge(at, 19, () => t(de), (lt) => lt.id, (lt, et, nt) => {
            const Ue = /* @__PURE__ */ Ee(() => t(w).has(t(et).id));
            var Re = yf();
            Re.__click = () => U(t(et), t(nt));
            var Oe = i(Re);
            {
              var Ve = (pt) => {
                var ut = bf(), yt = i(ut);
                yt.__change = [uf, oe, et], yt.__click = [ff], A(
                  (Dt) => {
                    N(ut, 1, Dt), Xt(yt, t(Ue));
                  },
                  [
                    () => ne(Z(t(u).cell, t(k).cell))
                  ]
                ), o(pt, ut);
              };
              g(Oe, (pt) => {
                z() && pt(Ve);
              });
            }
            var rt = m(Oe);
            Ge(rt, 17, a, (pt) => pt.key, (pt, ut) => {
              var yt = pf();
              yt.__dblclick = [gf, q, ut, te, et];
              var Dt = i(yt);
              {
                var Wt = (Jt) => {
                  var nr = hf();
                  nr.__keydown = [mf, J, Y], Ot("blur", nr, J), pr(nr, () => t(C), (xr) => W(C, xr)), o(Jt, nr);
                }, aa = (Jt) => {
                  var nr = Se(), xr = _e(nr);
                  Pa(xr, () => Ra(le(t(ut), t(et)[t(ut).key], t(et)))), o(Jt, nr);
                };
                g(Dt, (Jt) => {
                  t(x)?.rowId === t(et).id && t(x)?.column === t(ut).key ? Jt(Wt) : Jt(aa, !1);
                });
              }
              A((Jt) => N(yt, 1, Jt), [
                () => ne(Z(t(u).cell, t(k).cell, t(ut).align && `text-${t(ut).align}`))
              ]), o(pt, yt);
            });
            var gt = m(rt);
            {
              var _t = (pt) => {
                var ut = wf(), yt = i(ut);
                Ge(yt, 21, j, Vr, (Dt, Wt) => {
                  var aa = Se(), Jt = _e(aa);
                  {
                    var nr = (xr) => {
                      {
                        let ni = /* @__PURE__ */ Ee(() => t(Wt).variant || "secondary");
                        er(xr, {
                          size: "sm",
                          get variant() {
                            return t(ni);
                          },
                          onclick: (Na) => {
                            Na.stopPropagation(), P("actionClick", { row: t(et), action: t(Wt).action });
                          },
                          children: (Na, M1) => {
                            var pn = _f(), xn = _e(pn);
                            {
                              var oi = (Oa) => {
                                var _n = xf(), li = i(_n);
                                A(() => ie(li, t(Wt).icon)), o(Oa, _n);
                              };
                              g(xn, (Oa) => {
                                t(Wt).icon && Oa(oi);
                              });
                            }
                            var ii = m(xn);
                            A(() => ie(ii, ` ${t(Wt).label ?? ""}`)), o(Na, pn);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    };
                    g(Jt, (xr) => {
                      (!t(Wt).show || t(Wt).show(t(et))) && xr(nr);
                    });
                  }
                  o(Dt, aa);
                }), A((Dt) => N(ut, 1, Dt), [
                  () => ne(Z(t(u).cell, t(k).cell))
                ]), o(pt, ut);
              };
              g(gt, (pt) => {
                j().length > 0 && pt(_t);
              });
            }
            A((pt) => N(Re, 1, pt), [
              () => ne(Z(t(k).row, t(k).rowHover, t(Ue) && t(k).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), $e(1, Re, () => mt, () => ({ direction: "up", duration: 100, delay: t(nt) * 20 })), o(lt, Re);
          }), o(Je, We);
        };
        g(
          ze,
          (Je) => {
            t(de).length === 0 ? Je(De) : Je(He, !1);
          },
          !0
        );
      }
      o(ke, me);
    };
    g(Ne, (ke) => {
      v() ? ke(Ae) : ke(Le, !1);
    });
  }
  Ie(fe, (ke, me) => kt?.(ke, me), () => ({ blur: "sm", opacity: "subtle" }));
  var qe = m(fe, 2);
  {
    var Fe = (ke) => {
      var me = kf(), ze = i(me), De = i(ze), He = i(De), Je = m(ze, 2), We = i(Je);
      {
        let et = /* @__PURE__ */ Ee(() => E() === 1);
        er(We, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(et);
          },
          onclick: () => P("pageChange", { page: E() - 1 }),
          children: (nt, Ue) => {
            var Re = Ct("Previous");
            o(nt, Re);
          },
          $$slots: { default: !0 }
        });
      }
      var at = m(We, 2);
      Ge(at, 18, () => t(ue), (et) => et, (et, nt) => {
        {
          let Ue = /* @__PURE__ */ Ee(() => nt === E() ? "primary" : "secondary");
          er(et, {
            size: "sm",
            get variant() {
              return t(Ue);
            },
            onclick: () => P("pageChange", { page: nt }),
            children: (Re, Oe) => {
              var Ve = Ct();
              A(() => ie(Ve, nt)), o(Re, Ve);
            },
            $$slots: { default: !0 }
          });
        }
      });
      var lt = m(at, 2);
      {
        let et = /* @__PURE__ */ Ee(() => E() === t(re));
        er(lt, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(et);
          },
          onclick: () => P("pageChange", { page: E() + 1 }),
          children: (nt, Ue) => {
            var Re = Ct("Next");
            o(nt, Re);
          },
          $$slots: { default: !0 }
        });
      }
      A(
        (et, nt) => {
          N(me, 1, et), ie(He, `Showing ${(E() - 1) * _() + 1} to ${nt ?? ""} of ${e.totalRows ?? t(b).length ?? ""} entries`);
        },
        [
          () => ne(Z("px-4 py-3 border-t flex items-center justify-between", t(k).pagination)),
          () => Math.min(E() * _(), e.totalRows ?? t(b).length)
        ]
      ), o(ke, me);
    };
    g(qe, (ke) => {
      ee() && t(re) > 1 && ke(Fe);
    });
  }
  A(
    (ke) => {
      N(ce, 1, ne(t(ae))), ht(fe, p() ? `max-height: ${p()}` : void 0), N(ge, 1, ke);
    },
    [
      () => ne(Z(t(k).header, B() && "sticky top-0 z-10"))
    ]
  ), o(r, ce), Xe();
}
vt(["click", "change", "dblclick", "keydown"]);
var Sf = /* @__PURE__ */ c('<th class="w-8 px-2 py-2 align-middle svelte-qp1ncx"><input type="checkbox" aria-label="Select page rows"/></th>'), Tf = (r, e, a) => e(t(a)), Mf = /* @__PURE__ */ c('<span class="inline-block ml-1 text-xs opacity-70"> </span>'), Af = /* @__PURE__ */ c('<span class="inline-block ml-1 text-xs opacity-30" aria-hidden="true">↕</span>'), zf = /* @__PURE__ */ c("<th><span> </span> <!></th>"), If = /* @__PURE__ */ c('<tr><td class="px-4 py-6 text-center text-white/60 svelte-qp1ncx"> </td></tr>'), Pf = (r, e, a) => e(t(a).id), Lf = /* @__PURE__ */ c('<td class="px-2 py-2 text-center svelte-qp1ncx"><input type="checkbox"/></td>'), Df = /* @__PURE__ */ c("<td> </td>"), jf = /* @__PURE__ */ c('<tr class="border-t border-white/5 text-white/90 hover:bg-white/5 transition-colors"><!><!></tr>'), Rf = (r, e, a) => e(t(a) - 1), Nf = (r, e, a) => e(t(a) + 1), Of = /* @__PURE__ */ c('<div class="flex items-center justify-between mt-3 text-xs text-white/70 gap-4 flex-wrap"><div> </div> <div class="flex items-center gap-2"><button class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">Prev</button> <button class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">Next</button></div></div>'), qf = /* @__PURE__ */ c('<div><div class="overflow-x-auto border border-white/10 rounded-lg"><table class="w-full text-sm border-collapse svelte-qp1ncx"><thead class="bg-white/5 text-white/80"><tr><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Bf = {
  hash: "svelte-qp1ncx",
  code: `table.svelte-qp1ncx {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;}th.svelte-qp1ncx,
    td.svelte-qp1ncx {vertical-align:top;}`
};
function up(r, e) {
  Ke(e, !0), Qe(r, Bf);
  let a = s(e, "selectable", 3, !1), n = s(e, "selectedRows", 31, () => st([])), l = s(e, "pageSize", 3, 10), d = s(e, "showPagination", 3, !1), v = s(e, "class", 3, ""), p = s(e, "emptyMessage", 3, "No data"), y = /* @__PURE__ */ dt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "columns",
    "data",
    "selectable",
    "selectedRows",
    "pageSize",
    "showPagination",
    "class",
    "emptyMessage"
  ]);
  const R = Mt();
  let h = /* @__PURE__ */ ye(null), I = /* @__PURE__ */ ye(1);
  function L(u) {
    u.sortable && (!t(h) || t(h).key !== u.key ? W(h, { key: u.key, direction: "asc" }, !0) : W(
      h,
      t(h).direction === "asc" ? { key: u.key, direction: "desc" } : null,
      // third click clears sort
      !0
    ), W(I, 1), R("sort", t(h)));
  }
  function z(u) {
    switch (u) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  }
  const M = /* @__PURE__ */ Ee(() => () => {
    if (!t(h)) return e.data;
    const { key: u, direction: b } = t(h), re = b === "asc" ? 1 : -1;
    return [...e.data].sort((de, ue) => {
      const ve = de[u], $ = ue[u];
      return ve == null && $ == null ? 0 : ve == null ? -1 * re : $ == null ? 1 * re : ve < $ ? -1 * re : ve > $ ? 1 * re : 0;
    });
  }), f = /* @__PURE__ */ Ee(() => () => d() ? Math.max(1, Math.ceil(t(M)().length / l())) : 1), q = /* @__PURE__ */ Ee(() => () => {
    if (!d()) return t(M)();
    const u = (t(I) - 1) * l();
    return t(M)().slice(u, u + l());
  });
  function ee(u) {
    const b = Math.min(Math.max(1, u), t(f)());
    b !== t(I) && (W(I, b, !0), R("pageChange", { page: t(I) }));
  }
  function _() {
    if (!a()) return !1;
    const u = t(q)();
    return u.length === 0 ? !1 : u.every((b) => n().includes(b.id));
  }
  function E() {
    if (!a()) return;
    const u = t(q)();
    if (u.length !== 0) {
      if (_())
        n(n().filter((b) => !u.some((re) => re.id === b)));
      else {
        const b = u.map((re) => re.id).filter((re) => !n().includes(re));
        n([...n(), ...b]);
      }
      R("selectionChange", { selected: n() });
    }
  }
  function B(u) {
    a() && (n(n().includes(u) ? n().filter((b) => b !== u) : [...n(), u]), R("selectionChange", { selected: n() }));
  }
  function F(u) {
    if (u.sortable)
      return !t(h) || t(h).key !== u.key ? "none" : t(h)?.direction === "asc" ? "ascending" : "descending";
  }
  bt(() => {
    e.columns.length, n().length, t(q)().length, t(M)().length, t(f)(), p(), v();
  });
  var j = qf();
  Ze(j, () => ({ class: "w-full " + v(), ...y }));
  var V = i(j), O = i(V), P = i(O), Q = i(P), G = i(Q);
  {
    var D = (u) => {
      var b = Sf(), re = i(b);
      re.__click = E, A((de) => Xt(re, de), [_]), o(u, b);
    };
    g(G, (u) => {
      a() && u(D);
    });
  }
  var T = m(G);
  Ge(T, 17, () => e.columns, (u) => u.key, (u, b) => {
    var re = zf();
    re.__click = [Tf, L, b];
    var de = i(re), ue = i(de), ve = m(de, 2);
    {
      var $ = (U) => {
        var oe = Se(), S = _e(oe);
        {
          var te = (Y) => {
            var le = Mf(), H = i(le);
            A(() => ie(H, t(h).direction === "asc" ? "▲" : "▼")), o(Y, le);
          }, J = (Y) => {
            var le = Af();
            o(Y, le);
          };
          g(S, (Y) => {
            t(h) && t(h).key === t(b).key ? Y(te) : Y(J, !1);
          });
        }
        o(U, oe);
      };
      g(ve, (U) => {
        t(b).sortable && U($);
      });
    }
    A(
      (U, oe) => {
        N(re, 1, U, "svelte-qp1ncx"), ht(re, t(b).width ? `width:${t(b).width}` : void 0), xe(re, "role", t(b).sortable ? "columnheader" : void 0), xe(re, "aria-sort", oe), ie(ue, t(b).label);
      },
      [
        () => "px-3 py-2 font-semibold tracking-wide select-none " + z(t(b).align) + (t(b).sortable ? " cursor-pointer hover:bg-white/10" : ""),
        () => F(t(b))
      ]
    ), o(u, re);
  });
  var w = m(P), x = i(w);
  {
    var C = (u) => {
      var b = If(), re = i(b), de = i(re);
      A(() => {
        xe(re, "colspan", e.columns.length + (a() ? 1 : 0)), ie(de, p());
      }), o(u, b);
    }, X = (u) => {
      var b = Se(), re = _e(b);
      Ge(re, 17, () => t(q)(), (de) => de.id, (de, ue) => {
        var ve = jf(), $ = i(ve);
        {
          var U = (S) => {
            var te = Lf(), J = i(te);
            J.__click = [Pf, B, ue], A(
              (Y) => {
                xe(J, "aria-label", `Select row ${t(ue).id}`), Xt(J, Y);
              },
              [() => n().includes(t(ue).id)]
            ), o(S, te);
          };
          g($, (S) => {
            a() && S(U);
          });
        }
        var oe = m($);
        Ge(oe, 17, () => e.columns, (S) => S.key, (S, te) => {
          var J = Df(), Y = i(J);
          A(
            (le) => {
              N(J, 1, le, "svelte-qp1ncx"), ie(Y, t(ue)[t(te).key]);
            },
            [
              () => "px-3 py-2 align-top " + z(t(te).align)
            ]
          ), o(S, J);
        }), o(de, ve);
      }), o(u, b);
    };
    g(x, (u) => {
      t(q)().length === 0 ? u(C) : u(X, !1);
    });
  }
  var K = m(V, 2);
  {
    var k = (u) => {
      var b = Of(), re = i(b), de = i(re), ue = m(re, 2), ve = i(ue);
      ve.__click = [Rf, ee, I];
      var $ = m(ve, 2);
      $.__click = [Nf, ee, I], A(
        (U, oe) => {
          ie(de, `Page ${t(I) ?? ""} of ${U ?? ""}`), ve.disabled = t(I) === 1, $.disabled = oe;
        },
        [
          () => t(f)(),
          () => t(I) === t(f)()
        ]
      ), o(u, b);
    };
    g(K, (u) => {
      d() && t(f)() > 1 && u(k);
    });
  }
  o(r, j), Xe();
}
vt(["click"]);
var Ff = (r, e) => {
  const a = r.target;
  e(a.checked);
}, Hf = /* @__PURE__ */ c('<div><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" aria-label="Select all items" class="rounded bg-transparent border-current"/> <span class="text-sm font-medium"> </span></label></div>'), Vf = /* @__PURE__ */ c('<div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div>'), Gf = /* @__PURE__ */ c('<div class="space-y-3"><div class="flex items-start gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div> <div></div></div></div></div>'), Uf = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div></div>'), Yf = /* @__PURE__ */ c("<div><!></div>"), Wf = /* @__PURE__ */ c('<div><div class="text-4xl mb-3"> </div> <p class="text-lg font-medium"> </p></div>'), Kf = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Xf = (r) => r.stopPropagation(), Zf = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current"/>'), Qf = /* @__PURE__ */ c("<img/>"), Jf = /* @__PURE__ */ c('<div><span class="text-2xl"> </span></div>'), $f = /* @__PURE__ */ c("<span> </span>"), eb = /* @__PURE__ */ c("<p> </p>"), tb = (r, e, a, n) => e(t(a), t(n).action, r), rb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), ab = /* @__PURE__ */ c("<button><!> </button>"), nb = /* @__PURE__ */ c('<div class="flex items-center gap-2"></div>'), ob = /* @__PURE__ */ c('<div class="flex items-center gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!></div>'), ib = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, lb = (r) => r.stopPropagation(), sb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), db = /* @__PURE__ */ c("<img/>"), cb = /* @__PURE__ */ c('<div><span class="text-2xl"> </span></div>'), vb = /* @__PURE__ */ c("<span> </span>"), ub = /* @__PURE__ */ c("<p> </p>"), fb = /* @__PURE__ */ c("<p> </p>"), bb = /* @__PURE__ */ c("<span> </span>"), gb = /* @__PURE__ */ c('<div class="flex flex-wrap gap-3 mt-2"></div>'), mb = (r, e, a, n) => e(t(a), t(n).action, r), hb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), pb = /* @__PURE__ */ c("<button><!> </button>"), xb = /* @__PURE__ */ c('<div class="flex flex-col gap-2"></div>'), _b = /* @__PURE__ */ c('<div class="space-y-3"><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h3> </h3> <!></div> <!> <!> <!></div> <!></div></div>'), wb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, yb = (r) => r.stopPropagation(), kb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), Cb = /* @__PURE__ */ c("<img/>"), Eb = /* @__PURE__ */ c('<div><span class="text-3xl"> </span></div>'), Sb = /* @__PURE__ */ c("<span> </span>"), Tb = (r, e, a, n) => e(t(a), t(n).action, r), Mb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), Ab = /* @__PURE__ */ c("<button><!> </button>"), zb = /* @__PURE__ */ c('<div class="flex items-center gap-2"></div>'), Ib = /* @__PURE__ */ c("<p> </p>"), Pb = /* @__PURE__ */ c("<p> </p>"), Lb = /* @__PURE__ */ c("<span> </span>"), Db = /* @__PURE__ */ c('<div class="flex flex-wrap gap-3"></div>'), jb = /* @__PURE__ */ c('<div><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!> <!> <!></div></div></div>'), Rb = /* @__PURE__ */ c("<div><!></div>"), Nb = /* @__PURE__ */ c('<div role="list" aria-label="Item list"><!> <div class="divide-y divide-gray-600"><!></div></div>');
const Ob = {
  hash: "svelte-9ixerq",
  code: `
    /* Terminal glow effects */.terminal .list-item:hover {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 15px var(--terminal-green-glow);}`
};
function fp(r, e) {
  Ke(e, !0), Qe(r, Ob);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "layout", 3, "simple"), v = s(e, "selectable", 3, !1), p = s(e, "multiSelect", 3, !1), y = s(e, "selectedItems", 19, () => /* @__PURE__ */ new Set()), R = s(e, "loading", 3, !1), h = s(e, "loadingCount", 3, 3), I = s(e, "emptyMessage", 3, "No items found"), L = s(e, "emptyIcon", 3, "📋");
  s(e, "dividers", 3, !0);
  const z = s(e, "hover", 3, !0);
  s(e, "animated", 3, !0);
  const M = s(e, "class", 3, ""), f = Mt();
  let q = /* @__PURE__ */ ye(st(y()));
  const ee = {
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
      item: `bg-black/60 border-${Me.terminal.green}/30 text-${Me.terminal.green}`,
      itemHover: `hover:bg-${Me.terminal.green}/5`,
      itemSelected: `bg-${Me.terminal.green}/10 border-${Me.terminal.green}`,
      title: `text-${Me.terminal.green}`,
      subtitle: `text-${Me.terminal.green}/80`,
      description: `text-${Me.terminal.green}/60`,
      metadata: `text-${Me.terminal.green}/50`,
      badge: `bg-${Me.terminal.green} text-black`,
      skeleton: `bg-${Me.terminal.green}/10`
    }
  }, _ = {
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
  }, E = /* @__PURE__ */ Ee(() => ee[n()]), B = /* @__PURE__ */ Ee(() => _[l()]);
  function F(u, b) {
    u.disabled || (v() && j(u, !t(q).has(u.id)), f("itemClick", { item: u, index: b }));
  }
  function j(u, b) {
    u.disabled || (p() ? b ? t(q).add(u.id) : t(q).delete(u.id) : b ? W(q, /* @__PURE__ */ new Set([u.id]), !0) : W(q, /* @__PURE__ */ new Set(), !0), W(q, new Set(t(q)), !0), f("itemSelect", { item: u, selected: b }));
  }
  function V(u, b, re) {
    re.stopPropagation(), f("actionClick", { item: u, action: b });
  }
  function O(u) {
    u ? W(q, new Set(a().filter((b) => !b.disabled).map((b) => b.id)), !0) : W(q, /* @__PURE__ */ new Set(), !0), f("selectAll", { selected: u });
  }
  const P = /* @__PURE__ */ Ee(() => a().length > 0 && a().filter((u) => !u.disabled).every((u) => t(q).has(u.id))), Q = /* @__PURE__ */ Ee(() => Z("rounded-lg overflow-hidden font-mono", t(E).container, t(B).container, M()));
  function G(u = "secondary") {
    const b = "px-2 py-1 rounded text-xs font-medium transition-colors";
    switch (u) {
      case "primary":
        return `${b} bg-blue-600 text-white hover:bg-blue-700`;
      case "danger":
        return `${b} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${b} bg-gray-600 text-white hover:bg-gray-700`;
    }
  }
  const D = /* @__PURE__ */ Ee(() => Array.from({ length: h() }, (u, b) => ({ id: `skeleton-${b}` })));
  var T = Nb(), w = i(T);
  {
    var x = (u) => {
      var b = Hf(), re = i(b), de = i(re);
      de.__change = [Ff, O];
      var ue = m(de, 2), ve = i(ue);
      A(
        ($) => {
          N(b, 1, `px-4 py-3 border-b ${t(E).item ?? ""} border-gray-600`), Xt(de, t(P)), ie(ve, `${t(q).size ?? ""} of ${$ ?? ""} selected`);
        },
        [() => a().filter(($) => !$.disabled).length]
      ), o(u, b);
    };
    g(w, (u) => {
      v() && p() && a().length > 0 && u(x);
    });
  }
  var C = m(w, 2), X = i(C);
  {
    var K = (u) => {
      var b = Se(), re = _e(b);
      Ge(re, 19, () => t(D), (de) => de.id, (de, ue) => {
        var ve = Yf(), $ = i(ve);
        {
          var U = (S) => {
            var te = Vf(), J = i(te), Y = m(J, 2), le = i(Y), H = m(le, 2);
            A(
              (ae, ce, se) => {
                N(J, 1, ae), N(le, 1, ce), N(H, 1, se);
              },
              [
                () => ne(Z("rounded-full", t(B).avatar, t(E).skeleton)),
                () => ne(Z("h-4 rounded", t(E).skeleton, "w-3/4")),
                () => ne(Z("h-3 rounded", t(E).skeleton, "w-1/2"))
              ]
            ), o(S, te);
          }, oe = (S) => {
            var te = Se(), J = _e(te);
            {
              var Y = (H) => {
                var ae = Gf(), ce = i(ae), se = i(ce), he = m(se, 2), fe = i(he), be = m(fe, 2), ge = m(be, 2);
                A(
                  (Ce, Pe, Be, je) => {
                    N(se, 1, Ce), N(fe, 1, Pe), N(be, 1, Be), N(ge, 1, je);
                  },
                  [
                    () => ne(Z("rounded-full", t(B).avatar, t(E).skeleton)),
                    () => ne(Z("h-4 rounded", t(E).skeleton, "w-2/3")),
                    () => ne(Z("h-3 rounded", t(E).skeleton, "w-1/2")),
                    () => ne(Z("h-3 rounded", t(E).skeleton, "w-full"))
                  ]
                ), o(H, ae);
              }, le = (H) => {
                var ae = Uf(), ce = i(ae), se = i(ce), he = m(se, 2), fe = i(he), be = m(fe, 2);
                A(
                  (ge, Ce, Pe) => {
                    N(ae, 1, `border rounded-lg p-4 space-y-3 ${t(E).skeleton ?? ""}`), N(se, 1, ge), N(fe, 1, Ce), N(be, 1, Pe);
                  },
                  [
                    () => ne(Z("rounded-full", t(B).avatar, t(E).skeleton)),
                    () => ne(Z("h-4 rounded", t(E).skeleton, "w-3/4")),
                    () => ne(Z("h-3 rounded", t(E).skeleton, "w-1/2"))
                  ]
                ), o(H, ae);
              };
              g(
                J,
                (H) => {
                  d() === "detailed" ? H(Y) : H(le, !1);
                },
                !0
              );
            }
            o(S, te);
          };
          g($, (S) => {
            d() === "simple" ? S(U) : S(oe, !1);
          });
        }
        A((S) => N(ve, 1, S), [
          () => ne(Z(t(B).item, t(E).item, "animate-pulse"))
        ]), o(de, ve);
      }), o(u, b);
    }, k = (u) => {
      var b = Se(), re = _e(b);
      {
        var de = (ve) => {
          var $ = Wf(), U = i($), oe = i(U), S = m(U, 2), te = i(S);
          A(() => {
            N($, 1, `py-12 text-center ${t(E).description ?? ""}`), ie(oe, L()), ie(te, I());
          }), o(ve, $);
        }, ue = (ve) => {
          var $ = Se(), U = _e($);
          Ge(U, 19, a, (oe) => oe.id, (oe, S, te) => {
            const J = /* @__PURE__ */ Ee(() => t(q).has(t(S).id));
            var Y = Rb(), le = () => F(t(S), t(te)), H = (he) => (he.key === "Enter" || he.key === " ") && F(t(S), t(te));
            Ze(
              Y,
              (he) => ({
                class: he,
                onclick: le,
                onkeydown: H,
                role: v() ? "option" : "listitem",
                ...v() && !t(S).disabled ? { tabindex: 0 } : {},
                "aria-selected": v() ? t(J) : void 0,
                "aria-label": t(S).title,
                "aria-describedby": t(S).description ? `item-${t(S).id}-description` : void 0
              }),
              [
                () => Z(t(B).item, t(E).item, z() && !t(S).disabled && t(E).itemHover, t(J) && t(E).itemSelected, t(S).disabled && "opacity-50", !t(S).disabled && "cursor-pointer", "transition-all duration-200")
              ]
            );
            var ae = i(Y);
            {
              var ce = (he) => {
                var fe = ob(), be = i(fe);
                {
                  var ge = (me) => {
                    var ze = Zf();
                    ze.__change = [Kf, j, S], ze.__click = [Xf], A(() => {
                      Xt(ze, t(J)), ze.disabled = t(S).disabled;
                    }), o(me, ze);
                  };
                  g(be, (me) => {
                    v() && me(ge);
                  });
                }
                var Ce = m(be, 2);
                {
                  var Pe = (me) => {
                    var ze = Qf();
                    A(
                      (De) => {
                        xe(ze, "src", t(S).avatar), xe(ze, "alt", t(S).title), N(ze, 1, De);
                      },
                      [
                        () => ne(Z("rounded-full object-cover", t(B).avatar))
                      ]
                    ), o(me, ze);
                  }, Be = (me) => {
                    var ze = Se(), De = _e(ze);
                    {
                      var He = (Je) => {
                        var We = Jf(), at = i(We), lt = i(at);
                        A(
                          (et) => {
                            N(We, 1, et), ie(lt, t(S).icon);
                          },
                          [
                            () => ne(Z("flex items-center justify-center", t(B).icon))
                          ]
                        ), o(Je, We);
                      };
                      g(
                        De,
                        (Je) => {
                          t(S).icon && Je(He);
                        },
                        !0
                      );
                    }
                    o(me, ze);
                  };
                  g(Ce, (me) => {
                    t(S).avatar ? me(Pe) : me(Be, !1);
                  });
                }
                var je = m(Ce, 2), we = i(je), pe = i(we), Te = i(pe), Ne = m(pe, 2);
                {
                  var Ae = (me) => {
                    var ze = $f(), De = i(ze);
                    A(
                      (He) => {
                        N(ze, 1, He), ie(De, t(S).badge);
                      },
                      [
                        () => ne(Z("rounded-full font-medium", t(B).badge, t(E).badge))
                      ]
                    ), o(me, ze);
                  };
                  g(Ne, (me) => {
                    t(S).badge && me(Ae);
                  });
                }
                var Le = m(we, 2);
                {
                  var qe = (me) => {
                    var ze = eb(), De = i(ze);
                    A(
                      (He) => {
                        N(ze, 1, He), ie(De, t(S).subtitle);
                      },
                      [
                        () => ne(Z("text-sm truncate", t(E).subtitle))
                      ]
                    ), o(me, ze);
                  };
                  g(Le, (me) => {
                    t(S).subtitle && me(qe);
                  });
                }
                var Fe = m(je, 2);
                {
                  var ke = (me) => {
                    var ze = nb();
                    Ge(ze, 21, () => t(S).actions, (De) => De.action, (De, He) => {
                      var Je = ab();
                      Je.__click = [tb, V, S, He];
                      var We = i(Je);
                      {
                        var at = (et) => {
                          var nt = rb(), Ue = i(nt);
                          A(() => ie(Ue, t(He).icon)), o(et, nt);
                        };
                        g(We, (et) => {
                          t(He).icon && et(at);
                        });
                      }
                      var lt = m(We);
                      A(
                        (et) => {
                          N(Je, 1, et), ie(lt, ` ${t(He).label ?? ""}`);
                        },
                        [() => ne(G(t(He).variant))]
                      ), o(De, Je);
                    }), o(me, ze);
                  };
                  g(Fe, (me) => {
                    t(S).actions && t(S).actions.length > 0 && me(ke);
                  });
                }
                A(
                  (me) => {
                    N(pe, 1, me), ie(Te, t(S).title);
                  },
                  [
                    () => ne(Z("font-medium truncate", t(E).title))
                  ]
                ), o(he, fe);
              }, se = (he) => {
                var fe = Se(), be = _e(fe);
                {
                  var ge = (Pe) => {
                    var Be = _b(), je = i(Be), we = i(je);
                    {
                      var pe = (Ue) => {
                        var Re = sb();
                        Re.__change = [ib, j, S], Re.__click = [lb], A(() => {
                          Xt(Re, t(J)), Re.disabled = t(S).disabled;
                        }), o(Ue, Re);
                      };
                      g(we, (Ue) => {
                        v() && Ue(pe);
                      });
                    }
                    var Te = m(we, 2);
                    {
                      var Ne = (Ue) => {
                        var Re = db();
                        A(
                          (Oe) => {
                            xe(Re, "src", t(S).avatar), xe(Re, "alt", t(S).title), N(Re, 1, Oe);
                          },
                          [
                            () => ne(Z("rounded-full object-cover", t(B).avatar))
                          ]
                        ), o(Ue, Re);
                      }, Ae = (Ue) => {
                        var Re = Se(), Oe = _e(Re);
                        {
                          var Ve = (rt) => {
                            var gt = cb(), _t = i(gt), pt = i(_t);
                            A(
                              (ut) => {
                                N(gt, 1, ut), ie(pt, t(S).icon);
                              },
                              [
                                () => ne(Z("flex items-center justify-center", t(B).icon))
                              ]
                            ), o(rt, gt);
                          };
                          g(
                            Oe,
                            (rt) => {
                              t(S).icon && rt(Ve);
                            },
                            !0
                          );
                        }
                        o(Ue, Re);
                      };
                      g(Te, (Ue) => {
                        t(S).avatar ? Ue(Ne) : Ue(Ae, !1);
                      });
                    }
                    var Le = m(Te, 2), qe = i(Le), Fe = i(qe), ke = i(Fe), me = m(Fe, 2);
                    {
                      var ze = (Ue) => {
                        var Re = vb(), Oe = i(Re);
                        A(
                          (Ve) => {
                            N(Re, 1, Ve), ie(Oe, t(S).badge);
                          },
                          [
                            () => ne(Z("rounded-full font-medium", t(B).badge, t(E).badge))
                          ]
                        ), o(Ue, Re);
                      };
                      g(me, (Ue) => {
                        t(S).badge && Ue(ze);
                      });
                    }
                    var De = m(qe, 2);
                    {
                      var He = (Ue) => {
                        var Re = ub(), Oe = i(Re);
                        A(
                          (Ve) => {
                            N(Re, 1, Ve), ie(Oe, t(S).subtitle);
                          },
                          [
                            () => ne(Z("text-sm mb-2", t(E).subtitle))
                          ]
                        ), o(Ue, Re);
                      };
                      g(De, (Ue) => {
                        t(S).subtitle && Ue(He);
                      });
                    }
                    var Je = m(De, 2);
                    {
                      var We = (Ue) => {
                        var Re = fb(), Oe = i(Re);
                        A(
                          (Ve) => {
                            N(Re, 1, Ve), ie(Oe, t(S).description);
                          },
                          [
                            () => ne(Z("text-sm leading-relaxed", t(E).description))
                          ]
                        ), o(Ue, Re);
                      };
                      g(Je, (Ue) => {
                        t(S).description && Ue(We);
                      });
                    }
                    var at = m(Je, 2);
                    {
                      var lt = (Ue) => {
                        var Re = gb();
                        Ge(Re, 21, () => Object.entries(t(S).metadata), ([Oe, Ve]) => Oe, (Oe, Ve) => {
                          var rt = /* @__PURE__ */ Ee(() => Kr(t(Ve), 2));
                          let gt = () => t(rt)[0], _t = () => t(rt)[1];
                          var pt = bb(), ut = i(pt);
                          A(
                            (yt) => {
                              N(pt, 1, yt), ie(ut, `${gt() ?? ""}: ${_t() ?? ""}`);
                            },
                            [() => ne(Z("text-xs", t(E).metadata))]
                          ), o(Oe, pt);
                        }), o(Ue, Re);
                      };
                      g(at, (Ue) => {
                        t(S).metadata && Ue(lt);
                      });
                    }
                    var et = m(Le, 2);
                    {
                      var nt = (Ue) => {
                        var Re = xb();
                        Ge(Re, 21, () => t(S).actions, (Oe) => Oe.action, (Oe, Ve) => {
                          var rt = pb();
                          rt.__click = [mb, V, S, Ve];
                          var gt = i(rt);
                          {
                            var _t = (ut) => {
                              var yt = hb(), Dt = i(yt);
                              A(() => ie(Dt, t(Ve).icon)), o(ut, yt);
                            };
                            g(gt, (ut) => {
                              t(Ve).icon && ut(_t);
                            });
                          }
                          var pt = m(gt);
                          A(
                            (ut) => {
                              N(rt, 1, ut), ie(pt, ` ${t(Ve).label ?? ""}`);
                            },
                            [() => ne(G(t(Ve).variant))]
                          ), o(Oe, rt);
                        }), o(Ue, Re);
                      };
                      g(et, (Ue) => {
                        t(S).actions && t(S).actions.length > 0 && Ue(nt);
                      });
                    }
                    A(
                      (Ue) => {
                        N(Fe, 1, Ue), ie(ke, t(S).title);
                      },
                      [
                        () => ne(Z("font-semibold", t(E).title))
                      ]
                    ), o(Pe, Be);
                  }, Ce = (Pe) => {
                    var Be = jb(), je = i(Be), we = i(je);
                    {
                      var pe = (Re) => {
                        var Oe = kb();
                        Oe.__change = [wb, j, S], Oe.__click = [yb], A(() => {
                          Xt(Oe, t(J)), Oe.disabled = t(S).disabled;
                        }), o(Re, Oe);
                      };
                      g(we, (Re) => {
                        v() && Re(pe);
                      });
                    }
                    var Te = m(we, 2);
                    {
                      var Ne = (Re) => {
                        var Oe = Cb();
                        A(
                          (Ve) => {
                            xe(Oe, "src", t(S).avatar), xe(Oe, "alt", t(S).title), N(Oe, 1, Ve);
                          },
                          [
                            () => ne(Z("rounded-full object-cover", t(B).avatar))
                          ]
                        ), o(Re, Oe);
                      }, Ae = (Re) => {
                        var Oe = Se(), Ve = _e(Oe);
                        {
                          var rt = (gt) => {
                            var _t = Eb(), pt = i(_t), ut = i(pt);
                            A(
                              (yt) => {
                                N(_t, 1, yt), ie(ut, t(S).icon);
                              },
                              [
                                () => ne(Z("flex items-center justify-center", t(B).icon))
                              ]
                            ), o(gt, _t);
                          };
                          g(
                            Ve,
                            (gt) => {
                              t(S).icon && gt(rt);
                            },
                            !0
                          );
                        }
                        o(Re, Oe);
                      };
                      g(Te, (Re) => {
                        t(S).avatar ? Re(Ne) : Re(Ae, !1);
                      });
                    }
                    var Le = m(Te, 2), qe = i(Le), Fe = i(qe), ke = i(Fe), me = i(ke), ze = m(ke, 2);
                    {
                      var De = (Re) => {
                        var Oe = Sb(), Ve = i(Oe);
                        A(
                          (rt) => {
                            N(Oe, 1, rt), ie(Ve, t(S).badge);
                          },
                          [
                            () => ne(Z("rounded-full font-medium", t(B).badge, t(E).badge))
                          ]
                        ), o(Re, Oe);
                      };
                      g(ze, (Re) => {
                        t(S).badge && Re(De);
                      });
                    }
                    var He = m(Fe, 2);
                    {
                      var Je = (Re) => {
                        var Oe = zb();
                        Ge(Oe, 21, () => t(S).actions, (Ve) => Ve.action, (Ve, rt) => {
                          var gt = Ab();
                          gt.__click = [Tb, V, S, rt];
                          var _t = i(gt);
                          {
                            var pt = (yt) => {
                              var Dt = Mb(), Wt = i(Dt);
                              A(() => ie(Wt, t(rt).icon)), o(yt, Dt);
                            };
                            g(_t, (yt) => {
                              t(rt).icon && yt(pt);
                            });
                          }
                          var ut = m(_t);
                          A(
                            (yt) => {
                              N(gt, 1, yt), ie(ut, ` ${t(rt).label ?? ""}`);
                            },
                            [() => ne(G(t(rt).variant))]
                          ), o(Ve, gt);
                        }), o(Re, Oe);
                      };
                      g(He, (Re) => {
                        t(S).actions && t(S).actions.length > 0 && Re(Je);
                      });
                    }
                    var We = m(qe, 2);
                    {
                      var at = (Re) => {
                        var Oe = Ib(), Ve = i(Oe);
                        A(
                          (rt) => {
                            N(Oe, 1, rt), ie(Ve, t(S).subtitle);
                          },
                          [
                            () => ne(Z("text-sm mb-2", t(E).subtitle))
                          ]
                        ), o(Re, Oe);
                      };
                      g(We, (Re) => {
                        t(S).subtitle && Re(at);
                      });
                    }
                    var lt = m(We, 2);
                    {
                      var et = (Re) => {
                        var Oe = Pb(), Ve = i(Oe);
                        A(
                          (rt) => {
                            N(Oe, 1, rt), ie(Ve, t(S).description);
                          },
                          [
                            () => ne(Z("text-sm leading-relaxed mb-3", t(E).description))
                          ]
                        ), o(Re, Oe);
                      };
                      g(lt, (Re) => {
                        t(S).description && Re(et);
                      });
                    }
                    var nt = m(lt, 2);
                    {
                      var Ue = (Re) => {
                        var Oe = Db();
                        Ge(Oe, 21, () => Object.entries(t(S).metadata), ([Ve, rt]) => Ve, (Ve, rt) => {
                          var gt = /* @__PURE__ */ Ee(() => Kr(t(rt), 2));
                          let _t = () => t(gt)[0], pt = () => t(gt)[1];
                          var ut = Lb(), yt = i(ut);
                          A(
                            (Dt) => {
                              N(ut, 1, Dt), ie(yt, `${_t() ?? ""}: ${pt() ?? ""}`);
                            },
                            [
                              () => ne(Z("text-xs px-2 py-1 rounded-full", t(E).skeleton, t(E).metadata))
                            ]
                          ), o(Ve, ut);
                        }), o(Re, Oe);
                      };
                      g(nt, (Re) => {
                        t(S).metadata && Re(Ue);
                      });
                    }
                    A(
                      (Re) => {
                        N(Be, 1, `border rounded-lg p-4 ${t(E).item ?? ""}`), N(ke, 1, Re), ie(me, t(S).title);
                      },
                      [
                        () => ne(Z("font-semibold", t(E).title))
                      ]
                    ), o(Pe, Be);
                  };
                  g(
                    be,
                    (Pe) => {
                      d() === "detailed" ? Pe(ge) : Pe(Ce, !1);
                    },
                    !0
                  );
                }
                o(he, fe);
              };
              g(ae, (he) => {
                d() === "simple" ? he(ce) : he(se, !1);
              });
            }
            o(oe, Y);
          }), o(ve, $);
        };
        g(
          re,
          (ve) => {
            a().length === 0 ? ve(de) : ve(ue, !1);
          },
          !0
        );
      }
      o(u, b);
    };
    g(X, (u) => {
      R() ? u(K) : u(k, !1);
    });
  }
  A(() => N(T, 1, ne(t(Q)))), o(r, T), Xe();
}
vt(["change", "click"]);
var qb = (r, e) => {
  const a = r.target;
  e(a.checked);
}, Bb = /* @__PURE__ */ c('<th scope="col"><input type="checkbox" aria-label="Select all rows" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></th>'), Fb = (r, e, a) => t(e).sortable && a(t(e)), Hb = /* @__PURE__ */ c('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), Vb = /* @__PURE__ */ c('<th scope="col"><div class="flex items-center gap-2"><span> </span> <!></div></th>'), Gb = /* @__PURE__ */ c('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), Ub = /* @__PURE__ */ c('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), Yb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Wb = (r) => r.stopPropagation(), Kb = /* @__PURE__ */ c('<td><input type="checkbox" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></td>'), Xb = /* @__PURE__ */ c("<td><!></td>"), Zb = /* @__PURE__ */ c("<tr><!><!></tr>"), Qb = /* @__PURE__ */ c('<div><table><caption class="sr-only"> </caption><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div>');
const Jb = {
  hash: "svelte-a6pjeb",
  code: `
	/* Terminal glow effects */.terminal .table-row:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}

	/* Custom checkbox styling for dark themes */input[type='checkbox'].svelte-a6pjeb:indeterminate {background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 8h8v1H4z'/%3e%3c/svg%3e");}`
};
function bp(r, e) {
  Ke(e, !0), Qe(r, Jb);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), v = s(e, "striped", 3, !1), p = s(e, "hover", 3, !0), y = s(e, "bordered", 3, !1), R = s(e, "loading", 3, !1), h = s(e, "sortBy", 3, ""), I = s(e, "sortOrder", 3, "asc"), L = s(e, "selectable", 3, !1), z = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), M = s(e, "stickyHeader", 3, !1), f = s(e, "emptyMessage", 3, "No data available"), q = s(e, "class", 3, ""), ee = Mt();
  let _ = /* @__PURE__ */ ye(st(h())), E = /* @__PURE__ */ ye(st(I())), B = /* @__PURE__ */ ye(st(z()));
  const F = {
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
      table: `bg-black/90 text-${Me.terminal.green}`,
      header: `bg-${Me.terminal.green}/10 border-${Me.terminal.green}`,
      headerCell: `text-${Me.terminal.green} border-${Me.terminal.green}/30`,
      row: `border-${Me.terminal.green}/20`,
      rowHover: `hover:bg-${Me.terminal.green}/5`,
      rowSelected: `bg-${Me.terminal.green}/10`,
      cell: `text-${Me.terminal.green}/90 border-${Me.terminal.green}/20`,
      loading: `bg-${Me.terminal.green}/5`
    }
  }, j = {
    sm: { cell: "px-3 py-2 text-sm", header: "px-3 py-2 text-xs" },
    md: { cell: "px-4 py-3 text-sm", header: "px-4 py-3 text-sm" },
    lg: { cell: "px-6 py-4 text-base", header: "px-6 py-4 text-base" }
  }, V = /* @__PURE__ */ Ee(() => F[l()]), O = /* @__PURE__ */ Ee(() => j[d()]), P = /* @__PURE__ */ Ee(() => () => !t(_) || !a().find((le) => le.key === t(_))?.sortable ? n() : [...n()].sort((le, H) => {
    const ae = le[t(_)], ce = H[t(_)];
    if (ae === ce) return 0;
    const se = t(E) === "asc";
    return ae < ce ? se ? -1 : 1 : se ? 1 : -1;
  }));
  function Q(Y) {
    Y.sortable && (t(_) === Y.key ? W(E, t(E) === "asc" ? "desc" : "asc", !0) : (W(_, Y.key, !0), W(E, "asc")), ee("sort", { column: Y.key, order: t(E) }));
  }
  function G(Y, le) {
    ee("rowClick", { row: Y, index: le });
  }
  function D(Y, le) {
    const H = Y.id ?? index;
    le ? t(B).add(H) : t(B).delete(H), W(B, new Set(t(B)), !0), ee("rowSelect", { row: Y, selected: le });
  }
  function T(Y) {
    Y ? W(B, new Set(n().map((le, H) => le.id ?? H)), !0) : W(B, /* @__PURE__ */ new Set(), !0), ee("selectAll", { selected: Y });
  }
  function w(Y, le, H) {
    return Y.render ? Y.render(le, H) : Y.formatter ? Y.formatter(le) : String(le ?? "");
  }
  const x = /* @__PURE__ */ Ee(() => n().length > 0 && n().every((Y, le) => t(B).has(Y.id ?? le))), C = /* @__PURE__ */ Ee(() => t(B).size > 0 && !t(x)), X = /* @__PURE__ */ Ee(() => Z("w-full font-mono rounded-lg overflow-hidden border", t(V).table, t(V).row, y() && "border-2", q())), K = /* @__PURE__ */ Ee(() => Z("overflow-auto", e.maxHeight && `max-h-[${e.maxHeight}]`, M() && "relative"));
  var k = Qb(), u = i(k), b = i(u), re = i(b), de = m(b), ue = i(de), ve = i(ue);
  {
    var $ = (Y) => {
      var le = Bb(), H = i(le);
      H.__change = [qb, T], A(
        (ae) => {
          N(le, 1, ae), Xt(H, t(x)), H.indeterminate = t(C);
        },
        [
          () => ne(Z(t(O).header, t(V).headerCell, "w-12"))
        ]
      ), o(Y, le);
    };
    g(ve, (Y) => {
      L() && Y($);
    });
  }
  var U = m(ve);
  Ge(U, 17, a, (Y) => Y.key, (Y, le) => {
    var H = Vb();
    H.__click = [Fb, le, Q];
    var ae = i(H), ce = i(ae), se = i(ce), he = m(ce, 2);
    {
      var fe = (be) => {
        var ge = Hb(), Ce = i(ge), Pe = m(Ce, 2);
        A(
          (Be, je) => {
            N(Ce, 0, Be), N(Pe, 0, je);
          },
          [
            () => ne(Z("w-3 h-3 transition-colors", t(_) === t(le).key && t(E) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => ne(Z("w-3 h-3 -mt-1 transition-colors", t(_) === t(le).key && t(E) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(be, ge);
      };
      g(he, (be) => {
        t(le).sortable && be(fe);
      });
    }
    Ie(H, (be, ge) => ft?.(be, ge), () => ({ enabled: t(le).sortable, strength: 0.05 })), A(
      (be) => {
        N(H, 1, be), ht(H, t(le).width ? `width: ${t(le).width}` : void 0), xe(H, "aria-sort", t(_) === t(le).key ? t(E) === "asc" ? "ascending" : "descending" : "none"), ie(se, t(le).label);
      },
      [
        () => ne(Z(t(O).header, t(V).headerCell, "font-semibold uppercase tracking-wider", `text-${t(le).align || "left"}`, t(le).sortable && "cursor-pointer select-none", y() && "border-r last:border-r-0"))
      ]
    ), o(Y, H);
  });
  var oe = m(de), S = i(oe);
  {
    var te = (Y) => {
      var le = Gb(), H = i(le);
      A(
        (ae) => {
          xe(H, "colspan", a().length + (L() ? 1 : 0)), N(H, 1, ae);
        },
        [
          () => ne(Z(t(O).cell, t(V).loading, "text-center"))
        ]
      ), o(Y, le);
    }, J = (Y) => {
      var le = Se(), H = _e(le);
      {
        var ae = (se) => {
          var he = Ub(), fe = i(he), be = i(fe), ge = m(i(be), 2), Ce = i(ge);
          A(
            (Pe) => {
              xe(fe, "colspan", a().length + (L() ? 1 : 0)), N(fe, 1, Pe), ie(Ce, f());
            },
            [
              () => ne(Z(t(O).cell, t(V).cell, "text-center text-gray-400"))
            ]
          ), o(se, he);
        }, ce = (se) => {
          var he = Se(), fe = _e(he);
          Ge(fe, 19, () => t(P), (be, ge) => be.id ?? ge, (be, ge, Ce) => {
            const Pe = /* @__PURE__ */ Ee(() => t(ge).id ?? t(Ce)), Be = /* @__PURE__ */ Ee(() => t(B).has(t(Pe)));
            var je = Zb();
            je.__click = () => G(t(ge), t(Ce));
            var we = i(je);
            {
              var pe = (Ne) => {
                var Ae = Kb(), Le = i(Ae);
                Le.__change = [Yb, D, ge], Le.__click = [Wb], A(
                  (qe) => {
                    N(Ae, 1, qe), Xt(Le, t(Be));
                  },
                  [
                    () => ne(Z(t(O).cell, t(V).cell, y() && "border-r"))
                  ]
                ), o(Ne, Ae);
              };
              g(we, (Ne) => {
                L() && Ne(pe);
              });
            }
            var Te = m(we);
            Ge(Te, 17, a, (Ne) => Ne.key, (Ne, Ae) => {
              var Le = Xb(), qe = i(Le);
              Pa(qe, () => Ra(w(t(Ae), t(ge)[t(Ae).key], t(ge)))), A((Fe) => N(Le, 1, Fe), [
                () => ne(Z(t(O).cell, t(V).cell, `text-${t(Ae).align || "left"}`, y() && "border-r last:border-r-0"))
              ]), o(Ne, Le);
            }), A((Ne) => N(je, 1, Ne), [
              () => ne(Z(t(V).row, p() && t(V).rowHover, v() && t(Ce) % 2 === 1 && "bg-black/20", t(Be) && t(V).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), $e(1, je, () => mt, () => ({ direction: "up", duration: 100, delay: t(Ce) * 20 })), o(be, je);
          }), o(se, he);
        };
        g(
          H,
          (se) => {
            t(P).length === 0 ? se(ae) : se(ce, !1);
          },
          !0
        );
      }
      o(Y, le);
    };
    g(S, (Y) => {
      R() ? Y(te) : Y(J, !1);
    });
  }
  A(
    (Y) => {
      N(k, 1, ne(t(K))), N(u, 1, ne(t(X))), ie(re, `Data table with ${n().length ?? ""} rows and ${a().length ?? ""} columns`), N(de, 1, Y);
    },
    [
      () => ne(Z(t(V).header, M() && "sticky top-0 z-10"))
    ]
  ), o(r, k), Xe();
}
vt(["change", "click"]);
const $b = (r, e, a) => {
  r.key === "Enter" ? e(t(a)) : r.key === "ArrowUp" && r.preventDefault();
};
var eg = /* @__PURE__ */ c('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-30 svelte-1c5nvru"></canvas>'), tg = /* @__PURE__ */ c('<span class="glitch svelte-1c5nvru"> </span>'), rg = /* @__PURE__ */ c('<div class="mb-4 svelte-1c5nvru"><div class="flex items-start gap-2 mb-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <span class="text-white svelte-1c5nvru"> </span> <span class="text-xs text-current/40 ml-auto svelte-1c5nvru"> </span></div> <div class="text-current/90 mb-2 whitespace-pre-wrap font-mono svelte-1c5nvru"> </div></div>'), ag = /* @__PURE__ */ c('<div class="mt-4 svelte-1c5nvru"><!></div>'), ng = /* @__PURE__ */ c(`<div><!> <div class="relative z-10 flex items-center justify-between p-4 border-b border-current/20 bg-black/50 svelte-1c5nvru"><div class="flex items-center gap-3 svelte-1c5nvru"><div class="flex gap-2 svelte-1c5nvru"><div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors svelte-1c5nvru"></div></div> <h3 class="text-sm font-mono font-semibold svelte-1c5nvru"><!></h3></div> <div class="flex items-center gap-2 text-xs font-mono svelte-1c5nvru"><span class="px-2 py-1 bg-current/10 rounded svelte-1c5nvru">SECURE</span> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse svelte-1c5nvru"></span></div></div> <div class="relative z-10 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed terminal-scroll svelte-1c5nvru" style="scrollbar-width: thin;"><div class="mb-4 text-current/80 svelte-1c5nvru"><pre class="whitespace-pre-wrap svelte-1c5nvru">╔══════════════════════════════════════════════════════════════╗
║ LIQUID GLASS TERMINAL v2.0 - SECURITY LEVEL: ALPHA-7        ║
║ SYSTEM STATUS: ONLINE │ ENCRYPTION: AES-256 │ UPTIME: 99.9% ║
╚══════════════════════════════════════════════════════════════╝

Connection established. Type 'help' for available commands.</pre></div> <!> <div class="flex items-start gap-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <input class="flex-1 bg-transparent border-none outline-none text-white font-mono svelte-1c5nvru" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-current animate-pulse svelte-1c5nvru"></span></div> <!></div></div>`);
const og = {
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
function gp(r, e) {
  Ke(e, !0), Qe(r, og);
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
  })), d = s(e, "autoPlay", 3, !1), v = s(e, "theme", 3, "hacker");
  s(e, "enableGlitch", 3, !0);
  const p = s(e, "enableMatrixRain", 3, !1), y = s(e, "enableScanlines", 3, !0), R = s(e, "enableFlicker", 3, !1);
  Mt();
  let h = /* @__PURE__ */ ye(void 0), I = /* @__PURE__ */ ye(void 0), L = /* @__PURE__ */ ye(""), z = /* @__PURE__ */ ye(st([])), M = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(st(p()));
  const q = st(y()), ee = st(R()), _ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  let E = [], B;
  const F = (U) => {
    const oe = U.trim().toLowerCase();
    let S = "";
    if (oe === "clear") {
      W(z, [], !0), W(L, "");
      return;
    } else oe === "matrix" ? (W(f, !t(f)), t(f) ? V() : O(), S = l()[oe] || "MATRIX RAIN DEACTIVATED") : oe === "glitch" ? (j(), S = l()[oe] || "GLITCH EFFECT ACTIVATED") : S = l()[oe] || `zsh: command not found: ${U}

Try 'help' for available commands.`;
    W(
      z,
      [
        ...t(z),
        { command: oe, output: S, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), W(L, ""), setTimeout(
      () => {
        t(h) && t(h).scrollTo({ top: t(h).scrollHeight, behavior: "smooth" });
      },
      50
    );
  }, j = () => {
    W(M, !0), setTimeout(
      () => {
        W(M, !1);
      },
      1e3
    );
  }, V = () => {
    if (!t(I)) return;
    const U = t(I).getContext("2d"), oe = 14, S = Math.floor(t(I).width / oe);
    E = Array(S).fill(0);
    const te = () => {
      U.fillStyle = "rgba(0, 0, 0, 0.05)", U.fillRect(0, 0, t(I).width, t(I).height), U.fillStyle = "#00ff88", U.font = `${oe}px 'PP Supply Mono', monospace`;
      for (let Y = 0; Y < E.length; Y++) {
        const le = _[Math.floor(Math.random() * _.length)];
        U.fillText(le, Y * oe, E[Y] * oe), E[Y] * oe > t(I).height && Math.random() > 0.975 && (E[Y] = 0), E[Y]++;
      }
    }, J = () => {
      te(), B = requestAnimationFrame(J);
    };
    J();
  }, O = () => {
    B && cancelAnimationFrame(B);
  }, P = () => {
    t(I) && t(h) && (t(I).width = t(h).offsetWidth, t(I).height = t(h).offsetHeight);
  };
  wt(() => (P(), t(f) && V(), d() && setTimeout(
    () => {
      F("whoami");
    },
    1e3
  ), () => {
    O();
  }));
  const Q = {
    matrix: "bg-black text-green-400 border-green-500/30",
    cyberpunk: "bg-purple-900/20 text-cyan-400 border-cyan-500/30",
    hacker: "bg-black text-terminal-green border-terminal-green/30",
    terminal: "bg-terminal-bg text-terminal-fg border-white/20"
  };
  var G = ng();
  Ot("resize", wo, P);
  var D = i(G);
  {
    var T = (U) => {
      var oe = eg();
      tt(oe, (S) => W(I, S), () => t(I)), o(U, oe);
    };
    g(D, (U) => {
      t(f) && U(T);
    });
  }
  var w = m(D, 2), x = i(w), C = m(i(x), 2), X = i(C);
  {
    var K = (U) => {
      var oe = tg(), S = i(oe);
      A(() => {
        xe(oe, "data-text", a()), ie(S, a());
      }), o(U, oe);
    }, k = (U) => {
      var oe = Ct();
      A(() => ie(oe, a())), o(U, oe);
    };
    g(X, (U) => {
      t(M) ? U(K) : U(k, !1);
    });
  }
  var u = m(w, 2), b = m(i(u), 2);
  Ge(b, 19, () => t(z), (U, oe) => U.timestamp?.getTime?.() ?? oe, (U, oe) => {
    var S = rg(), te = i(S), J = i(te);
    J.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
    var Y = m(J, 2), le = i(Y), H = m(Y, 2), ae = i(H), ce = m(te, 2), se = i(ce);
    A(
      (he) => {
        ie(le, t(oe).command), ie(ae, he), ie(se, t(oe).output);
      },
      [() => t(oe).timestamp.toLocaleTimeString()]
    ), o(U, S);
  });
  var re = m(b, 2), de = i(re);
  de.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
  var ue = m(de, 2);
  ue.__keydown = [$b, F, L];
  var ve = m(re, 2);
  {
    var $ = (U) => {
      var oe = ag(), S = i(oe);
      ot(S, () => e.children), o(U, oe);
    };
    g(ve, (U) => {
      e.children && U($);
    });
  }
  tt(u, (U) => W(h, U), () => t(h)), A((U) => N(G, 1, U, "svelte-1c5nvru"), [
    () => ne(Z("relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300", "border shadow-2xl shadow-black/25 transform-gpu will-change-transform", Q[v()], q && "terminal-scanlines", ee && "terminal-flicker", t(M) && "terminal-glitch", n()))
  ]), pr(ue, () => t(L), (U) => W(L, U)), o(r, G), Xe();
}
vt(["keydown"]);
const ig = (r) => r;
function lg(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Yn(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function ri(r, { delay: e = 0, duration: a = 400, easing: n = ig } = {}) {
  const l = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (d) => `opacity: ${d * l}`
  };
}
function ai(r, { delay: e = 0, duration: a = 400, easing: n = lg, x: l = 0, y: d = 0, opacity: v = 0 } = {}) {
  const p = getComputedStyle(r), y = +p.opacity, R = p.transform === "none" ? "" : p.transform, h = y * (1 - v), [I, L] = Yn(l), [z, M] = Yn(d);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (f, q) => `
			transform: ${R} translate(${(1 - f) * I}${L}, ${(1 - f) * z}${M});
			opacity: ${y - h * q}`
  };
}
var sg = /* @__PURE__ */ c('<div class="flex gap-1"><div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div></div>'), dg = /* @__PURE__ */ c('<div><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> <span class="text-sm font-mono">Analyzing patterns...</span></div>'), cg = (r, e, a) => e(t(a)), vg = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, ug = /* @__PURE__ */ c("<span> </span>"), fg = /* @__PURE__ */ c('<div class="flex items-center gap-2"><span> </span> <div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div></div></div></div>'), bg = /* @__PURE__ */ c("<code> </code>"), gg = /* @__PURE__ */ c('<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 svelte-4oclra"><div>Examples:</div> <div class="flex flex-wrap gap-1"></div></div>'), mg = /* @__PURE__ */ c('<div role="button" tabindex="0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><!> <span> </span></div> <!></div> <p> </p> <div> </div> <!></div>'), hg = /* @__PURE__ */ c('<div class="space-y-2"></div>'), pg = /* @__PURE__ */ c('<div><div class="text-2xl mb-2">🤔</div> <p class="text-sm"> </p> <p class="text-xs mt-1">Try a different search term</p></div>'), xg = /* @__PURE__ */ c('<div><div class="flex items-center justify-between"><span>Use ↑↓ to navigate, Enter to select</span> <span>AI-powered suggestions</span></div></div>'), _g = /* @__PURE__ */ c('<div><div><div class="flex items-center gap-2"><span class="text-sm font-bold">🤖 AI SUGGESTIONS</span> <!></div> <span> </span></div> <!> <!> <!> <!></div>');
const wg = {
  hash: "svelte-4oclra",
  code: `
	/* Smooth animations */.group.svelte-4oclra:hover .group-hover\\:opacity-100:where(.svelte-4oclra) {opacity:1;}`
};
function mp(r, e) {
  Ke(e, !0), Qe(r, wg);
  const [a, n] = Ko(), l = () => Wo(M, "$aiSuggestions", a), d = s(e, "query", 3, ""), v = s(e, "suggestions", 19, () => []), p = s(e, "maxSuggestions", 3, 6), y = s(e, "showConfidence", 3, !0), R = s(e, "showCategories", 3, !0), h = s(e, "theme", 3, "terminal"), I = s(e, "aiMode", 3, !0), L = s(e, "class", 3, ""), z = Mt(), M = hn([]);
  let f = /* @__PURE__ */ ye(-1), q = /* @__PURE__ */ ye(!1);
  const ee = [
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
  ], E = {
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
  }[h()], B = {
    system: { icon: "⚙️", color: "text-blue-400" },
    development: { icon: "💻", color: "text-green-400" },
    network: { icon: "🌐", color: "text-purple-400" },
    file: { icon: "📁", color: "text-yellow-400" },
    process: { icon: "⚡", color: "text-orange-400" },
    ai: { icon: "🤖", color: "text-cyan-400" }
  }, F = async (w) => {
    W(q, !0), await new Promise((C) => setTimeout(C, 800 + Math.random() * 400));
    const x = ee.filter((C) => C.command.toLowerCase().includes(w.toLowerCase()) || C.description.toLowerCase().includes(w.toLowerCase()) || C.category.toLowerCase().includes(w.toLowerCase())).map((C) => ({
      ...C,
      confidence: Math.min(0.98, C.confidence + Math.random() * 0.1)
    })).sort((C, X) => X.confidence - C.confidence).slice(0, p());
    return W(q, !1), x;
  }, j = async (w) => {
    if (!w.trim()) {
      M.set([]);
      return;
    }
    if (I()) {
      const x = await F(w);
      M.set(x);
    } else {
      const x = v().slice(0, p());
      M.set(x);
    }
  }, V = (w) => {
    const x = l();
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), W(f, Math.min(t(f) + 1, x.length - 1), !0);
        break;
      case "ArrowUp":
        w.preventDefault(), W(f, Math.max(t(f) - 1, -1), !0);
        break;
      case "Enter":
        w.preventDefault(), t(f) >= 0 && x[t(f)] && O(x[t(f)]);
        break;
      case "Escape":
        W(f, -1), M.set([]);
        break;
    }
  }, O = (w) => {
    z("select", { command: w, timestamp: /* @__PURE__ */ new Date() }), W(f, -1);
  }, P = (w) => w >= 0.9 ? "text-green-400" : w >= 0.7 ? "text-yellow-400" : w >= 0.5 ? "text-orange-400" : "text-red-400", Q = (w) => w >= 0.9 ? "HIGH" : w >= 0.7 ? "MED" : "LOW";
  bt(() => {
    j(d());
  }), wt(() => (window.addEventListener("keydown", V), () => {
    window.removeEventListener("keydown", V);
  }));
  var G = Se(), D = _e(G);
  {
    var T = (w) => {
      var x = _g(), C = i(x), X = i(C), K = m(i(X), 2);
      {
        var k = (te) => {
          var J = sg();
          o(te, J);
        };
        g(K, (te) => {
          t(q) && te(k);
        });
      }
      var u = m(X, 2), b = i(u), re = m(C, 2);
      {
        var de = (te) => {
          var J = dg();
          A((Y) => N(J, 1, Y, "svelte-4oclra"), [
            () => ne(Z("flex items-center gap-3 p-3 rounded-lg bg-black/20", E.muted))
          ]), o(te, J);
        };
        g(re, (te) => {
          t(q) && te(de);
        });
      }
      var ue = m(re, 2);
      {
        var ve = (te) => {
          var J = hg();
          Ge(J, 7, l, (Y) => Y.command, (Y, le, H) => {
            var ae = mg();
            ae.__click = [cg, O, le], ae.__keydown = [vg, O, le];
            var ce = i(ae), se = i(ce), he = i(se);
            {
              var fe = (Ae) => {
                var Le = ug(), qe = i(Le);
                A(() => {
                  N(Le, 1, ne(B[t(le).category].color), "svelte-4oclra"), ie(qe, B[t(le).category].icon);
                }), o(Ae, Le);
              };
              g(he, (Ae) => {
                R() && Ae(fe);
              });
            }
            var be = m(he, 2), ge = i(be), Ce = m(se, 2);
            {
              var Pe = (Ae) => {
                var Le = fg(), qe = i(Le), Fe = i(qe), ke = m(qe, 2), me = i(ke);
                A(
                  (ze, De, He) => {
                    N(qe, 1, ze, "svelte-4oclra"), ie(Fe, De), N(me, 1, He, "svelte-4oclra"), ht(me, `width: ${t(le).confidence * 100}%`);
                  },
                  [
                    () => ne(Z("text-xs font-bold", P(t(le).confidence))),
                    () => Q(t(le).confidence),
                    () => ne(Z("h-full rounded-full transition-all duration-300", P(t(le).confidence).replace("text-", "bg-")))
                  ]
                ), o(Ae, Le);
              };
              g(Ce, (Ae) => {
                y() && Ae(Pe);
              });
            }
            var Be = m(ce, 2), je = i(Be), we = m(Be, 2), pe = i(we), Te = m(we, 2);
            {
              var Ne = (Ae) => {
                var Le = gg(), qe = i(Le), Fe = m(qe, 2);
                Ge(Fe, 20, () => t(le).examples, (ke) => ke, (ke, me) => {
                  var ze = bg(), De = i(ze);
                  A(
                    (He) => {
                      N(ze, 1, He, "svelte-4oclra"), ie(De, me);
                    },
                    [
                      () => ne(Z("text-xs px-2 py-1 rounded bg-black/40", E.muted))
                    ]
                  ), o(ke, ze);
                }), A((ke) => N(qe, 1, ke, "svelte-4oclra"), [
                  () => ne(Z("text-xs font-bold mb-1", E.text))
                ]), o(Ae, Le);
              };
              g(Te, (Ae) => {
                t(le).examples && t(le).examples.length > 0 && Ae(Ne);
              });
            }
            A(
              (Ae, Le, qe, Fe) => {
                N(ae, 1, Ae, "svelte-4oclra"), xe(ae, "aria-label", `Execute command: ${t(le).command}`), N(be, 1, Le, "svelte-4oclra"), ie(ge, t(le).command), N(Be, 1, qe, "svelte-4oclra"), ie(je, t(le).description), N(we, 1, Fe, "svelte-4oclra"), ie(pe, t(le).usage);
              },
              [
                () => ne(Z("p-3 rounded-lg cursor-pointer transition-all duration-200", "hover:scale-[1.02] transform-gpu border border-transparent", t(H) === t(f) ? E.selected : "hover:bg-white/5", "group")),
                () => ne(Z("font-mono font-bold", E.text)),
                () => ne(Z("text-sm mb-2", E.muted)),
                () => ne(Z("text-xs font-mono p-2 rounded bg-black/30", E.accent))
              ]
            ), $e(3, ae, () => ri, () => ({ duration: 150, delay: t(H) * 50 })), o(Y, ae);
          }), o(te, J);
        };
        g(ue, (te) => {
          !t(q) && l().length > 0 && te(ve);
        });
      }
      var $ = m(ue, 2);
      {
        var U = (te) => {
          var J = pg(), Y = m(i(J), 2), le = i(Y);
          A(
            (H) => {
              N(J, 1, H, "svelte-4oclra"), ie(le, `No suggestions found for "${d() ?? ""}"`);
            },
            [() => ne(Z("text-center py-8", E.muted))]
          ), o(te, J);
        };
        g($, (te) => {
          !t(q) && d().trim() && l().length === 0 && te(U);
        });
      }
      var oe = m($, 2);
      {
        var S = (te) => {
          var J = xg();
          A((Y) => N(J, 1, Y, "svelte-4oclra"), [
            () => ne(Z("mt-3 pt-2 border-t border-current/20 text-xs", E.muted))
          ]), o(te, J);
        };
        g(oe, (te) => {
          !t(q) && l().length > 0 && te(S);
        });
      }
      A(
        (te, J, Y) => {
          N(x, 1, te, "svelte-4oclra"), N(C, 1, J, "svelte-4oclra"), N(u, 1, Y, "svelte-4oclra"), ie(b, `${l().length ?? ""} matches`);
        },
        [
          () => ne(Z("relative mt-2 p-4 rounded-lg border backdrop-blur-md", "shadow-2xl transform-gpu", E.bg, L())),
          () => ne(Z("flex items-center justify-between mb-3 pb-2 border-b border-current/20", E.text)),
          () => ne(Z("text-xs", E.muted))
        ]
      ), $e(3, x, () => ai, () => ({ y: 10, duration: 200 })), o(w, x);
    };
    g(D, (w) => {
      d().trim() && (l().length > 0 || t(q)) && w(T);
    });
  }
  o(r, G), Xe(), n();
}
vt(["click", "keydown"]);
var yg = /* @__PURE__ */ c("<span><!></span>");
const kg = {
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
function Cg(r, e) {
  Ke(e, !0), Qe(r, kg);
  const a = s(e, "class", 3, ""), n = s(e, "intensity", 3, "medium"), l = s(e, "continuous", 3, !1), d = s(e, "trigger", 3, !1);
  s(e, "speed", 3, 0.1);
  const v = s(e, "colors", 19, () => ["#ff0000", "#00ffff", "#ff00ff"]);
  let p, y = /* @__PURE__ */ ye(!1), R;
  const I = {
    low: { duration: 200, frequency: 3e3, distortion: 2, layers: 2 },
    medium: { duration: 400, frequency: 2e3, distortion: 4, layers: 3 },
    high: { duration: 600, frequency: 1e3, distortion: 8, layers: 4 },
    extreme: { duration: 1e3, frequency: 500, distortion: 16, layers: 6 }
  }()[n()], L = () => {
    t(y) || (W(y, !0), p && (p.style.animation = `
				glitch-skew ${I.duration}ms ease-in-out,
				glitch-color ${I.duration}ms linear
			`), setTimeout(
      () => {
        W(y, !1), p && (p.style.animation = "");
      },
      I.duration
    ));
  }, z = () => {
    l() && (R = setInterval(
      () => {
        Math.random() < 0.3 && L();
      },
      I.frequency
    ));
  }, M = () => {
    R && clearInterval(R);
  };
  bt(() => {
    d() && L();
  }), wt(() => (l() && z(), () => {
    M();
  }));
  const f = "!@#$%^&*()_+-=[]{}|;:,.<>?~`", q = (F, j) => F.split("").map((V) => Math.random() < j / 100 ? f[Math.floor(Math.random() * f().length)] : V).join("");
  var ee = yg(), _ = i(ee);
  {
    var E = (F) => {
      var j = Ct();
      A((V) => ie(j, V), [() => q(e.text, 20)]), o(F, j);
    }, B = (F) => {
      var j = Ct();
      A(() => ie(j, e.text)), o(F, j);
    };
    g(_, (F) => {
      t(y) && n() === "extreme" ? F(E) : F(B, !1);
    });
  }
  tt(ee, (F) => p = F, () => p), A(
    (F, j, V, O) => {
      N(ee, 1, F, "svelte-ithyll"), xe(ee, "data-text", e.text), ht(ee, `
		--glitch-color-1: ${j ?? ""};
		--glitch-color-2: ${V ?? ""};
		--glitch-color-3: ${O ?? ""};
		--glitch-distortion: ${I.distortion ?? ""}px;
	`);
    },
    [
      () => ne(Z("relative inline-block font-mono", t(y) && "glitching", a())),
      () => v()()[0] || "#ff0000",
      () => v()()[1] || "#00ffff",
      () => v()()[2] || "#ff00ff"
    ]
  ), o(r, ee), Xe();
}
var Eg = /* @__PURE__ */ c('<div class="w-2 h-2 rounded-full bg-current animate-ping svelte-11w1x2x"></div>'), Sg = /* @__PURE__ */ c("<span> </span>"), Tg = /* @__PURE__ */ c("<span> </span>"), Mg = /* @__PURE__ */ c("<span> </span>"), Ag = (r, e) => {
  r.stopPropagation(), e();
}, zg = /* @__PURE__ */ c('<button title="Copy command">📋</button>'), Ig = /* @__PURE__ */ c("<div> </div>"), Pg = /* @__PURE__ */ c("<div> </div>"), Lg = /* @__PURE__ */ c('<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse svelte-11w1x2x"></div>'), Dg = /* @__PURE__ */ c('<div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse svelte-11w1x2x"></div>'), jg = /* @__PURE__ */ c('<div><div class="absolute top-2 right-2 flex items-center gap-2 svelte-11w1x2x"><div><!></div> <!></div> <div class="flex items-start gap-2 mb-2 font-mono svelte-11w1x2x"><!> <div class="flex-1 svelte-11w1x2x"><!></div> <!></div> <!> <!> <!> <!></div>');
const Rg = {
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
function hp(r, e) {
  Ke(e, !0), Qe(r, Rg);
  let a = s(e, "output", 3, ""), n = s(e, "status", 7, "idle"), l = s(e, "showPrompt", 3, !0), d = s(e, "showTimestamp", 3, !0), v = s(e, "interactive", 3, !1), p = s(e, "theme", 3, "terminal"), y = s(e, "enableGlitch", 3, !1), R = s(e, "enableSound", 3, !1), h = s(e, "class", 3, "");
  const I = Mt();
  let L, z = /* @__PURE__ */ ye(!1), M = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(0), q = 0;
  const _ = {
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
  }[p()], B = {
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
  }[p()], V = (fe) => {
    if (!R()) return;
    const be = new (window.AudioContext || window.webkitAudioContext)(), ge = be.createOscillator(), Ce = be.createGain();
    switch (ge.connect(Ce), Ce.connect(be.destination), fe) {
      case "execute":
        ge.frequency.setValueAtTime(800, be.currentTime), ge.frequency.exponentialRampToValueAtTime(400, be.currentTime + 0.1);
        break;
      case "success":
        ge.frequency.setValueAtTime(523.25, be.currentTime), ge.frequency.setValueAtTime(659.25, be.currentTime + 0.1);
        break;
      case "error":
        ge.frequency.setValueAtTime(220, be.currentTime), ge.frequency.exponentialRampToValueAtTime(110, be.currentTime + 0.2);
        break;
    }
    Ce.gain.setValueAtTime(0.1, be.currentTime), Ce.gain.exponentialRampToValueAtTime(0.01, be.currentTime + 0.2), ge.start(be.currentTime), ge.stop(be.currentTime + 0.2);
  }, O = () => {
    !v() || n() === "running" || (q = performance.now(), n("running"), W(f, 0), y() && (W(M, !0), setTimeout(
      () => {
        W(M, !1);
      },
      300
    )), V("execute"), I("execute", {
      command: e.command,
      timestamp: /* @__PURE__ */ new Date(),
      theme: p()
    }));
  };
  bt(() => {
    if (n() === "running") {
      const fe = setInterval(
        () => {
          W(f, performance.now() - q);
        },
        10
      );
      return () => clearInterval(fe);
    } else n() === "success" ? V("success") : n() === "error" && V("error");
  });
  const P = async () => {
    try {
      await navigator.clipboard.writeText(e.command), I("copy", { command: e.command });
    } catch (fe) {
      console.error("Failed to copy command:", fe);
    }
  }, Q = (fe) => fe < 1e3 ? `${Math.round(fe)}ms` : `${(fe / 1e3).toFixed(2)}s`;
  wt(() => {
    v() && (L.style.cursor = "pointer");
  });
  var G = jg(), D = () => W(z, !0), T = () => W(z, !1), w = (fe) => {
    v() && (fe.key === "Enter" || fe.key === " ") && (fe.preventDefault(), O());
  };
  Ze(
    G,
    (fe) => ({
      class: fe,
      ...v() ? {
        role: "button",
        tabindex: 0,
        "aria-label": `Execute command: ${e.command}`
      } : { role: "article" },
      onmouseenter: D,
      onmouseleave: T,
      onclick: O,
      onkeydown: w
    }),
    [
      () => Z("relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300", "hover:scale-[1.02] hover:shadow-lg transform-gpu", _.bg, _.glow, B.borderColor, v() && "cursor-pointer hover:brightness-110", h())
    ],
    void 0,
    "svelte-11w1x2x"
  );
  var x = i(G), C = i(x), X = i(C);
  {
    var K = (fe) => {
      var be = Eg();
      o(fe, be);
    }, k = (fe) => {
      var be = Ct();
      A(() => ie(be, B.icon)), o(fe, be);
    };
    g(X, (fe) => {
      n() === "running" ? fe(K) : fe(k, !1);
    });
  }
  var u = m(C, 2);
  {
    var b = (fe) => {
      var be = Sg(), ge = i(be);
      A(
        (Ce, Pe) => {
          N(be, 1, Ce, "svelte-11w1x2x"), ie(ge, Pe);
        },
        [
          () => ne(Z("text-xs font-mono", _.accent)),
          () => Q(t(f))
        ]
      ), o(fe, be);
    };
    g(u, (fe) => {
      n() === "running" && t(f) > 0 && fe(b);
    });
  }
  var re = m(x, 2), de = i(re);
  {
    var ue = (fe) => {
      var be = Tg(), ge = i(be);
      A(
        (Ce) => {
          N(be, 1, Ce, "svelte-11w1x2x"), ie(ge, j);
        },
        [
          () => ne(Z("select-none font-bold", _.prompt))
        ]
      ), o(fe, be);
    };
    g(de, (fe) => {
      l() && fe(ue);
    });
  }
  var ve = m(de, 2), $ = i(ve);
  {
    var U = (fe) => {
      {
        let be = /* @__PURE__ */ Ee(() => Z("font-mono", _.command));
        Cg(fe, {
          get text() {
            return e.command;
          },
          intensity: "medium",
          get class() {
            return t(be);
          }
        });
      }
    }, oe = (fe) => {
      var be = Mg(), ge = i(be);
      A(
        (Ce) => {
          N(be, 1, Ce, "svelte-11w1x2x"), ie(ge, e.command);
        },
        [() => ne(Z("font-mono", _.command))]
      ), o(fe, be);
    };
    g($, (fe) => {
      y() && t(M) ? fe(U) : fe(oe, !1);
    });
  }
  var S = m(ve, 2);
  {
    var te = (fe) => {
      var be = zg();
      be.__click = [Ag, P], A((ge) => N(be, 1, ge, "svelte-11w1x2x"), [
        () => ne(Z("opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity", _.accent, "hover:bg-white/10"))
      ]), o(fe, be);
    };
    g(S, (fe) => {
      v() && fe(te);
    });
  }
  var J = m(re, 2);
  {
    var Y = (fe) => {
      var be = Ig(), ge = i(be);
      A(
        (Ce) => {
          N(be, 1, Ce, "svelte-11w1x2x"), ie(ge, a());
        },
        [
          () => ne(Z("mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap", _.output, B.borderColor))
        ]
      ), o(fe, be);
    };
    g(J, (fe) => {
      a() && fe(Y);
    });
  }
  var le = m(J, 2);
  {
    var H = (fe) => {
      var be = Pg(), ge = i(be);
      A(
        (Ce, Pe) => {
          N(be, 1, Ce, "svelte-11w1x2x"), ie(ge, Pe);
        },
        [
          () => ne(Z("mt-2 text-xs font-mono opacity-60", _.accent)),
          () => (/* @__PURE__ */ new Date()).toLocaleTimeString()
        ]
      ), o(fe, be);
    };
    g(le, (fe) => {
      d() && fe(H);
    });
  }
  var ae = m(le, 2);
  {
    var ce = (fe) => {
      var be = Lg();
      o(fe, be);
    };
    g(ae, (fe) => {
      v() && t(z) && fe(ce);
    });
  }
  var se = m(ae, 2);
  {
    var he = (fe) => {
      var be = Dg();
      A((ge) => ht(be, `width: ${ge ?? ""}%`), [() => Math.min(t(f) / 5e3 * 100, 100)]), o(fe, be);
    };
    g(se, (fe) => {
      n() === "running" && fe(he);
    });
  }
  tt(G, (fe) => L = fe, () => L), A((fe) => N(C, 1, fe, "svelte-11w1x2x"), [
    () => ne(Z("w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold", B.color, n() === "running" && "animate-pulse"))
  ]), o(r, G), Xe();
}
vt(["click"]);
var Ng = /* @__PURE__ */ c('<div><div class="terminal-header svelte-n7o7tf"><div class="terminal-controls svelte-n7o7tf"><span class="terminal-control close svelte-n7o7tf"></span> <span class="terminal-control minimize svelte-n7o7tf"></span> <span class="terminal-control maximize svelte-n7o7tf"></span></div> <div class="terminal-title svelte-n7o7tf"> </div> <div class="terminal-status svelte-n7o7tf"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body min-h-[300px] flex items-center justify-center svelte-n7o7tf"><div class="flex items-center gap-3 text-terminal-green"><div class="animate-spin w-5 h-5 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="font-mono">Loading terminal...</span></div></div></div>'), Og = /* @__PURE__ */ c('<div><div class="terminal-body min-h-[200px] flex items-center justify-center svelte-n7o7tf"><div class="text-red-400 font-mono"> </div></div></div>');
const qg = {
  hash: "svelte-n7o7tf",
  code: ".terminal-header.svelte-n7o7tf {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;}.terminal-controls.svelte-n7o7tf {display:flex;gap:8px;}.terminal-control.svelte-n7o7tf {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-n7o7tf {background:#ff5f57;}.terminal-control.minimize.svelte-n7o7tf {background:#ffbd2e;}.terminal-control.maximize.svelte-n7o7tf {background:#28ca42;}.terminal-title.svelte-n7o7tf {font-family:'SF Mono', 'Monaco', 'Consolas', monospace;font-size:14px;color:rgba(255, 255, 255, 0.8);}.terminal-status.svelte-n7o7tf {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-n7o7tf {padding:16px;font-family:'SF Mono', 'Monaco', 'Consolas', monospace;background:rgba(0, 0, 0, 0.3);}"
};
function pp(r, e) {
  Ke(e, !0), Qe(r, qg);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({})), d = s(e, "autoPlay", 3, !1);
  let v = /* @__PURE__ */ ye(null), p = /* @__PURE__ */ ye(!0), y = /* @__PURE__ */ ye(null);
  wt(async () => {
    try {
      const z = await import("./TerminalWindow-Db7-MqJA.js");
      W(v, z.default, !0), W(p, !1);
    } catch (z) {
      W(y, `Failed to load TerminalWindow: ${z}`), W(p, !1);
    }
  });
  var R = Se(), h = _e(R);
  {
    var I = (z) => {
      var M = Ng(), f = i(M), q = m(i(f), 2), ee = i(q);
      A(() => {
        N(M, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), ie(ee, a());
      }), o(z, M);
    }, L = (z) => {
      var M = Se(), f = _e(M);
      {
        var q = (_) => {
          var E = Og(), B = i(E), F = i(B), j = i(F);
          A(() => {
            N(E, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), ie(j, t(y));
          }), o(_, E);
        }, ee = (_) => {
          var E = Se(), B = _e(E);
          {
            var F = (j) => {
              var V = Se(), O = _e(V);
              Et(O, () => t(v), (P, Q) => {
                Q(P, {
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
              }), o(j, V);
            };
            g(
              B,
              (j) => {
                t(v) && j(F);
              },
              !0
            );
          }
          o(_, E);
        };
        g(
          f,
          (_) => {
            t(y) ? _(q) : _(ee, !1);
          },
          !0
        );
      }
      o(z, M);
    };
    g(h, (z) => {
      t(p) ? z(I) : z(L, !1);
    });
  }
  o(r, R), Xe();
}
const Bg = (r, e, a, n) => {
  r.key === "Enter" && !t(e) && a(t(n));
};
var Fg = /* @__PURE__ */ c('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen svelte-169kcnm"></canvas>'), Hg = /* @__PURE__ */ c('<div class="mb-6 transform transition-all duration-500 hover:scale-[1.02] svelte-169kcnm"><div class="flex items-start gap-3 mb-3 svelte-169kcnm"><span></span> <span class="text-white font-semibold svelte-169kcnm"> </span> <span> </span></div> <div> </div></div>'), Vg = /* @__PURE__ */ c('<div class="flex items-center gap-3 mb-4 svelte-169kcnm"><div class="flex gap-1 svelte-169kcnm"><div style="animation-delay: 0ms;"></div> <div style="animation-delay: 150ms;"></div> <div style="animation-delay: 300ms;"></div></div> <span>Processing neural patterns...</span></div>'), Gg = /* @__PURE__ */ c('<div class="mt-6 svelte-169kcnm"><!></div>'), Ug = /* @__PURE__ */ c(`<div role="application" aria-label="Liquid Neural Terminal Interface"><!> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-40 mix-blend-screen svelte-169kcnm"></canvas> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-30 svelte-169kcnm"></canvas> <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div><div class="flex items-center gap-4 svelte-169kcnm"><div class="flex gap-2 svelte-169kcnm"><div class="w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 svelte-169kcnm"></div></div> <h3> </h3></div> <div class="flex items-center gap-3 text-sm font-mono svelte-169kcnm"><div>NEURAL: ACTIVE</div> <div> </div> <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 svelte-169kcnm"></div></div></div> <div class="relative z-10 p-6 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed liquid-scroll svelte-169kcnm"><div><pre>╔═══════════════════════════════════════════════════════════════╗
║  🌊 LIQUID NEURAL INTERFACE v3.0 - QUANTUM READY 🌊         ║
║  STATUS: CONSCIOUSNESS ACTIVATED │ REALITY: MALLEABLE        ║
║  NEURAL PATHWAYS: ∞ │ LIQUID STATE: TRANSCENDENT            ║
╚═══════════════════════════════════════════════════════════════╝

🧠 Neural connection established...
💧 Liquid dynamics engine online...
⚡ Quantum entanglement verified...

Type 'help' to access the command matrix.</pre></div> <!> <!> <div class="flex items-start gap-3 svelte-169kcnm"><span></span> <input autocomplete="off" spellcheck="false"/> <span></span></div> <!></div></div>`);
const Yg = {
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
function xp(r, e) {
  Ke(e, !0), Qe(r, Yg);
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
  })), d = s(e, "autoPlay", 3, !1), v = s(e, "theme", 3, "liquid"), p = s(e, "enableLiquidFlow", 3, !0), y = s(e, "enableParticles", 3, !0), R = s(e, "enableWaveform", 3, !0), h = s(e, "enableHologram", 3, !1);
  Mt();
  let I = /* @__PURE__ */ ye(void 0), L = /* @__PURE__ */ ye(void 0), z = /* @__PURE__ */ ye(void 0), M = /* @__PURE__ */ ye(void 0), f = /* @__PURE__ */ ye(""), q = /* @__PURE__ */ ye(st([])), ee = /* @__PURE__ */ ye(st(p())), _ = /* @__PURE__ */ ye(st(y()));
  st(R());
  let E = /* @__PURE__ */ ye(st(h())), B = /* @__PURE__ */ ye(!1), F, j;
  class V {
    x;
    y;
    vx;
    vy;
    size;
    opacity;
    hue;
    constructor(pe, Te) {
      this.x = pe, this.y = Te, this.vx = (Math.random() - 0.5) * 2, this.vy = (Math.random() - 0.5) * 2, this.size = Math.random() * 3 + 1, this.opacity = Math.random() * 0.8 + 0.2, this.hue = Math.random() * 60 + 180;
    }
    update(pe, Te) {
      this.x += this.vx, this.y += this.vy, (this.x <= 0 || this.x >= pe) && (this.vx *= -0.8, this.x = Math.max(0, Math.min(pe, this.x))), (this.y <= 0 || this.y >= Te) && (this.vy *= -0.8, this.y = Math.max(0, Math.min(Te, this.y))), this.vy += 0.02, this.vx *= 0.999, this.vy *= 0.999;
    }
    draw(pe) {
      pe.save(), pe.globalAlpha = this.opacity, pe.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`, pe.shadowColor = `hsl(${this.hue}, 70%, 60%)`, pe.shadowBlur = this.size * 2, pe.beginPath(), pe.arc(this.x, this.y, this.size, 0, Math.PI * 2), pe.fill(), pe.restore();
    }
  }
  let O = [], P = 0, Q = 0;
  class G {
    x;
    y;
    radius;
    connections;
    activation;
    pulsePhase;
    constructor(pe, Te) {
      this.x = pe, this.y = Te, this.radius = Math.random() * 8 + 4, this.connections = [], this.activation = Math.random(), this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.pulsePhase += 0.05, this.activation = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    }
    draw(pe) {
      const Te = this.activation;
      pe.save(), pe.globalAlpha = 0.7 + Te * 0.3, pe.fillStyle = `hsl(${180 + Te * 40}, 70%, ${50 + Te * 30}%)`, pe.shadowColor = pe.fillStyle, pe.shadowBlur = this.radius * (1 + Te), pe.beginPath(), pe.arc(this.x, this.y, this.radius, 0, Math.PI * 2), pe.fill(), pe.restore();
    }
  }
  let D = [];
  const T = (we) => {
    const pe = we.trim().toLowerCase();
    W(B, !0), setTimeout(
      () => {
        let Te = "";
        switch (pe) {
          case "clear":
            W(q, [], !0), W(f, ""), W(B, !1);
            return;
          case "liquid":
            W(ee, !t(ee)), t(ee) && w(), Te = t(ee) ? "LIQUID FLOW DYNAMICS: ACTIVATED" : "LIQUID FLOW: DEACTIVATED";
            break;
          case "neural":
            x(), Te = l()[pe];
            break;
          case "particles":
            W(_, !t(_)), Te = l()[pe];
            break;
          case "hologram":
            W(E, !t(E)), Te = t(E) ? "HOLOGRAPHIC PROJECTION: ONLINE" : "HOLOGRAPHIC PROJECTION: OFFLINE";
            break;
          case "overclock":
            C(), Te = l()[pe];
            break;
          default:
            Te = l()[pe] || `ERROR: Command '${we}' not found in neural database.
Run 'help' to display available liquid protocols.`;
        }
        W(
          q,
          [
            ...t(q),
            { command: pe, output: Te, timestamp: /* @__PURE__ */ new Date() }
          ],
          !0
        ), W(f, ""), W(B, !1), setTimeout(
          () => {
            t(I) && t(I).scrollTo({ top: t(I).scrollHeight, behavior: "smooth" });
          },
          50
        );
      },
      Math.random() * 500 + 200
    );
  }, w = () => {
    if (!t(L)) return;
    const we = t(L).getContext("2d"), pe = t(L).width, Te = t(L).height;
    O = [];
    for (let Ae = 0; Ae < 50; Ae++)
      O.push(new V(Math.random() * pe, Math.random() * Te));
    const Ne = () => {
      we.fillStyle = "rgba(0, 0, 0, 0.1)", we.fillRect(0, 0, pe, Te), O.forEach((Ae) => {
        Ae.update(pe, Te), Ae.draw(we);
      }), we.strokeStyle = "rgba(100, 200, 255, 0.3)", we.lineWidth = 1;
      for (let Ae = 0; Ae < O.length; Ae++)
        for (let Le = Ae + 1; Le < O.length; Le++) {
          const qe = O[Ae].x - O[Le].x, Fe = O[Ae].y - O[Le].y, ke = Math.sqrt(qe * qe + Fe * Fe);
          ke < 100 && (we.globalAlpha = (100 - ke) / 100 * 0.5, we.beginPath(), we.moveTo(O[Ae].x, O[Ae].y), we.lineTo(O[Le].x, O[Le].y), we.stroke());
        }
      we.globalAlpha = 1, t(ee) && (F = requestAnimationFrame(Ne));
    };
    Ne();
  }, x = () => {
    if (!t(z)) return;
    const we = t(z).width, pe = t(z).height;
    D = [];
    for (let Ne = 0; Ne < 20; Ne++)
      D.push(new G(Math.random() * (we - 100) + 50, Math.random() * (pe - 100) + 50));
    D.forEach((Ne, Ae) => {
      const Le = Math.floor(Math.random() * 3) + 1;
      for (let qe = 0; qe < Le; qe++) {
        const Fe = Math.floor(Math.random() * D.length);
        Fe !== Ae && !Ne.connections.includes(Fe) && Ne.connections.push(Fe);
      }
    });
    const Te = () => {
      const Ne = t(z).getContext("2d");
      Ne.fillStyle = "rgba(0, 0, 0, 0.1)", Ne.fillRect(0, 0, we, pe), Ne.strokeStyle = "rgba(0, 255, 200, 0.4)", Ne.lineWidth = 2, D.forEach((Ae, Le) => {
        Ae.connections.forEach((qe) => {
          const Fe = D[qe];
          Fe && (Ne.globalAlpha = (Ae.activation + Fe.activation) / 2, Ne.beginPath(), Ne.moveTo(Ae.x, Ae.y), Ne.lineTo(Fe.x, Fe.y), Ne.stroke());
        });
      }), D.forEach((Ae) => {
        Ae.update(), Ae.draw(Ne);
      }), Ne.globalAlpha = 1, j = requestAnimationFrame(Te);
    };
    Te();
  }, C = () => {
    const we = t(I);
    we && (we.style.animation = "overclock-shake 2s ease-in-out", setTimeout(
      () => {
        we.style.animation = "";
      },
      2e3
    ));
  }, X = (we) => {
    const pe = t(I)?.getBoundingClientRect();
    pe && (P = we.clientX - pe.left, Q = we.clientY - pe.top, O.forEach((Te) => {
      const Ne = P - Te.x, Ae = Q - Te.y;
      Math.sqrt(Ne * Ne + Ae * Ae) < 100 && (Te.vx += Ne * 1e-4, Te.vy += Ae * 1e-4);
    }));
  }, K = () => {
    if (t(I)) {
      const we = t(I).offsetWidth, pe = t(I).offsetHeight;
      t(L) && (t(L).width = we, t(L).height = pe), t(z) && (t(z).width = we, t(z).height = pe), t(M) && (t(M).width = we, t(M).height = pe);
    }
  };
  wt(() => (K(), t(ee) && w(), d() && (setTimeout(() => T("neural"), 1e3), setTimeout(() => T("liquid"), 2500)), () => {
    F && cancelAnimationFrame(F), j && cancelAnimationFrame(j);
  }));
  const u = {
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
  }[v()];
  var b = Ug();
  Ot(
    "resize",
    wo,
    /* eslint-enable no-irregular-whitespace */
    K
  ), b.__mousemove = X;
  var re = i(b);
  {
    var de = (we) => {
      var pe = Fg();
      tt(pe, (Te) => W(L, Te), () => t(L)), o(we, pe);
    };
    g(re, (we) => {
      t(ee) && we(de);
    });
  }
  var ue = m(re, 2);
  tt(ue, (we) => W(z, we), () => t(z));
  var ve = m(ue, 2);
  tt(ve, (we) => W(M, we), () => t(M));
  var $ = m(ve, 6), U = i($), oe = m(i(U), 2), S = i(oe), te = m(U, 2), J = i(te), Y = m(J, 2), le = i(Y), H = m($, 2), ae = i(H), ce = i(ae), se = m(ae, 2);
  Ge(se, 17, () => t(q), (we) => we.timestamp, (we, pe) => {
    var Te = Hg(), Ne = i(Te), Ae = i(Ne);
    Ae.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
    var Le = m(Ae, 2), qe = i(Le), Fe = m(Le, 2), ke = i(Fe), me = m(Ne, 2), ze = i(me);
    A(
      (De, He, Je, We) => {
        N(Ae, 1, De, "svelte-169kcnm"), ie(qe, t(pe).command), N(Fe, 1, He, "svelte-169kcnm"), ie(ke, Je), N(me, 1, We, "svelte-169kcnm"), ie(ze, t(pe).output);
      },
      [
        () => ne(Z("whitespace-pre font-bold", u.text)),
        () => ne(Z("text-xs ml-auto opacity-60", u.text)),
        () => t(pe).timestamp.toLocaleTimeString(),
        () => ne(Z("p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm", "whitespace-pre-wrap font-mono shadow-inner", u.text))
      ]
    ), o(we, Te);
  });
  var he = m(se, 2);
  {
    var fe = (we) => {
      var pe = Vg(), Te = i(pe), Ne = i(Te), Ae = m(Ne, 2), Le = m(Ae, 2), qe = m(Te, 2);
      A(
        (Fe, ke, me, ze) => {
          N(Ne, 1, Fe, "svelte-169kcnm"), N(Ae, 1, ke, "svelte-169kcnm"), N(Le, 1, me, "svelte-169kcnm"), N(qe, 1, ze, "svelte-169kcnm");
        },
        [
          () => ne(Z("w-2 h-2 rounded-full animate-bounce", `bg-${u.text.split("-")[1]}-400`)),
          () => ne(Z("w-2 h-2 rounded-full animate-bounce", `bg-${u.text.split("-")[1]}-400`)),
          () => ne(Z("w-2 h-2 rounded-full animate-bounce", `bg-${u.text.split("-")[1]}-400`)),
          () => ne(Z("text-sm opacity-70", u.text))
        ]
      ), o(we, pe);
    };
    g(he, (we) => {
      t(B) && we(fe);
    });
  }
  var be = m(he, 2), ge = i(be);
  ge.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
  var Ce = m(ge, 2);
  Ce.__keydown = [Bg, B, T, f];
  var Pe = m(Ce, 2), Be = m(be, 2);
  {
    var je = (we) => {
      var pe = Gg(), Te = i(pe);
      ot(Te, () => e.children), o(we, pe);
    };
    g(Be, (we) => {
      e.children && we(je);
    });
  }
  tt(H, (we) => W(I, we), () => t(I)), A(
    (we, pe, Te, Ne, Ae, Le, qe, Fe, ke, me) => {
      N(b, 1, we, "svelte-169kcnm"), N($, 1, pe, "svelte-169kcnm"), N(oe, 1, Te, "svelte-169kcnm"), ie(S, a()), N(J, 1, Ne, "svelte-169kcnm"), N(Y, 1, Ae, "svelte-169kcnm"), ie(le, `LIQUID: ${t(ee) ? "FLOW" : "STATIC"}`), N(ae, 1, Le, "svelte-169kcnm"), N(ce, 1, qe, "svelte-169kcnm"), N(ge, 1, Fe, "svelte-169kcnm"), Ce.disabled = t(B), N(Ce, 1, ke, "svelte-169kcnm"), xe(Ce, "placeholder", t(B) ? "Processing..." : "Enter liquid command..."), N(Pe, 1, me, "svelte-169kcnm");
    },
    [
      () => ne(Z("relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500", "border-2 shadow-2xl transform-gpu will-change-transform", `bg-gradient-to-br ${u.bg}`, u.border, u.glow, t(E) && "hologram-effect", n())),
      () => ne(Z("relative z-10 flex items-center justify-between p-6 border-b-2", "bg-black/30 backdrop-blur-sm", u.border)),
      () => ne(Z("text-lg font-mono font-bold tracking-wider", u.text, "drop-shadow-lg animate-pulse")),
      () => ne(Z("px-3 py-1 rounded-full bg-black/40 border", u.border, u.text)),
      () => ne(Z("px-3 py-1 rounded-full bg-black/40 border", u.border, u.text)),
      () => ne(Z("mb-6 p-4 rounded-lg bg-black/20 border", u.border)),
      () => ne(Z("whitespace-pre-wrap", u.text)),
      () => ne(Z("whitespace-pre font-bold", u.text)),
      () => ne(Z("flex-1 bg-transparent border-none outline-none font-mono text-white", "placeholder:text-white/40", t(B) && "opacity-50 cursor-not-allowed")),
      () => ne(Z("w-3 h-6 animate-pulse", `bg-${u.text.split("-")[1]}-400`))
    ]
  ), pr(Ce, () => t(f), (we) => W(f, we)), o(r, b), Xe();
}
vt(["mousemove", "keydown"]);
const Wg = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var Kg = /* @__PURE__ */ c("<!> <!>", 1), Xg = /* @__PURE__ */ c("<!> <!>", 1), Zg = /* @__PURE__ */ c('<div class="mb-2"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <span class="text-white text-sm"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm svelte-14245lp"> </div></div>'), Qg = /* @__PURE__ */ c('<div class="floating-terminal svelte-14245lp"><div class="terminal-header svelte-14245lp"><div class="terminal-controls svelte-14245lp"><span class="terminal-control close svelte-14245lp"></span> <span class="terminal-control minimize svelte-14245lp"></span> <span class="terminal-control maximize svelte-14245lp"></span></div> <div class="terminal-title svelte-14245lp">3D Floating Terminal</div> <div class="terminal-status svelte-14245lp"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body svelte-14245lp"><!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-1 h-4 bg-terminal-green animate-pulse"></span></div></div></div>'), Jg = /* @__PURE__ */ c("<!> <!> <!>", 1), $g = /* @__PURE__ */ c("<!> <!>", 1), em = /* @__PURE__ */ c("<!> <!>", 1), tm = /* @__PURE__ */ c("<!> <!> <!> <!> <!> <!>", 1);
const rm = {
  hash: "svelte-14245lp",
  code: ".floating-terminal.svelte-14245lp {width:700px;height:450px;background:rgba(0, 0, 0, 0.95);border:1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:8px;font-family:'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.terminal-header.svelte-14245lp {display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid color-mix(in srgb, var(--color-terminal-green) 20%, transparent);}.terminal-controls.svelte-14245lp {display:flex;gap:6px;}.terminal-control.svelte-14245lp {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-14245lp {background:var(--color-bubble-tea-red, #ff8585);}.terminal-control.minimize.svelte-14245lp {background:var(--color-bubble-tea-yellow, #ffd23a);}.terminal-control.maximize.svelte-14245lp {background:var(--color-bubble-tea-green, #6bcf7f);}.terminal-title.svelte-14245lp {color:white;font-size:14px;font-weight:600;}.terminal-status.svelte-14245lp {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-14245lp {padding:12px;height:calc(100% - 50px);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar {width:4px;}.terminal-body.svelte-14245lp::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar-thumb {background:color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:2px;}.terminal-prompt.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-green.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-blue.svelte-14245lp {color:var(--color-terminal-cyan);}"
};
function _p(r, e) {
  Ke(e, !0), Qe(r, rm);
  const a = s(e, "position", 19, () => [0, 2, 0]), n = s(e, "rotation", 19, () => [0, 0, 0]), l = s(e, "scale", 3, 1.5);
  let d, v = /* @__PURE__ */ ye(""), p = /* @__PURE__ */ ye(st([]));
  const y = {
    help: "🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear",
    matrix: "💚 Entering the Matrix... Reality.exe has stopped working",
    glitch: "⚡ System.error.404.reality.not.found",
    orbit: "🌍 Orbiting through cyberspace at lightspeed",
    stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1e3 + Math.random() * 5e3)} | Faces: ${Math.round(500 + Math.random() * 2e3)}`,
    whoami: "🤖 You are now part of the 3D matrix",
    ls: "📁 reality.exe  consciousness.dll  quantum_states/  void.txt",
    clear: "Terminal cleared"
  }, R = (ee) => {
    const _ = ee.trim().toLowerCase();
    if (_ === "clear") {
      W(p, [], !0), W(v, "");
      return;
    }
    const E = y[_] || `Command "${ee}" not found. Type "help" for available commands.`;
    W(
      p,
      [
        ...t(p),
        { command: _, output: E, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), W(v, ""), setTimeout(
      () => {
        d && (d.scrollTop = d.scrollHeight);
      },
      10
    );
  };
  wt(() => {
    if (setTimeout(() => R("help"), 1e3), typeof window < "u") {
      const ee = document.querySelector("canvas");
      ee && (ee.style.willChange = "transform");
    }
  });
  var h = tm(), I = _e(h);
  Et(I, () => It.PerspectiveCamera, (ee, _) => {
    _(ee, {
      makeDefault: !0,
      position: [8, 8, 12],
      fov: 40,
      children: (E, B) => {
        pi(E, {
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
  var L = m(I, 2);
  Et(L, () => It.AmbientLight, (ee, _) => {
    _(ee, { intensity: 0.6 });
  });
  var z = m(L, 2);
  Et(z, () => It.DirectionalLight, (ee, _) => {
    _(ee, { position: [10, 10, 5], intensity: 1.2, castShadow: !0 });
  });
  var M = m(z, 2);
  Et(M, () => It.Group, (ee, _) => {
    _(ee, {
      get position() {
        return a();
      },
      get rotation() {
        return n();
      },
      get scale() {
        return l();
      },
      children: (E, B) => {
        var F = Jg(), j = _e(F);
        Et(j, () => It.Mesh, (P, Q) => {
          Q(P, {
            children: (G, D) => {
              var T = Kg(), w = _e(T);
              Et(w, () => It.BoxGeometry, (C, X) => {
                X(C, { args: [6, 4, 0.2] });
              });
              var x = m(w, 2);
              Et(x, () => It.MeshPhysicalMaterial, (C, X) => {
                X(C, {
                  get color() {
                    return Me.backgrounds.secondary;
                  },
                  roughness: 0.1,
                  metalness: 0.8,
                  transmission: 0.1,
                  thickness: 0.5,
                  transparent: !0,
                  opacity: 0.9
                });
              }), o(G, T);
            },
            $$slots: { default: !0 }
          });
        });
        var V = m(j, 2);
        Et(V, () => It.Mesh, (P, Q) => {
          Q(P, {
            position: [0, 0, 0.1],
            children: (G, D) => {
              var T = Xg(), w = _e(T);
              Et(w, () => It.PlaneGeometry, (C, X) => {
                X(C, { args: [5.5, 3.5] });
              });
              var x = m(w, 2);
              Et(x, () => It.MeshBasicMaterial, (C, X) => {
                X(C, {
                  get color() {
                    return Me.backgrounds.primary;
                  },
                  transparent: !0,
                  opacity: 0.8
                });
              }), o(G, T);
            },
            $$slots: { default: !0 }
          });
        });
        var O = m(V, 2);
        xi(O, {
          position: [0, 0, 0.11],
          transform: !0,
          occlude: !0,
          scale: 0.08,
          distanceFactor: 10,
          children: (P, Q) => {
            var G = Qg(), D = m(i(G), 2), T = i(D);
            Ge(T, 17, () => t(p), (X) => X.timestamp, (X, K) => {
              var k = Zg(), u = i(k), b = i(u);
              b.textContent = "$";
              var re = m(b, 2), de = i(re), ue = m(re, 2), ve = i(ue), $ = m(u, 2), U = i($);
              A(
                (oe) => {
                  ie(de, t(K).command), ie(ve, oe), ie(U, t(K).output);
                },
                [() => t(K).timestamp.toLocaleTimeString()]
              ), o(X, k);
            });
            var w = m(T, 2), x = i(w);
            x.textContent = "$";
            var C = m(x, 2);
            C.__keydown = [Wg, R, v], tt(G, (X) => d = X, () => d), pr(C, () => t(v), (X) => W(v, X)), o(P, G);
          },
          $$slots: { default: !0 }
        }), o(E, F);
      },
      $$slots: { default: !0 }
    });
  });
  var f = m(M, 2);
  Et(f, () => It.Mesh, (ee, _) => {
    _(ee, {
      position: [4, 3, -2],
      rotation: [0.2, 0.4, 0.1],
      children: (E, B) => {
        var F = $g(), j = _e(F);
        Et(j, () => It.BoxGeometry, (O, P) => {
          P(O, { args: [1.5, 1.5, 1.5] });
        });
        var V = m(j, 2);
        Et(V, () => It.MeshPhysicalMaterial, (O, P) => {
          P(O, {
            get color() {
              return Me.terminal.matrix;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), o(E, F);
      },
      $$slots: { default: !0 }
    });
  });
  var q = m(f, 2);
  Et(q, () => It.Mesh, (ee, _) => {
    _(ee, {
      position: [-4, -2, 3],
      rotation: [-0.3, -0.2, 0.4],
      children: (E, B) => {
        var F = em(), j = _e(F);
        Et(j, () => It.BoxGeometry, (O, P) => {
          P(O, { args: [2, 2, 2] });
        });
        var V = m(j, 2);
        Et(V, () => It.MeshPhysicalMaterial, (O, P) => {
          P(O, {
            get color() {
              return Me.bubbleTea.yellow;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), o(E, F);
      },
      $$slots: { default: !0 }
    });
  }), o(r, h), Xe();
}
vt(["keydown"]);
var am = /* @__PURE__ */ c("<div> </div>"), nm = /* @__PURE__ */ c("<span></span>"), om = /* @__PURE__ */ c("<div> <!></div>"), im = /* @__PURE__ */ c('<div class="mt-4 svelte-7a6umo"><span class="text-white svelte-7a6umo">$</span> <span></span></div>'), lm = /* @__PURE__ */ c('<div><div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse svelte-7a6umo"></div></div> <div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg svelte-7a6umo"></div> <div class="relative z-10 space-y-1 svelte-7a6umo"><!> <!> <!></div> <div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-current opacity-[0.02] blur-xl svelte-7a6umo"></div></div></div>');
const sm = {
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
function wp(r, e) {
  Ke(e, !0), Qe(r, sm);
  const a = s(e, "messages", 19, () => []), n = s(e, "autoStart", 3, !0), l = s(e, "variant", 3, "classic"), d = s(e, "speed", 3, "normal"), v = s(e, "showCursor", 3, !0), p = s(e, "class", 3, ""), y = /* @__PURE__ */ dt(e, [
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
  let R = /* @__PURE__ */ ye(0), h = /* @__PURE__ */ ye(""), I = /* @__PURE__ */ ye(!1), L = /* @__PURE__ */ ye(!1), z = /* @__PURE__ */ ye(!0);
  const M = [
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
  ], f = a().length > 0 ? a() : M, q = {
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
  }, ee = {
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    system: "text-white font-bold"
  }, E = { slow: 80, normal: 40, fast: 15 }[d()], B = q[l()];
  let F, j = /* @__PURE__ */ ye(st([]));
  function V(k) {
    return k ? ee[k] : B.text;
  }
  const O = async (k, u = 50) => {
    W(h, "");
    for (let b = 0; b <= k.length; b++)
      W(h, k.slice(0, b), !0), await new Promise((re) => setTimeout(re, u));
    await new Promise((b) => setTimeout(b, 100));
  }, P = async () => {
    if (!t(I)) {
      W(I, !0), W(L, !1), W(R, 0), W(j, [], !0), W(h, "");
      for (let k = 0; k < f.length; k++) {
        const u = f[k];
        W(R, k, !0), u.text ? (await O(u.text, E), W(
          j,
          [
            ...t(j),
            { text: u.text, type: u.type }
          ],
          !0
        )) : W(j, [...t(j), { text: "", type: "info" }], !0), W(h, ""), F && (F.scrollTop = F.scrollHeight), await new Promise((b) => setTimeout(b, u.delay));
      }
      W(L, !0), W(I, !1), e.onComplete?.();
    }
  }, Q = () => {
    setInterval(
      () => {
        W(z, !t(z));
      },
      500
    );
  };
  wt(() => {
    Q(), n() && setTimeout(P, 200);
  });
  const G = () => P();
  var D = lm();
  Ze(
    D,
    (k) => ({ class: k, ...y }),
    [
      () => Z("relative w-full h-full p-6 overflow-auto", B.bg, B.text, B.font, "leading-relaxed text-sm", p())
    ],
    void 0,
    "svelte-7a6umo"
  );
  var T = m(i(D), 4), w = i(T);
  Ge(w, 17, () => t(j), Vr, (k, u) => {
    var b = am(), re = i(b);
    A(
      (de) => {
        N(b, 1, de, "svelte-7a6umo"), ie(re, t(u).text || " ");
      },
      [
        () => ne(Z("whitespace-pre-wrap", V(t(u).type), "animate-in fade-in duration-200"))
      ]
    ), o(k, b);
  });
  var x = m(w, 2);
  {
    var C = (k) => {
      var u = om(), b = i(u), re = m(b);
      {
        var de = (ue) => {
          var ve = nm();
          A(($) => N(ve, 1, $, "svelte-7a6umo"), [
            () => ne(Z("inline-block w-2 h-4 ml-1 border-r-2 animate-pulse", B.cursor))
          ]), o(ue, ve);
        };
        g(re, (ue) => {
          t(z) && v() && ue(de);
        });
      }
      A(
        (ue) => {
          N(u, 1, ue, "svelte-7a6umo"), ie(b, `${t(h) ?? ""} `);
        },
        [
          () => ne(Z("whitespace-pre-wrap", V(f[t(R)]?.type)))
        ]
      ), o(k, u);
    };
    g(x, (k) => {
      t(I) && t(h) && k(C);
    });
  }
  var X = m(x, 2);
  {
    var K = (k) => {
      var u = im(), b = m(i(u), 2);
      A((re) => N(b, 1, re, "svelte-7a6umo"), [
        () => ne(Z("inline-block w-2 h-4 ml-1 border-r-2", t(z) ? "opacity-100" : "opacity-0", B.cursor, "transition-opacity duration-100"))
      ]), o(k, u);
    };
    g(X, (k) => {
      t(L) && v() && k(K);
    });
  }
  return tt(D, (k) => F = k, () => F), o(r, D), Xe({ start: G });
}
var dm = /* @__PURE__ */ c("<canvas></canvas>");
const cm = {
  hash: "svelte-ophnba",
  code: "canvas.svelte-ophnba {display:block;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;}"
};
function yp(r, e) {
  Ke(e, !0), Qe(r, cm);
  const a = s(e, "variant", 3, "classic"), n = s(e, "speed", 3, "normal"), l = s(e, "density", 3, "medium"), d = s(e, "characters", 3, "matrix"), v = s(e, "glowEffect", 3, !0), p = s(e, "fadeEffect", 3, !0), y = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  let h, I, L, z = [];
  const M = {
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
  }, q = { slow: 100, normal: 50, fast: 20 }, ee = { low: 20, medium: 15, high: 10 }, _ = M[a()], E = f[d()], B = q[n()];
  ee[l()];
  const F = 14;
  let j = 0;
  const V = () => {
    if (h) {
      h.width = h.offsetWidth, h.height = h.offsetHeight, j = Math.floor(h.width / F), z = [];
      for (let T = 0; T < j; T++)
        z[T] = Math.random() * h.height;
    }
  }, O = () => {
    if (!(!I || !h)) {
      p() ? (I.fillStyle = _.background, I.fillRect(0, 0, h.width, h.height)) : I.clearRect(0, 0, h.width, h.height), I.font = `${F}px monospace`, I.textAlign = "center", v() && (I.shadowColor = _.primary, I.shadowBlur = 10);
      for (let T = 0; T < z.length; T++) {
        const w = E[Math.floor(Math.random() * E.length)];
        if (I.fillStyle = _.primary, I.fillText(w, T * F + F / 2, z[T]), z[T] > F) {
          I.fillStyle = _.secondary;
          const x = E[Math.floor(Math.random() * E.length)];
          I.fillText(x, T * F + F / 2, z[T] - F);
        }
        (z[T] > h.height || Math.random() > 0.975) && (z[T] = 0), z[T] += F;
      }
    }
  }, P = () => {
    O(), L = setTimeout(
      () => {
        requestAnimationFrame(P);
      },
      B
    );
  }, Q = () => {
    h && (I = h.getContext("2d"), I && (V(), P()));
  }, G = () => {
    L && clearTimeout(L);
  };
  wt(() => {
    Q();
    const T = () => {
      V();
    };
    return window.addEventListener("resize", T), () => {
      G(), window.removeEventListener("resize", T);
    };
  });
  var D = dm();
  Ze(D, (T) => ({ class: T, ...R }), [() => Z("w-full h-full bg-black", y())], void 0, "svelte-ophnba"), tt(D, (T) => h = T, () => h), o(r, D), Xe();
}
var vm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), um = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), fm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), bm = /* @__PURE__ */ c("<h1><span> <!></span> <!> <!></h1>"), gm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), mm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), hm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), pm = /* @__PURE__ */ c("<h2><span> <!></span> <!> <!></h2>"), xm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), _m = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), wm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), ym = /* @__PURE__ */ c("<h3><span> <!></span> <!> <!></h3>"), km = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Cm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Em = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Sm = /* @__PURE__ */ c("<span><span> <!></span> <!> <!></span>"), Tm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Mm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Am = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), zm = /* @__PURE__ */ c("<div><span> <!></span> <!> <!></div>"), Im = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Pm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Lm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Dm = /* @__PURE__ */ c("<div><span> <!></span> <!> <!></div>");
const jm = {
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
function kp(r, e) {
  Ke(e, !0), Qe(r, jm);
  const a = s(e, "variant", 3, "macintosh"), n = s(e, "size", 3, "md"), l = s(e, "animated", 3, !0), d = s(e, "typewriter", 3, !1), v = s(e, "scanlines", 3, !0), p = s(e, "glow", 3, !0), y = s(e, "flicker", 3, !1), R = s(e, "chromatic", 3, !1), h = s(e, "breathing", 3, !1), I = s(e, "class", 3, ""), L = s(e, "element", 3, "p"), z = /* @__PURE__ */ dt(e, [
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
  let M = /* @__PURE__ */ ye(""), f = /* @__PURE__ */ ye(!0), q = /* @__PURE__ */ ye(0);
  const ee = {
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
  }, _ = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl"
  }, E = ee[a()];
  wt(() => {
    if (d()) {
      const Q = setInterval(
        () => {
          t(q) < e.text.length ? (W(M, e.text.slice(0, t(q) + 1), !0), Sa(q)) : clearInterval(Q);
        },
        50 + Math.random() * 100
      ), G = setInterval(
        () => {
          W(f, !t(f));
        },
        500
      );
      return () => {
        clearInterval(Q), clearInterval(G);
      };
    } else
      W(M, e.text, !0);
  });
  const B = Z("relative inline-block transition-all duration-300", E.font, E.color, _[n()], p() && E.shadow, l() && "transform-gpu will-change-transform", v() && "retro-scanlines", y() && "retro-flicker", R() && "retro-chromatic", I()), F = Z("relative inline-block p-4 overflow-hidden", E.bg, E.border, l() && "transition-all duration-500");
  var j = Se(), V = _e(j);
  {
    var O = (Q) => {
      var G = bm();
      Ze(G, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
      var D = i(G), T = i(D), w = m(T);
      {
        var x = (u) => {
          var b = vm();
          o(u, b);
        };
        g(w, (u) => {
          d() && t(f) && u(x);
        });
      }
      var C = m(D, 2);
      {
        var X = (u) => {
          var b = um();
          o(u, b);
        };
        g(C, (u) => {
          v() && u(X);
        });
      }
      var K = m(C, 2);
      {
        var k = (u) => {
          var b = fm();
          o(u, b);
        };
        g(K, (u) => {
          a() === "crt" && u(k);
        });
      }
      Ie(G, (u, b) => At?.(u, b), () => ({
        enabled: l(),
        duration: 300,
        scale: 1.02,
        borderRadius: "12px"
      })), Ie(G, (u, b) => jt?.(u, b), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), A(() => {
        N(D, 1, ne(B), "svelte-13rlfrj"), ht(D, `filter: ${E.filter ?? ""}`), ie(T, `${(d() ? t(M) : e.text) ?? ""} `);
      }), o(Q, G);
    }, P = (Q) => {
      var G = Se(), D = _e(G);
      {
        var T = (x) => {
          var C = pm();
          Ze(C, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
          var X = i(C), K = i(X), k = m(K);
          {
            var u = (ve) => {
              var $ = gm();
              o(ve, $);
            };
            g(k, (ve) => {
              d() && t(f) && ve(u);
            });
          }
          var b = m(X, 2);
          {
            var re = (ve) => {
              var $ = mm();
              o(ve, $);
            };
            g(b, (ve) => {
              v() && ve(re);
            });
          }
          var de = m(b, 2);
          {
            var ue = (ve) => {
              var $ = hm();
              o(ve, $);
            };
            g(de, (ve) => {
              a() === "crt" && ve(ue);
            });
          }
          Ie(C, (ve, $) => At?.(ve, $), () => ({
            enabled: l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "12px"
          })), Ie(C, (ve, $) => jt?.(ve, $), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), A(() => {
            N(X, 1, ne(B), "svelte-13rlfrj"), ht(X, `filter: ${E.filter ?? ""}`), ie(K, `${(d() ? t(M) : e.text) ?? ""} `);
          }), o(x, C);
        }, w = (x) => {
          var C = Se(), X = _e(C);
          {
            var K = (u) => {
              var b = ym();
              Ze(b, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
              var re = i(b), de = i(re), ue = m(de);
              {
                var ve = (te) => {
                  var J = xm();
                  o(te, J);
                };
                g(ue, (te) => {
                  d() && t(f) && te(ve);
                });
              }
              var $ = m(re, 2);
              {
                var U = (te) => {
                  var J = _m();
                  o(te, J);
                };
                g($, (te) => {
                  v() && te(U);
                });
              }
              var oe = m($, 2);
              {
                var S = (te) => {
                  var J = wm();
                  o(te, J);
                };
                g(oe, (te) => {
                  a() === "crt" && te(S);
                });
              }
              Ie(b, (te, J) => At?.(te, J), () => ({
                enabled: l(),
                duration: 300,
                scale: 1.02,
                borderRadius: "12px"
              })), Ie(b, (te, J) => jt?.(te, J), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), A(() => {
                N(re, 1, ne(B), "svelte-13rlfrj"), ht(re, `filter: ${E.filter ?? ""}`), ie(de, `${(d() ? t(M) : e.text) ?? ""} `);
              }), o(u, b);
            }, k = (u) => {
              var b = Se(), re = _e(b);
              {
                var de = (ve) => {
                  var $ = Sm();
                  Ze($, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
                  var U = i($), oe = i(U), S = m(oe);
                  {
                    var te = (ae) => {
                      var ce = km();
                      o(ae, ce);
                    };
                    g(S, (ae) => {
                      d() && t(f) && ae(te);
                    });
                  }
                  var J = m(U, 2);
                  {
                    var Y = (ae) => {
                      var ce = Cm();
                      o(ae, ce);
                    };
                    g(J, (ae) => {
                      v() && ae(Y);
                    });
                  }
                  var le = m(J, 2);
                  {
                    var H = (ae) => {
                      var ce = Em();
                      o(ae, ce);
                    };
                    g(le, (ae) => {
                      a() === "crt" && ae(H);
                    });
                  }
                  Ie($, (ae, ce) => At?.(ae, ce), () => ({
                    enabled: l(),
                    duration: 300,
                    scale: 1.02,
                    borderRadius: "12px"
                  })), Ie($, (ae, ce) => jt?.(ae, ce), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), A(() => {
                    N(U, 1, ne(B), "svelte-13rlfrj"), ht(U, `filter: ${E.filter ?? ""}`), ie(oe, `${(d() ? t(M) : e.text) ?? ""} `);
                  }), o(ve, $);
                }, ue = (ve) => {
                  var $ = Se(), U = _e($);
                  {
                    var oe = (te) => {
                      var J = zm();
                      Ze(J, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
                      var Y = i(J), le = i(Y), H = m(le);
                      {
                        var ae = (be) => {
                          var ge = Tm();
                          o(be, ge);
                        };
                        g(H, (be) => {
                          d() && t(f) && be(ae);
                        });
                      }
                      var ce = m(Y, 2);
                      {
                        var se = (be) => {
                          var ge = Mm();
                          o(be, ge);
                        };
                        g(ce, (be) => {
                          v() && be(se);
                        });
                      }
                      var he = m(ce, 2);
                      {
                        var fe = (be) => {
                          var ge = Am();
                          o(be, ge);
                        };
                        g(he, (be) => {
                          a() === "crt" && be(fe);
                        });
                      }
                      Ie(J, (be, ge) => At?.(be, ge), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Ie(J, (be, ge) => jt?.(be, ge), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), A(() => {
                        N(Y, 1, ne(B), "svelte-13rlfrj"), ht(Y, `filter: ${E.filter ?? ""}`), ie(le, `${(d() ? t(M) : e.text) ?? ""} `);
                      }), o(te, J);
                    }, S = (te) => {
                      var J = Dm();
                      Ze(J, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
                      var Y = i(J), le = i(Y), H = m(le);
                      {
                        var ae = (be) => {
                          var ge = Im();
                          o(be, ge);
                        };
                        g(H, (be) => {
                          d() && t(f) && be(ae);
                        });
                      }
                      var ce = m(Y, 2);
                      {
                        var se = (be) => {
                          var ge = Pm();
                          o(be, ge);
                        };
                        g(ce, (be) => {
                          v() && be(se);
                        });
                      }
                      var he = m(ce, 2);
                      {
                        var fe = (be) => {
                          var ge = Lm();
                          o(be, ge);
                        };
                        g(he, (be) => {
                          a() === "crt" && be(fe);
                        });
                      }
                      Ie(J, (be, ge) => At?.(be, ge), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Ie(J, (be, ge) => jt?.(be, ge), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), A(() => {
                        N(Y, 1, ne(B), "svelte-13rlfrj"), ht(Y, `filter: ${E.filter ?? ""}`), ie(le, `${(d() ? t(M) : e.text) ?? ""} `);
                      }), o(te, J);
                    };
                    g(
                      U,
                      (te) => {
                        L() === "div" ? te(oe) : te(S, !1);
                      },
                      !0
                    );
                  }
                  o(ve, $);
                };
                g(
                  re,
                  (ve) => {
                    L() === "span" ? ve(de) : ve(ue, !1);
                  },
                  !0
                );
              }
              o(u, b);
            };
            g(
              X,
              (u) => {
                L() === "h3" ? u(K) : u(k, !1);
              },
              !0
            );
          }
          o(x, C);
        };
        g(
          D,
          (x) => {
            L() === "h2" ? x(T) : x(w, !1);
          },
          !0
        );
      }
      o(Q, G);
    };
    g(V, (Q) => {
      L() === "h1" ? Q(O) : Q(P, !1);
    });
  }
  o(r, j), Xe();
}
var Rm = /* @__PURE__ */ c('<span class="bitmap-char svelte-1cfjpo6"><!></span>'), Nm = /* @__PURE__ */ c('<span class="cursor svelte-1cfjpo6">█</span>'), Om = /* @__PURE__ */ c(" <!>", 1), qm = /* @__PURE__ */ c("<span><!></span>");
const Bm = {
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
function Cp(r, e) {
  Ke(e, !0), Qe(r, Bm);
  const a = s(e, "text", 3, ""), n = s(e, "variant", 3, "bitmap"), l = s(e, "size", 3, "md"), d = s(e, "color", 3, "green");
  s(e, "glow", 3, !0);
  const v = s(e, "scanlines", 3, !1), p = s(e, "flicker", 3, !1), y = s(e, "animate", 3, !1), R = s(e, "typewriter", 3, !1), h = s(e, "speed", 3, 50), I = s(e, "class", 3, "");
  let L = /* @__PURE__ */ ye(""), z = /* @__PURE__ */ ye(0), M;
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
  }, q = {
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
  }, ee = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem"
  }, _ = Z("retro-text inline-block relative", { "animate-flicker": p(), scanlines: v() }, I());
  function E() {
    if (!R() || !a()) return;
    W(L, ""), W(z, 0);
    const P = setInterval(
      () => {
        t(z) < a().length ? (W(L, t(L) + a()[t(z)]), Sa(z)) : clearInterval(P);
      },
      h()
    );
  }
  bt(() => {
    R() ? E() : W(L, a());
  }), bt(() => {
    if (M) {
      const P = f[n()], Q = q[d()];
      M.style.setProperty("--retro-font-family", P.fontFamily), M.style.setProperty("--retro-font-weight", P.fontWeight), M.style.setProperty("--retro-letter-spacing", P.letterSpacing), M.style.setProperty("--retro-line-height", P.lineHeight), M.style.setProperty("--retro-font-size", ee[l()]), M.style.setProperty("--retro-color", Q.color), M.style.setProperty("--retro-shadow-color", Q.shadowColor), M.style.setProperty("--retro-text-transform", P.textTransform || "none");
    }
  });
  function B(P) {
    return (n() === "commodore" || n() === "atari") && {
      " ": "&nbsp;",
      A: "█▀█<br>█▀█<br>█&nbsp;█",
      E: "███<br>██&nbsp;<br>███",
      I: "███<br>&nbsp;█&nbsp;<br>███",
      O: "███<br>█&nbsp;█<br>███",
      U: "█&nbsp;█<br>█&nbsp;█<br>███"
    }[P.toUpperCase()] || P;
  }
  wt(() => {
    y() && M && (M.style.opacity = "0", setTimeout(
      () => {
        M.style.transition = "opacity 0.5s ease-in-out", M.style.opacity = "1";
      },
      100
    ));
  });
  var F = qm(), j = i(F);
  {
    var V = (P) => {
      var Q = Se(), G = _e(Q);
      ot(G, () => e.children), o(P, Q);
    }, O = (P) => {
      var Q = Se(), G = _e(Q);
      {
        var D = (w) => {
          var x = Se(), C = _e(x);
          Ge(C, 17, () => t(L).split(""), Vr, (X, K) => {
            var k = Rm(), u = i(k);
            Pa(u, () => Ra(B(t(K)))), A(() => xe(k, "data-char", t(K))), o(X, k);
          }), o(w, x);
        }, T = (w) => {
          var x = Om(), C = _e(x), X = m(C);
          {
            var K = (k) => {
              var u = Nm();
              o(k, u);
            };
            g(X, (k) => {
              R() && t(z) < a().length && k(K);
            });
          }
          A(() => ie(C, `${t(L) ?? ""} `)), o(w, x);
        };
        g(
          G,
          (w) => {
            n() === "commodore" || n() === "atari" ? w(D) : w(T, !1);
          },
          !0
        );
      }
      o(P, Q);
    };
    g(j, (P) => {
      e.children ? P(V) : P(O, !1);
    });
  }
  tt(F, (P) => M = P, () => M), A(() => {
    N(F, 1, ne(_), "svelte-1cfjpo6"), xe(F, "aria-label", a());
  }), o(r, F), Xe();
}
var Fm = /* @__PURE__ */ c("<div> </div>"), Hm = /* @__PURE__ */ c('<div class="flex items-center svelte-nrft94"><span class="animate-pulse svelte-nrft94">_</span></div>'), Vm = /* @__PURE__ */ c('<div class="mt-4 space-y-1 svelte-nrft94"><div>System initialization complete.</div> <div class="flex items-center svelte-nrft94"><span>user@hackers-brand:~$</span> <span class="animate-pulse ml-1 svelte-nrft94">_</span></div></div>'), Gm = /* @__PURE__ */ c('<div class="absolute bottom-6 left-6 right-6 svelte-nrft94"><div class="flex items-center space-x-2 text-xs svelte-nrft94"><span>Loading:</span> <div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden svelte-nrft94"><div></div></div> <span> </span></div></div>'), Um = /* @__PURE__ */ c('<div><div class="absolute inset-0 opacity-10 pointer-events-none svelte-nrft94"><div class="w-full h-full svelte-nrft94" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"></div></div> <div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none svelte-nrft94"></div> <div class="relative z-10 space-y-1 svelte-nrft94"><!> <!> <!></div> <!> <div class="absolute inset-0 pointer-events-none svelte-nrft94"><div class="w-full h-full opacity-[0.02] blur-2xl svelte-nrft94" style="background-color: currentColor;"></div></div></div>');
const Ym = {
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
function Ep(r, e) {
  Ke(e, !0), Qe(r, Ym);
  const a = s(e, "autoStart", 3, !0), n = s(e, "variant", 3, "retro"), l = s(e, "showBIOS", 3, !0), d = s(e, "fastBoot", 3, !1), v = s(e, "class", 3, ""), p = /* @__PURE__ */ dt(e, [
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
  let y = /* @__PURE__ */ ye(0), R = /* @__PURE__ */ ye(!1), h = /* @__PURE__ */ ye(!1), I = /* @__PURE__ */ ye(0);
  const z = {
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
  }[n()], M = [
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
  ], q = l() ? [...M, "", ...f] : f, ee = d() ? 50 : 150, _ = async () => {
    if (!t(R)) {
      W(R, !0), W(h, !1), W(y, 0), W(I, 0);
      for (let T = 0; T < q.length; T++) {
        W(y, T, !0), W(I, T / q.length * 100);
        let w = ee;
        q[T].includes("PASS") || q[T].includes("OK") ? w = d() ? 30 : 100 : q[T].includes("[") && (w = d() ? 20 : 80), await new Promise((x) => setTimeout(x, w));
      }
      W(h, !0), W(R, !1), W(I, 100), e.onComplete?.();
    }
  };
  wt(() => {
    a() && setTimeout(_, 300);
  });
  const E = (T) => T.includes("PASS") || T.includes("OK") || T.includes("ready") ? z.success : T.includes("FAIL") || T.includes("ERROR") ? z.error : T.includes("Copyright") || T.includes("BIOS") || T.includes("GRUB") ? z.accent : z.text;
  var B = Um();
  Ze(
    B,
    (T) => ({ class: T, ...p }),
    [
      () => Z("relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden", z.bg, z.text, v())
    ],
    void 0,
    "svelte-nrft94"
  );
  var F = m(i(B), 4), j = i(F);
  Ge(j, 17, () => q.slice(0, t(y) + 1), Vr, (T, w, x) => {
    var C = Fm(), X = i(C);
    A(
      (K) => {
        N(C, 1, K, "svelte-nrft94"), ie(X, t(w) || " ");
      },
      [
        () => ne(Z("whitespace-pre-wrap transition-all duration-200", E(t(w)), x === t(y) && t(R) ? "animate-pulse" : ""))
      ]
    ), o(T, C);
  });
  var V = m(j, 2);
  {
    var O = (T) => {
      var w = Hm();
      o(T, w);
    };
    g(V, (T) => {
      t(R) && T(O);
    });
  }
  var P = m(V, 2);
  {
    var Q = (T) => {
      var w = Vm(), x = i(w), C = m(x, 2), X = i(C);
      A(() => {
        N(x, 1, ne(z.success), "svelte-nrft94"), N(X, 1, ne(z.accent), "svelte-nrft94");
      }), o(T, w);
    };
    g(P, (T) => {
      t(h) && T(Q);
    });
  }
  var G = m(F, 2);
  {
    var D = (T) => {
      var w = Gm(), x = i(w), C = i(x), X = m(C, 2), K = i(X), k = m(X, 2), u = i(k);
      A(
        (b, re) => {
          N(C, 1, ne(z.accent), "svelte-nrft94"), N(K, 1, b, "svelte-nrft94"), ht(K, `width: ${t(I) ?? ""}%; background-color: currentColor;`), N(k, 1, ne(z.text), "svelte-nrft94"), ie(u, `${re ?? ""}%`);
        },
        [
          () => ne(Z("h-full transition-all duration-300 rounded-full", z.success)),
          () => Math.round(t(I))
        ]
      ), o(T, w);
    };
    g(G, (T) => {
      t(R) && !d() && T(D);
    });
  }
  o(r, B), Xe();
}
var Wm = /* @__PURE__ */ c('<div class="flex items-center justify-center p-8 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 svelte-1884ls5"></div> <span class="text-white/70 svelte-1884ls5">Loading...</span></div></div>'), Km = /* @__PURE__ */ c('<div class="text-sm text-red-400/70 svelte-1884ls5"> </div>'), Xm = /* @__PURE__ */ c('<div role="alert" aria-live="assertive"><div class="space-y-4 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="flex-shrink-0 svelte-1884ls5"><svg class="w-6 h-6 text-red-500 svelte-1884ls5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="svelte-1884ls5"></path></svg></div> <div class="svelte-1884ls5"><h3 class="text-lg font-semibold text-red-600 svelte-1884ls5"> </h3> <p class="text-sm text-red-500/80 svelte-1884ls5"> </p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1884ls5"><!> <!></div> <div class="text-xs text-red-400/50 svelte-1884ls5"><!></div></div></div>');
const Zm = {
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
function Sp(r, e) {
  Ke(e, !0), Qe(r, Zm);
  const a = s(e, "variant", 3, "glass"), n = s(e, "animate", 3, !0), l = s(
    e,
    "timeout",
    3,
    1e4
    // 10 seconds
  ), d = s(e, "maxRetries", 3, 3), v = s(e, "class", 3, "");
  let p = /* @__PURE__ */ ye("idle"), y = /* @__PURE__ */ ye(null), R = /* @__PURE__ */ ye(null), h = /* @__PURE__ */ ye(0), I = null;
  async function L(O) {
    if (O) {
      W(p, "loading"), W(y, null), W(R, null), l() > 0 && (I = setTimeout(
        () => {
          t(p) === "loading" && (W(p, "timeout"), W(y, new Error(`Operation timed out after ${l()}ms`), !0), e.onError?.(t(y)));
        },
        l()
      ));
      try {
        W(R, await O, !0), W(p, "success");
      } catch (P) {
        W(y, P instanceof Error ? P : new Error(String(P)), !0), W(p, "error"), e.onError?.(t(y));
      } finally {
        I && (clearTimeout(I), I = null);
      }
    }
  }
  async function z() {
    if (!(t(h) >= d()))
      if (Sa(h), e.onRetry) {
        const O = e.onRetry();
        await L(O);
      } else e.promise && await L(e.promise);
  }
  function M() {
    W(p, "idle"), W(y, null), W(R, null), W(h, 0), I && (clearTimeout(I), I = null);
  }
  bt(() => {
    e.promise && L(e.promise);
  }), wt(() => () => {
    I && clearTimeout(I);
  });
  const q = Z("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[a()], v());
  function ee(O) {
    switch (O) {
      case "timeout":
        return "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
      case "network":
        return "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0";
      default:
        return "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    }
  }
  function _(O) {
    return O.message.includes("timeout") ? "timeout" : O.message.includes("fetch") || O.message.includes("network") ? "network" : "general";
  }
  function E(O) {
    switch (_(O)) {
      case "timeout":
        return "The operation took too long to complete";
      case "network":
        return "Network connection failed";
      default:
        return O.message || "An unexpected error occurred";
    }
  }
  var B = Se(), F = _e(B);
  {
    var j = (O) => {
      var P = Se(), Q = _e(P);
      {
        var G = (T) => {
          var w = Se(), x = _e(w);
          ot(x, () => e.loading), o(T, w);
        }, D = (T) => {
          var w = Wm();
          $e(1, w, () => mt, () => n() ? { duration: 200 } : void 0), o(T, w);
        };
        g(Q, (T) => {
          e.loading ? T(G) : T(D, !1);
        });
      }
      o(O, P);
    }, V = (O) => {
      var P = Se(), Q = _e(P);
      {
        var G = (T) => {
          var w = Se(), x = _e(w);
          {
            var C = (K) => {
              var k = Se(), u = _e(k);
              ot(u, () => e.fallback, () => ({
                error: t(y),
                retry: z,
                reset: M,
                retryCount: t(h),
                maxRetries: d(),
                state: t(p)
              })), o(K, k);
            }, X = (K) => {
              var k = Xm(), u = i(k), b = i(u), re = i(b), de = i(re), ue = i(de), ve = m(re, 2), $ = i(ve), U = i($), oe = m($, 2), S = i(oe), te = m(b, 2);
              g(te, (ge) => {
                t(y);
              });
              var J = m(te, 2);
              {
                var Y = (ge) => {
                  var Ce = Km(), Pe = i(Ce);
                  A(() => ie(Pe, `Retry attempt ${t(h) ?? ""} of ${d() ?? ""}`)), o(ge, Ce);
                };
                g(J, (ge) => {
                  t(h) > 0 && ge(Y);
                });
              }
              var le = m(J, 2), H = i(le);
              {
                var ae = (ge) => {
                  er(ge, {
                    variant: "glass",
                    size: "sm",
                    onclick: z,
                    class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                    children: (Ce, Pe) => {
                      var Be = Ct();
                      A(() => ie(Be, t(p) === "timeout" ? "Try Again" : "Retry")), o(Ce, Be);
                    },
                    $$slots: { default: !0 }
                  });
                };
                g(H, (ge) => {
                  t(h) < d() && (e.onRetry || e.promise) && ge(ae);
                });
              }
              var ce = m(H, 2);
              er(ce, {
                variant: "glass",
                size: "sm",
                onclick: M,
                class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
                children: (ge, Ce) => {
                  var Pe = Ct("Reset");
                  o(ge, Pe);
                },
                $$slots: { default: !0 }
              });
              var se = m(le, 2), he = i(se);
              {
                var fe = (ge) => {
                  var Ce = Ct();
                  A(() => ie(Ce, `The operation exceeded the ${l() / 1e3}s timeout limit.`)), o(ge, Ce);
                }, be = (ge) => {
                  var Ce = Se(), Pe = _e(Ce);
                  {
                    var Be = (we) => {
                      var pe = Ct("Check your internet connection and try again.");
                      o(we, pe);
                    }, je = (we) => {
                      var pe = Ct("If the problem persists, please contact support.");
                      o(we, pe);
                    };
                    g(
                      Pe,
                      (we) => {
                        _(t(y)) === "network" ? we(Be) : we(je, !1);
                      },
                      !0
                    );
                  }
                  o(ge, Ce);
                };
                g(he, (ge) => {
                  t(p) === "timeout" ? ge(fe) : ge(be, !1);
                });
              }
              A(
                (ge, Ce) => {
                  N(k, 1, ne(q), "svelte-1884ls5"), xe(ue, "d", ge), ie(U, t(p) === "timeout" ? "Operation Timeout" : "Request Failed"), ie(S, Ce);
                },
                [
                  () => ee(_(t(y))),
                  () => t(y) ? E(t(y)) : "An error occurred while processing your request"
                ]
              ), $e(1, k, () => mt, () => n() ? { duration: 300 } : void 0), o(K, k);
            };
            g(x, (K) => {
              e.fallback ? K(C) : K(X, !1);
            });
          }
          o(T, w);
        }, D = (T) => {
          var w = Se(), x = _e(w);
          {
            var C = (K) => {
              var k = Se(), u = _e(k);
              {
                var b = (re) => {
                  var de = Se(), ue = _e(de);
                  ot(ue, () => e.children, () => ({ result: t(R) })), o(re, de);
                };
                g(u, (re) => {
                  e.children && re(b);
                });
              }
              o(K, k);
            }, X = (K) => {
              var k = Se(), u = _e(k);
              {
                var b = (re) => {
                  var de = Se(), ue = _e(de);
                  ot(ue, () => e.children), o(re, de);
                };
                g(u, (re) => {
                  e.children && re(b);
                });
              }
              o(K, k);
            };
            g(
              x,
              (K) => {
                t(p) === "success" ? K(C) : K(X, !1);
              },
              !0
            );
          }
          o(T, w);
        };
        g(
          Q,
          (T) => {
            t(p) === "error" || t(p) === "timeout" ? T(G) : T(D, !1);
          },
          !0
        );
      }
      o(O, P);
    };
    g(F, (O) => {
      t(p) === "loading" ? O(j) : O(V, !1);
    });
  }
  o(r, B), Xe();
}
var Qm = /* @__PURE__ */ c('<details class="mt-3 svelte-1q83gw3"><summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400 svelte-1q83gw3">Stack Trace</summary> <pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40 svelte-1q83gw3"> </pre></details>'), Jm = /* @__PURE__ */ c('<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 svelte-1q83gw3"><p class="font-mono text-sm text-red-400 svelte-1q83gw3"> </p> <!></div>'), $m = /* @__PURE__ */ c('<div class="text-sm text-red-400/70 svelte-1q83gw3"> </div>'), eh = /* @__PURE__ */ c('<div class="space-y-4 svelte-1q83gw3"><div class="flex items-center gap-3 svelte-1q83gw3"><div class="flex-shrink-0 svelte-1q83gw3"><svg class="w-6 h-6 text-red-500 svelte-1q83gw3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1q83gw3"></path></svg></div> <div class="svelte-1q83gw3"><h3 class="text-lg font-semibold text-red-600 svelte-1q83gw3">Something went wrong</h3> <p class="text-sm text-red-500/80 svelte-1q83gw3">A component error occurred and was caught by the error boundary</p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1q83gw3"><!> <!> <!></div> <!></div>'), th = /* @__PURE__ */ c('<div role="alert" aria-live="assertive"><!></div>');
const rh = {
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
function Tp(r, e) {
  Ke(e, !0), Qe(r, rh);
  const a = s(e, "showDetails", 3, !1), n = s(e, "variant", 3, "glass"), l = s(e, "animate", 3, !0), d = s(e, "retryable", 3, !0), v = s(e, "class", 3, "");
  let p = /* @__PURE__ */ ye(!1), y = /* @__PURE__ */ ye(null), R = /* @__PURE__ */ ye(null), h = /* @__PURE__ */ ye(0), I = /* @__PURE__ */ ye(!1);
  const L = 3;
  function z(P, Q) {
    W(p, !0), W(y, P, !0), W(R, Q, !0), e.onError?.(P, Q), console.error("Component Error Boundary caught an error:", P), Q && console.error("Error info:", Q);
  }
  function M() {
    t(h) < L && (W(p, !1), W(y, null), W(R, null), Sa(h));
  }
  function f() {
    W(p, !1), W(y, null), W(R, null), W(h, 0), W(I, !1);
  }
  const ee = Z("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[n()], v());
  wt(() => {
    const P = (G) => {
      z(new Error(`Unhandled promise rejection: ${G.reason}`)), G.preventDefault();
    }, Q = (G) => {
      z(new Error(G.message), {
        filename: G.filename,
        lineno: G.lineno,
        colno: G.colno
      });
    };
    return window.addEventListener("unhandledrejection", P), window.addEventListener("error", Q), () => {
      window.removeEventListener("unhandledrejection", P), window.removeEventListener("error", Q);
    };
  });
  function _(P) {
    return `${P.name}: ${P.message}`;
  }
  function E(P) {
    return P.stack || "No stack trace available";
  }
  function B() {
    return t(h) === 0 ? "" : t(h) >= L ? `Maximum retry attempts reached (${L})` : `Retry attempt ${t(h)} of ${L}`;
  }
  var F = Se(), j = _e(F);
  {
    var V = (P) => {
      var Q = th(), G = i(Q);
      {
        var D = (w) => {
          var x = Se(), C = _e(x);
          ot(C, () => e.fallback, () => ({
            error: t(y),
            retry: M,
            reset: f,
            retryCount: t(h),
            maxRetries: L
          })), o(w, x);
        }, T = (w) => {
          var x = eh(), C = m(i(x), 2);
          {
            var X = (U) => {
              var oe = Jm(), S = i(oe), te = i(S), J = m(S, 2);
              {
                var Y = (le) => {
                  var H = Qm(), ae = m(i(H), 2), ce = i(ae);
                  A((se) => ie(ce, se), [() => E(t(y))]), o(le, H);
                };
                g(J, (le) => {
                  a() && t(I) && le(Y);
                });
              }
              A((le) => ie(te, le), [() => _(t(y))]), o(U, oe);
            };
            g(C, (U) => {
              t(y) && U(X);
            });
          }
          var K = m(C, 2);
          {
            var k = (U) => {
              var oe = $m(), S = i(oe);
              A((te) => ie(S, te), [B]), o(U, oe);
            };
            g(K, (U) => {
              t(h) > 0 && U(k);
            });
          }
          var u = m(K, 2), b = i(u);
          {
            var re = (U) => {
              er(U, {
                variant: "glass",
                size: "sm",
                onclick: M,
                class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                children: (oe, S) => {
                  var te = Ct("Try Again");
                  o(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            g(b, (U) => {
              d() && t(h) < L && U(re);
            });
          }
          var de = m(b, 2);
          er(de, {
            variant: "glass",
            size: "sm",
            onclick: f,
            class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
            children: (U, oe) => {
              var S = Ct("Reset");
              o(U, S);
            },
            $$slots: { default: !0 }
          });
          var ue = m(de, 2);
          {
            var ve = (U) => {
              er(U, {
                variant: "glass",
                size: "sm",
                onclick: () => W(I, !t(I)),
                class: "bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30",
                children: (oe, S) => {
                  var te = Ct();
                  A(() => ie(te, `${t(I) ? "Hide" : "Show"} Details`)), o(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            g(ue, (U) => {
              a() && U(ve);
            });
          }
          var $ = m(u, 2);
          g($, (U) => {
          }), o(w, x);
        };
        g(G, (w) => {
          e.fallback ? w(D) : w(T, !1);
        });
      }
      A(() => N(Q, 1, ne(ee), "svelte-1q83gw3")), $e(1, Q, () => kt, () => l() ? { duration: 300, blur: "sm" } : void 0), o(P, Q);
    }, O = (P) => {
      var Q = Se(), G = _e(Q);
      {
        var D = (T) => {
          var w = Se(), x = _e(w);
          ot(x, () => e.children), o(T, w);
        };
        g(G, (T) => {
          e.children && T(D);
        });
      }
      o(P, Q);
    };
    g(j, (P) => {
      t(p) ? P(V) : P(O, !1);
    });
  }
  o(r, F), Xe();
}
function ah(r, e, a) {
  W(e, !0), a.onDismiss?.();
}
var nh = /* @__PURE__ */ c('<li class="text-sm text-red-500"> </li>'), oh = /* @__PURE__ */ c('<li class="flex items-start gap-2 svelte-12vbusp"><div class="flex-shrink-0 mt-1"><svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div> <div class="min-w-0"><span class="text-sm font-medium text-red-600"> </span> <ul class="mt-1 space-y-1"></ul></div></li>'), ih = /* @__PURE__ */ c('<button class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors svelte-12vbusp" aria-label="Dismiss errors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), lh = /* @__PURE__ */ c('<div role="alert" aria-live="polite"><div class="flex items-start gap-3"><div class="flex-shrink-0 mt-0.5"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-semibold text-red-600 mb-2"> </h3> <ul class="space-y-2 svelte-12vbusp"></ul></div> <!></div></div>'), sh = /* @__PURE__ */ c('<p class="text-sm text-red-500 flex items-center gap-1 svelte-12vbusp"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> </p>'), dh = /* @__PURE__ */ c('<div class="mt-1"></div>'), ch = /* @__PURE__ */ c("<!> <!> <!>", 1);
const vh = {
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
function Mp(r, e) {
  Ke(e, !0), Qe(r, vh);
  const a = s(e, "errors", 19, () => []), n = s(e, "showSummary", 3, !0), l = s(e, "variant", 3, "glass"), d = s(e, "animate", 3, !0), v = s(e, "dismissible", 3, !1), p = s(e, "class", 3, "");
  let y = /* @__PURE__ */ ye(!1);
  const R = /* @__PURE__ */ Ee(() => a().length > 0 && !t(y)), h = /* @__PURE__ */ Ee(() => a().reduce(
    (j, V) => (j[V.field] || (j[V.field] = []), j[V.field].push(V), j),
    {}
  )), L = Z("rounded-brand p-4 mb-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[l()], p());
  function z(j) {
    return j.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^\w/, (V) => V.toUpperCase()).trim();
  }
  function M(j) {
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
  var f = ch(), q = _e(f);
  {
    var ee = (j) => {
      var V = lh(), O = i(V), P = m(i(O), 2), Q = i(P), G = i(Q), D = m(Q, 2);
      Ge(D, 21, () => Object.entries(t(h)), ([x, C]) => x, (x, C) => {
        var X = /* @__PURE__ */ Ee(() => Kr(t(C), 2));
        let K = () => t(X)[0], k = () => t(X)[1];
        var u = oh(), b = i(u), re = i(b), de = i(re), ue = m(b, 2), ve = i(ue), $ = i(ve), U = m(ve, 2);
        Ge(
          U,
          23,
          k,
          (oe, S) => oe.code ? `${K()}-${oe.code}-${S}` : `${K()}-${S}`,
          (oe, S) => {
            var te = nh(), J = i(te);
            A(() => ie(J, t(S).message)), o(oe, te);
          }
        ), A(
          (oe, S) => {
            xe(de, "d", oe), ie($, `${S ?? ""}:`);
          },
          [
            () => M(k()[0]?.code),
            () => z(K())
          ]
        ), o(x, u);
      });
      var T = m(P, 2);
      {
        var w = (x) => {
          var C = ih();
          C.__click = [ah, y, e], o(x, C);
        };
        g(T, (x) => {
          v() && x(w);
        });
      }
      A(() => {
        N(V, 1, ne(L), "svelte-12vbusp"), ie(G, `Please correct the following ${a().length === 1 ? "error" : "errors"}:`);
      }), $e(1, V, () => mt, () => d() ? { duration: 300, direction: "down" } : void 0), o(j, V);
    };
    g(q, (j) => {
      t(R) && n() && j(ee);
    });
  }
  var _ = m(q, 2);
  {
    var E = (j) => {
      var V = Se(), O = _e(V);
      ot(O, () => e.children, () => ({ errors: t(h), hasErrors: t(R) })), o(j, V);
    };
    g(_, (j) => {
      e.children && j(E);
    });
  }
  var B = m(_, 2);
  {
    var F = (j) => {
      var V = Se(), O = _e(V);
      Ge(O, 17, () => Object.entries(t(h)), ([P, Q]) => P, (P, Q) => {
        var G = /* @__PURE__ */ Ee(() => Kr(t(Q), 2));
        let D = () => t(G)[0], T = () => t(G)[1];
        var w = dh();
        Ge(
          w,
          23,
          T,
          (x, C) => x.code ? `${D()}-${x.code}-${C}` : `${D()}-${C}`,
          (x, C) => {
            var X = sh(), K = i(X), k = i(K), u = m(K);
            A(
              (b) => {
                xe(k, "d", b), ie(u, ` ${t(C).message ?? ""}`);
              },
              [() => M(t(C).code)]
            ), $e(1, X, () => mt, () => d() ? { duration: 200, direction: "up", distance: 5 } : void 0), o(x, X);
          }
        ), A(() => xe(w, "id", `${D() ?? ""}-errors`)), o(P, w);
      }), o(j, V);
    };
    g(B, (j) => {
      t(R) && !n() && j(F);
    });
  }
  o(r, f), Xe();
}
vt(["click"]);
const Wn = async (r, e, a) => {
  try {
    await navigator.clipboard.writeText(e()), W(a, !0), setTimeout(() => W(a, !1), 2e3);
  } catch (n) {
    console.error("Failed to copy:", n);
  }
};
var uh = /* @__PURE__ */ ar('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), fh = /* @__PURE__ */ ar('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), bh = /* @__PURE__ */ c('<button class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"><!></button>'), gh = /* @__PURE__ */ c('<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg"><div class="text-sm font-medium text-white/80"> </div> <!></div>'), mh = /* @__PURE__ */ ar('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), hh = /* @__PURE__ */ ar('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), ph = /* @__PURE__ */ c('<button class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"><!></button>'), xh = /* @__PURE__ */ c(`<div class="relative group"><!> <div><!> <pre class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed svelte-au3hj8"><code>
                
                <!>
            </code>
            </pre></div></div>`);
const _h = {
  hash: "svelte-au3hj8",
  code: `pre.svelte-au3hj8 {margin:0;-moz-tab-size:2;-o-tab-size:2;tab-size:2;}code.svelte-au3hj8 {font-family:'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;}

	/* Line numbers (optional) */pre.line-numbers {counter-reset:line;}pre.line-numbers code {counter-increment:line;}pre.line-numbers code::before {content:counter(line);display:inline-block;width:3em;padding-right:1em;margin-right:1em;color:rgba(255, 255, 255, 0.3);border-right:1px solid rgba(255, 255, 255, 0.1);text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;}`
};
function Ap(r, e) {
  Ke(e, !0), Qe(r, _h);
  let a = s(e, "code", 3, ""), n = s(e, "language", 3, "svelte"), l = s(e, "showCopy", 3, !0), d = s(e, "title", 3, ""), v = /* @__PURE__ */ ye(!1), p = /* @__PURE__ */ ye(void 0);
  const y = (P, Q) => {
    if (!P) return "";
    switch (Q) {
      case "svelte":
      case "html":
        return h(P);
      case "css":
        return I(P);
      case "javascript":
      case "js":
        return L(P);
      case "typescript":
      case "ts":
        return z(P);
      case "bash":
      case "shell":
        return M(P);
      default:
        return R(P);
    }
  }, R = (P) => P.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), h = (P) => P.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>').replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>').replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=').replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>'), I = (P) => P.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:').replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;').replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), L = (P) => P.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-green-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>').replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>').replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), z = (P) => L(P).replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>'), M = (P) => P.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ').replace(/^>\s*/gm, '<span class="text-blue-400">></span> ').replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>').replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>'), f = /* @__PURE__ */ Ee(() => () => y(a(), n()));
  wt(() => {
    t(p) && a().split(`
`).length > 1 && (t(p).style.counterReset = "line");
  });
  var q = xh(), ee = i(q);
  {
    var _ = (P) => {
      var Q = gh(), G = i(Q), D = i(G), T = m(G, 2);
      {
        var w = (x) => {
          var C = bh();
          C.__click = [Wn, a, v];
          var X = i(C);
          {
            var K = (u) => {
              var b = uh();
              o(u, b);
            }, k = (u) => {
              var b = fh();
              o(u, b);
            };
            g(X, (u) => {
              t(v) ? u(K) : u(k, !1);
            });
          }
          A(() => xe(C, "title", t(v) ? "Copied!" : "Copy code")), o(x, C);
        };
        g(T, (x) => {
          l() && x(w);
        });
      }
      A(() => ie(D, d())), o(P, Q);
    };
    g(ee, (P) => {
      d() && P(_);
    });
  }
  var E = m(ee, 2), B = i(E);
  {
    var F = (P) => {
      var Q = ph();
      Q.__click = [Wn, a, v];
      var G = i(Q);
      {
        var D = (w) => {
          var x = mh();
          o(w, x);
        }, T = (w) => {
          var x = hh();
          o(w, x);
        };
        g(G, (w) => {
          t(v) ? w(D) : w(T, !1);
        });
      }
      A(() => xe(Q, "title", t(v) ? "Copied!" : "Copy code")), o(P, Q);
    };
    g(B, (P) => {
      l() && !d() && P(F);
    });
  }
  var j = m(B, 2), V = i(j), O = m(i(V));
  Pa(O, () => Ra(t(f))), tt(j, (P) => W(p, P), () => t(p)), A(() => {
    N(E, 1, `relative bg-black/30 ${d() ? "rounded-b-lg" : "rounded-lg"} border border-white/10 overflow-hidden`), N(V, 1, `language-${n() ?? ""}`, "svelte-au3hj8");
  }), o(r, q), Xe();
}
vt(["click"]);
function wh(r, e, a) {
  e(!e()), a("toggle", { collapsed: e() });
}
var yh = (
  // Handle expansion of items with children
  // Set active item
  // Execute custom click handler
  // Close sidebar on mobile when item is selected
  (r, e) => (r.key === "Enter" || r.key === " ") && e()
), kh = /* @__PURE__ */ c('<div role="button" aria-label="Close sidebar overlay" tabindex="0"></div>'), Ch = /* @__PURE__ */ c('<h2 class="text-lg font-semibold truncate">Menu</h2>'), Eh = /* @__PURE__ */ c("<button><!></button>"), Sh = /* @__PURE__ */ c('<div class="flex items-center justify-between p-4 border-b border-white/10"><!> <!></div>'), Th = (r, e, a) => e(a()), Mh = /* @__PURE__ */ c('<div class="w-5 h-5 flex-shrink-0"><div class="w-full h-full bg-current opacity-70 rounded"></div></div>'), Ah = /* @__PURE__ */ c('<span class="inline-block w-4 h-4 rotate-90 border-r-2 border-b-2 border-current" style="transform: rotate(45deg);"></span>'), zh = /* @__PURE__ */ c('<div class="w-5 h-5 flex-shrink-0"><!></div>'), Ih = /* @__PURE__ */ c("<span> </span>"), Ph = /* @__PURE__ */ c('<span class="flex-1 truncate"> </span> <!>', 1), Lh = /* @__PURE__ */ c("<li><button><!> <!></button></li>"), Dh = /* @__PURE__ */ c('<div class="p-4 border-t border-white/10"><!></div>'), jh = /* @__PURE__ */ c('<!> <aside><!> <nav class="flex-1 overflow-y-auto p-2 svelte-tk90u0"><ul class="space-y-1"></ul></nav> <!></aside>', 1);
const Rh = {
  hash: "svelte-tk90u0",
  code: `
	/* Custom scrollbar for navigation */nav.svelte-tk90u0 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}nav.svelte-tk90u0::-webkit-scrollbar {width:6px;}nav.svelte-tk90u0::-webkit-scrollbar-track {background:transparent;}nav.svelte-tk90u0::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}nav.svelte-tk90u0::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Smooth transitions */aside.svelte-tk90u0 {will-change:width, transform;}

	/* Focus styles */button.svelte-tk90u0:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}`
};
function zp(r, e) {
  Ke(e, !0), Qe(r, Rh);
  let a = s(e, "items", 19, () => []), n = s(e, "width", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "left"), v = s(e, "collapsible", 3, !0), p = s(e, "collapsed", 15, !1), y = s(e, "overlay", 3, !1), R = s(e, "persistent", 3, !0), h = s(e, "showToggle", 3, !0), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  const z = Mt();
  let M = /* @__PURE__ */ ye(null), f = /* @__PURE__ */ ye(st(/* @__PURE__ */ new Set()));
  const q = {
    sm: p() ? "w-16" : "w-48",
    md: p() ? "w-16" : "w-64",
    lg: p() ? "w-16" : "w-72",
    xl: p() ? "w-16" : "w-80"
  }, _ = {
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
  function E(K) {
    K.disabled || (K.children?.length && (t(f).has(K.id) ? t(f).delete(K.id) : t(f).add(K.id), W(f, new Set(t(f)), !0)), W(M, K.id, !0), K.onclick && K.onclick(), z("select", { item: K }), y() && !R() && p(!0));
  }
  function B() {
    y() && !R() && (p(!0), z("close"));
  }
  function F(K, k = 0) {
    const u = t(f).has(K.id), b = t(M) === K.id || K.active, re = K.children?.length;
    return {
      item: K,
      level: k,
      isExpanded: u,
      isActive: b,
      hasChildren: re,
      paddingLeft: `${k * 1 + 1}rem`
    };
  }
  function j(K, k = 0) {
    const u = [];
    for (const b of K) {
      const re = F(b, k);
      u.push(re), re.hasChildren && re.isExpanded && !p() && u.push(...j(b.children, k + 1));
    }
    return u;
  }
  const V = /* @__PURE__ */ Ee(() => () => j(a()));
  var O = jh(), P = _e(O);
  {
    var Q = (K) => {
      var k = kh();
      k.__click = B, k.__keydown = [yh, B], A((u) => N(k, 1, u), [
        () => ne(Z("fixed inset-0 z-40", _.overlay))
      ]), o(K, k);
    };
    g(P, (K) => {
      y() && !p() && K(Q);
    });
  }
  var G = m(P, 2);
  Ze(
    G,
    (K) => ({ class: K, ...L }),
    [
      () => Z("flex flex-col h-full border-r transition-all duration-300 ease-in-out", q[n()], _.sidebar, d() === "right" && "border-r-0 border-l", y() && "fixed top-0 z-50", y() && d() === "left" && "left-0", y() && d() === "right" && "right-0", y() && p() && "-translate-x-full", y() && d() === "right" && p() && "translate-x-full", I())
    ],
    void 0,
    "svelte-tk90u0"
  );
  var D = i(G);
  {
    var T = (K) => {
      var k = Sh(), u = i(k);
      {
        var b = (ue) => {
          var ve = Se(), $ = _e(ve);
          {
            var U = (S) => {
              var te = Se(), J = _e(te);
              ot(J, () => e.children.header), o(S, te);
            }, oe = (S) => {
              var te = Ch();
              o(S, te);
            };
            g($, (S) => {
              e.children?.header ? S(U) : S(oe, !1);
            });
          }
          o(ue, ve);
        };
        g(u, (ue) => {
          p() || ue(b);
        });
      }
      var re = m(u, 2);
      {
        var de = (ue) => {
          var ve = Eh();
          ve.__click = [wh, p, z];
          var $ = i(ve);
          {
            var U = (S) => {
              var te = Se(), J = _e(te);
              {
                var Y = (H) => {
                  Rr(H, { size: 16 });
                }, le = (H) => {
                  da(H, { size: 16 });
                };
                g(J, (H) => {
                  d() === "left" ? H(Y) : H(le, !1);
                });
              }
              o(S, te);
            }, oe = (S) => {
              var te = Se(), J = _e(te);
              {
                var Y = (H) => {
                  da(H, { size: 16 });
                }, le = (H) => {
                  Rr(H, { size: 16 });
                };
                g(
                  J,
                  (H) => {
                    d() === "left" ? H(Y) : H(le, !1);
                  },
                  !0
                );
              }
              o(S, te);
            };
            g($, (S) => {
              p() ? S(U) : S(oe, !1);
            });
          }
          A(
            (S) => {
              N(ve, 1, S, "svelte-tk90u0"), xe(ve, "title", p() ? "Expand sidebar" : "Collapse sidebar");
            },
            [
              () => ne(Z("p-2 rounded-lg border transition-colors", _.toggle, p() && "mx-auto"))
            ]
          ), o(ue, ve);
        };
        g(re, (ue) => {
          v() && ue(de);
        });
      }
      o(K, k);
    };
    g(D, (K) => {
      h() && K(T);
    });
  }
  var w = m(D, 2), x = i(w);
  Ge(
    x,
    21,
    () => t(V),
    ({ item: K, level: k, isExpanded: u, isActive: b, hasChildren: re, paddingLeft: de }) => K.id,
    (K, k) => {
      let u = () => t(k).item, b = () => t(k).level, re = () => t(k).isExpanded, de = () => t(k).isActive, ue = () => t(k).hasChildren, ve = () => t(k).paddingLeft;
      var $ = Lh(), U = i($);
      U.__click = [Th, E, u];
      var oe = i(U);
      {
        var S = (le) => {
          var H = Mh();
          o(le, H);
        }, te = (le) => {
          var H = Se(), ae = _e(H);
          {
            var ce = (se) => {
              var he = zh(), fe = i(he);
              {
                var be = (Ce) => {
                  var Pe = Ah();
                  o(Ce, Pe);
                }, ge = (Ce) => {
                  Rr(Ce, { size: 16 });
                };
                g(fe, (Ce) => {
                  re() ? Ce(be) : Ce(ge, !1);
                });
              }
              o(se, he);
            };
            g(
              ae,
              (se) => {
                ue() && se(ce);
              },
              !0
            );
          }
          o(le, H);
        };
        g(oe, (le) => {
          u().icon ? le(S) : le(te, !1);
        });
      }
      var J = m(oe, 2);
      {
        var Y = (le) => {
          var H = Ph(), ae = _e(H), ce = i(ae), se = m(ae, 2);
          {
            var he = (fe) => {
              var be = Ih(), ge = i(be);
              A(
                (Ce) => {
                  N(be, 1, Ce), ie(ge, u().badge);
                },
                [
                  () => ne(Z("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", _.badge))
                ]
              ), o(fe, be);
            };
            g(se, (fe) => {
              u().badge && fe(he);
            });
          }
          A(() => ie(ce, u().label)), o(le, H);
        };
        g(J, (le) => {
          p() || le(Y);
        });
      }
      A(
        (le) => {
          N(U, 1, le, "svelte-tk90u0"), ht(U, !p() && b() > 0 ? `padding-left: ${ve()}` : void 0), U.disabled = u().disabled, xe(U, "title", p() ? u().label : void 0);
        },
        [
          () => ne(Z("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150", _.item, de() && _.itemActive, u().disabled && _.itemDisabled, p() && "justify-center px-2"))
        ]
      ), o(K, $);
    }
  );
  var C = m(w, 2);
  {
    var X = (K) => {
      var k = Dh(), u = i(k);
      ot(u, () => e.children.footer, () => ({ collapsed: p() })), o(K, k);
    };
    g(C, (K) => {
      e.children?.footer && K(X);
    });
  }
  Ie(G, (K, k) => kt?.(K, k), () => ({ intensity: "medium" })), o(r, O), Xe();
}
vt(["click", "keydown"]);
function Nh(r, e, a, n, l, d, v) {
  if (!e()) return;
  const p = r.touches[0];
  W(a, p.clientX, !0), W(n, p.clientY, !0), W(l, !0), t(d) && v();
}
function Oh(r, e, a) {
  !e() || !t(a) || r.preventDefault();
}
function qh(r, e, a, n, l, d, v, p, y) {
  if (!e() || !t(a)) return;
  const R = r.changedTouches[0], h = R.clientX - t(n), I = R.clientY - t(l);
  Math.abs(h) > Math.abs(I) && Math.abs(h) > 50 && (h > 0 ? d() : v()), W(a, !1), t(p) && y();
}
var Bh = /* @__PURE__ */ c('<img class="w-full h-full object-cover svelte-wt9314" loading="lazy"/>'), Fh = /* @__PURE__ */ c('<h3 class="text-lg font-semibold text-white mb-1 svelte-wt9314"> </h3>'), Hh = /* @__PURE__ */ c('<p class="text-sm text-white/80 svelte-wt9314"> </p>'), Vh = /* @__PURE__ */ c('<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 svelte-wt9314"><!> <!></div>'), Gh = /* @__PURE__ */ c("<!> <!>", 1), Uh = /* @__PURE__ */ c('<div class="w-full h-full flex flex-col svelte-wt9314"><!></div>'), Yh = /* @__PURE__ */ c('<div class="flex-shrink-0 h-full relative svelte-wt9314"><!></div>'), Wh = /* @__PURE__ */ c("<div><div></div></div>"), Kh = /* @__PURE__ */ c("<button><!></button>"), Xh = /* @__PURE__ */ c('<button title="Previous slide" aria-label="Previous slide"><!></button> <button title="Next slide" aria-label="Next slide"><!></button> <!>', 1), Zh = /* @__PURE__ */ c("<button></button>"), Qh = /* @__PURE__ */ c('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 svelte-wt9314"></div>'), Jh = /* @__PURE__ */ c('<div><div class="relative w-full h-full overflow-hidden svelte-wt9314"><div></div></div> <!> <!> <!></div>');
const $h = {
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
function Ip(r, e) {
  Ke(e, !0), Qe(r, $h);
  let a = s(e, "currentIndex", 15, 0), n = s(e, "autoPlay", 3, !1), l = s(e, "autoPlayInterval", 3, 5e3), d = s(e, "showControls", 3, !0), v = s(e, "showDots", 3, !0), p = s(e, "showProgress", 3, !1), y = s(e, "loop", 3, !0), R = s(e, "variant", 3, "glass"), h = s(e, "size", 3, "md"), I = s(e, "aspectRatio", 3, "16:9");
  s(e, "transition", 3, "slide");
  let L = s(e, "itemsPerView", 3, 1), z = s(e, "gap", 3, "md"), M = s(e, "touchEnabled", 3, !0), f = s(e, "class", 3, ""), q = /* @__PURE__ */ dt(e, [
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
  const ee = Mt();
  let _, E, B = /* @__PURE__ */ ye(st(n())), F = null, j = /* @__PURE__ */ ye(0), V = /* @__PURE__ */ ye(0), O = /* @__PURE__ */ ye(!1);
  const P = {
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
  }, Q = {
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
  }, G = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]"
  }, D = P[h()], T = Q[R()], w = /* @__PURE__ */ Ee(() => () => e.items.length), x = /* @__PURE__ */ Ee(() => () => Math.max(0, t(w)() - L())), C = /* @__PURE__ */ Ee(() => () => y() || a() > 0), X = /* @__PURE__ */ Ee(() => () => y() || a() < t(x)()), K = /* @__PURE__ */ Ee(() => () => `-${a() * 100 / L()}%`), k = /* @__PURE__ */ Ee(() => () => t(w)() <= 1 ? 100 : (a() + 1) / t(w)() * 100), u = /* @__PURE__ */ Ee(() => () => t(w)() ? 100 / t(w)() : 0);
  function b(se) {
    se < 0 ? a(y() ? t(x)() : 0) : se > t(x)() ? a(y() ? 0 : t(x)()) : a(se), ee("change", { index: a(), item: e.items[a()] });
  }
  function re() {
    t(C)() && b(a() - 1);
  }
  function de() {
    t(X)() && b(a() + 1);
  }
  function ue() {
    W(B, !t(B)), t(B) ? ve() : $(), ee("autoplay", { isPlaying: t(B) });
  }
  function ve() {
    !t(B) || t(w)() <= 1 || ($(), F = window.setInterval(
      () => {
        if (a() >= t(x)() && !y()) {
          $();
          return;
        }
        de();
      },
      l()
    ));
  }
  function $() {
    F && (clearInterval(F), F = null);
  }
  function U(se) {
    switch (se.key) {
      case "ArrowLeft":
        se.preventDefault(), re();
        break;
      case "ArrowRight":
        se.preventDefault(), de();
        break;
      case " ":
        se.preventDefault(), ue();
        break;
      case "Home":
        se.preventDefault(), b(0);
        break;
      case "End":
        se.preventDefault(), b(t(x)());
        break;
    }
  }
  wt(() => (t(B) && ve(), () => {
    $();
  })), bt(() => {
    t(B) ? ve() : $();
  });
  var oe = Jh();
  Ze(
    oe,
    (se) => ({
      class: se,
      onkeydown: U,
      role: "region",
      "aria-label": "Carousel",
      "aria-live": "polite",
      ...q
    }),
    [
      () => Z("relative rounded-lg border overflow-hidden", G[I()], T.container, D.container, f())
    ],
    void 0,
    "svelte-wt9314"
  );
  var S = i(oe);
  S.__touchstart = [
    Nh,
    M,
    j,
    V,
    O,
    B,
    $
  ], S.__touchmove = [Oh, M, O], S.__touchend = [
    qh,
    M,
    O,
    j,
    V,
    re,
    de,
    B,
    ve
  ];
  var te = i(S);
  Ge(te, 23, () => e.items, (se) => se.id, (se, he, fe) => {
    var be = Yh(), ge = i(be);
    {
      var Ce = (Pe) => {
        var Be = Uh(), je = i(Be);
        {
          var we = (Te) => {
            const Ne = /* @__PURE__ */ Ee(() => e.children.item({ item: t(he), index: t(fe) }));
            var Ae = Se(), Le = _e(Ae);
            ot(Le, () => t(Ne)), o(Te, Ae);
          }, pe = (Te) => {
            var Ne = Gh(), Ae = _e(Ne);
            {
              var Le = (ke) => {
                var me = Bh();
                A(() => {
                  xe(me, "src", t(he).image), xe(me, "alt", t(he).title || `Slide ${t(fe) + 1}`);
                }), o(ke, me);
              };
              g(Ae, (ke) => {
                t(he).image && ke(Le);
              });
            }
            var qe = m(Ae, 2);
            {
              var Fe = (ke) => {
                var me = Vh(), ze = i(me);
                {
                  var De = (We) => {
                    var at = Fh(), lt = i(at);
                    A(() => ie(lt, t(he).title)), o(We, at);
                  };
                  g(ze, (We) => {
                    t(he).title && We(De);
                  });
                }
                var He = m(ze, 2);
                {
                  var Je = (We) => {
                    var at = Hh(), lt = i(at);
                    A(() => ie(lt, t(he).description)), o(We, at);
                  };
                  g(He, (We) => {
                    t(he).description && We(Je);
                  });
                }
                o(ke, me);
              };
              g(qe, (ke) => {
                (t(he).title || t(he).description) && ke(Fe);
              });
            }
            o(Te, Ne);
          };
          g(je, (Te) => {
            e.children?.item ? Te(we) : Te(pe, !1);
          });
        }
        o(Pe, Be);
      };
      g(ge, (Pe) => {
        Pe(Ce, !1);
      });
    }
    A((Pe) => ht(be, Pe), [() => `width: ${t(u)()}%`]), o(se, be);
  }), tt(S, (se) => E = se, () => E);
  var J = m(S, 2);
  {
    var Y = (se) => {
      var he = Wh(), fe = i(he);
      A(
        (be, ge, Ce) => {
          N(he, 1, be, "svelte-wt9314"), N(fe, 1, ge, "svelte-wt9314"), ht(fe, Ce);
        },
        [
          () => ne(Z("absolute bottom-0 left-0 right-0 h-1", T.progress)),
          () => ne(Z("h-full transition-all duration-300", T.progressFill)),
          () => `width: ${t(k)()}%`
        ]
      ), o(se, he);
    };
    g(J, (se) => {
      p() && se(Y);
    });
  }
  var le = m(J, 2);
  {
    var H = (se) => {
      var he = Xh(), fe = _e(he);
      fe.__click = re;
      var be = i(fe);
      da(be, { size: 16 });
      var ge = m(fe, 2);
      ge.__click = de;
      var Ce = i(ge);
      Rr(Ce, { size: 16 });
      var Pe = m(ge, 2);
      {
        var Be = (je) => {
          var we = Kh();
          we.__click = ue;
          var pe = i(we);
          {
            var Te = (Ae) => {
              mi(Ae, { size: 16 });
            }, Ne = (Ae) => {
              hi(Ae, { size: 16 });
            };
            g(pe, (Ae) => {
              t(B) ? Ae(Te) : Ae(Ne, !1);
            });
          }
          A(
            (Ae) => {
              N(we, 1, Ae, "svelte-wt9314"), xe(we, "title", t(B) ? "Pause autoplay" : "Start autoplay"), xe(we, "aria-label", t(B) ? "Pause autoplay" : "Start autoplay");
            },
            [
              () => ne(Z("absolute top-2 right-2 rounded-full border transition-all duration-200", D.controls, T.controls))
            ]
          ), o(je, we);
        };
        g(Pe, (je) => {
          n() && je(Be);
        });
      }
      A(
        (je, we, pe, Te) => {
          fe.disabled = je, N(fe, 1, we, "svelte-wt9314"), ge.disabled = pe, N(ge, 1, Te, "svelte-wt9314");
        },
        [
          () => !t(C)(),
          () => ne(Z("absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", D.controls, T.controls, !t(C)() && "opacity-50 cursor-not-allowed")),
          () => !t(X)(),
          () => ne(Z("absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", D.controls, T.controls, !t(X)() && "opacity-50 cursor-not-allowed"))
        ]
      ), o(se, he);
    };
    g(le, (se) => {
      d() && t(w)() > 1 && se(H);
    });
  }
  var ae = m(le, 2);
  {
    var ce = (se) => {
      var he = Qh();
      Ge(he, 23, () => e.items, (fe) => fe.id, (fe, be, ge) => {
        var Ce = Zh();
        Ce.__click = () => b(t(ge)), A(
          (Pe) => {
            N(Ce, 1, Pe, "svelte-wt9314"), xe(Ce, "title", `Go to slide ${t(ge) + 1}`), xe(Ce, "aria-label", `Go to slide ${t(ge) + 1}`);
          },
          [
            () => ne(Z("rounded-full transition-all duration-200", D.dots, t(ge) === a() ? T.dotsActive : T.dots))
          ]
        ), o(fe, Ce);
      }), o(se, he);
    };
    g(ae, (se) => {
      v() && t(w)() > 1 && se(ce);
    });
  }
  tt(oe, (se) => _ = se, () => _), Ie(oe, (se, he) => kt?.(se, he), () => ({ intensity: "medium" })), A(
    (se, he) => {
      N(te, 1, se, "svelte-wt9314"), ht(te, he);
    },
    [
      () => ne(Z("flex h-full transition-transform duration-300 ease-in-out", D.gap[z()])),
      () => `transform: translateX(${t(K)()}); width: ${t(w)() * 100 / L()}%`
    ]
  ), o(r, oe), Xe();
}
vt(["touchstart", "touchmove", "touchend", "click"]);
function e1(r, e, a) {
  e() && a();
}
var t1 = /* @__PURE__ */ c('<div role="presentation"></div>'), r1 = /* @__PURE__ */ c('<h2 id="drawer-title" class="text-lg font-semibold svelte-vtlnqj">Drawer</h2>'), a1 = /* @__PURE__ */ c('<button title="Close drawer" aria-label="Close drawer"><!></button>'), n1 = /* @__PURE__ */ c('<div class="p-4 border-t border-white/10 flex-shrink-0 svelte-vtlnqj"><!></div>'), o1 = /* @__PURE__ */ c('<!> <div><div class="flex flex-col h-full focus:outline-none svelte-vtlnqj" tabindex="-1"><div class="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 svelte-vtlnqj"><div class="flex-1 svelte-vtlnqj"><!></div> <!></div> <div class="flex-1 overflow-y-auto p-4 svelte-vtlnqj"><!></div> <!></div></div>', 1);
const i1 = {
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
function Pp(r, e) {
  Ke(e, !0), Qe(r, i1);
  let a = s(e, "open", 15, !1), n = s(e, "position", 3, "right"), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), v = s(e, "overlay", 3, !0), p = s(e, "closeOnOutsideClick", 3, !0), y = s(e, "closeOnEscape", 3, !0), R = s(e, "showCloseButton", 3, !0), h = s(e, "persistent", 3, !1), I = s(e, "class", 3, ""), L = /* @__PURE__ */ dt(e, [
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
  const z = Mt();
  let M = /* @__PURE__ */ ye(null), f = /* @__PURE__ */ ye(null);
  const q = {
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
  }, _ = {
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
  }[d()], E = q[l()][n()], B = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "top-0 left-0 w-full border-b",
    bottom: "bottom-0 left-0 w-full border-t"
  }, F = () => {
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
  function j() {
    h() || (a(!1), z("close"));
  }
  function V(D) {
    D.key === "Escape" && y() && a() && j();
  }
  function O(D) {
    p() && a() && t(f) && !t(f).contains(D.target) && j();
  }
  wt(() => (y() && document.addEventListener("keydown", V), p() && document.addEventListener("click", O), () => {
    document.removeEventListener("keydown", V), document.removeEventListener("click", O);
  })), bt(() => {
    if (a() && t(f)) {
      const D = t(f).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      D.length > 0 ? D[0].focus() : t(f).focus();
    }
  });
  var P = Se(), Q = _e(P);
  {
    var G = (D) => {
      var T = o1(), w = _e(T);
      {
        var x = (J) => {
          var Y = t1();
          Y.__click = [e1, p, j], A((le) => N(Y, 1, le, "svelte-vtlnqj"), [
            () => ne(Z("fixed inset-0 z-40", _.overlay))
          ]), $e(3, Y, () => ri, () => ({ duration: 200 })), o(J, Y);
        };
        g(w, (J) => {
          v() && J(x);
        });
      }
      var C = m(w, 2);
      Ze(
        C,
        (J) => ({
          class: J,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          ...L
        }),
        [
          () => Z("fixed z-50 flex flex-col", B[n()], E, _.drawer, I())
        ],
        void 0,
        "svelte-vtlnqj"
      );
      var X = i(C), K = i(X), k = i(K), u = i(k);
      {
        var b = (J) => {
          const Y = /* @__PURE__ */ Ee(() => e.children.header());
          var le = Se(), H = _e(le);
          ot(H, () => t(Y)), o(J, le);
        }, re = (J) => {
          var Y = r1();
          o(J, Y);
        };
        g(u, (J) => {
          typeof e.children == "object" && e.children && "header" in e.children && e.children.header ? J(b) : J(re, !1);
        });
      }
      var de = m(k, 2);
      {
        var ue = (J) => {
          var Y = a1();
          Y.__click = j;
          var le = i(Y);
          sa(le, { size: 16 }), A((H) => N(Y, 1, H, "svelte-vtlnqj"), [
            () => ne(Z("p-2 rounded-lg border transition-colors ml-4", _.closeButton))
          ]), o(J, Y);
        };
        g(de, (J) => {
          R() && !h() && J(ue);
        });
      }
      var ve = m(K, 2), $ = i(ve);
      {
        var U = (J) => {
          const Y = /* @__PURE__ */ Ee(() => e.children({ open: a(), close: j }));
          var le = Se(), H = _e(le);
          ot(H, () => t(Y)), o(J, le);
        }, oe = (J) => {
          var Y = Se(), le = _e(Y);
          {
            var H = (ae) => {
              const ce = /* @__PURE__ */ Ee(() => e.children.body({ open: a(), close: j }));
              var se = Se(), he = _e(se);
              ot(he, () => t(ce)), o(ae, se);
            };
            g(
              le,
              (ae) => {
                typeof e.children == "object" && e.children && "body" in e.children && e.children.body && ae(H);
              },
              !0
            );
          }
          o(J, Y);
        };
        g($, (J) => {
          typeof e.children == "function" ? J(U) : J(oe, !1);
        });
      }
      var S = m(ve, 2);
      {
        var te = (J) => {
          const Y = /* @__PURE__ */ Ee(() => e.children.footer({ open: a(), close: j }));
          var le = n1(), H = i(le);
          ot(H, () => t(Y)), o(J, le);
        };
        g(S, (J) => {
          typeof e.children == "object" && e.children && "footer" in e.children && e.children.footer && J(te);
        });
      }
      tt(X, (J) => W(f, J), () => t(f)), tt(C, (J) => W(M, J), () => t(M)), Ie(C, (J, Y) => kt?.(J, Y), () => ({ intensity: "medium" })), $e(3, C, () => ai, F), o(D, T);
    };
    g(Q, (D) => {
      a() && D(G);
    });
  }
  o(r, P), Xe();
}
vt(["click"]);
var l1 = /* @__PURE__ */ c("<div></div>"), s1 = /* @__PURE__ */ c('<span class="text-white/80 text-xs font-mono svelte-11p3y6q"> </span>'), d1 = /* @__PURE__ */ c('<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-2"><span class="text-white text-xs font-medium mb-1 svelte-11p3y6q"> </span> <!></div>'), c1 = /* @__PURE__ */ c('<span class="font-mono text-sm text-white/60 svelte-11p3y6q"> </span>'), v1 = /* @__PURE__ */ c('<p class="text-sm text-white/60 mt-1"> </p>'), u1 = /* @__PURE__ */ c('<div class="flex-1"><div class="flex items-center justify-between"><span class="font-medium text-white svelte-11p3y6q"> </span> <!></div> <!></div>'), f1 = /* @__PURE__ */ c('<div class="absolute inset-0 bg-green-500/20 flex items-center justify-center"><span class="text-green-400 text-xs font-medium svelte-11p3y6q">Copied!</span></div>'), b1 = /* @__PURE__ */ c("<button><!> <!> <!></button>");
const g1 = {
  hash: "svelte-11p3y6q",
  code: `
    /* Ensure color swatches have proper contrast for accessibility */.group.svelte-11p3y6q:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

    /* Color transition animations */.group.svelte-11p3y6q {will-change:transform, box-shadow;}

    /* Responsive typography adjustments */
    @media (max-width: 640px) {.group.svelte-11p3y6q span:where(.svelte-11p3y6q) {font-size:0.75rem;}
    }`
};
function Kn(r, e) {
  Ke(e, !0), Qe(r, g1);
  const a = s(e, "class", 3, ""), n = /* @__PURE__ */ dt(e, [
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
  ]), l = () => Z(
    "group relative overflow-hidden transition-all duration-300",
    e.layout === "grid" ? "aspect-square rounded-lg" : "flex items-center gap-3 p-3 rounded-lg",
    e.interactive && "cursor-pointer hover:scale-105",
    e.isTerminal ? "border border-terminal-green/20" : "border border-bubble-tea-purple/20",
    a()
  ), d = () => e.layout === "grid" ? `background-color: ${e.color.hex}` : `background-color: ${e.color.hex}; width: 2rem; height: 2rem; border-radius: 0.375rem`, v = () => {
    e.onColorClick(e.color);
  }, p = (ee) => {
    (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), e.onColorClick(e.color));
  }, y = e.animate ? {
    jellyHover: {
      enabled: e.interactive,
      duration: 200,
      scale: 1.05,
      borderRadius: "8px"
    },
    springPop: { duration: 150, delay: e.colorIndex * 20 }
  } : {};
  var R = b1();
  Ze(
    R,
    (ee, _) => ({
      type: "button",
      class: ee,
      style: _,
      onclick: v,
      onkeydown: p,
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
  var h = i(R);
  {
    var I = (ee) => {
      var _ = l1();
      A((E) => ht(_, E), [d]), o(ee, _);
    };
    g(h, (ee) => {
      e.layout === "list" && ee(I);
    });
  }
  var L = m(h, 2);
  {
    var z = (ee) => {
      var _ = d1(), E = i(_), B = i(E), F = m(E, 2);
      {
        var j = (V) => {
          var O = s1(), P = i(O);
          A(() => ie(P, e.color.hex)), o(V, O);
        };
        g(F, (V) => {
          e.showHex && V(j);
        });
      }
      A(() => ie(B, e.color.name)), o(ee, _);
    }, M = (ee) => {
      var _ = u1(), E = i(_), B = i(E), F = i(B), j = m(B, 2);
      {
        var V = (Q) => {
          var G = c1(), D = i(G);
          A(() => ie(D, e.color.hex)), o(Q, G);
        };
        g(j, (Q) => {
          e.showHex && Q(V);
        });
      }
      var O = m(E, 2);
      {
        var P = (Q) => {
          var G = v1(), D = i(G);
          A(() => ie(D, e.color.description)), o(Q, G);
        };
        g(O, (Q) => {
          e.color.description && Q(P);
        });
      }
      A(() => ie(F, e.color.name)), o(ee, _);
    };
    g(L, (ee) => {
      e.layout === "grid" ? ee(z) : ee(M, !1);
    });
  }
  var f = m(L, 2);
  {
    var q = (ee) => {
      var _ = f1();
      o(ee, _);
    };
    g(f, (ee) => {
      e.copiedColor === e.color.hex && ee(q);
    });
  }
  Ie(R, (ee, _) => At?.(ee, _), () => e.animate ? y.jellyHover : void 0), $e(1, R, () => Yt, () => e.animate ? y.springPop : void 0), o(r, R), Xe();
}
var m1 = /* @__PURE__ */ c('<div class="mb-6"><!></div>'), h1 = /* @__PURE__ */ c('<div class="space-y-3"><h3 class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"> </h3> <div></div></div>'), p1 = /* @__PURE__ */ c("<div></div>"), x1 = /* @__PURE__ */ c("<div><!> <!></div>");
function Lp(r, e) {
  Ke(e, !0);
  const a = s(e, "theme", 3, "both"), n = s(e, "layout", 3, "grid"), l = s(e, "interactive", 3, !0), d = s(e, "showHex", 3, !0), v = s(e, "showCategories", 3, !0), p = s(e, "animate", 3, !0), y = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  ], I = [
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
  ], z = (() => {
    switch (a()) {
      case "terminal":
        return h;
      case "bubbleTea":
        return I;
      case "both":
      default:
        return [...h, ...I];
    }
  })(), M = [...new Set(z.map((P) => P.category))];
  let f = /* @__PURE__ */ ye(null);
  const q = async (P) => {
    if (l())
      try {
        await navigator.clipboard.writeText(P), W(f, P, !0), setTimeout(
          () => {
            W(f, null);
          },
          2e3
        );
      } catch (Q) {
        console.error("Failed to copy color to clipboard:", Q);
      }
  }, ee = (P) => {
    q(P.hex), e.onColorSelect?.(P);
  }, _ = () => n() === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "flex flex-col gap-2";
  var E = x1();
  Ze(E, () => ({
    class: (
      // Cleanup: removed former __markUsed scaffold and no-op $effect (unnecessary analyzer suppression)
      `space-y-6 ${y()}`
    ),
    ...R
  }));
  var B = i(E);
  {
    var F = (P) => {
      var Q = m1(), G = i(Q);
      ot(G, () => e.children), o(P, Q);
    };
    g(B, (P) => {
      e.children && P(F);
    });
  }
  var j = m(B, 2);
  {
    var V = (P) => {
      var Q = Se(), G = _e(Q);
      Ge(G, 16, () => M, (D) => D, (D, T) => {
        var w = h1(), x = i(w), C = i(x), X = m(x, 2);
        Ge(X, 21, () => z.filter((K) => K.category === T), (K) => K.hex, (K, k) => {
          {
            let u = /* @__PURE__ */ Ee(() => z.indexOf(t(k))), b = /* @__PURE__ */ Ee(() => h.includes(t(k)));
            Kn(K, {
              get color() {
                return t(k);
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
                return p();
              },
              get copiedColor() {
                return t(f);
              },
              get colorIndex() {
                return t(u);
              },
              get isTerminal() {
                return t(b);
              },
              onColorClick: ee
            });
          }
        }), A(
          (K) => {
            ie(C, T), N(X, 1, K);
          },
          [() => ne(_())]
        ), o(D, w);
      }), o(P, Q);
    }, O = (P) => {
      var Q = p1();
      Ge(Q, 21, () => z, (G) => G.hex, (G, D) => {
        {
          let T = /* @__PURE__ */ Ee(() => z.indexOf(t(D))), w = /* @__PURE__ */ Ee(() => h.includes(t(D)));
          Kn(G, {
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
              return p();
            },
            get copiedColor() {
              return t(f);
            },
            get colorIndex() {
              return t(T);
            },
            get isTerminal() {
              return t(w);
            },
            onColorClick: ee
          });
        }
      }), A((G) => N(Q, 1, G), [() => ne(_())]), o(P, Q);
    };
    g(j, (P) => {
      v() ? P(V) : P(O, !1);
    });
  }
  o(r, E), Xe();
}
var _1 = /* @__PURE__ */ c("<span><!></span>");
const w1 = {
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
function Dp(r, e) {
  Ke(e, !0), Qe(r, w1);
  const a = s(e, "variant", 3, "bubbleTea"), n = s(e, "color", 3, "pink"), l = s(e, "intensity", 3, "normal"), d = s(e, "animate", 3, !0), v = s(e, "pulse", 3, !1), p = s(e, "class", 3, ""), y = /* @__PURE__ */ dt(e, [
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
  ]), h = Z((() => {
    const f = "font-mono transition-all duration-300";
    if (a() === "terminal")
      switch (n()) {
        case "matrix":
          return Z(f, "text-terminal-green", l() === "intense" ? "glow-terminal-matrix-intense" : "glow-terminal-matrix");
        case "cyan":
          return Z(f, "text-terminal-cyan", l() === "intense" ? "glow-terminal-cyan-intense" : "glow-terminal-cyan");
        default:
          return Z(f, "text-terminal-green", "glow-terminal-matrix");
      }
    const q = {
      pink: l() === "intense" ? "text-bubble-tea-glow-pink glow-bubble-tea-pink-intense" : "text-bubble-tea-glow-pink glow-bubble-tea-pink",
      purple: l() === "intense" ? "text-bubble-tea-glow-purple glow-bubble-tea-purple-intense" : "text-bubble-tea-glow-purple glow-bubble-tea-purple",
      blue: l() === "intense" ? "text-bubble-tea-glow-blue glow-bubble-tea-blue-intense" : "text-bubble-tea-glow-blue glow-bubble-tea-blue",
      cyan: l() === "intense" ? "text-bubble-tea-glow-cyan glow-bubble-tea-cyan-intense" : "text-bubble-tea-glow-cyan glow-bubble-tea-cyan",
      green: l() === "intense" ? "text-bubble-tea-glow-green glow-bubble-tea-green-intense" : "text-bubble-tea-glow-green glow-bubble-tea-green",
      yellow: l() === "intense" ? "text-bubble-tea-glow-yellow glow-bubble-tea-yellow-intense" : "text-bubble-tea-glow-yellow glow-bubble-tea-yellow",
      orange: l() === "intense" ? "text-bubble-tea-glow-orange glow-bubble-tea-orange-intense" : "text-bubble-tea-glow-orange glow-bubble-tea-orange",
      red: l() === "intense" ? "text-bubble-tea-glow-red glow-bubble-tea-red-intense" : "text-bubble-tea-glow-red glow-bubble-tea-red"
    };
    return n() === "matrix" ? Z(f, q.pink) : Z(f, q[n()]);
  })(), d() && "hover:scale-105", v() && "animate-pulse", p());
  var I = _1();
  Ze(I, () => ({ class: h, ...y }), void 0, void 0, "svelte-1s7z1ns");
  var L = i(I);
  {
    var z = (f) => {
      var q = Se(), ee = _e(q);
      ot(ee, () => e.children), o(f, q);
    }, M = (f) => {
      var q = Se(), ee = _e(q);
      {
        var _ = (E) => {
          var B = Ct();
          A(() => ie(B, e.text)), o(E, B);
        };
        g(
          ee,
          (E) => {
            e.text && E(_);
          },
          !0
        );
      }
      o(f, q);
    };
    g(L, (f) => {
      e.children ? f(z) : f(M, !1);
    });
  }
  o(r, I), Xe();
}
var y1 = /* @__PURE__ */ c("<span>•</span> <span> </span>", 1), k1 = /* @__PURE__ */ c('<div class="flex items-center gap-1 svelte-chof7v"><span> </span> <span> </span></div>'), C1 = /* @__PURE__ */ c("<div></div>"), E1 = /* @__PURE__ */ c("<div><!></div>"), S1 = /* @__PURE__ */ c('<div><div class="flex items-center gap-4 svelte-chof7v"><div class="flex items-center gap-2 svelte-chof7v"><span> </span> <!></div> <!></div> <div class="flex items-center gap-4 svelte-chof7v"><div class="hidden md:flex items-center gap-2 svelte-chof7v"><span> </span> <span>•</span> <span> </span></div> <div class="md:hidden svelte-chof7v"><span> </span></div> <!></div></div>');
const T1 = {
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
function jp(r, e) {
  Ke(e, !0), Qe(r, T1);
  const a = s(e, "status", 3, "Ready"), n = s(e, "encoding", 3, "UTF-8"), l = s(e, "position", 3, "1:1"), d = s(e, "lineNumber", 3, 1), v = s(e, "columnNumber", 3, 1), p = s(e, "fileType", 3, "TypeScript"), y = s(e, "variant", 3, "bubbleTea"), R = s(e, "size", 3, "md"), h = s(e, "indicators", 19, () => []), I = s(e, "class", 3, ""), L = s(e, "autoLayout", 3, !0), z = /* @__PURE__ */ dt(e, [
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
  let M;
  wt(() => {
    if (L() && M) {
      const $ = () => {
        const oe = M.offsetHeight;
        document.documentElement.style.setProperty("--status-bar-height", `${oe}px`);
      };
      $();
      const U = new ResizeObserver($);
      return U.observe(M), () => {
        U.disconnect(), document.documentElement.style.removeProperty("--status-bar-height");
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
  }, q = { sm: "px-3 py-1 text-xs", md: "px-4 py-2 text-sm" }, ee = ($) => {
    switch ($) {
      case "error":
        return y() === "bubbleTea" ? "text-bubble-tea-red" : "text-red-400";
      case "warning":
        return y() === "bubbleTea" ? "text-bubble-tea-yellow" : "text-yellow-400";
      case "success":
        return y() === "bubbleTea" ? "text-bubble-tea-green" : "text-green-400";
      default:
        return f[y()].text;
    }
  }, _ = f[y()], E = Z("fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm", y() === "bubbleTea" ? "rounded-t-bubble-tea" : "rounded-t-lg", y() === "bubbleTea" ? "status-bar-bubble-tea" : "", _.background, q[R()]), B = Z(E, I());
  var F = S1();
  Ze(
    F,
    () => ({
      class: B,
      role: "status",
      "aria-live": "polite",
      ...z
    }),
    void 0,
    void 0,
    "svelte-chof7v"
  );
  var j = i(F), V = i(j), O = i(V), P = i(O), Q = m(O, 2);
  {
    var G = ($) => {
      var U = y1(), oe = _e(U), S = m(oe, 2), te = i(S);
      A(
        (J, Y) => {
          N(oe, 1, J, "svelte-chof7v"), N(S, 1, Y, "svelte-chof7v"), ie(te, p());
        },
        [
          () => ne(Z("text-xs", _.accent)),
          () => ne(Z("text-xs", _.accent))
        ]
      ), o($, U);
    };
    g(Q, ($) => {
      p() && $(G);
    });
  }
  var D = m(V, 2);
  {
    var T = ($) => {
      var U = C1();
      Ge(U, 21, h, (oe) => oe.label, (oe, S) => {
        var te = k1(), J = i(te), Y = i(J), le = m(J, 2), H = i(le);
        A(
          (ae, ce) => {
            N(J, 1, ae, "svelte-chof7v"), ie(Y, `${t(S).label ?? ""}:`), N(le, 1, ce, "svelte-chof7v"), ie(H, t(S).value);
          },
          [
            () => ne(Z("text-xs font-medium", ee(t(S).type))),
            () => ne(Z("text-xs", _.text))
          ]
        ), o(oe, te);
      }), A((oe) => N(U, 1, oe, "svelte-chof7v"), [
        () => ne(Z("hidden sm:flex items-center gap-3 border-l pl-4", _.separator))
      ]), o($, U);
    };
    g(D, ($) => {
      h().length > 0 && $(T);
    });
  }
  var w = m(j, 2), x = i(w), C = i(x), X = i(C), K = m(C, 2), k = m(K, 2), u = i(k), b = m(x, 2), re = i(b), de = i(re), ue = m(b, 2);
  {
    var ve = ($) => {
      var U = E1(), oe = i(U);
      ot(oe, () => e.children), A((S) => N(U, 1, S, "svelte-chof7v"), [() => ne(Z("border-l pl-4", _.separator))]), o($, U);
    };
    g(ue, ($) => {
      e.children && $(ve);
    });
  }
  tt(F, ($) => M = $, () => M), A(
    ($, U, oe, S, te) => {
      N(O, 1, $, "svelte-chof7v"), ie(P, a()), N(C, 1, U, "svelte-chof7v"), ie(X, `Line ${d() ?? ""}, Col ${v() ?? ""}`), N(K, 1, oe, "svelte-chof7v"), N(k, 1, S, "svelte-chof7v"), ie(u, n()), N(re, 1, te, "svelte-chof7v"), ie(de, l());
    },
    [
      () => ne(Z("font-medium", _.text)),
      () => ne(Z("text-xs", _.accent)),
      () => ne(Z("text-xs", _.accent)),
      () => ne(Z("text-xs", _.accent)),
      () => ne(Z("text-xs", _.accent))
    ]
  ), o(r, F), Xe();
}
export {
  cp as $,
  D1 as A,
  R1 as B,
  er as C,
  O1 as D,
  q1 as E,
  B1 as F,
  H1 as G,
  V1 as H,
  Cd as I,
  U1 as J,
  K1 as K,
  X1 as L,
  F1 as M,
  Z1 as N,
  Q1 as O,
  G1 as P,
  $1 as Q,
  Y1 as R,
  W1 as S,
  J1 as T,
  ep as U,
  tp as V,
  rp as W,
  ap as X,
  np as Y,
  sp as Z,
  dp as _,
  Qe as a,
  vp as a0,
  up as a1,
  fp as a2,
  bp as a3,
  gp as a4,
  mp as a5,
  hp as a6,
  pp as a7,
  xp as a8,
  _p as a9,
  Ls as aA,
  Ds as aB,
  js as aC,
  Da as aD,
  Rs as aE,
  Ns as aF,
  Os as aG,
  qs as aH,
  N1 as aI,
  ft as aJ,
  At as aK,
  kt as aL,
  Yt as aM,
  mt as aN,
  jt as aO,
  xa as aP,
  wp as aa,
  yp as ab,
  kp as ac,
  Cp as ad,
  Ep as ae,
  Sp as af,
  Tp as ag,
  Mp as ah,
  Ap as ai,
  zp as aj,
  Ip as ak,
  Pp as al,
  Lp as am,
  Dp as an,
  jp as ao,
  Bt as ap,
  ti as aq,
  Mu as ar,
  Au as as,
  zu as at,
  op as au,
  ip as av,
  lp as aw,
  Me as ax,
  Is as ay,
  Ps as az,
  s as b,
  st as c,
  i as d,
  Ge as e,
  c as f,
  m as g,
  tt as h,
  g as i,
  pr as j,
  t as k,
  o as l,
  Xe as m,
  W as n,
  ne as o,
  Ke as p,
  Z as q,
  N as r,
  ye as s,
  A as t,
  ie as u,
  vt as v,
  Se as w,
  _e as x,
  ot as y,
  j1 as z
};
