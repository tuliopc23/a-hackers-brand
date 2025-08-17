import { AlertCircle as Bn, Info as Ei, XCircle as Mi, CheckCircle2 as Ai, X as ya, Minus as mo, Check as sn, ChevronDown as _n, TrendingDown as zi, TrendingUp as Ii, Activity as Hn, ChevronLeft as ka, ChevronRight as Vr, ChevronsLeft as Pi, ChevronsRight as Li, Search as Di, Pause as Ri, Play as ji } from "lucide-svelte";
import { onMount as ht, createEventDispatcher as At } from "svelte";
import { T as Ke, Canvas as Ni } from "@threlte/core";
import { OrbitControls as wn, HTML as qi, Environment as Oi, Edges as ma } from "@threlte/extras";
import * as Et from "three";
const Fi = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Fi);
const La = 1, Da = 2, ho = 4, Bi = 8, Hi = 16, Vi = 1, Gi = 4, Ui = 8, Yi = 16, Wi = 1, Ki = 2, Xi = 4, Zi = 1, Qi = 2, Mt = Symbol(), Ji = Symbol("filename"), $i = "http://www.w3.org/1999/xhtml", el = "http://www.w3.org/2000/svg", tl = "@attach", po = typeof window < "u", Vn = globalThis.process?.env?.NODE_ENV, We = Vn && !Vn.toLowerCase().startsWith("prod");
var Ra = Array.isArray, rl = Array.prototype.indexOf, xo = Array.from, hr = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, _o = Object.getOwnPropertyDescriptors, al = Object.prototype, nl = Array.prototype, yn = Object.getPrototypeOf;
function Hr(r) {
  return typeof r == "function";
}
const Pt = () => {
};
function ol(r) {
  return typeof r?.then == "function";
}
function kn(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function il() {
  var r, e, a = new Promise((n, i) => {
    r = n, e = i;
  });
  return { promise: a, resolve: r, reject: e };
}
function na(r, e) {
  if (Array.isArray(r))
    return r;
  if (!(Symbol.iterator in r))
    return Array.from(r);
  const a = [];
  for (const n of r)
    if (a.push(n), a.length === e) break;
  return a;
}
const Ft = 2, Cn = 4, Sn = 8, Zr = 16, vr = 32, Qr = 64, wo = 128, Vt = 256, Ca = 512, It = 1024, Gt = 2048, ur = 4096, Qt = 8192, Rr = 16384, ja = 32768, jr = 65536, Sa = 1 << 17, ll = 1 << 18, Tn = 1 << 19, yo = 1 << 20, Ta = 1 << 21, Na = 1 << 22, Tr = 1 << 23, nr = Symbol("$state"), ko = Symbol("legacy props"), sl = Symbol(""), Co = Symbol("proxy path"), En = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function dl() {
  if (We) {
    const r = new Error("await_outside_boundary\nCannot await outside a `<svelte:boundary>` with a `pending` snippet\nhttps://svelte.dev/e/await_outside_boundary");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function cl() {
  if (We) {
    const r = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Gn() {
  if (We) {
    const r = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function vl() {
  if (We) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function ul(r) {
  if (We) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fl() {
  if (We) {
    const r = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function bl(r) {
  if (We) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function gl() {
  if (We) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ml() {
  if (We) {
    const r = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
function hl(r) {
  if (We) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function pl(r) {
  if (We) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function xl(r) {
  if (We) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function _l() {
  if (We) {
    const r = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function wl() {
  if (We) {
    const r = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yl() {
  if (We) {
    const r = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var So = "font-weight: bold", To = "font-weight: normal";
function kl(r) {
  We ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${r}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, So, To) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function Cl() {
  We ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", So, To) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Sl = !1;
function Eo(r) {
  return r === this.v;
}
function Mn(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function Mo(r) {
  return !Mn(r, this.v);
}
let Tl = !1;
function Ao(r) {
  let e = Error();
  const a = e.stack;
  if (!a) return null;
  const n = a.split(`
`), i = [`
`];
  for (let d = 0; d < n.length; d++) {
    const v = n[d];
    if (v !== "Error") {
      if (v.includes("validate_each_keys"))
        return null;
      v.includes("svelte/src/internal") || i.push(v);
    }
  }
  return i.length === 1 ? null : (hr(e, "stack", {
    value: i.join(`
`)
  }), hr(e, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${r}Error`
  }), /** @type {Error & { stack: string }} */
  e);
}
function br(r, e) {
  return r.label = e, zo(r.v, e), r;
}
function zo(r, e) {
  return r?.[Co]?.(e), r;
}
let Nt = null;
function Wr(r) {
  Nt = r;
}
let oa = null;
function Ea(r) {
  oa = r;
}
let va = null;
function Ma(r) {
  va = r;
}
function Ue(r, e = !1, a) {
  Nt = {
    p: Nt,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  }, We && (Nt.function = a, va = a);
}
function Ye(r) {
  var e = (
    /** @type {ComponentContext} */
    Nt
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      Yo(n);
  }
  return r !== void 0 && (e.x = r), Nt = e.p, We && (va = Nt?.function ?? null), r ?? /** @type {T} */
  {};
}
function Io() {
  return !0;
}
const dn = /* @__PURE__ */ new WeakMap();
function El(r) {
  var e = dt;
  if (e === null)
    return ft.f |= Tr, r;
  if (We && r instanceof Error && !dn.has(r) && dn.set(r, Ml(r, e)), (e.f & ja) === 0) {
    if ((e.f & wo) === 0)
      throw !e.parent && r instanceof Error && Po(r), r;
    e.b.error(r);
  } else
    An(r, e);
}
function An(r, e) {
  for (; e !== null; ) {
    if ((e.f & wo) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw r instanceof Error && Po(r), r;
}
function Ml(r, e) {
  const a = Sr(r, "message");
  if (!(a && !a.configurable)) {
    for (var n = "	", i = `
${n}in ${e.fn?.name || "<unknown>"}`, d = e.ctx; d !== null; )
      i += `
${n}in ${d.function?.[Ji].split("/").pop()}`, d = d.p;
    return {
      message: r.message + `
${i}
`,
      stack: r.stack?.split(`
`).filter((v) => !v.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function Po(r) {
  const e = dn.get(r);
  e && (hr(r, "message", {
    value: e.message
  }), hr(r, "stack", {
    value: e.stack
  }));
}
let ia = [], cn = [];
function Lo() {
  var r = ia;
  ia = [], kn(r);
}
function Al() {
  var r = cn;
  cn = [], kn(r);
}
function Jr(r) {
  ia.length === 0 && queueMicrotask(Lo), ia.push(r);
}
function zl() {
  ia.length > 0 && Lo(), cn.length > 0 && Al();
}
function Il() {
  for (var r = (
    /** @type {Effect} */
    dt.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && dl(), r;
}
let Er = null;
function Do(r) {
  Er = r;
}
const Pl = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function qa(r) {
  var e = Ft | Gt, a = ft !== null && (ft.f & Ft) !== 0 ? (
    /** @type {Derived} */
    ft
  ) : null;
  return dt === null || a !== null && (a.f & Vt) !== 0 ? e |= Vt : dt.f |= Tn, {
    ctx: Nt,
    deps: null,
    effects: null,
    equals: Eo,
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
function Ll(r, e) {
  let a = (
    /** @type {Effect | null} */
    dt
  );
  a === null && cl();
  var n = (
    /** @type {Boundary} */
    a.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), d = Lr(
    /** @type {V} */
    Mt
  ), v = null, p = !ft;
  return Ql(() => {
    We && (Er = dt);
    try {
      var y = r();
    } catch (S) {
      y = Promise.reject(S);
    }
    We && (Er = null);
    var z = () => y;
    i = v?.then(z, z) ?? Promise.resolve(y), v = i;
    var g = (
      /** @type {Batch} */
      wt
    ), L = n.pending;
    p && (n.update_pending_count(1), L || g.increment());
    const N = (S, k = void 0) => {
      v = null, Er = null, L || g.activate(), k ? k !== En && (d.f |= Tr, mr(d, k)) : ((d.f & Tr) !== 0 && (d.f ^= Tr), mr(d, S)), p && (n.update_pending_count(-1), L || g.decrement()), qo();
    };
    if (i.then(N, (S) => N(null, S || "unknown")), g)
      return () => {
        queueMicrotask(() => g.neuter());
      };
  }), We && (d.f |= Na), new Promise((y) => {
    function z(g) {
      function L() {
        g === i ? y(d) : z(i);
      }
      g.then(L, L);
    }
    z(i);
  });
}
// @__NO_SIDE_EFFECTS__
function we(r) {
  const e = /* @__PURE__ */ qa(r);
  return $o(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ro(r) {
  const e = /* @__PURE__ */ qa(r);
  return e.equals = Mo, e;
}
function vn(r) {
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
let Qa = [];
function Dl(r) {
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
function zn(r) {
  var e, a = dt;
  if (Jt(Dl(r)), We) {
    let n = Xr;
    Wn(/* @__PURE__ */ new Set());
    try {
      Qa.includes(r) && vl(), Qa.push(r), vn(r), e = fn(r);
    } finally {
      Jt(a), Wn(n), Qa.pop();
    }
  } else
    try {
      vn(r), e = fn(r);
    } finally {
      Jt(a);
    }
  return e;
}
function jo(r) {
  var e = zn(r);
  if (r.equals(e) || (r.v = e, r.wv = ti()), !qr)
    if (Kr !== null)
      Kr.set(r, r.v);
    else {
      var a = (gr || (r.f & Vt) !== 0) && r.deps !== null ? ur : It;
      Dt(r, a);
    }
}
function No(r, e, a) {
  const n = qa;
  if (e.length === 0) {
    a(r.map(n));
    return;
  }
  var i = wt, d = (
    /** @type {Effect} */
    dt
  ), v = Rl(), p = Il();
  Promise.all(e.map((y) => /* @__PURE__ */ Ll(y))).then((y) => {
    i?.activate(), v();
    try {
      a([...r.map(n), ...y]);
    } catch (z) {
      (d.f & Rr) === 0 && An(z, d);
    }
    i?.deactivate(), qo();
  }).catch((y) => {
    p.error(y);
  });
}
function Rl() {
  var r = dt, e = ft, a = Nt;
  return function() {
    Jt(r), Yt(e), Wr(a), We && Do(null);
  };
}
function qo() {
  Jt(null), Yt(null), Wr(null), We && Do(null);
}
const ea = /* @__PURE__ */ new Set();
let wt = null, _a = null, Kr = null, Un = /* @__PURE__ */ new Set(), Aa = [];
function Oo() {
  const r = (
    /** @type {() => void} */
    Aa.shift()
  );
  Aa.length > 0 && queueMicrotask(Oo), r();
}
let Ir = [], Oa = null, un = !1, wa = !1;
class la {
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
    Ir = [], _a = null;
    var a = null;
    if (ea.size > 1) {
      a = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map();
      for (const [d, v] of this.current)
        a.set(d, { v: d.v, wv: d.wv }), d.v = v;
      for (const d of ea)
        if (d !== this)
          for (const [v, p] of d.#n)
            a.has(v) || (a.set(v, { v: v.v, wv: v.wv }), v.v = p);
    }
    for (const d of e)
      this.#b(d);
    if (this.#r.length === 0 && this.#e === 0) {
      this.#f();
      var n = this.#a, i = this.#t;
      this.#a = [], this.#t = [], this.#l = [], _a = wt, wt = null, Yn(n), Yn(i), wt === null ? wt = this : ea.delete(this), this.#d?.resolve();
    } else
      this.#s(this.#a), this.#s(this.#t), this.#s(this.#l);
    if (a) {
      for (const [d, { v, wv: p }] of a)
        d.wv <= p && (d.v = v);
      Kr = null;
    }
    for (const d of this.#r)
      Ur(d);
    for (const d of this.#i)
      Ur(d);
    this.#r = [], this.#i = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #b(e) {
    e.f ^= It;
    for (var a = e.first; a !== null; ) {
      var n = a.f, i = (n & (vr | Qr)) !== 0, d = i && (n & It) !== 0, v = d || (n & Qt) !== 0 || this.skipped_effects.has(a);
      if (!v && a.fn !== null) {
        if (i)
          a.f ^= It;
        else if ((n & It) === 0)
          if ((n & Cn) !== 0)
            this.#t.push(a);
          else if ((n & Na) !== 0) {
            var p = a.b?.pending ? this.#i : this.#r;
            p.push(a);
          } else fa(a) && ((a.f & Zr) !== 0 && this.#l.push(a), Ur(a));
        var y = a.first;
        if (y !== null) {
          a = y;
          continue;
        }
      }
      var z = a.parent;
      for (a = a.next; a === null && z !== null; )
        a = z.next, z = z.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const a of e)
      ((a.f & Gt) !== 0 ? this.#v : this.#u).push(a), Dt(a, It);
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
    wt = null, _a = null;
    for (const e of Un)
      if (Un.delete(e), e(), wt !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Ir.length > 0 ? Fo() : this.#f(), wt === this && (this.#e === 0 && ea.delete(this), this.deactivate());
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
        Dt(e, Gt), Pr(e);
      for (const e of this.#u)
        Dt(e, ur), Pr(e);
      this.#a = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#o.add(e);
  }
  settled() {
    return (this.#d ??= il()).promise;
  }
  static ensure() {
    if (wt === null) {
      const e = wt = new la();
      ea.add(wt), wa || la.enqueue(() => {
        wt === e && e.flush();
      });
    }
    return wt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Aa.length === 0 && queueMicrotask(Oo), Aa.unshift(e);
  }
}
function jl(r) {
  var e = wa;
  wa = !0;
  try {
    for (var a; ; ) {
      if (zl(), Ir.length === 0 && (wt?.flush(), Ir.length === 0))
        return Oa = null, /** @type {T} */
        a;
      Fo();
    }
  } finally {
    wa = e;
  }
}
function Fo() {
  var r = Gr;
  un = !0;
  try {
    var e = 0;
    for (Zn(!0); Ir.length > 0; ) {
      var a = la.ensure();
      if (e++ > 1e3) {
        if (We) {
          var n = /* @__PURE__ */ new Map();
          for (const d of a.current.keys())
            for (const [v, p] of d.updated ?? []) {
              var i = n.get(v);
              i || (i = { error: p.error, count: 0 }, n.set(v, i)), i.count += p.count;
            }
          for (const d of n.values())
            console.error(d.error);
        }
        Nl();
      }
      a.process(Ir), Mr.clear();
    }
  } finally {
    un = !1, Zn(r), Oa = null;
  }
}
function Nl() {
  try {
    gl();
  } catch (r) {
    We && hr(r, "stack", { value: "" }), An(r, Oa);
  }
}
function Yn(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if ((n.f & (Rr | Qt)) === 0 && fa(n)) {
        var i = wt ? wt.current.size : 0;
        if (Ur(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? Zo(n) : n.fn = null), wt !== null && wt.current.size > i && (n.f & yo) !== 0)
          break;
      }
    }
    for (; a < e; )
      Pr(r[a++]);
  }
}
function Pr(r) {
  for (var e = Oa = r; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (un && e === dt && (a & Zr) !== 0)
      return;
    if ((a & (Qr | vr)) !== 0) {
      if ((a & It) === 0) return;
      e.f ^= It;
    }
  }
  Ir.push(e);
}
let Xr = /* @__PURE__ */ new Set();
const Mr = /* @__PURE__ */ new Map();
function Wn(r) {
  Xr = r;
}
let In = !1;
function ql() {
  In = !0;
}
function Lr(r, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: Eo,
    rv: 0,
    wv: 0
  };
  return a;
}
// @__NO_SIDE_EFFECTS__
function _e(r, e) {
  const a = Lr(r);
  return $o(a), a;
}
// @__NO_SIDE_EFFECTS__
function Bo(r, e = !1, a = !0) {
  const n = Lr(r);
  return e || (n.equals = Mo), n;
}
function K(r, e, a = !1) {
  ft !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xt || (ft.f & Sa) !== 0) && Io() && (ft.f & (Ft | Zr | Na | Sa)) !== 0 && !dr?.includes(r) && yl();
  let n = a ? st(e) : e;
  return We && zo(
    n,
    /** @type {string} */
    r.label
  ), mr(r, n);
}
function mr(r, e) {
  if (!r.equals(e)) {
    var a = r.v;
    qr ? Mr.set(r, e) : Mr.set(r, a), r.v = e;
    var n = la.ensure();
    if (n.capture(r, a), We) {
      if (dt !== null) {
        const i = Ao("UpdatedAt");
        if (i !== null) {
          r.updated ??= /* @__PURE__ */ new Map();
          let d = r.updated.get(i.stack);
          d || (d = { error: i, count: 0 }, r.updated.set(i.stack, d)), d.count++;
        }
      }
      dt !== null && (r.set_during_effect = !0);
    }
    (r.f & Ft) !== 0 && ((r.f & Gt) !== 0 && zn(
      /** @type {Derived} */
      r
    ), Dt(r, (r.f & Vt) === 0 ? It : ur)), r.wv = ti(), Vo(r, Gt), dt !== null && (dt.f & It) !== 0 && (dt.f & (vr | Qr)) === 0 && (Ht === null ? $l([r]) : Ht.push(r)), We && Xr.size > 0 && !In && Ho();
  }
  return e;
}
function Ho() {
  In = !1;
  const r = Array.from(Xr);
  for (const e of r)
    (e.f & It) !== 0 && Dt(e, ur), fa(e) && Ur(e);
  Xr.clear();
}
function Fa(r, e = 1) {
  var a = t(r), n = e === 1 ? a++ : a--;
  return K(r, a), n;
}
function Ja(r) {
  K(r, r.v + 1);
}
function Vo(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = a.length, i = 0; i < n; i++) {
      var d = a[i], v = d.f;
      if (We && (v & Sa) !== 0) {
        Xr.add(d);
        continue;
      }
      var p = (v & Gt) === 0;
      p && Dt(d, e), (v & Ft) !== 0 ? Vo(
        /** @type {Derived} */
        d,
        ur
      ) : p && Pr(
        /** @type {Effect} */
        d
      );
    }
}
const Ol = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function st(r) {
  if (typeof r != "object" || r === null || nr in r)
    return r;
  const e = yn(r);
  if (e !== al && e !== nl)
    return r;
  var a = /* @__PURE__ */ new Map(), n = Ra(r), i = /* @__PURE__ */ _e(0), d = zr, v = (z) => {
    if (zr === d)
      return z();
    var g = ft, L = zr;
    Yt(null), Jn(d);
    var N = z();
    return Yt(g), Jn(L), N;
  };
  n && (a.set("length", /* @__PURE__ */ _e(
    /** @type {any[]} */
    r.length
  )), We && (r = /** @type {any} */
  Hl(
    /** @type {any[]} */
    r
  )));
  var p = "";
  function y(z) {
    p = z, br(i, `${p} version`);
    for (const [g, L] of a)
      br(L, yr(p, g));
  }
  return new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(z, g, L) {
        (!("value" in L) || L.configurable === !1 || L.enumerable === !1 || L.writable === !1) && _l();
        var N = a.get(g);
        return N === void 0 ? N = v(() => {
          var S = /* @__PURE__ */ _e(L.value);
          return a.set(g, S), We && typeof g == "string" && br(S, yr(p, g)), S;
        }) : K(N, L.value, !0), !0;
      },
      deleteProperty(z, g) {
        var L = a.get(g);
        if (L === void 0) {
          if (g in z) {
            const N = v(() => /* @__PURE__ */ _e(Mt));
            a.set(g, N), Ja(i), We && br(N, yr(p, g));
          }
        } else
          K(L, Mt), Ja(i);
        return !0;
      },
      get(z, g, L) {
        if (g === nr)
          return r;
        if (We && g === Co)
          return y;
        var N = a.get(g), S = g in z;
        if (N === void 0 && (!S || Sr(z, g)?.writable) && (N = v(() => {
          var b = st(S ? z[g] : Mt), q = /* @__PURE__ */ _e(b);
          return We && br(q, yr(p, g)), q;
        }), a.set(g, N)), N !== void 0) {
          var k = t(N);
          return k === Mt ? void 0 : k;
        }
        return Reflect.get(z, g, L);
      },
      getOwnPropertyDescriptor(z, g) {
        var L = Reflect.getOwnPropertyDescriptor(z, g);
        if (L && "value" in L) {
          var N = a.get(g);
          N && (L.value = t(N));
        } else if (L === void 0) {
          var S = a.get(g), k = S?.v;
          if (S !== void 0 && k !== Mt)
            return {
              enumerable: !0,
              configurable: !0,
              value: k,
              writable: !0
            };
        }
        return L;
      },
      has(z, g) {
        if (g === nr)
          return !0;
        var L = a.get(g), N = L !== void 0 && L.v !== Mt || Reflect.has(z, g);
        if (L !== void 0 || dt !== null && (!N || Sr(z, g)?.writable)) {
          L === void 0 && (L = v(() => {
            var k = N ? st(z[g]) : Mt, b = /* @__PURE__ */ _e(k);
            return We && br(b, yr(p, g)), b;
          }), a.set(g, L));
          var S = t(L);
          if (S === Mt)
            return !1;
        }
        return N;
      },
      set(z, g, L, N) {
        var S = a.get(g), k = g in z;
        if (n && g === "length")
          for (var b = L; b < /** @type {Source<number>} */
          S.v; b += 1) {
            var q = a.get(b + "");
            q !== void 0 ? K(q, Mt) : b in z && (q = v(() => /* @__PURE__ */ _e(Mt)), a.set(b + "", q), We && br(q, yr(p, b)));
          }
        if (S === void 0)
          (!k || Sr(z, g)?.writable) && (S = v(() => /* @__PURE__ */ _e(void 0)), K(S, st(L)), a.set(g, S), We && br(S, yr(p, g)));
        else {
          k = S.v !== Mt;
          var Z = v(() => st(L));
          K(S, Z);
        }
        var w = Reflect.getOwnPropertyDescriptor(z, g);
        if (w?.set && w.set.call(N, L), !k) {
          if (n && typeof g == "string") {
            var A = (
              /** @type {Source<number>} */
              a.get("length")
            ), W = Number(g);
            Number.isInteger(W) && W >= A.v && K(A, W + 1);
          }
          Ja(i);
        }
        return !0;
      },
      ownKeys(z) {
        t(i);
        var g = Reflect.ownKeys(z).filter((S) => {
          var k = a.get(S);
          return k === void 0 || k.v !== Mt;
        });
        for (var [L, N] of a)
          N.v !== Mt && !(L in z) && g.push(L);
        return g;
      },
      setPrototypeOf() {
        wl();
      }
    }
  );
}
function yr(r, e) {
  return typeof e == "symbol" ? `${r}[Symbol(${e.description ?? ""})]` : Ol.test(e) ? `${r}.${e}` : /^\d+$/.test(e) ? `${r}[${e}]` : `${r}['${e}']`;
}
function Kn(r) {
  try {
    if (r !== null && typeof r == "object" && nr in r)
      return r[nr];
  } catch {
  }
  return r;
}
function Fl(r, e) {
  return Object.is(Kn(r), Kn(e));
}
const Bl = /* @__PURE__ */ new Set([
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
function Hl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var i = Reflect.get(e, a, n);
      return Bl.has(
        /** @type {string} */
        a
      ) ? function(...d) {
        ql();
        var v = i.apply(this, d);
        return Ho(), v;
      } : i;
    }
  });
}
var Go, Vl, Gl, Ul;
function Nr(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function ar(r) {
  return Gl.call(r);
}
// @__NO_SIDE_EFFECTS__
function Ba(r) {
  return Ul.call(r);
}
function l(r, e) {
  return /* @__PURE__ */ ar(r);
}
function ge(r, e) {
  {
    var a = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ar(
        /** @type {Node} */
        r
      )
    );
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ Ba(a) : a;
  }
}
function f(r, e = 1, a = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ba(n);
  return n;
}
function Yl(r) {
  r.textContent = "";
}
function Pn() {
  return !1;
}
function Wl(r, e) {
  if (e) {
    const a = document.body;
    r.autofocus = !0, Jr(() => {
      document.activeElement === a && r.focus();
    });
  }
}
let Xn = !1;
function Kl() {
  Xn || (Xn = !0, document.addEventListener(
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
function $r(r) {
  var e = ft, a = dt;
  Yt(null), Jt(null);
  try {
    return r();
  } finally {
    Yt(e), Jt(a);
  }
}
function Uo(r, e, a, n = a) {
  r.addEventListener(e, () => $r(a));
  const i = r.__on_r;
  i ? r.__on_r = () => {
    i(), n(!0);
  } : r.__on_r = () => n(!0), Kl();
}
function Xl(r) {
  dt === null && ft === null && bl(r), ft !== null && (ft.f & Vt) !== 0 && dt === null && fl(), qr && ul(r);
}
function Zl(r, e) {
  var a = e.last;
  a === null ? e.last = e.first = r : (a.next = r, r.prev = a, e.last = r);
}
function pr(r, e, a, n = !0) {
  var i = dt;
  if (We)
    for (; i !== null && (i.f & Sa) !== 0; )
      i = i.parent;
  i !== null && (i.f & Qt) !== 0 && (r |= Qt);
  var d = {
    ctx: Nt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | Gt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (We && (d.component_function = va), a)
    try {
      Ur(d), d.f |= ja;
    } catch (y) {
      throw Ut(d), y;
    }
  else e !== null && Pr(d);
  var v = a && d.deps === null && d.first === null && d.nodes_start === null && d.teardown === null && (d.f & Tn) === 0;
  if (!v && n && (i !== null && Zl(d, i), ft !== null && (ft.f & Ft) !== 0 && (r & Qr) === 0)) {
    var p = (
      /** @type {Derived} */
      ft
    );
    (p.effects ??= []).push(d);
  }
  return d;
}
function Ln(r) {
  const e = pr(Sn, null, !1);
  return Dt(e, It), e.teardown = r, e;
}
function bt(r) {
  Xl("$effect"), We && hr(r, "name", {
    value: "$effect"
  });
  var e = (
    /** @type {Effect} */
    dt.f
  ), a = !ft && (e & vr) !== 0 && (e & ja) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Nt
    );
    (n.e ??= []).push(r);
  } else
    return Yo(r);
}
function Yo(r) {
  return pr(Cn | yo, r, !1);
}
function fr(r) {
  return pr(Cn, r, !1);
}
function Ql(r) {
  return pr(Na | Tn, r, !0);
}
function Ha(r, e = 0) {
  return pr(Sn | e, r, !0);
}
function D(r, e = [], a = []) {
  No(e, a, (n) => {
    pr(Sn, () => r(...n.map(t)), !0);
  });
}
function xr(r, e = 0) {
  var a = pr(Zr | e, r, !0);
  return We && (a.dev_stack = oa), a;
}
function or(r, e = !0) {
  return pr(vr, r, !0, e);
}
function Wo(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = qr, n = ft;
    Qn(!0), Yt(null);
    try {
      e.call(null);
    } finally {
      Qn(a), Yt(n);
    }
  }
}
function Ko(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const i = a.ac;
    i !== null && $r(() => {
      i.abort(En);
    });
    var n = a.next;
    (a.f & Qr) !== 0 ? a.parent = null : Ut(a, e), a = n;
  }
}
function Jl(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    (e.f & vr) === 0 && Ut(e), e = a;
  }
}
function Ut(r, e = !0) {
  var a = !1;
  (e || (r.f & ll) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (Xo(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), a = !0), Ko(r, e && !a), za(r, 0), Dt(r, Rr);
  var n = r.transitions;
  if (n !== null)
    for (const d of n)
      d.stop();
  Wo(r);
  var i = r.parent;
  i !== null && i.first !== null && Zo(r), We && (r.component_function = null), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function Xo(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ba(r)
    );
    r.remove(), r = a;
  }
}
function Zo(r) {
  var e = r.parent, a = r.prev, n = r.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = a));
}
function Ar(r, e) {
  var a = [];
  Dn(r, a, !0), Qo(a, () => {
    Ut(r), e && e();
  });
}
function Qo(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var i of r)
      i.out(n);
  } else
    e();
}
function Dn(r, e, a) {
  if ((r.f & Qt) === 0) {
    if (r.f ^= Qt, r.transitions !== null)
      for (const v of r.transitions)
        (v.is_global || a) && e.push(v);
    for (var n = r.first; n !== null; ) {
      var i = n.next, d = (n.f & jr) !== 0 || (n.f & vr) !== 0;
      Dn(n, e, d ? a : !1), n = i;
    }
  }
}
function ua(r) {
  Jo(r, !0);
}
function Jo(r, e) {
  if ((r.f & Qt) !== 0) {
    r.f ^= Qt, (r.f & It) === 0 && (Dt(r, Gt), Pr(r));
    for (var a = r.first; a !== null; ) {
      var n = a.next, i = (a.f & jr) !== 0 || (a.f & vr) !== 0;
      Jo(a, i ? e : !1), a = n;
    }
    if (r.transitions !== null)
      for (const d of r.transitions)
        (d.is_global || e) && d.in();
  }
}
let Gr = !1;
function Zn(r) {
  Gr = r;
}
let qr = !1;
function Qn(r) {
  qr = r;
}
let ft = null, Xt = !1;
function Yt(r) {
  ft = r;
}
let dt = null;
function Jt(r) {
  dt = r;
}
let dr = null;
function $o(r) {
  ft !== null && (dr === null ? dr = [r] : dr.push(r));
}
let Lt = null, qt = 0, Ht = null;
function $l(r) {
  Ht = r;
}
let ei = 1, sa = 0, zr = sa;
function Jn(r) {
  zr = r;
}
let gr = !1;
function ti() {
  return ++ei;
}
function fa(r) {
  var e = r.f;
  if ((e & Gt) !== 0)
    return !0;
  if ((e & ur) !== 0) {
    var a = r.deps, n = (e & Vt) !== 0;
    if (a !== null) {
      var i, d, v = (e & Ca) !== 0, p = n && dt !== null && !gr, y = a.length;
      if ((v || p) && (dt === null || (dt.f & Rr) === 0)) {
        var z = (
          /** @type {Derived} */
          r
        ), g = z.parent;
        for (i = 0; i < y; i++)
          d = a[i], (v || !d?.reactions?.includes(z)) && (d.reactions ??= []).push(z);
        v && (z.f ^= Ca), p && g !== null && (g.f & Vt) === 0 && (z.f ^= Vt);
      }
      for (i = 0; i < y; i++)
        if (d = a[i], fa(
          /** @type {Derived} */
          d
        ) && jo(
          /** @type {Derived} */
          d
        ), d.wv > r.wv)
          return !0;
    }
    (!n || dt !== null && !gr) && Dt(r, It);
  }
  return !1;
}
function ri(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !dr?.includes(r))
    for (var i = 0; i < n.length; i++) {
      var d = n[i];
      (d.f & Ft) !== 0 ? ri(
        /** @type {Derived} */
        d,
        e,
        !1
      ) : e === d && (a ? Dt(d, Gt) : (d.f & It) !== 0 && Dt(d, ur), Pr(
        /** @type {Effect} */
        d
      ));
    }
}
function fn(r) {
  var e = Lt, a = qt, n = Ht, i = ft, d = gr, v = dr, p = Nt, y = Xt, z = zr, g = r.f;
  Lt = /** @type {null | Value[]} */
  null, qt = 0, Ht = null, gr = (g & Vt) !== 0 && (Xt || !Gr || ft === null), ft = (g & (vr | Qr)) === 0 ? r : null, dr = null, Wr(r.ctx), Xt = !1, zr = ++sa, r.ac !== null && ($r(() => {
    r.ac.abort(En);
  }), r.ac = null);
  try {
    r.f |= Ta;
    var L = (
      /** @type {Function} */
      r.fn
    ), N = L(), S = r.deps;
    if (Lt !== null) {
      var k;
      if (za(r, qt), S !== null && qt > 0)
        for (S.length = qt + Lt.length, k = 0; k < Lt.length; k++)
          S[qt + k] = Lt[k];
      else
        r.deps = S = Lt;
      if (!gr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (g & Ft) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (k = qt; k < S.length; k++)
          (S[k].reactions ??= []).push(r);
    } else S !== null && qt < S.length && (za(r, qt), S.length = qt);
    if (Io() && Ht !== null && !Xt && S !== null && (r.f & (Ft | ur | Gt)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      Ht.length; k++)
        ri(
          Ht[k],
          /** @type {Effect} */
          r
        );
    return i !== null && i !== r && (sa++, Ht !== null && (n === null ? n = Ht : n.push(.../** @type {Source[]} */
    Ht))), (r.f & Tr) !== 0 && (r.f ^= Tr), N;
  } catch (b) {
    return El(b);
  } finally {
    r.f ^= Ta, Lt = e, qt = a, Ht = n, ft = i, gr = d, dr = v, Wr(p), Xt = y, zr = z;
  }
}
function es(r, e) {
  let a = e.reactions;
  if (a !== null) {
    var n = rl.call(a, r);
    if (n !== -1) {
      var i = a.length - 1;
      i === 0 ? a = e.reactions = null : (a[n] = a[i], a.pop());
    }
  }
  a === null && (e.f & Ft) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Lt === null || !Lt.includes(e)) && (Dt(e, ur), (e.f & (Vt | Ca)) === 0 && (e.f ^= Ca), vn(
    /** @type {Derived} **/
    e
  ), za(
    /** @type {Derived} **/
    e,
    0
  ));
}
function za(r, e) {
  var a = r.deps;
  if (a !== null)
    for (var n = e; n < a.length; n++)
      es(r, a[n]);
}
function Ur(r) {
  var e = r.f;
  if ((e & Rr) === 0) {
    Dt(r, It);
    var a = dt, n = Gr;
    if (dt = r, Gr = !0, We) {
      var i = va;
      Ma(r.component_function);
      var d = (
        /** @type {any} */
        oa
      );
      Ea(r.dev_stack ?? oa);
    }
    try {
      (e & Zr) !== 0 ? Jl(r) : Ko(r), Wo(r);
      var v = fn(r);
      r.teardown = typeof v == "function" ? v : null, r.wv = ei;
      var p;
      We && Tl && (r.f & Gt) !== 0 && r.deps;
    } finally {
      Gr = n, dt = a, We && (Ma(i), Ea(d));
    }
  }
}
function t(r) {
  var e = r.f, a = (e & Ft) !== 0;
  if (ft !== null && !Xt) {
    var n = dt !== null && (dt.f & Rr) !== 0;
    if (!n && !dr?.includes(r)) {
      var i = ft.deps;
      if ((ft.f & Ta) !== 0)
        r.rv < sa && (r.rv = sa, Lt === null && i !== null && i[qt] === r ? qt++ : Lt === null ? Lt = [r] : (!gr || !Lt.includes(r)) && Lt.push(r));
      else {
        (ft.deps ??= []).push(r);
        var d = r.reactions;
        d === null ? r.reactions = [ft] : d.includes(ft) || d.push(ft);
      }
    }
  } else if (a && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var v = (
      /** @type {Derived} */
      r
    ), p = v.parent;
    p !== null && (p.f & Vt) === 0 && (v.f ^= Vt);
  }
  if (We) {
    if (Er) {
      var y = (Er.f & Ta) !== 0, z = Er.deps?.includes(r);
      if (!y && !Xt && !z) {
        kl(
          /** @type {string} */
          r.label
        );
        var g = Ao("TracedAt");
        g && console.warn(g);
      }
    }
    Pl.delete(r);
  }
  if (qr) {
    if (Mr.has(r))
      return Mr.get(r);
    if (a) {
      v = /** @type {Derived} */
      r;
      var L = v.v;
      return ((v.f & It) === 0 && v.reactions !== null || ai(v)) && (L = zn(v)), Mr.set(v, L), L;
    }
  } else if (a) {
    if (v = /** @type {Derived} */
    r, Kr?.has(v))
      return Kr.get(v);
    fa(v) && jo(v);
  }
  if ((r.f & Tr) !== 0)
    throw r.v;
  return r.v;
}
function ai(r) {
  if (r.v === Mt) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Mr.has(e) || (e.f & Ft) !== 0 && ai(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Or(r) {
  var e = Xt;
  try {
    return Xt = !0, r();
  } finally {
    Xt = e;
  }
}
const ts = -7169;
function Dt(r, e) {
  r.f = r.f & ts | e;
}
function rs(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (nr in r)
      bn(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const a = r[e];
        typeof a == "object" && a && nr in a && bn(a);
      }
  }
}
function bn(r, e = /* @__PURE__ */ new Set()) {
  if (typeof r == "object" && r !== null && // We don't want to traverse DOM elements
  !(r instanceof EventTarget) && !e.has(r)) {
    e.add(r), r instanceof Date && r.getTime();
    for (let n in r)
      try {
        bn(r[n], e);
      } catch {
      }
    const a = yn(r);
    if (a !== Object.prototype && a !== Array.prototype && a !== Map.prototype && a !== Set.prototype && a !== Date.prototype) {
      const n = _o(a);
      for (let i in n) {
        const d = n[i].get;
        if (d)
          try {
            d.call(r);
          } catch {
          }
      }
    }
  }
}
const as = /* @__PURE__ */ new Set(), ns = /* @__PURE__ */ new Set();
function ni(r, e, a, n = {}) {
  function i(d) {
    if (n.capture || os.call(e, d), !d.cancelBubble)
      return $r(() => a?.call(this, d));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? Jr(() => {
    e.addEventListener(r, i, n);
  }) : e.addEventListener(r, i, n), i;
}
function Ot(r, e, a, n, i) {
  var d = { capture: n, passive: i }, v = ni(r, e, a, d);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ln(() => {
    e.removeEventListener(r, v, d);
  });
}
function gt(r) {
  for (var e = 0; e < r.length; e++)
    as.add(r[e]);
  for (var a of ns)
    a(r);
}
let $n = null;
function os(r) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, i = r.composedPath?.() || [], d = (
    /** @type {null | Element} */
    i[0] || r.target
  );
  $n = r;
  var v = 0, p = $n === r && r.__root;
  if (p) {
    var y = i.indexOf(p);
    if (y !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var z = i.indexOf(e);
    if (z === -1)
      return;
    y <= z && (v = y);
  }
  if (d = /** @type {Element} */
  i[v] || r.target, d !== e) {
    hr(r, "currentTarget", {
      configurable: !0,
      get() {
        return d || a;
      }
    });
    var g = ft, L = dt;
    Yt(null), Jt(null);
    try {
      for (var N, S = []; d !== null; ) {
        var k = d.assignedSlot || d.parentNode || /** @type {any} */
        d.host || null;
        try {
          var b = d["__" + n];
          if (b != null && (!/** @type {any} */
          d.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === d))
            if (Ra(b)) {
              var [q, ...Z] = b;
              q.apply(d, [r, ...Z]);
            } else
              b.call(d, r);
        } catch (w) {
          N ? S.push(w) : N = w;
        }
        if (r.cancelBubble || k === e || k === null)
          break;
        d = k;
      }
      if (N) {
        for (let w of S)
          queueMicrotask(() => {
            throw w;
          });
        throw N;
      }
    } finally {
      r.__root = e, delete r.currentTarget, Yt(g), Jt(L);
    }
  }
}
function Rn(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function Dr(r, e) {
  var a = (
    /** @type {Effect} */
    dt
  );
  a.nodes_start === null && (a.nodes_start = r, a.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function c(r, e) {
  var a = (e & Zi) !== 0, n = (e & Qi) !== 0, i, d = !r.startsWith("<!>");
  return () => {
    i === void 0 && (i = Rn(d ? r : "<!>" + r), a || (i = /** @type {Node} */
    /* @__PURE__ */ ar(i)));
    var v = (
      /** @type {TemplateNode} */
      n || Vl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (a) {
      var p = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ar(v)
      ), y = (
        /** @type {TemplateNode} */
        v.lastChild
      );
      Dr(p, y);
    } else
      Dr(v, v);
    return v;
  };
}
// @__NO_SIDE_EFFECTS__
function is(r, e, a = "svg") {
  var n = !r.startsWith("<!>"), i = `<${a}>${n ? r : "<!>" + r}</${a}>`, d;
  return () => {
    if (!d) {
      var v = (
        /** @type {DocumentFragment} */
        Rn(i)
      ), p = (
        /** @type {Element} */
        /* @__PURE__ */ ar(v)
      );
      d = /** @type {Element} */
      /* @__PURE__ */ ar(p);
    }
    var y = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    return Dr(y, y), y;
  };
}
// @__NO_SIDE_EFFECTS__
function ir(r, e) {
  return /* @__PURE__ */ is(r, e, "svg");
}
function Ct(r = "") {
  {
    var e = Nr(r + "");
    return Dr(e, e), e;
  }
}
function Ce() {
  var r = document.createDocumentFragment(), e = document.createComment(""), a = Nr();
  return r.append(e, a), Dr(e, a), r;
}
function o(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function ls(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const ss = [
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
function ds(r) {
  return ss.includes(r);
}
const cs = {
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
function vs(r) {
  return r = r.toLowerCase(), cs[r] ?? r;
}
let oi = !0;
function eo(r) {
  oi = r;
}
function le(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && (r.__t = a, r.nodeValue = a + "");
}
function lt(r, e, ...a) {
  var n = r, i = Pt, d;
  xr(() => {
    i !== (i = e()) && (d && (Ut(d), d = null), We && i == null && ml(), d = or(() => (
      /** @type {SnippetFn} */
      i(n, ...a)
    )));
  }, jr);
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
          xl(e);
        },
        set: (n) => {
          a = n;
        }
      });
    }
  };
  r("$state"), r("$effect"), r("$derived"), r("$inspect"), r("$props"), r("$bindable");
}
var to = /* @__PURE__ */ new Map();
function us(r, e) {
  var a = to.get(r);
  a || (a = /* @__PURE__ */ new Set(), to.set(r, a)), a.add(e);
}
const $a = 0, ha = 1, en = 2;
function fs(r, e, a, n, i) {
  var d = r, v = Nt, p = We ? Nt?.function : null, y = We ? oa : null, z = Mt, g, L, N, S = Lr(
    /** @type {V} */
    void 0
  ), k = Lr(void 0), b = !1;
  function q(w, A) {
    b = !0, A && (Jt(Z), Yt(Z), Wr(v), We && (Ma(p), Ea(y)));
    try {
      w === ha && n && (L ? ua(L) : L = or(() => n(d, S))), w !== $a && g && Ar(g, () => g = null), w !== ha && L && Ar(L, () => L = null), w !== en && N && Ar(N, () => N = null);
    } finally {
      A && (We && (Ma(null), Ea(null)), Wr(null), Yt(null), Jt(null), jl());
    }
  }
  var Z = xr(() => {
    if (z !== (z = e())) {
      if (ol(z)) {
        var w = z;
        b = !1, w.then(
          (A) => {
            w === z && (mr(S, A), q(ha, !0));
          },
          (A) => {
            if (w === z)
              throw mr(k, A), q(en, !0), k.v;
          }
        ), Jr(() => {
          b || q($a, !0);
        });
      } else
        mr(S, z), q(ha, !1);
      return () => z = Mt;
    }
  });
}
function x(r, e, a = !1) {
  var n = r, i = null, d = null, v = Mt, p = a ? jr : 0, y = !1;
  const z = (S, k = !0) => {
    y = !0, N(k, S);
  };
  var g = null;
  function L() {
    g !== null && (g.lastChild.remove(), n.before(g), g = null);
    var S = v ? i : d, k = v ? d : i;
    S && ua(S), k && Ar(k, () => {
      v ? d = null : i = null;
    });
  }
  const N = (S, k) => {
    if (v !== (v = S)) {
      var b = Pn(), q = n;
      if (b && (g = document.createDocumentFragment(), g.append(q = Nr())), v ? i ??= k && or(() => k(q)) : d ??= k && or(() => k(q)), b) {
        var Z = (
          /** @type {Batch} */
          wt
        ), w = v ? i : d, A = v ? d : i;
        w && Z.skipped_effects.delete(w), A && Z.skipped_effects.add(A), Z.add_callback(L);
      } else
        L();
    }
  };
  xr(() => {
    y = !1, e(z), y || N(null, null);
  }, p);
}
function Fr(r, e) {
  return e;
}
function bs(r, e, a) {
  for (var n = r.items, i = [], d = e.length, v = 0; v < d; v++)
    Dn(e[v].e, i, !0);
  var p = d > 0 && i.length === 0 && a !== null;
  if (p) {
    var y = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    Yl(y), y.append(
      /** @type {Element} */
      a
    ), n.clear(), tr(r, e[0].prev, e[d - 1].next);
  }
  Qo(i, () => {
    for (var z = 0; z < d; z++) {
      var g = e[z];
      p || (n.delete(g.k), tr(r, g.prev, g.next)), Ut(g.e, !p);
    }
  });
}
function Xe(r, e, a, n, i, d = null) {
  var v = r, p = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, y = (e & ho) !== 0;
  if (y) {
    var z = (
      /** @type {Element} */
      r
    );
    v = z.appendChild(Nr());
  }
  var g = null, L = !1, N = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ Ro(() => {
    var Z = a();
    return Ra(Z) ? Z : Z == null ? [] : xo(Z);
  }), k, b;
  function q() {
    gs(
      b,
      k,
      p,
      N,
      v,
      i,
      e,
      n,
      a
    ), d !== null && (k.length === 0 ? g ? ua(g) : g = or(() => d(v)) : g !== null && Ar(g, () => {
      g = null;
    }));
  }
  xr(() => {
    b ??= /** @type {Effect} */
    dt, k = /** @type {V[]} */
    t(S);
    var Z = k.length;
    if (!(L && Z === 0)) {
      L = Z === 0;
      var w, A, W, H;
      if (Pn()) {
        var j = /* @__PURE__ */ new Set(), G = (
          /** @type {Batch} */
          wt
        );
        for (A = 0; A < Z; A += 1) {
          W = k[A], H = n(W, A);
          var B = p.items.get(H) ?? N.get(H);
          B ? (e & (La | Da)) !== 0 && ii(B, W, A, e) : (w = li(
            null,
            p,
            null,
            null,
            W,
            H,
            A,
            i,
            e,
            a,
            !0
          ), N.set(H, w)), j.add(H);
        }
        for (const [I, O] of p.items)
          j.has(I) || G.skipped_effects.add(O.e);
        G.add_callback(q);
      } else
        q();
      t(S);
    }
  });
}
function gs(r, e, a, n, i, d, v, p, y) {
  var z = (v & Bi) !== 0, g = (v & (La | Da)) !== 0, L = e.length, N = a.items, S = a.first, k = S, b, q = null, Z, w = [], A = [], W, H, j, G;
  if (z)
    for (G = 0; G < L; G += 1)
      W = e[G], H = p(W, G), j = N.get(H), j !== void 0 && (j.a?.measure(), (Z ??= /* @__PURE__ */ new Set()).add(j));
  for (G = 0; G < L; G += 1) {
    if (W = e[G], H = p(W, G), j = N.get(H), j === void 0) {
      var B = n.get(H);
      if (B !== void 0) {
        n.delete(H), N.set(H, B);
        var I = q ? q.next : k;
        tr(a, q, B), tr(a, B, I), tn(B, I, i), q = B;
      } else {
        var O = k ? (
          /** @type {TemplateNode} */
          k.e.nodes_start
        ) : i;
        q = li(
          O,
          a,
          q,
          q === null ? a.first : q.next,
          W,
          H,
          G,
          d,
          v,
          y
        );
      }
      N.set(H, q), w = [], A = [], k = q.next;
      continue;
    }
    if (g && ii(j, W, G, v), (j.e.f & Qt) !== 0 && (ua(j.e), z && (j.a?.unfix(), (Z ??= /* @__PURE__ */ new Set()).delete(j))), j !== k) {
      if (b !== void 0 && b.has(j)) {
        if (w.length < A.length) {
          var R = A[0], P;
          q = R.prev;
          var C = w[0], M = w[w.length - 1];
          for (P = 0; P < w.length; P += 1)
            tn(w[P], R, i);
          for (P = 0; P < A.length; P += 1)
            b.delete(A[P]);
          tr(a, C.prev, M.next), tr(a, q, C), tr(a, M, R), k = R, q = M, G -= 1, w = [], A = [];
        } else
          b.delete(j), tn(j, k, i), tr(a, j.prev, j.next), tr(a, j, q === null ? a.first : q.next), tr(a, q, j), q = j;
        continue;
      }
      for (w = [], A = []; k !== null && k.k !== H; )
        (k.e.f & Qt) === 0 && (b ??= /* @__PURE__ */ new Set()).add(k), A.push(k), k = k.next;
      if (k === null)
        continue;
      j = k;
    }
    w.push(j), q = j, k = j.next;
  }
  if (k !== null || b !== void 0) {
    for (var m = b === void 0 ? [] : xo(b); k !== null; )
      (k.e.f & Qt) === 0 && m.push(k), k = k.next;
    var _ = m.length;
    if (_ > 0) {
      var F = (v & ho) !== 0 && L === 0 ? i : null;
      if (z) {
        for (G = 0; G < _; G += 1)
          m[G].a?.measure();
        for (G = 0; G < _; G += 1)
          m[G].a?.fix();
      }
      bs(a, m, F);
    }
  }
  z && Jr(() => {
    if (Z !== void 0)
      for (j of Z)
        j.a?.apply();
  }), r.first = a.first && a.first.e, r.last = q && q.e;
  for (var Y of n.values())
    Ut(Y.e);
  n.clear();
}
function ii(r, e, a, n) {
  (n & La) !== 0 && mr(r.v, e), (n & Da) !== 0 ? mr(
    /** @type {Value<number>} */
    r.i,
    a
  ) : r.i = a;
}
function li(r, e, a, n, i, d, v, p, y, z, g) {
  var L = (y & La) !== 0, N = (y & Hi) === 0, S = L ? N ? /* @__PURE__ */ Bo(i, !1, !1) : Lr(i) : i, k = (y & Da) === 0 ? v : Lr(v);
  We && L && (S.trace = () => {
    var Z = typeof k == "number" ? v : k.v;
    z()[Z];
  });
  var b = {
    i: k,
    v: S,
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
      q.append(r = Nr());
    }
    return b.e = or(() => p(
      /** @type {Node} */
      r,
      S,
      k,
      z
    ), Sl), b.e.prev = a && a.e, b.e.next = n && n.e, a === null ? g || (e.first = b) : (a.next = b, a.e.next = b.e), n !== null && (n.prev = b, n.e.prev = b.e), b;
  } finally {
  }
}
function tn(r, e, a) {
  for (var n = r.next ? (
    /** @type {TemplateNode} */
    r.next.e.nodes_start
  ) : a, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, d = (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ); d !== null && d !== n; ) {
    var v = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ba(d)
    );
    i.before(d), d = v;
  }
}
function tr(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function Va(r, e, a = !1, n = !1, i = !1) {
  var d = r, v = "";
  D(() => {
    var p = (
      /** @type {Effect} */
      dt
    );
    if (v !== (v = e() ?? "") && (p.nodes_start !== null && (Xo(
      p.nodes_start,
      /** @type {TemplateNode} */
      p.nodes_end
    ), p.nodes_start = p.nodes_end = null), v !== "")) {
      var y = v + "";
      a ? y = `<svg>${y}</svg>` : n && (y = `<math>${y}</math>`);
      var z = Rn(y);
      if ((a || n) && (z = /** @type {Element} */
      /* @__PURE__ */ ar(z)), Dr(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ar(z),
        /** @type {TemplateNode} */
        z.lastChild
      ), a || n)
        for (; /* @__PURE__ */ ar(z); )
          d.before(
            /** @type {Node} */
            /* @__PURE__ */ ar(z)
          );
      else
        d.before(z);
    }
  });
}
function He(r, e, a) {
  var n = r, i, d, v = null, p = null;
  function y() {
    d && (Ar(d), d = null), v && (v.lastChild.remove(), n.before(v), v = null), d = p, p = null;
  }
  xr(() => {
    if (i !== (i = e())) {
      var z = Pn();
      if (i) {
        var g = n;
        z && (v = document.createDocumentFragment(), v.append(g = Nr()), d && wt.skipped_effects.add(d)), p = or(() => a(g, i));
      }
      z ? wt.add_callback(y) : y();
    }
  }, jr);
}
function ms(r, e, a, n, i, d) {
  var v, p, y = null, z = (
    /** @type {TemplateNode} */
    r
  ), g;
  xr(() => {
    const L = e() || null;
    var N = L === "svg" ? el : null;
    L !== v && (g && (L === null ? Ar(g, () => {
      g = null, p = null;
    }) : L === p ? ua(g) : (Ut(g), eo(!1))), L && L !== p && (g = or(() => {
      if (y = N ? document.createElementNS(N, L) : document.createElement(L), Dr(y, y), n) {
        var S = (
          /** @type {TemplateNode} */
          y.appendChild(Nr())
        );
        n(y, S);
      }
      dt.nodes_end = y, z.before(y);
    })), v = L, v && (p = v), eo(!0));
  }, jr);
}
function $e(r, e) {
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
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, n.appendChild(i), We && us(e.hash, i);
    }
  });
}
function Ie(r, e, a) {
  fr(() => {
    var n = Or(() => e(r, a?.()) || {});
    if (a && n?.update) {
      var i = !1, d = (
        /** @type {any} */
        {}
      );
      Ha(() => {
        var v = a();
        rs(v), i && Mn(d, v) && (d = v, n.update(v));
      }), i = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function hs(r, e) {
  var a = void 0, n;
  xr(() => {
    a !== (a = e()) && (n && (Ut(n), n = null), a && (n = or(() => {
      fr(() => (
        /** @type {(node: Element) => void} */
        a(r)
      ));
    })));
  });
}
function si(r) {
  var e, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var i = r.length;
    for (e = 0; e < i; e++) r[e] && (a = si(r[e])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function ps() {
  for (var r, e, a = 0, n = "", i = arguments.length; a < i; a++) (r = arguments[a]) && (e = si(r)) && (n && (n += " "), n += e);
  return n;
}
function oe(r) {
  return typeof r == "object" ? ps(r) : r ?? "";
}
const ro = [...` 	
\r\f \v\uFEFF`];
function xs(r, e, a) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var i in a)
      if (a[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var d = i.length, v = 0; (v = n.indexOf(i, v)) >= 0; ) {
          var p = v + d;
          (v === 0 || ro.includes(n[v - 1])) && (p === n.length || ro.includes(n[p])) ? n = (v === 0 ? "" : n.substring(0, v)) + n.substring(p + 1) : v = p;
        }
  }
  return n === "" ? null : n;
}
function ao(r, e = !1) {
  var a = e ? " !important;" : ";", n = "";
  for (var i in r) {
    var d = r[i];
    d != null && d !== "" && (n += " " + i + ": " + d + a);
  }
  return n;
}
function rn(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function _s(r, e) {
  if (e) {
    var a = "", n, i;
    if (Array.isArray(e) ? (n = e[0], i = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var d = !1, v = 0, p = !1, y = [];
      n && y.push(...Object.keys(n).map(rn)), i && y.push(...Object.keys(i).map(rn));
      var z = 0, g = -1;
      const b = r.length;
      for (var L = 0; L < b; L++) {
        var N = r[L];
        if (p ? N === "/" && r[L - 1] === "*" && (p = !1) : d ? d === N && (d = !1) : N === "/" && r[L + 1] === "*" ? p = !0 : N === '"' || N === "'" ? d = N : N === "(" ? v++ : N === ")" && v--, !p && d === !1 && v === 0) {
          if (N === ":" && g === -1)
            g = L;
          else if (N === ";" || L === b - 1) {
            if (g !== -1) {
              var S = rn(r.substring(z, g).trim());
              if (!y.includes(S)) {
                N !== ";" && L++;
                var k = r.substring(z, L).trim();
                a += " " + k + ";";
              }
            }
            z = L + 1, g = -1;
          }
        }
      }
    }
    return n && (a += ao(n)), i && (a += ao(i, !0)), a = a.trim(), a === "" ? null : a;
  }
  return r == null ? null : String(r);
}
function U(r, e, a, n, i, d) {
  var v = r.__className;
  if (v !== a || v === void 0) {
    var p = xs(a, n, d);
    p == null ? r.removeAttribute("class") : e ? r.className = p : r.setAttribute("class", p), r.__className = a;
  } else if (d && i !== d)
    for (var y in d) {
      var z = !!d[y];
      (i == null || z !== !!i[y]) && r.classList.toggle(y, z);
    }
  return d;
}
function an(r, e = {}, a, n) {
  for (var i in a) {
    var d = a[i];
    e[i] !== d && (a[i] == null ? r.style.removeProperty(i) : r.style.setProperty(i, d, n));
  }
}
function ut(r, e, a, n) {
  var i = r.__style;
  if (i !== e) {
    var d = _s(e, n);
    d == null ? r.removeAttribute("style") : r.style.cssText = d, r.__style = e;
  } else n && (Array.isArray(n) ? (an(r, a?.[0], n[0]), an(r, a?.[1], n[1], "important")) : an(r, a, n));
  return n;
}
function Ia(r, e, a = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!Ra(e))
      return Cl();
    for (var n of r.options)
      n.selected = e.includes(no(n));
    return;
  }
  for (n of r.options) {
    var i = no(n);
    if (Fl(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function di(r) {
  var e = new MutationObserver(() => {
    Ia(r, r.__value);
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
  }), Ln(() => {
    e.disconnect();
  });
}
function no(r) {
  return "__value" in r ? r.__value : r.value;
}
const ta = Symbol("class"), kr = Symbol("style"), ci = Symbol("is custom element"), vi = Symbol("is html");
function ws(r, e) {
  var a = Ga(r);
  a.value === (a.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  r.value === e && (e !== 0 || r.nodeName !== "PROGRESS") || (r.value = e ?? "");
}
function Zt(r, e) {
  var a = Ga(r);
  a.checked !== (a.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (r.checked = e);
}
function ys(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function ye(r, e, a, n) {
  var i = Ga(r);
  i[e] !== (i[e] = a) && (e === "loading" && (r[sl] = a), a == null ? r.removeAttribute(e) : typeof a != "string" && ui(r).includes(e) ? r[e] = a : r.setAttribute(e, a));
}
function ks(r, e, a, n, i = !1) {
  var d = Ga(r), v = d[ci], p = !d[vi], y = e || {}, z = r.tagName === "OPTION";
  for (var g in e)
    g in a || (a[g] = null);
  a.class ? a.class = oe(a.class) : (n || a[ta]) && (a.class = null), a[kr] && (a.style ??= null);
  var L = ui(r);
  for (const w in a) {
    let A = a[w];
    if (z && w === "value" && A == null) {
      r.value = r.__value = "", y[w] = A;
      continue;
    }
    if (w === "class") {
      var N = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      U(r, N, A, n, e?.[ta], a[ta]), y[w] = A, y[ta] = a[ta];
      continue;
    }
    if (w === "style") {
      ut(r, A, e?.[kr], a[kr]), y[w] = A, y[kr] = a[kr];
      continue;
    }
    var S = y[w];
    if (!(A === S && !(A === void 0 && r.hasAttribute(w)))) {
      y[w] = A;
      var k = w[0] + w[1];
      if (k !== "$$")
        if (k === "on") {
          const W = {}, H = "$$" + w;
          let j = w.slice(2);
          var b = ds(j);
          if (ls(j) && (j = j.slice(0, -7), W.capture = !0), !b && S) {
            if (A != null) continue;
            r.removeEventListener(j, y[H], W), y[H] = null;
          }
          if (A != null)
            if (b)
              r[`__${j}`] = A, gt([j]);
            else {
              let G = function(B) {
                y[w].call(this, B);
              };
              y[H] = ni(j, r, G, W);
            }
          else b && (r[`__${j}`] = void 0);
        } else if (w === "style")
          ye(r, w, A);
        else if (w === "autofocus")
          Wl(
            /** @type {HTMLElement} */
            r,
            !!A
          );
        else if (!v && (w === "__value" || w === "value" && A != null))
          r.value = r.__value = A;
        else if (w === "selected" && z)
          ys(
            /** @type {HTMLOptionElement} */
            r,
            A
          );
        else {
          var q = w;
          p || (q = vs(q));
          var Z = q === "defaultValue" || q === "defaultChecked";
          if (A == null && !v && !Z)
            if (d[w] = null, q === "value" || q === "checked") {
              let W = (
                /** @type {HTMLInputElement} */
                r
              );
              const H = e === void 0;
              if (q === "value") {
                let j = W.defaultValue;
                W.removeAttribute(q), W.defaultValue = j, W.value = W.__value = H ? j : null;
              } else {
                let j = W.defaultChecked;
                W.removeAttribute(q), W.defaultChecked = j, W.checked = H ? j : !1;
              }
            } else
              r.removeAttribute(w);
          else Z || L.includes(q) && (v || typeof A != "string") ? (r[q] = A, q in d && (d[q] = Mt)) : typeof A != "function" && ye(r, q, A);
        }
    }
  }
  return y;
}
function Je(r, e, a = [], n = [], i, d = !1) {
  No(a, n, (v) => {
    var p = void 0, y = {}, z = r.nodeName === "SELECT", g = !1;
    if (xr(() => {
      var N = e(...v.map(t)), S = ks(r, p, N, i, d);
      g && z && "value" in N && Ia(
        /** @type {HTMLSelectElement} */
        r,
        N.value
      );
      for (let b of Object.getOwnPropertySymbols(y))
        N[b] || Ut(y[b]);
      for (let b of Object.getOwnPropertySymbols(N)) {
        var k = N[b];
        b.description === tl && (!p || k !== p[b]) && (y[b] && Ut(y[b]), y[b] = or(() => hs(r, () => k))), S[b] = k;
      }
      p = S;
    }), z) {
      var L = (
        /** @type {HTMLSelectElement} */
        r
      );
      fr(() => {
        Ia(
          L,
          /** @type {Record<string | symbol, any>} */
          p.value,
          !0
        ), di(L);
      });
    }
    g = !0;
  });
}
function Ga(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [ci]: r.nodeName.includes("-"),
      [vi]: r.namespaceURI === $i
    }
  );
}
var oo = /* @__PURE__ */ new Map();
function ui(r) {
  var e = oo.get(r.nodeName);
  if (e) return e;
  oo.set(r.nodeName, e = []);
  for (var a, n = r, i = Element.prototype; i !== n; ) {
    a = _o(n);
    for (var d in a)
      a[d].set && e.push(d);
    n = yn(n);
  }
  return e;
}
const Cs = po ? () => performance.now() : () => Date.now(), sr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => (po ? requestAnimationFrame : Pt)(r)
  ),
  now: () => Cs(),
  tasks: /* @__PURE__ */ new Set()
};
function fi() {
  const r = sr.now();
  sr.tasks.forEach((e) => {
    e.c(r) || (sr.tasks.delete(e), e.f());
  }), sr.tasks.size !== 0 && sr.tick(fi);
}
function Ss(r) {
  let e;
  return sr.tasks.size === 0 && sr.tick(fi), {
    promise: new Promise((a) => {
      sr.tasks.add(e = { c: r, f: a });
    }),
    abort() {
      sr.tasks.delete(e);
    }
  };
}
function pa(r, e) {
  $r(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function Ts(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function io(r) {
  const e = {}, a = r.split(";");
  for (const n of a) {
    const [i, d] = n.split(":");
    if (!i || d === void 0) break;
    const v = Ts(i.trim());
    e[v] = d.trim();
  }
  return e;
}
const Es = (r) => r;
function tt(r, e, a, n) {
  var i = (r & Wi) !== 0, d = (r & Ki) !== 0, v = i && d, p = (r & Xi) !== 0, y = v ? "both" : i ? "in" : "out", z, g = e.inert, L = e.style.overflow, N, S;
  function k() {
    return $r(() => z ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: y
    }));
  }
  var b = {
    is_global: p,
    in() {
      if (e.inert = g, !i) {
        S?.abort(), S?.reset?.();
        return;
      }
      d || N?.abort(), pa(e, "introstart"), N = gn(e, k(), S, 1, () => {
        pa(e, "introend"), N?.abort(), N = z = void 0, e.style.overflow = L;
      });
    },
    out(A) {
      if (!d) {
        A?.(), z = void 0;
        return;
      }
      e.inert = !0, pa(e, "outrostart"), S = gn(e, k(), N, 0, () => {
        pa(e, "outroend"), A?.();
      });
    },
    stop: () => {
      N?.abort(), S?.abort();
    }
  }, q = (
    /** @type {Effect} */
    dt
  );
  if ((q.transitions ??= []).push(b), i && oi) {
    var Z = p;
    if (!Z) {
      for (var w = (
        /** @type {Effect | null} */
        q.parent
      ); w && (w.f & jr) !== 0; )
        for (; (w = w.parent) && (w.f & Zr) === 0; )
          ;
      Z = !w || (w.f & ja) !== 0;
    }
    Z && fr(() => {
      Or(() => b.in());
    });
  }
}
function gn(r, e, a, n, i) {
  var d = n === 1;
  if (Hr(e)) {
    var v, p = !1;
    return Jr(() => {
      if (!p) {
        var q = e({ direction: d ? "in" : "out" });
        v = gn(r, q, a, n, i);
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
    return i(), {
      abort: Pt,
      deactivate: Pt,
      reset: Pt,
      t: () => n
    };
  const { delay: y = 0, css: z, tick: g, easing: L = Es } = e;
  var N = [];
  if (d && a === void 0 && (g && g(0, 1), z)) {
    var S = io(z(0, 1));
    N.push(S, S);
  }
  var k = () => 1 - n, b = r.animate(N, { duration: y, fill: "forwards" });
  return b.onfinish = () => {
    b.cancel();
    var q = a?.t() ?? 1 - n;
    a?.abort();
    var Z = n - q, w = (
      /** @type {number} */
      e.duration * Math.abs(Z)
    ), A = [];
    if (w > 0) {
      var W = !1;
      if (z)
        for (var H = Math.ceil(w / 16.666666666666668), j = 0; j <= H; j += 1) {
          var G = q + Z * L(j / H), B = io(z(G, 1 - G));
          A.push(B), W ||= B.overflow === "hidden";
        }
      W && (r.style.overflow = "hidden"), k = () => {
        var I = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          b.currentTime
        );
        return q + Z * L(I / w);
      }, g && Ss(() => {
        if (b.playState !== "running") return !1;
        var I = k();
        return g(I, 1 - I), !0;
      });
    }
    b = r.animate(A, { duration: w, fill: "forwards" }), b.onfinish = () => {
      k = () => n, g?.(n, 1 - n), i();
    };
  }, {
    abort: () => {
      b && (b.cancel(), b.effect = null, b.onfinish = Pt);
    },
    deactivate: () => {
      i = Pt;
    },
    reset: () => {
      n === 0 && g?.(1, 0);
    },
    t: () => k()
  };
}
function _r(r, e, a = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Uo(r, "input", (i) => {
    We && r.type === "checkbox" && Gn();
    var d = i ? r.defaultValue : r.value;
    if (d = nn(r) ? on(d) : d, a(d), wt !== null && n.add(wt), d !== (d = e())) {
      var v = r.selectionStart, p = r.selectionEnd;
      r.value = d ?? "", p !== null && (r.selectionStart = v, r.selectionEnd = Math.min(p, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Or(e) == null && r.value && (a(nn(r) ? on(r.value) : r.value), wt !== null && n.add(wt)), Ha(() => {
    We && r.type === "checkbox" && Gn();
    var i = e();
    if (r === document.activeElement) {
      var d = (
        /** @type {Batch} */
        _a ?? wt
      );
      if (n.has(d))
        return;
    }
    nn(r) && i === on(r.value) || r.type === "date" && !i && !r.value || i !== r.value && (r.value = i ?? "");
  });
}
function Ms(r, e, a = e) {
  Uo(r, "change", (n) => {
    var i = n ? r.defaultChecked : r.checked;
    a(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Or(e) == null && a(r.checked), Ha(() => {
    var n = e();
    r.checked = !!n;
  });
}
function nn(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function on(r) {
  return r === "" ? null : +r;
}
function lo(r, e) {
  return r === e || r?.[nr] === e;
}
function rt(r = {}, e, a, n) {
  return fr(() => {
    var i, d;
    return Ha(() => {
      i = d, d = [], Or(() => {
        r !== a(...d) && (e(r, ...d), i && lo(a(...i), r) && e(null, ...i));
      });
    }), () => {
      Jr(() => {
        d && lo(a(...d), r) && e(null, ...d);
      });
    };
  }), r;
}
function jn(r, e, a) {
  if (r == null)
    return e(void 0), a && a(void 0), Pt;
  const n = Or(
    () => r.subscribe(
      e,
      // @ts-expect-error
      a
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Br = [];
function As(r, e) {
  return {
    subscribe: Ua(r, e).subscribe
  };
}
function Ua(r, e = Pt) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function i(p) {
    if (Mn(r, p) && (r = p, a)) {
      const y = !Br.length;
      for (const z of n)
        z[1](), Br.push(z, r);
      if (y) {
        for (let z = 0; z < Br.length; z += 2)
          Br[z][0](Br[z + 1]);
        Br.length = 0;
      }
    }
  }
  function d(p) {
    i(p(
      /** @type {T} */
      r
    ));
  }
  function v(p, y = Pt) {
    const z = [p, y];
    return n.add(z), n.size === 1 && (a = e(i, d) || Pt), p(
      /** @type {T} */
      r
    ), () => {
      n.delete(z), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: i, update: d, subscribe: v };
}
function zs(r, e, a) {
  const n = !Array.isArray(r), i = n ? [r] : r;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const d = e.length < 2;
  return As(a, (v, p) => {
    let y = !1;
    const z = [];
    let g = 0, L = Pt;
    const N = () => {
      if (g)
        return;
      L();
      const k = e(n ? z[0] : z, v, p);
      d ? v(k) : L = typeof k == "function" ? k : Pt;
    }, S = i.map(
      (k, b) => jn(
        k,
        (q) => {
          z[b] = q, g &= ~(1 << b), y && N();
        },
        () => {
          g |= 1 << b;
        }
      )
    );
    return y = !0, N(), function() {
      kn(S), L(), y = !1;
    };
  });
}
function Ya(r) {
  let e;
  return jn(r, (a) => e = a)(), e;
}
let xa = !1, mn = Symbol();
function bi(r, e, a) {
  const n = a[e] ??= {
    store: null,
    source: /* @__PURE__ */ Bo(void 0),
    unsubscribe: Pt
  };
  if (We && (n.source.label = e), n.store !== r && !(mn in a))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = Pt;
    else {
      var i = !0;
      n.unsubscribe = jn(r, (d) => {
        i ? n.source.v = d : K(n.source, d);
      }), i = !1;
    }
  return r && mn in a ? Ya(r) : t(n.source);
}
function gi() {
  const r = {};
  function e() {
    Ln(() => {
      for (var a in r)
        r[a].unsubscribe();
      hr(r, mn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [r, e];
}
function Is(r) {
  var e = xa;
  try {
    return xa = !1, [r(), xa];
  } finally {
    xa = e;
  }
}
const Ps = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return We && pl(`${r.name}.${String(e)}`), !1;
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
    We ? { props: r, exclude: e, name: a, other: {}, to_proxy: [] } : { props: r, exclude: e },
    Ps
  );
}
const Ls = {
  get(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if (Hr(n) && (n = n()), typeof n == "object" && n !== null && e in n) return n[e];
    }
  },
  set(r, e, a) {
    let n = r.props.length;
    for (; n--; ) {
      let i = r.props[n];
      Hr(i) && (i = i());
      const d = Sr(i, e);
      if (d && d.set)
        return d.set(a), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let a = r.props.length;
    for (; a--; ) {
      let n = r.props[a];
      if (Hr(n) && (n = n()), typeof n == "object" && n !== null && e in n) {
        const i = Sr(n, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(r, e) {
    if (e === nr || e === ko) return !1;
    for (let a of r.props)
      if (Hr(a) && (a = a()), a != null && e in a) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let a of r.props)
      if (Hr(a) && (a = a()), !!a) {
        for (const n in a)
          e.includes(n) || e.push(n);
        for (const n of Object.getOwnPropertySymbols(a))
          e.includes(n) || e.push(n);
      }
    return e;
  }
};
function ra(...r) {
  return new Proxy({ props: r }, Ls);
}
function s(r, e, a, n) {
  var i = (a & Ui) !== 0, d = (a & Yi) !== 0, v = (
    /** @type {V} */
    n
  ), p = !0, y = () => (p && (p = !1, v = d ? Or(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), v), z;
  if (i) {
    var g = nr in r || ko in r;
    z = Sr(r, e)?.set ?? (g && e in r ? (w) => r[e] = w : void 0);
  }
  var L, N = !1;
  i ? [L, N] = Is(() => (
    /** @type {V} */
    r[e]
  )) : L = /** @type {V} */
  r[e], L === void 0 && n !== void 0 && (L = y(), z && (hl(e), z(L)));
  var S;
  if (S = () => {
    var w = (
      /** @type {V} */
      r[e]
    );
    return w === void 0 ? y() : (p = !0, w);
  }, (a & Gi) === 0)
    return S;
  if (z) {
    var k = r.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, A) {
        return arguments.length > 0 ? ((!A || k || N) && z(A ? S() : w), w) : S();
      })
    );
  }
  var b = !1, q = ((a & Vi) !== 0 ? qa : Ro)(() => (b = !1, S()));
  We && (q.label = e), i && t(q);
  var Z = (
    /** @type {Effect} */
    dt
  );
  return (
    /** @type {() => V} */
    (function(w, A) {
      if (arguments.length > 0) {
        const W = A ? t(q) : i ? st(w) : w;
        return K(q, W), b = !0, v !== void 0 && (v = W), w;
      }
      return qr && b || (Z.f & Rr) !== 0 ? q.v : t(q);
    })
  );
}
function re(...r) {
  return r.filter(Boolean).join(" ");
}
const pt = (r, e) => {
  let a = { enabled: !0, strength: 0.1, scale: 1.02, ...e };
  function n(d) {
    if (!a.enabled) return;
    const v = r.getBoundingClientRect(), p = (d.clientX - v.left) / v.width - 0.5, y = (d.clientY - v.top) / v.height - 0.5;
    r.style.transform = `translate(${p * (a.strength ?? 0.1) * 20}px, ${y * (a.strength ?? 0.1) * 20}px) scale(${a.scale ?? 1.02})`;
  }
  function i() {
    r.style.transform = "";
  }
  return r.addEventListener("mousemove", n), r.addEventListener("mouseleave", i), {
    update(d) {
      a = { ...a, ...d };
    },
    destroy() {
      r.removeEventListener("mousemove", n), r.removeEventListener("mouseleave", i);
    }
  };
}, zt = (r, e) => {
  let a = { enabled: !0, intensity: 0.05, speed: 200, ...e };
  function n() {
    a.enabled && (r.style.transition = `transform ${a.duration ?? 200}ms ease`, r.style.transform = `scale(${a.scale ?? 1.02})`, a.borderRadius && (r.style.borderRadius = a.borderRadius));
  }
  function i() {
    r.style.transform = "";
  }
  return r.addEventListener("mouseenter", n), r.addEventListener("mouseleave", i), {
    update(d) {
      a = { ...a, ...d };
    },
    destroy() {
      r.removeEventListener("mouseenter", n), r.removeEventListener("mouseleave", i);
    }
  };
}, Tt = (r, e) => {
  let a = { duration: 200, ...e };
  const n = () => {
    const i = a.blur === "xl" ? 16 : a.blur === "lg" ? 12 : a.blur === "md" ? 8 : a.blur === "sm" ? 4 : a.amount ?? 0, d = a.opacity === "strong" ? 0.3 : a.opacity === "medium" ? 0.2 : a.opacity === "light" ? 0.1 : 0.15;
    r.style.transition = `filter ${a.duration}ms ease, transform ${a.duration}ms ease, background-color ${a.duration}ms ease`, r.style.filter = `blur(${i}px)`, r.style.transform = a.scale ? `scale(${a.scale})` : r.style.transform, r.style.backgroundColor = `rgba(255,255,255,${d})`;
  };
  return n(), {
    update(i) {
      a = { ...a, ...i }, n();
    },
    destroy() {
      r.style.filter = "", r.style.backgroundColor = "";
    }
  };
};
function Wt(r, e = {}) {
  const { duration: a = 150, delay: n = 0, scale: i = 0.98 } = e;
  return {
    duration: a,
    delay: n,
    css: (d) => `transform: scale(${i + (1 - i) * d});`
  };
}
function _t(r, e = {}) {
  const { duration: a = 150, delay: n = 0, direction: i = "up", distance: d = 10, opacity: v = "light" } = e, p = i === "up" ? d : i === "down" ? -d : 0, y = v === "strong" ? 1 : v === "medium" ? 0.9 : v === "subtle" ? 0.8 : 0.7;
  return {
    duration: a,
    delay: n,
    css: (z) => `transform: translateY(${(1 - z) * p}px); opacity: ${z * y};`
  };
}
const jt = (r, e) => {
  let a = 0, n = { enabled: !0, intensity: 0.02, speed: 3e3, ...e };
  const i = (d) => {
    if (!n.enabled) {
      a = requestAnimationFrame(i);
      return;
    }
    const v = 1 + Math.sin(d / (n.speed ?? 3e3) * Math.PI * 2) * (n.intensity ?? 0.02);
    r.style.transform = `scale(${v})`, a = requestAnimationFrame(i);
  };
  return a = requestAnimationFrame(i), {
    update(d) {
      n = { ...n, ...d };
    },
    destroy() {
      cancelAnimationFrame(a), r.style.transform = "";
    }
  };
}, Pa = zt, Ds = /* @__PURE__ */ new Map();
function $t(r, e) {
  if (typeof window < "u" && process.env.NODE_ENV === "development") {
    const a = {
      name: r,
      size: e,
      timestamp: Date.now()
    };
    Ds.set(r, a), console.log(`📦 Bundle: ${r} (${e})`);
  }
}
var Rs = (r, e, a) => e(t(a).id), js = (r, e, a) => e(r, t(a).id), Ns = /* @__PURE__ */ c('<p class="svelte-1neysev">No content available</p>'), qs = /* @__PURE__ */ c('<div role="region"><!></div>'), Os = /* @__PURE__ */ c('<div><button type="button"><span class="text-left svelte-1neysev"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-1neysev"></path></svg></button> <!></div>'), Fs = /* @__PURE__ */ c("<div></div>");
const Bs = {
  hash: "svelte-1neysev",
  code: `button[aria-expanded].svelte-1neysev {will-change:transform;}svg.svelte-1neysev {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-1neysev {transition:none;
			animation: none;will-change:auto;}
	}`
};
function Zp(r, e) {
  Ue(e, !0), $e(r, Bs);
  const a = s(e, "items", 19, () => []), n = s(e, "multiple", 3, !1), i = s(e, "collapsible", 3, !0), d = s(e, "variant", 3, "glass"), v = s(e, "size", 3, "md"), p = s(e, "blur", 3, "md"), y = s(e, "animate", 3, !0), z = s(e, "reduceMotion", 3, !1), g = s(e, "defaultOpen", 19, () => []), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  let S = /* @__PURE__ */ _e(st(new Set(g())));
  const k = `accordion-${Math.random().toString(36).substr(2, 9)}`, b = {
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
  }, Z = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };
  function w(O) {
    if (a().find((C) => C.id === O)?.disabled) return;
    const P = t(S).has(O);
    n() ? P ? (i() || t(S).size > 1) && t(S).delete(O) : t(S).add(O) : P && i() ? t(S).clear() : (t(S).clear(), t(S).add(O)), K(S, new Set(t(S)), !0), e.onValueChange?.(Array.from(t(S)));
  }
  function A(O, R) {
    if (!a().find((C) => C.id === R)?.disabled)
      switch (O.key) {
        case "Enter":
        case " ":
          O.preventDefault(), w(R);
          break;
        case "ArrowDown":
          O.preventDefault(), W(R);
          break;
        case "ArrowUp":
          O.preventDefault(), H(R);
          break;
        case "Home":
          O.preventDefault(), j();
          break;
        case "End":
          O.preventDefault(), G();
          break;
      }
  }
  function W(O) {
    const R = a().filter((m) => !m.disabled), C = (R.findIndex((m) => m.id === O) + 1) % R.length, M = R[C];
    B(M.id);
  }
  function H(O) {
    const R = a().filter((m) => !m.disabled), P = R.findIndex((m) => m.id === O), C = P === 0 ? R.length - 1 : P - 1, M = R[C];
    B(M.id);
  }
  function j() {
    const O = a().find((R) => !R.disabled);
    O && B(O.id);
  }
  function G() {
    const O = a().filter((P) => !P.disabled), R = O[O.length - 1];
    R && B(R.id);
  }
  function B(O) {
    document.querySelector(`[data-accordion-header="${O}"]`)?.focus();
  }
  bt(() => {
    $t("Accordion", "medium");
  });
  var I = Fs();
  Je(I, (O) => ({ class: O, ...N }), [() => re("w-full space-y-2", L())], void 0, "svelte-1neysev"), Xe(I, 23, a, (O, R) => O.id ?? R, (O, R, P) => {
    const C = /* @__PURE__ */ we(() => t(S).has(t(R).id)), M = /* @__PURE__ */ we(() => t(P) === 0), m = /* @__PURE__ */ we(() => t(P) === a().length - 1), _ = /* @__PURE__ */ we(() => `${k}-header-${t(R).id}`), F = /* @__PURE__ */ we(() => `${k}-content-${t(R).id}`);
    var Y = Os(), T = l(Y);
    T.__click = [Rs, w, R], T.__keydown = [js, A, R];
    var u = l(T), h = l(u), te = f(u, 2);
    Ie(T, (de, ee) => Tt?.(de, ee), () => y() && !z() && t(C) ? { blur: p(), opacity: "subtle" } : void 0);
    var ie = f(T, 2);
    {
      var ce = (de) => {
        var ee = qs(), V = l(ee);
        {
          var ae = (Q) => {
            var $ = Ce(), J = ge($);
            lt(J, () => t(R).content), o(Q, $);
          }, E = (Q) => {
            var $ = Ce(), J = ge($);
            {
              var se = (ne) => {
                var ue = Ce(), ve = ge(ue);
                lt(ve, () => e.children, () => t(R)), o(ne, ue);
              }, X = (ne) => {
                var ue = Ns();
                o(ne, ue);
              };
              x(
                J,
                (ne) => {
                  e.children ? ne(se) : ne(X, !1);
                },
                !0
              );
            }
            o(Q, $);
          };
          x(V, (Q) => {
            t(R).content ? Q(ae) : Q(E, !1);
          });
        }
        D(
          (Q) => {
            ye(ee, "id", t(F)), ye(ee, "aria-labelledby", t(_)), U(ee, 1, Q, "svelte-1neysev");
          },
          [
            () => oe(re("border-t border-white/10 transition-all duration-200", b[v()].content, q[d()].content))
          ]
        ), tt(1, ee, () => _t, () => ({
          direction: "down",
          distance: 10,
          duration: y() && !z() ? 200 : 0
        })), tt(2, ee, () => _t, () => ({
          direction: "up",
          distance: 10,
          duration: y() && !z() ? 150 : 0
        })), o(de, ee);
      };
      x(ie, (de) => {
        t(C) && de(ce);
      });
    }
    D(
      (de, ee, V) => {
        U(Y, 1, de, "svelte-1neysev"), ye(T, "id", t(_)), U(T, 1, ee, "svelte-1neysev"), ye(T, "aria-expanded", t(C)), ye(T, "aria-controls", t(F)), ye(T, "aria-disabled", t(R).disabled), ye(T, "data-accordion-header", t(R).id), T.disabled = t(R).disabled, le(h, t(R).title), U(te, 0, V, "svelte-1neysev");
      },
      [
        () => oe(re("overflow-hidden transition-all duration-200", q[d()].container, d() === "glass" && Z[p()], t(M) && "rounded-t-brand-lg", t(m) && "rounded-b-brand-lg", !t(M) && !t(m) && t(P) > 0 && "rounded-none border-t-0")),
        () => oe(re("w-full flex items-center justify-between transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium cursor-pointer", b[v()].header, q[d()].header, t(R).disabled && "opacity-50 cursor-not-allowed")),
        () => oe(re("transition-transform duration-200 flex-shrink-0 ml-2", b[v()].icon, t(C) && "rotate-180"))
      ]
    ), o(O, Y);
  }), o(r, I), Ye();
}
gt(["click", "keydown"]);
const Hs = (r, e, a) => {
  K(e, !1), a.onclose?.();
};
var Vs = /* @__PURE__ */ c("<div><!></div>"), Gs = /* @__PURE__ */ c("<h3> </h3>"), Us = /* @__PURE__ */ c("<p> </p>"), Ys = /* @__PURE__ */ c('<button aria-label="Close alert"><!></button>'), Ws = /* @__PURE__ */ c('<div><div class="flex items-start gap-3 svelte-yqts08"><!> <div class="flex-1 min-w-0 svelte-yqts08"><!> <!></div> <!></div></div>');
const Ks = {
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
function Qp(r, e) {
  Ue(e, !0), $e(r, Ks);
  const a = s(e, "variant", 3, "info"), n = s(e, "closable", 3, !1), i = s(e, "animated", 3, !0), d = s(e, "glow", 3, !0), v = s(e, "jelly", 3, !0), p = s(e, "icon", 3, !0), y = s(e, "position", 3, "static"), z = s(e, "placement", 3, "top-right"), g = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
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
  let N = /* @__PURE__ */ _e(!0);
  const S = {
    success: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400/40",
      text: "text-green-300",
      icon: Ai,
      glow: "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
    },
    error: {
      bg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      icon: Mi,
      glow: "shadow-[0_0_30px_rgba(248,113,113,0.5)]"
    },
    warning: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      icon: Bn,
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.5)]"
    },
    info: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/40",
      text: "text-blue-300",
      icon: Ei,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    terminal: {
      bg: "bg-gray-900/90",
      border: "border-green-400/40",
      text: "text-green-400",
      icon: Bn,
      glow: "shadow-[0_0_20px_rgba(74,222,128,0.6)]"
    }
  }, k = {
    top: "top-4 left-1/2 -translate-x-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  }, b = S[a()], q = b.icon;
  var Z = Ce(), w = ge(Z);
  {
    var A = (W) => {
      var H = Ws();
      Je(
        H,
        (_) => ({ class: _, ...L }),
        [
          () => re("backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300", b.bg, b.border, d() && b.glow, y() === "fixed" && "fixed z-50", y() === "fixed" && k[z()], i() && "transform-gpu will-change-transform", g())
        ],
        void 0,
        "svelte-yqts08"
      );
      var j = l(H), G = l(j);
      {
        var B = (_) => {
          var F = Vs(), Y = l(F);
          q(Y, { size: 20 }), D((T) => U(F, 1, T, "svelte-yqts08"), [
            () => oe(re("flex-shrink-0 mt-0.5", b.text, i() && "animate-pulse"))
          ]), o(_, F);
        };
        x(G, (_) => {
          p() && _(B);
        });
      }
      var I = f(G, 2), O = l(I);
      {
        var R = (_) => {
          var F = Gs(), Y = l(F);
          D(
            (T) => {
              U(F, 1, T, "svelte-yqts08"), le(Y, e.title);
            },
            [
              () => oe(re("font-semibold text-base", b.text))
            ]
          ), o(_, F);
        };
        x(O, (_) => {
          e.title && _(R);
        });
      }
      var P = f(O, 2);
      {
        var C = (_) => {
          var F = Us(), Y = l(F);
          D(
            (T) => {
              U(F, 1, T, "svelte-yqts08"), le(Y, e.description);
            },
            [
              () => oe(re("text-sm mt-1 opacity-80", b.text))
            ]
          ), o(_, F);
        };
        x(P, (_) => {
          e.description && _(C);
        });
      }
      var M = f(I, 2);
      {
        var m = (_) => {
          var F = Ys();
          F.__click = [Hs, N, e];
          var Y = l(F);
          ya(Y, { size: 16 }), D((T) => U(F, 1, T, "svelte-yqts08"), [
            () => oe(re("flex-shrink-0 p-1 rounded-lg transition-all duration-200", "hover:bg-white/10 hover:scale-110", b.text, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]), o(_, F);
        };
        x(M, (_) => {
          n() && _(m);
        });
      }
      Ie(H, (_, F) => jellyHover?.(_, F), () => ({
        enabled: v(),
        scale: 1.02,
        duration: 200,
        borderRadius: "16px"
      })), tt(3, H, () => _t, () => ({ duration: i() ? 300 : 0 })), o(W, H);
    };
    x(w, (W) => {
      t(N) && W(A);
    });
  }
  o(r, Z), Ye();
}
gt(["click"]);
var Xs = /* @__PURE__ */ c("<button><!></button>"), Zs = /* @__PURE__ */ c("<span><!></span>"), Qs = /* @__PURE__ */ c("<button><!></button>"), Js = /* @__PURE__ */ c("<span><!></span>");
const $s = {
  hash: "svelte-17ytdye",
  code: `button.svelte-17ytdye {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {button.svelte-17ytdye,
		span.svelte-17ytdye {transition:none;
			animation: none;}
	}`
};
function ln(r, e) {
  Ue(e, !0), $e(r, $s);
  const a = s(e, "variant", 3, "default"), n = s(e, "size", 3, "md"), i = s(e, "glass", 3, !0), d = s(e, "blur", 3, "md"), v = s(e, "interactive", 3, !1), p = s(e, "animate", 3, !0), y = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
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
  }, S = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, k = "inline-flex items-center justify-center rounded-full border transition-all duration-200", b = i() ? `glass-subtle ${S[d()]}` : "", q = v() ? "cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent" : "", Z = re(k, L[a()], N[n()], b, q, z());
  function w(G) {
    v() && (G.key === "Enter" || G.key === " ") && (G.preventDefault(), G.currentTarget?.dispatchEvent(new CustomEvent("click", { bubbles: !0 })));
  }
  bt(() => {
    $t("Badge", "small");
  });
  var A = Ce(), W = ge(A);
  {
    var H = (G) => {
      var B = Ce(), I = ge(B);
      {
        var O = (P) => {
          var C = Xs();
          Je(
            C,
            () => ({
              class: Z,
              type: "button",
              "aria-label": g["aria-label"] || `${a()} badge`,
              onkeydown: w,
              ...g
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var M = l(C);
          {
            var m = (_) => {
              var F = Ce(), Y = ge(F);
              lt(Y, () => e.children), o(_, F);
            };
            x(M, (_) => {
              e.children && _(m);
            });
          }
          Ie(C, (_, F) => Tt?.(_, F), () => ({ blur: d(), opacity: "subtle" })), o(P, C);
        }, R = (P) => {
          var C = Zs();
          Je(
            C,
            () => ({
              class: Z,
              role: "status",
              "aria-label": g["aria-label"] || `${a()} badge`,
              ...g
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var M = l(C);
          {
            var m = (_) => {
              var F = Ce(), Y = ge(F);
              lt(Y, () => e.children), o(_, F);
            };
            x(M, (_) => {
              e.children && _(m);
            });
          }
          tt(1, C, () => _t, () => ({ direction: "up", distance: 10 })), o(P, C);
        };
        x(I, (P) => {
          v() ? P(O) : P(R, !1);
        });
      }
      o(G, B);
    }, j = (G) => {
      var B = Ce(), I = ge(B);
      {
        var O = (P) => {
          var C = Qs();
          Je(
            C,
            () => ({
              class: Z,
              type: "button",
              "aria-label": g["aria-label"] || `${a()} badge`,
              onkeydown: w,
              ...g
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var M = l(C);
          {
            var m = (_) => {
              var F = Ce(), Y = ge(F);
              lt(Y, () => e.children), o(_, F);
            };
            x(M, (_) => {
              e.children && _(m);
            });
          }
          o(P, C);
        }, R = (P) => {
          var C = Js();
          Je(
            C,
            () => ({
              class: Z,
              role: "status",
              "aria-label": g["aria-label"] || `${a()} badge`,
              ...g
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var M = l(C);
          {
            var m = (_) => {
              var F = Ce(), Y = ge(F);
              lt(Y, () => e.children), o(_, F);
            };
            x(M, (_) => {
              e.children && _(m);
            });
          }
          o(P, C);
        };
        x(
          I,
          (P) => {
            v() ? P(O) : P(R, !1);
          },
          !0
        );
      }
      o(G, B);
    };
    x(W, (G) => {
      p() && !y() ? G(H) : G(j, !1);
    });
  }
  o(r, A), Ye();
}
const ba = typeof window < "u";
function hn(r) {
  if (!ba || typeof localStorage > "u") return null;
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}
function aa(r, e) {
  if (!(!ba || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, e);
    } catch {
    }
}
function mi(r) {
  if (!(!ba || typeof localStorage > "u"))
    try {
      localStorage.removeItem(r);
    } catch {
    }
}
const da = {
  terminal: {
    name: "terminal",
    displayName: "Terminal",
    description: "Hacker aesthetic with green matrix colors and sharp edges",
    colors: {
      primary: "#00ff41",
      secondary: "#00d4ff",
      accent: "#0066ff",
      background: "#000000",
      surface: "#111111",
      text: "#00ff41",
      success: "#00ff41",
      warning: "#ffaa00",
      error: "#ff0040",
      info: "#00d4ff"
    },
    highContrastColors: {
      primary: "#00ff88",
      secondary: "#00ffff",
      accent: "#0088ff",
      background: "#000000",
      surface: "#000000",
      text: "#ffffff",
      success: "#00ff88",
      warning: "#ffdd00",
      error: "#ff0066",
      info: "#00ffff"
    }
  },
  bubbleTea: {
    name: "bubbleTea",
    displayName: "Bubble Tea",
    description: "Modern TUI with colorful gradients and rounded corners",
    colors: {
      primary: "#8b5cf6",
      secondary: "#f472b6",
      accent: "#06b6d4",
      background: "#1e1b4b",
      surface: "#312e81",
      text: "#c7d2fe",
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#06b6d4"
    },
    highContrastColors: {
      primary: "#a855f7",
      secondary: "#f59e0b",
      accent: "#0ea5e9",
      background: "#0f0a19",
      surface: "#1e1b4b",
      text: "#ffffff",
      success: "#22c55e",
      warning: "#fbbf24",
      error: "#f87171",
      info: "#38bdf8"
    }
  }
};
function pn() {
  if (!ba || typeof window > "u" || !window.matchMedia)
    return "terminal";
  try {
    const r = window.matchMedia("(prefers-color-scheme: dark)"), e = window.matchMedia("(prefers-color-scheme: light)");
    return r.matches ? "terminal" : e.matches ? "bubbleTea" : "terminal";
  } catch {
    return "terminal";
  }
}
function so(r) {
  if (!ba || typeof window > "u" || !window.matchMedia)
    return () => {
    };
  try {
    const e = window.matchMedia("(prefers-color-scheme: dark)"), a = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
      r(pn());
    };
    return e.addEventListener ? (e.addEventListener("change", n), a.addEventListener("change", n), () => {
      e.removeEventListener("change", n), a.removeEventListener("change", n);
    }) : (e.addListener(n), a.addListener(n), () => {
      e.removeListener(n), a.removeListener(n);
    });
  } catch {
    return () => {
    };
  }
}
function Cr(r) {
  return r === "auto";
}
function ed(r, e) {
  if (Cr(r)) {
    const n = da[e];
    return {
      displayName: `Auto (${n.displayName})`,
      description: `Automatically follows system preference. Currently: ${n.displayName}`,
      isAuto: !0
    };
  }
  const a = da[r];
  return {
    displayName: a.displayName,
    description: a.description,
    isAuto: !1
  };
}
const td = () => {
  const r = hn("ahb-theme") || "auto", { subscribe: e, set: a, update: n } = Ua(
    Cr(r) ? pn() : r
  );
  let i = null;
  const d = (v) => {
    const p = Cr(v) ? pn() : v;
    a(p), aa("ahb-theme", v), Cr(v) ? i || (i = so((y) => {
      a(y);
    })) : i && (i(), i = null);
  };
  return Cr(r) && (i = so((v) => {
    a(v);
  })), {
    subscribe: e,
    getUserTheme: () => hn("ahb-theme") || "auto",
    set: (v) => d(v),
    toggle: () => {
      const p = Ya({ subscribe: e }) === "terminal" ? "bubbleTea" : "terminal";
      d(p);
    },
    setTerminal: () => d("terminal"),
    setBubbleTea: () => d("bubbleTea"),
    setAuto: () => d("auto"),
    reset: () => {
      mi("ahb-theme"), d("auto");
    }
  };
}, cr = td(), rd = () => {
  const r = hn("ahb-contrast-mode") || "normal", { subscribe: e, set: a } = Ua(r);
  return {
    subscribe: e,
    set: (n) => {
      a(n), aa("ahb-contrast-mode", n);
    },
    toggle: () => {
      const i = Ya({ subscribe: e }) === "normal" ? "high" : "normal";
      a(i), aa("ahb-contrast-mode", i);
    },
    setNormal: () => {
      a("normal"), aa("ahb-contrast-mode", "normal");
    },
    setHigh: () => {
      a("high"), aa("ahb-contrast-mode", "high");
    },
    reset: () => {
      mi("ahb-contrast-mode"), a("normal");
    }
  };
}, ad = rd(), hi = zs(
  [cr, ad],
  ([r, e]) => {
    const a = da[r], n = cr.getUserTheme(), i = e === "high" ? a.highContrastColors : a.colors;
    return {
      ...a,
      currentColors: i,
      userTheme: n,
      resolvedTheme: r
    };
  }
);
function Wa() {
  return Ya(hi)?.resolvedTheme || "terminal";
}
function nd(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Wa()) {
    case "terminal":
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
    case "bubbleTea":
      return "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono";
    default:
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
  }
}
function od(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Wa()) {
    case "terminal":
      return "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20";
    case "bubbleTea":
      return "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono";
    default:
      return "glass-subtle border border-white/20 shadow-lg hover:shadow-xl";
  }
}
function pi(r, e) {
  return r !== "auto" && r !== "theme" ? "" : Wa() === "bubbleTea" ? e && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[e] || "rounded-bubble-tea" : "";
}
function xi() {
  switch (Wa()) {
    case "terminal":
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    case "bubbleTea":
      return "focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    default:
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  }
}
var id = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), ld = /* @__PURE__ */ c("<button><!> <!></button>"), sd = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), dd = /* @__PURE__ */ c("<button><!> <!></button>");
const cd = {
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
function rr(r, e) {
  Ue(e, !0), $e(r, cd);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), i = s(e, "loading", 3, !1), d = s(e, "icon", 3, !1), v = s(e, "animate", 3, !0), p = s(e, "jelly", 3, !0), y = s(e, "liquid", 3, !1), z = s(e, "class", 3, ""), g = s(e, "disabled", 3, !1), L = /* @__PURE__ */ ct(e, [
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
  ]), N = /* @__PURE__ */ we(() => () => a() === "auto" || a() === "theme" ? nd(a()) : S[a()] || S.default), S = {
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
  }, b = /* @__PURE__ */ we(() => () => a() === "auto" || a() === "theme" ? pi(a(), n()) : a() === "bubbleTea" && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[n()] || ""), q = /* @__PURE__ */ we(() => () => a() === "auto" || a() === "theme" ? xi() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"), Z = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none will-change-transform", w = d() ? "aspect-square !p-0" : "", A = /* @__PURE__ */ we(() => () => re(Z, t(N)(), k[n()], t(b)(), t(q)(), w, i() && "cursor-wait", z()));
  var W = Ce(), H = ge(W);
  {
    var j = (B) => {
      var I = ld();
      Je(
        I,
        (M) => ({
          class: M,
          disabled: g(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": i(),
          ...L
        }),
        [() => t(A)()],
        void 0,
        "svelte-16dveyh"
      );
      var O = l(I);
      {
        var R = (M) => {
          var m = id();
          o(M, m);
        };
        x(O, (M) => {
          i() && M(R);
        });
      }
      var P = f(O, 2);
      {
        var C = (M) => {
          var m = Ce(), _ = ge(m);
          lt(_, () => e.children), o(M, m);
        };
        x(P, (M) => {
          e.children && M(C);
        });
      }
      Ie(I, (M, m) => zt?.(M, m), () => ({
        enabled: !g() && !i() && p(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Ie(I, (M, m) => Pa?.(M, m), () => ({ enabled: !g() && !i() && y() })), Ie(I, (M, m) => pt?.(M, m), () => ({
        enabled: !g() && !i() && !p() && !y(),
        strength: 0.15,
        scale: 1.02
      })), tt(1, I, () => Wt, () => ({
        duration: 200,
        bounce: a().includes("glass") || a() === "liquid"
      })), o(B, I);
    }, G = (B) => {
      var I = dd();
      Je(
        I,
        (M) => ({
          class: M,
          disabled: g(),
          "aria-label": e["aria-label"],
          "aria-describedby": e["aria-describedby"],
          "aria-busy": i(),
          ...L
        }),
        [() => t(A)()],
        void 0,
        "svelte-16dveyh"
      );
      var O = l(I);
      {
        var R = (M) => {
          var m = sd();
          o(M, m);
        };
        x(O, (M) => {
          i() && M(R);
        });
      }
      var P = f(O, 2);
      {
        var C = (M) => {
          var m = Ce(), _ = ge(m);
          lt(_, () => e.children), o(M, m);
        };
        x(P, (M) => {
          e.children && M(C);
        });
      }
      Ie(I, (M, m) => zt?.(M, m), () => ({
        enabled: !g() && !i() && p(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : a() === "bubbleTea" ? 1.06 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Ie(I, (M, m) => Pa?.(M, m), () => ({ enabled: !g() && !i() && y() })), Ie(I, (M, m) => pt?.(M, m), () => ({
        enabled: !g() && !i() && !p() && !y(),
        strength: 0.15,
        scale: 1.02
      })), o(B, I);
    };
    x(H, (B) => {
      v() ? B(j) : B(G, !1);
    });
  }
  o(r, W), Ye();
}
var vd = /* @__PURE__ */ c("<div><!></div>"), ud = /* @__PURE__ */ c("<div><!></div>"), fd = /* @__PURE__ */ c("<div><!></div>"), bd = /* @__PURE__ */ c("<div><!></div>");
const gd = {
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
function Jp(r, e) {
  Ue(e, !0), $e(r, gd);
  const a = s(e, "variant", 3, "auto"), n = s(e, "blur", 3, "md"), i = s(e, "interactive", 3, !1), d = s(e, "animate", 3, !0), v = s(e, "jelly", 3, !0), p = s(e, "liquid", 3, !1), y = s(e, "breathing", 3, !1), z = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
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
  ]), L = /* @__PURE__ */ we(() => () => a() === "auto" || a() === "theme" ? od(a()) : N[a()] || N.default), N = {
    default: "glass-subtle border border-white/20 shadow-lg hover:shadow-xl",
    glass: "glass-medium border border-white/30 shadow-xl hover:shadow-2xl",
    "glass-subtle": "glass-subtle border border-white/10 shadow-md hover:shadow-lg",
    "glass-heavy": "glass-heavy border border-white/40 shadow-2xl hover:shadow-3xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20",
    liquid: "glass-medium border border-terminal-cyan/30 shadow-2xl shadow-terminal-cyan/10 hover:border-terminal-cyan/50 backdrop-blur-xl",
    jelly: "glass-subtle border border-terminal-purple/20 shadow-lg hover:shadow-xl hover:border-terminal-purple/40",
    bubbleTea: "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono"
  }, S = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, k = /* @__PURE__ */ we(() => () => a() === "auto" || a() === "theme" ? pi(a()) || "rounded-2xl" : a() === "bubbleTea" ? "rounded-bubble-tea-lg" : "rounded-2xl"), b = /* @__PURE__ */ we(() => () => i() ? a() === "auto" || a() === "theme" ? xi() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" : ""), q = "p-6 transition-all duration-300 will-change-transform", Z = i() ? "cursor-pointer" : "", w = /* @__PURE__ */ we(() => () => re(q, t(L)(), t(k)(), typeof a() == "string" && a().includes("glass") && S[n()], Z, t(b)(), z()));
  var A = Ce(), W = ge(A);
  {
    var H = (G) => {
      var B = Ce(), I = ge(B);
      {
        var O = (P) => {
          var C = vd(), M = (F) => {
            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), F.currentTarget.click());
          };
          Je(
            C,
            (F) => ({
              class: F,
              role: "button",
              tabindex: "0",
              onkeydown: M,
              ...g
            }),
            [() => t(w)()],
            void 0,
            "svelte-j9s7zz"
          );
          var m = l(C);
          {
            var _ = (F) => {
              var Y = Ce(), T = ge(Y);
              lt(T, () => e.children), o(F, Y);
            };
            x(m, (F) => {
              e.children && F(_);
            });
          }
          Ie(C, (F, Y) => zt?.(F, Y), () => ({
            enabled: v(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : a() === "bubbleTea" ? 1.04 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Ie(C, (F, Y) => Pa?.(F, Y), () => ({ enabled: p(), liquidIntensity: 1, morphStrength: 0.3 })), Ie(C, (F, Y) => jt?.(F, Y), () => ({ enabled: y(), intensity: 0.015, speed: 3500 })), Ie(C, (F, Y) => pt?.(F, Y), () => ({ enabled: !v() && !p(), strength: 0.2, scale: 1.02 })), tt(1, C, () => Tt, () => ({ blur: n(), opacity: "medium" })), o(P, C);
        }, R = (P) => {
          var C = ud();
          Je(C, (_) => ({ class: _, ...g }), [() => t(w)()], void 0, "svelte-j9s7zz");
          var M = l(C);
          {
            var m = (_) => {
              var F = Ce(), Y = ge(F);
              lt(Y, () => e.children), o(_, F);
            };
            x(M, (_) => {
              e.children && _(m);
            });
          }
          Ie(C, (_, F) => zt?.(_, F), () => ({
            enabled: v() && i(),
            duration: 300,
            scale: 1.02,
            borderRadius: "var(--radius-xl)",
            responsiveness: "subtle"
          })), Ie(C, (_, F) => jt?.(_, F), () => ({ enabled: y(), intensity: 0.01, speed: 4e3 })), tt(1, C, () => Tt, () => ({ blur: n(), opacity: "subtle" })), o(P, C);
        };
        x(I, (P) => {
          i() ? P(O) : P(R, !1);
        });
      }
      o(G, B);
    }, j = (G) => {
      var B = Ce(), I = ge(B);
      {
        var O = (P) => {
          var C = fd(), M = (F) => {
            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), F.currentTarget.click());
          };
          Je(
            C,
            (F) => ({
              class: F,
              role: "button",
              tabindex: "0",
              onkeydown: M,
              ...g
            }),
            [() => t(w)()],
            void 0,
            "svelte-j9s7zz"
          );
          var m = l(C);
          {
            var _ = (F) => {
              var Y = Ce(), T = ge(Y);
              lt(T, () => e.children), o(F, Y);
            };
            x(m, (F) => {
              e.children && F(_);
            });
          }
          Ie(C, (F, Y) => zt?.(F, Y), () => ({
            enabled: v(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Ie(C, (F, Y) => Pa?.(F, Y), () => ({ enabled: p(), liquidIntensity: 1, morphStrength: 0.3 })), Ie(C, (F, Y) => jt?.(F, Y), () => ({ enabled: y(), intensity: 0.015, speed: 3500 })), Ie(C, (F, Y) => pt?.(F, Y), () => ({ enabled: !v() && !p(), strength: 0.2, scale: 1.02 })), o(P, C);
        }, R = (P) => {
          var C = bd();
          Je(C, (_) => ({ class: _, ...g }), [() => t(w)()], void 0, "svelte-j9s7zz");
          var M = l(C);
          {
            var m = (_) => {
              var F = Ce(), Y = ge(F);
              lt(Y, () => e.children), o(_, F);
            };
            x(M, (_) => {
              e.children && _(m);
            });
          }
          Ie(C, (_, F) => jt?.(_, F), () => ({ enabled: y(), intensity: 0.01, speed: 4e3 })), o(P, C);
        };
        x(
          I,
          (P) => {
            i() ? P(O) : P(R, !1);
          },
          !0
        );
      }
      o(G, B);
    };
    x(W, (G) => {
      d() ? G(H) : G(j, !1);
    });
  }
  o(r, A), Ye();
}
var md = /* @__PURE__ */ c('<span class="text-red-400 ml-1 svelte-cfvntl">*</span>'), hd = /* @__PURE__ */ c("<label> <!></label>"), pd = /* @__PURE__ */ c("<p> </p>"), xd = /* @__PURE__ */ c('<p class="text-xs text-red-400 mt-1 svelte-cfvntl" role="alert"> </p>'), _d = /* @__PURE__ */ c('<div class="flex-1 min-w-0 svelte-cfvntl"><!> <!> <!></div>'), wd = /* @__PURE__ */ c('<div class="flex items-start gap-3 svelte-cfvntl"><div><input/> <div class="absolute inset-0 flex items-center justify-center svelte-cfvntl"><!></div></div> <!></div>');
const yd = {
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
function $p(r, e) {
  Ue(e, !0), $e(r, yd);
  let a = s(e, "checked", 7, !1), n = s(e, "indeterminate", 7, !1), i = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), v = s(e, "variant", 3, "glass"), p = s(e, "blur", 3, "md"), y = s(e, "animate", 3, !0), z = s(e, "reduceMotion", 3, !1), g = s(e, "required", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  ]), S;
  const k = `checkbox-${Math.random().toString(36).substr(2, 9)}`, b = e.description ? `${k}-description` : void 0, q = e.error ? `${k}-error` : void 0;
  bt(() => {
    S && (S.indeterminate = n());
  });
  const Z = {
    sm: { container: "w-4 h-4", icon: "w-3 h-3", text: "text-sm" },
    md: { container: "w-5 h-5", icon: "w-4 h-4", text: "text-base" },
    lg: { container: "w-6 h-6", icon: "w-5 h-5", text: "text-lg" }
  }, w = {
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
  }, A = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, W = re(
    "relative inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
    Z[d()].container,
    n() ? w[v()].containerIndeterminate : a() ? w[v()].containerChecked : w[v()].container,
    v() === "glass" && A[p()],
    i() && "opacity-50 cursor-not-allowed",
    !i() && "cursor-pointer hover:scale-105",
    e.error && "border-red-400/60 bg-red-500/10",
    L()
  ), H = re("transition-all duration-200", Z[d()].icon, n() ? w[v()].iconIndeterminate : a() ? w[v()].iconChecked : w[v()].icon), j = re("font-medium text-white cursor-pointer select-none", Z[d()].text, i() && "opacity-50", e.error && "text-red-300"), G = re("text-xs text-white/70 mt-1", i() && "opacity-50", e.error && "text-red-300/70");
  function B(T) {
    if (i()) return;
    const h = T.target.checked;
    a(h), n(!1), e.onCheckedChange?.(h);
  }
  function I(T) {
    i() || T.key === "Enter" && (T.preventDefault(), S.click());
  }
  bt(() => {
    $t("Checkbox", "small");
  });
  var O = wd(), R = l(O), P = l(R);
  Je(
    P,
    (T) => ({
      type: "checkbox",
      id: k,
      disabled: i(),
      required: g(),
      class: "sr-only",
      "aria-label": e["aria-label"] || e.label,
      "aria-describedby": T,
      "aria-invalid": !!e.error,
      onchange: B,
      onkeydown: I,
      ...N
    }),
    [
      () => [b, q].filter(Boolean).join(" ") || void 0
    ],
    void 0,
    "svelte-cfvntl"
  ), rt(P, (T) => S = T, () => S), fr(() => Ms(P, a)), Ie(P, (T, u) => Wt?.(T, u), () => y() && !z() ? { scale: 0.9, duration: 150 } : void 0);
  var C = f(P, 2), M = l(C);
  {
    var m = (T) => {
      mo(T, {
        get class() {
          return H;
        },
        strokeWidth: 2.5
      });
    }, _ = (T) => {
      var u = Ce(), h = ge(u);
      {
        var te = (ie) => {
          sn(ie, {
            get class() {
              return H;
            },
            strokeWidth: 2.5
          });
        };
        x(
          h,
          (ie) => {
            a() && ie(te);
          },
          !0
        );
      }
      o(T, u);
    };
    x(M, (T) => {
      n() ? T(m) : T(_, !1);
    });
  }
  var F = f(R, 2);
  {
    var Y = (T) => {
      var u = _d(), h = l(u);
      {
        var te = (V) => {
          var ae = hd(), E = l(ae), Q = f(E);
          {
            var $ = (J) => {
              var se = md();
              o(J, se);
            };
            x(Q, (J) => {
              g() && J($);
            });
          }
          D(() => {
            ye(ae, "for", k), U(ae, 1, oe(j), "svelte-cfvntl"), le(E, `${e.label ?? ""} `);
          }), o(V, ae);
        };
        x(h, (V) => {
          e.label && V(te);
        });
      }
      var ie = f(h, 2);
      {
        var ce = (V) => {
          var ae = pd(), E = l(ae);
          D(() => {
            ye(ae, "id", b), U(ae, 1, oe(G), "svelte-cfvntl"), le(E, e.description);
          }), o(V, ae);
        };
        x(ie, (V) => {
          e.description && V(ce);
        });
      }
      var de = f(ie, 2);
      {
        var ee = (V) => {
          var ae = xd(), E = l(ae);
          D(() => {
            ye(ae, "id", q), le(E, e.error);
          }), o(V, ae);
        };
        x(de, (V) => {
          e.error && V(ee);
        });
      }
      o(T, u);
    };
    x(F, (T) => {
      (e.label || e.description || e.error) && T(Y);
    });
  }
  D(() => U(R, 1, oe(W), "svelte-cfvntl")), o(r, O), Ye();
}
const kd = (r, e, a) => {
  K(e, !t(e)), t(e) && requestAnimationFrame(a);
};
var Cd = /* @__PURE__ */ c('<div class="h-px bg-white/10 my-1"></div>'), Sd = (
  // Former _markUsed helper removed (cleanup: unnecessary artificial usage)
  // Reactive no-op effect to ensure analyzer sees runtime updates to menuPosition
  (r, e, a) => e(t(a))
), Td = /* @__PURE__ */ c('<button><!> <span class="flex-1 text-left"> </span></button>'), Ed = /* @__PURE__ */ c('<div><div class="py-1"></div></div>'), Md = /* @__PURE__ */ c('<div><button aria-haspopup="true"><span> </span> <!></button> <!></div>');
function ex(r, e) {
  Ue(e, !0);
  const a = s(e, "trigger", 3, "Select"), n = s(e, "variant", 3, "glass"), i = s(e, "size", 3, "md"), d = s(e, "position", 3, "bottom"), v = s(e, "animated", 3, !0), p = s(e, "glow", 3, !1);
  s(e, "jelly", 3, !0);
  const y = s(e, "class", 3, ""), z = s(e, "triggerClass", 3, ""), g = s(e, "menuClass", 3, ""), L = /* @__PURE__ */ ct(e, [
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
  let N = /* @__PURE__ */ _e(!1), S = /* @__PURE__ */ _e(void 0), k = /* @__PURE__ */ _e(void 0), b = /* @__PURE__ */ _e(st({ x: 0, y: 0 }));
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
  }, Z = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg"
  }, w = () => {
    if (!t(S) || !t(k)) return;
    const m = t(S).getBoundingClientRect(), _ = t(k).getBoundingClientRect(), F = window.innerWidth, Y = window.innerHeight;
    let T = 0, u = 0;
    switch (d()) {
      case "bottom":
        T = 0, u = m.height + 4;
        break;
      case "top":
        T = 0, u = -_.height - 4;
        break;
      case "left":
        T = -_.width - 4, u = 0;
        break;
      case "right":
        T = m.width + 4, u = 0;
        break;
    }
    const h = m.left + T, te = m.top + u + m.height;
    h + _.width > F && (T = F - h - _.width - 8), te + _.height > Y && (u = -_.height - 4), K(b, { x: T, y: u }, !0);
  }, A = (m) => {
    m.disabled || m.divider || (e.onSelect?.(m.value), K(N, !1));
  }, W = (m) => {
    t(S) && !t(S).contains(m.target) && K(N, !1);
  }, H = (m) => {
    m.key === "Escape" && K(N, !1);
  };
  ht(() => (document.addEventListener("click", W), document.addEventListener("keydown", H), () => {
    document.removeEventListener("click", W), document.removeEventListener("keydown", H);
  }));
  const j = q[n()], G = e.items.find((m) => m.value === e.value);
  bt(() => {
    t(b);
  });
  var B = Md();
  Je(B, (m) => ({ class: m, ...L }), [() => re("relative inline-block", y())]);
  var I = l(B);
  I.__click = [kd, N, w];
  var O = l(I), R = l(O), P = f(O, 2);
  {
    let m = /* @__PURE__ */ we(() => re("transition-transform duration-200", t(N) && "rotate-180"));
    _n(P, {
      size: 16,
      get class() {
        return t(m);
      }
    });
  }
  Ie(I, (m, _) => pt?.(m, _), () => ({ enabled: !0, strength: 0.1 }));
  var C = f(I, 2);
  {
    var M = (m) => {
      var _ = Ed(), F = l(_);
      Xe(F, 21, () => e.items, (Y) => Y.value, (Y, T) => {
        var u = Ce(), h = ge(u);
        {
          var te = (ce) => {
            var de = Cd();
            o(ce, de);
          }, ie = (ce) => {
            var de = Td();
            de.__click = [Sd, A, T];
            var ee = l(de);
            {
              var V = (Q) => {
                var $ = Ce(), J = ge($);
                He(J, () => t(T).icon, (se, X) => {
                  X(se, { size: 16 });
                }), o(Q, $);
              };
              x(ee, (Q) => {
                t(T).icon && Q(V);
              });
            }
            var ae = f(ee, 2), E = l(ae);
            D(
              (Q) => {
                de.disabled = t(T).disabled, U(de, 1, Q), le(E, t(T).label);
              },
              [
                () => oe(re("flex items-center gap-3 w-full px-4 py-2 transition-all duration-200", j.item, t(T).value === e.value && j.active, t(T).disabled && "opacity-50 cursor-not-allowed", !t(T).disabled && "cursor-pointer"))
              ]
            ), o(ce, de);
          };
          x(h, (ce) => {
            t(T).divider ? ce(te) : ce(ie, !1);
          });
        }
        o(Y, u);
      }), rt(_, (Y) => K(k, Y), () => t(k)), D(
        (Y) => {
          U(_, 1, Y), ut(_, `left: ${t(b).x}px; top: ${t(b).y}px;`);
        },
        [
          () => oe(re("absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden", j.menu, p() && j.glow, v() && "transform-gpu will-change-transform", g()))
        ]
      ), tt(3, _, () => _t, () => ({ duration: v() ? 200 : 0 })), o(m, _);
    };
    x(C, (m) => {
      t(N) && m(M);
    });
  }
  rt(B, (m) => K(S, m), () => t(S)), D(
    (m) => {
      U(I, 1, m), ye(I, "aria-expanded", t(N)), le(R, G?.label || a());
    },
    [
      () => oe(re("flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200", Z[i()], j.trigger, p() && t(N) && j.glow, "focus:outline-none focus:ring-2 focus:ring-white/20", z()))
    ]
  ), o(r, B), Ye();
}
gt(["click"]);
var Ad = /* @__PURE__ */ c("<i></i>");
const zd = {
  hash: "svelte-1nwxrii",
  code: `
  /* Terminal variant */.icon-terminal.svelte-1nwxrii {color:var(--color-terminal-green, #00ff41);text-shadow:0 0 5px currentColor;}
  
  /* Glass variant */.icon-glass.svelte-1nwxrii {color:var(--color-bubble-tea-pink, #ff6b9d);filter:drop-shadow(0 0 8px rgba(255, 107, 157, 0.4));}
  
  /* Liquid variant */.icon-liquid.svelte-1nwxrii {color:var(--terminal-neon, #ff0080);filter:drop-shadow(0 0 12px currentColor);
    animation: svelte-1nwxrii-icon-glow 2s ease-in-out infinite alternate;}
  
  /* Auto variant inherits from parent */.icon-auto.svelte-1nwxrii {color:inherit;}
  
  @keyframes svelte-1nwxrii-icon-glow {
    from { filter: drop-shadow(0 0 8px currentColor); }
    to { filter: drop-shadow(0 0 16px currentColor); }
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {.icon-liquid.svelte-1nwxrii {
      animation: none;}
  }`
};
function tx(r, e) {
  Ue(e, !0), $e(r, zd);
  let a = s(e, "style", 3, "solid"), n = s(e, "class", 3, ""), i = s(e, "variant", 3, "auto"), d = /* @__PURE__ */ ct(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "style",
    "size",
    "class",
    "variant"
  ]);
  const v = { solid: "fas", regular: "far", light: "fal", brands: "fab" }[a()], p = e.size ? `fa-${e.size}` : "", y = `fa-${e.name}`, z = [
    v,
    y,
    p,
    `icon-${i()}`,
    n()
  ].filter(Boolean).join(" ");
  var g = Ad();
  Je(g, () => ({ class: z, ...d, "aria-hidden": "true" }), void 0, void 0, "svelte-1nwxrii"), o(r, g), Ye();
}
var Id = /* @__PURE__ */ c('<label class="block text-sm font-medium text-white/80 mb-2"> </label>'), Pd = /* @__PURE__ */ c('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), Ld = /* @__PURE__ */ c('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), Dd = /* @__PURE__ */ c("<input/>"), Rd = /* @__PURE__ */ c("<input/>"), jd = /* @__PURE__ */ c("<input/>"), Nd = /* @__PURE__ */ c('<p class="mt-1 text-sm text-red-400" role="alert"> </p>'), qd = /* @__PURE__ */ c('<div class="relative"><!> <div class="relative"><!> <!></div> <!></div>');
const Od = {
  hash: "svelte-177vx52",
  code: `input.svelte-177vx52:focus {box-shadow:0 0 0 3px rgba(0, 122, 255, 0.1);transition:box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);}input.svelte-177vx52.glass:focus {-webkit-backdrop-filter:blur(16px) saturate(200%);backdrop-filter:blur(16px) saturate(200%);transition:-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
			-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);}input.svelte-177vx52.terminal {caret-color:var(--terminal-green);}

	/* Liquid input effects */input.svelte-177vx52:focus {transform:translateY(-1px);}input.svelte-177vx52.backdrop-blur-md:focus {-webkit-backdrop-filter:blur(12px) saturate(150%);backdrop-filter:blur(12px) saturate(150%);background:linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));}

	/* Enhanced hover states */input.svelte-177vx52:hover:not(:focus) {border-color:rgba(255, 255, 255, 0.3);background:linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));}

	/* Jelly physics simulation */input.svelte-177vx52.jelly-hover:hover {transform:scale(1.01) translateY(-1px);transition:transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);}

	/* Magnetic attraction visual feedback */input.svelte-177vx52.magnetic:hover {box-shadow:0 4px 20px rgba(139, 92, 246, 0.15);}`
};
function Fd(r, e) {
  Ue(e, !0), $e(r, Od);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), i = s(e, "label", 3, ""), d = s(e, "error", 3, ""), v = s(e, "icon", 3, null), p = s(e, "animate", 3, !0), y = s(e, "liquid", 3, !1), z = s(e, "magnetic", 3, !1), g = s(e, "jelly", 3, !1), L = s(e, "glow", 3, !1), N = s(e, "class", 3, ""), S = s(e, "id", 3, ""), k = /* @__PURE__ */ ct(e, [
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
  ]), b = {
    default: "bg-white/5 border border-white/20 focus:border-brand-primary",
    glass: "glass border-white/30 focus:border-terminal-green/50 focus:shadow-lg",
    terminal: "bg-terminal-bg border border-terminal-green/20 focus:border-terminal-green text-terminal-fg font-mono",
    liquid: "bg-gradient-to-r from-white/5 to-white/10 border border-white/20 focus:border-brand-primary focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15"
  }, q = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, Z = "w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300", w = d() ? "border-red-500 focus:border-red-500" : "", A = v() || e.children?.icon ? "pl-10" : "", W = L() ? "focus:shadow-lg focus:shadow-brand-primary/20" : "", H = y() ? "backdrop-blur-md" : "", j = re(Z, b[a()], q[n()], w, A, W, H, N()), G = S() || `input-${Math.random().toString(36).substr(2, 9)}`, B = d() ? `${G}-error` : void 0;
  var I = qd(), O = l(I);
  {
    var R = (h) => {
      var te = Id(), ie = l(te);
      D(() => {
        ye(te, "for", G), le(ie, i());
      }), o(h, te);
    };
    x(O, (h) => {
      i() && h(R);
    });
  }
  var P = f(O, 2), C = l(P);
  {
    var M = (h) => {
      var te = Pd(), ie = l(te);
      lt(ie, v), o(h, te);
    }, m = (h) => {
      var te = Ce(), ie = ge(te);
      {
        var ce = (de) => {
          var ee = Ld(), V = l(ee);
          lt(V, () => e.children.icon), o(de, ee);
        };
        x(
          ie,
          (de) => {
            e.children?.icon && de(ce);
          },
          !0
        );
      }
      o(h, te);
    };
    x(C, (h) => {
      v() ? h(M) : h(m, !1);
    });
  }
  var _ = f(C, 2);
  {
    var F = (h) => {
      var te = Dd();
      Je(te, (ie) => ({ id: S(), class: ie, ...k }), [j], void 0, "svelte-177vx52"), Ie(te, (ie, ce) => pt?.(ie, ce), () => z() ? { strength: 0.1, distance: 50 } : void 0), Ie(te, (ie, ce) => zt?.(ie, ce), () => g() ? { intensity: 0.05, speed: 200 } : void 0), tt(1, te, () => Tt, () => ({ duration: 300, blur: "sm", scale: 0.98 })), o(h, te);
    }, Y = (h) => {
      var te = Ce(), ie = ge(te);
      {
        var ce = (ee) => {
          var V = Rd();
          Je(
            V,
            (ae) => ({
              id: G,
              class: ae,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": B,
              ...k
            }),
            [j],
            void 0,
            "svelte-177vx52"
          ), Ie(V, (ae, E) => pt?.(ae, E), () => z() ? { strength: 0.1, distance: 50 } : void 0), Ie(V, (ae, E) => zt?.(ae, E), () => g() ? { intensity: 0.05, speed: 200 } : void 0), tt(1, V, () => _t, () => ({
            duration: 200,
            direction: "up",
            distance: 5,
            opacity: "light"
          })), o(ee, V);
        }, de = (ee) => {
          var V = jd();
          Je(
            V,
            (ae) => ({
              id: G,
              class: ae,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": B,
              ...k
            }),
            [j],
            void 0,
            "svelte-177vx52"
          ), Ie(V, (ae, E) => pt?.(ae, E), () => z() ? { strength: 0.1, distance: 50 } : void 0), Ie(V, (ae, E) => zt?.(ae, E), () => g() ? { intensity: 0.05, speed: 200 } : void 0), o(ee, V);
        };
        x(
          ie,
          (ee) => {
            p() ? ee(ce) : ee(de, !1);
          },
          !0
        );
      }
      o(h, te);
    };
    x(_, (h) => {
      p() && y() ? h(F) : h(Y, !1);
    });
  }
  var T = f(P, 2);
  {
    var u = (h) => {
      var te = Nd(), ie = l(te);
      D(() => {
        ye(te, "id", B), le(ie, d());
      }), o(h, te);
    };
    x(T, (h) => {
      d() && h(u);
    });
  }
  o(r, I), Ye();
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
}, Bd = {
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
}, Hd = {
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
}, Vd = {
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
}, Gd = {
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
}, Ud = {
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
}, Nn = {
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
}, Yd = {
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
}, Wd = {
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
}, Kd = {
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
  borderRadius: Nn.themes.terminal
}, Xd = {
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
  borderRadius: Nn.themes.bubbleTea
}, rx = {
  colors: Me,
  typography: Bd,
  spacing: Hd,
  effects: Vd,
  shadows: Gd,
  animations: Ud,
  sizes: Yd,
  borderRadius: Nn,
  zIndex: Wd,
  themes: {
    terminal: Kd,
    bubbleTea: Xd
  }
};
var Zd = /* @__PURE__ */ c("<div> </div>"), Qd = /* @__PURE__ */ c('<div class="flex items-center justify-between svelte-17v0sh2"><div class="flex-1 svelte-17v0sh2"><div> </div> <div> </div></div> <div class="flex flex-col items-end gap-1 svelte-17v0sh2"><!> <!></div></div>'), Jd = /* @__PURE__ */ c("<span> </span>"), $d = /* @__PURE__ */ c("<span> </span>"), ec = /* @__PURE__ */ c('<div class="flex items-center gap-2 svelte-17v0sh2"><!> <!> <!></div>'), tc = /* @__PURE__ */ c("<div> </div>"), rc = /* @__PURE__ */ c('<div class="space-y-2 svelte-17v0sh2"><div class="flex items-center justify-between svelte-17v0sh2"><div> </div> <!></div> <div> </div> <!> <!></div>'), ac = /* @__PURE__ */ c('<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg svelte-17v0sh2"><div class="flex items-center gap-2 svelte-17v0sh2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-17v0sh2"></div> <span class="text-sm opacity-70 svelte-17v0sh2">Loading...</span></div></div>'), nc = /* @__PURE__ */ c('<div class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none svelte-17v0sh2"></div>'), oc = /* @__PURE__ */ c("<!> <!> <!>", 1);
const ic = {
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
function ax(r, e) {
  Ue(e, !0), $e(r, ic);
  let a = s(e, "size", 3, "md"), n = s(e, "variant", 3, "glass"), i = s(e, "layout", 3, "vertical"), d = s(e, "showTrend", 3, !0), v = s(e, "showChange", 3, !0), p = s(e, "showIcon", 3, !1), y = s(e, "animated", 3, !0), z = s(e, "loading", 3, !1), g = s(e, "clickable", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  const S = {
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
  }, b = S[a()], q = k[n()], Z = /* @__PURE__ */ we(() => () => {
    if (z()) return "---";
    const B = e.metric.value, I = e.metric.format || "number", O = e.metric.unit || "";
    switch (I) {
      case "currency":
        return `$${Number(B).toLocaleString()}${O}`;
      case "percentage":
        return `${B}%`;
      default:
        return `${Number(B).toLocaleString()}${O}`;
    }
  }), w = /* @__PURE__ */ we(() => () => {
    if (!e.metric.change || z()) return null;
    const B = e.metric.change, I = B > 0, O = B < 0;
    return {
      value: `${I ? "+" : ""}${B}%`,
      type: I ? "positive" : O ? "negative" : "neutral"
    };
  }), A = /* @__PURE__ */ we(() => () => {
    if (!e.metric.trend || z()) return null;
    switch (e.metric.trend) {
      case "up":
        return Ii;
      case "down":
        return zi;
      default:
        return mo;
    }
  }), W = /* @__PURE__ */ we(() => () => {
    if (!t(w)) return q.changeNeutral;
    switch (t(w).type) {
      case "positive":
        return q.changePositive;
      case "negative":
        return q.changeNegative;
      default:
        return q.changeNeutral;
    }
  });
  function H() {
    if (g()) {
      const B = new CustomEvent("click", { detail: e.metric });
      e.onclick?.(B);
    }
  }
  var j = Ce(), G = ge(j);
  ms(G, () => g() ? "button" : "div", !1, (B, I) => {
    Ie(B, (Y, T) => Tt?.(Y, T), () => ({ intensity: "medium" })), Je(
      B,
      (Y) => ({
        class: Y,
        onclick: H,
        role: g() ? "button" : void 0,
        tabindex: g() ? 0 : void 0,
        ...N
      }),
      [
        () => re("relative rounded-lg border transition-all duration-200", b.container, q.container, g() && "cursor-pointer hover:scale-105 hover:shadow-lg", y() && "transform-gpu", L())
      ],
      void 0,
      "svelte-17v0sh2"
    );
    var O = oc(), R = ge(O);
    {
      var P = (Y) => {
        var T = Qd(), u = l(T), h = l(u), te = l(h), ie = f(h, 2), ce = l(ie), de = f(u, 2), ee = l(de);
        {
          var V = ($) => {
            const J = /* @__PURE__ */ we(() => t(A));
            var se = Ce(), X = ge(se);
            {
              let ne = /* @__PURE__ */ we(() => re(b.icon, t(W)));
              He(X, () => t(J), (ue, ve) => {
                ve(ue, {
                  get class() {
                    return t(ne);
                  },
                  strokeWidth: 2
                });
              });
            }
            o($, se);
          }, ae = ($) => {
            var J = Ce(), se = ge(J);
            {
              var X = (ne) => {
                {
                  let ue = /* @__PURE__ */ we(() => re(b.icon, q.icon));
                  Hn(ne, {
                    get class() {
                      return t(ue);
                    }
                  });
                }
              };
              x(
                se,
                (ne) => {
                  p() && e.metric.icon && ne(X);
                },
                !0
              );
            }
            o($, J);
          };
          x(ee, ($) => {
            p() && d() && t(A) ? $(V) : $(ae, !1);
          });
        }
        var E = f(ee, 2);
        {
          var Q = ($) => {
            var J = Zd(), se = l(J);
            D(
              (X) => {
                U(J, 1, X, "svelte-17v0sh2"), le(se, t(w).value);
              },
              [
                () => oe(re("font-medium", b.change, t(W)))
              ]
            ), o($, J);
          };
          x(E, ($) => {
            v() && t(w) && $(Q);
          });
        }
        D(
          ($, J) => {
            U(h, 1, $, "svelte-17v0sh2"), le(te, e.metric.label), U(ie, 1, J, "svelte-17v0sh2"), le(ce, t(Z));
          },
          [
            () => oe(re("font-medium", b.label, q.label)),
            () => oe(re("font-bold tracking-tight", b.value, q.value))
          ]
        ), o(Y, T);
      }, C = (Y) => {
        var T = rc(), u = l(T), h = l(u), te = l(h), ie = f(h, 2);
        {
          var ce = ($) => {
            {
              let J = /* @__PURE__ */ we(() => re(b.icon, q.icon));
              Hn($, {
                get class() {
                  return t(J);
                }
              });
            }
          };
          x(ie, ($) => {
            p() && e.metric.icon && $(ce);
          });
        }
        var de = f(u, 2), ee = l(de), V = f(de, 2);
        {
          var ae = ($) => {
            var J = ec(), se = l(J);
            {
              var X = (fe) => {
                const be = /* @__PURE__ */ we(() => t(A));
                var me = Ce(), Te = ge(me);
                {
                  let Pe = /* @__PURE__ */ we(() => re("w-4 h-4", t(W)));
                  He(Te, () => t(be), (Fe, Re) => {
                    Re(Fe, {
                      get class() {
                        return t(Pe);
                      },
                      strokeWidth: 2
                    });
                  });
                }
                o(fe, me);
              };
              x(se, (fe) => {
                d() && t(A) && fe(X);
              });
            }
            var ne = f(se, 2);
            {
              var ue = (fe) => {
                var be = Jd(), me = l(be);
                D(
                  (Te) => {
                    U(be, 1, Te, "svelte-17v0sh2"), le(me, t(w).value);
                  },
                  [
                    () => oe(re("font-medium", b.change, t(W)))
                  ]
                ), o(fe, be);
              };
              x(ne, (fe) => {
                v() && t(w) && fe(ue);
              });
            }
            var ve = f(ne, 2);
            {
              var pe = (fe) => {
                var be = $d(), me = l(be);
                D(
                  (Te) => {
                    U(be, 1, Te, "svelte-17v0sh2"), le(me, `from ${e.metric.previousValue ?? ""}`);
                  },
                  [
                    () => oe(re("opacity-60", b.change, q.label))
                  ]
                ), o(fe, be);
              };
              x(ve, (fe) => {
                e.metric.previousValue && fe(pe);
              });
            }
            o($, J);
          };
          x(V, ($) => {
            (d() && t(A) || v() && t(w)) && $(ae);
          });
        }
        var E = f(V, 2);
        {
          var Q = ($) => {
            var J = tc(), se = l(J);
            D(
              (X) => {
                U(J, 1, X, "svelte-17v0sh2"), le(se, e.metric.description);
              },
              [
                () => oe(re("opacity-70 leading-relaxed", b.change, q.label))
              ]
            ), o($, J);
          };
          x(E, ($) => {
            e.metric.description && $(Q);
          });
        }
        D(
          ($, J) => {
            U(h, 1, $, "svelte-17v0sh2"), le(te, e.metric.label), U(de, 1, J, "svelte-17v0sh2"), le(ee, t(Z));
          },
          [
            () => oe(re("font-medium", b.label, q.label)),
            () => oe(re("font-bold tracking-tight", b.value, q.value))
          ]
        ), o(Y, T);
      };
      x(R, (Y) => {
        i() === "horizontal" ? Y(P) : Y(C, !1);
      });
    }
    var M = f(R, 2);
    {
      var m = (Y) => {
        var T = ac();
        o(Y, T);
      };
      x(M, (Y) => {
        z() && Y(m);
      });
    }
    var _ = f(M, 2);
    {
      var F = (Y) => {
        var T = nc();
        o(Y, T);
      };
      x(_, (Y) => {
        g() && Y(F);
      });
    }
    o(I, O);
  }), o(r, j), Ye();
}
function lc(r, e, a) {
  e() && r.target === r.currentTarget && a();
}
var sc = (
  // Store previously focused element
  // Focus first focusable element in modal
  // Prevent body scroll
  // Add escape listener
  // Restore body scroll
  // Remove escape listener
  // Restore focus
  // Track bundle size
  (r, e) => r.key === "Escape" && e()
), dc = /* @__PURE__ */ c('<div role="dialog" aria-modal="true" tabindex="0"><div><!></div></div>');
const cc = {
  hash: "svelte-6n99c3",
  code: `div[role='dialog'].svelte-6n99c3 {-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}

	@media (prefers-reduced-motion: reduce) {div.svelte-6n99c3 {transition:none;
			animation: none;}
	}`
};
function nx(r, e) {
  Ue(e, !0), $e(r, cc);
  const a = s(e, "open", 3, !1), n = s(e, "size", 3, "md"), i = s(e, "variant", 3, "glass"), d = s(e, "blur", 3, "xl"), v = s(e, "closeOnOutsideClick", 3, !0), p = s(e, "closeOnEscape", 3, !0), y = s(e, "animate", 3, !0), z = s(e, "jelly", 3, !0), g = s(e, "glow", 3, !1), L = s(e, "breathing", 3, !1), N = s(e, "reduceMotion", 3, !1), S = s(e, "class", 3, ""), k = /* @__PURE__ */ ct(e, [
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
  let b = /* @__PURE__ */ _e(void 0), q = null;
  const Z = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4"
  }, w = {
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
  }, A = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, W = w[i()], H = re("fixed inset-0 z-50 flex items-center justify-center p-4", W.overlay, A[d()]), G = re("relative w-full p-6 backdrop-blur-xl border transition-all duration-300", "transform-gpu will-change-transform", "modal-radius-lg", Z[n()], W.bg, g() && W.glow, S());
  function B(M) {
    M.key === "Escape" && p() && (M.preventDefault(), I()), M.key === "Tab" && O(M);
  }
  function I() {
    e.onClose && e.onClose();
  }
  function O(M) {
    if (!t(b)) return;
    const m = t(b).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), _ = m[0], F = m[m.length - 1];
    M.shiftKey ? document.activeElement === _ && (F.focus(), M.preventDefault()) : document.activeElement === F && (_.focus(), M.preventDefault());
  }
  bt(() => (a() ? (q = document.activeElement, setTimeout(
    () => {
      if (t(b)) {
        const m = t(b).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])')[0];
        m && m.focus();
      }
    },
    100
  ), document.body.style.overflow = "hidden", document.addEventListener("keydown", B)) : (document.body.style.overflow = "", document.removeEventListener("keydown", B), q && q instanceof HTMLElement && q.focus()), () => {
    document.body.style.overflow = "", document.removeEventListener("keydown", B);
  })), bt(() => {
    $t("Modal", "medium");
  });
  var R = Ce(), P = ge(R);
  {
    var C = (M) => {
      var m = dc();
      m.__click = [lc, v, I], m.__keydown = [sc, I];
      var _ = l(m);
      Je(_, () => ({ class: G, ...k }), void 0, void 0, "svelte-6n99c3");
      var F = l(_);
      {
        var Y = (T) => {
          var u = Ce(), h = ge(u);
          lt(h, () => e.children), o(T, u);
        };
        x(F, (T) => {
          e.children && T(Y);
        });
      }
      rt(_, (T) => K(b, T), () => t(b)), Ie(_, (T, u) => zt?.(T, u), () => ({
        enabled: z() && y() && !N(),
        scale: 1.001,
        duration: 300,
        borderRadius: "var(--radius-xl)"
      })), Ie(_, (T, u) => jt?.(T, u), () => ({
        enabled: L() && y() && !N(),
        intensity: 0.01,
        speed: 4e3
      })), D(() => {
        U(m, 1, oe(H), "svelte-6n99c3"), ye(m, "aria-labelledby", e["aria-labelledby"]), ye(m, "aria-describedby", e["aria-describedby"]);
      }), tt(1, _, () => Wt, () => ({
        scale: 0.8,
        duration: y() && !N() ? 400 : 0,
        delay: 100
      })), tt(2, _, () => Wt, () => ({
        scale: 0.95,
        duration: y() && !N() ? 200 : 0
      })), tt(1, m, () => _t, () => ({
        direction: "center",
        duration: y() && !N() ? 200 : 0
      })), tt(2, m, () => _t, () => ({
        direction: "center",
        duration: y() && !N() ? 150 : 0
      })), o(M, m);
    };
    x(P, (M) => {
      a() && M(C);
    });
  }
  o(r, R), Ye();
}
gt(["click", "keydown"]);
function vc(r, e, a, n) {
  const i = r.target;
  K(e, i.value, !0), a("search", t(e)), K(
    n,
    -1
    // Reset focus when searching
  );
}
var uc = (
  // Remove last selected item if search is empty
  // Update internal state when value prop changes
  // Click outside to close
  (r, e, a) => e(t(a).value, r)
), fc = /* @__PURE__ */ c('<div><span class="truncate max-w-32"> </span> <button><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'), bc = /* @__PURE__ */ c('<input role="searchbox" aria-label="Search options" aria-controls="multiselect-listbox"/>'), gc = /* @__PURE__ */ c("<span> </span>"), mc = /* @__PURE__ */ c("<div> </div>"), hc = (r, e, a) => e(t(a)), pc = (r, e, a) => r.key === "Enter" && e(t(a)), xc = /* @__PURE__ */ c('<div class="text-xs opacity-70 mt-0.5"> </div>'), _c = /* @__PURE__ */ ir('<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), wc = /* @__PURE__ */ c('<div role="option" tabindex="0"><div class="flex items-center justify-between"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div></div>'), yc = /* @__PURE__ */ c("<div> </div>"), kc = /* @__PURE__ */ c('<div id="multiselect-listbox" role="listbox" aria-multiselectable="true" aria-label="Available options"><!> <!></div>'), Cc = /* @__PURE__ */ c('<div><div class="flex flex-wrap gap-1.5 items-center"><!> <!></div> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <!> <div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only"> <!></div></div>');
const Sc = {
  hash: "svelte-39ftoh",
  code: `
	/* Scrollbar styling for dropdown */.overflow-auto.svelte-39ftoh::-webkit-scrollbar {width:8px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-track {background:rgba(255, 255, 255, 0.05);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Terminal-specific glow effects */.terminal .multi-select:focus-within {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}`
};
function ox(r, e) {
  Ue(e, !0), $e(r, Sc);
  const a = s(e, "options", 19, () => []), n = s(e, "value", 19, () => []), i = s(e, "placeholder", 3, "Select items..."), d = s(e, "variant", 3, "default"), v = s(e, "size", 3, "md"), p = s(e, "disabled", 3, !1), y = s(e, "error", 3, !1), z = s(e, "searchable", 3, !0), g = s(e, "chipVariant", 19, d), L = s(e, "closeOnSelect", 3, !1), N = s(e, "class", 3, ""), S = /* @__PURE__ */ ct(e, [
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
  ]), k = At();
  let b, q = /* @__PURE__ */ _e(void 0), Z = /* @__PURE__ */ _e(void 0), w = /* @__PURE__ */ _e(!1), A = /* @__PURE__ */ _e(""), W = /* @__PURE__ */ _e(st([...n()])), H = /* @__PURE__ */ _e(-1);
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
  }, G = {
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
  }, B = /* @__PURE__ */ we(() => j[d()]), I = /* @__PURE__ */ we(() => j[g()]), O = /* @__PURE__ */ we(() => G[v()]), R = /* @__PURE__ */ we(() => () => t(A) ? a().filter((ue) => ue.label.toLowerCase().includes(t(A).toLowerCase()) || ue.value.toLowerCase().includes(t(A).toLowerCase()) || ue.description?.toLowerCase().includes(t(A).toLowerCase())) : a()), P = /* @__PURE__ */ we(() => () => t(R).filter((ue) => !t(W).includes(ue.value))), C = /* @__PURE__ */ we(() => () => t(W).map((ue) => a().find((ve) => ve.value === ue)).filter(Boolean)), M = /* @__PURE__ */ we(() => () => e.maxSelections ? t(W).length >= e.maxSelections : !1);
  function m() {
    p() || t(w) || (K(w, !0), k("open"), setTimeout(
      () => {
        z() && t(q) && t(q).focus();
      },
      0
    ));
  }
  function _(ue) {
    ue.disabled || t(M) && !t(W).includes(ue.value) || (t(W).includes(ue.value) ? Y(ue.value) : F(ue.value), L() && !t(W).includes(ue.value) && (K(w, !1), k("close")));
  }
  function F(ue) {
    t(M) || (K(W, [...t(W), ue], !0), k("add", ue), k("change", t(W)), K(A, ""), k("search", t(A)));
  }
  function Y(ue) {
    K(W, t(W).filter((ve) => ve !== ue), !0), k("remove", ue), k("change", t(W));
  }
  function T(ue, ve) {
    ve.stopPropagation(), Y(ue);
  }
  function u(ue) {
    switch (ue.key) {
      case "Escape":
        K(w, !1), k("close");
        break;
      case "ArrowDown":
        ue.preventDefault(), t(w) ? K(H, Math.min(t(H) + 1, t(P).length - 1), !0) : (K(w, !0), k("open"));
        break;
      case "ArrowUp":
        ue.preventDefault(), K(H, Math.max(t(H) - 1, -1), !0);
        break;
      case "Enter":
        ue.preventDefault(), t(H) >= 0 && t(P)[t(H)] && _(t(P)[t(H)]);
        break;
      case "Backspace":
        t(A) === "" && t(W).length > 0 && Y(t(W)[t(W).length - 1]);
        break;
    }
  }
  bt(() => {
    K(W, [...n()], !0);
  }), ht(() => {
    function ue(ve) {
      t(w) && b && !b.contains(ve.target) && (K(w, !1), k("close"));
    }
    return document.addEventListener("click", ue), () => document.removeEventListener("click", ue);
  });
  const h = /* @__PURE__ */ we(() => re("relative w-full min-h-10 rounded-lg border transition-all duration-200", "cursor-text font-mono", t(B).container, t(O).container, y() && "border-red-500 focus-within:border-red-500", p() && "opacity-50 cursor-not-allowed", t(w) && "ring-2 ring-opacity-50", N()));
  var te = Cc();
  Je(
    te,
    () => ({
      class: t(h),
      onclick: m,
      onkeydown: u,
      role: "combobox",
      "aria-expanded": t(w),
      "aria-haspopup": "listbox",
      "aria-controls": "multiselect-listbox",
      "aria-label": i(),
      "aria-describedby": "multiselect-status",
      tabindex: p() ? -1 : 0,
      ...S
    }),
    void 0,
    void 0,
    "svelte-39ftoh"
  );
  var ie = l(te), ce = l(ie);
  Xe(ce, 17, () => t(C), (ue) => ue.value, (ue, ve) => {
    var pe = fc(), fe = l(pe), be = l(fe), me = f(fe, 2);
    me.__click = [uc, T, ve], Ie(pe, (Te, Pe) => pt?.(Te, Pe), () => ({ strength: 0.15 })), D(() => {
      U(
        pe,
        1,
        `inline-flex items-center gap-1.5 rounded-md ${t(I).chip ?? ""} ${t(O).chip ?? ""} 
				       font-mono transition-all duration-200`,
        "svelte-39ftoh"
      ), le(be, t(ve).label), U(
        me,
        1,
        `flex-shrink-0 rounded-full ${t(I).chipClose ?? ""} hover:bg-black/20
					       transition-colors p-0.5`,
        "svelte-39ftoh"
      ), ye(me, "aria-label", `Remove ${t(ve).label ?? ""}`);
    }), tt(1, pe, () => Wt, () => ({ duration: 200, bounce: !0 })), o(ue, pe);
  });
  var de = f(ce, 2);
  {
    var ee = (ue) => {
      var ve = bc();
      ve.__input = [vc, A, k, H], ve.__keydown = u, rt(ve, (pe) => K(q, pe), () => t(q)), D(() => {
        ye(ve, "placeholder", t(W).length === 0 ? i() : ""), U(ve, 1, `flex-1 min-w-32 outline-none ${t(B).searchInput ?? ""} ${t(O).input ?? ""}`, "svelte-39ftoh"), ve.disabled = p() || t(M);
      }), _r(ve, () => t(A), (pe) => K(A, pe)), o(ue, ve);
    }, V = (ue) => {
      var ve = Ce(), pe = ge(ve);
      {
        var fe = (be) => {
          var me = gc(), Te = l(me);
          D(() => {
            U(me, 1, `text-gray-400 ${t(O).input ?? ""}`, "svelte-39ftoh"), le(Te, i());
          }), o(be, me);
        };
        x(
          pe,
          (be) => {
            t(W).length === 0 && be(fe);
          },
          !0
        );
      }
      o(ue, ve);
    };
    x(de, (ue) => {
      z() ? ue(ee) : ue(V, !1);
    });
  }
  var ae = f(ie, 2), E = l(ae), Q = f(ae, 2);
  {
    var $ = (ue) => {
      var ve = kc(), pe = l(ve);
      {
        var fe = (Pe) => {
          var Fe = mc(), Re = l(Fe);
          D(() => {
            U(Fe, 1, `px-4 py-3 text-center ${t(B).option ?? ""} font-mono`, "svelte-39ftoh"), le(Re, t(A) ? "No results found" : "No more options available");
          }), o(Pe, Fe);
        }, be = (Pe) => {
          var Fe = Ce(), Re = ge(Fe);
          Xe(Re, 19, () => t(P), (ke) => ke.value, (ke, xe, Ee) => {
            const Ne = /* @__PURE__ */ we(() => t(Ee) === t(H)), Ae = /* @__PURE__ */ we(() => t(W).includes(t(xe).value));
            var Le = wc();
            Le.__click = [hc, _, xe], Le.__keydown = [pc, _, xe];
            var Oe = l(Le), Be = l(Oe), Se = l(Be), he = l(Se), ze = f(Se, 2);
            {
              var De = (Qe) => {
                var ot = xc(), vt = l(ot);
                D(() => le(vt, t(xe).description)), o(Qe, ot);
              };
              x(ze, (Qe) => {
                t(xe).description && Qe(De);
              });
            }
            var Ve = f(Be, 2);
            {
              var et = (Qe) => {
                var ot = _c();
                o(Qe, ot);
              };
              x(Ve, (Qe) => {
                t(Ae) && Qe(et);
              });
            }
            Ie(Le, (Qe, ot) => pt?.(Qe, ot), () => ({ enabled: !t(xe).disabled, strength: 0.1 })), D(() => {
              U(
                Le,
                1,
                `cursor-pointer transition-all duration-150 ${t(O).option ?? ""}
						       ${(t(Ne) ? t(B).selectedOption : t(B).option) ?? ""}
						       ${t(xe).disabled ? "opacity-50 cursor-not-allowed" : ""}
						       font-mono border-b border-white/5 last:border-b-0`,
                "svelte-39ftoh"
              ), ye(Le, "aria-selected", t(Ae)), le(he, t(xe).label);
            }), o(ke, Le);
          }), o(Pe, Fe);
        };
        x(pe, (Pe) => {
          t(P).length === 0 ? Pe(fe) : Pe(be, !1);
        });
      }
      var me = f(pe, 2);
      {
        var Te = (Pe) => {
          var Fe = yc(), Re = l(Fe);
          D(() => {
            U(Fe, 1, `px-4 py-2 text-center text-xs ${t(B).option ?? ""} bg-yellow-500/10 border-t`, "svelte-39ftoh"), le(Re, `Maximum ${e.maxSelections ?? ""} selections reached`);
          }), o(Pe, Fe);
        };
        x(me, (Pe) => {
          t(M) && Pe(Te);
        });
      }
      rt(ve, (Pe) => K(Z, Pe), () => t(Z)), Ie(ve, (Pe, Fe) => Tt?.(Pe, Fe), () => ({ blur: "lg", opacity: "medium" })), D(() => U(
        ve,
        1,
        `absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl ${t(B).dropdown ?? ""}`,
        "svelte-39ftoh"
      )), tt(1, ve, () => _t, () => ({ direction: "up", duration: 200 })), o(ue, ve);
    };
    x(Q, (ue) => {
      t(w) && ue($);
    });
  }
  var J = f(Q, 2), se = l(J), X = f(se);
  {
    var ne = (ue) => {
      var ve = Ct();
      D(() => le(ve, `out of maximum ${e.maxSelections ?? ""}`)), o(ue, ve);
    };
    x(X, (ue) => {
      e.maxSelections && ue(ne);
    });
  }
  rt(te, (ue) => b = ue, () => b), Ie(te, (ue, ve) => Tt?.(ue, ve), () => ({ blur: "sm", opacity: "light" })), Ie(te, (ue, ve) => pt?.(ue, ve), () => ({ enabled: !p(), strength: 0.1 })), D(() => {
    U(
      E,
      0,
      `w-4 h-4 transition-transform duration-200 ${t(w) ? "rotate-180" : ""} 
			       ${t(B).option ?? ""}`,
      "svelte-39ftoh"
    ), le(se, `${t(W).length ?? ""} items selected `);
  }), o(r, te), Ye();
}
gt(["click", "input", "keydown"]);
var Tc = (r, e) => e(1), Ec = /* @__PURE__ */ c('<button aria-label="Go to first page"><!></button>'), Mc = (r, e, a) => e(a() - 1), Ac = /* @__PURE__ */ c("<span>...</span>"), zc = (r, e, a) => e(t(a)), Ic = /* @__PURE__ */ c("<button> </button>"), Pc = (r, e, a) => e(a() + 1), Lc = (r, e, a) => e(a.totalPages), Dc = /* @__PURE__ */ c('<button aria-label="Go to last page"><!></button>'), Rc = /* @__PURE__ */ c('<nav><!> <button aria-label="Go to previous page"><!></button> <!> <button aria-label="Go to next page"><!></button> <!></nav>');
function ix(r, e) {
  Ue(e, !0);
  let a = s(e, "currentPage", 15, 1), n = s(e, "siblingCount", 3, 1), i = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md");
  s(e, "animated", 3, !0);
  let v = s(e, "glow", 3, !1), p = s(e, "jelly", 3, !0), y = s(e, "showFirstLast", 3, !0), z = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
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
  }, S = () => {
    if (n() * 2 + 5 >= e.totalPages)
      return Array.from({ length: e.totalPages }, (F, Y) => Y + 1);
    const C = Math.max(a() - n(), 1), M = Math.min(a() + n(), e.totalPages), m = C > 2, _ = M < e.totalPages - 1;
    if (!m && _) {
      const F = 3 + 2 * n();
      return [...Array.from({ length: F }, (T, u) => u + 1), "...", e.totalPages];
    }
    if (m && !_) {
      const F = 3 + 2 * n();
      return [1, "...", ...Array.from({ length: F }, (T, u) => e.totalPages - F + u + 1)];
    }
    return m && _ ? [1, "...", ...Array.from({ length: M - C + 1 }, (Y, T) => C + T), "...", e.totalPages] : [];
  }, k = (P) => {
    P < 1 || P > e.totalPages || P === a() || (a(P), e.onchange?.(P));
  }, b = L[i()], q = N[d()], Z = /* @__PURE__ */ we(S);
  var w = Rc();
  Je(w, (P) => ({ class: P, "aria-label": "Pagination", ...g }), [
    () => re("inline-flex items-center backdrop-blur-xl border rounded-2xl p-2", q.gap, b.container, z())
  ]);
  var A = l(w);
  {
    var W = (P) => {
      var C = Ec();
      C.__click = [Tc, k];
      var M = l(C);
      Pi(M, {
        get size() {
          return q.icon;
        }
      }), Ie(C, (m, _) => jellyHover?.(m, _), () => ({
        enabled: p() && a() !== 1,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), D(
        (m) => {
          C.disabled = a() === 1, U(C, 1, m);
        },
        [
          () => oe(re("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, b.button, a() === 1 && b.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(P, C);
    };
    x(A, (P) => {
      y() && P(W);
    });
  }
  var H = f(A, 2);
  H.__click = [Mc, k, a];
  var j = l(H);
  ka(j, {
    get size() {
      return q.icon;
    }
  }), Ie(H, (P, C) => jellyHover?.(P, C), () => ({
    enabled: p() && a() !== 1,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var G = f(H, 2);
  Xe(G, 17, () => t(Z), Fr, (P, C) => {
    var M = Ce(), m = ge(M);
    {
      var _ = (Y) => {
        var T = Ac();
        D((u) => U(T, 1, u), [
          () => oe(re("flex items-center justify-center", q.button, "opacity-50"))
        ]), o(Y, T);
      }, F = (Y) => {
        var T = Ic();
        T.__click = [zc, k, C];
        var u = l(T);
        Ie(T, (h, te) => jellyHover?.(h, te), () => ({
          enabled: p() && t(C) !== a(),
          scale: 1.05,
          duration: 200,
          borderRadius: "8px"
        })), D(
          (h) => {
            U(T, 1, h), ye(T, "aria-label", `Go to page ${t(C)}`), ye(T, "aria-current", t(C) === a() ? "page" : void 0), le(u, t(C));
          },
          [
            () => oe(re("flex items-center justify-center rounded-lg border transition-all duration-200 font-medium", q.button, t(C) === a() ? b.active : b.button, t(C) === a() && v() && b.glow, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]
        ), o(Y, T);
      };
      x(m, (Y) => {
        t(C) === "..." ? Y(_) : Y(F, !1);
      });
    }
    o(P, M);
  });
  var B = f(G, 2);
  B.__click = [Pc, k, a];
  var I = l(B);
  Vr(I, {
    get size() {
      return q.icon;
    }
  }), Ie(B, (P, C) => jellyHover?.(P, C), () => ({
    enabled: p() && a() !== e.totalPages,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var O = f(B, 2);
  {
    var R = (P) => {
      var C = Dc();
      C.__click = [Lc, k, e];
      var M = l(C);
      Li(M, {
        get size() {
          return q.icon;
        }
      }), Ie(C, (m, _) => jellyHover?.(m, _), () => ({
        enabled: p() && a() !== e.totalPages,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), D(
        (m) => {
          C.disabled = a() === e.totalPages, U(C, 1, m);
        },
        [
          () => oe(re("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, b.button, a() === e.totalPages && b.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(P, C);
    };
    x(O, (P) => {
      y() && P(R);
    });
  }
  D(
    (P, C) => {
      H.disabled = a() === 1, U(H, 1, P), B.disabled = a() === e.totalPages, U(B, 1, C);
    },
    [
      () => oe(re("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, b.button, a() === 1 && b.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20")),
      () => oe(re("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, b.button, a() === e.totalPages && b.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
    ]
  ), o(r, w), Ye();
}
gt(["click"]);
var jc = /* @__PURE__ */ c("<span><!></span>"), Nc = /* @__PURE__ */ c('<div class="flex justify-between items-center svelte-b8e192"><label class="text-sm font-medium text-white svelte-b8e192"> </label> <!></div>'), qc = /* @__PURE__ */ c('<div role="progressbar" aria-valuemin="0"><div></div></div>'), Oc = /* @__PURE__ */ c("<div><!></div>"), Fc = /* @__PURE__ */ c('<div role="progressbar" aria-valuemin="0"><svg class="transform -rotate-90 svelte-b8e192"><circle stroke="currentColor" fill="transparent" class="text-white/10 svelte-b8e192"></circle><circle stroke="currentColor" fill="transparent" stroke-linecap="round"></circle></svg> <!></div>'), Bc = /* @__PURE__ */ c("<div><!> <!></div>");
const Hc = {
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
function lx(r, e) {
  Ue(e, !0), $e(r, Hc);
  const a = s(e, "value", 3, 0), n = s(e, "max", 3, 100), i = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), v = s(e, "type", 3, "linear"), p = s(e, "blur", 3, "md"), y = s(e, "showValue", 3, !1), z = s(e, "showPercentage", 3, !1), g = s(e, "indeterminate", 3, !1), L = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), S = s(e, "class", 3, ""), k = /* @__PURE__ */ ct(e, [
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
  ]), b = `progress-${Math.random().toString(36).substr(2, 9)}`, q = /* @__PURE__ */ we(() => g() ? 0 : Math.min(100, Math.max(0, a() / n() * 100))), Z = {
    sm: { linear: "h-1", circular: "w-8 h-8", text: "text-xs" },
    md: { linear: "h-2", circular: "w-12 h-12", text: "text-sm" },
    lg: { linear: "h-3", circular: "w-16 h-16", text: "text-base" }
  }, w = {
    default: { track: "bg-white/10", fill: "bg-blue-500" },
    glass: {
      track: "glass-subtle",
      fill: "bg-blue-500/80 backdrop-blur-sm"
    },
    terminal: { track: "bg-terminal-green/20", fill: "bg-terminal-green" }
  }, A = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, W = re("relative overflow-hidden rounded-full", Z[i()][v()], w[d()].track, d() === "glass" && A[p()]), H = re("h-full transition-all duration-500 ease-out rounded-full", w[d()].fill, g() && "animate-pulse"), j = v() === "circular" ? parseInt(Z[i()].circular.split(" ")[0].slice(2)) * 4 : 0, G = Math.max(2, j / 8), B = (j - G) / 2, I = 2 * Math.PI * B, O = I, R = /* @__PURE__ */ we(() => I - t(q) / 100 * I);
  bt(() => {
    $t("Progress", "small");
  });
  var P = Bc();
  Je(P, () => ({ class: "w-full space-y-2", ...k }), void 0, void 0, "svelte-b8e192");
  var C = l(P);
  {
    var M = (Y) => {
      var T = Nc(), u = l(T), h = l(u), te = f(u, 2);
      {
        var ie = (ce) => {
          var de = jc(), ee = l(de);
          {
            var V = (E) => {
              var Q = Ct();
              D(($) => le(Q, `${$ ?? ""}%`), [() => t(q).toFixed(0)]), o(E, Q);
            }, ae = (E) => {
              var Q = Ce(), $ = ge(Q);
              {
                var J = (se) => {
                  var X = Ct();
                  D(() => le(X, `${a() ?? ""}/${n() ?? ""}`)), o(se, X);
                };
                x(
                  $,
                  (se) => {
                    y() && se(J);
                  },
                  !0
                );
              }
              o(E, Q);
            };
            x(ee, (E) => {
              z() ? E(V) : E(ae, !1);
            });
          }
          D((E) => U(de, 1, E, "svelte-b8e192"), [
            () => oe(re("font-medium text-white/80", Z[i()].text))
          ]), o(ce, de);
        };
        x(te, (ce) => {
          (y() || z()) && ce(ie);
        });
      }
      D(() => {
        ye(u, "id", `progress-label-${b}`), ye(u, "for", `progress-${b}`), le(h, e.label);
      }), o(Y, T);
    };
    x(C, (Y) => {
      e.label && Y(M);
    });
  }
  var m = f(C, 2);
  {
    var _ = (Y) => {
      var T = qc(), u = l(T);
      let h;
      Ie(u, (te, ie) => Tt?.(te, ie), () => L() && !N() ? { blur: p(), opacity: "subtle" } : void 0), D(
        (te, ie) => {
          ye(T, "id", `progress-${b}`), U(T, 1, te, "svelte-b8e192"), ye(T, "aria-valuemax", n()), ye(T, "aria-valuenow", g() ? void 0 : a()), ye(T, "aria-label", e.label ? void 0 : "Progress"), ye(T, "aria-labelledby", e.label ? `progress-label-${b}` : void 0), U(u, 1, oe(H), "svelte-b8e192"), h = ut(u, "", h, ie);
        },
        [
          () => oe(re(W, S())),
          () => ({
            width: g() ? "30%" : `${t(q)}%`,
            animation: g() && !N() ? "progress-indeterminate 2s ease-in-out infinite" : void 0
          })
        ]
      ), o(Y, T);
    }, F = (Y) => {
      var T = Fc(), u = l(T), h = l(u), te = f(h);
      let ie;
      var ce = f(u, 2);
      {
        var de = (ee) => {
          var V = Oc(), ae = l(V);
          {
            var E = ($) => {
              var J = Ct();
              D((se) => le(J, `${se ?? ""}%`), [() => t(q).toFixed(0)]), o($, J);
            }, Q = ($) => {
              var J = Ce(), se = ge(J);
              {
                var X = (ne) => {
                  var ue = Ct();
                  D(() => le(ue, a())), o(ne, ue);
                };
                x(
                  se,
                  (ne) => {
                    y() && ne(X);
                  },
                  !0
                );
              }
              o($, J);
            };
            x(ae, ($) => {
              z() ? $(E) : $(Q, !1);
            });
          }
          D(($) => U(V, 1, $, "svelte-b8e192"), [
            () => oe(re("absolute inset-0 flex items-center justify-center font-medium text-white", Z[i()].text))
          ]), o(ee, V);
        };
        x(ce, (ee) => {
          (y() || z()) && ee(de);
        });
      }
      D(
        (ee, V) => {
          U(T, 1, ee, "svelte-b8e192"), ye(T, "aria-valuemax", n()), ye(T, "aria-valuenow", g() ? void 0 : a()), ye(T, "aria-label", e.label || "Progress"), ye(u, "width", j), ye(u, "height", j), ye(h, "cx", j / 2), ye(h, "cy", j / 2), ye(h, "r", B), ye(h, "stroke-width", G), ye(te, "cx", j / 2), ye(te, "cy", j / 2), ye(te, "r", B), ye(te, "stroke-width", G), ye(te, "stroke-dasharray", O), ye(te, "stroke-dashoffset", g() ? O * 0.75 : t(R)), ie = U(te, 0, "text-blue-500 transition-all duration-500 ease-out svelte-b8e192", null, ie, V);
        },
        [
          () => oe(re("relative inline-flex items-center justify-center", Z[i()].circular, S())),
          () => ({ "animate-spin": g() && !N() })
        ]
      ), o(Y, T);
    };
    x(m, (Y) => {
      v() === "linear" ? Y(_) : Y(F, !1);
    });
  }
  o(r, P), Ye();
}
var Vc = (r, e, a) => !t(e).disabled && a(t(e).value), Gc = /* @__PURE__ */ c("<div></div>"), Uc = /* @__PURE__ */ c("<span> </span>"), Yc = /* @__PURE__ */ c('<label><input type="radio" class="sr-only svelte-mbuql4"/> <div><!></div> <div class="flex flex-col svelte-mbuql4"><span> </span> <!></div></label>'), Wc = /* @__PURE__ */ c('<p class="text-red-400 text-sm mt-2 animate-pulse svelte-mbuql4"> </p>'), Kc = /* @__PURE__ */ c("<div><!> <!></div>");
const Xc = {
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
function sx(r, e) {
  Ue(e, !0), $e(r, Xc);
  let a = s(e, "value", 15), n = s(e, "variant", 3, "glass"), i = s(e, "size", 3, "md"), d = s(e, "orientation", 3, "vertical"), v = s(e, "animated", 3, !0), p = s(e, "glow", 3, !1), y = s(e, "jelly", 3, !0), z = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
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
  const L = (W) => {
    a(W), e.onchange?.(W);
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
  }, S = {
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
  }, k = N[n()], b = S[i()];
  var q = Kc();
  Je(
    q,
    (W) => ({ class: W, ...g }),
    [
      () => re("relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300", k.container, d() === "horizontal" ? "inline-flex flex-row gap-6" : "flex flex-col gap-3", e.error && "border-red-500/50", z())
    ],
    void 0,
    "svelte-mbuql4"
  );
  var Z = l(q);
  Xe(Z, 17, () => e.options, (W) => W.value, (W, H) => {
    var j = Yc(), G = l(j);
    G.__change = [Vc, H, L];
    var B = f(G, 2), I = l(B);
    {
      var O = (_) => {
        var F = Gc();
        D((Y) => U(F, 1, Y, "svelte-mbuql4"), [
          () => oe(re("rounded-full bg-white transition-all duration-300", b.dot, v() && "animate-pulse"))
        ]), o(_, F);
      };
      x(I, (_) => {
        a() === t(H).value && _(O);
      });
    }
    Ie(B, (_, F) => jt?.(_, F), () => ({
      enabled: v() && a() === t(H).value,
      intensity: 0.05,
      speed: 2e3
    }));
    var R = f(B, 2), P = l(R), C = l(P), M = f(P, 2);
    {
      var m = (_) => {
        var F = Uc(), Y = l(F);
        D(
          (T) => {
            U(F, 1, T, "svelte-mbuql4"), le(Y, t(H).description);
          },
          [
            () => oe(re("text-xs opacity-60 mt-0.5", k.label))
          ]
        ), o(_, F);
      };
      x(M, (_) => {
        t(H).description && _(m);
      });
    }
    Ie(j, (_, F) => jellyHover?.(_, F), () => ({
      enabled: y() && !t(H).disabled,
      scale: 1.02,
      duration: 200,
      borderRadius: "16px"
    })), D(
      (_, F, Y) => {
        U(j, 1, _, "svelte-mbuql4"), ye(G, "name", e.name), ws(G, t(H).value), Zt(G, a() === t(H).value), G.disabled = t(H).disabled, U(B, 1, F, "svelte-mbuql4"), U(P, 1, Y, "svelte-mbuql4"), le(C, t(H).label);
      },
      [
        () => oe(re("relative flex items-center cursor-pointer group", b.gap, t(H).disabled && "opacity-50 cursor-not-allowed")),
        () => oe(re("relative rounded-full border-2 transition-all duration-300 flex items-center justify-center", b.radio, k.radio, a() === t(H).value && k.checked, a() === t(H).value && p() && k.glow, v() && "transform-gpu will-change-transform", !t(H).disabled && "group-hover:scale-110")),
        () => oe(re("font-medium transition-colors duration-200", b.label, k.label, !t(H).disabled && "group-hover:text-white"))
      ]
    ), o(W, j);
  });
  var w = f(Z, 2);
  {
    var A = (W) => {
      var H = Wc(), j = l(H);
      D(() => le(j, e.error)), o(W, H);
    };
    x(w, (W) => {
      e.error && W(A);
    });
  }
  o(r, q), Ye();
}
gt(["change"]);
var Zc = /* @__PURE__ */ c('<label class="block text-sm font-medium text-white/80 mb-2 svelte-gc8g7h"> </label>'), Qc = (r, e, a) => e(t(a)), Jc = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, $c = /* @__PURE__ */ c('<li role="option" tabindex="-1"> </li>'), ev = /* @__PURE__ */ c('<ul role="listbox"></ul>'), tv = /* @__PURE__ */ c('<!> <div><span class="truncate svelte-gc8g7h"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-gc8g7h"></path></svg></div> <!>', 1);
const rv = {
  hash: "svelte-gc8g7h",
  code: `div[role="combobox"].svelte-gc8g7h {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-gc8g7h {transition:none;
            animation: none;}
    }`
};
function dx(r, e) {
  Ue(e, !0), $e(r, rv);
  let a = s(e, "options", 19, () => []), n = s(e, "value", 7, ""), i = s(e, "placeholder", 3, "Select an option..."), d = s(e, "disabled", 3, !1), v = s(e, "size", 3, "md"), p = s(e, "variant", 3, "glass"), y = s(e, "blur", 3, "md"), z = s(e, "animate", 3, !0), g = s(e, "liquid", 3, !1), L = s(e, "magnetic", 3, !1), N = s(e, "jelly", 3, !1), S = s(e, "glow", 3, !1), k = s(e, "reduceMotion", 3, !1), b = s(e, "label", 3, ""), q = s(e, "class", 3, ""), Z = /* @__PURE__ */ ct(e, [
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
  ]), w = /* @__PURE__ */ _e(!1), A = /* @__PURE__ */ _e(void 0), W = /* @__PURE__ */ _e(void 0), H = /* @__PURE__ */ _e(-1);
  const j = `select-${Math.random().toString(36).substr(2, 9)}`, G = b() ? `${j}-label` : void 0, B = `${j}-listbox`, I = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
  }, O = {
    default: "bg-white/5 border border-white/10 text-white",
    glass: "glass-subtle border border-white/20 text-white",
    terminal: "terminal text-green-300",
    liquid: "bg-gradient-to-r from-white/5 to-white/15 border border-white/20 text-white backdrop-blur-md"
  }, R = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, P = /* @__PURE__ */ we(() => a().find((J) => J.value === n())), C = re("relative flex items-center justify-between rounded-brand-md cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "transition-all duration-200", I[v()], O[p()], p() === "glass" && R[y()], g() && "backdrop-blur-md hover:backdrop-blur-lg", S() && "focus:shadow-lg focus:shadow-brand-primary/20", N() && !d() && "hover:scale-105 active:scale-95", d() && "opacity-50 cursor-not-allowed", q()), M = re("absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg", "max-h-60 overflow-auto", O[p()], p() === "glass" && `${R[y()]} border border-white/20`);
  function m(J) {
    if (!d())
      switch (J.key) {
        case "Enter":
        case " ":
          J.preventDefault(), t(w) && t(H) >= 0 ? u(a()[t(H)]) : F();
          break;
        case "Escape":
          t(w) && (J.preventDefault(), T());
          break;
        case "ArrowDown":
          J.preventDefault(), t(w) ? _(1) : Y();
          break;
        case "ArrowUp":
          J.preventDefault(), t(w) ? _(-1) : Y();
          break;
        case "Home":
          t(w) && (J.preventDefault(), K(H, 0));
          break;
        case "End":
          t(w) && (J.preventDefault(), K(H, a().length - 1));
          break;
      }
  }
  function _(J) {
    const se = a().filter((ne) => !ne.disabled);
    if (se.length === 0) return;
    let X = t(H) + J;
    X < 0 ? X = se.length - 1 : X >= se.length && (X = 0), K(H, a().findIndex((ne) => ne === se[X]), !0);
  }
  function F() {
    d() || (K(w, !t(w)), t(w) && K(
      H,
      n() ? a().findIndex((J) => J.value === n()) : -1,
      !0
    ));
  }
  function Y() {
    d() || (K(w, !0), K(
      H,
      n() ? a().findIndex((J) => J.value === n()) : -1,
      !0
    ));
  }
  function T() {
    K(w, !1), K(H, -1);
  }
  function u(J) {
    J.disabled || (n(J.value), e.onValueChange?.(J.value), T());
  }
  function h(J) {
    t(A) && !t(A).contains(J.target) && T();
  }
  bt(() => {
    if (t(w))
      return document.addEventListener("click", h), () => document.removeEventListener("click", h);
  }), bt(() => {
    $t("Select");
  });
  var te = tv(), ie = ge(te);
  {
    var ce = (J) => {
      var se = Zc(), X = l(se);
      D(() => {
        ye(se, "id", G), ye(se, "for", j), le(X, b());
      }), o(J, se);
    };
    x(ie, (J) => {
      b() && J(ce);
    });
  }
  var de = f(ie, 2);
  Je(
    de,
    () => ({
      id: j,
      class: C,
      role: "combobox",
      "aria-expanded": t(w),
      "aria-haspopup": "listbox",
      "aria-labelledby": G || e["aria-label"],
      "aria-activedescendant": t(H) > -1 ? `${j}-option-${t(H)}` : void 0,
      tabindex: d() ? -1 : 0,
      onkeydown: m,
      onclick: F,
      ...Z
    }),
    void 0,
    void 0,
    "svelte-gc8g7h"
  );
  var ee = l(de), V = l(ee), ae = f(ee, 2);
  let E;
  rt(de, (J) => K(A, J), () => t(A)), Ie(de, (J, se) => pt?.(J, se), () => (L() || N()) && !d() && !k() ? {
    strength: L() ? 0.1 : 0.08,
    distance: L() ? 40 : 20
  } : void 0);
  var Q = f(de, 2);
  {
    var $ = (J) => {
      var se = ev();
      Xe(se, 23, a, (X) => X.value, (X, ne, ue) => {
        var ve = $c();
        ve.__click = [Qc, u, ne], ve.__keydown = [Jc, u, ne];
        var pe = l(ve);
        D(
          (fe) => {
            ye(ve, "id", `${j}-option-${t(ue)}`), U(ve, 1, fe, "svelte-gc8g7h"), ye(ve, "aria-selected", n() === t(ne).value), ye(ve, "aria-disabled", t(ne).disabled), le(pe, t(ne).label);
          },
          [
            () => oe(re("px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10", t(H) === t(ue) && "bg-white/20", t(ne).disabled && "opacity-50 cursor-not-allowed"))
          ]
        ), Ot("mouseenter", ve, () => !t(ne).disabled && K(H, t(ue), !0)), o(X, ve);
      }), rt(se, (X) => K(W, X), () => t(W)), D(() => {
        U(se, 1, oe(M), "svelte-gc8g7h"), ye(se, "id", B), ye(se, "aria-labelledby", G || e["aria-label"]);
      }), tt(1, se, () => _t, () => ({
        direction: "down",
        distance: 10,
        duration: z() && !k() ? 150 : 0
      })), tt(2, se, () => _t, () => ({
        direction: "up",
        distance: 10,
        duration: z() && !k() ? 100 : 0
      })), o(J, se);
    };
    x(Q, (J) => {
      t(w) && J($);
    });
  }
  D(
    (J) => {
      le(V, t(P)?.label || i()), E = U(ae, 0, "w-4 h-4 ml-2 transition-transform duration-200 svelte-gc8g7h", null, E, J);
    },
    [() => ({ "rotate-180": t(w) })]
  ), o(r, te), Ye();
}
gt(["click", "keydown"]);
var av = (r, e, a) => {
  r.stopPropagation(), e(t(a).value);
}, nv = /* @__PURE__ */ c('<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md"> <button class="hover:text-red-300"><!></button></span>'), ov = /* @__PURE__ */ c('<span class="text-xs opacity-70"> </span>'), iv = /* @__PURE__ */ c('<div class="flex flex-wrap gap-1"><!> <!></div>'), lv = /* @__PURE__ */ c("<span> </span>"), sv = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>'), dv = (r, e) => {
  r.stopPropagation(), e();
}, cv = /* @__PURE__ */ c('<button class="p-1 hover:bg-white/10 rounded transition-colors"><!></button>'), vv = /* @__PURE__ */ c('<div class="p-2 border-b border-white/10"><div class="relative"><!> <input placeholder="Search options..." autocomplete="off"/></div></div>'), uv = /* @__PURE__ */ c("<div> </div>"), fv = /* @__PURE__ */ c('<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5"> </div>'), bv = (r, e, a) => e(t(a)), gv = (r, e, a) => r.key === "Enter" && e(t(a)), mv = /* @__PURE__ */ c('<div class="text-xs opacity-60 mt-0.5"> </div>'), hv = /* @__PURE__ */ c("<div><!></div>"), pv = /* @__PURE__ */ c('<div role="option"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div>'), xv = /* @__PURE__ */ c("<!> <!>", 1), _v = /* @__PURE__ */ c('<div><!> <div class="overflow-y-auto max-h-48 svelte-13k9go" role="listbox"><!></div></div>'), wv = /* @__PURE__ */ c('<p class="text-red-400 text-sm mt-1" role="alert"> </p>'), yv = /* @__PURE__ */ c('<div><div role="combobox" aria-haspopup="listbox"><div class="flex-1 truncate"><!></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!></div>');
const kv = {
  hash: "svelte-13k9go",
  code: ".overflow-y-auto.svelte-13k9go {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}"
};
function cx(r, e) {
  Ue(e, !0), $e(r, kv);
  let a = s(e, "value", 15), n = s(e, "placeholder", 3, "Select an option..."), i = s(e, "multiple", 3, !1), d = s(e, "searchable", 3, !1), v = s(e, "clearable", 3, !1), p = s(e, "disabled", 3, !1), y = s(e, "loading", 3, !1), z = s(e, "size", 3, "md"), g = s(e, "variant", 3, "glass"), L = s(e, "closeOnSelect", 3, !0), N = s(e, "class", 3, ""), S = /* @__PURE__ */ ct(e, [
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
  const k = At();
  let b = /* @__PURE__ */ _e(!1), q = /* @__PURE__ */ _e(""), Z = /* @__PURE__ */ _e(null), w = /* @__PURE__ */ _e(null), A = /* @__PURE__ */ _e(
    -1
    // mutated via keyboard handlers
  );
  const W = `select-${Math.random().toString(36).slice(2, 11)}`, H = /* @__PURE__ */ we(() => () => a() ? Array.isArray(a()) ? a() : [a()] : []), j = /* @__PURE__ */ we(() => () => {
    if (!t(q).trim()) return e.options;
    const X = t(q).toLowerCase();
    return e.options.filter((ne) => ne.label.toLowerCase().includes(X) || ne.description?.toLowerCase().includes(X));
  }), G = /* @__PURE__ */ we(() => () => {
    if (!e.groupBy) return { "": t(j)() };
    const X = {};
    return t(j)().forEach((ne) => {
      const ue = ne.group || "";
      X[ue] || (X[ue] = []), X[ue].push(ne);
    }), X;
  }), B = /* @__PURE__ */ we(() => () => t(H)().length === 0 ? n() : i() ? t(H)().length === 1 ? e.options.find((X) => X.value === t(H)()[0])?.label || "" : `${t(H)().length} selected` : e.options.find((X) => X.value === t(H)()[0])?.label || ""), I = {
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
  }, O = {
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
  }, R = I[z()], P = O[g()];
  bt(() => {
    t(G)(), t(B)(), v(), y(), e.error, N();
  });
  function C() {
    p() || (K(b, !t(b)), t(b) && d() && setTimeout(() => t(w)?.focus(), 0));
  }
  function M(X) {
    if (!X.disabled) {
      if (i()) {
        const ne = t(H)();
        if (ne.includes(X.value))
          a(ne.filter((ve) => ve !== X.value));
        else {
          if (e.maxSelections && ne.length >= e.maxSelections) return;
          a([...ne, X.value]);
        }
      } else
        a(X.value), L() && K(b, !1);
      k("change", { value: a(), option: X });
    }
  }
  function m() {
    a(i() ? [] : void 0), k("clear");
  }
  function _(X) {
    i() && a(t(H)().filter((ne) => ne !== X));
  }
  function F(X) {
    if (!p())
      switch (X.key) {
        case "Enter": {
          X.preventDefault(), t(b) && t(A) >= 0 && t(j)()[t(A)] ? M(t(j)()[t(A)]) : t(b) || C();
          break;
        }
        case "Escape": {
          t(b) && (K(b, !1), X.stopPropagation());
          break;
        }
        case "ArrowDown": {
          X.preventDefault(), t(b) ? K(A, Math.min(t(A) + 1, t(j)().length - 1), !0) : C();
          break;
        }
        case "ArrowUp": {
          X.preventDefault(), t(b) && K(A, Math.max(t(A) - 1, -1), !0);
          break;
        }
        case "Tab": {
          t(b) && K(b, !1);
          break;
        }
      }
  }
  function Y(X) {
    t(Z) && !t(Z).contains(X.target) && K(b, !1);
  }
  ht(() => (document.addEventListener("click", Y), () => document.removeEventListener("click", Y))), bt(() => {
    t(j)(), K(A, -1);
  });
  var T = yv();
  Je(T, (X) => ({ class: X, ...S }), [() => re("relative w-full", N())], void 0, "svelte-13k9go");
  var u = l(T);
  u.__click = C, u.__keydown = F;
  var h = l(u), te = l(h);
  {
    var ie = (X) => {
      var ne = iv(), ue = l(ne);
      Xe(ue, 16, () => t(H)().slice(0, 2), (fe) => fe, (fe, be) => {
        const me = /* @__PURE__ */ we(() => e.options.find((Re) => Re.value === be));
        var Te = Ce(), Pe = ge(Te);
        {
          var Fe = (Re) => {
            var ke = nv(), xe = l(ke), Ee = f(xe);
            Ee.__click = [av, _, me];
            var Ne = l(Ee);
            ya(Ne, { size: 12 }), D(() => le(xe, `${t(me).label ?? ""} `)), o(Re, ke);
          };
          x(Pe, (Re) => {
            t(me) && Re(Fe);
          });
        }
        o(fe, Te);
      });
      var ve = f(ue, 2);
      {
        var pe = (fe) => {
          var be = ov(), me = l(be);
          D((Te) => le(me, `+${Te ?? ""} more`), [() => t(H)().length - 2]), o(fe, be);
        };
        x(ve, (fe) => {
          t(H)().length > 2 && fe(pe);
        });
      }
      o(X, ne);
    }, ce = (X) => {
      var ne = lv(), ue = l(ne);
      D(
        (ve, pe) => {
          U(ne, 1, ve, "svelte-13k9go"), le(ue, pe);
        },
        [
          () => oe(re(!t(H)().length && "opacity-60")),
          () => t(B)()
        ]
      ), o(X, ne);
    };
    x(te, (X) => {
      i() && t(H)().length > 1 ? X(ie) : X(ce, !1);
    });
  }
  var de = f(h, 2), ee = l(de);
  {
    var V = (X) => {
      var ne = sv();
      o(X, ne);
    }, ae = (X) => {
      var ne = Ce(), ue = ge(ne);
      {
        var ve = (pe) => {
          var fe = cv();
          fe.__click = [dv, m];
          var be = l(fe);
          ya(be, { size: 16 }), o(pe, fe);
        };
        x(
          ue,
          (pe) => {
            v() && t(H)().length > 0 && pe(ve);
          },
          !0
        );
      }
      o(X, ne);
    };
    x(ee, (X) => {
      y() ? X(V) : X(ae, !1);
    });
  }
  var E = f(ee, 2);
  {
    let X = /* @__PURE__ */ we(() => re("transition-transform duration-200", t(b) && "rotate-180"));
    _n(E, {
      size: 16,
      get class() {
        return t(X);
      }
    });
  }
  var Q = f(u, 2);
  {
    var $ = (X) => {
      var ne = _v(), ue = l(ne);
      {
        var ve = (Te) => {
          var Pe = vv(), Fe = l(Pe), Re = l(Fe);
          Di(Re, {
            size: 16,
            class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
          });
          var ke = f(Re, 2);
          rt(ke, (xe) => K(w, xe), () => t(w)), D((xe) => U(ke, 1, xe, "svelte-13k9go"), [
            () => oe(re("w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50", P.search))
          ]), _r(ke, () => t(q), (xe) => K(q, xe)), o(Te, Pe);
        };
        x(ue, (Te) => {
          d() && Te(ve);
        });
      }
      var pe = f(ue, 2), fe = l(pe);
      {
        var be = (Te) => {
          var Pe = uv(), Fe = l(Pe);
          D(
            (Re) => {
              U(Pe, 1, Re, "svelte-13k9go"), le(Fe, t(q) ? "No options found" : "No options available");
            },
            [
              () => oe(re("text-center py-4 opacity-60", R.option))
            ]
          ), o(Te, Pe);
        }, me = (Te) => {
          var Pe = Ce(), Fe = ge(Pe);
          Xe(Fe, 17, () => Object.entries(t(G)()), ([Re, ke]) => Re, (Re, ke) => {
            var xe = /* @__PURE__ */ we(() => na(t(ke), 2));
            let Ee = () => t(xe)[0], Ne = () => t(xe)[1];
            var Ae = xv(), Le = ge(Ae);
            {
              var Oe = (Se) => {
                var he = fv(), ze = l(he);
                D(() => le(ze, Ee())), o(Se, he);
              };
              x(Le, (Se) => {
                Ee() && Object.keys(t(G)()).length > 1 && Se(Oe);
              });
            }
            var Be = f(Le, 2);
            Xe(Be, 17, Ne, (Se) => Se.value, (Se, he) => {
              const ze = /* @__PURE__ */ we(() => t(H)().includes(t(he).value)), De = /* @__PURE__ */ we(() => t(j)().indexOf(t(he)) === t(A));
              var Ve = pv();
              Ve.__click = [bv, M, he], Ve.__keydown = [gv, M, he];
              var et = l(Ve), Qe = l(et), ot = l(Qe), vt = f(Qe, 2);
              {
                var at = (qe) => {
                  var Ge = mv(), nt = l(Ge);
                  D(() => le(nt, t(he).description)), o(qe, Ge);
                };
                x(vt, (qe) => {
                  t(he).description && qe(at);
                });
              }
              var it = f(et, 2);
              {
                var Ze = (qe) => {
                  var Ge = hv(), nt = l(Ge);
                  {
                    var xt = (kt) => {
                      sn(kt, { size: 12, class: "text-white" });
                    };
                    x(nt, (kt) => {
                      t(ze) && kt(xt);
                    });
                  }
                  D((kt) => U(Ge, 1, kt, "svelte-13k9go"), [
                    () => oe(re("w-4 h-4 border rounded flex items-center justify-center", t(ze) ? "bg-blue-500 border-blue-500" : "border-white/20"))
                  ]), o(qe, Ge);
                }, je = (qe) => {
                  var Ge = Ce(), nt = ge(Ge);
                  {
                    var xt = (kt) => {
                      sn(kt, { size: 16, class: "text-blue-400" });
                    };
                    x(
                      nt,
                      (kt) => {
                        t(ze) && kt(xt);
                      },
                      !0
                    );
                  }
                  o(qe, Ge);
                };
                x(it, (qe) => {
                  i() ? qe(Ze) : qe(je, !1);
                });
              }
              D(
                (qe) => {
                  U(Ve, 1, qe, "svelte-13k9go"), ye(Ve, "aria-selected", t(ze)), ye(Ve, "tabindex", t(he).disabled ? -1 : 0), le(ot, t(he).label);
                },
                [
                  () => oe(re(
                    "flex items-center justify-between cursor-pointer transition-colors",
                    R.option,
                    t(he).disabled ? "opacity-50 cursor-not-allowed" : P.option,
                    t(ze) && P.optionSelected,
                    t(De) && "bg-white/5"
                  ))
                ]
              ), o(Se, Ve);
            }), o(Re, Ae);
          }), o(Te, Pe);
        };
        x(fe, (Te) => {
          t(j)().length === 0 ? Te(be) : Te(me, !1);
        });
      }
      D(
        (Te) => {
          U(ne, 1, Te, "svelte-13k9go"), ye(pe, "id", `${W}-listbox`);
        },
        [
          () => oe(re("absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden", P.dropdown, R.dropdown))
        ]
      ), o(X, ne);
    };
    x(Q, (X) => {
      t(b) && X($);
    });
  }
  var J = f(Q, 2);
  {
    var se = (X) => {
      var ne = wv(), ue = l(ne);
      D(() => le(ue, e.error)), o(X, ne);
    };
    x(J, (X) => {
      e.error && X(se);
    });
  }
  rt(T, (X) => K(Z, X), () => t(Z)), D(
    (X) => {
      U(u, 1, X, "svelte-13k9go"), ye(u, "tabindex", p() ? -1 : 0), ye(u, "aria-expanded", t(b)), ye(u, "aria-controls", `${W}-listbox`), ye(u, "aria-labelledby", W);
    },
    [
      () => oe(re("relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer", R.trigger, P.trigger, p() && "opacity-50 cursor-not-allowed", e.error && "border-red-500/50", t(b) && "ring-2 ring-blue-400/50"))
    ]
  ), o(r, T), Ye();
}
gt(["click", "keydown"]);
var Cv = /* @__PURE__ */ c("<div></div>"), Sv = /* @__PURE__ */ c("<div><!></div>"), Tv = /* @__PURE__ */ c("<div></div>"), Ev = /* @__PURE__ */ c("<div></div>"), Mv = /* @__PURE__ */ c("<div><!></div>");
const Av = {
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
function vx(r, e) {
  Ue(e, !0), $e(r, Av);
  const a = s(e, "variant", 3, "glass"), n = s(e, "type", 3, "text"), i = s(e, "lines", 3, 3), d = s(e, "animated", 3, !0), v = s(e, "glow", 3, !1), p = s(e, "speed", 3, "normal"), y = s(e, "class", 3, ""), z = s(e, "rounded", 3, !0), g = /* @__PURE__ */ ct(e, [
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
  }, S = {
    text: { width: "w-full", height: "h-4", spacing: "space-y-3" },
    avatar: { width: "w-12", height: "h-12", rounded: "rounded-full" },
    card: { width: "w-full", height: "h-48", rounded: "rounded-2xl" },
    button: { width: "w-24", height: "h-10", rounded: "rounded-xl" },
    image: { width: "w-full", height: "h-64", rounded: "rounded-2xl" },
    paragraph: { width: "w-full", height: "h-3", spacing: "space-y-2" }
  }, k = L[a()], b = S[n()], q = N[p()], Z = /* @__PURE__ */ we(() => n() === "text" || n() === "paragraph" ? Array.from({ length: i() }, (j, G) => G === i() - 1 ? "60%" : `${85 + Math.floor(Math.random() * 15)}%`) : []);
  var w = Ce(), A = ge(w);
  {
    var W = (j) => {
      var G = Tv();
      Je(G, (B) => ({ class: B, ...g }), [() => re(b.spacing, y())], void 0, "svelte-1jcbe1x"), Xe(G, 21, () => t(Z), Fr, (B, I, O) => {
        var R = Sv(), P = l(R);
        {
          var C = (M) => {
            var m = Cv();
            D((_) => U(m, 1, _, "svelte-1jcbe1x"), [
              () => oe(re("absolute inset-0 bg-gradient-to-r", k.shimmer, q, "animate-shimmer"))
            ]), o(M, m);
          };
          x(P, (M) => {
            d() && M(C);
          });
        }
        Ie(R, (M, m) => jt?.(M, m), () => ({
          enabled: d() && a() === "liquid",
          intensity: 0.02,
          speed: 3e3
        })), D(
          (M) => {
            U(R, 1, M, "svelte-1jcbe1x"), ut(R, `width: ${(e.width || t(I)) ?? ""}`);
          },
          [
            () => oe(re("relative overflow-hidden backdrop-blur-xl border", b.height, k.bg, k.border, v() && k.glow, z() && "rounded-lg", d() && "transform-gpu will-change-transform"))
          ]
        ), tt(3, R, () => _t, () => ({ duration: 200, delay: O * 50 })), o(B, R);
      }), o(j, G);
    }, H = (j) => {
      var G = Mv();
      Je(
        G,
        (O, R) => ({ class: O, ...g, [kr]: R }),
        [
          () => re("relative overflow-hidden backdrop-blur-xl border", b.width, b.height, k.bg, k.border, b.rounded || z() && "rounded-lg", v() && k.glow, d() && "transform-gpu will-change-transform", y()),
          () => ({ width: e.width, height: e.height })
        ],
        void 0,
        "svelte-1jcbe1x"
      );
      var B = l(G);
      {
        var I = (O) => {
          var R = Ev();
          D((P) => U(R, 1, P, "svelte-1jcbe1x"), [
            () => oe(re("absolute inset-0 bg-gradient-to-r", k.shimmer, q, "animate-shimmer"))
          ]), o(O, R);
        };
        x(B, (O) => {
          d() && O(I);
        });
      }
      Ie(G, (O, R) => jt?.(O, R), () => ({
        enabled: d() && a() === "liquid",
        intensity: 0.03,
        speed: 3e3
      })), tt(3, G, () => _t, () => ({ duration: 200 })), o(j, G);
    };
    x(A, (j) => {
      n() === "text" || n() === "paragraph" ? j(W) : j(H, !1);
    });
  }
  o(r, w), Ye();
}
function zv(r, e, a, n) {
  if (e()) return;
  K(a, !0), n(r);
  const i = (v) => n(v), d = () => {
    K(a, !1), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", d);
  };
  document.addEventListener("mousemove", i), document.addEventListener("mouseup", d);
}
var Iv = /* @__PURE__ */ c('<span class="ml-2 text-white/70 svelte-wpw1ph"> </span>'), Pv = /* @__PURE__ */ c("<label> <!></label>"), Lv = /* @__PURE__ */ c('<div class="absolute top-1/2 w-1 h-1 bg-white/50 rounded-full -translate-y-1/2 -translate-x-1/2 svelte-wpw1ph"></div>'), Dv = /* @__PURE__ */ c('<div class="flex justify-center mt-2 svelte-wpw1ph"><span> </span></div>'), Rv = /* @__PURE__ */ c('<div class="w-full space-y-2 svelte-wpw1ph"><!> <div><div role="slider"><div></div> <div></div> <!></div> <!></div></div>');
const jv = {
  hash: "svelte-wpw1ph",
  code: `div[role='slider'].svelte-wpw1ph {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-wpw1ph {transition:none;
			animation: none;will-change:auto;}
	}`
};
function ux(r, e) {
  Ue(e, !0), $e(r, jv);
  let a = s(e, "value", 7, 50), n = s(e, "min", 3, 0), i = s(e, "max", 3, 100), d = s(e, "step", 3, 1), v = s(e, "disabled", 3, !1), p = s(e, "size", 3, "md"), y = s(e, "variant", 3, "glass"), z = s(e, "blur", 3, "md"), g = s(e, "showValue", 3, !1), L = s(e, "showMarks", 3, !1), N = s(e, "marks", 19, () => []), S = s(e, "animate", 3, !0), k = s(e, "reduceMotion", 3, !1);
  s(e, "class", 3, "");
  let b = /* @__PURE__ */ ct(e, [
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
  ]), q = /* @__PURE__ */ _e(void 0), Z = /* @__PURE__ */ _e(void 0), w = /* @__PURE__ */ _e(!1), A = /* @__PURE__ */ _e(!1);
  const W = `slider-${Math.random().toString(36).substr(2, 9)}`, H = {
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
  }, G = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = /* @__PURE__ */ we(() => (a() - n()) / (i() - n()) * 100), I = re("relative w-full rounded-full cursor-pointer", H[p()].track, j[y()].track, y() === "glass" && G[z()], v() && "opacity-50 cursor-not-allowed"), O = re("absolute top-0 left-0 h-full rounded-full transition-all duration-200", j[y()].fill), R = /* @__PURE__ */ we(() => re("absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2", "hover:scale-110 active:scale-95", H[p()].thumb, j[y()].thumb, v() && "cursor-not-allowed hover:scale-100 active:scale-100", t(w) && "scale-110", t(A) && "ring-2 ring-blue-400/50"));
  function P(E) {
    if (v()) return;
    let Q = a();
    const $ = d() || 1, J = (i() - n()) / 10;
    switch (E.key) {
      case "ArrowRight":
      case "ArrowUp":
        E.preventDefault(), Q = Math.min(i(), a() + $);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        E.preventDefault(), Q = Math.max(n(), a() - $);
        break;
      case "PageUp":
        E.preventDefault(), Q = Math.min(i(), a() + J);
        break;
      case "PageDown":
        E.preventDefault(), Q = Math.max(n(), a() - J);
        break;
      case "Home":
        E.preventDefault(), Q = n();
        break;
      case "End":
        E.preventDefault(), Q = i();
        break;
    }
    Q !== a() && (a(Q), e.onValueChange?.(Q));
  }
  function C(E) {
    if (!t(Z) || v()) return;
    const Q = t(Z).getBoundingClientRect(), $ = E.clientX - Q.left, J = Math.max(0, Math.min(100, $ / Q.width * 100)), se = n() + J / 100 * (i() - n()), X = d() ? Math.round(se / d()) * d() : se, ne = Math.max(n(), Math.min(i(), X));
    ne !== a() && (a(ne), e.onValueChange?.(ne));
  }
  function M() {
    K(A, !0);
  }
  function m() {
    K(A, !1);
  }
  bt(() => {
    $t("Slider", "medium");
  });
  var _ = Rv(), F = l(_);
  {
    var Y = (E) => {
      var Q = Pv();
      let $;
      var J = l(Q), se = f(J);
      {
        var X = (ne) => {
          var ue = Iv(), ve = l(ue);
          D(() => le(ve, `(${a() ?? ""})`)), o(ne, ue);
        };
        x(se, (ne) => {
          g() && ne(X);
        });
      }
      D(
        (ne) => {
          ye(Q, "id", `slider-label-${W}`), ye(Q, "for", W), $ = U(Q, 1, "block text-sm font-medium text-white svelte-wpw1ph", null, $, ne), le(J, `${e.label ?? ""} `);
        },
        [() => ({ "opacity-50": v() })]
      ), o(E, Q);
    };
    x(F, (E) => {
      e.label && E(Y);
    });
  }
  var T = f(F, 2);
  Je(T, () => ({ class: "relative w-full py-2", ...b }), void 0, void 0, "svelte-wpw1ph");
  var u = l(T);
  u.__mousedown = [zv, v, w, C], u.__keydown = P;
  var h = l(u);
  let te;
  var ie = f(h, 2);
  let ce;
  Ie(ie, (E, Q) => Wt?.(E, Q), () => S() && !k() && t(w) ? { scale: 1.1, duration: 100 } : void 0);
  var de = f(ie, 2);
  {
    var ee = (E) => {
      var Q = Ce(), $ = ge(Q);
      Xe($, 16, N, (J) => J, (J, se) => {
        const X = /* @__PURE__ */ we(() => (se - n()) / (i() - n()) * 100);
        var ne = Lv();
        let ue;
        D((ve) => ue = ut(ne, "", ue, ve), [() => ({ left: `${t(X) ?? ""}%` })]), o(J, ne);
      }), o(E, Q);
    };
    x(de, (E) => {
      L() && N().length > 0 && E(ee);
    });
  }
  rt(u, (E) => K(Z, E), () => t(Z));
  var V = f(u, 2);
  {
    var ae = (E) => {
      var Q = Dv(), $ = l(Q), J = l($);
      D(
        (se) => {
          U($, 1, se, "svelte-wpw1ph"), le(J, a());
        },
        [
          () => oe(re("font-medium text-white/80", H[p()].value))
        ]
      ), o(E, Q);
    };
    x(V, (E) => {
      g() && E(ae);
    });
  }
  rt(T, (E) => K(q, E), () => t(q)), D(
    (E, Q) => {
      ye(u, "id", W), U(u, 1, oe(I), "svelte-wpw1ph"), ye(u, "aria-valuemin", n()), ye(u, "aria-valuemax", i()), ye(u, "aria-valuenow", a()), ye(u, "aria-labelledby", e.label ? `slider-label-${W}` : void 0), ye(u, "aria-label", e.label ? void 0 : "Slider"), ye(u, "tabindex", v() ? -1 : 0), U(h, 1, oe(O), "svelte-wpw1ph"), te = ut(h, "", te, E), U(ie, 1, oe(t(R)), "svelte-wpw1ph"), ce = ut(ie, "", ce, Q);
    },
    [
      () => ({ width: `${t(B) ?? ""}%` }),
      () => ({
        left: `${t(B) ?? ""}%`,
        transform: "translateX(-50%) translateY(-50%)"
      })
    ]
  ), Ot("focus", u, M), Ot("blur", u, m), o(r, _), Ye();
}
gt(["mousedown", "keydown"]);
var Nv = /* @__PURE__ */ c("<label> </label>"), qv = /* @__PURE__ */ c("<p> </p>"), Ov = /* @__PURE__ */ c('<div class="flex flex-col"><!> <!></div>'), Fv = /* @__PURE__ */ c('<div class="flex items-center gap-3"><button><span></span></button> <!></div>');
const Bv = {
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
function fx(r, e) {
  Ue(e, !0), $e(r, Bv);
  let a = s(e, "checked", 7, !1), n = s(e, "disabled", 3, !1), i = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), v = s(e, "blur", 3, "md"), p = s(e, "animate", 3, !0), y = s(e, "liquid", 3, !1), z = s(e, "magnetic", 3, !1), g = s(e, "jelly", 3, !1), L = s(e, "glow", 3, !1), N = s(e, "reduceMotion", 3, !1), S = s(e, "class", 3, ""), k = /* @__PURE__ */ ct(e, [
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
  ]), b = /* @__PURE__ */ _e(void 0);
  const q = `switch-${Math.random().toString(36).substr(2, 9)}`, Z = e.label ? `${q}-label` : void 0, w = e.description ? `${q}-description` : void 0, A = {
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
  }, W = {
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
  }, j = re(
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
    A[i()].track,
    a() ? W[d()].trackChecked : W[d()].track,
    d() === "glass" && H[v()],
    y() && "backdrop-blur-md",
    L() && a() && "shadow-lg shadow-blue-400/30",
    n() && "opacity-50 cursor-not-allowed",
    !n() && "cursor-pointer hover:scale-105",
    g() && !n() && "hover:scale-110 active:scale-95",
    S()
  ), G = re("inline-block rounded-full transition-all duration-200 ease-in-out transform", A[i()].thumb, W[d()].thumb, a() ? A[i()].translate : "translate-x-0.5", !N() && "will-change-transform");
  function B() {
    if (n()) return;
    const m = !a();
    a(m), e.onCheckedChange?.(m);
  }
  function I(m) {
    n() || (m.key === "Enter" || m.key === " ") && (m.preventDefault(), B());
  }
  bt(() => {
    $t("Switch", "small");
  });
  var O = Fv(), R = l(O);
  Je(
    R,
    () => ({
      id: q,
      type: "button",
      role: "switch",
      "aria-checked": a(),
      "aria-labelledby": Z,
      "aria-describedby": w,
      "aria-label": e["aria-label"],
      class: j,
      disabled: n(),
      onclick: B,
      onkeydown: I,
      ...k
    }),
    void 0,
    void 0,
    "svelte-ne1gt8"
  );
  var P = l(R);
  rt(R, (m) => K(b, m), () => t(b)), Ie(R, (m, _) => Wt?.(m, _), () => p() && !N() ? { scale: 0.95, duration: 100 } : void 0), Ie(R, (m, _) => pt?.(m, _), () => z() && !n() && !N() ? { strength: 0.15, distance: 30 } : void 0), Ie(R, (m, _) => pt?.(m, _), () => g() && !n() && !N() ? { strength: 0.1 } : void 0);
  var C = f(R, 2);
  {
    var M = (m) => {
      var _ = Ov(), F = l(_);
      {
        var Y = (h) => {
          var te = Nv();
          let ie;
          var ce = l(te);
          D(
            (de) => {
              ye(te, "id", Z), ye(te, "for", q), ie = U(te, 1, "text-sm font-medium text-white cursor-pointer", null, ie, de), le(ce, e.label);
            },
            [() => ({ "opacity-50": n() })]
          ), o(h, te);
        };
        x(F, (h) => {
          e.label && h(Y);
        });
      }
      var T = f(F, 2);
      {
        var u = (h) => {
          var te = qv();
          let ie;
          var ce = l(te);
          D(
            (de) => {
              ye(te, "id", w), ie = U(te, 1, "text-xs text-white/70", null, ie, de), le(ce, e.description);
            },
            [() => ({ "opacity-50": n() })]
          ), o(h, te);
        };
        x(T, (h) => {
          e.description && h(u);
        });
      }
      o(m, _);
    };
    x(C, (m) => {
      (e.label || e.description) && m(M);
    });
  }
  D(() => U(P, 1, oe(G), "svelte-ne1gt8")), o(r, O), Ye();
}
var Hv = (r, e, a) => e(t(a)), Vv = (r, e, a) => e(r, t(a)), Gv = /* @__PURE__ */ c('<button role="tab"> </button>'), Uv = /* @__PURE__ */ c('<div class="svelte-pa3tfx"><!></div>'), Yv = /* @__PURE__ */ c('<div class="svelte-pa3tfx"><!></div>'), Wv = /* @__PURE__ */ c('<div><div role="tablist"></div> <div role="tabpanel" tabindex="0"><!></div></div>');
const Kv = {
  hash: "svelte-pa3tfx",
  code: `button[role="tab"].svelte-pa3tfx {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-pa3tfx {transition:none;
            animation: none;will-change:auto;}
    }`
};
function bx(r, e) {
  Ue(e, !0), $e(r, Kv);
  let a = s(e, "tabs", 19, () => []), n = s(e, "activeTab", 23, () => a()[0]?.id || ""), i = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), v = s(e, "orientation", 3, "horizontal"), p = s(e, "blur", 3, "md"), y = s(e, "animate", 3, !0), z = s(e, "reduceMotion", 3, !1), g = s(e, "class", 3, ""), L = /* @__PURE__ */ ct(e, [
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
  ]), N;
  const S = `tabs-${Math.random().toString(36).substr(2, 9)}`, k = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }, b = {
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
  }, Z = v() === "horizontal", A = re("flex p-1", "tab-radius-md", Z ? "flex-row" : "flex-col min-w-max", b[i()].list, (i() === "glass" || i() === "bubbleTea") && q[p()]), H = re("relative flex-1 transition-all duration-200", "tab-radius-sm", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium whitespace-nowrap cursor-pointer", k[d()], b[i()].tab), j = re(H, b[i()].activeTab), G = re("mt-4 focus:outline-none", Z ? "" : "ml-4");
  function B(T) {
    T.disabled || (n(T.id), e.onTabChange?.(T.id));
  }
  function I(T, u) {
    if (u.disabled) return;
    const h = a().filter((ie) => !ie.disabled), te = h.findIndex((ie) => ie.id === n());
    switch (T.key) {
      case "Enter":
      case " ":
        T.preventDefault(), B(u);
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (Z ? T.key === "ArrowRight" : T.key === "ArrowDown") {
          T.preventDefault();
          const ie = (te + 1) % h.length, ce = h[ie];
          B(ce), O(ce.id);
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        if (Z ? T.key === "ArrowLeft" : T.key === "ArrowUp") {
          T.preventDefault();
          const ie = te === 0 ? h.length - 1 : te - 1, ce = h[ie];
          B(ce), O(ce.id);
        }
        break;
      case "Home":
        {
          T.preventDefault();
          const ie = h[0];
          B(ie), O(ie.id);
        }
        break;
      case "End":
        {
          T.preventDefault();
          const ie = h[h.length - 1];
          B(ie), O(ie.id);
        }
        break;
    }
  }
  function O(T) {
    N?.querySelector(`[data-tab-id="${T}"]`)?.focus();
  }
  const R = /* @__PURE__ */ we(() => a().find((T) => T.id === n())), P = /* @__PURE__ */ we(() => e.panel ? e.panel(n()) : null);
  bt(() => {
    $t("Tabs");
  });
  var C = Wv();
  Je(C, (T) => ({ class: T, ...L }), [() => re("w-full", Z ? "" : "flex", g())], void 0, "svelte-pa3tfx");
  var M = l(C);
  Xe(M, 23, a, (T) => T.id, (T, u) => {
    var h = Gv();
    let te;
    h.__click = [Hv, B, u], h.__keydown = [Vv, I, u];
    var ie = l(h);
    Ie(h, (ce, de) => Tt?.(ce, de), () => y() && !z() && t(u).id === n() ? { blur: p(), opacity: "medium" } : void 0), D(
      (ce) => {
        ye(h, "id", `${S}-tab-${t(u).id}`), te = U(h, 1, oe(t(u).id === n() ? j : H), "svelte-pa3tfx", te, ce), ye(h, "tabindex", t(u).id === n() ? 0 : -1), ye(h, "aria-selected", t(u).id === n()), ye(h, "aria-controls", `${S}-tabpanel-${t(u).id}`), ye(h, "aria-disabled", t(u).disabled), ye(h, "data-tab-id", t(u).id), h.disabled = t(u).disabled, le(ie, t(u).label);
      },
      [
        () => ({
          "opacity-50": t(u).disabled,
          "cursor-not-allowed": t(u).disabled
        })
      ]
    ), o(T, h);
  }), rt(M, (T) => N = T, () => N);
  var m = f(M, 2), _ = l(m);
  {
    var F = (T) => {
      var u = Uv(), h = l(u);
      lt(h, () => t(R).content), tt(1, u, () => _t, () => ({
        direction: "up",
        distance: 10,
        duration: y() && !z() ? 200 : 0
      })), tt(2, u, () => _t, () => ({
        direction: "down",
        distance: 10,
        duration: y() && !z() ? 150 : 0
      })), o(T, u);
    }, Y = (T) => {
      var u = Ce(), h = ge(u);
      {
        var te = (ie) => {
          var ce = Yv(), de = l(ce);
          lt(de, () => t(P)), tt(1, ce, () => _t, () => ({
            direction: "up",
            distance: 10,
            duration: y() && !z() ? 200 : 0
          })), tt(2, ce, () => _t, () => ({
            direction: "down",
            distance: 10,
            duration: y() && !z() ? 150 : 0
          })), o(ie, ce);
        };
        x(
          h,
          (ie) => {
            t(P) && ie(te);
          },
          !0
        );
      }
      o(T, u);
    };
    x(_, (T) => {
      t(R)?.content ? T(F) : T(Y, !1);
    });
  }
  D(() => {
    U(M, 1, oe(A), "svelte-pa3tfx"), ye(M, "aria-orientation", v()), ye(M, "aria-label", e["aria-label"]), U(m, 1, oe(G), "svelte-pa3tfx"), ye(m, "id", `${S}-tabpanel-${n()}`), ye(m, "aria-labelledby", `${S}-tab-${n()}`);
  }), o(r, C), Ye();
}
gt(["click", "keydown"]);
var Xv = /* @__PURE__ */ c("<textarea></textarea>");
const Zv = {
  hash: "svelte-16ael9g",
  code: `textarea.svelte-16ael9g {field-sizing:content;font-family:inherit;line-height:1.5;}textarea.svelte-16ael9g:focus {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {textarea.svelte-16ael9g {transition:none;
			animation: none;}
	}`
};
function gx(r, e) {
  Ue(e, !0), $e(r, Zv);
  let a = s(e, "value", 7, ""), n = s(e, "placeholder", 3, ""), i = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), v = s(e, "variant", 3, "glass"), p = s(e, "blur", 3, "md"), y = s(e, "rows", 3, 4), z = s(e, "resize", 3, "vertical"), g = s(e, "autoResize", 3, !1), L = s(e, "maxHeight", 3, 300), N = s(e, "minHeight", 3, 80), S = s(e, "animate", 3, !0), k = s(e, "reduceMotion", 3, !1), b = s(e, "class", 3, ""), q = /* @__PURE__ */ ct(e, [
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
  ]), Z = /* @__PURE__ */ _e(void 0), w = /* @__PURE__ */ _e(!1);
  const A = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base"
  }, W = {
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
  }, G = /* @__PURE__ */ we(() => re("w-full rounded-brand-md transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50", "placeholder:transition-colors placeholder:duration-200", A[d()], W[v()], v() === "glass" && H[p()], j[z()], i() && "opacity-50 cursor-not-allowed", t(w) && v() === "glass" && "glass-medium", b()));
  function B(M) {
    const m = M.target;
    a(m.value), e.onValueChange?.(m.value), g() && P();
  }
  function I() {
    K(w, !0);
  }
  function O() {
    K(w, !1);
  }
  function R(M) {
    (M.ctrlKey || M.metaKey) && M.key === "a" || (M.ctrlKey || M.metaKey) && M.key === "z" || (M.ctrlKey || M.metaKey) && M.key === "y" || (M.key, M.key === "Escape" && t(Z).blur());
  }
  function P() {
    if (!t(Z) || !g()) return;
    t(Z).style.height = "auto";
    const M = t(Z).scrollHeight, m = Math.min(Math.max(M, N()), L());
    t(Z).style.height = `${m}px`;
  }
  bt(() => {
    g() && t(Z) && P();
  }), bt(() => {
    $t("Textarea", "medium");
  });
  var C = Xv();
  Je(
    C,
    (M) => ({
      class: t(G),
      placeholder: n(),
      disabled: i(),
      rows: y(),
      cols: e.cols,
      "aria-label": q["aria-label"] || n(),
      oninput: B,
      onfocus: I,
      onblur: O,
      onkeydown: R,
      ...q,
      [kr]: M
    }),
    [
      () => ({
        "min-height": g() ? `${N()}px` : void 0,
        "max-height": g() ? `${L()}px` : void 0
      })
    ],
    void 0,
    "svelte-16ael9g"
  ), rt(C, (M) => K(Z, M), () => t(Z)), fr(() => _r(C, a)), Ie(C, (M, m) => Tt?.(M, m), () => S() && !k() && t(w) ? { blur: p(), opacity: "medium" } : void 0), o(r, C), Ye();
}
var Qv = (r) => cr.set(r.currentTarget.value), Jv = /* @__PURE__ */ c('<div class="space-y-2 svelte-1erodky"><label for="theme-select" class="block text-sm font-medium text-text svelte-1erodky">Theme Preference</label> <select id="theme-select"><option class="svelte-1erodky">Auto (Follow System)</option><option class="svelte-1erodky">Terminal (Dark)</option><option class="svelte-1erodky">Bubble Tea (Light)</option></select></div>'), $v = () => cr.setAuto(), eu = () => cr.setTerminal(), tu = () => cr.setBubbleTea(), ru = /* @__PURE__ */ c('<div class="flex rounded-lg overflow-hidden border border-border/30 svelte-1erodky"><button>Auto</button> <button>Terminal</button> <button>Bubble Tea</button></div>'), au = () => cr.setAuto(), nu = () => cr.setTerminal(), ou = () => cr.setBubbleTea(), iu = /* @__PURE__ */ c('<div class="flex flex-wrap gap-2 svelte-1erodky"><button>🔄 Auto</button> <button>💻 Terminal</button> <button>🧋 Bubble Tea</button></div>'), lu = /* @__PURE__ */ c('<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20 svelte-1erodky"><h4 class="font-medium text-text mb-1 svelte-1erodky"> </h4> <p class="text-sm text-text/70 svelte-1erodky"> </p></div>'), su = /* @__PURE__ */ c('<span class="svelte-1erodky"> </span>'), du = /* @__PURE__ */ c('<span class="svelte-1erodky"> </span>'), cu = /* @__PURE__ */ c('<div class="mt-2 flex items-center gap-2 text-xs text-text/60 svelte-1erodky"><div></div> <!></div>'), vu = /* @__PURE__ */ c("<div><!> <!> <!></div>");
const uu = {
  hash: "svelte-1erodky",
  code: `
	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {.theme-selector.svelte-1erodky :where(.svelte-1erodky) {transition-duration:0.01ms !important;}
	}`
};
function mx(r, e) {
  Ue(e, !0), $e(r, uu);
  const [a, n] = gi(), i = () => bi(hi, "$themeConfig", a), d = s(e, "variant", 3, "pills"), v = s(e, "showDescription", 3, !0), p = s(e, "showSystemStatus", 3, !0), y = s(e, "size", 3, "md"), z = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
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
  }, N = (j, G) => {
    const B = j === G;
    return d() === "pills" ? re(
      "px-3 py-2 rounded-lg font-medium transition-all duration-200",
      "border border-transparent cursor-pointer",
      B ? "bg-primary text-white border-primary shadow-lg" : "bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30",
      L[y()]
    ) : d() === "toggle" ? re(
      "flex-1 px-3 py-2 font-medium transition-all duration-200",
      "border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg",
      B ? "bg-primary text-white shadow-inner" : "bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text",
      L[y()]
    ) : "";
  }, S = /* @__PURE__ */ we(() => i() ? ed(i().userTheme, i().resolvedTheme) : null);
  var k = vu();
  Je(k, (j) => ({ class: j, ...g }), [() => re("theme-selector", z())], void 0, "svelte-1erodky");
  var b = l(k);
  {
    var q = (j) => {
      var G = Jv(), B = f(l(G), 2);
      B.__change = [Qv];
      var I = l(B);
      I.value = I.__value = "auto";
      var O = f(I);
      O.value = O.__value = "terminal";
      var R = f(O);
      R.value = R.__value = "bubbleTea";
      var P;
      di(B), D(
        (C) => {
          U(B, 1, C, "svelte-1erodky"), P !== (P = i()?.userTheme || "auto") && (B.value = (B.__value = i()?.userTheme || "auto") ?? "", Ia(B, i()?.userTheme || "auto"));
        },
        [
          () => oe(re("w-full border border-border/30 rounded-lg bg-surface text-text", "focus:ring-2 focus:ring-primary focus:border-primary", L[y()]))
        ]
      ), o(j, G);
    }, Z = (j) => {
      var G = Ce(), B = ge(G);
      {
        var I = (R) => {
          var P = ru(), C = l(P);
          C.__click = [$v];
          var M = f(C, 2);
          M.__click = [eu];
          var m = f(M, 2);
          m.__click = [tu], D(
            (_, F, Y) => {
              U(C, 1, _, "svelte-1erodky"), U(M, 1, F, "svelte-1erodky"), U(m, 1, Y, "svelte-1erodky");
            },
            [
              () => oe(N(i()?.userTheme || "auto", "auto")),
              () => oe(N(i()?.userTheme || "auto", "terminal")),
              () => oe(N(i()?.userTheme || "auto", "bubbleTea"))
            ]
          ), o(R, P);
        }, O = (R) => {
          var P = Ce(), C = ge(P);
          {
            var M = (m) => {
              var _ = iu(), F = l(_);
              F.__click = [au];
              var Y = f(F, 2);
              Y.__click = [nu];
              var T = f(Y, 2);
              T.__click = [ou], D(
                (u, h, te) => {
                  U(F, 1, u, "svelte-1erodky"), U(Y, 1, h, "svelte-1erodky"), U(T, 1, te, "svelte-1erodky");
                },
                [
                  () => oe(N(i()?.userTheme || "auto", "auto")),
                  () => oe(N(i()?.userTheme || "auto", "terminal")),
                  () => oe(N(i()?.userTheme || "auto", "bubbleTea"))
                ]
              ), o(m, _);
            };
            x(
              C,
              (m) => {
                d() === "pills" && m(M);
              },
              !0
            );
          }
          o(R, P);
        };
        x(
          B,
          (R) => {
            d() === "toggle" ? R(I) : R(O, !1);
          },
          !0
        );
      }
      o(j, G);
    };
    x(b, (j) => {
      d() === "dropdown" ? j(q) : j(Z, !1);
    });
  }
  var w = f(b, 2);
  {
    var A = (j) => {
      var G = lu(), B = l(G), I = l(B), O = f(B, 2), R = l(O);
      D(() => {
        le(I, t(S).displayName), le(R, t(S).description);
      }), o(j, G);
    };
    x(w, (j) => {
      v() && t(S) && j(A);
    });
  }
  var W = f(w, 2);
  {
    var H = (j) => {
      var G = cu(), B = l(G), I = f(B, 2);
      {
        var O = (P) => {
          var C = su(), M = l(C);
          D(() => le(M, `Following system: ${i().resolvedTheme ?? ""}`)), o(P, C);
        }, R = (P) => {
          var C = du(), M = l(C);
          D(() => le(M, `Manual override: ${i().userTheme ?? ""}`)), o(P, C);
        };
        x(I, (P) => {
          Cr(i().userTheme) ? P(O) : P(R, !1);
        });
      }
      D((P) => U(B, 1, P, "svelte-1erodky"), [
        () => oe(re("w-2 h-2 rounded-full", Cr(i().userTheme) ? "bg-green-400" : "bg-orange-400"))
      ]), o(j, G);
    };
    x(W, (j) => {
      p() && i() && j(H);
    });
  }
  o(r, k), Ye(), n();
}
gt(["change", "click"]);
function fu(r, e, a) {
  e.action?.onClick(), a();
}
var bu = /* @__PURE__ */ c('<h4 class="font-semibold text-sm text-white mb-1 svelte-4z22bx"> </h4>'), gu = /* @__PURE__ */ c('<p class="text-sm text-white/80 svelte-4z22bx"> </p>'), mu = /* @__PURE__ */ c('<div class="text-sm text-white/80 svelte-4z22bx"><!></div>'), hu = /* @__PURE__ */ c('<button class="mt-2 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:underline transition-colors duration-150 svelte-4z22bx"> </button>'), pu = /* @__PURE__ */ c('<button class="flex-shrink-0 text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all duration-150 svelte-4z22bx" aria-label="Close notification"><svg class="w-5 h-5 svelte-4z22bx" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class="svelte-4z22bx"></path></svg></button>'), xu = /* @__PURE__ */ c('<div><div class="flex-shrink-0 text-lg svelte-4z22bx" aria-hidden="true"> </div> <div class="flex-1 min-w-0 svelte-4z22bx"><!> <!> <!></div> <!></div>');
const _u = {
  hash: "svelte-4z22bx",
  code: `div[role='alert'].svelte-4z22bx {will-change:transform, opacity;}

	@media (prefers-reduced-motion: reduce) {.svelte-4z22bx {transition:none;
			animation: none;will-change:auto;}
	}`
};
function hx(r, e) {
  Ue(e, !0), $e(r, _u);
  let a = s(e, "open", 7, !1), n = s(e, "type", 3, "info"), i = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "top-right"), v = s(e, "blur", 3, "md"), p = s(e, "duration", 3, 5e3), y = s(e, "closable", 3, !0), z = s(e, "animate", 3, !0), g = s(e, "reduceMotion", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  ]), S = /* @__PURE__ */ _e(void 0), k = null;
  const b = {
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
  }, Z = {
    default: "bg-white/5 border border-white/10",
    glass: "glass-subtle border",
    terminal: "terminal"
  }, w = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, A = re("fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg", "flex items-start gap-3 transition-all duration-300", q[d()], Z[i()], i() === "glass" && w[v()], b[n()].colors, L());
  function W() {
    a(!1), e.onOpenChange?.(!1), k && (clearTimeout(k), k = null);
  }
  function H(I) {
    I.key === "Escape" && y() && (I.preventDefault(), W());
  }
  bt(() => (a() && p() !== null && p() > 0 && (k = setTimeout(
    () => {
      W();
    },
    p()
  )), () => {
    k && (clearTimeout(k), k = null);
  })), bt(() => {
    if (a())
      return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }), bt(() => {
    $t("Toast", "small");
  });
  var j = Ce(), G = ge(j);
  {
    var B = (I) => {
      var O = xu();
      Je(
        O,
        () => ({
          class: A,
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
      var R = l(O), P = l(R), C = f(R, 2), M = l(C);
      {
        var m = (ie) => {
          var ce = bu(), de = l(ce);
          D(() => le(de, e.title)), o(ie, ce);
        };
        x(M, (ie) => {
          e.title && ie(m);
        });
      }
      var _ = f(M, 2);
      {
        var F = (ie) => {
          var ce = gu(), de = l(ce);
          D(() => le(de, e.description)), o(ie, ce);
        }, Y = (ie) => {
          var ce = Ce(), de = ge(ce);
          {
            var ee = (V) => {
              var ae = mu(), E = l(ae);
              lt(E, () => e.children), o(V, ae);
            };
            x(
              de,
              (V) => {
                e.children && V(ee);
              },
              !0
            );
          }
          o(ie, ce);
        };
        x(_, (ie) => {
          e.description ? ie(F) : ie(Y, !1);
        });
      }
      var T = f(_, 2);
      {
        var u = (ie) => {
          var ce = hu();
          ce.__click = [fu, e, W];
          var de = l(ce);
          Ie(ce, (ee, V) => Wt?.(ee, V), () => z() && !g() ? { scale: 0.98, duration: 100 } : void 0), D(() => le(de, e.action.label)), o(ie, ce);
        };
        x(T, (ie) => {
          e.action && ie(u);
        });
      }
      var h = f(C, 2);
      {
        var te = (ie) => {
          var ce = pu();
          ce.__click = W, Ie(ce, (de, ee) => Wt?.(de, ee), () => z() && !g() ? { scale: 0.9, duration: 100 } : void 0), o(ie, ce);
        };
        x(h, (ie) => {
          y() && ie(te);
        });
      }
      rt(O, (ie) => K(S, ie), () => t(S)), D(() => le(P, b[n()].icon)), tt(1, O, () => _t, () => ({
        direction: d().includes("top") ? "down" : "up",
        distance: 20,
        duration: z() && !g() ? 300 : 0
      })), tt(2, O, () => _t, () => ({
        direction: d().includes("top") ? "up" : "down",
        distance: 20,
        duration: z() && !g() ? 200 : 0
      })), o(I, O);
    };
    x(G, (I) => {
      a() && I(B);
    });
  }
  o(r, j), Ye();
}
gt(["click"]);
var wu = /* @__PURE__ */ c("<div></div>"), yu = /* @__PURE__ */ c('<div role="tooltip"> <!></div>'), ku = /* @__PURE__ */ c("<div><!> <!></div>");
function px(r, e) {
  Ue(e, !0);
  const a = s(e, "position", 3, "top"), n = s(e, "variant", 3, "glass"), i = s(e, "delay", 3, 500), d = s(e, "offset", 3, 8), v = s(e, "arrow", 3, !0), p = s(e, "animated", 3, !0), y = s(e, "class", 3, ""), z = /* @__PURE__ */ ct(e, [
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
  let g = /* @__PURE__ */ _e(!1), L = /* @__PURE__ */ _e(void 0), N = /* @__PURE__ */ _e(void 0), S = /* @__PURE__ */ _e(st({ x: 0, y: 0 })), k = /* @__PURE__ */ _e(st(a())), b;
  const q = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
    terminal: "bg-gray-900/95 border border-green-400/40 text-green-400",
    liquid: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white",
    dark: "bg-gray-900/95 border border-white/10 text-white"
  }, Z = () => {
    if (!t(L) || !t(N)) return;
    const R = t(N).getBoundingClientRect(), P = t(L).getBoundingClientRect(), C = window.innerWidth, M = window.innerHeight;
    let m = 0, _ = 0, F = a();
    switch (a()) {
      case "top":
        m = R.left + R.width / 2 - P.width / 2, _ = R.top - P.height - d();
        break;
      case "bottom":
        m = R.left + R.width / 2 - P.width / 2, _ = R.bottom + d();
        break;
      case "left":
        m = R.left - P.width - d(), _ = R.top + R.height / 2 - P.height / 2;
        break;
      case "right":
        m = R.right + d(), _ = R.top + R.height / 2 - P.height / 2;
        break;
    }
    a() === "top" && _ < 0 ? (_ = R.bottom + d(), F = "bottom") : a() === "bottom" && _ + P.height > M ? (_ = R.top - P.height - d(), F = "top") : a() === "left" && m < 0 ? (m = R.right + d(), F = "right") : a() === "right" && m + P.width > C && (m = R.left - P.width - d(), F = "left"), m = Math.max(8, Math.min(m, C - P.width - 8)), _ = Math.max(8, Math.min(_, M - P.height - 8)), K(S, { x: m, y: _ }, !0), K(k, F, !0);
  }, w = () => {
    b = setTimeout(
      () => {
        K(g, !0), requestAnimationFrame(Z);
      },
      i()
    );
  }, A = () => {
    clearTimeout(b), K(g, !1);
  };
  ht(() => () => {
    clearTimeout(b);
  });
  const W = {
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
  var j = ku();
  Je(j, () => ({
    class: "relative inline-block",
    onmouseenter: w,
    onmouseleave: A,
    onfocus: w,
    onblur: A,
    role: "tooltip",
    ...z
  }));
  var G = l(j);
  {
    var B = (R) => {
      var P = Ce(), C = ge(P);
      lt(C, () => e.children), o(R, P);
    };
    x(G, (R) => {
      e.children && R(B);
    });
  }
  var I = f(G, 2);
  {
    var O = (R) => {
      var P = yu(), C = l(P), M = f(C);
      {
        var m = (_) => {
          var F = wu();
          D((Y) => U(F, 1, Y), [
            () => oe(re("absolute w-0 h-0 border-4", W[t(k)], H[t(k)], n() === "glass" && "border-white/10", n() === "terminal" && "border-green-400/40", n() === "liquid" && "border-white/30", n() === "dark" && "border-white/10"))
          ]), o(_, F);
        };
        x(M, (_) => {
          v() && _(m);
        });
      }
      rt(P, (_) => K(L, _), () => t(L)), D(
        (_) => {
          U(P, 1, _), ut(P, `left: ${t(S).x ?? ""}px; top: ${t(S).y ?? ""}px;`), le(C, `${e.text ?? ""} `);
        },
        [
          () => oe(re("fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl", q[n()], p() && "transition-all duration-200", y()))
        ]
      ), tt(3, P, () => _t, () => ({ duration: 200 })), o(R, P);
    };
    x(I, (R) => {
      t(g) && R(O);
    });
  }
  rt(j, (R) => K(N, R), () => t(N)), o(r, j), Ye();
}
function Cu(r, e) {
  e(/* @__PURE__ */ new Date());
}
var Su = (
  // Initialize from value prop
  // Click outside to close
  // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
  (r, e) => e(-1)
), Tu = (r, e) => e(1), Eu = /* @__PURE__ */ c('<div role="columnheader"> </div>'), Mu = (r, e, a) => e(t(a)), Au = /* @__PURE__ */ c('<button role="gridcell"> </button>'), zu = /* @__PURE__ */ c('<div class="p-2"></div>'), Iu = /* @__PURE__ */ c(`<div><button aria-label="Select today's date"> </button></div>`), Pu = /* @__PURE__ */ c('<div id="date-picker-calendar" role="application" aria-label="Calendar date picker"><div class="flex items-center justify-between mb-4"><button aria-label="Previous month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <h3 aria-live="polite"> </h3> <button aria-label="Next month"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div> <div class="grid grid-cols-7 gap-1 mb-2" role="row"></div> <div class="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar dates"></div> <!></div>'), Lu = /* @__PURE__ */ c('<div class="relative"><input/> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <!> <div aria-live="polite" aria-atomic="true" class="sr-only"><!></div></div>');
const Du = {
  hash: "svelte-zemggf",
  code: `
    /* Additional terminal-specific glow effects */.terminal .date-picker-input:focus {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 10px var(--terminal-green-glow);}.terminal .selected-day {text-shadow:0 0 5px currentColor;}`
};
function xx(r, e) {
  Ue(e, !0), $e(r, Du);
  const a = s(e, "value", 3, null), n = s(e, "variant", 3, "default"), i = s(e, "size", 3, "md"), d = s(e, "error", 3, !1), v = s(e, "disabled", 3, !1), p = s(e, "placeholder", 3, "Select date..."), y = s(e, "format", 3, "MM/dd/yyyy"), z = s(e, "closeOnSelect", 3, !0), g = s(e, "showToday", 3, !0), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  ]), S = At();
  let k, b = /* @__PURE__ */ _e(null), q = /* @__PURE__ */ _e(!1), Z = /* @__PURE__ */ _e("");
  st(/* @__PURE__ */ new Date());
  let w = /* @__PURE__ */ _e(null), A = /* @__PURE__ */ _e(null), W = /* @__PURE__ */ _e(st((/* @__PURE__ */ new Date()).getFullYear())), H = /* @__PURE__ */ _e(st((/* @__PURE__ */ new Date()).getMonth()));
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
  }, G = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-4 text-base"
  }, B = /* @__PURE__ */ we(() => j[n()]), I = /* @__PURE__ */ we(() => G[i()]);
  function O(X) {
    if (!X) return "";
    const ne = X.getDate().toString().padStart(2, "0"), ue = (X.getMonth() + 1).toString().padStart(2, "0"), ve = X.getFullYear();
    switch (y()) {
      case "dd/MM/yyyy":
        return `${ne}/${ue}/${ve}`;
      case "yyyy-MM-dd":
        return `${ve}-${ue}-${ne}`;
      default:
        return `${ue}/${ne}/${ve}`;
    }
  }
  function R(X) {
    if (!X) return null;
    const ne = X.split(/[/-]/);
    if (ne.length !== 3) return null;
    let ue, ve, pe;
    switch (y()) {
      case "dd/MM/yyyy":
        [ue, ve, pe] = ne.map(Number);
        break;
      case "yyyy-MM-dd":
        [pe, ve, ue] = ne.map(Number);
        break;
      default:
        [ve, ue, pe] = ne.map(Number);
    }
    const fe = new Date(pe, ve - 1, ue);
    return ve < 1 || ve > 12 || ue < 1 || ue > 31 || fe.getFullYear() !== pe || fe.getMonth() !== ve - 1 || fe.getDate() !== ue ? null : P(fe) ? fe : null;
  }
  function P(X) {
    return !(!(X instanceof Date) || Number.isNaN(X.getTime()) || e.minDate && X < e.minDate || e.maxDate && X > e.maxDate);
  }
  function C() {
    const X = new Date(t(W), t(H), 1), ne = new Date(X);
    ne.setDate(ne.getDate() - X.getDay());
    const ue = [], ve = new Date(ne);
    for (let pe = 0; pe < 42; pe++)
      ve.getMonth() === t(H) ? ue.push(new Date(ve)) : ue.push(null), ve.setDate(ve.getDate() + 1);
    return ue;
  }
  const M = /* @__PURE__ */ we(C);
  function m(X) {
    const ne = /* @__PURE__ */ new Date();
    return X.toDateString() === ne.toDateString();
  }
  function _(X, ne) {
    return !X || !ne ? !1 : X.toDateString() === ne.toDateString();
  }
  function F() {
    v() || (K(q, !t(q)), t(q) ? S("open") : S("close"));
  }
  function Y(X) {
    const ne = X.target;
    K(Z, ne.value, !0);
    const ue = R(t(Z));
    ue && (K(w, ue, !0), K(W, ue.getFullYear(), !0), K(H, ue.getMonth(), !0), S("change", ue));
  }
  function T(X) {
    P(X) && (K(w, X, !0), K(Z, O(X), !0), S("change", X), z() && (K(q, !1), S("close")));
  }
  function u(X) {
    const ne = t(H) + X;
    ne < 0 ? (K(H, 11), K(W, t(W) - 1)) : ne > 11 ? (K(H, 0), K(W, t(W) + 1)) : K(H, ne);
  }
  function h(X) {
    if (t(q))
      switch (X.key) {
        case "Escape":
          K(q, !1), S("close");
          break;
        case "ArrowLeft":
          if (X.preventDefault(), t(A)) {
            const ne = new Date(t(A));
            ne.setDate(ne.getDate() - 1), K(A, ne, !0);
          }
          break;
        case "ArrowRight":
          if (X.preventDefault(), t(A)) {
            const ne = new Date(t(A));
            ne.setDate(ne.getDate() + 1), K(A, ne, !0);
          }
          break;
        case "ArrowUp":
          if (X.preventDefault(), t(A)) {
            const ne = new Date(t(A));
            ne.setDate(ne.getDate() - 7), K(A, ne, !0);
          }
          break;
        case "ArrowDown":
          if (X.preventDefault(), t(A)) {
            const ne = new Date(t(A));
            ne.setDate(ne.getDate() + 7), K(A, ne, !0);
          }
          break;
        case "Enter":
          X.preventDefault(), t(A) && T(t(A));
          break;
      }
  }
  bt(() => {
    if (a()) {
      const X = a() instanceof Date ? a() : R(a().toString());
      X && (K(w, X, !0), K(Z, O(X), !0), K(W, X.getFullYear(), !0), K(H, X.getMonth(), !0));
    }
  }), ht(() => {
    function X(ne) {
      t(q) && t(b) && !t(b).contains(ne.target) && k && !k.contains(ne.target) && (K(q, !1), S("close"));
    }
    return document.addEventListener("click", X), () => document.removeEventListener("click", X);
  });
  const te = [
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
  ], ie = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ce = /* @__PURE__ */ we(() => re("relative w-full rounded-lg border transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-opacity-50", "font-mono", t(B).input, t(I), d() && "border-red-500 focus:border-red-500", v() && "opacity-50 cursor-not-allowed", L()));
  var de = Lu(), ee = l(de);
  Je(ee, () => ({
    onclick: (
      // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
      F
    ),
    oninput: Y,
    onkeydown: h,
    placeholder: p(),
    disabled: v(),
    readonly: !v(),
    class: t(ce),
    role: "combobox",
    "aria-haspopup": "grid",
    "aria-expanded": t(q),
    "aria-controls": "date-picker-calendar",
    "aria-label": p(),
    "aria-describedby": d() ? "date-picker-error" : void 0,
    ...N
  })), rt(ee, (X) => k = X, () => k), fr(() => _r(ee, () => t(Z), (X) => K(Z, X))), Ie(ee, (X, ne) => Tt?.(X, ne), () => ({ blur: "sm", opacity: "light" })), Ie(ee, (X, ne) => pt?.(X, ne), () => ({ enabled: !v(), strength: 0.1 }));
  var V = f(ee, 2), ae = l(V), E = f(V, 2);
  {
    var Q = (X) => {
      var ne = Pu(), ue = l(ne), ve = l(ue);
      ve.__click = [Su, u], Ie(ve, (Re, ke) => pt?.(Re, ke), () => ({ strength: 0.2 }));
      var pe = f(ve, 2), fe = l(pe), be = f(pe, 2);
      be.__click = [Tu, u], Ie(be, (Re, ke) => pt?.(Re, ke), () => ({ strength: 0.2 }));
      var me = f(ue, 2);
      Xe(me, 20, () => ie, (Re) => Re, (Re, ke) => {
        var xe = Eu(), Ee = l(xe);
        D(() => {
          U(xe, 1, `p-2 text-center text-xs font-semibold ${t(B).header ?? ""} font-mono`), le(Ee, ke);
        }), o(Re, xe);
      });
      var Te = f(me, 2);
      Xe(Te, 23, () => t(M), (Re, ke) => Re ? Re.toDateString() : "blank-" + ke, (Re, ke) => {
        var xe = Ce(), Ee = ge(xe);
        {
          var Ne = (Le) => {
            const Oe = /* @__PURE__ */ we(() => _(t(ke), t(w))), Be = /* @__PURE__ */ we(() => m(t(ke))), Se = /* @__PURE__ */ we(() => P(t(ke)));
            var he = Au();
            he.__click = [Mu, T, ke];
            var ze = l(he);
            Ie(he, (De, Ve) => pt?.(De, Ve), () => ({ enabled: t(Se), strength: 0.15 })), D(
              (De, Ve, et) => {
                he.disabled = !t(Se), U(he, 1, `p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       ${(t(Oe) ? t(B).selectedDay : t(Be) ? t(B).todayDay : t(B).dayButton) ?? ""}
							       ${t(Se) ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`), ye(he, "aria-label", De), ye(he, "aria-selected", t(Oe)), ye(he, "aria-disabled", !t(Se)), ye(he, "aria-current", t(Be) ? "date" : void 0), ye(he, "tabindex", Ve), le(ze, et);
              },
              [
                () => O(t(ke)),
                () => t(Oe) || _(t(ke), t(A)) ? 0 : -1,
                () => t(ke).getDate()
              ]
            ), o(Le, he);
          }, Ae = (Le) => {
            var Oe = zu();
            o(Le, Oe);
          };
          x(Ee, (Le) => {
            t(ke) ? Le(Ne) : Le(Ae, !1);
          });
        }
        o(Re, xe);
      });
      var Pe = f(Te, 2);
      {
        var Fe = (Re) => {
          var ke = Iu(), xe = l(ke);
          xe.__click = [Cu, T];
          var Ee = l(xe);
          Ie(xe, (Ne, Ae) => pt?.(Ne, Ae), () => ({ strength: 0.1 })), D(
            (Ne) => {
              U(ke, 1, `mt-4 pt-4 border-t ${t(B).calendar ?? ""}`), U(xe, 1, `w-full py-2 px-4 rounded-md ${t(B).dayButton ?? ""} transition-colors font-mono text-sm`), le(Ee, `Today: ${Ne ?? ""}`);
            },
            [() => O(/* @__PURE__ */ new Date())]
          ), o(Re, ke);
        };
        x(Pe, (Re) => {
          g() && Re(Fe);
        });
      }
      rt(ne, (Re) => K(b, Re), () => t(b)), Ie(ne, (Re, ke) => Tt?.(Re, ke), () => ({ blur: "lg", opacity: "medium" })), D(() => {
        U(ne, 1, `absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 ${t(B).calendar ?? ""}`), U(ve, 1, `p-2 rounded-md ${t(B).dayButton ?? ""} transition-colors`), U(pe, 1, `text-lg font-semibold ${t(B).header ?? ""} font-mono`), le(fe, `${te[t(H)] ?? ""}
                    ${t(W) ?? ""}`), U(be, 1, `p-2 rounded-md ${t(B).dayButton ?? ""} transition-colors`);
      }), tt(1, ne, () => _t, () => ({ direction: "up", duration: 200 })), o(X, ne);
    };
    x(E, (X) => {
      t(q) && X(Q);
    });
  }
  var $ = f(E, 2), J = l($);
  {
    var se = (X) => {
      var ne = Ct();
      D((ue) => le(ne, `Selected date: ${ue ?? ""}`), [() => O(t(w))]), o(X, ne);
    };
    x(J, (X) => {
      t(w) && X(se);
    });
  }
  D(() => U(ae, 0, `w-5 h-5 ${t(B).header ?? ""}`)), o(r, de), Ye();
}
gt(["click"]);
var Ru = (r, e) => (r.key === "Enter" || r.key === " ") && e(), ju = /* @__PURE__ */ c('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-lg font-medium">Drop files here</p></div>'), Nu = /* @__PURE__ */ c('<p class="text-xs text-gray-500 mt-1"> </p>'), qu = /* @__PURE__ */ c(`<button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium">Select Files</button>`), Ou = /* @__PURE__ */ c('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <div class="mb-2"><p class="text-lg font-medium"> </p> <p class="text-sm text-gray-400 mt-1"> </p> <!></div> <!></div>'), Fu = /* @__PURE__ */ c('<img class="w-12 h-12 object-cover rounded border"/>'), Bu = /* @__PURE__ */ c('<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>'), Hu = /* @__PURE__ */ ir('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), Vu = (r, e, a) => e(t(a).id), Gu = /* @__PURE__ */ c('<button class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" title="Retry upload">Retry</button> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>', 1), Uu = /* @__PURE__ */ c('<div class="w-5 h-5"><svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Yu = (r, e, a) => e(t(a).id), Wu = /* @__PURE__ */ c('<p class="text-xs text-red-400 mt-1"> </p>'), Ku = /* @__PURE__ */ c('<div class="mt-2"><div class="w-full bg-gray-700 rounded-full h-2"><div></div></div> <p class="text-xs text-gray-400 mt-1"> </p></div>'), Xu = /* @__PURE__ */ c('<div><div class="flex items-start gap-3"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-sm font-medium truncate pr-2"> </h4> <div class="flex items-center gap-2"><!> <button aria-label="Remove file"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-1"><p class="text-xs text-gray-400"> </p> <!></div> <!></div></div></div>'), Zu = /* @__PURE__ */ c('<div class="mt-4 space-y-3"></div>'), Qu = /* @__PURE__ */ c('<input type="file" class="hidden"/> <div role="button" aria-label="Upload files"><!></div> <!>', 1);
const Ju = {
  hash: "svelte-yfigio",
  code: `
	/* Terminal-specific glow effects */.terminal .file-upload:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function _x(r, e) {
  Ue(e, !0), $e(r, Ju);
  const a = s(e, "multiple", 3, !1), n = s(e, "accept", 3, "*/*"), i = s(
    e,
    "maxSize",
    3,
    10 * 1024 * 1024
    // 10MB default
  ), d = s(e, "maxFiles", 19, () => a() ? 5 : 1), v = s(e, "variant", 3, "default"), p = s(e, "disabled", 3, !1), y = s(e, "showPreview", 3, !0), z = s(e, "autoUpload", 3, !1), g = s(e, "class", 3, ""), L = At();
  let N, S, k = /* @__PURE__ */ _e(!1), b = /* @__PURE__ */ _e(st([]));
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
  }, Z = /* @__PURE__ */ we(() => q[v()]);
  function w() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  function A(ee) {
    if (ee === 0) return "0 Bytes";
    const V = 1024, ae = ["Bytes", "KB", "MB", "GB"], E = Math.floor(Math.log(ee) / Math.log(V));
    return parseFloat((ee / Math.pow(V, E)).toFixed(2)) + " " + ae[E];
  }
  function W(ee) {
    return ee.type.startsWith("image/");
  }
  function H(ee) {
    if (ee.size > i())
      return `File size exceeds ${A(i())}`;
    if (n() !== "*/*") {
      const V = n().split(",").map((Q) => Q.trim()), ae = "." + ee.name.split(".").pop()?.toLowerCase();
      if (!V.some((Q) => Q === ee.type || Q === ae || Q.endsWith("/*") && ee.type.startsWith(Q.slice(0, -1))))
        return `File type not accepted. Accepted types: ${n()}`;
    }
    return null;
  }
  async function j(ee) {
    if (!(!W(ee) || !y()))
      return new Promise((V) => {
        const ae = new FileReader();
        ae.onload = (E) => V(E.target?.result), ae.onerror = () => V(void 0), ae.readAsDataURL(ee);
      });
  }
  async function G(ee) {
    if (p()) return;
    const V = Array.from(ee), ae = d() - t(b).length, E = V.slice(0, ae), Q = [];
    for (const $ of E) {
      const J = H($), se = await j($), X = {
        ...$,
        id: w(),
        preview: se,
        status: J ? "error" : "pending",
        error: J,
        progress: 0
      };
      Q.push(X);
    }
    K(b, [...t(b), ...Q], !0), L("filesAdded", Q), z() && e.uploadUrl && Q.forEach(($) => {
      $.status === "pending" && B($);
    });
  }
  async function B(ee) {
    if (!e.uploadUrl) return;
    const V = t(b).findIndex((E) => E.id === ee.id);
    if (V === -1) return;
    t(b)[V] = { ...ee, status: "uploading", progress: 0 }, L("uploadStart", t(b)[V]);
    const ae = new FormData();
    ae.append("file", ee);
    try {
      const E = new XMLHttpRequest();
      E.upload.onprogress = (Q) => {
        if (Q.lengthComputable) {
          const $ = Math.round(Q.loaded / Q.total * 100);
          t(b)[V] = { ...t(b)[V], progress: $ }, L("uploadProgress", { file: t(b)[V], progress: $ });
        }
      }, E.onload = () => {
        if (E.status >= 200 && E.status < 300)
          t(b)[V] = { ...t(b)[V], status: "success", progress: 100 }, L("uploadSuccess", { file: t(b)[V], response: E.response });
        else
          throw new Error(`Upload failed: ${E.statusText}`);
        t(b).every((Q) => Q.status === "success" || Q.status === "error") && L("allUploadsComplete", t(b));
      }, E.onerror = () => {
        const Q = "Upload failed: Network error";
        t(b)[V] = { ...t(b)[V], status: "error", error: Q }, L("uploadError", { file: t(b)[V], error: Q });
      }, E.open("POST", e.uploadUrl), E.send(ae);
    } catch (E) {
      const Q = E instanceof Error ? E.message : "Upload failed";
      t(b)[V] = {
        ...t(b)[V],
        status: "error",
        error: Q
      }, L("uploadError", { file: t(b)[V], error: Q });
    }
  }
  function I(ee) {
    const V = t(b).findIndex((E) => E.id === ee);
    if (V === -1) return;
    const ae = t(b)[V];
    K(b, t(b).filter((E) => E.id !== ee), !0), L("fileRemoved", ae);
  }
  function O(ee) {
    const V = t(b).find((ae) => ae.id === ee);
    V && e.uploadUrl && B(V);
  }
  function R(ee) {
    const V = ee.target;
    V.files && G(V.files), V.value = "";
  }
  function P(ee) {
    ee.preventDefault(), p() || K(k, !0);
  }
  function C(ee) {
    ee.preventDefault(), S?.contains(ee.relatedTarget) || K(k, !1);
  }
  function M(ee) {
    if (ee.preventDefault(), K(k, !1), p()) return;
    const V = ee.dataTransfer?.files;
    V && G(V);
  }
  function m() {
    !p() && N && N.click();
  }
  const _ = /* @__PURE__ */ we(() => t(b).length < d()), F = /* @__PURE__ */ we(() => re(
    "relative w-full rounded-lg border-2 border-dashed transition-all duration-300",
    "flex flex-col items-center justify-center p-8 min-h-32",
    "cursor-pointer font-mono",
    t(k) ? t(Z).dropZoneActive : t(Z).dropZone,
    p() && "opacity-50 cursor-not-allowed",
    g()
  ));
  var Y = Qu(), T = ge(Y);
  T.__change = R, rt(T, (ee) => N = ee, () => N);
  var u = f(T, 2);
  u.__click = m, u.__keydown = [Ru, m];
  var h = l(u);
  {
    var te = (ee) => {
      var V = ju();
      tt(1, V, () => Wt, () => ({ duration: 200 })), o(ee, V);
    }, ie = (ee) => {
      var V = Ou(), ae = f(l(V), 2), E = l(ae), Q = l(E), $ = f(E, 2), J = l($), se = f($, 2);
      {
        var X = (ve) => {
          var pe = Nu(), fe = l(pe);
          D(() => le(fe, `${t(b).length ?? ""} of ${d() ?? ""} files selected`)), o(ve, pe);
        };
        x(se, (ve) => {
          a() && ve(X);
        });
      }
      var ne = f(ae, 2);
      {
        var ue = (ve) => {
          var pe = qu();
          Ie(pe, (fe, be) => pt?.(fe, be), () => ({ strength: 0.15 })), o(ve, pe);
        };
        x(ne, (ve) => {
          t(_) && ve(ue);
        });
      }
      D(
        (ve) => {
          le(Q, t(_) ? "Choose files or drag and drop" : "Maximum files reached"), le(J, `${(n() === "*/*" ? "Any file type" : n()) ?? ""} • Max ${ve ?? ""} per file`);
        },
        [() => A(i())]
      ), o(ee, V);
    };
    x(h, (ee) => {
      t(k) ? ee(te) : ee(ie, !1);
    });
  }
  rt(u, (ee) => S = ee, () => S), Ie(u, (ee, V) => Tt?.(ee, V), () => ({ blur: "md", opacity: "light" })), Ie(u, (ee, V) => pt?.(ee, V), () => ({
    enabled: !p() && t(_),
    strength: 0.1
  }));
  var ce = f(u, 2);
  {
    var de = (ee) => {
      var V = Zu();
      Xe(V, 21, () => t(b), (ae) => ae.id, (ae, E) => {
        var Q = Xu(), $ = l(Q), J = l($), se = l(J);
        {
          var X = (Oe) => {
            var Be = Fu();
            D(() => {
              ye(Be, "src", t(E).preview), ye(Be, "alt", t(E).name);
            }), o(Oe, Be);
          }, ne = (Oe) => {
            var Be = Bu();
            o(Oe, Be);
          };
          x(se, (Oe) => {
            t(E).preview ? Oe(X) : Oe(ne, !1);
          });
        }
        var ue = f(J, 2), ve = l(ue), pe = l(ve), fe = l(pe), be = f(pe, 2), me = l(be);
        {
          var Te = (Oe) => {
            var Be = Hu();
            D(() => U(Be, 0, `w-5 h-5 ${t(Z).successIcon ?? ""}`)), o(Oe, Be);
          }, Pe = (Oe) => {
            var Be = Ce(), Se = ge(Be);
            {
              var he = (De) => {
                var Ve = Gu(), et = ge(Ve);
                et.__click = [Vu, O, E];
                var Qe = f(et, 2);
                D(() => U(Qe, 0, `w-5 h-5 ${t(Z).errorIcon ?? ""}`)), o(De, Ve);
              }, ze = (De) => {
                var Ve = Ce(), et = ge(Ve);
                {
                  var Qe = (ot) => {
                    var vt = Uu();
                    o(ot, vt);
                  };
                  x(
                    et,
                    (ot) => {
                      t(E).status === "uploading" && ot(Qe);
                    },
                    !0
                  );
                }
                o(De, Ve);
              };
              x(
                Se,
                (De) => {
                  t(E).status === "error" ? De(he) : De(ze, !1);
                },
                !0
              );
            }
            o(Oe, Be);
          };
          x(me, (Oe) => {
            t(E).status === "success" ? Oe(Te) : Oe(Pe, !1);
          });
        }
        var Fe = f(me, 2);
        Fe.__click = [Yu, I, E];
        var Re = f(ve, 2), ke = l(Re), xe = l(ke), Ee = f(ke, 2);
        {
          var Ne = (Oe) => {
            var Be = Wu(), Se = l(Be);
            D(() => le(Se, t(E).error)), o(Oe, Be);
          };
          x(Ee, (Oe) => {
            t(E).error && Oe(Ne);
          });
        }
        var Ae = f(Re, 2);
        {
          var Le = (Oe) => {
            var Be = Ku(), Se = l(Be), he = l(Se), ze = f(Se, 2), De = l(ze);
            D(() => {
              U(he, 1, `h-2 rounded-full ${t(Z).progressBar ?? ""} transition-all duration-300`), ut(he, `width: ${t(E).progress ?? ""}%`), le(De, `${t(E).progress ?? ""}% uploaded`);
            }), o(Oe, Be);
          };
          x(Ae, (Oe) => {
            t(E).status === "uploading" && t(E).progress !== void 0 && Oe(Le);
          });
        }
        Ie(Q, (Oe, Be) => Tt?.(Oe, Be), () => ({ blur: "sm", opacity: "subtle" })), D(
          (Oe) => {
            U(Q, 1, `p-4 rounded-lg border ${t(Z).fileItem ?? ""} transition-all duration-200`), le(fe, t(E).name), U(Fe, 1, `p-1 rounded ${t(Z).removeButton ?? ""} hover:bg-red-500/20 transition-colors`), le(xe, Oe);
          },
          [() => A(t(E).size)]
        ), tt(1, Q, () => Wt, () => ({ duration: 300, bounce: !0 })), o(ae, Q);
      }), o(ee, V);
    };
    x(ce, (ee) => {
      t(b).length > 0 && ee(de);
    });
  }
  D(() => {
    ye(T, "accept", n()), T.multiple = a(), T.disabled = p(), U(u, 1, oe(t(F))), ye(u, "tabindex", p() ? -1 : 0);
  }), Ot("dragover", u, P), Ot("dragleave", u, C), Ot("drop", u, M), o(r, Y), Ye();
}
gt(["change", "click", "keydown"]);
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
function _i(r, e) {
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
function $u(r, e) {
  const a = {};
  for (const [n, i] of Object.entries(e)) {
    const d = r[n];
    a[n] = _i(d, i);
  }
  return a;
}
function e0(r) {
  return Object.values(r).every((e) => e.isValid);
}
function t0(r) {
  const e = {};
  for (const [a, n] of Object.entries(r))
    n.isValid || (e[a] = n.errors);
  return e;
}
function wx(r) {
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
    setValue(i, d) {
      e[i] = d, this.validateField(i);
    },
    setTouched(i, d = !0) {
      n[i] = d;
    },
    validateField(i) {
      if (r[i]) {
        const d = _i(e[i], r[i]);
        d.isValid ? delete a[i] : a[i] = d.errors;
      }
    },
    validateAll() {
      const i = $u(e, r);
      return a = t0(i), e0(i);
    },
    reset() {
      e = {}, a = {}, n = {};
    },
    setData(i) {
      e = { ...i };
    }
  };
}
function yx(r, e = 300) {
  let a;
  return function(...n) {
    clearTimeout(a), a = setTimeout(() => r.apply(this, n), e);
  };
}
const kx = {
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
function r0(r, e) {
  e("homeClick");
}
var a0 = /* @__PURE__ */ c('<span class="mr-1 text-base"> </span>'), n0 = /* @__PURE__ */ c('<li aria-hidden="true"> </li>'), o0 = /* @__PURE__ */ c('<li><button aria-label="Go to home"><!> </button></li> <!>', 1), i0 = /* @__PURE__ */ c('<span aria-hidden="true"> </span>'), l0 = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), s0 = /* @__PURE__ */ c('<span aria-current="page"><!> </span>'), d0 = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), c0 = /* @__PURE__ */ c("<a><!> </a>"), v0 = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), u0 = /* @__PURE__ */ c("<button><!> </button>"), f0 = /* @__PURE__ */ c('<li aria-hidden="true"> </li>'), b0 = /* @__PURE__ */ c('<li class="flex items-center"><!></li> <!>', 1), g0 = /* @__PURE__ */ c('<nav aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><!> <!></ol></nav>');
const m0 = {
  hash: "svelte-1ozmnrq",
  code: `
	/* Terminal glow effects */.terminal .breadcrumb-item:hover {text-shadow:0 0 5px var(--terminal-green);}`
};
function Cx(r, e) {
  Ue(e, !0), $e(r, m0);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), i = s(e, "separator", 3, "chevron"), d = s(e, "showHome", 3, !0), v = s(e, "homeIcon", 3, "🏠"), p = s(e, "homeLabel", 3, "Home"), y = s(e, "maxItems", 3, 5), z = s(e, "class", 3, ""), g = At(), L = {
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
  }, N = { slash: "/", chevron: "›", arrow: "→", dot: "•" }, S = /* @__PURE__ */ we(() => L[n()]), k = /* @__PURE__ */ we(() => () => {
    if (a().length <= y())
      return a();
    const j = a()[0], G = a().slice(-(y() - 2));
    return [
      j,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...G
    ];
  });
  function b(j, G) {
    j.disabled || j.id === "ellipsis" || g("navigate", { item: j, index: G });
  }
  const q = /* @__PURE__ */ we(() => re("flex items-center space-x-2 text-sm font-mono", t(S).container, z()));
  var Z = g0(), w = l(Z), A = l(w);
  {
    var W = (j) => {
      var G = o0(), B = ge(G), I = l(B);
      I.__click = [r0, g];
      var O = l(I);
      {
        var R = (m) => {
          var _ = a0(), F = l(_);
          D(() => le(F, v())), o(m, _);
        };
        x(O, (m) => {
          v() && m(R);
        });
      }
      var P = f(O);
      Ie(I, (m, _) => pt?.(m, _), () => ({ strength: 0.1 }));
      var C = f(B, 2);
      {
        var M = (m) => {
          var _ = n0(), F = l(_);
          D(() => {
            U(_, 1, oe(t(S).separator)), le(F, N[i()]);
          }), o(m, _);
        };
        x(C, (m) => {
          t(k).length > 0 && m(M);
        });
      }
      D(() => {
        U(I, 1, `flex items-center ${t(S).home ?? ""} hover:underline transition-colors`), le(P, ` ${p() ?? ""}`);
      }), o(j, G);
    };
    x(A, (j) => {
      d() && j(W);
    });
  }
  var H = f(A, 2);
  Xe(H, 19, () => t(k), (j) => j.id, (j, G, B) => {
    var I = b0(), O = ge(I), R = l(O);
    {
      var P = (_) => {
        var F = i0(), Y = l(F);
        D(() => {
          U(F, 1, `px-2 ${t(S).separator ?? ""}`), le(Y, t(G).label);
        }), o(_, F);
      }, C = (_) => {
        var F = Ce(), Y = ge(F);
        {
          var T = (h) => {
            var te = s0(), ie = l(te);
            {
              var ce = (ee) => {
                var V = l0(), ae = l(V);
                D(() => le(ae, t(G).icon)), o(ee, V);
              };
              x(ie, (ee) => {
                t(G).icon && ee(ce);
              });
            }
            var de = f(ie);
            D(() => {
              U(te, 1, `flex items-center ${t(S).activeItem ?? ""} font-medium`), le(de, ` ${t(G).label ?? ""}`);
            }), o(h, te);
          }, u = (h) => {
            var te = Ce(), ie = ge(te);
            {
              var ce = (ee) => {
                var V = c0();
                V.__click = ($) => {
                  t(G).disabled ? $.preventDefault() : b(t(G), t(B));
                };
                var ae = l(V);
                {
                  var E = ($) => {
                    var J = d0(), se = l(J);
                    D(() => le(se, t(G).icon)), o($, J);
                  };
                  x(ae, ($) => {
                    t(G).icon && $(E);
                  });
                }
                var Q = f(ae);
                Ie(V, ($, J) => pt?.($, J), () => ({ enabled: !t(G).disabled, strength: 0.1 })), D(() => {
                  ye(V, "href", t(G).href), U(V, 1, `flex items-center ${t(S).item ?? ""} hover:underline transition-colors
							       ${t(G).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), le(Q, ` ${t(G).label ?? ""}`);
                }), o(ee, V);
              }, de = (ee) => {
                var V = u0();
                V.__click = () => b(t(G), t(B));
                var ae = l(V);
                {
                  var E = ($) => {
                    var J = v0(), se = l(J);
                    D(() => le(se, t(G).icon)), o($, J);
                  };
                  x(ae, ($) => {
                    t(G).icon && $(E);
                  });
                }
                var Q = f(ae);
                Ie(V, ($, J) => pt?.($, J), () => ({ enabled: !t(G).disabled, strength: 0.1 })), D(() => {
                  V.disabled = t(G).disabled, U(V, 1, `flex items-center ${t(S).item ?? ""} hover:underline transition-colors
							       ${t(G).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), le(Q, ` ${t(G).label ?? ""}`);
                }), o(ee, V);
              };
              x(ie, (ee) => {
                t(G).href ? ee(ce) : ee(de, !1);
              });
            }
            o(h, te);
          };
          x(
            Y,
            (h) => {
              t(B) === t(k).length - 1 ? h(T) : h(u, !1);
            },
            !0
          );
        }
        o(_, F);
      };
      x(R, (_) => {
        t(G).id === "ellipsis" ? _(P) : _(C, !1);
      });
    }
    var M = f(O, 2);
    {
      var m = (_) => {
        var F = f0(), Y = l(F);
        D(() => {
          U(F, 1, oe(t(S).separator)), le(Y, N[i()]);
        }), o(_, F);
      };
      x(M, (_) => {
        t(B) < t(k).length - 1 && t(G).id !== "ellipsis" && _(m);
      });
    }
    o(j, I);
  }), D(() => U(Z, 1, oe(t(q)))), o(r, Z), Ye();
}
gt(["click"]);
function h0(r, e, a, n, i, d, v, p) {
  if (!t(e)) {
    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), a());
    return;
  }
  switch (r.key) {
    case "Escape":
      r.preventDefault(), n();
      break;
    case "ArrowDown":
      r.preventDefault(), K(i, Math.min(t(i) + 1, t(d).length - 1), !0);
      break;
    case "ArrowUp":
      r.preventDefault(), K(i, Math.max(t(i) - 1, 0), !0);
      break;
    case "Enter":
      r.preventDefault(), t(i) >= 0 && t(d)()[t(i)] && v(t(d)()[t(i)]);
      break;
    case "ArrowRight":
      t(i) >= 0 && t(d)()[t(i)]?.children?.length && K(p, t(d)()[t(i)].id, !0);
      break;
    case "ArrowLeft":
      t(p) && K(p, null);
      break;
  }
}
var p0 = /* @__PURE__ */ c("<div><span>Menu</span> <!></div>"), x0 = /* @__PURE__ */ c("<hr/>"), _0 = (r, e, a) => e(t(a)), w0 = (r, e, a) => r.key === "Enter" && e(t(a)), y0 = /* @__PURE__ */ c('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), k0 = /* @__PURE__ */ c("<span> </span>"), C0 = /* @__PURE__ */ c("<span> </span>"), S0 = /* @__PURE__ */ c("<hr/>"), T0 = (r, e, a) => e(t(a)), E0 = (r, e, a) => r.key === "Enter" && e(t(a)), M0 = /* @__PURE__ */ c('<div><div class="w-full h-full bg-current opacity-60 rounded"></div></div>'), A0 = /* @__PURE__ */ c("<span> </span>"), z0 = /* @__PURE__ */ c("<span> </span>"), I0 = /* @__PURE__ */ c('<div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <!></div>'), P0 = /* @__PURE__ */ c('<div role="menu"><div class="py-1"></div></div>'), L0 = /* @__PURE__ */ c('<div class="relative"><div role="menuitem"><div class="flex items-center gap-3 flex-1"><!> <span class="flex-1 truncate"> </span> <!></div> <div class="flex items-center gap-2 ml-3"><!> <!></div></div> <!></div>'), D0 = /* @__PURE__ */ c('<div role="menu"><div class="py-1"></div></div>'), R0 = /* @__PURE__ */ c('<div><div class="cursor-pointer" tabindex="0" role="button" aria-haspopup="menu"><!></div> <!></div>');
const j0 = {
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
function Sx(r, e) {
  Ue(e, !0), $e(r, j0);
  let a = s(e, "openMode", 3, "click"), n = s(e, "placement", 3, "bottom-start"), i = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), v = s(e, "closeOnClick", 3, !0), p = s(e, "showIcons", 3, !0), y = s(e, "showKeyboards", 3, !0), z = s(e, "class", 3, ""), g = /* @__PURE__ */ ct(e, [
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
  let N = /* @__PURE__ */ _e(!1), S, k, b = /* @__PURE__ */ _e(null), q = /* @__PURE__ */ _e(-1);
  const Z = `menu-${Math.random().toString(36).substr(2, 9)}`, w = {
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
  }, A = {
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
  }, W = w[d()], H = A[i()], j = /* @__PURE__ */ we(() => () => {
    const h = [];
    function te(ie) {
      for (const ce of ie)
        ce.separator || h.push(ce), ce.children && te(ce.children);
    }
    return te(e.items), h;
  });
  function G() {
    K(N, !t(N)), t(N) && (K(q, -1), K(b, null)), L("toggle", { isOpen: t(N) });
  }
  function B() {
    K(N, !1), K(b, null), K(q, -1), L("close");
  }
  function I(h) {
    h.disabled || (h.children?.length ? K(b, t(b) === h.id ? null : h.id, !0) : (h.onclick && h.onclick(), L("select", { item: h }), v() && B()));
  }
  function O(h) {
    a() === "hover" && h.children?.length && K(b, h.id, !0);
  }
  function R() {
    a() === "hover" && K(b, null);
  }
  function P(h) {
    S && !S.contains(h.target) && B();
  }
  ht(() => (document.addEventListener("click", P), () => document.removeEventListener("click", P)));
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
  var M = R0();
  Je(M, (h) => ({ class: h, ...g }), [() => re("relative inline-block", z())], void 0, "svelte-i7uadz");
  var m = l(M);
  m.__click = function(...h) {
    (a() === "click" ? G : void 0)?.apply(this, h);
  }, m.__keydown = [
    h0,
    N,
    G,
    B,
    q,
    j,
    I,
    b
  ];
  var _ = l(m);
  {
    var F = (h) => {
      var te = Ce(), ie = ge(te);
      lt(ie, () => e.children.trigger), o(h, te);
    }, Y = (h) => {
      var te = p0(), ie = f(l(te), 2);
      {
        let ce = /* @__PURE__ */ we(() => re("transition-transform duration-200", t(N) && "rotate-180"));
        _n(ie, {
          size: 16,
          get class() {
            return t(ce);
          }
        });
      }
      D((ce) => U(te, 1, ce), [
        () => oe(re("flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200", H.item, t(N) && H.itemActive))
      ]), o(h, te);
    };
    x(_, (h) => {
      e.children?.trigger ? h(F) : h(Y, !1);
    });
  }
  rt(m, (h) => k = h, () => k);
  var T = f(m, 2);
  {
    var u = (h) => {
      var te = D0(), ie = l(te);
      Xe(ie, 23, () => e.items, (ce) => ce.id, (ce, de) => {
        var ee = Ce(), V = ge(ee);
        {
          var ae = (Q) => {
            var $ = x0();
            D((J) => U($, 1, J), [() => oe(re("my-1 border-t", H.separator))]), o(Q, $);
          }, E = (Q) => {
            var $ = L0(), J = l($);
            J.__click = [_0, I, de], J.__keydown = [w0, I, de];
            var se = l(J), X = l(se);
            {
              var ne = (xe) => {
                var Ee = y0();
                D((Ne) => U(Ee, 1, Ne), [() => oe(re("flex-shrink-0", W.icon))]), o(xe, Ee);
              };
              x(X, (xe) => {
                p() && t(de).icon && xe(ne);
              });
            }
            var ue = f(X, 2), ve = l(ue), pe = f(ue, 2);
            {
              var fe = (xe) => {
                var Ee = k0(), Ne = l(Ee);
                D(
                  (Ae) => {
                    U(Ee, 1, Ae), le(Ne, t(de).badge);
                  },
                  [
                    () => oe(re("inline-flex items-center rounded-full font-medium", W.badge, H.badge))
                  ]
                ), o(xe, Ee);
              };
              x(pe, (xe) => {
                t(de).badge && xe(fe);
              });
            }
            var be = f(se, 2), me = l(be);
            {
              var Te = (xe) => {
                var Ee = C0(), Ne = l(Ee);
                D(
                  (Ae) => {
                    U(Ee, 1, Ae), le(Ne, t(de).keyboard);
                  },
                  [
                    () => oe(re("opacity-60 font-mono", W.keyboard, H.keyboard))
                  ]
                ), o(xe, Ee);
              };
              x(me, (xe) => {
                y() && t(de).keyboard && xe(Te);
              });
            }
            var Pe = f(me, 2);
            {
              var Fe = (xe) => {
                Vr(xe, { size: 16, class: "opacity-60" });
              };
              x(Pe, (xe) => {
                t(de).children?.length && xe(Fe);
              });
            }
            var Re = f(J, 2);
            {
              var ke = (xe) => {
                var Ee = P0(), Ne = l(Ee);
                Xe(Ne, 21, () => t(de).children, (Ae) => Ae.id, (Ae, Le) => {
                  var Oe = Ce(), Be = ge(Oe);
                  {
                    var Se = (ze) => {
                      var De = S0();
                      D((Ve) => U(De, 1, Ve), [() => oe(re("my-1 border-t", H.separator))]), o(ze, De);
                    }, he = (ze) => {
                      var De = I0();
                      De.__click = [T0, I, Le], De.__keydown = [E0, I, Le];
                      var Ve = l(De), et = l(Ve);
                      {
                        var Qe = (qe) => {
                          var Ge = M0();
                          D((nt) => U(Ge, 1, nt), [() => oe(re("flex-shrink-0", W.icon))]), o(qe, Ge);
                        };
                        x(et, (qe) => {
                          p() && t(Le).icon && qe(Qe);
                        });
                      }
                      var ot = f(et, 2), vt = l(ot), at = f(ot, 2);
                      {
                        var it = (qe) => {
                          var Ge = A0(), nt = l(Ge);
                          D(
                            (xt) => {
                              U(Ge, 1, xt), le(nt, t(Le).badge);
                            },
                            [
                              () => oe(re("inline-flex items-center rounded-full font-medium", W.badge, H.badge))
                            ]
                          ), o(qe, Ge);
                        };
                        x(at, (qe) => {
                          t(Le).badge && qe(it);
                        });
                      }
                      var Ze = f(Ve, 2);
                      {
                        var je = (qe) => {
                          var Ge = z0(), nt = l(Ge);
                          D(
                            (xt) => {
                              U(Ge, 1, xt), le(nt, t(Le).keyboard);
                            },
                            [
                              () => oe(re("opacity-60 font-mono ml-3", W.keyboard, H.keyboard))
                            ]
                          ), o(qe, Ge);
                        };
                        x(Ze, (qe) => {
                          y() && t(Le).keyboard && qe(je);
                        });
                      }
                      D(
                        (qe) => {
                          U(De, 1, qe, "svelte-i7uadz"), ye(De, "aria-disabled", t(Le).disabled), ye(De, "tabindex", t(Le).disabled ? -1 : 0), le(vt, t(Le).label);
                        },
                        [
                          () => oe(re("flex items-center justify-between cursor-pointer transition-all duration-150", W.item, t(Le).disabled ? H.itemDisabled : H.item))
                        ]
                      ), o(ze, De);
                    };
                    x(Be, (ze) => {
                      t(Le).separator ? ze(Se) : ze(he, !1);
                    });
                  }
                  o(Ae, Oe);
                }), Ie(Ee, (Ae, Le) => Tt?.(Ae, Le), () => ({ intensity: "medium" })), D((Ae) => U(Ee, 1, Ae, "svelte-i7uadz"), [
                  () => oe(re("absolute z-10 min-w-[180px] rounded-lg border shadow-lg", "left-full top-0 ml-1", H.menu))
                ]), o(xe, Ee);
              };
              x(Re, (xe) => {
                t(de).children?.length && t(b) === t(de).id && xe(ke);
              });
            }
            D(
              (xe) => {
                U(J, 1, xe, "svelte-i7uadz"), ye(J, "aria-disabled", t(de).disabled), ye(J, "tabindex", t(de).disabled ? -1 : 0), le(ve, t(de).label);
              },
              [
                () => oe(re("flex items-center justify-between cursor-pointer transition-all duration-150", W.item, t(de).disabled ? H.itemDisabled : H.item, t(q) === t(j)().indexOf(t(de)) && !t(de).disabled && H.itemActive, t(b) === t(de).id && H.itemActive))
              ]
            ), Ot("mouseenter", J, () => O(t(de))), Ot("mouseleave", J, R), o(Q, $);
          };
          x(V, (Q) => {
            t(de).separator ? Q(ae) : Q(E, !1);
          });
        }
        o(ce, ee);
      }), Ie(te, (ce, de) => Tt?.(ce, de), () => ({ intensity: "medium" })), D(
        (ce) => {
          ye(te, "id", Z), U(te, 1, ce, "svelte-i7uadz");
        },
        [
          () => oe(re("absolute z-50 min-w-[200px] rounded-lg border shadow-lg", C(), H.menu))
        ]
      ), o(h, te);
    };
    x(T, (h) => {
      t(N) && h(u);
    });
  }
  rt(M, (h) => S = h, () => S), D(() => {
    ye(m, "aria-expanded", t(N)), ye(m, "aria-controls", Z);
  }), Ot("mouseenter", m, function(...h) {
    (a() === "hover" ? G : void 0)?.apply(this, h);
  }), Ot("mouseleave", m, function(...h) {
    (a() === "hover" ? () => setTimeout(B, 150) : void 0)?.apply(this, h);
  }), o(r, M), Ye();
}
gt(["click", "keydown"]);
function N0(r, e, a) {
  e("brandClick"), K(a, !1);
}
function q0(r, e, a) {
  K(e, !t(e)), a("mobileToggle", t(e));
}
var O0 = /* @__PURE__ */ c('<img alt="Logo" class="h-8 w-auto"/>'), F0 = /* @__PURE__ */ c(`<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"> </div>`), B0 = /* @__PURE__ */ c('<span class="text-xl font-bold tracking-tight"> </span>'), H0 = /* @__PURE__ */ c('<div class="flex items-center"><button><!> <!></button></div>'), V0 = (
  // Handle scroll for backdrop effects
  // Click outside to close dropdowns
  (r, e, a) => e(t(a))
), G0 = (r, e, a) => e(r, t(a)), U0 = /* @__PURE__ */ c('<span class="mr-2 text-lg"> </span>'), Y0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), W0 = (r, e, a) => e(t(a), r), K0 = /* @__PURE__ */ c('<span class="mr-2"> </span>'), X0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), Z0 = /* @__PURE__ */ c('<a role="menuitem"><!> <!></a>'), Q0 = /* @__PURE__ */ c('<div role="menu"></div>'), J0 = /* @__PURE__ */ c('<button aria-haspopup="true"><!> <!> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!>', 1), $0 = (r, e, a) => e(t(a), r), ef = (r, e, a) => e(r, t(a)), tf = /* @__PURE__ */ c('<span class="mr-2 text-lg"> </span>'), rf = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), af = /* @__PURE__ */ ir('<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), nf = /* @__PURE__ */ c("<a><!> <!> <!></a>"), of = /* @__PURE__ */ c('<div class="relative"><!></div>'), lf = /* @__PURE__ */ ir('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), sf = /* @__PURE__ */ ir('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'), df = (r, e, a) => e(t(a)), cf = /* @__PURE__ */ c('<span class="mr-3 text-lg"> </span>'), vf = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), uf = (r, e, a) => e(t(a), r), ff = /* @__PURE__ */ c('<span class="mr-3"> </span>'), bf = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), gf = /* @__PURE__ */ c("<a><!> <!></a>"), mf = /* @__PURE__ */ c('<div class="pl-6 mt-2 space-y-1"></div>'), hf = /* @__PURE__ */ c('<div><button><span class="flex items-center"><!> <!></span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), pf = (r, e, a) => e(t(a), r), xf = /* @__PURE__ */ c('<span class="mr-3 text-lg"> </span>'), _f = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), wf = /* @__PURE__ */ ir('<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), yf = /* @__PURE__ */ c("<a><!> <!> <!></a>"), kf = /* @__PURE__ */ c('<div><div class="px-2 pt-2 pb-3 space-y-1"></div></div>'), Cf = /* @__PURE__ */ c('<nav aria-label="Main navigation"><div><!> <div class="hidden md:flex items-center space-x-1"></div> <div class="md:hidden"><button aria-label="Toggle mobile menu"><!></button></div></div> <!></nav>');
const Sf = {
  hash: "svelte-14x41x6",
  code: `
	/* Terminal glow effects */.terminal .navbar-brand:hover {text-shadow:0 0 10px var(--terminal-green);}.terminal .nav-item:hover {box-shadow:0 0 5px var(--terminal-green-glow);}`
};
function Tx(r, e) {
  Ue(e, !0), $e(r, Sf);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "glass"), i = s(e, "position", 3, "static"), d = s(e, "backdrop", 3, !0), v = s(e, "logoText", 3, "TULIO"), p = s(e, "showBrand", 3, !0), y = s(e, "compact", 3, !1), z = s(e, "transparent", 3, !1), g = s(e, "activeItem", 3, ""), L = s(e, "class", 3, ""), N = At();
  let S, k = /* @__PURE__ */ _e(!1), b = /* @__PURE__ */ _e(st(/* @__PURE__ */ new Set())), q = /* @__PURE__ */ _e(!1);
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
      nav: `bg-black/90 border-${Me.terminal.green}`,
      item: `text-${Me.terminal.green}/80 hover:text-${Me.terminal.green} hover:bg-${Me.terminal.green}/10`,
      activeItem: `text-black bg-${Me.terminal.green}`,
      dropdown: `bg-black/95 border-${Me.terminal.green}`,
      brand: `text-${Me.terminal.green}`,
      mobileButton: `text-${Me.terminal.green}/80 hover:text-${Me.terminal.green}`
    }
  }, w = /* @__PURE__ */ we(() => Z[n()]);
  function A(u, h) {
    if (!u.disabled) {
      if (u.children) {
        const te = new Set(t(b));
        te.has(u.id) ? te.delete(u.id) : te.add(u.id), K(b, te, !0);
        return;
      }
      if (K(k, !1), N("navigate", { item: u, href: u.href }), u.external && u.href) {
        window.open(u.href, "_blank", "noopener,noreferrer"), h?.preventDefault();
        return;
      }
    }
  }
  function W() {
    K(b, /* @__PURE__ */ new Set(), !0);
  }
  function H(u, h) {
    u.key === "Enter" || u.key === " " ? (u.preventDefault(), A(h)) : u.key === "Escape" && W();
  }
  ht(() => {
    function u() {
      K(q, window.scrollY > 10);
    }
    if (i() === "fixed" || i() === "sticky")
      return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }), ht(() => {
    function u(h) {
      S && !S.contains(h.target) && W();
    }
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  });
  const j = /* @__PURE__ */ we(() => re("w-full border-b transition-all duration-300", "font-mono", t(w).nav, i() === "fixed" && "fixed top-0 left-0 z-50", i() === "sticky" && "sticky top-0 z-40", d() && "backdrop-blur-xl", z() && !t(q) && "bg-transparent border-transparent", y() ? "py-2" : "py-4", L())), G = /* @__PURE__ */ we(() => re("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "flex items-center justify-between", y() ? "h-12" : "h-16"));
  var B = Cf(), I = l(B), O = l(I);
  {
    var R = (u) => {
      var h = H0(), te = l(h);
      te.__click = [N0, N, k];
      var ie = l(te);
      {
        var ce = (ae) => {
          var E = O0();
          D(() => ye(E, "src", e.logo)), o(ae, E);
        }, de = (ae) => {
          var E = F0(), Q = l(E);
          D(($) => le(Q, $), [() => v().charAt(0)]), o(ae, E);
        };
        x(ie, (ae) => {
          e.logo ? ae(ce) : ae(de, !1);
        });
      }
      var ee = f(ie, 2);
      {
        var V = (ae) => {
          var E = B0(), Q = l(E);
          D(() => le(Q, v())), o(ae, E);
        };
        x(ee, (ae) => {
          v() && ae(V);
        });
      }
      Ie(te, (ae, E) => pt?.(ae, E), () => ({ strength: 0.1 })), D(() => U(te, 1, `flex items-center space-x-3 ${t(w).brand ?? ""} hover:opacity-80 transition-opacity`)), o(u, h);
    };
    x(O, (u) => {
      p() && u(R);
    });
  }
  var P = f(O, 2);
  Xe(P, 21, a, (u) => u.id, (u, h) => {
    var te = of(), ie = l(te);
    {
      var ce = (ee) => {
        var V = J0(), ae = ge(V);
        ae.__click = [V0, A, h], ae.__keydown = [G0, H, h];
        var E = l(ae);
        {
          var Q = (ve) => {
            var pe = U0(), fe = l(pe);
            D(() => le(fe, t(h).icon)), o(ve, pe);
          };
          x(E, (ve) => {
            t(h).icon && ve(Q);
          });
        }
        var $ = f(E), J = f($);
        {
          var se = (ve) => {
            var pe = Y0(), fe = l(pe);
            D(() => le(fe, t(h).badge)), o(ve, pe);
          };
          x(J, (ve) => {
            t(h).badge && ve(se);
          });
        }
        var X = f(J, 2);
        Ie(ae, (ve, pe) => pt?.(ve, pe), () => ({ enabled: !t(h).disabled, strength: 0.1 }));
        var ne = f(ae, 2);
        {
          var ue = (ve) => {
            var pe = Q0();
            Xe(pe, 21, () => t(h).children, (fe) => fe.id, (fe, be) => {
              var me = Z0();
              me.__click = [W0, A, be];
              var Te = l(me);
              {
                var Pe = (xe) => {
                  var Ee = K0(), Ne = l(Ee);
                  D(() => le(Ne, t(be).icon)), o(xe, Ee);
                };
                x(Te, (xe) => {
                  t(be).icon && xe(Pe);
                });
              }
              var Fe = f(Te), Re = f(Fe);
              {
                var ke = (xe) => {
                  var Ee = X0(), Ne = l(Ee);
                  D(() => le(Ne, t(be).badge)), o(xe, Ee);
                };
                x(Re, (xe) => {
                  t(be).badge && xe(ke);
                });
              }
              Ie(me, (xe, Ee) => pt?.(xe, Ee), () => ({ enabled: !t(be).disabled, strength: 0.1 })), D(() => {
                ye(me, "href", t(be).href), U(me, 1, `block px-4 py-2 text-sm ${t(w).item ?? ""} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       ${t(be).disabled ? "opacity-50 cursor-not-allowed" : ""}`), le(Fe, ` ${t(be).label ?? ""} `);
              }), o(fe, me);
            }), Ie(pe, (fe, be) => Tt?.(fe, be), () => ({ blur: "xl", opacity: "strong" })), D(() => U(pe, 1, `absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       ${t(w).dropdown ?? ""}`)), tt(1, pe, () => _t, () => ({ direction: "up", duration: 200 })), o(ve, pe);
          };
          x(ne, (ve) => {
            t(b).has(t(h).id) && ve(ue);
          });
        }
        D(
          (ve, pe) => {
            U(ae, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(h).id === g() ? t(w).activeItem : t(w).item) ?? ""}
							       ${t(h).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ae.disabled = t(h).disabled, ye(ae, "aria-expanded", ve), le($, ` ${t(h).label ?? ""} `), U(X, 0, `ml-1 w-4 h-4 transition-transform duration-200
								       ${pe ?? ""}`);
          },
          [
            () => t(b).has(t(h).id),
            () => t(b).has(t(h).id) ? "rotate-180" : ""
          ]
        ), o(ee, V);
      }, de = (ee) => {
        var V = nf();
        V.__click = [$0, A, h], V.__keydown = [ef, H, h];
        var ae = l(V);
        {
          var E = (ne) => {
            var ue = tf(), ve = l(ue);
            D(() => le(ve, t(h).icon)), o(ne, ue);
          };
          x(ae, (ne) => {
            t(h).icon && ne(E);
          });
        }
        var Q = f(ae), $ = f(Q);
        {
          var J = (ne) => {
            var ue = rf(), ve = l(ue);
            D(() => le(ve, t(h).badge)), o(ne, ue);
          };
          x($, (ne) => {
            t(h).badge && ne(J);
          });
        }
        var se = f($, 2);
        {
          var X = (ne) => {
            var ue = af();
            o(ne, ue);
          };
          x(se, (ne) => {
            t(h).external && ne(X);
          });
        }
        Ie(V, (ne, ue) => pt?.(ne, ue), () => ({ enabled: !t(h).disabled, strength: 0.1 })), D(() => {
          ye(V, "href", t(h).href), U(V, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(h).id === g() ? t(w).activeItem : t(w).item) ?? ""}
							       ${t(h).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ye(V, "aria-current", t(h).id === g() ? "page" : void 0), le(Q, ` ${t(h).label ?? ""} `);
        }), o(ee, V);
      };
      x(ie, (ee) => {
        t(h).children ? ee(ce) : ee(de, !1);
      });
    }
    o(u, te);
  });
  var C = f(P, 2), M = l(C);
  M.__click = [q0, k, N];
  var m = l(M);
  {
    var _ = (u) => {
      var h = lf();
      o(u, h);
    }, F = (u) => {
      var h = sf();
      o(u, h);
    };
    x(m, (u) => {
      t(k) ? u(_) : u(F, !1);
    });
  }
  Ie(M, (u, h) => pt?.(u, h), () => ({ strength: 0.15 }));
  var Y = f(I, 2);
  {
    var T = (u) => {
      var h = kf(), te = l(h);
      Xe(te, 21, a, (ie) => ie.id, (ie, ce) => {
        var de = Ce(), ee = ge(de);
        {
          var V = (E) => {
            var Q = hf(), $ = l(Q);
            $.__click = [df, A, ce];
            var J = l($), se = l(J);
            {
              var X = (me) => {
                var Te = cf(), Pe = l(Te);
                D(() => le(Pe, t(ce).icon)), o(me, Te);
              };
              x(se, (me) => {
                t(ce).icon && me(X);
              });
            }
            var ne = f(se), ue = f(ne);
            {
              var ve = (me) => {
                var Te = vf(), Pe = l(Te);
                D(() => le(Pe, t(ce).badge)), o(me, Te);
              };
              x(ue, (me) => {
                t(ce).badge && me(ve);
              });
            }
            var pe = f(J, 2), fe = f($, 2);
            {
              var be = (me) => {
                var Te = mf();
                Xe(Te, 21, () => t(ce).children, (Pe) => Pe.id, (Pe, Fe) => {
                  var Re = gf();
                  Re.__click = [uf, A, Fe];
                  var ke = l(Re);
                  {
                    var xe = (Le) => {
                      var Oe = ff(), Be = l(Oe);
                      D(() => le(Be, t(Fe).icon)), o(Le, Oe);
                    };
                    x(ke, (Le) => {
                      t(Fe).icon && Le(xe);
                    });
                  }
                  var Ee = f(ke), Ne = f(Ee);
                  {
                    var Ae = (Le) => {
                      var Oe = bf(), Be = l(Oe);
                      D(() => le(Be, t(Fe).badge)), o(Le, Oe);
                    };
                    x(Ne, (Le) => {
                      t(Fe).badge && Le(Ae);
                    });
                  }
                  D(() => {
                    ye(Re, "href", t(Fe).href), U(Re, 1, `flex items-center px-3 py-2 rounded-md text-sm
											       ${t(w).item ?? ""} hover:bg-white/10 transition-colors
											       ${t(Fe).disabled ? "opacity-50 cursor-not-allowed" : ""}`), le(Ee, ` ${t(Fe).label ?? ""} `);
                  }), o(Pe, Re);
                }), tt(1, Te, () => _t, () => ({ direction: "down", duration: 150 })), o(me, Te);
              };
              x(fe, (me) => {
                t(b).has(t(ce).id) && me(be);
              });
            }
            D(
              (me, Te) => {
                U($, 1, `w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       ${(t(ce).id === g() ? t(w).activeItem : t(w).item) ?? ""}
								       ${t(ce).disabled ? "opacity-50 cursor-not-allowed" : ""}`), $.disabled = t(ce).disabled, ye($, "aria-expanded", me), le(ne, ` ${t(ce).label ?? ""} `), U(pe, 0, `w-5 h-5 transition-transform duration-200
									       ${Te ?? ""}`);
              },
              [
                () => t(b).has(t(ce).id),
                () => t(b).has(t(ce).id) ? "rotate-180" : ""
              ]
            ), o(E, Q);
          }, ae = (E) => {
            var Q = yf();
            Q.__click = [pf, A, ce];
            var $ = l(Q);
            {
              var J = (pe) => {
                var fe = xf(), be = l(fe);
                D(() => le(be, t(ce).icon)), o(pe, fe);
              };
              x($, (pe) => {
                t(ce).icon && pe(J);
              });
            }
            var se = f($), X = f(se);
            {
              var ne = (pe) => {
                var fe = _f(), be = l(fe);
                D(() => le(be, t(ce).badge)), o(pe, fe);
              };
              x(X, (pe) => {
                t(ce).badge && pe(ne);
              });
            }
            var ue = f(X, 2);
            {
              var ve = (pe) => {
                var fe = wf();
                o(pe, fe);
              };
              x(ue, (pe) => {
                t(ce).external && pe(ve);
              });
            }
            D(() => {
              ye(Q, "href", t(ce).href), U(Q, 1, `flex items-center px-3 py-2 rounded-md text-base font-medium
							       ${(t(ce).id === g() ? t(w).activeItem : t(w).item) ?? ""}
							       ${t(ce).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ye(Q, "aria-current", t(ce).id === g() ? "page" : void 0), le(se, ` ${t(ce).label ?? ""} `);
            }), o(E, Q);
          };
          x(ee, (E) => {
            t(ce).children ? E(V) : E(ae, !1);
          });
        }
        o(ie, de);
      }), D(() => U(h, 1, `md:hidden border-t ${t(w).nav ?? ""}`)), tt(1, h, () => _t, () => ({ direction: "down", duration: 200 })), o(u, h);
    };
    x(Y, (u) => {
      t(k) && u(T);
    });
  }
  rt(B, (u) => S = u, () => S), Ie(B, (u, h) => Tt?.(u, h), () => d() ? { blur: "xl", opacity: "medium" } : void 0), D(() => {
    U(B, 1, oe(t(j))), U(I, 1, oe(t(G))), U(M, 1, `p-2 rounded-md ${t(w).mobileButton ?? ""} hover:bg-white/10 transition-colors`), ye(M, "aria-expanded", t(k));
  }), o(r, B), Ye();
}
gt(["click", "keydown"]);
function Ka(r) {
  if (typeof window > "u" || typeof document > "u") return "";
  const e = document.createElement("template");
  e.innerHTML = String(r);
  const a = (n) => {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const i = n, d = i.tagName.toLowerCase();
      if (d === "script" || d === "style") {
        i.remove();
        return;
      }
      for (const v of Array.from(i.attributes)) {
        const p = v.name.toLowerCase(), y = v.value;
        if (p.startsWith("on")) {
          i.removeAttribute(v.name);
          continue;
        }
        if ((p === "href" || p === "src") && /^\s*javascript:/i.test(y)) {
          i.removeAttribute(v.name);
          continue;
        }
      }
    }
    for (const i of Array.from(n.childNodes)) a(i);
  };
  return a(e.content), e.innerHTML;
}
var Tf = /* @__PURE__ */ c('<div class="relative"><!> <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">🔍</button></div>'), Ef = /* @__PURE__ */ c('<span class="text-sm text-gray-400"> </span>'), Mf = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><!> <!></div> <div class="flex items-center gap-2"><!></div></div>'), Af = (r, e) => {
  const a = r.target;
  e(a.checked);
}, zf = /* @__PURE__ */ c('<th><input type="checkbox" class="rounded bg-transparent border-current"/></th>'), If = (r, e, a) => t(e).sortable && a(t(e)), Pf = /* @__PURE__ */ c('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), Lf = /* @__PURE__ */ c('<th><div class="flex items-center gap-2"><span> </span> <!></div></th>'), Df = /* @__PURE__ */ c("<th>Actions</th>"), Rf = /* @__PURE__ */ c('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), jf = /* @__PURE__ */ c('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), Nf = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, qf = (r) => r.stopPropagation(), Of = /* @__PURE__ */ c('<td><input type="checkbox" class="rounded bg-transparent border-current"/></td>'), Ff = (r, e, a, n, i) => e() && t(a).editable && n(t(i), t(a)), Bf = (r, e, a) => {
  r.key === "Enter" && e(), r.key === "Escape" && a();
}, Hf = /* @__PURE__ */ c('<input class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"/>'), Vf = /* @__PURE__ */ c("<td><!></td>"), Gf = /* @__PURE__ */ c('<span class="mr-1"> </span>'), Uf = /* @__PURE__ */ c("<!> ", 1), Yf = /* @__PURE__ */ c('<td><div class="flex items-center gap-1"></div></td>'), Wf = /* @__PURE__ */ c("<tr><!><!><!></tr>"), Kf = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><span class="text-sm text-gray-400"> </span></div> <div class="flex items-center gap-2"><!> <!> <!></div></div>'), Xf = /* @__PURE__ */ c('<div><!> <div class="overflow-auto"><table class="w-full"><thead><tr><!><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Zf = {
  hash: "svelte-23n5dg",
  code: `
	/* Terminal glow effects */.terminal .data-grid:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function Ex(r, e) {
  Ue(e, !0), $e(r, Zf);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), i = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), v = s(e, "loading", 3, !1);
  s(e, "virtualScrolling", 3, !1), s(e, "rowHeight", 3, 60);
  const p = s(e, "maxHeight", 3, "600px"), y = s(e, "sortBy", 3, ""), z = s(e, "sortOrder", 3, "asc"), g = s(e, "filters", 19, () => []), L = s(e, "searchable", 3, !0), N = s(e, "searchPlaceholder", 3, "Search..."), S = s(e, "selectable", 3, !1), k = s(e, "multiSelect", 3, !1), b = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), q = s(e, "editable", 3, !1), Z = s(e, "pagination", 3, !0), w = s(e, "pageSize", 3, 10), A = s(e, "currentPage", 3, 1), W = s(e, "stickyHeader", 3, !0);
  s(e, "resizableColumns", 3, !1), s(e, "reorderableColumns", 3, !1);
  const H = s(e, "exportable", 3, !1), j = s(e, "actions", 19, () => []), G = s(e, "emptyMessage", 3, "No data available"), B = s(e, "class", 3, ""), I = At();
  let O = /* @__PURE__ */ _e("");
  const R = st(g());
  let P = /* @__PURE__ */ _e(st(y())), C = /* @__PURE__ */ _e(st(z())), M = /* @__PURE__ */ _e(st(b())), m = /* @__PURE__ */ _e(null), _ = /* @__PURE__ */ _e("");
  const F = {
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
  }, Y = {
    sm: { cell: "px-2 py-1 text-xs", header: "px-2 py-2 text-xs" },
    md: { cell: "px-3 py-2 text-sm", header: "px-3 py-3 text-sm" },
    lg: { cell: "px-4 py-3 text-base", header: "px-4 py-4 text-base" }
  }, T = /* @__PURE__ */ we(() => F[i()]), u = /* @__PURE__ */ we(() => Y[d()]), h = /* @__PURE__ */ we(() => () => {
    let Se = n();
    if (t(O).trim()) {
      const he = t(O).toLowerCase();
      Se = Se.filter((ze) => a().some((De) => String(ze[De.key] || "").toLowerCase().includes(he)));
    }
    for (const he of R)
      Se = Se.filter((ze) => {
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
    return t(P) && a().find((ze) => ze.key === t(P))?.sortable && Se.sort((ze, De) => {
      const Ve = ze[t(P)], et = De[t(P)];
      if (Ve === et) return 0;
      const Qe = t(C) === "asc";
      return Ve < et ? Qe ? -1 : 1 : Qe ? 1 : -1;
    }), Se;
  }), te = /* @__PURE__ */ we(() => Math.ceil((e.totalRows ?? t(h).length) / w())), ie = /* @__PURE__ */ we(() => () => {
    if (!Z()) return t(h);
    const Se = (A() - 1) * w();
    return t(h).slice(Se, Se + w());
  }), ce = /* @__PURE__ */ we(() => () => {
    const Se = [], he = Math.min(5, t(te)), ze = Math.max(1, Math.min(t(te) - (he - 1), A() - Math.floor(he / 2)));
    for (let De = 0; De < he; De++) Se.push(ze + De);
    return Se;
  });
  function de(Se) {
    Se.sortable && (t(P) === Se.key ? K(C, t(C) === "asc" ? "desc" : "asc", !0) : (K(P, Se.key, !0), K(C, "asc")), I("sort", { column: Se.key, order: t(C) }));
  }
  function ee() {
    I("search", { query: t(O) });
  }
  function V(Se, he) {
    I("rowClick", { row: Se, index: he });
  }
  function ae(Se, he) {
    k() ? he ? t(M).add(Se.id) : t(M).delete(Se.id) : K(M, he ? /* @__PURE__ */ new Set([Se.id]) : /* @__PURE__ */ new Set(), !0), K(M, new Set(t(M)), !0), I("rowSelect", { row: Se, selected: he });
  }
  function E(Se) {
    Se ? K(M, new Set(t(ie).map((he) => he.id)), !0) : K(M, /* @__PURE__ */ new Set(), !0), I("selectAll", { selected: Se });
  }
  function Q(Se, he) {
    !q() || !he.editable || (K(m, { rowId: Se.id, column: he.key }, !0), K(_, String(Se[he.key] || ""), !0));
  }
  function $() {
    if (!t(m)) return;
    const Se = t(ie).find((Ve) => Ve.id === t(m).rowId);
    if (!Se) return;
    const he = a().find((Ve) => Ve.key === t(m).column);
    if (!he) return;
    const ze = Se[he.key];
    let De = t(_);
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
      const Ve = he.validation(De);
      if (Ve) {
        alert(Ve);
        return;
      }
    }
    I("cellEdit", { row: Se, column: he.key, oldValue: ze, newValue: De }), K(m, null), K(_, "");
  }
  function J() {
    K(m, null), K(_, "");
  }
  function se(Se, he, ze) {
    if (Se.render)
      return Se.render(he, ze, Se);
    if (Se.formatter)
      return Se.formatter(he, ze);
    switch (Se.type) {
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
  const X = /* @__PURE__ */ we(() => t(ie).length > 0 && t(ie).every((Se) => t(M).has(Se.id))), ne = /* @__PURE__ */ we(() => re("rounded-lg border overflow-hidden font-mono", t(T).container, B()));
  var ue = Xf(), ve = l(ue);
  {
    var pe = (Se) => {
      var he = Mf(), ze = l(he), De = l(ze);
      {
        var Ve = (it) => {
          var Ze = Tf(), je = l(Ze);
          Fd(je, {
            get placeholder() {
              return N();
            },
            size: "sm",
            get variant() {
              return i();
            },
            class: "w-64",
            onkeydown: (Ge) => {
              Ge.key === "Enter" && ee();
            },
            get value() {
              return t(O);
            },
            set value(Ge) {
              K(O, Ge, !0);
            }
          });
          var qe = f(je, 2);
          qe.__click = ee, o(it, Ze);
        };
        x(De, (it) => {
          L() && it(Ve);
        });
      }
      var et = f(De, 2);
      {
        var Qe = (it) => {
          var Ze = Ef(), je = l(Ze);
          D(() => le(je, `${t(M).size ?? ""} selected`)), o(it, Ze);
        };
        x(et, (it) => {
          t(M).size > 0 && it(Qe);
        });
      }
      var ot = f(ze, 2), vt = l(ot);
      {
        var at = (it) => {
          rr(it, {
            size: "sm",
            get variant() {
              return i();
            },
            onclick: () => I("export", { format: "csv" }),
            children: (Ze, je) => {
              var qe = Ct("📥 Export");
              o(Ze, qe);
            },
            $$slots: { default: !0 }
          });
        };
        x(vt, (it) => {
          H() && it(at);
        });
      }
      D((it) => U(he, 1, it), [
        () => oe(re("px-4 py-3 border-b flex items-center justify-between", t(T).toolbar))
      ]), o(Se, he);
    };
    x(ve, (Se) => {
      (L() || H() || j().length > 0) && Se(pe);
    });
  }
  var fe = f(ve, 2), be = l(fe), me = l(be), Te = l(me), Pe = l(Te);
  {
    var Fe = (Se) => {
      var he = zf(), ze = l(he);
      ze.__change = [Af, E], D(
        (De) => {
          U(he, 1, De), Zt(ze, t(X));
        },
        [
          () => oe(re(t(u).header, t(T).headerCell, "w-12"))
        ]
      ), o(Se, he);
    };
    x(Pe, (Se) => {
      S() && Se(Fe);
    });
  }
  var Re = f(Pe);
  Xe(Re, 17, a, (Se) => Se.key, (Se, he) => {
    var ze = Lf();
    ze.__click = [If, he, de];
    var De = l(ze), Ve = l(De), et = l(Ve), Qe = f(Ve, 2);
    {
      var ot = (vt) => {
        var at = Pf(), it = l(at), Ze = f(it, 2);
        D(
          (je, qe) => {
            U(it, 0, je), U(Ze, 0, qe);
          },
          [
            () => oe(re("w-3 h-3 transition-colors", t(P) === t(he).key && t(C) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => oe(re("w-3 h-3 -mt-1 transition-colors", t(P) === t(he).key && t(C) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(vt, at);
      };
      x(Qe, (vt) => {
        t(he).sortable && vt(ot);
      });
    }
    Ie(ze, (vt, at) => pt?.(vt, at), () => ({ enabled: t(he).sortable, strength: 0.05 })), D(
      (vt) => {
        U(ze, 1, vt), ut(ze, t(he).width ? `width: ${t(he).width}` : void 0), le(et, t(he).label);
      },
      [
        () => oe(re(t(u).header, t(T).headerCell, "font-semibold text-left", t(he).align && `text-${t(he).align}`, t(he).sortable && "cursor-pointer select-none"))
      ]
    ), o(Se, ze);
  });
  var ke = f(Re);
  {
    var xe = (Se) => {
      var he = Df();
      D((ze) => U(he, 1, ze), [
        () => oe(re(t(u).header, t(T).headerCell, "w-32"))
      ]), o(Se, he);
    };
    x(ke, (Se) => {
      j().length > 0 && Se(xe);
    });
  }
  var Ee = f(me), Ne = l(Ee);
  {
    var Ae = (Se) => {
      var he = Rf(), ze = l(he);
      D(
        (De) => {
          ye(ze, "colspan", a().length + (S() ? 1 : 0) + (j().length > 0 ? 1 : 0)), U(ze, 1, De);
        },
        [
          () => oe(re(t(u).cell, t(T).cell, "text-center"))
        ]
      ), o(Se, he);
    }, Le = (Se) => {
      var he = Ce(), ze = ge(he);
      {
        var De = (et) => {
          var Qe = jf(), ot = l(Qe), vt = l(ot), at = f(l(vt), 2), it = l(at);
          D(
            (Ze) => {
              ye(ot, "colspan", a().length + (S() ? 1 : 0) + (j().length > 0 ? 1 : 0)), U(ot, 1, Ze), le(it, G());
            },
            [
              () => oe(re(t(u).cell, t(T).cell, "text-center text-gray-400"))
            ]
          ), o(et, Qe);
        }, Ve = (et) => {
          var Qe = Ce(), ot = ge(Qe);
          Xe(ot, 19, () => t(ie), (vt) => vt.id, (vt, at, it) => {
            const Ze = /* @__PURE__ */ we(() => t(M).has(t(at).id));
            var je = Wf();
            je.__click = () => V(t(at), t(it));
            var qe = l(je);
            {
              var Ge = (yt) => {
                var mt = Of(), St = l(mt);
                St.__change = [Nf, ae, at], St.__click = [qf], D(
                  (Rt) => {
                    U(mt, 1, Rt), Zt(St, t(Ze));
                  },
                  [
                    () => oe(re(t(u).cell, t(T).cell))
                  ]
                ), o(yt, mt);
              };
              x(qe, (yt) => {
                S() && yt(Ge);
              });
            }
            var nt = f(qe);
            Xe(nt, 17, a, (yt) => yt.key, (yt, mt) => {
              var St = Vf();
              St.__dblclick = [Ff, q, mt, Q, at];
              var Rt = l(St);
              {
                var Kt = (er) => {
                  var lr = Hf();
                  lr.__keydown = [Bf, $, J], Ot("blur", lr, $), _r(lr, () => t(_), (wr) => K(_, wr)), o(er, lr);
                }, ga = (er) => {
                  var lr = Ce(), wr = ge(lr);
                  Va(wr, () => Ka(se(t(mt), t(at)[t(mt).key], t(at)))), o(er, lr);
                };
                x(Rt, (er) => {
                  t(m)?.rowId === t(at).id && t(m)?.column === t(mt).key ? er(Kt) : er(ga, !1);
                });
              }
              D((er) => U(St, 1, er), [
                () => oe(re(t(u).cell, t(T).cell, t(mt).align && `text-${t(mt).align}`))
              ]), o(yt, St);
            });
            var xt = f(nt);
            {
              var kt = (yt) => {
                var mt = Yf(), St = l(mt);
                Xe(St, 21, j, Fr, (Rt, Kt) => {
                  var ga = Ce(), er = ge(ga);
                  {
                    var lr = (wr) => {
                      {
                        let ki = /* @__PURE__ */ we(() => t(Kt).variant || "secondary");
                        rr(wr, {
                          size: "sm",
                          get variant() {
                            return t(ki);
                          },
                          onclick: (Xa) => {
                            Xa.stopPropagation(), I("actionClick", { row: t(at), action: t(Kt).action });
                          },
                          children: (Xa, Gp) => {
                            var qn = Uf(), On = ge(qn);
                            {
                              var Ci = (Za) => {
                                var Fn = Gf(), Ti = l(Fn);
                                D(() => le(Ti, t(Kt).icon)), o(Za, Fn);
                              };
                              x(On, (Za) => {
                                t(Kt).icon && Za(Ci);
                              });
                            }
                            var Si = f(On);
                            D(() => le(Si, ` ${t(Kt).label ?? ""}`)), o(Xa, qn);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    };
                    x(er, (wr) => {
                      (!t(Kt).show || t(Kt).show(t(at))) && wr(lr);
                    });
                  }
                  o(Rt, ga);
                }), D((Rt) => U(mt, 1, Rt), [
                  () => oe(re(t(u).cell, t(T).cell))
                ]), o(yt, mt);
              };
              x(xt, (yt) => {
                j().length > 0 && yt(kt);
              });
            }
            D((yt) => U(je, 1, yt), [
              () => oe(re(t(T).row, t(T).rowHover, t(Ze) && t(T).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), tt(1, je, () => _t, () => ({ direction: "up", duration: 100, delay: t(it) * 20 })), o(vt, je);
          }), o(et, Qe);
        };
        x(
          ze,
          (et) => {
            t(ie).length === 0 ? et(De) : et(Ve, !1);
          },
          !0
        );
      }
      o(Se, he);
    };
    x(Ne, (Se) => {
      v() ? Se(Ae) : Se(Le, !1);
    });
  }
  Ie(fe, (Se, he) => Tt?.(Se, he), () => ({ blur: "sm", opacity: "subtle" }));
  var Oe = f(fe, 2);
  {
    var Be = (Se) => {
      var he = Kf(), ze = l(he), De = l(ze), Ve = l(De), et = f(ze, 2), Qe = l(et);
      {
        let at = /* @__PURE__ */ we(() => A() === 1);
        rr(Qe, {
          size: "sm",
          get variant() {
            return i();
          },
          get disabled() {
            return t(at);
          },
          onclick: () => I("pageChange", { page: A() - 1 }),
          children: (it, Ze) => {
            var je = Ct("Previous");
            o(it, je);
          },
          $$slots: { default: !0 }
        });
      }
      var ot = f(Qe, 2);
      Xe(ot, 18, () => t(ce), (at) => at, (at, it) => {
        {
          let Ze = /* @__PURE__ */ we(() => it === A() ? "primary" : "secondary");
          rr(at, {
            size: "sm",
            get variant() {
              return t(Ze);
            },
            onclick: () => I("pageChange", { page: it }),
            children: (je, qe) => {
              var Ge = Ct();
              D(() => le(Ge, it)), o(je, Ge);
            },
            $$slots: { default: !0 }
          });
        }
      });
      var vt = f(ot, 2);
      {
        let at = /* @__PURE__ */ we(() => A() === t(te));
        rr(vt, {
          size: "sm",
          get variant() {
            return i();
          },
          get disabled() {
            return t(at);
          },
          onclick: () => I("pageChange", { page: A() + 1 }),
          children: (it, Ze) => {
            var je = Ct("Next");
            o(it, je);
          },
          $$slots: { default: !0 }
        });
      }
      D(
        (at, it) => {
          U(he, 1, at), le(Ve, `Showing ${(A() - 1) * w() + 1} to ${it ?? ""} of ${e.totalRows ?? t(h).length ?? ""} entries`);
        },
        [
          () => oe(re("px-4 py-3 border-t flex items-center justify-between", t(T).pagination)),
          () => Math.min(A() * w(), e.totalRows ?? t(h).length)
        ]
      ), o(Se, he);
    };
    x(Oe, (Se) => {
      Z() && t(te) > 1 && Se(Be);
    });
  }
  D(
    (Se) => {
      U(ue, 1, oe(t(ne))), ut(fe, p() ? `max-height: ${p()}` : void 0), U(me, 1, Se);
    },
    [
      () => oe(re(t(T).header, W() && "sticky top-0 z-10"))
    ]
  ), o(r, ue), Ye();
}
gt(["click", "change", "dblclick", "keydown"]);
var Qf = /* @__PURE__ */ c('<th class="w-8 px-2 py-2 align-middle svelte-qp1ncx"><input type="checkbox" aria-label="Select page rows"/></th>'), Jf = (r, e, a) => e(t(a)), $f = /* @__PURE__ */ c('<span class="inline-block ml-1 text-xs opacity-70"> </span>'), eb = /* @__PURE__ */ c('<span class="inline-block ml-1 text-xs opacity-30" aria-hidden="true">↕</span>'), tb = /* @__PURE__ */ c("<th><span> </span> <!></th>"), rb = /* @__PURE__ */ c('<tr><td class="px-4 py-6 text-center text-white/60 svelte-qp1ncx"> </td></tr>'), ab = (r, e, a) => e(t(a).id), nb = /* @__PURE__ */ c('<td class="px-2 py-2 text-center svelte-qp1ncx"><input type="checkbox"/></td>'), ob = /* @__PURE__ */ c("<td> </td>"), ib = /* @__PURE__ */ c('<tr class="border-t border-white/5 text-white/90 hover:bg-white/5 transition-colors"><!><!></tr>'), lb = (r, e, a) => e(t(a) - 1), sb = (r, e, a) => e(t(a) + 1), db = /* @__PURE__ */ c('<div class="flex items-center justify-between mt-3 text-xs text-white/70 gap-4 flex-wrap"><div> </div> <div class="flex items-center gap-2"><button class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">Prev</button> <button class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">Next</button></div></div>'), cb = /* @__PURE__ */ c('<div><div class="overflow-x-auto border border-white/10 rounded-lg"><table class="w-full text-sm border-collapse svelte-qp1ncx"><thead class="bg-white/5 text-white/80"><tr><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const vb = {
  hash: "svelte-qp1ncx",
  code: `table.svelte-qp1ncx {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;}th.svelte-qp1ncx,
    td.svelte-qp1ncx {vertical-align:top;}`
};
function Mx(r, e) {
  Ue(e, !0), $e(r, vb);
  let a = s(e, "selectable", 3, !1), n = s(e, "selectedRows", 31, () => st([])), i = s(e, "pageSize", 3, 10), d = s(e, "showPagination", 3, !1), v = s(e, "class", 3, ""), p = s(e, "emptyMessage", 3, "No data"), y = /* @__PURE__ */ ct(e, [
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
  const z = At();
  let g = /* @__PURE__ */ _e(null), L = /* @__PURE__ */ _e(1);
  function N(u) {
    u.sortable && (!t(g) || t(g).key !== u.key ? K(g, { key: u.key, direction: "asc" }, !0) : K(
      g,
      t(g).direction === "asc" ? { key: u.key, direction: "desc" } : null,
      // third click clears sort
      !0
    ), K(L, 1), z("sort", t(g)));
  }
  function S(u) {
    switch (u) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  }
  const k = /* @__PURE__ */ we(() => () => {
    if (!t(g)) return e.data;
    const { key: u, direction: h } = t(g), te = h === "asc" ? 1 : -1;
    return [...e.data].sort((ie, ce) => {
      const de = ie[u], ee = ce[u];
      return de == null && ee == null ? 0 : de == null ? -1 * te : ee == null ? 1 * te : de < ee ? -1 * te : de > ee ? 1 * te : 0;
    });
  }), b = /* @__PURE__ */ we(() => () => d() ? Math.max(1, Math.ceil(t(k)().length / i())) : 1), q = /* @__PURE__ */ we(() => () => {
    if (!d()) return t(k)();
    const u = (t(L) - 1) * i();
    return t(k)().slice(u, u + i());
  });
  function Z(u) {
    const h = Math.min(Math.max(1, u), t(b)());
    h !== t(L) && (K(L, h, !0), z("pageChange", { page: t(L) }));
  }
  function w() {
    if (!a()) return !1;
    const u = t(q)();
    return u.length === 0 ? !1 : u.every((h) => n().includes(h.id));
  }
  function A() {
    if (!a()) return;
    const u = t(q)();
    if (u.length !== 0) {
      if (w())
        n(n().filter((h) => !u.some((te) => te.id === h)));
      else {
        const h = u.map((te) => te.id).filter((te) => !n().includes(te));
        n([...n(), ...h]);
      }
      z("selectionChange", { selected: n() });
    }
  }
  function W(u) {
    a() && (n(n().includes(u) ? n().filter((h) => h !== u) : [...n(), u]), z("selectionChange", { selected: n() }));
  }
  function H(u) {
    if (u.sortable)
      return !t(g) || t(g).key !== u.key ? "none" : t(g)?.direction === "asc" ? "ascending" : "descending";
  }
  bt(() => {
    e.columns.length, n().length, t(q)().length, t(k)().length, t(b)(), p(), v();
  });
  var j = cb();
  Je(j, () => ({ class: "w-full " + v(), ...y }));
  var G = l(j), B = l(G), I = l(B), O = l(I), R = l(O);
  {
    var P = (u) => {
      var h = Qf(), te = l(h);
      te.__click = A, D((ie) => Zt(te, ie), [w]), o(u, h);
    };
    x(R, (u) => {
      a() && u(P);
    });
  }
  var C = f(R);
  Xe(C, 17, () => e.columns, (u) => u.key, (u, h) => {
    var te = tb();
    te.__click = [Jf, N, h];
    var ie = l(te), ce = l(ie), de = f(ie, 2);
    {
      var ee = (V) => {
        var ae = Ce(), E = ge(ae);
        {
          var Q = (J) => {
            var se = $f(), X = l(se);
            D(() => le(X, t(g).direction === "asc" ? "▲" : "▼")), o(J, se);
          }, $ = (J) => {
            var se = eb();
            o(J, se);
          };
          x(E, (J) => {
            t(g) && t(g).key === t(h).key ? J(Q) : J($, !1);
          });
        }
        o(V, ae);
      };
      x(de, (V) => {
        t(h).sortable && V(ee);
      });
    }
    D(
      (V, ae) => {
        U(te, 1, V, "svelte-qp1ncx"), ut(te, t(h).width ? `width:${t(h).width}` : void 0), ye(te, "role", t(h).sortable ? "columnheader" : void 0), ye(te, "aria-sort", ae), le(ce, t(h).label);
      },
      [
        () => "px-3 py-2 font-semibold tracking-wide select-none " + S(t(h).align) + (t(h).sortable ? " cursor-pointer hover:bg-white/10" : ""),
        () => H(t(h))
      ]
    ), o(u, te);
  });
  var M = f(I), m = l(M);
  {
    var _ = (u) => {
      var h = rb(), te = l(h), ie = l(te);
      D(() => {
        ye(te, "colspan", e.columns.length + (a() ? 1 : 0)), le(ie, p());
      }), o(u, h);
    }, F = (u) => {
      var h = Ce(), te = ge(h);
      Xe(te, 17, () => t(q)(), (ie) => ie.id, (ie, ce) => {
        var de = ib(), ee = l(de);
        {
          var V = (E) => {
            var Q = nb(), $ = l(Q);
            $.__click = [ab, W, ce], D(
              (J) => {
                ye($, "aria-label", `Select row ${t(ce).id}`), Zt($, J);
              },
              [() => n().includes(t(ce).id)]
            ), o(E, Q);
          };
          x(ee, (E) => {
            a() && E(V);
          });
        }
        var ae = f(ee);
        Xe(ae, 17, () => e.columns, (E) => E.key, (E, Q) => {
          var $ = ob(), J = l($);
          D(
            (se) => {
              U($, 1, se, "svelte-qp1ncx"), le(J, t(ce)[t(Q).key]);
            },
            [
              () => "px-3 py-2 align-top " + S(t(Q).align)
            ]
          ), o(E, $);
        }), o(ie, de);
      }), o(u, h);
    };
    x(m, (u) => {
      t(q)().length === 0 ? u(_) : u(F, !1);
    });
  }
  var Y = f(G, 2);
  {
    var T = (u) => {
      var h = db(), te = l(h), ie = l(te), ce = f(te, 2), de = l(ce);
      de.__click = [lb, Z, L];
      var ee = f(de, 2);
      ee.__click = [sb, Z, L], D(
        (V, ae) => {
          le(ie, `Page ${t(L) ?? ""} of ${V ?? ""}`), de.disabled = t(L) === 1, ee.disabled = ae;
        },
        [
          () => t(b)(),
          () => t(L) === t(b)()
        ]
      ), o(u, h);
    };
    x(Y, (u) => {
      d() && t(b)() > 1 && u(T);
    });
  }
  o(r, j), Ye();
}
gt(["click"]);
var ub = (r, e) => {
  const a = r.target;
  e(a.checked);
}, fb = /* @__PURE__ */ c('<div><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" aria-label="Select all items" class="rounded bg-transparent border-current"/> <span class="text-sm font-medium"> </span></label></div>'), bb = /* @__PURE__ */ c('<div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div>'), gb = /* @__PURE__ */ c('<div class="space-y-3"><div class="flex items-start gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div> <div></div></div></div></div>'), mb = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><div></div> <div class="flex-1 space-y-2"><div></div> <div></div></div></div></div>'), hb = /* @__PURE__ */ c("<div><!></div>"), pb = /* @__PURE__ */ c('<div><div class="text-4xl mb-3"> </div> <p class="text-lg font-medium"> </p></div>'), xb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, _b = (r) => r.stopPropagation(), wb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current"/>'), yb = /* @__PURE__ */ c("<img/>"), kb = /* @__PURE__ */ c('<div><span class="text-2xl"> </span></div>'), Cb = /* @__PURE__ */ c("<span> </span>"), Sb = /* @__PURE__ */ c("<p> </p>"), Tb = (r, e, a, n) => e(t(a), t(n).action, r), Eb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), Mb = /* @__PURE__ */ c("<button><!> </button>"), Ab = /* @__PURE__ */ c('<div class="flex items-center gap-2"></div>'), zb = /* @__PURE__ */ c('<div class="flex items-center gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!></div>'), Ib = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Pb = (r) => r.stopPropagation(), Lb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), Db = /* @__PURE__ */ c("<img/>"), Rb = /* @__PURE__ */ c('<div><span class="text-2xl"> </span></div>'), jb = /* @__PURE__ */ c("<span> </span>"), Nb = /* @__PURE__ */ c("<p> </p>"), qb = /* @__PURE__ */ c("<p> </p>"), Ob = /* @__PURE__ */ c("<span> </span>"), Fb = /* @__PURE__ */ c('<div class="flex flex-wrap gap-3 mt-2"></div>'), Bb = (r, e, a, n) => e(t(a), t(n).action, r), Hb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), Vb = /* @__PURE__ */ c("<button><!> </button>"), Gb = /* @__PURE__ */ c('<div class="flex flex-col gap-2"></div>'), Ub = /* @__PURE__ */ c('<div class="space-y-3"><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h3> </h3> <!></div> <!> <!> <!></div> <!></div></div>'), Yb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, Wb = (r) => r.stopPropagation(), Kb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), Xb = /* @__PURE__ */ c("<img/>"), Zb = /* @__PURE__ */ c('<div><span class="text-3xl"> </span></div>'), Qb = /* @__PURE__ */ c("<span> </span>"), Jb = (r, e, a, n) => e(t(a), t(n).action, r), $b = /* @__PURE__ */ c('<span class="mr-1"> </span>'), eg = /* @__PURE__ */ c("<button><!> </button>"), tg = /* @__PURE__ */ c('<div class="flex items-center gap-2"></div>'), rg = /* @__PURE__ */ c("<p> </p>"), ag = /* @__PURE__ */ c("<p> </p>"), ng = /* @__PURE__ */ c("<span> </span>"), og = /* @__PURE__ */ c('<div class="flex flex-wrap gap-3"></div>'), ig = /* @__PURE__ */ c('<div><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!> <!> <!></div></div></div>'), lg = /* @__PURE__ */ c("<div><!></div>"), sg = /* @__PURE__ */ c('<div role="list" aria-label="Item list"><!> <div class="divide-y divide-gray-600"><!></div></div>');
const dg = {
  hash: "svelte-9ixerq",
  code: `
    /* Terminal glow effects */.terminal .list-item:hover {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 15px var(--terminal-green-glow);}`
};
function Ax(r, e) {
  Ue(e, !0), $e(r, dg);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), i = s(e, "size", 3, "md"), d = s(e, "layout", 3, "simple"), v = s(e, "selectable", 3, !1), p = s(e, "multiSelect", 3, !1), y = s(e, "selectedItems", 19, () => /* @__PURE__ */ new Set()), z = s(e, "loading", 3, !1), g = s(e, "loadingCount", 3, 3), L = s(e, "emptyMessage", 3, "No items found"), N = s(e, "emptyIcon", 3, "📋");
  s(e, "dividers", 3, !0);
  const S = s(e, "hover", 3, !0);
  s(e, "animated", 3, !0);
  const k = s(e, "class", 3, ""), b = At();
  let q = /* @__PURE__ */ _e(st(y()));
  const Z = {
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
  }, w = {
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
  }, A = /* @__PURE__ */ we(() => Z[n()]), W = /* @__PURE__ */ we(() => w[i()]);
  function H(u, h) {
    u.disabled || (v() && j(u, !t(q).has(u.id)), b("itemClick", { item: u, index: h }));
  }
  function j(u, h) {
    u.disabled || (p() ? h ? t(q).add(u.id) : t(q).delete(u.id) : h ? K(q, /* @__PURE__ */ new Set([u.id]), !0) : K(q, /* @__PURE__ */ new Set(), !0), K(q, new Set(t(q)), !0), b("itemSelect", { item: u, selected: h }));
  }
  function G(u, h, te) {
    te.stopPropagation(), b("actionClick", { item: u, action: h });
  }
  function B(u) {
    u ? K(q, new Set(a().filter((h) => !h.disabled).map((h) => h.id)), !0) : K(q, /* @__PURE__ */ new Set(), !0), b("selectAll", { selected: u });
  }
  const I = /* @__PURE__ */ we(() => a().length > 0 && a().filter((u) => !u.disabled).every((u) => t(q).has(u.id))), O = /* @__PURE__ */ we(() => re("rounded-lg overflow-hidden font-mono", t(A).container, t(W).container, k()));
  function R(u = "secondary") {
    const h = "px-2 py-1 rounded text-xs font-medium transition-colors";
    switch (u) {
      case "primary":
        return `${h} bg-blue-600 text-white hover:bg-blue-700`;
      case "danger":
        return `${h} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${h} bg-gray-600 text-white hover:bg-gray-700`;
    }
  }
  const P = /* @__PURE__ */ we(() => Array.from({ length: g() }, (u, h) => ({ id: `skeleton-${h}` })));
  var C = sg(), M = l(C);
  {
    var m = (u) => {
      var h = fb(), te = l(h), ie = l(te);
      ie.__change = [ub, B];
      var ce = f(ie, 2), de = l(ce);
      D(
        (ee) => {
          U(h, 1, `px-4 py-3 border-b ${t(A).item ?? ""} border-gray-600`), Zt(ie, t(I)), le(de, `${t(q).size ?? ""} of ${ee ?? ""} selected`);
        },
        [() => a().filter((ee) => !ee.disabled).length]
      ), o(u, h);
    };
    x(M, (u) => {
      v() && p() && a().length > 0 && u(m);
    });
  }
  var _ = f(M, 2), F = l(_);
  {
    var Y = (u) => {
      var h = Ce(), te = ge(h);
      Xe(te, 19, () => t(P), (ie) => ie.id, (ie, ce) => {
        var de = hb(), ee = l(de);
        {
          var V = (E) => {
            var Q = bb(), $ = l(Q), J = f($, 2), se = l(J), X = f(se, 2);
            D(
              (ne, ue, ve) => {
                U($, 1, ne), U(se, 1, ue), U(X, 1, ve);
              },
              [
                () => oe(re("rounded-full", t(W).avatar, t(A).skeleton)),
                () => oe(re("h-4 rounded", t(A).skeleton, "w-3/4")),
                () => oe(re("h-3 rounded", t(A).skeleton, "w-1/2"))
              ]
            ), o(E, Q);
          }, ae = (E) => {
            var Q = Ce(), $ = ge(Q);
            {
              var J = (X) => {
                var ne = gb(), ue = l(ne), ve = l(ue), pe = f(ve, 2), fe = l(pe), be = f(fe, 2), me = f(be, 2);
                D(
                  (Te, Pe, Fe, Re) => {
                    U(ve, 1, Te), U(fe, 1, Pe), U(be, 1, Fe), U(me, 1, Re);
                  },
                  [
                    () => oe(re("rounded-full", t(W).avatar, t(A).skeleton)),
                    () => oe(re("h-4 rounded", t(A).skeleton, "w-2/3")),
                    () => oe(re("h-3 rounded", t(A).skeleton, "w-1/2")),
                    () => oe(re("h-3 rounded", t(A).skeleton, "w-full"))
                  ]
                ), o(X, ne);
              }, se = (X) => {
                var ne = mb(), ue = l(ne), ve = l(ue), pe = f(ve, 2), fe = l(pe), be = f(fe, 2);
                D(
                  (me, Te, Pe) => {
                    U(ne, 1, `border rounded-lg p-4 space-y-3 ${t(A).skeleton ?? ""}`), U(ve, 1, me), U(fe, 1, Te), U(be, 1, Pe);
                  },
                  [
                    () => oe(re("rounded-full", t(W).avatar, t(A).skeleton)),
                    () => oe(re("h-4 rounded", t(A).skeleton, "w-3/4")),
                    () => oe(re("h-3 rounded", t(A).skeleton, "w-1/2"))
                  ]
                ), o(X, ne);
              };
              x(
                $,
                (X) => {
                  d() === "detailed" ? X(J) : X(se, !1);
                },
                !0
              );
            }
            o(E, Q);
          };
          x(ee, (E) => {
            d() === "simple" ? E(V) : E(ae, !1);
          });
        }
        D((E) => U(de, 1, E), [
          () => oe(re(t(W).item, t(A).item, "animate-pulse"))
        ]), o(ie, de);
      }), o(u, h);
    }, T = (u) => {
      var h = Ce(), te = ge(h);
      {
        var ie = (de) => {
          var ee = pb(), V = l(ee), ae = l(V), E = f(V, 2), Q = l(E);
          D(() => {
            U(ee, 1, `py-12 text-center ${t(A).description ?? ""}`), le(ae, N()), le(Q, L());
          }), o(de, ee);
        }, ce = (de) => {
          var ee = Ce(), V = ge(ee);
          Xe(V, 19, a, (ae) => ae.id, (ae, E, Q) => {
            const $ = /* @__PURE__ */ we(() => t(q).has(t(E).id));
            var J = lg(), se = () => H(t(E), t(Q)), X = (pe) => (pe.key === "Enter" || pe.key === " ") && H(t(E), t(Q));
            Je(
              J,
              (pe) => ({
                class: pe,
                onclick: se,
                onkeydown: X,
                role: v() ? "option" : "listitem",
                ...v() && !t(E).disabled ? { tabindex: 0 } : {},
                "aria-selected": v() ? t($) : void 0,
                "aria-label": t(E).title,
                "aria-describedby": t(E).description ? `item-${t(E).id}-description` : void 0
              }),
              [
                () => re(t(W).item, t(A).item, S() && !t(E).disabled && t(A).itemHover, t($) && t(A).itemSelected, t(E).disabled && "opacity-50", !t(E).disabled && "cursor-pointer", "transition-all duration-200")
              ]
            );
            var ne = l(J);
            {
              var ue = (pe) => {
                var fe = zb(), be = l(fe);
                {
                  var me = (he) => {
                    var ze = wb();
                    ze.__change = [xb, j, E], ze.__click = [_b], D(() => {
                      Zt(ze, t($)), ze.disabled = t(E).disabled;
                    }), o(he, ze);
                  };
                  x(be, (he) => {
                    v() && he(me);
                  });
                }
                var Te = f(be, 2);
                {
                  var Pe = (he) => {
                    var ze = yb();
                    D(
                      (De) => {
                        ye(ze, "src", t(E).avatar), ye(ze, "alt", t(E).title), U(ze, 1, De);
                      },
                      [
                        () => oe(re("rounded-full object-cover", t(W).avatar))
                      ]
                    ), o(he, ze);
                  }, Fe = (he) => {
                    var ze = Ce(), De = ge(ze);
                    {
                      var Ve = (et) => {
                        var Qe = kb(), ot = l(Qe), vt = l(ot);
                        D(
                          (at) => {
                            U(Qe, 1, at), le(vt, t(E).icon);
                          },
                          [
                            () => oe(re("flex items-center justify-center", t(W).icon))
                          ]
                        ), o(et, Qe);
                      };
                      x(
                        De,
                        (et) => {
                          t(E).icon && et(Ve);
                        },
                        !0
                      );
                    }
                    o(he, ze);
                  };
                  x(Te, (he) => {
                    t(E).avatar ? he(Pe) : he(Fe, !1);
                  });
                }
                var Re = f(Te, 2), ke = l(Re), xe = l(ke), Ee = l(xe), Ne = f(xe, 2);
                {
                  var Ae = (he) => {
                    var ze = Cb(), De = l(ze);
                    D(
                      (Ve) => {
                        U(ze, 1, Ve), le(De, t(E).badge);
                      },
                      [
                        () => oe(re("rounded-full font-medium", t(W).badge, t(A).badge))
                      ]
                    ), o(he, ze);
                  };
                  x(Ne, (he) => {
                    t(E).badge && he(Ae);
                  });
                }
                var Le = f(ke, 2);
                {
                  var Oe = (he) => {
                    var ze = Sb(), De = l(ze);
                    D(
                      (Ve) => {
                        U(ze, 1, Ve), le(De, t(E).subtitle);
                      },
                      [
                        () => oe(re("text-sm truncate", t(A).subtitle))
                      ]
                    ), o(he, ze);
                  };
                  x(Le, (he) => {
                    t(E).subtitle && he(Oe);
                  });
                }
                var Be = f(Re, 2);
                {
                  var Se = (he) => {
                    var ze = Ab();
                    Xe(ze, 21, () => t(E).actions, (De) => De.action, (De, Ve) => {
                      var et = Mb();
                      et.__click = [Tb, G, E, Ve];
                      var Qe = l(et);
                      {
                        var ot = (at) => {
                          var it = Eb(), Ze = l(it);
                          D(() => le(Ze, t(Ve).icon)), o(at, it);
                        };
                        x(Qe, (at) => {
                          t(Ve).icon && at(ot);
                        });
                      }
                      var vt = f(Qe);
                      D(
                        (at) => {
                          U(et, 1, at), le(vt, ` ${t(Ve).label ?? ""}`);
                        },
                        [() => oe(R(t(Ve).variant))]
                      ), o(De, et);
                    }), o(he, ze);
                  };
                  x(Be, (he) => {
                    t(E).actions && t(E).actions.length > 0 && he(Se);
                  });
                }
                D(
                  (he) => {
                    U(xe, 1, he), le(Ee, t(E).title);
                  },
                  [
                    () => oe(re("font-medium truncate", t(A).title))
                  ]
                ), o(pe, fe);
              }, ve = (pe) => {
                var fe = Ce(), be = ge(fe);
                {
                  var me = (Pe) => {
                    var Fe = Ub(), Re = l(Fe), ke = l(Re);
                    {
                      var xe = (Ze) => {
                        var je = Lb();
                        je.__change = [Ib, j, E], je.__click = [Pb], D(() => {
                          Zt(je, t($)), je.disabled = t(E).disabled;
                        }), o(Ze, je);
                      };
                      x(ke, (Ze) => {
                        v() && Ze(xe);
                      });
                    }
                    var Ee = f(ke, 2);
                    {
                      var Ne = (Ze) => {
                        var je = Db();
                        D(
                          (qe) => {
                            ye(je, "src", t(E).avatar), ye(je, "alt", t(E).title), U(je, 1, qe);
                          },
                          [
                            () => oe(re("rounded-full object-cover", t(W).avatar))
                          ]
                        ), o(Ze, je);
                      }, Ae = (Ze) => {
                        var je = Ce(), qe = ge(je);
                        {
                          var Ge = (nt) => {
                            var xt = Rb(), kt = l(xt), yt = l(kt);
                            D(
                              (mt) => {
                                U(xt, 1, mt), le(yt, t(E).icon);
                              },
                              [
                                () => oe(re("flex items-center justify-center", t(W).icon))
                              ]
                            ), o(nt, xt);
                          };
                          x(
                            qe,
                            (nt) => {
                              t(E).icon && nt(Ge);
                            },
                            !0
                          );
                        }
                        o(Ze, je);
                      };
                      x(Ee, (Ze) => {
                        t(E).avatar ? Ze(Ne) : Ze(Ae, !1);
                      });
                    }
                    var Le = f(Ee, 2), Oe = l(Le), Be = l(Oe), Se = l(Be), he = f(Be, 2);
                    {
                      var ze = (Ze) => {
                        var je = jb(), qe = l(je);
                        D(
                          (Ge) => {
                            U(je, 1, Ge), le(qe, t(E).badge);
                          },
                          [
                            () => oe(re("rounded-full font-medium", t(W).badge, t(A).badge))
                          ]
                        ), o(Ze, je);
                      };
                      x(he, (Ze) => {
                        t(E).badge && Ze(ze);
                      });
                    }
                    var De = f(Oe, 2);
                    {
                      var Ve = (Ze) => {
                        var je = Nb(), qe = l(je);
                        D(
                          (Ge) => {
                            U(je, 1, Ge), le(qe, t(E).subtitle);
                          },
                          [
                            () => oe(re("text-sm mb-2", t(A).subtitle))
                          ]
                        ), o(Ze, je);
                      };
                      x(De, (Ze) => {
                        t(E).subtitle && Ze(Ve);
                      });
                    }
                    var et = f(De, 2);
                    {
                      var Qe = (Ze) => {
                        var je = qb(), qe = l(je);
                        D(
                          (Ge) => {
                            U(je, 1, Ge), le(qe, t(E).description);
                          },
                          [
                            () => oe(re("text-sm leading-relaxed", t(A).description))
                          ]
                        ), o(Ze, je);
                      };
                      x(et, (Ze) => {
                        t(E).description && Ze(Qe);
                      });
                    }
                    var ot = f(et, 2);
                    {
                      var vt = (Ze) => {
                        var je = Fb();
                        Xe(je, 21, () => Object.entries(t(E).metadata), ([qe, Ge]) => qe, (qe, Ge) => {
                          var nt = /* @__PURE__ */ we(() => na(t(Ge), 2));
                          let xt = () => t(nt)[0], kt = () => t(nt)[1];
                          var yt = Ob(), mt = l(yt);
                          D(
                            (St) => {
                              U(yt, 1, St), le(mt, `${xt() ?? ""}: ${kt() ?? ""}`);
                            },
                            [() => oe(re("text-xs", t(A).metadata))]
                          ), o(qe, yt);
                        }), o(Ze, je);
                      };
                      x(ot, (Ze) => {
                        t(E).metadata && Ze(vt);
                      });
                    }
                    var at = f(Le, 2);
                    {
                      var it = (Ze) => {
                        var je = Gb();
                        Xe(je, 21, () => t(E).actions, (qe) => qe.action, (qe, Ge) => {
                          var nt = Vb();
                          nt.__click = [Bb, G, E, Ge];
                          var xt = l(nt);
                          {
                            var kt = (mt) => {
                              var St = Hb(), Rt = l(St);
                              D(() => le(Rt, t(Ge).icon)), o(mt, St);
                            };
                            x(xt, (mt) => {
                              t(Ge).icon && mt(kt);
                            });
                          }
                          var yt = f(xt);
                          D(
                            (mt) => {
                              U(nt, 1, mt), le(yt, ` ${t(Ge).label ?? ""}`);
                            },
                            [() => oe(R(t(Ge).variant))]
                          ), o(qe, nt);
                        }), o(Ze, je);
                      };
                      x(at, (Ze) => {
                        t(E).actions && t(E).actions.length > 0 && Ze(it);
                      });
                    }
                    D(
                      (Ze) => {
                        U(Be, 1, Ze), le(Se, t(E).title);
                      },
                      [
                        () => oe(re("font-semibold", t(A).title))
                      ]
                    ), o(Pe, Fe);
                  }, Te = (Pe) => {
                    var Fe = ig(), Re = l(Fe), ke = l(Re);
                    {
                      var xe = (je) => {
                        var qe = Kb();
                        qe.__change = [Yb, j, E], qe.__click = [Wb], D(() => {
                          Zt(qe, t($)), qe.disabled = t(E).disabled;
                        }), o(je, qe);
                      };
                      x(ke, (je) => {
                        v() && je(xe);
                      });
                    }
                    var Ee = f(ke, 2);
                    {
                      var Ne = (je) => {
                        var qe = Xb();
                        D(
                          (Ge) => {
                            ye(qe, "src", t(E).avatar), ye(qe, "alt", t(E).title), U(qe, 1, Ge);
                          },
                          [
                            () => oe(re("rounded-full object-cover", t(W).avatar))
                          ]
                        ), o(je, qe);
                      }, Ae = (je) => {
                        var qe = Ce(), Ge = ge(qe);
                        {
                          var nt = (xt) => {
                            var kt = Zb(), yt = l(kt), mt = l(yt);
                            D(
                              (St) => {
                                U(kt, 1, St), le(mt, t(E).icon);
                              },
                              [
                                () => oe(re("flex items-center justify-center", t(W).icon))
                              ]
                            ), o(xt, kt);
                          };
                          x(
                            Ge,
                            (xt) => {
                              t(E).icon && xt(nt);
                            },
                            !0
                          );
                        }
                        o(je, qe);
                      };
                      x(Ee, (je) => {
                        t(E).avatar ? je(Ne) : je(Ae, !1);
                      });
                    }
                    var Le = f(Ee, 2), Oe = l(Le), Be = l(Oe), Se = l(Be), he = l(Se), ze = f(Se, 2);
                    {
                      var De = (je) => {
                        var qe = Qb(), Ge = l(qe);
                        D(
                          (nt) => {
                            U(qe, 1, nt), le(Ge, t(E).badge);
                          },
                          [
                            () => oe(re("rounded-full font-medium", t(W).badge, t(A).badge))
                          ]
                        ), o(je, qe);
                      };
                      x(ze, (je) => {
                        t(E).badge && je(De);
                      });
                    }
                    var Ve = f(Be, 2);
                    {
                      var et = (je) => {
                        var qe = tg();
                        Xe(qe, 21, () => t(E).actions, (Ge) => Ge.action, (Ge, nt) => {
                          var xt = eg();
                          xt.__click = [Jb, G, E, nt];
                          var kt = l(xt);
                          {
                            var yt = (St) => {
                              var Rt = $b(), Kt = l(Rt);
                              D(() => le(Kt, t(nt).icon)), o(St, Rt);
                            };
                            x(kt, (St) => {
                              t(nt).icon && St(yt);
                            });
                          }
                          var mt = f(kt);
                          D(
                            (St) => {
                              U(xt, 1, St), le(mt, ` ${t(nt).label ?? ""}`);
                            },
                            [() => oe(R(t(nt).variant))]
                          ), o(Ge, xt);
                        }), o(je, qe);
                      };
                      x(Ve, (je) => {
                        t(E).actions && t(E).actions.length > 0 && je(et);
                      });
                    }
                    var Qe = f(Oe, 2);
                    {
                      var ot = (je) => {
                        var qe = rg(), Ge = l(qe);
                        D(
                          (nt) => {
                            U(qe, 1, nt), le(Ge, t(E).subtitle);
                          },
                          [
                            () => oe(re("text-sm mb-2", t(A).subtitle))
                          ]
                        ), o(je, qe);
                      };
                      x(Qe, (je) => {
                        t(E).subtitle && je(ot);
                      });
                    }
                    var vt = f(Qe, 2);
                    {
                      var at = (je) => {
                        var qe = ag(), Ge = l(qe);
                        D(
                          (nt) => {
                            U(qe, 1, nt), le(Ge, t(E).description);
                          },
                          [
                            () => oe(re("text-sm leading-relaxed mb-3", t(A).description))
                          ]
                        ), o(je, qe);
                      };
                      x(vt, (je) => {
                        t(E).description && je(at);
                      });
                    }
                    var it = f(vt, 2);
                    {
                      var Ze = (je) => {
                        var qe = og();
                        Xe(qe, 21, () => Object.entries(t(E).metadata), ([Ge, nt]) => Ge, (Ge, nt) => {
                          var xt = /* @__PURE__ */ we(() => na(t(nt), 2));
                          let kt = () => t(xt)[0], yt = () => t(xt)[1];
                          var mt = ng(), St = l(mt);
                          D(
                            (Rt) => {
                              U(mt, 1, Rt), le(St, `${kt() ?? ""}: ${yt() ?? ""}`);
                            },
                            [
                              () => oe(re("text-xs px-2 py-1 rounded-full", t(A).skeleton, t(A).metadata))
                            ]
                          ), o(Ge, mt);
                        }), o(je, qe);
                      };
                      x(it, (je) => {
                        t(E).metadata && je(Ze);
                      });
                    }
                    D(
                      (je) => {
                        U(Fe, 1, `border rounded-lg p-4 ${t(A).item ?? ""}`), U(Se, 1, je), le(he, t(E).title);
                      },
                      [
                        () => oe(re("font-semibold", t(A).title))
                      ]
                    ), o(Pe, Fe);
                  };
                  x(
                    be,
                    (Pe) => {
                      d() === "detailed" ? Pe(me) : Pe(Te, !1);
                    },
                    !0
                  );
                }
                o(pe, fe);
              };
              x(ne, (pe) => {
                d() === "simple" ? pe(ue) : pe(ve, !1);
              });
            }
            o(ae, J);
          }), o(de, ee);
        };
        x(
          te,
          (de) => {
            a().length === 0 ? de(ie) : de(ce, !1);
          },
          !0
        );
      }
      o(u, h);
    };
    x(F, (u) => {
      z() ? u(Y) : u(T, !1);
    });
  }
  D(() => U(C, 1, oe(t(O)))), o(r, C), Ye();
}
gt(["change", "click"]);
var cg = (r, e) => {
  const a = r.target;
  e(a.checked);
}, vg = /* @__PURE__ */ c('<th scope="col"><input type="checkbox" aria-label="Select all rows" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></th>'), ug = (r, e, a) => t(e).sortable && a(t(e)), fg = /* @__PURE__ */ c('<div class="flex flex-col"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path></svg> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></div>'), bg = /* @__PURE__ */ c('<th scope="col"><div class="flex items-center gap-2"><span> </span> <!></div></th>'), gg = /* @__PURE__ */ c('<tr><td><div class="flex items-center justify-center gap-3 py-8"><svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading...</span></div></td></tr>'), mg = /* @__PURE__ */ c('<tr><td><div class="py-8"><svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg> <p> </p></div></td></tr>'), hg = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, pg = (r) => r.stopPropagation(), xg = /* @__PURE__ */ c('<td><input type="checkbox" class="rounded bg-transparent border-current text-blue-500 focus:ring-blue-500 svelte-a6pjeb"/></td>'), _g = /* @__PURE__ */ c("<td><!></td>"), wg = /* @__PURE__ */ c("<tr><!><!></tr>"), yg = /* @__PURE__ */ c('<div><table><caption class="sr-only"> </caption><thead><tr><!><!></tr></thead><tbody><!></tbody></table></div>');
const kg = {
  hash: "svelte-a6pjeb",
  code: `
	/* Terminal glow effects */.terminal .table-row:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}

	/* Custom checkbox styling for dark themes */input[type='checkbox'].svelte-a6pjeb:indeterminate {background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 8h8v1H4z'/%3e%3c/svg%3e");}`
};
function zx(r, e) {
  Ue(e, !0), $e(r, kg);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), i = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), v = s(e, "striped", 3, !1), p = s(e, "hover", 3, !0), y = s(e, "bordered", 3, !1), z = s(e, "loading", 3, !1), g = s(e, "sortBy", 3, ""), L = s(e, "sortOrder", 3, "asc"), N = s(e, "selectable", 3, !1), S = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), k = s(e, "stickyHeader", 3, !1), b = s(e, "emptyMessage", 3, "No data available"), q = s(e, "class", 3, ""), Z = At();
  let w = /* @__PURE__ */ _e(st(g())), A = /* @__PURE__ */ _e(st(L())), W = /* @__PURE__ */ _e(st(S()));
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
  }, G = /* @__PURE__ */ we(() => H[i()]), B = /* @__PURE__ */ we(() => j[d()]), I = /* @__PURE__ */ we(() => () => !t(w) || !a().find((se) => se.key === t(w))?.sortable ? n() : [...n()].sort((se, X) => {
    const ne = se[t(w)], ue = X[t(w)];
    if (ne === ue) return 0;
    const ve = t(A) === "asc";
    return ne < ue ? ve ? -1 : 1 : ve ? 1 : -1;
  }));
  function O(J) {
    J.sortable && (t(w) === J.key ? K(A, t(A) === "asc" ? "desc" : "asc", !0) : (K(w, J.key, !0), K(A, "asc")), Z("sort", { column: J.key, order: t(A) }));
  }
  function R(J, se) {
    Z("rowClick", { row: J, index: se });
  }
  function P(J, se) {
    const X = J.id ?? index;
    se ? t(W).add(X) : t(W).delete(X), K(W, new Set(t(W)), !0), Z("rowSelect", { row: J, selected: se });
  }
  function C(J) {
    J ? K(W, new Set(n().map((se, X) => se.id ?? X)), !0) : K(W, /* @__PURE__ */ new Set(), !0), Z("selectAll", { selected: J });
  }
  function M(J, se, X) {
    return J.render ? J.render(se, X) : J.formatter ? J.formatter(se) : String(se ?? "");
  }
  const m = /* @__PURE__ */ we(() => n().length > 0 && n().every((J, se) => t(W).has(J.id ?? se))), _ = /* @__PURE__ */ we(() => t(W).size > 0 && !t(m)), F = /* @__PURE__ */ we(() => re("w-full font-mono rounded-lg overflow-hidden border", t(G).table, t(G).row, y() && "border-2", q())), Y = /* @__PURE__ */ we(() => re("overflow-auto", e.maxHeight && `max-h-[${e.maxHeight}]`, k() && "relative"));
  var T = yg(), u = l(T), h = l(u), te = l(h), ie = f(h), ce = l(ie), de = l(ce);
  {
    var ee = (J) => {
      var se = vg(), X = l(se);
      X.__change = [cg, C], D(
        (ne) => {
          U(se, 1, ne), Zt(X, t(m)), X.indeterminate = t(_);
        },
        [
          () => oe(re(t(B).header, t(G).headerCell, "w-12"))
        ]
      ), o(J, se);
    };
    x(de, (J) => {
      N() && J(ee);
    });
  }
  var V = f(de);
  Xe(V, 17, a, (J) => J.key, (J, se) => {
    var X = bg();
    X.__click = [ug, se, O];
    var ne = l(X), ue = l(ne), ve = l(ue), pe = f(ue, 2);
    {
      var fe = (be) => {
        var me = fg(), Te = l(me), Pe = f(Te, 2);
        D(
          (Fe, Re) => {
            U(Te, 0, Fe), U(Pe, 0, Re);
          },
          [
            () => oe(re("w-3 h-3 transition-colors", t(w) === t(se).key && t(A) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => oe(re("w-3 h-3 -mt-1 transition-colors", t(w) === t(se).key && t(A) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(be, me);
      };
      x(pe, (be) => {
        t(se).sortable && be(fe);
      });
    }
    Ie(X, (be, me) => pt?.(be, me), () => ({ enabled: t(se).sortable, strength: 0.05 })), D(
      (be) => {
        U(X, 1, be), ut(X, t(se).width ? `width: ${t(se).width}` : void 0), ye(X, "aria-sort", t(w) === t(se).key ? t(A) === "asc" ? "ascending" : "descending" : "none"), le(ve, t(se).label);
      },
      [
        () => oe(re(t(B).header, t(G).headerCell, "font-semibold uppercase tracking-wider", `text-${t(se).align || "left"}`, t(se).sortable && "cursor-pointer select-none", y() && "border-r last:border-r-0"))
      ]
    ), o(J, X);
  });
  var ae = f(ie), E = l(ae);
  {
    var Q = (J) => {
      var se = gg(), X = l(se);
      D(
        (ne) => {
          ye(X, "colspan", a().length + (N() ? 1 : 0)), U(X, 1, ne);
        },
        [
          () => oe(re(t(B).cell, t(G).loading, "text-center"))
        ]
      ), o(J, se);
    }, $ = (J) => {
      var se = Ce(), X = ge(se);
      {
        var ne = (ve) => {
          var pe = mg(), fe = l(pe), be = l(fe), me = f(l(be), 2), Te = l(me);
          D(
            (Pe) => {
              ye(fe, "colspan", a().length + (N() ? 1 : 0)), U(fe, 1, Pe), le(Te, b());
            },
            [
              () => oe(re(t(B).cell, t(G).cell, "text-center text-gray-400"))
            ]
          ), o(ve, pe);
        }, ue = (ve) => {
          var pe = Ce(), fe = ge(pe);
          Xe(fe, 19, () => t(I), (be, me) => be.id ?? me, (be, me, Te) => {
            const Pe = /* @__PURE__ */ we(() => t(me).id ?? t(Te)), Fe = /* @__PURE__ */ we(() => t(W).has(t(Pe)));
            var Re = wg();
            Re.__click = () => R(t(me), t(Te));
            var ke = l(Re);
            {
              var xe = (Ne) => {
                var Ae = xg(), Le = l(Ae);
                Le.__change = [hg, P, me], Le.__click = [pg], D(
                  (Oe) => {
                    U(Ae, 1, Oe), Zt(Le, t(Fe));
                  },
                  [
                    () => oe(re(t(B).cell, t(G).cell, y() && "border-r"))
                  ]
                ), o(Ne, Ae);
              };
              x(ke, (Ne) => {
                N() && Ne(xe);
              });
            }
            var Ee = f(ke);
            Xe(Ee, 17, a, (Ne) => Ne.key, (Ne, Ae) => {
              var Le = _g(), Oe = l(Le);
              Va(Oe, () => Ka(M(t(Ae), t(me)[t(Ae).key], t(me)))), D((Be) => U(Le, 1, Be), [
                () => oe(re(t(B).cell, t(G).cell, `text-${t(Ae).align || "left"}`, y() && "border-r last:border-r-0"))
              ]), o(Ne, Le);
            }), D((Ne) => U(Re, 1, Ne), [
              () => oe(re(t(G).row, p() && t(G).rowHover, v() && t(Te) % 2 === 1 && "bg-black/20", t(Fe) && t(G).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), tt(1, Re, () => _t, () => ({ direction: "up", duration: 100, delay: t(Te) * 20 })), o(be, Re);
          }), o(ve, pe);
        };
        x(
          X,
          (ve) => {
            t(I).length === 0 ? ve(ne) : ve(ue, !1);
          },
          !0
        );
      }
      o(J, se);
    };
    x(E, (J) => {
      z() ? J(Q) : J($, !1);
    });
  }
  D(
    (J) => {
      U(T, 1, oe(t(Y))), U(u, 1, oe(t(F))), le(te, `Data table with ${n().length ?? ""} rows and ${a().length ?? ""} columns`), U(ie, 1, J);
    },
    [
      () => oe(re(t(G).header, k() && "sticky top-0 z-10"))
    ]
  ), o(r, T), Ye();
}
gt(["change", "click"]);
const Cg = (r, e, a) => {
  r.key === "Enter" ? e(t(a)) : r.key === "ArrowUp" && r.preventDefault();
};
var Sg = /* @__PURE__ */ c('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-30 svelte-1c5nvru"></canvas>'), Tg = /* @__PURE__ */ c('<span class="glitch svelte-1c5nvru"> </span>'), Eg = /* @__PURE__ */ c('<div class="mb-4 svelte-1c5nvru"><div class="flex items-start gap-2 mb-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <span class="text-white svelte-1c5nvru"> </span> <span class="text-xs text-current/40 ml-auto svelte-1c5nvru"> </span></div> <div class="text-current/90 mb-2 whitespace-pre-wrap font-mono svelte-1c5nvru"> </div></div>'), Mg = /* @__PURE__ */ c('<div class="mt-4 svelte-1c5nvru"><!></div>'), Ag = /* @__PURE__ */ c(`<div><!> <div class="relative z-10 flex items-center justify-between p-4 border-b border-current/20 bg-black/50 svelte-1c5nvru"><div class="flex items-center gap-3 svelte-1c5nvru"><div class="flex gap-2 svelte-1c5nvru"><div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors svelte-1c5nvru"></div> <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors svelte-1c5nvru"></div></div> <h3 class="text-sm font-mono font-semibold svelte-1c5nvru"><!></h3></div> <div class="flex items-center gap-2 text-xs font-mono svelte-1c5nvru"><span class="px-2 py-1 bg-current/10 rounded svelte-1c5nvru">SECURE</span> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse svelte-1c5nvru"></span></div></div> <div class="relative z-10 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed terminal-scroll svelte-1c5nvru" style="scrollbar-width: thin;"><div class="mb-4 text-current/80 svelte-1c5nvru"><pre class="whitespace-pre-wrap svelte-1c5nvru">╔══════════════════════════════════════════════════════════════╗
║ LIQUID GLASS TERMINAL v2.0 - SECURITY LEVEL: ALPHA-7        ║
║ SYSTEM STATUS: ONLINE │ ENCRYPTION: AES-256 │ UPTIME: 99.9% ║
╚══════════════════════════════════════════════════════════════╝

Connection established. Type 'help' for available commands.</pre></div> <!> <div class="flex items-start gap-2 svelte-1c5nvru"><span class="text-current whitespace-pre svelte-1c5nvru"></span> <input class="flex-1 bg-transparent border-none outline-none text-white font-mono svelte-1c5nvru" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-2 h-5 bg-current animate-pulse svelte-1c5nvru"></span></div> <!></div></div>`);
const zg = {
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
function Ix(r, e) {
  Ue(e, !0), $e(r, zg);
  const a = s(e, "title", 3, "◉ LIQUID_GLASS_TERMINAL_v2.0"), n = s(e, "class", 3, ""), i = s(e, "commands", 19, () => ({
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
  const p = s(e, "enableMatrixRain", 3, !1), y = s(e, "enableScanlines", 3, !0), z = s(e, "enableFlicker", 3, !1);
  At();
  let g = /* @__PURE__ */ _e(void 0), L = /* @__PURE__ */ _e(void 0), N = /* @__PURE__ */ _e(""), S = /* @__PURE__ */ _e(st([])), k = /* @__PURE__ */ _e(!1), b = /* @__PURE__ */ _e(st(p()));
  const q = st(y()), Z = st(z()), w = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  let A = [], W;
  const H = (V) => {
    const ae = V.trim().toLowerCase();
    let E = "";
    if (ae === "clear") {
      K(S, [], !0), K(N, "");
      return;
    } else ae === "matrix" ? (K(b, !t(b)), t(b) ? G() : B(), E = i()[ae] || "MATRIX RAIN DEACTIVATED") : ae === "glitch" ? (j(), E = i()[ae] || "GLITCH EFFECT ACTIVATED") : E = i()[ae] || `zsh: command not found: ${V}

Try 'help' for available commands.`;
    K(
      S,
      [
        ...t(S),
        { command: ae, output: E, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), K(N, ""), setTimeout(
      () => {
        t(g) && t(g).scrollTo({ top: t(g).scrollHeight, behavior: "smooth" });
      },
      50
    );
  }, j = () => {
    K(k, !0), setTimeout(
      () => {
        K(k, !1);
      },
      1e3
    );
  }, G = () => {
    if (!t(L)) return;
    const V = t(L).getContext("2d"), ae = 14, E = Math.floor(t(L).width / ae);
    A = Array(E).fill(0);
    const Q = () => {
      V.fillStyle = "rgba(0, 0, 0, 0.05)", V.fillRect(0, 0, t(L).width, t(L).height), V.fillStyle = "#00ff88", V.font = `${ae}px 'PP Supply Mono', monospace`;
      for (let J = 0; J < A.length; J++) {
        const se = w[Math.floor(Math.random() * w.length)];
        V.fillText(se, J * ae, A[J] * ae), A[J] * ae > t(L).height && Math.random() > 0.975 && (A[J] = 0), A[J]++;
      }
    }, $ = () => {
      Q(), W = requestAnimationFrame($);
    };
    $();
  }, B = () => {
    W && cancelAnimationFrame(W);
  }, I = () => {
    t(L) && t(g) && (t(L).width = t(g).offsetWidth, t(L).height = t(g).offsetHeight);
  };
  ht(() => (I(), t(b) && G(), d() && setTimeout(
    () => {
      H("whoami");
    },
    1e3
  ), () => {
    B();
  }));
  const O = {
    matrix: "bg-black text-green-400 border-green-500/30",
    cyberpunk: "bg-purple-900/20 text-cyan-400 border-cyan-500/30",
    hacker: "bg-black text-terminal-green border-terminal-green/30",
    terminal: "bg-terminal-bg text-terminal-fg border-white/20"
  };
  var R = Ag();
  Ot("resize", Go, I);
  var P = l(R);
  {
    var C = (V) => {
      var ae = Sg();
      rt(ae, (E) => K(L, E), () => t(L)), o(V, ae);
    };
    x(P, (V) => {
      t(b) && V(C);
    });
  }
  var M = f(P, 2), m = l(M), _ = f(l(m), 2), F = l(_);
  {
    var Y = (V) => {
      var ae = Tg(), E = l(ae);
      D(() => {
        ye(ae, "data-text", a()), le(E, a());
      }), o(V, ae);
    }, T = (V) => {
      var ae = Ct();
      D(() => le(ae, a())), o(V, ae);
    };
    x(F, (V) => {
      t(k) ? V(Y) : V(T, !1);
    });
  }
  var u = f(M, 2), h = f(l(u), 2);
  Xe(h, 19, () => t(S), (V, ae) => V.timestamp?.getTime?.() ?? ae, (V, ae) => {
    var E = Eg(), Q = l(E), $ = l(Q);
    $.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
    var J = f($, 2), se = l(J), X = f(J, 2), ne = l(X), ue = f(Q, 2), ve = l(ue);
    D(
      (pe) => {
        le(se, t(ae).command), le(ne, pe), le(ve, t(ae).output);
      },
      [() => t(ae).timestamp.toLocaleTimeString()]
    ), o(V, E);
  });
  var te = f(h, 2), ie = l(te);
  ie.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
  var ce = f(ie, 2);
  ce.__keydown = [Cg, H, N];
  var de = f(te, 2);
  {
    var ee = (V) => {
      var ae = Mg(), E = l(ae);
      lt(E, () => e.children), o(V, ae);
    };
    x(de, (V) => {
      e.children && V(ee);
    });
  }
  rt(u, (V) => K(g, V), () => t(g)), D((V) => U(R, 1, V, "svelte-1c5nvru"), [
    () => oe(re("relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300", "border shadow-2xl shadow-black/25 transform-gpu will-change-transform", O[v()], q && "terminal-scanlines", Z && "terminal-flicker", t(k) && "terminal-glitch", n()))
  ]), _r(ce, () => t(N), (V) => K(N, V)), o(r, R), Ye();
}
gt(["keydown"]);
const Ig = (r) => r;
function Pg(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function co(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function wi(r, { delay: e = 0, duration: a = 400, easing: n = Ig } = {}) {
  const i = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (d) => `opacity: ${d * i}`
  };
}
function yi(r, { delay: e = 0, duration: a = 400, easing: n = Pg, x: i = 0, y: d = 0, opacity: v = 0 } = {}) {
  const p = getComputedStyle(r), y = +p.opacity, z = p.transform === "none" ? "" : p.transform, g = y * (1 - v), [L, N] = co(i), [S, k] = co(d);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (b, q) => `
			transform: ${z} translate(${(1 - b) * L}${N}, ${(1 - b) * S}${k});
			opacity: ${y - g * q}`
  };
}
var Lg = /* @__PURE__ */ c('<div class="flex gap-1"><div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div></div>'), Dg = /* @__PURE__ */ c('<div><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> <span class="text-sm font-mono">Analyzing patterns...</span></div>'), Rg = (r, e, a) => e(t(a)), jg = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, Ng = /* @__PURE__ */ c("<span> </span>"), qg = /* @__PURE__ */ c('<div class="flex items-center gap-2"><span> </span> <div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div></div></div></div>'), Og = /* @__PURE__ */ c("<code> </code>"), Fg = /* @__PURE__ */ c('<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 svelte-4oclra"><div>Examples:</div> <div class="flex flex-wrap gap-1"></div></div>'), Bg = /* @__PURE__ */ c('<div role="button" tabindex="0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><!> <span> </span></div> <!></div> <p> </p> <div> </div> <!></div>'), Hg = /* @__PURE__ */ c('<div class="space-y-2"></div>'), Vg = /* @__PURE__ */ c('<div><div class="text-2xl mb-2">🤔</div> <p class="text-sm"> </p> <p class="text-xs mt-1">Try a different search term</p></div>'), Gg = /* @__PURE__ */ c('<div><div class="flex items-center justify-between"><span>Use ↑↓ to navigate, Enter to select</span> <span>AI-powered suggestions</span></div></div>'), Ug = /* @__PURE__ */ c('<div><div><div class="flex items-center gap-2"><span class="text-sm font-bold">🤖 AI SUGGESTIONS</span> <!></div> <span> </span></div> <!> <!> <!> <!></div>');
const Yg = {
  hash: "svelte-4oclra",
  code: `
	/* Smooth animations */.group.svelte-4oclra:hover .group-hover\\:opacity-100:where(.svelte-4oclra) {opacity:1;}`
};
function Px(r, e) {
  Ue(e, !0), $e(r, Yg);
  const [a, n] = gi(), i = () => bi(k, "$aiSuggestions", a), d = s(e, "query", 3, ""), v = s(e, "suggestions", 19, () => []), p = s(e, "maxSuggestions", 3, 6), y = s(e, "showConfidence", 3, !0), z = s(e, "showCategories", 3, !0), g = s(e, "theme", 3, "terminal"), L = s(e, "aiMode", 3, !0), N = s(e, "class", 3, ""), S = At(), k = Ua([]);
  let b = /* @__PURE__ */ _e(-1), q = /* @__PURE__ */ _e(!1);
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
  ], A = {
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
  }[g()], W = {
    system: { icon: "⚙️", color: "text-blue-400" },
    development: { icon: "💻", color: "text-green-400" },
    network: { icon: "🌐", color: "text-purple-400" },
    file: { icon: "📁", color: "text-yellow-400" },
    process: { icon: "⚡", color: "text-orange-400" },
    ai: { icon: "🤖", color: "text-cyan-400" }
  }, H = async (M) => {
    K(q, !0), await new Promise((_) => setTimeout(_, 800 + Math.random() * 400));
    const m = Z.filter((_) => _.command.toLowerCase().includes(M.toLowerCase()) || _.description.toLowerCase().includes(M.toLowerCase()) || _.category.toLowerCase().includes(M.toLowerCase())).map((_) => ({
      ..._,
      confidence: Math.min(0.98, _.confidence + Math.random() * 0.1)
    })).sort((_, F) => F.confidence - _.confidence).slice(0, p());
    return K(q, !1), m;
  }, j = async (M) => {
    if (!M.trim()) {
      k.set([]);
      return;
    }
    if (L()) {
      const m = await H(M);
      k.set(m);
    } else {
      const m = v().slice(0, p());
      k.set(m);
    }
  }, G = (M) => {
    const m = i();
    switch (M.key) {
      case "ArrowDown":
        M.preventDefault(), K(b, Math.min(t(b) + 1, m.length - 1), !0);
        break;
      case "ArrowUp":
        M.preventDefault(), K(b, Math.max(t(b) - 1, -1), !0);
        break;
      case "Enter":
        M.preventDefault(), t(b) >= 0 && m[t(b)] && B(m[t(b)]);
        break;
      case "Escape":
        K(b, -1), k.set([]);
        break;
    }
  }, B = (M) => {
    S("select", { command: M, timestamp: /* @__PURE__ */ new Date() }), K(b, -1);
  }, I = (M) => M >= 0.9 ? "text-green-400" : M >= 0.7 ? "text-yellow-400" : M >= 0.5 ? "text-orange-400" : "text-red-400", O = (M) => M >= 0.9 ? "HIGH" : M >= 0.7 ? "MED" : "LOW";
  bt(() => {
    j(d());
  }), ht(() => (window.addEventListener("keydown", G), () => {
    window.removeEventListener("keydown", G);
  }));
  var R = Ce(), P = ge(R);
  {
    var C = (M) => {
      var m = Ug(), _ = l(m), F = l(_), Y = f(l(F), 2);
      {
        var T = (Q) => {
          var $ = Lg();
          o(Q, $);
        };
        x(Y, (Q) => {
          t(q) && Q(T);
        });
      }
      var u = f(F, 2), h = l(u), te = f(_, 2);
      {
        var ie = (Q) => {
          var $ = Dg();
          D((J) => U($, 1, J, "svelte-4oclra"), [
            () => oe(re("flex items-center gap-3 p-3 rounded-lg bg-black/20", A.muted))
          ]), o(Q, $);
        };
        x(te, (Q) => {
          t(q) && Q(ie);
        });
      }
      var ce = f(te, 2);
      {
        var de = (Q) => {
          var $ = Hg();
          Xe($, 7, i, (J) => J.command, (J, se, X) => {
            var ne = Bg();
            ne.__click = [Rg, B, se], ne.__keydown = [jg, B, se];
            var ue = l(ne), ve = l(ue), pe = l(ve);
            {
              var fe = (Ae) => {
                var Le = Ng(), Oe = l(Le);
                D(() => {
                  U(Le, 1, oe(W[t(se).category].color), "svelte-4oclra"), le(Oe, W[t(se).category].icon);
                }), o(Ae, Le);
              };
              x(pe, (Ae) => {
                z() && Ae(fe);
              });
            }
            var be = f(pe, 2), me = l(be), Te = f(ve, 2);
            {
              var Pe = (Ae) => {
                var Le = qg(), Oe = l(Le), Be = l(Oe), Se = f(Oe, 2), he = l(Se);
                D(
                  (ze, De, Ve) => {
                    U(Oe, 1, ze, "svelte-4oclra"), le(Be, De), U(he, 1, Ve, "svelte-4oclra"), ut(he, `width: ${t(se).confidence * 100}%`);
                  },
                  [
                    () => oe(re("text-xs font-bold", I(t(se).confidence))),
                    () => O(t(se).confidence),
                    () => oe(re("h-full rounded-full transition-all duration-300", I(t(se).confidence).replace("text-", "bg-")))
                  ]
                ), o(Ae, Le);
              };
              x(Te, (Ae) => {
                y() && Ae(Pe);
              });
            }
            var Fe = f(ue, 2), Re = l(Fe), ke = f(Fe, 2), xe = l(ke), Ee = f(ke, 2);
            {
              var Ne = (Ae) => {
                var Le = Fg(), Oe = l(Le), Be = f(Oe, 2);
                Xe(Be, 20, () => t(se).examples, (Se) => Se, (Se, he) => {
                  var ze = Og(), De = l(ze);
                  D(
                    (Ve) => {
                      U(ze, 1, Ve, "svelte-4oclra"), le(De, he);
                    },
                    [
                      () => oe(re("text-xs px-2 py-1 rounded bg-black/40", A.muted))
                    ]
                  ), o(Se, ze);
                }), D((Se) => U(Oe, 1, Se, "svelte-4oclra"), [
                  () => oe(re("text-xs font-bold mb-1", A.text))
                ]), o(Ae, Le);
              };
              x(Ee, (Ae) => {
                t(se).examples && t(se).examples.length > 0 && Ae(Ne);
              });
            }
            D(
              (Ae, Le, Oe, Be) => {
                U(ne, 1, Ae, "svelte-4oclra"), ye(ne, "aria-label", `Execute command: ${t(se).command}`), U(be, 1, Le, "svelte-4oclra"), le(me, t(se).command), U(Fe, 1, Oe, "svelte-4oclra"), le(Re, t(se).description), U(ke, 1, Be, "svelte-4oclra"), le(xe, t(se).usage);
              },
              [
                () => oe(re("p-3 rounded-lg cursor-pointer transition-all duration-200", "hover:scale-[1.02] transform-gpu border border-transparent", t(X) === t(b) ? A.selected : "hover:bg-white/5", "group")),
                () => oe(re("font-mono font-bold", A.text)),
                () => oe(re("text-sm mb-2", A.muted)),
                () => oe(re("text-xs font-mono p-2 rounded bg-black/30", A.accent))
              ]
            ), tt(3, ne, () => wi, () => ({ duration: 150, delay: t(X) * 50 })), o(J, ne);
          }), o(Q, $);
        };
        x(ce, (Q) => {
          !t(q) && i().length > 0 && Q(de);
        });
      }
      var ee = f(ce, 2);
      {
        var V = (Q) => {
          var $ = Vg(), J = f(l($), 2), se = l(J);
          D(
            (X) => {
              U($, 1, X, "svelte-4oclra"), le(se, `No suggestions found for "${d() ?? ""}"`);
            },
            [() => oe(re("text-center py-8", A.muted))]
          ), o(Q, $);
        };
        x(ee, (Q) => {
          !t(q) && d().trim() && i().length === 0 && Q(V);
        });
      }
      var ae = f(ee, 2);
      {
        var E = (Q) => {
          var $ = Gg();
          D((J) => U($, 1, J, "svelte-4oclra"), [
            () => oe(re("mt-3 pt-2 border-t border-current/20 text-xs", A.muted))
          ]), o(Q, $);
        };
        x(ae, (Q) => {
          !t(q) && i().length > 0 && Q(E);
        });
      }
      D(
        (Q, $, J) => {
          U(m, 1, Q, "svelte-4oclra"), U(_, 1, $, "svelte-4oclra"), U(u, 1, J, "svelte-4oclra"), le(h, `${i().length ?? ""} matches`);
        },
        [
          () => oe(re("relative mt-2 p-4 rounded-lg border backdrop-blur-md", "shadow-2xl transform-gpu", A.bg, N())),
          () => oe(re("flex items-center justify-between mb-3 pb-2 border-b border-current/20", A.text)),
          () => oe(re("text-xs", A.muted))
        ]
      ), tt(3, m, () => yi, () => ({ y: 10, duration: 200 })), o(M, m);
    };
    x(P, (M) => {
      d().trim() && (i().length > 0 || t(q)) && M(C);
    });
  }
  o(r, R), Ye(), n();
}
gt(["click", "keydown"]);
var Wg = /* @__PURE__ */ c("<span><!></span>");
const Kg = {
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
function Xg(r, e) {
  Ue(e, !0), $e(r, Kg);
  const a = s(e, "class", 3, ""), n = s(e, "intensity", 3, "medium"), i = s(e, "continuous", 3, !1), d = s(e, "trigger", 3, !1);
  s(e, "speed", 3, 0.1);
  const v = s(e, "colors", 19, () => ["#ff0000", "#00ffff", "#ff00ff"]);
  let p, y = /* @__PURE__ */ _e(!1), z;
  const L = {
    low: { duration: 200, frequency: 3e3, distortion: 2, layers: 2 },
    medium: { duration: 400, frequency: 2e3, distortion: 4, layers: 3 },
    high: { duration: 600, frequency: 1e3, distortion: 8, layers: 4 },
    extreme: { duration: 1e3, frequency: 500, distortion: 16, layers: 6 }
  }()[n()], N = () => {
    t(y) || (K(y, !0), p && (p.style.animation = `
				glitch-skew ${L.duration}ms ease-in-out,
				glitch-color ${L.duration}ms linear
			`), setTimeout(
      () => {
        K(y, !1), p && (p.style.animation = "");
      },
      L.duration
    ));
  }, S = () => {
    i() && (z = setInterval(
      () => {
        Math.random() < 0.3 && N();
      },
      L.frequency
    ));
  }, k = () => {
    z && clearInterval(z);
  };
  bt(() => {
    d() && N();
  }), ht(() => (i() && S(), () => {
    k();
  }));
  const b = "!@#$%^&*()_+-=[]{}|;:,.<>?~`", q = (H, j) => H.split("").map((G) => Math.random() < j / 100 ? b[Math.floor(Math.random() * b().length)] : G).join("");
  var Z = Wg(), w = l(Z);
  {
    var A = (H) => {
      var j = Ct();
      D((G) => le(j, G), [() => q(e.text, 20)]), o(H, j);
    }, W = (H) => {
      var j = Ct();
      D(() => le(j, e.text)), o(H, j);
    };
    x(w, (H) => {
      t(y) && n() === "extreme" ? H(A) : H(W, !1);
    });
  }
  rt(Z, (H) => p = H, () => p), D(
    (H, j, G, B) => {
      U(Z, 1, H, "svelte-ithyll"), ye(Z, "data-text", e.text), ut(Z, `
		--glitch-color-1: ${j ?? ""};
		--glitch-color-2: ${G ?? ""};
		--glitch-color-3: ${B ?? ""};
		--glitch-distortion: ${L.distortion ?? ""}px;
	`);
    },
    [
      () => oe(re("relative inline-block font-mono", t(y) && "glitching", a())),
      () => v()()[0] || "#ff0000",
      () => v()()[1] || "#00ffff",
      () => v()()[2] || "#ff00ff"
    ]
  ), o(r, Z), Ye();
}
var Zg = /* @__PURE__ */ c('<div class="w-2 h-2 rounded-full bg-current animate-ping svelte-11w1x2x"></div>'), Qg = /* @__PURE__ */ c("<span> </span>"), Jg = /* @__PURE__ */ c("<span> </span>"), $g = /* @__PURE__ */ c("<span> </span>"), em = (r, e) => {
  r.stopPropagation(), e();
}, tm = /* @__PURE__ */ c('<button title="Copy command">📋</button>'), rm = /* @__PURE__ */ c("<div> </div>"), am = /* @__PURE__ */ c("<div> </div>"), nm = /* @__PURE__ */ c('<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse svelte-11w1x2x"></div>'), om = /* @__PURE__ */ c('<div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse svelte-11w1x2x"></div>'), im = /* @__PURE__ */ c('<div><div class="absolute top-2 right-2 flex items-center gap-2 svelte-11w1x2x"><div><!></div> <!></div> <div class="flex items-start gap-2 mb-2 font-mono svelte-11w1x2x"><!> <div class="flex-1 svelte-11w1x2x"><!></div> <!></div> <!> <!> <!> <!></div>');
const lm = {
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
function Lx(r, e) {
  Ue(e, !0), $e(r, lm);
  let a = s(e, "output", 3, ""), n = s(e, "status", 7, "idle"), i = s(e, "showPrompt", 3, !0), d = s(e, "showTimestamp", 3, !0), v = s(e, "interactive", 3, !1), p = s(e, "theme", 3, "terminal"), y = s(e, "enableGlitch", 3, !1), z = s(e, "enableSound", 3, !1), g = s(e, "class", 3, "");
  const L = At();
  let N, S = /* @__PURE__ */ _e(!1), k = /* @__PURE__ */ _e(!1), b = /* @__PURE__ */ _e(0), q = 0;
  const w = {
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
  }[p()], W = {
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
  }[p()], G = (fe) => {
    if (!z()) return;
    const be = new (window.AudioContext || window.webkitAudioContext)(), me = be.createOscillator(), Te = be.createGain();
    switch (me.connect(Te), Te.connect(be.destination), fe) {
      case "execute":
        me.frequency.setValueAtTime(800, be.currentTime), me.frequency.exponentialRampToValueAtTime(400, be.currentTime + 0.1);
        break;
      case "success":
        me.frequency.setValueAtTime(523.25, be.currentTime), me.frequency.setValueAtTime(659.25, be.currentTime + 0.1);
        break;
      case "error":
        me.frequency.setValueAtTime(220, be.currentTime), me.frequency.exponentialRampToValueAtTime(110, be.currentTime + 0.2);
        break;
    }
    Te.gain.setValueAtTime(0.1, be.currentTime), Te.gain.exponentialRampToValueAtTime(0.01, be.currentTime + 0.2), me.start(be.currentTime), me.stop(be.currentTime + 0.2);
  }, B = () => {
    !v() || n() === "running" || (q = performance.now(), n("running"), K(b, 0), y() && (K(k, !0), setTimeout(
      () => {
        K(k, !1);
      },
      300
    )), G("execute"), L("execute", {
      command: e.command,
      timestamp: /* @__PURE__ */ new Date(),
      theme: p()
    }));
  };
  bt(() => {
    if (n() === "running") {
      const fe = setInterval(
        () => {
          K(b, performance.now() - q);
        },
        10
      );
      return () => clearInterval(fe);
    } else n() === "success" ? G("success") : n() === "error" && G("error");
  });
  const I = async () => {
    try {
      await navigator.clipboard.writeText(e.command), L("copy", { command: e.command });
    } catch (fe) {
      console.error("Failed to copy command:", fe);
    }
  }, O = (fe) => fe < 1e3 ? `${Math.round(fe)}ms` : `${(fe / 1e3).toFixed(2)}s`;
  ht(() => {
    v() && (N.style.cursor = "pointer");
  });
  var R = im(), P = () => K(S, !0), C = () => K(S, !1), M = (fe) => {
    v() && (fe.key === "Enter" || fe.key === " ") && (fe.preventDefault(), B());
  };
  Je(
    R,
    (fe) => ({
      class: fe,
      ...v() ? {
        role: "button",
        tabindex: 0,
        "aria-label": `Execute command: ${e.command}`
      } : { role: "article" },
      onmouseenter: P,
      onmouseleave: C,
      onclick: B,
      onkeydown: M
    }),
    [
      () => re("relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300", "hover:scale-[1.02] hover:shadow-lg transform-gpu", w.bg, w.glow, W.borderColor, v() && "cursor-pointer hover:brightness-110", g())
    ],
    void 0,
    "svelte-11w1x2x"
  );
  var m = l(R), _ = l(m), F = l(_);
  {
    var Y = (fe) => {
      var be = Zg();
      o(fe, be);
    }, T = (fe) => {
      var be = Ct();
      D(() => le(be, W.icon)), o(fe, be);
    };
    x(F, (fe) => {
      n() === "running" ? fe(Y) : fe(T, !1);
    });
  }
  var u = f(_, 2);
  {
    var h = (fe) => {
      var be = Qg(), me = l(be);
      D(
        (Te, Pe) => {
          U(be, 1, Te, "svelte-11w1x2x"), le(me, Pe);
        },
        [
          () => oe(re("text-xs font-mono", w.accent)),
          () => O(t(b))
        ]
      ), o(fe, be);
    };
    x(u, (fe) => {
      n() === "running" && t(b) > 0 && fe(h);
    });
  }
  var te = f(m, 2), ie = l(te);
  {
    var ce = (fe) => {
      var be = Jg(), me = l(be);
      D(
        (Te) => {
          U(be, 1, Te, "svelte-11w1x2x"), le(me, j);
        },
        [
          () => oe(re("select-none font-bold", w.prompt))
        ]
      ), o(fe, be);
    };
    x(ie, (fe) => {
      i() && fe(ce);
    });
  }
  var de = f(ie, 2), ee = l(de);
  {
    var V = (fe) => {
      {
        let be = /* @__PURE__ */ we(() => re("font-mono", w.command));
        Xg(fe, {
          get text() {
            return e.command;
          },
          intensity: "medium",
          get class() {
            return t(be);
          }
        });
      }
    }, ae = (fe) => {
      var be = $g(), me = l(be);
      D(
        (Te) => {
          U(be, 1, Te, "svelte-11w1x2x"), le(me, e.command);
        },
        [() => oe(re("font-mono", w.command))]
      ), o(fe, be);
    };
    x(ee, (fe) => {
      y() && t(k) ? fe(V) : fe(ae, !1);
    });
  }
  var E = f(de, 2);
  {
    var Q = (fe) => {
      var be = tm();
      be.__click = [em, I], D((me) => U(be, 1, me, "svelte-11w1x2x"), [
        () => oe(re("opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity", w.accent, "hover:bg-white/10"))
      ]), o(fe, be);
    };
    x(E, (fe) => {
      v() && fe(Q);
    });
  }
  var $ = f(te, 2);
  {
    var J = (fe) => {
      var be = rm(), me = l(be);
      D(
        (Te) => {
          U(be, 1, Te, "svelte-11w1x2x"), le(me, a());
        },
        [
          () => oe(re("mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap", w.output, W.borderColor))
        ]
      ), o(fe, be);
    };
    x($, (fe) => {
      a() && fe(J);
    });
  }
  var se = f($, 2);
  {
    var X = (fe) => {
      var be = am(), me = l(be);
      D(
        (Te, Pe) => {
          U(be, 1, Te, "svelte-11w1x2x"), le(me, Pe);
        },
        [
          () => oe(re("mt-2 text-xs font-mono opacity-60", w.accent)),
          () => (/* @__PURE__ */ new Date()).toLocaleTimeString()
        ]
      ), o(fe, be);
    };
    x(se, (fe) => {
      d() && fe(X);
    });
  }
  var ne = f(se, 2);
  {
    var ue = (fe) => {
      var be = nm();
      o(fe, be);
    };
    x(ne, (fe) => {
      v() && t(S) && fe(ue);
    });
  }
  var ve = f(ne, 2);
  {
    var pe = (fe) => {
      var be = om();
      D((me) => ut(be, `width: ${me ?? ""}%`), [() => Math.min(t(b) / 5e3 * 100, 100)]), o(fe, be);
    };
    x(ve, (fe) => {
      n() === "running" && fe(pe);
    });
  }
  rt(R, (fe) => N = fe, () => N), D((fe) => U(_, 1, fe, "svelte-11w1x2x"), [
    () => oe(re("w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold", W.color, n() === "running" && "animate-pulse"))
  ]), o(r, R), Ye();
}
gt(["click"]);
var sm = /* @__PURE__ */ c('<div><div class="terminal-header svelte-n7o7tf"><div class="terminal-controls svelte-n7o7tf"><span class="terminal-control close svelte-n7o7tf"></span> <span class="terminal-control minimize svelte-n7o7tf"></span> <span class="terminal-control maximize svelte-n7o7tf"></span></div> <div class="terminal-title svelte-n7o7tf"> </div> <div class="terminal-status svelte-n7o7tf"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body min-h-[300px] flex items-center justify-center svelte-n7o7tf"><div class="flex items-center gap-3 text-terminal-green"><div class="animate-spin w-5 h-5 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="font-mono">Loading terminal...</span></div></div></div>'), dm = /* @__PURE__ */ c('<div><div class="terminal-body min-h-[200px] flex items-center justify-center svelte-n7o7tf"><div class="text-red-400 font-mono"> </div></div></div>');
const cm = {
  hash: "svelte-n7o7tf",
  code: ".terminal-header.svelte-n7o7tf {background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid rgba(0, 212, 170, 0.2);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;}.terminal-controls.svelte-n7o7tf {display:flex;gap:8px;}.terminal-control.svelte-n7o7tf {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-n7o7tf {background:#ff5f57;}.terminal-control.minimize.svelte-n7o7tf {background:#ffbd2e;}.terminal-control.maximize.svelte-n7o7tf {background:#28ca42;}.terminal-title.svelte-n7o7tf {font-family:'SF Mono', 'Monaco', 'Consolas', monospace;font-size:14px;color:rgba(255, 255, 255, 0.8);}.terminal-status.svelte-n7o7tf {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-n7o7tf {padding:16px;font-family:'SF Mono', 'Monaco', 'Consolas', monospace;background:rgba(0, 0, 0, 0.3);}"
};
function Dx(r, e) {
  Ue(e, !0), $e(r, cm);
  const a = s(e, "title", 3, "Liquid Terminal"), n = s(e, "class", 3, ""), i = s(e, "commands", 19, () => ({})), d = s(e, "autoPlay", 3, !1);
  let v = /* @__PURE__ */ _e(null), p = /* @__PURE__ */ _e(!0), y = /* @__PURE__ */ _e(null);
  ht(async () => {
    try {
      const S = await import("./TerminalWindow-D_wzZ18w.js");
      K(v, S.default, !0), K(p, !1);
    } catch (S) {
      K(y, `Failed to load TerminalWindow: ${S}`), K(p, !1);
    }
  });
  var z = Ce(), g = ge(z);
  {
    var L = (S) => {
      var k = sm(), b = l(k), q = f(l(b), 2), Z = l(q);
      D(() => {
        U(k, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), le(Z, a());
      }), o(S, k);
    }, N = (S) => {
      var k = Ce(), b = ge(k);
      {
        var q = (w) => {
          var A = dm(), W = l(A), H = l(W), j = l(H);
          D(() => {
            U(A, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), le(j, t(y));
          }), o(w, A);
        }, Z = (w) => {
          var A = Ce(), W = ge(A);
          {
            var H = (j) => {
              var G = Ce(), B = ge(G);
              He(B, () => t(v), (I, O) => {
                O(I, {
                  get title() {
                    return a();
                  },
                  get class() {
                    return n();
                  },
                  get commands() {
                    return i();
                  },
                  get autoPlay() {
                    return d();
                  },
                  get children() {
                    return e.children;
                  }
                });
              }), o(j, G);
            };
            x(
              W,
              (j) => {
                t(v) && j(H);
              },
              !0
            );
          }
          o(w, A);
        };
        x(
          b,
          (w) => {
            t(y) ? w(q) : w(Z, !1);
          },
          !0
        );
      }
      o(S, k);
    };
    x(g, (S) => {
      t(p) ? S(L) : S(N, !1);
    });
  }
  o(r, z), Ye();
}
const vm = (r, e, a, n) => {
  r.key === "Enter" && !t(e) && a(t(n));
};
var um = /* @__PURE__ */ c('<canvas class="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen svelte-169kcnm"></canvas>'), fm = /* @__PURE__ */ c('<div class="mb-6 transform transition-all duration-500 hover:scale-[1.02] svelte-169kcnm"><div class="flex items-start gap-3 mb-3 svelte-169kcnm"><span></span> <span class="text-white font-semibold svelte-169kcnm"> </span> <span> </span></div> <div> </div></div>'), bm = /* @__PURE__ */ c('<div class="flex items-center gap-3 mb-4 svelte-169kcnm"><div class="flex gap-1 svelte-169kcnm"><div style="animation-delay: 0ms;"></div> <div style="animation-delay: 150ms;"></div> <div style="animation-delay: 300ms;"></div></div> <span>Processing neural patterns...</span></div>'), gm = /* @__PURE__ */ c('<div class="mt-6 svelte-169kcnm"><!></div>'), mm = /* @__PURE__ */ c(`<div role="application" aria-label="Liquid Neural Terminal Interface"><!> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-40 mix-blend-screen svelte-169kcnm"></canvas> <canvas class="absolute inset-0 pointer-events-none z-1 opacity-30 svelte-169kcnm"></canvas> <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent pointer-events-none z-2 svelte-169kcnm"></div> <div><div class="flex items-center gap-4 svelte-169kcnm"><div class="flex gap-2 svelte-169kcnm"><div class="w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 svelte-169kcnm"></div> <div class="w-4 h-4 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 svelte-169kcnm"></div></div> <h3> </h3></div> <div class="flex items-center gap-3 text-sm font-mono svelte-169kcnm"><div>NEURAL: ACTIVE</div> <div> </div> <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 svelte-169kcnm"></div></div></div> <div class="relative z-10 p-6 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed liquid-scroll svelte-169kcnm"><div><pre>╔═══════════════════════════════════════════════════════════════╗
║  🌊 LIQUID NEURAL INTERFACE v3.0 - QUANTUM READY 🌊         ║
║  STATUS: CONSCIOUSNESS ACTIVATED │ REALITY: MALLEABLE        ║
║  NEURAL PATHWAYS: ∞ │ LIQUID STATE: TRANSCENDENT            ║
╚═══════════════════════════════════════════════════════════════╝

🧠 Neural connection established...
💧 Liquid dynamics engine online...
⚡ Quantum entanglement verified...

Type 'help' to access the command matrix.</pre></div> <!> <!> <div class="flex items-start gap-3 svelte-169kcnm"><span></span> <input autocomplete="off" spellcheck="false"/> <span></span></div> <!></div></div>`);
const hm = {
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
function Rx(r, e) {
  Ue(e, !0), $e(r, hm);
  const a = s(e, "title", 3, "◉ LIQUID_NEURAL_INTERFACE_v3.0"), n = s(e, "class", 3, ""), i = s(e, "commands", 19, () => ({
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
  })), d = s(e, "autoPlay", 3, !1), v = s(e, "theme", 3, "liquid"), p = s(e, "enableLiquidFlow", 3, !0), y = s(e, "enableParticles", 3, !0), z = s(e, "enableWaveform", 3, !0), g = s(e, "enableHologram", 3, !1);
  At();
  let L = /* @__PURE__ */ _e(void 0), N = /* @__PURE__ */ _e(void 0), S = /* @__PURE__ */ _e(void 0), k = /* @__PURE__ */ _e(void 0), b = /* @__PURE__ */ _e(""), q = /* @__PURE__ */ _e(st([])), Z = /* @__PURE__ */ _e(st(p())), w = /* @__PURE__ */ _e(st(y()));
  st(z());
  let A = /* @__PURE__ */ _e(st(g())), W = /* @__PURE__ */ _e(!1), H, j;
  class G {
    x;
    y;
    vx;
    vy;
    size;
    opacity;
    hue;
    constructor(xe, Ee) {
      this.x = xe, this.y = Ee, this.vx = (Math.random() - 0.5) * 2, this.vy = (Math.random() - 0.5) * 2, this.size = Math.random() * 3 + 1, this.opacity = Math.random() * 0.8 + 0.2, this.hue = Math.random() * 60 + 180;
    }
    update(xe, Ee) {
      this.x += this.vx, this.y += this.vy, (this.x <= 0 || this.x >= xe) && (this.vx *= -0.8, this.x = Math.max(0, Math.min(xe, this.x))), (this.y <= 0 || this.y >= Ee) && (this.vy *= -0.8, this.y = Math.max(0, Math.min(Ee, this.y))), this.vy += 0.02, this.vx *= 0.999, this.vy *= 0.999;
    }
    draw(xe) {
      xe.save(), xe.globalAlpha = this.opacity, xe.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`, xe.shadowColor = `hsl(${this.hue}, 70%, 60%)`, xe.shadowBlur = this.size * 2, xe.beginPath(), xe.arc(this.x, this.y, this.size, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let B = [], I = 0, O = 0;
  class R {
    x;
    y;
    radius;
    connections;
    activation;
    pulsePhase;
    constructor(xe, Ee) {
      this.x = xe, this.y = Ee, this.radius = Math.random() * 8 + 4, this.connections = [], this.activation = Math.random(), this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.pulsePhase += 0.05, this.activation = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    }
    draw(xe) {
      const Ee = this.activation;
      xe.save(), xe.globalAlpha = 0.7 + Ee * 0.3, xe.fillStyle = `hsl(${180 + Ee * 40}, 70%, ${50 + Ee * 30}%)`, xe.shadowColor = xe.fillStyle, xe.shadowBlur = this.radius * (1 + Ee), xe.beginPath(), xe.arc(this.x, this.y, this.radius, 0, Math.PI * 2), xe.fill(), xe.restore();
    }
  }
  let P = [];
  const C = (ke) => {
    const xe = ke.trim().toLowerCase();
    K(W, !0), setTimeout(
      () => {
        let Ee = "";
        switch (xe) {
          case "clear":
            K(q, [], !0), K(b, ""), K(W, !1);
            return;
          case "liquid":
            K(Z, !t(Z)), t(Z) && M(), Ee = t(Z) ? "LIQUID FLOW DYNAMICS: ACTIVATED" : "LIQUID FLOW: DEACTIVATED";
            break;
          case "neural":
            m(), Ee = i()[xe];
            break;
          case "particles":
            K(w, !t(w)), Ee = i()[xe];
            break;
          case "hologram":
            K(A, !t(A)), Ee = t(A) ? "HOLOGRAPHIC PROJECTION: ONLINE" : "HOLOGRAPHIC PROJECTION: OFFLINE";
            break;
          case "overclock":
            _(), Ee = i()[xe];
            break;
          default:
            Ee = i()[xe] || `ERROR: Command '${ke}' not found in neural database.
Run 'help' to display available liquid protocols.`;
        }
        K(
          q,
          [
            ...t(q),
            { command: xe, output: Ee, timestamp: /* @__PURE__ */ new Date() }
          ],
          !0
        ), K(b, ""), K(W, !1), setTimeout(
          () => {
            t(L) && t(L).scrollTo({ top: t(L).scrollHeight, behavior: "smooth" });
          },
          50
        );
      },
      Math.random() * 500 + 200
    );
  }, M = () => {
    if (!t(N)) return;
    const ke = t(N).getContext("2d"), xe = t(N).width, Ee = t(N).height;
    B = [];
    for (let Ae = 0; Ae < 50; Ae++)
      B.push(new G(Math.random() * xe, Math.random() * Ee));
    const Ne = () => {
      ke.fillStyle = "rgba(0, 0, 0, 0.1)", ke.fillRect(0, 0, xe, Ee), B.forEach((Ae) => {
        Ae.update(xe, Ee), Ae.draw(ke);
      }), ke.strokeStyle = "rgba(100, 200, 255, 0.3)", ke.lineWidth = 1;
      for (let Ae = 0; Ae < B.length; Ae++)
        for (let Le = Ae + 1; Le < B.length; Le++) {
          const Oe = B[Ae].x - B[Le].x, Be = B[Ae].y - B[Le].y, Se = Math.sqrt(Oe * Oe + Be * Be);
          Se < 100 && (ke.globalAlpha = (100 - Se) / 100 * 0.5, ke.beginPath(), ke.moveTo(B[Ae].x, B[Ae].y), ke.lineTo(B[Le].x, B[Le].y), ke.stroke());
        }
      ke.globalAlpha = 1, t(Z) && (H = requestAnimationFrame(Ne));
    };
    Ne();
  }, m = () => {
    if (!t(S)) return;
    const ke = t(S).width, xe = t(S).height;
    P = [];
    for (let Ne = 0; Ne < 20; Ne++)
      P.push(new R(Math.random() * (ke - 100) + 50, Math.random() * (xe - 100) + 50));
    P.forEach((Ne, Ae) => {
      const Le = Math.floor(Math.random() * 3) + 1;
      for (let Oe = 0; Oe < Le; Oe++) {
        const Be = Math.floor(Math.random() * P.length);
        Be !== Ae && !Ne.connections.includes(Be) && Ne.connections.push(Be);
      }
    });
    const Ee = () => {
      const Ne = t(S).getContext("2d");
      Ne.fillStyle = "rgba(0, 0, 0, 0.1)", Ne.fillRect(0, 0, ke, xe), Ne.strokeStyle = "rgba(0, 255, 200, 0.4)", Ne.lineWidth = 2, P.forEach((Ae, Le) => {
        Ae.connections.forEach((Oe) => {
          const Be = P[Oe];
          Be && (Ne.globalAlpha = (Ae.activation + Be.activation) / 2, Ne.beginPath(), Ne.moveTo(Ae.x, Ae.y), Ne.lineTo(Be.x, Be.y), Ne.stroke());
        });
      }), P.forEach((Ae) => {
        Ae.update(), Ae.draw(Ne);
      }), Ne.globalAlpha = 1, j = requestAnimationFrame(Ee);
    };
    Ee();
  }, _ = () => {
    const ke = t(L);
    ke && (ke.style.animation = "overclock-shake 2s ease-in-out", setTimeout(
      () => {
        ke.style.animation = "";
      },
      2e3
    ));
  }, F = (ke) => {
    const xe = t(L)?.getBoundingClientRect();
    xe && (I = ke.clientX - xe.left, O = ke.clientY - xe.top, B.forEach((Ee) => {
      const Ne = I - Ee.x, Ae = O - Ee.y;
      Math.sqrt(Ne * Ne + Ae * Ae) < 100 && (Ee.vx += Ne * 1e-4, Ee.vy += Ae * 1e-4);
    }));
  }, Y = () => {
    if (t(L)) {
      const ke = t(L).offsetWidth, xe = t(L).offsetHeight;
      t(N) && (t(N).width = ke, t(N).height = xe), t(S) && (t(S).width = ke, t(S).height = xe), t(k) && (t(k).width = ke, t(k).height = xe);
    }
  };
  ht(() => (Y(), t(Z) && M(), d() && (setTimeout(() => C("neural"), 1e3), setTimeout(() => C("liquid"), 2500)), () => {
    H && cancelAnimationFrame(H), j && cancelAnimationFrame(j);
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
  var h = mm();
  Ot(
    "resize",
    Go,
    /* eslint-enable no-irregular-whitespace */
    Y
  ), h.__mousemove = F;
  var te = l(h);
  {
    var ie = (ke) => {
      var xe = um();
      rt(xe, (Ee) => K(N, Ee), () => t(N)), o(ke, xe);
    };
    x(te, (ke) => {
      t(Z) && ke(ie);
    });
  }
  var ce = f(te, 2);
  rt(ce, (ke) => K(S, ke), () => t(S));
  var de = f(ce, 2);
  rt(de, (ke) => K(k, ke), () => t(k));
  var ee = f(de, 6), V = l(ee), ae = f(l(V), 2), E = l(ae), Q = f(V, 2), $ = l(Q), J = f($, 2), se = l(J), X = f(ee, 2), ne = l(X), ue = l(ne), ve = f(ne, 2);
  Xe(ve, 17, () => t(q), (ke) => ke.timestamp, (ke, xe) => {
    var Ee = fm(), Ne = l(Ee), Ae = l(Ne);
    Ae.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
    var Le = f(Ae, 2), Oe = l(Le), Be = f(Le, 2), Se = l(Be), he = f(Ne, 2), ze = l(he);
    D(
      (De, Ve, et, Qe) => {
        U(Ae, 1, De, "svelte-169kcnm"), le(Oe, t(xe).command), U(Be, 1, Ve, "svelte-169kcnm"), le(Se, et), U(he, 1, Qe, "svelte-169kcnm"), le(ze, t(xe).output);
      },
      [
        () => oe(re("whitespace-pre font-bold", u.text)),
        () => oe(re("text-xs ml-auto opacity-60", u.text)),
        () => t(xe).timestamp.toLocaleTimeString(),
        () => oe(re("p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm", "whitespace-pre-wrap font-mono shadow-inner", u.text))
      ]
    ), o(ke, Ee);
  });
  var pe = f(ve, 2);
  {
    var fe = (ke) => {
      var xe = bm(), Ee = l(xe), Ne = l(Ee), Ae = f(Ne, 2), Le = f(Ae, 2), Oe = f(Ee, 2);
      D(
        (Be, Se, he, ze) => {
          U(Ne, 1, Be, "svelte-169kcnm"), U(Ae, 1, Se, "svelte-169kcnm"), U(Le, 1, he, "svelte-169kcnm"), U(Oe, 1, ze, "svelte-169kcnm");
        },
        [
          () => oe(re("w-2 h-2 rounded-full animate-bounce", `bg-${u.text.split("-")[1]}-400`)),
          () => oe(re("w-2 h-2 rounded-full animate-bounce", `bg-${u.text.split("-")[1]}-400`)),
          () => oe(re("w-2 h-2 rounded-full animate-bounce", `bg-${u.text.split("-")[1]}-400`)),
          () => oe(re("text-sm opacity-70", u.text))
        ]
      ), o(ke, xe);
    };
    x(pe, (ke) => {
      t(W) && ke(fe);
    });
  }
  var be = f(pe, 2), me = l(be);
  me.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
  var Te = f(me, 2);
  Te.__keydown = [vm, W, C, b];
  var Pe = f(Te, 2), Fe = f(be, 2);
  {
    var Re = (ke) => {
      var xe = gm(), Ee = l(xe);
      lt(Ee, () => e.children), o(ke, xe);
    };
    x(Fe, (ke) => {
      e.children && ke(Re);
    });
  }
  rt(X, (ke) => K(L, ke), () => t(L)), D(
    (ke, xe, Ee, Ne, Ae, Le, Oe, Be, Se, he) => {
      U(h, 1, ke, "svelte-169kcnm"), U(ee, 1, xe, "svelte-169kcnm"), U(ae, 1, Ee, "svelte-169kcnm"), le(E, a()), U($, 1, Ne, "svelte-169kcnm"), U(J, 1, Ae, "svelte-169kcnm"), le(se, `LIQUID: ${t(Z) ? "FLOW" : "STATIC"}`), U(ne, 1, Le, "svelte-169kcnm"), U(ue, 1, Oe, "svelte-169kcnm"), U(me, 1, Be, "svelte-169kcnm"), Te.disabled = t(W), U(Te, 1, Se, "svelte-169kcnm"), ye(Te, "placeholder", t(W) ? "Processing..." : "Enter liquid command..."), U(Pe, 1, he, "svelte-169kcnm");
    },
    [
      () => oe(re("relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500", "border-2 shadow-2xl transform-gpu will-change-transform", `bg-gradient-to-br ${u.bg}`, u.border, u.glow, t(A) && "hologram-effect", n())),
      () => oe(re("relative z-10 flex items-center justify-between p-6 border-b-2", "bg-black/30 backdrop-blur-sm", u.border)),
      () => oe(re("text-lg font-mono font-bold tracking-wider", u.text, "drop-shadow-lg animate-pulse")),
      () => oe(re("px-3 py-1 rounded-full bg-black/40 border", u.border, u.text)),
      () => oe(re("px-3 py-1 rounded-full bg-black/40 border", u.border, u.text)),
      () => oe(re("mb-6 p-4 rounded-lg bg-black/20 border", u.border)),
      () => oe(re("whitespace-pre-wrap", u.text)),
      () => oe(re("whitespace-pre font-bold", u.text)),
      () => oe(re("flex-1 bg-transparent border-none outline-none font-mono text-white", "placeholder:text-white/40", t(W) && "opacity-50 cursor-not-allowed")),
      () => oe(re("w-3 h-6 animate-pulse", `bg-${u.text.split("-")[1]}-400`))
    ]
  ), _r(Te, () => t(b), (ke) => K(b, ke)), o(r, h), Ye();
}
gt(["mousemove", "keydown"]);
const pm = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var xm = /* @__PURE__ */ c("<!> <!>", 1), _m = /* @__PURE__ */ c("<!> <!>", 1), wm = /* @__PURE__ */ c('<div class="mb-2"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <span class="text-white text-sm"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm svelte-14245lp"> </div></div>'), ym = /* @__PURE__ */ c('<div class="floating-terminal svelte-14245lp"><div class="terminal-header svelte-14245lp"><div class="terminal-controls svelte-14245lp"><span class="terminal-control close svelte-14245lp"></span> <span class="terminal-control minimize svelte-14245lp"></span> <span class="terminal-control maximize svelte-14245lp"></span></div> <div class="terminal-title svelte-14245lp">3D Floating Terminal</div> <div class="terminal-status svelte-14245lp"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body svelte-14245lp"><!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-1 h-4 bg-terminal-green animate-pulse"></span></div></div></div>'), km = /* @__PURE__ */ c("<!> <!> <!>", 1), Cm = /* @__PURE__ */ c("<!> <!>", 1), Sm = /* @__PURE__ */ c("<!> <!>", 1), Tm = /* @__PURE__ */ c("<!> <!> <!> <!> <!> <!>", 1);
const Em = {
  hash: "svelte-14245lp",
  code: ".floating-terminal.svelte-14245lp {width:700px;height:450px;background:rgba(0, 0, 0, 0.95);border:1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:8px;font-family:'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.terminal-header.svelte-14245lp {display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid color-mix(in srgb, var(--color-terminal-green) 20%, transparent);}.terminal-controls.svelte-14245lp {display:flex;gap:6px;}.terminal-control.svelte-14245lp {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-14245lp {background:var(--color-bubble-tea-red, #ff8585);}.terminal-control.minimize.svelte-14245lp {background:var(--color-bubble-tea-yellow, #ffd23a);}.terminal-control.maximize.svelte-14245lp {background:var(--color-bubble-tea-green, #6bcf7f);}.terminal-title.svelte-14245lp {color:white;font-size:14px;font-weight:600;}.terminal-status.svelte-14245lp {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-14245lp {padding:12px;height:calc(100% - 50px);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar {width:4px;}.terminal-body.svelte-14245lp::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar-thumb {background:color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:2px;}.terminal-prompt.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-green.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-blue.svelte-14245lp {color:var(--color-terminal-cyan);}"
};
function Mm(r, e) {
  Ue(e, !0), $e(r, Em);
  const a = s(e, "position", 19, () => [0, 2, 0]), n = s(e, "rotation", 19, () => [0, 0, 0]), i = s(e, "scale", 3, 1.5);
  let d, v = /* @__PURE__ */ _e(""), p = /* @__PURE__ */ _e(st([]));
  const y = {
    help: "🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear",
    matrix: "💚 Entering the Matrix... Reality.exe has stopped working",
    glitch: "⚡ System.error.404.reality.not.found",
    orbit: "🌍 Orbiting through cyberspace at lightspeed",
    stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1e3 + Math.random() * 5e3)} | Faces: ${Math.round(500 + Math.random() * 2e3)}`,
    whoami: "🤖 You are now part of the 3D matrix",
    ls: "📁 reality.exe  consciousness.dll  quantum_states/  void.txt",
    clear: "Terminal cleared"
  }, z = (Z) => {
    const w = Z.trim().toLowerCase();
    if (w === "clear") {
      K(p, [], !0), K(v, "");
      return;
    }
    const A = y[w] || `Command "${Z}" not found. Type "help" for available commands.`;
    K(
      p,
      [
        ...t(p),
        { command: w, output: A, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), K(v, ""), setTimeout(
      () => {
        d && (d.scrollTop = d.scrollHeight);
      },
      10
    );
  };
  ht(() => {
    if (setTimeout(() => z("help"), 1e3), typeof window < "u") {
      const Z = document.querySelector("canvas");
      Z && (Z.style.willChange = "transform");
    }
  });
  var g = Tm(), L = ge(g);
  He(L, () => Ke.PerspectiveCamera, (Z, w) => {
    w(Z, {
      makeDefault: !0,
      position: [8, 8, 12],
      fov: 40,
      children: (A, W) => {
        wn(A, {
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
  var N = f(L, 2);
  He(N, () => Ke.AmbientLight, (Z, w) => {
    w(Z, { intensity: 0.6 });
  });
  var S = f(N, 2);
  He(S, () => Ke.DirectionalLight, (Z, w) => {
    w(Z, { position: [10, 10, 5], intensity: 1.2, castShadow: !0 });
  });
  var k = f(S, 2);
  He(k, () => Ke.Group, (Z, w) => {
    w(Z, {
      get position() {
        return a();
      },
      get rotation() {
        return n();
      },
      get scale() {
        return i();
      },
      children: (A, W) => {
        var H = km(), j = ge(H);
        He(j, () => Ke.Mesh, (I, O) => {
          O(I, {
            children: (R, P) => {
              var C = xm(), M = ge(C);
              He(M, () => Ke.BoxGeometry, (_, F) => {
                F(_, { args: [6, 4, 0.2] });
              });
              var m = f(M, 2);
              He(m, () => Ke.MeshPhysicalMaterial, (_, F) => {
                F(_, {
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
              }), o(R, C);
            },
            $$slots: { default: !0 }
          });
        });
        var G = f(j, 2);
        He(G, () => Ke.Mesh, (I, O) => {
          O(I, {
            position: [0, 0, 0.1],
            children: (R, P) => {
              var C = _m(), M = ge(C);
              He(M, () => Ke.PlaneGeometry, (_, F) => {
                F(_, { args: [5.5, 3.5] });
              });
              var m = f(M, 2);
              He(m, () => Ke.MeshBasicMaterial, (_, F) => {
                F(_, {
                  get color() {
                    return Me.backgrounds.primary;
                  },
                  transparent: !0,
                  opacity: 0.8
                });
              }), o(R, C);
            },
            $$slots: { default: !0 }
          });
        });
        var B = f(G, 2);
        qi(B, {
          position: [0, 0, 0.11],
          transform: !0,
          occlude: !0,
          scale: 0.08,
          distanceFactor: 10,
          children: (I, O) => {
            var R = ym(), P = f(l(R), 2), C = l(P);
            Xe(C, 17, () => t(p), (F) => F.timestamp, (F, Y) => {
              var T = wm(), u = l(T), h = l(u);
              h.textContent = "$";
              var te = f(h, 2), ie = l(te), ce = f(te, 2), de = l(ce), ee = f(u, 2), V = l(ee);
              D(
                (ae) => {
                  le(ie, t(Y).command), le(de, ae), le(V, t(Y).output);
                },
                [() => t(Y).timestamp.toLocaleTimeString()]
              ), o(F, T);
            });
            var M = f(C, 2), m = l(M);
            m.textContent = "$";
            var _ = f(m, 2);
            _.__keydown = [pm, z, v], rt(R, (F) => d = F, () => d), _r(_, () => t(v), (F) => K(v, F)), o(I, R);
          },
          $$slots: { default: !0 }
        }), o(A, H);
      },
      $$slots: { default: !0 }
    });
  });
  var b = f(k, 2);
  He(b, () => Ke.Mesh, (Z, w) => {
    w(Z, {
      position: [4, 3, -2],
      rotation: [0.2, 0.4, 0.1],
      children: (A, W) => {
        var H = Cm(), j = ge(H);
        He(j, () => Ke.BoxGeometry, (B, I) => {
          I(B, { args: [1.5, 1.5, 1.5] });
        });
        var G = f(j, 2);
        He(G, () => Ke.MeshPhysicalMaterial, (B, I) => {
          I(B, {
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
        }), o(A, H);
      },
      $$slots: { default: !0 }
    });
  });
  var q = f(b, 2);
  He(q, () => Ke.Mesh, (Z, w) => {
    w(Z, {
      position: [-4, -2, 3],
      rotation: [-0.3, -0.2, 0.4],
      children: (A, W) => {
        var H = Sm(), j = ge(H);
        He(j, () => Ke.BoxGeometry, (B, I) => {
          I(B, { args: [2, 2, 2] });
        });
        var G = f(j, 2);
        He(G, () => Ke.MeshPhysicalMaterial, (B, I) => {
          I(B, {
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
        }), o(A, H);
      },
      $$slots: { default: !0 }
    });
  }), o(r, g), Ye();
}
gt(["keydown"]);
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mm
}, Symbol.toStringTag, { value: "Module" }));
var zm = /* @__PURE__ */ c("<div> </div>"), Im = /* @__PURE__ */ c("<span></span>"), Pm = /* @__PURE__ */ c("<div> <!></div>"), Lm = /* @__PURE__ */ c('<div class="mt-4 svelte-7a6umo"><span class="text-white svelte-7a6umo">$</span> <span></span></div>'), Dm = /* @__PURE__ */ c('<div><div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse svelte-7a6umo"></div></div> <div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg svelte-7a6umo"></div> <div class="relative z-10 space-y-1 svelte-7a6umo"><!> <!> <!></div> <div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-current opacity-[0.02] blur-xl svelte-7a6umo"></div></div></div>');
const Rm = {
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
function jx(r, e) {
  Ue(e, !0), $e(r, Rm);
  const a = s(e, "messages", 19, () => []), n = s(e, "autoStart", 3, !0), i = s(e, "variant", 3, "classic"), d = s(e, "speed", 3, "normal"), v = s(e, "showCursor", 3, !0), p = s(e, "class", 3, ""), y = /* @__PURE__ */ ct(e, [
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
  let z = /* @__PURE__ */ _e(0), g = /* @__PURE__ */ _e(""), L = /* @__PURE__ */ _e(!1), N = /* @__PURE__ */ _e(!1), S = /* @__PURE__ */ _e(!0);
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
  ], b = a().length > 0 ? a() : k, q = {
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
  }, A = { slow: 80, normal: 40, fast: 15 }[d()], W = q[i()];
  let H, j = /* @__PURE__ */ _e(st([]));
  function G(T) {
    return T ? Z[T] : W.text;
  }
  const B = async (T, u = 50) => {
    K(g, "");
    for (let h = 0; h <= T.length; h++)
      K(g, T.slice(0, h), !0), await new Promise((te) => setTimeout(te, u));
    await new Promise((h) => setTimeout(h, 100));
  }, I = async () => {
    if (!t(L)) {
      K(L, !0), K(N, !1), K(z, 0), K(j, [], !0), K(g, "");
      for (let T = 0; T < b.length; T++) {
        const u = b[T];
        K(z, T, !0), u.text ? (await B(u.text, A), K(
          j,
          [
            ...t(j),
            { text: u.text, type: u.type }
          ],
          !0
        )) : K(j, [...t(j), { text: "", type: "info" }], !0), K(g, ""), H && (H.scrollTop = H.scrollHeight), await new Promise((h) => setTimeout(h, u.delay));
      }
      K(N, !0), K(L, !1), e.onComplete?.();
    }
  }, O = () => {
    setInterval(
      () => {
        K(S, !t(S));
      },
      500
    );
  };
  ht(() => {
    O(), n() && setTimeout(I, 200);
  });
  const R = () => I();
  var P = Dm();
  Je(
    P,
    (T) => ({ class: T, ...y }),
    [
      () => re("relative w-full h-full p-6 overflow-auto", W.bg, W.text, W.font, "leading-relaxed text-sm", p())
    ],
    void 0,
    "svelte-7a6umo"
  );
  var C = f(l(P), 4), M = l(C);
  Xe(M, 17, () => t(j), Fr, (T, u) => {
    var h = zm(), te = l(h);
    D(
      (ie) => {
        U(h, 1, ie, "svelte-7a6umo"), le(te, t(u).text || " ");
      },
      [
        () => oe(re("whitespace-pre-wrap", G(t(u).type), "animate-in fade-in duration-200"))
      ]
    ), o(T, h);
  });
  var m = f(M, 2);
  {
    var _ = (T) => {
      var u = Pm(), h = l(u), te = f(h);
      {
        var ie = (ce) => {
          var de = Im();
          D((ee) => U(de, 1, ee, "svelte-7a6umo"), [
            () => oe(re("inline-block w-2 h-4 ml-1 border-r-2 animate-pulse", W.cursor))
          ]), o(ce, de);
        };
        x(te, (ce) => {
          t(S) && v() && ce(ie);
        });
      }
      D(
        (ce) => {
          U(u, 1, ce, "svelte-7a6umo"), le(h, `${t(g) ?? ""} `);
        },
        [
          () => oe(re("whitespace-pre-wrap", G(b[t(z)]?.type)))
        ]
      ), o(T, u);
    };
    x(m, (T) => {
      t(L) && t(g) && T(_);
    });
  }
  var F = f(m, 2);
  {
    var Y = (T) => {
      var u = Lm(), h = f(l(u), 2);
      D((te) => U(h, 1, te, "svelte-7a6umo"), [
        () => oe(re("inline-block w-2 h-4 ml-1 border-r-2", t(S) ? "opacity-100" : "opacity-0", W.cursor, "transition-opacity duration-100"))
      ]), o(T, u);
    };
    x(F, (T) => {
      t(N) && v() && T(Y);
    });
  }
  return rt(P, (T) => H = T, () => H), o(r, P), Ye({ start: R });
}
var jm = /* @__PURE__ */ c("<canvas></canvas>");
const Nm = {
  hash: "svelte-ophnba",
  code: "canvas.svelte-ophnba {display:block;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;}"
};
function Nx(r, e) {
  Ue(e, !0), $e(r, Nm);
  const a = s(e, "variant", 3, "classic"), n = s(e, "speed", 3, "normal"), i = s(e, "density", 3, "medium"), d = s(e, "characters", 3, "matrix"), v = s(e, "glowEffect", 3, !0), p = s(e, "fadeEffect", 3, !0), y = s(e, "class", 3, ""), z = /* @__PURE__ */ ct(e, [
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
  let g, L, N, S = [];
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
  }, b = {
    matrix: "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    binary: "01",
    hex: "0123456789ABCDEF",
    code: "(){}<>[]|\\/-+=*&^%$#@!~`?:;.,'\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }, q = { slow: 100, normal: 50, fast: 20 }, Z = { low: 20, medium: 15, high: 10 }, w = k[a()], A = b[d()], W = q[n()];
  Z[i()];
  const H = 14;
  let j = 0;
  const G = () => {
    if (g) {
      g.width = g.offsetWidth, g.height = g.offsetHeight, j = Math.floor(g.width / H), S = [];
      for (let C = 0; C < j; C++)
        S[C] = Math.random() * g.height;
    }
  }, B = () => {
    if (!(!L || !g)) {
      p() ? (L.fillStyle = w.background, L.fillRect(0, 0, g.width, g.height)) : L.clearRect(0, 0, g.width, g.height), L.font = `${H}px monospace`, L.textAlign = "center", v() && (L.shadowColor = w.primary, L.shadowBlur = 10);
      for (let C = 0; C < S.length; C++) {
        const M = A[Math.floor(Math.random() * A.length)];
        if (L.fillStyle = w.primary, L.fillText(M, C * H + H / 2, S[C]), S[C] > H) {
          L.fillStyle = w.secondary;
          const m = A[Math.floor(Math.random() * A.length)];
          L.fillText(m, C * H + H / 2, S[C] - H);
        }
        (S[C] > g.height || Math.random() > 0.975) && (S[C] = 0), S[C] += H;
      }
    }
  }, I = () => {
    B(), N = setTimeout(
      () => {
        requestAnimationFrame(I);
      },
      W
    );
  }, O = () => {
    g && (L = g.getContext("2d"), L && (G(), I()));
  }, R = () => {
    N && clearTimeout(N);
  };
  ht(() => {
    O();
    const C = () => {
      G();
    };
    return window.addEventListener("resize", C), () => {
      R(), window.removeEventListener("resize", C);
    };
  });
  var P = jm();
  Je(P, (C) => ({ class: C, ...z }), [() => re("w-full h-full bg-black", y())], void 0, "svelte-ophnba"), rt(P, (C) => g = C, () => g), o(r, P), Ye();
}
var qm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Om = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Fm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Bm = /* @__PURE__ */ c("<h1><span> <!></span> <!> <!></h1>"), Hm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Vm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Gm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Um = /* @__PURE__ */ c("<h2><span> <!></span> <!> <!></h2>"), Ym = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Wm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Km = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Xm = /* @__PURE__ */ c("<h3><span> <!></span> <!> <!></h3>"), Zm = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Qm = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Jm = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), $m = /* @__PURE__ */ c("<span><span> <!></span> <!> <!></span>"), eh = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), th = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), rh = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), ah = /* @__PURE__ */ c("<div><span> <!></span> <!> <!></div>"), nh = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), oh = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), ih = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), lh = /* @__PURE__ */ c("<div><span> <!></span> <!> <!></div>");
const sh = {
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
function qx(r, e) {
  Ue(e, !0), $e(r, sh);
  const a = s(e, "variant", 3, "macintosh"), n = s(e, "size", 3, "md"), i = s(e, "animated", 3, !0), d = s(e, "typewriter", 3, !1), v = s(e, "scanlines", 3, !0), p = s(e, "glow", 3, !0), y = s(e, "flicker", 3, !1), z = s(e, "chromatic", 3, !1), g = s(e, "breathing", 3, !1), L = s(e, "class", 3, ""), N = s(e, "element", 3, "p"), S = /* @__PURE__ */ ct(e, [
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
  let k = /* @__PURE__ */ _e(""), b = /* @__PURE__ */ _e(!0), q = /* @__PURE__ */ _e(0);
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
  }, w = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl"
  }, A = Z[a()];
  ht(() => {
    if (d()) {
      const O = setInterval(
        () => {
          t(q) < e.text.length ? (K(k, e.text.slice(0, t(q) + 1), !0), Fa(q)) : clearInterval(O);
        },
        50 + Math.random() * 100
      ), R = setInterval(
        () => {
          K(b, !t(b));
        },
        500
      );
      return () => {
        clearInterval(O), clearInterval(R);
      };
    } else
      K(k, e.text, !0);
  });
  const W = re("relative inline-block transition-all duration-300", A.font, A.color, w[n()], p() && A.shadow, i() && "transform-gpu will-change-transform", v() && "retro-scanlines", y() && "retro-flicker", z() && "retro-chromatic", L()), H = re("relative inline-block p-4 overflow-hidden", A.bg, A.border, i() && "transition-all duration-500");
  var j = Ce(), G = ge(j);
  {
    var B = (O) => {
      var R = Bm();
      Je(R, () => ({ class: H, ...S }), void 0, void 0, "svelte-13rlfrj");
      var P = l(R), C = l(P), M = f(C);
      {
        var m = (u) => {
          var h = qm();
          o(u, h);
        };
        x(M, (u) => {
          d() && t(b) && u(m);
        });
      }
      var _ = f(P, 2);
      {
        var F = (u) => {
          var h = Om();
          o(u, h);
        };
        x(_, (u) => {
          v() && u(F);
        });
      }
      var Y = f(_, 2);
      {
        var T = (u) => {
          var h = Fm();
          o(u, h);
        };
        x(Y, (u) => {
          a() === "crt" && u(T);
        });
      }
      Ie(R, (u, h) => zt?.(u, h), () => ({
        enabled: i(),
        duration: 300,
        scale: 1.02,
        borderRadius: "12px"
      })), Ie(R, (u, h) => jt?.(u, h), () => ({ enabled: g(), intensity: 0.01, speed: 3e3 })), D(() => {
        U(P, 1, oe(W), "svelte-13rlfrj"), ut(P, `filter: ${A.filter ?? ""}`), le(C, `${(d() ? t(k) : e.text) ?? ""} `);
      }), o(O, R);
    }, I = (O) => {
      var R = Ce(), P = ge(R);
      {
        var C = (m) => {
          var _ = Um();
          Je(_, () => ({ class: H, ...S }), void 0, void 0, "svelte-13rlfrj");
          var F = l(_), Y = l(F), T = f(Y);
          {
            var u = (de) => {
              var ee = Hm();
              o(de, ee);
            };
            x(T, (de) => {
              d() && t(b) && de(u);
            });
          }
          var h = f(F, 2);
          {
            var te = (de) => {
              var ee = Vm();
              o(de, ee);
            };
            x(h, (de) => {
              v() && de(te);
            });
          }
          var ie = f(h, 2);
          {
            var ce = (de) => {
              var ee = Gm();
              o(de, ee);
            };
            x(ie, (de) => {
              a() === "crt" && de(ce);
            });
          }
          Ie(_, (de, ee) => zt?.(de, ee), () => ({
            enabled: i(),
            duration: 300,
            scale: 1.02,
            borderRadius: "12px"
          })), Ie(_, (de, ee) => jt?.(de, ee), () => ({ enabled: g(), intensity: 0.01, speed: 3e3 })), D(() => {
            U(F, 1, oe(W), "svelte-13rlfrj"), ut(F, `filter: ${A.filter ?? ""}`), le(Y, `${(d() ? t(k) : e.text) ?? ""} `);
          }), o(m, _);
        }, M = (m) => {
          var _ = Ce(), F = ge(_);
          {
            var Y = (u) => {
              var h = Xm();
              Je(h, () => ({ class: H, ...S }), void 0, void 0, "svelte-13rlfrj");
              var te = l(h), ie = l(te), ce = f(ie);
              {
                var de = (Q) => {
                  var $ = Ym();
                  o(Q, $);
                };
                x(ce, (Q) => {
                  d() && t(b) && Q(de);
                });
              }
              var ee = f(te, 2);
              {
                var V = (Q) => {
                  var $ = Wm();
                  o(Q, $);
                };
                x(ee, (Q) => {
                  v() && Q(V);
                });
              }
              var ae = f(ee, 2);
              {
                var E = (Q) => {
                  var $ = Km();
                  o(Q, $);
                };
                x(ae, (Q) => {
                  a() === "crt" && Q(E);
                });
              }
              Ie(h, (Q, $) => zt?.(Q, $), () => ({
                enabled: i(),
                duration: 300,
                scale: 1.02,
                borderRadius: "12px"
              })), Ie(h, (Q, $) => jt?.(Q, $), () => ({ enabled: g(), intensity: 0.01, speed: 3e3 })), D(() => {
                U(te, 1, oe(W), "svelte-13rlfrj"), ut(te, `filter: ${A.filter ?? ""}`), le(ie, `${(d() ? t(k) : e.text) ?? ""} `);
              }), o(u, h);
            }, T = (u) => {
              var h = Ce(), te = ge(h);
              {
                var ie = (de) => {
                  var ee = $m();
                  Je(ee, () => ({ class: H, ...S }), void 0, void 0, "svelte-13rlfrj");
                  var V = l(ee), ae = l(V), E = f(ae);
                  {
                    var Q = (ne) => {
                      var ue = Zm();
                      o(ne, ue);
                    };
                    x(E, (ne) => {
                      d() && t(b) && ne(Q);
                    });
                  }
                  var $ = f(V, 2);
                  {
                    var J = (ne) => {
                      var ue = Qm();
                      o(ne, ue);
                    };
                    x($, (ne) => {
                      v() && ne(J);
                    });
                  }
                  var se = f($, 2);
                  {
                    var X = (ne) => {
                      var ue = Jm();
                      o(ne, ue);
                    };
                    x(se, (ne) => {
                      a() === "crt" && ne(X);
                    });
                  }
                  Ie(ee, (ne, ue) => zt?.(ne, ue), () => ({
                    enabled: i(),
                    duration: 300,
                    scale: 1.02,
                    borderRadius: "12px"
                  })), Ie(ee, (ne, ue) => jt?.(ne, ue), () => ({ enabled: g(), intensity: 0.01, speed: 3e3 })), D(() => {
                    U(V, 1, oe(W), "svelte-13rlfrj"), ut(V, `filter: ${A.filter ?? ""}`), le(ae, `${(d() ? t(k) : e.text) ?? ""} `);
                  }), o(de, ee);
                }, ce = (de) => {
                  var ee = Ce(), V = ge(ee);
                  {
                    var ae = (Q) => {
                      var $ = ah();
                      Je($, () => ({ class: H, ...S }), void 0, void 0, "svelte-13rlfrj");
                      var J = l($), se = l(J), X = f(se);
                      {
                        var ne = (be) => {
                          var me = eh();
                          o(be, me);
                        };
                        x(X, (be) => {
                          d() && t(b) && be(ne);
                        });
                      }
                      var ue = f(J, 2);
                      {
                        var ve = (be) => {
                          var me = th();
                          o(be, me);
                        };
                        x(ue, (be) => {
                          v() && be(ve);
                        });
                      }
                      var pe = f(ue, 2);
                      {
                        var fe = (be) => {
                          var me = rh();
                          o(be, me);
                        };
                        x(pe, (be) => {
                          a() === "crt" && be(fe);
                        });
                      }
                      Ie($, (be, me) => zt?.(be, me), () => ({
                        enabled: i(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Ie($, (be, me) => jt?.(be, me), () => ({ enabled: g(), intensity: 0.01, speed: 3e3 })), D(() => {
                        U(J, 1, oe(W), "svelte-13rlfrj"), ut(J, `filter: ${A.filter ?? ""}`), le(se, `${(d() ? t(k) : e.text) ?? ""} `);
                      }), o(Q, $);
                    }, E = (Q) => {
                      var $ = lh();
                      Je($, () => ({ class: H, ...S }), void 0, void 0, "svelte-13rlfrj");
                      var J = l($), se = l(J), X = f(se);
                      {
                        var ne = (be) => {
                          var me = nh();
                          o(be, me);
                        };
                        x(X, (be) => {
                          d() && t(b) && be(ne);
                        });
                      }
                      var ue = f(J, 2);
                      {
                        var ve = (be) => {
                          var me = oh();
                          o(be, me);
                        };
                        x(ue, (be) => {
                          v() && be(ve);
                        });
                      }
                      var pe = f(ue, 2);
                      {
                        var fe = (be) => {
                          var me = ih();
                          o(be, me);
                        };
                        x(pe, (be) => {
                          a() === "crt" && be(fe);
                        });
                      }
                      Ie($, (be, me) => zt?.(be, me), () => ({
                        enabled: i(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Ie($, (be, me) => jt?.(be, me), () => ({ enabled: g(), intensity: 0.01, speed: 3e3 })), D(() => {
                        U(J, 1, oe(W), "svelte-13rlfrj"), ut(J, `filter: ${A.filter ?? ""}`), le(se, `${(d() ? t(k) : e.text) ?? ""} `);
                      }), o(Q, $);
                    };
                    x(
                      V,
                      (Q) => {
                        N() === "div" ? Q(ae) : Q(E, !1);
                      },
                      !0
                    );
                  }
                  o(de, ee);
                };
                x(
                  te,
                  (de) => {
                    N() === "span" ? de(ie) : de(ce, !1);
                  },
                  !0
                );
              }
              o(u, h);
            };
            x(
              F,
              (u) => {
                N() === "h3" ? u(Y) : u(T, !1);
              },
              !0
            );
          }
          o(m, _);
        };
        x(
          P,
          (m) => {
            N() === "h2" ? m(C) : m(M, !1);
          },
          !0
        );
      }
      o(O, R);
    };
    x(G, (O) => {
      N() === "h1" ? O(B) : O(I, !1);
    });
  }
  o(r, j), Ye();
}
var dh = /* @__PURE__ */ c('<span class="bitmap-char svelte-1cfjpo6"><!></span>'), ch = /* @__PURE__ */ c('<span class="cursor svelte-1cfjpo6">█</span>'), vh = /* @__PURE__ */ c(" <!>", 1), uh = /* @__PURE__ */ c("<span><!></span>");
const fh = {
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
function Ox(r, e) {
  Ue(e, !0), $e(r, fh);
  const a = s(e, "text", 3, ""), n = s(e, "variant", 3, "bitmap"), i = s(e, "size", 3, "md"), d = s(e, "color", 3, "green");
  s(e, "glow", 3, !0);
  const v = s(e, "scanlines", 3, !1), p = s(e, "flicker", 3, !1), y = s(e, "animate", 3, !1), z = s(e, "typewriter", 3, !1), g = s(e, "speed", 3, 50), L = s(e, "class", 3, "");
  let N = /* @__PURE__ */ _e(""), S = /* @__PURE__ */ _e(0), k;
  const b = {
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
  }, Z = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem"
  }, w = re("retro-text inline-block relative", { "animate-flicker": p(), scanlines: v() }, L());
  function A() {
    if (!z() || !a()) return;
    K(N, ""), K(S, 0);
    const I = setInterval(
      () => {
        t(S) < a().length ? (K(N, t(N) + a()[t(S)]), Fa(S)) : clearInterval(I);
      },
      g()
    );
  }
  bt(() => {
    z() ? A() : K(N, a());
  }), bt(() => {
    if (k) {
      const I = b[n()], O = q[d()];
      k.style.setProperty("--retro-font-family", I.fontFamily), k.style.setProperty("--retro-font-weight", I.fontWeight), k.style.setProperty("--retro-letter-spacing", I.letterSpacing), k.style.setProperty("--retro-line-height", I.lineHeight), k.style.setProperty("--retro-font-size", Z[i()]), k.style.setProperty("--retro-color", O.color), k.style.setProperty("--retro-shadow-color", O.shadowColor), k.style.setProperty("--retro-text-transform", I.textTransform || "none");
    }
  });
  function W(I) {
    return (n() === "commodore" || n() === "atari") && {
      " ": "&nbsp;",
      A: "█▀█<br>█▀█<br>█&nbsp;█",
      E: "███<br>██&nbsp;<br>███",
      I: "███<br>&nbsp;█&nbsp;<br>███",
      O: "███<br>█&nbsp;█<br>███",
      U: "█&nbsp;█<br>█&nbsp;█<br>███"
    }[I.toUpperCase()] || I;
  }
  ht(() => {
    y() && k && (k.style.opacity = "0", setTimeout(
      () => {
        k.style.transition = "opacity 0.5s ease-in-out", k.style.opacity = "1";
      },
      100
    ));
  });
  var H = uh(), j = l(H);
  {
    var G = (I) => {
      var O = Ce(), R = ge(O);
      lt(R, () => e.children), o(I, O);
    }, B = (I) => {
      var O = Ce(), R = ge(O);
      {
        var P = (M) => {
          var m = Ce(), _ = ge(m);
          Xe(_, 17, () => t(N).split(""), Fr, (F, Y) => {
            var T = dh(), u = l(T);
            Va(u, () => Ka(W(t(Y)))), D(() => ye(T, "data-char", t(Y))), o(F, T);
          }), o(M, m);
        }, C = (M) => {
          var m = vh(), _ = ge(m), F = f(_);
          {
            var Y = (T) => {
              var u = ch();
              o(T, u);
            };
            x(F, (T) => {
              z() && t(S) < a().length && T(Y);
            });
          }
          D(() => le(_, `${t(N) ?? ""} `)), o(M, m);
        };
        x(
          R,
          (M) => {
            n() === "commodore" || n() === "atari" ? M(P) : M(C, !1);
          },
          !0
        );
      }
      o(I, O);
    };
    x(j, (I) => {
      e.children ? I(G) : I(B, !1);
    });
  }
  rt(H, (I) => k = I, () => k), D(() => {
    U(H, 1, oe(w), "svelte-1cfjpo6"), ye(H, "aria-label", a());
  }), o(r, H), Ye();
}
var bh = /* @__PURE__ */ c("<div> </div>"), gh = /* @__PURE__ */ c('<div class="flex items-center svelte-nrft94"><span class="animate-pulse svelte-nrft94">_</span></div>'), mh = /* @__PURE__ */ c('<div class="mt-4 space-y-1 svelte-nrft94"><div>System initialization complete.</div> <div class="flex items-center svelte-nrft94"><span>user@hackers-brand:~$</span> <span class="animate-pulse ml-1 svelte-nrft94">_</span></div></div>'), hh = /* @__PURE__ */ c('<div class="absolute bottom-6 left-6 right-6 svelte-nrft94"><div class="flex items-center space-x-2 text-xs svelte-nrft94"><span>Loading:</span> <div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden svelte-nrft94"><div></div></div> <span> </span></div></div>'), ph = /* @__PURE__ */ c('<div><div class="absolute inset-0 opacity-10 pointer-events-none svelte-nrft94"><div class="w-full h-full svelte-nrft94" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"></div></div> <div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none svelte-nrft94"></div> <div class="relative z-10 space-y-1 svelte-nrft94"><!> <!> <!></div> <!> <div class="absolute inset-0 pointer-events-none svelte-nrft94"><div class="w-full h-full opacity-[0.02] blur-2xl svelte-nrft94" style="background-color: currentColor;"></div></div></div>');
const xh = {
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
function Fx(r, e) {
  Ue(e, !0), $e(r, xh);
  const a = s(e, "autoStart", 3, !0), n = s(e, "variant", 3, "retro"), i = s(e, "showBIOS", 3, !0), d = s(e, "fastBoot", 3, !1), v = s(e, "class", 3, ""), p = /* @__PURE__ */ ct(e, [
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
  let y = /* @__PURE__ */ _e(0), z = /* @__PURE__ */ _e(!1), g = /* @__PURE__ */ _e(!1), L = /* @__PURE__ */ _e(0);
  const S = {
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
  ], b = [
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
  ], q = i() ? [...k, "", ...b] : b, Z = d() ? 50 : 150, w = async () => {
    if (!t(z)) {
      K(z, !0), K(g, !1), K(y, 0), K(L, 0);
      for (let C = 0; C < q.length; C++) {
        K(y, C, !0), K(L, C / q.length * 100);
        let M = Z;
        q[C].includes("PASS") || q[C].includes("OK") ? M = d() ? 30 : 100 : q[C].includes("[") && (M = d() ? 20 : 80), await new Promise((m) => setTimeout(m, M));
      }
      K(g, !0), K(z, !1), K(L, 100), e.onComplete?.();
    }
  };
  ht(() => {
    a() && setTimeout(w, 300);
  });
  const A = (C) => C.includes("PASS") || C.includes("OK") || C.includes("ready") ? S.success : C.includes("FAIL") || C.includes("ERROR") ? S.error : C.includes("Copyright") || C.includes("BIOS") || C.includes("GRUB") ? S.accent : S.text;
  var W = ph();
  Je(
    W,
    (C) => ({ class: C, ...p }),
    [
      () => re("relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden", S.bg, S.text, v())
    ],
    void 0,
    "svelte-nrft94"
  );
  var H = f(l(W), 4), j = l(H);
  Xe(j, 17, () => q.slice(0, t(y) + 1), Fr, (C, M, m) => {
    var _ = bh(), F = l(_);
    D(
      (Y) => {
        U(_, 1, Y, "svelte-nrft94"), le(F, t(M) || " ");
      },
      [
        () => oe(re("whitespace-pre-wrap transition-all duration-200", A(t(M)), m === t(y) && t(z) ? "animate-pulse" : ""))
      ]
    ), o(C, _);
  });
  var G = f(j, 2);
  {
    var B = (C) => {
      var M = gh();
      o(C, M);
    };
    x(G, (C) => {
      t(z) && C(B);
    });
  }
  var I = f(G, 2);
  {
    var O = (C) => {
      var M = mh(), m = l(M), _ = f(m, 2), F = l(_);
      D(() => {
        U(m, 1, oe(S.success), "svelte-nrft94"), U(F, 1, oe(S.accent), "svelte-nrft94");
      }), o(C, M);
    };
    x(I, (C) => {
      t(g) && C(O);
    });
  }
  var R = f(H, 2);
  {
    var P = (C) => {
      var M = hh(), m = l(M), _ = l(m), F = f(_, 2), Y = l(F), T = f(F, 2), u = l(T);
      D(
        (h, te) => {
          U(_, 1, oe(S.accent), "svelte-nrft94"), U(Y, 1, h, "svelte-nrft94"), ut(Y, `width: ${t(L) ?? ""}%; background-color: currentColor;`), U(T, 1, oe(S.text), "svelte-nrft94"), le(u, `${te ?? ""}%`);
        },
        [
          () => oe(re("h-full transition-all duration-300 rounded-full", S.success)),
          () => Math.round(t(L))
        ]
      ), o(C, M);
    };
    x(R, (C) => {
      t(z) && !d() && C(P);
    });
  }
  o(r, W), Ye();
}
var _h = /* @__PURE__ */ c("<div><!></div>"), wh = /* @__PURE__ */ c("<div><!></div>"), yh = /* @__PURE__ */ c('<div aria-hidden="true"><span class="sr-only">Loading client-side content...</span></div>');
function Bx(r, e) {
  Ue(e, !0);
  let a = s(e, "fallback", 3, null), n = s(e, "className", 3, ""), i = s(e, "style", 3, ""), d = /* @__PURE__ */ _e(!1);
  ht(() => (K(d, !0), () => {
    K(d, !1);
  }));
  var v = Ce(), p = ge(v);
  {
    var y = (g) => {
      var L = _h(), N = l(L);
      lt(N, () => e.children ?? Pt), D(() => {
        U(L, 1, oe(n())), ut(L, i());
      }), o(g, L);
    }, z = (g) => {
      var L = Ce(), N = ge(L);
      {
        var S = (b) => {
          var q = wh(), Z = l(q);
          lt(Z, a), D(() => {
            U(q, 1, oe(n())), ut(q, i());
          }), o(b, q);
        }, k = (b) => {
          var q = yh();
          D(() => {
            U(q, 1, `h-48 w-full rounded bg-white/5 animate-pulse ${n() ?? ""}`), ut(q, i());
          }), o(b, q);
        };
        x(
          N,
          (b) => {
            a() ? b(S) : b(k, !1);
          },
          !0
        );
      }
      o(g, L);
    };
    x(p, (g) => {
      t(d) ? g(y) : g(z, !1);
    });
  }
  o(r, v), Ye();
}
var kh = /* @__PURE__ */ c("<!> <!>", 1);
function vo(r, e) {
  Ue(e, !0);
  const a = s(e, "intensity", 3, 1), n = s(e, "frequency", 3, 0.5), i = s(e, "amplitude", 3, 0.1), d = s(e, "speed", 3, 1), v = s(e, "color", 3, "var(--color-terminal-cyan)"), p = s(e, "opacity", 3, 0.8), y = s(e, "distortion", 3, 0.1), z = s(e, "refraction", 3, 1.45), g = s(e, "class", 3, ""), L = At();
  let N = /* @__PURE__ */ _e(void 0), S = /* @__PURE__ */ _e(void 0), k = /* @__PURE__ */ _e(0);
  const b = `
		uniform float uTime;
		uniform float uFrequency;
		uniform float uAmplitude;
		uniform float uSpeed;
		uniform float uDistortion;
		
		varying vec2 vUv;
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec3 vWorldPosition;
		
		// Noise functions
		vec3 mod289(vec3 x) {
			return x - floor(x * (1.0 / 289.0)) * 289.0;
		}
		
		vec4 mod289(vec4 x) {
			return x - floor(x * (1.0 / 289.0)) * 289.0;
		}
		
		vec4 permute(vec4 x) {
			return mod289(((x*34.0)+1.0)*x);
		}
		
		vec4 taylorInvSqrt(vec4 r) {
			return 1.79284291400159 - 0.85373472095314 * r;
		}
		
		float snoise(vec3 v) {
			const vec2 C = vec2(1.0/6.0, 1.0/3.0);
			const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
			
			vec3 i = floor(v + dot(v, C.yyy));
			vec3 x0 = v - i + dot(i, C.xxx);
			
			vec3 g = step(x0.yzx, x0.xyz);
			vec3 l = 1.0 - g;
			vec3 i1 = min(g.xyz, l.zxy);
			vec3 i2 = max(g.xyz, l.zxy);
			
			vec3 x1 = x0 - i1 + C.xxx;
			vec3 x2 = x0 - i2 + C.yyy;
			vec3 x3 = x0 - D.yyy;
			
			i = mod289(i);
			vec4 p = permute(permute(permute(
				i.z + vec4(0.0, i1.z, i2.z, 1.0))
				+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
				+ i.x + vec4(0.0, i1.x, i2.x, 1.0));
			
			float n_ = 0.142857142857;
			vec3 ns = n_ * D.wyz - D.xzx;
			
			vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
			
			vec4 x_ = floor(j * ns.z);
			vec4 y_ = floor(j - 7.0 * x_);
			
			vec4 x = x_ *ns.x + ns.yyyy;
			vec4 y = y_ *ns.x + ns.yyyy;
			vec4 h = 1.0 - abs(x) - abs(y);
			
			vec4 b0 = vec4(x.xy, y.xy);
			vec4 b1 = vec4(x.zw, y.zw);
			
			vec4 s0 = floor(b0)*2.0 + 1.0;
			vec4 s1 = floor(b1)*2.0 + 1.0;
			vec4 sh = -step(h, vec4(0.0));
			
			vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
			vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
			
			vec3 p0 = vec3(a0.xy, h.x);
			vec3 p1 = vec3(a0.zw, h.y);
			vec3 p2 = vec3(a1.xy, h.z);
			vec3 p3 = vec3(a1.zw, h.w);
			
			vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
			p0 *= norm.x;
			p1 *= norm.y;
			p2 *= norm.z;
			p3 *= norm.w;
			
			vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
			m = m * m;
			return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
		}
		
		void main() {
			vUv = uv;
			vPosition = position;
			vNormal = normal;
			
			// Create liquid distortion
			float t = uTime * uSpeed;
			vec3 pos = position;
			
			// Multiple octaves of noise for complex liquid motion
			float noise1 = snoise(pos * uFrequency + vec3(t, 0.0, 0.0));
			float noise2 = snoise(pos * uFrequency * 2.0 + vec3(0.0, t * 1.3, 0.0));
			float noise3 = snoise(pos * uFrequency * 4.0 + vec3(0.0, 0.0, t * 0.7));
			
			// Combine noises for liquid flow
			vec3 displacement = vec3(
				noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2,
				noise2 * 0.4 + noise3 * 0.3 + noise1 * 0.3,
				noise3 * 0.6 + noise1 * 0.2 + noise2 * 0.2
			);
			
			pos += displacement * uAmplitude * uDistortion;
			
			// Calculate world position for fragment shader
			vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
			vWorldPosition = worldPosition.xyz;
			
			gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
		}
	`, q = `
		uniform float uTime;
		uniform float uIntensity;
		uniform vec3 uColor;
		uniform float uOpacity;
		uniform float uRefraction;
		uniform float uSpeed;
		uniform sampler2D uTexture;
		
		varying vec2 vUv;
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec3 vWorldPosition;
		
		// Fresnel calculation
		float fresnel(vec3 eyeVector, vec3 worldNormal, float power) {
			return pow(1.0 - max(dot(eyeVector, worldNormal), 0.0), power);
		}
		
		// Hash function for random values
		float hash(vec2 p) {
			return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
		}
		
		// Smooth noise
		float noise(vec2 p) {
			vec2 i = floor(p);
			vec2 f = fract(p);
			
			float a = hash(i);
			float b = hash(i + vec2(1.0, 0.0));
			float c = hash(i + vec2(0.0, 1.0));
			float d = hash(i + vec2(1.0, 1.0));
			
			vec2 u = f * f * (3.0 - 2.0 * f);
			
			return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
		}
		
		void main() {
			// Calculate view direction
			vec3 viewVector = normalize(cameraPosition - vWorldPosition);
			
			// Enhanced normal calculation with liquid distortion
			float t = uTime * uSpeed;
			vec3 normal = normalize(vNormal);
			
			// Add liquid-like normal perturbation
			float nx = noise(vUv * 10.0 + vec2(t * 0.1, 0.0)) * 0.1;
			float ny = noise(vUv * 10.0 + vec2(0.0, t * 0.15)) * 0.1;
			normal.xy += vec2(nx, ny);
			normal = normalize(normal);
			
			// Fresnel effect for glass-like appearance
			float fresnelValue = fresnel(viewVector, normal, 2.0);
			
			// Refraction distortion
			vec2 refractedUv = vUv + normal.xy * uRefraction * 0.1;
			
			// Color mixing with liquid flow
			vec3 liquidColor = uColor;
			
			// Add iridescence effect
			float iridescence = sin(dot(normal, viewVector) * 10.0 + t) * 0.5 + 0.5;
			liquidColor += vec3(iridescence * 0.3, iridescence * 0.2, iridescence * 0.4);
			
			// Caustic-like effect
			float caustic = noise(refractedUv * 20.0 + vec2(t * 0.3, t * 0.2));
			caustic = pow(caustic, 3.0) * 2.0;
			liquidColor += vec3(0.1, 0.3, 0.5) * caustic;
			
			// Depth-based opacity
			float depth = 1.0 - dot(viewVector, normal);
			float alpha = mix(uOpacity * 0.3, uOpacity, depth);
			
			// Final color composition
			vec3 finalColor = mix(liquidColor, liquidColor * 1.5, fresnelValue);
			finalColor *= uIntensity;
			
			gl_FragColor = vec4(finalColor, alpha);
		}
	`, Z = () => new Et.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uFrequency: { value: n() },
      uAmplitude: { value: i() },
      uSpeed: { value: d() },
      uIntensity: { value: a() },
      uColor: { value: new Et.Color(v()) },
      uOpacity: { value: p() },
      uDistortion: { value: y() },
      uRefraction: { value: z() }
    },
    vertexShader: b,
    fragmentShader: q,
    transparent: !0,
    side: Et.DoubleSide,
    blending: Et.AdditiveBlending
  });
  let w;
  const A = () => {
    const j = () => {
      K(
        k,
        // ~60fps
        t(k) + 0.016
      ), t(S) && (t(S).uniforms.uTime.value = t(k)), w = requestAnimationFrame(j);
    };
    j();
  };
  bt(() => {
    t(S) && (t(S).uniforms.uFrequency.value = n(), t(S).uniforms.uAmplitude.value = i(), t(S).uniforms.uSpeed.value = d(), t(S).uniforms.uIntensity.value = a(), t(S).uniforms.uColor.value.set(v()), t(S).uniforms.uOpacity.value = p(), t(S).uniforms.uDistortion.value = y(), t(S).uniforms.uRefraction.value = z());
  }), ht(() => (K(S, Z(), !0), A(), L("ready", { material: t(S) }), () => {
    w && cancelAnimationFrame(w);
  }));
  var W = Ce(), H = ge(W);
  He(H, () => Ke.Mesh, (j, G) => {
    G(j, {
      get class() {
        return g();
      },
      get ref() {
        return t(N);
      },
      set ref(B) {
        K(N, B, !0);
      },
      children: (B, I) => {
        var O = kh(), R = ge(O);
        He(R, () => Ke.IcosahedronGeometry, (C, M) => {
          M(C, { args: [1, 4] });
        });
        var P = f(R, 2);
        {
          let C = /* @__PURE__ */ we(() => ({
            uTime: { value: 0 },
            uFrequency: { value: n() },
            uAmplitude: { value: i() },
            uSpeed: { value: d() },
            uIntensity: { value: a() },
            uColor: { value: new Et.Color(v()) },
            uOpacity: { value: p() },
            uDistortion: { value: y() },
            uRefraction: { value: z() }
          }));
          He(P, () => Ke.ShaderMaterial, (M, m) => {
            m(M, {
              get uniforms() {
                return t(C);
              },
              vertexShader: b,
              fragmentShader: q,
              transparent: !0,
              get side() {
                return Et.DoubleSide;
              },
              get blending() {
                return Et.AdditiveBlending;
              },
              get ref() {
                return t(S);
              },
              set ref(_) {
                K(S, _, !0);
              }
            });
          });
        }
        o(B, O);
      },
      $$slots: { default: !0 }
    });
  }), o(r, W), Ye();
}
var Ch = /* @__PURE__ */ c("<!> <!>", 1);
function uo(r, e) {
  Ue(e, !0);
  const a = s(e, "particleCount", 3, 1e3), n = s(e, "size", 3, 0.02), i = s(e, "speed", 3, 1), d = s(e, "color", 3, "var(--color-terminal-green)"), v = s(e, "opacity", 3, 0.8), p = s(e, "flowPattern", 3, "turbulent"), y = s(e, "interactive", 3, !0), z = s(e, "class", 3, ""), g = At();
  let L = /* @__PURE__ */ _e(void 0), N = /* @__PURE__ */ _e(void 0), S = /* @__PURE__ */ _e(void 0), k = /* @__PURE__ */ _e(0);
  const b = `
		uniform float uTime;
		uniform float uSize;
		uniform float uSpeed;
		uniform vec2 uMouse;
		uniform float uInteractive;
		uniform float uFlowPattern;
		
		attribute float aScale;
		attribute float aPhase;
		attribute vec3 aVelocity;
		attribute float aLife;
		
		varying float vAlpha;
		varying vec2 vUv;
		
		// Noise function
		vec3 mod289(vec3 x) {
			return x - floor(x * (1.0 / 289.0)) * 289.0;
		}
		
		vec4 mod289(vec4 x) {
			return x - floor(x * (1.0 / 289.0)) * 289.0;
		}
		
		vec4 permute(vec4 x) {
			return mod289(((x*34.0)+1.0)*x);
		}
		
		vec4 taylorInvSqrt(vec4 r) {
			return 1.79284291400159 - 0.85373472095314 * r;
		}
		
		float snoise(vec3 v) {
			const vec2 C = vec2(1.0/6.0, 1.0/3.0);
			const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
			
			vec3 i = floor(v + dot(v, C.yyy));
			vec3 x0 = v - i + dot(i, C.xxx);
			
			vec3 g = step(x0.yzx, x0.xyz);
			vec3 l = 1.0 - g;
			vec3 i1 = min(g.xyz, l.zxy);
			vec3 i2 = max(g.xyz, l.zxy);
			
			vec3 x1 = x0 - i1 + C.xxx;
			vec3 x2 = x0 - i2 + C.yyy;
			vec3 x3 = x0 - D.yyy;
			
			i = mod289(i);
			vec4 p = permute(permute(permute(
				i.z + vec4(0.0, i1.z, i2.z, 1.0))
				+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
				+ i.x + vec4(0.0, i1.x, i2.x, 1.0));
			
			float n_ = 0.142857142857;
			vec3 ns = n_ * D.wyz - D.xzx;
			
			vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
			
			vec4 x_ = floor(j * ns.z);
			vec4 y_ = floor(j - 7.0 * x_);
			
			vec4 x = x_ *ns.x + ns.yyyy;
			vec4 y = y_ *ns.x + ns.yyyy;
			vec4 h = 1.0 - abs(x) - abs(y);
			
			vec4 b0 = vec4(x.xy, y.xy);
			vec4 b1 = vec4(x.zw, y.zw);
			
			vec4 s0 = floor(b0)*2.0 + 1.0;
			vec4 s1 = floor(b1)*2.0 + 1.0;
			vec4 sh = -step(h, vec4(0.0));
			
			vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
			vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
			
			vec3 p0 = vec3(a0.xy, h.x);
			vec3 p1 = vec3(a0.zw, h.y);
			vec3 p2 = vec3(a1.xy, h.z);
			vec3 p3 = vec3(a1.zw, h.w);
			
			vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
			p0 *= norm.x;
			p1 *= norm.y;
			p2 *= norm.z;
			p3 *= norm.w;
			
			vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
			m = m * m;
			return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
		}
		
		void main() {
			float t = uTime * uSpeed;
			vec3 pos = position;
			
			// Flow patterns
			if (uFlowPattern < 0.5) { // Orbital
				float radius = length(pos.xz);
				float angle = atan(pos.z, pos.x) + t * 0.5;
				pos.x = cos(angle) * radius;
				pos.z = sin(angle) * radius;
				pos.y += sin(t + aPhase) * 0.2;
			}
			else if (uFlowPattern < 1.5) { // Turbulent
				vec3 noise = vec3(
					snoise(pos * 2.0 + vec3(t, 0.0, 0.0)),
					snoise(pos * 2.0 + vec3(0.0, t, 0.0)),
					snoise(pos * 2.0 + vec3(0.0, 0.0, t))
				);
				pos += noise * 0.3;
			}
			else if (uFlowPattern < 2.5) { // Wave
				pos.y += sin(pos.x * 4.0 + t) * sin(pos.z * 4.0 + t) * 0.1;
				pos.x += cos(t + aPhase) * 0.1;
				pos.z += sin(t + aPhase * 1.3) * 0.1;
			}
			else { // Spiral
				float spiralT = t + aPhase;
				pos.x += cos(spiralT) * 0.1;
				pos.z += sin(spiralT) * 0.1;
				pos.y += spiralT * 0.05;
			}
			
			// Interactive mouse influence
			if (uInteractive > 0.5) {
				vec2 mouseForce = uMouse - pos.xy;
				float mouseDistance = length(mouseForce);
				if (mouseDistance < 2.0) {
					vec2 force = normalize(mouseForce) * (2.0 - mouseDistance) * 0.1;
					pos.xy += force;
				}
			}
			
			// Life cycle
			vAlpha = aLife;
			
			vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
			gl_Position = projectionMatrix * mvPosition;
			gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
		}
	`, q = `
		uniform vec3 uColor;
		uniform float uOpacity;
		uniform float uTime;
		
		varying float vAlpha;
		
		void main() {
			// Circular particle shape
			vec2 center = gl_PointCoord - vec2(0.5);
			float dist = length(center);
			
			if (dist > 0.5) discard;
			
			// Soft edges
			float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
			alpha *= vAlpha * uOpacity;
			
			// Pulsing effect
			alpha *= 0.8 + 0.2 * sin(uTime * 3.0);
			
			// Color variation
			vec3 color = uColor;
			color += vec3(0.1, 0.2, 0.3) * sin(uTime + gl_PointCoord.x * 10.0);
			
			gl_FragColor = vec4(color, alpha);
		}
	`, Z = () => {
    const I = new Et.BufferGeometry(), O = new Float32Array(a() * 3), R = new Float32Array(a()), P = new Float32Array(a()), C = new Float32Array(a() * 3), M = new Float32Array(a());
    for (let m = 0; m < a(); m++) {
      const _ = Math.random() * 2, F = Math.random() * Math.PI * 2, Y = Math.acos(Math.random() * 2 - 1);
      O[m * 3] = _ * Math.sin(Y) * Math.cos(F), O[m * 3 + 1] = _ * Math.sin(Y) * Math.sin(F), O[m * 3 + 2] = _ * Math.cos(Y), R()[m] = Math.random() * 0.5 + 0.5, P()[m] = Math.random() * Math.PI * 2, C[m * 3] = (Math.random() - 0.5) * 0.02, C[m * 3 + 1] = (Math.random() - 0.5) * 0.02, C[m * 3 + 2] = (Math.random() - 0.5) * 0.02, M()[m] = Math.random();
    }
    return I.setAttribute("position", new Et.BufferAttribute(O, 3)), I.setAttribute("aScale", new Et.BufferAttribute(R, 1)), I.setAttribute("aPhase", new Et.BufferAttribute(P, 1)), I.setAttribute("aVelocity", new Et.BufferAttribute(C, 3)), I.setAttribute("aLife", new Et.BufferAttribute(M, 1)), I;
  }, w = () => new Et.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: n() * 100 },
      uSpeed: { value: i() },
      uColor: { value: new Et.Color(d()) },
      uOpacity: { value: v() },
      uMouse: { value: new Et.Vector2() },
      uInteractive: { value: y() ? 1 : 0 },
      uFlowPattern: { value: A() }
    },
    vertexShader: b,
    fragmentShader: q,
    transparent: !0,
    blending: Et.AdditiveBlending,
    depthWrite: !1
  }), A = () => {
    switch (p()) {
      case "orbital":
        return 0;
      case "turbulent":
        return 1;
      case "wave":
        return 2;
      case "spiral":
        return 3;
      default:
        return 1;
    }
  }, W = (I) => {
    if (!y() || !t(N)) return;
    const R = I.target.getBoundingClientRect(), P = (I.clientX - R.left) / R.width * 2 - 1, C = -((I.clientY - R.top) / R.height) * 2 + 1;
    t(N).uniforms.uMouse.value.set(P, C);
  };
  let H;
  const j = () => {
    const I = () => {
      if (K(k, t(k) + 0.016), t(N) && (t(N).uniforms.uTime.value = t(k)), t(S)) {
        const R = t(S).attributes.aLife.array;
        for (let P = 0; P < R().length; P++)
          R()[P] -= 16e-4, R()[P] <= 0 && (R()[P] = 1);
        t(S).attributes.aLife.needsUpdate = !0;
      }
      H = requestAnimationFrame(I);
    };
    I();
  };
  bt(() => {
    t(N) && (t(N).uniforms.uSize.value = n() * 100, t(N).uniforms.uSpeed.value = i(), t(N).uniforms.uColor.value.set(d()), t(N).uniforms.uOpacity.value = v(), t(N).uniforms.uInteractive.value = y() ? 1 : 0, t(N).uniforms.uFlowPattern.value = A());
  }), ht(() => {
    if (K(S, Z(), !0), K(N, w(), !0), j(), y() && typeof window < "u") {
      const I = document.querySelector("canvas");
      I && I.addEventListener("mousemove", W);
    }
    return g("ready", { geometry: t(S), material: t(N) }), () => {
      if (y() && typeof window < "u") {
        const I = document.querySelector("canvas");
        I && I.removeEventListener("mousemove", W);
      }
      H && cancelAnimationFrame(H);
    };
  });
  var G = Ce(), B = ge(G);
  He(B, () => Ke.Points, (I, O) => {
    O(I, {
      get class() {
        return z();
      },
      get ref() {
        return t(L);
      },
      set ref(R) {
        K(L, R, !0);
      },
      children: (R, P) => {
        var C = Ch(), M = ge(C);
        He(M, () => Ke.BufferGeometry, (_, F) => {
          F(_, {
            get ref() {
              return t(S);
            },
            set ref(Y) {
              K(S, Y, !0);
            }
          });
        });
        var m = f(M, 2);
        {
          let _ = /* @__PURE__ */ we(() => ({
            uTime: { value: 0 },
            uSize: { value: n() * 100 },
            uSpeed: { value: i() },
            uColor: { value: new Et.Color(d()) },
            uOpacity: { value: v() },
            uMouse: { value: new Et.Vector2() },
            uInteractive: { value: y() ? 1 : 0 },
            uFlowPattern: { value: A() }
          }));
          He(m, () => Ke.ShaderMaterial, (F, Y) => {
            Y(F, {
              get uniforms() {
                return t(_);
              },
              vertexShader: b,
              fragmentShader: q,
              transparent: !0,
              get blending() {
                return Et.AdditiveBlending;
              },
              depthWrite: !1,
              get ref() {
                return t(N);
              },
              set ref(T) {
                K(N, T, !0);
              }
            });
          });
        }
        o(R, C);
      },
      $$slots: { default: !0 }
    });
  }), o(r, G), Ye();
}
var Sh = /* @__PURE__ */ c("<!> <!>", 1), Th = /* @__PURE__ */ c("<!> <!> <!>", 1), Eh = /* @__PURE__ */ c("<!> <!>", 1), Mh = /* @__PURE__ */ c("<!> <!>", 1), Ah = /* @__PURE__ */ c("<!> <!> <!>", 1), zh = /* @__PURE__ */ c("<!> <!> <!>", 1), Ih = /* @__PURE__ */ c("<!> <!> <!>", 1), Ph = /* @__PURE__ */ c("<!> <!>", 1), Lh = /* @__PURE__ */ c("<!> <!>", 1), Dh = /* @__PURE__ */ c("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>", 1);
function Rh(r, e) {
  Ue(e, !0);
  const a = s(e, "quality", 3, "medium"), n = s(e, "enableLiquidEffects", 3, !0), i = s(e, "enableParticles", 3, !0), d = s(e, "theme", 3, "terminal"), v = {
    low: {
      samples: 8,
      transmission: 0.8,
      roughness: 0.2,
      thickness: 1,
      particleCount: 300
    },
    medium: {
      samples: 16,
      transmission: 1,
      roughness: 0.1,
      thickness: 1.5,
      particleCount: 600
    },
    high: {
      samples: 32,
      transmission: 1,
      roughness: 0.05,
      thickness: 2,
      particleCount: 1e3
    },
    ultra: {
      samples: 64,
      transmission: 1,
      roughness: 0.02,
      thickness: 3,
      particleCount: 1500
    }
  }, p = {
    terminal: {
      primaryColor: "var(--color-terminal-green)",
      secondaryColor: "var(--color-terminal-cyan)",
      backgroundColor: "color-mix(in srgb, var(--color-terminal-green) 10%, #000)",
      emissive: "#001a0f"
    },
    cyberpunk: {
      primaryColor: "var(--color-terminal-pink)",
      secondaryColor: "var(--color-terminal-cyan)",
      backgroundColor: "color-mix(in srgb, var(--color-terminal-blue) 10%, #000015)",
      emissive: "#1a001a"
    },
    neural: {
      primaryColor: "var(--color-bubble-tea-green)",
      secondaryColor: "var(--color-terminal-green)",
      backgroundColor: "color-mix(in srgb, var(--color-bubble-tea-green) 10%, #000)",
      emissive: "#0f1a0f"
    },
    quantum: {
      primaryColor: "var(--color-bubble-tea-purple)",
      secondaryColor: "var(--color-bubble-tea-orange)",
      backgroundColor: "color-mix(in srgb, var(--color-bubble-tea-purple) 15%, #110011)",
      emissive: "#1a001a"
    }
  }, y = v[a()], z = p[d()], g = {
    roughness: y.roughness,
    metalness: 0,
    transmission: y.transmission,
    thickness: y.thickness,
    ior: 1.52,
    // Real glass IOR
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.5,
    transparent: !0,
    opacity: 0.9
  };
  let L = /* @__PURE__ */ _e(0), N = /* @__PURE__ */ _e(void 0);
  const S = st([]);
  let k;
  const b = () => {
    const m = () => {
      K(L, t(L) + 0.016), S.forEach((F, Y) => {
        F && (F.rotation.x += 48e-4, F.rotation.y += 8e-3, F.position.y = Math.sin(t(L) + Y) * 0.5);
      }), t(N) && (t(N).rotation.y += 16e-4), k = requestAnimationFrame(m);
    };
    m();
  };
  ht(() => {
    if (b(), typeof window < "u") {
      const m = document.querySelector("canvas");
      m && (m.style.willChange = "transform");
    }
    return () => {
      k && cancelAnimationFrame(k);
    };
  });
  var q = Dh(), Z = ge(q);
  He(Z, () => Ke.PerspectiveCamera, (m, _) => {
    _(m, {
      makeDefault: !0,
      position: [10, 10, 15],
      fov: 30,
      children: (F, Y) => {
        wn(F, {
          enableZoom: !0,
          enablePan: !0,
          enableRotate: !0,
          autoRotate: !0,
          autoRotateSpeed: 0.5
        });
      },
      $$slots: { default: !0 }
    });
  });
  var w = f(Z, 2);
  He(w, () => Ke.AmbientLight, (m, _) => {
    _(m, { intensity: 0.8 });
  });
  var A = f(w, 2);
  He(A, () => Ke.DirectionalLight, (m, _) => {
    _(m, { position: [5, 10, 8], intensity: 1.5, castShadow: !0 });
  });
  var W = f(A, 2);
  Oi(W, { path: "/", files: "city.hdr", background: !1 });
  var H = f(W, 2);
  He(H, () => Ke.PointLight, (m, _) => {
    _(m, {
      position: [10, 10, 10],
      intensity: 2,
      get color() {
        return z.primaryColor;
      },
      castShadow: !0
    });
  });
  var j = f(H, 2);
  He(j, () => Ke.PointLight, (m, _) => {
    _(m, {
      position: [-10, -10, 10],
      intensity: 1.5,
      get color() {
        return z.secondaryColor;
      }
    });
  });
  var G = f(j, 2);
  He(G, () => Ke.SpotLight, (m, _) => {
    _(m, {
      position: [0, 15, 0],
      intensity: 3,
      angle: Math.PI / 6,
      penumbra: 0.5,
      castShadow: !0,
      color: "#ffffff"
    });
  });
  var B = f(G, 2);
  He(B, () => Ke.Group, (m, _) => {
    _(m, {
      get ref() {
        return t(N);
      },
      set ref(F) {
        K(N, F, !0);
      },
      children: (F, Y) => {
        var T = Ce(), u = ge(T);
        {
          var h = (ie) => {
            var ce = Sh(), de = ge(ce);
            vo(de, {
              intensity: 1.5,
              get color() {
                return z.primaryColor;
              },
              distortion: 0.15,
              frequency: 0.8,
              amplitude: 0.2,
              speed: 1
            });
            var ee = f(de, 2);
            Xe(ee, 16, () => Array(4), Fr, (V, ae, E) => {
              var Q = Ce(), $ = ge(Q);
              {
                let J = /* @__PURE__ */ we(() => [
                  Math.cos(E * Math.PI / 2) * 5,
                  Math.sin(E * Math.PI / 4) * 2,
                  Math.sin(E * Math.PI / 2) * 5
                ]);
                He($, () => Ke.Group, (se, X) => {
                  X(se, {
                    get position() {
                      return t(J);
                    },
                    children: (ne, ue) => {
                      {
                        let ve = /* @__PURE__ */ we(() => E % 2 === 0 ? z.primaryColor : z.secondaryColor);
                        vo(ne, {
                          intensity: 1,
                          get color() {
                            return t(ve);
                          },
                          distortion: 0.1,
                          frequency: 1.2 + E * 0.1,
                          amplitude: 0.12,
                          speed: 0.8 + E * 0.1
                        });
                      }
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              o(V, Q);
            }), o(ie, ce);
          }, te = (ie) => {
            var ce = Mh(), de = ge(ce);
            He(de, () => Ke.Mesh, (V, ae) => {
              ae(V, {
                position: [0, 0, 0],
                castShadow: !0,
                receiveShadow: !0,
                children: (E, Q) => {
                  var $ = Th(), J = ge($);
                  He(J, () => Ke.BoxGeometry, (ne, ue) => {
                    ue(ne, { args: [6, 6, 6] });
                  });
                  var se = f(J, 2);
                  He(se, () => Ke.MeshPhysicalMaterial, (ne, ue) => {
                    ue(ne, ra(() => g, {
                      get color() {
                        return z.primaryColor;
                      },
                      get emissive() {
                        return z.emissive;
                      },
                      emissiveIntensity: 0.1
                    }));
                  });
                  var X = f(se, 2);
                  ma(X, {
                    get color() {
                      return z.primaryColor;
                    },
                    linewidth: 2,
                    threshold: 15
                  }), o(E, $);
                },
                $$slots: { default: !0 }
              });
            });
            var ee = f(de, 2);
            He(ee, () => Ke.Mesh, (V, ae) => {
              ae(V, {
                position: [0, 0, 0],
                children: (E, Q) => {
                  var $ = Eh(), J = ge($);
                  He(J, () => Ke.SphereGeometry, (X, ne) => {
                    ne(X, { args: [2, 32, 32] });
                  });
                  var se = f(J, 2);
                  He(se, () => Ke.MeshPhysicalMaterial, (X, ne) => {
                    ne(X, ra(() => g, {
                      get color() {
                        return z.secondaryColor;
                      },
                      transmission: 0.95,
                      thickness: 0.5,
                      get emissive() {
                        return z.secondaryColor;
                      },
                      emissiveIntensity: 0.05
                    }));
                  }), o(E, $);
                },
                $$slots: { default: !0 }
              });
            }), o(ie, ce);
          };
          x(u, (ie) => {
            n() ? ie(h) : ie(te, !1);
          });
        }
        o(F, T);
      },
      $$slots: { default: !0 }
    });
  });
  var I = f(B, 2);
  He(I, () => Ke.Group, (m, _) => {
    _(m, {
      position: [8, 3, -2],
      get ref() {
        return S[0];
      },
      set ref(F) {
        S[0] = F;
      },
      children: (F, Y) => {
        var T = Ce(), u = ge(T);
        He(u, () => Ke.Mesh, (h, te) => {
          te(h, {
            rotation: [0.4, 0.6, -0.2],
            castShadow: !0,
            children: (ie, ce) => {
              var de = Ah(), ee = ge(de);
              He(ee, () => Ke.OctahedronGeometry, (E, Q) => {
                Q(E, { args: [2, 2] });
              });
              var V = f(ee, 2);
              He(V, () => Ke.MeshPhysicalMaterial, (E, Q) => {
                Q(E, ra(() => g, {
                  color: "#fde047",
                  emissive: "#2a1a00",
                  emissiveIntensity: 0.08
                }));
              });
              var ae = f(V, 2);
              ma(ae, { color: "#fde047", linewidth: 1.5 }), o(ie, de);
            },
            $$slots: { default: !0 }
          });
        }), o(F, T);
      },
      $$slots: { default: !0 }
    });
  });
  var O = f(I, 2);
  He(O, () => Ke.Group, (m, _) => {
    _(m, {
      position: [-7, -2, 4],
      get ref() {
        return S[1];
      },
      set ref(F) {
        S[1] = F;
      },
      children: (F, Y) => {
        var T = Ce(), u = ge(T);
        He(u, () => Ke.Mesh, (h, te) => {
          te(h, {
            rotation: [-0.3, -0.5, 0.3],
            castShadow: !0,
            children: (ie, ce) => {
              var de = zh(), ee = ge(de);
              He(ee, () => Ke.IcosahedronGeometry, (E, Q) => {
                Q(E, { args: [2.5, 1] });
              });
              var V = f(ee, 2);
              He(V, () => Ke.MeshPhysicalMaterial, (E, Q) => {
                Q(E, ra(() => g, {
                  color: "#a5b4fc",
                  emissive: "#0a0a2a",
                  emissiveIntensity: 0.06
                }));
              });
              var ae = f(V, 2);
              ma(ae, { color: "#a5b4fc", linewidth: 1.5 }), o(ie, de);
            },
            $$slots: { default: !0 }
          });
        }), o(F, T);
      },
      $$slots: { default: !0 }
    });
  });
  var R = f(O, 2);
  He(R, () => Ke.Group, (m, _) => {
    _(m, {
      position: [3, -5, -6],
      get ref() {
        return S[2];
      },
      set ref(F) {
        S[2] = F;
      },
      children: (F, Y) => {
        var T = Ce(), u = ge(T);
        He(u, () => Ke.Mesh, (h, te) => {
          te(h, {
            rotation: [0.8, -0.2, 0.5],
            castShadow: !0,
            children: (ie, ce) => {
              var de = Ih(), ee = ge(de);
              He(ee, () => Ke.TetrahedronGeometry, (E, Q) => {
                Q(E, { args: [3, 2] });
              });
              var V = f(ee, 2);
              He(V, () => Ke.MeshPhysicalMaterial, (E, Q) => {
                Q(E, ra(() => g, {
                  color: "#06b6d4",
                  emissive: "#001a2a",
                  emissiveIntensity: 0.07
                }));
              });
              var ae = f(V, 2);
              ma(ae, { color: "#06b6d4", linewidth: 1.5 }), o(ie, de);
            },
            $$slots: { default: !0 }
          });
        }), o(F, T);
      },
      $$slots: { default: !0 }
    });
  });
  var P = f(R, 2);
  {
    var C = (m) => {
      var _ = Ph(), F = ge(_);
      uo(F, {
        get particleCount() {
          return y.particleCount;
        },
        get color() {
          return z.primaryColor;
        },
        flowPattern: "turbulent",
        interactive: !0,
        speed: 1,
        opacity: 0.6
      });
      var Y = f(F, 2);
      {
        let T = /* @__PURE__ */ we(() => Math.floor(y.particleCount * 0.5));
        uo(Y, {
          get particleCount() {
            return t(T);
          },
          get color() {
            return z.secondaryColor;
          },
          flowPattern: "orbital",
          interactive: !0,
          speed: 0.5,
          opacity: 0.4,
          size: 0.015
        });
      }
      o(m, _);
    };
    x(P, (m) => {
      i() && m(C);
    });
  }
  var M = f(P, 2);
  He(M, () => Ke.Mesh, (m, _) => {
    _(m, {
      position: [0, -8, 0],
      rotation: [-Math.PI / 2, 0, 0],
      receiveShadow: !0,
      children: (F, Y) => {
        var T = Lh(), u = ge(T);
        He(u, () => Ke.PlaneGeometry, (te, ie) => {
          ie(te, { args: [40, 40] });
        });
        var h = f(u, 2);
        He(h, () => Ke.MeshPhysicalMaterial, (te, ie) => {
          ie(te, {
            color: "#000000",
            roughness: 0.1,
            metalness: 0.9,
            transparent: !0,
            opacity: 0.3
          });
        }), o(F, T);
      },
      $$slots: { default: !0 }
    });
  }), o(r, q), Ye();
}
const jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rh
}, Symbol.toStringTag, { value: "Module" }));
var Nh = /* @__PURE__ */ c('<div class="threlte-canvas-disabled svelte-10px4fe"><div class="disabled-content svelte-10px4fe"><div class="text-terminal-green font-mono svelte-10px4fe">3D Scene Disabled</div> <span class="text-white/60 text-sm svelte-10px4fe">Enable in Performance Overlay</span></div></div>'), qh = /* @__PURE__ */ c('<div class="threlte-canvas-loading svelte-10px4fe"><div class="loading-content svelte-10px4fe"><div class="animate-spin w-8 h-8 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="text-terminal-green font-mono svelte-10px4fe">Loading 3D Scene...</span></div></div>'), Oh = /* @__PURE__ */ c('<div class="threlte-canvas-loading svelte-10px4fe"><div class="loading-content svelte-10px4fe"><div class="text-red-400 font-mono svelte-10px4fe"> </div></div></div>'), Fh = /* @__PURE__ */ c('<div class="threlte-canvas svelte-10px4fe"><!></div>'), Bh = /* @__PURE__ */ c("<div><!></div>");
const Hh = {
  hash: "svelte-10px4fe",
  code: `.threlte-canvas-container.svelte-10px4fe {width:100%;height:100%;}.threlte-canvas.svelte-10px4fe {width:100%;height:100%;border-radius:12px;overflow:hidden;background:rgba(0, 0, 0, 0.3);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(0, 212, 170, 0.2);}.threlte-canvas-loading.svelte-10px4fe {display:flex;align-items:center;justify-content:center;border-radius:12px;background:rgba(0, 0, 0, 0.3);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(0, 212, 170, 0.2);height:100%;}.threlte-canvas-disabled.svelte-10px4fe {display:flex;align-items:center;justify-content:center;border-radius:12px;background:rgba(0, 0, 0, 0.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255, 255, 255, 0.1);height:100%;}.loading-content.svelte-10px4fe,
	.disabled-content.svelte-10px4fe {display:flex;flex-direction:column;align-items:center;gap:12px;}.text-terminal-green.svelte-10px4fe {color:#00d4aa;}.text-red-400.svelte-10px4fe {color:#f87171;}.text-white\\/60.svelte-10px4fe {color:rgba(255, 255, 255, 0.6);}`
};
function Hx(r, e) {
  Ue(e, !0), $e(r, Hh);
  const a = s(e, "class", 3, ""), n = s(e, "width", 3, 800), i = s(e, "height", 3, 600), d = s(e, "scene", 3, "terminal"), v = s(e, "enable3D", 3, !1);
  s(e, "quality", 3, "medium"), s(e, "autoRotate", 3, !0);
  let p = /* @__PURE__ */ _e(void 0), y = /* @__PURE__ */ _e(null), z = /* @__PURE__ */ _e(!0), g = /* @__PURE__ */ _e(null), L = /* @__PURE__ */ _e(!1);
  ht(() => {
    if (!v()) {
      K(z, !1);
      return;
    }
    const Z = new IntersectionObserver(
      (w) => {
        w.forEach((A) => {
          A.isIntersecting && !t(y) && (K(L, !0), N(), Z.unobserve(A.target));
        });
      },
      { root: null, rootMargin: "50px", threshold: 0.1 }
    );
    return t(p) && Z.observe(t(p)), () => {
      Z.disconnect();
    };
  });
  async function N() {
    try {
      let Z;
      switch (d()) {
        case "glass":
          Z = await Promise.resolve().then(() => jh);
          break;
        case "terminal":
          Z = await Promise.resolve().then(() => Am);
          break;
        default:
          Z = await Promise.resolve().then(() => Qh);
          break;
      }
      K(y, Z.default, !0), K(z, !1);
    } catch (Z) {
      K(g, `Failed to load 3D Scene: ${Z}`), K(z, !1);
    }
  }
  var S = Bh(), k = l(S);
  {
    var b = (Z) => {
      var w = Nh();
      o(Z, w);
    }, q = (Z) => {
      var w = Ce(), A = ge(w);
      {
        var W = (j) => {
          var G = qh();
          o(j, G);
        }, H = (j) => {
          var G = Ce(), B = ge(G);
          {
            var I = (R) => {
              var P = Oh(), C = l(P), M = l(C), m = l(M);
              D(() => le(m, t(g))), o(R, P);
            }, O = (R) => {
              var P = Ce(), C = ge(P);
              {
                var M = (m) => {
                  var _ = Ce(), F = ge(_);
                  {
                    var Y = (u) => {
                      var h = Ce(), te = ge(h);
                      fs(te, () => import("@threlte/core"), null, (ie, ce) => {
                        var de = /* @__PURE__ */ we(() => {
                          var { Canvas: E } = t(ce);
                          return { Canvas: E };
                        }), ee = /* @__PURE__ */ we(() => t(de).Canvas), V = Fh(), ae = l(V);
                        He(ae, () => t(ee), (E, Q) => {
                          Q(E, {
                            children: ($, J) => {
                              var se = Ce(), X = ge(se);
                              He(X, () => t(y), (ne, ue) => {
                                ue(ne, {});
                              }), o($, se);
                            },
                            $$slots: { default: !0 }
                          });
                        }), o(ie, V);
                      }), o(u, h);
                    }, T = (u) => {
                      var h = Ce(), te = ge(h);
                      He(te, () => t(y), (ie, ce) => {
                        ce(ie, {
                          class: "threlte-canvas",
                          get width() {
                            return n();
                          },
                          get height() {
                            return i();
                          }
                        });
                      }), o(u, h);
                    };
                    x(F, (u) => {
                      d() === "glass" || d() === "terminal" ? u(Y) : u(T, !1);
                    });
                  }
                  o(m, _);
                };
                x(
                  C,
                  (m) => {
                    t(y) && m(M);
                  },
                  !0
                );
              }
              o(R, P);
            };
            x(
              B,
              (R) => {
                t(g) ? R(I) : R(O, !1);
              },
              !0
            );
          }
          o(j, G);
        };
        x(
          A,
          (j) => {
            t(z) ? j(W) : j(H, !1);
          },
          !0
        );
      }
      o(Z, w);
    };
    x(k, (Z) => {
      v() ? Z(q, !1) : Z(b);
    });
  }
  rt(S, (Z) => K(p, Z), () => t(p)), D(() => {
    U(S, 1, `threlte-canvas-container ${a()}`, "svelte-10px4fe"), ut(S, `min-height: ${i() ?? ""}px;`);
  }), o(r, S), Ye();
}
var Vh = /* @__PURE__ */ c("<!> <!>", 1), Gh = /* @__PURE__ */ c("<!> <!>", 1), Uh = /* @__PURE__ */ c("<!> <!>", 1), Yh = /* @__PURE__ */ c("<!> <!> <!> <!> <!> <!>", 1), Wh = /* @__PURE__ */ c("<div><!></div>"), Kh = /* @__PURE__ */ c('<div><div class="loading-content svelte-1a73n0m"><div class="animate-spin w-8 h-8 border-2 border-terminal-green border-t-transparent rounded-full"></div> <span class="text-terminal-green font-mono">Loading 3D Scene...</span></div></div>');
const Xh = {
  hash: "svelte-1a73n0m",
  code: ".threlte-canvas.svelte-1a73n0m {width:100%;height:100%;border-radius:12px;overflow:hidden;background:rgba(0, 0, 0, 0.3);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(0, 212, 170, 0.2);}.threlte-canvas-loading.svelte-1a73n0m {display:flex;align-items:center;justify-content:center;border-radius:12px;background:rgba(0, 0, 0, 0.3);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(0, 212, 170, 0.2);}.loading-content.svelte-1a73n0m {display:flex;flex-direction:column;align-items:center;gap:12px;}"
};
function Zh(r, e) {
  Ue(e, !0), $e(r, Xh);
  const a = s(e, "class", 3, "");
  s(e, "width", 3, 800);
  const n = s(e, "height", 3, 600);
  let i = /* @__PURE__ */ _e(!1);
  ht(() => {
    K(i, !0);
  });
  var d = Ce(), v = ge(d);
  {
    var p = (z) => {
      var g = Wh(), L = l(g);
      Ni(L, {
        children: (N, S) => {
          var k = Yh(), b = ge(k);
          wn(b, { enableZoom: !0, enablePan: !0, enableRotate: !0 });
          var q = f(b, 2);
          He(q, () => Ke.AmbientLight, (H, j) => {
            j(H, { intensity: 0.5 });
          });
          var Z = f(q, 2);
          He(Z, () => Ke.DirectionalLight, (H, j) => {
            j(H, { position: [10, 10, 5], intensity: 1 });
          });
          var w = f(Z, 2);
          He(w, () => Ke.Mesh, (H, j) => {
            j(H, {
              position: [0, 0, 0],
              rotation: [0, 0, 0],
              children: (G, B) => {
                var I = Vh(), O = ge(I);
                He(O, () => Ke.BoxGeometry, (P, C) => {
                  C(P, { args: [2, 2, 2] });
                });
                var R = f(O, 2);
                He(R, () => Ke.MeshStandardMaterial, (P, C) => {
                  C(P, {
                    color: "var(--color-terminal-green)",
                    transparent: !0,
                    opacity: 0.8,
                    metalness: 0.5,
                    roughness: 0.2
                  });
                }), o(G, I);
              },
              $$slots: { default: !0 }
            });
          });
          var A = f(w, 2);
          He(A, () => Ke.Mesh, (H, j) => {
            j(H, {
              position: [3, 1, 0],
              children: (G, B) => {
                var I = Gh(), O = ge(I);
                He(O, () => Ke.SphereGeometry, (P, C) => {
                  C(P, { args: [0.5, 32, 32] });
                });
                var R = f(O, 2);
                He(R, () => Ke.MeshStandardMaterial, (P, C) => {
                  C(P, {
                    color: "var(--color-bubble-tea-purple)",
                    transparent: !0,
                    opacity: 0.7,
                    metalness: 0.3,
                    roughness: 0.4
                  });
                }), o(G, I);
              },
              $$slots: { default: !0 }
            });
          });
          var W = f(A, 2);
          He(W, () => Ke.Mesh, (H, j) => {
            j(H, {
              position: [-3, -1, 0],
              children: (G, B) => {
                var I = Uh(), O = ge(I);
                He(O, () => Ke.SphereGeometry, (P, C) => {
                  C(P, { args: [0.7, 32, 32] });
                });
                var R = f(O, 2);
                He(R, () => Ke.MeshStandardMaterial, (P, C) => {
                  C(P, {
                    color: "var(--color-terminal-cyan)",
                    transparent: !0,
                    opacity: 0.6,
                    metalness: 0.4,
                    roughness: 0.3
                  });
                }), o(G, I);
              },
              $$slots: { default: !0 }
            });
          }), o(N, k);
        },
        $$slots: { default: !0 }
      }), D(() => U(g, 1, `threlte-canvas ${a()}`, "svelte-1a73n0m")), o(z, g);
    }, y = (z) => {
      var g = Kh();
      D(() => {
        U(g, 1, `threlte-canvas-loading ${a()}`, "svelte-1a73n0m"), ut(g, `min-height: ${n() ?? ""}px;`);
      }), o(z, g);
    };
    x(v, (z) => {
      t(i) ? z(p) : z(y, !1);
    });
  }
  o(r, d), Ye();
}
const Qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zh
}, Symbol.toStringTag, { value: "Module" }));
var Jh = /* @__PURE__ */ c('<div class="flex items-center justify-center p-8 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 svelte-1884ls5"></div> <span class="text-white/70 svelte-1884ls5">Loading...</span></div></div>'), $h = /* @__PURE__ */ c('<div class="text-sm text-red-400/70 svelte-1884ls5"> </div>'), e1 = /* @__PURE__ */ c('<div role="alert" aria-live="assertive"><div class="space-y-4 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="flex-shrink-0 svelte-1884ls5"><svg class="w-6 h-6 text-red-500 svelte-1884ls5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="svelte-1884ls5"></path></svg></div> <div class="svelte-1884ls5"><h3 class="text-lg font-semibold text-red-600 svelte-1884ls5"> </h3> <p class="text-sm text-red-500/80 svelte-1884ls5"> </p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1884ls5"><!> <!></div> <div class="text-xs text-red-400/50 svelte-1884ls5"><!></div></div></div>');
const t1 = {
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
function Vx(r, e) {
  Ue(e, !0), $e(r, t1);
  const a = s(e, "variant", 3, "glass"), n = s(e, "animate", 3, !0), i = s(
    e,
    "timeout",
    3,
    1e4
    // 10 seconds
  ), d = s(e, "maxRetries", 3, 3), v = s(e, "class", 3, "");
  let p = /* @__PURE__ */ _e("idle"), y = /* @__PURE__ */ _e(null), z = /* @__PURE__ */ _e(null), g = /* @__PURE__ */ _e(0), L = null;
  async function N(B) {
    if (B) {
      K(p, "loading"), K(y, null), K(z, null), i() > 0 && (L = setTimeout(
        () => {
          t(p) === "loading" && (K(p, "timeout"), K(y, new Error(`Operation timed out after ${i()}ms`), !0), e.onError?.(t(y)));
        },
        i()
      ));
      try {
        K(z, await B, !0), K(p, "success");
      } catch (I) {
        K(y, I instanceof Error ? I : new Error(String(I)), !0), K(p, "error"), e.onError?.(t(y));
      } finally {
        L && (clearTimeout(L), L = null);
      }
    }
  }
  async function S() {
    if (!(t(g) >= d()))
      if (Fa(g), e.onRetry) {
        const B = e.onRetry();
        await N(B);
      } else e.promise && await N(e.promise);
  }
  function k() {
    K(p, "idle"), K(y, null), K(z, null), K(g, 0), L && (clearTimeout(L), L = null);
  }
  bt(() => {
    e.promise && N(e.promise);
  }), ht(() => () => {
    L && clearTimeout(L);
  });
  const q = re("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[a()], v());
  function Z(B) {
    switch (B) {
      case "timeout":
        return "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
      case "network":
        return "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0";
      default:
        return "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    }
  }
  function w(B) {
    return B.message.includes("timeout") ? "timeout" : B.message.includes("fetch") || B.message.includes("network") ? "network" : "general";
  }
  function A(B) {
    switch (w(B)) {
      case "timeout":
        return "The operation took too long to complete";
      case "network":
        return "Network connection failed";
      default:
        return B.message || "An unexpected error occurred";
    }
  }
  var W = Ce(), H = ge(W);
  {
    var j = (B) => {
      var I = Ce(), O = ge(I);
      {
        var R = (C) => {
          var M = Ce(), m = ge(M);
          lt(m, () => e.loading), o(C, M);
        }, P = (C) => {
          var M = Jh();
          tt(1, M, () => _t, () => n() ? { duration: 200 } : void 0), o(C, M);
        };
        x(O, (C) => {
          e.loading ? C(R) : C(P, !1);
        });
      }
      o(B, I);
    }, G = (B) => {
      var I = Ce(), O = ge(I);
      {
        var R = (C) => {
          var M = Ce(), m = ge(M);
          {
            var _ = (Y) => {
              var T = Ce(), u = ge(T);
              lt(u, () => e.fallback, () => ({
                error: t(y),
                retry: S,
                reset: k,
                retryCount: t(g),
                maxRetries: d(),
                state: t(p)
              })), o(Y, T);
            }, F = (Y) => {
              var T = e1(), u = l(T), h = l(u), te = l(h), ie = l(te), ce = l(ie), de = f(te, 2), ee = l(de), V = l(ee), ae = f(ee, 2), E = l(ae), Q = f(h, 2);
              x(Q, (me) => {
                t(y);
              });
              var $ = f(Q, 2);
              {
                var J = (me) => {
                  var Te = $h(), Pe = l(Te);
                  D(() => le(Pe, `Retry attempt ${t(g) ?? ""} of ${d() ?? ""}`)), o(me, Te);
                };
                x($, (me) => {
                  t(g) > 0 && me(J);
                });
              }
              var se = f($, 2), X = l(se);
              {
                var ne = (me) => {
                  rr(me, {
                    variant: "glass",
                    size: "sm",
                    onclick: S,
                    class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                    children: (Te, Pe) => {
                      var Fe = Ct();
                      D(() => le(Fe, t(p) === "timeout" ? "Try Again" : "Retry")), o(Te, Fe);
                    },
                    $$slots: { default: !0 }
                  });
                };
                x(X, (me) => {
                  t(g) < d() && (e.onRetry || e.promise) && me(ne);
                });
              }
              var ue = f(X, 2);
              rr(ue, {
                variant: "glass",
                size: "sm",
                onclick: k,
                class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
                children: (me, Te) => {
                  var Pe = Ct("Reset");
                  o(me, Pe);
                },
                $$slots: { default: !0 }
              });
              var ve = f(se, 2), pe = l(ve);
              {
                var fe = (me) => {
                  var Te = Ct();
                  D(() => le(Te, `The operation exceeded the ${i() / 1e3}s timeout limit.`)), o(me, Te);
                }, be = (me) => {
                  var Te = Ce(), Pe = ge(Te);
                  {
                    var Fe = (ke) => {
                      var xe = Ct("Check your internet connection and try again.");
                      o(ke, xe);
                    }, Re = (ke) => {
                      var xe = Ct("If the problem persists, please contact support.");
                      o(ke, xe);
                    };
                    x(
                      Pe,
                      (ke) => {
                        w(t(y)) === "network" ? ke(Fe) : ke(Re, !1);
                      },
                      !0
                    );
                  }
                  o(me, Te);
                };
                x(pe, (me) => {
                  t(p) === "timeout" ? me(fe) : me(be, !1);
                });
              }
              D(
                (me, Te) => {
                  U(T, 1, oe(q), "svelte-1884ls5"), ye(ce, "d", me), le(V, t(p) === "timeout" ? "Operation Timeout" : "Request Failed"), le(E, Te);
                },
                [
                  () => Z(w(t(y))),
                  () => t(y) ? A(t(y)) : "An error occurred while processing your request"
                ]
              ), tt(1, T, () => _t, () => n() ? { duration: 300 } : void 0), o(Y, T);
            };
            x(m, (Y) => {
              e.fallback ? Y(_) : Y(F, !1);
            });
          }
          o(C, M);
        }, P = (C) => {
          var M = Ce(), m = ge(M);
          {
            var _ = (Y) => {
              var T = Ce(), u = ge(T);
              {
                var h = (te) => {
                  var ie = Ce(), ce = ge(ie);
                  lt(ce, () => e.children, () => ({ result: t(z) })), o(te, ie);
                };
                x(u, (te) => {
                  e.children && te(h);
                });
              }
              o(Y, T);
            }, F = (Y) => {
              var T = Ce(), u = ge(T);
              {
                var h = (te) => {
                  var ie = Ce(), ce = ge(ie);
                  lt(ce, () => e.children), o(te, ie);
                };
                x(u, (te) => {
                  e.children && te(h);
                });
              }
              o(Y, T);
            };
            x(
              m,
              (Y) => {
                t(p) === "success" ? Y(_) : Y(F, !1);
              },
              !0
            );
          }
          o(C, M);
        };
        x(
          O,
          (C) => {
            t(p) === "error" || t(p) === "timeout" ? C(R) : C(P, !1);
          },
          !0
        );
      }
      o(B, I);
    };
    x(H, (B) => {
      t(p) === "loading" ? B(j) : B(G, !1);
    });
  }
  o(r, W), Ye();
}
var r1 = /* @__PURE__ */ c('<details class="mt-3 svelte-1q83gw3"><summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400 svelte-1q83gw3">Stack Trace</summary> <pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40 svelte-1q83gw3"> </pre></details>'), a1 = /* @__PURE__ */ c('<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 svelte-1q83gw3"><p class="font-mono text-sm text-red-400 svelte-1q83gw3"> </p> <!></div>'), n1 = /* @__PURE__ */ c('<div class="text-sm text-red-400/70 svelte-1q83gw3"> </div>'), o1 = /* @__PURE__ */ c('<div class="space-y-4 svelte-1q83gw3"><div class="flex items-center gap-3 svelte-1q83gw3"><div class="flex-shrink-0 svelte-1q83gw3"><svg class="w-6 h-6 text-red-500 svelte-1q83gw3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1q83gw3"></path></svg></div> <div class="svelte-1q83gw3"><h3 class="text-lg font-semibold text-red-600 svelte-1q83gw3">Something went wrong</h3> <p class="text-sm text-red-500/80 svelte-1q83gw3">A component error occurred and was caught by the error boundary</p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1q83gw3"><!> <!> <!></div> <!></div>'), i1 = /* @__PURE__ */ c('<div role="alert" aria-live="assertive"><!></div>');
const l1 = {
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
function Gx(r, e) {
  Ue(e, !0), $e(r, l1);
  const a = s(e, "showDetails", 3, !1), n = s(e, "variant", 3, "glass"), i = s(e, "animate", 3, !0), d = s(e, "retryable", 3, !0), v = s(e, "class", 3, "");
  let p = /* @__PURE__ */ _e(!1), y = /* @__PURE__ */ _e(null), z = /* @__PURE__ */ _e(null), g = /* @__PURE__ */ _e(0), L = /* @__PURE__ */ _e(!1);
  const N = 3;
  function S(I, O) {
    K(p, !0), K(y, I, !0), K(z, O, !0), e.onError?.(I, O), console.error("Component Error Boundary caught an error:", I), O && console.error("Error info:", O);
  }
  function k() {
    t(g) < N && (K(p, !1), K(y, null), K(z, null), Fa(g));
  }
  function b() {
    K(p, !1), K(y, null), K(z, null), K(g, 0), K(L, !1);
  }
  const Z = re("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[n()], v());
  ht(() => {
    const I = (R) => {
      S(new Error(`Unhandled promise rejection: ${R.reason}`)), R.preventDefault();
    }, O = (R) => {
      S(new Error(R.message), {
        filename: R.filename,
        lineno: R.lineno,
        colno: R.colno
      });
    };
    return window.addEventListener("unhandledrejection", I), window.addEventListener("error", O), () => {
      window.removeEventListener("unhandledrejection", I), window.removeEventListener("error", O);
    };
  });
  function w(I) {
    return `${I.name}: ${I.message}`;
  }
  function A(I) {
    return I.stack || "No stack trace available";
  }
  function W() {
    return t(g) === 0 ? "" : t(g) >= N ? `Maximum retry attempts reached (${N})` : `Retry attempt ${t(g)} of ${N}`;
  }
  var H = Ce(), j = ge(H);
  {
    var G = (I) => {
      var O = i1(), R = l(O);
      {
        var P = (M) => {
          var m = Ce(), _ = ge(m);
          lt(_, () => e.fallback, () => ({
            error: t(y),
            retry: k,
            reset: b,
            retryCount: t(g),
            maxRetries: N
          })), o(M, m);
        }, C = (M) => {
          var m = o1(), _ = f(l(m), 2);
          {
            var F = (V) => {
              var ae = a1(), E = l(ae), Q = l(E), $ = f(E, 2);
              {
                var J = (se) => {
                  var X = r1(), ne = f(l(X), 2), ue = l(ne);
                  D((ve) => le(ue, ve), [() => A(t(y))]), o(se, X);
                };
                x($, (se) => {
                  a() && t(L) && se(J);
                });
              }
              D((se) => le(Q, se), [() => w(t(y))]), o(V, ae);
            };
            x(_, (V) => {
              t(y) && V(F);
            });
          }
          var Y = f(_, 2);
          {
            var T = (V) => {
              var ae = n1(), E = l(ae);
              D((Q) => le(E, Q), [W]), o(V, ae);
            };
            x(Y, (V) => {
              t(g) > 0 && V(T);
            });
          }
          var u = f(Y, 2), h = l(u);
          {
            var te = (V) => {
              rr(V, {
                variant: "glass",
                size: "sm",
                onclick: k,
                class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                children: (ae, E) => {
                  var Q = Ct("Try Again");
                  o(ae, Q);
                },
                $$slots: { default: !0 }
              });
            };
            x(h, (V) => {
              d() && t(g) < N && V(te);
            });
          }
          var ie = f(h, 2);
          rr(ie, {
            variant: "glass",
            size: "sm",
            onclick: b,
            class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
            children: (V, ae) => {
              var E = Ct("Reset");
              o(V, E);
            },
            $$slots: { default: !0 }
          });
          var ce = f(ie, 2);
          {
            var de = (V) => {
              rr(V, {
                variant: "glass",
                size: "sm",
                onclick: () => K(L, !t(L)),
                class: "bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30",
                children: (ae, E) => {
                  var Q = Ct();
                  D(() => le(Q, `${t(L) ? "Hide" : "Show"} Details`)), o(ae, Q);
                },
                $$slots: { default: !0 }
              });
            };
            x(ce, (V) => {
              a() && V(de);
            });
          }
          var ee = f(u, 2);
          x(ee, (V) => {
          }), o(M, m);
        };
        x(R, (M) => {
          e.fallback ? M(P) : M(C, !1);
        });
      }
      D(() => U(O, 1, oe(Z), "svelte-1q83gw3")), tt(1, O, () => Tt, () => i() ? { duration: 300, blur: "sm" } : void 0), o(I, O);
    }, B = (I) => {
      var O = Ce(), R = ge(O);
      {
        var P = (C) => {
          var M = Ce(), m = ge(M);
          lt(m, () => e.children), o(C, M);
        };
        x(R, (C) => {
          e.children && C(P);
        });
      }
      o(I, O);
    };
    x(j, (I) => {
      t(p) ? I(G) : I(B, !1);
    });
  }
  o(r, H), Ye();
}
function s1(r, e, a) {
  K(e, !0), a.onDismiss?.();
}
var d1 = /* @__PURE__ */ c('<li class="text-sm text-red-500"> </li>'), c1 = /* @__PURE__ */ c('<li class="flex items-start gap-2 svelte-12vbusp"><div class="flex-shrink-0 mt-1"><svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div> <div class="min-w-0"><span class="text-sm font-medium text-red-600"> </span> <ul class="mt-1 space-y-1"></ul></div></li>'), v1 = /* @__PURE__ */ c('<button class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors svelte-12vbusp" aria-label="Dismiss errors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), u1 = /* @__PURE__ */ c('<div role="alert" aria-live="polite"><div class="flex items-start gap-3"><div class="flex-shrink-0 mt-0.5"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-semibold text-red-600 mb-2"> </h3> <ul class="space-y-2 svelte-12vbusp"></ul></div> <!></div></div>'), f1 = /* @__PURE__ */ c('<p class="text-sm text-red-500 flex items-center gap-1 svelte-12vbusp"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> </p>'), b1 = /* @__PURE__ */ c('<div class="mt-1"></div>'), g1 = /* @__PURE__ */ c("<!> <!> <!>", 1);
const m1 = {
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
function Ux(r, e) {
  Ue(e, !0), $e(r, m1);
  const a = s(e, "errors", 19, () => []), n = s(e, "showSummary", 3, !0), i = s(e, "variant", 3, "glass"), d = s(e, "animate", 3, !0), v = s(e, "dismissible", 3, !1), p = s(e, "class", 3, "");
  let y = /* @__PURE__ */ _e(!1);
  const z = /* @__PURE__ */ we(() => a().length > 0 && !t(y)), g = /* @__PURE__ */ we(() => a().reduce(
    (j, G) => (j[G.field] || (j[G.field] = []), j[G.field].push(G), j),
    {}
  )), N = re("rounded-brand p-4 mb-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[i()], p());
  function S(j) {
    return j.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^\w/, (G) => G.toUpperCase()).trim();
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
  var b = g1(), q = ge(b);
  {
    var Z = (j) => {
      var G = u1(), B = l(G), I = f(l(B), 2), O = l(I), R = l(O), P = f(O, 2);
      Xe(P, 21, () => Object.entries(t(g)), ([m, _]) => m, (m, _) => {
        var F = /* @__PURE__ */ we(() => na(t(_), 2));
        let Y = () => t(F)[0], T = () => t(F)[1];
        var u = c1(), h = l(u), te = l(h), ie = l(te), ce = f(h, 2), de = l(ce), ee = l(de), V = f(de, 2);
        Xe(
          V,
          23,
          T,
          (ae, E) => ae.code ? `${Y()}-${ae.code}-${E}` : `${Y()}-${E}`,
          (ae, E) => {
            var Q = d1(), $ = l(Q);
            D(() => le($, t(E).message)), o(ae, Q);
          }
        ), D(
          (ae, E) => {
            ye(ie, "d", ae), le(ee, `${E ?? ""}:`);
          },
          [
            () => k(T()[0]?.code),
            () => S(Y())
          ]
        ), o(m, u);
      });
      var C = f(I, 2);
      {
        var M = (m) => {
          var _ = v1();
          _.__click = [s1, y, e], o(m, _);
        };
        x(C, (m) => {
          v() && m(M);
        });
      }
      D(() => {
        U(G, 1, oe(N), "svelte-12vbusp"), le(R, `Please correct the following ${a().length === 1 ? "error" : "errors"}:`);
      }), tt(1, G, () => _t, () => d() ? { duration: 300, direction: "down" } : void 0), o(j, G);
    };
    x(q, (j) => {
      t(z) && n() && j(Z);
    });
  }
  var w = f(q, 2);
  {
    var A = (j) => {
      var G = Ce(), B = ge(G);
      lt(B, () => e.children, () => ({ errors: t(g), hasErrors: t(z) })), o(j, G);
    };
    x(w, (j) => {
      e.children && j(A);
    });
  }
  var W = f(w, 2);
  {
    var H = (j) => {
      var G = Ce(), B = ge(G);
      Xe(B, 17, () => Object.entries(t(g)), ([I, O]) => I, (I, O) => {
        var R = /* @__PURE__ */ we(() => na(t(O), 2));
        let P = () => t(R)[0], C = () => t(R)[1];
        var M = b1();
        Xe(
          M,
          23,
          C,
          (m, _) => m.code ? `${P()}-${m.code}-${_}` : `${P()}-${_}`,
          (m, _) => {
            var F = f1(), Y = l(F), T = l(Y), u = f(Y);
            D(
              (h) => {
                ye(T, "d", h), le(u, ` ${t(_).message ?? ""}`);
              },
              [() => k(t(_).code)]
            ), tt(1, F, () => _t, () => d() ? { duration: 200, direction: "up", distance: 5 } : void 0), o(m, F);
          }
        ), D(() => ye(M, "id", `${P() ?? ""}-errors`)), o(I, M);
      }), o(j, G);
    };
    x(W, (j) => {
      t(z) && !n() && j(H);
    });
  }
  o(r, b), Ye();
}
gt(["click"]);
const fo = async (r, e, a) => {
  try {
    await navigator.clipboard.writeText(e()), K(a, !0), setTimeout(() => K(a, !1), 2e3);
  } catch (n) {
    console.error("Failed to copy:", n);
  }
};
var h1 = /* @__PURE__ */ ir('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), p1 = /* @__PURE__ */ ir('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), x1 = /* @__PURE__ */ c('<button class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"><!></button>'), _1 = /* @__PURE__ */ c('<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg"><div class="text-sm font-medium text-white/80"> </div> <!></div>'), w1 = /* @__PURE__ */ ir('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), y1 = /* @__PURE__ */ ir('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), k1 = /* @__PURE__ */ c('<button class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"><!></button>'), C1 = /* @__PURE__ */ c(`<div class="relative group"><!> <div><!> <pre class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed svelte-au3hj8"><code>
                
                <!>
            </code>
            </pre></div></div>`);
const S1 = {
  hash: "svelte-au3hj8",
  code: `pre.svelte-au3hj8 {margin:0;-moz-tab-size:2;-o-tab-size:2;tab-size:2;}code.svelte-au3hj8 {font-family:'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;}

	/* Line numbers (optional) */pre.line-numbers {counter-reset:line;}pre.line-numbers code {counter-increment:line;}pre.line-numbers code::before {content:counter(line);display:inline-block;width:3em;padding-right:1em;margin-right:1em;color:rgba(255, 255, 255, 0.3);border-right:1px solid rgba(255, 255, 255, 0.1);text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;}`
};
function Yx(r, e) {
  Ue(e, !0), $e(r, S1);
  let a = s(e, "code", 3, ""), n = s(e, "language", 3, "svelte"), i = s(e, "showCopy", 3, !0), d = s(e, "title", 3, ""), v = /* @__PURE__ */ _e(!1), p = /* @__PURE__ */ _e(void 0);
  const y = (I, O) => {
    if (!I) return "";
    switch (O) {
      case "svelte":
      case "html":
        return g(I);
      case "css":
        return L(I);
      case "javascript":
      case "js":
        return N(I);
      case "typescript":
      case "ts":
        return S(I);
      case "bash":
      case "shell":
        return k(I);
      default:
        return z(I);
    }
  }, z = (I) => I.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), g = (I) => I.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>').replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>').replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=').replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>'), L = (I) => I.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:').replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;').replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), N = (I) => I.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-green-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>').replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>').replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), S = (I) => N(I).replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>'), k = (I) => I.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ').replace(/^>\s*/gm, '<span class="text-blue-400">></span> ').replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>').replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>'), b = /* @__PURE__ */ we(() => () => y(a(), n()));
  ht(() => {
    t(p) && a().split(`
`).length > 1 && (t(p).style.counterReset = "line");
  });
  var q = C1(), Z = l(q);
  {
    var w = (I) => {
      var O = _1(), R = l(O), P = l(R), C = f(R, 2);
      {
        var M = (m) => {
          var _ = x1();
          _.__click = [fo, a, v];
          var F = l(_);
          {
            var Y = (u) => {
              var h = h1();
              o(u, h);
            }, T = (u) => {
              var h = p1();
              o(u, h);
            };
            x(F, (u) => {
              t(v) ? u(Y) : u(T, !1);
            });
          }
          D(() => ye(_, "title", t(v) ? "Copied!" : "Copy code")), o(m, _);
        };
        x(C, (m) => {
          i() && m(M);
        });
      }
      D(() => le(P, d())), o(I, O);
    };
    x(Z, (I) => {
      d() && I(w);
    });
  }
  var A = f(Z, 2), W = l(A);
  {
    var H = (I) => {
      var O = k1();
      O.__click = [fo, a, v];
      var R = l(O);
      {
        var P = (M) => {
          var m = w1();
          o(M, m);
        }, C = (M) => {
          var m = y1();
          o(M, m);
        };
        x(R, (M) => {
          t(v) ? M(P) : M(C, !1);
        });
      }
      D(() => ye(O, "title", t(v) ? "Copied!" : "Copy code")), o(I, O);
    };
    x(W, (I) => {
      i() && !d() && I(H);
    });
  }
  var j = f(W, 2), G = l(j), B = f(l(G));
  Va(B, () => Ka(t(b))), rt(j, (I) => K(p, I), () => t(p)), D(() => {
    U(A, 1, `relative bg-black/30 ${d() ? "rounded-b-lg" : "rounded-lg"} border border-white/10 overflow-hidden`), U(G, 1, `language-${n() ?? ""}`, "svelte-au3hj8");
  }), o(r, q), Ye();
}
gt(["click"]);
function T1(r, e, a) {
  e(!e()), a("toggle", { collapsed: e() });
}
var E1 = (
  // Handle expansion of items with children
  // Set active item
  // Execute custom click handler
  // Close sidebar on mobile when item is selected
  (r, e) => (r.key === "Enter" || r.key === " ") && e()
), M1 = /* @__PURE__ */ c('<div role="button" aria-label="Close sidebar overlay" tabindex="0"></div>'), A1 = /* @__PURE__ */ c('<h2 class="text-lg font-semibold truncate">Menu</h2>'), z1 = /* @__PURE__ */ c("<button><!></button>"), I1 = /* @__PURE__ */ c('<div class="flex items-center justify-between p-4 border-b border-white/10"><!> <!></div>'), P1 = (r, e, a) => e(a()), L1 = /* @__PURE__ */ c('<div class="w-5 h-5 flex-shrink-0"><div class="w-full h-full bg-current opacity-70 rounded"></div></div>'), D1 = /* @__PURE__ */ c('<span class="inline-block w-4 h-4 rotate-90 border-r-2 border-b-2 border-current" style="transform: rotate(45deg);"></span>'), R1 = /* @__PURE__ */ c('<div class="w-5 h-5 flex-shrink-0"><!></div>'), j1 = /* @__PURE__ */ c("<span> </span>"), N1 = /* @__PURE__ */ c('<span class="flex-1 truncate"> </span> <!>', 1), q1 = /* @__PURE__ */ c("<li><button><!> <!></button></li>"), O1 = /* @__PURE__ */ c('<div class="p-4 border-t border-white/10"><!></div>'), F1 = /* @__PURE__ */ c('<!> <aside><!> <nav class="flex-1 overflow-y-auto p-2 svelte-tk90u0"><ul class="space-y-1"></ul></nav> <!></aside>', 1);
const B1 = {
  hash: "svelte-tk90u0",
  code: `
	/* Custom scrollbar for navigation */nav.svelte-tk90u0 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}nav.svelte-tk90u0::-webkit-scrollbar {width:6px;}nav.svelte-tk90u0::-webkit-scrollbar-track {background:transparent;}nav.svelte-tk90u0::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}nav.svelte-tk90u0::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Smooth transitions */aside.svelte-tk90u0 {will-change:width, transform;}

	/* Focus styles */button.svelte-tk90u0:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}`
};
function Wx(r, e) {
  Ue(e, !0), $e(r, B1);
  let a = s(e, "items", 19, () => []), n = s(e, "width", 3, "md"), i = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "left"), v = s(e, "collapsible", 3, !0), p = s(e, "collapsed", 15, !1), y = s(e, "overlay", 3, !1), z = s(e, "persistent", 3, !0), g = s(e, "showToggle", 3, !0), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  const S = At();
  let k = /* @__PURE__ */ _e(null), b = /* @__PURE__ */ _e(st(/* @__PURE__ */ new Set()));
  const q = {
    sm: p() ? "w-16" : "w-48",
    md: p() ? "w-16" : "w-64",
    lg: p() ? "w-16" : "w-72",
    xl: p() ? "w-16" : "w-80"
  }, w = {
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
  }[i()];
  function A(Y) {
    Y.disabled || (Y.children?.length && (t(b).has(Y.id) ? t(b).delete(Y.id) : t(b).add(Y.id), K(b, new Set(t(b)), !0)), K(k, Y.id, !0), Y.onclick && Y.onclick(), S("select", { item: Y }), y() && !z() && p(!0));
  }
  function W() {
    y() && !z() && (p(!0), S("close"));
  }
  function H(Y, T = 0) {
    const u = t(b).has(Y.id), h = t(k) === Y.id || Y.active, te = Y.children?.length;
    return {
      item: Y,
      level: T,
      isExpanded: u,
      isActive: h,
      hasChildren: te,
      paddingLeft: `${T * 1 + 1}rem`
    };
  }
  function j(Y, T = 0) {
    const u = [];
    for (const h of Y) {
      const te = H(h, T);
      u.push(te), te.hasChildren && te.isExpanded && !p() && u.push(...j(h.children, T + 1));
    }
    return u;
  }
  const G = /* @__PURE__ */ we(() => () => j(a()));
  var B = F1(), I = ge(B);
  {
    var O = (Y) => {
      var T = M1();
      T.__click = W, T.__keydown = [E1, W], D((u) => U(T, 1, u), [
        () => oe(re("fixed inset-0 z-40", w.overlay))
      ]), o(Y, T);
    };
    x(I, (Y) => {
      y() && !p() && Y(O);
    });
  }
  var R = f(I, 2);
  Je(
    R,
    (Y) => ({ class: Y, ...N }),
    [
      () => re("flex flex-col h-full border-r transition-all duration-300 ease-in-out", q[n()], w.sidebar, d() === "right" && "border-r-0 border-l", y() && "fixed top-0 z-50", y() && d() === "left" && "left-0", y() && d() === "right" && "right-0", y() && p() && "-translate-x-full", y() && d() === "right" && p() && "translate-x-full", L())
    ],
    void 0,
    "svelte-tk90u0"
  );
  var P = l(R);
  {
    var C = (Y) => {
      var T = I1(), u = l(T);
      {
        var h = (ce) => {
          var de = Ce(), ee = ge(de);
          {
            var V = (E) => {
              var Q = Ce(), $ = ge(Q);
              lt($, () => e.children.header), o(E, Q);
            }, ae = (E) => {
              var Q = A1();
              o(E, Q);
            };
            x(ee, (E) => {
              e.children?.header ? E(V) : E(ae, !1);
            });
          }
          o(ce, de);
        };
        x(u, (ce) => {
          p() || ce(h);
        });
      }
      var te = f(u, 2);
      {
        var ie = (ce) => {
          var de = z1();
          de.__click = [T1, p, S];
          var ee = l(de);
          {
            var V = (E) => {
              var Q = Ce(), $ = ge(Q);
              {
                var J = (X) => {
                  Vr(X, { size: 16 });
                }, se = (X) => {
                  ka(X, { size: 16 });
                };
                x($, (X) => {
                  d() === "left" ? X(J) : X(se, !1);
                });
              }
              o(E, Q);
            }, ae = (E) => {
              var Q = Ce(), $ = ge(Q);
              {
                var J = (X) => {
                  ka(X, { size: 16 });
                }, se = (X) => {
                  Vr(X, { size: 16 });
                };
                x(
                  $,
                  (X) => {
                    d() === "left" ? X(J) : X(se, !1);
                  },
                  !0
                );
              }
              o(E, Q);
            };
            x(ee, (E) => {
              p() ? E(V) : E(ae, !1);
            });
          }
          D(
            (E) => {
              U(de, 1, E, "svelte-tk90u0"), ye(de, "title", p() ? "Expand sidebar" : "Collapse sidebar");
            },
            [
              () => oe(re("p-2 rounded-lg border transition-colors", w.toggle, p() && "mx-auto"))
            ]
          ), o(ce, de);
        };
        x(te, (ce) => {
          v() && ce(ie);
        });
      }
      o(Y, T);
    };
    x(P, (Y) => {
      g() && Y(C);
    });
  }
  var M = f(P, 2), m = l(M);
  Xe(
    m,
    21,
    () => t(G),
    ({ item: Y, level: T, isExpanded: u, isActive: h, hasChildren: te, paddingLeft: ie }) => Y.id,
    (Y, T) => {
      let u = () => t(T).item, h = () => t(T).level, te = () => t(T).isExpanded, ie = () => t(T).isActive, ce = () => t(T).hasChildren, de = () => t(T).paddingLeft;
      var ee = q1(), V = l(ee);
      V.__click = [P1, A, u];
      var ae = l(V);
      {
        var E = (se) => {
          var X = L1();
          o(se, X);
        }, Q = (se) => {
          var X = Ce(), ne = ge(X);
          {
            var ue = (ve) => {
              var pe = R1(), fe = l(pe);
              {
                var be = (Te) => {
                  var Pe = D1();
                  o(Te, Pe);
                }, me = (Te) => {
                  Vr(Te, { size: 16 });
                };
                x(fe, (Te) => {
                  te() ? Te(be) : Te(me, !1);
                });
              }
              o(ve, pe);
            };
            x(
              ne,
              (ve) => {
                ce() && ve(ue);
              },
              !0
            );
          }
          o(se, X);
        };
        x(ae, (se) => {
          u().icon ? se(E) : se(Q, !1);
        });
      }
      var $ = f(ae, 2);
      {
        var J = (se) => {
          var X = N1(), ne = ge(X), ue = l(ne), ve = f(ne, 2);
          {
            var pe = (fe) => {
              var be = j1(), me = l(be);
              D(
                (Te) => {
                  U(be, 1, Te), le(me, u().badge);
                },
                [
                  () => oe(re("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", w.badge))
                ]
              ), o(fe, be);
            };
            x(ve, (fe) => {
              u().badge && fe(pe);
            });
          }
          D(() => le(ue, u().label)), o(se, X);
        };
        x($, (se) => {
          p() || se(J);
        });
      }
      D(
        (se) => {
          U(V, 1, se, "svelte-tk90u0"), ut(V, !p() && h() > 0 ? `padding-left: ${de()}` : void 0), V.disabled = u().disabled, ye(V, "title", p() ? u().label : void 0);
        },
        [
          () => oe(re("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150", w.item, ie() && w.itemActive, u().disabled && w.itemDisabled, p() && "justify-center px-2"))
        ]
      ), o(Y, ee);
    }
  );
  var _ = f(M, 2);
  {
    var F = (Y) => {
      var T = O1(), u = l(T);
      lt(u, () => e.children.footer, () => ({ collapsed: p() })), o(Y, T);
    };
    x(_, (Y) => {
      e.children?.footer && Y(F);
    });
  }
  Ie(R, (Y, T) => Tt?.(Y, T), () => ({ intensity: "medium" })), o(r, B), Ye();
}
gt(["click", "keydown"]);
function H1(r, e, a, n, i, d, v) {
  if (!e()) return;
  const p = r.touches[0];
  K(a, p.clientX, !0), K(n, p.clientY, !0), K(i, !0), t(d) && v();
}
function V1(r, e, a) {
  !e() || !t(a) || r.preventDefault();
}
function G1(r, e, a, n, i, d, v, p, y) {
  if (!e() || !t(a)) return;
  const z = r.changedTouches[0], g = z.clientX - t(n), L = z.clientY - t(i);
  Math.abs(g) > Math.abs(L) && Math.abs(g) > 50 && (g > 0 ? d() : v()), K(a, !1), t(p) && y();
}
var U1 = /* @__PURE__ */ c('<img class="w-full h-full object-cover svelte-wt9314" loading="lazy"/>'), Y1 = /* @__PURE__ */ c('<h3 class="text-lg font-semibold text-white mb-1 svelte-wt9314"> </h3>'), W1 = /* @__PURE__ */ c('<p class="text-sm text-white/80 svelte-wt9314"> </p>'), K1 = /* @__PURE__ */ c('<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 svelte-wt9314"><!> <!></div>'), X1 = /* @__PURE__ */ c("<!> <!>", 1), Z1 = /* @__PURE__ */ c('<div class="w-full h-full flex flex-col svelte-wt9314"><!></div>'), Q1 = /* @__PURE__ */ c('<div class="flex-shrink-0 h-full relative svelte-wt9314"><!></div>'), J1 = /* @__PURE__ */ c("<div><div></div></div>"), $1 = /* @__PURE__ */ c("<button><!></button>"), ep = /* @__PURE__ */ c('<button title="Previous slide" aria-label="Previous slide"><!></button> <button title="Next slide" aria-label="Next slide"><!></button> <!>', 1), tp = /* @__PURE__ */ c("<button></button>"), rp = /* @__PURE__ */ c('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 svelte-wt9314"></div>'), ap = /* @__PURE__ */ c('<div><div class="relative w-full h-full overflow-hidden svelte-wt9314"><div></div></div> <!> <!> <!></div>');
const np = {
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
function Kx(r, e) {
  Ue(e, !0), $e(r, np);
  let a = s(e, "currentIndex", 15, 0), n = s(e, "autoPlay", 3, !1), i = s(e, "autoPlayInterval", 3, 5e3), d = s(e, "showControls", 3, !0), v = s(e, "showDots", 3, !0), p = s(e, "showProgress", 3, !1), y = s(e, "loop", 3, !0), z = s(e, "variant", 3, "glass"), g = s(e, "size", 3, "md"), L = s(e, "aspectRatio", 3, "16:9");
  s(e, "transition", 3, "slide");
  let N = s(e, "itemsPerView", 3, 1), S = s(e, "gap", 3, "md"), k = s(e, "touchEnabled", 3, !0), b = s(e, "class", 3, ""), q = /* @__PURE__ */ ct(e, [
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
  let w, A, W = /* @__PURE__ */ _e(st(n())), H = null, j = /* @__PURE__ */ _e(0), G = /* @__PURE__ */ _e(0), B = /* @__PURE__ */ _e(!1);
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
  }, O = {
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
  }, R = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]"
  }, P = I[g()], C = O[z()], M = /* @__PURE__ */ we(() => () => e.items.length), m = /* @__PURE__ */ we(() => () => Math.max(0, t(M)() - N())), _ = /* @__PURE__ */ we(() => () => y() || a() > 0), F = /* @__PURE__ */ we(() => () => y() || a() < t(m)()), Y = /* @__PURE__ */ we(() => () => `-${a() * 100 / N()}%`), T = /* @__PURE__ */ we(() => () => t(M)() <= 1 ? 100 : (a() + 1) / t(M)() * 100), u = /* @__PURE__ */ we(() => () => t(M)() ? 100 / t(M)() : 0);
  function h(ve) {
    ve < 0 ? a(y() ? t(m)() : 0) : ve > t(m)() ? a(y() ? 0 : t(m)()) : a(ve), Z("change", { index: a(), item: e.items[a()] });
  }
  function te() {
    t(_)() && h(a() - 1);
  }
  function ie() {
    t(F)() && h(a() + 1);
  }
  function ce() {
    K(W, !t(W)), t(W) ? de() : ee(), Z("autoplay", { isPlaying: t(W) });
  }
  function de() {
    !t(W) || t(M)() <= 1 || (ee(), H = window.setInterval(
      () => {
        if (a() >= t(m)() && !y()) {
          ee();
          return;
        }
        ie();
      },
      i()
    ));
  }
  function ee() {
    H && (clearInterval(H), H = null);
  }
  function V(ve) {
    switch (ve.key) {
      case "ArrowLeft":
        ve.preventDefault(), te();
        break;
      case "ArrowRight":
        ve.preventDefault(), ie();
        break;
      case " ":
        ve.preventDefault(), ce();
        break;
      case "Home":
        ve.preventDefault(), h(0);
        break;
      case "End":
        ve.preventDefault(), h(t(m)());
        break;
    }
  }
  ht(() => (t(W) && de(), () => {
    ee();
  })), bt(() => {
    t(W) ? de() : ee();
  });
  var ae = ap();
  Je(
    ae,
    (ve) => ({
      class: ve,
      onkeydown: V,
      role: "region",
      "aria-label": "Carousel",
      "aria-live": "polite",
      ...q
    }),
    [
      () => re("relative rounded-lg border overflow-hidden", R[L()], C.container, P.container, b())
    ],
    void 0,
    "svelte-wt9314"
  );
  var E = l(ae);
  E.__touchstart = [
    H1,
    k,
    j,
    G,
    B,
    W,
    ee
  ], E.__touchmove = [V1, k, B], E.__touchend = [
    G1,
    k,
    B,
    j,
    G,
    te,
    ie,
    W,
    de
  ];
  var Q = l(E);
  Xe(Q, 23, () => e.items, (ve) => ve.id, (ve, pe, fe) => {
    var be = Q1(), me = l(be);
    {
      var Te = (Pe) => {
        var Fe = Z1(), Re = l(Fe);
        {
          var ke = (Ee) => {
            const Ne = /* @__PURE__ */ we(() => e.children.item({ item: t(pe), index: t(fe) }));
            var Ae = Ce(), Le = ge(Ae);
            lt(Le, () => t(Ne)), o(Ee, Ae);
          }, xe = (Ee) => {
            var Ne = X1(), Ae = ge(Ne);
            {
              var Le = (Se) => {
                var he = U1();
                D(() => {
                  ye(he, "src", t(pe).image), ye(he, "alt", t(pe).title || `Slide ${t(fe) + 1}`);
                }), o(Se, he);
              };
              x(Ae, (Se) => {
                t(pe).image && Se(Le);
              });
            }
            var Oe = f(Ae, 2);
            {
              var Be = (Se) => {
                var he = K1(), ze = l(he);
                {
                  var De = (Qe) => {
                    var ot = Y1(), vt = l(ot);
                    D(() => le(vt, t(pe).title)), o(Qe, ot);
                  };
                  x(ze, (Qe) => {
                    t(pe).title && Qe(De);
                  });
                }
                var Ve = f(ze, 2);
                {
                  var et = (Qe) => {
                    var ot = W1(), vt = l(ot);
                    D(() => le(vt, t(pe).description)), o(Qe, ot);
                  };
                  x(Ve, (Qe) => {
                    t(pe).description && Qe(et);
                  });
                }
                o(Se, he);
              };
              x(Oe, (Se) => {
                (t(pe).title || t(pe).description) && Se(Be);
              });
            }
            o(Ee, Ne);
          };
          x(Re, (Ee) => {
            e.children?.item ? Ee(ke) : Ee(xe, !1);
          });
        }
        o(Pe, Fe);
      };
      x(me, (Pe) => {
        Pe(Te, !1);
      });
    }
    D((Pe) => ut(be, Pe), [() => `width: ${t(u)()}%`]), o(ve, be);
  }), rt(E, (ve) => A = ve, () => A);
  var $ = f(E, 2);
  {
    var J = (ve) => {
      var pe = J1(), fe = l(pe);
      D(
        (be, me, Te) => {
          U(pe, 1, be, "svelte-wt9314"), U(fe, 1, me, "svelte-wt9314"), ut(fe, Te);
        },
        [
          () => oe(re("absolute bottom-0 left-0 right-0 h-1", C.progress)),
          () => oe(re("h-full transition-all duration-300", C.progressFill)),
          () => `width: ${t(T)()}%`
        ]
      ), o(ve, pe);
    };
    x($, (ve) => {
      p() && ve(J);
    });
  }
  var se = f($, 2);
  {
    var X = (ve) => {
      var pe = ep(), fe = ge(pe);
      fe.__click = te;
      var be = l(fe);
      ka(be, { size: 16 });
      var me = f(fe, 2);
      me.__click = ie;
      var Te = l(me);
      Vr(Te, { size: 16 });
      var Pe = f(me, 2);
      {
        var Fe = (Re) => {
          var ke = $1();
          ke.__click = ce;
          var xe = l(ke);
          {
            var Ee = (Ae) => {
              Ri(Ae, { size: 16 });
            }, Ne = (Ae) => {
              ji(Ae, { size: 16 });
            };
            x(xe, (Ae) => {
              t(W) ? Ae(Ee) : Ae(Ne, !1);
            });
          }
          D(
            (Ae) => {
              U(ke, 1, Ae, "svelte-wt9314"), ye(ke, "title", t(W) ? "Pause autoplay" : "Start autoplay"), ye(ke, "aria-label", t(W) ? "Pause autoplay" : "Start autoplay");
            },
            [
              () => oe(re("absolute top-2 right-2 rounded-full border transition-all duration-200", P.controls, C.controls))
            ]
          ), o(Re, ke);
        };
        x(Pe, (Re) => {
          n() && Re(Fe);
        });
      }
      D(
        (Re, ke, xe, Ee) => {
          fe.disabled = Re, U(fe, 1, ke, "svelte-wt9314"), me.disabled = xe, U(me, 1, Ee, "svelte-wt9314");
        },
        [
          () => !t(_)(),
          () => oe(re("absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", P.controls, C.controls, !t(_)() && "opacity-50 cursor-not-allowed")),
          () => !t(F)(),
          () => oe(re("absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", P.controls, C.controls, !t(F)() && "opacity-50 cursor-not-allowed"))
        ]
      ), o(ve, pe);
    };
    x(se, (ve) => {
      d() && t(M)() > 1 && ve(X);
    });
  }
  var ne = f(se, 2);
  {
    var ue = (ve) => {
      var pe = rp();
      Xe(pe, 23, () => e.items, (fe) => fe.id, (fe, be, me) => {
        var Te = tp();
        Te.__click = () => h(t(me)), D(
          (Pe) => {
            U(Te, 1, Pe, "svelte-wt9314"), ye(Te, "title", `Go to slide ${t(me) + 1}`), ye(Te, "aria-label", `Go to slide ${t(me) + 1}`);
          },
          [
            () => oe(re("rounded-full transition-all duration-200", P.dots, t(me) === a() ? C.dotsActive : C.dots))
          ]
        ), o(fe, Te);
      }), o(ve, pe);
    };
    x(ne, (ve) => {
      v() && t(M)() > 1 && ve(ue);
    });
  }
  rt(ae, (ve) => w = ve, () => w), Ie(ae, (ve, pe) => Tt?.(ve, pe), () => ({ intensity: "medium" })), D(
    (ve, pe) => {
      U(Q, 1, ve, "svelte-wt9314"), ut(Q, pe);
    },
    [
      () => oe(re("flex h-full transition-transform duration-300 ease-in-out", P.gap[S()])),
      () => `transform: translateX(${t(Y)()}); width: ${t(M)() * 100 / N()}%`
    ]
  ), o(r, ae), Ye();
}
gt(["touchstart", "touchmove", "touchend", "click"]);
function op(r, e, a) {
  e() && a();
}
var ip = /* @__PURE__ */ c('<div role="presentation"></div>'), lp = /* @__PURE__ */ c('<h2 id="drawer-title" class="text-lg font-semibold svelte-vtlnqj">Drawer</h2>'), sp = /* @__PURE__ */ c('<button title="Close drawer" aria-label="Close drawer"><!></button>'), dp = /* @__PURE__ */ c('<div class="p-4 border-t border-white/10 flex-shrink-0 svelte-vtlnqj"><!></div>'), cp = /* @__PURE__ */ c('<!> <div><div class="flex flex-col h-full focus:outline-none svelte-vtlnqj" tabindex="-1"><div class="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 svelte-vtlnqj"><div class="flex-1 svelte-vtlnqj"><!></div> <!></div> <div class="flex-1 overflow-y-auto p-4 svelte-vtlnqj"><!></div> <!></div></div>', 1);
const vp = {
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
function Xx(r, e) {
  Ue(e, !0), $e(r, vp);
  let a = s(e, "open", 15, !1), n = s(e, "position", 3, "right"), i = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), v = s(e, "overlay", 3, !0), p = s(e, "closeOnOutsideClick", 3, !0), y = s(e, "closeOnEscape", 3, !0), z = s(e, "showCloseButton", 3, !0), g = s(e, "persistent", 3, !1), L = s(e, "class", 3, ""), N = /* @__PURE__ */ ct(e, [
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
  const S = At();
  let k = /* @__PURE__ */ _e(null), b = /* @__PURE__ */ _e(null);
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
  }, w = {
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
  }[d()], A = q[i()][n()], W = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "top-0 left-0 w-full border-b",
    bottom: "bottom-0 left-0 w-full border-t"
  }, H = () => {
    const P = { duration: 300 };
    switch (n()) {
      case "left":
        return { ...P, x: -400 };
      case "right":
        return { ...P, x: 400 };
      case "top":
        return { ...P, y: -400 };
      case "bottom":
        return { ...P, y: 400 };
      default:
        return { ...P, x: 400 };
    }
  };
  function j() {
    g() || (a(!1), S("close"));
  }
  function G(P) {
    P.key === "Escape" && y() && a() && j();
  }
  function B(P) {
    p() && a() && t(b) && !t(b).contains(P.target) && j();
  }
  ht(() => (y() && document.addEventListener("keydown", G), p() && document.addEventListener("click", B), () => {
    document.removeEventListener("keydown", G), document.removeEventListener("click", B);
  })), bt(() => {
    if (a() && t(b)) {
      const P = t(b).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      P.length > 0 ? P[0].focus() : t(b).focus();
    }
  });
  var I = Ce(), O = ge(I);
  {
    var R = (P) => {
      var C = cp(), M = ge(C);
      {
        var m = ($) => {
          var J = ip();
          J.__click = [op, p, j], D((se) => U(J, 1, se, "svelte-vtlnqj"), [
            () => oe(re("fixed inset-0 z-40", w.overlay))
          ]), tt(3, J, () => wi, () => ({ duration: 200 })), o($, J);
        };
        x(M, ($) => {
          v() && $(m);
        });
      }
      var _ = f(M, 2);
      Je(
        _,
        ($) => ({
          class: $,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          ...N
        }),
        [
          () => re("fixed z-50 flex flex-col", W[n()], A, w.drawer, L())
        ],
        void 0,
        "svelte-vtlnqj"
      );
      var F = l(_), Y = l(F), T = l(Y), u = l(T);
      {
        var h = ($) => {
          const J = /* @__PURE__ */ we(() => e.children.header());
          var se = Ce(), X = ge(se);
          lt(X, () => t(J)), o($, se);
        }, te = ($) => {
          var J = lp();
          o($, J);
        };
        x(u, ($) => {
          typeof e.children == "object" && e.children && "header" in e.children && e.children.header ? $(h) : $(te, !1);
        });
      }
      var ie = f(T, 2);
      {
        var ce = ($) => {
          var J = sp();
          J.__click = j;
          var se = l(J);
          ya(se, { size: 16 }), D((X) => U(J, 1, X, "svelte-vtlnqj"), [
            () => oe(re("p-2 rounded-lg border transition-colors ml-4", w.closeButton))
          ]), o($, J);
        };
        x(ie, ($) => {
          z() && !g() && $(ce);
        });
      }
      var de = f(Y, 2), ee = l(de);
      {
        var V = ($) => {
          const J = /* @__PURE__ */ we(() => e.children({ open: a(), close: j }));
          var se = Ce(), X = ge(se);
          lt(X, () => t(J)), o($, se);
        }, ae = ($) => {
          var J = Ce(), se = ge(J);
          {
            var X = (ne) => {
              const ue = /* @__PURE__ */ we(() => e.children.body({ open: a(), close: j }));
              var ve = Ce(), pe = ge(ve);
              lt(pe, () => t(ue)), o(ne, ve);
            };
            x(
              se,
              (ne) => {
                typeof e.children == "object" && e.children && "body" in e.children && e.children.body && ne(X);
              },
              !0
            );
          }
          o($, J);
        };
        x(ee, ($) => {
          typeof e.children == "function" ? $(V) : $(ae, !1);
        });
      }
      var E = f(de, 2);
      {
        var Q = ($) => {
          const J = /* @__PURE__ */ we(() => e.children.footer({ open: a(), close: j }));
          var se = dp(), X = l(se);
          lt(X, () => t(J)), o($, se);
        };
        x(E, ($) => {
          typeof e.children == "object" && e.children && "footer" in e.children && e.children.footer && $(Q);
        });
      }
      rt(F, ($) => K(b, $), () => t(b)), rt(_, ($) => K(k, $), () => t(k)), Ie(_, ($, J) => Tt?.($, J), () => ({ intensity: "medium" })), tt(3, _, () => yi, H), o(P, C);
    };
    x(O, (P) => {
      a() && P(R);
    });
  }
  o(r, I), Ye();
}
gt(["click"]);
function ca(r) {
  const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
  return e ? {
    r: parseInt(e[1], 16),
    g: parseInt(e[2], 16),
    b: parseInt(e[3], 16)
  } : null;
}
function xn(r) {
  const { r: e, g: a, b: n } = r, i = e / 255, d = a / 255, v = n / 255, p = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4), y = d <= 0.03928 ? d / 12.92 : Math.pow((d + 0.055) / 1.055, 2.4), z = v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  return 0.2126 * p + 0.7152 * y + 0.0722 * z;
}
function Yr(r, e) {
  const a = ca(r), n = ca(e);
  if (!a || !n)
    throw new Error("Invalid hex color format");
  const i = xn(a), d = xn(n), v = Math.max(i, d), p = Math.min(i, d);
  return (v + 0.05) / (p + 0.05);
}
function up(r, e) {
  return Yr(r, e) >= 3;
}
function fp(r, e) {
  const a = ca(r);
  if (!a) throw new Error("Invalid hex color");
  const n = 1 + e / 100, i = Math.min(255, Math.round(a.r * n)), d = Math.min(255, Math.round(a.g * n)), v = Math.min(255, Math.round(a.b * n));
  return `#${i.toString(16).padStart(2, "0")}${d.toString(16).padStart(2, "0")}${v.toString(16).padStart(2, "0")}`;
}
function bp(r, e) {
  const a = ca(r);
  if (!a) throw new Error("Invalid hex color");
  const n = 1 - e / 100, i = Math.max(0, Math.round(a.r * n)), d = Math.max(0, Math.round(a.g * n)), v = Math.max(0, Math.round(a.b * n));
  return `#${i.toString(16).padStart(2, "0")}${d.toString(16).padStart(2, "0")}${v.toString(16).padStart(2, "0")}`;
}
function gp(r, e, a = 4.5, n = 50) {
  let i = r;
  if (Yr(i, e) >= a)
    return i;
  for (let y = 1; y <= n; y++) {
    const z = fp(r, y * 2);
    if (Yr(z, e) >= a)
      return z;
  }
  for (let y = 1; y <= n; y++) {
    const z = bp(r, y * 2);
    if (Yr(z, e) >= a)
      return z;
  }
  const v = ca(e);
  return v ? xn(v) > 0.5 ? "#000000" : "#ffffff" : r;
}
function bo(r, e, a = !1) {
  const n = Yr(r, e);
  return a ? n >= 4.5 ? "AAA" : n >= 3 ? "AA" : "Fail" : n >= 7 ? "AAA" : n >= 4.5 ? "AA" : n >= 3 ? "A" : "Fail";
}
function mp(r, e) {
  const a = [];
  for (const n of r)
    for (const i of e) {
      const d = Yr(n.hex, i.hex), v = bo(n.hex, i.hex, !1), p = bo(n.hex, i.hex, !0), y = up(n.hex, i.hex);
      let z = "";
      v === "Fail" && (z = `Consider using ${gp(n.hex, i.hex)} for better contrast`), a.push({
        combination: `${n.name} on ${i.name}`,
        foreground: n.hex,
        background: i.hex,
        ratio: Math.round(d * 100) / 100,
        normalText: v,
        largeText: p,
        uiComponent: y,
        recommendations: z || void 0
      });
    }
  return a;
}
var hp = /* @__PURE__ */ c('<div class="glass-subtle p-4 rounded-lg svelte-13stqh3"><div class="text-2xl font-bold text-green-400"> </div> <div class="text-sm text-gray-400">AA Compliant</div></div> <div class="glass-subtle p-4 rounded-lg svelte-13stqh3"><div class="text-2xl font-bold text-cyan-400"> </div> <div class="text-sm text-gray-400">AAA Compliant</div></div> <div class="glass-subtle p-4 rounded-lg svelte-13stqh3"><div> </div> <div class="text-sm text-gray-400">Failing</div></div> <div class="glass-subtle p-4 rounded-lg svelte-13stqh3"><div class="text-2xl font-bold text-blue-400"> </div> <div class="text-sm text-gray-400">UI Compliant</div></div>', 1), pp = /* @__PURE__ */ c('<th class="px-4 py-3 text-left font-semibold">Notes</th>'), xp = /* @__PURE__ */ c('<td class="px-4 py-3 text-xs text-gray-400"> </td>'), _p = /* @__PURE__ */ c('<tr class="border-t border-white/10 hover:bg-white/5"><td class="px-4 py-3 font-medium"> </td><td class="px-4 py-3 text-center"><div class="inline-flex items-center px-3 py-1 rounded text-sm font-medium">Sample Text</div></td><td class="px-4 py-3 text-center font-mono"> </td><td class="px-4 py-3 text-center"><!></td><td class="px-4 py-3 text-center"><!></td><td class="px-4 py-3 text-center"><!></td><!></tr>'), wp = /* @__PURE__ */ c('<div><div class="text-center"><h2 class="text-2xl font-bold mb-2"> </h2> <p class="text-gray-400"> </p></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"><!></div> <div class="glass-subtle rounded-lg overflow-hidden svelte-13stqh3"><div class="overflow-x-auto"><table class="w-full text-sm"><thead class="bg-white/5"><tr><th class="px-4 py-3 text-left font-semibold">Color Combination</th><th class="px-4 py-3 text-center font-semibold">Preview</th><th class="px-4 py-3 text-center font-semibold">Ratio</th><th class="px-4 py-3 text-center font-semibold">Normal Text</th><th class="px-4 py-3 text-center font-semibold">Large Text</th><th class="px-4 py-3 text-center font-semibold">UI</th><!></tr></thead><tbody></tbody></table></div></div> <div class="glass-subtle p-4 rounded-lg svelte-13stqh3"><h3 class="font-semibold mb-2">WCAG Contrast Requirements</h3> <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-400"><div><h4 class="font-medium text-white mb-1">Level AA (Required)</h4> <ul class="space-y-1"><li>• Normal text: 4.5:1 ratio</li> <li>• Large text: 3:1 ratio</li> <li>• UI components: 3:1 ratio</li></ul></div> <div><h4 class="font-medium text-white mb-1">Level AAA (Enhanced)</h4> <ul class="space-y-1"><li>• Normal text: 7:1 ratio</li> <li>• Large text: 4.5:1 ratio</li> <li>• Graphical objects: 3:1 ratio</li></ul></div></div></div></div>');
const yp = {
  hash: "svelte-13stqh3",
  code: ".glass-subtle.svelte-13stqh3 {background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(8px);border:1px solid rgba(255, 255, 255, 0.1);}"
};
function Zx(r, e) {
  Ue(e, !0), $e(r, yp);
  const a = s(e, "title", 3, "Color Accessibility Report"), n = s(e, "showRecommendations", 3, !0), i = s(e, "class", 3, ""), d = /* @__PURE__ */ we(() => () => {
    const O = da[e.themeType];
    return [
      { name: "Primary", hex: O.colors.primary },
      { name: "Secondary", hex: O.colors.secondary },
      { name: "Accent", hex: O.colors.accent },
      { name: "Success", hex: O.colors.success },
      { name: "Warning", hex: O.colors.warning },
      { name: "Error", hex: O.colors.error },
      { name: "Info", hex: O.colors.info },
      { name: "Text", hex: O.colors.text }
    ];
  }), v = /* @__PURE__ */ we(() => () => {
    const O = da[e.themeType];
    return [
      { name: "Background", hex: O.colors.background },
      { name: "Surface", hex: O.colors.surface }
    ];
  }), p = /* @__PURE__ */ we(() => () => mp(t(d)(), t(v)())), y = (O) => {
    switch (O) {
      case "AAA":
        return "success";
      case "AA":
        return "success";
      case "A":
        return "warning";
      case "Fail":
        return "error";
      default:
        return "secondary";
    }
  }, z = (O) => {
    switch (O) {
      case "AAA":
        return "🏆";
      case "AA":
        return "✅";
      case "A":
        return "⚠️";
      case "Fail":
        return "❌";
      default:
        return "❓";
    }
  };
  var g = wp(), L = l(g), N = l(L), S = l(N), k = f(N, 2), b = l(k), q = f(L, 2);
  {
    const O = (R) => {
      const P = /* @__PURE__ */ we(() => t(p)()), C = /* @__PURE__ */ we(() => t(P).filter((Q) => Q.normalText === "AA" || Q.normalText === "AAA").length), M = /* @__PURE__ */ we(() => t(P).filter((Q) => Q.normalText === "AAA").length), m = /* @__PURE__ */ we(() => t(P).filter((Q) => Q.normalText === "Fail").length), _ = /* @__PURE__ */ we(() => t(P).filter((Q) => Q.uiComponent).length);
      var F = hp(), Y = ge(F), T = l(Y), u = l(T), h = f(Y, 2), te = l(h), ie = l(te), ce = f(h, 2), de = l(ce), ee = l(de), V = f(ce, 2), ae = l(V), E = l(ae);
      D(() => {
        le(u, t(C)), le(ie, t(M)), U(de, 1, `text-2xl font-bold ${t(m) > 0 ? "text-red-400" : "text-green-400"}`), le(ee, t(m)), le(E, t(_));
      }), o(R, F);
    };
    var Z = l(q);
    O(Z);
  }
  var w = f(q, 2), A = l(w), W = l(A), H = l(W), j = l(H), G = f(l(j), 6);
  {
    var B = (O) => {
      var R = pp();
      o(O, R);
    };
    x(G, (O) => {
      n() && O(B);
    });
  }
  var I = f(H);
  Xe(I, 23, () => t(p)(), (O, R) => O.combination || R, (O, R) => {
    var P = _p(), C = l(P), M = l(C), m = f(C), _ = l(m), F = f(m), Y = l(F), T = f(F), u = l(T);
    {
      let V = /* @__PURE__ */ we(() => y(t(R).normalText));
      ln(u, {
        get variant() {
          return t(V);
        },
        children: (ae, E) => {
          var Q = Ct();
          D(
            ($) => le(Q, `${$ ?? ""}
									${t(R).normalText ?? ""}`),
            [() => z(t(R).normalText)]
          ), o(ae, Q);
        },
        $$slots: { default: !0 }
      });
    }
    var h = f(T), te = l(h);
    {
      let V = /* @__PURE__ */ we(() => y(t(R).largeText));
      ln(te, {
        get variant() {
          return t(V);
        },
        children: (ae, E) => {
          var Q = Ct();
          D(
            ($) => le(Q, `${$ ?? ""}
									${t(R).largeText ?? ""}`),
            [() => z(t(R).largeText)]
          ), o(ae, Q);
        },
        $$slots: { default: !0 }
      });
    }
    var ie = f(h), ce = l(ie);
    {
      let V = /* @__PURE__ */ we(() => t(R).uiComponent ? "success" : "error");
      ln(ce, {
        get variant() {
          return t(V);
        },
        children: (ae, E) => {
          var Q = Ct();
          D(() => le(Q, t(R).uiComponent ? "✅" : "❌")), o(ae, Q);
        },
        $$slots: { default: !0 }
      });
    }
    var de = f(ie);
    {
      var ee = (V) => {
        var ae = xp(), E = l(ae);
        D(() => le(E, t(R).recommendations || "Good contrast")), o(V, ae);
      };
      x(de, (V) => {
        n() && V(ee);
      });
    }
    D(() => {
      le(M, t(R).combination), ut(_, `color: ${t(R).foreground ?? ""}; background-color: ${t(R).background ?? ""};`), le(Y, `${t(R).ratio ?? ""}:1`);
    }), o(O, P);
  }), D(() => {
    U(g, 1, `space-y-6 ${i() ?? ""}`, "svelte-13stqh3"), le(S, a()), le(b, `Testing ${e.themeType === "terminal" ? "Terminal" : "Bubble Tea"} theme for WCAG compliance`);
  }), o(r, g), Ye();
}
var kp = /* @__PURE__ */ c("<div></div>"), Cp = /* @__PURE__ */ c('<span class="text-white/80 text-xs font-mono svelte-11p3y6q"> </span>'), Sp = /* @__PURE__ */ c('<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-2"><span class="text-white text-xs font-medium mb-1 svelte-11p3y6q"> </span> <!></div>'), Tp = /* @__PURE__ */ c('<span class="font-mono text-sm text-white/60 svelte-11p3y6q"> </span>'), Ep = /* @__PURE__ */ c('<p class="text-sm text-white/60 mt-1"> </p>'), Mp = /* @__PURE__ */ c('<div class="flex-1"><div class="flex items-center justify-between"><span class="font-medium text-white svelte-11p3y6q"> </span> <!></div> <!></div>'), Ap = /* @__PURE__ */ c('<div class="absolute inset-0 bg-green-500/20 flex items-center justify-center"><span class="text-green-400 text-xs font-medium svelte-11p3y6q">Copied!</span></div>'), zp = /* @__PURE__ */ c("<button><!> <!> <!></button>");
const Ip = {
  hash: "svelte-11p3y6q",
  code: `
    /* Ensure color swatches have proper contrast for accessibility */.group.svelte-11p3y6q:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}

    /* Color transition animations */.group.svelte-11p3y6q {will-change:transform, box-shadow;}

    /* Responsive typography adjustments */
    @media (max-width: 640px) {.group.svelte-11p3y6q span:where(.svelte-11p3y6q) {font-size:0.75rem;}
    }`
};
function go(r, e) {
  Ue(e, !0), $e(r, Ip);
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
  ]), i = () => re(
    "group relative overflow-hidden transition-all duration-300",
    e.layout === "grid" ? "aspect-square rounded-lg" : "flex items-center gap-3 p-3 rounded-lg",
    e.interactive && "cursor-pointer hover:scale-105",
    e.isTerminal ? "border border-terminal-green/20" : "border border-bubble-tea-purple/20",
    a()
  ), d = () => e.layout === "grid" ? `background-color: ${e.color.hex}` : `background-color: ${e.color.hex}; width: 2rem; height: 2rem; border-radius: 0.375rem`, v = () => {
    e.onColorClick(e.color);
  }, p = (Z) => {
    (Z.key === "Enter" || Z.key === " ") && (Z.preventDefault(), e.onColorClick(e.color));
  }, y = e.animate ? {
    jellyHover: {
      enabled: e.interactive,
      duration: 200,
      scale: 1.05,
      borderRadius: "8px"
    },
    springPop: { duration: 150, delay: e.colorIndex * 20 }
  } : {};
  var z = zp();
  Je(
    z,
    (Z, w) => ({
      type: "button",
      class: Z,
      style: w,
      onclick: v,
      onkeydown: p,
      "aria-label": `Copy ${e.color.name} color ${e.color.hex}`,
      ...n
    }),
    [
      i,
      () => e.layout === "grid" ? d() : ""
    ],
    void 0,
    "svelte-11p3y6q"
  );
  var g = l(z);
  {
    var L = (Z) => {
      var w = kp();
      D((A) => ut(w, A), [d]), o(Z, w);
    };
    x(g, (Z) => {
      e.layout === "list" && Z(L);
    });
  }
  var N = f(g, 2);
  {
    var S = (Z) => {
      var w = Sp(), A = l(w), W = l(A), H = f(A, 2);
      {
        var j = (G) => {
          var B = Cp(), I = l(B);
          D(() => le(I, e.color.hex)), o(G, B);
        };
        x(H, (G) => {
          e.showHex && G(j);
        });
      }
      D(() => le(W, e.color.name)), o(Z, w);
    }, k = (Z) => {
      var w = Mp(), A = l(w), W = l(A), H = l(W), j = f(W, 2);
      {
        var G = (O) => {
          var R = Tp(), P = l(R);
          D(() => le(P, e.color.hex)), o(O, R);
        };
        x(j, (O) => {
          e.showHex && O(G);
        });
      }
      var B = f(A, 2);
      {
        var I = (O) => {
          var R = Ep(), P = l(R);
          D(() => le(P, e.color.description)), o(O, R);
        };
        x(B, (O) => {
          e.color.description && O(I);
        });
      }
      D(() => le(H, e.color.name)), o(Z, w);
    };
    x(N, (Z) => {
      e.layout === "grid" ? Z(S) : Z(k, !1);
    });
  }
  var b = f(N, 2);
  {
    var q = (Z) => {
      var w = Ap();
      o(Z, w);
    };
    x(b, (Z) => {
      e.copiedColor === e.color.hex && Z(q);
    });
  }
  Ie(z, (Z, w) => zt?.(Z, w), () => e.animate ? y.jellyHover : void 0), tt(1, z, () => Wt, () => e.animate ? y.springPop : void 0), o(r, z), Ye();
}
var Pp = /* @__PURE__ */ c('<div class="mb-6"><!></div>'), Lp = /* @__PURE__ */ c('<div class="space-y-3"><h3 class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"> </h3> <div></div></div>'), Dp = /* @__PURE__ */ c("<div></div>"), Rp = /* @__PURE__ */ c("<div><!> <!></div>");
function Qx(r, e) {
  Ue(e, !0);
  const a = s(e, "theme", 3, "both"), n = s(e, "layout", 3, "grid"), i = s(e, "interactive", 3, !0), d = s(e, "showHex", 3, !0), v = s(e, "showCategories", 3, !0), p = s(e, "animate", 3, !0), y = s(e, "class", 3, ""), z = /* @__PURE__ */ ct(e, [
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
  ]), g = [
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
  ], S = (() => {
    switch (a()) {
      case "terminal":
        return g;
      case "bubbleTea":
        return L;
      case "both":
      default:
        return [...g, ...L];
    }
  })(), k = [...new Set(S.map((I) => I.category))];
  let b = /* @__PURE__ */ _e(null);
  const q = async (I) => {
    if (i())
      try {
        await navigator.clipboard.writeText(I), K(b, I, !0), setTimeout(
          () => {
            K(b, null);
          },
          2e3
        );
      } catch (O) {
        console.error("Failed to copy color to clipboard:", O);
      }
  }, Z = (I) => {
    q(I.hex), e.onColorSelect?.(I);
  }, w = () => n() === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "flex flex-col gap-2";
  var A = Rp();
  Je(A, () => ({
    class: (
      // Cleanup: removed former __markUsed scaffold and no-op $effect (unnecessary analyzer suppression)
      `space-y-6 ${y()}`
    ),
    ...z
  }));
  var W = l(A);
  {
    var H = (I) => {
      var O = Pp(), R = l(O);
      lt(R, () => e.children), o(I, O);
    };
    x(W, (I) => {
      e.children && I(H);
    });
  }
  var j = f(W, 2);
  {
    var G = (I) => {
      var O = Ce(), R = ge(O);
      Xe(R, 16, () => k, (P) => P, (P, C) => {
        var M = Lp(), m = l(M), _ = l(m), F = f(m, 2);
        Xe(F, 21, () => S.filter((Y) => Y.category === C), (Y) => Y.hex, (Y, T) => {
          {
            let u = /* @__PURE__ */ we(() => S.indexOf(t(T))), h = /* @__PURE__ */ we(() => g.includes(t(T)));
            go(Y, {
              get color() {
                return t(T);
              },
              get layout() {
                return n();
              },
              get interactive() {
                return i();
              },
              get showHex() {
                return d();
              },
              get animate() {
                return p();
              },
              get copiedColor() {
                return t(b);
              },
              get colorIndex() {
                return t(u);
              },
              get isTerminal() {
                return t(h);
              },
              onColorClick: Z
            });
          }
        }), D(
          (Y) => {
            le(_, C), U(F, 1, Y);
          },
          [() => oe(w())]
        ), o(P, M);
      }), o(I, O);
    }, B = (I) => {
      var O = Dp();
      Xe(O, 21, () => S, (R) => R.hex, (R, P) => {
        {
          let C = /* @__PURE__ */ we(() => S.indexOf(t(P))), M = /* @__PURE__ */ we(() => g.includes(t(P)));
          go(R, {
            get color() {
              return t(P);
            },
            get layout() {
              return n();
            },
            get interactive() {
              return i();
            },
            get showHex() {
              return d();
            },
            get animate() {
              return p();
            },
            get copiedColor() {
              return t(b);
            },
            get colorIndex() {
              return t(C);
            },
            get isTerminal() {
              return t(M);
            },
            onColorClick: Z
          });
        }
      }), D((R) => U(O, 1, R), [() => oe(w())]), o(I, O);
    };
    x(j, (I) => {
      v() ? I(G) : I(B, !1);
    });
  }
  o(r, A), Ye();
}
var jp = /* @__PURE__ */ c("<span><!></span>");
const Np = {
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
function Jx(r, e) {
  Ue(e, !0), $e(r, Np);
  const a = s(e, "variant", 3, "bubbleTea"), n = s(e, "color", 3, "pink"), i = s(e, "intensity", 3, "normal"), d = s(e, "animate", 3, !0), v = s(e, "pulse", 3, !1), p = s(e, "class", 3, ""), y = /* @__PURE__ */ ct(e, [
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
  ]), g = re((() => {
    const b = "font-mono transition-all duration-300";
    if (a() === "terminal")
      switch (n()) {
        case "matrix":
          return re(b, "text-terminal-green", i() === "intense" ? "glow-terminal-matrix-intense" : "glow-terminal-matrix");
        case "cyan":
          return re(b, "text-terminal-cyan", i() === "intense" ? "glow-terminal-cyan-intense" : "glow-terminal-cyan");
        default:
          return re(b, "text-terminal-green", "glow-terminal-matrix");
      }
    const q = {
      pink: i() === "intense" ? "text-bubble-tea-glow-pink glow-bubble-tea-pink-intense" : "text-bubble-tea-glow-pink glow-bubble-tea-pink",
      purple: i() === "intense" ? "text-bubble-tea-glow-purple glow-bubble-tea-purple-intense" : "text-bubble-tea-glow-purple glow-bubble-tea-purple",
      blue: i() === "intense" ? "text-bubble-tea-glow-blue glow-bubble-tea-blue-intense" : "text-bubble-tea-glow-blue glow-bubble-tea-blue",
      cyan: i() === "intense" ? "text-bubble-tea-glow-cyan glow-bubble-tea-cyan-intense" : "text-bubble-tea-glow-cyan glow-bubble-tea-cyan",
      green: i() === "intense" ? "text-bubble-tea-glow-green glow-bubble-tea-green-intense" : "text-bubble-tea-glow-green glow-bubble-tea-green",
      yellow: i() === "intense" ? "text-bubble-tea-glow-yellow glow-bubble-tea-yellow-intense" : "text-bubble-tea-glow-yellow glow-bubble-tea-yellow",
      orange: i() === "intense" ? "text-bubble-tea-glow-orange glow-bubble-tea-orange-intense" : "text-bubble-tea-glow-orange glow-bubble-tea-orange",
      red: i() === "intense" ? "text-bubble-tea-glow-red glow-bubble-tea-red-intense" : "text-bubble-tea-glow-red glow-bubble-tea-red"
    };
    return n() === "matrix" ? re(b, q.pink) : re(b, q[n()]);
  })(), d() && "hover:scale-105", v() && "animate-pulse", p());
  var L = jp();
  Je(L, () => ({ class: g, ...y }), void 0, void 0, "svelte-1s7z1ns");
  var N = l(L);
  {
    var S = (b) => {
      var q = Ce(), Z = ge(q);
      lt(Z, () => e.children), o(b, q);
    }, k = (b) => {
      var q = Ce(), Z = ge(q);
      {
        var w = (A) => {
          var W = Ct();
          D(() => le(W, e.text)), o(A, W);
        };
        x(
          Z,
          (A) => {
            e.text && A(w);
          },
          !0
        );
      }
      o(b, q);
    };
    x(N, (b) => {
      e.children ? b(S) : b(k, !1);
    });
  }
  o(r, L), Ye();
}
var qp = /* @__PURE__ */ c("<span>•</span> <span> </span>", 1), Op = /* @__PURE__ */ c('<div class="flex items-center gap-1 svelte-chof7v"><span> </span> <span> </span></div>'), Fp = /* @__PURE__ */ c("<div></div>"), Bp = /* @__PURE__ */ c("<div><!></div>"), Hp = /* @__PURE__ */ c('<div><div class="flex items-center gap-4 svelte-chof7v"><div class="flex items-center gap-2 svelte-chof7v"><span> </span> <!></div> <!></div> <div class="flex items-center gap-4 svelte-chof7v"><div class="hidden md:flex items-center gap-2 svelte-chof7v"><span> </span> <span>•</span> <span> </span></div> <div class="md:hidden svelte-chof7v"><span> </span></div> <!></div></div>');
const Vp = {
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
function $x(r, e) {
  Ue(e, !0), $e(r, Vp);
  const a = s(e, "status", 3, "Ready"), n = s(e, "encoding", 3, "UTF-8"), i = s(e, "position", 3, "1:1"), d = s(e, "lineNumber", 3, 1), v = s(e, "columnNumber", 3, 1), p = s(e, "fileType", 3, "TypeScript"), y = s(e, "variant", 3, "bubbleTea"), z = s(e, "size", 3, "md"), g = s(e, "indicators", 19, () => []), L = s(e, "class", 3, ""), N = s(e, "autoLayout", 3, !0), S = /* @__PURE__ */ ct(e, [
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
  ht(() => {
    if (N() && k) {
      const ee = () => {
        const ae = k.offsetHeight;
        document.documentElement.style.setProperty("--status-bar-height", `${ae}px`);
      };
      ee();
      const V = new ResizeObserver(ee);
      return V.observe(k), () => {
        V.disconnect(), document.documentElement.style.removeProperty("--status-bar-height");
      };
    }
  });
  const b = {
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
  }, q = { sm: "px-3 py-1 text-xs", md: "px-4 py-2 text-sm" }, Z = (ee) => {
    switch (ee) {
      case "error":
        return y() === "bubbleTea" ? "text-bubble-tea-red" : "text-red-400";
      case "warning":
        return y() === "bubbleTea" ? "text-bubble-tea-yellow" : "text-yellow-400";
      case "success":
        return y() === "bubbleTea" ? "text-bubble-tea-green" : "text-green-400";
      default:
        return b[y()].text;
    }
  }, w = b[y()], A = re("fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm", y() === "bubbleTea" ? "rounded-t-bubble-tea" : "rounded-t-lg", y() === "bubbleTea" ? "status-bar-bubble-tea" : "", w.background, q[z()]), W = re(A, L());
  var H = Hp();
  Je(
    H,
    () => ({
      class: W,
      role: "status",
      "aria-live": "polite",
      ...S
    }),
    void 0,
    void 0,
    "svelte-chof7v"
  );
  var j = l(H), G = l(j), B = l(G), I = l(B), O = f(B, 2);
  {
    var R = (ee) => {
      var V = qp(), ae = ge(V), E = f(ae, 2), Q = l(E);
      D(
        ($, J) => {
          U(ae, 1, $, "svelte-chof7v"), U(E, 1, J, "svelte-chof7v"), le(Q, p());
        },
        [
          () => oe(re("text-xs", w.accent)),
          () => oe(re("text-xs", w.accent))
        ]
      ), o(ee, V);
    };
    x(O, (ee) => {
      p() && ee(R);
    });
  }
  var P = f(G, 2);
  {
    var C = (ee) => {
      var V = Fp();
      Xe(V, 21, g, (ae) => ae.label, (ae, E) => {
        var Q = Op(), $ = l(Q), J = l($), se = f($, 2), X = l(se);
        D(
          (ne, ue) => {
            U($, 1, ne, "svelte-chof7v"), le(J, `${t(E).label ?? ""}:`), U(se, 1, ue, "svelte-chof7v"), le(X, t(E).value);
          },
          [
            () => oe(re("text-xs font-medium", Z(t(E).type))),
            () => oe(re("text-xs", w.text))
          ]
        ), o(ae, Q);
      }), D((ae) => U(V, 1, ae, "svelte-chof7v"), [
        () => oe(re("hidden sm:flex items-center gap-3 border-l pl-4", w.separator))
      ]), o(ee, V);
    };
    x(P, (ee) => {
      g().length > 0 && ee(C);
    });
  }
  var M = f(j, 2), m = l(M), _ = l(m), F = l(_), Y = f(_, 2), T = f(Y, 2), u = l(T), h = f(m, 2), te = l(h), ie = l(te), ce = f(h, 2);
  {
    var de = (ee) => {
      var V = Bp(), ae = l(V);
      lt(ae, () => e.children), D((E) => U(V, 1, E, "svelte-chof7v"), [() => oe(re("border-l pl-4", w.separator))]), o(ee, V);
    };
    x(ce, (ee) => {
      e.children && ee(de);
    });
  }
  rt(H, (ee) => k = ee, () => k), D(
    (ee, V, ae, E, Q) => {
      U(B, 1, ee, "svelte-chof7v"), le(I, a()), U(_, 1, V, "svelte-chof7v"), le(F, `Line ${d() ?? ""}, Col ${v() ?? ""}`), U(Y, 1, ae, "svelte-chof7v"), U(T, 1, E, "svelte-chof7v"), le(u, n()), U(te, 1, Q, "svelte-chof7v"), le(ie, i());
    },
    [
      () => oe(re("font-medium", w.text)),
      () => oe(re("text-xs", w.accent)),
      () => oe(re("text-xs", w.accent)),
      () => oe(re("text-xs", w.accent)),
      () => oe(re("text-xs", w.accent))
    ]
  ), o(r, H), Ye();
}
export {
  Sx as $,
  Zp as A,
  ln as B,
  rr as C,
  Jp as D,
  $p as E,
  ex as F,
  Fd as G,
  nx as H,
  tx as I,
  ox as J,
  lx as K,
  cx as L,
  ax as M,
  vx as N,
  ux as O,
  ix as P,
  fx as Q,
  sx as R,
  dx as S,
  bx as T,
  gx as U,
  mx as V,
  hx as W,
  px as X,
  xx as Y,
  _x as Z,
  Cx as _,
  $e as a,
  Tx as a0,
  Ex as a1,
  Mx as a2,
  Ax as a3,
  zx as a4,
  Ix as a5,
  Px as a6,
  Lx as a7,
  Dx as a8,
  Rx as a9,
  wx as aA,
  yx as aB,
  kx as aC,
  Me as aD,
  Bd as aE,
  Hd as aF,
  Vd as aG,
  Gd as aH,
  Ud as aI,
  Nn as aJ,
  Yd as aK,
  Wd as aL,
  Kd as aM,
  Xd as aN,
  rx as aO,
  pt as aP,
  zt as aQ,
  Tt as aR,
  Wt as aS,
  _t as aT,
  jt as aU,
  Pa as aV,
  Mm as aa,
  jx as ab,
  Nx as ac,
  qx as ad,
  Ox as ae,
  Fx as af,
  Bx as ag,
  Rh as ah,
  Hx as ai,
  Zh as aj,
  Vx as ak,
  Gx as al,
  Ux as am,
  Yx as an,
  Wx as ao,
  Kx as ap,
  Xx as aq,
  Zx as ar,
  Qx as as,
  Jx as at,
  $x as au,
  Bt as av,
  _i as aw,
  $u as ax,
  e0 as ay,
  t0 as az,
  s as b,
  st as c,
  l as d,
  Xe as e,
  c as f,
  f as g,
  rt as h,
  x as i,
  _r as j,
  t as k,
  o as l,
  Ye as m,
  K as n,
  oe as o,
  Ue as p,
  re as q,
  U as r,
  _e as s,
  D as t,
  le as u,
  gt as v,
  Ce as w,
  ge as x,
  lt as y,
  Qp as z
};
