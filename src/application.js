// Recovered public client module; see README for provenance and editing constraints.
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/scene-B4wwGGrN.js", "assets/math-COP00n3K.js"]),
) => i.map((i) => d[i]);
import { r as e } from "./rolldown-runtime-S-ySWqyJ.js";
import { i as t, n, r } from "./framework-CXnKph_e.js";
import { t as i } from "./index-DQ4L3OWu.js";
import { t as a } from "./math-COP00n3K.js";
var o = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  s = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  c = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  l = (e) => {
    let t = c(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  u = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  d = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  f = e(t(), 1),
  p = (0, f.createContext)({}),
  m = () => (0, f.useContext)(p),
  h = (0, f.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: s,
        ...c
      },
      l,
    ) => {
      let {
          size: p = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: g = !1,
          color: _ = `currentColor`,
          className: v = ``,
        } = m() ?? {},
        y = (r ?? g) ? (Number(n ?? h) * 24) / Number(t ?? p) : (n ?? h);
      return (0, f.createElement)(
        `svg`,
        {
          ref: l,
          ...u,
          width: t ?? p ?? u.width,
          height: t ?? p ?? u.height,
          stroke: e ?? _,
          strokeWidth: y,
          className: o(`lucide`, v, i),
          ...(!a && !d(c) && { "aria-hidden": `true` }),
          ...c,
        },
        [
          ...s.map(([e, t]) => (0, f.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      );
    },
  ),
  g = (e, t) => {
    let n = (0, f.forwardRef)(({ className: n, ...r }, i) =>
      (0, f.createElement)(h, {
        ref: i,
        iconNode: t,
        className: o(`lucide-${s(l(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = l(e)), n);
  },
  _ = g(`arrow-up-right`, [
    [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
    [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
  ]),
  v = g(`maximize`, [
    [`path`, { d: `M8 3H5a2 2 0 0 0-2 2v3`, key: `1dcmit` }],
    [`path`, { d: `M21 8V5a2 2 0 0 0-2-2h-3`, key: `1e4gt3` }],
    [`path`, { d: `M3 16v3a2 2 0 0 0 2 2h3`, key: `wsl5sc` }],
    [`path`, { d: `M16 21h3a2 2 0 0 0 2-2v-3`, key: `18trek` }],
  ]),
  y = g(`minimize`, [
    [`path`, { d: `M8 3v3a2 2 0 0 1-2 2H3`, key: `hohbtr` }],
    [`path`, { d: `M21 8h-3a2 2 0 0 1-2-2V3`, key: `5jw1f3` }],
    [`path`, { d: `M3 16h3a2 2 0 0 1 2 2v3`, key: `198tvr` }],
    [`path`, { d: `M16 21v-3a2 2 0 0 1 2-2h3`, key: `ph8mxp` }],
  ]),
  ee = g(`pause`, [
    [
      `rect`,
      { x: `14`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `kaeet6` },
    ],
    [
      `rect`,
      { x: `5`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `1wsw3u` },
    ],
  ]),
  b = g(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  te = g(`rotate-ccw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  ne = g(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  x = g(`volume-x`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
    [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
  ]),
  S = Object.defineProperty,
  C = (e, t) => S(e, `name`, { value: t, configurable: !0 });
function w(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
C(w, `setRef`);
function T(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = w(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : w(e[t], null);
        }
      };
  };
}
C(T, `composeRefs`);
function E(...e) {
  return f.useCallback(T(...e), e);
}
C(E, `useComposedRefs`);
var D = Object.defineProperty,
  O = (e, t) => D(e, `name`, { value: t, configurable: !0 });
function k(e) {
  let t = f.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (oe(r) && typeof I == `function` && (r = I(r._payload)),
      f.Children.forEach(r, (e) => {
        if (ie(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (oe(n) && typeof I == `function` && (n = I(n._payload)),
            (a = j(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = f.cloneElement(a, void 0, s))
        : !o && f.Children.count(r) === 1 && f.isValidElement(r) && (a = r));
    let c = a ? N(a) : void 0,
      l = E(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? se(e) : F(e));
      return r;
    }
    let u = M(i, a.props ?? {});
    return (a.type !== f.Fragment && (u.ref = n ? l : c), f.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
O(k, `createSlot`);
var A = Symbol.for(`radix.slottable`);
function re(e) {
  let t = O(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = A), t);
}
O(re, `createSlottable`);
var j = O((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return f.isValidElement(t)
      ? f.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return f.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function M(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
O(M, `mergeProps`);
function N(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
O(N, `getElementRef`);
function ie(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === A
  );
}
O(ie, `isSlottable`);
var ae = Symbol.for(`react.lazy`);
function oe(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === ae &&
    `_payload` in e &&
    P(e._payload)
  );
}
O(oe, `isLazyComponent`);
function P(e) {
  return typeof e == `object` && !!e && `then` in e;
}
O(P, `isPromiseLike`);
var F = O(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  se = O(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  I = f.use,
  L = e(n(), 1),
  R = r(),
  z = Object.defineProperty,
  B = (e, t) => z(e, `name`, { value: t, configurable: !0 }),
  V = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = k(`Primitive.${t}`),
      r = f.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, R.jsx)(o, { ...a, ref: r })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function ce(e, t) {
  e && L.flushSync(() => e.dispatchEvent(t));
}
B(ce, `dispatchDiscreteCustomEvent`);
var le = Object.defineProperty,
  H = (e, t) => le(e, `name`, { value: t, configurable: !0 });
function ue(e, t) {
  let n = f.createContext(t);
  n.displayName = e + `Context`;
  let r = H((e) => {
    let { children: t, ...r } = e,
      i = f.useMemo(() => r, Object.values(r));
    return (0, R.jsx)(n.Provider, { value: i, children: t });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = f.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return (H(i, `useContext`), [r, i]);
}
H(ue, `createContext`);
function de(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = f.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = H((t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = f.useMemo(() => o, Object.values(o));
      return (0, R.jsx)(s.Provider, { value: c, children: r });
    }, `Provider`);
    o.displayName = t + `Provider`;
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        u = f.useContext(l);
      if (u) return u;
      if (r !== void 0) return r;
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return (H(s, `useContext`), [o, s]);
  }
  H(r, `createContext`);
  let i = H(() => {
    let t = n.map((e) => f.createContext(e));
    return H(function (n) {
      let r = n?.[e] || t;
      return f.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return ((i.scopeName = e), [r, fe(i, ...t)]);
}
H(de, `createContextScope`);
function fe(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = H(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return H(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return ((n.scopeName = t.scopeName), n);
}
H(fe, `composeContextScopes`);
var pe = Object.defineProperty,
  me = (e, t) => pe(e, `name`, { value: t, configurable: !0 });
function he(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
me(he, `setRef`);
function ge(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = he(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : he(e[t], null);
        }
      };
  };
}
me(ge, `composeRefs`);
function U(...e) {
  return f.useCallback(ge(...e), e);
}
me(U, `useComposedRefs`);
var _e = Object.defineProperty,
  W = (e, t) => _e(e, `name`, { value: t, configurable: !0 });
function ve(e) {
  let t = f.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (Ee(r) && typeof Ae == `function` && (r = Ae(r._payload)),
      f.Children.forEach(r, (e) => {
        if (we(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (Ee(n) && typeof Ae == `function` && (n = Ae(n._payload)),
            (a = xe(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = f.cloneElement(a, void 0, s))
        : !o && f.Children.count(r) === 1 && f.isValidElement(r) && (a = r));
    let c = a ? Ce(a) : void 0,
      l = U(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? ke(e) : Oe(e));
      return r;
    }
    let u = Se(i, a.props ?? {});
    return (a.type !== f.Fragment && (u.ref = n ? l : c), f.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
W(ve, `createSlot`);
var ye = Symbol.for(`radix.slottable`);
function be(e) {
  let t = W(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = ye), t);
}
W(be, `createSlottable`);
var xe = W((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return f.isValidElement(t)
      ? f.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return f.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function Se(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
W(Se, `mergeProps`);
function Ce(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
W(Ce, `getElementRef`);
function we(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === ye
  );
}
W(we, `isSlottable`);
var Te = Symbol.for(`react.lazy`);
function Ee(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === Te &&
    `_payload` in e &&
    De(e._payload)
  );
}
W(Ee, `isLazyComponent`);
function De(e) {
  return typeof e == `object` && !!e && `then` in e;
}
W(De, `isPromiseLike`);
var Oe = W(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  ke = W(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  Ae = f.use,
  je = Object.defineProperty,
  G = (e, t) => je(e, `name`, { value: t, configurable: !0 });
function Me(e) {
  let t = e + `CollectionProvider`,
    [n, r] = de(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = G((e) => {
      let { scope: t, children: n } = e,
        r = f.useRef(null),
        a = f.useRef(new Map()).current;
      return (0, R.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    }, `CollectionProvider`);
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = ve(s),
    l = f.forwardRef((e, t) => {
      let { scope: n, children: r } = e;
      return (0, R.jsx)(c, { ref: U(t, a(s, n).collectionRef), children: r });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    p = ve(u),
    m = f.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = f.useRef(null),
        s = U(t, o),
        c = a(u, n);
      return (
        f.useEffect(
          () => (
            c.itemMap.set(o, { ref: o, ...i }),
            () => void c.itemMap.delete(o)
          ),
        ),
        (0, R.jsx)(p, { [d]: ``, ref: s, children: r })
      );
    });
  m.displayName = u;
  function h(t) {
    let n = a(e + `CollectionConsumer`, t);
    return f.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return (G(h, `useCollection`), [{ Provider: o, Slot: l, ItemSlot: m }, h, r]);
}
G(Me, `createCollection`);
var Ne = new WeakMap(),
  Pe = class e extends Map {
    static {
      G(this, `OrderedDict`);
    }
    #e;
    constructor(e) {
      (super(e), (this.#e = [...super.keys()]), Ne.set(this, !0));
    }
    set(e, t) {
      return (
        Ne.get(this) &&
          (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
        super.set(e, t),
        this
      );
    }
    insert(e, t, n) {
      let r = this.has(t),
        i = this.#e.length,
        a = Le(e),
        o = a >= 0 ? a : i + a,
        s = o < 0 || o >= i ? -1 : o;
      if (s === this.size || (r && s === this.size - 1) || s === -1)
        return (this.set(t, n), this);
      let c = this.size + +!r;
      a < 0 && o++;
      let l = [...this.#e],
        u,
        d = !1;
      for (let e = o; e < c; e++)
        if (o === e) {
          let i = l[e];
          (l[e] === t && (i = l[e + 1]),
            r && this.delete(t),
            (u = this.get(i)),
            this.set(t, n));
        } else {
          !d && l[e - 1] === t && (d = !0);
          let n = l[d ? e : e - 1],
            r = u;
          ((u = this.get(n)), this.delete(n), this.set(n, r));
        }
      return this;
    }
    with(t, n, r) {
      let i = new e(this);
      return (i.insert(t, n, r), i);
    }
    before(e) {
      let t = this.#e.indexOf(e) - 1;
      if (!(t < 0)) return this.entryAt(t);
    }
    setBefore(e, t, n) {
      let r = this.#e.indexOf(e);
      return r === -1 ? this : this.insert(r, t, n);
    }
    after(e) {
      let t = this.#e.indexOf(e);
      if (((t = t === -1 || t === this.size - 1 ? -1 : t + 1), t !== -1))
        return this.entryAt(t);
    }
    setAfter(e, t, n) {
      let r = this.#e.indexOf(e);
      return r === -1 ? this : this.insert(r + 1, t, n);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return ((this.#e = []), super.clear());
    }
    delete(e) {
      let t = super.delete(e);
      return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
    }
    deleteAt(e) {
      let t = this.keyAt(e);
      return t === void 0 ? !1 : this.delete(t);
    }
    at(e) {
      let t = Fe(this.#e, e);
      if (t !== void 0) return this.get(t);
    }
    entryAt(e) {
      let t = Fe(this.#e, e);
      if (t !== void 0) return [t, this.get(t)];
    }
    indexOf(e) {
      return this.#e.indexOf(e);
    }
    keyAt(e) {
      return Fe(this.#e, e);
    }
    from(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
      );
    }
    keyFrom(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
      );
    }
    find(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return r;
        n++;
      }
    }
    findIndex(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return n;
        n++;
      }
      return -1;
    }
    filter(t, n) {
      let r = [],
        i = 0;
      for (let e of this) (Reflect.apply(t, n, [e, i, this]) && r.push(e), i++);
      return new e(r);
    }
    map(t, n) {
      let r = [],
        i = 0;
      for (let e of this)
        (r.push([e[0], Reflect.apply(t, n, [e, i, this])]), i++);
      return new e(r);
    }
    reduce(...e) {
      let [t, n] = e,
        r = 0,
        i = n ?? this.at(0);
      for (let n of this)
        ((i =
          r === 0 && e.length === 1
            ? n
            : Reflect.apply(t, this, [i, n, r, this])),
          r++);
      return i;
    }
    reduceRight(...e) {
      let [t, n] = e,
        r = n ?? this.at(-1);
      for (let n = this.size - 1; n >= 0; n--) {
        let i = this.at(n);
        r =
          n === this.size - 1 && e.length === 1
            ? i
            : Reflect.apply(t, this, [r, i, n, this]);
      }
      return r;
    }
    toSorted(t) {
      return new e([...this.entries()].sort(t));
    }
    toReversed() {
      let t = new e();
      for (let e = this.size - 1; e >= 0; e--) {
        let n = this.keyAt(e),
          r = this.get(n);
        t.set(n, r);
      }
      return t;
    }
    toSpliced(...t) {
      let n = [...this.entries()];
      return (n.splice(...t), new e(n));
    }
    slice(t, n) {
      let r = new e(),
        i = this.size - 1;
      if (t === void 0) return r;
      (t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1));
      for (let e = t; e <= i; e++) {
        let t = this.keyAt(e),
          n = this.get(t);
        r.set(t, n);
      }
      return r;
    }
    every(e, t) {
      let n = 0;
      for (let r of this) {
        if (!Reflect.apply(e, t, [r, n, this])) return !1;
        n++;
      }
      return !0;
    }
    some(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return !0;
        n++;
      }
      return !1;
    }
  };
function Fe(e, t) {
  if (`at` in Array.prototype) return Array.prototype.at.call(e, t);
  let n = Ie(e, t);
  return n === -1 ? void 0 : e[n];
}
G(Fe, `at`);
function Ie(e, t) {
  let n = e.length,
    r = Le(t),
    i = r >= 0 ? r : n + r;
  return i < 0 || i >= n ? -1 : i;
}
G(Ie, `toSafeIndex`);
function Le(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
G(Le, `toSafeInteger`);
function Re(e) {
  let t = e + `CollectionProvider`,
    [n, r] = de(t),
    [i, a] = n(t, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Pe(),
      setItemMap: G(() => void 0, `setItemMap`),
    }),
    o = G(
      ({ state: e, ...t }) =>
        e ? (0, R.jsx)(c, { ...t, state: e }) : (0, R.jsx)(s, { ...t }),
      `CollectionProvider`,
    );
  o.displayName = t;
  let s = G((e) => {
    let t = g();
    return (0, R.jsx)(c, { ...e, state: t });
  }, `CollectionInit`);
  s.displayName = t + `Init`;
  let c = G((e) => {
    let { scope: t, children: n, state: r } = e,
      a = f.useRef(null),
      [o, s] = f.useState(null),
      c = U(a, s),
      [l, u] = r;
    return (
      f.useEffect(() => {
        if (!o) return;
        let e = He(() => {});
        return (
          e.observe(o, { childList: !0, subtree: !0 }),
          () => {
            e.disconnect();
          }
        );
      }, [o]),
      (0, R.jsx)(i, {
        scope: t,
        itemMap: l,
        setItemMap: u,
        collectionRef: c,
        collectionRefObject: a,
        collectionElement: o,
        children: n,
      })
    );
  }, `CollectionProviderImpl`);
  c.displayName = t + `Impl`;
  let l = e + `CollectionSlot`,
    u = ve(l),
    d = f.forwardRef((e, t) => {
      let { scope: n, children: r } = e;
      return (0, R.jsx)(u, { ref: U(t, a(l, n).collectionRef), children: r });
    });
  d.displayName = l;
  let p = e + `CollectionItemSlot`,
    m = ve(p),
    h = f.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = f.useRef(null),
        [s, c] = f.useState(null),
        l = U(t, o, c),
        { setItemMap: u } = a(p, n),
        d = f.useRef(i);
      ze(d.current, i) || (d.current = i);
      let h = d.current;
      return (
        f.useEffect(() => {
          let e = h;
          return (
            u((t) =>
              s
                ? t.has(s)
                  ? t.set(s, { ...e, element: s }).toSorted(Ve)
                  : (t.set(s, { ...e, element: s }), t.toSorted(Ve))
                : t,
            ),
            () => {
              u((e) => (!s || !e.has(s) ? e : (e.delete(s), new Pe(e))));
            }
          );
        }, [s, h, u]),
        (0, R.jsx)(m, { "data-radix-collection-item": ``, ref: l, children: r })
      );
    });
  h.displayName = p;
  function g() {
    return f.useState(new Pe());
  }
  G(g, `useInitCollection`);
  function _(t) {
    let { itemMap: n } = a(e + `CollectionConsumer`, t);
    return n;
  }
  return (
    G(_, `useCollection`),
    [
      { Provider: o, Slot: d, ItemSlot: h },
      { createCollectionScope: r, useCollection: _, useInitCollection: g },
    ]
  );
}
G(Re, `createCollection`);
function ze(e, t) {
  if (e === t) return !0;
  if (typeof e != `object` || typeof t != `object` || e == null || t == null)
    return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
G(ze, `shallowEqual`);
function Be(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
G(Be, `isElementPreceding`);
function Ve(e, t) {
  return !e[1].element || !t[1].element
    ? 0
    : Be(e[1].element, t[1].element)
      ? -1
      : 1;
}
G(Ve, `sortByDocumentPosition`);
function He(e) {
  return new MutationObserver((t) => {
    for (let n of t)
      if (n.type === `childList`) {
        e();
        return;
      }
  });
}
G(He, `getChildListObserver`);
var Ue = Object.defineProperty,
  We = (e, t) => Ue(e, `name`, { value: t, configurable: !0 }),
  Ge = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  );
function Ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return We(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  }, `handleEvent`);
}
We(Ke, `composeEventHandlers`);
function qe(e) {
  if (!Ge) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
We(qe, `getOwnerWindow`);
function Je(e) {
  if (!Ge) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
We(Je, `getOwnerDocument`);
function Ye(e, t = !1) {
  let { activeElement: n } = Je(e);
  if (!n?.nodeName) return null;
  if (Xe(n) && n.contentDocument) return Ye(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = Je(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
We(Ye, `getActiveElement`);
function Xe(e) {
  return e.tagName === `IFRAME`;
}
We(Xe, `isFrame`);
var Ze = globalThis?.document ? f.useLayoutEffect : () => {},
  Qe = Object.defineProperty,
  $e = (e, t) => Qe(e, `name`, { value: t, configurable: !0 }),
  et = f.useEffectEvent,
  tt = f.useInsertionEffect;
function nt(e) {
  if (typeof et == `function`) return et(e);
  let t = f.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof tt == `function`
      ? tt(() => {
          t.current = e;
        })
      : Ze(() => {
          t.current = e;
        }),
    f.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
$e(nt, `useEffectEvent`);
var rt = Object.defineProperty,
  it = (e, t) => rt(e, `name`, { value: t, configurable: !0 }),
  at = f.useInsertionEffect || Ze;
function ot({
  prop: e,
  defaultProp: t,
  onChange: n = it(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = st({ defaultProp: t, onChange: n }),
    s = e !== void 0;
  return [
    s ? e : i,
    f.useCallback(
      (t) => {
        if (s) {
          let n = ct(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
it(ot, `useControllableState`);
function st({ defaultProp: e, onChange: t }) {
  let [n, r] = f.useState(e),
    i = f.useRef(n),
    a = f.useRef(t);
  return (
    at(() => {
      a.current = t;
    }, [t]),
    f.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
it(st, `useUncontrolledState`);
function ct(e) {
  return typeof e == `function`;
}
it(ct, `isFunction`);
var lt = Symbol(`RADIX:SYNC_STATE`);
function ut(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: s } = t,
    c = i !== void 0,
    l = nt(o),
    u = [{ ...n, state: a }];
  r && u.push(r);
  let [d, p] = f.useReducer(
      (t, n) => {
        if (n.type === lt) return { ...t, state: n.state };
        let r = e(t, n);
        return (c && !Object.is(r.state, t.state) && l(r.state), r);
      },
      ...u,
    ),
    m = d.state,
    h = f.useRef(m);
  f.useEffect(() => {
    h.current !== m && ((h.current = m), c || l(m));
  }, [m, h, c]);
  let g = f.useMemo(() => (i === void 0 ? d : { ...d, state: i }), [d, i]);
  return (
    f.useEffect(() => {
      c && !Object.is(i, d.state) && p({ type: lt, state: i });
    }, [i, d.state, c]),
    [g, p]
  );
}
it(ut, `useControllableStateReducer`);
var dt = Object.defineProperty,
  ft = (e, t) => dt(e, `name`, { value: t, configurable: !0 }),
  pt = f.createContext(void 0);
function mt(e) {
  let t = f.useContext(pt);
  return e || t || `ltr`;
}
ft(mt, `useDirection`);
var ht = Object.defineProperty,
  gt = (e, t) => ht(e, `name`, { value: t, configurable: !0 });
function _t(e) {
  let [t, n] = f.useState(void 0);
  return (
    Ze(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
gt(_t, `useSize`);
var vt = Object.defineProperty,
  yt = (e, t) => vt(e, `name`, { value: t, configurable: !0 });
function bt(e) {
  let t = f.useRef({ value: e, previous: e });
  return f.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
yt(bt, `usePrevious`);
var xt = Object.defineProperty,
  St = (e, t) => xt(e, `name`, { value: t, configurable: !0 });
function Ct(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
St(Ct, `clamp`);
var wt = Object.defineProperty,
  Tt = (e, t) => wt(e, `name`, { value: t, configurable: !0 });
function Et(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
Tt(Et, `setRef`);
function Dt(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Et(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Et(e[t], null);
        }
      };
  };
}
Tt(Dt, `composeRefs`);
function Ot(...e) {
  return f.useCallback(Dt(...e), e);
}
Tt(Ot, `useComposedRefs`);
var kt = Object.defineProperty,
  K = (e, t) => kt(e, `name`, { value: t, configurable: !0 }),
  At = [`PageUp`, `PageDown`],
  jt = [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`],
  Mt = {
    "from-left": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-right": [`Home`, `PageDown`, `ArrowDown`, `ArrowRight`],
    "from-bottom": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-top": [`Home`, `PageDown`, `ArrowUp`, `ArrowLeft`],
  },
  Nt = `Slider`,
  [Pt, Ft, It] = Me(Nt),
  [Lt, Rt] = de(Nt, [It]),
  [zt, Bt] = Lt(Nt),
  Vt = f.forwardRef(
    K(function (e, t) {
      let {
          name: n,
          min: r = 0,
          max: i = 100,
          step: a = 1,
          orientation: o = `horizontal`,
          disabled: s = !1,
          minStepsBetweenThumbs: c = 0,
          defaultValue: l = [r],
          value: u,
          onValueChange: d = K(() => {}, `onValueChange`),
          onValueCommit: p = K(() => {}, `onValueCommit`),
          inverted: m = !1,
          form: h,
          ...g
        } = e,
        _ = f.useRef(new Set()),
        v = f.useRef(0),
        y = f.useRef(!1),
        ee = o === `horizontal` ? Wt : Gt,
        [b, te] = f.useState(null),
        ne = Ot(t, te),
        [x = [], S] = ot({
          prop: u,
          defaultProp: l,
          onChange: K((e) => {
            ([..._.current][v.current]?.focus({
              preventScroll: !0,
              focusVisible: y.current,
            }),
              (y.current = !1),
              d(e));
          }, `onChange`),
        }),
        C = f.useRef(x),
        w = f.useRef(x);
      f.useEffect(() => {
        let e = h ? b?.ownerDocument.getElementById(h) : b?.closest(`form`);
        if (e instanceof HTMLFormElement) {
          let t = K(() => S(w.current), `reset`);
          return (
            e.addEventListener(`reset`, t),
            () => e.removeEventListener(`reset`, t)
          );
        }
      }, [b, h, S]);
      function T(e) {
        O(e, un(x, e));
      }
      K(T, `handleSlideStart`);
      function E(e) {
        O(e, v.current);
      }
      K(E, `handleSlideMove`);
      function D() {
        String(x) !== String(C.current) && p(x);
      }
      K(D, `handleSlideEnd`);
      function O(e, t, { commit: n } = { commit: !1 }) {
        let o = hn(a),
          s = Ct(gn(Math.round((e - r) / a) * a + r, o), [r, i]);
        S((e = []) => {
          let r = sn(e, s, t);
          if (pn(r, c * a)) {
            v.current = r.indexOf(s);
            let t = String(r) !== String(e);
            return (t && n && p(r), t ? r : e);
          } else return e;
        });
      }
      return (
        K(O, `updateValues`),
        (0, R.jsx)(zt, {
          scope: e.__scopeSlider,
          name: n,
          disabled: s,
          min: r,
          max: i,
          valueIndexToChangeRef: v,
          thumbs: _.current,
          values: x,
          orientation: o,
          form: h,
          children: (0, R.jsx)(Pt.Provider, {
            scope: e.__scopeSlider,
            children: (0, R.jsx)(Pt.Slot, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(ee, {
                "aria-disabled": s,
                "data-disabled": s ? `` : void 0,
                ...g,
                ref: ne,
                onPointerDown: Ke(g.onPointerDown, () => {
                  s || ((C.current = x), (y.current = !1));
                }),
                min: r,
                max: i,
                inverted: m,
                onSlideStart: s ? void 0 : T,
                onSlideMove: s ? void 0 : E,
                onSlideEnd: s ? void 0 : D,
                onHomeKeyDown: () => {
                  s || ((y.current = !0), O(r, 0, { commit: !0 }));
                },
                onEndKeyDown: () => {
                  s || ((y.current = !0), O(i, x.length - 1, { commit: !0 }));
                },
                onStepKeyDown: ({ event: e, direction: t }) => {
                  if (!s) {
                    y.current = !0;
                    let n =
                        At.includes(e.key) || (e.shiftKey && jt.includes(e.key))
                          ? 10
                          : 1,
                      i = v.current,
                      o = x[i];
                    O(
                      _n(o, { min: r, step: a, direction: t, multiplier: n }),
                      i,
                      { commit: !0 },
                    );
                  }
                },
              }),
            }),
          }),
        })
      );
    }, `Slider`),
  ),
  [Ht, Ut] = Lt(Nt, {
    startEdge: `left`,
    endEdge: `right`,
    size: `width`,
    direction: 1,
  }),
  Wt = f.forwardRef(
    K(function (e, t) {
      let {
          min: n,
          max: r,
          dir: i,
          inverted: a,
          onSlideStart: o,
          onSlideMove: s,
          onSlideEnd: c,
          onStepKeyDown: l,
          ...u
        } = e,
        [d, p] = f.useState(null),
        m = Ot(t, p),
        h = f.useRef(void 0),
        g = mt(i),
        _ = g === `ltr`,
        v = (_ && !a) || (!_ && a);
      function y(e) {
        let t = h.current || d.getBoundingClientRect(),
          i = mn([0, t.width], v ? [n, r] : [r, n]);
        return ((h.current = t), i(e - t.left));
      }
      return (
        K(y, `getValueFromPointer`),
        (0, R.jsx)(Ht, {
          scope: e.__scopeSlider,
          startEdge: v ? `left` : `right`,
          endEdge: v ? `right` : `left`,
          direction: v ? 1 : -1,
          size: `width`,
          children: (0, R.jsx)(Kt, {
            dir: g,
            "data-orientation": `horizontal`,
            ...u,
            ref: m,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": `translateX(-50%)`,
            },
            onSlideStart: (e) => {
              let t = y(e.clientX);
              o?.(t);
            },
            onSlideMove: (e) => {
              let t = y(e.clientX);
              s?.(t);
            },
            onSlideEnd: () => {
              ((h.current = void 0), c?.());
            },
            onStepKeyDown: (e) => {
              let t = Mt[v ? `from-left` : `from-right`].includes(e.key);
              l?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        })
      );
    }, `SliderHorizontal`),
  ),
  Gt = f.forwardRef(
    K(function (e, t) {
      let {
          min: n,
          max: r,
          inverted: i,
          onSlideStart: a,
          onSlideMove: o,
          onSlideEnd: s,
          onStepKeyDown: c,
          ...l
        } = e,
        u = f.useRef(null),
        d = Ot(t, u),
        p = f.useRef(void 0),
        m = !i;
      function h(e) {
        let t = p.current || u.current.getBoundingClientRect(),
          i = mn([0, t.height], m ? [r, n] : [n, r]);
        return ((p.current = t), i(e - t.top));
      }
      return (
        K(h, `getValueFromPointer`),
        (0, R.jsx)(Ht, {
          scope: e.__scopeSlider,
          startEdge: m ? `bottom` : `top`,
          endEdge: m ? `top` : `bottom`,
          size: `height`,
          direction: m ? 1 : -1,
          children: (0, R.jsx)(Kt, {
            "data-orientation": `vertical`,
            ...l,
            ref: d,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": `translateY(50%)`,
            },
            onSlideStart: (e) => {
              let t = h(e.clientY);
              a?.(t);
            },
            onSlideMove: (e) => {
              let t = h(e.clientY);
              o?.(t);
            },
            onSlideEnd: () => {
              ((p.current = void 0), s?.());
            },
            onStepKeyDown: (e) => {
              let t = Mt[m ? `from-bottom` : `from-top`].includes(e.key);
              c?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        })
      );
    }, `SliderVertical`),
  ),
  Kt = f.forwardRef(
    K(function (e, t) {
      let {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: i,
          onSlideEnd: a,
          onHomeKeyDown: o,
          onEndKeyDown: s,
          onStepKeyDown: c,
          ...l
        } = e,
        u = Bt(Nt, n);
      return (0, R.jsx)(V.span, {
        ...l,
        ref: t,
        onKeyDown: Ke(e.onKeyDown, (e) => {
          e.key === `Home`
            ? (o(e), e.preventDefault())
            : e.key === `End`
              ? (s(e), e.preventDefault())
              : At.concat(jt).includes(e.key) && (c(e), e.preventDefault());
        }),
        onPointerDown: Ke(e.onPointerDown, (e) => {
          let t = e.target;
          (t.setPointerCapture(e.pointerId),
            e.preventDefault(),
            u.thumbs.has(t)
              ? t.focus({ preventScroll: !0, focusVisible: !1 })
              : r(e));
        }),
        onPointerMove: Ke(e.onPointerMove, (e) => {
          e.target.hasPointerCapture(e.pointerId) && i(e);
        }),
        onPointerUp: Ke(e.onPointerUp, (e) => {
          let t = e.target;
          t.hasPointerCapture(e.pointerId) &&
            (t.releasePointerCapture(e.pointerId), a(e));
        }),
      });
    }, `SliderImpl`),
  ),
  qt = `SliderTrack`,
  Jt = f.forwardRef(
    K(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Bt(qt, n);
      return (0, R.jsx)(V.span, {
        "data-disabled": i.disabled ? `` : void 0,
        "data-orientation": i.orientation,
        ...r,
        ref: t,
      });
    }, `SliderTrack`),
  ),
  Yt = `SliderRange`,
  Xt = f.forwardRef(
    K(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Bt(Yt, n),
        a = Ut(Yt, n),
        o = Ot(t, f.useRef(null)),
        s = i.values.length,
        c = i.values.map((e) => cn(e, i.min, i.max)),
        l = s > 1 ? Math.min(...c) : 0,
        u = 100 - Math.max(...c);
      return (0, R.jsx)(V.span, {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? `` : void 0,
        ...r,
        ref: o,
        style: { ...e.style, [a.startEdge]: l + `%`, [a.endEdge]: u + `%` },
      });
    }, `SliderRange`),
  ),
  [Zt, Qt] = Lt(`SliderThumb`),
  $t = `SliderThumbProvider`;
function en(e) {
  let {
      __scopeSlider: t,
      name: n,
      children: r,
      internal_do_not_use_render: i,
    } = e,
    a = Bt($t, t),
    o = Ft(t),
    [s, c] = f.useState(null),
    l = f.useMemo(
      () => (s ? o().findIndex((e) => e.ref.current === s) : -1),
      [o, s],
    ),
    u = _t(s),
    d = s ? !!a.form || !!s.closest(`form`) : !0,
    p = a.values[l],
    m = n ?? (a.name ? a.name + (a.values.length > 1 ? `[]` : ``) : void 0),
    h = p === void 0 ? 0 : cn(p, a.min, a.max);
  f.useEffect(() => {
    if (s)
      return (
        a.thumbs.add(s),
        () => {
          a.thumbs.delete(s);
        }
      );
  }, [s, a.thumbs]);
  let g = {
    value: p,
    name: m,
    form: a.form,
    isFormControl: d,
    index: l,
    thumb: s,
    onThumbChange: c,
    percent: h,
    size: u,
  };
  return (0, R.jsx)(Zt, { scope: t, ...g, children: vn(i) ? i(g) : r });
}
K(en, `SliderThumbProvider`);
var tn = `SliderThumbTrigger`,
  nn = f.forwardRef(
    K(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Bt(tn, n),
        a = Ut(tn, n),
        {
          index: o,
          value: s,
          percent: c,
          size: l,
          onThumbChange: u,
        } = Qt(tn, n),
        d = Ot(t, u),
        f = ln(o, i.values.length),
        p = l?.[a.size],
        m = p ? dn(p, c, a.direction) : 0;
      return (0, R.jsx)(`span`, {
        style: {
          transform: `var(--radix-slider-thumb-transform)`,
          position: `absolute`,
          [a.startEdge]: `calc(${c}% + ${m}px)`,
        },
        children: (0, R.jsx)(Pt.ItemSlot, {
          scope: n,
          children: (0, R.jsx)(V.span, {
            role: `slider`,
            "aria-label": e[`aria-label`] || f,
            "aria-valuemin": i.min,
            "aria-valuenow": s,
            "aria-valuemax": i.max,
            "aria-orientation": i.orientation,
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? `` : void 0,
            tabIndex: i.disabled ? void 0 : 0,
            ...r,
            ref: d,
            style: s === void 0 ? { display: `none` } : e.style,
            onFocus: Ke(e.onFocus, () => {
              i.valueIndexToChangeRef.current = o;
            }),
          }),
        }),
      });
    }, `SliderThumbTrigger`),
  ),
  rn = f.forwardRef(
    K(function (e, t) {
      let { __scopeSlider: n, name: r, ...i } = e;
      return (0, R.jsx)(en, {
        __scopeSlider: n,
        name: r,
        internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
          (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(nn, { ...i, ref: t, __scopeSlider: n }),
              r ? (0, R.jsx)(on, { __scopeSlider: n }, e) : null,
            ],
          }),
      });
    }, `SliderThumb`),
  ),
  an = `SliderBubbleInput`,
  on = f.forwardRef(
    K(function ({ __scopeSlider: e, ...t }, n) {
      let { value: r, name: i, form: a } = Qt(an, e),
        o = f.useRef(null),
        s = Ot(o, n),
        c = bt(r);
      return (
        f.useEffect(() => {
          let e = o.current;
          if (!e) return;
          let t = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, `value`).set;
          if (c !== r && n) {
            let t = new Event(`input`, { bubbles: !0 });
            (n.call(e, r), e.dispatchEvent(t));
          }
        }, [c, r]),
        (0, R.jsx)(V.input, {
          style: { display: `none` },
          name: i,
          form: a,
          ...t,
          ref: s,
          defaultValue: r,
        })
      );
    }, `SliderBubbleInput`),
  );
function sn(e = [], t, n) {
  let r = [...e];
  return ((r[n] = t), r.sort((e, t) => e - t));
}
K(sn, `getNextSortedValues`);
function cn(e, t, n) {
  return Ct((100 / (n - t)) * (e - t), [0, 100]);
}
K(cn, `convertValueToPercentage`);
function ln(e, t) {
  if (t > 2) return `Value ${e + 1} of ${t}`;
  if (t === 2) return [`Minimum`, `Maximum`][e];
}
K(ln, `getLabel`);
function un(e, t) {
  if (e.length === 1) return 0;
  let n = e.map((e) => Math.abs(e - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
K(un, `getClosestValueIndex`);
function dn(e, t, n) {
  let r = e / 2;
  return (r - mn([0, 50], [0, r])(t) * n) * n;
}
K(dn, `getThumbInBoundsOffset`);
function fn(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
K(fn, `getStepsBetweenValues`);
function pn(e, t) {
  if (t > 0) {
    let n = fn(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
K(pn, `hasMinStepsBetweenValues`);
function mn(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
K(mn, `linearScale`);
function hn(e) {
  if (!Number.isFinite(e)) return 0;
  let t = e.toString();
  if (t.includes(`e`)) {
    let [e, n] = t.split(`e`),
      r = e.split(`.`)[1] || ``,
      i = Number(n);
    return Math.max(0, r.length - i);
  }
  let n = t.split(`.`)[1];
  return n ? n.length : 0;
}
K(hn, `getDecimalCount`);
function gn(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n;
}
K(gn, `roundValue`);
function _n(e, { min: t, step: n, direction: r, multiplier: i }) {
  let a = hn(n),
    o = (e - t) / n,
    s = Math.round(o),
    c = gn(s * n + t, a) === gn(e, a),
    l;
  return (
    (l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o)),
    gn(l * n + t, a)
  );
}
K(_n, `getNextStepValue`);
function vn(e) {
  return typeof e == `function`;
}
K(vn, `isFunction`);
function yn(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = yn(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function bn() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = yn(e)) && (r && (r += ` `), (r += t));
  return r;
}
var xn = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Sn = (e, t) => ({ classGroupId: e, validator: t }),
  Cn = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  wn = `-`,
  Tn = [],
  En = `arbitrary..`,
  Dn = (e) => {
    let t = An(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return kn(e);
        let n = e.split(wn);
        return On(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? xn(i, t) : t) : i || Tn;
        }
        return n[e] || Tn;
      },
    };
  },
  On = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = On(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(wn) : e.slice(t).join(wn),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  kn = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? En + r : void 0;
        })(),
  An = (e) => {
    let { theme: t, classGroups: n } = e;
    return jn(n, t);
  },
  jn = (e, t) => {
    let n = Cn();
    for (let r in e) {
      let i = e[r];
      Mn(i, n, r, t);
    }
    return n;
  },
  Mn = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Nn(i, t, n, r);
    }
  },
  Nn = (e, t, n, r) => {
    if (typeof e == `string`) {
      Pn(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Fn(e, t, n, r);
      return;
    }
    In(e, t, n, r);
  },
  Pn = (e, t, n) => {
    let r = e === `` ? t : Ln(t, e);
    r.classGroupId = n;
  },
  Fn = (e, t, n, r) => {
    if (Rn(e)) {
      Mn(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Sn(n, e)));
  },
  In = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Mn(o, Ln(t, a), n, r);
    }
  },
  Ln = (e, t) => {
    let n = e,
      r = t.split(wn),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Cn()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Rn = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  zn = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Bn = `!`,
  Vn = `:`,
  Hn = [],
  Un = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Wn = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Vn) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Bn)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Bn) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Un(t, l, c, u);
      };
    if (t) {
      let e = t + Vn,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Un(Hn, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Gn = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Kn = (e) => ({
    cache: zn(e.cacheSize),
    parseClassName: Wn(e),
    sortModifiers: Gn(e),
    postfixLookupClassGroupIds: qn(e),
    ...Dn(e),
  }),
  qn = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Jn = /\s+/,
  Yn = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Jn),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Bn : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let ee = i(g, h);
      for (let e = 0; e < ee.length; ++e) {
        let t = ee[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  Xn = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = Zn(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Zn = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Zn(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Qn = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Kn(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Yn(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(Xn(...e)));
  },
  $n = [],
  q = (e) => {
    let t = (t) => t[e] || $n;
    return ((t.isThemeGetter = !0), t);
  },
  er = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  tr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  nr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  rr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ir =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ar = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  or = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  sr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  J = (e) => nr.test(e),
  Y = (e) => !!e && !Number.isNaN(Number(e)),
  X = (e) => !!e && Number.isInteger(Number(e)),
  cr = (e) => e.endsWith(`%`) && Y(e.slice(0, -1)),
  Z = (e) => rr.test(e),
  lr = () => !0,
  ur = (e) => ir.test(e) && !ar.test(e),
  dr = () => !1,
  fr = (e) => or.test(e),
  pr = (e) => sr.test(e),
  mr = (e) => !Q(e) && !$(e),
  hr = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  gr = (e) => jr(e, Fr, dr),
  Q = (e) => er.test(e),
  _r = (e) => jr(e, Ir, ur),
  vr = (e) => jr(e, Lr, Y),
  yr = (e) => jr(e, zr, lr),
  br = (e) => jr(e, Rr, dr),
  xr = (e) => jr(e, Nr, dr),
  Sr = (e) => jr(e, Pr, pr),
  Cr = (e) => jr(e, Br, fr),
  $ = (e) => tr.test(e),
  wr = (e) => Mr(e, Ir),
  Tr = (e) => Mr(e, Rr),
  Er = (e) => Mr(e, Nr),
  Dr = (e) => Mr(e, Fr),
  Or = (e) => Mr(e, Pr),
  kr = (e) => Mr(e, Br, !0),
  Ar = (e) => Mr(e, zr, !0),
  jr = (e, t, n) => {
    let r = er.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Mr = (e, t, n = !1) => {
    let r = tr.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Nr = (e) => e === `position` || e === `percentage`,
  Pr = (e) => e === `image` || e === `url`,
  Fr = (e) => e === `length` || e === `size` || e === `bg-size`,
  Ir = (e) => e === `length`,
  Lr = (e) => e === `number`,
  Rr = (e) => e === `family-name`,
  zr = (e) => e === `number` || e === `weight`,
  Br = (e) => e === `shadow`,
  Vr = Qn(() => {
    let e = q(`color`),
      t = q(`font`),
      n = q(`text`),
      r = q(`font-weight`),
      i = q(`tracking`),
      a = q(`leading`),
      o = q(`breakpoint`),
      s = q(`container`),
      c = q(`spacing`),
      l = q(`radius`),
      u = q(`shadow`),
      d = q(`inset-shadow`),
      f = q(`text-shadow`),
      p = q(`drop-shadow`),
      m = q(`blur`),
      h = q(`perspective`),
      g = q(`aspect`),
      _ = q(`ease`),
      v = q(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      ee = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      b = () => [...ee(), $, Q],
      te = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ne = () => [`auto`, `contain`, `none`],
      x = () => [$, Q, c],
      S = () => [J, `full`, `auto`, ...x()],
      C = () => [X, `none`, `subgrid`, $, Q],
      w = () => [`auto`, { span: [`full`, X, $, Q] }, X, $, Q],
      T = () => [X, `auto`, $, Q],
      E = () => [`auto`, `min`, `max`, `fr`, $, Q],
      D = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      O = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      k = () => [`auto`, ...x()],
      A = () => [
        J,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      re = () => [
        J,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      j = () => [
        J,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      M = () => [e, $, Q],
      N = () => [...ee(), Er, xr, { position: [$, Q] }],
      ie = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ae = () => [`auto`, `cover`, `contain`, Dr, gr, { size: [$, Q] }],
      oe = () => [cr, wr, _r],
      P = () => [``, `none`, `full`, l, $, Q],
      F = () => [``, Y, wr, _r],
      se = () => [`solid`, `dashed`, `dotted`, `double`],
      I = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      L = () => [Y, cr, Er, xr],
      R = () => [``, `none`, m, $, Q],
      z = () => [`none`, Y, $, Q],
      B = () => [`none`, Y, $, Q],
      V = () => [Y, $, Q],
      ce = () => [J, `full`, ...x()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Z],
        breakpoint: [Z],
        color: [lr],
        container: [Z],
        "drop-shadow": [Z],
        ease: [`in`, `out`, `in-out`],
        font: [mr],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Z],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [Z],
        shadow: [Z],
        spacing: [`px`, Y],
        text: [Z],
        "text-shadow": [Z],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, J, Q, $, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }],
        "container-named": [hr],
        columns: [{ columns: [Y, Q, $, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: b() }],
        overflow: [{ overflow: te() }],
        "overflow-x": [{ "overflow-x": te() }],
        "overflow-y": [{ "overflow-y": te() }],
        overscroll: [{ overscroll: ne() }],
        "overscroll-x": [{ "overscroll-x": ne() }],
        "overscroll-y": [{ "overscroll-y": ne() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: S() }],
        "inset-x": [{ "inset-x": S() }],
        "inset-y": [{ "inset-y": S() }],
        start: [{ "inset-s": S(), start: S() }],
        end: [{ "inset-e": S(), end: S() }],
        "inset-bs": [{ "inset-bs": S() }],
        "inset-be": [{ "inset-be": S() }],
        top: [{ top: S() }],
        right: [{ right: S() }],
        bottom: [{ bottom: S() }],
        left: [{ left: S() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [X, `auto`, $, Q] }],
        basis: [{ basis: [J, `full`, `auto`, s, ...x()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [Y, J, `auto`, `initial`, `none`, Q] }],
        grow: [{ grow: [``, Y, $, Q] }],
        shrink: [{ shrink: [``, Y, $, Q] }],
        order: [{ order: [X, `first`, `last`, `none`, $, Q] }],
        "grid-cols": [{ "grid-cols": C() }],
        "col-start-end": [{ col: w() }],
        "col-start": [{ "col-start": T() }],
        "col-end": [{ "col-end": T() }],
        "grid-rows": [{ "grid-rows": C() }],
        "row-start-end": [{ row: w() }],
        "row-start": [{ "row-start": T() }],
        "row-end": [{ "row-end": T() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": E() }],
        "auto-rows": [{ "auto-rows": E() }],
        gap: [{ gap: x() }],
        "gap-x": [{ "gap-x": x() }],
        "gap-y": [{ "gap-y": x() }],
        "justify-content": [{ justify: [...D(), `normal`] }],
        "justify-items": [{ "justify-items": [...O(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...O()] }],
        "align-content": [{ content: [`normal`, ...D()] }],
        "align-items": [{ items: [...O(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...O(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": D() }],
        "place-items": [{ "place-items": [...O(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...O()] }],
        p: [{ p: x() }],
        px: [{ px: x() }],
        py: [{ py: x() }],
        ps: [{ ps: x() }],
        pe: [{ pe: x() }],
        pbs: [{ pbs: x() }],
        pbe: [{ pbe: x() }],
        pt: [{ pt: x() }],
        pr: [{ pr: x() }],
        pb: [{ pb: x() }],
        pl: [{ pl: x() }],
        m: [{ m: k() }],
        mx: [{ mx: k() }],
        my: [{ my: k() }],
        ms: [{ ms: k() }],
        me: [{ me: k() }],
        mbs: [{ mbs: k() }],
        mbe: [{ mbe: k() }],
        mt: [{ mt: k() }],
        mr: [{ mr: k() }],
        mb: [{ mb: k() }],
        ml: [{ ml: k() }],
        "space-x": [{ "space-x": x() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": x() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: A() }],
        "inline-size": [{ inline: [`auto`, ...re()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...re()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...re()] }],
        "block-size": [{ block: [`auto`, ...j()] }],
        "min-block-size": [{ "min-block": [`auto`, ...j()] }],
        "max-block-size": [{ "max-block": [`none`, ...j()] }],
        w: [{ w: [s, `screen`, ...A()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...A()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...A()] },
        ],
        h: [{ h: [`screen`, `lh`, ...A()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...A()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...A()] }],
        "font-size": [{ text: [`base`, n, wr, _r] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Ar, yr] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              cr,
              Q,
            ],
          },
        ],
        "font-family": [{ font: [Tr, br, t] }],
        "font-features": [{ "font-features": [Q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, $, Q] }],
        "line-clamp": [{ "line-clamp": [Y, `none`, $, vr] }],
        leading: [{ leading: [a, ...x()] }],
        "list-image": [{ "list-image": [`none`, $, Q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: M() }],
        "text-color": [{ text: M() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...se(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [Y, `from-font`, `auto`, $, _r] },
        ],
        "text-decoration-color": [{ decoration: M() }],
        "underline-offset": [{ "underline-offset": [Y, `auto`, $, Q] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: x() }],
        "tab-size": [{ tab: [X, $, Q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              $,
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, $, Q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: N() }],
        "bg-repeat": [{ bg: ie() }],
        "bg-size": [{ bg: ae() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  X,
                  $,
                  Q,
                ],
                radial: [``, $, Q],
                conic: [X, $, Q],
              },
              Or,
              Sr,
            ],
          },
        ],
        "bg-color": [{ bg: M() }],
        "gradient-from-pos": [{ from: oe() }],
        "gradient-via-pos": [{ via: oe() }],
        "gradient-to-pos": [{ to: oe() }],
        "gradient-from": [{ from: M() }],
        "gradient-via": [{ via: M() }],
        "gradient-to": [{ to: M() }],
        rounded: [{ rounded: P() }],
        "rounded-s": [{ "rounded-s": P() }],
        "rounded-e": [{ "rounded-e": P() }],
        "rounded-t": [{ "rounded-t": P() }],
        "rounded-r": [{ "rounded-r": P() }],
        "rounded-b": [{ "rounded-b": P() }],
        "rounded-l": [{ "rounded-l": P() }],
        "rounded-ss": [{ "rounded-ss": P() }],
        "rounded-se": [{ "rounded-se": P() }],
        "rounded-ee": [{ "rounded-ee": P() }],
        "rounded-es": [{ "rounded-es": P() }],
        "rounded-tl": [{ "rounded-tl": P() }],
        "rounded-tr": [{ "rounded-tr": P() }],
        "rounded-br": [{ "rounded-br": P() }],
        "rounded-bl": [{ "rounded-bl": P() }],
        "border-w": [{ border: F() }],
        "border-w-x": [{ "border-x": F() }],
        "border-w-y": [{ "border-y": F() }],
        "border-w-s": [{ "border-s": F() }],
        "border-w-e": [{ "border-e": F() }],
        "border-w-bs": [{ "border-bs": F() }],
        "border-w-be": [{ "border-be": F() }],
        "border-w-t": [{ "border-t": F() }],
        "border-w-r": [{ "border-r": F() }],
        "border-w-b": [{ "border-b": F() }],
        "border-w-l": [{ "border-l": F() }],
        "divide-x": [{ "divide-x": F() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": F() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...se(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...se(), `hidden`, `none`] }],
        "border-color": [{ border: M() }],
        "border-color-x": [{ "border-x": M() }],
        "border-color-y": [{ "border-y": M() }],
        "border-color-s": [{ "border-s": M() }],
        "border-color-e": [{ "border-e": M() }],
        "border-color-bs": [{ "border-bs": M() }],
        "border-color-be": [{ "border-be": M() }],
        "border-color-t": [{ "border-t": M() }],
        "border-color-r": [{ "border-r": M() }],
        "border-color-b": [{ "border-b": M() }],
        "border-color-l": [{ "border-l": M() }],
        "divide-color": [{ divide: M() }],
        "outline-style": [{ outline: [...se(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [Y, $, Q] }],
        "outline-w": [{ outline: [``, Y, wr, _r] }],
        "outline-color": [{ outline: M() }],
        shadow: [{ shadow: [``, `none`, u, kr, Cr] }],
        "shadow-color": [{ shadow: M() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, kr, Cr] }],
        "inset-shadow-color": [{ "inset-shadow": M() }],
        "ring-w": [{ ring: F() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: M() }],
        "ring-offset-w": [{ "ring-offset": [Y, _r] }],
        "ring-offset-color": [{ "ring-offset": M() }],
        "inset-ring-w": [{ "inset-ring": F() }],
        "inset-ring-color": [{ "inset-ring": M() }],
        "text-shadow": [{ "text-shadow": [`none`, f, kr, Cr] }],
        "text-shadow-color": [{ "text-shadow": M() }],
        opacity: [{ opacity: [Y, $, Q] }],
        "mix-blend": [{ "mix-blend": [...I(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": I() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Y] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": M() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": M() }],
        "mask-image-t-from-pos": [{ "mask-t-from": L() }],
        "mask-image-t-to-pos": [{ "mask-t-to": L() }],
        "mask-image-t-from-color": [{ "mask-t-from": M() }],
        "mask-image-t-to-color": [{ "mask-t-to": M() }],
        "mask-image-r-from-pos": [{ "mask-r-from": L() }],
        "mask-image-r-to-pos": [{ "mask-r-to": L() }],
        "mask-image-r-from-color": [{ "mask-r-from": M() }],
        "mask-image-r-to-color": [{ "mask-r-to": M() }],
        "mask-image-b-from-pos": [{ "mask-b-from": L() }],
        "mask-image-b-to-pos": [{ "mask-b-to": L() }],
        "mask-image-b-from-color": [{ "mask-b-from": M() }],
        "mask-image-b-to-color": [{ "mask-b-to": M() }],
        "mask-image-l-from-pos": [{ "mask-l-from": L() }],
        "mask-image-l-to-pos": [{ "mask-l-to": L() }],
        "mask-image-l-from-color": [{ "mask-l-from": M() }],
        "mask-image-l-to-color": [{ "mask-l-to": M() }],
        "mask-image-x-from-pos": [{ "mask-x-from": L() }],
        "mask-image-x-to-pos": [{ "mask-x-to": L() }],
        "mask-image-x-from-color": [{ "mask-x-from": M() }],
        "mask-image-x-to-color": [{ "mask-x-to": M() }],
        "mask-image-y-from-pos": [{ "mask-y-from": L() }],
        "mask-image-y-to-pos": [{ "mask-y-to": L() }],
        "mask-image-y-from-color": [{ "mask-y-from": M() }],
        "mask-image-y-to-color": [{ "mask-y-to": M() }],
        "mask-image-radial": [{ "mask-radial": [$, Q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": M() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": M() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": ee() }],
        "mask-image-conic-pos": [{ "mask-conic": [Y] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": M() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": M() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: N() }],
        "mask-repeat": [{ mask: ie() }],
        "mask-size": [{ mask: ae() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, $, Q] }],
        filter: [{ filter: [``, `none`, $, Q] }],
        blur: [{ blur: R() }],
        brightness: [{ brightness: [Y, $, Q] }],
        contrast: [{ contrast: [Y, $, Q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, kr, Cr] }],
        "drop-shadow-color": [{ "drop-shadow": M() }],
        grayscale: [{ grayscale: [``, Y, $, Q] }],
        "hue-rotate": [{ "hue-rotate": [Y, $, Q] }],
        invert: [{ invert: [``, Y, $, Q] }],
        saturate: [{ saturate: [Y, $, Q] }],
        sepia: [{ sepia: [``, Y, $, Q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }],
        "backdrop-blur": [{ "backdrop-blur": R() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Y, $, Q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Y, $, Q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, Y, $, Q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Y, $, Q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, Y, $, Q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Y, $, Q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Y, $, Q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, Y, $, Q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": x() }],
        "border-spacing-x": [{ "border-spacing-x": x() }],
        "border-spacing-y": [{ "border-spacing-y": x() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              $,
              Q,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [Y, `initial`, $, Q] }],
        ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
        delay: [{ delay: [Y, $, Q] }],
        animate: [{ animate: [`none`, v, $, Q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, $, Q] }],
        "perspective-origin": [{ "perspective-origin": b() }],
        rotate: [{ rotate: z() }],
        "rotate-x": [{ "rotate-x": z() }],
        "rotate-y": [{ "rotate-y": z() }],
        "rotate-z": [{ "rotate-z": z() }],
        scale: [{ scale: B() }],
        "scale-x": [{ "scale-x": B() }],
        "scale-y": [{ "scale-y": B() }],
        "scale-z": [{ "scale-z": B() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: V() }],
        "skew-x": [{ "skew-x": V() }],
        "skew-y": [{ "skew-y": V() }],
        transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: b() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: ce() }],
        "translate-x": [{ "translate-x": ce() }],
        "translate-y": [{ "translate-y": ce() }],
        "translate-z": [{ "translate-z": ce() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [X, $, Q] }],
        accent: [{ accent: M() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: M() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              $,
              Q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": M() }],
        "scrollbar-track-color": [{ "scrollbar-track": M() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": x() }],
        "scroll-mx": [{ "scroll-mx": x() }],
        "scroll-my": [{ "scroll-my": x() }],
        "scroll-ms": [{ "scroll-ms": x() }],
        "scroll-me": [{ "scroll-me": x() }],
        "scroll-mbs": [{ "scroll-mbs": x() }],
        "scroll-mbe": [{ "scroll-mbe": x() }],
        "scroll-mt": [{ "scroll-mt": x() }],
        "scroll-mr": [{ "scroll-mr": x() }],
        "scroll-mb": [{ "scroll-mb": x() }],
        "scroll-ml": [{ "scroll-ml": x() }],
        "scroll-p": [{ "scroll-p": x() }],
        "scroll-px": [{ "scroll-px": x() }],
        "scroll-py": [{ "scroll-py": x() }],
        "scroll-ps": [{ "scroll-ps": x() }],
        "scroll-pe": [{ "scroll-pe": x() }],
        "scroll-pbs": [{ "scroll-pbs": x() }],
        "scroll-pbe": [{ "scroll-pbe": x() }],
        "scroll-pt": [{ "scroll-pt": x() }],
        "scroll-pr": [{ "scroll-pr": x() }],
        "scroll-pb": [{ "scroll-pb": x() }],
        "scroll-pl": [{ "scroll-pl": x() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] },
        ],
        fill: [{ fill: [`none`, ...M()] }],
        "stroke-w": [{ stroke: [Y, wr, _r, vr] }],
        stroke: [{ stroke: [`none`, ...M()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Hr(...e) {
  return Vr(bn(e));
}
function Ur({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: i = 100,
  "aria-label": a,
  "aria-labelledby": o,
  "aria-valuetext": s,
  ...c
}) {
  let l = f.useMemo(
    () => (Array.isArray(n) ? n : Array.isArray(t) ? t : [r, i]),
    [n, t, r, i],
  );
  return (0, R.jsxs)(Vt, {
    "data-slot": `slider`,
    defaultValue: t,
    value: n,
    min: r,
    max: i,
    className: Hr(
      `relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col`,
      e,
    ),
    ...c,
    children: [
      (0, R.jsx)(Jt, {
        "data-slot": `slider-track`,
        className: Hr(
          `relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5`,
        ),
        children: (0, R.jsx)(Xt, {
          "data-slot": `slider-range`,
          className: Hr(
            `absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full`,
          ),
        }),
      }),
      Array.from({ length: l.length }, (e, t) =>
        (0, R.jsx)(
          rn,
          {
            "data-slot": `slider-thumb`,
            "aria-label": a,
            "aria-labelledby": o,
            "aria-valuetext": s,
            className: `block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`,
          },
          t,
        ),
      ),
    ],
  });
}
var Wr = class {
    constructor() {
      ((this.offset = 0),
        (this.startAt = 0),
        (this.playing = !1),
        (this.loaded = !1),
        (this.volume = 0.78),
        (this.ended = !1),
        (this.generation = 0),
        (this.disposed = !1),
        (this.renderedEnd = !1));
    }
    async load(e) {
      if (this.disposed) return;
      let t = (this.context ??= new AudioContext({
        latencyHint: `playback`,
        sampleRate: 44100,
      }));
      ((this.gain = t.createGain()),
        (this.gain.gain.value = this.volume),
        (this.analyser = t.createAnalyser()),
        (this.analyser.fftSize = 512),
        (this.meter = new Float32Array(this.analyser.fftSize)),
        this.gain.connect(this.analyser),
        this.analyser.connect(t.destination),
        (t.onstatechange = () => {
          !this.disposed &&
            this.playing &&
            this.source &&
            t.state !== `running` &&
            this.pause();
        }),
        (this.fetchController = new AbortController()));
      let n = await fetch(`/assets/daybreak.mp3`, {
        signal: this.fetchController.signal,
      });
      if (!n.ok) throw Error(`The recording could not load. Please try again.`);
      let r = Number(n.headers.get(`content-length`)) || 0,
        i = n.body?.getReader(),
        a;
      if (i) {
        let t = [],
          n = 0;
        for (;;) {
          let { done: a, value: o } = await i.read();
          if (a) break;
          (t.push(o),
            (n += o.length),
            r && !this.disposed && e(Math.min(0.92, (n / r) * 0.92)));
        }
        let o = new Uint8Array(n),
          s = 0;
        for (let e of t) (o.set(e, s), (s += e.length));
        a = o.buffer;
      } else a = await n.arrayBuffer();
      if (this.disposed) return;
      e(0.94);
      let o = await t.decodeAudioData(a);
      this.disposed || ((this.buffer = o), (this.loaded = !0), e(1));
    }
    get duration() {
      return this.buffer?.duration ?? 0;
    }
    time() {
      if (!this.playing || !this.context || !this.source) return this.offset;
      let e = this.context,
        t = e.currentTime - (e.baseLatency || 0) - (e.outputLatency || 0),
        n = e.getOutputTimestamp?.();
      n &&
        Number.isFinite(n.contextTime) &&
        Number.isFinite(n.performanceTime) &&
        n.contextTime > 0 &&
        n.performanceTime > 0 &&
        (t = Math.min(
          e.currentTime,
          n.contextTime + (performance.now() - n.performanceTime) / 1e3,
        ));
      let r = a(this.offset + Math.max(0, t - this.startAt), 0, this.duration);
      return (
        this.renderedEnd &&
          r >= this.duration - 2e-4 &&
          ((this.offset = this.duration),
          (this.playing = !1),
          (this.ended = !0),
          this.source.disconnect(),
          this.sourceGain?.disconnect(),
          (this.source = void 0),
          (this.sourceGain = void 0)),
        r
      );
    }
    async play() {
      if (
        this.disposed ||
        !this.context ||
        !this.buffer ||
        !this.gain ||
        this.playing
      )
        return;
      let e = this.context,
        t = ++this.generation;
      (this.offset >= this.duration - 0.001 && (this.offset = 0),
        (this.playing = !0),
        (this.ended = !1),
        (this.renderedEnd = !1));
      try {
        if (
          (await e.resume(),
          this.disposed || t !== this.generation || !this.playing)
        )
          return;
        let n = e.createBufferSource(),
          r = e.createGain();
        ((n.buffer = this.buffer),
          n.connect(r),
          r.connect(this.gain),
          (this.startAt = e.currentTime + 0.045),
          r.gain.setValueAtTime(0, this.startAt),
          r.gain.linearRampToValueAtTime(1, this.startAt + 0.004),
          (this.source = n),
          (this.sourceGain = r),
          (n.onended = () => {
            this.source === n && this.playing
              ? (this.renderedEnd = !0)
              : (n.disconnect(), r.disconnect());
          }),
          n.start(this.startAt, this.offset));
      } catch (e) {
        if (this.disposed || t !== this.generation) return;
        throw ((this.playing = !1), this.releaseSource(), e);
      }
    }
    releaseSource() {
      let e = this.source,
        t = this.sourceGain,
        n = this.context;
      if (((this.source = void 0), (this.sourceGain = void 0), e)) {
        e.onended = () => {
          (e.disconnect(), t?.disconnect());
        };
        try {
          if (n && n.state === `running` && t) {
            let r = n.currentTime;
            (t.gain.cancelScheduledValues(r),
              t.gain.setTargetAtTime(0, r, 0.003),
              e.stop(r + 0.018));
          } else (e.stop(), e.disconnect(), t?.disconnect());
        } catch {
          (e.disconnect(), t?.disconnect());
        }
      }
    }
    pause() {
      (++this.generation,
        this.playing && (this.offset = this.time()),
        (this.playing = !1),
        (this.renderedEnd = !1),
        this.releaseSource());
    }
    async seek(e) {
      let t = this.playing;
      (this.pause(),
        (this.offset = a(e, 0, this.duration)),
        (this.ended = this.duration > 0 && this.offset >= this.duration),
        t && !this.ended && (await this.play()));
    }
    async restart() {
      let e = this.playing;
      (this.pause(),
        (this.offset = 0),
        (this.ended = !1),
        e && (await this.play()));
    }
    setVolume(e) {
      ((this.volume = a(e)),
        this.gain &&
          this.context &&
          this.gain.gain.setTargetAtTime(
            this.volume,
            this.context.currentTime,
            0.025,
          ));
    }
    rms() {
      return !this.analyser || !this.meter
        ? 0
        : (this.analyser.getFloatTimeDomainData(this.meter),
          Math.sqrt(
            this.meter.reduce((e, t) => e + t * t, 0) / this.meter.length,
          ));
    }
    dispose() {
      this.disposed ||
        (this.pause(),
        (this.disposed = !0),
        this.fetchController?.abort(),
        this.context &&
          ((this.context.onstatechange = null),
          this.context.close().catch(() => {})),
        this.gain?.disconnect(),
        this.analyser?.disconnect(),
        (this.buffer = void 0),
        (this.loaded = !1));
    }
  },
  Gr = (e) =>
    `${Math.floor(e / 60)}:${String(Math.floor(e % 60)).padStart(2, `0`)}`;
function Kr() {
  let e = (0, f.useRef)(null),
    t = (0, f.useRef)(null),
    n = (0, f.useRef)(null),
    r = (0, f.useRef)({ active: !1, resume: !1 }),
    a = (0, f.useRef)(0),
    o = (0, f.useRef)(0),
    [s, c] = (0, f.useState)(``),
    [l, u] = (0, f.useState)(null),
    [d, p] = (0, f.useState)(!1),
    [m, h] = (0, f.useState)(0),
    [g, S] = (0, f.useState)(!1),
    [C, w] = (0, f.useState)(!1),
    [T, E] = (0, f.useState)(!1),
    [D, O] = (0, f.useState)(0),
    [k, A] = (0, f.useState)(0.78),
    [re, j] = (0, f.useState)(``),
    [M, N] = (0, f.useState)(!0),
    [ie, ae] = (0, f.useState)(!1),
    [oe, P] = (0, f.useState)(!1),
    [F, se] = (0, f.useState)(null),
    [I, L] = (0, f.useState)(0),
    [z, B] = (0, f.useState)(!1),
    [V, ce] = (0, f.useState)(!1);
  (0, f.useEffect)(() => {
    let r = !1,
      s = null,
      l = new Wr();
    n.current = l;
    let d = new URLSearchParams(location.search);
    (P(d.has(`inspect`)),
      (a.current = performance.now()),
      (async () => {
        try {
          let n = await fetch(`/assets/score.json`);
          if (!n.ok)
            throw Error(`The performance could not load. Please refresh.`);
          let c = await n.json();
          if (r) return;
          u(c);
          let f = l.load(h).then(() => {
              r || S(!0);
            }),
            m = (async () => {
              try {
                let { PerformanceScene: n } = await i(
                  async () => {
                    let { PerformanceScene: e } = await import(
                      `./scene-B4wwGGrN.js`
                    );
                    return { PerformanceScene: e };
                  },
                  __vite__mapDeps([0, 1]),
                );
                if (r || !e.current) return;
                let u = new n(
                  e.current,
                  c,
                  () => l.time(),
                  (e) => {
                    performance.now() - o.current < 100 ||
                      ((o.current = performance.now()),
                      O(e.time),
                      se(e),
                      L(l.rms()),
                      E(l.playing),
                      N(!l.playing || performance.now() - a.current < 3500),
                      l.ended && N(!0));
                  },
                );
                ((s = u), (t.current = u));
                let f = Number(d.get(`shot`) ?? -1);
                f >= 0 && (u.direction.override = f);
                let m = Number(d.get(`at`) ?? -1);
                if ((m >= 0 && (u.showTime = m), await u.initialize(), r))
                  return;
                p(!0);
              } catch (e) {
                if (r) return;
                (console.warn(`3D display unavailable`, e),
                  s?.dispose(),
                  t.current === s && (t.current = null),
                  (s = null),
                  ce(!0),
                  p(!0));
              }
            })();
          await Promise.all([f, m]);
        } catch (e) {
          r ||
            c(
              e instanceof Error
                ? e.message
                : `The performance could not load. Please refresh.`,
            );
        }
      })());
    let f = window.setInterval(() => {
        (t.current && ce(t.current.contextLost),
          !(t.current && !t.current.contextLost) &&
            (O(l.time()),
            E(l.playing),
            L(l.rms()),
            N(!l.playing || performance.now() - a.current < 3500)));
      }, 100),
      m = () => ae(!!document.fullscreenElement);
    return (
      document.addEventListener(`fullscreenchange`, m),
      () => {
        ((r = !0),
          window.clearInterval(f),
          document.removeEventListener(`fullscreenchange`, m),
          l.dispose(),
          s?.dispose(),
          t.current === s && (t.current = null));
      }
    );
  }, []);
  async function le() {
    if (!(!g || !d || !n.current)) {
      if (
        (j(``),
        (a.current = performance.now()),
        t.current && (t.current.showTime = -1),
        n.current.playing)
      )
        n.current.pause();
      else
        try {
          (await n.current.play(), w(!0));
        } catch {
          j(`Audio is paused by your browser. Tap play to try again.`);
        }
      (E(n.current.playing), N(!0));
    }
  }
  async function H() {
    if (!(!g || !n.current)) {
      try {
        (await n.current.restart(), j(``));
      } catch {
        j(`Tap play to resume the music.`);
      }
      (t.current && (t.current.showTime = -1),
        O(0),
        (a.current = performance.now()));
    }
  }
  async function ue() {
    if (g && (await H(), n.current))
      try {
        (await n.current.play(), w(!0), E(n.current.playing), j(``));
      } catch {
        j(`Tap play to resume the music.`);
      }
  }
  async function de(e) {
    if (g) {
      try {
        (n.current && (await n.current.seek(e)), j(``));
      } catch {
        j(`Tap play to resume the music.`);
      }
      (t.current && (t.current.showTime = -1),
        O(e),
        (a.current = performance.now()));
    }
  }
  function fe(e) {
    let i = n.current;
    i &&
      (r.current.active ||
        ((r.current = { active: !0, resume: i.playing }), i.pause()),
      i.seek(e),
      t.current && (t.current.showTime = -1),
      O(e),
      (a.current = performance.now()));
  }
  async function pe(e) {
    let t = n.current;
    if (!t) return;
    let i = r.current.resume;
    if (
      ((r.current = { active: !1, resume: !1 }),
      await t.seek(e),
      i && e < t.duration)
    )
      try {
        (await t.play(), j(``));
      } catch {
        j(`Tap play to resume the music.`);
      }
    E(t.playing);
  }
  function me(e) {
    (A(e), n.current?.setVolume(e));
  }
  async function he() {
    try {
      document.fullscreenElement
        ? await document.exitFullscreen()
        : await document.documentElement.requestFullscreen();
    } catch {
      j(`Fullscreen is unavailable in this browser.`);
    }
  }
  (0, f.useEffect)(() => {
    let e = (e) => {
      if (
        e.defaultPrevented ||
        e.isComposing ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey
      )
        return;
      if (e.key === `Escape`) {
        (B(!1), j(``));
        return;
      }
      let t = e.target;
      if (
        !(
          t instanceof HTMLElement &&
          t.closest(
            `a,button,[role="slider"],input,select,textarea,[contenteditable="true"]`,
          )
        )
      ) {
        if (e.code === `Space`) {
          (e.preventDefault(), e.repeat || le());
          return;
        }
        e.repeat ||
          ((e.key === `r` || e.key === `R`) && H(),
          (e.key === `f` || e.key === `F`) && he(),
          e.key === `ArrowRight` &&
            (e.preventDefault(), de(Math.min(l?.duration ?? 0, D + 5))),
          e.key === `ArrowLeft` &&
            (e.preventDefault(), de(Math.max(0, D - 5))));
      }
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  });
  let ge = () => {
      ((a.current = performance.now()), N(!0));
    },
    U = d && g,
    _e = l?.duration ?? 233.144228,
    W =
      l?.sections.find((e) => D >= e.start && D < e.end)?.name ??
      (D >= _e
        ? (l?.sections.at(-1)?.name ?? `Home in the light`)
        : `First light`);
  return (0, R.jsxs)(`main`, {
    className: `performance ${C ? `has-begun` : ``} ${M ? `show-controls` : ``}`,
    onPointerMove: ge,
    onPointerDown: ge,
    children: [
      (0, R.jsx)(`div`, { className: `world`, ref: e }),
      (0, R.jsxs)(`picture`, {
        className: `stage-poster ${d && !V ? `poster-hidden` : ``}`,
        "aria-hidden": `true`,
        children: [
          (0, R.jsx)(`source`, {
            media: `(max-aspect-ratio: 1/1)`,
            srcSet: `/assets/stage-portrait.webp`,
          }),
          (0, R.jsx)(`img`, { src: `/assets/stage-poster.webp`, alt: `` }),
        ],
      }),
      (0, R.jsx)(`div`, { className: `film-shade`, "aria-hidden": `true` }),
      V &&
        (0, R.jsxs)(`div`, {
          className: `graphics-notice`,
          children: [
            (0, R.jsx)(`p`, {
              children: `3D graphics unavailable in this browser.`,
            }),
            (0, R.jsx)(`span`, {
              children: `You can still listen to the complete piece.`,
            }),
          ],
        }),
      (0, R.jsxs)(`header`, {
        className: `film-header`,
        children: [
          (0, R.jsxs)(`a`, {
            href: `/`,
            className: `wordmark`,
            "aria-label": `Daybreak home`,
            children: [
              `Daybreak`,
              (0, R.jsx)(`span`, { className: `wordmark-dot` }),
            ],
          }),
          (0, R.jsxs)(`button`, {
            className: `credit-trigger`,
            "aria-controls": `piece-credits`,
            onClick: () => B(!z),
            "aria-expanded": z,
            children: [`About the piece `, (0, R.jsx)(_, { size: 14 })],
          }),
        ],
      }),
      !C &&
        (0, R.jsxs)(`section`, {
          className: `opening ${d ? `scene-ready` : ``}`,
          "aria-label": `Begin the performance`,
          children: [
            (0, R.jsx)(`p`, {
              className: `opening-description`,
              children: `An original piano performance`,
            }),
            (0, R.jsx)(`h1`, { children: `Daybreak` }),
            (0, R.jsxs)(`div`, {
              className: `opening-action`,
              children: [
                (0, R.jsx)(`button`, {
                  className: `begin`,
                  onClick: () => void le(),
                  disabled: !U,
                  "aria-label": U ? `Play Daybreak` : `Loading the performance`,
                  children: U
                    ? (0, R.jsx)(b, { size: 21, fill: `currentColor` })
                    : (0, R.jsx)(`span`, { className: `loading-ring` }),
                }),
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`button`, {
                      className: `begin-text`,
                      onClick: () => void le(),
                      disabled: !U,
                      children: U
                        ? V
                          ? `Play the music`
                          : `Play the film`
                        : d
                          ? `Preparing the music`
                          : `Setting the stage`,
                    }),
                    (0, R.jsx)(`p`, {
                      children: U
                        ? `${Gr(_e)} · Sound on`
                        : `${Math.round(m * 100)}%`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      (0, R.jsxs)(`div`, {
        className: `playback ${C ? `visible` : ``}`,
        "aria-label": `Playback controls`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `playback-meta`,
            children: [
              (0, R.jsx)(`span`, { children: W }),
              (0, R.jsxs)(`span`, {
                className: `timecode`,
                children: [
                  Gr(D),
                  ` `,
                  (0, R.jsxs)(`span`, { children: [`/ `, Gr(_e)] }),
                ],
              }),
            ],
          }),
          (0, R.jsx)(Ur, {
            className: `timeline`,
            "aria-label": `Performance position`,
            "aria-valuetext": `${Gr(D)} of ${Gr(_e)}`,
            min: 0,
            max: _e,
            step: 0.1,
            value: [D],
            onValueChange: (e) => fe(e[0]),
            onValueCommit: (e) => void pe(e[0]),
          }),
          (0, R.jsxs)(`div`, {
            className: `playback-row`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `left-controls`,
                children: [
                  (0, R.jsx)(`button`, {
                    className: `icon-button play-control`,
                    onClick: () => void le(),
                    "aria-label": T ? `Pause performance` : `Play performance`,
                    children: T
                      ? (0, R.jsx)(ee, { size: 20, fill: `currentColor` })
                      : (0, R.jsx)(b, { size: 20, fill: `currentColor` }),
                  }),
                  (0, R.jsx)(`button`, {
                    className: `icon-button`,
                    onClick: () => void H(),
                    "aria-label": `Restart performance`,
                    children: (0, R.jsx)(te, { size: 18 }),
                  }),
                  (0, R.jsx)(`span`, {
                    className: `piece-label`,
                    children: `Daybreak`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `right-controls`,
                children: [
                  (0, R.jsx)(`button`, {
                    className: `icon-button`,
                    onClick: () => me(k > 0.001 ? 0 : 0.78),
                    "aria-label": k > 0.001 ? `Mute` : `Unmute`,
                    children:
                      k > 0.001
                        ? (0, R.jsx)(ne, { size: 18 })
                        : (0, R.jsx)(x, { size: 18 }),
                  }),
                  (0, R.jsx)(Ur, {
                    className: `volume`,
                    "aria-label": `Volume`,
                    "aria-valuetext": `${Math.round(k * 100)} percent`,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: [k],
                    onValueChange: (e) => me(e[0]),
                  }),
                  (0, R.jsx)(`button`, {
                    className: `icon-button`,
                    onClick: () => void he(),
                    "aria-label": ie ? `Exit fullscreen` : `Fullscreen`,
                    children: ie
                      ? (0, R.jsx)(y, { size: 18 })
                      : (0, R.jsx)(v, { size: 18 }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      C &&
        !T &&
        D >= _e - 0.5 &&
        (0, R.jsxs)(`div`, {
          className: `end-title`,
          children: [
            (0, R.jsx)(`span`, { children: `Daybreak` }),
            (0, R.jsxs)(`button`, {
              onClick: () => void ue(),
              children: [(0, R.jsx)(te, { size: 16 }), ` Play again`],
            }),
          ],
        }),
      z &&
        (0, R.jsxs)(`aside`, {
          id: `piece-credits`,
          className: `credits`,
          "aria-label": `About Daybreak`,
          children: [
            (0, R.jsx)(`button`, {
              className: `credits-close`,
              onClick: () => B(!1),
              "aria-label": `Close credits`,
              children: `×`,
            }),
            (0, R.jsx)(`h2`, { children: `Daybreak` }),
            (0, R.jsx)(`p`, {
              children: `An original piano-led piece, from first light to a final lift.`,
            }),
            (0, R.jsx)(`p`, {
              children: `Music, movement and camera share one score. The performance is rendered in real time.`,
            }),
            (0, R.jsxs)(`p`, {
              className: `credits-small`,
              children: [
                `Piano: Salamander Grand Piano v3, Alexander Holm, CC BY 3.0.`,
                (0, R.jsx)(`br`, {}),
                `Performer: MakeHuman / MPFB, provided by TalkingHead, CC0.`,
              ],
            }),
            (0, R.jsxs)(`a`, {
              href: `/assets/credits.txt`,
              target: `_blank`,
              rel: `noreferrer`,
              children: [
                `Full credits and licenses `,
                (0, R.jsx)(_, { size: 14 }),
              ],
            }),
          ],
        }),
      (s || re) &&
        (0, R.jsxs)(`div`, {
          role: `alert`,
          className: `load-error`,
          children: [
            (0, R.jsx)(`p`, { children: s || re }),
            s
              ? (0, R.jsx)(`button`, {
                  onClick: () => location.reload(),
                  children: `Reload performance`,
                })
              : (0, R.jsx)(`button`, {
                  onClick: () => j(``),
                  children: `Dismiss`,
                }),
          ],
        }),
      oe &&
        (0, R.jsxs)(`aside`, {
          className: `inspection`,
          children: [
            (0, R.jsx)(`div`, { children: `Performance inspection` }),
            (0, R.jsxs)(`p`, {
              children: [
                `Time `,
                D.toFixed(3),
                ` · `,
                F?.fps.toFixed(1),
                ` fps · PCM RMS `,
                I.toFixed(5),
              ],
            }),
            (0, R.jsxs)(`p`, {
              children: [
                `Camera: `,
                F?.shot,
                ` · `,
                F?.calls,
                ` calls · `,
                F?.triangles,
                ` triangles`,
              ],
            }),
            (0, R.jsxs)(`p`, {
              children: [`Keys: `, F?.activeNotes.join(`, `)],
            }),
            (0, R.jsxs)(`p`, {
              children: [
                `Contacts: `,
                F?.contacts
                  .map(
                    (e) =>
                      `${e.hand}${e.finger}=${e.midi} ${(e.error * 1e3).toFixed(1)}mm`,
                  )
                  .join(` / `),
              ],
            }),
            (0, R.jsx)(`div`, {
              className: `inspection-actions`,
              children: l?.sections.map((e) =>
                (0, R.jsx)(
                  `button`,
                  {
                    onClick: () => {
                      (t.current && (t.current.showTime = e.start + 0.65),
                        O(e.start + 0.65));
                    },
                    children: e.name,
                  },
                  e.start,
                ),
              ),
            }),
            (0, R.jsxs)(`div`, {
              className: `inspection-actions`,
              children: [
                t.current?.direction.shots.map((e, n) =>
                  (0, R.jsxs)(
                    `button`,
                    {
                      onClick: () => {
                        t.current && (t.current.direction.override = n);
                      },
                      children: [n, ` `, e.name],
                    },
                    n,
                  ),
                ),
                (0, R.jsx)(`button`, {
                  onClick: () => {
                    t.current &&
                      ((t.current.direction.override = -1),
                      (t.current.showTime = -1));
                  },
                  children: `Automatic`,
                }),
              ],
            }),
          ],
        }),
      (0, R.jsx)(`output`, {
        id: `performance-state`,
        hidden: !0,
        "data-time": D.toFixed(4),
        "data-playing": T,
        "data-audio-ready": g,
        "data-rms": I.toFixed(6),
        "data-shot": F?.shot,
        "data-contacts": JSON.stringify(F?.contacts ?? []),
        "data-notes": JSON.stringify(F?.activeNotes ?? []),
        "data-fps": F?.fps.toFixed(1),
        "data-ready": d,
      }),
    ],
  });
}
export { Kr as default };
