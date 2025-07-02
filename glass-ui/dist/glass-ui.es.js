import { jsx as x, jsxs as re, Fragment as et } from "react/jsx-runtime";
import * as c from "react";
import Re, { useLayoutEffect as Fo, useState as Wo, forwardRef as Bo, createElement as yn } from "react";
import * as wt from "react-dom";
import Vo from "react-dom";
function wn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Gn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = wn(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : wn(e[o], null);
        }
      };
  };
}
function K(...e) {
  return c.useCallback(Gn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = /* @__PURE__ */ zo(e), n = c.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = c.Children.toArray(i), l = s.find(Uo);
    if (l) {
      const d = l.props.children, f = s.map((p) => p === l ? c.Children.count(d) > 1 ? c.Children.only(null) : c.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ x(t, { ...a, ref: o, children: c.isValidElement(d) ? c.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ x(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var $o = /* @__PURE__ */ Ve("Slot");
// @__NO_SIDE_EFFECTS__
function zo(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (c.isValidElement(o)) {
      const a = Go(o), s = jo(i, o.props);
      return o.type !== c.Fragment && (s.ref = r ? Gn(r, a) : a), c.cloneElement(o, s);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ho = Symbol("radix.slottable");
function Uo(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ho;
}
function jo(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Go(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Kn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Kn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Yn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Kn(e)) && (r && (r += " "), r += t);
  return r;
}
const xn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Cn = Yn, ke = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Cn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], p = i == null ? void 0 : i[d];
    if (f === null) return null;
    const g = xn(f) || xn(p);
    return o[d][g];
  }), s = n && Object.entries(n).reduce((d, f) => {
    let [p, g] = f;
    return g === void 0 || (d[p] = g), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: p, className: g, ...h } = f;
    return Object.entries(h).every((y) => {
      let [u, m] = y;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...s
      }[u]) : {
        ...i,
        ...s
      }[u] === m;
    }) ? [
      ...d,
      p,
      g
    ] : d;
  }, []);
  return Cn(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Jt = "-", Ko = (e) => {
  const t = Xo(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Jt);
      return s[0] === "" && s.length !== 1 && s.shift(), Xn(s, t) || Yo(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = n[a] || [];
      return s && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, Xn = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Xn(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Jt);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, Sn = /^\[(.+)\]$/, Yo = (e) => {
  if (Sn.test(e)) {
    const t = Sn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Xo = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Zo(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    $t(a, r, i, t);
  }), r;
}, $t = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : En(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (qo(o)) {
        $t(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      $t(a, En(t, i), n, r);
    });
  });
}, En = (e, t) => {
  let n = e;
  return t.split(Jt).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, qo = (e) => e.isThemeGetter, Zo = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [n, o];
}) : e, Qo = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}, qn = "!", Jo = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const l = [];
    let d = 0, f = 0, p;
    for (let m = 0; m < s.length; m++) {
      let b = s[m];
      if (d === 0) {
        if (b === o && (r || s.slice(m, m + i) === t)) {
          l.push(s.slice(f, m)), f = m + i;
          continue;
        }
        if (b === "/") {
          p = m;
          continue;
        }
      }
      b === "[" ? d++ : b === "]" && d--;
    }
    const g = l.length === 0 ? s : s.substring(f), h = g.startsWith(qn), y = h ? g.substring(1) : g, u = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: y,
      maybePostfixModifierPosition: u
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: a
  }) : a;
}, ei = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, ti = (e) => ({
  cache: Qo(e.cacheSize),
  parseClassName: Jo(e),
  ...Ko(e)
}), ni = /\s+/, ri = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(ni);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const d = a[l], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = n(d);
    let y = !!h, u = r(y ? g.substring(0, h) : g);
    if (!u) {
      if (!y) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (u = r(g), !u) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      y = !1;
    }
    const m = ei(f).join(":"), b = p ? m + qn : m, v = b + u;
    if (i.includes(v))
      continue;
    i.push(v);
    const w = o(u, y);
    for (let C = 0; C < w.length; ++C) {
      const S = w[C];
      i.push(b + S);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function oi() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Zn(t)) && (r && (r += " "), r += n);
  return r;
}
const Zn = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Zn(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ii(e, ...t) {
  let n, r, o, i = a;
  function a(l) {
    const d = t.reduce((f, p) => p(f), e());
    return n = ti(d), r = n.cache.get, o = n.cache.set, i = s, s(l);
  }
  function s(l) {
    const d = r(l);
    if (d)
      return d;
    const f = ri(l, n);
    return o(l, f), f;
  }
  return function() {
    return i(oi.apply(null, arguments));
  };
}
const j = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Qn = /^\[(?:([a-z-]+):)?(.+)\]$/i, si = /^\d+\/\d+$/, ai = /* @__PURE__ */ new Set(["px", "full", "screen"]), ci = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, li = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, di = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ui = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pe = (e) => Le(e) || ai.has(e) || si.test(e), ve = (e) => ze(e, "length", wi), Le = (e) => !!e && !Number.isNaN(Number(e)), kt = (e) => ze(e, "number", Le), Ze = (e) => !!e && Number.isInteger(Number(e)), pi = (e) => e.endsWith("%") && Le(e.slice(0, -1)), O = (e) => Qn.test(e), be = (e) => ci.test(e), mi = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gi = (e) => ze(e, mi, Jn), hi = (e) => ze(e, "position", Jn), vi = /* @__PURE__ */ new Set(["image", "url"]), bi = (e) => ze(e, vi, Ci), yi = (e) => ze(e, "", xi), Qe = () => !0, ze = (e, t, n) => {
  const r = Qn.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, wi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  li.test(e) && !di.test(e)
), Jn = () => !1, xi = (e) => ui.test(e), Ci = (e) => fi.test(e), Si = () => {
  const e = j("colors"), t = j("spacing"), n = j("blur"), r = j("brightness"), o = j("borderColor"), i = j("borderRadius"), a = j("borderSpacing"), s = j("borderWidth"), l = j("contrast"), d = j("grayscale"), f = j("hueRotate"), p = j("invert"), g = j("gap"), h = j("gradientColorStops"), y = j("gradientColorStopPositions"), u = j("inset"), m = j("margin"), b = j("opacity"), v = j("padding"), w = j("saturate"), C = j("scale"), S = j("sepia"), R = j("skew"), E = j("space"), T = j("translate"), D = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", O, t], A = () => [O, t], L = () => ["", pe, ve], M = () => ["auto", Le, O], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], k = () => ["solid", "dashed", "dotted", "double", "none"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", O], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [Le, O];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qe],
      spacing: [pe, ve],
      blur: ["none", "", be, O],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", be, O],
      borderSpacing: A(),
      borderWidth: L(),
      contrast: X(),
      grayscale: F(),
      hueRotate: X(),
      invert: F(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [pi, ve],
      inset: W(),
      margin: W(),
      opacity: X(),
      padding: A(),
      saturate: X(),
      scale: X(),
      sepia: F(),
      skew: X(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", O]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [be]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...$(), O]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [u]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [u]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [u]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [u]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [u]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [u]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [u]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [u]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [u]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ze, O]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ze, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ze, O]
        }, O]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Qe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ze, O]
        }, O]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...P()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...P(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [E]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [O, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [O, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [be]
        }, be]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [O, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", be, ve]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qe]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Le, kt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pe, O]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", O]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...k(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", pe, ve]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pe, O]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...$(), hi]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", gi]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...k(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: k()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...k()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pe, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [pe, ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [pe, ve]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", be, yi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [..._(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", be, O]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: X()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: X()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", O]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ze, O]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [pe, ve, kt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Ei = /* @__PURE__ */ ii(Si);
function Y(...e) {
  return Ei(Yn(e));
}
const Ri = ke(
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-foreground border border-white/20 hover:bg-white/20 shadow-lg",
        primary: "bg-primary/90 text-primary-foreground hover:bg-primary shadow-lg",
        secondary: "bg-secondary/90 text-secondary-foreground hover:bg-secondary shadow-lg",
        outline: "border border-input bg-white/5 hover:bg-white/10 hover:text-accent-foreground",
        ghost: "hover:bg-white/10 hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary bg-transparent",
        glass: "bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 shadow-xl",
        "glass-dark": "bg-black/10 border border-black/20 backdrop-blur-md hover:bg-black/20 shadow-xl"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ai = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ x(
    r ? $o : "button",
    {
      className: Y(Ri({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  )
);
Ai.displayName = "Button";
const Pi = ke(
  "flex w-full rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "h-10 border border-input bg-background px-3 py-2",
        filled: "h-10 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-2 hover:bg-white/20",
        outline: "h-10 border-2 border-input bg-transparent px-3 py-2 focus:border-primary",
        ghost: "h-10 bg-transparent border-none px-3 py-2 hover:bg-white/5",
        glass: "h-10 bg-white/5 border border-white/20 backdrop-blur-md px-3 py-2 shadow-lg",
        "glass-dark": "h-10 bg-black/5 border border-black/20 backdrop-blur-md px-3 py-2 shadow-lg"
      },
      inputSize: {
        default: "h-10",
        sm: "h-9 text-xs",
        lg: "h-12 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default"
    }
  }
), Ni = c.forwardRef(
  ({ className: e, variant: t, inputSize: n, type: r, ...o }, i) => /* @__PURE__ */ x(
    "input",
    {
      type: r,
      className: Y(Pi({ variant: t, inputSize: n, className: e })),
      ref: i,
      ...o
    }
  )
);
Ni.displayName = "Input";
const Ti = ke(
  "flex min-h-[80px] w-full rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border border-input bg-background px-3 py-2",
        filled: "bg-white/10 border border-white/20 backdrop-blur-md px-3 py-2 hover:bg-white/20",
        outline: "border-2 border-input bg-transparent px-3 py-2 focus:border-primary",
        ghost: "bg-transparent border-none px-3 py-2 hover:bg-white/5",
        glass: "bg-white/5 border border-white/20 backdrop-blur-md px-3 py-2 shadow-lg",
        "glass-dark": "bg-black/5 border border-black/20 backdrop-blur-md px-3 py-2 shadow-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Oi = c.forwardRef(
  ({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ x(
    "textarea",
    {
      className: Y(Ti({ variant: t, className: e })),
      ref: r,
      ...n
    }
  )
);
Oi.displayName = "Textarea";
const ki = ke(
  "rounded-lg text-card-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border bg-card shadow-sm",
        glass: "bg-white/10 border border-white/20 backdrop-blur-md shadow-xl",
        "glass-dark": "bg-black/10 border border-black/20 backdrop-blur-md shadow-xl",
        elevated: "bg-card shadow-lg border",
        outline: "border-2 bg-transparent",
        ghost: "shadow-none border-none bg-transparent"
      },
      blur: {
        none: "",
        sm: "backdrop-blur-sm",
        md: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
        xl: "backdrop-blur-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      blur: "none"
    }
  }
), Mi = c.forwardRef(
  ({ className: e, variant: t, blur: n, ...r }, o) => /* @__PURE__ */ x(
    "div",
    {
      ref: o,
      className: Y(ki({ variant: t, blur: n, className: e })),
      ...r
    }
  )
);
Mi.displayName = "Card";
const Ii = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  "div",
  {
    ref: n,
    className: Y("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Ii.displayName = "CardHeader";
const Di = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  "h3",
  {
    ref: n,
    className: Y(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Di.displayName = "CardTitle";
const _i = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x("div", { ref: n, className: Y("p-6 pt-0", e), ...t }));
_i.displayName = "CardContent";
const Li = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  "div",
  {
    ref: n,
    className: Y("flex items-center p-6 pt-0", e),
    ...t
  }
));
Li.displayName = "CardFooter";
const Fi = ke(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "border border-input text-foreground",
        glass: "bg-white/10 text-foreground border border-white/20 backdrop-blur-md shadow-lg",
        "glass-dark": "bg-black/10 text-foreground border border-black/20 backdrop-blur-md shadow-lg",
        success: "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
        warning: "border-transparent bg-yellow-500 text-black shadow hover:bg-yellow-600",
        info: "border-transparent bg-blue-500 text-white shadow hover:bg-blue-600"
      },
      size: {
        default: "h-6 px-2.5 text-xs",
        sm: "h-5 px-2 text-xs",
        lg: "h-7 px-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function El({ className: e, variant: t, size: n, ...r }) {
  return /* @__PURE__ */ x("div", { className: Y(Fi({ variant: t, size: n }), e), ...r });
}
function Rn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Wi(e, t) {
  const n = c.createContext(t), r = (i) => {
    const { children: a, ...s } = i, l = c.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ x(n.Provider, { value: l, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = c.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function xt(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = c.createContext(a), l = n.length;
    n = [...n, a];
    const d = (p) => {
      var b;
      const { scope: g, children: h, ...y } = p, u = ((b = g == null ? void 0 : g[e]) == null ? void 0 : b[l]) || s, m = c.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ x(u.Provider, { value: m, children: h });
    };
    d.displayName = i + "Provider";
    function f(p, g) {
      var u;
      const h = ((u = g == null ? void 0 : g[e]) == null ? void 0 : u[l]) || s, y = c.useContext(h);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [d, f];
  }
  const o = () => {
    const i = n.map((a) => c.createContext(a));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, Bi(o, ...t)];
}
function Bi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: l, scopeName: d }) => {
        const p = l(i)[`__scope${d}`];
        return { ...s, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Vi(e) {
  const t = e + "CollectionProvider", [n, r] = xt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (u) => {
    const { scope: m, children: b } = u, v = Re.useRef(null), w = Re.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x(o, { scope: m, itemMap: w, collectionRef: v, children: b });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ Ve(s), d = Re.forwardRef(
    (u, m) => {
      const { scope: b, children: v } = u, w = i(s, b), C = K(m, w.collectionRef);
      return /* @__PURE__ */ x(l, { ref: C, children: v });
    }
  );
  d.displayName = s;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", g = /* @__PURE__ */ Ve(f), h = Re.forwardRef(
    (u, m) => {
      const { scope: b, children: v, ...w } = u, C = Re.useRef(null), S = K(m, C), R = i(f, b);
      return Re.useEffect(() => (R.itemMap.set(C, { ref: C, ...w }), () => void R.itemMap.delete(C))), /* @__PURE__ */ x(g, { [p]: "", ref: S, children: v });
    }
  );
  h.displayName = f;
  function y(u) {
    const m = i(e + "CollectionConsumer", u);
    return Re.useCallback(() => {
      const v = m.collectionRef.current;
      if (!v) return [];
      const w = Array.from(v.querySelectorAll(`[${p}]`));
      return Array.from(m.itemMap.values()).sort(
        (R, E) => w.indexOf(R.ref.current) - w.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: h },
    y,
    r
  ];
}
var $i = c.createContext(void 0);
function zi(e) {
  const t = c.useContext($i);
  return e || t || "ltr";
}
var Hi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], H = Hi.reduce((e, t) => {
  const n = /* @__PURE__ */ Ve(`Primitive.${t}`), r = c.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ui(e, t) {
  e && wt.flushSync(() => e.dispatchEvent(t));
}
function Ae(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ji(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Gi = "DismissableLayer", zt = "dismissableLayer.update", Ki = "dismissableLayer.pointerDownOutside", Yi = "dismissableLayer.focusOutside", An, er = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), en = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...l
    } = e, d = c.useContext(er), [f, p] = c.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = c.useState({}), y = K(t, (E) => p(E)), u = Array.from(d.layers), [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = u.indexOf(m), v = f ? u.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, C = v >= b, S = Zi((E) => {
      const T = E.target, D = [...d.branches].some((I) => I.contains(T));
      !C || D || (o == null || o(E), a == null || a(E), E.defaultPrevented || s == null || s());
    }, g), R = Qi((E) => {
      const T = E.target;
      [...d.branches].some((I) => I.contains(T)) || (i == null || i(E), a == null || a(E), E.defaultPrevented || s == null || s());
    }, g);
    return ji((E) => {
      v === d.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, g), c.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (An = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Pn(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = An);
        };
    }, [f, g, n, d]), c.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Pn());
    }, [f, d]), c.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(zt, E), () => document.removeEventListener(zt, E);
    }, []), /* @__PURE__ */ x(
      H.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: G(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
en.displayName = Gi;
var Xi = "DismissableLayerBranch", qi = c.forwardRef((e, t) => {
  const n = c.useContext(er), r = c.useRef(null), o = K(t, r);
  return c.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ x(H.div, { ...e, ref: o });
});
qi.displayName = Xi;
function Zi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          tr(
            Ki,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Qi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && tr(Yi, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Pn() {
  const e = new CustomEvent(zt);
  document.dispatchEvent(e);
}
function tr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ui(o, i) : o.dispatchEvent(i);
}
var Mt = 0;
function nr() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Nn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Nn()), Mt++, () => {
      Mt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Mt--;
    };
  }, []);
}
function Nn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var It = "focusScope.autoFocusOnMount", Dt = "focusScope.autoFocusOnUnmount", Tn = { bubbles: !1, cancelable: !0 }, Ji = "FocusScope", tn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, l] = c.useState(null), d = Ae(o), f = Ae(i), p = c.useRef(null), g = K(t, (u) => l(u)), h = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let u = function(w) {
        if (h.paused || !s) return;
        const C = w.target;
        s.contains(C) ? p.current = C : ye(p.current, { select: !0 });
      }, m = function(w) {
        if (h.paused || !s) return;
        const C = w.relatedTarget;
        C !== null && (s.contains(C) || ye(p.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const S of w)
            S.removedNodes.length > 0 && ye(s);
      };
      document.addEventListener("focusin", u), document.addEventListener("focusout", m);
      const v = new MutationObserver(b);
      return s && v.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", u), document.removeEventListener("focusout", m), v.disconnect();
      };
    }
  }, [r, s, h.paused]), c.useEffect(() => {
    if (s) {
      kn.add(h);
      const u = document.activeElement;
      if (!s.contains(u)) {
        const b = new CustomEvent(It, Tn);
        s.addEventListener(It, d), s.dispatchEvent(b), b.defaultPrevented || (es(is(rr(s)), { select: !0 }), document.activeElement === u && ye(s));
      }
      return () => {
        s.removeEventListener(It, d), setTimeout(() => {
          const b = new CustomEvent(Dt, Tn);
          s.addEventListener(Dt, f), s.dispatchEvent(b), b.defaultPrevented || ye(u ?? document.body, { select: !0 }), s.removeEventListener(Dt, f), kn.remove(h);
        }, 0);
      };
    }
  }, [s, d, f, h]);
  const y = c.useCallback(
    (u) => {
      if (!n && !r || h.paused) return;
      const m = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, b = document.activeElement;
      if (m && b) {
        const v = u.currentTarget, [w, C] = ts(v);
        w && C ? !u.shiftKey && b === C ? (u.preventDefault(), n && ye(w, { select: !0 })) : u.shiftKey && b === w && (u.preventDefault(), n && ye(C, { select: !0 })) : b === v && u.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ x(H.div, { tabIndex: -1, ...a, ref: g, onKeyDown: y });
});
tn.displayName = Ji;
function es(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ye(r, { select: t }), document.activeElement !== n) return;
}
function ts(e) {
  const t = rr(e), n = On(t, e), r = On(t.reverse(), e);
  return [n, r];
}
function rr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function On(e, t) {
  for (const n of e)
    if (!ns(n, { upTo: t })) return n;
}
function ns(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ye(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && rs(e) && t && e.select();
  }
}
var kn = os();
function os() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Mn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Mn(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Mn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function is(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Q = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, ss = c[" useId ".trim().toString()] || (() => {
}), as = 0;
function Fe(e) {
  const [t, n] = c.useState(ss());
  return Q(() => {
    n((r) => r ?? String(as++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const cs = ["top", "right", "bottom", "left"], we = Math.min, ee = Math.max, mt = Math.round, it = Math.floor, de = (e) => ({
  x: e,
  y: e
}), ls = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ds = {
  start: "end",
  end: "start"
};
function Ht(e, t, n) {
  return ee(e, we(t, n));
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ge(e) {
  return e.split("-")[0];
}
function He(e) {
  return e.split("-")[1];
}
function nn(e) {
  return e === "x" ? "y" : "x";
}
function rn(e) {
  return e === "y" ? "height" : "width";
}
function le(e) {
  return ["top", "bottom"].includes(ge(e)) ? "y" : "x";
}
function on(e) {
  return nn(le(e));
}
function us(e, t, n) {
  n === void 0 && (n = !1);
  const r = He(e), o = on(e), i = rn(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = gt(a)), [a, gt(a)];
}
function fs(e) {
  const t = gt(e);
  return [Ut(e), t, Ut(t)];
}
function Ut(e) {
  return e.replace(/start|end/g, (t) => ds[t]);
}
function ps(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function ms(e, t, n, r) {
  const o = He(e);
  let i = ps(ge(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Ut)))), i;
}
function gt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ls[t]);
}
function gs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function or(e) {
  return typeof e != "number" ? gs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ht(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function In(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = le(t), a = on(t), s = rn(a), l = ge(t), d = i === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[s] / 2 - o[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (He(t)) {
    case "start":
      h[a] -= g * (n && d ? -1 : 1);
      break;
    case "end":
      h[a] += g * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const hs = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = In(d, r, l), g = r, h = {}, y = 0;
  for (let u = 0; u < s.length; u++) {
    const {
      name: m,
      fn: b
    } = s[u], {
      x: v,
      y: w,
      data: C,
      reset: S
    } = await b({
      x: f,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: h,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = v ?? f, p = w ?? p, h = {
      ...h,
      [m]: {
        ...h[m],
        ...C
      }
    }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (d = S.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: f,
      y: p
    } = In(d, g, l)), u = -1);
  }
  return {
    x: f,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: h
  };
};
async function tt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: h = 0
  } = me(t, e), y = or(h), m = s[g ? p === "floating" ? "reference" : "floating" : p], b = ht(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), v = p === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ht(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: v,
    offsetParent: w,
    strategy: l
  }) : v);
  return {
    top: (b.top - S.top + y.top) / C.y,
    bottom: (S.bottom - b.bottom + y.bottom) / C.y,
    left: (b.left - S.left + y.left) / C.x,
    right: (S.right - b.right + y.right) / C.x
  };
}
const vs = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: l
    } = t, {
      element: d,
      padding: f = 0
    } = me(e, t) || {};
    if (d == null)
      return {};
    const p = or(f), g = {
      x: n,
      y: r
    }, h = on(o), y = rn(h), u = await a.getDimensions(d), m = h === "y", b = m ? "top" : "left", v = m ? "bottom" : "right", w = m ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[h] - g[h] - i.floating[y], S = g[h] - i.reference[h], R = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let E = R ? R[w] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(R))) && (E = s.floating[w] || i.floating[y]);
    const T = C / 2 - S / 2, D = E / 2 - u[y] / 2 - 1, I = we(p[b], D), W = we(p[v], D), A = I, L = E - u[y] - W, M = E / 2 - u[y] / 2 + T, $ = Ht(A, M, L), k = !l.arrow && He(o) != null && M !== $ && i.reference[y] / 2 - (M < A ? I : W) - u[y] / 2 < 0, _ = k ? M < A ? M - A : M - L : 0;
    return {
      [h]: g[h] + _,
      data: {
        [h]: $,
        centerOffset: M - $ - _,
        ...k && {
          alignmentOffset: _
        }
      },
      reset: k
    };
  }
}), bs = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: u = !0,
        ...m
      } = me(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = ge(o), v = le(s), w = ge(s) === s, C = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), S = g || (w || !u ? [gt(s)] : fs(s)), R = y !== "none";
      !g && R && S.push(...ms(s, u, y, C));
      const E = [s, ...S], T = await tt(t, m), D = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && D.push(T[b]), p) {
        const M = us(o, a, C);
        D.push(T[M[0]], T[M[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: D
      }], !D.every((M) => M <= 0)) {
        var W, A;
        const M = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1, $ = E[M];
        if ($ && (!(p === "alignment" ? v !== le($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((P) => P.overflows[0] > 0 && le(P.placement) === v)))
          return {
            data: {
              index: M,
              overflows: I
            },
            reset: {
              placement: $
            }
          };
        let k = (A = I.filter((_) => _.overflows[0] <= 0).sort((_, P) => _.overflows[1] - P.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!k)
          switch (h) {
            case "bestFit": {
              var L;
              const _ = (L = I.filter((P) => {
                if (R) {
                  const F = le(P.placement);
                  return F === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, q) => F + q, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : L[0];
              _ && (k = _);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function Dn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _n(e) {
  return cs.some((t) => e[t] >= 0);
}
const ys = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = me(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await tt(t, {
            ...o,
            elementContext: "reference"
          }), a = Dn(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: _n(a)
            }
          };
        }
        case "escaped": {
          const i = await tt(t, {
            ...o,
            altBoundary: !0
          }), a = Dn(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: _n(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ws(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = ge(n), s = He(n), l = le(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, f = i && l ? -1 : 1, p = me(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof y == "number" && (h = s === "end" ? y * -1 : y), l ? {
    x: h * f,
    y: g * d
  } : {
    x: g * d,
    y: h * f
  };
}
const xs = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, l = await ws(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, Cs = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (m) => {
            let {
              x: b,
              y: v
            } = m;
            return {
              x: b,
              y: v
            };
          }
        },
        ...l
      } = me(e, t), d = {
        x: n,
        y: r
      }, f = await tt(t, l), p = le(ge(o)), g = nn(p);
      let h = d[g], y = d[p];
      if (i) {
        const m = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", v = h + f[m], w = h - f[b];
        h = Ht(v, h, w);
      }
      if (a) {
        const m = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", v = y + f[m], w = y - f[b];
        y = Ht(v, y, w);
      }
      const u = s.fn({
        ...t,
        [g]: h,
        [p]: y
      });
      return {
        ...u,
        data: {
          x: u.x - n,
          y: u.y - r,
          enabled: {
            [g]: i,
            [p]: a
          }
        }
      };
    }
  };
}, Ss = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = me(e, t), f = {
        x: n,
        y: r
      }, p = le(o), g = nn(p);
      let h = f[g], y = f[p];
      const u = me(s, t), m = typeof u == "number" ? {
        mainAxis: u,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...u
      };
      if (l) {
        const w = g === "y" ? "height" : "width", C = i.reference[g] - i.floating[w] + m.mainAxis, S = i.reference[g] + i.reference[w] - m.mainAxis;
        h < C ? h = C : h > S && (h = S);
      }
      if (d) {
        var b, v;
        const w = g === "y" ? "width" : "height", C = ["top", "left"].includes(ge(o)), S = i.reference[p] - i.floating[w] + (C && ((b = a.offset) == null ? void 0 : b[p]) || 0) + (C ? 0 : m.crossAxis), R = i.reference[p] + i.reference[w] + (C ? 0 : ((v = a.offset) == null ? void 0 : v[p]) || 0) - (C ? m.crossAxis : 0);
        y < S ? y = S : y > R && (y = R);
      }
      return {
        [g]: h,
        [p]: y
      };
    }
  };
}, Es = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...d
      } = me(e, t), f = await tt(t, d), p = ge(o), g = He(o), h = le(o) === "y", {
        width: y,
        height: u
      } = i.floating;
      let m, b;
      p === "top" || p === "bottom" ? (m = p, b = g === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, m = g === "end" ? "top" : "bottom");
      const v = u - f.top - f.bottom, w = y - f.left - f.right, C = we(u - f[m], v), S = we(y - f[b], w), R = !t.middlewareData.shift;
      let E = C, T = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w), (r = t.middlewareData.shift) != null && r.enabled.y && (E = v), R && !g) {
        const I = ee(f.left, 0), W = ee(f.right, 0), A = ee(f.top, 0), L = ee(f.bottom, 0);
        h ? T = y - 2 * (I !== 0 || W !== 0 ? I + W : ee(f.left, f.right)) : E = u - 2 * (A !== 0 || L !== 0 ? A + L : ee(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const D = await a.getDimensions(s.floating);
      return y !== D.width || u !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ct() {
  return typeof window < "u";
}
function Ue(e) {
  return ir(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fe(e) {
  var t;
  return (t = (ir(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ir(e) {
  return Ct() ? e instanceof Node || e instanceof te(e).Node : !1;
}
function oe(e) {
  return Ct() ? e instanceof Element || e instanceof te(e).Element : !1;
}
function ue(e) {
  return Ct() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : !1;
}
function Ln(e) {
  return !Ct() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
function rt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Rs(e) {
  return ["table", "td", "th"].includes(Ue(e));
}
function St(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function sn(e) {
  const t = an(), n = oe(e) ? ie(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function As(e) {
  let t = xe(e);
  for (; ue(t) && !$e(t); ) {
    if (sn(t))
      return t;
    if (St(t))
      return null;
    t = xe(t);
  }
  return null;
}
function an() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function $e(e) {
  return ["html", "body", "#document"].includes(Ue(e));
}
function ie(e) {
  return te(e).getComputedStyle(e);
}
function Et(e) {
  return oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function xe(e) {
  if (Ue(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ln(e) && e.host || // Fallback.
    fe(e)
  );
  return Ln(t) ? t.host : t;
}
function sr(e) {
  const t = xe(e);
  return $e(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && rt(t) ? t : sr(t);
}
function nt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = sr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = te(o);
  if (i) {
    const s = jt(a);
    return t.concat(a, a.visualViewport || [], rt(o) ? o : [], s && n ? nt(s) : []);
  }
  return t.concat(o, nt(o, [], n));
}
function jt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ar(e) {
  const t = ie(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = mt(n) !== i || mt(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function cn(e) {
  return oe(e) ? e : e.contextElement;
}
function We(e) {
  const t = cn(e);
  if (!ue(t))
    return de(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ar(t);
  let a = (i ? mt(n.width) : n.width) / r, s = (i ? mt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Ps = /* @__PURE__ */ de(0);
function cr(e) {
  const t = te(e);
  return !an() || !t.visualViewport ? Ps : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ns(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = cn(e);
  let a = de(1);
  t && (r ? oe(r) && (a = We(r)) : a = We(e));
  const s = Ns(i, n, r) ? cr(i) : de(0);
  let l = (o.left + s.x) / a.x, d = (o.top + s.y) / a.y, f = o.width / a.x, p = o.height / a.y;
  if (i) {
    const g = te(i), h = r && oe(r) ? te(r) : r;
    let y = g, u = jt(y);
    for (; u && r && h !== y; ) {
      const m = We(u), b = u.getBoundingClientRect(), v = ie(u), w = b.left + (u.clientLeft + parseFloat(v.paddingLeft)) * m.x, C = b.top + (u.clientTop + parseFloat(v.paddingTop)) * m.y;
      l *= m.x, d *= m.y, f *= m.x, p *= m.y, l += w, d += C, y = te(u), u = jt(y);
    }
  }
  return ht({
    width: f,
    height: p,
    x: l,
    y: d
  });
}
function ln(e, t) {
  const n = Et(e).scrollLeft;
  return t ? t.left + n : Pe(fe(e)).left + n;
}
function lr(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ln(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Ts(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = fe(r), s = t ? St(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = de(1);
  const f = de(0), p = ue(r);
  if ((p || !p && !i) && ((Ue(r) !== "body" || rt(a)) && (l = Et(r)), ue(r))) {
    const h = Pe(r);
    d = We(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const g = a && !p && !i ? lr(a, l, !0) : de(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + g.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + g.y
  };
}
function Os(e) {
  return Array.from(e.getClientRects());
}
function ks(e) {
  const t = fe(e), n = Et(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ln(e);
  const s = -n.scrollTop;
  return ie(r).direction === "rtl" && (a += ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Ms(e, t) {
  const n = te(e), r = fe(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const d = an();
    (!d || d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Is(e, t) {
  const n = Pe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ue(e) ? We(e) : de(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, d = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: d
  };
}
function Fn(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ms(e, n);
  else if (t === "document")
    r = ks(fe(e));
  else if (oe(t))
    r = Is(t, n);
  else {
    const o = cr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ht(r);
}
function dr(e, t) {
  const n = xe(e);
  return n === t || !oe(n) || $e(n) ? !1 : ie(n).position === "fixed" || dr(n, t);
}
function Ds(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = nt(e, [], !1).filter((s) => oe(s) && Ue(s) !== "body"), o = null;
  const i = ie(e).position === "fixed";
  let a = i ? xe(e) : e;
  for (; oe(a) && !$e(a); ) {
    const s = ie(a), l = sn(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || rt(a) && !l && dr(e, a)) ? r = r.filter((f) => f !== a) : o = s, a = xe(a);
  }
  return t.set(e, r), r;
}
function _s(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? St(t) ? [] : Ds(t, this._c) : [].concat(n), r], s = a[0], l = a.reduce((d, f) => {
    const p = Fn(t, f, o);
    return d.top = ee(p.top, d.top), d.right = we(p.right, d.right), d.bottom = we(p.bottom, d.bottom), d.left = ee(p.left, d.left), d;
  }, Fn(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ls(e) {
  const {
    width: t,
    height: n
  } = ar(e);
  return {
    width: t,
    height: n
  };
}
function Fs(e, t, n) {
  const r = ue(t), o = fe(t), i = n === "fixed", a = Pe(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = de(0);
  function d() {
    l.x = ln(o);
  }
  if (r || !r && !i)
    if ((Ue(t) !== "body" || rt(o)) && (s = Et(t)), r) {
      const h = Pe(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && d();
  i && !r && o && d();
  const f = o && !r && !i ? lr(o, s) : de(0), p = a.left + s.scrollLeft - l.x - f.x, g = a.top + s.scrollTop - l.y - f.y;
  return {
    x: p,
    y: g,
    width: a.width,
    height: a.height
  };
}
function _t(e) {
  return ie(e).position === "static";
}
function Wn(e, t) {
  if (!ue(e) || ie(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return fe(e) === n && (n = n.ownerDocument.body), n;
}
function ur(e, t) {
  const n = te(e);
  if (St(e))
    return n;
  if (!ue(e)) {
    let o = xe(e);
    for (; o && !$e(o); ) {
      if (oe(o) && !_t(o))
        return o;
      o = xe(o);
    }
    return n;
  }
  let r = Wn(e, t);
  for (; r && Rs(r) && _t(r); )
    r = Wn(r, t);
  return r && $e(r) && _t(r) && !sn(r) ? n : r || As(e) || n;
}
const Ws = async function(e) {
  const t = this.getOffsetParent || ur, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Fs(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Bs(e) {
  return ie(e).direction === "rtl";
}
const Vs = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ts,
  getDocumentElement: fe,
  getClippingRect: _s,
  getOffsetParent: ur,
  getElementRects: Ws,
  getClientRects: Os,
  getDimensions: Ls,
  getScale: We,
  isElement: oe,
  isRTL: Bs
};
function fr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $s(e, t) {
  let n = null, r;
  const o = fe(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: g,
      height: h
    } = d;
    if (s || t(), !g || !h)
      return;
    const y = it(p), u = it(o.clientWidth - (f + g)), m = it(o.clientHeight - (p + h)), b = it(f), w = {
      rootMargin: -y + "px " + -u + "px " + -m + "px " + -b + "px",
      threshold: ee(0, we(1, l)) || 1
    };
    let C = !0;
    function S(R) {
      const E = R[0].intersectionRatio;
      if (E !== l) {
        if (!C)
          return a();
        E ? a(!1, E) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !fr(d, e.getBoundingClientRect()) && a(), C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function zs(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = cn(e), f = o || i ? [...d ? nt(d) : [], ...nt(t)] : [];
  f.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const p = d && s ? $s(d, n) : null;
  let g = -1, h = null;
  a && (h = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === d && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let y, u = l ? Pe(e) : null;
  l && m();
  function m() {
    const b = Pe(e);
    u && !fr(u, b) && n(), u = b, y = requestAnimationFrame(m);
  }
  return n(), () => {
    var b;
    f.forEach((v) => {
      o && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), p == null || p(), (b = h) == null || b.disconnect(), h = null, l && cancelAnimationFrame(y);
  };
}
const Hs = xs, Us = Cs, js = bs, Gs = Es, Ks = ys, Bn = vs, Ys = Ss, Xs = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Vs,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return hs(e, t, {
    ...o,
    platform: i
  });
};
var qs = typeof document < "u", Zs = function() {
}, ut = qs ? Fo : Zs;
function vt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!vt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !vt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vn(e, t) {
  const n = pr(e);
  return Math.round(t * n) / n;
}
function Lt(e) {
  const t = c.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function Qs(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: d
  } = e, [f, p] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, h] = c.useState(r);
  vt(g, r) || h(r);
  const [y, u] = c.useState(null), [m, b] = c.useState(null), v = c.useCallback((P) => {
    P !== R.current && (R.current = P, u(P));
  }, []), w = c.useCallback((P) => {
    P !== E.current && (E.current = P, b(P));
  }, []), C = i || y, S = a || m, R = c.useRef(null), E = c.useRef(null), T = c.useRef(f), D = l != null, I = Lt(l), W = Lt(o), A = Lt(d), L = c.useCallback(() => {
    if (!R.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: g
    };
    W.current && (P.platform = W.current), Xs(R.current, E.current, P).then((F) => {
      const q = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      M.current && !vt(T.current, q) && (T.current = q, wt.flushSync(() => {
        p(q);
      }));
    });
  }, [g, t, n, W, A]);
  ut(() => {
    d === !1 && T.current.isPositioned && (T.current.isPositioned = !1, p((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [d]);
  const M = c.useRef(!1);
  ut(() => (M.current = !0, () => {
    M.current = !1;
  }), []), ut(() => {
    if (C && (R.current = C), S && (E.current = S), C && S) {
      if (I.current)
        return I.current(C, S, L);
      L();
    }
  }, [C, S, L, I, D]);
  const $ = c.useMemo(() => ({
    reference: R,
    floating: E,
    setReference: v,
    setFloating: w
  }), [v, w]), k = c.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), _ = c.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return P;
    const F = Vn(k.floating, f.x), q = Vn(k.floating, f.y);
    return s ? {
      ...P,
      transform: "translate(" + F + "px, " + q + "px)",
      ...pr(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: q
    };
  }, [n, s, k.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: L,
    refs: $,
    elements: k,
    floatingStyles: _
  }), [f, L, $, k, _]);
}
const Js = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Bn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Bn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ea = (e, t) => ({
  ...Hs(e),
  options: [e, t]
}), ta = (e, t) => ({
  ...Us(e),
  options: [e, t]
}), na = (e, t) => ({
  ...Ys(e),
  options: [e, t]
}), ra = (e, t) => ({
  ...js(e),
  options: [e, t]
}), oa = (e, t) => ({
  ...Gs(e),
  options: [e, t]
}), ia = (e, t) => ({
  ...Ks(e),
  options: [e, t]
}), sa = (e, t) => ({
  ...Js(e),
  options: [e, t]
});
var aa = "Arrow", mr = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ x(
    H.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ x("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
mr.displayName = aa;
var ca = mr;
function la(e) {
  const [t, n] = c.useState(void 0);
  return Q(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          a = d.inlineSize, s = d.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        n({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var dn = "Popper", [gr, hr] = xt(dn), [da, vr] = gr(dn), br = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ x(da, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
br.displayName = dn;
var yr = "PopperAnchor", wr = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = vr(yr, n), a = c.useRef(null), s = K(t, a);
    return c.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ x(H.div, { ...o, ref: s });
  }
);
wr.displayName = yr;
var un = "PopperContent", [ua, fa] = gr(un), xr = c.forwardRef(
  (e, t) => {
    var N, U, Z, z, B, V;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: y,
      ...u
    } = e, m = vr(un, n), [b, v] = c.useState(null), w = K(t, (J) => v(J)), [C, S] = c.useState(null), R = la(C), E = (R == null ? void 0 : R.width) ?? 0, T = (R == null ? void 0 : R.height) ?? 0, D = r + (i !== "center" ? "-" + i : ""), I = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, W = Array.isArray(d) ? d : [d], A = W.length > 0, L = {
      padding: I,
      boundary: W.filter(ma),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: M, floatingStyles: $, placement: k, isPositioned: _, middlewareData: P } = Qs({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...J) => zs(...J, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        ea({ mainAxis: o + T, alignmentAxis: a }),
        l && ta({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? na() : void 0,
          ...L
        }),
        l && ra({ ...L }),
        oa({
          ...L,
          apply: ({ elements: J, rects: ae, availableWidth: Ye, availableHeight: Xe }) => {
            const { width: qe, height: Lo } = ae.reference, ot = J.floating.style;
            ot.setProperty("--radix-popper-available-width", `${Ye}px`), ot.setProperty("--radix-popper-available-height", `${Xe}px`), ot.setProperty("--radix-popper-anchor-width", `${qe}px`), ot.setProperty("--radix-popper-anchor-height", `${Lo}px`);
          }
        }),
        C && sa({ element: C, padding: s }),
        ga({ arrowWidth: E, arrowHeight: T }),
        g && ia({ strategy: "referenceHidden", ...L })
      ]
    }), [F, q] = Er(k), X = Ae(y);
    Q(() => {
      _ && (X == null || X());
    }, [_, X]);
    const Ge = (N = P.arrow) == null ? void 0 : N.x, Ke = (U = P.arrow) == null ? void 0 : U.y, he = ((Z = P.arrow) == null ? void 0 : Z.centerOffset) !== 0, [Me, Ee] = c.useState();
    return Q(() => {
      b && Ee(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ x(
      "div",
      {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: _ ? $.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Me,
          "--radix-popper-transform-origin": [
            (z = P.transformOrigin) == null ? void 0 : z.x,
            (B = P.transformOrigin) == null ? void 0 : B.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((V = P.hide) == null ? void 0 : V.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ x(
          ua,
          {
            scope: n,
            placedSide: F,
            onArrowChange: S,
            arrowX: Ge,
            arrowY: Ke,
            shouldHideArrow: he,
            children: /* @__PURE__ */ x(
              H.div,
              {
                "data-side": F,
                "data-align": q,
                ...u,
                ref: w,
                style: {
                  ...u.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: _ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
xr.displayName = un;
var Cr = "PopperArrow", pa = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Sr = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = fa(Cr, r), a = pa[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ x(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ x(
          ca,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Sr.displayName = Cr;
function ma(e) {
  return e !== null;
}
var ga = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var m, b, v;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [d, f] = Er(n), p = { start: "0%", center: "50%", end: "100%" }[f], g = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + s / 2, h = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
    let y = "", u = "";
    return d === "bottom" ? (y = a ? p : `${g}px`, u = `${-l}px`) : d === "top" ? (y = a ? p : `${g}px`, u = `${r.floating.height + l}px`) : d === "right" ? (y = `${-l}px`, u = a ? p : `${h}px`) : d === "left" && (y = `${r.floating.width + l}px`, u = a ? p : `${h}px`), { data: { x: y, y: u } };
  }
});
function Er(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ha = br, va = wr, ba = xr, ya = Sr, wa = "Portal", fn = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = c.useState(!1);
  Q(() => i(!0), []);
  const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? Vo.createPortal(/* @__PURE__ */ x(H.div, { ...r, ref: t }), a) : null;
});
fn.displayName = wa;
var xa = c[" useInsertionEffect ".trim().toString()] || Q;
function Gt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, a] = Ca({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const p = f.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const d = c.useCallback(
    (f) => {
      var p;
      if (s) {
        const g = Sa(f) ? f(e) : f;
        g !== e && ((p = a.current) == null || p.call(a, g));
      } else
        i(f);
    },
    [s, e, i, a]
  );
  return [l, d];
}
function Ca({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), i = c.useRef(t);
  return xa(() => {
    i.current = t;
  }, [t]), c.useEffect(() => {
    var a;
    o.current !== n && ((a = i.current) == null || a.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Sa(e) {
  return typeof e == "function";
}
function Ea(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Rr = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ra = "VisuallyHidden", Aa = c.forwardRef(
  (e, t) => /* @__PURE__ */ x(
    H.span,
    {
      ...e,
      ref: t,
      style: { ...Rr, ...e.style }
    }
  )
);
Aa.displayName = Ra;
var Pa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ie = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), at = {}, Ft = 0, Ar = function(e) {
  return e && (e.host || Ar(e.parentNode));
}, Na = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ar(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ta = function(e, t, n, r) {
  var o = Na(t, Array.isArray(e) ? e : [e]);
  at[n] || (at[n] = /* @__PURE__ */ new WeakMap());
  var i = at[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), d = function(p) {
    !p || s.has(p) || (s.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (s.has(g))
        f(g);
      else
        try {
          var h = g.getAttribute(r), y = h !== null && h !== "false", u = (Ie.get(g) || 0) + 1, m = (i.get(g) || 0) + 1;
          Ie.set(g, u), i.set(g, m), a.push(g), u === 1 && y && st.set(g, !0), m === 1 && g.setAttribute(n, "true"), y || g.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", g, b);
        }
    });
  };
  return f(t), s.clear(), Ft++, function() {
    a.forEach(function(p) {
      var g = Ie.get(p) - 1, h = i.get(p) - 1;
      Ie.set(p, g), i.set(p, h), g || (st.has(p) || p.removeAttribute(r), st.delete(p)), h || p.removeAttribute(n);
    }), Ft--, Ft || (Ie = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), at = {});
  };
}, Pr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Pa(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ta(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ce = function() {
  return ce = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ce.apply(this, arguments);
};
function Nr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Oa(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position", pt = "width-before-scroll-bar", ka = "with-scroll-bars-hidden", Ma = "--removed-body-scroll-bar-size";
function Wt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ia(e, t) {
  var n = Wo(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Da = typeof window < "u" ? c.useLayoutEffect : c.useEffect, $n = /* @__PURE__ */ new WeakMap();
function _a(e, t) {
  var n = Ia(null, function(r) {
    return e.forEach(function(o) {
      return Wt(o, r);
    });
  });
  return Da(function() {
    var r = $n.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || Wt(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Wt(s, a);
      });
    }
    $n.set(n, e);
  }, [e]), n;
}
function La(e) {
  return e;
}
function Fa(e, t) {
  t === void 0 && (t = La);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var l = function() {
        var f = a;
        a = [], f.forEach(i);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(f) {
          a.push(f), d();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return o;
}
function Wa(e) {
  e === void 0 && (e = {});
  var t = Fa(null);
  return t.options = ce({ async: !0, ssr: !1 }, e), t;
}
var Tr = function(e) {
  var t = e.sideCar, n = Nr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, ce({}, n));
};
Tr.isSideCarExport = !0;
function Ba(e, t) {
  return e.useMedium(t), Tr;
}
var Or = Wa(), Bt = function() {
}, Rt = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Bt,
    onWheelCapture: Bt,
    onTouchMoveCapture: Bt
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, g = e.sideCar, h = e.noRelative, y = e.noIsolation, u = e.inert, m = e.allowPinchZoom, b = e.as, v = b === void 0 ? "div" : b, w = e.gapMode, C = Nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = g, R = _a([n, t]), E = ce(ce({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(S, { sideCar: Or, removeScrollBar: d, shards: p, noRelative: h, noIsolation: y, inert: u, setCallbacks: i, allowPinchZoom: !!m, lockRef: n, gapMode: w }),
    a ? c.cloneElement(c.Children.only(s), ce(ce({}, E), { ref: R })) : c.createElement(v, ce({}, E, { className: l, ref: R }), s)
  );
});
Rt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Rt.classNames = {
  fullWidth: pt,
  zeroRight: ft
};
var Va = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $a() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Va();
  return t && e.setAttribute("nonce", t), e;
}
function za(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ha(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ua = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = $a()) && (za(t, n), Ha(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ja = function() {
  var e = Ua();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, kr = function() {
  var e = ja(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ga = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ka = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Vt(n), Vt(r), Vt(o)];
}, Ya = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ga;
  var t = Ka(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Xa = kr(), Be = "data-scroll-locked", qa = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ka, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Be, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ft, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(pt, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ft, " .").concat(ft, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(pt, " .").concat(pt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Be, `] {
    `).concat(Ma, ": ").concat(s, `px;
  }
`);
}, zn = function() {
  var e = parseInt(document.body.getAttribute(Be) || "0", 10);
  return isFinite(e) ? e : 0;
}, Za = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Be, (zn() + 1).toString()), function() {
      var e = zn() - 1;
      e <= 0 ? document.body.removeAttribute(Be) : document.body.setAttribute(Be, e.toString());
    };
  }, []);
}, Qa = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Za();
  var i = c.useMemo(function() {
    return Ya(o);
  }, [o]);
  return c.createElement(Xa, { styles: qa(i, !t, o, n ? "" : "!important") });
}, Kt = !1;
if (typeof window < "u")
  try {
    var ct = Object.defineProperty({}, "passive", {
      get: function() {
        return Kt = !0, !0;
      }
    });
    window.addEventListener("test", ct, ct), window.removeEventListener("test", ct, ct);
  } catch {
    Kt = !1;
  }
var De = Kt ? { passive: !1 } : !1, Ja = function(e) {
  return e.tagName === "TEXTAREA";
}, Mr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ja(e) && n[t] === "visible")
  );
}, ec = function(e) {
  return Mr(e, "overflowY");
}, tc = function(e) {
  return Mr(e, "overflowX");
}, Hn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ir(e, r);
    if (o) {
      var i = Dr(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, nc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, rc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ir = function(e, t) {
  return e === "v" ? ec(t) : tc(t);
}, Dr = function(e, t) {
  return e === "v" ? nc(t) : rc(t);
}, oc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ic = function(e, t, n, r, o) {
  var i = oc(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), d = !1, f = a > 0, p = 0, g = 0;
  do {
    if (!s)
      break;
    var h = Dr(e, s), y = h[0], u = h[1], m = h[2], b = u - m - i * y;
    (y || b) && Ir(e, s) && (p += b, g += y);
    var v = s.parentNode;
    s = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(g) < 1) && (d = !0), d;
}, lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Un = function(e) {
  return [e.deltaX, e.deltaY];
}, jn = function(e) {
  return e && "current" in e ? e.current : e;
}, sc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ac = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cc = 0, _e = [];
function lc(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(cc++)[0], i = c.useState(kr)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var u = Oa([e.lockRef.current], (e.shards || []).map(jn), !0).filter(Boolean);
      return u.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), u.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(u, m) {
    if ("touches" in u && u.touches.length === 2 || u.type === "wheel" && u.ctrlKey)
      return !a.current.allowPinchZoom;
    var b = lt(u), v = n.current, w = "deltaX" in u ? u.deltaX : v[0] - b[0], C = "deltaY" in u ? u.deltaY : v[1] - b[1], S, R = u.target, E = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in u && E === "h" && R.type === "range")
      return !1;
    var T = Hn(E, R);
    if (!T)
      return !0;
    if (T ? S = E : (S = E === "v" ? "h" : "v", T = Hn(E, R)), !T)
      return !1;
    if (!r.current && "changedTouches" in u && (w || C) && (r.current = S), !S)
      return !0;
    var D = r.current || S;
    return ic(D, m, u, D === "h" ? w : C);
  }, []), l = c.useCallback(function(u) {
    var m = u;
    if (!(!_e.length || _e[_e.length - 1] !== i)) {
      var b = "deltaY" in m ? Un(m) : lt(m), v = t.current.filter(function(S) {
        return S.name === m.type && (S.target === m.target || m.target === S.shadowParent) && sc(S.delta, b);
      })[0];
      if (v && v.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!v) {
        var w = (a.current.shards || []).map(jn).filter(Boolean).filter(function(S) {
          return S.contains(m.target);
        }), C = w.length > 0 ? s(m, w[0]) : !a.current.noIsolation;
        C && m.cancelable && m.preventDefault();
      }
    }
  }, []), d = c.useCallback(function(u, m, b, v) {
    var w = { name: u, delta: m, target: b, should: v, shadowParent: dc(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), f = c.useCallback(function(u) {
    n.current = lt(u), r.current = void 0;
  }, []), p = c.useCallback(function(u) {
    d(u.type, Un(u), u.target, s(u, e.lockRef.current));
  }, []), g = c.useCallback(function(u) {
    d(u.type, lt(u), u.target, s(u, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return _e.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, De), document.addEventListener("touchmove", l, De), document.addEventListener("touchstart", f, De), function() {
      _e = _e.filter(function(u) {
        return u !== i;
      }), document.removeEventListener("wheel", l, De), document.removeEventListener("touchmove", l, De), document.removeEventListener("touchstart", f, De);
    };
  }, []);
  var h = e.removeScrollBar, y = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    y ? c.createElement(i, { styles: ac(o) }) : null,
    h ? c.createElement(Qa, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function dc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const uc = Ba(Or, lc);
var pn = c.forwardRef(function(e, t) {
  return c.createElement(Rt, ce({}, e, { ref: t, sideCar: uc }));
});
pn.classNames = Rt.classNames;
var fc = [" ", "Enter", "ArrowUp", "ArrowDown"], pc = [" ", "Enter"], Ne = "Select", [At, Pt, mc] = Vi(Ne), [je, Rl] = xt(Ne, [
  mc,
  hr
]), Nt = hr(), [gc, Ce] = je(Ne), [hc, vc] = je(Ne), _r = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: l,
    dir: d,
    name: f,
    autoComplete: p,
    disabled: g,
    required: h,
    form: y
  } = e, u = Nt(t), [m, b] = c.useState(null), [v, w] = c.useState(null), [C, S] = c.useState(!1), R = zi(d), [E, T] = Gt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Ne
  }), [D, I] = Gt({
    prop: a,
    defaultProp: s,
    onChange: l,
    caller: Ne
  }), W = c.useRef(null), A = m ? y || !!m.closest("form") : !0, [L, M] = c.useState(/* @__PURE__ */ new Set()), $ = Array.from(L).map((k) => k.props.value).join(";");
  return /* @__PURE__ */ x(ha, { ...u, children: /* @__PURE__ */ re(
    gc,
    {
      required: h,
      scope: t,
      trigger: m,
      onTriggerChange: b,
      valueNode: v,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: S,
      contentId: Fe(),
      value: D,
      onValueChange: I,
      open: E,
      onOpenChange: T,
      dir: R,
      triggerPointerDownPosRef: W,
      disabled: g,
      children: [
        /* @__PURE__ */ x(At.Provider, { scope: t, children: /* @__PURE__ */ x(
          hc,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((k) => {
              M((_) => new Set(_).add(k));
            }, []),
            onNativeOptionRemove: c.useCallback((k) => {
              M((_) => {
                const P = new Set(_);
                return P.delete(k), P;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ re(
          oo,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: D,
            onChange: (k) => I(k.target.value),
            disabled: g,
            form: y,
            children: [
              D === void 0 ? /* @__PURE__ */ x("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          $
        ) : null
      ]
    }
  ) });
};
_r.displayName = Ne;
var Lr = "SelectTrigger", Fr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Nt(n), a = Ce(Lr, n), s = a.disabled || r, l = K(t, a.onTriggerChange), d = Pt(n), f = c.useRef("touch"), [p, g, h] = so((u) => {
      const m = d().filter((w) => !w.disabled), b = m.find((w) => w.value === a.value), v = ao(m, u, b);
      v !== void 0 && a.onValueChange(v.value);
    }), y = (u) => {
      s || (a.onOpenChange(!0), h()), u && (a.triggerPointerDownPosRef.current = {
        x: Math.round(u.pageX),
        y: Math.round(u.pageY)
      });
    };
    return /* @__PURE__ */ x(va, { asChild: !0, ...i, children: /* @__PURE__ */ x(
      H.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": io(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: G(o.onClick, (u) => {
          u.currentTarget.focus(), f.current !== "mouse" && y(u);
        }),
        onPointerDown: G(o.onPointerDown, (u) => {
          f.current = u.pointerType;
          const m = u.target;
          m.hasPointerCapture(u.pointerId) && m.releasePointerCapture(u.pointerId), u.button === 0 && u.ctrlKey === !1 && u.pointerType === "mouse" && (y(u), u.preventDefault());
        }),
        onKeyDown: G(o.onKeyDown, (u) => {
          const m = p.current !== "";
          !(u.ctrlKey || u.altKey || u.metaKey) && u.key.length === 1 && g(u.key), !(m && u.key === " ") && fc.includes(u.key) && (y(), u.preventDefault());
        })
      }
    ) });
  }
);
Fr.displayName = Lr;
var Wr = "SelectValue", Br = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...s } = e, l = Ce(Wr, n), { onValueNodeHasChildrenChange: d } = l, f = i !== void 0, p = K(t, l.onValueNodeChange);
    return Q(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ x(
      H.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: io(l.value) ? /* @__PURE__ */ x(et, { children: a }) : i
      }
    );
  }
);
Br.displayName = Wr;
var bc = "SelectIcon", Vr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ x(H.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Vr.displayName = bc;
var yc = "SelectPortal", $r = (e) => /* @__PURE__ */ x(fn, { asChild: !0, ...e });
$r.displayName = yc;
var Te = "SelectContent", zr = c.forwardRef(
  (e, t) => {
    const n = Ce(Te, e.__scopeSelect), [r, o] = c.useState();
    if (Q(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? wt.createPortal(
        /* @__PURE__ */ x(Hr, { scope: e.__scopeSelect, children: /* @__PURE__ */ x(At.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ x("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ x(Ur, { ...e, ref: t });
  }
);
zr.displayName = Te;
var ne = 10, [Hr, Se] = je(Te), wc = "SelectContentImpl", xc = /* @__PURE__ */ Ve("SelectContent.RemoveScroll"), Ur = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: h,
      sticky: y,
      hideWhenDetached: u,
      avoidCollisions: m,
      //
      ...b
    } = e, v = Ce(Te, n), [w, C] = c.useState(null), [S, R] = c.useState(null), E = K(t, (N) => C(N)), [T, D] = c.useState(null), [I, W] = c.useState(
      null
    ), A = Pt(n), [L, M] = c.useState(!1), $ = c.useRef(!1);
    c.useEffect(() => {
      if (w) return Pr(w);
    }, [w]), nr();
    const k = c.useCallback(
      (N) => {
        const [U, ...Z] = A().map((V) => V.ref.current), [z] = Z.slice(-1), B = document.activeElement;
        for (const V of N)
          if (V === B || (V == null || V.scrollIntoView({ block: "nearest" }), V === U && S && (S.scrollTop = 0), V === z && S && (S.scrollTop = S.scrollHeight), V == null || V.focus(), document.activeElement !== B)) return;
      },
      [A, S]
    ), _ = c.useCallback(
      () => k([T, w]),
      [k, T, w]
    );
    c.useEffect(() => {
      L && _();
    }, [L, _]);
    const { onOpenChange: P, triggerPointerDownPosRef: F } = v;
    c.useEffect(() => {
      if (w) {
        let N = { x: 0, y: 0 };
        const U = (z) => {
          var B, V;
          N = {
            x: Math.abs(Math.round(z.pageX) - (((B = F.current) == null ? void 0 : B.x) ?? 0)),
            y: Math.abs(Math.round(z.pageY) - (((V = F.current) == null ? void 0 : V.y) ?? 0))
          };
        }, Z = (z) => {
          N.x <= 10 && N.y <= 10 ? z.preventDefault() : w.contains(z.target) || P(!1), document.removeEventListener("pointermove", U), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [w, P, F]), c.useEffect(() => {
      const N = () => P(!1);
      return window.addEventListener("blur", N), window.addEventListener("resize", N), () => {
        window.removeEventListener("blur", N), window.removeEventListener("resize", N);
      };
    }, [P]);
    const [q, X] = so((N) => {
      const U = A().filter((B) => !B.disabled), Z = U.find((B) => B.ref.current === document.activeElement), z = ao(U, N, Z);
      z && setTimeout(() => z.ref.current.focus());
    }), Ge = c.useCallback(
      (N, U, Z) => {
        const z = !$.current && !Z;
        (v.value !== void 0 && v.value === U || z) && (D(N), z && ($.current = !0));
      },
      [v.value]
    ), Ke = c.useCallback(() => w == null ? void 0 : w.focus(), [w]), he = c.useCallback(
      (N, U, Z) => {
        const z = !$.current && !Z;
        (v.value !== void 0 && v.value === U || z) && W(N);
      },
      [v.value]
    ), Me = r === "popper" ? Yt : jr, Ee = Me === Yt ? {
      side: s,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: h,
      sticky: y,
      hideWhenDetached: u,
      avoidCollisions: m
    } : {};
    return /* @__PURE__ */ x(
      Hr,
      {
        scope: n,
        content: w,
        viewport: S,
        onViewportChange: R,
        itemRefCallback: Ge,
        selectedItem: T,
        onItemLeave: Ke,
        itemTextRefCallback: he,
        focusSelectedItem: _,
        selectedItemText: I,
        position: r,
        isPositioned: L,
        searchRef: q,
        children: /* @__PURE__ */ x(pn, { as: xc, allowPinchZoom: !0, children: /* @__PURE__ */ x(
          tn,
          {
            asChild: !0,
            trapped: v.open,
            onMountAutoFocus: (N) => {
              N.preventDefault();
            },
            onUnmountAutoFocus: G(o, (N) => {
              var U;
              (U = v.trigger) == null || U.focus({ preventScroll: !0 }), N.preventDefault();
            }),
            children: /* @__PURE__ */ x(
              en,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (N) => N.preventDefault(),
                onDismiss: () => v.onOpenChange(!1),
                children: /* @__PURE__ */ x(
                  Me,
                  {
                    role: "listbox",
                    id: v.contentId,
                    "data-state": v.open ? "open" : "closed",
                    dir: v.dir,
                    onContextMenu: (N) => N.preventDefault(),
                    ...b,
                    ...Ee,
                    onPlaced: () => M(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: G(b.onKeyDown, (N) => {
                      const U = N.ctrlKey || N.altKey || N.metaKey;
                      if (N.key === "Tab" && N.preventDefault(), !U && N.key.length === 1 && X(N.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(N.key)) {
                        let z = A().filter((B) => !B.disabled).map((B) => B.ref.current);
                        if (["ArrowUp", "End"].includes(N.key) && (z = z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(N.key)) {
                          const B = N.target, V = z.indexOf(B);
                          z = z.slice(V + 1);
                        }
                        setTimeout(() => k(z)), N.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ur.displayName = wc;
var Cc = "SelectItemAlignedPosition", jr = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Ce(Te, n), a = Se(Te, n), [s, l] = c.useState(null), [d, f] = c.useState(null), p = K(t, (E) => f(E)), g = Pt(n), h = c.useRef(!1), y = c.useRef(!0), { viewport: u, selectedItem: m, selectedItemText: b, focusSelectedItem: v } = a, w = c.useCallback(() => {
    if (i.trigger && i.valueNode && s && d && u && m && b) {
      const E = i.trigger.getBoundingClientRect(), T = d.getBoundingClientRect(), D = i.valueNode.getBoundingClientRect(), I = b.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const B = I.left - T.left, V = D.left - B, J = E.left - V, ae = E.width + J, Ye = Math.max(ae, T.width), Xe = window.innerWidth - ne, qe = Rn(V, [
          ne,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ne, Xe - Ye)
        ]);
        s.style.minWidth = ae + "px", s.style.left = qe + "px";
      } else {
        const B = T.right - I.right, V = window.innerWidth - D.right - B, J = window.innerWidth - E.right - V, ae = E.width + J, Ye = Math.max(ae, T.width), Xe = window.innerWidth - ne, qe = Rn(V, [
          ne,
          Math.max(ne, Xe - Ye)
        ]);
        s.style.minWidth = ae + "px", s.style.right = qe + "px";
      }
      const W = g(), A = window.innerHeight - ne * 2, L = u.scrollHeight, M = window.getComputedStyle(d), $ = parseInt(M.borderTopWidth, 10), k = parseInt(M.paddingTop, 10), _ = parseInt(M.borderBottomWidth, 10), P = parseInt(M.paddingBottom, 10), F = $ + k + L + P + _, q = Math.min(m.offsetHeight * 5, F), X = window.getComputedStyle(u), Ge = parseInt(X.paddingTop, 10), Ke = parseInt(X.paddingBottom, 10), he = E.top + E.height / 2 - ne, Me = A - he, Ee = m.offsetHeight / 2, N = m.offsetTop + Ee, U = $ + k + N, Z = F - U;
      if (U <= he) {
        const B = W.length > 0 && m === W[W.length - 1].ref.current;
        s.style.bottom = "0px";
        const V = d.clientHeight - u.offsetTop - u.offsetHeight, J = Math.max(
          Me,
          Ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (B ? Ke : 0) + V + _
        ), ae = U + J;
        s.style.height = ae + "px";
      } else {
        const B = W.length > 0 && m === W[0].ref.current;
        s.style.top = "0px";
        const J = Math.max(
          he,
          $ + u.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (B ? Ge : 0) + Ee
        ) + Z;
        s.style.height = J + "px", u.scrollTop = U - he + u.offsetTop;
      }
      s.style.margin = `${ne}px 0`, s.style.minHeight = q + "px", s.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    g,
    i.trigger,
    i.valueNode,
    s,
    d,
    u,
    m,
    b,
    i.dir,
    r
  ]);
  Q(() => w(), [w]);
  const [C, S] = c.useState();
  Q(() => {
    d && S(window.getComputedStyle(d).zIndex);
  }, [d]);
  const R = c.useCallback(
    (E) => {
      E && y.current === !0 && (w(), v == null || v(), y.current = !1);
    },
    [w, v]
  );
  return /* @__PURE__ */ x(
    Ec,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: R,
      children: /* @__PURE__ */ x(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ x(
            H.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
jr.displayName = Cc;
var Sc = "SelectPopperPosition", Yt = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ne,
    ...i
  } = e, a = Nt(n);
  return /* @__PURE__ */ x(
    ba,
    {
      ...a,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Yt.displayName = Sc;
var [Ec, mn] = je(Te, {}), Xt = "SelectViewport", Gr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = Se(Xt, n), a = mn(Xt, n), s = K(t, i.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ re(et, { children: [
      /* @__PURE__ */ x(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ x(At.Slot, { scope: n, children: /* @__PURE__ */ x(
        H.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: G(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = a;
            if (g != null && g.current && p) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const y = window.innerHeight - ne * 2, u = parseFloat(p.style.minHeight), m = parseFloat(p.style.height), b = Math.max(u, m);
                if (b < y) {
                  const v = b + h, w = Math.min(y, v), C = v - w;
                  p.style.height = w + "px", p.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Gr.displayName = Xt;
var Kr = "SelectGroup", [Rc, Ac] = je(Kr), Yr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Fe();
    return /* @__PURE__ */ x(Rc, { scope: n, id: o, children: /* @__PURE__ */ x(H.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Yr.displayName = Kr;
var Xr = "SelectLabel", qr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ac(Xr, n);
    return /* @__PURE__ */ x(H.div, { id: o.id, ...r, ref: t });
  }
);
qr.displayName = Xr;
var bt = "SelectItem", [Pc, Zr] = je(bt), Qr = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = Ce(bt, n), l = Se(bt, n), d = s.value === r, [f, p] = c.useState(i ?? ""), [g, h] = c.useState(!1), y = K(
      t,
      (v) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, v, r, o);
      }
    ), u = Fe(), m = c.useRef("touch"), b = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ x(
      Pc,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: u,
        isSelected: d,
        onItemTextChange: c.useCallback((v) => {
          p((w) => w || ((v == null ? void 0 : v.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ x(
          At.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ x(
              H.div,
              {
                role: "option",
                "aria-labelledby": u,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": d && g,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: y,
                onFocus: G(a.onFocus, () => h(!0)),
                onBlur: G(a.onBlur, () => h(!1)),
                onClick: G(a.onClick, () => {
                  m.current !== "mouse" && b();
                }),
                onPointerUp: G(a.onPointerUp, () => {
                  m.current === "mouse" && b();
                }),
                onPointerDown: G(a.onPointerDown, (v) => {
                  m.current = v.pointerType;
                }),
                onPointerMove: G(a.onPointerMove, (v) => {
                  var w;
                  m.current = v.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : m.current === "mouse" && v.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: G(a.onPointerLeave, (v) => {
                  var w;
                  v.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: G(a.onKeyDown, (v) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && v.key === " " || (pc.includes(v.key) && b(), v.key === " " && v.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Qr.displayName = bt;
var Je = "SelectItemText", Jr = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, a = Ce(Je, n), s = Se(Je, n), l = Zr(Je, n), d = vc(Je, n), [f, p] = c.useState(null), g = K(
      t,
      (b) => p(b),
      l.onItemTextChange,
      (b) => {
        var v;
        return (v = s.itemTextRefCallback) == null ? void 0 : v.call(s, b, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, y = c.useMemo(
      () => /* @__PURE__ */ x("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: u, onNativeOptionRemove: m } = d;
    return Q(() => (u(y), () => m(y)), [u, m, y]), /* @__PURE__ */ re(et, { children: [
      /* @__PURE__ */ x(H.span, { id: l.textId, ...i, ref: g }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? wt.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
Jr.displayName = Je;
var eo = "SelectItemIndicator", to = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Zr(eo, n).isSelected ? /* @__PURE__ */ x(H.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
to.displayName = eo;
var qt = "SelectScrollUpButton", Nc = c.forwardRef((e, t) => {
  const n = Se(qt, e.__scopeSelect), r = mn(qt, e.__scopeSelect), [o, i] = c.useState(!1), a = K(t, r.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const d = l.scrollTop > 0;
        i(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ x(
    no,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Nc.displayName = qt;
var Zt = "SelectScrollDownButton", Tc = c.forwardRef((e, t) => {
  const n = Se(Zt, e.__scopeSelect), r = mn(Zt, e.__scopeSelect), [o, i] = c.useState(!1), a = K(t, r.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        i(f);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ x(
    no,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Tc.displayName = Zt;
var no = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Se("SelectScrollButton", n), a = c.useRef(null), s = Pt(n), l = c.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), Q(() => {
    var f;
    const d = s().find((p) => p.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ x(
    H.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: G(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: G(o.onPointerMove, () => {
        var d;
        (d = i.onItemLeave) == null || d.call(i), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: G(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Oc = "SelectSeparator", ro = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ x(H.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ro.displayName = Oc;
var Qt = "SelectArrow", kc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Nt(n), i = Ce(Qt, n), a = Se(Qt, n);
    return i.open && a.position === "popper" ? /* @__PURE__ */ x(ya, { ...o, ...r, ref: t }) : null;
  }
);
kc.displayName = Qt;
var Mc = "SelectBubbleInput", oo = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = c.useRef(null), i = K(r, o), a = Ea(t);
    return c.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(p);
      }
    }, [a, t]), /* @__PURE__ */ x(
      H.select,
      {
        ...n,
        style: { ...Rr, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
oo.displayName = Mc;
function io(e) {
  return e === "" || e === void 0;
}
function so(e) {
  const t = Ae(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
    (a) => {
      const s = n.current + a;
      t(s), function l(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(s);
    },
    [t]
  ), i = c.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function ao(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = Ic(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const l = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Ic(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Dc = _r, co = Fr, _c = Br, Lc = Vr, Fc = $r, lo = zr, Wc = Gr, Bc = Yr, uo = qr, fo = Qr, Vc = Jr, $c = to, po = ro, zc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Hc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gn = (e, t) => {
  const n = Bo(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: a, children: s, ...l }, d) => yn(
      "svg",
      {
        ref: d,
        ...zc,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(o) : i,
        className: `lucide lucide-${Hc(e)}`,
        ...l
      },
      [
        ...t.map(([f, p]) => yn(f, p)),
        ...(Array.isArray(s) ? s : [s]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, Uc = gn("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), jc = gn("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Gc = gn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Kc = ke(
  "flex h-10 w-full items-center justify-between rounded-md px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border border-input bg-background",
        filled: "bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20",
        outline: "border-2 border-input bg-transparent focus:border-primary",
        ghost: "bg-transparent border-none hover:bg-white/5",
        glass: "bg-white/5 border border-white/20 backdrop-blur-md shadow-lg",
        "glass-dark": "bg-black/5 border border-black/20 backdrop-blur-md shadow-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Al = Dc, Pl = Bc, Nl = _c, Yc = c.forwardRef(({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ re(
  co,
  {
    ref: o,
    className: Y(Kc({ variant: t, className: e })),
    ...r,
    children: [
      n,
      /* @__PURE__ */ x(Lc, { asChild: !0, children: /* @__PURE__ */ x(jc, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Yc.displayName = co.displayName;
const Xc = c.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ x(Fc, { children: /* @__PURE__ */ x(
  lo,
  {
    ref: o,
    className: Y(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ x(
      Wc,
      {
        className: Y(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Xc.displayName = lo.displayName;
const qc = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  uo,
  {
    ref: n,
    className: Y("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
qc.displayName = uo.displayName;
const Zc = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ re(
  fo,
  {
    ref: r,
    className: Y(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ x("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ x($c, { children: /* @__PURE__ */ x(Uc, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ x(Vc, { children: t })
    ]
  }
));
Zc.displayName = fo.displayName;
const Qc = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  po,
  {
    ref: n,
    className: Y("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Qc.displayName = po.displayName;
function Jc(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Tt = (e) => {
  const { present: t, children: n } = e, r = el(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), i = K(r.ref, tl(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: i }) : null;
};
Tt.displayName = "Presence";
function el(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), i = c.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = Jc(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const d = dt(r.current);
    i.current = s === "mounted" ? d : "none";
  }, [s]), Q(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const g = i.current, h = dt(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Q(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, p = (h) => {
        const u = dt(r.current).includes(h.animationName);
        if (h.target === t && u && (l("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, g = (h) => {
        h.target === t && (i.current = dt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function dt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ot = "Dialog", [mo, Tl] = xt(Ot), [nl, se] = mo(Ot), go = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = c.useRef(null), l = c.useRef(null), [d, f] = Gt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Ot
  });
  return /* @__PURE__ */ x(
    nl,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Fe(),
      titleId: Fe(),
      descriptionId: Fe(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: n
    }
  );
};
go.displayName = Ot;
var ho = "DialogTrigger", vo = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(ho, n), i = K(t, o.triggerRef);
    return /* @__PURE__ */ x(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": bn(o.open),
        ...r,
        ref: i,
        onClick: G(e.onClick, o.onOpenToggle)
      }
    );
  }
);
vo.displayName = ho;
var hn = "DialogPortal", [rl, bo] = mo(hn, {
  forceMount: void 0
}), yo = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = se(hn, t);
  return /* @__PURE__ */ x(rl, { scope: t, forceMount: n, children: c.Children.map(r, (a) => /* @__PURE__ */ x(Tt, { present: n || i.open, children: /* @__PURE__ */ x(fn, { asChild: !0, container: o, children: a }) })) });
};
yo.displayName = hn;
var yt = "DialogOverlay", wo = c.forwardRef(
  (e, t) => {
    const n = bo(yt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = se(yt, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ x(Tt, { present: r || i.open, children: /* @__PURE__ */ x(il, { ...o, ref: t }) }) : null;
  }
);
wo.displayName = yt;
var ol = /* @__PURE__ */ Ve("DialogOverlay.RemoveScroll"), il = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(yt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ x(pn, { as: ol, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ x(
        H.div,
        {
          "data-state": bn(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Oe = "DialogContent", xo = c.forwardRef(
  (e, t) => {
    const n = bo(Oe, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = se(Oe, e.__scopeDialog);
    return /* @__PURE__ */ x(Tt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ x(sl, { ...o, ref: t }) : /* @__PURE__ */ x(al, { ...o, ref: t }) });
  }
);
xo.displayName = Oe;
var sl = c.forwardRef(
  (e, t) => {
    const n = se(Oe, e.__scopeDialog), r = c.useRef(null), o = K(t, n.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return Pr(i);
    }, []), /* @__PURE__ */ x(
      Co,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: G(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: G(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: G(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), al = c.forwardRef(
  (e, t) => {
    const n = se(Oe, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ x(
      Co,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, s;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Co = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = se(Oe, n), l = c.useRef(null), d = K(t, l);
    return nr(), /* @__PURE__ */ re(et, { children: [
      /* @__PURE__ */ x(
        tn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ x(
            en,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": bn(s.open),
              ...a,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ re(et, { children: [
        /* @__PURE__ */ x(cl, { titleId: s.titleId }),
        /* @__PURE__ */ x(dl, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), vn = "DialogTitle", So = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(vn, n);
    return /* @__PURE__ */ x(H.h2, { id: o.titleId, ...r, ref: t });
  }
);
So.displayName = vn;
var Eo = "DialogDescription", Ro = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Eo, n);
    return /* @__PURE__ */ x(H.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ro.displayName = Eo;
var Ao = "DialogClose", Po = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Ao, n);
    return /* @__PURE__ */ x(
      H.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: G(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Po.displayName = Ao;
function bn(e) {
  return e ? "open" : "closed";
}
var No = "DialogTitleWarning", [Ol, To] = Wi(No, {
  contentName: Oe,
  titleName: vn,
  docsSlug: "dialog"
}), cl = ({ titleId: e }) => {
  const t = To(No), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ll = "DialogDescriptionWarning", dl = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${To(ll).contentName}}.`;
  return c.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ul = go, fl = vo, pl = yo, Oo = wo, ko = xo, Mo = So, Io = Ro, Do = Po;
const kl = ul, Ml = fl, Il = Do, ml = pl, _o = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  Oo,
  {
    ref: n,
    className: Y(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
_o.displayName = Oo.displayName;
const gl = ke(
  "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
  {
    variants: {
      variant: {
        default: "border bg-background p-6 shadow-lg sm:rounded-lg",
        glass: "bg-white/10 border border-white/20 backdrop-blur-md p-6 shadow-xl sm:rounded-lg",
        "glass-dark": "bg-black/10 border border-black/20 backdrop-blur-md p-6 shadow-xl sm:rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), hl = c.forwardRef(({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ re(ml, { children: [
  /* @__PURE__ */ x(_o, {}),
  /* @__PURE__ */ re(
    ko,
    {
      ref: o,
      className: Y(gl({ variant: t, className: e })),
      ...r,
      children: [
        n,
        /* @__PURE__ */ re(Do, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ x(Gc, { className: "h-4 w-4" }),
          /* @__PURE__ */ x("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
hl.displayName = ko.displayName;
const vl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "div",
  {
    className: Y(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
vl.displayName = "ModalHeader";
const bl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ x(
  "div",
  {
    className: Y(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
bl.displayName = "ModalFooter";
const yl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  Mo,
  {
    ref: n,
    className: Y(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
yl.displayName = Mo.displayName;
const wl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ x(
  Io,
  {
    ref: n,
    className: Y("text-sm text-muted-foreground", e),
    ...t
  }
));
wl.displayName = Io.displayName;
export {
  El as Badge,
  Ai as Button,
  Mi as Card,
  _i as CardContent,
  Li as CardFooter,
  Ii as CardHeader,
  Di as CardTitle,
  Ni as Input,
  kl as Modal,
  Il as ModalClose,
  hl as ModalContent,
  wl as ModalDescription,
  bl as ModalFooter,
  vl as ModalHeader,
  _o as ModalOverlay,
  ml as ModalPortal,
  yl as ModalTitle,
  Ml as ModalTrigger,
  Al as Select,
  Xc as SelectContent,
  Pl as SelectGroup,
  Zc as SelectItem,
  qc as SelectLabel,
  Qc as SelectSeparator,
  Yc as SelectTrigger,
  Nl as SelectValue,
  Oi as Textarea,
  Fi as badgeVariants,
  Ri as buttonVariants,
  ki as cardVariants,
  Y as cn,
  Pi as inputVariants,
  gl as modalContentVariants,
  Kc as selectTriggerVariants,
  Ti as textareaVariants
};
