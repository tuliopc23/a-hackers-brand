import { AlertCircle as Cn, Info as li, XCircle as si, CheckCircle2 as di, X as sa, Minus as Qn, Check as Ya, ChevronDown as an, TrendingDown as ci, TrendingUp as vi, Activity as En, ChevronLeft as da, ChevronRight as Rr, ChevronsLeft as ui, ChevronsRight as fi, Search as bi, Pause as gi, Play as hi } from "lucide-svelte";
import { onMount as wt, createEventDispatcher as Tt } from "svelte";
import { T as zt } from "@threlte/core";
import { OrbitControls as mi, HTML as pi } from "@threlte/extras";
const xi = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(xi);
const _a = 1, wa = 2, Jn = 4, _i = 8, wi = 16, yi = 1, ki = 4, Ci = 8, Ei = 16, Si = 1, Ti = 2, Mi = 4, Ai = 1, zi = 2, St = Symbol(), Ii = Symbol("filename"), Pi = "http://www.w3.org/1999/xhtml", Li = "http://www.w3.org/2000/svg", Di = "@attach", $n = typeof window < "u", Sn = globalThis.process?.env?.NODE_ENV, Ye = Sn && !Sn.toLowerCase().startsWith("prod");
var ya = Array.isArray, Ri = Array.prototype.indexOf, eo = Array.from, gr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, to = Object.getOwnPropertyDescriptors, ji = Object.prototype, Ni = Array.prototype, nn = Object.getPrototypeOf;
function Oi(r) {
  return typeof r == "function";
}
const Pt = () => {
};
function ro(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function qi() {
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
const Ot = 2, on = 4, ln = 8, Br = 16, cr = 32, Fr = 64, ao = 128, Ft = 256, ca = 512, At = 1024, Vt = 2048, vr = 4096, Xt = 8192, Mr = 16384, ka = 32768, Ar = 65536, va = 1 << 17, Bi = 1 << 18, sn = 1 << 19, no = 1 << 20, ua = 1 << 21, Ca = 1 << 22, yr = 1 << 23, or = Symbol("$state"), Fi = Symbol("legacy props"), Hi = Symbol(""), oo = Symbol("proxy path"), dn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Vi() {
  if (Ye) {
    const r = new Error("await_outside_boundary\nCannot await outside a `<svelte:boundary>` with a `pending` snippet\nhttps://svelte.dev/e/await_outside_boundary");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Gi() {
  if (Ye) {
    const r = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Tn() {
  if (Ye) {
    const r = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Ui() {
  if (Ye) {
    const r = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function Yi(r) {
  if (Ye) {
    const e = new Error(`effect_in_teardown
\`${r}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wi() {
  if (Ye) {
    const r = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ki(r) {
  if (Ye) {
    const e = new Error(`effect_orphan
\`${r}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xi() {
  if (Ye) {
    const r = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zi() {
  if (Ye) {
    const r = new Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/invalid_snippet");
}
function Qi(r) {
  if (Ye) {
    const e = new Error(`props_invalid_value
Cannot do \`bind:${r}={undefined}\` when \`${r}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ji(r) {
  if (Ye) {
    const e = new Error(`props_rest_readonly
Rest element properties of \`$props()\` such as \`${r}\` are readonly
https://svelte.dev/e/props_rest_readonly`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/props_rest_readonly");
}
function $i(r) {
  if (Ye) {
    const e = new Error(`rune_outside_svelte
The \`${r}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function el() {
  if (Ye) {
    const r = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function tl() {
  if (Ye) {
    const r = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rl() {
  if (Ye) {
    const r = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw r.name = "Svelte error", r;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var io = "font-weight: bold", lo = "font-weight: normal";
function al(r) {
  Ye ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${r}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, io, lo) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function nl() {
  Ye ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", io, lo) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let ol = !1;
function so(r) {
  return r === this.v;
}
function cn(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function co(r) {
  return !cn(r, this.v);
}
let il = !1;
function vo(r) {
  let e = Error();
  const a = e.stack;
  if (!a) return null;
  const n = a.split(`
`), l = [`
`];
  for (let d = 0; d < n.length; d++) {
    const u = n[d];
    if (u !== "Error") {
      if (u.includes("validate_each_keys"))
        return null;
      u.includes("svelte/src/internal") || l.push(u);
    }
  }
  return l.length === 1 ? null : (gr(e, "stack", {
    value: l.join(`
`)
  }), gr(e, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${r}Error`
  }), /** @type {Error & { stack: string }} */
  e);
}
function fr(r, e) {
  return r.label = e, uo(r.v, e), r;
}
function uo(r, e) {
  return r?.[oo]?.(e), r;
}
let Ht = null;
function fa(r) {
  Ht = r;
}
let ba = null;
function Mn(r) {
  ba = r;
}
let ea = null;
function An(r) {
  ea = r;
}
function Ke(r, e = !1, a) {
  Ht = {
    p: Ht,
    c: null,
    e: null,
    s: r,
    x: null,
    l: null
  }, Ye && (Ht.function = a, ea = a);
}
function Xe(r) {
  var e = (
    /** @type {ComponentContext} */
    Ht
  ), a = e.e;
  if (a !== null) {
    e.e = null;
    for (var n of a)
      So(n);
  }
  return r !== void 0 && (e.x = r), Ht = e.p, Ye && (ea = Ht?.function ?? null), r ?? /** @type {T} */
  {};
}
function fo() {
  return !0;
}
const Wa = /* @__PURE__ */ new WeakMap();
function ll(r) {
  var e = it;
  if (e === null)
    return ct.f |= yr, r;
  if (Ye && r instanceof Error && !Wa.has(r) && Wa.set(r, sl(r, e)), (e.f & ka) === 0) {
    if ((e.f & ao) === 0)
      throw !e.parent && r instanceof Error && bo(r), r;
    e.b.error(r);
  } else
    vn(r, e);
}
function vn(r, e) {
  for (; e !== null; ) {
    if ((e.f & ao) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (a) {
        r = a;
      }
    e = e.parent;
  }
  throw r instanceof Error && bo(r), r;
}
function sl(r, e) {
  const a = Wr(r, "message");
  if (!(a && !a.configurable)) {
    for (var n = "	", l = `
${n}in ${e.fn?.name || "<unknown>"}`, d = e.ctx; d !== null; )
      l += `
${n}in ${d.function?.[Ii].split("/").pop()}`, d = d.p;
    return {
      message: r.message + `
${l}
`,
      stack: r.stack?.split(`
`).filter((u) => !u.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function bo(r) {
  const e = Wa.get(r);
  e && (gr(r, "message", {
    value: e.message
  }), gr(r, "stack", {
    value: e.stack
  }));
}
let ga = [];
function dl() {
  var r = ga;
  ga = [], ro(r);
}
function ta(r) {
  ga.length === 0 && queueMicrotask(dl), ga.push(r);
}
function cl() {
  for (var r = (
    /** @type {Effect} */
    it.b
  ); r !== null && !r.has_pending_snippet(); )
    r = r.parent;
  return r === null && Vi(), r;
}
let kr = null;
function go(r) {
  kr = r;
}
const vl = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Ea(r) {
  var e = Ot | Vt, a = ct !== null && (ct.f & Ot) !== 0 ? (
    /** @type {Derived} */
    ct
  ) : null;
  return it === null || a !== null && (a.f & Ft) !== 0 ? e |= Ft : it.f |= sn, {
    ctx: Ht,
    deps: null,
    effects: null,
    equals: so,
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
function ul(r, e) {
  let a = (
    /** @type {Effect | null} */
    it
  );
  a === null && Gi();
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
  ), u = null, p = !ct;
  return zl(() => {
    Ye && (kr = it);
    try {
      var A = r();
    } catch (z) {
      A = Promise.reject(z);
    }
    Ye && (kr = null);
    var N = () => A;
    l = u?.then(N, N) ?? Promise.resolve(A), u = l;
    var m = (
      /** @type {Batch} */
      mt
    ), I = n.pending;
    p && (n.update_pending_count(1), I || m.increment());
    const R = (z, _ = void 0) => {
      u = null, kr = null, I || m.activate(), _ ? _ !== dn && (d.f |= yr, Jr(d, _)) : ((d.f & yr) !== 0 && (d.f ^= yr), Jr(d, z)), p && (n.update_pending_count(-1), I || m.decrement()), xo();
    };
    if (l.then(R, (z) => R(null, z || "unknown")), m)
      return () => {
        queueMicrotask(() => m.neuter());
      };
  }), Ye && (d.f |= Ca), new Promise((A) => {
    function N(m) {
      function I() {
        m === l ? A(d) : N(l);
      }
      m.then(I, I);
    }
    N(l);
  });
}
// @__NO_SIDE_EFFECTS__
function Ee(r) {
  const e = /* @__PURE__ */ Ea(r);
  return Lo(e), e;
}
// @__NO_SIDE_EFFECTS__
function ho(r) {
  const e = /* @__PURE__ */ Ea(r);
  return e.equals = co, e;
}
function Ka(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var a = 0; a < e.length; a += 1)
      Gt(
        /** @type {Effect} */
        e[a]
      );
  }
}
let qa = [];
function fl(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & Ot) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function un(r) {
  var e, a = it;
  if (ir(fl(r)), Ye) {
    let n = qr;
    Pn(/* @__PURE__ */ new Set());
    try {
      qa.includes(r) && Ui(), qa.push(r), Ka(r), e = Za(r);
    } finally {
      ir(a), Pn(n), qa.pop();
    }
  } else
    try {
      Ka(r), e = Za(r);
    } finally {
      ir(a);
    }
  return e;
}
function mo(r) {
  var e = un(r);
  if (r.equals(e) || (r.v = e, r.wv = Ro()), !Pr)
    if (Or !== null)
      Or.set(r, r.v);
    else {
      var a = (br || (r.f & Ft) !== 0) && r.deps !== null ? vr : At;
      Lt(r, a);
    }
}
function po(r, e, a) {
  const n = Ea;
  if (e.length === 0) {
    a(r.map(n));
    return;
  }
  var l = mt, d = (
    /** @type {Effect} */
    it
  ), u = bl(), p = cl();
  Promise.all(e.map((A) => /* @__PURE__ */ ul(A))).then((A) => {
    l?.activate(), u();
    try {
      a([...r.map(n), ...A]);
    } catch (N) {
      (d.f & Mr) === 0 && vn(N, d);
    }
    l?.deactivate(), xo();
  }).catch((A) => {
    p.error(A);
  });
}
function bl() {
  var r = it, e = ct, a = Ht;
  return function() {
    ir(r), tr(e), fa(a), Ye && go(null);
  };
}
function xo() {
  ir(null), tr(null), fa(null), Ye && go(null);
}
const Gr = /* @__PURE__ */ new Set();
let mt = null, la = null, Or = null, zn = /* @__PURE__ */ new Set(), ha = [];
function _o() {
  const r = (
    /** @type {() => void} */
    ha.shift()
  );
  ha.length > 0 && queueMicrotask(_o), r();
}
let Xr = [], fn = null, Xa = !1;
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
      a = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map();
      for (const [d, u] of this.current)
        a.set(d, { v: d.v, wv: d.wv }), d.v = u;
      for (const d of Gr)
        if (d !== this)
          for (const [u, p] of d.#n)
            a.has(u) || (a.set(u, { v: u.v, wv: u.wv }), u.v = p);
    }
    for (const d of e)
      this.#b(d);
    if (this.#r.length === 0 && this.#e === 0) {
      this.#f();
      var n = this.#a, l = this.#t;
      this.#a = [], this.#t = [], this.#l = [], la = mt, mt = null, In(n), In(l), mt === null ? mt = this : Gr.delete(this), this.#d?.resolve();
    } else
      this.#s(this.#a), this.#s(this.#t), this.#s(this.#l);
    if (a) {
      for (const [d, { v: u, wv: p }] of a)
        d.wv <= p && (d.v = u);
      Or = null;
    }
    for (const d of this.#r)
      Nr(d);
    for (const d of this.#i)
      Nr(d);
    this.#r = [], this.#i = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #b(e) {
    e.f ^= At;
    for (var a = e.first; a !== null; ) {
      var n = a.f, l = (n & (cr | Fr)) !== 0, d = l && (n & At) !== 0, u = d || (n & Xt) !== 0 || this.skipped_effects.has(a);
      if (!u && a.fn !== null) {
        if (l)
          a.f ^= At;
        else if ((n & At) === 0)
          if ((n & on) !== 0)
            this.#t.push(a);
          else if ((n & Ca) !== 0) {
            var p = a.b?.pending ? this.#i : this.#r;
            p.push(a);
          } else ra(a) && ((a.f & Br) !== 0 && this.#l.push(a), Nr(a));
        var A = a.first;
        if (A !== null) {
          a = A;
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
      ((a.f & Vt) !== 0 ? this.#v : this.#u).push(a), Lt(a, At);
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
    mt = this;
  }
  deactivate() {
    mt = null, la = null;
    for (const e of zn)
      if (zn.delete(e), e(), mt !== null)
        break;
  }
  neuter() {
    this.#c = !0;
  }
  flush() {
    Xr.length > 0 ? gl() : this.#f(), mt === this && (this.#e === 0 && Gr.delete(this), this.deactivate());
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
        Lt(e, Vt), Sr(e);
      for (const e of this.#u)
        Lt(e, vr), Sr(e);
      this.#a = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#o.add(e);
  }
  settled() {
    return (this.#d ??= qi()).promise;
  }
  static ensure() {
    if (mt === null) {
      const e = mt = new Zr();
      Gr.add(mt), Zr.enqueue(() => {
        mt === e && e.flush();
      });
    }
    return mt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ha.length === 0 && queueMicrotask(_o), ha.unshift(e);
  }
}
function gl() {
  var r = jr;
  Xa = !0;
  try {
    var e = 0;
    for (Rn(!0); Xr.length > 0; ) {
      var a = Zr.ensure();
      if (e++ > 1e3) {
        if (Ye) {
          var n = /* @__PURE__ */ new Map();
          for (const d of a.current.keys())
            for (const [u, p] of d.updated ?? []) {
              var l = n.get(u);
              l || (l = { error: p.error, count: 0 }, n.set(u, l)), l.count += p.count;
            }
          for (const d of n.values())
            console.error(d.error);
        }
        hl();
      }
      a.process(Xr), Cr.clear();
    }
  } finally {
    Xa = !1, Rn(r), fn = null;
  }
}
function hl() {
  try {
    Xi();
  } catch (r) {
    Ye && gr(r, "stack", { value: "" }), vn(r, fn);
  }
}
function In(r) {
  var e = r.length;
  if (e !== 0) {
    for (var a = 0; a < e; ) {
      var n = r[a++];
      if ((n.f & (Mr | Xt)) === 0 && ra(n)) {
        var l = mt ? mt.current.size : 0;
        if (Nr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? zo(n) : n.fn = null), mt !== null && mt.current.size > l && (n.f & no) !== 0)
          break;
      }
    }
    for (; a < e; )
      Sr(r[a++]);
  }
}
function Sr(r) {
  for (var e = fn = r; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (Xa && e === it && (a & Br) !== 0)
      return;
    if ((a & (Fr | cr)) !== 0) {
      if ((a & At) === 0) return;
      e.f ^= At;
    }
  }
  Xr.push(e);
}
let qr = /* @__PURE__ */ new Set();
const Cr = /* @__PURE__ */ new Map();
function Pn(r) {
  qr = r;
}
let bn = !1;
function ml() {
  bn = !0;
}
function Qr(r, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: so,
    rv: 0,
    wv: 0
  };
  return a;
}
// @__NO_SIDE_EFFECTS__
function ye(r, e) {
  const a = Qr(r);
  return Lo(a), a;
}
// @__NO_SIDE_EFFECTS__
function wo(r, e = !1, a = !0) {
  const n = Qr(r);
  return e || (n.equals = co), n;
}
function W(r, e, a = !1) {
  ct !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Wt || (ct.f & va) !== 0) && fo() && (ct.f & (Ot | Br | Ca | va)) !== 0 && !lr?.includes(r) && rl();
  let n = a ? st(e) : e;
  return Ye && uo(
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
        const l = vo("UpdatedAt");
        if (l !== null) {
          r.updated ??= /* @__PURE__ */ new Map();
          let d = r.updated.get(l.stack);
          d || (d = { error: l, count: 0 }, r.updated.set(l.stack, d)), d.count++;
        }
      }
      it !== null && (r.set_during_effect = !0);
    }
    (r.f & Ot) !== 0 && ((r.f & Vt) !== 0 && un(
      /** @type {Derived} */
      r
    ), Lt(r, (r.f & Ft) === 0 ? At : vr)), r.wv = Ro(), ko(r, Vt), it !== null && (it.f & At) !== 0 && (it.f & (cr | Fr)) === 0 && (Bt === null ? Pl([r]) : Bt.push(r)), Ye && qr.size > 0 && !bn && yo();
  }
  return e;
}
function yo() {
  bn = !1;
  const r = Array.from(qr);
  for (const e of r)
    (e.f & At) !== 0 && Lt(e, vr), ra(e) && Nr(e);
  qr.clear();
}
function Sa(r, e = 1) {
  var a = t(r), n = e === 1 ? a++ : a--;
  return W(r, a), n;
}
function Ba(r) {
  W(r, r.v + 1);
}
function ko(r, e) {
  var a = r.reactions;
  if (a !== null)
    for (var n = a.length, l = 0; l < n; l++) {
      var d = a[l], u = d.f;
      if (Ye && (u & va) !== 0) {
        qr.add(d);
        continue;
      }
      var p = (u & Vt) === 0;
      p && Lt(d, e), (u & Ot) !== 0 ? ko(
        /** @type {Derived} */
        d,
        vr
      ) : p && Sr(
        /** @type {Effect} */
        d
      );
    }
}
const pl = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function st(r) {
  if (typeof r != "object" || r === null || or in r)
    return r;
  const e = nn(r);
  if (e !== ji && e !== Ni)
    return r;
  var a = /* @__PURE__ */ new Map(), n = ya(r), l = /* @__PURE__ */ ye(0), d = Er, u = (N) => {
    if (Er === d)
      return N();
    var m = ct, I = Er;
    tr(null), Nn(d);
    var R = N();
    return tr(m), Nn(I), R;
  };
  n && (a.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    r.length
  )), Ye && (r = /** @type {any} */
  wl(
    /** @type {any[]} */
    r
  )));
  var p = "";
  function A(N) {
    p = N, fr(l, `${p} version`);
    for (const [m, I] of a)
      fr(I, xr(p, m));
  }
  return new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(N, m, I) {
        (!("value" in I) || I.configurable === !1 || I.enumerable === !1 || I.writable === !1) && el();
        var R = a.get(m);
        return R === void 0 ? R = u(() => {
          var z = /* @__PURE__ */ ye(I.value);
          return a.set(m, z), Ye && typeof m == "string" && fr(z, xr(p, m)), z;
        }) : W(R, I.value, !0), !0;
      },
      deleteProperty(N, m) {
        var I = a.get(m);
        if (I === void 0) {
          if (m in N) {
            const R = u(() => /* @__PURE__ */ ye(St));
            a.set(m, R), Ba(l), Ye && fr(R, xr(p, m));
          }
        } else
          W(I, St), Ba(l);
        return !0;
      },
      get(N, m, I) {
        if (m === or)
          return r;
        if (Ye && m === oo)
          return A;
        var R = a.get(m), z = m in N;
        if (R === void 0 && (!z || Wr(N, m)?.writable) && (R = u(() => {
          var f = st(z ? N[m] : St), q = /* @__PURE__ */ ye(f);
          return Ye && fr(q, xr(p, m)), q;
        }), a.set(m, R)), R !== void 0) {
          var _ = t(R);
          return _ === St ? void 0 : _;
        }
        return Reflect.get(N, m, I);
      },
      getOwnPropertyDescriptor(N, m) {
        var I = Reflect.getOwnPropertyDescriptor(N, m);
        if (I && "value" in I) {
          var R = a.get(m);
          R && (I.value = t(R));
        } else if (I === void 0) {
          var z = a.get(m), _ = z?.v;
          if (z !== void 0 && _ !== St)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return I;
      },
      has(N, m) {
        if (m === or)
          return !0;
        var I = a.get(m), R = I !== void 0 && I.v !== St || Reflect.has(N, m);
        if (I !== void 0 || it !== null && (!R || Wr(N, m)?.writable)) {
          I === void 0 && (I = u(() => {
            var _ = R ? st(N[m]) : St, f = /* @__PURE__ */ ye(_);
            return Ye && fr(f, xr(p, m)), f;
          }), a.set(m, I));
          var z = t(I);
          if (z === St)
            return !1;
        }
        return R;
      },
      set(N, m, I, R) {
        var z = a.get(m), _ = m in N;
        if (n && m === "length")
          for (var f = I; f < /** @type {Source<number>} */
          z.v; f += 1) {
            var q = a.get(f + "");
            q !== void 0 ? W(q, St) : f in N && (q = u(() => /* @__PURE__ */ ye(St)), a.set(f + "", q), Ye && fr(q, xr(p, f)));
          }
        if (z === void 0)
          (!_ || Wr(N, m)?.writable) && (z = u(() => /* @__PURE__ */ ye(void 0)), W(z, st(I)), a.set(m, z), Ye && fr(z, xr(p, m)));
        else {
          _ = z.v !== St;
          var ee = u(() => st(I));
          W(z, ee);
        }
        var w = Reflect.getOwnPropertyDescriptor(N, m);
        if (w?.set && w.set.call(R, I), !_) {
          if (n && typeof m == "string") {
            var E = (
              /** @type {Source<number>} */
              a.get("length")
            ), B = Number(m);
            Number.isInteger(B) && B >= E.v && W(E, B + 1);
          }
          Ba(l);
        }
        return !0;
      },
      ownKeys(N) {
        t(l);
        var m = Reflect.ownKeys(N).filter((z) => {
          var _ = a.get(z);
          return _ === void 0 || _.v !== St;
        });
        for (var [I, R] of a)
          R.v !== St && !(I in N) && m.push(I);
        return m;
      },
      setPrototypeOf() {
        tl();
      }
    }
  );
}
function xr(r, e) {
  return typeof e == "symbol" ? `${r}[Symbol(${e.description ?? ""})]` : pl.test(e) ? `${r}.${e}` : /^\d+$/.test(e) ? `${r}[${e}]` : `${r}['${e}']`;
}
function Ln(r) {
  try {
    if (r !== null && typeof r == "object" && or in r)
      return r[or];
  } catch {
  }
  return r;
}
function xl(r, e) {
  return Object.is(Ln(r), Ln(e));
}
const _l = /* @__PURE__ */ new Set([
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
function wl(r) {
  return new Proxy(r, {
    get(e, a, n) {
      var l = Reflect.get(e, a, n);
      return _l.has(
        /** @type {string} */
        a
      ) ? function(...d) {
        ml();
        var u = l.apply(this, d);
        return yo(), u;
      } : l;
    }
  });
}
var Co, yl, kl, Cl;
function zr(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function er(r) {
  return kl.call(r);
}
// @__NO_SIDE_EFFECTS__
function Ta(r) {
  return Cl.call(r);
}
function i(r, e) {
  return /* @__PURE__ */ er(r);
}
function _e(r, e) {
  {
    var a = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ er(
        /** @type {Node} */
        r
      )
    );
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ Ta(a) : a;
  }
}
function h(r, e = 1, a = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ta(n);
  return n;
}
function El(r) {
  r.textContent = "";
}
function gn() {
  return !1;
}
function Sl(r, e) {
  if (e) {
    const a = document.body;
    r.autofocus = !0, ta(() => {
      document.activeElement === a && r.focus();
    });
  }
}
let Dn = !1;
function Tl() {
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
function Hr(r) {
  var e = ct, a = it;
  tr(null), ir(null);
  try {
    return r();
  } finally {
    tr(e), ir(a);
  }
}
function Eo(r, e, a, n = a) {
  r.addEventListener(e, () => Hr(a));
  const l = r.__on_r;
  l ? r.__on_r = () => {
    l(), n(!0);
  } : r.__on_r = () => n(!0), Tl();
}
function Ml(r) {
  it === null && ct === null && Ki(r), ct !== null && (ct.f & Ft) !== 0 && it === null && Wi(), Pr && Yi(r);
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
  l !== null && (l.f & Xt) !== 0 && (r |= Xt);
  var d = {
    ctx: Ht,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | Vt,
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
      Nr(d), d.f |= ka;
    } catch (A) {
      throw Gt(d), A;
    }
  else e !== null && Sr(d);
  var u = a && d.deps === null && d.first === null && d.nodes_start === null && d.teardown === null && (d.f & sn) === 0;
  if (!u && n && (l !== null && Al(d, l), ct !== null && (ct.f & Ot) !== 0 && (r & Fr) === 0)) {
    var p = (
      /** @type {Derived} */
      ct
    );
    (p.effects ??= []).push(d);
  }
  return d;
}
function hn(r) {
  const e = hr(ln, null, !1);
  return Lt(e, At), e.teardown = r, e;
}
function bt(r) {
  Ml("$effect"), Ye && gr(r, "name", {
    value: "$effect"
  });
  var e = (
    /** @type {Effect} */
    it.f
  ), a = !ct && (e & cr) !== 0 && (e & ka) === 0;
  if (a) {
    var n = (
      /** @type {ComponentContext} */
      Ht
    );
    (n.e ??= []).push(r);
  } else
    return So(r);
}
function So(r) {
  return hr(on | no, r, !1);
}
function ur(r) {
  return hr(on, r, !1);
}
function zl(r) {
  return hr(Ca | sn, r, !0);
}
function Ma(r, e = 0) {
  return hr(ln | e, r, !0);
}
function M(r, e = [], a = []) {
  po(e, a, (n) => {
    hr(ln, () => r(...n.map(t)), !0);
  });
}
function Ir(r, e = 0) {
  var a = hr(Br | e, r, !0);
  return Ye && (a.dev_stack = ba), a;
}
function sr(r, e = !0) {
  return hr(cr, r, !0, e);
}
function To(r) {
  var e = r.teardown;
  if (e !== null) {
    const a = Pr, n = ct;
    jn(!0), tr(null);
    try {
      e.call(null);
    } finally {
      jn(a), tr(n);
    }
  }
}
function Mo(r, e = !1) {
  var a = r.first;
  for (r.first = r.last = null; a !== null; ) {
    const l = a.ac;
    l !== null && Hr(() => {
      l.abort(dn);
    });
    var n = a.next;
    (a.f & Fr) !== 0 ? a.parent = null : Gt(a, e), a = n;
  }
}
function Il(r) {
  for (var e = r.first; e !== null; ) {
    var a = e.next;
    (e.f & cr) === 0 && Gt(e), e = a;
  }
}
function Gt(r, e = !0) {
  var a = !1;
  (e || (r.f & Bi) !== 0) && r.nodes_start !== null && r.nodes_end !== null && (Ao(
    r.nodes_start,
    /** @type {TemplateNode} */
    r.nodes_end
  ), a = !0), Mo(r, e && !a), ma(r, 0), Lt(r, Mr);
  var n = r.transitions;
  if (n !== null)
    for (const d of n)
      d.stop();
  To(r);
  var l = r.parent;
  l !== null && l.first !== null && zo(r), Ye && (r.component_function = null), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes_start = r.nodes_end = r.ac = null;
}
function Ao(r, e) {
  for (; r !== null; ) {
    var a = r === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(r)
    );
    r.remove(), r = a;
  }
}
function zo(r) {
  var e = r.parent, a = r.prev, n = r.next;
  a !== null && (a.next = n), n !== null && (n.prev = a), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = a));
}
function Aa(r, e) {
  var a = [];
  mn(r, a, !0), Io(a, () => {
    Gt(r), e && e();
  });
}
function Io(r, e) {
  var a = r.length;
  if (a > 0) {
    var n = () => --a || e();
    for (var l of r)
      l.out(n);
  } else
    e();
}
function mn(r, e, a) {
  if ((r.f & Xt) === 0) {
    if (r.f ^= Xt, r.transitions !== null)
      for (const u of r.transitions)
        (u.is_global || a) && e.push(u);
    for (var n = r.first; n !== null; ) {
      var l = n.next, d = (n.f & Ar) !== 0 || (n.f & cr) !== 0;
      mn(n, e, d ? a : !1), n = l;
    }
  }
}
function za(r) {
  Po(r, !0);
}
function Po(r, e) {
  if ((r.f & Xt) !== 0) {
    r.f ^= Xt, (r.f & At) === 0 && (Lt(r, Vt), Sr(r));
    for (var a = r.first; a !== null; ) {
      var n = a.next, l = (a.f & Ar) !== 0 || (a.f & cr) !== 0;
      Po(a, l ? e : !1), a = n;
    }
    if (r.transitions !== null)
      for (const d of r.transitions)
        (d.is_global || e) && d.in();
  }
}
let jr = !1;
function Rn(r) {
  jr = r;
}
let Pr = !1;
function jn(r) {
  Pr = r;
}
let ct = null, Wt = !1;
function tr(r) {
  ct = r;
}
let it = null;
function ir(r) {
  it = r;
}
let lr = null;
function Lo(r) {
  ct !== null && (lr === null ? lr = [r] : lr.push(r));
}
let It = null, jt = 0, Bt = null;
function Pl(r) {
  Bt = r;
}
let Do = 1, $r = 0, Er = $r;
function Nn(r) {
  Er = r;
}
let br = !1;
function Ro() {
  return ++Do;
}
function ra(r) {
  var e = r.f;
  if ((e & Vt) !== 0)
    return !0;
  if ((e & vr) !== 0) {
    var a = r.deps, n = (e & Ft) !== 0;
    if (a !== null) {
      var l, d, u = (e & ca) !== 0, p = n && it !== null && !br, A = a.length;
      if ((u || p) && (it === null || (it.f & Mr) === 0)) {
        var N = (
          /** @type {Derived} */
          r
        ), m = N.parent;
        for (l = 0; l < A; l++)
          d = a[l], (u || !d?.reactions?.includes(N)) && (d.reactions ??= []).push(N);
        u && (N.f ^= ca), p && m !== null && (m.f & Ft) === 0 && (N.f ^= Ft);
      }
      for (l = 0; l < A; l++)
        if (d = a[l], ra(
          /** @type {Derived} */
          d
        ) && mo(
          /** @type {Derived} */
          d
        ), d.wv > r.wv)
          return !0;
    }
    (!n || it !== null && !br) && Lt(r, At);
  }
  return !1;
}
function jo(r, e, a = !0) {
  var n = r.reactions;
  if (n !== null && !lr?.includes(r))
    for (var l = 0; l < n.length; l++) {
      var d = n[l];
      (d.f & Ot) !== 0 ? jo(
        /** @type {Derived} */
        d,
        e,
        !1
      ) : e === d && (a ? Lt(d, Vt) : (d.f & At) !== 0 && Lt(d, vr), Sr(
        /** @type {Effect} */
        d
      ));
    }
}
function Za(r) {
  var e = It, a = jt, n = Bt, l = ct, d = br, u = lr, p = Ht, A = Wt, N = Er, m = r.f;
  It = /** @type {null | Value[]} */
  null, jt = 0, Bt = null, br = (m & Ft) !== 0 && (Wt || !jr || ct === null), ct = (m & (cr | Fr)) === 0 ? r : null, lr = null, fa(r.ctx), Wt = !1, Er = ++$r, r.ac !== null && (Hr(() => {
    r.ac.abort(dn);
  }), r.ac = null);
  try {
    r.f |= ua;
    var I = (
      /** @type {Function} */
      r.fn
    ), R = I(), z = r.deps;
    if (It !== null) {
      var _;
      if (ma(r, jt), z !== null && jt > 0)
        for (z.length = jt + It.length, _ = 0; _ < It.length; _++)
          z[jt + _] = It[_];
      else
        r.deps = z = It;
      if (!br || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (m & Ot) !== 0 && /** @type {import('#client').Derived} */
      r.reactions !== null)
        for (_ = jt; _ < z.length; _++)
          (z[_].reactions ??= []).push(r);
    } else z !== null && jt < z.length && (ma(r, jt), z.length = jt);
    if (fo() && Bt !== null && !Wt && z !== null && (r.f & (Ot | vr | Vt)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      Bt.length; _++)
        jo(
          Bt[_],
          /** @type {Effect} */
          r
        );
    return l !== null && l !== r && ($r++, Bt !== null && (n === null ? n = Bt : n.push(.../** @type {Source[]} */
    Bt))), (r.f & yr) !== 0 && (r.f ^= yr), R;
  } catch (f) {
    return ll(f);
  } finally {
    r.f ^= ua, It = e, jt = a, Bt = n, ct = l, br = d, lr = u, fa(p), Wt = A, Er = N;
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
  a === null && (e.f & Ot) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (It === null || !It.includes(e)) && (Lt(e, vr), (e.f & (Ft | ca)) === 0 && (e.f ^= ca), Ka(
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
function Nr(r) {
  var e = r.f;
  if ((e & Mr) === 0) {
    Lt(r, At);
    var a = it, n = jr;
    if (it = r, jr = !0, Ye) {
      var l = ea;
      An(r.component_function);
      var d = (
        /** @type {any} */
        ba
      );
      Mn(r.dev_stack ?? ba);
    }
    try {
      (e & Br) !== 0 ? Il(r) : Mo(r), To(r);
      var u = Za(r);
      r.teardown = typeof u == "function" ? u : null, r.wv = Do;
      var p;
      Ye && il && (r.f & Vt) !== 0 && r.deps;
    } finally {
      jr = n, it = a, Ye && (An(l), Mn(d));
    }
  }
}
function t(r) {
  var e = r.f, a = (e & Ot) !== 0;
  if (ct !== null && !Wt) {
    var n = it !== null && (it.f & Mr) !== 0;
    if (!n && !lr?.includes(r)) {
      var l = ct.deps;
      if ((ct.f & ua) !== 0)
        r.rv < $r && (r.rv = $r, It === null && l !== null && l[jt] === r ? jt++ : It === null ? It = [r] : (!br || !It.includes(r)) && It.push(r));
      else {
        (ct.deps ??= []).push(r);
        var d = r.reactions;
        d === null ? r.reactions = [ct] : d.includes(ct) || d.push(ct);
      }
    }
  } else if (a && /** @type {Derived} */
  r.deps === null && /** @type {Derived} */
  r.effects === null) {
    var u = (
      /** @type {Derived} */
      r
    ), p = u.parent;
    p !== null && (p.f & Ft) === 0 && (u.f ^= Ft);
  }
  if (Ye) {
    if (kr) {
      var A = (kr.f & ua) !== 0, N = kr.deps?.includes(r);
      if (!A && !Wt && !N) {
        al(
          /** @type {string} */
          r.label
        );
        var m = vo("TracedAt");
        m && console.warn(m);
      }
    }
    vl.delete(r);
  }
  if (Pr) {
    if (Cr.has(r))
      return Cr.get(r);
    if (a) {
      u = /** @type {Derived} */
      r;
      var I = u.v;
      return ((u.f & At) === 0 && u.reactions !== null || No(u)) && (I = un(u)), Cr.set(u, I), I;
    }
  } else if (a) {
    if (u = /** @type {Derived} */
    r, Or?.has(u))
      return Or.get(u);
    ra(u) && mo(u);
  }
  if ((r.f & yr) !== 0)
    throw r.v;
  return r.v;
}
function No(r) {
  if (r.v === St) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Cr.has(e) || (e.f & Ot) !== 0 && No(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Lr(r) {
  var e = Wt;
  try {
    return Wt = !0, r();
  } finally {
    Wt = e;
  }
}
const Dl = -7169;
function Lt(r, e) {
  r.f = r.f & Dl | e;
}
function Rl(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (or in r)
      Qa(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const a = r[e];
        typeof a == "object" && a && or in a && Qa(a);
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
    const a = nn(r);
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
const jl = /* @__PURE__ */ new Set(), Nl = /* @__PURE__ */ new Set();
function Oo(r, e, a, n = {}) {
  function l(d) {
    if (n.capture || Ol.call(e, d), !d.cancelBubble)
      return Hr(() => a?.call(this, d));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? ta(() => {
    e.addEventListener(r, l, n);
  }) : e.addEventListener(r, l, n), l;
}
function Nt(r, e, a, n, l) {
  var d = { capture: n, passive: l }, u = Oo(r, e, a, d);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && hn(() => {
    e.removeEventListener(r, u, d);
  });
}
function vt(r) {
  for (var e = 0; e < r.length; e++)
    jl.add(r[e]);
  for (var a of Nl)
    a(r);
}
let On = null;
function Ol(r) {
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, l = r.composedPath?.() || [], d = (
    /** @type {null | Element} */
    l[0] || r.target
  );
  On = r;
  var u = 0, p = On === r && r.__root;
  if (p) {
    var A = l.indexOf(p);
    if (A !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var N = l.indexOf(e);
    if (N === -1)
      return;
    A <= N && (u = A);
  }
  if (d = /** @type {Element} */
  l[u] || r.target, d !== e) {
    gr(r, "currentTarget", {
      configurable: !0,
      get() {
        return d || a;
      }
    });
    var m = ct, I = it;
    tr(null), ir(null);
    try {
      for (var R, z = []; d !== null; ) {
        var _ = d.assignedSlot || d.parentNode || /** @type {any} */
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
        } catch (w) {
          R ? z.push(w) : R = w;
        }
        if (r.cancelBubble || _ === e || _ === null)
          break;
        d = _;
      }
      if (R) {
        for (let w of z)
          queueMicrotask(() => {
            throw w;
          });
        throw R;
      }
    } finally {
      r.__root = e, delete r.currentTarget, tr(m), ir(I);
    }
  }
}
function pn(r) {
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
  var a = (e & Ai) !== 0, n = (e & zi) !== 0, l, d = !r.startsWith("<!>");
  return () => {
    l === void 0 && (l = pn(d ? r : "<!>" + r), a || (l = /** @type {Node} */
    /* @__PURE__ */ er(l)));
    var u = (
      /** @type {TemplateNode} */
      n || yl ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (a) {
      var p = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(u)
      ), A = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Tr(p, A);
    } else
      Tr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ql(r, e, a = "svg") {
  var n = !r.startsWith("<!>"), l = `<${a}>${n ? r : "<!>" + r}</${a}>`, d;
  return () => {
    if (!d) {
      var u = (
        /** @type {DocumentFragment} */
        pn(l)
      ), p = (
        /** @type {Element} */
        /* @__PURE__ */ er(u)
      );
      d = /** @type {Element} */
      /* @__PURE__ */ er(p);
    }
    var A = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    return Tr(A, A), A;
  };
}
// @__NO_SIDE_EFFECTS__
function rr(r, e) {
  return /* @__PURE__ */ ql(r, e, "svg");
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
function Bl(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Fl = [
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
function Hl(r) {
  return Fl.includes(r);
}
const Vl = {
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
function Gl(r) {
  return r = r.toLowerCase(), Vl[r] ?? r;
}
let qo = !0;
function qn(r) {
  qo = r;
}
function ie(r, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (r.__t ??= r.nodeValue) && (r.__t = a, r.nodeValue = a + "");
}
function ot(r, e, ...a) {
  var n = r, l = Pt, d;
  Ir(() => {
    l !== (l = e()) && (d && (Gt(d), d = null), Ye && l == null && Zi(), d = sr(() => (
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
          $i(e);
        },
        set: (n) => {
          a = n;
        }
      });
    }
  };
  r("$state"), r("$effect"), r("$derived"), r("$inspect"), r("$props"), r("$bindable");
}
var Bn = /* @__PURE__ */ new Map();
function Ul(r, e) {
  var a = Bn.get(r);
  a || (a = /* @__PURE__ */ new Set(), Bn.set(r, a)), a.add(e);
}
function g(r, e, a = !1) {
  var n = r, l = null, d = null, u = St, p = a ? Ar : 0, A = !1;
  const N = (z, _ = !0) => {
    A = !0, R(_, z);
  };
  var m = null;
  function I() {
    m !== null && (m.lastChild.remove(), n.before(m), m = null);
    var z = u ? l : d, _ = u ? d : l;
    z && za(z), _ && Aa(_, () => {
      u ? d = null : l = null;
    });
  }
  const R = (z, _) => {
    if (u !== (u = z)) {
      var f = gn(), q = n;
      if (f && (m = document.createDocumentFragment(), m.append(q = zr())), u ? l ??= _ && sr(() => _(q)) : d ??= _ && sr(() => _(q)), f) {
        var ee = (
          /** @type {Batch} */
          mt
        ), w = u ? l : d, E = u ? d : l;
        w && ee.skipped_effects.delete(w), E && ee.skipped_effects.add(E), ee.add_callback(I);
      } else
        I();
    }
  };
  Ir(() => {
    A = !1, e(N), A || R(null, null);
  }, p);
}
function Vr(r, e) {
  return e;
}
function Yl(r, e, a) {
  for (var n = r.items, l = [], d = e.length, u = 0; u < d; u++)
    mn(e[u].e, l, !0);
  var p = d > 0 && l.length === 0 && a !== null;
  if (p) {
    var A = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    El(A), A.append(
      /** @type {Element} */
      a
    ), n.clear(), Jt(r, e[0].prev, e[d - 1].next);
  }
  Io(l, () => {
    for (var N = 0; N < d; N++) {
      var m = e[N];
      p || (n.delete(m.k), Jt(r, m.prev, m.next)), Gt(m.e, !p);
    }
  });
}
function Ge(r, e, a, n, l, d = null) {
  var u = r, p = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, A = (e & Jn) !== 0;
  if (A) {
    var N = (
      /** @type {Element} */
      r
    );
    u = N.appendChild(zr());
  }
  var m = null, I = !1, R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ ho(() => {
    var ee = a();
    return ya(ee) ? ee : ee == null ? [] : eo(ee);
  }), _, f;
  function q() {
    Wl(
      f,
      _,
      p,
      R,
      u,
      l,
      e,
      n,
      a
    ), d !== null && (_.length === 0 ? m ? za(m) : m = sr(() => d(u)) : m !== null && Aa(m, () => {
      m = null;
    }));
  }
  Ir(() => {
    f ??= /** @type {Effect} */
    it, _ = /** @type {V[]} */
    t(z);
    var ee = _.length;
    if (!(I && ee === 0)) {
      I = ee === 0;
      var w, E, B, F;
      if (gn()) {
        var D = /* @__PURE__ */ new Set(), V = (
          /** @type {Batch} */
          mt
        );
        for (E = 0; E < ee; E += 1) {
          B = _[E], F = n(B, E);
          var O = p.items.get(F) ?? R.get(F);
          O ? (e & (_a | wa)) !== 0 && Bo(O, B, E, e) : (w = Fo(
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
          ), R.set(F, w)), D.add(F);
        }
        for (const [P, Q] of p.items)
          D.has(P) || V.skipped_effects.add(Q.e);
        V.add_callback(q);
      } else
        q();
      t(z);
    }
  });
}
function Wl(r, e, a, n, l, d, u, p, A) {
  var N = (u & _i) !== 0, m = (u & (_a | wa)) !== 0, I = e.length, R = a.items, z = a.first, _ = z, f, q = null, ee, w = [], E = [], B, F, D, V;
  if (N)
    for (V = 0; V < I; V += 1)
      B = e[V], F = p(B, V), D = R.get(F), D !== void 0 && (D.a?.measure(), (ee ??= /* @__PURE__ */ new Set()).add(D));
  for (V = 0; V < I; V += 1) {
    if (B = e[V], F = p(B, V), D = R.get(F), D === void 0) {
      var O = n.get(F);
      if (O !== void 0) {
        n.delete(F), R.set(F, O);
        var P = q ? q.next : _;
        Jt(a, q, O), Jt(a, O, P), Fa(O, P, l), q = O;
      } else {
        var Q = _ ? (
          /** @type {TemplateNode} */
          _.e.nodes_start
        ) : l;
        q = Fo(
          Q,
          a,
          q,
          q === null ? a.first : q.next,
          B,
          F,
          V,
          d,
          u,
          A
        );
      }
      R.set(F, q), w = [], E = [], _ = q.next;
      continue;
    }
    if (m && Bo(D, B, V, u), (D.e.f & Xt) !== 0 && (za(D.e), N && (D.a?.unfix(), (ee ??= /* @__PURE__ */ new Set()).delete(D))), D !== _) {
      if (f !== void 0 && f.has(D)) {
        if (w.length < E.length) {
          var G = E[0], L;
          q = G.prev;
          var T = w[0], y = w[w.length - 1];
          for (L = 0; L < w.length; L += 1)
            Fa(w[L], G, l);
          for (L = 0; L < E.length; L += 1)
            f.delete(E[L]);
          Jt(a, T.prev, y.next), Jt(a, q, T), Jt(a, y, G), _ = G, q = y, V -= 1, w = [], E = [];
        } else
          f.delete(D), Fa(D, _, l), Jt(a, D.prev, D.next), Jt(a, D, q === null ? a.first : q.next), Jt(a, q, D), q = D;
        continue;
      }
      for (w = [], E = []; _ !== null && _.k !== F; )
        (_.e.f & Xt) === 0 && (f ??= /* @__PURE__ */ new Set()).add(_), E.push(_), _ = _.next;
      if (_ === null)
        continue;
      D = _;
    }
    w.push(D), q = D, _ = D.next;
  }
  if (_ !== null || f !== void 0) {
    for (var x = f === void 0 ? [] : eo(f); _ !== null; )
      (_.e.f & Xt) === 0 && x.push(_), _ = _.next;
    var C = x.length;
    if (C > 0) {
      var X = (u & Jn) !== 0 && I === 0 ? l : null;
      if (N) {
        for (V = 0; V < C; V += 1)
          x[V].a?.measure();
        for (V = 0; V < C; V += 1)
          x[V].a?.fix();
      }
      Yl(a, x, X);
    }
  }
  N && ta(() => {
    if (ee !== void 0)
      for (D of ee)
        D.a?.apply();
  }), r.first = a.first && a.first.e, r.last = q && q.e;
  for (var K of n.values())
    Gt(K.e);
  n.clear();
}
function Bo(r, e, a, n) {
  (n & _a) !== 0 && Jr(r.v, e), (n & wa) !== 0 ? Jr(
    /** @type {Value<number>} */
    r.i,
    a
  ) : r.i = a;
}
function Fo(r, e, a, n, l, d, u, p, A, N, m) {
  var I = (A & _a) !== 0, R = (A & wi) === 0, z = I ? R ? /* @__PURE__ */ wo(l, !1, !1) : Qr(l) : l, _ = (A & wa) === 0 ? u : Qr(u);
  Ye && I && (z.trace = () => {
    var ee = typeof _ == "number" ? u : _.v;
    N()[ee];
  });
  var f = {
    i: _,
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
    return f.e = sr(() => p(
      /** @type {Node} */
      r,
      z,
      _,
      N
    ), ol), f.e.prev = a && a.e, f.e.next = n && n.e, a === null ? m || (e.first = f) : (a.next = f, a.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
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
    var u = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(d)
    );
    l.before(d), d = u;
  }
}
function Jt(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function Ia(r, e, a = !1, n = !1, l = !1) {
  var d = r, u = "";
  M(() => {
    var p = (
      /** @type {Effect} */
      it
    );
    if (u !== (u = e() ?? "") && (p.nodes_start !== null && (Ao(
      p.nodes_start,
      /** @type {TemplateNode} */
      p.nodes_end
    ), p.nodes_start = p.nodes_end = null), u !== "")) {
      var A = u + "";
      a ? A = `<svg>${A}</svg>` : n && (A = `<math>${A}</math>`);
      var N = pn(A);
      if ((a || n) && (N = /** @type {Element} */
      /* @__PURE__ */ er(N)), Tr(
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(N),
        /** @type {TemplateNode} */
        N.lastChild
      ), a || n)
        for (; /* @__PURE__ */ er(N); )
          d.before(
            /** @type {Node} */
            /* @__PURE__ */ er(N)
          );
      else
        d.before(N);
    }
  });
}
function Et(r, e, a) {
  var n = r, l, d, u = null, p = null;
  function A() {
    d && (Aa(d), d = null), u && (u.lastChild.remove(), n.before(u), u = null), d = p, p = null;
  }
  Ir(() => {
    if (l !== (l = e())) {
      var N = gn();
      if (l) {
        var m = n;
        N && (u = document.createDocumentFragment(), u.append(m = zr()), d && mt.skipped_effects.add(d)), p = sr(() => a(m, l));
      }
      N ? mt.add_callback(A) : A();
    }
  }, Ar);
}
function Kl(r, e, a, n, l, d) {
  var u, p, A = null, N = (
    /** @type {TemplateNode} */
    r
  ), m;
  Ir(() => {
    const I = e() || null;
    var R = I === "svg" ? Li : null;
    I !== u && (m && (I === null ? Aa(m, () => {
      m = null, p = null;
    }) : I === p ? za(m) : (Gt(m), qn(!1))), I && I !== p && (m = sr(() => {
      if (A = R ? document.createElementNS(R, I) : document.createElement(I), Tr(A, A), n) {
        var z = (
          /** @type {TemplateNode} */
          A.appendChild(zr())
        );
        n(A, z);
      }
      it.nodes_end = A, N.before(A);
    })), u = I, u && (p = u), qn(!0));
  }, Ar);
}
function Qe(r, e) {
  ur(() => {
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
      l.id = e.hash, l.textContent = e.code, n.appendChild(l), Ye && Ul(e.hash, l);
    }
  });
}
function Ie(r, e, a) {
  ur(() => {
    var n = Lr(() => e(r, a?.()) || {});
    if (a && n?.update) {
      var l = !1, d = (
        /** @type {any} */
        {}
      );
      Ma(() => {
        var u = a();
        Rl(u), l && cn(d, u) && (d = u, n.update(u));
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
  Ir(() => {
    a !== (a = e()) && (n && (Gt(n), n = null), a && (n = sr(() => {
      ur(() => (
        /** @type {(node: Element) => void} */
        a(r)
      ));
    })));
  });
}
function Ho(r) {
  var e, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var l = r.length;
    for (e = 0; e < l; e++) r[e] && (a = Ho(r[e])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function Zl() {
  for (var r, e, a = 0, n = "", l = arguments.length; a < l; a++) (r = arguments[a]) && (e = Ho(r)) && (n && (n += " "), n += e);
  return n;
}
function ne(r) {
  return typeof r == "object" ? Zl(r) : r ?? "";
}
const Fn = [...` 	
\r\f \v\uFEFF`];
function Ql(r, e, a) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), a) {
    for (var l in a)
      if (a[l])
        n = n ? n + " " + l : l;
      else if (n.length)
        for (var d = l.length, u = 0; (u = n.indexOf(l, u)) >= 0; ) {
          var p = u + d;
          (u === 0 || Fn.includes(n[u - 1])) && (p === n.length || Fn.includes(n[p])) ? n = (u === 0 ? "" : n.substring(0, u)) + n.substring(p + 1) : u = p;
        }
  }
  return n === "" ? null : n;
}
function Hn(r, e = !1) {
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
function Jl(r, e) {
  if (e) {
    var a = "", n, l;
    if (Array.isArray(e) ? (n = e[0], l = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var d = !1, u = 0, p = !1, A = [];
      n && A.push(...Object.keys(n).map(Ha)), l && A.push(...Object.keys(l).map(Ha));
      var N = 0, m = -1;
      const f = r.length;
      for (var I = 0; I < f; I++) {
        var R = r[I];
        if (p ? R === "/" && r[I - 1] === "*" && (p = !1) : d ? d === R && (d = !1) : R === "/" && r[I + 1] === "*" ? p = !0 : R === '"' || R === "'" ? d = R : R === "(" ? u++ : R === ")" && u--, !p && d === !1 && u === 0) {
          if (R === ":" && m === -1)
            m = I;
          else if (R === ";" || I === f - 1) {
            if (m !== -1) {
              var z = Ha(r.substring(N, m).trim());
              if (!A.includes(z)) {
                R !== ";" && I++;
                var _ = r.substring(N, I).trim();
                a += " " + _ + ";";
              }
            }
            N = I + 1, m = -1;
          }
        }
      }
    }
    return n && (a += Hn(n)), l && (a += Hn(l, !0)), a = a.trim(), a === "" ? null : a;
  }
  return r == null ? null : String(r);
}
function j(r, e, a, n, l, d) {
  var u = r.__className;
  if (u !== a || u === void 0) {
    var p = Ql(a, n, d);
    p == null ? r.removeAttribute("class") : e ? r.className = p : r.setAttribute("class", p), r.__className = a;
  } else if (d && l !== d)
    for (var A in d) {
      var N = !!d[A];
      (l == null || N !== !!l[A]) && r.classList.toggle(A, N);
    }
  return d;
}
function Va(r, e = {}, a, n) {
  for (var l in a) {
    var d = a[l];
    e[l] !== d && (a[l] == null ? r.style.removeProperty(l) : r.style.setProperty(l, d, n));
  }
}
function pt(r, e, a, n) {
  var l = r.__style;
  if (l !== e) {
    var d = Jl(e, n);
    d == null ? r.removeAttribute("style") : r.style.cssText = d, r.__style = e;
  } else n && (Array.isArray(n) ? (Va(r, a?.[0], n[0]), Va(r, a?.[1], n[1], "important")) : Va(r, a, n));
  return n;
}
function pa(r, e, a = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!ya(e))
      return nl();
    for (var n of r.options)
      n.selected = e.includes(Vn(n));
    return;
  }
  for (n of r.options) {
    var l = Vn(n);
    if (xl(l, e)) {
      n.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Vo(r) {
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
  }), hn(() => {
    e.disconnect();
  });
}
function Vn(r) {
  return "__value" in r ? r.__value : r.value;
}
const Ur = Symbol("class"), _r = Symbol("style"), Go = Symbol("is custom element"), Uo = Symbol("is html");
function $l(r, e) {
  var a = Pa(r);
  a.value === (a.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  r.value === e && (e !== 0 || r.nodeName !== "PROGRESS") || (r.value = e ?? "");
}
function Kt(r, e) {
  var a = Pa(r);
  a.checked !== (a.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (r.checked = e);
}
function es(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function xe(r, e, a, n) {
  var l = Pa(r);
  l[e] !== (l[e] = a) && (e === "loading" && (r[Hi] = a), a == null ? r.removeAttribute(e) : typeof a != "string" && Yo(r).includes(e) ? r[e] = a : r.setAttribute(e, a));
}
function ts(r, e, a, n, l = !1) {
  var d = Pa(r), u = d[Go], p = !d[Uo], A = e || {}, N = r.tagName === "OPTION";
  for (var m in e)
    m in a || (a[m] = null);
  a.class ? a.class = ne(a.class) : (n || a[Ur]) && (a.class = null), a[_r] && (a.style ??= null);
  var I = Yo(r);
  for (const w in a) {
    let E = a[w];
    if (N && w === "value" && E == null) {
      r.value = r.__value = "", A[w] = E;
      continue;
    }
    if (w === "class") {
      var R = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      j(r, R, E, n, e?.[Ur], a[Ur]), A[w] = E, A[Ur] = a[Ur];
      continue;
    }
    if (w === "style") {
      pt(r, E, e?.[_r], a[_r]), A[w] = E, A[_r] = a[_r];
      continue;
    }
    var z = A[w];
    if (!(E === z && !(E === void 0 && r.hasAttribute(w)))) {
      A[w] = E;
      var _ = w[0] + w[1];
      if (_ !== "$$")
        if (_ === "on") {
          const B = {}, F = "$$" + w;
          let D = w.slice(2);
          var f = Hl(D);
          if (Bl(D) && (D = D.slice(0, -7), B.capture = !0), !f && z) {
            if (E != null) continue;
            r.removeEventListener(D, A[F], B), A[F] = null;
          }
          if (E != null)
            if (f)
              r[`__${D}`] = E, vt([D]);
            else {
              let V = function(O) {
                A[w].call(this, O);
              };
              A[F] = Oo(D, r, V, B);
            }
          else f && (r[`__${D}`] = void 0);
        } else if (w === "style")
          xe(r, w, E);
        else if (w === "autofocus")
          Sl(
            /** @type {HTMLElement} */
            r,
            !!E
          );
        else if (!u && (w === "__value" || w === "value" && E != null))
          r.value = r.__value = E;
        else if (w === "selected" && N)
          es(
            /** @type {HTMLOptionElement} */
            r,
            E
          );
        else {
          var q = w;
          p || (q = Gl(q));
          var ee = q === "defaultValue" || q === "defaultChecked";
          if (E == null && !u && !ee)
            if (d[w] = null, q === "value" || q === "checked") {
              let B = (
                /** @type {HTMLInputElement} */
                r
              );
              const F = e === void 0;
              if (q === "value") {
                let D = B.defaultValue;
                B.removeAttribute(q), B.defaultValue = D, B.value = B.__value = F ? D : null;
              } else {
                let D = B.defaultChecked;
                B.removeAttribute(q), B.defaultChecked = D, B.checked = F ? D : !1;
              }
            } else
              r.removeAttribute(w);
          else ee || I.includes(q) && (u || typeof E != "string") ? (r[q] = E, q in d && (d[q] = St)) : typeof E != "function" && xe(r, q, E);
        }
    }
  }
  return A;
}
function Ze(r, e, a = [], n = [], l, d = !1) {
  po(a, n, (u) => {
    var p = void 0, A = {}, N = r.nodeName === "SELECT", m = !1;
    if (Ir(() => {
      var R = e(...u.map(t)), z = ts(r, p, R, l, d);
      m && N && "value" in R && pa(
        /** @type {HTMLSelectElement} */
        r,
        R.value
      );
      for (let f of Object.getOwnPropertySymbols(A))
        R[f] || Gt(A[f]);
      for (let f of Object.getOwnPropertySymbols(R)) {
        var _ = R[f];
        f.description === Di && (!p || _ !== p[f]) && (A[f] && Gt(A[f]), A[f] = sr(() => Xl(r, () => _))), z[f] = _;
      }
      p = z;
    }), N) {
      var I = (
        /** @type {HTMLSelectElement} */
        r
      );
      ur(() => {
        pa(
          I,
          /** @type {Record<string | symbol, any>} */
          p.value,
          !0
        ), Vo(I);
      });
    }
    m = !0;
  });
}
function Pa(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ??= {
      [Go]: r.nodeName.includes("-"),
      [Uo]: r.namespaceURI === Pi
    }
  );
}
var Gn = /* @__PURE__ */ new Map();
function Yo(r) {
  var e = Gn.get(r.nodeName);
  if (e) return e;
  Gn.set(r.nodeName, e = []);
  for (var a, n = r, l = Element.prototype; l !== n; ) {
    a = to(n);
    for (var d in a)
      a[d].set && e.push(d);
    n = nn(n);
  }
  return e;
}
const rs = $n ? () => performance.now() : () => Date.now(), nr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => ($n ? requestAnimationFrame : Pt)(r)
  ),
  now: () => rs(),
  tasks: /* @__PURE__ */ new Set()
};
function Wo() {
  const r = nr.now();
  nr.tasks.forEach((e) => {
    e.c(r) || (nr.tasks.delete(e), e.f());
  }), nr.tasks.size !== 0 && nr.tick(Wo);
}
function as(r) {
  let e;
  return nr.tasks.size === 0 && nr.tick(Wo), {
    promise: new Promise((a) => {
      nr.tasks.add(e = { c: r, f: a });
    }),
    abort() {
      nr.tasks.delete(e);
    }
  };
}
function oa(r, e) {
  Hr(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function ns(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function Un(r) {
  const e = {}, a = r.split(";");
  for (const n of a) {
    const [l, d] = n.split(":");
    if (!l || d === void 0) break;
    const u = ns(l.trim());
    e[u] = d.trim();
  }
  return e;
}
const os = (r) => r;
function $e(r, e, a, n) {
  var l = (r & Si) !== 0, d = (r & Ti) !== 0, u = l && d, p = (r & Mi) !== 0, A = u ? "both" : l ? "in" : "out", N, m = e.inert, I = e.style.overflow, R, z;
  function _() {
    return Hr(() => N ??= a()(e, n?.() ?? /** @type {P} */
    {}, {
      direction: A
    }));
  }
  var f = {
    is_global: p,
    in() {
      if (e.inert = m, !l) {
        z?.abort(), z?.reset?.();
        return;
      }
      d || R?.abort(), oa(e, "introstart"), R = Ja(e, _(), z, 1, () => {
        oa(e, "introend"), R?.abort(), R = N = void 0, e.style.overflow = I;
      });
    },
    out(E) {
      if (!d) {
        E?.(), N = void 0;
        return;
      }
      e.inert = !0, oa(e, "outrostart"), z = Ja(e, _(), R, 0, () => {
        oa(e, "outroend"), E?.();
      });
    },
    stop: () => {
      R?.abort(), z?.abort();
    }
  }, q = (
    /** @type {Effect} */
    it
  );
  if ((q.transitions ??= []).push(f), l && qo) {
    var ee = p;
    if (!ee) {
      for (var w = (
        /** @type {Effect | null} */
        q.parent
      ); w && (w.f & Ar) !== 0; )
        for (; (w = w.parent) && (w.f & Br) === 0; )
          ;
      ee = !w || (w.f & ka) !== 0;
    }
    ee && ur(() => {
      Lr(() => f.in());
    });
  }
}
function Ja(r, e, a, n, l) {
  var d = n === 1;
  if (Oi(e)) {
    var u, p = !1;
    return ta(() => {
      if (!p) {
        var q = e({ direction: d ? "in" : "out" });
        u = Ja(r, q, a, n, l);
      }
    }), {
      abort: () => {
        p = !0, u?.abort();
      },
      deactivate: () => u.deactivate(),
      reset: () => u.reset(),
      t: () => u.t()
    };
  }
  if (a?.deactivate(), !e?.duration)
    return l(), {
      abort: Pt,
      deactivate: Pt,
      reset: Pt,
      t: () => n
    };
  const { delay: A = 0, css: N, tick: m, easing: I = os } = e;
  var R = [];
  if (d && a === void 0 && (m && m(0, 1), N)) {
    var z = Un(N(0, 1));
    R.push(z, z);
  }
  var _ = () => 1 - n, f = r.animate(R, { duration: A, fill: "forwards" });
  return f.onfinish = () => {
    f.cancel();
    var q = a?.t() ?? 1 - n;
    a?.abort();
    var ee = n - q, w = (
      /** @type {number} */
      e.duration * Math.abs(ee)
    ), E = [];
    if (w > 0) {
      var B = !1;
      if (N)
        for (var F = Math.ceil(w / 16.666666666666668), D = 0; D <= F; D += 1) {
          var V = q + ee * I(D / F), O = Un(N(V, 1 - V));
          E.push(O), B ||= O.overflow === "hidden";
        }
      B && (r.style.overflow = "hidden"), _ = () => {
        var P = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          f.currentTime
        );
        return q + ee * I(P / w);
      }, m && as(() => {
        if (f.playState !== "running") return !1;
        var P = _();
        return m(P, 1 - P), !0;
      });
    }
    f = r.animate(E, { duration: w, fill: "forwards" }), f.onfinish = () => {
      _ = () => n, m?.(n, 1 - n), l();
    };
  }, {
    abort: () => {
      f && (f.cancel(), f.effect = null, f.onfinish = Pt);
    },
    deactivate: () => {
      l = Pt;
    },
    reset: () => {
      n === 0 && m?.(1, 0);
    },
    t: () => _()
  };
}
function mr(r, e, a = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Eo(r, "input", (l) => {
    Ye && r.type === "checkbox" && Tn();
    var d = l ? r.defaultValue : r.value;
    if (d = Ga(r) ? Ua(d) : d, a(d), mt !== null && n.add(mt), d !== (d = e())) {
      var u = r.selectionStart, p = r.selectionEnd;
      r.value = d ?? "", p !== null && (r.selectionStart = u, r.selectionEnd = Math.min(p, r.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Lr(e) == null && r.value && (a(Ga(r) ? Ua(r.value) : r.value), mt !== null && n.add(mt)), Ma(() => {
    Ye && r.type === "checkbox" && Tn();
    var l = e();
    if (r === document.activeElement) {
      var d = (
        /** @type {Batch} */
        la ?? mt
      );
      if (n.has(d))
        return;
    }
    Ga(r) && l === Ua(r.value) || r.type === "date" && !l && !r.value || l !== r.value && (r.value = l ?? "");
  });
}
function is(r, e, a = e) {
  Eo(r, "change", (n) => {
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
function Yn(r, e) {
  return r === e || r?.[or] === e;
}
function tt(r = {}, e, a, n) {
  return ur(() => {
    var l, d;
    return Ma(() => {
      l = d, d = [], Lr(() => {
        r !== a(...d) && (e(r, ...d), l && Yn(a(...l), r) && e(null, ...l));
      });
    }), () => {
      ta(() => {
        d && Yn(a(...d), r) && e(null, ...d);
      });
    };
  }), r;
}
function xn(r, e, a) {
  if (r == null)
    return e(void 0), a && a(void 0), Pt;
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
function ls(r, e) {
  return {
    subscribe: La(r, e).subscribe
  };
}
function La(r, e = Pt) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function l(p) {
    if (cn(r, p) && (r = p, a)) {
      const A = !Dr.length;
      for (const N of n)
        N[1](), Dr.push(N, r);
      if (A) {
        for (let N = 0; N < Dr.length; N += 2)
          Dr[N][0](Dr[N + 1]);
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
  function u(p, A = Pt) {
    const N = [p, A];
    return n.add(N), n.size === 1 && (a = e(l, d) || Pt), p(
      /** @type {T} */
      r
    ), () => {
      n.delete(N), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: l, update: d, subscribe: u };
}
function ss(r, e, a) {
  const n = !Array.isArray(r), l = n ? [r] : r;
  if (!l.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const d = e.length < 2;
  return ls(a, (u, p) => {
    let A = !1;
    const N = [];
    let m = 0, I = Pt;
    const R = () => {
      if (m)
        return;
      I();
      const _ = e(n ? N[0] : N, u, p);
      d ? u(_) : I = typeof _ == "function" ? _ : Pt;
    }, z = l.map(
      (_, f) => xn(
        _,
        (q) => {
          N[f] = q, m &= ~(1 << f), A && R();
        },
        () => {
          m |= 1 << f;
        }
      )
    );
    return A = !0, R(), function() {
      ro(z), I(), A = !1;
    };
  });
}
function Da(r) {
  let e;
  return xn(r, (a) => e = a)(), e;
}
let ia = !1, $a = Symbol();
function Ko(r, e, a) {
  const n = a[e] ??= {
    store: null,
    source: /* @__PURE__ */ wo(void 0),
    unsubscribe: Pt
  };
  if (Ye && (n.source.label = e), n.store !== r && !($a in a))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = Pt;
    else {
      var l = !0;
      n.unsubscribe = xn(r, (d) => {
        l ? n.source.v = d : W(n.source, d);
      }), l = !1;
    }
  return r && $a in a ? Da(r) : t(n.source);
}
function Xo() {
  const r = {};
  function e() {
    hn(() => {
      for (var a in r)
        r[a].unsubscribe();
      gr(r, $a, {
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
    return Ye && Ji(`${r.name}.${String(e)}`), !1;
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
  var l = (a & Ci) !== 0, d = (a & Ei) !== 0, u = (
    /** @type {V} */
    n
  ), p = !0, A = () => (p && (p = !1, u = d ? Lr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), u), N;
  if (l) {
    var m = or in r || Fi in r;
    N = Wr(r, e)?.set ?? (m && e in r ? (w) => r[e] = w : void 0);
  }
  var I, R = !1;
  l ? [I, R] = ds(() => (
    /** @type {V} */
    r[e]
  )) : I = /** @type {V} */
  r[e], I === void 0 && n !== void 0 && (I = A(), N && (Qi(e), N(I)));
  var z;
  if (z = () => {
    var w = (
      /** @type {V} */
      r[e]
    );
    return w === void 0 ? A() : (p = !0, w);
  }, (a & ki) === 0)
    return z;
  if (N) {
    var _ = r.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, E) {
        return arguments.length > 0 ? ((!E || _ || R) && N(E ? z() : w), w) : z();
      })
    );
  }
  var f = !1, q = ((a & yi) !== 0 ? Ea : ho)(() => (f = !1, z()));
  Ye && (q.label = e), l && t(q);
  var ee = (
    /** @type {Effect} */
    it
  );
  return (
    /** @type {() => V} */
    (function(w, E) {
      if (arguments.length > 0) {
        const B = E ? t(q) : l ? st(w) : w;
        return W(q, B), f = !0, u !== void 0 && (u = B), w;
      }
      return Pr && f || (ee.f & Mr) !== 0 ? q.v : t(q);
    })
  );
}
function Z(...r) {
  return r.filter(Boolean).join(" ");
}
const ft = (r, e) => {
  let a = { enabled: !0, strength: 0.1, scale: 1.02, ...e };
  function n(d) {
    if (!a.enabled) return;
    const u = r.getBoundingClientRect(), p = (d.clientX - u.left) / u.width - 0.5, A = (d.clientY - u.top) / u.height - 0.5;
    r.style.transform = `translate(${p * (a.strength ?? 0.1) * 20}px, ${A * (a.strength ?? 0.1) * 20}px) scale(${a.scale ?? 1.02})`;
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
}, Mt = (r, e) => {
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
function Ut(r, e = {}) {
  const { duration: a = 150, delay: n = 0, scale: l = 0.98 } = e;
  return {
    duration: a,
    delay: n,
    css: (d) => `transform: scale(${l + (1 - l) * d});`
  };
}
function ht(r, e = {}) {
  const { duration: a = 150, delay: n = 0, direction: l = "up", distance: d = 10, opacity: u = "light" } = e, p = l === "up" ? d : l === "down" ? -d : 0, A = u === "strong" ? 1 : u === "medium" ? 0.9 : u === "subtle" ? 0.8 : 0.7;
  return {
    duration: a,
    delay: n,
    css: (N) => `transform: translateY(${(1 - N) * p}px); opacity: ${N * A};`
  };
}
const Rt = (r, e) => {
  let a = 0, n = { enabled: !0, intensity: 0.02, speed: 3e3, ...e };
  const l = (d) => {
    if (!n.enabled) {
      a = requestAnimationFrame(l);
      return;
    }
    const u = 1 + Math.sin(d / (n.speed ?? 3e3) * Math.PI * 2) * (n.intensity ?? 0.02);
    r.style.transform = `scale(${u})`, a = requestAnimationFrame(l);
  };
  return a = requestAnimationFrame(l), {
    update(d) {
      n = { ...n, ...d };
    },
    destroy() {
      cancelAnimationFrame(a), r.style.transform = "";
    }
  };
}, xa = Mt, vs = /* @__PURE__ */ new Map();
function Zt(r, e) {
  if (typeof window < "u" && process.env.NODE_ENV === "development") {
    const a = {
      name: r,
      size: e,
      timestamp: Date.now()
    };
    vs.set(r, a), console.log(`📦 Bundle: ${r} (${e})`);
  }
}
var us = (r, e, a) => e(t(a).id), fs = (r, e, a) => e(r, t(a).id), bs = /* @__PURE__ */ c('<p class="svelte-1neysev">No content available</p>'), gs = /* @__PURE__ */ c('<div role="region"><!></div>'), hs = /* @__PURE__ */ c('<div><button type="button"><span class="text-left svelte-1neysev"> </span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="svelte-1neysev"></path></svg></button> <!></div>'), ms = /* @__PURE__ */ c("<div></div>");
const ps = {
  hash: "svelte-1neysev",
  code: `button[aria-expanded].svelte-1neysev {will-change:transform;}svg.svelte-1neysev {will-change:transform;}

	@media (prefers-reduced-motion: reduce) {.svelte-1neysev {transition:none;
			animation: none;will-change:auto;}
	}`
};
function D1(r, e) {
  Ke(e, !0), Qe(r, ps);
  const a = s(e, "items", 19, () => []), n = s(e, "multiple", 3, !1), l = s(e, "collapsible", 3, !0), d = s(e, "variant", 3, "glass"), u = s(e, "size", 3, "md"), p = s(e, "blur", 3, "md"), A = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), m = s(e, "defaultOpen", 19, () => []), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  let z = /* @__PURE__ */ ye(st(new Set(m())));
  const _ = `accordion-${Math.random().toString(36).substr(2, 9)}`, f = {
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
  function w(Q) {
    if (a().find((T) => T.id === Q)?.disabled) return;
    const L = t(z).has(Q);
    n() ? L ? (l() || t(z).size > 1) && t(z).delete(Q) : t(z).add(Q) : L && l() ? t(z).clear() : (t(z).clear(), t(z).add(Q)), W(z, new Set(t(z)), !0), e.onValueChange?.(Array.from(t(z)));
  }
  function E(Q, G) {
    if (!a().find((T) => T.id === G)?.disabled)
      switch (Q.key) {
        case "Enter":
        case " ":
          Q.preventDefault(), w(G);
          break;
        case "ArrowDown":
          Q.preventDefault(), B(G);
          break;
        case "ArrowUp":
          Q.preventDefault(), F(G);
          break;
        case "Home":
          Q.preventDefault(), D();
          break;
        case "End":
          Q.preventDefault(), V();
          break;
      }
  }
  function B(Q) {
    const G = a().filter((x) => !x.disabled), T = (G.findIndex((x) => x.id === Q) + 1) % G.length, y = G[T];
    O(y.id);
  }
  function F(Q) {
    const G = a().filter((x) => !x.disabled), L = G.findIndex((x) => x.id === Q), T = L === 0 ? G.length - 1 : L - 1, y = G[T];
    O(y.id);
  }
  function D() {
    const Q = a().find((G) => !G.disabled);
    Q && O(Q.id);
  }
  function V() {
    const Q = a().filter((L) => !L.disabled), G = Q[Q.length - 1];
    G && O(G.id);
  }
  function O(Q) {
    document.querySelector(`[data-accordion-header="${Q}"]`)?.focus();
  }
  bt(() => {
    Zt("Accordion", "medium");
  });
  var P = ms();
  Ze(P, (Q) => ({ class: Q, ...R }), [() => Z("w-full space-y-2", I())], void 0, "svelte-1neysev"), Ge(P, 23, a, (Q, G) => Q.id ?? G, (Q, G, L) => {
    const T = /* @__PURE__ */ Ee(() => t(z).has(t(G).id)), y = /* @__PURE__ */ Ee(() => t(L) === 0), x = /* @__PURE__ */ Ee(() => t(L) === a().length - 1), C = /* @__PURE__ */ Ee(() => `${_}-header-${t(G).id}`), X = /* @__PURE__ */ Ee(() => `${_}-content-${t(G).id}`);
    var K = hs(), k = i(K);
    k.__click = [us, w, G], k.__keydown = [fs, E, G];
    var v = i(k), b = i(v), re = h(v, 2);
    Ie(k, (ve, $) => kt?.(ve, $), () => A() && !N() && t(T) ? { blur: p(), opacity: "subtle" } : void 0);
    var de = h(k, 2);
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
        M(
          (te) => {
            xe($, "id", t(X)), xe($, "aria-labelledby", t(C)), j($, 1, te, "svelte-1neysev");
          },
          [
            () => ne(Z("border-t border-white/10 transition-all duration-200", f[u()].content, q[d()].content))
          ]
        ), $e(1, $, () => ht, () => ({
          direction: "down",
          distance: 10,
          duration: A() && !N() ? 200 : 0
        })), $e(2, $, () => ht, () => ({
          direction: "up",
          distance: 10,
          duration: A() && !N() ? 150 : 0
        })), o(ve, $);
      };
      g(de, (ve) => {
        t(T) && ve(ue);
      });
    }
    M(
      (ve, $, U) => {
        j(K, 1, ve, "svelte-1neysev"), xe(k, "id", t(C)), j(k, 1, $, "svelte-1neysev"), xe(k, "aria-expanded", t(T)), xe(k, "aria-controls", t(X)), xe(k, "aria-disabled", t(G).disabled), xe(k, "data-accordion-header", t(G).id), k.disabled = t(G).disabled, ie(b, t(G).title), j(re, 0, U, "svelte-1neysev");
      },
      [
        () => ne(Z("overflow-hidden transition-all duration-200", q[d()].container, d() === "glass" && ee[p()], t(y) && "rounded-t-brand-lg", t(x) && "rounded-b-brand-lg", !t(y) && !t(x) && t(L) > 0 && "rounded-none border-t-0")),
        () => ne(Z("w-full flex items-center justify-between transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium cursor-pointer", f[u()].header, q[d()].header, t(G).disabled && "opacity-50 cursor-not-allowed")),
        () => ne(Z("transition-transform duration-200 flex-shrink-0 ml-2", f[u()].icon, t(T) && "rotate-180"))
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
function R1(r, e) {
  Ke(e, !0), Qe(r, Es);
  const a = s(e, "variant", 3, "info"), n = s(e, "closable", 3, !1), l = s(e, "animated", 3, !0), d = s(e, "glow", 3, !0), u = s(e, "jelly", 3, !0), p = s(e, "icon", 3, !0), A = s(e, "position", 3, "static"), N = s(e, "placement", 3, "top-right"), m = s(e, "class", 3, ""), I = /* @__PURE__ */ dt(e, [
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
  let R = /* @__PURE__ */ ye(!0);
  const z = {
    success: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400/40",
      text: "text-green-300",
      icon: di,
      glow: "shadow-[0_0_30px_rgba(74,222,128,0.5)]"
    },
    error: {
      bg: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      border: "border-red-400/40",
      text: "text-red-300",
      icon: si,
      glow: "shadow-[0_0_30px_rgba(248,113,113,0.5)]"
    },
    warning: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      icon: Cn,
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.5)]"
    },
    info: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/40",
      text: "text-blue-300",
      icon: li,
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    terminal: {
      bg: "bg-gray-900/90",
      border: "border-green-400/40",
      text: "text-green-400",
      icon: Cn,
      glow: "shadow-[0_0_20px_rgba(74,222,128,0.6)]"
    }
  }, _ = {
    top: "top-4 left-1/2 -translate-x-1/2",
    bottom: "bottom-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  }, f = z[a()], q = f.icon;
  var ee = Se(), w = _e(ee);
  {
    var E = (B) => {
      var F = Cs();
      Ze(
        F,
        (C) => ({ class: C, ...I }),
        [
          () => Z("backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300", f.bg, f.border, d() && f.glow, A() === "fixed" && "fixed z-50", A() === "fixed" && _[N()], l() && "transform-gpu will-change-transform", m())
        ],
        void 0,
        "svelte-yqts08"
      );
      var D = i(F), V = i(D);
      {
        var O = (C) => {
          var X = _s(), K = i(X);
          q(K, { size: 20 }), M((k) => j(X, 1, k, "svelte-yqts08"), [
            () => ne(Z("flex-shrink-0 mt-0.5", f.text, l() && "animate-pulse"))
          ]), o(C, X);
        };
        g(V, (C) => {
          p() && C(O);
        });
      }
      var P = h(V, 2), Q = i(P);
      {
        var G = (C) => {
          var X = ws(), K = i(X);
          M(
            (k) => {
              j(X, 1, k, "svelte-yqts08"), ie(K, e.title);
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
      var L = h(Q, 2);
      {
        var T = (C) => {
          var X = ys(), K = i(X);
          M(
            (k) => {
              j(X, 1, k, "svelte-yqts08"), ie(K, e.description);
            },
            [
              () => ne(Z("text-sm mt-1 opacity-80", f.text))
            ]
          ), o(C, X);
        };
        g(L, (C) => {
          e.description && C(T);
        });
      }
      var y = h(P, 2);
      {
        var x = (C) => {
          var X = ks();
          X.__click = [xs, R, e];
          var K = i(X);
          sa(K, { size: 16 }), M((k) => j(X, 1, k, "svelte-yqts08"), [
            () => ne(Z("flex-shrink-0 p-1 rounded-lg transition-all duration-200", "hover:bg-white/10 hover:scale-110", f.text, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]), o(C, X);
        };
        g(y, (C) => {
          n() && C(x);
        });
      }
      Ie(F, (C, X) => jellyHover?.(C, X), () => ({
        enabled: u(),
        scale: 1.02,
        duration: 200,
        borderRadius: "16px"
      })), $e(3, F, () => ht, () => ({ duration: l() ? 300 : 0 })), o(B, F);
    };
    g(w, (B) => {
      t(R) && B(E);
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
function j1(r, e) {
  Ke(e, !0), Qe(r, zs);
  const a = s(e, "variant", 3, "default"), n = s(e, "size", 3, "md"), l = s(e, "glass", 3, !0), d = s(e, "blur", 3, "md"), u = s(e, "interactive", 3, !1), p = s(e, "animate", 3, !0), A = s(e, "reduceMotion", 3, !1), N = s(e, "class", 3, ""), m = /* @__PURE__ */ dt(e, [
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
  }, R = {
    sm: "px-2 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
    lg: "px-4 py-2 text-base font-medium"
  }, z = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, _ = "inline-flex items-center justify-center rounded-full border transition-all duration-200", f = l() ? `glass-subtle ${z[d()]}` : "", q = u() ? "cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent" : "", ee = Z(_, I[a()], R[n()], f, q, N());
  function w(V) {
    u() && (V.key === "Enter" || V.key === " ") && (V.preventDefault(), V.currentTarget?.dispatchEvent(new CustomEvent("click", { bubbles: !0 })));
  }
  bt(() => {
    Zt("Badge", "small");
  });
  var E = Se(), B = _e(E);
  {
    var F = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (L) => {
          var T = Ss();
          Ze(
            T,
            () => ({
              class: ee,
              type: "button",
              "aria-label": m["aria-label"] || `${a()} badge`,
              onkeydown: w,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var y = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(y, (C) => {
              e.children && C(x);
            });
          }
          Ie(T, (C, X) => kt?.(C, X), () => ({ blur: d(), opacity: "subtle" })), o(L, T);
        }, G = (L) => {
          var T = Ts();
          Ze(
            T,
            () => ({
              class: ee,
              role: "status",
              "aria-label": m["aria-label"] || `${a()} badge`,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var y = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(y, (C) => {
              e.children && C(x);
            });
          }
          $e(1, T, () => ht, () => ({ direction: "up", distance: 10 })), o(L, T);
        };
        g(P, (L) => {
          u() ? L(Q) : L(G, !1);
        });
      }
      o(V, O);
    }, D = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (L) => {
          var T = Ms();
          Ze(
            T,
            () => ({
              class: ee,
              type: "button",
              "aria-label": m["aria-label"] || `${a()} badge`,
              onkeydown: w,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var y = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(y, (C) => {
              e.children && C(x);
            });
          }
          o(L, T);
        }, G = (L) => {
          var T = As();
          Ze(
            T,
            () => ({
              class: ee,
              role: "status",
              "aria-label": m["aria-label"] || `${a()} badge`,
              ...m
            }),
            void 0,
            void 0,
            "svelte-17ytdye"
          );
          var y = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(y, (C) => {
              e.children && C(x);
            });
          }
          o(L, T);
        };
        g(
          P,
          (L) => {
            u() ? L(Q) : L(G, !1);
          },
          !0
        );
      }
      o(V, O);
    };
    g(B, (V) => {
      p() && !A() ? V(F) : V(D, !1);
    });
  }
  o(r, E), Xe();
}
const aa = typeof window < "u";
function en(r) {
  if (!aa || typeof localStorage > "u") return null;
  try {
    return localStorage.getItem(r);
  } catch {
    return null;
  }
}
function Yr(r, e) {
  if (!(!aa || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, e);
    } catch {
    }
}
function Zo(r) {
  if (!(!aa || typeof localStorage > "u"))
    try {
      localStorage.removeItem(r);
    } catch {
    }
}
const tn = {
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
function rn() {
  if (!aa || typeof window > "u" || !window.matchMedia)
    return "terminal";
  try {
    const r = window.matchMedia("(prefers-color-scheme: dark)"), e = window.matchMedia("(prefers-color-scheme: light)");
    return r.matches ? "terminal" : e.matches ? "bubbleTea" : "terminal";
  } catch {
    return "terminal";
  }
}
function Wn(r) {
  if (!aa || typeof window > "u" || !window.matchMedia)
    return () => {
    };
  try {
    const e = window.matchMedia("(prefers-color-scheme: dark)"), a = window.matchMedia("(prefers-color-scheme: light)"), n = () => {
      r(rn());
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
function wr(r) {
  return r === "auto";
}
function Is(r, e) {
  if (wr(r)) {
    const n = tn[e];
    return {
      displayName: `Auto (${n.displayName})`,
      description: `Automatically follows system preference. Currently: ${n.displayName}`,
      isAuto: !0
    };
  }
  const a = tn[r];
  return {
    displayName: a.displayName,
    description: a.description,
    isAuto: !1
  };
}
const Ps = () => {
  const r = en("ahb-theme") || "auto", { subscribe: e, set: a, update: n } = La(
    wr(r) ? rn() : r
  );
  let l = null;
  const d = (u) => {
    const p = wr(u) ? rn() : u;
    a(p), Yr("ahb-theme", u), wr(u) ? l || (l = Wn((A) => {
      a(A);
    })) : l && (l(), l = null);
  };
  return wr(r) && (l = Wn((u) => {
    a(u);
  })), {
    subscribe: e,
    getUserTheme: () => en("ahb-theme") || "auto",
    set: (u) => d(u),
    toggle: () => {
      const p = Da({ subscribe: e }) === "terminal" ? "bubbleTea" : "terminal";
      d(p);
    },
    setTerminal: () => d("terminal"),
    setBubbleTea: () => d("bubbleTea"),
    setAuto: () => d("auto"),
    reset: () => {
      Zo("ahb-theme"), d("auto");
    }
  };
}, dr = Ps(), Ls = () => {
  const r = en("ahb-contrast-mode") || "normal", { subscribe: e, set: a } = La(r);
  return {
    subscribe: e,
    set: (n) => {
      a(n), Yr("ahb-contrast-mode", n);
    },
    toggle: () => {
      const l = Da({ subscribe: e }) === "normal" ? "high" : "normal";
      a(l), Yr("ahb-contrast-mode", l);
    },
    setNormal: () => {
      a("normal"), Yr("ahb-contrast-mode", "normal");
    },
    setHigh: () => {
      a("high"), Yr("ahb-contrast-mode", "high");
    },
    reset: () => {
      Zo("ahb-contrast-mode"), a("normal");
    }
  };
}, Ds = Ls(), Qo = ss(
  [dr, Ds],
  ([r, e]) => {
    const a = tn[r], n = dr.getUserTheme(), l = e === "high" ? a.highContrastColors : a.colors;
    return {
      ...a,
      currentColors: l,
      userTheme: n,
      resolvedTheme: r
    };
  }
);
function Ra() {
  return Da(Qo)?.resolvedTheme || "terminal";
}
function Rs(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Ra()) {
    case "terminal":
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
    case "bubbleTea":
      return "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono";
    default:
      return "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10";
  }
}
function js(r) {
  if (r !== "auto" && r !== "theme")
    return r;
  switch (Ra()) {
    case "terminal":
      return "bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20";
    case "bubbleTea":
      return "bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono";
    default:
      return "glass-subtle border border-white/20 shadow-lg hover:shadow-xl";
  }
}
function Jo(r, e) {
  return r !== "auto" && r !== "theme" ? "" : Ra() === "bubbleTea" ? e && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[e] || "rounded-bubble-tea" : "";
}
function $o() {
  switch (Ra()) {
    case "terminal":
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    case "bubbleTea":
      return "focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
    default:
      return "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  }
}
var Ns = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Os = /* @__PURE__ */ c("<button><!> <!></button>"), qs = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-16dveyh" role="status"><span class="sr-only svelte-16dveyh">Loading...</span></div>'), Bs = /* @__PURE__ */ c("<button><!> <!></button>");
const Fs = {
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
function $t(r, e) {
  Ke(e, !0), Qe(r, Fs);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "loading", 3, !1), d = s(e, "icon", 3, !1), u = s(e, "animate", 3, !0), p = s(e, "jelly", 3, !0), A = s(e, "liquid", 3, !1), N = s(e, "class", 3, ""), m = s(e, "disabled", 3, !1), I = /* @__PURE__ */ dt(e, [
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
  ]), R = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Rs(a()) : z[a()] || z.default), z = {
    default: "bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    secondary: "bg-gradient-to-r from-terminal-purple to-terminal-pink hover:from-terminal-purple/90 hover:to-terminal-pink/90 text-white shadow-lg hover:shadow-xl border border-white/10",
    outline: "border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/80 backdrop-blur-sm",
    ghost: "hover:bg-terminal-green/10 text-terminal-green hover:text-terminal-green/90 backdrop-blur-sm",
    glass: "glass-medium glass-shimmer hover:glass-heavy text-white border border-white/20 shadow-2xl",
    "glass-dark": "glass-heavy border-terminal-green/30 hover:border-terminal-green/60 text-terminal-green shadow-2xl backdrop-blur-xl",
    terminal: "bg-terminal-bg border-2 border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/5 hover:border-terminal-green/80 shadow-lg hover:shadow-terminal-green/20",
    liquid: "bg-gradient-to-br from-terminal-cyan/20 via-terminal-blue/20 to-terminal-purple/20 border border-white/30 text-white backdrop-blur-lg hover:from-terminal-cyan/30 hover:via-terminal-blue/30 hover:to-terminal-purple/30",
    bubbleTea: "bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono"
  }, _ = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl"
  }, f = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Jo(a(), n()) : a() === "bubbleTea" && {
    sm: "rounded-bubble-tea-sm",
    md: "rounded-bubble-tea",
    lg: "rounded-bubble-tea-lg",
    xl: "rounded-bubble-tea-xl"
  }[n()] || ""), q = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? $o() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"), ee = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none will-change-transform", w = d() ? "aspect-square !p-0" : "", E = /* @__PURE__ */ Ee(() => () => Z(ee, t(R)(), _[n()], t(f)(), t(q)(), w, l() && "cursor-wait", N()));
  var B = Se(), F = _e(B);
  {
    var D = (O) => {
      var P = Os();
      Ze(
        P,
        (y) => ({
          class: y,
          disabled: m(),
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
        var G = (y) => {
          var x = Ns();
          o(y, x);
        };
        g(Q, (y) => {
          l() && y(G);
        });
      }
      var L = h(Q, 2);
      {
        var T = (y) => {
          var x = Se(), C = _e(x);
          ot(C, () => e.children), o(y, x);
        };
        g(L, (y) => {
          e.children && y(T);
        });
      }
      Ie(P, (y, x) => Mt?.(y, x), () => ({
        enabled: !m() && !l() && p(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Ie(P, (y, x) => xa?.(y, x), () => ({ enabled: !m() && !l() && A() })), Ie(P, (y, x) => ft?.(y, x), () => ({
        enabled: !m() && !l() && !p() && !A(),
        strength: 0.15,
        scale: 1.02
      })), $e(1, P, () => Ut, () => ({
        duration: 200,
        bounce: a().includes("glass") || a() === "liquid"
      })), o(O, P);
    }, V = (O) => {
      var P = Bs();
      Ze(
        P,
        (y) => ({
          class: y,
          disabled: m(),
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
        var G = (y) => {
          var x = qs();
          o(y, x);
        };
        g(Q, (y) => {
          l() && y(G);
        });
      }
      var L = h(Q, 2);
      {
        var T = (y) => {
          var x = Se(), C = _e(x);
          ot(C, () => e.children), o(y, x);
        };
        g(L, (y) => {
          e.children && y(T);
        });
      }
      Ie(P, (y, x) => Mt?.(y, x), () => ({
        enabled: !m() && !l() && p(),
        duration: 200,
        scale: a() === "liquid" ? 1.08 : a() === "bubbleTea" ? 1.06 : 1.05,
        borderRadius: "var(--radius-lg)"
      })), Ie(P, (y, x) => xa?.(y, x), () => ({ enabled: !m() && !l() && A() })), Ie(P, (y, x) => ft?.(y, x), () => ({
        enabled: !m() && !l() && !p() && !A(),
        strength: 0.15,
        scale: 1.02
      })), o(O, P);
    };
    g(F, (O) => {
      u() ? O(D) : O(V, !1);
    });
  }
  o(r, B), Xe();
}
var Hs = /* @__PURE__ */ c("<div><!></div>"), Vs = /* @__PURE__ */ c("<div><!></div>"), Gs = /* @__PURE__ */ c("<div><!></div>"), Us = /* @__PURE__ */ c("<div><!></div>");
const Ys = {
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
function N1(r, e) {
  Ke(e, !0), Qe(r, Ys);
  const a = s(e, "variant", 3, "auto"), n = s(e, "blur", 3, "md"), l = s(e, "interactive", 3, !1), d = s(e, "animate", 3, !0), u = s(e, "jelly", 3, !0), p = s(e, "liquid", 3, !1), A = s(e, "breathing", 3, !1), N = s(e, "class", 3, ""), m = /* @__PURE__ */ dt(e, [
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
  ]), I = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? js(a()) : R[a()] || R.default), R = {
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
  }, _ = /* @__PURE__ */ Ee(() => () => a() === "auto" || a() === "theme" ? Jo(a()) || "rounded-2xl" : a() === "bubbleTea" ? "rounded-bubble-tea-lg" : "rounded-2xl"), f = /* @__PURE__ */ Ee(() => () => l() ? a() === "auto" || a() === "theme" ? $o() : "focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" : ""), q = "p-6 transition-all duration-300 will-change-transform", ee = l() ? "cursor-pointer" : "", w = /* @__PURE__ */ Ee(() => () => Z(q, t(I)(), t(_)(), typeof a() == "string" && a().includes("glass") && z[n()], ee, t(f)(), N()));
  var E = Se(), B = _e(E);
  {
    var F = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (L) => {
          var T = Hs(), y = (X) => {
            (X.key === "Enter" || X.key === " ") && (X.preventDefault(), X.currentTarget.click());
          };
          Ze(
            T,
            (X) => ({
              class: X,
              role: "button",
              tabindex: "0",
              onkeydown: y,
              ...m
            }),
            [() => t(w)()],
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
          Ie(T, (X, K) => Mt?.(X, K), () => ({
            enabled: u(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : a() === "bubbleTea" ? 1.04 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Ie(T, (X, K) => xa?.(X, K), () => ({ enabled: p(), liquidIntensity: 1, morphStrength: 0.3 })), Ie(T, (X, K) => Rt?.(X, K), () => ({ enabled: A(), intensity: 0.015, speed: 3500 })), Ie(T, (X, K) => ft?.(X, K), () => ({ enabled: !u() && !p(), strength: 0.2, scale: 1.02 })), $e(1, T, () => kt, () => ({ blur: n(), opacity: "medium" })), o(L, T);
        }, G = (L) => {
          var T = Vs();
          Ze(T, (C) => ({ class: C, ...m }), [() => t(w)()], void 0, "svelte-j9s7zz");
          var y = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(y, (C) => {
              e.children && C(x);
            });
          }
          Ie(T, (C, X) => Mt?.(C, X), () => ({
            enabled: u() && l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "var(--radius-xl)",
            responsiveness: "subtle"
          })), Ie(T, (C, X) => Rt?.(C, X), () => ({ enabled: A(), intensity: 0.01, speed: 4e3 })), $e(1, T, () => kt, () => ({ blur: n(), opacity: "subtle" })), o(L, T);
        };
        g(P, (L) => {
          l() ? L(Q) : L(G, !1);
        });
      }
      o(V, O);
    }, D = (V) => {
      var O = Se(), P = _e(O);
      {
        var Q = (L) => {
          var T = Gs(), y = (X) => {
            (X.key === "Enter" || X.key === " ") && (X.preventDefault(), X.currentTarget.click());
          };
          Ze(
            T,
            (X) => ({
              class: X,
              role: "button",
              tabindex: "0",
              onkeydown: y,
              ...m
            }),
            [() => t(w)()],
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
          Ie(T, (X, K) => Mt?.(X, K), () => ({
            enabled: u(),
            duration: 250,
            scale: a() === "liquid" ? 1.08 : a() === "jelly" ? 1.06 : 1.03,
            borderRadius: "var(--radius-2xl)",
            responsiveness: "medium"
          })), Ie(T, (X, K) => xa?.(X, K), () => ({ enabled: p(), liquidIntensity: 1, morphStrength: 0.3 })), Ie(T, (X, K) => Rt?.(X, K), () => ({ enabled: A(), intensity: 0.015, speed: 3500 })), Ie(T, (X, K) => ft?.(X, K), () => ({ enabled: !u() && !p(), strength: 0.2, scale: 1.02 })), o(L, T);
        }, G = (L) => {
          var T = Us();
          Ze(T, (C) => ({ class: C, ...m }), [() => t(w)()], void 0, "svelte-j9s7zz");
          var y = i(T);
          {
            var x = (C) => {
              var X = Se(), K = _e(X);
              ot(K, () => e.children), o(C, X);
            };
            g(y, (C) => {
              e.children && C(x);
            });
          }
          Ie(T, (C, X) => Rt?.(C, X), () => ({ enabled: A(), intensity: 0.01, speed: 4e3 })), o(L, T);
        };
        g(
          P,
          (L) => {
            l() ? L(Q) : L(G, !1);
          },
          !0
        );
      }
      o(V, O);
    };
    g(B, (V) => {
      d() ? V(F) : V(D, !1);
    });
  }
  o(r, E), Xe();
}
var Ws = /* @__PURE__ */ c('<span class="text-red-400 ml-1 svelte-cfvntl">*</span>'), Ks = /* @__PURE__ */ c("<label> <!></label>"), Xs = /* @__PURE__ */ c("<p> </p>"), Zs = /* @__PURE__ */ c('<p class="text-xs text-red-400 mt-1 svelte-cfvntl" role="alert"> </p>'), Qs = /* @__PURE__ */ c('<div class="flex-1 min-w-0 svelte-cfvntl"><!> <!> <!></div>'), Js = /* @__PURE__ */ c('<div class="flex items-start gap-3 svelte-cfvntl"><div><input/> <div class="absolute inset-0 flex items-center justify-center svelte-cfvntl"><!></div></div> <!></div>');
const $s = {
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
function O1(r, e) {
  Ke(e, !0), Qe(r, $s);
  let a = s(e, "checked", 7, !1), n = s(e, "indeterminate", 7, !1), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), u = s(e, "variant", 3, "glass"), p = s(e, "blur", 3, "md"), A = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), m = s(e, "required", 3, !1), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  const _ = `checkbox-${Math.random().toString(36).substr(2, 9)}`, f = e.description ? `${_}-description` : void 0, q = e.error ? `${_}-error` : void 0;
  bt(() => {
    z && (z.indeterminate = n());
  });
  const ee = {
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
  }, E = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = Z(
    "relative inline-flex items-center justify-center rounded-md transition-all duration-200",
    "focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
    ee[d()].container,
    n() ? w[u()].containerIndeterminate : a() ? w[u()].containerChecked : w[u()].container,
    u() === "glass" && E[p()],
    l() && "opacity-50 cursor-not-allowed",
    !l() && "cursor-pointer hover:scale-105",
    e.error && "border-red-400/60 bg-red-500/10",
    I()
  ), F = Z("transition-all duration-200", ee[d()].icon, n() ? w[u()].iconIndeterminate : a() ? w[u()].iconChecked : w[u()].icon), D = Z("font-medium text-white cursor-pointer select-none", ee[d()].text, l() && "opacity-50", e.error && "text-red-300"), V = Z("text-xs text-white/70 mt-1", l() && "opacity-50", e.error && "text-red-300/70");
  function O(k) {
    if (l()) return;
    const b = k.target.checked;
    a(b), n(!1), e.onCheckedChange?.(b);
  }
  function P(k) {
    l() || k.key === "Enter" && (k.preventDefault(), z.click());
  }
  bt(() => {
    Zt("Checkbox", "small");
  });
  var Q = Js(), G = i(Q), L = i(G);
  Ze(
    L,
    (k) => ({
      type: "checkbox",
      id: _,
      disabled: l(),
      required: m(),
      class: "sr-only",
      "aria-label": e["aria-label"] || e.label,
      "aria-describedby": k,
      "aria-invalid": !!e.error,
      onchange: O,
      onkeydown: P,
      ...R
    }),
    [
      () => [f, q].filter(Boolean).join(" ") || void 0
    ],
    void 0,
    "svelte-cfvntl"
  ), tt(L, (k) => z = k, () => z), ur(() => is(L, a)), Ie(L, (k, v) => Ut?.(k, v), () => A() && !N() ? { scale: 0.9, duration: 150 } : void 0);
  var T = h(L, 2), y = i(T);
  {
    var x = (k) => {
      Qn(k, {
        get class() {
          return F;
        },
        strokeWidth: 2.5
      });
    }, C = (k) => {
      var v = Se(), b = _e(v);
      {
        var re = (de) => {
          Ya(de, {
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
      o(k, v);
    };
    g(y, (k) => {
      n() ? k(x) : k(C, !1);
    });
  }
  var X = h(G, 2);
  {
    var K = (k) => {
      var v = Qs(), b = i(v);
      {
        var re = (U) => {
          var oe = Ks(), S = i(oe), te = h(S);
          {
            var J = (Y) => {
              var le = Ws();
              o(Y, le);
            };
            g(te, (Y) => {
              m() && Y(J);
            });
          }
          M(() => {
            xe(oe, "for", _), j(oe, 1, ne(D), "svelte-cfvntl"), ie(S, `${e.label ?? ""} `);
          }), o(U, oe);
        };
        g(b, (U) => {
          e.label && U(re);
        });
      }
      var de = h(b, 2);
      {
        var ue = (U) => {
          var oe = Xs(), S = i(oe);
          M(() => {
            xe(oe, "id", f), j(oe, 1, ne(V), "svelte-cfvntl"), ie(S, e.description);
          }), o(U, oe);
        };
        g(de, (U) => {
          e.description && U(ue);
        });
      }
      var ve = h(de, 2);
      {
        var $ = (U) => {
          var oe = Zs(), S = i(oe);
          M(() => {
            xe(oe, "id", q), ie(S, e.error);
          }), o(U, oe);
        };
        g(ve, (U) => {
          e.error && U($);
        });
      }
      o(k, v);
    };
    g(X, (k) => {
      (e.label || e.description || e.error) && k(K);
    });
  }
  M(() => j(G, 1, ne(B), "svelte-cfvntl")), o(r, Q), Xe();
}
const ed = (r, e, a) => {
  W(e, !t(e)), t(e) && requestAnimationFrame(a);
};
var td = /* @__PURE__ */ c('<div class="h-px bg-white/10 my-1"></div>'), rd = (
  // Former _markUsed helper removed (cleanup: unnecessary artificial usage)
  // Reactive no-op effect to ensure analyzer sees runtime updates to menuPosition
  (r, e, a) => e(t(a))
), ad = /* @__PURE__ */ c('<button><!> <span class="flex-1 text-left"> </span></button>'), nd = /* @__PURE__ */ c('<div><div class="py-1"></div></div>'), od = /* @__PURE__ */ c('<div><button aria-haspopup="true"><span> </span> <!></button> <!></div>');
function q1(r, e) {
  Ke(e, !0);
  const a = s(e, "trigger", 3, "Select"), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "position", 3, "bottom"), u = s(e, "animated", 3, !0), p = s(e, "glow", 3, !1);
  s(e, "jelly", 3, !0);
  const A = s(e, "class", 3, ""), N = s(e, "triggerClass", 3, ""), m = s(e, "menuClass", 3, ""), I = /* @__PURE__ */ dt(e, [
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
  let R = /* @__PURE__ */ ye(!1), z = /* @__PURE__ */ ye(void 0), _ = /* @__PURE__ */ ye(void 0), f = /* @__PURE__ */ ye(st({ x: 0, y: 0 }));
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
  }, w = () => {
    if (!t(z) || !t(_)) return;
    const x = t(z).getBoundingClientRect(), C = t(_).getBoundingClientRect(), X = window.innerWidth, K = window.innerHeight;
    let k = 0, v = 0;
    switch (d()) {
      case "bottom":
        k = 0, v = x.height + 4;
        break;
      case "top":
        k = 0, v = -C.height - 4;
        break;
      case "left":
        k = -C.width - 4, v = 0;
        break;
      case "right":
        k = x.width + 4, v = 0;
        break;
    }
    const b = x.left + k, re = x.top + v + x.height;
    b + C.width > X && (k = X - b - C.width - 8), re + C.height > K && (v = -C.height - 4), W(f, { x: k, y: v }, !0);
  }, E = (x) => {
    x.disabled || x.divider || (e.onSelect?.(x.value), W(R, !1));
  }, B = (x) => {
    t(z) && !t(z).contains(x.target) && W(R, !1);
  }, F = (x) => {
    x.key === "Escape" && W(R, !1);
  };
  wt(() => (document.addEventListener("click", B), document.addEventListener("keydown", F), () => {
    document.removeEventListener("click", B), document.removeEventListener("keydown", F);
  }));
  const D = q[n()], V = e.items.find((x) => x.value === e.value);
  bt(() => {
    t(f);
  });
  var O = od();
  Ze(O, (x) => ({ class: x, ...I }), [() => Z("relative inline-block", A())]);
  var P = i(O);
  P.__click = [ed, R, w];
  var Q = i(P), G = i(Q), L = h(Q, 2);
  {
    let x = /* @__PURE__ */ Ee(() => Z("transition-transform duration-200", t(R) && "rotate-180"));
    an(L, {
      size: 16,
      get class() {
        return t(x);
      }
    });
  }
  Ie(P, (x, C) => ft?.(x, C), () => ({ enabled: !0, strength: 0.1 }));
  var T = h(P, 2);
  {
    var y = (x) => {
      var C = nd(), X = i(C);
      Ge(X, 21, () => e.items, (K) => K.value, (K, k) => {
        var v = Se(), b = _e(v);
        {
          var re = (ue) => {
            var ve = td();
            o(ue, ve);
          }, de = (ue) => {
            var ve = ad();
            ve.__click = [rd, E, k];
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
            var oe = h($, 2), S = i(oe);
            M(
              (te) => {
                ve.disabled = t(k).disabled, j(ve, 1, te), ie(S, t(k).label);
              },
              [
                () => ne(Z("flex items-center gap-3 w-full px-4 py-2 transition-all duration-200", D.item, t(k).value === e.value && D.active, t(k).disabled && "opacity-50 cursor-not-allowed", !t(k).disabled && "cursor-pointer"))
              ]
            ), o(ue, ve);
          };
          g(b, (ue) => {
            t(k).divider ? ue(re) : ue(de, !1);
          });
        }
        o(K, v);
      }), tt(C, (K) => W(_, K), () => t(_)), M(
        (K) => {
          j(C, 1, K), pt(C, `left: ${t(f).x}px; top: ${t(f).y}px;`);
        },
        [
          () => ne(Z("absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden", D.menu, p() && D.glow, u() && "transform-gpu will-change-transform", m()))
        ]
      ), $e(3, C, () => ht, () => ({ duration: u() ? 200 : 0 })), o(x, C);
    };
    g(T, (x) => {
      t(R) && x(y);
    });
  }
  tt(O, (x) => W(z, x), () => t(z)), M(
    (x) => {
      j(P, 1, x), xe(P, "aria-expanded", t(R)), ie(G, V?.label || a());
    },
    [
      () => ne(Z("flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200", ee[l()], D.trigger, p() && t(R) && D.glow, "focus:outline-none focus:ring-2 focus:ring-white/20", N()))
    ]
  ), o(r, O), Xe();
}
vt(["click"]);
var id = /* @__PURE__ */ c('<label class="block text-sm font-medium text-white/80 mb-2"> </label>'), ld = /* @__PURE__ */ c('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), sd = /* @__PURE__ */ c('<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"><!></div>'), dd = /* @__PURE__ */ c("<input/>"), cd = /* @__PURE__ */ c("<input/>"), vd = /* @__PURE__ */ c("<input/>"), ud = /* @__PURE__ */ c('<p class="mt-1 text-sm text-red-400" role="alert"> </p>'), fd = /* @__PURE__ */ c('<div class="relative"><!> <div class="relative"><!> <!></div> <!></div>');
const bd = {
  hash: "svelte-177vx52",
  code: `input.svelte-177vx52:focus {box-shadow:0 0 0 3px rgba(0, 122, 255, 0.1);transition:box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);}input.svelte-177vx52.glass:focus {-webkit-backdrop-filter:blur(16px) saturate(200%);backdrop-filter:blur(16px) saturate(200%);transition:-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
			-webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);}input.svelte-177vx52.terminal {caret-color:var(--terminal-green);}

	/* Liquid input effects */input.svelte-177vx52:focus {transform:translateY(-1px);}input.svelte-177vx52.backdrop-blur-md:focus {-webkit-backdrop-filter:blur(12px) saturate(150%);backdrop-filter:blur(12px) saturate(150%);background:linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));}

	/* Enhanced hover states */input.svelte-177vx52:hover:not(:focus) {border-color:rgba(255, 255, 255, 0.3);background:linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));}

	/* Jelly physics simulation */input.svelte-177vx52.jelly-hover:hover {transform:scale(1.01) translateY(-1px);transition:transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);}

	/* Magnetic attraction visual feedback */input.svelte-177vx52.magnetic:hover {box-shadow:0 4px 20px rgba(139, 92, 246, 0.15);}`
};
function gd(r, e) {
  Ke(e, !0), Qe(r, bd);
  const a = s(e, "variant", 3, "auto"), n = s(e, "size", 3, "md"), l = s(e, "label", 3, ""), d = s(e, "error", 3, ""), u = s(e, "icon", 3, null), p = s(e, "animate", 3, !0), A = s(e, "liquid", 3, !1), N = s(e, "magnetic", 3, !1), m = s(e, "jelly", 3, !1), I = s(e, "glow", 3, !1), R = s(e, "class", 3, ""), z = s(e, "id", 3, ""), _ = /* @__PURE__ */ dt(e, [
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
  }, ee = "w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300", w = d() ? "border-red-500 focus:border-red-500" : "", E = u() || e.children?.icon ? "pl-10" : "", B = I() ? "focus:shadow-lg focus:shadow-brand-primary/20" : "", F = A() ? "backdrop-blur-md" : "", D = Z(ee, f[a()], q[n()], w, E, B, F, R()), V = z() || `input-${Math.random().toString(36).substr(2, 9)}`, O = d() ? `${V}-error` : void 0;
  var P = fd(), Q = i(P);
  {
    var G = (b) => {
      var re = id(), de = i(re);
      M(() => {
        xe(re, "for", V), ie(de, l());
      }), o(b, re);
    };
    g(Q, (b) => {
      l() && b(G);
    });
  }
  var L = h(Q, 2), T = i(L);
  {
    var y = (b) => {
      var re = ld(), de = i(re);
      ot(de, u), o(b, re);
    }, x = (b) => {
      var re = Se(), de = _e(re);
      {
        var ue = (ve) => {
          var $ = sd(), U = i($);
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
      u() ? b(y) : b(x, !1);
    });
  }
  var C = h(T, 2);
  {
    var X = (b) => {
      var re = dd();
      Ze(re, (de) => ({ id: z(), class: de, ..._ }), [D], void 0, "svelte-177vx52"), Ie(re, (de, ue) => ft?.(de, ue), () => N() ? { strength: 0.1, distance: 50 } : void 0), Ie(re, (de, ue) => Mt?.(de, ue), () => m() ? { intensity: 0.05, speed: 200 } : void 0), $e(1, re, () => kt, () => ({ duration: 300, blur: "sm", scale: 0.98 })), o(b, re);
    }, K = (b) => {
      var re = Se(), de = _e(re);
      {
        var ue = ($) => {
          var U = cd();
          Ze(
            U,
            (oe) => ({
              id: V,
              class: oe,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": O,
              ..._
            }),
            [D],
            void 0,
            "svelte-177vx52"
          ), Ie(U, (oe, S) => ft?.(oe, S), () => N() ? { strength: 0.1, distance: 50 } : void 0), Ie(U, (oe, S) => Mt?.(oe, S), () => m() ? { intensity: 0.05, speed: 200 } : void 0), $e(1, U, () => ht, () => ({
            duration: 200,
            direction: "up",
            distance: 5,
            opacity: "light"
          })), o($, U);
        }, ve = ($) => {
          var U = vd();
          Ze(
            U,
            (oe) => ({
              id: V,
              class: oe,
              "aria-label": e["aria-label"],
              "aria-invalid": !!d(),
              "aria-describedby": O,
              ..._
            }),
            [D],
            void 0,
            "svelte-177vx52"
          ), Ie(U, (oe, S) => ft?.(oe, S), () => N() ? { strength: 0.1, distance: 50 } : void 0), Ie(U, (oe, S) => Mt?.(oe, S), () => m() ? { intensity: 0.05, speed: 200 } : void 0), o($, U);
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
      p() && A() ? b(X) : b(K, !1);
    });
  }
  var k = h(L, 2);
  {
    var v = (b) => {
      var re = ud(), de = i(re);
      M(() => {
        xe(re, "id", O), ie(de, d());
      }), o(b, re);
    };
    g(k, (b) => {
      d() && b(v);
    });
  }
  o(r, P), Xe();
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
}, hd = {
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
}, md = {
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
}, pd = {
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
}, xd = {
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
}, _d = {
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
}, _n = {
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
}, wd = {
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
}, yd = {
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
}, kd = {
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
  borderRadius: _n.themes.terminal
}, Cd = {
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
  borderRadius: _n.themes.bubbleTea
}, B1 = {
  colors: Me,
  typography: hd,
  spacing: md,
  effects: pd,
  shadows: xd,
  animations: _d,
  sizes: wd,
  borderRadius: _n,
  zIndex: yd,
  themes: {
    terminal: kd,
    bubbleTea: Cd
  }
};
var Ed = /* @__PURE__ */ c("<div> </div>"), Sd = /* @__PURE__ */ c('<div class="flex items-center justify-between svelte-17v0sh2"><div class="flex-1 svelte-17v0sh2"><div> </div> <div> </div></div> <div class="flex flex-col items-end gap-1 svelte-17v0sh2"><!> <!></div></div>'), Td = /* @__PURE__ */ c("<span> </span>"), Md = /* @__PURE__ */ c("<span> </span>"), Ad = /* @__PURE__ */ c('<div class="flex items-center gap-2 svelte-17v0sh2"><!> <!> <!></div>'), zd = /* @__PURE__ */ c("<div> </div>"), Id = /* @__PURE__ */ c('<div class="space-y-2 svelte-17v0sh2"><div class="flex items-center justify-between svelte-17v0sh2"><div> </div> <!></div> <div> </div> <!> <!></div>'), Pd = /* @__PURE__ */ c('<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg svelte-17v0sh2"><div class="flex items-center gap-2 svelte-17v0sh2"><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin svelte-17v0sh2"></div> <span class="text-sm opacity-70 svelte-17v0sh2">Loading...</span></div></div>'), Ld = /* @__PURE__ */ c('<div class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none svelte-17v0sh2"></div>'), Dd = /* @__PURE__ */ c("<!> <!> <!>", 1);
const Rd = {
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
  Ke(e, !0), Qe(r, Rd);
  let a = s(e, "size", 3, "md"), n = s(e, "variant", 3, "glass"), l = s(e, "layout", 3, "vertical"), d = s(e, "showTrend", 3, !0), u = s(e, "showChange", 3, !0), p = s(e, "showIcon", 3, !1), A = s(e, "animated", 3, !0), N = s(e, "loading", 3, !1), m = s(e, "clickable", 3, !1), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  }, _ = {
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
  }, f = z[a()], q = _[n()], ee = /* @__PURE__ */ Ee(() => () => {
    if (N()) return "---";
    const O = e.metric.value, P = e.metric.format || "number", Q = e.metric.unit || "";
    switch (P) {
      case "currency":
        return `$${Number(O).toLocaleString()}${Q}`;
      case "percentage":
        return `${O}%`;
      default:
        return `${Number(O).toLocaleString()}${Q}`;
    }
  }), w = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.change || N()) return null;
    const O = e.metric.change, P = O > 0, Q = O < 0;
    return {
      value: `${P ? "+" : ""}${O}%`,
      type: P ? "positive" : Q ? "negative" : "neutral"
    };
  }), E = /* @__PURE__ */ Ee(() => () => {
    if (!e.metric.trend || N()) return null;
    switch (e.metric.trend) {
      case "up":
        return vi;
      case "down":
        return ci;
      default:
        return Qn;
    }
  }), B = /* @__PURE__ */ Ee(() => () => {
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
  function F() {
    if (m()) {
      const O = new CustomEvent("click", { detail: e.metric });
      e.onclick?.(O);
    }
  }
  var D = Se(), V = _e(D);
  Kl(V, () => m() ? "button" : "div", !1, (O, P) => {
    Ie(O, (K, k) => kt?.(K, k), () => ({ intensity: "medium" })), Ze(
      O,
      (K) => ({
        class: K,
        onclick: F,
        role: m() ? "button" : void 0,
        tabindex: m() ? 0 : void 0,
        ...R
      }),
      [
        () => Z("relative rounded-lg border transition-all duration-200", f.container, q.container, m() && "cursor-pointer hover:scale-105 hover:shadow-lg", A() && "transform-gpu", I())
      ],
      void 0,
      "svelte-17v0sh2"
    );
    var Q = Dd(), G = _e(Q);
    {
      var L = (K) => {
        var k = Sd(), v = i(k), b = i(v), re = i(b), de = h(b, 2), ue = i(de), ve = h(v, 2), $ = i(ve);
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
                  En(ae, {
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
        var S = h($, 2);
        {
          var te = (J) => {
            var Y = Ed(), le = i(Y);
            M(
              (H) => {
                j(Y, 1, H, "svelte-17v0sh2"), ie(le, t(w).value);
              },
              [
                () => ne(Z("font-medium", f.change, t(B)))
              ]
            ), o(J, Y);
          };
          g(S, (J) => {
            u() && t(w) && J(te);
          });
        }
        M(
          (J, Y) => {
            j(b, 1, J, "svelte-17v0sh2"), ie(re, e.metric.label), j(de, 1, Y, "svelte-17v0sh2"), ie(ue, t(ee));
          },
          [
            () => ne(Z("font-medium", f.label, q.label)),
            () => ne(Z("font-bold tracking-tight", f.value, q.value))
          ]
        ), o(K, k);
      }, T = (K) => {
        var k = Id(), v = i(k), b = i(v), re = i(b), de = h(b, 2);
        {
          var ue = (J) => {
            {
              let Y = /* @__PURE__ */ Ee(() => Z(f.icon, q.icon));
              En(J, {
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
        var ve = h(v, 2), $ = i(ve), U = h(ve, 2);
        {
          var oe = (J) => {
            var Y = Ad(), le = i(Y);
            {
              var H = (fe) => {
                const be = /* @__PURE__ */ Ee(() => t(E));
                var ge = Se(), Ce = _e(ge);
                {
                  let Pe = /* @__PURE__ */ Ee(() => Z("w-4 h-4", t(B)));
                  Et(Ce, () => t(be), (Be, Re) => {
                    Re(Be, {
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
            var ae = h(le, 2);
            {
              var ce = (fe) => {
                var be = Td(), ge = i(be);
                M(
                  (Ce) => {
                    j(be, 1, Ce, "svelte-17v0sh2"), ie(ge, t(w).value);
                  },
                  [
                    () => ne(Z("font-medium", f.change, t(B)))
                  ]
                ), o(fe, be);
              };
              g(ae, (fe) => {
                u() && t(w) && fe(ce);
              });
            }
            var se = h(ae, 2);
            {
              var me = (fe) => {
                var be = Md(), ge = i(be);
                M(
                  (Ce) => {
                    j(be, 1, Ce, "svelte-17v0sh2"), ie(ge, `from ${e.metric.previousValue ?? ""}`);
                  },
                  [
                    () => ne(Z("opacity-60", f.change, q.label))
                  ]
                ), o(fe, be);
              };
              g(se, (fe) => {
                e.metric.previousValue && fe(me);
              });
            }
            o(J, Y);
          };
          g(U, (J) => {
            (d() && t(E) || u() && t(w)) && J(oe);
          });
        }
        var S = h(U, 2);
        {
          var te = (J) => {
            var Y = zd(), le = i(Y);
            M(
              (H) => {
                j(Y, 1, H, "svelte-17v0sh2"), ie(le, e.metric.description);
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
        M(
          (J, Y) => {
            j(b, 1, J, "svelte-17v0sh2"), ie(re, e.metric.label), j(ve, 1, Y, "svelte-17v0sh2"), ie($, t(ee));
          },
          [
            () => ne(Z("font-medium", f.label, q.label)),
            () => ne(Z("font-bold tracking-tight", f.value, q.value))
          ]
        ), o(K, k);
      };
      g(G, (K) => {
        l() === "horizontal" ? K(L) : K(T, !1);
      });
    }
    var y = h(G, 2);
    {
      var x = (K) => {
        var k = Pd();
        o(K, k);
      };
      g(y, (K) => {
        N() && K(x);
      });
    }
    var C = h(y, 2);
    {
      var X = (K) => {
        var k = Ld();
        o(K, k);
      };
      g(C, (K) => {
        m() && K(X);
      });
    }
    o(P, Q);
  }), o(r, D), Xe();
}
function jd(r, e, a) {
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
  const a = s(e, "open", 3, !1), n = s(e, "size", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "blur", 3, "xl"), u = s(e, "closeOnOutsideClick", 3, !0), p = s(e, "closeOnEscape", 3, !0), A = s(e, "animate", 3, !0), N = s(e, "jelly", 3, !0), m = s(e, "glow", 3, !1), I = s(e, "breathing", 3, !1), R = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), _ = /* @__PURE__ */ dt(e, [
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
  }, E = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = w[l()], F = Z("fixed inset-0 z-50 flex items-center justify-center p-4", B.overlay, E[d()]), V = Z("relative w-full p-6 backdrop-blur-xl border transition-all duration-300", "transform-gpu will-change-transform", "modal-radius-lg", ee[n()], B.bg, m() && B.glow, z());
  function O(y) {
    y.key === "Escape" && p() && (y.preventDefault(), P()), y.key === "Tab" && Q(y);
  }
  function P() {
    e.onClose && e.onClose();
  }
  function Q(y) {
    if (!t(f)) return;
    const x = t(f).querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'), C = x[0], X = x[x.length - 1];
    y.shiftKey ? document.activeElement === C && (X.focus(), y.preventDefault()) : document.activeElement === X && (C.focus(), y.preventDefault());
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
    Zt("Modal", "medium");
  });
  var G = Se(), L = _e(G);
  {
    var T = (y) => {
      var x = Od();
      x.__click = [jd, u, P], x.__keydown = [Nd, P];
      var C = i(x);
      Ze(C, () => ({ class: V, ..._ }), void 0, void 0, "svelte-6n99c3");
      var X = i(C);
      {
        var K = (k) => {
          var v = Se(), b = _e(v);
          ot(b, () => e.children), o(k, v);
        };
        g(X, (k) => {
          e.children && k(K);
        });
      }
      tt(C, (k) => W(f, k), () => t(f)), Ie(C, (k, v) => Mt?.(k, v), () => ({
        enabled: N() && A() && !R(),
        scale: 1.001,
        duration: 300,
        borderRadius: "var(--radius-xl)"
      })), Ie(C, (k, v) => Rt?.(k, v), () => ({
        enabled: I() && A() && !R(),
        intensity: 0.01,
        speed: 4e3
      })), M(() => {
        j(x, 1, ne(F), "svelte-6n99c3"), xe(x, "aria-labelledby", e["aria-labelledby"]), xe(x, "aria-describedby", e["aria-describedby"]);
      }), $e(1, C, () => Ut, () => ({
        scale: 0.8,
        duration: A() && !R() ? 400 : 0,
        delay: 100
      })), $e(2, C, () => Ut, () => ({
        scale: 0.95,
        duration: A() && !R() ? 200 : 0
      })), $e(1, x, () => ht, () => ({
        direction: "center",
        duration: A() && !R() ? 200 : 0
      })), $e(2, x, () => ht, () => ({
        direction: "center",
        duration: A() && !R() ? 150 : 0
      })), o(y, x);
    };
    g(L, (y) => {
      a() && y(T);
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
), Hd = /* @__PURE__ */ c('<div><span class="truncate max-w-32"> </span> <button><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>'), Vd = /* @__PURE__ */ c('<input role="searchbox" aria-label="Search options" aria-controls="multiselect-listbox"/>'), Gd = /* @__PURE__ */ c("<span> </span>"), Ud = /* @__PURE__ */ c("<div> </div>"), Yd = (r, e, a) => e(t(a)), Wd = (r, e, a) => r.key === "Enter" && e(t(a)), Kd = /* @__PURE__ */ c('<div class="text-xs opacity-70 mt-0.5"> </div>'), Xd = /* @__PURE__ */ rr('<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), Zd = /* @__PURE__ */ c('<div role="option" tabindex="0"><div class="flex items-center justify-between"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div></div>'), Qd = /* @__PURE__ */ c("<div> </div>"), Jd = /* @__PURE__ */ c('<div id="multiselect-listbox" role="listbox" aria-multiselectable="true" aria-label="Available options"><!> <!></div>'), $d = /* @__PURE__ */ c('<div><div class="flex flex-wrap gap-1.5 items-center"><!> <!></div> <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <!> <div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only"> <!></div></div>');
const ec = {
  hash: "svelte-39ftoh",
  code: `
	/* Scrollbar styling for dropdown */.overflow-auto.svelte-39ftoh::-webkit-scrollbar {width:8px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-track {background:rgba(255, 255, 255, 0.05);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:4px;}.overflow-auto.svelte-39ftoh::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Terminal-specific glow effects */.terminal .multi-select:focus-within {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);}`
};
function V1(r, e) {
  Ke(e, !0), Qe(r, ec);
  const a = s(e, "options", 19, () => []), n = s(e, "value", 19, () => []), l = s(e, "placeholder", 3, "Select items..."), d = s(e, "variant", 3, "default"), u = s(e, "size", 3, "md"), p = s(e, "disabled", 3, !1), A = s(e, "error", 3, !1), N = s(e, "searchable", 3, !0), m = s(e, "chipVariant", 19, d), I = s(e, "closeOnSelect", 3, !1), R = s(e, "class", 3, ""), z = /* @__PURE__ */ dt(e, [
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
  ]), _ = Tt();
  let f, q = /* @__PURE__ */ ye(void 0), ee = /* @__PURE__ */ ye(void 0), w = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(""), B = /* @__PURE__ */ ye(st([...n()])), F = /* @__PURE__ */ ye(-1);
  const D = {
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
  }, O = /* @__PURE__ */ Ee(() => D[d()]), P = /* @__PURE__ */ Ee(() => D[m()]), Q = /* @__PURE__ */ Ee(() => V[u()]), G = /* @__PURE__ */ Ee(() => () => t(E) ? a().filter((ce) => ce.label.toLowerCase().includes(t(E).toLowerCase()) || ce.value.toLowerCase().includes(t(E).toLowerCase()) || ce.description?.toLowerCase().includes(t(E).toLowerCase())) : a()), L = /* @__PURE__ */ Ee(() => () => t(G).filter((ce) => !t(B).includes(ce.value))), T = /* @__PURE__ */ Ee(() => () => t(B).map((ce) => a().find((se) => se.value === ce)).filter(Boolean)), y = /* @__PURE__ */ Ee(() => () => e.maxSelections ? t(B).length >= e.maxSelections : !1);
  function x() {
    p() || t(w) || (W(w, !0), _("open"), setTimeout(
      () => {
        N() && t(q) && t(q).focus();
      },
      0
    ));
  }
  function C(ce) {
    ce.disabled || t(y) && !t(B).includes(ce.value) || (t(B).includes(ce.value) ? K(ce.value) : X(ce.value), I() && !t(B).includes(ce.value) && (W(w, !1), _("close")));
  }
  function X(ce) {
    t(y) || (W(B, [...t(B), ce], !0), _("add", ce), _("change", t(B)), W(E, ""), _("search", t(E)));
  }
  function K(ce) {
    W(B, t(B).filter((se) => se !== ce), !0), _("remove", ce), _("change", t(B));
  }
  function k(ce, se) {
    se.stopPropagation(), K(ce);
  }
  function v(ce) {
    switch (ce.key) {
      case "Escape":
        W(w, !1), _("close");
        break;
      case "ArrowDown":
        ce.preventDefault(), t(w) ? W(F, Math.min(t(F) + 1, t(L).length - 1), !0) : (W(w, !0), _("open"));
        break;
      case "ArrowUp":
        ce.preventDefault(), W(F, Math.max(t(F) - 1, -1), !0);
        break;
      case "Enter":
        ce.preventDefault(), t(F) >= 0 && t(L)[t(F)] && C(t(L)[t(F)]);
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
      t(w) && f && !f.contains(se.target) && (W(w, !1), _("close"));
    }
    return document.addEventListener("click", ce), () => document.removeEventListener("click", ce);
  });
  const b = /* @__PURE__ */ Ee(() => Z("relative w-full min-h-10 rounded-lg border transition-all duration-200", "cursor-text font-mono", t(O).container, t(Q).container, A() && "border-red-500 focus-within:border-red-500", p() && "opacity-50 cursor-not-allowed", t(w) && "ring-2 ring-opacity-50", R()));
  var re = $d();
  Ze(
    re,
    () => ({
      class: t(b),
      onclick: x,
      onkeydown: v,
      role: "combobox",
      "aria-expanded": t(w),
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
    var me = Hd(), fe = i(me), be = i(fe), ge = h(fe, 2);
    ge.__click = [Fd, k, se], Ie(me, (Ce, Pe) => ft?.(Ce, Pe), () => ({ strength: 0.15 })), M(() => {
      j(
        me,
        1,
        `inline-flex items-center gap-1.5 rounded-md ${t(P).chip ?? ""} ${t(Q).chip ?? ""} 
				       font-mono transition-all duration-200`,
        "svelte-39ftoh"
      ), ie(be, t(se).label), j(
        ge,
        1,
        `flex-shrink-0 rounded-full ${t(P).chipClose ?? ""} hover:bg-black/20
					       transition-colors p-0.5`,
        "svelte-39ftoh"
      ), xe(ge, "aria-label", `Remove ${t(se).label ?? ""}`);
    }), $e(1, me, () => Ut, () => ({ duration: 200, bounce: !0 })), o(ce, me);
  });
  var ve = h(ue, 2);
  {
    var $ = (ce) => {
      var se = Vd();
      se.__input = [Bd, E, _, F], se.__keydown = v, tt(se, (me) => W(q, me), () => t(q)), M(() => {
        xe(se, "placeholder", t(B).length === 0 ? l() : ""), j(se, 1, `flex-1 min-w-32 outline-none ${t(O).searchInput ?? ""} ${t(Q).input ?? ""}`, "svelte-39ftoh"), se.disabled = p() || t(y);
      }), mr(se, () => t(E), (me) => W(E, me)), o(ce, se);
    }, U = (ce) => {
      var se = Se(), me = _e(se);
      {
        var fe = (be) => {
          var ge = Gd(), Ce = i(ge);
          M(() => {
            j(ge, 1, `text-gray-400 ${t(Q).input ?? ""}`, "svelte-39ftoh"), ie(Ce, l());
          }), o(be, ge);
        };
        g(
          me,
          (be) => {
            t(B).length === 0 && be(fe);
          },
          !0
        );
      }
      o(ce, se);
    };
    g(ve, (ce) => {
      N() ? ce($) : ce(U, !1);
    });
  }
  var oe = h(de, 2), S = i(oe), te = h(oe, 2);
  {
    var J = (ce) => {
      var se = Jd(), me = i(se);
      {
        var fe = (Pe) => {
          var Be = Ud(), Re = i(Be);
          M(() => {
            j(Be, 1, `px-4 py-3 text-center ${t(O).option ?? ""} font-mono`, "svelte-39ftoh"), ie(Re, t(E) ? "No results found" : "No more options available");
          }), o(Pe, Be);
        }, be = (Pe) => {
          var Be = Se(), Re = _e(Be);
          Ge(Re, 19, () => t(L), (we) => we.value, (we, pe, Te) => {
            const Ne = /* @__PURE__ */ Ee(() => t(Te) === t(F)), Ae = /* @__PURE__ */ Ee(() => t(B).includes(t(pe).value));
            var Le = Zd();
            Le.__click = [Yd, C, pe], Le.__keydown = [Wd, C, pe];
            var qe = i(Le), Fe = i(qe), ke = i(Fe), he = i(ke), ze = h(ke, 2);
            {
              var De = (We) => {
                var at = Kd(), lt = i(at);
                M(() => ie(lt, t(pe).description)), o(We, at);
              };
              g(ze, (We) => {
                t(pe).description && We(De);
              });
            }
            var He = h(Fe, 2);
            {
              var Je = (We) => {
                var at = Xd();
                o(We, at);
              };
              g(He, (We) => {
                t(Ae) && We(Je);
              });
            }
            Ie(Le, (We, at) => ft?.(We, at), () => ({ enabled: !t(pe).disabled, strength: 0.1 })), M(() => {
              j(
                Le,
                1,
                `cursor-pointer transition-all duration-150 ${t(Q).option ?? ""}
						       ${(t(Ne) ? t(O).selectedOption : t(O).option) ?? ""}
						       ${t(pe).disabled ? "opacity-50 cursor-not-allowed" : ""}
						       font-mono border-b border-white/5 last:border-b-0`,
                "svelte-39ftoh"
              ), xe(Le, "aria-selected", t(Ae)), ie(he, t(pe).label);
            }), o(we, Le);
          }), o(Pe, Be);
        };
        g(me, (Pe) => {
          t(L).length === 0 ? Pe(fe) : Pe(be, !1);
        });
      }
      var ge = h(me, 2);
      {
        var Ce = (Pe) => {
          var Be = Qd(), Re = i(Be);
          M(() => {
            j(Be, 1, `px-4 py-2 text-center text-xs ${t(O).option ?? ""} bg-yellow-500/10 border-t`, "svelte-39ftoh"), ie(Re, `Maximum ${e.maxSelections ?? ""} selections reached`);
          }), o(Pe, Be);
        };
        g(ge, (Pe) => {
          t(y) && Pe(Ce);
        });
      }
      tt(se, (Pe) => W(ee, Pe), () => t(ee)), Ie(se, (Pe, Be) => kt?.(Pe, Be), () => ({ blur: "lg", opacity: "medium" })), M(() => j(
        se,
        1,
        `absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl ${t(O).dropdown ?? ""}`,
        "svelte-39ftoh"
      )), $e(1, se, () => ht, () => ({ direction: "up", duration: 200 })), o(ce, se);
    };
    g(te, (ce) => {
      t(w) && ce(J);
    });
  }
  var Y = h(te, 2), le = i(Y), H = h(le);
  {
    var ae = (ce) => {
      var se = Ct();
      M(() => ie(se, `out of maximum ${e.maxSelections ?? ""}`)), o(ce, se);
    };
    g(H, (ce) => {
      e.maxSelections && ce(ae);
    });
  }
  tt(re, (ce) => f = ce, () => f), Ie(re, (ce, se) => kt?.(ce, se), () => ({ blur: "sm", opacity: "light" })), Ie(re, (ce, se) => ft?.(ce, se), () => ({ enabled: !p(), strength: 0.1 })), M(() => {
    j(
      S,
      0,
      `w-4 h-4 transition-transform duration-200 ${t(w) ? "rotate-180" : ""} 
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
  let u = s(e, "glow", 3, !1), p = s(e, "jelly", 3, !0), A = s(e, "showFirstLast", 3, !0), N = s(e, "class", 3, ""), m = /* @__PURE__ */ dt(e, [
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
  }, R = {
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
    const T = Math.max(a() - n(), 1), y = Math.min(a() + n(), e.totalPages), x = T > 2, C = y < e.totalPages - 1;
    if (!x && C) {
      const X = 3 + 2 * n();
      return [...Array.from({ length: X }, (k, v) => v + 1), "...", e.totalPages];
    }
    if (x && !C) {
      const X = 3 + 2 * n();
      return [1, "...", ...Array.from({ length: X }, (k, v) => e.totalPages - X + v + 1)];
    }
    return x && C ? [1, "...", ...Array.from({ length: y - T + 1 }, (K, k) => T + k), "...", e.totalPages] : [];
  }, _ = (L) => {
    L < 1 || L > e.totalPages || L === a() || (a(L), e.onchange?.(L));
  }, f = I[l()], q = R[d()], ee = /* @__PURE__ */ Ee(z);
  var w = cc();
  Ze(w, (L) => ({ class: L, "aria-label": "Pagination", ...m }), [
    () => Z("inline-flex items-center backdrop-blur-xl border rounded-2xl p-2", q.gap, f.container, N())
  ]);
  var E = i(w);
  {
    var B = (L) => {
      var T = rc();
      T.__click = [tc, _];
      var y = i(T);
      ui(y, {
        get size() {
          return q.icon;
        }
      }), Ie(T, (x, C) => jellyHover?.(x, C), () => ({
        enabled: p() && a() !== 1,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), M(
        (x) => {
          T.disabled = a() === 1, j(T, 1, x);
        },
        [
          () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(L, T);
    };
    g(E, (L) => {
      A() && L(B);
    });
  }
  var F = h(E, 2);
  F.__click = [ac, _, a];
  var D = i(F);
  da(D, {
    get size() {
      return q.icon;
    }
  }), Ie(F, (L, T) => jellyHover?.(L, T), () => ({
    enabled: p() && a() !== 1,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var V = h(F, 2);
  Ge(V, 17, () => t(ee), Vr, (L, T) => {
    var y = Se(), x = _e(y);
    {
      var C = (K) => {
        var k = nc();
        M((v) => j(k, 1, v), [
          () => ne(Z("flex items-center justify-center", q.button, "opacity-50"))
        ]), o(K, k);
      }, X = (K) => {
        var k = ic();
        k.__click = [oc, _, T];
        var v = i(k);
        Ie(k, (b, re) => jellyHover?.(b, re), () => ({
          enabled: p() && t(T) !== a(),
          scale: 1.05,
          duration: 200,
          borderRadius: "8px"
        })), M(
          (b) => {
            j(k, 1, b), xe(k, "aria-label", `Go to page ${t(T)}`), xe(k, "aria-current", t(T) === a() ? "page" : void 0), ie(v, t(T));
          },
          [
            () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200 font-medium", q.button, t(T) === a() ? f.active : f.button, t(T) === a() && u() && f.glow, "focus:outline-none focus:ring-2 focus:ring-white/20"))
          ]
        ), o(K, k);
      };
      g(x, (K) => {
        t(T) === "..." ? K(C) : K(X, !1);
      });
    }
    o(L, y);
  });
  var O = h(V, 2);
  O.__click = [lc, _, a];
  var P = i(O);
  Rr(P, {
    get size() {
      return q.icon;
    }
  }), Ie(O, (L, T) => jellyHover?.(L, T), () => ({
    enabled: p() && a() !== e.totalPages,
    scale: 1.05,
    duration: 200,
    borderRadius: "8px"
  }));
  var Q = h(O, 2);
  {
    var G = (L) => {
      var T = dc();
      T.__click = [sc, _, e];
      var y = i(T);
      fi(y, {
        get size() {
          return q.icon;
        }
      }), Ie(T, (x, C) => jellyHover?.(x, C), () => ({
        enabled: p() && a() !== e.totalPages,
        scale: 1.05,
        duration: 200,
        borderRadius: "8px"
      })), M(
        (x) => {
          T.disabled = a() === e.totalPages, j(T, 1, x);
        },
        [
          () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
        ]
      ), o(L, T);
    };
    g(Q, (L) => {
      A() && L(G);
    });
  }
  M(
    (L, T) => {
      F.disabled = a() === 1, j(F, 1, L), O.disabled = a() === e.totalPages, j(O, 1, T);
    },
    [
      () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === 1 && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20")),
      () => ne(Z("flex items-center justify-center rounded-lg border transition-all duration-200", q.button, f.button, a() === e.totalPages && f.disabled, "focus:outline-none focus:ring-2 focus:ring-white/20"))
    ]
  ), o(r, w), Xe();
}
vt(["click"]);
var vc = /* @__PURE__ */ c("<span><!></span>"), uc = /* @__PURE__ */ c('<div class="flex justify-between items-center svelte-b8e192"><label class="text-sm font-medium text-white svelte-b8e192"> </label> <!></div>'), fc = /* @__PURE__ */ c('<div role="progressbar" aria-valuemin="0"><div></div></div>'), bc = /* @__PURE__ */ c("<div><!></div>"), gc = /* @__PURE__ */ c('<div role="progressbar" aria-valuemin="0"><svg class="transform -rotate-90 svelte-b8e192"><circle stroke="currentColor" fill="transparent" class="text-white/10 svelte-b8e192"></circle><circle stroke="currentColor" fill="transparent" stroke-linecap="round"></circle></svg> <!></div>'), hc = /* @__PURE__ */ c("<div><!> <!></div>");
const mc = {
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
  Ke(e, !0), Qe(r, mc);
  const a = s(e, "value", 3, 0), n = s(e, "max", 3, 100), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), u = s(e, "type", 3, "linear"), p = s(e, "blur", 3, "md"), A = s(e, "showValue", 3, !1), N = s(e, "showPercentage", 3, !1), m = s(e, "indeterminate", 3, !1), I = s(e, "animate", 3, !0), R = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), _ = /* @__PURE__ */ dt(e, [
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
  ]), f = `progress-${Math.random().toString(36).substr(2, 9)}`, q = /* @__PURE__ */ Ee(() => m() ? 0 : Math.min(100, Math.max(0, a() / n() * 100))), ee = {
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
  }, E = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, B = Z("relative overflow-hidden rounded-full", ee[l()][u()], w[d()].track, d() === "glass" && E[p()]), F = Z("h-full transition-all duration-500 ease-out rounded-full", w[d()].fill, m() && "animate-pulse"), D = u() === "circular" ? parseInt(ee[l()].circular.split(" ")[0].slice(2)) * 4 : 0, V = Math.max(2, D / 8), O = (D - V) / 2, P = 2 * Math.PI * O, Q = P, G = /* @__PURE__ */ Ee(() => P - t(q) / 100 * P);
  bt(() => {
    Zt("Progress", "small");
  });
  var L = hc();
  Ze(L, () => ({ class: "w-full space-y-2", ..._ }), void 0, void 0, "svelte-b8e192");
  var T = i(L);
  {
    var y = (K) => {
      var k = uc(), v = i(k), b = i(v), re = h(v, 2);
      {
        var de = (ue) => {
          var ve = vc(), $ = i(ve);
          {
            var U = (S) => {
              var te = Ct();
              M((J) => ie(te, `${J ?? ""}%`), [() => t(q).toFixed(0)]), o(S, te);
            }, oe = (S) => {
              var te = Se(), J = _e(te);
              {
                var Y = (le) => {
                  var H = Ct();
                  M(() => ie(H, `${a() ?? ""}/${n() ?? ""}`)), o(le, H);
                };
                g(
                  J,
                  (le) => {
                    A() && le(Y);
                  },
                  !0
                );
              }
              o(S, te);
            };
            g($, (S) => {
              N() ? S(U) : S(oe, !1);
            });
          }
          M((S) => j(ve, 1, S, "svelte-b8e192"), [
            () => ne(Z("font-medium text-white/80", ee[l()].text))
          ]), o(ue, ve);
        };
        g(re, (ue) => {
          (A() || N()) && ue(de);
        });
      }
      M(() => {
        xe(v, "id", `progress-label-${f}`), xe(v, "for", `progress-${f}`), ie(b, e.label);
      }), o(K, k);
    };
    g(T, (K) => {
      e.label && K(y);
    });
  }
  var x = h(T, 2);
  {
    var C = (K) => {
      var k = fc(), v = i(k);
      let b;
      Ie(v, (re, de) => kt?.(re, de), () => I() && !R() ? { blur: p(), opacity: "subtle" } : void 0), M(
        (re, de) => {
          xe(k, "id", `progress-${f}`), j(k, 1, re, "svelte-b8e192"), xe(k, "aria-valuemax", n()), xe(k, "aria-valuenow", m() ? void 0 : a()), xe(k, "aria-label", e.label ? void 0 : "Progress"), xe(k, "aria-labelledby", e.label ? `progress-label-${f}` : void 0), j(v, 1, ne(F), "svelte-b8e192"), b = pt(v, "", b, de);
        },
        [
          () => ne(Z(B, z())),
          () => ({
            width: m() ? "30%" : `${t(q)}%`,
            animation: m() && !R() ? "progress-indeterminate 2s ease-in-out infinite" : void 0
          })
        ]
      ), o(K, k);
    }, X = (K) => {
      var k = gc(), v = i(k), b = i(v), re = h(b);
      let de;
      var ue = h(v, 2);
      {
        var ve = ($) => {
          var U = bc(), oe = i(U);
          {
            var S = (J) => {
              var Y = Ct();
              M((le) => ie(Y, `${le ?? ""}%`), [() => t(q).toFixed(0)]), o(J, Y);
            }, te = (J) => {
              var Y = Se(), le = _e(Y);
              {
                var H = (ae) => {
                  var ce = Ct();
                  M(() => ie(ce, a())), o(ae, ce);
                };
                g(
                  le,
                  (ae) => {
                    A() && ae(H);
                  },
                  !0
                );
              }
              o(J, Y);
            };
            g(oe, (J) => {
              N() ? J(S) : J(te, !1);
            });
          }
          M((J) => j(U, 1, J, "svelte-b8e192"), [
            () => ne(Z("absolute inset-0 flex items-center justify-center font-medium text-white", ee[l()].text))
          ]), o($, U);
        };
        g(ue, ($) => {
          (A() || N()) && $(ve);
        });
      }
      M(
        ($, U) => {
          j(k, 1, $, "svelte-b8e192"), xe(k, "aria-valuemax", n()), xe(k, "aria-valuenow", m() ? void 0 : a()), xe(k, "aria-label", e.label || "Progress"), xe(v, "width", D), xe(v, "height", D), xe(b, "cx", D / 2), xe(b, "cy", D / 2), xe(b, "r", O), xe(b, "stroke-width", V), xe(re, "cx", D / 2), xe(re, "cy", D / 2), xe(re, "r", O), xe(re, "stroke-width", V), xe(re, "stroke-dasharray", Q), xe(re, "stroke-dashoffset", m() ? Q * 0.75 : t(G)), de = j(re, 0, "text-blue-500 transition-all duration-500 ease-out svelte-b8e192", null, de, U);
        },
        [
          () => ne(Z("relative inline-flex items-center justify-center", ee[l()].circular, z())),
          () => ({ "animate-spin": m() && !R() })
        ]
      ), o(K, k);
    };
    g(x, (K) => {
      u() === "linear" ? K(C) : K(X, !1);
    });
  }
  o(r, L), Xe();
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
  let a = s(e, "value", 15), n = s(e, "variant", 3, "glass"), l = s(e, "size", 3, "md"), d = s(e, "orientation", 3, "vertical"), u = s(e, "animated", 3, !0), p = s(e, "glow", 3, !1), A = s(e, "jelly", 3, !0), N = s(e, "class", 3, ""), m = /* @__PURE__ */ dt(e, [
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
  }, _ = R[n()], f = z[l()];
  var q = kc();
  Ze(
    q,
    (B) => ({ class: B, ...m }),
    [
      () => Z("relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300", _.container, d() === "horizontal" ? "inline-flex flex-row gap-6" : "flex flex-col gap-3", e.error && "border-red-500/50", N())
    ],
    void 0,
    "svelte-mbuql4"
  );
  var ee = i(q);
  Ge(ee, 17, () => e.options, (B) => B.value, (B, F) => {
    var D = wc(), V = i(D);
    V.__change = [pc, F, I];
    var O = h(V, 2), P = i(O);
    {
      var Q = (C) => {
        var X = xc();
        M((K) => j(X, 1, K, "svelte-mbuql4"), [
          () => ne(Z("rounded-full bg-white transition-all duration-300", f.dot, u() && "animate-pulse"))
        ]), o(C, X);
      };
      g(P, (C) => {
        a() === t(F).value && C(Q);
      });
    }
    Ie(O, (C, X) => Rt?.(C, X), () => ({
      enabled: u() && a() === t(F).value,
      intensity: 0.05,
      speed: 2e3
    }));
    var G = h(O, 2), L = i(G), T = i(L), y = h(L, 2);
    {
      var x = (C) => {
        var X = _c(), K = i(X);
        M(
          (k) => {
            j(X, 1, k, "svelte-mbuql4"), ie(K, t(F).description);
          },
          [
            () => ne(Z("text-xs opacity-60 mt-0.5", _.label))
          ]
        ), o(C, X);
      };
      g(y, (C) => {
        t(F).description && C(x);
      });
    }
    Ie(D, (C, X) => jellyHover?.(C, X), () => ({
      enabled: A() && !t(F).disabled,
      scale: 1.02,
      duration: 200,
      borderRadius: "16px"
    })), M(
      (C, X, K) => {
        j(D, 1, C, "svelte-mbuql4"), xe(V, "name", e.name), $l(V, t(F).value), Kt(V, a() === t(F).value), V.disabled = t(F).disabled, j(O, 1, X, "svelte-mbuql4"), j(L, 1, K, "svelte-mbuql4"), ie(T, t(F).label);
      },
      [
        () => ne(Z("relative flex items-center cursor-pointer group", f.gap, t(F).disabled && "opacity-50 cursor-not-allowed")),
        () => ne(Z("relative rounded-full border-2 transition-all duration-300 flex items-center justify-center", f.radio, _.radio, a() === t(F).value && _.checked, a() === t(F).value && p() && _.glow, u() && "transform-gpu will-change-transform", !t(F).disabled && "group-hover:scale-110")),
        () => ne(Z("font-medium transition-colors duration-200", f.label, _.label, !t(F).disabled && "group-hover:text-white"))
      ]
    ), o(B, D);
  });
  var w = h(ee, 2);
  {
    var E = (B) => {
      var F = yc(), D = i(F);
      M(() => ie(D, e.error)), o(B, F);
    };
    g(w, (B) => {
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
  let a = s(e, "options", 19, () => []), n = s(e, "value", 7, ""), l = s(e, "placeholder", 3, "Select an option..."), d = s(e, "disabled", 3, !1), u = s(e, "size", 3, "md"), p = s(e, "variant", 3, "glass"), A = s(e, "blur", 3, "md"), N = s(e, "animate", 3, !0), m = s(e, "liquid", 3, !1), I = s(e, "magnetic", 3, !1), R = s(e, "jelly", 3, !1), z = s(e, "glow", 3, !1), _ = s(e, "reduceMotion", 3, !1), f = s(e, "label", 3, ""), q = s(e, "class", 3, ""), ee = /* @__PURE__ */ dt(e, [
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
  ]), w = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(void 0), B = /* @__PURE__ */ ye(void 0), F = /* @__PURE__ */ ye(-1);
  const D = `select-${Math.random().toString(36).substr(2, 9)}`, V = f() ? `${D}-label` : void 0, O = `${D}-listbox`, P = {
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
  }, L = /* @__PURE__ */ Ee(() => a().find((Y) => Y.value === n())), T = Z("relative flex items-center justify-between rounded-brand-md cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "transition-all duration-200", P[u()], Q[p()], p() === "glass" && G[A()], m() && "backdrop-blur-md hover:backdrop-blur-lg", z() && "focus:shadow-lg focus:shadow-brand-primary/20", R() && !d() && "hover:scale-105 active:scale-95", d() && "opacity-50 cursor-not-allowed", q()), y = Z("absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg", "max-h-60 overflow-auto", Q[p()], p() === "glass" && `${G[A()]} border border-white/20`);
  function x(Y) {
    if (!d())
      switch (Y.key) {
        case "Enter":
        case " ":
          Y.preventDefault(), t(w) && t(F) >= 0 ? v(a()[t(F)]) : X();
          break;
        case "Escape":
          t(w) && (Y.preventDefault(), k());
          break;
        case "ArrowDown":
          Y.preventDefault(), t(w) ? C(1) : K();
          break;
        case "ArrowUp":
          Y.preventDefault(), t(w) ? C(-1) : K();
          break;
        case "Home":
          t(w) && (Y.preventDefault(), W(F, 0));
          break;
        case "End":
          t(w) && (Y.preventDefault(), W(F, a().length - 1));
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
    d() || (W(w, !t(w)), t(w) && W(
      F,
      n() ? a().findIndex((Y) => Y.value === n()) : -1,
      !0
    ));
  }
  function K() {
    d() || (W(w, !0), W(
      F,
      n() ? a().findIndex((Y) => Y.value === n()) : -1,
      !0
    ));
  }
  function k() {
    W(w, !1), W(F, -1);
  }
  function v(Y) {
    Y.disabled || (n(Y.value), e.onValueChange?.(Y.value), k());
  }
  function b(Y) {
    t(E) && !t(E).contains(Y.target) && k();
  }
  bt(() => {
    if (t(w))
      return document.addEventListener("click", b), () => document.removeEventListener("click", b);
  }), bt(() => {
    Zt("Select");
  });
  var re = zc(), de = _e(re);
  {
    var ue = (Y) => {
      var le = Ec(), H = i(le);
      M(() => {
        xe(le, "id", V), xe(le, "for", D), ie(H, f());
      }), o(Y, le);
    };
    g(de, (Y) => {
      f() && Y(ue);
    });
  }
  var ve = h(de, 2);
  Ze(
    ve,
    () => ({
      id: D,
      class: T,
      role: "combobox",
      "aria-expanded": t(w),
      "aria-haspopup": "listbox",
      "aria-labelledby": V || e["aria-label"],
      "aria-activedescendant": t(F) > -1 ? `${D}-option-${t(F)}` : void 0,
      tabindex: d() ? -1 : 0,
      onkeydown: x,
      onclick: X,
      ...ee
    }),
    void 0,
    void 0,
    "svelte-gc8g7h"
  );
  var $ = i(ve), U = i($), oe = h($, 2);
  let S;
  tt(ve, (Y) => W(E, Y), () => t(E)), Ie(ve, (Y, le) => ft?.(Y, le), () => (I() || R()) && !d() && !_() ? {
    strength: I() ? 0.1 : 0.08,
    distance: I() ? 40 : 20
  } : void 0);
  var te = h(ve, 2);
  {
    var J = (Y) => {
      var le = Ac();
      Ge(le, 23, a, (H) => H.value, (H, ae, ce) => {
        var se = Mc();
        se.__click = [Sc, v, ae], se.__keydown = [Tc, v, ae];
        var me = i(se);
        M(
          (fe) => {
            xe(se, "id", `${D}-option-${t(ce)}`), j(se, 1, fe, "svelte-gc8g7h"), xe(se, "aria-selected", n() === t(ae).value), xe(se, "aria-disabled", t(ae).disabled), ie(me, t(ae).label);
          },
          [
            () => ne(Z("px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10", t(F) === t(ce) && "bg-white/20", t(ae).disabled && "opacity-50 cursor-not-allowed"))
          ]
        ), Nt("mouseenter", se, () => !t(ae).disabled && W(F, t(ce), !0)), o(H, se);
      }), tt(le, (H) => W(B, H), () => t(B)), M(() => {
        j(le, 1, ne(y), "svelte-gc8g7h"), xe(le, "id", O), xe(le, "aria-labelledby", V || e["aria-label"]);
      }), $e(1, le, () => ht, () => ({
        direction: "down",
        distance: 10,
        duration: N() && !_() ? 150 : 0
      })), $e(2, le, () => ht, () => ({
        direction: "up",
        distance: 10,
        duration: N() && !_() ? 100 : 0
      })), o(Y, le);
    };
    g(te, (Y) => {
      t(w) && Y(J);
    });
  }
  M(
    (Y) => {
      ie(U, t(L)?.label || l()), S = j(oe, 0, "w-4 h-4 ml-2 transition-transform duration-200 svelte-gc8g7h", null, S, Y);
    },
    [() => ({ "rotate-180": t(w) })]
  ), o(r, re), Xe();
}
vt(["click", "keydown"]);
var Pc = (r, e, a) => {
  r.stopPropagation(), e(t(a).value);
}, Lc = /* @__PURE__ */ c('<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md"> <button class="hover:text-red-300"><!></button></span>'), Dc = /* @__PURE__ */ c('<span class="text-xs opacity-70"> </span>'), Rc = /* @__PURE__ */ c('<div class="flex flex-wrap gap-1"><!> <!></div>'), jc = /* @__PURE__ */ c("<span> </span>"), Nc = /* @__PURE__ */ c('<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>'), Oc = (r, e) => {
  r.stopPropagation(), e();
}, qc = /* @__PURE__ */ c('<button class="p-1 hover:bg-white/10 rounded transition-colors"><!></button>'), Bc = /* @__PURE__ */ c('<div class="p-2 border-b border-white/10"><div class="relative"><!> <input placeholder="Search options..." autocomplete="off"/></div></div>'), Fc = /* @__PURE__ */ c("<div> </div>"), Hc = /* @__PURE__ */ c('<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5"> </div>'), Vc = (r, e, a) => e(t(a)), Gc = (r, e, a) => r.key === "Enter" && e(t(a)), Uc = /* @__PURE__ */ c('<div class="text-xs opacity-60 mt-0.5"> </div>'), Yc = /* @__PURE__ */ c("<div><!></div>"), Wc = /* @__PURE__ */ c('<div role="option"><div class="flex-1"><div class="font-medium"> </div> <!></div> <!></div>'), Kc = /* @__PURE__ */ c("<!> <!>", 1), Xc = /* @__PURE__ */ c('<div><!> <div class="overflow-y-auto max-h-48 svelte-13k9go" role="listbox"><!></div></div>'), Zc = /* @__PURE__ */ c('<p class="text-red-400 text-sm mt-1" role="alert"> </p>'), Qc = /* @__PURE__ */ c('<div><div role="combobox" aria-haspopup="listbox"><div class="flex-1 truncate"><!></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!></div>');
const Jc = {
  hash: "svelte-13k9go",
  code: ".overflow-y-auto.svelte-13k9go {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar {width:6px;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-track {background:transparent;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}.overflow-y-auto.svelte-13k9go::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}"
};
function K1(r, e) {
  Ke(e, !0), Qe(r, Jc);
  let a = s(e, "value", 15), n = s(e, "placeholder", 3, "Select an option..."), l = s(e, "multiple", 3, !1), d = s(e, "searchable", 3, !1), u = s(e, "clearable", 3, !1), p = s(e, "disabled", 3, !1), A = s(e, "loading", 3, !1), N = s(e, "size", 3, "md"), m = s(e, "variant", 3, "glass"), I = s(e, "closeOnSelect", 3, !0), R = s(e, "class", 3, ""), z = /* @__PURE__ */ dt(e, [
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
  const _ = Tt();
  let f = /* @__PURE__ */ ye(!1), q = /* @__PURE__ */ ye(""), ee = /* @__PURE__ */ ye(null), w = /* @__PURE__ */ ye(null), E = /* @__PURE__ */ ye(
    -1
    // mutated via keyboard handlers
  );
  const B = `select-${Math.random().toString(36).slice(2, 11)}`, F = /* @__PURE__ */ Ee(() => () => a() ? Array.isArray(a()) ? a() : [a()] : []), D = /* @__PURE__ */ Ee(() => () => {
    if (!t(q).trim()) return e.options;
    const H = t(q).toLowerCase();
    return e.options.filter((ae) => ae.label.toLowerCase().includes(H) || ae.description?.toLowerCase().includes(H));
  }), V = /* @__PURE__ */ Ee(() => () => {
    if (!e.groupBy) return { "": t(D)() };
    const H = {};
    return t(D)().forEach((ae) => {
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
  }, G = P[N()], L = Q[m()];
  bt(() => {
    t(V)(), t(O)(), u(), A(), e.error, R();
  });
  function T() {
    p() || (W(f, !t(f)), t(f) && d() && setTimeout(() => t(w)?.focus(), 0));
  }
  function y(H) {
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
      _("change", { value: a(), option: H });
    }
  }
  function x() {
    a(l() ? [] : void 0), _("clear");
  }
  function C(H) {
    l() && a(t(F)().filter((ae) => ae !== H));
  }
  function X(H) {
    if (!p())
      switch (H.key) {
        case "Enter": {
          H.preventDefault(), t(f) && t(E) >= 0 && t(D)()[t(E)] ? y(t(D)()[t(E)]) : t(f) || T();
          break;
        }
        case "Escape": {
          t(f) && (W(f, !1), H.stopPropagation());
          break;
        }
        case "ArrowDown": {
          H.preventDefault(), t(f) ? W(E, Math.min(t(E) + 1, t(D)().length - 1), !0) : T();
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
    t(D)(), W(E, -1);
  });
  var k = Qc();
  Ze(k, (H) => ({ class: H, ...z }), [() => Z("relative w-full", R())], void 0, "svelte-13k9go");
  var v = i(k);
  v.__click = T, v.__keydown = X;
  var b = i(v), re = i(b);
  {
    var de = (H) => {
      var ae = Rc(), ce = i(ae);
      Ge(ce, 16, () => t(F)().slice(0, 2), (fe) => fe, (fe, be) => {
        const ge = /* @__PURE__ */ Ee(() => e.options.find((Re) => Re.value === be));
        var Ce = Se(), Pe = _e(Ce);
        {
          var Be = (Re) => {
            var we = Lc(), pe = i(we), Te = h(pe);
            Te.__click = [Pc, C, ge];
            var Ne = i(Te);
            sa(Ne, { size: 12 }), M(() => ie(pe, `${t(ge).label ?? ""} `)), o(Re, we);
          };
          g(Pe, (Re) => {
            t(ge) && Re(Be);
          });
        }
        o(fe, Ce);
      });
      var se = h(ce, 2);
      {
        var me = (fe) => {
          var be = Dc(), ge = i(be);
          M((Ce) => ie(ge, `+${Ce ?? ""} more`), [() => t(F)().length - 2]), o(fe, be);
        };
        g(se, (fe) => {
          t(F)().length > 2 && fe(me);
        });
      }
      o(H, ae);
    }, ue = (H) => {
      var ae = jc(), ce = i(ae);
      M(
        (se, me) => {
          j(ae, 1, se, "svelte-13k9go"), ie(ce, me);
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
  var ve = h(b, 2), $ = i(ve);
  {
    var U = (H) => {
      var ae = Nc();
      o(H, ae);
    }, oe = (H) => {
      var ae = Se(), ce = _e(ae);
      {
        var se = (me) => {
          var fe = qc();
          fe.__click = [Oc, x];
          var be = i(fe);
          sa(be, { size: 16 }), o(me, fe);
        };
        g(
          ce,
          (me) => {
            u() && t(F)().length > 0 && me(se);
          },
          !0
        );
      }
      o(H, ae);
    };
    g($, (H) => {
      A() ? H(U) : H(oe, !1);
    });
  }
  var S = h($, 2);
  {
    let H = /* @__PURE__ */ Ee(() => Z("transition-transform duration-200", t(f) && "rotate-180"));
    an(S, {
      size: 16,
      get class() {
        return t(H);
      }
    });
  }
  var te = h(v, 2);
  {
    var J = (H) => {
      var ae = Xc(), ce = i(ae);
      {
        var se = (Ce) => {
          var Pe = Bc(), Be = i(Pe), Re = i(Be);
          bi(Re, {
            size: 16,
            class: "absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50"
          });
          var we = h(Re, 2);
          tt(we, (pe) => W(w, pe), () => t(w)), M((pe) => j(we, 1, pe, "svelte-13k9go"), [
            () => ne(Z("w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50", L.search))
          ]), mr(we, () => t(q), (pe) => W(q, pe)), o(Ce, Pe);
        };
        g(ce, (Ce) => {
          d() && Ce(se);
        });
      }
      var me = h(ce, 2), fe = i(me);
      {
        var be = (Ce) => {
          var Pe = Fc(), Be = i(Pe);
          M(
            (Re) => {
              j(Pe, 1, Re, "svelte-13k9go"), ie(Be, t(q) ? "No options found" : "No options available");
            },
            [
              () => ne(Z("text-center py-4 opacity-60", G.option))
            ]
          ), o(Ce, Pe);
        }, ge = (Ce) => {
          var Pe = Se(), Be = _e(Pe);
          Ge(Be, 17, () => Object.entries(t(V)()), ([Re, we]) => Re, (Re, we) => {
            var pe = /* @__PURE__ */ Ee(() => Kr(t(we), 2));
            let Te = () => t(pe)[0], Ne = () => t(pe)[1];
            var Ae = Kc(), Le = _e(Ae);
            {
              var qe = (ke) => {
                var he = Hc(), ze = i(he);
                M(() => ie(ze, Te())), o(ke, he);
              };
              g(Le, (ke) => {
                Te() && Object.keys(t(V)()).length > 1 && ke(qe);
              });
            }
            var Fe = h(Le, 2);
            Ge(Fe, 17, Ne, (ke) => ke.value, (ke, he) => {
              const ze = /* @__PURE__ */ Ee(() => t(F)().includes(t(he).value)), De = /* @__PURE__ */ Ee(() => t(D)().indexOf(t(he)) === t(E));
              var He = Wc();
              He.__click = [Vc, y, he], He.__keydown = [Gc, y, he];
              var Je = i(He), We = i(Je), at = i(We), lt = h(We, 2);
              {
                var et = (Oe) => {
                  var Ve = Uc(), rt = i(Ve);
                  M(() => ie(rt, t(he).description)), o(Oe, Ve);
                };
                g(lt, (Oe) => {
                  t(he).description && Oe(et);
                });
              }
              var nt = h(Je, 2);
              {
                var Ue = (Oe) => {
                  var Ve = Yc(), rt = i(Ve);
                  {
                    var gt = (_t) => {
                      Ya(_t, { size: 12, class: "text-white" });
                    };
                    g(rt, (_t) => {
                      t(ze) && _t(gt);
                    });
                  }
                  M((_t) => j(Ve, 1, _t, "svelte-13k9go"), [
                    () => ne(Z("w-4 h-4 border rounded flex items-center justify-center", t(ze) ? "bg-blue-500 border-blue-500" : "border-white/20"))
                  ]), o(Oe, Ve);
                }, je = (Oe) => {
                  var Ve = Se(), rt = _e(Ve);
                  {
                    var gt = (_t) => {
                      Ya(_t, { size: 16, class: "text-blue-400" });
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
                  l() ? Oe(Ue) : Oe(je, !1);
                });
              }
              M(
                (Oe) => {
                  j(He, 1, Oe, "svelte-13k9go"), xe(He, "aria-selected", t(ze)), xe(He, "tabindex", t(he).disabled ? -1 : 0), ie(at, t(he).label);
                },
                [
                  () => ne(Z(
                    "flex items-center justify-between cursor-pointer transition-colors",
                    G.option,
                    t(he).disabled ? "opacity-50 cursor-not-allowed" : L.option,
                    t(ze) && L.optionSelected,
                    t(De) && "bg-white/5"
                  ))
                ]
              ), o(ke, He);
            }), o(Re, Ae);
          }), o(Ce, Pe);
        };
        g(fe, (Ce) => {
          t(D)().length === 0 ? Ce(be) : Ce(ge, !1);
        });
      }
      M(
        (Ce) => {
          j(ae, 1, Ce, "svelte-13k9go"), xe(me, "id", `${B}-listbox`);
        },
        [
          () => ne(Z("absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden", L.dropdown, G.dropdown))
        ]
      ), o(H, ae);
    };
    g(te, (H) => {
      t(f) && H(J);
    });
  }
  var Y = h(te, 2);
  {
    var le = (H) => {
      var ae = Zc(), ce = i(ae);
      M(() => ie(ce, e.error)), o(H, ae);
    };
    g(Y, (H) => {
      e.error && H(le);
    });
  }
  tt(k, (H) => W(ee, H), () => t(ee)), M(
    (H) => {
      j(v, 1, H, "svelte-13k9go"), xe(v, "tabindex", p() ? -1 : 0), xe(v, "aria-expanded", t(f)), xe(v, "aria-controls", `${B}-listbox`), xe(v, "aria-labelledby", B);
    },
    [
      () => ne(Z("relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer", G.trigger, L.trigger, p() && "opacity-50 cursor-not-allowed", e.error && "border-red-500/50", t(f) && "ring-2 ring-blue-400/50"))
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
  const a = s(e, "variant", 3, "glass"), n = s(e, "type", 3, "text"), l = s(e, "lines", 3, 3), d = s(e, "animated", 3, !0), u = s(e, "glow", 3, !1), p = s(e, "speed", 3, "normal"), A = s(e, "class", 3, ""), N = s(e, "rounded", 3, !0), m = /* @__PURE__ */ dt(e, [
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
  }, R = {
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
  }, _ = I[a()], f = z[n()], q = R[p()], ee = /* @__PURE__ */ Ee(() => n() === "text" || n() === "paragraph" ? Array.from({ length: l() }, (D, V) => V === l() - 1 ? "60%" : `${85 + Math.floor(Math.random() * 15)}%`) : []);
  var w = Se(), E = _e(w);
  {
    var B = (D) => {
      var V = tv();
      Ze(V, (O) => ({ class: O, ...m }), [() => Z(f.spacing, A())], void 0, "svelte-1jcbe1x"), Ge(V, 21, () => t(ee), Vr, (O, P, Q) => {
        var G = ev(), L = i(G);
        {
          var T = (y) => {
            var x = $c();
            M((C) => j(x, 1, C, "svelte-1jcbe1x"), [
              () => ne(Z("absolute inset-0 bg-gradient-to-r", _.shimmer, q, "animate-shimmer"))
            ]), o(y, x);
          };
          g(L, (y) => {
            d() && y(T);
          });
        }
        Ie(G, (y, x) => Rt?.(y, x), () => ({
          enabled: d() && a() === "liquid",
          intensity: 0.02,
          speed: 3e3
        })), M(
          (y) => {
            j(G, 1, y, "svelte-1jcbe1x"), pt(G, `width: ${(e.width || t(P)) ?? ""}`);
          },
          [
            () => ne(Z("relative overflow-hidden backdrop-blur-xl border", f.height, _.bg, _.border, u() && _.glow, N() && "rounded-lg", d() && "transform-gpu will-change-transform"))
          ]
        ), $e(3, G, () => ht, () => ({ duration: 200, delay: Q * 50 })), o(O, G);
      }), o(D, V);
    }, F = (D) => {
      var V = av();
      Ze(
        V,
        (Q, G) => ({ class: Q, ...m, [_r]: G }),
        [
          () => Z("relative overflow-hidden backdrop-blur-xl border", f.width, f.height, _.bg, _.border, f.rounded || N() && "rounded-lg", u() && _.glow, d() && "transform-gpu will-change-transform", A()),
          () => ({ width: e.width, height: e.height })
        ],
        void 0,
        "svelte-1jcbe1x"
      );
      var O = i(V);
      {
        var P = (Q) => {
          var G = rv();
          M((L) => j(G, 1, L, "svelte-1jcbe1x"), [
            () => ne(Z("absolute inset-0 bg-gradient-to-r", _.shimmer, q, "animate-shimmer"))
          ]), o(Q, G);
        };
        g(O, (Q) => {
          d() && Q(P);
        });
      }
      Ie(V, (Q, G) => Rt?.(Q, G), () => ({
        enabled: d() && a() === "liquid",
        intensity: 0.03,
        speed: 3e3
      })), $e(3, V, () => ht, () => ({ duration: 200 })), o(D, V);
    };
    g(E, (D) => {
      n() === "text" || n() === "paragraph" ? D(B) : D(F, !1);
    });
  }
  o(r, w), Xe();
}
function ov(r, e, a, n) {
  if (e()) return;
  W(a, !0), n(r);
  const l = (u) => n(u), d = () => {
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
  let a = s(e, "value", 7, 50), n = s(e, "min", 3, 0), l = s(e, "max", 3, 100), d = s(e, "step", 3, 1), u = s(e, "disabled", 3, !1), p = s(e, "size", 3, "md"), A = s(e, "variant", 3, "glass"), N = s(e, "blur", 3, "md"), m = s(e, "showValue", 3, !1), I = s(e, "showMarks", 3, !1), R = s(e, "marks", 19, () => []), z = s(e, "animate", 3, !0), _ = s(e, "reduceMotion", 3, !1);
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
  ]), q = /* @__PURE__ */ ye(void 0), ee = /* @__PURE__ */ ye(void 0), w = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(!1);
  const B = `slider-${Math.random().toString(36).substr(2, 9)}`, F = {
    sm: { track: "h-1", thumb: "w-4 h-4", value: "text-xs" },
    md: { track: "h-1.5", thumb: "w-5 h-5", value: "text-sm" },
    lg: { track: "h-2", thumb: "w-6 h-6", value: "text-base" }
  }, D = {
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
  }, O = /* @__PURE__ */ Ee(() => (a() - n()) / (l() - n()) * 100), P = Z("relative w-full rounded-full cursor-pointer", F[p()].track, D[A()].track, A() === "glass" && V[N()], u() && "opacity-50 cursor-not-allowed"), Q = Z("absolute top-0 left-0 h-full rounded-full transition-all duration-200", D[A()].fill), G = /* @__PURE__ */ Ee(() => Z("absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2", "hover:scale-110 active:scale-95", F[p()].thumb, D[A()].thumb, u() && "cursor-not-allowed hover:scale-100 active:scale-100", t(w) && "scale-110", t(E) && "ring-2 ring-blue-400/50"));
  function L(S) {
    if (u()) return;
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
    if (!t(ee) || u()) return;
    const te = t(ee).getBoundingClientRect(), J = S.clientX - te.left, Y = Math.max(0, Math.min(100, J / te.width * 100)), le = n() + Y / 100 * (l() - n()), H = d() ? Math.round(le / d()) * d() : le, ae = Math.max(n(), Math.min(l(), H));
    ae !== a() && (a(ae), e.onValueChange?.(ae));
  }
  function y() {
    W(E, !0);
  }
  function x() {
    W(E, !1);
  }
  bt(() => {
    Zt("Slider", "medium");
  });
  var C = cv(), X = i(C);
  {
    var K = (S) => {
      var te = lv();
      let J;
      var Y = i(te), le = h(Y);
      {
        var H = (ae) => {
          var ce = iv(), se = i(ce);
          M(() => ie(se, `(${a() ?? ""})`)), o(ae, ce);
        };
        g(le, (ae) => {
          m() && ae(H);
        });
      }
      M(
        (ae) => {
          xe(te, "id", `slider-label-${B}`), xe(te, "for", B), J = j(te, 1, "block text-sm font-medium text-white svelte-wpw1ph", null, J, ae), ie(Y, `${e.label ?? ""} `);
        },
        [() => ({ "opacity-50": u() })]
      ), o(S, te);
    };
    g(X, (S) => {
      e.label && S(K);
    });
  }
  var k = h(X, 2);
  Ze(k, () => ({ class: "relative w-full py-2", ...f }), void 0, void 0, "svelte-wpw1ph");
  var v = i(k);
  v.__mousedown = [ov, u, w, T], v.__keydown = L;
  var b = i(v);
  let re;
  var de = h(b, 2);
  let ue;
  Ie(de, (S, te) => Ut?.(S, te), () => z() && !_() && t(w) ? { scale: 1.1, duration: 100 } : void 0);
  var ve = h(de, 2);
  {
    var $ = (S) => {
      var te = Se(), J = _e(te);
      Ge(J, 16, R, (Y) => Y, (Y, le) => {
        const H = /* @__PURE__ */ Ee(() => (le - n()) / (l() - n()) * 100);
        var ae = sv();
        let ce;
        M((se) => ce = pt(ae, "", ce, se), [() => ({ left: `${t(H) ?? ""}%` })]), o(Y, ae);
      }), o(S, te);
    };
    g(ve, (S) => {
      I() && R().length > 0 && S($);
    });
  }
  tt(v, (S) => W(ee, S), () => t(ee));
  var U = h(v, 2);
  {
    var oe = (S) => {
      var te = dv(), J = i(te), Y = i(J);
      M(
        (le) => {
          j(J, 1, le, "svelte-wpw1ph"), ie(Y, a());
        },
        [
          () => ne(Z("font-medium text-white/80", F[p()].value))
        ]
      ), o(S, te);
    };
    g(U, (S) => {
      m() && S(oe);
    });
  }
  tt(k, (S) => W(q, S), () => t(q)), M(
    (S, te) => {
      xe(v, "id", B), j(v, 1, ne(P), "svelte-wpw1ph"), xe(v, "aria-valuemin", n()), xe(v, "aria-valuemax", l()), xe(v, "aria-valuenow", a()), xe(v, "aria-labelledby", e.label ? `slider-label-${B}` : void 0), xe(v, "aria-label", e.label ? void 0 : "Slider"), xe(v, "tabindex", u() ? -1 : 0), j(b, 1, ne(Q), "svelte-wpw1ph"), re = pt(b, "", re, S), j(de, 1, ne(t(G)), "svelte-wpw1ph"), ue = pt(de, "", ue, te);
    },
    [
      () => ({ width: `${t(O) ?? ""}%` }),
      () => ({
        left: `${t(O) ?? ""}%`,
        transform: "translateX(-50%) translateY(-50%)"
      })
    ]
  ), Nt("focus", v, y), Nt("blur", v, x), o(r, C), Xe();
}
vt(["mousedown", "keydown"]);
var uv = /* @__PURE__ */ c("<label> </label>"), fv = /* @__PURE__ */ c("<p> </p>"), bv = /* @__PURE__ */ c('<div class="flex flex-col"><!> <!></div>'), gv = /* @__PURE__ */ c('<div class="flex items-center gap-3"><button><span></span></button> <!></div>');
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
function Q1(r, e) {
  Ke(e, !0), Qe(r, hv);
  let a = s(e, "checked", 7, !1), n = s(e, "disabled", 3, !1), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), u = s(e, "blur", 3, "md"), p = s(e, "animate", 3, !0), A = s(e, "liquid", 3, !1), N = s(e, "magnetic", 3, !1), m = s(e, "jelly", 3, !1), I = s(e, "glow", 3, !1), R = s(e, "reduceMotion", 3, !1), z = s(e, "class", 3, ""), _ = /* @__PURE__ */ dt(e, [
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
  const q = `switch-${Math.random().toString(36).substr(2, 9)}`, ee = e.label ? `${q}-label` : void 0, w = e.description ? `${q}-description` : void 0, E = {
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
  }, D = Z(
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
    E[l()].track,
    a() ? B[d()].trackChecked : B[d()].track,
    d() === "glass" && F[u()],
    A() && "backdrop-blur-md",
    I() && a() && "shadow-lg shadow-blue-400/30",
    n() && "opacity-50 cursor-not-allowed",
    !n() && "cursor-pointer hover:scale-105",
    m() && !n() && "hover:scale-110 active:scale-95",
    z()
  ), V = Z("inline-block rounded-full transition-all duration-200 ease-in-out transform", E[l()].thumb, B[d()].thumb, a() ? E[l()].translate : "translate-x-0.5", !R() && "will-change-transform");
  function O() {
    if (n()) return;
    const x = !a();
    a(x), e.onCheckedChange?.(x);
  }
  function P(x) {
    n() || (x.key === "Enter" || x.key === " ") && (x.preventDefault(), O());
  }
  bt(() => {
    Zt("Switch", "small");
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
      "aria-describedby": w,
      "aria-label": e["aria-label"],
      class: D,
      disabled: n(),
      onclick: O,
      onkeydown: P,
      ..._
    }),
    void 0,
    void 0,
    "svelte-ne1gt8"
  );
  var L = i(G);
  tt(G, (x) => W(f, x), () => t(f)), Ie(G, (x, C) => Ut?.(x, C), () => p() && !R() ? { scale: 0.95, duration: 100 } : void 0), Ie(G, (x, C) => ft?.(x, C), () => N() && !n() && !R() ? { strength: 0.15, distance: 30 } : void 0), Ie(G, (x, C) => ft?.(x, C), () => m() && !n() && !R() ? { strength: 0.1 } : void 0);
  var T = h(G, 2);
  {
    var y = (x) => {
      var C = bv(), X = i(C);
      {
        var K = (b) => {
          var re = uv();
          let de;
          var ue = i(re);
          M(
            (ve) => {
              xe(re, "id", ee), xe(re, "for", q), de = j(re, 1, "text-sm font-medium text-white cursor-pointer", null, de, ve), ie(ue, e.label);
            },
            [() => ({ "opacity-50": n() })]
          ), o(b, re);
        };
        g(X, (b) => {
          e.label && b(K);
        });
      }
      var k = h(X, 2);
      {
        var v = (b) => {
          var re = fv();
          let de;
          var ue = i(re);
          M(
            (ve) => {
              xe(re, "id", w), de = j(re, 1, "text-xs text-white/70", null, de, ve), ie(ue, e.description);
            },
            [() => ({ "opacity-50": n() })]
          ), o(b, re);
        };
        g(k, (b) => {
          e.description && b(v);
        });
      }
      o(x, C);
    };
    g(T, (x) => {
      (e.label || e.description) && x(y);
    });
  }
  M(() => j(L, 1, ne(V), "svelte-ne1gt8")), o(r, Q), Xe();
}
var mv = (r, e, a) => e(t(a)), pv = (r, e, a) => e(r, t(a)), xv = /* @__PURE__ */ c('<button role="tab"> </button>'), _v = /* @__PURE__ */ c('<div class="svelte-pa3tfx"><!></div>'), wv = /* @__PURE__ */ c('<div class="svelte-pa3tfx"><!></div>'), yv = /* @__PURE__ */ c('<div><div role="tablist"></div> <div role="tabpanel" tabindex="0"><!></div></div>');
const kv = {
  hash: "svelte-pa3tfx",
  code: `button[role="tab"].svelte-pa3tfx {will-change:transform;}

    @media (prefers-reduced-motion: reduce) {.svelte-pa3tfx {transition:none;
            animation: none;will-change:auto;}
    }`
};
function J1(r, e) {
  Ke(e, !0), Qe(r, kv);
  let a = s(e, "tabs", 19, () => []), n = s(e, "activeTab", 23, () => a()[0]?.id || ""), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), u = s(e, "orientation", 3, "horizontal"), p = s(e, "blur", 3, "md"), A = s(e, "animate", 3, !0), N = s(e, "reduceMotion", 3, !1), m = s(e, "class", 3, ""), I = /* @__PURE__ */ dt(e, [
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
  ]), R;
  const z = `tabs-${Math.random().toString(36).substr(2, 9)}`, _ = {
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
  }, ee = u() === "horizontal", E = Z("flex p-1", "tab-radius-md", ee ? "flex-row" : "flex-col min-w-max", f[l()].list, (l() === "glass" || l() === "bubbleTea") && q[p()]), F = Z("relative flex-1 transition-all duration-200", "tab-radius-sm", "focus:outline-none focus:ring-2 focus:ring-blue-400/50", "font-medium whitespace-nowrap cursor-pointer", _[d()], f[l()].tab), D = Z(F, f[l()].activeTab), V = Z("mt-4 focus:outline-none", ee ? "" : "ml-4");
  function O(k) {
    k.disabled || (n(k.id), e.onTabChange?.(k.id));
  }
  function P(k, v) {
    if (v.disabled) return;
    const b = a().filter((de) => !de.disabled), re = b.findIndex((de) => de.id === n());
    switch (k.key) {
      case "Enter":
      case " ":
        k.preventDefault(), O(v);
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
    R?.querySelector(`[data-tab-id="${k}"]`)?.focus();
  }
  const G = /* @__PURE__ */ Ee(() => a().find((k) => k.id === n())), L = /* @__PURE__ */ Ee(() => e.panel ? e.panel(n()) : null);
  bt(() => {
    Zt("Tabs");
  });
  var T = yv();
  Ze(T, (k) => ({ class: k, ...I }), [() => Z("w-full", ee ? "" : "flex", m())], void 0, "svelte-pa3tfx");
  var y = i(T);
  Ge(y, 23, a, (k) => k.id, (k, v) => {
    var b = xv();
    let re;
    b.__click = [mv, O, v], b.__keydown = [pv, P, v];
    var de = i(b);
    Ie(b, (ue, ve) => kt?.(ue, ve), () => A() && !N() && t(v).id === n() ? { blur: p(), opacity: "medium" } : void 0), M(
      (ue) => {
        xe(b, "id", `${z}-tab-${t(v).id}`), re = j(b, 1, ne(t(v).id === n() ? D : F), "svelte-pa3tfx", re, ue), xe(b, "tabindex", t(v).id === n() ? 0 : -1), xe(b, "aria-selected", t(v).id === n()), xe(b, "aria-controls", `${z}-tabpanel-${t(v).id}`), xe(b, "aria-disabled", t(v).disabled), xe(b, "data-tab-id", t(v).id), b.disabled = t(v).disabled, ie(de, t(v).label);
      },
      [
        () => ({
          "opacity-50": t(v).disabled,
          "cursor-not-allowed": t(v).disabled
        })
      ]
    ), o(k, b);
  }), tt(y, (k) => R = k, () => R);
  var x = h(y, 2), C = i(x);
  {
    var X = (k) => {
      var v = _v(), b = i(v);
      ot(b, () => t(G).content), $e(1, v, () => ht, () => ({
        direction: "up",
        distance: 10,
        duration: A() && !N() ? 200 : 0
      })), $e(2, v, () => ht, () => ({
        direction: "down",
        distance: 10,
        duration: A() && !N() ? 150 : 0
      })), o(k, v);
    }, K = (k) => {
      var v = Se(), b = _e(v);
      {
        var re = (de) => {
          var ue = wv(), ve = i(ue);
          ot(ve, () => t(L)), $e(1, ue, () => ht, () => ({
            direction: "up",
            distance: 10,
            duration: A() && !N() ? 200 : 0
          })), $e(2, ue, () => ht, () => ({
            direction: "down",
            distance: 10,
            duration: A() && !N() ? 150 : 0
          })), o(de, ue);
        };
        g(
          b,
          (de) => {
            t(L) && de(re);
          },
          !0
        );
      }
      o(k, v);
    };
    g(C, (k) => {
      t(G)?.content ? k(X) : k(K, !1);
    });
  }
  M(() => {
    j(y, 1, ne(E), "svelte-pa3tfx"), xe(y, "aria-orientation", u()), xe(y, "aria-label", e["aria-label"]), j(x, 1, ne(V), "svelte-pa3tfx"), xe(x, "id", `${z}-tabpanel-${n()}`), xe(x, "aria-labelledby", `${z}-tab-${n()}`);
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
  let a = s(e, "value", 7, ""), n = s(e, "placeholder", 3, ""), l = s(e, "disabled", 3, !1), d = s(e, "size", 3, "md"), u = s(e, "variant", 3, "glass"), p = s(e, "blur", 3, "md"), A = s(e, "rows", 3, 4), N = s(e, "resize", 3, "vertical"), m = s(e, "autoResize", 3, !1), I = s(e, "maxHeight", 3, 300), R = s(e, "minHeight", 3, 80), z = s(e, "animate", 3, !0), _ = s(e, "reduceMotion", 3, !1), f = s(e, "class", 3, ""), q = /* @__PURE__ */ dt(e, [
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
  ]), ee = /* @__PURE__ */ ye(void 0), w = /* @__PURE__ */ ye(!1);
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
  }, D = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y"
  }, V = /* @__PURE__ */ Ee(() => Z("w-full rounded-brand-md transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50", "placeholder:transition-colors placeholder:duration-200", E[d()], B[u()], u() === "glass" && F[p()], D[N()], l() && "opacity-50 cursor-not-allowed", t(w) && u() === "glass" && "glass-medium", f()));
  function O(y) {
    const x = y.target;
    a(x.value), e.onValueChange?.(x.value), m() && L();
  }
  function P() {
    W(w, !0);
  }
  function Q() {
    W(w, !1);
  }
  function G(y) {
    (y.ctrlKey || y.metaKey) && y.key === "a" || (y.ctrlKey || y.metaKey) && y.key === "z" || (y.ctrlKey || y.metaKey) && y.key === "y" || (y.key, y.key === "Escape" && t(ee).blur());
  }
  function L() {
    if (!t(ee) || !m()) return;
    t(ee).style.height = "auto";
    const y = t(ee).scrollHeight, x = Math.min(Math.max(y, R()), I());
    t(ee).style.height = `${x}px`;
  }
  bt(() => {
    m() && t(ee) && L();
  }), bt(() => {
    Zt("Textarea", "medium");
  });
  var T = Cv();
  Ze(
    T,
    (y) => ({
      class: t(V),
      placeholder: n(),
      disabled: l(),
      rows: A(),
      cols: e.cols,
      "aria-label": q["aria-label"] || n(),
      oninput: O,
      onfocus: P,
      onblur: Q,
      onkeydown: G,
      ...q,
      [_r]: y
    }),
    [
      () => ({
        "min-height": m() ? `${R()}px` : void 0,
        "max-height": m() ? `${I()}px` : void 0
      })
    ],
    void 0,
    "svelte-16ael9g"
  ), tt(T, (y) => W(ee, y), () => t(ee)), ur(() => mr(T, a)), Ie(T, (y, x) => kt?.(y, x), () => z() && !_() && t(w) ? { blur: p(), opacity: "medium" } : void 0), o(r, T), Xe();
}
var Sv = (r) => dr.set(r.currentTarget.value), Tv = /* @__PURE__ */ c('<div class="space-y-2 svelte-1erodky"><label for="theme-select" class="block text-sm font-medium text-text svelte-1erodky">Theme Preference</label> <select id="theme-select"><option class="svelte-1erodky">Auto (Follow System)</option><option class="svelte-1erodky">Terminal (Dark)</option><option class="svelte-1erodky">Bubble Tea (Light)</option></select></div>'), Mv = () => dr.setAuto(), Av = () => dr.setTerminal(), zv = () => dr.setBubbleTea(), Iv = /* @__PURE__ */ c('<div class="flex rounded-lg overflow-hidden border border-border/30 svelte-1erodky"><button>Auto</button> <button>Terminal</button> <button>Bubble Tea</button></div>'), Pv = () => dr.setAuto(), Lv = () => dr.setTerminal(), Dv = () => dr.setBubbleTea(), Rv = /* @__PURE__ */ c('<div class="flex flex-wrap gap-2 svelte-1erodky"><button>🔄 Auto</button> <button>💻 Terminal</button> <button>🧋 Bubble Tea</button></div>'), jv = /* @__PURE__ */ c('<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20 svelte-1erodky"><h4 class="font-medium text-text mb-1 svelte-1erodky"> </h4> <p class="text-sm text-text/70 svelte-1erodky"> </p></div>'), Nv = /* @__PURE__ */ c('<span class="svelte-1erodky"> </span>'), Ov = /* @__PURE__ */ c('<span class="svelte-1erodky"> </span>'), qv = /* @__PURE__ */ c('<div class="mt-2 flex items-center gap-2 text-xs text-text/60 svelte-1erodky"><div></div> <!></div>'), Bv = /* @__PURE__ */ c("<div><!> <!> <!></div>");
const Fv = {
  hash: "svelte-1erodky",
  code: `
	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {.theme-selector.svelte-1erodky :where(.svelte-1erodky) {transition-duration:0.01ms !important;}
	}`
};
function ep(r, e) {
  Ke(e, !0), Qe(r, Fv);
  const [a, n] = Xo(), l = () => Ko(Qo, "$themeConfig", a), d = s(e, "variant", 3, "pills"), u = s(e, "showDescription", 3, !0), p = s(e, "showSystemStatus", 3, !0), A = s(e, "size", 3, "md"), N = s(e, "class", 3, ""), m = /* @__PURE__ */ dt(e, [
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
  }, R = (D, V) => {
    const O = D === V;
    return d() === "pills" ? Z(
      "px-3 py-2 rounded-lg font-medium transition-all duration-200",
      "border border-transparent cursor-pointer",
      O ? "bg-primary text-white border-primary shadow-lg" : "bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30",
      I[A()]
    ) : d() === "toggle" ? Z(
      "flex-1 px-3 py-2 font-medium transition-all duration-200",
      "border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg",
      O ? "bg-primary text-white shadow-inner" : "bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text",
      I[A()]
    ) : "";
  }, z = /* @__PURE__ */ Ee(() => l() ? Is(l().userTheme, l().resolvedTheme) : null);
  var _ = Bv();
  Ze(_, (D) => ({ class: D, ...m }), [() => Z("theme-selector", N())], void 0, "svelte-1erodky");
  var f = i(_);
  {
    var q = (D) => {
      var V = Tv(), O = h(i(V), 2);
      O.__change = [Sv];
      var P = i(O);
      P.value = P.__value = "auto";
      var Q = h(P);
      Q.value = Q.__value = "terminal";
      var G = h(Q);
      G.value = G.__value = "bubbleTea";
      var L;
      Vo(O), M(
        (T) => {
          j(O, 1, T, "svelte-1erodky"), L !== (L = l()?.userTheme || "auto") && (O.value = (O.__value = l()?.userTheme || "auto") ?? "", pa(O, l()?.userTheme || "auto"));
        },
        [
          () => ne(Z("w-full border border-border/30 rounded-lg bg-surface text-text", "focus:ring-2 focus:ring-primary focus:border-primary", I[A()]))
        ]
      ), o(D, V);
    }, ee = (D) => {
      var V = Se(), O = _e(V);
      {
        var P = (G) => {
          var L = Iv(), T = i(L);
          T.__click = [Mv];
          var y = h(T, 2);
          y.__click = [Av];
          var x = h(y, 2);
          x.__click = [zv], M(
            (C, X, K) => {
              j(T, 1, C, "svelte-1erodky"), j(y, 1, X, "svelte-1erodky"), j(x, 1, K, "svelte-1erodky");
            },
            [
              () => ne(R(l()?.userTheme || "auto", "auto")),
              () => ne(R(l()?.userTheme || "auto", "terminal")),
              () => ne(R(l()?.userTheme || "auto", "bubbleTea"))
            ]
          ), o(G, L);
        }, Q = (G) => {
          var L = Se(), T = _e(L);
          {
            var y = (x) => {
              var C = Rv(), X = i(C);
              X.__click = [Pv];
              var K = h(X, 2);
              K.__click = [Lv];
              var k = h(K, 2);
              k.__click = [Dv], M(
                (v, b, re) => {
                  j(X, 1, v, "svelte-1erodky"), j(K, 1, b, "svelte-1erodky"), j(k, 1, re, "svelte-1erodky");
                },
                [
                  () => ne(R(l()?.userTheme || "auto", "auto")),
                  () => ne(R(l()?.userTheme || "auto", "terminal")),
                  () => ne(R(l()?.userTheme || "auto", "bubbleTea"))
                ]
              ), o(x, C);
            };
            g(
              T,
              (x) => {
                d() === "pills" && x(y);
              },
              !0
            );
          }
          o(G, L);
        };
        g(
          O,
          (G) => {
            d() === "toggle" ? G(P) : G(Q, !1);
          },
          !0
        );
      }
      o(D, V);
    };
    g(f, (D) => {
      d() === "dropdown" ? D(q) : D(ee, !1);
    });
  }
  var w = h(f, 2);
  {
    var E = (D) => {
      var V = jv(), O = i(V), P = i(O), Q = h(O, 2), G = i(Q);
      M(() => {
        ie(P, t(z).displayName), ie(G, t(z).description);
      }), o(D, V);
    };
    g(w, (D) => {
      u() && t(z) && D(E);
    });
  }
  var B = h(w, 2);
  {
    var F = (D) => {
      var V = qv(), O = i(V), P = h(O, 2);
      {
        var Q = (L) => {
          var T = Nv(), y = i(T);
          M(() => ie(y, `Following system: ${l().resolvedTheme ?? ""}`)), o(L, T);
        }, G = (L) => {
          var T = Ov(), y = i(T);
          M(() => ie(y, `Manual override: ${l().userTheme ?? ""}`)), o(L, T);
        };
        g(P, (L) => {
          wr(l().userTheme) ? L(Q) : L(G, !1);
        });
      }
      M((L) => j(O, 1, L, "svelte-1erodky"), [
        () => ne(Z("w-2 h-2 rounded-full", wr(l().userTheme) ? "bg-green-400" : "bg-orange-400"))
      ]), o(D, V);
    };
    g(B, (D) => {
      p() && l() && D(F);
    });
  }
  o(r, _), Xe(), n();
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
  let a = s(e, "open", 7, !1), n = s(e, "type", 3, "info"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "top-right"), u = s(e, "blur", 3, "md"), p = s(e, "duration", 3, 5e3), A = s(e, "closable", 3, !0), N = s(e, "animate", 3, !0), m = s(e, "reduceMotion", 3, !1), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  ]), z = /* @__PURE__ */ ye(void 0), _ = null;
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
  }, w = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }, E = Z("fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg", "flex items-start gap-3 transition-all duration-300", q[d()], ee[l()], l() === "glass" && w[u()], f[n()].colors, I());
  function B() {
    a(!1), e.onOpenChange?.(!1), _ && (clearTimeout(_), _ = null);
  }
  function F(P) {
    P.key === "Escape" && A() && (P.preventDefault(), B());
  }
  bt(() => (a() && p() !== null && p() > 0 && (_ = setTimeout(
    () => {
      B();
    },
    p()
  )), () => {
    _ && (clearTimeout(_), _ = null);
  })), bt(() => {
    if (a())
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }), bt(() => {
    Zt("Toast", "small");
  });
  var D = Se(), V = _e(D);
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
          ...R
        }),
        void 0,
        void 0,
        "svelte-4z22bx"
      );
      var G = i(Q), L = i(G), T = h(G, 2), y = i(T);
      {
        var x = (de) => {
          var ue = Vv(), ve = i(ue);
          M(() => ie(ve, e.title)), o(de, ue);
        };
        g(y, (de) => {
          e.title && de(x);
        });
      }
      var C = h(y, 2);
      {
        var X = (de) => {
          var ue = Gv(), ve = i(ue);
          M(() => ie(ve, e.description)), o(de, ue);
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
      var k = h(C, 2);
      {
        var v = (de) => {
          var ue = Yv();
          ue.__click = [Hv, e, B];
          var ve = i(ue);
          Ie(ue, ($, U) => Ut?.($, U), () => N() && !m() ? { scale: 0.98, duration: 100 } : void 0), M(() => ie(ve, e.action.label)), o(de, ue);
        };
        g(k, (de) => {
          e.action && de(v);
        });
      }
      var b = h(T, 2);
      {
        var re = (de) => {
          var ue = Wv();
          ue.__click = B, Ie(ue, (ve, $) => Ut?.(ve, $), () => N() && !m() ? { scale: 0.9, duration: 100 } : void 0), o(de, ue);
        };
        g(b, (de) => {
          A() && de(re);
        });
      }
      tt(Q, (de) => W(z, de), () => t(z)), M(() => ie(L, f[n()].icon)), $e(1, Q, () => ht, () => ({
        direction: d().includes("top") ? "down" : "up",
        distance: 20,
        duration: N() && !m() ? 300 : 0
      })), $e(2, Q, () => ht, () => ({
        direction: d().includes("top") ? "up" : "down",
        distance: 20,
        duration: N() && !m() ? 200 : 0
      })), o(P, Q);
    };
    g(V, (P) => {
      a() && P(O);
    });
  }
  o(r, D), Xe();
}
vt(["click"]);
var Zv = /* @__PURE__ */ c("<div></div>"), Qv = /* @__PURE__ */ c('<div role="tooltip"> <!></div>'), Jv = /* @__PURE__ */ c("<div><!> <!></div>");
function rp(r, e) {
  Ke(e, !0);
  const a = s(e, "position", 3, "top"), n = s(e, "variant", 3, "glass"), l = s(e, "delay", 3, 500), d = s(e, "offset", 3, 8), u = s(e, "arrow", 3, !0), p = s(e, "animated", 3, !0), A = s(e, "class", 3, ""), N = /* @__PURE__ */ dt(e, [
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
  let m = /* @__PURE__ */ ye(!1), I = /* @__PURE__ */ ye(void 0), R = /* @__PURE__ */ ye(void 0), z = /* @__PURE__ */ ye(st({ x: 0, y: 0 })), _ = /* @__PURE__ */ ye(st(a())), f;
  const q = {
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 text-white",
    terminal: "bg-gray-900/95 border border-green-400/40 text-green-400",
    liquid: "bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white",
    dark: "bg-gray-900/95 border border-white/10 text-white"
  }, ee = () => {
    if (!t(I) || !t(R)) return;
    const G = t(R).getBoundingClientRect(), L = t(I).getBoundingClientRect(), T = window.innerWidth, y = window.innerHeight;
    let x = 0, C = 0, X = a();
    switch (a()) {
      case "top":
        x = G.left + G.width / 2 - L.width / 2, C = G.top - L.height - d();
        break;
      case "bottom":
        x = G.left + G.width / 2 - L.width / 2, C = G.bottom + d();
        break;
      case "left":
        x = G.left - L.width - d(), C = G.top + G.height / 2 - L.height / 2;
        break;
      case "right":
        x = G.right + d(), C = G.top + G.height / 2 - L.height / 2;
        break;
    }
    a() === "top" && C < 0 ? (C = G.bottom + d(), X = "bottom") : a() === "bottom" && C + L.height > y ? (C = G.top - L.height - d(), X = "top") : a() === "left" && x < 0 ? (x = G.right + d(), X = "right") : a() === "right" && x + L.width > T && (x = G.left - L.width - d(), X = "left"), x = Math.max(8, Math.min(x, T - L.width - 8)), C = Math.max(8, Math.min(C, y - L.height - 8)), W(z, { x, y: C }, !0), W(_, X, !0);
  }, w = () => {
    f = setTimeout(
      () => {
        W(m, !0), requestAnimationFrame(ee);
      },
      l()
    );
  }, E = () => {
    clearTimeout(f), W(m, !1);
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
  var D = Jv();
  Ze(D, () => ({
    class: "relative inline-block",
    onmouseenter: w,
    onmouseleave: E,
    onfocus: w,
    onblur: E,
    role: "tooltip",
    ...N
  }));
  var V = i(D);
  {
    var O = (G) => {
      var L = Se(), T = _e(L);
      ot(T, () => e.children), o(G, L);
    };
    g(V, (G) => {
      e.children && G(O);
    });
  }
  var P = h(V, 2);
  {
    var Q = (G) => {
      var L = Qv(), T = i(L), y = h(T);
      {
        var x = (C) => {
          var X = Zv();
          M((K) => j(X, 1, K), [
            () => ne(Z("absolute w-0 h-0 border-4", B[t(_)], F[t(_)], n() === "glass" && "border-white/10", n() === "terminal" && "border-green-400/40", n() === "liquid" && "border-white/30", n() === "dark" && "border-white/10"))
          ]), o(C, X);
        };
        g(y, (C) => {
          u() && C(x);
        });
      }
      tt(L, (C) => W(I, C), () => t(I)), M(
        (C) => {
          j(L, 1, C), pt(L, `left: ${t(z).x ?? ""}px; top: ${t(z).y ?? ""}px;`), ie(T, `${e.text ?? ""} `);
        },
        [
          () => ne(Z("fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl", q[n()], p() && "transition-all duration-200", A()))
        ]
      ), $e(3, L, () => ht, () => ({ duration: 200 })), o(G, L);
    };
    g(P, (G) => {
      t(m) && G(Q);
    });
  }
  tt(D, (G) => W(R, G), () => t(R)), o(r, D), Xe();
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
  const a = s(e, "value", 3, null), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "error", 3, !1), u = s(e, "disabled", 3, !1), p = s(e, "placeholder", 3, "Select date..."), A = s(e, "format", 3, "MM/dd/yyyy"), N = s(e, "closeOnSelect", 3, !0), m = s(e, "showToday", 3, !0), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  ]), z = Tt();
  let _, f = /* @__PURE__ */ ye(null), q = /* @__PURE__ */ ye(!1), ee = /* @__PURE__ */ ye("");
  st(/* @__PURE__ */ new Date());
  let w = /* @__PURE__ */ ye(null), E = /* @__PURE__ */ ye(null), B = /* @__PURE__ */ ye(st((/* @__PURE__ */ new Date()).getFullYear())), F = /* @__PURE__ */ ye(st((/* @__PURE__ */ new Date()).getMonth()));
  const D = {
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
  }, O = /* @__PURE__ */ Ee(() => D[n()]), P = /* @__PURE__ */ Ee(() => V[l()]);
  function Q(H) {
    if (!H) return "";
    const ae = H.getDate().toString().padStart(2, "0"), ce = (H.getMonth() + 1).toString().padStart(2, "0"), se = H.getFullYear();
    switch (A()) {
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
    let ce, se, me;
    switch (A()) {
      case "dd/MM/yyyy":
        [ce, se, me] = ae.map(Number);
        break;
      case "yyyy-MM-dd":
        [me, se, ce] = ae.map(Number);
        break;
      default:
        [se, ce, me] = ae.map(Number);
    }
    const fe = new Date(me, se - 1, ce);
    return se < 1 || se > 12 || ce < 1 || ce > 31 || fe.getFullYear() !== me || fe.getMonth() !== se - 1 || fe.getDate() !== ce ? null : L(fe) ? fe : null;
  }
  function L(H) {
    return !(!(H instanceof Date) || Number.isNaN(H.getTime()) || e.minDate && H < e.minDate || e.maxDate && H > e.maxDate);
  }
  function T() {
    const H = new Date(t(B), t(F), 1), ae = new Date(H);
    ae.setDate(ae.getDate() - H.getDay());
    const ce = [], se = new Date(ae);
    for (let me = 0; me < 42; me++)
      se.getMonth() === t(F) ? ce.push(new Date(se)) : ce.push(null), se.setDate(se.getDate() + 1);
    return ce;
  }
  const y = /* @__PURE__ */ Ee(T);
  function x(H) {
    const ae = /* @__PURE__ */ new Date();
    return H.toDateString() === ae.toDateString();
  }
  function C(H, ae) {
    return !H || !ae ? !1 : H.toDateString() === ae.toDateString();
  }
  function X() {
    u() || (W(q, !t(q)), t(q) ? z("open") : z("close"));
  }
  function K(H) {
    const ae = H.target;
    W(ee, ae.value, !0);
    const ce = G(t(ee));
    ce && (W(w, ce, !0), W(B, ce.getFullYear(), !0), W(F, ce.getMonth(), !0), z("change", ce));
  }
  function k(H) {
    L(H) && (W(w, H, !0), W(ee, Q(H), !0), z("change", H), N() && (W(q, !1), z("close")));
  }
  function v(H) {
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
      H && (W(w, H, !0), W(ee, Q(H), !0), W(B, H.getFullYear(), !0), W(F, H.getMonth(), !0));
    }
  }), wt(() => {
    function H(ae) {
      t(q) && t(f) && !t(f).contains(ae.target) && _ && !_.contains(ae.target) && (W(q, !1), z("close"));
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
  ], de = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ue = /* @__PURE__ */ Ee(() => Z("relative w-full rounded-lg border transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-opacity-50", "font-mono", t(O).input, t(P), d() && "border-red-500 focus:border-red-500", u() && "opacity-50 cursor-not-allowed", I()));
  var ve = su(), $ = i(ve);
  Ze($, () => ({
    onclick: (
      // Removed markUsed helper and no-op effect (they caused analyzer/state warning noise)
      X
    ),
    oninput: K,
    onkeydown: b,
    placeholder: p(),
    disabled: u(),
    readonly: !u(),
    class: t(ue),
    role: "combobox",
    "aria-haspopup": "grid",
    "aria-expanded": t(q),
    "aria-controls": "date-picker-calendar",
    "aria-label": p(),
    "aria-describedby": d() ? "date-picker-error" : void 0,
    ...R
  })), tt($, (H) => _ = H, () => _), ur(() => mr($, () => t(ee), (H) => W(ee, H))), Ie($, (H, ae) => kt?.(H, ae), () => ({ blur: "sm", opacity: "light" })), Ie($, (H, ae) => ft?.(H, ae), () => ({ enabled: !u(), strength: 0.1 }));
  var U = h($, 2), oe = i(U), S = h(U, 2);
  {
    var te = (H) => {
      var ae = lu(), ce = i(ae), se = i(ce);
      se.__click = [eu, v], Ie(se, (Re, we) => ft?.(Re, we), () => ({ strength: 0.2 }));
      var me = h(se, 2), fe = i(me), be = h(me, 2);
      be.__click = [tu, v], Ie(be, (Re, we) => ft?.(Re, we), () => ({ strength: 0.2 }));
      var ge = h(ce, 2);
      Ge(ge, 20, () => de, (Re) => Re, (Re, we) => {
        var pe = ru(), Te = i(pe);
        M(() => {
          j(pe, 1, `p-2 text-center text-xs font-semibold ${t(O).header ?? ""} font-mono`), ie(Te, we);
        }), o(Re, pe);
      });
      var Ce = h(ge, 2);
      Ge(Ce, 23, () => t(y), (Re, we) => Re ? Re.toDateString() : "blank-" + we, (Re, we) => {
        var pe = Se(), Te = _e(pe);
        {
          var Ne = (Le) => {
            const qe = /* @__PURE__ */ Ee(() => C(t(we), t(w))), Fe = /* @__PURE__ */ Ee(() => x(t(we))), ke = /* @__PURE__ */ Ee(() => L(t(we)));
            var he = nu();
            he.__click = [au, k, we];
            var ze = i(he);
            Ie(he, (De, He) => ft?.(De, He), () => ({ enabled: t(ke), strength: 0.15 })), M(
              (De, He, Je) => {
                he.disabled = !t(ke), j(he, 1, `p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       ${(t(qe) ? t(O).selectedDay : t(Fe) ? t(O).todayDay : t(O).dayButton) ?? ""}
							       ${t(ke) ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`), xe(he, "aria-label", De), xe(he, "aria-selected", t(qe)), xe(he, "aria-disabled", !t(ke)), xe(he, "aria-current", t(Fe) ? "date" : void 0), xe(he, "tabindex", He), ie(ze, Je);
              },
              [
                () => Q(t(we)),
                () => t(qe) || C(t(we), t(E)) ? 0 : -1,
                () => t(we).getDate()
              ]
            ), o(Le, he);
          }, Ae = (Le) => {
            var qe = ou();
            o(Le, qe);
          };
          g(Te, (Le) => {
            t(we) ? Le(Ne) : Le(Ae, !1);
          });
        }
        o(Re, pe);
      });
      var Pe = h(Ce, 2);
      {
        var Be = (Re) => {
          var we = iu(), pe = i(we);
          pe.__click = [$v, k];
          var Te = i(pe);
          Ie(pe, (Ne, Ae) => ft?.(Ne, Ae), () => ({ strength: 0.1 })), M(
            (Ne) => {
              j(we, 1, `mt-4 pt-4 border-t ${t(O).calendar ?? ""}`), j(pe, 1, `w-full py-2 px-4 rounded-md ${t(O).dayButton ?? ""} transition-colors font-mono text-sm`), ie(Te, `Today: ${Ne ?? ""}`);
            },
            [() => Q(/* @__PURE__ */ new Date())]
          ), o(Re, we);
        };
        g(Pe, (Re) => {
          m() && Re(Be);
        });
      }
      tt(ae, (Re) => W(f, Re), () => t(f)), Ie(ae, (Re, we) => kt?.(Re, we), () => ({ blur: "lg", opacity: "medium" })), M(() => {
        j(ae, 1, `absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 ${t(O).calendar ?? ""}`), j(se, 1, `p-2 rounded-md ${t(O).dayButton ?? ""} transition-colors`), j(me, 1, `text-lg font-semibold ${t(O).header ?? ""} font-mono`), ie(fe, `${re[t(F)] ?? ""}
                    ${t(B) ?? ""}`), j(be, 1, `p-2 rounded-md ${t(O).dayButton ?? ""} transition-colors`);
      }), $e(1, ae, () => ht, () => ({ direction: "up", duration: 200 })), o(H, ae);
    };
    g(S, (H) => {
      t(q) && H(te);
    });
  }
  var J = h(S, 2), Y = i(J);
  {
    var le = (H) => {
      var ae = Ct();
      M((ce) => ie(ae, `Selected date: ${ce ?? ""}`), [() => Q(t(w))]), o(H, ae);
    };
    g(Y, (H) => {
      t(w) && H(le);
    });
  }
  M(() => j(oe, 0, `w-5 h-5 ${t(O).header ?? ""}`)), o(r, ve), Xe();
}
vt(["click"]);
var cu = (r, e) => (r.key === "Enter" || r.key === " ") && e(), vu = /* @__PURE__ */ c('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-lg font-medium">Drop files here</p></div>'), uu = /* @__PURE__ */ c('<p class="text-xs text-gray-500 mt-1"> </p>'), fu = /* @__PURE__ */ c(`<button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
					       transition-colors text-sm font-medium">Select Files</button>`), bu = /* @__PURE__ */ c('<div class="text-center"><svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <div class="mb-2"><p class="text-lg font-medium"> </p> <p class="text-sm text-gray-400 mt-1"> </p> <!></div> <!></div>'), gu = /* @__PURE__ */ c('<img class="w-12 h-12 object-cover rounded border"/>'), hu = /* @__PURE__ */ c('<div class="w-12 h-12 bg-gray-700 rounded flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>'), mu = /* @__PURE__ */ rr('<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'), pu = (r, e, a) => e(t(a).id), xu = /* @__PURE__ */ c('<button class="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" title="Retry upload">Retry</button> <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>', 1), _u = /* @__PURE__ */ c('<div class="w-5 h-5"><svg class="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), wu = (r, e, a) => e(t(a).id), yu = /* @__PURE__ */ c('<p class="text-xs text-red-400 mt-1"> </p>'), ku = /* @__PURE__ */ c('<div class="mt-2"><div class="w-full bg-gray-700 rounded-full h-2"><div></div></div> <p class="text-xs text-gray-400 mt-1"> </p></div>'), Cu = /* @__PURE__ */ c('<div><div class="flex items-start gap-3"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><h4 class="text-sm font-medium truncate pr-2"> </h4> <div class="flex items-center gap-2"><!> <button aria-label="Remove file"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-1"><p class="text-xs text-gray-400"> </p> <!></div> <!></div></div></div>'), Eu = /* @__PURE__ */ c('<div class="mt-4 space-y-3"></div>'), Su = /* @__PURE__ */ c('<input type="file" class="hidden"/> <div role="button" aria-label="Upload files"><!></div> <!>', 1);
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
  ), d = s(e, "maxFiles", 19, () => a() ? 5 : 1), u = s(e, "variant", 3, "default"), p = s(e, "disabled", 3, !1), A = s(e, "showPreview", 3, !0), N = s(e, "autoUpload", 3, !1), m = s(e, "class", 3, ""), I = Tt();
  let R, z, _ = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(st([]));
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
  }, ee = /* @__PURE__ */ Ee(() => q[u()]);
  function w() {
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
  async function D($) {
    if (!(!B($) || !A()))
      return new Promise((U) => {
        const oe = new FileReader();
        oe.onload = (S) => U(S.target?.result), oe.onerror = () => U(void 0), oe.readAsDataURL($);
      });
  }
  async function V($) {
    if (p()) return;
    const U = Array.from($), oe = d() - t(f).length, S = U.slice(0, oe), te = [];
    for (const J of S) {
      const Y = F(J), le = await D(J), H = {
        ...J,
        id: w(),
        preview: le,
        status: Y ? "error" : "pending",
        error: Y,
        progress: 0
      };
      te.push(H);
    }
    W(f, [...t(f), ...te], !0), I("filesAdded", te), N() && e.uploadUrl && te.forEach((J) => {
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
  function L($) {
    $.preventDefault(), p() || W(_, !0);
  }
  function T($) {
    $.preventDefault(), z?.contains($.relatedTarget) || W(_, !1);
  }
  function y($) {
    if ($.preventDefault(), W(_, !1), p()) return;
    const U = $.dataTransfer?.files;
    U && V(U);
  }
  function x() {
    !p() && R && R.click();
  }
  const C = /* @__PURE__ */ Ee(() => t(f).length < d()), X = /* @__PURE__ */ Ee(() => Z(
    "relative w-full rounded-lg border-2 border-dashed transition-all duration-300",
    "flex flex-col items-center justify-center p-8 min-h-32",
    "cursor-pointer font-mono",
    t(_) ? t(ee).dropZoneActive : t(ee).dropZone,
    p() && "opacity-50 cursor-not-allowed",
    m()
  ));
  var K = Su(), k = _e(K);
  k.__change = G, tt(k, ($) => R = $, () => R);
  var v = h(k, 2);
  v.__click = x, v.__keydown = [cu, x];
  var b = i(v);
  {
    var re = ($) => {
      var U = vu();
      $e(1, U, () => Ut, () => ({ duration: 200 })), o($, U);
    }, de = ($) => {
      var U = bu(), oe = h(i(U), 2), S = i(oe), te = i(S), J = h(S, 2), Y = i(J), le = h(J, 2);
      {
        var H = (se) => {
          var me = uu(), fe = i(me);
          M(() => ie(fe, `${t(f).length ?? ""} of ${d() ?? ""} files selected`)), o(se, me);
        };
        g(le, (se) => {
          a() && se(H);
        });
      }
      var ae = h(oe, 2);
      {
        var ce = (se) => {
          var me = fu();
          Ie(me, (fe, be) => ft?.(fe, be), () => ({ strength: 0.15 })), o(se, me);
        };
        g(ae, (se) => {
          t(C) && se(ce);
        });
      }
      M(
        (se) => {
          ie(te, t(C) ? "Choose files or drag and drop" : "Maximum files reached"), ie(Y, `${(n() === "*/*" ? "Any file type" : n()) ?? ""} • Max ${se ?? ""} per file`);
        },
        [() => E(l())]
      ), o($, U);
    };
    g(b, ($) => {
      t(_) ? $(re) : $(de, !1);
    });
  }
  tt(v, ($) => z = $, () => z), Ie(v, ($, U) => kt?.($, U), () => ({ blur: "md", opacity: "light" })), Ie(v, ($, U) => ft?.($, U), () => ({
    enabled: !p() && t(C),
    strength: 0.1
  }));
  var ue = h(v, 2);
  {
    var ve = ($) => {
      var U = Eu();
      Ge(U, 21, () => t(f), (oe) => oe.id, (oe, S) => {
        var te = Cu(), J = i(te), Y = i(J), le = i(Y);
        {
          var H = (qe) => {
            var Fe = gu();
            M(() => {
              xe(Fe, "src", t(S).preview), xe(Fe, "alt", t(S).name);
            }), o(qe, Fe);
          }, ae = (qe) => {
            var Fe = hu();
            o(qe, Fe);
          };
          g(le, (qe) => {
            t(S).preview ? qe(H) : qe(ae, !1);
          });
        }
        var ce = h(Y, 2), se = i(ce), me = i(se), fe = i(me), be = h(me, 2), ge = i(be);
        {
          var Ce = (qe) => {
            var Fe = mu();
            M(() => j(Fe, 0, `w-5 h-5 ${t(ee).successIcon ?? ""}`)), o(qe, Fe);
          }, Pe = (qe) => {
            var Fe = Se(), ke = _e(Fe);
            {
              var he = (De) => {
                var He = xu(), Je = _e(He);
                Je.__click = [pu, Q, S];
                var We = h(Je, 2);
                M(() => j(We, 0, `w-5 h-5 ${t(ee).errorIcon ?? ""}`)), o(De, He);
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
                  t(S).status === "error" ? De(he) : De(ze, !1);
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
        var Be = h(ge, 2);
        Be.__click = [wu, P, S];
        var Re = h(se, 2), we = i(Re), pe = i(we), Te = h(we, 2);
        {
          var Ne = (qe) => {
            var Fe = yu(), ke = i(Fe);
            M(() => ie(ke, t(S).error)), o(qe, Fe);
          };
          g(Te, (qe) => {
            t(S).error && qe(Ne);
          });
        }
        var Ae = h(Re, 2);
        {
          var Le = (qe) => {
            var Fe = ku(), ke = i(Fe), he = i(ke), ze = h(ke, 2), De = i(ze);
            M(() => {
              j(he, 1, `h-2 rounded-full ${t(ee).progressBar ?? ""} transition-all duration-300`), pt(he, `width: ${t(S).progress ?? ""}%`), ie(De, `${t(S).progress ?? ""}% uploaded`);
            }), o(qe, Fe);
          };
          g(Ae, (qe) => {
            t(S).status === "uploading" && t(S).progress !== void 0 && qe(Le);
          });
        }
        Ie(te, (qe, Fe) => kt?.(qe, Fe), () => ({ blur: "sm", opacity: "subtle" })), M(
          (qe) => {
            j(te, 1, `p-4 rounded-lg border ${t(ee).fileItem ?? ""} transition-all duration-200`), ie(fe, t(S).name), j(Be, 1, `p-1 rounded ${t(ee).removeButton ?? ""} hover:bg-red-500/20 transition-colors`), ie(pe, qe);
          },
          [() => E(t(S).size)]
        ), $e(1, te, () => Ut, () => ({ duration: 300, bounce: !0 })), o(oe, te);
      }), o($, U);
    };
    g(ue, ($) => {
      t(f).length > 0 && $(ve);
    });
  }
  M(() => {
    xe(k, "accept", n()), k.multiple = a(), k.disabled = p(), j(v, 1, ne(t(X))), xe(v, "tabindex", p() ? -1 : 0);
  }), Nt("dragover", v, L), Nt("dragleave", v, T), Nt("drop", v, y), o(r, K), Xe();
}
vt(["change", "click", "keydown"]);
const qt = {
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
function ei(r, e) {
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
    a[n] = ei(d, l);
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
        const d = ei(e[l], r[l]);
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
      rules: [qt.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [qt.minLength(6)],
      required: !0
    }
  },
  registration: {
    name: {
      rules: [qt.minLength(2), qt.maxLength(50)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [qt.email()],
      required: !0,
      trim: !0
    },
    password: {
      rules: [qt.strongPassword()],
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
      rules: [qt.minLength(2), qt.maxLength(100)],
      required: !0,
      trim: !0
    },
    email: {
      rules: [qt.email()],
      required: !0,
      trim: !0
    },
    phone: {
      rules: [qt.phoneNumber()],
      required: !1,
      trim: !0
    },
    message: {
      rules: [qt.minLength(10), qt.maxLength(1e3)],
      required: !0,
      trim: !0
    }
  }
};
function Iu(r, e) {
  e("homeClick");
}
var Pu = /* @__PURE__ */ c('<span class="mr-1 text-base"> </span>'), Lu = /* @__PURE__ */ c('<li aria-hidden="true"> </li>'), Du = /* @__PURE__ */ c('<li><button aria-label="Go to home"><!> </button></li> <!>', 1), Ru = /* @__PURE__ */ c('<span aria-hidden="true"> </span>'), ju = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), Nu = /* @__PURE__ */ c('<span aria-current="page"><!> </span>'), Ou = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), qu = /* @__PURE__ */ c("<a><!> </a>"), Bu = /* @__PURE__ */ c('<span class="mr-2 text-base"> </span>'), Fu = /* @__PURE__ */ c("<button><!> </button>"), Hu = /* @__PURE__ */ c('<li aria-hidden="true"> </li>'), Vu = /* @__PURE__ */ c('<li class="flex items-center"><!></li> <!>', 1), Gu = /* @__PURE__ */ c('<nav aria-label="Breadcrumb"><ol class="flex items-center space-x-2"><!> <!></ol></nav>');
const Uu = {
  hash: "svelte-1ozmnrq",
  code: `
	/* Terminal glow effects */.terminal .breadcrumb-item:hover {text-shadow:0 0 5px var(--terminal-green);}`
};
function sp(r, e) {
  Ke(e, !0), Qe(r, Uu);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "separator", 3, "chevron"), d = s(e, "showHome", 3, !0), u = s(e, "homeIcon", 3, "🏠"), p = s(e, "homeLabel", 3, "Home"), A = s(e, "maxItems", 3, 5), N = s(e, "class", 3, ""), m = Tt(), I = {
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
  }, R = { slash: "/", chevron: "›", arrow: "→", dot: "•" }, z = /* @__PURE__ */ Ee(() => I[n()]), _ = /* @__PURE__ */ Ee(() => () => {
    if (a().length <= A())
      return a();
    const D = a()[0], V = a().slice(-(A() - 2));
    return [
      D,
      { id: "ellipsis", label: "...", disabled: !0 },
      ...V
    ];
  });
  function f(D, V) {
    D.disabled || D.id === "ellipsis" || m("navigate", { item: D, index: V });
  }
  const q = /* @__PURE__ */ Ee(() => Z("flex items-center space-x-2 text-sm font-mono", t(z).container, N()));
  var ee = Gu(), w = i(ee), E = i(w);
  {
    var B = (D) => {
      var V = Du(), O = _e(V), P = i(O);
      P.__click = [Iu, m];
      var Q = i(P);
      {
        var G = (x) => {
          var C = Pu(), X = i(C);
          M(() => ie(X, u())), o(x, C);
        };
        g(Q, (x) => {
          u() && x(G);
        });
      }
      var L = h(Q);
      Ie(P, (x, C) => ft?.(x, C), () => ({ strength: 0.1 }));
      var T = h(O, 2);
      {
        var y = (x) => {
          var C = Lu(), X = i(C);
          M(() => {
            j(C, 1, ne(t(z).separator)), ie(X, R[l()]);
          }), o(x, C);
        };
        g(T, (x) => {
          t(_).length > 0 && x(y);
        });
      }
      M(() => {
        j(P, 1, `flex items-center ${t(z).home ?? ""} hover:underline transition-colors`), ie(L, ` ${p() ?? ""}`);
      }), o(D, V);
    };
    g(E, (D) => {
      d() && D(B);
    });
  }
  var F = h(E, 2);
  Ge(F, 19, () => t(_), (D) => D.id, (D, V, O) => {
    var P = Vu(), Q = _e(P), G = i(Q);
    {
      var L = (C) => {
        var X = Ru(), K = i(X);
        M(() => {
          j(X, 1, `px-2 ${t(z).separator ?? ""}`), ie(K, t(V).label);
        }), o(C, X);
      }, T = (C) => {
        var X = Se(), K = _e(X);
        {
          var k = (b) => {
            var re = Nu(), de = i(re);
            {
              var ue = ($) => {
                var U = ju(), oe = i(U);
                M(() => ie(oe, t(V).icon)), o($, U);
              };
              g(de, ($) => {
                t(V).icon && $(ue);
              });
            }
            var ve = h(de);
            M(() => {
              j(re, 1, `flex items-center ${t(z).activeItem ?? ""} font-medium`), ie(ve, ` ${t(V).label ?? ""}`);
            }), o(b, re);
          }, v = (b) => {
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
                    M(() => ie(le, t(V).icon)), o(J, Y);
                  };
                  g(oe, (J) => {
                    t(V).icon && J(S);
                  });
                }
                var te = h(oe);
                Ie(U, (J, Y) => ft?.(J, Y), () => ({ enabled: !t(V).disabled, strength: 0.1 })), M(() => {
                  xe(U, "href", t(V).href), j(U, 1, `flex items-center ${t(z).item ?? ""} hover:underline transition-colors
							       ${t(V).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), ie(te, ` ${t(V).label ?? ""}`);
                }), o($, U);
              }, ve = ($) => {
                var U = Fu();
                U.__click = () => f(t(V), t(O));
                var oe = i(U);
                {
                  var S = (J) => {
                    var Y = Bu(), le = i(Y);
                    M(() => ie(le, t(V).icon)), o(J, Y);
                  };
                  g(oe, (J) => {
                    t(V).icon && J(S);
                  });
                }
                var te = h(oe);
                Ie(U, (J, Y) => ft?.(J, Y), () => ({ enabled: !t(V).disabled, strength: 0.1 })), M(() => {
                  U.disabled = t(V).disabled, j(U, 1, `flex items-center ${t(z).item ?? ""} hover:underline transition-colors
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
              t(O) === t(_).length - 1 ? b(k) : b(v, !1);
            },
            !0
          );
        }
        o(C, X);
      };
      g(G, (C) => {
        t(V).id === "ellipsis" ? C(L) : C(T, !1);
      });
    }
    var y = h(Q, 2);
    {
      var x = (C) => {
        var X = Hu(), K = i(X);
        M(() => {
          j(X, 1, ne(t(z).separator)), ie(K, R[l()]);
        }), o(C, X);
      };
      g(y, (C) => {
        t(O) < t(_).length - 1 && t(V).id !== "ellipsis" && C(x);
      });
    }
    o(D, P);
  }), M(() => j(ee, 1, ne(t(q)))), o(r, ee), Xe();
}
vt(["click"]);
function Yu(r, e, a, n, l, d, u, p) {
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
      r.preventDefault(), t(l) >= 0 && t(d)()[t(l)] && u(t(d)()[t(l)]);
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
  let a = s(e, "openMode", 3, "click"), n = s(e, "placement", 3, "bottom-start"), l = s(e, "variant", 3, "glass"), d = s(e, "size", 3, "md"), u = s(e, "closeOnClick", 3, !0), p = s(e, "showIcons", 3, !0), A = s(e, "showKeyboards", 3, !0), N = s(e, "class", 3, ""), m = /* @__PURE__ */ dt(e, [
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
  const I = Tt();
  let R = /* @__PURE__ */ ye(!1), z, _, f = /* @__PURE__ */ ye(null), q = /* @__PURE__ */ ye(-1);
  const ee = `menu-${Math.random().toString(36).substr(2, 9)}`, w = {
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
  }, B = w[d()], F = E[l()], D = /* @__PURE__ */ Ee(() => () => {
    const b = [];
    function re(de) {
      for (const ue of de)
        ue.separator || b.push(ue), ue.children && re(ue.children);
    }
    return re(e.items), b;
  });
  function V() {
    W(R, !t(R)), t(R) && (W(q, -1), W(f, null)), I("toggle", { isOpen: t(R) });
  }
  function O() {
    W(R, !1), W(f, null), W(q, -1), I("close");
  }
  function P(b) {
    b.disabled || (b.children?.length ? W(f, t(f) === b.id ? null : b.id, !0) : (b.onclick && b.onclick(), I("select", { item: b }), u() && O()));
  }
  function Q(b) {
    a() === "hover" && b.children?.length && W(f, b.id, !0);
  }
  function G() {
    a() === "hover" && W(f, null);
  }
  function L(b) {
    z && !z.contains(b.target) && O();
  }
  wt(() => (document.addEventListener("click", L), () => document.removeEventListener("click", L)));
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
  var y = c0();
  Ze(y, (b) => ({ class: b, ...m }), [() => Z("relative inline-block", N())], void 0, "svelte-i7uadz");
  var x = i(y);
  x.__click = function(...b) {
    (a() === "click" ? V : void 0)?.apply(this, b);
  }, x.__keydown = [
    Yu,
    R,
    V,
    O,
    q,
    D,
    P,
    f
  ];
  var C = i(x);
  {
    var X = (b) => {
      var re = Se(), de = _e(re);
      ot(de, () => e.children.trigger), o(b, re);
    }, K = (b) => {
      var re = Wu(), de = h(i(re), 2);
      {
        let ue = /* @__PURE__ */ Ee(() => Z("transition-transform duration-200", t(R) && "rotate-180"));
        an(de, {
          size: 16,
          get class() {
            return t(ue);
          }
        });
      }
      M((ue) => j(re, 1, ue), [
        () => ne(Z("flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200", F.item, t(R) && F.itemActive))
      ]), o(b, re);
    };
    g(C, (b) => {
      e.children?.trigger ? b(X) : b(K, !1);
    });
  }
  tt(x, (b) => _ = b, () => _);
  var k = h(x, 2);
  {
    var v = (b) => {
      var re = d0(), de = i(re);
      Ge(de, 23, () => e.items, (ue) => ue.id, (ue, ve) => {
        var $ = Se(), U = _e($);
        {
          var oe = (te) => {
            var J = Ku();
            M((Y) => j(J, 1, Y), [() => ne(Z("my-1 border-t", F.separator))]), o(te, J);
          }, S = (te) => {
            var J = s0(), Y = i(J);
            Y.__click = [Xu, P, ve], Y.__keydown = [Zu, P, ve];
            var le = i(Y), H = i(le);
            {
              var ae = (pe) => {
                var Te = Qu();
                M((Ne) => j(Te, 1, Ne), [() => ne(Z("flex-shrink-0", B.icon))]), o(pe, Te);
              };
              g(H, (pe) => {
                p() && t(ve).icon && pe(ae);
              });
            }
            var ce = h(H, 2), se = i(ce), me = h(ce, 2);
            {
              var fe = (pe) => {
                var Te = Ju(), Ne = i(Te);
                M(
                  (Ae) => {
                    j(Te, 1, Ae), ie(Ne, t(ve).badge);
                  },
                  [
                    () => ne(Z("inline-flex items-center rounded-full font-medium", B.badge, F.badge))
                  ]
                ), o(pe, Te);
              };
              g(me, (pe) => {
                t(ve).badge && pe(fe);
              });
            }
            var be = h(le, 2), ge = i(be);
            {
              var Ce = (pe) => {
                var Te = $u(), Ne = i(Te);
                M(
                  (Ae) => {
                    j(Te, 1, Ae), ie(Ne, t(ve).keyboard);
                  },
                  [
                    () => ne(Z("opacity-60 font-mono", B.keyboard, F.keyboard))
                  ]
                ), o(pe, Te);
              };
              g(ge, (pe) => {
                A() && t(ve).keyboard && pe(Ce);
              });
            }
            var Pe = h(ge, 2);
            {
              var Be = (pe) => {
                Rr(pe, { size: 16, class: "opacity-60" });
              };
              g(Pe, (pe) => {
                t(ve).children?.length && pe(Be);
              });
            }
            var Re = h(Y, 2);
            {
              var we = (pe) => {
                var Te = l0(), Ne = i(Te);
                Ge(Ne, 21, () => t(ve).children, (Ae) => Ae.id, (Ae, Le) => {
                  var qe = Se(), Fe = _e(qe);
                  {
                    var ke = (ze) => {
                      var De = e0();
                      M((He) => j(De, 1, He), [() => ne(Z("my-1 border-t", F.separator))]), o(ze, De);
                    }, he = (ze) => {
                      var De = i0();
                      De.__click = [t0, P, Le], De.__keydown = [r0, P, Le];
                      var He = i(De), Je = i(He);
                      {
                        var We = (Oe) => {
                          var Ve = a0();
                          M((rt) => j(Ve, 1, rt), [() => ne(Z("flex-shrink-0", B.icon))]), o(Oe, Ve);
                        };
                        g(Je, (Oe) => {
                          p() && t(Le).icon && Oe(We);
                        });
                      }
                      var at = h(Je, 2), lt = i(at), et = h(at, 2);
                      {
                        var nt = (Oe) => {
                          var Ve = n0(), rt = i(Ve);
                          M(
                            (gt) => {
                              j(Ve, 1, gt), ie(rt, t(Le).badge);
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
                      var Ue = h(He, 2);
                      {
                        var je = (Oe) => {
                          var Ve = o0(), rt = i(Ve);
                          M(
                            (gt) => {
                              j(Ve, 1, gt), ie(rt, t(Le).keyboard);
                            },
                            [
                              () => ne(Z("opacity-60 font-mono ml-3", B.keyboard, F.keyboard))
                            ]
                          ), o(Oe, Ve);
                        };
                        g(Ue, (Oe) => {
                          A() && t(Le).keyboard && Oe(je);
                        });
                      }
                      M(
                        (Oe) => {
                          j(De, 1, Oe, "svelte-i7uadz"), xe(De, "aria-disabled", t(Le).disabled), xe(De, "tabindex", t(Le).disabled ? -1 : 0), ie(lt, t(Le).label);
                        },
                        [
                          () => ne(Z("flex items-center justify-between cursor-pointer transition-all duration-150", B.item, t(Le).disabled ? F.itemDisabled : F.item))
                        ]
                      ), o(ze, De);
                    };
                    g(Fe, (ze) => {
                      t(Le).separator ? ze(ke) : ze(he, !1);
                    });
                  }
                  o(Ae, qe);
                }), Ie(Te, (Ae, Le) => kt?.(Ae, Le), () => ({ intensity: "medium" })), M((Ae) => j(Te, 1, Ae, "svelte-i7uadz"), [
                  () => ne(Z("absolute z-10 min-w-[180px] rounded-lg border shadow-lg", "left-full top-0 ml-1", F.menu))
                ]), o(pe, Te);
              };
              g(Re, (pe) => {
                t(ve).children?.length && t(f) === t(ve).id && pe(we);
              });
            }
            M(
              (pe) => {
                j(Y, 1, pe, "svelte-i7uadz"), xe(Y, "aria-disabled", t(ve).disabled), xe(Y, "tabindex", t(ve).disabled ? -1 : 0), ie(se, t(ve).label);
              },
              [
                () => ne(Z("flex items-center justify-between cursor-pointer transition-all duration-150", B.item, t(ve).disabled ? F.itemDisabled : F.item, t(q) === t(D)().indexOf(t(ve)) && !t(ve).disabled && F.itemActive, t(f) === t(ve).id && F.itemActive))
              ]
            ), Nt("mouseenter", Y, () => Q(t(ve))), Nt("mouseleave", Y, G), o(te, J);
          };
          g(U, (te) => {
            t(ve).separator ? te(oe) : te(S, !1);
          });
        }
        o(ue, $);
      }), Ie(re, (ue, ve) => kt?.(ue, ve), () => ({ intensity: "medium" })), M(
        (ue) => {
          xe(re, "id", ee), j(re, 1, ue, "svelte-i7uadz");
        },
        [
          () => ne(Z("absolute z-50 min-w-[200px] rounded-lg border shadow-lg", T(), F.menu))
        ]
      ), o(b, re);
    };
    g(k, (b) => {
      t(R) && b(v);
    });
  }
  tt(y, (b) => z = b, () => z), M(() => {
    xe(x, "aria-expanded", t(R)), xe(x, "aria-controls", ee);
  }), Nt("mouseenter", x, function(...b) {
    (a() === "hover" ? V : void 0)?.apply(this, b);
  }), Nt("mouseleave", x, function(...b) {
    (a() === "hover" ? () => setTimeout(O, 150) : void 0)?.apply(this, b);
  }), o(r, y), Xe();
}
vt(["click", "keydown"]);
function u0(r, e, a) {
  e("brandClick"), W(a, !1);
}
function f0(r, e, a) {
  W(e, !t(e)), a("mobileToggle", t(e));
}
var b0 = /* @__PURE__ */ c('<img alt="Logo" class="h-8 w-auto"/>'), g0 = /* @__PURE__ */ c(`<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600
						            flex items-center justify-center text-white font-bold text-sm"> </div>`), h0 = /* @__PURE__ */ c('<span class="text-xl font-bold tracking-tight"> </span>'), m0 = /* @__PURE__ */ c('<div class="flex items-center"><button><!> <!></button></div>'), p0 = (
  // Handle scroll for backdrop effects
  // Click outside to close dropdowns
  (r, e, a) => e(t(a))
), x0 = (r, e, a) => e(r, t(a)), _0 = /* @__PURE__ */ c('<span class="mr-2 text-lg"> </span>'), w0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), y0 = (r, e, a) => e(t(a), r), k0 = /* @__PURE__ */ c('<span class="mr-2"> </span>'), C0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), E0 = /* @__PURE__ */ c('<a role="menuitem"><!> <!></a>'), S0 = /* @__PURE__ */ c('<div role="menu"></div>'), T0 = /* @__PURE__ */ c('<button aria-haspopup="true"><!> <!> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!>', 1), M0 = (r, e, a) => e(t(a), r), A0 = (r, e, a) => e(r, t(a)), z0 = /* @__PURE__ */ c('<span class="mr-2 text-lg"> </span>'), I0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), P0 = /* @__PURE__ */ rr('<svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), L0 = /* @__PURE__ */ c("<a><!> <!> <!></a>"), D0 = /* @__PURE__ */ c('<div class="relative"><!></div>'), R0 = /* @__PURE__ */ rr('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), j0 = /* @__PURE__ */ rr('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'), N0 = (r, e, a) => e(t(a)), O0 = /* @__PURE__ */ c('<span class="mr-3 text-lg"> </span>'), q0 = /* @__PURE__ */ c('<span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), B0 = (r, e, a) => e(t(a), r), F0 = /* @__PURE__ */ c('<span class="mr-3"> </span>'), H0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), V0 = /* @__PURE__ */ c("<a><!> <!></a>"), G0 = /* @__PURE__ */ c('<div class="pl-6 mt-2 space-y-1"></div>'), U0 = /* @__PURE__ */ c('<div><button><span class="flex items-center"><!> <!></span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), Y0 = (r, e, a) => e(t(a), r), W0 = /* @__PURE__ */ c('<span class="mr-3 text-lg"> </span>'), K0 = /* @__PURE__ */ c('<span class="ml-auto px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"> </span>'), X0 = /* @__PURE__ */ rr('<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>'), Z0 = /* @__PURE__ */ c("<a><!> <!> <!></a>"), Q0 = /* @__PURE__ */ c('<div><div class="px-2 pt-2 pb-3 space-y-1"></div></div>'), J0 = /* @__PURE__ */ c('<nav aria-label="Main navigation"><div><!> <div class="hidden md:flex items-center space-x-1"></div> <div class="md:hidden"><button aria-label="Toggle mobile menu"><!></button></div></div> <!></nav>');
const $0 = {
  hash: "svelte-14x41x6",
  code: `
	/* Terminal glow effects */.terminal .navbar-brand:hover {text-shadow:0 0 10px var(--terminal-green);}.terminal .nav-item:hover {box-shadow:0 0 5px var(--terminal-green-glow);}`
};
function cp(r, e) {
  Ke(e, !0), Qe(r, $0);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "glass"), l = s(e, "position", 3, "static"), d = s(e, "backdrop", 3, !0), u = s(e, "logoText", 3, "TULIO"), p = s(e, "showBrand", 3, !0), A = s(e, "compact", 3, !1), N = s(e, "transparent", 3, !1), m = s(e, "activeItem", 3, ""), I = s(e, "class", 3, ""), R = Tt();
  let z, _ = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(st(/* @__PURE__ */ new Set())), q = /* @__PURE__ */ ye(!1);
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
  }, w = /* @__PURE__ */ Ee(() => ee[n()]);
  function E(v, b) {
    if (!v.disabled) {
      if (v.children) {
        const re = new Set(t(f));
        re.has(v.id) ? re.delete(v.id) : re.add(v.id), W(f, re, !0);
        return;
      }
      if (W(_, !1), R("navigate", { item: v, href: v.href }), v.external && v.href) {
        window.open(v.href, "_blank", "noopener,noreferrer"), b?.preventDefault();
        return;
      }
    }
  }
  function B() {
    W(f, /* @__PURE__ */ new Set(), !0);
  }
  function F(v, b) {
    v.key === "Enter" || v.key === " " ? (v.preventDefault(), E(b)) : v.key === "Escape" && B();
  }
  wt(() => {
    function v() {
      W(q, window.scrollY > 10);
    }
    if (l() === "fixed" || l() === "sticky")
      return window.addEventListener("scroll", v), () => window.removeEventListener("scroll", v);
  }), wt(() => {
    function v(b) {
      z && !z.contains(b.target) && B();
    }
    return document.addEventListener("click", v), () => document.removeEventListener("click", v);
  });
  const D = /* @__PURE__ */ Ee(() => Z("w-full border-b transition-all duration-300", "font-mono", t(w).nav, l() === "fixed" && "fixed top-0 left-0 z-50", l() === "sticky" && "sticky top-0 z-40", d() && "backdrop-blur-xl", N() && !t(q) && "bg-transparent border-transparent", A() ? "py-2" : "py-4", I())), V = /* @__PURE__ */ Ee(() => Z("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", "flex items-center justify-between", A() ? "h-12" : "h-16"));
  var O = J0(), P = i(O), Q = i(P);
  {
    var G = (v) => {
      var b = m0(), re = i(b);
      re.__click = [u0, R, _];
      var de = i(re);
      {
        var ue = (oe) => {
          var S = b0();
          M(() => xe(S, "src", e.logo)), o(oe, S);
        }, ve = (oe) => {
          var S = g0(), te = i(S);
          M((J) => ie(te, J), [() => u().charAt(0)]), o(oe, S);
        };
        g(de, (oe) => {
          e.logo ? oe(ue) : oe(ve, !1);
        });
      }
      var $ = h(de, 2);
      {
        var U = (oe) => {
          var S = h0(), te = i(S);
          M(() => ie(te, u())), o(oe, S);
        };
        g($, (oe) => {
          u() && oe(U);
        });
      }
      Ie(re, (oe, S) => ft?.(oe, S), () => ({ strength: 0.1 })), M(() => j(re, 1, `flex items-center space-x-3 ${t(w).brand ?? ""} hover:opacity-80 transition-opacity`)), o(v, b);
    };
    g(Q, (v) => {
      p() && v(G);
    });
  }
  var L = h(Q, 2);
  Ge(L, 21, a, (v) => v.id, (v, b) => {
    var re = D0(), de = i(re);
    {
      var ue = ($) => {
        var U = T0(), oe = _e(U);
        oe.__click = [p0, E, b], oe.__keydown = [x0, F, b];
        var S = i(oe);
        {
          var te = (se) => {
            var me = _0(), fe = i(me);
            M(() => ie(fe, t(b).icon)), o(se, me);
          };
          g(S, (se) => {
            t(b).icon && se(te);
          });
        }
        var J = h(S), Y = h(J);
        {
          var le = (se) => {
            var me = w0(), fe = i(me);
            M(() => ie(fe, t(b).badge)), o(se, me);
          };
          g(Y, (se) => {
            t(b).badge && se(le);
          });
        }
        var H = h(Y, 2);
        Ie(oe, (se, me) => ft?.(se, me), () => ({ enabled: !t(b).disabled, strength: 0.1 }));
        var ae = h(oe, 2);
        {
          var ce = (se) => {
            var me = S0();
            Ge(me, 21, () => t(b).children, (fe) => fe.id, (fe, be) => {
              var ge = E0();
              ge.__click = [y0, E, be];
              var Ce = i(ge);
              {
                var Pe = (pe) => {
                  var Te = k0(), Ne = i(Te);
                  M(() => ie(Ne, t(be).icon)), o(pe, Te);
                };
                g(Ce, (pe) => {
                  t(be).icon && pe(Pe);
                });
              }
              var Be = h(Ce), Re = h(Be);
              {
                var we = (pe) => {
                  var Te = C0(), Ne = i(Te);
                  M(() => ie(Ne, t(be).badge)), o(pe, Te);
                };
                g(Re, (pe) => {
                  t(be).badge && pe(we);
                });
              }
              Ie(ge, (pe, Te) => ft?.(pe, Te), () => ({ enabled: !t(be).disabled, strength: 0.1 })), M(() => {
                xe(ge, "href", t(be).href), j(ge, 1, `block px-4 py-2 text-sm ${t(w).item ?? ""} hover:bg-white/10
										       transition-colors duration-150 first:rounded-t-md last:rounded-b-md
										       ${t(be).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ie(Be, ` ${t(be).label ?? ""} `);
              }), o(fe, ge);
            }), Ie(me, (fe, be) => kt?.(fe, be), () => ({ blur: "xl", opacity: "strong" })), M(() => j(me, 1, `absolute top-full left-0 mt-2 w-48 rounded-md border shadow-lg z-50
								       ${t(w).dropdown ?? ""}`)), $e(1, me, () => ht, () => ({ direction: "up", duration: 200 })), o(se, me);
          };
          g(ae, (se) => {
            t(f).has(t(b).id) && se(ce);
          });
        }
        M(
          (se, me) => {
            j(oe, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(b).id === m() ? t(w).activeItem : t(w).item) ?? ""}
							       ${t(b).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), oe.disabled = t(b).disabled, xe(oe, "aria-expanded", se), ie(J, ` ${t(b).label ?? ""} `), j(H, 0, `ml-1 w-4 h-4 transition-transform duration-200
								       ${me ?? ""}`);
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
            M(() => ie(se, t(b).icon)), o(ae, ce);
          };
          g(oe, (ae) => {
            t(b).icon && ae(S);
          });
        }
        var te = h(oe), J = h(te);
        {
          var Y = (ae) => {
            var ce = I0(), se = i(ce);
            M(() => ie(se, t(b).badge)), o(ae, ce);
          };
          g(J, (ae) => {
            t(b).badge && ae(Y);
          });
        }
        var le = h(J, 2);
        {
          var H = (ae) => {
            var ce = P0();
            o(ae, ce);
          };
          g(le, (ae) => {
            t(b).external && ae(H);
          });
        }
        Ie(U, (ae, ce) => ft?.(ae, ce), () => ({ enabled: !t(b).disabled, strength: 0.1 })), M(() => {
          xe(U, "href", t(b).href), j(U, 1, `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
							       ${(t(b).id === m() ? t(w).activeItem : t(w).item) ?? ""}
							       ${t(b).disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`), xe(U, "aria-current", t(b).id === m() ? "page" : void 0), ie(te, ` ${t(b).label ?? ""} `);
        }), o($, U);
      };
      g(de, ($) => {
        t(b).children ? $(ue) : $(ve, !1);
      });
    }
    o(v, re);
  });
  var T = h(L, 2), y = i(T);
  y.__click = [f0, _, R];
  var x = i(y);
  {
    var C = (v) => {
      var b = R0();
      o(v, b);
    }, X = (v) => {
      var b = j0();
      o(v, b);
    };
    g(x, (v) => {
      t(_) ? v(C) : v(X, !1);
    });
  }
  Ie(y, (v, b) => ft?.(v, b), () => ({ strength: 0.15 }));
  var K = h(P, 2);
  {
    var k = (v) => {
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
                M(() => ie(Pe, t(ue).icon)), o(ge, Ce);
              };
              g(le, (ge) => {
                t(ue).icon && ge(H);
              });
            }
            var ae = h(le), ce = h(ae);
            {
              var se = (ge) => {
                var Ce = q0(), Pe = i(Ce);
                M(() => ie(Pe, t(ue).badge)), o(ge, Ce);
              };
              g(ce, (ge) => {
                t(ue).badge && ge(se);
              });
            }
            var me = h(Y, 2), fe = h(J, 2);
            {
              var be = (ge) => {
                var Ce = G0();
                Ge(Ce, 21, () => t(ue).children, (Pe) => Pe.id, (Pe, Be) => {
                  var Re = V0();
                  Re.__click = [B0, E, Be];
                  var we = i(Re);
                  {
                    var pe = (Le) => {
                      var qe = F0(), Fe = i(qe);
                      M(() => ie(Fe, t(Be).icon)), o(Le, qe);
                    };
                    g(we, (Le) => {
                      t(Be).icon && Le(pe);
                    });
                  }
                  var Te = h(we), Ne = h(Te);
                  {
                    var Ae = (Le) => {
                      var qe = H0(), Fe = i(qe);
                      M(() => ie(Fe, t(Be).badge)), o(Le, qe);
                    };
                    g(Ne, (Le) => {
                      t(Be).badge && Le(Ae);
                    });
                  }
                  M(() => {
                    xe(Re, "href", t(Be).href), j(Re, 1, `flex items-center px-3 py-2 rounded-md text-sm
											       ${t(w).item ?? ""} hover:bg-white/10 transition-colors
											       ${t(Be).disabled ? "opacity-50 cursor-not-allowed" : ""}`), ie(Te, ` ${t(Be).label ?? ""} `);
                  }), o(Pe, Re);
                }), $e(1, Ce, () => ht, () => ({ direction: "down", duration: 150 })), o(ge, Ce);
              };
              g(fe, (ge) => {
                t(f).has(t(ue).id) && ge(be);
              });
            }
            M(
              (ge, Ce) => {
                j(J, 1, `w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
								       ${(t(ue).id === m() ? t(w).activeItem : t(w).item) ?? ""}
								       ${t(ue).disabled ? "opacity-50 cursor-not-allowed" : ""}`), J.disabled = t(ue).disabled, xe(J, "aria-expanded", ge), ie(ae, ` ${t(ue).label ?? ""} `), j(me, 0, `w-5 h-5 transition-transform duration-200
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
              var Y = (me) => {
                var fe = W0(), be = i(fe);
                M(() => ie(be, t(ue).icon)), o(me, fe);
              };
              g(J, (me) => {
                t(ue).icon && me(Y);
              });
            }
            var le = h(J), H = h(le);
            {
              var ae = (me) => {
                var fe = K0(), be = i(fe);
                M(() => ie(be, t(ue).badge)), o(me, fe);
              };
              g(H, (me) => {
                t(ue).badge && me(ae);
              });
            }
            var ce = h(H, 2);
            {
              var se = (me) => {
                var fe = X0();
                o(me, fe);
              };
              g(ce, (me) => {
                t(ue).external && me(se);
              });
            }
            M(() => {
              xe(te, "href", t(ue).href), j(te, 1, `flex items-center px-3 py-2 rounded-md text-base font-medium
							       ${(t(ue).id === m() ? t(w).activeItem : t(w).item) ?? ""}
							       ${t(ue).disabled ? "opacity-50 cursor-not-allowed" : ""}`), xe(te, "aria-current", t(ue).id === m() ? "page" : void 0), ie(le, ` ${t(ue).label ?? ""} `);
            }), o(S, te);
          };
          g($, (S) => {
            t(ue).children ? S(U) : S(oe, !1);
          });
        }
        o(de, ve);
      }), M(() => j(b, 1, `md:hidden border-t ${t(w).nav ?? ""}`)), $e(1, b, () => ht, () => ({ direction: "down", duration: 200 })), o(v, b);
    };
    g(K, (v) => {
      t(_) && v(k);
    });
  }
  tt(O, (v) => z = v, () => z), Ie(O, (v, b) => kt?.(v, b), () => d() ? { blur: "xl", opacity: "medium" } : void 0), M(() => {
    j(O, 1, ne(t(D))), j(P, 1, ne(t(V))), j(y, 1, `p-2 rounded-md ${t(w).mobileButton ?? ""} hover:bg-white/10 transition-colors`), xe(y, "aria-expanded", t(_));
  }), o(r, O), Xe();
}
vt(["click", "keydown"]);
function ja(r) {
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
      for (const u of Array.from(l.attributes)) {
        const p = u.name.toLowerCase(), A = u.value;
        if (p.startsWith("on")) {
          l.removeAttribute(u.name);
          continue;
        }
        if ((p === "href" || p === "src") && /^\s*javascript:/i.test(A)) {
          l.removeAttribute(u.name);
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
}, ff = (r) => r.stopPropagation(), bf = /* @__PURE__ */ c('<td><input type="checkbox" class="rounded bg-transparent border-current"/></td>'), gf = (r, e, a, n, l) => e() && t(a).editable && n(t(l), t(a)), hf = (r, e, a) => {
  r.key === "Enter" && e(), r.key === "Escape" && a();
}, mf = /* @__PURE__ */ c('<input class="w-full bg-transparent border border-blue-500 rounded px-2 py-1"/>'), pf = /* @__PURE__ */ c("<td><!></td>"), xf = /* @__PURE__ */ c('<span class="mr-1"> </span>'), _f = /* @__PURE__ */ c("<!> ", 1), wf = /* @__PURE__ */ c('<td><div class="flex items-center gap-1"></div></td>'), yf = /* @__PURE__ */ c("<tr><!><!><!></tr>"), kf = /* @__PURE__ */ c('<div><div class="flex items-center gap-3"><span class="text-sm text-gray-400"> </span></div> <div class="flex items-center gap-2"><!> <!> <!></div></div>'), Cf = /* @__PURE__ */ c('<div><!> <div class="overflow-auto"><table class="w-full"><thead><tr><!><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Ef = {
  hash: "svelte-23n5dg",
  code: `
	/* Terminal glow effects */.terminal .data-grid:hover {box-shadow:0 0 0 1px var(--terminal-green),
			0 0 20px var(--terminal-green-glow);}`
};
function vp(r, e) {
  Ke(e, !0), Qe(r, Ef);
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), u = s(e, "loading", 3, !1);
  s(e, "virtualScrolling", 3, !1), s(e, "rowHeight", 3, 60);
  const p = s(e, "maxHeight", 3, "600px"), A = s(e, "sortBy", 3, ""), N = s(e, "sortOrder", 3, "asc"), m = s(e, "filters", 19, () => []), I = s(e, "searchable", 3, !0), R = s(e, "searchPlaceholder", 3, "Search..."), z = s(e, "selectable", 3, !1), _ = s(e, "multiSelect", 3, !1), f = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), q = s(e, "editable", 3, !1), ee = s(e, "pagination", 3, !0), w = s(e, "pageSize", 3, 10), E = s(e, "currentPage", 3, 1), B = s(e, "stickyHeader", 3, !0);
  s(e, "resizableColumns", 3, !1), s(e, "reorderableColumns", 3, !1);
  const F = s(e, "exportable", 3, !1), D = s(e, "actions", 19, () => []), V = s(e, "emptyMessage", 3, "No data available"), O = s(e, "class", 3, ""), P = Tt();
  let Q = /* @__PURE__ */ ye("");
  const G = st(m());
  let L = /* @__PURE__ */ ye(st(A())), T = /* @__PURE__ */ ye(st(N())), y = /* @__PURE__ */ ye(st(f())), x = /* @__PURE__ */ ye(null), C = /* @__PURE__ */ ye("");
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
  }, k = /* @__PURE__ */ Ee(() => X[l()]), v = /* @__PURE__ */ Ee(() => K[d()]), b = /* @__PURE__ */ Ee(() => () => {
    let ke = n();
    if (t(Q).trim()) {
      const he = t(Q).toLowerCase();
      ke = ke.filter((ze) => a().some((De) => String(ze[De.key] || "").toLowerCase().includes(he)));
    }
    for (const he of G)
      ke = ke.filter((ze) => {
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
    return t(L) && a().find((ze) => ze.key === t(L))?.sortable && ke.sort((ze, De) => {
      const He = ze[t(L)], Je = De[t(L)];
      if (He === Je) return 0;
      const We = t(T) === "asc";
      return He < Je ? We ? -1 : 1 : We ? 1 : -1;
    }), ke;
  }), re = /* @__PURE__ */ Ee(() => Math.ceil((e.totalRows ?? t(b).length) / w())), de = /* @__PURE__ */ Ee(() => () => {
    if (!ee()) return t(b);
    const ke = (E() - 1) * w();
    return t(b).slice(ke, ke + w());
  }), ue = /* @__PURE__ */ Ee(() => () => {
    const ke = [], he = Math.min(5, t(re)), ze = Math.max(1, Math.min(t(re) - (he - 1), E() - Math.floor(he / 2)));
    for (let De = 0; De < he; De++) ke.push(ze + De);
    return ke;
  });
  function ve(ke) {
    ke.sortable && (t(L) === ke.key ? W(T, t(T) === "asc" ? "desc" : "asc", !0) : (W(L, ke.key, !0), W(T, "asc")), P("sort", { column: ke.key, order: t(T) }));
  }
  function $() {
    P("search", { query: t(Q) });
  }
  function U(ke, he) {
    P("rowClick", { row: ke, index: he });
  }
  function oe(ke, he) {
    _() ? he ? t(y).add(ke.id) : t(y).delete(ke.id) : W(y, he ? /* @__PURE__ */ new Set([ke.id]) : /* @__PURE__ */ new Set(), !0), W(y, new Set(t(y)), !0), P("rowSelect", { row: ke, selected: he });
  }
  function S(ke) {
    ke ? W(y, new Set(t(de).map((he) => he.id)), !0) : W(y, /* @__PURE__ */ new Set(), !0), P("selectAll", { selected: ke });
  }
  function te(ke, he) {
    !q() || !he.editable || (W(x, { rowId: ke.id, column: he.key }, !0), W(C, String(ke[he.key] || ""), !0));
  }
  function J() {
    if (!t(x)) return;
    const ke = t(de).find((He) => He.id === t(x).rowId);
    if (!ke) return;
    const he = a().find((He) => He.key === t(x).column);
    if (!he) return;
    const ze = ke[he.key];
    let De = t(C);
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
      const He = he.validation(De);
      if (He) {
        alert(He);
        return;
      }
    }
    P("cellEdit", { row: ke, column: he.key, oldValue: ze, newValue: De }), W(x, null), W(C, "");
  }
  function Y() {
    W(x, null), W(C, "");
  }
  function le(ke, he, ze) {
    if (ke.render)
      return ke.render(he, ze, ke);
    if (ke.formatter)
      return ke.formatter(he, ze);
    switch (ke.type) {
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
  const H = /* @__PURE__ */ Ee(() => t(de).length > 0 && t(de).every((ke) => t(y).has(ke.id))), ae = /* @__PURE__ */ Ee(() => Z("rounded-lg border overflow-hidden font-mono", t(k).container, O()));
  var ce = Cf(), se = i(ce);
  {
    var me = (ke) => {
      var he = rf(), ze = i(he), De = i(ze);
      {
        var He = (nt) => {
          var Ue = ef(), je = i(Ue);
          gd(je, {
            get placeholder() {
              return R();
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
          var Oe = h(je, 2);
          Oe.__click = $, o(nt, Ue);
        };
        g(De, (nt) => {
          I() && nt(He);
        });
      }
      var Je = h(De, 2);
      {
        var We = (nt) => {
          var Ue = tf(), je = i(Ue);
          M(() => ie(je, `${t(y).size ?? ""} selected`)), o(nt, Ue);
        };
        g(Je, (nt) => {
          t(y).size > 0 && nt(We);
        });
      }
      var at = h(ze, 2), lt = i(at);
      {
        var et = (nt) => {
          $t(nt, {
            size: "sm",
            get variant() {
              return l();
            },
            onclick: () => P("export", { format: "csv" }),
            children: (Ue, je) => {
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
      M((nt) => j(he, 1, nt), [
        () => ne(Z("px-4 py-3 border-b flex items-center justify-between", t(k).toolbar))
      ]), o(ke, he);
    };
    g(se, (ke) => {
      (I() || F() || D().length > 0) && ke(me);
    });
  }
  var fe = h(se, 2), be = i(fe), ge = i(be), Ce = i(ge), Pe = i(Ce);
  {
    var Be = (ke) => {
      var he = nf(), ze = i(he);
      ze.__change = [af, S], M(
        (De) => {
          j(he, 1, De), Kt(ze, t(H));
        },
        [
          () => ne(Z(t(v).header, t(k).headerCell, "w-12"))
        ]
      ), o(ke, he);
    };
    g(Pe, (ke) => {
      z() && ke(Be);
    });
  }
  var Re = h(Pe);
  Ge(Re, 17, a, (ke) => ke.key, (ke, he) => {
    var ze = sf();
    ze.__click = [of, he, ve];
    var De = i(ze), He = i(De), Je = i(He), We = h(He, 2);
    {
      var at = (lt) => {
        var et = lf(), nt = i(et), Ue = h(nt, 2);
        M(
          (je, Oe) => {
            j(nt, 0, je), j(Ue, 0, Oe);
          },
          [
            () => ne(Z("w-3 h-3 transition-colors", t(L) === t(he).key && t(T) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => ne(Z("w-3 h-3 -mt-1 transition-colors", t(L) === t(he).key && t(T) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(lt, et);
      };
      g(We, (lt) => {
        t(he).sortable && lt(at);
      });
    }
    Ie(ze, (lt, et) => ft?.(lt, et), () => ({ enabled: t(he).sortable, strength: 0.05 })), M(
      (lt) => {
        j(ze, 1, lt), pt(ze, t(he).width ? `width: ${t(he).width}` : void 0), ie(Je, t(he).label);
      },
      [
        () => ne(Z(t(v).header, t(k).headerCell, "font-semibold text-left", t(he).align && `text-${t(he).align}`, t(he).sortable && "cursor-pointer select-none"))
      ]
    ), o(ke, ze);
  });
  var we = h(Re);
  {
    var pe = (ke) => {
      var he = df();
      M((ze) => j(he, 1, ze), [
        () => ne(Z(t(v).header, t(k).headerCell, "w-32"))
      ]), o(ke, he);
    };
    g(we, (ke) => {
      D().length > 0 && ke(pe);
    });
  }
  var Te = h(ge), Ne = i(Te);
  {
    var Ae = (ke) => {
      var he = cf(), ze = i(he);
      M(
        (De) => {
          xe(ze, "colspan", a().length + (z() ? 1 : 0) + (D().length > 0 ? 1 : 0)), j(ze, 1, De);
        },
        [
          () => ne(Z(t(v).cell, t(k).cell, "text-center"))
        ]
      ), o(ke, he);
    }, Le = (ke) => {
      var he = Se(), ze = _e(he);
      {
        var De = (Je) => {
          var We = vf(), at = i(We), lt = i(at), et = h(i(lt), 2), nt = i(et);
          M(
            (Ue) => {
              xe(at, "colspan", a().length + (z() ? 1 : 0) + (D().length > 0 ? 1 : 0)), j(at, 1, Ue), ie(nt, V());
            },
            [
              () => ne(Z(t(v).cell, t(k).cell, "text-center text-gray-400"))
            ]
          ), o(Je, We);
        }, He = (Je) => {
          var We = Se(), at = _e(We);
          Ge(at, 19, () => t(de), (lt) => lt.id, (lt, et, nt) => {
            const Ue = /* @__PURE__ */ Ee(() => t(y).has(t(et).id));
            var je = yf();
            je.__click = () => U(t(et), t(nt));
            var Oe = i(je);
            {
              var Ve = (xt) => {
                var ut = bf(), yt = i(ut);
                yt.__change = [uf, oe, et], yt.__click = [ff], M(
                  (Dt) => {
                    j(ut, 1, Dt), Kt(yt, t(Ue));
                  },
                  [
                    () => ne(Z(t(v).cell, t(k).cell))
                  ]
                ), o(xt, ut);
              };
              g(Oe, (xt) => {
                z() && xt(Ve);
              });
            }
            var rt = h(Oe);
            Ge(rt, 17, a, (xt) => xt.key, (xt, ut) => {
              var yt = pf();
              yt.__dblclick = [gf, q, ut, te, et];
              var Dt = i(yt);
              {
                var Yt = (Qt) => {
                  var ar = mf();
                  ar.__keydown = [hf, J, Y], Nt("blur", ar, J), mr(ar, () => t(C), (pr) => W(C, pr)), o(Qt, ar);
                }, na = (Qt) => {
                  var ar = Se(), pr = _e(ar);
                  Ia(pr, () => ja(le(t(ut), t(et)[t(ut).key], t(et)))), o(Qt, ar);
                };
                g(Dt, (Qt) => {
                  t(x)?.rowId === t(et).id && t(x)?.column === t(ut).key ? Qt(Yt) : Qt(na, !1);
                });
              }
              M((Qt) => j(yt, 1, Qt), [
                () => ne(Z(t(v).cell, t(k).cell, t(ut).align && `text-${t(ut).align}`))
              ]), o(xt, yt);
            });
            var gt = h(rt);
            {
              var _t = (xt) => {
                var ut = wf(), yt = i(ut);
                Ge(yt, 21, D, Vr, (Dt, Yt) => {
                  var na = Se(), Qt = _e(na);
                  {
                    var ar = (pr) => {
                      {
                        let ai = /* @__PURE__ */ Ee(() => t(Yt).variant || "secondary");
                        $t(pr, {
                          size: "sm",
                          get variant() {
                            return t(ai);
                          },
                          onclick: (Na) => {
                            Na.stopPropagation(), P("actionClick", { row: t(et), action: t(Yt).action });
                          },
                          children: (Na, M1) => {
                            var wn = _f(), yn = _e(wn);
                            {
                              var ni = (Oa) => {
                                var kn = xf(), ii = i(kn);
                                M(() => ie(ii, t(Yt).icon)), o(Oa, kn);
                              };
                              g(yn, (Oa) => {
                                t(Yt).icon && Oa(ni);
                              });
                            }
                            var oi = h(yn);
                            M(() => ie(oi, ` ${t(Yt).label ?? ""}`)), o(Na, wn);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    };
                    g(Qt, (pr) => {
                      (!t(Yt).show || t(Yt).show(t(et))) && pr(ar);
                    });
                  }
                  o(Dt, na);
                }), M((Dt) => j(ut, 1, Dt), [
                  () => ne(Z(t(v).cell, t(k).cell))
                ]), o(xt, ut);
              };
              g(gt, (xt) => {
                D().length > 0 && xt(_t);
              });
            }
            M((xt) => j(je, 1, xt), [
              () => ne(Z(t(k).row, t(k).rowHover, t(Ue) && t(k).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), $e(1, je, () => ht, () => ({ direction: "up", duration: 100, delay: t(nt) * 20 })), o(lt, je);
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
      o(ke, he);
    };
    g(Ne, (ke) => {
      u() ? ke(Ae) : ke(Le, !1);
    });
  }
  Ie(fe, (ke, he) => kt?.(ke, he), () => ({ blur: "sm", opacity: "subtle" }));
  var qe = h(fe, 2);
  {
    var Fe = (ke) => {
      var he = kf(), ze = i(he), De = i(ze), He = i(De), Je = h(ze, 2), We = i(Je);
      {
        let et = /* @__PURE__ */ Ee(() => E() === 1);
        $t(We, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(et);
          },
          onclick: () => P("pageChange", { page: E() - 1 }),
          children: (nt, Ue) => {
            var je = Ct("Previous");
            o(nt, je);
          },
          $$slots: { default: !0 }
        });
      }
      var at = h(We, 2);
      Ge(at, 18, () => t(ue), (et) => et, (et, nt) => {
        {
          let Ue = /* @__PURE__ */ Ee(() => nt === E() ? "primary" : "secondary");
          $t(et, {
            size: "sm",
            get variant() {
              return t(Ue);
            },
            onclick: () => P("pageChange", { page: nt }),
            children: (je, Oe) => {
              var Ve = Ct();
              M(() => ie(Ve, nt)), o(je, Ve);
            },
            $$slots: { default: !0 }
          });
        }
      });
      var lt = h(at, 2);
      {
        let et = /* @__PURE__ */ Ee(() => E() === t(re));
        $t(lt, {
          size: "sm",
          get variant() {
            return l();
          },
          get disabled() {
            return t(et);
          },
          onclick: () => P("pageChange", { page: E() + 1 }),
          children: (nt, Ue) => {
            var je = Ct("Next");
            o(nt, je);
          },
          $$slots: { default: !0 }
        });
      }
      M(
        (et, nt) => {
          j(he, 1, et), ie(He, `Showing ${(E() - 1) * w() + 1} to ${nt ?? ""} of ${e.totalRows ?? t(b).length ?? ""} entries`);
        },
        [
          () => ne(Z("px-4 py-3 border-t flex items-center justify-between", t(k).pagination)),
          () => Math.min(E() * w(), e.totalRows ?? t(b).length)
        ]
      ), o(ke, he);
    };
    g(qe, (ke) => {
      ee() && t(re) > 1 && ke(Fe);
    });
  }
  M(
    (ke) => {
      j(ce, 1, ne(t(ae))), pt(fe, p() ? `max-height: ${p()}` : void 0), j(ge, 1, ke);
    },
    [
      () => ne(Z(t(k).header, B() && "sticky top-0 z-10"))
    ]
  ), o(r, ce), Xe();
}
vt(["click", "change", "dblclick", "keydown"]);
var Sf = /* @__PURE__ */ c('<th class="w-8 px-2 py-2 align-middle svelte-qp1ncx"><input type="checkbox" aria-label="Select page rows"/></th>'), Tf = (r, e, a) => e(t(a)), Mf = /* @__PURE__ */ c('<span class="inline-block ml-1 text-xs opacity-70"> </span>'), Af = /* @__PURE__ */ c('<span class="inline-block ml-1 text-xs opacity-30" aria-hidden="true">↕</span>'), zf = /* @__PURE__ */ c("<th><span> </span> <!></th>"), If = /* @__PURE__ */ c('<tr><td class="px-4 py-6 text-center text-white/60 svelte-qp1ncx"> </td></tr>'), Pf = (r, e, a) => e(t(a).id), Lf = /* @__PURE__ */ c('<td class="px-2 py-2 text-center svelte-qp1ncx"><input type="checkbox"/></td>'), Df = /* @__PURE__ */ c("<td> </td>"), Rf = /* @__PURE__ */ c('<tr class="border-t border-white/5 text-white/90 hover:bg-white/5 transition-colors"><!><!></tr>'), jf = (r, e, a) => e(t(a) - 1), Nf = (r, e, a) => e(t(a) + 1), Of = /* @__PURE__ */ c('<div class="flex items-center justify-between mt-3 text-xs text-white/70 gap-4 flex-wrap"><div> </div> <div class="flex items-center gap-2"><button class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">Prev</button> <button class="px-2 py-1 rounded border border-white/15 bg-white/5 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed">Next</button></div></div>'), qf = /* @__PURE__ */ c('<div><div class="overflow-x-auto border border-white/10 rounded-lg"><table class="w-full text-sm border-collapse svelte-qp1ncx"><thead class="bg-white/5 text-white/80"><tr><!><!></tr></thead><tbody><!></tbody></table></div> <!></div>');
const Bf = {
  hash: "svelte-qp1ncx",
  code: `table.svelte-qp1ncx {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;}th.svelte-qp1ncx,
    td.svelte-qp1ncx {vertical-align:top;}`
};
function up(r, e) {
  Ke(e, !0), Qe(r, Bf);
  let a = s(e, "selectable", 3, !1), n = s(e, "selectedRows", 31, () => st([])), l = s(e, "pageSize", 3, 10), d = s(e, "showPagination", 3, !1), u = s(e, "class", 3, ""), p = s(e, "emptyMessage", 3, "No data"), A = /* @__PURE__ */ dt(e, [
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
  const N = Tt();
  let m = /* @__PURE__ */ ye(null), I = /* @__PURE__ */ ye(1);
  function R(v) {
    v.sortable && (!t(m) || t(m).key !== v.key ? W(m, { key: v.key, direction: "asc" }, !0) : W(
      m,
      t(m).direction === "asc" ? { key: v.key, direction: "desc" } : null,
      // third click clears sort
      !0
    ), W(I, 1), N("sort", t(m)));
  }
  function z(v) {
    switch (v) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  }
  const _ = /* @__PURE__ */ Ee(() => () => {
    if (!t(m)) return e.data;
    const { key: v, direction: b } = t(m), re = b === "asc" ? 1 : -1;
    return [...e.data].sort((de, ue) => {
      const ve = de[v], $ = ue[v];
      return ve == null && $ == null ? 0 : ve == null ? -1 * re : $ == null ? 1 * re : ve < $ ? -1 * re : ve > $ ? 1 * re : 0;
    });
  }), f = /* @__PURE__ */ Ee(() => () => d() ? Math.max(1, Math.ceil(t(_)().length / l())) : 1), q = /* @__PURE__ */ Ee(() => () => {
    if (!d()) return t(_)();
    const v = (t(I) - 1) * l();
    return t(_)().slice(v, v + l());
  });
  function ee(v) {
    const b = Math.min(Math.max(1, v), t(f)());
    b !== t(I) && (W(I, b, !0), N("pageChange", { page: t(I) }));
  }
  function w() {
    if (!a()) return !1;
    const v = t(q)();
    return v.length === 0 ? !1 : v.every((b) => n().includes(b.id));
  }
  function E() {
    if (!a()) return;
    const v = t(q)();
    if (v.length !== 0) {
      if (w())
        n(n().filter((b) => !v.some((re) => re.id === b)));
      else {
        const b = v.map((re) => re.id).filter((re) => !n().includes(re));
        n([...n(), ...b]);
      }
      N("selectionChange", { selected: n() });
    }
  }
  function B(v) {
    a() && (n(n().includes(v) ? n().filter((b) => b !== v) : [...n(), v]), N("selectionChange", { selected: n() }));
  }
  function F(v) {
    if (v.sortable)
      return !t(m) || t(m).key !== v.key ? "none" : t(m)?.direction === "asc" ? "ascending" : "descending";
  }
  bt(() => {
    e.columns.length, n().length, t(q)().length, t(_)().length, t(f)(), p(), u();
  });
  var D = qf();
  Ze(D, () => ({ class: "w-full " + u(), ...A }));
  var V = i(D), O = i(V), P = i(O), Q = i(P), G = i(Q);
  {
    var L = (v) => {
      var b = Sf(), re = i(b);
      re.__click = E, M((de) => Kt(re, de), [w]), o(v, b);
    };
    g(G, (v) => {
      a() && v(L);
    });
  }
  var T = h(G);
  Ge(T, 17, () => e.columns, (v) => v.key, (v, b) => {
    var re = zf();
    re.__click = [Tf, R, b];
    var de = i(re), ue = i(de), ve = h(de, 2);
    {
      var $ = (U) => {
        var oe = Se(), S = _e(oe);
        {
          var te = (Y) => {
            var le = Mf(), H = i(le);
            M(() => ie(H, t(m).direction === "asc" ? "▲" : "▼")), o(Y, le);
          }, J = (Y) => {
            var le = Af();
            o(Y, le);
          };
          g(S, (Y) => {
            t(m) && t(m).key === t(b).key ? Y(te) : Y(J, !1);
          });
        }
        o(U, oe);
      };
      g(ve, (U) => {
        t(b).sortable && U($);
      });
    }
    M(
      (U, oe) => {
        j(re, 1, U, "svelte-qp1ncx"), pt(re, t(b).width ? `width:${t(b).width}` : void 0), xe(re, "role", t(b).sortable ? "columnheader" : void 0), xe(re, "aria-sort", oe), ie(ue, t(b).label);
      },
      [
        () => "px-3 py-2 font-semibold tracking-wide select-none " + z(t(b).align) + (t(b).sortable ? " cursor-pointer hover:bg-white/10" : ""),
        () => F(t(b))
      ]
    ), o(v, re);
  });
  var y = h(P), x = i(y);
  {
    var C = (v) => {
      var b = If(), re = i(b), de = i(re);
      M(() => {
        xe(re, "colspan", e.columns.length + (a() ? 1 : 0)), ie(de, p());
      }), o(v, b);
    }, X = (v) => {
      var b = Se(), re = _e(b);
      Ge(re, 17, () => t(q)(), (de) => de.id, (de, ue) => {
        var ve = Rf(), $ = i(ve);
        {
          var U = (S) => {
            var te = Lf(), J = i(te);
            J.__click = [Pf, B, ue], M(
              (Y) => {
                xe(J, "aria-label", `Select row ${t(ue).id}`), Kt(J, Y);
              },
              [() => n().includes(t(ue).id)]
            ), o(S, te);
          };
          g($, (S) => {
            a() && S(U);
          });
        }
        var oe = h($);
        Ge(oe, 17, () => e.columns, (S) => S.key, (S, te) => {
          var J = Df(), Y = i(J);
          M(
            (le) => {
              j(J, 1, le, "svelte-qp1ncx"), ie(Y, t(ue)[t(te).key]);
            },
            [
              () => "px-3 py-2 align-top " + z(t(te).align)
            ]
          ), o(S, J);
        }), o(de, ve);
      }), o(v, b);
    };
    g(x, (v) => {
      t(q)().length === 0 ? v(C) : v(X, !1);
    });
  }
  var K = h(V, 2);
  {
    var k = (v) => {
      var b = Of(), re = i(b), de = i(re), ue = h(re, 2), ve = i(ue);
      ve.__click = [jf, ee, I];
      var $ = h(ve, 2);
      $.__click = [Nf, ee, I], M(
        (U, oe) => {
          ie(de, `Page ${t(I) ?? ""} of ${U ?? ""}`), ve.disabled = t(I) === 1, $.disabled = oe;
        },
        [
          () => t(f)(),
          () => t(I) === t(f)()
        ]
      ), o(v, b);
    };
    g(K, (v) => {
      d() && t(f)() > 1 && v(k);
    });
  }
  o(r, D), Xe();
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
}, lb = (r) => r.stopPropagation(), sb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), db = /* @__PURE__ */ c("<img/>"), cb = /* @__PURE__ */ c('<div><span class="text-2xl"> </span></div>'), vb = /* @__PURE__ */ c("<span> </span>"), ub = /* @__PURE__ */ c("<p> </p>"), fb = /* @__PURE__ */ c("<p> </p>"), bb = /* @__PURE__ */ c("<span> </span>"), gb = /* @__PURE__ */ c('<div class="flex flex-wrap gap-3 mt-2"></div>'), hb = (r, e, a, n) => e(t(a), t(n).action, r), mb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), pb = /* @__PURE__ */ c("<button><!> </button>"), xb = /* @__PURE__ */ c('<div class="flex flex-col gap-2"></div>'), _b = /* @__PURE__ */ c('<div class="space-y-3"><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h3> </h3> <!></div> <!> <!> <!></div> <!></div></div>'), wb = (r, e, a) => {
  const n = r.target;
  e(t(a), n.checked);
}, yb = (r) => r.stopPropagation(), kb = /* @__PURE__ */ c('<input type="checkbox" class="rounded bg-transparent border-current mt-1"/>'), Cb = /* @__PURE__ */ c("<img/>"), Eb = /* @__PURE__ */ c('<div><span class="text-3xl"> </span></div>'), Sb = /* @__PURE__ */ c("<span> </span>"), Tb = (r, e, a, n) => e(t(a), t(n).action, r), Mb = /* @__PURE__ */ c('<span class="mr-1"> </span>'), Ab = /* @__PURE__ */ c("<button><!> </button>"), zb = /* @__PURE__ */ c('<div class="flex items-center gap-2"></div>'), Ib = /* @__PURE__ */ c("<p> </p>"), Pb = /* @__PURE__ */ c("<p> </p>"), Lb = /* @__PURE__ */ c("<span> </span>"), Db = /* @__PURE__ */ c('<div class="flex flex-wrap gap-3"></div>'), Rb = /* @__PURE__ */ c('<div><div class="flex items-start gap-3"><!> <!> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><h3> </h3> <!></div> <!></div> <!> <!> <!></div></div></div>'), jb = /* @__PURE__ */ c("<div><!></div>"), Nb = /* @__PURE__ */ c('<div role="list" aria-label="Item list"><!> <div class="divide-y divide-gray-600"><!></div></div>');
const Ob = {
  hash: "svelte-9ixerq",
  code: `
    /* Terminal glow effects */.terminal .list-item:hover {box-shadow:0 0 0 1px var(--terminal-green),
            0 0 15px var(--terminal-green-glow);}`
};
function fp(r, e) {
  Ke(e, !0), Qe(r, Ob);
  const a = s(e, "items", 19, () => []), n = s(e, "variant", 3, "default"), l = s(e, "size", 3, "md"), d = s(e, "layout", 3, "simple"), u = s(e, "selectable", 3, !1), p = s(e, "multiSelect", 3, !1), A = s(e, "selectedItems", 19, () => /* @__PURE__ */ new Set()), N = s(e, "loading", 3, !1), m = s(e, "loadingCount", 3, 3), I = s(e, "emptyMessage", 3, "No items found"), R = s(e, "emptyIcon", 3, "📋");
  s(e, "dividers", 3, !0);
  const z = s(e, "hover", 3, !0);
  s(e, "animated", 3, !0);
  const _ = s(e, "class", 3, ""), f = Tt();
  let q = /* @__PURE__ */ ye(st(A()));
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
  }, E = /* @__PURE__ */ Ee(() => ee[n()]), B = /* @__PURE__ */ Ee(() => w[l()]);
  function F(v, b) {
    v.disabled || (u() && D(v, !t(q).has(v.id)), f("itemClick", { item: v, index: b }));
  }
  function D(v, b) {
    v.disabled || (p() ? b ? t(q).add(v.id) : t(q).delete(v.id) : b ? W(q, /* @__PURE__ */ new Set([v.id]), !0) : W(q, /* @__PURE__ */ new Set(), !0), W(q, new Set(t(q)), !0), f("itemSelect", { item: v, selected: b }));
  }
  function V(v, b, re) {
    re.stopPropagation(), f("actionClick", { item: v, action: b });
  }
  function O(v) {
    v ? W(q, new Set(a().filter((b) => !b.disabled).map((b) => b.id)), !0) : W(q, /* @__PURE__ */ new Set(), !0), f("selectAll", { selected: v });
  }
  const P = /* @__PURE__ */ Ee(() => a().length > 0 && a().filter((v) => !v.disabled).every((v) => t(q).has(v.id))), Q = /* @__PURE__ */ Ee(() => Z("rounded-lg overflow-hidden font-mono", t(E).container, t(B).container, _()));
  function G(v = "secondary") {
    const b = "px-2 py-1 rounded text-xs font-medium transition-colors";
    switch (v) {
      case "primary":
        return `${b} bg-blue-600 text-white hover:bg-blue-700`;
      case "danger":
        return `${b} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${b} bg-gray-600 text-white hover:bg-gray-700`;
    }
  }
  const L = /* @__PURE__ */ Ee(() => Array.from({ length: m() }, (v, b) => ({ id: `skeleton-${b}` })));
  var T = Nb(), y = i(T);
  {
    var x = (v) => {
      var b = Hf(), re = i(b), de = i(re);
      de.__change = [Ff, O];
      var ue = h(de, 2), ve = i(ue);
      M(
        ($) => {
          j(b, 1, `px-4 py-3 border-b ${t(E).item ?? ""} border-gray-600`), Kt(de, t(P)), ie(ve, `${t(q).size ?? ""} of ${$ ?? ""} selected`);
        },
        [() => a().filter(($) => !$.disabled).length]
      ), o(v, b);
    };
    g(y, (v) => {
      u() && p() && a().length > 0 && v(x);
    });
  }
  var C = h(y, 2), X = i(C);
  {
    var K = (v) => {
      var b = Se(), re = _e(b);
      Ge(re, 19, () => t(L), (de) => de.id, (de, ue) => {
        var ve = Yf(), $ = i(ve);
        {
          var U = (S) => {
            var te = Vf(), J = i(te), Y = h(J, 2), le = i(Y), H = h(le, 2);
            M(
              (ae, ce, se) => {
                j(J, 1, ae), j(le, 1, ce), j(H, 1, se);
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
                var ae = Gf(), ce = i(ae), se = i(ce), me = h(se, 2), fe = i(me), be = h(fe, 2), ge = h(be, 2);
                M(
                  (Ce, Pe, Be, Re) => {
                    j(se, 1, Ce), j(fe, 1, Pe), j(be, 1, Be), j(ge, 1, Re);
                  },
                  [
                    () => ne(Z("rounded-full", t(B).avatar, t(E).skeleton)),
                    () => ne(Z("h-4 rounded", t(E).skeleton, "w-2/3")),
                    () => ne(Z("h-3 rounded", t(E).skeleton, "w-1/2")),
                    () => ne(Z("h-3 rounded", t(E).skeleton, "w-full"))
                  ]
                ), o(H, ae);
              }, le = (H) => {
                var ae = Uf(), ce = i(ae), se = i(ce), me = h(se, 2), fe = i(me), be = h(fe, 2);
                M(
                  (ge, Ce, Pe) => {
                    j(ae, 1, `border rounded-lg p-4 space-y-3 ${t(E).skeleton ?? ""}`), j(se, 1, ge), j(fe, 1, Ce), j(be, 1, Pe);
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
        M((S) => j(ve, 1, S), [
          () => ne(Z(t(B).item, t(E).item, "animate-pulse"))
        ]), o(de, ve);
      }), o(v, b);
    }, k = (v) => {
      var b = Se(), re = _e(b);
      {
        var de = (ve) => {
          var $ = Wf(), U = i($), oe = i(U), S = h(U, 2), te = i(S);
          M(() => {
            j($, 1, `py-12 text-center ${t(E).description ?? ""}`), ie(oe, R()), ie(te, I());
          }), o(ve, $);
        }, ue = (ve) => {
          var $ = Se(), U = _e($);
          Ge(U, 19, a, (oe) => oe.id, (oe, S, te) => {
            const J = /* @__PURE__ */ Ee(() => t(q).has(t(S).id));
            var Y = jb(), le = () => F(t(S), t(te)), H = (me) => (me.key === "Enter" || me.key === " ") && F(t(S), t(te));
            Ze(
              Y,
              (me) => ({
                class: me,
                onclick: le,
                onkeydown: H,
                role: u() ? "option" : "listitem",
                ...u() && !t(S).disabled ? { tabindex: 0 } : {},
                "aria-selected": u() ? t(J) : void 0,
                "aria-label": t(S).title,
                "aria-describedby": t(S).description ? `item-${t(S).id}-description` : void 0
              }),
              [
                () => Z(t(B).item, t(E).item, z() && !t(S).disabled && t(E).itemHover, t(J) && t(E).itemSelected, t(S).disabled && "opacity-50", !t(S).disabled && "cursor-pointer", "transition-all duration-200")
              ]
            );
            var ae = i(Y);
            {
              var ce = (me) => {
                var fe = ob(), be = i(fe);
                {
                  var ge = (he) => {
                    var ze = Zf();
                    ze.__change = [Kf, D, S], ze.__click = [Xf], M(() => {
                      Kt(ze, t(J)), ze.disabled = t(S).disabled;
                    }), o(he, ze);
                  };
                  g(be, (he) => {
                    u() && he(ge);
                  });
                }
                var Ce = h(be, 2);
                {
                  var Pe = (he) => {
                    var ze = Qf();
                    M(
                      (De) => {
                        xe(ze, "src", t(S).avatar), xe(ze, "alt", t(S).title), j(ze, 1, De);
                      },
                      [
                        () => ne(Z("rounded-full object-cover", t(B).avatar))
                      ]
                    ), o(he, ze);
                  }, Be = (he) => {
                    var ze = Se(), De = _e(ze);
                    {
                      var He = (Je) => {
                        var We = Jf(), at = i(We), lt = i(at);
                        M(
                          (et) => {
                            j(We, 1, et), ie(lt, t(S).icon);
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
                    o(he, ze);
                  };
                  g(Ce, (he) => {
                    t(S).avatar ? he(Pe) : he(Be, !1);
                  });
                }
                var Re = h(Ce, 2), we = i(Re), pe = i(we), Te = i(pe), Ne = h(pe, 2);
                {
                  var Ae = (he) => {
                    var ze = $f(), De = i(ze);
                    M(
                      (He) => {
                        j(ze, 1, He), ie(De, t(S).badge);
                      },
                      [
                        () => ne(Z("rounded-full font-medium", t(B).badge, t(E).badge))
                      ]
                    ), o(he, ze);
                  };
                  g(Ne, (he) => {
                    t(S).badge && he(Ae);
                  });
                }
                var Le = h(we, 2);
                {
                  var qe = (he) => {
                    var ze = eb(), De = i(ze);
                    M(
                      (He) => {
                        j(ze, 1, He), ie(De, t(S).subtitle);
                      },
                      [
                        () => ne(Z("text-sm truncate", t(E).subtitle))
                      ]
                    ), o(he, ze);
                  };
                  g(Le, (he) => {
                    t(S).subtitle && he(qe);
                  });
                }
                var Fe = h(Re, 2);
                {
                  var ke = (he) => {
                    var ze = nb();
                    Ge(ze, 21, () => t(S).actions, (De) => De.action, (De, He) => {
                      var Je = ab();
                      Je.__click = [tb, V, S, He];
                      var We = i(Je);
                      {
                        var at = (et) => {
                          var nt = rb(), Ue = i(nt);
                          M(() => ie(Ue, t(He).icon)), o(et, nt);
                        };
                        g(We, (et) => {
                          t(He).icon && et(at);
                        });
                      }
                      var lt = h(We);
                      M(
                        (et) => {
                          j(Je, 1, et), ie(lt, ` ${t(He).label ?? ""}`);
                        },
                        [() => ne(G(t(He).variant))]
                      ), o(De, Je);
                    }), o(he, ze);
                  };
                  g(Fe, (he) => {
                    t(S).actions && t(S).actions.length > 0 && he(ke);
                  });
                }
                M(
                  (he) => {
                    j(pe, 1, he), ie(Te, t(S).title);
                  },
                  [
                    () => ne(Z("font-medium truncate", t(E).title))
                  ]
                ), o(me, fe);
              }, se = (me) => {
                var fe = Se(), be = _e(fe);
                {
                  var ge = (Pe) => {
                    var Be = _b(), Re = i(Be), we = i(Re);
                    {
                      var pe = (Ue) => {
                        var je = sb();
                        je.__change = [ib, D, S], je.__click = [lb], M(() => {
                          Kt(je, t(J)), je.disabled = t(S).disabled;
                        }), o(Ue, je);
                      };
                      g(we, (Ue) => {
                        u() && Ue(pe);
                      });
                    }
                    var Te = h(we, 2);
                    {
                      var Ne = (Ue) => {
                        var je = db();
                        M(
                          (Oe) => {
                            xe(je, "src", t(S).avatar), xe(je, "alt", t(S).title), j(je, 1, Oe);
                          },
                          [
                            () => ne(Z("rounded-full object-cover", t(B).avatar))
                          ]
                        ), o(Ue, je);
                      }, Ae = (Ue) => {
                        var je = Se(), Oe = _e(je);
                        {
                          var Ve = (rt) => {
                            var gt = cb(), _t = i(gt), xt = i(_t);
                            M(
                              (ut) => {
                                j(gt, 1, ut), ie(xt, t(S).icon);
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
                        o(Ue, je);
                      };
                      g(Te, (Ue) => {
                        t(S).avatar ? Ue(Ne) : Ue(Ae, !1);
                      });
                    }
                    var Le = h(Te, 2), qe = i(Le), Fe = i(qe), ke = i(Fe), he = h(Fe, 2);
                    {
                      var ze = (Ue) => {
                        var je = vb(), Oe = i(je);
                        M(
                          (Ve) => {
                            j(je, 1, Ve), ie(Oe, t(S).badge);
                          },
                          [
                            () => ne(Z("rounded-full font-medium", t(B).badge, t(E).badge))
                          ]
                        ), o(Ue, je);
                      };
                      g(he, (Ue) => {
                        t(S).badge && Ue(ze);
                      });
                    }
                    var De = h(qe, 2);
                    {
                      var He = (Ue) => {
                        var je = ub(), Oe = i(je);
                        M(
                          (Ve) => {
                            j(je, 1, Ve), ie(Oe, t(S).subtitle);
                          },
                          [
                            () => ne(Z("text-sm mb-2", t(E).subtitle))
                          ]
                        ), o(Ue, je);
                      };
                      g(De, (Ue) => {
                        t(S).subtitle && Ue(He);
                      });
                    }
                    var Je = h(De, 2);
                    {
                      var We = (Ue) => {
                        var je = fb(), Oe = i(je);
                        M(
                          (Ve) => {
                            j(je, 1, Ve), ie(Oe, t(S).description);
                          },
                          [
                            () => ne(Z("text-sm leading-relaxed", t(E).description))
                          ]
                        ), o(Ue, je);
                      };
                      g(Je, (Ue) => {
                        t(S).description && Ue(We);
                      });
                    }
                    var at = h(Je, 2);
                    {
                      var lt = (Ue) => {
                        var je = gb();
                        Ge(je, 21, () => Object.entries(t(S).metadata), ([Oe, Ve]) => Oe, (Oe, Ve) => {
                          var rt = /* @__PURE__ */ Ee(() => Kr(t(Ve), 2));
                          let gt = () => t(rt)[0], _t = () => t(rt)[1];
                          var xt = bb(), ut = i(xt);
                          M(
                            (yt) => {
                              j(xt, 1, yt), ie(ut, `${gt() ?? ""}: ${_t() ?? ""}`);
                            },
                            [() => ne(Z("text-xs", t(E).metadata))]
                          ), o(Oe, xt);
                        }), o(Ue, je);
                      };
                      g(at, (Ue) => {
                        t(S).metadata && Ue(lt);
                      });
                    }
                    var et = h(Le, 2);
                    {
                      var nt = (Ue) => {
                        var je = xb();
                        Ge(je, 21, () => t(S).actions, (Oe) => Oe.action, (Oe, Ve) => {
                          var rt = pb();
                          rt.__click = [hb, V, S, Ve];
                          var gt = i(rt);
                          {
                            var _t = (ut) => {
                              var yt = mb(), Dt = i(yt);
                              M(() => ie(Dt, t(Ve).icon)), o(ut, yt);
                            };
                            g(gt, (ut) => {
                              t(Ve).icon && ut(_t);
                            });
                          }
                          var xt = h(gt);
                          M(
                            (ut) => {
                              j(rt, 1, ut), ie(xt, ` ${t(Ve).label ?? ""}`);
                            },
                            [() => ne(G(t(Ve).variant))]
                          ), o(Oe, rt);
                        }), o(Ue, je);
                      };
                      g(et, (Ue) => {
                        t(S).actions && t(S).actions.length > 0 && Ue(nt);
                      });
                    }
                    M(
                      (Ue) => {
                        j(Fe, 1, Ue), ie(ke, t(S).title);
                      },
                      [
                        () => ne(Z("font-semibold", t(E).title))
                      ]
                    ), o(Pe, Be);
                  }, Ce = (Pe) => {
                    var Be = Rb(), Re = i(Be), we = i(Re);
                    {
                      var pe = (je) => {
                        var Oe = kb();
                        Oe.__change = [wb, D, S], Oe.__click = [yb], M(() => {
                          Kt(Oe, t(J)), Oe.disabled = t(S).disabled;
                        }), o(je, Oe);
                      };
                      g(we, (je) => {
                        u() && je(pe);
                      });
                    }
                    var Te = h(we, 2);
                    {
                      var Ne = (je) => {
                        var Oe = Cb();
                        M(
                          (Ve) => {
                            xe(Oe, "src", t(S).avatar), xe(Oe, "alt", t(S).title), j(Oe, 1, Ve);
                          },
                          [
                            () => ne(Z("rounded-full object-cover", t(B).avatar))
                          ]
                        ), o(je, Oe);
                      }, Ae = (je) => {
                        var Oe = Se(), Ve = _e(Oe);
                        {
                          var rt = (gt) => {
                            var _t = Eb(), xt = i(_t), ut = i(xt);
                            M(
                              (yt) => {
                                j(_t, 1, yt), ie(ut, t(S).icon);
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
                        o(je, Oe);
                      };
                      g(Te, (je) => {
                        t(S).avatar ? je(Ne) : je(Ae, !1);
                      });
                    }
                    var Le = h(Te, 2), qe = i(Le), Fe = i(qe), ke = i(Fe), he = i(ke), ze = h(ke, 2);
                    {
                      var De = (je) => {
                        var Oe = Sb(), Ve = i(Oe);
                        M(
                          (rt) => {
                            j(Oe, 1, rt), ie(Ve, t(S).badge);
                          },
                          [
                            () => ne(Z("rounded-full font-medium", t(B).badge, t(E).badge))
                          ]
                        ), o(je, Oe);
                      };
                      g(ze, (je) => {
                        t(S).badge && je(De);
                      });
                    }
                    var He = h(Fe, 2);
                    {
                      var Je = (je) => {
                        var Oe = zb();
                        Ge(Oe, 21, () => t(S).actions, (Ve) => Ve.action, (Ve, rt) => {
                          var gt = Ab();
                          gt.__click = [Tb, V, S, rt];
                          var _t = i(gt);
                          {
                            var xt = (yt) => {
                              var Dt = Mb(), Yt = i(Dt);
                              M(() => ie(Yt, t(rt).icon)), o(yt, Dt);
                            };
                            g(_t, (yt) => {
                              t(rt).icon && yt(xt);
                            });
                          }
                          var ut = h(_t);
                          M(
                            (yt) => {
                              j(gt, 1, yt), ie(ut, ` ${t(rt).label ?? ""}`);
                            },
                            [() => ne(G(t(rt).variant))]
                          ), o(Ve, gt);
                        }), o(je, Oe);
                      };
                      g(He, (je) => {
                        t(S).actions && t(S).actions.length > 0 && je(Je);
                      });
                    }
                    var We = h(qe, 2);
                    {
                      var at = (je) => {
                        var Oe = Ib(), Ve = i(Oe);
                        M(
                          (rt) => {
                            j(Oe, 1, rt), ie(Ve, t(S).subtitle);
                          },
                          [
                            () => ne(Z("text-sm mb-2", t(E).subtitle))
                          ]
                        ), o(je, Oe);
                      };
                      g(We, (je) => {
                        t(S).subtitle && je(at);
                      });
                    }
                    var lt = h(We, 2);
                    {
                      var et = (je) => {
                        var Oe = Pb(), Ve = i(Oe);
                        M(
                          (rt) => {
                            j(Oe, 1, rt), ie(Ve, t(S).description);
                          },
                          [
                            () => ne(Z("text-sm leading-relaxed mb-3", t(E).description))
                          ]
                        ), o(je, Oe);
                      };
                      g(lt, (je) => {
                        t(S).description && je(et);
                      });
                    }
                    var nt = h(lt, 2);
                    {
                      var Ue = (je) => {
                        var Oe = Db();
                        Ge(Oe, 21, () => Object.entries(t(S).metadata), ([Ve, rt]) => Ve, (Ve, rt) => {
                          var gt = /* @__PURE__ */ Ee(() => Kr(t(rt), 2));
                          let _t = () => t(gt)[0], xt = () => t(gt)[1];
                          var ut = Lb(), yt = i(ut);
                          M(
                            (Dt) => {
                              j(ut, 1, Dt), ie(yt, `${_t() ?? ""}: ${xt() ?? ""}`);
                            },
                            [
                              () => ne(Z("text-xs px-2 py-1 rounded-full", t(E).skeleton, t(E).metadata))
                            ]
                          ), o(Ve, ut);
                        }), o(je, Oe);
                      };
                      g(nt, (je) => {
                        t(S).metadata && je(Ue);
                      });
                    }
                    M(
                      (je) => {
                        j(Be, 1, `border rounded-lg p-4 ${t(E).item ?? ""}`), j(ke, 1, je), ie(he, t(S).title);
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
                o(me, fe);
              };
              g(ae, (me) => {
                d() === "simple" ? me(ce) : me(se, !1);
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
      o(v, b);
    };
    g(X, (v) => {
      N() ? v(K) : v(k, !1);
    });
  }
  M(() => j(T, 1, ne(t(Q)))), o(r, T), Xe();
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
  const a = s(e, "columns", 19, () => []), n = s(e, "data", 19, () => []), l = s(e, "variant", 3, "default"), d = s(e, "size", 3, "md"), u = s(e, "striped", 3, !1), p = s(e, "hover", 3, !0), A = s(e, "bordered", 3, !1), N = s(e, "loading", 3, !1), m = s(e, "sortBy", 3, ""), I = s(e, "sortOrder", 3, "asc"), R = s(e, "selectable", 3, !1), z = s(e, "selectedRows", 19, () => /* @__PURE__ */ new Set()), _ = s(e, "stickyHeader", 3, !1), f = s(e, "emptyMessage", 3, "No data available"), q = s(e, "class", 3, ""), ee = Tt();
  let w = /* @__PURE__ */ ye(st(m())), E = /* @__PURE__ */ ye(st(I())), B = /* @__PURE__ */ ye(st(z()));
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
  }, D = {
    sm: { cell: "px-3 py-2 text-sm", header: "px-3 py-2 text-xs" },
    md: { cell: "px-4 py-3 text-sm", header: "px-4 py-3 text-sm" },
    lg: { cell: "px-6 py-4 text-base", header: "px-6 py-4 text-base" }
  }, V = /* @__PURE__ */ Ee(() => F[l()]), O = /* @__PURE__ */ Ee(() => D[d()]), P = /* @__PURE__ */ Ee(() => () => !t(w) || !a().find((le) => le.key === t(w))?.sortable ? n() : [...n()].sort((le, H) => {
    const ae = le[t(w)], ce = H[t(w)];
    if (ae === ce) return 0;
    const se = t(E) === "asc";
    return ae < ce ? se ? -1 : 1 : se ? 1 : -1;
  }));
  function Q(Y) {
    Y.sortable && (t(w) === Y.key ? W(E, t(E) === "asc" ? "desc" : "asc", !0) : (W(w, Y.key, !0), W(E, "asc")), ee("sort", { column: Y.key, order: t(E) }));
  }
  function G(Y, le) {
    ee("rowClick", { row: Y, index: le });
  }
  function L(Y, le) {
    const H = Y.id ?? index;
    le ? t(B).add(H) : t(B).delete(H), W(B, new Set(t(B)), !0), ee("rowSelect", { row: Y, selected: le });
  }
  function T(Y) {
    Y ? W(B, new Set(n().map((le, H) => le.id ?? H)), !0) : W(B, /* @__PURE__ */ new Set(), !0), ee("selectAll", { selected: Y });
  }
  function y(Y, le, H) {
    return Y.render ? Y.render(le, H) : Y.formatter ? Y.formatter(le) : String(le ?? "");
  }
  const x = /* @__PURE__ */ Ee(() => n().length > 0 && n().every((Y, le) => t(B).has(Y.id ?? le))), C = /* @__PURE__ */ Ee(() => t(B).size > 0 && !t(x)), X = /* @__PURE__ */ Ee(() => Z("w-full font-mono rounded-lg overflow-hidden border", t(V).table, t(V).row, A() && "border-2", q())), K = /* @__PURE__ */ Ee(() => Z("overflow-auto", e.maxHeight && `max-h-[${e.maxHeight}]`, _() && "relative"));
  var k = Qb(), v = i(k), b = i(v), re = i(b), de = h(b), ue = i(de), ve = i(ue);
  {
    var $ = (Y) => {
      var le = Bb(), H = i(le);
      H.__change = [qb, T], M(
        (ae) => {
          j(le, 1, ae), Kt(H, t(x)), H.indeterminate = t(C);
        },
        [
          () => ne(Z(t(O).header, t(V).headerCell, "w-12"))
        ]
      ), o(Y, le);
    };
    g(ve, (Y) => {
      R() && Y($);
    });
  }
  var U = h(ve);
  Ge(U, 17, a, (Y) => Y.key, (Y, le) => {
    var H = Vb();
    H.__click = [Fb, le, Q];
    var ae = i(H), ce = i(ae), se = i(ce), me = h(ce, 2);
    {
      var fe = (be) => {
        var ge = Hb(), Ce = i(ge), Pe = h(Ce, 2);
        M(
          (Be, Re) => {
            j(Ce, 0, Be), j(Pe, 0, Re);
          },
          [
            () => ne(Z("w-3 h-3 transition-colors", t(w) === t(le).key && t(E) === "asc" ? "text-blue-400" : "text-gray-500")),
            () => ne(Z("w-3 h-3 -mt-1 transition-colors", t(w) === t(le).key && t(E) === "desc" ? "text-blue-400" : "text-gray-500"))
          ]
        ), o(be, ge);
      };
      g(me, (be) => {
        t(le).sortable && be(fe);
      });
    }
    Ie(H, (be, ge) => ft?.(be, ge), () => ({ enabled: t(le).sortable, strength: 0.05 })), M(
      (be) => {
        j(H, 1, be), pt(H, t(le).width ? `width: ${t(le).width}` : void 0), xe(H, "aria-sort", t(w) === t(le).key ? t(E) === "asc" ? "ascending" : "descending" : "none"), ie(se, t(le).label);
      },
      [
        () => ne(Z(t(O).header, t(V).headerCell, "font-semibold uppercase tracking-wider", `text-${t(le).align || "left"}`, t(le).sortable && "cursor-pointer select-none", A() && "border-r last:border-r-0"))
      ]
    ), o(Y, H);
  });
  var oe = h(de), S = i(oe);
  {
    var te = (Y) => {
      var le = Gb(), H = i(le);
      M(
        (ae) => {
          xe(H, "colspan", a().length + (R() ? 1 : 0)), j(H, 1, ae);
        },
        [
          () => ne(Z(t(O).cell, t(V).loading, "text-center"))
        ]
      ), o(Y, le);
    }, J = (Y) => {
      var le = Se(), H = _e(le);
      {
        var ae = (se) => {
          var me = Ub(), fe = i(me), be = i(fe), ge = h(i(be), 2), Ce = i(ge);
          M(
            (Pe) => {
              xe(fe, "colspan", a().length + (R() ? 1 : 0)), j(fe, 1, Pe), ie(Ce, f());
            },
            [
              () => ne(Z(t(O).cell, t(V).cell, "text-center text-gray-400"))
            ]
          ), o(se, me);
        }, ce = (se) => {
          var me = Se(), fe = _e(me);
          Ge(fe, 19, () => t(P), (be, ge) => be.id ?? ge, (be, ge, Ce) => {
            const Pe = /* @__PURE__ */ Ee(() => t(ge).id ?? t(Ce)), Be = /* @__PURE__ */ Ee(() => t(B).has(t(Pe)));
            var Re = Zb();
            Re.__click = () => G(t(ge), t(Ce));
            var we = i(Re);
            {
              var pe = (Ne) => {
                var Ae = Kb(), Le = i(Ae);
                Le.__change = [Yb, L, ge], Le.__click = [Wb], M(
                  (qe) => {
                    j(Ae, 1, qe), Kt(Le, t(Be));
                  },
                  [
                    () => ne(Z(t(O).cell, t(V).cell, A() && "border-r"))
                  ]
                ), o(Ne, Ae);
              };
              g(we, (Ne) => {
                R() && Ne(pe);
              });
            }
            var Te = h(we);
            Ge(Te, 17, a, (Ne) => Ne.key, (Ne, Ae) => {
              var Le = Xb(), qe = i(Le);
              Ia(qe, () => ja(y(t(Ae), t(ge)[t(Ae).key], t(ge)))), M((Fe) => j(Le, 1, Fe), [
                () => ne(Z(t(O).cell, t(V).cell, `text-${t(Ae).align || "left"}`, A() && "border-r last:border-r-0"))
              ]), o(Ne, Le);
            }), M((Ne) => j(Re, 1, Ne), [
              () => ne(Z(t(V).row, p() && t(V).rowHover, u() && t(Ce) % 2 === 1 && "bg-black/20", t(Be) && t(V).rowSelected, "transition-colors duration-150 cursor-pointer"))
            ]), $e(1, Re, () => ht, () => ({ direction: "up", duration: 100, delay: t(Ce) * 20 })), o(be, Re);
          }), o(se, me);
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
      N() ? Y(te) : Y(J, !1);
    });
  }
  M(
    (Y) => {
      j(k, 1, ne(t(K))), j(v, 1, ne(t(X))), ie(re, `Data table with ${n().length ?? ""} rows and ${a().length ?? ""} columns`), j(de, 1, Y);
    },
    [
      () => ne(Z(t(V).header, _() && "sticky top-0 z-10"))
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
  })), d = s(e, "autoPlay", 3, !1), u = s(e, "theme", 3, "hacker");
  s(e, "enableGlitch", 3, !0);
  const p = s(e, "enableMatrixRain", 3, !1), A = s(e, "enableScanlines", 3, !0), N = s(e, "enableFlicker", 3, !1);
  Tt();
  let m = /* @__PURE__ */ ye(void 0), I = /* @__PURE__ */ ye(void 0), R = /* @__PURE__ */ ye(""), z = /* @__PURE__ */ ye(st([])), _ = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(st(p()));
  const q = st(A()), ee = st(N()), w = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  let E = [], B;
  const F = (U) => {
    const oe = U.trim().toLowerCase();
    let S = "";
    if (oe === "clear") {
      W(z, [], !0), W(R, "");
      return;
    } else oe === "matrix" ? (W(f, !t(f)), t(f) ? V() : O(), S = l()[oe] || "MATRIX RAIN DEACTIVATED") : oe === "glitch" ? (D(), S = l()[oe] || "GLITCH EFFECT ACTIVATED") : S = l()[oe] || `zsh: command not found: ${U}

Try 'help' for available commands.`;
    W(
      z,
      [
        ...t(z),
        { command: oe, output: S, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), W(R, ""), setTimeout(
      () => {
        t(m) && t(m).scrollTo({ top: t(m).scrollHeight, behavior: "smooth" });
      },
      50
    );
  }, D = () => {
    W(_, !0), setTimeout(
      () => {
        W(_, !1);
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
        const le = w[Math.floor(Math.random() * w.length)];
        U.fillText(le, Y * oe, E[Y] * oe), E[Y] * oe > t(I).height && Math.random() > 0.975 && (E[Y] = 0), E[Y]++;
      }
    }, J = () => {
      te(), B = requestAnimationFrame(J);
    };
    J();
  }, O = () => {
    B && cancelAnimationFrame(B);
  }, P = () => {
    t(I) && t(m) && (t(I).width = t(m).offsetWidth, t(I).height = t(m).offsetHeight);
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
  Nt("resize", Co, P);
  var L = i(G);
  {
    var T = (U) => {
      var oe = eg();
      tt(oe, (S) => W(I, S), () => t(I)), o(U, oe);
    };
    g(L, (U) => {
      t(f) && U(T);
    });
  }
  var y = h(L, 2), x = i(y), C = h(i(x), 2), X = i(C);
  {
    var K = (U) => {
      var oe = tg(), S = i(oe);
      M(() => {
        xe(oe, "data-text", a()), ie(S, a());
      }), o(U, oe);
    }, k = (U) => {
      var oe = Ct();
      M(() => ie(oe, a())), o(U, oe);
    };
    g(X, (U) => {
      t(_) ? U(K) : U(k, !1);
    });
  }
  var v = h(y, 2), b = h(i(v), 2);
  Ge(b, 19, () => t(z), (U, oe) => U.timestamp?.getTime?.() ?? oe, (U, oe) => {
    var S = rg(), te = i(S), J = i(te);
    J.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
    var Y = h(J, 2), le = i(Y), H = h(Y, 2), ae = i(H), ce = h(te, 2), se = i(ce);
    M(
      (me) => {
        ie(le, t(oe).command), ie(ae, me), ie(se, t(oe).output);
      },
      [() => t(oe).timestamp.toLocaleTimeString()]
    ), o(U, S);
  });
  var re = h(b, 2), de = i(re);
  de.textContent = `┌─[HACKER@liquid-glass]─[~/]
└─$ `;
  var ue = h(de, 2);
  ue.__keydown = [$b, F, R];
  var ve = h(re, 2);
  {
    var $ = (U) => {
      var oe = ag(), S = i(oe);
      ot(S, () => e.children), o(U, oe);
    };
    g(ve, (U) => {
      e.children && U($);
    });
  }
  tt(v, (U) => W(m, U), () => t(m)), M((U) => j(G, 1, U, "svelte-1c5nvru"), [
    () => ne(Z("relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300", "border shadow-2xl shadow-black/25 transform-gpu will-change-transform", Q[u()], q && "terminal-scanlines", ee && "terminal-flicker", t(_) && "terminal-glitch", n()))
  ]), mr(ue, () => t(R), (U) => W(R, U)), o(r, G), Xe();
}
vt(["keydown"]);
const ig = (r) => r;
function lg(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Kn(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function ti(r, { delay: e = 0, duration: a = 400, easing: n = ig } = {}) {
  const l = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (d) => `opacity: ${d * l}`
  };
}
function ri(r, { delay: e = 0, duration: a = 400, easing: n = lg, x: l = 0, y: d = 0, opacity: u = 0 } = {}) {
  const p = getComputedStyle(r), A = +p.opacity, N = p.transform === "none" ? "" : p.transform, m = A * (1 - u), [I, R] = Kn(l), [z, _] = Kn(d);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (f, q) => `
			transform: ${N} translate(${(1 - f) * I}${R}, ${(1 - f) * z}${_});
			opacity: ${A - m * q}`
  };
}
var sg = /* @__PURE__ */ c('<div class="flex gap-1"><div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div> <div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div></div>'), dg = /* @__PURE__ */ c('<div><div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> <span class="text-sm font-mono">Analyzing patterns...</span></div>'), cg = (r, e, a) => e(t(a)), vg = (r, e, a) => {
  (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e(t(a)));
}, ug = /* @__PURE__ */ c("<span> </span>"), fg = /* @__PURE__ */ c('<div class="flex items-center gap-2"><span> </span> <div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div></div></div></div>'), bg = /* @__PURE__ */ c("<code> </code>"), gg = /* @__PURE__ */ c('<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 svelte-4oclra"><div>Examples:</div> <div class="flex flex-wrap gap-1"></div></div>'), hg = /* @__PURE__ */ c('<div role="button" tabindex="0"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><!> <span> </span></div> <!></div> <p> </p> <div> </div> <!></div>'), mg = /* @__PURE__ */ c('<div class="space-y-2"></div>'), pg = /* @__PURE__ */ c('<div><div class="text-2xl mb-2">🤔</div> <p class="text-sm"> </p> <p class="text-xs mt-1">Try a different search term</p></div>'), xg = /* @__PURE__ */ c('<div><div class="flex items-center justify-between"><span>Use ↑↓ to navigate, Enter to select</span> <span>AI-powered suggestions</span></div></div>'), _g = /* @__PURE__ */ c('<div><div><div class="flex items-center gap-2"><span class="text-sm font-bold">🤖 AI SUGGESTIONS</span> <!></div> <span> </span></div> <!> <!> <!> <!></div>');
const wg = {
  hash: "svelte-4oclra",
  code: `
	/* Smooth animations */.group.svelte-4oclra:hover .group-hover\\:opacity-100:where(.svelte-4oclra) {opacity:1;}`
};
function hp(r, e) {
  Ke(e, !0), Qe(r, wg);
  const [a, n] = Xo(), l = () => Ko(_, "$aiSuggestions", a), d = s(e, "query", 3, ""), u = s(e, "suggestions", 19, () => []), p = s(e, "maxSuggestions", 3, 6), A = s(e, "showConfidence", 3, !0), N = s(e, "showCategories", 3, !0), m = s(e, "theme", 3, "terminal"), I = s(e, "aiMode", 3, !0), R = s(e, "class", 3, ""), z = Tt(), _ = La([]);
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
  }[m()], B = {
    system: { icon: "⚙️", color: "text-blue-400" },
    development: { icon: "💻", color: "text-green-400" },
    network: { icon: "🌐", color: "text-purple-400" },
    file: { icon: "📁", color: "text-yellow-400" },
    process: { icon: "⚡", color: "text-orange-400" },
    ai: { icon: "🤖", color: "text-cyan-400" }
  }, F = async (y) => {
    W(q, !0), await new Promise((C) => setTimeout(C, 800 + Math.random() * 400));
    const x = ee.filter((C) => C.command.toLowerCase().includes(y.toLowerCase()) || C.description.toLowerCase().includes(y.toLowerCase()) || C.category.toLowerCase().includes(y.toLowerCase())).map((C) => ({
      ...C,
      confidence: Math.min(0.98, C.confidence + Math.random() * 0.1)
    })).sort((C, X) => X.confidence - C.confidence).slice(0, p());
    return W(q, !1), x;
  }, D = async (y) => {
    if (!y.trim()) {
      _.set([]);
      return;
    }
    if (I()) {
      const x = await F(y);
      _.set(x);
    } else {
      const x = u().slice(0, p());
      _.set(x);
    }
  }, V = (y) => {
    const x = l();
    switch (y.key) {
      case "ArrowDown":
        y.preventDefault(), W(f, Math.min(t(f) + 1, x.length - 1), !0);
        break;
      case "ArrowUp":
        y.preventDefault(), W(f, Math.max(t(f) - 1, -1), !0);
        break;
      case "Enter":
        y.preventDefault(), t(f) >= 0 && x[t(f)] && O(x[t(f)]);
        break;
      case "Escape":
        W(f, -1), _.set([]);
        break;
    }
  }, O = (y) => {
    z("select", { command: y, timestamp: /* @__PURE__ */ new Date() }), W(f, -1);
  }, P = (y) => y >= 0.9 ? "text-green-400" : y >= 0.7 ? "text-yellow-400" : y >= 0.5 ? "text-orange-400" : "text-red-400", Q = (y) => y >= 0.9 ? "HIGH" : y >= 0.7 ? "MED" : "LOW";
  bt(() => {
    D(d());
  }), wt(() => (window.addEventListener("keydown", V), () => {
    window.removeEventListener("keydown", V);
  }));
  var G = Se(), L = _e(G);
  {
    var T = (y) => {
      var x = _g(), C = i(x), X = i(C), K = h(i(X), 2);
      {
        var k = (te) => {
          var J = sg();
          o(te, J);
        };
        g(K, (te) => {
          t(q) && te(k);
        });
      }
      var v = h(X, 2), b = i(v), re = h(C, 2);
      {
        var de = (te) => {
          var J = dg();
          M((Y) => j(J, 1, Y, "svelte-4oclra"), [
            () => ne(Z("flex items-center gap-3 p-3 rounded-lg bg-black/20", E.muted))
          ]), o(te, J);
        };
        g(re, (te) => {
          t(q) && te(de);
        });
      }
      var ue = h(re, 2);
      {
        var ve = (te) => {
          var J = mg();
          Ge(J, 7, l, (Y) => Y.command, (Y, le, H) => {
            var ae = hg();
            ae.__click = [cg, O, le], ae.__keydown = [vg, O, le];
            var ce = i(ae), se = i(ce), me = i(se);
            {
              var fe = (Ae) => {
                var Le = ug(), qe = i(Le);
                M(() => {
                  j(Le, 1, ne(B[t(le).category].color), "svelte-4oclra"), ie(qe, B[t(le).category].icon);
                }), o(Ae, Le);
              };
              g(me, (Ae) => {
                N() && Ae(fe);
              });
            }
            var be = h(me, 2), ge = i(be), Ce = h(se, 2);
            {
              var Pe = (Ae) => {
                var Le = fg(), qe = i(Le), Fe = i(qe), ke = h(qe, 2), he = i(ke);
                M(
                  (ze, De, He) => {
                    j(qe, 1, ze, "svelte-4oclra"), ie(Fe, De), j(he, 1, He, "svelte-4oclra"), pt(he, `width: ${t(le).confidence * 100}%`);
                  },
                  [
                    () => ne(Z("text-xs font-bold", P(t(le).confidence))),
                    () => Q(t(le).confidence),
                    () => ne(Z("h-full rounded-full transition-all duration-300", P(t(le).confidence).replace("text-", "bg-")))
                  ]
                ), o(Ae, Le);
              };
              g(Ce, (Ae) => {
                A() && Ae(Pe);
              });
            }
            var Be = h(ce, 2), Re = i(Be), we = h(Be, 2), pe = i(we), Te = h(we, 2);
            {
              var Ne = (Ae) => {
                var Le = gg(), qe = i(Le), Fe = h(qe, 2);
                Ge(Fe, 20, () => t(le).examples, (ke) => ke, (ke, he) => {
                  var ze = bg(), De = i(ze);
                  M(
                    (He) => {
                      j(ze, 1, He, "svelte-4oclra"), ie(De, he);
                    },
                    [
                      () => ne(Z("text-xs px-2 py-1 rounded bg-black/40", E.muted))
                    ]
                  ), o(ke, ze);
                }), M((ke) => j(qe, 1, ke, "svelte-4oclra"), [
                  () => ne(Z("text-xs font-bold mb-1", E.text))
                ]), o(Ae, Le);
              };
              g(Te, (Ae) => {
                t(le).examples && t(le).examples.length > 0 && Ae(Ne);
              });
            }
            M(
              (Ae, Le, qe, Fe) => {
                j(ae, 1, Ae, "svelte-4oclra"), xe(ae, "aria-label", `Execute command: ${t(le).command}`), j(be, 1, Le, "svelte-4oclra"), ie(ge, t(le).command), j(Be, 1, qe, "svelte-4oclra"), ie(Re, t(le).description), j(we, 1, Fe, "svelte-4oclra"), ie(pe, t(le).usage);
              },
              [
                () => ne(Z("p-3 rounded-lg cursor-pointer transition-all duration-200", "hover:scale-[1.02] transform-gpu border border-transparent", t(H) === t(f) ? E.selected : "hover:bg-white/5", "group")),
                () => ne(Z("font-mono font-bold", E.text)),
                () => ne(Z("text-sm mb-2", E.muted)),
                () => ne(Z("text-xs font-mono p-2 rounded bg-black/30", E.accent))
              ]
            ), $e(3, ae, () => ti, () => ({ duration: 150, delay: t(H) * 50 })), o(Y, ae);
          }), o(te, J);
        };
        g(ue, (te) => {
          !t(q) && l().length > 0 && te(ve);
        });
      }
      var $ = h(ue, 2);
      {
        var U = (te) => {
          var J = pg(), Y = h(i(J), 2), le = i(Y);
          M(
            (H) => {
              j(J, 1, H, "svelte-4oclra"), ie(le, `No suggestions found for "${d() ?? ""}"`);
            },
            [() => ne(Z("text-center py-8", E.muted))]
          ), o(te, J);
        };
        g($, (te) => {
          !t(q) && d().trim() && l().length === 0 && te(U);
        });
      }
      var oe = h($, 2);
      {
        var S = (te) => {
          var J = xg();
          M((Y) => j(J, 1, Y, "svelte-4oclra"), [
            () => ne(Z("mt-3 pt-2 border-t border-current/20 text-xs", E.muted))
          ]), o(te, J);
        };
        g(oe, (te) => {
          !t(q) && l().length > 0 && te(S);
        });
      }
      M(
        (te, J, Y) => {
          j(x, 1, te, "svelte-4oclra"), j(C, 1, J, "svelte-4oclra"), j(v, 1, Y, "svelte-4oclra"), ie(b, `${l().length ?? ""} matches`);
        },
        [
          () => ne(Z("relative mt-2 p-4 rounded-lg border backdrop-blur-md", "shadow-2xl transform-gpu", E.bg, R())),
          () => ne(Z("flex items-center justify-between mb-3 pb-2 border-b border-current/20", E.text)),
          () => ne(Z("text-xs", E.muted))
        ]
      ), $e(3, x, () => ri, () => ({ y: 10, duration: 200 })), o(y, x);
    };
    g(L, (y) => {
      d().trim() && (l().length > 0 || t(q)) && y(T);
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
  const u = s(e, "colors", 19, () => ["#ff0000", "#00ffff", "#ff00ff"]);
  let p, A = /* @__PURE__ */ ye(!1), N;
  const I = {
    low: { duration: 200, frequency: 3e3, distortion: 2, layers: 2 },
    medium: { duration: 400, frequency: 2e3, distortion: 4, layers: 3 },
    high: { duration: 600, frequency: 1e3, distortion: 8, layers: 4 },
    extreme: { duration: 1e3, frequency: 500, distortion: 16, layers: 6 }
  }()[n()], R = () => {
    t(A) || (W(A, !0), p && (p.style.animation = `
				glitch-skew ${I.duration}ms ease-in-out,
				glitch-color ${I.duration}ms linear
			`), setTimeout(
      () => {
        W(A, !1), p && (p.style.animation = "");
      },
      I.duration
    ));
  }, z = () => {
    l() && (N = setInterval(
      () => {
        Math.random() < 0.3 && R();
      },
      I.frequency
    ));
  }, _ = () => {
    N && clearInterval(N);
  };
  bt(() => {
    d() && R();
  }), wt(() => (l() && z(), () => {
    _();
  }));
  const f = "!@#$%^&*()_+-=[]{}|;:,.<>?~`", q = (F, D) => F.split("").map((V) => Math.random() < D / 100 ? f[Math.floor(Math.random() * f().length)] : V).join("");
  var ee = yg(), w = i(ee);
  {
    var E = (F) => {
      var D = Ct();
      M((V) => ie(D, V), [() => q(e.text, 20)]), o(F, D);
    }, B = (F) => {
      var D = Ct();
      M(() => ie(D, e.text)), o(F, D);
    };
    g(w, (F) => {
      t(A) && n() === "extreme" ? F(E) : F(B, !1);
    });
  }
  tt(ee, (F) => p = F, () => p), M(
    (F, D, V, O) => {
      j(ee, 1, F, "svelte-ithyll"), xe(ee, "data-text", e.text), pt(ee, `
		--glitch-color-1: ${D ?? ""};
		--glitch-color-2: ${V ?? ""};
		--glitch-color-3: ${O ?? ""};
		--glitch-distortion: ${I.distortion ?? ""}px;
	`);
    },
    [
      () => ne(Z("relative inline-block font-mono", t(A) && "glitching", a())),
      () => u()()[0] || "#ff0000",
      () => u()()[1] || "#00ffff",
      () => u()()[2] || "#ff00ff"
    ]
  ), o(r, ee), Xe();
}
var Eg = /* @__PURE__ */ c('<div class="w-2 h-2 rounded-full bg-current animate-ping svelte-11w1x2x"></div>'), Sg = /* @__PURE__ */ c("<span> </span>"), Tg = /* @__PURE__ */ c("<span> </span>"), Mg = /* @__PURE__ */ c("<span> </span>"), Ag = (r, e) => {
  r.stopPropagation(), e();
}, zg = /* @__PURE__ */ c('<button title="Copy command">📋</button>'), Ig = /* @__PURE__ */ c("<div> </div>"), Pg = /* @__PURE__ */ c("<div> </div>"), Lg = /* @__PURE__ */ c('<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse svelte-11w1x2x"></div>'), Dg = /* @__PURE__ */ c('<div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse svelte-11w1x2x"></div>'), Rg = /* @__PURE__ */ c('<div><div class="absolute top-2 right-2 flex items-center gap-2 svelte-11w1x2x"><div><!></div> <!></div> <div class="flex items-start gap-2 mb-2 font-mono svelte-11w1x2x"><!> <div class="flex-1 svelte-11w1x2x"><!></div> <!></div> <!> <!> <!> <!></div>');
const jg = {
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
function mp(r, e) {
  Ke(e, !0), Qe(r, jg);
  let a = s(e, "output", 3, ""), n = s(e, "status", 7, "idle"), l = s(e, "showPrompt", 3, !0), d = s(e, "showTimestamp", 3, !0), u = s(e, "interactive", 3, !1), p = s(e, "theme", 3, "terminal"), A = s(e, "enableGlitch", 3, !1), N = s(e, "enableSound", 3, !1), m = s(e, "class", 3, "");
  const I = Tt();
  let R, z = /* @__PURE__ */ ye(!1), _ = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(0), q = 0;
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
  }[n()], D = {
    terminal: "$ ",
    cyberpunk: ">>> ",
    matrix: "> ",
    neural: "◈ "
  }[p()], V = (fe) => {
    if (!N()) return;
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
    !u() || n() === "running" || (q = performance.now(), n("running"), W(f, 0), A() && (W(_, !0), setTimeout(
      () => {
        W(_, !1);
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
    u() && (R.style.cursor = "pointer");
  });
  var G = Rg(), L = () => W(z, !0), T = () => W(z, !1), y = (fe) => {
    u() && (fe.key === "Enter" || fe.key === " ") && (fe.preventDefault(), O());
  };
  Ze(
    G,
    (fe) => ({
      class: fe,
      ...u() ? {
        role: "button",
        tabindex: 0,
        "aria-label": `Execute command: ${e.command}`
      } : { role: "article" },
      onmouseenter: L,
      onmouseleave: T,
      onclick: O,
      onkeydown: y
    }),
    [
      () => Z("relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300", "hover:scale-[1.02] hover:shadow-lg transform-gpu", w.bg, w.glow, B.borderColor, u() && "cursor-pointer hover:brightness-110", m())
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
      M(() => ie(be, B.icon)), o(fe, be);
    };
    g(X, (fe) => {
      n() === "running" ? fe(K) : fe(k, !1);
    });
  }
  var v = h(C, 2);
  {
    var b = (fe) => {
      var be = Sg(), ge = i(be);
      M(
        (Ce, Pe) => {
          j(be, 1, Ce, "svelte-11w1x2x"), ie(ge, Pe);
        },
        [
          () => ne(Z("text-xs font-mono", w.accent)),
          () => Q(t(f))
        ]
      ), o(fe, be);
    };
    g(v, (fe) => {
      n() === "running" && t(f) > 0 && fe(b);
    });
  }
  var re = h(x, 2), de = i(re);
  {
    var ue = (fe) => {
      var be = Tg(), ge = i(be);
      M(
        (Ce) => {
          j(be, 1, Ce, "svelte-11w1x2x"), ie(ge, D);
        },
        [
          () => ne(Z("select-none font-bold", w.prompt))
        ]
      ), o(fe, be);
    };
    g(de, (fe) => {
      l() && fe(ue);
    });
  }
  var ve = h(de, 2), $ = i(ve);
  {
    var U = (fe) => {
      {
        let be = /* @__PURE__ */ Ee(() => Z("font-mono", w.command));
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
      M(
        (Ce) => {
          j(be, 1, Ce, "svelte-11w1x2x"), ie(ge, e.command);
        },
        [() => ne(Z("font-mono", w.command))]
      ), o(fe, be);
    };
    g($, (fe) => {
      A() && t(_) ? fe(U) : fe(oe, !1);
    });
  }
  var S = h(ve, 2);
  {
    var te = (fe) => {
      var be = zg();
      be.__click = [Ag, P], M((ge) => j(be, 1, ge, "svelte-11w1x2x"), [
        () => ne(Z("opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity", w.accent, "hover:bg-white/10"))
      ]), o(fe, be);
    };
    g(S, (fe) => {
      u() && fe(te);
    });
  }
  var J = h(re, 2);
  {
    var Y = (fe) => {
      var be = Ig(), ge = i(be);
      M(
        (Ce) => {
          j(be, 1, Ce, "svelte-11w1x2x"), ie(ge, a());
        },
        [
          () => ne(Z("mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap", w.output, B.borderColor))
        ]
      ), o(fe, be);
    };
    g(J, (fe) => {
      a() && fe(Y);
    });
  }
  var le = h(J, 2);
  {
    var H = (fe) => {
      var be = Pg(), ge = i(be);
      M(
        (Ce, Pe) => {
          j(be, 1, Ce, "svelte-11w1x2x"), ie(ge, Pe);
        },
        [
          () => ne(Z("mt-2 text-xs font-mono opacity-60", w.accent)),
          () => (/* @__PURE__ */ new Date()).toLocaleTimeString()
        ]
      ), o(fe, be);
    };
    g(le, (fe) => {
      d() && fe(H);
    });
  }
  var ae = h(le, 2);
  {
    var ce = (fe) => {
      var be = Lg();
      o(fe, be);
    };
    g(ae, (fe) => {
      u() && t(z) && fe(ce);
    });
  }
  var se = h(ae, 2);
  {
    var me = (fe) => {
      var be = Dg();
      M((ge) => pt(be, `width: ${ge ?? ""}%`), [() => Math.min(t(f) / 5e3 * 100, 100)]), o(fe, be);
    };
    g(se, (fe) => {
      n() === "running" && fe(me);
    });
  }
  tt(G, (fe) => R = fe, () => R), M((fe) => j(C, 1, fe, "svelte-11w1x2x"), [
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
  let u = /* @__PURE__ */ ye(null), p = /* @__PURE__ */ ye(!0), A = /* @__PURE__ */ ye(null);
  wt(async () => {
    try {
      const z = await import("./TerminalWindow-DTj9yjCq.js");
      W(u, z.default, !0), W(p, !1);
    } catch (z) {
      W(A, `Failed to load TerminalWindow: ${z}`), W(p, !1);
    }
  });
  var N = Se(), m = _e(N);
  {
    var I = (z) => {
      var _ = Ng(), f = i(_), q = h(i(f), 2), ee = i(q);
      M(() => {
        j(_, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), ie(ee, a());
      }), o(z, _);
    }, R = (z) => {
      var _ = Se(), f = _e(_);
      {
        var q = (w) => {
          var E = Og(), B = i(E), F = i(B), D = i(F);
          M(() => {
            j(E, 1, `terminal glass-heavy max-w-4xl mx-auto ${n()}`, "svelte-n7o7tf"), ie(D, t(A));
          }), o(w, E);
        }, ee = (w) => {
          var E = Se(), B = _e(E);
          {
            var F = (D) => {
              var V = Se(), O = _e(V);
              Et(O, () => t(u), (P, Q) => {
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
              }), o(D, V);
            };
            g(
              B,
              (D) => {
                t(u) && D(F);
              },
              !0
            );
          }
          o(w, E);
        };
        g(
          f,
          (w) => {
            t(A) ? w(q) : w(ee, !1);
          },
          !0
        );
      }
      o(z, _);
    };
    g(m, (z) => {
      t(p) ? z(I) : z(R, !1);
    });
  }
  o(r, N), Xe();
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
  })), d = s(e, "autoPlay", 3, !1), u = s(e, "theme", 3, "liquid"), p = s(e, "enableLiquidFlow", 3, !0), A = s(e, "enableParticles", 3, !0), N = s(e, "enableWaveform", 3, !0), m = s(e, "enableHologram", 3, !1);
  Tt();
  let I = /* @__PURE__ */ ye(void 0), R = /* @__PURE__ */ ye(void 0), z = /* @__PURE__ */ ye(void 0), _ = /* @__PURE__ */ ye(void 0), f = /* @__PURE__ */ ye(""), q = /* @__PURE__ */ ye(st([])), ee = /* @__PURE__ */ ye(st(p())), w = /* @__PURE__ */ ye(st(A()));
  st(N());
  let E = /* @__PURE__ */ ye(st(m())), B = /* @__PURE__ */ ye(!1), F, D;
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
  let L = [];
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
            W(ee, !t(ee)), t(ee) && y(), Te = t(ee) ? "LIQUID FLOW DYNAMICS: ACTIVATED" : "LIQUID FLOW: DEACTIVATED";
            break;
          case "neural":
            x(), Te = l()[pe];
            break;
          case "particles":
            W(w, !t(w)), Te = l()[pe];
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
  }, y = () => {
    if (!t(R)) return;
    const we = t(R).getContext("2d"), pe = t(R).width, Te = t(R).height;
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
    L = [];
    for (let Ne = 0; Ne < 20; Ne++)
      L.push(new G(Math.random() * (we - 100) + 50, Math.random() * (pe - 100) + 50));
    L.forEach((Ne, Ae) => {
      const Le = Math.floor(Math.random() * 3) + 1;
      for (let qe = 0; qe < Le; qe++) {
        const Fe = Math.floor(Math.random() * L.length);
        Fe !== Ae && !Ne.connections.includes(Fe) && Ne.connections.push(Fe);
      }
    });
    const Te = () => {
      const Ne = t(z).getContext("2d");
      Ne.fillStyle = "rgba(0, 0, 0, 0.1)", Ne.fillRect(0, 0, we, pe), Ne.strokeStyle = "rgba(0, 255, 200, 0.4)", Ne.lineWidth = 2, L.forEach((Ae, Le) => {
        Ae.connections.forEach((qe) => {
          const Fe = L[qe];
          Fe && (Ne.globalAlpha = (Ae.activation + Fe.activation) / 2, Ne.beginPath(), Ne.moveTo(Ae.x, Ae.y), Ne.lineTo(Fe.x, Fe.y), Ne.stroke());
        });
      }), L.forEach((Ae) => {
        Ae.update(), Ae.draw(Ne);
      }), Ne.globalAlpha = 1, D = requestAnimationFrame(Te);
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
      t(R) && (t(R).width = we, t(R).height = pe), t(z) && (t(z).width = we, t(z).height = pe), t(_) && (t(_).width = we, t(_).height = pe);
    }
  };
  wt(() => (K(), t(ee) && y(), d() && (setTimeout(() => T("neural"), 1e3), setTimeout(() => T("liquid"), 2500)), () => {
    F && cancelAnimationFrame(F), D && cancelAnimationFrame(D);
  }));
  const v = {
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
  }[u()];
  var b = Ug();
  Nt(
    "resize",
    Co,
    /* eslint-enable no-irregular-whitespace */
    K
  ), b.__mousemove = X;
  var re = i(b);
  {
    var de = (we) => {
      var pe = Fg();
      tt(pe, (Te) => W(R, Te), () => t(R)), o(we, pe);
    };
    g(re, (we) => {
      t(ee) && we(de);
    });
  }
  var ue = h(re, 2);
  tt(ue, (we) => W(z, we), () => t(z));
  var ve = h(ue, 2);
  tt(ve, (we) => W(_, we), () => t(_));
  var $ = h(ve, 6), U = i($), oe = h(i(U), 2), S = i(oe), te = h(U, 2), J = i(te), Y = h(J, 2), le = i(Y), H = h($, 2), ae = i(H), ce = i(ae), se = h(ae, 2);
  Ge(se, 17, () => t(q), (we) => we.timestamp, (we, pe) => {
    var Te = Hg(), Ne = i(Te), Ae = i(Ne);
    Ae.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
    var Le = h(Ae, 2), qe = i(Le), Fe = h(Le, 2), ke = i(Fe), he = h(Ne, 2), ze = i(he);
    M(
      (De, He, Je, We) => {
        j(Ae, 1, De, "svelte-169kcnm"), ie(qe, t(pe).command), j(Fe, 1, He, "svelte-169kcnm"), ie(ke, Je), j(he, 1, We, "svelte-169kcnm"), ie(ze, t(pe).output);
      },
      [
        () => ne(Z("whitespace-pre font-bold", v.text)),
        () => ne(Z("text-xs ml-auto opacity-60", v.text)),
        () => t(pe).timestamp.toLocaleTimeString(),
        () => ne(Z("p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm", "whitespace-pre-wrap font-mono shadow-inner", v.text))
      ]
    ), o(we, Te);
  });
  var me = h(se, 2);
  {
    var fe = (we) => {
      var pe = Vg(), Te = i(pe), Ne = i(Te), Ae = h(Ne, 2), Le = h(Ae, 2), qe = h(Te, 2);
      M(
        (Fe, ke, he, ze) => {
          j(Ne, 1, Fe, "svelte-169kcnm"), j(Ae, 1, ke, "svelte-169kcnm"), j(Le, 1, he, "svelte-169kcnm"), j(qe, 1, ze, "svelte-169kcnm");
        },
        [
          () => ne(Z("w-2 h-2 rounded-full animate-bounce", `bg-${v.text.split("-")[1]}-400`)),
          () => ne(Z("w-2 h-2 rounded-full animate-bounce", `bg-${v.text.split("-")[1]}-400`)),
          () => ne(Z("w-2 h-2 rounded-full animate-bounce", `bg-${v.text.split("-")[1]}-400`)),
          () => ne(Z("text-sm opacity-70", v.text))
        ]
      ), o(we, pe);
    };
    g(me, (we) => {
      t(B) && we(fe);
    });
  }
  var be = h(me, 2), ge = i(be);
  ge.textContent = "◉ NEURAL@liquid-interface ◈ ~/quantum $ ";
  var Ce = h(ge, 2);
  Ce.__keydown = [Bg, B, T, f];
  var Pe = h(Ce, 2), Be = h(be, 2);
  {
    var Re = (we) => {
      var pe = Gg(), Te = i(pe);
      ot(Te, () => e.children), o(we, pe);
    };
    g(Be, (we) => {
      e.children && we(Re);
    });
  }
  tt(H, (we) => W(I, we), () => t(I)), M(
    (we, pe, Te, Ne, Ae, Le, qe, Fe, ke, he) => {
      j(b, 1, we, "svelte-169kcnm"), j($, 1, pe, "svelte-169kcnm"), j(oe, 1, Te, "svelte-169kcnm"), ie(S, a()), j(J, 1, Ne, "svelte-169kcnm"), j(Y, 1, Ae, "svelte-169kcnm"), ie(le, `LIQUID: ${t(ee) ? "FLOW" : "STATIC"}`), j(ae, 1, Le, "svelte-169kcnm"), j(ce, 1, qe, "svelte-169kcnm"), j(ge, 1, Fe, "svelte-169kcnm"), Ce.disabled = t(B), j(Ce, 1, ke, "svelte-169kcnm"), xe(Ce, "placeholder", t(B) ? "Processing..." : "Enter liquid command..."), j(Pe, 1, he, "svelte-169kcnm");
    },
    [
      () => ne(Z("relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500", "border-2 shadow-2xl transform-gpu will-change-transform", `bg-gradient-to-br ${v.bg}`, v.border, v.glow, t(E) && "hologram-effect", n())),
      () => ne(Z("relative z-10 flex items-center justify-between p-6 border-b-2", "bg-black/30 backdrop-blur-sm", v.border)),
      () => ne(Z("text-lg font-mono font-bold tracking-wider", v.text, "drop-shadow-lg animate-pulse")),
      () => ne(Z("px-3 py-1 rounded-full bg-black/40 border", v.border, v.text)),
      () => ne(Z("px-3 py-1 rounded-full bg-black/40 border", v.border, v.text)),
      () => ne(Z("mb-6 p-4 rounded-lg bg-black/20 border", v.border)),
      () => ne(Z("whitespace-pre-wrap", v.text)),
      () => ne(Z("whitespace-pre font-bold", v.text)),
      () => ne(Z("flex-1 bg-transparent border-none outline-none font-mono text-white", "placeholder:text-white/40", t(B) && "opacity-50 cursor-not-allowed")),
      () => ne(Z("w-3 h-6 animate-pulse", `bg-${v.text.split("-")[1]}-400`))
    ]
  ), mr(Ce, () => t(f), (we) => W(f, we)), o(r, b), Xe();
}
vt(["mousemove", "keydown"]);
const Wg = (r, e, a) => {
  r.key === "Enter" && e(t(a));
};
var Kg = /* @__PURE__ */ c("<!> <!>", 1), Xg = /* @__PURE__ */ c("<!> <!>", 1), Zg = /* @__PURE__ */ c('<div class="mb-2"><div class="flex items-center gap-2 mb-1"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <span class="text-white text-sm"> </span> <span class="text-xs text-white/40 ml-auto"> </span></div> <div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm svelte-14245lp"> </div></div>'), Qg = /* @__PURE__ */ c('<div class="floating-terminal svelte-14245lp"><div class="terminal-header svelte-14245lp"><div class="terminal-controls svelte-14245lp"><span class="terminal-control close svelte-14245lp"></span> <span class="terminal-control minimize svelte-14245lp"></span> <span class="terminal-control maximize svelte-14245lp"></span></div> <div class="terminal-title svelte-14245lp">3D Floating Terminal</div> <div class="terminal-status svelte-14245lp"><span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span></div></div> <div class="terminal-body svelte-14245lp"><!> <div class="flex items-center gap-2"><span class="terminal-prompt text-terminal-green svelte-14245lp"></span> <input class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm" placeholder="Enter command..." autocomplete="off" spellcheck="false"/> <span class="w-1 h-4 bg-terminal-green animate-pulse"></span></div></div></div>'), Jg = /* @__PURE__ */ c("<!> <!> <!>", 1), $g = /* @__PURE__ */ c("<!> <!>", 1), eh = /* @__PURE__ */ c("<!> <!>", 1), th = /* @__PURE__ */ c("<!> <!> <!> <!> <!> <!>", 1);
const rh = {
  hash: "svelte-14245lp",
  code: ".floating-terminal.svelte-14245lp {width:700px;height:450px;background:rgba(0, 0, 0, 0.95);border:1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:8px;font-family:'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;overflow:hidden;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.terminal-header.svelte-14245lp {display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);border-bottom:1px solid color-mix(in srgb, var(--color-terminal-green) 20%, transparent);}.terminal-controls.svelte-14245lp {display:flex;gap:6px;}.terminal-control.svelte-14245lp {width:12px;height:12px;border-radius:50%;}.terminal-control.close.svelte-14245lp {background:var(--color-bubble-tea-red, #ff8585);}.terminal-control.minimize.svelte-14245lp {background:var(--color-bubble-tea-yellow, #ffd23a);}.terminal-control.maximize.svelte-14245lp {background:var(--color-bubble-tea-green, #6bcf7f);}.terminal-title.svelte-14245lp {color:white;font-size:14px;font-weight:600;}.terminal-status.svelte-14245lp {display:flex;align-items:center;gap:8px;}.terminal-body.svelte-14245lp {padding:12px;height:calc(100% - 50px);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(0, 212, 170, 0.3) transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar {width:4px;}.terminal-body.svelte-14245lp::-webkit-scrollbar-track {background:transparent;}.terminal-body.svelte-14245lp::-webkit-scrollbar-thumb {background:color-mix(in srgb, var(--color-terminal-green) 30%, transparent);border-radius:2px;}.terminal-prompt.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-green.svelte-14245lp {color:var(--color-terminal-green);}.text-terminal-blue.svelte-14245lp {color:var(--color-terminal-cyan);}"
};
function _p(r, e) {
  Ke(e, !0), Qe(r, rh);
  const a = s(e, "position", 19, () => [0, 2, 0]), n = s(e, "rotation", 19, () => [0, 0, 0]), l = s(e, "scale", 3, 1.5);
  let d, u = /* @__PURE__ */ ye(""), p = /* @__PURE__ */ ye(st([]));
  const A = {
    help: "🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear",
    matrix: "💚 Entering the Matrix... Reality.exe has stopped working",
    glitch: "⚡ System.error.404.reality.not.found",
    orbit: "🌍 Orbiting through cyberspace at lightspeed",
    stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1e3 + Math.random() * 5e3)} | Faces: ${Math.round(500 + Math.random() * 2e3)}`,
    whoami: "🤖 You are now part of the 3D matrix",
    ls: "📁 reality.exe  consciousness.dll  quantum_states/  void.txt",
    clear: "Terminal cleared"
  }, N = (ee) => {
    const w = ee.trim().toLowerCase();
    if (w === "clear") {
      W(p, [], !0), W(u, "");
      return;
    }
    const E = A[w] || `Command "${ee}" not found. Type "help" for available commands.`;
    W(
      p,
      [
        ...t(p),
        { command: w, output: E, timestamp: /* @__PURE__ */ new Date() }
      ],
      !0
    ), W(u, ""), setTimeout(
      () => {
        d && (d.scrollTop = d.scrollHeight);
      },
      10
    );
  };
  wt(() => {
    if (setTimeout(() => N("help"), 1e3), typeof window < "u") {
      const ee = document.querySelector("canvas");
      ee && (ee.style.willChange = "transform");
    }
  });
  var m = th(), I = _e(m);
  Et(I, () => zt.PerspectiveCamera, (ee, w) => {
    w(ee, {
      makeDefault: !0,
      position: [8, 8, 12],
      fov: 40,
      children: (E, B) => {
        mi(E, {
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
  var R = h(I, 2);
  Et(R, () => zt.AmbientLight, (ee, w) => {
    w(ee, { intensity: 0.6 });
  });
  var z = h(R, 2);
  Et(z, () => zt.DirectionalLight, (ee, w) => {
    w(ee, { position: [10, 10, 5], intensity: 1.2, castShadow: !0 });
  });
  var _ = h(z, 2);
  Et(_, () => zt.Group, (ee, w) => {
    w(ee, {
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
        var F = Jg(), D = _e(F);
        Et(D, () => zt.Mesh, (P, Q) => {
          Q(P, {
            children: (G, L) => {
              var T = Kg(), y = _e(T);
              Et(y, () => zt.BoxGeometry, (C, X) => {
                X(C, { args: [6, 4, 0.2] });
              });
              var x = h(y, 2);
              Et(x, () => zt.MeshPhysicalMaterial, (C, X) => {
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
        var V = h(D, 2);
        Et(V, () => zt.Mesh, (P, Q) => {
          Q(P, {
            position: [0, 0, 0.1],
            children: (G, L) => {
              var T = Xg(), y = _e(T);
              Et(y, () => zt.PlaneGeometry, (C, X) => {
                X(C, { args: [5.5, 3.5] });
              });
              var x = h(y, 2);
              Et(x, () => zt.MeshBasicMaterial, (C, X) => {
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
        var O = h(V, 2);
        pi(O, {
          position: [0, 0, 0.11],
          transform: !0,
          occlude: !0,
          scale: 0.08,
          distanceFactor: 10,
          children: (P, Q) => {
            var G = Qg(), L = h(i(G), 2), T = i(L);
            Ge(T, 17, () => t(p), (X) => X.timestamp, (X, K) => {
              var k = Zg(), v = i(k), b = i(v);
              b.textContent = "$";
              var re = h(b, 2), de = i(re), ue = h(re, 2), ve = i(ue), $ = h(v, 2), U = i($);
              M(
                (oe) => {
                  ie(de, t(K).command), ie(ve, oe), ie(U, t(K).output);
                },
                [() => t(K).timestamp.toLocaleTimeString()]
              ), o(X, k);
            });
            var y = h(T, 2), x = i(y);
            x.textContent = "$";
            var C = h(x, 2);
            C.__keydown = [Wg, N, u], tt(G, (X) => d = X, () => d), mr(C, () => t(u), (X) => W(u, X)), o(P, G);
          },
          $$slots: { default: !0 }
        }), o(E, F);
      },
      $$slots: { default: !0 }
    });
  });
  var f = h(_, 2);
  Et(f, () => zt.Mesh, (ee, w) => {
    w(ee, {
      position: [4, 3, -2],
      rotation: [0.2, 0.4, 0.1],
      children: (E, B) => {
        var F = $g(), D = _e(F);
        Et(D, () => zt.BoxGeometry, (O, P) => {
          P(O, { args: [1.5, 1.5, 1.5] });
        });
        var V = h(D, 2);
        Et(V, () => zt.MeshPhysicalMaterial, (O, P) => {
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
  var q = h(f, 2);
  Et(q, () => zt.Mesh, (ee, w) => {
    w(ee, {
      position: [-4, -2, 3],
      rotation: [-0.3, -0.2, 0.4],
      children: (E, B) => {
        var F = eh(), D = _e(F);
        Et(D, () => zt.BoxGeometry, (O, P) => {
          P(O, { args: [2, 2, 2] });
        });
        var V = h(D, 2);
        Et(V, () => zt.MeshPhysicalMaterial, (O, P) => {
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
  }), o(r, m), Xe();
}
vt(["keydown"]);
var ah = /* @__PURE__ */ c("<div> </div>"), nh = /* @__PURE__ */ c("<span></span>"), oh = /* @__PURE__ */ c("<div> <!></div>"), ih = /* @__PURE__ */ c('<div class="mt-4 svelte-7a6umo"><span class="text-white svelte-7a6umo">$</span> <span></span></div>'), lh = /* @__PURE__ */ c('<div><div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse svelte-7a6umo"></div></div> <div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg svelte-7a6umo"></div> <div class="relative z-10 space-y-1 svelte-7a6umo"><!> <!> <!></div> <div class="absolute inset-0 pointer-events-none svelte-7a6umo"><div class="w-full h-full bg-current opacity-[0.02] blur-xl svelte-7a6umo"></div></div></div>');
const sh = {
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
  Ke(e, !0), Qe(r, sh);
  const a = s(e, "messages", 19, () => []), n = s(e, "autoStart", 3, !0), l = s(e, "variant", 3, "classic"), d = s(e, "speed", 3, "normal"), u = s(e, "showCursor", 3, !0), p = s(e, "class", 3, ""), A = /* @__PURE__ */ dt(e, [
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
  let N = /* @__PURE__ */ ye(0), m = /* @__PURE__ */ ye(""), I = /* @__PURE__ */ ye(!1), R = /* @__PURE__ */ ye(!1), z = /* @__PURE__ */ ye(!0);
  const _ = [
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
  ], f = a().length > 0 ? a() : _, q = {
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
  let F, D = /* @__PURE__ */ ye(st([]));
  function V(k) {
    return k ? ee[k] : B.text;
  }
  const O = async (k, v = 50) => {
    W(m, "");
    for (let b = 0; b <= k.length; b++)
      W(m, k.slice(0, b), !0), await new Promise((re) => setTimeout(re, v));
    await new Promise((b) => setTimeout(b, 100));
  }, P = async () => {
    if (!t(I)) {
      W(I, !0), W(R, !1), W(N, 0), W(D, [], !0), W(m, "");
      for (let k = 0; k < f.length; k++) {
        const v = f[k];
        W(N, k, !0), v.text ? (await O(v.text, E), W(
          D,
          [
            ...t(D),
            { text: v.text, type: v.type }
          ],
          !0
        )) : W(D, [...t(D), { text: "", type: "info" }], !0), W(m, ""), F && (F.scrollTop = F.scrollHeight), await new Promise((b) => setTimeout(b, v.delay));
      }
      W(R, !0), W(I, !1), e.onComplete?.();
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
  var L = lh();
  Ze(
    L,
    (k) => ({ class: k, ...A }),
    [
      () => Z("relative w-full h-full p-6 overflow-auto", B.bg, B.text, B.font, "leading-relaxed text-sm", p())
    ],
    void 0,
    "svelte-7a6umo"
  );
  var T = h(i(L), 4), y = i(T);
  Ge(y, 17, () => t(D), Vr, (k, v) => {
    var b = ah(), re = i(b);
    M(
      (de) => {
        j(b, 1, de, "svelte-7a6umo"), ie(re, t(v).text || " ");
      },
      [
        () => ne(Z("whitespace-pre-wrap", V(t(v).type), "animate-in fade-in duration-200"))
      ]
    ), o(k, b);
  });
  var x = h(y, 2);
  {
    var C = (k) => {
      var v = oh(), b = i(v), re = h(b);
      {
        var de = (ue) => {
          var ve = nh();
          M(($) => j(ve, 1, $, "svelte-7a6umo"), [
            () => ne(Z("inline-block w-2 h-4 ml-1 border-r-2 animate-pulse", B.cursor))
          ]), o(ue, ve);
        };
        g(re, (ue) => {
          t(z) && u() && ue(de);
        });
      }
      M(
        (ue) => {
          j(v, 1, ue, "svelte-7a6umo"), ie(b, `${t(m) ?? ""} `);
        },
        [
          () => ne(Z("whitespace-pre-wrap", V(f[t(N)]?.type)))
        ]
      ), o(k, v);
    };
    g(x, (k) => {
      t(I) && t(m) && k(C);
    });
  }
  var X = h(x, 2);
  {
    var K = (k) => {
      var v = ih(), b = h(i(v), 2);
      M((re) => j(b, 1, re, "svelte-7a6umo"), [
        () => ne(Z("inline-block w-2 h-4 ml-1 border-r-2", t(z) ? "opacity-100" : "opacity-0", B.cursor, "transition-opacity duration-100"))
      ]), o(k, v);
    };
    g(X, (k) => {
      t(R) && u() && k(K);
    });
  }
  return tt(L, (k) => F = k, () => F), o(r, L), Xe({ start: G });
}
var dh = /* @__PURE__ */ c("<canvas></canvas>");
const ch = {
  hash: "svelte-ophnba",
  code: "canvas.svelte-ophnba {display:block;image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;}"
};
function yp(r, e) {
  Ke(e, !0), Qe(r, ch);
  const a = s(e, "variant", 3, "classic"), n = s(e, "speed", 3, "normal"), l = s(e, "density", 3, "medium"), d = s(e, "characters", 3, "matrix"), u = s(e, "glowEffect", 3, !0), p = s(e, "fadeEffect", 3, !0), A = s(e, "class", 3, ""), N = /* @__PURE__ */ dt(e, [
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
  let m, I, R, z = [];
  const _ = {
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
  }, q = { slow: 100, normal: 50, fast: 20 }, ee = { low: 20, medium: 15, high: 10 }, w = _[a()], E = f[d()], B = q[n()];
  ee[l()];
  const F = 14;
  let D = 0;
  const V = () => {
    if (m) {
      m.width = m.offsetWidth, m.height = m.offsetHeight, D = Math.floor(m.width / F), z = [];
      for (let T = 0; T < D; T++)
        z[T] = Math.random() * m.height;
    }
  }, O = () => {
    if (!(!I || !m)) {
      p() ? (I.fillStyle = w.background, I.fillRect(0, 0, m.width, m.height)) : I.clearRect(0, 0, m.width, m.height), I.font = `${F}px monospace`, I.textAlign = "center", u() && (I.shadowColor = w.primary, I.shadowBlur = 10);
      for (let T = 0; T < z.length; T++) {
        const y = E[Math.floor(Math.random() * E.length)];
        if (I.fillStyle = w.primary, I.fillText(y, T * F + F / 2, z[T]), z[T] > F) {
          I.fillStyle = w.secondary;
          const x = E[Math.floor(Math.random() * E.length)];
          I.fillText(x, T * F + F / 2, z[T] - F);
        }
        (z[T] > m.height || Math.random() > 0.975) && (z[T] = 0), z[T] += F;
      }
    }
  }, P = () => {
    O(), R = setTimeout(
      () => {
        requestAnimationFrame(P);
      },
      B
    );
  }, Q = () => {
    m && (I = m.getContext("2d"), I && (V(), P()));
  }, G = () => {
    R && clearTimeout(R);
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
  var L = dh();
  Ze(L, (T) => ({ class: T, ...N }), [() => Z("w-full h-full bg-black", A())], void 0, "svelte-ophnba"), tt(L, (T) => m = T, () => m), o(r, L), Xe();
}
var vh = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), uh = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), fh = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), bh = /* @__PURE__ */ c("<h1><span> <!></span> <!> <!></h1>"), gh = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), hh = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), mh = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), ph = /* @__PURE__ */ c("<h2><span> <!></span> <!> <!></h2>"), xh = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), _h = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), wh = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), yh = /* @__PURE__ */ c("<h3><span> <!></span> <!> <!></h3>"), kh = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Ch = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Eh = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Sh = /* @__PURE__ */ c("<span><span> <!></span> <!> <!></span>"), Th = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Mh = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Ah = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), zh = /* @__PURE__ */ c("<div><span> <!></span> <!> <!></div>"), Ih = /* @__PURE__ */ c('<span class="animate-pulse svelte-13rlfrj">|</span>'), Ph = /* @__PURE__ */ c('<div class="retro-scanlines-overlay svelte-13rlfrj"></div>'), Lh = /* @__PURE__ */ c('<div class="crt-bezel svelte-13rlfrj"></div>'), Dh = /* @__PURE__ */ c("<div><span> <!></span> <!> <!></div>");
const Rh = {
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
  Ke(e, !0), Qe(r, Rh);
  const a = s(e, "variant", 3, "macintosh"), n = s(e, "size", 3, "md"), l = s(e, "animated", 3, !0), d = s(e, "typewriter", 3, !1), u = s(e, "scanlines", 3, !0), p = s(e, "glow", 3, !0), A = s(e, "flicker", 3, !1), N = s(e, "chromatic", 3, !1), m = s(e, "breathing", 3, !1), I = s(e, "class", 3, ""), R = s(e, "element", 3, "p"), z = /* @__PURE__ */ dt(e, [
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
  let _ = /* @__PURE__ */ ye(""), f = /* @__PURE__ */ ye(!0), q = /* @__PURE__ */ ye(0);
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
  }, w = {
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
          t(q) < e.text.length ? (W(_, e.text.slice(0, t(q) + 1), !0), Sa(q)) : clearInterval(Q);
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
      W(_, e.text, !0);
  });
  const B = Z("relative inline-block transition-all duration-300", E.font, E.color, w[n()], p() && E.shadow, l() && "transform-gpu will-change-transform", u() && "retro-scanlines", A() && "retro-flicker", N() && "retro-chromatic", I()), F = Z("relative inline-block p-4 overflow-hidden", E.bg, E.border, l() && "transition-all duration-500");
  var D = Se(), V = _e(D);
  {
    var O = (Q) => {
      var G = bh();
      Ze(G, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
      var L = i(G), T = i(L), y = h(T);
      {
        var x = (v) => {
          var b = vh();
          o(v, b);
        };
        g(y, (v) => {
          d() && t(f) && v(x);
        });
      }
      var C = h(L, 2);
      {
        var X = (v) => {
          var b = uh();
          o(v, b);
        };
        g(C, (v) => {
          u() && v(X);
        });
      }
      var K = h(C, 2);
      {
        var k = (v) => {
          var b = fh();
          o(v, b);
        };
        g(K, (v) => {
          a() === "crt" && v(k);
        });
      }
      Ie(G, (v, b) => Mt?.(v, b), () => ({
        enabled: l(),
        duration: 300,
        scale: 1.02,
        borderRadius: "12px"
      })), Ie(G, (v, b) => Rt?.(v, b), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), M(() => {
        j(L, 1, ne(B), "svelte-13rlfrj"), pt(L, `filter: ${E.filter ?? ""}`), ie(T, `${(d() ? t(_) : e.text) ?? ""} `);
      }), o(Q, G);
    }, P = (Q) => {
      var G = Se(), L = _e(G);
      {
        var T = (x) => {
          var C = ph();
          Ze(C, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
          var X = i(C), K = i(X), k = h(K);
          {
            var v = (ve) => {
              var $ = gh();
              o(ve, $);
            };
            g(k, (ve) => {
              d() && t(f) && ve(v);
            });
          }
          var b = h(X, 2);
          {
            var re = (ve) => {
              var $ = hh();
              o(ve, $);
            };
            g(b, (ve) => {
              u() && ve(re);
            });
          }
          var de = h(b, 2);
          {
            var ue = (ve) => {
              var $ = mh();
              o(ve, $);
            };
            g(de, (ve) => {
              a() === "crt" && ve(ue);
            });
          }
          Ie(C, (ve, $) => Mt?.(ve, $), () => ({
            enabled: l(),
            duration: 300,
            scale: 1.02,
            borderRadius: "12px"
          })), Ie(C, (ve, $) => Rt?.(ve, $), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), M(() => {
            j(X, 1, ne(B), "svelte-13rlfrj"), pt(X, `filter: ${E.filter ?? ""}`), ie(K, `${(d() ? t(_) : e.text) ?? ""} `);
          }), o(x, C);
        }, y = (x) => {
          var C = Se(), X = _e(C);
          {
            var K = (v) => {
              var b = yh();
              Ze(b, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
              var re = i(b), de = i(re), ue = h(de);
              {
                var ve = (te) => {
                  var J = xh();
                  o(te, J);
                };
                g(ue, (te) => {
                  d() && t(f) && te(ve);
                });
              }
              var $ = h(re, 2);
              {
                var U = (te) => {
                  var J = _h();
                  o(te, J);
                };
                g($, (te) => {
                  u() && te(U);
                });
              }
              var oe = h($, 2);
              {
                var S = (te) => {
                  var J = wh();
                  o(te, J);
                };
                g(oe, (te) => {
                  a() === "crt" && te(S);
                });
              }
              Ie(b, (te, J) => Mt?.(te, J), () => ({
                enabled: l(),
                duration: 300,
                scale: 1.02,
                borderRadius: "12px"
              })), Ie(b, (te, J) => Rt?.(te, J), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), M(() => {
                j(re, 1, ne(B), "svelte-13rlfrj"), pt(re, `filter: ${E.filter ?? ""}`), ie(de, `${(d() ? t(_) : e.text) ?? ""} `);
              }), o(v, b);
            }, k = (v) => {
              var b = Se(), re = _e(b);
              {
                var de = (ve) => {
                  var $ = Sh();
                  Ze($, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
                  var U = i($), oe = i(U), S = h(oe);
                  {
                    var te = (ae) => {
                      var ce = kh();
                      o(ae, ce);
                    };
                    g(S, (ae) => {
                      d() && t(f) && ae(te);
                    });
                  }
                  var J = h(U, 2);
                  {
                    var Y = (ae) => {
                      var ce = Ch();
                      o(ae, ce);
                    };
                    g(J, (ae) => {
                      u() && ae(Y);
                    });
                  }
                  var le = h(J, 2);
                  {
                    var H = (ae) => {
                      var ce = Eh();
                      o(ae, ce);
                    };
                    g(le, (ae) => {
                      a() === "crt" && ae(H);
                    });
                  }
                  Ie($, (ae, ce) => Mt?.(ae, ce), () => ({
                    enabled: l(),
                    duration: 300,
                    scale: 1.02,
                    borderRadius: "12px"
                  })), Ie($, (ae, ce) => Rt?.(ae, ce), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), M(() => {
                    j(U, 1, ne(B), "svelte-13rlfrj"), pt(U, `filter: ${E.filter ?? ""}`), ie(oe, `${(d() ? t(_) : e.text) ?? ""} `);
                  }), o(ve, $);
                }, ue = (ve) => {
                  var $ = Se(), U = _e($);
                  {
                    var oe = (te) => {
                      var J = zh();
                      Ze(J, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
                      var Y = i(J), le = i(Y), H = h(le);
                      {
                        var ae = (be) => {
                          var ge = Th();
                          o(be, ge);
                        };
                        g(H, (be) => {
                          d() && t(f) && be(ae);
                        });
                      }
                      var ce = h(Y, 2);
                      {
                        var se = (be) => {
                          var ge = Mh();
                          o(be, ge);
                        };
                        g(ce, (be) => {
                          u() && be(se);
                        });
                      }
                      var me = h(ce, 2);
                      {
                        var fe = (be) => {
                          var ge = Ah();
                          o(be, ge);
                        };
                        g(me, (be) => {
                          a() === "crt" && be(fe);
                        });
                      }
                      Ie(J, (be, ge) => Mt?.(be, ge), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Ie(J, (be, ge) => Rt?.(be, ge), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), M(() => {
                        j(Y, 1, ne(B), "svelte-13rlfrj"), pt(Y, `filter: ${E.filter ?? ""}`), ie(le, `${(d() ? t(_) : e.text) ?? ""} `);
                      }), o(te, J);
                    }, S = (te) => {
                      var J = Dh();
                      Ze(J, () => ({ class: F, ...z }), void 0, void 0, "svelte-13rlfrj");
                      var Y = i(J), le = i(Y), H = h(le);
                      {
                        var ae = (be) => {
                          var ge = Ih();
                          o(be, ge);
                        };
                        g(H, (be) => {
                          d() && t(f) && be(ae);
                        });
                      }
                      var ce = h(Y, 2);
                      {
                        var se = (be) => {
                          var ge = Ph();
                          o(be, ge);
                        };
                        g(ce, (be) => {
                          u() && be(se);
                        });
                      }
                      var me = h(ce, 2);
                      {
                        var fe = (be) => {
                          var ge = Lh();
                          o(be, ge);
                        };
                        g(me, (be) => {
                          a() === "crt" && be(fe);
                        });
                      }
                      Ie(J, (be, ge) => Mt?.(be, ge), () => ({
                        enabled: l(),
                        duration: 300,
                        scale: 1.02,
                        borderRadius: "12px"
                      })), Ie(J, (be, ge) => Rt?.(be, ge), () => ({ enabled: m(), intensity: 0.01, speed: 3e3 })), M(() => {
                        j(Y, 1, ne(B), "svelte-13rlfrj"), pt(Y, `filter: ${E.filter ?? ""}`), ie(le, `${(d() ? t(_) : e.text) ?? ""} `);
                      }), o(te, J);
                    };
                    g(
                      U,
                      (te) => {
                        R() === "div" ? te(oe) : te(S, !1);
                      },
                      !0
                    );
                  }
                  o(ve, $);
                };
                g(
                  re,
                  (ve) => {
                    R() === "span" ? ve(de) : ve(ue, !1);
                  },
                  !0
                );
              }
              o(v, b);
            };
            g(
              X,
              (v) => {
                R() === "h3" ? v(K) : v(k, !1);
              },
              !0
            );
          }
          o(x, C);
        };
        g(
          L,
          (x) => {
            R() === "h2" ? x(T) : x(y, !1);
          },
          !0
        );
      }
      o(Q, G);
    };
    g(V, (Q) => {
      R() === "h1" ? Q(O) : Q(P, !1);
    });
  }
  o(r, D), Xe();
}
var jh = /* @__PURE__ */ c('<span class="bitmap-char svelte-1cfjpo6"><!></span>'), Nh = /* @__PURE__ */ c('<span class="cursor svelte-1cfjpo6">█</span>'), Oh = /* @__PURE__ */ c(" <!>", 1), qh = /* @__PURE__ */ c("<span><!></span>");
const Bh = {
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
  Ke(e, !0), Qe(r, Bh);
  const a = s(e, "text", 3, ""), n = s(e, "variant", 3, "bitmap"), l = s(e, "size", 3, "md"), d = s(e, "color", 3, "green");
  s(e, "glow", 3, !0);
  const u = s(e, "scanlines", 3, !1), p = s(e, "flicker", 3, !1), A = s(e, "animate", 3, !1), N = s(e, "typewriter", 3, !1), m = s(e, "speed", 3, 50), I = s(e, "class", 3, "");
  let R = /* @__PURE__ */ ye(""), z = /* @__PURE__ */ ye(0), _;
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
  }, w = Z("retro-text inline-block relative", { "animate-flicker": p(), scanlines: u() }, I());
  function E() {
    if (!N() || !a()) return;
    W(R, ""), W(z, 0);
    const P = setInterval(
      () => {
        t(z) < a().length ? (W(R, t(R) + a()[t(z)]), Sa(z)) : clearInterval(P);
      },
      m()
    );
  }
  bt(() => {
    N() ? E() : W(R, a());
  }), bt(() => {
    if (_) {
      const P = f[n()], Q = q[d()];
      _.style.setProperty("--retro-font-family", P.fontFamily), _.style.setProperty("--retro-font-weight", P.fontWeight), _.style.setProperty("--retro-letter-spacing", P.letterSpacing), _.style.setProperty("--retro-line-height", P.lineHeight), _.style.setProperty("--retro-font-size", ee[l()]), _.style.setProperty("--retro-color", Q.color), _.style.setProperty("--retro-shadow-color", Q.shadowColor), _.style.setProperty("--retro-text-transform", P.textTransform || "none");
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
    A() && _ && (_.style.opacity = "0", setTimeout(
      () => {
        _.style.transition = "opacity 0.5s ease-in-out", _.style.opacity = "1";
      },
      100
    ));
  });
  var F = qh(), D = i(F);
  {
    var V = (P) => {
      var Q = Se(), G = _e(Q);
      ot(G, () => e.children), o(P, Q);
    }, O = (P) => {
      var Q = Se(), G = _e(Q);
      {
        var L = (y) => {
          var x = Se(), C = _e(x);
          Ge(C, 17, () => t(R).split(""), Vr, (X, K) => {
            var k = jh(), v = i(k);
            Ia(v, () => ja(B(t(K)))), M(() => xe(k, "data-char", t(K))), o(X, k);
          }), o(y, x);
        }, T = (y) => {
          var x = Oh(), C = _e(x), X = h(C);
          {
            var K = (k) => {
              var v = Nh();
              o(k, v);
            };
            g(X, (k) => {
              N() && t(z) < a().length && k(K);
            });
          }
          M(() => ie(C, `${t(R) ?? ""} `)), o(y, x);
        };
        g(
          G,
          (y) => {
            n() === "commodore" || n() === "atari" ? y(L) : y(T, !1);
          },
          !0
        );
      }
      o(P, Q);
    };
    g(D, (P) => {
      e.children ? P(V) : P(O, !1);
    });
  }
  tt(F, (P) => _ = P, () => _), M(() => {
    j(F, 1, ne(w), "svelte-1cfjpo6"), xe(F, "aria-label", a());
  }), o(r, F), Xe();
}
var Fh = /* @__PURE__ */ c("<div> </div>"), Hh = /* @__PURE__ */ c('<div class="flex items-center svelte-nrft94"><span class="animate-pulse svelte-nrft94">_</span></div>'), Vh = /* @__PURE__ */ c('<div class="mt-4 space-y-1 svelte-nrft94"><div>System initialization complete.</div> <div class="flex items-center svelte-nrft94"><span>user@hackers-brand:~$</span> <span class="animate-pulse ml-1 svelte-nrft94">_</span></div></div>'), Gh = /* @__PURE__ */ c('<div class="absolute bottom-6 left-6 right-6 svelte-nrft94"><div class="flex items-center space-x-2 text-xs svelte-nrft94"><span>Loading:</span> <div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden svelte-nrft94"><div></div></div> <span> </span></div></div>'), Uh = /* @__PURE__ */ c('<div><div class="absolute inset-0 opacity-10 pointer-events-none svelte-nrft94"><div class="w-full h-full svelte-nrft94" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"></div></div> <div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none svelte-nrft94"></div> <div class="relative z-10 space-y-1 svelte-nrft94"><!> <!> <!></div> <!> <div class="absolute inset-0 pointer-events-none svelte-nrft94"><div class="w-full h-full opacity-[0.02] blur-2xl svelte-nrft94" style="background-color: currentColor;"></div></div></div>');
const Yh = {
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
  Ke(e, !0), Qe(r, Yh);
  const a = s(e, "autoStart", 3, !0), n = s(e, "variant", 3, "retro"), l = s(e, "showBIOS", 3, !0), d = s(e, "fastBoot", 3, !1), u = s(e, "class", 3, ""), p = /* @__PURE__ */ dt(e, [
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
  let A = /* @__PURE__ */ ye(0), N = /* @__PURE__ */ ye(!1), m = /* @__PURE__ */ ye(!1), I = /* @__PURE__ */ ye(0);
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
  }[n()], _ = [
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
  ], q = l() ? [..._, "", ...f] : f, ee = d() ? 50 : 150, w = async () => {
    if (!t(N)) {
      W(N, !0), W(m, !1), W(A, 0), W(I, 0);
      for (let T = 0; T < q.length; T++) {
        W(A, T, !0), W(I, T / q.length * 100);
        let y = ee;
        q[T].includes("PASS") || q[T].includes("OK") ? y = d() ? 30 : 100 : q[T].includes("[") && (y = d() ? 20 : 80), await new Promise((x) => setTimeout(x, y));
      }
      W(m, !0), W(N, !1), W(I, 100), e.onComplete?.();
    }
  };
  wt(() => {
    a() && setTimeout(w, 300);
  });
  const E = (T) => T.includes("PASS") || T.includes("OK") || T.includes("ready") ? z.success : T.includes("FAIL") || T.includes("ERROR") ? z.error : T.includes("Copyright") || T.includes("BIOS") || T.includes("GRUB") ? z.accent : z.text;
  var B = Uh();
  Ze(
    B,
    (T) => ({ class: T, ...p }),
    [
      () => Z("relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden", z.bg, z.text, u())
    ],
    void 0,
    "svelte-nrft94"
  );
  var F = h(i(B), 4), D = i(F);
  Ge(D, 17, () => q.slice(0, t(A) + 1), Vr, (T, y, x) => {
    var C = Fh(), X = i(C);
    M(
      (K) => {
        j(C, 1, K, "svelte-nrft94"), ie(X, t(y) || " ");
      },
      [
        () => ne(Z("whitespace-pre-wrap transition-all duration-200", E(t(y)), x === t(A) && t(N) ? "animate-pulse" : ""))
      ]
    ), o(T, C);
  });
  var V = h(D, 2);
  {
    var O = (T) => {
      var y = Hh();
      o(T, y);
    };
    g(V, (T) => {
      t(N) && T(O);
    });
  }
  var P = h(V, 2);
  {
    var Q = (T) => {
      var y = Vh(), x = i(y), C = h(x, 2), X = i(C);
      M(() => {
        j(x, 1, ne(z.success), "svelte-nrft94"), j(X, 1, ne(z.accent), "svelte-nrft94");
      }), o(T, y);
    };
    g(P, (T) => {
      t(m) && T(Q);
    });
  }
  var G = h(F, 2);
  {
    var L = (T) => {
      var y = Gh(), x = i(y), C = i(x), X = h(C, 2), K = i(X), k = h(X, 2), v = i(k);
      M(
        (b, re) => {
          j(C, 1, ne(z.accent), "svelte-nrft94"), j(K, 1, b, "svelte-nrft94"), pt(K, `width: ${t(I) ?? ""}%; background-color: currentColor;`), j(k, 1, ne(z.text), "svelte-nrft94"), ie(v, `${re ?? ""}%`);
        },
        [
          () => ne(Z("h-full transition-all duration-300 rounded-full", z.success)),
          () => Math.round(t(I))
        ]
      ), o(T, y);
    };
    g(G, (T) => {
      t(N) && !d() && T(L);
    });
  }
  o(r, B), Xe();
}
var Wh = /* @__PURE__ */ c('<div class="flex items-center justify-center p-8 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 svelte-1884ls5"></div> <span class="text-white/70 svelte-1884ls5">Loading...</span></div></div>'), Kh = /* @__PURE__ */ c('<div class="text-sm text-red-400/70 svelte-1884ls5"> </div>'), Xh = /* @__PURE__ */ c('<div role="alert" aria-live="assertive"><div class="space-y-4 svelte-1884ls5"><div class="flex items-center gap-3 svelte-1884ls5"><div class="flex-shrink-0 svelte-1884ls5"><svg class="w-6 h-6 text-red-500 svelte-1884ls5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="svelte-1884ls5"></path></svg></div> <div class="svelte-1884ls5"><h3 class="text-lg font-semibold text-red-600 svelte-1884ls5"> </h3> <p class="text-sm text-red-500/80 svelte-1884ls5"> </p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1884ls5"><!> <!></div> <div class="text-xs text-red-400/50 svelte-1884ls5"><!></div></div></div>');
const Zh = {
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
  Ke(e, !0), Qe(r, Zh);
  const a = s(e, "variant", 3, "glass"), n = s(e, "animate", 3, !0), l = s(
    e,
    "timeout",
    3,
    1e4
    // 10 seconds
  ), d = s(e, "maxRetries", 3, 3), u = s(e, "class", 3, "");
  let p = /* @__PURE__ */ ye("idle"), A = /* @__PURE__ */ ye(null), N = /* @__PURE__ */ ye(null), m = /* @__PURE__ */ ye(0), I = null;
  async function R(O) {
    if (O) {
      W(p, "loading"), W(A, null), W(N, null), l() > 0 && (I = setTimeout(
        () => {
          t(p) === "loading" && (W(p, "timeout"), W(A, new Error(`Operation timed out after ${l()}ms`), !0), e.onError?.(t(A)));
        },
        l()
      ));
      try {
        W(N, await O, !0), W(p, "success");
      } catch (P) {
        W(A, P instanceof Error ? P : new Error(String(P)), !0), W(p, "error"), e.onError?.(t(A));
      } finally {
        I && (clearTimeout(I), I = null);
      }
    }
  }
  async function z() {
    if (!(t(m) >= d()))
      if (Sa(m), e.onRetry) {
        const O = e.onRetry();
        await R(O);
      } else e.promise && await R(e.promise);
  }
  function _() {
    W(p, "idle"), W(A, null), W(N, null), W(m, 0), I && (clearTimeout(I), I = null);
  }
  bt(() => {
    e.promise && R(e.promise);
  }), wt(() => () => {
    I && clearTimeout(I);
  });
  const q = Z("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[a()], u());
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
  function w(O) {
    return O.message.includes("timeout") ? "timeout" : O.message.includes("fetch") || O.message.includes("network") ? "network" : "general";
  }
  function E(O) {
    switch (w(O)) {
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
    var D = (O) => {
      var P = Se(), Q = _e(P);
      {
        var G = (T) => {
          var y = Se(), x = _e(y);
          ot(x, () => e.loading), o(T, y);
        }, L = (T) => {
          var y = Wh();
          $e(1, y, () => ht, () => n() ? { duration: 200 } : void 0), o(T, y);
        };
        g(Q, (T) => {
          e.loading ? T(G) : T(L, !1);
        });
      }
      o(O, P);
    }, V = (O) => {
      var P = Se(), Q = _e(P);
      {
        var G = (T) => {
          var y = Se(), x = _e(y);
          {
            var C = (K) => {
              var k = Se(), v = _e(k);
              ot(v, () => e.fallback, () => ({
                error: t(A),
                retry: z,
                reset: _,
                retryCount: t(m),
                maxRetries: d(),
                state: t(p)
              })), o(K, k);
            }, X = (K) => {
              var k = Xh(), v = i(k), b = i(v), re = i(b), de = i(re), ue = i(de), ve = h(re, 2), $ = i(ve), U = i($), oe = h($, 2), S = i(oe), te = h(b, 2);
              g(te, (ge) => {
                t(A);
              });
              var J = h(te, 2);
              {
                var Y = (ge) => {
                  var Ce = Kh(), Pe = i(Ce);
                  M(() => ie(Pe, `Retry attempt ${t(m) ?? ""} of ${d() ?? ""}`)), o(ge, Ce);
                };
                g(J, (ge) => {
                  t(m) > 0 && ge(Y);
                });
              }
              var le = h(J, 2), H = i(le);
              {
                var ae = (ge) => {
                  $t(ge, {
                    variant: "glass",
                    size: "sm",
                    onclick: z,
                    class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                    children: (Ce, Pe) => {
                      var Be = Ct();
                      M(() => ie(Be, t(p) === "timeout" ? "Try Again" : "Retry")), o(Ce, Be);
                    },
                    $$slots: { default: !0 }
                  });
                };
                g(H, (ge) => {
                  t(m) < d() && (e.onRetry || e.promise) && ge(ae);
                });
              }
              var ce = h(H, 2);
              $t(ce, {
                variant: "glass",
                size: "sm",
                onclick: _,
                class: "bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30",
                children: (ge, Ce) => {
                  var Pe = Ct("Reset");
                  o(ge, Pe);
                },
                $$slots: { default: !0 }
              });
              var se = h(le, 2), me = i(se);
              {
                var fe = (ge) => {
                  var Ce = Ct();
                  M(() => ie(Ce, `The operation exceeded the ${l() / 1e3}s timeout limit.`)), o(ge, Ce);
                }, be = (ge) => {
                  var Ce = Se(), Pe = _e(Ce);
                  {
                    var Be = (we) => {
                      var pe = Ct("Check your internet connection and try again.");
                      o(we, pe);
                    }, Re = (we) => {
                      var pe = Ct("If the problem persists, please contact support.");
                      o(we, pe);
                    };
                    g(
                      Pe,
                      (we) => {
                        w(t(A)) === "network" ? we(Be) : we(Re, !1);
                      },
                      !0
                    );
                  }
                  o(ge, Ce);
                };
                g(me, (ge) => {
                  t(p) === "timeout" ? ge(fe) : ge(be, !1);
                });
              }
              M(
                (ge, Ce) => {
                  j(k, 1, ne(q), "svelte-1884ls5"), xe(ue, "d", ge), ie(U, t(p) === "timeout" ? "Operation Timeout" : "Request Failed"), ie(S, Ce);
                },
                [
                  () => ee(w(t(A))),
                  () => t(A) ? E(t(A)) : "An error occurred while processing your request"
                ]
              ), $e(1, k, () => ht, () => n() ? { duration: 300 } : void 0), o(K, k);
            };
            g(x, (K) => {
              e.fallback ? K(C) : K(X, !1);
            });
          }
          o(T, y);
        }, L = (T) => {
          var y = Se(), x = _e(y);
          {
            var C = (K) => {
              var k = Se(), v = _e(k);
              {
                var b = (re) => {
                  var de = Se(), ue = _e(de);
                  ot(ue, () => e.children, () => ({ result: t(N) })), o(re, de);
                };
                g(v, (re) => {
                  e.children && re(b);
                });
              }
              o(K, k);
            }, X = (K) => {
              var k = Se(), v = _e(k);
              {
                var b = (re) => {
                  var de = Se(), ue = _e(de);
                  ot(ue, () => e.children), o(re, de);
                };
                g(v, (re) => {
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
          o(T, y);
        };
        g(
          Q,
          (T) => {
            t(p) === "error" || t(p) === "timeout" ? T(G) : T(L, !1);
          },
          !0
        );
      }
      o(O, P);
    };
    g(F, (O) => {
      t(p) === "loading" ? O(D) : O(V, !1);
    });
  }
  o(r, B), Xe();
}
var Qh = /* @__PURE__ */ c('<details class="mt-3 svelte-1q83gw3"><summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400 svelte-1q83gw3">Stack Trace</summary> <pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40 svelte-1q83gw3"> </pre></details>'), Jh = /* @__PURE__ */ c('<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 svelte-1q83gw3"><p class="font-mono text-sm text-red-400 svelte-1q83gw3"> </p> <!></div>'), $h = /* @__PURE__ */ c('<div class="text-sm text-red-400/70 svelte-1q83gw3"> </div>'), em = /* @__PURE__ */ c('<div class="space-y-4 svelte-1q83gw3"><div class="flex items-center gap-3 svelte-1q83gw3"><div class="flex-shrink-0 svelte-1q83gw3"><svg class="w-6 h-6 text-red-500 svelte-1q83gw3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-1q83gw3"></path></svg></div> <div class="svelte-1q83gw3"><h3 class="text-lg font-semibold text-red-600 svelte-1q83gw3">Something went wrong</h3> <p class="text-sm text-red-500/80 svelte-1q83gw3">A component error occurred and was caught by the error boundary</p></div></div> <!> <!> <div class="flex flex-wrap gap-3 svelte-1q83gw3"><!> <!> <!></div> <!></div>'), tm = /* @__PURE__ */ c('<div role="alert" aria-live="assertive"><!></div>');
const rm = {
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
  Ke(e, !0), Qe(r, rm);
  const a = s(e, "showDetails", 3, !1), n = s(e, "variant", 3, "glass"), l = s(e, "animate", 3, !0), d = s(e, "retryable", 3, !0), u = s(e, "class", 3, "");
  let p = /* @__PURE__ */ ye(!1), A = /* @__PURE__ */ ye(null), N = /* @__PURE__ */ ye(null), m = /* @__PURE__ */ ye(0), I = /* @__PURE__ */ ye(!1);
  const R = 3;
  function z(P, Q) {
    W(p, !0), W(A, P, !0), W(N, Q, !0), e.onError?.(P, Q), console.error("Component Error Boundary caught an error:", P), Q && console.error("Error info:", Q);
  }
  function _() {
    t(m) < R && (W(p, !1), W(A, null), W(N, null), Sa(m));
  }
  function f() {
    W(p, !1), W(A, null), W(N, null), W(m, 0), W(I, !1);
  }
  const ee = Z("rounded-brand p-6 m-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[n()], u());
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
  function w(P) {
    return `${P.name}: ${P.message}`;
  }
  function E(P) {
    return P.stack || "No stack trace available";
  }
  function B() {
    return t(m) === 0 ? "" : t(m) >= R ? `Maximum retry attempts reached (${R})` : `Retry attempt ${t(m)} of ${R}`;
  }
  var F = Se(), D = _e(F);
  {
    var V = (P) => {
      var Q = tm(), G = i(Q);
      {
        var L = (y) => {
          var x = Se(), C = _e(x);
          ot(C, () => e.fallback, () => ({
            error: t(A),
            retry: _,
            reset: f,
            retryCount: t(m),
            maxRetries: R
          })), o(y, x);
        }, T = (y) => {
          var x = em(), C = h(i(x), 2);
          {
            var X = (U) => {
              var oe = Jh(), S = i(oe), te = i(S), J = h(S, 2);
              {
                var Y = (le) => {
                  var H = Qh(), ae = h(i(H), 2), ce = i(ae);
                  M((se) => ie(ce, se), [() => E(t(A))]), o(le, H);
                };
                g(J, (le) => {
                  a() && t(I) && le(Y);
                });
              }
              M((le) => ie(te, le), [() => w(t(A))]), o(U, oe);
            };
            g(C, (U) => {
              t(A) && U(X);
            });
          }
          var K = h(C, 2);
          {
            var k = (U) => {
              var oe = $h(), S = i(oe);
              M((te) => ie(S, te), [B]), o(U, oe);
            };
            g(K, (U) => {
              t(m) > 0 && U(k);
            });
          }
          var v = h(K, 2), b = i(v);
          {
            var re = (U) => {
              $t(U, {
                variant: "glass",
                size: "sm",
                onclick: _,
                class: "bg-red-500/20 border-red-500/40 hover:bg-red-500/30",
                children: (oe, S) => {
                  var te = Ct("Try Again");
                  o(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            g(b, (U) => {
              d() && t(m) < R && U(re);
            });
          }
          var de = h(b, 2);
          $t(de, {
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
          var ue = h(de, 2);
          {
            var ve = (U) => {
              $t(U, {
                variant: "glass",
                size: "sm",
                onclick: () => W(I, !t(I)),
                class: "bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30",
                children: (oe, S) => {
                  var te = Ct();
                  M(() => ie(te, `${t(I) ? "Hide" : "Show"} Details`)), o(oe, te);
                },
                $$slots: { default: !0 }
              });
            };
            g(ue, (U) => {
              a() && U(ve);
            });
          }
          var $ = h(v, 2);
          g($, (U) => {
          }), o(y, x);
        };
        g(G, (y) => {
          e.fallback ? y(L) : y(T, !1);
        });
      }
      M(() => j(Q, 1, ne(ee), "svelte-1q83gw3")), $e(1, Q, () => kt, () => l() ? { duration: 300, blur: "sm" } : void 0), o(P, Q);
    }, O = (P) => {
      var Q = Se(), G = _e(Q);
      {
        var L = (T) => {
          var y = Se(), x = _e(y);
          ot(x, () => e.children), o(T, y);
        };
        g(G, (T) => {
          e.children && T(L);
        });
      }
      o(P, Q);
    };
    g(D, (P) => {
      t(p) ? P(V) : P(O, !1);
    });
  }
  o(r, F), Xe();
}
function am(r, e, a) {
  W(e, !0), a.onDismiss?.();
}
var nm = /* @__PURE__ */ c('<li class="text-sm text-red-500"> </li>'), om = /* @__PURE__ */ c('<li class="flex items-start gap-2 svelte-12vbusp"><div class="flex-shrink-0 mt-1"><svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div> <div class="min-w-0"><span class="text-sm font-medium text-red-600"> </span> <ul class="mt-1 space-y-1"></ul></div></li>'), im = /* @__PURE__ */ c('<button class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors svelte-12vbusp" aria-label="Dismiss errors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'), lm = /* @__PURE__ */ c('<div role="alert" aria-live="polite"><div class="flex items-start gap-3"><div class="flex-shrink-0 mt-0.5"><svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-semibold text-red-600 mb-2"> </h3> <ul class="space-y-2 svelte-12vbusp"></ul></div> <!></div></div>'), sm = /* @__PURE__ */ c('<p class="text-sm text-red-500 flex items-center gap-1 svelte-12vbusp"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> </p>'), dm = /* @__PURE__ */ c('<div class="mt-1"></div>'), cm = /* @__PURE__ */ c("<!> <!> <!>", 1);
const vm = {
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
  Ke(e, !0), Qe(r, vm);
  const a = s(e, "errors", 19, () => []), n = s(e, "showSummary", 3, !0), l = s(e, "variant", 3, "glass"), d = s(e, "animate", 3, !0), u = s(e, "dismissible", 3, !1), p = s(e, "class", 3, "");
  let A = /* @__PURE__ */ ye(!1);
  const N = /* @__PURE__ */ Ee(() => a().length > 0 && !t(A)), m = /* @__PURE__ */ Ee(() => a().reduce(
    (D, V) => (D[V.field] || (D[V.field] = []), D[V.field].push(V), D),
    {}
  )), R = Z("rounded-brand p-4 mb-4", {
    glass: "glass border border-red-500/30 bg-red-500/10",
    terminal: "bg-terminal-bg border border-red-500 text-terminal-fg font-mono",
    minimal: "bg-red-50 border border-red-200 text-red-900"
  }[l()], p());
  function z(D) {
    return D.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^\w/, (V) => V.toUpperCase()).trim();
  }
  function _(D) {
    switch (D) {
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
  var f = cm(), q = _e(f);
  {
    var ee = (D) => {
      var V = lm(), O = i(V), P = h(i(O), 2), Q = i(P), G = i(Q), L = h(Q, 2);
      Ge(L, 21, () => Object.entries(t(m)), ([x, C]) => x, (x, C) => {
        var X = /* @__PURE__ */ Ee(() => Kr(t(C), 2));
        let K = () => t(X)[0], k = () => t(X)[1];
        var v = om(), b = i(v), re = i(b), de = i(re), ue = h(b, 2), ve = i(ue), $ = i(ve), U = h(ve, 2);
        Ge(
          U,
          23,
          k,
          (oe, S) => oe.code ? `${K()}-${oe.code}-${S}` : `${K()}-${S}`,
          (oe, S) => {
            var te = nm(), J = i(te);
            M(() => ie(J, t(S).message)), o(oe, te);
          }
        ), M(
          (oe, S) => {
            xe(de, "d", oe), ie($, `${S ?? ""}:`);
          },
          [
            () => _(k()[0]?.code),
            () => z(K())
          ]
        ), o(x, v);
      });
      var T = h(P, 2);
      {
        var y = (x) => {
          var C = im();
          C.__click = [am, A, e], o(x, C);
        };
        g(T, (x) => {
          u() && x(y);
        });
      }
      M(() => {
        j(V, 1, ne(R), "svelte-12vbusp"), ie(G, `Please correct the following ${a().length === 1 ? "error" : "errors"}:`);
      }), $e(1, V, () => ht, () => d() ? { duration: 300, direction: "down" } : void 0), o(D, V);
    };
    g(q, (D) => {
      t(N) && n() && D(ee);
    });
  }
  var w = h(q, 2);
  {
    var E = (D) => {
      var V = Se(), O = _e(V);
      ot(O, () => e.children, () => ({ errors: t(m), hasErrors: t(N) })), o(D, V);
    };
    g(w, (D) => {
      e.children && D(E);
    });
  }
  var B = h(w, 2);
  {
    var F = (D) => {
      var V = Se(), O = _e(V);
      Ge(O, 17, () => Object.entries(t(m)), ([P, Q]) => P, (P, Q) => {
        var G = /* @__PURE__ */ Ee(() => Kr(t(Q), 2));
        let L = () => t(G)[0], T = () => t(G)[1];
        var y = dm();
        Ge(
          y,
          23,
          T,
          (x, C) => x.code ? `${L()}-${x.code}-${C}` : `${L()}-${C}`,
          (x, C) => {
            var X = sm(), K = i(X), k = i(K), v = h(K);
            M(
              (b) => {
                xe(k, "d", b), ie(v, ` ${t(C).message ?? ""}`);
              },
              [() => _(t(C).code)]
            ), $e(1, X, () => ht, () => d() ? { duration: 200, direction: "up", distance: 5 } : void 0), o(x, X);
          }
        ), M(() => xe(y, "id", `${L() ?? ""}-errors`)), o(P, y);
      }), o(D, V);
    };
    g(B, (D) => {
      t(N) && !n() && D(F);
    });
  }
  o(r, f), Xe();
}
vt(["click"]);
const Xn = async (r, e, a) => {
  try {
    await navigator.clipboard.writeText(e()), W(a, !0), setTimeout(() => W(a, !1), 2e3);
  } catch (n) {
    console.error("Failed to copy:", n);
  }
};
var um = /* @__PURE__ */ rr('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), fm = /* @__PURE__ */ rr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), bm = /* @__PURE__ */ c('<button class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"><!></button>'), gm = /* @__PURE__ */ c('<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg"><div class="text-sm font-medium text-white/80"> </div> <!></div>'), hm = /* @__PURE__ */ rr('<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), mm = /* @__PURE__ */ rr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>'), pm = /* @__PURE__ */ c('<button class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"><!></button>'), xm = /* @__PURE__ */ c(`<div class="relative group"><!> <div><!> <pre class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed svelte-au3hj8"><code>
                
                <!>
            </code>
            </pre></div></div>`);
const _m = {
  hash: "svelte-au3hj8",
  code: `pre.svelte-au3hj8 {margin:0;-moz-tab-size:2;-o-tab-size:2;tab-size:2;}code.svelte-au3hj8 {font-family:'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;}

	/* Line numbers (optional) */pre.line-numbers {counter-reset:line;}pre.line-numbers code {counter-increment:line;}pre.line-numbers code::before {content:counter(line);display:inline-block;width:3em;padding-right:1em;margin-right:1em;color:rgba(255, 255, 255, 0.3);border-right:1px solid rgba(255, 255, 255, 0.1);text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;}`
};
function Ap(r, e) {
  Ke(e, !0), Qe(r, _m);
  let a = s(e, "code", 3, ""), n = s(e, "language", 3, "svelte"), l = s(e, "showCopy", 3, !0), d = s(e, "title", 3, ""), u = /* @__PURE__ */ ye(!1), p = /* @__PURE__ */ ye(void 0);
  const A = (P, Q) => {
    if (!P) return "";
    switch (Q) {
      case "svelte":
      case "html":
        return m(P);
      case "css":
        return I(P);
      case "javascript":
      case "js":
        return R(P);
      case "typescript":
      case "ts":
        return z(P);
      case "bash":
      case "shell":
        return _(P);
      default:
        return N(P);
    }
  }, N = (P) => P.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), m = (P) => P.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>').replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>').replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=').replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>'), I = (P) => P.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:').replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;').replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), R = (P) => P.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-green-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>').replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>').replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>').replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>').replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>'), z = (P) => R(P).replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>'), _ = (P) => P.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ').replace(/^>\s*/gm, '<span class="text-blue-400">></span> ').replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>').replace(/'([^']*)'/g, `<span class="text-yellow-400">'$1'</span>`).replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>').replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>'), f = /* @__PURE__ */ Ee(() => () => A(a(), n()));
  wt(() => {
    t(p) && a().split(`
`).length > 1 && (t(p).style.counterReset = "line");
  });
  var q = xm(), ee = i(q);
  {
    var w = (P) => {
      var Q = gm(), G = i(Q), L = i(G), T = h(G, 2);
      {
        var y = (x) => {
          var C = bm();
          C.__click = [Xn, a, u];
          var X = i(C);
          {
            var K = (v) => {
              var b = um();
              o(v, b);
            }, k = (v) => {
              var b = fm();
              o(v, b);
            };
            g(X, (v) => {
              t(u) ? v(K) : v(k, !1);
            });
          }
          M(() => xe(C, "title", t(u) ? "Copied!" : "Copy code")), o(x, C);
        };
        g(T, (x) => {
          l() && x(y);
        });
      }
      M(() => ie(L, d())), o(P, Q);
    };
    g(ee, (P) => {
      d() && P(w);
    });
  }
  var E = h(ee, 2), B = i(E);
  {
    var F = (P) => {
      var Q = pm();
      Q.__click = [Xn, a, u];
      var G = i(Q);
      {
        var L = (y) => {
          var x = hm();
          o(y, x);
        }, T = (y) => {
          var x = mm();
          o(y, x);
        };
        g(G, (y) => {
          t(u) ? y(L) : y(T, !1);
        });
      }
      M(() => xe(Q, "title", t(u) ? "Copied!" : "Copy code")), o(P, Q);
    };
    g(B, (P) => {
      l() && !d() && P(F);
    });
  }
  var D = h(B, 2), V = i(D), O = h(i(V));
  Ia(O, () => ja(t(f))), tt(D, (P) => W(p, P), () => t(p)), M(() => {
    j(E, 1, `relative bg-black/30 ${d() ? "rounded-b-lg" : "rounded-lg"} border border-white/10 overflow-hidden`), j(V, 1, `language-${n() ?? ""}`, "svelte-au3hj8");
  }), o(r, q), Xe();
}
vt(["click"]);
function wm(r, e, a) {
  e(!e()), a("toggle", { collapsed: e() });
}
var ym = (
  // Handle expansion of items with children
  // Set active item
  // Execute custom click handler
  // Close sidebar on mobile when item is selected
  (r, e) => (r.key === "Enter" || r.key === " ") && e()
), km = /* @__PURE__ */ c('<div role="button" aria-label="Close sidebar overlay" tabindex="0"></div>'), Cm = /* @__PURE__ */ c('<h2 class="text-lg font-semibold truncate">Menu</h2>'), Em = /* @__PURE__ */ c("<button><!></button>"), Sm = /* @__PURE__ */ c('<div class="flex items-center justify-between p-4 border-b border-white/10"><!> <!></div>'), Tm = (r, e, a) => e(a()), Mm = /* @__PURE__ */ c('<div class="w-5 h-5 flex-shrink-0"><div class="w-full h-full bg-current opacity-70 rounded"></div></div>'), Am = /* @__PURE__ */ c('<span class="inline-block w-4 h-4 rotate-90 border-r-2 border-b-2 border-current" style="transform: rotate(45deg);"></span>'), zm = /* @__PURE__ */ c('<div class="w-5 h-5 flex-shrink-0"><!></div>'), Im = /* @__PURE__ */ c("<span> </span>"), Pm = /* @__PURE__ */ c('<span class="flex-1 truncate"> </span> <!>', 1), Lm = /* @__PURE__ */ c("<li><button><!> <!></button></li>"), Dm = /* @__PURE__ */ c('<div class="p-4 border-t border-white/10"><!></div>'), Rm = /* @__PURE__ */ c('<!> <aside><!> <nav class="flex-1 overflow-y-auto p-2 svelte-tk90u0"><ul class="space-y-1"></ul></nav> <!></aside>', 1);
const jm = {
  hash: "svelte-tk90u0",
  code: `
	/* Custom scrollbar for navigation */nav.svelte-tk90u0 {scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.2) transparent;}nav.svelte-tk90u0::-webkit-scrollbar {width:6px;}nav.svelte-tk90u0::-webkit-scrollbar-track {background:transparent;}nav.svelte-tk90u0::-webkit-scrollbar-thumb {background:rgba(255, 255, 255, 0.2);border-radius:3px;}nav.svelte-tk90u0::-webkit-scrollbar-thumb:hover {background:rgba(255, 255, 255, 0.3);}

	/* Smooth transitions */aside.svelte-tk90u0 {will-change:width, transform;}

	/* Focus styles */button.svelte-tk90u0:focus-visible {outline:2px solid rgba(59, 130, 246, 0.5);outline-offset:2px;}`
};
function zp(r, e) {
  Ke(e, !0), Qe(r, jm);
  let a = s(e, "items", 19, () => []), n = s(e, "width", 3, "md"), l = s(e, "variant", 3, "glass"), d = s(e, "position", 3, "left"), u = s(e, "collapsible", 3, !0), p = s(e, "collapsed", 15, !1), A = s(e, "overlay", 3, !1), N = s(e, "persistent", 3, !0), m = s(e, "showToggle", 3, !0), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  const z = Tt();
  let _ = /* @__PURE__ */ ye(null), f = /* @__PURE__ */ ye(st(/* @__PURE__ */ new Set()));
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
  }[l()];
  function E(K) {
    K.disabled || (K.children?.length && (t(f).has(K.id) ? t(f).delete(K.id) : t(f).add(K.id), W(f, new Set(t(f)), !0)), W(_, K.id, !0), K.onclick && K.onclick(), z("select", { item: K }), A() && !N() && p(!0));
  }
  function B() {
    A() && !N() && (p(!0), z("close"));
  }
  function F(K, k = 0) {
    const v = t(f).has(K.id), b = t(_) === K.id || K.active, re = K.children?.length;
    return {
      item: K,
      level: k,
      isExpanded: v,
      isActive: b,
      hasChildren: re,
      paddingLeft: `${k * 1 + 1}rem`
    };
  }
  function D(K, k = 0) {
    const v = [];
    for (const b of K) {
      const re = F(b, k);
      v.push(re), re.hasChildren && re.isExpanded && !p() && v.push(...D(b.children, k + 1));
    }
    return v;
  }
  const V = /* @__PURE__ */ Ee(() => () => D(a()));
  var O = Rm(), P = _e(O);
  {
    var Q = (K) => {
      var k = km();
      k.__click = B, k.__keydown = [ym, B], M((v) => j(k, 1, v), [
        () => ne(Z("fixed inset-0 z-40", w.overlay))
      ]), o(K, k);
    };
    g(P, (K) => {
      A() && !p() && K(Q);
    });
  }
  var G = h(P, 2);
  Ze(
    G,
    (K) => ({ class: K, ...R }),
    [
      () => Z("flex flex-col h-full border-r transition-all duration-300 ease-in-out", q[n()], w.sidebar, d() === "right" && "border-r-0 border-l", A() && "fixed top-0 z-50", A() && d() === "left" && "left-0", A() && d() === "right" && "right-0", A() && p() && "-translate-x-full", A() && d() === "right" && p() && "translate-x-full", I())
    ],
    void 0,
    "svelte-tk90u0"
  );
  var L = i(G);
  {
    var T = (K) => {
      var k = Sm(), v = i(k);
      {
        var b = (ue) => {
          var ve = Se(), $ = _e(ve);
          {
            var U = (S) => {
              var te = Se(), J = _e(te);
              ot(J, () => e.children.header), o(S, te);
            }, oe = (S) => {
              var te = Cm();
              o(S, te);
            };
            g($, (S) => {
              e.children?.header ? S(U) : S(oe, !1);
            });
          }
          o(ue, ve);
        };
        g(v, (ue) => {
          p() || ue(b);
        });
      }
      var re = h(v, 2);
      {
        var de = (ue) => {
          var ve = Em();
          ve.__click = [wm, p, z];
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
          M(
            (S) => {
              j(ve, 1, S, "svelte-tk90u0"), xe(ve, "title", p() ? "Expand sidebar" : "Collapse sidebar");
            },
            [
              () => ne(Z("p-2 rounded-lg border transition-colors", w.toggle, p() && "mx-auto"))
            ]
          ), o(ue, ve);
        };
        g(re, (ue) => {
          u() && ue(de);
        });
      }
      o(K, k);
    };
    g(L, (K) => {
      m() && K(T);
    });
  }
  var y = h(L, 2), x = i(y);
  Ge(
    x,
    21,
    () => t(V),
    ({ item: K, level: k, isExpanded: v, isActive: b, hasChildren: re, paddingLeft: de }) => K.id,
    (K, k) => {
      let v = () => t(k).item, b = () => t(k).level, re = () => t(k).isExpanded, de = () => t(k).isActive, ue = () => t(k).hasChildren, ve = () => t(k).paddingLeft;
      var $ = Lm(), U = i($);
      U.__click = [Tm, E, v];
      var oe = i(U);
      {
        var S = (le) => {
          var H = Mm();
          o(le, H);
        }, te = (le) => {
          var H = Se(), ae = _e(H);
          {
            var ce = (se) => {
              var me = zm(), fe = i(me);
              {
                var be = (Ce) => {
                  var Pe = Am();
                  o(Ce, Pe);
                }, ge = (Ce) => {
                  Rr(Ce, { size: 16 });
                };
                g(fe, (Ce) => {
                  re() ? Ce(be) : Ce(ge, !1);
                });
              }
              o(se, me);
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
          v().icon ? le(S) : le(te, !1);
        });
      }
      var J = h(oe, 2);
      {
        var Y = (le) => {
          var H = Pm(), ae = _e(H), ce = i(ae), se = h(ae, 2);
          {
            var me = (fe) => {
              var be = Im(), ge = i(be);
              M(
                (Ce) => {
                  j(be, 1, Ce), ie(ge, v().badge);
                },
                [
                  () => ne(Z("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium", w.badge))
                ]
              ), o(fe, be);
            };
            g(se, (fe) => {
              v().badge && fe(me);
            });
          }
          M(() => ie(ce, v().label)), o(le, H);
        };
        g(J, (le) => {
          p() || le(Y);
        });
      }
      M(
        (le) => {
          j(U, 1, le, "svelte-tk90u0"), pt(U, !p() && b() > 0 ? `padding-left: ${ve()}` : void 0), U.disabled = v().disabled, xe(U, "title", p() ? v().label : void 0);
        },
        [
          () => ne(Z("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150", w.item, de() && w.itemActive, v().disabled && w.itemDisabled, p() && "justify-center px-2"))
        ]
      ), o(K, $);
    }
  );
  var C = h(y, 2);
  {
    var X = (K) => {
      var k = Dm(), v = i(k);
      ot(v, () => e.children.footer, () => ({ collapsed: p() })), o(K, k);
    };
    g(C, (K) => {
      e.children?.footer && K(X);
    });
  }
  Ie(G, (K, k) => kt?.(K, k), () => ({ intensity: "medium" })), o(r, O), Xe();
}
vt(["click", "keydown"]);
function Nm(r, e, a, n, l, d, u) {
  if (!e()) return;
  const p = r.touches[0];
  W(a, p.clientX, !0), W(n, p.clientY, !0), W(l, !0), t(d) && u();
}
function Om(r, e, a) {
  !e() || !t(a) || r.preventDefault();
}
function qm(r, e, a, n, l, d, u, p, A) {
  if (!e() || !t(a)) return;
  const N = r.changedTouches[0], m = N.clientX - t(n), I = N.clientY - t(l);
  Math.abs(m) > Math.abs(I) && Math.abs(m) > 50 && (m > 0 ? d() : u()), W(a, !1), t(p) && A();
}
var Bm = /* @__PURE__ */ c('<img class="w-full h-full object-cover svelte-wt9314" loading="lazy"/>'), Fm = /* @__PURE__ */ c('<h3 class="text-lg font-semibold text-white mb-1 svelte-wt9314"> </h3>'), Hm = /* @__PURE__ */ c('<p class="text-sm text-white/80 svelte-wt9314"> </p>'), Vm = /* @__PURE__ */ c('<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 svelte-wt9314"><!> <!></div>'), Gm = /* @__PURE__ */ c("<!> <!>", 1), Um = /* @__PURE__ */ c('<div class="w-full h-full flex flex-col svelte-wt9314"><!></div>'), Ym = /* @__PURE__ */ c('<div class="flex-shrink-0 h-full relative svelte-wt9314"><!></div>'), Wm = /* @__PURE__ */ c("<div><div></div></div>"), Km = /* @__PURE__ */ c("<button><!></button>"), Xm = /* @__PURE__ */ c('<button title="Previous slide" aria-label="Previous slide"><!></button> <button title="Next slide" aria-label="Next slide"><!></button> <!>', 1), Zm = /* @__PURE__ */ c("<button></button>"), Qm = /* @__PURE__ */ c('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 svelte-wt9314"></div>'), Jm = /* @__PURE__ */ c('<div><div class="relative w-full h-full overflow-hidden svelte-wt9314"><div></div></div> <!> <!> <!></div>');
const $m = {
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
  Ke(e, !0), Qe(r, $m);
  let a = s(e, "currentIndex", 15, 0), n = s(e, "autoPlay", 3, !1), l = s(e, "autoPlayInterval", 3, 5e3), d = s(e, "showControls", 3, !0), u = s(e, "showDots", 3, !0), p = s(e, "showProgress", 3, !1), A = s(e, "loop", 3, !0), N = s(e, "variant", 3, "glass"), m = s(e, "size", 3, "md"), I = s(e, "aspectRatio", 3, "16:9");
  s(e, "transition", 3, "slide");
  let R = s(e, "itemsPerView", 3, 1), z = s(e, "gap", 3, "md"), _ = s(e, "touchEnabled", 3, !0), f = s(e, "class", 3, ""), q = /* @__PURE__ */ dt(e, [
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
  const ee = Tt();
  let w, E, B = /* @__PURE__ */ ye(st(n())), F = null, D = /* @__PURE__ */ ye(0), V = /* @__PURE__ */ ye(0), O = /* @__PURE__ */ ye(!1);
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
  }, L = P[m()], T = Q[N()], y = /* @__PURE__ */ Ee(() => () => e.items.length), x = /* @__PURE__ */ Ee(() => () => Math.max(0, t(y)() - R())), C = /* @__PURE__ */ Ee(() => () => A() || a() > 0), X = /* @__PURE__ */ Ee(() => () => A() || a() < t(x)()), K = /* @__PURE__ */ Ee(() => () => `-${a() * 100 / R()}%`), k = /* @__PURE__ */ Ee(() => () => t(y)() <= 1 ? 100 : (a() + 1) / t(y)() * 100), v = /* @__PURE__ */ Ee(() => () => t(y)() ? 100 / t(y)() : 0);
  function b(se) {
    se < 0 ? a(A() ? t(x)() : 0) : se > t(x)() ? a(A() ? 0 : t(x)()) : a(se), ee("change", { index: a(), item: e.items[a()] });
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
    !t(B) || t(y)() <= 1 || ($(), F = window.setInterval(
      () => {
        if (a() >= t(x)() && !A()) {
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
  var oe = Jm();
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
      () => Z("relative rounded-lg border overflow-hidden", G[I()], T.container, L.container, f())
    ],
    void 0,
    "svelte-wt9314"
  );
  var S = i(oe);
  S.__touchstart = [
    Nm,
    _,
    D,
    V,
    O,
    B,
    $
  ], S.__touchmove = [Om, _, O], S.__touchend = [
    qm,
    _,
    O,
    D,
    V,
    re,
    de,
    B,
    ve
  ];
  var te = i(S);
  Ge(te, 23, () => e.items, (se) => se.id, (se, me, fe) => {
    var be = Ym(), ge = i(be);
    {
      var Ce = (Pe) => {
        var Be = Um(), Re = i(Be);
        {
          var we = (Te) => {
            const Ne = /* @__PURE__ */ Ee(() => e.children.item({ item: t(me), index: t(fe) }));
            var Ae = Se(), Le = _e(Ae);
            ot(Le, () => t(Ne)), o(Te, Ae);
          }, pe = (Te) => {
            var Ne = Gm(), Ae = _e(Ne);
            {
              var Le = (ke) => {
                var he = Bm();
                M(() => {
                  xe(he, "src", t(me).image), xe(he, "alt", t(me).title || `Slide ${t(fe) + 1}`);
                }), o(ke, he);
              };
              g(Ae, (ke) => {
                t(me).image && ke(Le);
              });
            }
            var qe = h(Ae, 2);
            {
              var Fe = (ke) => {
                var he = Vm(), ze = i(he);
                {
                  var De = (We) => {
                    var at = Fm(), lt = i(at);
                    M(() => ie(lt, t(me).title)), o(We, at);
                  };
                  g(ze, (We) => {
                    t(me).title && We(De);
                  });
                }
                var He = h(ze, 2);
                {
                  var Je = (We) => {
                    var at = Hm(), lt = i(at);
                    M(() => ie(lt, t(me).description)), o(We, at);
                  };
                  g(He, (We) => {
                    t(me).description && We(Je);
                  });
                }
                o(ke, he);
              };
              g(qe, (ke) => {
                (t(me).title || t(me).description) && ke(Fe);
              });
            }
            o(Te, Ne);
          };
          g(Re, (Te) => {
            e.children?.item ? Te(we) : Te(pe, !1);
          });
        }
        o(Pe, Be);
      };
      g(ge, (Pe) => {
        Pe(Ce, !1);
      });
    }
    M((Pe) => pt(be, Pe), [() => `width: ${t(v)()}%`]), o(se, be);
  }), tt(S, (se) => E = se, () => E);
  var J = h(S, 2);
  {
    var Y = (se) => {
      var me = Wm(), fe = i(me);
      M(
        (be, ge, Ce) => {
          j(me, 1, be, "svelte-wt9314"), j(fe, 1, ge, "svelte-wt9314"), pt(fe, Ce);
        },
        [
          () => ne(Z("absolute bottom-0 left-0 right-0 h-1", T.progress)),
          () => ne(Z("h-full transition-all duration-300", T.progressFill)),
          () => `width: ${t(k)()}%`
        ]
      ), o(se, me);
    };
    g(J, (se) => {
      p() && se(Y);
    });
  }
  var le = h(J, 2);
  {
    var H = (se) => {
      var me = Xm(), fe = _e(me);
      fe.__click = re;
      var be = i(fe);
      da(be, { size: 16 });
      var ge = h(fe, 2);
      ge.__click = de;
      var Ce = i(ge);
      Rr(Ce, { size: 16 });
      var Pe = h(ge, 2);
      {
        var Be = (Re) => {
          var we = Km();
          we.__click = ue;
          var pe = i(we);
          {
            var Te = (Ae) => {
              gi(Ae, { size: 16 });
            }, Ne = (Ae) => {
              hi(Ae, { size: 16 });
            };
            g(pe, (Ae) => {
              t(B) ? Ae(Te) : Ae(Ne, !1);
            });
          }
          M(
            (Ae) => {
              j(we, 1, Ae, "svelte-wt9314"), xe(we, "title", t(B) ? "Pause autoplay" : "Start autoplay"), xe(we, "aria-label", t(B) ? "Pause autoplay" : "Start autoplay");
            },
            [
              () => ne(Z("absolute top-2 right-2 rounded-full border transition-all duration-200", L.controls, T.controls))
            ]
          ), o(Re, we);
        };
        g(Pe, (Re) => {
          n() && Re(Be);
        });
      }
      M(
        (Re, we, pe, Te) => {
          fe.disabled = Re, j(fe, 1, we, "svelte-wt9314"), ge.disabled = pe, j(ge, 1, Te, "svelte-wt9314");
        },
        [
          () => !t(C)(),
          () => ne(Z("absolute left-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", L.controls, T.controls, !t(C)() && "opacity-50 cursor-not-allowed")),
          () => !t(X)(),
          () => ne(Z("absolute right-2 top-1/2 -translate-y-1/2 rounded-full border transition-all duration-200", L.controls, T.controls, !t(X)() && "opacity-50 cursor-not-allowed"))
        ]
      ), o(se, me);
    };
    g(le, (se) => {
      d() && t(y)() > 1 && se(H);
    });
  }
  var ae = h(le, 2);
  {
    var ce = (se) => {
      var me = Qm();
      Ge(me, 23, () => e.items, (fe) => fe.id, (fe, be, ge) => {
        var Ce = Zm();
        Ce.__click = () => b(t(ge)), M(
          (Pe) => {
            j(Ce, 1, Pe, "svelte-wt9314"), xe(Ce, "title", `Go to slide ${t(ge) + 1}`), xe(Ce, "aria-label", `Go to slide ${t(ge) + 1}`);
          },
          [
            () => ne(Z("rounded-full transition-all duration-200", L.dots, t(ge) === a() ? T.dotsActive : T.dots))
          ]
        ), o(fe, Ce);
      }), o(se, me);
    };
    g(ae, (se) => {
      u() && t(y)() > 1 && se(ce);
    });
  }
  tt(oe, (se) => w = se, () => w), Ie(oe, (se, me) => kt?.(se, me), () => ({ intensity: "medium" })), M(
    (se, me) => {
      j(te, 1, se, "svelte-wt9314"), pt(te, me);
    },
    [
      () => ne(Z("flex h-full transition-transform duration-300 ease-in-out", L.gap[z()])),
      () => `transform: translateX(${t(K)()}); width: ${t(y)() * 100 / R()}%`
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
  let a = s(e, "open", 15, !1), n = s(e, "position", 3, "right"), l = s(e, "size", 3, "md"), d = s(e, "variant", 3, "glass"), u = s(e, "overlay", 3, !0), p = s(e, "closeOnOutsideClick", 3, !0), A = s(e, "closeOnEscape", 3, !0), N = s(e, "showCloseButton", 3, !0), m = s(e, "persistent", 3, !1), I = s(e, "class", 3, ""), R = /* @__PURE__ */ dt(e, [
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
  const z = Tt();
  let _ = /* @__PURE__ */ ye(null), f = /* @__PURE__ */ ye(null);
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
  }[d()], E = q[l()][n()], B = {
    left: "left-0 top-0 h-full border-r",
    right: "right-0 top-0 h-full border-l",
    top: "top-0 left-0 w-full border-b",
    bottom: "bottom-0 left-0 w-full border-t"
  }, F = () => {
    const L = { duration: 300 };
    switch (n()) {
      case "left":
        return { ...L, x: -400 };
      case "right":
        return { ...L, x: 400 };
      case "top":
        return { ...L, y: -400 };
      case "bottom":
        return { ...L, y: 400 };
      default:
        return { ...L, x: 400 };
    }
  };
  function D() {
    m() || (a(!1), z("close"));
  }
  function V(L) {
    L.key === "Escape" && A() && a() && D();
  }
  function O(L) {
    p() && a() && t(f) && !t(f).contains(L.target) && D();
  }
  wt(() => (A() && document.addEventListener("keydown", V), p() && document.addEventListener("click", O), () => {
    document.removeEventListener("keydown", V), document.removeEventListener("click", O);
  })), bt(() => {
    if (a() && t(f)) {
      const L = t(f).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      L.length > 0 ? L[0].focus() : t(f).focus();
    }
  });
  var P = Se(), Q = _e(P);
  {
    var G = (L) => {
      var T = o1(), y = _e(T);
      {
        var x = (J) => {
          var Y = t1();
          Y.__click = [e1, p, D], M((le) => j(Y, 1, le, "svelte-vtlnqj"), [
            () => ne(Z("fixed inset-0 z-40", w.overlay))
          ]), $e(3, Y, () => ti, () => ({ duration: 200 })), o(J, Y);
        };
        g(y, (J) => {
          u() && J(x);
        });
      }
      var C = h(y, 2);
      Ze(
        C,
        (J) => ({
          class: J,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "drawer-title",
          ...R
        }),
        [
          () => Z("fixed z-50 flex flex-col", B[n()], E, w.drawer, I())
        ],
        void 0,
        "svelte-vtlnqj"
      );
      var X = i(C), K = i(X), k = i(K), v = i(k);
      {
        var b = (J) => {
          const Y = /* @__PURE__ */ Ee(() => e.children.header());
          var le = Se(), H = _e(le);
          ot(H, () => t(Y)), o(J, le);
        }, re = (J) => {
          var Y = r1();
          o(J, Y);
        };
        g(v, (J) => {
          typeof e.children == "object" && e.children && "header" in e.children && e.children.header ? J(b) : J(re, !1);
        });
      }
      var de = h(k, 2);
      {
        var ue = (J) => {
          var Y = a1();
          Y.__click = D;
          var le = i(Y);
          sa(le, { size: 16 }), M((H) => j(Y, 1, H, "svelte-vtlnqj"), [
            () => ne(Z("p-2 rounded-lg border transition-colors ml-4", w.closeButton))
          ]), o(J, Y);
        };
        g(de, (J) => {
          N() && !m() && J(ue);
        });
      }
      var ve = h(K, 2), $ = i(ve);
      {
        var U = (J) => {
          const Y = /* @__PURE__ */ Ee(() => e.children({ open: a(), close: D }));
          var le = Se(), H = _e(le);
          ot(H, () => t(Y)), o(J, le);
        }, oe = (J) => {
          var Y = Se(), le = _e(Y);
          {
            var H = (ae) => {
              const ce = /* @__PURE__ */ Ee(() => e.children.body({ open: a(), close: D }));
              var se = Se(), me = _e(se);
              ot(me, () => t(ce)), o(ae, se);
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
      var S = h(ve, 2);
      {
        var te = (J) => {
          const Y = /* @__PURE__ */ Ee(() => e.children.footer({ open: a(), close: D }));
          var le = n1(), H = i(le);
          ot(H, () => t(Y)), o(J, le);
        };
        g(S, (J) => {
          typeof e.children == "object" && e.children && "footer" in e.children && e.children.footer && J(te);
        });
      }
      tt(X, (J) => W(f, J), () => t(f)), tt(C, (J) => W(_, J), () => t(_)), Ie(C, (J, Y) => kt?.(J, Y), () => ({ intensity: "medium" })), $e(3, C, () => ri, F), o(L, T);
    };
    g(Q, (L) => {
      a() && L(G);
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
function Zn(r, e) {
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
  ), d = () => e.layout === "grid" ? `background-color: ${e.color.hex}` : `background-color: ${e.color.hex}; width: 2rem; height: 2rem; border-radius: 0.375rem`, u = () => {
    e.onColorClick(e.color);
  }, p = (ee) => {
    (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), e.onColorClick(e.color));
  }, A = e.animate ? {
    jellyHover: {
      enabled: e.interactive,
      duration: 200,
      scale: 1.05,
      borderRadius: "8px"
    },
    springPop: { duration: 150, delay: e.colorIndex * 20 }
  } : {};
  var N = b1();
  Ze(
    N,
    (ee, w) => ({
      type: "button",
      class: ee,
      style: w,
      onclick: u,
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
  var m = i(N);
  {
    var I = (ee) => {
      var w = l1();
      M((E) => pt(w, E), [d]), o(ee, w);
    };
    g(m, (ee) => {
      e.layout === "list" && ee(I);
    });
  }
  var R = h(m, 2);
  {
    var z = (ee) => {
      var w = d1(), E = i(w), B = i(E), F = h(E, 2);
      {
        var D = (V) => {
          var O = s1(), P = i(O);
          M(() => ie(P, e.color.hex)), o(V, O);
        };
        g(F, (V) => {
          e.showHex && V(D);
        });
      }
      M(() => ie(B, e.color.name)), o(ee, w);
    }, _ = (ee) => {
      var w = u1(), E = i(w), B = i(E), F = i(B), D = h(B, 2);
      {
        var V = (Q) => {
          var G = c1(), L = i(G);
          M(() => ie(L, e.color.hex)), o(Q, G);
        };
        g(D, (Q) => {
          e.showHex && Q(V);
        });
      }
      var O = h(E, 2);
      {
        var P = (Q) => {
          var G = v1(), L = i(G);
          M(() => ie(L, e.color.description)), o(Q, G);
        };
        g(O, (Q) => {
          e.color.description && Q(P);
        });
      }
      M(() => ie(F, e.color.name)), o(ee, w);
    };
    g(R, (ee) => {
      e.layout === "grid" ? ee(z) : ee(_, !1);
    });
  }
  var f = h(R, 2);
  {
    var q = (ee) => {
      var w = f1();
      o(ee, w);
    };
    g(f, (ee) => {
      e.copiedColor === e.color.hex && ee(q);
    });
  }
  Ie(N, (ee, w) => Mt?.(ee, w), () => e.animate ? A.jellyHover : void 0), $e(1, N, () => Ut, () => e.animate ? A.springPop : void 0), o(r, N), Xe();
}
var h1 = /* @__PURE__ */ c('<div class="mb-6"><!></div>'), m1 = /* @__PURE__ */ c('<div class="space-y-3"><h3 class="text-lg font-semibold text-white/90 border-b border-white/10 pb-2"> </h3> <div></div></div>'), p1 = /* @__PURE__ */ c("<div></div>"), x1 = /* @__PURE__ */ c("<div><!> <!></div>");
function Lp(r, e) {
  Ke(e, !0);
  const a = s(e, "theme", 3, "both"), n = s(e, "layout", 3, "grid"), l = s(e, "interactive", 3, !0), d = s(e, "showHex", 3, !0), u = s(e, "showCategories", 3, !0), p = s(e, "animate", 3, !0), A = s(e, "class", 3, ""), N = /* @__PURE__ */ dt(e, [
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
        return m;
      case "bubbleTea":
        return I;
      case "both":
      default:
        return [...m, ...I];
    }
  })(), _ = [...new Set(z.map((P) => P.category))];
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
  }, w = () => n() === "grid" ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "flex flex-col gap-2";
  var E = x1();
  Ze(E, () => ({
    class: (
      // Cleanup: removed former __markUsed scaffold and no-op $effect (unnecessary analyzer suppression)
      `space-y-6 ${A()}`
    ),
    ...N
  }));
  var B = i(E);
  {
    var F = (P) => {
      var Q = h1(), G = i(Q);
      ot(G, () => e.children), o(P, Q);
    };
    g(B, (P) => {
      e.children && P(F);
    });
  }
  var D = h(B, 2);
  {
    var V = (P) => {
      var Q = Se(), G = _e(Q);
      Ge(G, 16, () => _, (L) => L, (L, T) => {
        var y = m1(), x = i(y), C = i(x), X = h(x, 2);
        Ge(X, 21, () => z.filter((K) => K.category === T), (K) => K.hex, (K, k) => {
          {
            let v = /* @__PURE__ */ Ee(() => z.indexOf(t(k))), b = /* @__PURE__ */ Ee(() => m.includes(t(k)));
            Zn(K, {
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
                return t(v);
              },
              get isTerminal() {
                return t(b);
              },
              onColorClick: ee
            });
          }
        }), M(
          (K) => {
            ie(C, T), j(X, 1, K);
          },
          [() => ne(w())]
        ), o(L, y);
      }), o(P, Q);
    }, O = (P) => {
      var Q = p1();
      Ge(Q, 21, () => z, (G) => G.hex, (G, L) => {
        {
          let T = /* @__PURE__ */ Ee(() => z.indexOf(t(L))), y = /* @__PURE__ */ Ee(() => m.includes(t(L)));
          Zn(G, {
            get color() {
              return t(L);
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
              return t(y);
            },
            onColorClick: ee
          });
        }
      }), M((G) => j(Q, 1, G), [() => ne(w())]), o(P, Q);
    };
    g(D, (P) => {
      u() ? P(V) : P(O, !1);
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
  const a = s(e, "variant", 3, "bubbleTea"), n = s(e, "color", 3, "pink"), l = s(e, "intensity", 3, "normal"), d = s(e, "animate", 3, !0), u = s(e, "pulse", 3, !1), p = s(e, "class", 3, ""), A = /* @__PURE__ */ dt(e, [
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
  ]), m = Z((() => {
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
  })(), d() && "hover:scale-105", u() && "animate-pulse", p());
  var I = _1();
  Ze(I, () => ({ class: m, ...A }), void 0, void 0, "svelte-1s7z1ns");
  var R = i(I);
  {
    var z = (f) => {
      var q = Se(), ee = _e(q);
      ot(ee, () => e.children), o(f, q);
    }, _ = (f) => {
      var q = Se(), ee = _e(q);
      {
        var w = (E) => {
          var B = Ct();
          M(() => ie(B, e.text)), o(E, B);
        };
        g(
          ee,
          (E) => {
            e.text && E(w);
          },
          !0
        );
      }
      o(f, q);
    };
    g(R, (f) => {
      e.children ? f(z) : f(_, !1);
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
function Rp(r, e) {
  Ke(e, !0), Qe(r, T1);
  const a = s(e, "status", 3, "Ready"), n = s(e, "encoding", 3, "UTF-8"), l = s(e, "position", 3, "1:1"), d = s(e, "lineNumber", 3, 1), u = s(e, "columnNumber", 3, 1), p = s(e, "fileType", 3, "TypeScript"), A = s(e, "variant", 3, "bubbleTea"), N = s(e, "size", 3, "md"), m = s(e, "indicators", 19, () => []), I = s(e, "class", 3, ""), R = s(e, "autoLayout", 3, !0), z = /* @__PURE__ */ dt(e, [
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
  let _;
  wt(() => {
    if (R() && _) {
      const $ = () => {
        const oe = _.offsetHeight;
        document.documentElement.style.setProperty("--status-bar-height", `${oe}px`);
      };
      $();
      const U = new ResizeObserver($);
      return U.observe(_), () => {
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
        return A() === "bubbleTea" ? "text-bubble-tea-red" : "text-red-400";
      case "warning":
        return A() === "bubbleTea" ? "text-bubble-tea-yellow" : "text-yellow-400";
      case "success":
        return A() === "bubbleTea" ? "text-bubble-tea-green" : "text-green-400";
      default:
        return f[A()].text;
    }
  }, w = f[A()], E = Z("fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm", A() === "bubbleTea" ? "rounded-t-bubble-tea" : "rounded-t-lg", A() === "bubbleTea" ? "status-bar-bubble-tea" : "", w.background, q[N()]), B = Z(E, I());
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
  var D = i(F), V = i(D), O = i(V), P = i(O), Q = h(O, 2);
  {
    var G = ($) => {
      var U = y1(), oe = _e(U), S = h(oe, 2), te = i(S);
      M(
        (J, Y) => {
          j(oe, 1, J, "svelte-chof7v"), j(S, 1, Y, "svelte-chof7v"), ie(te, p());
        },
        [
          () => ne(Z("text-xs", w.accent)),
          () => ne(Z("text-xs", w.accent))
        ]
      ), o($, U);
    };
    g(Q, ($) => {
      p() && $(G);
    });
  }
  var L = h(V, 2);
  {
    var T = ($) => {
      var U = C1();
      Ge(U, 21, m, (oe) => oe.label, (oe, S) => {
        var te = k1(), J = i(te), Y = i(J), le = h(J, 2), H = i(le);
        M(
          (ae, ce) => {
            j(J, 1, ae, "svelte-chof7v"), ie(Y, `${t(S).label ?? ""}:`), j(le, 1, ce, "svelte-chof7v"), ie(H, t(S).value);
          },
          [
            () => ne(Z("text-xs font-medium", ee(t(S).type))),
            () => ne(Z("text-xs", w.text))
          ]
        ), o(oe, te);
      }), M((oe) => j(U, 1, oe, "svelte-chof7v"), [
        () => ne(Z("hidden sm:flex items-center gap-3 border-l pl-4", w.separator))
      ]), o($, U);
    };
    g(L, ($) => {
      m().length > 0 && $(T);
    });
  }
  var y = h(D, 2), x = i(y), C = i(x), X = i(C), K = h(C, 2), k = h(K, 2), v = i(k), b = h(x, 2), re = i(b), de = i(re), ue = h(b, 2);
  {
    var ve = ($) => {
      var U = E1(), oe = i(U);
      ot(oe, () => e.children), M((S) => j(U, 1, S, "svelte-chof7v"), [() => ne(Z("border-l pl-4", w.separator))]), o($, U);
    };
    g(ue, ($) => {
      e.children && $(ve);
    });
  }
  tt(F, ($) => _ = $, () => _), M(
    ($, U, oe, S, te) => {
      j(O, 1, $, "svelte-chof7v"), ie(P, a()), j(C, 1, U, "svelte-chof7v"), ie(X, `Line ${d() ?? ""}, Col ${u() ?? ""}`), j(K, 1, oe, "svelte-chof7v"), j(k, 1, S, "svelte-chof7v"), ie(v, n()), j(re, 1, te, "svelte-chof7v"), ie(de, l());
    },
    [
      () => ne(Z("font-medium", w.text)),
      () => ne(Z("text-xs", w.accent)),
      () => ne(Z("text-xs", w.accent)),
      () => ne(Z("text-xs", w.accent)),
      () => ne(Z("text-xs", w.accent))
    ]
  ), o(r, F), Xe();
}
export {
  cp as $,
  D1 as A,
  j1 as B,
  $t as C,
  N1 as D,
  O1 as E,
  q1 as F,
  H1 as G,
  V1 as H,
  gd as I,
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
  hp as a5,
  mp as a6,
  pp as a7,
  xp as a8,
  _p as a9,
  pd as aA,
  xd as aB,
  _d as aC,
  _n as aD,
  wd as aE,
  yd as aF,
  kd as aG,
  Cd as aH,
  B1 as aI,
  ft as aJ,
  Mt as aK,
  kt as aL,
  Ut as aM,
  ht as aN,
  Rt as aO,
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
  Rp as ao,
  qt as ap,
  ei as aq,
  Mu as ar,
  Au as as,
  zu as at,
  op as au,
  ip as av,
  lp as aw,
  Me as ax,
  hd as ay,
  md as az,
  s as b,
  st as c,
  i as d,
  Ge as e,
  c as f,
  h as g,
  tt as h,
  g as i,
  mr as j,
  t as k,
  o as l,
  Xe as m,
  W as n,
  ne as o,
  Ke as p,
  Z as q,
  j as r,
  ye as s,
  M as t,
  ie as u,
  vt as v,
  Se as w,
  _e as x,
  ot as y,
  R1 as z
};
