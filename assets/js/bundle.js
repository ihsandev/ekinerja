function darkmode() {
  $("body").attr("class", "dark-mode"), this.localStorage.setItem("dark-mode", "dark-mode"), $("#toggle-switch").attr("checked", "checked"), $("#toogle-switch").checked = !0, this.localStorage.setItem("checked", "checked")
}! function(t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
  } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
  "use strict";
  var n = [],
      i = t.document,
      r = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      l = n.indexOf,
      u = {},
      c = u.toString,
      h = u.hasOwnProperty,
      d = h.toString,
      f = d.call(Object),
      p = {},
      g = function(t) {
          return "function" == typeof t && "number" != typeof t.nodeType
      },
      m = function(t) {
          return null != t && t === t.window
      },
      v = {
          type: !0,
          src: !0,
          noModule: !0
      };

  function y(t, e, n) {
      var r, o = (e = e || i).createElement("script");
      if (o.text = t, n)
          for (r in v) n[r] && (o[r] = n[r]);
      e.head.appendChild(o).parentNode.removeChild(o)
  }

  function b(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t
  }
  var x = function(t, e) {
          return new x.fn.init(t, e)
      },
      w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function D(t) {
      var e = !!t && "length" in t && t.length,
          n = b(t);
      return !g(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
  }
  x.fn = x.prototype = {
      jquery: "3.3.1",
      constructor: x,
      length: 0,
      toArray: function() {
          return o.call(this)
      },
      get: function(t) {
          return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function(t) {
          var e = x.merge(this.constructor(), t);
          return e.prevObject = this, e
      },
      each: function(t) {
          return x.each(this, t)
      },
      map: function(t) {
          return this.pushStack(x.map(this, function(e, n) {
              return t.call(e, n, e)
          }))
      },
      slice: function() {
          return this.pushStack(o.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(t) {
          var e = this.length,
              n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: s,
      sort: n.sort,
      splice: n.splice
  }, x.extend = x.fn.extend = function() {
      var t, e, n, i, r, o, a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
      for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
          if (null != (t = arguments[s]))
              for (e in t) n = a[e], a !== (i = t[e]) && (u && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, a[e] = x.extend(u, o, i)) : void 0 !== i && (a[e] = i));
      return a
  }, x.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
          throw new Error(t)
      },
      noop: function() {},
      isPlainObject: function(t) {
          var e, n;
          return !(!t || "[object Object]" !== c.call(t)) && (!(e = r(t)) || "function" == typeof(n = h.call(e, "constructor") && e.constructor) && d.call(n) === f)
      },
      isEmptyObject: function(t) {
          var e;
          for (e in t) return !1;
          return !0
      },
      globalEval: function(t) {
          y(t)
      },
      each: function(t, e) {
          var n, i = 0;
          if (D(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
          else
              for (i in t)
                  if (!1 === e.call(t[i], i, t[i])) break; return t
      },
      trim: function(t) {
          return null == t ? "" : (t + "").replace(w, "")
      },
      makeArray: function(t, e) {
          var n = e || [];
          return null != t && (D(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
      },
      inArray: function(t, e, n) {
          return null == e ? -1 : l.call(e, t, n)
      },
      merge: function(t, e) {
          for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
          return t.length = r, t
      },
      grep: function(t, e, n) {
          for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
          return i
      },
      map: function(t, e, n) {
          var i, r, o = 0,
              s = [];
          if (D(t))
              for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
          else
              for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
          return a.apply([], s)
      },
      guid: 1,
      support: p
  }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
      u["[object " + e + "]"] = e.toLowerCase()
  });
  var _ = function(t) {
      var e, n, i, r, o, a, s, l, u, c, h, d, f, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
          w = t.document,
          D = 0,
          _ = 0,
          C = at(),
          k = at(),
          T = at(),
          S = function(t, e) {
              return t === e && (h = !0), 0
          },
          M = {}.hasOwnProperty,
          A = [],
          I = A.pop,
          E = A.push,
          N = A.push,
          O = A.slice,
          P = function(t, e) {
              for (var n = 0, i = t.length; n < i; n++)
                  if (t[n] === e) return n;
              return -1
          },
          F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          L = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          U = "\\[" + L + "*(" + R + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + L + "*\\]",
          W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
          H = new RegExp(L + "+", "g"),
          j = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
          V = new RegExp("^" + L + "*," + L + "*"),
          B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
          z = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
          q = new RegExp(W),
          Y = new RegExp("^" + R + "$"),
          $ = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + U),
              PSEUDO: new RegExp("^" + W),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + F + ")$", "i"),
              needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
          },
          K = /^(?:input|select|textarea|button)$/i,
          Q = /^h\d$/i,
          G = /^[^{]+\{\s*\[native \w/,
          X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          J = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
          tt = function(t, e, n) {
              var i = "0x" + e - 65536;
              return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
          },
          et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          nt = function(t, e) {
              return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
          },
          it = function() {
              d()
          },
          rt = yt(function(t) {
              return !0 === t.disabled && ("form" in t || "label" in t)
          }, {
              dir: "parentNode",
              next: "legend"
          });
      try {
          N.apply(A = O.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
      } catch (t) {
          N = {
              apply: A.length ? function(t, e) {
                  E.apply(t, O.call(e))
              } : function(t, e) {
                  for (var n = t.length, i = 0; t[n++] = e[i++];);
                  t.length = n - 1
              }
          }
      }

      function ot(t, e, i, r) {
          var o, s, u, c, h, p, v, y = e && e.ownerDocument,
              D = e ? e.nodeType : 9;
          if (i = i || [], "string" != typeof t || !t || 1 !== D && 9 !== D && 11 !== D) return i;
          if (!r && ((e ? e.ownerDocument || e : w) !== f && d(e), e = e || f, g)) {
              if (11 !== D && (h = X.exec(t)))
                  if (o = h[1]) {
                      if (9 === D) {
                          if (!(u = e.getElementById(o))) return i;
                          if (u.id === o) return i.push(u), i
                      } else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i
                  } else {
                      if (h[2]) return N.apply(i, e.getElementsByTagName(t)), i;
                      if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return N.apply(i, e.getElementsByClassName(o)), i
                  }
              if (n.qsa && !T[t + " "] && (!m || !m.test(t))) {
                  if (1 !== D) y = e, v = t;
                  else if ("object" !== e.nodeName.toLowerCase()) {
                      for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = x), s = (p = a(t)).length; s--;) p[s] = "#" + c + " " + vt(p[s]);
                      v = p.join(","), y = J.test(t) && gt(e.parentNode) || e
                  }
                  if (v) try {
                      return N.apply(i, y.querySelectorAll(v)), i
                  } catch (t) {} finally {
                      c === x && e.removeAttribute("id")
                  }
              }
          }
          return l(t.replace(j, "$1"), e, i, r)
      }

      function at() {
          var t = [];
          return function e(n, r) {
              return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
          }
      }

      function st(t) {
          return t[x] = !0, t
      }

      function lt(t) {
          var e = f.createElement("fieldset");
          try {
              return !!t(e)
          } catch (t) {
              return !1
          } finally {
              e.parentNode && e.parentNode.removeChild(e), e = null
          }
      }

      function ut(t, e) {
          for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
      }

      function ct(t, e) {
          var n = e && t,
              i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
          if (i) return i;
          if (n)
              for (; n = n.nextSibling;)
                  if (n === e) return -1;
          return t ? 1 : -1
      }

      function ht(t) {
          return function(e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
          }
      }

      function dt(t) {
          return function(e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t
          }
      }

      function ft(t) {
          return function(e) {
              return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
          }
      }

      function pt(t) {
          return st(function(e) {
              return e = +e, st(function(n, i) {
                  for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
              })
          })
      }

      function gt(t) {
          return t && void 0 !== t.getElementsByTagName && t
      }
      for (e in n = ot.support = {}, o = ot.isXML = function(t) {
              var e = t && (t.ownerDocument || t).documentElement;
              return !!e && "HTML" !== e.nodeName
          }, d = ot.setDocument = function(t) {
              var e, r, a = t ? t.ownerDocument || t : w;
              return a !== f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, g = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)), n.attributes = lt(function(t) {
                  return t.className = "i", !t.getAttribute("className")
              }), n.getElementsByTagName = lt(function(t) {
                  return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
              }), n.getElementsByClassName = G.test(f.getElementsByClassName), n.getById = lt(function(t) {
                  return p.appendChild(t).id = x, !f.getElementsByName || !f.getElementsByName(x).length
              }), n.getById ? (i.filter.ID = function(t) {
                  var e = t.replace(Z, tt);
                  return function(t) {
                      return t.getAttribute("id") === e
                  }
              }, i.find.ID = function(t, e) {
                  if (void 0 !== e.getElementById && g) {
                      var n = e.getElementById(t);
                      return n ? [n] : []
                  }
              }) : (i.filter.ID = function(t) {
                  var e = t.replace(Z, tt);
                  return function(t) {
                      var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                      return n && n.value === e
                  }
              }, i.find.ID = function(t, e) {
                  if (void 0 !== e.getElementById && g) {
                      var n, i, r, o = e.getElementById(t);
                      if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                          for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                              if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                      }
                      return []
                  }
              }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                  return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
              } : function(t, e) {
                  var n, i = [],
                      r = 0,
                      o = e.getElementsByTagName(t);
                  if ("*" === t) {
                      for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                      return i
                  }
                  return o
              }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                  if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
              }, v = [], m = [], (n.qsa = G.test(f.querySelectorAll)) && (lt(function(t) {
                  p.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + F + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
              }), lt(function(t) {
                  t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = f.createElement("input");
                  e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
              })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                  n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", W)
              }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(p.compareDocumentPosition), b = e || G.test(p.contains) ? function(t, e) {
                  var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                  return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
              } : function(t, e) {
                  if (e)
                      for (; e = e.parentNode;)
                          if (e === t) return !0;
                  return !1
              }, S = e ? function(t, e) {
                  if (t === e) return h = !0, 0;
                  var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === w && b(w, t) ? -1 : e === f || e.ownerDocument === w && b(w, e) ? 1 : c ? P(c, t) - P(c, e) : 0 : 4 & i ? -1 : 1)
              } : function(t, e) {
                  if (t === e) return h = !0, 0;
                  var n, i = 0,
                      r = t.parentNode,
                      o = e.parentNode,
                      a = [t],
                      s = [e];
                  if (!r || !o) return t === f ? -1 : e === f ? 1 : r ? -1 : o ? 1 : c ? P(c, t) - P(c, e) : 0;
                  if (r === o) return ct(t, e);
                  for (n = t; n = n.parentNode;) a.unshift(n);
                  for (n = e; n = n.parentNode;) s.unshift(n);
                  for (; a[i] === s[i];) i++;
                  return i ? ct(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
              }, f) : f
          }, ot.matches = function(t, e) {
              return ot(t, null, null, e)
          }, ot.matchesSelector = function(t, e) {
              if ((t.ownerDocument || t) !== f && d(t), e = e.replace(z, "='$1']"), n.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                  var i = y.call(t, e);
                  if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
              } catch (t) {}
              return ot(e, f, null, [t]).length > 0
          }, ot.contains = function(t, e) {
              return (t.ownerDocument || t) !== f && d(t), b(t, e)
          }, ot.attr = function(t, e) {
              (t.ownerDocument || t) !== f && d(t);
              var r = i.attrHandle[e.toLowerCase()],
                  o = r && M.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
              return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
          }, ot.escape = function(t) {
              return (t + "").replace(et, nt)
          }, ot.error = function(t) {
              throw new Error("Syntax error, unrecognized expression: " + t)
          }, ot.uniqueSort = function(t) {
              var e, i = [],
                  r = 0,
                  o = 0;
              if (h = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(S), h) {
                  for (; e = t[o++];) e === t[o] && (r = i.push(o));
                  for (; r--;) t.splice(i[r], 1)
              }
              return c = null, t
          }, r = ot.getText = function(t) {
              var e, n = "",
                  i = 0,
                  o = t.nodeType;
              if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof t.textContent) return t.textContent;
                      for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                  } else if (3 === o || 4 === o) return t.nodeValue
              } else
                  for (; e = t[i++];) n += r(e);
              return n
          }, (i = ot.selectors = {
              cacheLength: 50,
              createPseudo: st,
              match: $,
              attrHandle: {},
              find: {},
              relative: {
                  ">": {
                      dir: "parentNode",
                      first: !0
                  },
                  " ": {
                      dir: "parentNode"
                  },
                  "+": {
                      dir: "previousSibling",
                      first: !0
                  },
                  "~": {
                      dir: "previousSibling"
                  }
              },
              preFilter: {
                  ATTR: function(t) {
                      return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                  },
                  CHILD: function(t) {
                      return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                  },
                  PSEUDO: function(t) {
                      var e, n = !t[6] && t[2];
                      return $.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && q.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(t) {
                      var e = t.replace(Z, tt).toLowerCase();
                      return "*" === t ? function() {
                          return !0
                      } : function(t) {
                          return t.nodeName && t.nodeName.toLowerCase() === e
                      }
                  },
                  CLASS: function(t) {
                      var e = C[t + " "];
                      return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && C(t, function(t) {
                          return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                      })
                  },
                  ATTR: function(t, e, n) {
                      return function(i) {
                          var r = ot.attr(i, t);
                          return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                      }
                  },
                  CHILD: function(t, e, n, i, r) {
                      var o = "nth" !== t.slice(0, 3),
                          a = "last" !== t.slice(-4),
                          s = "of-type" === e;
                      return 1 === i && 0 === r ? function(t) {
                          return !!t.parentNode
                      } : function(e, n, l) {
                          var u, c, h, d, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                              m = e.parentNode,
                              v = s && e.nodeName.toLowerCase(),
                              y = !l && !s,
                              b = !1;
                          if (m) {
                              if (o) {
                                  for (; g;) {
                                      for (d = e; d = d[g];)
                                          if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                      p = g = "only" === t && !p && "nextSibling"
                                  }
                                  return !0
                              }
                              if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                  for (b = (f = (u = (c = (h = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === D && u[1]) && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)
                                      if (1 === d.nodeType && ++b && d === e) {
                                          c[t] = [D, f, b];
                                          break
                                      }
                              } else if (y && (b = f = (u = (c = (h = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === D && u[1]), !1 === b)
                                  for (;
                                      (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (h = d[x] || (d[x] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [D, b]), d !== e)););
                              return (b -= r) === i || b % i == 0 && b / i >= 0
                          }
                      }
                  },
                  PSEUDO: function(t, e) {
                      var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                      return r[x] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, n) {
                          for (var i, o = r(t, e), a = o.length; a--;) t[i = P(t, o[a])] = !(n[i] = o[a])
                      }) : function(t) {
                          return r(t, 0, n)
                      }) : r
                  }
              },
              pseudos: {
                  not: st(function(t) {
                      var e = [],
                          n = [],
                          i = s(t.replace(j, "$1"));
                      return i[x] ? st(function(t, e, n, r) {
                          for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                      }) : function(t, r, o) {
                          return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                      }
                  }),
                  has: st(function(t) {
                      return function(e) {
                          return ot(t, e).length > 0
                      }
                  }),
                  contains: st(function(t) {
                      return t = t.replace(Z, tt),
                          function(e) {
                              return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                          }
                  }),
                  lang: st(function(t) {
                      return Y.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(),
                          function(e) {
                              var n;
                              do {
                                  if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                              } while ((e = e.parentNode) && 1 === e.nodeType);
                              return !1
                          }
                  }),
                  target: function(e) {
                      var n = t.location && t.location.hash;
                      return n && n.slice(1) === e.id
                  },
                  root: function(t) {
                      return t === p
                  },
                  focus: function(t) {
                      return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                  },
                  enabled: ft(!1),
                  disabled: ft(!0),
                  checked: function(t) {
                      var e = t.nodeName.toLowerCase();
                      return "input" === e && !!t.checked || "option" === e && !!t.selected
                  },
                  selected: function(t) {
                      return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                  },
                  empty: function(t) {
                      for (t = t.firstChild; t; t = t.nextSibling)
                          if (t.nodeType < 6) return !1;
                      return !0
                  },
                  parent: function(t) {
                      return !i.pseudos.empty(t)
                  },
                  header: function(t) {
                      return Q.test(t.nodeName)
                  },
                  input: function(t) {
                      return K.test(t.nodeName)
                  },
                  button: function(t) {
                      var e = t.nodeName.toLowerCase();
                      return "input" === e && "button" === t.type || "button" === e
                  },
                  text: function(t) {
                      var e;
                      return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                  },
                  first: pt(function() {
                      return [0]
                  }),
                  last: pt(function(t, e) {
                      return [e - 1]
                  }),
                  eq: pt(function(t, e, n) {
                      return [n < 0 ? n + e : n]
                  }),
                  even: pt(function(t, e) {
                      for (var n = 0; n < e; n += 2) t.push(n);
                      return t
                  }),
                  odd: pt(function(t, e) {
                      for (var n = 1; n < e; n += 2) t.push(n);
                      return t
                  }),
                  lt: pt(function(t, e, n) {
                      for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                      return t
                  }),
                  gt: pt(function(t, e, n) {
                      for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                      return t
                  })
              }
          }).pseudos.nth = i.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) i.pseudos[e] = ht(e);
      for (e in {
              submit: !0,
              reset: !0
          }) i.pseudos[e] = dt(e);

      function mt() {}

      function vt(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i
      }

      function yt(t, e, n) {
          var i = e.dir,
              r = e.next,
              o = r || i,
              a = n && "parentNode" === o,
              s = _++;
          return e.first ? function(e, n, r) {
              for (; e = e[i];)
                  if (1 === e.nodeType || a) return t(e, n, r);
              return !1
          } : function(e, n, l) {
              var u, c, h, d = [D, s];
              if (l) {
                  for (; e = e[i];)
                      if ((1 === e.nodeType || a) && t(e, n, l)) return !0
              } else
                  for (; e = e[i];)
                      if (1 === e.nodeType || a)
                          if (c = (h = e[x] || (e[x] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                          else {
                              if ((u = c[o]) && u[0] === D && u[1] === s) return d[2] = u[2];
                              if (c[o] = d, d[2] = t(e, n, l)) return !0
                          } return !1
          }
      }

      function bt(t) {
          return t.length > 1 ? function(e, n, i) {
              for (var r = t.length; r--;)
                  if (!t[r](e, n, i)) return !1;
              return !0
          } : t[0]
      }

      function xt(t, e, n, i, r) {
          for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), u && e.push(s)));
          return a
      }

      function wt(t, e, n, i, r, o) {
          return i && !i[x] && (i = wt(i)), r && !r[x] && (r = wt(r, o)), st(function(o, a, s, l) {
              var u, c, h, d = [],
                  f = [],
                  p = a.length,
                  g = o || function(t, e, n) {
                      for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                      return n
                  }(e || "*", s.nodeType ? [s] : s, []),
                  m = !t || !o && e ? g : xt(g, d, t, s, l),
                  v = n ? r || (o ? t : p || i) ? [] : a : m;
              if (n && n(m, v, s, l), i)
                  for (u = xt(v, f), i(u, [], s, l), c = u.length; c--;)(h = u[c]) && (v[f[c]] = !(m[f[c]] = h));
              if (o) {
                  if (r || t) {
                      if (r) {
                          for (u = [], c = v.length; c--;)(h = v[c]) && u.push(m[c] = h);
                          r(null, v = [], u, l)
                      }
                      for (c = v.length; c--;)(h = v[c]) && (u = r ? P(o, h) : d[c]) > -1 && (o[u] = !(a[u] = h))
                  }
              } else v = xt(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : N.apply(a, v)
          })
      }

      function Dt(t) {
          for (var e, n, r, o = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = yt(function(t) {
                  return t === e
              }, s, !0), h = yt(function(t) {
                  return P(e, t) > -1
              }, s, !0), d = [function(t, n, i) {
                  var r = !a && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                  return e = null, r
              }]; l < o; l++)
              if (n = i.relative[t[l].type]) d = [yt(bt(d), n)];
              else {
                  if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                      for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                      return wt(l > 1 && bt(d), l > 1 && vt(t.slice(0, l - 1).concat({
                          value: " " === t[l - 2].type ? "*" : ""
                      })).replace(j, "$1"), n, l < r && Dt(t.slice(l, r)), r < o && Dt(t = t.slice(r)), r < o && vt(t))
                  }
                  d.push(n)
              }
          return bt(d)
      }
      return mt.prototype = i.filters = i.pseudos, i.setFilters = new mt, a = ot.tokenize = function(t, e) {
          var n, r, o, a, s, l, u, c = k[t + " "];
          if (c) return e ? 0 : c.slice(0);
          for (s = t, l = [], u = i.preFilter; s;) {
              for (a in n && !(r = V.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), o.push({
                      value: n,
                      type: r[0].replace(j, " ")
                  }), s = s.slice(n.length)), i.filter) !(r = $[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                  value: n,
                  type: a,
                  matches: r
              }), s = s.slice(n.length));
              if (!n) break
          }
          return e ? s.length : s ? ot.error(t) : k(t, l).slice(0)
      }, s = ot.compile = function(t, e) {
          var n, r = [],
              o = [],
              s = T[t + " "];
          if (!s) {
              for (e || (e = a(t)), n = e.length; n--;)(s = Dt(e[n]))[x] ? r.push(s) : o.push(s);
              (s = T(t, function(t, e) {
                  var n = e.length > 0,
                      r = t.length > 0,
                      o = function(o, a, s, l, c) {
                          var h, p, m, v = 0,
                              y = "0",
                              b = o && [],
                              x = [],
                              w = u,
                              _ = o || r && i.find.TAG("*", c),
                              C = D += null == w ? 1 : Math.random() || .1,
                              k = _.length;
                          for (c && (u = a === f || a || c); y !== k && null != (h = _[y]); y++) {
                              if (r && h) {
                                  for (p = 0, a || h.ownerDocument === f || (d(h), s = !g); m = t[p++];)
                                      if (m(h, a || f, s)) {
                                          l.push(h);
                                          break
                                      }
                                  c && (D = C)
                              }
                              n && ((h = !m && h) && v--, o && b.push(h))
                          }
                          if (v += y, n && y !== v) {
                              for (p = 0; m = e[p++];) m(b, x, a, s);
                              if (o) {
                                  if (v > 0)
                                      for (; y--;) b[y] || x[y] || (x[y] = I.call(l));
                                  x = xt(x)
                              }
                              N.apply(l, x), c && !o && x.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                          }
                          return c && (D = C, u = w), b
                      };
                  return n ? st(o) : o
              }(o, r))).selector = t
          }
          return s
      }, l = ot.select = function(t, e, n, r) {
          var o, l, u, c, h, d = "function" == typeof t && t,
              f = !r && a(t = d.selector || t);
          if (n = n || [], 1 === f.length) {
              if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                  if (!(e = (i.find.ID(u.matches[0].replace(Z, tt), e) || [])[0])) return n;
                  d && (e = e.parentNode), t = t.slice(l.shift().value.length)
              }
              for (o = $.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                  if ((h = i.find[c]) && (r = h(u.matches[0].replace(Z, tt), J.test(l[0].type) && gt(e.parentNode) || e))) {
                      if (l.splice(o, 1), !(t = r.length && vt(l))) return N.apply(n, r), n;
                      break
                  }
          }
          return (d || s(t, f))(r, e, !g, n, !e || J.test(t) && gt(e.parentNode) || e), n
      }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!h, d(), n.sortDetached = lt(function(t) {
          return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
      }), lt(function(t) {
          return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || ut("type|href|height|width", function(t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), n.attributes && lt(function(t) {
          return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || ut("value", function(t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
      }), lt(function(t) {
          return null == t.getAttribute("disabled")
      }) || ut(F, function(t, e, n) {
          var i;
          if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }), ot
  }(t);
  x.find = _, x.expr = _.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = _.uniqueSort, x.text = _.getText, x.isXMLDoc = _.isXML, x.contains = _.contains, x.escapeSelector = _.escape;
  var C = function(t, e, n) {
          for (var i = [], r = void 0 !== n;
              (t = t[e]) && 9 !== t.nodeType;)
              if (1 === t.nodeType) {
                  if (r && x(t).is(n)) break;
                  i.push(t)
              }
          return i
      },
      k = function(t, e) {
          for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
          return n
      },
      T = x.expr.match.needsContext;

  function S(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
  }
  var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function A(t, e, n) {
      return g(e) ? x.grep(t, function(t, i) {
          return !!e.call(t, i, t) !== n
      }) : e.nodeType ? x.grep(t, function(t) {
          return t === e !== n
      }) : "string" != typeof e ? x.grep(t, function(t) {
          return l.call(e, t) > -1 !== n
      }) : x.filter(e, t, n)
  }
  x.filter = function(t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? x.find.matchesSelector(i, t) ? [i] : [] : x.find.matches(t, x.grep(e, function(t) {
          return 1 === t.nodeType
      }))
  }, x.fn.extend({
      find: function(t) {
          var e, n, i = this.length,
              r = this;
          if ("string" != typeof t) return this.pushStack(x(t).filter(function() {
              for (e = 0; e < i; e++)
                  if (x.contains(r[e], this)) return !0
          }));
          for (n = this.pushStack([]), e = 0; e < i; e++) x.find(t, r[e], n);
          return i > 1 ? x.uniqueSort(n) : n
      },
      filter: function(t) {
          return this.pushStack(A(this, t || [], !1))
      },
      not: function(t) {
          return this.pushStack(A(this, t || [], !0))
      },
      is: function(t) {
          return !!A(this, "string" == typeof t && T.test(t) ? x(t) : t || [], !1).length
      }
  });
  var I, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (x.fn.init = function(t, e, n) {
      var r, o;
      if (!t) return this;
      if (n = n || I, "string" == typeof t) {
          if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : E.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
          if (r[1]) {
              if (e = e instanceof x ? e[0] : e, x.merge(this, x.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), M.test(r[1]) && x.isPlainObject(e))
                  for (r in e) g(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
              return this
          }
          return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
      }
      return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this)
  }).prototype = x.fn, I = x(i);
  var N = /^(?:parents|prev(?:Until|All))/,
      O = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };

  function P(t, e) {
      for (;
          (t = t[e]) && 1 !== t.nodeType;);
      return t
  }
  x.fn.extend({
      has: function(t) {
          var e = x(t, this),
              n = e.length;
          return this.filter(function() {
              for (var t = 0; t < n; t++)
                  if (x.contains(this, e[t])) return !0
          })
      },
      closest: function(t, e) {
          var n, i = 0,
              r = this.length,
              o = [],
              a = "string" != typeof t && x(t);
          if (!T.test(t))
              for (; i < r; i++)
                  for (n = this[i]; n && n !== e; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                          o.push(n);
                          break
                      }
          return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
      },
      index: function(t) {
          return t ? "string" == typeof t ? l.call(x(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(t, e) {
          return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
      },
      addBack: function(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
  }), x.each({
      parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null
      },
      parents: function(t) {
          return C(t, "parentNode")
      },
      parentsUntil: function(t, e, n) {
          return C(t, "parentNode", n)
      },
      next: function(t) {
          return P(t, "nextSibling")
      },
      prev: function(t) {
          return P(t, "previousSibling")
      },
      nextAll: function(t) {
          return C(t, "nextSibling")
      },
      prevAll: function(t) {
          return C(t, "previousSibling")
      },
      nextUntil: function(t, e, n) {
          return C(t, "nextSibling", n)
      },
      prevUntil: function(t, e, n) {
          return C(t, "previousSibling", n)
      },
      siblings: function(t) {
          return k((t.parentNode || {}).firstChild, t)
      },
      children: function(t) {
          return k(t.firstChild)
      },
      contents: function(t) {
          return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), x.merge([], t.childNodes))
      }
  }, function(t, e) {
      x.fn[t] = function(n, i) {
          var r = x.map(this, e, n);
          return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = x.filter(i, r)), this.length > 1 && (O[t] || x.uniqueSort(r), N.test(t) && r.reverse()), this.pushStack(r)
      }
  });
  var F = /[^\x20\t\r\n\f]+/g;

  function L(t) {
      return t
  }

  function R(t) {
      throw t
  }

  function U(t, e, n, i) {
      var r;
      try {
          t && g(r = t.promise) ? r.call(t).done(e).fail(n) : t && g(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
      } catch (t) {
          n.apply(void 0, [t])
      }
  }
  x.Callbacks = function(t) {
      t = "string" == typeof t ? function(t) {
          var e = {};
          return x.each(t.match(F) || [], function(t, n) {
              e[n] = !0
          }), e
      }(t) : x.extend({}, t);
      var e, n, i, r, o = [],
          a = [],
          s = -1,
          l = function() {
              for (r = r || t.once, i = e = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
              t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
          },
          u = {
              add: function() {
                  return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                      x.each(n, function(n, i) {
                          g(i) ? t.unique && u.has(i) || o.push(i) : i && i.length && "string" !== b(i) && e(i)
                      })
                  }(arguments), n && !e && l()), this
              },
              remove: function() {
                  return x.each(arguments, function(t, e) {
                      for (var n;
                          (n = x.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                  }), this
              },
              has: function(t) {
                  return t ? x.inArray(t, o) > -1 : o.length > 0
              },
              empty: function() {
                  return o && (o = []), this
              },
              disable: function() {
                  return r = a = [], o = n = "", this
              },
              disabled: function() {
                  return !o
              },
              lock: function() {
                  return r = a = [], n || e || (o = n = ""), this
              },
              locked: function() {
                  return !!r
              },
              fireWith: function(t, n) {
                  return r || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || l()), this
              },
              fire: function() {
                  return u.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!i
              }
          };
      return u
  }, x.extend({
      Deferred: function(e) {
          var n = [
                  ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                  ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
              ],
              i = "pending",
              r = {
                  state: function() {
                      return i
                  },
                  always: function() {
                      return o.done(arguments).fail(arguments), this
                  },
                  catch: function(t) {
                      return r.then(null, t)
                  },
                  pipe: function() {
                      var t = arguments;
                      return x.Deferred(function(e) {
                          x.each(n, function(n, i) {
                              var r = g(t[i[4]]) && t[i[4]];
                              o[i[1]](function() {
                                  var t = r && r.apply(this, arguments);
                                  t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                              })
                          }), t = null
                      }).promise()
                  },
                  then: function(e, i, r) {
                      var o = 0;

                      function a(e, n, i, r) {
                          return function() {
                              var s = this,
                                  l = arguments,
                                  u = function() {
                                      var t, u;
                                      if (!(e < o)) {
                                          if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                          u = t && ("object" == typeof t || "function" == typeof t) && t.then, g(u) ? r ? u.call(t, a(o, n, L, r), a(o, n, R, r)) : (o++, u.call(t, a(o, n, L, r), a(o, n, R, r), a(o, n, L, n.notifyWith))) : (i !== L && (s = void 0, l = [t]), (r || n.resolveWith)(s, l))
                                      }
                                  },
                                  c = r ? u : function() {
                                      try {
                                          u()
                                      } catch (t) {
                                          x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (i !== R && (s = void 0, l = [t]), n.rejectWith(s, l))
                                      }
                                  };
                              e ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), t.setTimeout(c))
                          }
                      }
                      return x.Deferred(function(t) {
                          n[0][3].add(a(0, t, g(r) ? r : L, t.notifyWith)), n[1][3].add(a(0, t, g(e) ? e : L)), n[2][3].add(a(0, t, g(i) ? i : R))
                      }).promise()
                  },
                  promise: function(t) {
                      return null != t ? x.extend(t, r) : r
                  }
              },
              o = {};
          return x.each(n, function(t, e) {
              var a = e[2],
                  s = e[5];
              r[e[1]] = a.add, s && a.add(function() {
                  i = s
              }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), o[e[0]] = function() {
                  return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
              }, o[e[0] + "With"] = a.fireWith
          }), r.promise(o), e && e.call(o, o), o
      },
      when: function(t) {
          var e = arguments.length,
              n = e,
              i = Array(n),
              r = o.call(arguments),
              a = x.Deferred(),
              s = function(t) {
                  return function(n) {
                      i[t] = this, r[t] = arguments.length > 1 ? o.call(arguments) : n, --e || a.resolveWith(i, r)
                  }
              };
          if (e <= 1 && (U(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || g(r[n] && r[n].then))) return a.then();
          for (; n--;) U(r[n], s(n), a.reject);
          return a.promise()
      }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  x.Deferred.exceptionHook = function(e, n) {
      t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
  }, x.readyException = function(e) {
      t.setTimeout(function() {
          throw e
      })
  };
  var H = x.Deferred();

  function j() {
      i.removeEventListener("DOMContentLoaded", j), t.removeEventListener("load", j), x.ready()
  }
  x.fn.ready = function(t) {
      return H.then(t).catch(function(t) {
          x.readyException(t)
      }), this
  }, x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(t) {
          (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== t && --x.readyWait > 0 || H.resolveWith(i, [x]))
      }
  }), x.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(x.ready) : (i.addEventListener("DOMContentLoaded", j), t.addEventListener("load", j));
  var V = function(t, e, n, i, r, o, a) {
          var s = 0,
              l = t.length,
              u = null == n;
          if ("object" === b(n))
              for (s in r = !0, n) V(t, e, s, n[s], !0, o, a);
          else if (void 0 !== i && (r = !0, g(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                  return u.call(x(t), n)
              })), e))
              for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
          return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
      },
      B = /^-ms-/,
      z = /-([a-z])/g;

  function q(t, e) {
      return e.toUpperCase()
  }

  function Y(t) {
      return t.replace(B, "ms-").replace(z, q)
  }
  var $ = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
  };

  function K() {
      this.expando = x.expando + K.uid++
  }
  K.uid = 1, K.prototype = {
      cache: function(t) {
          var e = t[this.expando];
          return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
              value: e,
              configurable: !0
          }))), e
      },
      set: function(t, e, n) {
          var i, r = this.cache(t);
          if ("string" == typeof e) r[Y(e)] = n;
          else
              for (i in e) r[Y(i)] = e[i];
          return r
      },
      get: function(t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
      },
      access: function(t, e, n) {
          return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
      },
      remove: function(t, e) {
          var n, i = t[this.expando];
          if (void 0 !== i) {
              if (void 0 !== e) {
                  n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(F) || []).length;
                  for (; n--;) delete i[e[n]]
              }(void 0 === e || x.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
          }
      },
      hasData: function(t) {
          var e = t[this.expando];
          return void 0 !== e && !x.isEmptyObject(e)
      }
  };
  var Q = new K,
      G = new K,
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function Z(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType)
          if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
              try {
                  n = function(t) {
                      return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : X.test(t) ? JSON.parse(t) : t)
                  }(n)
              } catch (t) {}
              G.set(t, e, n)
          } else n = void 0;
      return n
  }
  x.extend({
      hasData: function(t) {
          return G.hasData(t) || Q.hasData(t)
      },
      data: function(t, e, n) {
          return G.access(t, e, n)
      },
      removeData: function(t, e) {
          G.remove(t, e)
      },
      _data: function(t, e, n) {
          return Q.access(t, e, n)
      },
      _removeData: function(t, e) {
          Q.remove(t, e)
      }
  }), x.fn.extend({
      data: function(t, e) {
          var n, i, r, o = this[0],
              a = o && o.attributes;
          if (void 0 === t) {
              if (this.length && (r = G.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                  for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Y(i.slice(5)), Z(o, i, r[i]));
                  Q.set(o, "hasDataAttrs", !0)
              }
              return r
          }
          return "object" == typeof t ? this.each(function() {
              G.set(this, t)
          }) : V(this, function(e) {
              var n;
              if (o && void 0 === e) return void 0 !== (n = G.get(o, t)) ? n : void 0 !== (n = Z(o, t)) ? n : void 0;
              this.each(function() {
                  G.set(this, t, e)
              })
          }, null, e, arguments.length > 1, null, !0)
      },
      removeData: function(t) {
          return this.each(function() {
              G.remove(this, t)
          })
      }
  }), x.extend({
      queue: function(t, e, n) {
          var i;
          if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, x.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(t, e) {
          e = e || "fx";
          var n = x.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = x._queueHooks(t, e);
          "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function() {
              x.dequeue(t, e)
          }, o)), !i && o && o.empty.fire()
      },
      _queueHooks: function(t, e) {
          var n = e + "queueHooks";
          return Q.get(t, n) || Q.access(t, n, {
              empty: x.Callbacks("once memory").add(function() {
                  Q.remove(t, [e + "queue", n])
              })
          })
      }
  }), x.fn.extend({
      queue: function(t, e) {
          var n = 2;
          return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? x.queue(this[0], t) : void 0 === e ? this : this.each(function() {
              var n = x.queue(this, t, e);
              x._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t)
          })
      },
      dequeue: function(t) {
          return this.each(function() {
              x.dequeue(this, t)
          })
      },
      clearQueue: function(t) {
          return this.queue(t || "fx", [])
      },
      promise: function(t, e) {
          var n, i = 1,
              r = x.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                  --i || r.resolveWith(o, [o])
              };
          for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Q.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
          return s(), r.promise(e)
      }
  });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
      nt = ["Top", "Right", "Bottom", "Left"],
      it = function(t, e) {
          return "none" === (t = e || t).style.display || "" === t.style.display && x.contains(t.ownerDocument, t) && "none" === x.css(t, "display")
      },
      rt = function(t, e, n, i) {
          var r, o, a = {};
          for (o in e) a[o] = t.style[o], t.style[o] = e[o];
          for (o in r = n.apply(t, i || []), e) t.style[o] = a[o];
          return r
      };

  function ot(t, e, n, i) {
      var r, o, a = 20,
          s = i ? function() {
              return i.cur()
          } : function() {
              return x.css(t, e, "")
          },
          l = s(),
          u = n && n[3] || (x.cssNumber[e] ? "" : "px"),
          c = (x.cssNumber[e] || "px" !== u && +l) && et.exec(x.css(t, e));
      if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; a--;) x.style(t, e, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
          c *= 2, x.style(t, e, c + u), n = n || []
      }
      return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
  }
  var at = {};

  function st(t) {
      var e, n = t.ownerDocument,
          i = t.nodeName,
          r = at[i];
      return r || (e = n.body.appendChild(n.createElement(i)), r = x.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), at[i] = r, r)
  }

  function lt(t, e) {
      for (var n, i, r = [], o = 0, a = t.length; o < a; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = Q.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && it(i) && (r[o] = st(i))) : "none" !== n && (r[o] = "none", Q.set(i, "display", n)));
      for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
      return t
  }
  x.fn.extend({
      show: function() {
          return lt(this, !0)
      },
      hide: function() {
          return lt(this)
      },
      toggle: function(t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
              it(this) ? x(this).show() : x(this).hide()
          })
      }
  });
  var ut = /^(?:checkbox|radio)$/i,
      ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ht = /^$|^module$|\/(?:java|ecma)script/i,
      dt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };

  function ft(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? x.merge([t], n) : n
  }

  function pt(t, e) {
      for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
  }
  dt.optgroup = dt.option, dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead, dt.th = dt.td;
  var gt, mt, vt = /<|&#?\w+;/;

  function yt(t, e, n, i, r) {
      for (var o, a, s, l, u, c, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
          if ((o = t[f]) || 0 === o)
              if ("object" === b(o)) x.merge(d, o.nodeType ? [o] : o);
              else if (vt.test(o)) {
          for (a = a || h.appendChild(e.createElement("div")), s = (ct.exec(o) || ["", ""])[1].toLowerCase(), l = dt[s] || dt._default, a.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
          x.merge(d, a.childNodes), (a = h.firstChild).textContent = ""
      } else d.push(e.createTextNode(o));
      for (h.textContent = "", f = 0; o = d[f++];)
          if (i && x.inArray(o, i) > -1) r && r.push(o);
          else if (u = x.contains(o.ownerDocument, o), a = ft(h.appendChild(o), "script"), u && pt(a), n)
          for (c = 0; o = a[c++];) ht.test(o.type || "") && n.push(o);
      return h
  }
  gt = i.createDocumentFragment().appendChild(i.createElement("div")), (mt = i.createElement("input")).setAttribute("type", "radio"), mt.setAttribute("checked", "checked"), mt.setAttribute("name", "t"), gt.appendChild(mt), p.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked, gt.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue;
  var bt = i.documentElement,
      xt = /^key/,
      wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Dt = /^([^.]*)(?:\.(.+)|)/;

  function _t() {
      return !0
  }

  function Ct() {
      return !1
  }

  function kt() {
      try {
          return i.activeElement
      } catch (t) {}
  }

  function Tt(t, e, n, i, r, o) {
      var a, s;
      if ("object" == typeof e) {
          for (s in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, s, n, i, e[s], o);
          return t
      }
      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ct;
      else if (!r) return t;
      return 1 === o && (a = r, (r = function(t) {
          return x().off(t), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = x.guid++)), t.each(function() {
          x.event.add(this, e, r, i, n)
      })
  }
  x.event = {
      global: {},
      add: function(t, e, n, i, r) {
          var o, a, s, l, u, c, h, d, f, p, g, m = Q.get(t);
          if (m)
              for (n.handler && (n = (o = n).handler, r = o.selector), r && x.find.matchesSelector(bt, r), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                      return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                  }), u = (e = (e || "").match(F) || [""]).length; u--;) f = g = (s = Dt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (h = x.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = x.event.special[f] || {}, c = x.extend({
                  type: f,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && x.expr.match.needsContext.test(r),
                  namespace: p.join(".")
              }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(f, a)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), x.event.global[f] = !0)
      },
      remove: function(t, e, n, i, r) {
          var o, a, s, l, u, c, h, d, f, p, g, m = Q.hasData(t) && Q.get(t);
          if (m && (l = m.events)) {
              for (u = (e = (e || "").match(F) || [""]).length; u--;)
                  if (f = g = (s = Dt.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                      for (h = x.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                      a && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || x.removeEvent(t, f, m.handle), delete l[f])
                  } else
                      for (f in l) x.event.remove(t, f + e[u], n, i, !0);
              x.isEmptyObject(l) && Q.remove(t, "handle events")
          }
      },
      dispatch: function(t) {
          var e, n, i, r, o, a, s = x.event.fix(t),
              l = new Array(arguments.length),
              u = (Q.get(this, "events") || {})[s.type] || [],
              c = x.event.special[s.type] || {};
          for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
              for (a = x.event.handlers.call(this, s, u), e = 0;
                  (r = a[e++]) && !s.isPropagationStopped();)
                  for (s.currentTarget = r.elem, n = 0;
                      (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, s), s.result
          }
      },
      handlers: function(t, e) {
          var n, i, r, o, a, s = [],
              l = e.delegateCount,
              u = t.target;
          if (l && u.nodeType && !("click" === t.type && t.button >= 1))
              for (; u !== this; u = u.parentNode || this)
                  if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                      for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? x(r, this).index(u) > -1 : x.find(r, this, null, [u]).length), a[r] && o.push(i);
                      o.length && s.push({
                          elem: u,
                          handlers: o
                      })
                  }
          return u = this, l < e.length && s.push({
              elem: u,
              handlers: e.slice(l)
          }), s
      },
      addProp: function(t, e) {
          Object.defineProperty(x.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: g(e) ? function() {
                  if (this.originalEvent) return e(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[t]
              },
              set: function(e) {
                  Object.defineProperty(this, t, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: e
                  })
              }
          })
      },
      fix: function(t) {
          return t[x.expando] ? t : new x.Event(t)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== kt() && this.focus) return this.focus(), !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === kt() && this.blur) return this.blur(), !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
              },
              _default: function(t) {
                  return S(t.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(t) {
                  void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
              }
          }
      }
  }, x.removeEvent = function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
  }, x.Event = function(t, e) {
      if (!(this instanceof x.Event)) return new x.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : Ct, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && x.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[x.expando] = !0
  }, x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: Ct,
      isPropagationStopped: Ct,
      isImmediatePropagationStopped: Ct,
      isSimulated: !1,
      preventDefault: function() {
          var t = this.originalEvent;
          this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function() {
          var t = this.originalEvent;
          this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
      }
  }, x.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(t) {
          var e = t.button;
          return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
      }
  }, x.event.addProp), x.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(t, e) {
      x.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
              var n, i = t.relatedTarget,
                  r = t.handleObj;
              return i && (i === this || x.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
          }
      }
  }), x.fn.extend({
      on: function(t, e, n, i) {
          return Tt(this, t, e, n, i)
      },
      one: function(t, e, n, i) {
          return Tt(this, t, e, n, i, 1)
      },
      off: function(t, e, n) {
          var i, r;
          if (t && t.preventDefault && t.handleObj) return i = t.handleObj, x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
          if ("object" == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this
          }
          return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Ct), this.each(function() {
              x.event.remove(this, t, n, e)
          })
      }
  });
  var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Mt = /<script|<style|<link/i,
      At = /checked\s*(?:[^=]|=\s*.checked.)/i,
      It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Et(t, e) {
      return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
  }

  function Nt(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
  }

  function Ot(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
  }

  function Pt(t, e) {
      var n, i, r, o, a, s, l, u;
      if (1 === e.nodeType) {
          if (Q.hasData(t) && (o = Q.access(t), a = Q.set(e, o), u = o.events))
              for (r in delete a.handle, a.events = {}, u)
                  for (n = 0, i = u[r].length; n < i; n++) x.event.add(e, r, u[r][n]);
          G.hasData(t) && (s = G.access(t), l = x.extend({}, s), G.set(e, l))
      }
  }

  function Ft(t, e, n, i) {
      e = a.apply([], e);
      var r, o, s, l, u, c, h = 0,
          d = t.length,
          f = d - 1,
          m = e[0],
          v = g(m);
      if (v || d > 1 && "string" == typeof m && !p.checkClone && At.test(m)) return t.each(function(r) {
          var o = t.eq(r);
          v && (e[0] = m.call(this, r, o.html())), Ft(o, e, n, i)
      });
      if (d && (o = (r = yt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
          for (l = (s = x.map(ft(r, "script"), Nt)).length; h < d; h++) u = r, h !== f && (u = x.clone(u, !0, !0), l && x.merge(s, ft(u, "script"))), n.call(t[h], u, h);
          if (l)
              for (c = s[s.length - 1].ownerDocument, x.map(s, Ot), h = 0; h < l; h++) u = s[h], ht.test(u.type || "") && !Q.access(u, "globalEval") && x.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(u.src) : y(u.textContent.replace(It, ""), c, u))
      }
      return t
  }

  function Lt(t, e, n) {
      for (var i, r = e ? x.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || x.cleanData(ft(i)), i.parentNode && (n && x.contains(i.ownerDocument, i) && pt(ft(i, "script")), i.parentNode.removeChild(i));
      return t
  }
  x.extend({
      htmlPrefilter: function(t) {
          return t.replace(St, "<$1></$2>")
      },
      clone: function(t, e, n) {
          var i, r, o, a, s, l, u, c = t.cloneNode(!0),
              h = x.contains(t.ownerDocument, t);
          if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t)))
              for (a = ft(c), i = 0, r = (o = ft(t)).length; i < r; i++) s = o[i], l = a[i], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ut.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
          if (e)
              if (n)
                  for (o = o || ft(t), a = a || ft(c), i = 0, r = o.length; i < r; i++) Pt(o[i], a[i]);
              else Pt(t, c);
          return (a = ft(c, "script")).length > 0 && pt(a, !h && ft(t, "script")), c
      },
      cleanData: function(t) {
          for (var e, n, i, r = x.event.special, o = 0; void 0 !== (n = t[o]); o++)
              if ($(n)) {
                  if (e = n[Q.expando]) {
                      if (e.events)
                          for (i in e.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, e.handle);
                      n[Q.expando] = void 0
                  }
                  n[G.expando] && (n[G.expando] = void 0)
              }
      }
  }), x.fn.extend({
      detach: function(t) {
          return Lt(this, t, !0)
      },
      remove: function(t) {
          return Lt(this, t)
      },
      text: function(t) {
          return V(this, function(t) {
              return void 0 === t ? x.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
              })
          }, null, t, arguments.length)
      },
      append: function() {
          return Ft(this, arguments, function(t) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Et(this, t).appendChild(t)
          })
      },
      prepend: function() {
          return Ft(this, arguments, function(t) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var e = Et(this, t);
                  e.insertBefore(t, e.firstChild)
              }
          })
      },
      before: function() {
          return Ft(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this)
          })
      },
      after: function() {
          return Ft(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          })
      },
      empty: function() {
          for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (x.cleanData(ft(t, !1)), t.textContent = "");
          return this
      },
      clone: function(t, e) {
          return t = null != t && t, e = null == e ? t : e, this.map(function() {
              return x.clone(this, t, e)
          })
      },
      html: function(t) {
          return V(this, function(t) {
              var e = this[0] || {},
                  n = 0,
                  i = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if ("string" == typeof t && !Mt.test(t) && !dt[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
                  t = x.htmlPrefilter(t);
                  try {
                      for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (x.cleanData(ft(e, !1)), e.innerHTML = t);
                      e = 0
                  } catch (t) {}
              }
              e && this.empty().append(t)
          }, null, t, arguments.length)
      },
      replaceWith: function() {
          var t = [];
          return Ft(this, arguments, function(e) {
              var n = this.parentNode;
              x.inArray(this, t) < 0 && (x.cleanData(ft(this)), n && n.replaceChild(e, this))
          }, t)
      }
  }), x.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(t, e) {
      x.fn[t] = function(t) {
          for (var n, i = [], r = x(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), x(r[a])[e](n), s.apply(i, n.get());
          return this.pushStack(i)
      }
  });
  var Rt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
      Ut = function(e) {
          var n = e.ownerDocument.defaultView;
          return n && n.opener || (n = t), n.getComputedStyle(e)
      },
      Wt = new RegExp(nt.join("|"), "i");

  function Ht(t, e, n) {
      var i, r, o, a, s = t.style;
      return (n = n || Ut(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || x.contains(t.ownerDocument, t) || (a = x.style(t, e)), !p.pixelBoxStyles() && Rt.test(a) && Wt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function jt(t, e) {
      return {
          get: function() {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get
          }
      }
  }! function() {
      function e() {
          if (c) {
              u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(u).appendChild(c);
              var e = t.getComputedStyle(c);
              r = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", bt.removeChild(u), c = null
          }
      }

      function n(t) {
          return Math.round(parseFloat(t))
      }
      var r, o, a, s, l, u = i.createElement("div"),
          c = i.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(p, {
          boxSizingReliable: function() {
              return e(), o
          },
          pixelBoxStyles: function() {
              return e(), s
          },
          pixelPosition: function() {
              return e(), r
          },
          reliableMarginLeft: function() {
              return e(), l
          },
          scrollboxSize: function() {
              return e(), a
          }
      }))
  }();
  var Vt = /^(none|table(?!-c[ea]).+)/,
      Bt = /^--/,
      zt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      qt = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Yt = ["Webkit", "Moz", "ms"],
      $t = i.createElement("div").style;

  function Kt(t) {
      var e = x.cssProps[t];
      return e || (e = x.cssProps[t] = function(t) {
          if (t in $t) return t;
          for (var e = t[0].toUpperCase() + t.slice(1), n = Yt.length; n--;)
              if ((t = Yt[n] + e) in $t) return t
      }(t) || t), e
  }

  function Qt(t, e, n) {
      var i = et.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
  }

  function Gt(t, e, n, i, r, o) {
      var a = "width" === e ? 1 : 0,
          s = 0,
          l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (l += x.css(t, n + nt[a], !0, r)), i ? ("content" === n && (l -= x.css(t, "padding" + nt[a], !0, r)), "margin" !== n && (l -= x.css(t, "border" + nt[a] + "Width", !0, r))) : (l += x.css(t, "padding" + nt[a], !0, r), "padding" !== n ? l += x.css(t, "border" + nt[a] + "Width", !0, r) : s += x.css(t, "border" + nt[a] + "Width", !0, r));
      return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5))), l
  }

  function Xt(t, e, n) {
      var i = Ut(t),
          r = Ht(t, e, i),
          o = "border-box" === x.css(t, "boxSizing", !1, i),
          a = o;
      if (Rt.test(r)) {
          if (!n) return r;
          r = "auto"
      }
      return a = a && (p.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === x.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (r = parseFloat(r) || 0) + Gt(t, e, n || (o ? "border" : "content"), a, i, r) + "px"
  }

  function Jt(t, e, n, i, r) {
      return new Jt.prototype.init(t, e, n, i, r)
  }
  x.extend({
      cssHooks: {
          opacity: {
              get: function(t, e) {
                  if (e) {
                      var n = Ht(t, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var r, o, a, s = Y(e),
                  l = Bt.test(e),
                  u = t.style;
              if (l || (e = Kt(s)), a = x.cssHooks[e] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : u[e];
              "string" === (o = typeof n) && (r = et.exec(n)) && r[1] && (n = ot(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (x.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
          }
      },
      css: function(t, e, n, i) {
          var r, o, a, s = Y(e);
          return Bt.test(e) || (e = Kt(s)), (a = x.cssHooks[e] || x.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = Ht(t, e, i)), "normal" === r && e in qt && (r = qt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
      }
  }), x.each(["height", "width"], function(t, e) {
      x.cssHooks[e] = {
          get: function(t, n, i) {
              if (n) return !Vt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Xt(t, e, i) : rt(t, zt, function() {
                  return Xt(t, e, i)
              })
          },
          set: function(t, n, i) {
              var r, o = Ut(t),
                  a = "border-box" === x.css(t, "boxSizing", !1, o),
                  s = i && Gt(t, e, i, a, o);
              return a && p.scrollboxSize() === o.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Gt(t, e, "border", !1, o) - .5)), s && (r = et.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = x.css(t, e)), Qt(0, n, s)
          }
      }
  }), x.cssHooks.marginLeft = jt(p.reliableMarginLeft, function(t, e) {
      if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
          marginLeft: 0
      }, function() {
          return t.getBoundingClientRect().left
      })) + "px"
  }), x.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(t, e) {
      x.cssHooks[t + e] = {
          expand: function(n) {
              for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
              return r
          }
      }, "margin" !== t && (x.cssHooks[t + e].set = Qt)
  }), x.fn.extend({
      css: function(t, e) {
          return V(this, function(t, e, n) {
              var i, r, o = {},
                  a = 0;
              if (Array.isArray(e)) {
                  for (i = Ut(t), r = e.length; a < r; a++) o[e[a]] = x.css(t, e[a], !1, i);
                  return o
              }
              return void 0 !== n ? x.style(t, e, n) : x.css(t, e)
          }, t, e, arguments.length > 1)
      }
  }), x.Tween = Jt, Jt.prototype = {
      constructor: Jt,
      init: function(t, e, n, i, r, o) {
          this.elem = t, this.prop = n, this.easing = r || x.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (x.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var t = Jt.propHooks[this.prop];
          return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
      },
      run: function(t) {
          var e, n = Jt.propHooks[this.prop];
          return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Jt.propHooks._default.set(this), this
      }
  }, Jt.prototype.init.prototype = Jt.prototype, Jt.propHooks = {
      _default: {
          get: function(t) {
              var e;
              return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
          },
          set: function(t) {
              x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
          }
      }
  }, Jt.propHooks.scrollTop = Jt.propHooks.scrollLeft = {
      set: function(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
  }, x.easing = {
      linear: function(t) {
          return t
      },
      swing: function(t) {
          return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
  }, x.fx = Jt.prototype.init, x.fx.step = {};
  var Zt, te, ee = /^(?:toggle|show|hide)$/,
      ne = /queueHooks$/;

  function ie() {
      te && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ie) : t.setTimeout(ie, x.fx.interval), x.fx.tick())
  }

  function re() {
      return t.setTimeout(function() {
          Zt = void 0
      }), Zt = Date.now()
  }

  function oe(t, e) {
      var n, i = 0,
          r = {
              height: t
          };
      for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
      return e && (r.opacity = r.width = t), r
  }

  function ae(t, e, n) {
      for (var i, r = (se.tweeners[e] || []).concat(se.tweeners["*"]), o = 0, a = r.length; o < a; o++)
          if (i = r[o].call(n, e, t)) return i
  }

  function se(t, e, n) {
      var i, r, o = 0,
          a = se.prefilters.length,
          s = x.Deferred().always(function() {
              delete l.elem
          }),
          l = function() {
              if (r) return !1;
              for (var e = Zt || re(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
              return s.notifyWith(t, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1)
          },
          u = s.promise({
              elem: t,
              props: x.extend({}, e),
              opts: x.extend(!0, {
                  specialEasing: {},
                  easing: x.easing._default
              }, n),
              originalProperties: e,
              originalOptions: n,
              startTime: Zt || re(),
              duration: n.duration,
              tweens: [],
              createTween: function(e, n) {
                  var i = x.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                  return u.tweens.push(i), i
              },
              stop: function(e) {
                  var n = 0,
                      i = e ? u.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) u.tweens[n].run(1);
                  return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
              }
          }),
          c = u.props;
      for (! function(t, e) {
              var n, i, r, o, a;
              for (n in t)
                  if (r = e[i = Y(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = x.cssHooks[i]) && "expand" in a)
                      for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                  else e[i] = r
          }(c, u.opts.specialEasing); o < a; o++)
          if (i = se.prefilters[o].call(u, t, c, u.opts)) return g(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
      return x.map(c, ae, u), g(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
          elem: t,
          anim: u,
          queue: u.opts.queue
      })), u
  }
  x.Animation = x.extend(se, {
          tweeners: {
              "*": [function(t, e) {
                  var n = this.createTween(t, e);
                  return ot(n.elem, t, et.exec(e), n), n
              }]
          },
          tweener: function(t, e) {
              g(t) ? (e = t, t = ["*"]) : t = t.match(F);
              for (var n, i = 0, r = t.length; i < r; i++) n = t[i], se.tweeners[n] = se.tweeners[n] || [], se.tweeners[n].unshift(e)
          },
          prefilters: [function(t, e, n) {
              var i, r, o, a, s, l, u, c, h = "width" in e || "height" in e,
                  d = this,
                  f = {},
                  p = t.style,
                  g = t.nodeType && it(t),
                  m = Q.get(t, "fxshow");
              for (i in n.queue || (null == (a = x._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                      a.unqueued || s()
                  }), a.unqueued++, d.always(function() {
                      d.always(function() {
                          a.unqueued--, x.queue(t, "fx").length || a.empty.fire()
                      })
                  })), e)
                  if (r = e[i], ee.test(r)) {
                      if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                          if ("show" !== r || !m || void 0 === m[i]) continue;
                          g = !0
                      }
                      f[i] = m && m[i] || x.style(t, i)
                  }
              if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(f))
                  for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Q.get(t, "display")), "none" === (c = x.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = x.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(t, "float") && (l || (d.done(function() {
                          p.display = u
                      }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                      })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(t, "fxshow", {
                      display: u
                  }), o && (m.hidden = !g), g && lt([t], !0), d.done(function() {
                      for (i in g || lt([t]), Q.remove(t, "fxshow"), f) x.style(t, i, f[i])
                  })), l = ae(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
          }],
          prefilter: function(t, e) {
              e ? se.prefilters.unshift(t) : se.prefilters.push(t)
          }
      }), x.speed = function(t, e, n) {
          var i = t && "object" == typeof t ? x.extend({}, t) : {
              complete: n || !n && e || g(t) && t,
              duration: t,
              easing: n && e || e && !g(e) && e
          };
          return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
              g(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
          }, i
      }, x.fn.extend({
          fadeTo: function(t, e, n, i) {
              return this.filter(it).css("opacity", 0).show().end().animate({
                  opacity: e
              }, t, n, i)
          },
          animate: function(t, e, n, i) {
              var r = x.isEmptyObject(t),
                  o = x.speed(e, n, i),
                  a = function() {
                      var e = se(this, x.extend({}, t), o);
                      (r || Q.get(this, "finish")) && e.stop(!0)
                  };
              return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(t, e, n) {
              var i = function(t) {
                  var e = t.stop;
                  delete t.stop, e(n)
              };
              return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                  var e = !0,
                      r = null != t && t + "queueHooks",
                      o = x.timers,
                      a = Q.get(this);
                  if (r) a[r] && a[r].stop && i(a[r]);
                  else
                      for (r in a) a[r] && a[r].stop && ne.test(r) && i(a[r]);
                  for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                  !e && n || x.dequeue(this, t)
              })
          },
          finish: function(t) {
              return !1 !== t && (t = t || "fx"), this.each(function() {
                  var e, n = Q.get(this),
                      i = n[t + "queue"],
                      r = n[t + "queueHooks"],
                      o = x.timers,
                      a = i ? i.length : 0;
                  for (n.finish = !0, x.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                  for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                  delete n.finish
              })
          }
      }), x.each(["toggle", "show", "hide"], function(t, e) {
          var n = x.fn[e];
          x.fn[e] = function(t, i, r) {
              return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(oe(e, !0), t, i, r)
          }
      }), x.each({
          slideDown: oe("show"),
          slideUp: oe("hide"),
          slideToggle: oe("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(t, e) {
          x.fn[t] = function(t, n, i) {
              return this.animate(e, t, n, i)
          }
      }), x.timers = [], x.fx.tick = function() {
          var t, e = 0,
              n = x.timers;
          for (Zt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || x.fx.stop(), Zt = void 0
      }, x.fx.timer = function(t) {
          x.timers.push(t), x.fx.start()
      }, x.fx.interval = 13, x.fx.start = function() {
          te || (te = !0, ie())
      }, x.fx.stop = function() {
          te = null
      }, x.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, x.fn.delay = function(e, n) {
          return e = x.fx && x.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
              var r = t.setTimeout(n, e);
              i.stop = function() {
                  t.clearTimeout(r)
              }
          })
      },
      function() {
          var t = i.createElement("input"),
              e = i.createElement("select").appendChild(i.createElement("option"));
          t.type = "checkbox", p.checkOn = "" !== t.value, p.optSelected = e.selected, (t = i.createElement("input")).value = "t", t.type = "radio", p.radioValue = "t" === t.value
      }();
  var le, ue = x.expr.attrHandle;
  x.fn.extend({
      attr: function(t, e) {
          return V(this, x.attr, t, e, arguments.length > 1)
      },
      removeAttr: function(t) {
          return this.each(function() {
              x.removeAttr(this, t)
          })
      }
  }), x.extend({
      attr: function(t, e, n) {
          var i, r, o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === o && x.isXMLDoc(t) || (r = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void x.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = x.find.attr(t, e)) ? void 0 : i)
      },
      attrHooks: {
          type: {
              set: function(t, e) {
                  if (!p.radioValue && "radio" === e && S(t, "input")) {
                      var n = t.value;
                      return t.setAttribute("type", e), n && (t.value = n), e
                  }
              }
          }
      },
      removeAttr: function(t, e) {
          var n, i = 0,
              r = e && e.match(F);
          if (r && 1 === t.nodeType)
              for (; n = r[i++];) t.removeAttribute(n)
      }
  }), le = {
      set: function(t, e, n) {
          return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n
      }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var n = ue[e] || x.find.attr;
      ue[e] = function(t, e, i) {
          var r, o, a = e.toLowerCase();
          return i || (o = ue[a], ue[a] = r, r = null != n(t, e, i) ? a : null, ue[a] = o), r
      }
  });
  var ce = /^(?:input|select|textarea|button)$/i,
      he = /^(?:a|area)$/i;

  function de(t) {
      return (t.match(F) || []).join(" ")
  }

  function fe(t) {
      return t.getAttribute && t.getAttribute("class") || ""
  }

  function pe(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(F) || []
  }
  x.fn.extend({
      prop: function(t, e) {
          return V(this, x.prop, t, e, arguments.length > 1)
      },
      removeProp: function(t) {
          return this.each(function() {
              delete this[x.propFix[t] || t]
          })
      }
  }), x.extend({
      prop: function(t, e, n) {
          var i, r, o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(t) || (e = x.propFix[e] || e, r = x.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
      },
      propHooks: {
          tabIndex: {
              get: function(t) {
                  var e = x.find.attr(t, "tabindex");
                  return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
              }
          }
      },
      propFix: {
          for: "htmlFor",
          class: "className"
      }
  }), p.optSelected || (x.propHooks.selected = {
      get: function(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null
      },
      set: function(t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      x.propFix[this.toLowerCase()] = this
  }), x.fn.extend({
      addClass: function(t) {
          var e, n, i, r, o, a, s, l = 0;
          if (g(t)) return this.each(function(e) {
              x(this).addClass(t.call(this, e, fe(this)))
          });
          if ((e = pe(t)).length)
              for (; n = this[l++];)
                  if (r = fe(n), i = 1 === n.nodeType && " " + de(r) + " ") {
                      for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (s = de(i)) && n.setAttribute("class", s)
                  }
          return this
      },
      removeClass: function(t) {
          var e, n, i, r, o, a, s, l = 0;
          if (g(t)) return this.each(function(e) {
              x(this).removeClass(t.call(this, e, fe(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((e = pe(t)).length)
              for (; n = this[l++];)
                  if (r = fe(n), i = 1 === n.nodeType && " " + de(r) + " ") {
                      for (a = 0; o = e[a++];)
                          for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                      r !== (s = de(i)) && n.setAttribute("class", s)
                  }
          return this
      },
      toggleClass: function(t, e) {
          var n = typeof t,
              i = "string" === n || Array.isArray(t);
          return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each(function(n) {
              x(this).toggleClass(t.call(this, n, fe(this), e), e)
          }) : this.each(function() {
              var e, r, o, a;
              if (i)
                  for (r = 0, o = x(this), a = pe(t); e = a[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else void 0 !== t && "boolean" !== n || ((e = fe(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
          })
      },
      hasClass: function(t) {
          var e, n, i = 0;
          for (e = " " + t + " "; n = this[i++];)
              if (1 === n.nodeType && (" " + de(fe(n)) + " ").indexOf(e) > -1) return !0;
          return !1
      }
  });
  var ge = /\r/g;
  x.fn.extend({
      val: function(t) {
          var e, n, i, r = this[0];
          return arguments.length ? (i = g(t), this.each(function(n) {
              var r;
              1 === this.nodeType && (null == (r = i ? t.call(this, n, x(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, function(t) {
                  return null == t ? "" : t + ""
              })), (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
          })) : r ? (e = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ge, "") : null == n ? "" : n : void 0
      }
  }), x.extend({
      valHooks: {
          option: {
              get: function(t) {
                  var e = x.find.attr(t, "value");
                  return null != e ? e : de(x.text(t))
              }
          },
          select: {
              get: function(t) {
                  var e, n, i, r = t.options,
                      o = t.selectedIndex,
                      a = "select-one" === t.type,
                      s = a ? null : [],
                      l = a ? o + 1 : r.length;
                  for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                      if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                          if (e = x(n).val(), a) return e;
                          s.push(e)
                      }
                  return s
              },
              set: function(t, e) {
                  for (var n, i, r = t.options, o = x.makeArray(e), a = r.length; a--;)((i = r[a]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
                  return n || (t.selectedIndex = -1), o
              }
          }
      }
  }), x.each(["radio", "checkbox"], function() {
      x.valHooks[this] = {
          set: function(t, e) {
              if (Array.isArray(e)) return t.checked = x.inArray(x(t).val(), e) > -1
          }
      }, p.checkOn || (x.valHooks[this].get = function(t) {
          return null === t.getAttribute("value") ? "on" : t.value
      })
  }), p.focusin = "onfocusin" in t;
  var me = /^(?:focusinfocus|focusoutblur)$/,
      ve = function(t) {
          t.stopPropagation()
      };
  x.extend(x.event, {
      trigger: function(e, n, r, o) {
          var a, s, l, u, c, d, f, p, v = [r || i],
              y = h.call(e, "type") ? e.type : e,
              b = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (s = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !me.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[x.expando] ? e : new x.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : x.makeArray(n, [e]), f = x.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
              if (!o && !f.noBubble && !m(r)) {
                  for (u = f.delegateType || y, me.test(u + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                  l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
              }
              for (a = 0;
                  (s = v[a++]) && !e.isPropagationStopped();) p = s, e.type = a > 1 ? u : f.bindType || y, (d = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && d.apply(s, n), (d = c && s[c]) && d.apply && $(s) && (e.result = d.apply(s, n), !1 === e.result && e.preventDefault());
              return e.type = y, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !$(r) || c && g(r[y]) && !m(r) && ((l = r[c]) && (r[c] = null), x.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, ve), r[y](), e.isPropagationStopped() && p.removeEventListener(y, ve), x.event.triggered = void 0, l && (r[c] = l)), e.result
          }
      },
      simulate: function(t, e, n) {
          var i = x.extend(new x.Event, n, {
              type: t,
              isSimulated: !0
          });
          x.event.trigger(i, null, e)
      }
  }), x.fn.extend({
      trigger: function(t, e) {
          return this.each(function() {
              x.event.trigger(t, e, this)
          })
      },
      triggerHandler: function(t, e) {
          var n = this[0];
          if (n) return x.event.trigger(t, e, n, !0)
      }
  }), p.focusin || x.each({
      focus: "focusin",
      blur: "focusout"
  }, function(t, e) {
      var n = function(t) {
          x.event.simulate(e, t.target, x.event.fix(t))
      };
      x.event.special[e] = {
          setup: function() {
              var i = this.ownerDocument || this,
                  r = Q.access(i, e);
              r || i.addEventListener(t, n, !0), Q.access(i, e, (r || 0) + 1)
          },
          teardown: function() {
              var i = this.ownerDocument || this,
                  r = Q.access(i, e) - 1;
              r ? Q.access(i, e, r) : (i.removeEventListener(t, n, !0), Q.remove(i, e))
          }
      }
  });
  var ye = t.location,
      be = Date.now(),
      xe = /\?/;
  x.parseXML = function(e) {
      var n;
      if (!e || "string" != typeof e) return null;
      try {
          n = (new t.DOMParser).parseFromString(e, "text/xml")
      } catch (t) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), n
  };
  var we = /\[\]$/,
      De = /\r?\n/g,
      _e = /^(?:submit|button|image|reset|file)$/i,
      Ce = /^(?:input|select|textarea|keygen)/i;

  function ke(t, e, n, i) {
      var r;
      if (Array.isArray(e)) x.each(e, function(e, r) {
          n || we.test(t) ? i(t, r) : ke(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
      });
      else if (n || "object" !== b(e)) i(t, e);
      else
          for (r in e) ke(t + "[" + r + "]", e[r], n, i)
  }
  x.param = function(t, e) {
      var n, i = [],
          r = function(t, e) {
              var n = g(e) ? e() : e;
              i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
          };
      if (Array.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, function() {
          r(this.name, this.value)
      });
      else
          for (n in t) ke(n, t[n], e, r);
      return i.join("&")
  }, x.fn.extend({
      serialize: function() {
          return x.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var t = x.prop(this, "elements");
              return t ? x.makeArray(t) : this
          }).filter(function() {
              var t = this.type;
              return this.name && !x(this).is(":disabled") && Ce.test(this.nodeName) && !_e.test(t) && (this.checked || !ut.test(t))
          }).map(function(t, e) {
              var n = x(this).val();
              return null == n ? null : Array.isArray(n) ? x.map(n, function(t) {
                  return {
                      name: e.name,
                      value: t.replace(De, "\r\n")
                  }
              }) : {
                  name: e.name,
                  value: n.replace(De, "\r\n")
              }
          }).get()
      }
  });
  var Te = /%20/g,
      Se = /#.*$/,
      Me = /([?&])_=[^&]*/,
      Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ie = /^(?:GET|HEAD)$/,
      Ee = /^\/\//,
      Ne = {},
      Oe = {},
      Pe = "*/".concat("*"),
      Fe = i.createElement("a");

  function Le(t) {
      return function(e, n) {
          "string" != typeof e && (n = e, e = "*");
          var i, r = 0,
              o = e.toLowerCase().match(F) || [];
          if (g(n))
              for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
  }

  function Re(t, e, n, i) {
      var r = {},
          o = t === Oe;

      function a(s) {
          var l;
          return r[s] = !0, x.each(t[s] || [], function(t, s) {
              var u = s(e, n, i);
              return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
          }), l
      }
      return a(e.dataTypes[0]) || !r["*"] && a("*")
  }

  function Ue(t, e) {
      var n, i, r = x.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
      return i && x.extend(!0, t, i), t
  }
  Fe.href = ye.href, x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: ye.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Pe,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": x.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(t, e) {
          return e ? Ue(Ue(t, x.ajaxSettings), e) : Ue(x.ajaxSettings, t)
      },
      ajaxPrefilter: Le(Ne),
      ajaxTransport: Le(Oe),
      ajax: function(e, n) {
          "object" == typeof e && (n = e, e = void 0), n = n || {};
          var r, o, a, s, l, u, c, h, d, f, p = x.ajaxSetup({}, n),
              g = p.context || p,
              m = p.context && (g.nodeType || g.jquery) ? x(g) : x.event,
              v = x.Deferred(),
              y = x.Callbacks("once memory"),
              b = p.statusCode || {},
              w = {},
              D = {},
              _ = "canceled",
              C = {
                  readyState: 0,
                  getResponseHeader: function(t) {
                      var e;
                      if (c) {
                          if (!s)
                              for (s = {}; e = Ae.exec(a);) s[e[1].toLowerCase()] = e[2];
                          e = s[t.toLowerCase()]
                      }
                      return null == e ? null : e
                  },
                  getAllResponseHeaders: function() {
                      return c ? a : null
                  },
                  setRequestHeader: function(t, e) {
                      return null == c && (t = D[t.toLowerCase()] = D[t.toLowerCase()] || t, w[t] = e), this
                  },
                  overrideMimeType: function(t) {
                      return null == c && (p.mimeType = t), this
                  },
                  statusCode: function(t) {
                      var e;
                      if (t)
                          if (c) C.always(t[C.status]);
                          else
                              for (e in t) b[e] = [b[e], t[e]];
                      return this
                  },
                  abort: function(t) {
                      var e = t || _;
                      return r && r.abort(e), k(0, e), this
                  }
              };
          if (v.promise(C), p.url = ((e || p.url || ye.href) + "").replace(Ee, ye.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""], null == p.crossDomain) {
              u = i.createElement("a");
              try {
                  u.href = p.url, u.href = u.href, p.crossDomain = Fe.protocol + "//" + Fe.host != u.protocol + "//" + u.host
              } catch (t) {
                  p.crossDomain = !0
              }
          }
          if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), Re(Ne, p, n, C), c) return C;
          for (d in (h = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), o = p.url.replace(Se, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Te, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (xe.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Me, "$1"), f = (xe.test(o) ? "&" : "?") + "_=" + be++ + f), p.url = o + f), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pe + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(d, p.headers[d]);
          if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c)) return C.abort();
          if (_ = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = Re(Oe, p, n, C)) {
              if (C.readyState = 1, h && m.trigger("ajaxSend", [C, p]), c) return C;
              p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                  C.abort("timeout")
              }, p.timeout));
              try {
                  c = !1, r.send(w, k)
              } catch (t) {
                  if (c) throw t;
                  k(-1, t)
              }
          } else k(-1, "No Transport");

          function k(e, n, i, s) {
              var u, d, f, w, D, _ = n;
              c || (c = !0, l && t.clearTimeout(l), r = void 0, a = s || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (w = function(t, e, n) {
                  for (var i, r, o, a, s = t.contents, l = t.dataTypes;
                      "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                  if (i)
                      for (r in s)
                          if (s[r] && s[r].test(i)) {
                              l.unshift(r);
                              break
                          }
                  if (l[0] in n) o = l[0];
                  else {
                      for (r in n) {
                          if (!l[0] || t.converters[r + " " + l[0]]) {
                              o = r;
                              break
                          }
                          a || (a = r)
                      }
                      o = o || a
                  }
                  if (o) return o !== l[0] && l.unshift(o), n[o]
              }(p, C, i)), w = function(t, e, n, i) {
                  var r, o, a, s, l, u = {},
                      c = t.dataTypes.slice();
                  if (c[1])
                      for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                  for (o = c.shift(); o;)
                      if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                      if (!(a = u[l + " " + o] || u["* " + o]))
                          for (r in u)
                              if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                  !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                                  break
                              }
                      if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else try {
                              e = a(e)
                          } catch (t) {
                              return {
                                  state: "parsererror",
                                  error: a ? t : "No conversion from " + l + " to " + o
                              }
                          }
                  }
                  return {
                      state: "success",
                      data: e
                  }
              }(p, w, C, u), u ? (p.ifModified && ((D = C.getResponseHeader("Last-Modified")) && (x.lastModified[o] = D), (D = C.getResponseHeader("etag")) && (x.etag[o] = D)), 204 === e || "HEAD" === p.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, d = w.data, u = !(f = w.error))) : (f = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || _) + "", u ? v.resolveWith(g, [d, _, C]) : v.rejectWith(g, [C, _, f]), C.statusCode(b), b = void 0, h && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? d : f]), y.fireWith(g, [C, _]), h && (m.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
          }
          return C
      },
      getJSON: function(t, e, n) {
          return x.get(t, e, n, "json")
      },
      getScript: function(t, e) {
          return x.get(t, void 0, e, "script")
      }
  }), x.each(["get", "post"], function(t, e) {
      x[e] = function(t, n, i, r) {
          return g(n) && (r = r || i, i = n, n = void 0), x.ajax(x.extend({
              url: t,
              type: e,
              dataType: r,
              data: n,
              success: i
          }, x.isPlainObject(t) && t))
      }
  }), x._evalUrl = function(t) {
      return x.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
      })
  }, x.fn.extend({
      wrapAll: function(t) {
          var e;
          return this[0] && (g(t) && (t = t.call(this[0])), e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
              for (var t = this; t.firstElementChild;) t = t.firstElementChild;
              return t
          }).append(this)), this
      },
      wrapInner: function(t) {
          return g(t) ? this.each(function(e) {
              x(this).wrapInner(t.call(this, e))
          }) : this.each(function() {
              var e = x(this),
                  n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t)
          })
      },
      wrap: function(t) {
          var e = g(t);
          return this.each(function(n) {
              x(this).wrapAll(e ? t.call(this, n) : t)
          })
      },
      unwrap: function(t) {
          return this.parent(t).not("body").each(function() {
              x(this).replaceWith(this.childNodes)
          }), this
      }
  }), x.expr.pseudos.hidden = function(t) {
      return !x.expr.pseudos.visible(t)
  }, x.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
  }, x.ajaxSettings.xhr = function() {
      try {
          return new t.XMLHttpRequest
      } catch (t) {}
  };
  var We = {
          0: 200,
          1223: 204
      },
      He = x.ajaxSettings.xhr();
  p.cors = !!He && "withCredentials" in He, p.ajax = He = !!He, x.ajaxTransport(function(e) {
      var n, i;
      if (p.cors || He && !e.crossDomain) return {
          send: function(r, o) {
              var a, s = e.xhr();
              if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
              for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
              n = function(t) {
                  return function() {
                      n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(We[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                          binary: s.response
                      } : {
                          text: s.responseText
                      }, s.getAllResponseHeaders()))
                  }
              }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                  4 === s.readyState && t.setTimeout(function() {
                      n && i()
                  })
              }, n = n("abort");
              try {
                  s.send(e.hasContent && e.data || null)
              } catch (t) {
                  if (n) throw t
              }
          },
          abort: function() {
              n && n()
          }
      }
  }), x.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1)
  }), x.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(t) {
              return x.globalEval(t), t
          }
      }
  }), x.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
  }), x.ajaxTransport("script", function(t) {
      var e, n;
      if (t.crossDomain) return {
          send: function(r, o) {
              e = x("<script>").prop({
                  charset: t.scriptCharset,
                  src: t.url
              }).on("load error", n = function(t) {
                  e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
              }), i.head.appendChild(e[0])
          },
          abort: function() {
              n && n()
          }
      }
  });
  var je, Ve = [],
      Be = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var t = Ve.pop() || x.expando + "_" + be++;
          return this[t] = !0, t
      }
  }), x.ajaxPrefilter("json jsonp", function(e, n, i) {
      var r, o, a, s = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Be, "$1" + r) : !1 !== e.jsonp && (e.url += (xe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
          return a || x.error(r + " was not called"), a[0]
      }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
          a = arguments
      }, i.always(function() {
          void 0 === o ? x(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ve.push(r)), a && g(o) && o(a[0]), a = o = void 0
      }), "script"
  }), p.createHTMLDocument = ((je = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === je.childNodes.length), x.parseHTML = function(t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(r)) : e = i), a = !n && [], (o = M.exec(t)) ? [e.createElement(o[1])] : (o = yt([t], e, a), a && a.length && x(a).remove(), x.merge([], o.childNodes)));
      var r, o, a
  }, x.fn.load = function(t, e, n) {
      var i, r, o, a = this,
          s = t.indexOf(" ");
      return s > -1 && (i = de(t.slice(s)), t = t.slice(0, s)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && x.ajax({
          url: t,
          type: r || "GET",
          dataType: "html",
          data: e
      }).done(function(t) {
          o = arguments, a.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t)
      }).always(n && function(t, e) {
          a.each(function() {
              n.apply(this, o || [t.responseText, e, t])
          })
      }), this
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      x.fn[e] = function(t) {
          return this.on(e, t)
      }
  }), x.expr.pseudos.animated = function(t) {
      return x.grep(x.timers, function(e) {
          return t === e.elem
      }).length
  }, x.offset = {
      setOffset: function(t, e, n) {
          var i, r, o, a, s, l, u = x.css(t, "position"),
              c = x(t),
              h = {};
          "static" === u && (t.style.position = "relative"), s = c.offset(), o = x.css(t, "top"), l = x.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g(e) && (e = e.call(t, n, x.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
      }
  }, x.fn.extend({
      offset: function(t) {
          if (arguments.length) return void 0 === t ? this : this.each(function(e) {
              x.offset.setOffset(this, t, e)
          });
          var e, n, i = this[0];
          return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
              top: e.top + n.pageYOffset,
              left: e.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          } : void 0
      },
      position: function() {
          if (this[0]) {
              var t, e, n, i = this[0],
                  r = {
                      top: 0,
                      left: 0
                  };
              if ("fixed" === x.css(i, "position")) e = i.getBoundingClientRect();
              else {
                  for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position");) t = t.parentNode;
                  t && t !== i && 1 === t.nodeType && ((r = x(t).offset()).top += x.css(t, "borderTopWidth", !0), r.left += x.css(t, "borderLeftWidth", !0))
              }
              return {
                  top: e.top - r.top - x.css(i, "marginTop", !0),
                  left: e.left - r.left - x.css(i, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var t = this.offsetParent; t && "static" === x.css(t, "position");) t = t.offsetParent;
              return t || bt
          })
      }
  }), x.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, e) {
      var n = "pageYOffset" === e;
      x.fn[t] = function(i) {
          return V(this, function(t, i, r) {
              var o;
              if (m(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
              o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
          }, t, i, arguments.length)
      }
  }), x.each(["top", "left"], function(t, e) {
      x.cssHooks[e] = jt(p.pixelPosition, function(t, n) {
          if (n) return n = Ht(t, e), Rt.test(n) ? x(t).position()[e] + "px" : n
      })
  }), x.each({
      Height: "height",
      Width: "width"
  }, function(t, e) {
      x.each({
          padding: "inner" + t,
          content: e,
          "": "outer" + t
      }, function(n, i) {
          x.fn[i] = function(r, o) {
              var a = arguments.length && (n || "boolean" != typeof r),
                  s = n || (!0 === r || !0 === o ? "margin" : "border");
              return V(this, function(e, n, r) {
                  var o;
                  return m(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? x.css(e, n, s) : x.style(e, n, r, s)
              }, e, a ? r : void 0, a)
          }
      })
  }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
      x.fn[e] = function(t, n) {
          return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
  }), x.fn.extend({
      hover: function(t, e) {
          return this.mouseenter(t).mouseleave(e || t)
      }
  }), x.fn.extend({
      bind: function(t, e, n) {
          return this.on(t, null, e, n)
      },
      unbind: function(t, e) {
          return this.off(t, null, e)
      },
      delegate: function(t, e, n, i) {
          return this.on(e, t, n, i)
      },
      undelegate: function(t, e, n) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
  }), x.proxy = function(t, e) {
      var n, i, r;
      if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return i = o.call(arguments, 2), (r = function() {
          return t.apply(e || this, i.concat(o.call(arguments)))
      }).guid = t.guid = t.guid || x.guid++, r
  }, x.holdReady = function(t) {
      t ? x.readyWait++ : x.ready(!0)
  }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = S, x.isFunction = g, x.isWindow = m, x.camelCase = Y, x.type = b, x.now = Date.now, x.isNumeric = function(t) {
      var e = x.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return x
  });
  var ze = t.jQuery,
      qe = t.$;
  return x.noConflict = function(e) {
      return t.$ === x && (t.$ = qe), e && t.jQuery === x && (t.jQuery = ze), x
  }, e || (t.jQuery = t.$ = x), x
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
  "use strict";
  for (var t = "undefined" != typeof window && "undefined" != typeof document, e = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < e.length; i += 1)
      if (t && navigator.userAgent.indexOf(e[i]) >= 0) {
          n = 1;
          break
      }
  var r = t && window.Promise ? function(t) {
      var e = !1;
      return function() {
          e || (e = !0, window.Promise.resolve().then(function() {
              e = !1, t()
          }))
      }
  } : function(t) {
      var e = !1;
      return function() {
          e || (e = !0, setTimeout(function() {
              e = !1, t()
          }, n))
      }
  };

  function o(t) {
      return t && "[object Function]" === {}.toString.call(t)
  }

  function a(t, e) {
      if (1 !== t.nodeType) return [];
      var n = getComputedStyle(t, null);
      return e ? n[e] : n
  }

  function s(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host
  }

  function l(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
          case "HTML":
          case "BODY":
              return t.ownerDocument.body;
          case "#document":
              return t.body
      }
      var e = a(t),
          n = e.overflow,
          i = e.overflowX,
          r = e.overflowY;
      return /(auto|scroll|overlay)/.test(n + r + i) ? t : l(s(t))
  }
  var u = t && !(!window.MSInputMethodContext || !document.documentMode),
      c = t && /MSIE 10/.test(navigator.userAgent);

  function h(t) {
      return 11 === t ? u : 10 === t ? c : u || c
  }

  function d(t) {
      if (!t) return document.documentElement;
      for (var e = h(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? d(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
  }

  function f(t) {
      return null !== t.parentNode ? f(t.parentNode) : t
  }

  function p(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? t : e,
          r = n ? e : t,
          o = document.createRange();
      o.setStart(i, 0), o.setEnd(r, 0);
      var a, s, l = o.commonAncestorContainer;
      if (t !== l && e !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && d(a.firstElementChild) !== a ? d(l) : l;
      var u = f(t);
      return u.host ? p(u.host, e) : p(t, f(e).host)
  }

  function g(t) {
      var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
          n = t.nodeName;
      if ("BODY" === n || "HTML" === n) {
          var i = t.ownerDocument.documentElement;
          return (t.ownerDocument.scrollingElement || i)[e]
      }
      return t[e]
  }

  function m(t, e) {
      var n = "x" === e ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
      return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
  }

  function v(t, e, n, i) {
      return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], h(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
  }

  function y(t) {
      var e = t.body,
          n = t.documentElement,
          i = h(10) && getComputedStyle(n);
      return {
          height: v("Height", e, n, i),
          width: v("Width", e, n, i)
      }
  }
  var b = function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      },
      x = function() {
          function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
          }
          return function(e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e
          }
      }(),
      w = function(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : t[e] = n, t
      },
      D = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
          }
          return t
      };

  function _(t) {
      return D({}, t, {
          right: t.left + t.width,
          bottom: t.top + t.height
      })
  }

  function C(t) {
      var e = {};
      try {
          if (h(10)) {
              e = t.getBoundingClientRect();
              var n = g(t, "top"),
                  i = g(t, "left");
              e.top += n, e.left += i, e.bottom += n, e.right += i
          } else e = t.getBoundingClientRect()
      } catch (t) {}
      var r = {
              left: e.left,
              top: e.top,
              width: e.right - e.left,
              height: e.bottom - e.top
          },
          o = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
          s = o.width || t.clientWidth || r.right - r.left,
          l = o.height || t.clientHeight || r.bottom - r.top,
          u = t.offsetWidth - s,
          c = t.offsetHeight - l;
      if (u || c) {
          var d = a(t);
          u -= m(d, "x"), c -= m(d, "y"), r.width -= u, r.height -= c
      }
      return _(r)
  }

  function k(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = h(10),
          r = "HTML" === e.nodeName,
          o = C(t),
          s = C(e),
          u = l(t),
          c = a(e),
          d = parseFloat(c.borderTopWidth, 10),
          f = parseFloat(c.borderLeftWidth, 10);
      n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
      var p = _({
          top: o.top - s.top - d,
          left: o.left - s.left - f,
          width: o.width,
          height: o.height
      });
      if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
          var m = parseFloat(c.marginTop, 10),
              v = parseFloat(c.marginLeft, 10);
          p.top -= d - m, p.bottom -= d - m, p.left -= f - v, p.right -= f - v, p.marginTop = m, p.marginLeft = v
      }
      return (i && !n ? e.contains(u) : e === u && "BODY" !== u.nodeName) && (p = function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = g(e, "top"),
              r = g(e, "left"),
              o = n ? -1 : 1;
          return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
      }(p, e)), p
  }

  function T(t) {
      if (!t || !t.parentElement || h()) return document.documentElement;
      for (var e = t.parentElement; e && "none" === a(e, "transform");) e = e.parentElement;
      return e || document.documentElement
  }

  function S(t, e, n, i) {
      var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = {
              top: 0,
              left: 0
          },
          u = r ? T(t) : p(t, e);
      if ("viewport" === i) o = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.ownerDocument.documentElement,
              i = k(t, n),
              r = Math.max(n.clientWidth, window.innerWidth || 0),
              o = Math.max(n.clientHeight, window.innerHeight || 0),
              a = e ? 0 : g(n),
              s = e ? 0 : g(n, "left");
          return _({
              top: a - i.top + i.marginTop,
              left: s - i.left + i.marginLeft,
              width: r,
              height: o
          })
      }(u, r);
      else {
          var c = void 0;
          "scrollParent" === i ? "BODY" === (c = l(s(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === i ? t.ownerDocument.documentElement : i;
          var h = k(c, u, r);
          if ("HTML" !== c.nodeName || function t(e) {
                  var n = e.nodeName;
                  return "BODY" !== n && "HTML" !== n && ("fixed" === a(e, "position") || t(s(e)))
              }(u)) o = h;
          else {
              var d = y(t.ownerDocument),
                  f = d.height,
                  m = d.width;
              o.top += h.top - h.marginTop, o.bottom = f + h.top, o.left += h.left - h.marginLeft, o.right = m + h.left
          }
      }
      var v = "number" == typeof(n = n || 0);
      return o.left += v ? n : n.left || 0, o.top += v ? n : n.top || 0, o.right -= v ? n : n.right || 0, o.bottom -= v ? n : n.bottom || 0, o
  }

  function M(t, e, n, i, r) {
      var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var a = S(n, i, o, r),
          s = {
              top: {
                  width: a.width,
                  height: e.top - a.top
              },
              right: {
                  width: a.right - e.right,
                  height: a.height
              },
              bottom: {
                  width: a.width,
                  height: a.bottom - e.bottom
              },
              left: {
                  width: e.left - a.left,
                  height: a.height
              }
          },
          l = Object.keys(s).map(function(t) {
              return D({
                  key: t
              }, s[t], {
                  area: (e = s[t], e.width * e.height)
              });
              var e
          }).sort(function(t, e) {
              return e.area - t.area
          }),
          u = l.filter(function(t) {
              var e = t.width,
                  i = t.height;
              return e >= n.clientWidth && i >= n.clientHeight
          }),
          c = u.length > 0 ? u[0].key : l[0].key,
          h = t.split("-")[1];
      return c + (h ? "-" + h : "")
  }

  function A(t, e, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return k(n, i ? T(e) : p(e, n), i)
  }

  function I(t) {
      var e = getComputedStyle(t),
          n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
          i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return {
          width: t.offsetWidth + i,
          height: t.offsetHeight + n
      }
  }

  function E(t) {
      var e = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };
      return t.replace(/left|right|bottom|top/g, function(t) {
          return e[t]
      })
  }

  function N(t, e, n) {
      n = n.split("-")[0];
      var i = I(t),
          r = {
              width: i.width,
              height: i.height
          },
          o = -1 !== ["right", "left"].indexOf(n),
          a = o ? "top" : "left",
          s = o ? "left" : "top",
          l = o ? "height" : "width",
          u = o ? "width" : "height";
      return r[a] = e[a] + e[l] / 2 - i[l] / 2, r[s] = n === s ? e[s] - i[u] : e[E(s)], r
  }

  function O(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0]
  }

  function P(t, e, n) {
      return (void 0 === n ? t : t.slice(0, function(t, e, n) {
          if (Array.prototype.findIndex) return t.findIndex(function(t) {
              return t[e] === n
          });
          var i = O(t, function(t) {
              return t[e] === n
          });
          return t.indexOf(i)
      }(t, "name", n))).forEach(function(t) {
          t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = t.function || t.fn;
          t.enabled && o(n) && (e.offsets.popper = _(e.offsets.popper), e.offsets.reference = _(e.offsets.reference), e = n(e, t))
      }), e
  }

  function F(t, e) {
      return t.some(function(t) {
          var n = t.name;
          return t.enabled && n === e
      })
  }

  function L(t) {
      for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
          var r = e[i],
              o = r ? "" + r + n : t;
          if (void 0 !== document.body.style[o]) return o
      }
      return null
  }

  function R(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window
  }

  function U(t, e, n, i) {
      n.updateBound = i, R(t).addEventListener("resize", n.updateBound, {
          passive: !0
      });
      var r = l(t);
      return function t(e, n, i, r) {
          var o = "BODY" === e.nodeName,
              a = o ? e.ownerDocument.defaultView : e;
          a.addEventListener(n, i, {
              passive: !0
          }), o || t(l(a.parentNode), n, i, r), r.push(a)
      }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
  }

  function W() {
      var t, e;
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, R(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
          t.removeEventListener("scroll", e.updateBound)
      }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
  }

  function H(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
  }

  function j(t, e) {
      Object.keys(e).forEach(function(n) {
          var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && H(e[n]) && (i = "px"), t.style[n] = e[n] + i
      })
  }

  function V(t, e, n) {
      var i = O(t, function(t) {
              return t.name === e
          }),
          r = !!i && t.some(function(t) {
              return t.name === n && t.enabled && t.order < i.order
          });
      if (!r) {
          var o = "`" + e + "`",
              a = "`" + n + "`";
          console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
      }
      return r
  }
  var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      z = B.slice(3);

  function q(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = z.indexOf(t),
          i = z.slice(n + 1).concat(z.slice(0, n));
      return e ? i.reverse() : i
  }
  var Y = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise"
  };

  function $(t, e, n, i) {
      var r = [0, 0],
          o = -1 !== ["right", "left"].indexOf(i),
          a = t.split(/(\+|\-)/).map(function(t) {
              return t.trim()
          }),
          s = a.indexOf(O(a, function(t) {
              return -1 !== t.search(/,|\s/)
          }));
      a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var l = /\s*,\s*|\s+/,
          u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
      return (u = u.map(function(t, i) {
          var r = (1 === i ? !o : o) ? "height" : "width",
              a = !1;
          return t.reduce(function(t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
          }, []).map(function(t) {
              return function(t, e, n, i) {
                  var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      o = +r[1],
                      a = r[2];
                  if (!o) return t;
                  if (0 === a.indexOf("%")) {
                      var s = void 0;
                      switch (a) {
                          case "%p":
                              s = n;
                              break;
                          case "%":
                          case "%r":
                          default:
                              s = i
                      }
                      return _(s)[e] / 100 * o
                  }
                  if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                  return o
              }(t, r, e, n)
          })
      })).forEach(function(t, e) {
          t.forEach(function(n, i) {
              H(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
          })
      }), r
  }
  var K = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function() {},
          onUpdate: function() {},
          modifiers: {
              shift: {
                  order: 100,
                  enabled: !0,
                  fn: function(t) {
                      var e = t.placement,
                          n = e.split("-")[0],
                          i = e.split("-")[1];
                      if (i) {
                          var r = t.offsets,
                              o = r.reference,
                              a = r.popper,
                              s = -1 !== ["bottom", "top"].indexOf(n),
                              l = s ? "left" : "top",
                              u = s ? "width" : "height",
                              c = {
                                  start: w({}, l, o[l]),
                                  end: w({}, l, o[l] + o[u] - a[u])
                              };
                          t.offsets.popper = D({}, a, c[i])
                      }
                      return t
                  }
              },
              offset: {
                  order: 200,
                  enabled: !0,
                  fn: function(t, e) {
                      var n = e.offset,
                          i = t.placement,
                          r = t.offsets,
                          o = r.popper,
                          a = r.reference,
                          s = i.split("-")[0],
                          l = void 0;
                      return l = H(+n) ? [+n, 0] : $(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), t.popper = o, t
                  },
                  offset: 0
              },
              preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function(t, e) {
                      var n = e.boundariesElement || d(t.instance.popper);
                      t.instance.reference === n && (n = d(n));
                      var i = L("transform"),
                          r = t.instance.popper.style,
                          o = r.top,
                          a = r.left,
                          s = r[i];
                      r.top = "", r.left = "", r[i] = "";
                      var l = S(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                      r.top = o, r.left = a, r[i] = s, e.boundaries = l;
                      var u = e.priority,
                          c = t.offsets.popper,
                          h = {
                              primary: function(t) {
                                  var n = c[t];
                                  return c[t] < l[t] && !e.escapeWithReference && (n = Math.max(c[t], l[t])), w({}, t, n)
                              },
                              secondary: function(t) {
                                  var n = "right" === t ? "left" : "top",
                                      i = c[n];
                                  return c[t] > l[t] && !e.escapeWithReference && (i = Math.min(c[n], l[t] - ("right" === t ? c.width : c.height))), w({}, n, i)
                              }
                          };
                      return u.forEach(function(t) {
                          var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                          c = D({}, c, h[e](t))
                      }), t.offsets.popper = c, t
                  },
                  priority: ["left", "right", "top", "bottom"],
                  padding: 5,
                  boundariesElement: "scrollParent"
              },
              keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function(t) {
                      var e = t.offsets,
                          n = e.popper,
                          i = e.reference,
                          r = t.placement.split("-")[0],
                          o = Math.floor,
                          a = -1 !== ["top", "bottom"].indexOf(r),
                          s = a ? "right" : "bottom",
                          l = a ? "left" : "top",
                          u = a ? "width" : "height";
                      return n[s] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (t.offsets.popper[l] = o(i[s])), t
                  }
              },
              arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function(t, e) {
                      var n;
                      if (!V(t.instance.modifiers, "arrow", "keepTogether")) return t;
                      var i = e.element;
                      if ("string" == typeof i) {
                          if (!(i = t.instance.popper.querySelector(i))) return t
                      } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                      var r = t.placement.split("-")[0],
                          o = t.offsets,
                          s = o.popper,
                          l = o.reference,
                          u = -1 !== ["left", "right"].indexOf(r),
                          c = u ? "height" : "width",
                          h = u ? "Top" : "Left",
                          d = h.toLowerCase(),
                          f = u ? "left" : "top",
                          p = u ? "bottom" : "right",
                          g = I(i)[c];
                      l[p] - g < s[d] && (t.offsets.popper[d] -= s[d] - (l[p] - g)), l[d] + g > s[p] && (t.offsets.popper[d] += l[d] + g - s[p]), t.offsets.popper = _(t.offsets.popper);
                      var m = l[d] + l[c] / 2 - g / 2,
                          v = a(t.instance.popper),
                          y = parseFloat(v["margin" + h], 10),
                          b = parseFloat(v["border" + h + "Width"], 10),
                          x = m - t.offsets.popper[d] - y - b;
                      return x = Math.max(Math.min(s[c] - g, x), 0), t.arrowElement = i, t.offsets.arrow = (w(n = {}, d, Math.round(x)), w(n, f, ""), n), t
                  },
                  element: "[x-arrow]"
              },
              flip: {
                  order: 600,
                  enabled: !0,
                  fn: function(t, e) {
                      if (F(t.instance.modifiers, "inner")) return t;
                      if (t.flipped && t.placement === t.originalPlacement) return t;
                      var n = S(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                          i = t.placement.split("-")[0],
                          r = E(i),
                          o = t.placement.split("-")[1] || "",
                          a = [];
                      switch (e.behavior) {
                          case Y.FLIP:
                              a = [i, r];
                              break;
                          case Y.CLOCKWISE:
                              a = q(i);
                              break;
                          case Y.COUNTERCLOCKWISE:
                              a = q(i, !0);
                              break;
                          default:
                              a = e.behavior
                      }
                      return a.forEach(function(s, l) {
                          if (i !== s || a.length === l + 1) return t;
                          i = t.placement.split("-")[0], r = E(i);
                          var u = t.offsets.popper,
                              c = t.offsets.reference,
                              h = Math.floor,
                              d = "left" === i && h(u.right) > h(c.left) || "right" === i && h(u.left) < h(c.right) || "top" === i && h(u.bottom) > h(c.top) || "bottom" === i && h(u.top) < h(c.bottom),
                              f = h(u.left) < h(n.left),
                              p = h(u.right) > h(n.right),
                              g = h(u.top) < h(n.top),
                              m = h(u.bottom) > h(n.bottom),
                              v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                              y = -1 !== ["top", "bottom"].indexOf(i),
                              b = !!e.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                          (d || v || b) && (t.flipped = !0, (d || v) && (i = a[l + 1]), b && (o = function(t) {
                              return "end" === t ? "start" : "start" === t ? "end" : t
                          }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = D({}, t.offsets.popper, N(t.instance.popper, t.offsets.reference, t.placement)), t = P(t.instance.modifiers, t, "flip"))
                      }), t
                  },
                  behavior: "flip",
                  padding: 5,
                  boundariesElement: "viewport"
              },
              inner: {
                  order: 700,
                  enabled: !1,
                  fn: function(t) {
                      var e = t.placement,
                          n = e.split("-")[0],
                          i = t.offsets,
                          r = i.popper,
                          o = i.reference,
                          a = -1 !== ["left", "right"].indexOf(n),
                          s = -1 === ["top", "left"].indexOf(n);
                      return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), t.placement = E(e), t.offsets.popper = _(r), t
                  }
              },
              hide: {
                  order: 800,
                  enabled: !0,
                  fn: function(t) {
                      if (!V(t.instance.modifiers, "hide", "preventOverflow")) return t;
                      var e = t.offsets.reference,
                          n = O(t.instance.modifiers, function(t) {
                              return "preventOverflow" === t.name
                          }).boundaries;
                      if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                          if (!0 === t.hide) return t;
                          t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                      } else {
                          if (!1 === t.hide) return t;
                          t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                      }
                      return t
                  }
              },
              computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function(t, e) {
                      var n = e.x,
                          i = e.y,
                          r = t.offsets.popper,
                          o = O(t.instance.modifiers, function(t) {
                              return "applyStyle" === t.name
                          }).gpuAcceleration;
                      void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                      var a = void 0 !== o ? o : e.gpuAcceleration,
                          s = d(t.instance.popper),
                          l = C(s),
                          u = {
                              position: r.position
                          },
                          c = {
                              left: Math.floor(r.left),
                              top: Math.round(r.top),
                              bottom: Math.round(r.bottom),
                              right: Math.floor(r.right)
                          },
                          h = "bottom" === n ? "top" : "bottom",
                          f = "right" === i ? "left" : "right",
                          p = L("transform"),
                          g = void 0,
                          m = void 0;
                      if (m = "bottom" === h ? "HTML" === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom : c.top, g = "right" === f ? "HTML" === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right : c.left, a && p) u[p] = "translate3d(" + g + "px, " + m + "px, 0)", u[h] = 0, u[f] = 0, u.willChange = "transform";
                      else {
                          var v = "bottom" === h ? -1 : 1,
                              y = "right" === f ? -1 : 1;
                          u[h] = m * v, u[f] = g * y, u.willChange = h + ", " + f
                      }
                      var b = {
                          "x-placement": t.placement
                      };
                      return t.attributes = D({}, b, t.attributes), t.styles = D({}, u, t.styles), t.arrowStyles = D({}, t.offsets.arrow, t.arrowStyles), t
                  },
                  gpuAcceleration: !0,
                  x: "bottom",
                  y: "right"
              },
              applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function(t) {
                      var e, n;
                      return j(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {
                          !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                      }), t.arrowElement && Object.keys(t.arrowStyles).length && j(t.arrowElement, t.arrowStyles), t
                  },
                  onLoad: function(t, e, n, i, r) {
                      var o = A(r, e, t, n.positionFixed),
                          a = M(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                      return e.setAttribute("x-placement", a), j(e, {
                          position: n.positionFixed ? "fixed" : "absolute"
                      }), n
                  },
                  gpuAcceleration: void 0
              }
          }
      },
      Q = function() {
          function t(e, n) {
              var i = this,
                  a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              b(this, t), this.scheduleUpdate = function() {
                  return requestAnimationFrame(i.update)
              }, this.update = r(this.update.bind(this)), this.options = D({}, t.Defaults, a), this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
              }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(D({}, t.Defaults.modifiers, a.modifiers)).forEach(function(e) {
                  i.options.modifiers[e] = D({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {})
              }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                  return D({
                      name: t
                  }, i.options.modifiers[t])
              }).sort(function(t, e) {
                  return t.order - e.order
              }), this.modifiers.forEach(function(t) {
                  t.enabled && o(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
              }), this.update();
              var s = this.options.eventsEnabled;
              s && this.enableEventListeners(), this.state.eventsEnabled = s
          }
          return x(t, [{
              key: "update",
              value: function() {
                  return function() {
                      if (!this.state.isDestroyed) {
                          var t = {
                              instance: this,
                              styles: {},
                              arrowStyles: {},
                              attributes: {},
                              flipped: !1,
                              offsets: {}
                          };
                          t.offsets.reference = A(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = M(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = N(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = P(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                      }
                  }.call(this)
              }
          }, {
              key: "destroy",
              value: function() {
                  return function() {
                      return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[L("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                  }.call(this)
              }
          }, {
              key: "enableEventListeners",
              value: function() {
                  return function() {
                      this.state.eventsEnabled || (this.state = U(this.reference, this.options, this.state, this.scheduleUpdate))
                  }.call(this)
              }
          }, {
              key: "disableEventListeners",
              value: function() {
                  return W.call(this)
              }
          }]), t
      }();
  return Q.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Q.placements = B, Q.Defaults = K, Q
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
  "use strict";

  function i(t, e) {
      for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
  }

  function r(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t
  }

  function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : t[e] = n, t
  }

  function a(t) {
      for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
              o(t, e, n[e])
          })
      }
      return t
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
  var s = function(t) {
          var e = "transitionend";

          function n(e) {
              var n = this,
                  r = !1;
              return t(this).one(i.TRANSITION_END, function() {
                  r = !0
              }), setTimeout(function() {
                  r || i.triggerTransitionEnd(n)
              }, e), this
          }
          var i = {
              TRANSITION_END: "bsTransitionEnd",
              getUID: function(t) {
                  do {
                      t += ~~(1e6 * Math.random())
                  } while (document.getElementById(t));
                  return t
              },
              getSelectorFromElement: function(t) {
                  var e = t.getAttribute("data-target");
                  e && "#" !== e || (e = t.getAttribute("href") || "");
                  try {
                      return document.querySelector(e) ? e : null
                  } catch (t) {
                      return null
                  }
              },
              getTransitionDurationFromElement: function(e) {
                  if (!e) return 0;
                  var n = t(e).css("transition-duration");
                  return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
              },
              reflow: function(t) {
                  return t.offsetHeight
              },
              triggerTransitionEnd: function(n) {
                  t(n).trigger(e)
              },
              supportsTransitionEnd: function() {
                  return Boolean(e)
              },
              isElement: function(t) {
                  return (t[0] || t).nodeType
              },
              typeCheckConfig: function(t, e, n) {
                  for (var r in n)
                      if (Object.prototype.hasOwnProperty.call(n, r)) {
                          var o = n[r],
                              a = e[r],
                              s = a && i.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".')
                      }
                  var l
              }
          };
          return t.fn.emulateTransitionEnd = n, t.event.special[i.TRANSITION_END] = {
              bindType: e,
              delegateType: e,
              handle: function(e) {
                  if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
              }
          }, i
      }(e),
      l = function(t) {
          var e = t.fn.alert,
              n = {
                  CLOSE: "close.bs.alert",
                  CLOSED: "closed.bs.alert",
                  CLICK_DATA_API: "click.bs.alert.data-api"
              },
              i = "alert",
              o = "fade",
              a = "show",
              l = function() {
                  function e(t) {
                      this._element = t
                  }
                  var l = e.prototype;
                  return l.close = function(t) {
                      var e = this._element;
                      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                  }, l.dispose = function() {
                      t.removeData(this._element, "bs.alert"), this._element = null
                  }, l._getRootElement = function(e) {
                      var n = s.getSelectorFromElement(e),
                          r = !1;
                      return n && (r = document.querySelector(n)), r || (r = t(e).closest("." + i)[0]), r
                  }, l._triggerCloseEvent = function(e) {
                      var i = t.Event(n.CLOSE);
                      return t(e).trigger(i), i
                  }, l._removeElement = function(e) {
                      var n = this;
                      if (t(e).removeClass(a), t(e).hasClass(o)) {
                          var i = s.getTransitionDurationFromElement(e);
                          t(e).one(s.TRANSITION_END, function(t) {
                              return n._destroyElement(e, t)
                          }).emulateTransitionEnd(i)
                      } else this._destroyElement(e)
                  }, l._destroyElement = function(e) {
                      t(e).detach().trigger(n.CLOSED).remove()
                  }, e._jQueryInterface = function(n) {
                      return this.each(function() {
                          var i = t(this),
                              r = i.data("bs.alert");
                          r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                      })
                  }, e._handleDismiss = function(t) {
                      return function(e) {
                          e && e.preventDefault(), t.close(this)
                      }
                  }, r(e, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }]), e
              }();
          return t(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), t.fn.alert = l._jQueryInterface, t.fn.alert.Constructor = l, t.fn.alert.noConflict = function() {
              return t.fn.alert = e, l._jQueryInterface
          }, l
      }(e),
      u = function(t) {
          var e = "button",
              n = t.fn[e],
              i = "active",
              o = "btn",
              a = "focus",
              s = '[data-toggle^="button"]',
              l = '[data-toggle="buttons"]',
              u = "input",
              c = ".active",
              h = ".btn",
              d = {
                  CLICK_DATA_API: "click.bs.button.data-api",
                  FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
              },
              f = function() {
                  function e(t) {
                      this._element = t
                  }
                  var n = e.prototype;
                  return n.toggle = function() {
                      var e = !0,
                          n = !0,
                          r = t(this._element).closest(l)[0];
                      if (r) {
                          var o = this._element.querySelector(u);
                          if (o) {
                              if ("radio" === o.type)
                                  if (o.checked && this._element.classList.contains(i)) e = !1;
                                  else {
                                      var a = r.querySelector(c);
                                      a && t(a).removeClass(i)
                                  }
                              if (e) {
                                  if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                  o.checked = !this._element.classList.contains(i), t(o).trigger("change")
                              }
                              o.focus(), n = !1
                          }
                      }
                      n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)), e && t(this._element).toggleClass(i)
                  }, n.dispose = function() {
                      t.removeData(this._element, "bs.button"), this._element = null
                  }, e._jQueryInterface = function(n) {
                      return this.each(function() {
                          var i = t(this).data("bs.button");
                          i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                      })
                  }, r(e, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }]), e
              }();
          return t(document).on(d.CLICK_DATA_API, s, function(e) {
              e.preventDefault();
              var n = e.target;
              t(n).hasClass(o) || (n = t(n).closest(h)), f._jQueryInterface.call(t(n), "toggle")
          }).on(d.FOCUS_BLUR_DATA_API, s, function(e) {
              var n = t(e.target).closest(h)[0];
              t(n).toggleClass(a, /^focus(in)?$/.test(e.type))
          }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
              return t.fn[e] = n, f._jQueryInterface
          }, f
      }(e),
      c = function(t) {
          var e = "carousel",
              n = "bs.carousel",
              i = "." + n,
              o = t.fn[e],
              l = {
                  interval: 5e3,
                  keyboard: !0,
                  slide: !1,
                  pause: "hover",
                  wrap: !0
              },
              u = {
                  interval: "(number|boolean)",
                  keyboard: "boolean",
                  slide: "(boolean|string)",
                  pause: "(string|boolean)",
                  wrap: "boolean"
              },
              c = "next",
              h = "prev",
              d = "left",
              f = "right",
              p = {
                  SLIDE: "slide" + i,
                  SLID: "slid" + i,
                  KEYDOWN: "keydown" + i,
                  MOUSEENTER: "mouseenter" + i,
                  MOUSELEAVE: "mouseleave" + i,
                  TOUCHEND: "touchend" + i,
                  LOAD_DATA_API: "load.bs.carousel.data-api",
                  CLICK_DATA_API: "click.bs.carousel.data-api"
              },
              g = "carousel",
              m = "active",
              v = "slide",
              y = "carousel-item-right",
              b = "carousel-item-left",
              x = "carousel-item-next",
              w = "carousel-item-prev",
              D = {
                  ACTIVE: ".active",
                  ACTIVE_ITEM: ".active.carousel-item",
                  ITEM: ".carousel-item",
                  NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                  INDICATORS: ".carousel-indicators",
                  DATA_SLIDE: "[data-slide], [data-slide-to]",
                  DATA_RIDE: '[data-ride="carousel"]'
              },
              _ = function() {
                  function o(e, n) {
                      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = this._element.querySelector(D.INDICATORS), this._addEventListeners()
                  }
                  var _ = o.prototype;
                  return _.next = function() {
                      this._isSliding || this._slide(c)
                  }, _.nextWhenVisible = function() {
                      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                  }, _.prev = function() {
                      this._isSliding || this._slide(h)
                  }, _.pause = function(t) {
                      t || (this._isPaused = !0), this._element.querySelector(D.NEXT_PREV) && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                  }, _.cycle = function(t) {
                      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                  }, _.to = function(e) {
                      var n = this;
                      this._activeElement = this._element.querySelector(D.ACTIVE_ITEM);
                      var i = this._getItemIndex(this._activeElement);
                      if (!(e > this._items.length - 1 || e < 0))
                          if (this._isSliding) t(this._element).one(p.SLID, function() {
                              return n.to(e)
                          });
                          else {
                              if (i === e) return this.pause(), void this.cycle();
                              var r = e > i ? c : h;
                              this._slide(r, this._items[e])
                          }
                  }, _.dispose = function() {
                      t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                  }, _._getConfig = function(t) {
                      return t = a({}, l, t), s.typeCheckConfig(e, t, u), t
                  }, _._addEventListeners = function() {
                      var e = this;
                      this._config.keyboard && t(this._element).on(p.KEYDOWN, function(t) {
                          return e._keydown(t)
                      }), "hover" === this._config.pause && (t(this._element).on(p.MOUSEENTER, function(t) {
                          return e.pause(t)
                      }).on(p.MOUSELEAVE, function(t) {
                          return e.cycle(t)
                      }), "ontouchstart" in document.documentElement && t(this._element).on(p.TOUCHEND, function() {
                          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                              return e.cycle(t)
                          }, 500 + e._config.interval)
                      }))
                  }, _._keydown = function(t) {
                      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                          case 37:
                              t.preventDefault(), this.prev();
                              break;
                          case 39:
                              t.preventDefault(), this.next()
                      }
                  }, _._getItemIndex = function(t) {
                      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(D.ITEM)) : [], this._items.indexOf(t)
                  }, _._getItemByDirection = function(t, e) {
                      var n = t === c,
                          i = t === h,
                          r = this._getItemIndex(e),
                          o = this._items.length - 1;
                      if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                      var a = (r + (t === h ? -1 : 1)) % this._items.length;
                      return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                  }, _._triggerSlideEvent = function(e, n) {
                      var i = this._getItemIndex(e),
                          r = this._getItemIndex(this._element.querySelector(D.ACTIVE_ITEM)),
                          o = t.Event(p.SLIDE, {
                              relatedTarget: e,
                              direction: n,
                              from: r,
                              to: i
                          });
                      return t(this._element).trigger(o), o
                  }, _._setActiveIndicatorElement = function(e) {
                      if (this._indicatorsElement) {
                          var n = [].slice.call(this._indicatorsElement.querySelectorAll(D.ACTIVE));
                          t(n).removeClass(m);
                          var i = this._indicatorsElement.children[this._getItemIndex(e)];
                          i && t(i).addClass(m)
                      }
                  }, _._slide = function(e, n) {
                      var i, r, o, a = this,
                          l = this._element.querySelector(D.ACTIVE_ITEM),
                          u = this._getItemIndex(l),
                          h = n || l && this._getItemByDirection(e, l),
                          g = this._getItemIndex(h),
                          _ = Boolean(this._interval);
                      if (e === c ? (i = b, r = x, o = d) : (i = y, r = w, o = f), h && t(h).hasClass(m)) this._isSliding = !1;
                      else if (!this._triggerSlideEvent(h, o).isDefaultPrevented() && l && h) {
                          this._isSliding = !0, _ && this.pause(), this._setActiveIndicatorElement(h);
                          var C = t.Event(p.SLID, {
                              relatedTarget: h,
                              direction: o,
                              from: u,
                              to: g
                          });
                          if (t(this._element).hasClass(v)) {
                              t(h).addClass(r), s.reflow(h), t(l).addClass(i), t(h).addClass(i);
                              var k = s.getTransitionDurationFromElement(l);
                              t(l).one(s.TRANSITION_END, function() {
                                  t(h).removeClass(i + " " + r).addClass(m), t(l).removeClass(m + " " + r + " " + i), a._isSliding = !1, setTimeout(function() {
                                      return t(a._element).trigger(C)
                                  }, 0)
                              }).emulateTransitionEnd(k)
                          } else t(l).removeClass(m), t(h).addClass(m), this._isSliding = !1, t(this._element).trigger(C);
                          _ && this.cycle()
                      }
                  }, o._jQueryInterface = function(e) {
                      return this.each(function() {
                          var i = t(this).data(n),
                              r = a({}, l, t(this).data());
                          "object" == typeof e && (r = a({}, r, e));
                          var s = "string" == typeof e ? e : r.slide;
                          if (i || (i = new o(this, r), t(this).data(n, i)), "number" == typeof e) i.to(e);
                          else if ("string" == typeof s) {
                              if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                              i[s]()
                          } else r.interval && (i.pause(), i.cycle())
                      })
                  }, o._dataApiClickHandler = function(e) {
                      var i = s.getSelectorFromElement(this);
                      if (i) {
                          var r = t(i)[0];
                          if (r && t(r).hasClass(g)) {
                              var l = a({}, t(r).data(), t(this).data()),
                                  u = this.getAttribute("data-slide-to");
                              u && (l.interval = !1), o._jQueryInterface.call(t(r), l), u && t(r).data(n).to(u), e.preventDefault()
                          }
                      }
                  }, r(o, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return l
                      }
                  }]), o
              }();
          return t(document).on(p.CLICK_DATA_API, D.DATA_SLIDE, _._dataApiClickHandler), t(window).on(p.LOAD_DATA_API, function() {
              for (var e = [].slice.call(document.querySelectorAll(D.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
                  var r = t(e[n]);
                  _._jQueryInterface.call(r, r.data())
              }
          }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
              return t.fn[e] = o, _._jQueryInterface
          }, _
      }(e),
      h = function(t) {
          var e = "collapse",
              n = "bs.collapse",
              i = t.fn[e],
              o = {
                  toggle: !0,
                  parent: ""
              },
              l = {
                  toggle: "boolean",
                  parent: "(string|element)"
              },
              u = {
                  SHOW: "show.bs.collapse",
                  SHOWN: "shown.bs.collapse",
                  HIDE: "hide.bs.collapse",
                  HIDDEN: "hidden.bs.collapse",
                  CLICK_DATA_API: "click.bs.collapse.data-api"
              },
              c = "show",
              h = "collapse",
              d = "collapsing",
              f = "collapsed",
              p = "width",
              g = "height",
              m = {
                  ACTIVES: ".show, .collapsing",
                  DATA_TOGGLE: '[data-toggle="collapse"]'
              },
              v = function() {
                  function i(e, n) {
                      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                      for (var i = [].slice.call(document.querySelectorAll(m.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                          var a = i[r],
                              l = s.getSelectorFromElement(a),
                              u = [].slice.call(document.querySelectorAll(l)).filter(function(t) {
                                  return t === e
                              });
                          null !== l && u.length > 0 && (this._selector = l, this._triggerArray.push(a))
                      }
                      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                  }
                  var v = i.prototype;
                  return v.toggle = function() {
                      t(this._element).hasClass(c) ? this.hide() : this.show()
                  }, v.show = function() {
                      var e, r, o = this;
                      if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(m.ACTIVES)).filter(function(t) {
                              return t.getAttribute("data-parent") === o._config.parent
                          })).length && (e = null), !(e && (r = t(e).not(this._selector).data(n)) && r._isTransitioning))) {
                          var a = t.Event(u.SHOW);
                          if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
                              e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), r || t(e).data(n, null));
                              var l = this._getDimension();
                              t(this._element).removeClass(h).addClass(d), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                              var p = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                  g = s.getTransitionDurationFromElement(this._element);
                              t(this._element).one(s.TRANSITION_END, function() {
                                  t(o._element).removeClass(d).addClass(h).addClass(c), o._element.style[l] = "", o.setTransitioning(!1), t(o._element).trigger(u.SHOWN)
                              }).emulateTransitionEnd(g), this._element.style[l] = this._element[p] + "px"
                          }
                      }
                  }, v.hide = function() {
                      var e = this;
                      if (!this._isTransitioning && t(this._element).hasClass(c)) {
                          var n = t.Event(u.HIDE);
                          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                              var i = this._getDimension();
                              this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), t(this._element).addClass(d).removeClass(h).removeClass(c);
                              var r = this._triggerArray.length;
                              if (r > 0)
                                  for (var o = 0; o < r; o++) {
                                      var a = this._triggerArray[o],
                                          l = s.getSelectorFromElement(a);
                                      if (null !== l) t([].slice.call(document.querySelectorAll(l))).hasClass(c) || t(a).addClass(f).attr("aria-expanded", !1)
                                  }
                              this.setTransitioning(!0);
                              this._element.style[i] = "";
                              var p = s.getTransitionDurationFromElement(this._element);
                              t(this._element).one(s.TRANSITION_END, function() {
                                  e.setTransitioning(!1), t(e._element).removeClass(d).addClass(h).trigger(u.HIDDEN)
                              }).emulateTransitionEnd(p)
                          }
                      }
                  }, v.setTransitioning = function(t) {
                      this._isTransitioning = t
                  }, v.dispose = function() {
                      t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                  }, v._getConfig = function(t) {
                      return (t = a({}, o, t)).toggle = Boolean(t.toggle), s.typeCheckConfig(e, t, l), t
                  }, v._getDimension = function() {
                      return t(this._element).hasClass(p) ? p : g
                  }, v._getParent = function() {
                      var e = this,
                          n = null;
                      s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                      var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                          o = [].slice.call(n.querySelectorAll(r));
                      return t(o).each(function(t, n) {
                          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                      }), n
                  }, v._addAriaAndCollapsedClass = function(e, n) {
                      if (e) {
                          var i = t(e).hasClass(c);
                          n.length && t(n).toggleClass(f, !i).attr("aria-expanded", i)
                      }
                  }, i._getTargetFromElement = function(t) {
                      var e = s.getSelectorFromElement(t);
                      return e ? document.querySelector(e) : null
                  }, i._jQueryInterface = function(e) {
                      return this.each(function() {
                          var r = t(this),
                              s = r.data(n),
                              l = a({}, o, r.data(), "object" == typeof e && e ? e : {});
                          if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1), s || (s = new i(this, l), r.data(n, s)), "string" == typeof e) {
                              if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                              s[e]()
                          }
                      })
                  }, r(i, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return o
                      }
                  }]), i
              }();
          return t(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
              "A" === e.currentTarget.tagName && e.preventDefault();
              var i = t(this),
                  r = s.getSelectorFromElement(this),
                  o = [].slice.call(document.querySelectorAll(r));
              t(o).each(function() {
                  var e = t(this),
                      r = e.data(n) ? "toggle" : i.data();
                  v._jQueryInterface.call(e, r)
              })
          }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
              return t.fn[e] = i, v._jQueryInterface
          }, v
      }(e),
      d = function(t) {
          var e = "dropdown",
              i = "bs.dropdown",
              o = "." + i,
              l = t.fn[e],
              u = new RegExp("38|40|27"),
              c = {
                  HIDE: "hide" + o,
                  HIDDEN: "hidden" + o,
                  SHOW: "show" + o,
                  SHOWN: "shown" + o,
                  CLICK: "click" + o,
                  CLICK_DATA_API: "click.bs.dropdown.data-api",
                  KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                  KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
              },
              h = "disabled",
              d = "show",
              f = "dropup",
              p = "dropright",
              g = "dropleft",
              m = "dropdown-menu-right",
              v = "position-static",
              y = '[data-toggle="dropdown"]',
              b = ".dropdown form",
              x = ".dropdown-menu",
              w = ".navbar-nav",
              D = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
              _ = "top-start",
              C = "top-end",
              k = "bottom-start",
              T = "bottom-end",
              S = "right-start",
              M = "left-start",
              A = {
                  offset: 0,
                  flip: !0,
                  boundary: "scrollParent",
                  reference: "toggle",
                  display: "dynamic"
              },
              I = {
                  offset: "(number|string|function)",
                  flip: "boolean",
                  boundary: "(string|element)",
                  reference: "(string|element)",
                  display: "string"
              },
              E = function() {
                  function l(t, e) {
                      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                  }
                  var b = l.prototype;
                  return b.toggle = function() {
                      if (!this._element.disabled && !t(this._element).hasClass(h)) {
                          var e = l._getParentFromElement(this._element),
                              i = t(this._menu).hasClass(d);
                          if (l._clearMenus(), !i) {
                              var r = {
                                      relatedTarget: this._element
                                  },
                                  o = t.Event(c.SHOW, r);
                              if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                  if (!this._inNavbar) {
                                      if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                      var a = this._element;
                                      "parent" === this._config.reference ? a = e : s.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(a, this._menu, this._getPopperConfig())
                                  }
                                  "ontouchstart" in document.documentElement && 0 === t(e).closest(w).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(d), t(e).toggleClass(d).trigger(t.Event(c.SHOWN, r))
                              }
                          }
                      }
                  }, b.dispose = function() {
                      t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                  }, b.update = function() {
                      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                  }, b._addEventListeners = function() {
                      var e = this;
                      t(this._element).on(c.CLICK, function(t) {
                          t.preventDefault(), t.stopPropagation(), e.toggle()
                      })
                  }, b._getConfig = function(n) {
                      return n = a({}, this.constructor.Default, t(this._element).data(), n), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
                  }, b._getMenuElement = function() {
                      if (!this._menu) {
                          var t = l._getParentFromElement(this._element);
                          t && (this._menu = t.querySelector(x))
                      }
                      return this._menu
                  }, b._getPlacement = function() {
                      var e = t(this._element.parentNode),
                          n = k;
                      return e.hasClass(f) ? (n = _, t(this._menu).hasClass(m) && (n = C)) : e.hasClass(p) ? n = S : e.hasClass(g) ? n = M : t(this._menu).hasClass(m) && (n = T), n
                  }, b._detectNavbar = function() {
                      return t(this._element).closest(".navbar").length > 0
                  }, b._getPopperConfig = function() {
                      var t = this,
                          e = {};
                      "function" == typeof this._config.offset ? e.fn = function(e) {
                          return e.offsets = a({}, e.offsets, t._config.offset(e.offsets) || {}), e
                      } : e.offset = this._config.offset;
                      var n = {
                          placement: this._getPlacement(),
                          modifiers: {
                              offset: e,
                              flip: {
                                  enabled: this._config.flip
                              },
                              preventOverflow: {
                                  boundariesElement: this._config.boundary
                              }
                          }
                      };
                      return "static" === this._config.display && (n.modifiers.applyStyle = {
                          enabled: !1
                      }), n
                  }, l._jQueryInterface = function(e) {
                      return this.each(function() {
                          var n = t(this).data(i);
                          if (n || (n = new l(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      })
                  }, l._clearMenus = function(e) {
                      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                          for (var n = [].slice.call(document.querySelectorAll(y)), r = 0, o = n.length; r < o; r++) {
                              var a = l._getParentFromElement(n[r]),
                                  s = t(n[r]).data(i),
                                  u = {
                                      relatedTarget: n[r]
                                  };
                              if (e && "click" === e.type && (u.clickEvent = e), s) {
                                  var h = s._menu;
                                  if (t(a).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(a, e.target))) {
                                      var f = t.Event(c.HIDE, u);
                                      t(a).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(h).removeClass(d), t(a).removeClass(d).trigger(t.Event(c.HIDDEN, u)))
                                  }
                              }
                          }
                  }, l._getParentFromElement = function(t) {
                      var e, n = s.getSelectorFromElement(t);
                      return n && (e = document.querySelector(n)), e || t.parentNode
                  }, l._dataApiKeydownHandler = function(e) {
                      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(x).length)) : u.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(h))) {
                          var n = l._getParentFromElement(this),
                              i = t(n).hasClass(d);
                          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                              var r = [].slice.call(n.querySelectorAll(D));
                              if (0 !== r.length) {
                                  var o = r.indexOf(e.target);
                                  38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                              }
                          } else {
                              if (27 === e.which) {
                                  var a = n.querySelector(y);
                                  t(a).trigger("focus")
                              }
                              t(this).trigger("click")
                          }
                      }
                  }, r(l, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return A
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return I
                      }
                  }]), l
              }();
          return t(document).on(c.KEYDOWN_DATA_API, y, E._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, x, E._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, E._clearMenus).on(c.CLICK_DATA_API, y, function(e) {
              e.preventDefault(), e.stopPropagation(), E._jQueryInterface.call(t(this), "toggle")
          }).on(c.CLICK_DATA_API, b, function(t) {
              t.stopPropagation()
          }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
              return t.fn[e] = l, E._jQueryInterface
          }, E
      }(e),
      f = function(t) {
          var e = "modal",
              n = ".bs.modal",
              i = t.fn.modal,
              o = {
                  backdrop: !0,
                  keyboard: !0,
                  focus: !0,
                  show: !0
              },
              l = {
                  backdrop: "(boolean|string)",
                  keyboard: "boolean",
                  focus: "boolean",
                  show: "boolean"
              },
              u = {
                  HIDE: "hide.bs.modal",
                  HIDDEN: "hidden.bs.modal",
                  SHOW: "show.bs.modal",
                  SHOWN: "shown.bs.modal",
                  FOCUSIN: "focusin.bs.modal",
                  RESIZE: "resize.bs.modal",
                  CLICK_DISMISS: "click.dismiss.bs.modal",
                  KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                  MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                  MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                  CLICK_DATA_API: "click.bs.modal.data-api"
              },
              c = "modal-scrollbar-measure",
              h = "modal-backdrop",
              d = "modal-open",
              f = "fade",
              p = "show",
              g = {
                  DIALOG: ".modal-dialog",
                  DATA_TOGGLE: '[data-toggle="modal"]',
                  DATA_DISMISS: '[data-dismiss="modal"]',
                  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                  STICKY_CONTENT: ".sticky-top"
              },
              m = function() {
                  function i(t, e) {
                      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(g.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                  }
                  var m = i.prototype;
                  return m.toggle = function(t) {
                      return this._isShown ? this.hide() : this.show(t)
                  }, m.show = function(e) {
                      var n = this;
                      if (!this._isTransitioning && !this._isShown) {
                          t(this._element).hasClass(f) && (this._isTransitioning = !0);
                          var i = t.Event(u.SHOW, {
                              relatedTarget: e
                          });
                          t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, g.DATA_DISMISS, function(t) {
                              return n.hide(t)
                          }), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                              t(n._element).one(u.MOUSEUP_DISMISS, function(e) {
                                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                              })
                          }), this._showBackdrop(function() {
                              return n._showElement(e)
                          }))
                      }
                  }, m.hide = function(e) {
                      var n = this;
                      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                          var i = t.Event(u.HIDE);
                          if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                              this._isShown = !1;
                              var r = t(this._element).hasClass(f);
                              if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(p), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), r) {
                                  var o = s.getTransitionDurationFromElement(this._element);
                                  t(this._element).one(s.TRANSITION_END, function(t) {
                                      return n._hideModal(t)
                                  }).emulateTransitionEnd(o)
                              } else this._hideModal()
                          }
                      }
                  }, m.dispose = function() {
                      t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                  }, m.handleUpdate = function() {
                      this._adjustDialog()
                  }, m._getConfig = function(t) {
                      return t = a({}, o, t), s.typeCheckConfig(e, t, l), t
                  }, m._showElement = function(e) {
                      var n = this,
                          i = t(this._element).hasClass(f);
                      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), t(this._element).addClass(p), this._config.focus && this._enforceFocus();
                      var r = t.Event(u.SHOWN, {
                              relatedTarget: e
                          }),
                          o = function() {
                              n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                          };
                      if (i) {
                          var a = s.getTransitionDurationFromElement(this._element);
                          t(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                      } else o()
                  }, m._enforceFocus = function() {
                      var e = this;
                      t(document).off(u.FOCUSIN).on(u.FOCUSIN, function(n) {
                          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                      })
                  }, m._setEscapeEvent = function() {
                      var e = this;
                      this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function(t) {
                          27 === t.which && (t.preventDefault(), e.hide())
                      }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
                  }, m._setResizeEvent = function() {
                      var e = this;
                      this._isShown ? t(window).on(u.RESIZE, function(t) {
                          return e.handleUpdate(t)
                      }) : t(window).off(u.RESIZE)
                  }, m._hideModal = function() {
                      var e = this;
                      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                          t(document.body).removeClass(d), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(u.HIDDEN)
                      })
                  }, m._removeBackdrop = function() {
                      this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                  }, m._showBackdrop = function(e) {
                      var n = this,
                          i = t(this._element).hasClass(f) ? f : "";
                      if (this._isShown && this._config.backdrop) {
                          if (this._backdrop = document.createElement("div"), this._backdrop.className = h, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function(t) {
                                  n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                              }), i && s.reflow(this._backdrop), t(this._backdrop).addClass(p), !e) return;
                          if (!i) return void e();
                          var r = s.getTransitionDurationFromElement(this._backdrop);
                          t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(r)
                      } else if (!this._isShown && this._backdrop) {
                          t(this._backdrop).removeClass(p);
                          var o = function() {
                              n._removeBackdrop(), e && e()
                          };
                          if (t(this._element).hasClass(f)) {
                              var a = s.getTransitionDurationFromElement(this._backdrop);
                              t(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                          } else o()
                      } else e && e()
                  }, m._adjustDialog = function() {
                      var t = this._element.scrollHeight > document.documentElement.clientHeight;
                      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                  }, m._resetAdjustments = function() {
                      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                  }, m._checkScrollbar = function() {
                      var t = document.body.getBoundingClientRect();
                      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                  }, m._setScrollbar = function() {
                      var e = this;
                      if (this._isBodyOverflowing) {
                          var n = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT)),
                              i = [].slice.call(document.querySelectorAll(g.STICKY_CONTENT));
                          t(n).each(function(n, i) {
                              var r = i.style.paddingRight,
                                  o = t(i).css("padding-right");
                              t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                          }), t(i).each(function(n, i) {
                              var r = i.style.marginRight,
                                  o = t(i).css("margin-right");
                              t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                          });
                          var r = document.body.style.paddingRight,
                              o = t(document.body).css("padding-right");
                          t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                      }
                  }, m._resetScrollbar = function() {
                      var e = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT));
                      t(e).each(function(e, n) {
                          var i = t(n).data("padding-right");
                          t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                      });
                      var n = [].slice.call(document.querySelectorAll("" + g.STICKY_CONTENT));
                      t(n).each(function(e, n) {
                          var i = t(n).data("margin-right");
                          void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                      });
                      var i = t(document.body).data("padding-right");
                      t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                  }, m._getScrollbarWidth = function() {
                      var t = document.createElement("div");
                      t.className = c, document.body.appendChild(t);
                      var e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e
                  }, i._jQueryInterface = function(e, n) {
                      return this.each(function() {
                          var r = t(this).data("bs.modal"),
                              s = a({}, o, t(this).data(), "object" == typeof e && e ? e : {});
                          if (r || (r = new i(this, s), t(this).data("bs.modal", r)), "string" == typeof e) {
                              if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                              r[e](n)
                          } else s.show && r.show(n)
                      })
                  }, r(i, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return o
                      }
                  }]), i
              }();
          return t(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
              var n, i = this,
                  r = s.getSelectorFromElement(this);
              r && (n = document.querySelector(r));
              var o = t(n).data("bs.modal") ? "toggle" : a({}, t(n).data(), t(this).data());
              "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
              var l = t(n).one(u.SHOW, function(e) {
                  e.isDefaultPrevented() || l.one(u.HIDDEN, function() {
                      t(i).is(":visible") && i.focus()
                  })
              });
              m._jQueryInterface.call(t(n), o, this)
          }), t.fn.modal = m._jQueryInterface, t.fn.modal.Constructor = m, t.fn.modal.noConflict = function() {
              return t.fn.modal = i, m._jQueryInterface
          }, m
      }(e),
      p = function(t) {
          var e = "tooltip",
              i = ".bs.tooltip",
              o = t.fn[e],
              l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
              u = {
                  animation: "boolean",
                  template: "string",
                  title: "(string|element|function)",
                  trigger: "string",
                  delay: "(number|object)",
                  html: "boolean",
                  selector: "(string|boolean)",
                  placement: "(string|function)",
                  offset: "(number|string)",
                  container: "(string|element|boolean)",
                  fallbackPlacement: "(string|array)",
                  boundary: "(string|element)"
              },
              c = {
                  AUTO: "auto",
                  TOP: "top",
                  RIGHT: "right",
                  BOTTOM: "bottom",
                  LEFT: "left"
              },
              h = {
                  animation: !0,
                  template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                  trigger: "hover focus",
                  title: "",
                  delay: 0,
                  html: !1,
                  selector: !1,
                  placement: "top",
                  offset: 0,
                  container: !1,
                  fallbackPlacement: "flip",
                  boundary: "scrollParent"
              },
              d = "show",
              f = "out",
              p = {
                  HIDE: "hide" + i,
                  HIDDEN: "hidden" + i,
                  SHOW: "show" + i,
                  SHOWN: "shown" + i,
                  INSERTED: "inserted" + i,
                  CLICK: "click" + i,
                  FOCUSIN: "focusin" + i,
                  FOCUSOUT: "focusout" + i,
                  MOUSEENTER: "mouseenter" + i,
                  MOUSELEAVE: "mouseleave" + i
              },
              g = "fade",
              m = "show",
              v = ".tooltip-inner",
              y = ".arrow",
              b = "hover",
              x = "focus",
              w = "click",
              D = "manual",
              _ = function() {
                  function o(t, e) {
                      if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                  }
                  var _ = o.prototype;
                  return _.enable = function() {
                      this._isEnabled = !0
                  }, _.disable = function() {
                      this._isEnabled = !1
                  }, _.toggleEnabled = function() {
                      this._isEnabled = !this._isEnabled
                  }, _.toggle = function(e) {
                      if (this._isEnabled)
                          if (e) {
                              var n = this.constructor.DATA_KEY,
                                  i = t(e.currentTarget).data(n);
                              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                          } else {
                              if (t(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                              this._enter(null, this)
                          }
                  }, _.dispose = function() {
                      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                  }, _.show = function() {
                      var e = this;
                      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                      var i = t.Event(this.constructor.Event.SHOW);
                      if (this.isWithContent() && this._isEnabled) {
                          t(this.element).trigger(i);
                          var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                          if (i.isDefaultPrevented() || !r) return;
                          var o = this.getTipElement(),
                              a = s.getUID(this.constructor.NAME);
                          o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(o).addClass(g);
                          var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                              u = this._getAttachment(l);
                          this.addAttachmentClass(u);
                          var c = !1 === this.config.container ? document.body : t(document).find(this.config.container);
                          t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                              placement: u,
                              modifiers: {
                                  offset: {
                                      offset: this.config.offset
                                  },
                                  flip: {
                                      behavior: this.config.fallbackPlacement
                                  },
                                  arrow: {
                                      element: y
                                  },
                                  preventOverflow: {
                                      boundariesElement: this.config.boundary
                                  }
                              },
                              onCreate: function(t) {
                                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                              },
                              onUpdate: function(t) {
                                  e._handlePopperPlacementChange(t)
                              }
                          }), t(o).addClass(m), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                          var h = function() {
                              e.config.animation && e._fixTransition();
                              var n = e._hoverState;
                              e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === f && e._leave(null, e)
                          };
                          if (t(this.tip).hasClass(g)) {
                              var d = s.getTransitionDurationFromElement(this.tip);
                              t(this.tip).one(s.TRANSITION_END, h).emulateTransitionEnd(d)
                          } else h()
                      }
                  }, _.hide = function(e) {
                      var n = this,
                          i = this.getTipElement(),
                          r = t.Event(this.constructor.Event.HIDE),
                          o = function() {
                              n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                          };
                      if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                          if (t(i).removeClass(m), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[w] = !1, this._activeTrigger[x] = !1, this._activeTrigger[b] = !1, t(this.tip).hasClass(g)) {
                              var a = s.getTransitionDurationFromElement(i);
                              t(i).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                          } else o();
                          this._hoverState = ""
                      }
                  }, _.update = function() {
                      null !== this._popper && this._popper.scheduleUpdate()
                  }, _.isWithContent = function() {
                      return Boolean(this.getTitle())
                  }, _.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass("bs-tooltip-" + e)
                  }, _.getTipElement = function() {
                      return this.tip = this.tip || t(this.config.template)[0], this.tip
                  }, _.setContent = function() {
                      var e = this.getTipElement();
                      this.setElementContent(t(e.querySelectorAll(v)), this.getTitle()), t(e).removeClass(g + " " + m)
                  }, _.setElementContent = function(e, n) {
                      var i = this.config.html;
                      "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                  }, _.getTitle = function() {
                      var t = this.element.getAttribute("data-original-title");
                      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                  }, _._getAttachment = function(t) {
                      return c[t.toUpperCase()]
                  }, _._setListeners = function() {
                      var e = this;
                      this.config.trigger.split(" ").forEach(function(n) {
                          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                              return e.toggle(t)
                          });
                          else if (n !== D) {
                              var i = n === b ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                  r = n === b ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                              t(e.element).on(i, e.config.selector, function(t) {
                                  return e._enter(t)
                              }).on(r, e.config.selector, function(t) {
                                  return e._leave(t)
                              })
                          }
                          t(e.element).closest(".modal").on("hide.bs.modal", function() {
                              return e.hide()
                          })
                      }), this.config.selector ? this.config = a({}, this.config, {
                          trigger: "manual",
                          selector: ""
                      }) : this._fixTitle()
                  }, _._fixTitle = function() {
                      var t = typeof this.element.getAttribute("data-original-title");
                      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                  }, _._enter = function(e, n) {
                      var i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? x : b] = !0), t(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                          n._hoverState === d && n.show()
                      }, n.config.delay.show) : n.show())
                  }, _._leave = function(e, n) {
                      var i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? x : b] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                          n._hoverState === f && n.hide()
                      }, n.config.delay.hide) : n.hide())
                  }, _._isWithActiveTrigger = function() {
                      for (var t in this._activeTrigger)
                          if (this._activeTrigger[t]) return !0;
                      return !1
                  }, _._getConfig = function(n) {
                      return "number" == typeof(n = a({}, this.constructor.Default, t(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                          show: n.delay,
                          hide: n.delay
                      }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
                  }, _._getDelegateConfig = function() {
                      var t = {};
                      if (this.config)
                          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                      return t
                  }, _._cleanTipClass = function() {
                      var e = t(this.getTipElement()),
                          n = e.attr("class").match(l);
                      null !== n && n.length && e.removeClass(n.join(""))
                  }, _._handlePopperPlacementChange = function(t) {
                      var e = t.instance;
                      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                  }, _._fixTransition = function() {
                      var e = this.getTipElement(),
                          n = this.config.animation;
                      null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                  }, o._jQueryInterface = function(e) {
                      return this.each(function() {
                          var n = t(this).data("bs.tooltip"),
                              i = "object" == typeof e && e;
                          if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      })
                  }, r(o, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return h
                      }
                  }, {
                      key: "NAME",
                      get: function() {
                          return e
                      }
                  }, {
                      key: "DATA_KEY",
                      get: function() {
                          return "bs.tooltip"
                      }
                  }, {
                      key: "Event",
                      get: function() {
                          return p
                      }
                  }, {
                      key: "EVENT_KEY",
                      get: function() {
                          return i
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return u
                      }
                  }]), o
              }();
          return t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
              return t.fn[e] = o, _._jQueryInterface
          }, _
      }(e),
      g = function(t) {
          var e = "popover",
              n = ".bs.popover",
              i = t.fn[e],
              o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
              s = a({}, p.Default, {
                  placement: "right",
                  trigger: "click",
                  content: "",
                  template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
              }),
              l = a({}, p.DefaultType, {
                  content: "(string|element|function)"
              }),
              u = "fade",
              c = "show",
              h = ".popover-header",
              d = ".popover-body",
              f = {
                  HIDE: "hide" + n,
                  HIDDEN: "hidden" + n,
                  SHOW: "show" + n,
                  SHOWN: "shown" + n,
                  INSERTED: "inserted" + n,
                  CLICK: "click" + n,
                  FOCUSIN: "focusin" + n,
                  FOCUSOUT: "focusout" + n,
                  MOUSEENTER: "mouseenter" + n,
                  MOUSELEAVE: "mouseleave" + n
              },
              g = function(i) {
                  var a, p;

                  function g() {
                      return i.apply(this, arguments) || this
                  }
                  p = i, (a = g).prototype = Object.create(p.prototype), a.prototype.constructor = a, a.__proto__ = p;
                  var m = g.prototype;
                  return m.isWithContent = function() {
                      return this.getTitle() || this._getContent()
                  }, m.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass("bs-popover-" + e)
                  }, m.getTipElement = function() {
                      return this.tip = this.tip || t(this.config.template)[0], this.tip
                  }, m.setContent = function() {
                      var e = t(this.getTipElement());
                      this.setElementContent(e.find(h), this.getTitle());
                      var n = this._getContent();
                      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(u + " " + c)
                  }, m._getContent = function() {
                      return this.element.getAttribute("data-content") || this.config.content
                  }, m._cleanTipClass = function() {
                      var e = t(this.getTipElement()),
                          n = e.attr("class").match(o);
                      null !== n && n.length > 0 && e.removeClass(n.join(""))
                  }, g._jQueryInterface = function(e) {
                      return this.each(function() {
                          var n = t(this).data("bs.popover"),
                              i = "object" == typeof e ? e : null;
                          if ((n || !/destroy|hide/.test(e)) && (n || (n = new g(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      })
                  }, r(g, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return s
                      }
                  }, {
                      key: "NAME",
                      get: function() {
                          return e
                      }
                  }, {
                      key: "DATA_KEY",
                      get: function() {
                          return "bs.popover"
                      }
                  }, {
                      key: "Event",
                      get: function() {
                          return f
                      }
                  }, {
                      key: "EVENT_KEY",
                      get: function() {
                          return n
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return l
                      }
                  }]), g
              }(p);
          return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
              return t.fn[e] = i, g._jQueryInterface
          }, g
      }(e),
      m = function(t) {
          var e = "scrollspy",
              n = t.fn[e],
              i = {
                  offset: 10,
                  method: "auto",
                  target: ""
              },
              o = {
                  offset: "number",
                  method: "string",
                  target: "(string|element)"
              },
              l = {
                  ACTIVATE: "activate.bs.scrollspy",
                  SCROLL: "scroll.bs.scrollspy",
                  LOAD_DATA_API: "load.bs.scrollspy.data-api"
              },
              u = "dropdown-item",
              c = "active",
              h = {
                  DATA_SPY: '[data-spy="scroll"]',
                  ACTIVE: ".active",
                  NAV_LIST_GROUP: ".nav, .list-group",
                  NAV_LINKS: ".nav-link",
                  NAV_ITEMS: ".nav-item",
                  LIST_ITEMS: ".list-group-item",
                  DROPDOWN: ".dropdown",
                  DROPDOWN_ITEMS: ".dropdown-item",
                  DROPDOWN_TOGGLE: ".dropdown-toggle"
              },
              d = "offset",
              f = "position",
              p = function() {
                  function n(e, n) {
                      var i = this;
                      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + h.NAV_LINKS + "," + this._config.target + " " + h.LIST_ITEMS + "," + this._config.target + " " + h.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(l.SCROLL, function(t) {
                          return i._process(t)
                      }), this.refresh(), this._process()
                  }
                  var p = n.prototype;
                  return p.refresh = function() {
                      var e = this,
                          n = this._scrollElement === this._scrollElement.window ? d : f,
                          i = "auto" === this._config.method ? n : this._config.method,
                          r = i === f ? this._getScrollTop() : 0;
                      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                          var n, o = s.getSelectorFromElement(e);
                          if (o && (n = document.querySelector(o)), n) {
                              var a = n.getBoundingClientRect();
                              if (a.width || a.height) return [t(n)[i]().top + r, o]
                          }
                          return null
                      }).filter(function(t) {
                          return t
                      }).sort(function(t, e) {
                          return t[0] - e[0]
                      }).forEach(function(t) {
                          e._offsets.push(t[0]), e._targets.push(t[1])
                      })
                  }, p.dispose = function() {
                      t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                  }, p._getConfig = function(n) {
                      if ("string" != typeof(n = a({}, i, "object" == typeof n && n ? n : {})).target) {
                          var r = t(n.target).attr("id");
                          r || (r = s.getUID(e), t(n.target).attr("id", r)), n.target = "#" + r
                      }
                      return s.typeCheckConfig(e, n, o), n
                  }, p._getScrollTop = function() {
                      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                  }, p._getScrollHeight = function() {
                      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                  }, p._getOffsetHeight = function() {
                      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                  }, p._process = function() {
                      var t = this._getScrollTop() + this._config.offset,
                          e = this._getScrollHeight(),
                          n = this._config.offset + e - this._getOffsetHeight();
                      if (this._scrollHeight !== e && this.refresh(), t >= n) {
                          var i = this._targets[this._targets.length - 1];
                          this._activeTarget !== i && this._activate(i)
                      } else {
                          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                          for (var r = this._offsets.length; r--;) {
                              this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                          }
                      }
                  }, p._activate = function(e) {
                      this._activeTarget = e, this._clear();
                      var n = this._selector.split(",");
                      n = n.map(function(t) {
                          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                      });
                      var i = t([].slice.call(document.querySelectorAll(n.join(","))));
                      i.hasClass(u) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS + ", " + h.LIST_ITEMS).addClass(c), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(c)), t(this._scrollElement).trigger(l.ACTIVATE, {
                          relatedTarget: e
                      })
                  }, p._clear = function() {
                      var e = [].slice.call(document.querySelectorAll(this._selector));
                      t(e).filter(h.ACTIVE).removeClass(c)
                  }, n._jQueryInterface = function(e) {
                      return this.each(function() {
                          var i = t(this).data("bs.scrollspy");
                          if (i || (i = new n(this, "object" == typeof e && e), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                              if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                              i[e]()
                          }
                      })
                  }, r(n, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return i
                      }
                  }]), n
              }();
          return t(window).on(l.LOAD_DATA_API, function() {
              for (var e = [].slice.call(document.querySelectorAll(h.DATA_SPY)), n = e.length; n--;) {
                  var i = t(e[n]);
                  p._jQueryInterface.call(i, i.data())
              }
          }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() {
              return t.fn[e] = n, p._jQueryInterface
          }, p
      }(e),
      v = function(t) {
          var e = t.fn.tab,
              n = {
                  HIDE: "hide.bs.tab",
                  HIDDEN: "hidden.bs.tab",
                  SHOW: "show.bs.tab",
                  SHOWN: "shown.bs.tab",
                  CLICK_DATA_API: "click.bs.tab.data-api"
              },
              i = "dropdown-menu",
              o = "active",
              a = "disabled",
              l = "fade",
              u = "show",
              c = ".dropdown",
              h = ".nav, .list-group",
              d = ".active",
              f = "> li > .active",
              p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              g = ".dropdown-toggle",
              m = "> .dropdown-menu .active",
              v = function() {
                  function e(t) {
                      this._element = t
                  }
                  var p = e.prototype;
                  return p.show = function() {
                      var e = this;
                      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(o) || t(this._element).hasClass(a))) {
                          var i, r, l = t(this._element).closest(h)[0],
                              u = s.getSelectorFromElement(this._element);
                          if (l) {
                              var c = "UL" === l.nodeName ? f : d;
                              r = (r = t.makeArray(t(l).find(c)))[r.length - 1]
                          }
                          var p = t.Event(n.HIDE, {
                                  relatedTarget: this._element
                              }),
                              g = t.Event(n.SHOW, {
                                  relatedTarget: r
                              });
                          if (r && t(r).trigger(p), t(this._element).trigger(g), !g.isDefaultPrevented() && !p.isDefaultPrevented()) {
                              u && (i = document.querySelector(u)), this._activate(this._element, l);
                              var m = function() {
                                  var i = t.Event(n.HIDDEN, {
                                          relatedTarget: e._element
                                      }),
                                      o = t.Event(n.SHOWN, {
                                          relatedTarget: r
                                      });
                                  t(r).trigger(i), t(e._element).trigger(o)
                              };
                              i ? this._activate(i, i.parentNode, m) : m()
                          }
                      }
                  }, p.dispose = function() {
                      t.removeData(this._element, "bs.tab"), this._element = null
                  }, p._activate = function(e, n, i) {
                      var r = this,
                          o = ("UL" === n.nodeName ? t(n).find(f) : t(n).children(d))[0],
                          a = i && o && t(o).hasClass(l),
                          u = function() {
                              return r._transitionComplete(e, o, i)
                          };
                      if (o && a) {
                          var c = s.getTransitionDurationFromElement(o);
                          t(o).one(s.TRANSITION_END, u).emulateTransitionEnd(c)
                      } else u()
                  }, p._transitionComplete = function(e, n, r) {
                      if (n) {
                          t(n).removeClass(u + " " + o);
                          var a = t(n.parentNode).find(m)[0];
                          a && t(a).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                      }
                      if (t(e).addClass(o), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), t(e).addClass(u), e.parentNode && t(e.parentNode).hasClass(i)) {
                          var l = t(e).closest(c)[0];
                          if (l) {
                              var h = [].slice.call(l.querySelectorAll(g));
                              t(h).addClass(o)
                          }
                          e.setAttribute("aria-expanded", !0)
                      }
                      r && r()
                  }, e._jQueryInterface = function(n) {
                      return this.each(function() {
                          var i = t(this),
                              r = i.data("bs.tab");
                          if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                              if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                              r[n]()
                          }
                      })
                  }, r(e, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.1.3"
                      }
                  }]), e
              }();
          return t(document).on(n.CLICK_DATA_API, p, function(e) {
              e.preventDefault(), v._jQueryInterface.call(t(this), "show")
          }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function() {
              return t.fn.tab = e, v._jQueryInterface
          }, v
      }(e);
  ! function(t) {
      if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(e), t.Util = s, t.Alert = l, t.Button = u, t.Carousel = c, t.Collapse = h, t.Dropdown = d, t.Modal = f, t.Popover = g, t.Scrollspy = m, t.Tab = v, t.Tooltip = p, Object.defineProperty(t, "__esModule", {
      value: !0
  })
}),
function(t, e) {
  var n = t(window);

  function i() {
      return new Date(Date.UTC.apply(Date, arguments))
  }

  function r() {
      var t = new Date;
      return i(t.getFullYear(), t.getMonth(), t.getDate())
  }

  function o(t) {
      return function() {
          return this[t].apply(this, arguments)
      }
  }
  var a, s = (a = {
          get: function(t) {
              return this.slice(t)[0]
          },
          contains: function(t) {
              for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++)
                  if (this[n].valueOf() === e) return n;
              return -1
          },
          remove: function(t) {
              this.splice(t, 1)
          },
          replace: function(e) {
              e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
          },
          clear: function() {
              this.length = 0
          },
          copy: function() {
              var t = new s;
              return t.replace(this), t
          }
      }, function() {
          var e = [];
          return e.push.apply(e, arguments), t.extend(e, a), e
      }),
      l = function(e, n) {
          this.dates = new s, this.viewDate = r(), this.focusDate = null, this._process_options(n), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(p.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(t, e) {
              return parseInt(e) + 1
          }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
      };
  l.prototype = {
      constructor: l,
      _process_options: function(e) {
          this._o = t.extend({}, this._o, e);
          var n = this.o = t.extend({}, this._o),
              i = n.language;
          switch (f[i] || (i = i.split("-")[0], f[i] || (i = h.language)), n.language = i, n.startView) {
              case 2:
              case "decade":
                  n.startView = 2;
                  break;
              case 1:
              case "year":
                  n.startView = 1;
                  break;
              default:
                  n.startView = 0
          }
          switch (n.minViewMode) {
              case 1:
              case "months":
                  n.minViewMode = 1;
                  break;
              case 2:
              case "years":
                  n.minViewMode = 2;
                  break;
              default:
                  n.minViewMode = 0
          }
          n.startView = Math.max(n.startView, n.minViewMode), !0 !== n.multidate && (n.multidate = Number(n.multidate) || !1, !1 !== n.multidate ? n.multidate = Math.max(0, n.multidate) : n.multidate = 1), n.multidateSeparator = String(n.multidateSeparator), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
          var r = p.parseFormat(n.format);
          n.startDate !== -1 / 0 && (n.startDate ? n.startDate instanceof Date ? n.startDate = this._local_to_utc(this._zero_time(n.startDate)) : n.startDate = p.parseDate(n.startDate, r, n.language) : n.startDate = -1 / 0), n.endDate !== 1 / 0 && (n.endDate ? n.endDate instanceof Date ? n.endDate = this._local_to_utc(this._zero_time(n.endDate)) : n.endDate = p.parseDate(n.endDate, r, n.language) : n.endDate = 1 / 0), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(t) {
              return parseInt(t, 10)
          });
          var o = String(n.orientation).toLowerCase().split(/\s+/g),
              a = n.orientation.toLowerCase();
          if (o = t.grep(o, function(t) {
                  return /^auto|left|right|top|bottom$/.test(t)
              }), n.orientation = {
                  x: "auto",
                  y: "auto"
              }, a && "auto" !== a)
              if (1 === o.length) switch (o[0]) {
                  case "top":
                  case "bottom":
                      n.orientation.y = o[0];
                      break;
                  case "left":
                  case "right":
                      n.orientation.x = o[0]
              } else a = t.grep(o, function(t) {
                  return /^left|right$/.test(t)
              }), n.orientation.x = a[0] || "auto", a = t.grep(o, function(t) {
                  return /^top|bottom$/.test(t)
              }), n.orientation.y = a[0] || "auto";
              else;
      },
      _events: [],
      _secondaryEvents: [],
      _applyEvents: function(t) {
          for (var e, n, i, r = 0; r < t.length; r++) e = t[r][0], 2 === t[r].length ? (n = void 0, i = t[r][1]) : 3 === t[r].length && (n = t[r][1], i = t[r][2]), e.on(i, n)
      },
      _unapplyEvents: function(t) {
          for (var e, n, i, r = 0; r < t.length; r++) e = t[r][0], 2 === t[r].length ? (i = void 0, n = t[r][1]) : 3 === t[r].length && (i = t[r][1], n = t[r][2]), e.off(n, i)
      },
      _buildEvents: function() {
          this.isInput ? this._events = [
              [this.element, {
                  focus: t.proxy(this.show, this),
                  keyup: t.proxy(function(e) {
                      -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                  }, this),
                  keydown: t.proxy(this.keydown, this)
              }]
          ] : this.component && this.hasInput ? this._events = [
              [this.element.find("input"), {
                  focus: t.proxy(this.show, this),
                  keyup: t.proxy(function(e) {
                      -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                  }, this),
                  keydown: t.proxy(this.keydown, this)
              }],
              [this.component, {
                  click: t.proxy(this.show, this)
              }]
          ] : this.element.is("div") ? this.isInline = !0 : this._events = [
              [this.element, {
                  click: t.proxy(this.show, this)
              }]
          ], this._events.push([this.element, "*", {
              blur: t.proxy(function(t) {
                  this._focused_from = t.target
              }, this)
          }], [this.element, {
              blur: t.proxy(function(t) {
                  this._focused_from = t.target
              }, this)
          }]), this._secondaryEvents = [
              [this.picker, {
                  click: t.proxy(this.click, this)
              }],
              [t(window), {
                  resize: t.proxy(this.place, this)
              }],
              [t(document), {
                  "mousedown touchstart": t.proxy(function(t) {
                      this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                  }, this)
              }]
          ]
      },
      _attachEvents: function() {
          this._detachEvents(), this._applyEvents(this._events)
      },
      _detachEvents: function() {
          this._unapplyEvents(this._events)
      },
      _attachSecondaryEvents: function() {
          this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
      },
      _detachSecondaryEvents: function() {
          this._unapplyEvents(this._secondaryEvents)
      },
      _trigger: function(e, n) {
          var i = n || this.dates.get(-1),
              r = this._utc_to_local(i);
          this.element.trigger({
              type: e,
              date: r,
              dates: t.map(this.dates, this._utc_to_local),
              format: t.proxy(function(t, e) {
                  0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                  var n = this.dates.get(t);
                  return p.formatDate(n, e, this.o.language)
              }, this)
          })
      },
      show: function() {
          this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
      },
      hide: function() {
          this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
      },
      remove: function() {
          this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
      },
      _utc_to_local: function(t) {
          return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
      },
      _local_to_utc: function(t) {
          return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
      },
      _zero_time: function(t) {
          return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
      },
      _zero_utc_time: function(t) {
          return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
      },
      getDates: function() {
          return t.map(this.dates, this._utc_to_local)
      },
      getUTCDates: function() {
          return t.map(this.dates, function(t) {
              return new Date(t)
          })
      },
      getDate: function() {
          return this._utc_to_local(this.getUTCDate())
      },
      getUTCDate: function() {
          return new Date(this.dates.get(-1))
      },
      setDates: function() {
          var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
          this.update.apply(this, e), this._trigger("changeDate"), this.setValue()
      },
      setUTCDates: function() {
          var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
          this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
      },
      setDate: o("setDates"),
      setUTCDate: o("setUTCDates"),
      setValue: function() {
          var t = this.getFormattedDate();
          this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
      },
      getFormattedDate: function(e) {
          void 0 === e && (e = this.o.format);
          var n = this.o.language;
          return t.map(this.dates, function(t) {
              return p.formatDate(t, e, n)
          }).join(this.o.multidateSeparator)
      },
      setStartDate: function(t) {
          this._process_options({
              startDate: t
          }), this.update(), this.updateNavArrows()
      },
      setEndDate: function(t) {
          this._process_options({
              endDate: t
          }), this.update(), this.updateNavArrows()
      },
      setDaysOfWeekDisabled: function(t) {
          this._process_options({
              daysOfWeekDisabled: t
          }), this.update(), this.updateNavArrows()
      },
      place: function() {
          if (!this.isInline) {
              var e = this.picker.outerWidth(),
                  i = this.picker.outerHeight(),
                  r = n.width(),
                  o = n.height(),
                  a = n.scrollTop(),
                  s = parseInt(this.element.parents().filter(function() {
                      return "auto" !== t(this).css("z-index")
                  }).first().css("z-index")) + 10,
                  l = this.component ? this.component.parent().offset() : this.element.offset(),
                  u = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                  c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                  h = l.left,
                  d = l.top;
              this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (h -= e - c)) : (this.picker.addClass("datepicker-orient-left"), l.left < 0 ? h -= l.left - 10 : l.left + e > r && (h = r - e - 10));
              var f, p, g = this.o.orientation.y;
              "auto" === g && (f = -a + l.top - i, p = a + o - (l.top + u + i), g = Math.max(f, p) === p ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? d += u : d -= i + parseInt(this.picker.css("padding-top")), this.picker.css({
                  top: d,
                  left: h,
                  zIndex: s
              })
          }
      },
      _allow_update: !0,
      update: function() {
          if (this._allow_update) {
              var e = this.dates.copy(),
                  n = [],
                  i = !1;
              arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                  e instanceof Date && (e = this._local_to_utc(e)), n.push(e)
              }, this)), i = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = t.map(n, t.proxy(function(t) {
                  return p.parseDate(t, this.o.format, this.o.language)
              }, this)), n = t.grep(n, t.proxy(function(t) {
                  return t < this.o.startDate || t > this.o.endDate || !t
              }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), i ? this.setValue() : n.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill()
          }
      },
      fillDow: function() {
          var t = this.o.weekStart,
              e = "<tr>";
          if (this.o.calendarWeeks) {
              var n = '<th class="cw">&nbsp;</th>';
              e += n, this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
          }
          for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + f[this.o.language].daysMin[t++ % 7] + "</th>";
          e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
      },
      fillMonths: function() {
          for (var t = "", e = 0; e < 12;) t += '<span class="month">' + f[this.o.language].monthsShort[e++] + "</span>";
          this.picker.find(".datepicker-months td").html(t)
      },
      setRange: function(e) {
          e && e.length ? this.range = t.map(e, function(t) {
              return t.valueOf()
          }) : delete this.range, this.fill()
      },
      getClassNames: function(e) {
          var n = [],
              i = this.viewDate.getUTCFullYear(),
              r = this.viewDate.getUTCMonth(),
              o = new Date;
          return e.getUTCFullYear() < i || e.getUTCFullYear() === i && e.getUTCMonth() < r ? n.push("old") : (e.getUTCFullYear() > i || e.getUTCFullYear() === i && e.getUTCMonth() > r) && n.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && n.push("today"), -1 !== this.dates.contains(e) && n.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && n.push("selected")), n
      },
      fill: function() {
          var e, n = new Date(this.viewDate),
              r = n.getUTCFullYear(),
              o = n.getUTCMonth(),
              a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
              s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
              l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
              u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
              c = f[this.o.language].today || f.en.today || "",
              h = f[this.o.language].clear || f.en.clear || "";
          this.picker.find(".datepicker-days thead th.datepicker-switch").text(f[this.o.language].months[o] + " " + r), this.picker.find("tfoot th.today").text(c).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot th.clear").text(h).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths();
          var d = i(r, o - 1, 28),
              g = p.getDaysInMonth(d.getUTCFullYear(), d.getUTCMonth());
          d.setUTCDate(g), d.setUTCDate(g - (d.getUTCDay() - this.o.weekStart + 7) % 7);
          var m = new Date(d);
          m.setUTCDate(m.getUTCDate() + 42), m = m.valueOf();
          for (var v, y = []; d.valueOf() < m;) {
              if (d.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) {
                  var b = new Date(+d + (this.o.weekStart - d.getUTCDay() - 7) % 7 * 864e5),
                      x = new Date(Number(b) + (11 - b.getUTCDay()) % 7 * 864e5),
                      w = new Date(Number(w = i(x.getUTCFullYear(), 0, 1)) + (11 - w.getUTCDay()) % 7 * 864e5),
                      D = (x - w) / 864e5 / 7 + 1;
                  y.push('<td class="cw">' + D + "</td>")
              }
              if ((v = this.getClassNames(d)).push("day"), this.o.beforeShowDay !== t.noop) {
                  var _ = this.o.beforeShowDay(this._utc_to_local(d));
                  void 0 === _ ? _ = {} : "boolean" == typeof _ ? _ = {
                      enabled: _
                  } : "string" == typeof _ && (_ = {
                      classes: _
                  }), !1 === _.enabled && v.push("disabled"), _.classes && (v = v.concat(_.classes.split(/\s+/))), _.tooltip && (e = _.tooltip)
              }
              v = t.unique(v), y.push('<td class="' + v.join(" ") + '"' + (e ? ' title="' + e + '"' : "") + ">" + d.getUTCDate() + "</td>"), d.getUTCDay() === this.o.weekEnd && y.push("</tr>"), d.setUTCDate(d.getUTCDate() + 1)
          }
          this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
          var C = this.picker.find(".datepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");
          t.each(this.dates, function(t, e) {
              e.getUTCFullYear() === r && C.eq(e.getUTCMonth()).addClass("active")
          }), (r < a || r > l) && C.addClass("disabled"), r === a && C.slice(0, s).addClass("disabled"), r === l && C.slice(u + 1).addClass("disabled"), y = "", r = 10 * parseInt(r / 10, 10);
          var k = this.picker.find(".datepicker-years").find("th:eq(1)").text(r + "-" + (r + 9)).end().find("td");
          r -= 1;
          for (var T, S = t.map(this.dates, function(t) {
                  return t.getUTCFullYear()
              }), M = -1; M < 11; M++) T = ["year"], -1 === M ? T.push("old") : 10 === M && T.push("new"), -1 !== t.inArray(r, S) && T.push("active"), (r < a || r > l) && T.push("disabled"), y += '<span class="' + T.join(" ") + '">' + r + "</span>", r += 1;
          k.html(y)
      },
      updateNavArrows: function() {
          if (this._allow_update) {
              var t = new Date(this.viewDate),
                  e = t.getUTCFullYear(),
                  n = t.getUTCMonth();
              switch (this.viewMode) {
                  case 0:
                      this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                          visibility: "hidden"
                      }) : this.picker.find(".prev").css({
                          visibility: "visible"
                      }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                          visibility: "hidden"
                      }) : this.picker.find(".next").css({
                          visibility: "visible"
                      });
                      break;
                  case 1:
                  case 2:
                      this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                          visibility: "hidden"
                      }) : this.picker.find(".prev").css({
                          visibility: "visible"
                      }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                          visibility: "hidden"
                      }) : this.picker.find(".next").css({
                          visibility: "visible"
                      })
              }
          }
      },
      click: function(e) {
          e.preventDefault();
          var n, r, o, a = t(e.target).closest("span, td, th");
          if (1 === a.length) switch (a[0].nodeName.toLowerCase()) {
              case "th":
                  switch (a[0].className) {
                      case "datepicker-switch":
                          this.showMode(1);
                          break;
                      case "prev":
                      case "next":
                          var s = p.modes[this.viewMode].navStep * ("prev" === a[0].className ? -1 : 1);
                          switch (this.viewMode) {
                              case 0:
                                  this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate);
                                  break;
                              case 1:
                              case 2:
                                  this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                          }
                          this.fill();
                          break;
                      case "today":
                          var l = new Date;
                          l = i(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0), this.showMode(-2);
                          var u = "linked" === this.o.todayBtn ? null : "view";
                          this._setDate(l, u);
                          break;
                      case "clear":
                          var c;
                          this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                  }
                  break;
              case "span":
                  a.is(".disabled") || (this.viewDate.setUTCDate(1), a.is(".month") ? (o = 1, r = a.parent().find("span").index(a), n = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(r), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(n, r, o))) : (o = 1, r = 0, n = parseInt(a.text(), 10) || 0, this.viewDate.setUTCFullYear(n), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(n, r, o))), this.showMode(-1), this.fill());
                  break;
              case "td":
                  a.is(".day") && !a.is(".disabled") && (o = parseInt(a.text(), 10) || 1, n = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), a.is(".old") ? 0 === r ? (r = 11, n -= 1) : r -= 1 : a.is(".new") && (11 === r ? (r = 0, n += 1) : r += 1), this._setDate(i(n, r, o)))
          }
          this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
      },
      _toggle_multidate: function(t) {
          var e = this.dates.contains(t);
          if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate)
              for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
      },
      _setDate: function(t, e) {
          var n;
          e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate"), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || e && "date" !== e || this.hide()
      },
      moveMonth: function(t, e) {
          if (t) {
              if (!e) return t;
              var n, i, r = new Date(t.valueOf()),
                  o = r.getUTCDate(),
                  a = r.getUTCMonth(),
                  s = Math.abs(e);
              if (e = e > 0 ? 1 : -1, 1 === s) i = -1 === e ? function() {
                  return r.getUTCMonth() === a
              } : function() {
                  return r.getUTCMonth() !== n
              }, n = a + e, r.setUTCMonth(n), (n < 0 || n > 11) && (n = (n + 12) % 12);
              else {
                  for (var l = 0; l < s; l++) r = this.moveMonth(r, e);
                  n = r.getUTCMonth(), r.setUTCDate(o), i = function() {
                      return n !== r.getUTCMonth()
                  }
              }
              for (; i();) r.setUTCDate(--o), r.setUTCMonth(n);
              return r
          }
      },
      moveYear: function(t, e) {
          return this.moveMonth(t, 12 * e)
      },
      dateWithinRange: function(t) {
          return t >= this.o.startDate && t <= this.o.endDate
      },
      keydown: function(t) {
          if (this.picker.is(":not(:visible)")) 27 === t.keyCode && this.show();
          else {
              var e, n, i, o, a = !1,
                  s = this.focusDate || this.viewDate;
              switch (t.keyCode) {
                  case 27:
                      this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                      break;
                  case 37:
                  case 39:
                      if (!this.o.keyboardNavigation) break;
                      e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || r(), e), i = this.moveYear(s, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || r(), e), i = this.moveMonth(s, e), this._trigger("changeMonth", this.viewDate)) : ((n = new Date(this.dates.get(-1) || r())).setUTCDate(n.getUTCDate() + e), (i = new Date(s)).setUTCDate(s.getUTCDate() + e)), this.dateWithinRange(n) && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                      break;
                  case 38:
                  case 40:
                      if (!this.o.keyboardNavigation) break;
                      e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || r(), e), i = this.moveYear(s, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || r(), e), i = this.moveMonth(s, e), this._trigger("changeMonth", this.viewDate)) : ((n = new Date(this.dates.get(-1) || r())).setUTCDate(n.getUTCDate() + 7 * e), (i = new Date(s)).setUTCDate(s.getUTCDate() + 7 * e)), this.dateWithinRange(n) && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                      break;
                  case 32:
                      break;
                  case 13:
                      s = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(s), a = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
                      break;
                  case 9:
                      this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
              }
              if (a) this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.isInput ? o = this.element : this.component && (o = this.element.find("input")), o && o.change()
          }
      },
      showMode: function(t) {
          t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + p.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
      }
  };
  var u = function(e, n) {
      this.element = t(e), this.inputs = t.map(n.inputs, function(t) {
          return t.jquery ? t[0] : t
      }), delete n.inputs, t(this.inputs).datepicker(n).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
          return t(e).data("datepicker")
      }), this.updateDates()
  };
  u.prototype = {
      updateDates: function() {
          this.dates = t.map(this.pickers, function(t) {
              return t.getUTCDate()
          }), this.updateRanges()
      },
      updateRanges: function() {
          var e = t.map(this.dates, function(t) {
              return t.valueOf()
          });
          t.each(this.pickers, function(t, n) {
              n.setRange(e)
          })
      },
      dateUpdated: function(e) {
          if (!this.updating) {
              this.updating = !0;
              var n = t(e.target).data("datepicker").getUTCDate(),
                  i = t.inArray(e.target, this.inputs),
                  r = this.inputs.length;
              if (-1 !== i) {
                  if (t.each(this.pickers, function(t, e) {
                          e.getUTCDate() || e.setUTCDate(n)
                      }), n < this.dates[i])
                      for (; i >= 0 && n < this.dates[i];) this.pickers[i--].setUTCDate(n);
                  else if (n > this.dates[i])
                      for (; i < r && n > this.dates[i];) this.pickers[i++].setUTCDate(n);
                  this.updateDates(), delete this.updating
              }
          }
      },
      remove: function() {
          t.map(this.pickers, function(t) {
              t.remove()
          }), delete this.element.data().datepicker
      }
  };
  var c = t.fn.datepicker;
  t.fn.datepicker = function(e) {
      var n, i = Array.apply(null, arguments);
      return i.shift(), this.each(function() {
          var r = t(this),
              o = r.data("datepicker"),
              a = "object" == typeof e && e;
          if (!o) {
              var s = function(e, n) {
                      var i = t(e).data(),
                          r = {},
                          o = new RegExp("^" + n.toLowerCase() + "([A-Z])");

                      function a(t, e) {
                          return e.toLowerCase()
                      }
                      for (var s in n = new RegExp("^" + n.toLowerCase()), i) n.test(s) && (r[s.replace(o, a)] = i[s]);
                      return r
                  }(this, "date"),
                  c = function(e) {
                      var n = {};
                      if (f[e] || (e = e.split("-")[0], f[e])) {
                          var i = f[e];
                          return t.each(d, function(t, e) {
                              e in i && (n[e] = i[e])
                          }), n
                      }
                  }(t.extend({}, h, s, a).language),
                  p = t.extend({}, h, c, s, a);
              if (r.is(".input-daterange") || p.inputs) {
                  var g = {
                      inputs: p.inputs || r.find("input").toArray()
                  };
                  r.data("datepicker", o = new u(this, t.extend(p, g)))
              } else r.data("datepicker", o = new l(this, p))
          }
          if ("string" == typeof e && "function" == typeof o[e] && void 0 !== (n = o[e].apply(o, i))) return !1
      }), void 0 !== n ? n : this
  };
  var h = t.fn.datepicker.defaults = {
          autoclose: !1,
          beforeShowDay: t.noop,
          calendarWeeks: !1,
          clearBtn: !1,
          daysOfWeekDisabled: [],
          endDate: 1 / 0,
          forceParse: !0,
          format: "mm/dd/yyyy",
          keyboardNavigation: !0,
          language: "en",
          minViewMode: 0,
          multidate: !1,
          multidateSeparator: ",",
          orientation: "auto",
          rtl: !1,
          startDate: -1 / 0,
          startView: 0,
          todayBtn: !1,
          todayHighlight: !1,
          weekStart: 0
      },
      d = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  t.fn.datepicker.Constructor = l;
  var f = t.fn.datepicker.dates = {
          en: {
              days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
              months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              today: "Today",
              clear: "Clear"
          }
      },
      p = {
          modes: [{
              clsName: "days",
              navFnc: "Month",
              navStep: 1
          }, {
              clsName: "months",
              navFnc: "FullYear",
              navStep: 1
          }, {
              clsName: "years",
              navFnc: "FullYear",
              navStep: 10
          }],
          isLeapYear: function(t) {
              return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
          },
          getDaysInMonth: function(t, e) {
              return [31, p.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
          },
          validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
          nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
          parseFormat: function(t) {
              var e = t.replace(this.validParts, "\0").split("\0"),
                  n = t.match(this.validParts);
              if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
              return {
                  separators: e,
                  parts: n
              }
          },
          parseDate: function(e, n, r) {
              if (e) {
                  if (e instanceof Date) return e;
                  "string" == typeof n && (n = p.parseFormat(n));
                  var o, a, s, u = /([\-+]\d+)([dmwy])/,
                      c = e.match(/([\-+]\d+)([dmwy])/g);
                  if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                      for (e = new Date, s = 0; s < c.length; s++) switch (o = u.exec(c[s]), a = parseInt(o[1]), o[2]) {
                          case "d":
                              e.setUTCDate(e.getUTCDate() + a);
                              break;
                          case "m":
                              e = l.prototype.moveMonth.call(l.prototype, e, a);
                              break;
                          case "w":
                              e.setUTCDate(e.getUTCDate() + 7 * a);
                              break;
                          case "y":
                              e = l.prototype.moveYear.call(l.prototype, e, a)
                      }
                      return i(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0)
                  }
                  c = e && e.match(this.nonpunctuation) || [], e = new Date;
                  var h, d, g = {},
                      m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                      v = {
                          yyyy: function(t, e) {
                              return t.setUTCFullYear(e)
                          },
                          yy: function(t, e) {
                              return t.setUTCFullYear(2e3 + e)
                          },
                          m: function(t, e) {
                              if (isNaN(t)) return t;
                              for (e -= 1; e < 0;) e += 12;
                              for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                              return t
                          },
                          d: function(t, e) {
                              return t.setUTCDate(e)
                          }
                      };
                  v.M = v.MM = v.mm = v.m, v.dd = v.d, e = i(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
                  var y = n.parts.slice();
                  if (c.length !== y.length && (y = t(y).filter(function(e, n) {
                          return -1 !== t.inArray(n, m)
                      }).toArray()), c.length === y.length) {
                      var b, x, w;
                      for (s = 0, b = y.length; s < b; s++) {
                          if (h = parseInt(c[s], 10), o = y[s], isNaN(h)) switch (o) {
                              case "MM":
                                  d = t(f[r].months).filter(D), h = t.inArray(d[0], f[r].months) + 1;
                                  break;
                              case "M":
                                  d = t(f[r].monthsShort).filter(D), h = t.inArray(d[0], f[r].monthsShort) + 1
                          }
                          g[o] = h
                      }
                      for (s = 0; s < m.length; s++)(w = m[s]) in g && !isNaN(g[w]) && (x = new Date(e), v[w](x, g[w]), isNaN(x) || (e = x))
                  }
                  return e
              }

              function D() {
                  var t = this.slice(0, c[s].length);
                  return t === c[s].slice(0, t.length)
              }
          },
          formatDate: function(e, n, i) {
              if (!e) return "";
              "string" == typeof n && (n = p.parseFormat(n));
              var r = {
                  d: e.getUTCDate(),
                  D: f[i].daysShort[e.getUTCDay()],
                  DD: f[i].days[e.getUTCDay()],
                  m: e.getUTCMonth() + 1,
                  M: f[i].monthsShort[e.getUTCMonth()],
                  MM: f[i].months[e.getUTCMonth()],
                  yy: e.getUTCFullYear().toString().substring(2),
                  yyyy: e.getUTCFullYear()
              };
              r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, e = [];
              for (var o = t.extend([], n.separators), a = 0, s = n.parts.length; a <= s; a++) o.length && e.push(o.shift()), e.push(r[n.parts[a]]);
              return e.join("")
          },
          headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
          contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
          footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
      };
  p.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + p.headTemplate + "<tbody></tbody>" + p.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = p, t.fn.datepicker.noConflict = function() {
      return t.fn.datepicker = c, this
  }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
      var n = t(this);
      n.data("datepicker") || (e.preventDefault(), n.datepicker("show"))
  }), t(function() {
      t('[data-provide="datepicker-inline"]').datepicker()
  })
}(window.jQuery),
function(t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
  }
}(function() {
  return function() {
      return function t(e, n, i) {
          function r(a, s) {
              if (!n[a]) {
                  if (!e[a]) {
                      var l = "function" == typeof require && require;
                      if (!s && l) return l(a, !0);
                      if (o) return o(a, !0);
                      var u = new Error("Cannot find module '" + a + "'");
                      throw u.code = "MODULE_NOT_FOUND", u
                  }
                  var c = n[a] = {
                      exports: {}
                  };
                  e[a][0].call(c.exports, function(t) {
                      return r(e[a][1][t] || t)
                  }, c, c.exports, t, e, n, i)
              }
              return n[a].exports
          }
          for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
          return r
      }
  }()({
      1: [function(t, e, n) {}, {}],
      2: [function(t, e, n) {
          var i = t(6);

          function r(t) {
              if (t) {
                  var e = [0, 0, 0],
                      n = 1,
                      r = t.match(/^#([a-fA-F0-9]{3})$/i);
                  if (r) {
                      r = r[1];
                      for (var o = 0; o < e.length; o++) e[o] = parseInt(r[o] + r[o], 16)
                  } else if (r = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                      r = r[1];
                      for (o = 0; o < e.length; o++) e[o] = parseInt(r.slice(2 * o, 2 * o + 2), 16)
                  } else if (r = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                      for (o = 0; o < e.length; o++) e[o] = parseInt(r[o + 1]);
                      n = parseFloat(r[4])
                  } else if (r = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                      for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(r[o + 1]));
                      n = parseFloat(r[4])
                  } else if (r = t.match(/(\w+)/)) {
                      if ("transparent" == r[1]) return [0, 0, 0, 0];
                      if (!(e = i[r[1]])) return
                  }
                  for (o = 0; o < e.length; o++) e[o] = c(e[o], 0, 255);
                  return n = n || 0 == n ? c(n, 0, 1) : 1, e[3] = n, e
              }
          }

          function o(t) {
              if (t) {
                  var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                  if (e) {
                      var n = parseFloat(e[4]);
                      return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                  }
              }
          }

          function a(t) {
              if (t) {
                  var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                  if (e) {
                      var n = parseFloat(e[4]);
                      return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                  }
              }
          }

          function s(t, e) {
              return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
          }

          function l(t, e) {
              return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
          }

          function u(t, e) {
              return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
          }

          function c(t, e, n) {
              return Math.min(Math.max(e, t), n)
          }

          function h(t) {
              var e = t.toString(16).toUpperCase();
              return e.length < 2 ? "0" + e : e
          }
          e.exports = {
              getRgba: r,
              getHsla: o,
              getRgb: function(t) {
                  var e = r(t);
                  return e && e.slice(0, 3)
              },
              getHsl: function(t) {
                  var e = o(t);
                  return e && e.slice(0, 3)
              },
              getHwb: a,
              getAlpha: function(t) {
                  var e = r(t);
                  if (e) return e[3];
                  if (e = o(t)) return e[3];
                  if (e = a(t)) return e[3]
              },
              hexString: function(t) {
                  return "#" + h(t[0]) + h(t[1]) + h(t[2])
              },
              rgbString: function(t, e) {
                  if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                  return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
              },
              rgbaString: s,
              percentString: function(t, e) {
                  if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                  var n = Math.round(t[0] / 255 * 100),
                      i = Math.round(t[1] / 255 * 100),
                      r = Math.round(t[2] / 255 * 100);
                  return "rgb(" + n + "%, " + i + "%, " + r + "%)"
              },
              percentaString: l,
              hslString: function(t, e) {
                  if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                  return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
              },
              hslaString: u,
              hwbString: function(t, e) {
                  void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                  return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
              },
              keyword: function(t) {
                  return d[t.slice(0, 3)]
              }
          };
          var d = {};
          for (var f in i) d[i[f]] = f
      }, {
          6: 6
      }],
      3: [function(t, e, n) {
          var i = t(5),
              r = t(2),
              o = function(t) {
                  return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = {
                      rgb: [0, 0, 0],
                      hsl: [0, 0, 0],
                      hsv: [0, 0, 0],
                      hwb: [0, 0, 0],
                      cmyk: [0, 0, 0, 0],
                      alpha: 1
                  }, void("string" == typeof t ? (e = r.getRgba(t)) ? this.setValues("rgb", e) : (e = r.getHsla(t)) ? this.setValues("hsl", e) : (e = r.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t);
                  var e
              };
          o.prototype = {
              isValid: function() {
                  return this.valid
              },
              rgb: function() {
                  return this.setSpace("rgb", arguments)
              },
              hsl: function() {
                  return this.setSpace("hsl", arguments)
              },
              hsv: function() {
                  return this.setSpace("hsv", arguments)
              },
              hwb: function() {
                  return this.setSpace("hwb", arguments)
              },
              cmyk: function() {
                  return this.setSpace("cmyk", arguments)
              },
              rgbArray: function() {
                  return this.values.rgb
              },
              hslArray: function() {
                  return this.values.hsl
              },
              hsvArray: function() {
                  return this.values.hsv
              },
              hwbArray: function() {
                  var t = this.values;
                  return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
              },
              cmykArray: function() {
                  return this.values.cmyk
              },
              rgbaArray: function() {
                  var t = this.values;
                  return t.rgb.concat([t.alpha])
              },
              hslaArray: function() {
                  var t = this.values;
                  return t.hsl.concat([t.alpha])
              },
              alpha: function(t) {
                  return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
              },
              red: function(t) {
                  return this.setChannel("rgb", 0, t)
              },
              green: function(t) {
                  return this.setChannel("rgb", 1, t)
              },
              blue: function(t) {
                  return this.setChannel("rgb", 2, t)
              },
              hue: function(t) {
                  return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
              },
              saturation: function(t) {
                  return this.setChannel("hsl", 1, t)
              },
              lightness: function(t) {
                  return this.setChannel("hsl", 2, t)
              },
              saturationv: function(t) {
                  return this.setChannel("hsv", 1, t)
              },
              whiteness: function(t) {
                  return this.setChannel("hwb", 1, t)
              },
              blackness: function(t) {
                  return this.setChannel("hwb", 2, t)
              },
              value: function(t) {
                  return this.setChannel("hsv", 2, t)
              },
              cyan: function(t) {
                  return this.setChannel("cmyk", 0, t)
              },
              magenta: function(t) {
                  return this.setChannel("cmyk", 1, t)
              },
              yellow: function(t) {
                  return this.setChannel("cmyk", 2, t)
              },
              black: function(t) {
                  return this.setChannel("cmyk", 3, t)
              },
              hexString: function() {
                  return r.hexString(this.values.rgb)
              },
              rgbString: function() {
                  return r.rgbString(this.values.rgb, this.values.alpha)
              },
              rgbaString: function() {
                  return r.rgbaString(this.values.rgb, this.values.alpha)
              },
              percentString: function() {
                  return r.percentString(this.values.rgb, this.values.alpha)
              },
              hslString: function() {
                  return r.hslString(this.values.hsl, this.values.alpha)
              },
              hslaString: function() {
                  return r.hslaString(this.values.hsl, this.values.alpha)
              },
              hwbString: function() {
                  return r.hwbString(this.values.hwb, this.values.alpha)
              },
              keyword: function() {
                  return r.keyword(this.values.rgb, this.values.alpha)
              },
              rgbNumber: function() {
                  var t = this.values.rgb;
                  return t[0] << 16 | t[1] << 8 | t[2]
              },
              luminosity: function() {
                  for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                      var i = t[n] / 255;
                      e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                  }
                  return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
              },
              contrast: function(t) {
                  var e = this.luminosity(),
                      n = t.luminosity();
                  return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
              },
              level: function(t) {
                  var e = this.contrast(t);
                  return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
              },
              dark: function() {
                  var t = this.values.rgb;
                  return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
              },
              light: function() {
                  return !this.dark()
              },
              negate: function() {
                  for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                  return this.setValues("rgb", t), this
              },
              lighten: function(t) {
                  var e = this.values.hsl;
                  return e[2] += e[2] * t, this.setValues("hsl", e), this
              },
              darken: function(t) {
                  var e = this.values.hsl;
                  return e[2] -= e[2] * t, this.setValues("hsl", e), this
              },
              saturate: function(t) {
                  var e = this.values.hsl;
                  return e[1] += e[1] * t, this.setValues("hsl", e), this
              },
              desaturate: function(t) {
                  var e = this.values.hsl;
                  return e[1] -= e[1] * t, this.setValues("hsl", e), this
              },
              whiten: function(t) {
                  var e = this.values.hwb;
                  return e[1] += e[1] * t, this.setValues("hwb", e), this
              },
              blacken: function(t) {
                  var e = this.values.hwb;
                  return e[2] += e[2] * t, this.setValues("hwb", e), this
              },
              greyscale: function() {
                  var t = this.values.rgb,
                      e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                  return this.setValues("rgb", [e, e, e]), this
              },
              clearer: function(t) {
                  var e = this.values.alpha;
                  return this.setValues("alpha", e - e * t), this
              },
              opaquer: function(t) {
                  var e = this.values.alpha;
                  return this.setValues("alpha", e + e * t), this
              },
              rotate: function(t) {
                  var e = this.values.hsl,
                      n = (e[0] + t) % 360;
                  return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
              },
              mix: function(t, e) {
                  var n = t,
                      i = void 0 === e ? .5 : e,
                      r = 2 * i - 1,
                      o = this.alpha() - n.alpha(),
                      a = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
                      s = 1 - a;
                  return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
              },
              toJSON: function() {
                  return this.rgb()
              },
              clone: function() {
                  var t, e, n = new o,
                      i = this.values,
                      r = n.values;
                  for (var a in i) i.hasOwnProperty(a) && (t = i[a], "[object Array]" === (e = {}.toString.call(t)) ? r[a] = t.slice(0) : "[object Number]" === e ? r[a] = t : console.error("unexpected color value:", t));
                  return n
              }
          }, o.prototype.spaces = {
              rgb: ["red", "green", "blue"],
              hsl: ["hue", "saturation", "lightness"],
              hsv: ["hue", "saturation", "value"],
              hwb: ["hue", "whiteness", "blackness"],
              cmyk: ["cyan", "magenta", "yellow", "black"]
          }, o.prototype.maxes = {
              rgb: [255, 255, 255],
              hsl: [360, 100, 100],
              hsv: [360, 100, 100],
              hwb: [360, 100, 100],
              cmyk: [100, 100, 100, 100]
          }, o.prototype.getValues = function(t) {
              for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
              return 1 !== e.alpha && (n.a = e.alpha), n
          }, o.prototype.setValues = function(t, e) {
              var n, r, o = this.values,
                  a = this.spaces,
                  s = this.maxes,
                  l = 1;
              if (this.valid = !0, "alpha" === t) l = e;
              else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];
              else if (void 0 !== e[t.charAt(0)]) {
                  for (n = 0; n < t.length; n++) o[t][n] = e[t.charAt(n)];
                  l = e.a
              } else if (void 0 !== e[a[t][0]]) {
                  var u = a[t];
                  for (n = 0; n < t.length; n++) o[t][n] = e[u[n]];
                  l = e.alpha
              }
              if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;
              for (n = 0; n < t.length; n++) r = Math.max(0, Math.min(s[t][n], o[t][n])), o[t][n] = Math.round(r);
              for (var c in a) c !== t && (o[c] = i[t][c](o[t]));
              return !0
          }, o.prototype.setSpace = function(t, e) {
              var n = e[0];
              return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
          }, o.prototype.setChannel = function(t, e, n) {
              var i = this.values[t];
              return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
          }, "undefined" != typeof window && (window.Color = o), e.exports = o
      }, {
          2: 2,
          5: 5
      }],
      4: [function(t, e, n) {
          function i(t) {
              var e, n, i = t[0] / 255,
                  r = t[1] / 255,
                  o = t[2] / 255,
                  a = Math.min(i, r, o),
                  s = Math.max(i, r, o),
                  l = s - a;
              return s == a ? e = 0 : i == s ? e = (r - o) / l : r == s ? e = 2 + (o - i) / l : o == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
          }

          function o(t) {
              var e, n, i = t[0],
                  r = t[1],
                  o = t[2],
                  a = Math.min(i, r, o),
                  s = Math.max(i, r, o),
                  l = s - a;
              return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : i == s ? e = (r - o) / l : r == s ? e = 2 + (o - i) / l : o == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10]
          }

          function a(t) {
              var e = t[0],
                  n = t[1],
                  r = t[2];
              return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
          }

          function s(t) {
              var e, n = t[0] / 255,
                  i = t[1] / 255,
                  r = t[2] / 255;
              return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
          }

          function l(t) {
              return k[JSON.stringify(t)]
          }

          function u(t) {
              var e = t[0] / 255,
                  n = t[1] / 255,
                  i = t[2] / 255;
              return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
          }

          function c(t) {
              var e = u(t),
                  n = e[0],
                  i = e[1],
                  r = e[2];
              return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
          }

          function h(t) {
              var e, n, i, r, o, a = t[0] / 360,
                  s = t[1] / 100,
                  l = t[2] / 100;
              if (0 == s) return [o = 255 * l, o, o];
              e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
              for (var u = 0; u < 3; u++)(i = a + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, r[u] = 255 * o;
              return r
          }

          function d(t) {
              var e = t[0] / 60,
                  n = t[1] / 100,
                  i = t[2] / 100,
                  r = Math.floor(e) % 6,
                  o = e - Math.floor(e),
                  a = 255 * i * (1 - n),
                  s = 255 * i * (1 - n * o),
                  l = 255 * i * (1 - n * (1 - o));
              i *= 255;
              switch (r) {
                  case 0:
                      return [i, l, a];
                  case 1:
                      return [s, i, a];
                  case 2:
                      return [a, i, l];
                  case 3:
                      return [a, s, i];
                  case 4:
                      return [l, a, i];
                  case 5:
                      return [i, a, s]
              }
          }

          function f(t) {
              var e, n, i, o, a = t[0] / 360,
                  s = t[1] / 100,
                  l = t[2] / 100,
                  u = s + l;
              switch (u > 1 && (s /= u, l /= u), i = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (i = 1 - i), o = s + i * ((n = 1 - l) - s), e) {
                  default:
                      case 6:
                      case 0:
                      r = n,
                  g = o,
                  b = s;
                  break;
                  case 1:
                          r = o,
                      g = n,
                      b = s;
                      break;
                  case 2:
                          r = s,
                      g = n,
                      b = o;
                      break;
                  case 3:
                          r = s,
                      g = o,
                      b = n;
                      break;
                  case 4:
                          r = o,
                      g = s,
                      b = n;
                      break;
                  case 5:
                          r = n,
                      g = s,
                      b = o
              }
              return [255 * r, 255 * g, 255 * b]
          }

          function p(t) {
              var e = t[0] / 100,
                  n = t[1] / 100,
                  i = t[2] / 100,
                  r = t[3] / 100;
              return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
          }

          function m(t) {
              var e, n, i, r = t[0] / 100,
                  o = t[1] / 100,
                  a = t[2] / 100;
              return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, e = (e = 3.2406 * r + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
          }

          function v(t) {
              var e = t[0],
                  n = t[1],
                  i = t[2];
              return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
          }

          function y(t) {
              var e, n, i, r, o = t[0],
                  a = t[1],
                  s = t[2];
              return o <= 8 ? r = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + r, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)]
          }

          function x(t) {
              var e, n = t[0],
                  i = t[1],
                  r = t[2];
              return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
          }

          function w(t) {
              return m(y(t))
          }

          function D(t) {
              var e, n = t[0],
                  i = t[1];
              return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
          }

          function _(t) {
              return C[t]
          }
          e.exports = {
              rgb2hsl: i,
              rgb2hsv: o,
              rgb2hwb: a,
              rgb2cmyk: s,
              rgb2keyword: l,
              rgb2xyz: u,
              rgb2lab: c,
              rgb2lch: function(t) {
                  return x(c(t))
              },
              hsl2rgb: h,
              hsl2hsv: function(t) {
                  var e = t[0],
                      n = t[1] / 100,
                      i = t[2] / 100;
                  if (0 === i) return [0, 0, 0];
                  return [e, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
              },
              hsl2hwb: function(t) {
                  return a(h(t))
              },
              hsl2cmyk: function(t) {
                  return s(h(t))
              },
              hsl2keyword: function(t) {
                  return l(h(t))
              },
              hsv2rgb: d,
              hsv2hsl: function(t) {
                  var e, n, i = t[0],
                      r = t[1] / 100,
                      o = t[2] / 100;
                  return e = r * o, [i, 100 * (e = (e /= (n = (2 - r) * o) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
              },
              hsv2hwb: function(t) {
                  return a(d(t))
              },
              hsv2cmyk: function(t) {
                  return s(d(t))
              },
              hsv2keyword: function(t) {
                  return l(d(t))
              },
              hwb2rgb: f,
              hwb2hsl: function(t) {
                  return i(f(t))
              },
              hwb2hsv: function(t) {
                  return o(f(t))
              },
              hwb2cmyk: function(t) {
                  return s(f(t))
              },
              hwb2keyword: function(t) {
                  return l(f(t))
              },
              cmyk2rgb: p,
              cmyk2hsl: function(t) {
                  return i(p(t))
              },
              cmyk2hsv: function(t) {
                  return o(p(t))
              },
              cmyk2hwb: function(t) {
                  return a(p(t))
              },
              cmyk2keyword: function(t) {
                  return l(p(t))
              },
              keyword2rgb: _,
              keyword2hsl: function(t) {
                  return i(_(t))
              },
              keyword2hsv: function(t) {
                  return o(_(t))
              },
              keyword2hwb: function(t) {
                  return a(_(t))
              },
              keyword2cmyk: function(t) {
                  return s(_(t))
              },
              keyword2lab: function(t) {
                  return c(_(t))
              },
              keyword2xyz: function(t) {
                  return u(_(t))
              },
              xyz2rgb: m,
              xyz2lab: v,
              xyz2lch: function(t) {
                  return x(v(t))
              },
              lab2xyz: y,
              lab2rgb: w,
              lab2lch: x,
              lch2lab: D,
              lch2xyz: function(t) {
                  return y(D(t))
              },
              lch2rgb: function(t) {
                  return w(D(t))
              }
          };
          var C = {
                  aliceblue: [240, 248, 255],
                  antiquewhite: [250, 235, 215],
                  aqua: [0, 255, 255],
                  aquamarine: [127, 255, 212],
                  azure: [240, 255, 255],
                  beige: [245, 245, 220],
                  bisque: [255, 228, 196],
                  black: [0, 0, 0],
                  blanchedalmond: [255, 235, 205],
                  blue: [0, 0, 255],
                  blueviolet: [138, 43, 226],
                  brown: [165, 42, 42],
                  burlywood: [222, 184, 135],
                  cadetblue: [95, 158, 160],
                  chartreuse: [127, 255, 0],
                  chocolate: [210, 105, 30],
                  coral: [255, 127, 80],
                  cornflowerblue: [100, 149, 237],
                  cornsilk: [255, 248, 220],
                  crimson: [220, 20, 60],
                  cyan: [0, 255, 255],
                  darkblue: [0, 0, 139],
                  darkcyan: [0, 139, 139],
                  darkgoldenrod: [184, 134, 11],
                  darkgray: [169, 169, 169],
                  darkgreen: [0, 100, 0],
                  darkgrey: [169, 169, 169],
                  darkkhaki: [189, 183, 107],
                  darkmagenta: [139, 0, 139],
                  darkolivegreen: [85, 107, 47],
                  darkorange: [255, 140, 0],
                  darkorchid: [153, 50, 204],
                  darkred: [139, 0, 0],
                  darksalmon: [233, 150, 122],
                  darkseagreen: [143, 188, 143],
                  darkslateblue: [72, 61, 139],
                  darkslategray: [47, 79, 79],
                  darkslategrey: [47, 79, 79],
                  darkturquoise: [0, 206, 209],
                  darkviolet: [148, 0, 211],
                  deeppink: [255, 20, 147],
                  deepskyblue: [0, 191, 255],
                  dimgray: [105, 105, 105],
                  dimgrey: [105, 105, 105],
                  dodgerblue: [30, 144, 255],
                  firebrick: [178, 34, 34],
                  floralwhite: [255, 250, 240],
                  forestgreen: [34, 139, 34],
                  fuchsia: [255, 0, 255],
                  gainsboro: [220, 220, 220],
                  ghostwhite: [248, 248, 255],
                  gold: [255, 215, 0],
                  goldenrod: [218, 165, 32],
                  gray: [128, 128, 128],
                  green: [0, 128, 0],
                  greenyellow: [173, 255, 47],
                  grey: [128, 128, 128],
                  honeydew: [240, 255, 240],
                  hotpink: [255, 105, 180],
                  indianred: [205, 92, 92],
                  indigo: [75, 0, 130],
                  ivory: [255, 255, 240],
                  khaki: [240, 230, 140],
                  lavender: [230, 230, 250],
                  lavenderblush: [255, 240, 245],
                  lawngreen: [124, 252, 0],
                  lemonchiffon: [255, 250, 205],
                  lightblue: [173, 216, 230],
                  lightcoral: [240, 128, 128],
                  lightcyan: [224, 255, 255],
                  lightgoldenrodyellow: [250, 250, 210],
                  lightgray: [211, 211, 211],
                  lightgreen: [144, 238, 144],
                  lightgrey: [211, 211, 211],
                  lightpink: [255, 182, 193],
                  lightsalmon: [255, 160, 122],
                  lightseagreen: [32, 178, 170],
                  lightskyblue: [135, 206, 250],
                  lightslategray: [119, 136, 153],
                  lightslategrey: [119, 136, 153],
                  lightsteelblue: [176, 196, 222],
                  lightyellow: [255, 255, 224],
                  lime: [0, 255, 0],
                  limegreen: [50, 205, 50],
                  linen: [250, 240, 230],
                  magenta: [255, 0, 255],
                  maroon: [128, 0, 0],
                  mediumaquamarine: [102, 205, 170],
                  mediumblue: [0, 0, 205],
                  mediumorchid: [186, 85, 211],
                  mediumpurple: [147, 112, 219],
                  mediumseagreen: [60, 179, 113],
                  mediumslateblue: [123, 104, 238],
                  mediumspringgreen: [0, 250, 154],
                  mediumturquoise: [72, 209, 204],
                  mediumvioletred: [199, 21, 133],
                  midnightblue: [25, 25, 112],
                  mintcream: [245, 255, 250],
                  mistyrose: [255, 228, 225],
                  moccasin: [255, 228, 181],
                  navajowhite: [255, 222, 173],
                  navy: [0, 0, 128],
                  oldlace: [253, 245, 230],
                  olive: [128, 128, 0],
                  olivedrab: [107, 142, 35],
                  orange: [255, 165, 0],
                  orangered: [255, 69, 0],
                  orchid: [218, 112, 214],
                  palegoldenrod: [238, 232, 170],
                  palegreen: [152, 251, 152],
                  paleturquoise: [175, 238, 238],
                  palevioletred: [219, 112, 147],
                  papayawhip: [255, 239, 213],
                  peachpuff: [255, 218, 185],
                  peru: [205, 133, 63],
                  pink: [255, 192, 203],
                  plum: [221, 160, 221],
                  powderblue: [176, 224, 230],
                  purple: [128, 0, 128],
                  rebeccapurple: [102, 51, 153],
                  red: [255, 0, 0],
                  rosybrown: [188, 143, 143],
                  royalblue: [65, 105, 225],
                  saddlebrown: [139, 69, 19],
                  salmon: [250, 128, 114],
                  sandybrown: [244, 164, 96],
                  seagreen: [46, 139, 87],
                  seashell: [255, 245, 238],
                  sienna: [160, 82, 45],
                  silver: [192, 192, 192],
                  skyblue: [135, 206, 235],
                  slateblue: [106, 90, 205],
                  slategray: [112, 128, 144],
                  slategrey: [112, 128, 144],
                  snow: [255, 250, 250],
                  springgreen: [0, 255, 127],
                  steelblue: [70, 130, 180],
                  tan: [210, 180, 140],
                  teal: [0, 128, 128],
                  thistle: [216, 191, 216],
                  tomato: [255, 99, 71],
                  turquoise: [64, 224, 208],
                  violet: [238, 130, 238],
                  wheat: [245, 222, 179],
                  white: [255, 255, 255],
                  whitesmoke: [245, 245, 245],
                  yellow: [255, 255, 0],
                  yellowgreen: [154, 205, 50]
              },
              k = {};
          for (var T in C) k[JSON.stringify(C[T])] = T
      }, {}],
      5: [function(t, e, n) {
          var i = t(4),
              r = function() {
                  return new u
              };
          for (var o in i) {
              r[o + "Raw"] = function(t) {
                  return function(e) {
                      return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
                  }
              }(o);
              var a = /(\w+)2(\w+)/.exec(o),
                  s = a[1],
                  l = a[2];
              (r[s] = r[s] || {})[l] = r[o] = function(t) {
                  return function(e) {
                      "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                      var n = i[t](e);
                      if ("string" == typeof n || void 0 === n) return n;
                      for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
                      return n
                  }
              }(o)
          }
          var u = function() {
              this.convs = {}
          };
          u.prototype.routeSpace = function(t, e) {
              var n = e[0];
              return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
          }, u.prototype.setValues = function(t, e) {
              return this.space = t, this.convs = {}, this.convs[t] = e, this
          }, u.prototype.getValues = function(t) {
              var e = this.convs[t];
              if (!e) {
                  var n = this.space,
                      i = this.convs[n];
                  e = r[n][t](i), this.convs[t] = e
              }
              return e
          }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
              u.prototype[t] = function(e) {
                  return this.routeSpace(t, arguments)
              }
          }), e.exports = r
      }, {
          4: 4
      }],
      6: [function(t, e, n) {
          "use strict";
          e.exports = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50]
          }
      }, {}],
      7: [function(t, e, n) {
          var i = t(30)();
          i.helpers = t(46), t(28)(i), i.Animation = t(22), i.animationService = t(23), i.defaults = t(26), i.Element = t(27), i.elements = t(41), i.Interaction = t(29), i.layouts = t(31), i.platform = t(49), i.plugins = t(32), i.Scale = t(33), i.scaleService = t(34), i.Ticks = t(35), i.Tooltip = t(36), t(24)(i), t(25)(i), t(56)(i), t(54)(i), t(55)(i), t(57)(i), t(58)(i), t(59)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
          var r = t(50);
          for (var o in r) r.hasOwnProperty(o) && i.plugins.register(r[o]);
          i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = r.legend._element, i.Title = r.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
      }, {
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          17: 17,
          18: 18,
          19: 19,
          20: 20,
          21: 21,
          22: 22,
          23: 23,
          24: 24,
          25: 25,
          26: 26,
          27: 27,
          28: 28,
          29: 29,
          30: 30,
          31: 31,
          32: 32,
          33: 33,
          34: 34,
          35: 35,
          36: 36,
          41: 41,
          46: 46,
          49: 49,
          50: 50,
          54: 54,
          55: 55,
          56: 56,
          57: 57,
          58: 58,
          59: 59,
          8: 8,
          9: 9
      }],
      8: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.Bar = function(e, n) {
                  return n.type = "bar", new t(e, n)
              }
          }
      }, {}],
      9: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.Bubble = function(e, n) {
                  return n.type = "bubble", new t(e, n)
              }
          }
      }, {}],
      10: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.Doughnut = function(e, n) {
                  return n.type = "doughnut", new t(e, n)
              }
          }
      }, {}],
      11: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.Line = function(e, n) {
                  return n.type = "line", new t(e, n)
              }
          }
      }, {}],
      12: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.PolarArea = function(e, n) {
                  return n.type = "polarArea", new t(e, n)
              }
          }
      }, {}],
      13: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.Radar = function(e, n) {
                  return n.type = "radar", new t(e, n)
              }
          }
      }, {}],
      14: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              t.Scatter = function(e, n) {
                  return n.type = "scatter", new t(e, n)
              }
          }
      }, {}],
      15: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("bar", {
              hover: {
                  mode: "label"
              },
              scales: {
                  xAxes: [{
                      type: "category",
                      categoryPercentage: .8,
                      barPercentage: .9,
                      offset: !0,
                      gridLines: {
                          offsetGridLines: !0
                      }
                  }],
                  yAxes: [{
                      type: "linear"
                  }]
              }
          }), i._set("horizontalBar", {
              hover: {
                  mode: "index",
                  axis: "y"
              },
              scales: {
                  xAxes: [{
                      type: "linear",
                      position: "bottom"
                  }],
                  yAxes: [{
                      position: "left",
                      type: "category",
                      categoryPercentage: .8,
                      barPercentage: .9,
                      offset: !0,
                      gridLines: {
                          offsetGridLines: !0
                      }
                  }]
              },
              elements: {
                  rectangle: {
                      borderSkipped: "left"
                  }
              },
              tooltips: {
                  callbacks: {
                      title: function(t, e) {
                          var n = "";
                          return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                      },
                      label: function(t, e) {
                          return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                      }
                  },
                  mode: "index",
                  axis: "y"
              }
          }), e.exports = function(t) {
              t.controllers.bar = t.DatasetController.extend({
                  dataElementType: r.Rectangle,
                  initialize: function() {
                      var e;
                      t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                  },
                  update: function(t) {
                      var e, n, i = this.getMeta().data;
                      for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
                  },
                  updateElement: function(t, e, n) {
                      var i = this,
                          r = i.chart,
                          a = i.getMeta(),
                          s = i.getDataset(),
                          l = t.custom || {},
                          u = r.options.elements.rectangle;
                      t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                          datasetLabel: s.label,
                          label: r.data.labels[e],
                          borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                          backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                          borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                          borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                      }, i.updateElementGeometry(t, e, n), t.pivot()
                  },
                  updateElementGeometry: function(t, e, n) {
                      var i = this,
                          r = t._model,
                          o = i.getValueScale(),
                          a = o.getBasePixel(),
                          s = o.isHorizontal(),
                          l = i._ruler || i.getRuler(),
                          u = i.calculateBarValuePixels(i.index, e),
                          c = i.calculateBarIndexPixels(i.index, e, l);
                      r.horizontal = s, r.base = n ? a : u.base, r.x = s ? n ? a : u.head : c.center, r.y = s ? c.center : n ? a : u.head, r.height = s ? c.size : void 0, r.width = s ? void 0 : c.size
                  },
                  getValueScaleId: function() {
                      return this.getMeta().yAxisID
                  },
                  getIndexScaleId: function() {
                      return this.getMeta().xAxisID
                  },
                  getValueScale: function() {
                      return this.getScaleForId(this.getValueScaleId())
                  },
                  getIndexScale: function() {
                      return this.getScaleForId(this.getIndexScaleId())
                  },
                  _getStacks: function(t) {
                      var e, n, i = this.chart,
                          r = this.getIndexScale().options.stacked,
                          o = void 0 === t ? i.data.datasets.length : t + 1,
                          a = [];
                      for (e = 0; e < o; ++e)(n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === r || !0 === r && -1 === a.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
                      return a
                  },
                  getStackCount: function() {
                      return this._getStacks().length
                  },
                  getStackIndex: function(t, e) {
                      var n = this._getStacks(t),
                          i = void 0 !== e ? n.indexOf(e) : -1;
                      return -1 === i ? n.length - 1 : i
                  },
                  getRuler: function() {
                      var t, e, n = this.getIndexScale(),
                          i = this.getStackCount(),
                          r = this.index,
                          a = n.isHorizontal(),
                          s = a ? n.left : n.top,
                          l = s + (a ? n.width : n.height),
                          u = [];
                      for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(n.getPixelForValue(null, t, r));
                      return {
                          min: o.isNullOrUndef(n.options.barThickness) ? function(t, e) {
                              var n, i, r, o, a = t.isHorizontal() ? t.width : t.height,
                                  s = t.getTicks();
                              for (r = 1, o = e.length; r < o; ++r) a = Math.min(a, e[r] - e[r - 1]);
                              for (r = 0, o = s.length; r < o; ++r) i = t.getPixelForTick(r), a = r > 0 ? Math.min(a, i - n) : a, n = i;
                              return a
                          }(n, u) : -1,
                          pixels: u,
                          start: s,
                          end: l,
                          stackCount: i,
                          scale: n
                      }
                  },
                  calculateBarValuePixels: function(t, e) {
                      var n, i, r, o, a, s, l = this.chart,
                          u = this.getMeta(),
                          c = this.getValueScale(),
                          h = l.data.datasets,
                          d = c.getRightValue(h[t].data[e]),
                          f = c.options.stacked,
                          p = u.stack,
                          g = 0;
                      if (f || void 0 === f && void 0 !== p)
                          for (n = 0; n < t; ++n)(i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (r = c.getRightValue(h[n].data[e]), (d < 0 && r < 0 || d >= 0 && r > 0) && (g += r));
                      return o = c.getPixelForValue(g), {
                          size: s = ((a = c.getPixelForValue(g + d)) - o) / 2,
                          base: o,
                          head: a,
                          center: a + s / 2
                      }
                  },
                  calculateBarIndexPixels: function(t, e, n) {
                      var i = n.scale.options,
                          r = "flex" === i.barThickness ? function(t, e, n) {
                              var i, r = e.pixels,
                                  o = r[t],
                                  a = t > 0 ? r[t - 1] : null,
                                  s = t < r.length - 1 ? r[t + 1] : null,
                                  l = n.categoryPercentage;
                              return null === a && (a = o - (null === s ? e.end - o : s - o)), null === s && (s = o + o - a), i = o - (o - a) / 2 * l, {
                                  chunk: (s - a) / 2 * l / e.stackCount,
                                  ratio: n.barPercentage,
                                  start: i
                              }
                          }(e, n, i) : function(t, e, n) {
                              var i, r, a = n.barThickness,
                                  s = e.stackCount,
                                  l = e.pixels[t];
                              return o.isNullOrUndef(a) ? (i = e.min * n.categoryPercentage, r = n.barPercentage) : (i = a * s, r = 1), {
                                  chunk: i / s,
                                  ratio: r,
                                  start: l - i / 2
                              }
                          }(e, n, i),
                          a = this.getStackIndex(t, this.getMeta().stack),
                          s = r.start + r.chunk * a + r.chunk / 2,
                          l = Math.min(o.valueOrDefault(i.maxBarThickness, 1 / 0), r.chunk * r.ratio);
                      return {
                          base: s - l / 2,
                          head: s + l / 2,
                          center: s,
                          size: l
                      }
                  },
                  draw: function() {
                      var t = this.chart,
                          e = this.getValueScale(),
                          n = this.getMeta().data,
                          i = this.getDataset(),
                          r = n.length,
                          a = 0;
                      for (o.canvas.clipArea(t.ctx, t.chartArea); a < r; ++a) isNaN(e.getRightValue(i.data[a])) || n[a].draw();
                      o.canvas.unclipArea(t.ctx)
                  }
              }), t.controllers.horizontalBar = t.controllers.bar.extend({
                  getValueScaleId: function() {
                      return this.getMeta().xAxisID
                  },
                  getIndexScaleId: function() {
                      return this.getMeta().yAxisID
                  }
              })
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      16: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("bubble", {
              hover: {
                  mode: "single"
              },
              scales: {
                  xAxes: [{
                      type: "linear",
                      position: "bottom",
                      id: "x-axis-0"
                  }],
                  yAxes: [{
                      type: "linear",
                      position: "left",
                      id: "y-axis-0"
                  }]
              },
              tooltips: {
                  callbacks: {
                      title: function() {
                          return ""
                      },
                      label: function(t, e) {
                          var n = e.datasets[t.datasetIndex].label || "",
                              i = e.datasets[t.datasetIndex].data[t.index];
                          return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                      }
                  }
              }
          }), e.exports = function(t) {
              t.controllers.bubble = t.DatasetController.extend({
                  dataElementType: r.Point,
                  update: function(t) {
                      var e = this,
                          n = e.getMeta().data;
                      o.each(n, function(n, i) {
                          e.updateElement(n, i, t)
                      })
                  },
                  updateElement: function(t, e, n) {
                      var i = this,
                          r = i.getMeta(),
                          o = t.custom || {},
                          a = i.getScaleForId(r.xAxisID),
                          s = i.getScaleForId(r.yAxisID),
                          l = i._resolveElementOptions(t, e),
                          u = i.getDataset().data[e],
                          c = i.index,
                          h = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                          d = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                      t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                          backgroundColor: l.backgroundColor,
                          borderColor: l.borderColor,
                          borderWidth: l.borderWidth,
                          hitRadius: l.hitRadius,
                          pointStyle: l.pointStyle,
                          rotation: l.rotation,
                          radius: n ? 0 : l.radius,
                          skip: o.skip || isNaN(h) || isNaN(d),
                          x: h,
                          y: d
                      }, t.pivot()
                  },
                  setHoverStyle: function(t) {
                      var e = t._model,
                          n = t._options;
                      t.$previousStyle = {
                          backgroundColor: e.backgroundColor,
                          borderColor: e.borderColor,
                          borderWidth: e.borderWidth,
                          radius: e.radius
                      }, e.backgroundColor = o.valueOrDefault(n.hoverBackgroundColor, o.getHoverColor(n.backgroundColor)), e.borderColor = o.valueOrDefault(n.hoverBorderColor, o.getHoverColor(n.borderColor)), e.borderWidth = o.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                  },
                  _resolveElementOptions: function(t, e) {
                      var n, i, r, a = this.chart,
                          s = a.data.datasets[this.index],
                          l = t.custom || {},
                          u = a.options.elements.point,
                          c = o.options.resolve,
                          h = s.data[e],
                          d = {},
                          f = {
                              chart: a,
                              dataIndex: e,
                              dataset: s,
                              datasetIndex: this.index
                          },
                          p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                      for (n = 0, i = p.length; n < i; ++n) d[r = p[n]] = c([l[r], s[r], u[r]], f, e);
                      return d.radius = c([l.radius, h ? h.r : void 0, s.radius, u.radius], f, e), d
                  }
              })
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      17: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("doughnut", {
              animation: {
                  animateRotate: !0,
                  animateScale: !1
              },
              hover: {
                  mode: "single"
              },
              legendCallback: function(t) {
                  var e = [];
                  e.push('<ul class="' + t.id + '-legend">');
                  var n = t.data,
                      i = n.datasets,
                      r = n.labels;
                  if (i.length)
                      for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
                  return e.push("</ul>"), e.join("")
              },
              legend: {
                  labels: {
                      generateLabels: function(t) {
                          var e = t.data;
                          return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                              var r = t.getDatasetMeta(0),
                                  a = e.datasets[0],
                                  s = r.data[i],
                                  l = s && s.custom || {},
                                  u = o.valueAtIndexOrDefault,
                                  c = t.options.elements.arc;
                              return {
                                  text: n,
                                  fillStyle: l.backgroundColor ? l.backgroundColor : u(a.backgroundColor, i, c.backgroundColor),
                                  strokeStyle: l.borderColor ? l.borderColor : u(a.borderColor, i, c.borderColor),
                                  lineWidth: l.borderWidth ? l.borderWidth : u(a.borderWidth, i, c.borderWidth),
                                  hidden: isNaN(a.data[i]) || r.data[i].hidden,
                                  index: i
                              }
                          }) : []
                      }
                  },
                  onClick: function(t, e) {
                      var n, i, r, o = e.index,
                          a = this.chart;
                      for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                      a.update()
                  }
              },
              cutoutPercentage: 50,
              rotation: -.5 * Math.PI,
              circumference: 2 * Math.PI,
              tooltips: {
                  callbacks: {
                      title: function() {
                          return ""
                      },
                      label: function(t, e) {
                          var n = e.labels[t.index],
                              i = ": " + e.datasets[t.datasetIndex].data[t.index];
                          return o.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                      }
                  }
              }
          }), i._set("pie", o.clone(i.doughnut)), i._set("pie", {
              cutoutPercentage: 0
          }), e.exports = function(t) {
              t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                  dataElementType: r.Arc,
                  linkScales: o.noop,
                  getRingIndex: function(t) {
                      for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                      return e
                  },
                  update: function(t) {
                      var e = this,
                          n = e.chart,
                          i = n.chartArea,
                          r = n.options,
                          a = r.elements.arc,
                          s = i.right - i.left - a.borderWidth,
                          l = i.bottom - i.top - a.borderWidth,
                          u = Math.min(s, l),
                          c = {
                              x: 0,
                              y: 0
                          },
                          h = e.getMeta(),
                          d = r.cutoutPercentage,
                          f = r.circumference;
                      if (f < 2 * Math.PI) {
                          var p = r.rotation % (2 * Math.PI),
                              g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                              m = {
                                  x: Math.cos(p),
                                  y: Math.sin(p)
                              },
                              v = {
                                  x: Math.cos(g),
                                  y: Math.sin(g)
                              },
                              y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                              b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                              x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                              w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                              D = d / 100,
                              _ = {
                                  x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : D), v.x * (v.x < 0 ? 1 : D)),
                                  y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : D), v.y * (v.y < 0 ? 1 : D))
                              },
                              C = {
                                  x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : D), v.x * (v.x > 0 ? 1 : D)),
                                  y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : D), v.y * (v.y > 0 ? 1 : D))
                              },
                              k = {
                                  width: .5 * (C.x - _.x),
                                  height: .5 * (C.y - _.y)
                              };
                          u = Math.min(s / k.width, l / k.height), c = {
                              x: -.5 * (C.x + _.x),
                              y: -.5 * (C.y + _.y)
                          }
                      }
                      n.borderWidth = e.getMaxBorderWidth(h.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(d ? n.outerRadius / 100 * d : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, h.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), o.each(h.data, function(n, i) {
                          e.updateElement(n, i, t)
                      })
                  },
                  updateElement: function(t, e, n) {
                      var i = this,
                          r = i.chart,
                          a = r.chartArea,
                          s = r.options,
                          l = s.animation,
                          u = (a.left + a.right) / 2,
                          c = (a.top + a.bottom) / 2,
                          h = s.rotation,
                          d = s.rotation,
                          f = i.getDataset(),
                          p = n && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                          g = n && l.animateScale ? 0 : i.innerRadius,
                          m = n && l.animateScale ? 0 : i.outerRadius,
                          v = o.valueAtIndexOrDefault;
                      o.extend(t, {
                          _datasetIndex: i.index,
                          _index: e,
                          _model: {
                              x: u + r.offsetX,
                              y: c + r.offsetY,
                              startAngle: h,
                              endAngle: d,
                              circumference: p,
                              outerRadius: m,
                              innerRadius: g,
                              label: v(f.label, e, r.data.labels[e])
                          }
                      });
                      var y = t._model,
                          b = t.custom || {},
                          x = o.valueAtIndexOrDefault,
                          w = this.chart.options.elements.arc;
                      y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(f.backgroundColor, e, w.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(f.borderColor, e, w.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(f.borderWidth, e, w.borderWidth), n && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : i.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                  },
                  calculateTotal: function() {
                      var t, e = this.getDataset(),
                          n = this.getMeta(),
                          i = 0;
                      return o.each(n.data, function(n, r) {
                          t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t))
                      }), i
                  },
                  calculateCircumference: function(t) {
                      var e = this.getMeta().total;
                      return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                  },
                  getMaxBorderWidth: function(t) {
                      for (var e, n, i = 0, r = this.index, o = t.length, a = 0; a < o; a++) e = t[a]._model ? t[a]._model.borderWidth : 0, i = (n = t[a]._chart ? t[a]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
                      return i
                  }
              })
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      18: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("line", {
              showLines: !0,
              spanGaps: !1,
              hover: {
                  mode: "label"
              },
              scales: {
                  xAxes: [{
                      type: "category",
                      id: "x-axis-0"
                  }],
                  yAxes: [{
                      type: "linear",
                      id: "y-axis-0"
                  }]
              }
          }), e.exports = function(t) {
              function e(t, e) {
                  return o.valueOrDefault(t.showLine, e.showLines)
              }
              t.controllers.line = t.DatasetController.extend({
                  datasetElementType: r.Line,
                  dataElementType: r.Point,
                  update: function(t) {
                      var n, i, r, a = this,
                          s = a.getMeta(),
                          l = s.dataset,
                          u = s.data || [],
                          c = a.chart.options,
                          h = c.elements.line,
                          d = a.getScaleForId(s.yAxisID),
                          f = a.getDataset(),
                          p = e(f, c);
                      for (p && (r = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = d, l._datasetIndex = a.index, l._children = u, l._model = {
                              spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
                              tension: r.tension ? r.tension : o.valueOrDefault(f.lineTension, h.tension),
                              backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || h.backgroundColor,
                              borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || h.borderWidth,
                              borderColor: r.borderColor ? r.borderColor : f.borderColor || h.borderColor,
                              borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || h.borderCapStyle,
                              borderDash: r.borderDash ? r.borderDash : f.borderDash || h.borderDash,
                              borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || h.borderDashOffset,
                              borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || h.borderJoinStyle,
                              fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : h.fill,
                              steppedLine: r.steppedLine ? r.steppedLine : o.valueOrDefault(f.steppedLine, h.stepped),
                              cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, h.cubicInterpolationMode)
                          }, l.pivot()), n = 0, i = u.length; n < i; ++n) a.updateElement(u[n], n, t);
                      for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) u[n].pivot()
                  },
                  getPointBackgroundColor: function(t, e) {
                      var n = this.chart.options.elements.point.backgroundColor,
                          i = this.getDataset(),
                          r = t.custom || {};
                      return r.backgroundColor ? n = r.backgroundColor : i.pointBackgroundColor ? n = o.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n
                  },
                  getPointBorderColor: function(t, e) {
                      var n = this.chart.options.elements.point.borderColor,
                          i = this.getDataset(),
                          r = t.custom || {};
                      return r.borderColor ? n = r.borderColor : i.pointBorderColor ? n = o.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n
                  },
                  getPointBorderWidth: function(t, e) {
                      var n = this.chart.options.elements.point.borderWidth,
                          i = this.getDataset(),
                          r = t.custom || {};
                      return isNaN(r.borderWidth) ? !isNaN(i.pointBorderWidth) || o.isArray(i.pointBorderWidth) ? n = o.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = r.borderWidth, n
                  },
                  getPointRotation: function(t, e) {
                      var n = this.chart.options.elements.point.rotation,
                          i = this.getDataset(),
                          r = t.custom || {};
                      return isNaN(r.rotation) ? isNaN(i.pointRotation) && !o.isArray(i.pointRotation) || (n = o.valueAtIndexOrDefault(i.pointRotation, e, n)) : n = r.rotation, n
                  },
                  updateElement: function(t, e, n) {
                      var i, r, a = this,
                          s = a.getMeta(),
                          l = t.custom || {},
                          u = a.getDataset(),
                          c = a.index,
                          h = u.data[e],
                          d = a.getScaleForId(s.yAxisID),
                          f = a.getScaleForId(s.xAxisID),
                          p = a.chart.options.elements.point;
                      void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == typeof h ? h : NaN, e, c), r = n ? d.getBasePixel() : a.calculatePointY(h, e, c), t._xScale = f, t._yScale = d, t._datasetIndex = c, t._index = e, t._model = {
                          x: i,
                          y: r,
                          skip: l.skip || isNaN(i) || isNaN(r),
                          radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
                          pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
                          rotation: a.getPointRotation(t, e),
                          backgroundColor: a.getPointBackgroundColor(t, e),
                          borderColor: a.getPointBorderColor(t, e),
                          borderWidth: a.getPointBorderWidth(t, e),
                          tension: s.dataset._model ? s.dataset._model.tension : 0,
                          steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                          hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
                      }
                  },
                  calculatePointY: function(t, e, n) {
                      var i, r, o, a = this.chart,
                          s = this.getMeta(),
                          l = this.getScaleForId(s.yAxisID),
                          u = 0,
                          c = 0;
                      if (l.options.stacked) {
                          for (i = 0; i < n; i++)
                              if (r = a.data.datasets[i], "line" === (o = a.getDatasetMeta(i)).type && o.yAxisID === l.id && a.isDatasetVisible(i)) {
                                  var h = Number(l.getRightValue(r.data[e]));
                                  h < 0 ? c += h || 0 : u += h || 0
                              }
                          var d = Number(l.getRightValue(t));
                          return d < 0 ? l.getPixelForValue(c + d) : l.getPixelForValue(u + d)
                      }
                      return l.getPixelForValue(t)
                  },
                  updateBezierControlPoints: function() {
                      var t, e, n, i, r = this.getMeta(),
                          a = this.chart.chartArea,
                          s = r.data || [];

                      function l(t, e, n) {
                          return Math.max(Math.min(t, n), e)
                      }
                      if (r.dataset._model.spanGaps && (s = s.filter(function(t) {
                              return !t._model.skip
                          })), "monotone" === r.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s);
                      else
                          for (t = 0, e = s.length; t < e; ++t) n = s[t]._model, i = o.splineCurve(o.previousItem(s, t)._model, n, o.nextItem(s, t)._model, r.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                      if (this.chart.options.elements.line.capBezierPoints)
                          for (t = 0, e = s.length; t < e; ++t)(n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, a.left, a.right), n.controlPointPreviousY = l(n.controlPointPreviousY, a.top, a.bottom), n.controlPointNextX = l(n.controlPointNextX, a.left, a.right), n.controlPointNextY = l(n.controlPointNextY, a.top, a.bottom)
                  },
                  draw: function() {
                      var t, n = this.chart,
                          i = this.getMeta(),
                          r = i.data || [],
                          a = n.chartArea,
                          s = r.length,
                          l = 0;
                      for (e(this.getDataset(), n.options) && (t = (i.dataset._model.borderWidth || 0) / 2, o.canvas.clipArea(n.ctx, {
                              left: a.left,
                              right: a.right,
                              top: a.top - t,
                              bottom: a.bottom + t
                          }), i.dataset.draw(), o.canvas.unclipArea(n.ctx)); l < s; ++l) r[l].draw(a)
                  },
                  setHoverStyle: function(t) {
                      var e = this.chart.data.datasets[t._datasetIndex],
                          n = t._index,
                          i = t.custom || {},
                          r = t._model;
                      t.$previousStyle = {
                          backgroundColor: r.backgroundColor,
                          borderColor: r.borderColor,
                          borderWidth: r.borderWidth,
                          radius: r.radius
                      }, r.backgroundColor = i.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, r.borderWidth), r.radius = i.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)
                  }
              })
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      19: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("polarArea", {
              scale: {
                  type: "radialLinear",
                  angleLines: {
                      display: !1
                  },
                  gridLines: {
                      circular: !0
                  },
                  pointLabels: {
                      display: !1
                  },
                  ticks: {
                      beginAtZero: !0
                  }
              },
              animation: {
                  animateRotate: !0,
                  animateScale: !0
              },
              startAngle: -.5 * Math.PI,
              legendCallback: function(t) {
                  var e = [];
                  e.push('<ul class="' + t.id + '-legend">');
                  var n = t.data,
                      i = n.datasets,
                      r = n.labels;
                  if (i.length)
                      for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
                  return e.push("</ul>"), e.join("")
              },
              legend: {
                  labels: {
                      generateLabels: function(t) {
                          var e = t.data;
                          return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                              var r = t.getDatasetMeta(0),
                                  a = e.datasets[0],
                                  s = r.data[i].custom || {},
                                  l = o.valueAtIndexOrDefault,
                                  u = t.options.elements.arc;
                              return {
                                  text: n,
                                  fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, i, u.backgroundColor),
                                  strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, i, u.borderColor),
                                  lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, i, u.borderWidth),
                                  hidden: isNaN(a.data[i]) || r.data[i].hidden,
                                  index: i
                              }
                          }) : []
                      }
                  },
                  onClick: function(t, e) {
                      var n, i, r, o = e.index,
                          a = this.chart;
                      for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
                      a.update()
                  }
              },
              tooltips: {
                  callbacks: {
                      title: function() {
                          return ""
                      },
                      label: function(t, e) {
                          return e.labels[t.index] + ": " + t.yLabel
                      }
                  }
              }
          }), e.exports = function(t) {
              t.controllers.polarArea = t.DatasetController.extend({
                  dataElementType: r.Arc,
                  linkScales: o.noop,
                  update: function(t) {
                      var e, n, i, r = this,
                          a = r.getDataset(),
                          s = r.getMeta(),
                          l = r.chart.options.startAngle || 0,
                          u = r._starts = [],
                          c = r._angles = [];
                      for (r._updateRadius(), s.count = r.countVisibleElements(), e = 0, n = a.data.length; e < n; e++) u[e] = l, i = r._computeAngle(e), c[e] = i, l += i;
                      o.each(s.data, function(e, n) {
                          r.updateElement(e, n, t)
                      })
                  },
                  _updateRadius: function() {
                      var t = this,
                          e = t.chart,
                          n = e.chartArea,
                          i = e.options,
                          r = i.elements.arc,
                          o = Math.min(n.right - n.left, n.bottom - n.top);
                      e.outerRadius = Math.max((o - r.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                  },
                  updateElement: function(t, e, n) {
                      var i = this,
                          r = i.chart,
                          a = i.getDataset(),
                          s = r.options,
                          l = s.animation,
                          u = r.scale,
                          c = r.data.labels,
                          h = u.xCenter,
                          d = u.yCenter,
                          f = s.startAngle,
                          p = t.hidden ? 0 : u.getDistanceFromCenterForValue(a.data[e]),
                          g = i._starts[e],
                          m = g + (t.hidden ? 0 : i._angles[e]),
                          v = l.animateScale ? 0 : u.getDistanceFromCenterForValue(a.data[e]);
                      o.extend(t, {
                          _datasetIndex: i.index,
                          _index: e,
                          _scale: u,
                          _model: {
                              x: h,
                              y: d,
                              innerRadius: 0,
                              outerRadius: n ? v : p,
                              startAngle: n && l.animateRotate ? f : g,
                              endAngle: n && l.animateRotate ? f : m,
                              label: o.valueAtIndexOrDefault(c, e, c[e])
                          }
                      });
                      var y = this.chart.options.elements.arc,
                          b = t.custom || {},
                          x = o.valueAtIndexOrDefault,
                          w = t._model;
                      w.backgroundColor = b.backgroundColor ? b.backgroundColor : x(a.backgroundColor, e, y.backgroundColor), w.borderColor = b.borderColor ? b.borderColor : x(a.borderColor, e, y.borderColor), w.borderWidth = b.borderWidth ? b.borderWidth : x(a.borderWidth, e, y.borderWidth), t.pivot()
                  },
                  countVisibleElements: function() {
                      var t = this.getDataset(),
                          e = this.getMeta(),
                          n = 0;
                      return o.each(e.data, function(e, i) {
                          isNaN(t.data[i]) || e.hidden || n++
                      }), n
                  },
                  _computeAngle: function(t) {
                      var e = this,
                          n = this.getMeta().count,
                          i = e.getDataset(),
                          r = e.getMeta();
                      if (isNaN(i.data[t]) || r.data[t].hidden) return 0;
                      var a = {
                          chart: e.chart,
                          dataIndex: t,
                          dataset: i,
                          datasetIndex: e.index
                      };
                      return o.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / n], a, t)
                  }
              })
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      20: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("radar", {
              scale: {
                  type: "radialLinear"
              },
              elements: {
                  line: {
                      tension: 0
                  }
              }
          }), e.exports = function(t) {
              t.controllers.radar = t.DatasetController.extend({
                  datasetElementType: r.Line,
                  dataElementType: r.Point,
                  linkScales: o.noop,
                  update: function(t) {
                      var e = this,
                          n = e.getMeta(),
                          i = n.dataset,
                          r = n.data,
                          a = i.custom || {},
                          s = e.getDataset(),
                          l = e.chart.options.elements.line,
                          u = e.chart.scale;
                      void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(n.dataset, {
                          _datasetIndex: e.index,
                          _scale: u,
                          _children: r,
                          _loop: !0,
                          _model: {
                              tension: a.tension ? a.tension : o.valueOrDefault(s.lineTension, l.tension),
                              backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                              borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                              borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                              fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                              borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                              borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                              borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                              borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                          }
                      }), n.dataset.pivot(), o.each(r, function(n, i) {
                          e.updateElement(n, i, t)
                      }, e), e.updateBezierControlPoints()
                  },
                  updateElement: function(t, e, n) {
                      var i = this,
                          r = t.custom || {},
                          a = i.getDataset(),
                          s = i.chart.scale,
                          l = i.chart.options.elements.point,
                          u = s.getPointPositionForValue(e, a.data[e]);
                      void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), o.extend(t, {
                          _datasetIndex: i.index,
                          _index: e,
                          _scale: s,
                          _model: {
                              x: n ? s.xCenter : u.x,
                              y: n ? s.yCenter : u.y,
                              tension: r.tension ? r.tension : o.valueOrDefault(a.lineTension, i.chart.options.elements.line.tension),
                              radius: r.radius ? r.radius : o.valueAtIndexOrDefault(a.pointRadius, e, l.radius),
                              backgroundColor: r.backgroundColor ? r.backgroundColor : o.valueAtIndexOrDefault(a.pointBackgroundColor, e, l.backgroundColor),
                              borderColor: r.borderColor ? r.borderColor : o.valueAtIndexOrDefault(a.pointBorderColor, e, l.borderColor),
                              borderWidth: r.borderWidth ? r.borderWidth : o.valueAtIndexOrDefault(a.pointBorderWidth, e, l.borderWidth),
                              pointStyle: r.pointStyle ? r.pointStyle : o.valueAtIndexOrDefault(a.pointStyle, e, l.pointStyle),
                              rotation: r.rotation ? r.rotation : o.valueAtIndexOrDefault(a.pointRotation, e, l.rotation),
                              hitRadius: r.hitRadius ? r.hitRadius : o.valueAtIndexOrDefault(a.pointHitRadius, e, l.hitRadius)
                          }
                      }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                  },
                  updateBezierControlPoints: function() {
                      var t = this.chart.chartArea,
                          e = this.getMeta();
                      o.each(e.data, function(n, i) {
                          var r = n._model,
                              a = o.splineCurve(o.previousItem(e.data, i, !0)._model, r, o.nextItem(e.data, i, !0)._model, r.tension);
                          r.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), n.pivot()
                      })
                  },
                  setHoverStyle: function(t) {
                      var e = this.chart.data.datasets[t._datasetIndex],
                          n = t.custom || {},
                          i = t._index,
                          r = t._model;
                      t.$previousStyle = {
                          backgroundColor: r.backgroundColor,
                          borderColor: r.borderColor,
                          borderWidth: r.borderWidth,
                          radius: r.radius
                      }, r.radius = n.hoverRadius ? n.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth)
                  }
              })
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      21: [function(t, e, n) {
          "use strict";
          t(26)._set("scatter", {
              hover: {
                  mode: "single"
              },
              scales: {
                  xAxes: [{
                      id: "x-axis-1",
                      type: "linear",
                      position: "bottom"
                  }],
                  yAxes: [{
                      id: "y-axis-1",
                      type: "linear",
                      position: "left"
                  }]
              },
              showLines: !1,
              tooltips: {
                  callbacks: {
                      title: function() {
                          return ""
                      },
                      label: function(t) {
                          return "(" + t.xLabel + ", " + t.yLabel + ")"
                      }
                  }
              }
          }), e.exports = function(t) {
              t.controllers.scatter = t.controllers.line
          }
      }, {
          26: 26
      }],
      22: [function(t, e, n) {
          "use strict";
          var i = t(27);
          n = e.exports = i.extend({
              chart: null,
              currentStep: 0,
              numSteps: 60,
              easing: "",
              render: null,
              onAnimationProgress: null,
              onAnimationComplete: null
          });
          Object.defineProperty(n.prototype, "animationObject", {
              get: function() {
                  return this
              }
          }), Object.defineProperty(n.prototype, "chartInstance", {
              get: function() {
                  return this.chart
              },
              set: function(t) {
                  this.chart = t
              }
          })
      }, {
          27: 27
      }],
      23: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(46);
          i._set("global", {
              animation: {
                  duration: 1e3,
                  easing: "easeOutQuart",
                  onProgress: r.noop,
                  onComplete: r.noop
              }
          }), e.exports = {
              frameDuration: 17,
              animations: [],
              dropFrames: 0,
              request: null,
              addAnimation: function(t, e, n, i) {
                  var r, o, a = this.animations;
                  for (e.chart = t, i || (t.animating = !0), r = 0, o = a.length; r < o; ++r)
                      if (a[r].chart === t) return void(a[r] = e);
                  a.push(e), 1 === a.length && this.requestAnimationFrame()
              },
              cancelAnimation: function(t) {
                  var e = r.findIndex(this.animations, function(e) {
                      return e.chart === t
                  }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
              },
              requestAnimationFrame: function() {
                  var t = this;
                  null === t.request && (t.request = r.requestAnimFrame.call(window, function() {
                      t.request = null, t.startDigest()
                  }))
              },
              startDigest: function() {
                  var t = this,
                      e = Date.now(),
                      n = 0;
                  t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                  var i = Date.now();
                  t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
              },
              advance: function(t) {
                  for (var e, n, i = this.animations, o = 0; o < i.length;) n = (e = i[o]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), r.callback(e.render, [n, e], n), r.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (r.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(o, 1)) : ++o
              }
          }
      }, {
          26: 26,
          46: 46
      }],
      24: [function(t, e, n) {
          "use strict";
          var i = t(22),
              r = t(23),
              o = t(26),
              a = t(46),
              s = t(29),
              l = t(31),
              u = t(49),
              c = t(32),
              h = t(34),
              d = t(36);
          e.exports = function(t) {
              function e(t) {
                  return "top" === t || "bottom" === t
              }
              t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
                  construct: function(e, n) {
                      var i = this;
                      n = function(t) {
                          var e = (t = t || {}).data = t.data || {};
                          return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(o.global, o[t.type], t.options || {}), t
                      }(n);
                      var r = u.acquireContext(e, n),
                          s = r && r.canvas,
                          l = s && s.height,
                          c = s && s.width;
                      i.id = a.uid(), i.ctx = r, i.canvas = s, i.config = n, i.width = c, i.height = l, i.aspectRatio = l ? c / l : null, i.options = n.options, i._bufferedRender = !1, i.chart = i, i.controller = i, t.instances[i.id] = i, Object.defineProperty(i, "data", {
                          get: function() {
                              return i.config.data
                          },
                          set: function(t) {
                              i.config.data = t
                          }
                      }), r && s ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                  },
                  initialize: function() {
                      var t = this;
                      return c.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), c.notify(t, "afterInit"), t
                  },
                  clear: function() {
                      return a.canvas.clear(this), this
                  },
                  stop: function() {
                      return r.cancelAnimation(this), this
                  },
                  resize: function(t) {
                      var e = this,
                          n = e.options,
                          i = e.canvas,
                          r = n.maintainAspectRatio && e.aspectRatio || null,
                          o = Math.max(0, Math.floor(a.getMaximumWidth(i))),
                          s = Math.max(0, Math.floor(r ? o / r : a.getMaximumHeight(i)));
                      if ((e.width !== o || e.height !== s) && (i.width = e.width = o, i.height = e.height = s, i.style.width = o + "px", i.style.height = s + "px", a.retinaScale(e, n.devicePixelRatio), !t)) {
                          var l = {
                              width: o,
                              height: s
                          };
                          c.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
                              duration: e.options.responsiveAnimationDuration
                          })
                      }
                  },
                  ensureScalesHaveIDs: function() {
                      var t = this.options,
                          e = t.scales || {},
                          n = t.scale;
                      a.each(e.xAxes, function(t, e) {
                          t.id = t.id || "x-axis-" + e
                      }), a.each(e.yAxes, function(t, e) {
                          t.id = t.id || "y-axis-" + e
                      }), n && (n.id = n.id || "scale")
                  },
                  buildOrUpdateScales: function() {
                      var t = this,
                          n = t.options,
                          i = t.scales || {},
                          r = [],
                          o = Object.keys(i).reduce(function(t, e) {
                              return t[e] = !1, t
                          }, {});
                      n.scales && (r = r.concat((n.scales.xAxes || []).map(function(t) {
                          return {
                              options: t,
                              dtype: "category",
                              dposition: "bottom"
                          }
                      }), (n.scales.yAxes || []).map(function(t) {
                          return {
                              options: t,
                              dtype: "linear",
                              dposition: "left"
                          }
                      }))), n.scale && r.push({
                          options: n.scale,
                          dtype: "radialLinear",
                          isDefault: !0,
                          dposition: "chartArea"
                      }), a.each(r, function(n) {
                          var r = n.options,
                              s = r.id,
                              l = a.valueOrDefault(r.type, n.dtype);
                          e(r.position) !== e(n.dposition) && (r.position = n.dposition), o[s] = !0;
                          var u = null;
                          if (s in i && i[s].type === l)(u = i[s]).options = r, u.ctx = t.ctx, u.chart = t;
                          else {
                              var c = h.getScaleConstructor(l);
                              if (!c) return;
                              u = new c({
                                  id: s,
                                  type: l,
                                  options: r,
                                  ctx: t.ctx,
                                  chart: t
                              }), i[u.id] = u
                          }
                          u.mergeTicksOptions(), n.isDefault && (t.scale = u)
                      }), a.each(o, function(t, e) {
                          t || delete i[e]
                      }), t.scales = i, h.addScalesToLayout(this)
                  },
                  buildOrUpdateControllers: function() {
                      var e = this,
                          n = [],
                          i = [];
                      return a.each(e.data.datasets, function(r, o) {
                          var a = e.getDatasetMeta(o),
                              s = r.type || e.config.type;
                          if (a.type && a.type !== s && (e.destroyDatasetMeta(o), a = e.getDatasetMeta(o)), a.type = s, n.push(a.type), a.controller) a.controller.updateIndex(o), a.controller.linkScales();
                          else {
                              var l = t.controllers[a.type];
                              if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                              a.controller = new l(e, o), i.push(a.controller)
                          }
                      }, e), i
                  },
                  resetElements: function() {
                      var t = this;
                      a.each(t.data.datasets, function(e, n) {
                          t.getDatasetMeta(n).controller.reset()
                      }, t)
                  },
                  reset: function() {
                      this.resetElements(), this.tooltip.initialize()
                  },
                  update: function(e) {
                      var n, i, r = this;
                      if (e && "object" == typeof e || (e = {
                              duration: e,
                              lazy: arguments[1]
                          }), i = (n = r).options, a.each(n.scales, function(t) {
                              l.removeBox(n, t)
                          }), i = a.configMerge(t.defaults.global, t.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), c._invalidate(r), !1 !== c.notify(r, "beforeUpdate")) {
                          r.tooltip._data = r.data;
                          var o = r.buildOrUpdateControllers();
                          a.each(r.data.datasets, function(t, e) {
                              r.getDatasetMeta(e).controller.buildOrUpdateElements()
                          }, r), r.updateLayout(), r.options.animation && r.options.animation.duration && a.each(o, function(t) {
                              t.reset()
                          }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], c.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                              duration: e.duration,
                              easing: e.easing,
                              lazy: e.lazy
                          } : r.render(e)
                      }
                  },
                  updateLayout: function() {
                      !1 !== c.notify(this, "beforeLayout") && (l.update(this, this.width, this.height), c.notify(this, "afterScaleUpdate"), c.notify(this, "afterLayout"))
                  },
                  updateDatasets: function() {
                      if (!1 !== c.notify(this, "beforeDatasetsUpdate")) {
                          for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                          c.notify(this, "afterDatasetsUpdate")
                      }
                  },
                  updateDataset: function(t) {
                      var e = this.getDatasetMeta(t),
                          n = {
                              meta: e,
                              index: t
                          };
                      !1 !== c.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), c.notify(this, "afterDatasetUpdate", [n]))
                  },
                  render: function(t) {
                      var e = this;
                      t && "object" == typeof t || (t = {
                          duration: t,
                          lazy: arguments[1]
                      });
                      var n = t.duration,
                          o = t.lazy;
                      if (!1 !== c.notify(e, "beforeRender")) {
                          var s = e.options.animation,
                              l = function(t) {
                                  c.notify(e, "afterRender"), a.callback(s && s.onComplete, [t], e)
                              };
                          if (s && (void 0 !== n && 0 !== n || void 0 === n && 0 !== s.duration)) {
                              var u = new i({
                                  numSteps: (n || s.duration) / 16.66,
                                  easing: t.easing || s.easing,
                                  render: function(t, e) {
                                      var n = a.easing.effects[e.easing],
                                          i = e.currentStep,
                                          r = i / e.numSteps;
                                      t.draw(n(r), r, i)
                                  },
                                  onAnimationProgress: s.onProgress,
                                  onAnimationComplete: l
                              });
                              r.addAnimation(e, u, n, o)
                          } else e.draw(), l(new i({
                              numSteps: 0,
                              chart: e
                          }));
                          return e
                      }
                  },
                  draw: function(t) {
                      var e = this;
                      e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== c.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function(t) {
                          t.draw(e.chartArea)
                      }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), c.notify(e, "afterDraw", [t]))
                  },
                  transition: function(t) {
                      for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                      this.tooltip.transition(t)
                  },
                  drawDatasets: function(t) {
                      var e = this;
                      if (!1 !== c.notify(e, "beforeDatasetsDraw", [t])) {
                          for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                          c.notify(e, "afterDatasetsDraw", [t])
                      }
                  },
                  drawDataset: function(t, e) {
                      var n = this.getDatasetMeta(t),
                          i = {
                              meta: n,
                              index: t,
                              easingValue: e
                          };
                      !1 !== c.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), c.notify(this, "afterDatasetDraw", [i]))
                  },
                  _drawTooltip: function(t) {
                      var e = this.tooltip,
                          n = {
                              tooltip: e,
                              easingValue: t
                          };
                      !1 !== c.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), c.notify(this, "afterTooltipDraw", [n]))
                  },
                  getElementAtEvent: function(t) {
                      return s.modes.single(this, t)
                  },
                  getElementsAtEvent: function(t) {
                      return s.modes.label(this, t, {
                          intersect: !0
                      })
                  },
                  getElementsAtXAxis: function(t) {
                      return s.modes["x-axis"](this, t, {
                          intersect: !0
                      })
                  },
                  getElementsAtEventForMode: function(t, e, n) {
                      var i = s.modes[e];
                      return "function" == typeof i ? i(this, t, n) : []
                  },
                  getDatasetAtEvent: function(t) {
                      return s.modes.dataset(this, t, {
                          intersect: !0
                      })
                  },
                  getDatasetMeta: function(t) {
                      var e = this.data.datasets[t];
                      e._meta || (e._meta = {});
                      var n = e._meta[this.id];
                      return n || (n = e._meta[this.id] = {
                          type: null,
                          data: [],
                          dataset: null,
                          controller: null,
                          hidden: null,
                          xAxisID: null,
                          yAxisID: null
                      }), n
                  },
                  getVisibleDatasetCount: function() {
                      for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                      return t
                  },
                  isDatasetVisible: function(t) {
                      var e = this.getDatasetMeta(t);
                      return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                  },
                  generateLegend: function() {
                      return this.options.legendCallback(this)
                  },
                  destroyDatasetMeta: function(t) {
                      var e = this.id,
                          n = this.data.datasets[t],
                          i = n._meta && n._meta[e];
                      i && (i.controller.destroy(), delete n._meta[e])
                  },
                  destroy: function() {
                      var e, n, i = this,
                          r = i.canvas;
                      for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) i.destroyDatasetMeta(e);
                      r && (i.unbindEvents(), a.canvas.clear(i), u.releaseContext(i.ctx), i.canvas = null, i.ctx = null), c.notify(i, "destroy"), delete t.instances[i.id]
                  },
                  toBase64Image: function() {
                      return this.canvas.toDataURL.apply(this.canvas, arguments)
                  },
                  initToolTip: function() {
                      var t = this;
                      t.tooltip = new d({
                          _chart: t,
                          _chartInstance: t,
                          _data: t.data,
                          _options: t.options.tooltips
                      }, t)
                  },
                  bindEvents: function() {
                      var t = this,
                          e = t._listeners = {},
                          n = function() {
                              t.eventHandler.apply(t, arguments)
                          };
                      a.each(t.options.events, function(i) {
                          u.addEventListener(t, i, n), e[i] = n
                      }), t.options.responsive && (n = function() {
                          t.resize()
                      }, u.addEventListener(t, "resize", n), e.resize = n)
                  },
                  unbindEvents: function() {
                      var t = this,
                          e = t._listeners;
                      e && (delete t._listeners, a.each(e, function(e, n) {
                          u.removeEventListener(t, n, e)
                      }))
                  },
                  updateHoverStyle: function(t, e, n) {
                      var i, r, o, a = n ? "setHoverStyle" : "removeHoverStyle";
                      for (r = 0, o = t.length; r < o; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
                  },
                  eventHandler: function(t) {
                      var e = this,
                          n = e.tooltip;
                      if (!1 !== c.notify(e, "beforeEvent", [t])) {
                          e._bufferedRender = !0, e._bufferedRequest = null;
                          var i = e.handleEvent(t);
                          n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), c.notify(e, "afterEvent", [t]);
                          var r = e._bufferedRequest;
                          return r ? e.render(r) : i && !e.animating && (e.stop(), e.render({
                              duration: e.options.hover.animationDuration,
                              lazy: !0
                          })), e._bufferedRender = !1, e._bufferedRequest = null, e
                      }
                  },
                  handleEvent: function(t) {
                      var e, n = this,
                          i = n.options || {},
                          r = i.hover;
                      return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, r.mode, r), a.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !a.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
                  }
              }), t.Controller = t
          }
      }, {
          22: 22,
          23: 23,
          26: 26,
          29: 29,
          31: 31,
          32: 32,
          34: 34,
          36: 36,
          46: 46,
          49: 49
      }],
      25: [function(t, e, n) {
          "use strict";
          var i = t(46);
          e.exports = function(t) {
              var e = ["push", "pop", "shift", "splice", "unshift"];

              function n(t, n) {
                  var i = t._chartjs;
                  if (i) {
                      var r = i.listeners,
                          o = r.indexOf(n); - 1 !== o && r.splice(o, 1), r.length > 0 || (e.forEach(function(e) {
                          delete t[e]
                      }), delete t._chartjs)
                  }
              }
              t.DatasetController = function(t, e) {
                  this.initialize(t, e)
              }, i.extend(t.DatasetController.prototype, {
                  datasetElementType: null,
                  dataElementType: null,
                  initialize: function(t, e) {
                      this.chart = t, this.index = e, this.linkScales(), this.addElements()
                  },
                  updateIndex: function(t) {
                      this.index = t
                  },
                  linkScales: function() {
                      var t = this,
                          e = t.getMeta(),
                          n = t.getDataset();
                      null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                  },
                  getDataset: function() {
                      return this.chart.data.datasets[this.index]
                  },
                  getMeta: function() {
                      return this.chart.getDatasetMeta(this.index)
                  },
                  getScaleForId: function(t) {
                      return this.chart.scales[t]
                  },
                  reset: function() {
                      this.update(!0)
                  },
                  destroy: function() {
                      this._data && n(this._data, this)
                  },
                  createMetaDataset: function() {
                      var t = this.datasetElementType;
                      return t && new t({
                          _chart: this.chart,
                          _datasetIndex: this.index
                      })
                  },
                  createMetaData: function(t) {
                      var e = this.dataElementType;
                      return e && new e({
                          _chart: this.chart,
                          _datasetIndex: this.index,
                          _index: t
                      })
                  },
                  addElements: function() {
                      var t, e, n = this.getMeta(),
                          i = this.getDataset().data || [],
                          r = n.data;
                      for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
                      n.dataset = n.dataset || this.createMetaDataset()
                  },
                  addElementAndReset: function(t) {
                      var e = this.createMetaData(t);
                      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                  },
                  buildOrUpdateElements: function() {
                      var t, r, o = this,
                          a = o.getDataset(),
                          s = a.data || (a.data = []);
                      o._data !== s && (o._data && n(o._data, o), r = o, (t = s)._chartjs ? t._chartjs.listeners.push(r) : (Object.defineProperty(t, "_chartjs", {
                          configurable: !0,
                          enumerable: !1,
                          value: {
                              listeners: [r]
                          }
                      }), e.forEach(function(e) {
                          var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                              r = t[e];
                          Object.defineProperty(t, e, {
                              configurable: !0,
                              enumerable: !1,
                              value: function() {
                                  var e = Array.prototype.slice.call(arguments),
                                      o = r.apply(this, e);
                                  return i.each(t._chartjs.listeners, function(t) {
                                      "function" == typeof t[n] && t[n].apply(t, e)
                                  }), o
                              }
                          })
                      })), o._data = s), o.resyncElements()
                  },
                  update: i.noop,
                  transition: function(t) {
                      for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
                      e.dataset && e.dataset.transition(t)
                  },
                  draw: function() {
                      var t = this.getMeta(),
                          e = t.data || [],
                          n = e.length,
                          i = 0;
                      for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
                  },
                  removeHoverStyle: function(t) {
                      i.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                  },
                  setHoverStyle: function(t) {
                      var e = this.chart.data.datasets[t._datasetIndex],
                          n = t._index,
                          r = t.custom || {},
                          o = i.valueAtIndexOrDefault,
                          a = i.getHoverColor,
                          s = t._model;
                      t.$previousStyle = {
                          backgroundColor: s.backgroundColor,
                          borderColor: s.borderColor,
                          borderWidth: s.borderWidth
                      }, s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : o(e.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : o(e.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : o(e.hoverBorderWidth, n, s.borderWidth)
                  },
                  resyncElements: function() {
                      var t = this.getMeta(),
                          e = this.getDataset().data,
                          n = t.data.length,
                          i = e.length;
                      i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
                  },
                  insertElements: function(t, e) {
                      for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                  },
                  onDataPush: function() {
                      this.insertElements(this.getDataset().data.length - 1, arguments.length)
                  },
                  onDataPop: function() {
                      this.getMeta().data.pop()
                  },
                  onDataShift: function() {
                      this.getMeta().data.shift()
                  },
                  onDataSplice: function(t, e) {
                      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                  },
                  onDataUnshift: function() {
                      this.insertElements(0, arguments.length)
                  }
              }), t.DatasetController.extend = i.inherits
          }
      }, {
          46: 46
      }],
      26: [function(t, e, n) {
          "use strict";
          var i = t(46);
          e.exports = {
              _set: function(t, e) {
                  return i.merge(this[t] || (this[t] = {}), e)
              }
          }
      }, {
          46: 46
      }],
      27: [function(t, e, n) {
          "use strict";
          var i = t(3),
              r = t(46);
          var o = function(t) {
              r.extend(this, t), this.initialize.apply(this, arguments)
          };
          r.extend(o.prototype, {
              initialize: function() {
                  this.hidden = !1
              },
              pivot: function() {
                  var t = this;
                  return t._view || (t._view = r.clone(t._model)), t._start = {}, t
              },
              transition: function(t) {
                  var e = this,
                      n = e._model,
                      r = e._start,
                      o = e._view;
                  return n && 1 !== t ? (o || (o = e._view = {}), r || (r = e._start = {}), function(t, e, n, r) {
                      var o, a, s, l, u, c, h, d, f, p = Object.keys(n);
                      for (o = 0, a = p.length; o < a; ++o)
                          if (c = n[s = p[o]], e.hasOwnProperty(s) || (e[s] = c), (l = e[s]) !== c && "_" !== s[0]) {
                              if (t.hasOwnProperty(s) || (t[s] = l), (h = typeof c) == typeof(u = t[s]))
                                  if ("string" === h) {
                                      if ((d = i(u)).valid && (f = i(c)).valid) {
                                          e[s] = f.mix(d, r).rgbString();
                                          continue
                                      }
                                  } else if ("number" === h && isFinite(u) && isFinite(c)) {
                                  e[s] = u + (c - u) * r;
                                  continue
                              }
                              e[s] = c
                          }
                  }(r, o, n, t), e) : (e._view = n, e._start = null, e)
              },
              tooltipPosition: function() {
                  return {
                      x: this._model.x,
                      y: this._model.y
                  }
              },
              hasValue: function() {
                  return r.isNumber(this._model.x) && r.isNumber(this._model.y)
              }
          }), o.extend = r.inherits, e.exports = o
      }, {
          3: 3,
          46: 46
      }],
      28: [function(t, e, n) {
          "use strict";
          var i = t(3),
              r = t(26),
              o = t(46),
              a = t(34);
          e.exports = function() {
              function t(t, e, n) {
                  var i;
                  return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
              }

              function e(t) {
                  return null != t && "none" !== t
              }

              function n(n, i, r) {
                  var a = document.defaultView,
                      s = o._getParentNode(n),
                      l = a.getComputedStyle(n)[i],
                      u = a.getComputedStyle(s)[i],
                      c = e(l),
                      h = e(u),
                      d = Number.POSITIVE_INFINITY;
                  return c || h ? Math.min(c ? t(l, n, r) : d, h ? t(u, s, r) : d) : "none"
              }
              o.configMerge = function() {
                  return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                      merger: function(t, e, n, i) {
                          var r = e[t] || {},
                              s = n[t];
                          "scales" === t ? e[t] = o.scaleMerge(r, s) : "scale" === t ? e[t] = o.merge(r, [a.getScaleDefaults(s.type), s]) : o._merger(t, e, n, i)
                      }
                  })
              }, o.scaleMerge = function() {
                  return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                      merger: function(t, e, n, i) {
                          if ("xAxes" === t || "yAxes" === t) {
                              var r, s, l, u = n[t].length;
                              for (e[t] || (e[t] = []), r = 0; r < u; ++r) l = n[t][r], s = o.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), !e[t][r].type || l.type && l.type !== e[t][r].type ? o.merge(e[t][r], [a.getScaleDefaults(s), l]) : o.merge(e[t][r], l)
                          } else o._merger(t, e, n, i)
                      }
                  })
              }, o.where = function(t, e) {
                  if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                  var n = [];
                  return o.each(t, function(t) {
                      e(t) && n.push(t)
                  }), n
              }, o.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                  return t.findIndex(e, n)
              } : function(t, e, n) {
                  n = void 0 === n ? t : n;
                  for (var i = 0, r = t.length; i < r; ++i)
                      if (e.call(n, t[i], i, t)) return i;
                  return -1
              }, o.findNextWhere = function(t, e, n) {
                  o.isNullOrUndef(n) && (n = -1);
                  for (var i = n + 1; i < t.length; i++) {
                      var r = t[i];
                      if (e(r)) return r
                  }
              }, o.findPreviousWhere = function(t, e, n) {
                  o.isNullOrUndef(n) && (n = t.length);
                  for (var i = n - 1; i >= 0; i--) {
                      var r = t[i];
                      if (e(r)) return r
                  }
              }, o.isNumber = function(t) {
                  return !isNaN(parseFloat(t)) && isFinite(t)
              }, o.almostEquals = function(t, e, n) {
                  return Math.abs(t - e) < n
              }, o.almostWhole = function(t, e) {
                  var n = Math.round(t);
                  return n - e < t && n + e > t
              }, o.max = function(t) {
                  return t.reduce(function(t, e) {
                      return isNaN(e) ? t : Math.max(t, e)
                  }, Number.NEGATIVE_INFINITY)
              }, o.min = function(t) {
                  return t.reduce(function(t, e) {
                      return isNaN(e) ? t : Math.min(t, e)
                  }, Number.POSITIVE_INFINITY)
              }, o.sign = Math.sign ? function(t) {
                  return Math.sign(t)
              } : function(t) {
                  return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
              }, o.log10 = Math.log10 ? function(t) {
                  return Math.log10(t)
              } : function(t) {
                  var e = Math.log(t) * Math.LOG10E,
                      n = Math.round(e);
                  return t === Math.pow(10, n) ? n : e
              }, o.toRadians = function(t) {
                  return t * (Math.PI / 180)
              }, o.toDegrees = function(t) {
                  return t * (180 / Math.PI)
              }, o.getAngleFromPoint = function(t, e) {
                  var n = e.x - t.x,
                      i = e.y - t.y,
                      r = Math.sqrt(n * n + i * i),
                      o = Math.atan2(i, n);
                  return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                      angle: o,
                      distance: r
                  }
              }, o.distanceBetweenPoints = function(t, e) {
                  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
              }, o.aliasPixel = function(t) {
                  return t % 2 == 0 ? 0 : .5
              }, o.splineCurve = function(t, e, n, i) {
                  var r = t.skip ? e : t,
                      o = e,
                      a = n.skip ? e : n,
                      s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                      l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                      u = s / (s + l),
                      c = l / (s + l),
                      h = i * (u = isNaN(u) ? 0 : u),
                      d = i * (c = isNaN(c) ? 0 : c);
                  return {
                      previous: {
                          x: o.x - h * (a.x - r.x),
                          y: o.y - h * (a.y - r.y)
                      },
                      next: {
                          x: o.x + d * (a.x - r.x),
                          y: o.y + d * (a.y - r.y)
                      }
                  }
              }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
                  var e, n, i, r, a, s, l, u, c, h = (t || []).map(function(t) {
                          return {
                              model: t._model,
                              deltaK: 0,
                              mK: 0
                          }
                      }),
                      d = h.length;
                  for (e = 0; e < d; ++e)
                      if (!(i = h[e]).model.skip) {
                          if (n = e > 0 ? h[e - 1] : null, (r = e < d - 1 ? h[e + 1] : null) && !r.model.skip) {
                              var f = r.model.x - i.model.x;
                              i.deltaK = 0 !== f ? (r.model.y - i.model.y) / f : 0
                          }!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                      }
                  for (e = 0; e < d - 1; ++e) i = h[e], r = h[e + 1], i.model.skip || r.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (a = i.mK / i.deltaK, s = r.mK / i.deltaK, (u = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), i.mK = a * l * i.deltaK, r.mK = s * l * i.deltaK)));
                  for (e = 0; e < d; ++e)(i = h[e]).model.skip || (n = e > 0 ? h[e - 1] : null, r = e < d - 1 ? h[e + 1] : null, n && !n.model.skip && (c = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - c, i.model.controlPointPreviousY = i.model.y - c * i.mK), r && !r.model.skip && (c = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + c, i.model.controlPointNextY = i.model.y + c * i.mK))
              }, o.nextItem = function(t, e, n) {
                  return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
              }, o.previousItem = function(t, e, n) {
                  return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
              }, o.niceNum = function(t, e) {
                  var n = Math.floor(o.log10(t)),
                      i = t / Math.pow(10, n);
                  return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
              }, o.requestAnimFrame = "undefined" == typeof window ? function(t) {
                  t()
              } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                  return window.setTimeout(t, 1e3 / 60)
              }, o.getRelativePosition = function(t, e) {
                  var n, i, r = t.originalEvent || t,
                      a = t.target || t.srcElement,
                      s = a.getBoundingClientRect(),
                      l = r.touches;
                  l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = r.clientX, i = r.clientY);
                  var u = parseFloat(o.getStyle(a, "padding-left")),
                      c = parseFloat(o.getStyle(a, "padding-top")),
                      h = parseFloat(o.getStyle(a, "padding-right")),
                      d = parseFloat(o.getStyle(a, "padding-bottom")),
                      f = s.right - s.left - u - h,
                      p = s.bottom - s.top - c - d;
                  return {
                      x: n = Math.round((n - s.left - u) / f * a.width / e.currentDevicePixelRatio),
                      y: i = Math.round((i - s.top - c) / p * a.height / e.currentDevicePixelRatio)
                  }
              }, o.getConstraintWidth = function(t) {
                  return n(t, "max-width", "clientWidth")
              }, o.getConstraintHeight = function(t) {
                  return n(t, "max-height", "clientHeight")
              }, o._calculatePadding = function(t, e, n) {
                  return (e = o.getStyle(t, e)).indexOf("%") > -1 ? n / parseInt(e, 10) : parseInt(e, 10)
              }, o._getParentNode = function(t) {
                  var e = t.parentNode;
                  return e && e.host && (e = e.host), e
              }, o.getMaximumWidth = function(t) {
                  var e = o._getParentNode(t);
                  if (!e) return t.clientWidth;
                  var n = e.clientWidth,
                      i = n - o._calculatePadding(e, "padding-left", n) - o._calculatePadding(e, "padding-right", n),
                      r = o.getConstraintWidth(t);
                  return isNaN(r) ? i : Math.min(i, r)
              }, o.getMaximumHeight = function(t) {
                  var e = o._getParentNode(t);
                  if (!e) return t.clientHeight;
                  var n = e.clientHeight,
                      i = n - o._calculatePadding(e, "padding-top", n) - o._calculatePadding(e, "padding-bottom", n),
                      r = o.getConstraintHeight(t);
                  return isNaN(r) ? i : Math.min(i, r)
              }, o.getStyle = function(t, e) {
                  return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
              }, o.retinaScale = function(t, e) {
                  var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                  if (1 !== n) {
                      var i = t.canvas,
                          r = t.height,
                          o = t.width;
                      i.height = r * n, i.width = o * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = o + "px")
                  }
              }, o.fontString = function(t, e, n) {
                  return e + " " + t + "px " + n
              }, o.longestText = function(t, e, n, i) {
                  var r = (i = i || {}).data = i.data || {},
                      a = i.garbageCollect = i.garbageCollect || [];
                  i.font !== e && (r = i.data = {}, a = i.garbageCollect = [], i.font = e), t.font = e;
                  var s = 0;
                  o.each(n, function(e) {
                      null != e && !0 !== o.isArray(e) ? s = o.measureText(t, r, a, s, e) : o.isArray(e) && o.each(e, function(e) {
                          null == e || o.isArray(e) || (s = o.measureText(t, r, a, s, e))
                      })
                  });
                  var l = a.length / 2;
                  if (l > n.length) {
                      for (var u = 0; u < l; u++) delete r[a[u]];
                      a.splice(0, l)
                  }
                  return s
              }, o.measureText = function(t, e, n, i, r) {
                  var o = e[r];
                  return o || (o = e[r] = t.measureText(r).width, n.push(r)), o > i && (i = o), i
              }, o.numberOfLabelLines = function(t) {
                  var e = 1;
                  return o.each(t, function(t) {
                      o.isArray(t) && t.length > e && (e = t.length)
                  }), e
              }, o.color = i ? function(t) {
                  return t instanceof CanvasGradient && (t = r.global.defaultColor), i(t)
              } : function(t) {
                  return console.error("Color.js not found!"), t
              }, o.getHoverColor = function(t) {
                  return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
              }
          }
      }, {
          26: 26,
          3: 3,
          34: 34,
          46: 46
      }],
      29: [function(t, e, n) {
          "use strict";
          var i = t(46);

          function r(t, e) {
              return t.native ? {
                  x: t.x,
                  y: t.y
              } : i.getRelativePosition(t, e)
          }

          function o(t, e) {
              var n, i, r, o, a;
              for (i = 0, o = t.data.datasets.length; i < o; ++i)
                  if (t.isDatasetVisible(i))
                      for (r = 0, a = (n = t.getDatasetMeta(i)).data.length; r < a; ++r) {
                          var s = n.data[r];
                          s._view.skip || e(s)
                      }
          }

          function a(t, e) {
              var n = [];
              return o(t, function(t) {
                  t.inRange(e.x, e.y) && n.push(t)
              }), n
          }

          function s(t, e, n, i) {
              var r = Number.POSITIVE_INFINITY,
                  a = [];
              return o(t, function(t) {
                  if (!n || t.inRange(e.x, e.y)) {
                      var o = t.getCenterPoint(),
                          s = i(e, o);
                      s < r ? (a = [t], r = s) : s === r && a.push(t)
                  }
              }), a
          }

          function l(t) {
              var e = -1 !== t.indexOf("x"),
                  n = -1 !== t.indexOf("y");
              return function(t, i) {
                  var r = e ? Math.abs(t.x - i.x) : 0,
                      o = n ? Math.abs(t.y - i.y) : 0;
                  return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
              }
          }

          function u(t, e, n) {
              var i = r(e, t);
              n.axis = n.axis || "x";
              var o = l(n.axis),
                  u = n.intersect ? a(t, i) : s(t, i, !1, o),
                  c = [];
              return u.length ? (t.data.datasets.forEach(function(e, n) {
                  if (t.isDatasetVisible(n)) {
                      var i = t.getDatasetMeta(n).data[u[0]._index];
                      i && !i._view.skip && c.push(i)
                  }
              }), c) : []
          }
          e.exports = {
              modes: {
                  single: function(t, e) {
                      var n = r(e, t),
                          i = [];
                      return o(t, function(t) {
                          if (t.inRange(n.x, n.y)) return i.push(t), i
                      }), i.slice(0, 1)
                  },
                  label: u,
                  index: u,
                  dataset: function(t, e, n) {
                      var i = r(e, t);
                      n.axis = n.axis || "xy";
                      var o = l(n.axis),
                          u = n.intersect ? a(t, i) : s(t, i, !1, o);
                      return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                  },
                  "x-axis": function(t, e) {
                      return u(t, e, {
                          intersect: !1
                      })
                  },
                  point: function(t, e) {
                      return a(t, r(e, t))
                  },
                  nearest: function(t, e, n) {
                      var i = r(e, t);
                      n.axis = n.axis || "xy";
                      var o = l(n.axis),
                          a = s(t, i, n.intersect, o);
                      return a.length > 1 && a.sort(function(t, e) {
                          var n = t.getArea() - e.getArea();
                          return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                      }), a.slice(0, 1)
                  },
                  x: function(t, e, n) {
                      var i = r(e, t),
                          a = [],
                          s = !1;
                      return o(t, function(t) {
                          t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (s = !0)
                      }), n.intersect && !s && (a = []), a
                  },
                  y: function(t, e, n) {
                      var i = r(e, t),
                          a = [],
                          s = !1;
                      return o(t, function(t) {
                          t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (s = !0)
                      }), n.intersect && !s && (a = []), a
                  }
              }
          }
      }, {
          46: 46
      }],
      30: [function(t, e, n) {
          "use strict";
          t(26)._set("global", {
              responsive: !0,
              responsiveAnimationDuration: 0,
              maintainAspectRatio: !0,
              events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
              hover: {
                  onHover: null,
                  mode: "nearest",
                  intersect: !0,
                  animationDuration: 400
              },
              onClick: null,
              defaultColor: "rgba(0,0,0,0.1)",
              defaultFontColor: "#666",
              defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              defaultFontSize: 12,
              defaultFontStyle: "normal",
              showLines: !0,
              elements: {},
              layout: {
                  padding: {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                  }
              }
          }), e.exports = function() {
              var t = function(t, e) {
                  return this.construct(t, e), this
              };
              return t.Chart = t, t
          }
      }, {
          26: 26
      }],
      31: [function(t, e, n) {
          "use strict";
          var i = t(46);

          function r(t, e) {
              return i.where(t, function(t) {
                  return t.position === e
              })
          }

          function o(t, e) {
              t.forEach(function(t, e) {
                  return t._tmpIndex_ = e, t
              }), t.sort(function(t, n) {
                  var i = e ? n : t,
                      r = e ? t : n;
                  return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight
              }), t.forEach(function(t) {
                  delete t._tmpIndex_
              })
          }
          e.exports = {
              defaults: {},
              addBox: function(t, e) {
                  t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
              },
              removeBox: function(t, e) {
                  var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
              },
              configure: function(t, e, n) {
                  for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) i = r[a], n.hasOwnProperty(i) && (e[i] = n[i])
              },
              update: function(t, e, n) {
                  if (t) {
                      var a = t.options.layout || {},
                          s = i.options.toPadding(a.padding),
                          l = s.left,
                          u = s.right,
                          c = s.top,
                          h = s.bottom,
                          d = r(t.boxes, "left"),
                          f = r(t.boxes, "right"),
                          p = r(t.boxes, "top"),
                          g = r(t.boxes, "bottom"),
                          m = r(t.boxes, "chartArea");
                      o(d, !0), o(f, !1), o(p, !0), o(g, !1);
                      var v = e - l - u,
                          y = n - c - h,
                          b = y / 2,
                          x = (e - v / 2) / (d.length + f.length),
                          w = (n - b) / (p.length + g.length),
                          D = v,
                          _ = y,
                          C = [];
                      i.each(d.concat(f, p, g), function(t) {
                          var e, n = t.isHorizontal();
                          n ? (e = t.update(t.fullWidth ? v : D, w), _ -= e.height) : (e = t.update(x, _), D -= e.width), C.push({
                              horizontal: n,
                              minSize: e,
                              box: t
                          })
                      });
                      var k = 0,
                          T = 0,
                          S = 0,
                          M = 0;
                      i.each(p.concat(g), function(t) {
                          if (t.getPadding) {
                              var e = t.getPadding();
                              k = Math.max(k, e.left), T = Math.max(T, e.right)
                          }
                      }), i.each(d.concat(f), function(t) {
                          if (t.getPadding) {
                              var e = t.getPadding();
                              S = Math.max(S, e.top), M = Math.max(M, e.bottom)
                          }
                      });
                      var A = l,
                          I = u,
                          E = c,
                          N = h;
                      i.each(d.concat(f), W), i.each(d, function(t) {
                          A += t.width
                      }), i.each(f, function(t) {
                          I += t.width
                      }), i.each(p.concat(g), W), i.each(p, function(t) {
                          E += t.height
                      }), i.each(g, function(t) {
                          N += t.height
                      }), i.each(d.concat(f), function(t) {
                          var e = i.findNextWhere(C, function(e) {
                                  return e.box === t
                              }),
                              n = {
                                  left: 0,
                                  right: 0,
                                  top: E,
                                  bottom: N
                              };
                          e && t.update(e.minSize.width, _, n)
                      }), A = l, I = u, E = c, N = h, i.each(d, function(t) {
                          A += t.width
                      }), i.each(f, function(t) {
                          I += t.width
                      }), i.each(p, function(t) {
                          E += t.height
                      }), i.each(g, function(t) {
                          N += t.height
                      });
                      var O = Math.max(k - A, 0);
                      A += O, I += Math.max(T - I, 0);
                      var P = Math.max(S - E, 0);
                      E += P, N += Math.max(M - N, 0);
                      var F = n - E - N,
                          L = e - A - I;
                      L === D && F === _ || (i.each(d, function(t) {
                          t.height = F
                      }), i.each(f, function(t) {
                          t.height = F
                      }), i.each(p, function(t) {
                          t.fullWidth || (t.width = L)
                      }), i.each(g, function(t) {
                          t.fullWidth || (t.width = L)
                      }), _ = F, D = L);
                      var R = l + O,
                          U = c + P;
                      i.each(d.concat(p), H), R += D, U += _, i.each(f, H), i.each(g, H), t.chartArea = {
                          left: A,
                          top: E,
                          right: A + D,
                          bottom: E + _
                      }, i.each(m, function(e) {
                          e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(D, _)
                      })
                  }

                  function W(t) {
                      var e = i.findNextWhere(C, function(e) {
                          return e.box === t
                      });
                      if (e)
                          if (t.isHorizontal()) {
                              var n = {
                                  left: Math.max(A, k),
                                  right: Math.max(I, T),
                                  top: 0,
                                  bottom: 0
                              };
                              t.update(t.fullWidth ? v : D, y / 2, n)
                          } else t.update(e.minSize.width, _)
                  }

                  function H(t) {
                      t.isHorizontal() ? (t.left = t.fullWidth ? l : A, t.right = t.fullWidth ? e - u : A + D, t.top = U, t.bottom = U + t.height, U = t.bottom) : (t.left = R, t.right = R + t.width, t.top = E, t.bottom = E + _, R = t.right)
                  }
              }
          }
      }, {
          46: 46
      }],
      32: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(46);
          i._set("global", {
              plugins: {}
          }), e.exports = {
              _plugins: [],
              _cacheId: 0,
              register: function(t) {
                  var e = this._plugins;
                  [].concat(t).forEach(function(t) {
                      -1 === e.indexOf(t) && e.push(t)
                  }), this._cacheId++
              },
              unregister: function(t) {
                  var e = this._plugins;
                  [].concat(t).forEach(function(t) {
                      var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                  }), this._cacheId++
              },
              clear: function() {
                  this._plugins = [], this._cacheId++
              },
              count: function() {
                  return this._plugins.length
              },
              getAll: function() {
                  return this._plugins
              },
              notify: function(t, e, n) {
                  var i, r, o, a, s, l = this.descriptors(t),
                      u = l.length;
                  for (i = 0; i < u; ++i)
                      if ("function" == typeof(s = (o = (r = l[i]).plugin)[e]) && ((a = [t].concat(n || [])).push(r.options), !1 === s.apply(o, a))) return !1;
                  return !0
              },
              descriptors: function(t) {
                  var e = t.$plugins || (t.$plugins = {});
                  if (e.id === this._cacheId) return e.descriptors;
                  var n = [],
                      o = [],
                      a = t && t.config || {},
                      s = a.options && a.options.plugins || {};
                  return this._plugins.concat(a.plugins || []).forEach(function(t) {
                      if (-1 === n.indexOf(t)) {
                          var e = t.id,
                              a = s[e];
                          !1 !== a && (!0 === a && (a = r.clone(i.global.plugins[e])), n.push(t), o.push({
                              plugin: t,
                              options: a || {}
                          }))
                      }
                  }), e.descriptors = o, e.id = this._cacheId, o
              },
              _invalidate: function(t) {
                  delete t.$plugins
              }
          }
      }, {
          26: 26,
          46: 46
      }],
      33: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46),
              a = t(35);

          function s(t) {
              var e, n, i = [];
              for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
              return i
          }

          function l(t, e, n) {
              var i = t.getPixelForTick(e);
              return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i
          }

          function u(t, e, n) {
              return o.isArray(e) ? o.longestText(t, n, e) : t.measureText(e).width
          }

          function c(t) {
              var e = o.valueOrDefault,
                  n = i.global,
                  r = e(t.fontSize, n.defaultFontSize),
                  a = e(t.fontStyle, n.defaultFontStyle),
                  s = e(t.fontFamily, n.defaultFontFamily);
              return {
                  size: r,
                  style: a,
                  family: s,
                  font: o.fontString(r, a, s)
              }
          }

          function h(t) {
              return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, i.global.defaultFontSize))
          }
          i._set("scale", {
              display: !0,
              position: "left",
              offset: !1,
              gridLines: {
                  display: !0,
                  color: "rgba(0, 0, 0, 0.1)",
                  lineWidth: 1,
                  drawBorder: !0,
                  drawOnChartArea: !0,
                  drawTicks: !0,
                  tickMarkLength: 10,
                  zeroLineWidth: 1,
                  zeroLineColor: "rgba(0,0,0,0.25)",
                  zeroLineBorderDash: [],
                  zeroLineBorderDashOffset: 0,
                  offsetGridLines: !1,
                  borderDash: [],
                  borderDashOffset: 0
              },
              scaleLabel: {
                  display: !1,
                  labelString: "",
                  lineHeight: 1.2,
                  padding: {
                      top: 4,
                      bottom: 4
                  }
              },
              ticks: {
                  beginAtZero: !1,
                  minRotation: 0,
                  maxRotation: 50,
                  mirror: !1,
                  padding: 0,
                  reverse: !1,
                  display: !0,
                  autoSkip: !0,
                  autoSkipPadding: 0,
                  labelOffset: 0,
                  callback: a.formatters.values,
                  minor: {},
                  major: {}
              }
          }), e.exports = r.extend({
              getPadding: function() {
                  return {
                      left: this.paddingLeft || 0,
                      top: this.paddingTop || 0,
                      right: this.paddingRight || 0,
                      bottom: this.paddingBottom || 0
                  }
              },
              getTicks: function() {
                  return this._ticks
              },
              mergeTicksOptions: function() {
                  var t = this.options.ticks;
                  for (var e in !1 === t.minor && (t.minor = {
                          display: !1
                      }), !1 === t.major && (t.major = {
                          display: !1
                      }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
              },
              beforeUpdate: function() {
                  o.callback(this.options.beforeUpdate, [this])
              },
              update: function(t, e, n) {
                  var i, r, a, s, l, u, c = this;
                  for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = o.extend({
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0
                      }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), a = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = a, i = 0, r = a.length; i < r; ++i) s = a[i], (u = l[i]) ? u.label = s : l.push(u = {
                      label: s,
                      major: !1
                  });
                  return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
              },
              afterUpdate: function() {
                  o.callback(this.options.afterUpdate, [this])
              },
              beforeSetDimensions: function() {
                  o.callback(this.options.beforeSetDimensions, [this])
              },
              setDimensions: function() {
                  var t = this;
                  t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
              },
              afterSetDimensions: function() {
                  o.callback(this.options.afterSetDimensions, [this])
              },
              beforeDataLimits: function() {
                  o.callback(this.options.beforeDataLimits, [this])
              },
              determineDataLimits: o.noop,
              afterDataLimits: function() {
                  o.callback(this.options.afterDataLimits, [this])
              },
              beforeBuildTicks: function() {
                  o.callback(this.options.beforeBuildTicks, [this])
              },
              buildTicks: o.noop,
              afterBuildTicks: function() {
                  o.callback(this.options.afterBuildTicks, [this])
              },
              beforeTickToLabelConversion: function() {
                  o.callback(this.options.beforeTickToLabelConversion, [this])
              },
              convertTicksToLabels: function() {
                  var t = this.options.ticks;
                  this.ticks = this.ticks.map(t.userCallback || t.callback, this)
              },
              afterTickToLabelConversion: function() {
                  o.callback(this.options.afterTickToLabelConversion, [this])
              },
              beforeCalculateTickRotation: function() {
                  o.callback(this.options.beforeCalculateTickRotation, [this])
              },
              calculateTickRotation: function() {
                  var t = this,
                      e = t.ctx,
                      n = t.options.ticks,
                      i = s(t._ticks),
                      r = c(n);
                  e.font = r.font;
                  var a = n.minRotation || 0;
                  if (i.length && t.options.display && t.isHorizontal())
                      for (var l, u = o.longestText(e, r.font, i, t.longestTextCache), h = u, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; h > d && a < n.maxRotation;) {
                          var f = o.toRadians(a);
                          if (l = Math.cos(f), Math.sin(f) * u > t.maxHeight) {
                              a--;
                              break
                          }
                          a++, h = l * u
                      }
                  t.labelRotation = a
              },
              afterCalculateTickRotation: function() {
                  o.callback(this.options.afterCalculateTickRotation, [this])
              },
              beforeFit: function() {
                  o.callback(this.options.beforeFit, [this])
              },
              fit: function() {
                  var t = this,
                      e = t.minSize = {
                          width: 0,
                          height: 0
                      },
                      n = s(t._ticks),
                      i = t.options,
                      r = i.ticks,
                      a = i.scaleLabel,
                      l = i.gridLines,
                      d = i.display,
                      f = t.isHorizontal(),
                      p = c(r),
                      g = i.gridLines.tickMarkLength;
                  if (e.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : d && l.drawTicks ? g : 0, e.height = f ? d && l.drawTicks ? g : 0 : t.maxHeight, a.display && d) {
                      var m = h(a) + o.options.toPadding(a.padding).height;
                      f ? e.height += m : e.width += m
                  }
                  if (r.display && d) {
                      var v = o.longestText(t.ctx, p.font, n, t.longestTextCache),
                          y = o.numberOfLabelLines(n),
                          b = .5 * p.size,
                          x = t.options.ticks.padding;
                      if (f) {
                          t.longestLabelWidth = v;
                          var w = o.toRadians(t.labelRotation),
                              D = Math.cos(w),
                              _ = Math.sin(w) * v + p.size * y + b * (y - 1) + b;
                          e.height = Math.min(t.maxHeight, e.height + _ + x), t.ctx.font = p.font;
                          var C = u(t.ctx, n[0], p.font),
                              k = u(t.ctx, n[n.length - 1], p.font);
                          0 !== t.labelRotation ? (t.paddingLeft = "bottom" === i.position ? D * C + 3 : D * b + 3, t.paddingRight = "bottom" === i.position ? D * b + 3 : D * k + 3) : (t.paddingLeft = C / 2 + 3, t.paddingRight = k / 2 + 3)
                      } else r.mirror ? v = 0 : v += x + b, e.width = Math.min(t.maxWidth, e.width + v), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                  }
                  t.handleMargins(), t.width = e.width, t.height = e.height
              },
              handleMargins: function() {
                  var t = this;
                  t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
              },
              afterFit: function() {
                  o.callback(this.options.afterFit, [this])
              },
              isHorizontal: function() {
                  return "top" === this.options.position || "bottom" === this.options.position
              },
              isFullWidth: function() {
                  return this.options.fullWidth
              },
              getRightValue: function(t) {
                  if (o.isNullOrUndef(t)) return NaN;
                  if ("number" == typeof t && !isFinite(t)) return NaN;
                  if (t)
                      if (this.isHorizontal()) {
                          if (void 0 !== t.x) return this.getRightValue(t.x)
                      } else if (void 0 !== t.y) return this.getRightValue(t.y);
                  return t
              },
              getLabelForIndex: o.noop,
              getPixelForValue: o.noop,
              getValueForPixel: o.noop,
              getPixelForTick: function(t) {
                  var e = this,
                      n = e.options.offset;
                  if (e.isHorizontal()) {
                      var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                          r = i * t + e.paddingLeft;
                      n && (r += i / 2);
                      var o = e.left + Math.round(r);
                      return o += e.isFullWidth() ? e.margins.left : 0
                  }
                  var a = e.height - (e.paddingTop + e.paddingBottom);
                  return e.top + t * (a / (e._ticks.length - 1))
              },
              getPixelForDecimal: function(t) {
                  var e = this;
                  if (e.isHorizontal()) {
                      var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                          i = e.left + Math.round(n);
                      return i += e.isFullWidth() ? e.margins.left : 0
                  }
                  return e.top + t * e.height
              },
              getBasePixel: function() {
                  return this.getPixelForValue(this.getBaseValue())
              },
              getBaseValue: function() {
                  var t = this.min,
                      e = this.max;
                  return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
              },
              _autoSkip: function(t) {
                  var e, n, i, r, a = this,
                      s = a.isHorizontal(),
                      l = a.options.ticks.minor,
                      u = t.length,
                      c = o.toRadians(a.labelRotation),
                      h = Math.cos(c),
                      d = a.longestLabelWidth * h,
                      f = [];
                  for (l.maxTicksLimit && (r = l.maxTicksLimit), s && (e = !1, (d + l.autoSkipPadding) * u > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((d + l.autoSkipPadding) * u / (a.width - (a.paddingLeft + a.paddingRight)))), r && u > r && (e = Math.max(e, Math.floor(u / r)))), n = 0; n < u; n++) i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i);
                  return f
              },
              draw: function(t) {
                  var e = this,
                      n = e.options;
                  if (n.display) {
                      var r = e.ctx,
                          a = i.global,
                          s = n.ticks.minor,
                          u = n.ticks.major || s,
                          d = n.gridLines,
                          f = n.scaleLabel,
                          p = 0 !== e.labelRotation,
                          g = e.isHorizontal(),
                          m = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                          v = o.valueOrDefault(s.fontColor, a.defaultFontColor),
                          y = c(s),
                          b = o.valueOrDefault(u.fontColor, a.defaultFontColor),
                          x = c(u),
                          w = d.drawTicks ? d.tickMarkLength : 0,
                          D = o.valueOrDefault(f.fontColor, a.defaultFontColor),
                          _ = c(f),
                          C = o.options.toPadding(f.padding),
                          k = o.toRadians(e.labelRotation),
                          T = [],
                          S = e.options.gridLines.lineWidth,
                          M = "right" === n.position ? e.left : e.right - S - w,
                          A = "right" === n.position ? e.left + w : e.right,
                          I = "bottom" === n.position ? e.top + S : e.bottom - w - S,
                          E = "bottom" === n.position ? e.top + S + w : e.bottom + S;
                      if (o.each(m, function(i, r) {
                              if (!o.isNullOrUndef(i.label)) {
                                  var u, c, h, f, v, y, b, x, D, _, C, N, O, P, F = i.label;
                                  r === e.zeroLineIndex && n.offset === d.offsetGridLines ? (u = d.zeroLineWidth, c = d.zeroLineColor, h = d.zeroLineBorderDash, f = d.zeroLineBorderDashOffset) : (u = o.valueAtIndexOrDefault(d.lineWidth, r), c = o.valueAtIndexOrDefault(d.color, r), h = o.valueOrDefault(d.borderDash, a.borderDash), f = o.valueOrDefault(d.borderDashOffset, a.borderDashOffset));
                                  var L = "middle",
                                      R = "middle",
                                      U = s.padding;
                                  if (g) {
                                      var W = w + U;
                                      "bottom" === n.position ? (R = p ? "middle" : "top", L = p ? "right" : "center", P = e.top + W) : (R = p ? "middle" : "bottom", L = p ? "left" : "center", P = e.bottom - W);
                                      var H = l(e, r, d.offsetGridLines && m.length > 1);
                                      H < e.left && (c = "rgba(0,0,0,0)"), H += o.aliasPixel(u), O = e.getPixelForTick(r) + s.labelOffset, v = b = D = C = H, y = I, x = E, _ = t.top, N = t.bottom + S
                                  } else {
                                      var j, V = "left" === n.position;
                                      s.mirror ? (L = V ? "left" : "right", j = U) : (L = V ? "right" : "left", j = w + U), O = V ? e.right - j : e.left + j;
                                      var B = l(e, r, d.offsetGridLines && m.length > 1);
                                      B < e.top && (c = "rgba(0,0,0,0)"), B += o.aliasPixel(u), P = e.getPixelForTick(r) + s.labelOffset, v = M, b = A, D = t.left, C = t.right + S, y = x = _ = N = B
                                  }
                                  T.push({
                                      tx1: v,
                                      ty1: y,
                                      tx2: b,
                                      ty2: x,
                                      x1: D,
                                      y1: _,
                                      x2: C,
                                      y2: N,
                                      labelX: O,
                                      labelY: P,
                                      glWidth: u,
                                      glColor: c,
                                      glBorderDash: h,
                                      glBorderDashOffset: f,
                                      rotation: -1 * k,
                                      label: F,
                                      major: i.major,
                                      textBaseline: R,
                                      textAlign: L
                                  })
                              }
                          }), o.each(T, function(t) {
                              if (d.display && (r.save(), r.lineWidth = t.glWidth, r.strokeStyle = t.glColor, r.setLineDash && (r.setLineDash(t.glBorderDash), r.lineDashOffset = t.glBorderDashOffset), r.beginPath(), d.drawTicks && (r.moveTo(t.tx1, t.ty1), r.lineTo(t.tx2, t.ty2)), d.drawOnChartArea && (r.moveTo(t.x1, t.y1), r.lineTo(t.x2, t.y2)), r.stroke(), r.restore()), s.display) {
                                  r.save(), r.translate(t.labelX, t.labelY), r.rotate(t.rotation), r.font = t.major ? x.font : y.font, r.fillStyle = t.major ? b : v, r.textBaseline = t.textBaseline, r.textAlign = t.textAlign;
                                  var n = t.label;
                                  if (o.isArray(n))
                                      for (var i = n.length, a = 1.5 * y.size, l = e.isHorizontal() ? 0 : -a * (i - 1) / 2, u = 0; u < i; ++u) r.fillText("" + n[u], 0, l), l += a;
                                  else r.fillText(n, 0, 0);
                                  r.restore()
                              }
                          }), f.display) {
                          var N, O, P = 0,
                              F = h(f) / 2;
                          if (g) N = e.left + (e.right - e.left) / 2, O = "bottom" === n.position ? e.bottom - F - C.bottom : e.top + F + C.top;
                          else {
                              var L = "left" === n.position;
                              N = L ? e.left + F + C.top : e.right - F - C.top, O = e.top + (e.bottom - e.top) / 2, P = L ? -.5 * Math.PI : .5 * Math.PI
                          }
                          r.save(), r.translate(N, O), r.rotate(P), r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = D, r.font = _.font, r.fillText(f.labelString, 0, 0), r.restore()
                      }
                      if (d.drawBorder) {
                          r.lineWidth = o.valueAtIndexOrDefault(d.lineWidth, 0), r.strokeStyle = o.valueAtIndexOrDefault(d.color, 0);
                          var R = e.left,
                              U = e.right + S,
                              W = e.top,
                              H = e.bottom + S,
                              j = o.aliasPixel(r.lineWidth);
                          g ? (W = H = "top" === n.position ? e.bottom : e.top, W += j, H += j) : (R = U = "left" === n.position ? e.right : e.left, R += j, U += j), r.beginPath(), r.moveTo(R, W), r.lineTo(U, H), r.stroke()
                      }
                  }
              }
          })
      }, {
          26: 26,
          27: 27,
          35: 35,
          46: 46
      }],
      34: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(46),
              o = t(31);
          e.exports = {
              constructors: {},
              defaults: {},
              registerScaleType: function(t, e, n) {
                  this.constructors[t] = e, this.defaults[t] = r.clone(n)
              },
              getScaleConstructor: function(t) {
                  return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
              },
              getScaleDefaults: function(t) {
                  return this.defaults.hasOwnProperty(t) ? r.merge({}, [i.scale, this.defaults[t]]) : {}
              },
              updateScaleDefaults: function(t, e) {
                  this.defaults.hasOwnProperty(t) && (this.defaults[t] = r.extend(this.defaults[t], e))
              },
              addScalesToLayout: function(t) {
                  r.each(t.scales, function(e) {
                      e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
                  })
              }
          }
      }, {
          26: 26,
          31: 31,
          46: 46
      }],
      35: [function(t, e, n) {
          "use strict";
          var i = t(46);
          e.exports = {
              formatters: {
                  values: function(t) {
                      return i.isArray(t) ? t : "" + t
                  },
                  linear: function(t, e, n) {
                      var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                      Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                      var o = i.log10(Math.abs(r)),
                          a = "";
                      if (0 !== t)
                          if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                              var s = i.log10(Math.abs(t));
                              a = t.toExponential(Math.floor(s) - Math.floor(o))
                          } else {
                              var l = -1 * Math.floor(o);
                              l = Math.max(Math.min(l, 20), 0), a = t.toFixed(l)
                          } else a = "0";
                      return a
                  },
                  logarithmic: function(t, e, n) {
                      var r = t / Math.pow(10, Math.floor(i.log10(t)));
                      return 0 === t ? "0" : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                  }
              }
          }
      }, {
          46: 46
      }],
      36: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46);
          i._set("global", {
              tooltips: {
                  enabled: !0,
                  custom: null,
                  mode: "nearest",
                  position: "average",
                  intersect: !0,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  titleFontStyle: "bold",
                  titleSpacing: 2,
                  titleMarginBottom: 6,
                  titleFontColor: "#fff",
                  titleAlign: "left",
                  bodySpacing: 2,
                  bodyFontColor: "#fff",
                  bodyAlign: "left",
                  footerFontStyle: "bold",
                  footerSpacing: 2,
                  footerMarginTop: 6,
                  footerFontColor: "#fff",
                  footerAlign: "left",
                  yPadding: 6,
                  xPadding: 6,
                  caretPadding: 2,
                  caretSize: 5,
                  cornerRadius: 6,
                  multiKeyBackground: "#fff",
                  displayColors: !0,
                  borderColor: "rgba(0,0,0,0)",
                  borderWidth: 0,
                  callbacks: {
                      beforeTitle: o.noop,
                      title: function(t, e) {
                          var n = "",
                              i = e.labels,
                              r = i ? i.length : 0;
                          if (t.length > 0) {
                              var o = t[0];
                              o.xLabel ? n = o.xLabel : r > 0 && o.index < r && (n = i[o.index])
                          }
                          return n
                      },
                      afterTitle: o.noop,
                      beforeBody: o.noop,
                      beforeLabel: o.noop,
                      label: function(t, e) {
                          var n = e.datasets[t.datasetIndex].label || "";
                          return n && (n += ": "), n += t.yLabel
                      },
                      labelColor: function(t, e) {
                          var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                          return {
                              borderColor: n.borderColor,
                              backgroundColor: n.backgroundColor
                          }
                      },
                      labelTextColor: function() {
                          return this._options.bodyFontColor
                      },
                      afterLabel: o.noop,
                      afterBody: o.noop,
                      beforeFooter: o.noop,
                      footer: o.noop,
                      afterFooter: o.noop
                  }
              }
          });
          var a = {
              average: function(t) {
                  if (!t.length) return !1;
                  var e, n, i = 0,
                      r = 0,
                      o = 0;
                  for (e = 0, n = t.length; e < n; ++e) {
                      var a = t[e];
                      if (a && a.hasValue()) {
                          var s = a.tooltipPosition();
                          i += s.x, r += s.y, ++o
                      }
                  }
                  return {
                      x: Math.round(i / o),
                      y: Math.round(r / o)
                  }
              },
              nearest: function(t, e) {
                  var n, i, r, a = e.x,
                      s = e.y,
                      l = Number.POSITIVE_INFINITY;
                  for (n = 0, i = t.length; n < i; ++n) {
                      var u = t[n];
                      if (u && u.hasValue()) {
                          var c = u.getCenterPoint(),
                              h = o.distanceBetweenPoints(e, c);
                          h < l && (l = h, r = u)
                      }
                  }
                  if (r) {
                      var d = r.tooltipPosition();
                      a = d.x, s = d.y
                  }
                  return {
                      x: a,
                      y: s
                  }
              }
          };

          function s(t, e) {
              var n = o.color(t);
              return n.alpha(e * n.alpha()).rgbaString()
          }

          function l(t, e) {
              return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
          }

          function u(t) {
              return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
          }

          function c(t) {
              var e = i.global,
                  n = o.valueOrDefault;
              return {
                  xPadding: t.xPadding,
                  yPadding: t.yPadding,
                  xAlign: t.xAlign,
                  yAlign: t.yAlign,
                  bodyFontColor: t.bodyFontColor,
                  _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                  _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                  _bodyAlign: t.bodyAlign,
                  bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                  bodySpacing: t.bodySpacing,
                  titleFontColor: t.titleFontColor,
                  _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                  _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                  titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                  _titleAlign: t.titleAlign,
                  titleSpacing: t.titleSpacing,
                  titleMarginBottom: t.titleMarginBottom,
                  footerFontColor: t.footerFontColor,
                  _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                  _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                  footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                  _footerAlign: t.footerAlign,
                  footerSpacing: t.footerSpacing,
                  footerMarginTop: t.footerMarginTop,
                  caretSize: t.caretSize,
                  cornerRadius: t.cornerRadius,
                  backgroundColor: t.backgroundColor,
                  opacity: 0,
                  legendColorBackground: t.multiKeyBackground,
                  displayColors: t.displayColors,
                  borderColor: t.borderColor,
                  borderWidth: t.borderWidth
              }
          }

          function h(t) {
              return l([], u(t))
          }(e.exports = r.extend({
              initialize: function() {
                  this._model = c(this._options), this._lastActive = []
              },
              getTitle: function() {
                  var t = this._options.callbacks,
                      e = t.beforeTitle.apply(this, arguments),
                      n = t.title.apply(this, arguments),
                      i = t.afterTitle.apply(this, arguments),
                      r = [];
                  return r = l(r, u(e)), r = l(r, u(n)), r = l(r, u(i))
              },
              getBeforeBody: function() {
                  return h(this._options.callbacks.beforeBody.apply(this, arguments))
              },
              getBody: function(t, e) {
                  var n = this,
                      i = n._options.callbacks,
                      r = [];
                  return o.each(t, function(t) {
                      var o = {
                          before: [],
                          lines: [],
                          after: []
                      };
                      l(o.before, u(i.beforeLabel.call(n, t, e))), l(o.lines, i.label.call(n, t, e)), l(o.after, u(i.afterLabel.call(n, t, e))), r.push(o)
                  }), r
              },
              getAfterBody: function() {
                  return h(this._options.callbacks.afterBody.apply(this, arguments))
              },
              getFooter: function() {
                  var t = this._options.callbacks,
                      e = t.beforeFooter.apply(this, arguments),
                      n = t.footer.apply(this, arguments),
                      i = t.afterFooter.apply(this, arguments),
                      r = [];
                  return r = l(r, u(e)), r = l(r, u(n)), r = l(r, u(i))
              },
              update: function(t) {
                  var e, n, i, r, s, l, u, h = this,
                      d = h._options,
                      f = h._model,
                      p = h._model = c(d),
                      g = h._active,
                      m = h._data,
                      v = {
                          xAlign: f.xAlign,
                          yAlign: f.yAlign
                      },
                      y = {
                          x: f.x,
                          y: f.y
                      },
                      b = {
                          width: f.width,
                          height: f.height
                      },
                      x = {
                          x: f.caretX,
                          y: f.caretY
                      };
                  if (g.length) {
                      p.opacity = 1;
                      var w = [],
                          D = [];
                      x = a[d.position].call(h, g, h._eventPosition);
                      var _ = [];
                      for (e = 0, n = g.length; e < n; ++e) _.push((i = g[e], r = void 0, s = void 0, l = void 0, u = void 0, r = i._xScale, s = i._yScale || i._scale, l = i._index, u = i._datasetIndex, {
                          xLabel: r ? r.getLabelForIndex(l, u) : "",
                          yLabel: s ? s.getLabelForIndex(l, u) : "",
                          index: l,
                          datasetIndex: u,
                          x: i._model.x,
                          y: i._model.y
                      }));
                      d.filter && (_ = _.filter(function(t) {
                          return d.filter(t, m)
                      })), d.itemSort && (_ = _.sort(function(t, e) {
                          return d.itemSort(t, e, m)
                      })), o.each(_, function(t) {
                          w.push(d.callbacks.labelColor.call(h, t, h._chart)), D.push(d.callbacks.labelTextColor.call(h, t, h._chart))
                      }), p.title = h.getTitle(_, m), p.beforeBody = h.getBeforeBody(_, m), p.body = h.getBody(_, m), p.afterBody = h.getAfterBody(_, m), p.footer = h.getFooter(_, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = d.caretPadding, p.labelColors = w, p.labelTextColors = D, p.dataPoints = _, b = function(t, e) {
                          var n = t._chart.ctx,
                              i = 2 * e.yPadding,
                              r = 0,
                              a = e.body,
                              s = a.reduce(function(t, e) {
                                  return t + e.before.length + e.lines.length + e.after.length
                              }, 0);
                          s += e.beforeBody.length + e.afterBody.length;
                          var l = e.title.length,
                              u = e.footer.length,
                              c = e.titleFontSize,
                              h = e.bodyFontSize,
                              d = e.footerFontSize;
                          i += l * c, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += s * h, i += s ? (s - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * d, i += u ? (u - 1) * e.footerSpacing : 0;
                          var f = 0,
                              p = function(t) {
                                  r = Math.max(r, n.measureText(t).width + f)
                              };
                          return n.font = o.fontString(c, e._titleFontStyle, e._titleFontFamily), o.each(e.title, p), n.font = o.fontString(h, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? h + 2 : 0, o.each(a, function(t) {
                              o.each(t.before, p), o.each(t.lines, p), o.each(t.after, p)
                          }), f = 0, n.font = o.fontString(d, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, p), {
                              width: r += 2 * e.xPadding,
                              height: i
                          }
                      }(this, p), y = function(t, e, n, i) {
                          var r = t.x,
                              o = t.y,
                              a = t.caretSize,
                              s = t.caretPadding,
                              l = t.cornerRadius,
                              u = n.xAlign,
                              c = n.yAlign,
                              h = a + s,
                              d = l + s;
                          return "right" === u ? r -= e.width : "center" === u && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === c ? o += h : o -= "bottom" === c ? e.height + h : e.height / 2, "center" === c ? "left" === u ? r += h : "right" === u && (r -= h) : "left" === u ? r -= d : "right" === u && (r += d), {
                              x: r,
                              y: o
                          }
                      }(p, b, v = function(t, e) {
                          var n, i, r, o, a, s = t._model,
                              l = t._chart,
                              u = t._chart.chartArea,
                              c = "center",
                              h = "center";
                          s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                          var d = (u.left + u.right) / 2,
                              f = (u.top + u.bottom) / 2;
                          "center" === h ? (n = function(t) {
                              return t <= d
                          }, i = function(t) {
                              return t > d
                          }) : (n = function(t) {
                              return t <= e.width / 2
                          }, i = function(t) {
                              return t >= l.width - e.width / 2
                          }), r = function(t) {
                              return t + e.width + s.caretSize + s.caretPadding > l.width
                          }, o = function(t) {
                              return t - e.width - s.caretSize - s.caretPadding < 0
                          }, a = function(t) {
                              return t <= f ? "top" : "bottom"
                          }, n(s.x) ? (c = "left", r(s.x) && (c = "center", h = a(s.y))) : i(s.x) && (c = "right", o(s.x) && (c = "center", h = a(s.y)));
                          var p = t._options;
                          return {
                              xAlign: p.xAlign ? p.xAlign : c,
                              yAlign: p.yAlign ? p.yAlign : h
                          }
                      }(this, b), h._chart)
                  } else p.opacity = 0;
                  return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = y.x, p.y = y.y, p.width = b.width, p.height = b.height, p.caretX = x.x, p.caretY = x.y, h._model = p, t && d.custom && d.custom.call(h, p), h
              },
              drawCaret: function(t, e) {
                  var n = this._chart.ctx,
                      i = this._view,
                      r = this.getCaretPosition(t, e, i);
                  n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
              },
              getCaretPosition: function(t, e, n) {
                  var i, r, o, a, s, l, u = n.caretSize,
                      c = n.cornerRadius,
                      h = n.xAlign,
                      d = n.yAlign,
                      f = t.x,
                      p = t.y,
                      g = e.width,
                      m = e.height;
                  if ("center" === d) s = p + m / 2, "left" === h ? (r = (i = f) - u, o = i, a = s + u, l = s - u) : (r = (i = f + g) + u, o = i, a = s - u, l = s + u);
                  else if ("left" === h ? (i = (r = f + c + u) - u, o = r + u) : "right" === h ? (i = (r = f + g - c - u) - u, o = r + u) : (i = (r = n.caretX) - u, o = r + u), "top" === d) s = (a = p) - u, l = a;
                  else {
                      s = (a = p + m) + u, l = a;
                      var v = o;
                      o = i, i = v
                  }
                  return {
                      x1: i,
                      x2: r,
                      x3: o,
                      y1: a,
                      y2: s,
                      y3: l
                  }
              },
              drawTitle: function(t, e, n, i) {
                  var r = e.title;
                  if (r.length) {
                      n.textAlign = e._titleAlign, n.textBaseline = "top";
                      var a, l, u = e.titleFontSize,
                          c = e.titleSpacing;
                      for (n.fillStyle = s(e.titleFontColor, i), n.font = o.fontString(u, e._titleFontStyle, e._titleFontFamily), a = 0, l = r.length; a < l; ++a) n.fillText(r[a], t.x, t.y), t.y += u + c, a + 1 === r.length && (t.y += e.titleMarginBottom - c)
                  }
              },
              drawBody: function(t, e, n, i) {
                  var r = e.bodyFontSize,
                      a = e.bodySpacing,
                      l = e.body;
                  n.textAlign = e._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, e._bodyFontStyle, e._bodyFontFamily);
                  var u = 0,
                      c = function(e) {
                          n.fillText(e, t.x + u, t.y), t.y += r + a
                      };
                  n.fillStyle = s(e.bodyFontColor, i), o.each(e.beforeBody, c);
                  var h = e.displayColors;
                  u = h ? r + 2 : 0, o.each(l, function(a, l) {
                      var u = s(e.labelTextColors[l], i);
                      n.fillStyle = u, o.each(a.before, c), o.each(a.lines, function(o) {
                          h && (n.fillStyle = s(e.legendColorBackground, i), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = s(e.labelColors[l].borderColor, i), n.strokeRect(t.x, t.y, r, r), n.fillStyle = s(e.labelColors[l].backgroundColor, i), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), c(o)
                      }), o.each(a.after, c)
                  }), u = 0, o.each(e.afterBody, c), t.y -= a
              },
              drawFooter: function(t, e, n, i) {
                  var r = e.footer;
                  r.length && (t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top", n.fillStyle = s(e.footerFontColor, i), n.font = o.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), o.each(r, function(i) {
                      n.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                  }))
              },
              drawBackground: function(t, e, n, i, r) {
                  n.fillStyle = s(e.backgroundColor, r), n.strokeStyle = s(e.borderColor, r), n.lineWidth = e.borderWidth;
                  var o = e.xAlign,
                      a = e.yAlign,
                      l = t.x,
                      u = t.y,
                      c = i.width,
                      h = i.height,
                      d = e.cornerRadius;
                  n.beginPath(), n.moveTo(l + d, u), "top" === a && this.drawCaret(t, i), n.lineTo(l + c - d, u), n.quadraticCurveTo(l + c, u, l + c, u + d), "center" === a && "right" === o && this.drawCaret(t, i), n.lineTo(l + c, u + h - d), n.quadraticCurveTo(l + c, u + h, l + c - d, u + h), "bottom" === a && this.drawCaret(t, i), n.lineTo(l + d, u + h), n.quadraticCurveTo(l, u + h, l, u + h - d), "center" === a && "left" === o && this.drawCaret(t, i), n.lineTo(l, u + d), n.quadraticCurveTo(l, u, l + d, u), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
              },
              draw: function() {
                  var t = this._chart.ctx,
                      e = this._view;
                  if (0 !== e.opacity) {
                      var n = {
                              width: e.width,
                              height: e.height
                          },
                          i = {
                              x: e.x,
                              y: e.y
                          },
                          r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                          o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                      this._options.enabled && o && (this.drawBackground(i, e, t, n, r), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, r), this.drawBody(i, e, t, r), this.drawFooter(i, e, t, r))
                  }
              },
              handleEvent: function(t) {
                  var e, n = this,
                      i = n._options;
                  return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), (e = !o.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                      x: t.x,
                      y: t.y
                  }, n.update(!0), n.pivot())), e
              }
          })).positioners = a
      }, {
          26: 26,
          27: 27,
          46: 46
      }],
      37: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46);
          i._set("global", {
              elements: {
                  arc: {
                      backgroundColor: i.global.defaultColor,
                      borderColor: "#fff",
                      borderWidth: 2
                  }
              }
          }), e.exports = r.extend({
              inLabelRange: function(t) {
                  var e = this._view;
                  return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
              },
              inRange: function(t, e) {
                  var n = this._view;
                  if (n) {
                      for (var i = o.getAngleFromPoint(n, {
                              x: t,
                              y: e
                          }), r = i.angle, a = i.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                      for (; r > l;) r -= 2 * Math.PI;
                      for (; r < s;) r += 2 * Math.PI;
                      var u = r >= s && r <= l,
                          c = a >= n.innerRadius && a <= n.outerRadius;
                      return u && c
                  }
                  return !1
              },
              getCenterPoint: function() {
                  var t = this._view,
                      e = (t.startAngle + t.endAngle) / 2,
                      n = (t.innerRadius + t.outerRadius) / 2;
                  return {
                      x: t.x + Math.cos(e) * n,
                      y: t.y + Math.sin(e) * n
                  }
              },
              getArea: function() {
                  var t = this._view;
                  return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
              },
              tooltipPosition: function() {
                  var t = this._view,
                      e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                      n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                  return {
                      x: t.x + Math.cos(e) * n,
                      y: t.y + Math.sin(e) * n
                  }
              },
              draw: function() {
                  var t = this._chart.ctx,
                      e = this._view,
                      n = e.startAngle,
                      i = e.endAngle;
                  t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
              }
          })
      }, {
          26: 26,
          27: 27,
          46: 46
      }],
      38: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46),
              a = i.global;
          i._set("global", {
              elements: {
                  line: {
                      tension: .4,
                      backgroundColor: a.defaultColor,
                      borderWidth: 3,
                      borderColor: a.defaultColor,
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0,
                      borderJoinStyle: "miter",
                      capBezierPoints: !0,
                      fill: !0
                  }
              }
          }), e.exports = r.extend({
              draw: function() {
                  var t, e, n, i, r = this._view,
                      s = this._chart.ctx,
                      l = r.spanGaps,
                      u = this._children.slice(),
                      c = a.elements.line,
                      h = -1;
                  for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = r.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(r.borderDash || c.borderDash), s.lineDashOffset = r.borderDashOffset || c.borderDashOffset, s.lineJoin = r.borderJoinStyle || c.borderJoinStyle, s.lineWidth = r.borderWidth || c.borderWidth, s.strokeStyle = r.borderColor || a.defaultColor, s.beginPath(), h = -1, t = 0; t < u.length; ++t) e = u[t], n = o.previousItem(u, t), i = e._view, 0 === t ? i.skip || (s.moveTo(i.x, i.y), h = t) : (n = -1 === h ? n : u[h], i.skip || (h !== t - 1 && !l || -1 === h ? s.moveTo(i.x, i.y) : o.canvas.lineTo(s, n._view, e._view), h = t));
                  s.stroke(), s.restore()
              }
          })
      }, {
          26: 26,
          27: 27,
          46: 46
      }],
      39: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46),
              a = i.global.defaultColor;

          function s(t) {
              var e = this._view;
              return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
          }
          i._set("global", {
              elements: {
                  point: {
                      radius: 3,
                      pointStyle: "circle",
                      backgroundColor: a,
                      borderColor: a,
                      borderWidth: 1,
                      hitRadius: 1,
                      hoverRadius: 4,
                      hoverBorderWidth: 1
                  }
              }
          }), e.exports = r.extend({
              inRange: function(t, e) {
                  var n = this._view;
                  return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
              },
              inLabelRange: s,
              inXRange: s,
              inYRange: function(t) {
                  var e = this._view;
                  return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
              },
              getCenterPoint: function() {
                  var t = this._view;
                  return {
                      x: t.x,
                      y: t.y
                  }
              },
              getArea: function() {
                  return Math.PI * Math.pow(this._view.radius, 2)
              },
              tooltipPosition: function() {
                  var t = this._view;
                  return {
                      x: t.x,
                      y: t.y,
                      padding: t.radius + t.borderWidth
                  }
              },
              draw: function(t) {
                  var e = this._view,
                      n = this._model,
                      r = this._chart.ctx,
                      s = e.pointStyle,
                      l = e.rotation,
                      u = e.radius,
                      c = e.x,
                      h = e.y;
                  e.skip || (void 0 === t || n.x >= t.left && 1.01 * t.right >= n.x && n.y >= t.top && 1.01 * t.bottom >= n.y) && (r.strokeStyle = e.borderColor || a, r.lineWidth = o.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth), r.fillStyle = e.backgroundColor || a, o.canvas.drawPoint(r, s, u, c, h, l))
              }
          })
      }, {
          26: 26,
          27: 27,
          46: 46
      }],
      40: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27);

          function o(t) {
              return void 0 !== t._view.width
          }

          function a(t) {
              var e, n, i, r, a = t._view;
              if (o(t)) {
                  var s = a.width / 2;
                  e = a.x - s, n = a.x + s, i = Math.min(a.y, a.base), r = Math.max(a.y, a.base)
              } else {
                  var l = a.height / 2;
                  e = Math.min(a.x, a.base), n = Math.max(a.x, a.base), i = a.y - l, r = a.y + l
              }
              return {
                  left: e,
                  top: i,
                  right: n,
                  bottom: r
              }
          }
          i._set("global", {
              elements: {
                  rectangle: {
                      backgroundColor: i.global.defaultColor,
                      borderColor: i.global.defaultColor,
                      borderSkipped: "bottom",
                      borderWidth: 0
                  }
              }
          }), e.exports = r.extend({
              draw: function() {
                  var t, e, n, i, r, o, a, s = this._chart.ctx,
                      l = this._view,
                      u = l.borderWidth;
                  if (l.horizontal ? (t = l.base, e = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, r = e > t ? 1 : -1, o = 1, a = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, n = l.y, r = 1, o = (i = l.base) > n ? 1 : -1, a = l.borderSkipped || "bottom"), u) {
                      var c = Math.min(Math.abs(t - e), Math.abs(n - i)),
                          h = (u = u > c ? c : u) / 2,
                          d = t + ("left" !== a ? h * r : 0),
                          f = e + ("right" !== a ? -h * r : 0),
                          p = n + ("top" !== a ? h * o : 0),
                          g = i + ("bottom" !== a ? -h * o : 0);
                      d !== f && (n = p, i = g), p !== g && (t = d, e = f)
                  }
                  s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                  var m = [
                          [t, i],
                          [t, n],
                          [e, n],
                          [e, i]
                      ],
                      v = ["bottom", "left", "top", "right"].indexOf(a, 0);

                  function y(t) {
                      return m[(v + t) % 4]
                  } - 1 === v && (v = 0);
                  var b = y(0);
                  s.moveTo(b[0], b[1]);
                  for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                  s.fill(), u && s.stroke()
              },
              height: function() {
                  var t = this._view;
                  return t.base - t.y
              },
              inRange: function(t, e) {
                  var n = !1;
                  if (this._view) {
                      var i = a(this);
                      n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom
                  }
                  return n
              },
              inLabelRange: function(t, e) {
                  if (!this._view) return !1;
                  var n = a(this);
                  return o(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom
              },
              inXRange: function(t) {
                  var e = a(this);
                  return t >= e.left && t <= e.right
              },
              inYRange: function(t) {
                  var e = a(this);
                  return t >= e.top && t <= e.bottom
              },
              getCenterPoint: function() {
                  var t, e, n = this._view;
                  return o(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                      x: t,
                      y: e
                  }
              },
              getArea: function() {
                  var t = this._view;
                  return t.width * Math.abs(t.y - t.base)
              },
              tooltipPosition: function() {
                  var t = this._view;
                  return {
                      x: t.x,
                      y: t.y
                  }
              }
          })
      }, {
          26: 26,
          27: 27
      }],
      41: [function(t, e, n) {
          "use strict";
          e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
      }, {
          37: 37,
          38: 38,
          39: 39,
          40: 40
      }],
      42: [function(t, e, n) {
          "use strict";
          var i = t(43);
          n = e.exports = {
              clear: function(t) {
                  t.ctx.clearRect(0, 0, t.width, t.height)
              },
              roundedRect: function(t, e, n, i, r, o) {
                  if (o) {
                      var a = Math.min(o, r / 2 - 1e-7, i / 2 - 1e-7);
                      t.moveTo(e + a, n), t.lineTo(e + i - a, n), t.arcTo(e + i, n, e + i, n + a, a), t.lineTo(e + i, n + r - a), t.arcTo(e + i, n + r, e + i - a, n + r, a), t.lineTo(e + a, n + r), t.arcTo(e, n + r, e, n + r - a, a), t.lineTo(e, n + a), t.arcTo(e, n, e + a, n, a), t.closePath(), t.moveTo(e, n)
                  } else t.rect(e, n, i, r)
              },
              drawPoint: function(t, e, n, i, r, o) {
                  var a, s, l, u, c, h;
                  if (o = o || 0, !e || "object" != typeof e || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
                      if (!(isNaN(n) || n <= 0)) {
                          switch (t.save(), t.translate(i, r), t.rotate(o * Math.PI / 180), t.beginPath(), e) {
                              default: t.arc(0, 0, n, 0, 2 * Math.PI),
                              t.closePath();
                              break;
                              case "triangle":
                                      c = (s = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                  t.moveTo(-s / 2, c / 3),
                                  t.lineTo(s / 2, c / 3),
                                  t.lineTo(0, -2 * c / 3),
                                  t.closePath();
                                  break;
                              case "rect":
                                      h = 1 / Math.SQRT2 * n,
                                  t.rect(-h, -h, 2 * h, 2 * h);
                                  break;
                              case "rectRounded":
                                      var d = n / Math.SQRT2,
                                      f = -d,
                                      p = -d,
                                      g = Math.SQRT2 * n;this.roundedRect(t, f, p, g, g, .425 * n);
                                  break;
                              case "rectRot":
                                      h = 1 / Math.SQRT2 * n,
                                  t.moveTo(-h, 0),
                                  t.lineTo(0, h),
                                  t.lineTo(h, 0),
                                  t.lineTo(0, -h),
                                  t.closePath();
                                  break;
                              case "cross":
                                      t.moveTo(0, n),
                                  t.lineTo(0, -n),
                                  t.moveTo(-n, 0),
                                  t.lineTo(n, 0);
                                  break;
                              case "crossRot":
                                      l = Math.cos(Math.PI / 4) * n,
                                  u = Math.sin(Math.PI / 4) * n,
                                  t.moveTo(-l, -u),
                                  t.lineTo(l, u),
                                  t.moveTo(-l, u),
                                  t.lineTo(l, -u);
                                  break;
                              case "star":
                                      t.moveTo(0, n),
                                  t.lineTo(0, -n),
                                  t.moveTo(-n, 0),
                                  t.lineTo(n, 0),
                                  l = Math.cos(Math.PI / 4) * n,
                                  u = Math.sin(Math.PI / 4) * n,
                                  t.moveTo(-l, -u),
                                  t.lineTo(l, u),
                                  t.moveTo(-l, u),
                                  t.lineTo(l, -u);
                                  break;
                              case "line":
                                      t.moveTo(-n, 0),
                                  t.lineTo(n, 0);
                                  break;
                              case "dash":
                                      t.moveTo(0, 0),
                                  t.lineTo(n, 0)
                          }
                          t.fill(), t.stroke(), t.restore()
                      }
                  } else t.drawImage(e, i - e.width / 2, r - e.height / 2, e.width, e.height)
              },
              clipArea: function(t, e) {
                  t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
              },
              unclipArea: function(t) {
                  t.restore()
              },
              lineTo: function(t, e, n, i) {
                  if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
                  n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
              }
          };
          i.clear = n.clear, i.drawRoundedRectangle = function(t) {
              t.beginPath(), n.roundedRect.apply(n, arguments)
          }
      }, {
          43: 43
      }],
      43: [function(t, e, n) {
          "use strict";
          var i, r = {
              noop: function() {},
              uid: (i = 0, function() {
                  return i++
              }),
              isNullOrUndef: function(t) {
                  return null == t
              },
              isArray: Array.isArray ? Array.isArray : function(t) {
                  return "[object Array]" === Object.prototype.toString.call(t)
              },
              isObject: function(t) {
                  return null !== t && "[object Object]" === Object.prototype.toString.call(t)
              },
              valueOrDefault: function(t, e) {
                  return void 0 === t ? e : t
              },
              valueAtIndexOrDefault: function(t, e, n) {
                  return r.valueOrDefault(r.isArray(t) ? t[e] : t, n)
              },
              callback: function(t, e, n) {
                  if (t && "function" == typeof t.call) return t.apply(n, e)
              },
              each: function(t, e, n, i) {
                  var o, a, s;
                  if (r.isArray(t))
                      if (a = t.length, i)
                          for (o = a - 1; o >= 0; o--) e.call(n, t[o], o);
                      else
                          for (o = 0; o < a; o++) e.call(n, t[o], o);
                  else if (r.isObject(t))
                      for (a = (s = Object.keys(t)).length, o = 0; o < a; o++) e.call(n, t[s[o]], s[o])
              },
              arrayEquals: function(t, e) {
                  var n, i, o, a;
                  if (!t || !e || t.length !== e.length) return !1;
                  for (n = 0, i = t.length; n < i; ++n)
                      if (o = t[n], a = e[n], o instanceof Array && a instanceof Array) {
                          if (!r.arrayEquals(o, a)) return !1
                      } else if (o !== a) return !1;
                  return !0
              },
              clone: function(t) {
                  if (r.isArray(t)) return t.map(r.clone);
                  if (r.isObject(t)) {
                      for (var e = {}, n = Object.keys(t), i = n.length, o = 0; o < i; ++o) e[n[o]] = r.clone(t[n[o]]);
                      return e
                  }
                  return t
              },
              _merger: function(t, e, n, i) {
                  var o = e[t],
                      a = n[t];
                  r.isObject(o) && r.isObject(a) ? r.merge(o, a, i) : e[t] = r.clone(a)
              },
              _mergerIf: function(t, e, n) {
                  var i = e[t],
                      o = n[t];
                  r.isObject(i) && r.isObject(o) ? r.mergeIf(i, o) : e.hasOwnProperty(t) || (e[t] = r.clone(o))
              },
              merge: function(t, e, n) {
                  var i, o, a, s, l, u = r.isArray(e) ? e : [e],
                      c = u.length;
                  if (!r.isObject(t)) return t;
                  for (i = (n = n || {}).merger || r._merger, o = 0; o < c; ++o)
                      if (e = u[o], r.isObject(e))
                          for (l = 0, s = (a = Object.keys(e)).length; l < s; ++l) i(a[l], t, e, n);
                  return t
              },
              mergeIf: function(t, e) {
                  return r.merge(t, e, {
                      merger: r._mergerIf
                  })
              },
              extend: function(t) {
                  for (var e = function(e, n) {
                          t[n] = e
                      }, n = 1, i = arguments.length; n < i; ++n) r.each(arguments[n], e);
                  return t
              },
              inherits: function(t) {
                  var e = this,
                      n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                          return e.apply(this, arguments)
                      },
                      i = function() {
                          this.constructor = n
                      };
                  return i.prototype = e.prototype, n.prototype = new i, n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n
              }
          };
          e.exports = r, r.callCallback = r.callback, r.indexOf = function(t, e, n) {
              return Array.prototype.indexOf.call(t, e, n)
          }, r.getValueOrDefault = r.valueOrDefault, r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault
      }, {}],
      44: [function(t, e, n) {
          "use strict";
          var i = t(43),
              r = {
                  linear: function(t) {
                      return t
                  },
                  easeInQuad: function(t) {
                      return t * t
                  },
                  easeOutQuad: function(t) {
                      return -t * (t - 2)
                  },
                  easeInOutQuad: function(t) {
                      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                  },
                  easeInCubic: function(t) {
                      return t * t * t
                  },
                  easeOutCubic: function(t) {
                      return (t -= 1) * t * t + 1
                  },
                  easeInOutCubic: function(t) {
                      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                  },
                  easeInQuart: function(t) {
                      return t * t * t * t
                  },
                  easeOutQuart: function(t) {
                      return -((t -= 1) * t * t * t - 1)
                  },
                  easeInOutQuart: function(t) {
                      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                  },
                  easeInQuint: function(t) {
                      return t * t * t * t * t
                  },
                  easeOutQuint: function(t) {
                      return (t -= 1) * t * t * t * t + 1
                  },
                  easeInOutQuint: function(t) {
                      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                  },
                  easeInSine: function(t) {
                      return 1 - Math.cos(t * (Math.PI / 2))
                  },
                  easeOutSine: function(t) {
                      return Math.sin(t * (Math.PI / 2))
                  },
                  easeInOutSine: function(t) {
                      return -.5 * (Math.cos(Math.PI * t) - 1)
                  },
                  easeInExpo: function(t) {
                      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                  },
                  easeOutExpo: function(t) {
                      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                  },
                  easeInOutExpo: function(t) {
                      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                  },
                  easeInCirc: function(t) {
                      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                  },
                  easeOutCirc: function(t) {
                      return Math.sqrt(1 - (t -= 1) * t)
                  },
                  easeInOutCirc: function(t) {
                      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                  },
                  easeInElastic: function(t) {
                      var e = 1.70158,
                          n = 0,
                          i = 1;
                      return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                  },
                  easeOutElastic: function(t) {
                      var e = 1.70158,
                          n = 0,
                          i = 1;
                      return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                  },
                  easeInOutElastic: function(t) {
                      var e = 1.70158,
                          n = 0,
                          i = 1;
                      return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                  },
                  easeInBack: function(t) {
                      var e = 1.70158;
                      return t * t * ((e + 1) * t - e)
                  },
                  easeOutBack: function(t) {
                      var e = 1.70158;
                      return (t -= 1) * t * ((e + 1) * t + e) + 1
                  },
                  easeInOutBack: function(t) {
                      var e = 1.70158;
                      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                  },
                  easeInBounce: function(t) {
                      return 1 - r.easeOutBounce(1 - t)
                  },
                  easeOutBounce: function(t) {
                      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                  },
                  easeInOutBounce: function(t) {
                      return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                  }
              };
          e.exports = {
              effects: r
          }, i.easingEffects = r
      }, {
          43: 43
      }],
      45: [function(t, e, n) {
          "use strict";
          var i = t(43);
          e.exports = {
              toLineHeight: function(t, e) {
                  var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                  if (!n || "normal" === n[1]) return 1.2 * e;
                  switch (t = +n[2], n[3]) {
                      case "px":
                          return t;
                      case "%":
                          t /= 100
                  }
                  return e * t
              },
              toPadding: function(t) {
                  var e, n, r, o;
                  return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, r = +t.bottom || 0, o = +t.left || 0) : e = n = r = o = +t || 0, {
                      top: e,
                      right: n,
                      bottom: r,
                      left: o,
                      height: e + r,
                      width: o + n
                  }
              },
              resolve: function(t, e, n) {
                  var r, o, a;
                  for (r = 0, o = t.length; r < o; ++r)
                      if (void 0 !== (a = t[r]) && (void 0 !== e && "function" == typeof a && (a = a(e)), void 0 !== n && i.isArray(a) && (a = a[n]), void 0 !== a)) return a
              }
          }
      }, {
          43: 43
      }],
      46: [function(t, e, n) {
          "use strict";
          e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
      }, {
          42: 42,
          43: 43,
          44: 44,
          45: 45
      }],
      47: [function(t, e, n) {
          e.exports = {
              acquireContext: function(t) {
                  return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
              }
          }
      }, {}],
      48: [function(t, e, n) {
          "use strict";
          var i = t(46),
              r = "$chartjs",
              o = "chartjs-",
              a = o + "render-monitor",
              s = o + "render-animation",
              l = ["animationstart", "webkitAnimationStart"],
              u = {
                  touchstart: "mousedown",
                  touchmove: "mousemove",
                  touchend: "mouseup",
                  pointerenter: "mouseenter",
                  pointerdown: "mousedown",
                  pointermove: "mousemove",
                  pointerup: "mouseup",
                  pointerleave: "mouseout",
                  pointerout: "mouseout"
              };

          function c(t, e) {
              var n = i.getStyle(t, e),
                  r = n && n.match(/^(\d+)(\.\d+)?px$/);
              return r ? Number(r[1]) : void 0
          }
          var h = !! function() {
              var t = !1;
              try {
                  var e = Object.defineProperty({}, "passive", {
                      get: function() {
                          t = !0
                      }
                  });
                  window.addEventListener("e", null, e)
              } catch (t) {}
              return t
          }() && {
              passive: !0
          };

          function d(t, e, n) {
              t.addEventListener(e, n, h)
          }

          function f(t, e, n) {
              t.removeEventListener(e, n, h)
          }

          function p(t, e, n, i, r) {
              return {
                  type: t,
                  chart: e,
                  native: r || null,
                  x: void 0 !== n ? n : null,
                  y: void 0 !== i ? i : null
              }
          }

          function g(t, e, n) {
              var u, c, h, f, g = t[r] || (t[r] = {}),
                  m = g.resizer = function(t) {
                      var e = document.createElement("div"),
                          n = o + "size-monitor",
                          i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                      e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                      var r = e.childNodes[0],
                          a = e.childNodes[1];
                      e._reset = function() {
                          r.scrollLeft = 1e6, r.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                      };
                      var s = function() {
                          e._reset(), t()
                      };
                      return d(r, "scroll", s.bind(r, "expand")), d(a, "scroll", s.bind(a, "shrink")), e
                  }((u = function() {
                      if (g.resizer) return e(p("resize", n))
                  }, h = !1, f = [], function() {
                      f = Array.prototype.slice.call(arguments), c = c || this, h || (h = !0, i.requestAnimFrame.call(window, function() {
                          h = !1, u.apply(c, f)
                      }))
                  }));
              ! function(t, e) {
                  var n = t[r] || (t[r] = {}),
                      o = n.renderProxy = function(t) {
                          t.animationName === s && e()
                      };
                  i.each(l, function(e) {
                      d(t, e, o)
                  }), n.reflow = !!t.offsetParent, t.classList.add(a)
              }(t, function() {
                  if (g.resizer) {
                      var e = t.parentNode;
                      e && e !== m.parentNode && e.insertBefore(m, e.firstChild), m._reset()
                  }
              })
          }

          function m(t) {
              var e = t[r] || {},
                  n = e.resizer;
              delete e.resizer,
                  function(t) {
                      var e = t[r] || {},
                          n = e.renderProxy;
                      n && (i.each(l, function(e) {
                          f(t, e, n)
                      }), delete e.renderProxy), t.classList.remove(a)
                  }(t), n && n.parentNode && n.parentNode.removeChild(n)
          }
          e.exports = {
              _enabled: "undefined" != typeof window && "undefined" != typeof document,
              initialize: function() {
                  var t, e, n, i = "from{opacity:0.99}to{opacity:1}";
                  e = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + a + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
              },
              acquireContext: function(t, e) {
                  "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                  var n = t && t.getContext && t.getContext("2d");
                  return n && n.canvas === t ? (function(t, e) {
                      var n = t.style,
                          i = t.getAttribute("height"),
                          o = t.getAttribute("width");
                      if (t[r] = {
                              initial: {
                                  height: i,
                                  width: o,
                                  style: {
                                      display: n.display,
                                      height: n.height,
                                      width: n.width
                                  }
                              }
                          }, n.display = n.display || "block", null === o || "" === o) {
                          var a = c(t, "width");
                          void 0 !== a && (t.width = a)
                      }
                      if (null === i || "" === i)
                          if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                          else {
                              var s = c(t, "height");
                              void 0 !== a && (t.height = s)
                          }
                  }(t, e), n) : null
              },
              releaseContext: function(t) {
                  var e = t.canvas;
                  if (e[r]) {
                      var n = e[r].initial;
                      ["height", "width"].forEach(function(t) {
                          var r = n[t];
                          i.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                      }), i.each(n.style || {}, function(t, n) {
                          e.style[n] = t
                      }), e.width = e.width, delete e[r]
                  }
              },
              addEventListener: function(t, e, n) {
                  var o = t.canvas;
                  if ("resize" !== e) {
                      var a = n[r] || (n[r] = {});
                      d(o, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                          n(function(t, e) {
                              var n = u[t.type] || t.type,
                                  r = i.getRelativePosition(t, e);
                              return p(n, e, r.x, r.y, t)
                          }(e, t))
                      })
                  } else g(o, n, t)
              },
              removeEventListener: function(t, e, n) {
                  var i = t.canvas;
                  if ("resize" !== e) {
                      var o = ((n[r] || {}).proxies || {})[t.id + "_" + e];
                      o && f(i, e, o)
                  } else m(i)
              }
          }, i.addEvent = d, i.removeEvent = f
      }, {
          46: 46
      }],
      49: [function(t, e, n) {
          "use strict";
          var i = t(46),
              r = t(47),
              o = t(48),
              a = o._enabled ? o : r;
          e.exports = i.extend({
              initialize: function() {},
              acquireContext: function() {},
              releaseContext: function() {},
              addEventListener: function() {},
              removeEventListener: function() {}
          }, a)
      }, {
          46: 46,
          47: 47,
          48: 48
      }],
      50: [function(t, e, n) {
          "use strict";
          e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
      }, {
          51: 51,
          52: 52,
          53: 53
      }],
      51: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(41),
              o = t(46);
          i._set("global", {
              plugins: {
                  filler: {
                      propagate: !0
                  }
              }
          });
          var a = {
              dataset: function(t) {
                  var e = t.fill,
                      n = t.chart,
                      i = n.getDatasetMeta(e),
                      r = i && n.isDatasetVisible(e) && i.dataset._children || [],
                      o = r.length || 0;
                  return o ? function(t, e) {
                      return e < o && r[e]._view || null
                  } : null
              },
              boundary: function(t) {
                  var e = t.boundary,
                      n = e ? e.x : null,
                      i = e ? e.y : null;
                  return function(t) {
                      return {
                          x: null === n ? t.x : n,
                          y: null === i ? t.y : i
                      }
                  }
              }
          };

          function s(t, e, n) {
              var i, r = t._model || {},
                  o = r.fill;
              if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
              if (!0 === o) return "origin";
              if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
              switch (o) {
                  case "bottom":
                      return "start";
                  case "top":
                      return "end";
                  case "zero":
                      return "origin";
                  case "origin":
                  case "start":
                  case "end":
                      return o;
                  default:
                      return !1
              }
          }

          function l(t) {
              var e, n = t.el._model || {},
                  i = t.el._scale || {},
                  r = t.fill,
                  o = null;
              if (isFinite(r)) return null;
              if ("start" === r ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), null != o) {
                  if (void 0 !== o.x && void 0 !== o.y) return o;
                  if ("number" == typeof o && isFinite(o)) return {
                      x: (e = i.isHorizontal()) ? o : null,
                      y: e ? null : o
                  }
              }
              return null
          }

          function u(t, e, n) {
              var i, r = t[e].fill,
                  o = [e];
              if (!n) return r;
              for (; !1 !== r && -1 === o.indexOf(r);) {
                  if (!isFinite(r)) return r;
                  if (!(i = t[r])) return !1;
                  if (i.visible) return r;
                  o.push(r), r = i.fill
              }
              return !1
          }

          function c(t) {
              var e = t.fill,
                  n = "dataset";
              return !1 === e ? null : (isFinite(e) || (n = "boundary"), a[n](t))
          }

          function h(t) {
              return t && !t.skip
          }

          function d(t, e, n, i, r) {
              var a;
              if (i && r) {
                  for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a) o.canvas.lineTo(t, e[a - 1], e[a]);
                  for (t.lineTo(n[r - 1].x, n[r - 1].y), a = r - 1; a > 0; --a) o.canvas.lineTo(t, n[a], n[a - 1], !0)
              }
          }
          e.exports = {
              id: "filler",
              afterDatasetsUpdate: function(t, e) {
                  var n, i, o, a, h = (t.data.datasets || []).length,
                      d = e.propagate,
                      f = [];
                  for (i = 0; i < h; ++i) a = null, (o = (n = t.getDatasetMeta(i)).dataset) && o._model && o instanceof r.Line && (a = {
                      visible: t.isDatasetVisible(i),
                      fill: s(o, i, h),
                      chart: t,
                      el: o
                  }), n.$filler = a, f.push(a);
                  for (i = 0; i < h; ++i)(a = f[i]) && (a.fill = u(f, i, d), a.boundary = l(a), a.mapper = c(a))
              },
              beforeDatasetDraw: function(t, e) {
                  var n = e.meta.$filler;
                  if (n) {
                      var r = t.ctx,
                          a = n.el,
                          s = a._view,
                          l = a._children || [],
                          u = n.mapper,
                          c = s.backgroundColor || i.global.defaultColor;
                      u && c && l.length && (o.canvas.clipArea(r, t.chartArea), function(t, e, n, i, r, o) {
                          var a, s, l, u, c, f, p, g = e.length,
                              m = i.spanGaps,
                              v = [],
                              y = [],
                              b = 0,
                              x = 0;
                          for (t.beginPath(), a = 0, s = g + !!o; a < s; ++a) c = n(u = e[l = a % g]._view, l, i), f = h(u), p = h(c), f && p ? (b = v.push(u), x = y.push(c)) : b && x && (m ? (f && v.push(u), p && y.push(c)) : (d(t, v, y, b, x), b = x = 0, v = [], y = []));
                          d(t, v, y, b, x), t.closePath(), t.fillStyle = r, t.fill()
                      }(r, l, u, s, c, a._loop), o.canvas.unclipArea(r))
                  }
              }
          }
      }, {
          26: 26,
          41: 41,
          46: 46
      }],
      52: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46),
              a = t(31),
              s = o.noop;

          function l(t, e) {
              return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
          }
          i._set("global", {
              legend: {
                  display: !0,
                  position: "top",
                  fullWidth: !0,
                  reverse: !1,
                  weight: 1e3,
                  onClick: function(t, e) {
                      var n = e.datasetIndex,
                          i = this.chart,
                          r = i.getDatasetMeta(n);
                      r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
                  },
                  onHover: null,
                  labels: {
                      boxWidth: 40,
                      padding: 10,
                      generateLabels: function(t) {
                          var e = t.data;
                          return o.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                              return {
                                  text: e.label,
                                  fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                  hidden: !t.isDatasetVisible(n),
                                  lineCap: e.borderCapStyle,
                                  lineDash: e.borderDash,
                                  lineDashOffset: e.borderDashOffset,
                                  lineJoin: e.borderJoinStyle,
                                  lineWidth: e.borderWidth,
                                  strokeStyle: e.borderColor,
                                  pointStyle: e.pointStyle,
                                  datasetIndex: n
                              }
                          }, this) : []
                      }
                  }
              },
              legendCallback: function(t) {
                  var e = [];
                  e.push('<ul class="' + t.id + '-legend">');
                  for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                  return e.push("</ul>"), e.join("")
              }
          });
          var u = r.extend({
              initialize: function(t) {
                  o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
              },
              beforeUpdate: s,
              update: function(t, e, n) {
                  var i = this;
                  return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
              },
              afterUpdate: s,
              beforeSetDimensions: s,
              setDimensions: function() {
                  var t = this;
                  t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                      width: 0,
                      height: 0
                  }
              },
              afterSetDimensions: s,
              beforeBuildLabels: s,
              buildLabels: function() {
                  var t = this,
                      e = t.options.labels || {},
                      n = o.callback(e.generateLabels, [t.chart], t) || [];
                  e.filter && (n = n.filter(function(n) {
                      return e.filter(n, t.chart.data)
                  })), t.options.reverse && n.reverse(), t.legendItems = n
              },
              afterBuildLabels: s,
              beforeFit: s,
              fit: function() {
                  var t = this,
                      e = t.options,
                      n = e.labels,
                      r = e.display,
                      a = t.ctx,
                      s = i.global,
                      u = o.valueOrDefault,
                      c = u(n.fontSize, s.defaultFontSize),
                      h = u(n.fontStyle, s.defaultFontStyle),
                      d = u(n.fontFamily, s.defaultFontFamily),
                      f = o.fontString(c, h, d),
                      p = t.legendHitBoxes = [],
                      g = t.minSize,
                      m = t.isHorizontal();
                  if (m ? (g.width = t.maxWidth, g.height = r ? 10 : 0) : (g.width = r ? 10 : 0, g.height = t.maxHeight), r)
                      if (a.font = f, m) {
                          var v = t.lineWidths = [0],
                              y = t.legendItems.length ? c + n.padding : 0;
                          a.textAlign = "left", a.textBaseline = "top", o.each(t.legendItems, function(e, i) {
                              var r = l(n, c) + c / 2 + a.measureText(e.text).width;
                              v[v.length - 1] + r + n.padding >= t.width && (y += c + n.padding, v[v.length] = t.left), p[i] = {
                                  left: 0,
                                  top: 0,
                                  width: r,
                                  height: c
                              }, v[v.length - 1] += r + n.padding
                          }), g.height += y
                      } else {
                          var b = n.padding,
                              x = t.columnWidths = [],
                              w = n.padding,
                              D = 0,
                              _ = 0,
                              C = c + b;
                          o.each(t.legendItems, function(t, e) {
                              var i = l(n, c) + c / 2 + a.measureText(t.text).width;
                              _ + C > g.height && (w += D + n.padding, x.push(D), D = 0, _ = 0), D = Math.max(D, i), _ += C, p[e] = {
                                  left: 0,
                                  top: 0,
                                  width: i,
                                  height: c
                              }
                          }), w += D, x.push(D), g.width += w
                      }
                  t.width = g.width, t.height = g.height
              },
              afterFit: s,
              isHorizontal: function() {
                  return "top" === this.options.position || "bottom" === this.options.position
              },
              draw: function() {
                  var t = this,
                      e = t.options,
                      n = e.labels,
                      r = i.global,
                      a = r.elements.line,
                      s = t.width,
                      u = t.lineWidths;
                  if (e.display) {
                      var c, h = t.ctx,
                          d = o.valueOrDefault,
                          f = d(n.fontColor, r.defaultFontColor),
                          p = d(n.fontSize, r.defaultFontSize),
                          g = d(n.fontStyle, r.defaultFontStyle),
                          m = d(n.fontFamily, r.defaultFontFamily),
                          v = o.fontString(p, g, m);
                      h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = v;
                      var y = l(n, p),
                          b = t.legendHitBoxes,
                          x = t.isHorizontal();
                      c = x ? {
                          x: t.left + (s - u[0]) / 2,
                          y: t.top + n.padding,
                          line: 0
                      } : {
                          x: t.left + n.padding,
                          y: t.top + n.padding,
                          line: 0
                      };
                      var w = p + n.padding;
                      o.each(t.legendItems, function(i, l) {
                          var f = h.measureText(i.text).width,
                              g = y + p / 2 + f,
                              m = c.x,
                              v = c.y;
                          x ? m + g >= s && (v = c.y += w, c.line++, m = c.x = t.left + (s - u[c.line]) / 2) : v + w > t.bottom && (m = c.x = m + t.columnWidths[c.line] + n.padding, v = c.y = t.top + n.padding, c.line++),
                              function(t, n, i) {
                                  if (!(isNaN(y) || y <= 0)) {
                                      h.save(), h.fillStyle = d(i.fillStyle, r.defaultColor), h.lineCap = d(i.lineCap, a.borderCapStyle), h.lineDashOffset = d(i.lineDashOffset, a.borderDashOffset), h.lineJoin = d(i.lineJoin, a.borderJoinStyle), h.lineWidth = d(i.lineWidth, a.borderWidth), h.strokeStyle = d(i.strokeStyle, r.defaultColor);
                                      var s = 0 === d(i.lineWidth, a.borderWidth);
                                      if (h.setLineDash && h.setLineDash(d(i.lineDash, a.borderDash)), e.labels && e.labels.usePointStyle) {
                                          var l = p * Math.SQRT2 / 2,
                                              u = l / Math.SQRT2,
                                              c = t + u,
                                              f = n + u;
                                          o.canvas.drawPoint(h, i.pointStyle, l, c, f)
                                      } else s || h.strokeRect(t, n, y, p), h.fillRect(t, n, y, p);
                                      h.restore()
                                  }
                              }(m, v, i), b[l].left = m, b[l].top = v,
                              function(t, e, n, i) {
                                  var r = p / 2,
                                      o = y + r + t,
                                      a = e + r;
                                  h.fillText(n.text, o, a), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(o, a), h.lineTo(o + i, a), h.stroke())
                              }(m, v, i, f), x ? c.x += g + n.padding : c.y += w
                      })
                  }
              },
              handleEvent: function(t) {
                  var e = this,
                      n = e.options,
                      i = "mouseup" === t.type ? "click" : t.type,
                      r = !1;
                  if ("mousemove" === i) {
                      if (!n.onHover) return
                  } else {
                      if ("click" !== i) return;
                      if (!n.onClick) return
                  }
                  var o = t.x,
                      a = t.y;
                  if (o >= e.left && o <= e.right && a >= e.top && a <= e.bottom)
                      for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                          var u = s[l];
                          if (o >= u.left && o <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
                              if ("click" === i) {
                                  n.onClick.call(e, t.native, e.legendItems[l]), r = !0;
                                  break
                              }
                              if ("mousemove" === i) {
                                  n.onHover.call(e, t.native, e.legendItems[l]), r = !0;
                                  break
                              }
                          }
                      }
                  return r
              }
          });

          function c(t, e) {
              var n = new u({
                  ctx: t.ctx,
                  options: e,
                  chart: t
              });
              a.configure(t, n, e), a.addBox(t, n), t.legend = n
          }
          e.exports = {
              id: "legend",
              _element: u,
              beforeInit: function(t) {
                  var e = t.options.legend;
                  e && c(t, e)
              },
              beforeUpdate: function(t) {
                  var e = t.options.legend,
                      n = t.legend;
                  e ? (o.mergeIf(e, i.global.legend), n ? (a.configure(t, n, e), n.options = e) : c(t, e)) : n && (a.removeBox(t, n), delete t.legend)
              },
              afterEvent: function(t, e) {
                  var n = t.legend;
                  n && n.handleEvent(e)
              }
          }
      }, {
          26: 26,
          27: 27,
          31: 31,
          46: 46
      }],
      53: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(27),
              o = t(46),
              a = t(31),
              s = o.noop;
          i._set("global", {
              title: {
                  display: !1,
                  fontStyle: "bold",
                  fullWidth: !0,
                  lineHeight: 1.2,
                  padding: 10,
                  position: "top",
                  text: "",
                  weight: 2e3
              }
          });
          var l = r.extend({
              initialize: function(t) {
                  o.extend(this, t), this.legendHitBoxes = []
              },
              beforeUpdate: s,
              update: function(t, e, n) {
                  var i = this;
                  return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
              },
              afterUpdate: s,
              beforeSetDimensions: s,
              setDimensions: function() {
                  var t = this;
                  t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                      width: 0,
                      height: 0
                  }
              },
              afterSetDimensions: s,
              beforeBuildLabels: s,
              buildLabels: s,
              afterBuildLabels: s,
              beforeFit: s,
              fit: function() {
                  var t = this,
                      e = o.valueOrDefault,
                      n = t.options,
                      r = n.display,
                      a = e(n.fontSize, i.global.defaultFontSize),
                      s = t.minSize,
                      l = o.isArray(n.text) ? n.text.length : 1,
                      u = o.options.toLineHeight(n.lineHeight, a),
                      c = r ? l * u + 2 * n.padding : 0;
                  t.isHorizontal() ? (s.width = t.maxWidth, s.height = c) : (s.width = c, s.height = t.maxHeight), t.width = s.width, t.height = s.height
              },
              afterFit: s,
              isHorizontal: function() {
                  var t = this.options.position;
                  return "top" === t || "bottom" === t
              },
              draw: function() {
                  var t = this,
                      e = t.ctx,
                      n = o.valueOrDefault,
                      r = t.options,
                      a = i.global;
                  if (r.display) {
                      var s, l, u, c = n(r.fontSize, a.defaultFontSize),
                          h = n(r.fontStyle, a.defaultFontStyle),
                          d = n(r.fontFamily, a.defaultFontFamily),
                          f = o.fontString(c, h, d),
                          p = o.options.toLineHeight(r.lineHeight, c),
                          g = p / 2 + r.padding,
                          m = 0,
                          v = t.top,
                          y = t.left,
                          b = t.bottom,
                          x = t.right;
                      e.fillStyle = n(r.fontColor, a.defaultFontColor), e.font = f, t.isHorizontal() ? (l = y + (x - y) / 2, u = v + g, s = x - y) : (l = "left" === r.position ? y + g : x - g, u = v + (b - v) / 2, s = b - v, m = Math.PI * ("left" === r.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
                      var w = r.text;
                      if (o.isArray(w))
                          for (var D = 0, _ = 0; _ < w.length; ++_) e.fillText(w[_], 0, D, s), D += p;
                      else e.fillText(w, 0, 0, s);
                      e.restore()
                  }
              }
          });

          function u(t, e) {
              var n = new l({
                  ctx: t.ctx,
                  options: e,
                  chart: t
              });
              a.configure(t, n, e), a.addBox(t, n), t.titleBlock = n
          }
          e.exports = {
              id: "title",
              _element: l,
              beforeInit: function(t) {
                  var e = t.options.title;
                  e && u(t, e)
              },
              beforeUpdate: function(t) {
                  var e = t.options.title,
                      n = t.titleBlock;
                  e ? (o.mergeIf(e, i.global.title), n ? (a.configure(t, n, e), n.options = e) : u(t, e)) : n && (a.removeBox(t, n), delete t.titleBlock)
              }
          }
      }, {
          26: 26,
          27: 27,
          31: 31,
          46: 46
      }],
      54: [function(t, e, n) {
          "use strict";
          var i = t(33),
              r = t(34);
          e.exports = function() {
              var t = i.extend({
                  getLabels: function() {
                      var t = this.chart.data;
                      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                  },
                  determineDataLimits: function() {
                      var t, e = this,
                          n = e.getLabels();
                      e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
                  },
                  buildTicks: function() {
                      var t = this,
                          e = t.getLabels();
                      t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                  },
                  getLabelForIndex: function(t, e) {
                      var n = this,
                          i = n.chart.data,
                          r = n.isHorizontal();
                      return i.yLabels && !r ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                  },
                  getPixelForValue: function(t, e) {
                      var n, i = this,
                          r = i.options.offset,
                          o = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
                      if (null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                          t = n || t;
                          var a = i.getLabels().indexOf(t);
                          e = -1 !== a ? a : e
                      }
                      if (i.isHorizontal()) {
                          var s = i.width / o,
                              l = s * (e - i.minIndex);
                          return r && (l += s / 2), i.left + Math.round(l)
                      }
                      var u = i.height / o,
                          c = u * (e - i.minIndex);
                      return r && (c += u / 2), i.top + Math.round(c)
                  },
                  getPixelForTick: function(t) {
                      return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                  },
                  getValueForPixel: function(t) {
                      var e = this,
                          n = e.options.offset,
                          i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                          r = e.isHorizontal(),
                          o = (r ? e.width : e.height) / i;
                      return t -= r ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                  },
                  getBasePixel: function() {
                      return this.bottom
                  }
              });
              r.registerScaleType("category", t, {
                  position: "bottom"
              })
          }
      }, {
          33: 33,
          34: 34
      }],
      55: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(46),
              o = t(34),
              a = t(35);
          e.exports = function(t) {
              var e = {
                      position: "left",
                      ticks: {
                          callback: a.formatters.linear
                      }
                  },
                  n = t.LinearScaleBase.extend({
                      determineDataLimits: function() {
                          var t = this,
                              e = t.options,
                              n = t.chart,
                              i = n.data.datasets,
                              o = t.isHorizontal();

                          function a(e) {
                              return o ? e.xAxisID === t.id : e.yAxisID === t.id
                          }
                          t.min = null, t.max = null;
                          var s = e.stacked;
                          if (void 0 === s && r.each(i, function(t, e) {
                                  if (!s) {
                                      var i = n.getDatasetMeta(e);
                                      n.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (s = !0)
                                  }
                              }), e.stacked || s) {
                              var l = {};
                              r.each(i, function(i, o) {
                                  var s = n.getDatasetMeta(o),
                                      u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                  void 0 === l[u] && (l[u] = {
                                      positiveValues: [],
                                      negativeValues: []
                                  });
                                  var c = l[u].positiveValues,
                                      h = l[u].negativeValues;
                                  n.isDatasetVisible(o) && a(s) && r.each(i.data, function(n, i) {
                                      var r = +t.getRightValue(n);
                                      isNaN(r) || s.data[i].hidden || (c[i] = c[i] || 0, h[i] = h[i] || 0, e.relativePoints ? c[i] = 100 : r < 0 ? h[i] += r : c[i] += r)
                                  })
                              }), r.each(l, function(e) {
                                  var n = e.positiveValues.concat(e.negativeValues),
                                      i = r.min(n),
                                      o = r.max(n);
                                  t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? o : Math.max(t.max, o)
                              })
                          } else r.each(i, function(e, i) {
                              var o = n.getDatasetMeta(i);
                              n.isDatasetVisible(i) && a(o) && r.each(e.data, function(e, n) {
                                  var i = +t.getRightValue(e);
                                  isNaN(i) || o.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i))
                              })
                          });
                          t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                      },
                      getTickLimit: function() {
                          var t, e = this.options.ticks;
                          if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                          else {
                              var n = r.valueOrDefault(e.fontSize, i.global.defaultFontSize);
                              t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                          }
                          return t
                      },
                      handleDirectionalChanges: function() {
                          this.isHorizontal() || this.ticks.reverse()
                      },
                      getLabelForIndex: function(t, e) {
                          return +this.getRightValue(this.chart.data.datasets[e].data[t])
                      },
                      getPixelForValue: function(t) {
                          var e = this,
                              n = e.start,
                              i = +e.getRightValue(t),
                              r = e.end - n;
                          return e.isHorizontal() ? e.left + e.width / r * (i - n) : e.bottom - e.height / r * (i - n)
                      },
                      getValueForPixel: function(t) {
                          var e = this,
                              n = e.isHorizontal(),
                              i = n ? e.width : e.height,
                              r = (n ? t - e.left : e.bottom - t) / i;
                          return e.start + (e.end - e.start) * r
                      },
                      getPixelForTick: function(t) {
                          return this.getPixelForValue(this.ticksAsNumbers[t])
                      }
                  });
              o.registerScaleType("linear", n, e)
          }
      }, {
          26: 26,
          34: 34,
          35: 35,
          46: 46
      }],
      56: [function(t, e, n) {
          "use strict";
          var i = t(46),
              r = t(33);
          e.exports = function(t) {
              var e = i.noop;
              t.LinearScaleBase = r.extend({
                  getRightValue: function(t) {
                      return "string" == typeof t ? +t : r.prototype.getRightValue.call(this, t)
                  },
                  handleTickRangeOptions: function() {
                      var t = this,
                          e = t.options.ticks;
                      if (e.beginAtZero) {
                          var n = i.sign(t.min),
                              r = i.sign(t.max);
                          n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0)
                      }
                      var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                          a = void 0 !== e.max || void 0 !== e.suggestedMax;
                      void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== a && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                  },
                  getTickLimit: e,
                  handleDirectionalChanges: e,
                  buildTicks: function() {
                      var t = this,
                          e = t.options.ticks,
                          n = t.getTickLimit(),
                          r = {
                              maxTicks: n = Math.max(2, n),
                              min: e.min,
                              max: e.max,
                              precision: e.precision,
                              stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
                          },
                          o = t.ticks = function(t, e) {
                              var n, r, o, a = [];
                              if (t.stepSize && t.stepSize > 0) o = t.stepSize;
                              else {
                                  var s = i.niceNum(e.max - e.min, !1);
                                  o = i.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (r = t.precision) && (n = Math.pow(10, r), o = Math.ceil(o * n) / n)
                              }
                              var l = Math.floor(e.min / o) * o,
                                  u = Math.ceil(e.max / o) * o;
                              i.isNullOrUndef(t.min) || i.isNullOrUndef(t.max) || !t.stepSize || i.almostWhole((t.max - t.min) / t.stepSize, o / 1e3) && (l = t.min, u = t.max);
                              var c = (u - l) / o;
                              c = i.almostEquals(c, Math.round(c), o / 1e3) ? Math.round(c) : Math.ceil(c), r = 1, o < 1 && (r = Math.pow(10, 1 - Math.floor(i.log10(o))), l = Math.round(l * r) / r, u = Math.round(u * r) / r), a.push(void 0 !== t.min ? t.min : l);
                              for (var h = 1; h < c; ++h) a.push(Math.round((l + h * o) * r) / r);
                              return a.push(void 0 !== t.max ? t.max : u), a
                          }(r, t);
                      t.handleDirectionalChanges(), t.max = i.max(o), t.min = i.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                  },
                  convertTicksToLabels: function() {
                      var t = this;
                      t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), r.prototype.convertTicksToLabels.call(t)
                  }
              })
          }
      }, {
          33: 33,
          46: 46
      }],
      57: [function(t, e, n) {
          "use strict";
          var i = t(46),
              r = t(33),
              o = t(34),
              a = t(35);
          e.exports = function(t) {
              var e = {
                      position: "left",
                      ticks: {
                          callback: a.formatters.logarithmic
                      }
                  },
                  n = r.extend({
                      determineDataLimits: function() {
                          var t = this,
                              e = t.options,
                              n = t.chart,
                              r = n.data.datasets,
                              o = t.isHorizontal();

                          function a(e) {
                              return o ? e.xAxisID === t.id : e.yAxisID === t.id
                          }
                          t.min = null, t.max = null, t.minNotZero = null;
                          var s = e.stacked;
                          if (void 0 === s && i.each(r, function(t, e) {
                                  if (!s) {
                                      var i = n.getDatasetMeta(e);
                                      n.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (s = !0)
                                  }
                              }), e.stacked || s) {
                              var l = {};
                              i.each(r, function(r, o) {
                                  var s = n.getDatasetMeta(o),
                                      u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                  n.isDatasetVisible(o) && a(s) && (void 0 === l[u] && (l[u] = []), i.each(r.data, function(e, n) {
                                      var i = l[u],
                                          r = +t.getRightValue(e);
                                      isNaN(r) || s.data[n].hidden || r < 0 || (i[n] = i[n] || 0, i[n] += r)
                                  }))
                              }), i.each(l, function(e) {
                                  if (e.length > 0) {
                                      var n = i.min(e),
                                          r = i.max(e);
                                      t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r)
                                  }
                              })
                          } else i.each(r, function(e, r) {
                              var o = n.getDatasetMeta(r);
                              n.isDatasetVisible(r) && a(o) && i.each(e.data, function(e, n) {
                                  var i = +t.getRightValue(e);
                                  isNaN(i) || o.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i))
                              })
                          });
                          this.handleTickRangeOptions()
                      },
                      handleTickRangeOptions: function() {
                          var t = this,
                              e = t.options.ticks,
                              n = i.valueOrDefault;
                          t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(i.log10(t.max))) : t.minNotZero = 1)
                      },
                      buildTicks: function() {
                          var t = this,
                              e = t.options.ticks,
                              n = !t.isHorizontal(),
                              r = {
                                  min: e.min,
                                  max: e.max
                              },
                              o = t.ticks = function(t, e) {
                                  var n, r, o = [],
                                      a = i.valueOrDefault,
                                      s = a(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                                      l = Math.floor(i.log10(e.max)),
                                      u = Math.ceil(e.max / Math.pow(10, l));
                                  0 === s ? (n = Math.floor(i.log10(e.minNotZero)), r = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(s), s = r * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), r = Math.floor(s / Math.pow(10, n)));
                                  var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                  do {
                                      o.push(s), 10 == ++r && (r = 1, c = ++n >= 0 ? 1 : c), s = Math.round(r * Math.pow(10, n) * c) / c
                                  } while (n < l || n === l && r < u);
                                  var h = a(t.max, s);
                                  return o.push(h), o
                              }(r, t);
                          t.max = i.max(o), t.min = i.min(o), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && o.reverse()
                      },
                      convertTicksToLabels: function() {
                          this.tickValues = this.ticks.slice(), r.prototype.convertTicksToLabels.call(this)
                      },
                      getLabelForIndex: function(t, e) {
                          return +this.getRightValue(this.chart.data.datasets[e].data[t])
                      },
                      getPixelForTick: function(t) {
                          return this.getPixelForValue(this.tickValues[t])
                      },
                      _getFirstTickValue: function(t) {
                          var e = Math.floor(i.log10(t));
                          return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                      },
                      getPixelForValue: function(e) {
                          var n, r, o, a, s, l = this,
                              u = l.options.ticks.reverse,
                              c = i.log10,
                              h = l._getFirstTickValue(l.minNotZero),
                              d = 0;
                          return e = +l.getRightValue(e), u ? (o = l.end, a = l.start, s = -1) : (o = l.start, a = l.end, s = 1), l.isHorizontal() ? (n = l.width, r = u ? l.right : l.left) : (n = l.height, s *= -1, r = u ? l.top : l.bottom), e !== o && (0 === o && (n -= d = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = h), 0 !== e && (d += n / (c(a) - c(o)) * (c(e) - c(o))), r += s * d), r
                      },
                      getValueForPixel: function(e) {
                          var n, r, o, a, s = this,
                              l = s.options.ticks.reverse,
                              u = i.log10,
                              c = s._getFirstTickValue(s.minNotZero);
                          if (l ? (r = s.end, o = s.start) : (r = s.start, o = s.end), s.isHorizontal() ? (n = s.width, a = l ? s.right - e : e - s.left) : (n = s.height, a = l ? e - s.top : s.bottom - e), a !== r) {
                              if (0 === r) {
                                  var h = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                  a -= h, n -= h, r = c
                              }
                              a *= u(o) - u(r), a /= n, a = Math.pow(10, u(r) + a)
                          }
                          return a
                      }
                  });
              o.registerScaleType("logarithmic", n, e)
          }
      }, {
          33: 33,
          34: 34,
          35: 35,
          46: 46
      }],
      58: [function(t, e, n) {
          "use strict";
          var i = t(26),
              r = t(46),
              o = t(34),
              a = t(35);
          e.exports = function(t) {
              var e = i.global,
                  n = {
                      display: !0,
                      animate: !0,
                      position: "chartArea",
                      angleLines: {
                          display: !0,
                          color: "rgba(0, 0, 0, 0.1)",
                          lineWidth: 1
                      },
                      gridLines: {
                          circular: !1
                      },
                      ticks: {
                          showLabelBackdrop: !0,
                          backdropColor: "rgba(255,255,255,0.75)",
                          backdropPaddingY: 2,
                          backdropPaddingX: 2,
                          callback: a.formatters.linear
                      },
                      pointLabels: {
                          display: !0,
                          fontSize: 10,
                          callback: function(t) {
                              return t
                          }
                      }
                  };

              function s(t) {
                  var e = t.options;
                  return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
              }

              function l(t) {
                  var n = t.options.pointLabels,
                      i = r.valueOrDefault(n.fontSize, e.defaultFontSize),
                      o = r.valueOrDefault(n.fontStyle, e.defaultFontStyle),
                      a = r.valueOrDefault(n.fontFamily, e.defaultFontFamily);
                  return {
                      size: i,
                      style: o,
                      family: a,
                      font: r.fontString(i, o, a)
                  }
              }

              function u(t, e, n, i, r) {
                  return t === i || t === r ? {
                      start: e - n / 2,
                      end: e + n / 2
                  } : t < i || t > r ? {
                      start: e - n - 5,
                      end: e
                  } : {
                      start: e,
                      end: e + n + 5
                  }
              }

              function c(t) {
                  return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
              }

              function h(t, e, n, i) {
                  if (r.isArray(e))
                      for (var o = n.y, a = 1.5 * i, s = 0; s < e.length; ++s) t.fillText(e[s], n.x, o), o += a;
                  else t.fillText(e, n.x, n.y)
              }

              function d(t, e, n) {
                  90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
              }

              function f(t) {
                  return r.isNumber(t) ? t : 0
              }
              var p = t.LinearScaleBase.extend({
                  setDimensions: function() {
                      var t = this,
                          n = t.options,
                          i = n.ticks;
                      t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                      var o = r.min([t.height, t.width]),
                          a = r.valueOrDefault(i.fontSize, e.defaultFontSize);
                      t.drawingArea = n.display ? o / 2 - (a / 2 + i.backdropPaddingY) : o / 2
                  },
                  determineDataLimits: function() {
                      var t = this,
                          e = t.chart,
                          n = Number.POSITIVE_INFINITY,
                          i = Number.NEGATIVE_INFINITY;
                      r.each(e.data.datasets, function(o, a) {
                          if (e.isDatasetVisible(a)) {
                              var s = e.getDatasetMeta(a);
                              r.each(o.data, function(e, r) {
                                  var o = +t.getRightValue(e);
                                  isNaN(o) || s.data[r].hidden || (n = Math.min(o, n), i = Math.max(o, i))
                              })
                          }
                      }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
                  },
                  getTickLimit: function() {
                      var t = this.options.ticks,
                          n = r.valueOrDefault(t.fontSize, e.defaultFontSize);
                      return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                  },
                  convertTicksToLabels: function() {
                      var e = this;
                      t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                  },
                  getLabelForIndex: function(t, e) {
                      return +this.getRightValue(this.chart.data.datasets[e].data[t])
                  },
                  fit: function() {
                      var t, e;
                      this.options.pointLabels.display ? function(t) {
                          var e, n, i, o = l(t),
                              a = Math.min(t.height / 2, t.width / 2),
                              c = {
                                  r: t.width,
                                  l: 0,
                                  t: t.height,
                                  b: 0
                              },
                              h = {};
                          t.ctx.font = o.font, t._pointLabelSizes = [];
                          var d, f, p, g = s(t);
                          for (e = 0; e < g; e++) {
                              i = t.getPointPosition(e, a), d = t.ctx, f = o.size, p = t.pointLabels[e] || "", n = r.isArray(p) ? {
                                  w: r.longestText(d, d.font, p),
                                  h: p.length * f + 1.5 * (p.length - 1) * f
                              } : {
                                  w: d.measureText(p).width,
                                  h: f
                              }, t._pointLabelSizes[e] = n;
                              var m = t.getIndexAngle(e),
                                  v = r.toDegrees(m) % 360,
                                  y = u(v, i.x, n.w, 0, 180),
                                  b = u(v, i.y, n.h, 90, 270);
                              y.start < c.l && (c.l = y.start, h.l = m), y.end > c.r && (c.r = y.end, h.r = m), b.start < c.t && (c.t = b.start, h.t = m), b.end > c.b && (c.b = b.end, h.b = m)
                          }
                          t.setReductions(a, c, h)
                      }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                  },
                  setReductions: function(t, e, n) {
                      var i = e.l / Math.sin(n.l),
                          r = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                          o = -e.t / Math.cos(n.t),
                          a = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
                      i = f(i), r = f(r), o = f(o), a = f(a), this.drawingArea = Math.min(Math.round(t - (i + r) / 2), Math.round(t - (o + a) / 2)), this.setCenterPoint(i, r, o, a)
                  },
                  setCenterPoint: function(t, e, n, i) {
                      var r = this,
                          o = r.width - e - r.drawingArea,
                          a = t + r.drawingArea,
                          s = n + r.drawingArea,
                          l = r.height - i - r.drawingArea;
                      r.xCenter = Math.round((a + o) / 2 + r.left), r.yCenter = Math.round((s + l) / 2 + r.top)
                  },
                  getIndexAngle: function(t) {
                      return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                  },
                  getDistanceFromCenterForValue: function(t) {
                      var e = this;
                      if (null === t) return 0;
                      var n = e.drawingArea / (e.max - e.min);
                      return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                  },
                  getPointPosition: function(t, e) {
                      var n = this.getIndexAngle(t) - Math.PI / 2;
                      return {
                          x: Math.round(Math.cos(n) * e) + this.xCenter,
                          y: Math.round(Math.sin(n) * e) + this.yCenter
                      }
                  },
                  getPointPositionForValue: function(t, e) {
                      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                  },
                  getBasePosition: function() {
                      var t = this.min,
                          e = this.max;
                      return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                  },
                  draw: function() {
                      var t = this,
                          n = t.options,
                          i = n.gridLines,
                          o = n.ticks,
                          a = r.valueOrDefault;
                      if (n.display) {
                          var u = t.ctx,
                              f = this.getIndexAngle(0),
                              p = a(o.fontSize, e.defaultFontSize),
                              g = a(o.fontStyle, e.defaultFontStyle),
                              m = a(o.fontFamily, e.defaultFontFamily),
                              v = r.fontString(p, g, m);
                          r.each(t.ticks, function(n, l) {
                              if (l > 0 || o.reverse) {
                                  var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);
                                  if (i.display && 0 !== l && function(t, e, n, i) {
                                          var o = t.ctx;
                                          if (o.strokeStyle = r.valueAtIndexOrDefault(e.color, i - 1), o.lineWidth = r.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), o.closePath(), o.stroke();
                                          else {
                                              var a = s(t);
                                              if (0 === a) return;
                                              o.beginPath();
                                              var l = t.getPointPosition(0, n);
                                              o.moveTo(l.x, l.y);
                                              for (var u = 1; u < a; u++) l = t.getPointPosition(u, n), o.lineTo(l.x, l.y);
                                              o.closePath(), o.stroke()
                                          }
                                      }(t, i, c, l), o.display) {
                                      var h = a(o.fontColor, e.defaultFontColor);
                                      if (u.font = v, u.save(), u.translate(t.xCenter, t.yCenter), u.rotate(f), o.showLabelBackdrop) {
                                          var d = u.measureText(n).width;
                                          u.fillStyle = o.backdropColor, u.fillRect(-d / 2 - o.backdropPaddingX, -c - p / 2 - o.backdropPaddingY, d + 2 * o.backdropPaddingX, p + 2 * o.backdropPaddingY)
                                      }
                                      u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = h, u.fillText(n, 0, -c), u.restore()
                                  }
                              }
                          }), (n.angleLines.display || n.pointLabels.display) && function(t) {
                              var n = t.ctx,
                                  i = t.options,
                                  o = i.angleLines,
                                  a = i.pointLabels;
                              n.lineWidth = o.lineWidth, n.strokeStyle = o.color;
                              var u = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                                  f = l(t);
                              n.textBaseline = "top";
                              for (var p = s(t) - 1; p >= 0; p--) {
                                  if (o.display) {
                                      var g = t.getPointPosition(p, u);
                                      n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(g.x, g.y), n.stroke(), n.closePath()
                                  }
                                  if (a.display) {
                                      var m = t.getPointPosition(p, u + 5),
                                          v = r.valueAtIndexOrDefault(a.fontColor, p, e.defaultFontColor);
                                      n.font = f.font, n.fillStyle = v;
                                      var y = t.getIndexAngle(p),
                                          b = r.toDegrees(y);
                                      n.textAlign = c(b), d(b, t._pointLabelSizes[p], m), h(n, t.pointLabels[p] || "", m, f.size)
                                  }
                              }
                          }(t)
                      }
                  }
              });
              o.registerScaleType("radialLinear", p, n)
          }
      }, {
          26: 26,
          34: 34,
          35: 35,
          46: 46
      }],
      59: [function(t, e, n) {
          "use strict";
          var i = t(1);
          i = "function" == typeof i ? i : window.moment;
          var r = t(26),
              o = t(46),
              a = t(33),
              s = t(34),
              l = Number.MIN_SAFE_INTEGER || -9007199254740991,
              u = Number.MAX_SAFE_INTEGER || 9007199254740991,
              c = {
                  millisecond: {
                      common: !0,
                      size: 1,
                      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                  },
                  second: {
                      common: !0,
                      size: 1e3,
                      steps: [1, 2, 5, 10, 15, 30]
                  },
                  minute: {
                      common: !0,
                      size: 6e4,
                      steps: [1, 2, 5, 10, 15, 30]
                  },
                  hour: {
                      common: !0,
                      size: 36e5,
                      steps: [1, 2, 3, 6, 12]
                  },
                  day: {
                      common: !0,
                      size: 864e5,
                      steps: [1, 2, 5]
                  },
                  week: {
                      common: !1,
                      size: 6048e5,
                      steps: [1, 2, 3, 4]
                  },
                  month: {
                      common: !0,
                      size: 2628e6,
                      steps: [1, 2, 3]
                  },
                  quarter: {
                      common: !1,
                      size: 7884e6,
                      steps: [1, 2, 3, 4]
                  },
                  year: {
                      common: !0,
                      size: 3154e7
                  }
              },
              h = Object.keys(c);

          function d(t, e) {
              return t - e
          }

          function f(t) {
              var e, n, i, r = {},
                  o = [];
              for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, o.push(i));
              return o
          }

          function p(t, e, n, i) {
              var r = function(t, e, n) {
                      for (var i, r, o, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                          if (r = t[(i = a + s >> 1) - 1] || null, o = t[i], !r) return {
                              lo: null,
                              hi: o
                          };
                          if (o[e] < n) a = i + 1;
                          else {
                              if (!(r[e] > n)) return {
                                  lo: r,
                                  hi: o
                              };
                              s = i - 1
                          }
                      }
                      return {
                          lo: o,
                          hi: null
                      }
                  }(t, e, n),
                  o = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
                  a = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
                  s = a[e] - o[e],
                  l = s ? (n - o[e]) / s : 0,
                  u = (a[i] - o[i]) * l;
              return o[i] + u
          }

          function g(t, e) {
              var n = e.parser,
                  r = e.parser || e.format;
              return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof r ? i(t, r) : (t instanceof i || (t = i(t)), t.isValid() ? t : "function" == typeof r ? r(t) : t)
          }

          function m(t, e) {
              if (o.isNullOrUndef(t)) return null;
              var n = e.options.time,
                  i = g(e.getRightValue(t), n);
              return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
          }

          function v(t) {
              for (var e = h.indexOf(t) + 1, n = h.length; e < n; ++e)
                  if (c[h[e]].common) return h[e]
          }

          function y(t, e, n, r) {
              var a, s = r.time,
                  l = s.unit || function(t, e, n, i) {
                      var r, o, a, s = h.length;
                      for (r = h.indexOf(t); r < s - 1; ++r)
                          if (a = (o = c[h[r]]).steps ? o.steps[o.steps.length - 1] : u, o.common && Math.ceil((n - e) / (a * o.size)) <= i) return h[r];
                      return h[s - 1]
                  }(s.minUnit, t, e, n),
                  d = v(l),
                  f = o.valueOrDefault(s.stepSize, s.unitStepSize),
                  p = "week" === l && s.isoWeekday,
                  g = r.ticks.major.enabled,
                  m = c[l],
                  y = i(t),
                  b = i(e),
                  x = [];
              for (f || (f = function(t, e, n, i) {
                      var r, o, a, s = e - t,
                          l = c[n],
                          u = l.size,
                          h = l.steps;
                      if (!h) return Math.ceil(s / (i * u));
                      for (r = 0, o = h.length; r < o && (a = h[r], !(Math.ceil(s / (u * a)) <= i)); ++r);
                      return a
                  }(t, e, l, n)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : l), (b = b.startOf(p ? "day" : l)) < e && b.add(1, l), a = i(y), g && d && !p && !s.round && (a.startOf(d), a.add(~~((y - a) / (m.size * f)) * f, l)); a < b; a.add(f, l)) x.push(+a);
              return x.push(+a), x
          }
          e.exports = function() {
              var t = a.extend({
                  initialize: function() {
                      if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                      this.mergeTicksOptions(), a.prototype.initialize.call(this)
                  },
                  update: function() {
                      var t = this.options;
                      return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), a.prototype.update.apply(this, arguments)
                  },
                  getRightValue: function(t) {
                      return t && void 0 !== t.t && (t = t.t), a.prototype.getRightValue.call(this, t)
                  },
                  determineDataLimits: function() {
                      var t, e, n, r, a, s, c = this,
                          h = c.chart,
                          p = c.options.time,
                          g = p.unit || "day",
                          v = u,
                          y = l,
                          b = [],
                          x = [],
                          w = [];
                      for (t = 0, n = h.data.labels.length; t < n; ++t) w.push(m(h.data.labels[t], c));
                      for (t = 0, n = (h.data.datasets || []).length; t < n; ++t)
                          if (h.isDatasetVisible(t))
                              if (a = h.data.datasets[t].data, o.isObject(a[0]))
                                  for (x[t] = [], e = 0, r = a.length; e < r; ++e) s = m(a[e], c), b.push(s), x[t][e] = s;
                              else b.push.apply(b, w), x[t] = w.slice(0);
                      else x[t] = [];
                      w.length && (w = f(w).sort(d), v = Math.min(v, w[0]), y = Math.max(y, w[w.length - 1])), b.length && (b = f(b).sort(d), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), v = m(p.min, c) || v, y = m(p.max, c) || y, v = v === u ? +i().startOf(g) : v, y = y === l ? +i().endOf(g) + 1 : y, c.min = Math.min(v, y), c.max = Math.max(v + 1, y), c._horizontal = c.isHorizontal(), c._table = [], c._timestamps = {
                          data: b,
                          datasets: x,
                          labels: w
                      }
                  },
                  buildTicks: function() {
                      var t, e, n, r = this,
                          o = r.min,
                          a = r.max,
                          s = r.options,
                          l = s.time,
                          u = [],
                          d = [];
                      switch (s.ticks.source) {
                          case "data":
                              u = r._timestamps.data;
                              break;
                          case "labels":
                              u = r._timestamps.labels;
                              break;
                          case "auto":
                          default:
                              u = y(o, a, r.getLabelCapacity(o), s)
                      }
                      for ("ticks" === s.bounds && u.length && (o = u[0], a = u[u.length - 1]), o = m(l.min, r) || o, a = m(l.max, r) || a, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= o && n <= a && d.push(n);
                      return r.min = o, r.max = a, r._unit = l.unit || function(t, e, n, r) {
                              var o, a, s = i.duration(i(r).diff(i(n)));
                              for (o = h.length - 1; o >= h.indexOf(e); o--)
                                  if (a = h[o], c[a].common && s.as(a) >= t.length) return a;
                              return h[e ? h.indexOf(e) : 0]
                          }(d, l.minUnit, r.min, r.max), r._majorUnit = v(r._unit), r._table = function(t, e, n, i) {
                              if ("linear" === i || !t.length) return [{
                                  time: e,
                                  pos: 0
                              }, {
                                  time: n,
                                  pos: 1
                              }];
                              var r, o, a, s, l, u = [],
                                  c = [e];
                              for (r = 0, o = t.length; r < o; ++r)(s = t[r]) > e && s < n && c.push(s);
                              for (c.push(n), r = 0, o = c.length; r < o; ++r) l = c[r + 1], a = c[r - 1], s = c[r], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                                  time: s,
                                  pos: r / (o - 1)
                              });
                              return u
                          }(r._timestamps.data, o, a, s.distribution), r._offsets = function(t, e, n, i, r) {
                              var o, a, s = 0,
                                  l = 0;
                              return r.offset && e.length && (r.time.min || (o = e.length > 1 ? e[1] : i, a = e[0], s = (p(t, "time", o, "pos") - p(t, "time", a, "pos")) / 2), r.time.max || (o = e[e.length - 1], a = e.length > 1 ? e[e.length - 2] : n, l = (p(t, "time", o, "pos") - p(t, "time", a, "pos")) / 2)), {
                                  left: s,
                                  right: l
                              }
                          }(r._table, d, o, a, s), r._labelFormat = function(t, e) {
                              var n, i, r, o = t.length;
                              for (n = 0; n < o; n++) {
                                  if (0 !== (i = g(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                  0 === i.second() && 0 === i.minute() && 0 === i.hour() || (r = !0)
                              }
                              return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                          }(r._timestamps.data, l),
                          function(t, e) {
                              var n, r, o, a, s = [];
                              for (n = 0, r = t.length; n < r; ++n) o = t[n], a = !!e && o === +i(o).startOf(e), s.push({
                                  value: o,
                                  major: a
                              });
                              return s
                          }(d, r._majorUnit)
                  },
                  getLabelForIndex: function(t, e) {
                      var n = this.chart.data,
                          i = this.options.time,
                          r = n.labels && t < n.labels.length ? n.labels[t] : "",
                          a = n.datasets[e].data[t];
                      return o.isObject(a) && (r = this.getRightValue(a)), i.tooltipFormat ? g(r, i).format(i.tooltipFormat) : "string" == typeof r ? r : g(r, i).format(this._labelFormat)
                  },
                  tickFormatFunction: function(t, e, n, i) {
                      var r = this.options,
                          a = t.valueOf(),
                          s = r.time.displayFormats,
                          l = s[this._unit],
                          u = this._majorUnit,
                          c = s[u],
                          h = t.clone().startOf(u).valueOf(),
                          d = r.ticks.major,
                          f = d.enabled && u && c && a === h,
                          p = t.format(i || (f ? c : l)),
                          g = f ? d : r.ticks.minor,
                          m = o.valueOrDefault(g.callback, g.userCallback);
                      return m ? m(p, e, n) : p
                  },
                  convertTicksToLabels: function(t) {
                      var e, n, r = [];
                      for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(i(t[e].value), e, t));
                      return r
                  },
                  getPixelForOffset: function(t) {
                      var e = this,
                          n = e._horizontal ? e.width : e.height,
                          i = e._horizontal ? e.left : e.top,
                          r = p(e._table, "time", t, "pos");
                      return i + n * (e._offsets.left + r) / (e._offsets.left + 1 + e._offsets.right)
                  },
                  getPixelForValue: function(t, e, n) {
                      var i = null;
                      if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = m(t, this)), null !== i) return this.getPixelForOffset(i)
                  },
                  getPixelForTick: function(t) {
                      var e = this.getTicks();
                      return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                  },
                  getValueForPixel: function(t) {
                      var e = this,
                          n = e._horizontal ? e.width : e.height,
                          r = e._horizontal ? e.left : e.top,
                          o = (n ? (t - r) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                          a = p(e._table, "pos", o, "time");
                      return i(a)
                  },
                  getLabelWidth: function(t) {
                      var e = this.options.ticks,
                          n = this.ctx.measureText(t).width,
                          i = o.toRadians(e.maxRotation),
                          a = Math.cos(i),
                          s = Math.sin(i);
                      return n * a + o.valueOrDefault(e.fontSize, r.global.defaultFontSize) * s
                  },
                  getLabelCapacity: function(t) {
                      var e = this,
                          n = e.options.time.displayFormats.millisecond,
                          r = e.tickFormatFunction(i(t), 0, [], n),
                          o = e.getLabelWidth(r),
                          a = e.isHorizontal() ? e.width : e.height,
                          s = Math.floor(a / o);
                      return s > 0 ? s : 1
                  }
              });
              s.registerScaleType("time", t, {
                  position: "bottom",
                  distribution: "linear",
                  bounds: "data",
                  time: {
                      parser: !1,
                      format: !1,
                      unit: !1,
                      round: !1,
                      displayFormat: !1,
                      isoWeekday: !1,
                      minUnit: "millisecond",
                      displayFormats: {
                          millisecond: "h:mm:ss.SSS a",
                          second: "h:mm:ss a",
                          minute: "h:mm a",
                          hour: "hA",
                          day: "MMM D",
                          week: "ll",
                          month: "MMM YYYY",
                          quarter: "[Q]Q - YYYY",
                          year: "YYYY"
                      }
                  },
                  ticks: {
                      autoSkip: !1,
                      source: "auto",
                      major: {
                          enabled: !1
                      }
                  }
              })
          }
      }, {
          1: 1,
          26: 26,
          33: 33,
          34: 34,
          46: 46
      }]
  }, {}, [7])(7)
}),
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(t, e) {
  function n() {
      return new Date(Date.UTC.apply(Date, arguments))
  }
  "indexOf" in Array.prototype || (Array.prototype.indexOf = function(t, n) {
      n === e && (n = 0), n < 0 && (n += this.length), n < 0 && (n = 0);
      for (var i = this.length; n < i; n++)
          if (n in this && this[n] === t) return n;
      return -1
  });
  var i = function(n, i) {
      var r = this;
      this.element = t(n), this.container = i.container || "body", this.language = i.language || this.element.data("date-language") || "en", this.language = this.language in o ? this.language : this.language.split("-")[0], this.language = this.language in o ? this.language : "en", this.isRTL = o[this.language].rtl || !1, this.formatType = i.formatType || this.element.data("format-type") || "standard", this.format = a.parseFormat(i.format || this.element.data("date-format") || o[this.language].format || a.getDefaultFormat(this.formatType, "input"), this.formatType), this.isInline = !1, this.isVisible = !1, this.isInput = this.element.is("input"), this.fontAwesome = i.fontAwesome || this.element.data("font-awesome") || !1, this.bootcssVer = i.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2), this.component = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()), this.componentReset = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.linkField = i.linkField || this.element.data("link-field") || !1, this.linkFormat = a.parseFormat(i.linkFormat || this.element.data("link-format") || a.getDefaultFormat(this.formatType, "link"), this.formatType), this.minuteStep = i.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = i.pickerPosition || this.element.data("picker-position") || "bottom-right", this.showMeridian = i.showMeridian || this.element.data("show-meridian") || !1, this.initialDate = i.initialDate || new Date, this.zIndex = i.zIndex || this.element.data("z-index") || e, this.title = void 0 !== i.title && i.title, this.timezone = i.timezone || function() {
          var t, e, n, i, r;
          if ((n = (null != (r = (e = (new Date).toString()).split("(")[1]) ? r.slice(0, -1) : 0) || e.split(" ")) instanceof Array) {
              i = [];
              for (var o = 0, a = n.length; o < a; o++)(t = null !== (r = n[o].match(/\b[A-Z]+\b/))) && r[0] && i.push(t);
              n = i.pop()
          }
          return n
      }(), this.icons = {
          leftArrow: this.fontAwesome ? "fa-arrow-left" : 3 === this.bootcssVer ? "glyphicon-arrow-left" : "icon-arrow-left",
          rightArrow: this.fontAwesome ? "fa-arrow-right" : 3 === this.bootcssVer ? "glyphicon-arrow-right" : "icon-arrow-right"
      }, this.icontype = this.fontAwesome ? "fa" : "glyphicon", this._attachEvents(), this.clickedOutside = function(e) {
          0 === t(e.target).closest(".datetimepicker").length && r.hide()
      }, this.formatViewType = "datetime", "formatViewType" in i ? this.formatViewType = i.formatViewType : "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")), this.minView = 0, "minView" in i ? this.minView = i.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = a.convertViewMode(this.minView), this.maxView = a.modes.length - 1, "maxView" in i ? this.maxView = i.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = a.convertViewMode(this.maxView), this.wheelViewModeNavigation = !1, "wheelViewModeNavigation" in i ? this.wheelViewModeNavigation = i.wheelViewModeNavigation : "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")), this.wheelViewModeNavigationInverseDirection = !1, "wheelViewModeNavigationInverseDirection" in i ? this.wheelViewModeNavigationInverseDirection = i.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")), this.wheelViewModeNavigationDelay = 100, "wheelViewModeNavigationDelay" in i ? this.wheelViewModeNavigationDelay = i.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")), this.startViewMode = 2, "startView" in i ? this.startViewMode = i.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = a.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, this.viewSelect = this.minView, "viewSelect" in i ? this.viewSelect = i.viewSelect : "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")), this.viewSelect = a.convertViewMode(this.viewSelect), this.forceParse = !0, "forceParse" in i ? this.forceParse = i.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
      for (var s = 3 === this.bootcssVer ? a.templateV3 : a.template; - 1 !== s.indexOf("{iconType}");) s = s.replace("{iconType}", this.icontype);
      for (; - 1 !== s.indexOf("{leftArrow}");) s = s.replace("{leftArrow}", this.icons.leftArrow);
      for (; - 1 !== s.indexOf("{rightArrow}");) s = s.replace("{rightArrow}", this.icons.rightArrow);
      if (this.picker = t(s).appendTo(this.isInline ? this.element : this.container).on({
              click: t.proxy(this.click, this),
              mousedown: t.proxy(this.mousedown, this)
          }), this.wheelViewModeNavigation && (t.fn.mousewheel ? this.picker.on({
              mousewheel: t.proxy(this.mousewheel, this)
          }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")), this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"), this.isRTL) {
          this.picker.addClass("datetimepicker-rtl");
          var l = 3 === this.bootcssVer ? ".prev span, .next span" : ".prev i, .next i";
          this.picker.find(l).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
      }
      t(document).on("mousedown touchend", this.clickedOutside), this.autoclose = !1, "autoclose" in i ? this.autoclose = i.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in i ? this.keyboardNavigation = i.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = i.todayBtn || this.element.data("date-today-btn") || !1, this.clearBtn = i.clearBtn || this.element.data("date-clear-btn") || !1, this.todayHighlight = i.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = 0, void 0 !== i.weekStart ? this.weekStart = i.weekStart : void 0 !== this.element.data("date-weekstart") ? this.weekStart = this.element.data("date-weekstart") : void 0 !== o[this.language].weekStart && (this.weekStart = o[this.language].weekStart), this.weekStart = this.weekStart % 7, this.weekEnd = (this.weekStart + 6) % 7, this.onRenderDay = function(t) {
          var e = (i.onRenderDay || function() {
              return []
          })(t);
          "string" == typeof e && (e = [e]);
          return ["day"].concat(e || [])
      }, this.onRenderHour = function(t) {
          var e = (i.onRenderHour || function() {
              return []
          })(t);
          return "string" == typeof e && (e = [e]), ["hour"].concat(e || [])
      }, this.onRenderMinute = function(t) {
          var e = (i.onRenderMinute || function() {
                  return []
              })(t),
              n = ["minute"];
          return "string" == typeof e && (e = [e]), t < this.startDate || t > this.endDate ? n.push("disabled") : Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(t.getUTCMinutes() / this.minuteStep) && n.push("active"), n.concat(e || [])
      }, this.onRenderYear = function(t) {
          var e = (i.onRenderYear || function() {
                  return []
              })(t),
              n = ["year"];
          "string" == typeof e && (e = [e]), this.date.getUTCFullYear() === t.getUTCFullYear() && n.push("active");
          var r = t.getUTCFullYear(),
              o = this.endDate.getUTCFullYear();
          return (t < this.startDate || r > o) && n.push("disabled"), n.concat(e || [])
      }, this.onRenderMonth = function(t) {
          var e = (i.onRenderMonth || function() {
              return []
          })(t);
          return "string" == typeof e && (e = [e]), ["month"].concat(e || [])
      }, this.startDate = new Date(-8639968443048e3), this.endDate = new Date(8639968443048e3), this.datesDisabled = [], this.daysOfWeekDisabled = [], this.setStartDate(i.startDate || this.element.data("date-startdate")), this.setEndDate(i.endDate || this.element.data("date-enddate")), this.setDatesDisabled(i.datesDisabled || this.element.data("date-dates-disabled")), this.setDaysOfWeekDisabled(i.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setMinutesDisabled(i.minutesDisabled || this.element.data("date-minute-disabled")), this.setHoursDisabled(i.hoursDisabled || this.element.data("date-hour-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
  };
  i.prototype = {
      constructor: i,
      _events: [],
      _attachEvents: function() {
          this._detachEvents(), this.isInput ? this._events = [
              [this.element, {
                  focus: t.proxy(this.show, this),
                  keyup: t.proxy(this.update, this),
                  keydown: t.proxy(this.keydown, this)
              }]
          ] : this.component && this.hasInput ? (this._events = [
              [this.element.find("input"), {
                  focus: t.proxy(this.show, this),
                  keyup: t.proxy(this.update, this),
                  keydown: t.proxy(this.keydown, this)
              }],
              [this.component, {
                  click: t.proxy(this.show, this)
              }]
          ], this.componentReset && this._events.push([this.componentReset, {
              click: t.proxy(this.reset, this)
          }])) : this.element.is("div") ? this.isInline = !0 : this._events = [
              [this.element, {
                  click: t.proxy(this.show, this)
              }]
          ];
          for (var e, n, i = 0; i < this._events.length; i++) e = this._events[i][0], n = this._events[i][1], e.on(n)
      },
      _detachEvents: function() {
          for (var t, e, n = 0; n < this._events.length; n++) t = this._events[n][0], e = this._events[n][1], t.off(e);
          this._events = []
      },
      show: function(e) {
          this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.forceParse && this.update(), this.place(), t(window).on("resize", t.proxy(this.place, this)), e && (e.stopPropagation(), e.preventDefault()), this.isVisible = !0, this.element.trigger({
              type: "show",
              date: this.date
          })
      },
      hide: function() {
          this.isVisible && (this.isInline || (this.picker.hide(), t(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || t(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
              type: "hide",
              date: this.date
          })))
      },
      remove: function() {
          this._detachEvents(), t(document).off("mousedown", this.clickedOutside), this.picker.remove(), delete this.picker, delete this.element.data().datetimepicker
      },
      getDate: function() {
          var t = this.getUTCDate();
          return null === t ? null : new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
      },
      getUTCDate: function() {
          return this.date
      },
      getInitialDate: function() {
          return this.initialDate
      },
      setInitialDate: function(t) {
          this.initialDate = t
      },
      setDate: function(t) {
          this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()))
      },
      setUTCDate: function(t) {
          t >= this.startDate && t <= this.endDate ? (this.date = t, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
              type: "outOfRange",
              date: t,
              startDate: this.startDate,
              endDate: this.endDate
          })
      },
      setFormat: function(t) {
          var e;
          this.format = a.parseFormat(t, this.formatType), this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val() && this.setValue()
      },
      setValue: function() {
          var e = this.getFormattedDate();
          this.isInput ? this.element.val(e) : (this.component && this.element.find("input").val(e), this.element.data("date", e)), this.linkField && t("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
      },
      getFormattedDate: function(t) {
          return t = t || this.format, a.formatDate(this.date, t, this.language, this.formatType, this.timezone)
      },
      setStartDate: function(t) {
          this.startDate = t || this.startDate, 8639968443048e3 !== this.startDate.valueOf() && (this.startDate = a.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
      },
      setEndDate: function(t) {
          this.endDate = t || this.endDate, 8639968443048e3 !== this.endDate.valueOf() && (this.endDate = a.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
      },
      setDatesDisabled: function(e) {
          this.datesDisabled = e || [], t.isArray(this.datesDisabled) || (this.datesDisabled = this.datesDisabled.split(/,\s*/));
          var n = this;
          this.datesDisabled = t.map(this.datesDisabled, function(t) {
              return a.parseDate(t, n.format, n.language, n.formatType, n.timezone).toDateString()
          }), this.update(), this.updateNavArrows()
      },
      setTitle: function(t, e) {
          return this.picker.find(t).find("th:eq(1)").text(!1 === this.title ? e : this.title)
      },
      setDaysOfWeekDisabled: function(e) {
          this.daysOfWeekDisabled = e || [], t.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = t.map(this.daysOfWeekDisabled, function(t) {
              return parseInt(t, 10)
          }), this.update(), this.updateNavArrows()
      },
      setMinutesDisabled: function(e) {
          this.minutesDisabled = e || [], t.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)), this.minutesDisabled = t.map(this.minutesDisabled, function(t) {
              return parseInt(t, 10)
          }), this.update(), this.updateNavArrows()
      },
      setHoursDisabled: function(e) {
          this.hoursDisabled = e || [], t.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)), this.hoursDisabled = t.map(this.hoursDisabled, function(t) {
              return parseInt(t, 10)
          }), this.update(), this.updateNavArrows()
      },
      place: function() {
          if (!this.isInline) {
              if (!this.zIndex) {
                  var e = 0;
                  t("div").each(function() {
                      var n = parseInt(t(this).css("zIndex"), 10);
                      n > e && (e = n)
                  }), this.zIndex = e + 10
              }
              var n, i, r, o;
              o = this.container instanceof t ? this.container.offset() : t(this.container).offset(), this.component ? (r = (n = this.component.offset()).left, "bottom-left" !== this.pickerPosition && "top-left" !== this.pickerPosition || (r += this.component.outerWidth() - this.picker.outerWidth())) : (r = (n = this.element.offset()).left, "bottom-left" !== this.pickerPosition && "top-left" !== this.pickerPosition || (r += this.element.outerWidth() - this.picker.outerWidth()));
              var a = document.body.clientWidth || window.innerWidth;
              r + 220 > a && (r = a - 220), i = "top-left" === this.pickerPosition || "top-right" === this.pickerPosition ? n.top - this.picker.outerHeight() : n.top + this.height, i -= o.top, r -= o.left, this.picker.css({
                  top: i,
                  left: r,
                  zIndex: this.zIndex
              })
          }
      },
      hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",
      update: function() {
          var t, e = !1;
          arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], e = !0) : "string" == typeof(t = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate) && (t = t.replace(/^\s+|\s+$/g, "")), t || (t = new Date, e = !1), "string" == typeof t && (new RegExp(this.hour_minute).test(t) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(t)) && (t = this.getDate()), this.date = a.parseDate(t, this.format, this.language, this.formatType, this.timezone), e && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
      },
      fillDow: function() {
          for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="dow">' + o[this.language].daysMin[t++ % 7] + "</th>";
          e += "</tr>", this.picker.find(".datetimepicker-days thead").append(e)
      },
      fillMonths: function() {
          for (var t = "", e = new Date(this.viewDate), n = 0; n < 12; n++) {
              e.setUTCMonth(n), t += '<span class="' + this.onRenderMonth(e).join(" ") + '">' + o[this.language].monthsShort[n] + "</span>"
          }
          this.picker.find(".datetimepicker-months td").html(t)
      },
      fill: function() {
          if (this.date && this.viewDate) {
              var e = new Date(this.viewDate),
                  i = e.getUTCFullYear(),
                  s = e.getUTCMonth(),
                  l = e.getUTCDate(),
                  u = e.getUTCHours(),
                  c = this.startDate.getUTCFullYear(),
                  h = this.startDate.getUTCMonth(),
                  d = this.endDate.getUTCFullYear(),
                  f = this.endDate.getUTCMonth() + 1,
                  p = new n(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                  g = new Date;
              if (this.setTitle(".datetimepicker-days", o[this.language].months[s] + " " + i), "time" === this.formatViewType) {
                  var m = this.getFormattedDate();
                  this.setTitle(".datetimepicker-hours", m), this.setTitle(".datetimepicker-minutes", m)
              } else this.setTitle(".datetimepicker-hours", l + " " + o[this.language].months[s] + " " + i), this.setTitle(".datetimepicker-minutes", l + " " + o[this.language].months[s] + " " + i);
              this.picker.find("tfoot th.today").text(o[this.language].today || o.en.today).toggle(!1 !== this.todayBtn), this.picker.find("tfoot th.clear").text(o[this.language].clear || o.en.clear).toggle(!1 !== this.clearBtn), this.updateNavArrows(), this.fillMonths();
              var v = n(i, s - 1, 28, 0, 0, 0, 0),
                  y = a.getDaysInMonth(v.getUTCFullYear(), v.getUTCMonth());
              v.setUTCDate(y), v.setUTCDate(y - (v.getUTCDay() - this.weekStart + 7) % 7);
              var b = new Date(v);
              b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
              for (var x, w = []; v.valueOf() < b;) v.getUTCDay() === this.weekStart && w.push("<tr>"), x = this.onRenderDay(v), v.getUTCFullYear() < i || v.getUTCFullYear() === i && v.getUTCMonth() < s ? x.push("old") : (v.getUTCFullYear() > i || v.getUTCFullYear() === i && v.getUTCMonth() > s) && x.push("new"), this.todayHighlight && v.getUTCFullYear() === g.getFullYear() && v.getUTCMonth() === g.getMonth() && v.getUTCDate() === g.getDate() && x.push("today"), v.valueOf() === p && x.push("active"), (v.valueOf() + 864e5 <= this.startDate || v.valueOf() > this.endDate || -1 !== t.inArray(v.getUTCDay(), this.daysOfWeekDisabled) || -1 !== t.inArray(v.toDateString(), this.datesDisabled)) && x.push("disabled"), w.push('<td class="' + x.join(" ") + '">' + v.getUTCDate() + "</td>"), v.getUTCDay() === this.weekEnd && w.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1);
              this.picker.find(".datetimepicker-days tbody").empty().append(w.join("")), w = [];
              var D = "",
                  _ = "",
                  C = "",
                  k = this.hoursDisabled || [];
              e = new Date(this.viewDate);
              for (var T = 0; T < 24; T++) {
                  e.setUTCHours(T), x = this.onRenderHour(e), -1 !== k.indexOf(T) && x.push("disabled");
                  var S = n(i, s, l, T);
                  S.valueOf() + 36e5 <= this.startDate || S.valueOf() > this.endDate ? x.push("disabled") : u === T && x.push("active"), this.showMeridian && 2 === o[this.language].meridiem.length ? ((_ = T < 12 ? o[this.language].meridiem[0] : o[this.language].meridiem[1]) !== C && ("" !== C && w.push("</fieldset>"), w.push('<fieldset class="hour"><legend>' + _.toUpperCase() + "</legend>")), C = _, D = T % 12 ? T % 12 : 12, T < 12 ? x.push("hour_am") : x.push("hour_pm"), w.push('<span class="' + x.join(" ") + '">' + D + "</span>"), 23 === T && w.push("</fieldset>")) : (D = T + ":00", w.push('<span class="' + x.join(" ") + '">' + D + "</span>"))
              }
              this.picker.find(".datetimepicker-hours td").html(w.join("")), w = [], D = "", _ = "", C = "";
              var M = this.minutesDisabled || [];
              e = new Date(this.viewDate);
              for (T = 0; T < 60; T += this.minuteStep) - 1 === M.indexOf(T) && (e.setUTCMinutes(T), e.setUTCSeconds(0), x = this.onRenderMinute(e), this.showMeridian && 2 === o[this.language].meridiem.length ? ((_ = u < 12 ? o[this.language].meridiem[0] : o[this.language].meridiem[1]) !== C && ("" !== C && w.push("</fieldset>"), w.push('<fieldset class="minute"><legend>' + _.toUpperCase() + "</legend>")), C = _, D = u % 12 ? u % 12 : 12, w.push('<span class="' + x.join(" ") + '">' + D + ":" + (T < 10 ? "0" + T : T) + "</span>"), 59 === T && w.push("</fieldset>")) : (D = T + ":00", w.push('<span class="' + x.join(" ") + '">' + u + ":" + (T < 10 ? "0" + T : T) + "</span>")));
              this.picker.find(".datetimepicker-minutes td").html(w.join(""));
              var A = this.date.getUTCFullYear(),
                  I = this.setTitle(".datetimepicker-months", i).end().find(".month").removeClass("active");
              A === i && I.eq(this.date.getUTCMonth()).addClass("active"), (i < c || i > d) && I.addClass("disabled"), i === c && I.slice(0, h).addClass("disabled"), i === d && I.slice(f).addClass("disabled"), w = "", i = 10 * parseInt(i / 10, 10);
              var E = this.setTitle(".datetimepicker-years", i + "-" + (i + 9)).end().find("td");
              i -= 1, e = new Date(this.viewDate);
              for (T = -1; T < 11; T++) e.setUTCFullYear(i), x = this.onRenderYear(e), -1 !== T && 10 !== T || x.push(r), w += '<span class="' + x.join(" ") + '">' + i + "</span>", i += 1;
              E.html(w), this.place()
          }
      },
      updateNavArrows: function() {
          var t = new Date(this.viewDate),
              e = t.getUTCFullYear(),
              n = t.getUTCMonth(),
              i = t.getUTCDate(),
              r = t.getUTCHours();
          switch (this.viewMode) {
              case 0:
                  e <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() && i <= this.startDate.getUTCDate() && r <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                      visibility: "hidden"
                  }) : this.picker.find(".prev").css({
                      visibility: "visible"
                  }), e >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() && i >= this.endDate.getUTCDate() && r >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                      visibility: "hidden"
                  }) : this.picker.find(".next").css({
                      visibility: "visible"
                  });
                  break;
              case 1:
                  e <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() && i <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                      visibility: "hidden"
                  }) : this.picker.find(".prev").css({
                      visibility: "visible"
                  }), e >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() && i >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                      visibility: "hidden"
                  }) : this.picker.find(".next").css({
                      visibility: "visible"
                  });
                  break;
              case 2:
                  e <= this.startDate.getUTCFullYear() && n <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                      visibility: "hidden"
                  }) : this.picker.find(".prev").css({
                      visibility: "visible"
                  }), e >= this.endDate.getUTCFullYear() && n >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                      visibility: "hidden"
                  }) : this.picker.find(".next").css({
                      visibility: "visible"
                  });
                  break;
              case 3:
              case 4:
                  e <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                      visibility: "hidden"
                  }) : this.picker.find(".prev").css({
                      visibility: "visible"
                  }), e >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                      visibility: "hidden"
                  }) : this.picker.find(".next").css({
                      visibility: "visible"
                  })
          }
      },
      mousewheel: function(e) {
          if (e.preventDefault(), e.stopPropagation(), !this.wheelPause) {
              this.wheelPause = !0;
              var n = e.originalEvent.wheelDelta,
                  i = n > 0 ? 1 : 0 === n ? 0 : -1;
              this.wheelViewModeNavigationInverseDirection && (i = -i), this.showMode(i), setTimeout(t.proxy(function() {
                  this.wheelPause = !1
              }, this), this.wheelViewModeNavigationDelay)
          }
      },
      click: function(e) {
          e.stopPropagation(), e.preventDefault();
          var i = t(e.target).closest("span, td, th, legend");
          if (i.is("." + this.icontype) && (i = t(i).parent().closest("span, td, th, legend")), 1 === i.length) {
              if (i.is(".disabled")) return void this.element.trigger({
                  type: "outOfRange",
                  date: this.viewDate,
                  startDate: this.startDate,
                  endDate: this.endDate
              });
              switch (i[0].nodeName.toLowerCase()) {
                  case "th":
                      switch (i[0].className) {
                          case "switch":
                              this.showMode(1);
                              break;
                          case "prev":
                          case "next":
                              var r = a.modes[this.viewMode].navStep * ("prev" === i[0].className ? -1 : 1);
                              switch (this.viewMode) {
                                  case 0:
                                      this.viewDate = this.moveHour(this.viewDate, r);
                                      break;
                                  case 1:
                                      this.viewDate = this.moveDate(this.viewDate, r);
                                      break;
                                  case 2:
                                      this.viewDate = this.moveMonth(this.viewDate, r);
                                      break;
                                  case 3:
                                  case 4:
                                      this.viewDate = this.moveYear(this.viewDate, r)
                              }
                              this.fill(), this.element.trigger({
                                  type: i[0].className + ":" + this.convertViewModeText(this.viewMode),
                                  date: this.viewDate,
                                  startDate: this.startDate,
                                  endDate: this.endDate
                              });
                              break;
                          case "clear":
                              this.reset(), this.autoclose && this.hide();
                              break;
                          case "today":
                              var o = new Date;
                              (o = n(o.getFullYear(), o.getMonth(), o.getDate(), o.getHours(), o.getMinutes(), o.getSeconds(), 0)) < this.startDate ? o = this.startDate : o > this.endDate && (o = this.endDate), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(o), this.fill(), this.autoclose && this.hide()
                      }
                      break;
                  case "span":
                      if (!i.is(".disabled")) {
                          var s = this.viewDate.getUTCFullYear(),
                              l = this.viewDate.getUTCMonth(),
                              u = this.viewDate.getUTCDate(),
                              c = this.viewDate.getUTCHours(),
                              h = this.viewDate.getUTCMinutes(),
                              d = this.viewDate.getUTCSeconds();
                          if (i.is(".month") ? (this.viewDate.setUTCDate(1), l = i.parent().find("span").index(i), u = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(l), this.element.trigger({
                                  type: "changeMonth",
                                  date: this.viewDate
                              }), this.viewSelect >= 3 && this._setDate(n(s, l, u, c, h, d, 0))) : i.is(".year") ? (this.viewDate.setUTCDate(1), s = parseInt(i.text(), 10) || 0, this.viewDate.setUTCFullYear(s), this.element.trigger({
                                  type: "changeYear",
                                  date: this.viewDate
                              }), this.viewSelect >= 4 && this._setDate(n(s, l, u, c, h, d, 0))) : i.is(".hour") ? (c = parseInt(i.text(), 10) || 0, (i.hasClass("hour_am") || i.hasClass("hour_pm")) && (12 === c && i.hasClass("hour_am") ? c = 0 : 12 !== c && i.hasClass("hour_pm") && (c += 12)), this.viewDate.setUTCHours(c), this.element.trigger({
                                  type: "changeHour",
                                  date: this.viewDate
                              }), this.viewSelect >= 1 && this._setDate(n(s, l, u, c, h, d, 0))) : i.is(".minute") && (h = parseInt(i.text().substr(i.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(h), this.element.trigger({
                                  type: "changeMinute",
                                  date: this.viewDate
                              }), this.viewSelect >= 0 && this._setDate(n(s, l, u, c, h, d, 0))), 0 !== this.viewMode) {
                              var f = this.viewMode;
                              this.showMode(-1), this.fill(), f === this.viewMode && this.autoclose && this.hide()
                          } else this.fill(), this.autoclose && this.hide()
                      }
                      break;
                  case "td":
                      if (i.is(".day") && !i.is(".disabled")) {
                          u = parseInt(i.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), c = this.viewDate.getUTCHours(), h = this.viewDate.getUTCMinutes(), d = this.viewDate.getUTCSeconds();
                          i.is(".old") ? 0 === l ? (l = 11, s -= 1) : l -= 1 : i.is(".new") && (11 === l ? (l = 0, s += 1) : l += 1), this.viewDate.setUTCFullYear(s), this.viewDate.setUTCMonth(l, u), this.element.trigger({
                              type: "changeDay",
                              date: this.viewDate
                          }), this.viewSelect >= 2 && this._setDate(n(s, l, u, c, h, d, 0))
                      }
                      f = this.viewMode;
                      this.showMode(-1), this.fill(), f === this.viewMode && this.autoclose && this.hide()
              }
          }
      },
      _setDate: function(t, e) {
          var n;
          e && "date" !== e || (this.date = t), e && "view" !== e || (this.viewDate = t), this.fill(), this.setValue(), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), this.element.trigger({
              type: "changeDate",
              date: this.getDate()
          }), null === t && (this.date = this.viewDate)
      },
      moveMinute: function(t, e) {
          if (!e) return t;
          var n = new Date(t.valueOf());
          return n.setUTCMinutes(n.getUTCMinutes() + e * this.minuteStep), n
      },
      moveHour: function(t, e) {
          if (!e) return t;
          var n = new Date(t.valueOf());
          return n.setUTCHours(n.getUTCHours() + e), n
      },
      moveDate: function(t, e) {
          if (!e) return t;
          var n = new Date(t.valueOf());
          return n.setUTCDate(n.getUTCDate() + e), n
      },
      moveMonth: function(t, e) {
          if (!e) return t;
          var n, i, r = new Date(t.valueOf()),
              o = r.getUTCDate(),
              a = r.getUTCMonth(),
              s = Math.abs(e);
          if (e = e > 0 ? 1 : -1, 1 === s) i = -1 === e ? function() {
              return r.getUTCMonth() === a
          } : function() {
              return r.getUTCMonth() !== n
          }, n = a + e, r.setUTCMonth(n), (n < 0 || n > 11) && (n = (n + 12) % 12);
          else {
              for (var l = 0; l < s; l++) r = this.moveMonth(r, e);
              n = r.getUTCMonth(), r.setUTCDate(o), i = function() {
                  return n !== r.getUTCMonth()
              }
          }
          for (; i();) r.setUTCDate(--o), r.setUTCMonth(n);
          return r
      },
      moveYear: function(t, e) {
          return this.moveMonth(t, 12 * e)
      },
      dateWithinRange: function(t) {
          return t >= this.startDate && t <= this.endDate
      },
      keydown: function(t) {
          if (this.picker.is(":not(:visible)")) 27 === t.keyCode && this.show();
          else {
              var e, n, i, r, o = !1;
              switch (t.keyCode) {
                  case 27:
                      this.hide(), t.preventDefault();
                      break;
                  case 37:
                  case 39:
                      if (!this.keyboardNavigation) break;
                      e = 37 === t.keyCode ? -1 : 1;
                      var a = this.viewMode;
                      t.ctrlKey ? a += 2 : t.shiftKey && (a += 1), 4 === a ? (n = this.moveYear(this.date, e), i = this.moveYear(this.viewDate, e)) : 3 === a ? (n = this.moveMonth(this.date, e), i = this.moveMonth(this.viewDate, e)) : 2 === a ? (n = this.moveDate(this.date, e), i = this.moveDate(this.viewDate, e)) : 1 === a ? (n = this.moveHour(this.date, e), i = this.moveHour(this.viewDate, e)) : 0 === a && (n = this.moveMinute(this.date, e), i = this.moveMinute(this.viewDate, e)), this.dateWithinRange(n) && (this.date = n, this.viewDate = i, this.setValue(), this.update(), t.preventDefault(), o = !0);
                      break;
                  case 38:
                  case 40:
                      if (!this.keyboardNavigation) break;
                      e = 38 === t.keyCode ? -1 : 1, a = this.viewMode, t.ctrlKey ? a += 2 : t.shiftKey && (a += 1), 4 === a ? (n = this.moveYear(this.date, e), i = this.moveYear(this.viewDate, e)) : 3 === a ? (n = this.moveMonth(this.date, e), i = this.moveMonth(this.viewDate, e)) : 2 === a ? (n = this.moveDate(this.date, 7 * e), i = this.moveDate(this.viewDate, 7 * e)) : 1 === a ? this.showMeridian ? (n = this.moveHour(this.date, 6 * e), i = this.moveHour(this.viewDate, 6 * e)) : (n = this.moveHour(this.date, 4 * e), i = this.moveHour(this.viewDate, 4 * e)) : 0 === a && (n = this.moveMinute(this.date, 4 * e), i = this.moveMinute(this.viewDate, 4 * e)), this.dateWithinRange(n) && (this.date = n, this.viewDate = i, this.setValue(), this.update(), t.preventDefault(), o = !0);
                      break;
                  case 13:
                      if (0 !== this.viewMode) {
                          var s = this.viewMode;
                          this.showMode(-1), this.fill(), s === this.viewMode && this.autoclose && this.hide()
                      } else this.fill(), this.autoclose && this.hide();
                      t.preventDefault();
                      break;
                  case 9:
                      this.hide()
              }
              if (o) this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change(), this.element.trigger({
                  type: "changeDate",
                  date: this.getDate()
              })
          }
      },
      showMode: function(t) {
          if (t) {
              var e = Math.max(0, Math.min(a.modes.length - 1, this.viewMode + t));
              e >= this.minView && e <= this.maxView && (this.element.trigger({
                  type: "changeMode",
                  date: this.viewDate,
                  oldViewMode: this.viewMode,
                  newViewMode: e
              }), this.viewMode = e)
          }
          this.picker.find(">div").hide().filter(".datetimepicker-" + a.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
      },
      reset: function() {
          this._setDate(null, "date")
      },
      convertViewModeText: function(t) {
          switch (t) {
              case 4:
                  return "decade";
              case 3:
                  return "year";
              case 2:
                  return "month";
              case 1:
                  return "day";
              case 0:
                  return "hour"
          }
      }
  };
  var r = t.fn.datetimepicker;
  t.fn.datetimepicker = function(n) {
      var r, o = Array.apply(null, arguments);
      return o.shift(), this.each(function() {
          var a = t(this),
              s = a.data("datetimepicker"),
              l = "object" == typeof n && n;
          if (s || a.data("datetimepicker", s = new i(this, t.extend({}, t.fn.datetimepicker.defaults, l))), "string" == typeof n && "function" == typeof s[n] && (r = s[n].apply(s, o)) !== e) return !1
      }), r !== e ? r : this
  }, t.fn.datetimepicker.defaults = {}, t.fn.datetimepicker.Constructor = i;
  var o = t.fn.datetimepicker.dates = {
          en: {
              days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
              months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              meridiem: ["am", "pm"],
              suffix: ["st", "nd", "rd", "th"],
              today: "Today",
              clear: "Clear"
          }
      },
      a = {
          modes: [{
              clsName: "minutes",
              navFnc: "Hours",
              navStep: 1
          }, {
              clsName: "hours",
              navFnc: "Date",
              navStep: 1
          }, {
              clsName: "days",
              navFnc: "Month",
              navStep: 1
          }, {
              clsName: "months",
              navFnc: "FullYear",
              navStep: 1
          }, {
              clsName: "years",
              navFnc: "FullYear",
              navStep: 10
          }],
          isLeapYear: function(t) {
              return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
          },
          getDaysInMonth: function(t, e) {
              return [31, a.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
          },
          getDefaultFormat: function(t, e) {
              if ("standard" === t) return "input" === e ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
              if ("php" === t) return "input" === e ? "Y-m-d H:i" : "Y-m-d H:i:s";
              throw new Error("Invalid format type.")
          },
          validParts: function(t) {
              if ("standard" === t) return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
              if ("php" === t) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
              throw new Error("Invalid format type.")
          },
          nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
          parseFormat: function(t, e) {
              var n = t.replace(this.validParts(e), "\0").split("\0"),
                  i = t.match(this.validParts(e));
              if (!n || !n.length || !i || 0 === i.length) throw new Error("Invalid date format.");
              return {
                  separators: n,
                  parts: i
              }
          },
          parseDate: function(e, r, a, s, l) {
              if (e instanceof Date) {
                  var u = new Date(e.valueOf() - 6e4 * e.getTimezoneOffset());
                  return u.setMilliseconds(0), u
              }
              if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(e) && (r = this.parseFormat("yyyy-mm-dd", s)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(e) && (r = this.parseFormat("yyyy-mm-dd hh:ii", s)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(e) && (r = this.parseFormat("yyyy-mm-dd hh:ii:ss", s)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(e)) {
                  var c, h = /([-+]\d+)([dmwy])/,
                      d = e.match(/([-+]\d+)([dmwy])/g);
                  e = new Date;
                  for (var f = 0; f < d.length; f++) switch (m = h.exec(d[f]), c = parseInt(m[1]), m[2]) {
                      case "d":
                          e.setUTCDate(e.getUTCDate() + c);
                          break;
                      case "m":
                          e = i.prototype.moveMonth.call(i.prototype, e, c);
                          break;
                      case "w":
                          e.setUTCDate(e.getUTCDate() + 7 * c);
                          break;
                      case "y":
                          e = i.prototype.moveYear.call(i.prototype, e, c)
                  }
                  return n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), 0)
              }
              d = e && e.toString().match(this.nonpunctuation) || [], e = new Date(0, 0, 0, 0, 0, 0, 0);
              var p, g, m, v = {},
                  y = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"],
                  b = {
                      hh: function(t, e) {
                          return t.setUTCHours(e)
                      },
                      h: function(t, e) {
                          return t.setUTCHours(e)
                      },
                      HH: function(t, e) {
                          return t.setUTCHours(12 === e ? 0 : e)
                      },
                      H: function(t, e) {
                          return t.setUTCHours(12 === e ? 0 : e)
                      },
                      ii: function(t, e) {
                          return t.setUTCMinutes(e)
                      },
                      i: function(t, e) {
                          return t.setUTCMinutes(e)
                      },
                      ss: function(t, e) {
                          return t.setUTCSeconds(e)
                      },
                      s: function(t, e) {
                          return t.setUTCSeconds(e)
                      },
                      yyyy: function(t, e) {
                          return t.setUTCFullYear(e)
                      },
                      yy: function(t, e) {
                          return t.setUTCFullYear(2e3 + e)
                      },
                      m: function(t, e) {
                          for (e -= 1; e < 0;) e += 12;
                          for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) {
                              if (isNaN(t.getUTCMonth())) return t;
                              t.setUTCDate(t.getUTCDate() - 1)
                          }
                          return t
                      },
                      d: function(t, e) {
                          return t.setUTCDate(e)
                      },
                      p: function(t, e) {
                          return t.setUTCHours(1 === e ? t.getUTCHours() + 12 : t.getUTCHours())
                      },
                      z: function() {
                          return l
                      }
                  };
              if (b.M = b.MM = b.mm = b.m, b.dd = b.d, b.P = b.p, b.Z = b.z, e = n(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()), d.length === r.parts.length) {
                  f = 0;
                  for (var x = r.parts.length; f < x; f++) {
                      if (p = parseInt(d[f], 10), m = r.parts[f], isNaN(p)) switch (m) {
                          case "MM":
                              g = t(o[a].months).filter(function() {
                                  var t = this.slice(0, d[f].length);
                                  return t === d[f].slice(0, t.length)
                              }), p = t.inArray(g[0], o[a].months) + 1;
                              break;
                          case "M":
                              g = t(o[a].monthsShort).filter(function() {
                                  var t = this.slice(0, d[f].length),
                                      e = d[f].slice(0, t.length);
                                  return t.toLowerCase() === e.toLowerCase()
                              }), p = t.inArray(g[0], o[a].monthsShort) + 1;
                              break;
                          case "p":
                          case "P":
                              p = t.inArray(d[f].toLowerCase(), o[a].meridiem)
                      }
                      v[m] = p
                  }
                  var w;
                  for (f = 0; f < y.length; f++)(w = y[f]) in v && !isNaN(v[w]) && b[w](e, v[w])
              }
              return e
          },
          formatDate: function(e, n, i, r, s) {
              if (null === e) return "";
              var l;
              if ("standard" === r) l = {
                  t: e.getTime(),
                  yy: e.getUTCFullYear().toString().substring(2),
                  yyyy: e.getUTCFullYear(),
                  m: e.getUTCMonth() + 1,
                  M: o[i].monthsShort[e.getUTCMonth()],
                  MM: o[i].months[e.getUTCMonth()],
                  d: e.getUTCDate(),
                  D: o[i].daysShort[e.getUTCDay()],
                  DD: o[i].days[e.getUTCDay()],
                  p: 2 === o[i].meridiem.length ? o[i].meridiem[e.getUTCHours() < 12 ? 0 : 1] : "",
                  h: e.getUTCHours(),
                  i: e.getUTCMinutes(),
                  s: e.getUTCSeconds(),
                  z: s
              }, 2 === o[i].meridiem.length ? l.H = l.h % 12 == 0 ? 12 : l.h % 12 : l.H = l.h, l.HH = (l.H < 10 ? "0" : "") + l.H, l.P = l.p.toUpperCase(), l.Z = l.z, l.hh = (l.h < 10 ? "0" : "") + l.h, l.ii = (l.i < 10 ? "0" : "") + l.i, l.ss = (l.s < 10 ? "0" : "") + l.s, l.dd = (l.d < 10 ? "0" : "") + l.d, l.mm = (l.m < 10 ? "0" : "") + l.m;
              else {
                  if ("php" !== r) throw new Error("Invalid format type.");
                  (l = {
                      y: e.getUTCFullYear().toString().substring(2),
                      Y: e.getUTCFullYear(),
                      F: o[i].months[e.getUTCMonth()],
                      M: o[i].monthsShort[e.getUTCMonth()],
                      n: e.getUTCMonth() + 1,
                      t: a.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()),
                      j: e.getUTCDate(),
                      l: o[i].days[e.getUTCDay()],
                      D: o[i].daysShort[e.getUTCDay()],
                      w: e.getUTCDay(),
                      N: 0 === e.getUTCDay() ? 7 : e.getUTCDay(),
                      S: e.getUTCDate() % 10 <= o[i].suffix.length ? o[i].suffix[e.getUTCDate() % 10 - 1] : "",
                      a: 2 === o[i].meridiem.length ? o[i].meridiem[e.getUTCHours() < 12 ? 0 : 1] : "",
                      g: e.getUTCHours() % 12 == 0 ? 12 : e.getUTCHours() % 12,
                      G: e.getUTCHours(),
                      i: e.getUTCMinutes(),
                      s: e.getUTCSeconds()
                  }).m = (l.n < 10 ? "0" : "") + l.n, l.d = (l.j < 10 ? "0" : "") + l.j, l.A = l.a.toString().toUpperCase(), l.h = (l.g < 10 ? "0" : "") + l.g, l.H = (l.G < 10 ? "0" : "") + l.G, l.i = (l.i < 10 ? "0" : "") + l.i, l.s = (l.s < 10 ? "0" : "") + l.s
              }
              e = [];
              for (var u = t.extend([], n.separators), c = 0, h = n.parts.length; c < h; c++) u.length && e.push(u.shift()), e.push(l[n.parts[c]]);
              return u.length && e.push(u.shift()), e.join("")
          },
          convertViewMode: function(t) {
              switch (t) {
                  case 4:
                  case "decade":
                      t = 4;
                      break;
                  case 3:
                  case "year":
                      t = 3;
                      break;
                  case 2:
                  case "month":
                      t = 2;
                      break;
                  case 1:
                  case "day":
                      t = 1;
                      break;
                  case 0:
                  case "hour":
                      t = 0
              }
              return t
          },
          headTemplate: '<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',
          headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
          contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
          footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
      };
  a.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + a.headTemplate + "<tbody></tbody>" + a.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + "</table></div></div>", a.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + a.headTemplateV3 + "<tbody></tbody>" + a.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + "</table></div></div>", t.fn.datetimepicker.DPGlobal = a, t.fn.datetimepicker.noConflict = function() {
      return t.fn.datetimepicker = r, this
  }, t(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(e) {
      var n = t(this);
      n.data("datetimepicker") || (e.preventDefault(), n.datetimepicker("show"))
  }), t(function() {
      t('[data-provide="datetimepicker-inline"]').datetimepicker()
  })
}), 

    $(document).ready(function() {
    $(".burgerBtnGuide").on("click", function() {
      $("div.sidebarPanduan").addClass("show"), $(this).toggleClass("change"), $("section.panduan .overlay").addClass("show")
  }),
    $(".burgerBtn").on("click", function() {
      $(".sidebar1,.sidebar2").toggleClass("show"), $(this).toggleClass("change"), $(".overlay").addClass("show")
  }), $(".close-side").click(function() {
      $(".sidebar1").removeClass("show"), $(".overlay").removeClass("show")
  }), $("section.panduan .close-side").click(function() {
    $("div.sidebarPanduan").removeClass("show"), $("section.panduan .overlay").removeClass("show")
  }),
  $(".input-kinerja .close-side").click(function() {
      $(".sidebar1, .sidebar2").removeClass("show")
  }), $("#myTab a").on("click", function(t) {
      t.preventDefault(), $(this).tab("show")
  }), $(".datepicker").datepicker(), $(function() {
      var t = $(".menu .listItems"),
          e = $(".main-content .nextItem"),
          n = ($(".main-content .detailItem"), $(".main-content .prevItem"));
      t.map(function(i) {
          0 === i && ($(this).addClass("active"), e.click(function() {
              (i += 1) >= t.length && (i = 0), $(t).removeClass("active show"), $(t[i]).addClass("active show"), $(t).attr("aria-selected", "false"), $(t[i]).attr("aria-selected", "true")
          }), n.click(function() {
              (i -= 1) < 0 && (i = 0), $(t).removeClass("active"), $(t[i]).addClass("active"), $(t).attr("aria-selected", "false"), $(t[i]).attr("aria-selected", "true")
          }))
      }), $(function() {
          var t = $(".penilaian-etika .menu .listItems"),
              e = $(".penilaian-etika .main-content .nextItem"),
              n = $(".penilaian-etika .main-content .detailItem"),
              i = $(".penilaian-etika .main-content .prevItem");
          t.map(function(n) {
              0 === n && ($(this).addClass("active"), e.click(function() {
                  (n += 1) >= t.length && (n = 0), $(t).removeClass("active show"), $(t[n]).addClass("active show"), $(t).attr("aria-selected", "false"), $(t[n]).attr("aria-selected", "true")
              }), i.click(function() {
                  (n -= 1) < 0 && (n = 0), $(t).removeClass("active"), $(t[n]).addClass("active"), $(t).attr("aria-selected", "false"), $(t[n]).attr("aria-selected", "true")
              }))
          }), n.map(function(t) {
              0 === t && ($(this).addClass("active"), e.click(function() {
                  (t += 1) >= n.length && (t = 0), console.log(t), $(n).removeClass("active"), $(n[t]).addClass("active show")
              }), i.click(function() {
                  (t -= 1) < 0 && (t = 0), console.log(t), $(n).removeClass("active"), $(n[t]).addClass("active")
              }))
          })
      })
  })
}), $(function() {
  var t = $(".rekap-bulanan .menu .listItems"),
      e = $(".rekap-bulanan .main-content .nextItem"),
      n = $(".rekap-bulanan .main-content .detailItem"),
      i = $(".rekap-bulanan .main-content .prevItem");
  t.map(function(n) {
      0 === n && ($(this).addClass("active"), e.click(function() {
          (n += 1) >= t.length && (n = 0), $(t).removeClass("active show"), $(t[n]).addClass("active show"), $(t).attr("aria-selected", "false"), $(t[n]).attr("aria-selected", "true"), console.log(t)
      }), i.click(function() {
          (n -= 1) < 0 && (n = 0), $(t).removeClass("active"), $(t[n]).addClass("active"), $(t).attr("aria-selected", "false"), $(t[n]).attr("aria-selected", "true")
      }))
  }), n.map(function(t) {
      0 === t && ($(this).addClass("active"), e.click(function() {
          (t += 1) >= n.length && (t = 0), console.log(t), $(n).removeClass("active"), $(n[t]).addClass("active show")
      }), i.click(function() {
          (t -= 1) < 0 && (t = 0), console.log(t), $(n).removeClass("active"), $(n[t]).addClass("active")
      }))
  })
}), $(function() {
  var t = $(".penilaian-kinerja .menu .listItems"),
      e = $(".penilaian-kinerja .main-content .nextItem"),
      n = $(".penilaian-kinerja .main-content .detailItem"),
      i = $(".penilaian-kinerja .main-content .prevItem");
  t.map(function(n) {
      0 === n && ($(this).addClass("active"), e.click(function() {
          (n += 1) >= t.length && (n = 0), $(t).removeClass("active show"), $(t[n]).addClass("active show"), $(t).attr("aria-selected", "false"), $(t[n]).attr("aria-selected", "true"), console.log(t)
      }), i.click(function() {
          (n -= 1) < 0 && (n = 0), $(t).removeClass("active"), $(t[n]).addClass("active"), $(t).attr("aria-selected", "false"), $(t[n]).attr("aria-selected", "true")
      }))
  }), n.map(function(t) {
      0 === t && ($(this).addClass("active"), e.click(function() {
          (t += 1) >= n.length && (t = 0), console.log(t), $(n).removeClass("active"), $(n[t]).addClass("active show")
      }), i.click(function() {
          (t -= 1) < 0 && (t = 0), console.log(t), $(n).removeClass("active"), $(n[t]).addClass("active")
      }))
  })
}), $(window).on("load", function() {
  $(".main-content").addClass("show"), $("body").attr("class", this.localStorage.getItem("dark-mode")), $("#toggle-switch").attr("checked", this.localStorage.getItem("checked"))
}), $("#toggle-switch").change(function() {
  this.checked ? darkmode() : 1 != this.checked && ($("#toggle-switch").attr("checked", ""), $("#toggle-switch").removeAttr("checked"), $("body").removeClass("dark-mode"), localStorage.clear(), localStorage.removeItem("dark-mode"))
}), $(".btn-detail").click(function() {
  $(".modal-overlay").addClass("show")
}), $(document).ready(function() {
  $(".nav-top #user-profile").click(function(t) {
      t.stopPropagation(), $(".profile").toggleClass("show")
  })
}),
$(document).ready(function() {
  $(".nav-top #user-profile").click(function(t) {
      t.stopPropagation(), $("section div.overlayProfile").addClass("show")
  })
}),
$(document).ready(function() {
    $("section div.overlayProfile").click(function(t) {
        $(this).removeClass("show")
    })
  }),
$(document).ready(function() {
  $("section div.closeProfile").click(function(t) {
      t.stopPropagation(), $(".profile").removeClass("show"),
      t.stopPropagation(), $("section div.overlayProfile").removeClass("show")
  })
}), 
$(document).ready(function() {
    $(".btn-changePassword").click(function(e) {
        e.preventDefault(), $("div.dataForm").addClass("change"),
        $("div.formChangePassword").addClass("change")
        
    })
  }),
  $(document).ready(function() {
    $(".btn-cancelChange").click(function(e) {
        e.preventDefault(), $("div.formChangePassword").removeClass("change"),
        $("div.dataForm").removeClass("change")
        
    })
  }),
$(document).on("click", function(t) {
  $(t.target).closest(".profile").length || $(".profile").removeClass("show")
}), $(".modal-overlay .close").click(function() {
  $(".modal-overlay").removeClass("show")
}), $("#date-rekap").datepicker({
  format: "MM yyyy",
  viewMode: "months",
  minViewMode: "months",
  autoClose: !0
});
var slideIndex = 1;

function plusSlides(t) {
  showSlides(slideIndex += t)
}

function showSlides(t) {
  var e, n = document.getElementsByClassName("mySlides");
  for (t > n.length && (slideIndex = 1), t < 1 && (slideIndex = n.length), e = 0; e < n.length; e++) n[e].style.display = "none";
  n[slideIndex - 1].style.display = "block"
}
showSlides(slideIndex);