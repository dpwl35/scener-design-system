import { forwardRef as e } from "react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), r = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), i = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), a = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = r() : t.exports = i();
})))(), o = e(({ category: e = "primary", variant: t = "default", size: n = "medium", fullWidth: r = !1, loading: i = !1, disabled: o, children: s, className: c = "", ...l }, u) => /* @__PURE__ */ (0, a.jsx)("button", {
	ref: u,
	className: ["scener-button", c].filter(Boolean).join(" "),
	"data-category": e,
	"data-variant": t,
	"data-size": n,
	"data-full-width": r || void 0,
	"data-loading": i || void 0,
	disabled: o || i,
	"aria-busy": i || void 0,
	...l,
	children: i ? /* @__PURE__ */ (0, a.jsx)("span", {
		className: "scener-button_spinner",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ (0, a.jsx)(a.Fragment, { children: /* @__PURE__ */ (0, a.jsx)("span", {
		className: "scener-button_label",
		children: s
	}) })
}));
o.displayName = "Button";
//#endregion
//#region src/components/Badge/Badge.tsx
var s = {
	exhibition: "전시",
	performance: "공연",
	popup: "팝업",
	film: "영화"
}, c = {
	ongoing: "진행중",
	upcoming: "예정",
	ended: "종료"
}, l = ({ category: e, status: t, appearance: n = "subtle", size: r = "medium", className: i = "", ...o }) => {
	let l = t !== void 0, u = l ? c[t] : e ? s[e] : "", d = l ? t : e, f = l ? "filled" : n;
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: ["scener-badge", i].filter(Boolean).join(" "),
		"data-appearance": f,
		"data-key": d,
		"data-size": r,
		...o,
		children: [/* @__PURE__ */ (0, a.jsx)("span", {
			className: "scener-badge_dot",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, a.jsx)("span", {
			className: "scener-badge_label",
			children: u
		})]
	});
}, u = ({ children: e, selected: t = !1, size: n = "medium", className: r = "", ...i }) => /* @__PURE__ */ (0, a.jsxs)("button", {
	type: "button",
	className: ["scener-chip", r].filter(Boolean).join(" "),
	"data-selected": t,
	"data-size": n,
	"aria-pressed": t,
	...i,
	children: ["#", e]
}), d = (e) => {
	let { variant: t = "simple", className: n = "", ...r } = e, i = ["scener-title", n].filter(Boolean).join(" ");
	if (t === "recommendation") {
		let { label: e, title: t, description: n, ...o } = r;
		return /* @__PURE__ */ (0, a.jsxs)("div", {
			className: i,
			"data-variant": "recommendation",
			...o,
			children: [
				/* @__PURE__ */ (0, a.jsx)("div", {
					className: "scener-title_label",
					children: e
				}),
				/* @__PURE__ */ (0, a.jsx)("div", {
					className: "scener-title_title",
					children: t
				}),
				/* @__PURE__ */ (0, a.jsx)("div", {
					className: "scener-title_description",
					children: n
				})
			]
		});
	}
	if (t === "withAction") {
		let { label: e, title: t, actionLabel: n = "더보기", onAction: s, ...c } = r;
		return /* @__PURE__ */ (0, a.jsxs)("div", {
			className: i,
			"data-variant": "withAction",
			...c,
			children: [/* @__PURE__ */ (0, a.jsxs)("div", {
				className: "scener-title_text",
				children: [/* @__PURE__ */ (0, a.jsx)("div", {
					className: "scener-title_label",
					children: e
				}), /* @__PURE__ */ (0, a.jsx)("div", {
					className: "scener-title_title",
					children: t
				})]
			}), /* @__PURE__ */ (0, a.jsx)(o, {
				category: "ghost",
				size: "small",
				onClick: s,
				children: n
			})]
		});
	}
	let { label: s, title: c, ...l } = r;
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: i,
		"data-variant": "simple",
		...l,
		children: [/* @__PURE__ */ (0, a.jsx)("div", {
			className: "scener-title_label",
			children: s
		}), /* @__PURE__ */ (0, a.jsx)("div", {
			className: "scener-title_title",
			children: c
		})]
	});
}, f = ({ imageSrc: e, category: t, status: n, matchLabel: r, contentTitle: i, description: o, className: s = "", ...c }) => /* @__PURE__ */ (0, a.jsxs)("div", {
	className: ["scener-event-card", s].filter(Boolean).join(" "),
	...c,
	children: [
		/* @__PURE__ */ (0, a.jsx)("div", {
			className: "scener-event-card_image",
			children: e && /* @__PURE__ */ (0, a.jsx)("img", {
				src: e,
				alt: i
			})
		}),
		/* @__PURE__ */ (0, a.jsxs)("div", {
			className: "scener-event-card_badges",
			children: [/* @__PURE__ */ (0, a.jsx)(l, {
				category: t,
				appearance: "outline"
			}), /* @__PURE__ */ (0, a.jsx)(l, { status: n })]
		}),
		/* @__PURE__ */ (0, a.jsx)("div", {
			className: "scener-event-card_overlay",
			children: /* @__PURE__ */ (0, a.jsx)(d, {
				variant: "recommendation",
				label: r,
				title: i,
				description: o
			})
		})
	]
}), p = ({ items: e, className: t = "", ...n }) => /* @__PURE__ */ (0, a.jsx)("div", {
	className: ["scener-event-list", t].filter(Boolean).join(" "),
	...n,
	children: e.map((e, t) => /* @__PURE__ */ (0, a.jsxs)("div", {
		className: "scener-event-list_item",
		children: [
			/* @__PURE__ */ (0, a.jsx)("div", {
				className: "scener-event-list_thumbnail",
				children: e.thumbnailSrc && /* @__PURE__ */ (0, a.jsx)("img", {
					src: e.thumbnailSrc,
					alt: e.title
				})
			}),
			/* @__PURE__ */ (0, a.jsxs)("div", {
				className: "scener-event-list_content",
				children: [
					/* @__PURE__ */ (0, a.jsx)(l, {
						category: e.category,
						size: "small"
					}),
					/* @__PURE__ */ (0, a.jsx)("div", {
						className: "scener-event-list_title",
						children: e.title
					}),
					/* @__PURE__ */ (0, a.jsx)("div", {
						className: "scener-event-list_meta",
						children: e.meta
					})
				]
			}),
			/* @__PURE__ */ (0, a.jsx)("div", {
				className: "scener-event-list_dday",
				"data-urgent": e.urgent ?? !1,
				children: e.ddayLabel
			})
		]
	}, t))
}), m = ({ layout: e = "card", imageSrc: t, categoryLabel: n, title: r, author: i, readTime: o, className: s = "", ...c }) => /* @__PURE__ */ (0, a.jsxs)("div", {
	className: ["scener-article-item", s].filter(Boolean).join(" "),
	"data-layout": e,
	...c,
	children: [/* @__PURE__ */ (0, a.jsx)("div", {
		className: "scener-article-item_thumbnail",
		children: t && /* @__PURE__ */ (0, a.jsx)("img", {
			src: t,
			alt: r
		})
	}), /* @__PURE__ */ (0, a.jsxs)("div", {
		className: "scener-article-item_content",
		children: [
			/* @__PURE__ */ (0, a.jsx)("p", {
				className: "scener-article-item_label",
				children: n
			}),
			/* @__PURE__ */ (0, a.jsx)("p", {
				className: "scener-article-item_title",
				children: r
			}),
			/* @__PURE__ */ (0, a.jsxs)("div", {
				className: "scener-article-item_meta",
				children: [/* @__PURE__ */ (0, a.jsx)("span", {
					className: "scener-article-item_author",
					children: i
				}), /* @__PURE__ */ (0, a.jsxs)("span", {
					className: "scener-article-item_readtime",
					children: [o, "분"]
				})]
			})
		]
	})]
});
//#endregion
export { m as ArticleItem, l as Badge, o as Button, u as Chip, f as EventCard, p as EventList, d as Title };
