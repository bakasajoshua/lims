"ace" in window || (window.ace = {}), "helper" in window.ace || (window.ace.helper = {}), "vars" in window.ace || (window.ace.vars = {
    icon: " ace-icon ",
    ".icon": ".ace-icon"
}), ace.vars.touch = "ontouchstart" in document.documentElement, jQuery(function (e) {
    ace.click_event = ace.vars.touch && e.fn.tap ? "tap" : "click";
    var a = navigator.userAgent;
    ace.vars.webkit = !!a.match(/AppleWebKit/i), ace.vars.safari = !!a.match(/Safari/i) && !a.match(/Chrome/i), ace.vars.android = ace.vars.safari && !!a.match(/Android/i), ace.vars.ios_safari = !!a.match(/OS ([4-8])(_\d)+ like Mac OS X/i) && !a.match(/CriOS/i), ace.vars.non_auto_fixed = ace.vars.android || ace.vars.ios_safari, ace.vars.non_auto_fixed && e("body").addClass("mob-safari"), ace.vars.transition = "transition" in document.body.style || "WebkitTransition" in document.body.style || "MozTransition" in document.body.style || "OTransition" in document.body.style;
    var t = {
        general_vars: null,
        handle_side_menu: null,
        add_touch_drag: null,
        sidebar_scrollable: [!0, !0, !1 || ace.vars.safari || ace.vars.ios_safari, 200, !1],
        sidebar_hoverable: null,
        general_things: null,
        widget_boxes: null,
        widget_reload_handler: null,
        settings_box: null,
        settings_rtl: null,
        settings_skin: null,
        enable_searchbox_autocomplete: null,
        auto_hide_sidebar: null,
        auto_padding: null,
        auto_container: null
    };
    for (var s in t)
        if (s in ace) {
            var i = t[s];
            i !== !1 && (null == i ? i = [jQuery] : i instanceof String ? i = [jQuery, i] : i instanceof Array && i.unshift(jQuery), ace[s].apply(null, i))
        }
}), ace.general_vars = function (e) {
    var a = "menu-min",
        t = "responsive-min",
        s = "h-sidebar",
        i = e("#sidebar").eq(0);
    ace.vars.mobile_style = 1, i.hasClass("responsive") && !e("#menu-toggler").hasClass("navbar-toggle") ? ace.vars.mobile_style = 2 : i.hasClass(t) ? ace.vars.mobile_style = 3 : i.hasClass("navbar-collapse") && (ace.vars.mobile_style = 4), e(window).on("resize.ace.vars", function () {
        ace.vars.window = {
            width: parseInt(e(this).width()),
            height: parseInt(e(this).height())
        }, ace.vars.mobile_view = ace.vars.mobile_style < 4 && ace.helper.mobile_view(), ace.vars.collapsible = !ace.vars.mobile_view && ace.helper.collapsible(), ace.vars.nav_collapse = (ace.vars.collapsible || ace.vars.mobile_view) && e("#navbar").hasClass("navbar-collapse");
        var i = e(document.getElementById("sidebar"));
        ace.vars.minimized = !ace.vars.collapsible && i.hasClass(a) || 3 == ace.vars.mobile_style && ace.vars.mobile_view && i.hasClass(t), ace.vars.horizontal = !(ace.vars.mobile_view || ace.vars.collapsible) && i.hasClass(s)
    }).triggerHandler("resize.ace.vars")
}, ace.general_things = function (e) {
    var a = !!e.fn.ace_scroll;
    a && e(".dropdown-content").ace_scroll({
        reset: !1,
        mouseWheelLock: !0
    }), e(window).on("resize.reset_scroll", function () {
        a && e(".ace-scroll").ace_scroll("reset")
    }), e(document).on("settings.ace.reset_scroll", function (t, s) {
        "sidebar_collapsed" == s && a && e(".ace-scroll").ace_scroll("reset")
    }), e(document).on("click.dropdown.pos", '.dropdown-toggle[data-position="auto"]', function () {
        var a = e(this).offset(),
            t = e(this.parentNode);
        parseInt(a.top + e(this).height()) + 50 > ace.helper.scrollTop() + ace.helper.winHeight() - t.find(".dropdown-menu").eq(0).height() ? t.addClass("dropup") : t.removeClass("dropup")
    }), e(document).on("click", ".dropdown-navbar .nav-tabs", function (a) {
        a.stopPropagation(); {
            var t;
            a.target
        }(t = e(a.target).closest("[data-toggle=tab]")) && t.length > 0 && (t.tab("show"), a.preventDefault())
    }), e('.ace-nav [class*="icon-animated-"]').closest("a").one("click", function () {
        var a = e(this).find('[class*="icon-animated-"]').eq(0),
            t = a.attr("class").match(/icon\-animated\-([\d\w]+)/);
        a.removeClass(t[0])
    }), e(".sidebar .nav-list .badge[title],.sidebar .nav-list .badge[title]").each(function () {
        var a = e(this).attr("class").match(/tooltip\-(?:\w+)/);
        a = a ? a[0] : "tooltip-error", e(this).tooltip({
            placement: function (a, t) {
                var s = e(t).offset();
                return parseInt(s.left) < parseInt(document.body.scrollWidth / 2) ? "right" : "left"
            },
            container: "body",
            template: '<div class="tooltip ' + a + '"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        })
    });
    var t = e(".btn-scroll-up");
    if (t.length > 0) {
        var s = !1;
        e(window).on("scroll.scroll_btn", function () {
            ace.helper.scrollTop() > parseInt(ace.helper.winHeight() / 4) ? s || (t.addClass("display"), s = !0) : s && (t.removeClass("display"), s = !1)
        }).triggerHandler("scroll.scroll_btn"), t.on(ace.click_event, function () {
            var a = Math.min(500, Math.max(100, parseInt(ace.helper.scrollTop() / 3)));
            return e("html,body").animate({
                scrollTop: 0
            }, a), !1
        })
    }
    if (ace.vars.webkit) {
        var i = e(".ace-nav").get(0);
        i && e(window).on("resize.webkit", function () {
            ace.helper.redraw(i)
        })
    }
}, ace.helper.collapsible = function () {
    var e;
    return null != document.querySelector("#sidebar.navbar-collapse") && null != (e = document.querySelector('.navbar-toggle[data-target*=".sidebar"]')) && e.scrollHeight > 0
}, ace.helper.mobile_view = function () {
    var e;
    return null != (e = document.getElementById("menu-toggler")) && e.scrollHeight > 0
}, ace.helper.redraw = function (e) {
    var a = e.style.display;
    e.style.display = "none", e.offsetHeight, e.style.display = a
}, ace.helper.scrollTop = function () {
    return document.scrollTop || document.documentElement.scrollTop || document.body.scrollTop
}, ace.helper.winHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight
}, ace.helper.camelCase = function (e) {
    return e.replace(/-([\da-z])/gi, function (e, a) {
        return a ? a.toUpperCase() : ""
    })
}, ace.helper.removeStyle = "removeProperty" in document.body.style ? function (e, a) {
    e.style.removeProperty(a)
} : function (e, a) {
    e.style[ace.helper.camelCase(a)] = ""
}, ace.helper.hasClass = "classList" in document.documentElement ? function (e, a) {
    return e.classList.contains(a)
} : function (e, a) {
    return e.className.indexOf(a) > -1
}, ace.add_touch_drag = function (e) {
    if (ace.vars.touch) {
        var a = "touchstart MSPointerDown pointerdown",
            t = "touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel",
            s = "touchmove MSPointerMove MSPointerHover pointermove";
        e.event.special.ace_drag = {
            setup: function () {
                var i = 0,
                    n = e(this);
                n.on(a, function (a) {
                    function r(e) {
                        if (c) {
                            var a = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                            if (o = {
                                coords: [a.pageX, a.pageY]
                            }, c && o && (h = 0, u = 0, d = Math.abs(u = c.coords[1] - o.coords[1]) > i && Math.abs(h = c.coords[0] - o.coords[0]) <= Math.abs(u) ? u > 0 ? "up" : "down" : Math.abs(h = c.coords[0] - o.coords[0]) > i && Math.abs(u) <= Math.abs(h) ? h > 0 ? "left" : "right" : !1, d !== !1)) {
                                var t = {};
                                c.origin.trigger({
                                    type: "ace_drag",
                                    direction: d,
                                    dx: h,
                                    dy: u,
                                    retval: t
                                }), e.preventDefault()
                            }
                            c.coords[0] = o.coords[0], c.coords[1] = o.coords[1]
                        }
                    }
                    var o, l = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
                        c = {
                            coords: [l.pageX, l.pageY],
                            origin: e(a.target)
                        };
                    c.origin.trigger({
                        type: "ace_dragStart",
                        start: c || [-1, -1]
                    });
                    var d = !1,
                        h = 0,
                        u = 0;
                    n.on(s, r).one(t, function () {
                        n.off(s, r), c.origin.trigger({
                            type: "ace_dragEnd",
                            stop: o || [-1, -1]
                        }), c = o = void 0
                    })
                })
            }
        }
    }
}, ace.handle_side_menu = function (e) {
    var a = e(".sidebar").eq(0);
    e(document).on(ace.click_event + ".ace.menu", "#menu-toggler", function () {
        return a.toggleClass("display"), e(this).toggleClass("display"), e(this).hasClass("display") && "sidebar_scroll" in ace.helper && ace.helper.sidebar_scroll.reset(), !1
    }).on(ace.click_event + ".ace.menu", ".sidebar-collapse", function () {
        ace.vars.collapsible || ace.vars.horizontal || (ace.vars.minimized = !ace.vars.minimized, ace.settings.sidebar_collapsed.call(this, ace.vars.minimized))
    }).on(ace.click_event + ".ace.menu", ".sidebar-expand", function () {
        ace.vars.minimized && ace.settings.sidebar_collapsed.call(this, !1, !1);
        var t = e(this).find(ace.vars[".icon"]),
            s = t.attr("data-icon1"),
            i = t.attr("data-icon2");
        a.hasClass("responsive-min") ? (t.removeClass(s).addClass(i), a.removeClass("responsive-min"), a.addClass("display responsive-max"), ace.vars.minimized = !1) : (t.removeClass(i).addClass(s), a.removeClass("display responsive-max"), a.addClass("responsive-min"), ace.vars.minimized = !0), e(document).triggerHandler("settings.ace", ["sidebar_collapsed", ace.vars.minimized])
    });
    var t = ace.vars.ios_safari;
    e(document).on(ace.click_event + ".ace.submenu", ".sidebar .nav-list", function (a) {
        var s = this,
            i = e(a.target).closest("a");
        if (i && 0 != i.length) {
            var n = ace.vars.minimized && !ace.vars.collapsible;
            if (i.hasClass("dropdown-toggle")) {
                var r = i.siblings(".submenu").get(0);
                if (!r) return !1;
                var o = 0,
                    l = 250,
                    c = r.parentNode.parentNode;
                if (n && c == s || e(r.parentNode).hasClass("hover") && !ace.vars.collapsible) return a.preventDefault(), !1;
                0 == r.scrollHeight && e(c).find("> .open > .submenu").each(function () {
                    this == r || e(this.parentNode).hasClass("active") || (o -= this.scrollHeight, ace.submenu.hide(this, l))
                });
                var d = 0;
                return 1 == (d = ace.submenu.toggle(r, l)) ? 0 != o && (o += r.scrollHeight) : -1 == d && (o -= r.scrollHeight), 0 != o && "sidebar_scroll" in ace.helper && ace.helper.sidebar_scroll.prehide(o), a.preventDefault(), !1
            }
            if ("tap" == ace.click_event && n && i.get(0).parentNode.parentNode == s) {
                var h = i.find(".menu-text").get(0);
                if (a.target != h && !e.contains(h, a.target)) return a.preventDefault(), !1
            }
            if (t && "false" !== i.attr("data-link")) return document.location = i.attr("href"), a.preventDefault(), !1
        }
    })
}, ace.submenu = {
    show: function (e, a) {
        var t, s = $(e);
        if (s.trigger(t = $.Event("show.ace.submenu")), t.isDefaultPrevented()) return !1;
        s.css({
            height: 0,
            overflow: "hidden",
            display: "block"
        }).removeClass("nav-hide").addClass("nav-show").parent().addClass("open"), a > 0 && s.css({
            height: e.scrollHeight,
            "transition-property": "height",
            "transition-duration": a / 1e3 + "s"
        });
        var i = function (e) {
            e && e.stopPropagation(), s.css({
                "transition-property": "",
                "transition-duration": "",
                overflow: "",
                height: ""
            }), ace.vars.transition && s.off(".trans"), s.trigger($.Event("shown.ace.submenu"))
        };
        return a > 0 && ace.vars.transition ? s.one("transitionend.trans webkitTransitionEnd.trans mozTransitionEnd.trans oTransitionEnd.trans", i) : i(), ace.vars.android && setTimeout(function () {
            s.css({
                overflow: "",
                height: ""
            })
        }, a + 10), !0
    },
    hide: function (e, a) {
        var t, s = $(e);
        if (s.trigger(t = $.Event("hide.ace.submenu")), t.isDefaultPrevented()) return !1;
        s.css({
            height: e.scrollHeight,
            overflow: "hidden"
        }).parent().removeClass("open"), e.offsetHeight, a > 0 && s.css({
            height: 0,
            "transition-property": "height",
            "transition-duration": a / 1e3 + "s"
        });
        var i = function (e) {
            e && e.stopPropagation(), s.css({
                display: "none",
                overflow: "",
                height: "",
                "transition-property": "",
                "transition-duration": ""
            }).removeClass("nav-show").addClass("nav-hide"), ace.vars.transition && s.off(".trans"), s.trigger($.Event("hidden.ace.submenu"))
        };
        return a > 0 && ace.vars.transition ? s.one("transitionend.trans webkitTransitionEnd.trans mozTransitionEnd.trans oTransitionEnd.trans", i) : i(), ace.vars.android && setTimeout(function () {
            s.css({
                display: "none",
                overflow: "",
                height: ""
            })
        }, a + 10), !0
    },
    toggle: function (e, a) {
        if (0 == e.scrollHeight) {
            if (ace.submenu.show(e, a)) return 1
        } else if (ace.submenu.hide(e, a)) return -1;
        return 0
    }
}, ace.sidebar_scrollable = function (e, a, t, s, i, n) {
    if (e.fn.ace_scroll) {
        var r = ace.vars.safari && navigator.userAgent.match(/version\/[1-5]/i),
            o = e(".sidebar"),
            l = (e(".navbar"), o.find(".nav-list")),
            c = o.find(".sidebar-toggle"),
            d = o.find(".sidebar-shortcuts"),
            h = e(window),
            u = o.get(0),
            v = l.get(0);
        if (u && v) {
            var p, f, g = null,
                m = null,
                b = null,
                w = null,
                _ = null,
                y = !1,
                C = !1,
                a = a || !1,
                t = t || !1,
                s = s || !1,
                k = "getComputedStyle" in window ? function () {
                    return u.offsetHeight, "fixed" == window.getComputedStyle(u).position
                } : function () {
                    return u.offsetHeight, "fixed" == o.css("position")
                },
                x = k(),
                T = o.hasClass("h-sidebar"),
                H = ace.helper.sidebar_scroll = {
                    available_height: function () {
                        var e = l.parent().offset();
                        return x && (e.top -= ace.helper.scrollTop()), h.innerHeight() - e.top - (s ? 0 : c.outerHeight())
                    },
                    content_height: function () {
                        return v.scrollHeight
                    },
                    initiate: function (h) {
                        if (!C && x) {
                            l.wrap('<div style="position: relative;" />'), l.after("<div><div></div></div>"), l.wrap('<div class="nav-wrap" />'), s || c.css({
                                "z-index": 1
                            }), t || d.css({
                                "z-index": 99
                            }), g = l.parent().next().ace_scroll({
                                size: H.available_height(),
                                reset: !0,
                                mouseWheelLock: !0,
                                hoverReset: !1,
                                dragEvent: !0,
                                touchDrag: !1
                            }).closest(".ace-scroll").addClass("nav-scroll"), _ = g.data("ace_scroll"), m = g.find(".scroll-content").eq(0), b = m.find(" > div").eq(0), w = g.find(".scroll-bar").eq(0), t && (l.parent().prepend(d).wrapInner("<div />"), l = l.parent()), s && (l.append(c), l.closest(".nav-wrap").addClass("nav-wrap-t")), l.css({
                                position: "relative"
                            }), n === !0 && g.addClass("scrollout"), v = l.get(0), v.style.top = 0, m.on("scroll.nav", function () {
                                v.style.top = -1 * this.scrollTop + "px"
                            }), l.on("mousewheel.ace_scroll DOMMouseScroll.ace_scroll", function (e) {
                                return g.trigger(e)
                            });
                            var u = m.get(0);
                            if (l.on("ace_drag.nav", function (e) {
                                if (y && ("up" == e.direction || "down" == e.direction)) {
                                    _.move_bar(!0), move_nav = !1;
                                    var a = e.dy;
                                    Math.abs(a) > 20 && (a = 2 * a), 0 != a && (u.scrollTop = u.scrollTop + a, v.style.top = -1 * u.scrollTop + "px")
                                }
                            }), i && l.on("ace_dragStart.nav", function (e) {
                                e.stopPropagation(), l.css("transition-property", "none"), w.css("transition-property", "none")
                            }).on("ace_dragEnd.nav", function (e) {
                                e.stopPropagation(), l.css("transition-property", "top"), w.css("transition-property", "top")
                            }), r && !s) {
                                var p = c.get(0);
                                p && m.on("scroll.safari", function () {
                                    ace.helper.redraw(p)
                                })
                            }
                            if (C = !0, 1 == h) {
                                if (H.reset(), a && _.is_active()) {
                                    var f, k = o.find(".nav-list");
                                    ace.vars.minimized && !ace.vars.collapsible ? f = k.find("> .active") : (f = l.find("> .active.hover"), 0 == f.length && (f = l.find(".active:not(.open)")));
                                    var T = f.outerHeight();
                                    k = k.get(0);
                                    for (var z = f.get(0); z != k;) T += z.offsetTop, z = z.parentNode;
                                    var E = T - g.height();
                                    E > 0 && (v.style.top = -E + "px", m.scrollTop(E))
                                }
                                a = !1
                            }
                            if ("number" == typeof i && i > 0 && (l.css({
                                "transition-property": "top",
                                "transition-duration": (i / 1e3).toFixed(2) + "s"
                            }), w.css({
                                "transition-property": "top",
                                "transition-duration": (i / 1500).toFixed(2) + "s"
                            }), g.on("drag.start", function (e) {
                                e.stopPropagation(), l.css("transition-property", "none")
                            }).on("drag.end", function (e) {
                                e.stopPropagation(), l.css("transition-property", "top")
                            })), ace.vars.android) {
                                var S = ace.helper.scrollTop();
                                2 > S && (window.scrollTo(S, 0), setTimeout(function () {
                                    H.reset()
                                }, 20));
                                var M, P = ace.helper.winHeight();
                                e(window).on("scroll.ace_scroll", function () {
                                    y && _.is_active() && (M = ace.helper.winHeight(), M != P && (P = M, H.reset()))
                                })
                            }
                        }
                    },
                    reset: function () {
                        if (!x) return void H.disable();
                        C || H.initiate();
                        var e = !ace.vars.collapsible && (!T || T && ace.vars.mobile_view) && (p = H.available_height()) < (f = v.scrollHeight);
                        y = !0, e && (b.css({
                            height: f,
                            width: 8
                        }), g.prev().css({
                            "max-height": p
                        }), _.update({
                            size: p
                        }).enable().reset()), e && _.is_active() ? o.addClass("sidebar-scroll") : y && H.disable()
                    },
                    disable: function () {
                        y = !1, g && (g.css({
                            height: "",
                            "max-height": ""
                        }), b.css({
                            height: "",
                            width: ""
                        }), g.prev().css({
                            "max-height": ""
                        }), _.disable()), parseInt(v.style.top) < 0 && i && ace.vars.transition ? l.one("transitionend.trans webkitTransitionEnd.trans mozTransitionEnd.trans oTransitionEnd.trans", function () {
                            o.removeClass("sidebar-scroll"), l.off(".trans")
                        }) : o.removeClass("sidebar-scroll"), v.style.top = 0
                    },
                    prehide: function (e) {
                        if (y && !ace.vars.minimized)
                            if (H.content_height() + e < H.available_height()) H.disable();
                            else if (0 > e) {
                            var a = m.scrollTop() + e;
                            if (0 > a) return;
                            v.style.top = -1 * a + "px"
                        }
                    }
                };
            H.initiate(!0), e(document).on("settings.ace.scroll", function (e, a) {
                "sidebar_collapsed" == a && x ? H.reset() : ("sidebar_fixed" === a || "navbar_fixed" === a) && (x = k(), x && !y ? H.reset() : x || H.disable())
            }), h.on("resize.ace.scroll", function () {
                x = k(), H.reset()
            }), o.on("hidden.ace.submenu shown.ace.submenu", ".submenu", function (e) {
                e.stopPropagation(), ace.vars.minimized || (ace.vars.webkit ? setTimeout(function () {
                    H.reset()
                }, 0) : H.reset())
            })
        }
    }
}, ace.sidebar_hoverable = function (e) {
    function a(a) {
        var t = e(a);
        a.style.removeProperty("top"), a.style.removeProperty("bottom");
        var s = null;
        ace.vars.minimized && (s = a.parentNode.querySelector(".menu-text")) && s.style.removeProperty("margin-top");
        var i = t.offset(),
            n = ace.helper.scrollTop(),
            o = !1,
            d = n;
        l && (d += r.clientHeight + 1);
        var h = a.scrollHeight;
        s && (h += 40, i.top -= 40);
        var u, v = parseInt(i.top + h);
        if ((u = v - (window.innerHeight + n - 50)) > 0)
            if (c > h - u && i.top - u > d) a.style.top = "auto", a.style.bottom = "-10px", s && (s.style.marginTop = -(h - 50) + "px", o = !0);
            else {
                i.top - u < d && (u = i.top - d), v - u < i.top + c && (u -= c);
                var p = s ? 40 : 20;
                u > p && (a.style.top = -u + "px", s && (s.style.marginTop = -u + "px", o = !0))
            }
        var f = this.className.lastIndexOf("pull_up");
        o ? -1 == f && (this.className = this.className + " pull_up") : f >= 0 && (this.className = this.className.replace(/(^|\s)pull_up($|\s)/, "")), ace.vars.safari && ace.helper.redraw(a)
    }
    if ("querySelector" in document && "removeProperty" in document.body.style) {
        ace.helper.sidebar_hover = {
            reset: function () {
                s.find(".submenu").each(function () {
                    var a = this,
                        t = this.parentNode;
                    if (a) {
                        a.style.removeProperty("top"), a.style.removeProperty("bottom");
                        var s = t.querySelector(".menu-text");
                        s && s.style.removeProperty("margin-top")
                    }
                    t.className.lastIndexOf("_up") >= 0 && e(t).removeClass("pull_up")
                })
            }
        };
        var t = "getComputedStyle" in window ? function () {
            return r.offsetHeight, "fixed" == window.getComputedStyle(r).position
        } : function () {
            return r.offsetHeight, "fixed" == n.css("position")
        };
        e(window).on("resize.ace_hover", function () {
            l = t(), ace.helper.sidebar_hover.reset()
        }), e(document).on("settings.ace.hover", function (e, a, t) {
            "sidebar_collapsed" == a ? ace.helper.sidebar_hover.reset() : "navbar_fixed" == a && (l = t)
        });
        var s = e(".sidebar").eq(0),
            i = (s.get(0), s.find(".nav-list").get(0)),
            n = e(".navbar").eq(0),
            r = n.get(0),
            o = s.hasClass("h-sidebar"),
            l = "fixed" == n.css("position");
        s.find(".submenu").parent().addClass("hsub"), s.on("mouseenter.ace_hover", ".nav-list li.hsub", function () {
            if (!(ace.vars.collapsible || o && !ace.vars.mobile_view)) {
                var e = this.querySelector(".submenu");
                e && (ace.helper.hasClass(this, "hover") ? a.call(this, e) : this.parentNode == i && ace.vars.minimized && a.call(this, e))
            }
        });
        var c = 50
    }
}, ace.widget_boxes = function (e) {
    e(document).on("hide.bs.collapse show.bs.collapse", function (a) {
        var t = a.target.getAttribute("id");
        e('[href*="#' + t + '"]').find(ace.vars[".icon"]).each(function () {
            var t, s = e(this),
                i = null,
                n = null;
            return (i = s.attr("data-icon-show")) ? n = s.attr("data-icon-hide") : (t = s.attr("class").match(/fa\-(.*)\-(up|down)/)) && (i = "fa-" + t[1] + "-down", n = "fa-" + t[1] + "-up"), i ? ("show" == a.type ? s.removeClass(i).addClass(n) : s.removeClass(n).addClass(i), !1) : void 0
        })
    });
    var a = function (a) {
        this.$box = e(a);
        this.reload = function () {
            var e = this.$box,
                a = !1;
            "static" == e.css("position") && (a = !0, e.addClass("position-relative")), e.append('<div class="widget-box-overlay"><i class="' + ace.vars.icon + 'loading-icon fa fa-spinner fa-spin fa-2x white"></i></div>'), e.one("reloaded.ace.widget", function () {
                e.find(".widget-box-overlay").remove(), a && e.removeClass("position-relative")
            })
        }, this.close = function () {
            var e = this.$box,
                a = 300;
            e.fadeOut(a, function () {
                e.trigger("closed.ace.widget"), e.remove()
            })
        }, this.toggle = function (e, a) {
            var t = this.$box,
                s = t.find(".widget-body"),
                i = null,
                n = "undefined" != typeof e ? e : t.hasClass("collapsed") ? "show" : "hide",
                r = "show" == n ? "shown" : "hidden";
            if ("undefined" == typeof a && (a = t.find("> .widget-header a[data-action=collapse]").eq(0), 0 == a.length && (a = null)), a) {
                i = a.find(ace.vars[".icon"]).eq(0);
                var o, l = null,
                    c = null;
                (l = i.attr("data-icon-show")) ? c = i.attr("data-icon-hide") : (o = i.attr("class").match(/fa\-(.*)\-(up|down)/)) && (l = "fa-" + o[1] + "-down", c = "fa-" + o[1] + "-up")
            }
            var d = s.find(".widget-body-inner");
            s = 0 == d.length ? s.wrapInner('<div class="widget-body-inner"></div>').find(":first-child").eq(0) : d.eq(0);
            var h = 300,
                u = 200;
            "show" == n ? (i && i.removeClass(l).addClass(c), t.removeClass("collapsed"), s.slideUp(0, function () {
                s.slideDown(h, function () {
                    t.trigger(r + ".ace.widget")
                })
            })) : (i && i.removeClass(c).addClass(l), s.slideUp(u, function () {
                t.addClass("collapsed"), t.trigger(r + ".ace.widget")
            }))
        }, this.hide = function () {
            this.toggle("hide")
        }, this.show = function () {
            this.toggle("show")
        }, this.fullscreen = function () {
            var e = this.$box.find("> .widget-header a[data-action=fullscreen]").find(ace.vars[".icon"]).eq(0),
                a = null,
                t = null;
            (a = e.attr("data-icon1")) ? t = e.attr("data-icon2") : (a = "fa-expand", t = "fa-compress"), this.$box.hasClass("fullscreen") ? (e.addClass(a).removeClass(t), this.$box.removeClass("fullscreen")) : (e.removeClass(a).addClass(t), this.$box.addClass("fullscreen")), this.$box.trigger("fullscreened.ace.widget")
        }
    };
    e.fn.widget_box = function (t, s) {
        var i, n = this.each(function () {
            var n = e(this),
                r = n.data("widget_box"),
                o = "object" == typeof t && t;
            r || n.data("widget_box", r = new a(this, o)), "string" == typeof t && (i = r[t](s))
        });
        return void 0 === i ? n : i
    }, e(document).on("click.ace.widget", ".widget-header a[data-action]", function (t) {
        t.preventDefault();
        var s = e(this),
            i = s.closest(".widget-box");
        if (0 != i.length && !i.hasClass("ui-sortable-helper")) {
            var n = i.data("widget_box");
            n || i.data("widget_box", n = new a(i.get(0)));
            var r = s.data("action");
            if ("collapse" == r) {
                var o, l = i.hasClass("collapsed") ? "show" : "hide";
                if (i.trigger(o = e.Event(l + ".ace.widget")), o.isDefaultPrevented()) return;
                n.toggle(l, s)
            } else if ("close" == r) {
                var o;
                if (i.trigger(o = e.Event("close.ace.widget")), o.isDefaultPrevented()) return;
                n.close()
            } else if ("reload" == r) {
                s.blur();
                var o;
                if (i.trigger(o = e.Event("reload.ace.widget")), o.isDefaultPrevented()) return;
                n.reload()
            } else if ("fullscreen" == r) {
                var o;
                if (i.trigger(o = e.Event("fullscreen.ace.widget")), o.isDefaultPrevented()) return;
                n.fullscreen()
            } else "settings" == r && i.trigger("setting.ace.widget")
        }
    })
}, ace.settings_box = function (e) {
    e("#ace-settings-btn").on(ace.click_event, function (a) {
        a.preventDefault(), e(this).toggleClass("open"), e("#ace-settings-box").toggleClass("open")
    }), e("#ace-settings-navbar").on("click", function () {
        ace.settings.navbar_fixed(this.checked)
    }).each(function () {
        this.checked = ace.settings.is("navbar", "fixed")
    }), e("#ace-settings-sidebar").on("click", function () {
        ace.settings.sidebar_fixed(this.checked)
    }).each(function () {
        this.checked = ace.settings.is("sidebar", "fixed")
    }), e("#ace-settings-breadcrumbs").on("click", function () {
        ace.settings.breadcrumbs_fixed(this.checked)
    }).each(function () {
        this.checked = ace.settings.is("breadcrumbs", "fixed")
    }), e("#ace-settings-add-container").on("click", function () {
        ace.settings.main_container_fixed(this.checked)
    }).each(function () {
        this.checked = ace.settings.is("main-container", "fixed")
    }), e("#ace-settings-compact").removeAttr("checked").on("click", function () {
        if (this.checked) {
            e("#sidebar").addClass("compact");
            var a = e("#ace-settings-hover");
            a.length > 0 && !a.get(0).checked && a.removeAttr("checked").trigger("click")
        } else e("#sidebar").removeClass("compact"), "sidebar_scroll" in ace.helper && ace.helper.sidebar_scroll.reset()
    }), e("#ace-settings-highlight").removeAttr("checked").on("click", function () {
        this.checked ? e("#sidebar .nav-list > li").addClass("highlight") : e("#sidebar .nav-list > li").removeClass("highlight")
    }), e("#ace-settings-hover").removeAttr("checked").on("click", function () {
        if (!e(".sidebar").hasClass("h-sidebar")) {
            if (this.checked) ace.vars["no-scroll"] = !0, e("#sidebar li").addClass("hover").filter(".open").removeClass("open").find("> .submenu").css("display", "none");
            else {
                ace.vars["no-scroll"] = !1, e("#sidebar li.hover").removeClass("hover");
                var a = e("#ace-settings-compact");
                a.length > 0 && a.get(0).checked && a.trigger("click"), "sidebar_hover" in ace.helper && ace.helper.sidebar_hover.reset()
            }
            "sidebar_scroll" in ace.helper && ace.helper.sidebar_scroll.reset()
        }
    })
}, ace.settings_rtl = function (e) {
    e("#ace-settings-rtl").removeAttr("checked").on("click", function () {
        ace.switch_direction(jQuery)
    })
}, ace.switch_direction = function (e) {
    function a(e, a) {
        t.find("." + e).removeClass(e).addClass("tmp-rtl-" + e).end().find("." + a).removeClass(a).addClass(e).end().find(".tmp-rtl-" + e).removeClass("tmp-rtl-" + e).addClass(a)
    }
    var t = e(document.body);
    t.toggleClass("rtl").find(".dropdown-menu:not(.datepicker-dropdown,.colorpicker)").toggleClass("dropdown-menu-right").end().find(".pull-right:not(.dropdown-menu,blockquote,.profile-skills .pull-right)").removeClass("pull-right").addClass("tmp-rtl-pull-right").end().find(".pull-left:not(.dropdown-submenu,.profile-skills .pull-left)").removeClass("pull-left").addClass("pull-right").end().find(".tmp-rtl-pull-right").removeClass("tmp-rtl-pull-right").addClass("pull-left").end().find(".chosen-select").toggleClass("chosen-rtl").next().toggleClass("chosen-rtl"), a("align-left", "align-right"), a("no-padding-left", "no-padding-right"), a("arrowed", "arrowed-right"), a("arrowed-in", "arrowed-in-right"), a("tabs-left", "tabs-right"), a("messagebar-item-left", "messagebar-item-right"), e(".fa").each(function () {
        if (!(this.className.match(/ui-icon/) || e(this).closest(".fc-button").length > 0))
            for (var a = this.attributes.length, t = 0; a > t; t++) {
                var s = this.attributes[t].value;
                s.match(/fa\-(?:[\w\-]+)\-left/) ? this.attributes[t].value = s.replace(/fa\-([\w\-]+)\-(left)/i, "fa-$1-right") : s.match(/fa\-(?:[\w\-]+)\-right/) && (this.attributes[t].value = s.replace(/fa\-([\w\-]+)\-(right)/i, "fa-$1-left"))
            }
    });
    var s = t.hasClass("rtl");
    s ? e(".scroll-hz").addClass("make-ltr").find(".scroll-content").wrapInner('<div class="make-rtl" />') : e(".scroll-hz").removeClass("make-ltr").find(".make-rtl").children().unwrap(), e.fn.ace_scroll && e(".scroll-hz").ace_scroll("reset");
    try {
        var i = e("#piechart-placeholder");
        if (i.length > 0) {
            var n = e(document.body).hasClass("rtl") ? "nw" : "ne";
            i.data("draw").call(i.get(0), i, i.data("chart"), n)
        }
    } catch (r) {}
}, ace.settings_skin = function (e) {
    try {
        e("#skin-colorpicker").ace_colorpicker()
    } catch (a) {}
    e("#skin-colorpicker").on("change", function () {
        var a = e(this).find("option:selected").data("skin"),
            t = e(document.body);
        t.removeClass("no-skin skin-1 skin-2 skin-3"), t.addClass(a), ace.data.set("skin", a);
        var s = ["red", "blue", "green", ""];
        e(".ace-nav > li.grey").removeClass("dark"), e(".ace-nav > li").removeClass("no-border margin-1"), e(".ace-nav > li:not(:last-child)").removeClass("light-pink").find("> a > " + ace.vars[".icon"]).removeClass("pink").end().eq(0).find(".badge").removeClass("badge-warning"), e(".sidebar-shortcuts .btn").removeClass("btn-pink btn-white").find(ace.vars[".icon"]).removeClass("white"), e(".ace-nav > li.grey").removeClass("red").find(".badge").removeClass("badge-yellow"), e(".sidebar-shortcuts .btn").removeClass("btn-primary btn-white");
        var i = 0;
        e(".sidebar-shortcuts .btn").each(function () {
            e(this).find(ace.vars[".icon"]).removeClass(s[i++])
        });
        var n = ["btn-success", "btn-info", "btn-warning", "btn-danger"];
        if ("no-skin" == a) {
            var i = 0;
            e(".sidebar-shortcuts .btn").each(function () {
                e(this).attr("class", "btn " + n[i++ % 4])
            })
        } else if ("skin-1" == a) {
            e(".ace-nav > li.grey").addClass("dark");
            var i = 0;
            e(".sidebar-shortcuts").find(".btn").each(function () {
                e(this).attr("class", "btn " + n[i++ % 4])
            })
        } else if ("skin-2" == a) e(".ace-nav > li").addClass("no-border margin-1"), e(".ace-nav > li:not(:last-child)").addClass("light-pink").find("> a > " + ace.vars[".icon"]).addClass("pink").end().eq(0).find(".badge").addClass("badge-warning"), e(".sidebar-shortcuts .btn").attr("class", "btn btn-white btn-pink").find(ace.vars[".icon"]).addClass("white");
        else if ("skin-3" == a) {
            t.addClass("no-skin"), e(".ace-nav > li.grey").addClass("red").find(".badge").addClass("badge-yellow");
            var i = 0;
            e(".sidebar-shortcuts .btn").each(function () {
                e(this).attr("class", "btn btn-primary btn-white"), e(this).find(ace.vars[".icon"]).addClass(s[i++])
            })
        }
        "sidebar_scroll" in ace.helper && ace.helper.sidebar_scroll.reset()
    })
}, ace.widget_reload_handler = function (e) {
    e(document).on("reload.ace.widget", ".widget-box", function () {
        var a = e(this);
        setTimeout(function () {
            a.trigger("reloaded.ace.widget")
        }, parseInt(1e3 * Math.random() + 1e3))
    })
}, ace.enable_searchbox_autocomplete = function (e) {
    ace.vars.US_STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    try {
        e("#nav-search-input").typeahead({
            source: ace.vars.US_STATES,
            updater: function (a) {
                return e("#nav-search-input").focus(), a
            }
        })
    } catch (a) {}
};