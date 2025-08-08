import { AlertCircle as _n, Info as oo, XCircle as lo, CheckCircle2 as so, X as sa, Minus as Wn, Check as Ua, ChevronDown as Kr, TrendingDown as co, TrendingUp as vo, Activity as xn, ChevronLeft as da, ChevronRight as Or, ChevronsLeft as uo, ChevronsRight as fo, Search as Yn, Filter as bo, ChevronUp as pn, Pause as go, Play as ho } from "lucide-svelte";
import { onMount as yt, createEventDispatcher as At } from "svelte";
import { T as Lt } from "@threlte/core";
import { OrbitControls as mo, HTML as _o } from "@threlte/extras";
const xo = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(xo);
const pa = 1, wa = 2, Kn = 4, po = 8, wo = 16, yo = 1, ko = 4, Co = 8, Eo = 16, So = 1, To = 2, Mo = 4, Ao = 1, Io = 2, Tt = Symbol(), Po = Symbol("filename"), Lo = "http://www.w3.org/1999/xhtml", zo = "http://www.w3.org/2000/svg", Do = "@attach", Xn = typeof window < "u", wn = globalThis.process?.env?.NODE_ENV, Ye = wn && !wn.toLowerCase().startsWith("prod");
var ya = Array.isArray, Ro = Array.prototype.indexOf, Qn = Array.from, hr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, Zn = Object.getOwnPropertyDescriptors, No = Object.prototype, Oo = Array.prototype, $a = Object.getPrototypeOf;
function jo(r) {
  return typeof r == "function";
}
const jt = () => {
};
function qo(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function Bo() {
  var r, e, a = new Promise((n, l) => {
    r = n, e = l;
  });
  return { promise: a, resolve: r, reject: e };
}
function Xr(r, e) {
  if (Array.isArray(r))
    return r;
  if (!(Symbol.iterator in r))
    return Array.from(r);
  const a = [];
  for (const n of r)
    if (a.push(n), a.length === e) break;
  return a;
}
const Bt = 2, en = 4, tn = 8, Hr = 16, ur = 32, Vr = 64, Jn = 128, Gt = 256, ca = 512, Pt = 1024, Wt = 2048, fr = 4096, Zt = 8192, Ar = 16384, ka = 32768, Ir = 65536, va = 1 << 17, Fo = 1 << 18, rn = 1 << 19, $n = 1 << 20, ua = 1 << 21, Ca = 1 << 22, kr = 1 << 23, lr = Symbol("$state"), Ho = Symbol("legacy props"), Vo = Symbol(""), ei = Symbol("proxy path"), an = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Go() {
  if (Ye) {
    const r = new Error("await_outside_boundary\nCannot await outside a `<svelte:boundary>` with a `pending` snippet\nhttps://svelte.dev/e/await_outside_boundary");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Uo() {
  if (Ye) {
    const r = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function yn() {
  if (Ye) {
    const r = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Wo() {
  if (Ye) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Yo(r) {
  if (Ye) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ko() {
  if (Ye) {
    const r = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xo(r) {
  if (Ye) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qo() {
  if (Ye) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zo() {
  if (Ye) {
    const r = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
function Jo(r) {
  if (Ye) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function $o(r) {
  if (Ye) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function el(r) {
  if (Ye) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function tl() {
  if (Ye) {
    const r = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function rl() {
  if (Ye) {
    const r = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function al() {
  if (Ye) {
    const r = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var ti = "font-weight: bold", ri = "font-weight: normal";
function nl(r) {
  Ye ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${r}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, ti, ri) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function il() {
  Ye ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", ti, ri) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let ol = !1;
function ai(r) {
  return r === this.v;
}
function nn(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function ni(r) {
  return !nn(r, this.v);
}
let ll = !1;
function ii(r) {
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
  return l.length === 1 ? null : (hr(e, "stack", {
    value: l.join(`
`)
  }), hr(e, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${r}Error`
  }), /** @type {Error & { stack: string }} */
  e);
}
function br(r, e) {
  return r.label = e, oi(r.v, e), r;
}
function oi(r, e) {
  return r?.[ei]?.(e), r;
}
let Ut = null;
function fa(r) {
  Ut = r;
}
let ba = null;
function kn(r) {
  ba = r;
}
let ta = null;
function Cn(r) {
  ta = r;
}
function Xe(r, e = !1, a) {
  Ut = {
    p: Ut,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  }, Ye && (Ut.function = a, ta = a);
}
function Qe(r) {
  var e = (
    /** @type {ComponentContext} */
    Ut
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      xi(n);
  }
  return Ut = e.p, Ye && (ta = Ut?.function ?? null), /** @type {T} */
  {};
}
function li() {
  return !0;
}
const Wa = /* @__PURE__ */ new WeakMap();
function sl(r) {
  var e = st;
  if (e === null)
    return bt.f |= kr, r;
  if (Ye && r instanceof Error && !Wa.has(r) && Wa.set(r, dl(r, e)), (e.f & ka) === 0) {
    if ((e.f & Jn) === 0)
      throw !e.parent && r instanceof Error && si(r), r;
    e.b.error(r);
  } else
    on(r, e);
}
function on(r, e) {
  for (; e !== null; ) {
    if ((e.f & Jn) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw r instanceof Error && si(r), r;
}
function dl(r, e) {
  const a = Yr(r, "message");
  if (!(a && !a.configurable)) {
    for (var n = "	", l = `
${n}in ${e.fn?.name || "<unknown>"}`, d = e.ctx; d !== null; )
      l += `
${n}in ${d.function?.[Po].split("/").pop()}`, d = d.p;
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
function si(r) {
  const e = Wa.get(r);
  e && (hr(r, "message", {
    value: e.message
  }), hr(r, "stack", {
    value: e.stack
  }));
}
let ga = [];
function cl() {
  var r = ga;
  ga = [], qo(r);
}
function ra(r) {
  ga.length === 0 && queueMicrotask(cl), ga.push(r);
}
function vl() {
  for (var r = (
    /** @type {Effect} */
    st.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && Go(), r;
}
let Cr = null;
function di(r) {
  Cr = r;
}
const ul = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ea(r) {
  var e = Bt | Wt, a = bt !== null && (bt.f & Bt) !== 0 ? (
    /** @type {Derived} */
    bt
  ) : null;
  return st === null || a !== null && (a.f & Gt) !== 0 ? e |= Gt : st.f |= rn, {
    ctx: Ut,
    deps: null,
    effects: null,
    equals: ai,
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
function fl(r, e) {
  let a = (
    /** @type {Effect | null} */
    st
  );
  a === null && Uo();
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
  ), c = null, g = !bt;
  return Al(() => {
    Ye && (Cr = st);
    try {
      var w = r();
    } catch (T) {
      w = Promise.reject(T);
    }
    Ye && (Cr = null);
    var O = () => w;
    l = c?.then(O, O) ?? Promise.resolve(w), c = l;
    var h = (
      /** @type {Batch} */
      wt
    ), L = n.pending;
    g && (n.update_pending_count(1), L || h.increment());
    const N = (T, y = void 0) => {
      c = null, Cr = null, L || h.activate(), y ? y !== an && (d.f |= kr, $r(d, y)) : ((d.f & kr) !== 0 && (d.f ^= kr), $r(d, T)), g && (n.update_pending_count(-1), L || h.decrement()), fi();
    };
    if (l.then(N, (T) => N(null, T || "unknown")), h)
      return () => {
        queueMicrotask(() => h.neuter());
      };
  }), Ye && (d.f |= Ca), new Promise((w) => {
    function O(h) {
      function L() {
        h === l ? w(d) : O(l);
      }
      h.then(L, L);
    }
    O(l);
  });
}
// @__NO_SIDE_EFFECTS__
function Se(r) {
  const e = /* @__PURE__ */ Ea(r);
  return Si(e), e;
}
// @__NO_SIDE_EFFECTS__
function ci(r) {
  const e = /* @__PURE__ */ Ea(r);
  return e.equals = ni, e;
}
function Ya(r) {
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
let Oa = [];
function bl(r) {
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
function ln(r) {
  var e, a = st;
  if (sr(bl(r)), Ye) {
    let n = Fr;
    Tn(/* @__PURE__ */ new Set());
    try {
      Oa.includes(r) && Wo(), Oa.push(r), Ya(r), e = Xa(r);
    } finally {
      sr(a), Tn(n), Oa.pop();
    }
  } else
    try {
      Ya(r), e = Xa(r);
    } finally {
      sr(a);
    }
  return e;
}
function vi(r) {
  var e = ln(r);
  if (r.equals(e) || (r.v = e, r.wv = Mi()), !zr)
    if (Br !== null)
      Br.set(r, r.v);
    else {
      var a = (gr || (r.f & Gt) !== 0) && r.deps !== null ? fr : Pt;
      Dt(r, a);
    }
}
function ui(r, e, a) {
  const n = Ea;
  if (e.length === 0) {
    a(r.map(n));
    return;
  }
  var l = wt, d = (
    /** @type {Effect} */
    st
  ), c = gl(), g = vl();
  Promise.all(e.map((w) => /* @__PURE__ */ fl(w))).then((w) => {
    l?.activate(), c();
    try {
      a([...r.map(n), ...w]);
    } catch (O) {
      (d.f & Ar) === 0 && on(O, d);
    }
    l?.deactivate(), fi();
  }).catch((w) => {
    g.error(w);
  });
}
function gl() {
  var r = st, e = bt, a = Ut;
  return function() {
    sr(r), rr(e), fa(a), Ye && di(null);
  };
}
function fi() {
  sr(null), rr(null), fa(null), Ye && di(null);
}
const Gr = /* @__PURE__ */ new Set();
let wt = null, la = null, Br = null, En = /* @__PURE__ */ new Set(), ha = [];
function bi() {
  const r = (
    /** @type {() => void} */
    ha.shift()
  );
  ha.length > 0 && queueMicrotask(bi), r();
}
let Qr = [], sn = null, Ka = !1;
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
  #i = /* @__PURE__ */ new Set();
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
  #o = [];
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
    Qr = [], la = null;
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
      this.#a = [], this.#t = [], this.#l = [], la = wt, wt = null, Sn(n), Sn(l), wt === null ? wt = this : Gr.delete(this), this.#d?.resolve();
    } else
      this.#s(this.#a), this.#s(this.#t), this.#s(this.#l);
    if (a) {
      for (const [d, { v: c, wv: g }] of a)
        d.wv <= g && (d.v = c);
      Br = null;
    }
    for (const d of this.#r)
      qr(d);
    for (const d of this.#o)
      qr(d);
    this.#r = [], this.#o = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #b(e) {
    e.f ^= Pt;
    for (var a = e.first; a !== null; ) {
      var n = a.f, l = (n & (ur | Vr)) !== 0, d = l && (n & Pt) !== 0, c = d || (n & Zt) !== 0 || this.skipped_effects.has(a);
      if (!c && a.fn !== null) {
        if (l)
          a.f ^= Pt;
        else if ((n & Pt) === 0)
          if ((n & en) !== 0)
            this.#t.push(a);
          else if ((n & Ca) !== 0) {
            var g = a.b?.pending ? this.#o : this.#r;
            g.push(a);
          } else aa(a) && ((a.f & Hr) !== 0 && this.#l.push(a), qr(a));
        var w = a.first;
        if (w !== null) {
          a = w;
          continue;
        }
      }
      var O = a.parent;
      for (a = a.next; a === null && O !== null; )
        a = O.next, O = O.parent;
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
    wt = this;
  }
  deactivate() {
    wt = null, la = null;
    for (const e of En)
      if (En.delete(e), e(), wt !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Qr.length > 0 ? hl() : this.#f(), wt === this && (this.#e === 0 && Gr.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #f() {
    if (!this.#c)
      for (const e of this.#i)
        e();
    this.#i.clear();
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    if (this.#e -= 1, this.#e === 0) {
      for (const e of this.#v)
        Dt(e, Wt), Tr(e);
      for (const e of this.#u)
        Dt(e, fr), Tr(e);
      this.#a = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#i.add(e);
  }
  settled() {
    return (this.#d ??= Bo()).promise;
  }
  static ensure() {
    if (wt === null) {
      const e = wt = new Zr();
      Gr.add(wt), Zr.enqueue(() => {
        wt === e && e.flush();
      });
    }
    return wt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ha.length === 0 && queueMicrotask(bi), ha.unshift(e);
  }
}
function hl() {
  var r = jr;
  Ka = !0;
  try {
    var e = 0;
    for (An(!0); Qr.length > 0; ) {
      var a = Zr.ensure();
      if (e++ > 1e3) {
        if (Ye) {
          var n = /* @__PURE__ */ new Map();
          for (const d of a.current.keys())
            for (const [c, g] of d.updated ?? []) {
              var l = n.get(c);
              l || (l = { error: g.error, count: 0 }, n.set(c, l)), l.count += g.count;
            }
          for (const d of n.values())
            console.error(d.error);
        }
        ml();
      }
      a.process(Qr), Er.clear();
    }
  } finally {
    Ka = !1, An(r), sn = null;
  }
}
function ml() {
  try {
    Qo();
  } catch (r) {
    Ye && hr(r, "stack", { value: "" }), on(r, sn);
  }
}
function Sn(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if ((n.f & (Ar | Zt)) === 0 && aa(n)) {
        var l = wt ? wt.current.size : 0;
        if (qr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ki(n) : n.fn = null), wt !== null && wt.current.size > l && (n.f & $n) !== 0)
          break;
      }
    }
    for (; a < e; )
      Tr(r[a++]);
  }
}
function Tr(r) {
  for (var e = sn = r; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (Ka && e === st && (a & Hr) !== 0)
      return;
    if ((a & (Vr | ur)) !== 0) {
      if ((a & Pt) === 0) return;
      e.f ^= Pt;
    }
  }
  Qr.push(e);
}
let Fr = /* @__PURE__ */ new Set();
const Er = /* @__PURE__ */ new Map();
function Tn(r) {
  Fr = r;
}
let dn = !1;
function _l() {
  dn = !0;
}
function Jr(r, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: ai,
    rv: 0,
    wv: 0
  };
  return a;
}
// @__NO_SIDE_EFFECTS__
function ke(r, e) {
  const a = Jr(r);
  return Si(a), a;
}
// @__NO_SIDE_EFFECTS__
function gi(r, e = !1, a = !0) {
  const n = Jr(r);
  return e || (n.equals = ni), n;
}
function K(r, e, a = !1) {
  bt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xt || (bt.f & va) !== 0) && li() && (bt.f & (Bt | Hr | Ca | va)) !== 0 && !dr?.includes(r) && al();
  let n = a ? ot(e) : e;
  return Ye && oi(
    n,
    /** @type {string} */
    r.label
  ), $r(r, n);
}
function $r(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    zr ? Er.set(r, e) : Er.set(r, a), r.v = e;
    var n = Zr.ensure();
    if (n.capture(r, a), Ye) {
      if (st !== null) {
        const l = ii("UpdatedAt");
        if (l !== null) {
          r.updated ??= /* @__PURE__ */ new Map();
          let d = r.updated.get(l.stack);
          d || (d = { error: l, count: 0 }, r.updated.set(l.stack, d)), d.count++;
        }
      }
      st !== null && (r.set_during_effect = !0);
    }
    (r.f & Bt) !== 0 && ((r.f & Wt) !== 0 && ln(
      /** @type {Derived} */
      r
    ), Dt(r, (r.f & Gt) === 0 ? Pt : fr)), r.wv = Mi(), mi(r, Wt), st !== null && (st.f & Pt) !== 0 && (st.f & (ur | Vr)) === 0 && (Vt === null ? Pl([r]) : Vt.push(r)), Ye && Fr.size > 0 && !dn && hi();
  }
  return e;
}
function hi() {
  dn = !1;
  const r = Array.from(Fr);
  for (const e of r)
    (e.f & Pt) !== 0 && Dt(e, fr), aa(e) && qr(e);
  Fr.clear();
}
function Sa(r, e = 1) {
  var a = t(r), n = e === 1 ? a++ : a--;
  return K(r, a), n;
}
function ja(r) {
  K(r, r.v + 1);
}
function mi(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = a.length, l = 0; l < n; l++) {
      var d = a[l], c = d.f;
      if (Ye && (c & va) !== 0) {
        Fr.add(d);
        continue;
      }
      var g = (c & Wt) === 0;
      g && Dt(d, e), (c & Bt) !== 0 ? mi(
        /** @type {Derived} */
        d,
        fr
      ) : g && Tr(
        /** @type {Effect} */
        d
      );
    }
}
const xl = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function ot(r) {
  if (typeof r != "object" || r === null || lr in r)
    return r;
  const e = $a(r);
  if (e !== No && e !== Oo)
    return r;
  var a = /* @__PURE__ */ new Map(), n = ya(r), l = /* @__PURE__ */ ke(0), d = Sr, c = (O) => {
    if (Sr === d)
      return O();
    var h = bt, L = Sr;
    rr(null), Pn(d);
    var N = O();
    return rr(h), Pn(L), N;
  };
  n && (a.set("length", /* @__PURE__ */ ke(
    /** @type {any[]} */
    r.length
  )), Ye && (r = /** @type {any} */
  yl(
    /** @type {any[]} */
    r
  )));
  var g = "";
  function w(O) {
    g = O, br(l, `${g} version`);
    for (const [h, L] of a)
      br(L, wr(g, h));
  }
  return new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(O, h, L) {
        (!("value" in L) || L.configurable === !1 || L.enumerable === !1 || L.writable === !1) && tl();
        var N = a.get(h);
        return N === void 0 ? N = c(() => {
          var T = /* @__PURE__ */ ke(L.value);
          return a.set(h, T), Ye && typeof h == "string" && br(T, wr(g, h)), T;
        }) : K(N, L.value, !0), !0;
      },
      deleteProperty(O, h) {
        var L = a.get(h);
        if (L === void 0) {
          if (h in O) {
            const N = c(() => /* @__PURE__ */ ke(Tt));
            a.set(h, N), ja(l), Ye && br(N, wr(g, h));
          }
        } else
          K(L, Tt), ja(l);
        return !0;
      },
      get(O, h, L) {
        if (h === lr)
          return r;
        if (Ye && h === ei)
          return w;
        var N = a.get(h), T = h in O;
        if (N === void 0 && (!T || Yr(O, h)?.writable) && (N = c(() => {
          var f = ot(T ? O[h] : Tt), G = /* @__PURE__ */ ke(f);
          return Ye && br(G, wr(g, h)), G;
        }), a.set(h, N)), N !== void 0) {
          var y = t(N);
          return y === Tt ? void 0 : y;
        }
        return Reflect.get(O, h, L);
      },
      getOwnPropertyDescriptor(O, h) {
        var L = Reflect.getOwnPropertyDescriptor(O, h);
        if (L && "value" in L) {
          var N = a.get(h);
          N && (L.value = t(N));
        } else if (L === void 0) {
          var T = a.get(h), y = T?.v;
          if (T !== void 0 && y !== Tt)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return L;
      },
      has(O, h) {
        if (h === lr)
          return !0;
        var L = a.get(h), N = L !== void 0 && L.v !== Tt || Reflect.has(O, h);
        if (L !== void 0 || st !== null && (!N || Yr(O, h)?.writable)) {
          L === void 0 && (L = c(() => {
            var y = N ? ot(O[h]) : Tt, f = /* @__PURE__ */ ke(y);
            return Ye && br(f, wr(g, h)), f;
          }), a.set(h, L));
          var T = t(L);
          if (T === Tt)
            return !1;
        }
        return N;
      },
      set(O, h, L, N) {
        var T = a.get(h), y = h in O;
        if (n && h === "length")
          for (var f = L; f < /** @type {Source<number>} */
          T.v; f += 1) {
            var G = a.get(f + "");
            G !== void 0 ? K(G, Tt) : f in O && (G = c(() => /* @__PURE__ */ ke(Tt)), a.set(f + "", G), Ye && br(G, wr(g, f)));
          }
        if (T === void 0)
          (!y || Yr(O, h)?.writable) && (T = c(() => /* @__PURE__ */ ke(void 0)), K(T, ot(L)), a.set(h, T), Ye && br(T, wr(g, h)));
        else {
          y = T.v !== Tt;
          var Z = c(() => ot(L));
          K(T, Z);
        }
        var x = Reflect.getOwnPropertyDescriptor(O, h);
        if (x?.set && x.set.call(N, L), !y) {
          if (n && typeof h == "string") {
            var B = (
              /** @type {Source<number>} */
              a.get("length")
            ), D = Number(h);
            Number.isInteger(D) && D >= B.v && K(B, D + 1);
          }
          ja(l);
        }
        return !0;
      },
      ownKeys(O) {
        t(l);
        var h = Reflect.ownKeys(O).filter((T) => {
          var y = a.get(T);
          return y === void 0 || y.v !== Tt;
        });
        for (var [L, N] of a)
          N.v !== Tt && !(L in O) && h.push(L);
        return h;
      },
      setPrototypeOf() {
        rl();
      }
    }
  );
}
function wr(r, e) {
  return typeof e == "symbol" ? `${r}[Symbol(${e.description ?? ""})]` : xl.test(e) ? `${r}.${e}` : /^\d+$/.test(e) ? `${r}[${e}]` : `${r}['${e}']`;
}
function Mn(r) {
  try {
    if (r !== null && typeof r == "object" && lr in r)
      return r[lr];
  } catch {
  }
  return r;
}
function pl(r, e) {
  return Object.is(Mn(r), Mn(e));
}
const wl = /* @__PURE__ */ new Set([
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
function yl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var l = Reflect.get(e, a, n);
      return wl.has(
        /** @type {string} */
        a
      ) ? function(...d) {
        _l();
        var c = l.apply(this, d);
        return hi(), c;
      } : l;
    }
  });
}
var _i, kl, Cl, El;
function Pr(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function tr(r) {
  return Cl.call(r);
}
// @__NO_SIDE_EFFECTS__
function Ta(r) {
  return El.call(r);
}
function o(r, e) {
  return /* @__PURE__ */ tr(r);
}
function we(r, e) {
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
function u(r, e = 1, a = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ta(n);
  return n;
}
function Sl(r) {
  r.textContent = "";
}
function cn() {
  return !1;
}
function Tl(r) {
  st === null && bt === null && Xo(r), bt !== null && (bt.f & Gt) !== 0 && st === null && Ko(), zr && Yo(r);
}
function Ml(r, e) {
  var a = e.last;
  a === null ? e.last = e.first = r : (a.next = r, r.prev = a, e.last = r);
}
function _r(r, e, a, n = !0) {
  var l = st;
  if (Ye)
    for (; l !== null && (l.f & va) !== 0; )
      l = l.parent;
  l !== null && (l.f & Zt) !== 0 && (r |= Zt);
  var d = {
    ctx: Ut,
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
  if (Ye && (d.component_function = ta), a)
    try {
      qr(d), d.f |= ka;
    } catch (w) {
      throw Yt(d), w;
    }
  else e !== null && Tr(d);
  var c = a && d.deps === null && d.first === null && d.nodes_start === null && d.teardown === null && (d.f & rn) === 0;
  if (!c && n && (l !== null && Ml(d, l), bt !== null && (bt.f & Bt) !== 0 && (r & Vr) === 0)) {
    var g = (
      /** @type {Derived} */
      bt
    );
    (g.effects ??= []).push(d);
  }
  return d;
}
function vn(r) {
  const e = _r(tn, null, !1);
  return Dt(e, Pt), e.teardown = r, e;
}
function xt(r) {
  Tl("$effect"), Ye && hr(r, "name", {
    value: "$effect"
  });
  var e = (
    /** @type {Effect} */
    st.f
  ), a = !bt && (e & ur) !== 0 && (e & ka) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Ut
    );
    (n.e ??= []).push(r);
  } else
    return xi(r);
}
function xi(r) {
  return _r(en | $n, r, !1);
}
function xr(r) {
  return _r(en, r, !1);
}
function Al(r) {
  return _r(Ca | rn, r, !0);
}
function Ma(r, e = 0) {
  return _r(tn | e, r, !0);
}
function S(r, e = [], a = []) {
  ui(e, a, (n) => {
    _r(tn, () => r(...n.map(t)), !0);
  });
}
function Lr(r, e = 0) {
  var a = _r(Hr | e, r, !0);
  return Ye && (a.dev_stack = ba), a;
}
function cr(r, e = !0) {
  return _r(ur, r, !0, e);
}
function pi(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = zr, n = bt;
    In(!0), rr(null);
    try {
      e.call(null);
    } finally {
      In(a), rr(n);
    }
  }
}
function wi(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    a.ac?.abort(an);
    var n = a.next;
    (a.f & Vr) !== 0 ? a.parent = null : Yt(a, e), a = n;
  }
}
function Il(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    (e.f & ur) === 0 && Yt(e), e = a;
  }
}
function Yt(r, e = !0) {
  var a = !1;
  (e || (r.f & Fo) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (yi(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), a = !0), wi(r, e && !a), ma(r, 0), Dt(r, Ar);
  var n = r.transitions;
  if (n !== null)
    for (const d of n)
      d.stop();
  pi(r);
  var l = r.parent;
  l !== null && l.first !== null && ki(r), Ye && (r.component_function = null), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function yi(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(r)
    );
    r.remove(), r = a;
  }
}
function ki(r) {
  var e = r.parent, a = r.prev, n = r.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = a));
}
function Aa(r, e) {
  var a = [];
  un(r, a, !0), Ci(a, () => {
    Yt(r), e && e();
  });
}
function Ci(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var l of r)
      l.out(n);
  } else
    e();
}
function un(r, e, a) {
  if ((r.f & Zt) === 0) {
    if (r.f ^= Zt, r.transitions !== null)
      for (const c of r.transitions)
        (c.is_global || a) && e.push(c);
    for (var n = r.first; n !== null; ) {
      var l = n.next, d = (n.f & Ir) !== 0 || (n.f & ur) !== 0;
      un(n, e, d ? a : !1), n = l;
    }
  }
}
function Ia(r) {
  Ei(r, !0);
}
function Ei(r, e) {
  if ((r.f & Zt) !== 0) {
    r.f ^= Zt, (r.f & Pt) === 0 && (Dt(r, Wt), Tr(r));
    for (var a = r.first; a !== null; ) {
      var n = a.next, l = (a.f & Ir) !== 0 || (a.f & ur) !== 0;
      Ei(a, l ? e : !1), a = n;
    }
    if (r.transitions !== null)
      for (const d of r.transitions)
        (d.is_global || e) && d.in();
  }
}
let jr = !1;
function An(r) {
  jr = r;
}
let zr = !1;
function In(r) {
  zr = r;
}
let bt = null, Xt = !1;
function rr(r) {
  bt = r;
}
let st = null;
function sr(r) {
  st = r;
}
let dr = null;
function Si(r) {
  bt !== null && (dr === null ? dr = [r] : dr.push(r));
}
let zt = null, Ot = 0, Vt = null;
function Pl(r) {
  Vt = r;
}
let Ti = 1, ea = 0, Sr = ea;
function Pn(r) {
  Sr = r;
}
let gr = !1;
function Mi() {
  return ++Ti;
}
function aa(r) {
  var e = r.f;
  if ((e & Wt) !== 0)
    return !0;
  if ((e & fr) !== 0) {
    var a = r.deps, n = (e & Gt) !== 0;
    if (a !== null) {
      var l, d, c = (e & ca) !== 0, g = n && st !== null && !gr, w = a.length;
      if ((c || g) && (st === null || (st.f & Ar) === 0)) {
        var O = (
          /** @type {Derived} */
          r
        ), h = O.parent;
        for (l = 0; l < w; l++)
          d = a[l], (c || !d?.reactions?.includes(O)) && (d.reactions ??= []).push(O);
        c && (O.f ^= ca), g && h !== null && (h.f & Gt) === 0 && (O.f ^= Gt);
      }
      for (l = 0; l < w; l++)
        if (d = a[l], aa(
          /** @type {Derived} */
          d
        ) && vi(
          /** @type {Derived} */
          d
        ), d.wv > r.wv)
          return !0;
    }
    (!n || st !== null && !gr) && Dt(r, Pt);
  }
  return !1;
}
function Ai(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !dr?.includes(r))
    for (var l = 0; l < n.length; l++) {
      var d = n[l];
      (d.f & Bt) !== 0 ? Ai(
        /** @type {Derived} */
        d,
        e,
        !1
      ) : e === d && (a ? Dt(d, Wt) : (d.f & Pt) !== 0 && Dt(d, fr), Tr(
        /** @type {Effect} */
        d
      ));
    }
}
function Xa(r) {
  var e = zt, a = Ot, n = Vt, l = bt, d = gr, c = dr, g = Ut, w = Xt, O = Sr, h = r.f;
  zt = /** @type {null | Value[]} */
  null, Ot = 0, Vt = null, gr = (h & Gt) !== 0 && (Xt || !jr || bt === null), bt = (h & (ur | Vr)) === 0 ? r : null, dr = null, fa(r.ctx), Xt = !1, Sr = ++ea, r.ac !== null && (r.ac.abort(an), r.ac = null);
  try {
    r.f |= ua;
    var L = (
      /** @type {Function} */
      (0, r.fn)()
    ), N = r.deps;
    if (zt !== null) {
      var T;
      if (ma(r, Ot), N !== null && Ot > 0)
        for (N.length = Ot + zt.length, T = 0; T < zt.length; T++)
          N[Ot + T] = zt[T];
      else
        r.deps = N = zt;
      if (!gr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (h & Bt) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (T = Ot; T < N.length; T++)
          (N[T].reactions ??= []).push(r);
    } else N !== null && Ot < N.length && (ma(r, Ot), N.length = Ot);
    if (li() && Vt !== null && !Xt && N !== null && (r.f & (Bt | fr | Wt)) === 0)
      for (T = 0; T < /** @type {Source[]} */
      Vt.length; T++)
        Ai(
          Vt[T],
          /** @type {Effect} */
          r
        );
    return l !== null && l !== r && (ea++, Vt !== null && (n === null ? n = Vt : n.push(.../** @type {Source[]} */
    Vt))), (r.f & kr) !== 0 && (r.f ^= kr), L;
  } catch (y) {
    return sl(y);
  } finally {
    r.f ^= ua, zt = e, Ot = a, Vt = n, bt = l, gr = d, dr = c, fa(g), Xt = w, Sr = O;
  }
}
function Ll(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = Ro.call(a, r);
    if (n !== -1) {
      var l = a.length - 1;
      l === 0 ? a = e.reactions = null : (a[n] = a[l], a.pop());
    }
  }
  a === null && (e.f & Bt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (zt === null || !zt.includes(e)) && (Dt(e, fr), (e.f & (Gt | ca)) === 0 && (e.f ^= ca), Ya(
    /** @type {Derived} **/
    e
  ), ma(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ma(r, e) {
  var a = r.deps;
  if (a !== null)
    for (var n = e; n < a.length; n++)
      Ll(r, a[n]);
}
function qr(r) {
  var e = r.f;
  if ((e & Ar) === 0) {
    Dt(r, Pt);
    var a = st, n = jr;
    if (st = r, jr = !0, Ye) {
      var l = ta;
      Cn(r.component_function);
      var d = (
        /** @type {any} */
        ba
      );
      kn(r.dev_stack ?? ba);
    }
    try {
      (e & Hr) !== 0 ? Il(r) : wi(r), pi(r);
      var c = Xa(r);
      r.teardown = typeof c == "function" ? c : null, r.wv = Ti;
      var g;
      Ye && ll && (r.f & Wt) !== 0 && r.deps;
    } finally {
      jr = n, st = a, Ye && (Cn(l), kn(d));
    }
  }
}
function t(r) {
  var e = r.f, a = (e & Bt) !== 0;
  if (bt !== null && !Xt) {
    var n = st !== null && (st.f & Ar) !== 0;
    if (!n && !dr?.includes(r)) {
      var l = bt.deps;
      if ((bt.f & ua) !== 0)
        r.rv < ea && (r.rv = ea, zt === null && l !== null && l[Ot] === r ? Ot++ : zt === null ? zt = [r] : (!gr || !zt.includes(r)) && zt.push(r));
      else {
        (bt.deps ??= []).push(r);
        var d = r.reactions;
        d === null ? r.reactions = [bt] : d.includes(bt) || d.push(bt);
      }
    }
  } else if (a && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var c = (
      /** @type {Derived} */
      r
    ), g = c.parent;
    g !== null && (g.f & Gt) === 0 && (c.f ^= Gt);
  }
  if (Ye) {
    if (Cr) {
      var w = (Cr.f & ua) !== 0, O = Cr.deps?.includes(r);
      if (!w && !Xt && !O) {
        nl(
          /** @type {string} */
          r.label
        );
        var h = ii("TracedAt");
        h && console.warn(h);
      }
    }
    ul.delete(r);
  }
  if (zr) {
    if (Er.has(r))
      return Er.get(r);
    if (a) {
      c = /** @type {Derived} */
      r;
      var L = c.v;
      return ((c.f & Pt) === 0 && c.reactions !== null || Ii(c)) && (L = ln(c)), Er.set(c, L), L;
    }
  } else if (a) {
    if (c = /** @type {Derived} */
    r, Br?.has(c))
      return Br.get(c);
    aa(c) && vi(c);
  }
  if ((r.f & kr) !== 0)
    throw r.v;
  return r.v;
}
function Ii(r) {
  if (r.v === Tt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Er.has(e) || (e.f & Bt) !== 0 && Ii(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Dr(r) {
  var e = Xt;
  try {
    return Xt = !0, r();
  } finally {
    Xt = e;
  }
}
const zl = -7169;
function Dt(r, e) {
  r.f = r.f & zl | e;
}
function Dl(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (lr in r)
      Qa(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const a = r[e];
        typeof a == "object" && a && lr in a && Qa(a);
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
    const a = $a(r);
    if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
      const n = Zn(a);
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
    r.autofocus = !0, ra(() => {
      document.activeElement === a && r.focus();
    });
  }
}
let Ln = !1;
function Nl() {
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
  var e = bt, a = st;
  rr(null), sr(null);
  try {
    return r();
  } finally {
    rr(e), sr(a);
  }
}
function Pi(r, e, a, n = a) {
  r.addEventListener(e, () => Pa(a));
  const l = r.__on_r;
  l ? r.__on_r = () => {
    l(), n(!0);
  } : r.__on_r = () => n(!0), Nl();
}
const Ol = /* @__PURE__ */ new Set(), jl = /* @__PURE__ */ new Set();
function Li(r, e, a, n = {}) {
  function l(d) {
    if (n.capture || ql.call(e, d), !d.cancelBubble)
      return Pa(() => a?.call(this, d));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? ra(() => {
    e.addEventListener(r, l, n);
  }) : e.addEventListener(r, l, n), l;
}
function qt(r, e, a, n, l) {
  var d = { capture: n, passive: l }, c = Li(r, e, a, d);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && vn(() => {
    e.removeEventListener(r, c, d);
  });
}
function ft(r) {
  for (var e = 0; e < r.length; e++)
    Ol.add(r[e]);
  for (var a of jl)
    a(r);
}
let zn = null;
function ql(r) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, l = r.composedPath?.() || [], d = (
    /** @type {null | Element} */
    l[0] || r.target
  );
  zn = r;
  var c = 0, g = zn === r && r.__root;
  if (g) {
    var w = l.indexOf(g);
    if (w !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var O = l.indexOf(e);
    if (O === -1)
      return;
    w <= O && (c = w);
  }
  if (d = /** @type {Element} */
  l[c] || r.target, d !== e) {
    hr(r, "currentTarget", {
      configurable: !0,
      get() {
        return d || a;
      }
    });
    var h = bt, L = st;
    rr(null), sr(null);
    try {
      for (var N, T = []; d !== null; ) {
        var y = d.assignedSlot || d.parentNode || /** @type {any} */
        d.host || null;
        try {
          var f = d["__" + n];
          if (f != null && (!/** @type {any} */
          d.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === d))
            if (ya(f)) {
              var [G, ...Z] = f;
              G.apply(d, [r, ...Z]);
            } else
              f.call(d, r);
        } catch (x) {
          N ? T.push(x) : N = x;
        }
        if (r.cancelBubble || y === e || y === null)
          break;
        d = y;
      }
      if (N) {
        for (let x of T)
          queueMicrotask(() => {
            throw x;
          });
        throw N;
      }
    } finally {
      r.__root = e, delete r.currentTarget, rr(h), sr(L);
    }
  }
}
function fn(r) {
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
  var a = (e & Ao) !== 0, n = (e & Io) !== 0, l, d = !r.startsWith("<!>");
  return () => {
    l === void 0 && (l = fn(d ? r : "<!>" + r), a || (l = /** @type {Node} */
    /* @__PURE__ */ tr(l)));
    var c = (
      /** @type {TemplateNode} */
      n || kl ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (a) {
      var g = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tr(c)
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
function Bl(r, e, a = "svg") {
  var n = !r.startsWith("<!>"), l = `<${a}>${n ? r : "<!>" + r}</${a}>`, d;
  return () => {
    if (!d) {
      var c = (
        /** @type {DocumentFragment} */
        fn(l)
      ), g = (
        /** @type {Element} */
        /* @__PURE__ */ tr(c)
      );
      d = /** @type {Element} */
      /* @__PURE__ */ tr(g);
    }
    var w = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    return Mr(w, w), w;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(r, e) {
  return /* @__PURE__ */ Bl(r, e, "svg");
}
function Et(r = "") {
  {
    var e = Pr(r + "");
    return Mr(e, e), e;
  }
}
function Ae() {
  var r = document.createDocumentFragment(), e = document.createComment(""), a = Pr();
  return r.append(e, a), Mr(e, a), r;
}
function i(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function Fl(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Hl = [
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
function Vl(r) {
  return Hl.includes(r);
}
const Gl = {
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
function Ul(r) {
  return r = r.toLowerCase(), Gl[r] ?? r;
}
let zi = !0;
function Dn(r) {
  zi = r;
}
function oe(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && (r.__t = a, r.nodeValue = a + "");
}
function lt(r, e, ...a) {
  var n = r, l = jt, d;
  Lr(() => {
    l !== (l = e()) && (d && (Yt(d), d = null), Ye && l == null && Zo(), d = cr(() => (
      /** @type {SnippetFn} */
      l(n, ...a)
    )));
  }, Ir);
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
          el(e);
        },
        set: (n) => {
          a = n;
        }
      });
    }
  };
  r("$state"), r("$effect"), r("$derived"), r("$inspect"), r("$props"), r("$bindable");
}
function b(r, e, a = !1) {
  var n = r, l = null, d = null, c = Tt, g = a ? Ir : 0, w = !1;
  const O = (T, y = !0) => {
    w = !0, N(y, T);
  };
  var h = null;
  function L() {
    h !== null && (h.lastChild.remove(), n.before(h), h = null);
    var T = c ? l : d, y = c ? d : l;
    T && Ia(T), y && Aa(y, () => {
      c ? d = null : l = null;
    });
  }
  const N = (T, y) => {
    if (c !== (c = T)) {
      var f = cn(), G = n;
      if (f && (h = document.createDocumentFragment(), h.append(G = Pr())), c ? l ??= y && cr(() => y(G)) : d ??= y && cr(() => y(G)), f) {
        var Z = (
          /** @type {Batch} */
          wt
        ), x = c ? l : d, B = c ? d : l;
        x && Z.skipped_effects.delete(x), B && Z.skipped_effects.add(B), Z.add_callback(L);
      } else
        L();
    }
  };
  Lr(() => {
    w = !1, e(O), w || N(null, null);
  }, g);
}
function vt(r, e) {
  return e;
}
function Wl(r, e, a) {
  for (var n = r.items, l = [], d = e.length, c = 0; c < d; c++)
    un(e[c].e, l, !0);
  var g = d > 0 && l.length === 0 && a !== null;
  if (g) {
    var w = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    Sl(w), w.append(
      /** @type {Element} */
      a
    ), n.clear(), $t(r, e[0].prev, e[d - 1].next);
  }
  Ci(l, () => {
    for (var O = 0; O < d; O++) {
      var h = e[O];
      g || (n.delete(h.k), $t(r, h.prev, h.next)), Yt(h.e, !g);
    }
  });
}
function We(r, e, a, n, l, d = null) {
  var c = r, g = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, w = (e & Kn) !== 0;
  if (w) {
    var O = (
      /** @type {Element} */
      r
    );
    c = O.appendChild(Pr());
  }
  var h = null, L = !1, N = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ ci(() => {
    var Z = a();
    return ya(Z) ? Z : Z == null ? [] : Qn(Z);
  }), y, f;
  function G() {
    Yl(
      f,
      y,
      g,
      N,
      c,
      l,
      e,
      n,
      a
    ), d !== null && (y.length === 0 ? h ? Ia(h) : h = cr(() => d(c)) : h !== null && Aa(h, () => {
      h = null;
    }));
  }
  Lr(() => {
    f ??= /** @type {Effect} */
    st, y = t(T);
    var Z = y.length;
    if (!(L && Z === 0)) {
      L = Z === 0;
      var x, B, D, j;
      if (cn()) {
        var P = /* @__PURE__ */ new Set(), F = (
          /** @type {Batch} */
          wt
        );
        for (B = 0; B < Z; B += 1) {
          D = y[B], j = n(D, B);
          var H = g.items.get(j) ?? N.get(j);
          H ? (e & (pa | wa)) !== 0 && Di(H, D, B, e) : (x = Ri(
            null,
            g,
            null,
            null,
            D,
            j,
            B,
            l,
            e,
            a,
            !0
          ), N.set(j, x)), P.add(j);
        }
        for (const [A, U] of g.items)
          P.has(A) || F.skipped_effects.add(U.e);
        F.add_callback(G);
      } else
        G();
      t(T);
    }
  });
}
function Yl(r, e, a, n, l, d, c, g, w) {
  var O = (c & po) !== 0, h = (c & (pa | wa)) !== 0, L = e.length, N = a.items, T = a.first, y = T, f, G = null, Z, x = [], B = [], D, j, P, F;
  if (O)
    for (F = 0; F < L; F += 1)
      D = e[F], j = g(D, F), P = N.get(j), P !== void 0 && (P.a?.measure(), (Z ??= /* @__PURE__ */ new Set()).add(P));
  for (F = 0; F < L; F += 1) {
    if (D = e[F], j = g(D, F), P = N.get(j), P === void 0) {
      var H = n.get(j);
      if (H !== void 0) {
        n.delete(j), N.set(j, H);
        var A = G ? G.next : y;
        $t(a, G, H), $t(a, H, A), qa(H, A, l), G = H;
      } else {
        var U = y ? (
          /** @type {TemplateNode} */
          y.e.nodes_start
        ) : l;
        G = Ri(
          U,
          a,
          G,
          G === null ? a.first : G.next,
          D,
          j,
          F,
          d,
          c,
          w
        );
      }
      N.set(j, G), x = [], B = [], y = G.next;
      continue;
    }
    if (h && Di(P, D, F, c), (P.e.f & Zt) !== 0 && (Ia(P.e), O && (P.a?.unfix(), (Z ??= /* @__PURE__ */ new Set()).delete(P))), P !== y) {
      if (f !== void 0 && f.has(P)) {
        if (x.length < B.length) {
          var X = B[0], R;
          G = X.prev;
          var C = x[0], k = x[x.length - 1];
          for (R = 0; R < x.length; R += 1)
            qa(x[R], X, l);
          for (R = 0; R < B.length; R += 1)
            f.delete(B[R]);
          $t(a, C.prev, k.next), $t(a, G, C), $t(a, k, X), y = X, G = k, F -= 1, x = [], B = [];
        } else
          f.delete(P), qa(P, y, l), $t(a, P.prev, P.next), $t(a, P, G === null ? a.first : G.next), $t(a, G, P), G = P;
        continue;
      }
      for (x = [], B = []; y !== null && y.k !== j; )
        (y.e.f & Zt) === 0 && (f ??= /* @__PURE__ */ new Set()).add(y), B.push(y), y = y.next;
      if (y === null)
        continue;
      P = y;
    }
    x.push(P), G = P, y = P.next;
  }
  if (y !== null || f !== void 0) {
    for (var M = f === void 0 ? [] : Qn(f); y !== null; )
      (y.e.f & Zt) === 0 && M.push(y), y = y.next;
    var p = M.length;
    if (p > 0) {
      var q = (c & Kn) !== 0 && L === 0 ? l : null;
      if (O) {
        for (F = 0; F < p; F += 1)
          M[F].a?.measure();
        for (F = 0; F < p; F += 1)
          M[F].a?.fix();
      }
      Wl(a, M, q);
    }
  }
  O && ra(() => {
    if (Z !== void 0)
      for (P of Z)
        P.a?.apply();
  }), r.first = a.first && a.first.e, r.last = G && G.e;
  for (var W of n.values())
    Yt(W.e);
  n.clear();
}
function Di(r, e, a, n) {
  (n & pa) !== 0 && $r(r.v, e), (n & wa) !== 0 ? $r(
    /** @type {Value<number>} */
    r.i,
    a
  ) : r.i = a;
}
function Ri(r, e, a, n, l, d, c, g, w, O, h) {
  var L = (w & pa) !== 0, N = (w & wo) === 0, T = L ? N ? /* @__PURE__ */ gi(l, !1, !1) : Jr(l) : l, y = (w & wa) === 0 ? c : Jr(c);
  Ye && L && (T.trace = () => {
    var Z = typeof y == "number" ? c : y.v;
    O()[Z];
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
    return f.e = cr(() => g(
      /** @type {Node} */
      r,
      T,
      y,
      O
    ), ol), f.e.prev = a && a.e, f.e.next = n && n.e, a === null ? h || (e.first = f) : (a.next = f, a.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
  } finally {
  }
}
function qa(r, e, a) {
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
      /* @__PURE__ */ Ta(d)
    );
    l.before(d), d = c;
  }
}
function $t(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function mr(r, e, a = !1, n = !1, l = !1) {
  var d = r, c = "";
  S(() => {
    var g = (
      /** @type {Effect} */
      st
    );
    if (c !== (c = e() ?? "") && (g.nodes_start !== null && (yi(
      g.nodes_start,
      /** @type {TemplateNode} */
      g.nodes_end
    ), g.nodes_start = g.nodes_end = null), c !== "")) {
      var w = c + "";
      a ? w = `<svg>${w}</svg>` : n && (w = `<math>${w}</math>`);
      var O = fn(w);
      if ((a || n) && (O = /** @type {Element} */
      /* @__PURE__ */ tr(O)), Mr(
        /** @type {TemplateNode} */
        /* @__PURE__ */ tr(O),
        /** @type {TemplateNode} */
        O.lastChild
      ), a || n)
        for (; /* @__PURE__ */ tr(O); )
          d.before(
            /** @type {Node} */
            /* @__PURE__ */ tr(O)
          );
      else
        d.before(O);
    }
  });
}
function St(r, e, a) {
  var n = r, l, d, c = null, g = null;
  function w() {
    d && (Aa(d), d = null), c && (c.lastChild.remove(), n.before(c), c = null), d = g, g = null;
  }
  Lr(() => {
    if (l !== (l = e())) {
      var O = cn();
      if (l) {
        var h = n;
        O && (c = document.createDocumentFragment(), c.append(h = Pr())), g = cr(() => a(h, l));
      }
      O ? wt.add_callback(w) : w();
    }
  }, Ir);
}
function Kl(r, e, a, n, l, d) {
  var c, g, w = null, O = (
    /** @type {TemplateNode} */
    r
  ), h;
  Lr(() => {
    const L = e() || null;
    var N = L === "svg" ? zo : null;
    L !== c && (h && (L === null ? Aa(h, () => {
      h = null, g = null;
    }) : L === g ? Ia(h) : (Yt(h), Dn(!1))), L && L !== g && (h = cr(() => {
      if (w = N ? document.createElementNS(N, L) : document.createElement(L), Mr(w, w), n) {
        var T = (
          /** @type {TemplateNode} */
          w.appendChild(Pr())
        );
        n(w, T);
      }
      st.nodes_end = w, O.before(w);
    })), c = L, c && (g = c), Dn(!0));
  }, Ir);
}
function Re(r, e, a) {
  xr(() => {
    var n = Dr(() => e(r, a?.()) || {});
    if (a && n?.update) {
      var l = !1, d = (
        /** @type {any} */
        {}
      );
      Ma(() => {
        var c = a();
        Dl(c), l && nn(d, c) && (d = c, n.update(c));
      }), l = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function Xl(r, e) {
  var a = void 0, n;
  Lr(() => {
    a !== (a = e()) && (n && (Yt(n), n = null), a && (n = cr(() => {
      xr(() => (
        /** @type {(node: Element) => void} */
        a(r)
      ));
    })));
  });
}
function Ni(r) {
  var e, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var l = r.length;
    for (e = 0; e < l; e++) r[e] && (a = Ni(r[e])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function Ql() {
  for (var r, e, a = 0, n = "", l = arguments.length; a < l; a++) (r = arguments[a]) && (e = Ni(r)) && (n && (n += " "), n += e);
  return n;
}
function $(r) {
  return typeof r == "object" ? Ql(r) : r ?? "";
}
const Rn = [...` 	
\r\f \v\uFEFF`];
function Zl(r, e, a) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var l in a)
      if (a[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var d = l.length, c = 0; (c = n.indexOf(l, c)) >= 0; ) {
          var g = c + d;
          (c === 0 || Rn.includes(n[c - 1])) && (g === n.length || Rn.includes(n[g])) ? n = (c === 0 ? "" : n.substring(0, c)) + n.substring(g + 1) : c = g;
        }
  }
  return n === "" ? null : n;
}
function Nn(r, e = !1) {
  var a = e ? " !important;" : ";", n = "";
  for (var l in r) {
    var d = r[l];
    d != null && d !== "" && (n += " " + l + ": " + d + a);
  }
  return n;
}
function Ba(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function Jl(r, e) {
  if (e) {
    var a = "", n, l;
    if (Array.isArray(e) ? (n = e[0], l = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var d = !1, c = 0, g = !1, w = [];
      n && w.push(...Object.keys(n).map(Ba)), l && w.push(...Object.keys(l).map(Ba));
      var O = 0, h = -1;
      const f = r.length;
      for (var L = 0; L < f; L++) {
        var N = r[L];
        if (g ? N === "/" && r[L - 1] === "*" && (g = !1) : d ? d === N && (d = !1) : N === "/" && r[L + 1] === "*" ? g = !0 : N === '"' || N === "'" ? d = N : N === "(" ? c++ : N === ")" && c--, !g && d === !1 && c === 0) {
          if (N === ":" && h === -1)
            h = L;
          else if (N === ";" || L === f - 1) {
            if (h !== -1) {
              var T = Ba(r.substring(O, h).trim());
              if (!w.includes(T)) {
                N !== ";" && L++;
                var y = r.substring(O, L).trim();
                a += " " + y + ";";
              }
            }
            O = L + 1, h = -1;
          }
        }
      }
    }
    return n && (a += Nn(n)), l && (a += Nn(l, !0)), a = a.trim(), a === "" ? null : a;
  }
  return r == null ? null : String(r);
}
function z(r, e, a, n, l, d) {
  var c = r.__className;
  if (c !== a || c === void 0) {
    var g = Zl(a, n, d);
    g == null ? r.removeAttribute("class") : e ? r.className = g : r.setAttribute("class", g), r.__className = a;
  } else if (d && l !== d)
    for (var w in d) {
      var O = !!d[w];
      (l == null || O !== !!l[w]) && r.classList.toggle(w, O);
    }
  return d;
}
function Fa(r, e = {}, a, n) {
  for (var l in a) {
    var d = a[l];
    e[l] !== d && (a[l] == null ? r.style.removeProperty(l) : r.style.setProperty(l, d, n));
  }
}
function mt(r, e, a, n) {
  var l = r.__style;
  if (l !== e) {
    var d = Jl(e, n);
    d == null ? r.removeAttribute("style") : r.style.cssText = d, r.__style = e;
  } else n && (Array.isArray(n) ? (Fa(r, a?.[0], n[0]), Fa(r, a?.[1], n[1], "important")) : Fa(r, a, n));
  return n;
}
function _a(r, e, a = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!ya(e))
      return il();
    for (var n of r.options)
      n.selected = e.includes(On(n));
    return;
  }
  for (n of r.options) {
    var l = On(n);
    if (pl(l, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Oi(r) {
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
  }), vn(() => {
    e.disconnect();
  });
}
function On(r) {
  return "__value" in r ? r.__value : r.value;
}
const Ur = Symbol("class"), yr = Symbol("style"), ji = Symbol("is custom element"), qi = Symbol("is html");
function Bi(r, e) {
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
function $l(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function ye(r, e, a, n) {
  var l = La(r);
  l[e] !== (l[e] = a) && (e === "loading" && (r[Vo] = a), a == null ? r.removeAttribute(e) : typeof a != "string" && Fi(r).includes(e) ? r[e] = a : r.setAttribute(e, a));
}
function es(r, e, a, n, l = !1) {
  var d = La(r), c = d[ji], g = !d[qi], w = e || {}, O = r.tagName === "OPTION";
  for (var h in e)
    h in a || (a[h] = null);
  a.class ? a.class = $(a.class) : (n || a[Ur]) && (a.class = null), a[yr] && (a.style ??= null);
  var L = Fi(r);
  for (const x in a) {
    let B = a[x];
    if (O && x === "value" && B == null) {
      r.value = r.__value = "", w[x] = B;
      continue;
    }
    if (x === "class") {
      var N = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      z(r, N, B, n, e?.[Ur], a[Ur]), w[x] = B, w[Ur] = a[Ur];
      continue;
    }
    if (x === "style") {
      mt(r, B, e?.[yr], a[yr]), w[x] = B, w[yr] = a[yr];
      continue;
    }
    var T = w[x];
    if (!(B === T && !(B === void 0 && r.hasAttribute(x)))) {
      w[x] = B;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const D = {}, j = "$$" + x;
          let P = x.slice(2);
          var f = Vl(P);
          if (Fl(P) && (P = P.slice(0, -7), D.capture = !0), !f && T) {
            if (B != null) continue;
            r.removeEventListener(P, w[j], D), w[j] = null;
          }
          if (B != null)
            if (f)
              r[`__${P}`] = B, ft([P]);
            else {
              let F = function(H) {
                w[x].call(this, H);
              };
              w[j] = Li(P, r, F, D);
            }
          else f && (r[`__${P}`] = void 0);
        } else if (x === "style")
          ye(r, x, B);
        else if (x === "autofocus")
          Rl(
            /** @type {HTMLElement} */
            r,
            !!B
          );
        else if (!c && (x === "__value" || x === "value" && B != null))
          r.value = r.__value = B;
        else if (x === "selected" && O)
          $l(
            /** @type {HTMLOptionElement} */
            r,
            B
          );
        else {
          var G = x;
          g || (G = Ul(G));
          var Z = G === "defaultValue" || G === "defaultChecked";
          if (B == null && !c && !Z)
            if (d[x] = null, G === "value" || G === "checked") {
              let D = (
                /** @type {HTMLInputElement} */
                r
              );
              const j = e === void 0;
              if (G === "value") {
                let P = D.defaultValue;
                D.removeAttribute(G), D.defaultValue = P, D.value = D.__value = j ? P : null;
              } else {
                let P = D.defaultChecked;
                D.removeAttribute(G), D.defaultChecked = P, D.checked = j ? P : !1;
              }
            } else
              r.removeAttribute(x);
          else Z || L.includes(G) && (c || typeof B != "string") ? (r[G] = B, G in d && (d[G] = Tt)) : typeof B != "function" && ye(r, G, B);
        }
    }
  }
  return w;
}
function Ze(r, e, a = [], n = [], l, d = !1) {
  ui(a, n, (c) => {
    var g = void 0, w = {}, O = r.nodeName === "SELECT", h = !1;
    if (Lr(() => {
      var N = e(...c.map(t)), T = es(r, g, N, l, d);
      h && O && "value" in N && _a(
        /** @type {HTMLSelectElement} */
        r,
        N.value
      );
      for (let f of Object.getOwnPropertySymbols(w))
        N[f] || Yt(w[f]);
      for (let f of Object.getOwnPropertySymbols(N)) {
        var y = N[f];
        f.description === Do && (!g || y !== g[f]) && (w[f] && Yt(w[f]), w[f] = cr(() => Xl(r, () => y))), T[f] = y;
      }
      g = T;
    }), O) {
      var L = (
        /** @type {HTMLSelectElement} */
        r
      );
      xr(() => {
        _a(
          L,
          /** @type {Record<string | symbol, any>} */
          g.value,
          !0
        ), Oi(L);
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
      [ji]: r.nodeName.includes("-"),
      [qi]: r.namespaceURI === Lo
    }
  );
}
var jn = /* @__PURE__ */ new Map();
function Fi(r) {
  var e = jn.get(r.nodeName);
  if (e) return e;
  jn.set(r.nodeName, e = []);
  for (var a, n = r, l = Element.prototype; l !== n; ) {
    a = Zn(n);
    for (var d in a)
      a[d].set && e.push(d);
    n = $a(n);
  }
  return e;
}
const ts = Xn ? () => performance.now() : () => Date.now(), or = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => (Xn ? requestAnimationFrame : jt)(r)
  ),
  now: () => ts(),
  tasks: /* @__PURE__ */ new Set()
};
function Hi() {
  const r = or.now();
  or.tasks.forEach((e) => {
    e.c(r) || (or.tasks.delete(e), e.f());
  }), or.tasks.size !== 0 && or.tick(Hi);
}
function rs(r) {
  let e;
  return or.tasks.size === 0 && or.tick(Hi), {
    promise: new Promise((a) => {
      or.tasks.add(e = { c: r, f: a });
    }),
    abort() {
      or.tasks.delete(e);
    }
  };
}
function na(r, e) {
  Pa(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function as(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function qn(r) {
  const e = {}, a = r.split(";");
  for (const n of a) {
    const [l, d] = n.split(":");
    if (!l || d === void 0) break;
    const c = as(l.trim());
    e[c] = d.trim();
  }
  return e;
}
const ns = (r) => r;
function tt(r, e, a, n) {
  var l = (r & So) !== 0, d = (r & To) !== 0, c = l && d, g = (r & Mo) !== 0, w = c ? "both" : l ? "in" : "out", O, h = e.inert, L = e.style.overflow, N, T;
  function y() {
    return Pa(() => O ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: w
    }));
  }
  var f = {
    is_global: g,
    in() {
      if (e.inert = h, !l) {
        T?.abort(), T?.reset?.();
        return;
      }
      d || N?.abort(), na(e, "introstart"), N = Za(e, y(), T, 1, () => {
        na(e, "introend"), N?.abort(), N = O = void 0, e.style.overflow = L;
      });
    },
    out(B) {
      if (!d) {
        B?.(), O = void 0;
        return;
      }
      e.inert = !0, na(e, "outrostart"), T = Za(e, y(), N, 0, () => {
        na(e, "outroend"), B?.();
      });
    },
    stop: () => {
      N?.abort(), T?.abort();
    }
  }, G = (
    /** @type {Effect} */
    st
  );
  if ((G.transitions ??= []).push(f), l && zi) {
    var Z = g;
    if (!Z) {
      for (var x = (
        /** @type {Effect | null} */
        G.parent
      ); x && (x.f & Ir) !== 0; )
        for (; (x = x.parent) && (x.f & Hr) === 0; )
          ;
      Z = !x || (x.f & ka) !== 0;
    }
    Z && xr(() => {
      Dr(() => f.in());
    });
  }
}
function Za(r, e, a, n, l) {
  var d = n === 1;
  if (jo(e)) {
    var c, g = !1;
    return ra(() => {
      if (!g) {
        var G = e({ direction: d ? "in" : "out" });
        c = Za(r, G, a, n, l);
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
      abort: jt,
      deactivate: jt,
      reset: jt,
      t: () => n
    };
  const { delay: w = 0, css: O, tick: h, easing: L = ns } = e;
  var N = [];
  if (d && a === void 0 && (h && h(0, 1), O)) {
    var T = qn(O(0, 1));
    N.push(T, T);
  }
  var y = () => 1 - n, f = r.animate(N, { duration: w, fill: "forwards" });
  return f.onfinish = () => {
    f.cancel();
    var G = a?.t() ?? 1 - n;
    a?.abort();
    var Z = n - G, x = (
      /** @type {number} */
      e.duration * Math.abs(Z)
    ), B = [];
    if (x > 0) {
      var D = !1;
      if (O)
        for (var j = Math.ceil(x / 16.666666666666668), P = 0; P <= j; P += 1) {
          var F = G + Z * L(P / j), H = qn(O(F, 1 - F));
          B.push(H), D ||= H.overflow === "hidden";
        }
      D && (r.style.overflow = "hidden"), y = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          f.currentTime
        );
        return G + Z * L(A / x);
      }, h && rs(() => {
        if (f.playState !== "running") return !1;
        var A = y();
        return h(A, 1 - A), !0;
      });
    }
    f = r.animate(B, { duration: x, fill: "forwards" }), f.onfinish = () => {
      y = () => n, h?.(n, 1 - n), l();
    };
  }, {
    abort: () => {
      f && (f.cancel(), f.effect = null, f.onfinish = jt);
    },
    deactivate: () => {
      l = jt;
    },
    reset: () => {
      n === 0 && h?.(1, 0);
    },
    t: () => y()
  };
}
function nr(r, e, a = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Pi(r, "input", (l) => {
    Ye && r.type === "checkbox" && yn();
    var d = l ? r.defaultValue : r.value;
    if (d = Ha(r) ? Va(d) : d, a(d), wt !== null && n.add(wt), d !== (d = e())) {
      var c = r.selectionStart, g = r.selectionEnd;
      r.value = d ?? "", g !== null && (r.selectionStart = c, r.selectionEnd = Math.min(g, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Dr(e) == null && r.value && (a(Ha(r) ? Va(r.value) : r.value), wt !== null && n.add(wt)), Ma(() => {
    Ye && r.type === "checkbox" && yn();
    var l = e();
    if (r === document.activeElement) {
      var d = (
        /** @type {Batch} */
        la ?? wt
      );
      if (n.has(d))
        return;
    }
    Ha(r) && l === Va(r.value) || r.type === "date" && !l && !r.value || l !== r.value && (r.value = l ?? "");
  });
}
function is(r, e, a = e) {
  Pi(r, "change", (n) => {
    var l = n ? r.defaultChecked : r.checked;
    a(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Dr(e) == null && a(r.checked), Ma(() => {
    var n = e();
    r.checked = !!n;
  });
}
function Ha(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function Va(r) {
  return r === "" ? null : +r;
}
function Bn(r, e) {
  return r === e || r?.[lr] === e;
}
function rt(r = {}, e, a, n) {
  return xr(() => {
    var l, d;
    return Ma(() => {
      l = d, d = [], Dr(() => {
        r !== a(...d) && (e(r, ...d), l && Bn(a(...l), r) && e(null, ...l));
      });
    }), () => {
      ra(() => {
        d && Bn(a(...d), r) && e(null, ...d);
      });
    };
  }), r;
}
function Vi(r, e, a) {
  if (r == null)
    return e(void 0), jt;
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
function bn(r, e = jt) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function l(g) {
    if (nn(r, g) && (r = g, a)) {
      const w = !Rr.length;
      for (const O of n)
        O[1](), Rr.push(O, r);
      if (w) {
        for (let O = 0; O < Rr.length; O += 2)
          Rr[O][0](Rr[O + 1]);
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
  function c(g, w = jt) {
    const O = [g, w];
    return n.add(O), n.size === 1 && (a = e(l, d) || jt), g(
      /** @type {T} */
      r
    ), () => {
      n.delete(O), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: l, update: d, subscribe: c };
}
function Gi(r) {
  let e;
  return Vi(r, (a) => e = a)(), e;
}
let ia = !1, Ja = Symbol();
function Ui(r, e, a) {
  const n = a[e] ??= {
    store: null,
    source: /* @__PURE__ */ gi(void 0),
    unsubscribe: jt
  };
  if (Ye && (n.source.label = e), n.store !== r && !(Ja in a))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = jt;
    else {
      var l = !0;
      n.unsubscribe = Vi(r, (d) => {
        l ? n.source.v = d : K(n.source, d);
      }), l = !1;
    }
  return r && Ja in a ? Gi(r) : t(n.source);
}
function Wi() {
  const r = {};
  function e() {
    vn(() => {
      for (var a in r)
        r[a].unsubscribe();
      hr(r, Ja, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [r, e];
}
function os(r) {
  var e = ia;
  try {
    return ia = !1, [r(), ia];
  } finally {
    ia = e;
  }
}
const ls = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return Ye && $o(`${r.name}.${String(e)}`), !1;
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
    Ye ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] } : { props: r, exclude: e },
    ls
  );
}
function s(r, e, a, n) {
  var l = (a & Co) !== 0, d = (a & Eo) !== 0, c = (
    /** @type {V} */
    n
  ), g = !0, w = () => (g && (g = !1, c = d ? Dr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), c), O;
  if (l) {
    var h = lr in r || Ho in r;
    O = Yr(r, e)?.set ?? (h && e in r ? (x) => r[e] = x : void 0);
  }
  var L, N = !1;
  l ? [L, N] = os(() => (
    /** @type {V} */
    r[e]
  )) : L = /** @type {V} */
  r[e], L === void 0 && n !== void 0 && (L = w(), O && (Jo(e), O(L)));
  var T;
  if (T = () => {
    var x = (
      /** @type {V} */
      r[e]
    );
    return x === void 0 ? w() : (g = !0, x);
  }, (a & ko) === 0)
    return T;
  if (O) {
    var y = r.$$legacy;
    return function(x, B) {
      return arguments.length > 0 ? ((!B || y || N) && O(B ? T() : x), x) : T();
    };
  }
  var f = !1, G = ((a & yo) !== 0 ? Ea : ci)(() => (f = !1, T()));
  Ye && (G.label = e), l && t(G);
  var Z = (
    /** @type {Effect} */
    st
  );
  return function(x, B) {
    if (arguments.length > 0) {
      const D = B ? t(G) : l ? ot(x) : x;
      return K(G, D), f = !0, c !== void 0 && (c = D), x;
    }
    return zr && f || (Z.f & Ar) !== 0 ? G.v : t(G);
  };
}
function V(...r) {
  return r.filter(Boolean).join(" ");
}
const ut = (r, e) => {
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
function Kt(r, e = {}) {
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
    css: (O) => `transform: translateY(${(1 - O) * g}px); opacity: ${O * w};`
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
}, xa = It, ss = /* @__PURE__ */ new Map();
function Jt(r, e) {
  if (typeof window < "u" && process.env.NODE_ENV === "development") {
    const a = {
      name: r,
      size: e,
      timestamp: Date.now()
    };
    ss.set(r, a), console.log(`📦 Bundle: ${r} (${e})`);
  }
}
var ds = (r, e, a) => e(t(a).id), cs = (r, e, a) => e(r, t(a).id), vs = /* @__PURE__ */ v('<p class="svelte-1neysev">No content available</p>'), us = /* @__PURE__ */ v('<div role="region"><!></div>'), fs = /* @__PURE__ */ v('<div><button type="button"><span class="text-left svelte-1neysev"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-1neysev"></path></svg></button> <!></div>'), bs = /* @__PURE__ */ v("<div></div>");
function Ym(r, e) {
  Xe(e, !0);
  const a = s(e, "items", 19, () => []), n = s(e, "multiple", 3, !1), l = s(e, "collapsible", 3, !0), d = s(e, "variant", 3, "glass"), c = s(e, "size", 3, "md"), g = s(e, "blur", 3, "md"), w = s(e, "animate", 3, !0), O = s(e, "reduceMotion", 3, !1), h = s(e, "defaultOpen", 19, () => []), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  let T = /* @__PURE__ */ ke(ot(new Set(h())));
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
  }, Z = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };
  function x(U) {
    if (a().find((C) => C.id === U)?.disabled) return;
    const R = t(T).has(U);
    n() ? R ? (l() || t(T).size > 1) && t(T).delete(U) : t(T).add(U) : R && l() ? t(T).clear() : (t(T).clear(), t(T).add(U)), K(T, new Set(t(T)), !0), e.onValueChange?.(Array.from(t(T)));
  }
  function B(U, X) {
    if (!a().find((C) => C.id === X)?.disabled)
      switch (U.key) {
        case "Enter":
        case " ":
          U.preventDefault(), x(X);
          break;
        case "ArrowDown":
          U.preventDefault(), D(X);
          break;
        case "ArrowUp":
          U.preventDefault(), j(X);
          break;
        case "Home":
          U.preventDefault(), P();
          break;
        case "End":
          U.preventDefault(), F();
          break;
      }
  }
  function D(U) {
    const X = a().filter((M) => !M.disabled), C = (X.findIndex((M) => M.id === U) + 1) % X.length, k = X[C];
    H(k.id);
  }
  function j(U) {
    const X = a().filter((M) => !M.disabled), R = X.findIndex((M) => M.id === U), C = R === 0 ? X.length - 1 : R - 1, k = X[C];
    H(k.id);
  }
  function P() {
    const U = a().find((X) => !X.disabled);
    U && H(U.id);
  }
  function F() {
    const U = a().filter((R) => !R.disabled), X = U[U.length - 1];
    X && H(X.id);
  }
  function H(U) {
    document.querySelector(`[data-accordion-header="${U}"]`)?.focus();
  }
  xt(() => {
    Jt("Accordion", "medium");
  });
  var A = bs();
  Ze(A, (U) => ({ class: U, ...N }), [() => V("w-full space-y-2", L())], void 0, "svelte-1neysev"), We(A, 21, a, vt, (U, X, R) => {
    const C = /* @__PURE__ */ Se(() => t(T).has(t(X).id)), k = /* @__PURE__ */ Se(() => R === 0), M = /* @__PURE__ */ Se(() => R === a().length - 1), p = /* @__PURE__ */ Se(() => `${y}-header-${t(X).id}`), q = /* @__PURE__ */ Se(() => `${y}-content-${t(X).id}`);
    var W = fs(), I = o(W);
    I.__click = [ds, x, X], I.__keydown = [cs, B, X];
    var _ = o(I), m = o(_), ie = u(_, 2);
    Re(I, (ve, ae) => kt?.(ve, ae), () => w() && !O() && t(C) ? { blur: g(), opacity: "subtle" } : void 0);
    var ue = u(I, 2);
    {
      var fe = (ve) => {
        var ae = us(), Y = o(ae);
        {
          var le = (E) => {
            var te = Ae(), J = we(te);
            lt(J, () => t(X).content), i(E, te);
          }, re = (E) => {
            var te = Ae(), J = we(te);
            {
              var Q = (se) => {
                var ne = Ae(), de = we(ne);
                lt(de, () => e.children, () => t(X)), i(se, ne);
              }, ee = (se) => {
                var ne = vs();
                i(se, ne);
              };
              b(
                J,
                (se) => {
                  e.children ? se(Q) : se(ee, !1);
                },
                !0
              );
            }
            i(E, te);
          };
          b(Y, (E) => {
            t(X).content ? E(le) : E(re, !1);
          });
        }
        S(
          (E) => {
            ye(ae, "id", t(q)), ye(ae, "aria-labelledby", t(p)), z(ae, 1, E, "svelte-1neysev");
          },
          [
            () => $(V("border-t border-white/10 transition-all duration-200", f[c()].content, G[d()].content))
          ]
        ), tt(1, ae, () => gt, () => ({
          direction: "down",
          distance: 10,
          duration: w() && !O() ? 200 : 0
        })), tt(2, ae, () => gt, () => ({
          direction: "up",
          distance: 10,
          duration: w() && !O() ? 150 : 0
        })), i(ve, ae);
      };
      b(ue, (ve) => {
        t(C) && ve(fe);
      });
    }
    S(
      (ve, ae, Y) => {
        z(W, 1, ve, "svelte-1neysev"), ye(I, "id", t(p)), z(I, 1, ae, "svelte-1neysev"), ye(I, "aria-expanded", t(C)), ye(I, "aria-controls", t(q)), ye(I, "aria-disabled", t(X).disabled), ye(I, "data-accordion-header", t(X).id), I.disabled = t(X).disabled, oe(m, t(X).title), z(ie, 0, Y, "svelte-1neysev");
      },
      [
        () => $(V("overflow-hidden transition-all duration-200", G[d()].container, d() === "glass" && Z[g()], t(k) && "rounded-t-brand-lg", t(M) && "rounded-b-brand-lg", !t(k) && !t(M) && R > 0 && "rounded-none border-t-0")),
        () => $(V("w-full flex items-center justify-between transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium cursor-pointer", f[c()].header, G[d()].header, t(X).disabled && "opacity-50 cursor-not-allowed")),
        () => $(V("transition-transform duration-200 flex-shrink-0 ml-2", f[c()].icon, t(C) && "rotate-180"))
      ]
    ), i(U, W);
  }), i(r, A), Qe();
}
ft(["click", "keydown"]);
const gs = (r, e, a) => {
  K(e, !1), a.onclose?.();
};
var hs = /* @__PURE__ */ v("<div><!></div>"), ms = /* @__PURE__ */ v("<h3> </h3>"), _s = /* @__PURE__ */ v("<p> </p>"), xs = /* @__PURE__ */ v('<button aria-label="Close alert"><!></button>'), ps = /* @__PURE__ */ v('<div><div class="flex items-start gap-3 svelte-yqts08"><!> <div class="flex-1 min-w-0 svelte-yqts08"><!> <!></div> <!></div></div>');
function Km(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "info"), n = s(e, "closable", 3, !1), l = s(e, "animated", 3, !0), d = s(e, "glow", 3, !0), c = s(e, "jelly", 3, !0), g = s(e, "icon", 3, !0), w = s(e, "position", 3, "static"), O = s(e, "placement", 3, "top-right"), h = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
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
  let N = /* @__PURE__ */ ke(!0);
  const T = {
    success: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400/40",
      text: "text-green-300",
      icon: so,
      glow: "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
    },
    error: {
      bg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      icon: lo,
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
      icon: oo,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    terminal: {
      bg: "bg-gray-900/90",
      border: "border-green-400/40",
      text: "text-green-400",
      icon: _n,
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
  var Z = Ae(), x = we(Z);
  {
    var B = (D) => {
      var j = ps();
      Ze(
        j,
        (p) => ({ class: p, ...L }),
        [
          () => V("backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300", f.bg, f.border, d() && f.glow, w() === "fixed" && "fixed z-50", w() === "fixed" && y[O()], l() && "transform-gpu will-change-transform", h())
        ],
        void 0,
        "svelte-yqts08"
      );
      var P = o(j), F = o(P);
      {
        var H = (p) => {
          var q = hs(), W = o(q);
          G(W, { size: 20 }), S((I) => z(q, 1, I, "svelte-yqts08"), [
            () => $(V("flex-shrink-0 mt-0.5", f.text, l() && "animate-pulse"))
          ]), i(p, q);
        };
        b(F, (p) => {
          g() && p(H);
        });
      }
      var A = u(F, 2), U = o(A);
      {
        var X = (p) => {
          var q = ms(), W = o(q);
          S(
            (I) => {
              z(q, 1, I, "svelte-yqts08"), oe(W, e.title);
            },
            [
              () => $(V("font-semibold text-base", f.text))
            ]
          ), i(p, q);
        };
        b(U, (p) => {
          e.title && p(X);
        });
      }
      var R = u(U, 2);
      {
        var C = (p) => {
          var q = _s(), W = o(q);
          S(
            (I) => {
              z(q, 1, I, "svelte-yqts08"), oe(W, e.description);
            },
            [
              () => $(V("text-sm mt-1 opacity-80", f.text))
            ]
          ), i(p, q);
        };
        b(R, (p) => {
          e.description && p(C);
        });
      }
      var k = u(A, 2);
      {
        var M = (p) => {
          var q = xs();
          q.__click = [gs, N, e];
          var W = o(q);
          sa(W, { size: 16 }), S((I) => z(q, 1, I, "svelte-yqts08"), [
            () => $(V("flex-shrink-0 p-1 rounded-lg transition-all duration-200", "hover:bg-white/10 hover:scale-110", f.text, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]), i(p, q);
        };
        b(k, (p) => {
          n() && p(M);
        });
      }
      Re(j, (p, q) => jellyHover?.(p, q), () => ({
        enabled: c(),
        scale: 1.02,
        duration: 200,
        borderRadius: "16px"
      })), tt(3, j, () => gt, () => ({ duration: l() ? 300 : 0 })), i(D, j);
    };
    b(x, (D) => {
      t(N) && D(B);
    });
  }
  i(r, Z), Qe();
}
ft(["click"]);
var ws = /* @__PURE__ */ v("<button><!></button>"), ys = /* @__PURE__ */ v("<span><!></span>"), ks = /* @__PURE__ */ v("<button><!></button>"), Cs = /* @__PURE__ */ v("<span><!></span>");
function Xm(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "default"), n = s(e, "size", 3, "md"), l = s(e, "glass", 3, !0), d = s(e, "blur", 3, "md"), c = s(e, "interactive", 3, !1), g = s(e, "animate", 3, !0), w = s(e, "reduceMotion", 3, !1), O = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
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
  ]), L = {
    default: "bg-white/10 text-white border-white/20",
    primary: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    secondary: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    accent: "bg-red-500/20 text-red-300 border-red-400/30",
    success: "bg-green-500/20 text-green-300 border-green-400/30",
    warning: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
    error: "bg-red-600/20 text-red-300 border-red-500/30"
  }, N = {
    sm: "px-2 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
    lg: "px-4 py-2 text-base font-medium"
  }, T = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, y = "inline-flex items-center justify-center rounded-full border transition-all duration-200", f = l() ? `glass-subtle ${T[d()]}` : "", G = c() ? "cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent" : "", Z = V(y, L[a()], N[n()], f, G, O());
  function x(F) {
    c() && (F.key === "Enter" || F.key === " ") && (F.preventDefault(), F.currentTarget?.dispatchEvent(new CustomEvent("click", { bubbles: !0 })));
  }
  xt(() => {
    Jt("Badge", "small");
  });
  var B = Ae(), D = we(B);
  {
    var j = (F) => {
      var H = Ae(), A = we(H);
      {
        var U = (R) => {
          var C = ws();
          Ze(
            C,
            () => ({
              class: Z,
              type: "button",
              "aria-label": h["aria-label"] || `${a()} badge`,
              onkeydown: x,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = o(C);
          {
            var M = (p) => {
              var q = Ae(), W = we(q);
              lt(W, () => e.children), i(p, q);
            };
            b(k, (p) => {
              e.children && p(M);
            });
          }
          Re(C, (p, q) => kt?.(p, q), () => ({ blur: d(), opacity: "subtle" })), i(R, C);
        }, X = (R) => {
          var C = ys();
          Ze(
            C,
            () => ({
              class: Z,
              role: "status",
              "aria-label": h["aria-label"] || `${a()} badge`,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = o(C);
          {
            var M = (p) => {
              var q = Ae(), W = we(q);
              lt(W, () => e.children), i(p, q);
            };
            b(k, (p) => {
              e.children && p(M);
            });
          }
          tt(1, C, () => gt, () => ({ direction: "up", distance: 10 })), i(R, C);
        };
        b(A, (R) => {
          c() ? R(U) : R(X, !1);
        });
      }
      i(F, H);
    }, P = (F) => {
      var H = Ae(), A = we(H);
      {
        var U = (R) => {
          var C = ks();
          Ze(
            C,
            () => ({
              class: Z,
              type: "button",
              "aria-label": h["aria-label"] || `${a()} badge`,
              onkeydown: x,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = o(C);
          {
            var M = (p) => {
              var q = Ae(), W = we(q);
              lt(W, () => e.children), i(p, q);
            };
            b(k, (p) => {
              e.children && p(M);
            });
          }
          i(R, C);
        }, X = (R) => {
          var C = Cs();
          Ze(
            C,
            () => ({
              class: Z,
              role: "status",
              "aria-label": h["aria-label"] || `${a()} badge`,
              ...h
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var k = o(C);
          {
            var M = (p) => {
              var q = Ae(), W = we(q);
              lt(W, () => e.children), i(p, q);
            };
            b(k, (p) => {
              e.children && p(M);
            });
          }
          i(R, C);
        };
        b(
          A,
          (R) => {
            c() ? R(U) : R(X, !1);
          },
          !0
        );
      }
      i(F, H);
    };
    b(D, (F) => {
      g() && !w() ? F(j) : F(P, !1);
    });
  }
  i(r, B), Qe();
}
const ze = {
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
}, Es = {
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
}, Ss = {
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
}, Ts = {
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
}, Ms = {
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
}, As = {
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
}, za = {
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
}, Is = {
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
}, Ps = {
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
}, Ls = {
  colors: {
    primary: ze.terminal.green,
    secondary: ze.terminal.cyan,
    accent: ze.terminal.blue,
    success: ze.semantic.success,
    warning: ze.semantic.warning,
    error: ze.semantic.error,
    info: ze.semantic.info
  },
  gradients: ze.gradients,
  borderRadius: za.themes.terminal
}, zs = {
  colors: {
    primary: ze.bubbleTea.primary,
    // WCAG AA compliant #ff85b3
    secondary: ze.bubbleTea.secondary,
    // WCAG AA compliant #d666ff
    accent: ze.bubbleTea.accent,
    // WCAG AA compliant #66c3ff
    success: ze.bubbleTea.success,
    warning: ze.bubbleTea.warning,
    error: ze.bubbleTea.error,
    // WCAG AA compliant #ff8585
    info: ze.bubbleTea.info
  },
  gradients: ze.bubbleTeaGradients,
  borderRadius: za.themes.bubbleTea
}, Qm = {
  colors: ze,
  typography: Es,
  spacing: Ss,
  effects: Ts,
  shadows: Ms,
  animations: As,
  sizes: Is,
  borderRadius: za,
  zIndex: Ps,
  themes: {
    terminal: Ls,
    bubbleTea: zs
  }
}, Mt = typeof window < "u";
function Yi(r) {
  if (!Mt) return null;
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}
function Wr(r, e) {
  if (Mt)
    try {
      localStorage.setItem(r, e);
    } catch (a) {
      console.warn(`Failed to save ${r} to localStorage:`, a);
    }
}
function Ki(r) {
  if (Mt)
    try {
      localStorage.removeItem(r);
    } catch (e) {
      console.warn(`Failed to remove ${r} from localStorage:`, e);
    }
}
const oa = {
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
    colors: oa.terminal,
    highContrastColors: {
      ...oa.terminal,
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
    colors: oa.bubbleTea,
    highContrastColors: {
      ...oa.bubbleTea,
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
function Ds() {
  const r = () => {
    if (!Mt) return "terminal";
    const w = Yi("ahb-theme");
    return w === "terminal" || w === "bubbleTea" || w === "auto" ? w : "auto";
  }, e = (w) => w === "auto" ? Qi() : w, a = r();
  let n = a;
  const { subscribe: l, set: d, update: c } = bn(e(a), (w) => {
    let O = null;
    const h = (L) => {
      if (Mt) {
        const N = document.documentElement.classList;
        N.remove("theme-terminal", "theme-bubble-tea");
        const T = `theme-${L === "bubbleTea" ? "bubble-tea" : L}`;
        N.add(T);
        const y = Ga(L);
        Object.entries(y).forEach(([f, G]) => {
          document.documentElement.style.setProperty(f, G);
        });
      }
      w(L);
    };
    return h(e(a)), a === "auto" && Mt && (O = Hn((L) => {
      n === "auto" && h(L);
    })), () => {
      O && O();
    };
  }), g = {
    subscribe: l,
    getUserTheme: () => n,
    set: (w) => {
      n = w;
      const O = e(w);
      if (Mt) {
        Wr("ahb-theme", w), document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${O === "bubbleTea" ? "bubble-tea" : O}`);
        const h = Ga(O);
        if (Object.entries(h).forEach(([L, N]) => {
          document.documentElement.style.setProperty(L, N);
        }), w === "auto") {
          const L = Hn((N) => {
            if (n === "auto") {
              document.documentElement.classList.remove("theme-terminal", "theme-bubble-tea"), document.documentElement.classList.add(`theme-${N === "bubbleTea" ? "bubble-tea" : N}`);
              const T = Ga(N);
              Object.entries(T).forEach(([y, f]) => {
                document.documentElement.style.setProperty(y, f);
              }), d(N);
            }
          });
          g._systemWatcherCleanup = L;
        } else
          g._systemWatcherCleanup && (g._systemWatcherCleanup(), g._systemWatcherCleanup = null);
      }
      d(O);
    },
    toggle: () => {
      const w = ["terminal", "bubbleTea", "auto"], O = w.indexOf(n), h = w[(O + 1) % w.length];
      g.set(h);
    },
    setTerminal: () => g.set("terminal"),
    setBubbleTea: () => g.set("bubbleTea"),
    setAuto: () => g.set("auto"),
    reset: () => {
      Mt && Ki("ahb-theme"), g.set("auto");
    }
  };
  return g;
}
const vr = Ds();
function Rs() {
  const e = (() => {
    if (!Mt) return "normal";
    const c = Yi("ahb-contrast-mode");
    return c === "normal" || c === "high" ? c : Mt && window.matchMedia?.("(prefers-contrast: high)").matches ? "high" : "normal";
  })(), { subscribe: a, set: n, update: l } = bn(e), d = (c) => {
    Mt && (document.documentElement.classList.remove("contrast-normal", "contrast-high"), document.documentElement.classList.add(`contrast-${c}`));
  };
  return d(e), {
    subscribe: a,
    set: (c) => {
      Mt && (Wr("ahb-contrast-mode", c), d(c)), n(c);
    },
    toggle: () => {
      l((c) => {
        const g = c === "normal" ? "high" : "normal";
        return Mt && (Wr("ahb-contrast-mode", g), d(g)), g;
      });
    },
    setNormal: () => {
      const c = "normal";
      Mt && (Wr("ahb-contrast-mode", c), d(c)), n(c);
    },
    setHigh: () => {
      const c = "high";
      Mt && (Wr("ahb-contrast-mode", c), d(c)), n(c);
    },
    reset: () => {
      const c = "normal";
      Mt && (Ki("ahb-contrast-mode"), d(c)), n(c);
    }
  };
}
const Ns = Rs(), Xi = {
  subscribe: (r) => {
    let e = "terminal", a = "normal";
    const n = vr.subscribe((c) => {
      e = c, d();
    }), l = Ns.subscribe((c) => {
      a = c, d();
    });
    function d() {
      const c = Nr[e], g = a === "high" ? c.highContrastColors : c.colors, w = vr.getUserTheme();
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
function Ga(r, e = "normal") {
  const a = Nr[r], n = e === "high" ? a.highContrastColors : a.colors, l = za.themes[r], d = {};
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
function Fn(r) {
  return r === "auto";
}
function Os(r, e) {
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
function Qi() {
  if (!Mt || !window.matchMedia)
    return "terminal";
  const r = window.matchMedia("(prefers-color-scheme: dark)"), e = window.matchMedia("(prefers-color-scheme: light)");
  return r.matches ? "terminal" : e.matches ? "bubbleTea" : "terminal";
}
function Hn(r) {
  if (!Mt || !window.matchMedia)
    return () => {
    };
  const e = window.matchMedia("(prefers-color-scheme: dark)"), a = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
    const l = Qi();
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
  return Gi(Xi).resolvedTheme;
}
function js(r) {
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
function qs(r) {
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
function Zi(r, e) {
  return r !== "auto" && r !== "theme" ? "" : Da() === "bubbleTea" ? e && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[e] || "rounded-bubble-tea" : "";
}
function Ji() {
  switch (Da()) {
    case "terminal":
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    case "bubbleTea":
      return "focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    default:
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  }
}
var Bs = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Fs = /* @__PURE__ */ v("<button><!> <!></button>"), Hs = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Vs = /* @__PURE__ */ v("<button><!> <!></button>");
function er(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "loading", 3, !1), d = s(e, "icon", 3, !1), c = s(e, "animate", 3, !0), g = s(e, "jelly", 3, !0), w = s(e, "liquid", 3, !1), O = s(e, "class", 3, ""), h = s(e, "disabled", 3, !1), L = /* @__PURE__ */ ct(e, [
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
  ]), N = /* @__PURE__ */ Se(() => () => a() === "auto" || a() === "theme" ? js(a()) : T[a()] || T.default), T = {
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
  }, f = /* @__PURE__ */ Se(() => () => a() === "auto" || a() === "theme" ? Zi(a(), n()) : a() === "bubbleTea" && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[n()] || ""), G = /* @__PURE__ */ Se(() => () => a() === "auto" || a() === "theme" ? Ji() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"), Z = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none will-change-transform", x = d() ? "aspect-square !p-0" : "", B = /* @__PURE__ */ Se(() => () => V(Z, t(N)(), y[n()], t(f)(), t(G)(), x, l() && "cursor-wait", O()));
  var D = Ae(), j = we(D);
  {
    var P = (H) => {
      var A = Fs();
      Ze(
        A,
        (k) => ({
          class: k,
          disabled: h(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...L
        }),
        [() => t(B)()],
        void 0,
        "svelte-16dveyh"
      );
      var U = o(A);
      {
        var X = (k) => {
          var M = Bs();
          i(k, M);
        };
        b(U, (k) => {
          l() && k(X);
        });
      }
      var R = u(U, 2);
      {
        var C = (k) => {
          var M = Ae(), p = we(M);
          lt(p, () => e.children), i(k, M);
        };
        b(R, (k) => {
          e.children && k(C);
        });
      }
      Re(A, (k, M) => It?.(k, M), () => ({
        enabled: !h() && !l() && g(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Re(A, (k, M) => xa?.(k, M), () => ({ enabled: !h() && !l() && w() })), Re(A, (k, M) => ut?.(k, M), () => ({
        enabled: !h() && !l() && !g() && !w(),
        strength: 0.15,
        scale: 1.02
      })), tt(1, A, () => Kt, () => ({
        duration: 200,
        bounce: a().includes("glass") || a() === "liquid"
      })), i(H, A);
    }, F = (H) => {
      var A = Vs();
      Ze(
        A,
        (k) => ({
          class: k,
          disabled: h(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": l(),
          ...L
        }),
        [() => t(B)()],
        void 0,
        "svelte-16dveyh"
      );
      var U = o(A);
      {
        var X = (k) => {
          var M = Hs();
          i(k, M);
        };
        b(U, (k) => {
          l() && k(X);
        });
      }
      var R = u(U, 2);
      {
        var C = (k) => {
          var M = Ae(), p = we(M);
          lt(p, () => e.children), i(k, M);
        };
        b(R, (k) => {
          e.children && k(C);
        });
      }
      Re(A, (k, M) => It?.(k, M), () => ({
        enabled: !h() && !l() && g(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : a() === "bubbleTea" ? 1.06 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Re(A, (k, M) => xa?.(k, M), () => ({ enabled: !h() && !l() && w() })), Re(A, (k, M) => ut?.(k, M), () => ({
        enabled: !h() && !l() && !g() && !w(),
        strength: 0.15,
        scale: 1.02
      })), i(H, A);
    };
    b(j, (H) => {
      c() ? H(P) : H(F, !1);
    });
  }
  i(r, D), Qe();
}
var Gs = /* @__PURE__ */ v("<div><!></div>"), Us = /* @__PURE__ */ v("<div><!></div>"), Ws = /* @__PURE__ */ v("<div><!></div>"), Ys = /* @__PURE__ */ v("<div><!></div>");
function Zm(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "auto"), n = s(e, "blur", 3, "md"), l = s(e, "interactive", 3, !1), d = s(e, "animate", 3, !0), c = s(e, "jelly", 3, !0), g = s(e, "liquid", 3, !1), w = s(e, "breathing", 3, !1), O = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
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
  ]), L = /* @__PURE__ */ Se(() => () => a() === "auto" || a() === "theme" ? qs(a()) : N[a()] || N.default), N = {
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
  }, y = /* @__PURE__ */ Se(() => () => a() === "auto" || a() === "theme" ? Zi(a()) || "rounded-2xl" : a() === "bubbleTea" ? "rounded-bubble-tea-lg" : "rounded-2xl"), f = /* @__PURE__ */ Se(() => () => l() ? a() === "auto" || a() === "theme" ? Ji() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" : ""), G = "p-6 transition-all duration-300 will-change-transform", Z = l() ? "cursor-pointer" : "", x = /* @__PURE__ */ Se(() => () => V(G, t(L)(), t(y)(), typeof a() == "string" && a().includes("glass") && T[n()], Z, t(f)(), O()));
  var B = Ae(), D = we(B);
  {
    var j = (F) => {
      var H = Ae(), A = we(H);
      {
        var U = (R) => {
          var C = Gs(), k = (q) => {
            (q.key === "Enter" || q.key === " ") && (q.preventDefault(), q.currentTarget.click());
          };
          Ze(
            C,
            (q) => ({
              class: q,
              role: "button",
              tabindex: "0",
              onkeydown: k,
              ...h
            }),
            [() => t(x)()],
            void 0,
            "svelte-j9s7zz"
          );
          var M = o(C);
          {
            var p = (q) => {
              var W = Ae(), I = we(W);
              lt(I, () => e.children), i(q, W);
            };
            b(M, (q) => {
              e.children && q(p);
            });
          }
          Re(C, (q, W) => It?.(q, W), () => ({
            enabled: c(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : a() === "bubbleTea" ? 1.04 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Re(C, (q, W) => xa?.(q, W), () => ({ enabled: g(), liquidIntensity: 1, morphStrength: 0.3 })), Re(C, (q, W) => Rt?.(q, W), () => ({ enabled: w(), intensity: 0.015, speed: 3500 })), Re(C, (q, W) => ut?.(q, W), () => ({ enabled: !c() && !g(), strength: 0.2, scale: 1.02 })), tt(1, C, () => kt, () => ({ blur: n(), opacity: "medium" })), i(R, C);
        }, X = (R) => {
          var C = Us();
          Ze(C, (p) => ({ class: p, ...h }), [() => t(x)()], void 0, "svelte-j9s7zz");
          var k = o(C);
          {
            var M = (p) => {
              var q = Ae(), W = we(q);
              lt(W, () => e.children), i(p, q);
            };
            b(k, (p) => {
              e.children && p(M);
            });
          }
          Re(C, (p, q) => It?.(p, q), () => ({
            enabled: c() && l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "var(--radius-xl)",
            responsiveness: "subtle"
          })), Re(C, (p, q) => Rt?.(p, q), () => ({ enabled: w(), intensity: 0.01, speed: 4e3 })), tt(1, C, () => kt, () => ({ blur: n(), opacity: "subtle" })), i(R, C);
        };
        b(A, (R) => {
          l() ? R(U) : R(X, !1);
        });
      }
      i(F, H);
    }, P = (F) => {
      var H = Ae(), A = we(H);
      {
        var U = (R) => {
          var C = Ws(), k = (q) => {
            (q.key === "Enter" || q.key === " ") && (q.preventDefault(), q.currentTarget.click());
          };
          Ze(
            C,
            (q) => ({
              class: q,
              role: "button",
              tabindex: "0",
              onkeydown: k,
              ...h
            }),
            [() => t(x)()],
            void 0,
            "svelte-j9s7zz"
          );
          var M = o(C);
          {
            var p = (q) => {
              var W = Ae(), I = we(W);
              lt(I, () => e.children), i(q, W);
            };
            b(M, (q) => {
              e.children && q(p);
            });
          }
          Re(C, (q, W) => It?.(q, W), () => ({
            enabled: c(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Re(C, (q, W) => xa?.(q, W), () => ({ enabled: g(), liquidIntensity: 1, morphStrength: 0.3 })), Re(C, (q, W) => Rt?.(q, W), () => ({ enabled: w(), intensity: 0.015, speed: 3500 })), Re(C, (q, W) => ut?.(q, W), () => ({ enabled: !c() && !g(), strength: 0.2, scale: 1.02 })), i(R, C);
        }, X = (R) => {
          var C = Ys();
          Ze(C, (p) => ({ class: p, ...h }), [() => t(x)()], void 0, "svelte-j9s7zz");
          var k = o(C);
          {
            var M = (p) => {
              var q = Ae(), W = we(q);
              lt(W, () => e.children), i(p, q);
            };
            b(k, (p) => {
              e.children && p(M);
            });
          }
          Re(C, (p, q) => Rt?.(p, q), () => ({ enabled: w(), intensity: 0.01, speed: 4e3 })), i(R, C);
        };
        b(
          A,
          (R) => {
            l() ? R(U) : R(X, !1);
          },
          !0
        );
      }
      i(F, H);
    };
    b(D, (F) => {
      d() ? F(j) : F(P, !1);
    });
  }
  i(r, B), Qe();
}
var Ks = /* @__PURE__ */ v('<span class="text-red-400 ml-1 svelte-cfvntl">*</span>'), Xs = /* @__PURE__ */ v("<label> <!></label>"), Qs = /* @__PURE__ */ v("<p> </p>"), Zs = /* @__PURE__ */ v('<p class="text-xs text-red-400 mt-1 svelte-cfvntl" role="alert"> </p>'), Js = /* @__PURE__ */ v('<div class="flex-1 min-w-0 svelte-cfvntl"><!> <!> <!></div>'), $s = /* @__PURE__ */ v('<div class="flex items-start gap-3 svelte-cfvntl"><div><input/> <div class="absolute inset-0 flex items-center justify-center svelte-cfvntl"><!></div></div> <!></div>');
function Jm(r, e) {
  Xe(e, !0);
  let a = s(e, "checked", 7, !1), n = s(e, "indeterminate", 7, !1), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), c = s(e, "variant", 3, "glass"), g = s(e, "blur", 3, "md"), w = s(e, "animate", 3, !0), O = s(e, "reduceMotion", 3, !1), h = s(e, "required", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  xt(() => {
    T && (T.indeterminate = n());
  });
  const Z = {
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
  }, D = V(
    "relative inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
    Z[d()].container,
    n() ? x[c()].containerIndeterminate : a() ? x[c()].containerChecked : x[c()].container,
    c() === "glass" && B[g()],
    l() && "opacity-50 cursor-not-allowed",
    !l() && "cursor-pointer hover:scale-105",
    e.error && "border-red-400/60 bg-red-500/10",
    L()
  ), j = V("transition-all duration-200", Z[d()].icon, n() ? x[c()].iconIndeterminate : a() ? x[c()].iconChecked : x[c()].icon), P = V("font-medium text-white cursor-pointer select-none", Z[d()].text, l() && "opacity-50", e.error && "text-red-300"), F = V("text-xs text-white/70 mt-1", l() && "opacity-50", e.error && "text-red-300/70");
  function H(I) {
    if (l()) return;
    const m = I.target.checked;
    a(m), n(!1), e.onCheckedChange?.(m);
  }
  function A(I) {
    l() || I.key === "Enter" && (I.preventDefault(), T.click());
  }
  xt(() => {
    Jt("Checkbox", "small");
  });
  var U = $s(), X = o(U), R = o(X);
  Ze(
    R,
    (I) => ({
      type: "checkbox",
      id: y,
      disabled: l(),
      required: h(),
      class: "sr-only",
      "aria-label": e["aria-label"] || e.label,
      "aria-describedby": I,
      "aria-invalid": !!e.error,
      onchange: H,
      onkeydown: A,
      ...N
    }),
    [
      () => [f, G].filter(Boolean).join(" ") || void 0
    ],
    void 0,
    "svelte-cfvntl"
  ), rt(R, (I) => T = I, () => T), xr(() => is(R, a)), Re(R, (I, _) => Kt?.(I, _), () => w() && !O() ? { scale: 0.9, duration: 150 } : void 0);
  var C = u(R, 2), k = o(C);
  {
    var M = (I) => {
      Wn(I, {
        get class() {
          return j;
        },
        strokeWidth: 2.5
      });
    }, p = (I) => {
      var _ = Ae(), m = we(_);
      {
        var ie = (ue) => {
          Ua(ue, {
            get class() {
              return j;
            },
            strokeWidth: 2.5
          });
        };
        b(
          m,
          (ue) => {
            a() && ue(ie);
          },
          !0
        );
      }
      i(I, _);
    };
    b(k, (I) => {
      n() ? I(M) : I(p, !1);
    });
  }
  var q = u(X, 2);
  {
    var W = (I) => {
      var _ = Js(), m = o(_);
      {
        var ie = (Y) => {
          var le = Xs(), re = o(le), E = u(re);
          {
            var te = (J) => {
              var Q = Ks();
              i(J, Q);
            };
            b(E, (J) => {
              h() && J(te);
            });
          }
          S(() => {
            ye(le, "for", y), z(le, 1, $(P), "svelte-cfvntl"), oe(re, `${e.label ?? ""} `);
          }), i(Y, le);
        };
        b(m, (Y) => {
          e.label && Y(ie);
        });
      }
      var ue = u(m, 2);
      {
        var fe = (Y) => {
          var le = Qs(), re = o(le);
          S(() => {
            ye(le, "id", f), z(le, 1, $(F), "svelte-cfvntl"), oe(re, e.description);
          }), i(Y, le);
        };
        b(ue, (Y) => {
          e.description && Y(fe);
        });
      }
      var ve = u(ue, 2);
      {
        var ae = (Y) => {
          var le = Zs(), re = o(le);
          S(() => {
            ye(le, "id", G), oe(re, e.error);
          }), i(Y, le);
        };
        b(ve, (Y) => {
          e.error && Y(ae);
        });
      }
      i(I, _);
    };
    b(q, (I) => {
      (e.label || e.description || e.error) && I(W);
    });
  }
  S(() => z(X, 1, $(D), "svelte-cfvntl")), i(r, U), Qe();
}
const ed = (r, e, a) => {
  K(e, !t(e)), t(e) && requestAnimationFrame(a);
};
var td = /* @__PURE__ */ v('<div class="h-px bg-white/10 my-1"></div>'), rd = (r, e, a) => e(t(a)), ad = /* @__PURE__ */ v('<button><!> <span class="flex-1 text-left"> </span></button>'), nd = /* @__PURE__ */ v('<div><div class="py-1"></div></div>'), id = /* @__PURE__ */ v('<div><button aria-haspopup="true"><span> </span> <!></button> <!></div>');
function $m(r, e) {
  Xe(e, !0);
  const a = s(e, "trigger", 3, "Select"), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "position", 3, "bottom"), c = s(e, "animated", 3, !0), g = s(e, "glow", 3, !1), w = s(e, "jelly", 3, !0), O = s(e, "class", 3, ""), h = s(e, "triggerClass", 3, ""), L = s(e, "menuClass", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  let T = /* @__PURE__ */ ke(!1), y = /* @__PURE__ */ ke(void 0), f = /* @__PURE__ */ ke(void 0), G = /* @__PURE__ */ ke(ot({ x: 0, y: 0 }));
  const Z = {
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
    const p = t(y).getBoundingClientRect(), q = t(f).getBoundingClientRect(), W = window.innerWidth, I = window.innerHeight;
    let _ = 0, m = 0;
    switch (d()) {
      case "bottom":
        _ = 0, m = p.height + 4;
        break;
      case "top":
        _ = 0, m = -q.height - 4;
        break;
      case "left":
        _ = -q.width - 4, m = 0;
        break;
      case "right":
        _ = p.width + 4, m = 0;
        break;
    }
    const ie = p.left + _, ue = p.top + m + p.height;
    ie + q.width > W && (_ = W - ie - q.width - 8), ue + q.height > I && (m = -q.height - 4), K(G, { x: _, y: m }, !0);
  }, D = (p) => {
    p.disabled || p.divider || (e.onselect?.(p.value), K(T, !1));
  }, j = (p) => {
    t(y) && !t(y).contains(p.target) && K(T, !1);
  }, P = (p) => {
    p.key === "Escape" && K(T, !1);
  };
  yt(() => (document.addEventListener("click", j), document.addEventListener("keydown", P), () => {
    document.removeEventListener("click", j), document.removeEventListener("keydown", P);
  }));
  const F = Z[n()], H = e.items.find((p) => p.value === e.value);
  var A = id();
  Ze(A, (p) => ({ class: p, ...N }), [() => V("relative inline-block", O())]);
  var U = o(A);
  U.__click = [ed, T, B];
  var X = o(U), R = o(X), C = u(X, 2);
  {
    let p = /* @__PURE__ */ Se(() => V("transition-transform duration-200", t(T) && "rotate-180"));
    Kr(C, {
      size: 16,
      get class() {
        return t(p);
      }
    });
  }
  Re(U, (p, q) => jellyHover?.(p, q), () => ({
    enabled: w(),
    scale: 1.02,
    duration: 200,
    borderRadius: "12px"
  }));
  var k = u(U, 2);
  {
    var M = (p) => {
      var q = nd(), W = o(q);
      We(W, 21, () => e.items, vt, (I, _) => {
        var m = Ae(), ie = we(m);
        {
          var ue = (ve) => {
            var ae = td();
            i(ve, ae);
          }, fe = (ve) => {
            var ae = ad();
            ae.__click = [rd, D, _];
            var Y = o(ae);
            {
              var le = (te) => {
                var J = Ae(), Q = we(J);
                St(Q, () => t(_).icon, (ee, se) => {
                  se(ee, { size: 16 });
                }), i(te, J);
              };
              b(Y, (te) => {
                t(_).icon && te(le);
              });
            }
            var re = u(Y, 2), E = o(re);
            S(
              (te) => {
                ae.disabled = t(_).disabled, z(ae, 1, te), oe(E, t(_).label);
              },
              [
                () => $(V("flex items-center gap-3 w-full px-4 py-2 transition-all duration-200", F.item, t(_).value === e.value && F.active, t(_).disabled && "opacity-50 cursor-not-allowed", !t(_).disabled && "cursor-pointer"))
              ]
            ), i(ve, ae);
          };
          b(ie, (ve) => {
            t(_).divider ? ve(ue) : ve(fe, !1);
          });
        }
        i(I, m);
      }), rt(q, (I) => K(f, I), () => t(f)), S(
        (I) => {
          z(q, 1, I), mt(q, `left: ${t(G).x ?? ""}px; top: ${t(G).y ?? ""}px;`);
        },
        [
          () => $(V("absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden", F.menu, g() && F.glow, c() && "transform-gpu will-change-transform", L()))
        ]
      ), tt(3, q, () => gt, () => ({ duration: c() ? 200 : 0 })), i(p, q);
    };
    b(k, (p) => {
      t(T) && p(M);
    });
  }
  rt(A, (p) => K(y, p), () => t(y)), S(
    (p) => {
      z(U, 1, p), ye(U, "aria-expanded", t(T)), oe(R, H?.label || a());
    },
    [
      () => $(V("flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200", x[l()], F.trigger, g() && t(T) && F.glow, "focus:outline-none focus:ring-2 focus:ring-white/20", h()))
    ]
  ), i(r, A), Qe();
}
ft(["click"]);
var od = /* @__PURE__ */ v('<label class="block text-sm font-medium text-white/80 mb-2"> </label>'), ld = /* @__PURE__ */ v('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), sd = /* @__PURE__ */ v('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), dd = /* @__PURE__ */ v("<input/>"), cd = /* @__PURE__ */ v("<input/>"), vd = /* @__PURE__ */ v("<input/>"), ud = /* @__PURE__ */ v('<p class="mt-1 text-sm text-red-400" role="alert"> </p>'), fd = /* @__PURE__ */ v('<div class="relative"><!> <div class="relative"><!> <!></div> <!></div>');
function bd(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "label", 3, ""), d = s(e, "error", 3, ""), c = s(e, "icon", 3, null), g = s(e, "animate", 3, !0), w = s(e, "liquid", 3, !1), O = s(e, "magnetic", 3, !1), h = s(e, "jelly", 3, !1), L = s(e, "glow", 3, !1), N = s(e, "class", 3, ""), T = s(e, "id", 3, ""), y = /* @__PURE__ */ ct(e, [
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
  }, Z = "w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300", x = d() ? "border-red-500 focus:border-red-500" : "", B = c() || e.children?.icon ? "pl-10" : "", D = L() ? "focus:shadow-lg focus:shadow-brand-primary/20" : "", j = w() ? "backdrop-blur-md" : "", P = V(Z, f[a()], G[n()], x, B, D, j, N()), F = T() || `input-${Math.random().toString(36).substr(2, 9)}`, H = d() ? `${F}-error` : void 0;
  var A = fd(), U = o(A);
  {
    var X = (m) => {
      var ie = od(), ue = o(ie);
      S(() => {
        ye(ie, "for", F), oe(ue, l());
      }), i(m, ie);
    };
    b(U, (m) => {
      l() && m(X);
    });
  }
  var R = u(U, 2), C = o(R);
  {
    var k = (m) => {
      var ie = ld(), ue = o(ie);
      lt(ue, c), i(m, ie);
    }, M = (m) => {
      var ie = Ae(), ue = we(ie);
      {
        var fe = (ve) => {
          var ae = sd(), Y = o(ae);
          lt(Y, () => e.children.icon), i(ve, ae);
        };
        b(
          ue,
          (ve) => {
            e.children?.icon && ve(fe);
          },
          !0
        );
      }
      i(m, ie);
    };
    b(C, (m) => {
      c() ? m(k) : m(M, !1);
    });
  }
  var p = u(C, 2);
  {
    var q = (m) => {
      var ie = dd();
      Ze(ie, (ue) => ({ id: T(), class: ue, ...y }), [P], void 0, "svelte-177vx52"), Re(ie, (ue, fe) => ut?.(ue, fe), () => O() ? { strength: 0.1, distance: 50 } : void 0), Re(ie, (ue, fe) => It?.(ue, fe), () => h() ? { intensity: 0.05, speed: 200 } : void 0), tt(1, ie, () => kt, () => ({ duration: 300, blur: "sm", scale: 0.98 })), i(m, ie);
    }, W = (m) => {
      var ie = Ae(), ue = we(ie);
      {
        var fe = (ae) => {
          var Y = cd();
          Ze(
            Y,
            (le) => ({
              id: F,
              class: le,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": H,
              ...y
            }),
            [P],
            void 0,
            "svelte-177vx52"
          ), Re(Y, (le, re) => ut?.(le, re), () => O() ? { strength: 0.1, distance: 50 } : void 0), Re(Y, (le, re) => It?.(le, re), () => h() ? { intensity: 0.05, speed: 200 } : void 0), tt(1, Y, () => gt, () => ({
            duration: 200,
            direction: "up",
            distance: 5,
            opacity: "light"
          })), i(ae, Y);
        }, ve = (ae) => {
          var Y = vd();
          Ze(
            Y,
            (le) => ({
              id: F,
              class: le,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": H,
              ...y
            }),
            [P],
            void 0,
            "svelte-177vx52"
          ), Re(Y, (le, re) => ut?.(le, re), () => O() ? { strength: 0.1, distance: 50 } : void 0), Re(Y, (le, re) => It?.(le, re), () => h() ? { intensity: 0.05, speed: 200 } : void 0), i(ae, Y);
        };
        b(
          ue,
          (ae) => {
            g() ? ae(fe) : ae(ve, !1);
          },
          !0
        );
      }
      i(m, ie);
    };
    b(p, (m) => {
      g() && w() ? m(q) : m(W, !1);
    });
  }
  var I = u(R, 2);
  {
    var _ = (m) => {
      var ie = ud(), ue = o(ie);
      S(() => {
        ye(ie, "id", H), oe(ue, d());
      }), i(m, ie);
    };
    b(I, (m) => {
      d() && m(_);
    });
  }
  i(r, A), Qe();
}
var gd = /* @__PURE__ */ v("<div> </div>"), hd = /* @__PURE__ */ v('<div class="flex items-center justify-between svelte-17v0sh2"><div class="flex-1 svelte-17v0sh2"><div> </div> <div> </div></div> <div class="flex flex-col items-end gap-1 svelte-17v0sh2"><!> <!></div></div>'), md = /* @__PURE__ */ v("<span> </span>"), _d = /* @__PURE__ */ v("<span> </span>"), xd = /* @__PURE__ */ v('<div class="flex items-center gap-2 svelte-17v0sh2"><!> <!> <!></div>'), pd = /* @__PURE__ */ v("<div> </div>"), wd = /* @__PURE__ */ v('<div class="space-y-2 svelte-17v0sh2"><div class="flex items-center justify-between svelte-17v0sh2"><div> </div> <!></div> <div> </div> <!> <!></div>'), yd = /* @__PURE__ */ v('<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg svelte-17v0sh2"><div class="flex items-center gap-2 svelte-17v0sh2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-17v0sh2"></div> <span class="text-sm opacity-70 svelte-17v0sh2">Loading...</span></div></div>'), kd = /* @__PURE__ */ v('<div class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none svelte-17v0sh2"></div>'), Cd = /* @__PURE__ */ v("<!> <!> <!>", 1);
function e1(r, e) {
  Xe(e, !0);
  let a = s(e, "size", 3, "md"), n = s(e, "variant", 3, "glass"), l = s(e, "layout", 3, "vertical"), d = s(e, "showTrend", 3, !0), c = s(e, "showChange", 3, !0), g = s(e, "showIcon", 3, !1), w = s(e, "animated", 3, !0), O = s(e, "loading", 3, !1), h = s(e, "clickable", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  }, f = T[a()], G = y[n()], Z = /* @__PURE__ */ Se(() => () => {
    if (O()) return "---";
    const H = e.metric.value, A = e.metric.format || "number", U = e.metric.unit || "";
    switch (A) {
      case "currency":
        return `$${Number(H).toLocaleString()}${U}`;
      case "percentage":
        return `${H}%`;
      default:
        return `${Number(H).toLocaleString()}${U}`;
    }
  }), x = /* @__PURE__ */ Se(() => () => {
    if (!e.metric.change || O()) return null;
    const H = e.metric.change, A = H > 0, U = H < 0;
    return {
      value: `${A ? "+" : ""}${H}%`,
      type: A ? "positive" : U ? "negative" : "neutral"
    };
  }), B = /* @__PURE__ */ Se(() => () => {
    if (!e.metric.trend || O()) return null;
    switch (e.metric.trend) {
      case "up":
        return vo;
      case "down":
        return co;
      default:
        return Wn;
    }
  }), D = /* @__PURE__ */ Se(() => () => {
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
  function j() {
    if (h()) {
      const H = new CustomEvent("click", { detail: e.metric });
      e.onclick?.(H);
    }
  }
  var P = Ae(), F = we(P);
  Kl(F, () => h() ? "button" : "div", !1, (H, A) => {
    Re(H, (W, I) => kt?.(W, I), () => ({ intensity: "medium" })), Ze(
      H,
      (W) => ({
        class: W,
        onclick: j,
        role: h() ? "button" : void 0,
        tabindex: h() ? 0 : void 0,
        ...N
      }),
      [
        () => V("relative rounded-lg border transition-all duration-200", f.container, G.container, h() && "cursor-pointer hover:scale-105 hover:shadow-lg", w() && "transform-gpu", L())
      ],
      void 0,
      "svelte-17v0sh2"
    );
    var U = Cd(), X = we(U);
    {
      var R = (W) => {
        var I = hd(), _ = o(I), m = o(_), ie = o(m), ue = u(m, 2), fe = o(ue), ve = u(_, 2), ae = o(ve);
        {
          var Y = (te) => {
            const J = /* @__PURE__ */ Se(() => t(B));
            var Q = Ae(), ee = we(Q);
            {
              let se = /* @__PURE__ */ Se(() => V(f.icon, t(D)));
              St(ee, () => t(J), (ne, de) => {
                de(ne, {
                  get class() {
                    return t(se);
                  },
                  strokeWidth: 2
                });
              });
            }
            i(te, Q);
          }, le = (te) => {
            var J = Ae(), Q = we(J);
            {
              var ee = (se) => {
                {
                  let ne = /* @__PURE__ */ Se(() => V(f.icon, G.icon));
                  xn(se, {
                    get class() {
                      return t(ne);
                    }
                  });
                }
              };
              b(
                Q,
                (se) => {
                  g() && e.metric.icon && se(ee);
                },
                !0
              );
            }
            i(te, J);
          };
          b(ae, (te) => {
            g() && d() && t(B) ? te(Y) : te(le, !1);
          });
        }
        var re = u(ae, 2);
        {
          var E = (te) => {
            var J = gd(), Q = o(J);
            S(
              (ee) => {
                z(J, 1, ee, "svelte-17v0sh2"), oe(Q, t(x).value);
              },
              [
                () => $(V("font-medium", f.change, t(D)))
              ]
            ), i(te, J);
          };
          b(re, (te) => {
            c() && t(x) && te(E);
          });
        }
        S(
          (te, J) => {
            z(m, 1, te, "svelte-17v0sh2"), oe(ie, e.metric.label), z(ue, 1, J, "svelte-17v0sh2"), oe(fe, t(Z));
          },
          [
            () => $(V("font-medium", f.label, G.label)),
            () => $(V("font-bold tracking-tight", f.value, G.value))
          ]
        ), i(W, I);
      }, C = (W) => {
        var I = wd(), _ = o(I), m = o(_), ie = o(m), ue = u(m, 2);
        {
          var fe = (te) => {
            {
              let J = /* @__PURE__ */ Se(() => V(f.icon, G.icon));
              xn(te, {
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
        var ve = u(_, 2), ae = o(ve), Y = u(ve, 2);
        {
          var le = (te) => {
            var J = xd(), Q = o(J);
            {
              var ee = (be) => {
                const ce = /* @__PURE__ */ Se(() => t(B));
                var me = Ae(), Ee = we(me);
                {
                  let Be = /* @__PURE__ */ Se(() => V("w-4 h-4", t(D)));
                  St(Ee, () => t(ce), (Ne, Oe) => {
                    Oe(Ne, {
                      get class() {
                        return t(Be);
                      },
                      strokeWidth: 2
                    });
                  });
                }
                i(be, me);
              };
              b(Q, (be) => {
                d() && t(B) && be(ee);
              });
            }
            var se = u(Q, 2);
            {
              var ne = (be) => {
                var ce = md(), me = o(ce);
                S(
                  (Ee) => {
                    z(ce, 1, Ee, "svelte-17v0sh2"), oe(me, t(x).value);
                  },
                  [
                    () => $(V("font-medium", f.change, t(D)))
                  ]
                ), i(be, ce);
              };
              b(se, (be) => {
                c() && t(x) && be(ne);
              });
            }
            var de = u(se, 2);
            {
              var Ce = (be) => {
                var ce = _d(), me = o(ce);
                S(
                  (Ee) => {
                    z(ce, 1, Ee, "svelte-17v0sh2"), oe(me, `from ${e.metric.previousValue ?? ""}`);
                  },
                  [
                    () => $(V("opacity-60", f.change, G.label))
                  ]
                ), i(be, ce);
              };
              b(de, (be) => {
                e.metric.previousValue && be(Ce);
              });
            }
            i(te, J);
          };
          b(Y, (te) => {
            (d() && t(B) || c() && t(x)) && te(le);
          });
        }
        var re = u(Y, 2);
        {
          var E = (te) => {
            var J = pd(), Q = o(J);
            S(
              (ee) => {
                z(J, 1, ee, "svelte-17v0sh2"), oe(Q, e.metric.description);
              },
              [
                () => $(V("opacity-70 leading-relaxed", f.change, G.label))
              ]
            ), i(te, J);
          };
          b(re, (te) => {
            e.metric.description && te(E);
          });
        }
        S(
          (te, J) => {
            z(m, 1, te, "svelte-17v0sh2"), oe(ie, e.metric.label), z(ve, 1, J, "svelte-17v0sh2"), oe(ae, t(Z));
          },
          [
            () => $(V("font-medium", f.label, G.label)),
            () => $(V("font-bold tracking-tight", f.value, G.value))
          ]
        ), i(W, I);
      };
      b(X, (W) => {
        l() === "horizontal" ? W(R) : W(C, !1);
      });
    }
    var k = u(X, 2);
    {
      var M = (W) => {
        var I = yd();
        i(W, I);
      };
      b(k, (W) => {
        O() && W(M);
      });
    }
    var p = u(k, 2);
    {
      var q = (W) => {
        var I = kd();
        i(W, I);
      };
      b(p, (W) => {
        h() && W(q);
      });
    }
    i(A, U);
  }), i(r, P), Qe();
}
function Ed(r, e, a) {
  e() && r.target === r.currentTarget && a();
}
var Sd = (
  // Store previously focused element
  // Focus first focusable element in modal
  // Prevent body scroll
  // Add escape listener
  // Restore body scroll
  // Remove escape listener
  // Restore focus
  // Track bundle size
  (r, e) => r.key === "Escape" && e()
), Td = /* @__PURE__ */ v('<div role="dialog" aria-modal="true" tabindex="0"><div><!></div></div>');
function t1(r, e) {
  Xe(e, !0);
  const a = s(e, "open", 3, !1), n = s(e, "size", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "blur", 3, "xl"), c = s(e, "closeOnOutsideClick", 3, !0), g = s(e, "closeOnEscape", 3, !0), w = s(e, "animate", 3, !0), O = s(e, "jelly", 3, !0), h = s(e, "glow", 3, !1), L = s(e, "breathing", 3, !1), N = s(e, "reduceMotion", 3, !1), T = s(e, "class", 3, ""), y = /* @__PURE__ */ ct(e, [
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
  const Z = {
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
  }, D = x[l()], j = V("fixed inset-0 z-50 flex items-center justify-center p-4", D.overlay, B[d()]), F = V("relative w-full p-6 backdrop-blur-xl border transition-all duration-300", "transform-gpu will-change-transform", "modal-radius-lg", Z[n()], D.bg, h() && D.glow, T());
  function H(k) {
    k.key === "Escape" && g() && (k.preventDefault(), A()), k.key === "Tab" && U(k);
  }
  function A() {
    e.onClose && e.onClose();
  }
  function U(k) {
    if (!t(f)) return;
    const M = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), p = M[0], q = M[M.length - 1];
    k.shiftKey ? document.activeElement === p && (q.focus(), k.preventDefault()) : document.activeElement === q && (p.focus(), k.preventDefault());
  }
  xt(() => (a() ? (G = document.activeElement, setTimeout(
    () => {
      if (t(f)) {
        const M = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])')[0];
        M && M.focus();
      }
    },
    100
  ), document.body.style.overflow = "hidden", document.addEventListener("keydown", H)) : (document.body.style.overflow = "", document.removeEventListener("keydown", H), G && G instanceof HTMLElement && G.focus()), () => {
    document.body.style.overflow = "", document.removeEventListener("keydown", H);
  })), xt(() => {
    Jt("Modal", "medium");
  });
  var X = Ae(), R = we(X);
  {
    var C = (k) => {
      var M = Td();
      M.__click = [Ed, c, A], M.__keydown = [Sd, A];
      var p = o(M);
      Ze(p, () => ({ class: F, ...y }), void 0, void 0, "svelte-6n99c3");
      var q = o(p);
      {
        var W = (I) => {
          var _ = Ae(), m = we(_);
          lt(m, () => e.children), i(I, _);
        };
        b(q, (I) => {
          e.children && I(W);
        });
      }
      rt(p, (I) => K(f, I), () => t(f)), Re(p, (I, _) => It?.(I, _), () => ({
        enabled: O() && w() && !N(),
        scale: 1.001,
        duration: 300,
        borderRadius: "var(--radius-xl)"
      })), Re(p, (I, _) => Rt?.(I, _), () => ({
        enabled: L() && w() && !N(),
        intensity: 0.01,
        speed: 4e3
      })), S(() => {
        z(M, 1, $(j), "svelte-6n99c3"), ye(M, "aria-labelledby", e["aria-labelledby"]), ye(M, "aria-describedby", e["aria-describedby"]);
      }), tt(1, p, () => Kt, () => ({
        scale: 0.8,
        duration: w() && !N() ? 400 : 0,
        delay: 100
      })), tt(2, p, () => Kt, () => ({
        scale: 0.95,
        duration: w() && !N() ? 200 : 0
      })), tt(1, M, () => gt, () => ({
        direction: "center",
        duration: w() && !N() ? 200 : 0
      })), tt(2, M, () => gt, () => ({
        direction: "center",
        duration: w() && !N() ? 150 : 0
      })), i(k, M);
    };
    b(R, (k) => {
      a() && k(C);
    });
  }
  i(r, X), Qe();
}
ft(["click", "keydown"]);
function Md(r, e, a, n) {
  const l = r.target;
  K(e, l.value, !0), a("search", t(e)), K(
    n,
    -1
    // Reset focus when searching
  );
}
var Ad = (
  // Remove last selected item if search is empty
  // Update internal state when value prop changes
  // Click outside to close
  (r, e, a) => e(t(a).value, r)
), Id = /* @__PURE__ */ v('<div><span class="truncate max-w-32"> </span> <button><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'), Pd = /* @__PURE__ */ v('<input role="searchbox" aria-label="Search options" aria-controls="multiselect-listbox"/>'), Ld = /* @__PURE__ */ v("<span> </span>"), zd = /* @__PURE__ */ v("<div> </div>"), Dd = (r, e, a) => e(t(a)), Rd = (r, e, a) => r.key === "Enter" && e(t(a)), Nd = /* @__PURE__ */ v('<div class="text-xs opacity-70 mt-0.5"> </div>'), Od = /* @__PURE__ */ ar('<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), jd = /* @__PURE__ */ v('<div role="option" tabindex="0"><div class="flex items-center justify-between"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div></div>'), qd = /* @__PURE__ */ v("<div> </div>"), Bd = /* @__PURE__ */ v('<div id="multiselect-listbox" role="listbox" aria-multiselectable="true" aria-label="Available options"><!> <!></div>'), Fd = /* @__PURE__ */ v('<div><div class="flex flex-wrap gap-1.5 items-center"><!> <!></div> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <!> <div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only"> <!></div></div>');
function r1(r, e) {
  Xe(e, !0);
  const a = s(e, "options", 19, () => []), n = s(e, "value", 19, () => []), l = s(e, "placeholder", 3, "Select items..."), d = s(e, "variant", 3, "default"), c = s(e, "size", 3, "md"), g = s(e, "disabled", 3, !1), w = s(e, "error", 3, !1), O = s(e, "searchable", 3, !0), h = s(e, "chipVariant", 19, d), L = s(e, "closeOnSelect", 3, !1), N = s(e, "class", 3, ""), T = /* @__PURE__ */ ct(e, [
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
  ]), y = At();
  let f, G = /* @__PURE__ */ ke(void 0), Z = /* @__PURE__ */ ke(void 0), x = /* @__PURE__ */ ke(!1), B = /* @__PURE__ */ ke(""), D = /* @__PURE__ */ ke(ot([...n()])), j = /* @__PURE__ */ ke(-1);
  const P = {
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
      container: `bg-black/80 border-${ze.terminal.green} focus-within:border-${ze.terminal.matrix}`,
      dropdown: `bg-black/95 border-${ze.terminal.green}`,
      option: `text-${ze.terminal.green}/70 hover:bg-${ze.terminal.green}/10 hover:text-${ze.terminal.green}`,
      selectedOption: `bg-${ze.terminal.green} text-black`,
      searchInput: `bg-transparent text-${ze.terminal.green} placeholder-${ze.terminal.green}/50`,
      chip: `bg-${ze.terminal.green}/20 text-${ze.terminal.green} hover:bg-${ze.terminal.green}/30 border border-${ze.terminal.green}/30`,
      chipClose: `text-${ze.terminal.green}/70 hover:text-${ze.terminal.green}`
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
  }, H = /* @__PURE__ */ Se(() => P[d()]), A = /* @__PURE__ */ Se(() => P[h()]), U = /* @__PURE__ */ Se(() => F[c()]), X = /* @__PURE__ */ Se(() => () => t(B) ? a().filter((ne) => ne.label.toLowerCase().includes(t(B).toLowerCase()) || ne.value.toLowerCase().includes(t(B).toLowerCase()) || ne.description?.toLowerCase().includes(t(B).toLowerCase())) : a()), R = /* @__PURE__ */ Se(() => () => t(X).filter((ne) => !t(D).includes(ne.value))), C = /* @__PURE__ */ Se(() => () => t(D).map((ne) => a().find((de) => de.value === ne)).filter(Boolean)), k = /* @__PURE__ */ Se(() => () => e.maxSelections ? t(D).length >= e.maxSelections : !1);
  function M() {
    g() || t(x) || (K(x, !0), y("open"), setTimeout(
      () => {
        O() && t(G) && t(G).focus();
      },
      0
    ));
  }
  function p(ne) {
    ne.disabled || t(k) && !t(D).includes(ne.value) || (t(D).includes(ne.value) ? W(ne.value) : q(ne.value), L() && !t(D).includes(ne.value) && (K(x, !1), y("close")));
  }
  function q(ne) {
    t(k) || (K(D, [...t(D), ne], !0), y("add", ne), y("change", t(D)), K(B, ""), y("search", t(B)));
  }
  function W(ne) {
    K(D, t(D).filter((de) => de !== ne), !0), y("remove", ne), y("change", t(D));
  }
  function I(ne, de) {
    de.stopPropagation(), W(ne);
  }
  function _(ne) {
    switch (ne.key) {
      case "Escape":
        K(x, !1), y("close");
        break;
      case "ArrowDown":
        ne.preventDefault(), t(x) ? K(j, Math.min(t(j) + 1, t(R).length - 1), !0) : (K(x, !0), y("open"));
        break;
      case "ArrowUp":
        ne.preventDefault(), K(j, Math.max(t(j) - 1, -1), !0);
        break;
      case "Enter":
        ne.preventDefault(), t(j) >= 0 && t(R)[t(j)] && p(t(R)[t(j)]);
        break;
      case "Backspace":
        t(B) === "" && t(D).length > 0 && W(t(D)[t(D).length - 1]);
        break;
    }
  }
  xt(() => {
    K(D, [...n()], !0);
  }), yt(() => {
    function ne(de) {
      t(x) && f && !f.contains(de.target) && (K(x, !1), y("close"));
    }
    return document.addEventListener("click", ne), () => document.removeEventListener("click", ne);
  });
  const m = /* @__PURE__ */ Se(() => V("relative w-full min-h-10 rounded-lg border transition-all duration-200", "cursor-text font-mono", t(H).container, t(U).container, w() && "border-red-500 focus-within:border-red-500", g() && "opacity-50 cursor-not-allowed", t(x) && "ring-2 ring-opacity-50", N()));
  var ie = Fd();
  Ze(
    ie,
    () => ({
      class: t(m),
      onclick: M,
      onkeydown: _,
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
  var ue = o(ie), fe = o(ue);
  We(fe, 17, () => t(C), (ne) => ne.value, (ne, de) => {
    var Ce = Id(), be = o(Ce), ce = o(be), me = u(be, 2);
    me.__click = [Ad, I, de], Re(Ce, (Ee, Be) => ut?.(Ee, Be), () => ({ strength: 0.15 })), S(() => {
      z(
        Ce,
        1,
        `inline-flex items-center gap-1.5 rounded-md ${t(A).chip ?? ""} ${t(U).chip ?? ""} 
				       font-mono transition-all duration-200`,
        "svelte-39ftoh"
      ), oe(ce, t(de).label), z(
        me,
        1,
        `flex-shrink-0 rounded-full ${t(A).chipClose ?? ""} hover:bg-black/20
					       transition-colors p-0.5`,
        "svelte-39ftoh"
      ), ye(me, "aria-label", `Remove ${t(de).label ?? ""}`);
    }), tt(1, Ce, () => Kt, () => ({ duration: 200, bounce: !0 })), i(ne, Ce);
  });
  var ve = u(fe, 2);
  {
    var ae = (ne) => {
      var de = Pd();
      de.__input = [Md, B, y, j], de.__keydown = _, rt(de, (Ce) => K(G, Ce), () => t(G)), S(() => {
        ye(de, "placeholder", t(D).length === 0 ? l() : ""), z(de, 1, `flex-1 min-w-32 outline-none ${t(H).searchInput ?? ""} ${t(U).input ?? ""}`, "svelte-39ftoh"), de.disabled = g() || t(k);
      }), nr(de, () => t(B), (Ce) => K(B, Ce)), i(ne, de);
    }, Y = (ne) => {
      var de = Ae(), Ce = we(de);
      {
        var be = (ce) => {
          var me = Ld(), Ee = o(me);
          S(() => {
            z(me, 1, `text-gray-400 ${t(U).input ?? ""}`, "svelte-39ftoh"), oe(Ee, l());
          }), i(ce, me);
        };
        b(
          Ce,
          (ce) => {
            t(D).length === 0 && ce(be);
          },
          !0
        );
      }
      i(ne, de);
    };
    b(ve, (ne) => {
      O() ? ne(ae) : ne(Y, !1);
    });
  }
  var le = u(ue, 2), re = o(le), E = u(le, 2);
  {
    var te = (ne) => {
      var de = Bd(), Ce = o(de);
      {
        var be = (Be) => {
          var Ne = zd(), Oe = o(Ne);
          S(() => {
            z(Ne, 1, `px-4 py-3 text-center ${t(H).option ?? ""} font-mono`, "svelte-39ftoh"), oe(Oe, t(B) ? "No results found" : "No more options available");
          }), i(Be, Ne);
        }, ce = (Be) => {
          var Ne = Ae(), Oe = we(Ne);
          We(Oe, 19, () => t(R), (Me) => Me.value, (Me, xe, Le) => {
            const je = /* @__PURE__ */ Se(() => t(Le) === t(j)), he = /* @__PURE__ */ Se(() => t(D).includes(t(xe).value));
            var pe = jd();
            pe.__click = [Dd, p, xe], pe.__keydown = [Rd, p, xe];
            var Ie = o(pe), ge = o(Ie), _e = o(ge), De = o(_e), Te = u(_e, 2);
            {
              var qe = (Ge) => {
                var Ke = Nd(), Je = o(Ke);
                S(() => oe(Je, t(xe).description)), i(Ge, Ke);
              };
              b(Te, (Ge) => {
                t(xe).description && Ge(qe);
              });
            }
            var Fe = u(ge, 2);
            {
              var Ve = (Ge) => {
                var Ke = Od();
                i(Ge, Ke);
              };
              b(Fe, (Ge) => {
                t(he) && Ge(Ve);
              });
            }
            Re(pe, (Ge, Ke) => ut?.(Ge, Ke), () => ({ enabled: !t(xe).disabled, strength: 0.1 })), S(() => {
              z(
                pe,
                1,
                `cursor-pointer transition-all duration-150 ${t(U).option ?? ""}
						       ${(t(je) ? t(H).selectedOption : t(H).option) ?? ""}
						       ${t(xe).disabled ? "opacity-50 cursor-not-allowed" : ""}
						       font-mono border-b border-white/5 last:border-b-0`,
                "svelte-39ftoh"
              ), ye(pe, "aria-selected", t(he)), oe(De, t(xe).label);
            }), i(Me, pe);
          }), i(Be, Ne);
        };
        b(Ce, (Be) => {
          t(R).length === 0 ? Be(be) : Be(ce, !1);
        });
      }
      var me = u(Ce, 2);
      {
        var Ee = (Be) => {
          var Ne = qd(), Oe = o(Ne);
          S(() => {
            z(Ne, 1, `px-4 py-2 text-center text-xs ${t(H).option ?? ""} bg-yellow-500/10 border-t`, "svelte-39ftoh"), oe(Oe, `Maximum ${e.maxSelections ?? ""} selections reached`);
          }), i(Be, Ne);
        };
        b(me, (Be) => {
          t(k) && Be(Ee);
        });
      }
      rt(de, (Be) => K(Z, Be), () => t(Z)), Re(de, (Be, Ne) => kt?.(Be, Ne), () => ({ blur: "lg", opacity: "medium" })), S(() => z(
        de,
        1,
        `absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl ${t(H).dropdown ?? ""}`,
        "svelte-39ftoh"
      )), tt(1, de, () => gt, () => ({ direction: "up", duration: 200 })), i(ne, de);
    };
    b(E, (ne) => {
      t(x) && ne(te);
    });
  }
  var J = u(E, 2), Q = o(J), ee = u(Q);
  {
    var se = (ne) => {
      var de = Et();
      S(() => oe(de, `out of maximum ${e.maxSelections ?? ""}`)), i(ne, de);
    };
    b(ee, (ne) => {
      e.maxSelections && ne(se);
    });
  }
  rt(ie, (ne) => f = ne, () => f), Re(ie, (ne, de) => kt?.(ne, de), () => ({ blur: "sm", opacity: "light" })), Re(ie, (ne, de) => ut?.(ne, de), () => ({ enabled: !g(), strength: 0.1 })), S(() => {
    z(
      re,
      0,
      `w-4 h-4 transition-transform duration-200 ${t(x) ? "rotate-180" : ""} 
			       ${t(H).option ?? ""}`,
      "svelte-39ftoh"
    ), oe(Q, `${t(D).length ?? ""} items selected `);
  }), i(r, ie), Qe();
}
ft(["click", "input", "keydown"]);
var Hd = (r, e) => e(1), Vd = /* @__PURE__ */ v('<button aria-label="Go to first page"><!></button>'), Gd = (r, e, a) => e(a() - 1), Ud = /* @__PURE__ */ v("<span>...</span>"), Wd = (r, e, a) => e(t(a)), Yd = /* @__PURE__ */ v("<button> </button>"), Kd = (r, e, a) => e(a() + 1), Xd = (r, e, a) => e(a.totalPages), Qd = /* @__PURE__ */ v('<button aria-label="Go to last page"><!></button>'), Zd = /* @__PURE__ */ v('<nav><!> <button aria-label="Go to previous page"><!></button> <!> <button aria-label="Go to next page"><!></button> <!></nav>');
function a1(r, e) {
  Xe(e, !0);
  let a = s(e, "currentPage", 15, 1), n = s(e, "siblingCount", 3, 1), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md");
  s(e, "animated", 3, !0);
  let c = s(e, "glow", 3, !1), g = s(e, "jelly", 3, !0), w = s(e, "showFirstLast", 3, !0), O = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
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
  const L = {
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
  }, N = {
    sm: { button: "h-8 min-w-8 px-2 text-xs", icon: 14, gap: "gap-1" },
    md: { button: "h-10 min-w-10 px-3 text-sm", icon: 16, gap: "gap-2" },
    lg: {
      button: "h-12 min-w-12 px-4 text-base",
      icon: 20,
      gap: "gap-3"
    }
  }, T = () => {
    if (n() * 2 + 5 >= e.totalPages)
      return Array.from({ length: e.totalPages }, (q, W) => W + 1);
    const C = Math.max(a() - n(), 1), k = Math.min(a() + n(), e.totalPages), M = C > 2, p = k < e.totalPages - 1;
    if (!M && p) {
      const q = 3 + 2 * n();
      return [...Array.from({ length: q }, (I, _) => _ + 1), "...", e.totalPages];
    }
    if (M && !p) {
      const q = 3 + 2 * n();
      return [1, "...", ...Array.from({ length: q }, (I, _) => e.totalPages - q + _ + 1)];
    }
    return M && p ? [1, "...", ...Array.from({ length: k - C + 1 }, (W, I) => C + I), "...", e.totalPages] : [];
  }, y = (R) => {
    R < 1 || R > e.totalPages || R === a() || (a(R), e.onchange?.(R));
  }, f = L[l()], G = N[d()], Z = /* @__PURE__ */ Se(T);
  var x = Zd();
  Ze(x, (R) => ({ class: R, "aria-label": "Pagination", ...h }), [
    () => V("inline-flex items-center backdrop-blur-xl border rounded-2xl p-2", G.gap, f.container, O())
  ]);
  var B = o(x);
  {
    var D = (R) => {
      var C = Vd();
      C.__click = [Hd, y];
      var k = o(C);
      uo(k, {
        get size() {
          return G.icon;
        }
      }), Re(C, (M, p) => jellyHover?.(M, p), () => ({
        enabled: g() && a() !== 1,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), S(
        (M) => {
          C.disabled = a() === 1, z(C, 1, M);
        },
        [
          () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), i(R, C);
    };
    b(B, (R) => {
      w() && R(D);
    });
  }
  var j = u(B, 2);
  j.__click = [Gd, y, a];
  var P = o(j);
  da(P, {
    get size() {
      return G.icon;
    }
  }), Re(j, (R, C) => jellyHover?.(R, C), () => ({
    enabled: g() && a() !== 1,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var F = u(j, 2);
  We(F, 17, () => t(Z), vt, (R, C) => {
    var k = Ae(), M = we(k);
    {
      var p = (W) => {
        var I = Ud();
        S((_) => z(I, 1, _), [
          () => $(V("flex items-center justify-center", G.button, "opacity-50"))
        ]), i(W, I);
      }, q = (W) => {
        var I = Yd();
        I.__click = [Wd, y, C];
        var _ = o(I);
        Re(I, (m, ie) => jellyHover?.(m, ie), () => ({
          enabled: g() && t(C) !== a(),
          scale: 1.05,
          duration: 200,
          borderRadius: "8px"
        })), S(
          (m) => {
            z(I, 1, m), ye(I, "aria-label", `Go to page ${t(C)}`), ye(I, "aria-current", t(C) === a() ? "page" : void 0), oe(_, t(C));
          },
          [
            () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200 font-medium", G.button, t(C) === a() ? f.active : f.button, t(C) === a() && c() && f.glow, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]
        ), i(W, I);
      };
      b(M, (W) => {
        t(C) === "..." ? W(p) : W(q, !1);
      });
    }
    i(R, k);
  });
  var H = u(F, 2);
  H.__click = [Kd, y, a];
  var A = o(H);
  Or(A, {
    get size() {
      return G.icon;
    }
  }), Re(H, (R, C) => jellyHover?.(R, C), () => ({
    enabled: g() && a() !== e.totalPages,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var U = u(H, 2);
  {
    var X = (R) => {
      var C = Qd();
      C.__click = [Xd, y, e];
      var k = o(C);
      fo(k, {
        get size() {
          return G.icon;
        }
      }), Re(C, (M, p) => jellyHover?.(M, p), () => ({
        enabled: g() && a() !== e.totalPages,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), S(
        (M) => {
          C.disabled = a() === e.totalPages, z(C, 1, M);
        },
        [
          () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), i(R, C);
    };
    b(U, (R) => {
      w() && R(X);
    });
  }
  S(
    (R, C) => {
      j.disabled = a() === 1, z(j, 1, R), H.disabled = a() === e.totalPages, z(H, 1, C);
    },
    [
      () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20")),
      () => $(V("flex items-center justify-center rounded-lg border transition-all duration-200", G.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
    ]
  ), i(r, x), Qe();
}
ft(["click"]);
var Jd = /* @__PURE__ */ v("<span><!></span>"), $d = /* @__PURE__ */ v('<div class="flex justify-between items-center svelte-b8e192"><label class="text-sm font-medium text-white svelte-b8e192"> </label> <!></div>'), ec = /* @__PURE__ */ v('<div role="progressbar" aria-valuemin="0"><div></div></div>'), tc = /* @__PURE__ */ v("<div><!></div>"), rc = /* @__PURE__ */ v('<div role="progressbar" aria-valuemin="0"><svg class="transform -rotate-90 svelte-b8e192"><circle stroke="currentColor" fill="transparent" class="text-white/10 svelte-b8e192"></circle><circle stroke="currentColor" fill="transparent" stroke-linecap="round"></circle></svg> <!></div>'), ac = /* @__PURE__ */ v("<div><!> <!></div>");
function n1(r, e) {
  Xe(e, !0);
  const a = s(e, "value", 3, 0), n = s(e, "max", 3, 100), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "type", 3, "linear"), g = s(e, "blur", 3, "md"), w = s(e, "showValue", 3, !1), O = s(e, "showPercentage", 3, !1), h = s(e, "indeterminate", 3, !1), L = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), T = s(e, "class", 3, ""), y = /* @__PURE__ */ ct(e, [
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
  ]), f = `progress-${Math.random().toString(36).substr(2, 9)}`, G = /* @__PURE__ */ Se(() => h() ? 0 : Math.min(100, Math.max(0, a() / n() * 100))), Z = {
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
  }, D = V("relative overflow-hidden rounded-full", Z[l()][c()], x[d()].track, d() === "glass" && B[g()]), j = V("h-full transition-all duration-500 ease-out rounded-full", x[d()].fill, h() && "animate-pulse"), P = c() === "circular" ? parseInt(Z[l()].circular.split(" ")[0].slice(2)) * 4 : 0, F = Math.max(2, P / 8), H = (P - F) / 2, A = 2 * Math.PI * H, U = A, X = /* @__PURE__ */ Se(() => A - t(G) / 100 * A);
  xt(() => {
    Jt("Progress", "small");
  });
  var R = ac();
  Ze(R, () => ({ class: "w-full space-y-2", ...y }), void 0, void 0, "svelte-b8e192");
  var C = o(R);
  {
    var k = (W) => {
      var I = $d(), _ = o(I), m = o(_), ie = u(_, 2);
      {
        var ue = (fe) => {
          var ve = Jd(), ae = o(ve);
          {
            var Y = (re) => {
              var E = Et();
              S((te) => oe(E, `${te ?? ""}%`), [() => t(G).toFixed(0)]), i(re, E);
            }, le = (re) => {
              var E = Ae(), te = we(E);
              {
                var J = (Q) => {
                  var ee = Et();
                  S(() => oe(ee, `${a() ?? ""}/${n() ?? ""}`)), i(Q, ee);
                };
                b(
                  te,
                  (Q) => {
                    w() && Q(J);
                  },
                  !0
                );
              }
              i(re, E);
            };
            b(ae, (re) => {
              O() ? re(Y) : re(le, !1);
            });
          }
          S((re) => z(ve, 1, re, "svelte-b8e192"), [
            () => $(V("font-medium text-white/80", Z[l()].text))
          ]), i(fe, ve);
        };
        b(ie, (fe) => {
          (w() || O()) && fe(ue);
        });
      }
      S(() => {
        ye(_, "id", `progress-label-${f}`), ye(_, "for", `progress-${f}`), oe(m, e.label);
      }), i(W, I);
    };
    b(C, (W) => {
      e.label && W(k);
    });
  }
  var M = u(C, 2);
  {
    var p = (W) => {
      var I = ec(), _ = o(I);
      let m;
      Re(_, (ie, ue) => kt?.(ie, ue), () => L() && !N() ? { blur: g(), opacity: "subtle" } : void 0), S(
        (ie, ue) => {
          ye(I, "id", `progress-${f}`), z(I, 1, ie, "svelte-b8e192"), ye(I, "aria-valuemax", n()), ye(I, "aria-valuenow", h() ? void 0 : a()), ye(I, "aria-label", e.label ? void 0 : "Progress"), ye(I, "aria-labelledby", e.label ? `progress-label-${f}` : void 0), z(_, 1, $(j), "svelte-b8e192"), m = mt(_, "", m, ue);
        },
        [
          () => $(V(D, T())),
          () => ({
            width: h() ? "30%" : `${t(G)}%`,
            animation: h() && !N() ? "progress-indeterminate 2s ease-in-out infinite" : void 0
          })
        ]
      ), i(W, I);
    }, q = (W) => {
      var I = rc(), _ = o(I), m = o(_), ie = u(m);
      let ue;
      var fe = u(_, 2);
      {
        var ve = (ae) => {
          var Y = tc(), le = o(Y);
          {
            var re = (te) => {
              var J = Et();
              S((Q) => oe(J, `${Q ?? ""}%`), [() => t(G).toFixed(0)]), i(te, J);
            }, E = (te) => {
              var J = Ae(), Q = we(J);
              {
                var ee = (se) => {
                  var ne = Et();
                  S(() => oe(ne, a())), i(se, ne);
                };
                b(
                  Q,
                  (se) => {
                    w() && se(ee);
                  },
                  !0
                );
              }
              i(te, J);
            };
            b(le, (te) => {
              O() ? te(re) : te(E, !1);
            });
          }
          S((te) => z(Y, 1, te, "svelte-b8e192"), [
            () => $(V("absolute inset-0 flex items-center justify-center font-medium text-white", Z[l()].text))
          ]), i(ae, Y);
        };
        b(fe, (ae) => {
          (w() || O()) && ae(ve);
        });
      }
      S(
        (ae, Y) => {
          z(I, 1, ae, "svelte-b8e192"), ye(I, "aria-valuemax", n()), ye(I, "aria-valuenow", h() ? void 0 : a()), ye(I, "aria-label", e.label || "Progress"), ye(_, "width", P), ye(_, "height", P), ye(m, "cx", P / 2), ye(m, "cy", P / 2), ye(m, "r", H), ye(m, "stroke-width", F), ye(ie, "cx", P / 2), ye(ie, "cy", P / 2), ye(ie, "r", H), ye(ie, "stroke-width", F), ye(ie, "stroke-dasharray", U), ye(ie, "stroke-dashoffset", h() ? U * 0.75 : t(X)), ue = z(ie, 0, "text-blue-500 transition-all duration-500 ease-out svelte-b8e192", null, ue, Y);
        },
        [
          () => $(V("relative inline-flex items-center justify-center", Z[l()].circular, T())),
          () => ({ "animate-spin": h() && !N() })
        ]
      ), i(W, I);
    };
    b(M, (W) => {
      c() === "linear" ? W(p) : W(q, !1);
    });
  }
  i(r, R), Qe();
}
var nc = (r, e, a) => !t(e).disabled && a(t(e).value), ic = /* @__PURE__ */ v("<div></div>"), oc = /* @__PURE__ */ v("<span> </span>"), lc = /* @__PURE__ */ v('<label><input type="radio" class="sr-only svelte-mbuql4"/> <div><!></div> <div class="flex flex-col svelte-mbuql4"><span> </span> <!></div></label>'), sc = /* @__PURE__ */ v('<p class="text-red-400 text-sm mt-2 animate-pulse svelte-mbuql4"> </p>'), dc = /* @__PURE__ */ v("<div><!> <!></div>");
function i1(r, e) {
  Xe(e, !0);
  let a = s(e, "value", 15), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "orientation", 3, "vertical"), c = s(e, "animated", 3, !0), g = s(e, "glow", 3, !1), w = s(e, "jelly", 3, !0), O = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
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
  const L = (D) => {
    a(D), e.onchange?.(D);
  }, N = {
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
  }, y = N[n()], f = T[l()];
  var G = dc();
  Ze(
    G,
    (D) => ({ class: D, ...h }),
    [
      () => V("relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300", y.container, d() === "horizontal" ? "inline-flex flex-row gap-6" : "flex flex-col gap-3", e.error && "border-red-500/50", O())
    ],
    void 0,
    "svelte-mbuql4"
  );
  var Z = o(G);
  We(Z, 17, () => e.options, vt, (D, j) => {
    var P = lc(), F = o(P);
    F.__change = [nc, j, L];
    var H = u(F, 2), A = o(H);
    {
      var U = (p) => {
        var q = ic();
        S((W) => z(q, 1, W, "svelte-mbuql4"), [
          () => $(V("rounded-full bg-white transition-all duration-300", f.dot, c() && "animate-pulse"))
        ]), i(p, q);
      };
      b(A, (p) => {
        a() === t(j).value && p(U);
      });
    }
    Re(H, (p, q) => Rt?.(p, q), () => ({
      enabled: c() && a() === t(j).value,
      intensity: 0.05,
      speed: 2e3
    }));
    var X = u(H, 2), R = o(X), C = o(R), k = u(R, 2);
    {
      var M = (p) => {
        var q = oc(), W = o(q);
        S(
          (I) => {
            z(q, 1, I, "svelte-mbuql4"), oe(W, t(j).description);
          },
          [
            () => $(V("text-xs opacity-60 mt-0.5", y.label))
          ]
        ), i(p, q);
      };
      b(k, (p) => {
        t(j).description && p(M);
      });
    }
    Re(P, (p, q) => jellyHover?.(p, q), () => ({
      enabled: w() && !t(j).disabled,
      scale: 1.02,
      duration: 200,
      borderRadius: "16px"
    })), S(
      (p, q, W) => {
        z(P, 1, p, "svelte-mbuql4"), ye(F, "name", e.name), Bi(F, t(j).value), Qt(F, a() === t(j).value), F.disabled = t(j).disabled, z(H, 1, q, "svelte-mbuql4"), z(R, 1, W, "svelte-mbuql4"), oe(C, t(j).label);
      },
      [
        () => $(V("relative flex items-center cursor-pointer group", f.gap, t(j).disabled && "opacity-50 cursor-not-allowed")),
        () => $(V("relative rounded-full border-2 transition-all duration-300 flex items-center justify-center", f.radio, y.radio, a() === t(j).value && y.checked, a() === t(j).value && g() && y.glow, c() && "transform-gpu will-change-transform", !t(j).disabled && "group-hover:scale-110")),
        () => $(V("font-medium transition-colors duration-200", f.label, y.label, !t(j).disabled && "group-hover:text-white"))
      ]
    ), i(D, P);
  });
  var x = u(Z, 2);
  {
    var B = (D) => {
      var j = sc(), P = o(j);
      S(() => oe(P, e.error)), i(D, j);
    };
    b(x, (D) => {
      e.error && D(B);
    });
  }
  i(r, G), Qe();
}
ft(["change"]);
var cc = /* @__PURE__ */ v('<label class="block text-sm font-medium text-white/80 mb-2 svelte-c6qw7v"> </label>'), vc = (r, e, a) => e(t(a)), uc = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, fc = /* @__PURE__ */ v('<li role="option" tabindex="-1"> </li>'), bc = /* @__PURE__ */ v('<ul role="listbox"></ul>'), gc = /* @__PURE__ */ v('<!> <div><span class="truncate svelte-c6qw7v"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-c6qw7v"></path></svg></div> <!>', 1);
function o1(r, e) {
  Xe(e, !0);
  let a = s(e, "options", 19, () => []), n = s(e, "value", 7, ""), l = s(e, "placeholder", 3, "Select an option..."), d = s(e, "disabled", 3, !1), c = s(e, "size", 3, "md"), g = s(e, "variant", 3, "glass"), w = s(e, "blur", 3, "md"), O = s(e, "animate", 3, !0), h = s(e, "liquid", 3, !1), L = s(e, "magnetic", 3, !1), N = s(e, "jelly", 3, !1), T = s(e, "glow", 3, !1), y = s(e, "reduceMotion", 3, !1), f = s(e, "label", 3, ""), G = s(e, "class", 3, ""), Z = /* @__PURE__ */ ct(e, [
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
  ]), x = /* @__PURE__ */ ke(!1), B = /* @__PURE__ */ ke(void 0), D = /* @__PURE__ */ ke(void 0), j = /* @__PURE__ */ ke(-1);
  const P = `select-${Math.random().toString(36).substr(2, 9)}`, F = f() ? `${P}-label` : void 0, H = `${P}-listbox`, A = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
  }, U = {
    default: "bg-white/5 border border-white/10 text-white",
    glass: "glass-subtle border border-white/20 text-white",
    terminal: "terminal text-green-300",
    liquid: "bg-gradient-to-r from-white/5 to-white/15 border border-white/20 text-white backdrop-blur-md"
  }, X = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, R = /* @__PURE__ */ Se(() => a().find((J) => J.value === n())), C = V("relative flex items-center justify-between rounded-brand-md cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "transition-all duration-200", A[c()], U[g()], g() === "glass" && X[w()], h() && "backdrop-blur-md hover:backdrop-blur-lg", T() && "focus:shadow-lg focus:shadow-brand-primary/20", N() && !d() && "hover:scale-105 active:scale-95", d() && "opacity-50 cursor-not-allowed", G()), k = V("absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg", "max-h-60 overflow-auto", U[g()], g() === "glass" && `${X[w()]} border border-white/20`);
  function M(J) {
    if (!d())
      switch (J.key) {
        case "Enter":
        case " ":
          J.preventDefault(), t(x) && t(j) >= 0 ? _(a()[t(j)]) : q();
          break;
        case "Escape":
          t(x) && (J.preventDefault(), I());
          break;
        case "ArrowDown":
          J.preventDefault(), t(x) ? p(1) : W();
          break;
        case "ArrowUp":
          J.preventDefault(), t(x) ? p(-1) : W();
          break;
        case "Home":
          t(x) && (J.preventDefault(), K(j, 0));
          break;
        case "End":
          t(x) && (J.preventDefault(), K(j, a().length - 1));
          break;
      }
  }
  function p(J) {
    const Q = a().filter((se) => !se.disabled);
    if (Q.length === 0) return;
    let ee = t(j) + J;
    ee < 0 ? ee = Q.length - 1 : ee >= Q.length && (ee = 0), K(j, a().findIndex((se) => se === Q[ee]), !0);
  }
  function q() {
    d() || (K(x, !t(x)), t(x) && K(
      j,
      n() ? a().findIndex((J) => J.value === n()) : -1,
      !0
    ));
  }
  function W() {
    d() || (K(x, !0), K(
      j,
      n() ? a().findIndex((J) => J.value === n()) : -1,
      !0
    ));
  }
  function I() {
    K(x, !1), K(j, -1);
  }
  function _(J) {
    J.disabled || (n(J.value), e.onValueChange?.(J.value), I());
  }
  function m(J) {
    t(B) && !t(B).contains(J.target) && I();
  }
  xt(() => {
    if (t(x))
      return document.addEventListener("click", m), () => document.removeEventListener("click", m);
  }), xt(() => {
    Jt("Select", "medium");
  });
  var ie = gc(), ue = we(ie);
  {
    var fe = (J) => {
      var Q = cc(), ee = o(Q);
      S(() => {
        ye(Q, "id", F), ye(Q, "for", P), oe(ee, f());
      }), i(J, Q);
    };
    b(ue, (J) => {
      f() && J(fe);
    });
  }
  var ve = u(ue, 2);
  Ze(
    ve,
    () => ({
      id: P,
      class: C,
      role: "combobox",
      "aria-expanded": t(x),
      "aria-haspopup": "listbox",
      "aria-labelledby": F || e["aria-label"],
      "aria-activedescendant": t(j) > -1 ? `${P}-option-${t(j)}` : void 0,
      tabindex: d() ? -1 : 0,
      onkeydown: M,
      onclick: q,
      ...Z
    }),
    void 0,
    void 0,
    "svelte-c6qw7v"
  );
  var ae = o(ve), Y = o(ae), le = u(ae, 2);
  let re;
  rt(ve, (J) => K(B, J), () => t(B)), Re(ve, (J, Q) => ut?.(J, Q), () => L() && !d() && !y() ? { strength: 0.1, distance: 40 } : void 0), Re(ve, (J, Q) => ut?.(J, Q), () => N() && !d() && !y() ? { strength: 0.08 } : void 0);
  var E = u(ve, 2);
  {
    var te = (J) => {
      var Q = bc();
      We(Q, 21, a, vt, (ee, se, ne) => {
        var de = fc();
        de.__click = [vc, _, se], de.__keydown = [uc, _, se];
        var Ce = o(de);
        S(
          (be) => {
            ye(de, "id", `${P}-option-${ne}`), z(de, 1, be, "svelte-c6qw7v"), ye(de, "aria-selected", n() === t(se).value), ye(de, "aria-disabled", t(se).disabled), oe(Ce, t(se).label);
          },
          [
            () => $(V("px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10", t(j) === ne && "bg-white/20", t(se).disabled && "opacity-50 cursor-not-allowed"))
          ]
        ), qt("mouseenter", de, () => !t(se).disabled && K(j, ne, !0)), i(ee, de);
      }), rt(Q, (ee) => K(D, ee), () => t(D)), S(() => {
        z(Q, 1, $(k), "svelte-c6qw7v"), ye(Q, "id", H), ye(Q, "aria-labelledby", F || e["aria-label"]);
      }), tt(1, Q, () => gt, () => ({
        direction: "down",
        distance: 10,
        duration: O() && !y() ? 150 : 0
      })), tt(2, Q, () => gt, () => ({
        direction: "up",
        distance: 10,
        duration: O() && !y() ? 100 : 0
      })), i(J, Q);
    };
    b(E, (J) => {
      t(x) && J(te);
    });
  }
  S(
    (J) => {
      oe(Y, t(R)?.label || l()), re = z(le, 0, "w-4 h-4 ml-2 transition-transform duration-200 svelte-c6qw7v", null, re, J);
    },
    [() => ({ "rotate-180": t(x) })]
  ), i(r, ie), Qe();
}
ft(["click", "keydown"]);
function hc(r, e, a, n, l, d, c) {
  if (!e())
    switch (r.key) {
      case "Enter":
        r.preventDefault(), t(a) && t(n) >= 0 && t(l)[t(n)] ? d(t(l)[t(n)]) : t(a) || c();
        break;
      case "Escape":
        t(a) && (K(a, !1), r.stopPropagation());
        break;
      case "ArrowDown":
        r.preventDefault(), t(a) ? K(n, Math.min(t(n) + 1, t(l).length - 1), !0) : c();
        break;
      case "ArrowUp":
        r.preventDefault(), t(a) && K(n, Math.max(t(n) - 1, -1), !0);
        break;
      case "Tab":
        t(a) && K(a, !1);
        break;
    }
}
var mc = (
  // Reset highlighted index when options change
  (r, e, a) => {
    r.stopPropagation(), e(t(a).value);
  }
), _c = /* @__PURE__ */ v('<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md"> <button class="hover:text-red-300"><!></button></span>'), xc = /* @__PURE__ */ v('<span class="text-xs opacity-70"> </span>'), pc = /* @__PURE__ */ v('<div class="flex flex-wrap gap-1"><!> <!></div>'), wc = /* @__PURE__ */ v("<span> </span>"), yc = /* @__PURE__ */ v('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>'), kc = (r, e) => {
  r.stopPropagation(), e();
}, Cc = /* @__PURE__ */ v('<button class="p-1 hover:bg-white/10 rounded transition-colors"><!></button>'), Ec = /* @__PURE__ */ v('<div class="p-2 border-b border-white/10"><div class="relative"><!> <input placeholder="Search options..." autocomplete="off"/></div></div>'), Sc = /* @__PURE__ */ v("<div> </div>"), Tc = /* @__PURE__ */ v('<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5"> </div>'), Mc = (r, e, a) => e(t(a)), Ac = (r, e, a) => r.key === "Enter" && e(t(a)), Ic = /* @__PURE__ */ v('<div class="text-xs opacity-60 mt-0.5"> </div>'), Pc = /* @__PURE__ */ v("<div><!></div>"), Lc = /* @__PURE__ */ v('<div role="option"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div>'), zc = /* @__PURE__ */ v("<!> <!>", 1), Dc = /* @__PURE__ */ v('<div><!> <div class="overflow-y-auto max-h-48 svelte-8h6s2s" role="listbox"><!></div></div>'), Rc = /* @__PURE__ */ v('<p class="text-red-400 text-sm mt-1" role="alert"> </p>'), Nc = /* @__PURE__ */ v('<div><div role="combobox" aria-haspopup="listbox"><div class="flex-1 truncate"><!></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!></div>');
function l1(r, e) {
  Xe(e, !0);
  let a = s(e, "value", 15), n = s(e, "placeholder", 3, "Select an option..."), l = s(e, "multiple", 3, !1), d = s(e, "searchable", 3, !1), c = s(e, "clearable", 3, !1), g = s(e, "disabled", 3, !1), w = s(e, "loading", 3, !1), O = s(e, "size", 3, "md"), h = s(e, "variant", 3, "glass");
  s(e, "createOption", 3, !1), s(e, "virtualScroll", 3, !1);
  let L = s(e, "closeOnSelect", 3, !0), N = s(e, "class", 3, ""), T = /* @__PURE__ */ ct(e, [
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
  const y = At();
  let f = /* @__PURE__ */ ke(!1), G = /* @__PURE__ */ ke(""), Z, x = /* @__PURE__ */ ke(void 0), B = /* @__PURE__ */ ke(void 0), D = /* @__PURE__ */ ke(-1);
  const j = `select-${Math.random().toString(36).substr(2, 9)}`, P = /* @__PURE__ */ Se(() => () => a() ? Array.isArray(a()) ? a() : [a()] : []), F = /* @__PURE__ */ Se(() => () => {
    if (!t(G).trim()) return e.options;
    const ee = t(G).toLowerCase();
    return e.options.filter((se) => se.label.toLowerCase().includes(ee) || se.description?.toLowerCase().includes(ee));
  }), H = /* @__PURE__ */ Se(() => () => {
    if (!e.groupBy) return { "": t(F) };
    const ee = {};
    return t(F).forEach((se) => {
      const ne = se.group || "";
      ee[ne] || (ee[ne] = []), ee[ne].push(se);
    }), ee;
  }), A = /* @__PURE__ */ Se(() => () => t(P).length ? l() ? t(P).length === 1 ? e.options.find((ne) => ne.value === t(P)[0])?.label || "" : `${t(P).length} selected` : e.options.find((se) => se.value === t(P)[0])?.label || "" : n()), U = {
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
  }, X = {
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
  }, R = U[O()], C = X[h()];
  function k() {
    g() || (K(f, !t(f)), t(f) && d() && setTimeout(() => t(B)?.focus(), 0));
  }
  function M(ee) {
    if (!ee.disabled) {
      if (l()) {
        const se = t(P);
        if (se.includes(ee.value))
          a(se.filter((de) => de !== ee.value));
        else {
          if (e.maxSelections && se.length >= e.maxSelections) return;
          a([...se, ee.value]);
        }
      } else
        a(ee.value), L() && K(f, !1);
      y("change", { value: a(), option: ee });
    }
  }
  function p() {
    a(l() ? [] : void 0), y("clear");
  }
  function q(ee) {
    if (!l()) return;
    const se = t(P);
    a(se.filter((ne) => ne !== ee));
  }
  function W(ee) {
    Z && !Z.contains(ee.target) && K(f, !1);
  }
  yt(() => (document.addEventListener("click", W), () => document.removeEventListener("click", W))), xt(() => {
    t(F) && K(D, -1);
  });
  var I = Nc();
  Ze(I, (ee) => ({ class: ee, ...T }), [() => V("relative w-full", N())], void 0, "svelte-8h6s2s");
  var _ = o(I);
  _.__click = k, _.__keydown = [
    hc,
    g,
    f,
    D,
    F,
    M,
    k
  ];
  var m = o(_), ie = o(m);
  {
    var ue = (ee) => {
      var se = pc(), ne = o(se);
      We(ne, 17, () => t(P).slice(0, 2), vt, (be, ce) => {
        const me = /* @__PURE__ */ Se(() => e.options.find((Oe) => Oe.value === t(ce)));
        var Ee = Ae(), Be = we(Ee);
        {
          var Ne = (Oe) => {
            var Me = _c(), xe = o(Me), Le = u(xe);
            Le.__click = [mc, q, me];
            var je = o(Le);
            sa(je, { size: 12 }), S(() => oe(xe, `${t(me).label ?? ""} `)), i(Oe, Me);
          };
          b(Be, (Oe) => {
            t(me) && Oe(Ne);
          });
        }
        i(be, Ee);
      });
      var de = u(ne, 2);
      {
        var Ce = (be) => {
          var ce = xc(), me = o(ce);
          S(() => oe(me, `+${t(P).length - 2} more`)), i(be, ce);
        };
        b(de, (be) => {
          t(P).length > 2 && be(Ce);
        });
      }
      i(ee, se);
    }, fe = (ee) => {
      var se = wc(), ne = o(se);
      S(
        (de) => {
          z(se, 1, de, "svelte-8h6s2s"), oe(ne, t(A));
        },
        [
          () => $(V(!t(P).length && "opacity-60"))
        ]
      ), i(ee, se);
    };
    b(ie, (ee) => {
      l() && t(P).length > 1 ? ee(ue) : ee(fe, !1);
    });
  }
  var ve = u(m, 2), ae = o(ve);
  {
    var Y = (ee) => {
      var se = yc();
      i(ee, se);
    }, le = (ee) => {
      var se = Ae(), ne = we(se);
      {
        var de = (Ce) => {
          var be = Cc();
          be.__click = [kc, p];
          var ce = o(be);
          sa(ce, { size: 16 }), i(Ce, be);
        };
        b(
          ne,
          (Ce) => {
            c() && t(P).length > 0 && Ce(de);
          },
          !0
        );
      }
      i(ee, se);
    };
    b(ae, (ee) => {
      w() ? ee(Y) : ee(le, !1);
    });
  }
  var re = u(ae, 2);
  {
    let ee = /* @__PURE__ */ Se(() => V("transition-transform duration-200", t(f) && "rotate-180"));
    Kr(re, {
      size: 16,
      get class() {
        return t(ee);
      }
    });
  }
  var E = u(_, 2);
  {
    var te = (ee) => {
      var se = Dc(), ne = o(se);
      {
        var de = (Ee) => {
          var Be = Ec(), Ne = o(Be), Oe = o(Ne);
          Yn(Oe, {
            size: 16,
            class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
          });
          var Me = u(Oe, 2);
          rt(Me, (xe) => K(B, xe), () => t(B)), S((xe) => z(Me, 1, xe, "svelte-8h6s2s"), [
            () => $(V("w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50", C.search))
          ]), nr(Me, () => t(G), (xe) => K(G, xe)), i(Ee, Be);
        };
        b(ne, (Ee) => {
          d() && Ee(de);
        });
      }
      var Ce = u(ne, 2), be = o(Ce);
      {
        var ce = (Ee) => {
          var Be = Sc(), Ne = o(Be);
          S(
            (Oe) => {
              z(Be, 1, Oe, "svelte-8h6s2s"), oe(Ne, t(G) ? "No options found" : "No options available");
            },
            [
              () => $(V("text-center py-4 opacity-60", R.option))
            ]
          ), i(Ee, Be);
        }, me = (Ee) => {
          var Be = Ae(), Ne = we(Be);
          We(Ne, 17, () => Object.entries(t(H)), vt, (Oe, Me) => {
            var xe = /* @__PURE__ */ Se(() => Xr(t(Me), 2));
            let Le = () => t(xe)[0], je = () => t(xe)[1];
            var he = zc(), pe = we(he);
            {
              var Ie = (_e) => {
                var De = Tc(), Te = o(De);
                S(() => oe(Te, Le())), i(_e, De);
              };
              b(pe, (_e) => {
                Le() && Object.keys(t(H)).length > 1 && _e(Ie);
              });
            }
            var ge = u(pe, 2);
            We(ge, 17, je, vt, (_e, De) => {
              const Te = /* @__PURE__ */ Se(() => t(P).includes(t(De).value)), qe = /* @__PURE__ */ Se(() => t(F).indexOf(t(De)) === t(D));
              var Fe = Lc();
              Fe.__click = [Mc, M, De], Fe.__keydown = [Ac, M, De];
              var Ve = o(Fe), Ge = o(Ve), Ke = o(Ge), Je = u(Ge, 2);
              {
                var $e = (Pe) => {
                  var He = Ic(), et = o(He);
                  S(() => oe(et, t(De).description)), i(Pe, He);
                };
                b(Je, (Pe) => {
                  t(De).description && Pe($e);
                });
              }
              var at = u(Ve, 2);
              {
                var nt = (Pe) => {
                  var He = Pc(), et = o(He);
                  {
                    var dt = (it) => {
                      Ua(it, { size: 12, class: "text-white" });
                    };
                    b(et, (it) => {
                      t(Te) && it(dt);
                    });
                  }
                  S((it) => z(He, 1, it, "svelte-8h6s2s"), [
                    () => $(V("w-4 h-4 border rounded flex items-center justify-center", t(Te) ? "bg-blue-500 border-blue-500" : "border-white/20"))
                  ]), i(Pe, He);
                }, Ue = (Pe) => {
                  var He = Ae(), et = we(He);
                  {
                    var dt = (it) => {
                      Ua(it, { size: 16, class: "text-blue-400" });
                    };
                    b(
                      et,
                      (it) => {
                        t(Te) && it(dt);
                      },
                      !0
                    );
                  }
                  i(Pe, He);
                };
                b(at, (Pe) => {
                  l() ? Pe(nt) : Pe(Ue, !1);
                });
              }
              S(
                (Pe) => {
                  z(Fe, 1, Pe, "svelte-8h6s2s"), ye(Fe, "aria-selected", t(Te)), ye(Fe, "tabindex", t(De).disabled ? -1 : 0), oe(Ke, t(De).label);
                },
                [
                  () => $(V(
                    "flex items-center justify-between cursor-pointer transition-colors",
                    R.option,
                    t(De).disabled ? "opacity-50 cursor-not-allowed" : C.option,
                    t(Te) && C.optionSelected,
                    t(qe) && "bg-white/5"
                  ))
                ]
              ), i(_e, Fe);
            }), i(Oe, he);
          }), i(Ee, Be);
        };
        b(be, (Ee) => {
          t(F).length === 0 ? Ee(ce) : Ee(me, !1);
        });
      }
      rt(se, (Ee) => K(x, Ee), () => t(x)), Re(se, (Ee, Be) => kt?.(Ee, Be), () => ({ intensity: "medium" })), S(
        (Ee) => {
          z(se, 1, Ee, "svelte-8h6s2s"), ye(Ce, "id", `${j}-listbox`);
        },
        [
          () => $(V("absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden", C.dropdown, R.dropdown))
        ]
      ), i(ee, se);
    };
    b(E, (ee) => {
      t(f) && ee(te);
    });
  }
  var J = u(E, 2);
  {
    var Q = (ee) => {
      var se = Rc(), ne = o(se);
      S(() => oe(ne, e.error)), i(ee, se);
    };
    b(J, (ee) => {
      e.error && ee(Q);
    });
  }
  rt(I, (ee) => Z = ee, () => Z), S(
    (ee) => {
      z(_, 1, ee, "svelte-8h6s2s"), ye(_, "tabindex", g() ? -1 : 0), ye(_, "aria-expanded", t(f)), ye(_, "aria-controls", `${j}-listbox`), ye(_, "aria-labelledby", j);
    },
    [
      () => $(V("relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer", R.trigger, C.trigger, g() && "opacity-50 cursor-not-allowed", e.error && "border-red-500/50", t(f) && "ring-2 ring-blue-400/50"))
    ]
  ), i(r, I), Qe();
}
ft(["click", "keydown"]);
var Oc = /* @__PURE__ */ v("<div></div>"), jc = /* @__PURE__ */ v("<div><!></div>"), qc = /* @__PURE__ */ v("<div></div>"), Bc = /* @__PURE__ */ v("<div></div>"), Fc = /* @__PURE__ */ v("<div><!></div>");
function s1(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "glass"), n = s(e, "type", 3, "text"), l = s(e, "lines", 3, 3), d = s(e, "animated", 3, !0), c = s(e, "glow", 3, !1), g = s(e, "speed", 3, "normal"), w = s(e, "class", 3, ""), O = s(e, "rounded", 3, !0), h = /* @__PURE__ */ ct(e, [
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
  ]), L = {
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
  }, N = {
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
  }, y = L[a()], f = T[n()], G = N[g()], Z = /* @__PURE__ */ Se(() => n() === "text" || n() === "paragraph" ? Array.from({ length: l() }, (P, F) => F === l() - 1 ? "60%" : `${85 + Math.floor(Math.random() * 15)}%`) : []);
  var x = Ae(), B = we(x);
  {
    var D = (P) => {
      var F = qc();
      Ze(F, (H) => ({ class: H, ...h }), [() => V(f.spacing, w())], void 0, "svelte-1jcbe1x"), We(F, 21, () => t(Z), vt, (H, A, U) => {
        var X = jc(), R = o(X);
        {
          var C = (k) => {
            var M = Oc();
            S((p) => z(M, 1, p, "svelte-1jcbe1x"), [
              () => $(V("absolute inset-0 bg-gradient-to-r", y.shimmer, G, "animate-shimmer"))
            ]), i(k, M);
          };
          b(R, (k) => {
            d() && k(C);
          });
        }
        Re(X, (k, M) => Rt?.(k, M), () => ({
          enabled: d() && a() === "liquid",
          intensity: 0.02,
          speed: 3e3
        })), S(
          (k) => {
            z(X, 1, k, "svelte-1jcbe1x"), mt(X, `width: ${(e.width || t(A)) ?? ""}`);
          },
          [
            () => $(V("relative overflow-hidden backdrop-blur-xl border", f.height, y.bg, y.border, c() && y.glow, O() && "rounded-lg", d() && "transform-gpu will-change-transform"))
          ]
        ), tt(3, X, () => gt, () => ({ duration: 200, delay: U * 50 })), i(H, X);
      }), i(P, F);
    }, j = (P) => {
      var F = Fc();
      Ze(
        F,
        (U, X) => ({ class: U, ...h, [yr]: X }),
        [
          () => V("relative overflow-hidden backdrop-blur-xl border", f.width, f.height, y.bg, y.border, f.rounded || O() && "rounded-lg", c() && y.glow, d() && "transform-gpu will-change-transform", w()),
          () => ({ width: e.width, height: e.height })
        ],
        void 0,
        "svelte-1jcbe1x"
      );
      var H = o(F);
      {
        var A = (U) => {
          var X = Bc();
          S((R) => z(X, 1, R, "svelte-1jcbe1x"), [
            () => $(V("absolute inset-0 bg-gradient-to-r", y.shimmer, G, "animate-shimmer"))
          ]), i(U, X);
        };
        b(H, (U) => {
          d() && U(A);
        });
      }
      Re(F, (U, X) => Rt?.(U, X), () => ({
        enabled: d() && a() === "liquid",
        intensity: 0.03,
        speed: 3e3
      })), tt(3, F, () => gt, () => ({ duration: 200 })), i(P, F);
    };
    b(B, (P) => {
      n() === "text" || n() === "paragraph" ? P(D) : P(j, !1);
    });
  }
  i(r, x), Qe();
}
function Hc(r, e, a, n) {
  if (e()) return;
  K(a, !0), n(r);
  const l = (c) => n(c), d = () => {
    K(a, !1), document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", d);
  };
  document.addEventListener("mousemove", l), document.addEventListener("mouseup", d);
}
var Vc = /* @__PURE__ */ v('<span class="ml-2 text-white/70 svelte-wpw1ph"> </span>'), Gc = /* @__PURE__ */ v("<label> <!></label>"), Uc = /* @__PURE__ */ v('<div class="absolute top-1/2 w-1 h-1 bg-white/50 rounded-full -translate-y-1/2 -translate-x-1/2 svelte-wpw1ph"></div>'), Wc = /* @__PURE__ */ v('<div class="flex justify-center mt-2 svelte-wpw1ph"><span> </span></div>'), Yc = /* @__PURE__ */ v('<div class="w-full space-y-2 svelte-wpw1ph"><!> <div><div role="slider"><div></div> <div></div> <!></div> <!></div></div>');
function d1(r, e) {
  Xe(e, !0);
  let a = s(e, "value", 7, 50), n = s(e, "min", 3, 0), l = s(e, "max", 3, 100), d = s(e, "step", 3, 1), c = s(e, "disabled", 3, !1), g = s(e, "size", 3, "md"), w = s(e, "variant", 3, "glass"), O = s(e, "blur", 3, "md"), h = s(e, "showValue", 3, !1), L = s(e, "showMarks", 3, !1), N = s(e, "marks", 19, () => []), T = s(e, "animate", 3, !0), y = s(e, "reduceMotion", 3, !1);
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
  ]), G = /* @__PURE__ */ ke(void 0), Z = /* @__PURE__ */ ke(void 0), x = /* @__PURE__ */ ke(!1), B = /* @__PURE__ */ ke(!1);
  const D = `slider-${Math.random().toString(36).substr(2, 9)}`, j = {
    sm: { track: "h-1", thumb: "w-4 h-4", value: "text-xs" },
    md: { track: "h-1.5", thumb: "w-5 h-5", value: "text-sm" },
    lg: { track: "h-2", thumb: "w-6 h-6", value: "text-base" }
  }, P = {
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
  }, H = /* @__PURE__ */ Se(() => (a() - n()) / (l() - n()) * 100), A = V("relative w-full rounded-full cursor-pointer", j[g()].track, P[w()].track, w() === "glass" && F[O()], c() && "opacity-50 cursor-not-allowed"), U = V("absolute top-0 left-0 h-full rounded-full transition-all duration-200", P[w()].fill), X = /* @__PURE__ */ Se(() => V("absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2", "hover:scale-110 active:scale-95", j[g()].thumb, P[w()].thumb, c() && "cursor-not-allowed hover:scale-100 active:scale-100", t(x) && "scale-110", t(B) && "ring-2 ring-blue-400/50"));
  function R(re) {
    if (c()) return;
    let E = a();
    const te = d() || 1, J = (l() - n()) / 10;
    switch (re.key) {
      case "ArrowRight":
      case "ArrowUp":
        re.preventDefault(), E = Math.min(l(), a() + te);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        re.preventDefault(), E = Math.max(n(), a() - te);
        break;
      case "PageUp":
        re.preventDefault(), E = Math.min(l(), a() + J);
        break;
      case "PageDown":
        re.preventDefault(), E = Math.max(n(), a() - J);
        break;
      case "Home":
        re.preventDefault(), E = n();
        break;
      case "End":
        re.preventDefault(), E = l();
        break;
    }
    E !== a() && (a(E), e.onValueChange?.(E));
  }
  function C(re) {
    if (!t(Z) || c()) return;
    const E = t(Z).getBoundingClientRect(), te = re.clientX - E.left, J = Math.max(0, Math.min(100, te / E.width * 100)), Q = n() + J / 100 * (l() - n()), ee = d() ? Math.round(Q / d()) * d() : Q, se = Math.max(n(), Math.min(l(), ee));
    se !== a() && (a(se), e.onValueChange?.(se));
  }
  function k() {
    K(B, !0);
  }
  function M() {
    K(B, !1);
  }
  xt(() => {
    Jt("Slider", "medium");
  });
  var p = Yc(), q = o(p);
  {
    var W = (re) => {
      var E = Gc();
      let te;
      var J = o(E), Q = u(J);
      {
        var ee = (se) => {
          var ne = Vc(), de = o(ne);
          S(() => oe(de, `(${a() ?? ""})`)), i(se, ne);
        };
        b(Q, (se) => {
          h() && se(ee);
        });
      }
      S(
        (se) => {
          ye(E, "id", `slider-label-${D}`), ye(E, "for", D), te = z(E, 1, "block text-sm font-medium text-white svelte-wpw1ph", null, te, se), oe(J, `${e.label ?? ""} `);
        },
        [() => ({ "opacity-50": c() })]
      ), i(re, E);
    };
    b(q, (re) => {
      e.label && re(W);
    });
  }
  var I = u(q, 2);
  Ze(I, () => ({ class: "relative w-full py-2", ...f }), void 0, void 0, "svelte-wpw1ph");
  var _ = o(I);
  _.__mousedown = [Hc, c, x, C], _.__keydown = R;
  var m = o(_);
  let ie;
  var ue = u(m, 2);
  let fe;
  Re(ue, (re, E) => Kt?.(re, E), () => T() && !y() && t(x) ? { scale: 1.1, duration: 100 } : void 0);
  var ve = u(ue, 2);
  {
    var ae = (re) => {
      var E = Ae(), te = we(E);
      We(te, 17, N, vt, (J, Q) => {
        const ee = /* @__PURE__ */ Se(() => (t(Q) - n()) / (l() - n()) * 100);
        var se = Uc();
        let ne;
        S((de) => ne = mt(se, "", ne, de), [() => ({ left: `${t(ee) ?? ""}%` })]), i(J, se);
      }), i(re, E);
    };
    b(ve, (re) => {
      L() && N().length > 0 && re(ae);
    });
  }
  rt(_, (re) => K(Z, re), () => t(Z));
  var Y = u(_, 2);
  {
    var le = (re) => {
      var E = Wc(), te = o(E), J = o(te);
      S(
        (Q) => {
          z(te, 1, Q, "svelte-wpw1ph"), oe(J, a());
        },
        [
          () => $(V("font-medium text-white/80", j[g()].value))
        ]
      ), i(re, E);
    };
    b(Y, (re) => {
      h() && re(le);
    });
  }
  rt(I, (re) => K(G, re), () => t(G)), S(
    (re, E) => {
      ye(_, "id", D), z(_, 1, $(A), "svelte-wpw1ph"), ye(_, "aria-valuemin", n()), ye(_, "aria-valuemax", l()), ye(_, "aria-valuenow", a()), ye(_, "aria-labelledby", e.label ? `slider-label-${D}` : void 0), ye(_, "aria-label", e.label ? void 0 : "Slider"), ye(_, "tabindex", c() ? -1 : 0), z(m, 1, $(U), "svelte-wpw1ph"), ie = mt(m, "", ie, re), z(ue, 1, $(t(X)), "svelte-wpw1ph"), fe = mt(ue, "", fe, E);
    },
    [
      () => ({ width: `${t(H) ?? ""}%` }),
      () => ({
        left: `${t(H) ?? ""}%`,
        transform: "translateX(-50%) translateY(-50%)"
      })
    ]
  ), qt("focus", _, k), qt("blur", _, M), i(r, p), Qe();
}
ft(["mousedown", "keydown"]);
var Kc = /* @__PURE__ */ v("<label> </label>"), Xc = /* @__PURE__ */ v("<p> </p>"), Qc = /* @__PURE__ */ v('<div class="flex flex-col"><!> <!></div>'), Zc = /* @__PURE__ */ v('<div class="flex items-center gap-3"><button><span></span></button> <!></div>');
function c1(r, e) {
  Xe(e, !0);
  let a = s(e, "checked", 7, !1), n = s(e, "disabled", 3, !1), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "blur", 3, "md"), g = s(e, "animate", 3, !0), w = s(e, "liquid", 3, !1), O = s(e, "magnetic", 3, !1), h = s(e, "jelly", 3, !1), L = s(e, "glow", 3, !1), N = s(e, "reduceMotion", 3, !1), T = s(e, "class", 3, ""), y = /* @__PURE__ */ ct(e, [
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
  const G = `switch-${Math.random().toString(36).substr(2, 9)}`, Z = e.label ? `${G}-label` : void 0, x = e.description ? `${G}-description` : void 0, B = {
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
  }, D = {
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
  }, j = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, P = V(
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
    B[l()].track,
    a() ? D[d()].trackChecked : D[d()].track,
    d() === "glass" && j[c()],
    w() && "backdrop-blur-md",
    L() && a() && "shadow-lg shadow-blue-400/30",
    n() && "opacity-50 cursor-not-allowed",
    !n() && "cursor-pointer hover:scale-105",
    h() && !n() && "hover:scale-110 active:scale-95",
    T()
  ), F = V("inline-block rounded-full transition-all duration-200 ease-in-out transform", B[l()].thumb, D[d()].thumb, a() ? B[l()].translate : "translate-x-0.5", !N() && "will-change-transform");
  function H() {
    if (n()) return;
    const M = !a();
    a(M), e.onCheckedChange?.(M);
  }
  function A(M) {
    n() || (M.key === "Enter" || M.key === " ") && (M.preventDefault(), H());
  }
  xt(() => {
    Jt("Switch", "small");
  });
  var U = Zc(), X = o(U);
  Ze(
    X,
    () => ({
      id: G,
      type: "button",
      role: "switch",
      "aria-checked": a(),
      "aria-labelledby": Z,
      "aria-describedby": x,
      "aria-label": e["aria-label"],
      class: P,
      disabled: n(),
      onclick: H,
      onkeydown: A,
      ...y
    }),
    void 0,
    void 0,
    "svelte-ne1gt8"
  );
  var R = o(X);
  rt(X, (M) => K(f, M), () => t(f)), Re(X, (M, p) => Kt?.(M, p), () => g() && !N() ? { scale: 0.95, duration: 100 } : void 0), Re(X, (M, p) => ut?.(M, p), () => O() && !n() && !N() ? { strength: 0.15, distance: 30 } : void 0), Re(X, (M, p) => ut?.(M, p), () => h() && !n() && !N() ? { strength: 0.1 } : void 0);
  var C = u(X, 2);
  {
    var k = (M) => {
      var p = Qc(), q = o(p);
      {
        var W = (m) => {
          var ie = Kc();
          let ue;
          var fe = o(ie);
          S(
            (ve) => {
              ye(ie, "id", Z), ye(ie, "for", G), ue = z(ie, 1, "text-sm font-medium text-white cursor-pointer", null, ue, ve), oe(fe, e.label);
            },
            [() => ({ "opacity-50": n() })]
          ), i(m, ie);
        };
        b(q, (m) => {
          e.label && m(W);
        });
      }
      var I = u(q, 2);
      {
        var _ = (m) => {
          var ie = Xc();
          let ue;
          var fe = o(ie);
          S(
            (ve) => {
              ye(ie, "id", x), ue = z(ie, 1, "text-xs text-white/70", null, ue, ve), oe(fe, e.description);
            },
            [() => ({ "opacity-50": n() })]
          ), i(m, ie);
        };
        b(I, (m) => {
          e.description && m(_);
        });
      }
      i(M, p);
    };
    b(C, (M) => {
      (e.label || e.description) && M(k);
    });
  }
  S(() => z(R, 1, $(F), "svelte-ne1gt8")), i(r, U), Qe();
}
var Jc = (r, e, a) => e(t(a)), $c = (r, e, a) => e(r, t(a)), ev = /* @__PURE__ */ v('<button role="tab"> </button>'), tv = /* @__PURE__ */ v('<div class="svelte-7ddono"><!></div>'), rv = /* @__PURE__ */ v('<div class="svelte-7ddono"><!></div>'), av = /* @__PURE__ */ v('<div><div role="tablist"></div> <div role="tabpanel" tabindex="0"><!></div></div>');
function v1(r, e) {
  Xe(e, !0);
  let a = s(e, "tabs", 19, () => []), n = s(e, "activeTab", 23, () => a()[0]?.id || ""), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), c = s(e, "orientation", 3, "horizontal"), g = s(e, "blur", 3, "md"), w = s(e, "animate", 3, !0), O = s(e, "reduceMotion", 3, !1), h = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
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
  ]), N, T = /* @__PURE__ */ ke(ot(a().findIndex((I) => I.id === n())));
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
  }, Z = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, x = c() === "horizontal", D = V("flex p-1", "tab-radius-md", x ? "flex-row" : "flex-col min-w-max", G[l()].list, (l() === "glass" || l() === "bubbleTea") && Z[g()]), P = V("relative flex-1 transition-all duration-200", "tab-radius-sm", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium whitespace-nowrap cursor-pointer", f[d()], G[l()].tab), F = V(P, G[l()].activeTab), H = V("mt-4 focus:outline-none", x ? "" : "ml-4");
  function A(I) {
    I.disabled || (n(I.id), K(T, a().findIndex((_) => _.id === I.id), !0), e.onTabChange?.(I.id));
  }
  function U(I, _) {
    if (_.disabled) return;
    const m = a().filter((ue) => !ue.disabled), ie = m.findIndex((ue) => ue.id === n());
    switch (I.key) {
      case "Enter":
      case " ":
        I.preventDefault(), A(_);
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (x ? I.key === "ArrowRight" : I.key === "ArrowDown") {
          I.preventDefault();
          const ve = (ie + 1) % m.length, ae = m[ve];
          A(ae), X(ae.id);
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        if (x ? I.key === "ArrowLeft" : I.key === "ArrowUp") {
          I.preventDefault();
          const ve = ie === 0 ? m.length - 1 : ie - 1, ae = m[ve];
          A(ae), X(ae.id);
        }
        break;
      case "Home":
        I.preventDefault();
        const ue = m[0];
        A(ue), X(ue.id);
        break;
      case "End":
        I.preventDefault();
        const fe = m[m.length - 1];
        A(fe), X(fe.id);
        break;
    }
  }
  function X(I) {
    N?.querySelector(`[data-tab-id="${I}"]`)?.focus();
  }
  const R = /* @__PURE__ */ Se(() => a().find((I) => I.id === n()));
  xt(() => {
    Jt("Tabs", "medium");
  });
  var C = av();
  Ze(C, (I) => ({ class: I, ...L }), [() => V("w-full", x ? "" : "flex", h())], void 0, "svelte-7ddono");
  var k = o(C);
  We(k, 21, a, vt, (I, _) => {
    var m = ev();
    let ie;
    m.__click = [Jc, A, _], m.__keydown = [$c, U, _];
    var ue = o(m);
    Re(m, (fe, ve) => kt?.(fe, ve), () => w() && !O() && t(_).id === n() ? { blur: g(), opacity: "medium" } : void 0), S(
      (fe) => {
        ye(m, "id", `${y}-tab-${t(_).id}`), ie = z(m, 1, $(t(_).id === n() ? F : P), "svelte-7ddono", ie, fe), ye(m, "tabindex", t(_).id === n() ? 0 : -1), ye(m, "aria-selected", t(_).id === n()), ye(m, "aria-controls", `${y}-tabpanel-${t(_).id}`), ye(m, "aria-disabled", t(_).disabled), ye(m, "data-tab-id", t(_).id), m.disabled = t(_).disabled, oe(ue, t(_).label);
      },
      [
        () => ({
          "opacity-50": t(_).disabled,
          "cursor-not-allowed": t(_).disabled
        })
      ]
    ), i(I, m);
  }), rt(k, (I) => N = I, () => N);
  var M = u(k, 2), p = o(M);
  {
    var q = (I) => {
      var _ = tv(), m = o(_);
      lt(m, () => t(R).content), tt(1, _, () => gt, () => ({
        direction: "up",
        distance: 10,
        duration: w() && !O() ? 200 : 0
      })), tt(2, _, () => gt, () => ({
        direction: "down",
        distance: 10,
        duration: w() && !O() ? 150 : 0
      })), i(I, _);
    }, W = (I) => {
      var _ = Ae(), m = we(_);
      {
        var ie = (ue) => {
          var fe = rv(), ve = o(fe);
          lt(ve, () => e.children, n), tt(1, fe, () => gt, () => ({
            direction: "up",
            distance: 10,
            duration: w() && !O() ? 200 : 0
          })), tt(2, fe, () => gt, () => ({
            direction: "down",
            distance: 10,
            duration: w() && !O() ? 150 : 0
          })), i(ue, fe);
        };
        b(
          m,
          (ue) => {
            e.children && ue(ie);
          },
          !0
        );
      }
      i(I, _);
    };
    b(p, (I) => {
      t(R)?.content ? I(q) : I(W, !1);
    });
  }
  S(() => {
    z(k, 1, $(D), "svelte-7ddono"), ye(k, "aria-orientation", c()), ye(k, "aria-label", e["aria-label"]), z(M, 1, $(H), "svelte-7ddono"), ye(M, "id", `${y}-tabpanel-${n()}`), ye(M, "aria-labelledby", `${y}-tab-${n()}`);
  }), i(r, C), Qe();
}
ft(["click", "keydown"]);
var nv = /* @__PURE__ */ v("<textarea></textarea>");
function u1(r, e) {
  Xe(e, !0);
  let a = s(e, "value", 7, ""), n = s(e, "placeholder", 3, ""), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), c = s(e, "variant", 3, "glass"), g = s(e, "blur", 3, "md"), w = s(e, "rows", 3, 4), O = s(e, "resize", 3, "vertical"), h = s(e, "autoResize", 3, !1), L = s(e, "maxHeight", 3, 300), N = s(e, "minHeight", 3, 80), T = s(e, "animate", 3, !0), y = s(e, "reduceMotion", 3, !1), f = s(e, "class", 3, ""), G = /* @__PURE__ */ ct(e, [
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
  ]), Z = /* @__PURE__ */ ke(void 0), x = /* @__PURE__ */ ke(!1);
  const B = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base"
  }, D = {
    default: "bg-white/5 border border-white/10 text-white placeholder-white/50",
    glass: "glass-subtle border border-white/20 text-white placeholder-white/40",
    terminal: "terminal text-green-300 placeholder-green-300/50"
  }, j = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, P = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y"
  }, F = /* @__PURE__ */ Se(() => V("w-full rounded-brand-md transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50", "placeholder:transition-colors placeholder:duration-200", B[d()], D[c()], c() === "glass" && j[g()], P[O()], l() && "opacity-50 cursor-not-allowed", t(x) && c() === "glass" && "glass-medium", f()));
  function H(k) {
    const M = k.target;
    a(M.value), e.onValueChange?.(M.value), h() && R();
  }
  function A() {
    K(x, !0);
  }
  function U() {
    K(x, !1);
  }
  function X(k) {
    (k.ctrlKey || k.metaKey) && k.key === "a" || (k.ctrlKey || k.metaKey) && k.key === "z" || (k.ctrlKey || k.metaKey) && k.key === "y" || (k.key, k.key === "Escape" && t(Z).blur());
  }
  function R() {
    if (!t(Z) || !h()) return;
    t(Z).style.height = "auto";
    const k = t(Z).scrollHeight, M = Math.min(Math.max(k, N()), L());
    t(Z).style.height = `${M}px`;
  }
  xt(() => {
    h() && t(Z) && R();
  }), xt(() => {
    Jt("Textarea", "medium");
  });
  var C = nv();
  Ze(
    C,
    (k) => ({
      class: t(F),
      placeholder: n(),
      disabled: l(),
      rows: w(),
      cols: e.cols,
      "aria-label": G["aria-label"] || n(),
      oninput: H,
      onfocus: A,
      onblur: U,
      onkeydown: X,
      ...G,
      [yr]: k
    }),
    [
      () => ({
        "min-height": h() ? `${N()}px` : void 0,
        "max-height": h() ? `${L()}px` : void 0
      })
    ],
    void 0,
    "svelte-16ael9g"
  ), rt(C, (k) => K(Z, k), () => t(Z)), xr(() => nr(C, a)), Re(C, (k, M) => kt?.(k, M), () => T() && !y() && t(x) ? { blur: g(), opacity: "medium" } : void 0), i(r, C), Qe();
}
var iv = (r) => vr.set(r.currentTarget.value), ov = /* @__PURE__ */ v('<div class="space-y-2 svelte-1erodky"><label for="theme-select" class="block text-sm font-medium text-text svelte-1erodky">Theme Preference</label> <select id="theme-select"><option class="svelte-1erodky">Auto (Follow System)</option><option class="svelte-1erodky">Terminal (Dark)</option><option class="svelte-1erodky">Bubble Tea (Light)</option></select></div>'), lv = () => vr.setAuto(), sv = () => vr.setTerminal(), dv = () => vr.setBubbleTea(), cv = /* @__PURE__ */ v('<div class="flex rounded-lg overflow-hidden border border-border/30 svelte-1erodky"><button>Auto</button> <button>Terminal</button> <button>Bubble Tea</button></div>'), vv = () => vr.setAuto(), uv = () => vr.setTerminal(), fv = () => vr.setBubbleTea(), bv = /* @__PURE__ */ v('<div class="flex flex-wrap gap-2 svelte-1erodky"><button>🔄 Auto</button> <button>💻 Terminal</button> <button>🧋 Bubble Tea</button></div>'), gv = /* @__PURE__ */ v('<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20 svelte-1erodky"><h4 class="font-medium text-text mb-1 svelte-1erodky"> </h4> <p class="text-sm text-text/70 svelte-1erodky"> </p></div>'), hv = /* @__PURE__ */ v('<span class="svelte-1erodky"> </span>'), mv = /* @__PURE__ */ v('<span class="svelte-1erodky"> </span>'), _v = /* @__PURE__ */ v('<div class="mt-2 flex items-center gap-2 text-xs text-text/60 svelte-1erodky"><div></div> <!></div>'), xv = /* @__PURE__ */ v("<div><!> <!> <!></div>");
function f1(r, e) {
  Xe(e, !0);
  const [a, n] = Wi(), l = () => Ui(Xi, "$themeConfig", a), d = s(e, "variant", 3, "pills"), c = s(e, "showDescription", 3, !0), g = s(e, "showSystemStatus", 3, !0), w = s(e, "size", 3, "md"), O = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "showDescription",
    "showSystemStatus",
    "size",
    "class"
  ]), L = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-3"
  }, N = (P, F) => {
    const H = P === F;
    return d() === "pills" ? V(
      "px-3 py-2 rounded-lg font-medium transition-all duration-200",
      "border border-transparent cursor-pointer",
      H ? "bg-primary text-white border-primary shadow-lg" : "bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30",
      L[w()]
    ) : d() === "toggle" ? V(
      "flex-1 px-3 py-2 font-medium transition-all duration-200",
      "border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg",
      H ? "bg-primary text-white shadow-inner" : "bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text",
      L[w()]
    ) : "";
  }, T = /* @__PURE__ */ Se(() => l() ? Os(l().userTheme, l().resolvedTheme) : null);
  var y = xv();
  Ze(y, (P) => ({ class: P, ...h }), [() => V("theme-selector", O())], void 0, "svelte-1erodky");
  var f = o(y);
  {
    var G = (P) => {
      var F = ov(), H = u(o(F), 2);
      H.__change = [iv];
      var A = o(H);
      A.value = A.__value = "auto";
      var U = u(A);
      U.value = U.__value = "terminal";
      var X = u(U);
      X.value = X.__value = "bubbleTea";
      var R;
      Oi(H), S(
        (C) => {
          z(H, 1, C, "svelte-1erodky"), R !== (R = l()?.userTheme || "auto") && (H.value = (H.__value = l()?.userTheme || "auto") ?? "", _a(H, l()?.userTheme || "auto"));
        },
        [
          () => $(V("w-full border border-border/30 rounded-lg bg-surface text-text", "focus:ring-2 focus:ring-primary focus:border-primary", L[w()]))
        ]
      ), i(P, F);
    }, Z = (P) => {
      var F = Ae(), H = we(F);
      {
        var A = (X) => {
          var R = cv(), C = o(R);
          C.__click = [lv];
          var k = u(C, 2);
          k.__click = [sv];
          var M = u(k, 2);
          M.__click = [dv], S(
            (p, q, W) => {
              z(C, 1, p, "svelte-1erodky"), z(k, 1, q, "svelte-1erodky"), z(M, 1, W, "svelte-1erodky");
            },
            [
              () => $(N(l()?.userTheme || "auto", "auto")),
              () => $(N(l()?.userTheme || "auto", "terminal")),
              () => $(N(l()?.userTheme || "auto", "bubbleTea"))
            ]
          ), i(X, R);
        }, U = (X) => {
          var R = Ae(), C = we(R);
          {
            var k = (M) => {
              var p = bv(), q = o(p);
              q.__click = [vv];
              var W = u(q, 2);
              W.__click = [uv];
              var I = u(W, 2);
              I.__click = [fv], S(
                (_, m, ie) => {
                  z(q, 1, _, "svelte-1erodky"), z(W, 1, m, "svelte-1erodky"), z(I, 1, ie, "svelte-1erodky");
                },
                [
                  () => $(N(l()?.userTheme || "auto", "auto")),
                  () => $(N(l()?.userTheme || "auto", "terminal")),
                  () => $(N(l()?.userTheme || "auto", "bubbleTea"))
                ]
              ), i(M, p);
            };
            b(
              C,
              (M) => {
                d() === "pills" && M(k);
              },
              !0
            );
          }
          i(X, R);
        };
        b(
          H,
          (X) => {
            d() === "toggle" ? X(A) : X(U, !1);
          },
          !0
        );
      }
      i(P, F);
    };
    b(f, (P) => {
      d() === "dropdown" ? P(G) : P(Z, !1);
    });
  }
  var x = u(f, 2);
  {
    var B = (P) => {
      var F = gv(), H = o(F), A = o(H), U = u(H, 2), X = o(U);
      S(() => {
        oe(A, t(T).displayName), oe(X, t(T).description);
      }), i(P, F);
    };
    b(x, (P) => {
      c() && t(T) && P(B);
    });
  }
  var D = u(x, 2);
  {
    var j = (P) => {
      var F = _v(), H = o(F), A = u(H, 2);
      {
        var U = (R) => {
          var C = hv(), k = o(C);
          S(() => oe(k, `Following system: ${l().resolvedTheme ?? ""}`)), i(R, C);
        }, X = (R) => {
          var C = mv(), k = o(C);
          S(() => oe(k, `Manual override: ${l().userTheme ?? ""}`)), i(R, C);
        };
        b(A, (R) => {
          Fn(l().userTheme) ? R(U) : R(X, !1);
        });
      }
      S((R) => z(H, 1, R, "svelte-1erodky"), [
        () => $(V("w-2 h-2 rounded-full", Fn(l().userTheme) ? "bg-green-400" : "bg-orange-400"))
      ]), i(P, F);
    };
    b(D, (P) => {
      g() && l() && P(j);
    });
  }
  i(r, y), Qe(), n();
}
ft(["change", "click"]);
function pv(r, e, a) {
  e.action?.onClick(), a();
}
var wv = /* @__PURE__ */ v('<h4 class="font-semibold text-sm text-white mb-1 svelte-4z22bx"> </h4>'), yv = /* @__PURE__ */ v('<p class="text-sm text-white/80 svelte-4z22bx"> </p>'), kv = /* @__PURE__ */ v('<div class="text-sm text-white/80 svelte-4z22bx"><!></div>'), Cv = /* @__PURE__ */ v('<button class="mt-2 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:underline transition-colors duration-150 svelte-4z22bx"> </button>'), Ev = /* @__PURE__ */ v('<button class="flex-shrink-0 text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all duration-150 svelte-4z22bx" aria-label="Close notification"><svg class="w-5 h-5 svelte-4z22bx" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class="svelte-4z22bx"></path></svg></button>'), Sv = /* @__PURE__ */ v('<div><div class="flex-shrink-0 text-lg svelte-4z22bx" aria-hidden="true"> </div> <div class="flex-1 min-w-0 svelte-4z22bx"><!> <!> <!></div> <!></div>');
function b1(r, e) {
  Xe(e, !0);
  let a = s(e, "open", 7, !1), n = s(e, "type", 3, "info"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "top-right"), c = s(e, "blur", 3, "md"), g = s(e, "duration", 3, 5e3), w = s(e, "closable", 3, !0), O = s(e, "animate", 3, !0), h = s(e, "reduceMotion", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  }, Z = {
    default: "bg-white/5 border border-white/10",
    glass: "glass-subtle border",
    terminal: "terminal"
  }, x = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = V("fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg", "flex items-start gap-3 transition-all duration-300", G[d()], Z[l()], l() === "glass" && x[c()], f[n()].colors, L());
  function D() {
    a(!1), e.onOpenChange?.(!1), y && (clearTimeout(y), y = null);
  }
  function j(A) {
    A.key === "Escape" && w() && (A.preventDefault(), D());
  }
  xt(() => (a() && g() !== null && g() > 0 && (y = setTimeout(
    () => {
      D();
    },
    g()
  )), () => {
    y && (clearTimeout(y), y = null);
  })), xt(() => {
    if (a())
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }), xt(() => {
    Jt("Toast", "small");
  });
  var P = Ae(), F = we(P);
  {
    var H = (A) => {
      var U = Sv();
      Ze(
        U,
        () => ({
          class: B,
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true",
          tabindex: "-1",
          ...N
        }),
        void 0,
        void 0,
        "svelte-4z22bx"
      );
      var X = o(U), R = o(X), C = u(X, 2), k = o(C);
      {
        var M = (ue) => {
          var fe = wv(), ve = o(fe);
          S(() => oe(ve, e.title)), i(ue, fe);
        };
        b(k, (ue) => {
          e.title && ue(M);
        });
      }
      var p = u(k, 2);
      {
        var q = (ue) => {
          var fe = yv(), ve = o(fe);
          S(() => oe(ve, e.description)), i(ue, fe);
        }, W = (ue) => {
          var fe = Ae(), ve = we(fe);
          {
            var ae = (Y) => {
              var le = kv(), re = o(le);
              lt(re, () => e.children), i(Y, le);
            };
            b(
              ve,
              (Y) => {
                e.children && Y(ae);
              },
              !0
            );
          }
          i(ue, fe);
        };
        b(p, (ue) => {
          e.description ? ue(q) : ue(W, !1);
        });
      }
      var I = u(p, 2);
      {
        var _ = (ue) => {
          var fe = Cv();
          fe.__click = [pv, e, D];
          var ve = o(fe);
          Re(fe, (ae, Y) => Kt?.(ae, Y), () => O() && !h() ? { scale: 0.98, duration: 100 } : void 0), S(() => oe(ve, e.action.label)), i(ue, fe);
        };
        b(I, (ue) => {
          e.action && ue(_);
        });
      }
      var m = u(C, 2);
      {
        var ie = (ue) => {
          var fe = Ev();
          fe.__click = D, Re(fe, (ve, ae) => Kt?.(ve, ae), () => O() && !h() ? { scale: 0.9, duration: 100 } : void 0), i(ue, fe);
        };
        b(m, (ue) => {
          w() && ue(ie);
        });
      }
      rt(U, (ue) => K(T, ue), () => t(T)), S(() => oe(R, f[n()].icon)), tt(1, U, () => gt, () => ({
        direction: d().includes("top") ? "down" : "up",
        distance: 20,
        duration: O() && !h() ? 300 : 0
      })), tt(2, U, () => gt, () => ({
        direction: d().includes("top") ? "up" : "down",
        distance: 20,
        duration: O() && !h() ? 200 : 0
      })), i(A, U);
    };
    b(F, (A) => {
      a() && A(H);
    });
  }
  i(r, P), Qe();
}
ft(["click"]);
var Tv = /* @__PURE__ */ v("<div></div>"), Mv = /* @__PURE__ */ v('<div role="tooltip"> <!></div>'), Av = /* @__PURE__ */ v("<div><!> <!></div>");
function g1(r, e) {
  Xe(e, !0);
  const a = s(e, "position", 3, "top"), n = s(e, "variant", 3, "glass"), l = s(e, "delay", 3, 500), d = s(e, "offset", 3, 8), c = s(e, "arrow", 3, !0), g = s(e, "animated", 3, !0), w = s(e, "class", 3, ""), O = /* @__PURE__ */ ct(e, [
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
  let h = /* @__PURE__ */ ke(!1), L = /* @__PURE__ */ ke(void 0), N = /* @__PURE__ */ ke(void 0), T = /* @__PURE__ */ ke(ot({ x: 0, y: 0 })), y = /* @__PURE__ */ ke(ot(a())), f;
  const G = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
    terminal: "bg-gray-900/95 border border-green-400/40 text-green-400",
    liquid: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white",
    dark: "bg-gray-900/95 border border-white/10 text-white"
  }, Z = () => {
    if (!t(L) || !t(N)) return;
    const X = t(N).getBoundingClientRect(), R = t(L).getBoundingClientRect(), C = window.innerWidth, k = window.innerHeight;
    let M = 0, p = 0, q = a();
    switch (a()) {
      case "top":
        M = X.left + X.width / 2 - R.width / 2, p = X.top - R.height - d();
        break;
      case "bottom":
        M = X.left + X.width / 2 - R.width / 2, p = X.bottom + d();
        break;
      case "left":
        M = X.left - R.width - d(), p = X.top + X.height / 2 - R.height / 2;
        break;
      case "right":
        M = X.right + d(), p = X.top + X.height / 2 - R.height / 2;
        break;
    }
    a() === "top" && p < 0 ? (p = X.bottom + d(), q = "bottom") : a() === "bottom" && p + R.height > k ? (p = X.top - R.height - d(), q = "top") : a() === "left" && M < 0 ? (M = X.right + d(), q = "right") : a() === "right" && M + R.width > C && (M = X.left - R.width - d(), q = "left"), M = Math.max(8, Math.min(M, C - R.width - 8)), p = Math.max(8, Math.min(p, k - R.height - 8)), K(T, { x: M, y: p }, !0), K(y, q, !0);
  }, x = () => {
    f = setTimeout(
      () => {
        K(h, !0), requestAnimationFrame(Z);
      },
      l()
    );
  }, B = () => {
    clearTimeout(f), K(h, !1);
  };
  yt(() => () => {
    clearTimeout(f);
  });
  const D = {
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
    bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full",
    right: "left-0 top-1/2 -translate-y-1/2 -translate-x-full"
  }, j = {
    top: "border-l-transparent border-r-transparent border-b-transparent",
    bottom: "border-l-transparent border-r-transparent border-t-transparent",
    left: "border-t-transparent border-b-transparent border-r-transparent",
    right: "border-t-transparent border-b-transparent border-l-transparent"
  };
  var P = Av();
  Ze(P, () => ({
    class: "relative inline-block",
    onmouseenter: x,
    onmouseleave: B,
    onfocus: x,
    onblur: B,
    role: "tooltip",
    ...O
  }));
  var F = o(P);
  {
    var H = (X) => {
      var R = Ae(), C = we(R);
      lt(C, () => e.children), i(X, R);
    };
    b(F, (X) => {
      e.children && X(H);
    });
  }
  var A = u(F, 2);
  {
    var U = (X) => {
      var R = Mv(), C = o(R), k = u(C);
      {
        var M = (p) => {
          var q = Tv();
          S((W) => z(q, 1, W), [
            () => $(V("absolute w-0 h-0 border-4", D[t(y)], j[t(y)], n() === "glass" && "border-white/10", n() === "terminal" && "border-green-400/40", n() === "liquid" && "border-white/30", n() === "dark" && "border-white/10"))
          ]), i(p, q);
        };
        b(k, (p) => {
          c() && p(M);
        });
      }
      rt(R, (p) => K(L, p), () => t(L)), S(
        (p) => {
          z(R, 1, p), mt(R, `left: ${t(T).x ?? ""}px; top: ${t(T).y ?? ""}px;`), oe(C, `${e.text ?? ""} `);
        },
        [
          () => $(V("fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl", G[n()], g() && "transition-all duration-200", w()))
        ]
      ), tt(3, R, () => gt, () => ({ duration: 200 })), i(X, R);
    };
    b(A, (X) => {
      t(h) && X(U);
    });
  }
  rt(P, (X) => K(N, X), () => t(N)), i(r, P), Qe();
}
function Iv(r, e) {
  e(/* @__PURE__ */ new Date());
}
var Pv = (
  // Initialize from value prop
  // Click outside to close
  (r, e) => e(-1)
), Lv = (r, e) => e(1), zv = /* @__PURE__ */ v('<div role="columnheader"> </div>'), Dv = (r, e, a) => e(t(a)), Rv = /* @__PURE__ */ v('<button role="gridcell"> </button>'), Nv = /* @__PURE__ */ v('<div class="p-2"></div>'), Ov = /* @__PURE__ */ v(`<div><button aria-label="Select today's date"> </button></div>`), jv = /* @__PURE__ */ v('<div id="date-picker-calendar" role="application" aria-label="Calendar date picker"><div class="flex items-center justify-between mb-4"><button aria-label="Previous month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 aria-live="polite"> </h3> <button aria-label="Next month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2" role="row"></div> <div class="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar dates"></div> <!></div>'), qv = /* @__PURE__ */ v('<div class="relative"><input/> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <!> <div aria-live="polite" aria-atomic="true" class="sr-only"><!></div></div>');
function h1(r, e) {
  Xe(e, !0);
  const a = s(e, "value", 3, null), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "error", 3, !1), c = s(e, "disabled", 3, !1), g = s(e, "placeholder", 3, "Select date..."), w = s(e, "format", 3, "MM/dd/yyyy"), O = s(e, "closeOnSelect", 3, !0), h = s(e, "showToday", 3, !0), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  ]), T = At();
  let y, f = /* @__PURE__ */ ke(void 0), G = /* @__PURE__ */ ke(!1), Z = /* @__PURE__ */ ke("");
  ot(/* @__PURE__ */ new Date());
  let x = /* @__PURE__ */ ke(null), B = /* @__PURE__ */ ke(null), D = /* @__PURE__ */ ke(ot((/* @__PURE__ */ new Date()).getFullYear())), j = /* @__PURE__ */ ke(ot((/* @__PURE__ */ new Date()).getMonth()));
  const P = {
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
      input: `bg-black/80 border-${ze.terminal.green} focus:border-${ze.terminal.matrix} text-${ze.terminal.green}`,
      calendar: `bg-black/95 border-${ze.terminal.green}`,
      header: `text-${ze.terminal.green}`,
      dayButton: `text-${ze.terminal.green}/70 hover:bg-${ze.terminal.green}/10 hover:text-${ze.terminal.green}`,
      selectedDay: `bg-${ze.terminal.green} text-black hover:bg-${ze.terminal.matrix}`,
      todayDay: `bg-${ze.terminal.green}/20 text-${ze.terminal.matrix}`
    }
  }, F = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-4 text-base"
  }, H = /* @__PURE__ */ Se(() => P[n()]), A = /* @__PURE__ */ Se(() => F[l()]);
  function U(Q) {
    if (!Q) return "";
    const ee = Q.getDate().toString().padStart(2, "0"), se = (Q.getMonth() + 1).toString().padStart(2, "0"), ne = Q.getFullYear();
    switch (w()) {
      case "dd/MM/yyyy":
        return `${ee}/${se}/${ne}`;
      case "yyyy-MM-dd":
        return `${ne}-${se}-${ee}`;
      default:
        return `${se}/${ee}/${ne}`;
    }
  }
  function X(Q) {
    if (!Q) return null;
    const ee = Q.split(/[/-]/);
    if (ee.length !== 3) return null;
    let se, ne, de;
    switch (w()) {
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
    return R(Ce) ? Ce : null;
  }
  function R(Q) {
    return !(!(Q instanceof Date) || isNaN(Q.getTime()) || e.minDate && Q < e.minDate || e.maxDate && Q > e.maxDate);
  }
  function C() {
    const Q = new Date(t(D), t(j), 1);
    new Date(t(D), t(j) + 1, 0);
    const ee = new Date(Q);
    ee.setDate(ee.getDate() - Q.getDay());
    const se = [], ne = new Date(ee);
    for (let de = 0; de < 42; de++)
      ne.getMonth() === t(j) ? se.push(new Date(ne)) : se.push(null), ne.setDate(ne.getDate() + 1);
    return se;
  }
  function k(Q) {
    const ee = /* @__PURE__ */ new Date();
    return Q.toDateString() === ee.toDateString();
  }
  function M(Q, ee) {
    return !Q || !ee ? !1 : Q.toDateString() === ee.toDateString();
  }
  function p() {
    c() || (K(G, !t(G)), t(G) ? T("open") : T("close"));
  }
  function q(Q) {
    const ee = Q.target;
    K(Z, ee.value, !0);
    const se = X(t(Z));
    se && (K(x, se, !0), K(D, se.getFullYear(), !0), K(j, se.getMonth(), !0), T("change", se));
  }
  function W(Q) {
    R(Q) && (K(x, Q, !0), K(Z, U(Q), !0), T("change", Q), O() && (K(G, !1), T("close")));
  }
  function I(Q) {
    const ee = t(j) + Q;
    ee < 0 ? (K(j, 11), K(D, t(D) - 1)) : ee > 11 ? (K(j, 0), K(D, t(D) + 1)) : K(j, ee);
  }
  function _(Q) {
    if (t(G))
      switch (Q.key) {
        case "Escape":
          K(G, !1), T("close");
          break;
        case "ArrowLeft":
          if (Q.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() - 1), K(B, ee, !0);
          }
          break;
        case "ArrowRight":
          if (Q.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() + 1), K(B, ee, !0);
          }
          break;
        case "ArrowUp":
          if (Q.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() - 7), K(B, ee, !0);
          }
          break;
        case "ArrowDown":
          if (Q.preventDefault(), t(B)) {
            const ee = new Date(t(B));
            ee.setDate(ee.getDate() + 7), K(B, ee, !0);
          }
          break;
        case "Enter":
          Q.preventDefault(), t(B) && W(t(B));
          break;
      }
  }
  xt(() => {
    if (a()) {
      const Q = a() instanceof Date ? a() : X(a().toString());
      Q && (K(x, Q, !0), K(Z, U(Q), !0), K(D, Q.getFullYear(), !0), K(j, Q.getMonth(), !0));
    }
  }), yt(() => {
    function Q(ee) {
      t(G) && t(f) && !t(f).contains(ee.target) && y && !y.contains(ee.target) && (K(G, !1), T("close"));
    }
    return document.addEventListener("click", Q), () => document.removeEventListener("click", Q);
  });
  const m = [
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
  ], ie = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ue = /* @__PURE__ */ Se(() => V("relative w-full rounded-lg border transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-opacity-50", "font-mono", t(H).input, t(A), d() && "border-red-500 focus:border-red-500", c() && "opacity-50 cursor-not-allowed", L()));
  var fe = qv(), ve = o(fe);
  Ze(ve, () => ({
    onclick: p,
    oninput: q,
    onkeydown: _,
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
    ...N
  })), rt(ve, (Q) => y = Q, () => y), xr(() => nr(ve, () => t(Z), (Q) => K(Z, Q))), Re(ve, (Q, ee) => kt?.(Q, ee), () => ({ blur: "sm", opacity: "light" })), Re(ve, (Q, ee) => ut?.(Q, ee), () => ({ enabled: !c(), strength: 0.1 }));
  var ae = u(ve, 2), Y = o(ae), le = u(ae, 2);
  {
    var re = (Q) => {
      var ee = jv(), se = o(ee), ne = o(se);
      ne.__click = [Pv, I], Re(ne, (Ne, Oe) => ut?.(Ne, Oe), () => ({ strength: 0.2 }));
      var de = u(ne, 2), Ce = o(de), be = u(de, 2);
      be.__click = [Lv, I], Re(be, (Ne, Oe) => ut?.(Ne, Oe), () => ({ strength: 0.2 }));
      var ce = u(se, 2);
      We(ce, 21, () => ie, vt, (Ne, Oe) => {
        var Me = zv(), xe = o(Me);
        S(() => {
          z(Me, 1, `p-2 text-center text-xs font-semibold ${t(H).header ?? ""} font-mono`), oe(xe, t(Oe));
        }), i(Ne, Me);
      });
      var me = u(ce, 2);
      We(me, 21, C, vt, (Ne, Oe) => {
        var Me = Ae(), xe = we(Me);
        {
          var Le = (he) => {
            const pe = /* @__PURE__ */ Se(() => M(t(Oe), t(x))), Ie = /* @__PURE__ */ Se(() => k(t(Oe))), ge = /* @__PURE__ */ Se(() => R(t(Oe)));
            var _e = Rv();
            _e.__click = [Dv, W, Oe];
            var De = o(_e);
            Re(_e, (Te, qe) => ut?.(Te, qe), () => ({ enabled: t(ge), strength: 0.15 })), S(
              (Te, qe, Fe) => {
                _e.disabled = !t(ge), z(_e, 1, `p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       ${(t(pe) ? t(H).selectedDay : t(Ie) ? t(H).todayDay : t(H).dayButton) ?? ""}
							       ${t(ge) ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`), ye(_e, "aria-label", Te), ye(_e, "aria-selected", t(pe)), ye(_e, "aria-disabled", !t(ge)), ye(_e, "aria-current", t(Ie) ? "date" : void 0), ye(_e, "tabindex", qe), oe(De, Fe);
              },
              [
                () => U(t(Oe)),
                () => t(pe) || M(t(Oe), t(B)) ? 0 : -1,
                () => t(Oe).getDate()
              ]
            ), i(he, _e);
          }, je = (he) => {
            var pe = Nv();
            i(he, pe);
          };
          b(xe, (he) => {
            t(Oe) ? he(Le) : he(je, !1);
          });
        }
        i(Ne, Me);
      });
      var Ee = u(me, 2);
      {
        var Be = (Ne) => {
          var Oe = Ov(), Me = o(Oe);
          Me.__click = [Iv, W];
          var xe = o(Me);
          Re(Me, (Le, je) => ut?.(Le, je), () => ({ strength: 0.1 })), S(
            (Le) => {
              z(Oe, 1, `mt-4 pt-4 border-t ${t(H).calendar ?? ""}`), z(Me, 1, `w-full py-2 px-4 rounded-md ${t(H).dayButton ?? ""} transition-colors font-mono text-sm`), oe(xe, `Today: ${Le ?? ""}`);
            },
            [() => U(/* @__PURE__ */ new Date())]
          ), i(Ne, Oe);
        };
        b(Ee, (Ne) => {
          h() && Ne(Be);
        });
      }
      rt(ee, (Ne) => K(f, Ne), () => t(f)), Re(ee, (Ne, Oe) => kt?.(Ne, Oe), () => ({ blur: "lg", opacity: "medium" })), S(() => {
        z(ee, 1, `absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 ${t(H).calendar ?? ""}`), z(ne, 1, `p-2 rounded-md ${t(H).dayButton ?? ""} transition-colors`), z(de, 1, `text-lg font-semibold ${t(H).header ?? ""} font-mono`), oe(Ce, `${m[t(j)] ?? ""}
					${t(D) ?? ""}`), z(be, 1, `p-2 rounded-md ${t(H).dayButton ?? ""} transition-colors`);
      }), tt(1, ee, () => gt, () => ({ direction: "up", duration: 200 })), i(Q, ee);
    };
    b(le, (Q) => {
      t(G) && Q(re);
    });
  }
  var E = u(le, 2), te = o(E);
  {
    var J = (Q) => {
      var ee = Et();
      S((se) => oe(ee, `Selected date: ${se ?? ""}`), [() => U(t(x))]), i(Q, ee);
    };
    b(te, (Q) => {
      t(x) && Q(J);
    });
  }
  S(() => z(Y, 0, `w-5 h-5 ${t(H).header ?? ""}`)), i(r, fe), Qe();
}
ft(["click"]);
var Bv = (r, e) => (r.key === "Enter" || r.key === " ") && e(), Fv = /* @__PURE__ */ v('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-lg font-medium">Drop files here</p></div>'), Hv = /* @__PURE__ */ v('<p class="text-xs text-gray-500 mt-1"> </p>'), Vv = /* @__PURE__ */ v(`<button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium">Select Files</button>`), Gv = /* @__PURE__ */ v('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <div class="mb-2"><p class="text-lg font-medium"> </p> <p class="text-sm text-gray-400 mt-1"> </p> <!></div> <!></div>'), Uv = /* @__PURE__ */ v('<img class="w-12 h-12 object-cover rounded border"/>'), Wv = /* @__PURE__ */ v('<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>'), Yv = /* @__PURE__ */ ar('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), Kv = (r, e, a) => e(t(a).id), Xv = /* @__PURE__ */ v('<button class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" title="Retry upload">Retry</button> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>', 1), Qv = /* @__PURE__ */ v('<div class="w-5 h-5"><svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Zv = (r, e, a) => e(t(a).id), Jv = /* @__PURE__ */ v('<p class="text-xs text-red-400 mt-1"> </p>'), $v = /* @__PURE__ */ v('<div class="mt-2"><div class="w-full bg-gray-700 rounded-full h-2"><div></div></div> <p class="text-xs text-gray-400 mt-1"> </p></div>'), eu = /* @__PURE__ */ v('<div><div class="flex items-start gap-3"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-sm font-medium truncate pr-2"> </h4> <div class="flex items-center gap-2"><!> <button aria-label="Remove file"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-1"><p class="text-xs text-gray-400"> </p> <!></div> <!></div></div></div>'), tu = /* @__PURE__ */ v('<div class="mt-4 space-y-3"></div>'), ru = /* @__PURE__ */ v('<input type="file" class="hidden"/> <div role="button" aria-label="Upload files"><!></div> <!>', 1);
function m1(r, e) {
  Xe(e, !0);
  const a = s(e, "multiple", 3, !1), n = s(e, "accept", 3, "*/*"), l = s(
    e,
    "maxSize",
    3,
    10 * 1024 * 1024
    // 10MB default
  ), d = s(e, "maxFiles", 19, () => a() ? 5 : 1), c = s(e, "variant", 3, "default"), g = s(e, "disabled", 3, !1), w = s(e, "showPreview", 3, !0), O = s(e, "autoUpload", 3, !1), h = s(e, "class", 3, ""), L = At();
  let N, T, y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(ot([]));
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
      dropZone: `bg-black/80 border-${ze.terminal.green} hover:border-${ze.terminal.matrix}`,
      dropZoneActive: `bg-${ze.terminal.green}/10 border-${ze.terminal.matrix}`,
      fileItem: `bg-black/60 border-${ze.terminal.green}/30`,
      progressBar: `bg-${ze.terminal.green}`,
      successIcon: `text-${ze.terminal.green}`,
      errorIcon: "text-red-400",
      removeButton: `text-${ze.terminal.green}/70 hover:text-${ze.terminal.green}`
    }
  }, Z = /* @__PURE__ */ Se(() => G[c()]);
  function x() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  function B(ae) {
    if (ae === 0) return "0 Bytes";
    const Y = 1024, le = ["Bytes", "KB", "MB", "GB"], re = Math.floor(Math.log(ae) / Math.log(Y));
    return parseFloat((ae / Math.pow(Y, re)).toFixed(2)) + " " + le[re];
  }
  function D(ae) {
    return ae.type.startsWith("image/");
  }
  function j(ae) {
    if (ae.size > l())
      return `File size exceeds ${B(l())}`;
    if (n() !== "*/*") {
      const Y = n().split(",").map((E) => E.trim()), le = "." + ae.name.split(".").pop()?.toLowerCase();
      if (!Y.some((E) => E === ae.type || E === le || E.endsWith("/*") && ae.type.startsWith(E.slice(0, -1))))
        return `File type not accepted. Accepted types: ${n()}`;
    }
    return null;
  }
  async function P(ae) {
    if (!(!D(ae) || !w()))
      return new Promise((Y) => {
        const le = new FileReader();
        le.onload = (re) => Y(re.target?.result), le.onerror = () => Y(void 0), le.readAsDataURL(ae);
      });
  }
  async function F(ae) {
    if (g()) return;
    const Y = Array.from(ae), le = d() - t(f).length, re = Y.slice(0, le), E = [];
    for (const te of re) {
      const J = j(te), Q = await P(te), ee = {
        ...te,
        id: x(),
        preview: Q,
        status: J ? "error" : "pending",
        error: J,
        progress: 0
      };
      E.push(ee);
    }
    K(f, [...t(f), ...E], !0), L("filesAdded", E), O() && e.uploadUrl && E.forEach((te) => {
      te.status === "pending" && H(te);
    });
  }
  async function H(ae) {
    if (!e.uploadUrl) return;
    const Y = t(f).findIndex((re) => re.id === ae.id);
    if (Y === -1) return;
    t(f)[Y] = { ...ae, status: "uploading", progress: 0 }, L("uploadStart", t(f)[Y]);
    const le = new FormData();
    le.append("file", ae);
    try {
      const re = new XMLHttpRequest();
      re.upload.onprogress = (E) => {
        if (E.lengthComputable) {
          const te = Math.round(E.loaded / E.total * 100);
          t(f)[Y] = { ...t(f)[Y], progress: te }, L("uploadProgress", { file: t(f)[Y], progress: te });
        }
      }, re.onload = () => {
        if (re.status >= 200 && re.status < 300)
          t(f)[Y] = { ...t(f)[Y], status: "success", progress: 100 }, L("uploadSuccess", { file: t(f)[Y], response: re.response });
        else
          throw new Error(`Upload failed: ${re.statusText}`);
        t(f).every((E) => E.status === "success" || E.status === "error") && L("allUploadsComplete", t(f));
      }, re.onerror = () => {
        const E = "Upload failed: Network error";
        t(f)[Y] = { ...t(f)[Y], status: "error", error: E }, L("uploadError", { file: t(f)[Y], error: E });
      }, re.open("POST", e.uploadUrl), re.send(le);
    } catch (re) {
      const E = re instanceof Error ? re.message : "Upload failed";
      t(f)[Y] = {
        ...t(f)[Y],
        status: "error",
        error: E
      }, L("uploadError", { file: t(f)[Y], error: E });
    }
  }
  function A(ae) {
    const Y = t(f).findIndex((re) => re.id === ae);
    if (Y === -1) return;
    const le = t(f)[Y];
    K(f, t(f).filter((re) => re.id !== ae), !0), L("fileRemoved", le);
  }
  function U(ae) {
    const Y = t(f).find((le) => le.id === ae);
    Y && e.uploadUrl && H(Y);
  }
  function X(ae) {
    const Y = ae.target;
    Y.files && F(Y.files), Y.value = "";
  }
  function R(ae) {
    ae.preventDefault(), g() || K(y, !0);
  }
  function C(ae) {
    ae.preventDefault(), T?.contains(ae.relatedTarget) || K(y, !1);
  }
  function k(ae) {
    if (ae.preventDefault(), K(y, !1), g()) return;
    const Y = ae.dataTransfer?.files;
    Y && F(Y);
  }
  function M() {
    !g() && N && N.click();
  }
  const p = /* @__PURE__ */ Se(() => t(f).length < d()), q = /* @__PURE__ */ Se(() => V(
    "relative w-full rounded-lg border-2 border-dashed transition-all duration-300",
    "flex flex-col items-center justify-center p-8 min-h-32",
    "cursor-pointer font-mono",
    t(y) ? t(Z).dropZoneActive : t(Z).dropZone,
    g() && "opacity-50 cursor-not-allowed",
    h()
  ));
  var W = ru(), I = we(W);
  I.__change = X, rt(I, (ae) => N = ae, () => N);
  var _ = u(I, 2);
  _.__click = M, _.__keydown = [Bv, M];
  var m = o(_);
  {
    var ie = (ae) => {
      var Y = Fv();
      tt(1, Y, () => Kt, () => ({ duration: 200 })), i(ae, Y);
    }, ue = (ae) => {
      var Y = Gv(), le = u(o(Y), 2), re = o(le), E = o(re), te = u(re, 2), J = o(te), Q = u(te, 2);
      {
        var ee = (de) => {
          var Ce = Hv(), be = o(Ce);
          S(() => oe(be, `${t(f).length ?? ""} of ${d() ?? ""} files selected`)), i(de, Ce);
        };
        b(Q, (de) => {
          a() && de(ee);
        });
      }
      var se = u(le, 2);
      {
        var ne = (de) => {
          var Ce = Vv();
          Re(Ce, (be, ce) => ut?.(be, ce), () => ({ strength: 0.15 })), i(de, Ce);
        };
        b(se, (de) => {
          t(p) && de(ne);
        });
      }
      S(
        (de) => {
          oe(E, t(p) ? "Choose files or drag and drop" : "Maximum files reached"), oe(J, `${(n() === "*/*" ? "Any file type" : n()) ?? ""} • Max ${de ?? ""} per file`);
        },
        [() => B(l())]
      ), i(ae, Y);
    };
    b(m, (ae) => {
      t(y) ? ae(ie) : ae(ue, !1);
    });
  }
  rt(_, (ae) => T = ae, () => T), Re(_, (ae, Y) => kt?.(ae, Y), () => ({ blur: "md", opacity: "light" })), Re(_, (ae, Y) => ut?.(ae, Y), () => ({
    enabled: !g() && t(p),
    strength: 0.1
  }));
  var fe = u(_, 2);
  {
    var ve = (ae) => {
      var Y = tu();
      We(Y, 21, () => t(f), (le) => le.id, (le, re) => {
        var E = eu(), te = o(E), J = o(te), Q = o(J);
        {
          var ee = (Ie) => {
            var ge = Uv();
            S(() => {
              ye(ge, "src", t(re).preview), ye(ge, "alt", t(re).name);
            }), i(Ie, ge);
          }, se = (Ie) => {
            var ge = Wv();
            i(Ie, ge);
          };
          b(Q, (Ie) => {
            t(re).preview ? Ie(ee) : Ie(se, !1);
          });
        }
        var ne = u(J, 2), de = o(ne), Ce = o(de), be = o(Ce), ce = u(Ce, 2), me = o(ce);
        {
          var Ee = (Ie) => {
            var ge = Yv();
            S(() => z(ge, 0, `w-5 h-5 ${t(Z).successIcon ?? ""}`)), i(Ie, ge);
          }, Be = (Ie) => {
            var ge = Ae(), _e = we(ge);
            {
              var De = (qe) => {
                var Fe = Xv(), Ve = we(Fe);
                Ve.__click = [Kv, U, re];
                var Ge = u(Ve, 2);
                S(() => z(Ge, 0, `w-5 h-5 ${t(Z).errorIcon ?? ""}`)), i(qe, Fe);
              }, Te = (qe) => {
                var Fe = Ae(), Ve = we(Fe);
                {
                  var Ge = (Ke) => {
                    var Je = Qv();
                    i(Ke, Je);
                  };
                  b(
                    Ve,
                    (Ke) => {
                      t(re).status === "uploading" && Ke(Ge);
                    },
                    !0
                  );
                }
                i(qe, Fe);
              };
              b(
                _e,
                (qe) => {
                  t(re).status === "error" ? qe(De) : qe(Te, !1);
                },
                !0
              );
            }
            i(Ie, ge);
          };
          b(me, (Ie) => {
            t(re).status === "success" ? Ie(Ee) : Ie(Be, !1);
          });
        }
        var Ne = u(me, 2);
        Ne.__click = [Zv, A, re];
        var Oe = u(de, 2), Me = o(Oe), xe = o(Me), Le = u(Me, 2);
        {
          var je = (Ie) => {
            var ge = Jv(), _e = o(ge);
            S(() => oe(_e, t(re).error)), i(Ie, ge);
          };
          b(Le, (Ie) => {
            t(re).error && Ie(je);
          });
        }
        var he = u(Oe, 2);
        {
          var pe = (Ie) => {
            var ge = $v(), _e = o(ge), De = o(_e), Te = u(_e, 2), qe = o(Te);
            S(() => {
              z(De, 1, `h-2 rounded-full ${t(Z).progressBar ?? ""} transition-all duration-300`), mt(De, `width: ${t(re).progress ?? ""}%`), oe(qe, `${t(re).progress ?? ""}% uploaded`);
            }), i(Ie, ge);
          };
          b(he, (Ie) => {
            t(re).status === "uploading" && t(re).progress !== void 0 && Ie(pe);
          });
        }
        Re(E, (Ie, ge) => kt?.(Ie, ge), () => ({ blur: "sm", opacity: "subtle" })), S(
          (Ie) => {
            z(E, 1, `p-4 rounded-lg border ${t(Z).fileItem ?? ""} transition-all duration-200`), oe(be, t(re).name), z(Ne, 1, `p-1 rounded ${t(Z).removeButton ?? ""} hover:bg-red-500/20 transition-colors`), oe(xe, Ie);
          },
          [() => B(t(re).size)]
        ), tt(1, E, () => Kt, () => ({ duration: 300, bounce: !0 })), i(le, E);
      }), i(ae, Y);
    };
    b(fe, (ae) => {
      t(f).length > 0 && ae(ve);
    });
  }
  S(() => {
    ye(I, "accept", n()), I.multiple = a(), I.disabled = g(), z(_, 1, $(t(q))), ye(_, "tabindex", g() ? -1 : 0);
  }), qt("dragover", _, R), qt("dragleave", _, C), qt("drop", _, k), i(r, W), Qe();
}
ft(["change", "click", "keydown"]);
const Ht = {
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
function $i(r, e) {
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
function au(r, e) {
  const a = {};
  for (const [n, l] of Object.entries(e)) {
    const d = r[n];
    a[n] = $i(d, l);
  }
  return a;
}
function nu(r) {
  return Object.values(r).every((e) => e.isValid);
}
function iu(r) {
  const e = {};
  for (const [a, n] of Object.entries(r))
    n.isValid || (e[a] = n.errors);
  return e;
}
function _1(r) {
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
        const d = $i(e[l], r[l]);
        d.isValid ? delete a[l] : a[l] = d.errors;
      }
    },
    validateAll() {
      const l = au(e, r);
      return a = iu(l), nu(l);
    },
    reset() {
      e = {}, a = {}, n = {};
    },
    setData(l) {
      e = { ...l };
    }
  };
}
function x1(r, e = 300) {
  let a;
  return function(...n) {
    clearTimeout(a), a = setTimeout(() => r.apply(this, n), e);
  };
}
const p1 = {
  login: {
    email: {
      rules: [Ht.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Ht.minLength(6)],
      required: !0
    }
  },
  registration: {
    name: {
      rules: [Ht.minLength(2), Ht.maxLength(50)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Ht.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [Ht.strongPassword()],
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
      rules: [Ht.minLength(2), Ht.maxLength(100)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [Ht.email()],
      required: !0,
      trim: !0
    },
    phone: {
      rules: [Ht.phoneNumber()],
      required: !1,
      trim: !0
    },
    message: {
      rules: [Ht.minLength(10), Ht.maxLength(1e3)],
      required: !0,
      trim: !0
    }
  }
};
function ou(r, e) {
  e("homeClick");
}
var lu = /* @__PURE__ */ v('<span class="mr-1 text-base"> </span>'), su = /* @__PURE__ */ v('<li aria-hidden="true"> </li>'), du = /* @__PURE__ */ v('<li><button aria-label="Go to home"><!> </button></li> <!>', 1), cu = /* @__PURE__ */ v('<span aria-hidden="true"> </span>'), vu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), uu = /* @__PURE__ */ v('<span aria-current="page"><!> </span>'), fu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), bu = /* @__PURE__ */ v("<a><!> </a>"), gu = /* @__PURE__ */ v('<span class="mr-2 text-base"> </span>'), hu = /* @__PURE__ */ v("<button><!> </button>"), mu = /* @__PURE__ */ v('<li aria-hidden="true"> </li>'), _u = /* @__PURE__ */ v('<li class="flex items-center"><!></li> <!>', 1), xu = /* @__PURE__ */ v('<nav aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><!> <!></ol></nav>');
function w1(r, e) {
  Xe(e, !0);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "separator", 3, "chevron"), d = s(e, "showHome", 3, !0), c = s(e, "homeIcon", 3, "🏠"), g = s(e, "homeLabel", 3, "Home"), w = s(e, "maxItems", 3, 5), O = s(e, "class", 3, ""), h = At(), L = {
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
      container: `text-${ze.terminal.green}/60`,
      item: `text-${ze.terminal.green}/60 hover:text-${ze.terminal.green}`,
      activeItem: `text-${ze.terminal.green}`,
      separator: `text-${ze.terminal.green}/40`,
      home: `text-${ze.terminal.green}/60 hover:text-${ze.terminal.green}`
    }
  }, N = { slash: "/", chevron: "›", arrow: "→", dot: "•" }, T = /* @__PURE__ */ Se(() => L[n()]), y = /* @__PURE__ */ Se(() => () => {
    if (a().length <= w())
      return a();
    const P = a()[0], F = a().slice(-(w() - 2));
    return [
      P,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...F
    ];
  });
  function f(P, F) {
    P.disabled || P.id === "ellipsis" || h("navigate", { item: P, index: F });
  }
  const G = /* @__PURE__ */ Se(() => V("flex items-center space-x-2 text-sm font-mono", t(T).container, O()));
  var Z = xu(), x = o(Z), B = o(x);
  {
    var D = (P) => {
      var F = du(), H = we(F), A = o(H);
      A.__click = [ou, h];
      var U = o(A);
      {
        var X = (M) => {
          var p = lu(), q = o(p);
          S(() => oe(q, c())), i(M, p);
        };
        b(U, (M) => {
          c() && M(X);
        });
      }
      var R = u(U);
      Re(A, (M, p) => ut?.(M, p), () => ({ strength: 0.1 }));
      var C = u(H, 2);
      {
        var k = (M) => {
          var p = su(), q = o(p);
          S(() => {
            z(p, 1, $(t(T).separator)), oe(q, N[l()]);
          }), i(M, p);
        };
        b(C, (M) => {
          t(y).length > 0 && M(k);
        });
      }
      S(() => {
        z(A, 1, `flex items-center ${t(T).home ?? ""} hover:underline transition-colors`), oe(R, ` ${g() ?? ""}`);
      }), i(P, F);
    };
    b(B, (P) => {
      d() && P(D);
    });
  }
  var j = u(B, 2);
  We(j, 19, () => t(y), (P) => P.id, (P, F, H) => {
    var A = _u(), U = we(A), X = o(U);
    {
      var R = (p) => {
        var q = cu(), W = o(q);
        S(() => {
          z(q, 1, `px-2 ${t(T).separator ?? ""}`), oe(W, t(F).label);
        }), i(p, q);
      }, C = (p) => {
        var q = Ae(), W = we(q);
        {
          var I = (m) => {
            var ie = uu(), ue = o(ie);
            {
              var fe = (ae) => {
                var Y = vu(), le = o(Y);
                S(() => oe(le, t(F).icon)), i(ae, Y);
              };
              b(ue, (ae) => {
                t(F).icon && ae(fe);
              });
            }
            var ve = u(ue);
            S(() => {
              z(ie, 1, `flex items-center ${t(T).activeItem ?? ""} font-medium`), oe(ve, ` ${t(F).label ?? ""}`);
            }), i(m, ie);
          }, _ = (m) => {
            var ie = Ae(), ue = we(ie);
            {
              var fe = (ae) => {
                var Y = bu();
                Y.__click = (te) => {
                  t(F).disabled ? te.preventDefault() : f(t(F), t(H));
                };
                var le = o(Y);
                {
                  var re = (te) => {
                    var J = fu(), Q = o(J);
                    S(() => oe(Q, t(F).icon)), i(te, J);
                  };
                  b(le, (te) => {
                    t(F).icon && te(re);
                  });
                }
                var E = u(le);
                Re(Y, (te, J) => ut?.(te, J), () => ({ enabled: !t(F).disabled, strength: 0.1 })), S(() => {
                  ye(Y, "href", t(F).href), z(Y, 1, `flex items-center ${t(T).item ?? ""} hover:underline transition-colors
							       ${t(F).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), oe(E, ` ${t(F).label ?? ""}`);
                }), i(ae, Y);
              }, ve = (ae) => {
                var Y = hu();
                Y.__click = () => f(t(F), t(H));
                var le = o(Y);
                {
                  var re = (te) => {
                    var J = gu(), Q = o(J);
                    S(() => oe(Q, t(F).icon)), i(te, J);
                  };
                  b(le, (te) => {
                    t(F).icon && te(re);
                  });
                }
                var E = u(le);
                Re(Y, (te, J) => ut?.(te, J), () => ({ enabled: !t(F).disabled, strength: 0.1 })), S(() => {
                  Y.disabled = t(F).disabled, z(Y, 1, `flex items-center ${t(T).item ?? ""} hover:underline transition-colors
							       ${t(F).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), oe(E, ` ${t(F).label ?? ""}`);
                }), i(ae, Y);
              };
              b(ue, (ae) => {
                t(F).href ? ae(fe) : ae(ve, !1);
              });
            }
            i(m, ie);
          };
          b(
            W,
            (m) => {
              t(H) === t(y).length - 1 ? m(I) : m(_, !1);
            },
            !0
          );
        }
        i(p, q);
      };
      b(X, (p) => {
        t(F).id === "ellipsis" ? p(R) : p(C, !1);
      });
    }
    var k = u(U, 2);
    {
      var M = (p) => {
        var q = mu(), W = o(q);
        S(() => {
          z(q, 1, $(t(T).separator)), oe(W, N[l()]);
        }), i(p, q);
      };
      b(k, (p) => {
        t(H) < t(y).length - 1 && t(F).id !== "ellipsis" && p(M);
      });
    }
    i(P, A);
  }), S(() => z(Z, 1, $(t(G)))), i(r, Z), Qe();
}
ft(["click"]);
function pu(r, e, a, n, l, d, c, g) {
  if (!t(e)) {
    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), a());
    return;
  }
  switch (r.key) {
    case "Escape":
      r.preventDefault(), n();
      break;
    case "ArrowDown":
      r.preventDefault(), K(l, Math.min(t(l) + 1, t(d).length - 1), !0);
      break;
    case "ArrowUp":
      r.preventDefault(), K(l, Math.max(t(l) - 1, 0), !0);
      break;
    case "Enter":
      r.preventDefault(), t(l) >= 0 && t(d)()[t(l)] && c(t(d)()[t(l)]);
      break;
    case "ArrowRight":
      t(l) >= 0 && t(d)()[t(l)]?.children?.length && K(g, t(d)()[t(l)].id, !0);
      break;
    case "ArrowLeft":
      t(g) && K(g, null);
      break;
  }
}
var wu = /* @__PURE__ */ v("<div><span>Menu</span> <!></div>"), yu = /* @__PURE__ */ v("<hr/>"), ku = (r, e, a) => e(t(a)), Cu = (r, e, a) => r.key === "Enter" && e(t(a)), Eu = /* @__PURE__ */ v('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), Su = /* @__PURE__ */ v("<span> </span>"), Tu = /* @__PURE__ */ v("<span> </span>"), Mu = /* @__PURE__ */ v("<hr/>"), Au = (r, e, a) => e(t(a)), Iu = (r, e, a) => r.key === "Enter" && e(t(a)), Pu = /* @__PURE__ */ v('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), Lu = /* @__PURE__ */ v("<span> </span>"), zu = /* @__PURE__ */ v("<span> </span>"), Du = /* @__PURE__ */ v('<div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <!></div>'), Ru = /* @__PURE__ */ v('<div role="menu"><div class="py-1"></div></div>'), Nu = /* @__PURE__ */ v('<div class="relative"><div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <div class="flex items-center gap-2 ml-3"><!> <!></div></div> <!></div>'), Ou = /* @__PURE__ */ v('<div role="menu"><div class="py-1"></div></div>'), ju = /* @__PURE__ */ v('<div><div class="cursor-pointer" tabindex="0" role="button" aria-haspopup="menu"><!></div> <!></div>');
function y1(r, e) {
  Xe(e, !0);
  let a = s(e, "openMode", 3, "click"), n = s(e, "placement", 3, "bottom-start"), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), c = s(e, "closeOnClick", 3, !0), g = s(e, "showIcons", 3, !0), w = s(e, "showKeyboards", 3, !0), O = s(e, "class", 3, ""), h = /* @__PURE__ */ ct(e, [
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
  const L = At();
  let N = /* @__PURE__ */ ke(!1), T, y, f = /* @__PURE__ */ ke(null), G = /* @__PURE__ */ ke(-1);
  const Z = `menu-${Math.random().toString(36).substr(2, 9)}`, x = {
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
  }, D = x[d()], j = B[l()], P = /* @__PURE__ */ Se(() => () => {
    const m = [];
    function ie(ue) {
      for (const fe of ue)
        fe.separator || m.push(fe), fe.children && ie(fe.children);
    }
    return ie(e.items), m;
  });
  function F() {
    K(N, !t(N)), t(N) && (K(G, -1), K(f, null)), L("toggle", { isOpen: t(N) });
  }
  function H() {
    K(N, !1), K(f, null), K(G, -1), L("close");
  }
  function A(m) {
    m.disabled || (m.children?.length ? K(f, t(f) === m.id ? null : m.id, !0) : (m.onclick && m.onclick(), L("select", { item: m }), c() && H()));
  }
  function U(m) {
    a() === "hover" && m.children?.length && K(f, m.id, !0);
  }
  function X() {
    a() === "hover" && K(f, null);
  }
  function R(m) {
    T && !T.contains(m.target) && H();
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
  var k = ju();
  Ze(k, (m) => ({ class: m, ...h }), [() => V("relative inline-block", O())], void 0, "svelte-i7uadz");
  var M = o(k);
  M.__click = function(...m) {
    (a() === "click" ? F : void 0)?.apply(this, m);
  }, M.__keydown = [
    pu,
    N,
    F,
    H,
    G,
    P,
    A,
    f
  ];
  var p = o(M);
  {
    var q = (m) => {
      var ie = Ae(), ue = we(ie);
      lt(ue, () => e.children.trigger), i(m, ie);
    }, W = (m) => {
      var ie = wu(), ue = u(o(ie), 2);
      {
        let fe = /* @__PURE__ */ Se(() => V("transition-transform duration-200", t(N) && "rotate-180"));
        Kr(ue, {
          size: 16,
          get class() {
            return t(fe);
          }
        });
      }
      S((fe) => z(ie, 1, fe), [
        () => $(V("flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200", j.item, t(N) && j.itemActive))
      ]), i(m, ie);
    };
    b(p, (m) => {
      e.children?.trigger ? m(q) : m(W, !1);
    });
  }
  rt(M, (m) => y = m, () => y);
  var I = u(M, 2);
  {
    var _ = (m) => {
      var ie = Ou(), ue = o(ie);
      We(ue, 23, () => e.items, (fe) => fe.id, (fe, ve) => {
        var ae = Ae(), Y = we(ae);
        {
          var le = (E) => {
            var te = yu();
            S((J) => z(te, 1, J), [() => $(V("my-1 border-t", j.separator))]), i(E, te);
          }, re = (E) => {
            var te = Nu(), J = o(te);
            J.__click = [ku, A, ve], J.__keydown = [Cu, A, ve];
            var Q = o(J), ee = o(Q);
            {
              var se = (xe) => {
                var Le = Eu();
                S((je) => z(Le, 1, je), [() => $(V("flex-shrink-0", D.icon))]), i(xe, Le);
              };
              b(ee, (xe) => {
                g() && t(ve).icon && xe(se);
              });
            }
            var ne = u(ee, 2), de = o(ne), Ce = u(ne, 2);
            {
              var be = (xe) => {
                var Le = Su(), je = o(Le);
                S(
                  (he) => {
                    z(Le, 1, he), oe(je, t(ve).badge);
                  },
                  [
                    () => $(V("inline-flex items-center rounded-full font-medium", D.badge, j.badge))
                  ]
                ), i(xe, Le);
              };
              b(Ce, (xe) => {
                t(ve).badge && xe(be);
              });
            }
            var ce = u(Q, 2), me = o(ce);
            {
              var Ee = (xe) => {
                var Le = Tu(), je = o(Le);
                S(
                  (he) => {
                    z(Le, 1, he), oe(je, t(ve).keyboard);
                  },
                  [
                    () => $(V("opacity-60 font-mono", D.keyboard, j.keyboard))
                  ]
                ), i(xe, Le);
              };
              b(me, (xe) => {
                w() && t(ve).keyboard && xe(Ee);
              });
            }
            var Be = u(me, 2);
            {
              var Ne = (xe) => {
                Or(xe, { size: 16, class: "opacity-60" });
              };
              b(Be, (xe) => {
                t(ve).children?.length && xe(Ne);
              });
            }
            var Oe = u(J, 2);
            {
              var Me = (xe) => {
                var Le = Ru(), je = o(Le);
                We(je, 21, () => t(ve).children, (he) => he.id, (he, pe) => {
                  var Ie = Ae(), ge = we(Ie);
                  {
                    var _e = (Te) => {
                      var qe = Mu();
                      S((Fe) => z(qe, 1, Fe), [() => $(V("my-1 border-t", j.separator))]), i(Te, qe);
                    }, De = (Te) => {
                      var qe = Du();
                      qe.__click = [Au, A, pe], qe.__keydown = [Iu, A, pe];
                      var Fe = o(qe), Ve = o(Fe);
                      {
                        var Ge = (Pe) => {
                          var He = Pu();
                          S((et) => z(He, 1, et), [() => $(V("flex-shrink-0", D.icon))]), i(Pe, He);
                        };
                        b(Ve, (Pe) => {
                          g() && t(pe).icon && Pe(Ge);
                        });
                      }
                      var Ke = u(Ve, 2), Je = o(Ke), $e = u(Ke, 2);
                      {
                        var at = (Pe) => {
                          var He = Lu(), et = o(He);
                          S(
                            (dt) => {
                              z(He, 1, dt), oe(et, t(pe).badge);
                            },
                            [
                              () => $(V("inline-flex items-center rounded-full font-medium", D.badge, j.badge))
                            ]
                          ), i(Pe, He);
                        };
                        b($e, (Pe) => {
                          t(pe).badge && Pe(at);
                        });
                      }
                      var nt = u(Fe, 2);
                      {
                        var Ue = (Pe) => {
                          var He = zu(), et = o(He);
                          S(
                            (dt) => {
                              z(He, 1, dt), oe(et, t(pe).keyboard);
                            },
                            [
                              () => $(V("opacity-60 font-mono ml-3", D.keyboard, j.keyboard))
                            ]
                          ), i(Pe, He);
                        };
                        b(nt, (Pe) => {
                          w() && t(pe).keyboard && Pe(Ue);
                        });
                      }
                      S(
                        (Pe) => {
                          z(qe, 1, Pe, "svelte-i7uadz"), ye(qe, "aria-disabled", t(pe).disabled), ye(qe, "tabindex", t(pe).disabled ? -1 : 0), oe(Je, t(pe).label);
                        },
                        [
                          () => $(V("flex items-center justify-between cursor-pointer transition-all duration-150", D.item, t(pe).disabled ? j.itemDisabled : j.item))
                        ]
                      ), i(Te, qe);
                    };
                    b(ge, (Te) => {
                      t(pe).separator ? Te(_e) : Te(De, !1);
                    });
                  }
                  i(he, Ie);
                }), Re(Le, (he, pe) => kt?.(he, pe), () => ({ intensity: "medium" })), S((he) => z(Le, 1, he, "svelte-i7uadz"), [
                  () => $(V("absolute z-10 min-w-[180px] rounded-lg border shadow-lg", "left-full top-0 ml-1", j.menu))
                ]), i(xe, Le);
              };
              b(Oe, (xe) => {
                t(ve).children?.length && t(f) === t(ve).id && xe(Me);
              });
            }
            S(
              (xe) => {
                z(J, 1, xe, "svelte-i7uadz"), ye(J, "aria-disabled", t(ve).disabled), ye(J, "tabindex", t(ve).disabled ? -1 : 0), oe(de, t(ve).label);
              },
              [
                () => $(V("flex items-center justify-between cursor-pointer transition-all duration-150", D.item, t(ve).disabled ? j.itemDisabled : j.item, t(G) === t(P)().indexOf(t(ve)) && !t(ve).disabled && j.itemActive, t(f) === t(ve).id && j.itemActive))
              ]
            ), qt("mouseenter", J, () => U(t(ve))), qt("mouseleave", J, X), i(E, te);
          };
          b(Y, (E) => {
            t(ve).separator ? E(le) : E(re, !1);
          });
        }
        i(fe, ae);
      }), Re(ie, (fe, ve) => kt?.(fe, ve), () => ({ intensity: "medium" })), S(
        (fe) => {
          ye(ie, "id", Z), z(ie, 1, fe, "svelte-i7uadz");
        },
        [
          () => $(V("absolute z-50 min-w-[200px] rounded-lg border shadow-lg", C(), j.menu))
        ]
      ), i(m, ie);
    };
    b(I, (m) => {
      t(N) && m(_);
    });
  }
  rt(k, (m) => T = m, () => T), S(() => {
    ye(M, "aria-expanded", t(N)), ye(M, "aria-controls", Z);
  }), qt("mouseenter", M, function(...m) {
    (a() === "hover" ? F : void 0)?.apply(this, m);
  }), qt("mouseleave", M, function(...m) {
    (a() === "hover" ? () => setTimeout(H, 150) : void 0)?.apply(this, m);
  }), i(r, k), Qe();
}
ft(["click", "keydown"]);
function qu(r, e, a) {
  e("brandClick"), K(a, !1);
}
function Bu(r, e, a) {
  K(e, !t(e)), a("mobileToggle", t(e));
}
var Fu = /* @__PURE__ */ v('<img alt="Logo" class="h-8 w-auto"/>'), Hu = /* @__PURE__ */ v(`<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"> </div>`), Vu = /* @__PURE__ */ v('<span class="text-xl font-bold tracking-tight"> </span>'), Gu = /* @__PURE__ */ v('<div class="flex items-center"><button><!> <!></button></div>'), Uu = (
  // Handle scroll for backdrop effects
  // Click outside to close dropdowns
  (r, e, a) => e(t(a))
), Wu = (r, e, a) => e(r, t(a)), Yu = /* @__PURE__ */ v('<span class="mr-2 text-lg"> </span>'), Ku = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), Xu = (r, e, a) => e(t(a), r), Qu = /* @__PURE__ */ v('<span class="mr-2"> </span>'), Zu = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), Ju = /* @__PURE__ */ v('<a role="menuitem"><!> <!></a>'), $u = /* @__PURE__ */ v('<div role="menu"></div>'), ef = /* @__PURE__ */ v('<button aria-haspopup="true"><!> <!> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!>', 1), tf = (r, e, a) => e(t(a), r), rf = (r, e, a) => e(r, t(a)), af = /* @__PURE__ */ v('<span class="mr-2 text-lg"> </span>'), nf = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), of = /* @__PURE__ */ ar('<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), lf = /* @__PURE__ */ v("<a><!> <!> <!></a>"), sf = /* @__PURE__ */ v('<div class="relative"><!></div>'), df = /* @__PURE__ */ ar('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), cf = /* @__PURE__ */ ar('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'), vf = (r, e, a) => e(t(a)), uf = /* @__PURE__ */ v('<span class="mr-3 text-lg"> </span>'), ff = /* @__PURE__ */ v('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), bf = (r, e, a) => e(t(a), r), gf = /* @__PURE__ */ v('<span class="mr-3"> </span>'), hf = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), mf = /* @__PURE__ */ v("<a><!> <!></a>"), _f = /* @__PURE__ */ v('<div class="pl-6 mt-2 space-y-1"></div>'), xf = /* @__PURE__ */ v('<div><button><span class="flex items-center"><!> <!></span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), pf = (r, e, a) => e(t(a), r), wf = /* @__PURE__ */ v('<span class="mr-3 text-lg"> </span>'), yf = /* @__PURE__ */ v('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), kf = /* @__PURE__ */ ar('<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), Cf = /* @__PURE__ */ v("<a><!> <!> <!></a>"), Ef = /* @__PURE__ */ v('<div><div class="px-2 pt-2 pb-3 space-y-1"></div></div>'), Sf = /* @__PURE__ */ v('<nav aria-label="Main navigation"><div><!> <div class="hidden md:flex items-center space-x-1"></div> <div class="md:hidden"><button aria-label="Toggle mobile menu"><!></button></div></div> <!></nav>');
function k1(r, e) {
  Xe(e, !0);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "glass"), l = s(e, "position", 3, "static"), d = s(e, "backdrop", 3, !0), c = s(e, "logoText", 3, "TULIO"), g = s(e, "showBrand", 3, !0), w = s(e, "compact", 3, !1), O = s(e, "transparent", 3, !1), h = s(e, "activeItem", 3, ""), L = s(e, "class", 3, ""), N = At();
  let T, y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(ot(/* @__PURE__ */ new Set())), G = /* @__PURE__ */ ke(!1);
  const Z = {
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
      nav: `bg-black/90 border-${ze.terminal.green}`,
      item: `text-${ze.terminal.green}/80 hover:text-${ze.terminal.green} hover:bg-${ze.terminal.green}/10`,
      activeItem: `text-black bg-${ze.terminal.green}`,
      dropdown: `bg-black/95 border-${ze.terminal.green}`,
      brand: `text-${ze.terminal.green}`,
      mobileButton: `text-${ze.terminal.green}/80 hover:text-${ze.terminal.green}`
    }
  }, x = /* @__PURE__ */ Se(() => Z[n()]);
  function B(_, m) {
    if (!_.disabled) {
      if (_.children) {
        const ie = new Set(t(f));
        ie.has(_.id) ? ie.delete(_.id) : ie.add(_.id), K(f, ie, !0);
        return;
      }
      if (K(y, !1), N("navigate", { item: _, href: _.href }), _.external && _.href) {
        window.open(_.href, "_blank", "noopener,noreferrer"), m?.preventDefault();
        return;
      }
    }
  }
  function D() {
    K(f, /* @__PURE__ */ new Set(), !0);
  }
  function j(_, m) {
    _.key === "Enter" || _.key === " " ? (_.preventDefault(), B(m)) : _.key === "Escape" && D();
  }
  yt(() => {
    function _() {
      K(G, window.scrollY > 10);
    }
    if (l() === "fixed" || l() === "sticky")
      return window.addEventListener("scroll", _), () => window.removeEventListener("scroll", _);
  }), yt(() => {
    function _(m) {
      T && !T.contains(m.target) && D();
    }
    return document.addEventListener("click", _), () => document.removeEventListener("click", _);
  });
  const P = /* @__PURE__ */ Se(() => V("w-full border-b transition-all duration-300", "font-mono", t(x).nav, l() === "fixed" && "fixed top-0 left-0 z-50", l() === "sticky" && "sticky top-0 z-40", d() && "backdrop-blur-xl", O() && !t(G) && "bg-transparent border-transparent", w() ? "py-2" : "py-4", L())), F = /* @__PURE__ */ Se(() => V("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "flex items-center justify-between", w() ? "h-12" : "h-16"));
  var H = Sf(), A = o(H), U = o(A);
  {
    var X = (_) => {
      var m = Gu(), ie = o(m);
      ie.__click = [qu, N, y];
      var ue = o(ie);
      {
        var fe = (le) => {
          var re = Fu();
          S(() => ye(re, "src", e.logo)), i(le, re);
        }, ve = (le) => {
          var re = Hu(), E = o(re);
          S((te) => oe(E, te), [() => c().charAt(0)]), i(le, re);
        };
        b(ue, (le) => {
          e.logo ? le(fe) : le(ve, !1);
        });
      }
      var ae = u(ue, 2);
      {
        var Y = (le) => {
          var re = Vu(), E = o(re);
          S(() => oe(E, c())), i(le, re);
        };
        b(ae, (le) => {
          c() && le(Y);
        });
      }
      Re(ie, (le, re) => ut?.(le, re), () => ({ strength: 0.1 })), S(() => z(ie, 1, `flex items-center space-x-3 ${t(x).brand ?? ""} hover:opacity-80 transition-opacity`)), i(_, m);
    };
    b(U, (_) => {
      g() && _(X);
    });
  }
  var R = u(U, 2);
  We(R, 21, a, (_) => _.id, (_, m) => {
    var ie = sf(), ue = o(ie);
    {
      var fe = (ae) => {
        var Y = ef(), le = we(Y);
        le.__click = [Uu, B, m], le.__keydown = [Wu, j, m];
        var re = o(le);
        {
          var E = (de) => {
            var Ce = Yu(), be = o(Ce);
            S(() => oe(be, t(m).icon)), i(de, Ce);
          };
          b(re, (de) => {
            t(m).icon && de(E);
          });
        }
        var te = u(re), J = u(te);
        {
          var Q = (de) => {
            var Ce = Ku(), be = o(Ce);
            S(() => oe(be, t(m).badge)), i(de, Ce);
          };
          b(J, (de) => {
            t(m).badge && de(Q);
          });
        }
        var ee = u(J, 2);
        Re(le, (de, Ce) => ut?.(de, Ce), () => ({ enabled: !t(m).disabled, strength: 0.1 }));
        var se = u(le, 2);
        {
          var ne = (de) => {
            var Ce = $u();
            We(Ce, 21, () => t(m).children, (be) => be.id, (be, ce) => {
              var me = Ju();
              me.__click = [Xu, B, ce];
              var Ee = o(me);
              {
                var Be = (xe) => {
                  var Le = Qu(), je = o(Le);
                  S(() => oe(je, t(ce).icon)), i(xe, Le);
                };
                b(Ee, (xe) => {
                  t(ce).icon && xe(Be);
                });
              }
              var Ne = u(Ee), Oe = u(Ne);
              {
                var Me = (xe) => {
                  var Le = Zu(), je = o(Le);
                  S(() => oe(je, t(ce).badge)), i(xe, Le);
                };
                b(Oe, (xe) => {
                  t(ce).badge && xe(Me);
                });
              }
              Re(me, (xe, Le) => ut?.(xe, Le), () => ({ enabled: !t(ce).disabled, strength: 0.1 })), S(() => {
                ye(me, "href", t(ce).href), z(me, 1, `block px-4 py-2 text-sm ${t(x).item ?? ""} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       ${t(ce).disabled ? "opacity-50 cursor-not-allowed" : ""}`), oe(Ne, ` ${t(ce).label ?? ""} `);
              }), i(be, me);
            }), Re(Ce, (be, ce) => kt?.(be, ce), () => ({ blur: "xl", opacity: "strong" })), S(() => z(Ce, 1, `absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       ${t(x).dropdown ?? ""}`)), tt(1, Ce, () => gt, () => ({ direction: "up", duration: 200 })), i(de, Ce);
          };
          b(se, (de) => {
            t(f).has(t(m).id) && de(ne);
          });
        }
        S(
          (de, Ce) => {
            z(le, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(m).id === h() ? t(x).activeItem : t(x).item) ?? ""}
							       ${t(m).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), le.disabled = t(m).disabled, ye(le, "aria-expanded", de), oe(te, ` ${t(m).label ?? ""} `), z(ee, 0, `ml-1 w-4 h-4 transition-transform duration-200
								       ${Ce ?? ""}`);
          },
          [
            () => t(f).has(t(m).id),
            () => t(f).has(t(m).id) ? "rotate-180" : ""
          ]
        ), i(ae, Y);
      }, ve = (ae) => {
        var Y = lf();
        Y.__click = [tf, B, m], Y.__keydown = [rf, j, m];
        var le = o(Y);
        {
          var re = (se) => {
            var ne = af(), de = o(ne);
            S(() => oe(de, t(m).icon)), i(se, ne);
          };
          b(le, (se) => {
            t(m).icon && se(re);
          });
        }
        var E = u(le), te = u(E);
        {
          var J = (se) => {
            var ne = nf(), de = o(ne);
            S(() => oe(de, t(m).badge)), i(se, ne);
          };
          b(te, (se) => {
            t(m).badge && se(J);
          });
        }
        var Q = u(te, 2);
        {
          var ee = (se) => {
            var ne = of();
            i(se, ne);
          };
          b(Q, (se) => {
            t(m).external && se(ee);
          });
        }
        Re(Y, (se, ne) => ut?.(se, ne), () => ({ enabled: !t(m).disabled, strength: 0.1 })), S(() => {
          ye(Y, "href", t(m).href), z(Y, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(m).id === h() ? t(x).activeItem : t(x).item) ?? ""}
							       ${t(m).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ye(Y, "aria-current", t(m).id === h() ? "page" : void 0), oe(E, ` ${t(m).label ?? ""} `);
        }), i(ae, Y);
      };
      b(ue, (ae) => {
        t(m).children ? ae(fe) : ae(ve, !1);
      });
    }
    i(_, ie);
  });
  var C = u(R, 2), k = o(C);
  k.__click = [Bu, y, N];
  var M = o(k);
  {
    var p = (_) => {
      var m = df();
      i(_, m);
    }, q = (_) => {
      var m = cf();
      i(_, m);
    };
    b(M, (_) => {
      t(y) ? _(p) : _(q, !1);
    });
  }
  Re(k, (_, m) => ut?.(_, m), () => ({ strength: 0.15 }));
  var W = u(A, 2);
  {
    var I = (_) => {
      var m = Ef(), ie = o(m);
      We(ie, 21, a, (ue) => ue.id, (ue, fe) => {
        var ve = Ae(), ae = we(ve);
        {
          var Y = (re) => {
            var E = xf(), te = o(E);
            te.__click = [vf, B, fe];
            var J = o(te), Q = o(J);
            {
              var ee = (me) => {
                var Ee = uf(), Be = o(Ee);
                S(() => oe(Be, t(fe).icon)), i(me, Ee);
              };
              b(Q, (me) => {
                t(fe).icon && me(ee);
              });
            }
            var se = u(Q), ne = u(se);
            {
              var de = (me) => {
                var Ee = ff(), Be = o(Ee);
                S(() => oe(Be, t(fe).badge)), i(me, Ee);
              };
              b(ne, (me) => {
                t(fe).badge && me(de);
              });
            }
            var Ce = u(J, 2), be = u(te, 2);
            {
              var ce = (me) => {
                var Ee = _f();
                We(Ee, 21, () => t(fe).children, (Be) => Be.id, (Be, Ne) => {
                  var Oe = mf();
                  Oe.__click = [bf, B, Ne];
                  var Me = o(Oe);
                  {
                    var xe = (pe) => {
                      var Ie = gf(), ge = o(Ie);
                      S(() => oe(ge, t(Ne).icon)), i(pe, Ie);
                    };
                    b(Me, (pe) => {
                      t(Ne).icon && pe(xe);
                    });
                  }
                  var Le = u(Me), je = u(Le);
                  {
                    var he = (pe) => {
                      var Ie = hf(), ge = o(Ie);
                      S(() => oe(ge, t(Ne).badge)), i(pe, Ie);
                    };
                    b(je, (pe) => {
                      t(Ne).badge && pe(he);
                    });
                  }
                  S(() => {
                    ye(Oe, "href", t(Ne).href), z(Oe, 1, `flex items-center px-3 py-2 rounded-md text-sm
											       ${t(x).item ?? ""} hover:bg-white/10 transition-colors
											       ${t(Ne).disabled ? "opacity-50 cursor-not-allowed" : ""}`), oe(Le, ` ${t(Ne).label ?? ""} `);
                  }), i(Be, Oe);
                }), tt(1, Ee, () => gt, () => ({ direction: "down", duration: 150 })), i(me, Ee);
              };
              b(be, (me) => {
                t(f).has(t(fe).id) && me(ce);
              });
            }
            S(
              (me, Ee) => {
                z(te, 1, `w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       ${(t(fe).id === h() ? t(x).activeItem : t(x).item) ?? ""}
								       ${t(fe).disabled ? "opacity-50 cursor-not-allowed" : ""}`), te.disabled = t(fe).disabled, ye(te, "aria-expanded", me), oe(se, ` ${t(fe).label ?? ""} `), z(Ce, 0, `w-5 h-5 transition-transform duration-200
									       ${Ee ?? ""}`);
              },
              [
                () => t(f).has(t(fe).id),
                () => t(f).has(t(fe).id) ? "rotate-180" : ""
              ]
            ), i(re, E);
          }, le = (re) => {
            var E = Cf();
            E.__click = [pf, B, fe];
            var te = o(E);
            {
              var J = (Ce) => {
                var be = wf(), ce = o(be);
                S(() => oe(ce, t(fe).icon)), i(Ce, be);
              };
              b(te, (Ce) => {
                t(fe).icon && Ce(J);
              });
            }
            var Q = u(te), ee = u(Q);
            {
              var se = (Ce) => {
                var be = yf(), ce = o(be);
                S(() => oe(ce, t(fe).badge)), i(Ce, be);
              };
              b(ee, (Ce) => {
                t(fe).badge && Ce(se);
              });
            }
            var ne = u(ee, 2);
            {
              var de = (Ce) => {
                var be = kf();
                i(Ce, be);
              };
              b(ne, (Ce) => {
                t(fe).external && Ce(de);
              });
            }
            S(() => {
              ye(E, "href", t(fe).href), z(E, 1, `flex items-center px-3 py-2 rounded-md text-base font-medium
							       ${(t(fe).id === h() ? t(x).activeItem : t(x).item) ?? ""}
							       ${t(fe).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ye(E, "aria-current", t(fe).id === h() ? "page" : void 0), oe(Q, ` ${t(fe).label ?? ""} `);
            }), i(re, E);
          };
          b(ae, (re) => {
            t(fe).children ? re(Y) : re(le, !1);
          });
        }
        i(ue, ve);
      }), S(() => z(m, 1, `md:hidden border-t ${t(x).nav ?? ""}`)), tt(1, m, () => gt, () => ({ direction: "down", duration: 200 })), i(_, m);
    };
    b(W, (_) => {
      t(y) && _(I);
    });
  }
  rt(H, (_) => T = _, () => T), Re(H, (_, m) => kt?.(_, m), () => d() ? { blur: "xl", opacity: "medium" } : void 0), S(() => {
    z(H, 1, $(t(P))), z(A, 1, $(t(F))), z(k, 1, `p-2 rounded-md ${t(x).mobileButton ?? ""} hover:bg-white/10 transition-colors`), ye(k, "aria-expanded", t(y));
  }), i(r, H), Qe();
}
ft(["click", "keydown"]);
var Tf = /* @__PURE__ */ v('<div class="relative"><!> <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">🔍</button></div>'), Mf = /* @__PURE__ */ v('<span class="text-sm text-gray-400"> </span>'), Af = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><!> <!></div> <div class="flex items-center gap-2"><!></div></div>'), If = (r, e) => {
  const a = r.target;
  e(a.checked);
}, Pf = /* @__PURE__ */ v('<th><input type="checkbox" class="rounded bg-transparent border-current"/></th>'), Lf = (r, e, a) => t(e).sortable && a(t(e)), zf = /* @__PURE__ */ v('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), Df = /* @__PURE__ */ v('<th><div class="flex items-center gap-2"><span> </span> <!></div></th>'), Rf = /* @__PURE__ */ v("<th>Actions</th>"), Nf = /* @__PURE__ */ v('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), Of = /* @__PURE__ */ v('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), jf = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, qf = (r) => r.stopPropagation(), Bf = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded bg-transparent border-current"/></td>'), Ff = (r, e, a, n, l) => e() && t(a).editable && n(t(l), t(a)), Hf = (r, e, a) => {
  r.key === "Enter" && e(), r.key === "Escape" && a();
}, Vf = /* @__PURE__ */ v('<input class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"/>'), Gf = /* @__PURE__ */ v("<td><!></td>"), Uf = /* @__PURE__ */ v('<span class="mr-1"> </span>'), Wf = /* @__PURE__ */ v("<!> ", 1), Yf = /* @__PURE__ */ v('<td><div class="flex items-center gap-1"></div></td>'), Kf = /* @__PURE__ */ v("<tr><!><!><!></tr>"), Xf = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><span class="text-sm text-gray-400"> </span></div> <div class="flex items-center gap-2"><!> <!> <!></div></div>'), Qf = /* @__PURE__ */ v('<div><!> <div class="overflow-auto"><table class="w-full"><thead><tr><!><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
function C1(r, e) {
  Xe(e, !0);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), c = s(e, "loading", 3, !1);
  s(e, "virtualScrolling", 3, !1), s(e, "rowHeight", 3, 60);
  const g = s(e, "maxHeight", 3, "600px"), w = s(e, "sortBy", 3, ""), O = s(e, "sortOrder", 3, "asc"), h = s(e, "filters", 19, () => []), L = s(e, "searchable", 3, !0), N = s(e, "searchPlaceholder", 3, "Search..."), T = s(e, "selectable", 3, !1), y = s(e, "multiSelect", 3, !1), f = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), G = s(e, "editable", 3, !1), Z = s(e, "pagination", 3, !0), x = s(e, "pageSize", 3, 10), B = s(e, "currentPage", 3, 1), D = s(e, "stickyHeader", 3, !0);
  s(e, "resizableColumns", 3, !1), s(e, "reorderableColumns", 3, !1);
  const j = s(e, "exportable", 3, !1), P = s(e, "actions", 19, () => []), F = s(e, "emptyMessage", 3, "No data available"), H = s(e, "class", 3, ""), A = At();
  let U = /* @__PURE__ */ ke("");
  const X = ot(h());
  let R = /* @__PURE__ */ ke(ot(w())), C = /* @__PURE__ */ ke(ot(O())), k = /* @__PURE__ */ ke(ot(f())), M = /* @__PURE__ */ ke(null), p = /* @__PURE__ */ ke("");
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
      container: `bg-black/90 border-${ze.terminal.green}`,
      header: `bg-${ze.terminal.green}/10 border-${ze.terminal.green}`,
      headerCell: `text-${ze.terminal.green} border-${ze.terminal.green}/30`,
      row: `border-${ze.terminal.green}/20 text-${ze.terminal.green}`,
      rowHover: `hover:bg-${ze.terminal.green}/5`,
      rowSelected: `bg-${ze.terminal.green}/10`,
      cell: `text-${ze.terminal.green}/90 border-${ze.terminal.green}/20`,
      toolbar: `bg-${ze.terminal.green}/5 border-${ze.terminal.green}/30`,
      pagination: `bg-${ze.terminal.green}/5 border-${ze.terminal.green}/30`
    }
  }, W = {
    sm: { cell: "px-2 py-1 text-xs", header: "px-2 py-2 text-xs" },
    md: { cell: "px-3 py-2 text-sm", header: "px-3 py-3 text-sm" },
    lg: { cell: "px-4 py-3 text-base", header: "px-4 py-4 text-base" }
  }, I = /* @__PURE__ */ Se(() => q[l()]), _ = /* @__PURE__ */ Se(() => W[d()]), m = /* @__PURE__ */ Se(() => () => {
    let ge = n();
    if (t(U).trim()) {
      const _e = t(U).toLowerCase();
      ge = ge.filter((De) => a().some((Te) => String(De[Te.key] || "").toLowerCase().includes(_e)));
    }
    for (const _e of X)
      ge = ge.filter((De) => {
        const Te = De[_e.column];
        switch (_e.operator) {
          case "equals":
            return Te === _e.value;
          case "contains":
            return String(Te).toLowerCase().includes(String(_e.value).toLowerCase());
          case "startsWith":
            return String(Te).toLowerCase().startsWith(String(_e.value).toLowerCase());
          case "endsWith":
            return String(Te).toLowerCase().endsWith(String(_e.value).toLowerCase());
          case "gt":
            return Number(Te) > Number(_e.value);
          case "lt":
            return Number(Te) < Number(_e.value);
          case "gte":
            return Number(Te) >= Number(_e.value);
          case "lte":
            return Number(Te) <= Number(_e.value);
          default:
            return !0;
        }
      });
    return t(R) && a().find((De) => De.key === t(R))?.sortable && ge.sort((De, Te) => {
      const qe = De[t(R)], Fe = Te[t(R)];
      if (qe === Fe) return 0;
      const Ve = t(C) === "asc";
      return qe < Fe ? Ve ? -1 : 1 : Ve ? 1 : -1;
    }), ge;
  }), ie = /* @__PURE__ */ Se(() => Math.ceil((e.totalRows ?? t(m).length) / x())), ue = /* @__PURE__ */ Se(() => () => {
    if (!Z()) return t(m);
    const ge = (B() - 1) * x();
    return t(m).slice(ge, ge + x());
  });
  function fe(ge) {
    ge.sortable && (t(R) === ge.key ? K(C, t(C) === "asc" ? "desc" : "asc", !0) : (K(R, ge.key, !0), K(C, "asc")), A("sort", { column: ge.key, order: t(C) }));
  }
  function ve() {
    A("search", { query: t(U) });
  }
  function ae(ge, _e) {
    A("rowClick", { row: ge, index: _e });
  }
  function Y(ge, _e) {
    y() ? _e ? t(k).add(ge.id) : t(k).delete(ge.id) : K(k, _e ? /* @__PURE__ */ new Set([ge.id]) : /* @__PURE__ */ new Set(), !0), K(k, new Set(t(k)), !0), A("rowSelect", { row: ge, selected: _e });
  }
  function le(ge) {
    ge ? K(k, new Set(t(ue).map((_e) => _e.id)), !0) : K(k, /* @__PURE__ */ new Set(), !0), A("selectAll", { selected: ge });
  }
  function re(ge, _e) {
    !G() || !_e.editable || (K(M, { rowId: ge.id, column: _e.key }, !0), K(p, String(ge[_e.key] || ""), !0));
  }
  function E() {
    if (!t(M)) return;
    const ge = t(ue).find((qe) => qe.id === t(M).rowId);
    if (!ge) return;
    const _e = a().find((qe) => qe.key === t(M).column);
    if (!_e) return;
    const De = ge[_e.key];
    let Te = t(p);
    switch (_e.type) {
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
    if (_e.validation) {
      const qe = _e.validation(Te);
      if (qe) {
        alert(qe);
        return;
      }
    }
    A("cellEdit", { row: ge, column: _e.key, oldValue: De, newValue: Te }), K(M, null), K(p, "");
  }
  function te() {
    K(M, null), K(p, "");
  }
  function J(ge, _e, De) {
    if (ge.render)
      return ge.render(_e, De, ge);
    if (ge.formatter)
      return ge.formatter(_e, De);
    switch (ge.type) {
      case "boolean":
        return _e ? "✓" : "✗";
      case "date":
        return _e instanceof Date ? _e.toLocaleDateString() : String(_e || "");
      case "number":
        return typeof _e == "number" ? _e.toLocaleString() : String(_e || "");
      default:
        return String(_e || "");
    }
  }
  const Q = /* @__PURE__ */ Se(() => t(ue).length > 0 && t(ue).every((ge) => t(k).has(ge.id))), ee = /* @__PURE__ */ Se(() => V("rounded-lg border overflow-hidden font-mono", t(I).container, H()));
  var se = Qf(), ne = o(se);
  {
    var de = (ge) => {
      var _e = Af(), De = o(_e), Te = o(De);
      {
        var qe = ($e) => {
          var at = Tf(), nt = o(at);
          bd(nt, {
            get placeholder() {
              return N();
            },
            size: "sm",
            get variant() {
              return l();
            },
            class: "w-64",
            onkeydown: (Pe) => {
              Pe.key === "Enter" && ve();
            },
            get value() {
              return t(U);
            },
            set value(Pe) {
              K(U, Pe, !0);
            }
          });
          var Ue = u(nt, 2);
          Ue.__click = ve, i($e, at);
        };
        b(Te, ($e) => {
          L() && $e(qe);
        });
      }
      var Fe = u(Te, 2);
      {
        var Ve = ($e) => {
          var at = Mf(), nt = o(at);
          S(() => oe(nt, `${t(k).size ?? ""} selected`)), i($e, at);
        };
        b(Fe, ($e) => {
          t(k).size > 0 && $e(Ve);
        });
      }
      var Ge = u(De, 2), Ke = o(Ge);
      {
        var Je = ($e) => {
          er($e, {
            size: "sm",
            get variant() {
              return l();
            },
            onclick: () => A("export", { format: "csv" }),
            children: (at, nt) => {
              var Ue = Et("📥 Export");
              i(at, Ue);
            },
            $$slots: { default: !0 }
          });
        };
        b(Ke, ($e) => {
          j() && $e(Je);
        });
      }
      S(($e) => z(_e, 1, $e), [
        () => $(V("px-4 py-3 border-b flex items-center justify-between", t(I).toolbar))
      ]), i(ge, _e);
    };
    b(ne, (ge) => {
      (L() || j() || P().length > 0) && ge(de);
    });
  }
  var Ce = u(ne, 2), be = o(Ce), ce = o(be), me = o(ce), Ee = o(me);
  {
    var Be = (ge) => {
      var _e = Pf(), De = o(_e);
      De.__change = [If, le], S(
        (Te) => {
          z(_e, 1, Te), Qt(De, t(Q));
        },
        [
          () => $(V(t(_).header, t(I).headerCell, "w-12"))
        ]
      ), i(ge, _e);
    };
    b(Ee, (ge) => {
      T() && ge(Be);
    });
  }
  var Ne = u(Ee);
  We(Ne, 17, a, (ge) => ge.key, (ge, _e) => {
    var De = Df();
    De.__click = [Lf, _e, fe];
    var Te = o(De), qe = o(Te), Fe = o(qe), Ve = u(qe, 2);
    {
      var Ge = (Ke) => {
        var Je = zf(), $e = o(Je), at = u($e, 2);
        S(
          (nt, Ue) => {
            z($e, 0, nt), z(at, 0, Ue);
          },
          [
            () => $(V("w-3 h-3 transition-colors", t(R) === t(_e).key && t(C) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => $(V("w-3 h-3 -mt-1 transition-colors", t(R) === t(_e).key && t(C) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), i(Ke, Je);
      };
      b(Ve, (Ke) => {
        t(_e).sortable && Ke(Ge);
      });
    }
    Re(De, (Ke, Je) => ut?.(Ke, Je), () => ({ enabled: t(_e).sortable, strength: 0.05 })), S(
      (Ke) => {
        z(De, 1, Ke), mt(De, t(_e).width ? `width: ${t(_e).width}` : void 0), oe(Fe, t(_e).label);
      },
      [
        () => $(V(t(_).header, t(I).headerCell, "font-semibold text-left", t(_e).align && `text-${t(_e).align}`, t(_e).sortable && "cursor-pointer select-none"))
      ]
    ), i(ge, De);
  });
  var Oe = u(Ne);
  {
    var Me = (ge) => {
      var _e = Rf();
      S((De) => z(_e, 1, De), [
        () => $(V(t(_).header, t(I).headerCell, "w-32"))
      ]), i(ge, _e);
    };
    b(Oe, (ge) => {
      P().length > 0 && ge(Me);
    });
  }
  var xe = u(ce), Le = o(xe);
  {
    var je = (ge) => {
      var _e = Nf(), De = o(_e);
      S(
        (Te) => {
          ye(De, "colspan", a().length + (T() ? 1 : 0) + (P().length > 0 ? 1 : 0)), z(De, 1, Te);
        },
        [
          () => $(V(t(_).cell, t(I).cell, "text-center"))
        ]
      ), i(ge, _e);
    }, he = (ge) => {
      var _e = Ae(), De = we(_e);
      {
        var Te = (Fe) => {
          var Ve = Of(), Ge = o(Ve), Ke = o(Ge), Je = u(o(Ke), 2), $e = o(Je);
          S(
            (at) => {
              ye(Ge, "colspan", a().length + (T() ? 1 : 0) + (P().length > 0 ? 1 : 0)), z(Ge, 1, at), oe($e, F());
            },
            [
              () => $(V(t(_).cell, t(I).cell, "text-center text-gray-400"))
            ]
          ), i(Fe, Ve);
        }, qe = (Fe) => {
          var Ve = Ae(), Ge = we(Ve);
          We(Ge, 19, () => t(ue), (Ke) => Ke.id, (Ke, Je, $e) => {
            const at = /* @__PURE__ */ Se(() => t(k).has(t(Je).id));
            var nt = Kf();
            nt.__click = () => ae(t(Je), t($e));
            var Ue = o(nt);
            {
              var Pe = (it) => {
                var ht = Bf(), Ct = o(ht);
                Ct.__change = [jf, Y, Je], Ct.__click = [qf], S(
                  (pt) => {
                    z(ht, 1, pt), Qt(Ct, t(at));
                  },
                  [
                    () => $(V(t(_).cell, t(I).cell))
                  ]
                ), i(it, ht);
              };
              b(Ue, (it) => {
                T() && it(Pe);
              });
            }
            var He = u(Ue);
            We(He, 17, a, (it) => it.key, (it, ht) => {
              var Ct = Gf();
              Ct.__dblclick = [Ff, G, ht, re, Je];
              var pt = o(Ct);
              {
                var _t = (Ft) => {
                  var ir = Vf();
                  ir.__keydown = [Hf, E, te], qt("blur", ir, E), nr(ir, () => t(p), (pr) => K(p, pr)), i(Ft, ir);
                }, Nt = (Ft) => {
                  var ir = Ae(), pr = we(ir);
                  mr(pr, () => J(t(ht), t(Je)[t(ht).key], t(Je))), i(Ft, ir);
                };
                b(pt, (Ft) => {
                  t(M)?.rowId === t(Je).id && t(M)?.column === t(ht).key ? Ft(_t) : Ft(Nt, !1);
                });
              }
              S((Ft) => z(Ct, 1, Ft), [
                () => $(V(t(_).cell, t(I).cell, t(ht).align && `text-${t(ht).align}`))
              ]), i(it, Ct);
            });
            var et = u(He);
            {
              var dt = (it) => {
                var ht = Yf(), Ct = o(ht);
                We(Ct, 21, P, vt, (pt, _t) => {
                  var Nt = Ae(), Ft = we(Nt);
                  {
                    var ir = (pr) => {
                      {
                        let ro = /* @__PURE__ */ Se(() => t(_t).variant || "secondary");
                        er(pr, {
                          size: "sm",
                          get variant() {
                            return t(ro);
                          },
                          onclick: (Ra) => {
                            Ra.stopPropagation(), A("actionClick", { row: t(Je), action: t(_t).action });
                          },
                          children: (Ra, Fm) => {
                            var gn = Wf(), hn = we(gn);
                            {
                              var ao = (Na) => {
                                var mn = Uf(), io = o(mn);
                                S(() => oe(io, t(_t).icon)), i(Na, mn);
                              };
                              b(hn, (Na) => {
                                t(_t).icon && Na(ao);
                              });
                            }
                            var no = u(hn);
                            S(() => oe(no, ` ${t(_t).label ?? ""}`)), i(Ra, gn);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    };
                    b(Ft, (pr) => {
                      (!t(_t).show || t(_t).show(t(Je))) && pr(ir);
                    });
                  }
                  i(pt, Nt);
                }), S((pt) => z(ht, 1, pt), [
                  () => $(V(t(_).cell, t(I).cell))
                ]), i(it, ht);
              };
              b(et, (it) => {
                P().length > 0 && it(dt);
              });
            }
            S((it) => z(nt, 1, it), [
              () => $(V(t(I).row, t(I).rowHover, t(at) && t(I).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), tt(1, nt, () => gt, () => ({ direction: "up", duration: 100, delay: t($e) * 20 })), i(Ke, nt);
          }), i(Fe, Ve);
        };
        b(
          De,
          (Fe) => {
            t(ue).length === 0 ? Fe(Te) : Fe(qe, !1);
          },
          !0
        );
      }
      i(ge, _e);
    };
    b(Le, (ge) => {
      c() ? ge(je) : ge(he, !1);
    });
  }
  Re(Ce, (ge, _e) => kt?.(ge, _e), () => ({ blur: "sm", opacity: "subtle" }));
  var pe = u(Ce, 2);
  {
    var Ie = (ge) => {
      var _e = Xf(), De = o(_e), Te = o(De), qe = o(Te), Fe = u(De, 2), Ve = o(Fe);
      {
        let Je = /* @__PURE__ */ Se(() => B() === 1);
        er(Ve, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(Je);
          },
          onclick: () => A("pageChange", { page: B() - 1 }),
          children: ($e, at) => {
            var nt = Et("Previous");
            i($e, nt);
          },
          $$slots: { default: !0 }
        });
      }
      var Ge = u(Ve, 2);
      We(
        Ge,
        17,
        () => Array.from({ length: Math.min(5, t(ie)) }, (Je, $e) => Math.max(1, Math.min(t(ie) - 4, B() - 2)) + $e),
        vt,
        (Je, $e) => {
          {
            let at = /* @__PURE__ */ Se(() => t($e) === B() ? "primary" : "secondary");
            er(Je, {
              size: "sm",
              get variant() {
                return t(at);
              },
              onclick: () => A("pageChange", { page: t($e) }),
              children: (nt, Ue) => {
                var Pe = Et();
                S(() => oe(Pe, t($e))), i(nt, Pe);
              },
              $$slots: { default: !0 }
            });
          }
        }
      );
      var Ke = u(Ge, 2);
      {
        let Je = /* @__PURE__ */ Se(() => B() === t(ie));
        er(Ke, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(Je);
          },
          onclick: () => A("pageChange", { page: B() + 1 }),
          children: ($e, at) => {
            var nt = Et("Next");
            i($e, nt);
          },
          $$slots: { default: !0 }
        });
      }
      S(
        (Je, $e) => {
          z(_e, 1, Je), oe(qe, `Showing ${(B() - 1) * x() + 1} to ${$e ?? ""} of ${e.totalRows ?? t(m).length ?? ""} entries`);
        },
        [
          () => $(V("px-4 py-3 border-t flex items-center justify-between", t(I).pagination)),
          () => Math.min(B() * x(), e.totalRows ?? t(m).length)
        ]
      ), i(ge, _e);
    };
    b(pe, (ge) => {
      Z() && t(ie) > 1 && ge(Ie);
    });
  }
  S(
    (ge) => {
      z(se, 1, $(t(ee))), mt(Ce, g() ? `max-height: ${g()}` : void 0), z(ce, 1, ge);
    },
    [
      () => $(V(t(I).header, D() && "sticky top-0 z-10"))
    ]
  ), i(r, se), Qe();
}
ft(["click", "change", "dblclick", "keydown"]);
function Zf(r, e, a, n, l) {
  if (t(e))
    a(a().filter((d) => !t(n).some((c) => c.id === d)));
  else {
    const d = t(n).map((c) => c.id);
    a([.../* @__PURE__ */ new Set([...a(), ...d])]);
  }
  l("selectionChange", { selectedRows: a() });
}
function Jf(r, e, a, n, l) {
  e({}), K(a, ""), n(1), l("filter", { filterConfig: {} });
}
var $f = (r, e) => K(e, !t(e)), e0 = /* @__PURE__ */ v('<button class="text-sm text-blue-400 hover:text-blue-300 transition-colors">Clear Filters</button>'), t0 = /* @__PURE__ */ v('<div class="text-sm opacity-70"> </div>'), r0 = (r, e, a) => e(t(a).key, r.currentTarget.value), a0 = /* @__PURE__ */ v('<div><label class="block text-xs font-medium mb-1 opacity-70"> </label> <input/></div>'), n0 = /* @__PURE__ */ v('<div><div class="grid gap-4"></div></div>'), i0 = /* @__PURE__ */ v('<th><input type="checkbox" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"/></th>'), o0 = (r, e, a) => t(e).sortable && a(t(e).key), l0 = /* @__PURE__ */ v('<div class="w-3.5 h-3.5 opacity-30"><!> <!></div>'), s0 = /* @__PURE__ */ v('<th><div class="flex items-center gap-2"><span class="font-semibold"> </span> <!></div></th>'), d0 = /* @__PURE__ */ v('<tr><td class="text-center py-8"><div class="inline-flex items-center gap-2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Loading...</div></td></tr>'), c0 = /* @__PURE__ */ v('<tr><td class="text-center py-8 opacity-60"> </td></tr>'), v0 = (r, e, a) => e(t(a).id), u0 = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/50"/></td>'), f0 = /* @__PURE__ */ v("<td><!></td>"), b0 = /* @__PURE__ */ v("<tr><!><!></tr>"), g0 = (r, e) => e(Math.max(1, e() - 1)), h0 = (r, e, a) => e(Math.min(t(a), e() + 1)), m0 = /* @__PURE__ */ v('<div><div class="text-sm opacity-70"> </div> <div class="flex items-center gap-2"><button>Previous</button> <span class="px-3 py-1 text-sm"> </span> <button>Next</button></div></div>'), _0 = /* @__PURE__ */ v('<div><div><div class="flex items-center gap-4"><div class="relative"><!> <input placeholder="Search..."/></div> <button title="Toggle Filters"><!></button> <!></div> <!></div> <!> <div><table><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
function E1(r, e) {
  Xe(e, !0);
  let a = s(e, "sortConfig", 15), n = s(e, "filterConfig", 15), l = s(e, "loading", 3, !1), d = s(e, "selectable", 3, !1), c = s(e, "selectedRows", 31, () => ot([])), g = s(e, "striped", 3, !1), w = s(e, "bordered", 3, !0), O = s(e, "hover", 3, !0), h = s(e, "size", 3, "md"), L = s(e, "variant", 3, "glass"), N = s(e, "stickyHeader", 3, !1);
  s(e, "virtualScroll", 3, !1);
  let T = s(e, "pageSize", 3, 10), y = s(e, "currentPage", 15, 1), f = s(e, "showPagination", 3, !1), G = s(e, "emptyMessage", 3, "No data available"), Z = s(e, "class", 3, ""), x = /* @__PURE__ */ ct(e, [
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
  const B = At();
  let D = /* @__PURE__ */ ke(""), j = /* @__PURE__ */ ke(!1), P;
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
  }, A = F[h()], U = H[L()], X = /* @__PURE__ */ Se(() => () => {
    let he = [...e.data];
    if (t(D).trim()) {
      const pe = t(D).toLowerCase();
      he = he.filter((Ie) => e.columns.some((ge) => String(Ie[ge.key]).toLowerCase().includes(pe)));
    }
    return n() && (he = he.filter((pe) => Object.entries(n()).every(([Ie, ge]) => {
      if (!ge) return !0;
      const _e = String(pe[Ie]).toLowerCase(), De = String(ge).toLowerCase();
      return _e.includes(De);
    }))), he;
  }), R = /* @__PURE__ */ Se(() => () => {
    if (!a()) return t(X);
    const { key: he, direction: pe } = a();
    return [...t(X)].sort((Ie, ge) => {
      const _e = Ie[he], De = ge[he];
      let Te = 0;
      return _e < De && (Te = -1), _e > De && (Te = 1), pe === "desc" ? -Te : Te;
    });
  }), C = /* @__PURE__ */ Se(() => () => {
    if (!f()) return t(R);
    const he = (y() - 1) * T(), pe = he + T();
    return t(R).slice(he, pe);
  }), k = /* @__PURE__ */ Se(() => () => f() ? Math.ceil((e.totalRows || t(R).length) / T()) : 1), M = /* @__PURE__ */ Se(() => () => !d() || t(C).length === 0 ? !1 : t(C).every((he) => c().includes(he.id))), p = /* @__PURE__ */ Se(() => () => {
    if (!d() || t(C).length === 0) return !1;
    const he = t(C).filter((pe) => c().includes(pe.id)).length;
    return he > 0 && he < t(C).length;
  });
  function q(he) {
    e.columns.find((Ie) => Ie.key === he)?.sortable && (a()?.key === he ? a({
      key: he,
      direction: a().direction === "asc" ? "desc" : "asc"
    }) : a({ key: he, direction: "asc" }), B("sort", { sortConfig: a() }));
  }
  function W(he) {
    c().includes(he) ? c(c().filter((pe) => pe !== he)) : c([...c(), he]), B("selectionChange", { selectedRows: c() });
  }
  function I(he, pe) {
    n() || n({}), pe.trim() ? n(n()[he] = pe, !0) : delete n()[he], y(1), B("filter", { filterConfig: n() });
  }
  function _(he) {
    return !a() || a().key !== he ? null : a().direction === "asc" ? pn : Kr;
  }
  function m(he) {
    switch (he) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  }
  function ie(he, pe) {
    const Ie = he[pe.key];
    return pe.render ? pe.render(Ie, he) : Ie;
  }
  var ue = _0();
  Ze(ue, (he) => ({ class: he, ...x }), [() => V("w-full", Z())], void 0, "svelte-1tqav43");
  var fe = o(ue), ve = o(fe), ae = o(ve), Y = o(ae);
  Yn(Y, {
    size: 16,
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
  });
  var le = u(Y, 2), re = u(ae, 2);
  re.__click = [$f, j];
  var E = o(re);
  bo(E, { size: 16 });
  var te = u(re, 2);
  {
    var J = (he) => {
      var pe = e0();
      pe.__click = [
        Jf,
        n,
        D,
        y,
        B
      ], i(he, pe);
    };
    b(te, (he) => {
      (Object.keys(n() || {}).length > 0 || t(D)) && he(J);
    });
  }
  var Q = u(ve, 2);
  {
    var ee = (he) => {
      var pe = t0(), Ie = o(pe);
      S(() => oe(Ie, `${c().length ?? ""} of ${(e.totalRows || t(R).length) ?? ""} selected`)), i(he, pe);
    };
    b(Q, (he) => {
      d() && c().length > 0 && he(ee);
    });
  }
  var se = u(fe, 2);
  {
    var ne = (he) => {
      var pe = n0(), Ie = o(pe);
      We(Ie, 21, () => e.columns.filter((ge) => ge.filterable), vt, (ge, _e) => {
        var De = a0(), Te = o(De), qe = o(Te), Fe = u(Te, 2);
        Fe.__input = [r0, I, _e], S(
          (Ve, Ge) => {
            ye(Te, "for", `filter-${t(_e).key}`), oe(qe, t(_e).label), ye(Fe, "id", `filter-${t(_e).key}`), Bi(Fe, n()?.[t(_e).key] || ""), ye(Fe, "placeholder", Ve), z(Fe, 1, Ge, "svelte-1tqav43");
          },
          [
            () => `Filter by ${t(_e).label.toLowerCase()}...`,
            () => $(V("w-full px-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400/50"))
          ]
        ), i(ge, De);
      }), S(
        (ge, _e) => {
          z(pe, 1, ge, "svelte-1tqav43"), mt(Ie, `grid-template-columns: repeat(${_e ?? ""}, 1fr);`);
        },
        [
          () => $(V("p-4 border-b bg-white/5", U.header)),
          () => e.columns.filter((ge) => ge.filterable).length
        ]
      ), i(he, pe);
    };
    b(se, (he) => {
      t(j) && he(ne);
    });
  }
  var de = u(se, 2), Ce = o(de), be = o(Ce), ce = o(be), me = o(ce);
  {
    var Ee = (he) => {
      var pe = i0(), Ie = o(pe);
      Ie.__change = [
        Zf,
        M,
        c,
        C,
        B
      ], S(
        (ge) => {
          z(pe, 1, ge, "svelte-1tqav43"), Qt(Ie, t(M)), Ie.indeterminate = t(p);
        },
        [
          () => $(V("w-8", A.header, U.headerCell, w() && "border-r"))
        ]
      ), i(he, pe);
    };
    b(me, (he) => {
      d() && he(Ee);
    });
  }
  var Be = u(me);
  We(Be, 17, () => e.columns, vt, (he, pe) => {
    var Ie = s0();
    Ie.__click = [o0, pe, q];
    var ge = o(Ie), _e = o(ge), De = o(_e), Te = u(_e, 2);
    {
      var qe = (Fe) => {
        const Ve = /* @__PURE__ */ Se(() => _(t(pe).key));
        var Ge = Ae(), Ke = we(Ge);
        {
          var Je = (at) => {
            var nt = Ae(), Ue = we(nt);
            St(Ue, () => t(Ve), (Pe, He) => {
              He(Pe, { size: 14 });
            }), i(at, nt);
          }, $e = (at) => {
            var nt = l0(), Ue = o(nt);
            pn(Ue, { size: 14, class: "absolute" });
            var Pe = u(Ue, 2);
            Kr(Pe, { size: 14, class: "absolute" }), i(at, nt);
          };
          b(Ke, (at) => {
            t(Ve) ? at(Je) : at($e, !1);
          });
        }
        i(Fe, Ge);
      };
      b(Te, (Fe) => {
        t(pe).sortable && Fe(qe);
      });
    }
    S(
      (Fe) => {
        z(Ie, 1, Fe, "svelte-1tqav43"), mt(Ie, t(pe).width ? `width: ${t(pe).width}` : void 0), oe(De, t(pe).label);
      },
      [
        () => $(V(A.header, U.headerCell, m(t(pe).align), t(pe).sortable && "cursor-pointer hover:bg-white/5", w() && "border-r last:border-r-0", t(pe).headerClass))
      ]
    ), i(he, Ie);
  });
  var Ne = u(be), Oe = o(Ne);
  {
    var Me = (he) => {
      var pe = d0(), Ie = o(pe);
      S(() => ye(Ie, "colspan", e.columns.length + (d() ? 1 : 0))), i(he, pe);
    }, xe = (he) => {
      var pe = Ae(), Ie = we(pe);
      {
        var ge = (De) => {
          var Te = c0(), qe = o(Te), Fe = o(qe);
          S(() => {
            ye(qe, "colspan", e.columns.length + (d() ? 1 : 0)), oe(Fe, G());
          }), i(De, Te);
        }, _e = (De) => {
          var Te = Ae(), qe = we(Te);
          We(qe, 19, () => t(C), (Fe) => Fe.id, (Fe, Ve, Ge) => {
            var Ke = b0(), Je = o(Ke);
            {
              var $e = (nt) => {
                var Ue = u0(), Pe = o(Ue);
                Pe.__change = [v0, W, Ve], S(
                  (He, et) => {
                    z(Ue, 1, He, "svelte-1tqav43"), Qt(Pe, et);
                  },
                  [
                    () => $(V(A.cell, U.cell, w() && "border-r")),
                    () => c().includes(t(Ve).id)
                  ]
                ), i(nt, Ue);
              };
              b(Je, (nt) => {
                d() && nt($e);
              });
            }
            var at = u(Je);
            We(at, 17, () => e.columns, vt, (nt, Ue) => {
              var Pe = f0(), He = o(Pe);
              mr(He, () => ie(t(Ve), t(Ue))), S((et) => z(Pe, 1, et, "svelte-1tqav43"), [
                () => $(V(A.cell, U.cell, m(t(Ue).align), w() && "border-r last:border-r-0", t(Ue).cellClass))
              ]), i(nt, Pe);
            }), S((nt) => z(Ke, 1, nt, "svelte-1tqav43"), [
              () => $(V(U.row, w() && "border-b last:border-b-0", O() && U.rowHover, g() && t(Ge) % 2 === 1 && "bg-white/5", c().includes(t(Ve).id) && U.rowSelected, "transition-colors duration-150"))
            ]), i(Fe, Ke);
          }), i(De, Te);
        };
        b(
          Ie,
          (De) => {
            t(C).length === 0 ? De(ge) : De(_e, !1);
          },
          !0
        );
      }
      i(he, pe);
    };
    b(Oe, (he) => {
      l() ? he(Me) : he(xe, !1);
    });
  }
  var Le = u(de, 2);
  {
    var je = (he) => {
      var pe = m0(), Ie = o(pe), ge = o(Ie), _e = u(Ie, 2), De = o(_e);
      De.__click = [g0, y];
      var Te = u(De, 2), qe = o(Te), Fe = u(Te, 2);
      Fe.__click = [h0, y, k], S(
        (Ve, Ge, Ke, Je) => {
          z(pe, 1, Ve, "svelte-1tqav43"), oe(ge, `Showing ${(y() - 1) * T() + 1} to ${Ge ?? ""}
				of ${(e.totalRows || t(R).length) ?? ""} results`), De.disabled = y() === 1, z(De, 1, Ke, "svelte-1tqav43"), oe(qe, `Page ${y() ?? ""} of ${t(k) ?? ""}`), Fe.disabled = y() === t(k), z(Fe, 1, Je, "svelte-1tqav43");
        },
        [
          () => $(V("flex items-center justify-between p-4 border-t rounded-b-lg", U.header)),
          () => Math.min(y() * T(), e.totalRows || t(R).length),
          () => $(V("px-3 py-1 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", "disabled:opacity-50 disabled:cursor-not-allowed")),
          () => $(V("px-3 py-1 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", "disabled:opacity-50 disabled:cursor-not-allowed"))
        ]
      ), i(he, pe);
    };
    b(Le, (he) => {
      f() && t(k) > 1 && he(je);
    });
  }
  rt(ue, (he) => P = he, () => P), S(
    (he, pe, Ie, ge, _e, De, Te) => {
      z(fe, 1, he, "svelte-1tqav43"), z(le, 1, pe, "svelte-1tqav43"), z(re, 1, Ie, "svelte-1tqav43"), z(de, 1, ge, "svelte-1tqav43"), z(Ce, 1, _e, "svelte-1tqav43"), z(be, 1, De, "svelte-1tqav43"), z(Ne, 1, Te, "svelte-1tqav43");
    },
    [
      () => $(V("flex items-center justify-between p-4 border-b rounded-t-lg", U.header)),
      () => $(V("pl-9 pr-3 py-2 rounded border bg-white/5 border-white/10 text-white placeholder-white/50 transition-colors", "focus:outline-none focus:ring-2 focus:ring-blue-400/50")),
      () => $(V("p-2 rounded border transition-colors", "bg-white/5 border-white/10 text-white hover:bg-white/10", t(j) && "bg-blue-500/20 border-blue-400/40")),
      () => $(V("overflow-x-auto", N() && "max-h-96 overflow-y-auto")),
      () => $(V("w-full", A.table)),
      () => $(V(U.header, N() && "sticky top-0 z-10")),
      () => $(V(U.table))
    ]
  ), nr(le, () => t(D), (he) => K(D, he)), i(r, ue), Qe();
}
ft(["click", "input", "change"]);
var x0 = (r, e) => {
  const a = r.target;
  e(a.checked);
}, p0 = /* @__PURE__ */ v('<div><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" aria-label="Select all items" class="rounded bg-transparent border-current"/> <span class="text-sm font-medium"> </span></label></div>'), w0 = /* @__PURE__ */ v('<div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div>'), y0 = /* @__PURE__ */ v('<div class="space-y-3"><div class="flex items-start gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div> <div></div></div></div></div>'), k0 = /* @__PURE__ */ v('<div><div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div></div>'), C0 = /* @__PURE__ */ v("<div><!></div>"), E0 = /* @__PURE__ */ v('<div><div class="text-4xl mb-3"> </div> <p class="text-lg font-medium"> </p></div>'), S0 = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, T0 = (r) => r.stopPropagation(), M0 = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current"/>'), A0 = /* @__PURE__ */ v("<img/>"), I0 = /* @__PURE__ */ v('<div><span class="text-2xl"> </span></div>'), P0 = /* @__PURE__ */ v("<span> </span>"), L0 = /* @__PURE__ */ v("<p> </p>"), z0 = (r, e, a, n) => e(t(a), t(n).action, r), D0 = /* @__PURE__ */ v('<span class="mr-1"> </span>'), R0 = /* @__PURE__ */ v("<button><!> </button>"), N0 = /* @__PURE__ */ v('<div class="flex items-center gap-2"></div>'), O0 = /* @__PURE__ */ v('<div class="flex items-center gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!></div>'), j0 = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, q0 = (r) => r.stopPropagation(), B0 = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), F0 = /* @__PURE__ */ v("<img/>"), H0 = /* @__PURE__ */ v('<div><span class="text-2xl"> </span></div>'), V0 = /* @__PURE__ */ v("<span> </span>"), G0 = /* @__PURE__ */ v("<p> </p>"), U0 = /* @__PURE__ */ v("<p> </p>"), W0 = /* @__PURE__ */ v("<span> </span>"), Y0 = /* @__PURE__ */ v('<div class="flex flex-wrap gap-3 mt-2"></div>'), K0 = (r, e, a, n) => e(t(a), t(n).action, r), X0 = /* @__PURE__ */ v('<span class="mr-1"> </span>'), Q0 = /* @__PURE__ */ v("<button><!> </button>"), Z0 = /* @__PURE__ */ v('<div class="flex flex-col gap-2"></div>'), J0 = /* @__PURE__ */ v('<div class="space-y-3"><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h3> </h3> <!></div> <!> <!> <!></div> <!></div></div>'), $0 = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, eb = (r) => r.stopPropagation(), tb = /* @__PURE__ */ v('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), rb = /* @__PURE__ */ v("<img/>"), ab = /* @__PURE__ */ v('<div><span class="text-3xl"> </span></div>'), nb = /* @__PURE__ */ v("<span> </span>"), ib = (r, e, a, n) => e(t(a), t(n).action, r), ob = /* @__PURE__ */ v('<span class="mr-1"> </span>'), lb = /* @__PURE__ */ v("<button><!> </button>"), sb = /* @__PURE__ */ v('<div class="flex items-center gap-2"></div>'), db = /* @__PURE__ */ v("<p> </p>"), cb = /* @__PURE__ */ v("<p> </p>"), vb = /* @__PURE__ */ v("<span> </span>"), ub = /* @__PURE__ */ v('<div class="flex flex-wrap gap-3"></div>'), fb = /* @__PURE__ */ v('<div><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!> <!> <!></div></div></div>'), bb = /* @__PURE__ */ v("<div><!></div>"), gb = /* @__PURE__ */ v('<div role="list" aria-label="Item list"><!> <div class="divide-y divide-gray-600"><!></div></div>');
function S1(r, e) {
  Xe(e, !0);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "layout", 3, "simple"), c = s(e, "selectable", 3, !1), g = s(e, "multiSelect", 3, !1), w = s(e, "selectedItems", 19, () => /* @__PURE__ */ new Set()), O = s(e, "loading", 3, !1), h = s(e, "loadingCount", 3, 3), L = s(e, "emptyMessage", 3, "No items found"), N = s(e, "emptyIcon", 3, "📋");
  s(e, "dividers", 3, !0);
  const T = s(e, "hover", 3, !0), y = s(e, "animated", 3, !0), f = s(e, "class", 3, ""), G = At();
  let Z = /* @__PURE__ */ ke(ot(w()));
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
      item: `bg-black/60 border-${ze.terminal.green}/30 text-${ze.terminal.green}`,
      itemHover: `hover:bg-${ze.terminal.green}/5`,
      itemSelected: `bg-${ze.terminal.green}/10 border-${ze.terminal.green}`,
      title: `text-${ze.terminal.green}`,
      subtitle: `text-${ze.terminal.green}/80`,
      description: `text-${ze.terminal.green}/60`,
      metadata: `text-${ze.terminal.green}/50`,
      badge: `bg-${ze.terminal.green} text-black`,
      skeleton: `bg-${ze.terminal.green}/10`
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
  }, D = /* @__PURE__ */ Se(() => x[n()]), j = /* @__PURE__ */ Se(() => B[l()]);
  function P(m, ie) {
    m.disabled || (c() && F(m, !t(Z).has(m.id)), G("itemClick", { item: m, index: ie }));
  }
  function F(m, ie) {
    m.disabled || (g() ? ie ? t(Z).add(m.id) : t(Z).delete(m.id) : ie ? K(Z, /* @__PURE__ */ new Set([m.id]), !0) : K(Z, /* @__PURE__ */ new Set(), !0), K(Z, new Set(t(Z)), !0), G("itemSelect", { item: m, selected: ie }));
  }
  function H(m, ie, ue) {
    ue.stopPropagation(), G("actionClick", { item: m, action: ie });
  }
  function A(m) {
    m ? K(Z, new Set(a().filter((ie) => !ie.disabled).map((ie) => ie.id)), !0) : K(Z, /* @__PURE__ */ new Set(), !0), G("selectAll", { selected: m });
  }
  const U = /* @__PURE__ */ Se(() => a().length > 0 && a().filter((m) => !m.disabled).every((m) => t(Z).has(m.id))), X = /* @__PURE__ */ Se(() => V("rounded-lg overflow-hidden font-mono", t(D).container, t(j).container, f()));
  function R(m = "secondary") {
    const ie = "px-2 py-1 rounded text-xs font-medium transition-colors";
    switch (m) {
      case "primary":
        return `${ie} bg-blue-600 text-white hover:bg-blue-700`;
      case "danger":
        return `${ie} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${ie} bg-gray-600 text-white hover:bg-gray-700`;
    }
  }
  const C = /* @__PURE__ */ Se(() => Array.from({ length: h() }, (m, ie) => ({ id: `skeleton-${ie}` })));
  var k = gb(), M = o(k);
  {
    var p = (m) => {
      var ie = p0(), ue = o(ie), fe = o(ue);
      fe.__change = [x0, A];
      var ve = u(fe, 2), ae = o(ve);
      S(
        (Y) => {
          z(ie, 1, `px-4 py-3 border-b ${t(D).item ?? ""} border-gray-600`), Qt(fe, t(U)), oe(ae, `${t(Z).size ?? ""} of ${Y ?? ""} selected`);
        },
        [() => a().filter((Y) => !Y.disabled).length]
      ), i(m, ie);
    };
    b(M, (m) => {
      c() && g() && a().length > 0 && m(p);
    });
  }
  var q = u(M, 2), W = o(q);
  {
    var I = (m) => {
      var ie = Ae(), ue = we(ie);
      We(ue, 19, () => t(C), (fe) => fe.id, (fe, ve, ae) => {
        var Y = C0(), le = o(Y);
        {
          var re = (te) => {
            var J = w0(), Q = o(J), ee = u(Q, 2), se = o(ee), ne = u(se, 2);
            S(
              (de, Ce, be) => {
                z(Q, 1, de), z(se, 1, Ce), z(ne, 1, be);
              },
              [
                () => $(V("rounded-full", t(j).avatar, t(D).skeleton)),
                () => $(V("h-4 rounded", t(D).skeleton, "w-3/4")),
                () => $(V("h-3 rounded", t(D).skeleton, "w-1/2"))
              ]
            ), i(te, J);
          }, E = (te) => {
            var J = Ae(), Q = we(J);
            {
              var ee = (ne) => {
                var de = y0(), Ce = o(de), be = o(Ce), ce = u(be, 2), me = o(ce), Ee = u(me, 2), Be = u(Ee, 2);
                S(
                  (Ne, Oe, Me, xe) => {
                    z(be, 1, Ne), z(me, 1, Oe), z(Ee, 1, Me), z(Be, 1, xe);
                  },
                  [
                    () => $(V("rounded-full", t(j).avatar, t(D).skeleton)),
                    () => $(V("h-4 rounded", t(D).skeleton, "w-2/3")),
                    () => $(V("h-3 rounded", t(D).skeleton, "w-1/2")),
                    () => $(V("h-3 rounded", t(D).skeleton, "w-full"))
                  ]
                ), i(ne, de);
              }, se = (ne) => {
                var de = k0(), Ce = o(de), be = o(Ce), ce = u(be, 2), me = o(ce), Ee = u(me, 2);
                S(
                  (Be, Ne, Oe) => {
                    z(de, 1, `border rounded-lg p-4 space-y-3 ${t(D).skeleton ?? ""}`), z(be, 1, Be), z(me, 1, Ne), z(Ee, 1, Oe);
                  },
                  [
                    () => $(V("rounded-full", t(j).avatar, t(D).skeleton)),
                    () => $(V("h-4 rounded", t(D).skeleton, "w-3/4")),
                    () => $(V("h-3 rounded", t(D).skeleton, "w-1/2"))
                  ]
                ), i(ne, de);
              };
              b(
                Q,
                (ne) => {
                  d() === "detailed" ? ne(ee) : ne(se, !1);
                },
                !0
              );
            }
            i(te, J);
          };
          b(le, (te) => {
            d() === "simple" ? te(re) : te(E, !1);
          });
        }
        S((te) => z(Y, 1, te), [
          () => $(V(t(j).item, t(D).item, "animate-pulse"))
        ]), tt(1, Y, () => gt, () => ({ direction: "up", duration: 200, delay: t(ae) * 50 })), i(fe, Y);
      }), i(m, ie);
    }, _ = (m) => {
      var ie = Ae(), ue = we(ie);
      {
        var fe = (ae) => {
          var Y = E0(), le = o(Y), re = o(le), E = u(le, 2), te = o(E);
          S(() => {
            z(Y, 1, `py-12 text-center ${t(D).description ?? ""}`), oe(re, N()), oe(te, L());
          }), i(ae, Y);
        }, ve = (ae) => {
          var Y = Ae(), le = we(Y);
          We(le, 19, a, (re) => re.id, (re, E, te) => {
            const J = /* @__PURE__ */ Se(() => t(Z).has(t(E).id));
            var Q = bb(), ee = () => P(t(E), t(te)), se = (be) => (be.key === "Enter" || be.key === " ") && P(t(E), t(te));
            Ze(
              Q,
              (be) => ({
                class: be,
                onclick: ee,
                onkeydown: se,
                role: c() ? "option" : "listitem",
                ...c() && !t(E).disabled ? { tabindex: 0 } : {},
                "aria-selected": c() ? t(J) : void 0,
                "aria-label": t(E).title,
                "aria-describedby": t(E).description ? `item-${t(E).id}-description` : void 0
              }),
              [
                () => V(t(j).item, t(D).item, T() && !t(E).disabled && t(D).itemHover, t(J) && t(D).itemSelected, t(E).disabled && "opacity-50", !t(E).disabled && "cursor-pointer", "transition-all duration-200")
              ]
            );
            var ne = o(Q);
            {
              var de = (be) => {
                var ce = O0(), me = o(ce);
                {
                  var Ee = (Te) => {
                    var qe = M0();
                    qe.__change = [S0, F, E], qe.__click = [T0], S(() => {
                      Qt(qe, t(J)), qe.disabled = t(E).disabled;
                    }), i(Te, qe);
                  };
                  b(me, (Te) => {
                    c() && Te(Ee);
                  });
                }
                var Be = u(me, 2);
                {
                  var Ne = (Te) => {
                    var qe = A0();
                    S(
                      (Fe) => {
                        ye(qe, "src", t(E).avatar), ye(qe, "alt", t(E).title), z(qe, 1, Fe);
                      },
                      [
                        () => $(V("rounded-full object-cover", t(j).avatar))
                      ]
                    ), i(Te, qe);
                  }, Oe = (Te) => {
                    var qe = Ae(), Fe = we(qe);
                    {
                      var Ve = (Ge) => {
                        var Ke = I0(), Je = o(Ke), $e = o(Je);
                        S(
                          (at) => {
                            z(Ke, 1, at), oe($e, t(E).icon);
                          },
                          [
                            () => $(V("flex items-center justify-center", t(j).icon))
                          ]
                        ), i(Ge, Ke);
                      };
                      b(
                        Fe,
                        (Ge) => {
                          t(E).icon && Ge(Ve);
                        },
                        !0
                      );
                    }
                    i(Te, qe);
                  };
                  b(Be, (Te) => {
                    t(E).avatar ? Te(Ne) : Te(Oe, !1);
                  });
                }
                var Me = u(Be, 2), xe = o(Me), Le = o(xe), je = o(Le), he = u(Le, 2);
                {
                  var pe = (Te) => {
                    var qe = P0(), Fe = o(qe);
                    S(
                      (Ve) => {
                        z(qe, 1, Ve), oe(Fe, t(E).badge);
                      },
                      [
                        () => $(V("rounded-full font-medium", t(j).badge, t(D).badge))
                      ]
                    ), i(Te, qe);
                  };
                  b(he, (Te) => {
                    t(E).badge && Te(pe);
                  });
                }
                var Ie = u(xe, 2);
                {
                  var ge = (Te) => {
                    var qe = L0(), Fe = o(qe);
                    S(
                      (Ve) => {
                        z(qe, 1, Ve), oe(Fe, t(E).subtitle);
                      },
                      [
                        () => $(V("text-sm truncate", t(D).subtitle))
                      ]
                    ), i(Te, qe);
                  };
                  b(Ie, (Te) => {
                    t(E).subtitle && Te(ge);
                  });
                }
                var _e = u(Me, 2);
                {
                  var De = (Te) => {
                    var qe = N0();
                    We(qe, 21, () => t(E).actions, (Fe) => Fe.action, (Fe, Ve) => {
                      var Ge = R0();
                      Ge.__click = [z0, H, E, Ve];
                      var Ke = o(Ge);
                      {
                        var Je = (at) => {
                          var nt = D0(), Ue = o(nt);
                          S(() => oe(Ue, t(Ve).icon)), i(at, nt);
                        };
                        b(Ke, (at) => {
                          t(Ve).icon && at(Je);
                        });
                      }
                      var $e = u(Ke);
                      Re(Ge, (at, nt) => ut?.(at, nt), () => ({ strength: 0.1 })), S(
                        (at) => {
                          z(Ge, 1, at), oe($e, ` ${t(Ve).label ?? ""}`);
                        },
                        [() => $(R(t(Ve).variant))]
                      ), i(Fe, Ge);
                    }), i(Te, qe);
                  };
                  b(_e, (Te) => {
                    t(E).actions && t(E).actions.length > 0 && Te(De);
                  });
                }
                S(
                  (Te) => {
                    z(Le, 1, Te), oe(je, t(E).title);
                  },
                  [
                    () => $(V("font-medium truncate", t(D).title))
                  ]
                ), i(be, ce);
              }, Ce = (be) => {
                var ce = Ae(), me = we(ce);
                {
                  var Ee = (Ne) => {
                    var Oe = J0(), Me = o(Oe), xe = o(Me);
                    {
                      var Le = (Ue) => {
                        var Pe = B0();
                        Pe.__change = [j0, F, E], Pe.__click = [q0], S(() => {
                          Qt(Pe, t(J)), Pe.disabled = t(E).disabled;
                        }), i(Ue, Pe);
                      };
                      b(xe, (Ue) => {
                        c() && Ue(Le);
                      });
                    }
                    var je = u(xe, 2);
                    {
                      var he = (Ue) => {
                        var Pe = F0();
                        S(
                          (He) => {
                            ye(Pe, "src", t(E).avatar), ye(Pe, "alt", t(E).title), z(Pe, 1, He);
                          },
                          [
                            () => $(V("rounded-full object-cover", t(j).avatar))
                          ]
                        ), i(Ue, Pe);
                      }, pe = (Ue) => {
                        var Pe = Ae(), He = we(Pe);
                        {
                          var et = (dt) => {
                            var it = H0(), ht = o(it), Ct = o(ht);
                            S(
                              (pt) => {
                                z(it, 1, pt), oe(Ct, t(E).icon);
                              },
                              [
                                () => $(V("flex items-center justify-center", t(j).icon))
                              ]
                            ), i(dt, it);
                          };
                          b(
                            He,
                            (dt) => {
                              t(E).icon && dt(et);
                            },
                            !0
                          );
                        }
                        i(Ue, Pe);
                      };
                      b(je, (Ue) => {
                        t(E).avatar ? Ue(he) : Ue(pe, !1);
                      });
                    }
                    var Ie = u(je, 2), ge = o(Ie), _e = o(ge), De = o(_e), Te = u(_e, 2);
                    {
                      var qe = (Ue) => {
                        var Pe = V0(), He = o(Pe);
                        S(
                          (et) => {
                            z(Pe, 1, et), oe(He, t(E).badge);
                          },
                          [
                            () => $(V("rounded-full font-medium", t(j).badge, t(D).badge))
                          ]
                        ), i(Ue, Pe);
                      };
                      b(Te, (Ue) => {
                        t(E).badge && Ue(qe);
                      });
                    }
                    var Fe = u(ge, 2);
                    {
                      var Ve = (Ue) => {
                        var Pe = G0(), He = o(Pe);
                        S(
                          (et) => {
                            z(Pe, 1, et), oe(He, t(E).subtitle);
                          },
                          [
                            () => $(V("text-sm mb-2", t(D).subtitle))
                          ]
                        ), i(Ue, Pe);
                      };
                      b(Fe, (Ue) => {
                        t(E).subtitle && Ue(Ve);
                      });
                    }
                    var Ge = u(Fe, 2);
                    {
                      var Ke = (Ue) => {
                        var Pe = U0(), He = o(Pe);
                        S(
                          (et) => {
                            z(Pe, 1, et), oe(He, t(E).description);
                          },
                          [
                            () => $(V("text-sm leading-relaxed", t(D).description))
                          ]
                        ), i(Ue, Pe);
                      };
                      b(Ge, (Ue) => {
                        t(E).description && Ue(Ke);
                      });
                    }
                    var Je = u(Ge, 2);
                    {
                      var $e = (Ue) => {
                        var Pe = Y0();
                        We(Pe, 21, () => Object.entries(t(E).metadata), vt, (He, et) => {
                          var dt = /* @__PURE__ */ Se(() => Xr(t(et), 2));
                          let it = () => t(dt)[0], ht = () => t(dt)[1];
                          var Ct = W0(), pt = o(Ct);
                          S(
                            (_t) => {
                              z(Ct, 1, _t), oe(pt, `${it() ?? ""}: ${ht() ?? ""}`);
                            },
                            [() => $(V("text-xs", t(D).metadata))]
                          ), i(He, Ct);
                        }), i(Ue, Pe);
                      };
                      b(Je, (Ue) => {
                        t(E).metadata && Ue($e);
                      });
                    }
                    var at = u(Ie, 2);
                    {
                      var nt = (Ue) => {
                        var Pe = Z0();
                        We(Pe, 21, () => t(E).actions, (He) => He.action, (He, et) => {
                          var dt = Q0();
                          dt.__click = [K0, H, E, et];
                          var it = o(dt);
                          {
                            var ht = (pt) => {
                              var _t = X0(), Nt = o(_t);
                              S(() => oe(Nt, t(et).icon)), i(pt, _t);
                            };
                            b(it, (pt) => {
                              t(et).icon && pt(ht);
                            });
                          }
                          var Ct = u(it);
                          Re(dt, (pt, _t) => ut?.(pt, _t), () => ({ strength: 0.1 })), S(
                            (pt) => {
                              z(dt, 1, pt), oe(Ct, ` ${t(et).label ?? ""}`);
                            },
                            [() => $(R(t(et).variant))]
                          ), i(He, dt);
                        }), i(Ue, Pe);
                      };
                      b(at, (Ue) => {
                        t(E).actions && t(E).actions.length > 0 && Ue(nt);
                      });
                    }
                    S(
                      (Ue) => {
                        z(_e, 1, Ue), oe(De, t(E).title);
                      },
                      [
                        () => $(V("font-semibold", t(D).title))
                      ]
                    ), i(Ne, Oe);
                  }, Be = (Ne) => {
                    var Oe = fb(), Me = o(Oe), xe = o(Me);
                    {
                      var Le = (Pe) => {
                        var He = tb();
                        He.__change = [$0, F, E], He.__click = [eb], S(() => {
                          Qt(He, t(J)), He.disabled = t(E).disabled;
                        }), i(Pe, He);
                      };
                      b(xe, (Pe) => {
                        c() && Pe(Le);
                      });
                    }
                    var je = u(xe, 2);
                    {
                      var he = (Pe) => {
                        var He = rb();
                        S(
                          (et) => {
                            ye(He, "src", t(E).avatar), ye(He, "alt", t(E).title), z(He, 1, et);
                          },
                          [
                            () => $(V("rounded-full object-cover", t(j).avatar))
                          ]
                        ), i(Pe, He);
                      }, pe = (Pe) => {
                        var He = Ae(), et = we(He);
                        {
                          var dt = (it) => {
                            var ht = ab(), Ct = o(ht), pt = o(Ct);
                            S(
                              (_t) => {
                                z(ht, 1, _t), oe(pt, t(E).icon);
                              },
                              [
                                () => $(V("flex items-center justify-center", t(j).icon))
                              ]
                            ), i(it, ht);
                          };
                          b(
                            et,
                            (it) => {
                              t(E).icon && it(dt);
                            },
                            !0
                          );
                        }
                        i(Pe, He);
                      };
                      b(je, (Pe) => {
                        t(E).avatar ? Pe(he) : Pe(pe, !1);
                      });
                    }
                    var Ie = u(je, 2), ge = o(Ie), _e = o(ge), De = o(_e), Te = o(De), qe = u(De, 2);
                    {
                      var Fe = (Pe) => {
                        var He = nb(), et = o(He);
                        S(
                          (dt) => {
                            z(He, 1, dt), oe(et, t(E).badge);
                          },
                          [
                            () => $(V("rounded-full font-medium", t(j).badge, t(D).badge))
                          ]
                        ), i(Pe, He);
                      };
                      b(qe, (Pe) => {
                        t(E).badge && Pe(Fe);
                      });
                    }
                    var Ve = u(_e, 2);
                    {
                      var Ge = (Pe) => {
                        var He = sb();
                        We(He, 21, () => t(E).actions, (et) => et.action, (et, dt) => {
                          var it = lb();
                          it.__click = [ib, H, E, dt];
                          var ht = o(it);
                          {
                            var Ct = (_t) => {
                              var Nt = ob(), Ft = o(Nt);
                              S(() => oe(Ft, t(dt).icon)), i(_t, Nt);
                            };
                            b(ht, (_t) => {
                              t(dt).icon && _t(Ct);
                            });
                          }
                          var pt = u(ht);
                          Re(it, (_t, Nt) => ut?.(_t, Nt), () => ({ strength: 0.1 })), S(
                            (_t) => {
                              z(it, 1, _t), oe(pt, ` ${t(dt).label ?? ""}`);
                            },
                            [() => $(R(t(dt).variant))]
                          ), i(et, it);
                        }), i(Pe, He);
                      };
                      b(Ve, (Pe) => {
                        t(E).actions && t(E).actions.length > 0 && Pe(Ge);
                      });
                    }
                    var Ke = u(ge, 2);
                    {
                      var Je = (Pe) => {
                        var He = db(), et = o(He);
                        S(
                          (dt) => {
                            z(He, 1, dt), oe(et, t(E).subtitle);
                          },
                          [
                            () => $(V("text-sm mb-2", t(D).subtitle))
                          ]
                        ), i(Pe, He);
                      };
                      b(Ke, (Pe) => {
                        t(E).subtitle && Pe(Je);
                      });
                    }
                    var $e = u(Ke, 2);
                    {
                      var at = (Pe) => {
                        var He = cb(), et = o(He);
                        S(
                          (dt) => {
                            z(He, 1, dt), oe(et, t(E).description);
                          },
                          [
                            () => $(V("text-sm leading-relaxed mb-3", t(D).description))
                          ]
                        ), i(Pe, He);
                      };
                      b($e, (Pe) => {
                        t(E).description && Pe(at);
                      });
                    }
                    var nt = u($e, 2);
                    {
                      var Ue = (Pe) => {
                        var He = ub();
                        We(He, 21, () => Object.entries(t(E).metadata), vt, (et, dt) => {
                          var it = /* @__PURE__ */ Se(() => Xr(t(dt), 2));
                          let ht = () => t(it)[0], Ct = () => t(it)[1];
                          var pt = vb(), _t = o(pt);
                          S(
                            (Nt) => {
                              z(pt, 1, Nt), oe(_t, `${ht() ?? ""}: ${Ct() ?? ""}`);
                            },
                            [
                              () => $(V("text-xs px-2 py-1 rounded-full", t(D).skeleton, t(D).metadata))
                            ]
                          ), i(et, pt);
                        }), i(Pe, He);
                      };
                      b(nt, (Pe) => {
                        t(E).metadata && Pe(Ue);
                      });
                    }
                    S(
                      (Pe) => {
                        z(Oe, 1, `border rounded-lg p-4 ${t(D).item ?? ""}`), z(De, 1, Pe), oe(Te, t(E).title);
                      },
                      [
                        () => $(V("font-semibold", t(D).title))
                      ]
                    ), i(Ne, Oe);
                  };
                  b(
                    me,
                    (Ne) => {
                      d() === "detailed" ? Ne(Ee) : Ne(Be, !1);
                    },
                    !0
                  );
                }
                i(be, ce);
              };
              b(ne, (be) => {
                d() === "simple" ? be(de) : be(Ce, !1);
              });
            }
            Re(Q, (be, ce) => ut?.(be, ce), () => ({ enabled: !t(E).disabled && T(), strength: 0.05 })), tt(1, Q, () => gt, () => y() ? { direction: "up", duration: 200, delay: t(te) * 30 } : void 0), i(re, Q);
          }), i(ae, Y);
        };
        b(
          ue,
          (ae) => {
            a().length === 0 ? ae(fe) : ae(ve, !1);
          },
          !0
        );
      }
      i(m, ie);
    };
    b(W, (m) => {
      O() ? m(I) : m(_, !1);
    });
  }
  S(() => z(k, 1, $(t(X)))), i(r, k), Qe();
}
ft(["change", "click"]);
var hb = (r, e) => {
  const a = r.target;
  e(a.checked);
}, mb = /* @__PURE__ */ v('<th scope="col"><input type="checkbox" aria-label="Select all rows" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></th>'), _b = (r, e, a) => t(e).sortable && a(t(e)), xb = /* @__PURE__ */ v('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), pb = /* @__PURE__ */ v('<th scope="col"><div class="flex items-center gap-2"><span> </span> <!></div></th>'), wb = /* @__PURE__ */ v('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), yb = /* @__PURE__ */ v('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), kb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Cb = (r) => r.stopPropagation(), Eb = /* @__PURE__ */ v('<td><input type="checkbox" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></td>'), Sb = /* @__PURE__ */ v("<td><!></td>"), Tb = /* @__PURE__ */ v("<tr><!><!></tr>"), Mb = /* @__PURE__ */ v('<div><table><caption class="sr-only"> </caption><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div>');
function T1(r, e) {
  Xe(e, !0);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), c = s(e, "striped", 3, !1), g = s(e, "hover", 3, !0), w = s(e, "bordered", 3, !1), O = s(e, "loading", 3, !1), h = s(e, "sortBy", 3, ""), L = s(e, "sortOrder", 3, "asc"), N = s(e, "selectable", 3, !1), T = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), y = s(e, "stickyHeader", 3, !1), f = s(e, "emptyMessage", 3, "No data available"), G = s(e, "class", 3, ""), Z = At();
  let x = /* @__PURE__ */ ke(ot(h())), B = /* @__PURE__ */ ke(ot(L())), D = /* @__PURE__ */ ke(ot(T()));
  const j = {
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
      table: `bg-black/90 text-${ze.terminal.green}`,
      header: `bg-${ze.terminal.green}/10 border-${ze.terminal.green}`,
      headerCell: `text-${ze.terminal.green} border-${ze.terminal.green}/30`,
      row: `border-${ze.terminal.green}/20`,
      rowHover: `hover:bg-${ze.terminal.green}/5`,
      rowSelected: `bg-${ze.terminal.green}/10`,
      cell: `text-${ze.terminal.green}/90 border-${ze.terminal.green}/20`,
      loading: `bg-${ze.terminal.green}/5`
    }
  }, P = {
    sm: { cell: "px-3 py-2 text-sm", header: "px-3 py-2 text-xs" },
    md: { cell: "px-4 py-3 text-sm", header: "px-4 py-3 text-sm" },
    lg: { cell: "px-6 py-4 text-base", header: "px-6 py-4 text-base" }
  }, F = /* @__PURE__ */ Se(() => j[l()]), H = /* @__PURE__ */ Se(() => P[d()]), A = /* @__PURE__ */ Se(() => () => !t(x) || !a().find((Q) => Q.key === t(x))?.sortable ? n() : [...n()].sort((Q, ee) => {
    const se = Q[t(x)], ne = ee[t(x)];
    if (se === ne) return 0;
    const de = t(B) === "asc";
    return se < ne ? de ? -1 : 1 : de ? 1 : -1;
  }));
  function U(J) {
    J.sortable && (t(x) === J.key ? K(B, t(B) === "asc" ? "desc" : "asc", !0) : (K(x, J.key, !0), K(B, "asc")), Z("sort", { column: J.key, order: t(B) }));
  }
  function X(J, Q) {
    Z("rowClick", { row: J, index: Q });
  }
  function R(J, Q) {
    const ee = J.id ?? index;
    Q ? t(D).add(ee) : t(D).delete(ee), K(D, new Set(t(D)), !0), Z("rowSelect", { row: J, selected: Q });
  }
  function C(J) {
    J ? K(D, new Set(n().map((Q, ee) => Q.id ?? ee)), !0) : K(D, /* @__PURE__ */ new Set(), !0), Z("selectAll", { selected: J });
  }
  function k(J, Q, ee) {
    return J.render ? J.render(Q, ee) : J.formatter ? J.formatter(Q) : String(Q ?? "");
  }
  const M = /* @__PURE__ */ Se(() => n().length > 0 && n().every((J, Q) => t(D).has(J.id ?? Q))), p = /* @__PURE__ */ Se(() => t(D).size > 0 && !t(M)), q = /* @__PURE__ */ Se(() => V("w-full font-mono rounded-lg overflow-hidden border", t(F).table, t(F).row, w() && "border-2", G())), W = /* @__PURE__ */ Se(() => V("overflow-auto", e.maxHeight && `max-h-[${e.maxHeight}]`, y() && "relative"));
  var I = Mb(), _ = o(I), m = o(_), ie = o(m), ue = u(m), fe = o(ue), ve = o(fe);
  {
    var ae = (J) => {
      var Q = mb(), ee = o(Q);
      ee.__change = [hb, C], S(
        (se) => {
          z(Q, 1, se), Qt(ee, t(M)), ee.indeterminate = t(p);
        },
        [
          () => $(V(t(H).header, t(F).headerCell, "w-12"))
        ]
      ), i(J, Q);
    };
    b(ve, (J) => {
      N() && J(ae);
    });
  }
  var Y = u(ve);
  We(Y, 17, a, (J) => J.key, (J, Q) => {
    var ee = pb();
    ee.__click = [_b, Q, U];
    var se = o(ee), ne = o(se), de = o(ne), Ce = u(ne, 2);
    {
      var be = (ce) => {
        var me = xb(), Ee = o(me), Be = u(Ee, 2);
        S(
          (Ne, Oe) => {
            z(Ee, 0, Ne), z(Be, 0, Oe);
          },
          [
            () => $(V("w-3 h-3 transition-colors", t(x) === t(Q).key && t(B) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => $(V("w-3 h-3 -mt-1 transition-colors", t(x) === t(Q).key && t(B) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), i(ce, me);
      };
      b(Ce, (ce) => {
        t(Q).sortable && ce(be);
      });
    }
    Re(ee, (ce, me) => ut?.(ce, me), () => ({ enabled: t(Q).sortable, strength: 0.05 })), S(
      (ce) => {
        z(ee, 1, ce), mt(ee, t(Q).width ? `width: ${t(Q).width}` : void 0), ye(ee, "aria-sort", t(x) === t(Q).key ? t(B) === "asc" ? "ascending" : "descending" : "none"), oe(de, t(Q).label);
      },
      [
        () => $(V(t(H).header, t(F).headerCell, "font-semibold uppercase tracking-wider", `text-${t(Q).align || "left"}`, t(Q).sortable && "cursor-pointer select-none", w() && "border-r last:border-r-0"))
      ]
    ), i(J, ee);
  });
  var le = u(ue), re = o(le);
  {
    var E = (J) => {
      var Q = wb(), ee = o(Q);
      S(
        (se) => {
          ye(ee, "colspan", a().length + (N() ? 1 : 0)), z(ee, 1, se);
        },
        [
          () => $(V(t(H).cell, t(F).loading, "text-center"))
        ]
      ), i(J, Q);
    }, te = (J) => {
      var Q = Ae(), ee = we(Q);
      {
        var se = (de) => {
          var Ce = yb(), be = o(Ce), ce = o(be), me = u(o(ce), 2), Ee = o(me);
          S(
            (Be) => {
              ye(be, "colspan", a().length + (N() ? 1 : 0)), z(be, 1, Be), oe(Ee, f());
            },
            [
              () => $(V(t(H).cell, t(F).cell, "text-center text-gray-400"))
            ]
          ), i(de, Ce);
        }, ne = (de) => {
          var Ce = Ae(), be = we(Ce);
          We(be, 19, () => t(A), (ce, me) => ce.id ?? me, (ce, me, Ee) => {
            const Be = /* @__PURE__ */ Se(() => t(me).id ?? t(Ee)), Ne = /* @__PURE__ */ Se(() => t(D).has(t(Be)));
            var Oe = Tb();
            Oe.__click = () => X(t(me), t(Ee));
            var Me = o(Oe);
            {
              var xe = (je) => {
                var he = Eb(), pe = o(he);
                pe.__change = [kb, R, me], pe.__click = [Cb], S(
                  (Ie) => {
                    z(he, 1, Ie), Qt(pe, t(Ne));
                  },
                  [
                    () => $(V(t(H).cell, t(F).cell, w() && "border-r"))
                  ]
                ), i(je, he);
              };
              b(Me, (je) => {
                N() && je(xe);
              });
            }
            var Le = u(Me);
            We(Le, 17, a, (je) => je.key, (je, he) => {
              var pe = Sb(), Ie = o(pe);
              mr(Ie, () => k(t(he), t(me)[t(he).key], t(me))), S((ge) => z(pe, 1, ge), [
                () => $(V(t(H).cell, t(F).cell, `text-${t(he).align || "left"}`, w() && "border-r last:border-r-0"))
              ]), i(je, pe);
            }), S((je) => z(Oe, 1, je), [
              () => $(V(t(F).row, g() && t(F).rowHover, c() && t(Ee) % 2 === 1 && "bg-black/20", t(Ne) && t(F).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), tt(1, Oe, () => gt, () => ({ direction: "up", duration: 100, delay: t(Ee) * 20 })), i(ce, Oe);
          }), i(de, Ce);
        };
        b(
          ee,
          (de) => {
            t(A).length === 0 ? de(se) : de(ne, !1);
          },
          !0
        );
      }
      i(J, Q);
    };
    b(re, (J) => {
      O() ? J(E) : J(te, !1);
    });
  }
  S(
    (J) => {
      z(I, 1, $(t(W))), z(_, 1, $(t(q))), oe(ie, `Data table with ${n().length ?? ""} rows and ${a().length ?? ""} columns`), z(ue, 1, J);
    },
    [
      () => $(V(t(F).header, y() && "sticky top-0 z-10"))
    ]
  ), i(r, I), Qe();
}
ft(["change", "click"]);
const Ab = (r, e, a) => {
  r.key === "Enter" ? e(t(a)) : r.key === "ArrowUp" && r.preventDefault();
};
var Ib = /* @__PURE__ */ v('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-30 svelte-1c5nvru"></canvas>'), Pb = /* @__PURE__ */ v('<span class="glitch svelte-1c5nvru"> </span>'), Lb = /* @__PURE__ */ v('<div class="mb-4 svelte-1c5nvru"><div class="flex items-start gap-2 mb-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <span class="text-white svelte-1c5nvru"> </span> <span class="text-xs text-current/40 ml-auto svelte-1c5nvru"> </span></div> <div class="text-current/90 mb-2 whitespace-pre-wrap font-mono svelte-1c5nvru"> </div></div>'), zb = /* @__PURE__ */ v('<div class="mt-4 svelte-1c5nvru"><!></div>'), Db = /* @__PURE__ */ v(`<div><!> <div class="relative z-10 flex items-center justify-between p-4 border-b border-current/20 bg-black/50 svelte-1c5nvru"><div class="flex items-center gap-3 svelte-1c5nvru"><div class="flex gap-2 svelte-1c5nvru"><div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors svelte-1c5nvru"></div></div> <h3 class="text-sm font-mono font-semibold svelte-1c5nvru"><!></h3></div> <div class="flex items-center gap-2 text-xs font-mono svelte-1c5nvru"><span class="px-2 py-1 bg-current/10 rounded svelte-1c5nvru">SECURE</span> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse svelte-1c5nvru"></span></div></div> <div class="relative z-10 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed terminal-scroll svelte-1c5nvru" style="scrollbar-width: thin;"><div class="mb-4 text-current/80 svelte-1c5nvru"><pre class="whitespace-pre-wrap svelte-1c5nvru">╔══════════════════════════════════════════════════════════════╗
║ LIQUID GLASS TERMINAL v2.0 - SECURITY LEVEL: ALPHA-7        ║
║ SYSTEM STATUS: ONLINE │ ENCRYPTION: AES-256 │ UPTIME: 99.9% ║
╚══════════════════════════════════════════════════════════════╝

Connection established. Type 'help' for available commands.</pre></div> <!> <div class="flex items-start gap-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <input class="flex-1 bg-transparent border-none outline-none text-white font-mono svelte-1c5nvru" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-current animate-pulse svelte-1c5nvru"></span></div> <!></div></div>`);
function M1(r, e) {
  Xe(e, !0);
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
  const g = s(e, "enableMatrixRain", 3, !1), w = s(e, "enableScanlines", 3, !0), O = s(e, "enableFlicker", 3, !1);
  At();
  let h = /* @__PURE__ */ ke(void 0), L = /* @__PURE__ */ ke(void 0), N = /* @__PURE__ */ ke(""), T = /* @__PURE__ */ ke(ot([])), y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(ot(g()));
  const G = ot(w()), Z = ot(O()), x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  let B = [], D;
  const j = (Y) => {
    const le = Y.trim().toLowerCase();
    let re = "";
    if (le === "clear") {
      K(T, [], !0), K(N, "");
      return;
    } else le === "matrix" ? (K(f, !t(f)), t(f) ? F() : H(), re = l()[le] || "MATRIX RAIN DEACTIVATED") : le === "glitch" ? (P(), re = l()[le] || "GLITCH EFFECT ACTIVATED") : re = l()[le] || `zsh: command not found: ${Y}

Try 'help' for available commands.`;
    K(
      T,
      [
        ...t(T),
        { command: le, output: re, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), K(N, ""), setTimeout(
      () => {
        t(h) && t(h).scrollTo({ top: t(h).scrollHeight, behavior: "smooth" });
      },
      50
    );
  }, P = () => {
    K(y, !0), setTimeout(
      () => {
        K(y, !1);
      },
      1e3
    );
  }, F = () => {
    if (!t(L)) return;
    const Y = t(L).getContext("2d"), le = 14, re = Math.floor(t(L).width / le);
    B = Array(re).fill(0);
    const E = () => {
      Y.fillStyle = "rgba(0, 0, 0, 0.05)", Y.fillRect(0, 0, t(L).width, t(L).height), Y.fillStyle = "#00ff88", Y.font = `${le}px 'PP Supply Mono', monospace`;
      for (let J = 0; J < B.length; J++) {
        const Q = x[Math.floor(Math.random() * x.length)];
        Y.fillText(Q, J * le, B[J] * le), B[J] * le > t(L).height && Math.random() > 0.975 && (B[J] = 0), B[J]++;
      }
    }, te = () => {
      E(), D = requestAnimationFrame(te);
    };
    te();
  }, H = () => {
    D && cancelAnimationFrame(D);
  }, A = () => {
    t(L) && t(h) && (t(L).width = t(h).offsetWidth, t(L).height = t(h).offsetHeight);
  };
  yt(() => (A(), t(f) && F(), d() && setTimeout(
    () => {
      j("whoami");
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
  var X = Db();
  qt("resize", _i, A);
  var R = o(X);
  {
    var C = (Y) => {
      var le = Ib();
      rt(le, (re) => K(L, re), () => t(L)), i(Y, le);
    };
    b(R, (Y) => {
      t(f) && Y(C);
    });
  }
  var k = u(R, 2), M = o(k), p = u(o(M), 2), q = o(p);
  {
    var W = (Y) => {
      var le = Pb(), re = o(le);
      S(() => {
        ye(le, "data-text", a()), oe(re, a());
      }), i(Y, le);
    }, I = (Y) => {
      var le = Et();
      S(() => oe(le, a())), i(Y, le);
    };
    b(q, (Y) => {
      t(y) ? Y(W) : Y(I, !1);
    });
  }
  var _ = u(k, 2), m = u(o(_), 2);
  We(m, 17, () => t(T), vt, (Y, le) => {
    var re = Lb(), E = o(re), te = o(E);
    te.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
    var J = u(te, 2), Q = o(J), ee = u(J, 2), se = o(ee), ne = u(E, 2), de = o(ne);
    S(
      (Ce) => {
        oe(Q, t(le).command), oe(se, Ce), oe(de, t(le).output);
      },
      [() => t(le).timestamp.toLocaleTimeString()]
    ), i(Y, re);
  });
  var ie = u(m, 2), ue = o(ie);
  ue.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
  var fe = u(ue, 2);
  fe.__keydown = [Ab, j, N];
  var ve = u(ie, 2);
  {
    var ae = (Y) => {
      var le = zb(), re = o(le);
      lt(re, () => e.children), i(Y, le);
    };
    b(ve, (Y) => {
      e.children && Y(ae);
    });
  }
  rt(_, (Y) => K(h, Y), () => t(h)), S((Y) => z(X, 1, Y, "svelte-1c5nvru"), [
    () => $(V("relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300", "border shadow-2xl shadow-black/25 transform-gpu will-change-transform", U[c()], G && "terminal-scanlines", Z && "terminal-flicker", t(y) && "terminal-glitch", n()))
  ]), nr(fe, () => t(N), (Y) => K(N, Y)), i(r, X), Qe();
}
ft(["keydown"]);
const Rb = (r) => r;
function Nb(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Vn(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function eo(r, { delay: e = 0, duration: a = 400, easing: n = Rb } = {}) {
  const l = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (d) => `opacity: ${d * l}`
  };
}
function to(r, { delay: e = 0, duration: a = 400, easing: n = Nb, x: l = 0, y: d = 0, opacity: c = 0 } = {}) {
  const g = getComputedStyle(r), w = +g.opacity, O = g.transform === "none" ? "" : g.transform, h = w * (1 - c), [L, N] = Vn(l), [T, y] = Vn(d);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (f, G) => `
			transform: ${O} translate(${(1 - f) * L}${N}, ${(1 - f) * T}${y});
			opacity: ${w - h * G}`
  };
}
var Ob = /* @__PURE__ */ v('<div class="flex gap-1"><div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div></div>'), jb = /* @__PURE__ */ v('<div><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> <span class="text-sm font-mono">Analyzing patterns...</span></div>'), qb = (r, e, a) => e(t(a)), Bb = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, Fb = /* @__PURE__ */ v("<span> </span>"), Hb = /* @__PURE__ */ v('<div class="flex items-center gap-2"><span> </span> <div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div></div></div></div>'), Vb = /* @__PURE__ */ v("<code> </code>"), Gb = /* @__PURE__ */ v('<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 svelte-4oclra"><div>Examples:</div> <div class="flex flex-wrap gap-1"></div></div>'), Ub = /* @__PURE__ */ v('<div role="button" tabindex="0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><!> <span> </span></div> <!></div> <p> </p> <div> </div> <!></div>'), Wb = /* @__PURE__ */ v('<div class="space-y-2"></div>'), Yb = /* @__PURE__ */ v('<div><div class="text-2xl mb-2">🤔</div> <p class="text-sm"> </p> <p class="text-xs mt-1">Try a different search term</p></div>'), Kb = /* @__PURE__ */ v('<div><div class="flex items-center justify-between"><span>Use ↑↓ to navigate, Enter to select</span> <span>AI-powered suggestions</span></div></div>'), Xb = /* @__PURE__ */ v('<div><div><div class="flex items-center gap-2"><span class="text-sm font-bold">🤖 AI SUGGESTIONS</span> <!></div> <span> </span></div> <!> <!> <!> <!></div>');
function A1(r, e) {
  Xe(e, !0);
  const [a, n] = Wi(), l = () => Ui(y, "$aiSuggestions", a), d = s(e, "query", 3, ""), c = s(e, "suggestions", 19, () => []), g = s(e, "maxSuggestions", 3, 6), w = s(e, "showConfidence", 3, !0), O = s(e, "showCategories", 3, !0), h = s(e, "theme", 3, "terminal"), L = s(e, "aiMode", 3, !0), N = s(e, "class", 3, ""), T = At(), y = bn([]);
  let f = /* @__PURE__ */ ke(-1), G = /* @__PURE__ */ ke(!1);
  const Z = [
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
  }[h()], D = {
    system: { icon: "⚙️", color: "text-blue-400" },
    development: { icon: "💻", color: "text-green-400" },
    network: { icon: "🌐", color: "text-purple-400" },
    file: { icon: "📁", color: "text-yellow-400" },
    process: { icon: "⚡", color: "text-orange-400" },
    ai: { icon: "🤖", color: "text-cyan-400" }
  }, j = async (k) => {
    K(G, !0), await new Promise((p) => setTimeout(p, 800 + Math.random() * 400));
    const M = Z.filter((p) => p.command.toLowerCase().includes(k.toLowerCase()) || p.description.toLowerCase().includes(k.toLowerCase()) || p.category.toLowerCase().includes(k.toLowerCase())).map((p) => ({
      ...p,
      confidence: Math.min(0.98, p.confidence + Math.random() * 0.1)
    })).sort((p, q) => q.confidence - p.confidence).slice(0, g());
    return K(G, !1), M;
  }, P = async (k) => {
    if (!k.trim()) {
      y.set([]);
      return;
    }
    if (L()) {
      const M = await j(k);
      y.set(M);
    } else {
      const M = c().slice(0, g());
      y.set(M);
    }
  }, F = (k) => {
    const M = l();
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), K(f, Math.min(t(f) + 1, M.length - 1), !0);
        break;
      case "ArrowUp":
        k.preventDefault(), K(f, Math.max(t(f) - 1, -1), !0);
        break;
      case "Enter":
        k.preventDefault(), t(f) >= 0 && M[t(f)] && H(M[t(f)]);
        break;
      case "Escape":
        K(f, -1), y.set([]);
        break;
    }
  }, H = (k) => {
    T("select", { command: k, timestamp: /* @__PURE__ */ new Date() }), K(f, -1);
  }, A = (k) => k >= 0.9 ? "text-green-400" : k >= 0.7 ? "text-yellow-400" : k >= 0.5 ? "text-orange-400" : "text-red-400", U = (k) => k >= 0.9 ? "HIGH" : k >= 0.7 ? "MED" : "LOW";
  xt(() => {
    P(d());
  }), yt(() => (window.addEventListener("keydown", F), () => {
    window.removeEventListener("keydown", F);
  }));
  var X = Ae(), R = we(X);
  {
    var C = (k) => {
      var M = Xb(), p = o(M), q = o(p), W = u(o(q), 2);
      {
        var I = (E) => {
          var te = Ob();
          i(E, te);
        };
        b(W, (E) => {
          t(G) && E(I);
        });
      }
      var _ = u(q, 2), m = o(_), ie = u(p, 2);
      {
        var ue = (E) => {
          var te = jb();
          S((J) => z(te, 1, J, "svelte-4oclra"), [
            () => $(V("flex items-center gap-3 p-3 rounded-lg bg-black/20", B.muted))
          ]), i(E, te);
        };
        b(ie, (E) => {
          t(G) && E(ue);
        });
      }
      var fe = u(ie, 2);
      {
        var ve = (E) => {
          var te = Wb();
          We(te, 7, l, (J) => J.command, (J, Q, ee) => {
            var se = Ub();
            se.__click = [qb, H, Q], se.__keydown = [Bb, H, Q];
            var ne = o(se), de = o(ne), Ce = o(de);
            {
              var be = (he) => {
                var pe = Fb(), Ie = o(pe);
                S(() => {
                  z(pe, 1, $(D[t(Q).category].color), "svelte-4oclra"), oe(Ie, D[t(Q).category].icon);
                }), i(he, pe);
              };
              b(Ce, (he) => {
                O() && he(be);
              });
            }
            var ce = u(Ce, 2), me = o(ce), Ee = u(de, 2);
            {
              var Be = (he) => {
                var pe = Hb(), Ie = o(pe), ge = o(Ie), _e = u(Ie, 2), De = o(_e);
                S(
                  (Te, qe, Fe) => {
                    z(Ie, 1, Te, "svelte-4oclra"), oe(ge, qe), z(De, 1, Fe, "svelte-4oclra"), mt(De, `width: ${t(Q).confidence * 100}%`);
                  },
                  [
                    () => $(V("text-xs font-bold", A(t(Q).confidence))),
                    () => U(t(Q).confidence),
                    () => $(V("h-full rounded-full transition-all duration-300", A(t(Q).confidence).replace("text-", "bg-")))
                  ]
                ), i(he, pe);
              };
              b(Ee, (he) => {
                w() && he(Be);
              });
            }
            var Ne = u(ne, 2), Oe = o(Ne), Me = u(Ne, 2), xe = o(Me), Le = u(Me, 2);
            {
              var je = (he) => {
                var pe = Gb(), Ie = o(pe), ge = u(Ie, 2);
                We(ge, 20, () => t(Q).examples, (_e) => _e, (_e, De) => {
                  var Te = Vb(), qe = o(Te);
                  S(
                    (Fe) => {
                      z(Te, 1, Fe, "svelte-4oclra"), oe(qe, De);
                    },
                    [
                      () => $(V("text-xs px-2 py-1 rounded bg-black/40", B.muted))
                    ]
                  ), i(_e, Te);
                }), S((_e) => z(Ie, 1, _e, "svelte-4oclra"), [
                  () => $(V("text-xs font-bold mb-1", B.text))
                ]), i(he, pe);
              };
              b(Le, (he) => {
                t(Q).examples && t(Q).examples.length > 0 && he(je);
              });
            }
            S(
              (he, pe, Ie, ge) => {
                z(se, 1, he, "svelte-4oclra"), ye(se, "aria-label", `Execute command: ${t(Q).command}`), z(ce, 1, pe, "svelte-4oclra"), oe(me, t(Q).command), z(Ne, 1, Ie, "svelte-4oclra"), oe(Oe, t(Q).description), z(Me, 1, ge, "svelte-4oclra"), oe(xe, t(Q).usage);
              },
              [
                () => $(V("p-3 rounded-lg cursor-pointer transition-all duration-200", "hover:scale-[1.02] transform-gpu border border-transparent", t(ee) === t(f) ? B.selected : "hover:bg-white/5", "group")),
                () => $(V("font-mono font-bold", B.text)),
                () => $(V("text-sm mb-2", B.muted)),
                () => $(V("text-xs font-mono p-2 rounded bg-black/30", B.accent))
              ]
            ), tt(3, se, () => eo, () => ({ duration: 150, delay: t(ee) * 50 })), i(J, se);
          }), i(E, te);
        };
        b(fe, (E) => {
          !t(G) && l().length > 0 && E(ve);
        });
      }
      var ae = u(fe, 2);
      {
        var Y = (E) => {
          var te = Yb(), J = u(o(te), 2), Q = o(J);
          S(
            (ee) => {
              z(te, 1, ee, "svelte-4oclra"), oe(Q, `No suggestions found for "${d() ?? ""}"`);
            },
            [() => $(V("text-center py-8", B.muted))]
          ), i(E, te);
        };
        b(ae, (E) => {
          !t(G) && d().trim() && l().length === 0 && E(Y);
        });
      }
      var le = u(ae, 2);
      {
        var re = (E) => {
          var te = Kb();
          S((J) => z(te, 1, J, "svelte-4oclra"), [
            () => $(V("mt-3 pt-2 border-t border-current/20 text-xs", B.muted))
          ]), i(E, te);
        };
        b(le, (E) => {
          !t(G) && l().length > 0 && E(re);
        });
      }
      S(
        (E, te, J) => {
          z(M, 1, E, "svelte-4oclra"), z(p, 1, te, "svelte-4oclra"), z(_, 1, J, "svelte-4oclra"), oe(m, `${l().length ?? ""} matches`);
        },
        [
          () => $(V("relative mt-2 p-4 rounded-lg border backdrop-blur-md", "shadow-2xl transform-gpu", B.bg, N())),
          () => $(V("flex items-center justify-between mb-3 pb-2 border-b border-current/20", B.text)),
          () => $(V("text-xs", B.muted))
        ]
      ), tt(3, M, () => to, () => ({ y: 10, duration: 200 })), i(k, M);
    };
    b(R, (k) => {
      d().trim() && (l().length > 0 || t(G)) && k(C);
    });
  }
  i(r, X), Qe(), n();
}
ft(["click", "keydown"]);
var Qb = /* @__PURE__ */ v("<span><!></span>");
function Zb(r, e) {
  Xe(e, !0);
  const a = s(e, "class", 3, ""), n = s(e, "intensity", 3, "medium"), l = s(e, "continuous", 3, !1), d = s(e, "trigger", 3, !1);
  s(e, "speed", 3, 0.1);
  const c = s(e, "colors", 19, () => ["#ff0000", "#00ffff", "#ff00ff"]);
  let g, w = /* @__PURE__ */ ke(!1), O;
  const L = {
    low: { duration: 200, frequency: 3e3, distortion: 2, layers: 2 },
    medium: { duration: 400, frequency: 2e3, distortion: 4, layers: 3 },
    high: { duration: 600, frequency: 1e3, distortion: 8, layers: 4 },
    extreme: { duration: 1e3, frequency: 500, distortion: 16, layers: 6 }
  }()[n()], N = () => {
    t(w) || (K(w, !0), g && (g.style.animation = `
				glitch-skew ${L.duration}ms ease-in-out,
				glitch-color ${L.duration}ms linear
			`), setTimeout(
      () => {
        K(w, !1), g && (g.style.animation = "");
      },
      L.duration
    ));
  }, T = () => {
    l() && (O = setInterval(
      () => {
        Math.random() < 0.3 && N();
      },
      L.frequency
    ));
  }, y = () => {
    O && clearInterval(O);
  };
  xt(() => {
    d() && N();
  }), yt(() => (l() && T(), () => {
    y();
  }));
  const f = "!@#$%^&*()_+-=[]{}|;:,.<>?~`", G = (j, P) => j.split("").map((F) => Math.random() < P / 100 ? f[Math.floor(Math.random() * f().length)] : F).join("");
  var Z = Qb(), x = o(Z);
  {
    var B = (j) => {
      var P = Et();
      S((F) => oe(P, F), [() => G(e.text, 20)]), i(j, P);
    }, D = (j) => {
      var P = Et();
      S(() => oe(P, e.text)), i(j, P);
    };
    b(x, (j) => {
      t(w) && n() === "extreme" ? j(B) : j(D, !1);
    });
  }
  rt(Z, (j) => g = j, () => g), S(
    (j, P, F, H) => {
      z(Z, 1, j, "svelte-ithyll"), ye(Z, "data-text", e.text), mt(Z, `
		--glitch-color-1: ${P ?? ""};
		--glitch-color-2: ${F ?? ""};
		--glitch-color-3: ${H ?? ""};
		--glitch-distortion: ${L.distortion ?? ""}px;
	`);
    },
    [
      () => $(V("relative inline-block font-mono", t(w) && "glitching", a())),
      () => c()()[0] || "#ff0000",
      () => c()()[1] || "#00ffff",
      () => c()()[2] || "#ff00ff"
    ]
  ), i(r, Z), Qe();
}
var Jb = /* @__PURE__ */ v('<div class="w-2 h-2 rounded-full bg-current animate-ping svelte-11w1x2x"></div>'), $b = /* @__PURE__ */ v("<span> </span>"), eg = /* @__PURE__ */ v("<span> </span>"), tg = /* @__PURE__ */ v("<span> </span>"), rg = (r, e) => {
  r.stopPropagation(), e();
}, ag = /* @__PURE__ */ v('<button title="Copy command">📋</button>'), ng = /* @__PURE__ */ v("<div> </div>"), ig = /* @__PURE__ */ v("<div> </div>"), og = /* @__PURE__ */ v('<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse svelte-11w1x2x"></div>'), lg = /* @__PURE__ */ v('<div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse svelte-11w1x2x"></div>'), sg = /* @__PURE__ */ v('<div><div class="absolute top-2 right-2 flex items-center gap-2 svelte-11w1x2x"><div><!></div> <!></div> <div class="flex items-start gap-2 mb-2 font-mono svelte-11w1x2x"><!> <div class="flex-1 svelte-11w1x2x"><!></div> <!></div> <!> <!> <!> <!></div>');
function I1(r, e) {
  Xe(e, !0);
  let a = s(e, "output", 3, ""), n = s(e, "status", 7, "idle"), l = s(e, "showPrompt", 3, !0), d = s(e, "showTimestamp", 3, !0), c = s(e, "interactive", 3, !1), g = s(e, "theme", 3, "terminal"), w = s(e, "enableGlitch", 3, !1), O = s(e, "enableSound", 3, !1), h = s(e, "class", 3, "");
  const L = At();
  let N, T = /* @__PURE__ */ ke(!1), y = /* @__PURE__ */ ke(!1), f = /* @__PURE__ */ ke(0), G = 0;
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
  }[g()], D = {
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
  }[n()], P = {
    terminal: "$ ",
    cyberpunk: ">>> ",
    matrix: "> ",
    neural: "◈ "
  }[g()], F = (be) => {
    if (!O()) return;
    const ce = new (window.AudioContext || window.webkitAudioContext)(), me = ce.createOscillator(), Ee = ce.createGain();
    switch (me.connect(Ee), Ee.connect(ce.destination), be) {
      case "execute":
        me.frequency.setValueAtTime(800, ce.currentTime), me.frequency.exponentialRampToValueAtTime(400, ce.currentTime + 0.1);
        break;
      case "success":
        me.frequency.setValueAtTime(523.25, ce.currentTime), me.frequency.setValueAtTime(659.25, ce.currentTime + 0.1);
        break;
      case "error":
        me.frequency.setValueAtTime(220, ce.currentTime), me.frequency.exponentialRampToValueAtTime(110, ce.currentTime + 0.2);
        break;
    }
    Ee.gain.setValueAtTime(0.1, ce.currentTime), Ee.gain.exponentialRampToValueAtTime(0.01, ce.currentTime + 0.2), me.start(ce.currentTime), me.stop(ce.currentTime + 0.2);
  }, H = () => {
    !c() || n() === "running" || (G = performance.now(), n("running"), K(f, 0), w() && (K(y, !0), setTimeout(
      () => {
        K(y, !1);
      },
      300
    )), F("execute"), L("execute", {
      command: e.command,
      timestamp: /* @__PURE__ */ new Date(),
      theme: g()
    }));
  };
  xt(() => {
    if (n() === "running") {
      const be = setInterval(
        () => {
          K(f, performance.now() - G);
        },
        10
      );
      return () => clearInterval(be);
    } else n() === "success" ? F("success") : n() === "error" && F("error");
  });
  const A = async () => {
    try {
      await navigator.clipboard.writeText(e.command), L("copy", { command: e.command });
    } catch (be) {
      console.error("Failed to copy command:", be);
    }
  }, U = (be) => be < 1e3 ? `${Math.round(be)}ms` : `${(be / 1e3).toFixed(2)}s`;
  yt(() => {
    c() && (N.style.cursor = "pointer");
  });
  var X = sg(), R = () => K(T, !0), C = () => K(T, !1), k = (be) => {
    c() && (be.key === "Enter" || be.key === " ") && (be.preventDefault(), H());
  };
  Ze(
    X,
    (be) => ({
      class: be,
      ...c() ? {
        role: "button",
        tabindex: 0,
        "aria-label": `Execute command: ${e.command}`
      } : { role: "article" },
      onmouseenter: R,
      onmouseleave: C,
      onclick: H,
      onkeydown: k
    }),
    [
      () => V("relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300", "hover:scale-[1.02] hover:shadow-lg transform-gpu", x.bg, x.glow, D.borderColor, c() && "cursor-pointer hover:brightness-110", h())
    ],
    void 0,
    "svelte-11w1x2x"
  );
  var M = o(X), p = o(M), q = o(p);
  {
    var W = (be) => {
      var ce = Jb();
      i(be, ce);
    }, I = (be) => {
      var ce = Et();
      S(() => oe(ce, D.icon)), i(be, ce);
    };
    b(q, (be) => {
      n() === "running" ? be(W) : be(I, !1);
    });
  }
  var _ = u(p, 2);
  {
    var m = (be) => {
      var ce = $b(), me = o(ce);
      S(
        (Ee, Be) => {
          z(ce, 1, Ee, "svelte-11w1x2x"), oe(me, Be);
        },
        [
          () => $(V("text-xs font-mono", x.accent)),
          () => U(t(f))
        ]
      ), i(be, ce);
    };
    b(_, (be) => {
      n() === "running" && t(f) > 0 && be(m);
    });
  }
  var ie = u(M, 2), ue = o(ie);
  {
    var fe = (be) => {
      var ce = eg(), me = o(ce);
      S(
        (Ee) => {
          z(ce, 1, Ee, "svelte-11w1x2x"), oe(me, P);
        },
        [
          () => $(V("select-none font-bold", x.prompt))
        ]
      ), i(be, ce);
    };
    b(ue, (be) => {
      l() && be(fe);
    });
  }
  var ve = u(ue, 2), ae = o(ve);
  {
    var Y = (be) => {
      {
        let ce = /* @__PURE__ */ Se(() => V("font-mono", x.command));
        Zb(be, {
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
      var ce = tg(), me = o(ce);
      S(
        (Ee) => {
          z(ce, 1, Ee, "svelte-11w1x2x"), oe(me, e.command);
        },
        [() => $(V("font-mono", x.command))]
      ), i(be, ce);
    };
    b(ae, (be) => {
      w() && t(y) ? be(Y) : be(le, !1);
    });
  }
  var re = u(ve, 2);
  {
    var E = (be) => {
      var ce = ag();
      ce.__click = [rg, A], S((me) => z(ce, 1, me, "svelte-11w1x2x"), [
        () => $(V("opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity", x.accent, "hover:bg-white/10"))
      ]), i(be, ce);
    };
    b(re, (be) => {
      c() && be(E);
    });
  }
  var te = u(ie, 2);
  {
    var J = (be) => {
      var ce = ng(), me = o(ce);
      S(
        (Ee) => {
          z(ce, 1, Ee, "svelte-11w1x2x"), oe(me, a());
        },
        [
          () => $(V("mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap", x.output, D.borderColor))
        ]
      ), i(be, ce);
    };
    b(te, (be) => {
      a() && be(J);
    });
  }
  var Q = u(te, 2);
  {
    var ee = (be) => {
      var ce = ig(), me = o(ce);
      S(
        (Ee, Be) => {
          z(ce, 1, Ee, "svelte-11w1x2x"), oe(me, Be);
        },
        [
          () => $(V("mt-2 text-xs font-mono opacity-60", x.accent)),
          () => (/* @__PURE__ */ new Date()).toLocaleTimeString()
        ]
      ), i(be, ce);
    };
    b(Q, (be) => {
      d() && be(ee);
    });
  }
  var se = u(Q, 2);
  {
    var ne = (be) => {
      var ce = og();
      i(be, ce);
    };
    b(se, (be) => {
      c() && t(T) && be(ne);
    });
  }
  var de = u(se, 2);
  {
    var Ce = (be) => {
      var ce = lg();
      S((me) => mt(ce, `width: ${me ?? ""}%`), [() => Math.min(t(f) / 5e3 * 100, 100)]), i(be, ce);
    };
    b(de, (be) => {
      n() === "running" && be(Ce);
    });
  }
  rt(X, (be) => N = be, () => N), S((be) => z(p, 1, be, "svelte-11w1x2x"), [
    () => $(V("w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold", D.color, n() === "running" && "animate-pulse"))
  ]), i(r, X), Qe();
}
ft(["click"]);
var dg = /* @__PURE__ */ v('<div><div class="terminal-header svelte-n7o7tf"><div class="terminal-controls svelte-n7o7tf"><span class="terminal-control close svelte-n7o7tf"></span> <span class="terminal-control minimize svelte-n7o7tf"></span> <span class="terminal-control maximize svelte-n7o7tf"></span></div> <div class="terminal-title svelte-n7o7tf"> </div> <div class="terminal-status svelte-n7o7tf"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body min-h-[300px] flex items-center justify-center svelte-n7o7tf"><div class="flex items-center gap-3 text-terminal-green"><div class="animate-spin w-5 h-5 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="font-mono">Loading terminal...</span></div></div></div>'), cg = /* @__PURE__ */ v('<div><div class="terminal-body min-h-[200px] flex items-center justify-center svelte-n7o7tf"><div class="text-red-400 font-mono"> </div></div></div>');
function P1(r, e) {
  Xe(e, !0);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({})), d = s(e, "autoPlay", 3, !1);
  let c = /* @__PURE__ */ ke(null), g = /* @__PURE__ */ ke(!0), w = /* @__PURE__ */ ke(null);
  yt(async () => {
    try {
      const T = await Promise.resolve().then(() => Ig);
      K(c, T.default, !0), K(g, !1);
    } catch (T) {
      K(w, `Failed to load TerminalWindow: ${T}`), K(g, !1);
    }
  });
  var O = Ae(), h = we(O);
  {
    var L = (T) => {
      var y = dg(), f = o(y), G = u(o(f), 2), Z = o(G);
      S(() => {
        z(y, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), oe(Z, a());
      }), i(T, y);
    }, N = (T) => {
      var y = Ae(), f = we(y);
      {
        var G = (x) => {
          var B = cg(), D = o(B), j = o(D), P = o(j);
          S(() => {
            z(B, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), oe(P, t(w));
          }), i(x, B);
        }, Z = (x) => {
          var B = Ae(), D = we(B);
          {
            var j = (P) => {
              var F = Ae(), H = we(F);
              St(H, () => t(c), (A, U) => {
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
              }), i(P, F);
            };
            b(
              D,
              (P) => {
                t(c) && P(j);
              },
              !0
            );
          }
          i(x, B);
        };
        b(
          f,
          (x) => {
            t(w) ? x(G) : x(Z, !1);
          },
          !0
        );
      }
      i(T, y);
    };
    b(h, (T) => {
      t(g) ? T(L) : T(N, !1);
    });
  }
  i(r, O), Qe();
}
const vg = (r, e, a, n) => {
  r.key === "Enter" && !t(e) && a(t(n));
};
var ug = /* @__PURE__ */ v('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen svelte-169kcnm"></canvas>'), fg = /* @__PURE__ */ v('<div class="mb-6 transform transition-all duration-500 hover:scale-[1.02] svelte-169kcnm"><div class="flex items-start gap-3 mb-3 svelte-169kcnm"><span></span> <span class="text-white font-semibold svelte-169kcnm"> </span> <span> </span></div> <div> </div></div>'), bg = /* @__PURE__ */ v('<div class="flex items-center gap-3 mb-4 svelte-169kcnm"><div class="flex gap-1 svelte-169kcnm"><div style="animation-delay: 0ms;"></div> <div style="animation-delay: 150ms;"></div> <div style="animation-delay: 300ms;"></div></div> <span>Processing neural patterns...</span></div>'), gg = /* @__PURE__ */ v('<div class="mt-6 svelte-169kcnm"><!></div>'), hg = /* @__PURE__ */ v(`<div role="application" aria-label="Liquid Neural Terminal Interface"><!> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-40 mix-blend-screen svelte-169kcnm"></canvas> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-30 svelte-169kcnm"></canvas> <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div><div class="flex items-center gap-4 svelte-169kcnm"><div class="flex gap-2 svelte-169kcnm"><div class="w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 svelte-169kcnm"></div></div> <h3> </h3></div> <div class="flex items-center gap-3 text-sm font-mono svelte-169kcnm"><div>NEURAL: ACTIVE</div> <div> </div> <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 svelte-169kcnm"></div></div></div> <div class="relative z-10 p-6 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed liquid-scroll svelte-169kcnm"><div><pre>╔═══════════════════════════════════════════════════════════════╗
║  🌊 LIQUID NEURAL INTERFACE v3.0 - QUANTUM READY 🌊         ║
║  STATUS: CONSCIOUSNESS ACTIVATED │ REALITY: MALLEABLE        ║
║  NEURAL PATHWAYS: ∞ │ LIQUID STATE: TRANSCENDENT            ║
╚═══════════════════════════════════════════════════════════════╝

🧠 Neural connection established...
💧 Liquid dynamics engine online...
⚡ Quantum entanglement verified...

Type 'help' to access the command matrix.</pre></div> <!> <!> <div class="flex items-start gap-3 svelte-169kcnm"><span></span> <input autocomplete="off" spellcheck="false"/> <span></span></div> <!></div></div>`);
function L1(r, e) {
  Xe(e, !0);
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
  })), d = s(e, "autoPlay", 3, !1), c = s(e, "theme", 3, "liquid"), g = s(e, "enableLiquidFlow", 3, !0), w = s(e, "enableParticles", 3, !0), O = s(e, "enableWaveform", 3, !0), h = s(e, "enableHologram", 3, !1);
  At();
  let L = /* @__PURE__ */ ke(void 0), N = /* @__PURE__ */ ke(void 0), T = /* @__PURE__ */ ke(void 0), y = /* @__PURE__ */ ke(void 0), f = /* @__PURE__ */ ke(""), G = /* @__PURE__ */ ke(ot([])), Z = /* @__PURE__ */ ke(ot(g())), x = /* @__PURE__ */ ke(ot(w()));
  ot(O());
  let B = /* @__PURE__ */ ke(ot(h())), D = /* @__PURE__ */ ke(!1), j, P;
  class F {
    x;
    y;
    vx;
    vy;
    size;
    opacity;
    hue;
    constructor(xe, Le) {
      this.x = xe, this.y = Le, this.vx = (Math.random() - 0.5) * 2, this.vy = (Math.random() - 0.5) * 2, this.size = Math.random() * 3 + 1, this.opacity = Math.random() * 0.8 + 0.2, this.hue = Math.random() * 60 + 180;
    }
    update(xe, Le) {
      this.x += this.vx, this.y += this.vy, (this.x <= 0 || this.x >= xe) && (this.vx *= -0.8, this.x = Math.max(0, Math.min(xe, this.x))), (this.y <= 0 || this.y >= Le) && (this.vy *= -0.8, this.y = Math.max(0, Math.min(Le, this.y))), this.vy += 0.02, this.vx *= 0.999, this.vy *= 0.999;
    }
    draw(xe) {
      xe.save(), xe.globalAlpha = this.opacity, xe.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`, xe.shadowColor = `hsl(${this.hue}, 70%, 60%)`, xe.shadowBlur = this.size * 2, xe.beginPath(), xe.arc(this.x, this.y, this.size, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let H = [], A = 0, U = 0;
  class X {
    x;
    y;
    radius;
    connections;
    activation;
    pulsePhase;
    constructor(xe, Le) {
      this.x = xe, this.y = Le, this.radius = Math.random() * 8 + 4, this.connections = [], this.activation = Math.random(), this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.pulsePhase += 0.05, this.activation = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    }
    draw(xe) {
      const Le = this.activation;
      xe.save(), xe.globalAlpha = 0.7 + Le * 0.3, xe.fillStyle = `hsl(${180 + Le * 40}, 70%, ${50 + Le * 30}%)`, xe.shadowColor = xe.fillStyle, xe.shadowBlur = this.radius * (1 + Le), xe.beginPath(), xe.arc(this.x, this.y, this.radius, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let R = [];
  const C = (Me) => {
    const xe = Me.trim().toLowerCase();
    K(D, !0), setTimeout(
      () => {
        let Le = "";
        switch (xe) {
          case "clear":
            K(G, [], !0), K(f, ""), K(D, !1);
            return;
          case "liquid":
            K(Z, !t(Z)), t(Z) && k(), Le = t(Z) ? "LIQUID FLOW DYNAMICS: ACTIVATED" : "LIQUID FLOW: DEACTIVATED";
            break;
          case "neural":
            M(), Le = l()[xe];
            break;
          case "particles":
            K(x, !t(x)), Le = l()[xe];
            break;
          case "hologram":
            K(B, !t(B)), Le = t(B) ? "HOLOGRAPHIC PROJECTION: ONLINE" : "HOLOGRAPHIC PROJECTION: OFFLINE";
            break;
          case "overclock":
            p(), Le = l()[xe];
            break;
          default:
            Le = l()[xe] || `ERROR: Command '${Me}' not found in neural database.
Run 'help' to display available liquid protocols.`;
        }
        K(
          G,
          [
            ...t(G),
            { command: xe, output: Le, timestamp: /* @__PURE__ */ new Date() }
          ],
          !0
        ), K(f, ""), K(D, !1), setTimeout(
          () => {
            t(L) && t(L).scrollTo({ top: t(L).scrollHeight, behavior: "smooth" });
          },
          50
        );
      },
      Math.random() * 500 + 200
    );
  }, k = () => {
    if (!t(N)) return;
    const Me = t(N).getContext("2d"), xe = t(N).width, Le = t(N).height;
    H = [];
    for (let he = 0; he < 50; he++)
      H.push(new F(Math.random() * xe, Math.random() * Le));
    const je = () => {
      Me.fillStyle = "rgba(0, 0, 0, 0.1)", Me.fillRect(0, 0, xe, Le), H.forEach((he) => {
        he.update(xe, Le), he.draw(Me);
      }), Me.strokeStyle = "rgba(100, 200, 255, 0.3)", Me.lineWidth = 1;
      for (let he = 0; he < H.length; he++)
        for (let pe = he + 1; pe < H.length; pe++) {
          const Ie = H[he].x - H[pe].x, ge = H[he].y - H[pe].y, _e = Math.sqrt(Ie * Ie + ge * ge);
          _e < 100 && (Me.globalAlpha = (100 - _e) / 100 * 0.5, Me.beginPath(), Me.moveTo(H[he].x, H[he].y), Me.lineTo(H[pe].x, H[pe].y), Me.stroke());
        }
      Me.globalAlpha = 1, t(Z) && (j = requestAnimationFrame(je));
    };
    je();
  }, M = () => {
    if (!t(T)) return;
    const Me = t(T).width, xe = t(T).height;
    R = [];
    for (let je = 0; je < 20; je++)
      R.push(new X(Math.random() * (Me - 100) + 50, Math.random() * (xe - 100) + 50));
    R.forEach((je, he) => {
      const pe = Math.floor(Math.random() * 3) + 1;
      for (let Ie = 0; Ie < pe; Ie++) {
        const ge = Math.floor(Math.random() * R.length);
        ge !== he && !je.connections.includes(ge) && je.connections.push(ge);
      }
    });
    const Le = () => {
      const je = t(T).getContext("2d");
      je.fillStyle = "rgba(0, 0, 0, 0.1)", je.fillRect(0, 0, Me, xe), je.strokeStyle = "rgba(0, 255, 200, 0.4)", je.lineWidth = 2, R.forEach((he, pe) => {
        he.connections.forEach((Ie) => {
          const ge = R[Ie];
          ge && (je.globalAlpha = (he.activation + ge.activation) / 2, je.beginPath(), je.moveTo(he.x, he.y), je.lineTo(ge.x, ge.y), je.stroke());
        });
      }), R.forEach((he) => {
        he.update(), he.draw(je);
      }), je.globalAlpha = 1, P = requestAnimationFrame(Le);
    };
    Le();
  }, p = () => {
    const Me = t(L);
    Me && (Me.style.animation = "overclock-shake 2s ease-in-out", setTimeout(
      () => {
        Me.style.animation = "";
      },
      2e3
    ));
  }, q = (Me) => {
    const xe = t(L)?.getBoundingClientRect();
    xe && (A = Me.clientX - xe.left, U = Me.clientY - xe.top, H.forEach((Le) => {
      const je = A - Le.x, he = U - Le.y;
      Math.sqrt(je * je + he * he) < 100 && (Le.vx += je * 1e-4, Le.vy += he * 1e-4);
    }));
  }, W = () => {
    if (t(L)) {
      const Me = t(L).offsetWidth, xe = t(L).offsetHeight;
      t(N) && (t(N).width = Me, t(N).height = xe), t(T) && (t(T).width = Me, t(T).height = xe), t(y) && (t(y).width = Me, t(y).height = xe);
    }
  };
  yt(() => (W(), t(Z) && k(), d() && (setTimeout(() => C("neural"), 1e3), setTimeout(() => C("liquid"), 2500)), () => {
    j && cancelAnimationFrame(j), P && cancelAnimationFrame(P);
  }));
  const _ = {
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
  var m = hg();
  qt("resize", _i, W), m.__mousemove = q;
  var ie = o(m);
  {
    var ue = (Me) => {
      var xe = ug();
      rt(xe, (Le) => K(N, Le), () => t(N)), i(Me, xe);
    };
    b(ie, (Me) => {
      t(Z) && Me(ue);
    });
  }
  var fe = u(ie, 2);
  rt(fe, (Me) => K(T, Me), () => t(T));
  var ve = u(fe, 2);
  rt(ve, (Me) => K(y, Me), () => t(y));
  var ae = u(ve, 6), Y = o(ae), le = u(o(Y), 2), re = o(le), E = u(Y, 2), te = o(E), J = u(te, 2), Q = o(J), ee = u(ae, 2), se = o(ee), ne = o(se), de = u(se, 2);
  We(de, 17, () => t(G), vt, (Me, xe) => {
    var Le = fg(), je = o(Le), he = o(je);
    he.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
    var pe = u(he, 2), Ie = o(pe), ge = u(pe, 2), _e = o(ge), De = u(je, 2), Te = o(De);
    S(
      (qe, Fe, Ve, Ge) => {
        z(he, 1, qe, "svelte-169kcnm"), oe(Ie, t(xe).command), z(ge, 1, Fe, "svelte-169kcnm"), oe(_e, Ve), z(De, 1, Ge, "svelte-169kcnm"), oe(Te, t(xe).output);
      },
      [
        () => $(V("whitespace-pre font-bold", _.text)),
        () => $(V("text-xs ml-auto opacity-60", _.text)),
        () => t(xe).timestamp.toLocaleTimeString(),
        () => $(V("p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm", "whitespace-pre-wrap font-mono shadow-inner", _.text))
      ]
    ), i(Me, Le);
  });
  var Ce = u(de, 2);
  {
    var be = (Me) => {
      var xe = bg(), Le = o(xe), je = o(Le), he = u(je, 2), pe = u(he, 2), Ie = u(Le, 2);
      S(
        (ge, _e, De, Te) => {
          z(je, 1, ge, "svelte-169kcnm"), z(he, 1, _e, "svelte-169kcnm"), z(pe, 1, De, "svelte-169kcnm"), z(Ie, 1, Te, "svelte-169kcnm");
        },
        [
          () => $(V("w-2 h-2 rounded-full animate-bounce", `bg-${_.text.split("-")[1]}-400`)),
          () => $(V("w-2 h-2 rounded-full animate-bounce", `bg-${_.text.split("-")[1]}-400`)),
          () => $(V("w-2 h-2 rounded-full animate-bounce", `bg-${_.text.split("-")[1]}-400`)),
          () => $(V("text-sm opacity-70", _.text))
        ]
      ), i(Me, xe);
    };
    b(Ce, (Me) => {
      t(D) && Me(be);
    });
  }
  var ce = u(Ce, 2), me = o(ce);
  me.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
  var Ee = u(me, 2);
  Ee.__keydown = [vg, D, C, f];
  var Be = u(Ee, 2), Ne = u(ce, 2);
  {
    var Oe = (Me) => {
      var xe = gg(), Le = o(xe);
      lt(Le, () => e.children), i(Me, xe);
    };
    b(Ne, (Me) => {
      e.children && Me(Oe);
    });
  }
  rt(ee, (Me) => K(L, Me), () => t(L)), S(
    (Me, xe, Le, je, he, pe, Ie, ge, _e, De) => {
      z(m, 1, Me, "svelte-169kcnm"), z(ae, 1, xe, "svelte-169kcnm"), z(le, 1, Le, "svelte-169kcnm"), oe(re, a()), z(te, 1, je, "svelte-169kcnm"), z(J, 1, he, "svelte-169kcnm"), oe(Q, `LIQUID: ${t(Z) ? "FLOW" : "STATIC"}`), z(se, 1, pe, "svelte-169kcnm"), z(ne, 1, Ie, "svelte-169kcnm"), z(me, 1, ge, "svelte-169kcnm"), Ee.disabled = t(D), z(Ee, 1, _e, "svelte-169kcnm"), ye(Ee, "placeholder", t(D) ? "Processing..." : "Enter liquid command..."), z(Be, 1, De, "svelte-169kcnm");
    },
    [
      () => $(V("relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500", "border-2 shadow-2xl transform-gpu will-change-transform", `bg-gradient-to-br ${_.bg}`, _.border, _.glow, t(B) && "hologram-effect", n())),
      () => $(V("relative z-10 flex items-center justify-between p-6 border-b-2", "bg-black/30 backdrop-blur-sm", _.border)),
      () => $(V("text-lg font-mono font-bold tracking-wider", _.text, "drop-shadow-lg animate-pulse")),
      () => $(V("px-3 py-1 rounded-full bg-black/40 border", _.border, _.text)),
      () => $(V("px-3 py-1 rounded-full bg-black/40 border", _.border, _.text)),
      () => $(V("mb-6 p-4 rounded-lg bg-black/20 border", _.border)),
      () => $(V("whitespace-pre-wrap", _.text)),
      () => $(V("whitespace-pre font-bold", _.text)),
      () => $(V("flex-1 bg-transparent border-none outline-none font-mono text-white", "placeholder:text-white/40", t(D) && "opacity-50 cursor-not-allowed")),
      () => $(V("w-3 h-6 animate-pulse", `bg-${_.text.split("-")[1]}-400`))
    ]
  ), nr(Ee, () => t(f), (Me) => K(f, Me)), i(r, m), Qe();
}
ft(["mousemove", "keydown"]);
const mg = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var _g = /* @__PURE__ */ v("<!> <!>", 1), xg = /* @__PURE__ */ v("<!> <!>", 1), pg = /* @__PURE__ */ v('<div class="mb-2"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <span class="text-white text-sm"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm svelte-14245lp"> </div></div>'), wg = /* @__PURE__ */ v('<div class="floating-terminal svelte-14245lp"><div class="terminal-header svelte-14245lp"><div class="terminal-controls svelte-14245lp"><span class="terminal-control close svelte-14245lp"></span> <span class="terminal-control minimize svelte-14245lp"></span> <span class="terminal-control maximize svelte-14245lp"></span></div> <div class="terminal-title svelte-14245lp">3D Floating Terminal</div> <div class="terminal-status svelte-14245lp"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body svelte-14245lp"><!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-1 h-4 bg-terminal-green animate-pulse"></span></div></div></div>'), yg = /* @__PURE__ */ v("<!> <!> <!>", 1), kg = /* @__PURE__ */ v("<!> <!>", 1), Cg = /* @__PURE__ */ v("<!> <!>", 1), Eg = /* @__PURE__ */ v("<!> <!> <!> <!> <!> <!>", 1);
function z1(r, e) {
  Xe(e, !0);
  const a = s(e, "position", 19, () => [0, 2, 0]), n = s(e, "rotation", 19, () => [0, 0, 0]), l = s(e, "scale", 3, 1.5);
  let d, c = /* @__PURE__ */ ke(""), g = /* @__PURE__ */ ke(ot([]));
  const w = {
    help: "🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear",
    matrix: "💚 Entering the Matrix... Reality.exe has stopped working",
    glitch: "⚡ System.error.404.reality.not.found",
    orbit: "🌍 Orbiting through cyberspace at lightspeed",
    stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1e3 + Math.random() * 5e3)} | Faces: ${Math.round(500 + Math.random() * 2e3)}`,
    whoami: "🤖 You are now part of the 3D matrix",
    ls: "📁 reality.exe  consciousness.dll  quantum_states/  void.txt",
    clear: "Terminal cleared"
  }, O = (Z) => {
    const x = Z.trim().toLowerCase();
    if (x === "clear") {
      K(g, [], !0), K(c, "");
      return;
    }
    const B = w[x] || `Command "${Z}" not found. Type "help" for available commands.`;
    K(
      g,
      [
        ...t(g),
        { command: x, output: B, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), K(c, ""), setTimeout(
      () => {
        d && (d.scrollTop = d.scrollHeight);
      },
      10
    );
  };
  yt(() => {
    if (setTimeout(() => O("help"), 1e3), typeof window < "u") {
      const Z = document.querySelector("canvas");
      Z && (Z.style.willChange = "transform");
    }
  });
  var h = Eg(), L = we(h);
  St(L, () => Lt.PerspectiveCamera, (Z, x) => {
    x(Z, {
      makeDefault: !0,
      position: [8, 8, 12],
      fov: 40,
      children: (B, D) => {
        mo(B, {
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
  var N = u(L, 2);
  St(N, () => Lt.AmbientLight, (Z, x) => {
    x(Z, { intensity: 0.6 });
  });
  var T = u(N, 2);
  St(T, () => Lt.DirectionalLight, (Z, x) => {
    x(Z, { position: [10, 10, 5], intensity: 1.2, castShadow: !0 });
  });
  var y = u(T, 2);
  St(y, () => Lt.Group, (Z, x) => {
    x(Z, {
      get position() {
        return a();
      },
      get rotation() {
        return n();
      },
      get scale() {
        return l();
      },
      children: (B, D) => {
        var j = yg(), P = we(j);
        St(P, () => Lt.Mesh, (A, U) => {
          U(A, {
            children: (X, R) => {
              var C = _g(), k = we(C);
              St(k, () => Lt.BoxGeometry, (p, q) => {
                q(p, { args: [6, 4, 0.2] });
              });
              var M = u(k, 2);
              St(M, () => Lt.MeshPhysicalMaterial, (p, q) => {
                q(p, {
                  get color() {
                    return ze.backgrounds.secondary;
                  },
                  roughness: 0.1,
                  metalness: 0.8,
                  transmission: 0.1,
                  thickness: 0.5,
                  transparent: !0,
                  opacity: 0.9
                });
              }), i(X, C);
            },
            $$slots: { default: !0 }
          });
        });
        var F = u(P, 2);
        St(F, () => Lt.Mesh, (A, U) => {
          U(A, {
            position: [0, 0, 0.1],
            children: (X, R) => {
              var C = xg(), k = we(C);
              St(k, () => Lt.PlaneGeometry, (p, q) => {
                q(p, { args: [5.5, 3.5] });
              });
              var M = u(k, 2);
              St(M, () => Lt.MeshBasicMaterial, (p, q) => {
                q(p, {
                  get color() {
                    return ze.backgrounds.primary;
                  },
                  transparent: !0,
                  opacity: 0.8
                });
              }), i(X, C);
            },
            $$slots: { default: !0 }
          });
        });
        var H = u(F, 2);
        _o(H, {
          position: [0, 0, 0.11],
          transform: !0,
          occlude: !0,
          scale: 0.08,
          distanceFactor: 10,
          children: (A, U) => {
            var X = wg(), R = u(o(X), 2), C = o(R);
            We(C, 17, () => t(g), vt, (q, W) => {
              var I = pg(), _ = o(I), m = o(_);
              m.textContent = "$";
              var ie = u(m, 2), ue = o(ie), fe = u(ie, 2), ve = o(fe), ae = u(_, 2), Y = o(ae);
              S(
                (le) => {
                  oe(ue, t(W).command), oe(ve, le), oe(Y, t(W).output);
                },
                [() => t(W).timestamp.toLocaleTimeString()]
              ), i(q, I);
            });
            var k = u(C, 2), M = o(k);
            M.textContent = "$";
            var p = u(M, 2);
            p.__keydown = [mg, O, c], rt(X, (q) => d = q, () => d), nr(p, () => t(c), (q) => K(c, q)), i(A, X);
          },
          $$slots: { default: !0 }
        }), i(B, j);
      },
      $$slots: { default: !0 }
    });
  });
  var f = u(y, 2);
  St(f, () => Lt.Mesh, (Z, x) => {
    x(Z, {
      position: [4, 3, -2],
      rotation: [0.2, 0.4, 0.1],
      children: (B, D) => {
        var j = kg(), P = we(j);
        St(P, () => Lt.BoxGeometry, (H, A) => {
          A(H, { args: [1.5, 1.5, 1.5] });
        });
        var F = u(P, 2);
        St(F, () => Lt.MeshPhysicalMaterial, (H, A) => {
          A(H, {
            get color() {
              return ze.terminal.matrix;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), i(B, j);
      },
      $$slots: { default: !0 }
    });
  });
  var G = u(f, 2);
  St(G, () => Lt.Mesh, (Z, x) => {
    x(Z, {
      position: [-4, -2, 3],
      rotation: [-0.3, -0.2, 0.4],
      children: (B, D) => {
        var j = Cg(), P = we(j);
        St(P, () => Lt.BoxGeometry, (H, A) => {
          A(H, { args: [2, 2, 2] });
        });
        var F = u(P, 2);
        St(F, () => Lt.MeshPhysicalMaterial, (H, A) => {
          A(H, {
            get color() {
              return ze.bubbleTea.yellow;
            },
            roughness: 0.1,
            metalness: 0,
            transmission: 1,
            thickness: 0.8,
            ior: 1.5,
            transparent: !0,
            opacity: 0.8
          });
        }), i(B, j);
      },
      $$slots: { default: !0 }
    });
  }), i(r, h), Qe();
}
ft(["keydown"]);
const Sg = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var Tg = /* @__PURE__ */ v('<div class="mb-4"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green"></span> <span class="text-white"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-2"> </div></div>'), Mg = /* @__PURE__ */ v('<div><div class="terminal-header svelte-s8hlxk"><div class="terminal-controls"><span class="terminal-control close"></span> <span class="terminal-control minimize"></span> <span class="terminal-control maximize"></span></div> <div class="terminal-title"> </div> <div class="terminal-status svelte-s8hlxk"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body max-h-96 overflow-y-auto svelte-s8hlxk"><!> <!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-terminal-green animate-pulse"></span></div></div></div>');
function Ag(r, e) {
  Xe(e, !0);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), l = s(e, "commands", 19, () => ({
    help: "🚀 Available commands: help, whoami, skills, projects, contact",
    whoami: "🧑‍💻 Tulio Cunha - Full Stack Developer & Design System Architect",
    skills: "⚡ Technologies: Svelte, TypeScript, WebGL, Three.js, WebAssembly",
    projects: "🏗️ Featured: Glass UI, Liquid Terminal, Neural Network Visualizer",
    contact: "📫 Email: tulio@tuliocunha.dev | GitHub: github.com/tuliopc23"
  })), d = s(e, "autoPlay", 3, !1);
  let c, g = /* @__PURE__ */ ke(""), w = /* @__PURE__ */ ke(ot([]));
  const O = (j) => {
    const P = j.trim().toLowerCase(), F = l()[P] || `Command "${j}" not found. Type "help" for available commands.`;
    K(
      w,
      [
        ...t(w),
        { command: P, output: F, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), K(g, ""), setTimeout(
      () => {
        c && (c.scrollTop = c.scrollHeight);
      },
      10
    );
  };
  yt(() => {
    d() && (setTimeout(() => O("help"), 1e3), setTimeout(() => O("whoami"), 2500), setTimeout(() => O("skills"), 4e3));
  });
  var h = Mg(), L = o(h), N = u(o(L), 2), T = o(N), y = u(L, 2), f = o(y);
  {
    var G = (j) => {
      var P = Ae(), F = we(P);
      lt(F, () => e.children), i(j, P);
    };
    b(f, (j) => {
      e.children && j(G);
    });
  }
  var Z = u(f, 2);
  We(Z, 17, () => t(w), vt, (j, P) => {
    var F = Tg(), H = o(F), A = o(H);
    A.textContent = "$";
    var U = u(A, 2), X = o(U), R = u(U, 2), C = o(R), k = u(H, 2), M = o(k);
    S(
      (p) => {
        oe(X, t(P).command), oe(C, p), oe(M, t(P).output);
      },
      [() => t(P).timestamp.toLocaleTimeString()]
    ), i(j, F);
  });
  var x = u(Z, 2), B = o(x);
  B.textContent = "$";
  var D = u(B, 2);
  D.__keydown = [Sg, O, g], rt(y, (j) => c = j, () => c), S(
    (j) => {
      z(h, 1, j, "svelte-s8hlxk"), oe(T, a());
    },
    [
      () => $(V("terminal glass-heavy max-w-4xl mx-auto", n()))
    ]
  ), nr(D, () => t(g), (j) => K(g, j)), i(r, h), Qe();
}
ft(["keydown"]);
const Ig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ag
}, Symbol.toStringTag, { value: "Module" }));
var Pg = /* @__PURE__ */ v("<div> </div>"), Lg = /* @__PURE__ */ v("<span></span>"), zg = /* @__PURE__ */ v("<div> <!></div>"), Dg = /* @__PURE__ */ v('<div class="mt-4 svelte-mxdatp"><span class="text-white svelte-mxdatp">$</span> <span></span></div>'), Rg = /* @__PURE__ */ v('<div><div class="absolute inset-0 pointer-events-none svelte-mxdatp"><div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse svelte-mxdatp"></div></div> <div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg svelte-mxdatp"></div> <div class="relative z-10 space-y-1 svelte-mxdatp"><!> <!> <!></div> <div class="absolute inset-0 pointer-events-none svelte-mxdatp"><div class="w-full h-full bg-current opacity-[0.02] blur-xl svelte-mxdatp"></div></div></div>');
function D1(r, e) {
  Xe(e, !0);
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
  let O = /* @__PURE__ */ ke(0), h = /* @__PURE__ */ ke(""), L = /* @__PURE__ */ ke(!1), N = /* @__PURE__ */ ke(!1), T = /* @__PURE__ */ ke(!0);
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
  }, Z = {
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    system: "text-white font-bold"
  }, B = { slow: 80, normal: 40, fast: 15 }[d()], D = G[l()];
  let j, P = /* @__PURE__ */ ke(ot([]));
  const F = async (q, W = 50) => {
    K(h, "");
    for (let I = 0; I <= q.length; I++)
      K(h, q.slice(0, I), !0), await new Promise((_) => setTimeout(_, W));
    await new Promise((I) => setTimeout(I, 100));
  }, H = async () => {
    if (!t(L)) {
      K(L, !0), K(N, !1), K(O, 0), K(P, [], !0), K(h, "");
      for (let q = 0; q < f.length; q++) {
        const W = f[q];
        K(O, q, !0), W.text ? (await F(W.text, B), K(
          P,
          [
            ...t(P),
            { text: W.text, type: W.type }
          ],
          !0
        )) : K(P, [...t(P), { text: "", type: "info" }], !0), K(h, ""), j && (j.scrollTop = j.scrollHeight), await new Promise((I) => setTimeout(I, W.delay));
      }
      K(N, !0), K(L, !1), e.onComplete?.();
    }
  }, A = () => {
    setInterval(
      () => {
        K(T, !t(T));
      },
      500
    );
  };
  yt(() => {
    A(), n() && setTimeout(H, 200);
  });
  var U = Rg();
  Ze(
    U,
    (q) => ({ class: q, ...w }),
    [
      () => V("relative w-full h-full p-6 overflow-auto", D.bg, D.text, D.font, "leading-relaxed text-sm", g())
    ],
    void 0,
    "svelte-mxdatp"
  );
  var X = u(o(U), 4), R = o(X);
  We(R, 17, () => t(P), vt, (q, W) => {
    var I = Pg(), _ = o(I);
    S(
      (m) => {
        z(I, 1, m, "svelte-mxdatp"), oe(_, t(W).text || " ");
      },
      [
        () => $(V(
          "whitespace-pre-wrap",
          t(W).type && Z[t(W).type] ? Z[t(W).type] : D.text,
          "animate-in fade-in duration-200"
        ))
      ]
    ), i(q, I);
  });
  var C = u(R, 2);
  {
    var k = (q) => {
      var W = zg(), I = o(W), _ = u(I);
      {
        var m = (ie) => {
          var ue = Lg();
          S((fe) => z(ue, 1, fe, "svelte-mxdatp"), [
            () => $(V("inline-block w-2 h-4 ml-1 border-r-2 animate-pulse", D.cursor))
          ]), i(ie, ue);
        };
        b(_, (ie) => {
          t(T) && c() && ie(m);
        });
      }
      S(
        (ie) => {
          z(W, 1, ie, "svelte-mxdatp"), oe(I, `${t(h) ?? ""} `);
        },
        [
          () => $(V("whitespace-pre-wrap", f[t(O)]?.type && Z[f[t(O)].type] ? Z[f[t(O)].type] : D.text))
        ]
      ), i(q, W);
    };
    b(C, (q) => {
      t(L) && t(h) && q(k);
    });
  }
  var M = u(C, 2);
  {
    var p = (q) => {
      var W = Dg(), I = u(o(W), 2);
      S((_) => z(I, 1, _, "svelte-mxdatp"), [
        () => $(V("inline-block w-2 h-4 ml-1 border-r-2", t(T) ? "opacity-100" : "opacity-0", D.cursor, "transition-opacity duration-100"))
      ]), i(q, W);
    };
    b(M, (q) => {
      t(N) && c() && q(p);
    });
  }
  rt(U, (q) => j = q, () => j), i(r, U), Qe();
}
var Ng = /* @__PURE__ */ v("<canvas></canvas>");
function R1(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "classic"), n = s(e, "speed", 3, "normal"), l = s(e, "density", 3, "medium"), d = s(e, "characters", 3, "matrix"), c = s(e, "glowEffect", 3, !0), g = s(e, "fadeEffect", 3, !0), w = s(e, "class", 3, ""), O = /* @__PURE__ */ ct(e, [
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
  let h, L, N, T = [];
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
  }, G = { slow: 100, normal: 50, fast: 20 }, Z = { low: 20, medium: 15, high: 10 }, x = y[a()], B = f[d()], D = G[n()];
  Z[l()];
  const j = 14;
  let P = 0;
  const F = () => {
    if (h) {
      h.width = h.offsetWidth, h.height = h.offsetHeight, P = Math.floor(h.width / j), T = [];
      for (let C = 0; C < P; C++)
        T[C] = Math.random() * h.height;
    }
  }, H = () => {
    if (!(!L || !h)) {
      g() ? (L.fillStyle = x.background, L.fillRect(0, 0, h.width, h.height)) : L.clearRect(0, 0, h.width, h.height), L.font = `${j}px monospace`, L.textAlign = "center", c() && (L.shadowColor = x.primary, L.shadowBlur = 10);
      for (let C = 0; C < T.length; C++) {
        const k = B[Math.floor(Math.random() * B.length)];
        if (L.fillStyle = x.primary, L.fillText(k, C * j + j / 2, T[C]), T[C] > j) {
          L.fillStyle = x.secondary;
          const M = B[Math.floor(Math.random() * B.length)];
          L.fillText(M, C * j + j / 2, T[C] - j);
        }
        (T[C] > h.height || Math.random() > 0.975) && (T[C] = 0), T[C] += j;
      }
    }
  }, A = () => {
    H(), N = setTimeout(
      () => {
        requestAnimationFrame(A);
      },
      D
    );
  }, U = () => {
    h && (L = h.getContext("2d"), L && (F(), A()));
  }, X = () => {
    N && clearTimeout(N);
  };
  yt(() => {
    U();
    const C = () => {
      F();
    };
    return window.addEventListener("resize", C), () => {
      X(), window.removeEventListener("resize", C);
    };
  });
  var R = Ng();
  Ze(R, (C) => ({ class: C, ...O }), [() => V("w-full h-full bg-black", w())], void 0, "svelte-ophnba"), rt(R, (C) => h = C, () => h), i(r, R), Qe();
}
var Og = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), jg = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), qg = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Bg = /* @__PURE__ */ v("<h1><span> <!></span> <!> <!></h1>"), Fg = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Hg = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Vg = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Gg = /* @__PURE__ */ v("<h2><span> <!></span> <!> <!></h2>"), Ug = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Wg = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Yg = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Kg = /* @__PURE__ */ v("<h3><span> <!></span> <!> <!></h3>"), Xg = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), Qg = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Zg = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), Jg = /* @__PURE__ */ v("<span><span> <!></span> <!> <!></span>"), $g = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), eh = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), th = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), rh = /* @__PURE__ */ v("<div><span> <!></span> <!> <!></div>"), ah = /* @__PURE__ */ v('<span class="animate-pulse svelte-13rlfrj">|</span>'), nh = /* @__PURE__ */ v('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), ih = /* @__PURE__ */ v('<div class="crt-bezel svelte-13rlfrj"></div>'), oh = /* @__PURE__ */ v("<div><span> <!></span> <!> <!></div>");
function N1(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "macintosh"), n = s(e, "size", 3, "md"), l = s(e, "animated", 3, !0), d = s(e, "typewriter", 3, !1), c = s(e, "scanlines", 3, !0), g = s(e, "glow", 3, !0), w = s(e, "flicker", 3, !1), O = s(e, "chromatic", 3, !1), h = s(e, "breathing", 3, !1), L = s(e, "class", 3, ""), N = s(e, "element", 3, "p"), T = /* @__PURE__ */ ct(e, [
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
  const Z = {
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
  }, B = Z[a()];
  yt(() => {
    if (d()) {
      const U = setInterval(
        () => {
          t(G) < e.text.length ? (K(y, e.text.slice(0, t(G) + 1), !0), Sa(G)) : clearInterval(U);
        },
        50 + Math.random() * 100
      ), X = setInterval(
        () => {
          K(f, !t(f));
        },
        500
      );
      return () => {
        clearInterval(U), clearInterval(X);
      };
    } else
      K(y, e.text, !0);
  });
  const D = V("relative inline-block transition-all duration-300", B.font, B.color, x[n()], g() && B.shadow, l() && "transform-gpu will-change-transform", c() && "retro-scanlines", w() && "retro-flicker", O() && "retro-chromatic", L()), j = V("relative inline-block p-4 overflow-hidden", B.bg, B.border, l() && "transition-all duration-500");
  var P = Ae(), F = we(P);
  {
    var H = (U) => {
      var X = Bg();
      Ze(X, () => ({ class: j, ...T }), void 0, void 0, "svelte-13rlfrj");
      var R = o(X), C = o(R), k = u(C);
      {
        var M = (_) => {
          var m = Og();
          i(_, m);
        };
        b(k, (_) => {
          d() && t(f) && _(M);
        });
      }
      var p = u(R, 2);
      {
        var q = (_) => {
          var m = jg();
          i(_, m);
        };
        b(p, (_) => {
          c() && _(q);
        });
      }
      var W = u(p, 2);
      {
        var I = (_) => {
          var m = qg();
          i(_, m);
        };
        b(W, (_) => {
          a() === "crt" && _(I);
        });
      }
      Re(X, (_, m) => It?.(_, m), () => ({
        enabled: l(),
        duration: 300,
        scale: 1.02,
        borderRadius: "12px"
      })), Re(X, (_, m) => Rt?.(_, m), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), S(() => {
        z(R, 1, $(D), "svelte-13rlfrj"), mt(R, `filter: ${B.filter ?? ""}`), oe(C, `${(d() ? t(y) : e.text) ?? ""} `);
      }), i(U, X);
    }, A = (U) => {
      var X = Ae(), R = we(X);
      {
        var C = (M) => {
          var p = Gg();
          Ze(p, () => ({ class: j, ...T }), void 0, void 0, "svelte-13rlfrj");
          var q = o(p), W = o(q), I = u(W);
          {
            var _ = (ve) => {
              var ae = Fg();
              i(ve, ae);
            };
            b(I, (ve) => {
              d() && t(f) && ve(_);
            });
          }
          var m = u(q, 2);
          {
            var ie = (ve) => {
              var ae = Hg();
              i(ve, ae);
            };
            b(m, (ve) => {
              c() && ve(ie);
            });
          }
          var ue = u(m, 2);
          {
            var fe = (ve) => {
              var ae = Vg();
              i(ve, ae);
            };
            b(ue, (ve) => {
              a() === "crt" && ve(fe);
            });
          }
          Re(p, (ve, ae) => It?.(ve, ae), () => ({
            enabled: l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "12px"
          })), Re(p, (ve, ae) => Rt?.(ve, ae), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), S(() => {
            z(q, 1, $(D), "svelte-13rlfrj"), mt(q, `filter: ${B.filter ?? ""}`), oe(W, `${(d() ? t(y) : e.text) ?? ""} `);
          }), i(M, p);
        }, k = (M) => {
          var p = Ae(), q = we(p);
          {
            var W = (_) => {
              var m = Kg();
              Ze(m, () => ({ class: j, ...T }), void 0, void 0, "svelte-13rlfrj");
              var ie = o(m), ue = o(ie), fe = u(ue);
              {
                var ve = (E) => {
                  var te = Ug();
                  i(E, te);
                };
                b(fe, (E) => {
                  d() && t(f) && E(ve);
                });
              }
              var ae = u(ie, 2);
              {
                var Y = (E) => {
                  var te = Wg();
                  i(E, te);
                };
                b(ae, (E) => {
                  c() && E(Y);
                });
              }
              var le = u(ae, 2);
              {
                var re = (E) => {
                  var te = Yg();
                  i(E, te);
                };
                b(le, (E) => {
                  a() === "crt" && E(re);
                });
              }
              Re(m, (E, te) => It?.(E, te), () => ({
                enabled: l(),
                duration: 300,
                scale: 1.02,
                borderRadius: "12px"
              })), Re(m, (E, te) => Rt?.(E, te), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), S(() => {
                z(ie, 1, $(D), "svelte-13rlfrj"), mt(ie, `filter: ${B.filter ?? ""}`), oe(ue, `${(d() ? t(y) : e.text) ?? ""} `);
              }), i(_, m);
            }, I = (_) => {
              var m = Ae(), ie = we(m);
              {
                var ue = (ve) => {
                  var ae = Jg();
                  Ze(ae, () => ({ class: j, ...T }), void 0, void 0, "svelte-13rlfrj");
                  var Y = o(ae), le = o(Y), re = u(le);
                  {
                    var E = (se) => {
                      var ne = Xg();
                      i(se, ne);
                    };
                    b(re, (se) => {
                      d() && t(f) && se(E);
                    });
                  }
                  var te = u(Y, 2);
                  {
                    var J = (se) => {
                      var ne = Qg();
                      i(se, ne);
                    };
                    b(te, (se) => {
                      c() && se(J);
                    });
                  }
                  var Q = u(te, 2);
                  {
                    var ee = (se) => {
                      var ne = Zg();
                      i(se, ne);
                    };
                    b(Q, (se) => {
                      a() === "crt" && se(ee);
                    });
                  }
                  Re(ae, (se, ne) => It?.(se, ne), () => ({
                    enabled: l(),
                    duration: 300,
                    scale: 1.02,
                    borderRadius: "12px"
                  })), Re(ae, (se, ne) => Rt?.(se, ne), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), S(() => {
                    z(Y, 1, $(D), "svelte-13rlfrj"), mt(Y, `filter: ${B.filter ?? ""}`), oe(le, `${(d() ? t(y) : e.text) ?? ""} `);
                  }), i(ve, ae);
                }, fe = (ve) => {
                  var ae = Ae(), Y = we(ae);
                  {
                    var le = (E) => {
                      var te = rh();
                      Ze(te, () => ({ class: j, ...T }), void 0, void 0, "svelte-13rlfrj");
                      var J = o(te), Q = o(J), ee = u(Q);
                      {
                        var se = (ce) => {
                          var me = $g();
                          i(ce, me);
                        };
                        b(ee, (ce) => {
                          d() && t(f) && ce(se);
                        });
                      }
                      var ne = u(J, 2);
                      {
                        var de = (ce) => {
                          var me = eh();
                          i(ce, me);
                        };
                        b(ne, (ce) => {
                          c() && ce(de);
                        });
                      }
                      var Ce = u(ne, 2);
                      {
                        var be = (ce) => {
                          var me = th();
                          i(ce, me);
                        };
                        b(Ce, (ce) => {
                          a() === "crt" && ce(be);
                        });
                      }
                      Re(te, (ce, me) => It?.(ce, me), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Re(te, (ce, me) => Rt?.(ce, me), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), S(() => {
                        z(J, 1, $(D), "svelte-13rlfrj"), mt(J, `filter: ${B.filter ?? ""}`), oe(Q, `${(d() ? t(y) : e.text) ?? ""} `);
                      }), i(E, te);
                    }, re = (E) => {
                      var te = oh();
                      Ze(te, () => ({ class: j, ...T }), void 0, void 0, "svelte-13rlfrj");
                      var J = o(te), Q = o(J), ee = u(Q);
                      {
                        var se = (ce) => {
                          var me = ah();
                          i(ce, me);
                        };
                        b(ee, (ce) => {
                          d() && t(f) && ce(se);
                        });
                      }
                      var ne = u(J, 2);
                      {
                        var de = (ce) => {
                          var me = nh();
                          i(ce, me);
                        };
                        b(ne, (ce) => {
                          c() && ce(de);
                        });
                      }
                      var Ce = u(ne, 2);
                      {
                        var be = (ce) => {
                          var me = ih();
                          i(ce, me);
                        };
                        b(Ce, (ce) => {
                          a() === "crt" && ce(be);
                        });
                      }
                      Re(te, (ce, me) => It?.(ce, me), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Re(te, (ce, me) => Rt?.(ce, me), () => ({ enabled: h(), intensity: 0.01, speed: 3e3 })), S(() => {
                        z(J, 1, $(D), "svelte-13rlfrj"), mt(J, `filter: ${B.filter ?? ""}`), oe(Q, `${(d() ? t(y) : e.text) ?? ""} `);
                      }), i(E, te);
                    };
                    b(
                      Y,
                      (E) => {
                        N() === "div" ? E(le) : E(re, !1);
                      },
                      !0
                    );
                  }
                  i(ve, ae);
                };
                b(
                  ie,
                  (ve) => {
                    N() === "span" ? ve(ue) : ve(fe, !1);
                  },
                  !0
                );
              }
              i(_, m);
            };
            b(
              q,
              (_) => {
                N() === "h3" ? _(W) : _(I, !1);
              },
              !0
            );
          }
          i(M, p);
        };
        b(
          R,
          (M) => {
            N() === "h2" ? M(C) : M(k, !1);
          },
          !0
        );
      }
      i(U, X);
    };
    b(F, (U) => {
      N() === "h1" ? U(H) : U(A, !1);
    });
  }
  i(r, P), Qe();
}
var lh = /* @__PURE__ */ v('<span class="bitmap-char svelte-1cfjpo6"><!></span>'), sh = /* @__PURE__ */ v('<span class="cursor svelte-1cfjpo6">█</span>'), dh = /* @__PURE__ */ v(" <!>", 1), ch = /* @__PURE__ */ v("<span><!></span>");
function O1(r, e) {
  Xe(e, !0);
  const a = s(e, "text", 3, ""), n = s(e, "variant", 3, "bitmap"), l = s(e, "size", 3, "md"), d = s(e, "color", 3, "green");
  s(e, "glow", 3, !0);
  const c = s(e, "scanlines", 3, !1), g = s(e, "flicker", 3, !1), w = s(e, "animate", 3, !1), O = s(e, "typewriter", 3, !1), h = s(e, "speed", 3, 50), L = s(e, "class", 3, "");
  let N = /* @__PURE__ */ ke(""), T = /* @__PURE__ */ ke(0), y;
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
  }, Z = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem"
  }, x = V("retro-text inline-block relative", { "animate-flicker": g(), scanlines: c() }, L());
  function B() {
    if (!O() || !a()) return;
    K(N, ""), K(T, 0);
    const A = setInterval(
      () => {
        t(T) < a().length ? (K(N, t(N) + a()[t(T)]), Sa(T)) : clearInterval(A);
      },
      h()
    );
  }
  xt(() => {
    O() ? B() : K(N, a());
  }), xt(() => {
    if (y) {
      const A = f[n()], U = G[d()];
      y.style.setProperty("--retro-font-family", A.fontFamily), y.style.setProperty("--retro-font-weight", A.fontWeight), y.style.setProperty("--retro-letter-spacing", A.letterSpacing), y.style.setProperty("--retro-line-height", A.lineHeight), y.style.setProperty("--retro-font-size", Z[l()]), y.style.setProperty("--retro-color", U.color), y.style.setProperty("--retro-shadow-color", U.shadowColor), y.style.setProperty("--retro-text-transform", A.textTransform || "none");
    }
  });
  function D(A) {
    return (n() === "commodore" || n() === "atari") && {
      " ": "&nbsp;",
      A: "█▀█<br>█▀█<br>█&nbsp;█",
      E: "███<br>██&nbsp;<br>███",
      I: "███<br>&nbsp;█&nbsp;<br>███",
      O: "███<br>█&nbsp;█<br>███",
      U: "█&nbsp;█<br>█&nbsp;█<br>███"
    }[A.toUpperCase()] || A;
  }
  yt(() => {
    w() && y && (y.style.opacity = "0", setTimeout(
      () => {
        y.style.transition = "opacity 0.5s ease-in-out", y.style.opacity = "1";
      },
      100
    ));
  });
  var j = ch(), P = o(j);
  {
    var F = (A) => {
      var U = Ae(), X = we(U);
      lt(X, () => e.children), i(A, U);
    }, H = (A) => {
      var U = Ae(), X = we(U);
      {
        var R = (k) => {
          var M = Ae(), p = we(M);
          We(p, 17, () => t(N).split(""), vt, (q, W) => {
            var I = lh(), _ = o(I);
            mr(_, () => D(t(W))), S(() => ye(I, "data-char", t(W))), i(q, I);
          }), i(k, M);
        }, C = (k) => {
          var M = dh(), p = we(M), q = u(p);
          {
            var W = (I) => {
              var _ = sh();
              i(I, _);
            };
            b(q, (I) => {
              O() && t(T) < a().length && I(W);
            });
          }
          S(() => oe(p, `${t(N) ?? ""} `)), i(k, M);
        };
        b(
          X,
          (k) => {
            n() === "commodore" || n() === "atari" ? k(R) : k(C, !1);
          },
          !0
        );
      }
      i(A, U);
    };
    b(P, (A) => {
      e.children ? A(F) : A(H, !1);
    });
  }
  rt(j, (A) => y = A, () => y), S(() => {
    z(j, 1, $(x), "svelte-1cfjpo6"), ye(j, "aria-label", a());
  }), i(r, j), Qe();
}
var vh = /* @__PURE__ */ v("<div> </div>"), uh = /* @__PURE__ */ v('<div class="flex items-center svelte-nrft94"><span class="animate-pulse svelte-nrft94">_</span></div>'), fh = /* @__PURE__ */ v('<div class="mt-4 space-y-1 svelte-nrft94"><div>System initialization complete.</div> <div class="flex items-center svelte-nrft94"><span>user@hackers-brand:~$</span> <span class="animate-pulse ml-1 svelte-nrft94">_</span></div></div>'), bh = /* @__PURE__ */ v('<div class="absolute bottom-6 left-6 right-6 svelte-nrft94"><div class="flex items-center space-x-2 text-xs svelte-nrft94"><span>Loading:</span> <div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden svelte-nrft94"><div></div></div> <span> </span></div></div>'), gh = /* @__PURE__ */ v('<div><div class="absolute inset-0 opacity-10 pointer-events-none svelte-nrft94"><div class="w-full h-full svelte-nrft94" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"></div></div> <div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none svelte-nrft94"></div> <div class="relative z-10 space-y-1 svelte-nrft94"><!> <!> <!></div> <!> <div class="absolute inset-0 pointer-events-none svelte-nrft94"><div class="w-full h-full opacity-[0.02] blur-2xl svelte-nrft94" style="background-color: currentColor;"></div></div></div>');
function j1(r, e) {
  Xe(e, !0);
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
  let w = /* @__PURE__ */ ke(0), O = /* @__PURE__ */ ke(!1), h = /* @__PURE__ */ ke(!1), L = /* @__PURE__ */ ke(0);
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
  ], G = l() ? [...y, "", ...f] : f, Z = d() ? 50 : 150, x = async () => {
    if (!t(O)) {
      K(O, !0), K(h, !1), K(w, 0), K(L, 0);
      for (let C = 0; C < G.length; C++) {
        K(w, C, !0), K(L, C / G.length * 100);
        let k = Z;
        G[C].includes("PASS") || G[C].includes("OK") ? k = d() ? 30 : 100 : G[C].includes("[") && (k = d() ? 20 : 80), await new Promise((M) => setTimeout(M, k));
      }
      K(h, !0), K(O, !1), K(L, 100), e.onComplete?.();
    }
  };
  yt(() => {
    a() && setTimeout(x, 300);
  });
  const B = (C) => C.includes("PASS") || C.includes("OK") || C.includes("ready") ? T.success : C.includes("FAIL") || C.includes("ERROR") ? T.error : C.includes("Copyright") || C.includes("BIOS") || C.includes("GRUB") ? T.accent : T.text;
  var D = gh();
  Ze(
    D,
    (C) => ({ class: C, ...g }),
    [
      () => V("relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden", T.bg, T.text, c())
    ],
    void 0,
    "svelte-nrft94"
  );
  var j = u(o(D), 4), P = o(j);
  We(P, 17, () => G.slice(0, t(w) + 1), vt, (C, k, M) => {
    var p = vh(), q = o(p);
    S(
      (W) => {
        z(p, 1, W, "svelte-nrft94"), oe(q, t(k) || " ");
      },
      [
        () => $(V("whitespace-pre-wrap transition-all duration-200", B(t(k)), M === t(w) && t(O) ? "animate-pulse" : ""))
      ]
    ), i(C, p);
  });
  var F = u(P, 2);
  {
    var H = (C) => {
      var k = uh();
      i(C, k);
    };
    b(F, (C) => {
      t(O) && C(H);
    });
  }
  var A = u(F, 2);
  {
    var U = (C) => {
      var k = fh(), M = o(k), p = u(M, 2), q = o(p);
      S(() => {
        z(M, 1, $(T.success), "svelte-nrft94"), z(q, 1, $(T.accent), "svelte-nrft94");
      }), i(C, k);
    };
    b(A, (C) => {
      t(h) && C(U);
    });
  }
  var X = u(j, 2);
  {
    var R = (C) => {
      var k = bh(), M = o(k), p = o(M), q = u(p, 2), W = o(q), I = u(q, 2), _ = o(I);
      S(
        (m, ie) => {
          z(p, 1, $(T.accent), "svelte-nrft94"), z(W, 1, m, "svelte-nrft94"), mt(W, `width: ${t(L) ?? ""}%; background-color: currentColor;`), z(I, 1, $(T.text), "svelte-nrft94"), oe(_, `${ie ?? ""}%`);
        },
        [
          () => $(V("h-full transition-all duration-300 rounded-full", T.success)),
          () => Math.round(t(L))
        ]
      ), i(C, k);
    };
    b(X, (C) => {
      t(O) && !d() && C(R);
    });
  }
  i(r, D), Qe();
}
var hh = /* @__PURE__ */ v('<div class="flex items-center justify-center p-8 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 svelte-1884ls5"></div> <span class="text-white/70 svelte-1884ls5">Loading...</span></div></div>'), mh = /* @__PURE__ */ v('<div class="text-sm text-red-400/70 svelte-1884ls5"> </div>'), _h = /* @__PURE__ */ v('<div role="alert" aria-live="assertive"><div class="space-y-4 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="flex-shrink-0 svelte-1884ls5"><svg class="w-6 h-6 text-red-500 svelte-1884ls5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg></div> <div class="svelte-1884ls5"><h3 class="text-lg font-semibold text-red-600 svelte-1884ls5"> </h3> <p class="text-sm text-red-500/80 svelte-1884ls5"> </p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1884ls5"><!> <!></div> <div class="text-xs text-red-400/50 svelte-1884ls5"><!></div></div></div>');
function q1(r, e) {
  Xe(e, !0);
  const a = s(e, "variant", 3, "glass"), n = s(e, "animate", 3, !0), l = s(
    e,
    "timeout",
    3,
    1e4
    // 10 seconds
  ), d = s(e, "maxRetries", 3, 3), c = s(e, "class", 3, "");
  let g = /* @__PURE__ */ ke("idle"), w = /* @__PURE__ */ ke(null), O = /* @__PURE__ */ ke(null), h = /* @__PURE__ */ ke(0), L = null;
  async function N(H) {
    if (H) {
      K(g, "loading"), K(w, null), K(O, null), l() > 0 && (L = setTimeout(
        () => {
          t(g) === "loading" && (K(g, "timeout"), K(w, new Error(`Operation timed out after ${l()}ms`), !0), e.onError?.(t(w)));
        },
        l()
      ));
      try {
        K(O, await H, !0), K(g, "success");
      } catch (A) {
        K(w, A instanceof Error ? A : new Error(String(A)), !0), K(g, "error"), e.onError?.(t(w));
      } finally {
        L && (clearTimeout(L), L = null);
      }
    }
  }
  async function T() {
    if (!(t(h) >= d()))
      if (Sa(h), e.onRetry) {
        const H = e.onRetry();
        await N(H);
      } else e.promise && await N(e.promise);
  }
  function y() {
    K(g, "idle"), K(w, null), K(O, null), K(h, 0), L && (clearTimeout(L), L = null);
  }
  xt(() => {
    e.promise && N(e.promise);
  }), yt(() => () => {
    L && clearTimeout(L);
  });
  const G = V("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[a()], c());
  function Z(H) {
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
  var D = Ae(), j = we(D);
  {
    var P = (H) => {
      var A = Ae(), U = we(A);
      {
        var X = (C) => {
          var k = Ae(), M = we(k);
          lt(M, () => e.loading), i(C, k);
        }, R = (C) => {
          var k = hh();
          tt(1, k, () => gt, () => n() ? { duration: 200 } : void 0), i(C, k);
        };
        b(U, (C) => {
          e.loading ? C(X) : C(R, !1);
        });
      }
      i(H, A);
    }, F = (H) => {
      var A = Ae(), U = we(A);
      {
        var X = (C) => {
          var k = Ae(), M = we(k);
          {
            var p = (W) => {
              var I = Ae(), _ = we(I);
              lt(_, () => e.fallback, () => ({
                error: t(w),
                retry: T,
                reset: y,
                retryCount: t(h),
                maxRetries: d(),
                state: t(g)
              })), i(W, I);
            }, q = (W) => {
              var I = _h(), _ = o(I), m = o(_), ie = o(m), ue = o(ie), fe = o(ue);
              mr(fe, () => Z(x(t(w))), !0);
              var ve = u(ie, 2), ae = o(ve), Y = o(ae), le = u(ae, 2), re = o(le), E = u(m, 2);
              b(E, (me) => {
                t(w);
              });
              var te = u(E, 2);
              {
                var J = (me) => {
                  var Ee = mh(), Be = o(Ee);
                  S(() => oe(Be, `Retry attempt ${t(h) ?? ""} of ${d() ?? ""}`)), i(me, Ee);
                };
                b(te, (me) => {
                  t(h) > 0 && me(J);
                });
              }
              var Q = u(te, 2), ee = o(Q);
              {
                var se = (me) => {
                  er(me, {
                    variant: "glass",
                    size: "sm",
                    onclick: T,
                    class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                    children: (Ee, Be) => {
                      var Ne = Et();
                      S(() => oe(Ne, t(g) === "timeout" ? "Try Again" : "Retry")), i(Ee, Ne);
                    },
                    $$slots: { default: !0 }
                  });
                };
                b(ee, (me) => {
                  t(h) < d() && (e.onRetry || e.promise) && me(se);
                });
              }
              var ne = u(ee, 2);
              er(ne, {
                variant: "glass",
                size: "sm",
                onclick: y,
                class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
                children: (me, Ee) => {
                  var Be = Et("Reset");
                  i(me, Be);
                },
                $$slots: { default: !0 }
              });
              var de = u(Q, 2), Ce = o(de);
              {
                var be = (me) => {
                  var Ee = Et();
                  S(() => oe(Ee, `The operation exceeded the ${l() / 1e3}s timeout limit.`)), i(me, Ee);
                }, ce = (me) => {
                  var Ee = Ae(), Be = we(Ee);
                  {
                    var Ne = (Me) => {
                      var xe = Et("Check your internet connection and try again.");
                      i(Me, xe);
                    }, Oe = (Me) => {
                      var xe = Et("If the problem persists, please contact support.");
                      i(Me, xe);
                    };
                    b(
                      Be,
                      (Me) => {
                        x(t(w)) === "network" ? Me(Ne) : Me(Oe, !1);
                      },
                      !0
                    );
                  }
                  i(me, Ee);
                };
                b(Ce, (me) => {
                  t(g) === "timeout" ? me(be) : me(ce, !1);
                });
              }
              S(
                (me) => {
                  z(I, 1, $(G), "svelte-1884ls5"), oe(Y, t(g) === "timeout" ? "Operation Timeout" : "Request Failed"), oe(re, me);
                },
                [
                  () => t(w) ? B(t(w)) : "An error occurred while processing your request"
                ]
              ), tt(1, I, () => gt, () => n() ? { duration: 300 } : void 0), i(W, I);
            };
            b(M, (W) => {
              e.fallback ? W(p) : W(q, !1);
            });
          }
          i(C, k);
        }, R = (C) => {
          var k = Ae(), M = we(k);
          {
            var p = (W) => {
              var I = Ae(), _ = we(I);
              {
                var m = (ie) => {
                  var ue = Ae(), fe = we(ue);
                  lt(fe, () => e.children, () => ({ result: t(O) })), i(ie, ue);
                };
                b(_, (ie) => {
                  e.children && ie(m);
                });
              }
              i(W, I);
            }, q = (W) => {
              var I = Ae(), _ = we(I);
              {
                var m = (ie) => {
                  var ue = Ae(), fe = we(ue);
                  lt(fe, () => e.children), i(ie, ue);
                };
                b(_, (ie) => {
                  e.children && ie(m);
                });
              }
              i(W, I);
            };
            b(
              M,
              (W) => {
                t(g) === "success" ? W(p) : W(q, !1);
              },
              !0
            );
          }
          i(C, k);
        };
        b(
          U,
          (C) => {
            t(g) === "error" || t(g) === "timeout" ? C(X) : C(R, !1);
          },
          !0
        );
      }
      i(H, A);
    };
    b(j, (H) => {
      t(g) === "loading" ? H(P) : H(F, !1);
    });
  }
  i(r, D), Qe();
}
var xh = /* @__PURE__ */ v('<details class="mt-3 svelte-1q83gw3"><summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400 svelte-1q83gw3">Stack Trace</summary> <pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40 svelte-1q83gw3"> </pre></details>'), ph = /* @__PURE__ */ v('<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 svelte-1q83gw3"><p class="font-mono text-sm text-red-400 svelte-1q83gw3"> </p> <!></div>'), wh = /* @__PURE__ */ v('<div class="text-sm text-red-400/70 svelte-1q83gw3"> </div>'), yh = /* @__PURE__ */ v('<div class="space-y-4 svelte-1q83gw3"><div class="flex items-center gap-3 svelte-1q83gw3"><div class="flex-shrink-0 svelte-1q83gw3"><svg class="w-6 h-6 text-red-500 svelte-1q83gw3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1q83gw3"></path></svg></div> <div class="svelte-1q83gw3"><h3 class="text-lg font-semibold text-red-600 svelte-1q83gw3">Something went wrong</h3> <p class="text-sm text-red-500/80 svelte-1q83gw3">A component error occurred and was caught by the error boundary</p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1q83gw3"><!> <!> <!></div> <!></div>'), kh = /* @__PURE__ */ v('<div role="alert" aria-live="assertive"><!></div>');
function B1(r, e) {
  Xe(e, !0);
  const a = s(e, "showDetails", 3, !1), n = s(e, "variant", 3, "glass"), l = s(e, "animate", 3, !0), d = s(e, "retryable", 3, !0), c = s(e, "class", 3, "");
  let g = /* @__PURE__ */ ke(!1), w = /* @__PURE__ */ ke(null), O = /* @__PURE__ */ ke(null), h = /* @__PURE__ */ ke(0), L = /* @__PURE__ */ ke(!1);
  const N = 3;
  function T(A, U) {
    K(g, !0), K(w, A, !0), K(O, U, !0), e.onError?.(A, U), console.error("Component Error Boundary caught an error:", A), U && console.error("Error info:", U);
  }
  function y() {
    t(h) < N && (K(g, !1), K(w, null), K(O, null), Sa(h));
  }
  function f() {
    K(g, !1), K(w, null), K(O, null), K(h, 0), K(L, !1);
  }
  const Z = V("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[n()], c());
  yt(() => {
    const A = (X) => {
      T(new Error(`Unhandled promise rejection: ${X.reason}`)), X.preventDefault();
    }, U = (X) => {
      T(new Error(X.message), {
        filename: X.filename,
        lineno: X.lineno,
        colno: X.colno
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
  function D() {
    return t(h) === 0 ? "" : t(h) >= N ? `Maximum retry attempts reached (${N})` : `Retry attempt ${t(h)} of ${N}`;
  }
  var j = Ae(), P = we(j);
  {
    var F = (A) => {
      var U = kh(), X = o(U);
      {
        var R = (k) => {
          var M = Ae(), p = we(M);
          lt(p, () => e.fallback, () => ({
            error: t(w),
            retry: y,
            reset: f,
            retryCount: t(h),
            maxRetries: N
          })), i(k, M);
        }, C = (k) => {
          var M = yh(), p = u(o(M), 2);
          {
            var q = (Y) => {
              var le = ph(), re = o(le), E = o(re), te = u(re, 2);
              {
                var J = (Q) => {
                  var ee = xh(), se = u(o(ee), 2), ne = o(se);
                  S((de) => oe(ne, de), [() => B(t(w))]), i(Q, ee);
                };
                b(te, (Q) => {
                  a() && t(L) && Q(J);
                });
              }
              S((Q) => oe(E, Q), [() => x(t(w))]), i(Y, le);
            };
            b(p, (Y) => {
              t(w) && Y(q);
            });
          }
          var W = u(p, 2);
          {
            var I = (Y) => {
              var le = wh(), re = o(le);
              S((E) => oe(re, E), [D]), i(Y, le);
            };
            b(W, (Y) => {
              t(h) > 0 && Y(I);
            });
          }
          var _ = u(W, 2), m = o(_);
          {
            var ie = (Y) => {
              er(Y, {
                variant: "glass",
                size: "sm",
                onclick: y,
                class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                children: (le, re) => {
                  var E = Et("Try Again");
                  i(le, E);
                },
                $$slots: { default: !0 }
              });
            };
            b(m, (Y) => {
              d() && t(h) < N && Y(ie);
            });
          }
          var ue = u(m, 2);
          er(ue, {
            variant: "glass",
            size: "sm",
            onclick: f,
            class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
            children: (Y, le) => {
              var re = Et("Reset");
              i(Y, re);
            },
            $$slots: { default: !0 }
          });
          var fe = u(ue, 2);
          {
            var ve = (Y) => {
              er(Y, {
                variant: "glass",
                size: "sm",
                onclick: () => K(L, !t(L)),
                class: "bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30",
                children: (le, re) => {
                  var E = Et();
                  S(() => oe(E, `${t(L) ? "Hide" : "Show"} Details`)), i(le, E);
                },
                $$slots: { default: !0 }
              });
            };
            b(fe, (Y) => {
              a() && Y(ve);
            });
          }
          var ae = u(_, 2);
          b(ae, (Y) => {
          }), i(k, M);
        };
        b(X, (k) => {
          e.fallback ? k(R) : k(C, !1);
        });
      }
      S(() => z(U, 1, $(Z), "svelte-1q83gw3")), tt(1, U, () => kt, () => l() ? { duration: 300, blur: "sm" } : void 0), i(A, U);
    }, H = (A) => {
      var U = Ae(), X = we(U);
      {
        var R = (C) => {
          var k = Ae(), M = we(k);
          lt(M, () => e.children), i(C, k);
        };
        b(X, (C) => {
          e.children && C(R);
        });
      }
      i(A, U);
    };
    b(P, (A) => {
      t(g) ? A(F) : A(H, !1);
    });
  }
  i(r, j), Qe();
}
function Ch(r, e, a) {
  K(e, !0), a.onDismiss?.();
}
var Eh = /* @__PURE__ */ v('<li class="text-sm text-red-500"> </li>'), Sh = /* @__PURE__ */ v('<li class="flex items-start gap-2 svelte-12vbusp"><div class="flex-shrink-0 mt-1"><svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg></div> <div class="min-w-0"><span class="text-sm font-medium text-red-600"> </span> <ul class="mt-1 space-y-1"></ul></div></li>'), Th = /* @__PURE__ */ v('<button class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors svelte-12vbusp" aria-label="Dismiss errors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), Mh = /* @__PURE__ */ v('<div role="alert" aria-live="polite"><div class="flex items-start gap-3"><div class="flex-shrink-0 mt-0.5"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-semibold text-red-600 mb-2"> </h3> <ul class="space-y-2 svelte-12vbusp"></ul></div> <!></div></div>'), Ah = /* @__PURE__ */ v('<p class="text-sm text-red-500 flex items-center gap-1 svelte-12vbusp"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><!></svg> </p>'), Ih = /* @__PURE__ */ v('<div class="mt-1"></div>'), Ph = /* @__PURE__ */ v("<!> <!> <!>", 1);
function F1(r, e) {
  Xe(e, !0);
  const a = s(e, "errors", 19, () => []), n = s(e, "showSummary", 3, !0), l = s(e, "variant", 3, "glass"), d = s(e, "animate", 3, !0), c = s(e, "dismissible", 3, !1), g = s(e, "class", 3, "");
  let w = /* @__PURE__ */ ke(!1);
  const O = /* @__PURE__ */ Se(() => a().length > 0 && !t(w)), h = /* @__PURE__ */ Se(() => a().reduce(
    (P, F) => (P[F.field] || (P[F.field] = []), P[F.field].push(F), P),
    {}
  )), N = V("rounded-brand p-4 mb-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[l()], g());
  function T(P) {
    return P.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^\w/, (F) => F.toUpperCase()).trim();
  }
  function y(P) {
    switch (P) {
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
  var f = Ph(), G = we(f);
  {
    var Z = (P) => {
      var F = Mh(), H = o(F), A = u(o(H), 2), U = o(A), X = o(U), R = u(U, 2);
      We(R, 21, () => Object.entries(t(h)), vt, (M, p) => {
        var q = /* @__PURE__ */ Se(() => Xr(t(p), 2));
        let W = () => t(q)[0], I = () => t(q)[1];
        var _ = Sh(), m = o(_), ie = o(m), ue = o(ie);
        mr(ue, () => y(I()[0]?.code), !0);
        var fe = u(m, 2), ve = o(fe), ae = o(ve), Y = u(ve, 2);
        We(Y, 21, I, vt, (le, re) => {
          var E = Eh(), te = o(E);
          S(() => oe(te, t(re).message)), i(le, E);
        }), S((le) => oe(ae, `${le ?? ""}:`), [() => T(W())]), i(M, _);
      });
      var C = u(A, 2);
      {
        var k = (M) => {
          var p = Th();
          p.__click = [Ch, w, e], i(M, p);
        };
        b(C, (M) => {
          c() && M(k);
        });
      }
      S(() => {
        z(F, 1, $(N), "svelte-12vbusp"), oe(X, `Please correct the following ${a().length === 1 ? "error" : "errors"}:`);
      }), tt(1, F, () => gt, () => d() ? { duration: 300, direction: "down" } : void 0), i(P, F);
    };
    b(G, (P) => {
      t(O) && n() && P(Z);
    });
  }
  var x = u(G, 2);
  {
    var B = (P) => {
      var F = Ae(), H = we(F);
      lt(H, () => e.children, () => ({ errors: t(h), hasErrors: t(O) })), i(P, F);
    };
    b(x, (P) => {
      e.children && P(B);
    });
  }
  var D = u(x, 2);
  {
    var j = (P) => {
      var F = Ae(), H = we(F);
      We(H, 17, () => Object.entries(t(h)), vt, (A, U) => {
        var X = /* @__PURE__ */ Se(() => Xr(t(U), 2));
        let R = () => t(X)[0], C = () => t(X)[1];
        var k = Ih();
        We(k, 21, C, vt, (M, p) => {
          var q = Ah(), W = o(q), I = o(W);
          mr(I, () => y(t(p).code), !0);
          var _ = u(W);
          S(() => oe(_, ` ${t(p).message ?? ""}`)), tt(1, q, () => gt, () => d() ? { duration: 200, direction: "up", distance: 5 } : void 0), i(M, q);
        }), S(() => ye(k, "id", `${R() ?? ""}-errors`)), i(A, k);
      }), i(P, F);
    };
    b(D, (P) => {
      t(O) && !n() && P(j);
    });
  }
  i(r, f), Qe();
}
ft(["click"]);
const Gn = async (r, e, a) => {
  try {
    await navigator.clipboard.writeText(e()), K(a, !0), setTimeout(() => K(a, !1), 2e3);
  } catch (n) {
    console.error("Failed to copy:", n);
  }
};
var Lh = /* @__PURE__ */ ar('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), zh = /* @__PURE__ */ ar('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), Dh = /* @__PURE__ */ v('<button class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"><!></button>'), Rh = /* @__PURE__ */ v('<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg"><div class="text-sm font-medium text-white/80"> </div> <!></div>'), Nh = /* @__PURE__ */ ar('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Oh = /* @__PURE__ */ ar('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), jh = /* @__PURE__ */ v('<button class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"><!></button>'), qh = /* @__PURE__ */ v('<div class="relative group"><!> <div><!> <pre class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed svelte-au3hj8"><code><!></code></pre></div></div>');
function H1(r, e) {
  Xe(e, !0);
  let a = s(e, "code", 3, ""), n = s(e, "language", 3, "svelte"), l = s(e, "showCopy", 3, !0), d = s(e, "title", 3, ""), c = /* @__PURE__ */ ke(!1), g = /* @__PURE__ */ ke(void 0);
  const w = (A, U) => {
    if (!A) return "";
    switch (U) {
      case "svelte":
      case "html":
        return h(A);
      case "css":
        return L(A);
      case "javascript":
      case "js":
        return N(A);
      case "typescript":
      case "ts":
        return T(A);
      case "bash":
      case "shell":
        return y(A);
      default:
        return O(A);
    }
  }, O = (A) => A.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), h = (A) => A.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>').replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>').replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=').replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>'), L = (A) => A.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:').replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;').replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), N = (A) => A.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-green-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>').replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>').replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), T = (A) => N(A).replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>'), y = (A) => A.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ').replace(/^>\s*/gm, '<span class="text-blue-400">></span> ').replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>').replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>'), f = /* @__PURE__ */ Se(() => () => w(a(), n()));
  yt(() => {
    t(g) && a().split(`
`).length > 1 && (t(g).style.counterReset = "line");
  });
  var G = qh(), Z = o(G);
  {
    var x = (A) => {
      var U = Rh(), X = o(U), R = o(X), C = u(X, 2);
      {
        var k = (M) => {
          var p = Dh();
          p.__click = [Gn, a, c];
          var q = o(p);
          {
            var W = (_) => {
              var m = Lh();
              i(_, m);
            }, I = (_) => {
              var m = zh();
              i(_, m);
            };
            b(q, (_) => {
              t(c) ? _(W) : _(I, !1);
            });
          }
          S(() => ye(p, "title", t(c) ? "Copied!" : "Copy code")), i(M, p);
        };
        b(C, (M) => {
          l() && M(k);
        });
      }
      S(() => oe(R, d())), i(A, U);
    };
    b(Z, (A) => {
      d() && A(x);
    });
  }
  var B = u(Z, 2), D = o(B);
  {
    var j = (A) => {
      var U = jh();
      U.__click = [Gn, a, c];
      var X = o(U);
      {
        var R = (k) => {
          var M = Nh();
          i(k, M);
        }, C = (k) => {
          var M = Oh();
          i(k, M);
        };
        b(X, (k) => {
          t(c) ? k(R) : k(C, !1);
        });
      }
      S(() => ye(U, "title", t(c) ? "Copied!" : "Copy code")), i(A, U);
    };
    b(D, (A) => {
      l() && !d() && A(j);
    });
  }
  var P = u(D, 2), F = o(P), H = o(F);
  mr(H, () => t(f)), rt(P, (A) => K(g, A), () => t(g)), S(() => {
    z(B, 1, `relative bg-black/30 ${d() ? "rounded-b-lg" : "rounded-lg"} border border-white/10 overflow-hidden`), z(F, 1, `language-${n() ?? ""}`, "svelte-au3hj8");
  }), i(r, G), Qe();
}
ft(["click"]);
function Bh(r, e, a) {
  e(!e()), a("toggle", { collapsed: e() });
}
var Fh = (
  // Handle expansion of items with children
  // Set active item
  // Execute custom click handler
  // Close sidebar on mobile when item is selected
  (r, e) => (r.key === "Enter" || r.key === " ") && e()
), Hh = /* @__PURE__ */ v('<div role="button" aria-label="Close sidebar overlay" tabindex="0"></div>'), Vh = /* @__PURE__ */ v('<h2 class="text-lg font-semibold truncate">Menu</h2>'), Gh = /* @__PURE__ */ v("<button><!></button>"), Uh = /* @__PURE__ */ v('<div class="flex items-center justify-between p-4 border-b border-white/10"><!> <!></div>'), Wh = (r, e, a) => e(a()), Yh = /* @__PURE__ */ v('<div class="w-5 h-5 flex-shrink-0"><div class="w-full h-full bg-current opacity-70 rounded"></div></div>'), Kh = /* @__PURE__ */ v('<span class="inline-block w-4 h-4 rotate-90 border-r-2 border-b-2 border-current" style="transform: rotate(45deg);"></span>'), Xh = /* @__PURE__ */ v('<div class="w-5 h-5 flex-shrink-0"><!></div>'), Qh = /* @__PURE__ */ v("<span> </span>"), Zh = /* @__PURE__ */ v('<span class="flex-1 truncate"> </span> <!>', 1), Jh = /* @__PURE__ */ v("<li><button><!> <!></button></li>"), $h = /* @__PURE__ */ v('<div class="p-4 border-t border-white/10"><!></div>'), em = /* @__PURE__ */ v('<!> <aside><!> <nav class="flex-1 overflow-y-auto p-2 svelte-tk90u0"><ul class="space-y-1"></ul></nav> <!></aside>', 1);
function V1(r, e) {
  Xe(e, !0);
  let a = s(e, "items", 19, () => []), n = s(e, "width", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "left"), c = s(e, "collapsible", 3, !0), g = s(e, "collapsed", 15, !1), w = s(e, "overlay", 3, !1), O = s(e, "persistent", 3, !0), h = s(e, "showToggle", 3, !0), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  const T = At();
  let y = /* @__PURE__ */ ke(null), f = /* @__PURE__ */ ke(ot(/* @__PURE__ */ new Set()));
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
  function B(W) {
    W.disabled || (W.children?.length && (t(f).has(W.id) ? t(f).delete(W.id) : t(f).add(W.id), K(f, new Set(t(f)), !0)), K(y, W.id, !0), W.onclick && W.onclick(), T("select", { item: W }), w() && !O() && g(!0));
  }
  function D() {
    w() && !O() && (g(!0), T("close"));
  }
  function j(W, I = 0) {
    const _ = t(f).has(W.id), m = t(y) === W.id || W.active, ie = W.children?.length;
    return {
      item: W,
      level: I,
      isExpanded: _,
      isActive: m,
      hasChildren: ie,
      paddingLeft: `${I * 1 + 1}rem`
    };
  }
  function P(W, I = 0) {
    const _ = [];
    for (const m of W) {
      const ie = j(m, I);
      _.push(ie), ie.hasChildren && ie.isExpanded && !g() && _.push(...P(m.children, I + 1));
    }
    return _;
  }
  const F = /* @__PURE__ */ Se(() => () => P(a()));
  var H = em(), A = we(H);
  {
    var U = (W) => {
      var I = Hh();
      I.__click = D, I.__keydown = [Fh, D], S((_) => z(I, 1, _), [
        () => $(V("fixed inset-0 z-40", x.overlay))
      ]), i(W, I);
    };
    b(A, (W) => {
      w() && !g() && W(U);
    });
  }
  var X = u(A, 2);
  Ze(
    X,
    (W) => ({ class: W, ...N }),
    [
      () => V("flex flex-col h-full border-r transition-all duration-300 ease-in-out", G[n()], x.sidebar, d() === "right" && "border-r-0 border-l", w() && "fixed top-0 z-50", w() && d() === "left" && "left-0", w() && d() === "right" && "right-0", w() && g() && "-translate-x-full", w() && d() === "right" && g() && "translate-x-full", L())
    ],
    void 0,
    "svelte-tk90u0"
  );
  var R = o(X);
  {
    var C = (W) => {
      var I = Uh(), _ = o(I);
      {
        var m = (fe) => {
          var ve = Ae(), ae = we(ve);
          {
            var Y = (re) => {
              var E = Ae(), te = we(E);
              lt(te, () => e.children.header), i(re, E);
            }, le = (re) => {
              var E = Vh();
              i(re, E);
            };
            b(ae, (re) => {
              e.children?.header ? re(Y) : re(le, !1);
            });
          }
          i(fe, ve);
        };
        b(_, (fe) => {
          g() || fe(m);
        });
      }
      var ie = u(_, 2);
      {
        var ue = (fe) => {
          var ve = Gh();
          ve.__click = [Bh, g, T];
          var ae = o(ve);
          {
            var Y = (re) => {
              var E = Ae(), te = we(E);
              {
                var J = (ee) => {
                  Or(ee, { size: 16 });
                }, Q = (ee) => {
                  da(ee, { size: 16 });
                };
                b(te, (ee) => {
                  d() === "left" ? ee(J) : ee(Q, !1);
                });
              }
              i(re, E);
            }, le = (re) => {
              var E = Ae(), te = we(E);
              {
                var J = (ee) => {
                  da(ee, { size: 16 });
                }, Q = (ee) => {
                  Or(ee, { size: 16 });
                };
                b(
                  te,
                  (ee) => {
                    d() === "left" ? ee(J) : ee(Q, !1);
                  },
                  !0
                );
              }
              i(re, E);
            };
            b(ae, (re) => {
              g() ? re(Y) : re(le, !1);
            });
          }
          S(
            (re) => {
              z(ve, 1, re, "svelte-tk90u0"), ye(ve, "title", g() ? "Expand sidebar" : "Collapse sidebar");
            },
            [
              () => $(V("p-2 rounded-lg border transition-colors", x.toggle, g() && "mx-auto"))
            ]
          ), i(fe, ve);
        };
        b(ie, (fe) => {
          c() && fe(ue);
        });
      }
      i(W, I);
    };
    b(R, (W) => {
      h() && W(C);
    });
  }
  var k = u(R, 2), M = o(k);
  We(M, 21, () => t(F), vt, (W, I) => {
    let _ = () => t(I).item, m = () => t(I).level, ie = () => t(I).isExpanded, ue = () => t(I).isActive, fe = () => t(I).hasChildren, ve = () => t(I).paddingLeft;
    var ae = Jh(), Y = o(ae);
    Y.__click = [Wh, B, _];
    var le = o(Y);
    {
      var re = (Q) => {
        var ee = Yh();
        i(Q, ee);
      }, E = (Q) => {
        var ee = Ae(), se = we(ee);
        {
          var ne = (de) => {
            var Ce = Xh(), be = o(Ce);
            {
              var ce = (Ee) => {
                var Be = Kh();
                i(Ee, Be);
              }, me = (Ee) => {
                Or(Ee, { size: 16 });
              };
              b(be, (Ee) => {
                ie() ? Ee(ce) : Ee(me, !1);
              });
            }
            i(de, Ce);
          };
          b(
            se,
            (de) => {
              fe() && de(ne);
            },
            !0
          );
        }
        i(Q, ee);
      };
      b(le, (Q) => {
        _().icon ? Q(re) : Q(E, !1);
      });
    }
    var te = u(le, 2);
    {
      var J = (Q) => {
        var ee = Zh(), se = we(ee), ne = o(se), de = u(se, 2);
        {
          var Ce = (be) => {
            var ce = Qh(), me = o(ce);
            S(
              (Ee) => {
                z(ce, 1, Ee), oe(me, _().badge);
              },
              [
                () => $(V("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", x.badge))
              ]
            ), i(be, ce);
          };
          b(de, (be) => {
            _().badge && be(Ce);
          });
        }
        S(() => oe(ne, _().label)), i(Q, ee);
      };
      b(te, (Q) => {
        g() || Q(J);
      });
    }
    S(
      (Q) => {
        z(Y, 1, Q, "svelte-tk90u0"), mt(Y, !g() && m() > 0 ? `padding-left: ${ve()}` : void 0), Y.disabled = _().disabled, ye(Y, "title", g() ? _().label : void 0);
      },
      [
        () => $(V("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150", x.item, ue() && x.itemActive, _().disabled && x.itemDisabled, g() && "justify-center px-2"))
      ]
    ), i(W, ae);
  });
  var p = u(k, 2);
  {
    var q = (W) => {
      var I = $h(), _ = o(I);
      lt(_, () => e.children.footer, () => ({ collapsed: g() })), i(W, I);
    };
    b(p, (W) => {
      e.children?.footer && W(q);
    });
  }
  Re(X, (W, I) => kt?.(W, I), () => ({ intensity: "medium" })), i(r, H), Qe();
}
ft(["click", "keydown"]);
function tm(r, e, a, n, l, d, c) {
  if (!e()) return;
  const g = r.touches[0];
  K(a, g.clientX, !0), K(n, g.clientY, !0), K(l, !0), t(d) && c();
}
function rm(r, e, a) {
  !e() || !t(a) || r.preventDefault();
}
function am(r, e, a, n, l, d, c, g, w) {
  if (!e() || !t(a)) return;
  const O = r.changedTouches[0], h = O.clientX - t(n), L = O.clientY - t(l);
  Math.abs(h) > Math.abs(L) && Math.abs(h) > 50 && (h > 0 ? d() : c()), K(a, !1), t(g) && w();
}
var nm = /* @__PURE__ */ v('<img class="w-full h-full object-cover svelte-1gc8xej" loading="lazy"/>'), im = /* @__PURE__ */ v('<h3 class="text-lg font-semibold text-white mb-1 svelte-1gc8xej"> </h3>'), om = /* @__PURE__ */ v('<p class="text-sm text-white/80 svelte-1gc8xej"> </p>'), lm = /* @__PURE__ */ v('<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 svelte-1gc8xej"><!> <!></div>'), sm = /* @__PURE__ */ v("<!> <!>", 1), dm = /* @__PURE__ */ v('<div class="w-full h-full flex flex-col svelte-1gc8xej"><!></div>'), cm = /* @__PURE__ */ v('<div class="flex-shrink-0 h-full relative svelte-1gc8xej"><!></div>'), vm = /* @__PURE__ */ v("<div><div></div></div>"), um = /* @__PURE__ */ v("<button><!></button>"), fm = /* @__PURE__ */ v('<button title="Previous slide" aria-label="Previous slide"><!></button> <button title="Next slide" aria-label="Next slide"><!></button> <!>', 1), bm = /* @__PURE__ */ v("<button></button>"), gm = /* @__PURE__ */ v('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 svelte-1gc8xej"></div>'), hm = /* @__PURE__ */ v('<div><div class="relative w-full h-full overflow-hidden svelte-1gc8xej"><div></div></div> <!> <!> <!></div>');
function G1(r, e) {
  Xe(e, !0);
  let a = s(e, "currentIndex", 15, 0), n = s(e, "autoPlay", 3, !1), l = s(e, "autoPlayInterval", 3, 5e3), d = s(e, "showControls", 3, !0), c = s(e, "showDots", 3, !0), g = s(e, "showProgress", 3, !1), w = s(e, "loop", 3, !0), O = s(e, "variant", 3, "glass"), h = s(e, "size", 3, "md"), L = s(e, "aspectRatio", 3, "16:9");
  s(e, "transition", 3, "slide");
  let N = s(e, "itemsPerView", 3, 1), T = s(e, "gap", 3, "md"), y = s(e, "touchEnabled", 3, !0), f = s(e, "class", 3, ""), G = /* @__PURE__ */ ct(e, [
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
  const Z = At();
  let x, B, D = /* @__PURE__ */ ke(ot(n())), j = null, P = /* @__PURE__ */ ke(0), F = /* @__PURE__ */ ke(0), H = /* @__PURE__ */ ke(!1);
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
  }, X = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]"
  }, R = A[h()], C = U[O()], k = /* @__PURE__ */ Se(() => () => e.items.length), M = /* @__PURE__ */ Se(() => () => Math.max(0, t(k)() - N())), p = /* @__PURE__ */ Se(() => () => w() || a() > 0), q = /* @__PURE__ */ Se(() => () => w() || a() < t(M)()), W = /* @__PURE__ */ Se(() => () => `-${a() * 100 / N()}%`), I = /* @__PURE__ */ Se(() => () => t(k)() <= 1 ? 100 : (a() + 1) / t(k)() * 100);
  function _(ne) {
    ne < 0 ? a(w() ? t(M)() : 0) : ne > t(M)() ? a(w() ? 0 : t(M)()) : a(ne), Z("change", { index: a(), item: e.items[a()] });
  }
  function m() {
    t(p) && _(a() - 1);
  }
  function ie() {
    t(q) && _(a() + 1);
  }
  function ue() {
    K(D, !t(D)), t(D) ? fe() : ve(), Z("autoplay", { isPlaying: t(D) });
  }
  function fe() {
    !t(D) || t(k)() <= 1 || (ve(), j = setInterval(
      () => {
        if (a() >= t(M)() && !w()) {
          ve();
          return;
        }
        ie();
      },
      l()
    ));
  }
  function ve() {
    j && (clearInterval(j), j = null);
  }
  function ae(ne) {
    switch (ne.key) {
      case "ArrowLeft":
        ne.preventDefault(), m();
        break;
      case "ArrowRight":
        ne.preventDefault(), ie();
        break;
      case " ":
        ne.preventDefault(), ue();
        break;
      case "Home":
        ne.preventDefault(), _(0);
        break;
      case "End":
        ne.preventDefault(), _(t(M));
        break;
    }
  }
  yt(() => (t(D) && fe(), () => {
    ve();
  })), xt(() => {
    t(D) ? fe() : ve();
  });
  var Y = hm();
  Ze(
    Y,
    (ne) => ({
      class: ne,
      onkeydown: ae,
      role: "region",
      "aria-label": "Carousel",
      "aria-live": "polite",
      ...G
    }),
    [
      () => V("relative rounded-lg border overflow-hidden", X[L()], C.container, R.container, f())
    ],
    void 0,
    "svelte-1gc8xej"
  );
  var le = o(Y);
  le.__touchstart = [
    tm,
    y,
    P,
    F,
    H,
    D,
    ve
  ], le.__touchmove = [rm, y, H], le.__touchend = [
    am,
    y,
    H,
    P,
    F,
    m,
    ie,
    D,
    fe
  ];
  var re = o(le);
  We(re, 23, () => e.items, (ne) => ne.id, (ne, de, Ce) => {
    var be = cm(), ce = o(be);
    {
      var me = (Ee) => {
        var Be = dm(), Ne = o(Be);
        {
          var Oe = (xe) => {
            var Le = Ae(), je = we(Le);
            lt(je, () => e.children.item, () => ({ item: t(de), index: t(Ce) })), i(xe, Le);
          }, Me = (xe) => {
            var Le = sm(), je = we(Le);
            {
              var he = (ge) => {
                var _e = nm();
                S(() => {
                  ye(_e, "src", t(de).image), ye(_e, "alt", t(de).title || `Slide ${t(Ce) + 1}`);
                }), i(ge, _e);
              };
              b(je, (ge) => {
                t(de).image && ge(he);
              });
            }
            var pe = u(je, 2);
            {
              var Ie = (ge) => {
                var _e = lm(), De = o(_e);
                {
                  var Te = (Ve) => {
                    var Ge = im(), Ke = o(Ge);
                    S(() => oe(Ke, t(de).title)), i(Ve, Ge);
                  };
                  b(De, (Ve) => {
                    t(de).title && Ve(Te);
                  });
                }
                var qe = u(De, 2);
                {
                  var Fe = (Ve) => {
                    var Ge = om(), Ke = o(Ge);
                    S(() => oe(Ke, t(de).description)), i(Ve, Ge);
                  };
                  b(qe, (Ve) => {
                    t(de).description && Ve(Fe);
                  });
                }
                i(ge, _e);
              };
              b(pe, (ge) => {
                (t(de).title || t(de).description) && ge(Ie);
              });
            }
            i(xe, Le);
          };
          b(Ne, (xe) => {
            e.children?.item ? xe(Oe) : xe(Me, !1);
          });
        }
        i(Ee, Be);
      };
      b(ce, (Ee) => {
        Ee(me, !1);
      });
    }
    S((Ee) => mt(be, Ee), [() => `width: ${100 / t(k)()}%`]), i(ne, be);
  }), rt(le, (ne) => B = ne, () => B);
  var E = u(le, 2);
  {
    var te = (ne) => {
      var de = vm(), Ce = o(de);
      S(
        (be, ce) => {
          z(de, 1, be, "svelte-1gc8xej"), z(Ce, 1, ce, "svelte-1gc8xej"), mt(Ce, `width: ${t(I)}%`);
        },
        [
          () => $(V("absolute bottom-0 left-0 right-0 h-1", C.progress)),
          () => $(V("h-full transition-all duration-300", C.progressFill))
        ]
      ), i(ne, de);
    };
    b(E, (ne) => {
      g() && ne(te);
    });
  }
  var J = u(E, 2);
  {
    var Q = (ne) => {
      var de = fm(), Ce = we(de);
      Ce.__click = m;
      var be = o(Ce);
      da(be, { size: 16 });
      var ce = u(Ce, 2);
      ce.__click = ie;
      var me = o(ce);
      Or(me, { size: 16 });
      var Ee = u(ce, 2);
      {
        var Be = (Ne) => {
          var Oe = um();
          Oe.__click = ue;
          var Me = o(Oe);
          {
            var xe = (je) => {
              go(je, { size: 16 });
            }, Le = (je) => {
              ho(je, { size: 16 });
            };
            b(Me, (je) => {
              t(D) ? je(xe) : je(Le, !1);
            });
          }
          S(
            (je) => {
              z(Oe, 1, je, "svelte-1gc8xej"), ye(Oe, "title", t(D) ? "Pause autoplay" : "Start autoplay"), ye(Oe, "aria-label", t(D) ? "Pause autoplay" : "Start autoplay");
            },
            [
              () => $(V("absolute top-2 right-2 rounded-full border transition-all duration-200", R.controls, C.controls))
            ]
          ), i(Ne, Oe);
        };
        b(Ee, (Ne) => {
          n() && Ne(Be);
        });
      }
      S(
        (Ne, Oe) => {
          Ce.disabled = !t(p), z(Ce, 1, Ne, "svelte-1gc8xej"), ce.disabled = !t(q), z(ce, 1, Oe, "svelte-1gc8xej");
        },
        [
          () => $(V("absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", R.controls, C.controls, !t(p) && "opacity-50 cursor-not-allowed")),
          () => $(V("absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", R.controls, C.controls, !t(q) && "opacity-50 cursor-not-allowed"))
        ]
      ), i(ne, de);
    };
    b(J, (ne) => {
      d() && t(k)() > 1 && ne(Q);
    });
  }
  var ee = u(J, 2);
  {
    var se = (ne) => {
      var de = gm();
      We(de, 21, () => e.items, vt, (Ce, be, ce) => {
        var me = bm();
        me.__click = () => _(ce), ye(me, "title", `Go to slide ${ce + 1}`), ye(me, "aria-label", `Go to slide ${ce + 1}`), S((Ee) => z(me, 1, Ee, "svelte-1gc8xej"), [
          () => $(V("rounded-full transition-all duration-200", R.dots, ce === a() ? C.dotsActive : C.dots))
        ]), i(Ce, me);
      }), i(ne, de);
    };
    b(ee, (ne) => {
      c() && t(k)() > 1 && ne(se);
    });
  }
  rt(Y, (ne) => x = ne, () => x), Re(Y, (ne, de) => kt?.(ne, de), () => ({ intensity: "medium" })), S(
    (ne, de) => {
      z(re, 1, ne, "svelte-1gc8xej"), mt(re, de);
    },
    [
      () => $(V("flex h-full transition-transform duration-300 ease-in-out", R.gap[T()])),
      () => `transform: translateX(${t(W)()}); width: ${t(k)() * 100 / N()}%`
    ]
  ), i(r, Y), Qe();
}
ft(["touchstart", "touchmove", "touchend", "click"]);
function mm(r, e, a) {
  e() && a();
}
var _m = /* @__PURE__ */ v('<div role="presentation"></div>'), xm = /* @__PURE__ */ v('<h2 id="drawer-title" class="text-lg font-semibold svelte-10b9i23">Drawer</h2>'), pm = /* @__PURE__ */ v('<button title="Close drawer" aria-label="Close drawer"><!></button>'), wm = /* @__PURE__ */ v('<div class="p-4 border-t border-white/10 flex-shrink-0 svelte-10b9i23"><!></div>'), ym = /* @__PURE__ */ v('<!> <div><div class="flex flex-col h-full focus:outline-none svelte-10b9i23" tabindex="-1"><div class="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 svelte-10b9i23"><div class="flex-1 svelte-10b9i23"><!></div> <!></div> <div class="flex-1 overflow-y-auto p-4 svelte-10b9i23"><!></div> <!></div></div>', 1);
function U1(r, e) {
  Xe(e, !0);
  let a = s(e, "open", 15, !1), n = s(e, "position", 3, "right"), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), c = s(e, "overlay", 3, !0), g = s(e, "closeOnOutsideClick", 3, !0), w = s(e, "closeOnEscape", 3, !0), O = s(e, "showCloseButton", 3, !0), h = s(e, "persistent", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  const T = At();
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
  }[d()], B = G[l()][n()], D = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "top-0 left-0 w-full border-b",
    bottom: "bottom-0 left-0 w-full border-t"
  }, j = () => {
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
  function P() {
    h() || (a(!1), T("close"));
  }
  function F(R) {
    R.key === "Escape" && w() && a() && P();
  }
  function H(R) {
    g() && a() && f && !f.contains(R.target) && P();
  }
  yt(() => (w() && document.addEventListener("keydown", F), g() && document.addEventListener("click", H), () => {
    document.removeEventListener("keydown", F), document.removeEventListener("click", H);
  })), xt(() => {
    if (a() && f) {
      const R = f.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      R.length > 0 ? R[0].focus() : f.focus();
    }
  });
  var A = Ae(), U = we(A);
  {
    var X = (R) => {
      var C = ym(), k = we(C);
      {
        var M = (E) => {
          var te = _m();
          te.__click = [mm, g, P], S((J) => z(te, 1, J, "svelte-10b9i23"), [
            () => $(V("fixed inset-0 z-40", x.overlay))
          ]), tt(3, te, () => eo, () => ({ duration: 200 })), i(E, te);
        };
        b(k, (E) => {
          c() && E(M);
        });
      }
      var p = u(k, 2);
      Ze(
        p,
        (E) => ({
          class: E,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          ...N
        }),
        [
          () => V("fixed z-50 flex flex-col", D[n()], B, x.drawer, L())
        ],
        void 0,
        "svelte-10b9i23"
      );
      var q = o(p), W = o(q), I = o(W), _ = o(I);
      {
        var m = (E) => {
          var te = Ae(), J = we(te);
          lt(J, () => e.children.header), i(E, te);
        }, ie = (E) => {
          var te = xm();
          i(E, te);
        };
        b(_, (E) => {
          e.children?.header ? E(m) : E(ie, !1);
        });
      }
      var ue = u(I, 2);
      {
        var fe = (E) => {
          var te = pm();
          te.__click = P;
          var J = o(te);
          sa(J, { size: 16 }), S((Q) => z(te, 1, Q, "svelte-10b9i23"), [
            () => $(V("p-2 rounded-lg border transition-colors ml-4", x.closeButton))
          ]), i(E, te);
        };
        b(ue, (E) => {
          O() && !h() && E(fe);
        });
      }
      var ve = u(W, 2), ae = o(ve);
      {
        var Y = (E) => {
          var te = Ae(), J = we(te);
          lt(J, () => e.children, () => ({ open: a(), close: P })), i(E, te);
        };
        b(ae, (E) => {
          e.children && E(Y);
        });
      }
      var le = u(ve, 2);
      {
        var re = (E) => {
          var te = wm(), J = o(te);
          lt(J, () => e.children.footer, () => ({ open: a(), close: P })), i(E, te);
        };
        b(le, (E) => {
          e.children?.footer && E(re);
        });
      }
      rt(q, (E) => f = E, () => f), rt(p, (E) => y = E, () => y), Re(p, (E, te) => kt?.(E, te), () => ({ intensity: "medium" })), tt(3, p, () => to, j), i(R, C);
    };
    b(U, (R) => {
      a() && R(X);
    });
  }
  i(r, A), Qe();
}
ft(["click"]);
var km = /* @__PURE__ */ v("<div></div>"), Cm = /* @__PURE__ */ v('<span class="text-white/80 text-xs font-mono svelte-1sn23fc"> </span>'), Em = /* @__PURE__ */ v('<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-2"><span class="text-white text-xs font-medium mb-1 svelte-1sn23fc"> </span> <!></div>'), Sm = /* @__PURE__ */ v('<span class="font-mono text-sm text-white/60 svelte-1sn23fc"> </span>'), Tm = /* @__PURE__ */ v('<p class="text-sm text-white/60 mt-1"> </p>'), Mm = /* @__PURE__ */ v('<div class="flex-1"><div class="flex items-center justify-between"><span class="font-medium text-white svelte-1sn23fc"> </span> <!></div> <!></div>'), Am = /* @__PURE__ */ v('<div class="absolute inset-0 bg-green-500/20 flex items-center justify-center"><span class="text-green-400 text-xs font-medium svelte-1sn23fc">Copied!</span></div>'), Im = /* @__PURE__ */ v("<div><!> <!> <!></div>");
function Un(r, e) {
  Xe(e, !0);
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
  }, g = (Z) => {
    (Z.key === "Enter" || Z.key === " ") && (Z.preventDefault(), e.onColorClick(e.color));
  }, w = e.animate ? {
    jellyHover: {
      enabled: e.interactive,
      duration: 200,
      scale: 1.05,
      borderRadius: "8px"
    },
    springPop: { duration: 150, delay: e.colorIndex * 20 }
  } : {};
  var O = Im();
  Ze(
    O,
    (Z, x) => ({
      class: Z,
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
  var h = o(O);
  {
    var L = (Z) => {
      var x = km();
      S((B) => mt(x, B), [d]), i(Z, x);
    };
    b(h, (Z) => {
      e.layout === "list" && Z(L);
    });
  }
  var N = u(h, 2);
  {
    var T = (Z) => {
      var x = Em(), B = o(x), D = o(B), j = u(B, 2);
      {
        var P = (F) => {
          var H = Cm(), A = o(H);
          S(() => oe(A, e.color.hex)), i(F, H);
        };
        b(j, (F) => {
          e.showHex && F(P);
        });
      }
      S(() => oe(D, e.color.name)), i(Z, x);
    }, y = (Z) => {
      var x = Mm(), B = o(x), D = o(B), j = o(D), P = u(D, 2);
      {
        var F = (U) => {
          var X = Sm(), R = o(X);
          S(() => oe(R, e.color.hex)), i(U, X);
        };
        b(P, (U) => {
          e.showHex && U(F);
        });
      }
      var H = u(B, 2);
      {
        var A = (U) => {
          var X = Tm(), R = o(X);
          S(() => oe(R, e.color.description)), i(U, X);
        };
        b(H, (U) => {
          e.color.description && U(A);
        });
      }
      S(() => oe(j, e.color.name)), i(Z, x);
    };
    b(N, (Z) => {
      e.layout === "grid" ? Z(T) : Z(y, !1);
    });
  }
  var f = u(N, 2);
  {
    var G = (Z) => {
      var x = Am();
      i(Z, x);
    };
    b(f, (Z) => {
      e.copiedColor === e.color.hex && Z(G);
    });
  }
  Re(O, (Z, x) => It?.(Z, x), () => e.animate ? w.jellyHover : void 0), tt(1, O, () => Kt, () => e.animate ? w.springPop : void 0), i(r, O), Qe();
}
var Pm = /* @__PURE__ */ v('<div class="mb-6"><!></div>'), Lm = /* @__PURE__ */ v('<div class="space-y-3"><h3 class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"> </h3> <div></div></div>'), zm = /* @__PURE__ */ v("<div></div>"), Dm = /* @__PURE__ */ v("<div><!> <!></div>");
function W1(r, e) {
  Xe(e, !0);
  const a = s(e, "theme", 3, "both"), n = s(e, "layout", 3, "grid"), l = s(e, "interactive", 3, !0), d = s(e, "showHex", 3, !0), c = s(e, "showCategories", 3, !0), g = s(e, "animate", 3, !0), w = s(e, "class", 3, ""), O = /* @__PURE__ */ ct(e, [
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
  ], L = [
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
        return h;
      case "bubbleTea":
        return L;
      case "both":
      default:
        return [...h, ...L];
    }
  })(), y = [...new Set(T.map((A) => A.category))];
  let f = /* @__PURE__ */ ke(null);
  const G = async (A) => {
    if (l())
      try {
        await navigator.clipboard.writeText(A), K(f, A, !0), setTimeout(
          () => {
            K(f, null);
          },
          2e3
        );
      } catch (U) {
        console.error("Failed to copy color to clipboard:", U);
      }
  }, Z = (A) => {
    G(A.hex), e.onColorSelect?.(A);
  }, x = () => n() === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "flex flex-col gap-2";
  var B = Dm();
  Ze(B, (A) => ({ class: A, ...O }), [() => V("space-y-6", w())]);
  var D = o(B);
  {
    var j = (A) => {
      var U = Pm(), X = o(U);
      lt(X, () => e.children), i(A, U);
    };
    b(D, (A) => {
      e.children && A(j);
    });
  }
  var P = u(D, 2);
  {
    var F = (A) => {
      var U = Ae(), X = we(U);
      We(X, 17, () => y, vt, (R, C) => {
        var k = Lm(), M = o(k), p = o(M), q = u(M, 2);
        We(q, 21, () => T.filter((W) => W.category === t(C)), vt, (W, I) => {
          {
            let _ = /* @__PURE__ */ Se(() => T.indexOf(t(I))), m = /* @__PURE__ */ Se(() => h.includes(t(I)));
            Un(W, {
              get color() {
                return t(I);
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
                return t(_);
              },
              get isTerminal() {
                return t(m);
              },
              onColorClick: Z
            });
          }
        }), S(
          (W) => {
            oe(p, t(C)), z(q, 1, W);
          },
          [() => $(x())]
        ), i(R, k);
      }), i(A, U);
    }, H = (A) => {
      var U = zm();
      We(U, 21, () => T, vt, (X, R) => {
        {
          let C = /* @__PURE__ */ Se(() => T.indexOf(t(R))), k = /* @__PURE__ */ Se(() => h.includes(t(R)));
          Un(X, {
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
              return t(k);
            },
            onColorClick: Z
          });
        }
      }), S((X) => z(U, 1, X), [() => $(x())]), i(A, U);
    };
    b(P, (A) => {
      c() ? A(F) : A(H, !1);
    });
  }
  i(r, B), Qe();
}
var Rm = /* @__PURE__ */ v("<span><!></span>");
function Y1(r, e) {
  Xe(e, !0);
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
  var L = Rm();
  Ze(L, () => ({ class: h, ...w }), void 0, void 0, "svelte-1s7z1ns");
  var N = o(L);
  {
    var T = (f) => {
      var G = Ae(), Z = we(G);
      lt(Z, () => e.children), i(f, G);
    }, y = (f) => {
      var G = Ae(), Z = we(G);
      {
        var x = (B) => {
          var D = Et();
          S(() => oe(D, e.text)), i(B, D);
        };
        b(
          Z,
          (B) => {
            e.text && B(x);
          },
          !0
        );
      }
      i(f, G);
    };
    b(N, (f) => {
      e.children ? f(T) : f(y, !1);
    });
  }
  i(r, L), Qe();
}
var Nm = /* @__PURE__ */ v("<span>•</span> <span> </span>", 1), Om = /* @__PURE__ */ v('<div class="flex items-center gap-1 svelte-chof7v"><span> </span> <span> </span></div>'), jm = /* @__PURE__ */ v("<div></div>"), qm = /* @__PURE__ */ v("<div><!></div>"), Bm = /* @__PURE__ */ v('<div><div class="flex items-center gap-4 svelte-chof7v"><div class="flex items-center gap-2 svelte-chof7v"><span> </span> <!></div> <!></div> <div class="flex items-center gap-4 svelte-chof7v"><div class="hidden md:flex items-center gap-2 svelte-chof7v"><span> </span> <span>•</span> <span> </span></div> <div class="md:hidden svelte-chof7v"><span> </span></div> <!></div></div>');
function K1(r, e) {
  Xe(e, !0);
  const a = s(e, "status", 3, "Ready"), n = s(e, "encoding", 3, "UTF-8"), l = s(e, "position", 3, "1:1"), d = s(e, "lineNumber", 3, 1), c = s(e, "columnNumber", 3, 1), g = s(e, "fileType", 3, "TypeScript"), w = s(e, "variant", 3, "bubbleTea"), O = s(e, "size", 3, "md"), h = s(e, "indicators", 19, () => []), L = s(e, "class", 3, ""), N = s(e, "autoLayout", 3, !0), T = /* @__PURE__ */ ct(e, [
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
  yt(() => {
    if (N() && y) {
      const ae = () => {
        const le = y.offsetHeight;
        document.documentElement.style.setProperty("--status-bar-height", `${le}px`);
      };
      ae();
      const Y = new ResizeObserver(ae);
      return Y.observe(y), () => {
        Y.disconnect(), document.documentElement.style.removeProperty("--status-bar-height");
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
  }, G = { sm: "px-3 py-1 text-xs", md: "px-4 py-2 text-sm" }, Z = (ae) => {
    switch (ae) {
      case "error":
        return w() === "bubbleTea" ? "text-bubble-tea-red" : "text-red-400";
      case "warning":
        return w() === "bubbleTea" ? "text-bubble-tea-yellow" : "text-yellow-400";
      case "success":
        return w() === "bubbleTea" ? "text-bubble-tea-green" : "text-green-400";
      default:
        return f[w()].text;
    }
  }, x = f[w()], B = V("fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm", w() === "bubbleTea" ? "rounded-t-bubble-tea" : "rounded-t-lg", w() === "bubbleTea" ? "status-bar-bubble-tea" : "", x.background, G[O()]), D = V(B, L());
  var j = Bm();
  Ze(
    j,
    () => ({
      class: D,
      role: "status",
      "aria-live": "polite",
      ...T
    }),
    void 0,
    void 0,
    "svelte-chof7v"
  );
  var P = o(j), F = o(P), H = o(F), A = o(H), U = u(H, 2);
  {
    var X = (ae) => {
      var Y = Nm(), le = we(Y), re = u(le, 2), E = o(re);
      S(
        (te, J) => {
          z(le, 1, te, "svelte-chof7v"), z(re, 1, J, "svelte-chof7v"), oe(E, g());
        },
        [
          () => $(V("text-xs", x.accent)),
          () => $(V("text-xs", x.accent))
        ]
      ), i(ae, Y);
    };
    b(U, (ae) => {
      g() && ae(X);
    });
  }
  var R = u(F, 2);
  {
    var C = (ae) => {
      var Y = jm();
      We(Y, 21, h, vt, (le, re) => {
        var E = Om(), te = o(E), J = o(te), Q = u(te, 2), ee = o(Q);
        S(
          (se, ne) => {
            z(te, 1, se, "svelte-chof7v"), oe(J, `${t(re).label ?? ""}:`), z(Q, 1, ne, "svelte-chof7v"), oe(ee, t(re).value);
          },
          [
            () => $(V("text-xs font-medium", Z(t(re).type))),
            () => $(V("text-xs", x.text))
          ]
        ), i(le, E);
      }), S((le) => z(Y, 1, le, "svelte-chof7v"), [
        () => $(V("hidden sm:flex items-center gap-3 border-l pl-4", x.separator))
      ]), i(ae, Y);
    };
    b(R, (ae) => {
      h().length > 0 && ae(C);
    });
  }
  var k = u(P, 2), M = o(k), p = o(M), q = o(p), W = u(p, 2), I = u(W, 2), _ = o(I), m = u(M, 2), ie = o(m), ue = o(ie), fe = u(m, 2);
  {
    var ve = (ae) => {
      var Y = qm(), le = o(Y);
      lt(le, () => e.children), S((re) => z(Y, 1, re, "svelte-chof7v"), [() => $(V("border-l pl-4", x.separator))]), i(ae, Y);
    };
    b(fe, (ae) => {
      e.children && ae(ve);
    });
  }
  rt(j, (ae) => y = ae, () => y), S(
    (ae, Y, le, re, E) => {
      z(H, 1, ae, "svelte-chof7v"), oe(A, a()), z(p, 1, Y, "svelte-chof7v"), oe(q, `Line ${d() ?? ""}, Col ${c() ?? ""}`), z(W, 1, le, "svelte-chof7v"), z(I, 1, re, "svelte-chof7v"), oe(_, n()), z(ie, 1, E, "svelte-chof7v"), oe(ue, l());
    },
    [
      () => $(V("font-medium", x.text)),
      () => $(V("text-xs", x.accent)),
      () => $(V("text-xs", x.accent)),
      () => $(V("text-xs", x.accent)),
      () => $(V("text-xs", x.accent))
    ]
  ), i(r, j), Qe();
}
export {
  A1 as AICommandSuggestions,
  Ym as Accordion,
  M1 as AdvancedTerminal,
  Km as Alert,
  q1 as AsyncErrorBoundary,
  Xm as Badge,
  D1 as BootSequence,
  w1 as Breadcrumb,
  er as Button,
  Zm as Card,
  G1 as Carousel,
  Jm as Checkbox,
  H1 as CodeHighlight,
  W1 as ColorPalette,
  I1 as CommandBlock,
  C1 as DataGrid,
  E1 as DataTable,
  h1 as DatePicker,
  U1 as Drawer,
  $m as Dropdown,
  B1 as ErrorBoundary,
  m1 as FileUpload,
  F1 as FormErrorBoundary,
  Y1 as GlowText,
  bd as Input,
  P1 as LazyTerminalWindow,
  L1 as LiquidTerminal,
  S1 as List,
  R1 as MatrixRain,
  y1 as Menu,
  e1 as MetricsCard,
  t1 as Modal,
  r1 as MultiSelect,
  k1 as Navbar,
  a1 as Pagination,
  n1 as Progress,
  i1 as Radio,
  N1 as RetroFuturisticText,
  O1 as RetroText,
  o1 as Select,
  l1 as SelectAdvanced,
  V1 as Sidebar,
  s1 as Skeleton,
  d1 as Slider,
  K1 as StatusBar,
  c1 as Switch,
  T1 as Table,
  v1 as Tabs,
  z1 as TerminalOrbit,
  j1 as TerminalStartup,
  Ag as TerminalWindow,
  u1 as Textarea,
  f1 as ThemeSelector,
  b1 as Toast,
  g1 as Tooltip,
  As as animations,
  za as borderRadius,
  ze as brandColors,
  Rt as breathing,
  zs as bubbleTeaTheme,
  V as cn,
  p1 as commonSchemas,
  Is as componentSizes,
  _1 as createValidationStore,
  x1 as debounceValidation,
  iu as getFormErrors,
  Ts as glassEffects,
  gt as glassFade,
  nu as isFormValid,
  It as jellyHover,
  kt as liquidBlur,
  xa as liquidResponsive,
  ut as magneticHover,
  Ms as shadows,
  Ss as spacing,
  Kt as springPop,
  Ls as terminalTheme,
  Qm as tokens,
  Es as typography,
  $i as validateField,
  au as validateForm,
  Ht as validationRules,
  Ps as zIndex
};
