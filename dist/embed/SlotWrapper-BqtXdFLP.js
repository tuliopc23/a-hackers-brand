typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const nt = Symbol(), At = !1;
var fe = Array.prototype.indexOf, xt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor;
function j(t) {
  return typeof t == "function";
}
function se() {
  var t, e, n = new Promise((r, f) => {
    t = r, e = f;
  });
  return { promise: n, resolve: t, reject: e };
}
const x = 2, Dt = 4, ue = 8, rt = 16, F = 32, q = 64, Nt = 128, T = 256, Z = 512, w = 1024, k = 2048, A = 4096, R = 8192, L = 16384, Ot = 32768, lt = 65536, ie = 1 << 18, pt = 1 << 19, Pt = 1 << 20, ct = 1 << 21, It = 1 << 22, D = 1 << 23, ae = Symbol("$state"), oe = Symbol("legacy props"), ht = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ce() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ve() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _e() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Mt(t) {
  return t === this.v;
}
let pe = !1, S = null;
function J(t) {
  S = t;
}
function he(t, e = !1, n) {
  S = {
    p: S,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function de(t) {
  var e = (
    /** @type {ComponentContext} */
    S
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ne(r);
  }
  return S = e.p, /** @type {T} */
  {};
}
function me() {
  return !0;
}
const we = /* @__PURE__ */ new WeakMap();
function ge(t) {
  var e = o;
  if (e === null)
    return _.f |= D, t;
  if ((e.f & Ot) === 0) {
    if ((e.f & Nt) === 0)
      throw !e.parent && t instanceof Error && qt(t), t;
    e.b.error(t);
  } else
    dt(t, e);
}
function dt(t, e) {
  for (; e !== null; ) {
    if ((e.f & Nt) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && qt(t), t;
}
function qt(t) {
  const e = we.get(t);
  e && (xt(t, "message", {
    value: e.message
  }), xt(t, "stack", {
    value: e.stack
  }));
}
function Ee() {
  for (var t = (
    /** @type {Effect} */
    o.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && ce(), t;
}
// @__NO_SIDE_EFFECTS__
function be(t) {
  var e = x | k, n = _ !== null && (_.f & x) !== 0 ? (
    /** @type {Derived} */
    _
  ) : null;
  return o === null || n !== null && (n.f & T) !== 0 ? e |= T : o.f |= pt, {
    ctx: S,
    deps: null,
    effects: null,
    equals: Mt,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      nt
    ),
    wv: 0,
    parent: n ?? o,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ye(t, e) {
  let n = (
    /** @type {Effect | null} */
    o
  );
  n === null && ve();
  var r = (
    /** @type {Boundary} */
    n.b
  ), f = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Re(
    /** @type {V} */
    nt
  ), s = null, i = !_;
  return Oe(() => {
    try {
      var u = t();
    } catch (d) {
      u = Promise.reject(d);
    }
    var a = () => u;
    f = s?.then(a, a) ?? Promise.resolve(u), s = f;
    var c = (
      /** @type {Batch} */
      h
    ), p = r.pending;
    i && (r.update_pending_count(1), p || c.increment());
    const v = (d, g = void 0) => {
      s = null, p || c.activate(), g ? g !== ht && (l.f |= D, Ct(l, g)) : ((l.f & D) !== 0 && (l.f ^= D), Ct(l, d)), i && (r.update_pending_count(-1), p || c.decrement()), Ut();
    };
    if (f.then(v, (d) => v(null, d || "unknown")), c)
      return () => {
        queueMicrotask(() => c.neuter());
      };
  }), new Promise((u) => {
    function a(c) {
      function p() {
        c === f ? u(l) : a(f);
      }
      c.then(p, p);
    }
    a(f);
  });
}
function Lt(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      W(
        /** @type {Effect} */
        e[n]
      );
  }
}
function xe(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & x) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function mt(t) {
  var e, n = o;
  $(xe(t));
  try {
    Lt(t), e = ne(t);
  } finally {
    $(n);
  }
  return e;
}
function jt(t) {
  var e = mt(t);
  if (t.equals(e) || (t.v = e, t.wv = te()), !G)
    if (M !== null)
      M.set(t, t.v);
    else {
      var n = (C || (t.f & T) !== 0) && t.deps !== null ? A : w;
      b(t, n);
    }
}
function ke(t, e, n) {
  const r = be;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var f = h, l = (
    /** @type {Effect} */
    o
  ), s = Te(), i = Ee();
  Promise.all(e.map((u) => /* @__PURE__ */ ye(u))).then((u) => {
    f?.activate(), s();
    try {
      n([...t.map(r), ...u]);
    } catch (a) {
      (l.f & L) === 0 && dt(a, l);
    }
    f?.deactivate(), Ut();
  }).catch((u) => {
    i.error(u);
  });
}
function Te() {
  var t = o, e = _, n = S;
  return function() {
    $(t), X(e), J(n);
  };
}
function Ut() {
  $(null), X(null), J(null);
}
const U = /* @__PURE__ */ new Set();
let h = null, M = null, Tt = /* @__PURE__ */ new Set(), Q = [];
function Yt() {
  const t = (
    /** @type {() => void} */
    Q.shift()
  );
  Q.length > 0 && queueMicrotask(Yt), t();
}
let H = [], wt = null, vt = !1;
class z {
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
  #l = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #t = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #a = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #o = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #r = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #e = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #u = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #v = [];
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
    H = [];
    var n = null;
    if (U.size > 1) {
      n = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
      for (const [l, s] of this.current)
        n.set(l, { v: l.v, wv: l.wv }), l.v = s;
      for (const l of U)
        if (l !== this)
          for (const [s, i] of l.#l)
            n.has(s) || (n.set(s, { v: s.v, wv: s.wv }), s.v = i);
    }
    for (const l of e)
      this.#p(l);
    if (this.#n.length === 0 && this.#t === 0) {
      this.#_();
      var r = this.#r, f = this.#e;
      this.#r = [], this.#e = [], this.#u = [], h = null, St(r), St(f), h === null ? h = this : U.delete(this), this.#a?.resolve();
    } else
      this.#i(this.#r), this.#i(this.#e), this.#i(this.#u);
    if (n) {
      for (const [l, { v: s, wv: i }] of n)
        l.wv <= i && (l.v = s);
      M = null;
    }
    for (const l of this.#n)
      V(l);
    for (const l of this.#s)
      V(l);
    this.#n = [], this.#s = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #p(e) {
    e.f ^= w;
    for (var n = e.first; n !== null; ) {
      var r = n.f, f = (r & (F | q)) !== 0, l = f && (r & w) !== 0, s = l || (r & R) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (f)
          n.f ^= w;
        else if ((r & w) === 0)
          if ((r & Dt) !== 0)
            this.#e.push(n);
          else if ((r & It) !== 0) {
            var i = n.b?.pending ? this.#s : this.#n;
            i.push(n);
          } else ft(n) && ((n.f & rt) !== 0 && this.#u.push(n), V(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var a = n.parent;
      for (n = n.next; n === null && a !== null; )
        n = a.next, a = a.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #i(e) {
    for (const n of e)
      ((n.f & k) !== 0 ? this.#c : this.#v).push(n), b(n, w);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.#l.has(e) || this.#l.set(e, n), this.current.set(e, e.v);
  }
  activate() {
    h = this;
  }
  deactivate() {
    h = null;
    for (const e of Tt)
      if (Tt.delete(e), e(), h !== null)
        break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    H.length > 0 ? Se() : this.#_(), h === this && (this.#t === 0 && U.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #_() {
    if (!this.#o)
      for (const e of this.#f)
        e();
    this.#f.clear();
  }
  increment() {
    this.#t += 1;
  }
  decrement() {
    if (this.#t -= 1, this.#t === 0) {
      for (const e of this.#c)
        b(e, k), O(e);
      for (const e of this.#v)
        b(e, A), O(e);
      this.#r = [], this.#e = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#f.add(e);
  }
  settled() {
    return (this.#a ??= se()).promise;
  }
  static ensure() {
    if (h === null) {
      const e = h = new z();
      U.add(h), z.enqueue(() => {
        h === e && e.flush();
      });
    }
    return h;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Q.length === 0 && queueMicrotask(Yt), Q.unshift(e);
  }
}
function Se() {
  var t = I;
  vt = !0;
  try {
    var e = 0;
    for (Rt(!0); H.length > 0; ) {
      var n = z.ensure();
      if (e++ > 1e3) {
        var r, f;
        Ce();
      }
      n.process(H), N.clear();
    }
  } finally {
    vt = !1, Rt(t), wt = null;
  }
}
function Ce() {
  try {
    _e();
  } catch (t) {
    dt(t, wt);
  }
}
function St(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (L | R)) === 0 && ft(r)) {
        var f = h ? h.current.size : 0;
        if (V(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Zt(r) : r.fn = null), h !== null && h.current.size > f && (r.f & Pt) !== 0)
          break;
      }
    }
    for (; n < e; )
      O(t[n++]);
  }
}
function O(t) {
  for (var e = wt = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (vt && e === o && (n & rt) !== 0)
      return;
    if ((n & (q | F)) !== 0) {
      if ((n & w) === 0) return;
      e.f ^= w;
    }
  }
  H.push(e);
}
const N = /* @__PURE__ */ new Map();
function Re(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Mt,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ct(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    G ? N.set(t, e) : N.set(t, n), t.v = e;
    var r = z.ensure();
    r.capture(t, n), (t.f & x) !== 0 && ((t.f & k) !== 0 && mt(
      /** @type {Derived} */
      t
    ), b(t, (t.f & T) === 0 ? w : A)), t.wv = te(), Bt(t, k), o !== null && (o.f & w) !== 0 && (o.f & (F | q)) === 0 && (y === null ? Le([t]) : y.push(t));
  }
  return e;
}
function Bt(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, f = 0; f < r; f++) {
      var l = n[f], s = l.f, i = (s & k) === 0;
      i && b(l, e), (s & x) !== 0 ? Bt(
        /** @type {Derived} */
        l,
        A
      ) : i && O(
        /** @type {Effect} */
        l
      );
    }
}
var Fe, Ae;
function gt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Y(t) {
  return Fe.call(t);
}
// @__NO_SIDE_EFFECTS__
function Vt(t) {
  return Ae.call(t);
}
function it(t, e) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Y(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Vt(n) : n;
  }
}
function Ht() {
  return !1;
}
function De(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function K(t, e, n, r = !0) {
  var f = o;
  f !== null && (f.f & R) !== 0 && (t |= R);
  var l = {
    ctx: S,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | k,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: f,
    b: f && f.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      V(l), l.f |= Ot;
    } catch (u) {
      throw W(l), u;
    }
  else e !== null && O(l);
  var s = n && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & pt) === 0;
  if (!s && r && (f !== null && De(l, f), _ !== null && (_.f & x) !== 0 && (t & q) === 0)) {
    var i = (
      /** @type {Derived} */
      _
    );
    (i.effects ??= []).push(l);
  }
  return l;
}
function Ne(t) {
  return K(Dt | Pt, t, !1);
}
function Oe(t) {
  return K(It | pt, t, !0);
}
function Pe(t, e = [], n = []) {
  ke(e, n, (r) => {
    K(ue, () => t(...r.map(Ue)), !0);
  });
}
function zt(t, e = 0) {
  var n = K(rt | e, t, !0);
  return n;
}
function _t(t, e = !0) {
  return K(F, t, !0, e);
}
function Kt(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = G, r = _;
    Ft(!0), X(null);
    try {
      e.call(null);
    } finally {
      Ft(n), X(r);
    }
  }
}
function Wt(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    n.ac?.abort(ht);
    var r = n.next;
    (n.f & q) !== 0 ? n.parent = null : W(n, e), n = r;
  }
}
function Ie(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & F) === 0 && W(e), e = n;
  }
}
function W(t, e = !0) {
  var n = !1;
  (e || (t.f & ie) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Gt(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Wt(t, e && !n), et(t, 0), b(t, L);
  var r = t.transitions;
  if (r !== null)
    for (const l of r)
      l.stop();
  Kt(t);
  var f = t.parent;
  f !== null && f.first !== null && Zt(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Gt(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(t)
    );
    t.remove(), t = n;
  }
}
function Zt(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Jt(t, e) {
  var n = [];
  Qt(t, n, !0), Me(n, () => {
    W(t), e && e();
  });
}
function Me(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var f of t)
      f.out(r);
  } else
    e();
}
function Qt(t, e, n) {
  if ((t.f & R) === 0) {
    if (t.f ^= R, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var f = r.next, l = (r.f & lt) !== 0 || (r.f & F) !== 0;
      Qt(r, e, l ? n : !1), r = f;
    }
  }
}
function qe(t) {
  Xt(t, !0);
}
function Xt(t, e) {
  if ((t.f & R) !== 0) {
    t.f ^= R, (t.f & w) === 0 && (b(t, k), O(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, f = (n.f & lt) !== 0 || (n.f & F) !== 0;
      Xt(n, f ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || e) && l.in();
  }
}
let I = !1;
function Rt(t) {
  I = t;
}
let G = !1;
function Ft(t) {
  G = t;
}
let _ = null, P = !1;
function X(t) {
  _ = t;
}
let o = null;
function $(t) {
  o = t;
}
let B = null, m = null, E = 0, y = null;
function Le(t) {
  y = t;
}
let $t = 1, tt = 0, C = !1;
function te() {
  return ++$t;
}
function ft(t) {
  var e = t.f;
  if ((e & k) !== 0)
    return !0;
  if ((e & A) !== 0) {
    var n = t.deps, r = (e & T) !== 0;
    if (n !== null) {
      var f, l, s = (e & Z) !== 0, i = r && o !== null && !C, u = n.length;
      if ((s || i) && (o === null || (o.f & L) === 0)) {
        var a = (
          /** @type {Derived} */
          t
        ), c = a.parent;
        for (f = 0; f < u; f++)
          l = n[f], (s || !l?.reactions?.includes(a)) && (l.reactions ??= []).push(a);
        s && (a.f ^= Z), i && c !== null && (c.f & T) === 0 && (a.f ^= T);
      }
      for (f = 0; f < u; f++)
        if (l = n[f], ft(
          /** @type {Derived} */
          l
        ) && jt(
          /** @type {Derived} */
          l
        ), l.wv > t.wv)
          return !0;
    }
    (!r || o !== null && !C) && b(t, w);
  }
  return !1;
}
function ee(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !B?.includes(t))
    for (var f = 0; f < r.length; f++) {
      var l = r[f];
      (l.f & x) !== 0 ? ee(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (n ? b(l, k) : (l.f & w) !== 0 && b(l, A), O(
        /** @type {Effect} */
        l
      ));
    }
}
function ne(t) {
  var e = m, n = E, r = y, f = _, l = C, s = B, i = S, u = P, a = t.f;
  m = /** @type {null | Value[]} */
  null, E = 0, y = null, C = (a & T) !== 0 && (P || !I || _ === null), _ = (a & (F | q)) === 0 ? t : null, B = null, J(t.ctx), P = !1, ++tt, t.ac !== null && (t.ac.abort(ht), t.ac = null);
  try {
    t.f |= ct;
    var c = (
      /** @type {Function} */
      (0, t.fn)()
    ), p = t.deps;
    if (m !== null) {
      var v;
      if (et(t, E), p !== null && E > 0)
        for (p.length = E + m.length, v = 0; v < m.length; v++)
          p[E + v] = m[v];
      else
        t.deps = p = m;
      if (!C || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (a & x) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = E; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && E < p.length && (et(t, E), p.length = E);
    if (me() && y !== null && !P && p !== null && (t.f & (x | A | k)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      y.length; v++)
        ee(
          y[v],
          /** @type {Effect} */
          t
        );
    return f !== null && f !== t && (tt++, y !== null && (r === null ? r = y : r.push(.../** @type {Source[]} */
    y))), (t.f & D) !== 0 && (t.f ^= D), c;
  } catch (d) {
    return ge(d);
  } finally {
    t.f ^= ct, m = e, E = n, y = r, _ = f, C = l, B = s, J(i), P = u;
  }
}
function je(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = fe.call(n, t);
    if (r !== -1) {
      var f = n.length - 1;
      f === 0 ? n = e.reactions = null : (n[r] = n[f], n.pop());
    }
  }
  n === null && (e.f & x) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (m === null || !m.includes(e)) && (b(e, A), (e.f & (T | Z)) === 0 && (e.f ^= Z), Lt(
    /** @type {Derived} **/
    e
  ), et(
    /** @type {Derived} **/
    e,
    0
  ));
}
function et(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      je(t, n[r]);
}
function V(t) {
  var e = t.f;
  if ((e & L) === 0) {
    b(t, w);
    var n = o, r = I;
    o = t, I = !0;
    try {
      (e & rt) !== 0 ? Ie(t) : Wt(t), Kt(t);
      var f = ne(t);
      t.teardown = typeof f == "function" ? f : null, t.wv = $t;
      var l;
      At && pe && (t.f & k) !== 0 && t.deps;
    } finally {
      I = r, o = n;
    }
  }
}
function Ue(t) {
  var e = t.f, n = (e & x) !== 0;
  if (_ !== null && !P) {
    var r = o !== null && (o.f & L) !== 0;
    if (!r && !B?.includes(t)) {
      var f = _.deps;
      if ((_.f & ct) !== 0)
        t.rv < tt && (t.rv = tt, m === null && f !== null && f[E] === t ? E++ : m === null ? m = [t] : (!C || !m.includes(t)) && m.push(t));
      else {
        (_.deps ??= []).push(t);
        var l = t.reactions;
        l === null ? t.reactions = [_] : l.includes(_) || l.push(_);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), i = s.parent;
    i !== null && (i.f & T) === 0 && (s.f ^= T);
  }
  if (G) {
    if (N.has(t))
      return N.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var u = s.v;
      return ((s.f & w) === 0 && s.reactions !== null || re(s)) && (u = mt(s)), N.set(s, u), u;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, M?.has(s))
      return M.get(s);
    ft(s) && jt(s);
  }
  if ((t.f & D) !== 0)
    throw t.v;
  return t.v;
}
function re(t) {
  if (t.v === nt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (N.has(e) || (e.f & x) !== 0 && re(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
const Ye = -7169;
function b(t, e) {
  t.f = t.f & Ye | e;
}
function Be(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function le(t, e) {
  var n = (
    /** @type {Effect} */
    o
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
function at() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = gt();
  return t.append(e, n), le(e, n), t;
}
function ot(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Ve(t, e, n = !1) {
  var r = t, f = null, l = null, s = nt, i = n ? lt : 0, u = !1;
  const a = (d, g = !0) => {
    u = !0, v(g, d);
  };
  var c = null;
  function p() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var d = s ? f : l, g = s ? l : f;
    d && qe(d), g && Jt(g, () => {
      s ? l = null : f = null;
    });
  }
  const v = (d, g) => {
    if (s !== (s = d)) {
      var Et = Ht(), st = r;
      if (Et && (c = document.createDocumentFragment(), c.append(st = gt())), s ? f ??= g && _t(() => g(st)) : l ??= g && _t(() => g(st)), Et) {
        var ut = (
          /** @type {Batch} */
          h
        ), bt = s ? f : l, yt = s ? l : f;
        bt && ut.skipped_effects.delete(bt), yt && ut.skipped_effects.add(yt), ut.add_callback(p);
      } else
        p();
    }
  };
  zt(() => {
    u = !1, e(a), u || v(null, null);
  }, i);
}
function He(t, e, n = !1, r = !1, f = !1) {
  var l = t, s = "";
  Pe(() => {
    var i = (
      /** @type {Effect} */
      o
    );
    if (s !== (s = e() ?? "") && (i.nodes_start !== null && (Gt(
      i.nodes_start,
      /** @type {TemplateNode} */
      i.nodes_end
    ), i.nodes_start = i.nodes_end = null), s !== "")) {
      var u = s + "";
      n ? u = `<svg>${u}</svg>` : r && (u = `<math>${u}</math>`);
      var a = Be(u);
      if ((n || r) && (a = /** @type {Element} */
      /* @__PURE__ */ Y(a)), le(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Y(a),
        /** @type {TemplateNode} */
        a.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Y(a); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ Y(a)
          );
      else
        l.before(a);
    }
  });
}
function ze(t, e, n) {
  var r = t, f, l, s = null, i = null;
  function u() {
    l && (Jt(l), l = null), s && (s.lastChild.remove(), r.before(s), s = null), l = i, i = null;
  }
  zt(() => {
    if (f !== (f = e())) {
      var a = Ht();
      if (f) {
        var c = r;
        a && (s = document.createDocumentFragment(), s.append(c = gt())), i = _t(() => n(c, f));
      }
      a ? h.add_callback(u) : u();
    }
  }, lt);
}
const Ke = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (j(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let f = t.props[r];
      j(f) && (f = f());
      const l = kt(f, e);
      if (l && l.set)
        return l.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (j(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const f = kt(r, e);
        return f && !f.configurable && (f.configurable = !0), f;
      }
    }
  },
  has(t, e) {
    if (e === ae || e === oe) return !1;
    for (let n of t.props)
      if (j(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (j(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function We(...t) {
  return new Proxy({ props: t }, Ke);
}
function Ze(t, e) {
  he(e, !0);
  var n = at(), r = it(n);
  {
    var f = (l) => {
      var s = at(), i = it(s);
      ze(i, () => e.component, (u, a) => {
        a(u, We(() => e.props || {}, {
          children: (c, p) => {
            var v = at(), d = it(v);
            He(d, () => e.slotHTML || ""), ot(c, v);
          },
          $$slots: { default: !0 }
        }));
      }), ot(l, s);
    };
    Ve(r, (l) => {
      e.component && l(f);
    });
  }
  ot(t, n), de();
}
export {
  Ze as default
};
