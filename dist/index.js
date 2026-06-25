import { forwardRef as e } from "react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), n = /* @__PURE__ */ t(((e) => {
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
})), r = (/* @__PURE__ */ t(((e, t) => {
	t.exports = n();
})))(), i = e(({ category: e = "primary", variant: t = "default", size: n = "medium", fullWidth: i = !1, loading: a = !1, disabled: o, children: s, className: c = "", ...l }, u) => /* @__PURE__ */ (0, r.jsx)("button", {
	ref: u,
	className: ["scener-button", c].filter(Boolean).join(" "),
	"data-category": e,
	"data-variant": t,
	"data-size": n,
	"data-full-width": i || void 0,
	"data-loading": a || void 0,
	disabled: o || a,
	"aria-busy": a || void 0,
	...l,
	children: a ? /* @__PURE__ */ (0, r.jsx)("span", {
		className: "scener-button_spinner",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ (0, r.jsx)(r.Fragment, { children: /* @__PURE__ */ (0, r.jsx)("span", {
		className: "scener-button_label",
		children: s
	}) })
}));
i.displayName = "Button";
//#endregion
//#region src/components/Badge/Badge.tsx
var a = {
	exhibition: "전시",
	performance: "공연",
	popup: "팝업",
	film: "영화"
}, o = {
	ongoing: "진행중",
	upcoming: "예정",
	ended: "종료"
}, s = ({ category: e, status: t, appearance: n = "subtle", size: i = "medium", className: s = "", ...c }) => {
	let l = t !== void 0, u = l ? o[t] : e ? a[e] : "", d = l ? t : e, f = l ? "filled" : n;
	return /* @__PURE__ */ (0, r.jsxs)("div", {
		className: ["scener-badge", s].filter(Boolean).join(" "),
		"data-appearance": f,
		"data-key": d,
		"data-size": i,
		...c,
		children: [/* @__PURE__ */ (0, r.jsx)("span", {
			className: "scener-badge_dot",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, r.jsx)("span", {
			className: "scener-badge_label",
			children: u
		})]
	});
}, c = ({ children: e, selected: t = !1, size: n = "medium", className: i = "", ...a }) => /* @__PURE__ */ (0, r.jsxs)("button", {
	type: "button",
	className: ["scener-chip", i].filter(Boolean).join(" "),
	"data-selected": t,
	"data-size": n,
	"aria-pressed": t,
	...a,
	children: ["#", e]
}), l = (e) => {
	let { variant: t = "simple", className: n = "", ...a } = e, o = ["scener-title", n].filter(Boolean).join(" ");
	if (t === "recommendation") {
		let { label: e, title: t, description: n, ...i } = a;
		return /* @__PURE__ */ (0, r.jsxs)("div", {
			className: o,
			"data-variant": "recommendation",
			...i,
			children: [
				/* @__PURE__ */ (0, r.jsx)("div", {
					className: "scener-title_label",
					children: e
				}),
				/* @__PURE__ */ (0, r.jsx)("div", {
					className: "scener-title_title",
					children: t
				}),
				/* @__PURE__ */ (0, r.jsx)("div", {
					className: "scener-title_description",
					children: n
				})
			]
		});
	}
	if (t === "withAction") {
		let { label: e, title: t, actionLabel: n = "더보기", onAction: s, ...c } = a;
		return /* @__PURE__ */ (0, r.jsxs)("div", {
			className: o,
			"data-variant": "withAction",
			...c,
			children: [/* @__PURE__ */ (0, r.jsxs)("div", {
				className: "scener-title_text",
				children: [/* @__PURE__ */ (0, r.jsx)("div", {
					className: "scener-title_label",
					children: e
				}), /* @__PURE__ */ (0, r.jsx)("div", {
					className: "scener-title_title",
					children: t
				})]
			}), /* @__PURE__ */ (0, r.jsx)(i, {
				category: "ghost",
				size: "small",
				onClick: s,
				children: n
			})]
		});
	}
	let { label: s, title: c, ...l } = a;
	return /* @__PURE__ */ (0, r.jsxs)("div", {
		className: o,
		"data-variant": "simple",
		...l,
		children: [/* @__PURE__ */ (0, r.jsx)("div", {
			className: "scener-title_label",
			children: s
		}), /* @__PURE__ */ (0, r.jsx)("div", {
			className: "scener-title_title",
			children: c
		})]
	});
}, u = ({ imageSrc: e, category: t, status: n, matchLabel: i, contentTitle: a, description: o, className: c = "", ...u }) => /* @__PURE__ */ (0, r.jsxs)("div", {
	className: ["scener-event-card", c].filter(Boolean).join(" "),
	...u,
	children: [
		/* @__PURE__ */ (0, r.jsx)("div", {
			className: "scener-event-card_image",
			children: e && /* @__PURE__ */ (0, r.jsx)("img", {
				src: e,
				alt: a
			})
		}),
		/* @__PURE__ */ (0, r.jsxs)("div", {
			className: "scener-event-card_badges",
			children: [/* @__PURE__ */ (0, r.jsx)(s, {
				category: t,
				appearance: "outline"
			}), /* @__PURE__ */ (0, r.jsx)(s, { status: n })]
		}),
		/* @__PURE__ */ (0, r.jsx)("div", {
			className: "scener-event-card_overlay",
			children: /* @__PURE__ */ (0, r.jsx)(l, {
				variant: "recommendation",
				label: i,
				title: a,
				description: o
			})
		})
	]
}), d = ({ items: e, className: t = "", ...n }) => /* @__PURE__ */ (0, r.jsx)("div", {
	className: ["scener-event-list", t].filter(Boolean).join(" "),
	...n,
	children: e.map((e, t) => /* @__PURE__ */ (0, r.jsxs)("div", {
		className: "scener-event-list_item",
		children: [
			/* @__PURE__ */ (0, r.jsx)("div", {
				className: "scener-event-list_thumbnail",
				children: e.thumbnailSrc && /* @__PURE__ */ (0, r.jsx)("img", {
					src: e.thumbnailSrc,
					alt: e.title
				})
			}),
			/* @__PURE__ */ (0, r.jsxs)("div", {
				className: "scener-event-list_content",
				children: [
					/* @__PURE__ */ (0, r.jsx)(s, {
						category: e.category,
						size: "small"
					}),
					/* @__PURE__ */ (0, r.jsx)("div", {
						className: "scener-event-list_title",
						children: e.title
					}),
					/* @__PURE__ */ (0, r.jsx)("div", {
						className: "scener-event-list_meta",
						children: e.meta
					})
				]
			}),
			/* @__PURE__ */ (0, r.jsx)("div", {
				className: "scener-event-list_dday",
				"data-urgent": e.urgent ?? !1,
				children: e.ddayLabel
			})
		]
	}, t))
}), f = ({ layout: e = "card", imageSrc: t, categoryLabel: n, title: i, author: a, readTime: o, className: s = "", ...c }) => /* @__PURE__ */ (0, r.jsxs)("div", {
	className: ["scener-article-item", s].filter(Boolean).join(" "),
	"data-layout": e,
	...c,
	children: [/* @__PURE__ */ (0, r.jsx)("div", {
		className: "scener-article-item_thumbnail",
		children: t && /* @__PURE__ */ (0, r.jsx)("img", {
			src: t,
			alt: i
		})
	}), /* @__PURE__ */ (0, r.jsxs)("div", {
		className: "scener-article-item_content",
		children: [
			/* @__PURE__ */ (0, r.jsx)("p", {
				className: "scener-article-item_label",
				children: n
			}),
			/* @__PURE__ */ (0, r.jsx)("p", {
				className: "scener-article-item_title",
				children: i
			}),
			/* @__PURE__ */ (0, r.jsxs)("div", {
				className: "scener-article-item_meta",
				children: [/* @__PURE__ */ (0, r.jsx)("span", {
					className: "scener-article-item_author",
					children: a
				}), /* @__PURE__ */ (0, r.jsxs)("span", {
					className: "scener-article-item_readtime",
					children: [o, "분"]
				})]
			})
		]
	})]
});
//#endregion
export { f as ArticleItem, s as Badge, i as Button, c as Chip, u as EventCard, d as EventList, l as Title };
